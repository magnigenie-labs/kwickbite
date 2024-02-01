'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "98a4a0798c37c0d3aaee9e54c942ec5e",
"index.html": "a4a35d75e08c182b59bde8afd9dbbf67",
"/": "a4a35d75e08c182b59bde8afd9dbbf67",
"firebase-messaging-sw.js": "ee2f6d3506533dbaaaf96267c802a59a",
"main.dart.js": "81fd6d9483fbad23b26a6ce16767091e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"firebase_msg.js": "86dfb94b256cf370f361133ed28d443d",
"favicon.png": "df99845d3b021471e6b496a188c71bbf",
"icons/Icon-192.png": "4701a2e1ca3773851d56d5bbc5afdb4d",
"icons/Icon-maskable-192.png": "4701a2e1ca3773851d56d5bbc5afdb4d",
"icons/Icon-maskable-512.png": "df99845d3b021471e6b496a188c71bbf",
"icons/Icon-512.png": "df99845d3b021471e6b496a188c71bbf",
"manifest.json": "1d1625f6dea8e5c847a461305c274b68",
"assets/AssetManifest.json": "999ae26ac06d6fbc8a40344309c45fc9",
"assets/NOTICES": "a2d2d5baed4778370af1957560d2c0b9",
"assets/FontManifest.json": "491c326746e02dfc1c79ae94931003cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/1.5x/powered_by_google_on_non_white.png": "a0bdd851f1d00d131f005c60ed2cb16b",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/1.5x/powered_by_google_on_white.png": "c7e713340ff7ad9e1af8482ad2a71349",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/2.0x/powered_by_google_on_non_white.png": "e72d1907bf5d0f6c1153e50aa7cf7f9a",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/2.0x/powered_by_google_on_white.png": "60e8a8323a1f5c9dc59c6783d5974123",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/powered_by_google_on_non_white.png": "27efb6d97555008ec637e8c5a6833f82",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/3.0x/powered_by_google_on_non_white.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/3.0x/powered_by_google_on_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/4.0x/powered_by_google_on_non_white.png": "33ff537622b33a8a161646a7be0800d0",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/4.0x/powered_by_google_on_white.png": "cbb17d77d4436ba71593febe71599b53",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/0.75x/powered_by_google_on_non_white.png": "78b06d238cb55fd775d0faefc44448f7",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/0.75x/powered_by_google_on_white.png": "31bc81278fd5b781b342ea1e767d032e",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/powered_by_google_on_white.png": "f127e368d62ad92dacab340de5af50e8",
"assets/fonts/Poppins-ExtraLight.ttf": "f99f9d50a569dbcf72e3084ef1a43208",
"assets/fonts/Poppins-Light.ttf": "3352653dedd571bbc490c8be132b38cd",
"assets/fonts/Poppins-Medium.ttf": "a4e11dda40531debd374e4c8b1dcc7f4",
"assets/fonts/EcommerceAppUI.ttf": "32441e95479c2b6783c63b9cb415dc27",
"assets/fonts/Poppins-ExtraBold.ttf": "0e6906b2b7be194f68b8f7b7252c4f6c",
"assets/fonts/Poppins-Regular.ttf": "731a28a413d642522667a2de8681ff35",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Poppins-Bold.ttf": "7940efc40d8e3b477e16cc41b0287139",
"assets/fonts/Poppins-Black.ttf": "8971d1710cbf4c91bca1b460aec154d7",
"assets/fonts/Poppins-Thin.ttf": "735aa7d8e35b63068b9113ea2545f0c3",
"assets/fonts/Poppins-SemiBold.ttf": "e63b93dfac2600782654e2b87910d681",
"assets/assets/anim/empty_basket.json": "7ef847cd08b5f2ebe6770b24216f5263",
"assets/assets/anim/no_data_anim.json": "d2dfdf4e70b94e3503e767babc9c6be0",
"assets/assets/anim/order_placed.json": "68c96e0fd98fdd05e4ac1f0ef416c567",
"assets/assets/anim/location_anim.json": "197e1519ef25095e56c60e8ecb621ff2",
"assets/assets/anim/no_restaurant_anim.json": "84ae6ede1ca72c8f7faef58a99cb5544",
"assets/assets/image/CAR%2520PNG.png": "733105330f205d96b799985af8b0e1dd",
"assets/assets/image/website_background.png": "614a696e8a0a1cbb1e3dc98c0cd48f9e",
"assets/assets/image/imge_loader.gif": "3f899a790ab677acd5762723b7743334",
"assets/assets/image/Vizio_40_TV.png": "bdcde2ec07de6162fdb4ceb90d91487c",
"assets/assets/image/splashscreen_back.jpeg": "37c4ef90ea519ff8a95fd68e16549ff1",
"assets/assets/image/volkswagen-beetle.png": "00500abfe2d9b6e49140d46fed248039",
"assets/assets/image/Google_App_Icon.png": "3b3f3c2992a5b5dbb411d6566c7046aa",
"assets/assets/image/kwick_bite_logo_white.png": "648cca8cfe56f4588e24319369257f1a",
"assets/assets/image/location_img.jpeg": "2ba610cb15ba3255f2690af7dbba4cd8",
"assets/assets/image/OFWP%2520III.jpg": "252f44fd922eb0d1c32bd2e5cc7bb8fb",
"assets/assets/image/logo_full.png": "22506933cb71b7773027411ed788eda2",
"assets/assets/image/backImage.jpg": "a782b39a4413c20611ad9b99febf79bf",
"assets/assets/image/user_marker.png": "a4278bfa03259431348030dacb15b3bd",
"assets/assets/image/Food_Delivery_Guy_II.jpg": "a26a6afdc0d8708acf48ee58afac6502",
"assets/assets/image/img.png": "ea2bccc9423babb8ddd894629e71b09e",
"assets/assets/image/kwick_bite_logo%2520Navy.png": "755250efb8e09f5a04168739e307e6cc",
"assets/assets/image/play_store_icon.png": "3b3f3c2992a5b5dbb411d6566c7046aa",
"assets/assets/image/OFWP%2520IV.jpg": "fc043298cd21e2bce65ba12d2518bb30",
"assets/assets/image/driver_marker.png": "22597c12f5e44513bd8874c049a92cc2",
"assets/assets/image/logo.png": "4e14b740b5e1c1ebe9307d7396da79c2",
"assets/assets/image/rock-the-boat-4.png": "1c70a3c60ea19379da4342cf3796a5a0",
"assets/assets/image/google_logo.png": "d6c04fe28b4125a0d8c0c1e674cf4bd3",
"assets/assets/image/Cruise%2520Giveaway%2520II.png": "1686d85a9807f6fd4bbe46e4c8003272",
"assets/assets/image/Small_Free_iPhone_13_Pro_Mockup.png": "331386c8a2a7b1ef6b73b74c46388993",
"assets/assets/image/delivery_img.png": "c3ab34a2ab8b2343addf4043251841d4",
"assets/assets/image/OFWP%2520PNG.png": "d0f826fedc64538e7a853fde9e443b5c",
"assets/assets/image/food_back.png": "4bbe40d2a8ec6099f9eb4349ee6462f2",
"assets/assets/image/facebook.png": "8f5ce27564945d2c9a10ef827549a78c",
"assets/assets/image/app_store.png": "759f167cbc7e498094ba5739a9306cda",
"assets/assets/image/apple_store_icon.png": "4dc673cec5562ac7e368c613358e2e15",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
