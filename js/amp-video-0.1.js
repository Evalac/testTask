(self.AMP = self.AMP || []).push({
  m: 0,
  v: '2502032353000',
  n: 'amp-video',
  ev: '0.1',
  l: !0,
  f: function (t, n) {
    !(function () {
      function n(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var i = 0, r = new Array(n); i < n; i++) r[i] = t[i];
        return r;
      }
      function i(t, i) {
        var r =
          ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator'];
        if (r) return (r = r.call(t)).next.bind(r);
        if (
          Array.isArray(t) ||
          (r = (function (t, i) {
            if (t) {
              if ('string' == typeof t) return n(t, i);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return (
                'Object' === r && t.constructor && (r = t.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(t)
                  : 'Arguments' === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? n(t, i)
                    : void 0
              );
            }
          })(t)) ||
          (i && t && 'number' == typeof t.length)
        ) {
          r && (t = r);
          var e = 0;
          return function () {
            return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] };
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      var r;
      function e() {
        return r || (r = Promise.resolve(void 0));
      }
      var o = function () {
        var t = this;
        this.promise = new Promise(function (n, i) {
          (t.resolve = n), (t.reject = i);
        });
      };
      function u(t) {
        return new Promise(function (n) {
          n(t());
        });
      }
      function a(t, n) {
        return (a =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function s(t) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function c(t) {
        return (c =
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
      function f(t, n) {
        if (n && ('object' === c(n) || 'function' == typeof n)) return n;
        if (void 0 !== n)
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
      function h(t) {
        return t ? Array.prototype.slice.call(t) : [];
      }
      var l = Array.isArray;
      function v(t) {
        return l(t) ? t : [t];
      }
      var d = Object.prototype,
        p = d.hasOwnProperty,
        m = d.toString;
      function b(t) {
        var n = Object.create(null);
        return t && Object.assign(n, t), n;
      }
      function y(t) {
        return 'number' == typeof t && isFinite(t);
      }
      function g(t, n, i, r, e, o, u, a, s, c, f) {
        return t;
      }
      function w(t) {
        return JSON.parse(t);
      }
      function j(t) {
        return (t.ownerDocument || t).defaultView;
      }
      var k,
        O =
          /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
      function x(t, n, i, r, e) {
        return (
          e ||
          (n
            ? '�'
            : r
              ? t.slice(0, -1) +
                '\\' +
                t.slice(-1).charCodeAt(0).toString(16) +
                ' '
              : '\\' + t)
        );
      }
      function S(t) {
        return void 0 !== k
          ? k
          : (k = (function (t) {
              try {
                var n = t.ownerDocument,
                  i = n.createElement('div'),
                  r = n.createElement('div');
                return i.appendChild(r), i.querySelector(':scope div') === r;
              } catch (t) {
                return !1;
              }
            })(t));
      }
      function q(t, n) {
        return t.replace(/^|,/g, '$&'.concat(n, ' '));
      }
      function E(t) {
        g(/^[\w-]+$/.test(t));
      }
      function M(t, n) {
        var i = t.classList,
          r = 'i-amphtml-scoped';
        i.add(r);
        var e = q(n, '.'.concat(r)),
          o = t.querySelectorAll(e);
        return i.remove(r), o;
      }
      function _(t, n) {
        var i =
          t.matches ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector ||
          t.msMatchesSelector ||
          t.oMatchesSelector;
        return !!i && i.call(t, n);
      }
      function P(t, n) {
        for (var i = t.firstElementChild; i; i = i.nextElementSibling)
          if (n(i)) return i;
        return null;
      }
      function R(t, n) {
        return (
          E(n),
          (i = t),
          (r = '> '.concat(n)),
          S(i) ? i.querySelectorAll(q(r, ':scope')) : M(i, r)
        );
        var i, r;
      }
      var A,
        T,
        I = { bubbles: !0, cancelable: !0 };
      function N(t) {
        var n;
        null === (n = t.parentElement) || void 0 === n || n.removeChild(t);
      }
      function Y(t, n) {
        var i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (i) {
          var r = i.nextSibling;
          t.insertBefore(n, r);
        } else z(t, n);
      }
      function z(t, n) {
        t.insertBefore(n, t.firstChild);
      }
      function U(t, n) {
        for (var i in n) t.setAttribute(i, n[i]);
        return t;
      }
      function C(t) {
        return t.parent && t.parent != t;
      }
      function L(t, n, i, r) {
        var e = i || {};
        g(t.ownerDocument);
        var o = r || I,
          u = o.bubbles,
          a = o.cancelable,
          s = new MessageEvent(n, { data: e, bubbles: u, cancelable: a });
        t.dispatchEvent(s);
      }
      function W(t, n) {
        t.classList.add('i-amphtml-fill-content'),
          n && t.classList.add('i-amphtml-replaced-content');
      }
      function D(t, n, r, e) {
        for (var o, u = i(v(t), !0); !(o = u()).done; ) {
          var a = o.value,
            s = n.getAttribute(a);
          null !== s ? r.setAttribute(a, s) : e && r.removeAttribute(a);
        }
      }
      function F(t) {
        var n = t.ownerDocument || t;
        return (A && A.ownerDocument === n) || (A = n.createElement('div')), V;
      }
      function V(t) {
        return (function (t, n) {
          if (
            (g(1 === n.length),
            g(Array.isArray(n) || ((r = n), p.call(r, 'raw'))),
            self.trustedTypes && self.trustedTypes.createPolicy)
          ) {
            var i = self.trustedTypes.createPolicy(
              'static-template#createNode',
              {
                createHTML: function (t) {
                  return n[0];
                },
              },
            );
            t.innerHTML = i.createHTML('ignored');
          } else t.innerHTML = n[0];
          var r,
            e = t.firstElementChild;
          return g(e), g(!e.nextElementSibling), t.removeChild(e), e;
        })(A, t);
      }
      function $(t) {
        var n = Object.getOwnPropertyDescriptor(t, 'message');
        if (null != n && n.writable) return t;
        var i = t.message,
          r = t.stack,
          e = new Error(i);
        for (var o in t) e[o] = t[o];
        return (e.stack = r), e;
      }
      function J(t) {
        for (var n, r = null, e = '', o = i(arguments, !0); !(n = o()).done; ) {
          var u = n.value;
          u instanceof Error && !r ? (r = $(u)) : (e && (e += ' '), (e += u));
        }
        return (
          r ? e && (r.message = e + ': ' + r.message) : (r = new Error(e)), r
        );
      }
      function B(t) {
        var n, i;
        null === (n = (i = self).__AMP_REPORT_ERROR) ||
          void 0 === n ||
          n.call(i, t);
      }
      function G(t) {
        var n = J.apply(null, arguments);
        setTimeout(function () {
          throw (B(n), n);
        });
      }
      function X(t) {
        try {
          for (
            var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1;
            r < n;
            r++
          )
            i[r - 1] = arguments[r];
          return t.apply(null, i);
        } catch (t) {
          G(t);
        }
      }
      function Z(t) {
        var n = J.apply(null, arguments);
        return (n.expected = !0), n;
      }
      var H = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'O', 'o'],
        K = {
          getPropertyPriority: function () {
            return '';
          },
          getPropertyValue: function () {
            return '';
          },
        };
      function Q(t) {
        var n = t.replace(/[A-Z]/g, function (t) {
          return '-' + t.toLowerCase();
        });
        return H.some(function (t) {
          return n.startsWith(t + '-');
        })
          ? '-'.concat(n)
          : n;
      }
      function tt(t, n, i) {
        if (n.startsWith('--')) return n;
        T || (T = b());
        var r = T[n];
        if (!r || i) {
          if (((r = n), void 0 === t[n])) {
            var e = (function (t) {
                return t.charAt(0).toUpperCase() + t.slice(1);
              })(n),
              o = (function (t, n) {
                for (var i = 0; i < H.length; i++) {
                  var r = H[i] + n;
                  if (void 0 !== t[r]) return r;
                }
                return '';
              })(t, e);
            void 0 !== t[o] && (r = o);
          }
          i || (T[n] = r);
        }
        return r;
      }
      function nt(t, n, i, r, e) {
        var o = tt(t.style, n, e);
        if (o) {
          var u = r ? i + r : i;
          t.style.setProperty(Q(o), u);
        }
      }
      function it(t, n) {
        for (var i in n) nt(t, i, n[i]);
      }
      function rt(t) {
        return (
          null == t.__AMP_AUTOPLAY &&
            (t.__AMP_AUTOPLAY = (function (t) {
              var n,
                i = t.document.createElement('video');
              return (
                i.setAttribute('muted', ''),
                i.setAttribute('playsinline', ''),
                i.setAttribute('webkit-playsinline', ''),
                i.setAttribute('height', '0'),
                i.setAttribute('width', '0'),
                (i.muted = !0),
                (i.playsInline = !0),
                (i.playsinline = !0),
                (i.webkitPlaysinline = !0),
                it(i, {
                  position: 'fixed',
                  top: '0',
                  width: '0',
                  height: '0',
                  opacity: '0',
                }),
                (n = i),
                u(function () {
                  return n.play();
                }).catch(function () {}),
                Promise.resolve(!i.paused)
              );
            })(t)),
          t.__AMP_AUTOPLAY
        );
      }
      function et(t) {
        return t.querySelector('video, iframe');
      }
      function ot(t, n) {
        var i = u(function () {
          return t.play(!!n);
        });
        return (
          i.catch(function (t) {
            !(function (t) {
              for (
                var n = arguments.length,
                  i = new Array(n > 1 ? n - 1 : 0),
                  r = 1;
                r < n;
                r++
              )
                i[r - 1] = arguments[r];
              B(Z.apply(null, i));
            })('TRYPLAY', t);
          }),
          i
        );
      }
      var ut = /vertical/,
        at = new WeakMap(),
        st = new WeakMap(),
        ct = new WeakMap();
      function ft(t) {
        var n = at.get(t);
        return n || ((n = new t.ResizeObserver(ht)), at.set(t, n)), n;
      }
      function ht(t) {
        for (var n = new Set(), i = t.length - 1; i >= 0; i--) {
          var r = t[i],
            e = r.target;
          if (!n.has(e)) {
            n.add(e);
            var o = st.get(e);
            if (o) {
              ct.set(e, r);
              for (var u = 0; u < o.length; u++) {
                var a = o[u],
                  s = a.callback;
                lt(a.type, s, r);
              }
            }
          }
        }
      }
      function lt(t, n, i) {
        if (0 == t) {
          var r = i.contentRect,
            e = r.height;
          X(n, { width: r.width, height: e });
        } else if (1 == t) {
          var o,
            u = i.borderBoxSize;
          if (u) o = u.length > 0 ? u[0] : { inlineSize: 0, blockSize: 0 };
          else {
            var a,
              s,
              c = i.target,
              f = j(c),
              h = ut.test(
                (function (t, n) {
                  return t.getComputedStyle(n) || K;
                })(f, c).writingMode,
              ),
              l = c,
              v = l.offsetHeight,
              d = l.offsetWidth;
            h ? ((s = d), (a = v)) : ((a = d), (s = v)),
              (o = { inlineSize: a, blockSize: s });
          }
          X(n, o);
        }
      }
      var vt = (function () {
        function t(t) {
          (this.ql = t),
            (this.Jm = !1),
            (this.Xm = !1),
            (this.Zm = this.Zm.bind(this));
        }
        var n = t.prototype;
        return (
          (n.updatePlaying = function (t) {
            t !== this.Jm &&
              ((this.Jm = t),
              t
                ? ((this.Xm = !1),
                  (function (t, n, i) {
                    var r = t.ownerDocument.defaultView;
                    if (r) {
                      var e = st.get(t);
                      if (
                        (e || ((e = []), st.set(t, e), ft(r).observe(t)),
                        !e.some(function (t) {
                          return t.callback === i && 1 === t.type;
                        }))
                      ) {
                        e.push({ type: 1, callback: i });
                        var o = ct.get(t);
                        o &&
                          setTimeout(function () {
                            return lt(1, i, o);
                          });
                      }
                    }
                  })(this.ql, 0, this.Zm))
                : (function (t, n) {
                    !(function (t, n, i) {
                      var r = st.get(t);
                      if (
                        r &&
                        ((function (t, n) {
                          for (var r = [], e = 0, o = 0; o < t.length; o++) {
                            var u = t[o];
                            (a = u).callback === i && 1 === a.type
                              ? r.push(u)
                              : (e < o && (t[e] = u), e++);
                          }
                          var a;
                          e < t.length && (t.length = e);
                        })(r),
                        0 == r.length)
                      ) {
                        st.delete(t), ct.delete(t);
                        var e = t.ownerDocument.defaultView;
                        e && ft(e).unobserve(t);
                      }
                    })(t, 0, n);
                  })(this.ql, this.Zm));
          }),
          (n.Zm = function (t) {
            var n = t.blockSize,
              i = t.inlineSize > 0 && n > 0;
            if (i !== this.Xm) {
              this.Xm = i;
              var r = this.ql;
              i || r.pause();
            }
          }),
          t
        );
      })();
      function dt(t, n, i) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = i),
          t
        );
      }
      function pt(t, n) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function mt(t) {
        for (var n = 1; n < arguments.length; n++) {
          var i = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? pt(Object(i), !0).forEach(function (n) {
                dt(t, n, i[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
              : pt(Object(i)).forEach(function (n) {
                  Object.defineProperty(
                    t,
                    n,
                    Object.getOwnPropertyDescriptor(i, n),
                  );
                });
        }
        return t;
      }
      var bt = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
      function yt(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
        try {
          return decodeURIComponent(t);
        } catch (t) {
          return n;
        }
      }
      function gt(t) {
        var n,
          i = b();
        if (!t) return i;
        for (; (n = bt.exec(t)); ) {
          var r = yt(n[1], n[1]),
            e = n[2] ? yt(n[2].replace(/\+/g, ' '), n[2]) : '';
          i[r] = e;
        }
        return i;
      }
      function wt(t) {
        var n = (t || self).location;
        return gt(n.originalHash || n.hash);
      }
      function jt(t) {
        var n = !1,
          i = null,
          r = t;
        return function () {
          if (!n) {
            for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
              e[o] = arguments[o];
            (i = r.apply(self, e)), (n = !0), (r = null);
          }
          return i;
        };
      }
      var kt = '';
      function Ot(t) {
        var n;
        return (
          kt ||
            (kt =
              (null === (n = t.AMP_CONFIG) || void 0 === n ? void 0 : n.v) ||
              '01'.concat('2502032353000')),
          kt
        );
      }
      function xt(t, n) {
        var i = n || wt(t);
        return (
          ['1', 'actions', 'amp', 'amp4ads', 'amp4email'].includes(
            i.development,
          ) || !!t.AMP_DEV_MODE
        );
      }
      self.__AMP_LOG = self.__AMP_LOG || {
        user: null,
        dev: null,
        userForEmbed: null,
      };
      var St = self.__AMP_LOG;
      function qt(t, n) {
        throw new Error('failed to call initLogConstructor');
      }
      function Et(t) {
        return (
          St.user || (St.user = Mt()),
          (function (t, n) {
            return n && n.ownerDocument.defaultView != t;
          })(St.user.win, t)
            ? St.userForEmbed || (St.userForEmbed = Mt())
            : St.user
        );
      }
      function Mt(t) {
        return qt();
      }
      function _t() {
        return St.dev || (St.dev = qt());
      }
      function Pt(t, n, i, r, e, o, u, a, s, c, f) {
        return t;
      }
      function Rt(t, n, i, r, e, o, u, a, s, c, f) {
        return Et().assert(t, n, i, r, e, o, u, a, s, c, f);
      }
      function At(t, n) {
        return zt(
          (t = (function (t) {
            return t.__AMP_TOP || (t.__AMP_TOP = t);
          })(t)),
          n,
        );
      }
      function Tt(t, n) {
        return zt(Yt(Nt(t)), n);
      }
      function It(t, n) {
        var i = Yt(Nt(t));
        return Ct(i, n) ? zt(i, n) : null;
      }
      function Nt(t) {
        return t.nodeType ? ((n = j(t)), At(n, 'ampdoc')).getAmpDoc(t) : t;
        var n;
      }
      function Yt(t) {
        var n = Nt(t);
        return n.isSingleDoc() ? n.win : n;
      }
      function zt(t, n) {
        Pt(Ct(t, n));
        var i = Ut(t)[n];
        return (
          i.obj ||
            (Pt(i.ctor),
            Pt(i.context),
            (i.obj = new i.ctor(i.context)),
            Pt(i.obj),
            (i.context = null),
            i.resolve && i.resolve(i.obj)),
          i.obj
        );
      }
      function Ut(t) {
        var n = t.__AMP_SERVICES;
        return n || (n = t.__AMP_SERVICES = {}), n;
      }
      function Ct(t, n) {
        var i = t.__AMP_SERVICES && t.__AMP_SERVICES[n];
        return !(!i || !i.ctor);
      }
      var Lt = '__AMP__EXPERIMENT_TOGGLES';
      function Wt(t, n) {
        var r = (function (t) {
          var n, r, e, o, u;
          if (t[Lt]) return t[Lt];
          t[Lt] = b();
          var a = t[Lt];
          g(a);
          var s = mt(
            mt({}, null !== (n = t.AMP_CONFIG) && void 0 !== n ? n : {}),
            null !== (r = t.AMP_EXP) && void 0 !== r
              ? r
              : w(
                  (null === (e = t.__AMP_EXP) || void 0 === e
                    ? void 0
                    : e.textContent) || '{}',
                ),
          );
          for (var c in s) {
            var f = s[c];
            'number' == typeof f &&
              f >= 0 &&
              f <= 1 &&
              (a[c] = Math.random() < f);
          }
          var h =
            null === (o = t.AMP_CONFIG) || void 0 === o
              ? void 0
              : o['allow-doc-opt-in'];
          if (l(h) && h.length) {
            var v = t.document.head.querySelector(
              'meta[name="amp-experiments-opt-in"]',
            );
            if (v)
              for (
                var d,
                  p,
                  m = i(
                    (null === (d = v.getAttribute('content')) || void 0 === d
                      ? void 0
                      : d.split(',')) || [],
                    !0,
                  );
                !(p = m()).done;

              ) {
                var y = p.value;
                h.includes(y) && (a[y] = !0);
              }
          }
          Object.assign(
            a,
            (function (t) {
              var n,
                r = '';
              try {
                var e;
                'localStorage' in t &&
                  (r =
                    null !==
                      (e = t.localStorage.getItem('amp-experiment-toggles')) &&
                    void 0 !== e
                      ? e
                      : '');
              } catch (t) {
                _t().warn(
                  'EXPERIMENTS',
                  'Failed to retrieve experiments from localStorage.',
                );
              }
              for (
                var o,
                  u =
                    (null === (n = r) || void 0 === n
                      ? void 0
                      : n.split(/\s*,\s*/g)) || [],
                  a = b(),
                  s = i(u, !0);
                !(o = s()).done;

              ) {
                var c = o.value;
                c && ('-' == c[0] ? (a[c.substr(1)] = !1) : (a[c] = !0));
              }
              return a;
            })(t),
          );
          var j =
            null === (u = t.AMP_CONFIG) || void 0 === u
              ? void 0
              : u['allow-url-opt-in'];
          if (l(j) && j.length)
            for (
              var k,
                O = gt(t.location.originalHash || t.location.hash),
                x = i(j, !0);
              !(k = x()).done;

            ) {
              var S = k.value,
                q = O['e-'.concat(S)];
              '1' == q && (a[S] = !0), '0' == q && (a[S] = !1);
            }
          return a;
        })(t);
        return !!r[n];
      }
      var Dt,
        Ft,
        Vt,
        $t = function (t) {
          return It(t, 'action');
        },
        Jt = function (t) {
          return At(t, 'extensions');
        },
        Bt = function (t) {
          return At(t, 'performance');
        },
        Gt = function (t) {
          return At(t, 'platform');
        },
        Xt = function (t) {
          return zt(t, 'timer');
        },
        Zt = function (t) {
          return It(t, 'url');
        },
        Ht = function (t) {
          return Tt(t, 'viewport');
        };
      function Kt(t, n) {
        var i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = i.needsRootBounds,
          e = i.rootMargin,
          o = i.threshold,
          u = C(n) && (r || e) ? n.document : void 0;
        return new n.IntersectionObserver(t, {
          threshold: o,
          root: u,
          rootMargin: e,
        });
      }
      function Qt(t) {
        var n,
          i = null === (n = Dt) || void 0 === n ? void 0 : n.get(t);
        if (!i) {
          var r = (function (t) {
            Dt || ((Dt = new WeakMap()), (Ft = new WeakMap())), g(Ft);
            var n = Ft.get(t);
            return (
              n ||
                ((n = Kt(
                  function (t) {
                    for (var i = new Set(), r = t.length - 1; r >= 0; r--) {
                      var e,
                        o = t[r].target;
                      i.has(o) ||
                        (i.add(o),
                        g(n),
                        n.unobserve(o),
                        g(Dt),
                        null === (e = Dt.get(o)) ||
                          void 0 === e ||
                          e.resolve(t[r]),
                        Dt.delete(o));
                    }
                  },
                  t,
                  { needsRootBounds: !0 },
                )),
                Ft.set(t, n)),
              n
            );
          })(j(t));
          g(Dt), r.observe(t), (i = new o()), Dt.set(t, i);
        }
        return i.promise;
      }
      function tn(t, n, i, r) {
        var e = t,
          o = i,
          u = function (t) {
            try {
              return o(t);
            } catch (t) {
              var n, i;
              throw (
                (null === (n = (i = self).__AMP_REPORT_ERROR) ||
                  void 0 === n ||
                  n.call(i, t),
                t)
              );
            }
          },
          a = (function () {
            if (void 0 !== Vt) return Vt;
            Vt = !1;
            try {
              var t = {
                get capture() {
                  return (Vt = !0), !1;
                },
              };
              self.addEventListener('test-options', null, t),
                self.removeEventListener('test-options', null, t);
            } catch (t) {}
            return Vt;
          })(),
          s = !(null == r || !r.capture);
        return (
          e.addEventListener(n, u, a ? r : s),
          function () {
            null == e || e.removeEventListener(n, u, a ? r : s),
              (o = null),
              (e = null),
              (u = null);
          }
        );
      }
      function nn(t, n, i, r) {
        var e = { detail: i };
        if ((Object.assign(e, r), 'function' == typeof t.CustomEvent))
          return new t.CustomEvent(n, e);
        var o = t.document.createEvent('CustomEvent');
        return o.initCustomEvent(n, !!e.bubbles, !!e.cancelable, i), o;
      }
      function rn(t, n, i, r) {
        return tn(t, n, i, r);
      }
      function en(t, n, i, r) {
        var e = i,
          o = tn(
            t,
            n,
            function (t) {
              try {
                e(t);
              } finally {
                (e = null), o();
              }
            },
            r,
          );
        return o;
      }
      var on = [
          '<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>',
        ],
        un = [
          '<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>',
        ];
      function an(t, n, i) {
        if (n[i]) return n[i];
        var r = t.querySelector('style['.concat(i, '], link[').concat(i, ']'));
        return r ? ((n[i] = r), r) : null;
      }
      var sn = (function () {
          function t() {
            this.fn = null;
          }
          var n = t.prototype;
          return (
            (n.add = function (t) {
              var n = this;
              return (
                this.fn || (this.fn = []),
                this.fn.push(t),
                function () {
                  n.remove(t);
                }
              );
            }),
            (n.remove = function (t) {
              var n, i, r;
              this.fn &&
                ((i = t),
                -1 != (r = (n = this.fn).indexOf(i)) && n.splice(r, 1));
            }),
            (n.removeAll = function () {
              this.fn && (this.fn.length = 0);
            }),
            (n.fire = function (t) {
              if (this.fn)
                for (var n, r = i(this.fn.slice(), !0); !(n = r()).done; )
                  (0, n.value)(t);
            }),
            (n.getHandlerCount = function () {
              var t, n;
              return null !==
                (t =
                  null === (n = this.fn) || void 0 === n ? void 0 : n.length) &&
                void 0 !== t
                ? t
                : 0;
            }),
            t
          );
        })(),
        cn = (function () {
          function t() {
            (this.Km = !1), (this.Qm = new sn());
          }
          var n = t.prototype;
          return (
            (n.onSessionEnd = function (t) {
              this.Qm.add(t);
            }),
            (n.beginSession = function () {
              this.Km = !0;
            }),
            (n.endSession = function () {
              this.Km && this.Qm.fire(), (this.Km = !1);
            }),
            (n.isSessionActive = function () {
              return this.Km;
            }),
            t
          );
        })(),
        fn = { title: '', artist: '', album: '', artwork: [{ src: '' }] },
        hn = 'registered',
        ln = 'load',
        vn = 'loadedmetadata',
        dn = 'play',
        pn = 'playing',
        mn = 'pause',
        bn = 'ended',
        yn = 'muted',
        gn = 'unmuted',
        wn = 'reloaded',
        jn = 'ad_start',
        kn = 'ad_end',
        On = 'playing_manual',
        xn = 'paused',
        Sn = 'video-play',
        qn = 'user-interacted';
      function En(t) {
        t.signals().signal(qn);
      }
      var Mn = 'video-manager',
        _n = (function () {
          function t(t) {
            var n = this;
            (this.ampdoc = t),
              (this.installAutoplayStyles = jt(function () {
                return (function (t) {
                  !(function (t, n, i, r, e) {
                    var o = t.getHeadNode();
                    !(function (t, n, i, r) {
                      var e = t.__AMP_CSS_SM;
                      e || (e = t.__AMP_CSS_SM = b());
                      var o = 'amp-extension='.concat(r);
                      if (o) {
                        var u = an(t, e, o);
                        if (u)
                          return (
                            'STYLE' == u.tagName &&
                              u.textContent !== n &&
                              (u.textContent = n),
                            u
                          );
                      }
                      var a = (t.ownerDocument || t).createElement('style');
                      a.textContent = n;
                      a.setAttribute('amp-extension', r),
                        Y(t, a, an(t, e, 'amp-runtime')),
                        o && (e[o] = a);
                    })(
                      o,
                      (function (t, n) {
                        var i = t.__AMP_CSS_TR;
                        return i ? i(n) : n;
                      })(
                        o,
                        '.i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/',
                      ),
                      0,
                      'amp-video-autoplay',
                    );
                  })(t);
                })(n.ampdoc);
              })),
              (this.vy = null),
              (this.my = null),
              (this.py = null),
              (this.$r = Xt(t.win)),
              (this.yy = $t(t.getHeadNode())),
              (this.by = function () {
                return n.wy();
              }),
              (this.gy = jt(function () {
                return new An(n.ampdoc, n);
              })),
              this.$r.delay(this.by, 1e3);
          }
          var n = t.prototype;
          return (
            (n.dispose = function () {
              if (
                (this.gy().dispose(),
                this.my.disconnect(),
                (this.my = null),
                this.vy)
              )
                for (var t = 0; t < this.vy.length; t++) this.vy[t].dispose();
            }),
            (n.wy = function () {
              for (var t = 0; t < this.vy.length; t++) {
                var n = this.vy[t];
                n.getPlayingState() !== xn &&
                  (zn(n, 'video-seconds-played'), this.jy(n));
              }
              this.$r.delay(this.by, 1e3);
            }),
            (n.jy = function (t) {
              var n = 'timeUpdate',
                i = t.video.getCurrentTime(),
                r = t.video.getDuration();
              if (y(i) && y(r) && r > 0) {
                var e = i / r,
                  o = nn(this.ampdoc.win, ''.concat(Mn, '.').concat(n), {
                    time: i,
                    percent: e,
                  });
                this.yy.trigger(t.video.element, n, o, 1);
              }
            }),
            (n.register = function (t) {
              var n = this;
              Pt(t);
              var i = t;
              if ((this.Oy(t), t.supportsPlatform() && !this.ky(t))) {
                this.my ||
                  (this.my = Kt(
                    function (t) {
                      return t.forEach(function (t) {
                        var i = t.isIntersecting,
                          r = t.target;
                        n.qy(r).updateVisibility(i);
                      });
                    },
                    this.ampdoc.win,
                    { threshold: 0.5 },
                  )),
                  this.my.observe(i.element),
                  rn(i.element, wn, function () {
                    return r.videoLoaded();
                  }),
                  (this.vy = this.vy || []);
                var r = new Rn(this, t);
                this.vy.push(r);
                var e = r.video.element;
                L(e, hn),
                  (function (t) {
                    t.classList.add('i-amphtml-media-component');
                  })(e),
                  t.signals().signal(hn),
                  e.classList.add('i-amphtml-video-interface');
              }
            }),
            (n.Oy = function (t) {
              i('play', function () {
                return ot(t, !1);
              }),
                i('pause', function () {
                  return t.pause();
                }),
                i('mute', function () {
                  return t.mute();
                }),
                i('unmute', function () {
                  return t.unmute();
                });
              var n = function () {
                return t.fullscreenEnter();
              };
              function i(n, i) {
                t.registerAction(
                  n,
                  function () {
                    En(t), i();
                  },
                  1,
                );
              }
              i('fullscreenenter', n), i('fullscreen', n);
            }),
            (n.ky = function (t) {
              if (Pn(this.py, t)) return this.py;
              for (var n = 0; this.vy && n < this.vy.length; n++) {
                var i = this.vy[n];
                if (Pn(i, t)) return (this.py = i), i;
              }
              return null;
            }),
            (n.qy = function (t) {
              return Pt(this.ky(t));
            }),
            (n.registerForAutoFullscreen = function (t) {
              this.gy().register(t);
            }),
            (n.Py = function () {
              return this.gy();
            }),
            (n.getVideoStateProperty = function (t, n) {
              var i = this.ampdoc.getRootNode(),
                r = Et().assertElement(
                  i.getElementById(t),
                  'Could not find an element with id="'.concat(
                    t,
                    '" for VIDEO_STATE',
                  ),
                ),
                o = this.qy(r);
              return (o ? o.getAnalyticsDetails() : e()).then(function (t) {
                return t ? t[n] : '';
              });
            }),
            (n.getPlayingState = function (t) {
              return this.qy(t).getPlayingState();
            }),
            (n.isMuted = function (t) {
              return this.qy(t).isMuted();
            }),
            (n.userInteracted = function (t) {
              return this.qy(t).userInteracted();
            }),
            (n.isRollingAd = function (t) {
              return this.qy(t).isRollingAd();
            }),
            (n.pauseOtherVideos = function (t) {
              this.vy.forEach(function (n) {
                n.isPlaybackManaged() &&
                  n !== t &&
                  n.getPlayingState() == On &&
                  n.video.pause();
              });
            }),
            t
          );
        })(),
        Pn = function (t, n) {
          return !!t && (t.video === n || t.video.element === n);
        },
        Rn = (function () {
          function t(t, n) {
            var i = this;
            (this.xy = t),
              (this.Ui = t.ampdoc),
              (this.video = n),
              (this.My = !0),
              (this.Sy = !1),
              (this.Jm = !1),
              (this.Ry = !1),
              (this.Rn = !1),
              (this.Ay = new cn()),
              this.Ay.onSessionEnd(function () {
                return zn(i, 'video-session');
              }),
              (this.Ey = new cn()),
              this.Ey.onSessionEnd(function () {
                return zn(i, 'video-session-visible');
              }),
              (this.Ty = jt(function () {
                return new Yn(i.Ui.win, i);
              })),
              (this.Cy = !1),
              (this.Yy = !1),
              (this.Iy = null),
              (this.G = !1),
              (this._y = !1),
              (this.hasAutoplay = n.element.hasAttribute('autoplay')),
              this.hasAutoplay && this.xy.installAutoplayStyles(),
              (this.ny = fn),
              (this.zy = function () {
                ot(i.video, !1);
              }),
              (this.Ly = function () {
                i.video.pause();
              }),
              rn(n.element, ln, function () {
                return i.videoLoaded();
              }),
              rn(n.element, mn, function () {
                return i.Uy();
              }),
              rn(n.element, dn, function () {
                (i._y = !0), zn(i, Sn);
              }),
              rn(n.element, pn, function () {
                return i.Ny();
              }),
              rn(n.element, yn, function () {
                return (i.G = !0);
              }),
              rn(n.element, gn, function () {
                (i.G = !1), i.xy.pauseOtherVideos(i);
              }),
              rn(n.element, 'amp:video:tick', function (t) {
                var n = t.data,
                  r = n.eventType;
                r && i.Wy(r, n.vars);
              }),
              rn(n.element, bn, function () {
                (i.Ry = !1), zn(i, 'video-ended');
              }),
              rn(n.element, jn, function () {
                (i.Ry = !0), zn(i, 'video-ad-start');
              }),
              rn(n.element, kn, function () {
                (i.Ry = !1), zn(i, 'video-ad-end');
              }),
              n
                .signals()
                .whenSignal(hn)
                .then(function () {
                  return i.Fy();
                }),
              (this.Jy = jt(function () {
                var t = 'firstPlay',
                  n = nn(i.Ui.win, t, {}),
                  r = i.video.element;
                $t(r).trigger(r, t, n, 1);
              })),
              this.Vy();
          }
          var n = t.prototype;
          return (
            (n.dispose = function () {
              this.Ty().stop();
            }),
            (n.Wy = function (t, n) {
              var i = dt({}, '__amp:eventType', t);
              Object.keys(n).forEach(function (t) {
                i['custom_'.concat(t)] = n[t];
              }),
                zn(this, 'video-hosted-custom', i);
            }),
            (n.Vy = function () {
              var t = this;
              this.video
                .signals()
                .whenSignal('playback-delegated')
                .then(function () {
                  (t.My = !1), t.Jm && t.video.pause();
                });
            }),
            (n.isMuted = function () {
              return this.G;
            }),
            (n.isPlaybackManaged = function () {
              return this.My;
            }),
            (n.Fy = function () {
              this.By() && this.xy.registerForAutoFullscreen(this),
                this.hasAutoplay && this.Dy();
            }),
            (n.By = function () {
              var t = this.video.element;
              return (
                !(
                  this.video.preimplementsAutoFullscreen() ||
                  !t.hasAttribute('rotate-to-fullscreen')
                ) &&
                Rt(
                  this.video.isInteractive(),
                  'Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.',
                  t,
                )
              );
            }),
            (n.Ny = function () {
              (this.Jm = !0),
                this.getPlayingState() == On &&
                  (this.Jy(), this.xy.pauseOtherVideos(this));
              var t,
                n,
                i,
                r,
                e,
                o = this.video,
                u = o.element;
              o.preimplementsMediaSessionAPI() ||
                u.classList.contains('i-amphtml-disable-mediasession') ||
                ((function (t, n) {
                  var i = Zt(t);
                  if (n && n.artwork) {
                    var r = n.artwork;
                    Pt(l(r)),
                      r.forEach(function (t) {
                        if (t) {
                          var n =
                            ((r = t),
                            '[object Object]' === m.call(r) ? t.src : t);
                          Rt(i.isProtocolValid(n));
                        }
                        var r;
                      });
                  }
                })(u, this.ny),
                (t = this.Ui.win),
                (n = this.ny),
                (i = this.zy),
                (r = this.Ly),
                'mediaSession' in (e = t.navigator) &&
                  t.MediaMetadata &&
                  ((e.mediaSession.metadata = new t.MediaMetadata(fn)),
                  (e.mediaSession.metadata = new t.MediaMetadata(n)),
                  e.mediaSession.setActionHandler('play', i),
                  e.mediaSession.setActionHandler('pause', r))),
                this.Ay.beginSession(),
                this.Rn && this.Ey.beginSession(),
                this._y || zn(this, Sn);
            }),
            (n.Uy = function () {
              zn(this, 'video-pause'),
                (this.Jm = !1),
                this.Yy ? (this.Yy = !1) : this.Ay.endSession();
            }),
            (n.videoLoaded = function () {
              (this.Sy = !0),
                (this.Iy = et(this.video.element)),
                this.Gy(),
                this.Ty().start(),
                this.Rn && this.Hy();
            }),
            (n.Gy = function () {
              if (!this.video.preimplementsMediaSessionAPI()) {
                this.video.getMetadata() &&
                  (this.ny = b(this.video.getMetadata()));
                var t = this.Ui.win.document;
                if (!this.ny.artwork || 0 == this.ny.artwork.length) {
                  var n =
                    (function (t) {
                      var n = t.querySelector(
                        'script[type="application/ld+json"]',
                      );
                      if (n) {
                        var i = (function (t, n) {
                          try {
                            return w(t);
                          } catch (t) {
                            return null;
                          }
                        })(n.textContent);
                        if (i && i.image)
                          return 'string' == typeof i.image
                            ? i.image
                            : i.image['@list'] &&
                                'string' == typeof i.image['@list'][0]
                              ? i.image['@list'][0]
                              : 'string' == typeof i.image.url
                                ? i.image.url
                                : 'string' == typeof i.image[0]
                                  ? i.image[0]
                                  : void 0;
                      }
                    })(t) ||
                    (function (t) {
                      var n = t.querySelector('meta[property="og:image"]');
                      return n ? n.getAttribute('content') : void 0;
                    })(t) ||
                    (function (t) {
                      var n =
                        t.querySelector('link[rel="shortcut icon"]') ||
                        t.querySelector('link[rel="icon"]');
                      return n ? n.getAttribute('href') : void 0;
                    })(t);
                  n && (this.ny.artwork = [{ src: n }]);
                }
                if (!this.ny.title) {
                  var i =
                    this.video.element.getAttribute('title') ||
                    this.video.element.getAttribute('aria-label') ||
                    this.Iy.getAttribute('title') ||
                    this.Iy.getAttribute('aria-label') ||
                    t.title;
                  i && (this.ny.title = i);
                }
              }
            }),
            (n.Xy = function () {
              this.Sy && this.Hy();
            }),
            (n.Hy = function () {
              var t = this;
              this.Ui.isVisible() &&
                rt(this.Ui.win).then(function (n) {
                  t.hasAutoplay && !t.userInteracted() && n ? t.Zy() : t.$y();
                });
            }),
            (n.Dy = function () {
              var t = this;
              this.video.isInteractive() && this.video.hideControls(),
                rt(this.Ui.win).then(function (n) {
                  n || !t.video.isInteractive()
                    ? (t.video.mute(), t.Ky())
                    : t.video.showControls();
                });
            }),
            (n.Ky = function () {
              var t = this,
                n = this.video,
                i = this.video,
                r = i.element;
              if ((i.win, !r.hasAttribute('noaudio') && !r.signals().get(qn))) {
                var e = (function (t, n) {
                    for (
                      var i = F(n)(un), r = i.firstElementChild, e = 0;
                      e < 4;
                      e++
                    ) {
                      for (
                        var o = r.cloneNode(!0), u = o.children, a = 0;
                        a < u.length;
                        a++
                      )
                        u[a].classList.add(
                          'amp-video-eq-'.concat(e + 1, '-').concat(a + 1),
                        );
                      i.appendChild(o);
                    }
                    return N(r), i;
                  })(0, r),
                  o = [e],
                  u = [
                    rn(r, mn, function () {
                      return c(!1);
                    }),
                    rn(r, pn, function () {
                      return c(!0);
                    }),
                    rn(r, jn, function () {
                      s(!1), n.showControls();
                    }),
                    rn(r, kn, function () {
                      s(!0), n.hideControls();
                    }),
                    rn(r, gn, function () {
                      return En(n);
                    }),
                  ];
                if (n.isInteractive()) {
                  n.hideControls();
                  var a = (function (t, n) {
                    var i = F(t)(on);
                    return (
                      n && n.title && i.setAttribute('aria-label', n.title), i
                    );
                  })(r, this.ny);
                  o.push(a),
                    u.push(
                      rn(a, 'click', function () {
                        return En(n);
                      }),
                    );
                }
                n.mutateElementSkipRemeasure(function () {
                  o.forEach(function (t) {
                    r.appendChild(t);
                  });
                }),
                  this.Ry && s(!1),
                  n
                    .signals()
                    .whenSignal(qn)
                    .then(function () {
                      t.Jy(),
                        n.isInteractive() && n.showControls(),
                        n.unmute(),
                        u.forEach(function (t) {
                          t();
                        }),
                        n.mutateElementSkipRemeasure(function () {
                          o.forEach(function (t) {
                            N(t);
                          });
                        });
                    });
              }
              function s(t) {
                n.mutateElementSkipRemeasure(function () {
                  o.forEach(function (n) {
                    !(function (t, n) {
                      void 0 === n && (n = t.hasAttribute('hidden')),
                        n
                          ? t.removeAttribute('hidden')
                          : t.setAttribute('hidden', '');
                    })(n, t);
                  });
                });
              }
              function c(t) {
                n.mutateElementSkipRemeasure(function () {
                  return e.classList.toggle('amp-video-eq-play', t);
                });
              }
            }),
            (n.Zy = function () {
              this.My &&
                (this.Rn
                  ? (this.Ey.beginSession(), ot(this.video, !0), (this.Cy = !0))
                  : (this.Jm && this.Ey.endSession(),
                    this.video.pause(),
                    (this.Yy = !0)));
            }),
            (n.$y = function () {
              this.Rn
                ? this.Ey.beginSession()
                : this.Jm && this.Ey.endSession();
            }),
            (n.updateVisibility = function (t) {
              var n = this.Rn;
              (this.Rn = t), t != n && this.Xy();
            }),
            (n.getPlayingState = function () {
              return this.Jm
                ? this.Jm && this.Cy && !this.userInteracted()
                  ? 'playing_auto'
                  : On
                : xn;
            }),
            (n.isRollingAd = function () {
              return this.Ry;
            }),
            (n.userInteracted = function () {
              return null != this.video.signals().get(qn);
            }),
            (n.getAnalyticsDetails = function () {
              var t = this,
                n = this.video;
              return Promise.all([rt(this.Ui.win), Qt(n.element)]).then(
                function (i) {
                  var r = i[0],
                    e = i[1].boundingClientRect,
                    o = e.height,
                    u = e.width,
                    a = t.hasAutoplay && r,
                    s = n.getPlayedRanges(),
                    c = s.reduce(function (t, n) {
                      return t + n[1] - n[0];
                    }, 0);
                  return {
                    autoplay: a,
                    currentTime: n.getCurrentTime(),
                    duration: n.getDuration(),
                    height: o,
                    id: n.element.id,
                    muted: t.G,
                    playedTotal: c,
                    playedRangesJson: JSON.stringify(s),
                    state: t.getPlayingState(),
                    width: u,
                  };
                },
              );
            }),
            t
          );
        })(),
        An = (function () {
          function t(t, n) {
            var i = this;
            (this.xy = n),
              (this.Ui = t),
              (this.Qy = null),
              (this.tb = null),
              (this.vy = []),
              (this.nb = []),
              (this.ib = function () {
                return i.rb();
              }),
              (this.eb = function (t) {
                return i.ob(t) == On;
              }),
              (this.ub = function (t, n) {
                return i.ab(t, n);
              }),
              this.sb(),
              this.cb();
          }
          var n = t.prototype;
          return (
            (n.dispose = function () {
              this.nb.forEach(function (t) {
                return t();
              }),
                (this.nb.length = 0);
            }),
            (n.register = function (t) {
              var n = t.video,
                i = n.element;
              this.fb(i) &&
                (this.vy.push(n),
                rn(i, mn, this.ib),
                rn(i, pn, this.ib),
                rn(i, bn, this.ib),
                n.signals().whenSignal(qn).then(this.ib),
                this.rb());
            }),
            (n.cb = function () {
              var t = this,
                n = this.Ui.getRootNode(),
                i = function () {
                  return t.hb();
                };
              this.nb.push(
                rn(n, 'webkitfullscreenchange', i),
                rn(n, 'mozfullscreenchange', i),
                rn(n, 'fullscreenchange', i),
                rn(n, 'MSFullscreenChange', i),
              );
            }),
            (n.isInLandscape = function () {
              return (t = this.Ui.win).screen && 'orientation' in t.screen
                ? t.screen.orientation.type.startsWith('landscape')
                : 90 == Math.abs(t.orientation);
              var t;
            }),
            (n.fb = function (t) {
              if ('video' == et(t).tagName.toLowerCase()) return !0;
              var n = Gt(this.Ui.win);
              return (
                (!n.isIos() && !n.isSafari()) ||
                (function (t) {
                  return !!{ 'amp-dailymotion': !0, 'amp-ima-video': !0 }[
                    t.tagName.toLowerCase()
                  ];
                })(t)
              );
            }),
            (n.hb = function () {
              this.Qy = null;
            }),
            (n.sb = function () {
              var t = this,
                n = this.Ui.win,
                i = n.screen;
              if (i && 'orientation' in i) {
                var r = i.orientation;
                this.nb.push(
                  rn(r, 'change', function () {
                    return t.lb();
                  }),
                );
              }
              this.nb.push(
                rn(n, 'orientationchange', function () {
                  return t.lb();
                }),
              );
            }),
            (n.lb = function () {
              this.isInLandscape()
                ? null != this.tb && this.vb(this.tb)
                : this.Qy && this.mb(this.Qy);
            }),
            (n.vb = function (t) {
              var n = Gt(this.Ui.win);
              (this.Qy = t),
                n.isAndroid() && n.isChrome()
                  ? t.fullscreenEnter()
                  : this.pb(t).then(function () {
                      return t.fullscreenEnter();
                    });
            }),
            (n.mb = function (t) {
              (this.Qy = null),
                this.pb(t, 'center').then(function () {
                  return t.fullscreenExit();
                });
            }),
            (n.pb = function (t) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                i = t.element,
                r = this.yb();
              return this.bb()
                .then(function () {
                  return Qt(i);
                })
                .then(function (t) {
                  var o = t.boundingClientRect,
                    u = o.bottom,
                    a = o.top,
                    s = r.getSize().height;
                  if (a >= 0 && u <= s) return e();
                  var c = n || (u > s ? 'bottom' : 'top');
                  return r.animateScrollIntoView(i, c);
                });
            }),
            (n.yb = function () {
              return Ht(this.Ui);
            }),
            (n.bb = function () {
              return Xt(this.Ui.win).promise(330);
            }),
            (n.rb = function () {
              var t = this;
              if (this.isInLandscape()) return Promise.resolve(this.tb);
              this.tb = null;
              var n = this.vy.filter(this.eb).map(function (t) {
                return Qt(t.element);
              });
              return Promise.all(n).then(function (n) {
                var i = n.sort(t.ub)[0];
                return i && i.intersectionRatio > 0.5
                  ? i.target.getImpl().then(function (n) {
                      return (t.tb = n);
                    })
                  : t.tb;
              });
            }),
            (n.ab = function (t, n) {
              var i = t.boundingClientRect,
                r = t.intersectionRatio,
                e = n.boundingClientRect,
                o = r - n.intersectionRatio;
              if (Math.abs(o) > 0.1) return o;
              var u = Ht(this.Ui),
                a = Tn(u, i),
                s = Tn(u, e);
              return a < s || a > s ? a - s : i.top - e.top;
            }),
            (n.ob = function (t) {
              return this.xy.getPlayingState(t);
            }),
            t
          );
        })();
      function Tn(t, n) {
        var i = n.top + n.height / 2,
          r = t.getSize().height / 2;
        return Math.abs(i - r);
      }
      function In(t) {
        return 10 * t * 5;
      }
      var Nn = function (t) {
          return !!t && !isNaN(t) && t > 1;
        },
        Yn = (function () {
          function t(t, n) {
            (this.$r = Xt(t)),
              (this.wb = n),
              (this.nb = null),
              (this.gb = 0),
              (this.jb = 0);
          }
          var n = t.prototype;
          return (
            (n.start = function () {
              var t = this,
                n = this.wb.video.element;
              this.stop(),
                (this.nb = this.nb || []),
                this.Ob()
                  ? this.kb(this.jb)
                  : this.nb.push(
                      en(n, vn, function () {
                        t.Ob() && t.kb(t.jb);
                      }),
                    ),
                this.nb.push(
                  rn(n, bn, function () {
                    t.Ob() && t.qb(100);
                  }),
                );
            }),
            (n.stop = function () {
              if (this.nb) {
                for (; this.nb.length > 0; ) this.nb.pop()();
                this.jb++;
              }
            }),
            (n.Ob = function () {
              var t = this.wb.video,
                n = t.getDuration();
              if (!Nn(n)) return !1;
              if (In(n) < 250) {
                var i = Math.ceil(5);
                this.Pb(
                  'This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over',
                  i,
                  'seconds long.',
                  t.element,
                );
              }
              return !0;
            }),
            (n.Pb = function () {
              for (
                var t = arguments.length, n = new Array(t), i = 0;
                i < t;
                i++
              )
                n[i] = arguments[i];
              Et().warn.apply(Et(), [Mn].concat(n));
            }),
            (n.kb = function (t) {
              var n,
                i = this;
              if (t == this.jb) {
                var r = this.wb,
                  e = this.$r,
                  o = r.video,
                  u = function () {
                    return i.kb(t);
                  };
                if (r.getPlayingState() != xn) {
                  var a = o.getDuration();
                  if (Nn(a)) {
                    var s =
                        ((n = In(a)), g(!0), Math.min(Math.max(n, 250), 4e3)),
                      c = (o.getCurrentTime() / a) * 100,
                      f = 5 * Math.floor(c / 5);
                    Pt(y(f)), this.qb(f), e.delay(u, s);
                  } else e.delay(u, 500);
                } else e.delay(u, 500);
              }
            }),
            (n.qb = function (t) {
              t <= 0 || (this.gb != t && ((this.gb = t), this.xb(t)));
            }),
            (n.xb = function (t) {
              zn(this.wb, 'video-percentage-played', {
                normalizedPercentage: t.toString(),
              });
            }),
            t
          );
        })();
      function zn(t, n, i) {
        var r = t.video;
        t.getAnalyticsDetails().then(function (t) {
          i && Object.assign(t, i), L(r.element, n, t);
        });
      }
      var Un,
        Cn = (function () {
          function t(t, n) {
            (this.win = t), (this.di = n);
          }
          return (
            (t.make = function (n, i) {
              if (n.WeakRef) return new n.WeakRef(i);
              if (!i.id) {
                var r = (n.__AMP_WEAKREF_ID = (n.__AMP_WEAKREF_ID || 0) + 1);
                i.id = 'weakref-id-' + r;
              }
              return new t(n, i.id);
            }),
            (t.prototype.deref = function () {
              return this.win.document.getElementById(this.di) || void 0;
            }),
            t
          );
        })(),
        Ln = 'amp-video',
        Wn = { 'slow-2g': 50, '2g': 50, '3g': 1e3, '4g': 2500, '5g': 5e3 },
        Dn = 'i-amphtml-is-video-fully-loaded-override-for-testing',
        Fn = (function () {
          function t(t) {
            (this.win = t),
              (this.sg = ''),
              (this.hg = this.vg()),
              (this.dg = []);
          }
          var n = t.prototype;
          return (
            (n.manage = function (t) {
              var n = this;
              Wt(this.win, 'flexible-bitrate') &&
                (t.changedSources ||
                  ((function (t, n) {
                    rn(t, 'waiting', function () {
                      if (!(t.readyState < 1 || $n(t) > 0.99)) {
                        var i = null,
                          r = en(t, 'playing', function () {
                            clearTimeout(i);
                          });
                        i = setTimeout(function () {
                          r(), n();
                        }, 100);
                      }
                    });
                  })(t, function () {
                    return n.pg(t);
                  }),
                  rn(t, 'downgrade', function () {
                    return n.pg(t);
                  }),
                  (t.changedSources = function () {
                    n.mg(t);
                  }),
                  this.dg.push(Cn.make(this.win, t))));
            }),
            (n.pg = function (t) {
              var n = (function (t) {
                  return Pt(
                    Vn(t, function (n) {
                      return n.src == t.currentSrc;
                    }),
                  );
                })(t),
                i = n.bg - 1;
              i >= this.hg || ((this.hg = i), this.yg(t, n.bg), this.gg());
            }),
            (n.wg = function () {
              var t = this.win.navigator.connection;
              return t && t.effectiveType ? t.effectiveType : '4g';
            }),
            (n.vg = function () {
              return (
                this.sg != this.wg() &&
                  ((this.sg = this.wg()), (this.hg = Wn[this.sg] || Wn['4g'])),
                this.hg
              );
            }),
            (n.mg = function (t) {
              var n = this,
                i = h(R(t, 'source'));
              i.forEach(function (t) {
                if (!t.bg) {
                  var n = t.getAttribute('data-bitrate');
                  t.bg = n ? parseInt(n, 10) : Number.POSITIVE_INFINITY;
                }
              });
              var r = !1;
              return (
                i.sort(function (t, i) {
                  var e = n.jg(i) - n.jg(t);
                  return e < 0 && (r = !0), e;
                }),
                r &&
                  i.forEach(function (n) {
                    t.appendChild(n);
                  }),
                r
              );
            }),
            (n.jg = function (t) {
              var n = t.bg;
              return n > this.vg() && (n *= -1), n;
            }),
            (n.kg = function (t, n) {
              return !!Vn(t, function (t) {
                return t.bg < n;
              });
            }),
            (n.yg = function (t, n) {
              if (this.kg(t, n)) {
                var i = t.currentTime;
                t.pause(),
                  this.mg(t)
                    ? (t.load(),
                      en(t, 'loadedmetadata', function () {
                        (t.currentTime = i),
                          ot(t),
                          _t().fine(
                            Ln,
                            'Playing at lower bitrate %s',
                            t.currentSrc,
                          );
                      }))
                    : ot(t);
              } else _t().fine(Ln, 'No lower bitrate available');
            }),
            (n.gg = function () {
              for (var t = this.dg.length - 1; t >= 0; t--) {
                var n = this.dg[t].deref();
                n
                  ? n.paused &&
                    !((i = n).hasAttribute(Dn)
                      ? 'true' === i.getAttribute(Dn)
                      : $n(i) > 0.8) &&
                    this.mg(n) &&
                    n.load()
                  : this.dg.splice(t, 1);
              }
              var i;
            }),
            t
          );
        })();
      function Vn(t, n) {
        return P(t, function (t) {
          return 'SOURCE' == t.tagName && n(t);
        });
      }
      function $n(t) {
        if (!t.duration) return 0;
        for (var n = 0, i = 0; i < t.buffered.length; i++)
          n += t.buffered.end(i) - t.buffered.start(i);
        return n / t.duration;
      }
      function Jn(t, n) {
        if (!!n !== n && null != n)
          if (Array.isArray(n))
            n.forEach(function (n) {
              Jn(t, n);
            });
          else {
            var i = n;
            t.appendChild(
              i.nodeType ? i : self.document.createTextNode(String(n)),
            );
          }
      }
      function Bn(t, n, i) {
        if (!1 !== i && null != i)
          if ('function' != typeof i || 'o' !== n[0] || 'n' !== n[1])
            t.setAttribute(n, !0 === i ? '' : String(i));
          else {
            var r = n.toLowerCase().substring(2);
            t.addEventListener(r, i);
          }
      }
      function Gn(t, n) {
        for (
          var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), e = 2;
          e < i;
          e++
        )
          r[e - 2] = arguments[e];
        if ('string' != typeof t) return t(mt(mt({}, n), {}, { children: r }));
        var o = null == n ? void 0 : n.xmlns;
        o && delete n.xmlns;
        var u = o
          ? self.document.createElementNS(o, t)
          : self.document.createElement(t);
        return (
          Jn(u, r),
          n &&
            Object.keys(n).forEach(function (t) {
              Bn(u, t, n[t]);
            }),
          u
        );
      }
      var Xn,
        Zn,
        Hn = (function () {
          function t(t) {
            (this.Lt = t), (this.Ht = 0), (this.Ft = 0), (this.Gt = b());
          }
          var n = t.prototype;
          return (
            (n.has = function (t) {
              return !!this.Gt[t];
            }),
            (n.get = function (t) {
              var n = this.Gt[t];
              if (n) return (n.access = ++this.Ft), n.payload;
            }),
            (n.put = function (t, n) {
              this.has(t) || this.Ht++,
                (this.Gt[t] = { payload: n, access: this.Ft }),
                this.zt();
            }),
            (n.zt = function () {
              if (!(this.Ht <= this.Lt)) {
                var t,
                  n = this.Gt,
                  i = this.Ft + 1;
                for (var r in n) {
                  var e = n[r].access;
                  e < i && ((i = e), (t = r));
                }
                void 0 !== t && (delete n[t], this.Ht--);
              }
            }),
            t
          );
        })(),
        Kn = function (t) {
          return 'string' == typeof t ? Qn(t) : t;
        };
      function Qn(t, n) {
        return (
          Xn ||
            ((Xn = self.document.createElement('a')),
            (Zn =
              self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new Hn(100)))),
          (function (t, n, i) {
            if (i && i.has(n)) return i.get(n);
            (t.href = n), t.protocol || (t.href = t.href);
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
            var o = e;
            return i && i.put(n, o), o;
          })(Xn, t, n ? null : Zn)
        );
      }
      function ti(t, n) {
        return (function (t, n, i) {
          if (!n) return t;
          var r = t.split('#', 2),
            e = r[0].split('?', 2);
          return (
            e[0] +
            (e[1] ? '?'.concat(e[1], '&').concat(n) : '?'.concat(n)) +
            (r[1] ? '#'.concat(r[1]) : '')
          );
        })(
          t,
          (function (t) {
            var n,
              i,
              r = [];
            for (var e in t) {
              var o = t[e];
              if (null != o) {
                o = v(o);
                for (var u = 0; u < o.length; u++)
                  r.push(
                    ((n = e),
                    (i = o[u]),
                    ''
                      .concat(encodeURIComponent(n), '=')
                      .concat(encodeURIComponent(i))),
                  );
              }
            }
            return r.join('&');
          })(n),
        );
      }
      var ni = ['h264', 'vp09'];
      function ii(t, n, i) {
        n.sort(function (t, n) {
          var i,
            r,
            e =
              null === (i = t.codec) || void 0 === i ? void 0 : i.split('.')[0],
            o =
              null === (r = n.codec) || void 0 === r ? void 0 : r.split('.')[0],
            u = ni.indexOf(e),
            a = ni.indexOf(o);
          if (u > a) return 1;
          if (u < a) return -1;
          var s = t.bitrate_kbps,
            c = n.bitrate_kbps;
          return s > c ? 1 : s < c ? -1 : 0;
        }).forEach(function (n) {
          if (!(n.bitrate_kbps > i)) {
            var r = n.type;
            n.codec && 'h264' !== n.codec && (r += '; codecs=' + n.codec);
            var e,
              o,
              u =
                ((e = t.ownerDocument),
                (o = {
                  src: n.url,
                  type: r,
                  'data-bitrate': n.bitrate_kbps,
                  'i-amphtml-video-cached-source': '',
                }),
                U(e.createElement('source'), o));
            t.insertBefore(u, t.firstChild);
          }
        });
      }
      function ri(t, n) {
        !1 === n && t.setAttribute('noaudio', '');
      }
      function ei(t, n) {
        if (n && n.src && n.srclang && !t.querySelector('track')) {
          var i = Gn('track', {
              src: n.src,
              srclang: n.srclang,
              kind: 'captions',
            }),
            r = Gn('amp-story-captions', {
              id: n.src,
              'style-preset': 'default',
              layout: 'container',
              'auto-append': !0,
            });
          t.setAttribute('captions-id', n.src),
            t.appendChild(i),
            t.appendChild(r);
        }
      }
      function oi(t, n) {
        var i = n.win;
        if (
          (function (t, n) {
            return (
              t ===
              n.document.querySelector('amp-story-page:first-of-type amp-video')
            );
          })(t, i)
        ) {
          var r = i.document.getElementById('amp-google-video-cache-response');
          try {
            var e = JSON.parse(r.textContent);
            if (e.sources) return Promise.resolve(e);
          } catch (t) {}
        }
        var u = Tt(i.document, 'documentInfo').get(),
          a = u.canonicalUrl,
          s = u.sourceUrl;
        !(function (t, n) {
          if (t.hasAttribute('src')) {
            var i = n.document.createElement('source'),
              r = t.getAttribute('src');
            i.setAttribute('src', r);
            var e = t.getAttribute('type');
            e && i.setAttribute('type', e),
              t.removeAttribute('src'),
              t.removeAttribute('type'),
              t.querySelectorAll('source').forEach(N),
              t.insertBefore(i, t.firstChild);
          }
        })(t, i);
        var c,
          f,
          l =
            ((c = (function (t) {
              for (
                var n, i = h(t.querySelectorAll('source[src]')), r = 0;
                r < i.length;
                r++
              )
                if (_(i[r], '[type*="video/mp4"]'))
                  return i[r].getAttribute('src');
              return null === (n = i[0]) || void 0 === n
                ? void 0
                : n.getAttribute('src');
            })(t)),
            (f = Kn((f = s))),
            'function' == typeof URL
              ? new URL(c, f.href).toString()
              : (function (t, n) {
                  n = Kn(n);
                  var i = Qn((t = t.replace(/\\/g, '/')));
                  return t.toLowerCase().startsWith(i.protocol)
                    ? i.href
                    : t.startsWith('//')
                      ? n.protocol + t
                      : t.startsWith('/')
                        ? n.origin + t
                        : n.origin + n.pathname.replace(/\/[^/]*$/, '/') + t;
                })(c, f));
        return (function (t, n) {
          return Jt(n.win)
            .installExtensionForDoc(n, 'amp-cache-url')
            .then(function () {
              return (function (t, n) {
                return (function (t, n) {
                  var i = (function (t, n) {
                    var i = Ut(t)[n];
                    return i
                      ? i.promise
                        ? i.promise
                        : (zt(t, n), (i.promise = Promise.resolve(i.obj)))
                      : null;
                  })(t, n);
                  if (i) return i;
                  var r,
                    e,
                    u,
                    a,
                    s = Ut(t);
                  return (
                    (s[n] =
                      ((e = (r = new o()).promise),
                      (u = r.reject),
                      (a = r.resolve),
                      e.catch(function () {}),
                      {
                        obj: null,
                        promise: e,
                        resolve: a,
                        reject: u,
                        context: null,
                        ctor: null,
                      })),
                    s[n].promise
                  );
                })(Yt(t), n);
              })(t, 'cache-url');
            });
        })(t, n)
          .then(function (t) {
            return t.createCacheUrl(l);
          })
          .then(function (t) {
            var n,
              r = ti(t.replace(/\/[ic]\//, '/mbv/'), {
                amp_video_host_url: a,
                amp_video_require_acao_header: 1,
              });
            return ((n = i), At(n, 'xhr'))
              .fetch(r, { prerenderSafe: !0 })
              .then(function (t) {
                return t.json();
              });
          });
      }
      var ui = ['<i-amphtml-poster></i-amphtml-poster>'],
        ai = 'amp-video',
        si = [
          'aria-describedby',
          'aria-label',
          'aria-labelledby',
          'controls',
          'crossorigin',
          'disableremoteplayback',
          'controlsList',
          'title',
        ],
        ci = { high: 2e3, medium: 720, low: 400 },
        fi = ['loop', 'poster', 'preload'],
        hi = si.concat(fi),
        li = (function (t) {
          !(function (t, n) {
            if ('function' != typeof n && null !== n)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && a(t, n);
          })(o, t);
          var n,
            i,
            r =
              ((n = o),
              (i = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
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
              })()),
              function () {
                var t,
                  r = s(n);
                if (i) {
                  var e = s(this).constructor;
                  t = Reflect.construct(r, arguments, e);
                } else t = r.apply(this, arguments);
                return f(this, t);
              });
          function o(t) {
            var n;
            return (
              ((n = r.call(this, t)).Og = null),
              (n.G = !1),
              (n.ny = fn),
              (n.nb = []),
              (n.xg = null),
              (n.Sg = null),
              (n.Vb = new vt(n.element)),
              (n.qg = !1),
              n
            );
          }
          o.prerenderAllowed = function (t) {
            if (t.getAttribute('poster') || t.hasAttribute('cache')) return !0;
            var n = h(R(t, 'source'));
            n.push(t);
            for (var i = 0; i < n.length; i++) if (vi(n[i], t)) return !0;
            return !1;
          };
          var u = o.prototype;
          return (
            (u.preconnectCallback = function (t) {
              var n = this;
              this.Eg().forEach(function (i) {
                var r;
                ((r = n.win), At(r, 'preconnect')).url(n.getAmpDoc(), i, t);
              });
            }),
            (u.Eg = function () {
              var t = this.element.getAttribute('src');
              if (t) return [t];
              var n = [];
              return (
                h(R(this.element, 'source')).forEach(function (t) {
                  var i = t.getAttribute('src');
                  i && n.push(i);
                  var r = t.getAttribute('amp-orig-src');
                  r && n.push(r);
                }),
                n
              );
            }),
            (u.isLayoutSupported = function (t) {
              return (function (t) {
                return (
                  'fixed' == t ||
                  'fixed-height' == t ||
                  'responsive' == t ||
                  'fill' == t ||
                  'flex-item' == t ||
                  'fluid' == t ||
                  'intrinsic' == t
                );
              })(t);
            }),
            (u.buildCallback = function () {
              var t = this.element;
              this.Mg(), (this.Og = t.ownerDocument.createElement('video'));
              var n,
                i,
                r,
                o = t.getAttribute('poster');
              !o &&
                ((r = self),
                r.__AMP_MODE
                  ? r.__AMP_MODE
                  : (r.__AMP_MODE = (function (t) {
                      return {
                        localDev: !1,
                        development: xt(t, wt(t)),
                        esm: !1,
                        test: !1,
                        rtvVersion: Ot(t),
                        ssrReady: !1,
                      };
                    })(r))).development &&
                console.error(
                  'No "poster" attribute has been provided for amp-video.',
                ),
                this.Og.setAttribute('playsinline', ''),
                this.Og.setAttribute('webkit-playsinline', ''),
                this.Og.setAttribute('preload', 'none'),
                this._g(),
                D(si, this.element, this.Og, !0),
                this.Pg(),
                W(this.Og, !0),
                (n = this.element),
                (i = this.Og),
                n.hasAttribute('object-fit') &&
                  nt(i, 'object-fit', n.getAttribute('object-fit')),
                n.hasAttribute('object-position') &&
                  nt(i, 'object-position', n.getAttribute('object-position')),
                t.appendChild(this.Og);
              var u,
                a,
                s,
                c,
                f = t.getAttribute('artist'),
                h = t.getAttribute('title'),
                l = t.getAttribute('album'),
                v = t.getAttribute('artwork');
              if (
                ((this.ny = {
                  title: h || '',
                  artist: f || '',
                  album: l || '',
                  artwork: [{ src: v || o || '' }],
                }),
                (this.Sg =
                  !!this.element.querySelector('source[data-bitrate]') ||
                  this.element.hasAttribute('cache') ||
                  this.Rg()),
                (a = 'video-manager'),
                (s = _n),
                (function (t, n, i, r, e, o) {
                  var u = Ut(t),
                    a = u[i];
                  a ||
                    (a = u[i] =
                      {
                        obj: null,
                        promise: null,
                        resolve: null,
                        reject: null,
                        context: null,
                        ctor: null,
                        sharedInstance: !1,
                      }),
                    a.ctor ||
                      ((a.ctor = r),
                      (a.context = n),
                      (a.sharedInstance = !1),
                      a.resolve && zt(t, i));
                })(Yt((c = Nt(t))), c, a, s),
                ((u = t), Tt(u, 'video-manager')).register(this),
                this.element.hasAttribute('cache'))
              )
                return (
                  this.Ag(),
                  (function (t, n) {
                    var i,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : Number.POSITIVE_INFINITY,
                      o = n.win;
                    if (Gt(o).isBot()) return e();
                    t.hasAttribute('crossorigin') ||
                      t.setAttribute('crossorigin', '');
                    var u = t.getAttribute('src'),
                      a =
                        null === (i = t.querySelector('source[src]')) ||
                        void 0 === i
                          ? void 0
                          : i.getAttribute('src');
                    return u || a
                      ? (Bt(n.win).addEnabledExperiment('video-cache'),
                        oi(t, n)
                          .then(function (n) {
                            ii(t, n.sources, r),
                              Wt(o, 'story-video-cache-apply-audio') &&
                                ri(t, n.has_audio),
                              ei(t, n.captions);
                          })
                          .catch(function () {}))
                      : (Et().error(
                          'AMP-VIDEO',
                          'Video cache not properly configured',
                        ),
                        e());
                  })(this.element, this.getAmpDoc(), this.Tg())
                );
            }),
            (u._g = function () {
              var t = this.element.getAttribute('alt'),
                n = this.element.hasAttribute('title'),
                i = this.element.hasAttribute('aria-label');
              !t || n || i || this.element.setAttribute('aria-label', t);
            }),
            (u.detachedCallback = function () {
              this.Ig(!1);
            }),
            (u.Mg = function () {
              var t = this.element;
              (function (t) {
                return !!(function (t, n) {
                  return t.closest
                    ? t.closest(n)
                    : (function (t, n, i) {
                        var r;
                        for (r = t; r && void 0 !== r; r = r.parentElement)
                          if (n(r)) return r;
                        return null;
                      })(t, function (t) {
                        return _(t, n);
                      });
                })(t, 'amp-story');
              })(t) &&
                [
                  'i-amphtml-disable-mediasession',
                  'i-amphtml-poolbound',
                ].forEach(function (n) {
                  t.classList.add(n);
                });
            }),
            (u.mutatedAttributesCallback = function (t) {
              if (this.Og) {
                var n = this.element;
                if (
                  (t.src &&
                    (this.Ng().assertHttpsUrl(n.getAttribute('src'), n),
                    D(['src'], this.element, this.Og)),
                  D(
                    hi.filter(function (n) {
                      return void 0 !== t[n];
                    }),
                    this.element,
                    this.Og,
                    !0,
                  ),
                  t.src && L(n, wn),
                  t.artwork || t.poster)
                ) {
                  var i = n.getAttribute('artwork'),
                    r = n.getAttribute('poster');
                  this.ny.artwork = [{ src: i || r || '' }];
                }
                if (t.album) {
                  var e = n.getAttribute('album');
                  this.ny.album = e || '';
                }
                if (t.title) {
                  var o = n.getAttribute('title');
                  this.ny.title = o || '';
                }
                if (t.artist) {
                  var u = n.getAttribute('artist');
                  this.ny.artist = u || '';
                }
              }
            }),
            (u.layoutCallback = function () {
              var t,
                n = this;
              if (((this.Og = this.Og), !this.Yg()))
                return this.toggleFallback(!0), e();
              D(fi, this.element, this.Og, !0),
                this.zg(),
                this.Ug(function () {
                  return n.Cg();
                }),
                this.Lg(),
                'prerender' == this.getAmpDoc().getVisibilityState() ||
                'preview' == this.getAmpDoc().getVisibilityState()
                  ? (this.element.hasAttribute('preload') ||
                      this.Og.setAttribute('preload', 'auto'),
                    (t = this.getAmpDoc()
                      .whenFirstVisible()
                      .then(function () {
                        return (
                          n.Wg(),
                          Xt(n.win)
                            .promise(1)
                            .then(function () {
                              if (!n.Dg()) return n.loadPromise(n.Og);
                            })
                        );
                      })))
                  : this.Wg();
              var i = this.loadPromise(this.Og)
                .then(null, function (n) {
                  if (t) return t;
                  throw n;
                })
                .then(function () {
                  return n.Fg();
                });
              return 'none' !== this.element.getAttribute('preload')
                ? this.Dg()
                  ? t
                  : i
                : void 0;
            }),
            (u.Vg = function (t) {
              var n = this;
              if (
                this.Og.error &&
                this.Og.error.code == MediaError.MEDIA_ERR_DECODE &&
                (Et().error(
                  ai,
                  'Decode error in '.concat(this.Og.currentSrc),
                  this.element,
                ),
                !this.Og.src)
              ) {
                var i = 0,
                  r = P(this.Og, function (t) {
                    return (
                      'SOURCE' == t.tagName && (i++, t.src == n.Og.currentSrc)
                    );
                  });
                0 != i &&
                  (N(r),
                  t.stopImmediatePropagation(),
                  this.Og.load(),
                  this.play(!1));
              }
            }),
            (u.Ag = function () {
              this.$g().forEach(function (t) {
                t.setAttribute('src', t.getAttribute('amp-orig-src')),
                  t.removeAttribute('amp-orig-src');
              });
            }),
            (u.Lg = function () {
              var t = this;
              Pt(this.Og);
              var n = h(R(this.element, 'source'));
              if (this.element.hasAttribute('src') && vi(this.element)) {
                var i = this.element.getAttribute('src'),
                  r = this.element.getAttribute('type'),
                  e = this.Jg(i, r),
                  o = this.element.getAttribute('amp-orig-src');
                e.setAttribute('amp-orig-src', o),
                  this.element.removeAttribute('src'),
                  this.element.removeAttribute('type'),
                  n.unshift(e);
              }
              n.forEach(function (n) {
                if (vi(n, t.element)) {
                  n.remove();
                  var i = Object.keys(ci),
                    r = n.getAttribute('type'),
                    e = n.getAttribute('amp-orig-src'),
                    o = t.Tg();
                  i.forEach(function (u, a) {
                    if (!(o < ci[u])) {
                      var s = ti(n.src, { amp_video_quality: u }),
                        c = t.Jg(s, r, {
                          'data-bitrate': ci[u],
                          'i-amphtml-video-cached-source': '',
                        });
                      a === i.length - 1 && c.setAttribute('amp-orig-src', e),
                        t.Og.appendChild(c);
                    }
                  });
                } else
                  n.hasAttribute('i-amphtml-video-cached-source') &&
                    t.Og.appendChild(n);
              }),
                this.Og.changedSources && this.Og.changedSources();
            }),
            (u.Wg = function () {
              var t = this;
              Pt(this.Og);
              var n = h(R(this.element, 'source')),
                i = this.element,
                r = this.Ng();
              i.hasAttribute('src') &&
                !vi(i) &&
                (r.assertHttpsUrl(i.getAttribute('src'), i),
                D(['src'], this.element, this.Og)),
                n.forEach(function (n) {
                  Pt(!vi(n, i)),
                    r.assertHttpsUrl(n.getAttribute('src'), n),
                    t.Og.appendChild(n);
                }),
                h(this.Og.querySelectorAll('[amp-orig-src]')).forEach(
                  function (n) {
                    var i = n.getAttribute('amp-orig-src'),
                      r = n.getAttribute('type'),
                      e = t.Jg(i, r);
                    Y(t.Og, e, n);
                  },
                ),
                h(R(i, 'track')).forEach(function (n) {
                  t.Og.appendChild(n);
                }),
                this.Bg(),
                this.Og.changedSources && this.Og.changedSources();
            }),
            (u.Jg = function (t, n) {
              var i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = this.element;
              this.Ng().assertHttpsUrl(t, r);
              var e = r.ownerDocument.createElement('source');
              return (
                e.setAttribute('src', t),
                n && e.setAttribute('type', n),
                U(e, i),
                e
              );
            }),
            (u.$g = function () {
              var t = this.element,
                n = h(R(t, 'source')),
                i = [];
              n.push(t);
              for (var r = 0; r < n.length; r++) vi(n[r]) && i.push(n[r]);
              return i;
            }),
            (u.Rg = function () {
              return !!this.$g().length;
            }),
            (u.Tg = function () {
              return this.Dg() &&
                Wt(this.win, 'amp-story-first-page-max-bitrate') &&
                _(this.element, 'amp-story-page:first-of-type amp-video')
                ? (Bt(this.win).addEnabledExperiment(
                    'amp-story-first-page-max-bitrate',
                  ),
                  1e3)
                : Number.POSITIVE_INFINITY;
            }),
            (u.Pg = function () {
              var t = this,
                n = this.Og;
              n.addEventListener('error', function (n) {
                return t.Vg(n);
              }),
                this.nb.push(
                  this.forwardEvents([bn, vn, 'loadeddata', mn, pn, dn], n),
                ),
                this.nb.push(
                  rn(n, 'volumechange', function () {
                    var n = t.Og.muted;
                    t.G != n && ((t.G = n), L(t.element, t.G ? yn : gn));
                  }),
                ),
                ['play', 'pause', 'ended'].forEach(function (i) {
                  t.nb.push(
                    rn(n, i, function () {
                      return t.Ig('play' == i);
                    }),
                  );
                });
            }),
            (u.Gg = function () {
              for (this.Ig(!1); this.nb.length; ) this.nb.pop().call();
            }),
            (u.resetOnDomChange = function () {
              var t,
                n,
                i,
                r,
                e,
                o = this;
              (this.Og =
                ((e = this.element),
                E('video'),
                (function (t, n) {
                  if (S(t)) return t.querySelector(q(n, ':scope'));
                  var i = M(t, n)[0];
                  return void 0 === i ? null : i;
                })(e, '> '.concat('video')))),
                this.Gg(),
                this.Pg(),
                this.Sg &&
                  ((t = this.win),
                  Un ||
                    (Wt(t, 'flexible-bitrate') &&
                      Bt(t).addEnabledExperiment('flexible-bitrate'),
                    (Un = new Fn(t)))).manage(this.Og),
                this.Og.readyState >= 1
                  ? this.Fg()
                  : (((n = this.Og),
                    (r = new Promise(function (t) {
                      i = en(n, 'loadedmetadata', t, void 0);
                    })),
                    r.then(i, i),
                    r).then(function () {
                      return o.Fg();
                    }),
                    this.Bg());
            }),
            (u.Bg = function () {
              var t = this,
                n = this.element.getAttribute('captions-id');
              if (n) {
                var i = this.win.document.querySelector(
                  'amp-story-captions#'.concat(String(n).replace(O, x)),
                );
                if (i) {
                  var r = this.getAmpDoc();
                  Jt(r.win).installExtensionForDoc(
                    r,
                    'amp-story-captions',
                    '0.1',
                  ),
                    (this.qg = !0),
                    i.getImpl().then(function (n) {
                      n.setVideoElement && n.setVideoElement(t.Og);
                    });
                }
              }
            }),
            (u.Fg = function () {
              L(this.element, ln), this.Xg();
            }),
            (u.pauseCallback = function () {
              this.Og && this.Og.pause();
            }),
            (u.Ig = function (t) {
              this.Dg() || this.Vb.updatePlaying(t);
            }),
            (u.Yg = function () {
              return !!this.Og.play;
            }),
            (u.supportsPlatform = function () {
              return this.Yg();
            }),
            (u.isInteractive = function () {
              return this.element.hasAttribute('controls');
            }),
            (u.play = function (t) {
              ot(this.Og);
            }),
            (u.zg = function () {
              if (Gt(this.win).isAndroid()) {
                var t = this.element;
                if (!t.querySelector('i-amphtml-poster')) {
                  var n = t.getAttribute('poster');
                  if (n) {
                    var i,
                      r = F(t)(ui);
                    'block',
                      (i = r.style),
                      g(!0),
                      g(!i.display),
                      (i.display = 'block'),
                      it(r, {
                        'background-image': 'url('.concat(n, ')'),
                        'background-size': 'cover',
                        'background-position': 'center',
                      }),
                      r.classList.add('i-amphtml-android-poster-bug'),
                      W(r),
                      t.appendChild(r);
                  }
                }
              }
            }),
            (u.pause = function () {
              this.Og.pause();
            }),
            (u.mute = function () {
              this.Dg() || (this.Og.muted = !0);
            }),
            (u.unmute = function () {
              this.Dg() || (this.Og.muted = !1);
            }),
            (u.Dg = function () {
              return this.element.classList.contains('i-amphtml-poolbound');
            }),
            (u.showControls = function () {
              this.Og.controls = !0;
            }),
            (u.hideControls = function () {
              this.Og.controls = !1;
            }),
            (u.fullscreenEnter = function () {
              var t, n;
              (n =
                (t = this.Og).requestFullscreen ||
                t.requestFullScreen ||
                t.webkitRequestFullscreen ||
                t.webkitEnterFullscreen ||
                t.msRequestFullscreen ||
                t.mozRequestFullScreen) && n.call(t);
            }),
            (u.fullscreenExit = function () {
              !(function (t) {
                var n =
                  t.cancelFullScreen ||
                  t.exitFullscreen ||
                  t.webkitExitFullscreen ||
                  t.webkitCancelFullScreen ||
                  t.mozCancelFullScreen ||
                  t.msExitFullscreen;
                if (n) n.call(t);
                else {
                  var i = t.ownerDocument;
                  if (i) {
                    var r =
                      i.cancelFullScreen ||
                      i.exitFullscreen ||
                      i.webkitExitFullscreen ||
                      i.webkitCancelFullScreen ||
                      i.mozCancelFullScreen ||
                      i.msExitFullscreen;
                    r && r.call(i);
                  }
                }
              })(this.Og);
            }),
            (u.isFullscreen = function () {
              return (function (t) {
                var n = t.webkitDisplayingFullscreen;
                if (void 0 !== n) return n;
                var i = t.ownerDocument;
                return (
                  !!i &&
                  (i.fullscreenElement ||
                    i.webkitFullscreenElement ||
                    i.mozFullScreenElement ||
                    i.webkitCurrentFullScreenElement) == t
                );
              })(this.Og);
            }),
            (u.getMetadata = function () {
              return this.ny;
            }),
            (u.preimplementsMediaSessionAPI = function () {
              return !1;
            }),
            (u.preimplementsAutoFullscreen = function () {
              return !1;
            }),
            (u.getCurrentTime = function () {
              return this.Og.currentTime;
            }),
            (u.getDuration = function () {
              return this.Og.duration;
            }),
            (u.getPlayedRanges = function () {
              for (
                var t = this.Og.played, n = t.length, i = [], r = 0;
                r < n;
                r++
              )
                i.push([t.start(r), t.end(r)]);
              return i;
            }),
            (u.firstLayoutCompleted = function () {
              this.Cg() || this.togglePlaceholder(!1);
            }),
            (u.Xg = function () {
              var t = this.element.querySelector('i-amphtml-poster');
              t && N(t);
            }),
            (u.Ng = function () {
              return Zt(this.element);
            }),
            (u.Cg = function () {
              var t = this.getPlaceholder();
              return !(
                !t ||
                !t.classList.contains('i-amphtml-blurry-placeholder') ||
                ((function (t, n) {
                  var i = t.style;
                  for (var r in n)
                    i.setProperty(Q(tt(i, r)), String(n[r]), 'important');
                })(t, { opacity: 0 }),
                0)
              );
            }),
            (u.Ug = function (t) {
              var n = this.Og.getAttribute('poster');
              if (n) {
                var i = new Image();
                (i.onload = t), (i.src = n);
              }
            }),
            (u.seekTo = function (t) {
              this.Og.currentTime = t;
            }),
            (u.toggleCaptions = function (t) {
              var n = this;
              h(this.Og.textTracks).forEach(function (i) {
                i.mode = t ? (n.qg ? 'hidden' : 'showing') : 'disabled';
              });
            }),
            o
          );
        })(t.BaseElement);
      function vi(t, n) {
        var i = t.getAttribute('src');
        return !!t.hasAttribute('amp-orig-src') && Zt(n || t).isProxyOrigin(i);
      }
      t.registerElement(ai, li);
    })();
    /*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
  },
});
//# sourceMappingURL=amp-video-0.1.js.map
