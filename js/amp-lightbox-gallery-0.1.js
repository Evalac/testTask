(self.AMP = self.AMP || []).push({
  m: 0,
  v: '2502032353000',
  n: 'amp-lightbox-gallery',
  ev: '0.1',
  l: !0,
  f: function (t, i) {
    !(function () {
      function i(t, i, n) {
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
      function n(t, i) {
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
      function r(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? n(Object(a), !0).forEach(function (n) {
                i(t, n, a[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
              : n(Object(a)).forEach(function (i) {
                  Object.defineProperty(
                    t,
                    i,
                    Object.getOwnPropertyDescriptor(a, i),
                  );
                });
        }
        return t;
      }
      function a(t, i) {
        (null == i || i > t.length) && (i = t.length);
        for (var n = 0, r = new Array(i); n < i; n++) r[n] = t[n];
        return r;
      }
      function e(t, i) {
        var n =
          ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator'];
        if (n) return (n = n.call(t)).next.bind(n);
        if (
          Array.isArray(t) ||
          (n = (function (t, i) {
            if (t) {
              if ('string' == typeof t) return a(t, i);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? a(t, i)
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
      var o;
      function s() {
        return o || (o = Promise.resolve(void 0));
      }
      var l = function () {
        var t = this;
        this.promise = new Promise(function (i, n) {
          (t.resolve = i), (t.reject = n);
        });
      };
      function u(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function h(t, i) {
        return (h =
          Object.setPrototypeOf ||
          function (t, i) {
            return (t.__proto__ = i), t;
          })(t, i);
      }
      function c(t, i) {
        if ('function' != typeof i && null !== i)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (t.prototype = Object.create(i && i.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          i && h(t, i);
      }
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function m(t) {
        return (m =
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
      function p(t, i) {
        if (i && ('object' === m(i) || 'function' == typeof i)) return i;
        if (void 0 !== i)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          );
        return u(t);
      }
      function v(t) {
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
            r = f(t);
          if (i) {
            var a = f(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      function d(t, i, n) {
        return (t = t.width / t.height) > i.width / i.height !== n
          ? { width: i.height * t, height: i.height }
          : { width: i.width, height: i.width / t };
      }
      function g(t, i) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : getComputedStyle(t).getPropertyValue('object-fit');
        switch (((t = { width: t.naturalWidth, height: t.naturalHeight }), n)) {
          case 'cover':
            return d(t, i, !1);
          case 'contain':
            return d(t, i, !0);
          case 'fill':
          case '':
          case null:
            return i;
          case 'none':
            return t;
          case 'scale-down':
            return (
              (i = d(t, i, !0)),
              {
                width: Math.min(t.width, i.width),
                height: Math.min(t.height, i.height),
              }
            );
          default:
            throw Error('object-fit: '.concat(n, ' not supported'));
        }
      }
      function b(t, i) {
        return (
          (t = (t.match(new RegExp('-?\\s*\\d+' + i)) || ['0'])[0].replace(
            ' ',
            '',
          )),
          parseFloat(t)
        );
      }
      function x(t, i, n) {
        var r = t || '50% 50%',
          a =
            0 === r.lastIndexOf('calc', 0)
              ? r.indexOf(')') + 1
              : r.indexOf(' ');
        (t = r.slice(0, a) || ''), (r = r.slice(a) || ''), (a = b(t, 'px'));
        var e = b(r, 'px');
        return (
          (t = b(t, '%') / 100),
          {
            top: (b(r, '%') / 100) * (i.height - n.height) + e,
            left: t * (i.width - n.width) + a,
          }
        );
      }
      function y(t) {
        return 'cubic-bezier('
          .concat(t.x1, ',')
          .concat(t.y1, ',')
          .concat(t.x2, ',')
          .concat(t.y2, ')');
      }
      function w(t, i, n) {
        var r = n * n,
          a = r * n;
        return 3 * (n - 2 * r + a) * t + 3 * (r - a) * i + a;
      }
      var M = { x1: 0.42, y1: 0, x2: 0.58, y2: 1 },
        k = 0;
      function O(t, i, n) {
        var r = getComputedStyle(t),
          a = r.getPropertyValue('object-fit');
        return {
          objectFit: a,
          objectPosition: (r = r.getPropertyValue('object-position')),
          rect: i,
          c: n,
          j: t,
          h: g(t, i, a),
          s: i.width * i.height,
        };
      }
      var j = 'load-end';
      function C(t) {
        return t ? Array.prototype.slice.call(t) : [];
      }
      var A = Array.isArray;
      function E(t, i) {
        for (var n = [], r = 0, a = 0; a < t.length; a++) {
          var e = t[a];
          i(e, a, t) ? n.push(e) : (r < a && (t[r] = e), r++);
        }
        return r < t.length && (t.length = r), n;
      }
      function z(t, i) {
        for (var n = 0; n < t.length; n++) if (i(t[n], n, t)) return n;
        return -1;
      }
      function S(t, i, n) {
        if (t.length >= i) return t;
        i -= t.length;
        for (var r = n; i > r.length; ) r += n;
        return r.slice(0, i) + t;
      }
      var F = Object.prototype,
        D = F.hasOwnProperty;
      function I(t) {
        var i = Object.create(null);
        return t && Object.assign(i, t), i;
      }
      F.toString;
      var P = '​​​';
      function T(t) {
        return 1 == (null == (i = t) ? void 0 : i.nodeType)
          ? t.tagName.toLowerCase() + (t.id ? '#'.concat(t.id) : '')
          : t;
        var i;
      }
      function N(t) {
        return t.indexOf(P) >= 0;
      }
      function B(t, i, n, r, a, e, o, s, l, u, h) {
        return t;
      }
      function R(t, i, n, r, a, e, o, s, l, u, h) {
        return (function (t, i) {
          var n,
            r,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 'Assertion failed';
          if (i) return i;
          t && -1 == a.indexOf(t) && (a += t);
          for (
            var e = 3, o = a.split('%s'), s = o.shift(), l = [s];
            o.length;

          ) {
            var u = arguments[e++],
              h = o.shift();
            (s += T(u) + h), l.push(u, h.trim());
          }
          var c = new Error(s);
          throw (
            ((c.messageArray = E(l, function (t) {
              return '' !== t;
            })),
            null === (n = (r = self).__AMP_REPORT_ERROR) ||
              void 0 === n ||
              n.call(r, c),
            c)
          );
        })(P, t, i, n, r, a, e, o, s, l, u, h);
      }
      function L(t) {
        return (t.ownerDocument || t).defaultView;
      }
      var U,
        G,
        V,
        _ =
          /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
      function H(t, i, n, r, a) {
        return (
          a ||
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
      function X(t) {
        return void 0 !== U
          ? U
          : (U = (function (t) {
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
      function Y(t, i) {
        return t.replace(/^|,/g, '$&'.concat(i, ' '));
      }
      function J(t) {
        return String(t).replace(_, H);
      }
      function Z(t) {
        B(/^[\w-]+$/.test(t));
      }
      function $(t, i) {
        var n = t.classList,
          r = 'i-amphtml-scoped';
        n.add(r);
        var a = Y(i, '.'.concat(r)),
          e = t.querySelectorAll(a);
        return n.remove(r), e;
      }
      function q(t, i) {
        if (X(t)) return t.querySelector(Y(i, ':scope'));
        var n = $(t, i)[0];
        return void 0 === n ? null : n;
      }
      function W(t, i, n) {
        var r;
        for (r = t; r && r !== n; r = r.parentElement) if (i(r)) return r;
        return null;
      }
      function K(t, i) {
        return t.closest
          ? t.closest(i)
          : W(t, function (t) {
              return (function (t, i) {
                var n =
                  t.matches ||
                  t.webkitMatchesSelector ||
                  t.mozMatchesSelector ||
                  t.msMatchesSelector ||
                  t.oMatchesSelector;
                return !!n && n.call(t, i);
              })(t, i);
            });
      }
      function Q(t, i) {
        return Z(i), q(t, '> '.concat(i));
      }
      function tt(t, i) {
        return Z(i), t.querySelector(i);
      }
      function it(t) {
        var i = t.ownerDocument || t;
        return (G && G.ownerDocument === i) || (G = i.createElement('div')), nt;
      }
      function nt(t) {
        return (function (t, i) {
          if (
            (B(1 === i.length),
            B(Array.isArray(i) || ((r = i), D.call(r, 'raw'))),
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
          var r,
            a = t.firstElementChild;
          return B(a), B(!a.nextElementSibling), t.removeChild(a), a;
        })(G, t);
      }
      var rt = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'O', 'o'];
      function at(t, i, n, r, a) {
        var e = (function (t, i, n) {
          if (i.startsWith('--')) return i;
          V || (V = I());
          var r = V[i];
          if (!r || n) {
            if (((r = i), void 0 === t[i])) {
              var a = (function (t) {
                  return t.charAt(0).toUpperCase() + t.slice(1);
                })(i),
                e = (function (t, i) {
                  for (var n = 0; n < rt.length; n++) {
                    var r = rt[n] + i;
                    if (void 0 !== t[r]) return r;
                  }
                  return '';
                })(t, a);
              void 0 !== t[e] && (r = e);
            }
            n || (V[i] = r);
          }
          return r;
        })(t.style, i, a);
        if (e) {
          var o,
            s = r ? n + r : n;
          t.style.setProperty(
            ((o = e.replace(/[A-Z]/g, function (t) {
              return '-' + t.toLowerCase();
            })),
            rt.some(function (t) {
              return o.startsWith(t + '-');
            })
              ? '-'.concat(o)
              : o),
            s,
          );
        }
      }
      function et(t, i) {
        for (var n in i) at(t, n, i[n]);
      }
      function ot(t, i) {
        void 0 === i && (i = t.hasAttribute('hidden')),
          i ? t.removeAttribute('hidden') : t.setAttribute('hidden', '');
      }
      function st(t, i, n) {
        return B(i <= n), Math.min(Math.max(t, i), n);
      }
      var lt = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
      function ut(t) {
        var i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
        try {
          return decodeURIComponent(t);
        } catch (t) {
          return i;
        }
      }
      function ht(t) {
        var i,
          n = I();
        if (!t) return n;
        for (; (i = lt.exec(t)); ) {
          var r = ut(i[1], i[1]),
            a = i[2] ? ut(i[2].replace(/\+/g, ' '), i[2]) : '';
          n[r] = a;
        }
        return n;
      }
      function ct(t) {
        var i = (t || self).location;
        return ht(i.originalHash || i.hash);
      }
      var ft = '';
      function mt(t) {
        var i = t || self;
        return i.__AMP_MODE
          ? i.__AMP_MODE
          : (i.__AMP_MODE = (function (t) {
              return {
                localDev: !1,
                development: vt(t, ct(t)),
                esm: !1,
                test: !1,
                rtvVersion: pt(t),
                ssrReady: !1,
              };
            })(i));
      }
      function pt(t) {
        var i;
        return (
          ft ||
            (ft =
              (null === (i = t.AMP_CONFIG) || void 0 === i ? void 0 : i.v) ||
              '01'.concat('2502032353000')),
          ft
        );
      }
      function vt(t, i) {
        var n = i || ct(t);
        return (
          ['1', 'actions', 'amp', 'amp4ads', 'amp4email'].includes(
            n.development,
          ) || !!t.AMP_DEV_MODE
        );
      }
      self.__AMP_LOG = self.__AMP_LOG || {
        user: null,
        dev: null,
        userForEmbed: null,
      };
      var dt = self.__AMP_LOG;
      function gt(t, i) {
        throw new Error('failed to call initLogConstructor');
      }
      function bt(t) {
        return gt();
      }
      function xt(t, i, n, r, a, e, o, s, l, u, h) {
        return t;
      }
      function yt(t, i, n, r, a, e, o, s, l, u, h) {
        return (dt.user || (dt.user = bt()),
        void dt.user.win
          ? dt.userForEmbed || (dt.userForEmbed = bt())
          : dt.user).assert(t, i, n, r, a, e, o, s, l, u, h);
      }
      function wt(t, i) {
        return Ct(
          (t = (function (t) {
            return t.__AMP_TOP || (t.__AMP_TOP = t);
          })(t)),
          i,
        );
      }
      function Mt(t, i) {
        return Ct(jt(Ot(t)), i);
      }
      function kt(t, i) {
        return At(jt(t), i);
      }
      function Ot(t) {
        return t.nodeType ? ((i = L(t)), wt(i, 'ampdoc')).getAmpDoc(t) : t;
        var i;
      }
      function jt(t) {
        var i = Ot(t);
        return i.isSingleDoc() ? i.win : i;
      }
      function Ct(t, i) {
        xt(zt(t, i));
        var n = Et(t)[i];
        return (
          n.obj ||
            (xt(n.ctor),
            xt(n.context),
            (n.obj = new n.ctor(n.context)),
            xt(n.obj),
            (n.context = null),
            n.resolve && n.resolve(n.obj)),
          n.obj
        );
      }
      function At(t, i) {
        var n = Et(t)[i];
        return n
          ? n.promise
            ? n.promise
            : (Ct(t, i), (n.promise = Promise.resolve(n.obj)))
          : null;
      }
      function Et(t) {
        var i = t.__AMP_SERVICES;
        return i || (i = t.__AMP_SERVICES = {}), i;
      }
      function zt(t, i) {
        var n = t.__AMP_SERVICES && t.__AMP_SERVICES[i];
        return !(!n || !n.ctor);
      }
      var St = '__AMP__EXPERIMENT_TOGGLES';
      function Ft(t, i, n, r) {
        var a = kt(t, i);
        if (a) return a;
        var e = Ot(t);
        return e
          .whenExtensionsKnown()
          .then(function () {
            var t = e.getExtensionVersion(n);
            return t ? wt(e.win, 'extensions').waitForExtension(n, t) : null;
          })
          .then(function (n) {
            return n
              ? r
                ? kt(t, i)
                : (function (t, i) {
                    return (function (t, i) {
                      var n = At(t, i);
                      if (n) return n;
                      var r,
                        a,
                        e,
                        o,
                        s = Et(t);
                      return (
                        (s[i] =
                          ((a = (r = new l()).promise),
                          (e = r.reject),
                          (o = r.resolve),
                          a.catch(function () {}),
                          {
                            obj: null,
                            promise: a,
                            resolve: o,
                            reject: e,
                            context: null,
                            ctor: null,
                          })),
                        s[i].promise
                      );
                    })(jt(t), i);
                  })(t, i)
              : null;
          });
      }
      var Dt,
        It,
        Pt = function (t) {
          return (i = 'action'), zt((n = jt(Ot(t))), i) ? Ct(n, i) : null;
          var i, n;
        },
        Tt = function (t) {
          return Ft(t, 'amp-analytics-instrumentation', 'amp-analytics');
        },
        Nt = function (t) {
          return wt(t, 'extensions');
        },
        Bt = function (t) {
          return Mt(t, 'owners');
        },
        Rt = function (t) {
          return Ct(t, 'timer');
        };
      function Lt(t, i) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r =
            !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Tt(t).then(function (a) {
          a && a.triggerEventForTarget(t, i, n, r);
        });
      }
      function Ut(t) {
        if (void 0 !== It) return It;
        It = !1;
        try {
          var i = {
            get passive() {
              return (It = !0), !1;
            },
          };
          t.addEventListener('test-options', null, i),
            t.removeEventListener('test-options', null, i);
        } catch (t) {}
        return It;
      }
      function Gt(t, i, n, r) {
        return (function (t, i, n, r) {
          var a = t,
            e = n,
            o = function (t) {
              try {
                return e(t);
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
            s = (function () {
              if (void 0 !== Dt) return Dt;
              Dt = !1;
              try {
                var t = {
                  get capture() {
                    return (Dt = !0), !1;
                  },
                };
                self.addEventListener('test-options', null, t),
                  self.removeEventListener('test-options', null, t);
              } catch (t) {}
              return Dt;
            })(),
            l = !(null == r || !r.capture);
          return (
            a.addEventListener(i, o, s ? r : l),
            function () {
              null == a || a.removeEventListener(i, o, s ? r : l),
                (e = null),
                (a = null),
                (o = null);
            }
          );
        })(t, i, n, r);
      }
      var Vt = [
          '<div class=i-amphtml-lbg-caption><div class=i-amphtml-lbg-caption-scroll><div class="i-amphtml-lbg-caption-text amp-lightbox-gallery-caption"></div></div><div class=i-amphtml-lbg-caption-mask></div></div>',
        ],
        _t = 'clip',
        Ht = 'expand',
        Xt = (function () {
          function t(t, i, n, r, a) {
            (this.ql = t),
              (this.htt = i),
              (this.llt = n),
              (this.hlt = r),
              (this.flt = a);
          }
          t.build = function (i, n) {
            var r = it(i)(Vt);
            return new t(
              r,
              r.querySelector('.i-amphtml-lbg-caption-scroll'),
              r.querySelector('.amp-lightbox-gallery-caption'),
              r.querySelector('.i-amphtml-lbg-caption-mask'),
              n,
            );
          };
          var i = t.prototype;
          return (
            (i.getElement = function () {
              return this.ql;
            }),
            (i.setContent = function (t) {
              this.llt.innerText = t;
            }),
            (i.setOverflowState = function (t) {
              this.htt.setAttribute('i-amphtml-lbg-caption-state', t);
            }),
            (i.getOverflowState = function () {
              return this.htt.getAttribute('i-amphtml-lbg-caption-state');
            }),
            (i.mlt = function (t, i, n) {
              var r = t == Ht;
              return r || i ? ((void 0 !== n ? n : !r) ? Ht : _t) : 'none';
            }),
            (i.toggleOverflow = function (t) {
              var i,
                n = this,
                r = this.hlt,
                a = this.htt;
              this.flt(
                function () {
                  i = a.scrollHeight - a.clientHeight >= r.clientHeight;
                },
                function () {
                  var r = n.getOverflowState(),
                    e = n.mlt(r, i, t);
                  n.setOverflowState(e), e != Ht && (a.scrollTop = 0);
                },
              );
            }),
            t
          );
        })(),
        Yt = [
          '<div class=i-amphtml-lbg-controls><div class=i-amphtml-lbg-top-bar><div role=button class=i-amphtml-lbg-button data-action=close aria-label=Close></div><div role=button class=i-amphtml-lbg-button data-action=gallery aria-label=Gallery></div><div role=button class=i-amphtml-lbg-button data-action=slides aria-label=Content></div></div><div role=button class=i-amphtml-lbg-button data-action=prev aria-label=Content></div><div role=button class=i-amphtml-lbg-button data-action=next aria-label=Content></div></div>',
        ],
        Jt = {
          CLOSE: 'close',
          GALLERY: 'gallery',
          SLIDES: 'slides',
          PREV: 'prev',
          NEXT: 'next',
        },
        Zt = (function () {
          function t(t, i, n) {
            var r = this;
            (this.t = t),
              (this.ql = i),
              (this.flt = n),
              this.ql.addEventListener('click', function (t) {
                r.fo(t);
              });
          }
          t.build = function (i, n, r) {
            var a = it(n)(Yt);
            (function (t) {
              return wt(t, 'input');
            })(i).isMouseDetected() ||
              (a
                .querySelector('[data-action="prev"]')
                .classList.add('i-amphtml-screen-reader'),
              a
                .querySelector('[data-action="next"]')
                .classList.add('i-amphtml-screen-reader'));
            var e = Object.values(Jt);
            return (
              xt(
                C(a.querySelectorAll('[data-action]'))
                  .map(function (t) {
                    return t.getAttribute('data-action');
                  })
                  .every(function (t) {
                    return e.includes(t);
                  }),
              ),
              new t(i, a, r)
            );
          };
          var i = t.prototype;
          return (
            (i.getElement = function () {
              return this.ql;
            }),
            (i.fo = function (t) {
              var i = t.target.getAttribute('data-action');
              i &&
                (this.ql.dispatchEvent(
                  (function (t, i, n, r) {
                    var a = { detail: n };
                    if (
                      (Object.assign(a, void 0),
                      'function' == typeof t.CustomEvent)
                    )
                      return new t.CustomEvent(i, a);
                    var e = t.document.createEvent('CustomEvent');
                    return (
                      e.initCustomEvent(i, !!a.bubbles, !!a.cancelable, n), e
                    );
                  })(this.t, 'action', { action: i }),
                ),
                t.stopPropagation(),
                t.preventDefault());
            }),
            t
          );
        })(),
        $t = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;
      function qt(t) {
        var i = t.getAttribute('srcset');
        if (i)
          return (function (t) {
            for (var i, n = []; (i = $t.exec(t)); ) {
              var r = i[1],
                a = void 0,
                e = void 0;
              if (i[2]) {
                var o = i[3].toLowerCase();
                if ('w' == o) a = parseInt(i[2], 10);
                else {
                  if ('x' != o) continue;
                  e = parseFloat(i[2]);
                }
              } else e = 1;
              n.push({ url: r, width: a, dpr: e });
            }
            return new Kt(n);
          })(i);
        var n = t.getAttribute('src');
        return (
          R(
            n,
            'Either non-empty "srcset" or "src" attribute must be specified: %s',
            t,
          ),
          Wt(n)
        );
      }
      function Wt(t) {
        return new Kt([{ url: t, width: void 0, dpr: 1 }]);
      }
      var Kt = (function () {
        function t(t) {
          R(t.length > 0, 'Srcset must have at least one source'),
            (this.GA = t);
          for (var i = !1, n = !1, r = 0; r < t.length; r++) {
            var a = t[r];
            (i = i || !!a.width), (n = n || !!a.dpr);
          }
          R(!(i === n), 'Srcset must have width or dpr sources, but not both'),
            t.sort(i ? Qt : ti),
            (this.xR = i);
        }
        var i = t.prototype;
        return (
          (i.select = function (t, i) {
            var n;
            return (
              B(t),
              B(i),
              (n = this.xR ? this.ER(t * i) : this.OR(i)),
              this.GA[n].url
            );
          }),
          (i.ER = function (t) {
            for (
              var i = this.GA, n = 0, r = 1 / 0, a = 1 / 0, e = 0;
              e < i.length;
              e++
            ) {
              var o,
                s = null !== (o = i[e].width) && void 0 !== o ? o : 0,
                l = Math.abs(s - t);
              if (!(l <= 1.1 * r || t / a > 1.2)) break;
              (n = e), (r = l), (a = s);
            }
            return n;
          }),
          (i.OR = function (t) {
            for (var i = this.GA, n = 0, r = 1 / 0, a = 0; a < i.length; a++) {
              var e = Math.abs(i[a].dpr - t);
              if (!(e <= r)) break;
              (n = a), (r = e);
            }
            return n;
          }),
          (i.getUrls = function () {
            return this.GA.map(function (t) {
              return t.url;
            });
          }),
          (i.stringify = function (t) {
            for (var i = [], n = this.GA, r = 0; r < n.length; r++) {
              var a = n[r],
                e = a.url;
              t && (e = t(e)),
                this.xR
                  ? (e += ' '.concat(a.width, 'w'))
                  : (e += ' '.concat(a.dpr, 'x')),
                i.push(e);
            }
            return i.join(', ');
          }),
          t
        );
      })();
      function Qt(t, i) {
        return (
          R(t.width != i.width, 'Duplicate width: %s', t.width),
          t.width - i.width
        );
      }
      function ti(t, i) {
        return R(t.dpr != i.dpr, 'Duplicate dpr: %s', t.dpr), t.dpr - i.dpr;
      }
      var ii = !1;
      /nochunking=1/.test(self.location.hash), s();
      var ni = new Set(['AMP-IMG', 'IMG']),
        ri = new Set(['AMP-IMG', 'IMG']),
        ai = new Set(['AMP-YOUTUBE', 'AMP-VIDEO']),
        ei = new Set(['AMP-CAROUSEL', 'AMP-BASE-CAROUSEL']),
        oi = (function () {
          function t(t) {
            (this.Ui = t),
              (this.rJ = null),
              (this.plt = I({ default: [] })),
              (this.VI = 0),
              (this.HF = new Set());
          }
          var i = t.prototype;
          return (
            (i.maybeInit = function () {
              var t = this;
              if (this.rJ) return this.rJ;
              this.rJ = this.vlt();
              var i = this.Ui.getRootNode();
              return (
                i.addEventListener('amp:dom-update', function () {
                  t.rJ = t.vlt();
                }),
                i.addEventListener('amp-auto-lightbox:newly-set', function (i) {
                  var n = i.target;
                  t.dlt(n);
                }),
                this.rJ
              );
            }),
            (i.vlt = function () {
              var t = this;
              return this.Ui.whenReady().then(function () {
                var i = t.Ui.getRootNode().querySelectorAll(
                    '[lightbox],[data-lightbox]',
                  ),
                  n = t.dlt.bind(t);
                i.forEach(n);
              });
            }),
            (i.glt = function (t) {
              return ni.has(t.tagName);
            }),
            (i.blt = function (t) {
              var i = this,
                n =
                  t.getAttribute('lightbox') ||
                  'carousel'.concat(t.getAttribute('id') || this.VI++);
              this.xlt(t).then(function (t) {
                t.forEach(function (t) {
                  if (
                    !(
                      t.hasAttribute('lightbox-exclude') ||
                      (t.hasAttribute('lightbox') &&
                        t.getAttribute('lightbox') !== n)
                    )
                  ) {
                    var r = (function (t) {
                      var i = t.tagName.toUpperCase();
                      if ('AMP-IMG' == i || 'FIGURE' == i) return t;
                      var n = t.querySelector('figure');
                      if (n) return n;
                      var r = t.querySelectorAll('amp-img');
                      return (
                        yt(
                          1 == r.length,
                          'Found more than one images or none in slide!',
                        ),
                        r[0]
                      );
                    })(t);
                    i.HF.has(r) ||
                      (r.setAttribute('lightbox', n), i.HF.add(r), i.ylt(r, n));
                  }
                });
              });
            }),
            (i.dlt = function (t) {
              if (!this.HF.has(t))
                if ((this.HF.add(t), ei.has(t.tagName))) this.blt(t);
                else {
                  var i = t.getAttribute('lightbox') || 'default';
                  this.ylt(t, i);
                }
            }),
            (i.wlt = function (t, i) {
              var n = (function (t, i) {
                  for (var n = t.firstElementChild; n; n = n.nextElementSibling)
                    if (i(n)) return n;
                  return null;
                })(t, function (t) {
                  return 'FIGCAPTION' !== t.tagName;
                }),
                r = n.classList.contains(
                  'i-amphtml-inline-gallery-slide-content-slot',
                ),
                a = r ? r.firstChild : n;
              return a && a.setAttribute('lightbox', i), a;
            }),
            (i.ylt = function (t, i) {
              if ('FIGURE' == t.tagName) {
                var n = this.wlt(t, i);
                if (!n) return;
                t = n;
              }
              if (
                (yt(
                  this.glt(t),
                  "The element %s isn't supported in lightbox yet.",
                  t.tagName,
                ),
                this.plt[i] || (this.plt[i] = []),
                this.plt[i].push(t),
                !(function (t) {
                  if ('a' == t.tagName.toLowerCase() && t.hasAttribute('href'))
                    return !0;
                  if (t.querySelector('a[href]')) return !0;
                  var i = Pt(t);
                  if (i.hasResolvableAction(t, 'tap', t.parentElement))
                    return !0;
                  for (
                    var n = t.querySelectorAll('[on]'), r = 0;
                    r < n.length;
                    r++
                  ) {
                    var a = n[r];
                    if (i.hasResolvableAction(a, 'tap', a.parentElement))
                      return !0;
                  }
                  return !1;
                })(t))
              ) {
                var r = tt(this.Ui.getRootNode(), 'amp-lightbox-gallery');
                Pt(t).setActions(t, 'tap:'.concat(r.id, '.activate'));
              }
            }),
            (i.xlt = function (t) {
              return t
                .signals()
                .whenSignal(j)
                .then(function () {
                  return C(
                    t.querySelectorAll(
                      '.amp-carousel-slide, .i-amphtml-carousel-slotted',
                    ),
                  );
                });
            }),
            (i.getElementsForLightboxGroup = function (t) {
              var i = this;
              return this.maybeInit().then(function () {
                return xt(i.plt[t]);
              });
            }),
            (i.getDescription = function (t) {
              var i = K(t, 'figure');
              if (i) {
                var n = tt(i, 'figcaption');
                if (n) return n.innerText;
              }
              var r = t.getAttribute('aria-describedby');
              if (r) {
                var a = this.Ui.getElementById(r);
                if (a) return a.innerText;
              }
              return '';
            }),
            (i.Mlt = function (t) {
              return ai[t.tagName]
                ? t.getImpl().then(function (t) {
                    return t.getDuration();
                  })
                : s();
            }),
            (i.getThumbnails = function (t) {
              var i = this;
              return this.plt[t].map(function (t) {
                return {
                  srcset: i.klt(t),
                  placeholderSrc: i.Olt(t),
                  element: t,
                  timestampPromise: i.Mlt(t),
                };
              });
            }),
            (i.Olt = function (t) {
              switch (t.tagName) {
                case 'AMP-AD':
                  return 'data:image/svg+xml;charset=utf-8,<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#1E3B63" d="M0 0h128v128H0z"/><rect fill="#2B6AC0" x="34" y="74" width="8" height="30" rx="2"/><rect fill="#2B6AC0" x="87" y="74" width="8" height="30" rx="2"/><rect fill="#ACC8F0" x="24" y="30" width="81" height="54" rx="4"/><path fill="#D1E5FF" d="M29 35h71v44H29z"/><path d="M64 53.5V66a3 3 0 0 1-6 0v-4h-5v4a3 3 0 0 1-6 0V53.5a8.5 8.5 0 0 1 17 0zm-6 0a2.5 2.5 0 0 0-5 0V56h5v-2.5zM71 45h3v.041C80.16 45.55 85 50.71 85 57s-4.84 11.45-11 11.959V69h-3a3 3 0 0 1-3-3V48a3 3 0 0 1 3-3zm3 6.083v11.834a6.002 6.002 0 0 0 0-11.834z" fill="#225CAC"/></g></svg>';
                case 'AMP-VIDEO':
                case 'AMP-YOUTUBE':
                  return 'data:image/svg+xml;charset=utf-8,<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#1E3B63" d="M0 0h128v128H0z"/><path d="M24 51h80v46a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V51z" fill="#225CAC"/><path fill="#1B519B" d="M24 49h80v12H24z"/><path fill="#D1E5FF" d="M56 49l-8 12h-9l8-12zm16 0l-8 12h-8l8-12zm32 0l-8 12h-8l8-12zm-16 0l-8 12h-8l8-12z"/><path d="M26.916 49.148l77.274-20.705-2.07-7.728a4 4 0 0 0-4.9-2.828L27.674 36.522a4 4 0 0 0-2.829 4.899l2.07 7.727z" fill="#1B519B"/><path fill="#D1E5FF" d="M57.826 40.866l-10.834-9.52-8.693 2.329 10.833 9.52zm15.454-4.141l-10.833-9.52-7.727 2.07 10.833 9.52zm30.91-8.282l-10.833-9.52-7.728 2.07 10.834 9.52zm-15.455 4.141l-10.833-9.52-7.728 2.07 10.834 9.52z"/><path d="M28 37h9.86a4 4 0 0 1 3.327 1.781L48 49l-8 12H24V41a4 4 0 0 1 4-4z" fill="#2B6AC0"/><circle fill="#D1E5FF" cx="29.5" cy="44.5" r="1.5"/><circle fill="#D1E5FF" cx="29.5" cy="55.5" r="1.5"/></g></svg>';
                default:
                  return 'data:image/svg+xml;charset=utf-8,<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M9 20.5a1.5 1.5 0 0 1-3 0c0-6.488 5-8.53 5-13.5a4 4 0 1 0-8 0 1.5 1.5 0 0 1-3 0 7 7 0 1 1 14 0c0 5.483-5 7.485-5 13.5z" id="a"/><circle id="b" cx="7.5" cy="29.5" r="1.5"/></defs><g fill="none" fill-rule="evenodd"><path fill="#1E3B63" d="M0 0h128v128H0z"/><path d="M33 24.5h62a4 4 0 0 1 4 4v54.952L78.081 104.5H33a4 4 0 0 1-4-4v-72a4 4 0 0 1 4-4z" fill="#D1E5FF"/><g transform="translate(57 48)"><use fill="#225CAC" xlink:href="#a"/><path stroke="#225CAC" d="M9.5 20.5a2 2 0 1 1-4 0c0-2.85.756-4.755 2.58-7.59l.385-.595c.152-.236.265-.412.373-.584C10.006 9.873 10.5 8.601 10.5 7a3.5 3.5 0 1 0-7 0 2 2 0 1 1-4 0 7.5 7.5 0 0 1 15 0c0 2.273-.642 3.81-2.314 6.409l-.266.412C10.133 16.592 9.5 18.103 9.5 20.5z"/></g><g transform="translate(57 48)"><use fill="#225CAC" xlink:href="#b"/><circle stroke="#225CAC" cx="7.5" cy="29.5" r="2"/></g><path d="M82 83.5h17l-21 21v-17a4 4 0 0 1 4-4z" fill="#ACC8F0"/></g></svg>';
              }
            }),
            (i.klt = function (t) {
              if (t.hasAttribute('lightbox-thumbnail-id')) {
                var i = t.getAttribute('lightbox-thumbnail-id'),
                  n = this.Ui.getElementById(i);
                if (ni.has(null == n ? void 0 : n.tagName)) return qt(n);
              }
              return this.jlt(t);
            }),
            (i.jlt = function (t) {
              if (ni.has(t.tagName)) return qt(t);
              if ('AMP-VIDEO' == t.tagName) return this.Clt(t);
              var i,
                n =
                  ((i = t),
                  Z('placeholder'),
                  q(i, '> ['.concat('placeholder', ']')));
              return n ? this.jlt(n) : null;
            }),
            (i.Clt = function (t) {
              var i = t.getAttribute('poster');
              return i ? Wt(i) : null;
            }),
            t
          );
        })();
      function si(t, i) {
        var n = Rt(t);
        return n.promise(1).then(function () {
          return n.promise(i);
        });
      }
      function li(t) {
        var i = Math.floor(t / 3600),
          n = Math.floor(t / 60),
          r = Math.floor(t % 60);
        return (
          S(i.toString(), 2, '0') +
          ':' +
          S(n.toString(), 2, '0') +
          ':' +
          S(r.toString(), 2, '0')
        );
      }
      var ui = (function () {
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
              var i, n, r;
              this.fn &&
                ((n = t),
                -1 != (r = (i = this.fn).indexOf(n)) && i.splice(r, 1));
            }),
            (i.removeAll = function () {
              this.fn && (this.fn.length = 0);
            }),
            (i.fire = function (t) {
              if (this.fn)
                for (var i, n = e(this.fn.slice(), !0); !(i = n()).done; )
                  (0, i.value)(t);
            }),
            (i.getHandlerCount = function () {
              var t, i;
              return null !==
                (t =
                  null === (i = this.fn) || void 0 === i ? void 0 : i.length) &&
                void 0 !== t
                ? t
                : 0;
            }),
            t
          );
        })(),
        hi = (function () {
          function t(t, i, n) {
            var r = this;
            (this.$r = Rt(t)),
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
        })(),
        ci = '__AMP_Gestures',
        fi = function (t, i, n, r) {
          (this.type = t), (this.data = i), (this.time = n), (this.event = r);
        },
        mi = (function () {
          function t(t) {
            var i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (this.ql = t),
              (this.e_ = []),
              (this.Dm = []),
              (this.ai = []),
              (this.u_ = []),
              (this.h_ = null);
            var r = t.ownerDocument.defaultView,
              a = Ut(r);
            (this.c_ = i || a),
              (this.l_ = n),
              (this.m_ = !1),
              (this.Zr = new hi(L(t), this.tv.bind(this))),
              (this.p_ = new ui()),
              (this.f_ = Object.create(null)),
              (this.d_ = this.Yp.bind(this)),
              (this.v_ = this.Zp.bind(this)),
              (this.y_ = this.Lp.bind(this)),
              (this.g_ = this.$m.bind(this)),
              this.ql.addEventListener(
                'touchstart',
                this.d_,
                !!a && { passive: !0 },
              ),
              this.ql.addEventListener('touchend', this.v_),
              this.ql.addEventListener(
                'touchmove',
                this.y_,
                !!a && { passive: !0 },
              ),
              this.ql.addEventListener('touchcancel', this.g_),
              (this.b_ = !1);
          }
          t.get = function (i) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              a = i[ci];
            return a || ((a = new t(i, n, r)), (i[ci] = a)), a;
          };
          var i = t.prototype;
          return (
            (i.cleanup = function () {
              this.ql.removeEventListener('touchstart', this.d_),
                this.ql.removeEventListener('touchend', this.v_),
                this.ql.removeEventListener('touchmove', this.y_),
                this.ql.removeEventListener('touchcancel', this.g_),
                delete this.ql[ci],
                this.Zr.cancel();
            }),
            (i.onGesture = function (t, i) {
              var n = new t(this),
                r = n.getType(),
                a = this.f_[r];
              return (
                a || (this.e_.push(n), (a = new ui()), (this.f_[r] = a)),
                a.add(i)
              );
            }),
            (i.removeGesture = function (t) {
              var i = new t(this).getType(),
                n = this.f_[i];
              if (n) {
                n.removeAll();
                var r = z(this.e_, function (t) {
                  return t.getType() == i;
                });
                return !(
                  r < 0 ||
                  (this.e_.splice(r, 1),
                  this.ai.splice(r, 1),
                  this.u_.splice(r, 1),
                  this.Dm.splice(r, 1),
                  delete this.f_[i],
                  0)
                );
              }
              return !1;
            }),
            (i.onPointerDown = function (t) {
              return this.p_.add(t);
            }),
            (i.Yp = function (t) {
              var i = Date.now();
              (this.m_ = !1), this.p_.fire(t);
              for (var n = 0; n < this.e_.length; n++)
                this.ai[n] ||
                  (this.u_[n] && this.u_[n] < i && this.Wm(n),
                  this.e_[n].onTouchStart(t) && this.Ym(n));
              this.x_(t);
            }),
            (i.Lp = function (t) {
              for (var i = Date.now(), n = 0; n < this.e_.length; n++)
                this.Dm[n] &&
                  (this.u_[n] && this.u_[n] < i
                    ? this.Wm(n)
                    : this.e_[n].onTouchMove(t) || this.Wm(n));
              this.x_(t);
            }),
            (i.Zp = function (t) {
              for (var i = Date.now(), n = 0; n < this.e_.length; n++)
                if (this.Dm[n])
                  if (this.u_[n] && this.u_[n] < i) this.Wm(n);
                  else {
                    this.e_[n].onTouchEnd(t);
                    var r = !this.u_[n],
                      a = this.u_[n] < i;
                    this.h_ == this.e_[n] || (!r && !a) || this.Wm(n);
                  }
              this.x_(t);
            }),
            (i.$m = function (t) {
              for (var i = 0; i < this.e_.length; i++) this.w_(i);
              this.x_(t);
            }),
            (i.qp = function (t, i) {
              if (this.h_) t.acceptCancel();
              else {
                for (var n = Date.now(), r = 0; r < this.e_.length; r++)
                  this.e_[r] == t && ((this.ai[r] = n + i), (this.u_[r] = 0));
                this.b_ = !0;
              }
            }),
            (i.k_ = function (t, i) {
              if (this.h_) t.acceptCancel();
              else
                for (var n = Date.now(), r = 0; r < this.e_.length; r++)
                  this.e_[r] == t && (this.u_[r] = n + i);
            }),
            (i.A_ = function (t) {
              this.h_ == t && ((this.h_ = null), (this.m_ = !0));
            }),
            (i.T_ = function (t, i, n) {
              B(this.h_ == t);
              var r = this.f_[t.getType()];
              r && r.fire(new fi(t.getType(), i, Date.now(), n));
            }),
            (i.x_ = function (t) {
              var i = !!this.h_ || this.m_;
              if (((this.m_ = !1), !i))
                for (var n = Date.now(), r = 0; r < this.e_.length; r++)
                  if (this.ai[r] || (this.u_[r] && this.u_[r] >= n)) {
                    i = !0;
                    break;
                  }
              i
                ? (t.stopPropagation(), this.c_ || t.preventDefault())
                : this.l_ && t.stopPropagation(),
                this.b_ && ((this.b_ = !1), this.tv());
            }),
            (i.tv = function () {
              for (var t = Date.now(), i = -1, n = 0; n < this.e_.length; n++)
                this.ai[n]
                  ? (-1 == i || this.ai[n] > this.ai[i]) && (i = n)
                  : this.u_[n] && this.u_[n] < t && this.Wm(n);
              if (-1 != i) {
                for (var r = 0, a = 0; a < this.e_.length; a++)
                  !this.ai[a] &&
                    this.Dm[a] &&
                    (r = Math.max(r, this.u_[a] - t));
                r < 2 ? this.S_(i) : this.Zr.schedule(r);
              }
            }),
            (i.S_ = function (t) {
              for (var i = this.e_[t], n = 0; n < this.e_.length; n++)
                n != t && this.w_(n);
              (this.ai[t] = 0),
                (this.u_[t] = 0),
                (this.h_ = i),
                i.acceptStart();
            }),
            (i.Ym = function (t) {
              (this.Dm[t] = !0), (this.u_[t] = 0);
            }),
            (i.Wm = function (t) {
              (this.Dm[t] = !1),
                (this.u_[t] = 0),
                this.ai[t] || this.e_[t].acceptCancel();
            }),
            (i.w_ = function (t) {
              (this.ai[t] = 0), this.Wm(t);
            }),
            t
          );
        })(),
        pi = (function () {
          function t(t, i) {
            (this.E_ = t), (this.xy = i);
          }
          var i = t.prototype;
          return (
            (i.getType = function () {
              return this.E_;
            }),
            (i.signalReady = function (t) {
              this.xy.qp(this, t);
            }),
            (i.signalPending = function (t) {
              this.xy.k_(this, t);
            }),
            (i.signalEnd = function () {
              this.xy.A_(this);
            }),
            (i.signalEmit = function (t, i) {
              this.xy.T_(this, t, i);
            }),
            (i.acceptStart = function () {}),
            (i.acceptCancel = function () {}),
            (i.onTouchStart = function (t) {
              return !1;
            }),
            (i.onTouchMove = function (t) {
              return !1;
            }),
            (i.onTouchEnd = function (t) {}),
            t
          );
        })();
      function vi(t, i, n) {
        i < 1 && (i = 1);
        var r = t / i,
          a = 0.5 + Math.min(i / 33.34, 0.5);
        return r * a + n * (1 - a);
      }
      Math.round(-16.67 / Math.log(0.95));
      var di = (function (t) {
        c(n, t);
        var i = v(n);
        function n(t) {
          return i.call(this, 'swipe-y', t, !1, !0);
        }
        return n;
      })(
        (function (t) {
          c(n, t);
          var i = v(n);
          function n(t, n, r, a) {
            var e;
            return (
              ((e = i.call(this, t, n)).P_ = r),
              (e.O_ = a),
              (e.h_ = !1),
              (e.__ = 0),
              (e.M_ = 0),
              (e.I_ = 0),
              (e.N_ = 0),
              (e.z_ = 0),
              (e.R_ = 0),
              (e.xh = 0),
              (e.j_ = 0),
              (e.C_ = 0),
              (e.D_ = 0),
              (e.L_ = 0),
              e
            );
          }
          var r = n.prototype;
          return (
            (r.onTouchStart = function (t) {
              var i = t.touches;
              return (
                !!(this.h_ && i && i.length > 1) ||
                (!(!i || 1 != i.length) &&
                  ((this.xh = Date.now()),
                  (this.__ = i[0].clientX),
                  (this.M_ = i[0].clientY),
                  !0))
              );
            }),
            (r.onTouchMove = function (t) {
              var i = t.touches;
              if (i && i.length >= 1) {
                var n = i[0],
                  r = n.clientX,
                  a = n.clientY;
                if (((this.I_ = r), (this.N_ = a), this.h_)) this.U_(!1, !1, t);
                else {
                  var e = Math.abs(r - this.__),
                    o = Math.abs(a - this.M_);
                  if (this.P_ && this.O_)
                    (e >= 8 || o >= 8) && this.signalReady(-10);
                  else if (this.P_) {
                    if (e >= 8 && e > o) this.signalReady(-10);
                    else if (o >= 8) return !1;
                  } else {
                    if (!this.O_) return !1;
                    if (o >= 8 && o > e) this.signalReady(-10);
                    else if (e >= 8) return !1;
                  }
                }
                return !0;
              }
              return !1;
            }),
            (r.onTouchEnd = function (t) {
              var i = t.touches;
              i && 0 == i.length && this.Y_(t);
            }),
            (r.acceptStart = function () {
              (this.h_ = !0),
                (this.z_ = this.__),
                (this.R_ = this.M_),
                (this.C_ = this.xh),
                (this.__ = this.I_),
                (this.M_ = this.N_),
                this.U_(!0, !1, null);
            }),
            (r.acceptCancel = function () {
              this.h_ = !1;
            }),
            (r.U_ = function (t, i, n) {
              this.j_ = Date.now();
              var r = this.j_ - this.C_;
              if ((!i && r > 4) || (i && r > 16)) {
                var a = vi(this.I_ - this.z_, r, this.D_),
                  e = vi(this.N_ - this.R_, r, this.L_);
                (!i || r > 32 || 0 != a || 0 != e) &&
                  ((this.D_ = Math.abs(a) > 1e-4 ? a : 0),
                  (this.L_ = Math.abs(e) > 1e-4 ? e : 0)),
                  (this.z_ = this.I_),
                  (this.R_ = this.N_),
                  (this.C_ = this.j_);
              }
              this.signalEmit(
                {
                  first: t,
                  last: i,
                  time: this.j_,
                  deltaX: this.I_ - this.__,
                  deltaY: this.N_ - this.M_,
                  startX: this.__,
                  startY: this.M_,
                  lastX: this.I_,
                  lastY: this.N_,
                  velocityX: this.D_,
                  velocityY: this.L_,
                },
                n,
              );
            }),
            (r.Y_ = function (t) {
              this.h_ && ((this.h_ = !1), this.U_(!1, !0, t), this.signalEnd());
            }),
            n
          );
        })(pi),
      );
      function gi(t, i, n, r) {
        return Math.sqrt(Math.pow(t - n, 2) + Math.pow(i - r, 2));
      }
      function bi(t, i, n) {
        return t + (i - t) * n;
      }
      var xi,
        yi,
        wi = (function () {
          function t(t, i, n, r) {
            (this.t = t),
              (this.ql = i),
              (this.hC = n),
              (this.M5 = r),
              (this.C5 = null),
              (this.Alt = null),
              (this.N5 = null),
              (this.Elt = null),
              (this.zlt = null),
              (this.Slt = !1);
          }
          var i = t.prototype;
          return (
            (i.startSwipe = function (t) {
              var i = this,
                n = t.hiddenElement,
                r = t.mask,
                a = t.overlay,
                e = t.swipeElement;
              (this.C5 = e),
                (this.Alt = n),
                (this.N5 = r),
                (this.Elt = a),
                (this.Slt = !0),
                this.hC(function () {
                  i.Flt();
                });
            }),
            (i.V5 = function (t, i, n, r) {
              var a = 1 * r;
              return (
                et(this.C5, {
                  transform: 'scale('
                    .concat(t, ') translate(')
                    .concat(i, 'px, ')
                    .concat(n, 'px)'),
                  transition: ''
                    .concat(a, 'ms transform ')
                    .concat('cubic-bezier(0.15, .55, .3, 0.95)'),
                }),
                si(this.t, a)
              );
            }),
            (i.H5 = function (t) {
              var i = this,
                n = 5 * t;
              return this.hC(function () {
                et(i.C5, {
                  transform: '',
                  transition: ''.concat(n, 'ms transform ease-out'),
                }),
                  et(i.N5, {
                    opacity: '',
                    transition: ''.concat(n, 'ms opacity ease-out'),
                  }),
                  et(i.Elt, {
                    opacity: '',
                    transition: ''.concat(n, 'ms opacity ease-out'),
                  });
              }).then(function () {
                return si(i.t, n);
              });
            }),
            (i.Z5 = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : '',
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : '',
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : '';
              et(this.C5, { transform: t, transition: '' }),
                et(this.N5, { opacity: i, transition: '' }),
                et(this.Elt, { opacity: n, transition: '' });
            }),
            (i.K5 = function (t, i, n, r, a) {
              var e = this,
                o = gi(0, 0, i, n),
                s = 22.5 * i + r,
                l = 22.5 * n + a,
                u = gi(0, 0, s, l);
              return this.V5(t, s, l, o).then(function () {
                return u < 50 && o < 0.65 ? e.H5(u) : e.M5();
              });
            }),
            (i.Flt = function () {
              this.Alt.classList.add('i-amphtml-ghost'),
                (this.zlt = Gt(
                  this.C5,
                  'scroll',
                  function (t) {
                    t.stopPropagation();
                  },
                  { capture: !0 },
                )),
                this.ql.setAttribute('i-amphtml-scale-animation', ''),
                at(this.Elt, 'animationFillMode', 'none');
            }),
            (i.Dlt = function () {
              this.Alt.classList.remove('i-amphtml-ghost'),
                this.zlt(),
                this.ql.removeAttribute('i-amphtml-scale-animation'),
                at(this.Elt, 'animationFillMode', '');
            }),
            (i.swipeMove = function (t) {
              var i = this,
                n = t.deltaX,
                r = t.deltaY,
                a = t.last,
                e = t.velocityX,
                o = t.velocityY,
                s = this.Slt;
              a && (this.Slt = !1);
              var l = gi(0, 0, n, r),
                u = Math.min(l / 200, 1),
                h = Math.min(l / 50, 1),
                c = bi(1, 0.85, u),
                f = bi(1, 0.2, u),
                m = bi(1, 0, h);
              this.hC(function () {
                t.last && s
                  ? i.K5(c, e, o, n, r).then(function () {
                      i.Z5(), i.Dlt();
                    })
                  : i.Slt &&
                    i.Z5(
                      'scale('
                        .concat(c, ') translate(')
                        .concat(n, 'px, ')
                        .concat(r, 'px)'),
                      f,
                      m,
                    );
              });
            }),
            t
          );
        })(),
        Mi = (function () {
          function t(t) {
            (this.Lt = t), (this.Ht = 0), (this.Ft = 0), (this.Gt = I());
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
                  var a = i[r].access;
                  a < n && ((n = a), (t = r));
                }
                void 0 !== t && (delete i[t], this.Ht--);
              }
            }),
            t
          );
        })(),
        ki = (function () {
          return self.AMP.config.urls;
        })();
      var Oi = (function () {
          return self.AMP.config.urls;
        })(),
        ji = self.__AMP_ERRORS || [];
      self.__AMP_ERRORS = ji;
      var Ci = function (t) {
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
        (Ci = function (t) {
          return setTimeout(t, n());
        }))(t);
        var i, n;
      };
      function Ai(t, i) {
        try {
          if (t)
            if (void 0 !== t.message)
              t = (function (t) {
                var i = Object.getOwnPropertyDescriptor(t, 'message');
                if (null != i && i.writable) return t;
                var n = t.message,
                  r = t.stack,
                  a = new Error(n);
                for (var e in t) a[e] = t[e];
                return (a.stack = r), a;
              })(t);
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
            var r = z(t.messageArray, function (t) {
              return null == t ? void 0 : t.tagName;
            });
            r > -1 && (t.associatedElement = t.messageArray[r]);
          }
          var a = i || t.associatedElement;
          if (
            (a &&
              a.classList &&
              (a.classList.add('i-amphtml-error'),
              mt().development &&
                (a.classList.add('i-amphtml-element-error'),
                a.setAttribute('error-message', t.message))),
            self.console && (N(t.message) || !t.expected))
          ) {
            var e = console.error || console.log;
            t.messageArray
              ? e.apply(console, t.messageArray)
              : a
                ? e.call(console, t.message, a)
                : e.call(console, t.message);
          }
          a &&
            a.dispatchCustomEventForTesting &&
            a.dispatchCustomEventForTesting('amp:error', t.message),
            Ei.call(self, void 0, void 0, void 0, void 0, t);
        } catch (t) {
          setTimeout(function () {
            throw t;
          });
        }
        return t;
      }
      function Ei(t, i, n, r, a) {
        var e,
          o = this;
        if (
          (!this ||
            !this.document ||
            (a && a.expected) ||
            (xt((e = this.document).defaultView),
            ii ||
              ((ii = !0),
              (function (t) {
                et(t.body, {
                  opacity: 1,
                  visibility: 'visible',
                  animation: 'none',
                });
              })(e))),
          !mt().development)
        ) {
          var l = !1;
          try {
            l = (function (t) {
              if (!t.document) return !1;
              for (
                var i = t.document.querySelectorAll('script[src]'), n = 0;
                n < i.length;
                n++
              )
                if (
                  ((r = i[n].src.toLowerCase()),
                  !ki.cdnProxyRegex.test(
                    (function (t) {
                      return 'string' == typeof t
                        ? (function (t, i) {
                            return (
                              xi ||
                                ((xi = self.document.createElement('a')),
                                (yi =
                                  self.__AMP_URL_CACHE ||
                                  (self.__AMP_URL_CACHE = new Mi(100)))),
                              (function (t, i, n) {
                                if (n && n.has(i)) return n.get(i);
                                (t.href = i), t.protocol || (t.href = t.href);
                                var r,
                                  a = {
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
                                '/' !== a.pathname[0] &&
                                  (a.pathname = '/' + a.pathname),
                                  (('http:' == a.protocol && 80 == a.port) ||
                                    ('https:' == a.protocol &&
                                      443 == a.port)) &&
                                    ((a.port = ''), (a.host = a.hostname)),
                                  (r =
                                    t.origin && 'null' != t.origin
                                      ? t.origin
                                      : 'data:' != a.protocol && a.host
                                        ? a.protocol + '//' + a.host
                                        : a.href),
                                  (a.origin = r);
                                var e = a;
                                return n && n.put(i, e), e;
                              })(xi, t, yi)
                            );
                          })(t)
                        : t;
                    })(r).origin,
                  ))
                )
                  return !0;
              var r;
              return !1;
            })(self);
          } catch (t) {}
          if (!(l && Math.random() < 0.99)) {
            var u = (function (t, i, n, r, a, e) {
              t = (function (t, i) {
                return (
                  i && (t = i.message ? i.message : String(i)),
                  t || (t = 'Unknown error'),
                  t
                );
              })(t, a);
              var o = !(!a || !a.expected);
              if (!/_reported_/.test(t) && 'CANCELLED' != t) {
                var s = !(self && self.window),
                  l = Math.random();
                if (
                  !(
                    ((function (t) {
                      return -1 != t.indexOf('Failed to load:');
                    })(t) ||
                      'Script error.' == t ||
                      s) &&
                    ((o = !0), l < 0.9999)
                  )
                ) {
                  var u = N(t);
                  if (!(u && l < 0.99)) {
                    var h = Object.create(null);
                    (h.v = mt().rtvVersion),
                      (h.noAmp = e ? '1' : '0'),
                      (h.m = t.replace(P, '')),
                      (h.a = u ? '1' : '0'),
                      (h.ex = o ? '1' : '0'),
                      (h.dw = s ? '1' : '0');
                    var c,
                      f,
                      m = '1p';
                    if (
                      (self.context && self.context.location
                        ? ((m = '3p'), (h['3p'] = '1'))
                        : mt().runtime && (m = mt().runtime),
                      (h.rt = m),
                      (h.cdn = Oi.cdn),
                      'inabox' === m && (h.adid = mt().a4aId),
                      (h.ca =
                        null !== (f = self.AMP_CONFIG) &&
                        void 0 !== f &&
                        f.canary
                          ? '1'
                          : '0'),
                      (h.bt =
                        (null === (c = self.AMP_CONFIG) || void 0 === c
                          ? void 0
                          : c.type) || 'unknown'),
                      self.location.ancestorOrigins &&
                        self.location.ancestorOrigins[0] &&
                        (h.or = self.location.ancestorOrigins[0]),
                      self.viewerState && (h.vs = self.viewerState),
                      self.parent && self.parent != self && (h.iem = '1'),
                      self.AMP && self.AMP.viewer)
                    ) {
                      var p = self.AMP.viewer.getResolvedViewerUrl(),
                        v = self.AMP.viewer.maybeGetMessagingOrigin();
                      p && (h.rvu = p), v && (h.mso = v);
                    }
                    var d,
                      g,
                      b,
                      x = [],
                      y = self[St] || null;
                    for (var w in y) {
                      var M = y[w];
                      x.push(''.concat(w, '=').concat(M ? '1' : '0'));
                    }
                    return (
                      (h.exps = x.join(',')),
                      a
                        ? ((h.el =
                            (null === (d = a.associatedElement) || void 0 === d
                              ? void 0
                              : d.tagName) || 'u'),
                          a.args && (h.args = JSON.stringify(a.args)),
                          u || a.ignoreStack || !a.stack || (h.s = a.stack),
                          a.message && (a.message += ' _reported_'))
                        : ((h.f = i || ''), (h.l = n || ''), (h.c = r || '')),
                      (h.r = self.document ? self.document.referrer : ''),
                      (h.ae = ji.join(',')),
                      (h.fr = self.location.originalHash || self.location.hash),
                      'production' === h.bt && (h.pt = '1'),
                      (b = t),
                      (g = ji).length >= 25 && g.splice(0, g.length - 25 + 1),
                      g.push(b),
                      h
                    );
                  }
                }
              }
            })(t, i, n, r, a, l);
            u &&
              Ci(function () {
                try {
                  return (function (t, i) {
                    return i.pt && Math.random() < 0.9
                      ? s()
                      : (function (t, i) {
                          var n = (function (t) {
                            return wt(t, 'ampdoc');
                          })(t);
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
                          var a = Mt(r, 'viewer');
                          return a.hasCapability('errorReporter')
                            ? a.isTrustedViewer().then(function (t) {
                                return (
                                  !!t &&
                                  (a.sendMessage('error', {
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
                            n.open(
                              'POST',
                              Math.random() < 0.1
                                ? Oi.betaErrorReporting
                                : Oi.errorReporting,
                              !0,
                            ),
                              n.send(JSON.stringify(i));
                          }
                        });
                  })(o, u).catch(function () {});
                } catch (t) {}
              });
          }
        }
      }
      var zi = [
          '<div class=i-amphtml-lbg><div class=i-amphtml-lbg-mask></div></div>',
        ],
        Si = ['<div class=i-amphtml-lbg-overlay></div>'],
        Fi = ['<amp-image-viewer layout=fill></amp-image-viewer>'],
        Di = [
          '<amp-carousel type=slides layout=fill loop=true></amp-carousel>',
        ],
        Ii = ['<div class=i-amphtml-lbg-gallery></div>'],
        Pi = [
          '<div class=i-amphtml-lbg-gallery-thumbnail><img class=i-amphtml-lbg-gallery-thumbnail-img></div>',
        ],
        Ti = [
          '<div class=i-amphtml-lbg-thumbnail-timestamp-container><span class=i-amphtml-lbg-thumbnail-play-icon></span><div></div></div>',
        ],
        Ni = 'amp-lightbox-gallery',
        Bi = 'amp-carousel',
        Ri = '.i-amphtml-slide-item, .i-amphtml-carousel-slotted',
        Li = { x1: 0.8, y1: 0, x2: 0.2, y2: 1 },
        Ui = (function (t) {
          c(n, t);
          var i = v(n);
          function n(t) {
            var n;
            return (
              ((n = i.call(this, t)).Yl = n.win.document),
              (n.Ilt = !1),
              (n.iY = -1),
              (n.Plt = -1),
              (n.$c = n.Wc.bind(u(n))),
              (n.Tlt = n.Nlt.bind(u(n))),
              (n.xy = null),
              (n.Cs = null),
              (n.oe = null),
              (n.Blt = { default: [] }),
              (n.dj = null),
              (n.Rlt = null),
              (n.Elt = null),
              (n.N5 = null),
              (n.Llt = null),
              (n._6 = null),
              (n.Ult = null),
              (n.Glt = null),
              (n.Vlt = null),
              (n._lt = null),
              (n.Hlt = 1),
              (n.Xlt = null),
              (n.Ylt = 'default'),
              (n.Jlt = !1),
              (n.Zlt = n.measureMutateElement.bind(u(n))),
              (n.h6 = new wi(
                n.win,
                n.element,
                function (t) {
                  return n.mutateElement(t);
                },
                function () {
                  return n.Hx();
                },
              )),
              n
            );
          }
          var a = n.prototype;
          return (
            (a.renderOutsideViewport = function () {
              return !0;
            }),
            (a.buildCallback = function () {
              var t,
                i = this;
              return ((t = this.element),
              (function (t, i, n, r) {
                return Ft(t, i, n, void 0).then(function (t) {
                  return (function (t, i, n) {
                    return yt(
                      t,
                      'Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.',
                      'amp-lightbox-manager',
                      n,
                      n,
                      n,
                    );
                  })(t, 0, n);
                });
              })(t, 'amp-lightbox-manager', 'amp-lightbox-gallery'))
                .then(function (t) {
                  return (
                    (i.xy = t),
                    (i.Cs = Mt(i.getAmpDoc(), 'history')),
                    (i.oe = Pt(i.element)),
                    i.getAmpDoc().whenFirstVisible()
                  );
                })
                .then(function () {
                  (i.dj = it(i.Yl)(zi)),
                    (i.N5 = i.dj.querySelector('.i-amphtml-lbg-mask')),
                    i.element.appendChild(i.dj),
                    i.xy.maybeInit(),
                    i.registerDefaultAction(function (t) {
                      return i.$lt(t);
                    }, 'open');
                });
            }),
            (a.layoutCallback = function () {
              return s();
            }),
            (a.qlt = function () {
              var t = this;
              this.Elt = it(this.Yl)(Si);
              var i = this.Wlt(),
                n = this.Klt();
              this.mutateElement(function () {
                t.Elt.appendChild(i),
                  t.Elt.appendChild(n),
                  t.dj.appendChild(t.Elt);
              });
            }),
            (a.Qlt = function (t) {
              return (
                this.Rlt ||
                  ((this.Rlt = this.Yl.createElement('div')),
                  this.dj.appendChild(this.Rlt)),
                this.Elt || this.qlt(),
                this.Cmt(t)
              );
            }),
            (a.Emt = function (t) {
              if (t.classList.contains('amp-notsupported')) {
                var i = t.getFallback();
                i && (t = i);
              }
              var n = !t.classList.contains('i-amphtml-element'),
                r = t.cloneNode(n);
              return (
                r.removeAttribute('on'),
                r.removeAttribute('id'),
                r.removeAttribute('i-amphtml-layout'),
                r.removeAttribute('fallback'),
                r
              );
            }),
            (a.Fmt = function (t) {
              var i = this,
                n = 0;
              (this.Blt[this.Ylt] = []),
                t.forEach(function (t) {
                  t.lightboxItemId = n++;
                  var r = i.Emt(t),
                    a = {
                      descriptionText: i.xy.getDescription(t),
                      tagName: r.tagName,
                      sourceElement: t,
                      element: r,
                    },
                    e = r;
                  if (ri.has(r.tagName)) {
                    var o = i.Yl.createElement('div'),
                      s = it(i.Yl)(Fi);
                    for (var l in r.dataset) o.dataset[l] = r.dataset[l];
                    r.removeAttribute('class'),
                      s.appendChild(r),
                      o.appendChild(s),
                      (e = o),
                      (a.imageViewer = s);
                  }
                  i._6.appendChild(e), i.Blt[i.Ylt].push(a);
                });
            }),
            (a.Cmt = function (t) {
              xt(this.dj);
              var i = this.element.querySelector(
                'amp-carousel[amp-lightbox-group='.concat(J(t), ']'),
              );
              return i ? ((this._6 = i), this.Dmt(t)) : this.Imt(t);
            }),
            (a.Dmt = function (t) {
              var i = this;
              return this.mutateElement(function () {
                var n = i.Blt[t].length;
                i.Nmt(n),
                  Bt(i.element).scheduleUnlayout(i.element, i._6),
                  ot(i._6, !0);
              });
            }),
            (a.Imt = function (t) {
              var i,
                n,
                a,
                o = this,
                s = this.getAmpDoc().getExtensionVersion(Bi),
                l =
                  ((i = this.win),
                  (n = 'amp-lightbox-gallery-carousel-0-2'),
                  (a = (function (t) {
                    var i, n, a, o, s;
                    if (t[St]) return t[St];
                    t[St] = I();
                    var l = t[St];
                    B(l);
                    var u,
                      h = r(
                        r(
                          {},
                          null !== (i = t.AMP_CONFIG) && void 0 !== i ? i : {},
                        ),
                        null !== (n = t.AMP_EXP) && void 0 !== n
                          ? n
                          : ((u =
                              (null === (a = t.__AMP_EXP) || void 0 === a
                                ? void 0
                                : a.textContent) || '{}'),
                            JSON.parse(u)),
                      );
                    for (var c in h) {
                      var f = h[c];
                      'number' == typeof f &&
                        f >= 0 &&
                        f <= 1 &&
                        (l[c] = Math.random() < f);
                    }
                    var m =
                      null === (o = t.AMP_CONFIG) || void 0 === o
                        ? void 0
                        : o['allow-doc-opt-in'];
                    if (A(m) && m.length) {
                      var p = t.document.head.querySelector(
                        'meta[name="amp-experiments-opt-in"]',
                      );
                      if (p)
                        for (
                          var v,
                            d,
                            g = e(
                              (null === (v = p.getAttribute('content')) ||
                              void 0 === v
                                ? void 0
                                : v.split(',')) || [],
                              !0,
                            );
                          !(d = g()).done;

                        ) {
                          var b = d.value;
                          m.includes(b) && (l[b] = !0);
                        }
                    }
                    Object.assign(
                      l,
                      (function (t) {
                        var i,
                          n = '';
                        try {
                          var r;
                          'localStorage' in t &&
                            (n =
                              null !==
                                (r = t.localStorage.getItem(
                                  'amp-experiment-toggles',
                                )) && void 0 !== r
                                ? r
                                : '');
                        } catch (t) {
                          (dt.dev || (dt.dev = gt())).warn(
                            'EXPERIMENTS',
                            'Failed to retrieve experiments from localStorage.',
                          );
                        }
                        for (
                          var a,
                            o =
                              (null === (i = n) || void 0 === i
                                ? void 0
                                : i.split(/\s*,\s*/g)) || [],
                            s = I(),
                            l = e(o, !0);
                          !(a = l()).done;

                        ) {
                          var u = a.value;
                          u &&
                            ('-' == u[0] ? (s[u.substr(1)] = !1) : (s[u] = !0));
                        }
                        return s;
                      })(t),
                    );
                    var x =
                      null === (s = t.AMP_CONFIG) || void 0 === s
                        ? void 0
                        : s['allow-url-opt-in'];
                    if (A(x) && x.length)
                      for (
                        var y,
                          w = ht(t.location.originalHash || t.location.hash),
                          M = e(x, !0);
                        !(y = M()).done;

                      ) {
                        var k = y.value,
                          O = w['e-'.concat(k)];
                        '1' == O && (l[k] = !0), '0' == O && (l[k] = !1);
                      }
                    return l;
                  })(i)),
                  a[n] ? '0.2' : '0.1'),
                u = null != s ? s : l;
              return Promise.all([
                Nt(this.win).installExtensionForDoc(this.getAmpDoc(), Bi, u),
                Nt(this.win).installExtensionForDoc(
                  this.getAmpDoc(),
                  'amp-image-viewer',
                ),
              ])
                .then(function () {
                  return o.xy.getElementsForLightboxGroup(t);
                })
                .then(function (i) {
                  return (
                    (o._6 = it(o.Yl)(Di)),
                    o._6.setAttribute('amp-lightbox-group', t),
                    o.Fmt(i),
                    o.mutateElement(function () {
                      o.Rlt.appendChild(o._6), o.Nmt(i.length);
                    })
                  );
                });
            }),
            (a.Nmt = function (t) {
              var i, n, r, a, e;
              (n = 'i-amphtml-lbg-single-item'),
                (r = t <= 1),
                (a = (i = this.element).hasAttribute(n)),
                (e = void 0 !== r ? r : !a) !== a &&
                  (e ? i.setAttribute(n, '') : i.removeAttribute(n));
            }),
            (a.Nlt = function (t) {
              var i = (function (t) {
                return t.data;
              })(t).index;
              i != this.Plt && ((this.Plt = i), this.Bmt());
            }),
            (a.Wlt = function () {
              var t = this;
              this.Ult = Xt.build(this.Yl, this.Zlt);
              var i = this.Ult.getElement();
              return (
                i.addEventListener('click', function (i) {
                  Lt(t.element, 'descriptionOverflowToggled'),
                    t.Ult.toggleOverflow(),
                    i.stopPropagation(),
                    i.preventDefault();
                }),
                i
              );
            }),
            (a.Klt = function () {
              var t = this;
              this.Glt = Zt.build(this.win, this.Yl, this.Zlt);
              var i = this.Glt.getElement();
              return (
                i.addEventListener('action', function (i) {
                  switch (
                    (function (t) {
                      return t.detail;
                    })(i).action
                  ) {
                    case Jt.CLOSE:
                      t.Hx();
                      break;
                    case Jt.GALLERY:
                      t.Lmt();
                      break;
                    case Jt.SLIDES:
                      t.Umt();
                      break;
                    case Jt.NEXT:
                      t.Gmt();
                      break;
                    case Jt.PREV:
                      t.Vmt();
                  }
                }),
                i
              );
            }),
            (a.Bmt = function () {
              var t = this,
                i =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                n = this._mt().descriptionText;
              this.mutateElement(function () {
                t.Ult.setContent(n),
                  t.Ult.setOverflowState(_t),
                  t.Ult.toggleOverflow(i);
              });
            }),
            (a.Gmt = function () {
              xt(this._6)
                .getImpl()
                .then(function (t) {
                  t.interactionNext();
                });
            }),
            (a.Vmt = function () {
              xt(this._6)
                .getImpl()
                .then(function (t) {
                  t.interactionPrev();
                });
            }),
            (a.E5 = function (t) {
              var i = t.target,
                n =
                  null !==
                  W(
                    i,
                    function (t) {
                      return (
                        'BUTTON' == t.tagName ||
                        'A' == t.tagName ||
                        'button' == t.getAttribute('role')
                      );
                    },
                    this.dj,
                  ),
                r = this.oe.hasAction(i, 'tap', this.dj);
              return !(n || r);
            }),
            (a.Hmt = function (t) {
              this.E5(t) &&
                (0 == this.Hlt
                  ? this.Xmt()
                  : this.dj.hasAttribute('gallery-view') || this.Ymt()),
                Lt(this.element, 'controlsToggled');
            }),
            (a.Xmt = function () {
              this.Elt.setAttribute('i-amphtml-lbg-fade', 'in'), (this.Hlt = 1);
            }),
            (a.Ymt = function () {
              this.Elt.setAttribute('i-amphtml-lbg-fade', 'out'),
                (this.Hlt = 0);
            }),
            (a.Jmt = function () {
              xt(this.dj);
              var t = this.Hmt.bind(this);
              this.Xlt = Gt(this.dj, 'click', t);
            }),
            (a.Zmt = function () {
              this.Xlt && (this.Xlt(), (this.Xlt = null));
            }),
            (a.bZ = function () {
              var t = this;
              mi.get(this._6).onGesture(di, function (i) {
                var n = i.data;
                t.$mt(n);
              });
            }),
            (a.$mt = function (t) {
              if (t.first) {
                var i = this._mt().sourceElement,
                  n = this.qmt(i);
                this.h6.startSwipe({
                  swipeElement: this._6,
                  hiddenElement: n || i,
                  mask: this.N5,
                  overlay: this.Elt,
                });
              } else this.h6.swipeMove(t);
            }),
            (a.Wmt = function () {
              var t = this.Ylt,
                i = this.Blt[t].map(function (t) {
                  return t.element;
                });
              Bt(this.element).schedulePause(this.element, i);
            }),
            (a._mt = function () {
              var t = this.Ylt;
              return xt(this.Blt[t][this.Plt]);
            }),
            (a.open = function (t) {
              var i = this,
                n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              return this.Kmt(t, n)
                .then(function () {
                  return i.Cs.push(i.Hx.bind(i));
                })
                .then(function (t) {
                  i.iY = t;
                });
            }),
            (a.$lt = function (t) {
              var i = t.args || {},
                n = i.id,
                r = i.expandDescription,
                a = n ? this.getAmpDoc().getElementById(n) : t.caller;
              yt(
                a,
                'amp-lightbox-gallery.open: element with id: %s not found',
                n,
              ),
                this.open(a, r);
            }),
            (a.Kmt = function (t, i) {
              var n,
                r,
                a = this,
                e = t.getAttribute('lightbox') || 'default';
              return (
                (this.Ylt = e),
                (this.Jlt =
                  ((r = (n = this.win).document.documentElement),
                  n.innerWidth - r.clientWidth > 0)),
                this.Qlt(e)
                  .then(function () {
                    return a.getViewport().enterLightboxMode();
                  })
                  .then(function () {
                    return a.mutateElement(function () {
                      ot(a.element, !0),
                        at(a.element, 'opacity', 0),
                        a.Elt.removeAttribute('i-amphtml-lbg-fade');
                    });
                  })
                  .then(function () {
                    return (
                      (a.Ilt = !0),
                      Bt(a.element).scheduleLayout(a.element, a.dj),
                      a.Yl.documentElement.addEventListener('keydown', a.$c),
                      a._6.addEventListener('slideChange', a.Tlt),
                      a.bZ(),
                      a.Jmt(),
                      a._6.signals().whenSignal(j)
                    );
                  })
                  .then(function () {
                    return a.Qmt(t, i);
                  })
                  .then(function () {
                    at(a.element, 'opacity', ''),
                      a.Xmt(),
                      Lt(a.element, 'lightboxOpened');
                  })
              );
            }),
            (a.Qmt = function (t, i) {
              var n = this;
              return (
                (this.Plt = t.lightboxItemId),
                xt(this._6)
                  .getImpl()
                  .then(function (t) {
                    return t.goToSlide(n.Plt);
                  }),
                this.Bmt(i),
                this.vb()
              );
            }),
            (a.Fpt = function (t) {
              return (
                !!(
                  t &&
                  ((i = t),
                  i.complete ||
                    'complete' == i.readyState ||
                    ((function (t) {
                      return 'AUDIO' === t.tagName || 'VIDEO' === t.tagName;
                    })(i) &&
                      i.readyState > 0) ||
                    (i.document && 'complete' == i.document.readyState))
                ) &&
                !!ri.has(t.tagName) &&
                !!tt(t, 'img')
              );
              var i;
            }),
            (a.Dpt = function () {
              var t = this._mt().sourceElement;
              return this.Fpt(t);
            }),
            (a.Ipt = function (t, i) {
              var n = this;
              return this._mt()
                .imageViewer.getImpl()
                .then(function (r) {
                  var a = r.getImageBoxWithOffset() || {},
                    e = a.height;
                  if (!a.width || !e) return n.Ppt(i);
                  var o = r.getImage(),
                    s = Q(t, 'img');
                  return n.Tpt(i ? s : o, i ? o : s, i);
                });
            }),
            (a.Npt = function (t, i) {
              var n = t.getBoundingClientRect(),
                r = i.getBoundingClientRect(),
                a = this.getViewport().getSize().height,
                e = Math.abs(r.top - n.top);
              return this.Onn(Math.abs(e), a);
            }),
            (a.Tpt = function (t, i, n) {
              var r,
                a,
                e,
                o = this,
                s = this._6,
                l = this.dj,
                u = function () {
                  ot(o.element, n),
                    at(l, 'animationName', ''),
                    at(s, 'animationName', ''),
                    t.classList.remove('i-amphtml-ghost'),
                    i.classList.remove('i-amphtml-ghost'),
                    e && e.cleanupAnimation();
                };
              return this.measureMutateElement(
                function () {
                  var n = K(t, 'amp-img') || t,
                    s = K(i, 'amp-img') || i;
                  (r = o.Npt(t, i)), (a = 0.8 * r);
                  try {
                    e = (function (t) {
                      var i = t.transitionContainer,
                        n = void 0 === i ? document.body : i,
                        r = t.styleContainer,
                        a = void 0 === r ? document.head : r,
                        e = t.srcImg,
                        o = t.targetImg,
                        s = t.srcImgRect,
                        l = void 0 === s ? e.getBoundingClientRect() : s,
                        u = t.srcCropRect,
                        h = void 0 === u ? l : u,
                        c = t.targetImgRect,
                        f = void 0 === c ? o.getBoundingClientRect() : c,
                        m = t.targetCropRect,
                        p = void 0 === m ? f : m,
                        v = t.curve,
                        d = void 0 === v ? M : v,
                        b = t.styles,
                        j = t.keyframesNamespace,
                        C = void 0 === j ? 'img-transform' : j;
                      (e = O(e, l, h)),
                        (f = (o = (p = O(o, f, p)).s > e.s) ? e : p),
                        (p = o ? p : e),
                        (k += 1),
                        (e = ''.concat(C, '-').concat(k, '-'));
                      var A,
                        E,
                        z,
                        S,
                        F,
                        D,
                        I,
                        P,
                        T,
                        N,
                        B,
                        R,
                        L = (function (t) {
                          var i =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : t.getBoundingClientRect(),
                            n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : i,
                            r =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : getComputedStyle(t).getPropertyValue(
                                    'object-position',
                                  ),
                            a =
                              arguments.length > 4 && void 0 !== arguments[4]
                                ? arguments[4]
                                : g(t, i);
                          (i = x(r, i, a)), (r = document.createElement('div'));
                          var e = document.createElement('div'),
                            o = document.createElement('div'),
                            s = document.createElement('div'),
                            l = document.createElement('div');
                          return (
                            ((t = t.cloneNode(!0)).className = ''),
                            (t.style.cssText = ''),
                            l.appendChild(t),
                            s.appendChild(l),
                            o.appendChild(s),
                            e.appendChild(o),
                            r.appendChild(e),
                            Object.assign(e.style, {
                              overflow: 'hidden',
                              width: ''.concat(n.width, 'px'),
                              height: ''.concat(n.height, 'px'),
                            }),
                            Object.assign(l.style, {
                              transform: 'translate('
                                .concat(i.left, 'px,')
                                .concat(i.top, 'px)'),
                            }),
                            Object.assign(t.style, {
                              display: 'block',
                              width: ''.concat(a.width, 'px'),
                              height: ''.concat(a.height, 'px'),
                            }),
                            { J: r, m: e, i: o, v: s, A: l, j: t }
                          );
                        })(p.j, p.rect, p.c, p.objectPosition, p.h),
                        U = L.J,
                        G = L.m,
                        V = L.i,
                        _ = L.v,
                        H = L.A,
                        X = L.j;
                      (l = (function t(i) {
                        var n = getComputedStyle(i).position;
                        return 'static' != n
                          ? i
                          : (n = i.offsetParent || i.parentElement)
                            ? t(n)
                            : i;
                      })(n).getBoundingClientRect()),
                        (C = (function (t) {
                          var i = t.m,
                            n = t.i,
                            r = t.f,
                            a = t.g,
                            e = t.curve,
                            o = t.styles,
                            s = t.a,
                            l = t.b,
                            u = ''.concat(s, '-crop');
                          (s = ''.concat(s, '-counterScale')),
                            (a = {
                              x: a.width / r.width,
                              y: a.height / r.height,
                            });
                          var h = { x: 1, y: 1 };
                          return (
                            (r = l ? a : h),
                            (l = l ? h : a),
                            Object.assign(i.style, o, {
                              willChange: 'transform',
                              transformOrigin: 'top left',
                              animationName: u,
                              animationTimingFunction: 'linear',
                              animationFillMode: 'forwards',
                            }),
                            Object.assign(n.style, o, {
                              willChange: 'transform',
                              transformOrigin: 'top left',
                              animationName: s,
                              animationTimingFunction: 'linear',
                              animationFillMode: 'forwards',
                            }),
                            (function (t) {
                              for (
                                var i = t.I,
                                  n = t.w,
                                  r = t.curve,
                                  a = t.F,
                                  e = t.u,
                                  o = '',
                                  s = '',
                                  l = 0;
                                20 >= l;
                                l++
                              ) {
                                var u = 0.05 * l,
                                  h = w(r.y1, r.y2, u);
                                u = 100 * w(r.x1, r.x2, u);
                                var c = i.x;
                                c += h * (n.x - c);
                                var f = i.y;
                                (o += ''
                                  .concat(u, '% {transform: scale(')
                                  .concat(c, ',')
                                  .concat((h = f + h * (n.y - f)), ');}')),
                                  (s += ''
                                    .concat(u, '% {transform: scale(')
                                    .concat((f = 1 / c), ',')
                                    .concat(1 / h, ');}'));
                              }
                              return '@keyframes '
                                .concat(a, ' {')
                                .concat(o, '}@keyframes ')
                                .concat(e, ' {')
                                .concat(s, '}');
                            })({ I: r, w: l, curve: e, F: u, u: s })
                          );
                        })({
                          m: G,
                          i: V,
                          f: p.c,
                          g: f.c,
                          curve: d,
                          styles: b,
                          a: e,
                          b: o,
                        })),
                        (l = (function (t) {
                          var i = t.element,
                            n = t.D,
                            r = t.f,
                            a = t.g,
                            e = t.curve,
                            o = t.styles,
                            s = t.a,
                            l = t.b;
                          s = ''.concat(s, '-translation');
                          var u = l ? a : r;
                          return (
                            (r = l ? r : a),
                            (a = u.left - r.left),
                            (u = u.top - r.top),
                            Object.assign(i.style, o, {
                              position: 'absolute',
                              top: ''.concat(r.top - n.top, 'px'),
                              left: ''.concat(r.left - n.left, 'px'),
                              willChange: 'transform',
                              animationName: s,
                              animationTimingFunction: y(e),
                              animationFillMode: 'forwards',
                            }),
                            '@keyframes '
                              .concat(s, ' {from {transform: translate(')
                              .concat(a, 'px,')
                              .concat(
                                u,
                                'px);}to {transform: translate(0,0);}}',
                              )
                          );
                        })({
                          element: U,
                          D: l,
                          f: p.c,
                          g: f.c,
                          curve: d,
                          styles: b,
                          a: e,
                          b: o,
                        })),
                        (E = (A = {
                          element: H,
                          f: p.rect,
                          g: f.rect,
                          l: p.h,
                          o: f.h,
                          C: p.objectPosition,
                          H: f.objectPosition,
                          curve: d,
                          styles: b,
                          a: e,
                          b: o,
                        }).element),
                        (z = A.f),
                        (S = A.g),
                        (F = A.l),
                        (D = A.o),
                        (I = A.C),
                        (P = A.H),
                        (N = A.styles),
                        (B = A.a),
                        (R = A.b),
                        (T = y((T = A.curve))),
                        (B = ''.concat(B, '-object-position')),
                        (z = x(I, z, F)),
                        (D = x(P, S, D)),
                        (S = R ? D : z),
                        (R = R ? z : D),
                        Object.assign(E.style, N, {
                          willChange: 'transform',
                          animationName: B,
                          animationTimingFunction: T,
                          animationFillMode: 'forwards',
                        }),
                        (h = '@keyframes '
                          .concat(B, ' {from {transform: translate(')
                          .concat(S.left, 'px,')
                          .concat(S.top, 'px);}to {transform: translate(')
                          .concat(R.left, 'px,')
                          .concat(R.top, 'px);}}'));
                      var Y = (function (t) {
                        var i = t.element,
                          n = t.f,
                          r = t.B,
                          a = t.g,
                          e = t.G,
                          o = t.curve,
                          s = t.styles,
                          l = t.a,
                          u = t.b;
                        return (
                          (l = ''.concat(l, '-crop-position')),
                          (n = { top: n.top - r.top, left: n.left - r.left }),
                          (e = { top: a.top - e.top, left: a.left - e.left }),
                          (a = u ? e : n),
                          (u = u ? n : e),
                          Object.assign(i.style, s, {
                            willChange: 'transform',
                            animationName: l,
                            animationTimingFunction: y(o),
                            animationFillMode: 'forwards',
                          }),
                          '@keyframes '
                            .concat(l, ' {from {transform: translate(')
                            .concat(a.left, 'px,')
                            .concat(a.top, 'px);}to {transform: translate(')
                            .concat(u.left, 'px,')
                            .concat(u.top, 'px);}}')
                        );
                      })({
                        element: _,
                        f: p.rect,
                        B: p.c,
                        g: f.rect,
                        G: f.c,
                        curve: d,
                        styles: b,
                        a: e,
                        b: o,
                      });
                      d = (function (t) {
                        var i = t.element,
                          n = t.l,
                          r = t.o,
                          a = t.curve,
                          e = t.styles,
                          o = t.a,
                          s = t.b;
                        o = ''.concat(o, '-scale');
                        var l = { x: 1, y: 1 };
                        return (
                          (r = {
                            x: r.width / n.width,
                            y: r.height / n.height,
                          }),
                          (n = s ? r : l),
                          (s = s ? l : r),
                          Object.assign(i.style, e, {
                            willChange: 'transform',
                            transformOrigin: 'top left',
                            animationName: o,
                            animationTimingFunction: y(a),
                            animationFillMode: 'forwards',
                          }),
                          '@keyframes '
                            .concat(o, ' {from {transform: scale(')
                            .concat(n.x, ',')
                            .concat(n.y, ');}to {transform: scale(')
                            .concat(s.x, ',')
                            .concat(s.y, ');}}')
                        );
                      })({
                        element: X,
                        l: p.h,
                        o: f.h,
                        curve: d,
                        styles: b,
                        a: e,
                        b: o,
                      });
                      var J = document.createElement('style');
                      return (
                        (J.textContent = C + l + h + Y + d),
                        {
                          applyAnimation: function () {
                            a.appendChild(J), n.appendChild(U);
                          },
                          cleanupAnimation: function () {
                            n.removeChild(U), a.removeChild(J);
                          },
                        }
                      );
                    })({
                      styleContainer: o.getAmpDoc().getHeadNode(),
                      transitionContainer: o.getAmpDoc().getBody(),
                      srcImg: t,
                      srcCropRect: n.getBoundingClientRect(),
                      targetImg: i,
                      targetCropRect: s.getBoundingClientRect(),
                      styles: {
                        animationDuration: ''.concat(a, 'ms'),
                        zIndex: 2147483642,
                      },
                      keyframesNamespace: void 0,
                      curve: Li,
                    });
                  } catch (t) {
                    Ai(t);
                  }
                },
                function () {
                  ot(s, n),
                    at(o.element, 'opacity', ''),
                    et(l, {
                      animationName: n ? 'fadeIn' : 'fadeOut',
                      animationTimingFunction: 'cubic-bezier(0.8, 0, 0.2, 1)',
                      animationDuration: ''.concat(a, 'ms'),
                      animationFillMode: 'forwards',
                    }),
                    et(s, {
                      animationName: 'fadeIn',
                      animationDelay: ''.concat(a - 0.01, 'ms'),
                      animationDuration: '0.01ms',
                      animationFillMode: 'forwards',
                    }),
                    t.classList.add('i-amphtml-ghost'),
                    i.classList.add('i-amphtml-ghost'),
                    e && e.applyAnimation();
                },
              )
                .then(function () {
                  return si(o.win, r);
                })
                .then(function () {
                  return o.mutateElement(u);
                });
            }),
            (a.Bpt = function (t) {
              return this.Ipt(t, !0);
            }),
            (a.Rpt = function (t) {
              return this.Ipt(t, !1);
            }),
            (a.Ppt = function (t) {
              var i = this;
              return this.mutateElement(function () {
                t &&
                  (Bt(i.element).scheduleUnlayout(i.element, i._6),
                  ot(i._6, !0),
                  ot(i.element, !0)),
                  i.element.setAttribute(
                    'i-amphtml-lbg-fade',
                    t ? 'in' : 'out',
                  );
              })
                .then(function () {
                  return si(i.win, 400);
                })
                .then(function () {
                  i.element.removeAttribute('i-amphtml-lbg-fade'),
                    t || (ot(i._6, !1), ot(i.element, !1));
                });
            }),
            (a.vb = function () {
              var t = this,
                i = this._mt().sourceElement;
              return this.Fpt(i)
                ? this._mt()
                    .imageViewer.signals()
                    .whenSignal(j)
                    .then(function () {
                      return t.Bpt(i);
                    })
                : this.Ppt(!0);
            }),
            (a.mb = function () {
              var t = this._mt().sourceElement;
              return this.Dpt() ? this.Rpt(t) : this.Ppt(!1);
            }),
            (a.Onn = function (t) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 250,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 500,
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 700,
                a = (Math.abs(t) / i) * r;
              return st(a, n, r);
            }),
            (a.qmt = function (t) {
              return K(t, 'amp-carousel[type="slides"], amp-base-carousel');
            }),
            (a.Lpt = function () {
              var t,
                i,
                n = this._mt().sourceElement,
                r = this.qmt(n);
              if (r) {
                var a = C(
                    ((i = Ri),
                    X((t = r)) ? t.querySelectorAll(Y(i, ':scope')) : $(t, i)),
                  ),
                  e = K(n, Ri),
                  o = a.indexOf(e);
                xt(r)
                  .getImpl()
                  .then(function (t) {
                    return t.goToSlide(o);
                  });
              }
            }),
            (a.Hx = function () {
              var t = this;
              return this.Ilt
                ? (this.Lpt(),
                  (this.Ilt = !1),
                  this.Zmt(),
                  this.Yl.documentElement.removeEventListener(
                    'keydown',
                    this.$c,
                  ),
                  this._6.removeEventListener('slideChange', this.Tlt),
                  mi.get(this._6).cleanup(),
                  this.Ult.toggleOverflow(!1),
                  this.mutateElement(function () {
                    t.Jlt || t.getViewport().leaveLightboxMode(),
                      t.dj.removeAttribute('gallery-view'),
                      t.Vlt &&
                        (t.Vlt.classList.add('i-amphtml-ghost'),
                        (t.Vlt = null));
                  })
                    .then(function () {
                      return t.mb();
                    })
                    .then(function () {
                      t.Jlt && t.getViewport().leaveLightboxMode(),
                        Bt(t.element).schedulePause(t.element, t.dj),
                        t.Wmt(),
                        (t._6 = null),
                        -1 != t.iY && t.Cs.pop(t.iY);
                    }))
                : s();
            }),
            (a.Wc = function (t) {
              if (this.Ilt)
                switch (t.key) {
                  case 'Escape':
                    this.Hx();
                    break;
                  case 'ArrowLeft':
                    this.Upt(-1);
                    break;
                  case 'ArrowRight':
                    this.Upt(1);
                }
            }),
            (a.Upt = function (t) {
              this.dj.hasAttribute('gallery-view') ||
                xt(this._6)
                  .getImpl()
                  .then(function (i) {
                    i.goCallback(t, !0, !1);
                  });
            }),
            (a.Lmt = function () {
              var t = this;
              this.Vlt || this.Gpt(),
                this.Ult.toggleOverflow(!1),
                this.mutateElement(function () {
                  t.dj.setAttribute('gallery-view', ''), ot(t._6, !1);
                }),
                Lt(this.element, 'thumbnailsViewToggled');
            }),
            (a.Umt = function () {
              var t = this;
              return this.mutateElement(function () {
                t.dj.removeAttribute('gallery-view'),
                  Bt(t.element).scheduleUnlayout(t.element, t._6),
                  ot(t._6, !0),
                  t.Bmt();
              });
            }),
            (a.Gpt = function () {
              var t = this,
                i = this.Ylt;
              (this.Vlt = this.element.querySelector(
                '.i-amphtml-lbg-gallery[amp-lightbox-group='.concat(J(i), ']'),
              )),
                this.Vlt
                  ? (this.Vlt.classList.remove('i-amphtml-ghost'), this.Vpt())
                  : ((this.Vlt = it(this.Yl)(Ii)),
                    this.Vlt.setAttribute('amp-lightbox-group', this.Ylt),
                    this._pt(),
                    this.mutateElement(function () {
                      t.dj.appendChild(t.Vlt);
                    }));
            }),
            (a.Vpt = function () {
              var t = this,
                i = this.xy
                  .getThumbnails(this.Ylt)
                  .map(function (t, i) {
                    return r({ index: i }, t);
                  })
                  .filter(function (t) {
                    return ai[t.element.tagName];
                  });
              this.mutateElement(function () {
                i.forEach(function (i) {
                  i.timestampPromise.then(function (n) {
                    if (n && !isNaN(n)) {
                      var r = li(n),
                        a = Q(t.Vlt.childNodes[i.index], 'div');
                      a.childNodes.length > 1 && a.removeChild(a.childNodes[1]),
                        a.appendChild(t.Yl.createTextNode(r)),
                        a.classList.add('i-amphtml-lbg-has-timestamp');
                    }
                  });
                });
              });
            }),
            (a._pt = function () {
              var t = this,
                i = [];
              this.xy.getThumbnails(this.Ylt).forEach(function (n) {
                if ('AMP-AD' != n.element.tagName) {
                  var r = t.Hpt(n);
                  i.push(r);
                }
              }),
                this.mutateElement(function () {
                  return i.forEach(function (i) {
                    return t.Vlt.appendChild(i);
                  });
                });
            }),
            (a.Xpt = function (t, i) {
              var n = this;
              t.stopPropagation(),
                Promise.all([this.Umt(), xt(this._6).getImpl()]).then(
                  function (t) {
                    (n.Plt = i), t[1].goToSlide(n.Plt), n.Bmt();
                  },
                );
            }),
            (a.Hpt = function (t) {
              var i = this,
                n = it(this.Yl)(Pi),
                r = Q(n, 'img');
              if (
                (t.srcset
                  ? r.setAttribute('srcset', t.srcset.stringify())
                  : r.setAttribute('src', t.placeholderSrc),
                n.appendChild(r),
                ai[t.element.tagName])
              ) {
                var a = it(this.Yl)(Ti);
                t.timestampPromise.then(function (t) {
                  if (t && !isNaN(t)) {
                    var n = li(t);
                    a.appendChild(i.Yl.createTextNode(n)),
                      a.classList.add('i-amphtml-lbg-has-timestamp');
                  }
                }),
                  n.appendChild(a);
              }
              return (
                n.addEventListener('click', function (n) {
                  i.Xpt(n, t.element.lightboxItemId);
                }),
                n
              );
            }),
            n
          );
        })(t.BaseElement);
      t.registerElement(
        Ni,
        Ui,
        '.i-amphtml-lbg-caption-scroll{position:absolute!important;left:0!important;right:0!important;bottom:0!important;z-index:1;padding-top:40px!important;box-sizing:border-box!important;color:#fff;text-shadow:1px 0 5px rgba(0,0,0,.4)!important;overflow:hidden!important;max-height:calc(80px + 3rem)!important;transition:max-height 0.3s ease-out!important;pointer-events:none!important}.i-amphtml-lbg-caption-text{padding:20px!important;pointer-events:all!important}.i-amphtml-lbg-caption-text:empty{display:none!important}[i-amphtml-lbg-caption-state=clip]{mask-image:linear-gradient(0deg,transparent 0rem,rgba(0,0,0,.2) 1rem,rgba(0,0,0,.55) 2rem,#000 3rem)}[i-amphtml-lbg-caption-state=expand]{overflow-y:auto!important;-webkit-overflow-scrolling:touch!important;max-height:100%!important;transition:max-height 0.7s ease-out!important;mask-image:linear-gradient(transparent,rgba(0,0,0,.2) 20px,rgba(0,0,0,.55) 40px,#000 60px)}.i-amphtml-lbg-caption-mask{min-height:1rem;width:100%!important;position:fixed!important;bottom:0!important;pointer-events:all!important}[i-amphtml-lbg-caption-state=clip]+.i-amphtml-lbg-caption-mask{z-index:1!important;background:transparent!important;transition:background-color 0.5s ease-out!important}[i-amphtml-lbg-caption-state=expand]+.i-amphtml-lbg-caption-mask{background-color:rgba(0,0,0,.4)!important;top:0!important;z-index:0!important;transition:background-color 0.4s ease-in!important}.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-caption{display:none}.i-amphtml-lbg-top-bar{position:absolute!important;left:0!important;right:0!important;top:0!important;height:56px!important;z-index:1!important;background:linear-gradient(rgba(0,0,0,.3),transparent)}@media (min-width:1024px){.i-amphtml-lbg-top-bar{height:80px!important}}.i-amphtml-lbg-button{position:absolute!important;cursor:pointer!important;width:24px;height:24px;padding:16px;box-sizing:content-box}@media (min-width:1024px){.i-amphtml-lbg-button{width:40px;height:40px;padding:20px}}.i-amphtml-lbg-button:after{content:""!important;width:100%!important;height:100%!important;display:block!important;background-repeat:no-repeat!important;background-position:50%!important}.i-amphtml-lbg-button[data-action=close]{top:0!important;right:0!important}.i-amphtml-lbg-button[data-action=close]:after{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke="%23fff" stroke-linejoin="round" stroke-width="2" d="m6.4 6.4 11.2 11.2Zm11.2 0L6.4 17.6Z"/></svg>\')}.i-amphtml-lbg-button[data-action=gallery]{top:0!important;left:0!important}.i-amphtml-lbg-button[data-action=gallery]:after{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="%23fff"><rect width="6" height="8" x="3" y="3" rx="1" ry="1"/><rect width="6" height="8" x="15" y="13" rx="1" ry="1"/><rect width="10" height="8" x="11" y="3" rx="1" ry="1"/><rect width="10" height="8" x="3" y="13" rx="1" ry="1"/></g></svg>\')}.i-amphtml-lbg-button[data-action=slides]{top:0!important;left:0!important;display:none}.i-amphtml-lbg-button[data-action=slides]:after{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="4" fill="none" stroke="%23fff" stroke-width="2" rx="1"/><circle cx="15.5" cy="8.5" r="1.5" fill="%23fff"/><path fill="%23fff" d="M5 19v-6l3-3 5 5 3-3 3 3v4z"/></svg>\')}.i-amphtml-lbg-button[data-action=next],.i-amphtml-lbg-button[data-action=prev]{top:0!important;bottom:0!important;margin:auto!important;filter:drop-shadow(0 0 1px black)!important;width:40px;height:40px;padding:20px}.i-amphtml-lbg-button[data-action=next]{right:0!important;left:auto!important}.i-amphtml-lbg-button[data-action=next]:after{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="%23fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7.4 4.6 4.6-4.6 4.6"/></svg>\')}.i-amphtml-lbg-button[data-action=prev]{right:auto!important;left:0!important}.i-amphtml-lbg-button[data-action=prev]:after{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="%23fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 7.4 9.4 12l4.6 4.6"/></svg>\')}[i-amphtml-lbg-single-item] .i-amphtml-lbg-button[data-action=gallery],[i-amphtml-lbg-single-item] .i-amphtml-lbg-button[data-action=next],[i-amphtml-lbg-single-item] .i-amphtml-lbg-button[data-action=prev]{visibility:hidden!important}.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-button[data-action=gallery],.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-button[data-action=next],.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-button[data-action=prev]{display:none!important}.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-button[data-action=slides]{display:block!important}[i-amphtml-lbg-fade]{animation-fill-mode:forwards;animation-duration:400ms}[i-amphtml-lbg-fade=in]{animation-name:fadeIn}[i-amphtml-lbg-fade=out]{animation-name:fadeOut}amp-lightbox-gallery[i-amphtml-lbg-fade]{position:relative;z-index:2147483642;animation-timing-function:cubic-bezier(0.8,0,0.2,1)}amp-lightbox-gallery .amp-carousel-button{display:none}amp-lightbox-gallery amp-carousel{background:transparent!important}.i-amphtml-lbg{position:fixed!important;z-index:2147483642}.i-amphtml-lbg,.i-amphtml-lbg-gallery,.i-amphtml-lbg-mask{top:0!important;left:0!important;right:0!important;bottom:0!important}.i-amphtml-lbg-gallery,.i-amphtml-lbg-mask{background-color:#000!important;position:absolute!important}.i-amphtml-lbg-gallery{display:none;top:56px!important;overflow:auto!important}@media (min-width:1024px){.i-amphtml-lbg-gallery{top:80px!important}}.i-amphtml-lbg-overlay:not([i-amphtml-lbg-fade]){opacity:0;visibility:hidden}.i-amphtml-lbg-overlay[i-amphtml-lbg-fade=in]{animation-timing-function:ease-in}.i-amphtml-lbg-overlay[i-amphtml-lbg-fade=out]{animation-timing-function:linear}.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-gallery{display:grid!important;-ms-flex-pack:center!important;justify-content:center!important;grid-gap:5px!important;grid-template-columns:repeat(3,1fr);grid-auto-rows:min-content!important;padding:5px}@media (min-width:1024px){.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-gallery{grid-template-columns:repeat(4,249.75px)}}.i-amphtml-lbg-gallery-thumbnail{position:relative!important;padding-top:100%!important}.i-amphtml-lbg-gallery-thumbnail-img{width:100%!important;height:100%!important;position:absolute!important;top:0!important;-o-object-fit:cover!important;object-fit:cover!important;cursor:pointer!important}.i-amphtml-lbg-thumbnail-timestamp-container{background-color:#292d33;color:#fff;position:absolute;bottom:10px;left:10px;height:20px;border-radius:2px;opacity:0.8;width:20px}.i-amphtml-lbg-thumbnail-timestamp-container.i-amphtml-lbg-has-timestamp{font-size:12px;padding:0 5px 0 18px;line-height:1.3rem;width:auto}.i-amphtml-lbg-thumbnail-play-icon{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23fff" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path fill="none" d="M0 0h24v24H0z"/></svg>\');height:16px;width:16px;position:absolute;left:2px;bottom:2px}amp-lightbox-gallery .i-amphtml-slide-item>*{height:auto}@keyframes fadeIn{0%{opacity:0}to{opacity:1;visibility:visible}}@keyframes fadeOut{0%{opacity:1}to{opacity:0;visibility:hidden}}\n/*# sourceURL=/extensions/amp-lightbox-gallery/0.1/amp-lightbox-gallery.css*/',
      ),
        t.registerServiceForDoc('amp-lightbox-manager', oi),
        Nt(t.win).addDocFactory(function (t) {
          return t
            .whenReady()
            .then(function () {
              return t.getBody();
            })
            .then(function (i) {
              if (!tt(t.getRootNode(), Ni)) {
                var n = t.win.document.createElement(Ni);
                n.setAttribute('layout', 'nodisplay'),
                  n.setAttribute('id', 'amp-lightbox-gallery'),
                  i.appendChild(n);
              }
            });
        });
    })();
    /*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
  },
});
//# sourceMappingURL=amp-lightbox-gallery-0.1.js.map
