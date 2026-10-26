// ==============================================================================
// Service Worker for ECHO Portfolio (Fast Offline Caching & Instant Repeat Loads)
// ==============================================================================

const CACHE_NAME = 'echo-portfolio-v1.2';
const STATIC_ASSETS = [
  '/',
  '/FlexCarousel.css',
  '/flex-carousel.js',
  '/works-wheel.js',
  '/scroll-expand-media.js',
  '/experience-section.js',
  '/assets/hero_portrait.webp',
  '/assets/about_starry_castle_hq.webp',
  '/assets/about_floating_light_hq.webp'
];

// Install: Cache critical shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Pre-caching partial fail (continuing):', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate: Purge older caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network-first for HTML, Cache-first for static media & scripts
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Ignore non-GET requests or browser-extensions/analytics
  if (req.method !== 'GET' || !url.protocol.startsWith('http')) return;

  // 1. Navigation / HTML requests: Network-First (ensures fresh CMS updates)
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          if (networkRes.status === 200) {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return networkRes;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('/')))
    );
    return;
  }

  // 2. Static Assets (Images, WebP, Fonts, CSS, JS): Cache-First with background revalidation
  const isStatic = /\.(?:webp|png|jpg|jpeg|svg|css|js|mjs|woff|woff2|ttf|ico)$/i.test(url.pathname);
  if (isStatic) {
    event.respondWith(
      caches.match(req).then((cachedRes) => {
        if (cachedRes) {
          // Revalidate in background
          fetch(req).then((netRes) => {
            if (netRes && netRes.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(req, netRes));
            }
          }).catch(() => {});
          return cachedRes;
        }
        return fetch(req).then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return networkRes;
        });
      })
    );
    return;
  }

  // Default: Network with cache fallback
  event.respondWith(
    fetch(req).catch(() => caches.match(req))
  );
});
