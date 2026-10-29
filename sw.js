const C='reader-v1';
const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
const LIBS=['https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js','https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(C);await c.addAll(CORE);
  for(const u of LIBS){try{await c.put(u,await fetch(u,{mode:'no-cors'}))}catch(_){}}self.skipWaiting()})())});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==C)await caches.delete(k);await self.clients.claim()})())});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
  e.respondWith((async()=>{const c=await caches.open(C);const m=await c.match(e.request,{ignoreSearch:true});if(m)return m;
    try{const r=await fetch(e.request);if(r&&(r.ok||r.type==='opaque'))c.put(e.request,r.clone());return r}catch(err){return c.match('index.html')}})())});
