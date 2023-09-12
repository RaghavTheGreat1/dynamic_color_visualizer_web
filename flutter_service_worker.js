'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "921ede945f42a6d0cccb8d158f3b0627",
"index.html": "54e449a859e200a66f741a20f71a0a57",
"/": "54e449a859e200a66f741a20f71a0a57",
"main.dart.js": "722d1fea7da5dafc6578ff663206bc1b",
"flutter.js": "0b19a3d1d54c58174c41cd35acdd9388",
"favicon.png": "15a74414d8e56c8a2607d994cc6e32bb",
"icons/Icon-192.png": "a36b8bea92c7ad2b496262ea605fc320",
"icons/Icon-maskable-192.png": "a36b8bea92c7ad2b496262ea605fc320",
"icons/Icon-maskable-512.png": "72084a0edf95b7c939bd0525074b995d",
"icons/Icon-512.png": "72084a0edf95b7c939bd0525074b995d",
"manifest.json": "1d97246706d55e8feda950e68f277e49",
".git/config": "6b7b130b02d903fa9dc7f9a7042c775d",
".git/objects/61/80a81796eb575cf97280a2017dc057a20033dc": "0b1bbca669aca9f510f6630194bdee0b",
".git/objects/95/6b7d1f4ba53b18a349e2645c23fd8b7a48b5cb": "8bf03aaed78c0ed19a33d7601e0ea1ca",
".git/objects/92/c830d48c3608111758ed5e4d3c58f9422ab154": "6b937214f5c46e8d26ed84866383ec07",
".git/objects/50/e4976e2b8be1488085e32cc3e4968ee20531fe": "4527ffab1a1d54031fb8502950359782",
".git/objects/03/7a7815b1699027c23b79fdbece6c418d339473": "cf099e43d93cf1582f2aa92ceef569c4",
".git/objects/03/d280a5bb6b2723a200c066ae392e0156cea877": "e201c8b9c2e756c24e034cc09537a7e8",
".git/objects/9e/aa69942a3c0326fd224cbb8e8c1a5345415681": "abb7209642fa4989897bbc5bb07c6222",
".git/objects/04/01918b744bb5f44b6453402d4335b60d8c66a2": "dfc3339f8fd637569951e0e425ed484c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/0b/c13aeb10f16eec98ecb16216a72286175bce33": "224989216b922ca2cc9b42cc515fb368",
".git/objects/94/7aa6d45696b76cff01c51f0e8e1f295ba4b971": "276cf7f669889361cc594160dcf07e38",
".git/objects/0e/ef90086f14997bd47239938af87652f4f75db0": "b99506ef265c0d4993996295e26de0cd",
".git/objects/0e/9cbb7d5c4736744dc6f3b3a01a2a18c3e0cc95": "02dfe301f3808400753b4074747271fc",
".git/objects/33/2806eefdb4df16ac8cc8c67855a48125d61d08": "2f07465592467fbf16922b91fa686317",
".git/objects/05/bd7ee48e8d76198f562946e7b1aa16aed0c58c": "2d098836e7954854fcd3ef0e45bfe465",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/b5/e6c4c91d3686eda521ce90c46483d49cb5dc60": "1708463667413ee63b42c1f13ceb4bb3",
".git/objects/b2/df3f7f5e259bd3923d0aacb0b5a292919caba3": "1ba76bfd257440cc323183fc68a1bb02",
".git/objects/ad/7688785096e98567be8f73402961b55e6b75e4": "3a80321c51e6b751b9d8c07aced42e33",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/3595f2e337d944b99748b043fde9f2d09eb047": "e5ded671039f112a0534537f1a50bcf3",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/a2/e9e16183bf67589810e2af78ff6a3aa71058f2": "0873c70309be72f51b6ef97be04e2c53",
".git/objects/d1/02f6d45aae8bdbd7fccc9856741ae0ea2699ce": "a6ed271469187ee5cae391421158447c",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/ae/d53f4fd62c83e2ca58e46d6cbde4833573ec6d": "f881100985ba0a898f38d834df4a8b60",
".git/objects/ab/5f4f4e40256fe573d49e20e6485a5b30c74978": "7074ff01fa7dbb513aad14a33611c48a",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/c7/5537b41b200590d548e081c61899463abeefb5": "c4c99865a95bbf2265056278223ffc3e",
".git/objects/c0/fc33481971af024436066f30b14dadf1d8c27a": "25900016123302041297cc769600d3ed",
".git/objects/fc/ddaebc196da4318e50c1af97eb3a6e15e38d50": "e36c975e88a0df069a14b7e6418456ad",
".git/objects/fc/a5233573d67cd32b5f7636ad8e54bf8f9f7dbe": "08a9999a633ecd05f952da6384512b2d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f5/bdd12b946ca08b393ae70d080ade6d31f84e9a": "1f90480036e86016867923cfa4b4258b",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/ec/62452fa06572b4aee03c1ce8c5c101f4622745": "67fad1814b1be9bd3c8850645242a1a0",
".git/objects/27/61a109d2514043adfd2a9ea81435b21a668eac": "bdc41dbaa52a966cd73cd266a796c219",
".git/objects/11/2fb723ddeab75269b5dcae56808b395c5fb638": "38b2e12e54d480081a53bdef3cd604c1",
".git/objects/16/b08491be06c2386d8fa5c246ee1d694bf6d21f": "033127c63b452ff496f83880f697dd17",
".git/objects/87/fa0de654e527cbbec463b0a67123c3b177b4bf": "a732564746d0364ada5a6686120e988a",
".git/objects/74/28c3a72690e276a88b0ac51f3b6079e9a223c4": "20c82833709335a82e04fb1c08909e3d",
".git/objects/28/1094f8da03a262d5ebbc6a2ff4a80a3bc6c2ef": "29b914b367c7d9be70026f3b96f496d9",
".git/objects/28/d511d489810e5d850bbd0f2f020636dcd6078e": "0525aa67a8f4de62cd364e4579d17320",
".git/objects/17/8cbc9650cb718cbff220dac7a4980d03abbc44": "6f160b2ebb4609a30ca02dd04fca357e",
".git/objects/4c/ddfdc38d2f97f0d9c516bff1474e4eccb3129d": "a5a475c12cb34a7e8fe372d816d2bbe8",
".git/objects/21/86af93628a643a07afbcc88e45027d78227903": "9ec3f97f7ad04c10bde8f6be1abb4f27",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/65/f8b7d7e71819faceff17fbb04406bcd1cf68a7": "e7788d5be733d0b9867fa323a8da28f3",
".git/objects/96/a9d6ac32164628345f8398f82eaade53af50b9": "be6b75b968ffd98d80f2b18fedd5aba0",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5b/099e6ef76fd383eb3760b45c0cae1a4d400774": "a7a88fd846338c763e866453fc009f72",
".git/objects/08/23d993fda0551edfe04bab8441b3f043599c0d": "7369daea92ec8def03827aa6960d99a6",
".git/objects/06/78ffa0a15312292812271c7740c3c311460d9e": "ab48e4b03776a52b25b719e0044172c1",
".git/objects/6c/7415042a15f3c2069c6c4303c262db0d520c93": "5689541232b682db64b52d8aaa057489",
".git/objects/39/407ab747af22c9e8cafc982a3515fabf20990a": "a3450aebe9cd0aab2d308012169cd49d",
".git/objects/0f/9f737de4189d6662859d7e665c077019c3674c": "78af546f18dda5fae67403ceecf3481b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/a58dfd025557353e74a47d49e59ea94cde4118": "e7cedbcb7ea1722536437798b870a263",
".git/objects/b8/dcc1aa04232db37c3e70ba6e30ac95cb662a7c": "47ac0479968d79253d76d70881a8887c",
".git/objects/b6/b0673dcb7429ae74d4f989cb5bdea1d24777a3": "121a56ba4549dab7a894c12ac453701a",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b0/5a540a0bba68bb4dfb84da19a524caf9be6dbe": "c9162ea861ae34d5582ea926e96c2bee",
".git/objects/a6/1e82a995eaf2000e80f47f32f4de655265e259": "f1ebb050de9c5f314116745a333d3ba7",
".git/objects/a1/7c2c7099ec144c0539e4b2b60d5c997999e1c2": "4c24564d5ef246d5c1892e37bb40d648",
".git/objects/e1/b6ea1213d46f70fc17d53a2dab50bddccad288": "41010724b6d4112c6eb962df1c3d263f",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/096fdf8e3e805a5055da65865116a0f9f08c64": "55b218288a152d354e96a69a9d4094fe",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f1/841f6fb2fbed425f03ac4f40850dcd07c9d9d1": "bf9ee9580e750255eeecb9dc557cc030",
".git/objects/f1/abecace9fdad24e07e7ece31ffbcb46607d62c": "d5381e98d92a5d4bc6c759c464ab65eb",
".git/objects/ce/bb4d04aa83ef8b83b9d1abaed2d7f327031fc3": "489d286b77ddd8911b7ae34e199f1b86",
".git/objects/ce/cc008a4a0fec471670efe0f01073fd70db0fbb": "781b69c5c84e3a475dffed7f860724c3",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/ca37cba7f0ac429604fa1b6a88356433cb2c39": "cdcb89ac24edef85d2c9293a03c7988b",
".git/objects/41/9b7c51beb8dc4ea8a05fb6c01b528b3362dd8a": "d3948454fe4972a2f7440b5747bd17e3",
".git/objects/83/f68cec92c272b3d7fc8c60976da8308e62b41f": "0c8604a0f7284cfa3cd71dc2d82ba971",
".git/objects/77/0c948756aeab21640db3cff7754ed8706bc2e0": "c733deef6cf75bcd927cb363a708440d",
".git/objects/4a/07de48b107e7043bd0b4c144fa3a218f72ae77": "08a9a808b0e903fff8d349aa7ca99943",
".git/objects/15/086c143a4c3abf5c07acad2216eaf38eafa2fc": "0a997efc03553f818b0071a1717a9b09",
".git/objects/71/8a70e2d263f4e55e53cac650f4405f4915d01f": "c4c51dd505f0d1a6337b9793ff516639",
".git/objects/78/31f8b1ac3c4bdb4812fe0e1b54b5032fedd92e": "9c8c79e4e8cd9ecb00a96597c4234ef9",
".git/objects/8b/fd97c07f1a5a2689106ba92efae084f8d1e851": "7dab93e8695d53f0c209bc31d6deb9ab",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/8e/c8f7e29036be8b2a537fd06283218c9a834ea3": "219bffd931d5b7f9667b8db44147debd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "38f899a38e9aa92a77b1d15af1a55036",
".git/logs/refs/heads/main": "38f899a38e9aa92a77b1d15af1a55036",
".git/logs/refs/remotes/origin/main": "18ec4fd4f5006d7b54a6425beb0e9a98",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "036a2c799812d412f31fdea529233e36",
".git/refs/remotes/origin/main": "036a2c799812d412f31fdea529233e36",
".git/index": "d00df0ce897bd08daada3e4472dffba2",
".git/COMMIT_EDITMSG": "50f399bd734aa4d605a10310cb8128cc",
".git/FETCH_HEAD": "7857882a05fb17bbcf5d1d307a09d2de",
"assets/AssetManifest.json": "cb3ae017a90ad0f7bb839573fac6918a",
"assets/NOTICES": "a4b834ae30ab31e25b4b95cf2080c3f0",
"assets/FontManifest.json": "08c2a268a8ca1751181968354ad85639",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/unicons/icons/UniconsLine.ttf": "8924ce5cafaa7c12e593a2ef8478122f",
"assets/packages/unicons/icons/UniconsSolid.ttf": "580e5390f4d0c77fa9e8115af69e41c7",
"assets/packages/unicons/icons/UniconsThinline.ttf": "b9ac88a304738945c1b1fa4c168a14b9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "7ef0d499b10bd41d28233bebcbfdbe35",
"assets/fonts/MaterialIcons-Regular.otf": "79ebb35a2dfa4f02a2893b2a06e681cc",
"assets/assets/icon/icon.png": "e09e036bdce98475ae7c5a41cdfdfaa3",
"assets/assets/icon/logo.png": "eb9883cf8e00018474f4adfe5c6b89a6",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "c3803dbb1ac015d00c055bea11adb934",
"canvaskit/chromium/canvaskit.js": "2236901a15edcdf16e2eaf18ea7a7415",
"canvaskit/chromium/canvaskit.wasm": "addd330d70d04918ab2059efeba5105f",
"canvaskit/canvaskit.js": "7c4a2df28f03b428a63fb10250463cf5",
"canvaskit/canvaskit.wasm": "f93cce574798cbc3f46e44765b523058",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
