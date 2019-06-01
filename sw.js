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
    "url": "webpack-runtime-32a6a313e0e9f01241a2.js"
  },
  {
    "url": "app-cec59026df021c2610f0.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9e9df01cc83b67e1f4e9.js"
  },
  {
    "url": "index.html",
    "revision": "258404e75c548959a2975f05e4c0fe96"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7b2007868c0a1f7f0825734427a845a0"
  },
  {
    "url": "styles.d248de7439cf61f7fe81.css"
  },
  {
    "url": "component---src-templates-index-jsx-b44171560658b47d6bf8.js"
  },
  {
    "url": "styles-2cfbce11ddda91bf35d5.js"
  },
  {
    "url": "4-6c5361e02b4edb36d0dc.js"
  },
  {
    "url": "2-ea5eb07b42d9f1ae8ed0.js"
  },
  {
    "url": "1-74c9bb12191b28b9f090.js"
  },
  {
    "url": "static/d/426/path---index-6a9-AtQzmX4BDoKuCg0Rl6zmNxrKBdw.json",
    "revision": "52fee2dad8af62c5dd7a44b5049e2d38"
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