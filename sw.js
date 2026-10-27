const V='sightkeys-1.1.10',SND='lectura-piano-sound2',F=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-192.png','icons/icon-maskable-512.png','fonts/Bravura.otf'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>Promise.all(F.map(u=>c.add(u).catch(()=>0)))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>(x.startsWith('lectura-piano-')&&x!=SND)||(x.startsWith('sightkeys-')&&x!=V)).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;const u=new URL(e.request.url);if(u.origin!=location.origin)return;/* GitHub API y otros dominios: sin caché del service worker */
if(/\/(songs|config)\.json$/i.test(u.pathname)){e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));return}
if(/\/Sound\/.+\.mp3$/i.test(new URL(e.request.url).pathname)){/* muestras de piano: primero caché, se conservan entre versiones */
e.respondWith(caches.open(SND).then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok&&res.status==200)c.put(e.request,res.clone());return res}))));return}
e.respondWith(caches.match(e.request).then(r=>{const n=fetch(e.request).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(e.request,cp))}return res}).catch(()=>r);return r||n}))});
