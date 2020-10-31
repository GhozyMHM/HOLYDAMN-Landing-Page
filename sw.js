var CACHE_NAME = 'holydamn-cache-v1';
var urlsToCache = [
    '/',
    'index.php',
    'Style/style.css',
    'Style/animate.css',
    'Style/mobirise-icons/mobirise-icons.css',
    'Bootstrap/css/bootstrap.min.css',
    'Bootstrap/js/bootstrap.min.js',
    'Style/swiper.min.css',
    'Style/owl.carousel.min.js',
    'JS/swiper.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://kit.fontawesome.com/9fb210ee5d.js'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            cache.addAll(urlsToCache.map(function (urlsToCache) {
                return new Request(urlsToCache, {
                    mode: 'no-cors'
                });
            })).then(function () {
                console.log('All resources have been fetched and cached.');
            });
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            // Cache hit - return response
            if (response) {
                return response;
            }

            return fetch(event.request).then(
                function (response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // IMPORTANT: Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function (cache) {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }
            );
        }).catch(function () {
            // If both fail, show a generic fallback:
            return caches.match('/offline.html');
            // However, in reality you'd have many different
            // fallbacks, depending on URL & headers.
            // Eg, a fallback silhouette image for avatars.
        })
    );
});

self.addEventListener('activate', function (event) {

    var cacheAllowlist = CACHE_NAME;

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheAllowlist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});