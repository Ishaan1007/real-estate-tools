// sw.js
self.addEventListener('install', event => {
    self.skipWaiting();
  });
  
  self.addEventListener('activate', event => {
    clients.claim();
  });
  
  self.addEventListener('fetch', event => {
    // Add caching logic here if needed
  });