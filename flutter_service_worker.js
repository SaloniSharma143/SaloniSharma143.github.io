'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d5b083c53a5d87642de16c88dbcbdc35",
"splash/img/light-2x.png": "243d35476a665b4ab3c12cbd8b196e38",
"splash/img/dark-4x.png": "cf0752329b7d7a8b1a3250b54c2ae776",
"splash/img/light-3x.png": "4af2850941fb1aee4bb024e6c86a1951",
"splash/img/dark-3x.png": "4af2850941fb1aee4bb024e6c86a1951",
"splash/img/light-4x.png": "cf0752329b7d7a8b1a3250b54c2ae776",
"splash/img/dark-2x.png": "243d35476a665b4ab3c12cbd8b196e38",
"splash/img/dark-1x.png": "bde3d209094353d563e5c210533a7ecc",
"splash/img/light-1x.png": "bde3d209094353d563e5c210533a7ecc",
"index.html": "394fd9f820a9f3b687cd995090494811",
"/": "394fd9f820a9f3b687cd995090494811",
"main.dart.js": "aa0b7642bfe49c265e69632996e58691",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ce23ae43de565a484281af7db56d9b6f",
"assets/AssetManifest.json": "550b5be1803203015c22a8792bfc7b7c",
"assets/NOTICES": "2c2607b1bdf43e5840c84b627bf260a9",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "adf5e135e71c8c4b2fc817441f72124d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "521e6e66d15f0c45de6562d98a7207db",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "82aba205fb7922a24dc20d13434bd3ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "04814f7c151001ac2c0e78d3fcc45a7f",
"assets/fonts/MaterialIcons-Regular.otf": "67ffaf231266511a9318bfbb08995adb",
"assets/assets/image-9.JPG": "893cb48c9de650b8b051880ee8bfc2ae",
"assets/assets/image-8.JPG": "3176074986ce17f5e4be949b250c7e07",
"assets/assets/splash.GIF": "8500d6541d2a4e2e5a7f2e684a8901a6",
"assets/assets/sex/narcissus-sex-pose.svg": "26fe9d0f913a5a8b8dd438f231f3a584",
"assets/assets/sex/basset-hound-sex-pose.svg": "5d7bd7ee224d2bbff68efe36699b80ac",
"assets/assets/sex/gemini-sex-pose.svg": "539d0591a427d5ef6a65e353fca7733c",
"assets/assets/sex/zeus-sex-pose.svg": "e77043c1e3f422476d068baaccf242a4",
"assets/assets/sex/captain-sex-pose.svg": "143e5636fb624d7c998360b557fb00d9",
"assets/assets/sex/italian-chandelier-sex-pose.svg": "e7cb6511492dcf284be57cbbd7369593",
"assets/assets/sex/arch-sex-pose.svg": "044e92a52572db002aa78bf3d3fda84f",
"assets/assets/sex/capricorn-sex-pose.svg": "d3cd2680b9664f903f0074d12ab12131",
"assets/assets/sex/frog-sex-pose.svg": "ea4e4b84a56c7d1327c3a4dc99f82b0f",
"assets/assets/sex/train-sex-pose.svg": "96ddca084aadd477591a8fc016002afb",
"assets/assets/sex/rose-sex-pose.svg": "ea324cb0bed4a4538f3c114428106bf9",
"assets/assets/sex/bow-sex-pose.svg": "c22c2300b3166f90f172b258df6e9ed2",
"assets/assets/sex/wall-sex-pose.svg": "bc996cde0bb8bb667ae2689cb2321bc6",
"assets/assets/sex/chair-sex-pose.svg": "d0d98b2454d27b307c08d97857292347",
"assets/assets/sex/nirvana-sex-pose.svg": "b2956532145a3d6487c37c34823f88de",
"assets/assets/sex/barbell-sex-pose-1.svg": "40b5fc5b7c9cd5989bcc2f75b6e81f83",
"assets/assets/sex/wheelbarrow-sex-pose.svg": "e66571137bd58981b3e2429a906e9eaa",
"assets/assets/sex/aphrodite-sex-pose.svg": "74d2374b29a5e4465abfa1116217149e",
"assets/assets/sex/spiderman-sex-pose.svg": "12f59a8e94887b214dced9ece8725785",
"assets/assets/sex/straddle-sex-pose.svg": "073cffd2c57a97f75399cc61f5dc5512",
"assets/assets/sex/eiffel-tower-sex-pose.svg": "0f8cefda0cb82c3448efd936f7223df6",
"assets/assets/sex/rainbow-sex-pose.svg": "bc13c9e968436551899be0c95c0799f7",
"assets/assets/sex/reverse-cowgirl-sex-pose.svg": "d10b34163c1b15c4f6d7e8d89fb2bbb5",
"assets/assets/sex/joystick-sex-pose.svg": "30ec023ff7dc48c8fa7df911dedc284f",
"assets/assets/sex/gemini-sex-pose-1.svg": "9600d65a6c69fc3d7bfdb7f8aa798f85",
"assets/assets/sex/superman-sex-pose.svg": "78cd1b2849ad819ddb9b5ca79c3e1bbd",
"assets/assets/sex/workout-sex.svg": "c0f5768326ff92f0db3c5a494802f73b",
"assets/assets/sex/cancer-sex-pose.svg": "36d4c61d7f15d8c9c9129ff1fe777695",
"assets/assets/sex/rabbit-ears-sex-pose.svg": "d759e33c4dfcf874ab8b00287a341f58",
"assets/assets/sex/pisces-sex-pose.svg": "dfcf35d7449064fb9b3fc9daa22c7d24",
"assets/assets/sex/barbell-sex-pose.svg": "f761f681677222bcbf091b499da42d5c",
"assets/assets/sex/caramel-sex-pose.svg": "50fc649e0612106fbcce215352a965ad",
"assets/assets/sex/bassed-hound-sex-pose.svg": "2dd89623dad71a30108bfab2ec3dd311",
"assets/assets/sex/cello-sex-pose.svg": "fa2673fca69ed4e9d614c3b4ea65bd65",
"assets/assets/sex/scissor-sex-pose.svg": "39627374c0a4b0fb9bc895c367f90559",
"assets/assets/sex/masturbation.svg": "ea3ad74eb17da5a05328f26368c0326c",
"assets/assets/sex/submissive-sex-pose.svg": "d96cf5d8f5858c17f0d2d45d2fc9c87c",
"assets/assets/sex/basket-sex-pose.svg": "2b82ccc3580d0edaa420d7bc8ef8405e",
"assets/assets/sex/prison-guard-sex-pose.svg": "bdcb06620ea47519da48e63d4569a83b",
"assets/assets/sex/crucifixion-sex-pose.svg": "b6ef703a577152736cb980ef914e206d",
"assets/assets/sex/whisper-sex-pose.svg": "b89625fb72313cb0c08c63929fa41f71",
"assets/assets/sex/aquarius-sex-pose.svg": "47a6b8fc48e66676a05aa497cf040924",
"assets/assets/sex/piledriver-sex-pose.svg": "b9bfa7ce47cf0556963c68182e2453db",
"assets/assets/sex/waterfall-sex-pose.svg": "a0b931b953c91b01eaa9b2273fa43a66",
"assets/assets/sex/sex-icon.svg": "30d64288ce7b295e4702b9c487f1073a",
"assets/assets/sex/angry-pirate-sex-pose.svg": "540604db614d4d671aa27c213ebea22e",
"assets/assets/sex/accordion-sex-pose.svg": "7c50b0212a00bd77ef0dda67a0fac73e",
"assets/assets/sex/london-bridge-sex-pose.svg": "d444950338db34d79824686e5715be1f",
"assets/assets/sex/dragon-sex-pose.svg": "fda07c850f9a1601384067df99aae7ce",
"assets/assets/sex/nun-sex-pose.svg": "ae37d3a69fc80a3462f70ba28fee27a7",
"assets/assets/sex/ribbon-sex-pose.svg": "7623658e3cb4e285b1ed551b9649be4e",
"assets/assets/sex/yin-yang-sex-pose.svg": "9ae2865c92a890ca5a0b17179f5c786e",
"assets/assets/sex/ecstasy-sex-pose.svg": "100b528807267874c040d1deddb27c01",
"assets/assets/sex/bud-sex-pose.svg": "aaacb4590308f83edfbcf97257ac28d8",
"assets/assets/sex/starfish-sex-pose.svg": "84495dce43e13d67e111d87b49759980",
"assets/assets/sex/spoon-sex-pose.svg": "a967ed5407198e543428ed36bf0b6587",
"assets/assets/sex/lock-sex-pose.svg": "91d576428c5c15a58ab6fde9116a93fe",
"assets/assets/image-18.JPG": "a401e2b011e29418512a5f4d8d83dcab",
"assets/assets/IMG_1603.jpeg": "d91e4ed9685e052054b2b569170f043c",
"assets/assets/image-10.JPG": "100cd6d3d9d8f76b8364ead7c81bc8d4",
"assets/assets/image-11.JPG": "5c27b5feda3a255431d6e90d53e0c78d",
"assets/assets/audio/running_home_to_you.mp3": "db43eed141f5f4253a0aae3e75308b5f",
"assets/assets/image-12.JPG": "4d056b7f0790e8db28c7d3f058c83e41",
"assets/assets/image-16.JPG": "2decf982c1f47d78c40fc0684f42d9bd",
"assets/assets/DSC01847.jpg": "cea96175b9b3bac4f9a4546a6b2f389a",
"assets/assets/icons/rupee-sign.svg": "60993e9665c3aa2c94aa1d5d645e947c",
"assets/assets/image-17.JPG": "73523f594697acbc8cff3db5f40a5678",
"assets/assets/image-15.JPG": "d8d6264d56cf462070bbd5dda80c7ea7",
"assets/assets/DSC01845.jpg": "e480204a29c9cee2fc7e91bb72b02038",
"assets/assets/lottie/love_animation.json": "f81d95089c95a0cdb82935bc953c506b",
"assets/assets/lottie/love_header.json": "f37620bcec2d0a023a665358398bbdc5",
"assets/assets/lottie/sound_wave.json": "e32f628c94624e72807a0942be978387",
"assets/assets/image-14.JPG": "16a13443f04d22fe163f3d6e3c924a64",
"assets/assets/image-13.HEIC": "f62adfef4a35f8315f3612282babccfd",
"assets/assets/image-1.JPG": "af56c83f8a6f6a001d410412aa30da2d",
"assets/assets/image-3.JPG": "540bf5f5d633bed42e474422f758ca66",
"assets/assets/DSC01835.jpg": "e526a8e4c29eed9328042926f5a3ad35",
"assets/assets/image-2.JPG": "fb0382d1dd082eee824eedff5ec214a1",
"assets/assets/image-6.JPG": "343fb8950046209f1f057396b76f9b7e",
"assets/assets/DSC01830.jpg": "1aeff17c4eb1f9e10dc078f8be97260a",
"assets/assets/image-7.JPG": "a88ac682c35baa4b2faf529c00b0998e",
"assets/assets/image-5.JPG": "705fed344b3a80f710e5ae745220400a",
"assets/assets/image-4.JPG": "f6e41ccbd3639baf503330e53f8f38ae",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
