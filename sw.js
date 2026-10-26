// STERN | ניהול טכנאים | service worker מינימלי, נדרש כדי שהטלפון יציע להתקין את האתר כאפליקציה.
// הוא לא שומר שום מידע ולא נוגע בבקשות לשרת.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request));
});
