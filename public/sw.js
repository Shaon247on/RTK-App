// public/sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
  clients.claim();
  console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  // You can implement caching strategies here if needed
});
