import html
import json
from unittest.mock import patch, MagicMock
from django.test import TestCase, Client
from django.core.cache import cache
from django.urls import reverse
from main.models import ContactMessage
from main.views import send_telegram_message, get_client_ip


class ContactSecurityTests(TestCase):
    def setUp(self):
        cache.clear()
        self.client = Client()
        self.csrf_client = Client(enforce_csrf_checks=True)
        self.contact_url = reverse('api_contact')

    def tearDown(self):
        cache.clear()

    def test_get_method_not_allowed_405(self):
        """1. Faqat POST qabul qilinishi, GET yuborilganda 405 qaytishi kerak."""
        response = self.client.get(self.contact_url)
        self.assertEqual(response.status_code, 405)
        data = response.json()
        self.assertFalse(data["success"])
        self.assertIn("Faqat POST", data["message"])

    def test_empty_fields_validation_400(self):
        """2. Bo'sh maydonlar yuborilganda 400 xatosi qaytishi kerak."""
        payloads = [
            {"name": "", "email": "test@example.com", "message": "Salom"},
            {"name": "Ali", "email": "", "message": "Salom"},
            {"name": "Ali", "email": "test@example.com", "message": "   "},
        ]
        for payload in payloads:
            response = self.client.post(
                self.contact_url,
                data=json.dumps(payload),
                content_type="application/json"
            )
            self.assertEqual(response.status_code, 400)
            data = response.json()
            self.assertFalse(data["success"])

    def test_invalid_json_format_400(self):
        """3. Noto'g'ri JSON yuborilganda 400 qaytishi kerak."""
        response = self.client.post(
            self.contact_url,
            data="bu-haqiqiy-json-emas{{{",
            content_type="application/json"
        )
        self.assertEqual(response.status_code, 400)
        data = response.json()
        self.assertFalse(data["success"])
        self.assertIn("JSON", data["message"])

    def test_field_length_limits_400(self):
        """4. Maydon uzunliklari chegaradan oshganda 400 qaytishi kerak."""
        # name > 100
        res1 = self.client.post(
            self.contact_url,
            data=json.dumps({
                "name": "A" * 101,
                "email": "test@example.com",
                "message": "Salom"
            }),
            content_type="application/json"
        )
        self.assertEqual(res1.status_code, 400)
        self.assertIn("100", res1.json()["message"])

        # email > 150
        res2 = self.client.post(
            self.contact_url,
            data=json.dumps({
                "name": "Ali",
                "email": ("a" * 140) + "@example.com",
                "message": "Salom"
            }),
            content_type="application/json"
        )
        self.assertEqual(res2.status_code, 400)
        self.assertIn("150", res2.json()["message"])

        # message > 3000
        res3 = self.client.post(
            self.contact_url,
            data=json.dumps({
                "name": "Ali",
                "email": "test@example.com",
                "message": "M" * 3001
            }),
            content_type="application/json"
        )
        self.assertEqual(res3.status_code, 400)
        self.assertIn("3000", res3.json()["message"])

    def test_invalid_email_validation_400(self):
        """5. Noto'g'ri email yuborilganda validate_email orqali 400 qaytishi kerak."""
        invalid_emails = [
            "not-an-email",
            "ali@",
            "@example.com",
            "ali@.com",
            "ali space@example.com"
        ]
        for email in invalid_emails:
            response = self.client.post(
                self.contact_url,
                data=json.dumps({
                    "name": "Ali",
                    "email": email,
                    "message": "Salom loyiha haqida"
                }),
                content_type="application/json"
            )
            self.assertEqual(response.status_code, 400)
            data = response.json()
            self.assertFalse(data["success"])
            self.assertIn("Email", data["message"])

    def test_rate_limiting_429(self):
        """6. IP bo'yicha 1 daqiqada 5 ta so'rovdan keyin 6-so'rov 429 qaytarishi kerak."""
        payload = {
            "name": "Bot Test",
            "email": "bot@example.com",
            "message": "Salom rate limit"
        }

        # Dastlabki 5 ta so'rov qabul qilinishi kerak
        for i in range(5):
            res = self.client.post(
                self.contact_url,
                data=json.dumps(payload),
                content_type="application/json"
            )
            self.assertEqual(res.status_code, 200, f"{i+1}-so'rov qabul qilinmadi")

        # 6-so'rov 429 Too Many Requests bo'lishi kerak
        res6 = self.client.post(
            self.contact_url,
            data=json.dumps(payload),
            content_type="application/json"
        )
        self.assertEqual(res6.status_code, 429)
        data = res6.json()
        self.assertFalse(data["success"])
        self.assertIn("Juda ko'p so'rov", data["message"])

    @patch('requests.post')
    def test_successful_submission_json_and_form(self, mock_telegram):
        """7. JSON va Form-data orqali muvaffaqiyatli xabar yuborish va bazada saqlanishi."""
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_telegram.return_value = mock_response

        # JSON orqali
        res_json = self.client.post(
            self.contact_url,
            data=json.dumps({
                "name": "Ozodjon",
                "email": "ozod@example.com",
                "message": "Yangi loyiha bo'yicha hamkorlik"
            }),
            content_type="application/json"
        )
        self.assertEqual(res_json.status_code, 200)
        self.assertTrue(res_json.json()["success"])
        self.assertTrue(ContactMessage.objects.filter(email="ozod@example.com").exists())

        # Form-data orqali
        res_form = self.client.post(
            self.contact_url,
            data={
                "name": "Valijon",
                "email": "vali@example.com",
                "message": "Form orqali xabar"
            }
        )
        self.assertEqual(res_form.status_code, 200)
        self.assertTrue(res_form.json()["success"])
        self.assertTrue(ContactMessage.objects.filter(email="vali@example.com").exists())

    @patch('requests.post')
    def test_html_characters_escaped_in_telegram(self, mock_telegram):
        """8. HTML va XSS belgilari Telegramga yuborilayotganda to'g'ri escape qilinishi kerak."""
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_telegram.return_value = mock_response

        dangerous_payload = {
            "name": "<script>alert('XSS')</script>",
            "email": "safe@example.com",
            "message": "Xabar: <b>qalin</b> & 'tirnoq' > < \"test\""
        }

        with self.settings(TOKEN="dummy-token-12345", CHAT_ID="123456789"):
            response = self.client.post(
                self.contact_url,
                data=json.dumps(dangerous_payload),
                content_type="application/json"
            )
        self.assertEqual(response.status_code, 200)

        # Telegramga yuborilgan payload'ni tekshiramiz
        mock_telegram.assert_called_once()
        sent_data = mock_telegram.call_args[1]["data"]
        self.assertEqual(sent_data["parse_mode"], "HTML")
        sent_text = sent_data["text"]

        # Xavfli teglar HTML entity shakliga o'tkazilgan bo'lishi kerak
        self.assertNotIn("<script>", sent_text)
        self.assertIn("&lt;script&gt;alert(&#x27;XSS&#x27;)&lt;/script&gt;", sent_text)
        self.assertIn("&lt;b&gt;qalin&lt;/b&gt;", sent_text)
        self.assertIn("&amp;", sent_text)

    def test_honeypot_bot_prevention(self):
        """9. Yashirin honeypot maydoni to'ldirilganda spam xabar bazaga saqlanmasligi kerak."""
        initial_count = ContactMessage.objects.count()
        response = self.client.post(
            self.contact_url,
            data=json.dumps({
                "name": "Spammer Bot",
                "email": "spammer@bot.com",
                "message": "Buy cheap watches at ...",
                "website": "http://spam-link.com"  # Honeypot to'ldirildi
            }),
            content_type="application/json"
        )
        self.assertEqual(response.status_code, 200)
        # Botga muvaffaqiyatli deb aldaymiz, lekin ma'lumotlar bazasida saqlanmaydi!
        self.assertEqual(ContactMessage.objects.count(), initial_count)

    def test_csrf_protection_enforced(self):
        """10. CSRF tokeni yuborilmaganda 403 Forbidden qaytishi kerak."""
        response = self.csrf_client.post(
            self.contact_url,
            data=json.dumps({
                "name": "No CSRF User",
                "email": "nocsrf@example.com",
                "message": "Test message"
            }),
            content_type="application/json"
        )
        self.assertEqual(response.status_code, 403)
