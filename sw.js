if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const a=e=>r(e,o),d={module:{uri:o},exports:c,require:a};s[o]=Promise.all(n.map((e=>d[e]||a(e)))).then((e=>(i(...e),c)))}}define(["./workbox-87098c68"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"add.png",revision:"4536fdf9ad09e9fb14c585186b21d3df"},{url:"assets/index-4c4b02f8.css",revision:null},{url:"assets/index-9a946431.js",revision:null},{url:"assets/logo256-af8951a3.png",revision:null},{url:"assets/TaskNotFound-a3ec2e3a.png",revision:null},{url:"categories.png",revision:"3d804cffb15225d1b43fd4721be7fb64"},{url:"import-export.png",revision:"75d9ef93ac84d19cf5c3a22489ead8de"},{url:"index.html",revision:"ec5d82345b015ebdcb608003ce2ecbb1"},{url:"logo.svg",revision:"4386aa054e214856cf8e8bf3e9b2e40f"},{url:"logo192.png",revision:"fcbca72a681f41d6c3f629b51d9074cd"},{url:"logo256.png",revision:"f66c22751907e9d4ae31a97b0bb5a8f6"},{url:"logo384.png",revision:"b94386c4f37166a3274ebde4159f1c6d"},{url:"logo512.png",revision:"b3ae483c08f231e9dddaeb212934ae6e"},{url:"manifest.webmanifest",revision:"10df7e9383bbfb0b8ce2616fad235e8b"},{url:"profile.png",revision:"d42cd1fee714e534228494b426782a10"},{url:"registerSW.js",revision:"e2caa70d004bc2e77052e83001974843"},{url:"screenshots/1.png",revision:"cad4629f9e35c01d26750b8b4e4ce741"},{url:"screenshots/2.png",revision:"37f1a66f8be6fb2369bb7ee2158a26d8"},{url:"screenshots/3.png",revision:"f6c5983a023b31a6bdc8760defe4b20f"},{url:"screenshots/4.png",revision:"2833c821443df6e68027593daa1ff4a4"},{url:"screenshots/5.png",revision:"5a0bd7068b2ec705ad88bd65ead6c6ff"},{url:"screenshots/6.png",revision:"33830a1d1f7c3ddee2079aba31426bc7"},{url:"screenshots/EmojiSettings.png",revision:"02122db4aead250caa89999d45666b54"},{url:"screenshots/iPhone Mockup.png",revision:"a743099781d8d6b808156d7aa38d51b5"},{url:"screenshots/performance.png",revision:"cd333b203557410a62f29f0d984de069"},{url:"screenshots/ReadAloud.png",revision:"5e08459214a4b050aaa2b8ffc8f768b1"},{url:"screenshots/RecievedTask.png",revision:"6b2a5aa3b67de51f2ca796878a7a77c9"},{url:"screenshots/ShareDialog.png",revision:"7db65d9328f62bee01646aa8468389f9"},{url:"screenshots/ss1.png",revision:"5286312b40784ea87993f350b62dbc05"},{url:"screenshots/ss2.png",revision:"f907cee03e016bc2806a78253ccdf7bb"},{url:"screenshots/ss3.png",revision:"537e7ea270ff0079e320f380853eb120"},{url:"screenshots/ss4.png",revision:"73b0e79a6eed31e15d66d9e241043fe8"},{url:"screenshots/ss5.png",revision:"f62c2767c40c49fce3e1e79f1bf94709"},{url:"screenshots/ss6.png",revision:"00fb7687bb7e9aa591d87fc57607efeb"},{url:"screenshots/sspc1.png",revision:"9662534aed457be629b7223a95fe8cb3"},{url:"logo192.png",revision:"fcbca72a681f41d6c3f629b51d9074cd"},{url:"add.png",revision:"4536fdf9ad09e9fb14c585186b21d3df"},{url:"categories.png",revision:"3d804cffb15225d1b43fd4721be7fb64"},{url:"import-export.png",revision:"75d9ef93ac84d19cf5c3a22489ead8de"},{url:"logo.svg",revision:"4386aa054e214856cf8e8bf3e9b2e40f"},{url:"logo256.png",revision:"f66c22751907e9d4ae31a97b0bb5a8f6"},{url:"logo384.png",revision:"b94386c4f37166a3274ebde4159f1c6d"},{url:"logo512.png",revision:"b3ae483c08f231e9dddaeb212934ae6e"},{url:"profile.png",revision:"d42cd1fee714e534228494b426782a10"},{url:"screenshots/1.png",revision:"cad4629f9e35c01d26750b8b4e4ce741"},{url:"screenshots/2.png",revision:"37f1a66f8be6fb2369bb7ee2158a26d8"},{url:"screenshots/3.png",revision:"f6c5983a023b31a6bdc8760defe4b20f"},{url:"screenshots/4.png",revision:"2833c821443df6e68027593daa1ff4a4"},{url:"screenshots/5.png",revision:"5a0bd7068b2ec705ad88bd65ead6c6ff"},{url:"screenshots/6.png",revision:"33830a1d1f7c3ddee2079aba31426bc7"},{url:"screenshots/EmojiSettings.png",revision:"02122db4aead250caa89999d45666b54"},{url:"screenshots/ReadAloud.png",revision:"5e08459214a4b050aaa2b8ffc8f768b1"},{url:"screenshots/RecievedTask.png",revision:"6b2a5aa3b67de51f2ca796878a7a77c9"},{url:"screenshots/ShareDialog.png",revision:"7db65d9328f62bee01646aa8468389f9"},{url:"screenshots/iPhone Mockup.png",revision:"a743099781d8d6b808156d7aa38d51b5"},{url:"screenshots/performance.png",revision:"cd333b203557410a62f29f0d984de069"},{url:"screenshots/ss1.png",revision:"5286312b40784ea87993f350b62dbc05"},{url:"screenshots/ss2.png",revision:"f907cee03e016bc2806a78253ccdf7bb"},{url:"screenshots/ss3.png",revision:"537e7ea270ff0079e320f380853eb120"},{url:"screenshots/ss4.png",revision:"73b0e79a6eed31e15d66d9e241043fe8"},{url:"screenshots/ss5.png",revision:"f62c2767c40c49fce3e1e79f1bf94709"},{url:"screenshots/ss6.png",revision:"00fb7687bb7e9aa591d87fc57607efeb"},{url:"screenshots/sspc1.png",revision:"9662534aed457be629b7223a95fe8cb3"},{url:"manifest.webmanifest",revision:"10df7e9383bbfb0b8ce2616fad235e8b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
