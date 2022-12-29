if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, r) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let i = {};
    const t = (e) => n(e, c),
      o = { module: { uri: c }, exports: i, require: t };
    s[c] = Promise.all(a.map((e) => o[e] || t(e))).then((e) => (r(...e), i));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts("fallback-AExCbMnu0JNCym8C5mFDm.js"),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/OneSignal-Web-SDK-HTTPS-Integration-Files/OneSignalSDKUpdaterWorker.js",
          revision: "ebb63ca15bba16b550232b0b0f66c726",
        },
        {
          url: "/OneSignal-Web-SDK-HTTPS-Integration-Files/OneSignalSDKWorker.js",
          revision: "ebb63ca15bba16b550232b0b0f66c726",
        },
        {
          url: "/OneSignalSDKWorker.js",
          revision: "ebb63ca15bba16b550232b0b0f66c726",
        },
        {
          url: "/_next/static/AExCbMnu0JNCym8C5mFDm/_buildManifest.js",
          revision: "8a2ff444f298fd77ceaa517e18f78463",
        },
        {
          url: "/_next/static/AExCbMnu0JNCym8C5mFDm/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/6814153d-2c47d5ff2cc4804c.js",
          revision: "2c47d5ff2cc4804c",
        },
        {
          url: "/_next/static/chunks/74-c613465bb34449cc.js",
          revision: "c613465bb34449cc",
        },
        {
          url: "/_next/static/chunks/framework-114634acb84f8baa.js",
          revision: "114634acb84f8baa",
        },
        {
          url: "/_next/static/chunks/main-28f68c2652c32d55.js",
          revision: "28f68c2652c32d55",
        },
        {
          url: "/_next/static/chunks/pages/Products-8d78ee429936013b.js",
          revision: "8d78ee429936013b",
        },
        {
          url: "/_next/static/chunks/pages/_app-bc8ee5a2e6f45edc.js",
          revision: "bc8ee5a2e6f45edc",
        },
        {
          url: "/_next/static/chunks/pages/_error-8353112a01355ec2.js",
          revision: "8353112a01355ec2",
        },
        {
          url: "/_next/static/chunks/pages/charity-aec3bc75034165e0.js",
          revision: "aec3bc75034165e0",
        },
        {
          url: "/_next/static/chunks/pages/checkout-8ae1e7d58bb73239.js",
          revision: "8ae1e7d58bb73239",
        },
        {
          url: "/_next/static/chunks/pages/fallback-ce8f9a5affd1fc68.js",
          revision: "ce8f9a5affd1fc68",
        },
        {
          url: "/_next/static/chunks/pages/index-e4ef5cb2ee8d1617.js",
          revision: "e4ef5cb2ee8d1617",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-b8f8d6679aaa5f42.js",
          revision: "b8f8d6679aaa5f42",
        },
        { url: "/fallback", revision: "AExCbMnu0JNCym8C5mFDm" },
        { url: "/favicon.ico", revision: "c30c7d42707a47a3f4591831641e50dc" },
        {
          url: "/icon-192x192.png",
          revision: "1960cce97558cb92f56e590dd0eb26e1",
        },
        {
          url: "/icon-256x256.png",
          revision: "a54df31f1dac073f70cbbe009448ad6c",
        },
        {
          url: "/icon-384x384.png",
          revision: "616a5c716756216caefea5c308cbe2ec",
        },
        {
          url: "/icon-512x512.png",
          revision: "3643c9a81440bc4f59b69f0f95bd7ac9",
        },
        { url: "/icon.ico", revision: "f2a5344262d3d94bc9f4acbbdc01512b" },
        { url: "/manifest.json", revision: "71f79a396adf885bd3cc4d7ab34a99c9" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        {
          url: "/products/_document.js",
          revision: "7a3a94a8d475f45716bc29dd84d9d32e",
        },
        {
          url: "/products/airpods.png",
          revision: "417029da40a093e5a83f0237aa55e1c1",
        },
        {
          url: "/products/freebuds.png",
          revision: "9caf80c52df35ba279442dd379cd2773",
        },
        {
          url: "/products/galaxy.png",
          revision: "accf9746638d89a64465687c2beac19f",
        },
        {
          url: "/products/headset.png",
          revision: "3424edf1a97f0df0c5e58de7e8e4dff8",
        },
        {
          url: "/products/iphone.png",
          revision: "3163c44ecd230b8515989f87f72dd0f6",
        },
        {
          url: "/products/macbook.png",
          revision: "d9353e8869299a007680aa672691c261",
        },
        {
          url: "/products/msi.png",
          revision: "910327ff1b14d234ee132e719804dbf9",
        },
        {
          url: "/products/redmi.png",
          revision: "df3a704fda6fc2747b92ded596c46701",
        },
        {
          url: "/products/rog.png",
          revision: "fa0be49e7d0829e93f51e605082724a4",
        },
        {
          url: "/push/onesignal/OneSignalSDKUpdaterWorker.js",
          revision: "ebb63ca15bba16b550232b0b0f66c726",
        },
        {
          url: "/push/onesignal/OneSignalSDKWorker.js",
          revision: "ebb63ca15bba16b550232b0b0f66c726",
        },
        { url: "/thirteen.svg", revision: "53f96b8290673ef9d2895908e69b2f92" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    );
});
