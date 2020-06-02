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
    "url": "webpack-runtime-14e0966c0d38c86d00bf.js"
  },
  {
    "url": "framework-ca72eda784970e1f0f5f.js"
  },
  {
    "url": "app-917cb845b33e62c353ab.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8df3d2a63c3e1c5fc40f.js"
  },
  {
    "url": "index.html",
    "revision": "9b027d59e683a0ba7e4922d7792d04ba"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c2093528a47bcae7a5146cc4f087d710"
  },
  {
    "url": "styles.21875e036b3b4fe64da7.css"
  },
  {
    "url": "7d567e980b3f8d10c157cea2da484390bc97b946-9d0fe1b5e646a3692276.js"
  },
  {
    "url": "component---src-templates-index-jsx-401039d0500857e30675.js"
  },
  {
    "url": "styles-823ae8103e36ae8a7f9f.js"
  },
  {
    "url": "4c6ab9f58300e0d93d41f77832988dce0e4c6e63-6039b9dd091077888e6c.js"
  },
  {
    "url": "ccd6e0c340665eaf81c3c7c9b37f3e9484b3fd80-c60147ea96e6dbf93a98.js"
  },
  {
    "url": "29107295-5cf55824476f86be83ba.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "d9f6bc9387c414ceeaad9e6e90271156"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "8f4682cc355c75a1c930e84a3b4cfac8"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "c355c8040c47a63bfb3360e4b7cb6553"
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