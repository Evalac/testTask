// LibPub Relay -  g1 - 0.3.4
(() => {
  'use strict';
  var e = {
      407: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.startRelay = void 0);
        const a = n(694),
          o = n(136),
          d = n(699),
          r = n(766);
        t.startRelay = function (e) {
          const { externalTags: t, libPubCore: n, gtmId: i } = e;
          (0, a.appendScript)(n),
            t && (0, a.appendScript)(t),
            (0, o.domReady)().then(() => {
              i && !(0, d.gtmLoaded)() && (0, r.insertGtm)(i);
            });
        };
      },
      694: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.appendScript = void 0),
          (t.appendScript = function (e) {
            const t = document.createElement('script');
            (t.type = 'text/javascript'),
              (t.async = !0),
              (t.src = e),
              document.head.appendChild(t);
          });
      },
      136: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.domReady = void 0),
          (t.domReady = function () {
            return new Promise((e) => {
              'loading' === document.readyState
                ? window.addEventListener('DOMContentLoaded', () => {
                    e();
                  })
                : e();
            });
          });
      },
      766: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.insertGtm = t.startGtm = t.insertNoScriptGtm = void 0);
        const a = n(694);
        function o(e) {
          const t = `https://www.googletagmanager.com/ns.html?id=${e}`,
            n = document.createElement('noscript'),
            a = document.createElement('iframe');
          (a.src = t),
            (a.height = '0'),
            (a.width = '0'),
            Object.assign(a.style, { display: 'none', visibility: 'hidden' }),
            n.appendChild(a),
            document.body.appendChild(n);
        }
        function d() {
          (window.dataLayer = window.dataLayer || []),
            window.dataLayer.push({
              event: 'gtm.js',
              'gtm.start': new Date().getTime(),
            });
        }
        (t.insertNoScriptGtm = o),
          (t.startGtm = d),
          (t.insertGtm = function (e) {
            const t = `https://www.googletagmanager.com/gtm.js?id=${e}`;
            (0, a.appendScript)(t), o(e), d();
          });
      },
      699: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.gtmLoaded = void 0),
          (t.gtmLoaded = function () {
            const { utag_data: e } = window;
            return Boolean(null == e ? void 0 : e.gtm_loaded);
          });
      },
    },
    t = {};
  function n(a) {
    var o = t[a];
    if (void 0 !== o) return o.exports;
    var d = (t[a] = { exports: {} });
    return e[a](d, d.exports, n), d.exports;
  }
  (() => {
    const e = n(407);
    (() => {
      const t = JSON.parse(
        null !==
          '{"gtmId":"GTM-5PWZB8V","libPubCore":"https://s3.glbimg.com/v1/AUTH_acd8438fd650434baa93efc372c066a1/g1-prod/lib-pub-core/lib-pub-core-g1-latest.js","externalTags":""}'
          ? '{"gtmId":"GTM-5PWZB8V","libPubCore":"https://s3.glbimg.com/v1/AUTH_acd8438fd650434baa93efc372c066a1/g1-prod/lib-pub-core/lib-pub-core-g1-latest.js","externalTags":""}'
          : '',
      );
      (0, e.startRelay)(t);
    })();
  })();
})();
