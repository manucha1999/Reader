// ทำให้แอปเปิดได้แม้ไม่มีอินเทอร์เน็ต
// เมื่อออนไลน์จะโหลดเวอร์ชันล่าสุดเสมอ (เนื้อหาใหม่จึงขึ้นทันที) และเก็บสำเนาไว้ใช้ตอนออฟไลน์
const CACHE = "sassadee70-v15";
const CORE = ["./", "./index.html", "./content.js", "./THSarabun.ttf", "./THSarabun-Bold.ttf", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // ฟอนต์จาก Google: ใช้ของในเครื่องก่อน
  if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com") || url.hostname==="cdnjs.cloudflare.com") {
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }))
    );
    return;
  }

  if (url.origin !== location.origin) return;
  // วิดีโอ: ให้เบราว์เซอร์โหลดเอง (รองรับการเลื่อนดู/ไม่เก็บไฟล์ใหญ่ในแคช)
  if (/\.(mp4|m4v|webm)$/i.test(url.pathname) || req.headers.has("range")) return;

  // ไฟล์ของแอป: ลองโหลดจากเน็ตก่อน ถ้าไม่มีเน็ตใช้ของในเครื่อง
  e.respondWith(
    fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match("./index.html")))
  );
});
