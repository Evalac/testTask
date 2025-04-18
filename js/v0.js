self.AMP_CONFIG = {
  v: '012502032353000',
  type: 'production',
  'allow-doc-opt-in': ['amp-next-page'],
  'allow-url-opt-in': [],
  canary: 0,
  a4aProfilingRate: 0.01,
  doubleclickSraExp: 0.01,
  doubleclickSraReportExcludedBlock: 0.1,
  flexAdSlots: 0.05,
  'flexible-bitrate': 0.1,
  'ios-fixed-no-transfer': 0,
  'story-ad-placements': 0.01,
  'story-disable-animations-first-page': 1,
  'story-load-inactive-outside-viewport': 1,
  'amp-sticky-ad-to-amp-ad-v4': 0,
  'story-video-cache-apply-audio': 0,
  'amp-story-subscriptions': 1,
  'interaction-to-next-paint': 1,
};
/*AMP_CONFIG*/ self.AMP_EXP = {
  'flexible-bitrate': 0.1,
  'amp-story-first-page-max-bitrate': 0.3,
  'story-disable-animations-first-page': 1,
  'story-load-first-page-only': 1,
  'story-load-inactive-outside-viewport': 1,
  'story-ad-page-outlink': 0.02,
  'amp-geo-ssr': 1,
  'story-remote-localization': 1,
  'amp-story-subscriptions': 1,
  'attribution-reporting': 0.04,
}; /*AMP_EXP*/
self, (self.AMP = self.AMP || []);
try {
  (AMP._ = AMP._ || {}),
    (self.AMP && !Array.isArray(self.AMP)) ||
      (function () {
        function t(t, i) {
          for (var n = 0; n < i.length; n++) {
            var r = i[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function i(i, n, r) {
          return n && t(i.prototype, n), r && t(i, r), i;
        }
        var n,
          r = (function () {
            function t() {
              this.tt = new e();
            }
            return (
              (t.prototype.abort = function () {
                if (!this.tt.nt && ((this.tt.nt = !0), this.tt.et)) {
                  var t = {
                    type: 'abort',
                    bubbles: !1,
                    cancelable: !1,
                    target: this.tt,
                    currentTarget: this.tt,
                  };
                  this.tt.et(t);
                }
              }),
              i(t, [
                {
                  key: 'signal',
                  get: function () {
                    return this.tt;
                  },
                },
              ]),
              t
            );
          })(),
          e = (function () {
            function t() {
              (this.nt = !1), (this.et = null);
            }
            return (
              i(t, [
                {
                  key: 'aborted',
                  get: function () {
                    return this.nt;
                  },
                },
                {
                  key: 'onabort',
                  get: function () {
                    return this.et;
                  },
                  set: function (t) {
                    this.et = t;
                  },
                },
              ]),
              t
            );
          })();
        function s(t, i) {
          for (
            var n = i || 0,
              r = this.length,
              e = n >= 0 ? n : Math.max(r + n, 0);
            e < r;
            e++
          ) {
            var s = this[e];
            if (s === t || (t != t && s != s)) return !0;
          }
          return !1;
        }
        function u(t, i) {
          (null == i || i > t.length) && (i = t.length);
          for (var n = 0, r = new Array(i); n < i; n++) r[n] = t[n];
          return r;
        }
        function o(t, i) {
          var n =
            ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator'];
          if (n) return (n = n.call(t)).next.bind(n);
          if (
            Array.isArray(t) ||
            (n = (function (t, i) {
              if (t) {
                if ('string' == typeof t) return u(t, i);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  'Object' === n && t.constructor && (n = t.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(t)
                    : 'Arguments' === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? u(t, i)
                      : void 0
                );
              }
            })(t)) ||
            (i && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var r = 0;
            return function () {
              return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        function h() {
          return n || (n = Promise.resolve(void 0));
        }
        var a = function () {
          var t = this;
          this.promise = new Promise(function (i, n) {
            (t.resolve = i), (t.reject = n);
          });
        };
        function c(t) {
          return new Promise(function (i) {
            i(t());
          });
        }
        function f(t) {
          var i = Object.getOwnPropertyDescriptor(t, 'message');
          if (null != i && i.writable) return t;
          var n = t.message,
            r = t.stack,
            e = new Error(n);
          for (var s in t) e[s] = t[s];
          return (e.stack = r), e;
        }
        function l(t) {
          for (
            var i, n = null, r = '', e = o(arguments, !0);
            !(i = e()).done;

          ) {
            var s = i.value;
            s instanceof Error && !n ? (n = f(s)) : (r && (r += ' '), (r += s));
          }
          return (
            n ? r && (n.message = r + ': ' + n.message) : (n = new Error(r)), n
          );
        }
        function v(t) {
          var i, n;
          null === (i = (n = self).__AMP_REPORT_ERROR) ||
            void 0 === i ||
            i.call(n, t);
        }
        function d(t) {
          var i = l.apply(null, arguments);
          setTimeout(function () {
            throw (v(i), i);
          });
        }
        function m(t) {
          var i = l.apply(null, arguments);
          return (i.expected = !0), i;
        }
        function p(t) {
          return (p =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        var g = Object.prototype,
          b = g.hasOwnProperty,
          y = g.toString;
        function w(t) {
          return '[object Object]' === y.call(t);
        }
        function A(t) {
          var i = Object.create(null);
          return t && Object.assign(i, t), i;
        }
        function x(t, i) {
          return b.call(t, i);
        }
        function E(t) {
          var i = A();
          for (var n in t)
            if (x(t, n)) {
              var r = t[n];
              i[n] = w(r) ? E(r) : r;
            }
          return i;
        }
        var P = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/,
          O = [
            'annotation-xml',
            'color-profile',
            'font-face',
            'font-face-src',
            'font-face-uri',
            'font-face-format',
            'font-face-name',
            'missing-glyph',
          ],
          I = { childList: !0, subtree: !0 };
        function T(t, i) {
          if (!P.test(i) || O.includes(i))
            throw new t('invalid custom element name "'.concat(i, '"'));
        }
        var M = (function () {
            function t(t, i) {
              (this.t = t), (this.rt = i), (this.it = A());
            }
            var i = t.prototype;
            return (
              (i.define = function (t, i, n) {
                this.rt.define(t, i, n);
                var r = this.it,
                  e = r[t];
                e && (e.resolve(), delete r[t]);
              }),
              (i.get = function (t) {
                var i = this.rt.getByName(t);
                if (i) return i.ctor;
              }),
              (i.whenDefined = function (t) {
                var i = this.t;
                if ((i.Promise, T(i.SyntaxError, t), this.rt.getByName(t)))
                  return h();
                var n = this.it,
                  r = n[t];
                return r || ((r = new a()), (n[t] = r)), r.promise;
              }),
              (i.upgrade = function (t) {
                this.rt.upgrade(t);
              }),
              t
            );
          })(),
          S = (function () {
            function t(t) {
              (this.t = t),
                (this.ot = A()),
                (this.ut = ''),
                (this.st = null),
                (this.ct = null),
                (this.ft = [t.document]);
            }
            var i = t.prototype;
            return (
              (i.current = function () {
                var t = this.st;
                return (this.st = null), t;
              }),
              (i.getByName = function (t) {
                var i = this.ot[t];
                if (i) return i;
              }),
              (i.getByConstructor = function (t) {
                var i = this.ot;
                for (var n in i) {
                  var r = i[n];
                  if (r.ctor === t) return r;
                }
              }),
              (i.define = function (t, i, n) {
                var r = this.t,
                  e = r.Error,
                  s = r.SyntaxError;
                if (n)
                  throw new e(
                    'Extending native custom elements is not supported',
                  );
                if ((T(s, t), this.getByName(t) || this.getByConstructor(i)))
                  throw new e('duplicate definition "'.concat(t, '"'));
                (this.ot[t] = { name: t, ctor: i }), this.lt(t);
                for (var u, h = o(this.ft, !0); !(u = h()).done; ) {
                  var a = u.value;
                  this.upgrade(a, t);
                }
              }),
              (i.upgrade = function (t, i) {
                for (
                  var n, r = !!i, e = i || this.ut, s = o(this.ht(t, e), !0);
                  !(n = s()).done;

                ) {
                  var u = n.value;
                  r ? this.vt(u) : this.upgradeSelf(u);
                }
              }),
              (i.upgradeSelf = function (t) {
                var i = this.getByName(t.localName);
                i && this.dt(t, i);
              }),
              (i.ht = function (t, i) {
                return i && t.querySelectorAll ? t.querySelectorAll(i) : [];
              }),
              (i.dt = function (t, i) {
                var n = i.ctor;
                if (!(t instanceof n)) {
                  this.st = t;
                  try {
                    if (new n() !== t)
                      throw new this.t.Error(
                        'Constructor illegally returned a different instance.',
                      );
                  } catch (t) {
                    d(t);
                  }
                }
              }),
              (i.vt = function (t) {
                var i = this.getByName(t.localName);
                if (i && (this.dt(t, i), t.connectedCallback))
                  try {
                    t.connectedCallback();
                  } catch (t) {
                    d(t);
                  }
              }),
              (i.bt = function (t) {
                if (t.disconnectedCallback)
                  try {
                    t.disconnectedCallback();
                  } catch (t) {
                    d(t);
                  }
              }),
              (i.lt = function (t) {
                var i = this;
                if (this.ut) this.ut += ','.concat(t);
                else {
                  this.ut = t;
                  var n = new this.t.MutationObserver(function (t) {
                    t && i.gt(t);
                  });
                  this.ct = n;
                  for (var r, e = o(this.ft, !0); !(r = e()).done; ) {
                    var s = r.value;
                    n.observe(s, I);
                  }
                  !(function (t, i) {
                    var n,
                      r = t.Document,
                      e = t.Element,
                      s = t.Node,
                      u = t.document,
                      o = r.prototype,
                      h = e.prototype,
                      a = s.prototype,
                      c = o.createElement,
                      f = o.importNode,
                      l = a.appendChild,
                      v = a.cloneNode,
                      d = a.insertBefore,
                      m = a.removeChild,
                      p = a.replaceChild;
                    (o.createElement = function (t) {
                      var n = i.getByName(t);
                      return n ? new n.ctor() : c.apply(this, arguments);
                    }),
                      (o.importNode = function () {
                        var t = f.apply(this, arguments);
                        return (
                          t && this === u && (i.upgradeSelf(t), i.upgrade(t)), t
                        );
                      }),
                      (a.appendChild = function () {
                        var t = l.apply(this, arguments);
                        return i.sync(), t;
                      }),
                      (a.insertBefore = function () {
                        var t = d.apply(this, arguments);
                        return i.sync(), t;
                      }),
                      (a.removeChild = function () {
                        var t = m.apply(this, arguments);
                        return i.sync(), t;
                      }),
                      (a.replaceChild = function () {
                        var t = p.apply(this, arguments);
                        return i.sync(), t;
                      }),
                      (a.cloneNode = function () {
                        var t = v.apply(this, arguments);
                        return (
                          t.ownerDocument === u &&
                            (i.upgradeSelf(t), i.upgrade(t)),
                          t
                        );
                      });
                    var g = h,
                      b = Object.getOwnPropertyDescriptor(g, 'innerHTML');
                    if (
                      (b ||
                        ((g = Object.getPrototypeOf(t.HTMLElement.prototype)),
                        (b = Object.getOwnPropertyDescriptor(g, 'innerHTML'))),
                      null !== (n = b) && void 0 !== n && n.configurable)
                    ) {
                      var y = b.set;
                      (b.set = function (t) {
                        y.call(this, t), i.upgrade(this);
                      }),
                        Object.defineProperty(g, 'innerHTML', b);
                    }
                  })(this.t, this);
                }
              }),
              (i.observe = function (t) {
                this.ft.push(t), this.ct && this.ct.observe(t, I);
              }),
              (i.sync = function () {
                this.ct && this.gt(this.ct.takeRecords());
              }),
              (i.gt = function (t) {
                for (var i, n = o(t, !0); !(i = n()).done; ) {
                  var r = i.value;
                  if (r) {
                    for (
                      var e, s = r.addedNodes, u = r.removedNodes, h = o(s, !0);
                      !(e = h()).done;

                    ) {
                      var a = e.value,
                        c = this.ht(a, this.ut);
                      this.vt(a);
                      for (var f, l = o(c, !0); !(f = l()).done; ) {
                        var v = f.value;
                        this.vt(v);
                      }
                    }
                    for (var d, m = o(u, !0); !(d = m()).done; ) {
                      var p = d.value,
                        g = this.ht(p, this.ut);
                      this.bt(p);
                      for (var b, y = o(g, !0); !(b = y()).done; ) {
                        var w = b.value;
                        this.bt(w);
                      }
                    }
                  }
                }
              }),
              t
            );
          })();
        function R(t, i) {
          (i.prototype = Object.create(t.prototype, {
            constructor: { configurable: !0, writable: !0, value: i },
          })),
            _(i, t);
        }
        function _(t, i) {
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, i)
            : { __proto__: { test: !0 } }.test
              ? (t.__proto__ = i)
              : (function (t, i) {
                  for (
                    var n = i;
                    null !== n && !Object.isPrototypeOf.call(n, t);

                  ) {
                    for (
                      var r, e = o(Object.getOwnPropertyNames(n), !0);
                      !(r = e()).done;

                    ) {
                      var s = r.value;
                      if (!Object.hasOwnProperty.call(t, s)) {
                        var u = Object.getOwnPropertyDescriptor(n, s);
                        Object.defineProperty(t, s, u);
                      }
                    }
                    n = Object.getPrototypeOf(n);
                  }
                })(t, i);
        }
        function k(t) {
          return t == this || this.documentElement.contains(t);
        }
        function C(t, i, n) {
          return (
            i in t
              ? Object.defineProperty(t, i, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[i] = n),
            t
          );
        }
        function N(t, i) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            i &&
              (r = r.filter(function (i) {
                return Object.getOwnPropertyDescriptor(t, i).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function D(t) {
          for (var i = 1; i < arguments.length; i++) {
            var n = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? N(Object(n), !0).forEach(function (i) {
                  C(t, i, n[i]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : N(Object(n)).forEach(function (i) {
                    Object.defineProperty(
                      t,
                      i,
                      Object.getOwnPropertyDescriptor(n, i),
                    );
                  });
          }
          return t;
        }
        function j(t, i) {
          return (j =
            Object.setPrototypeOf ||
            function (t, i) {
              return (t.__proto__ = i), t;
            })(t, i);
        }
        function U(t, i) {
          if ('function' != typeof i && null !== i)
            throw new TypeError(
              'Super expression must either be null or a function',
            );
          (t.prototype = Object.create(i && i.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            i && j(t, i);
        }
        function L(t) {
          return (L = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function z(t, i) {
          if (i && ('object' === p(i) || 'function' == typeof i)) return i;
          if (void 0 !== i)
            throw new TypeError(
              'Derived constructors may only return object or undefined',
            );
          return (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t;
          })(t);
        }
        function H(t) {
          var i = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = L(t);
            if (i) {
              var e = L(this).constructor;
              n = Reflect.construct(r, arguments, e);
            } else n = r.apply(this, arguments);
            return z(this, n);
          };
        }
        function G(t) {
          return t ? Array.prototype.slice.call(t) : [];
        }
        var V = Array.isArray;
        function F(t) {
          return V(t) ? t : [t];
        }
        function B(t, i) {
          for (var n = [], r = 0, e = 0; e < t.length; e++) {
            var s = t[e];
            i(s, e, t) ? n.push(s) : (r < e && (t[r] = s), r++);
          }
          return r < t.length && (t.length = r), n;
        }
        function q(t, i) {
          for (var n = 0; n < t.length; n++) if (i(t[n], n, t)) return n;
          return -1;
        }
        function $(t, i) {
          var n = t.indexOf(i);
          return -1 != n && (t.splice(n, 1), !0);
        }
        function W(t, i) {
          var n = t.length - i.length;
          return n >= 0 && t.indexOf(i, n) == n;
        }
        function Y(t) {
          return 'string' == typeof t;
        }
        function K(t) {
          return 1 == (null == t ? void 0 : t.nodeType);
        }
        function J(t) {
          return 'number' == typeof t && isFinite(t);
        }
        var X = '​​​',
          Q = '​​​​';
        function Z(t) {
          return K(t)
            ? t.tagName.toLowerCase() + (t.id ? '#'.concat(t.id) : '')
            : t;
        }
        function tt(t) {
          return t.indexOf(X) >= 0;
        }
        function it(t) {
          return t.replace(X, '');
        }
        function nt(t, i) {
          var n,
            r,
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 'Assertion failed';
          if (i) return i;
          t && -1 == e.indexOf(t) && (e += t);
          for (
            var s = 3, u = e.split('%s'), o = u.shift(), h = [o];
            u.length;

          ) {
            var a = arguments[s++],
              c = u.shift();
            (o += Z(a) + c), h.push(a, c.trim());
          }
          var f = new Error(o);
          throw (
            ((f.messageArray = B(h, function (t) {
              return '' !== t;
            })),
            null === (n = (r = self).__AMP_REPORT_ERROR) ||
              void 0 === n ||
              n.call(r, f),
            f)
          );
        }
        function rt(t, i, n, r, e) {
          return (
            V(e) ? t(n, e.concat([i])) : t(n, ''.concat(e || r, ': %s'), i), i
          );
        }
        function et(t, i, n, r, e, s, u, o, h, a, c) {
          return t;
        }
        function st(t, i) {
          return t;
        }
        function ut(t, i) {
          return t;
        }
        function ot(t, i) {
          return t;
        }
        function ht(t, i, n, r, e, s, u, o, h, a, c) {
          return nt(X, t, i, n, r, e, s, u, o, h, a, c);
        }
        function at(t) {
          return JSON.parse(t);
        }
        function ct(t) {
          return 'undefined' != typeof TextEncoder
            ? new TextEncoder().encode(t)
            : ft(unescape(encodeURIComponent(t)));
        }
        function ft(t) {
          for (var i = new Uint8Array(t.length), n = 0; n < t.length; n++) {
            var r = t.charCodeAt(n);
            et(r <= 255), (i[n] = r);
          }
          return i;
        }
        function lt(t, i) {
          var n = t.crypto;
          if (!(n = n || t.msCrypto) || !n.getRandomValues) return null;
          var r = new Uint8Array(i);
          return n.getRandomValues(r), r;
        }
        function vt(t) {
          var i = !1,
            n = null,
            r = t;
          return function () {
            if (!i) {
              for (
                var t = arguments.length, e = new Array(t), s = 0;
                s < t;
                s++
              )
                e[s] = arguments[s];
              (n = r.apply(self, e)), (i = !0), (r = null);
            }
            return n;
          };
        }
        function dt(t, i, n) {
          var r = 0,
            e = null;
          function s(s) {
            (e = null), (r = t.setTimeout(u, n)), i.apply(null, s);
          }
          function u() {
            (r = 0), e && s(e);
          }
          return function () {
            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
              i[n] = arguments[n];
            r ? (e = i) : s(i);
          };
        }
        function mt(t, i, n) {
          var r = 0,
            e = 0,
            s = null;
          function u() {
            r = 0;
            var o,
              h = n - (t.Date.now() - e);
            h > 0
              ? (r = t.setTimeout(u, h))
              : ((o = s), (s = null), i.apply(null, o));
          }
          return function () {
            e = t.Date.now();
            for (var i = arguments.length, o = new Array(i), h = 0; h < i; h++)
              o[h] = arguments[h];
            (s = o), r || (r = t.setTimeout(u, n));
          };
        }
        var pt = ['javascript:', 'data:', 'vbscript:'],
          gt = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        function bt(t) {
          var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
          try {
            return decodeURIComponent(t);
          } catch (t) {
            return i;
          }
        }
        function yt(t) {
          var i,
            n = A();
          if (!t) return n;
          for (; (i = gt.exec(t)); ) {
            var r = bt(i[1], i[1]),
              e = i[2] ? bt(i[2].replace(/\+/g, ' '), i[2]) : '';
            n[r] = e;
          }
          return n;
        }
        function wt(t) {
          var i = (t || self).location;
          return yt(i.originalHash || i.hash);
        }
        var At = function (t) {
            return self.AMP_CONFIG ? self.AMP_CONFIG[t] : null;
          },
          xt =
            ('string' == typeof At('cdnProxyRegex')
              ? new RegExp(At('cdnProxyRegex'))
              : At('cdnProxyRegex')) ||
            /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
        function Et(t) {
          if (!self.document || !self.document.head) return null;
          if (self.location && xt.test(self.location.origin)) return null;
          var i = self.document.head.querySelector(
            'meta[name="'.concat(t, '"]'),
          );
          return (i && i.getAttribute('content')) || null;
        }
        var Pt = At('thirdPartyUrl') || 'https://3p.ampproject.net',
          Ot = At('thirdPartyFrameHost') || 'ampproject.net',
          It =
            ('string' == typeof At('thirdPartyFrameRegex')
              ? new RegExp(At('thirdPartyFrameRegex'))
              : At('thirdPartyFrameRegex')) || /^d-\d+\.ampproject\.net$/,
          Tt =
            At('cdnUrl') || Et('runtime-host') || 'https://cdn.ampproject.org',
          Mt = /^https?:\/\/localhost(:\d+)?$/,
          St =
            At('errorReportingUrl') ||
            'https://us-central1-amp-error-reporting.cloudfunctions.net/r',
          Rt =
            At('betaErrorReportingUrl') ||
            'https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta',
          _t = At('localDev') || !1,
          kt = [
            /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,
            /(^|\.)gmail\.(com|dev)$/,
          ],
          Ct = At('geoApiUrl') || Et('amp-geo-api'),
          Nt = '';
        function Dt(t) {
          var i = t || self;
          return i.__AMP_MODE
            ? i.__AMP_MODE
            : (i.__AMP_MODE = (function (t) {
                return {
                  localDev: !1,
                  development: Ut(t, wt(t)),
                  esm: !1,
                  test: !1,
                  rtvVersion: jt(t),
                  ssrReady: !1,
                };
              })(i));
        }
        function jt(t) {
          var i;
          return (
            Nt ||
              (Nt =
                (null === (i = t.AMP_CONFIG) || void 0 === i ? void 0 : i.v) ||
                '01'.concat('2502032353000')),
            Nt
          );
        }
        function Ut(t, i) {
          var n = i || wt(t);
          return (
            ['1', 'actions', 'amp', 'amp4ads', 'amp4email'].includes(
              n.development,
            ) || !!t.AMP_DEV_MODE
          );
        }
        var Lt = function () {},
          zt = void 0;
        function Ht(t) {
          zt = t;
        }
        var Gt = function () {
            return '01'.concat('2502032353000');
          },
          Vt = function (t, i) {
            return i.reduce(
              function (t, i) {
                return ''.concat(t, '&s[]=').concat(Bt(i));
              },
              'https://log.amp.dev/?v='
                .concat(Gt(), '&id=')
                .concat(encodeURIComponent(t)),
            );
          },
          Ft = function () {
            return ''
              .concat(Tt, '/rtv/')
              .concat(Gt(), '/log-messages.simple.json');
          },
          Bt = function (t) {
            return encodeURIComponent(String(Z(t)));
          },
          qt = function (t) {
            return parseInt(wt(t).log, 10);
          },
          $t = (function () {
            function t(t, i) {
              var n = this,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : '';
              (this.win = t),
                (this.wt = i),
                (this.yt = this.jt()),
                (this.Ot = r),
                (this.xt = null),
                (this.At = vt(function () {
                  t.fetch(Ft())
                    .then(function (t) {
                      return t.json();
                    }, Lt)
                    .then(function (t) {
                      t && (n.xt = t);
                    });
                })),
                (this.Et = this.assert.bind(this));
            }
            var i = t.prototype;
            return (
              (i.jt = function () {
                var t,
                  i = this.win;
                return null !== (t = i.console) &&
                  void 0 !== t &&
                  t.log &&
                  0 != qt(i)
                  ? this.Pt()
                  : 0;
              }),
              (i.Pt = function (t) {
                return this.wt(qt(t), Dt().development);
              }),
              (i.St = function (t, i, n) {
                var r, e, s;
                if (i > (null !== (r = zt) && void 0 !== r ? r : this.yt))
                  return !1;
                var u = this.win.console,
                  o =
                    null !==
                      (e = ((s = {}),
                      C(s, 1, u.error),
                      C(s, 3, u.info),
                      C(s, 2, u.warn),
                      s)[i]) && void 0 !== e
                      ? e
                      : u.log,
                  h = this.Mt(n),
                  a = '['.concat(t, ']');
                return (
                  Y(h[0]) ? (h[0] = a + ' ' + h[0]) : h.unshift(a),
                  o.apply(u, h),
                  !0
                );
              }),
              (i.fine = function (t) {
                for (
                  var i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                this.St(t, 4, n);
              }),
              (i.info = function (t) {
                for (
                  var i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                this.St(t, 3, n);
              }),
              (i.warn = function (t) {
                for (
                  var i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                this.St(t, 2, n);
              }),
              (i.error = function (t) {
                for (
                  var i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                if (!this.St(t, 1, n)) {
                  var e,
                    s,
                    u = this.createError.apply(this, n);
                  (u.name = t || u.name),
                    null === (e = (s = self).__AMP_REPORT_ERROR) ||
                      void 0 === e ||
                      e.call(s, u);
                }
              }),
              (i.expectedError = function (t) {
                for (
                  var i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                var e, s;
                this.St(t, 1, n) ||
                  null === (e = (s = self).__AMP_REPORT_ERROR) ||
                  void 0 === e ||
                  e.call(s, this.createExpectedError.apply(this, n));
              }),
              (i.createError = function (t) {
                return this.It(l.apply(null, arguments));
              }),
              (i.createExpectedError = function (t) {
                return this.It(m.apply(null, arguments));
              }),
              (i.It = function (t) {
                return (
                  (t = f(t)),
                  this.Ot
                    ? t.message
                      ? -1 == t.message.indexOf(this.Ot) &&
                        (t.message += this.Ot)
                      : (t.message = this.Ot)
                    : tt(t.message) && (t.message = it(t.message)),
                  t
                );
              }),
              (i.Mt = function (t) {
                return V(t[0]) ? this.kt(t[0]) : t;
              }),
              (i.kt = function (t) {
                var i,
                  n = t.shift();
                return (
                  Dt(this.win).development && this.At(),
                  null !== (i = this.xt) && void 0 !== i && i[n]
                    ? [this.xt[n]].concat(t)
                    : ['More info at '.concat(Vt(n, t))]
                );
              }),
              (i.assert = function (t, i, n) {
                return V(i)
                  ? this.assert.apply(this, [t].concat(this.kt(i)))
                  : nt.apply(
                      null,
                      [this.Ot].concat(Array.prototype.slice.call(arguments)),
                    );
              }),
              (i.assertElement = function (t, i) {
                return (function (t, i, n) {
                  return rt(t, i, K(i), 'Element expected', n);
                })(this.Et, t, i);
              }),
              (i.assertString = function (t, i) {
                return (function (t, i, n) {
                  return rt(t, i, Y(i), 'String expected', n);
                })(this.Et, t, i);
              }),
              (i.assertNumber = function (t, i) {
                return (function (t, i, n) {
                  return rt(t, i, 'number' == typeof i, 'Number expected', n);
                })(this.Et, t, i);
              }),
              (i.assertArray = function (t, i) {
                return (function (t, i, n) {
                  return rt(t, i, V(i), 'Array expected', n);
                })(this.Et, t, i);
              }),
              (i.assertBoolean = function (t, i) {
                return (function (t, i, n) {
                  return rt(t, i, !!i === i, 'Boolean expected', n);
                })(this.Et, t, i);
              }),
              t
            );
          })();
        self.__AMP_LOG = self.__AMP_LOG || {
          user: null,
          dev: null,
          userForEmbed: null,
        };
        var Wt = self.__AMP_LOG,
          Yt = null;
        function Kt(t, i) {
          if (!Yt) throw new Error('failed to call initLogConstructor');
          return new Yt(self, t, i);
        }
        function Jt(t) {
          return (
            Wt.user || (Wt.user = Xt(X)),
            (function (t, i) {
              return i && i.ownerDocument.defaultView != t;
            })(Wt.user.win, t)
              ? Wt.userForEmbed || (Wt.userForEmbed = Xt(Q))
              : Wt.user
          );
        }
        function Xt(t) {
          return Kt(function (t, i) {
            return i || t >= 1 ? 4 : 2;
          }, t);
        }
        function Qt() {
          return (
            Wt.dev ||
            (Wt.dev = Kt(function (t) {
              return t >= 3 ? 4 : t >= 2 ? 3 : 0;
            }))
          );
        }
        function Zt(t, i, n, r, e, s, u, o, h, a, c) {
          return t;
        }
        function ti(t, i, n, r, e, s, u, o, h, a, c) {
          return Jt().assert(t, i, n, r, e, s, u, o, h, a, c);
        }
        var ii = ['GET', 'POST'];
        function ni(t, i) {
          var n = new XMLHttpRequest();
          if (!('withCredentials' in n))
            throw Qt().createExpectedError('CORS is not supported');
          return n.open(t, i, !0), n;
        }
        var ri = (function () {
          function t(t) {
            (this.Rt = t),
              (this.status = this.Rt.status),
              (this.statusText = this.Rt.statusText),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.headers = new si(t)),
              (this.bodyUsed = !1),
              (this.body = null),
              (this.url = t.responseURL);
          }
          var i = t.prototype;
          return (
            (i.clone = function () {
              return et(!this.bodyUsed), new t(this.Rt);
            }),
            (i.Tt = function () {
              return (
                et(!this.bodyUsed),
                (this.bodyUsed = !0),
                Promise.resolve(this.Rt.responseText)
              );
            }),
            (i.text = function () {
              return this.Tt();
            }),
            (i.json = function () {
              return this.Tt().then(at);
            }),
            (i.arrayBuffer = function () {
              return this.Tt().then(ct);
            }),
            t
          );
        })();
        function ei(t) {
          return void 0 === t
            ? 'GET'
            : ((t = t.toUpperCase()), et(ii.includes(t)), t);
        }
        var si = (function () {
            function t(t) {
              this.Rt = t;
            }
            var i = t.prototype;
            return (
              (i.get = function (t) {
                return this.Rt.getResponseHeader(t);
              }),
              (i.has = function (t) {
                return null != this.Rt.getResponseHeader(t);
              }),
              t
            );
          })(),
          ui = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = A(),
                e = D(
                  {
                    status: 200,
                    statusText: 'OK',
                    responseText: t ? String(t) : '',
                    getResponseHeader: function (t) {
                      var i = String(t).toLowerCase();
                      return x(r, i) ? r[i] : null;
                    },
                  },
                  n,
                );
              if (
                ((e.status =
                  void 0 === n.status ? 200 : parseInt(n.status, 10)),
                V(n.headers))
              )
                n.headers.forEach(function (t) {
                  var i = t[0],
                    n = t[1];
                  r[String(i).toLowerCase()] = String(n);
                });
              else if (w(n.headers))
                for (var s in n.headers)
                  r[String(s).toLowerCase()] = String(n.headers[s]);
              return (
                n.statusText && (e.statusText = String(n.statusText)),
                i.call(this, e)
              );
            }
            return n;
          })(ri);
        function oi(t) {
          return (t.ownerDocument || t).defaultView;
        }
        var hi,
          ai =
            /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
        function ci(t, i, n, r, e) {
          return (
            e ||
            (i
              ? '�'
              : r
                ? t.slice(0, -1) +
                  '\\' +
                  t.slice(-1).charCodeAt(0).toString(16) +
                  ' '
                : '\\' + t)
          );
        }
        function fi(t) {
          return void 0 !== hi
            ? hi
            : (hi = (function (t) {
                try {
                  var i = t.ownerDocument,
                    n = i.createElement('div'),
                    r = i.createElement('div');
                  return n.appendChild(r), n.querySelector(':scope div') === r;
                } catch (t) {
                  return !1;
                }
              })(t));
        }
        function li(t, i) {
          return t.replace(/^|,/g, '$&'.concat(i, ' '));
        }
        function vi(t) {
          return String(t).replace(ai, ci);
        }
        function di(t) {
          et(/^[\w-]+$/.test(t));
        }
        function mi(t, i) {
          var n = t.classList,
            r = 'i-amphtml-scoped';
          n.add(r);
          var e = li(i, '.'.concat(r)),
            s = t.querySelectorAll(e);
          return n.remove(r), s;
        }
        function pi(t, i) {
          if (fi(t)) return t.querySelector(li(i, ':scope'));
          var n = mi(t, i)[0];
          return void 0 === n ? null : n;
        }
        function gi(t, i) {
          var n =
            t.matches ||
            t.webkitMatchesSelector ||
            t.mozMatchesSelector ||
            t.msMatchesSelector ||
            t.oMatchesSelector;
          return !!n && n.call(t, i);
        }
        function bi(t, i, n) {
          var r;
          for (r = t; r && r !== n; r = r.parentElement) if (i(r)) return r;
          return null;
        }
        function yi(t, i) {
          return t.closest
            ? t.closest(i)
            : bi(t, function (t) {
                return gi(t, i);
              });
        }
        function wi(t, i) {
          for (var n = t.lastElementChild; n; n = n.previousElementSibling)
            if (i(n)) return n;
          return null;
        }
        function Ai(t, i) {
          return di(i), pi(t, '> ['.concat(i, ']'));
        }
        function xi(t) {
          return (
            Y((i = t)) ? (n = i) : K(i) && (n = i.tagName),
            !(!n || !n.toLowerCase().startsWith('i-')) ||
              (t.nodeType === Node.ELEMENT_NODE &&
                (st(t),
                t.hasAttribute('placeholder') ||
                  t.hasAttribute('fallback') ||
                  t.hasAttribute('overflow')))
          );
          var i, n;
        }
        var Ei,
          Pi = { bubbles: !0, cancelable: !0 };
        function Oi(t, i, n) {
          if (i(t)) n();
          else {
            var r = oi(t);
            if (r.MutationObserver) {
              var e = new r.MutationObserver(function () {
                i(t) && (e.disconnect(), n());
              });
              e.observe(t, { childList: !0 });
            } else
              var s = r.setInterval(function () {
                i(t) && (r.clearInterval(s), n());
              }, 5);
          }
        }
        function Ii(t, i) {
          Oi(
            t.documentElement,
            function () {
              return !!t.body;
            },
            i,
          );
        }
        function Ti(t) {
          return new Promise(function (i) {
            return Ii(t, i);
          });
        }
        function Mi(t) {
          var i;
          null === (i = t.parentElement) || void 0 === i || i.removeChild(t);
        }
        function Si(t, i) {
          t.insertBefore(i, t.firstChild);
        }
        function Ri(t) {
          var i = t.isConnected;
          if (void 0 !== i) return i;
          for (var n = t; (n = _i(n)).host; ) n = n.host;
          return n.nodeType === Node.DOCUMENT_NODE;
        }
        function _i(t) {
          if (Node.prototype.getRootNode) return t.getRootNode();
          var i, n;
          for (
            i = t;
            i.parentNode &&
            (!(n = i) ||
              ('I-AMPHTML-SHADOW-ROOT' != n.tagName &&
                (11 != n.nodeType ||
                  '[object ShadowRoot]' !==
                    Object.prototype.toString.call(n))));
            i = i.parentNode
          );
          return i;
        }
        function ki(t, i) {
          var n = t;
          do {
            if (n.nextSibling) return !0;
          } while ((n = n.parentNode) && n != i);
          return !1;
        }
        function Ci(t) {
          try {
            t.focus();
          } catch (t) {}
        }
        function Ni(t) {
          return t.parent && t.parent != t;
        }
        function Di(t, i, n, r) {
          var e = n || {};
          et(t.ownerDocument);
          var s = r || Pi,
            u = s.bubbles,
            o = s.cancelable,
            h = new MessageEvent(i, { data: e, bubbles: u, cancelable: o });
          t.dispatchEvent(h);
        }
        function ji(t, i) {
          return i !== t && t.contains(i);
        }
        function Ui(t) {
          return t.hasAttribute('i-amphtml-ssr');
        }
        function Li(t, i) {
          var n = t.head.querySelector('script[nonce]');
          if (n) {
            var r = n.nonce || n.getAttribute('nonce');
            i.setAttribute('nonce', null != r ? r : '');
          }
        }
        function zi(t, i, n, r) {
          return {
            left: t,
            top: i,
            width: n,
            height: r,
            bottom: i + r,
            right: t + n,
            x: t,
            y: i,
          };
        }
        function Hi(t, i, n) {
          return zi(
            t.left - t.width * i,
            t.top - t.height * n,
            t.width * (1 + 2 * i),
            t.height * (1 + 2 * n),
          );
        }
        function Gi(t, i, n) {
          return (0 == i && 0 == n) || (0 == t.width && 0 == t.height)
            ? t
            : zi(t.left + i, t.top + n, t.width, t.height);
        }
        function Vi() {
          return Ri(this) ? Ei.call(this) : zi(0, 0, 0, 0);
        }
        function Fi(t) {
          return (
            !t.IntersectionObserver ||
            !t.IntersectionObserverEntry ||
            !!t.IntersectionObserver._stub ||
            !(function (t) {
              try {
                return (
                  new t.IntersectionObserver(function () {}, {
                    root: t.document,
                  }),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })(t) ||
            (function (t) {
              return /apple/i.test(t.navigator.vendor);
            })(t)
          );
        }
        var Bi = (function () {
          function t(i, n) {
            (this.Ct = i),
              (this._t = D({ root: null, rootMargin: '0px 0px 0px 0px' }, n)),
              (this.Nt = []),
              (this.Dt = null),
              t._upgraders.push(this.Ut.bind(this));
          }
          var n = t.prototype;
          return (
            (n.disconnect = function () {
              this.Dt ? this.Dt.disconnect() : (this.Nt.length = 0);
            }),
            (n.takeRecords = function () {
              return this.Dt ? this.Dt.takeRecords() : [];
            }),
            (n.observe = function (t) {
              this.Dt
                ? this.Dt.observe(t)
                : -1 == this.Nt.indexOf(t) && this.Nt.push(t);
            }),
            (n.unobserve = function (t) {
              if (this.Dt) this.Dt.unobserve(t);
              else {
                var i = this.Nt.indexOf(t);
                -1 != i && this.Nt.splice(i, 1);
              }
            }),
            (n.Ut = function (t) {
              var i = new t(this.Ct, this._t);
              this.Dt = i;
              for (var n, r = o(this.Nt, !0); !(n = r()).done; ) {
                var e = n.value;
                i.observe(e);
              }
              this.Nt.length = 0;
            }),
            i(t, [
              {
                key: 'root',
                get: function () {
                  return this.Dt ? this.Dt.root : this._t.root || null;
                },
              },
              {
                key: 'rootMargin',
                get: function () {
                  return this.Dt ? this.Dt.rootMargin : this._t.rootMargin;
                },
              },
              {
                key: 'thresholds',
                get: function () {
                  return this.Dt
                    ? this.Dt.thresholds
                    : [].concat(this._t.threshold || 0);
                },
              },
            ]),
            t
          );
        })();
        function qi(t) {
          return (t = Number(t)) ? (t > 0 ? 1 : -1) : t;
        }
        Bi._upgraders = [];
        var $i = Object.prototype.hasOwnProperty;
        function Wi(t, i) {
          if (null == t)
            throw new TypeError('Cannot convert undefined or null to object');
          for (var n = Object(t), r = 1; r < arguments.length; r++) {
            var e = arguments[r];
            if (null != e) for (var s in e) $i.call(e, s) && (n[s] = e[s]);
          }
          return n;
        }
        function Yi(t) {
          return Object.keys(t).map(function (i) {
            return t[i];
          });
        }
        function Ki(t) {
          return !t.ResizeObserver || !!t.ResizeObserver._stub;
        }
        var Ji,
          Xi = (function () {
            function t(i) {
              (this.Ct = i),
                (this.Nt = []),
                (this.Dt = null),
                t._upgraders.push(this.Ut.bind(this));
            }
            var i = t.prototype;
            return (
              (i.disconnect = function () {
                this.Dt ? this.Dt.disconnect() : (this.Nt.length = 0);
              }),
              (i.observe = function (t) {
                this.Dt
                  ? this.Dt.observe(t)
                  : -1 == this.Nt.indexOf(t) && this.Nt.push(t);
              }),
              (i.unobserve = function (t) {
                if (this.Dt) this.Dt.unobserve(t);
                else {
                  var i = this.Nt.indexOf(t);
                  -1 != i && this.Nt.splice(i, 1);
                }
              }),
              (i.Ut = function (t) {
                var i = new t(this.Ct);
                this.Dt = i;
                for (var n, r = o(this.Nt, !0); !(n = r()).done; ) {
                  var e = n.value;
                  i.observe(e);
                }
                this.Nt.length = 0;
              }),
              t
            );
          })();
        function Qi(t, i) {
          var n = i > 0 ? 0 | i : 0;
          return this.substr(n, t.length) === t;
        }
        (Xi._upgraders = []),
          (Ji = self).fetch ||
            (Object.defineProperty(Ji, 'fetch', {
              value: function (t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return new Promise(function (n, r) {
                  var e = ei(i.method || 'GET'),
                    s = ni(e, t);
                  'include' == i.credentials && (s.withCredentials = !0),
                    ('document' !== i.responseType &&
                      'text' !== i.responseType) ||
                      (s.responseType = i.responseType),
                    i.headers &&
                      Object.keys(i.headers).forEach(function (t) {
                        s.setRequestHeader(t, i.headers[t]);
                      }),
                    (s.onreadystatechange = function () {
                      if (!(s.readyState < 2))
                        return s.status < 100 || s.status > 599
                          ? ((s.onreadystatechange = null),
                            void r(
                              Jt().createExpectedError(
                                'Unknown HTTP status '.concat(s.status),
                              ),
                            ))
                          : void (4 == s.readyState && n(new ri(s)));
                    }),
                    (s.onerror = function () {
                      r(Jt().createExpectedError('Network failure'));
                    }),
                    (s.onabort = function () {
                      r(Jt().createExpectedError('Request aborted'));
                    }),
                    'POST' == e ? s.send(i.body) : s.send();
                });
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Ji, 'Response', {
              value: ui,
              writable: !0,
              enumerable: !1,
              configurable: !0,
            })),
          (function (t) {
            t.Math.sign ||
              t.Object.defineProperty(t.Math, 'sign', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: qi,
              });
          })(self),
          (function (t) {
            t.Object.assign ||
              t.Object.defineProperty(t.Object, 'assign', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Wi,
              });
          })(self),
          (function (t) {
            t.Object.values ||
              t.Object.defineProperty(t.Object, 'values', {
                configurable: !0,
                writable: !0,
                value: Yi,
              });
          })(self),
          (function (t) {
            t.Array.prototype.includes ||
              t.Object.defineProperty(t.Array.prototype, 'includes', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: s,
              });
          })(self),
          (function (t) {
            var i = t.Map,
              n = new i();
            if (n.set(0, 0) !== n) {
              var r = n.set;
              t.Object.defineProperty(i.prototype, 'set', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                  return r.apply(this, arguments), this;
                },
              });
            }
          })(self),
          (function (t) {
            var i = t.WeakMap,
              n = new i();
            if (n.set({}, 0) !== n) {
              var r = n.set;
              t.Object.defineProperty(i.prototype, 'set', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                  return r.apply(this, arguments), this;
                },
              });
            }
          })(self),
          (function (t) {
            var i = t.Set,
              n = new i([1]);
            if (
              (n.size < 1 &&
                (t.Set = function (t) {
                  var n = new i();
                  if (t)
                    for (var r = G(t), e = 0; e < r.length; e++) n.add(r[e]);
                  return n;
                }),
              n.add(0) !== n)
            ) {
              var r = n.add;
              t.Object.defineProperty(i.prototype, 'add', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                  return r.apply(this, arguments), this;
                },
              });
            }
          })(self),
          (function (t) {
            t.String.prototype.startsWith ||
              t.Object.defineProperty(t.String.prototype, 'startsWith', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Qi,
              });
          })(self),
          self.document &&
            ((function (t) {
              var i = t.HTMLDocument || t.Document;
              i &&
                !i.prototype.contains &&
                t.Object.defineProperty(i.prototype, 'contains', {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: k,
                });
            })(self),
            (function (t) {
              (function (t) {
                if (!t.document) return !1;
                try {
                  return (
                    0 !==
                    t.document.createElement('div').getBoundingClientRect().top
                  );
                } catch (t) {
                  return !0;
                }
              })(t) &&
                ((Ei = Element.prototype.getBoundingClientRect),
                t.Object.defineProperty(
                  t.Element.prototype,
                  'getBoundingClientRect',
                  { value: Vi },
                ));
            })(self),
            (function (t, i) {
              var n = t.document,
                r = (function (t) {
                  var i = t.customElements;
                  return !!(i && i.define && i.get && i.whenDefined);
                })(t);
              if (
                !(
                  !n ||
                  (r &&
                    (function (t) {
                      return (
                        -1 === t.HTMLElement.toString().indexOf('[native code]')
                      );
                    })(t))
                )
              ) {
                var e = !0,
                  s = !1;
                if (i && r)
                  try {
                    var u = t.Reflect,
                      o = Object.create(i.prototype);
                    Function.call.call(i, o),
                      (s = !(null == u || !u.construct));
                  } catch (t) {
                    e = !1;
                  }
                s
                  ? (function (t) {
                      var i = t.HTMLElement,
                        n = t.Reflect;
                      function r() {
                        var t = this.constructor;
                        return n.construct(i, [], t);
                      }
                      R(i, r),
                        (t.HTMLElementOrig = t.HTMLElement),
                        (t.HTMLElement = r);
                    })(t)
                  : e &&
                    (function (t) {
                      var i = t.Element,
                        n = t.HTMLElement,
                        r = t.document,
                        e = r.createElement,
                        s = new S(t),
                        u = new M(t, s);
                      Object.defineProperty(t, 'customElements', {
                        enumerable: !0,
                        configurable: !0,
                        value: u,
                      });
                      var o = i.prototype,
                        h = o.attachShadow,
                        a = o.createShadowRoot;
                      function c() {
                        var t = this.constructor,
                          i = s.current();
                        if (!i) {
                          var n = s.getByConstructor(t);
                          i = e.call(r, n.name);
                        }
                        return _(i, t.prototype), i;
                      }
                      h &&
                        ((o.attachShadow = function (t) {
                          var i = h.apply(this, arguments);
                          return s.observe(i), i;
                        }),
                        (o.attachShadow.toString = function () {
                          return h.toString();
                        })),
                        a &&
                          ((o.createShadowRoot = function () {
                            var t = a.apply(this, arguments);
                            return s.observe(t), t;
                          }),
                          (o.createShadowRoot.toString = function () {
                            return a.toString();
                          })),
                        R(n, c),
                        (t.HTMLElementOrig = t.HTMLElement),
                        (t.HTMLElement = c),
                        c.call ||
                          ((c.apply = t.Function.apply),
                          (c.bind = t.Function.bind),
                          (c.call = t.Function.call));
                    })(t);
              }
            })(
              self,
              (function () {
                return function () {};
              })(),
            ),
            (function (t) {
              Fi(t) &&
                (function (t) {
                  if (!t.IntersectionObserver)
                    return (
                      (t.IntersectionObserver = Bi),
                      void (t.IntersectionObserver._stub = Bi)
                    );
                  var i = t.IntersectionObserver;
                  (t.IntersectionObserver = (function (t, i) {
                    return function (n, r) {
                      var e;
                      return 9 ===
                        (null == r || null === (e = r.root) || void 0 === e
                          ? void 0
                          : e.nodeType)
                        ? new i(n, r)
                        : new t(n, r);
                    };
                  })(t.IntersectionObserver, Bi)),
                    (t.IntersectionObserver._stub = Bi),
                    (t.IntersectionObserver._native = i);
                })(t),
                (function (t) {
                  t.IntersectionObserverEntry &&
                    !(
                      'isIntersecting' in t.IntersectionObserverEntry.prototype
                    ) &&
                    Object.defineProperty(
                      t.IntersectionObserverEntry.prototype,
                      'isIntersecting',
                      {
                        enumerable: !0,
                        configurable: !0,
                        get: function () {
                          return this.intersectionRatio > 0;
                        },
                      },
                    );
                })(t);
            })(self),
            (function (t) {
              Ki(t) &&
                (function (t) {
                  t.ResizeObserver ||
                    ((t.ResizeObserver = Xi), (t.ResizeObserver._stub = Xi));
                })(t);
            })(self),
            (function (t) {
              t.AbortController ||
                (Object.defineProperty(t, 'AbortController', {
                  configurable: !0,
                  enumerable: !1,
                  writable: !0,
                  value: r,
                }),
                Object.defineProperty(t, 'AbortSignal', {
                  configurable: !0,
                  enumerable: !1,
                  writable: !0,
                  value: e,
                }));
            })(self));
        var Zi = 'cls',
          tn = 'clstu',
          nn = 'cls-1',
          rn = 'pc',
          en = 'inp',
          sn = 'building',
          un = 'mounting',
          on = 'loading',
          hn = 'complete',
          an = 'error';
        function cn(t) {
          return t.readyState != on && 'uninitialized' != t.readyState;
        }
        function fn(t) {
          return t.readyState == hn;
        }
        function ln(t, i) {
          vn(t, cn, i);
        }
        function vn(t, i, n) {
          var r = i(t);
          r
            ? n(t)
            : t.addEventListener('readystatechange', function e() {
                i(t) &&
                  (r || ((r = !0), n(t)),
                  t.removeEventListener('readystatechange', e));
              });
        }
        function dn(t) {
          return new Promise(function (i) {
            ln(t, i);
          });
        }
        function mn(t) {
          return new Promise(function (i) {
            vn(t, fn, i);
          });
        }
        var pn = ['amp-mustache'],
          gn = 'latest',
          bn = /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org(\/.*)?$/;
        function yn(t) {
          if (!t) return null;
          var i = t.match(
              /^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)(?:\?ssr-css=[0|1])?$/i,
            ),
            n = i ? i[2] : void 0,
            r = i ? i[3] : void 0;
          return n && r ? { extensionId: n, extensionVersion: r } : null;
        }
        function wn(t, i, n) {
          var r = t.document.createElement('script');
          (r.async = !0),
            xn(i)
              ? (n = '')
              : r.setAttribute(
                  pn.indexOf(i) >= 0 ? 'custom-template' : 'custom-element',
                  i,
                ),
            r.setAttribute('data-script', i),
            r.setAttribute('i-amphtml-inserted', ''),
            Li(t.document, r),
            r.setAttribute('crossorigin', 'anonymous');
          var e = (function (t, i, n, r) {
              var e = Tt,
                s = Dt().rtvVersion,
                u = n ? '-' + n : '';
              return ''
                .concat(e, '/rtv/')
                .concat(s, '/v0/')
                .concat(i)
                .concat(u)
                .concat('.js');
            })(t.location, i, n),
            s = {
              createScriptURL: function (t) {
                return bn.test(t) || 'fonts.googleapis.com' === new URL(t).host
                  ? t
                  : '';
              },
            };
          return (
            self.trustedTypes &&
              self.trustedTypes.createPolicy &&
              (s = self.trustedTypes.createPolicy(
                'extension-script#createExtensionScript',
                s,
              )),
            (r.src = s.createScriptURL(e)),
            r
          );
        }
        function An(t, i, n, r) {
          for (
            var e =
                !(arguments.length > 4 && void 0 !== arguments[4]) ||
                arguments[4],
              s =
                ':not([i-amphtml-loaded-new-version])' +
                (e ? '' : ':not([i-amphtml-inserted])'),
              u = t.document.head.querySelectorAll(
                'script[src*="/'.concat(i, '-"]').concat(s),
              ),
              o = [],
              h = 0;
            h < u.length;
            h++
          ) {
            var a = u[h],
              c = yn(a.src);
            if (c) {
              var f = c.extensionId,
                l = c.extensionVersion;
              f == i && (xn(i) || l == n || (l == gn && r)) && o.push(a);
            }
          }
          return o;
        }
        function xn(t) {
          return t.startsWith('_');
        }
        function En(t, i, n, r) {
          Dn((t = Rn(t)), t, i, n), r && Nn(t, i);
        }
        function Pn(t, i, n, r) {
          var e = kn(t),
            s = Cn(e);
          Dn(s, e, i, n), r && Nn(s, i);
        }
        function On(t, i) {
          return Nn((t = Rn(t)), i);
        }
        function In(t, i) {
          return Nn(Cn(kn(t)), i);
        }
        function Tn(t, i) {
          var n = Cn(kn(t));
          return Gn(n, i) ? Nn(n, i) : null;
        }
        function Mn(t, i) {
          return jn(Cn(t), i);
        }
        function Sn(t, i) {
          return Un(Cn(t), i);
        }
        function Rn(t) {
          return t.__AMP_TOP || (t.__AMP_TOP = t);
        }
        function _n(t, i) {
          var n = (t.ownerDocument || t).defaultView,
            r = i || Rn(n);
          if (n && n != r && Rn(n) == r)
            try {
              return n.frameElement;
            } catch (t) {}
          return null;
        }
        function kn(t) {
          return t.nodeType
            ? (function (t) {
                return On(t, 'ampdoc');
              })(oi(t)).getAmpDoc(t)
            : t;
        }
        function Cn(t) {
          var i = kn(t);
          return i.isSingleDoc() ? i.win : i;
        }
        function Nn(t, i) {
          Zt(Gn(t, i));
          var n = Ln(t)[i];
          return (
            n.obj ||
              (Zt(n.ctor),
              Zt(n.context),
              (n.obj = new n.ctor(n.context)),
              Zt(n.obj),
              (n.context = null),
              n.resolve && n.resolve(n.obj)),
            n.obj
          );
        }
        function Dn(t, i, n, r, e, s) {
          var u = Ln(t),
            o = u[n];
          o ||
            (o = u[n] =
              {
                obj: null,
                promise: null,
                resolve: null,
                reject: null,
                context: null,
                ctor: null,
                sharedInstance: s || !1,
              }),
            (!e && o.ctor) ||
              ((o.ctor = r),
              (o.context = i),
              (o.sharedInstance = s || !1),
              o.resolve && Nn(t, n));
        }
        function jn(t, i) {
          var n = Un(t, i);
          if (n) return n;
          var r,
            e,
            s,
            u,
            o = Ln(t);
          return (
            (o[i] =
              ((e = (r = new a()).promise),
              (s = r.reject),
              (u = r.resolve),
              e.catch(function () {}),
              {
                obj: null,
                promise: e,
                resolve: u,
                reject: s,
                context: null,
                ctor: null,
              })),
            o[i].promise
          );
        }
        function Un(t, i) {
          var n = Ln(t)[i];
          return n
            ? n.promise
              ? n.promise
              : (Nn(t, i), (n.promise = Promise.resolve(n.obj)))
            : null;
        }
        function Ln(t) {
          var i = t.__AMP_SERVICES;
          return i || (i = t.__AMP_SERVICES = {}), i;
        }
        function zn(t) {
          return 'function' == typeof t.dispose;
        }
        function Hn(t, i) {
          if (zn(i))
            try {
              (function (t) {
                return Zt(zn(t)), t;
              })(i).dispose();
            } catch (i) {
              Qt().error('SERVICE', 'failed to dispose service', t, i);
            }
        }
        function Gn(t, i) {
          var n = t.__AMP_SERVICES && t.__AMP_SERVICES[i];
          return !(!n || !n.ctor);
        }
        function Vn(t, i, n, r) {
          return Fn(t, i, n, r).then(function (t) {
            return (function (t, i, n) {
              return ti(
                t,
                'Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.',
                i,
                n,
                n,
                n,
              );
            })(t, i, n);
          });
        }
        function Fn(t, i, n, r) {
          var e = Sn(t, i);
          if (e) return e;
          var s = kn(t);
          return s
            .whenExtensionsKnown()
            .then(function () {
              var t = s.getExtensionVersion(n);
              return t ? On(s.win, 'extensions').waitForExtension(n, t) : null;
            })
            .then(function (n) {
              return n ? (r ? Sn(t, i) : Mn(t, i)) : null;
            });
        }
        var Bn,
          qn = function (t) {
            return Fn(t, 'access', 'amp-access');
          },
          $n = function (t) {
            return Fn(t, 'subscriptions', 'amp-subscriptions');
          },
          Wn = function (t) {
            return Tn(t, 'action');
          },
          Yn = function (t) {
            return Vn(t, 'activity', 'amp-analytics');
          },
          Kn = function (t) {
            return kn(t);
          },
          Jn = function (t) {
            return On(t, 'ampdoc');
          },
          Xn = function (t) {
            return Fn(t, 'amp-analytics-instrumentation', 'amp-analytics');
          },
          Qn = function (t) {
            return (function (t, i, n) {
              var r = Tn(t, i);
              return r ? Promise.resolve(r) : Fn(t, i, 'amp-bind');
            })(t, 'bind');
          },
          Zn = function (t) {
            return Mn(t, 'cid');
          },
          tr = function (t) {
            return On(t, 'crypto');
          },
          ir = function (t) {
            return In(t, 'documentInfo').get();
          },
          nr = function (t) {
            return On(t, 'extensions');
          },
          rr = function (t) {
            return In(t, 'history');
          },
          er = function (t) {
            return Tn(t, 'loadingIndicator');
          },
          sr = function (t) {
            return In(t, 'mutator');
          },
          ur = function (t) {
            return On(t, 'performance');
          },
          or = function (t) {
            return On(t, 'platform');
          },
          hr = function (t) {
            return On(t, 'preconnect');
          },
          ar = function (t) {
            return In(t, 'resources');
          },
          cr = function (t) {
            return Mn(t, 'storage');
          },
          fr = function (t) {
            return (function (t, i) {
              return Nn(t, 'timer');
            })(t);
          },
          lr = function (t) {
            return Tn(t, 'url-replace');
          },
          vr = function (t) {
            return Fn(t, 'geo', 'amp-geo', !0);
          },
          dr = function (t) {
            return Tn(t, 'url');
          },
          mr = function (t) {
            return In(t, 'viewer');
          },
          pr = function (t) {
            return On(t, 'vsync');
          },
          gr = function (t) {
            return In(t, 'viewport');
          },
          br = function (t) {
            return On(t, 'xhr');
          },
          yr = 'prerender',
          wr = 'preview',
          Ar = 'visible',
          xr = 'hidden',
          Er = 'paused',
          Pr = 'inactive',
          Or = (function () {
            function t() {
              this.fn = null;
            }
            var i = t.prototype;
            return (
              (i.add = function (t) {
                var i = this;
                return (
                  this.fn || (this.fn = []),
                  this.fn.push(t),
                  function () {
                    i.remove(t);
                  }
                );
              }),
              (i.remove = function (t) {
                this.fn && $(this.fn, t);
              }),
              (i.removeAll = function () {
                this.fn && (this.fn.length = 0);
              }),
              (i.fire = function (t) {
                if (this.fn)
                  for (var i, n = o(this.fn.slice(), !0); !(i = n()).done; )
                    (0, i.value)(t);
              }),
              (i.getHandlerCount = function () {
                var t, i;
                return null !==
                  (t =
                    null === (i = this.fn) || void 0 === i
                      ? void 0
                      : i.length) && void 0 !== t
                  ? t
                  : 0;
              }),
              t
            );
          })(),
          Ir = (function () {
            function t() {
              (this.vn = A()), (this.Vt = null);
            }
            var i = t.prototype;
            return (
              (i.get = function (t) {
                var i = this.vn[t];
                return null == i ? null : i;
              }),
              (i.whenSignal = function (t) {
                var i,
                  n = null === (i = this.Vt) || void 0 === i ? void 0 : i[t];
                if (!n) {
                  var r = this.vn[t];
                  (n =
                    null != r
                      ? {
                          promise:
                            'number' == typeof r
                              ? Promise.resolve(r)
                              : Promise.reject(r),
                        }
                      : new a()),
                    this.Vt || (this.Vt = A()),
                    (this.Vt[t] = n);
                }
                return n.promise;
              }),
              (i.signal = function (t, i) {
                var n;
                if (null == this.vn[t]) {
                  var r = null != i ? i : Date.now();
                  this.vn[t] = r;
                  var e =
                    null === (n = this.Vt) || void 0 === n ? void 0 : n[t];
                  null != e &&
                    e.resolve &&
                    (e.resolve(r), (e.resolve = void 0), (e.reject = void 0));
                }
              }),
              (i.rejectSignal = function (t, i) {
                var n;
                if (null == this.vn[t]) {
                  this.vn[t] = i;
                  var r =
                    null === (n = this.Vt) || void 0 === n ? void 0 : n[t];
                  null != r &&
                    r.reject &&
                    (r.reject(i),
                    r.promise.catch(function () {}),
                    (r.resolve = void 0),
                    (r.reject = void 0));
                }
              }),
              (i.reset = function (t) {
                var i;
                this.vn[t] && delete this.vn[t];
                var n = null === (i = this.Vt) || void 0 === i ? void 0 : i[t];
                n && !n.resolve && delete this.Vt[t];
              }),
              t
            );
          })(),
          Tr = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'O', 'o'],
          Mr = {
            getPropertyPriority: function () {
              return '';
            },
            getPropertyValue: function () {
              return '';
            },
          };
        function Sr(t) {
          var i = t.replace(/[A-Z]/g, function (t) {
            return '-' + t.toLowerCase();
          });
          return Tr.some(function (t) {
            return i.startsWith(t + '-');
          })
            ? '-'.concat(i)
            : i;
        }
        function Rr(t, i, n) {
          if (i.startsWith('--')) return i;
          Bn || (Bn = A());
          var r = Bn[i];
          if (!r || n) {
            if (((r = i), void 0 === t[i])) {
              var e = (function (t) {
                  return t.charAt(0).toUpperCase() + t.slice(1);
                })(i),
                s = (function (t, i) {
                  for (var n = 0; n < Tr.length; n++) {
                    var r = Tr[n] + i;
                    if (void 0 !== t[r]) return r;
                  }
                  return '';
                })(t, e);
              void 0 !== t[s] && (r = s);
            }
            n || (Bn[i] = r);
          }
          return r;
        }
        function _r(t, i) {
          var n = t.style;
          for (var r in i)
            n.setProperty(Sr(Rr(n, r)), String(i[r]), 'important');
        }
        function kr(t, i, n, r, e) {
          var s = Rr(t.style, i, e);
          if (s) {
            var u = r ? n + r : n;
            t.style.setProperty(Sr(s), u);
          }
        }
        function Cr(t, i) {
          for (var n in i) kr(t, n, i[n]);
        }
        function Nr(t, i) {
          void 0 === i && (i = t.hasAttribute('hidden')),
            i ? t.removeAttribute('hidden') : t.setAttribute('hidden', '');
        }
        function Dr(t) {
          return ''.concat(t, 'px');
        }
        function jr(t, i) {
          return t.getComputedStyle(i) || Mr;
        }
        function Ur(t) {
          var i = t[Rr(t, 'visibilityState', !0)];
          if (i) return i;
          var n = Rr(t, 'hidden', !0);
          return n in t && t[n] ? xr : Ar;
        }
        function Lr(t, i) {
          if (t.addEventListener) {
            var n = Hr(t);
            n && t.addEventListener(n, i);
          }
        }
        function zr(t, i) {
          if (t.removeEventListener) {
            var n = Hr(t);
            n && t.removeEventListener(n, i);
          }
        }
        function Hr(t) {
          var i = Rr(t, 'hidden', !0),
            n = i.indexOf('Hidden');
          return -1 != n
            ? i.substring(0, n) + 'Visibilitychange'
            : 'visibilitychange';
        }
        var Gr = (function () {
            function t() {}
            return (
              (t.getTop = function (t) {
                return t.top;
              }),
              (t.getLocation = function (t) {
                return t.location;
              }),
              (t.getDocumentReferrer = function (t) {
                return t.document.referrer;
              }),
              (t.getHostname = function (t) {
                return t.location.hostname;
              }),
              (t.getUserAgent = function (t) {
                return t.navigator.userAgent;
              }),
              (t.getUserLanguage = function (t) {
                return t.navigator.userLanguage || t.navigator.language;
              }),
              (t.getDevicePixelRatio = function () {
                return self.devicePixelRatio || 1;
              }),
              (t.getSendBeacon = function (t) {
                if (t.navigator.sendBeacon)
                  return t.navigator.sendBeacon.bind(t.navigator);
              }),
              (t.getXMLHttpRequest = function (t) {
                return t.XMLHttpRequest;
              }),
              (t.getImage = function (t) {
                return t.Image;
              }),
              t
            );
          })(),
          Vr = '__AMP__',
          Fr = '-ampdoc-ext-known',
          Br = '-ampdoc-first-visible',
          qr = '-ampdoc-next-visible',
          $r = '-ampdoc-first-previewed',
          Wr = (function () {
            function t(t, i, n) {
              (this.win = t),
                (this.Bt = null),
                i &&
                  ((this.Bt = new Kr(t, { params: Qr(t, n) })),
                  (t.document.__AMPDOC = this.Bt));
            }
            var i = t.prototype;
            return (
              (i.isSingleDoc = function () {
                return !!this.Bt;
              }),
              (i.getSingleDoc = function () {
                return Zt(this.Bt);
              }),
              (i.qt = function (t) {
                return t.everAttached && 'function' == typeof t.getAmpDoc
                  ? t.getAmpDoc()
                  : null;
              }),
              (i.getAmpDocIfAvailable = function (t) {
                for (var i = t; i; ) {
                  var n = this.qt(t);
                  if (n) return n;
                  var r = _i(i);
                  if (!r) break;
                  var e = r.__AMPDOC;
                  if (e) return e;
                  i = r.host ? r.host : _n(r, this.win);
                }
                return null;
              }),
              (i.getAmpDoc = function (t) {
                var i = this.getAmpDocIfAvailable(t);
                if (!i) throw Qt().createError('No ampdoc found for', t);
                return i;
              }),
              (i.installShadowDoc = function (t, i, n) {
                Zt(!i.__AMPDOC);
                var r = new Jr(this.win, t, i, n);
                return (i.__AMPDOC = r), r;
              }),
              (i.installFieDoc = function (t, i, n) {
                var r = i.document;
                Zt(!r.__AMPDOC);
                var e = Zt(i.frameElement),
                  s = new Xr(i, t, this.getAmpDoc(e), n);
                return (r.__AMPDOC = s), s;
              }),
              t
            );
          })(),
          Yr = (function () {
            function t(t, i, n) {
              var r = this;
              (this.win = t),
                (this.$t = A()),
                (this.Wt = i),
                (this.Kt = (n && n.signals) || new Ir()),
                (this.Yt = (n && n.params) || A()),
                (this.Jt = null),
                (this.Xt = {});
              var e,
                s = this.Yt.visibilityState;
              Zt(
                !s ||
                  'prerender' === (e = s) ||
                  'preview' === e ||
                  'visible' === e ||
                  'hidden' === e ||
                  'paused' === e ||
                  'inactive' === e,
              ),
                (this.Qt = (n && n.visibilityState) || s || null),
                (this.J = null),
                (this.Zt = new Or()),
                (this.ti = null),
                (this.ii = []);
              var u = this.ni.bind(this);
              this.Wt && this.ii.push(this.Wt.onVisibilityChanged(u)),
                Lr(this.win.document, u),
                this.ii.push(function () {
                  return zr(r.win.document, u);
                }),
                this.ni();
            }
            var i = t.prototype;
            return (
              (i.dispose = function () {
                (function (t) {
                  var i = Ln(t),
                    n = function (t) {
                      if (!Object.prototype.hasOwnProperty.call(i, t))
                        return 'continue';
                      var n = i[t];
                      if (n.sharedInstance) return 'continue';
                      n.obj
                        ? Hn(t, n.obj)
                        : n.promise &&
                          n.promise.then(function (i) {
                            return Hn(t, i);
                          });
                    };
                  for (var r in i) n(r);
                })(this),
                  this.ii.forEach(function (t) {
                    return t();
                  });
              }),
              (i.isSingleDoc = function () {
                return Zt(null);
              }),
              (i.getParent = function () {
                return this.Wt;
              }),
              (i.signals = function () {
                return this.Kt;
              }),
              (i.getParam = function (t) {
                var i = this.Yt[t];
                return null == i ? null : i;
              }),
              (i.getMeta = function () {
                var t = this;
                return (
                  this.Jt ||
                    ((this.Jt = A()),
                    this.win.document.head
                      .querySelectorAll('meta[name]')
                      .forEach(function (i) {
                        var n = i.getAttribute('name'),
                          r = i.getAttribute('content');
                        n && null !== r && void 0 === t.Jt[n] && (t.Jt[n] = r);
                      })),
                  A(this.Jt)
                );
              }),
              (i.getMetaByName = function (t) {
                if (!t) return null;
                var i = this.getMeta()[t];
                return void 0 !== i ? i : null;
              }),
              (i.setMetaByName = function (t, i) {
                Zt(null);
              }),
              (i.declaresExtension = function (t, i) {
                var n = this.Xt[t];
                return !(!n || (i && n !== i));
              }),
              (i.declareExtension = function (t, i) {
                Zt(!this.Xt[t] || this.Xt[t] === i), (this.Xt[t] = i);
              }),
              (i.getExtensionVersion = function (t) {
                return this.Xt[t] || null;
              }),
              (i.setExtensionsKnown = function () {
                this.Kt.signal(Fr);
              }),
              (i.whenExtensionsKnown = function () {
                return this.Kt.whenSignal(Fr);
              }),
              (i.getRootNode = function () {
                return Zt(null);
              }),
              (i.getHeadNode = function () {}),
              (i.isBodyAvailable = function () {
                return Zt(!1);
              }),
              (i.getBody = function () {
                return Zt(null);
              }),
              (i.waitForBodyOpen = function () {
                return Zt(null);
              }),
              (i.isReady = function () {
                return Zt(null);
              }),
              (i.whenReady = function () {
                return Zt(null);
              }),
              (i.getUrl = function () {
                return Zt(null);
              }),
              (i.getElementById = function (t) {
                return this.getRootNode().getElementById(t);
              }),
              (i.contains = function (t) {
                return this.getRootNode().contains(t);
              }),
              (i.overrideVisibilityState = function (t) {
                this.Qt != t && ((this.Qt = t), this.ni());
              }),
              (i.ni = function () {
                for (
                  var t, i = Ur(this.win.document), n = Ar, r = this.Wt;
                  r;
                  r = r.getParent()
                )
                  if (r.getVisibilityState() != Ar) {
                    n = r.getVisibilityState();
                    break;
                  }
                var e = this.Qt || Ar;
                if (
                  ((t =
                    e == Ar && n == Ar && i == Ar
                      ? Ar
                      : i == xr && e == Er
                        ? i
                        : e == Er || e == Pr
                          ? e
                          : n == Er || n == Pr
                            ? n
                            : e == wr || i == wr || n == wr
                              ? wr
                              : e == yr || i == yr || n == yr
                                ? yr
                                : xr),
                  this.J != t)
                ) {
                  if (t == Ar) {
                    var s,
                      u = this.win.performance,
                      o = Math.floor(
                        null !== (s = u.timeOrigin) && void 0 !== s
                          ? s
                          : u.timing.navigationStart,
                      );
                    null != this.J && (o += Math.floor(u.now())),
                      (this.ti = o),
                      this.Kt.signal(Br, o),
                      this.Kt.signal(qr, o);
                  } else this.Kt.reset(qr);
                  t == wr && this.Kt.signal($r), (this.J = t), this.Zt.fire();
                }
              }),
              (i.whenFirstPreviewedOrVisible = function () {
                return Promise.race([
                  this.whenFirstPreviewed(),
                  this.whenFirstVisible(),
                ]);
              }),
              (i.whenFirstPreviewed = function () {
                return this.Kt.whenSignal($r).then(function () {});
              }),
              (i.whenFirstVisible = function () {
                return this.Kt.whenSignal(Br).then(function () {});
              }),
              (i.whenNextVisible = function () {
                return this.Kt.whenSignal(qr).then(function () {});
              }),
              (i.getFirstVisibleTime = function () {
                return this.Kt.get(Br);
              }),
              (i.getLastVisibleTime = function () {
                return this.ti;
              }),
              (i.getVisibilityState = function () {
                return Zt(this.J);
              }),
              (i.isPreview = function () {
                return this.J == wr;
              }),
              (i.isVisible = function () {
                return this.J == Ar;
              }),
              (i.hasBeenVisible = function () {
                return null != this.getLastVisibleTime();
              }),
              (i.onVisibilityChanged = function (t) {
                return this.Zt.add(t);
              }),
              (i.registerSingleton = function (t) {
                return !this.$t[t] && ((this.$t[t] = !0), !0);
              }),
              t
            );
          })(),
          Kr = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t, n) {
              var r;
              return (
                ((r = i.call(this, t, null, n)).ri = r.win.document.body
                  ? Promise.resolve(r.win.document.body)
                  : Ti(r.win.document).then(function () {
                      return r.getBody();
                    })),
                (r.ei = dn(r.win.document)),
                r
              );
            }
            var r = n.prototype;
            return (
              (r.isSingleDoc = function () {
                return !0;
              }),
              (r.getRootNode = function () {
                return this.win.document;
              }),
              (r.getUrl = function () {
                return Gr.getLocation(this.win).href;
              }),
              (r.getHeadNode = function () {
                return this.win.document.head;
              }),
              (r.isBodyAvailable = function () {
                return !!this.win.document.body;
              }),
              (r.getBody = function () {
                return this.win.document.body;
              }),
              (r.waitForBodyOpen = function () {
                return this.ri;
              }),
              (r.isReady = function () {
                return cn(this.win.document);
              }),
              (r.whenReady = function () {
                return this.ei;
              }),
              n
            );
          })(Yr),
          Jr = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t, n, r, e) {
              var s;
              ((s = i.call(this, t, null, e)).si = n),
                (s.oi = r),
                (s.ui = null);
              var u = new a();
              (s.ri = u.promise), (s.hi = u.resolve), (s.ai = !1);
              var o = new a();
              return (s.ei = o.promise), (s.ci = o.resolve), s;
            }
            var r = n.prototype;
            return (
              (r.isSingleDoc = function () {
                return !1;
              }),
              (r.getRootNode = function () {
                return this.oi;
              }),
              (r.getUrl = function () {
                return this.si;
              }),
              (r.getHeadNode = function () {
                return this.oi;
              }),
              (r.isBodyAvailable = function () {
                return !!this.ui;
              }),
              (r.getBody = function () {
                return this.ui;
              }),
              (r.setBody = function (t) {
                Zt(!this.ui), (this.ui = t), this.hi(t), (this.hi = void 0);
              }),
              (r.waitForBodyOpen = function () {
                return this.ri;
              }),
              (r.isReady = function () {
                return this.ai;
              }),
              (r.setReady = function () {
                Zt(!this.ai), (this.ai = !0), this.ci(), (this.ci = void 0);
              }),
              (r.whenReady = function () {
                return this.ei;
              }),
              (r.getMeta = function () {
                return A(this.Jt);
              }),
              (r.setMetaByName = function (t, i) {
                Zt(t), this.Jt || (this.Jt = A()), (this.Jt[t] = i);
              }),
              n
            );
          })(Yr),
          Xr = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t, n, r, e) {
              var s;
              ((s = i.call(this, t, r, e)).si = n),
                (s.ri = s.win.document.body
                  ? Promise.resolve(s.win.document.body)
                  : Ti(s.win.document).then(function () {
                      return s.getBody();
                    })),
                (s.ai = !1);
              var u = new a();
              return (s.ei = u.promise), (s.ci = u.resolve), s;
            }
            var r = n.prototype;
            return (
              (r.isSingleDoc = function () {
                return !1;
              }),
              (r.getRootNode = function () {
                return this.win.document;
              }),
              (r.getUrl = function () {
                return this.si;
              }),
              (r.getHeadNode = function () {
                return this.win.document.head;
              }),
              (r.isBodyAvailable = function () {
                return !!this.win.document.body;
              }),
              (r.getBody = function () {
                return this.win.document.body;
              }),
              (r.waitForBodyOpen = function () {
                return this.ri;
              }),
              (r.isReady = function () {
                return this.ai;
              }),
              (r.whenReady = function () {
                return this.ei;
              }),
              (r.setReady = function () {
                Zt(!this.ai), (this.ai = !0), this.ci(), (this.ci = void 0);
              }),
              n
            );
          })(Yr);
        function Qr(t, i) {
          var n = A();
          return (
            i
              ? Object.assign(n, i)
              : (t.name &&
                  0 == t.name.indexOf(Vr) &&
                  Object.assign(n, yt(t.name.substring(Vr.length))),
                t.location &&
                  t.location.hash &&
                  Object.assign(n, yt(t.location.hash))),
            n
          );
        }
        function Zr(t) {
          if (!t.hasAttribute('src') && 'srcset' in t == 0) {
            var i = t.getAttribute('srcset') || '',
              n = /\S+/.exec(i);
            if (null == n) return;
            var r = n[0];
            t.setAttribute('src', r);
          }
        }
        var te = 'nodisplay',
          ie = 'fixed',
          ne = 'fixed-height',
          re = 'responsive',
          ee = 'container',
          se = 'fill',
          ue = 'flex-item',
          oe = 'fluid',
          he = 'intrinsic',
          ae =
            /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;
        function ce(t) {
          if (
            'nodisplay' === (i = t) ||
            'fixed' === i ||
            'fixed-height' === i ||
            'responsive' === i ||
            'container' === i ||
            'fill' === i ||
            'flex-item' === i ||
            'fluid' === i ||
            'intrinsic' === i
          )
            return t;
          var i;
        }
        function fe(t) {
          return 'i-amphtml-layout-' + t;
        }
        function le(t) {
          return (
            t == ie ||
            t == ne ||
            t == re ||
            t == se ||
            t == ue ||
            t == oe ||
            t == he
          );
        }
        function ve(t) {
          return 'number' == typeof t
            ? t + 'px'
            : t &&
                /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(
                  t,
                )
              ? /^\d+(\.\d+)?$/.test(t)
                ? t + 'px'
                : t
              : void 0;
        }
        function de(t) {
          !(function (t) {
            ht(
              /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(
                null != t ? t : '',
              ),
              'Invalid length value: %s',
              t,
            );
          })(t);
          var i = /[a-z]+/i.exec(null != t ? t : '');
          return ht(i, 'Failed to read units from %s', t), i[0];
        }
        function me(t) {
          var i = parseFloat(t);
          return J(i) ? i : void 0;
        }
        function pe(t, i) {
          t.classList.add('i-amphtml-fill-content'),
            i && t.classList.add('i-amphtml-replaced-content');
        }
        function ge(t, i, n, r) {
          for (var e, s = o(F(t), !0); !(e = s()).done; ) {
            var u = e.value,
              h = i.getAttribute(u);
            null !== h ? n.setAttribute(u, h) : r && n.removeAttribute(u);
          }
        }
        var be,
          ye = 'amp:attached',
          we = 'amp:load-start',
          Ae = 'amp:load-end',
          xe = 'ready-upgrade',
          Ee = 'upgraded',
          Pe = 'built',
          Oe = 'mounted',
          Ie = 'load-start',
          Te = 'render-start',
          Me = 'load-end',
          Se = 'unload',
          Re = (function () {
            function t(t, i) {
              (this.t = t), (this.Ct = i), (this.fi = {}), (this.li = null);
            }
            var i = t.prototype;
            return (
              (i.start = function () {
                (this.li = this.fi), (this.fi = {});
              }),
              (i.resolveMatchQuery = function (t) {
                return '1' === this.vi(t, _e, '1');
              }),
              (i.resolveListQuery = function (t) {
                return this.vi(t, ke, '');
              }),
              (i.complete = function () {
                for (var t in this.li)
                  t in this.fi || Ce(this.li[t], this.Ct, !1);
                this.li = null;
              }),
              (i.dispose = function () {
                for (var t in this.fi) Ce(this.fi[t], this.Ct, !1);
                this.fi = {};
              }),
              (i.vi = function (t, i, n) {
                if (!t.trim()) return n;
                var r = this.fi[t];
                return (
                  r || (et(this.li), (r = this.li[t])),
                  r || Ce((r = i(this.t, t)), this.Ct, !0),
                  (this.fi[t] = r),
                  (function (t) {
                    for (var i = 0; i < t.length; i++) {
                      var n = t[i],
                        r = n.query,
                        e = n.value;
                      if (!r || r.matches) return e;
                    }
                    return '';
                  })(r)
                );
              }),
              t
            );
          })();
        function _e(t, i) {
          return [
            { query: t.matchMedia(i), value: '1' },
            { query: null, value: '' },
          ];
        }
        function ke(t, i) {
          return i
            .split(',')
            .map(function (i) {
              if (0 != (i = i.replace(/\s+/g, ' ').trim()).length) {
                var n, r, e;
                if (')' == i.charAt(i.length - 1)) {
                  var s = 1;
                  for (e = i.length - 2; e >= 0; e--) {
                    var u = i.charAt(e);
                    if (('(' == u ? s-- : ')' == u && s++, 0 == s)) break;
                  }
                  var o = e - 1;
                  if (e > 0)
                    for (e--; e >= 0; e--) {
                      var h = i.charAt(e);
                      if (
                        !(
                          '%' == h ||
                          '-' == h ||
                          '_' == h ||
                          (h >= 'a' && h <= 'z') ||
                          (h >= 'A' && h <= 'Z') ||
                          (h >= '0' && h <= '9')
                        )
                      )
                        break;
                    }
                  if (e >= o) return null;
                } else
                  for (e = i.length - 2; e >= 0; e--) {
                    var a = i.charAt(e);
                    if (
                      !(
                        '%' == a ||
                        '.' == a ||
                        (a >= 'a' && a <= 'z') ||
                        (a >= 'A' && a <= 'Z') ||
                        (a >= '0' && a <= '9')
                      )
                    )
                      break;
                  }
                return (
                  e >= 0
                    ? ((n = i.substring(0, e + 1).trim()),
                      (r = i.substring(e + 1).trim()))
                    : ((r = i), (n = void 0)),
                  r ? { query: n ? t.matchMedia(n) : null, value: r } : null
                );
              }
            })
            .filter(Boolean);
        }
        function Ce(t, i, n) {
          for (var r = 0; r < t.length; r++) {
            var e = t[r].query;
            e &&
              (void 0 !== e.onchange
                ? (e.onchange = n ? i : null)
                : n
                  ? e.addListener(i)
                  : e.removeListener(i));
          }
        }
        function Ne(t) {
          var i = t.ownerDocument || t;
          return (
            (be && be.ownerDocument === i) || (be = i.createElement('div')), De
          );
        }
        function De(t) {
          return (function (t, i) {
            if (
              (et(1 === i.length),
              et(Array.isArray(i) || x(i, 'raw')),
              self.trustedTypes && self.trustedTypes.createPolicy)
            ) {
              var n = self.trustedTypes.createPolicy(
                'static-template#createNode',
                {
                  createHTML: function (t) {
                    return i[0];
                  },
                },
              );
              t.innerHTML = n.createHTML('ignored');
            } else t.innerHTML = i[0];
            var r = t.firstElementChild;
            return et(r), et(!r.nextElementSibling), t.removeChild(r), r;
          })(be, t);
        }
        var je = [
            '<i-amphtml-sizer class=i-amphtml-sizer slot=i-amphtml-svc><img alt="" role=presentation aria-hidden=true class=i-amphtml-intrinsic-sizer></i-amphtml-sizer>',
          ],
          Ue = {
            'AMP-PIXEL': { width: '0px', height: '0px' },
            'AMP-ANALYTICS': { width: '1px', height: '1px' },
            'AMP-AUDIO': null,
            'AMP-SOCIAL-SHARE': { width: '60px', height: '44px' },
          };
        function Le(t) {
          var i = t.getAttribute('layout'),
            n = t.getAttribute('width'),
            r = t.getAttribute('height'),
            e = t.getAttribute('sizes'),
            s = t.getAttribute('heights'),
            u = i ? ce(i) : null;
          ht(void 0 !== u, 'Invalid "layout" value: %s, %s', i, t);
          var o = n && 'auto' != n ? ve(n) : n;
          ht(void 0 !== o, 'Invalid "width" value: %s, %s', n, t);
          var h,
            a,
            c,
            f,
            l = r && 'fluid' != r ? ve(r) : r;
          if (
            (ht(void 0 !== l, 'Invalid "height" value: %s, %s', r, t),
            (u && u != ie && u != ne) ||
              (o && l) ||
              ((f = (f = t.tagName).toUpperCase()), void 0 === Ue[f]))
          )
            (h = o), (a = l);
          else {
            var v = (function (t) {
              var i = t.tagName.toUpperCase();
              if ((et(void 0 !== Ue[i]), !Ue[i])) {
                var n = t.ownerDocument,
                  r = i.replace(/^AMP\-/, ''),
                  e = n.createElement(r);
                (e.controls = !0),
                  Cr(e, { position: 'absolute', visibility: 'hidden' }),
                  n.body.appendChild(e),
                  (Ue[i] = {
                    width: (e.offsetWidth || 1) + 'px',
                    height: (e.offsetHeight || 1) + 'px',
                  }),
                  n.body.removeChild(e);
              }
              return Ue[i];
            })(t);
            (h = o || u == ne ? o : v.width), (a = l || v.height);
          }
          return (
            ((c =
              u ||
              (h || a
                ? 'fluid' == a
                  ? oe
                  : !a || (h && 'auto' != h)
                    ? a && h && (e || s)
                      ? re
                      : ie
                    : ne
                : ee)) != ie &&
              c != ne &&
              c != re &&
              c != he) ||
              ht(a, 'The "height" attribute is missing: %s', t),
            c == ne &&
              ht(
                !h || 'auto' == h,
                'The "width" attribute must be missing or "auto": %s',
                t,
              ),
            (c != ie && c != re && c != he) ||
              ht(
                h && 'auto' != h,
                'The "width" attribute must be present and not "auto": %s',
                t,
              ),
            c == re || c == he
              ? ht(
                  de(h) == de(a),
                  'Length units should be the same for "width" and "height": %s, %s, %s',
                  n,
                  r,
                  t,
                )
              : ht(null === s, '"heights" attribute must be missing: %s', t),
            { layout: c, width: h, height: a }
          );
        }
        var ze,
          He = 'EXPERIMENTS',
          Ge = 'amp-experiment-toggles',
          Ve = '__AMP__EXPERIMENT_TOGGLES';
        function Fe(t, i) {
          return !!qe(t)[i];
        }
        function Be(t, i, n, r) {
          var e = Fe(t, i),
            s = null != n ? n : !e;
          if (s != e && ((qe(t)[i] = s), !r)) {
            var u = $e(t);
            (u[i] = s),
              (function (t, i) {
                var n = [];
                for (var r in i) n.push((!1 === i[r] ? '-' : '') + r);
                try {
                  var e;
                  null === (e = t.localStorage) ||
                    void 0 === e ||
                    e.setItem(Ge, n.join(','));
                } catch (t) {
                  Jt().error(He, 'Failed to save experiments to localStorage.');
                }
              })(t, u),
              Jt().warn(
                He,
                '"%s" experiment %s for the domain "%s". See: https://amp.dev/documentation/guides-and-tutorials/learn/experimental',
                i,
                s ? 'enabled' : 'disabled',
                t.location.hostname,
              );
          }
          return s;
        }
        function qe(t) {
          var i, n, r, e, s;
          if (t[Ve]) return t[Ve];
          t[Ve] = A();
          var u = t[Ve];
          et(u);
          var h = D(
            D({}, null !== (i = t.AMP_CONFIG) && void 0 !== i ? i : {}),
            null !== (n = t.AMP_EXP) && void 0 !== n
              ? n
              : at(
                  (null === (r = t.__AMP_EXP) || void 0 === r
                    ? void 0
                    : r.textContent) || '{}',
                ),
          );
          for (var a in h) {
            var c = h[a];
            'number' == typeof c &&
              c >= 0 &&
              c <= 1 &&
              (u[a] = Math.random() < c);
          }
          var f =
            null === (e = t.AMP_CONFIG) || void 0 === e
              ? void 0
              : e['allow-doc-opt-in'];
          if (V(f) && f.length) {
            var l = t.document.head.querySelector(
              'meta[name="amp-experiments-opt-in"]',
            );
            if (l)
              for (
                var v,
                  d,
                  m = o(
                    (null === (v = l.getAttribute('content')) || void 0 === v
                      ? void 0
                      : v.split(',')) || [],
                    !0,
                  );
                !(d = m()).done;

              ) {
                var p = d.value;
                f.includes(p) && (u[p] = !0);
              }
          }
          Object.assign(u, $e(t));
          var g =
            null === (s = t.AMP_CONFIG) || void 0 === s
              ? void 0
              : s['allow-url-opt-in'];
          if (V(g) && g.length)
            for (
              var b,
                y = yt(t.location.originalHash || t.location.hash),
                w = o(g, !0);
              !(b = w()).done;

            ) {
              var x = b.value,
                E = y['e-'.concat(x)];
              '1' == E && (u[x] = !0), '0' == E && (u[x] = !1);
            }
          return u;
        }
        function $e(t) {
          var i,
            n = '';
          try {
            var r;
            'localStorage' in t &&
              (n =
                null !== (r = t.localStorage.getItem(Ge)) && void 0 !== r
                  ? r
                  : '');
          } catch (t) {
            Qt().warn(He, 'Failed to retrieve experiments from localStorage.');
          }
          for (
            var e,
              s =
                (null === (i = n) || void 0 === i
                  ? void 0
                  : i.split(/\s*,\s*/g)) || [],
              u = A(),
              h = o(s, !0);
            !(e = h()).done;

          ) {
            var a = e.value;
            a && ('-' == a[0] ? (u[a.substr(1)] = !1) : (u[a] = !0));
          }
          return u;
        }
        function We(t, i, n, r) {
          var e = t,
            s = n,
            u = function (t) {
              try {
                return s(t);
              } catch (t) {
                var i, n;
                throw (
                  (null === (i = (n = self).__AMP_REPORT_ERROR) ||
                    void 0 === i ||
                    i.call(n, t),
                  t)
                );
              }
            },
            o = (function () {
              if (void 0 !== ze) return ze;
              ze = !1;
              try {
                var t = {
                  get capture() {
                    return (ze = !0), !1;
                  },
                };
                self.addEventListener('test-options', null, t),
                  self.removeEventListener('test-options', null, t);
              } catch (t) {}
              return ze;
            })(),
            h = !(null == r || !r.capture);
          return (
            e.addEventListener(i, u, o ? r : h),
            function () {
              null == e || e.removeEventListener(i, u, o ? r : h),
                (s = null),
                (e = null),
                (u = null);
            }
          );
        }
        var Ye = 'Failed to load:';
        function Ke(t, i, n, r) {
          var e = { detail: n };
          if ((Object.assign(e, r), 'function' == typeof t.CustomEvent))
            return new t.CustomEvent(i, e);
          var s = t.document.createEvent('CustomEvent');
          return s.initCustomEvent(i, !!e.bubbles, !!e.cancelable, n), s;
        }
        function Je(t, i, n, r) {
          return We(t, i, n, r);
        }
        function Xe(t) {
          return t.data;
        }
        function Qe(t, i, n, r) {
          var e = n,
            s = We(
              t,
              i,
              function (t) {
                try {
                  e(t);
                } finally {
                  (e = null), s();
                }
              },
              r,
            );
          return s;
        }
        function Ze(t) {
          var i, n;
          if (
            (function (t) {
              return !!(
                t.complete ||
                'complete' == t.readyState ||
                (ts(t) && t.readyState > 0) ||
                (t.document && 'complete' == t.document.readyState)
              );
            })(t)
          )
            return Promise.resolve(t);
          var r = ts(t);
          return r && t.__AMP_MEDIA_LOAD_FAILURE_SRC === t.currentSrc
            ? Promise.reject(t)
            : new Promise(function (e, s) {
                if (
                  ((i = r
                    ? Qe(t, 'loadedmetadata', e, { capture: !0 })
                    : Qe(t, 'load', e)),
                  t.tagName)
                ) {
                  var u = t;
                  if (
                    r &&
                    !t.hasAttribute('src') &&
                    !(u = wi(t, function (t) {
                      return 'SOURCE' === t.tagName;
                    }))
                  )
                    return s(new Error('Media has no source.'));
                  n = Qe(u, 'error', s);
                }
              }).then(
                function () {
                  return n && n(), t;
                },
                function () {
                  i && i(),
                    (function (t) {
                      ts(t) &&
                        (t.__AMP_MEDIA_LOAD_FAILURE_SRC = t.currentSrc || !0);
                      var i = t;
                      throw (
                        (i && i.src && (i = i.src), Jt().createError(Ye, i))
                      );
                    })(t);
                },
              );
        }
        function ts(t) {
          return 'AUDIO' === t.tagName || 'VIDEO' === t.tagName;
        }
        var is = {
          'amp-dynamic-css-classes': '[custom-element=amp-dynamic-css-classes]',
          variant: 'amp-experiment',
        };
        function ns(t) {
          var i = t.document;
          return (
            Zt(i.body),
            Object.keys(is).filter(function (t) {
              return i.querySelector(is[t]);
            })
          );
        }
        function rs(t, i, n, r, e) {
          var s = t.getHeadNode(),
            u = (function (t, i, n, r) {
              var e = t.__AMP_CSS_SM;
              e || (e = t.__AMP_CSS_SM = A());
              var s = !n && r && 'amp-custom' != r && 'amp-keyframes' != r,
                u = n ? 'amp-runtime' : s ? 'amp-extension='.concat(r) : null;
              if (u) {
                var o = es(t, e, u);
                if (o)
                  return (
                    'STYLE' == o.tagName &&
                      o.textContent !== i &&
                      (o.textContent = i),
                    o
                  );
              }
              var h = (t.ownerDocument || t).createElement('style');
              h.textContent = i;
              var a = null;
              return (
                n
                  ? h.setAttribute('amp-runtime', '')
                  : s
                    ? (h.setAttribute('amp-extension', r || ''),
                      (a = es(t, e, 'amp-runtime')))
                    : (r && h.setAttribute(r, ''), (a = t.lastChild)),
                (function (t, i) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null;
                  if (n) {
                    var r = n.nextSibling;
                    t.insertBefore(i, r);
                  } else Si(t, i);
                })(t, h, a),
                u && (e[u] = h),
                h
              );
            })(
              s,
              (function (t, i) {
                var n = t.__AMP_CSS_TR;
                return n ? n(i) : i;
              })(s, i),
              r || !1,
              e || null,
            );
          if (n) {
            var o = t.getRootNode();
            if (hs(o, u)) return n(u), u;
            var h = setInterval(function () {
              hs(o, u) && (clearInterval(h), n(u));
            }, 4);
          }
          return u;
        }
        function es(t, i, n) {
          if (i[n]) return i[n];
          var r = t.querySelector(
            'style['.concat(n, '], link[').concat(n, ']'),
          );
          return r ? ((i[n] = r), r) : null;
        }
        var ss = !1;
        function us(t) {
          Zt(t.defaultView), ss || ((ss = !0), os(t));
        }
        function os(t) {
          Cr(t.body, { opacity: 1, visibility: 'visible', animation: 'none' });
        }
        function hs(t, i) {
          for (var n = t.styleSheets, r = 0; r < n.length; r++)
            if (n[r].ownerNode == i) return !0;
          return !1;
        }
        var as,
          cs,
          fs = (function () {
            function t(t) {
              (this.Lt = t), (this.Ht = 0), (this.Ft = 0), (this.Gt = A());
            }
            var i = t.prototype;
            return (
              (i.has = function (t) {
                return !!this.Gt[t];
              }),
              (i.get = function (t) {
                var i = this.Gt[t];
                if (i) return (i.access = ++this.Ft), i.payload;
              }),
              (i.put = function (t, i) {
                this.has(t) || this.Ht++,
                  (this.Gt[t] = { payload: i, access: this.Ft }),
                  this.zt();
              }),
              (i.zt = function () {
                if (!(this.Ht <= this.Lt)) {
                  var t,
                    i = this.Gt,
                    n = this.Ft + 1;
                  for (var r in i) {
                    var e = i[r].access;
                    e < n && ((n = e), (t = r));
                  }
                  void 0 !== t && (delete i[t], this.Ht--);
                }
              }),
              t
            );
          })(),
          ls = new Set(['c', 'v', 'a', 'ad']),
          vs = '__amp_source_origin',
          ds = function (t) {
            return 'string' == typeof t ? ms(t) : t;
          };
        function ms(t, i) {
          return (
            as ||
              ((as = self.document.createElement('a')),
              (cs =
                self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new fs(100)))),
            ps(as, t, i ? null : cs)
          );
        }
        function ps(t, i, n) {
          if (n && n.has(i)) return n.get(i);
          (t.href = i), t.protocol || (t.href = t.href);
          var r,
            e = {
              href: t.href,
              protocol: t.protocol,
              host: t.host,
              hostname: t.hostname,
              port: '0' == t.port ? '' : t.port,
              pathname: t.pathname,
              search: t.search,
              hash: t.hash,
              origin: null,
            };
          '/' !== e.pathname[0] && (e.pathname = '/' + e.pathname),
            (('http:' == e.protocol && 80 == e.port) ||
              ('https:' == e.protocol && 443 == e.port)) &&
              ((e.port = ''), (e.host = e.hostname)),
            (r =
              t.origin && 'null' != t.origin
                ? t.origin
                : 'data:' != e.protocol && e.host
                  ? e.protocol + '//' + e.host
                  : e.href),
            (e.origin = r);
          var s = e;
          return n && n.put(i, s), s;
        }
        function gs(t, i, n) {
          if (!i) return t;
          var r = t.split('#', 2),
            e = r[0].split('?', 2);
          return (
            e[0] +
            (e[1]
              ? n
                ? '?'.concat(i, '&').concat(e[1])
                : '?'.concat(e[1], '&').concat(i)
              : '?'.concat(i)) +
            (r[1] ? '#'.concat(r[1]) : '')
          );
        }
        function bs(t, i) {
          return ''
            .concat(encodeURIComponent(t), '=')
            .concat(encodeURIComponent(i));
        }
        function ys(t, i) {
          return gs(t, ws(i));
        }
        function ws(t) {
          var i = [];
          for (var n in t) {
            var r = t[n];
            if (null != r) {
              r = F(r);
              for (var e = 0; e < r.length; e++) i.push(bs(n, r[e]));
            }
          }
          return i.join('&');
        }
        function As(t) {
          return (
            'https:' == (t = ds(t)).protocol ||
            'localhost' == t.hostname ||
            '127.0.0.1' == t.hostname ||
            W(t.hostname, '.localhost')
          );
        }
        function xs(t, i) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'source';
          return (
            ti(null != t, '%s %s must be available', i, n),
            ti(
              As(t) || /^\/\//.test(t),
              '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
              i,
              n,
              t,
            ),
            t
          );
        }
        function Es(t) {
          var i = t.indexOf('#');
          return -1 == i ? t : t.substring(0, i);
        }
        function Ps(t) {
          return xt.test(ds(t).origin);
        }
        function Os(t) {
          return !(t && pt.includes(ds(t).protocol));
        }
        function Is(t) {
          var i = ms(t),
            n = i.hash;
          return i.origin + i.pathname + Ts(i.search) + n;
        }
        function Ts(t) {
          return (function (t, i) {
            if (!t || '?' == t) return '';
            var n = new RegExp(
                '[?&]'.concat('(amp_(js[^&=]*|gsa|r|kit)|usqp)', '\\b[^&]*'),
                'g',
              ),
              r = t.replace(n, '').replace(/^[?&]/, '');
            return r ? '?' + r : '';
          })(t);
        }
        function Ms(t) {
          if (!Ps((t = ds(t)))) return t.href;
          var i = t.pathname.split('/'),
            n = i[1];
          ti(ls.has(n), 'Unknown path prefix in url %s', t.href);
          var r = i[2],
            e =
              's' == r
                ? 'https://' + decodeURIComponent(i[3])
                : 'http://' + decodeURIComponent(r);
          return (
            ti(e.indexOf('.') > 0, 'Expected a . in origin %s', e),
            i.splice(1, 's' == r ? 3 : 2),
            e + i.join('/') + Ts(t.search) + (t.hash || '')
          );
        }
        function Ss(t) {
          return ms(Ms(t)).origin;
        }
        function Rs(t, i) {
          return (
            (i = ds(i)),
            'function' == typeof URL
              ? new URL(t, i.href).toString()
              : (function (t, i) {
                  i = ds(i);
                  var n = ms((t = t.replace(/\\/g, '/')));
                  return t.toLowerCase().startsWith(n.protocol)
                    ? n.href
                    : t.startsWith('//')
                      ? i.protocol + t
                      : t.startsWith('/')
                        ? i.origin + t
                        : i.origin + i.pathname.replace(/\/[^/]*$/, '/') + t;
                })(t, i)
          );
        }
        function _s(t, i) {
          return (
            ks(i),
            (function (t, i, n, r) {
              return gs(t, bs('__amp_source_origin', n), void 0);
            })(i, 0, Ss(t.location.href))
          );
        }
        function ks(t) {
          var i = yt(ms(t).search);
          ti(!(vs in i), 'Source origin is not allowed in %s', t);
        }
        var Cs = 'CANCELLED',
          Ns = 'BLOCK_BY_CONSENT',
          Ds = self.__AMP_ERRORS || [];
        self.__AMP_ERRORS = Ds;
        var js = function (t) {
          return ((i = 0),
          (n = function () {
            var t = Math.pow(1.5, i++);
            return (
              1e3 *
              (t +
                (function (t, i) {
                  var n = t * (i = i || 0.3) * Math.random();
                  return Math.random() > 0.5 && (n *= -1), n;
                })(t))
            );
          }),
          (js = function (t) {
            return setTimeout(t, n());
          }))(t);
          var i, n;
        };
        function Us(t, i) {
          try {
            if (t)
              if (void 0 !== t.message) t = f(t);
              else {
                var n = t;
                (t = new Error(
                  (function (t) {
                    try {
                      return JSON.stringify(t);
                    } catch (i) {
                      return String(t);
                    }
                  })(n),
                )).origError = n;
              }
            else t = new Error('Unknown error');
            if (t.reported) return t;
            if (((t.reported = !0), t.messageArray)) {
              var r = q(t.messageArray, function (t) {
                return null == t ? void 0 : t.tagName;
              });
              r > -1 && (t.associatedElement = t.messageArray[r]);
            }
            var e = i || t.associatedElement;
            if (
              (e &&
                e.classList &&
                (e.classList.add('i-amphtml-error'),
                Dt().development &&
                  (e.classList.add('i-amphtml-element-error'),
                  e.setAttribute('error-message', t.message))),
              self.console && (tt(t.message) || !t.expected))
            ) {
              var s = console.error || console.log;
              t.messageArray
                ? s.apply(console, t.messageArray)
                : e
                  ? s.call(console, t.message, e)
                  : s.call(console, t.message);
            }
            e &&
              e.dispatchCustomEventForTesting &&
              e.dispatchCustomEventForTesting('amp:error', t.message),
              Hs.call(self, void 0, void 0, void 0, void 0, t);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
          return t;
        }
        function Ls() {
          return new Error(Cs);
        }
        function zs(t) {
          return (
            !!t &&
            ('string' == typeof t
              ? t.startsWith(Ns)
              : 'string' == typeof t.message && t.message.startsWith(Ns))
          );
        }
        function Hs(t, i, n, r, e) {
          var s = this;
          if (
            (!this || !this.document || (e && e.expected) || us(this.document),
            !Dt().development)
          ) {
            var u = !1;
            try {
              u = (function (t) {
                if (!t.document) return !1;
                for (
                  var i = t.document.querySelectorAll('script[src]'), n = 0;
                  n < i.length;
                  n++
                )
                  if (!Ps(i[n].src.toLowerCase())) return !0;
                return !1;
              })(self);
            } catch (t) {}
            if (!(u && Math.random() < 0.99)) {
              var o = (function (t, i, n, r, e, s) {
                t = (function (t, i) {
                  return (
                    i && (t = i.message ? i.message : String(i)),
                    t || (t = 'Unknown error'),
                    t
                  );
                })(t, e);
                var u,
                  o,
                  h = !(!e || !e.expected);
                if (!/_reported_/.test(t) && t != Cs) {
                  var a = !(self && self.window),
                    c = Math.random();
                  if (
                    !(
                      ((function (t) {
                        return -1 != t.indexOf(Ye);
                      })(t) ||
                        'Script error.' == t ||
                        a) &&
                      ((h = !0), c < 0.9999)
                    )
                  ) {
                    var f = tt(t);
                    if (!(f && c < 0.99)) {
                      var l = Object.create(null);
                      (l.v = Dt().rtvVersion),
                        (l.noAmp = s ? '1' : '0'),
                        (l.m = t.replace(X, '')),
                        (l.a = f ? '1' : '0'),
                        (l.ex = h ? '1' : '0'),
                        (l.dw = a ? '1' : '0');
                      var v = '1p';
                      if (
                        (self.context && self.context.location
                          ? ((v = '3p'), (l['3p'] = '1'))
                          : Dt().runtime && (v = Dt().runtime),
                        (l.rt = v),
                        (l.cdn = Tt),
                        'inabox' === v && (l.adid = Dt().a4aId),
                        (l.ca =
                          null !== (o = self.AMP_CONFIG) &&
                          void 0 !== o &&
                          o.canary
                            ? '1'
                            : '0'),
                        (l.bt =
                          (null === (u = self.AMP_CONFIG) || void 0 === u
                            ? void 0
                            : u.type) || 'unknown'),
                        self.location.ancestorOrigins &&
                          self.location.ancestorOrigins[0] &&
                          (l.or = self.location.ancestorOrigins[0]),
                        self.viewerState && (l.vs = self.viewerState),
                        self.parent && self.parent != self && (l.iem = '1'),
                        self.AMP && self.AMP.viewer)
                      ) {
                        var d = self.AMP.viewer.getResolvedViewerUrl(),
                          m = self.AMP.viewer.maybeGetMessagingOrigin();
                        d && (l.rvu = d), m && (l.mso = m);
                      }
                      var p,
                        g,
                        b,
                        y = [],
                        w = self[Ve] || null;
                      for (var A in w) {
                        var x = w[A];
                        y.push(''.concat(A, '=').concat(x ? '1' : '0'));
                      }
                      return (
                        (l.exps = y.join(',')),
                        e
                          ? ((l.el =
                              (null === (p = e.associatedElement) ||
                              void 0 === p
                                ? void 0
                                : p.tagName) || 'u'),
                            e.args && (l.args = JSON.stringify(e.args)),
                            f || e.ignoreStack || !e.stack || (l.s = e.stack),
                            e.message && (e.message += ' _reported_'))
                          : ((l.f = i || ''), (l.l = n || ''), (l.c = r || '')),
                        (l.r = self.document ? self.document.referrer : ''),
                        (l.ae = Ds.join(',')),
                        (l.fr =
                          self.location.originalHash || self.location.hash),
                        'production' === l.bt && (l.pt = '1'),
                        (b = t),
                        (g = Ds).length >= 25 && g.splice(0, g.length - 25 + 1),
                        g.push(b),
                        l
                      );
                    }
                  }
                }
              })(t, i, n, r, e, u);
              o &&
                js(function () {
                  try {
                    return (function (t, i) {
                      return i.pt && Math.random() < 0.9
                        ? h()
                        : (function (t, i) {
                            var n = Jn(t);
                            if (!n.isSingleDoc()) return Promise.resolve(!1);
                            var r = n.getSingleDoc();
                            if (
                              !r
                                .getRootNode()
                                .documentElement.hasAttribute(
                                  'report-errors-to-viewer',
                                )
                            )
                              return Promise.resolve(!1);
                            var e = mr(r);
                            return e.hasCapability('errorReporter')
                              ? e.isTrustedViewer().then(function (t) {
                                  return (
                                    !!t &&
                                    (e.sendMessage('error', {
                                      m: (n = i).m,
                                      a: n.a,
                                      s: n.s,
                                      el: n.el,
                                      ex: n.ex,
                                      v: n.v,
                                      pt: n.pt,
                                    }),
                                    !0)
                                  );
                                  var n;
                                })
                              : Promise.resolve(!1);
                          })(t, i).then(function (t) {
                            if (!t) {
                              var n = new XMLHttpRequest();
                              n.open('POST', Math.random() < 0.1 ? Rt : St, !0),
                                n.send(JSON.stringify(i));
                            }
                          });
                    })(s, o).catch(function () {});
                  } catch (t) {}
                });
            }
          }
        }
        var Gs = 'Resource',
          Vs = (function () {
            function t(t, i, n) {
              (i.__AMP__RESOURCE = this),
                (this.di = t),
                (this.element = i),
                (this.debugid = i.tagName.toLowerCase() + '#' + t),
                (this.hostWin = i.ownerDocument.defaultView),
                (this.mi = n),
                (this.pi = i.hasAttribute('placeholder')),
                (this.bi = !1),
                (this.gi = void 0),
                (this.yi = i.isBuilt() ? 1 : 0),
                0 == this.yi && i.isBuilding() && this.build(),
                (this.wi = -1),
                (this.Ai = 0),
                (this.xi = null),
                (this.Ei = null),
                (this.Oi = !1),
                (this.Ti = zi(-1e4, -1e4, 0, 0)),
                (this.Pi = null),
                (this.Ii = !1),
                (this.Si = null),
                (this.Mi = null),
                (this.Ri = void 0);
              var r = new a();
              (this._i = r.promise), (this.ki = r.resolve), (this.Ni = !1);
            }
            (t.forElement = function (i) {
              return Zt(t.forElementOptional(i));
            }),
              (t.forElementOptional = function (t) {
                return t.__AMP__RESOURCE;
              }),
              (t.setOwner = function (i, n) {
                Zt(n.contains(i)),
                  t.forElementOptional(i) &&
                    t.forElementOptional(i).updateOwner(n),
                  (i.__AMP__OWNER = n);
                for (
                  var r = i.getElementsByClassName('i-amphtml-element'), e = 0;
                  e < r.length;
                  e++
                ) {
                  var s = r[e];
                  t.forElementOptional(s) &&
                    t.forElementOptional(s).updateOwner(void 0);
                }
              });
            var i = t.prototype;
            return (
              (i.getId = function () {
                return this.di;
              }),
              (i.updateOwner = function (t) {
                this.gi = t;
              }),
              (i.getOwner = function () {
                if (void 0 === this.gi) {
                  for (var t = this.element; t; t = t.parentElement)
                    if (t.__AMP__OWNER) {
                      this.gi = t.__AMP__OWNER;
                      break;
                    }
                  void 0 === this.gi && (this.gi = null);
                }
                return this.gi;
              }),
              (i.hasOwner = function () {
                return !!this.getOwner();
              }),
              (i.getLayoutPriority = function () {
                return -1 != this.wi
                  ? this.wi
                  : this.element.getLayoutPriority();
              }),
              (i.updateLayoutPriority = function (t) {
                this.wi = t;
              }),
              (i.getState = function () {
                return this.yi;
              }),
              (i.isBuilt = function () {
                return this.element.isBuilt();
              }),
              (i.isBuilding = function () {
                return this.bi;
              }),
              (i.whenBuilt = function () {
                return this.element.signals().whenSignal('res-built');
              }),
              (i.build = function () {
                var t = this;
                return this.bi || !this.element.isUpgraded()
                  ? null
                  : ((this.bi = !0),
                    this.element.buildInternal().then(
                      function () {
                        (t.bi = !1),
                          (t.yi = 1),
                          t.element.signals().signal('res-built');
                      },
                      function (i) {
                        throw (
                          (t.maybeReportErrorOnBuildFailure(i),
                          (t.bi = !1),
                          t.element.signals().rejectSignal('res-built', i),
                          i)
                        );
                      },
                    ));
              }),
              (i.maybeReportErrorOnBuildFailure = function (t) {
                zs(t) || Qt().error(Gs, 'failed to build:', this.debugid, t);
              }),
              (i.changeSize = function (t, i, n) {
                this.element.applySize(t, i, n), this.requestMeasure();
              }),
              (i.overflowCallback = function (t, i, n, r) {
                t && (this.Ri = { height: i, width: n, margins: r }),
                  this.element.overflowCallback(t, i, n, r);
              }),
              (i.resetPendingChangeSize = function () {
                this.Ri = void 0;
              }),
              (i.getPendingChangeSize = function () {
                return this.Ri;
              }),
              (i.getUpgradeDelayMs = function () {
                return this.element.getUpgradeDelayMs();
              }),
              (i.measure = function () {
                if (
                  !(
                    this.pi &&
                    this.element.parentElement &&
                    this.element.parentElement.tagName.startsWith('AMP-')
                  ) ||
                  '__AMP__RESOURCE' in this.element.parentElement
                )
                  if (
                    this.element.ownerDocument &&
                    this.element.ownerDocument.defaultView
                  ) {
                    this.Ii = !1;
                    var t = this.Ti;
                    this.Ci();
                    var i,
                      n,
                      r = this.Ti,
                      e =
                        ((n = r),
                        !((i = t).width == n.width && i.height === n.height));
                    (1 == this.yi || t.top != r.top || e) &&
                      this.element.isUpgraded() &&
                      (1 == this.yi
                        ? (this.yi = 2)
                        : (4 != this.yi && 5 != this.yi) ||
                          !this.element.isRelayoutNeeded() ||
                          (this.yi = 2)),
                      this.hasBeenMeasured() || (this.Pi = r),
                      this.element.updateLayoutBox(r, e);
                  } else this.yi = 1;
              }),
              (i.ensureMeasured = function () {
                var t = this;
                return this.hasBeenMeasured()
                  ? h()
                  : pr(this.hostWin).measure(function () {
                      return t.measure();
                    });
              }),
              (i.Ci = function () {
                var t = gr(this.element);
                this.Ti = t.getLayoutRect(this.element);
                var i = !1;
                if (t.supportsPositionFixed() && this.isDisplayed())
                  for (
                    var n = this.mi.getAmpdoc().win,
                      r = n.document.body,
                      e = this.element;
                    e && e != r;
                    e = e.offsetParent
                  ) {
                    if (e.isAlwaysFixed && e.isAlwaysFixed()) {
                      i = !0;
                      break;
                    }
                    if (t.isDeclaredFixed(e) && 'fixed' == jr(n, e).position) {
                      i = !0;
                      break;
                    }
                  }
                (this.Oi = i),
                  i &&
                    (this.Ti = Gi(
                      this.Ti,
                      -t.getScrollLeft(),
                      -t.getScrollTop(),
                    ));
              }),
              (i.completeCollapse = function () {
                Nr(this.element, !1),
                  (this.Ti = zi(this.Ti.left, this.Ti.top, 0, 0)),
                  (this.Oi = !1),
                  this.element.updateLayoutBox(this.getLayoutBox());
                var t = this.getOwner();
                t && t.collapsedCallback(this.element);
              }),
              (i.completeExpand = function () {
                Nr(this.element, !0), this.requestMeasure();
              }),
              (i.isMeasureRequested = function () {
                return this.Ii;
              }),
              (i.hasBeenMeasured = function () {
                return !!this.Pi;
              }),
              (i.requestMeasure = function () {
                this.Ii = !0;
              }),
              (i.getLayoutSize = function () {
                return (
                  (i = (t = this.Ti).height), { width: t.width, height: i }
                );
                var t, i;
              }),
              (i.getLayoutBox = function () {
                if (!this.Oi) return this.Ti;
                var t = gr(this.element);
                return Gi(this.Ti, t.getScrollLeft(), t.getScrollTop());
              }),
              (i.getInitialLayoutBox = function () {
                return this.Pi || this.Ti;
              }),
              (i.isDisplayed = function () {
                if (
                  !this.element.ownerDocument ||
                  !this.element.ownerDocument.defaultView
                )
                  return !1;
                var t = this.element.getLayout() == oe,
                  i = this.getLayoutBox(),
                  n = i.height > 0 && i.width > 0;
                return t || n;
              }),
              (i.isFixed = function () {
                return this.Oi;
              }),
              (i.overlaps = function (t) {
                return (
                  (n = t),
                  (i = this.getLayoutBox()).top <= n.bottom &&
                    n.top <= i.bottom &&
                    i.left <= n.right &&
                    n.left <= i.right
                );
                var i, n;
              }),
              (i.prerenderAllowed = function () {
                return this.element.prerenderAllowed();
              }),
              (i.previewAllowed = function () {
                return this.element.previewAllowed();
              }),
              (i.isBuildRenderBlocking = function () {
                return this.element.isBuildRenderBlocking();
              }),
              (i.whenWithinViewport = function (t) {
                if ((Zt(!1 !== t), !this.isLayoutPending() || !0 === t))
                  return h();
                var i = t,
                  n = String(i);
                return this.Si && this.Si[n]
                  ? this.Si[n].promise
                  : this.isWithinViewportRatio(i)
                    ? h()
                    : ((this.Si = this.Si || {}),
                      (this.Si[n] = new a()),
                      this.Si[n].promise);
              }),
              (i.ji = function () {
                if (this.Si) {
                  var t = this.getDistanceViewportRatio();
                  for (var i in this.Si)
                    this.isWithinViewportRatio(parseFloat(i), t) &&
                      (this.Si[i].resolve(), delete this.Si[i]);
                }
              }),
              (i.getDistanceViewportRatio = function () {
                var t = gr(this.element).getRect(),
                  i = this.getLayoutBox(),
                  n = this.mi.getScrollDirection(),
                  r = 1,
                  e = 0;
                if (t.right < i.left || t.left > i.right)
                  return { distance: !1 };
                if (t.bottom < i.top)
                  (e = i.top - t.bottom), -1 == n && (r = 2);
                else {
                  if (!(t.top > i.bottom)) return { distance: !0 };
                  (e = t.top - i.bottom), 1 == n && (r = 2);
                }
                return {
                  distance: e,
                  scrollPenalty: r,
                  viewportHeight: t.height,
                };
              }),
              (i.isWithinViewportRatio = function (t, i) {
                if ('boolean' == typeof t) return t;
                var n = i || this.getDistanceViewportRatio(),
                  r = n.distance,
                  e = n.scrollPenalty,
                  s = n.viewportHeight;
                return 'boolean' == typeof r ? r : r < (s * t) / e;
              }),
              (i.renderOutsideViewport = function () {
                return (
                  this.ji(),
                  this.hasOwner() ||
                    this.isWithinViewportRatio(
                      this.element.renderOutsideViewport(),
                    )
                );
              }),
              (i.idleRenderOutsideViewport = function () {
                return this.isWithinViewportRatio(
                  this.element.idleRenderOutsideViewport(),
                );
              }),
              (i.layoutScheduled = function (t) {
                (this.yi = 3), (this.element.layoutScheduleTime = t);
              }),
              (i.layoutCanceled = function () {
                this.yi = this.hasBeenMeasured() ? 2 : 1;
              }),
              (i.startLayout = function () {
                var t = this;
                if (this.Mi) return this.Mi;
                if (4 == this.yi) return h();
                if (5 == this.yi) return Promise.reject(this.Ei);
                if ((Zt(0 != this.yi), Zt(this.isDisplayed()), 3 != this.yi)) {
                  var i = Qt().createExpectedError(
                    'startLayout called but not LAYOUT_SCHEDULED',
                    'currently: ',
                    this.yi,
                  );
                  return Us(i, this.element), Promise.reject(i);
                }
                if (this.Ai > 0 && !this.element.isRelayoutNeeded())
                  return (
                    Qt().fine(
                      Gs,
                      "layout canceled since it wasn't requested:",
                      this.debugid,
                      this.yi,
                    ),
                    (this.yi = 4),
                    h()
                  );
                Qt().fine(Gs, 'start layout:', this.debugid, 'count:', this.Ai),
                  this.Ai++,
                  (this.yi = 3),
                  (this.xi = new AbortController());
                var n = this.xi.signal,
                  r = new Promise(function (i, r) {
                    pr(t.hostWin).mutate(function () {
                      var e;
                      try {
                        e = t.element.layoutCallback(n);
                      } catch (t) {
                        r(t);
                      }
                      Promise.resolve(e).then(i, r);
                    }),
                      (n.onabort = function () {
                        return r(Ls());
                      });
                  }).then(
                    function () {
                      return t.Di(!0, n);
                    },
                    function (i) {
                      return t.Di(!1, n, i);
                    },
                  );
                return (this.Mi = r);
              }),
              (i.Di = function (t, i, n) {
                if (((this.xi = null), i.aborted)) {
                  var r = Qt().createError('layoutComplete race');
                  throw (
                    ((r.associatedElement = this.element),
                    Qt().expectedError(Gs, r),
                    Ls())
                  );
                }
                if (
                  (this.ki && (this.ki(), (this.ki = null)),
                  (this.Mi = null),
                  (this.yi = t ? 4 : 5),
                  (this.Ei = n),
                  !t)
                )
                  return (
                    Qt().fine(Gs, 'loading failed:', this.debugid, n),
                    Promise.reject(n)
                  );
                Qt().fine(Gs, 'layout complete:', this.debugid);
              }),
              (i.isLayoutPending = function () {
                return 4 != this.yi && 5 != this.yi;
              }),
              (i.loadedOnce = function () {
                return this.element.R1() ? this.element.whenLoaded() : this._i;
              }),
              (i.isInViewport = function () {
                return this.Ni && this.ji(), this.Ni;
              }),
              (i.setInViewport = function (t) {
                this.Ni = t;
              }),
              (i.unlayout = function () {
                0 != this.yi &&
                  1 != this.yi &&
                  2 != this.yi &&
                  (this.xi && (this.xi.abort(), (this.xi = null)),
                  this.setInViewport(!1),
                  this.element.unlayoutCallback() &&
                    (this.element.togglePlaceholder(!0),
                    (this.yi = 1),
                    (this.Ai = 0),
                    (this.Mi = null)));
              }),
              (i.getTaskId = function (t) {
                return this.debugid + '#' + t;
              }),
              (i.pause = function () {
                this.element.pause();
              }),
              (i.pauseOnRemove = function () {
                this.element.pause();
              }),
              (i.resume = function () {
                this.element.resume();
              }),
              (i.unload = function () {
                this.element.unmount();
              }),
              (i.disconnect = function () {
                delete this.element.__AMP__RESOURCE,
                  this.element.disconnect(!0);
              }),
              t
            );
          })(),
          Fs = 'ready-scan',
          Bs = 'scheduler',
          qs = '250% 31.25%',
          $s = (function () {
            function t(t) {
              var i = this;
              this.Ui = t;
              var n = t.win;
              (this.zi = new n.IntersectionObserver(
                function (t) {
                  return i.Li(t);
                },
                { root: Ni(n) ? n.document : null, rootMargin: qs },
              )),
                (this.Hi = new Map()),
                (this.Gi = new Map()),
                (this.Vi = []),
                (this.Fi = !1),
                t.whenReady().then(function () {
                  return i.Bi();
                }),
                (this.qi = t.onVisibilityChanged(function () {
                  return i.$i();
                }));
            }
            var i = t.prototype;
            return (
              (i.dispose = function () {
                this.zi.disconnect(),
                  this.Gi.clear(),
                  this.qi && (this.qi(), (this.qi = null));
              }),
              (i.scheduleAsap = function (t) {
                this.Gi.set(t, { asap: !0, isIntersecting: !1 }), this.Wi(t);
              }),
              (i.schedule = function (t) {
                this.Gi.has(t) ||
                  (t.deferredMount()
                    ? (this.Gi.set(t, { asap: !1, isIntersecting: !1 }),
                      this.zi.observe(t),
                      this.Hi.size > 0 &&
                        this.Hi.forEach(function (i, n) {
                          ji(n, t) && i.observe(t);
                        }))
                    : this.Gi.set(t, { asap: !1, isIntersecting: !0 }),
                  this.Wi(t));
              }),
              (i.unschedule = function (t) {
                this.Gi.has(t) &&
                  (this.Gi.delete(t),
                  this.zi.unobserve(t),
                  this.Hi.size > 0 &&
                    this.Hi.forEach(function (i) {
                      i.unobserve(t);
                    }),
                  this.Vi && ($(this.Vi, t), this.Bi()));
              }),
              (i.setContainer = function (t, i) {
                var n = this;
                if (!this.Hi.has(t)) {
                  var r = new this.Ui.win.IntersectionObserver(
                    function (t) {
                      return n.Li(t);
                    },
                    { root: i || t, rootMargin: qs },
                  );
                  this.Hi.set(t, r),
                    this.Gi.forEach(function (i, n) {
                      !i.asap && ji(t, n) && r.observe(n);
                    });
                }
              }),
              (i.removeContainer = function (t) {
                var i = this.Hi.get(t);
                i && (i.disconnect(), this.Hi.delete(t));
              }),
              (i.Ki = function () {
                var t = this;
                this.Ui.isReady() &&
                  !this.Fi &&
                  ((this.Fi = !0),
                  this.Ui.win.setTimeout(function () {
                    t.Ui.signals().signal(Fs);
                  }, 50));
              }),
              (i.$i = function () {
                var t = this,
                  i = this.Ui.getVisibilityState();
                (i != Ar && i != xr && i != yr && i != wr) ||
                  this.Gi.forEach(function (i, n) {
                    return t.Yi(n);
                  });
              }),
              (i.Wi = function (t) {
                var i = this.Vi;
                i ? (i.includes(t) || i.push(t), this.Bi()) : this.Yi(t);
              }),
              (i.Bi = function () {
                var t = this.Ui.isReady(),
                  i = this.Vi;
                if (i)
                  for (var n = 0; n < i.length; n++) {
                    var r = i[n];
                    (t || ki(r, this.Ui.getRootNode())) &&
                      (i.splice(n--, 1), this.Yi(r));
                  }
                t && ((this.Vi = null), this.Ki());
              }),
              (i.Li = function (t) {
                for (var i = 0; i < t.length; i++) {
                  var n = t[i],
                    r = n.isIntersecting,
                    e = n.target,
                    s = this.Gi.get(e);
                  if (s) {
                    var u = r || s.isIntersecting;
                    u !== s.isIntersecting &&
                      this.Gi.set(e, { asap: s.asap, isIntersecting: u }),
                      u && this.Yi(e);
                  }
                }
              }),
              (i.Yi = function (t) {
                var i = this.Vi,
                  n = !(i && i.includes(t)),
                  r = this.Gi.get(t) || { asap: !1, isIntersecting: !1 },
                  e = r.asap,
                  s = r.isIntersecting,
                  u = this.Ui.getVisibilityState();
                if (
                  n &&
                  (e || s) &&
                  (u == Ar ||
                    u == xr ||
                    (u == yr && t.prerenderAllowed()) ||
                    (u == wr && t.previewAllowed()))
                ) {
                  this.unschedule(t);
                  var o = this.Ui.win;
                  (e || t.getBuildPriority() <= 0
                    ? o.setTimeout
                    : o.requestIdleCallback || o.setTimeout)(function () {
                    return t.mountInternal();
                  });
                }
              }),
              t
            );
          })();
        function Ws(t) {
          return Pn(t, Bs, $s), In(t, Bs);
        }
        var Ys = (function () {
            function t() {
              this.Ji = [];
            }
            var n = t.prototype;
            return (
              (n.peek = function () {
                var t = this.length;
                return t ? this.Ji[t - 1].item : null;
              }),
              (n.enqueue = function (t, i) {
                if (isNaN(i)) throw new Error('Priority must not be NaN.');
                var n = this.Xi(i);
                this.Ji.splice(n, 0, { item: t, priority: i });
              }),
              (n.Xi = function (t) {
                for (
                  var i = -1, n = 0, r = this.length;
                  n <= r && (i = Math.floor((n + r) / 2)) !== this.length;

                )
                  if (this.Ji[i].priority < t) n = i + 1;
                  else {
                    if (!(i > 0 && this.Ji[i - 1].priority >= t)) break;
                    r = i - 1;
                  }
                return i;
              }),
              (n.forEach = function (t) {
                for (var i = this.length; i--; ) t(this.Ji[i].item);
              }),
              (n.dequeue = function () {
                var t = this.Ji.pop();
                return t ? t.item : null;
              }),
              i(t, [
                {
                  key: 'length',
                  get: function () {
                    return this.Ji.length;
                  },
                },
              ]),
              t
            );
          })(),
          Ks = 'CHUNK',
          Js = /nochunking=1/.test(self.location.hash),
          Xs = h();
        function Qs(t) {
          return Pn(t, 'chunk', eu), In(t, 'chunk');
        }
        function Zs(t, i, n) {
          if (Js) Xs.then(i);
          else {
            var r = Qs(t.documentElement || t);
            r.runForStartup(i),
              n &&
                r.runForStartup(function () {
                  r.Qi = !0;
                });
          }
        }
        function tu(t, i, n) {
          Js ? Xs.then(i) : Qs(t).run(i, n);
        }
        var iu = 'not_run',
          nu = (function () {
            function t(t) {
              (this.state = iu), (this.Zi = t);
            }
            var i = t.prototype;
            return (
              (i.En = function (t) {
                if ('run' != this.state) {
                  this.state = 'run';
                  try {
                    this.Zi(t);
                  } catch (t) {
                    throw (this.On(t), t);
                  }
                }
              }),
              (i.Tn = function () {
                return this.Zi.displayName || this.Zi.name;
              }),
              (i.On = function (t) {}),
              (i.Pn = function () {
                return !1;
              }),
              (i.In = function () {
                return !1;
              }),
              t
            );
          })(),
          ru = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t, n, r) {
              var e;
              return ((e = i.call(this, t)).Sn = r), e;
            }
            var r = n.prototype;
            return (
              (r.On = function (t) {
                us(self.document);
              }),
              (r.Pn = function () {
                return this.Rn();
              }),
              (r.In = function () {
                return this.Sn._n;
              }),
              (r.Rn = function () {
                return this.Sn.ampdoc.isVisible();
              }),
              n
            );
          })(nu),
          eu = (function () {
            function t(t) {
              var i,
                n = this;
              (this.ampdoc = t),
                (this.t = t.win),
                (this.kn = new Ys()),
                (this.Nn = this.Cn.bind(this)),
                (this.jn = 0),
                (this.Dn = !(
                  !this.t.navigator.scheduling ||
                  !this.t.navigator.scheduling.isInputPending
                )),
                (this.Un = !1),
                (this.Qi = this.t.document.documentElement.hasAttribute(
                  'i-amphtml-no-boilerplate',
                )),
                this.t.addEventListener('message', function (t) {
                  'amp-macro-task' == Xe(t) && n.Cn(null);
                }),
                (this._n = !1),
                ((i = t), Mn(i, 'viewer')).then(function () {
                  n._n = !0;
                }),
                t.onVisibilityChanged(function () {
                  t.isVisible() && n.zn();
                });
            }
            var i = t.prototype;
            return (
              (i.run = function (t, i) {
                var n = new nu(t);
                this.Ln(n, i);
              }),
              (i.runForStartup = function (t) {
                var i = new ru(t, this.t, this);
                this.Ln(i, Number.POSITIVE_INFINITY);
              }),
              (i.Ln = function (t, i) {
                this.kn.enqueue(t, i), this.zn();
              }),
              (i.Hn = function (t) {
                for (var i = this.kn.peek(); i && i.state !== iu; )
                  this.kn.dequeue(), (i = this.kn.peek());
                return i && t && this.kn.dequeue(), i;
              }),
              (i.Cn = function (t) {
                var i,
                  n = this,
                  r = this.Hn(!0);
                if (!r) return (this.Un = !1), (this.jn = 0), !1;
                try {
                  (i = Date.now()), r.En(t);
                } finally {
                  Xs.then()
                    .then()
                    .then()
                    .then()
                    .then()
                    .then()
                    .then()
                    .then()
                    .then(function () {
                      (n.Un = !1),
                        (n.jn += Date.now() - i),
                        Qt().fine(
                          Ks,
                          r.Tn(),
                          'Chunk duration',
                          Date.now() - i,
                          n.jn,
                        ),
                        n.zn();
                    });
                }
                return !0;
              }),
              (i.Gn = function (t) {
                var i = this;
                if (
                  this.Qi &&
                  (this.Dn
                    ? this.t.navigator.scheduling.isInputPending()
                    : this.jn > 5)
                )
                  return (this.jn = 0), void this.Vn();
                Xs.then(function () {
                  i.Nn(t);
                });
              }),
              (i.zn = function () {
                if (!this.Un) {
                  var t = this.Hn();
                  if (t)
                    return t.Pn()
                      ? ((this.Un = !0), void this.Gn(null))
                      : void (t.In() && this.t.requestIdleCallback
                          ? (function (t, i, n, r) {
                              var e = Date.now();
                              t.requestIdleCallback(
                                function i(s) {
                                  if (s.timeRemaining() < 15) {
                                    var u = n - (Date.now() - e);
                                    u <= 0 || s.didTimeout
                                      ? (Qt().fine(
                                          Ks,
                                          'Timed out',
                                          n,
                                          s.didTimeout,
                                        ),
                                        r(s))
                                      : (Qt().fine(
                                          Ks,
                                          'Rescheduling with',
                                          u,
                                          s.timeRemaining(),
                                        ),
                                        t.requestIdleCallback(i, {
                                          timeout: u,
                                        }));
                                  } else
                                    Qt().fine(
                                      Ks,
                                      'Running idle callback with ',
                                      15,
                                    ),
                                      r(s);
                                },
                                { timeout: n },
                              );
                            })(this.t, 0, 2e3, this.Nn)
                          : this.Vn());
                }
              }),
              (i.Vn = function () {
                this.t.postMessage('amp-macro-task', '*');
              }),
              t
            );
          })(),
          su = 'activate',
          uu = (function () {
            function t(t) {
              (this.element = t),
                (this.win = oi(t)),
                (this.actionMap_ = null),
                (this.defaultActionAlias_ = null);
            }
            (t.R1 = function () {
              return !1;
            }),
              (t.deferredMount = function (t) {
                return !0;
              }),
              (t.prerenderAllowed = function (t) {
                return !1;
              }),
              (t.previewAllowed = function (t) {
                return this.prerenderAllowed(t);
              }),
              (t.usesLoading = function (t) {
                return !1;
              }),
              (t.createLoaderLogoCallback = function (t) {
                return {};
              }),
              (t.getBuildPriority = function (t) {
                return 0;
              }),
              (t.getPreconnects = function (t) {
                return null;
              }),
              (t.requiresShadowDom = function () {
                return !1;
              });
            var i = t.prototype;
            return (
              (i.signals = function () {
                return this.element.signals();
              }),
              (i.getDefaultActionAlias = function () {
                return this.defaultActionAlias_;
              }),
              (i.getLayoutPriority = function () {
                return 0;
              }),
              (i.updateLayoutPriority = function (t) {
                this.element
                  .getResources()
                  .updateLayoutPriority(this.element, t);
              }),
              (i.getLayout = function () {
                return this.element.getLayout();
              }),
              (i.getLayoutBox = function () {
                return this.element.getLayoutBox();
              }),
              (i.getLayoutSize = function () {
                return this.element.getLayoutSize();
              }),
              (i.getAmpDoc = function () {
                return this.element.getAmpDoc();
              }),
              (i.getVsync = function () {
                return pr(this.win);
              }),
              (i.getConsentPolicy = function () {
                var t = null;
                return (
                  this.element.hasAttribute('data-block-on-consent') &&
                    (t =
                      this.element.getAttribute('data-block-on-consent') ||
                      'default'),
                  t
                );
              }),
              (i.isLayoutSupported = function (t) {
                return t == te;
              }),
              (i.isAlwaysFixed = function () {
                return !1;
              }),
              (i.upgradeCallback = function () {
                return null;
              }),
              (i.buildCallback = function () {}),
              (i.preconnectCallback = function (t) {}),
              (i.attachedCallback = function () {}),
              (i.detachedCallback = function () {}),
              (i.setAsContainer = function (t) {
                this.element.setAsContainerInternal(t);
              }),
              (i.removeAsContainer = function () {
                this.element.removeAsContainerInternal();
              }),
              (i.isBuildRenderBlocking = function () {
                return !1;
              }),
              (i.createPlaceholderCallback = function () {
                return null;
              }),
              (i.renderOutsideViewport = function () {
                return 'inabox' == Dt(this.win).runtime || 3;
              }),
              (i.idleRenderOutsideViewport = function () {
                return !1;
              }),
              (i.ensureLoaded = function () {}),
              (i.setReadyState = function (t, i) {
                this.element.setReadyStateInternal(t, i);
              }),
              (i.mountCallback = function (t) {}),
              (i.unmountCallback = function () {}),
              (i.isRelayoutNeeded = function () {
                return !1;
              }),
              (i.layoutCallback = function () {
                return h();
              }),
              (i.firstLayoutCompleted = function () {
                this.togglePlaceholder(!1);
              }),
              (i.pauseCallback = function () {}),
              (i.resumeCallback = function () {}),
              (i.unlayoutCallback = function () {
                return !1;
              }),
              (i.unlayoutOnPause = function () {
                return !1;
              }),
              (i.reconstructWhenReparented = function () {
                return !0;
              }),
              (i.loadPromise = function (t) {
                return Ze(t);
              }),
              (i.registerAction = function (t, i) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 2;
                ou(this), (this.actionMap_[t] = { handler: i, minTrust: n });
              }),
              (i.registerDefaultAction = function (t) {
                var i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : su,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 2;
                Zt(!this.defaultActionAlias_),
                  this.registerAction(i, t, n),
                  (this.defaultActionAlias_ = i);
              }),
              (i.executeAction = function (t, i) {
                var n = t.method;
                n === su && (n = this.defaultActionAlias_ || n), ou(this);
                var r = this.actionMap_[n],
                  e = this.element.tagName;
                ti(r, 'Method not found: '.concat(n, ' in ').concat(e));
                var s = r.handler,
                  u = r.minTrust;
                if (t.satisfiesTrust(u)) return s(t);
              }),
              (i.forwardEvents = function (t, i) {
                var n = this,
                  r = (V(t) ? t : [t]).map(function (t) {
                    return Je(i, t, function (i) {
                      Di(n.element, t, Xe(i) || {});
                    });
                  });
                return function () {
                  return r.forEach(function (t) {
                    return t();
                  });
                };
              }),
              (i.getPlaceholder = function () {
                return this.element.getPlaceholder();
              }),
              (i.togglePlaceholder = function (t) {
                this.element.togglePlaceholder(t);
              }),
              (i.getFallback = function () {
                return this.element.getFallback();
              }),
              (i.toggleFallback = function (t) {
                this.element.toggleFallback(t);
              }),
              (i.toggleLoading = function (t) {
                var i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                this.element.toggleLoading(t, i);
              }),
              (i.getOverflowElement = function () {
                return this.element.getOverflowElement();
              }),
              (i.renderStarted = function () {
                this.element.renderStarted();
              }),
              (i.getViewport = function () {
                return gr(this.getAmpDoc());
              }),
              (i.getIntersectionElementLayoutBox = function () {
                return this.getLayoutBox();
              }),
              (i.collapse = function () {
                sr(this.getAmpDoc()).collapseElement(this.element);
              }),
              (i.attemptCollapse = function () {
                return sr(this.getAmpDoc()).attemptCollapse(this.element);
              }),
              (i.forceChangeHeight = function (t) {
                sr(this.getAmpDoc()).forceChangeSize(this.element, t, void 0);
              }),
              (i.attemptChangeHeight = function (t) {
                return sr(this.getAmpDoc()).requestChangeSize(
                  this.element,
                  t,
                  void 0,
                );
              }),
              (i.attemptChangeSize = function (t, i, n) {
                return sr(this.getAmpDoc()).requestChangeSize(
                  this.element,
                  t,
                  i,
                  void 0,
                  n,
                );
              }),
              (i.measureElement = function (t) {
                return sr(this.getAmpDoc()).measureElement(t);
              }),
              (i.mutateElement = function (t, i) {
                return this.measureMutateElement(null, t, i);
              }),
              (i.measureMutateElement = function (t, i, n) {
                return sr(this.getAmpDoc()).measureMutateElement(
                  n || this.element,
                  t,
                  i,
                );
              }),
              (i.mutateElementSkipRemeasure = function (t) {
                return sr(this.getAmpDoc()).mutateElement(this.element, t, !0);
              }),
              (i.collapsedCallback = function (t) {}),
              (i.expand = function () {
                sr(this.getAmpDoc()).expandElement(this.element);
              }),
              (i.mutatedAttributesCallback = function (t) {}),
              (i.onLayoutMeasure = function () {}),
              (i.user = function () {
                return Jt(this.element);
              }),
              (i.getApi = function () {
                return this;
              }),
              t
            );
          })();
        function ou(t) {
          t.actionMap_ || (t.actionMap_ = t.win.Object.create(null));
        }
        var hu,
          au = (function (t) {
            U(n, t);
            var i = H(n);
            function n() {
              return i.apply(this, arguments);
            }
            return n;
          })(uu),
          cu = Date.now(),
          fu = { bubbles: !1 },
          lu = function () {
            return !0;
          },
          vu = [],
          du = new Set();
        function mu(t, n) {
          var r = (function (t, n) {
              if (t.__AMP_BASE_CE_CLASS) return t.__AMP_BASE_CE_CLASS;
              var r = (function (r) {
                U(s, r);
                var e = H(s);
                function s() {
                  var t;
                  return (t = e.call(this)).createdCallback(), t;
                }
                var u = s.prototype;
                return (
                  (u.createdCallback = function () {
                    (this.Fn = !1),
                      (this.Bn = !1),
                      (this.qn = null),
                      (this.$n = !1),
                      (this.Wn = null),
                      (this.Kn = null),
                      (this.Yn = 'upgrading'),
                      (this.everAttached = !1),
                      (this.Ui = null),
                      (this.mi = null),
                      (this.Jn = te),
                      (this.Ai = 0),
                      (this.Xn = !1),
                      (this.warnOnMissingOverflow = !0),
                      (this.sizerElement = void 0),
                      (this.Qn = void 0),
                      (this.layoutScheduleTime = void 0);
                    var i = this,
                      n =
                        t.__AMP_EXTENDED_ELEMENTS &&
                        t.__AMP_EXTENDED_ELEMENTS[this.localName];
                    (this.Zn = n === au ? null : n || null),
                      this.Zn || vu.push(this),
                      (this.tr = null),
                      (this.ir = 1),
                      (this.nr = 0),
                      (this.rr = void 0),
                      (this.er = void 0),
                      (this.Kt = new Ir()),
                      this.Zn && this.Kt.signal(xe);
                    var r = (function (t, i) {
                      return Gn((t = Rn(t)), i) ? Nn(t, i) : null;
                    })(t, 'performance');
                    (this.sr = r && r.isPerformanceTrackingOn()),
                      (this.ur = null),
                      i.__AMP_UPG_RES &&
                        (i.__AMP_UPG_RES(i),
                        delete i.__AMP_UPG_RES,
                        delete i.__AMP_UPG_PRM);
                  }),
                  (u.signals = function () {
                    return this.Kt;
                  }),
                  (u.getAmpDoc = function () {
                    return Zt(this.Ui), this.Ui;
                  }),
                  (u.getResources = function () {
                    return Zt(this.mi), this.mi;
                  }),
                  (u.isUpgraded = function () {
                    return 2 == this.ir;
                  }),
                  (u.whenUpgraded = function () {
                    return this.Kt.whenSignal(Ee);
                  }),
                  (u.upgrade = function (t) {
                    this.er ||
                      (1 == this.ir &&
                        ((this.Zn = t),
                        this.Kt.signal(xe),
                        this.everAttached && this.hr()));
                  }),
                  (u.markUnresolved = function () {
                    this.Zn ||
                      this.classList.add(
                        'amp-unresolved',
                        'i-amphtml-unresolved',
                      );
                  }),
                  (u.getUpgradeDelayMs = function () {
                    return this.nr;
                  }),
                  (u.ar = function (i, n) {
                    (this.tr = i),
                      (this.nr = t.Date.now() - n),
                      (this.ir = 2),
                      this.setReadyStateInternal(sn),
                      this.classList.remove(
                        'amp-unresolved',
                        'i-amphtml-unresolved',
                      ),
                      this.cr(),
                      this.dispatchCustomEventForTesting(ye),
                      this.R1() || this.getResources().upgraded(this),
                      this.Kt.signal(Ee);
                  }),
                  (u.cr = function () {
                    this.Jn != te &&
                      this.tr &&
                      !this.tr.isLayoutSupported(this.Jn) &&
                      (ti(
                        this.getAttribute('layout'),
                        'The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details.',
                      ),
                      ti(!1, 'Layout not supported: '.concat(this.Jn)));
                  }),
                  (u.getBuildPriority = function () {
                    return this.Zn ? this.Zn.getBuildPriority(this) : 3;
                  }),
                  (u.getLayoutPriority = function () {
                    return this.tr ? this.tr.getLayoutPriority() : 3;
                  }),
                  (u.getDefaultActionAlias = function () {
                    return (
                      Zt(this.isUpgraded()), this.tr.getDefaultActionAlias()
                    );
                  }),
                  (u.isBuilding = function () {
                    return !!this.qn;
                  }),
                  (u.isBuilt = function () {
                    return this.Fn;
                  }),
                  (u.whenBuilt = function () {
                    return this.Kt.whenSignal(Pe);
                  }),
                  (u.buildInternal = function () {
                    var t = this;
                    if ((gu(this), Zt(this.Zn), this.qn)) return this.qn;
                    this.setReadyStateInternal(sn);
                    var i = this.lr();
                    this.vr();
                    var n = i
                      .then(function () {
                        var i,
                          n = t.dr(),
                          r = n ? null : t.mr();
                        if (n || r)
                          return ((i = t),
                          Fn(i, 'consentPolicyManager', 'amp-consent'))
                            .then(function (t) {
                              return (
                                !t ||
                                (n
                                  ? t.whenPolicyUnblock(n)
                                  : t.whenPurposesUnblock(r))
                              );
                            })
                            .then(function (t) {
                              if (!t) throw new Error(Ns);
                            });
                      })
                      .then(function () {
                        return Zt(t.tr).buildCallback();
                      });
                    return (this.qn = n.then(
                      function () {
                        if (
                          ((t.Fn = !0),
                          t.classList.add('i-amphtml-built'),
                          t.classList.remove(
                            'i-amphtml-notbuilt',
                            'amp-notbuilt',
                          ),
                          t.Kt.signal(Pe),
                          t.R1()
                            ? t.setReadyStateInternal(t.Yn != sn ? t.Yn : un)
                            : (t.setReadyStateInternal(on), t.preconnect(!1)),
                          t.Bn && t.pr(),
                          t.rr && fr(oi(t)).delay(t.br.bind(t), 1),
                          !t.getPlaceholder())
                        ) {
                          var i = t.createPlaceholder();
                          i && t.appendChild(i);
                        }
                      },
                      function (i) {
                        throw (
                          (t.Kt.rejectSignal(Pe, i),
                          t.R1() && t.setReadyStateInternal(an, i),
                          zs(i) || Us(i, t),
                          i)
                        );
                      },
                    ));
                  }),
                  (u.build = function () {
                    var t = this;
                    return this.qn
                      ? this.qn
                      : this.Kt.whenSignal(xe).then(function () {
                          return (
                            t.R1() && Ws(t.getAmpDoc()).scheduleAsap(t),
                            t.whenBuilt()
                          );
                        });
                  }),
                  (u.mountInternal = function () {
                    var t = this;
                    if (this.Wn) return this.Wn;
                    this.Kn = this.Kn || new AbortController();
                    var i = this.Kn.signal;
                    return (this.Wn = this.buildInternal()
                      .then(function () {
                        if ((Zt(t.R1()), !i.aborted)) {
                          t.setReadyStateInternal(
                            t.Yn != un ? t.Yn : t.Zn.usesLoading(t) ? on : un,
                          ),
                            (t.$n = !0);
                          var n = t.tr.mountCallback(i);
                          return !!n && n.then(lu);
                        }
                      })
                      .then(function (n) {
                        if (((t.Kn = null), i.aborted)) throw Ls();
                        t.Kt.signal(Oe),
                          (t.Zn.usesLoading(t) && !n) ||
                            t.setReadyStateInternal(hn);
                      })
                      .catch(function (i) {
                        var n;
                        throw (
                          ((t.Kn = null),
                          (n = i) &&
                          ('string' == typeof n
                            ? n.startsWith(Cs)
                            : 'string' == typeof n.message &&
                              n.message.startsWith(Cs))
                            ? (t.Wn = null)
                            : (t.Kt.rejectSignal(Oe, i),
                              t.setReadyStateInternal(an, i)),
                          i)
                        );
                      }));
                  }),
                  (u.mount = function () {
                    var t = this;
                    if (this.Wn) return this.Wn;
                    this.Kn = this.Kn || new AbortController();
                    var i = this.Kn.signal;
                    return this.Kt.whenSignal(xe).then(function () {
                      if (!t.R1()) return t.whenBuilt();
                      if (i.aborted) throw Ls();
                      return Ws(t.getAmpDoc()).scheduleAsap(t), t.whenMounted();
                    });
                  }),
                  (u.unmount = function () {
                    this.Bn && this.pause(),
                      this.R1()
                        ? (this.Kn && (this.Kn.abort(), (this.Kn = null)),
                          Ws(this.getAmpDoc()).unschedule(this),
                          this.$n && this.tr.unmountCallback(),
                          (this.$n = !1),
                          (this.Wn = null),
                          this.gr(),
                          this.Bn && this.hr(!0))
                        : this.yr();
                  }),
                  (u.whenMounted = function () {
                    return this.Kt.whenSignal(Oe);
                  }),
                  (u.whenLoaded = function () {
                    return this.Kt.whenSignal(Me);
                  }),
                  (u.ensureLoaded = function (t) {
                    var i = this;
                    return this.mount().then(function () {
                      if (i.R1())
                        return (
                          i.Zn.usesLoading(i) && i.tr.ensureLoaded(),
                          i.whenLoaded()
                        );
                      var n = i.wr();
                      return n.whenBuilt().then(function () {
                        if (
                          4 != n.getState() &&
                          ((3 != n.getState() || n.isMeasureRequested()) &&
                            n.measure(),
                          n.isDisplayed())
                        )
                          return (
                            i
                              .getResources()
                              .scheduleLayoutOrPreload(n, !0, t, !0),
                            i.whenLoaded()
                          );
                      });
                    });
                  }),
                  (u.setAsContainerInternal = function (t) {
                    Ws(this.getAmpDoc()).setContainer(this, t);
                  }),
                  (u.removeAsContainerInternal = function () {
                    Ws(this.getAmpDoc()).removeContainer(this);
                  }),
                  (u.setReadyStateInternal = function (t, i) {
                    if (t !== this.Yn && ((this.Yn = t), this.R1()))
                      switch (t) {
                        case on:
                          return (
                            this.Kt.signal(Ie),
                            this.Kt.reset(Se),
                            this.Kt.reset(Me),
                            this.classList.add('i-amphtml-layout'),
                            this.toggleLoading(!0),
                            void this.dispatchCustomEventForTesting(we)
                          );
                        case hn:
                          return (
                            this.Kt.signal(Ie),
                            this.Kt.signal(Me),
                            this.Kt.reset(Se),
                            this.classList.add('i-amphtml-layout'),
                            this.toggleLoading(!1),
                            Di(this, 'load', null, fu),
                            void this.dispatchCustomEventForTesting(Ae)
                          );
                        case an:
                          return (
                            this.Kt.rejectSignal(Me, i),
                            this.toggleLoading(!1),
                            void Di(this, 'error', i, fu)
                          );
                      }
                  }),
                  (u.preconnect = function (t) {
                    var i = this;
                    Zt(this.isUpgraded()),
                      t
                        ? this.tr.preconnectCallback(t)
                        : Zs(this.getAmpDoc(), function () {
                            i.ownerDocument &&
                              i.ownerDocument.defaultView &&
                              i.tr.preconnectCallback(t);
                          });
                  }),
                  (u.R1 = function () {
                    return !!this.Zn && this.Zn.R1();
                  }),
                  (u.deferredMount = function () {
                    return !!this.Zn && this.Zn.deferredMount(this);
                  }),
                  (u.isAlwaysFixed = function () {
                    return !!this.tr && this.tr.isAlwaysFixed();
                  }),
                  (u.updateLayoutBox = function (t) {
                    var i =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    this.isBuilt() && this.onMeasure(i);
                  }),
                  (u.onMeasure = function () {
                    Zt(this.isBuilt());
                    try {
                      this.tr.onLayoutMeasure();
                    } catch (t) {
                      Us(t, this);
                    }
                  }),
                  (u.vr = function () {
                    var t;
                    return (
                      void 0 !== this.sizerElement ||
                        (this.Jn !== re && this.Jn !== he) ||
                        ((this.sizerElement =
                          this.querySelector('i-amphtml-sizer')),
                        null === (t = this.sizerElement) ||
                          void 0 === t ||
                          t.setAttribute('slot', 'i-amphtml-svc')),
                      this.sizerElement || null
                    );
                  }),
                  (u.Ar = function (t) {
                    if (this.Jn !== re)
                      if (this.Jn !== he);
                      else {
                        var i = t.querySelector('.i-amphtml-intrinsic-sizer');
                        if (!i) return;
                        i.setAttribute('src', '');
                      }
                    else kr(t, 'paddingTop', '0');
                  }),
                  (u.Er = function () {
                    var t = this,
                      i =
                        this.hasAttribute('media') ||
                        (this.hasAttribute('sizes') &&
                          !this.hasAttribute('disable-inline-width')) ||
                        this.hasAttribute('heights'),
                      n = !!this.ur,
                      r = this.ownerDocument.defaultView;
                    i != n &&
                      r &&
                      (i
                        ? ((this.ur = new Re(r, function () {
                            return t.Or();
                          })),
                          this.Or())
                        : this.Tr());
                  }),
                  (u.Tr = function () {
                    this.ur && (this.ur.dispose(), (this.ur = null));
                  }),
                  (u.Or = function () {
                    var t = this.ur;
                    if (t) {
                      t.start();
                      var i = this.getAttribute('media') || null,
                        n = !i || t.resolveMatchQuery(i);
                      this.classList.toggle(
                        'i-amphtml-hidden-by-media-query',
                        !n,
                      );
                      var r = this.hasAttribute('disable-inline-width')
                        ? null
                        : this.getAttribute('sizes');
                      r && kr(this, 'width', t.resolveListQuery(r));
                      var e =
                        this.Jn === re ? this.getAttribute('heights') : null;
                      if (e) {
                        var s = this.vr();
                        s && kr(s, 'paddingTop', t.resolveListQuery(e));
                      }
                      t.complete(), this.wr().requestMeasure();
                    }
                  }),
                  (u.applySize = function (t, i, n) {
                    var r = this.vr();
                    r &&
                      ((this.sizerElement = null),
                      this.Ar(r),
                      this.Pr(function () {
                        r && Mi(r);
                      })),
                      void 0 !== t && kr(this, 'height', t, 'px'),
                      void 0 !== i && kr(this, 'width', i, 'px'),
                      n &&
                        (null != n.top && kr(this, 'marginTop', n.top, 'px'),
                        null != n.right &&
                          kr(this, 'marginRight', n.right, 'px'),
                        null != n.bottom &&
                          kr(this, 'marginBottom', n.bottom, 'px'),
                        null != n.left && kr(this, 'marginLeft', n.left, 'px')),
                      this.Ir() && this.Sr(),
                      Di(this, 'amp:size-changed');
                  }),
                  (u.connectedCallback = function () {
                    if (
                      ((function () {
                        if (void 0 === hu) {
                          var t = self.document.createElement('template');
                          hu = 'content' in t;
                        }
                        return hu;
                      })() ||
                        void 0 !== this.er ||
                        (this.er = !!yi(this, 'template')),
                      !this.er && !this.Bn && Ri(this))
                    ) {
                      if (
                        ((this.Bn = !0),
                        this.everAttached ||
                          this.classList.add(
                            'i-amphtml-element',
                            'i-amphtml-notbuilt',
                            'amp-notbuilt',
                          ),
                        !this.Ui)
                      ) {
                        var t = oi(this),
                          i = Jn(t).getAmpDoc(this);
                        (this.Ui = i), n(i, this, this.Zn);
                      }
                      if (
                        (this.mi || (this.mi = ar(this.Ui)),
                        this.getResources().add(this),
                        this.everAttached)
                      ) {
                        var r = this.reconstructWhenReparented();
                        r && this.gr(),
                          this.isUpgraded() &&
                            (r &&
                              !this.R1() &&
                              this.getResources().upgraded(this),
                            this.pr(),
                            this.dispatchCustomEventForTesting(ye)),
                          this.Zn && this.R1() && this.hr();
                      } else {
                        this.everAttached = !0;
                        try {
                          (this.Jn = (function (t) {
                            var i = t.getAttribute('i-amphtml-layout');
                            if (i) {
                              var n,
                                r = ce(i);
                              return (
                                et(r),
                                (r != re && r != he) || !t.firstElementChild
                                  ? r == te && Nr(t, !1)
                                  : ((t.sizerElement =
                                      t.querySelector('i-amphtml-sizer') ||
                                      void 0),
                                    null === (n = t.sizerElement) ||
                                      void 0 === n ||
                                      n.setAttribute('slot', 'i-amphtml-svc')),
                                r
                              );
                            }
                            var e = Le(t),
                              s = e.height,
                              u = e.layout,
                              o = e.width;
                            if (
                              (t.classList.add(fe(u)),
                              le(u) &&
                                t.classList.add(
                                  'i-amphtml-layout-size-defined',
                                ),
                              u == te)
                            )
                              Nr(t, !1);
                            else if (u == ie)
                              Cr(t, { width: ut(o), height: ut(s) });
                            else if (u == ne) kr(t, 'height', ut(s));
                            else if (u == re) {
                              var h =
                                t.ownerDocument.createElement(
                                  'i-amphtml-sizer',
                                );
                              h.setAttribute('slot', 'i-amphtml-svc');
                              var a = me(s),
                                c = me(o);
                              ot(a),
                                ot(c),
                                Cr(h, { paddingTop: (a / c) * 100 + '%' }),
                                t.insertBefore(h, t.firstChild),
                                (t.sizerElement = h);
                            } else if (u == he) {
                              var f = Ne(t)(je),
                                l = f.firstElementChild;
                              st(l),
                                l.setAttribute(
                                  'src',
                                  'data:image/svg+xml;charset=utf-8,<svg height="'
                                    .concat(s, '" width="')
                                    .concat(
                                      o,
                                      '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>',
                                    ),
                                ),
                                t.insertBefore(f, t.firstChild),
                                (t.sizerElement = f);
                            } else
                              u == se ||
                                u == ee ||
                                (u == ue
                                  ? (o && kr(t, 'width', o),
                                    s && kr(t, 'height', s))
                                  : u == oe &&
                                    (t.classList.add(
                                      'i-amphtml-layout-awaiting-size',
                                    ),
                                    o && kr(t, 'width', o),
                                    kr(t, 'height', 0)));
                            return t.setAttribute('i-amphtml-layout', u), u;
                          })(this)),
                            this.Er();
                        } catch (t) {
                          Us(t, this);
                        }
                        this.Zn
                          ? this.hr()
                          : (du.has('*') ||
                              du.has(this.tagName.toLowerCase())) &&
                            this.markUnresolved(),
                          this.isUpgraded() ||
                            this.dispatchCustomEventForTesting('amp:stubbed');
                      }
                      this.toggleLoading(!0);
                    }
                  }),
                  (u.Ir = function () {
                    return this.classList.contains(
                      'i-amphtml-layout-awaiting-size',
                    );
                  }),
                  (u.Sr = function () {
                    this.classList.remove('i-amphtml-layout-awaiting-size');
                  }),
                  (u.hr = function (t) {
                    if (this.R1()) {
                      if (!this.Wn)
                        if (
                          (Ws(this.getAmpDoc()).schedule(this),
                          this.classList.remove(
                            'amp-unresolved',
                            'i-amphtml-unresolved',
                          ),
                          this.qn)
                        )
                          this.setReadyStateInternal(
                            this.Zn && this.Zn.usesLoading(this) ? on : un,
                          );
                        else if ((this.setReadyStateInternal(sn), !t)) {
                          var i = this.Zn.getPreconnects(this);
                          if (i && i.length > 0) {
                            var n = this.getAmpDoc();
                            Zs(n, function () {
                              var t = n.win;
                              if (t) {
                                var r = hr(t);
                                i.forEach(function (t) {
                                  return r.url(n, t, !1);
                                });
                              }
                            });
                          }
                        }
                    } else this.Mr();
                  }),
                  (u.Mr = function () {
                    var i = this;
                    if (!this.er && 1 == this.ir) {
                      var n = new (Zt(this.Zn))(this);
                      this.ir = 4;
                      var r = t.Date.now(),
                        e = n.upgradeCallback();
                      if (e) {
                        if ('function' == typeof e.then)
                          return e
                            .then(function (t) {
                              i.ar(t || n, r);
                            })
                            .catch(function (t) {
                              (i.ir = 3), d(t);
                            });
                        this.ar(e, r);
                      } else this.ar(n, r);
                    }
                  }),
                  (u.disconnectedCallback = function () {
                    this.disconnect(!1);
                  }),
                  (u.pr = function () {
                    this.Fn && this.tr.attachedCallback();
                  }),
                  (u.disconnect = function (t) {
                    !this.er &&
                      this.Bn &&
                      ((!t && Ri(this)) ||
                        (t && this.classList.remove('i-amphtml-element'),
                        (this.Bn = !1),
                        this.getResources().remove(this),
                        this.tr && this.tr.detachedCallback(),
                        this.R1() && this.unmount(),
                        this.toggleLoading(!1),
                        this.Tr()));
                  }),
                  (u.dispatchCustomEventForTesting = function (t, i) {}),
                  (u.prerenderAllowed = function () {
                    return (
                      !this.hasAttribute('noprerender') &&
                      !!this.Zn &&
                      this.Zn.prerenderAllowed(this)
                    );
                  }),
                  (u.previewAllowed = function () {
                    return !!this.Zn && this.Zn.previewAllowed(this);
                  }),
                  (u.isBuildRenderBlocking = function () {
                    return !!this.tr && this.tr.isBuildRenderBlocking();
                  }),
                  (u.createPlaceholder = function () {
                    return this.tr ? this.tr.createPlaceholderCallback() : null;
                  }),
                  (u.createLoaderLogo = function () {
                    return this.Zn
                      ? this.Zn.createLoaderLogoCallback(this)
                      : {};
                  }),
                  (u.renderOutsideViewport = function () {
                    return !!this.tr && this.tr.renderOutsideViewport();
                  }),
                  (u.idleRenderOutsideViewport = function () {
                    return !!this.tr && this.tr.idleRenderOutsideViewport();
                  }),
                  (u.getLayoutBox = function () {
                    return this.wr().getLayoutBox();
                  }),
                  (u.getLayoutSize = function () {
                    return this.wr().getLayoutSize();
                  }),
                  (u.getOwner = function () {
                    return this.wr().getOwner();
                  }),
                  (u.getIntersectionChangeEntry = function () {
                    var t = this.tr
                        ? this.tr.getIntersectionElementLayoutBox()
                        : this.getLayoutBox(),
                      i = this.getOwner(),
                      n = gr(this.getAmpDoc()).getRect();
                    return (function (t, i, n) {
                      var r,
                        e,
                        s,
                        u,
                        o =
                          (function (t) {
                            for (
                              var i = -1 / 0,
                                n = 1 / 0,
                                r = -1 / 0,
                                e = 1 / 0,
                                s = 0;
                              s < arguments.length;
                              s++
                            ) {
                              var u = arguments[s];
                              if (
                                u &&
                                ((i = Math.max(i, u.left)),
                                (n = Math.min(n, u.left + u.width)),
                                (r = Math.max(r, u.top)),
                                (e = Math.min(e, u.top + u.height)),
                                n < i || e < r)
                              )
                                return null;
                            }
                            return n == 1 / 0 ? null : zi(i, r, n - i, e - r);
                          })(t, i, n) || zi(0, 0, 0, 0);
                      return (function (t, i, n, r) {
                        var e = t,
                          s = i;
                        return (
                          i &&
                            ((n = Gi(n, -i.left, -i.top)),
                            (e = Gi(e, -i.left, -i.top)),
                            (s = Gi(s, -i.left, -i.top))),
                          {
                            time:
                              'undefined' != typeof performance &&
                              performance.now
                                ? performance.now()
                                : Date.now() - cu,
                            rootBounds: s,
                            boundingClientRect: e,
                            intersectionRect: n,
                            intersectionRatio: r,
                          }
                        );
                      })(
                        t,
                        n,
                        o,
                        ((e = t),
                        (s = (r = o).width * r.height),
                        0 == (u = e.width * e.height) ? 0 : s / u),
                      );
                    })(t, i && i.getLayoutBox(), n);
                  }),
                  (u.wr = function () {
                    return this.getResources().getResourceForElement(this);
                  }),
                  (u.getResourceId = function () {
                    return this.wr().getId();
                  }),
                  (u.isRelayoutNeeded = function () {
                    return !!this.tr && this.tr.isRelayoutNeeded();
                  }),
                  (u.getImpl = function () {
                    var t = this;
                    return (
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      !arguments[0]
                        ? this.lr()
                        : this.build()
                    ).then(function () {
                      return t.tr;
                    });
                  }),
                  (u.lr = function () {
                    var t = this;
                    return this.Kt.whenSignal(xe).then(function () {
                      return t.Mr(), t.whenUpgraded();
                    });
                  }),
                  (u.getApi = function () {
                    return this.getImpl().then(function (t) {
                      return t.getApi();
                    });
                  }),
                  (u.getLayout = function () {
                    return this.Jn;
                  }),
                  (u.layoutCallback = function (t) {
                    var i = this;
                    if ((gu(this), Zt(this.isBuilt()), t.aborted))
                      return Promise.reject(Ls());
                    this.dispatchCustomEventForTesting(we);
                    var n = 0 == this.Ai;
                    this.Kt.reset(Se),
                      n && this.Kt.signal(Ie),
                      this.toggleLoading(!0);
                    var r = c(function () {
                      return i.tr.layoutCallback();
                    });
                    return (
                      this.preconnect(!0),
                      this.classList.add('i-amphtml-layout'),
                      r.then(
                        function () {
                          if (t.aborted) throw Ls();
                          n && i.Kt.signal(Me),
                            i.setReadyStateInternal(hn),
                            i.Ai++,
                            i.toggleLoading(!1),
                            i.Xn ||
                              (i.tr.firstLayoutCompleted(),
                              (i.Xn = !0),
                              i.dispatchCustomEventForTesting(Ae));
                        },
                        function (r) {
                          if (t.aborted) throw Ls();
                          throw (
                            (n && i.Kt.rejectSignal(Me, r),
                            i.setReadyStateInternal(an, r),
                            i.Ai++,
                            i.toggleLoading(!1),
                            r)
                          );
                        },
                      )
                    );
                  }),
                  (u.pause = function () {
                    this.isBuilt() &&
                      (this.tr.pauseCallback(),
                      !this.R1() && this.tr.unlayoutOnPause() && this.yr());
                  }),
                  (u.resume = function () {
                    this.isBuilt() && this.tr.resumeCallback();
                  }),
                  (u.unlayoutCallback = function () {
                    if ((gu(this), !this.isBuilt())) return !1;
                    this.Kt.signal(Se);
                    var t = this.tr.unlayoutCallback();
                    return (
                      t && this.gr(),
                      this.dispatchCustomEventForTesting('amp:unload'),
                      t
                    );
                  }),
                  (u.yr = function () {
                    this.wr().unlayout(),
                      this.Bn && this.mi && this.mi.schedulePass();
                  }),
                  (u.gr = function () {
                    (this.Ai = 0),
                      (this.Xn = !1),
                      this.Kt.reset(Oe),
                      this.Kt.reset(Te),
                      this.Kt.reset(Ie),
                      this.Kt.reset(Me),
                      this.Kt.reset('ini-load');
                  }),
                  (u.reconstructWhenReparented = function () {
                    return !!this.tr && this.tr.reconstructWhenReparented();
                  }),
                  (u.collapse = function () {
                    this.tr && this.tr.collapse();
                  }),
                  (u.collapsedCallback = function (t) {
                    this.tr && this.tr.collapsedCallback(t);
                  }),
                  (u.expand = function () {
                    this.tr && this.tr.expand();
                  }),
                  (u.mutatedAttributesCallback = function (t) {
                    this.tr
                      ? this.tr.mutatedAttributesCallback(t)
                      : this.R1() && Ws(this).scheduleAsap(this);
                  }),
                  (u.enqueAction = function (t) {
                    gu(this),
                      this.isBuilt()
                        ? this.Rr(t, !1)
                        : (void 0 === this.rr && (this.rr = []),
                          Zt(this.rr).push(t),
                          this.build());
                  }),
                  (u.br = function () {
                    var t = this;
                    if (this.rr) {
                      var i = Zt(this.rr);
                      (this.rr = null),
                        i.forEach(function (i) {
                          t.Rr(i, !0);
                        });
                    }
                  }),
                  (u.Rr = function (t, i) {
                    try {
                      this.tr.executeAction(t, i);
                    } catch (i) {
                      d(
                        'Action execution failed:',
                        i,
                        t.node.tagName,
                        t.method,
                      );
                    }
                  }),
                  (u.dr = function () {
                    var t,
                      i,
                      n = this.getAttribute('data-block-on-consent');
                    if (null === n) {
                      if (
                        !(i = (t = this)
                          .getAmpDoc()
                          .getMetaByName('amp-consent-blocking')) ||
                        !(i = i.toUpperCase().replace(/\s+/g, ''))
                          .split(',')
                          .includes(t.tagName)
                      )
                        return null;
                      (n = 'default'),
                        this.setAttribute('data-block-on-consent', n);
                    }
                    return '' == n || 'default' == n
                      ? Zt(this.tr).getConsentPolicy()
                      : n;
                  }),
                  (u.mr = function () {
                    var t,
                      i =
                        this.getAttribute('data-block-on-consent-purposes') ||
                        null;
                    return null == i ||
                      null === (t = i.replace(/\s+/g, '')) ||
                      void 0 === t
                      ? void 0
                      : t.split(',');
                  }),
                  (u.getPlaceholder = function () {
                    return wi(this, function (t) {
                      return t.hasAttribute('placeholder') && !pu(t);
                    });
                  }),
                  (u.togglePlaceholder = function (t) {
                    if ((gu(this), t)) {
                      var i = this.getPlaceholder();
                      i && i.classList.remove('amp-hidden');
                    } else
                      for (
                        var n =
                            (this,
                            (e = void 0),
                            void 0,
                            di('placeholder'),
                            (e = this),
                            (s = '> ['.concat('placeholder', ']')),
                            fi(e)
                              ? e.querySelectorAll(li(s, ':scope'))
                              : mi(e, s)),
                          r = 0;
                        r < n.length;
                        r++
                      )
                        pu(n[r]) || n[r].classList.add('amp-hidden');
                    var e, s;
                  }),
                  (u.getFallback = function () {
                    return Ai(this, 'fallback');
                  }),
                  (u.toggleFallback = function (t) {
                    gu(this);
                    var i,
                      n = this.wr().getState();
                    if (
                      (this.R1() || !t || (0 != n && 1 != n && 2 != n)) &&
                      (this.classList.toggle('amp-notsupported', t), 1 == t)
                    ) {
                      var r = this.getFallback();
                      r &&
                        ((i = this.getAmpDoc()),
                        In(i, 'owners')).scheduleLayout(this, r);
                    }
                  }),
                  (u.renderStarted = function () {
                    this.Kt.signal(Te),
                      this.togglePlaceholder(!1),
                      this.toggleLoading(!1);
                  }),
                  (u._r = function (t) {
                    var i,
                      n,
                      r = this.Ai > 0 || this.Kt.get(Te);
                    return !(
                      this.Jn == te ||
                      this.hasAttribute('noloading') ||
                      (r && !t) ||
                      (this,
                      (n = this.tagName.toUpperCase()),
                      'AMP-AD' !== (i = n) &&
                        'AMP-ANIM' !== i &&
                        'AMP-EMBED' !== i &&
                        'AMP-FACEBOOK' !== i &&
                        'AMP-FACEBOOK-COMMENTS' !== i &&
                        'AMP-FACEBOOK-PAGE' !== i &&
                        'AMP-GOOGLE-DOCUMENT-EMBED' !== i &&
                        'AMP-IFRAME' !== i &&
                        'AMP-IMG' !== i &&
                        'AMP-INSTAGRAM' !== i &&
                        'AMP-LIST' !== i &&
                        'AMP-PINTEREST' !== i &&
                        'AMP-PLAYBUZZ' !== i &&
                        'AMP-RENDER' !== i &&
                        'AMP-TIKTOK' !== i &&
                        'AMP-TWITTER' !== i &&
                        !(function (t) {
                          return 'AMP-VIDEO' != t && ae.test(t);
                        })(n)) ||
                      xi(this)
                    );
                  }),
                  (u.toggleLoading = function (t) {
                    var i =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if (this.ownerDocument && this.ownerDocument.defaultView) {
                      var n = er(this.getAmpDoc());
                      n &&
                        ((t = t && this._r(i))
                          ? n.track(this)
                          : n.untrack(this));
                    }
                  }),
                  (u.getOverflowElement = function () {
                    return (
                      void 0 === this.Qn &&
                        ((this.Qn = Ai(this, 'overflow')),
                        this.Qn &&
                          (this.Qn.hasAttribute('tabindex') ||
                            this.Qn.setAttribute('tabindex', '0'),
                          this.Qn.hasAttribute('role') ||
                            this.Qn.setAttribute('role', 'button'))),
                      this.Qn
                    );
                  }),
                  (u.overflowCallback = function (t, i, n) {
                    var r = this;
                    this.getOverflowElement(),
                      this.Qn
                        ? (this.Qn.classList.toggle('amp-visible', t),
                          (this.Qn.onclick = t
                            ? function () {
                                var t = sr(r.getAmpDoc());
                                t.forceChangeSize(r, i, n),
                                  t.mutateElement(r, function () {
                                    r.overflowCallback(!1, i, n);
                                  });
                              }
                            : null))
                        : t &&
                          this.warnOnMissingOverflow &&
                          Jt().warn(
                            'CustomElement',
                            'Cannot resize element and overflow is not available',
                            this,
                          );
                  }),
                  (u.Pr = function (t, i) {
                    var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    this.Ui
                      ? sr(this.getAmpDoc()).mutateElement(i || this, t, n)
                      : t();
                  }),
                  i(s, [
                    {
                      key: 'readyState',
                      get: function () {
                        return this.Yn;
                      },
                    },
                  ]),
                  s
                );
              })(t.HTMLElement);
              return (t.__AMP_BASE_CE_CLASS = r), t.__AMP_BASE_CE_CLASS;
            })(t, n),
            e = (function (t) {
              U(n, t);
              var i = H(n);
              function n() {
                return i.apply(this, arguments);
              }
              return (
                (n.prototype.adoptedCallback = function () {
                  Object.getPrototypeOf(this) !== s &&
                    Object.setPrototypeOf(this, s);
                }),
                n
              );
            })(r),
            s = e.prototype;
          return e;
        }
        function pu(t) {
          return 'placeholder' in t;
        }
        function gu(t) {
          Zt(!t.er);
        }
        function bu(t) {
          du.add(t || '*');
          for (var i, n = o(vu, !0); !(i = n()).done; ) {
            var r = i.value;
            (null != t && r.tagName.toLowerCase() !== t) || r.markUnresolved();
          }
        }
        var yu = new WeakMap();
        function wu(t) {
          return (
            t.__AMP_EXTENDED_ELEMENTS || (t.__AMP_EXTENDED_ELEMENTS = {}),
            t.__AMP_EXTENDED_ELEMENTS
          );
        }
        function Au(t, i, n) {
          var r = wu(t);
          if (r[i]) {
            if (r[i] != n) {
              ti(
                r[i] == au,
                '%s is already registered. The script tag for %s is likely included twice in the page.',
                i,
                i,
              ),
                (r[i] = n);
              for (var e = 0; e < vu.length; e++) {
                var s = vu[e];
                s.tagName.toLowerCase() == i &&
                  s.ownerDocument.defaultView == t &&
                  (xu(s, n), vu.splice(e--, 1));
              }
            }
          } else Iu(t, i, n);
        }
        function xu(t, i) {
          try {
            t.upgrade(i);
          } catch (i) {
            Us(i, t);
          }
        }
        function Eu(t) {
          (function (t) {
            if (!t) return [];
            for (
              var i = t.querySelectorAll(
                  'script[custom-element],script[custom-template]',
                ),
                n = [],
                r = 0;
              r < i.length;
              r++
            ) {
              var e = i[r],
                s =
                  e.getAttribute('custom-element') ||
                  e.getAttribute('custom-template'),
                u = yn(e.src);
              s &&
                u &&
                n.push({
                  script: e,
                  extensionId: s,
                  extensionVersion: u.extensionVersion,
                });
            }
            return n;
          })(t.getHeadNode()).forEach(function (i) {
            var n = i.extensionId,
              r = i.extensionVersion,
              e = i.script;
            t.declareExtension(n, r),
              e.addEventListener('error', function () {
                return bu(n);
              }),
              Pu(t.win, n);
          }),
            t.isBodyAvailable() && t.setExtensionsKnown();
        }
        function Pu(t, i) {
          wu(t)[i] || Iu(t, i, au);
        }
        function Ou(t, i, n) {
          Iu(i, n, wu(t)[n] || au);
        }
        function Iu(t, i, n) {
          wu(t)[i] = n;
          var r = mu(t, Tu);
          t.customElements.define(i, r);
        }
        function Tu(t, i, n) {
          yu.has(t) || (yu.set(t, !0), Eu(t));
          var r = i.localName;
          n ||
            t.declaresExtension(r) ||
            nr(t.win).installExtensionForDoc(t, r, '0.1');
        }
        var Mu = 'amp-img',
          Su = [
            'alt',
            'aria-describedby',
            'aria-label',
            'aria-labelledby',
            'crossorigin',
            'referrerpolicy',
            'title',
            'importance',
            'sizes',
            'srcset',
            'src',
          ],
          Ru = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t) {
              var n;
              return (
                ((n = i.call(this, t)).kr = !0),
                (n.Nr = null),
                (n.Cr = null),
                (n.jr = null),
                (n.Dr = 0),
                n
              );
            }
            (n.R1 = function () {
              return !1;
            }),
              (n.prerenderAllowed = function () {
                return !0;
              }),
              (n.usesLoading = function () {
                return !0;
              }),
              (n.getPreconnects = function (t) {
                var i = t.getAttribute('src');
                if (i) return [i];
                var n = t.getAttribute('srcset');
                if (n) {
                  var r = /\S+/.exec(n);
                  if (r) return [r[0]];
                }
                return null;
              });
            var r = n.prototype;
            return (
              (r.mutatedAttributesCallback = function (t) {
                if (this.Nr) {
                  var i = Su.filter(function (i) {
                    return void 0 !== t[i];
                  });
                  t.src &&
                    !t.srcset &&
                    this.element.hasAttribute('srcset') &&
                    (this.element.removeAttribute('srcset'),
                    i.push('srcset'),
                    this.user().warn(
                      Mu,
                      'Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.',
                      this.element,
                    )),
                    ge(i, this.element, this.Nr, !0),
                    this.propagateDataset(this.Nr),
                    Zr(this.Nr),
                    n.R1() && !this.Nr.complete && this.setReadyState(on);
                }
              }),
              (r.preconnectCallback = function (t) {
                var i = this.element.getAttribute('src');
                if (i) hr(this.win).url(this.getAmpDoc(), i, t);
                else {
                  var n = this.element.getAttribute('srcset');
                  if (!n) return;
                  var r = /\S+/.exec(n);
                  r && hr(this.win).url(this.getAmpDoc(), r[0], t);
                }
              }),
              (r.isLayoutSupported = function (t) {
                return le(t);
              }),
              (r.Ur = function () {
                if (this.Nr) return this.Nr;
                this.kr = !this.element.hasAttribute('fallback');
                var t,
                  i,
                  n = Ui(this.element);
                return (
                  n && (this.Nr = pi(this.element, '> img:not([placeholder])')),
                  (this.Nr = this.Nr || new Image()),
                  this.Nr.setAttribute('decoding', 'async'),
                  this.element.id &&
                    this.Nr.setAttribute('amp-img-id', this.element.id),
                  'img' == this.element.getAttribute('role') &&
                    (this.element.removeAttribute('role'),
                    this.user().error(
                      Mu,
                      'Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element.',
                    )),
                  this.zr(!0),
                  ge(Su, this.element, this.Nr),
                  this.propagateDataset(this.Nr),
                  Zr(this.Nr),
                  pe(this.Nr, !0),
                  (t = this.element),
                  (i = this.Nr),
                  t.hasAttribute('object-fit') &&
                    kr(i, 'object-fit', t.getAttribute('object-fit')),
                  t.hasAttribute('object-position') &&
                    kr(i, 'object-position', t.getAttribute('object-position')),
                  n || this.element.appendChild(this.Nr),
                  this.Nr
                );
              }),
              (r.zr = function (t) {
                var i = this;
                if (
                  this.Nr &&
                  !this.element.hasAttribute('i-amphtml-ssr') &&
                  !this.element.hasAttribute('sizes') &&
                  !this.Nr.hasAttribute('sizes')
                ) {
                  var n = this.element.getAttribute('srcset');
                  if (n && !/[0-9]+x(?:,|$)/.test(n)) {
                    var r = this.element.getLayoutSize().width;
                    if (this.Lr(r)) {
                      var e = this.getViewport().getWidth(),
                        s = '(max-width: '.concat(e, 'px) ').concat(r, 'px, '),
                        u = r + 'px';
                      if (this.getLayout() !== ie) {
                        var o = Math.round((100 * r) / e);
                        u = Math.max(o, 100) + 'vw';
                      }
                      var h = s + u;
                      t
                        ? this.Nr.setAttribute('sizes', h)
                        : this.mutateElement(function () {
                            i.Nr.setAttribute('sizes', h);
                          }),
                        (this.Dr = r);
                    }
                  }
                }
              }),
              (r.Lr = function (t) {
                return !this.Nr.hasAttribute('sizes') || t > this.Dr;
              }),
              (r.reconstructWhenReparented = function () {
                return !1;
              }),
              (r.mountCallback = function () {
                var t = this,
                  i = !!this.Nr,
                  n = this.Ur();
                i ||
                  (Je(n, 'load', function () {
                    t.setReadyState(hn), t.firstLayoutCompleted(), t.Hr();
                  }),
                  Je(n, 'error', function (i) {
                    t.setReadyState(an, i), t.Gr();
                  })),
                  n.complete
                    ? (this.setReadyState(hn),
                      this.firstLayoutCompleted(),
                      this.Hr())
                    : this.setReadyState(on);
              }),
              (r.unmountCallback = function () {
                var t = this.Nr;
                t &&
                  !t.complete &&
                  ((t.src =
                    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs='),
                  Mi(t),
                  (this.Nr = null));
              }),
              (r.ensureLoaded = function () {
                this.Nr.loading = 'eager';
              }),
              (r.layoutCallback = function () {
                var t = this;
                this.Ur();
                var i = this.Nr;
                return (
                  (this.Cr = Je(i, 'load', function () {
                    return t.Hr();
                  })),
                  (this.jr = Je(i, 'error', function () {
                    return t.Gr();
                  })),
                  this.element.getLayoutSize().width <= 0
                    ? h()
                    : this.loadPromise(i)
                );
              }),
              (r.unlayoutCallback = function () {
                if (!n.R1()) {
                  this.jr && (this.jr(), (this.jr = null)),
                    this.Cr && (this.Cr(), (this.Cr = null));
                  var t = this.Nr;
                  return (
                    t &&
                      !t.complete &&
                      ((t.src =
                        'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs='),
                      Mi(t),
                      (this.Nr = null)),
                    !0
                  );
                }
              }),
              (r.firstLayoutCompleted = function () {
                var t = this.getPlaceholder();
                t && t.classList.contains('i-amphtml-blurry-placeholder')
                  ? _r(t, { opacity: 0 })
                  : this.togglePlaceholder(!1);
              }),
              (r.Hr = function () {
                !this.kr &&
                  this.Nr.classList.contains('i-amphtml-ghost') &&
                  (this.Nr.classList.remove('i-amphtml-ghost'),
                  this.toggleFallback(!1));
              }),
              (r.Gr = function () {
                this.kr &&
                  (this.Nr.classList.add('i-amphtml-ghost'),
                  this.toggleFallback(!0),
                  this.togglePlaceholder(!1),
                  (this.kr = !1));
              }),
              (r.propagateDataset = function (t) {
                for (var i in t.dataset)
                  i in this.element.dataset || delete t.dataset[i];
                for (var n in this.element.dataset)
                  (n.startsWith('ampBind') && 'ampBind' !== n) ||
                    (t.dataset[n] !== this.element.dataset[n] &&
                      (t.dataset[n] = this.element.dataset[n]));
              }),
              n
            );
          })(uu),
          _u = (function (t) {
            U(n, t);
            var i = H(n);
            function n() {
              return i.apply(this, arguments);
            }
            n.prerenderAllowed = function () {
              return !0;
            };
            var r = n.prototype;
            return (
              (r.isLayoutSupported = function (t) {
                return t == ee || le(t);
              }),
              (r.buildCallback = function () {
                !(function (t) {
                  if (!Ui(t)) {
                    var i = (function (t) {
                      var i;
                      return (
                        ce(
                          null !== (i = t.getAttribute('layout')) &&
                            void 0 !== i
                            ? i
                            : '',
                        ) || Le(t).layout
                      );
                    })(t);
                    if (i != ee) {
                      var n = t.ownerDocument.createElement('div');
                      pe(n),
                        (function (t) {
                          return (function (t, i) {
                            for (
                              var n = [], r = t.firstChild;
                              r;
                              r = r.nextSibling
                            )
                              !xi(r) && n.push(r);
                            return n;
                          })(t);
                        })(t).forEach(function (t) {
                          n.appendChild(t);
                        }),
                        t.appendChild(n);
                    }
                  }
                })(this.element);
              }),
              n
            );
          })(uu);
        function ku(t) {
          var i;
          return null === (i = t.featurePolicy) || void 0 === i
            ? void 0
            : i.allowedFeatures().includes('attribution-reporting');
        }
        function Cu(t, i) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            e = arguments.length > 4 ? arguments[4] : void 0,
            s = Gr.getImage(t),
            u = new s();
          n && (u.referrerPolicy = 'no-referrer');
          var o = 0;
          if (null != r)
            if (ku(t.document)) {
              var h = Nu(t, (o = 6), e);
              (r = h(r)), (u.attributionSrc = r);
            } else o = 5;
          var a = Nu(t, o, e);
          return (i = a(i)), (u.src = i), u;
        }
        function Nu(t, i, n) {
          var r = {
              ATTRIBUTION_REPORTING_STATUS: function () {
                return i;
              },
            },
            e = lr(n || t.document),
            s = { ATTRIBUTION_REPORTING_STATUS: !0 };
          return function (t) {
            return e.expandUrlSync(t, r, s);
          };
        }
        var Du = 'amp-pixel',
          ju = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t) {
              var n;
              return ((n = i.call(this, t)).Vr = null), n;
            }
            var r = n.prototype;
            return (
              (r.isLayoutSupported = function (t) {
                return !0;
              }),
              (r.buildCallback = function () {
                this.element.setAttribute('aria-hidden', 'true'),
                  (this.Fr = this.element.getAttribute('referrerpolicy')),
                  this.Fr &&
                    ti(
                      'no-referrer' == this.Fr,
                      ''
                        .concat(Du, ': invalid "referrerpolicy" value "')
                        .concat(this.Fr, '".') +
                        ' Only "no-referrer" is supported',
                    ),
                  this.element.hasAttribute('i-amphtml-ssr') &&
                  this.element.querySelector('img')
                    ? Qt().info(Du, 'inabox img already present')
                    : this.getAmpDoc()
                        .whenFirstVisible()
                        .then(this.Br.bind(this));
              }),
              (r.Br = function () {
                var t = this;
                if (this.Vr) return Qt().error(Du, 'duplicate pixel'), this.Vr;
                this.Vr = fr(this.win)
                  .promise(1)
                  .then(function () {
                    var i = t.element.getAttribute('src');
                    if (i)
                      return lr(t.element)
                        .expandUrlAsync(t.qr(i))
                        .then(function (i) {
                          if (t.win) {
                            var n = (function (t, i, n, r, e) {
                              return (
                                n &&
                                  'no-referrer' !== n &&
                                  Jt().error(
                                    'pixel',
                                    'Unsupported referrerPolicy: %s',
                                    n,
                                  ),
                                'no-referrer' === n
                                  ? (function (t, i, n, r) {
                                      if ('referrerPolicy' in Image.prototype)
                                        return Cu(t, i, !0, n, r);
                                      var e,
                                        s =
                                          ((e = {
                                            src: 'about:blank',
                                            style: 'display:none',
                                          }),
                                          (function (t, i) {
                                            for (var n in i)
                                              t.setAttribute(n, i[n]);
                                            return t;
                                          })(
                                            t.document.createElement('iframe'),
                                            e,
                                          ));
                                      return (
                                        (s.onload = function () {
                                          Cu(
                                            s.contentWindow,
                                            i,
                                            void 0,
                                            void 0,
                                            r,
                                          );
                                        }),
                                        t.document.body.appendChild(s),
                                        s
                                      );
                                    })(t, i, r, e)
                                  : Cu(t, i, !1, r, e)
                              );
                            })(
                              t.win,
                              i,
                              t.Fr,
                              t.element.getAttribute('attributionsrc'),
                              t.element,
                            );
                            return Qt().info(Du, 'pixel triggered: ', i), n;
                          }
                        });
                  });
              }),
              (r.qr = function (t) {
                return (
                  ti(
                    /^(https\:\/\/|\/\/)/i.test(t),
                    'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' +
                      t,
                  ),
                  t
                );
              }),
              n
            );
          })(uu),
          Uu = (function () {
            function t(t, i, n) {
              var r = this;
              (this.$r = fr(t)),
                (this.Wr = i),
                (this.Kr = n || 0),
                (this.Yr = -1),
                (this.Jr = 0),
                (this.Xr = !1),
                (this.Qr = function () {
                  r.Zr();
                });
            }
            var i = t.prototype;
            return (
              (i.isPending = function () {
                return -1 != this.Yr;
              }),
              (i.schedule = function (t) {
                var i = t || this.Kr;
                this.Xr && i < 10 && (i = 10);
                var n = Date.now() + i;
                return (
                  (!this.isPending() || n - this.Jr < -10) &&
                  (this.cancel(),
                  (this.Jr = n),
                  (this.Yr = this.$r.delay(this.Qr, i)),
                  !0)
                );
              }),
              (i.Zr = function () {
                (this.Yr = -1),
                  (this.Jr = 0),
                  (this.Xr = !0),
                  this.Wr(),
                  (this.Xr = !1);
              }),
              (i.cancel = function () {
                this.isPending() && (this.$r.cancel(this.Yr), (this.Yr = -1));
              }),
              t
            );
          })();
        function Lu(t, i) {
          var n = i.documentElement;
          return t.some(function (t) {
            return n.hasAttribute(t);
          });
        }
        function zu(t) {
          return Lu(['⚡4email', 'amp4email'], t);
        }
        function Hu(t) {
          return Lu(['⚡', 'amp'], t);
        }
        var Gu = 'Action',
          Vu = '__AMP_ACTION_MAP__' + Math.random(),
          Fu = '__AMP_ACTION_QUEUE__',
          Bu = '__AMP_ACTION_HANDLER__',
          qu = { form: ['submit', 'clear'] },
          $u = [
            { tagOrTarget: 'AMP', method: 'setState' },
            { tagOrTarget: '*', method: 'focus' },
            { tagOrTarget: '*', method: 'hide' },
            { tagOrTarget: '*', method: 'show' },
            { tagOrTarget: '*', method: 'toggleClass' },
            { tagOrTarget: '*', method: 'toggleChecked' },
            { tagOrTarget: '*', method: 'toggleVisibility' },
          ],
          Wu = {
            button: !0,
            checkbox: !0,
            link: !0,
            listbox: !0,
            menuitem: !0,
            menuitemcheckbox: !0,
            menuitemradio: !0,
            option: !0,
            radio: !0,
            scrollbar: !0,
            slider: !0,
            spinbutton: !0,
            switch: !0,
            tab: !0,
            treeitem: !0,
          },
          Yu = (function () {
            function t(t, i, n, r, e, s, u) {
              var o =
                  arguments.length > 7 && void 0 !== arguments[7]
                    ? arguments[7]
                    : '?',
                h =
                  arguments.length > 8 && void 0 !== arguments[8]
                    ? arguments[8]
                    : null,
                a =
                  arguments.length > 9 && void 0 !== arguments[9]
                    ? arguments[9]
                    : Math.random();
              (this.node = t),
                (this.method = i),
                (this.args = n),
                (this.source = r),
                (this.caller = e),
                (this.event = s),
                (this.trust = u),
                (this.actionEventType = o),
                (this.tagOrTarget = h || t.tagName),
                (this.sequenceId = a);
            }
            return (
              (t.prototype.satisfiesTrust = function (t) {
                if (!J(this.trust))
                  return (
                    Qt().error(
                      Gu,
                      "Invalid trust for '"
                        .concat(this.method, "': ")
                        .concat(this.trust),
                    ),
                    !1
                  );
                if (this.trust < t) {
                  var i = (function (t) {
                    switch (t) {
                      case 1:
                        return 'low';
                      case 3:
                        return 'high';
                      default:
                        return et(2 === t), 'default';
                    }
                  })(this.trust);
                  return (
                    Jt().error(
                      Gu,
                      '"'
                        .concat(this.actionEventType, '" event with "')
                        .concat(i, '" trust is not allowed to ') +
                        'invoke "'
                          .concat(this.tagOrTarget.toLowerCase(), '.')
                          .concat(this.method, '".'),
                    ),
                    !1
                  );
                }
                return !0;
              }),
              t
            );
          })(),
          Ku = (function () {
            function t(t, i) {
              (this.ampdoc = t),
                (this.te = i || t.getRootNode()),
                (this.ie = this.ampdoc.isSingleDoc() && zu(this.te)),
                (this.ne = this.ie ? $u : null),
                (this.re = A()),
                (this.ee = A()),
                this.addEvent('tap'),
                this.addEvent('submit'),
                this.addEvent('change'),
                this.addEvent('input-debounced'),
                this.addEvent('input-throttled'),
                this.addEvent('valid'),
                this.addEvent('invalid');
            }
            var i = t.prototype;
            return (
              (i.addEvent = function (t) {
                var i = this;
                if ('tap' == t)
                  this.te.addEventListener('click', function (n) {
                    if (!n.defaultPrevented) {
                      var r = n.target;
                      i.trigger(r, t, n, 3);
                    }
                  }),
                    this.te.addEventListener('keydown', function (n) {
                      var r = n.key,
                        e = n.target;
                      if ('Enter' == r || ' ' == r) {
                        var s = e.getAttribute('role'),
                          u = s && x(Wu, s.toLowerCase());
                        !n.defaultPrevented &&
                          u &&
                          i.trigger(e, t, n, 3) &&
                          n.preventDefault();
                      }
                    });
                else if ('submit' == t)
                  this.te.addEventListener(t, function (n) {
                    var r = n.target;
                    i.trigger(r, t, n, 3);
                  });
                else if ('change' == t)
                  this.te.addEventListener(t, function (n) {
                    var r = n.target;
                    i.se(n), i.trigger(r, t, n, 3);
                  });
                else if ('input-debounced' == t) {
                  var n = mt(
                    this.ampdoc.win,
                    function (n) {
                      var r = n.target;
                      i.trigger(r, t, n, 3);
                    },
                    300,
                  );
                  this.te.addEventListener('input', function (t) {
                    var r = new Xu(t);
                    i.se(r), n(r);
                  });
                } else if ('input-throttled' == t) {
                  var r = dt(
                    this.ampdoc.win,
                    function (n) {
                      var r = n.target;
                      i.trigger(r, t, n, 3);
                    },
                    100,
                  );
                  this.te.addEventListener('input', function (t) {
                    var n = new Xu(t);
                    i.se(n), r(n);
                  });
                } else
                  ('valid' != t && 'invalid' != t) ||
                    this.te.addEventListener(t, function (n) {
                      var r = n.target;
                      i.trigger(r, t, n, 3);
                    });
              }),
              (i.addGlobalTarget = function (t, i) {
                this.re[t] = i;
              }),
              (i.addGlobalMethodHandler = function (t, i) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 2;
                this.ee[t] = { handler: i, minTrust: n };
              }),
              (i.trigger = function (t, i, n, r, e) {
                return this.oe(t, i, n, r, e);
              }),
              (i.execute = function (t, i, n, r, e, s, u) {
                var o = new Yu(t, i, n, r, e, s, u);
                this.ue(o);
              }),
              (i.installActionHandler = function (t, i) {
                if (
                  (Zt(
                    Ju(t.getAttribute('id') || '') ||
                      t.tagName.toLowerCase() in qu,
                  ),
                  t[Bu])
                )
                  Qt().error(
                    Gu,
                    'Action handler already installed for '.concat(t),
                  );
                else {
                  t[Bu] = i;
                  var n = t[Fu];
                  V(n) &&
                    fr(oi(t)).delay(function () {
                      n.forEach(function (t) {
                        try {
                          i(t);
                        } catch (i) {
                          Qt().error(Gu, 'Action execution failed:', t, i);
                        }
                      }),
                        (t[Fu].length = 0);
                    }, 1);
                }
              }),
              (i.hasAction = function (t, i, n) {
                return !!this.he(t, i, n);
              }),
              (i.hasResolvableAction = function (t, i, n) {
                var r = this,
                  e = this.he(t, i, n);
                return (
                  !!e &&
                  e.actionInfos.some(function (t) {
                    var i = t.target;
                    return !!r.ae(i);
                  })
                );
              }),
              (i.hasResolvableActionForTarget = function (t, i, n, r) {
                var e = this,
                  s = this.he(t, i, r);
                return (
                  !!s &&
                  s.actionInfos.some(function (t) {
                    var i = t.target;
                    return e.ae(i) == n;
                  })
                );
              }),
              (i.ae = function (t) {
                return this.re[t] ? this.te : this.te.getElementById(t);
              }),
              (i.setAllowlist = function (t) {
                Zt(
                  t.every(function (t) {
                    return t.tagOrTarget && t.method;
                  }),
                ),
                  (this.ne = t);
              }),
              (i.addToAllowlist = function (t, i, n) {
                var r = this;
                (n && n.includes('email') !== this.ie) ||
                  (this.ne || (this.ne = []),
                  V(i) || (i = [i]),
                  i.forEach(function (i) {
                    r.ne.some(function (n) {
                      return n.tagOrTarget == t && n.method == i;
                    }) || r.ne.push({ tagOrTarget: t, method: i });
                  }));
              }),
              (i.oe = function (t, i, n, r, e) {
                var s = this,
                  u = this.he(t, i);
                if (!u) return !1;
                var h = Math.random(),
                  a = null;
                return (
                  u.actionInfos.forEach(function (c) {
                    var f = c.args,
                      l = c.method,
                      v = c.str,
                      d = c.target,
                      m = (function (t, i, n) {
                        if (!t) return t;
                        var r = n || {};
                        if (i) {
                          var e = (function (t) {
                            return t.detail;
                          })(i);
                          e && (r.event = e);
                        }
                        var s = A();
                        return (
                          Object.keys(t).forEach(function (i) {
                            var n = t[i];
                            if ('object' == p(n) && n.expression) {
                              var e = n.expression,
                                u = (function (t, i) {
                                  if ('.' == i) return t;
                                  for (
                                    var n, r = t, e = o(i.split('.'), !0);
                                    !(n = e()).done;

                                  ) {
                                    var s = n.value;
                                    if (
                                      !(
                                        s &&
                                        r &&
                                        void 0 !== r[s] &&
                                        'object' == p(r) &&
                                        x(r, s)
                                      )
                                    ) {
                                      r = void 0;
                                      break;
                                    }
                                    r = r[s];
                                  }
                                  return r;
                                })(r, e);
                              n = void 0 === u ? null : u;
                            }
                            r[n] ? (s[i] = r[n]) : (s[i] = n);
                          }),
                          s
                        );
                      })(f, n, e),
                      g = function () {
                        var e = s.ae(d);
                        if (e) {
                          var o = new Yu(
                            e,
                            l,
                            m,
                            t,
                            u.node,
                            n,
                            r,
                            i,
                            e.tagName || d,
                            h,
                          );
                          return s.ue(o);
                        }
                        s.ce(
                          'Target "'
                            .concat(d, '" not found for action [')
                            .concat(v, '].'),
                        );
                      };
                    a = a ? a.then(g) : g();
                  }),
                  u.actionInfos.length >= 1
                );
              }),
              (i.ce = function (t, i) {
                if (i) {
                  var n = Jt().createError('['.concat(Gu, '] ').concat(t));
                  throw (Us(n, i), n);
                }
                Jt().error(Gu, t);
              }),
              (i.ue = function (t) {
                var i = t.method,
                  n = t.tagOrTarget;
                if (
                  this.ne &&
                  !(function (t, i) {
                    var n = t.method,
                      r = t.node,
                      e = t.tagOrTarget;
                    n === su &&
                      'function' == typeof r.getDefaultActionAlias &&
                      (n = r.getDefaultActionAlias());
                    var s = n.toLowerCase(),
                      u = e.toLowerCase();
                    return i.some(function (t) {
                      return (
                        (t.tagOrTarget.toLowerCase() === u ||
                          '*' === t.tagOrTarget) &&
                        t.method.toLowerCase() === s
                      );
                    });
                  })(t, this.ne)
                )
                  return (
                    this.ce(
                      '"'
                        .concat(n, '.')
                        .concat(i, '" is not allowlisted ')
                        .concat(JSON.stringify(this.ne), '.'),
                    ),
                    null
                  );
                var r = this.re[n];
                if (r) return r(t);
                var e = t.node,
                  s = this.ee[i];
                if (s && t.satisfiesTrust(s.minTrust)) return s.handler(t);
                var u = e.tagName.toLowerCase();
                if (Ju(u))
                  return (
                    e.enqueAction
                      ? e.enqueAction(t)
                      : this.ce(
                          'Unrecognized AMP element "'.concat(u, '".'),
                          e,
                        ),
                    null
                  );
                var o = qu[u];
                if (
                  Ju(e.getAttribute('id') || '') ||
                  (o && o.indexOf(i) > -1)
                ) {
                  var h = e[Bu];
                  return (
                    h ? h(t) : ((e[Fu] = e[Fu] || []), e[Fu].push(t)), null
                  );
                }
                return (
                  this.ce(
                    'Target ('
                      .concat(n, ') doesn\'t support "')
                      .concat(i, '" action.'),
                    t.caller,
                  ),
                  null
                );
              }),
              (i.he = function (t, i, n) {
                for (var r, e = t; e; ) {
                  if (n && e == n) return null;
                  var s = this.fe(e, i);
                  if (s && !(r = e).disabled && !gi(r, ':disabled'))
                    return { node: e, actionInfos: Zt(s) };
                  e = e.parentElement;
                }
                return null;
              }),
              (i.fe = function (t, i) {
                var n = this.le(t, i);
                return (n && n[i]) || null;
              }),
              (i.le = function (t, i) {
                var n = t[Vu];
                if (void 0 === n)
                  if (((n = null), t.hasAttribute('on')))
                    (n = Zu(t.getAttribute('on'), t)), (t[Vu] = n);
                  else if (t.hasAttribute('execute')) {
                    var r = t.getAttribute('execute');
                    (n = Zu(''.concat(i, ':').concat(r), t)), (t[Vu] = n);
                  }
                return n;
              }),
              (i.setActions = function (t, i) {
                t.setAttribute('on', i), delete t[Vu];
              }),
              (i.se = function (t) {
                var i = A(),
                  n = t.target;
                if (
                  (void 0 !== n.value && (i.value = n.value),
                  'INPUT' == n.tagName && (i.valueAsNumber = Number(n.value)),
                  void 0 !== n.checked && (i.checked = n.checked),
                  (void 0 === n.min && void 0 === n.max) ||
                    ((i.min = n.min), (i.max = n.max)),
                  n.files &&
                    (i.files = G(n.files).map(function (t) {
                      return { name: t.name, size: t.size, type: t.type };
                    })),
                  Object.keys(i).length > 0)
                )
                  try {
                    t.detail = i;
                  } catch (t) {}
              }),
              t
            );
          })();
        function Ju(t) {
          return 'amp-' === t.substring(0, 4);
        }
        var Xu = function (t) {
          (this.detail = null),
            (function (t, i) {
              var n = i || A();
              for (var r in t) {
                var e = t[r];
                n[r] = 'function' == typeof e ? Qu : t[r];
              }
            })(t, this);
        };
        function Qu() {
          Zt(null);
        }
        function Zu(t, i) {
          var n,
            r,
            e = io.bind(null, t, i),
            s = no.bind(null, t, i),
            u = null,
            o = new so(t);
          do {
            if (
              (n = o.next()).type == ro.EOF ||
              (n.type == ro.SEPARATOR && ';' == n.value)
            );
            else if (n.type == ro.LITERAL || n.type == ro.ID) {
              var h = n.value;
              s(o.next(), [ro.SEPARATOR], ':');
              var a = [];
              do {
                var c = s(o.next(), [ro.LITERAL, ro.ID]).value,
                  f = su,
                  l = null;
                (r = o.peek()).type == ro.SEPARATOR &&
                  '.' == r.value &&
                  (o.next(),
                  (f = s(o.next(), [ro.LITERAL, ro.ID]).value || f),
                  (r = o.peek()).type == ro.SEPARATOR &&
                    '(' == r.value &&
                    (o.next(), (l = to(o, s, e)))),
                  a.push({ event: h, target: c, method: f, args: l, str: t }),
                  (r = o.peek());
              } while (r.type == ro.SEPARATOR && ',' == r.value && o.next());
              u || (u = A()), (u[h] = a);
            } else e(!1, '; unexpected token ['.concat(n.value || '', ']'));
          } while (n.type != ro.EOF);
          return u;
        }
        function to(t, i, n) {
          var r,
            e,
            s = t.peek(),
            u = null;
          if (s.type == ro.OBJECT) {
            u = A();
            var o = t.next().value;
            (u.__AMP_OBJECT_STRING__ = o), i(t.next(), [ro.SEPARATOR], ')');
          } else
            do {
              var h = (r = t.next()),
                a = h.type,
                c = h.value;
              if (a != ro.SEPARATOR || (',' != c && ')' != c))
                if (a == ro.LITERAL || a == ro.ID) {
                  i(t.next(), [ro.SEPARATOR], '=');
                  var f = [(r = i(t.next(!0), [ro.LITERAL, ro.ID]))];
                  if (r.type == ro.ID)
                    for (
                      s = t.peek();
                      s.type == ro.SEPARATOR && '.' == s.value;
                      s = t.peek()
                    )
                      t.next(), (r = i(t.next(!1), [ro.ID])), f.push(r);
                  var l =
                    0 == (e = f).length
                      ? null
                      : 1 == e.length
                        ? e[0].value
                        : {
                            expression: e
                              .map(function (t) {
                                return t.value;
                              })
                              .join('.'),
                          };
                  u || (u = A()),
                    (u[c] = l),
                    n(
                      (s = t.peek()).type == ro.SEPARATOR &&
                        (',' == s.value || ')' == s.value),
                      'Expected either [,] or [)]',
                    );
                } else n(!1, '; unexpected token ['.concat(r.value || '', ']'));
            } while (r.type != ro.SEPARATOR || ')' != r.value);
          return u;
        }
        function io(t, i, n, r) {
          return ti(
            n,
            'Invalid action definition in %s: [%s] %s',
            i,
            t,
            r || '',
          );
        }
        function no(t, i, n, r, e) {
          return (
            void 0 !== e
              ? io(
                  t,
                  i,
                  r.includes(n.type) && n.value == e,
                  '; expected ['.concat(e, ']'),
                )
              : io(t, i, r.includes(n.type)),
            n
          );
        }
        var ro = {
            INVALID: 0,
            EOF: 1,
            SEPARATOR: 2,
            LITERAL: 3,
            ID: 4,
            OBJECT: 5,
          },
          eo = ' \t\n\r\f\v \u2028\u2029',
          so = (function () {
            function t(t) {
              (this.ve = t), (this.de = -1);
            }
            var i = t.prototype;
            return (
              (i.next = function (t) {
                var i = this.me(t || !1);
                return (this.de = i.index), i;
              }),
              (i.peek = function (t) {
                return this.me(t || !1);
              }),
              (i.me = function (t) {
                var i = this.de + 1;
                if (i >= this.ve.length)
                  return { type: ro.EOF, index: this.de };
                var n = this.ve.charAt(i);
                if (-1 != eo.indexOf(n)) {
                  for (
                    i++;
                    i < this.ve.length && -1 != eo.indexOf(this.ve.charAt(i));
                    i++
                  );
                  if (i >= this.ve.length) return { type: ro.EOF, index: i };
                  n = this.ve.charAt(i);
                }
                if (
                  t &&
                  (uo(n) ||
                    ('.' == n && i + 1 < this.ve.length && uo(this.ve[i + 1])))
                ) {
                  for (var r = '.' == n, e = i + 1; e < this.ve.length; e++) {
                    var s = this.ve.charAt(e);
                    if ('.' != s) {
                      if (!uo(s)) break;
                    } else r = !0;
                  }
                  var u = this.ve.substring(i, e),
                    o = r ? parseFloat(u) : parseInt(u, 10);
                  return (i = e - 1), { type: ro.LITERAL, value: o, index: i };
                }
                if (-1 != ';:.()=,|!'.indexOf(n))
                  return { type: ro.SEPARATOR, value: n, index: i };
                if (-1 != '"\''.indexOf(n)) {
                  for (var h = -1, a = i + 1; a < this.ve.length; a++)
                    if (this.ve.charAt(a) == n) {
                      h = a;
                      break;
                    }
                  if (-1 == h) return { type: ro.INVALID, index: i };
                  var c = this.ve.substring(i + 1, h);
                  return (i = h), { type: ro.LITERAL, value: c, index: i };
                }
                if ('{' == n) {
                  for (var f = 1, l = -1, v = i + 1; v < this.ve.length; v++) {
                    var d = this.ve[v];
                    if (('{' == d ? f++ : '}' == d && f--, f <= 0)) {
                      l = v;
                      break;
                    }
                  }
                  if (-1 == l) return { type: ro.INVALID, index: i };
                  var m = this.ve.substring(i, l + 1);
                  return (i = l), { type: ro.OBJECT, value: m, index: i };
                }
                for (
                  var p = i + 1;
                  p < this.ve.length &&
                  -1 ==
                    ' \t\n\r\f\v \u2028\u2029;:.()=,|!"\'{}'.indexOf(
                      this.ve.charAt(p),
                    );
                  p++
                );
                var g = this.ve.substring(i, p);
                if (((i = p - 1), t && ('true' == g || 'false' == g))) {
                  var b = 'true' == g;
                  return { type: ro.LITERAL, value: b, index: i };
                }
                return uo(g.charAt(0))
                  ? { type: ro.LITERAL, value: g, index: i }
                  : { type: ro.ID, value: g, index: i };
              }),
              t
            );
          })();
        function uo(t) {
          return t >= '0' && t <= '9';
        }
        function oo(t) {
          return !!t && 'function' == typeof t.getFormData;
        }
        var ho = ['GET', 'POST'],
          ao = [V, w];
        function co(t, i) {
          var n = D({}, i);
          if (oo(i.body)) {
            var r = i.body;
            (n.headers['Content-Type'] = 'multipart/form-data;charset=utf-8'),
              (n.body = (function (t) {
                for (var i = [], n = t.next(); !n.done; n = t.next())
                  i.push(n.value);
                return i;
              })(r.entries()));
          }
          return { input: t, init: n };
        }
        function fo(t, i, n, r) {
          if (!i) return h();
          var e = r.prerenderSafe ? h() : i.whenFirstVisible(),
            s = mr(i),
            u = Ps(n),
            o = s.hasCapability('xhrInterceptor'),
            a = r.bypassInterceptorForDev && !1;
          return u || !o || a
            ? e
            : i
                  .getRootNode()
                  .documentElement.hasAttribute('allow-xhr-interception')
              ? e
                  .then(function () {
                    return s.isTrustedViewer();
                  })
                  .then(function (i) {
                    if (i || Fe(t, 'untrusted-xhr-interception')) {
                      var e = { originalRequest: co(n, r) };
                      return s
                        .sendMessageAwaitResponse('xhr', e)
                        .then(function (t) {
                          return (function (t, i) {
                            if (
                              (ht(w(t), 'Object expected: %s', t),
                              'document' != i)
                            )
                              return new Response(t.body, t.init);
                            var n = A(),
                              r = {
                                status: 200,
                                statusText: 'OK',
                                getResponseHeader: function (t) {
                                  return n[String(t).toLowerCase()] || null;
                                },
                              };
                            if (t.init) {
                              var e = t.init;
                              V(e.headers) &&
                                e.headers.forEach(function (t) {
                                  var i = t[0],
                                    r = t[1];
                                  n[String(i).toLowerCase()] = String(r);
                                }),
                                e.status && (r.status = parseInt(e.status, 10)),
                                e.statusText &&
                                  (r.statusText = String(e.statusText));
                            }
                            return new Response(
                              t.body ? String(t.body) : '',
                              r,
                            );
                          })(t, r.responseType);
                        });
                    }
                  })
              : e;
        }
        function lo(t, i, n) {
          return (
            et('string' == typeof i), !1 !== n.ampCors && (i = _s(t, i)), i
          );
        }
        function vo(t, i) {
          var n,
            r = t || {},
            e = r.credentials;
          return (
            et(void 0 === e || 'include' == e || 'omit' == e),
            (r.method =
              void 0 === (n = r.method)
                ? 'GET'
                : ((n = n.toUpperCase()), et(ho.includes(n)), n)),
            (r.headers = r.headers || {}),
            i && (r.headers.Accept = i),
            et(null !== r.body),
            r
          );
        }
        function mo(t, i, n) {
          n = n || {};
          var r = (function (t) {
            return t.origin || ms(t.location.href).origin;
          })(t);
          return (
            r == ms(i).origin &&
              ((n.headers = n.headers || {}),
              (n.headers['AMP-Same-Origin'] = 'true')),
            n
          );
        }
        function po(t) {
          return new Promise(function (i) {
            if (t.ok) return i(t);
            var n = t.status,
              r = Jt().createError('HTTP error '.concat(n));
            throw (
              ((r.retriable = (function (t) {
                return 415 == t || (t >= 500 && t < 600);
              })(n)),
              (r.response = t),
              r)
            );
          });
        }
        var go = (function () {
            function t(t) {
              this.win = t;
              var i = Jn(t);
              this.pe = i.isSingleDoc() ? i.getSingleDoc() : null;
            }
            var i = t.prototype;
            return (
              (i.be = function (t, i) {
                var n = arguments,
                  r = this;
                return fo(this.win, this.pe, t, i).then(function (t) {
                  if (t) return t;
                  if (oo(i.body)) {
                    var e = i.body;
                    i.body = e.getFormData();
                  }
                  return r.win.fetch.apply(null, n);
                });
              }),
              (i.ge = function (t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (
                  (t = lo(this.win, t, i)),
                  (i = mo(this.win, t, i)),
                  this.be(t, i).then(
                    function (t) {
                      return t;
                    },
                    function (i) {
                      var n = ms(t).origin;
                      throw Jt().createExpectedError(
                        'XHR',
                        'Failed fetching ('.concat(n, '/...):'),
                        i && i.message,
                      );
                    },
                  )
                );
              }),
              (i.fetchJson = function (t, i) {
                return this.fetch(
                  t,
                  (function (t) {
                    var i = vo(t, 'application/json');
                    if ('POST' == i.method && !oo(i.body)) {
                      et(
                        ao.some(function (t) {
                          return t(i.body);
                        }),
                      ),
                        (i.headers['Content-Type'] =
                          i.headers['Content-Type'] ||
                          'text/plain;charset=utf-8');
                      var n = i.headers['Content-Type'];
                      i.body =
                        'application/x-www-form-urlencoded' === n
                          ? ws(i.body)
                          : JSON.stringify(i.body);
                    }
                    return i;
                  })(i),
                );
              }),
              (i.fetchText = function (t, i) {
                return this.fetch(t, vo(i, 'text/plain'));
              }),
              (i.xssiJson = function (t, i) {
                return i
                  ? t.text().then(function (t) {
                      return t.startsWith(i)
                        ? at(t.slice(i.length))
                        : (Jt().warn(
                            'XHR',
                            'Failed to strip missing prefix "'.concat(
                              i,
                              '" in fetch response.',
                            ),
                          ),
                          at(t));
                    })
                  : t.json();
              }),
              (i.fetch = function (t, i) {
                var n = vo(i);
                return this.ge(t, n).then(function (t) {
                  return po(t);
                });
              }),
              (i.sendSignal = function (t, i) {
                return this.ge(t, i).then(function (t) {
                  return po(t);
                });
              }),
              (i.getCorsUrl = function (t, i) {
                return _s(t, i);
              }),
              t
            );
          })(),
          bo = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t) {
              var n;
              return ((n = i.call(this, t)).ye = A()), n;
            }
            var r = n.prototype;
            return (
              (r.fetch = function (i, n) {
                var r = this,
                  e = (n && n.headers && n.headers.Accept) || '',
                  s = !n || !n.method || 'GET' === n.method,
                  u = this.we(i, e),
                  o = !!this.ye[u];
                if (s && o)
                  return this.ye[u].then(function (t) {
                    return t.clone();
                  });
                var h = t.prototype.fetch.call(this, i, n);
                return (
                  s &&
                    (this.ye[u] = h.then(
                      function (t) {
                        return delete r.ye[u], t.clone();
                      },
                      function (t) {
                        throw (delete r.ye[u], t);
                      },
                    )),
                  h
                );
              }),
              (r.we = function (t, i) {
                return Es(Rs(t, Ss(this.win.location))) + i;
              }),
              n
            );
          })(go),
          yo = { '+': '-', '/': '_', '=': '.' };
        function wo(t) {
          var i = (function (t) {
            for (var i = new Array(t.length), n = 0; n < t.length; n++)
              i[n] = String.fromCharCode(t[n]);
            return i.join('');
          })(t);
          return btoa(i).replace(/[+/=]/g, function (t) {
            return yo[t];
          });
        }
        var Ao = 'AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc',
          xo = 'CacheCidApi',
          Eo = (function () {
            function t(t) {
              (this.Ui = t),
                (this.Ae = mr(this.Ui)),
                (this.xe = null),
                (this.$r = fr(this.Ui.win));
            }
            var i = t.prototype;
            return (
              (i.isSupported = function () {
                return this.Ae.isCctEmbedded() && this.Ae.isProxyOrigin();
              }),
              (i.getScopedCid = function (t) {
                var i = this;
                return this.Ae.isCctEmbedded()
                  ? (this.xe ||
                      (this.xe = this.Ee(
                        'https://ampcid.google.com/v1/cache:getClientId?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc',
                      )),
                    this.xe.then(function (n) {
                      return n ? i.Oe(n, t) : null;
                    }))
                  : Promise.resolve(null);
              }),
              (i.Ee = function (t) {
                var i = this,
                  n =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  r = { publisherOrigin: Ss(this.Ui.win.location) },
                  e = 'fetchCidTimeout';
                return this.$r
                  .timeoutPromise(
                    3e4,
                    br(this.Ui.win).fetchJson(t, {
                      method: 'POST',
                      ampCors: !1,
                      credentials: 'include',
                      mode: 'cors',
                      body: r,
                    }),
                    e,
                  )
                  .then(function (t) {
                    return t.json().then(function (t) {
                      if (t.optOut) return null;
                      var r = t.publisherClientId;
                      if (!r && n && t.alternateUrl) {
                        var e = ''.concat(t.alternateUrl, '?key=').concat(Ao);
                        return i.Ee(e, !1);
                      }
                      return r;
                    });
                  })
                  .catch(function (t) {
                    return (
                      t && t.response
                        ? t.response.json().then(function (t) {
                            Qt().error(xo, JSON.stringify(t));
                          })
                        : t && t.message == e
                          ? Qt().expectedError(xo, t)
                          : Qt().error(xo, t),
                      null
                    );
                  });
              }),
              (i.Oe = function (t, i) {
                var n = t + ';' + i;
                return tr(this.Ui.win)
                  .sha384Base64(n)
                  .then(function (t) {
                    return 'amp-' + t;
                  });
              }),
              t
            );
          })(),
          Po = '-test-amp-cookie-tmp';
        function Oo(t, i) {
          var n = (function (t) {
            try {
              return t.document.cookie;
            } catch (t) {
              return '';
            }
          })(t);
          if (!n) return null;
          for (var r = n.split(';'), e = 0; e < r.length; e++) {
            var s = r[e].trim(),
              u = s.indexOf('=');
            if (-1 != u && bt(s.substring(0, u).trim()) == i) {
              var o = s.substring(u + 1).trim();
              return bt(o, o);
            }
          }
          return null;
        }
        function Io(t, i, n, r) {
          var e =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          So(t, e, i);
          var s = void 0;
          e.domain ? (s = e.domain) : e.highestAvailableDomain && (s = To(t)),
            Mo(t, i, n, r, s, e.sameSite, e.secure);
        }
        function To(t) {
          var i =
            t.document.head &&
            t.document.head.querySelector("meta[name='amp-cookie-scope']");
          if (i) {
            var n = i.getAttribute('content') || '',
              r = Ss(t.location.href);
            return W(r, '.' + n) ? n : r.split('://')[1];
          }
          if (!Ps(t.location.href))
            for (
              var e = t.location.hostname.split('.'),
                s = e[e.length - 1],
                u = (function (t) {
                  for (var i = Po; Oo(t, i); ) i = Po + 0;
                  return i;
                })(t),
                o = e.length - 2;
              o >= 0;
              o--
            )
              if (
                ((s = e[o] + '.' + s),
                Mo(t, u, 'delete', Date.now() + 1e3, s),
                'delete' == Oo(t, u))
              )
                return Mo(t, u, 'delete', Date.now() - 1e3, s), s;
          return null;
        }
        function Mo(t, i, n, r, e, s, u) {
          'ampproject.org' == e && ((n = 'delete'), (r = 0));
          var o =
            encodeURIComponent(i) +
            '=' +
            encodeURIComponent(n) +
            '; path=/' +
            (e ? '; domain=' + e : '') +
            '; expires=' +
            new Date(r).toUTCString() +
            (function (t, i) {
              return i ? '; SameSite='.concat(i) : '';
            })(0, s) +
            (u ? '; Secure' : '');
          try {
            t.document.cookie = o;
          } catch (t) {}
        }
        function So(t, i, n) {
          if (i.allowOnProxyOrigin)
            ti(
              !i.highestAvailableDomain,
              'Could not support highestAvailable Domain on proxy origin, specify domain explicitly',
            );
          else {
            ti(
              !Ps(t.location.href),
              'Should never attempt to set cookie on proxy origin: '.concat(n),
            );
            var r = ms(t.location.href).hostname.toLowerCase(),
              e = ms(Tt).hostname.toLowerCase();
            ti(
              !(r == e || W(r, '.' + e)),
              'Should never attempt to set cookie on proxy origin. (in depth check): ' +
                n,
            );
          }
        }
        var Ro = 'GoogleCidApi',
          _o = 'AMP_TOKEN',
          ko = '$RETRIEVING',
          Co = '$OPT_OUT',
          No = '$NOT_FOUND',
          Do = 3e4,
          jo = 31536e6,
          Uo = (function () {
            function t(t) {
              (this.t = t.win), (this.$r = fr(this.t)), (this.Te = {});
              var i = ir(t).canonicalUrl;
              this.Pe = i ? ms(i).origin : null;
            }
            var i = t.prototype;
            return (
              (i.getScopedCid = function (t, i) {
                var n,
                  r = this;
                return this.Te[i]
                  ? this.Te[i]
                  : (this.Te[i] = this.$r
                      .poll(200, function () {
                        return (n = Oo(r.t, _o)) !== ko;
                      })
                      .then(function () {
                        if (n === Co) return Co;
                        if ((n !== No || !r.Ie()) && r.Se(n)) return null;
                        (n && !r.Se(n)) || r.Me(ko, Do);
                        var e =
                          'https://ampcid.google.com/v1/publisher:getClientId?key=' +
                          t;
                        return r
                          .Ee(e, i, n)
                          .then(function (e) {
                            var s = r.R(e);
                            if (!s && e.alternateUrl) {
                              var u = ''
                                .concat(e.alternateUrl, '?key=')
                                .concat(t);
                              return r.Ee(u, i, n).then(r.R.bind(r));
                            }
                            return s;
                          })
                          .catch(function (t) {
                            return (
                              r.Me('$ERROR', Do),
                              t && t.response
                                ? t.response.json().then(function (t) {
                                    Qt().error(Ro, JSON.stringify(t));
                                  })
                                : Qt().error(Ro, t),
                              null
                            );
                          });
                      }));
              }),
              (i.Ee = function (t, i, n) {
                var r = { originScope: i, canonicalOrigin: this.Pe };
                return (
                  n && (r.securityToken = n),
                  this.$r.timeoutPromise(
                    Do,
                    br(this.t)
                      .fetchJson(t, {
                        method: 'POST',
                        ampCors: !1,
                        credentials: 'include',
                        mode: 'cors',
                        body: r,
                      })
                      .then(function (t) {
                        return t.json();
                      }),
                  )
                );
              }),
              (i.R = function (t) {
                return t.optOut
                  ? (this.Me(Co, jo), Co)
                  : t.clientId
                    ? (this.Me(t.securityToken, jo), t.clientId)
                    : (t.alternateUrl || this.Me(No, 36e5), null);
              }),
              (i.Me = function (t, i) {
                t &&
                  Io(this.t, _o, t, this.Re(i), { highestAvailableDomain: !0 });
              }),
              (i.Re = function (t) {
                return this.t.Date.now() + t;
              }),
              (i.Ie = function () {
                return Ps(Gr.getDocumentReferrer(this.t));
              }),
              (i.Se = function (t) {
                return t && '$' === t[0];
              }),
              t
            );
          })(),
          Lo = (function () {
            function t(t) {
              (this.Ui = t), (this.Ae = mr(this.Ui));
              var i = ir(this.Ui).canonicalUrl;
              this.Pe = i ? ms(i).origin : null;
            }
            var i = t.prototype;
            return (
              (i.isSupported = function () {
                return this.Ae.hasCapability('cid')
                  ? this.Ae.isTrustedViewer()
                  : Promise.resolve(!1);
              }),
              (i.getScopedCid = function (t, i) {
                var n = {
                  scope: i,
                  clientIdApi: !!t,
                  canonicalOrigin: this.Pe,
                };
                return (
                  t && (n.apiKey = t),
                  this.Ae.sendMessageAwaitResponse('cid', n)
                );
              }),
              t
            );
          })(),
          zo = 31536e6,
          Ho = /^[a-zA-Z0-9-_.]+$/,
          Go = 'amp-cid-optout',
          Vo = 'amp-google-client-id-api',
          Fo = { googleanalytics: 'AMP_ECID_GOOGLE' },
          Bo = { googleanalytics: 'AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM' },
          qo = (function () {
            function t(t) {
              (this.ampdoc = t),
                (this._e = null),
                (this.ke = Object.create(null)),
                (this.Ne = new Eo(t)),
                (this.Ce = new Lo(t)),
                (this.je = new Uo(t)),
                (this.De = null);
            }
            var i = t.prototype;
            return (
              (i.get = function (t, i, n) {
                var r = this;
                return (
                  ti(
                    Ho.test(t.scope) && Ho.test(t.cookieName),
                    'The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s',
                    t.scope,
                  ),
                  i
                    .then(function () {
                      return r.ampdoc.whenFirstVisible();
                    })
                    .then(function () {
                      return (
                        (t = r.ampdoc),
                        cr(t)
                          .then(function (t) {
                            return t.get(Go).then(function (t) {
                              return !!t;
                            });
                          })
                          .catch(function () {
                            return !1;
                          })
                      );
                      var t;
                    })
                    .then(function (e) {
                      if (e) return '';
                      var s = r.Ue(t, n || i);
                      return fr(r.ampdoc.win)
                        .timeoutPromise(
                          1e4,
                          s,
                          'Getting cid for "'.concat(t.scope, '" timed out'),
                        )
                        .catch(function (t) {
                          d(t);
                        });
                    })
                );
              }),
              (i.optOut = function () {
                return (
                  (t = this.ampdoc),
                  mr(t).sendMessage('cidOptOut', {}),
                  cr(t).then(function (t) {
                    return t.set(Go, !0);
                  })
                );
                var t;
              }),
              (i.Ue = function (t, i) {
                var n = this,
                  r = t.scope,
                  e = ms(this.ampdoc.win.location.href);
                if (!Ps(e)) {
                  var s = this.ze(r);
                  return s
                    ? this.je.getScopedCid(s, r).then(function (e) {
                        if (e == Co) return null;
                        if (e) {
                          var s = t.cookieName || r;
                          return $o(n.ampdoc.win, s, e), e;
                        }
                        return Ko(n, t, i);
                      })
                    : Ko(this, t, i);
                }
                return this.Ce.isSupported().then(function (t) {
                  if (t) {
                    var s = n.ze(r);
                    return n.Ce.getScopedCid(s, r);
                  }
                  return n.Ne.isSupported() && n.ze(r)
                    ? n.Ne.getScopedCid(r).then(function (t) {
                        return t || n.Le(i, r, e);
                      })
                    : n.Le(i, r, e);
                });
              }),
              (i.Le = function (t, i, n) {
                var r = this;
                return (function (t, i) {
                  if (t._e) return t._e;
                  var n = t.ampdoc.win;
                  return (t._e = (function (t) {
                    var i,
                      n = t.win;
                    try {
                      i = n.localStorage.getItem('amp-cid');
                    } catch (t) {}
                    var r = Promise.resolve(i);
                    return (
                      !i && Ni(n) && (r = Jo(t)),
                      r.then(function (t) {
                        if (!t) return null;
                        var i = at(t);
                        return { time: i.time, cid: i.cid };
                      })
                    );
                  })(t.ampdoc).then(function (r) {
                    var e,
                      s,
                      u,
                      o = !1;
                    return (
                      !r || ((s = r.time), (u = Date.now()), s + zo < u)
                        ? ((e = tr(n).sha384Base64(Qo(n))), (o = !0))
                        : ((e = Promise.resolve(r.cid)),
                          r.time + 864e5 < Date.now() && (o = !0)),
                      o &&
                        e.then(function (n) {
                          !(function (t, i, n) {
                            var r = t.win;
                            Ni(r)
                              ? Jo(t, Xo(n))
                              : i.then(function () {
                                  try {
                                    r.localStorage.setItem('amp-cid', Xo(n));
                                  } catch (t) {}
                                });
                          })(t.ampdoc, i, n);
                        }),
                      e
                    );
                  }));
                })(this, t).then(function (t) {
                  return tr(r.ampdoc.win).sha384Base64(
                    t +
                      (function (t) {
                        return (
                          ti(Ps(t), 'Expected proxy origin %s', t.origin), Ss(t)
                        );
                      })(n) +
                      i,
                  );
                });
              }),
              (i.ze = function (t) {
                return this.De || (this.De = this.He()), this.De[t];
              }),
              (i.He = function () {
                var t = {},
                  i = this.ampdoc.getMetaByName(Vo);
                return (
                  i &&
                    i.split(',').forEach(function (i) {
                      if ((i = i.trim()).indexOf('=') > 0) {
                        var n = i.split('='),
                          r = n[0].trim();
                        t[r] = n[1].trim();
                      } else {
                        var e = i,
                          s = Fo[e];
                        s
                          ? (t[s] = Bo[e])
                          : Jt().warn(
                              'CID',
                              'Unsupported client for Google CID API: '.concat(
                                e,
                                '.',
                              ) +
                                'Please remove or correct meta[name="'.concat(
                                  Vo,
                                  '"]',
                                ),
                            );
                      }
                    }),
                  t
                );
              }),
              t
            );
          })();
        function $o(t, i, n) {
          Io(t, i, n, Date.now() + zo, { highestAvailableDomain: !0 });
        }
        function Wo(t, i, n) {
          cr(t).then(function (t) {
            if (!t.isViewerStorage()) {
              var r = Yo(i);
              t.setNonBoolean(r, n);
            }
          });
        }
        function Yo(t) {
          return 'amp-cid:' + t;
        }
        function Ko(t, i, n) {
          var r = t.ampdoc,
            e = r.win,
            s = i.disableBackup,
            u = i.scope,
            o = i.cookieName || u;
          return (function (t, i) {
            var n = t.ampdoc,
              r = n.win,
              e = i.disableBackup,
              s = i.scope,
              u = i.cookieName || s,
              o = Oo(r, u);
            return o
              ? Promise.resolve(o)
              : e
                ? Promise.resolve(null)
                : cr(n)
                    .then(function (t) {
                      var i = Yo(u);
                      return t.get(i, zo);
                    })
                    .then(function (t) {
                      return t && 'string' == typeof t ? t : null;
                    });
          })(t, i).then(function (h) {
            if (!h && !i.createCookieIfNotPresent) return Promise.resolve(null);
            if (h)
              return (
                /^amp-/.test(h) && ($o(e, o, h), s || Wo(r, o, h)),
                Promise.resolve(h)
              );
            if (t.ke[u]) return t.ke[u];
            var a = Zo(e).then(function (t) {
              return 'amp-' + t;
            });
            return (
              Promise.all([a, n]).then(function (t) {
                var i = t[0];
                Oo(e, o) || ($o(e, o, i), s || Wo(r, o, i));
              }),
              (t.ke[u] = a)
            );
          });
        }
        function Jo(t, i) {
          var n = mr(t);
          return n.isTrustedViewer().then(function (t) {
            if (t)
              return (
                Qt().expectedError('CID', 'Viewer does not provide cap=cid'),
                n.sendMessageAwaitResponse('cid', i).then(function (t) {
                  return t &&
                    !(function (t, i) {
                      try {
                        return at(t);
                      } catch (t) {
                        return null;
                      }
                    })(t)
                    ? (Qt().expectedError('CID', 'invalid cid format'),
                      JSON.stringify({ time: Date.now(), cid: t }))
                    : t;
                })
              );
          });
        }
        function Xo(t) {
          return JSON.stringify({ time: Date.now(), cid: t });
        }
        function Qo(t) {
          return (
            lt(t, 16) ||
            String(
              t.location.href +
                Date.now() +
                t.Math.random() +
                t.screen.width +
                t.screen.height,
            )
          );
        }
        function Zo(t) {
          var i = Qo(t);
          if ('string' == typeof i) return tr(t).sha384Base64(i);
          var n = i;
          return c(function () {
            return wo(n).replace(/\.+$/, '');
          });
        }
        var th = 'Crypto',
          ih = (function () {
            function t(t) {
              this.t = t;
              var i = null,
                n = !1;
              t.crypto &&
                (t.crypto.subtle
                  ? (i = t.crypto.subtle)
                  : t.crypto.webkitSubtle &&
                    ((i = t.crypto.webkitSubtle), (n = !0))),
                (this.pkcsAlgo = {
                  name: 'RSASSA-PKCS1-v1_5',
                  hash: { name: 'SHA-256' },
                }),
                (this.subtle = i),
                (this.Ge = n),
                (this.Ve = null);
            }
            var i = t.prototype;
            return (
              (i.sha384 = function (t) {
                var i = this;
                if (
                  ('string' == typeof t && (t = ft(t)), !this.subtle || this.Ve)
                )
                  return (this.Ve || this.Fe()).then(function (i) {
                    return i(t);
                  });
                try {
                  return this.subtle.digest({ name: 'SHA-384' }, t).then(
                    function (t) {
                      return new Uint8Array(t);
                    },
                    function (n) {
                      return (
                        n.message &&
                          n.message.indexOf('secure origin') < 0 &&
                          Jt().error(
                            th,
                            'SubtleCrypto failed, fallback to closure lib.',
                            n,
                          ),
                        i.Fe().then(function () {
                          return i.sha384(t);
                        })
                      );
                    },
                  );
                } catch (n) {
                  return (
                    Qt().error(
                      th,
                      'SubtleCrypto failed, fallback to closure lib.',
                      n,
                    ),
                    this.Fe().then(function () {
                      return i.sha384(t);
                    })
                  );
                }
              }),
              (i.sha384Base64 = function (t) {
                return this.sha384(t).then(function (t) {
                  return wo(t);
                });
              }),
              (i.uniform = function (t) {
                return this.sha384(t).then(function (t) {
                  for (var i = 0, n = 2; n >= 0; n--) i = (i + t[n]) / 256;
                  return i;
                });
              }),
              (i.Fe = function () {
                var t = this;
                return this.Ve
                  ? this.Ve
                  : (this.Ve = nr(this.t)
                      .preloadExtension('amp-crypto-polyfill')
                      .then(function () {
                        return On(t.t, 'crypto-polyfill');
                      }));
              }),
              (i.isPkcsAvailable = function () {
                return Boolean(this.subtle) && !1 !== this.t.isSecureContext;
              }),
              (i.importPkcsKey = function (t) {
                Zt(this.isPkcsAvailable());
                var i = this.Ge ? ct(JSON.stringify(t)) : t;
                return this.subtle.importKey('jwk', i, this.pkcsAlgo, !0, [
                  'verify',
                ]);
              }),
              (i.verifyPkcs = function (t, i, n) {
                return (
                  Zt(this.isPkcsAvailable()),
                  this.subtle.verify(this.pkcsAlgo, t, i, n)
                );
              }),
              t
            );
          })(),
          nh = ['prefetch', 'preload', 'preconnect', 'dns-prefetch'],
          rh = (function () {
            function t(t) {
              (this.Ui = t), (this.Be = null), (this.qe = null);
            }
            return (
              (t.prototype.get = function () {
                if (this.Be) return this.Be;
                var t = this.Ui,
                  i = Ms(t.getUrl()),
                  n = t.getRootNode(),
                  r = n && n.AMP && n.AMP.canonicalUrl;
                if (!r) {
                  var e = n.querySelector('link[rel=canonical]');
                  r = e ? ms(e.href).href : i;
                }
                var s,
                  u = (function (t) {
                    return String(Math.floor(1e4 * t.Math.random()));
                  })(t.win),
                  o = (function (t) {
                    var i = A();
                    if (t.head)
                      for (
                        var n = t.head.querySelectorAll('link[rel]'),
                          r = function (t) {
                            var r = n[t],
                              e = r.href,
                              s = r.getAttribute('rel');
                            if (!s || !e) return 'continue';
                            s.split(/\s+/).forEach(function (t) {
                              if (-1 == nh.indexOf(t)) {
                                var n = i[t];
                                n
                                  ? (V(n) || (n = i[t] = [n]), n.push(e))
                                  : (i[t] = e);
                              }
                            });
                          },
                          e = 0;
                        e < n.length;
                        e++
                      )
                        r(e);
                    return i;
                  })(t.win.document),
                  h = (s = t.win.document.head.querySelector(
                    'meta[name="viewport"]',
                  ))
                    ? s.getAttribute('content')
                    : null,
                  a = (function (t) {
                    if (
                      !t.isSingleDoc() ||
                      'a' !=
                        ((i = t.win.location.href),
                        Ps((i = ds(i))) ? i.pathname.split('/', 2)[1] : null)
                    )
                      return null;
                    var i,
                      n = yt(ms(t.win.location.href).search).amp_r;
                    return void 0 === n ? null : yt(n);
                  })(t);
                return (this.Be = {
                  get sourceUrl() {
                    return Ms(t.getUrl());
                  },
                  canonicalUrl: r,
                  pageViewId: u,
                  get pageViewId64() {
                    return this.qe || (this.qe = Zo(t.win)), this.qe;
                  },
                  linkRels: o,
                  viewport: h,
                  replaceParams: a,
                });
              }),
              t
            );
          })(),
          eh = { attributes: !0, attributeFilter: ['hidden'], subtree: !0 },
          sh = (function () {
            function t(t) {
              this.te = t.getRootNode();
              var i = this.te.ownerDocument || this.te;
              (this.t = Zt(i.defaultView)), (this.ct = null), (this.$e = null);
            }
            var i = t.prototype;
            return (
              (i.add = function (t) {
                var i = this;
                this.We();
                var n = this.$e.add(t);
                return function () {
                  n(), 0 === i.$e.getHandlerCount() && i.dispose();
                };
              }),
              (i.We = function () {
                var t = this;
                if (!this.ct) {
                  this.$e = new Or();
                  var i = new this.t.MutationObserver(function (i) {
                    i && t.$e.fire(i);
                  });
                  (this.ct = i), i.observe(this.te, eh);
                }
              }),
              (i.dispose = function () {
                this.ct &&
                  (this.ct.disconnect(),
                  this.$e.removeAll(),
                  (this.ct = null),
                  (this.$e = null));
              }),
              t
            );
          })();
        function uh(t) {
          try {
            return t.state;
          } catch (t) {
            return null;
          }
        }
        var oh = 'History',
          hh = 'AMP.History',
          ah = (function () {
            function t(t, i) {
              (this.Ui = t),
                (this.$r = fr(t.win)),
                (this.Ke = i),
                (this.Ye = 0),
                (this.Je = []),
                (this.Ji = []),
                this.Ke.setOnStateUpdated(this.Xe.bind(this));
            }
            var i = t.prototype;
            return (
              (i.cleanup = function () {
                this.Ke.cleanup();
              }),
              (i.push = function (t, i) {
                var n = this;
                return this.Qe(function () {
                  return n.Ke.push(i).then(function (i) {
                    return n.Xe(i), t && (n.Je[i.stackIndex] = t), i.stackIndex;
                  });
                }, 'push');
              }),
              (i.pop = function (t) {
                var i = this;
                return this.Qe(function () {
                  return i.Ke.pop(t).then(function (t) {
                    i.Xe(t);
                  });
                }, 'pop');
              }),
              (i.replace = function (t) {
                var i = this;
                return this.Qe(function () {
                  return i.Ke.replace(t);
                }, 'replace');
              }),
              (i.get = function () {
                var t = this;
                return this.Qe(function () {
                  return t.Ke.get();
                }, 'get');
              }),
              (i.goBack = function (t) {
                var i = this;
                return this.Qe(function () {
                  return i.Ye <= 0 && !t
                    ? h()
                    : i.Ke.pop(i.Ye).then(function (t) {
                        i.Xe(t);
                      });
                }, 'goBack');
              }),
              (i.replaceStateForTarget = function (t) {
                var i = this;
                Zt('#' == t[0]);
                var n = this.Ui.win.location.hash;
                return this.push(function () {
                  i.Ui.win.location.replace(n || '#');
                }).then(function () {
                  i.Ke.replaceStateForTarget(t);
                });
              }),
              (i.getFragment = function () {
                return this.Ke.getFragment();
              }),
              (i.updateFragment = function (t) {
                return (
                  '#' == t[0] && (t = t.substr(1)), this.Ke.updateFragment(t)
                );
              }),
              (i.Xe = function (t) {
                (this.Ye = t.stackIndex), this.Ze(t);
              }),
              (i.Ze = function (t) {
                var i = this;
                if (!(this.Ye >= this.Je.length - 1)) {
                  for (var n = [], r = this.Je.length - 1; r > this.Ye; r--)
                    this.Je[r] && (n.push(this.Je[r]), (this.Je[r] = void 0));
                  if ((this.Je.splice(this.Ye + 1), n.length > 0))
                    for (
                      var e = function (r) {
                          i.$r.delay(function () {
                            return n[r](t);
                          }, 1);
                        },
                        s = 0;
                      s < n.length;
                      s++
                    )
                      e(s);
                }
              }),
              (i.Qe = function (t, i) {
                var n = new a(),
                  r = n.promise,
                  e = n.reject,
                  s = n.resolve,
                  u = new Error('history trace for ' + i + ': ');
                return (
                  this.Ji.push({
                    callback: t,
                    resolve: s,
                    reject: e,
                    trace: u,
                  }),
                  1 == this.Ji.length && this.ts(),
                  r
                );
              }),
              (i.ts = function () {
                var t = this;
                if (0 != this.Ji.length) {
                  var i,
                    n = this.Ji[0];
                  try {
                    i = n.callback();
                  } catch (t) {
                    i = Promise.reject(t);
                  }
                  i.then(
                    function (t) {
                      n.resolve(t);
                    },
                    function (t) {
                      Qt().error(oh, 'failed to execute a task:', t),
                        n.trace &&
                          ((n.trace.message += t), Qt().error(oh, n.trace)),
                        n.reject(t);
                    },
                  ).then(function () {
                    t.Ji.splice(0, 1), t.ts();
                  });
                }
              }),
              t
            );
          })(),
          ch = (function () {
            function t(t) {
              var i = this;
              (this.win = t), (this.$r = fr(t));
              var n = this.win.history;
              this.ns = n.length - 1;
              var r,
                e,
                s = uh(n);
              s && void 0 !== s[hh] && (this.ns = Math.min(s[hh], this.ns)),
                (this.Ye = this.ns),
                this.rs,
                (this.Xe = null),
                (this.es = 'state' in n),
                (this.ss = this.os(this.Ye)),
                n.pushState && n.replaceState
                  ? ((this.us = n.originalPushState || n.pushState.bind(n)),
                    (this.hs =
                      n.originalReplaceState || n.replaceState.bind(n)),
                    (r = function (t, n, r) {
                      i.ss = t;
                      try {
                        i.us(t, n, r || null);
                      } catch (t) {
                        Qt().error(oh, 'pushState failed: ' + t.message);
                      }
                    }),
                    (e = function (t, n, r) {
                      i.ss = t;
                      try {
                        void 0 !== r ? i.hs(t, n, r) : i.hs(t, n);
                      } catch (t) {
                        Qt().error(oh, 'replaceState failed: ' + t.message);
                      }
                    }),
                    n.originalPushState || (n.originalPushState = this.us),
                    n.originalReplaceState ||
                      (n.originalReplaceState = this.hs))
                  : ((r = function (t, n, r) {
                      i.ss = t;
                    }),
                    (e = function (t, n, r) {
                      i.ss = t;
                    })),
                (this.cs = r),
                (this.fs = e);
              try {
                this.fs(this.os(this.Ye, !0));
              } catch (t) {
                Qt().error(oh, 'Initial replaceState failed: ' + t.message);
              }
              (n.pushState = this.ls.bind(this)),
                (n.replaceState = this.vs.bind(this)),
                (this.ds = function (t) {
                  var n = t.state;
                  Qt().fine(
                    oh,
                    'popstate event: ' +
                      i.win.history.length +
                      ', ' +
                      JSON.stringify(n),
                  ),
                    i.ps();
                }),
                this.win.addEventListener('popstate', this.ds);
            }
            var i = t.prototype;
            return (
              (i.cleanup = function () {
                this.us && (this.win.history.pushState = this.us),
                  this.hs && (this.win.history.replaceState = this.hs),
                  this.win.removeEventListener('popstate', this.ds);
              }),
              (i.os = function (t, i) {
                var n = A(i ? this.bs() : void 0);
                return (n[hh] = t), n;
              }),
              (i.setOnStateUpdated = function (t) {
                this.Xe = t;
              }),
              (i.push = function (t) {
                var i = this;
                return this.gs(function () {
                  var n = i.ys(i.bs(), t || {});
                  return (
                    i.ls(n, void 0, n.fragment ? '#' + n.fragment : void 0),
                    c(function () {
                      return i.ys(n, { stackIndex: i.Ye });
                    })
                  );
                });
              }),
              (i.pop = function (t) {
                var i = this;
                return (
                  (t = Math.max(t, this.ns)),
                  this.gs(function () {
                    return i.ws(i.Ye - t + 1);
                  }).then(function (t) {
                    return i.ys(i.bs(), { stackIndex: t });
                  })
                );
              }),
              (i.replace = function () {
                var t = this,
                  i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return this.gs(function () {
                  var n = t.ys(t.bs(), i || {}),
                    r = (n.url || '').replace(/#.*/, ''),
                    e = n.fragment ? '#' + n.fragment : '';
                  return (
                    t.vs(n, n.title, r || e ? r + e : void 0),
                    c(function () {
                      return t.ys(n, { stackIndex: t.Ye });
                    })
                  );
                });
              }),
              (i.get = function () {
                var t = this;
                return c(function () {
                  return t.ys(t.bs(), { stackIndex: t.Ye });
                });
              }),
              (i.backTo = function (t) {
                var i = this;
                return (
                  (t = Math.max(t, this.ns)),
                  this.gs(function () {
                    return i.ws(i.Ye - t);
                  })
                );
              }),
              (i.ps = function () {
                var t = this.bs();
                Qt().fine(
                  oh,
                  'history event: ' +
                    this.win.history.length +
                    ', ' +
                    JSON.stringify(t),
                );
                var i = t ? t[hh] : void 0,
                  n = this.Ye,
                  r = this.rs;
                (this.rs = void 0),
                  n > this.win.history.length - 2 &&
                    ((n = this.win.history.length - 2),
                    this.As(this.ys(t, { stackIndex: n }))),
                  null == i
                    ? (n += 1)
                    : (n =
                        i < this.win.history.length
                          ? i
                          : this.win.history.length - 1),
                  t || (t = {}),
                  (t[hh] = n),
                  this.fs(t, void 0, void 0),
                  n != this.Ye && this.As(this.ys(t, { stackIndex: n })),
                  n < this.ns && (this.ns = n),
                  r && r.resolve();
              }),
              (i.bs = function () {
                return this.es ? uh(this.win.history) : this.ss;
              }),
              (i.xs = function () {
                Zt(!this.rs);
              }),
              (i.gs = function (t) {
                return this.rs ? this.rs.promise.then(t, t) : t();
              }),
              (i.Es = function () {
                this.xs();
                var t = new a(),
                  i = t.reject,
                  n = t.resolve,
                  r = this.$r.timeoutPromise(500, t.promise);
                return (this.rs = { promise: r, resolve: n, reject: i }), r;
              }),
              (i.ws = function (t) {
                var i = this;
                if ((this.xs(), t <= 0)) return Promise.resolve(this.Ye);
                this.ss = this.os(this.Ye - t);
                var n = this.Es();
                return (
                  this.win.history.go(-t),
                  n.then(function () {
                    return Promise.resolve(i.Ye);
                  })
                );
              }),
              (i.ls = function (t, i, n) {
                this.xs(), t || (t = {});
                var r = this.Ye + 1;
                (t[hh] = r),
                  this.cs(t, i, n),
                  r != this.win.history.length - 1 &&
                    ((r = this.win.history.length - 1),
                    (t[hh] = r),
                    this.fs(t));
                var e = this.ys(t, { stackIndex: r });
                this.As(e);
              }),
              (i.replaceStateForTarget = function (t) {
                var i = this;
                Zt('#' == t[0]),
                  this.gs(function () {
                    i.win.removeEventListener('popstate', i.ds);
                    try {
                      i.win.location.replace(t);
                    } finally {
                      i.win.addEventListener('popstate', i.ds);
                    }
                    return i.vs(), h();
                  });
              }),
              (i.vs = function (t, i, n) {
                this.xs(), t || (t = {});
                var r = Math.min(this.Ye, this.win.history.length - 1);
                (t[hh] = r), this.fs(t, i, n);
                var e = this.ys(t, { stackIndex: r });
                this.As(e);
              }),
              (i.As = function (t) {
                this.xs(),
                  (t.stackIndex = Math.min(
                    t.stackIndex,
                    this.win.history.length - 1,
                  )),
                  this.Ye != t.stackIndex &&
                    (Qt().fine(
                      oh,
                      'stack index changed: ' + this.Ye + ' -> ' + t.stackIndex,
                    ),
                    (this.Ye = t.stackIndex),
                    this.Xe && this.Xe(t));
              }),
              (i.getFragment = function () {
                var t = this.win.location.hash;
                return (t = t.substr(1)), Promise.resolve(t);
              }),
              (i.updateFragment = function (t) {
                return this.replace({ fragment: t });
              }),
              (i.ys = function (t, i) {
                var n = D(D({}, (t && t.data) || {}), i.data || {});
                return D(D(D({}, t || {}), i), {}, { data: n });
              }),
              t
            );
          })(),
          fh = (function () {
            function t(t, i) {
              var n = this;
              (this.win = t),
                (this.Ae = i),
                (this.Ye = 0),
                (this.Xe = null),
                (this.Os = this.Ae.onMessage('historyPopped', function (t) {
                  return n.Ts(t);
                }));
            }
            var i = t.prototype;
            return (
              (i.replaceStateForTarget = function (t) {
                Zt('#' == t[0]), this.win.location.replace(t);
              }),
              (i.cleanup = function () {
                this.Os();
              }),
              (i.setOnStateUpdated = function (t) {
                this.Xe = t;
              }),
              (i.Ps = function (t, i, n) {
                return this.Is(t)
                  ? t
                  : (Qt().warn(oh, 'Ignored unexpected "%s" data:', n, t), i);
              }),
              (i.Is = function (t) {
                return !!t && void 0 !== t.stackIndex;
              }),
              (i.push = function (t) {
                var i = this,
                  n = D({ stackIndex: this.Ye + 1 }, t || {}),
                  r = 'pushHistory';
                return this.Ae.sendMessageAwaitResponse(r, n).then(
                  function (t) {
                    var e = n,
                      s = i.Ps(t, e, r);
                    return i.As(s), s;
                  },
                );
              }),
              (i.pop = function (t) {
                var i = this;
                if (t > this.Ye) return this.get();
                var n = { stackIndex: this.Ye },
                  r = 'popHistory';
                return this.Ae.sendMessageAwaitResponse(r, n).then(
                  function (t) {
                    var n = { stackIndex: i.Ye - 1 },
                      e = i.Ps(t, n, r);
                    return i.As(e), e;
                  },
                );
              }),
              (i.replace = function (t) {
                var i = this;
                if (t && t.url) {
                  if (!this.Ae.hasCapability('fullReplaceHistory')) {
                    var n = { stackIndex: this.Ye };
                    return Promise.resolve(n);
                  }
                  var r = t.url.replace(/#.*/, '');
                  t.url = r;
                }
                var e = D({ stackIndex: this.Ye }, t || {}),
                  s = 'replaceHistory';
                return this.Ae.sendMessageAwaitResponse(s, e, !0).then(
                  function (t) {
                    var n = e,
                      r = i.Ps(t, n, s);
                    return i.As(r), r;
                  },
                );
              }),
              (i.get = function () {
                return Promise.resolve({
                  data: void 0,
                  fragment: '',
                  stackIndex: this.Ye,
                  title: '',
                });
              }),
              (i.Ts = function (t) {
                void 0 !== t.newStackIndex && (t.stackIndex = t.newStackIndex),
                  this.Is(t)
                    ? this.As(t)
                    : Qt().warn(
                        oh,
                        'Ignored unexpected "historyPopped" data:',
                        t,
                      );
              }),
              (i.As = function (t) {
                var i = t.stackIndex;
                this.Ye != i &&
                  (Qt().fine(
                    oh,
                    'stackIndex: '.concat(this.Ye, ' -> ').concat(i),
                  ),
                  (this.Ye = i),
                  this.Xe && this.Xe(t));
              }),
              (i.getFragment = function () {
                return this.Ae.hasCapability('fragment')
                  ? this.Ae.sendMessageAwaitResponse(
                      'getFragment',
                      void 0,
                      !0,
                    ).then(function (t) {
                      if (!t) return '';
                      var i = t;
                      return '#' == i[0] && (i = i.substr(1)), i;
                    })
                  : Promise.resolve('');
              }),
              (i.updateFragment = function (t) {
                return this.Ae.hasCapability('fragment')
                  ? this.Ae.sendMessageAwaitResponse(
                      'replaceHistory',
                      { fragment: t },
                      !0,
                    )
                  : h();
              }),
              t
            );
          })();
        function lh(t) {
          var i,
            n = mr(t);
          return (
            n.isOvertakeHistory() || t.win.__AMP_TEST_IFRAME
              ? (i = new fh(t.win, n))
              : (En(t.win, 'global-history-binding', ch),
                (i = On(t.win, 'global-history-binding'))),
            new ah(t, i)
          );
        }
        function vh(t, i) {
          return nr(t.win)
            .installExtensionForDoc(t, 'amp-loader')
            .then(function () {
              return (function (t) {
                return Vn(t, 'loader', 'amp-loader');
              })(i);
            });
        }
        var dh = [
            '<div slot=i-amphtml-svc class="i-amphtml-svc i-amphtml-loading-container i-amphtml-fill-content amp-hidden"></div>',
          ],
          mh = (function () {
            function t(t) {
              this.Ui = t;
              var i = t.win,
                n = this.Ss.bind(this);
              (this.Ms = (function (t, i) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = n.needsRootBounds,
                  e = n.rootMargin,
                  s = n.threshold,
                  u = Ni(i) && (r || e) ? i.document : void 0;
                return new i.IntersectionObserver(t, {
                  threshold: s,
                  root: u,
                  rootMargin: e,
                });
              })(function (t) {
                return t.forEach(n);
              }, i)),
                (this.Rs = new WeakMap());
            }
            var i = t.prototype;
            return (
              (i.dispose = function () {
                this.Ms.disconnect();
              }),
              (i.track = function (t) {
                this.Ms.observe(t);
              }),
              (i.untrack = function (t) {
                this.Ms.unobserve(t), this._s(t);
              }),
              (i.Ss = function (t) {
                var i = t.boundingClientRect,
                  n = t.isIntersecting,
                  r = t.target,
                  e = i.height,
                  s = i.width,
                  u = r,
                  o = n && s > 20 && e > 20,
                  h = this.Rs.get(u);
                o !== ((h && h.shown) || !1) &&
                  (o && !h && ((h = this.ks(u, s, e)), this.Rs.set(u, h)),
                  h &&
                    ((h.shown = o),
                    h.container.classList.toggle('amp-hidden', !o),
                    h.loader.classList.toggle('amp-active', o)));
              }),
              (i.ks = function (t, i, n) {
                var r = Date.now(),
                  e = (function (t, i, n, r) {
                    var e =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : t.win.Date.now(),
                      s = i.ownerDocument.createElement('div');
                    return (
                      vh(t, i).then(function (u) {
                        var o = t.win.Date.now() - e;
                        u.initializeLoader(i, s, o, n, r);
                      }),
                      s
                    );
                  })(this.Ui, t, i, n, r),
                  s = Ne(this.Ui.win.document)(dh);
                return (
                  s.appendChild(e),
                  t.appendChild(s),
                  { shown: !1, loader: e, container: s }
                );
              }),
              (i._s = function (t) {
                var i = this.Rs.get(t);
                i && (this.Rs.delete(t), Mi(i.container));
              }),
              t
            );
          })(),
          ph = (function () {
            function t(t, i) {
              var n = this;
              (this.win = t),
                (this.Ns = i),
                (this.Cs = []),
                (this.js = new Or()),
                (this.Ds = function (t) {
                  K(t.target) && n.Us(t.target);
                }),
                (this.zs = function (i) {
                  fr(t).delay(function () {
                    n.win.document.activeElement &&
                      n.Us(n.win.document.activeElement);
                  }, 500);
                }),
                this.win.document.addEventListener('focus', this.Ds, !0),
                this.win.addEventListener('blur', this.zs);
            }
            var i = t.prototype;
            return (
              (i._s = function () {
                this.win.document.removeEventListener('focus', this.Ds, !0),
                  this.win.removeEventListener('blur', this.zs);
              }),
              (i.onFocus = function (t) {
                return this.js.add(t);
              }),
              (i.Us = function (t) {
                var i = Date.now();
                0 == this.Cs.length || this.Cs[this.Cs.length - 1].el != t
                  ? this.Cs.push({ el: t, time: i })
                  : (this.Cs[this.Cs.length - 1].time = i),
                  this.purgeBefore(i - this.Ns),
                  this.js.fire(t);
              }),
              (i.getLast = function () {
                return 0 == this.Cs.length
                  ? null
                  : this.Cs[this.Cs.length - 1].el;
              }),
              (i.purgeBefore = function (t) {
                for (var i = this.Cs.length - 1, n = 0; n < this.Cs.length; n++)
                  if (this.Cs[n].time >= t) {
                    i = n - 1;
                    break;
                  }
                -1 != i && this.Cs.splice(0, i + 1);
              }),
              (i.hasDescendantsOf = function (t) {
                this.win.document.activeElement &&
                  this.Us(this.win.document.activeElement);
                for (var i = 0; i < this.Cs.length; i++)
                  if (t.contains(this.Cs[i].el)) return !0;
                return !1;
              }),
              t
            );
          })(),
          gh = 70,
          bh = (function () {
            function t(t) {
              var i = this;
              (this.ampdoc = t),
                (this.win = t.win),
                (this.mi = ar(t)),
                (this.Ls = gr(this.ampdoc)),
                (this.Hs = pr(this.win)),
                (this.Gs = new ph(this.win, 6e4)),
                this.Gs.onFocus(function (t) {
                  i.Vs(t);
                });
            }
            var i = t.prototype;
            return (
              (i.forceChangeSize = function (t, i, n, r, e) {
                this.Fs(Vs.forElement(t), i, n, e, void 0, !0, r);
              }),
              (i.requestChangeSize = function (t, i, n, r, e) {
                var s = this;
                return new Promise(function (u, o) {
                  s.Fs(Vs.forElement(t), i, n, r, e, !1, function (t) {
                    t ? u() : o(new Error('changeSize attempt denied'));
                  });
                });
              }),
              (i.expandElement = function (t) {
                Vs.forElement(t).completeExpand(), this.mi.schedulePass(gh);
              }),
              (i.attemptCollapse = function (t) {
                var i = this;
                return new Promise(function (n, r) {
                  i.Fs(
                    Vs.forElement(t),
                    0,
                    0,
                    void 0,
                    void 0,
                    !1,
                    function (i) {
                      i
                        ? (Vs.forElement(t).completeCollapse(), n())
                        : r(
                            Qt().createExpectedError('collapse attempt denied'),
                          );
                    },
                  );
                });
              }),
              (i.collapseElement = function (t) {
                var i = this.Ls.getLayoutRect(t);
                0 != i.width &&
                  0 != i.height &&
                  (Fe(this.win, 'dirty-collapse-element')
                    ? this.dirtyElement(t)
                    : this.mi.setRelayoutTop(i.top)),
                  Vs.forElement(t).completeCollapse(),
                  this.mi.schedulePass(gh);
              }),
              (i.measureElement = function (t) {
                return this.Hs.measurePromise(t);
              }),
              (i.mutateElement = function (t, i, n) {
                return this.Bs(t, null, i, n);
              }),
              (i.measureMutateElement = function (t, i, n) {
                return this.Bs(t, i, n);
              }),
              (i.qs = function (t) {
                var i = jr(this.win, t.element);
                return {
                  top: parseInt(i.marginTop, 10) || 0,
                  right: parseInt(i.marginRight, 10) || 0,
                  bottom: parseInt(i.marginBottom, 10) || 0,
                  left: parseInt(i.marginLeft, 10) || 0,
                };
              }),
              (i.Bs = function (t, i, n) {
                var r = this,
                  e =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3],
                  s = function () {
                    var i = r.Ls.getLayoutRect(t);
                    return 0 != i.width && 0 != i.height ? i.top : -1;
                  },
                  u = -1;
                return this.Hs.runPromise({
                  measure: function () {
                    i && i(), e || (u = s());
                  },
                  mutate: function () {
                    if ((n(), !e)) {
                      t.classList.contains('i-amphtml-element') &&
                        Vs.forElement(t).requestMeasure();
                      for (
                        var i = t.getElementsByClassName('i-amphtml-element'),
                          o = 0;
                        o < i.length;
                        o++
                      )
                        Vs.forElement(i[o]).requestMeasure();
                      r.mi.schedulePass(gh),
                        -1 != u && r.mi.setRelayoutTop(u),
                        r.Hs.measure(function () {
                          var t = s();
                          -1 != t &&
                            t != u &&
                            (r.mi.setRelayoutTop(t), r.mi.schedulePass(gh)),
                            r.mi.maybeHeightChanged();
                        });
                    }
                  },
                });
              }),
              (i.dirtyElement = function (t) {
                var i = !1;
                if (t.classList.contains('i-amphtml-element')) {
                  var n = Vs.forElement(t);
                  this.mi.setRelayoutTop(n.getLayoutBox().top);
                } else i = !0;
                this.mi.schedulePass(gh, i);
              }),
              (i.Vs = function (t) {
                var i = bi(t, function (t) {
                  return !!Vs.forElementOptional(t);
                });
                if (i) {
                  var n = Vs.forElement(i),
                    r = n.getPendingChangeSize();
                  void 0 !== r &&
                    this.Fs(n, r.height, r.width, r.margins, void 0, !0);
                }
              }),
              (i.Fs = function (t, i, n, r, e, s, u) {
                var o = this;
                t.hasBeenMeasured() && !r
                  ? this.$s(t, i, n, void 0, e, s, u)
                  : this.Hs.measure(function () {
                      t.hasBeenMeasured() || t.measure();
                      var h = r
                        ? { newMargins: r, currentMargins: o.qs(t) }
                        : void 0;
                      o.$s(t, i, n, h, e, s, u);
                    });
              }),
              (i.$s = function (t, i, n, r, e, s, u) {
                t.resetPendingChangeSize();
                var o,
                  h,
                  a = t.getLayoutSize();
                if (
                  !(
                    (void 0 !== i && i != a.height) ||
                    (void 0 !== n && n != a.width) ||
                    (void 0 !== r &&
                      ((o = r.currentMargins),
                      (h = r.newMargins),
                      (void 0 !== h.top && h.top != o.top) ||
                        (void 0 !== h.right && h.right != o.right) ||
                        (void 0 !== h.bottom && h.bottom != o.bottom) ||
                        (void 0 !== h.left && h.left != o.left)))
                  )
                )
                  return (
                    void 0 === i &&
                      void 0 === n &&
                      void 0 === r &&
                      Qt().error(
                        'Mutator',
                        'attempting to change size with undefined dimensions',
                        t.debugid,
                      ),
                    void (u && u(!0))
                  );
                this.mi.updateOrEnqueueMutateTask(t, {
                  resource: t,
                  newHeight: i,
                  newWidth: n,
                  marginChange: r,
                  event: e,
                  force: s,
                  callback: u,
                }),
                  this.mi.schedulePassVsync();
              }),
              t
            );
          })(),
          yh = null,
          wh = ['gclid', 'gclsrc'],
          Ah = [/^t.co$/];
        function xh() {
          return ti(yh, 'E#19457 trackImpressionPromise');
        }
        function Eh(t, i, n, r) {
          var e, s, u;
          try {
            e = t.open(i, n, r);
          } catch (t) {
            Qt().error('DOM', 'Failed to open url on target: ', n, t);
          }
          return (
            !e &&
              '_top' != n &&
              ('number' != typeof u && (u = 0),
              u + 'noopener'.length > (s = r || '').length ||
                -1 === s.indexOf('noopener', u)) &&
              (e = t.open(i, '_top')),
            e
          );
        }
        var Ph = 'navigation',
          Oh = 'click',
          Ih = 'contextmenu',
          Th = ['_top', '_blank'],
          Mh = 'data-a4a-orig-href',
          Sh = (function () {
            function t(t) {
              var i = this;
              (this.ampdoc = t),
                (this.Ws = t.getRootNode()),
                (this.Ls = gr(this.ampdoc)),
                (this.Ae = mr(this.ampdoc)),
                (this.Cs = rr(this.ampdoc)),
                (this.Ks = or(this.ampdoc.win)),
                (this.Ys = this.Ks.isIos() && this.Ks.isSafari()),
                (this.Js = Ni(this.ampdoc.win) && this.Ae.isOvertakeHistory()),
                (this.Xs =
                  this.Ws != this.ampdoc.getRootNode() ||
                  !!this.ampdoc.getParent()),
                (this.Qs = 'inabox' == Dt(this.ampdoc.win).runtime),
                (this.Zs =
                  this.Ws.nodeType == Node.DOCUMENT_NODE
                    ? this.Ws.documentElement
                    : this.Ws),
                (this.io = this.no.bind(this)),
                this.Ws.addEventListener(Oh, this.io),
                this.Ws.addEventListener(Ih, this.io),
                (this.ro = !1),
                (function (t) {
                  return t.whenReady().then(function () {
                    return !!t
                      .getBody()
                      .querySelector('amp-analytics[type=googleanalytics]');
                  });
                })(this.ampdoc).then(function (t) {
                  i.ro = t;
                }),
                (this.eo = !1),
                (this.so = !1),
                Promise.all([
                  this.Ae.isTrustedViewer(),
                  this.Ae.getViewerOrigin(),
                ]).then(function (t) {
                  var n;
                  (i.eo = t[0]), (i.so = ((n = t[1]), Mt.test(ds(n).origin)));
                }),
                (this.oo = null),
                (this.uo = new Ys()),
                (this.ho = new Ys());
            }
            t.installAnchorClickInterceptor = function (t, i) {
              i.document.documentElement.addEventListener(
                'click',
                Rh.bind(null, t),
                !0,
              );
            };
            var i = t.prototype;
            return (
              (i.cleanup = function () {
                this.io &&
                  (this.Ws.removeEventListener(Oh, this.io),
                  this.Ws.removeEventListener(Ih, this.io));
              }),
              (i.openWindow = function (t, i, n, r) {
                var e = '';
                (!this.Ks.isIos() && this.Ks.isChrome()) ||
                  r ||
                  (e += 'noopener');
                var s = Eh(t, i, n, e);
                s && !r && (s.opener = null);
              }),
              (i.navigateTo = function (t, i, n) {
                var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {},
                  e = r.opener,
                  s = void 0 !== e && e,
                  u = r.target,
                  o = void 0 === u ? '_top' : u;
                i = this.ao(i);
                var h = dr(this.Zs);
                if (h.isProtocolValid(i)) {
                  ti(Th.includes(o), "Target '".concat(o, "' not supported."));
                  var a = h.getSourceUrl(t.location);
                  (i = h.resolveRelativeUrl(i, a)),
                    '_blank' != o
                      ? (n &&
                          (this.oo || (this.oo = this.co()),
                          this.oo.includes(n) &&
                            this.navigateToAmpUrl(i, n))) ||
                        (t.top.location.href = i)
                      : this.openWindow(t, i, o, s);
                } else
                  Jt().error(Ph, 'Cannot navigate to invalid protocol: ' + i);
              }),
              (i.navigateToAmpUrl = function (t, i) {
                return (
                  !!this.Ae.hasCapability('a2a') &&
                  (this.Ae.sendMessage('a2aNavigate', {
                    url: t,
                    requestedBy: i,
                  }),
                  !0)
                );
              }),
              (i.co = function () {
                var t = this.Ws.querySelector(
                  'meta[name="amp-to-amp-navigation"]',
                );
                return t && t.hasAttribute('content')
                  ? t
                      .getAttribute('content')
                      .split(',')
                      .map(function (t) {
                        return t.trim();
                      })
                  : [];
              }),
              (i.no = function (t) {
                if (!t.defaultPrevented) {
                  var i = yi(t.__AMP_CUSTOM_LINKER_TARGET__ || t.target, 'A');
                  i &&
                    i.href &&
                    (t.type == Oh
                      ? this.fo(i, t)
                      : t.type == Ih && this.lo(i, t));
                }
              }),
              (i.fo = function (t, i) {
                this.vo(t);
                var n = this.do(t.href);
                if (!this.mo(i, t, n) && !this.po(i, t, n)) {
                  var r = this.bo();
                  _h(n) != _h(r) && (this.yo(t, i), (n = this.do(t.href))),
                    this.wo(i, t, n, r);
                }
              }),
              (i.lo = function (t, i) {
                this.vo(t), this.yo(t, i);
              }),
              (i.yo = function (t, i) {
                this.uo.forEach(function (n) {
                  n(t, i);
                });
              }),
              (i.ao = function (t) {
                return (
                  this.ho.forEach(function (i) {
                    t = i(t);
                  }),
                  t
                );
              }),
              (i.vo = function (t) {
                var i = null;
                this.ro &&
                  !this.Xs &&
                  (i = (function (t, i) {
                    for (
                      var n = yt(ms(Gr.getLocation(t).href).search),
                        r = [],
                        e = 0;
                      e < wh.length;
                      e++
                    ) {
                      var s = wh[e];
                      void 0 !== n[s] && r.push(s);
                    }
                    var u = i.getAttribute('data-amp-addparams'),
                      o = i.href;
                    u && (o = ys(o, yt(u)));
                    for (
                      var h = yt(ms(o).search), a = r.length - 1;
                      a >= 0;
                      a--
                    )
                      void 0 !== h[r[a]] && r.splice(a, 1);
                    return (function (t) {
                      for (var i = '', n = 0; n < t.length; n++) {
                        var r = t[n];
                        i +=
                          0 == n
                            ? ''.concat(r, '=QUERY_PARAM(').concat(r, ')')
                            : '&'.concat(r, '=QUERY_PARAM(').concat(r, ')');
                      }
                      return i;
                    })(r);
                  })(this.ampdoc.win, t)),
                  lr(t).maybeExpandLink(t, i);
              }),
              (i.po = function (t, i, n) {
                if (!this.Js) return !1;
                var r = oi(i),
                  e = i.href,
                  s = n.protocol;
                if ('ftp:' == s)
                  return Eh(r, e, '_blank'), t.preventDefault(), !0;
                var u = /^(https?|mailto):$/.test(s);
                return !(
                  !this.Ys ||
                  u ||
                  (Eh(r, e, '_top'), t.preventDefault(), 0)
                );
              }),
              (i.mo = function (t, i, n) {
                return !(
                  !i.hasAttribute('rel') ||
                  !i
                    .getAttribute('rel')
                    .split(' ')
                    .map(function (t) {
                      return t.trim();
                    })
                    .includes('amphtml') ||
                  !this.navigateToAmpUrl(n.href, '<a rel=amphtml>') ||
                  (t.preventDefault(), 0)
                );
              }),
              (i.wo = function (t, i, n, r) {
                var e = _h(n),
                  s = _h(r);
                if (n.hash && e == s) this.Ao(t, n, r);
                else {
                  var u = (i.getAttribute('target') || '').toLowerCase();
                  (this.Xs || this.Qs) &&
                    '_top' != u &&
                    '_blank' != u &&
                    ((u = '_blank'), i.setAttribute('target', u));
                  var o = this.ampdoc.win,
                    h = or(o),
                    a = mr(i);
                  r.search &&
                    h.isSafari() &&
                    h.getMajorVersion() >= 13 &&
                    a.isProxyOrigin() &&
                    a.isEmbedded() &&
                    this.xo(o, r, u),
                    this.viewerInterceptsNavigation(e, 'intercept_click') &&
                      t.preventDefault();
                }
              }),
              (i.xo = function (t, i, n) {
                Qt().info(
                  Ph,
                  'Removing iframe query string before navigation:',
                  i.search,
                );
                var r = i.href,
                  e = ''.concat(i.origin).concat(i.pathname).concat(i.hash);
                t.history.replaceState(null, '', e);
                var s = function () {
                  var i = t.location.href;
                  i == e
                    ? (Qt().info(
                        Ph,
                        'Restored iframe URL with query string:',
                        r,
                      ),
                      t.history.replaceState(null, '', r))
                    : Qt().error(Ph, 'Unexpected iframe URL change:', i, e);
                };
                '_blank' === n
                  ? t.setTimeout(s, 0)
                  : t.addEventListener('pageshow', function i(n) {
                      n.persisted &&
                        (s(), t.removeEventListener('pageshow', i));
                    });
              }),
              (i.Ao = function (t, i, n) {
                var r = this;
                if ((t.preventDefault(), !this.Xs)) {
                  var e = i.hash.slice(1),
                    s = null;
                  if (e) {
                    var u = vi(e);
                    s =
                      this.Ws.getElementById(e) ||
                      this.Ws.querySelector('a[name="'.concat(u, '"]'));
                  }
                  i.hash != n.hash
                    ? this.Cs.replaceStateForTarget(i.hash).then(function () {
                        r.Eo(s, e);
                      })
                    : this.Eo(s, e);
                }
              }),
              (i.registerAnchorMutator = function (t, i) {
                this.uo.enqueue(t, i);
              }),
              (i.registerNavigateToMutator = function (t, i) {
                this.ho.enqueue(t, i);
              }),
              (i.Eo = function (t, i) {
                var n = this;
                t
                  ? (this.Ls.scrollIntoView(t),
                    fr(this.ampdoc.win).delay(function () {
                      return n.Ls.scrollIntoView(t);
                    }, 1))
                  : Qt().warn(
                      Ph,
                      'failed to find element with id='
                        .concat(i, ' or a[name=')
                        .concat(i, ']'),
                    );
              }),
              (i.do = function (t) {
                return dr(this.Zs).parse(t);
              }),
              (i.bo = function () {
                return this.do('');
              }),
              (i.viewerInterceptsNavigation = function (t, i) {
                var n = this.Ae.hasCapability('interceptNavigation'),
                  r =
                    this.ampdoc.isSingleDoc() &&
                    this.ampdoc
                      .getRootNode()
                      .documentElement.hasAttribute(
                        'allow-navigation-interception',
                      );
                return !(
                  !n ||
                  !r ||
                  (!this.eo && !this.so) ||
                  (this.Ae.sendMessage('navigateTo', {
                    url: t,
                    requestedBy: i,
                  }),
                  0)
                );
              }),
              t
            );
          })();
        function Rh(t, i) {
          var n = yi(i.target, 'A');
          if (n && n.href) {
            var r = n.getAttribute(Mh) || n.getAttribute('href');
            if (r) {
              var e = {
                  CLICK_X: function () {
                    return i.pageX;
                  },
                  CLICK_Y: function () {
                    return i.pageY;
                  },
                },
                s = lr(n).expandUrlSync(r, e, { CLICK_X: !0, CLICK_Y: !0 });
              s != r &&
                (n.getAttribute(Mh) || n.setAttribute(Mh, r),
                n.setAttribute('href', s));
            }
          }
        }
        function _h(t) {
          return ''.concat(t.origin).concat(t.pathname).concat(t.search);
        }
        function kh(t) {
          return V(t) ? t : [t];
        }
        var Ch = (function () {
            function t(t) {
              this.mi = ar(t);
            }
            var i = t.prototype;
            return (
              (i.setOwner = function (t, i) {
                Vs.setOwner(t, i);
              }),
              (i.schedulePreload = function (t, i) {
                this.Oo(this.mi.getResourceForElement(t), !1, kh(i));
              }),
              (i.scheduleLayout = function (t, i) {
                this.Oo(this.mi.getResourceForElement(t), !0, kh(i));
              }),
              (i.schedulePause = function (t, i) {
                var n = this.mi.getResourceForElement(t);
                (i = kh(i)),
                  this.To(n, i, function (t) {
                    t.pause();
                  });
              }),
              (i.scheduleResume = function (t, i) {
                var n = this.mi.getResourceForElement(t);
                (i = kh(i)),
                  this.To(n, i, function (t) {
                    t.resume();
                  });
              }),
              (i.scheduleUnlayout = function (t, i) {
                var n = this.mi.getResourceForElement(t);
                (i = kh(i)),
                  this.To(n, i, function (t) {
                    t.unlayout();
                  });
              }),
              (i.requireLayout = function (t, i) {
                var n = [];
                return (
                  this.Po(t, function (t) {
                    n.push(t.element.ensureLoaded());
                  }),
                  Promise.all(n)
                );
              }),
              (i.To = function (t, i, n) {
                for (var r, e = o(i, !0); !(r = e()).done; ) {
                  var s = r.value;
                  Zt(t.element.contains(s)), this.Po(s, n);
                }
              }),
              (i.Po = function (t, i) {
                if (t.classList.contains('i-amphtml-element')) {
                  i(this.mi.getResourceForElement(t));
                  var n = t.getPlaceholder();
                  n && this.Po(n, i);
                } else
                  for (
                    var r = t.getElementsByClassName('i-amphtml-element'),
                      e = [],
                      s = 0;
                    s < r.length;
                    s++
                  ) {
                    for (var u = r[s], o = !1, h = 0; h < e.length; h++)
                      if (e[h].contains(u)) {
                        o = !0;
                        break;
                      }
                    o || (e.push(u), i(this.mi.getResourceForElement(u)));
                  }
              }),
              (i.Oo = function (t, i, n) {
                this.To(t, n, function (i) {
                  i.element.ensureLoaded(t.getLayoutPriority());
                });
              }),
              t
            );
          })(),
          Nh = (function () {
            function t(t) {
              (this.Io = t.navigator), (this.t = t);
            }
            var i = t.prototype;
            return (
              (i.isAndroid = function () {
                return /Android/i.test(this.Io.userAgent);
              }),
              (i.isIos = function () {
                return /iPhone|iPad|iPod/i.test(this.Io.userAgent);
              }),
              (i.isSafari = function () {
                return (
                  /Safari/i.test(this.Io.userAgent) &&
                  !this.isChrome() &&
                  !this.isEdge() &&
                  !this.isFirefox() &&
                  !this.isOpera()
                );
              }),
              (i.isChrome = function () {
                return (
                  /Chrome|CriOS/i.test(this.Io.userAgent) &&
                  !this.isEdge() &&
                  !this.isOpera()
                );
              }),
              (i.isFirefox = function () {
                return (
                  /Firefox|FxiOS/i.test(this.Io.userAgent) && !this.isEdge()
                );
              }),
              (i.isOpera = function () {
                return /OPR\/|Opera|OPiOS/i.test(this.Io.userAgent);
              }),
              (i.isEdge = function () {
                return /Edge/i.test(this.Io.userAgent);
              }),
              (i.isWebKit = function () {
                return /WebKit/i.test(this.Io.userAgent) && !this.isEdge();
              }),
              (i.isWindows = function () {
                return /Windows/i.test(this.Io.userAgent);
              }),
              (i.isStandalone = function () {
                return (
                  (this.isIos() && this.Io.standalone) ||
                  (this.isChrome() &&
                    this.t.matchMedia('(display-mode: standalone)').matches)
                );
              }),
              (i.isBot = function () {
                return /bot/i.test(this.Io.userAgent);
              }),
              (i.getMajorVersion = function () {
                return this.isSafari()
                  ? this.isIos()
                    ? this.getIosMajorVersion() || 0
                    : this.So(/\sVersion\/(\d+)/, 1)
                  : this.isChrome()
                    ? this.So(/(Chrome|CriOS)\/(\d+)/, 2)
                    : this.isFirefox()
                      ? this.So(/(Firefox|FxiOS)\/(\d+)/, 2)
                      : this.isOpera()
                        ? this.So(/(OPR|Opera|OPiOS)\/(\d+)/, 2)
                        : this.isEdge()
                          ? this.So(/Edge\/(\d+)/, 1)
                          : 0;
              }),
              (i.So = function (t, i) {
                if (!this.Io.userAgent) return 0;
                var n = this.Io.userAgent.match(t);
                return !n || i >= n.length ? 0 : parseInt(n[i], 10);
              }),
              (i.getIosVersionString = function () {
                var t, i, n;
                return (
                  (this.isIos() &&
                    (null === (t = this.Io.userAgent) ||
                    void 0 === t ||
                    null ===
                      (i = t.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/)) ||
                    void 0 === i ||
                    null === (n = i[1]) ||
                    void 0 === n
                      ? void 0
                      : n.replace(/_/g, '.'))) ||
                  ''
                );
              }),
              (i.getIosMajorVersion = function () {
                var t = this.getIosVersionString();
                return '' == t ? null : Number(t.split('.')[0]);
              }),
              t
            );
          })();
        function Dh(t) {
          En(t, 'platform', Nh);
        }
        var jh = (function () {
            function t(t) {
              (this.yi = t), (this.Mo = A());
            }
            var i = t.prototype;
            return (
              (i.addTransition = function (t, i, n) {
                var r = this.Ro(t, i);
                et(!this.Mo[r]), (this.Mo[r] = n);
              }),
              (i.setState = function (t) {
                var i = this.yi;
                this.yi = t;
                var n = this.Ro(i, t),
                  r = this.Mo[n];
                null == r || r();
              }),
              (i.Ro = function (t, i) {
                return ''.concat(t, '|').concat(i);
              }),
              t
            );
          })(),
          Uh = (function () {
            function t() {
              (this.kn = []), (this._o = {}), (this.ko = 0), (this.No = 0);
            }
            var i = t.prototype;
            return (
              (i.getSize = function () {
                return this.kn.length;
              }),
              (i.getLastEnqueueTime = function () {
                return this.ko;
              }),
              (i.getLastDequeueTime = function () {
                return this.No;
              }),
              (i.getTaskById = function (t) {
                return this._o[t] || null;
              }),
              (i.enqueue = function (t) {
                Zt(!this._o[t.id]),
                  this.kn.push(t),
                  (this._o[t.id] = t),
                  (this.ko = Date.now());
              }),
              (i.dequeue = function (t) {
                var i = this._o[t.id];
                return (
                  !!this.removeAtIndex(t, this.kn.indexOf(i)) &&
                  ((this.No = Date.now()), !0)
                );
              }),
              (i.peek = function (t) {
                for (var i = 1e6, n = null, r = 0; r < this.kn.length; r++) {
                  var e = this.kn[r],
                    s = t(e);
                  s < i && ((i = s), (n = e));
                }
                return n;
              }),
              (i.forEach = function (t) {
                this.kn.forEach(t);
              }),
              (i.removeAtIndex = function (t, i) {
                var n = this._o[t.id];
                return !(
                  !n ||
                  this.kn[i] != n ||
                  (this.kn.splice(i, 1), delete this._o[t.id], 0)
                );
              }),
              (i.purge = function (t) {
                for (var i = this.kn.length; i--; )
                  t(this.kn[i]) && this.removeAtIndex(this.kn[i], i);
              }),
              t
            );
          })(),
          Lh = 'Resources',
          zh = (function () {
            function t(t) {
              var i = this;
              (this.ampdoc = t),
                (this.win = t.win),
                (this.Ae = mr(t)),
                (this.Co = this.Ae.isRuntimeOn()),
                (this.jo = !1),
                (this.Do = 0),
                (this.mi = []),
                (this.Uo = 0),
                (this.zo = 0),
                (this.Lo = 0),
                (this.Ho = this.ampdoc.isVisible()),
                (this.Go = !1),
                (this.Vo = !0),
                (this.Fo = !1),
                (this.Bo = -1),
                (this.qo = !0),
                (this.$o = -1),
                (this.Wo = 0),
                (this.Ko = 0),
                (this.Zr = new Uu(this.win, function () {
                  return i.doPass();
                })),
                (this.Yo = new Uu(this.win, function () {
                  (i.qo = !0), i.schedulePass();
                })),
                (this.Jo = new Uh()),
                (this.Ji = new Uh()),
                (this.Xo = this.Qo.bind(this)),
                (this.Zo = []),
                (this.tu = []),
                (this.iu = !1),
                (this.Ls = gr(this.ampdoc)),
                (this.Hs = pr(this.win)),
                (this.Gs = new ph(this.win, 6e4)),
                (this.nu = !1),
                (this.ru = 0),
                (this.eu = !1),
                (this.su = []),
                (this.ou = []),
                (this.uu = new a()),
                (this.hu = new jh(this.ampdoc.getVisibilityState())),
                this.Ls.onChanged(function (t) {
                  (i.Wo = i.win.Date.now()),
                    (i.Ko = t.velocity),
                    t.relayoutAll && ((i.qo = !0), (i.eu = !0)),
                    i.schedulePass();
                }),
                this.Ls.onScroll(function () {
                  i.Wo = i.win.Date.now();
                }),
                this.ampdoc.onVisibilityChanged(function () {
                  -1 == i.Bo &&
                    i.ampdoc.isVisible() &&
                    (i.Bo = i.win.Date.now()),
                    i.schedulePass();
                }),
                this.Ae.onRuntimeState(function (t) {
                  Qt().fine(Lh, 'Runtime state:', t),
                    (i.Co = t),
                    i.schedulePass(1);
                }),
                Zs(this.ampdoc, function () {
                  i.au(i.hu), i.schedulePass(0);
                }),
                this.cu(),
                (this.fu = dt(
                  this.win,
                  function (t) {
                    return i.lu(t);
                  },
                  250,
                )),
                Je(this.win.document, 'scroll', this.fu, {
                  capture: !0,
                  passive: !0,
                });
            }
            var i = t.prototype;
            return (
              (i.cu = function () {
                var t = this;
                this.ampdoc.whenReady().then(function () {
                  (t.Go = !0),
                    t.vu(),
                    (t.tu = null),
                    (function (t) {
                      return On(t, 'input');
                    })(t.win).setupInputModeClasses(t.ampdoc);
                  var i = function () {
                    return t.Yo.schedule();
                  };
                  i(),
                    Promise.race([Ze(t.win), fr(t.win).promise(3100)]).then(i),
                    t.win.document.fonts &&
                      'loaded' != t.win.document.fonts.status &&
                      t.win.document.fonts.ready.then(i);
                });
              }),
              (i.get = function () {
                return this.mi.slice(0);
              }),
              (i.getAmpdoc = function () {
                return this.ampdoc;
              }),
              (i.getResourceForElement = function (t) {
                return Vs.forElement(t);
              }),
              (i.getResourceForElementOptional = function (t) {
                return Vs.forElementOptional(t);
              }),
              (i.getScrollDirection = function () {
                return Math.sign(this.Ko) || 1;
              }),
              (i.add = function (t) {
                this.Uo++, 1 == this.Uo && this.Ls.ensureReadyForElements();
                var i = Vs.forElementOptional(t);
                i && 0 != i.getState() && !t.reconstructWhenReparented()
                  ? (i.requestMeasure(),
                    Qt().fine(Lh, 'resource reused:', i.debugid))
                  : ((i = new Vs(++this.Do, t, this)),
                    Qt().fine(Lh, 'resource added:', i.debugid)),
                  this.mi.push(i),
                  this.Yo.schedule(1e3);
              }),
              (i.du = function () {
                return (
                  this.zo < 20 ||
                  this.ampdoc.getVisibilityState() == wr ||
                  this.ampdoc.hasBeenVisible()
                );
              }),
              (i.mu = function (t) {
                var i =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r = this.Co || this.jo;
                if (r) {
                  var e = this.ampdoc.getVisibilityState(),
                    s = e == yr && !t.prerenderAllowed(),
                    u = e == wr && !t.previewAllowed();
                  s ||
                    u ||
                    (this.Go
                      ? this.pu(t, n)
                      : t.isBuilt() ||
                        t.isBuilding() ||
                        (i && this.tu.includes(t)) ||
                        (this.tu.push(t), this.vu()));
                }
              }),
              (i.vu = function () {
                if (!this.iu)
                  try {
                    (this.iu = !0), this.bu();
                  } finally {
                    this.iu = !1;
                  }
              }),
              (i.bu = function () {
                for (var t = 0; t < this.tu.length; t++) {
                  var i = this.tu[t];
                  (this.Go || ki(i.element, this.ampdoc.getRootNode())) &&
                    (this.tu.splice(t--, 1), this.pu(i));
                }
              }),
              (i.pu = function (t) {
                var i = this,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                if (!n && !this.du() && !t.isBuildRenderBlocking()) return null;
                var r = t.build();
                return r
                  ? (Qt().fine(Lh, 'build resource:', t.debugid),
                    this.zo++,
                    this.Lo++,
                    r.then(
                      function () {
                        return i.schedulePass();
                      },
                      function (n) {
                        if ((i.gu(t), !zs(n))) throw n;
                      },
                    ))
                  : null;
              }),
              (i.remove = function (t) {
                var i = Vs.forElementOptional(t);
                i && this.gu(i);
              }),
              (i.gu = function (t) {
                var i = this.mi.indexOf(t);
                -1 != i && this.mi.splice(i, 1),
                  t.isBuilt() && t.pauseOnRemove(),
                  3 === t.getState() && t.layoutCanceled(),
                  this.yu(t, !0),
                  Qt().fine(Lh, 'resource removed:', t.debugid);
              }),
              (i.upgraded = function (t) {
                var i = Vs.forElement(t);
                this.mu(i), Qt().fine(Lh, 'resource upgraded:', i.debugid);
              }),
              (i.updateLayoutPriority = function (t, i) {
                var n = Vs.forElement(t);
                n.updateLayoutPriority(i),
                  this.Ji.forEach(function (t) {
                    t.resource == n && (t.priority = i);
                  }),
                  this.schedulePass();
              }),
              (i.schedulePass = function (t) {
                return this.Zr.schedule(t);
              }),
              (i.updateOrEnqueueMutateTask = function (t, i) {
                for (var n = null, r = 0; r < this.Zo.length; r++)
                  if (this.Zo[r].resource == t) {
                    n = this.Zo[r];
                    break;
                  }
                n
                  ? ((n.newHeight = i.newHeight),
                    (n.newWidth = i.newWidth),
                    (n.marginChange = i.marginChange),
                    (n.event = i.event),
                    (n.force = i.force || n.force),
                    (n.callback = i.callback))
                  : this.Zo.push(i);
              }),
              (i.schedulePassVsync = function () {
                var t = this;
                this.nu ||
                  ((this.nu = !0),
                  this.Hs.mutate(function () {
                    return t.doPass();
                  }));
              }),
              (i.ampInitComplete = function () {
                (this.Fo = !0),
                  Qt().fine(Lh, 'ampInitComplete'),
                  this.schedulePass();
              }),
              (i.setRelayoutTop = function (t) {
                -1 == this.$o
                  ? (this.$o = t)
                  : (this.$o = Math.min(t, this.$o));
              }),
              (i.maybeHeightChanged = function () {
                this.eu = !0;
              }),
              (i.onNextPass = function (t) {
                this.su.push(t);
              }),
              (i.doPass = function () {
                var t = this;
                if (this.Co) {
                  if (
                    ((this.Ho = this.ampdoc.isVisible()),
                    (this.Lo = 0),
                    this.Go && this.Vo && this.Fo)
                  ) {
                    var i;
                    this.Vo = !1;
                    var n = this.win.document,
                      r = ir(this.ampdoc);
                    this.Ae.sendMessage(
                      'documentLoaded',
                      {
                        title: n.title,
                        sourceUrl: Ms(this.ampdoc.getUrl()),
                        isStory:
                          'AMP-STORY' ===
                          (null === (i = n.body.firstElementChild) ||
                          void 0 === i
                            ? void 0
                            : i.tagName),
                        serverLayout:
                          n.documentElement.hasAttribute('i-amphtml-element'),
                        linkRels: r.linkRels,
                        metaTags: { viewport: r.viewport },
                        viewport: r.viewport,
                      },
                      !0,
                    ),
                      (this.ru = this.Ls.getContentHeight()),
                      this.Ae.sendMessage(
                        'documentHeight',
                        { height: this.ru },
                        !0,
                      ),
                      Qt().fine(Lh, 'document height on load: %s', this.ru);
                  }
                  !this.Vo &&
                    this.wu &&
                    this.mi.every(function (t) {
                      return t.getState() != Vs.NOT_BUILT || t.element.R1();
                    }) &&
                    ((this.wu = !1), (this.eu = !0));
                  var e = this.Ls.getSize();
                  Qt().fine(
                    Lh,
                    'PASS: visible=',
                    this.Ho,
                    ', relayoutAll=',
                    this.qo,
                    ', relayoutTop=',
                    this.$o,
                    ', viewportSize=',
                    e.width,
                    e.height,
                  ),
                    this.Zr.cancel(),
                    (this.nu = !1),
                    this.hu.setState(this.ampdoc.getVisibilityState()),
                    this.Au(),
                    this.eu &&
                      ((this.eu = !1),
                      this.Hs.measure(function () {
                        var i = t.Ls.getContentHeight();
                        i != t.ru &&
                          (t.Ae.sendMessage(
                            'documentHeight',
                            { height: i },
                            !0,
                          ),
                          (t.ru = i),
                          Qt().fine(Lh, 'document height changed: %s', t.ru),
                          t.Ls.contentHeightChanged());
                      }));
                  for (var s = 0; s < this.su.length; s++) (0, this.su[s])();
                  this.su.length = 0;
                } else Qt().fine(Lh, 'runtime is off');
              }),
              (i.Au = function () {
                this.Go &&
                  this.Fo &&
                  !this.ampdoc.signals().get(Fs) &&
                  (this.ampdoc.signals().signal(Fs),
                  Qt().fine(Lh, 'signal: ready-scan'));
              }),
              (i.xu = function () {
                return this.Zo.length > 0;
              }),
              (i.Eu = function () {
                var t = this,
                  i = this.win.Date.now(),
                  n = this.Ls.getRect(),
                  r = n.height / 10,
                  e = n.height / 10,
                  s =
                    (Math.abs(this.Ko) < 0.01 && i - this.Wo > 500) ||
                    i - this.Wo > 1e3;
                if (this.Zo.length > 0) {
                  Qt().fine(Lh, 'change size requests:', this.Zo.length);
                  var u = this.Zo;
                  this.Zo = [];
                  for (
                    var o = -1,
                      h = [],
                      a = 0,
                      c = function (i) {
                        var c = u[i],
                          f = c,
                          l = f.event,
                          v = f.resource,
                          d = v.getLayoutBox(),
                          m = 0,
                          p = 0,
                          g = 0,
                          b = 0,
                          y = d.bottom,
                          w = d.top,
                          A = void 0;
                        if (c.marginChange) {
                          A = c.marginChange.newMargins;
                          var x = c.marginChange.currentMargins;
                          null != A.top && (m = A.top - x.top),
                            null != A.bottom && (p = A.bottom - x.bottom),
                            null != A.left && (g = A.left - x.left),
                            null != A.right && (b = A.right - x.right),
                            m && (w = d.top - x.top),
                            p && (y = d.bottom + x.bottom);
                        }
                        var E = c.newHeight - d.height,
                          P = c.newWidth - d.width,
                          O = !1;
                        if (
                          0 == E &&
                          0 == m &&
                          0 == p &&
                          0 == P &&
                          0 == g &&
                          0 == b
                        );
                        else if (c.force || !t.Ho) O = !0;
                        else if (
                          t.Gs.hasDescendantsOf(v.element) ||
                          (l &&
                            l.userActivation &&
                            l.userActivation.hasBeenActive)
                        )
                          O = !0;
                        else if (
                          w >= n.bottom - e ||
                          (0 == m && d.bottom + Math.min(E, 0) >= n.bottom - e)
                        )
                          O = !0;
                        else {
                          if (n.top > 1 && y <= n.top + r)
                            return (
                              (E < 0 && n.top + a < -E) ||
                                (s ? ((a += E), h.push(c)) : t.Zo.push(c)),
                              'continue'
                            );
                          t.Ou(v, d)
                            ? (O = !0)
                            : E < 0 ||
                              m < 0 ||
                              p < 0 ||
                              (c.newHeight == d.height
                                ? t.Hs.run(
                                    {
                                      measure: function (t) {
                                        t.resize = !1;
                                        var i = v.element.parentElement;
                                        if (i) {
                                          for (
                                            var n =
                                                (i.getLayoutSize &&
                                                  i.getLayoutSize().width) ||
                                                i.offsetWidth,
                                              r = P,
                                              e = 0;
                                            e < i.childElementCount;
                                            e++
                                          )
                                            if (
                                              (r += i.children[e].offsetWidth) >
                                              n
                                            )
                                              return;
                                          t.resize = !0;
                                        }
                                      },
                                      mutate: function (t) {
                                        t.resize &&
                                          c.resource.changeSize(
                                            c.newHeight,
                                            c.newWidth,
                                            A,
                                          ),
                                          c.resource.overflowCallback(
                                            !t.resize,
                                            c.newHeight,
                                            c.newWidth,
                                            A,
                                          );
                                      },
                                    },
                                    {},
                                  )
                                : c.resource.overflowCallback(
                                    !0,
                                    c.newHeight,
                                    c.newWidth,
                                    A,
                                  ));
                        }
                        O &&
                          (d.top >= 0 &&
                            (o = -1 == o ? d.top : Math.min(o, d.top)),
                          c.resource.changeSize(c.newHeight, c.newWidth, A),
                          c.resource.overflowCallback(
                            !1,
                            c.newHeight,
                            c.newWidth,
                            A,
                          ),
                          (t.eu = !0)),
                          c.callback && c.callback(O);
                      },
                      f = 0;
                    f < u.length;
                    f++
                  )
                    c(f);
                  -1 != o && this.setRelayoutTop(o),
                    h.length > 0 &&
                      this.Hs.run(
                        {
                          measure: function (i) {
                            (i.scrollHeight = t.Ls.getScrollHeight()),
                              (i.scrollTop = t.Ls.getScrollTop());
                          },
                          mutate: function (i) {
                            var n = -1;
                            h.forEach(function (t) {
                              var i = t.resource.getLayoutBox();
                              (n = -1 == n ? i.top : Math.min(n, i.top)),
                                t.resource.changeSize(
                                  t.newHeight,
                                  t.newWidth,
                                  t.marginChange
                                    ? t.marginChange.newMargins
                                    : void 0,
                                ),
                                t.callback && t.callback(!0);
                            }),
                              -1 != n && t.setRelayoutTop(n);
                            var r = t.Ls.getScrollHeight();
                            r != i.scrollHeight &&
                              t.Ls.setScrollTop(
                                i.scrollTop + (r - i.scrollHeight),
                              ),
                              (t.eu = !0);
                          },
                        },
                        {},
                      );
                }
              }),
              (i.Ou = function (t, i, n) {
                var r = this.Ls.getContentHeight(),
                  e = Math.max(0.85 * r, r - 1e3),
                  s = i || t.getLayoutBox(),
                  u = n || t.getInitialLayoutBox();
                return s.bottom >= e || u.bottom >= e;
              }),
              (i.Tu = function (t) {
                var i = t.isDisplayed();
                return t.measure(), !(i && !t.isDisplayed());
              }),
              (i.Pu = function (t) {
                var i = this;
                t.length &&
                  this.Hs.mutate(function () {
                    t.forEach(function (t) {
                      t.unload(), i.yu(t);
                    }),
                      Qt().fine(Lh, 'unload:', t);
                  });
              }),
              (i.Iu = function () {
                var t = this.win.Date.now(),
                  i = this.ou,
                  n = this.qo,
                  r = this.$o;
                (this.qo = !1), (this.$o = -1);
                for (var e, s = 0, u = 0, o = 0; o < this.mi.length; o++) {
                  var h = this.mi[o];
                  0 != h.getState() ||
                    h.isBuilding() ||
                    h.element.R1() ||
                    this.mu(h, !0),
                    (!n && h.hasBeenMeasured() && 1 != h.getState()) || s++,
                    h.isMeasureRequested() && u++;
                }
                if (s > 0 || u > 0 || n || -1 != r || i.length > 0)
                  for (var a = 0; a < this.mi.length; a++) {
                    var c = this.mi[a];
                    if (
                      !(
                        (c.hasOwner() && !c.isMeasureRequested()) ||
                        c.element.R1()
                      )
                    ) {
                      var f =
                        n ||
                        1 == c.getState() ||
                        !c.hasBeenMeasured() ||
                        c.isMeasureRequested() ||
                        (-1 != r && c.getLayoutBox().bottom >= r);
                      if (!f)
                        for (var l = 0; l < i.length; l++)
                          if (i[l].contains(c.element)) {
                            f = !0;
                            break;
                          }
                      f && (this.Tu(c) || (e || (e = []), e.push(c)));
                    }
                  }
                (i.length = 0), e && this.Pu(e);
                var v,
                  d = this.Ls.getRect();
                v = this.Ho ? Hi(d, 0.25, 2) : d;
                for (
                  var m = this.Ho ? Hi(d, 0.25, 0.25) : d, p = 0;
                  p < this.mi.length;
                  p++
                ) {
                  var g = this.mi[p];
                  if (0 != g.getState() && !g.hasOwner() && !g.element.R1()) {
                    var b = this.Ho && g.isDisplayed() && g.overlaps(m);
                    g.setInViewport(b);
                  }
                }
                if (v)
                  for (var y = 0; y < this.mi.length; y++) {
                    var w = this.mi[y];
                    w.isBuilt() ||
                      w.isBuilding() ||
                      w.hasOwner() ||
                      w.element.R1() ||
                      !w.hasBeenMeasured() ||
                      !w.isDisplayed() ||
                      !w.overlaps(v) ||
                      this.mu(w, !0, !0),
                      2 != w.getState() ||
                        w.hasOwner() ||
                        (w.isDisplayed() &&
                          w.overlaps(v) &&
                          this.scheduleLayoutOrPreload(w, !0));
                  }
                if (this.Ho && this.Su(t)) {
                  for (var A = 0, x = 0; x < this.mi.length && A < 4; x++) {
                    var E = this.mi[x];
                    2 == E.getState() &&
                      !E.hasOwner() &&
                      !E.element.R1() &&
                      E.isDisplayed() &&
                      E.idleRenderOutsideViewport() &&
                      (Qt().fine(
                        Lh,
                        'idleRenderOutsideViewport layout:',
                        E.debugid,
                      ),
                      this.scheduleLayoutOrPreload(E, !1),
                      A++);
                  }
                  for (var P = 0; P < this.mi.length && A < 4; P++) {
                    var O = this.mi[P];
                    2 != O.getState() ||
                      O.hasOwner() ||
                      O.element.R1() ||
                      !O.isDisplayed() ||
                      (Qt().fine(Lh, 'idle layout:', O.debugid),
                      this.scheduleLayoutOrPreload(O, !1),
                      A++);
                  }
                }
              }),
              (i.Su = function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Date.now(),
                  i = this.Jo.getLastDequeueTime();
                return (
                  0 == this.Jo.getSize() &&
                  0 == this.Ji.getSize() &&
                  t > i + 5e3 &&
                  i > 0
                );
              }),
              (i.Mu = function () {
                for (
                  var t = this.win.Date.now(),
                    i = -1,
                    n = this.Ji.peek(this.Xo);
                  n &&
                  ((i = this.Ru(n)),
                  Qt().fine(
                    Lh,
                    'peek from queue:',
                    n.id,
                    'sched at',
                    n.scheduleTime,
                    'score',
                    this.Xo(n),
                    'timeout',
                    i,
                  ),
                  !(i > 16));

                ) {
                  this.Ji.dequeue(n);
                  var r = this.Jo.getTaskById(n.id);
                  if (r) {
                    var e = this._u.bind(this, n);
                    r.promise.then(e, e);
                  } else {
                    var s = n.resource;
                    s.measure(),
                      this.ku(s, n.forceOutsideViewport)
                        ? ((n.promise = n.callback()),
                          (n.startTime = t),
                          Qt().fine(Lh, 'exec:', n.id, 'at', n.startTime),
                          this.Jo.enqueue(n),
                          n.promise
                            .then(
                              this.Nu.bind(this, n, !0),
                              this.Nu.bind(this, n, !1),
                            )
                            .catch(Us))
                        : (Qt().fine(Lh, 'cancelled', n.id),
                          s.layoutCanceled());
                  }
                  (n = this.Ji.peek(this.Xo)), (i = -1);
                }
                if (
                  (Qt().fine(
                    Lh,
                    'queue size:',
                    this.Ji.getSize(),
                    'exec size:',
                    this.Jo.getSize(),
                  ),
                  i >= 0)
                )
                  return i;
                var u = 2 * (t - this.Jo.getLastDequeueTime());
                return Math.max(Math.min(3e4, u), 5e3);
              }),
              (i.Qo = function (t) {
                var i = this.Ls.getRect(),
                  n = t.resource.getLayoutBox(),
                  r = Math.floor((n.top - i.top) / i.height);
                return (
                  Math.sign(r) != this.getScrollDirection() && (r *= 2),
                  (r = Math.abs(r)),
                  10 * t.priority + r
                );
              }),
              (i.Ru = function (t) {
                var i = this.win.Date.now();
                if (0 == this.Jo.getSize()) {
                  if (-1 === this.Bo) return 0;
                  var n = 1e3 * t.priority;
                  return Math.max(n - (i - this.Bo), 0);
                }
                var r = 0;
                return (
                  this.Jo.forEach(function (n) {
                    var e = Math.max(1e3 * (t.priority - n.priority), 0);
                    r = Math.max(r, e - (i - n.startTime));
                  }),
                  r
                );
              }),
              (i._u = function (t) {
                this.Ji.getTaskById(t.id) || this.Ji.enqueue(t);
              }),
              (i.Nu = function (t, i, n) {
                if ((this.Jo.dequeue(t), this.schedulePass(1e3), !i))
                  return (
                    Qt().info(Lh, 'task failed:', t.id, t.resource.debugid, n),
                    Promise.reject(n)
                  );
              }),
              (i.ku = function (t, i) {
                if (0 == t.getState() || !t.isDisplayed()) return !1;
                var n = this.ampdoc.getVisibilityState(),
                  r = n == yr && t.prerenderAllowed(),
                  e = n == wr && t.previewAllowed();
                return (
                  !!(this.Ho || r || e) &&
                  !!(
                    i ||
                    t.isInViewport() ||
                    t.renderOutsideViewport() ||
                    t.idleRenderOutsideViewport()
                  )
                );
              }),
              (i.scheduleLayoutOrPreload = function (t, i, n, r) {
                if (!t.element.R1()) {
                  var e = 0 != t.getState(),
                    s = t.isDisplayed();
                  (e && s) || Zt(!1);
                  var u = r || !1;
                  this.ku(t, u) &&
                    (i
                      ? this.zn(t, 'L', 0, n || 0, u, t.startLayout.bind(t))
                      : this.zn(t, 'P', 2, n || 0, u, t.startLayout.bind(t)));
                }
              }),
              (i.zn = function (t, i, n, r, e, s) {
                var u = t.getTaskId(i),
                  o = {
                    id: u,
                    resource: t,
                    priority: Math.max(t.getLayoutPriority(), r) + n,
                    forceOutsideViewport: e,
                    callback: s,
                    scheduleTime: this.win.Date.now(),
                    startTime: 0,
                    promise: null,
                  };
                Qt().fine(Lh, 'schedule:', o.id, 'at', o.scheduleTime);
                var h = this.Ji.getTaskById(u);
                (!h || o.priority < h.priority) &&
                  (h && this.Ji.dequeue(h),
                  this.Ji.enqueue(o),
                  this.schedulePass(this.Ru(o))),
                  o.resource.layoutScheduled(o.scheduleTime);
              }),
              (i.whenFirstPass = function () {
                return this.uu.promise;
              }),
              (i.au = function (t) {
                var i = this,
                  n = xr,
                  r = Pr,
                  e = Er,
                  s = yr,
                  u = wr,
                  o = Ar,
                  h = function () {
                    var t = i.Ls.getSize();
                    if (t.height > 0 && t.width > 0) {
                      i.xu() && i.Eu(), i.Iu();
                      var n = i.Mu();
                      i.xu() && (n = Math.min(n, 500)),
                        i.Ho
                          ? i.schedulePass(n)
                            ? Qt().fine(Lh, 'next pass:', n)
                            : Qt().fine(Lh, 'pass already scheduled')
                          : Qt().fine(
                              Lh,
                              'document is not visible: no scheduling',
                            ),
                        i.uu.resolve();
                    }
                  },
                  a = function () {},
                  c = function () {
                    i.mi.forEach(function (t) {
                      return t.pause();
                    });
                  },
                  f = function () {
                    i.mi.forEach(function (t) {
                      t.unload(), i.yu(t);
                    }),
                      i.Cu();
                  },
                  l = function () {
                    i.mi.forEach(function (t) {
                      return t.resume();
                    }),
                      h();
                  };
                t.addTransition(s, s, h),
                  t.addTransition(s, u, h),
                  t.addTransition(s, o, h),
                  t.addTransition(s, n, h),
                  t.addTransition(s, r, h),
                  t.addTransition(s, e, h),
                  t.addTransition(u, u, h),
                  t.addTransition(u, o, h),
                  t.addTransition(u, n, h),
                  t.addTransition(u, r, h),
                  t.addTransition(u, e, h),
                  t.addTransition(o, o, h),
                  t.addTransition(o, n, h),
                  t.addTransition(o, r, f),
                  t.addTransition(o, e, c),
                  t.addTransition(n, o, h),
                  t.addTransition(n, n, h),
                  t.addTransition(n, r, f),
                  t.addTransition(n, e, c),
                  t.addTransition(r, o, l),
                  t.addTransition(r, n, l),
                  t.addTransition(r, r, a),
                  t.addTransition(r, e, h),
                  t.addTransition(e, o, l),
                  t.addTransition(e, n, h),
                  t.addTransition(e, r, f),
                  t.addTransition(e, e, a);
              }),
              (i.Cu = function () {
                try {
                  this.win.getSelection().removeAllRanges();
                } catch (t) {}
              }),
              (i.yu = function (t, i) {
                if (
                  ((1 != t.getState() && 2 != t.getState()) ||
                    (this.Ji.purge(function (i) {
                      return i.resource == t;
                    }),
                    this.Jo.purge(function (i) {
                      return i.resource == t;
                    }),
                    B(this.Zo, function (i) {
                      return i.resource === t;
                    })),
                  0 == t.getState() && i && this.tu)
                ) {
                  var n = this.tu.indexOf(t);
                  -1 != n && this.tu.splice(n, 1);
                }
              }),
              (i.lu = function (t) {
                var i = t.target;
                if (
                  i.nodeType === Node.ELEMENT_NODE &&
                  i !== this.Ls.getScrollingElement()
                ) {
                  var n = i;
                  this.ou.includes(n) ||
                    (this.ou.push(n), this.schedulePass(70));
                }
              }),
              t
            );
          })();
        function Hh(t) {
          return t.queryCommandSupported('copy');
        }
        function Gh(t) {
          return t.hasAttribute('hidden');
        }
        var Vh = 'STANDARD-ACTIONS',
          Fh = /^i-amphtml-/,
          Bh = (function () {
            function t(t) {
              this.ampdoc = t;
              var i = t.getHeadNode();
              (this.ju = sr(t)), (this.Ls = gr(t)), this.Du(Wn(i)), this.Uu();
            }
            var i = t.prototype;
            return (
              (i.Du = function (t) {
                t.addGlobalTarget('AMP', this.zu.bind(this)),
                  t.addGlobalMethodHandler('hide', this.Lu.bind(this)),
                  t.addGlobalMethodHandler('show', this.Hu.bind(this)),
                  t.addGlobalMethodHandler(
                    'toggleVisibility',
                    this.Gu.bind(this),
                  ),
                  t.addGlobalMethodHandler('scrollTo', this.Vu.bind(this)),
                  t.addGlobalMethodHandler('focus', this.Fu.bind(this)),
                  t.addGlobalMethodHandler('toggleClass', this.Bu.bind(this)),
                  t.addGlobalMethodHandler('copy', this.qu.bind(this)),
                  t.addGlobalMethodHandler('toggleChecked', this.$u.bind(this));
              }),
              (i.Uu = function () {
                this.Wu() &&
                  this.ampdoc.waitForBodyOpen().then(function (t) {
                    var i =
                      t.getAttribute('data-prefers-dark-mode-class') ||
                      'amp-dark-mode';
                    t.classList.add(i);
                  });
              }),
              (i.Wu = function () {
                var t, i;
                try {
                  var n = this.ampdoc.win.localStorage.getItem('amp-dark-mode');
                  if (n) return 'yes' === n;
                } catch (t) {}
                return null === (t = (i = this.ampdoc.win).matchMedia) ||
                  void 0 === t
                  ? void 0
                  : t.call(i, '(prefers-color-scheme: dark)').matches;
              }),
              (i.zu = function (t) {
                if (!t.satisfiesTrust(2)) return null;
                var i = t.args,
                  n = t.method,
                  r = t.node,
                  e = oi(r);
                switch (n) {
                  case 'pushState':
                  case 'setState':
                    var s =
                      r.nodeType === Node.DOCUMENT_NODE ? r.documentElement : r;
                    return Qn(s).then(function (i) {
                      return ti(i, 'AMP-BIND is not installed.'), i.invoke(t);
                    });
                  case 'navigateTo':
                    return this.Ku(t);
                  case 'closeOrNavigateTo':
                    return this.Yu(t);
                  case 'scrollTo':
                    return (
                      ti(i.id, 'AMP.scrollTo must provide element ID'),
                      (t.node = kn(r).getElementById(i.id)),
                      this.Vu(t)
                    );
                  case 'goBack':
                    return (
                      rr(this.ampdoc).goBack(!(!i || !0 !== i.navigate)), null
                    );
                  case 'print':
                    return e.print(), null;
                  case 'copy':
                    return this.qu(t);
                  case 'optoutOfCid':
                    return Zn(this.ampdoc)
                      .then(function (t) {
                        return t.optOut();
                      })
                      .catch(function (t) {
                        Qt().error(Vh, 'Failed to opt out of CID', t);
                      });
                  case 'toggleTheme':
                    return this.Ju(), null;
                }
                throw Jt().createError('Unknown AMP action ', n);
              }),
              (i.qu = function (t) {
                var i,
                  n = t.args,
                  r = oi(t.node),
                  e = 'copy-error';
                if ('AMP' === t.tagOrTarget) i = n.text.trim();
                else {
                  var s,
                    u = st(t.node);
                  i = (
                    null !== (s = u.value) && void 0 !== s ? s : u.textContent
                  ).trim();
                }
                var o,
                  h,
                  a,
                  c = function (t, i, n) {
                    var e = { data: { type: i } },
                      s = Ke(r, ''.concat(t), e);
                    Wn(n.caller).trigger(n.caller, t, s, 3);
                  };
                (null !== (h = (o = r.document).defaultView) &&
                  void 0 !== h &&
                  null !== (a = h.navigator) &&
                  void 0 !== a &&
                  a.clipboard) ||
                Hh(o)
                  ? (function (t, i, n, r) {
                      var e;
                      null !== (e = t.navigator) && void 0 !== e && e.clipboard
                        ? t.navigator.clipboard.writeText(i).then(n, r)
                        : Hh(t.document) &&
                            (function (t, i) {
                              var n,
                                r = !1,
                                e = t.document,
                                s = e.createElement('textarea');
                              Cr(s, {
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '50px',
                                height: '50px',
                                padding: 0,
                                border: 'none',
                                outline: 'none',
                                background: 'transparent',
                              }),
                                (s.value = i),
                                (s.readOnly = !0),
                                (s.contentEditable = 'true'),
                                e.body.appendChild(s),
                                null === (n = t.getSelection()) ||
                                  void 0 === n ||
                                  n.removeAllRanges(),
                                s.focus(),
                                s.setSelectionRange(0, i.length);
                              try {
                                r = e.execCommand('copy');
                              } catch (t) {}
                              return Mi(s), r;
                            })(t, i)
                          ? n()
                          : r();
                    })(
                      r,
                      i,
                      function () {
                        c('copy-success', 'success', t);
                      },
                      function () {
                        c(e, 'error', t);
                      },
                    )
                  : c(e, 'unsupported', t);
              }),
              (i.Ku = function (t) {
                var i = this,
                  n = t.args,
                  r = t.caller,
                  e = t.method,
                  s = oi(t.node),
                  u = h();
                return (
                  r.tagName.startsWith('AMP-') &&
                    (u = r.getImpl().then(function (t) {
                      'function' == typeof t.throwIfCannotNavigate &&
                        t.throwIfCannotNavigate();
                    })),
                  u.then(
                    function () {
                      var t;
                      ((t = i.ampdoc), In(t, 'navigation')).navigateTo(
                        s,
                        n.url,
                        'AMP.'.concat(e),
                        { target: n.target, opener: n.opener },
                      );
                    },
                    function (t) {
                      Jt().error(Vh, t);
                    },
                  )
                );
              }),
              (i.Ju = function () {
                var t = this;
                this.ampdoc.waitForBodyOpen().then(function (i) {
                  try {
                    var n =
                      i.getAttribute('data-prefers-dark-mode-class') ||
                      'amp-dark-mode';
                    t.Wu()
                      ? (i.classList.remove(n),
                        t.ampdoc.win.localStorage.setItem(
                          'amp-dark-mode',
                          'no',
                        ))
                      : (i.classList.add(n),
                        t.ampdoc.win.localStorage.setItem(
                          'amp-dark-mode',
                          'yes',
                        ));
                  } catch (t) {}
                });
              }),
              (i.Yu = function (t) {
                var i = oi(t.node),
                  n = i.parent != i,
                  r = !1;
                return (
                  i.opener &&
                    this.ampdoc.isSingleDoc() &&
                    !n &&
                    (i.close(), (r = i.closed)),
                  r ? h() : this.Ku(t)
                );
              }),
              (i.Vu = function (t) {
                var i = t.node,
                  n = t.args,
                  r = n && n.position,
                  e = n && n.duration;
                return (
                  r && !['top', 'bottom', 'center'].includes(r) && (r = void 0),
                  J(e) || (e = void 0),
                  this.Ls.animateScrollIntoView(i, r, e)
                );
              }),
              (i.Fu = function (t) {
                return Ci(t.node), null;
              }),
              (i.Lu = function (t) {
                var i = t.node;
                if (i.classList.contains('i-amphtml-element')) {
                  var n = i;
                  this.ju.mutateElement(
                    n,
                    function () {
                      return n.collapse();
                    },
                    !0,
                  );
                } else
                  this.ju.mutateElement(i, function () {
                    return Nr(i, !1);
                  });
                return null;
              }),
              (i.Hu = function (t) {
                var i = this,
                  n = t.node,
                  r = oi(n);
                if (n.classList.contains(fe(te)))
                  return (
                    Jt().warn(
                      Vh,
                      'Elements with layout=nodisplay cannot be dynamically shown.',
                      n,
                    ),
                    null
                  );
                this.ju.measureElement(function () {
                  'none' != jr(r, n).display ||
                    Gh(n) ||
                    Jt().warn(
                      Vh,
                      'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.',
                      n,
                    );
                });
                var e,
                  s = (e = n).hasAttribute('autofocus')
                    ? e
                    : e.querySelector('[autofocus]');
                return (
                  s && or(r).isIos()
                    ? (this.Xu(n, s), this.ju.mutateElement(n, function () {}))
                    : this.ju.mutateElement(n, function () {
                        i.Xu(n, s);
                      }),
                  null
                );
              }),
              (i.Xu = function (t, i) {
                t.classList.contains('i-amphtml-element')
                  ? t.expand()
                  : Nr(t, !0),
                  i && Ci(i);
              }),
              (i.Gu = function (t) {
                return Gh(t.node) ? this.Hu(t) : this.Lu(t);
              }),
              (i.Bu = function (t) {
                var i = t.node,
                  n = t.args,
                  r = Jt().assertString(
                    n.class,
                    "Argument 'class' must be a string.",
                  );
                return (
                  Fh.test(r) ||
                    this.ju.mutateElement(i, function () {
                      if (void 0 !== n.force) {
                        var t = Jt().assertBoolean(
                          n.force,
                          "Optional argument 'force' must be a boolean.",
                        );
                        i.classList.toggle(r, t);
                      } else i.classList.toggle(r);
                    }),
                  null
                );
              }),
              (i.$u = function (t) {
                var i = t.node,
                  n = t.args;
                return (
                  this.ju.mutateElement(i, function () {
                    if (void 0 !== (null == n ? void 0 : n.force)) {
                      var t = Jt().assertBoolean(
                        n.force,
                        "Optional argument 'force' must be a boolean.",
                      );
                      i.checked = t;
                    } else
                      !0 === i.checked ? (i.checked = !1) : (i.checked = !0);
                  }),
                  null
                );
              }),
              t
            );
          })(),
          qh = 'Storage',
          $h = (function () {
            function t(t, i, n) {
              (this.ampdoc = t),
                (this.Ae = i),
                (this.Ke = n),
                (this.Qu = n instanceof Kh),
                (this.i = Ss(this.ampdoc.win.location)),
                (this.Zu = null);
            }
            var i = t.prototype;
            return (
              (i.th = function () {
                return this.ih(), this;
              }),
              (i.get = function (t, i) {
                return this.nh().then(function (n) {
                  return n.get(t, i);
                });
              }),
              (i.set = function (t, i, n) {
                return Zt('boolean' == typeof i), this.setNonBoolean(t, i, n);
              }),
              (i.setNonBoolean = function (t, i, n) {
                return this.rh(function (r) {
                  return r.set(t, i, n);
                });
              }),
              (i.remove = function (t) {
                return this.rh(function (i) {
                  return i.remove(t);
                });
              }),
              (i.isViewerStorage = function () {
                return this.Qu;
              }),
              (i.nh = function () {
                return (
                  this.Zu ||
                    (this.Zu = this.Ke.loadBlob(this.i)
                      .then(function (t) {
                        return t ? at(atob(t)) : {};
                      })
                      .catch(function (t) {
                        return (
                          Qt().expectedError(qh, 'Failed to load store: ', t),
                          {}
                        );
                      })
                      .then(function (t) {
                        return new Wh(t);
                      })),
                  this.Zu
                );
              }),
              (i.rh = function (t) {
                var i = this;
                return this.nh()
                  .then(function (n) {
                    t(n);
                    var r = btoa(JSON.stringify(n.obj));
                    return i.Ke.saveBlob(i.i, r);
                  })
                  .then(this.eh.bind(this));
              }),
              (i.ih = function () {
                var t = this;
                this.Ae.onBroadcast(function (i) {
                  'amp-storage-reset' == i.type &&
                    i.origin == t.i &&
                    (Qt().fine(qh, 'Received reset message'), (t.Zu = null));
                });
              }),
              (i.eh = function () {
                Qt().fine(qh, 'Broadcasted reset message'),
                  this.Ae.broadcast({
                    type: 'amp-storage-reset',
                    origin: this.i,
                  });
              }),
              t
            );
          })(),
          Wh = (function () {
            function t(t, i) {
              (this.obj = E(t)),
                (this.sh = i || 8),
                (this.oh = this.obj.vv || Object.create(null)),
                this.obj.vv || (this.obj.vv = this.oh);
            }
            var i = t.prototype;
            return (
              (i.get = function (t, i) {
                var n = this.oh[t],
                  r = n ? n.t : void 0,
                  e = !i || null == r || r + i > Date.now();
                return n && e ? n.v : void 0;
              }),
              (i.set = function (t, i, n) {
                if (
                  (Zt('__proto__' != t && 'prototype' != t),
                  void 0 !== this.oh[t])
                ) {
                  var r = this.oh[t],
                    e = Date.now();
                  n && (e = r.t), (r.v = i), (r.t = e);
                } else this.oh[t] = { v: i, t: Date.now() };
                var s = Object.keys(this.oh);
                if (s.length > this.sh) {
                  for (var u = 1 / 0, o = null, h = 0; h < s.length; h++) {
                    var a = this.oh[s[h]];
                    a.t < u && ((o = s[h]), (u = a.t));
                  }
                  o && delete this.oh[o];
                }
              }),
              (i.remove = function (t) {
                delete this.oh[t];
              }),
              t
            );
          })(),
          Yh = (function () {
            function t(t) {
              if (((this.win = t), (this.uh = this.hh()), !this.uh)) {
                var i = new Error('localStorage not supported.');
                Qt().expectedError(qh, i);
              }
            }
            var i = t.prototype;
            return (
              (i.hh = function () {
                try {
                  return (
                    'localStorage' in this.win &&
                    (this.win.localStorage.getItem('test'), !0)
                  );
                } catch (t) {
                  return !1;
                }
              }),
              (i.ah = function (t) {
                return 'amp-store:'.concat(t);
              }),
              (i.loadBlob = function (t) {
                var i = this;
                return new Promise(function (n) {
                  i.uh ? n(i.win.localStorage.getItem(i.ah(t))) : n(null);
                });
              }),
              (i.saveBlob = function (t, i) {
                var n = this;
                return new Promise(function (r) {
                  n.uh ? (n.win.localStorage.setItem(n.ah(t), i), r()) : r();
                });
              }),
              t
            );
          })(),
          Kh = (function () {
            function t(t) {
              this.Ae = t;
            }
            var i = t.prototype;
            return (
              (i.loadBlob = function (t) {
                return this.Ae.sendMessageAwaitResponse('loadStore', {
                  origin: t,
                }).then(function (t) {
                  return t.blob;
                });
              }),
              (i.saveBlob = function (t, i) {
                return this.Ae.sendMessageAwaitResponse('saveStore', {
                  origin: t,
                  blob: i,
                }).catch(function (t) {
                  throw Qt().createExpectedError(
                    qh,
                    'Failed to save store: ',
                    t,
                  );
                });
              }),
              t
            );
          })(),
          Jh = '__AMP_IMPL_',
          Xh = function () {},
          Qh = (function () {
            function t(t) {
              (this.Ui = t), (this.fh = {}), (this.lh = {});
            }
            var i = t.prototype;
            return (
              (i.whenReady = function (t) {
                return this.dh(t).then(Xh);
              }),
              (i.setHtmlForTemplate = function (t, i) {
                var n = this;
                return this.dh(t).then(function (t) {
                  return n.mh(t, i);
                });
              }),
              (i.renderTemplate = function (t, i) {
                var n = this;
                return this.dh(t).then(function (t) {
                  return n.ph(t, i);
                });
              }),
              (i.renderTemplateAsString = function (t, i) {
                return this.dh(t).then(function (t) {
                  return t.renderAsString(i);
                });
              }),
              (i.getTemplateRenderer = function (t) {
                return this.dh(t).then(function (t) {
                  return {
                    renderAsString: function (i) {
                      return t.renderAsString(i);
                    },
                  };
                });
              }),
              (i.renderTemplateArray = function (t, i) {
                var n = this;
                return 0 == i.length
                  ? Promise.resolve([])
                  : this.dh(t).then(function (t) {
                      return i.map(function (i) {
                        return n.ph(t, i);
                      });
                    });
              }),
              (i.findAndRenderTemplate = function (t, i, n) {
                return this.renderTemplate(this.findTemplate(t, n), i);
              }),
              (i.findAndSetHtmlForTemplate = function (t, i, n) {
                return this.setHtmlForTemplate(this.findTemplate(t, n), i);
              }),
              (i.findAndRenderTemplateArray = function (t, i, n) {
                return this.renderTemplateArray(this.findTemplate(t, n), i);
              }),
              (i.hasTemplate = function (t, i) {
                return !!this.maybeFindTemplate(t, i);
              }),
              (i.findTemplate = function (t, i) {
                var n = this.maybeFindTemplate(t, i);
                ti(n, 'Template not found for %s', t);
                var r = n.tagName;
                return (
                  ti(
                    'TEMPLATE' == r ||
                      ('SCRIPT' == r &&
                        'text/plain' === n.getAttribute('type')),
                    'Template must be defined in a <template> or <script type="text/plain"> tag',
                  ),
                  n
                );
              }),
              (i.maybeFindTemplate = function (t, i) {
                var n = t.getAttribute('template');
                return n
                  ? _i(t).getElementById(n)
                  : i
                    ? pi(t, i)
                    : t.querySelector(
                        'template[type], script[type="text/plain"]',
                      );
              }),
              (i.dh = function (t) {
                var i = this,
                  n = t[Jh];
                if (n) return Promise.resolve(n);
                var r = '',
                  e = t.tagName;
                'TEMPLATE' == e
                  ? (r = t.getAttribute('type'))
                  : 'SCRIPT' == e && (r = t.getAttribute('template')),
                  ti(r, 'Type must be specified: %s', t);
                var s = t.__AMP_WAIT_;
                return (
                  s ||
                  ((s = this.bh(t, r).then(function (n) {
                    var r = n,
                      e = (t[Jh] = new r(t, i.Ui.win));
                    return delete t.__AMP_WAIT_, e;
                  })),
                  (t.__AMP_WAIT_ = s),
                  s)
                );
              }),
              (i.bh = function (t, i) {
                if (this.fh[i]) return this.fh[i];
                var n = new a(),
                  r = n.promise,
                  e = n.resolve;
                return (this.fh[i] = r), (this.lh[i] = e), r;
              }),
              (i.gh = function (t, i) {
                if (this.fh[t]) {
                  var n = this.lh[t];
                  ti(n, 'Duplicate template type: %s', t),
                    delete this.lh[t],
                    n(i);
                } else this.fh[t] = Promise.resolve(i);
              }),
              (i.ph = function (t, i) {
                return t.render(i);
              }),
              (i.mh = function (t, i) {
                return t.setHtml(i);
              }),
              t
            );
          })(),
          Zh = (function () {
            function t(t) {
              (this.win = t),
                (this.yh = this.win.Promise.resolve()),
                (this.wh = 0),
                (this.Ah = {}),
                (this.xh = Date.now());
            }
            var i = t.prototype;
            return (
              (i.timeSinceStart = function () {
                return Date.now() - this.xh;
              }),
              (i.delay = function (t, i) {
                var n = this;
                if (!i) {
                  var r = 'p' + this.wh++;
                  return (
                    this.yh
                      .then(function () {
                        n.Ah[r] ? delete n.Ah[r] : t();
                      })
                      .catch(Us),
                    r
                  );
                }
                return this.win.setTimeout(function () {
                  try {
                    t();
                  } catch (t) {
                    throw (Us(t), t);
                  }
                }, i);
              }),
              (i.cancel = function (t) {
                'string' != typeof t
                  ? this.win.clearTimeout(t)
                  : (this.Ah[t] = !0);
              }),
              (i.promise = function (t) {
                var i = this;
                return new this.win.Promise(function (n) {
                  if (-1 == i.delay(n, t))
                    throw new Error('Failed to schedule timer.');
                });
              }),
              (i.timeoutPromise = function (t, i, n) {
                var r,
                  e = this,
                  s = new this.win.Promise(function (i, s) {
                    if (
                      -1 ==
                      (r = e.delay(function () {
                        s(Jt().createError(n || 'timeout'));
                      }, t))
                    )
                      throw new Error('Failed to schedule timer.');
                  });
                if (!i) return s;
                var u = function () {
                  e.cancel(r);
                };
                return i.then(u, u), this.win.Promise.race([s, i]);
              }),
              (i.poll = function (t, i) {
                var n = this;
                return new this.win.Promise(function (r) {
                  var e = n.win.setInterval(function () {
                    i() && (n.win.clearInterval(e), r());
                  }, t);
                });
              }),
              t
            );
          })();
        function ta(t) {
          En(t, 'timer', Zh);
        }
        var ia = (function () {
            function t(t) {
              var i = t.getRootNode(),
                n = i.ownerDocument || i;
              (this.Eh = n.createElement('a')), (this.Gt = new fs(100));
            }
            var i = t.prototype;
            return (
              (i.parse = function (t, i) {
                return ps(this.Eh, t, i ? null : this.Gt);
              }),
              (i.Oh = function (t) {
                return 'string' != typeof t ? t : this.parse(t);
              }),
              (i.isProtocolValid = function (t) {
                return Os(t);
              }),
              (i.getSourceOrigin = function (t) {
                return Ss(this.Oh(t));
              }),
              (i.getSourceUrl = function (t) {
                return Ms(this.Oh(t));
              }),
              (i.resolveRelativeUrl = function (t, i) {
                return Rs(t, this.Oh(i));
              }),
              (i.assertHttpsUrl = function (t, i) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 'source';
                return xs(t, i, n);
              }),
              (i.assertAbsoluteHttpOrHttpsUrl = function (t) {
                return (function (t) {
                  return (
                    ti(
                      /^https?\:/i.test(t),
                      'URL must start with "http://" or "https://". Invalid value: %s',
                      t,
                    ),
                    ms(t).href
                  );
                })(t);
              }),
              (i.isProxyOrigin = function (t) {
                return Ps(this.Oh(t));
              }),
              (i.isSecure = function (t) {
                return As(this.Oh(t));
              }),
              (i.getWinOrigin = function (t) {
                return t.origin || this.Oh(t.location.href).origin;
              }),
              (i.getCdnUrlOnOrigin = function (t) {
                if (Ps(t)) return t;
                var i = this.Oh(t),
                  n = i.hash,
                  r = i.host,
                  e = i.pathname,
                  s = i.search,
                  u = encodeURIComponent(r);
                return ''
                  .concat(Tt, '/c/')
                  .concat(u)
                  .concat(e)
                  .concat(s)
                  .concat(n);
              }),
              t
            );
          })(),
          na = 'Expander',
          ra = (function () {
            function t(t, i, n, r, e, s) {
              (this.Th = t),
                (this.Ph = i),
                (this.Ih = n),
                (this.Sh = r),
                (this.ne = e),
                (this.Mh = !s);
            }
            var i = t.prototype;
            return (
              (i.expand = function (t) {
                if (!t.length) return this.Sh ? t : Promise.resolve(t);
                var i = this.Th.getExpr(this.Ph, this.ne),
                  n = this.Rh(t, i);
                return n.length
                  ? this._h(t, n)
                  : this.Sh
                    ? t
                    : Promise.resolve(t);
              }),
              (i.getMacroNames = function (t) {
                var i = this.Th.getExpr(this.Ph, this.ne);
                return t.match(i) || [];
              }),
              (i.Rh = function (t, i) {
                var n = [];
                return (
                  t.replace(i, function (t, i, r) {
                    var e = t.length,
                      s = { start: r, stop: e + r - 1, name: i, length: e };
                    n.push(s);
                  }),
                  n
                );
              }),
              (i._h = function (t, i) {
                var n = this,
                  r = [],
                  e = 0,
                  s = 0,
                  u = i[s],
                  o = 0,
                  h = !1;
                return (function a(c) {
                  for (
                    var f, l = '', v = [], m = [];
                    e < t.length && s <= i.length;

                  ) {
                    var p,
                      g = l.trim();
                    if (u && e === u.start)
                      g &&
                        v.push(
                          o
                            ? (f = l).trimStart
                              ? f.trimStart()
                              : (f + '_').trim().slice(0, -1)
                            : l,
                        ),
                        (p =
                          n.Ph && x(n.Ph, u.name)
                            ? {
                                name: u.name,
                                prioritized: n.Ph[u.name],
                                encode: c,
                              }
                            : D(
                                D({}, n.Th.get(u.name)),
                                {},
                                { name: u.name, encode: c },
                              )),
                        (e = u.stop + 1),
                        (u = i[++s]),
                        '(' === t[e]
                          ? (e++, o++, r.push(p), v.push(a(!1)))
                          : v.push(n.kh(p)),
                        (l = '');
                    else if ('`' === t[e])
                      h
                        ? ((h = !1), l.length && v.push(l))
                        : ((h = !0), g && v.push(g)),
                        (l = ''),
                        e++;
                    else if (o && ',' === t[e] && !h)
                      g && v.push(g),
                        m.push(v),
                        (v = []),
                        ',' === t[e + 1] && (m.push(['']), e++),
                        (l = ''),
                        e++;
                    else {
                      if (o && ')' === t[e] && !h) {
                        e++, o--;
                        var b = r.pop();
                        return g && v.push(g), m.push(v), n.kh(b, m);
                      }
                      (l += t[e]), e++;
                    }
                    e === t.length && l.length && v.push(l);
                  }
                  return n.Sh
                    ? v.join('')
                    : Promise.all(v)
                        .then(function (t) {
                          return t.join('');
                        })
                        .catch(function (t) {
                          return d(t), '';
                        });
                })(this.Mh);
              }),
              (i.kh = function (t, i) {
                var n,
                  r = t.encode,
                  e = t.name;
                if (
                  (null != t.prioritized
                    ? (n = t.prioritized)
                    : this.Sh && null != t.sync
                      ? (n = t.sync)
                      : this.Sh
                        ? (Jt().error(
                            na,
                            'ignoring async replacement key: ',
                            t.name,
                          ),
                          (n = ''))
                        : (n = t.async || t.sync),
                  this.Sh)
                ) {
                  var s = this.Nh(n, e, i);
                  return r ? encodeURIComponent(s) : s;
                }
                return this.Ch(n, e, i).then(function (t) {
                  return r ? encodeURIComponent(t) : t;
                });
              }),
              (i.Ch = function (t, i, n) {
                var r,
                  e = this;
                try {
                  if ('function' == typeof t) {
                    var s = t;
                    r = n
                      ? this.jh(n).then(function (t) {
                          return s.apply(null, t);
                        })
                      : c(s);
                  } else r = Promise.resolve(t);
                  return r
                    .then(function (t) {
                      return e.Dh(i, t, n), null == t ? '' : t;
                    })
                    .catch(function (t) {
                      return d(t), e.Dh(i, '', n), Promise.resolve('');
                    });
                } catch (t) {
                  return d(t), this.Dh(i, '', n), Promise.resolve('');
                }
              }),
              (i.jh = function (t) {
                return Promise.all(
                  t.map(function (t) {
                    return Promise.all(t).then(function (t) {
                      return t.join('');
                    });
                  }),
                );
              }),
              (i.Nh = function (t, i, n) {
                try {
                  var r,
                    e = t;
                  return (
                    'function' == typeof t && (e = t.apply(null, this.Uh(n))),
                    e && 'function' == typeof e.then
                      ? (Jt().error(na, 'ignoring async macro resolution'),
                        (r = ''))
                      : 'string' == typeof e ||
                          'number' == typeof e ||
                          'boolean' == typeof e
                        ? (this.Dh(i, e, n), (r = e.toString()))
                        : (this.Dh(i, '', n), (r = '')),
                    r
                  );
                } catch (t) {
                  return d(t), this.Dh(i, '', n), '';
                }
              }),
              (i.Uh = function (t) {
                return t
                  ? t.map(function (t) {
                      return t.join('');
                    })
                  : t;
              }),
              (i.Dh = function (t, i, n) {
                if (this.Ih) {
                  var r = '';
                  if (n) {
                    var e = n
                      .filter(function (t) {
                        return '' !== t;
                      })
                      .join(',');
                    r = '('.concat(e, ')');
                  }
                  this.Ih[''.concat(t).concat(r)] = i || '';
                }
              }),
              t
            );
          })(),
          ea = {
            navigationStart: 1,
            redirectStart: 1,
            redirectEnd: 1,
            fetchStart: 1,
            domainLookupStart: 1,
            domainLookupEnd: 1,
            connectStart: 1,
            secureConnectionStart: 1,
            connectEnd: 1,
            requestStart: 1,
            responseStart: 1,
            responseEnd: 1,
            domLoading: 2,
            domInteractive: 2,
            domContentLoaded: 2,
            domComplete: 2,
            loadEventStart: 3,
            loadEventEnd: 4,
          };
        function sa(t, i, n) {
          var r,
            e = ea[i] || 3,
            s = n ? ea[n] || 3 : e,
            u = Math.max(e, s);
          if (1 === u) r = h();
          else if (2 === u) r = mn(t.document);
          else if (3 === u) r = Ze(t);
          else if (4 === u) {
            var o = fr(t);
            r = Ze(t).then(function () {
              return o.promise(1);
            });
          }
          return (
            Zt(r),
            r.then(function () {
              return ua(t, i, n);
            })
          );
        }
        function ua(t, i, n) {
          var r = t.performance && t.performance.timing;
          if (r && 0 != r.navigationStart) {
            var e = void 0 === n ? r[i] : r[n] - r[i];
            return !J(e) || e < 0 ? void 0 : e;
          }
        }
        function oa(t, i) {
          var n = t.performance && t.performance.navigation;
          if (n && void 0 !== n[i]) return n[i];
        }
        var ha = 'UrlReplacements';
        function aa(t) {
          return function () {
            return new Date()[t]();
          };
        }
        function ca(t, i) {
          return function () {
            return t[i];
          };
        }
        function fa(t, i) {
          return i
            ? (ti(
                'ISOCountry' === i,
                'The value passed to AMP_GEO() is not valid name:' + i,
              ),
              (t && t[i]) || 'unknown')
            : (null == t ? void 0 : t.matchedISOCountryGroups.join(',')) ||
                'unknown';
        }
        var la = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t) {
              var n;
              return ((n = i.call(this, t)).zh = null), (n.Lh = {}), n;
            }
            var r = n.prototype;
            return (
              (r.Hh = function (t, i, n) {
                var r = this;
                return this.setBoth(
                  t,
                  function () {
                    return ua(r.ampdoc.win, i, n);
                  },
                  function () {
                    return sa(r.ampdoc.win, i, n);
                  },
                );
              }),
              (r.initialize = function () {
                var t = this,
                  i = this.ampdoc.win,
                  n = this.ampdoc.getHeadNode(),
                  r = gr(this.ampdoc);
                vr(this.ampdoc).then(function (i) {
                  t.zh = i;
                }),
                  this.set('RANDOM', function () {
                    return Math.random();
                  });
                var e = Object.create(null);
                this.set('COUNTER', function (t) {
                  return (e[t] = 1 + (0 | e[t]));
                }),
                  this.set('CANONICAL_URL', function () {
                    return t.Gh().canonicalUrl;
                  }),
                  this.set('CANONICAL_HOST', function () {
                    return ms(t.Gh().canonicalUrl).host;
                  }),
                  this.set('CANONICAL_HOSTNAME', function () {
                    return ms(t.Gh().canonicalUrl).hostname;
                  }),
                  this.set('CANONICAL_PATH', function () {
                    return ms(t.Gh().canonicalUrl).pathname;
                  }),
                  this.setAsync('DOCUMENT_REFERRER', function () {
                    return mr(t.ampdoc).getReferrerUrl();
                  }),
                  this.setAsync('EXTERNAL_REFERRER', function () {
                    return mr(t.ampdoc)
                      .getReferrerUrl()
                      .then(function (t) {
                        return t
                          ? ms(Ms(t)).hostname === Gr.getHostname(i)
                            ? null
                            : t
                          : null;
                      });
                  }),
                  this.set('TITLE', function () {
                    var t = i.document;
                    return t.originalTitle || t.title;
                  }),
                  this.set('AMPDOC_URL', function () {
                    return Es(t.Vh(i.location.href));
                  }),
                  this.set('AMPDOC_HOST', function () {
                    var t = ms(i.location.href);
                    return t && t.host;
                  }),
                  this.set('AMPDOC_HOSTNAME', function () {
                    var t = ms(i.location.href);
                    return t && t.hostname;
                  });
                var s = function () {
                  var i = t.Gh();
                  return Es(t.Vh(i.sourceUrl));
                };
                this.setBoth(
                  'SOURCE_URL',
                  function () {
                    return s();
                  },
                  function () {
                    return xh().then(function () {
                      return s();
                    });
                  },
                ),
                  this.set('SOURCE_HOST', function () {
                    return ms(t.Gh().sourceUrl).host;
                  }),
                  this.set('SOURCE_HOSTNAME', function () {
                    return ms(t.Gh().sourceUrl).hostname;
                  }),
                  this.set('SOURCE_PATH', function () {
                    return ms(t.Gh().sourceUrl).pathname;
                  }),
                  this.set('PAGE_VIEW_ID', function () {
                    return t.Gh().pageViewId;
                  }),
                  this.setAsync('PAGE_VIEW_ID_64', function () {
                    return t.Gh().pageViewId64;
                  }),
                  this.setBoth(
                    'QUERY_PARAM',
                    function (i) {
                      var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : '';
                      return t.Fh(i, n);
                    },
                    function (i) {
                      var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : '';
                      return xh().then(function () {
                        return t.Fh(i, n);
                      });
                    },
                  ),
                  this.set('FRAGMENT_PARAM', function (i) {
                    var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : '';
                    return t.Bh(i, n);
                  });
                var u = null;
                this.setBoth(
                  'CLIENT_ID',
                  function (t) {
                    return u ? u[t] : null;
                  },
                  function (i, r, e, s) {
                    ti(
                      i,
                      'The first argument to CLIENT_ID, the fallback Cookie name, is required',
                    );
                    var o = h();
                    return (
                      r &&
                        (o = (function (t) {
                          return Vn(
                            t,
                            'userNotificationManager',
                            'amp-user-notification',
                          );
                        })(n).then(function (t) {
                          return t.get(r);
                        })),
                      Zn(t.ampdoc)
                        .then(function (t) {
                          return (
                            (s = 'true' == s),
                            t.get(
                              {
                                scope: i,
                                createCookieIfNotPresent: !0,
                                cookieName: e || void 0,
                                disableBackup: s,
                              },
                              o,
                            )
                          );
                        })
                        .then(function (t) {
                          return (
                            u || (u = Object.create(null)),
                            t &&
                              '_ga' == (e || i) &&
                              ('string' == typeof t
                                ? (t = t.replace(/^(GA1|1)\.[\d-]+\./, ''))
                                : Qt().error(
                                    ha,
                                    'non-string cid, what is it?',
                                    Object.keys(t),
                                  )),
                            (u[i] = t),
                            t
                          );
                        })
                    );
                  },
                ),
                  this.setAsync('VARIANT', function (i) {
                    return t.qh(function (t) {
                      var n = t[i];
                      return (
                        ti(
                          void 0 !== n,
                          'The value passed to VARIANT() is not a valid experiment in <amp-experiment>:' +
                            i,
                        ),
                        null === n ? 'none' : n
                      );
                    }, 'VARIANT');
                  }),
                  this.setAsync('VARIANTS', function () {
                    return t.qh(function (t) {
                      var i = [];
                      for (var n in t) {
                        var r = t[n];
                        i.push(n + '.' + (r || 'none'));
                      }
                      return i.join('!');
                    }, 'VARIANTS');
                  }),
                  this.setBoth(
                    'AMP_GEO',
                    function (i) {
                      return fa(t.zh, i);
                    },
                    function (i) {
                      return t.$h(function (t) {
                        return fa(t, i);
                      }, 'AMP_GEO');
                    },
                  ),
                  this.set('TIMESTAMP', aa('getTime')),
                  this.set('TIMESTAMP_ISO', aa('toISOString')),
                  this.set('TIMEZONE', aa('getTimezoneOffset')),
                  this.set('SCROLL_HEIGHT', function () {
                    return r.getScrollHeight();
                  }),
                  this.set('SCROLL_WIDTH', function () {
                    return r.getScrollWidth();
                  }),
                  this.set('VIEWPORT_HEIGHT', function () {
                    return r.getHeight();
                  }),
                  this.set('VIEWPORT_WIDTH', function () {
                    return r.getWidth();
                  });
                var o = i.screen;
                this.set('SCREEN_WIDTH', ca(o, 'width')),
                  this.set('SCREEN_HEIGHT', ca(o, 'height')),
                  this.set('AVAILABLE_SCREEN_HEIGHT', ca(o, 'availHeight')),
                  this.set('AVAILABLE_SCREEN_WIDTH', ca(o, 'availWidth')),
                  this.set('SCREEN_COLOR_DEPTH', ca(o, 'colorDepth')),
                  this.set('DOCUMENT_CHARSET', function () {
                    var t = i.document;
                    return t.characterSet || t.charset;
                  }),
                  this.set('BROWSER_LANGUAGE', function () {
                    var t = i.navigator;
                    return (
                      t.language ||
                      t.userLanguage ||
                      t.browserLanguage ||
                      ''
                    ).toLowerCase();
                  }),
                  this.set('USER_AGENT', function () {
                    return i.navigator.userAgent;
                  }),
                  this.setBoth(
                    'UACH',
                    function (i) {
                      var n;
                      return null !== (n = t.Lh[i]) && void 0 !== n ? n : '';
                    },
                    function (n) {
                      return t.Wh(n, i);
                    },
                  ),
                  this.Hh(
                    'PAGE_LOAD_TIME',
                    'navigationStart',
                    'loadEventStart',
                  ),
                  this.Hh(
                    'DOMAIN_LOOKUP_TIME',
                    'domainLookupStart',
                    'domainLookupEnd',
                  ),
                  this.Hh('TCP_CONNECT_TIME', 'connectStart', 'connectEnd'),
                  this.Hh(
                    'SERVER_RESPONSE_TIME',
                    'requestStart',
                    'responseStart',
                  ),
                  this.Hh('PAGE_DOWNLOAD_TIME', 'responseStart', 'responseEnd'),
                  this.Hh('REDIRECT_TIME', 'navigationStart', 'fetchStart'),
                  this.Hh(
                    'DOM_INTERACTIVE_TIME',
                    'navigationStart',
                    'domInteractive',
                  ),
                  this.Hh(
                    'CONTENT_LOAD_TIME',
                    'navigationStart',
                    'domContentLoadedEventStart',
                  ),
                  this.setAsync('ACCESS_READER_ID', function () {
                    return t.Kh(function (t) {
                      return t.getAccessReaderId();
                    }, 'ACCESS_READER_ID');
                  }),
                  this.setAsync('AUTHDATA', function (i) {
                    return (
                      ti(
                        i,
                        'The first argument to AUTHDATA, the field, is required',
                      ),
                      t.Kh(function (t) {
                        return t.getAuthdataField(i);
                      }, 'AUTHDATA')
                    );
                  }),
                  this.setAsync('VIEWER', function () {
                    return mr(t.ampdoc)
                      .getViewerOrigin()
                      .then(function (t) {
                        return null == t ? '' : t;
                      });
                  }),
                  this.setAsync('TOTAL_ENGAGED_TIME', function () {
                    return Yn(n).then(function (t) {
                      return t.getTotalEngagedTime();
                    });
                  }),
                  this.setAsync('INCREMENTAL_ENGAGED_TIME', function (t, i) {
                    return Yn(n).then(function (n) {
                      return n.getIncrementalEngagedTime(t, 'false' !== i);
                    });
                  }),
                  this.set('NAV_TIMING', function (t, n) {
                    return (
                      ti(
                        t,
                        'The first argument to NAV_TIMING, the start attribute name, is required',
                      ),
                      ua(i, t, n)
                    );
                  }),
                  this.setAsync('NAV_TIMING', function (t, n) {
                    return (
                      ti(
                        t,
                        'The first argument to NAV_TIMING, the start attribute name, is required',
                      ),
                      sa(i, t, n)
                    );
                  }),
                  this.set('NAV_TYPE', function () {
                    return oa(i, 'type');
                  }),
                  this.set('NAV_REDIRECT_COUNT', function () {
                    return oa(i, 'redirectCount');
                  }),
                  this.set('AMP_VERSION', function () {
                    return '2502032353000';
                  }),
                  this.set('BACKGROUND_STATE', function () {
                    return t.ampdoc.isVisible() ? '0' : '1';
                  }),
                  this.setAsync('VIDEO_STATE', function (i, n) {
                    return ((r = t.ampdoc),
                    In(r, 'video-manager')).getVideoStateProperty(i, n);
                    var r;
                  }),
                  this.setAsync('AMP_STATE', function (i) {
                    var n = t.ampdoc.getRootNode(),
                      r = n.documentElement || n;
                    return Qn(r).then(function (t) {
                      return (t && t.getStateValue(i)) || '';
                    });
                  });
              }),
              (r.Vh = function (t) {
                var i = this.Gh().replaceParams;
                return i
                  ? (function (t, i) {
                      for (
                        var n = yt(ms(t).search),
                          r = {},
                          e = Object.keys(i),
                          s = 0;
                        s < e.length;
                        s++
                      )
                        x(n, e[s]) || (r[e[s]] = i[e[s]]);
                      return ys(t, r);
                    })(Is(t), i)
                  : t;
              }),
              (r.Gh = function () {
                return ir(this.ampdoc);
              }),
              (r.Kh = function (t, i) {
                var n = this.ampdoc.getHeadNode();
                return Promise.all([qn(n), $n(n)]).then(function (n) {
                  var r = n[0],
                    e = n[1],
                    s = r || e;
                  return s
                    ? r && e
                      ? t(e) || t(r)
                      : t(s)
                    : (Jt().error(
                        ha,
                        'Access or subsciptions service is not installed to access: ',
                        i,
                      ),
                      null);
                });
              }),
              (r.Fh = function (t, i) {
                ti(
                  t,
                  'The first argument to QUERY_PARAM, the query string param is required',
                );
                var n = yt(ms(Is(this.ampdoc.win.location.href)).search),
                  r = this.Gh().replaceParams;
                return void 0 !== n[t] ? n[t] : r && void 0 !== r[t] ? r[t] : i;
              }),
              (r.Bh = function (t, i) {
                ti(
                  t,
                  'The first argument to FRAGMENT_PARAM, the fragment string param is required',
                ),
                  ti('string' == typeof t, 'param should be a string');
                var n = wt(this.ampdoc.win);
                return void 0 === n[t] ? i : n[t];
              }),
              (r.qh = function (t, i) {
                return ((n = this.ampdoc.getHeadNode()),
                Fn(n, 'variant', 'amp-experiment', !0))
                  .then(function (t) {
                    return (
                      ti(
                        t,
                        'To use variable %s, amp-experiment should be configured',
                        i,
                      ),
                      t.getVariants()
                    );
                  })
                  .then(function (i) {
                    return t(i);
                  });
                var n;
              }),
              (r.$h = function (t, i) {
                var n = this;
                return null !== this.zh
                  ? t(this.zh)
                  : vr(this.ampdoc.getHeadNode()).then(function (r) {
                      return (
                        ti(
                          r,
                          'To use variable %s, amp-geo should be configured',
                          i,
                        ),
                        (n.zh = r),
                        t(r)
                      );
                    });
              }),
              (r.Wh = function (t, i) {
                var n,
                  r,
                  e,
                  s = this;
                return t in this.Lh
                  ? Promise.resolve(this.Lh[t])
                  : (null === (n = i.navigator) ||
                    void 0 === n ||
                    null === (r = n.userAgentData) ||
                    void 0 === r ||
                    null === (e = r.getHighEntropyValues([t])) ||
                    void 0 === e
                      ? void 0
                      : e.then(function (i) {
                          var n =
                            'object' !== p(i[t]) ? i[t] : JSON.stringify(i[t]);
                          return (s.Lh[t] = n), n;
                        })) || Promise.resolve('');
              }),
              n
            );
          })(
            (function () {
              function t(t) {
                (this.ampdoc = t),
                  (this.Yh = Object.create(null)),
                  (this.Jh = !1),
                  this.Xh();
              }
              var i = t.prototype;
              return (
                (i.Ur = function () {
                  this.initialize(), (this.Jh = !0);
                }),
                (i.initialize = function () {}),
                (i.get = function (t) {
                  return this.Jh || this.Ur(), this.Yh[t];
                }),
                (i.set = function (t, i) {
                  return (
                    Zt(-1 == t.indexOf('RETURN')),
                    (this.Yh[t] = this.Yh[t] || {
                      sync: void 0,
                      async: void 0,
                    }),
                    (this.Yh[t].sync = i),
                    this
                  );
                }),
                (i.setAsync = function (t, i) {
                  return (
                    Zt(-1 == t.indexOf('RETURN')),
                    (this.Yh[t] = this.Yh[t] || {
                      sync: void 0,
                      async: void 0,
                    }),
                    (this.Yh[t].async = i),
                    this
                  );
                }),
                (i.setBoth = function (t, i, n) {
                  return this.set(t, i).setAsync(t, n);
                }),
                (i.getExpr = function (t, i) {
                  this.Jh || this.Ur();
                  var n = D(D({}, this.Yh), t);
                  return this.Qh(Object.keys(n), i);
                }),
                (i.Qh = function (t, i) {
                  var n = this;
                  if (
                    (this.Xh() &&
                      (t = t.filter(function (t) {
                        return n.Xh().includes(t);
                      })),
                    i &&
                      (t = t.filter(function (t) {
                        return i[t];
                      })),
                    0 === t.length)
                  )
                    return /_^/g;
                  t.sort(function (t, i) {
                    return i.length - t.length;
                  });
                  var r = t
                    .map(function (t) {
                      return '$' === t[0] ? '\\' + t : t;
                    })
                    .join('|');
                  return new RegExp('\\$?(' + r + ')', 'g');
                }),
                (i.Xh = function () {
                  return this.Zh
                    ? this.Zh
                    : this.ampdoc.isSingleDoc() && zu(this.ampdoc.getRootNode())
                      ? ((this.Zh = ['']), this.Zh)
                      : void 0;
                }),
                t
              );
            })(),
          ),
          va = (function () {
            function t(t, i) {
              (this.ampdoc = t), (this.Th = i);
            }
            var i = t.prototype;
            return (
              (i.expandStringSync = function (t, i, n) {
                return new ra(this.Th, i, void 0, !0, n, !0).expand(t);
              }),
              (i.expandStringAsync = function (t, i, n) {
                return new ra(this.Th, i, void 0, void 0, n, !0).expand(t);
              }),
              (i.expandUrlSync = function (t, i, n) {
                return this.ta(t, new ra(this.Th, i, void 0, !0, n).expand(t));
              }),
              (i.expandUrlAsync = function (t, i, n, r) {
                var e = this;
                return new ra(this.Th, i, void 0, void 0, n, r)
                  .expand(t)
                  .then(function (i) {
                    return e.ta(t, i);
                  });
              }),
              (i.expandInputValueAsync = function (t) {
                return this.ia(t, !1);
              }),
              (i.expandInputValueSync = function (t) {
                return this.ia(t, !0);
              }),
              (i.ia = function (t, i) {
                Zt(
                  'INPUT' == t.tagName &&
                    'hidden' == (t.getAttribute('type') || '').toLowerCase(),
                );
                var n = this.na(t);
                if (!n) return i ? t.value : Promise.resolve(t.value);
                void 0 === t['amp-original-value'] &&
                  (t['amp-original-value'] = t.value);
                var r = new ra(this.Th, void 0, void 0, i, n).expand(
                  t['amp-original-value'] || t.value,
                );
                return i
                  ? (t.value = r)
                  : r.then(function (i) {
                      return (t.value = i), i;
                    });
              }),
              (i.na = function (t, i) {
                var n = t.getAttribute('data-amp-replace');
                if (n) {
                  var r = {};
                  return (
                    n
                      .trim()
                      .split(/\s+/)
                      .forEach(function (t) {
                        !i || x(i, t)
                          ? (r[t] = !0)
                          : Jt().warn(
                              'URL',
                              'Ignoring unsupported replacement',
                              t,
                            );
                      }),
                    r
                  );
                }
              }),
              (i.ra = function (t) {
                var i = ir(this.ampdoc);
                if (
                  t.origin == ms(i.canonicalUrl).origin ||
                  t.origin == ms(i.sourceUrl).origin
                )
                  return !0;
                var n = this.ampdoc.getMetaByName(
                  'amp-link-variable-allowed-origin',
                );
                if (n)
                  for (var r = n.trim().split(/\s+/), e = 0; e < r.length; e++)
                    if (t.origin == ms(r[e]).origin) return !0;
                return !1;
              }),
              (i.maybeExpandLink = function (t, i) {
                Zt('A' == t.tagName);
                var n = t,
                  r = n.getAttribute('data-amp-addparams') || '',
                  e = this.na(n, {
                    CLIENT_ID: !0,
                    QUERY_PARAM: !0,
                    PAGE_VIEW_ID: !0,
                    PAGE_VIEW_ID_64: !0,
                    NAV_TIMING: !0,
                  });
                if (e || r || i) {
                  var s = n['amp-original-href'] || n.getAttribute('href'),
                    u = ms(s);
                  null == n['amp-original-href'] &&
                    (n['amp-original-href'] = s);
                  var o = this.ra(u);
                  return (
                    r && (s = ys(s, yt((r = o ? this.ea(r, e) : r)))),
                    o
                      ? (i &&
                          ((e && e.QUERY_PARAM) ||
                            (i = this.expandUrlSync(i, void 0, {
                              QUERY_PARAM: !0,
                            })),
                          (s = ys(s, yt(i)))),
                        (s = this.ea(s, e)),
                        (n.href = s))
                      : (e &&
                          Jt().warn(
                            'URL',
                            "Ignoring link replacement %s because the link does not go to the document's source, canonical, or allowlisted origin.",
                            s,
                          ),
                        (n.href = s))
                  );
                }
              }),
              (i.ea = function (t, i) {
                return i ? this.expandUrlSync(t, void 0, i) : t;
              }),
              (i.collectVars = function (t, i) {
                var n = Object.create(null);
                return new ra(this.Th, i, n).expand(t).then(function () {
                  return n;
                });
              }),
              (i.collectDisallowedVarsSync = function (t) {
                var i = t.getAttribute('src'),
                  n = new ra(this.Th).getMacroNames(i),
                  r = this.na(t);
                return r
                  ? n.filter(function (t) {
                      return !r[t];
                    })
                  : n;
              }),
              (i.ta = function (t, i) {
                return ms(i, !0).protocol != ms(t, !0).protocol
                  ? (Jt().error(ha, 'Illegal replacement of the protocol: ', t),
                    t)
                  : (ti(
                      Os(i),
                      'The replacement url has invalid protocol: %s',
                      i,
                    ),
                    i);
              }),
              (i.getVariableSource = function () {
                return this.Th;
              }),
              t
            );
          })(),
          da = 'Viewer',
          ma = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i,
          pa = (function () {
            function t(t) {
              var i = this;
              (this.ampdoc = t),
                (this.win = t.win),
                (this.Js = Ni(this.win)),
                (this.Co = !0),
                (this.sa = !1),
                (this.oa = A()),
                (this.ua = A()),
                (this.ha = new Or()),
                (this.aa = new Or()),
                (this.ca = null),
                (this.fa = null),
                (this.la = []),
                (this.va = A()),
                (this.da = A()),
                t.isSingleDoc() &&
                  Object.assign(this.da, yt(this.win.location.hash)),
                (this.Co = !parseInt(t.getParam('off'), 10)),
                Qt().fine(da, '- runtimeOn:', this.Co),
                (this.sa = !(!parseInt(t.getParam('history'), 10) && !this.sa)),
                Qt().fine(da, '- history:', this.sa),
                Qt().fine(
                  da,
                  '- visibilityState:',
                  this.ampdoc.getVisibilityState(),
                ),
                (this.ma = null),
                (this.pa = Ps(ms(this.ampdoc.win.location.href)));
              var n = new a();
              (this.ba = n.resolve),
                (this.ga = this.ya(n.promise)),
                (this.eo = null),
                (this.wa = null);
              var r = t.getParam('referrer');
              if (
                ((this.Aa =
                  this.isEmbedded() && null != r && !1 !== this.xa()
                    ? r
                    : this.win.document.referrer),
                (this.Ea = new Promise(function (n) {
                  i.isEmbedded() && null != t.getParam('referrer')
                    ? i.isTrustedViewer().then(function (r) {
                        r
                          ? n(t.getParam('referrer'))
                          : (n(i.win.document.referrer),
                            i.Aa != i.win.document.referrer &&
                              (Qt().expectedError(
                                da,
                                'Untrusted viewer referrer override: ' +
                                  i.Aa +
                                  ' at ' +
                                  i.fa,
                              ),
                              (i.Aa = i.win.document.referrer)));
                      })
                    : n(i.win.document.referrer);
                })),
                (this.Oa = Es(this.win.location.href || '')),
                (this.Ta = new Promise(function (n) {
                  var r = t.getParam('viewerUrl');
                  i.isEmbedded() && r
                    ? i.isTrustedViewer().then(function (t) {
                        t
                          ? (i.Oa = Zt(r))
                          : Qt().expectedError(
                              da,
                              'Untrusted viewer url override: ' +
                                r +
                                ' at ' +
                                i.fa,
                            ),
                          n(i.Oa);
                      })
                    : n(i.Oa);
                })),
                this.da.click)
              ) {
                var e = Es(this.win.location.href);
                e != this.win.location.href &&
                  this.win.history.replaceState &&
                  (this.win.location.originalHash ||
                    (this.win.location.originalHash = this.win.location.hash),
                  this.win.history.replaceState({}, '', e),
                  delete this.da.click,
                  Qt().fine(da, 'replace fragment:' + this.win.location.href));
              }
              this.ampdoc.whenFirstVisible().then(function () {
                i.maybeUpdateFragmentForCct();
              }),
                this.ampdoc.isSingleDoc() && this.Pa();
            }
            var i = t.prototype;
            return (
              (i.ya = function (t) {
                if (
                  !(
                    (this.Js &&
                      !this.win.__AMP_TEST_IFRAME &&
                      (this.ampdoc.getParam('origin') ||
                        this.ampdoc.getParam('visibilityState') ||
                        -1 != this.win.location.search.indexOf('amp_js_v'))) ||
                    this.isWebviewEmbedded() ||
                    this.isCctEmbedded()
                  ) &&
                  this.ampdoc.isSingleDoc()
                )
                  return null;
                var i = 'initMessagingChannel timeout';
                return fr(this.win)
                  .timeoutPromise(2e4, t, i)
                  .catch(function (t) {
                    var n = ga(t);
                    throw (
                      (n &&
                        W(n.message, i) &&
                        (n = Qt().createExpectedError(n)),
                      Us(n),
                      n)
                    );
                  });
              }),
              (i.getAmpDoc = function () {
                return this.ampdoc;
              }),
              (i.getParam = function (t) {
                return this.ampdoc.getParam(t);
              }),
              (i.hasCapability = function (t) {
                var i = this.ampdoc.getParam('cap');
                return !!i && -1 != i.split(',').indexOf(t);
              }),
              (i.isEmbedded = function () {
                return !!this.ga;
              }),
              (i.isWebviewEmbedded = function () {
                return !this.Js && '1' == this.ampdoc.getParam('webview');
              }),
              (i.isCctEmbedded = function () {
                if (null != this.ma) return this.ma;
                if (((this.ma = !1), !this.Js)) {
                  var t = yt(this.win.location.search);
                  this.ma =
                    '1' === t.amp_gsa && (t.amp_js_v || '').startsWith('a');
                }
                return this.ma;
              }),
              (i.isProxyOrigin = function () {
                return this.pa;
              }),
              (i.maybeUpdateFragmentForCct = function () {
                if (this.isCctEmbedded() && this.win.history.replaceState) {
                  var t = Ss(this.win.location.href),
                    i = ir(this.ampdoc).canonicalUrl,
                    n = Ss(i);
                  this.Ia(t, n) &&
                    ((this.da.ampshare = i),
                    this.win.history.replaceState({}, '', '#' + ws(this.da)));
                }
              }),
              (i.Ia = function (t, i) {
                var n = function (t) {
                  return t.split('.').length > 2 ? t.replace(ma, '$1') : t;
                };
                return n(t) == n(i);
              }),
              (i.isRuntimeOn = function () {
                return this.Co;
              }),
              (i.toggleRuntime = function () {
                (this.Co = !this.Co),
                  Qt().fine(da, 'Runtime state:', this.Co),
                  this.ha.fire(this.Co);
              }),
              (i.onRuntimeState = function (t) {
                return this.ha.add(t);
              }),
              (i.isOvertakeHistory = function () {
                return this.sa;
              }),
              (i.getVisibilityState = function () {
                return this.ampdoc.getVisibilityState();
              }),
              (i.isVisible = function () {
                return this.ampdoc.isVisible();
              }),
              (i.hasBeenVisible = function () {
                return this.ampdoc.hasBeenVisible();
              }),
              (i.whenFirstVisible = function () {
                return this.ampdoc.whenFirstVisible();
              }),
              (i.whenNextVisible = function () {
                return this.ampdoc.whenNextVisible();
              }),
              (i.getFirstVisibleTime = function () {
                return this.ampdoc.getFirstVisibleTime();
              }),
              (i.getLastVisibleTime = function () {
                return this.ampdoc.getLastVisibleTime();
              }),
              (i.onVisibilityChanged = function (t) {
                return this.ampdoc.onVisibilityChanged(t);
              }),
              (i.Sa = function (t) {
                var i;
                t &&
                  (Zt(
                    'prerender' === (i = t) ||
                      'preview' === i ||
                      'visible' === i ||
                      'hidden' === i ||
                      'paused' === i ||
                      'inactive' === i,
                  ),
                  t === xr &&
                    (t = null != this.ampdoc.getLastVisibleTime() ? Pr : yr),
                  this.ampdoc.overrideVisibilityState(t),
                  Qt().fine(
                    da,
                    'visibilitychange event:',
                    this.ampdoc.getVisibilityState(),
                  ));
              }),
              (i.getResolvedViewerUrl = function () {
                return this.Oa;
              }),
              (i.getViewerUrl = function () {
                return this.Ta;
              }),
              (i.maybeGetMessagingOrigin = function () {
                return this.fa;
              }),
              (i.getUnconfirmedReferrerUrl = function () {
                return this.Aa;
              }),
              (i.getReferrerUrl = function () {
                return this.Ea;
              }),
              (i.isTrustedViewer = function () {
                var t = this;
                if (!this.eo) {
                  var i = this.xa();
                  this.eo =
                    void 0 !== i
                      ? Promise.resolve(i)
                      : this.ga.then(function (i) {
                          return !!i && t.Ma(i);
                        });
                }
                return this.eo;
              }),
              (i.xa = function () {
                return (
                  !!this.isEmbedded() &&
                  (!this.win.location.ancestorOrigins ||
                  this.isWebviewEmbedded() ||
                  this.isCctEmbedded()
                    ? void 0
                    : this.win.location.ancestorOrigins.length > 0 &&
                      this.Ma(this.win.location.ancestorOrigins[0]))
                );
              }),
              (i.getViewerOrigin = function () {
                var t;
                return (
                  this.wa ||
                    (this.isEmbedded()
                      ? this.win.location.ancestorOrigins &&
                        this.win.location.ancestorOrigins.length > 0 &&
                        (t = this.win.location.ancestorOrigins[0])
                      : (t = ''),
                    (this.wa =
                      void 0 !== t
                        ? Promise.resolve(t)
                        : fr(this.win)
                            .timeoutPromise(1e3, this.ga)
                            .catch(function () {
                              return '';
                            }))),
                  this.wa
                );
              }),
              (i.Ma = function (t) {
                var i = ms(t),
                  n = i.protocol;
                return (
                  'x-thread:' == n ||
                  ('https:' == n &&
                    kt.some(function (t) {
                      return t.test(i.hostname);
                    }))
                );
              }),
              (i.onMessage = function (t, i) {
                var n = this.oa[t];
                n || ((n = new Or()), (this.oa[t] = n));
                var r = n.add(i);
                return (
                  this.va[t] &&
                    (this.va[t].forEach(function (t) {
                      n.fire(t.data), t.deferred.resolve();
                    }),
                    (this.va[t] = [])),
                  r
                );
              }),
              (i.onMessageRespond = function (t, i) {
                var n = this;
                return (
                  (this.ua[t] = i),
                  this.va[t] &&
                    (this.va[t].forEach(function (t) {
                      t.deferred.resolve(i(t.data));
                    }),
                    (this.va[t] = [])),
                  function () {
                    n.ua[t] === i && delete n.ua[t];
                  }
                );
              }),
              (i.receiveMessage = function (t, i, n) {
                if ('visibilitychange' == t) return this.Sa(i.state), h();
                if ('broadcast' == t) return this.aa.fire(i), h();
                var r = this.oa[t],
                  e = this.ua[t];
                if (!r && !e) {
                  if (
                    ((this.va[t] = this.va[t] || []), this.va[t].length >= 50)
                  )
                    return;
                  var s = new a();
                  return this.va[t].push({ data: i, deferred: s }), s.promise;
                }
                return r && r.fire(i), e ? e(i) : r ? h() : void 0;
              }),
              (i.setMessageDeliverer = function (t, i) {
                var n = this;
                if (this.ca)
                  throw new Error(
                    'message channel can only be initialized once',
                  );
                if (null == i)
                  throw new Error('message channel must have an origin');
                if (
                  (Qt().fine(
                    da,
                    'message channel established with origin: ',
                    i,
                  ),
                  (this.ca = t),
                  (this.fa = i),
                  this.ba(i),
                  this.la.length > 0)
                ) {
                  var r = this.la.slice(0);
                  (this.la = []),
                    r.forEach(function (t) {
                      var i = n.ca(t.eventType, t.data, t.awaitResponse);
                      t.awaitResponse && t.responseResolver(i);
                    });
                }
              }),
              (i.maybeGetMessageDeliverer = function () {
                return this.ca;
              }),
              (i.sendMessage = function (t, i) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                this.Ra(t, i, n, !1);
              }),
              (i.sendMessageAwaitResponse = function (t, i) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                return this.Ra(t, i, n, !0);
              }),
              (i.Ra = function (t, i, n, r) {
                var e = this;
                if (this.ca)
                  return c(function () {
                    return e.ca(t, i, r);
                  });
                if (!this.ga) return r ? Promise.reject(ga()) : h();
                if (!n)
                  return this.ga.then(function () {
                    return e.ca(t, i, r);
                  });
                var s,
                  u = q(this.la, function (i) {
                    return i.eventType == t;
                  });
                if (-1 != u)
                  ((s = this.la.splice(u, 1)[0]).data = i),
                    (s.awaitResponse = s.awaitResponse || r);
                else {
                  var o = new a(),
                    f = o.promise,
                    l = o.resolve;
                  s = {
                    eventType: t,
                    data: i,
                    awaitResponse: r,
                    responsePromise: f,
                    responseResolver: l,
                  };
                }
                return this.la.push(s), s.responsePromise;
              }),
              (i.broadcast = function (t) {
                return this.ga
                  ? this.Ra('broadcast', t, !1, !1).then(
                      function () {
                        return !0;
                      },
                      function () {
                        return !1;
                      },
                    )
                  : Promise.resolve(!1);
              }),
              (i.onBroadcast = function (t) {
                return this.aa.add(t);
              }),
              (i.whenMessagingReady = function () {
                return this.ga;
              }),
              (i.replaceUrl = function (t) {
                if (
                  t &&
                  this.ampdoc.isSingleDoc() &&
                  this.win.history.replaceState
                )
                  try {
                    var i = ms(this.win.location.href),
                      n = ms(Es(t) + this.win.location.hash);
                    i.origin == n.origin &&
                      Ss(i) == Ss(n) &&
                      (this.win.history.replaceState({}, '', n.href),
                      (this.win.location.originalHref = i.href),
                      Qt().fine(da, 'replace url:' + n.href));
                  } catch (t) {
                    Qt().error(da, 'replaceUrl failed', t);
                  }
              }),
              (i.Pa = function () {
                var t = this;
                if (this.ampdoc.getVisibilityState() != Ar) {
                  var i = [],
                    n = function () {
                      return i.forEach(function (t) {
                        return t();
                      });
                    },
                    r = function () {
                      t.Sa(Ar),
                        n(),
                        Qt().expectedError(
                          da,
                          'Received user action in non-visible doc',
                        );
                    },
                    e = { capture: !0, passive: !0 };
                  i.push(
                    Je(this.win, 'keydown', r, e),
                    Je(this.win, 'touchstart', r, e),
                    Je(this.win, 'mousedown', r, e),
                  ),
                    this.whenFirstVisible().then(n);
                }
              }),
              t
            );
          })();
        function ga(t) {
          var i;
          return (
            t instanceof Error
              ? (((t = f(t)).message = 'No messaging channel: ' + t.message),
                (i = t))
              : (i = new Error('No messaging channel: ' + t)),
            (i.message = it(i.message)),
            i
          );
        }
        function ba(t, i) {
          return function (n) {
            return t + (i - t) * n;
          };
        }
        function ya(t, i, n) {
          return et(i <= n), Math.min(Math.max(t, i), n);
        }
        var wa = (function () {
            function t() {}
            return (
              (t.solveYValueFromXValue = function (i, n, r, e, s, u, o, h, a) {
                return t._a(t.ka(i, n, e, u, h), r, s, o, a);
              }),
              (t.ka = function (i, n, r, e, s) {
                var u = 1e-6,
                  o = (i - n) / (s - n);
                if (o <= 0) return 0;
                if (o >= 1) return 1;
                for (var h = 0, a = 1, c = 0, f = 0; f < 8; f++) {
                  c = t.Na(o, n, r, e, s);
                  var l = (t.Na(o + u, n, r, e, s) - c) / u;
                  if (Math.abs(c - i) < u) return o;
                  if (Math.abs(l) < u) break;
                  c < i ? (h = o) : (a = o), (o -= (c - i) / l);
                }
                for (var v = 0; Math.abs(c - i) > u && v < 8; v++)
                  c < i
                    ? ((h = o), (o = (o + a) / 2))
                    : ((a = o), (o = (o + h) / 2)),
                    (c = t.Na(o, n, r, e, s));
                return o;
              }),
              (t.Na = function (i, n, r, e, s) {
                if (0 == i) return n;
                if (1 == i) return s;
                var u = t.Ca(n, r, i),
                  o = t.Ca(r, e, i),
                  h = t.Ca(e, s, i);
                return (u = t.Ca(u, o, i)), (o = t.Ca(o, h, i)), t.Ca(u, o, i);
              }),
              (t._a = function (i, n, r, e, s) {
                if (0 == i) return n;
                if (1 == i) return s;
                var u = t.Ca(n, r, i),
                  o = t.Ca(r, e, i),
                  h = t.Ca(e, s, i);
                return (u = t.Ca(u, o, i)), (o = t.Ca(o, h, i)), t.Ca(u, o, i);
              }),
              (t.Ca = function (t, i, n) {
                return t + n * (i - t);
              }),
              t
            );
          })(),
          Aa = {
            LINEAR: function (t) {
              return t;
            },
            EASE: function (t) {
              return wa.solveYValueFromXValue(
                t,
                0,
                0,
                0.25,
                0.1,
                0.25,
                1,
                1,
                1,
              );
            },
            EASE_IN: function (t) {
              return wa.solveYValueFromXValue(t, 0, 0, 0.42, 0, 1, 1, 1, 1);
            },
            EASE_OUT: function (t) {
              return wa.solveYValueFromXValue(t, 0, 0, 0, 0, 0.58, 1, 1, 1);
            },
            EASE_IN_OUT: function (t) {
              return wa.solveYValueFromXValue(t, 0, 0, 0.42, 0, 0.58, 1, 1, 1);
            },
          },
          xa = {
            linear: Aa.LINEAR,
            ease: Aa.EASE,
            'ease-in': Aa.EASE_IN,
            'ease-out': Aa.EASE_OUT,
            'ease-in-out': Aa.EASE_IN_OUT,
          };
        function Ea(t) {
          if (!t) return null;
          if (Y(t)) {
            if (-1 != t.indexOf('cubic-bezier')) {
              var i = t.match(/cubic-bezier\((.+)\)/);
              if (i) {
                var n = i[1].split(',').map(parseFloat);
                if (4 == n.length) {
                  for (var r = 0; r < 4; r++) if (isNaN(n[r])) return null;
                  return (
                    (e = n[0]),
                    (s = n[1]),
                    (u = n[2]),
                    (o = n[3]),
                    function (t) {
                      return wa.solveYValueFromXValue(
                        t,
                        0,
                        0,
                        e,
                        s,
                        u,
                        o,
                        1,
                        1,
                      );
                    }
                  );
                }
              }
              return null;
            }
            return xa[t];
          }
          var e, s, u, o;
          return t;
        }
        var Pa = 'Animation',
          Oa = function () {},
          Ia = (function () {
            function t(t, i) {
              (this.ja = t),
                (this.Hs = i || pr(self)),
                (this.Da = null),
                (this.Ua = []);
            }
            t.animate = function (i, n, r, e) {
              return new t(i).setCurve(e).add(0, n, 1).start(r);
            };
            var i = t.prototype;
            return (
              (i.setCurve = function (t) {
                return t && (this.Da = Ea(t)), this;
              }),
              (i.add = function (t, i, n, r) {
                return (
                  this.Ua.push({
                    delay: t,
                    func: i,
                    duration: n,
                    curve: Ea(r),
                  }),
                  this
                );
              }),
              (i.start = function (t) {
                return new Ta(this.Hs, this.ja, this.Ua, this.Da, t);
              }),
              t
            );
          })(),
          Ta = (function () {
            function t(t, i, n, r, e) {
              (this.Hs = t), (this.ja = i), (this.Ua = []);
              for (var s = 0; s < n.length; s++) {
                var u = n[s];
                this.Ua.push({
                  delay: u.delay,
                  func: u.func,
                  duration: u.duration,
                  curve: u.curve || r,
                  started: !1,
                  completed: !1,
                });
              }
              (this.za = e),
                (this.xh = Date.now()),
                (this.Xr = !0),
                (this.yi = {});
              var o = new a();
              (this.La = o.promise),
                (this.vi = o.resolve),
                (this.Ha = o.reject),
                (this.Ga = this.Hs.createAnimTask(this.ja, {
                  mutate: this.Va.bind(this),
                })),
                this.Hs.canAnimate(this.ja)
                  ? this.Ga(this.yi)
                  : (Qt().warn(Pa, 'cannot animate'), this.Fa(!1, 0));
            }
            var i = t.prototype;
            return (
              (i.then = function (t, i) {
                return t || i ? this.La.then(t, i) : this.La;
              }),
              (i.thenAlways = function (t) {
                var i = t || Oa;
                return this.then(i, i);
              }),
              (i.halt = function (t) {
                this.Fa(!1, t || 0);
              }),
              (i.Fa = function (t, i) {
                if (this.Xr) {
                  if (((this.Xr = !1), 0 != i)) {
                    this.Ua.length > 1 &&
                      this.Ua.sort(function (t, i) {
                        return t.delay + t.duration - (i.delay + i.duration);
                      });
                    try {
                      if (i > 0)
                        for (var n = 0; n < this.Ua.length; n++)
                          this.Ua[n].func(1, !0);
                      else
                        for (var r = this.Ua.length - 1; r >= 0; r--)
                          this.Ua[r].func(0, !1);
                    } catch (i) {
                      Qt().error(Pa, 'completion failed: ' + i, i), (t = !1);
                    }
                  }
                  t ? this.vi() : this.Ha();
                }
              }),
              (i.Va = function (t) {
                if (this.Xr) {
                  for (
                    var i = Date.now(),
                      n = Math.min((i - this.xh) / this.za, 1),
                      r = 0;
                    r < this.Ua.length;
                    r++
                  ) {
                    var e = this.Ua[r];
                    !e.started && n >= e.delay && (e.started = !0);
                  }
                  for (var s = 0; s < this.Ua.length; s++) {
                    var u = this.Ua[s];
                    u.started && !u.completed && this.Ba(u, n);
                  }
                  1 == n
                    ? this.Fa(!0, 0)
                    : this.Hs.canAnimate(this.ja)
                      ? this.Ga(this.yi)
                      : (Qt().warn(Pa, 'cancel animation'), this.Fa(!1, 0));
                }
              }),
              (i.Ba = function (t, i) {
                var n, r;
                if (t.duration > 0) {
                  if (
                    ((r = n = Math.min((i - t.delay) / t.duration, 1)),
                    t.curve && 1 != r)
                  )
                    try {
                      r = t.curve(n);
                    } catch (t) {
                      return (
                        Qt().error(Pa, 'step curve failed: ' + t, t),
                        void this.Fa(!1, 0)
                      );
                    }
                } else (n = 1), (r = 1);
                1 == n && (t.completed = !0);
                try {
                  t.func(r, t.completed);
                } catch (t) {
                  return (
                    Qt().error(Pa, 'step mutate failed: ' + t, t),
                    void this.Fa(!1, 0)
                  );
                }
              }),
              t
            );
          })();
        function Ma(t, i) {
          for (var n, r = i.lastElementChild; r; r = r.previousElementSibling)
            if (r.getBoundingClientRect().height > 0) {
              var e = jr(t, r);
              if ('static' == e.position || 'relative' == e.position) {
                n = e;
                break;
              }
            }
          return n ? parseInt(n.marginBottom, 10) : 0;
        }
        var Sa = (function () {
            function t(t) {
              var i = this;
              (this.win = t), (this.Hs = pr(t));
              var n = this.win.document,
                r = n.documentElement,
                e = r.className;
              r.classList.add('i-amphtml-ios-embed');
              var s = n.createElement('html');
              (this.qa = s),
                (s.id = 'i-amphtml-wrapper'),
                (s.className = e),
                (this.$a = new Or()),
                (this.Wa = new Or()),
                (this.Ka = this.Ya.bind(this)),
                (this.Ja = function () {
                  return i.Wa.fire();
                }),
                (this.Xa = 0),
                (this.Qa = !1),
                Ii(n, this.Za.bind(this)),
                dn(n).then(function () {
                  r.classList.add('i-amphtml-ios-overscroll');
                }),
                Qt().fine('Viewport', 'initialized ios-embed-wrapper viewport');
            }
            var i = t.prototype;
            return (
              (i.ensureReadyForElements = function () {
                this.Za();
              }),
              (i.Za = function () {
                if (!this.Qa) {
                  this.Qa = !0;
                  var t = this.win.document,
                    i = t.body;
                  t.documentElement.appendChild(this.qa),
                    this.qa.appendChild(i),
                    Object.defineProperty(t, 'body', {
                      get: function () {
                        return i;
                      },
                    }),
                    this.Ya();
                }
              }),
              (i.connect = function () {
                this.win.addEventListener('resize', this.Ja),
                  this.qa.addEventListener('scroll', this.Ka);
              }),
              (i.disconnect = function () {
                this.win.removeEventListener('resize', this.Ja),
                  this.qa.removeEventListener('scroll', this.Ka);
              }),
              (i.getBorderTop = function () {
                return 1;
              }),
              (i.requiresFixedLayerTransfer = function () {
                return (
                  !Fe(this.win, 'ios-fixed-no-transfer') ||
                  parseFloat(or(this.win).getIosVersionString()) < 12.2
                );
              }),
              (i.overrideGlobalScrollTo = function () {
                return !0;
              }),
              (i.supportsPositionFixed = function () {
                return !0;
              }),
              (i.onScroll = function (t) {
                this.$a.add(t);
              }),
              (i.onResize = function (t) {
                this.Wa.add(t);
              }),
              (i.updatePaddingTop = function (t) {
                (this.Xa = t), _r(this.qa, { 'padding-top': Dr(t) });
              }),
              (i.hideViewerHeader = function (t, i) {
                t || this.updatePaddingTop(0);
              }),
              (i.showViewerHeader = function (t, i) {
                t || this.updatePaddingTop(i);
              }),
              (i.disableScroll = function () {
                this.qa.classList.add('i-amphtml-scroll-disabled');
              }),
              (i.resetScroll = function () {
                this.qa.classList.remove('i-amphtml-scroll-disabled');
              }),
              (i.updateLightboxMode = function (t) {
                return h();
              }),
              (i.getSize = function () {
                return {
                  width: this.win.innerWidth,
                  height: this.win.innerHeight,
                };
              }),
              (i.getScrollTop = function () {
                return this.qa.scrollTop;
              }),
              (i.getScrollLeft = function () {
                return 0;
              }),
              (i.getScrollWidth = function () {
                return this.qa.scrollWidth;
              }),
              (i.getScrollHeight = function () {
                return this.qa.scrollHeight;
              }),
              (i.getContentHeight = function () {
                var t = this.win.document.body,
                  i = t.getBoundingClientRect().height,
                  n = Ma(this.win, t),
                  r = jr(this.win, t);
                return (
                  parseInt(r.marginTop, 10) +
                  this.Xa +
                  i +
                  n +
                  parseInt(r.marginBottom, 10)
                );
              }),
              (i.contentHeightChanged = function () {}),
              (i.getLayoutRect = function (t, i, n) {
                var r = t.getBoundingClientRect(),
                  e = null != n ? n : this.getScrollTop(),
                  s = null != i ? i : this.getScrollLeft();
                return zi(
                  Math.round(r.left + s),
                  Math.round(r.top + e),
                  Math.round(r.width),
                  Math.round(r.height),
                );
              }),
              (i.getRootClientRectAsync = function () {
                return Promise.resolve(null);
              }),
              (i.setScrollTop = function (t) {
                this.qa.scrollTop = t || 1;
              }),
              (i.Ya = function (t) {
                0 == this.qa.scrollTop &&
                  ((this.qa.scrollTop = 1), t && t.preventDefault()),
                  t && this.$a.fire();
              }),
              (i.getScrollingElement = function () {
                return this.qa;
              }),
              (i.getScrollingElementScrollsLikeViewport = function () {
                return !1;
              }),
              t
            );
          })(),
          Ra = (function () {
            function t(t) {
              var i = this;
              (this.ampdoc = t),
                (this.win = t.win),
                (this.Ks = or(this.win)),
                (this.$a = new Or()),
                (this.Wa = new Or()),
                (this.Ka = this.tc.bind(this)),
                (this.Ja = function () {
                  return i.Wa.fire();
                }),
                Qt().fine('Viewport', 'initialized natural viewport');
            }
            var i = t.prototype;
            return (
              (i.tc = function () {
                this.$a.fire();
              }),
              (i.connect = function () {
                this.win.addEventListener('scroll', this.Ka),
                  this.win.addEventListener('resize', this.Ja);
              }),
              (i.disconnect = function () {
                this.win.removeEventListener('scroll', this.Ka),
                  this.win.removeEventListener('resize', this.Ja);
              }),
              (i.ensureReadyForElements = function () {}),
              (i.getBorderTop = function () {
                return 0;
              }),
              (i.requiresFixedLayerTransfer = function () {
                return !1;
              }),
              (i.overrideGlobalScrollTo = function () {
                return !1;
              }),
              (i.supportsPositionFixed = function () {
                return !0;
              }),
              (i.onScroll = function (t) {
                this.$a.add(t);
              }),
              (i.onResize = function (t) {
                this.Wa.add(t);
              }),
              (i.updatePaddingTop = function (t) {
                _r(this.win.document.documentElement, { 'padding-top': Dr(t) });
              }),
              (i.hideViewerHeader = function (t, i) {
                t || this.updatePaddingTop(0);
              }),
              (i.showViewerHeader = function (t, i) {
                t || this.updatePaddingTop(i);
              }),
              (i.disableScroll = function () {
                this.win.document.documentElement.classList.add(
                  'i-amphtml-scroll-disabled',
                );
              }),
              (i.resetScroll = function () {
                this.win.document.documentElement.classList.remove(
                  'i-amphtml-scroll-disabled',
                );
              }),
              (i.updateLightboxMode = function (t) {
                return h();
              }),
              (i.getSize = function () {
                var t = this.win.innerWidth,
                  i = this.win.innerHeight;
                if (t && i) return { width: t, height: i };
                var n = this.win.document.documentElement;
                return { width: n.clientWidth, height: n.clientHeight };
              }),
              (i.getScrollTop = function () {
                var t =
                    this.getScrollingElement().scrollTop ||
                    this.win.pageYOffset,
                  i = this.ampdoc.getRootNode().host;
                return i ? t - i.offsetTop : t;
              }),
              (i.getScrollLeft = function () {
                return 0;
              }),
              (i.getScrollWidth = function () {
                return this.getScrollingElement().scrollWidth;
              }),
              (i.getScrollHeight = function () {
                return this.getScrollingElement().scrollHeight;
              }),
              (i.getContentHeight = function () {
                var t = this.getScrollingElement(),
                  i = t.getBoundingClientRect(),
                  n = i.top + this.getScrollTop(),
                  r = or(this.win).isSafari() ? Ma(this.win, t) : 0,
                  e = jr(this.win, t);
                return (
                  n +
                  parseInt(e.marginTop, 10) +
                  i.height +
                  r +
                  parseInt(e.marginBottom, 10)
                );
              }),
              (i.contentHeightChanged = function () {}),
              (i.getLayoutRect = function (t, i, n) {
                var r = t.getBoundingClientRect(),
                  e = null != n ? n : this.getScrollTop(),
                  s = null != i ? i : this.getScrollLeft();
                return zi(
                  Math.round(r.left + s),
                  Math.round(r.top + e),
                  Math.round(r.width),
                  Math.round(r.height),
                );
              }),
              (i.getRootClientRectAsync = function () {
                return Promise.resolve(null);
              }),
              (i.setScrollTop = function (t) {
                this.getScrollingElement().scrollTop = t;
              }),
              (i.getScrollingElement = function () {
                var t = this.win.document;
                return t.scrollingElement
                  ? t.scrollingElement
                  : t.body && this.Ks.isWebKit()
                    ? t.body
                    : t.documentElement;
              }),
              (i.getScrollingElementScrollsLikeViewport = function () {
                return !0;
              }),
              t
            );
          })(),
          _a = 'Viewport';
        function ka(t, i, n) {
          return (function (t, i, n) {
            var r = parseInt(jr(t, i)[n], 10);
            return isNaN(r) ? 0 : r;
          })(t, i === t.document.body ? t.document.documentElement : i, n);
        }
        function Ca(t, i) {
          return ka(t, i, 'scrollPaddingTop');
        }
        var Na = (function () {
          function t(t, i, n) {
            var r = this,
              e = t.win;
            (this.ampdoc = t),
              (this.ic = this.ampdoc.win.document),
              (this.Ke = i),
              (this.Ae = n),
              (this.nc = null),
              (this.Ht = null),
              (this.rc = null),
              (this.ec = !1),
              (this.sc = null),
              (this.Xa = Number(n.getParam('paddingTop') || 0)),
              (this.oc = 0),
              (this.$r = fr(e)),
              (this.Hs = pr(e)),
              (this.uc = !1),
              (this.an = null),
              (this.hc = 0),
              (this.ac = new Or()),
              (this.$a = new Or()),
              (this.Wa = new Or()),
              (this.cc = void 0),
              (this.fc = void 0),
              (this.lc = null),
              this.Ae.onMessage('viewport', this.vc.bind(this)),
              this.Ae.onMessage('scroll', this.dc.bind(this)),
              this.Ae.onMessage('disableScroll', this.mc.bind(this)),
              this.Ae.isEmbedded() && this.Ke.updatePaddingTop(this.Xa),
              this.Ke.onScroll(this.bc.bind(this)),
              this.Ke.onResize(this.gc.bind(this)),
              this.onScroll(this.yc.bind(this)),
              (this.Ho = !1),
              this.ampdoc.onVisibilityChanged(this.wc.bind(this)),
              this.wc();
            var s = this.ic.documentElement;
            if (
              (t.isSingleDoc() && s.classList.add('i-amphtml-singledoc'),
              n.isEmbedded()
                ? s.classList.add('i-amphtml-embedded')
                : s.classList.add('i-amphtml-standalone'),
              Ni(e) && s.classList.add('i-amphtml-iframed'),
              '1' === n.getParam('webview') &&
                s.classList.add('i-amphtml-webview'),
              Ni(e) &&
                'scrollRestoration' in e.history &&
                (e.history.scrollRestoration = 'manual'),
              this.Ke.overrideGlobalScrollTo())
            )
              try {
                Object.defineProperty(e, 'scrollTo', {
                  value: function (t, i) {
                    return r.setScrollTop(i);
                  },
                }),
                  ['pageYOffset', 'scrollY'].forEach(function (t) {
                    Object.defineProperty(e, t, {
                      get: function () {
                        return r.getScrollTop();
                      },
                    });
                  });
              } catch (t) {}
            or(e).isIos() &&
              Ni(e) &&
              this.ampdoc.isSingleDoc() &&
              this.ampdoc.whenReady().then(function () {
                e.scrollTo(-0.1, 0);
              });
          }
          var i = t.prototype;
          return (
            (i.dispose = function () {
              this.Ke.disconnect();
            }),
            (i.ensureReadyForElements = function () {
              this.Ke.ensureReadyForElements();
            }),
            (i.wc = function () {
              var t = this.ampdoc.isVisible();
              t != this.Ho &&
                ((this.Ho = t),
                t
                  ? (this.Ke.connect(),
                    this.Ht && this.gc(),
                    this.rc && ((this.rc = null), this.getScrollTop()))
                  : this.Ke.disconnect());
            }),
            (i.getPaddingTop = function () {
              return this.Xa;
            }),
            (i.getScrollTop = function () {
              return (
                null == this.rc && (this.rc = this.Ke.getScrollTop()), this.rc
              );
            }),
            (i.getScrollLeft = function () {
              return (
                null == this.sc && (this.sc = this.Ke.getScrollLeft()), this.sc
              );
            }),
            (i.setScrollTop = function (t) {
              (this.rc = null), this.Ke.setScrollTop(t);
            }),
            (i.updatePaddingBottom = function (t) {
              this.ampdoc.waitForBodyOpen().then(function (i) {
                kr(i, 'borderBottom', ''.concat(t, 'px solid transparent'));
              });
            }),
            (i.getSize = function () {
              if (this.Ht) return this.Ht;
              if (
                ((this.Ht = this.Ke.getSize()),
                0 == this.Ht.width || 0 == this.Ht.height)
              ) {
                var t = this.ampdoc.getVisibilityState();
                (t != yr && t != Ar) ||
                  (Math.random() < 0.01 &&
                    Qt().error(_a, 'viewport has zero dimensions'));
              }
              return this.Ht;
            }),
            (i.getHeight = function () {
              return this.getSize().height;
            }),
            (i.getWidth = function () {
              return this.getSize().width;
            }),
            (i.getScrollWidth = function () {
              return this.Ke.getScrollWidth();
            }),
            (i.getScrollHeight = function () {
              return this.Ke.getScrollHeight();
            }),
            (i.getContentHeight = function () {
              return this.Ke.getContentHeight();
            }),
            (i.contentHeightChanged = function () {
              this.Ke.contentHeightChanged();
            }),
            (i.getRect = function () {
              if (null == this.nc) {
                var t = this.getScrollTop(),
                  i = this.getScrollLeft(),
                  n = this.getSize();
                this.nc = zi(i, t, n.width, n.height);
              }
              return this.nc;
            }),
            (i.getLayoutRect = function (t) {
              var i = this.getScrollLeft(),
                n = this.getScrollTop(),
                r = _n(t, this.ampdoc.win);
              if (r) {
                var e = this.Ke.getLayoutRect(t, 0, 0),
                  s = this.Ke.getLayoutRect(r, i, n);
                return zi(
                  Math.round(e.left + s.left),
                  Math.round(e.top + s.top),
                  Math.round(e.width),
                  Math.round(e.height),
                );
              }
              return this.Ke.getLayoutRect(t, i, n);
            }),
            (i.getClientRectAsync = function (t) {
              var i = this.Hs.measurePromise(function () {
                  return t.getBoundingClientRect();
                }),
                n = this.Ke.getRootClientRectAsync(),
                r = _n(t, this.ampdoc.win);
              return (
                r &&
                  (n = this.Hs.measurePromise(function () {
                    return r.getBoundingClientRect();
                  })),
                Promise.all([i, n]).then(function (t) {
                  var i,
                    n = t[0],
                    r = t[1];
                  return r
                    ? Gi(n, r.left, r.top)
                    : ((i = n),
                      zi(
                        Number(i.left),
                        Number(i.top),
                        Number(i.width),
                        Number(i.height),
                      ));
                })
              );
            }),
            (i.supportsPositionFixed = function () {
              return this.Ke.supportsPositionFixed();
            }),
            (i.isDeclaredFixed = function (t) {
              return !!this.lc && this.lc.isDeclaredFixed(t);
            }),
            (i.scrollIntoView = function (t) {
              var i = this;
              return this.Ac(t).then(function (n) {
                return i.xc(t, n);
              });
            }),
            (i.xc = function (t, i) {
              var n = this,
                r = this.Ke.getLayoutRect(t).top,
                e = Ca(this.ampdoc.win, i);
              c(function () {
                return Math.max(0, r - n.Xa - e);
              }).then(function (t) {
                return n.Ec(i, t);
              });
            }),
            (i.animateScrollIntoView = function (t) {
              var i = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 'top',
                r = arguments.length > 2 ? arguments[2] : void 0,
                e = arguments.length > 3 ? arguments[3] : void 0;
              return (
                Zt(!e || void 0 !== r),
                this.Ac(t).then(function (s) {
                  return i.animateScrollWithinParent(t, s, n, r, e);
                })
              );
            }),
            (i.animateScrollWithinParent = function (t, i, n, r, e) {
              var s = this;
              Zt(!e || void 0 !== r);
              var u = this.Ke.getLayoutRect(t),
                o = (this.Oc(i) ? this.getSize() : this.getLayoutRect(i))
                  .height,
                h = this.ampdoc.win,
                a = Ca(h, i),
                c = (function (t, i) {
                  return ka(t, i, 'scrollPaddingBottom');
                })(h, i),
                f = -a;
              return (
                'bottom' === n
                  ? (f = -o + c + u.height)
                  : 'center' === n && (f = -(o - a - c) / 2 + u.height / 2),
                this.Tc(i).then(function (t) {
                  var n = u.top - s.Xa + f,
                    o = Math.max(0, n);
                  if (o != t) return s.Pc(i, t, o, r, e);
                })
              );
            }),
            (i.Pc = function (t, i, n, r) {
              var e = this,
                s =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 'ease-in',
                u = void 0 !== r ? r : Da(i, n),
                o = ba(i, n);
              return Ia.animate(
                t,
                function (i) {
                  e.Ec(t, o(i));
                },
                u,
                s,
              ).thenAlways(function () {
                e.Ec(t, n);
              });
            }),
            (i.Ac = function (t) {
              var i = this;
              return this.Hs.measurePromise(function () {
                return (
                  yi(t, '.i-amphtml-scrollable') || i.Ke.getScrollingElement()
                );
              });
            }),
            (i.Ec = function (t, i) {
              this.Oc(t)
                ? this.Ke.setScrollTop(i)
                : this.Hs.mutate(function () {
                    t.scrollTop = i;
                  });
            }),
            (i.Tc = function (t) {
              var i = this;
              return this.Oc(t)
                ? c(function () {
                    return i.getScrollTop();
                  })
                : this.Hs.measurePromise(function () {
                    return t.scrollTop;
                  });
            }),
            (i.Oc = function (t) {
              return t == this.Ke.getScrollingElement();
            }),
            (i.getScrollingElement = function () {
              return this.an
                ? this.an
                : (this.an = this.Ke.getScrollingElement());
            }),
            (i.onChanged = function (t) {
              return this.ac.add(t);
            }),
            (i.onScroll = function (t) {
              return this.$a.add(t);
            }),
            (i.onResize = function (t) {
              return this.Wa.add(t);
            }),
            (i.enterLightboxMode = function (t, i) {
              return (
                this.Ae.sendMessage('requestFullOverlay', {}, !0),
                this.enterOverlayMode(),
                this.lc && this.lc.enterLightbox(t, i),
                t && this.maybeEnterFieLightboxMode(t),
                this.Ke.updateLightboxMode(!0)
              );
            }),
            (i.leaveLightboxMode = function (t) {
              return (
                this.Ae.sendMessage('cancelFullOverlay', {}, !0),
                this.lc && this.lc.leaveLightbox(),
                this.leaveOverlayMode(),
                t && this.maybeLeaveFieLightboxMode(t),
                this.Ke.updateLightboxMode(!1)
              );
            }),
            (i.isLightboxExperimentOn = function () {
              return Fe(this.ampdoc.win, 'amp-lightbox-a4a-proto');
            }),
            (i.maybeEnterFieLightboxMode = function (t) {
              var i = this.Ic(t);
              i &&
                (Zt(this.isLightboxExperimentOn()), i.enterFullOverlayMode());
            }),
            (i.maybeLeaveFieLightboxMode = function (t) {
              var i = this.Ic(t);
              i && Zt(i).leaveFullOverlayMode();
            }),
            (i.Ic = function (t) {
              var i = _n(t, this.ampdoc.win);
              return i && i.__AMP_EMBED__;
            }),
            (i.enterOverlayMode = function () {
              this.disableTouchZoom(), this.disableScroll();
            }),
            (i.leaveOverlayMode = function () {
              this.resetScroll(), this.restoreOriginalTouchZoom();
            }),
            (i.disableScroll = function () {
              var t,
                i = this,
                n = this.ampdoc.win,
                r = n.document.documentElement;
              this.Hs.measure(function () {
                var e = jr(n, r).marginRight,
                  s = (function (t) {
                    var i = t.document.documentElement;
                    return t.innerWidth - i.clientWidth;
                  })(i.ampdoc.win);
                t = parseInt(e, 10) + s;
              }),
                this.Hs.mutate(function () {
                  kr(r, 'margin-right', t, 'px'), i.Ke.disableScroll();
                });
            }),
            (i.resetScroll = function () {
              var t = this,
                i = this.ampdoc.win.document.documentElement;
              this.Hs.mutate(function () {
                kr(i, 'margin-right', ''), t.Ke.resetScroll();
              });
            }),
            (i.resetTouchZoom = function () {
              var t = this,
                i = this.ampdoc.win.innerHeight,
                n = this.ic.documentElement.clientHeight;
              (i && n && i === n) ||
                (this.disableTouchZoom() &&
                  this.$r.delay(function () {
                    t.restoreOriginalTouchZoom();
                  }, 50));
            }),
            (i.disableTouchZoom = function () {
              var t = this.Sc();
              if (!t) return !1;
              var i = (function (t, i) {
                var n = (function (t) {
                    var i = Object.create(null);
                    if (!t) return i;
                    for (var n = t.split(/,|;/), r = 0; r < n.length; r++) {
                      var e = n[r].split('='),
                        s = e[0].trim(),
                        u = e[1];
                      (u = (u || '').trim()), s && (i[s] = u);
                    }
                    return i;
                  })(t),
                  r = !1;
                for (var e in i)
                  n[e] !== i[e] &&
                    ((r = !0), void 0 !== i[e] ? (n[e] = i[e]) : delete n[e]);
                return r
                  ? (function (t) {
                      var i = '';
                      for (var n in t)
                        i.length > 0 && (i += ','),
                          t[n] ? (i += n + '=' + t[n]) : (i += n);
                      return i;
                    })(n)
                  : t;
              })(t.content, { 'maximum-scale': '1', 'user-scalable': 'no' });
              return this.Mc(i);
            }),
            (i.restoreOriginalTouchZoom = function () {
              return void 0 !== this.fc && this.Mc(this.fc);
            }),
            (i.updateFixedLayer = function () {
              return this.lc ? this.lc.update() : h();
            }),
            (i.addToFixedLayer = function (t, i) {
              return this.lc ? this.lc.addElement(t, i) : h();
            }),
            (i.removeFromFixedLayer = function (t) {
              this.lc && this.lc.removeElement(t);
            }),
            (i.createFixedLayer = function (t) {
              var i = this;
              (this.lc = new t(
                this.ampdoc,
                this.Hs,
                this.Ke.getBorderTop(),
                this.Xa,
                this.Ke.requiresFixedLayerTransfer(),
              )),
                this.ampdoc.whenReady().then(function () {
                  return i.lc.setup();
                });
            }),
            (i.Mc = function (t) {
              var i = this.Sc();
              return !(
                !i ||
                i.content == t ||
                (Qt().fine(_a, 'changed viewport meta to:', t),
                (i.content = t),
                0)
              );
            }),
            (i.Sc = function () {
              return Ni(this.ampdoc.win)
                ? null
                : (void 0 === this.cc &&
                    ((this.cc = this.ic.querySelector('meta[name=viewport]')),
                    this.cc && (this.fc = this.cc.content)),
                  this.cc);
            }),
            (i.dc = function (t) {
              var i = t.scrollTop;
              this.setScrollTop(i);
            }),
            (i.vc = function (t) {
              var i = this,
                n = t.paddingTop,
                r = t.duration || 0,
                e = t.curve,
                s = t.transient;
              if (
                null != n &&
                n != this.Xa &&
                ((this.oc = this.Xa), (this.Xa = n), this.lc)
              ) {
                var u = this.lc.animateFixedElements(this.Xa, this.oc, r, e, s);
                n < this.oc
                  ? this.Ke.hideViewerHeader(s, this.oc)
                  : u.then(function () {
                      i.Ke.showViewerHeader(s, n);
                    });
              }
            }),
            (i.mc = function (t) {
              t ? this.disableScroll() : this.resetScroll();
            }),
            (i.Rc = function (t, i) {
              var n = this.getSize(),
                r = this.getScrollTop(),
                e = this.getScrollLeft();
              Qt().fine(
                _a,
                'changed event:',
                'relayoutAll=',
                t,
                'top=',
                r,
                'left=',
                e,
                'bottom=',
                r + n.height,
                'velocity=',
                i,
              ),
                this.ac.fire({
                  relayoutAll: t,
                  top: r,
                  left: e,
                  width: n.width,
                  height: n.height,
                  velocity: i,
                });
            }),
            (i.bc = function () {
              var t = this;
              (this.nc = null), this.hc++, (this.sc = this.Ke.getScrollLeft());
              var i = this.Ke.getScrollTop();
              if (!(i < 0)) {
                if (((this.rc = i), !this.uc)) {
                  this.uc = !0;
                  var n = Date.now();
                  this.$r.delay(function () {
                    t.Hs.measure(function () {
                      t.fu(n, i);
                    });
                  }, 36);
                }
                this.$a.fire();
              }
            }),
            (i.fu = function (t, i) {
              var n = this;
              this.rc = this.Ke.getScrollTop();
              var r = this.rc,
                e = Date.now(),
                s = 0;
              e != t && (s = (r - i) / (e - t)),
                Qt().fine(_a, 'scroll: scrollTop=' + r + '; velocity=' + s),
                Math.abs(s) < 0.03
                  ? (this.Rc(!1, s), (this.uc = !1))
                  : this.$r.delay(function () {
                      return n.Hs.measure(n.fu.bind(n, e, r));
                    }, 20);
            }),
            (i.yc = function () {
              var t = this;
              this.ec ||
                ((this.ec = !0),
                this.Hs.measure(function () {
                  (t.ec = !1),
                    t.Ae.sendMessage(
                      'scroll',
                      { scrollTop: t.getScrollTop() },
                      !0,
                    );
                }));
            }),
            (i.gc = function () {
              var t = this;
              this.nc = null;
              var i = this.Ht;
              this.Ht = null;
              var n = this.getSize();
              this.updateFixedLayer().then(function () {
                var r = !i || i.width != n.width;
                t.Rc(r, 0),
                  (r || i.height != n.height) &&
                    t.Wa.fire({
                      relayoutAll: r,
                      width: n.width,
                      height: n.height,
                    });
              });
            }),
            t
          );
        })();
        function Da(t, i) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 500;
          return Math.floor(ya(0.65 * Math.abs(t - i), 0, n));
        }
        function ja(t) {
          var i,
            n = mr(t),
            r = t.win;
          return (
            (i =
              t.isSingleDoc() &&
              (function (t, i) {
                return or(t).isIos() &&
                  Ni(t) &&
                  i.isEmbedded() &&
                  !i.hasCapability('iframeScroll')
                  ? Ua.NATURAL_IOS_EMBED
                  : Ua.NATURAL;
              })(r, n) == Ua.NATURAL_IOS_EMBED
                ? new Sa(r)
                : new Ra(t)),
            new Na(t, i, n)
          );
        }
        var Ua = { NATURAL: 'natural', NATURAL_IOS_EMBED: 'natural-ios-embed' },
          La = (function () {
            function t(t) {
              (this.win = t),
                (this._c = Jn(this.win)),
                (this.kc = this.Nc()),
                (this.kn = []),
                (this.Cc = []),
                (this.Rs = []),
                (this.jc = []),
                (this.Yr = !1),
                (this.Dc = null),
                (this.Uc = null),
                (this.zc = this.Lc.bind(this)),
                (this.Hc = new Uu(this.win, this.zc, 16)),
                (this.Gc = new Uu(this.win, this.zc, 40)),
                (this.Vc = this.Fc.bind(this)),
                this._c.isSingleDoc()
                  ? this._c.getSingleDoc().onVisibilityChanged(this.Vc)
                  : Lr(this.win.document, this.Vc);
            }
            var i = t.prototype;
            return (
              (i.dispose = function () {
                zr(this.win.document, this.Vc);
              }),
              (i.Fc = function () {
                this.Yr && this.Bc();
              }),
              (i.run = function (t, i) {
                this.kn.push(t), this.Rs.push(i || void 0), this.zn();
              }),
              (i.runPromise = function (t, i) {
                if ((this.run(t, i), this.Dc)) return this.Dc;
                var n = new a();
                return (this.Uc = n.resolve), (this.Dc = n.promise);
              }),
              (i.createTask = function (t) {
                var i = this;
                return function (n) {
                  i.run(t, n);
                };
              }),
              (i.mutate = function (t) {
                this.run({ measure: void 0, mutate: t });
              }),
              (i.mutatePromise = function (t) {
                return this.runPromise({ measure: void 0, mutate: t });
              }),
              (i.measure = function (t) {
                this.run({ measure: t, mutate: void 0 });
              }),
              (i.measurePromise = function (t) {
                var i = this;
                return new Promise(function (n) {
                  i.measure(function () {
                    n(t());
                  });
                });
              }),
              (i.canAnimate = function (t) {
                return this.qc(Zt(t));
              }),
              (i.qc = function (t) {
                if (Ur(this.win.document) != Ar) return !1;
                if (this._c.isSingleDoc())
                  return this._c.getSingleDoc().isVisible();
                if (t) {
                  var i = this._c.getAmpDocIfAvailable(t);
                  return !i || i.isVisible();
                }
                return !0;
              }),
              (i.runAnim = function (t, i, n) {
                return this.qc(t)
                  ? (this.run(i, n), !0)
                  : (Qt().warn(
                      'VSYNC',
                      'Did not schedule a vsync request, because document was invisible',
                    ),
                    !1);
              }),
              (i.createAnimTask = function (t, i) {
                var n = this;
                return function (r) {
                  return n.runAnim(t, i, r);
                };
              }),
              (i.runAnimMutateSeries = function (t, i, n) {
                var r = this;
                return this.qc(t)
                  ? new Promise(function (e, s) {
                      var u = Date.now(),
                        o = 0,
                        h = r.createAnimTask(t, {
                          mutate: function (t) {
                            var r = Date.now() - u;
                            i(r, r - o, t)
                              ? n && r > n
                                ? s(new Error('timeout'))
                                : ((o = r), h(t))
                              : e();
                          },
                        });
                      h({});
                    })
                  : Promise.reject(Ls());
              }),
              (i.zn = function () {
                this.Yr || ((this.Yr = !0), this.Bc());
              }),
              (i.Bc = function () {
                this.qc()
                  ? (this.kc(this.zc), this.Gc.schedule())
                  : this.Hc.schedule();
              }),
              (i.Lc = function () {
                this.Gc.cancel(), (this.Yr = !1);
                var t = this.Uc,
                  i = this.Rs,
                  n = this.kn;
                (this.Uc = null),
                  (this.Dc = null),
                  (this.kn = this.Cc),
                  (this.Rs = this.jc);
                for (var r = 0; r < n.length; r++)
                  n[r].measure &&
                    (za(n[r].measure, i[r]) || (n[r].mutate = void 0));
                for (var e = 0; e < n.length; e++)
                  n[e].mutate && za(n[e].mutate, i[e]);
                (this.Cc = n),
                  (this.jc = i),
                  (this.Cc.length = 0),
                  (this.jc.length = 0),
                  t && t();
              }),
              (i.Nc = function () {
                var t = this,
                  i =
                    this.win.requestAnimationFrame ||
                    this.win.webkitRequestAnimationFrame;
                if (i) return i.bind(this.win);
                var n = 0;
                return function (i) {
                  var r = Date.now(),
                    e = Math.max(0, 16 - (r - n));
                  (n = r + e), t.win.setTimeout(i, e);
                };
              }),
              t
            );
          })();
        function za(t, i) {
          Zt(t);
          try {
            void 0 !== t(i) &&
              Qt().error(
                'VSYNC',
                'callback returned a value but vsync cannot propogate it: %s',
                t.toString(),
              );
          } catch (t) {
            return d(t), !1;
          }
          return !0;
        }
        function Ha(t) {
          if (!t.defaultPrevented) {
            var i = t.target;
            if (i && 'FORM' == i.tagName) {
              (i.classList.contains('i-amphtml-form')
                ? !i.hasAttribute('amp-novalidate')
                : !i.hasAttribute('novalidate')) &&
                i.checkValidity &&
                !i.checkValidity() &&
                t.preventDefault();
              for (var n = i.elements, r = 0; r < n.length; r++)
                ti(
                  !n[r].name || n[r].name != vs,
                  'Illegal input name, %s found: %s',
                  vs,
                  n[r],
                );
              var e = i.getAttribute('action'),
                s = i.getAttribute('action-xhr'),
                u = (i.getAttribute('method') || 'GET').toUpperCase();
              s &&
                (xs(s, i, 'action-xhr'),
                ti(!Ps(s), 'form action-xhr should not be on AMP CDN: %s', i),
                ks(s)),
                e &&
                  (xs(e, i, 'action'),
                  ti(!Ps(e), 'form action should not be on AMP CDN: %s', i),
                  ks(e)),
                'GET' == u
                  ? ti(
                      s || e,
                      'form action-xhr or action attribute is required for method=GET: %s',
                      i,
                    )
                  : 'POST' == u &&
                    (e &&
                      Jt().error(
                        'form',
                        'action attribute is invalid for method=POST: %s',
                        i,
                      ),
                    s ||
                      (t.preventDefault(),
                      ti(
                        !1,
                        'Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s',
                        i,
                      )));
              var o = i.getAttribute('target');
              o
                ? ti(
                    '_blank' == o || '_top' == o,
                    'form target=%s is invalid can only be _blank or _top: %s',
                    o,
                    i,
                  )
                : i.setAttribute('target', '_top'),
                s &&
                  (t.preventDefault(),
                  t.stopImmediatePropagation(),
                  Wn(i).execute(i, 'submit', null, i, i, t, 3));
            }
          }
        }
        var Ga = 'Input',
          Va = (function () {
            function t(t) {
              (this.win = t),
                (this.$c = this.Wc.bind(this)),
                (this.Kc = this.Yc.bind(this)),
                (this.Jc = null),
                (this.Xc = null),
                (this.Qc = null),
                (this.Zc =
                  'ontouchstart' in t ||
                  (void 0 !== t.navigator.maxTouchPoints &&
                    t.navigator.maxTouchPoints > 0) ||
                  void 0 !== t.DocumentTouch),
                Qt().fine(Ga, 'touch detected:', this.Zc),
                (this.tf = !1),
                this.win.document.addEventListener('keydown', this.$c),
                this.win.document.addEventListener('mousedown', this.Kc),
                (this.if = !0),
                (this.nf = 0),
                (this.rf = new Or()),
                (this.ef = new Or()),
                (this.sf = new Or()),
                this.Zc &&
                  ((this.if = !this.Zc),
                  (this.Jc = this.uf.bind(this)),
                  Qe(t.document, 'mousemove', this.Jc));
            }
            var i = t.prototype;
            return (
              (i.setupInputModeClasses = function (t) {
                var i = this;
                this.onTouchDetected(function (n) {
                  i.hf(t, 'amp-mode-touch', n);
                }, !0),
                  this.onMouseDetected(function (n) {
                    i.hf(t, 'amp-mode-mouse', n);
                  }, !0),
                  this.onKeyboardStateChanged(function (n) {
                    i.hf(t, 'amp-mode-keyboard-active', n);
                  }, !0);
              }),
              (i.isTouchDetected = function () {
                return this.Zc;
              }),
              (i.onTouchDetected = function (t, i) {
                return i && t(this.isTouchDetected()), this.rf.add(t);
              }),
              (i.isMouseDetected = function () {
                return this.if;
              }),
              (i.onMouseDetected = function (t, i) {
                return i && t(this.isMouseDetected()), this.ef.add(t);
              }),
              (i.isKeyboardActive = function () {
                return this.tf;
              }),
              (i.onKeyboardStateChanged = function (t, i) {
                return i && t(this.isKeyboardActive()), this.sf.add(t);
              }),
              (i.hf = function (t, i, n) {
                var r = this;
                t.waitForBodyOpen().then(function (t) {
                  pr(r.win).mutate(function () {
                    t.classList.toggle(i, n);
                  });
                });
              }),
              (i.Wc = function (t) {
                if (!this.tf && !t.defaultPrevented) {
                  var i = t.target;
                  (i &&
                    ('INPUT' == i.tagName ||
                      'TEXTAREA' == i.tagName ||
                      'SELECT' == i.tagName ||
                      'OPTION' == i.tagName ||
                      i.hasAttribute('contenteditable'))) ||
                    ((this.tf = !0),
                    this.sf.fire(!0),
                    Qt().fine(Ga, 'keyboard activated'));
                }
              }),
              (i.Yc = function () {
                this.tf &&
                  ((this.tf = !1),
                  this.sf.fire(!1),
                  Qt().fine(Ga, 'keyboard deactivated'));
              }),
              (i.uf = function (t) {
                var i = this;
                if (
                  !t.sourceCapabilities ||
                  !t.sourceCapabilities.firesTouchEvents
                ) {
                  var n;
                  this.Qc ||
                    ((this.Qc = this.af.bind(this)),
                    (this.Xc = this.cf.bind(this)));
                  var r = (function (t, i, n, r) {
                    var e,
                      s = new Promise(function (i) {
                        e = Qe(t, 'click', i, void 0);
                      });
                    return s.then(e, e), r && r(e), s;
                  })(this.win.document, 0, 0, function (t) {
                    n = t;
                  });
                  return fr(this.win)
                    .timeoutPromise(300, r)
                    .then(this.Xc, function () {
                      n && n(), i.Qc();
                    });
                }
                this.cf();
              }),
              (i.af = function () {
                (this.if = !0),
                  this.ef.fire(!0),
                  Qt().fine(Ga, 'mouse detected');
              }),
              (i.cf = function () {
                this.nf++,
                  this.nf <= 3
                    ? Qe(this.win.document, 'mousemove', this.Jc)
                    : Qt().fine(Ga, 'mouse detection failed');
              }),
              t
            );
          })(),
          Fa = ['<link rel=preload referrerpolicy=origin>'],
          Ba = 18e4,
          qa = null,
          $a = (function () {
            function t(t) {
              (this.ff = t.document),
                (this.lf = t.document.head),
                (this.vf = {}),
                (this.df = {}),
                (this.Ks = or(t)),
                (this.vf[ms(t.location.href).origin] = !0),
                (this.mf = (function (t) {
                  if (!qa) {
                    var i = t.document.createElement('link'),
                      n = i.relList;
                    if (((i.as = 'invalid-value'), !n || !n.supports))
                      return {};
                    qa = {
                      preconnect: n.supports('preconnect'),
                      preload: n.supports('preload'),
                      onlyValidAs: 'invalid-value' != i.as,
                    };
                  }
                  return qa;
                })(t)),
                (this.$r = fr(t));
            }
            var i = t.prototype;
            return (
              (i.url = function (t, i, n) {
                var r = this;
                t.whenFirstVisible().then(function () {
                  r.si(t, i, n);
                });
              }),
              (i.si = function (t, i, n) {
                if (this.pf(i)) {
                  var r = ms(i).origin,
                    e = Date.now(),
                    s = this.vf[r];
                  if (s && e < s) n && (this.vf[r] = e + Ba);
                  else {
                    var u,
                      o = n ? Ba : 1e4;
                    (this.vf[r] = e + o),
                      this.mf.preconnect ||
                        ((u = this.ff.createElement('link')).setAttribute(
                          'rel',
                          'dns-prefetch',
                        ),
                        u.setAttribute('href', r),
                        this.lf.appendChild(u));
                    var h = this.ff.createElement('link');
                    h.setAttribute('rel', 'preconnect'),
                      h.setAttribute('href', r),
                      h.setAttribute('referrerpolicy', 'origin'),
                      this.lf.appendChild(h),
                      this.$r.delay(function () {
                        u && u.parentNode && u.parentNode.removeChild(u),
                          h.parentNode && h.parentNode.removeChild(h);
                      }, 1e4),
                      this.bf(t, r);
                  }
                }
              }),
              (i.preload = function (t, i, n) {
                var r = this;
                this.pf(i) &&
                  (this.df[i] ||
                    ((this.df[i] = !0),
                    this.url(t, i, !0),
                    this.mf.preload &&
                      (('document' == n && this.Ks.isSafari()) ||
                        t.whenFirstVisible().then(function () {
                          r.gf(i);
                        }))));
              }),
              (i.gf = function (t) {
                var i = Ne(this.ff)(Fa);
                i.setAttribute('href', t),
                  this.mf.onlyValidAs ? (i.as = 'fetch') : (i.as = ''),
                  this.lf.appendChild(i);
              }),
              (i.pf = function (t) {
                return !(!t.startsWith('https:') && !t.startsWith('http:'));
              }),
              (i.bf = function (t, i) {
                if (
                  !this.mf.preconnect &&
                  (this.Ks.isSafari() || this.Ks.isIos())
                ) {
                  var n = Date.now();
                  this.vf[i] = n + Ba;
                  var r =
                      i +
                      '/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=' +
                      (n - (n % Ba)),
                    e = new XMLHttpRequest();
                  e.open('HEAD', r, !0), (e.withCredentials = !0), e.send();
                }
              }),
              t
            );
          })();
        function Wa(t) {
          var i;
          !(function (t) {
            En(t, 'crypto', ih);
          })(t),
            En(t, 'batched-xhr', bo),
            Dh(t),
            ta(t),
            ta((i = t)),
            En(i, 'vsync', La),
            (function (t) {
              En(t, 'xhr', go);
            })(t),
            (function (t) {
              En(t, 'input', Va);
            })(t),
            (function (t) {
              En(t, 'preconnect', $a);
            })(t);
        }
        function Ya(t) {
          Zt(!t.getParent()),
            (function (t, i) {
              (function (t) {
                Pn(t, 'url', ia, !0);
              })(t),
                (function (t) {
                  Pn(t, 'templates', Qh);
                })(t),
                Pn(t, 'documentInfo', rh),
                (function (t) {
                  Pn(t, 'cid', qo);
                })(t),
                (function (t) {
                  Pn(t, 'viewer', pa, !0);
                })(t),
                (function (t) {
                  Pn(t, 'viewport', ja, !0);
                })(t),
                (function (t) {
                  Pn(t, 'hidden-observer', sh);
                })(t),
                (function (t) {
                  Pn(t, 'history', lh);
                })(t),
                (function (t) {
                  Pn(t, 'resources', zh);
                })(t),
                (function (t) {
                  Pn(t, 'owners', Ch);
                })(t),
                (function (t) {
                  Pn(t, 'mutator', bh);
                })(t),
                (function (t) {
                  Pn(t, 'url-replace', function (t) {
                    return new va(t, new la(t));
                  });
                })(t),
                (function (t) {
                  Pn(t, 'action', Ku, !0);
                })(t),
                (function (t) {
                  Pn(t, 'standard-actions', Bh, !0);
                })(t),
                (function (t) {
                  Pn(
                    t,
                    'storage',
                    function () {
                      var i = mr(t),
                        n = parseInt(i.getParam('storage'), 10)
                          ? new Kh(i)
                          : new Yh(t.win);
                      return new $h(t, i, n).th();
                    },
                    !0,
                  );
                })(t),
                (function (t) {
                  Pn(t, Ph, Sh, !0);
                })(t),
                (function (t) {
                  t.whenExtensionsKnown().then(function () {
                    t.declaresExtension('amp-form') &&
                      t.getRootNode().addEventListener('submit', Ha, !0);
                  });
                })(t),
                Pn(t, 'loadingIndicator', mh);
            })(t);
        }
        function Ka(t) {
          return t.waitForBodyOpen().then(function () {
            var i,
              n,
              r = t.getBody(),
              e =
                ((i = r),
                (n = function () {
                  return !!r.firstElementChild;
                }),
                new Promise(function (t) {
                  Oi(i, n, t);
                }));
            return fr(t.win)
              .timeoutPromise(2e3, e)
              .then(
                function () {
                  return 'AMP-STORY' === r.firstElementChild.tagName;
                },
                function () {
                  return !1;
                },
              );
          });
        }
        var Ja = ['AMP-AD', 'AMP-ANALYTICS', 'AMP-PIXEL', 'AMP-AD-EXIT'];
        function Xa(t) {
          if (null == t) return 0;
          var i = (function (t) {
              for (var i = t; null != (t = t.parentNode); )
                t.nodeName.startsWith('AMP-') && (i = t);
              return i;
            })(t),
            n = i.nodeName;
          return 'IMG' === n || 'AMP-IMG' === n
            ? 1
            : 'VIDEO' === n || 'AMP-VIDEO' === n
              ? 2
              : 'AMP-CAROUSEL' === n
                ? 8
                : 'AMP-BASE-CAROUSEL' === n
                  ? 16
                  : 'AMP-AD' === n
                    ? 4
                    : !n.startsWith('AMP-') && i.textContent
                      ? 32
                      : 0;
        }
        var Qa = (function () {
          function t(t) {
            var i = this;
            (this.win = t),
              (this.rv = wo(lt(t, 16))),
              (this.uv = []),
              (this.ov =
                t.performance.timeOrigin ||
                t.performance.timing.navigationStart),
              (this.Ui = null),
              (this.Ae = null),
              (this.mi = null),
              (this.sv = null),
              (this.hv = !1),
              (this.av = !1),
              (this.fv = A()),
              (this.cv = void 0),
              (this.lv = new Ir()),
              (this.vv = 0),
              (this.dv = []),
              (this.mv = 0);
            var n =
              (this.win.PerformanceObserver &&
                this.win.PerformanceObserver.supportedEntryTypes) ||
              [];
            if (
              (n.includes('paint') ||
                this.lv.rejectSignal(
                  'fcp',
                  Qt().createExpectedError(
                    'First Contentful Paint not supported',
                  ),
                ),
              (this.pv = n.includes('layout-shift')),
              !this.pv)
            ) {
              var r = Qt().createExpectedError(
                'Cumulative Layout Shift not supported',
              );
              this.lv.rejectSignal(Zi, r), this.lv.rejectSignal(nn, r);
            }
            (this.gv = n.includes('first-input')),
              this.gv ||
                this.lv.rejectSignal(
                  'fid',
                  Qt().createExpectedError('First Input Delay not supported'),
                ),
              (this.bv = n.includes('largest-contentful-paint')),
              this.bv ||
                this.lv.rejectSignal(
                  'lcp',
                  Qt().createExpectedError(
                    'Largest Contentful Paint not supported',
                  ),
                ),
              (this.yv = n.includes('navigation')),
              (this.wv =
                n.includes('event') && Fe(t, 'interaction-to-next-paint')),
              this.wv ||
                this.lv.rejectSignal(
                  en,
                  Qt().createExpectedError(
                    'Interaction to next paint not supported',
                  ),
                ),
              (this.Av = this.Av.bind(this)),
              this.addEnabledExperiment('rtv-' + Dt(this.win).rtvVersion),
              dn(t.document).then(function () {
                i.tick('dr'), i.flush();
              }),
              mn(t.document).then(function () {
                return i.xv();
              }),
              mn(t.document).then(function () {
                return i.Ev(40);
              }),
              this.Pv(),
              (this.Tv = !1),
              (this.Ov = mt(
                t,
                function () {
                  i.Iv();
                },
                6e3,
              ));
          }
          var i = t.prototype;
          return (
            (i.coreServicesAvailable = function () {
              var t = this,
                i = this.win.document.documentElement;
              (this.Ui = Kn(i)),
                (this.Ae = mr(i)),
                (this.mi = ar(i)),
                (this.sv = ir(this.Ui)),
                (this.av =
                  this.Ae.isEmbedded() && '1' === this.Ae.getParam('csi')),
                this.Ui.onVisibilityChanged(this.flush.bind(this)),
                this.Rv();
              var n = this.Ae.whenMessagingReady();
              return (
                this.Ui.whenFirstVisible().then(function () {
                  t.tick('ofv'), t.flush();
                }),
                (this.bv || this.pv) && this.Ui.onVisibilityChanged(this.Av),
                n
                  ? n
                      .then(function () {
                        t.tickDelta('msr', t.win.performance.now()),
                          t.tick('timeOrigin', void 0, t.ov);
                        var i = t.Ui.getMetaByName('amp-usqp');
                        return (
                          i &&
                            i.split(',').forEach(function (i) {
                              t.addEnabledExperiment('ssr-' + i);
                            }),
                          t.Sv()
                        );
                      })
                      .then(function () {
                        (t.hv = !0), t._v(), t.flush();
                      })
                  : h()
              );
            }),
            (i.Sv = function () {
              var t = this;
              return Ka(Jn(this.win).getSingleDoc()).then(function (i) {
                i && t.addEnabledExperiment('story');
              });
            }),
            (i.xv = function () {
              this.tick('ol'), this.flush();
            }),
            (i.Pv = function () {
              var t = this;
              if ('inabox' !== Dt(this.win).runtime) {
                var i = !1,
                  n = !1,
                  r = !1,
                  e = !1,
                  s = function (s) {
                    if ('first-paint' != s.name || i)
                      if ('first-contentful-paint' != s.name || n)
                        if ('first-input' !== s.entryType || r)
                          'layout-shift' === s.entryType
                            ? s.hadRecentInput || (t.Mv(s), (t.mv += s.value))
                            : 'largest-contentful-paint' === s.entryType
                              ? t.kv(s)
                              : 'navigation' != s.entryType || e
                                ? 'event' == s.entryType &&
                                  s.interactionId &&
                                  t.Ev(s.duration)
                                : ([
                                    'domComplete',
                                    'domContentLoadedEventEnd',
                                    'domContentLoadedEventStart',
                                    'domInteractive',
                                    'loadEventEnd',
                                    'loadEventStart',
                                    'requestStart',
                                    'responseStart',
                                  ].forEach(function (i) {
                                    return t.tick(i, s[i]);
                                  }),
                                  (e = !0));
                        else {
                          var u = s.processingStart - s.startTime;
                          t.tickDelta('fid', u), (r = !0);
                        }
                      else {
                        var o = s.startTime + s.duration;
                        t.tickDelta('fcp', o),
                          t.tickSinceVisible('fcpv', o),
                          (n = !0);
                      }
                    else t.tickDelta('fp', s.startTime + s.duration), (i = !0);
                  },
                  u = [];
                this.win.PerformancePaintTiming &&
                  (this.win.performance.getEntriesByType('paint').forEach(s),
                  u.push('paint')),
                  this.gv && this.Cv(s, { type: 'first-input', buffered: !0 }),
                  this.pv && this.Cv(s, { type: 'layout-shift', buffered: !0 }),
                  this.bv &&
                    this.Cv(s, {
                      type: 'largest-contentful-paint',
                      buffered: !0,
                    }),
                  this.yv && this.Cv(s, { type: 'navigation', buffered: !0 }),
                  this.wv &&
                    this.Cv(s, {
                      type: 'event',
                      durationThreshold: 40,
                      buffered: !0,
                    }),
                  u.length > 0 && this.Cv(s, { entryTypes: u });
              }
            }),
            (i.Cv = function (t, i) {
              var n = this;
              try {
                new this.win.PerformanceObserver(function (i) {
                  i.getEntries().forEach(t), n.flush();
                }).observe(i);
              } catch (t) {
                Qt().warn('Performance', t);
              }
            }),
            (i.Nv = function () {
              var t = this.Ui.getVisibilityState();
              return t === Pr || t === xr;
            }),
            (i.Av = function () {
              this.Nv() && (this.jv(), this.Iv());
            }),
            (i.Dv = function () {
              if (!this.Tv) {
                this.Tv = !0;
                var t = this.win,
                  i = parseInt(
                    jr(t, t.document.body).getPropertyValue(
                      '--google-font-exp',
                    ),
                    10,
                  );
                i >= 0 &&
                  this.addEnabledExperiment('google-font-exp='.concat(i));
              }
            }),
            (i.jv = function () {
              this.pv && (this.Dv(), this.Lv());
            }),
            (i.Mv = function (t) {
              if (this.Ui && !this.Nv()) {
                var i = this.dv;
                if (i.length > 0) {
                  var n = i[0],
                    r = i[i.length - 1];
                  if (
                    t.startTime - r.startTime < 1e3 &&
                    t.startTime - n.startTime < 5e3
                  )
                    return void i.push(t);
                  this.Iv();
                }
                i.push(t), this.Ov();
              }
            }),
            (i.Iv = function () {
              for (
                var t,
                  i = this.dv,
                  n = this.lv.get(Zi),
                  r = 0,
                  e = 0,
                  s = o(i, !0);
                !(t = s()).done;

              ) {
                var u = t.value;
                if (u.sources)
                  for (var h, a = o(u.sources, !0); !(h = a()).done; )
                    r |= Xa(h.value.node);
                e += u.value;
              }
              (i.length = 0),
                this.Dv(),
                (null == n || e > n) &&
                  (this.lv.reset(Zi),
                  this.lv.reset(tn),
                  this.tickDelta(Zi, e),
                  this.tickDelta(tn, r),
                  this.flush());
            }),
            (i.Ev = function (t) {
              if (this.Ui) {
                var i = this.lv.get(en);
                (null == i || t > i) &&
                  (this.tickDelta(en, t - (null != i ? i : 0)), this.flush());
              }
            }),
            (i.Lv = function () {
              0 === this.vv
                ? (this.tickDelta(nn, this.mv), this.flush(), (this.vv = 1))
                : 1 === this.vv &&
                  (this.tickDelta('cls-2', this.mv),
                  this.flush(),
                  (this.vv = 2));
            }),
            (i.kv = function (t) {
              var i = t.element,
                n = t.startTime,
                r = Xa(i);
              this.tickDelta('lcpt', r),
                this.tickDelta('lcp', n),
                this.tickSinceVisible('lcpv', n),
                this.flush();
            }),
            (i.Rv = function () {
              var t = this,
                i = !this.Ui.hasBeenVisible(),
                n = -1;
              this.Ui.whenFirstVisible().then(function () {
                (n = t.win.performance.now()), t.mark('visible');
              }),
                this.Uv().then(function () {
                  if (i) {
                    var r = n > -1 ? t.win.performance.now() - n : 0;
                    t.Ui.whenFirstVisible().then(function () {
                      t.tickDelta(rn, r);
                    }),
                      t.zv(r),
                      t.mark(rn);
                  } else t.tick(rn), t.zv(t.win.performance.now() - n);
                  t.flush();
                });
            }),
            (i.Uv = function () {
              var t = this;
              return this.mi.whenFirstPass().then(function () {
                var i,
                  n = t.win.document.documentElement,
                  r = gr(n).getSize();
                return (
                  zi(0, 0, r.width, r.height),
                  (i = n),
                  t.win,
                  (function (t, i) {
                    var n = Kn(t);
                    return n
                      .signals()
                      .whenSignal(Fs)
                      .then(function () {
                        var t = ar(n)
                          .get()
                          .filter(function (t) {
                            return !(
                              !t.prerenderAllowed() ||
                              Ja.includes(t.element.tagName)
                            );
                          })
                          .map(function (t) {
                            return t.element;
                          });
                        return 0 === t.length
                          ? Promise.resolve([])
                          : new Promise(function (i) {
                              for (
                                var r = n.win,
                                  e = new r.IntersectionObserver(
                                    function (t) {
                                      e.disconnect();
                                      for (
                                        var n = [], r = 0;
                                        r < t.length;
                                        r++
                                      ) {
                                        var s = t[r],
                                          u = s.isIntersecting,
                                          o = s.target;
                                        u && n.push(o);
                                      }
                                      i(n);
                                    },
                                    {
                                      root: Ni(r) ? r.document : null,
                                      threshold: 0.01,
                                    },
                                  ),
                                  s = 0;
                                s < Math.min(t.length, 100);
                                s++
                              )
                                e.observe(t[s]);
                            }).then(function (t) {
                              return Promise.all(
                                t.map(function (t) {
                                  return t.whenLoaded();
                                }),
                              );
                            });
                      });
                  })(i)
                );
              });
            }),
            (i.tick = function (t, i, n) {
              Zt(null == i || null == n);
              var r,
                e = { label: t };
              null != i
                ? (e.delta = r = Math.max(i, 0))
                : null != n
                  ? (e.value = n)
                  : (this.mark(t),
                    (r = this.win.performance.now()),
                    (e.value = this.ov + r)),
                this.win.dispatchEvent(
                  Ke(this.win, 'perf', { label: t, delta: r }),
                ),
                this.hv && this.av
                  ? this.Ae.sendMessage('tick', e)
                  : this.Hv(e),
                this.lv.signal(t, r);
            }),
            (i.mark = function (t) {
              var i, n;
              null === (i = (n = this.win.performance).mark) ||
                void 0 === i ||
                i.call(n, t);
            }),
            (i.tickDelta = function (t, i) {
              this.tick(t, i);
            }),
            (i.tickSinceVisible = function (t, i) {
              var n,
                r,
                e = null == i ? this.win.performance.now() : i,
                s = this.ov + e,
                u =
                  null !== (n = this.Ae) && void 0 !== n && n.isEmbedded()
                    ? null === (r = this.Ui) || void 0 === r
                      ? void 0
                      : r.getFirstVisibleTime()
                    : this.ov,
                o = u ? Math.max(s - u, 0) : 0;
              this.tickDelta(t, o);
            }),
            (i.flush = function () {
              this.hv &&
                this.av &&
                (null == this.cv && (this.cv = Object.keys(this.fv).join(',')),
                this.Ae.sendMessage(
                  'sendCsi',
                  {
                    ampexp: this.cv,
                    canonicalUrl: this.sv.canonicalUrl,
                    eventid: this.rv,
                  },
                  !0,
                ));
            }),
            (i.addEnabledExperiment = function (t) {
              (this.fv[t] = !0), (this.cv = void 0);
            }),
            (i.Hv = function (t) {
              this.uv.length >= 50 && this.uv.shift(), this.uv.push(t);
            }),
            (i._v = function () {
              var t = this;
              this.Ae &&
                (this.av
                  ? (this.uv.forEach(function (i) {
                      t.Ae.sendMessage('tick', i);
                    }),
                    (this.uv.length = 0))
                  : (this.uv.length = 0));
            }),
            (i.zv = function (t) {
              this.Ae &&
                this.Ae.sendMessage('prerenderComplete', { value: t }, !0);
            }),
            (i.isPerformanceTrackingOn = function () {
              return this.av;
            }),
            (i.getMetric = function (t) {
              return this.lv.whenSignal(t);
            }),
            t
          );
        })();
        function Za(t) {
          var i = t.document;
          if (i.fonts && i.fonts.values)
            for (var n, r = i.fonts.values(); (n = r.next()); ) {
              var e = n.value;
              if (!e) return;
              'loading' == e.status &&
                'display' in e &&
                'auto' == e.display &&
                (e.display = 'swap');
            }
        }
        var tc = (function () {
            function t(t, i) {
              (this.Yl = t),
                (this.Ls = i),
                (this.Dm = !1),
                (this.Lm = 0),
                (this.Hm = this.Yp.bind(this)),
                (this.Gm = this.Lp.bind(this)),
                (this.Vm = this.Zp.bind(this)),
                (this.Bm = this.$m.bind(this)),
                this.Yl.addEventListener('touchstart', this.Hm, !0);
            }
            var i = t.prototype;
            return (
              (i.cleanup = function () {
                this.Wm(),
                  this.Yl.removeEventListener('touchstart', this.Hm, !0);
              }),
              (i.Yp = function (t) {
                this.Dm ||
                  !t.touches ||
                  1 != t.touches.length ||
                  this.Ls.getScrollTop() > 0 ||
                  this.Ym(t.touches[0].clientY);
              }),
              (i.Ym = function (t) {
                (this.Dm = !0),
                  (this.Lm = t),
                  this.Yl.addEventListener('touchmove', this.Gm, !0),
                  this.Yl.addEventListener('touchend', this.Vm, !0),
                  this.Yl.addEventListener('touchcancel', this.Bm, !0);
              }),
              (i.Wm = function () {
                (this.Dm = !1),
                  (this.Lm = 0),
                  this.Yl.removeEventListener('touchmove', this.Gm, !0),
                  this.Yl.removeEventListener('touchend', this.Vm, !0),
                  this.Yl.removeEventListener('touchcancel', this.Bm, !0);
              }),
              (i.Lp = function (t) {
                if (this.Dm) {
                  var i = t.touches[0].clientY - this.Lm;
                  i > 0 && t.preventDefault(), 0 != i && this.Wm();
                }
              }),
              (i.Zp = function (t) {
                this.Wm();
              }),
              (i.$m = function (t) {
                this.Wm();
              }),
              t
            );
          })(),
          ic = ['amp-ad', 'amp-embed', 'amp-video'],
          nc = 'extensions',
          rc = '0.1',
          ec = 'latest',
          sc = '__AMP_EXT_LDR',
          uc = (function () {
            function t(t) {
              (this.win = t),
                (this._c = Jn(t)),
                (this.yf = {}),
                (this.wf = null),
                (this.Af = null),
                (this.xf = null);
            }
            var i = t.prototype;
            return (
              (i.registerExtension = function (t, i, n, r, e) {
                var s,
                  u = n ? this.yf[ac(t, ec)] : null,
                  o = this.Ef(
                    t,
                    i,
                    null === (s = null == u ? void 0 : u.auto) ||
                      void 0 === s ||
                      s,
                  );
                if (((o.latest = n), !o.loaded)) {
                  n && (this.yf[ac(t, ec)] = o);
                  try {
                    var h, a;
                    (this.wf = t),
                      (this.Af = i),
                      (this.xf = n),
                      r(e, e._),
                      (o.loaded = !0),
                      null === (h = o.resolve) ||
                        void 0 === h ||
                        h.call(o, o.extension),
                      null == u ||
                        null === (a = u.resolve) ||
                        void 0 === a ||
                        a.call(u, o.extension);
                  } catch (t) {
                    var c, f;
                    throw (
                      ((o.error = t),
                      null === (c = o.reject) || void 0 === c || c.call(o, t),
                      null == u ||
                        null === (f = u.reject) ||
                        void 0 === f ||
                        f.call(u, t),
                      t)
                    );
                  } finally {
                    (this.wf = null), (this.Af = null), (this.xf = null);
                  }
                }
              }),
              (i.waitForExtension = function (t, i) {
                var n = this.Of(this.Ef(t, i));
                return fr(this.win)
                  .timeoutPromise(16e3, n)
                  .catch(function (i) {
                    if (!i.message.includes('timeout')) throw i;
                    return (
                      Jt().error(
                        nc,
                        'Waited over 16s to load extension '.concat(t, '.'),
                      ),
                      n
                    );
                  });
              }),
              (i.preloadExtension = function (t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : rc;
                'amp-embed' == t && (t = 'amp-ad');
                var n = this.Ef(t, i);
                return this.Tf(t, i, n), this.Of(n);
              }),
              (i.installExtensionForDoc = function (t, i) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : rc,
                  e = t.getRootNode(),
                  s = e[sc];
                return (
                  s || (s = e[sc] = A()),
                  s[i]
                    ? s[i]
                    : (t.declareExtension(i, r),
                      Pu(t.win, i),
                      (s[i] = this.preloadExtension(i, r).then(function () {
                        return n.installExtensionInDoc(t, i, r);
                      })))
                );
              }),
              (i.reloadExtension = function (t, i, n) {
                var r = An(this.win, t, i, n, !1),
                  e = this.yf[ac(t, i)];
                return (
                  e && (Zt(!e.loaded && !e.error), (e.scriptPresent = !1)),
                  r.forEach(function (i) {
                    return i.setAttribute('i-amphtml-loaded-new-version', t);
                  }),
                  this.preloadExtension(t, i)
                );
              }),
              (i.importUnwrapped = function (t, i) {
                var n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : rc,
                  e =
                    !(arguments.length > 3 && void 0 !== arguments[3]) ||
                    arguments[3],
                  s = An(t, i, r, e),
                  u = s.length > 0 ? s[0] : null;
                return (
                  u
                    ? (n = u.__AMP_SCR_LOADED)
                    : ((n = (u = wn(this.win, i, r)).__AMP_SCR_LOADED =
                        new Promise(function (t, i) {
                          (u.onload = t), (u.onerror = i);
                        })),
                      t.document.head.appendChild(u)),
                  n
                );
              }),
              (i.loadElementClass = function (t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : rc;
                return this.preloadExtension(t, i).then(function (i) {
                  return Zt(i.elements[t]).implementationClass;
                });
              }),
              (i.addElement = function (t, i, n) {
                var r = this;
                (this.Pf(t).extension.elements[t] = {
                  implementationClass: i,
                  css: n,
                }),
                  this.addDocFactory(function (e) {
                    r.If(e, t, i, n);
                  });
              }),
              (i.addTemplate = function (t, i) {
                this.addDocFactory(function (n) {
                  !(function (t, i, n) {
                    In(t, 'templates').gh(i, n);
                  })(n, t, i);
                });
              }),
              (i.If = function (t, i, n, r) {
                var e = this;
                r
                  ? rs(
                      t,
                      r,
                      function () {
                        e.Sf(t.win, i, n);
                      },
                      !1,
                      i,
                    )
                  : this.Sf(t.win, i, n);
              }),
              (i.Sf = function (t, i, n) {
                (function (t, i, n) {
                  var r = (function (t, i) {
                    if (
                      i.requiresShadowDom() &&
                      !t.Element.prototype.attachShadow
                    )
                      return nr(t).importUnwrapped(
                        t,
                        'amp-shadow-dom-polyfill',
                      );
                  })(t, n);
                  r
                    ? r.then(function () {
                        return Au(t, i, n);
                      })
                    : Au(t, i, n);
                })(t, i, n),
                  En(t, i, hc);
              }),
              (i.addService = function (t, i) {
                this.Pf(t).extension.services.push({
                  serviceName: t,
                  serviceClass: i,
                }),
                  this.addDocFactory(function (n) {
                    Pn(n, t, i, !0);
                  });
              }),
              (i.addDocFactory = function (t, i) {
                var n = this.Pf(i);
                if (
                  (n.docFactories.push(t), this.wf && this._c.isSingleDoc())
                ) {
                  var r = this._c.getAmpDoc(this.win.document),
                    e = this.wf,
                    s = this.Af,
                    u = this.xf || !1;
                  (r.declaresExtension(e, s) ||
                    (u && r.declaresExtension(e, ec)) ||
                    n.auto) &&
                    t(r);
                }
              }),
              (i.preinstallEmbed = function (t, i) {
                var n = this.win,
                  r = t.win;
                !(function (t, i) {
                  Ou(t, i, 'amp-img'), Ou(t, i, 'amp-pixel');
                })(n, r),
                  oc(r),
                  i.forEach(function (i) {
                    var n = i.extensionId,
                      e = i.extensionVersion;
                    t.declareExtension(n, e), ic.includes(n) || Pu(r, n);
                  });
              }),
              (i.installExtensionsInDoc = function (t, i) {
                var n = this;
                return Promise.all(
                  i.map(function (i) {
                    var r = i.extensionId,
                      e = i.extensionVersion;
                    return n.installExtensionInDoc(t, r, e);
                  }),
                );
              }),
              (i.installExtensionInDoc = function (t, i) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : rc;
                return (
                  t.declareExtension(i, r),
                  this.Of(this.Ef(i, r)).then(function () {
                    n.Ef(i, r).docFactories.forEach(function (n) {
                      try {
                        n(t);
                      } catch (t) {
                        d('Doc factory failed: ', t, i);
                      }
                    });
                  })
                );
              }),
              (i.Ef = function (t, i, n) {
                var r = ac(t, i),
                  e = this.yf[r];
                return (
                  e ||
                    ((e = {
                      version: i,
                      latest: i == ec,
                      extension: { elements: {}, services: [] },
                      auto: n || !1,
                      docFactories: [],
                      promise: void 0,
                      resolve: void 0,
                      reject: void 0,
                      loaded: void 0,
                      error: void 0,
                      scriptPresent: void 0,
                    }),
                    (this.yf[r] = e)),
                  e
                );
              }),
              (i.Pf = function (t) {
                return (
                  this.wf || Qt().error(nc, 'unknown extension for ', t),
                  this.Ef(this.wf || '_UNKNOWN_', this.Af || '')
                );
              }),
              (i.Of = function (t) {
                if (!t.promise)
                  if (t.loaded) t.promise = Promise.resolve(t.extension);
                  else if (t.error) t.promise = Promise.reject(t.error);
                  else {
                    var i = new a();
                    (t.promise = i.promise),
                      (t.resolve = i.resolve),
                      (t.reject = i.reject);
                  }
                return t.promise;
              }),
              (i.Tf = function (t, i, n) {
                if (this.Mf(t, i, n)) {
                  var r = wn(this.win, t, i);
                  this.win.document.head.appendChild(r), (n.scriptPresent = !0);
                }
              }),
              (i.Mf = function (t, i, n) {
                if (n.loaded || n.error) return !1;
                if (void 0 === n.scriptPresent) {
                  var r = An(this.win, t, i, n.latest);
                  n.scriptPresent = r.length > 0;
                }
                return !n.scriptPresent;
              }),
              t
            );
          })();
        function oc(t) {
          ic.forEach(function (i) {
            Pu(t, i);
          });
        }
        function hc() {
          return {};
        }
        function ac(t, i) {
          return ''.concat(t, ':').concat(i);
        }
        var cc,
          fc = '-shadowcsshost',
          lc = ')(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)',
          vc =
            (new RegExp('(' + fc + lc, 'gim'),
            new RegExp('(-shadowcsscontext' + lc, 'gim'),
            new RegExp(fc, 'gim'),
            new RegExp('-shadowcsscontext', 'gim'),
            'html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update]{display:none}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list [fetch-error],amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-list[diffable] div[role=list]{display:block}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#000!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div,amp-story .i-amphtml-loader-background{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input,amp-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input,amp-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}amp-script[nodom],amp-script[sandboxed]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}\n/*# sourceURL=/css/ampdoc.css*/'),
          dc =
            '[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img[i-amphtml-ssr]:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}amp-story{visibility:hidden!important}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/';
        (Yt = $t),
          Qt(),
          Jt(),
          (cc = function (t, i, n) {
            Us(i, n),
              i &&
                t &&
                tt(i.message) &&
                !(i.message.indexOf(Q) >= 0) &&
                (function (t, i) {
                  if (Jn(i).isSingleDoc()) {
                    var n = { errorName: t.name, errorMessage: t.message };
                    !(function (t, i) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        r =
                          !(arguments.length > 3 && void 0 !== arguments[3]) ||
                          arguments[3];
                      Xn(t).then(function (e) {
                        e && e.triggerEventForTarget(t, i, n, r);
                      });
                    })(
                      (function (t) {
                        var i = Jn(t).getSingleDoc().getRootNode();
                        return i.documentElement || i.body || i;
                      })(i),
                      'user-error',
                      n,
                      !1,
                    );
                  }
                })(i, t);
          }.bind(null, self)),
          (self.__AMP_REPORT_ERROR = cc);
        var mc,
          pc = 'runtime';
        function gc(t, i) {
          if (t.__AMP_TAG) return h();
          t.__AMP_TAG = !0;
          var n = t.AMP || [];
          En(t, 'extensions', uc);
          var r = nr(t);
          Wa(t),
            oc(t),
            (t.AMP = { win: t, _: t.AMP ? t.AMP._ : void 0 }),
            (t.AMP.config = {
              urls: {
                thirdParty: Pt,
                thirdPartyFrameHost: Ot,
                thirdPartyFrameRegex: It,
                cdn: Tt,
                cdnProxyRegex: xt,
                localhostRegex: Mt,
                errorReporting: St,
                betaErrorReporting: Rt,
                localDev: _t,
                trustedViewerHosts: kt,
                geoApi: Ct,
              },
            }),
            (t.AMP.addGlobalConsentListener = function () {}),
            (t.AMP.addGranularConsentListener = function () {}),
            (t.AMP.BaseElement = uu),
            (t.AMP.registerElement = r.addElement.bind(r)),
            (t.AMP.registerTemplate = r.addTemplate.bind(r)),
            (t.AMP.registerServiceForDoc = r.addService.bind(r)),
            (t.AMP.isExperimentOn = Fe.bind(null, t)),
            (t.AMP.toggleExperiment = Be.bind(null, t)),
            (t.AMP.setLogLevel = Ht.bind(null)),
            (t.AMP.setTickFunction = function (t, i) {});
          var e = i(t, r);
          function s(i) {
            !(function (t, i, n) {
              'function' == typeof i || 'high' == i.p
                ? h().then(n)
                : ((n.displayName = i.n), Zs(t.document, n));
            })(t, i, function () {
              e.then(function () {
                'function' == typeof i
                  ? i(t.AMP, t.AMP.Yf)
                  : r.registerExtension(i.n, i.ev, i.l, i.f, t.AMP);
              });
            });
          }
          for (var u = 0; u < n.length; u++) {
            var o = n[u];
            if (bc(t, o)) n.splice(u--, 1);
            else if ('function' == typeof o || 'high' == o.p) {
              try {
                s(o);
              } catch (t) {
                Qt().error(pc, 'Extension failed: ', t, o.n);
              }
              n.splice(u--, 1);
            }
          }
          !(function (t, i) {
            t.document.body &&
            !(function (t) {
              return ns(t).length > 0;
            })(t)
              ? fr(t).delay(i, 1)
              : i();
          })(t, function () {
            t.AMP.push = function (i) {
              bc(t, i) || s(i);
            };
            for (var i = 0; i < n.length; i++) {
              var r = n[i];
              if (!bc(t, r))
                try {
                  s(r);
                } catch (t) {
                  Qt().error(pc, 'Extension failed: ', t, r.n);
                }
            }
            n.length = 0;
          }),
            t.AMP.push || (t.AMP.push = n.push.bind(n)),
            or(t).isIos() &&
              kr(t.document.documentElement, 'cursor', 'pointer');
          var a = nr(t);
          return (
            Ki(t) && a.preloadExtension('amp-resize-observer-polyfill'),
            Fi(t) && a.preloadExtension('amp-intersection-observer-polyfill'),
            e
          );
        }
        function bc(t, i) {
          return (
            'function' != typeof i &&
            (!!i.m ||
              ('2502032353000' != i.v &&
                (nr(t).reloadExtension(i.n, i.ev, i.l), !0)))
          );
        }
        function yc(t, i) {
          Zs(self.document, function () {
            Wa(self),
              Ya(t),
              i.coreServicesAvailable(),
              (function (t) {
                var i = new a(),
                  n = i.promise,
                  r = i.resolve;
                yh = fr(t)
                  .timeoutPromise(8e3, n, 'TrackImpressionPromise timeout')
                  .catch(function (t) {
                    Qt().warn('IMPRESSION', t);
                  });
                var e = mr(t.document.documentElement),
                  s = e.isTrustedViewer(),
                  u = e.getReferrerUrl().then(function (t) {
                    return (function (t) {
                      var i = ms(t);
                      return (
                        'https:' == i.protocol &&
                        Ah.some(function (t) {
                          return t.test(i.hostname);
                        })
                      );
                    })(t);
                  });
                Promise.all([s, u]).then(function (i) {
                  var n = i[0],
                    e = i[1];
                  if (n || e || Fe(t, 'alp')) {
                    var s = (function (t) {
                        var i = mr(t.document.documentElement);
                        return i.getParam('replaceUrl')
                          ? i.hasCapability('replaceUrl')
                            ? i
                                .sendMessageAwaitResponse(
                                  'getReplaceUrl',
                                  void 0,
                                )
                                .then(
                                  function (t) {
                                    t && 'object' == p(t)
                                      ? i.replaceUrl(t.replaceUrl || null)
                                      : Qt().warn(
                                          'IMPRESSION',
                                          'get invalid replaceUrl response',
                                        );
                                  },
                                  function (t) {
                                    Qt().warn(
                                      'IMPRESSION',
                                      'Error request replaceUrl from viewer',
                                      t,
                                    );
                                  },
                                )
                            : (i.replaceUrl(i.getParam('replaceUrl') || null),
                              h())
                          : h();
                      })(t),
                      u = (function (t) {
                        var i = Kn(t.document.documentElement),
                          n = mr(i).getParam('click');
                        return n
                          ? 0 != n.indexOf('https://')
                            ? (Jt().warn(
                                'IMPRESSION',
                                'click fragment param should start with https://. Found ',
                                n,
                              ),
                              h())
                            : (Gr.getLocation(t).hash &&
                                (Gr.getLocation(t).hash = ''),
                              i
                                .whenFirstVisible()
                                .then(function () {
                                  return (function (t, i) {
                                    return br(t)
                                      .fetchJson(i, { credentials: 'include' })
                                      .then(function (t) {
                                        return 204 == t.status
                                          ? null
                                          : t.json();
                                      });
                                  })(t, n);
                                })
                                .then(function (i) {
                                  !(function (t, i) {
                                    if (i) {
                                      var n = i.location,
                                        r = i.tracking_url || n;
                                      if (
                                        (r && !Ps(r) && (new Image().src = r),
                                        n)
                                      ) {
                                        if (!t.history.replaceState) return;
                                        var e = mr(t.document.documentElement),
                                          s = ys(
                                            Gr.getLocation(t).href,
                                            yt(ms(n).search),
                                          );
                                        t.history.replaceState(null, '', s),
                                          e.maybeUpdateFragmentForCct();
                                      }
                                    }
                                  })(t, i);
                                })
                                .catch(function (t) {
                                  Jt().warn(
                                    'IMPRESSION',
                                    'Error on request clickUrl: ',
                                    t,
                                  );
                                }))
                          : h();
                      })(t);
                    Promise.all([s, u]).then(
                      function () {
                        r();
                      },
                      function () {},
                    );
                  } else r();
                });
              })(self);
          }),
            Zs(self.document, function () {
              gc(self, function (t) {
                return (
                  (function (t) {
                    var i = t.document.documentElement,
                      n = Jn(t).getSingleDoc();
                    t.AMP.ampdoc = n;
                    var r = mr(i);
                    (t.AMP.viewer = r),
                      Dt().development &&
                        ((t.AMP.toggleRuntime = r.toggleRuntime.bind(r)),
                        (t.AMP.resources = ar(i)));
                    var e = gr(i);
                    (t.AMP.viewport = {}),
                      (t.AMP.viewport.getScrollLeft = e.getScrollLeft.bind(e)),
                      (t.AMP.viewport.getScrollWidth =
                        e.getScrollWidth.bind(e)),
                      (t.AMP.viewport.getWidth = e.getWidth.bind(e));
                  })(t),
                  ((i = t).AMP.installAmpdocServices = Ya.bind(null)),
                  (i.AMP.combinedCss = vc + dc),
                  Ti(t.document).then(function () {
                    Eu(t.AMP.ampdoc);
                  })
                );
                var i;
              });
            }),
            Zs(self.document, function () {
              !(function (t) {
                !(function (t) {
                  Iu(t, Mu, Ru);
                })(t),
                  (function (t) {
                    Iu(t, Du, ju);
                  })(t),
                  (function (t) {
                    Iu(t, 'amp-layout', _u);
                  })(t);
              })(self);
            }),
            Zs(self.document, function () {
              Eu(t),
                mn(self.document).then(function () {
                  return bu();
                });
            }),
            Zs(
              self.document,
              function () {
                (function (t) {
                  var i = t.document.documentElement;
                  '0' == mr(i).getParam('p2r') &&
                    or(t).isChrome() &&
                    new tc(t.document, gr(i));
                })(self),
                  (function (t) {
                    var i = t.win;
                    Hu(i.document) &&
                      t.isSingleDoc() &&
                      !i.document.documentElement.hasAttribute(
                        'data-amp-auto-lightbox-disable',
                      ) &&
                      tu(
                        t,
                        function () {
                          Ka(t).then(function (n) {
                            n ||
                              nr(i).installExtensionForDoc(
                                t,
                                'amp-auto-lightbox',
                              );
                          });
                        },
                        10,
                      );
                  })(t),
                  (function (t) {
                    var i = t.win;
                    Hu(i.document) &&
                      or(t.win).isStandalone() &&
                      tu(
                        t,
                        function () {
                          nr(i)
                            .installExtensionForDoc(t, 'amp-standalone')
                            .then(function () {
                              return Vn(
                                t.getBody(),
                                'standalone',
                                'amp-standalone',
                              );
                            })
                            .then(function (t) {
                              return t.initialize();
                            });
                        },
                        10,
                      );
                  })(t),
                  (function (t) {
                    var i = t.location.href;
                    if (!i.startsWith('about:')) {
                      var n = !1,
                        r = wt(t);
                      Ut(t, r) && (n = '0' !== r.validate),
                        n &&
                          (function (t, i) {
                            var n = t.createElement('script');
                            if (
                              self.trustedTypes &&
                              self.trustedTypes.createPolicy
                            ) {
                              var r = self.trustedTypes.createPolicy(
                                'validator-integration#loadScript',
                                {
                                  createScriptURL: function (t) {
                                    return 'https://cdn.ampproject.org/v0/validator_wasm.js' ===
                                      t
                                      ? t
                                      : '';
                                  },
                                },
                              );
                              n.src = r.createScriptURL(i);
                            } else n.src = i;
                            Li(t, n);
                            var e = Ze(n).then(
                              function () {
                                t.head.removeChild(n);
                              },
                              function () {},
                            );
                            return t.head.appendChild(n), e;
                          })(
                            t.document,
                            ''.concat(Tt, '/v0/validator_wasm.js'),
                          ).then(function () {
                            amp.validator.validateUrlAndLog(i, t.document);
                          });
                    }
                  })(self),
                  (function (t) {
                    Zt(t.defaultView);
                    var i = t.defaultView;
                    Ti(t)
                      .then(function () {
                        return (function (t) {
                          var i = ns(t).map(function (i) {
                            var n = (function (t, i) {
                              return jn(t, i);
                            })(t, i).then(function (t) {
                              return t &&
                                (function (t) {
                                  return 'function' == typeof t.whenReady;
                                })(t)
                                ? t.whenReady().then(function () {
                                    return t;
                                  })
                                : t;
                            });
                            return fr(t).timeoutPromise(
                              3e3,
                              n,
                              'Render timeout waiting for service '.concat(
                                i,
                                ' to be ready.',
                              ),
                            );
                          });
                          return Promise.all(i);
                        })(i);
                      })
                      .catch(function (t) {
                        return d(t), [];
                      })
                      .then(function (n) {
                        (ss = !0),
                          t.body.getBoundingClientRect(),
                          os(t),
                          kn(t).signals().signal(Te),
                          n.length > 0 &&
                            ar(t.documentElement).schedulePass(1, !0);
                        try {
                          var r = ur(i);
                          r.tick('mbv'), r.flush();
                        } catch (t) {}
                      });
                  })(self.document),
                  (function (t) {
                    mn(t).then(function () {
                      var i = t.defaultView;
                      if (i) {
                        var n = hr(i),
                          r = ir(t.documentElement),
                          e = Kn(t);
                        n.url(e, r.sourceUrl), n.url(e, r.canonicalUrl);
                      }
                    });
                  })(self.document);
              },
              !0,
            ),
            Zs(self.document, function () {
              i.tick('e_is'), ar(t).ampInitComplete(), i.flush();
            });
        }
        self.location && (self.location.originalHash = self.location.hash);
        try {
          !(function (t) {
            (t.onerror = Hs),
              t.addEventListener('unhandledrejection', function (t) {
                !t.reason ||
                (t.reason.message !== Cs &&
                  t.reason.message !== Ns &&
                  'AbortError' !== t.reason.message)
                  ? Us(t.reason || new Error('rejected promise ' + t))
                  : t.preventDefault();
              });
          })(self),
            (function (t, i, n) {
              En(t, 'ampdoc', function () {
                return new Wr(t, !0, void 0);
              });
            })(self),
            (mc = Jn(self));
        } catch (t) {
          throw (us(self.document), t);
        }
        Zs(self.document, function () {
          var t = mc.getAmpDoc(self.document);
          Dh(self), En(self, 'performance', Qa);
          var i = ur(self);
          (function (t) {
            ln(t.document, function () {
              return (function (t) {
                var i = 1500,
                  n = t.performance;
                n &&
                  n.timing &&
                  n.timing.navigationStart &&
                  (i = Date.now() - n.timing.navigationStart);
                var r = Math.max(1, 2100 - i);
                t.setTimeout(function () {
                  Za(t);
                  var i = t.document.styleSheets;
                  if (i) {
                    for (
                      var n = t.document.querySelectorAll(
                          'link[rel~="stylesheet"]:not([href^="https://translate.googleapis.com/translate_static/css/"]):not([href^="'.concat(
                            vi(Tt),
                            '"])',
                          ),
                        ),
                        e = [],
                        s = 0;
                      s < n.length;
                      s++
                    ) {
                      for (var u = n[s], o = !1, h = 0; h < i.length; h++)
                        if (i[h].ownerNode == u) {
                          o = !0;
                          break;
                        }
                      o || e.push(u);
                    }
                    for (
                      var a = function (i) {
                          var n = e[i],
                            s = n.media || 'all';
                          (n.media = 'print'),
                            (n.onload = function () {
                              (n.media = s), Za(t);
                            }),
                            n.setAttribute('i-amphtml-timeout', r),
                            n.parentNode.insertBefore(n, n.nextSibling);
                        },
                        c = 0;
                      c < e.length;
                      c++
                    )
                      a(c);
                  }
                }, r);
              })(t);
            });
          })(self),
            i.tick('is'),
            rs(
              t,
              vc + dc,
              function () {
                return yc(t, i);
              },
              !0,
              'amp-runtime',
            );
        }),
          self.console &&
            (console.info || console.log).call(
              console,
              'Powered by AMP ⚡ HTML – Version '.concat('2502032353000'),
              self.location.href,
            ),
          self.document.documentElement.setAttribute(
            'amp-version',
            '2502032353000',
          );
      })();
} catch (t) {
  throw (
    (setTimeout(function () {
      var t = document.body.style;
      (t.opacity = 1),
        (t.visibility = 'visible'),
        (t.animation = 'none'),
        (t.WebkitAnimation = 'none;');
    }, 1e3),
    t)
  );
}
//# sourceMappingURL=v0.js.map
