const CACHE_NAME = "watt-mini-v1";
const FILES_TO_CACHE = [
  "index.html",
  "vorrunde.html",
  "auslosung1.html",
  "auslosung2.html",
  "auslosung3.html",
  "auslosung4.html",
  "auslosung5.html",
  "manifest.json",
  "kofering-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
