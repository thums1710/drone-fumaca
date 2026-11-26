// Service worker mínimo: permite instalar o app na tela inicial. Os dados vêm sempre ao vivo do Firestore.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
