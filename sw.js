const CACHE_NAME = "asistencia-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./credencial.html",
  "./scanner.html",
  "./html5-qrcode.min.js", // El del escáner
  "./qrcode.min.js",     
  "./manifest.json"
];

// 1. INSTALACIÓN: Guardamos los archivos en la "mochila"
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Archivos guardados en caché offline");
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. ACTIVACIÓN: Limpiamos cachés viejos si actualizas la app
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 3. INTERCEPTAR PETICIONES: Si no hay internet, usa el caché
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si el archivo está en caché, devuélvelo. Si no, búscalo en internet.
      return response || fetch(event.request);
    })
  );
});