const V='lectura-piano-v3',SND='lectura-piano-sound',F=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','Bravura.otf'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>Promise.all(F.map(u=>c.add(u).catch(()=>0)))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('lectura-piano-')&&x!=V&&x!=SND).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;
if(/\/Sound\/[^/]+\.mp3$/i.test(new URL(e.request.url).pathname)){/* muestras de piano: primero caché, se conservan entre versiones */
e.respondWith(caches.open(SND).then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok&&res.status==200)c.put(e.request,res.clone());return res}))));return}
e.respondWith(caches.match(e.request).then(r=>{const n=fetch(e.request).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(e.request,cp))}return res}).catch(()=>r);return r||n}))});
