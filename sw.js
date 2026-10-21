const C='carte-v1',F=['./','index.html','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith((async()=>{const c=await caches.open(C),hit=await c.match(e.request,{ignoreSearch:true});
const net=fetch(e.request).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin)c.put(e.request,r.clone());return r}).catch(()=>null);
if(hit){e.waitUntil(net);return hit}
return(await net)||(e.request.mode==='navigate'?c.match('index.html'):Response.error())})())});
