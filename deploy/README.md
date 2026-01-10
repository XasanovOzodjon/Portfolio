# 🚀 Portfolio Deployment Guide

## Server ma'lumotlari
- **IP:** 13.51.157.116
- **Domen:** khasanoff.uz
- **Loyiha joylashuvi:** /ubuntu/app/portfolio

## Server tayyorlash

### 1. Kerakli paketlarni o'rnatish
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install python3 python3-pip python3-venv nginx postgresql postgresql-contrib -y
```

### 2. Loyihani serverga ko'chirish
```bash
sudo mkdir -p /ubuntu/app/portfolio
sudo chown -R $USER:$USER /ubuntu/app/portfolio
git clone <your-repo-url> /ubuntu/app/portfolio
```

### 3. Virtual environment yaratish
```bash
cd /ubuntu/app/portfolio
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pip install gunicorn
```

### 4. .env faylini yaratish
```bash
nano /ubuntu/app/portfolio/.env
```

Quyidagilarni qo'shing:
```env
SECRET_KEY=your-super-secret-key-here
DEBUG=False
ALLOWED_HOSTS=khasanoff.uz,www.khasanoff.uz,13.51.157.116
CSRF_TRUSTED_ORIGINS=https://khasanoff.uz,https://www.khasanoff.uz,http://13.51.157.116

POSTGRES_DB=portfolio_db
POSTGRES_USER=portfolio_user
POSTGRES_PASSWORD=your-db-password
DB_HOST=localhost
DB_PORT=5432

TOKEN=your-telegram-bot-token
CHAT_ID=your-telegram-chat-id

STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

### 5. PostgreSQL sozlash
```bash
sudo -u postgres psql

CREATE DATABASE portfolio_db;
CREATE USER portfolio_user WITH PASSWORD 'your-db-password';
ALTER ROLE portfolio_user SET client_encoding TO 'utf8';
ALTER ROLE portfolio_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE portfolio_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
\q
```

### 6. Django migratsiyalar
```bash
cd /ubuntu/app/portfolio
source venv/bin/activate
python manage.py migrate
python manage.py collectstatic --noinput
python manage.py createsuperuser
```

### 7. Systemd service o'rnatish
```bash
sudo cp deploy/portfolio.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable portfolio
sudo systemctl start portfolio
sudo systemctl status portfolio
```

### 8. Nginx sozlash
```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/portfolio
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # Default saytni o'chirish
sudo nginx -t  # Konfiguratsiyani tekshirish
sudo systemctl restart nginx
```

### 9. Firewall sozlash
```bash
sudo ufw allow 'Nginx HTTP'
sudo ufw allow OpenSSH
sudo ufw enable
```

### 10. (Keyinchalik) SSL sertifikat olish
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d khasanoff.uz -d www.khasanoff.uz
```

---

## 🔧 Foydali buyruqlar

### Service boshqarish
```bash
sudo systemctl start portfolio    # Boshlash
sudo systemctl stop portfolio     # To'xtatish
sudo systemctl restart portfolio  # Qayta ishga tushirish
sudo systemctl status portfolio   # Holatini ko'rish
```

### Loglarni ko'rish
```bash
sudo journalctl -u portfolio -f           # Service loglari
sudo tail -f /var/log/nginx/portfolio_access.log  # Nginx access
sudo tail -f /var/log/nginx/portfolio_error.log   # Nginx errors
```

### Yangilanishlarni deploy qilish
```bash
cd /ubuntu/app/portfolio
git pull origin main
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py collectstatic --noinput
sudo systemctl restart portfolio
```

---

## ⚡ Tez deploy (bir qadamda)

Serverda quyidagilarni ketma-ket bajaring:
```bash
# Service va Nginx o'rnatish
sudo cp /ubuntu/app/portfolio/deploy/portfolio.service /etc/systemd/system/
sudo cp /ubuntu/app/portfolio/deploy/nginx.conf /etc/nginx/sites-available/portfolio
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Tekshirish va ishga tushirish
sudo nginx -t
sudo systemctl daemon-reload
sudo systemctl enable portfolio
sudo systemctl restart portfolio
sudo systemctl restart nginx
```

---

## ⚠️ Muhim eslatmalar

1. `SECRET_KEY` ni yangi generatsiya qiling:
   ```bash
   python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
   ```
2. Barcha parollarni kuchli va unikal qiling
3. SSL sertifikat olganingizdan keyin `settings.py` dagi xavfsizlik sozlamalarini yoqing
