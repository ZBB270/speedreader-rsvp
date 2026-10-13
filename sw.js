/* Hızlı Okuma — çevrimdışı çalışma katmanı.
   Uygulama dosyalarını cihazda saklar; internet yokken de açılır. */

const CACHE = 'hizliokuma-8.1';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './lib/pdf.min.js',
  './lib/pdf.worker.min.js',
  './lib/mammoth.browser.min.js',
  './lib/jszip.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      // tek bir dosya başarısız olursa kurulum tümden çökmesin
      .then(cache => Promise.allSettled(ASSETS.map(url => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(adlar => Promise.all(adlar.filter(ad => ad !== CACHE).map(ad => caches.delete(ad))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // Sayfanın kendisi: önce ağ (güncelleme hemen gelsin), olmazsa önbellek
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then(res => {
          const kopya = res.clone();
          caches.open(CACHE).then(c => c.put(req, kopya));
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Diğer dosyalar (kütüphaneler, simgeler): önce önbellek, hızlı açılış
  event.respondWith(
    caches.match(req).then(bulunan => bulunan || fetch(req).then(res => {
      const kopya = res.clone();
      caches.open(CACHE).then(c => c.put(req, kopya));
      return res;
    }))
  );
});
