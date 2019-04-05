/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-faec7846f592e29e729a.js"
  },
  {
    "url": "app-8a602cf37f87caf83e1f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-72a21ab397d40881354a.js"
  },
  {
    "url": "index.html",
    "revision": "9cb9754fdc3cfd1e97afe312c4622514"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e422a477a79d2ad40ebdd0505f6e00c7"
  },
  {
    "url": "styles.afe70bb9cf6711471ae8.css"
  },
  {
    "url": "component---src-templates-index-jsx-44b04d75c4b372fb9531.js"
  },
  {
    "url": "styles-cc630116aecbaf06dc15.js"
  },
  {
    "url": "4-f3422426fb9ef772697e.js"
  },
  {
    "url": "2-34f4bc902defa1cea12e.js"
  },
  {
    "url": "1-1adb047fbaa30a8725cb.js"
  },
  {
    "url": "static/d/866/path---index-6a9-wyeEZT2ymHyZtZe5Rwlaf6Mt9E.json",
    "revision": "f625248dc7afa50c11819f24e34227cc"
  },
  {
    "url": "static/d/604/path---offline-plugin-app-shell-fallback-a-30-c5a-BawJvyh36KKFwbrWPg4a4aYuc8.json",
    "revision": "e0f3b054b6dcf2c5a113801b73f75867"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3632db9bd34a78c20c251356814042a9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});