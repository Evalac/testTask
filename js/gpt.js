(function (sttc) {
  var window = this;
  if (window.googletag && googletag.evalScripts) {
    googletag.evalScripts();
  }
  if (window.googletag && googletag._loaded_) return;
  var q,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      typeof Object.defineProperties == 'function'
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ca = function (a) {
      a = [
        'object' == typeof globalThis && globalThis,
        a,
        'object' == typeof window && window,
        'object' == typeof self && self,
        'object' == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error('Cannot find global object');
    },
    da = ca(this),
    ea = typeof Symbol === 'function' && typeof Symbol('x') === 'symbol',
    u = {},
    fa = {},
    v = function (a, b, c) {
      if (!c || a != null) {
        c = fa[b];
        if (c == null) return a[b];
        c = a[c];
        return c !== void 0 ? c : a[b];
      }
    },
    w = function (a, b, c) {
      if (b)
        a: {
          var d = a.split('.');
          a = d.length === 1;
          var e = d[0],
            f;
          !a && e in u ? (f = u) : (f = da);
          for (e = 0; e < d.length - 1; e++) {
            var g = d[e];
            if (!(g in f)) break a;
            f = f[g];
          }
          d = d[d.length - 1];
          c = ea && c === 'es6' ? f[d] : null;
          b = b(c);
          b != null &&
            (a
              ? ba(u, d, { configurable: !0, writable: !0, value: b })
              : b !== c &&
                (fa[d] === void 0 &&
                  ((a = (Math.random() * 1e9) >>> 0),
                  (fa[d] = ea ? da.Symbol(d) : '$jscp$' + a + '$' + d)),
                ba(f, fa[d], { configurable: !0, writable: !0, value: b })));
        }
    };
  w(
    'Symbol',
    function (a) {
      if (a) return a;
      var b = function (f, g) {
        this.g = f;
        ba(this, 'description', { configurable: !0, writable: !0, value: g });
      };
      b.prototype.toString = function () {
        return this.g;
      };
      var c = 'jscomp_symbol_' + ((Math.random() * 1e9) >>> 0) + '_',
        d = 0,
        e = function (f) {
          if (this instanceof e)
            throw new TypeError('Symbol is not a constructor');
          return new b(c + (f || '') + '_' + d++, f);
        };
      return e;
    },
    'es6',
  );
  w(
    'Symbol.iterator',
    function (a) {
      if (a) return a;
      a = (0, u.Symbol)('Symbol.iterator');
      for (
        var b =
            'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
              ' ',
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = da[b[c]];
        typeof d === 'function' &&
          typeof d.prototype[a] != 'function' &&
          ba(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return ha(aa(this));
            },
          });
      }
      return a;
    },
    'es6',
  );
  var ha = function (a) {
      a = { next: a };
      a[v(u.Symbol, 'iterator')] = function () {
        return this;
      };
      return a;
    },
    ia =
      typeof Object.create == 'function'
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ja;
  if (ea && typeof Object.setPrototypeOf == 'function')
    ja = Object.setPrototypeOf;
  else {
    var ka;
    a: {
      var la = { a: !0 },
        ma = {};
      try {
        ma.__proto__ = la;
        ka = ma.a;
        break a;
      } catch (a) {}
      ka = !1;
    }
    ja = ka
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
          return a;
        }
      : null;
  }
  var na = ja,
    x = function (a, b) {
      a.prototype = ia(b.prototype);
      a.prototype.constructor = a;
      if (na) na(a, b);
      else
        for (var c in b)
          if (c != 'prototype')
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Mb = b.prototype;
    },
    z = function (a) {
      var b =
        typeof u.Symbol != 'undefined' &&
        v(u.Symbol, 'iterator') &&
        a[v(u.Symbol, 'iterator')];
      if (b) return b.call(a);
      if (typeof a.length == 'number') return { next: aa(a) };
      throw Error(String(a) + ' is not an iterable or ArrayLike');
    },
    oa = function (a) {
      if (!(a instanceof Array)) {
        a = z(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    },
    qa = function (a) {
      return pa(a, a);
    },
    pa = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    ra = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    ta =
      ea && typeof v(Object, 'assign') == 'function'
        ? v(Object, 'assign')
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) ra(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  w(
    'Object.assign',
    function (a) {
      return a || ta;
    },
    'es6',
  );
  var ua = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  };
  w(
    'globalThis',
    function (a) {
      return a || da;
    },
    'es_2020',
  );
  w(
    'Array.prototype.find',
    function (a) {
      return a
        ? a
        : function (b, c) {
            a: {
              var d = this;
              d instanceof String && (d = String(d));
              for (var e = d.length, f = 0; f < e; f++) {
                var g = d[f];
                if (b.call(c, g, f, d)) {
                  b = g;
                  break a;
                }
              }
              b = void 0;
            }
            return b;
          };
    },
    'es6',
  );
  w(
    'WeakMap',
    function (a) {
      function b() {}
      function c(g) {
        var h = typeof g;
        return (h === 'object' && g !== null) || h === 'function';
      }
      if (
        (function () {
          if (!a || !Object.seal) return !1;
          try {
            var g = Object.seal({}),
              h = Object.seal({}),
              l = new a([
                [g, 2],
                [h, 3],
              ]);
            if (l.get(g) != 2 || l.get(h) != 3) return !1;
            l.delete(g);
            l.set(h, 4);
            return !l.has(g) && l.get(h) == 4;
          } catch (k) {
            return !1;
          }
        })()
      )
        return a;
      var d = '$jscomp_hidden_' + Math.random(),
        e = 0,
        f = function (g) {
          this.g = (e += Math.random() + 1).toString();
          if (g) {
            g = z(g);
            for (var h; !(h = g.next()).done; )
              (h = h.value), this.set(h[0], h[1]);
          }
        };
      f.prototype.set = function (g, h) {
        if (!c(g)) throw Error('Invalid WeakMap key');
        if (!ra(g, d)) {
          var l = new b();
          ba(g, d, { value: l });
        }
        if (!ra(g, d)) throw Error('WeakMap key fail: ' + g);
        g[d][this.g] = h;
        return this;
      };
      f.prototype.get = function (g) {
        return c(g) && ra(g, d) ? g[d][this.g] : void 0;
      };
      f.prototype.has = function (g) {
        return c(g) && ra(g, d) && ra(g[d], this.g);
      };
      f.prototype.delete = function (g) {
        return c(g) && ra(g, d) && ra(g[d], this.g) ? delete g[d][this.g] : !1;
      };
      return f;
    },
    'es6',
  );
  w(
    'Map',
    function (a) {
      if (
        (function () {
          if (
            !a ||
            typeof a != 'function' ||
            !v(a.prototype, 'entries') ||
            typeof Object.seal != 'function'
          )
            return !1;
          try {
            var h = Object.seal({ x: 4 }),
              l = new a(z([[h, 's']]));
            if (
              l.get(h) != 's' ||
              l.size != 1 ||
              l.get({ x: 4 }) ||
              l.set({ x: 4 }, 't') != l ||
              l.size != 2
            )
              return !1;
            var k = v(l, 'entries').call(l),
              p = k.next();
            if (p.done || p.value[0] != h || p.value[1] != 's') return !1;
            p = k.next();
            return p.done ||
              p.value[0].x != 4 ||
              p.value[1] != 't' ||
              !k.next().done
              ? !1
              : !0;
          } catch (m) {
            return !1;
          }
        })()
      )
        return a;
      var b = new u.WeakMap(),
        c = function (h) {
          this[0] = {};
          this[1] = f();
          this.size = 0;
          if (h) {
            h = z(h);
            for (var l; !(l = h.next()).done; )
              (l = l.value), this.set(l[0], l[1]);
          }
        };
      c.prototype.set = function (h, l) {
        h = h === 0 ? 0 : h;
        var k = d(this, h);
        k.list || (k.list = this[0][k.id] = []);
        k.u
          ? (k.u.value = l)
          : ((k.u = {
              next: this[1],
              H: this[1].H,
              head: this[1],
              key: h,
              value: l,
            }),
            k.list.push(k.u),
            (this[1].H.next = k.u),
            (this[1].H = k.u),
            this.size++);
        return this;
      };
      c.prototype.delete = function (h) {
        h = d(this, h);
        return h.u && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this[0][h.id],
            (h.u.H.next = h.u.next),
            (h.u.next.H = h.u.H),
            (h.u.head = null),
            this.size--,
            !0)
          : !1;
      };
      c.prototype.clear = function () {
        this[0] = {};
        this[1] = this[1].H = f();
        this.size = 0;
      };
      c.prototype.has = function (h) {
        return !!d(this, h).u;
      };
      c.prototype.get = function (h) {
        return (h = d(this, h).u) && h.value;
      };
      c.prototype.entries = function () {
        return e(this, function (h) {
          return [h.key, h.value];
        });
      };
      c.prototype.keys = function () {
        return e(this, function (h) {
          return h.key;
        });
      };
      c.prototype.values = function () {
        return e(this, function (h) {
          return h.value;
        });
      };
      c.prototype.forEach = function (h, l) {
        for (var k = v(this, 'entries').call(this), p; !(p = k.next()).done; )
          (p = p.value), h.call(l, p[1], p[0], this);
      };
      c.prototype[v(u.Symbol, 'iterator')] = v(c.prototype, 'entries');
      var d = function (h, l) {
          var k = l && typeof l;
          k == 'object' || k == 'function'
            ? b.has(l)
              ? (k = b.get(l))
              : ((k = '' + ++g), b.set(l, k))
            : (k = 'p_' + l);
          var p = h[0][k];
          if (p && ra(h[0], k))
            for (h = 0; h < p.length; h++) {
              var m = p[h];
              if ((l !== l && m.key !== m.key) || l === m.key)
                return { id: k, list: p, index: h, u: m };
            }
          return { id: k, list: p, index: -1, u: void 0 };
        },
        e = function (h, l) {
          var k = h[1];
          return ha(function () {
            if (k) {
              for (; k.head != h[1]; ) k = k.H;
              for (; k.next != k.head; )
                return (k = k.next), { done: !1, value: l(k) };
              k = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        f = function () {
          var h = {};
          return (h.H = h.next = h.head = h);
        },
        g = 0;
      return c;
    },
    'es6',
  );
  w(
    'Set',
    function (a) {
      if (
        (function () {
          if (
            !a ||
            typeof a != 'function' ||
            !v(a.prototype, 'entries') ||
            typeof Object.seal != 'function'
          )
            return !1;
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(z([c]));
            if (
              !d.has(c) ||
              d.size != 1 ||
              d.add(c) != d ||
              d.size != 1 ||
              d.add({ x: 4 }) != d ||
              d.size != 2
            )
              return !1;
            var e = v(d, 'entries').call(d),
              f = e.next();
            if (f.done || f.value[0] != c || f.value[1] != c) return !1;
            f = e.next();
            return f.done ||
              f.value[0] == c ||
              f.value[0].x != 4 ||
              f.value[1] != f.value[0]
              ? !1
              : e.next().done;
          } catch (g) {
            return !1;
          }
        })()
      )
        return a;
      var b = function (c) {
        this.g = new u.Map();
        if (c) {
          c = z(c);
          for (var d; !(d = c.next()).done; ) this.add(d.value);
        }
        this.size = this.g.size;
      };
      b.prototype.add = function (c) {
        c = c === 0 ? 0 : c;
        this.g.set(c, c);
        this.size = this.g.size;
        return this;
      };
      b.prototype.delete = function (c) {
        c = this.g.delete(c);
        this.size = this.g.size;
        return c;
      };
      b.prototype.clear = function () {
        this.g.clear();
        this.size = 0;
      };
      b.prototype.has = function (c) {
        return this.g.has(c);
      };
      b.prototype.entries = function () {
        return v(this.g, 'entries').call(this.g);
      };
      b.prototype.values = function () {
        return v(this.g, 'values').call(this.g);
      };
      b.prototype.keys = v(b.prototype, 'values');
      b.prototype[v(u.Symbol, 'iterator')] = v(b.prototype, 'values');
      b.prototype.forEach = function (c, d) {
        var e = this;
        this.g.forEach(function (f) {
          return c.call(d, f, f, e);
        });
      };
      return b;
    },
    'es6',
  );
  w(
    'Object.values',
    function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) ra(b, d) && c.push(b[d]);
            return c;
          };
    },
    'es8',
  );
  w(
    'Object.is',
    function (a) {
      return a
        ? a
        : function (b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
          };
    },
    'es6',
  );
  w(
    'Array.prototype.includes',
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
              var f = d[c];
              if (f === b || v(Object, 'is').call(Object, f, b)) return !0;
            }
            return !1;
          };
    },
    'es7',
  );
  var va = function (a, b, c) {
    if (a == null)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          c +
          ' must not be null or undefined',
      );
    if (b instanceof RegExp)
      throw new TypeError(
        'First argument to String.prototype.' +
          c +
          ' must not be a regular expression',
      );
    return a + '';
  };
  w(
    'String.prototype.includes',
    function (a) {
      return a
        ? a
        : function (b, c) {
            return va(this, b, 'includes').indexOf(b, c || 0) !== -1;
          };
    },
    'es6',
  );
  w(
    'Array.from',
    function (a) {
      return a
        ? a
        : function (b, c, d) {
            c =
              c != null
                ? c
                : function (h) {
                    return h;
                  };
            var e = [],
              f =
                typeof u.Symbol != 'undefined' &&
                v(u.Symbol, 'iterator') &&
                b[v(u.Symbol, 'iterator')];
            if (typeof f == 'function') {
              b = f.call(b);
              for (var g = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, g++));
            } else
              for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e;
          };
    },
    'es6',
  );
  w(
    'Object.entries',
    function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) ra(b, d) && c.push([d, b[d]]);
            return c;
          };
    },
    'es8',
  );
  w(
    'Number.isFinite',
    function (a) {
      return a
        ? a
        : function (b) {
            return typeof b !== 'number'
              ? !1
              : !isNaN(b) && b !== Infinity && b !== -Infinity;
          };
    },
    'es6',
  );
  w(
    'Number.MAX_SAFE_INTEGER',
    function () {
      return 9007199254740991;
    },
    'es6',
  );
  w(
    'Number.MIN_SAFE_INTEGER',
    function () {
      return -9007199254740991;
    },
    'es6',
  );
  w(
    'Number.isInteger',
    function (a) {
      return a
        ? a
        : function (b) {
            return v(Number, 'isFinite').call(Number, b)
              ? b === Math.floor(b)
              : !1;
          };
    },
    'es6',
  );
  w(
    'Number.isSafeInteger',
    function (a) {
      return a
        ? a
        : function (b) {
            return (
              v(Number, 'isInteger').call(Number, b) &&
              Math.abs(b) <= v(Number, 'MAX_SAFE_INTEGER')
            );
          };
    },
    'es6',
  );
  w(
    'String.prototype.startsWith',
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = va(this, b, 'startsWith'),
              e = d.length,
              f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
            return g >= f;
          };
    },
    'es6',
  );
  var wa = function (a, b) {
    a instanceof String && (a += '');
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[v(u.Symbol, 'iterator')] = function () {
      return e;
    };
    return e;
  };
  w(
    'Array.prototype.entries',
    function (a) {
      return a
        ? a
        : function () {
            return wa(this, function (b, c) {
              return [b, c];
            });
          };
    },
    'es6',
  );
  w(
    'Math.trunc',
    function (a) {
      return a
        ? a
        : function (b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0)
              return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c;
          };
    },
    'es6',
  );
  w(
    'Array.prototype.keys',
    function (a) {
      return a
        ? a
        : function () {
            return wa(this, function (b) {
              return b;
            });
          };
    },
    'es6',
  );
  w(
    'Array.prototype.values',
    function (a) {
      return a
        ? a
        : function () {
            return wa(this, function (b, c) {
              return c;
            });
          };
    },
    'es8',
  );
  w(
    'String.prototype.repeat',
    function (a) {
      return a
        ? a
        : function (b) {
            var c = va(this, null, 'repeat');
            if (b < 0 || b > 1342177279)
              throw new RangeError('Invalid count value');
            b |= 0;
            for (var d = ''; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
            return d;
          };
    },
    'es6',
  );
  w(
    'String.prototype.padStart',
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = va(this, null, 'padStart');
            b -= d.length;
            c = c !== void 0 ? String(c) : ' ';
            return (
              (b > 0 && c
                ? v(c, 'repeat')
                    .call(c, Math.ceil(b / c.length))
                    .substring(0, b)
                : '') + d
            );
          };
    },
    'es8',
  ); /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  var B = this || self,
    xa = function (a) {
      a = a.split('.');
      for (var b = B, c = 0; c < a.length; c++)
        if (((b = b[a[c]]), b == null)) return null;
      return b;
    },
    ya = function (a) {
      var b = typeof a;
      return b != 'object' ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null';
    },
    za = function (a, b, c) {
      a = a.split('.');
      c = c || B;
      for (var d; a.length && (d = a.shift()); )
        a.length || b === void 0
          ? c[d] && c[d] !== Object.prototype[d]
            ? (c = c[d])
            : (c = c[d] = {})
          : (c[d] = b);
    };
  function Aa(a) {
    B.setTimeout(function () {
      throw a;
    }, 0);
  }
  var Ba = function (a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  };
  function Ca(a, b) {
    var c = 0;
    a = Ba(String(a)).split('.');
    b = Ba(String(b)).split('.');
    for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
      var f = a[e] || '',
        g = b[e] || '';
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
        g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
        if (f[0].length == 0 && g[0].length == 0) break;
        c =
          Da(
            f[1].length == 0 ? 0 : parseInt(f[1], 10),
            g[1].length == 0 ? 0 : parseInt(g[1], 10),
          ) ||
          Da(f[2].length == 0, g[2].length == 0) ||
          Da(f[2], g[2]);
        f = f[3];
        g = g[3];
      } while (c == 0);
    }
    return c;
  }
  function Da(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var Ea,
    Fa = xa('CLOSURE_FLAGS'),
    Ga = Fa && Fa[610401301];
  Ea = Ga != null ? Ga : !1;
  var Ha,
    Ia = B.navigator;
  Ha = Ia ? Ia.userAgentData || null : null;
  function Ja(a) {
    if (!Ea || !Ha) return !1;
    for (var b = 0; b < Ha.brands.length; b++) {
      var c = Ha.brands[b].brand;
      if (c && c.indexOf(a) != -1) return !0;
    }
    return !1;
  }
  function C(a) {
    var b;
    a: {
      if ((b = B.navigator)) if ((b = b.userAgent)) break a;
      b = '';
    }
    return b.indexOf(a) != -1;
  }
  function Ka() {
    return Ea ? !!Ha && Ha.brands.length > 0 : !1;
  }
  function La() {
    return Ka() ? !1 : C('Opera');
  }
  function Ma() {
    return C('Firefox') || C('FxiOS');
  }
  function Na() {
    return (
      C('Safari') &&
      !(
        Oa() ||
        (Ka() ? 0 : C('Coast')) ||
        La() ||
        (Ka() ? 0 : C('Edge')) ||
        (Ka() ? Ja('Microsoft Edge') : C('Edg/')) ||
        (Ka() ? Ja('Opera') : C('OPR')) ||
        Ma() ||
        C('Silk') ||
        C('Android')
      )
    );
  }
  function Oa() {
    return Ka()
      ? Ja('Chromium')
      : ((C('Chrome') || C('CriOS')) && !(Ka() ? 0 : C('Edge'))) || C('Silk');
  }
  var Pa = function (a, b) {
    return Array.prototype.map.call(a, b, void 0);
  };
  function Qa(a, b) {
    a: {
      for (
        var c = typeof a === 'string' ? a.split('') : a, d = a.length - 1;
        d >= 0;
        d--
      )
        if (d in c && b.call(void 0, c[d], d, a)) {
          b = d;
          break a;
        }
      b = -1;
    }
    return b < 0 ? null : typeof a === 'string' ? a.charAt(b) : a[b];
  }
  var Ra = function (a) {
    Ra[' '](a);
    return a;
  };
  Ra[' '] = function () {};
  var Sa = null,
    Ua = function (a) {
      var b = [];
      Ta(a, function (c) {
        b.push(c);
      });
      return b;
    },
    Ta = function (a, b) {
      function c(l) {
        for (; d < a.length; ) {
          var k = a.charAt(d++),
            p = Sa[k];
          if (p != null) return p;
          if (!/^[\s\xa0]*$/.test(k))
            throw Error('Unknown base64 encoding at char: ' + k);
        }
        return l;
      }
      Va();
      for (var d = 0; ; ) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64);
        if (h === 64 && e === -1) break;
        b((e << 2) | (f >> 4));
        g != 64 &&
          (b(((f << 4) & 240) | (g >> 2)), h != 64 && b(((g << 6) & 192) | h));
      }
    },
    Va = function () {
      if (!Sa) {
        Sa = {};
        for (
          var a =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                '',
              ),
            b = ['+/=', '+/', '-_=', '-_.', '-_'],
            c = 0;
          c < 5;
          c++
        )
          for (var d = a.concat(b[c].split('')), e = 0; e < d.length; e++) {
            var f = d[e];
            Sa[f] === void 0 && (Sa[f] = e);
          }
      }
    };
  function Wa(a, b) {
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  }
  var Xa = void 0,
    Ya;
  function Za(a) {
    if (Ya) throw Error('');
    Ya = function (b) {
      B.setTimeout(function () {
        a(b);
      }, 0);
    };
  }
  function $a(a) {
    if (Ya)
      try {
        Ya(a);
      } catch (b) {
        throw ((b.cause = a), b);
      }
  }
  function ab(a) {
    a = Error(a);
    Wa(a, 'warning');
    $a(a);
    return a;
  }
  function bb(a, b) {
    if (a != null) {
      var c;
      var d = (c = Xa) != null ? c : (Xa = {});
      c = d[a] || 0;
      c >= b ||
        ((d[a] = c + 1), (a = Error()), Wa(a, 'incident'), Ya ? $a(a) : Aa(a));
    }
  }
  var cb =
    typeof u.Symbol === 'function' && typeof (0, u.Symbol)() === 'symbol';
  function db(a, b, c) {
    return typeof u.Symbol === 'function' && typeof (0, u.Symbol)() === 'symbol'
      ? (c === void 0 ? 0 : c) && u.Symbol.for && a
        ? u.Symbol.for(a)
        : a != null
          ? (0, u.Symbol)(a)
          : (0, u.Symbol)()
      : b;
  }
  var eb = db('jas', void 0, !0),
    fb = db(void 0, '0di'),
    gb = db(void 0, '1oa'),
    hb = db(void 0, '0actk'),
    ib = db('m_m', 'Jb', !0),
    jb = db(void 0, 'mrtk');
  var D = cb ? eb : 'eb',
    kb = { eb: { value: 0, configurable: !0, writable: !0, enumerable: !1 } },
    lb = Object.defineProperties;
  function mb(a, b) {
    cb || D in a || lb(a, kb);
    a[D] |= b;
  }
  function E(a, b) {
    cb || D in a || lb(a, kb);
    a[D] = b;
  }
  function nb(a) {
    if (4 & a) return 2048 & a ? 2048 : 4096 & a ? 4096 : 0;
  }
  function ob(a) {
    mb(a, 32);
    return a;
  }
  var pb = typeof ib === 'symbol',
    qb = {};
  function rb(a) {
    a = a[ib];
    var b = a === qb;
    pb && a && !b && bb(jb, 3);
    return b;
  }
  function sb(a) {
    return (
      a !== null &&
      typeof a === 'object' &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  var ub,
    vb = [];
  E(vb, 55);
  ub = Object.freeze(vb);
  function wb(a) {
    if (a & 2) throw Error();
  }
  function xb(a, b) {
    if (typeof b !== 'number' || b < 0 || b >= a.length) throw Error();
  }
  var yb = Object.freeze({});
  function zb() {
    return typeof BigInt === 'function';
  }
  function Ab(a) {
    var b = Bb;
    if (!a) throw Error((typeof b === 'function' ? b() : b) || String(a));
  }
  function Cb(a) {
    a.Ib = !0;
    return a;
  }
  var Bb = void 0;
  var Db = Cb(function (a) {
      return typeof a === 'number';
    }),
    Eb = Cb(function (a) {
      return typeof a === 'string';
    }),
    Fb = Cb(function (a) {
      return typeof a === 'boolean';
    });
  var Gb = typeof B.BigInt === 'function' && typeof B.BigInt(0) === 'bigint';
  function Hb(a) {
    var b = a;
    if (Eb(b)) {
      if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
    } else if (Db(b) && !v(Number, 'isSafeInteger').call(Number, b))
      throw Error(String(b));
    return Gb
      ? BigInt(a)
      : (a = Fb(a) ? (a ? '1' : '0') : Eb(a) ? a.trim() || '0' : String(a));
  }
  var Nb = Cb(function (a) {
      return Gb ? a >= Ib && a <= Jb : a[0] === '-' ? Kb(a, Lb) : Kb(a, Mb);
    }),
    Lb = v(Number, 'MIN_SAFE_INTEGER').toString(),
    Ib = Gb ? BigInt(v(Number, 'MIN_SAFE_INTEGER')) : void 0,
    Mb = v(Number, 'MAX_SAFE_INTEGER').toString(),
    Jb = Gb ? BigInt(v(Number, 'MAX_SAFE_INTEGER')) : void 0;
  function Kb(a, b) {
    if (a.length > b.length) return !1;
    if (a.length < b.length || a === b) return !0;
    for (var c = 0; c < a.length; c++) {
      var d = a[c],
        e = b[c];
      if (d > e) return !1;
      if (d < e) return !0;
    }
  }
  var F = 0,
    G = 0;
  function Ob(a) {
    var b = a >>> 0;
    F = b;
    G = ((a - b) / 4294967296) >>> 0;
  }
  function Pb(a) {
    if (a < 0) {
      Ob(-a);
      var b = z(Qb(F, G));
      a = b.next().value;
      b = b.next().value;
      F = a >>> 0;
      G = b >>> 0;
    } else Ob(a);
  }
  function Rb(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (b <= 2097151) var c = '' + (4294967296 * b + a);
    else
      zb()
        ? (c = '' + ((BigInt(b) << BigInt(32)) | BigInt(a)))
        : ((c = ((a >>> 24) | (b << 8)) & 16777215),
          (b = (b >> 16) & 65535),
          (a = (a & 16777215) + c * 6777216 + b * 6710656),
          (c += b * 8147497),
          (b *= 2),
          a >= 1e7 && ((c += (a / 1e7) >>> 0), (a %= 1e7)),
          c >= 1e7 && ((b += (c / 1e7) >>> 0), (c %= 1e7)),
          (c = b + Sb(c) + Sb(a)));
    return c;
  }
  function Sb(a) {
    a = String(a);
    return '0000000'.slice(a.length) + a;
  }
  function Tb() {
    var a = F,
      b = G;
    b & 2147483648
      ? zb()
        ? (a = '' + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
        : ((b = z(Qb(a, b))),
          (a = b.next().value),
          (b = b.next().value),
          (a = '-' + Rb(a, b)))
      : (a = Rb(a, b));
    return a;
  }
  function Qb(a, b) {
    b = ~b;
    a ? (a = ~a + 1) : (b += 1);
    return [a, b];
  }
  function Ub(a) {
    return Array.prototype.slice.call(a);
  }
  function Vb(a, b) {
    throw Error(b === void 0 ? 'unexpected value ' + a + '!' : b);
  }
  var Wb = typeof BigInt === 'function' ? BigInt.asIntN : void 0,
    Xb = v(Number, 'isSafeInteger'),
    Yb = v(Number, 'isFinite'),
    Zb = v(Math, 'trunc');
  function $b(a) {
    if (a == null || typeof a === 'number') return a;
    if (a === 'NaN' || a === 'Infinity' || a === '-Infinity') return Number(a);
  }
  function ac(a) {
    if (typeof a !== 'boolean')
      throw Error('Expected boolean but got ' + ya(a) + ': ' + a);
    return a;
  }
  var bc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function cc(a) {
    switch (typeof a) {
      case 'bigint':
        return !0;
      case 'number':
        return Yb(a);
      case 'string':
        return bc.test(a);
      default:
        return !1;
    }
  }
  function H(a) {
    if (a != null) {
      if (!Yb(a)) throw ab('enum');
      a |= 0;
    }
    return a;
  }
  function dc(a) {
    return a == null ? a : Yb(a) ? a | 0 : void 0;
  }
  function ec(a) {
    if (typeof a !== 'number') throw ab('int32');
    if (!Yb(a)) throw ab('int32');
    return a | 0;
  }
  function fc(a) {
    return a == null ? a : ec(a);
  }
  function gc(a) {
    if (a == null) return a;
    if (typeof a === 'string' && a) a = +a;
    else if (typeof a !== 'number') return;
    return Yb(a) ? a | 0 : void 0;
  }
  function hc(a) {
    if (a == null) return a;
    if (typeof a === 'string' && a) a = +a;
    else if (typeof a !== 'number') return;
    return Yb(a) ? a >>> 0 : void 0;
  }
  function ic(a) {
    var b = 0;
    b = b === void 0 ? 0 : b;
    if (!cc(a)) throw ab('int64');
    var c = typeof a;
    switch (b) {
      case 2048:
        switch (c) {
          case 'string':
            return jc(a);
          case 'bigint':
            return String(Wb(64, a));
          default:
            return kc(a);
        }
      case 4096:
        switch (c) {
          case 'string':
            return lc(a);
          case 'bigint':
            return Hb(Wb(64, a));
          default:
            return mc(a);
        }
      case 0:
        switch (c) {
          case 'string':
            return jc(a);
          case 'bigint':
            return Hb(Wb(64, a));
          default:
            return nc(a);
        }
      default:
        return Vb(b, 'Unknown format requested type for int64');
    }
  }
  function oc(a) {
    return a == null ? a : ic(a);
  }
  function pc(a) {
    var b = a.length;
    return a[0] === '-'
      ? b < 20
        ? !0
        : b === 20 && Number(a.substring(0, 7)) > -922337
      : b < 19
        ? !0
        : b === 19 && Number(a.substring(0, 6)) < 922337;
  }
  function qc(a) {
    if (pc(a)) return a;
    if (a.length < 16) Pb(Number(a));
    else if (zb())
      (a = BigInt(a)),
        (F = Number(a & BigInt(4294967295)) >>> 0),
        (G = Number((a >> BigInt(32)) & BigInt(4294967295)));
    else {
      var b = +(a[0] === '-');
      G = F = 0;
      for (
        var c = a.length, d = b, e = ((c - b) % 6) + b;
        e <= c;
        d = e, e += 6
      )
        (d = Number(a.slice(d, e))),
          (G *= 1e6),
          (F = F * 1e6 + d),
          F >= 4294967296 &&
            ((G += v(Math, 'trunc').call(Math, F / 4294967296)),
            (G >>>= 0),
            (F >>>= 0));
      b &&
        ((b = z(Qb(F, G))),
        (a = b.next().value),
        (b = b.next().value),
        (F = a),
        (G = b));
    }
    return Tb();
  }
  function nc(a) {
    a = Zb(a);
    if (!Xb(a)) {
      Pb(a);
      var b = F,
        c = G;
      if ((a = c & 2147483648))
        (b = (~b + 1) >>> 0), (c = ~c >>> 0), b == 0 && (c = (c + 1) >>> 0);
      var d = c * 4294967296 + (b >>> 0);
      b = v(Number, 'isSafeInteger').call(Number, d) ? d : Rb(b, c);
      a = typeof b === 'number' ? (a ? -b : b) : a ? '-' + b : b;
    }
    return a;
  }
  function kc(a) {
    a = Zb(a);
    if (Xb(a)) a = String(a);
    else {
      var b = String(a);
      pc(b) ? (a = b) : (Pb(a), (a = Tb()));
    }
    return a;
  }
  function jc(a) {
    var b = Zb(Number(a));
    if (Xb(b)) return String(b);
    b = a.indexOf('.');
    b !== -1 && (a = a.substring(0, b));
    return qc(a);
  }
  function lc(a) {
    var b = Zb(Number(a));
    if (Xb(b)) return Hb(b);
    b = a.indexOf('.');
    b !== -1 && (a = a.substring(0, b));
    return zb() ? Hb(Wb(64, BigInt(a))) : Hb(qc(a));
  }
  function mc(a) {
    return Xb(a) ? Hb(nc(a)) : Hb(kc(a));
  }
  function rc(a) {
    if (typeof a !== 'string') throw Error();
    return a;
  }
  function sc(a) {
    if (a != null && typeof a !== 'string') throw Error();
    return a;
  }
  function I(a) {
    return a == null || typeof a === 'string' ? a : void 0;
  }
  function tc(a, b, c, d) {
    if (a != null && typeof a === 'object' && rb(a)) return a;
    if (!Array.isArray(a))
      return (
        c
          ? d & 2
            ? ((a = b[fb]) || ((a = new b()), mb(a.i, 34), (a = b[fb] = a)),
              (b = a))
            : (b = new b())
          : (b = void 0),
        b
      );
    var e = (c = a[D] | 0);
    e === 0 && (e |= d & 32);
    e |= d & 2;
    e !== c && E(a, e);
    return new b(a);
  }
  function uc(a) {
    return a;
  }
  function vc(a, b, c, d, e) {
    d = d ? !!(b & 32) : void 0;
    var f = [],
      g = a.length,
      h = !1;
    if (b & 64) {
      if (b & 256) {
        g--;
        var l = a[g];
        var k = g;
      } else (k = 4294967295), (l = void 0);
      if (!(e || b & 512)) {
        h = !0;
        var p;
        var m = ((p = wc) != null ? p : uc)(
          l ? k - -1 : (b >> 15) & 1023 || 536870912,
          -1,
          a,
          l,
        );
        k = m + -1;
      }
    } else
      (k = 4294967295),
        b & 1 ||
          ((l = g && a[g - 1]), sb(l) ? (g--, (k = g), (m = 0)) : (l = void 0));
    p = void 0;
    for (var n = 0; n < g; n++) {
      var r = a[n];
      if (r != null && (r = c(r, d)) != null)
        if (n >= k) {
          var t = void 0;
          ((t = p) != null ? t : (p = {}))[n - -1] = r;
        } else f[n] = r;
    }
    if (l)
      for (var y in l)
        Object.prototype.hasOwnProperty.call(l, y) &&
          ((a = l[y]),
          a != null &&
            (a = c(a, d)) != null &&
            ((g = +y),
            g < m
              ? (f[g + -1] = a)
              : ((g = void 0), (((g = p) != null ? g : (p = {}))[y] = a))));
    p && (h ? f.push(p) : (f[k] = p));
    e && E(f, (b & 33522241) | (p != null ? 290 : 34));
    return f;
  }
  function xc(a) {
    switch (typeof a) {
      case 'number':
        return v(Number, 'isFinite').call(Number, a) ? a : '' + a;
      case 'bigint':
        return Nb(a) ? Number(a) : '' + a;
      case 'boolean':
        return a ? 1 : 0;
      case 'object':
        if (Array.isArray(a)) {
          var b = a[D] | 0;
          return a.length === 0 && b & 1 ? void 0 : vc(a, b, xc, !1, !1);
        }
        if (rb(a)) return J(a);
        return;
    }
    return a;
  }
  var yc =
      typeof structuredClone != 'undefined'
        ? structuredClone
        : function (a) {
            return vc(a, 0, xc, void 0, !1);
          },
    wc;
  function J(a) {
    a = a.i;
    return vc(a, a[D] | 0, xc, void 0, !1);
  }
  function K(a, b, c) {
    if (a == null) {
      var d = 96;
      c ? ((a = [c]), (d |= 512)) : (a = []);
      b && (d = (d & -33521665) | ((b & 1023) << 15));
    } else {
      if (!Array.isArray(a)) throw Error('narr');
      d = a[D] | 0;
      8192 & d || !(64 & d) || 2 & d || zc();
      if (d & 1024) throw Error('farr');
      if (d & 64) return d & 16384 || E(a, d | 16384), a;
      d |= 64;
      if (c && ((d |= 512), c !== a[0])) throw Error('mid');
      a: {
        c = a;
        var e = c.length;
        if (e) {
          var f = e - 1,
            g = c[f];
          if (sb(g)) {
            d |= 256;
            b = d & 512 ? 0 : -1;
            f -= b;
            if (f >= 1024) throw Error('pvtlmt');
            for (var h in g)
              Object.prototype.hasOwnProperty.call(g, h) &&
                ((e = +h), e < f && ((c[e + b] = g[h]), delete g[h]));
            d = (d & -33521665) | ((f & 1023) << 15);
            break a;
          }
        }
        if (b) {
          h = Math.max(b, e - (d & 512 ? 0 : -1));
          if (h > 1024) throw Error('spvt');
          d = (d & -33521665) | ((h & 1023) << 15);
        }
      }
    }
    E(a, d | 16384);
    return a;
  }
  function zc() {
    bb(hb, 5);
  }
  function Ac(a, b) {
    if (typeof a !== 'object') return a;
    if (Array.isArray(a)) {
      var c = a[D] | 0;
      if (a.length === 0 && c & 1) return;
      if (c & 2) return a;
      var d;
      if ((d = b)) d = c === 0 || (!!(c & 32) && !(c & 64 || !(c & 16)));
      return d
        ? (mb(a, 34), c & 4 && Object.freeze(a), a)
        : vc(a, c, Ac, b !== void 0, !0);
    }
    if (rb(a))
      return (b = a.i), (c = b[D] | 0), c & 2 ? a : vc(b, c, Ac, !0, !0);
  }
  function Bc(a) {
    var b = a.i;
    if (!((b[D] | 0) & 2)) return a;
    a = new a.constructor(vc(b, b[D] | 0, Ac, !0, !0));
    b = a.i;
    b[D] &= -3;
    return a;
  }
  function Cc(a) {
    var b = a.i,
      c = b[D] | 0;
    return c & 2 ? a : new a.constructor(vc(b, c, Ac, !0, !0));
  }
  var Dc = Hb(0),
    L = function (a, b) {
      a = a.i;
      return Ec(a, a[D] | 0, b);
    },
    Ec = function (a, b, c, d) {
      if (c === -1) return null;
      var e = c + (b & 512 ? 0 : -1),
        f = a.length - 1;
      if (e >= f && b & 256) {
        b = a[f][c];
        var g = !0;
      } else if (e <= f) b = a[e];
      else return;
      if (d && b != null) {
        d = d(b);
        if (d == null) return d;
        if (d !== b) return g ? (a[f][c] = d) : (a[e] = d), d;
      }
      return b;
    },
    N = function (a, b, c) {
      var d = a.i,
        e = d[D] | 0;
      wb(e);
      M(d, e, b, c);
      return a;
    };
  function M(a, b, c, d) {
    var e = b & 512 ? 0 : -1,
      f = c + e,
      g = a.length - 1;
    if (f >= g && b & 256) return (a[g][c] = d), b;
    if (f <= g) return (a[f] = d), b;
    d !== void 0 &&
      ((g = (b >> 15) & 1023 || 536870912),
      c >= g
        ? d != null &&
          ((f = {}), (a[g + e] = ((f[c] = d), f)), (b |= 256), E(a, b))
        : (a[f] = d));
    return b;
  }
  var O = function (a) {
    return a === yb ? 2 : 4;
  };
  function Fc(a, b, c, d, e) {
    var f = a.i;
    a = f[D] | 0;
    var g = 2 & a ? 1 : d;
    e = !!e;
    d = Gc(f, a, b);
    var h = d[D] | 0;
    if (!(4 & h)) {
      4 & h && ((d = Ub(d)), (h = Hc(h, a)), (a = M(f, a, b, d)));
      for (var l = 0, k = 0; l < d.length; l++) {
        var p = c(d[l]);
        p != null && (d[k++] = p);
      }
      k < l && (d.length = k);
      h = Ic(h, a);
      c = (h | 20) & -2049;
      h = c &= -4097;
      E(d, h);
      2 & h && Object.freeze(d);
    }
    g === 1 || (g === 4 && 32 & h)
      ? Jc(h) || ((e = h), (h |= 2), h !== e && E(d, h), Object.freeze(d))
      : (g === 2 &&
          Jc(h) &&
          ((d = Ub(d)),
          (h = Hc(h, a)),
          (h = Kc(h, a, e)),
          E(d, h),
          (a = M(f, a, b, d))),
        Jc(h) || ((b = h), (h = Kc(h, a, e)), h !== b && E(d, h)));
    return d;
  }
  function Gc(a, b, c) {
    a = Ec(a, b, c);
    return Array.isArray(a) ? a : ub;
  }
  function Ic(a, b) {
    a === 0 && (a = Hc(a, b));
    return a | 1;
  }
  function Jc(a) {
    return (!!(2 & a) && !!(4 & a)) || !!(1024 & a);
  }
  function Lc(a, b, c, d) {
    var e = a.i,
      f = e[D] | 0;
    wb(f);
    if (c == null) return M(e, f, b), a;
    var g = c[D] | 0,
      h = g,
      l = Jc(g),
      k = l || Object.isFrozen(c);
    l || (g = 0);
    k || ((c = Ub(c)), (h = 0), (g = Hc(g, f)), (g = Kc(g, f, !0)), (k = !1));
    g |= 21;
    var p;
    l = (p = nb(g)) != null ? p : 0;
    for (p = 0; p < c.length; p++) {
      var m = c[p],
        n = d(m, l);
      v(Object, 'is').call(Object, m, n) ||
        (k &&
          ((c = Ub(c)), (h = 0), (g = Hc(g, f)), (g = Kc(g, f, !0)), (k = !1)),
        (c[p] = n));
    }
    g !== h &&
      (k && ((c = Ub(c)), (g = Hc(g, f)), (g = Kc(g, f, !0))), E(c, g));
    M(e, f, b, c);
    return a;
  }
  function P(a, b, c, d) {
    var e = a.i,
      f = e[D] | 0;
    wb(f);
    M(e, f, b, (d === '0' ? Number(c) === 0 : c === d) ? void 0 : c);
    return a;
  }
  var Q = function (a, b, c, d) {
      var e = a.i,
        f = e[D] | 0;
      wb(f);
      if (d == null) {
        var g = Mc(e);
        if (Nc(g, e, f, c) === b) g.set(c, 0);
        else return a;
      } else f = Oc(e, f, c, b);
      M(e, f, b, d);
      return a;
    },
    Qc = function (a, b, c) {
      return Pc(a, b) === c ? c : -1;
    },
    Pc = function (a, b) {
      a = a.i;
      return Nc(Mc(a), a, a[D] | 0, b);
    };
  function Mc(a) {
    if (cb) {
      var b;
      return (b = a[gb]) != null ? b : (a[gb] = new u.Map());
    }
    if (gb in a) return a[gb];
    b = new u.Map();
    Object.defineProperty(a, gb, { value: b });
    return b;
  }
  function Oc(a, b, c, d) {
    var e = Mc(a),
      f = Nc(e, a, b, c);
    f !== d && (f && (b = M(a, b, f)), e.set(c, d));
    return b;
  }
  function Nc(a, b, c, d) {
    var e = a.get(d);
    if (e != null) return e;
    for (var f = (e = 0); f < d.length; f++) {
      var g = d[f];
      Ec(b, c, g) != null && (e !== 0 && (c = M(b, c, e)), (e = g));
    }
    a.set(d, e);
    return e;
  }
  var Rc = function (a, b, c) {
    a = a.i;
    var d = a[D] | 0;
    wb(d);
    var e = Ec(a, d, c);
    b = Bc(tc(e, b, !0, d));
    e !== b && M(a, d, c, b);
    return b;
  };
  function Sc(a, b, c) {
    a = a.i;
    var d = a[D] | 0,
      e = Ec(a, d, c);
    b = tc(e, b, !1, d);
    b !== e && b != null && M(a, d, c, b);
    return b;
  }
  var Tc = function (a, b, c) {
      (a = Sc(a, b, c)) ||
        (a = b[fb]) ||
        ((a = new b()), mb(a.i, 34), (a = b[fb] = a));
      return a;
    },
    R = function (a, b, c) {
      b = Sc(a, b, c);
      if (b == null) return b;
      a = a.i;
      var d = a[D] | 0;
      if (!(d & 2)) {
        var e = Bc(b);
        e !== b && ((b = e), M(a, d, c, b));
      }
      return b;
    };
  function Uc(a, b, c, d, e, f, g) {
    a = a.i;
    var h = !!(2 & b),
      l = h ? 1 : e;
    f = !!f;
    g && (g = !h);
    e = Gc(a, b, d);
    var k = e[D] | 0;
    h = !!(4 & k);
    if (!h) {
      k = Ic(k, b);
      var p = e,
        m = b,
        n = !!(2 & k);
      n && (m |= 2);
      for (var r = !n, t = !0, y = 0, A = 0; y < p.length; y++) {
        var sa = tc(p[y], c, !1, m);
        if (sa instanceof c) {
          if (!n) {
            var tb = !!((sa.i[D] | 0) & 2);
            r && (r = !tb);
            t && (t = tb);
          }
          p[A++] = sa;
        }
      }
      A < y && (p.length = A);
      k |= 4;
      k = t ? k | 16 : k & -17;
      k = r ? k | 8 : k & -9;
      E(p, k);
      n && Object.freeze(p);
    }
    if (g && !(8 & k || (!e.length && (l === 1 || (l === 4 && 32 & k))))) {
      Jc(k) && ((e = Ub(e)), (k = Hc(k, b)), (b = M(a, b, d, e)));
      c = e;
      g = k;
      for (p = 0; p < c.length; p++)
        (k = c[p]), (m = Bc(k)), k !== m && (c[p] = m);
      g |= 8;
      g = c.length ? g & -17 : g | 16;
      E(c, g);
      k = g;
    }
    l === 1 || (l === 4 && 32 & k)
      ? Jc(k) ||
        ((b = k),
        (k |= !e.length || (16 & k && (!h || 32 & k)) ? 2 : 1024),
        k !== b && E(e, k),
        Object.freeze(e))
      : (l === 2 &&
          Jc(k) &&
          ((e = Ub(e)),
          (k = Hc(k, b)),
          (k = Kc(k, b, f)),
          E(e, k),
          (b = M(a, b, d, e))),
        Jc(k) || ((d = k), (k = Kc(k, b, f)), k !== d && E(e, k)));
    return e;
  }
  var S = function (a, b, c, d) {
      var e = a.i[D] | 0;
      return Uc(a, e, b, c, d, !1, !(2 & e));
    },
    Vc = function (a, b, c) {
      c == null && (c = void 0);
      return N(a, b, c);
    },
    Wc = function (a, b, c, d) {
      d == null && (d = void 0);
      return Q(a, b, c, d);
    },
    Xc = function (a, b, c) {
      var d = a.i,
        e = d[D] | 0;
      wb(e);
      if (c == null) return M(d, e, b), a;
      for (
        var f = c[D] | 0,
          g = f,
          h = Jc(f),
          l = h || Object.isFrozen(c),
          k = !0,
          p = !0,
          m = 0;
        m < c.length;
        m++
      ) {
        var n = c[m];
        h || ((n = !!((n.i[D] | 0) & 2)), k && (k = !n), p && (p = n));
      }
      h || ((f = k ? 13 : 5), (f = p ? f | 16 : f & -17));
      (l && f === g) ||
        ((c = Ub(c)), (g = 0), (f = Hc(f, e)), (f = Kc(f, e, !0)));
      f !== g && E(c, f);
      M(d, e, b, c);
      return a;
    };
  function Hc(a, b) {
    a = (2 & b ? a | 2 : a & -3) | 32;
    return (a &= -1025);
  }
  function Kc(a, b, c) {
    (32 & b && c) || (a &= -33);
    return a;
  }
  function Yc(a, b) {
    wb(a.i[D] | 0);
    a = Fc(a, 4, I, 2, !0);
    var c,
      d = (c = nb(a[D] | 0)) != null ? c : 0;
    if (Array.isArray(b)) {
      c = b.length;
      for (var e = 0; e < c; e++) a.push(rc(b[e], d));
    } else
      for (b = z(b), c = b.next(); !c.done; c = b.next())
        a.push(rc(c.value, d));
  }
  var Zc = function (a, b) {
      var c = c === void 0 ? !1 : c;
      a = L(a, b);
      a =
        a == null || typeof a === 'boolean'
          ? a
          : typeof a === 'number'
            ? !!a
            : void 0;
      return a != null ? a : c;
    },
    $c = function (a, b) {
      var c = c === void 0 ? 0 : c;
      var d;
      return (d = gc(L(a, b))) != null ? d : c;
    },
    ad = function (a, b) {
      var c = c === void 0 ? 0 : c;
      var d;
      return (d = hc(L(a, b))) != null ? d : c;
    },
    bd = function (a, b) {
      var c = c === void 0 ? Dc : c;
      a = L(a, b);
      b = typeof a;
      a =
        a == null
          ? a
          : b === 'bigint'
            ? Hb(Wb(64, a))
            : cc(a)
              ? b === 'string'
                ? lc(a)
                : mc(a)
              : void 0;
      return a != null ? a : c;
    },
    cd = function (a, b) {
      var c = c === void 0 ? 0 : c;
      a = a.i;
      b = Ec(a, a[D] | 0, b, $b);
      return b != null ? b : c;
    },
    T = function (a, b) {
      var c = c === void 0 ? '' : c;
      var d;
      return (d = I(L(a, b))) != null ? d : c;
    },
    U = function (a, b) {
      var c = c === void 0 ? 0 : c;
      var d;
      return (d = dc(L(a, b))) != null ? d : c;
    },
    dd = function (a, b, c) {
      a = Fc(a, b, gc, 3, !0);
      xb(a, c);
      return a[c];
    },
    ed = function (a, b, c) {
      return U(a, Qc(a, c, b));
    },
    fd = function (a, b, c) {
      return P(a, b, oc(c), '0');
    },
    gd = function (a, b, c) {
      return P(a, b, sc(c), '');
    };
  var V = function (a, b, c) {
    this.i = K(a, b, c);
  };
  V.prototype.toJSON = function () {
    return J(this);
  };
  V.prototype[ib] = qb;
  function hd(a, b) {
    if (b == null) return new a();
    if (!Array.isArray(b)) throw Error('must be an array');
    if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
      throw Error('arrays passed to jspb constructors must be mutable');
    mb(b, 128);
    return new a(ob(b));
  }
  function id(a) {
    return function (b) {
      if (b == null || b == '') b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error('dnarr');
        b = new a(ob(b));
      }
      return b;
    };
  }
  var jd = function (a) {
    this.i = K(a);
  };
  x(jd, V);
  var kd = function (a) {
    this.i = K(a);
  };
  x(kd, V);
  var ld = function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  };
  var md = function () {
    return Ea && Ha
      ? !Ha.mobile && (C('iPad') || C('Android') || C('Silk'))
      : C('iPad') || (C('Android') && !C('Mobile')) || C('Silk');
  };
  function nd(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  } /* 
 
 Copyright Google LLC 
 SPDX-License-Identifier: Apache-2.0 
*/
  var od;
  function pd() {
    od === void 0 && (od = null);
    return od;
  }
  var qd = function (a) {
    this.g = a;
  };
  qd.prototype.toString = function () {
    return this.g + '';
  };
  function rd(a) {
    var b = pd();
    return new qd(b ? b.createScriptURL(a) : a);
  }
  function sd(a) {
    if (a instanceof qd) return a.g;
    throw Error('');
  }
  var td = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  var ud = function (a) {
    this.g = a;
  };
  ud.prototype.toString = function () {
    return this.g + '';
  };
  function vd(a) {
    a = a === void 0 ? document : a;
    var b, c;
    a =
      (c = (b = a).querySelector) == null ? void 0 : c.call(b, 'script[nonce]');
    return a == null ? '' : a.nonce || a.getAttribute('nonce') || '';
  }
  function wd(a, b) {
    a.src = sd(b);
    (b = vd(a.ownerDocument)) && a.setAttribute('nonce', b);
  }
  var xd =
    'alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource'.split(
      ' ',
    );
  function yd(a, b) {
    var c = a.write;
    if (b instanceof ud) b = b.g;
    else throw Error('');
    c.call(a, b);
  }
  var zd = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    ),
    Bd = function (a) {
      return a ? decodeURI(a) : a;
    },
    Cd = /#|$/,
    Dd = function (a, b) {
      var c = a.search(Cd);
      a: {
        var d = 0;
        for (var e = b.length; (d = a.indexOf(b, d)) >= 0 && d < c; ) {
          var f = a.charCodeAt(d - 1);
          if (f == 38 || f == 63)
            if (
              ((f = a.charCodeAt(d + e)), !f || f == 61 || f == 38 || f == 35)
            )
              break a;
          d += e + 1;
        }
        d = -1;
      }
      if (d < 0) return null;
      e = a.indexOf('&', d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, ' '),
      );
    };
  function Ed(a, b) {
    a = sd(a).toString();
    a = '<script src="' + Fd(a) + '"';
    if (b == null ? 0 : b.async) a += ' async';
    (b == null ? void 0 : b.attributionSrc) !== void 0 &&
      (a += ' attributionsrc="' + Fd(b.attributionSrc) + '"');
    if (b == null ? 0 : b.Va) a += ' custom-element="' + Fd(b.Va) + '"';
    if (b == null ? 0 : b.defer) a += ' defer';
    if (b == null ? 0 : b.id) a += ' id="' + Fd(b.id) + '"';
    if (b == null ? 0 : b.nonce) a += ' nonce="' + Fd(b.nonce) + '"';
    if (b == null ? 0 : b.type) a += ' type="' + Fd(b.type) + '"';
    if (b == null ? 0 : b.Fa) a += ' crossorigin="' + Fd(b.Fa) + '"';
    b = a + '>\x3c/script>';
    a = pd();
    return new ud(a ? a.createHTML(b) : b);
  }
  function Fd(a) {
    return a
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
  function Gd(a) {
    var b = ua.apply(1, arguments);
    if (b.length === 0) return rd(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++)
      c += encodeURIComponent(b[d]) + a[d + 1];
    return rd(c);
  }
  function Hd(a, b) {
    a = sd(a).toString();
    var c = a.split(/[?#]/),
      d = /[?]/.test(a) ? '?' + c[1] : '';
    return Id(c[0], d, /[#]/.test(a) ? '#' + (d ? c[2] : c[1]) : '', b);
  }
  function Id(a, b, c, d) {
    function e(g, h) {
      g != null &&
        (Array.isArray(g)
          ? g.forEach(function (l) {
              return e(l, h);
            })
          : ((b += f + encodeURIComponent(h) + '=' + encodeURIComponent(g)),
            (f = '&')));
    }
    var f = b.length ? '&' : '?';
    d.constructor === Object && (d = v(Object, 'entries').call(Object, d));
    Array.isArray(d)
      ? d.forEach(function (g) {
          return e(g[1], g[0]);
        })
      : d.forEach(e);
    return rd(a + b + c);
  }
  var Jd = function (a) {
      var b = b === void 0 ? !1 : b;
      var c = c === void 0 ? B : c;
      for (var d = 0; c && d++ < 40; ) {
        var e;
        if (!(e = b))
          try {
            var f;
            if ((f = !!c && c.location.href != null))
              b: {
                try {
                  Ra(c.foo);
                  f = !0;
                  break b;
                } catch (h) {}
                f = !1;
              }
            e = f;
          } catch (h) {
            e = !1;
          }
        if (e && a(c)) break;
        a: {
          try {
            var g = c.parent;
            if (g && g != c) {
              c = g;
              break a;
            }
          } catch (h) {}
          c = null;
        }
      }
    },
    Kd = function (a) {
      var b = a;
      Jd(function (c) {
        b = c;
        return !1;
      });
      return b;
    },
    Ld = function () {
      if (!u.globalThis.crypto) return Math.random();
      try {
        var a = new Uint32Array(1);
        u.globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    },
    Md = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Nd = function (a) {
      var b = a.length;
      if (b == 0) return 0;
      for (var c = 305419896, d = 0; d < b; d++)
        c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
      return c > 0 ? c : 4294967296 + c;
    },
    Od = ld(function () {
      return (
        Ea && Ha
          ? Ha.mobile
          : !md() && (C('iPod') || C('iPhone') || C('Android') || C('IEMobile'))
      )
        ? 2
        : md()
          ? 1
          : 0;
    });
  function Pd(a, b) {
    if (a.length && b.head) {
      a = z(a);
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = c.value) && b.head) {
          var d = Qd('META');
          b.head.appendChild(d);
          d.httpEquiv = 'origin-trial';
          d.content = c;
        }
    }
  }
  var Rd = function (a) {
      if (typeof a.goog_pvsid !== 'number')
        try {
          var b = Object,
            c = b.defineProperty,
            d = void 0;
          d = d === void 0 ? Math.random : d;
          var e = Math.floor(d() * 4503599627370496);
          c.call(b, a, 'goog_pvsid', { value: e, configurable: !1 });
        } catch (f) {}
      return Number(a.goog_pvsid) || -1;
    },
    Qd = function (a, b) {
      b = b === void 0 ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  var Sd = {
    Db: 0,
    Cb: 1,
    zb: 2,
    ub: 3,
    Ab: 4,
    vb: 5,
    Bb: 6,
    xb: 7,
    yb: 8,
    tb: 9,
    wb: 10,
    Eb: 11,
  };
  var Td = { Gb: 0, Hb: 1, Fb: 2 };
  var Ud = function (a) {
    this.i = K(a);
  };
  x(Ud, V);
  Ud.prototype.getVersion = function () {
    return $c(this, 2);
  };
  function Vd(a) {
    return Ua(a.length % 4 !== 0 ? a + 'A' : a)
      .map(function (b) {
        return ((q = b.toString(2)), v(q, 'padStart')).call(q, 8, '0');
      })
      .join('');
  }
  function Wd(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error('Invalid input [' + a + '] not a bit string.');
    return parseInt(a, 2);
  }
  function Xd(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error('Invalid input [' + a + '] not a bit string.');
    for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++)
      b.length <= d && b.push(b[d - 1] + b[d - 2]),
        (c += parseInt(a[d], 2) * b[d]);
    return c;
  }
  function Yd(a) {
    var b = Vd(a),
      c = Wd(b.slice(0, 6));
    a = Wd(b.slice(6, 12));
    var d = new Ud();
    c = P(d, 1, fc(c), 0);
    a = P(c, 2, fc(a), 0);
    b = b.slice(12);
    c = Wd(b.slice(0, 12));
    d = [];
    for (var e = b.slice(12).replace(/0+$/, ''), f = 0; f < c; f++) {
      if (e.length === 0)
        throw Error(
          'Found ' +
            f +
            ' of ' +
            c +
            ' sections [' +
            d +
            '] but reached end of input [' +
            b +
            ']',
        );
      var g = Wd(e[0]) === 0;
      e = e.slice(1);
      var h = Zd(e, b),
        l = d.length === 0 ? 0 : d[d.length - 1];
      l = Xd(h) + l;
      e = e.slice(h.length);
      if (g) d.push(l);
      else {
        g = Zd(e, b);
        h = Xd(g);
        for (var k = 0; k <= h; k++) d.push(l + k);
        e = e.slice(g.length);
      }
    }
    if (e.length > 0)
      throw Error(
        'Found ' +
          c +
          ' sections [' +
          d +
          '] but has remaining input [' +
          e +
          '], entire input [' +
          b +
          ']',
      );
    return Lc(a, 3, d, ec);
  }
  function Zd(a, b) {
    var c = a.indexOf('11');
    if (c === -1)
      throw Error(
        'Expected section bitstring but not found in [' +
          a +
          '] part of [' +
          b +
          ']',
      );
    return a.slice(0, c + 2);
  }
  var $d = 'a'.charCodeAt(),
    ae = nd(Sd),
    be = nd(Td);
  var ce = function (a) {
    this.i = K(a);
  };
  x(ce, V);
  var de = function () {
      var a = new ce();
      return fd(a, 1, 0);
    },
    ee = function (a) {
      var b = Number;
      var c = c === void 0 ? '0' : c;
      var d = L(a, 1);
      var e = !0;
      e = e === void 0 ? !1 : e;
      var f = typeof d;
      d =
        d == null
          ? d
          : f === 'bigint'
            ? String(Wb(64, d))
            : cc(d)
              ? f === 'string'
                ? jc(d)
                : e
                  ? kc(d)
                  : nc(d)
              : void 0;
      b = b(d != null ? d : c);
      a = $c(a, 2);
      return new Date(b * 1e3 + a / 1e6);
    };
  var fe = function (a) {
      if (/[^01]/.test(a))
        throw Error('Input bitstring ' + a + ' is malformed!');
      this.j = a;
      this.g = 0;
    },
    ie = function (a) {
      var b = W(a, 16);
      return !!W(a, 1) === !0
        ? ((a = ge(a)),
          a.forEach(function (c) {
            if (c > b)
              throw Error('ID ' + c + ' is past MaxVendorId ' + b + '!');
          }),
          a)
        : he(a, b);
    },
    ge = function (a) {
      for (var b = W(a, 12), c = []; b--; ) {
        var d = !!W(a, 1) === !0,
          e = W(a, 16);
        if (d) for (d = W(a, 16); e <= d; e++) c.push(e);
        else c.push(e);
      }
      c.sort(function (f, g) {
        return f - g;
      });
      return c;
    },
    he = function (a, b, c) {
      for (var d = [], e = 0; e < b; e++)
        if (W(a, 1)) {
          var f = e + 1;
          if (c && c.indexOf(f) === -1)
            throw Error('ID: ' + f + ' is outside of allowed values!');
          d.push(f);
        }
      return d;
    },
    W = function (a, b) {
      if (a.g + b > a.j.length)
        throw Error('Requested length ' + b + ' is past end of string.');
      var c = a.j.substring(a.g, a.g + b);
      a.g += b;
      return parseInt(c, 2);
    };
  fe.prototype.skip = function (a) {
    this.g += a;
  };
  var ke = function (a) {
      try {
        var b = Ua(a.split('.')[0])
            .map(function (d) {
              return ((q = d.toString(2)), v(q, 'padStart')).call(q, 8, '0');
            })
            .join(''),
          c = new fe(b);
        b = {};
        b.tcString = a;
        b.gdprApplies = !0;
        c.skip(78);
        b.cmpId = W(c, 12);
        b.cmpVersion = W(c, 12);
        c.skip(30);
        b.tcfPolicyVersion = W(c, 6);
        b.isServiceSpecific = !!W(c, 1);
        b.useNonStandardStacks = !!W(c, 1);
        b.specialFeatureOptins = je(he(c, 12, be), be);
        b.purpose = {
          consents: je(he(c, 24, ae), ae),
          legitimateInterests: je(he(c, 24, ae), ae),
        };
        b.purposeOneTreatment = !!W(c, 1);
        b.publisherCC =
          String.fromCharCode($d + W(c, 6)) + String.fromCharCode($d + W(c, 6));
        b.vendor = {
          consents: je(ie(c), null),
          legitimateInterests: je(ie(c), null),
        };
        return b;
      } catch (d) {
        return null;
      }
    },
    je = function (a, b) {
      var c = {};
      if (Array.isArray(b) && b.length !== 0) {
        b = z(b);
        for (var d = b.next(); !d.done; d = b.next())
          (d = d.value), (c[d] = a.indexOf(d) !== -1);
      } else
        for (a = z(a), b = a.next(); !b.done; b = a.next()) c[b.value] = !0;
      delete c[0];
      return c;
    };
  var le = function (a) {
    this.i = K(a);
  };
  x(le, V);
  var me = function (a, b) {
    var c = c === void 0 ? {} : c;
    this.error = a;
    this.meta = c;
    this.context = b.context;
    this.msg = b.message || '';
    this.id = b.id || 'jserror';
  };
  function ne(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Qd('IMG', a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = Array.prototype.indexOf.call(g, e, void 0);
          h >= 0 && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener('load', f, !1);
        e.removeEventListener && e.removeEventListener('error', f, !1);
      };
      e.addEventListener && e.addEventListener('load', f, !1);
      e.addEventListener && e.addEventListener('error', f, !1);
    }
    d && (e.attributionSrc = '');
    e.src = b;
    a.google_image_requests.push(e);
  }
  var pe = function (a) {
      var b = b === void 0 ? !1 : b;
      var c =
        'https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal';
      Md(a, function (d, e) {
        if (d || d === 0) c += '&' + e + '=' + encodeURIComponent('' + d);
      });
      oe(c, b);
    },
    oe = function (a, b) {
      var c = window;
      b = b === void 0 ? !1 : b;
      var d = d === void 0 ? !1 : d;
      c.fetch
        ? ((b = {
            keepalive: !0,
            credentials: 'include',
            redirect: 'follow',
            method: 'get',
            mode: 'no-cors',
          }),
          d &&
            ((b.mode = 'cors'),
            'setAttributionReporting' in XMLHttpRequest.prototype
              ? (b.attributionReporting = {
                  eventSourceEligible: 'true',
                  triggerEligible: 'false',
                })
              : (b.headers = {
                  'Attribution-Reporting-Eligible': 'event-source',
                })),
          c.fetch(a, b))
        : ne(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  function qe(a, b) {
    try {
      var c = function (d) {
        var e = {};
        return [((e[d.aa] = d.X), e)];
      };
      return JSON.stringify([
        a
          .filter(function (d) {
            return d.N;
          })
          .map(c),
        J(b),
        a
          .filter(function (d) {
            return !d.N;
          })
          .map(c),
      ]);
    } catch (d) {
      return re(d, b), '';
    }
  }
  function re(a, b) {
    try {
      var c = a instanceof Error ? a : Error(String(a)),
        d = c.toString();
      c.name && d.indexOf(c.name) == -1 && (d += ': ' + c.name);
      c.message && d.indexOf(c.message) == -1 && (d += ': ' + c.message);
      if (c.stack)
        a: {
          var e = c.stack;
          a = d;
          try {
            e.indexOf(a) == -1 && (e = a + '\n' + e);
            for (var f; e != f; )
              (f = e),
                (e = e.replace(
                  RegExp('((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2'),
                  '$1',
                ));
            d = e.replace(RegExp('\n *', 'g'), '\n');
            break a;
          } catch (g) {
            d = a;
            break a;
          }
          d = void 0;
        }
      pe({ m: d, b: U(b, 1) || null, v: T(b, 2) || null });
    } catch (g) {}
  }
  var se = function (a, b) {
    var c = new le();
    a = P(c, 1, H(a), 0);
    b = gd(a, 2, b);
    this.o = Cc(b);
  };
  var te = function (a) {
    this.i = K(a);
  };
  x(te, V);
  var ve = function (a, b) {
      return Q(a, 3, ue, b == null ? b : ac(b));
    },
    ue = [1, 2, 3];
  var we = function (a) {
    this.i = K(a);
  };
  x(we, V);
  var ye = function (a, b) {
      return Q(a, 2, xe, oc(b));
    },
    xe = [2, 4];
  var ze = function (a) {
    this.i = K(a);
  };
  x(ze, V);
  var Ae = function (a) {
      var b = new ze();
      return gd(b, 1, a);
    },
    Be = function (a, b) {
      return Vc(a, 3, b);
    },
    Ce = function (a, b) {
      var c = a.i[D] | 0;
      wb(c);
      c = Uc(a, c, te, 4, 2, !0);
      b = b != null ? b : new te();
      c.push(b);
      c[D] = (b.i[D] | 0) & 2 ? c[D] & -9 : c[D] & -17;
      return a;
    };
  var De = function (a) {
    this.i = K(a);
  };
  x(De, V);
  var Ee = function (a) {
    this.i = K(a);
  };
  x(Ee, V);
  var Fe = function (a, b) {
      return P(a, 1, H(b), 0);
    },
    Ge = function (a, b) {
      return P(a, 2, H(b), 0);
    };
  var He = function (a) {
    this.i = K(a);
  };
  x(He, V);
  var Ie = [1, 2];
  var Je = function (a) {
    this.i = K(a);
  };
  x(Je, V);
  var Ke = function (a, b) {
      return Vc(a, 1, b);
    },
    Le = function (a, b) {
      return Xc(a, 2, b);
    },
    Me = function (a, b) {
      return Lc(a, 4, b, ec);
    },
    Ne = function (a, b) {
      return Xc(a, 5, b);
    },
    Oe = function (a, b) {
      return P(a, 6, H(b), 0);
    };
  var Pe = function (a) {
    this.i = K(a);
  };
  x(Pe, V);
  var Qe = [1, 2, 3, 4, 6];
  var Re = function (a) {
    this.i = K(a);
  };
  x(Re, V);
  var Se = function (a) {
    this.i = K(a);
  };
  x(Se, V);
  var Te = [2, 3, 4];
  var Ue = function (a) {
    this.i = K(a);
  };
  x(Ue, V);
  var Ve = [3, 4, 5],
    We = [6, 7];
  var Xe = function (a) {
    this.i = K(a);
  };
  x(Xe, V);
  var Ye = [4, 5];
  var Ze = function (a) {
    this.i = K(a);
  };
  x(Ze, V);
  Ze.prototype.getTagSessionCorrelator = function () {
    return bd(this, 2);
  };
  var af = function (a) {
      var b = new Ze();
      return Wc(b, 4, $e, a);
    },
    $e = [4, 5, 7, 8, 9];
  var bf = function (a) {
    this.i = K(a);
  };
  x(bf, V);
  var cf = function (a) {
    this.i = K(a);
  };
  x(cf, V);
  var df = [1, 2, 4, 5, 6, 8, 9, 10];
  var ef = function (a) {
    this.i = K(a);
  };
  x(ef, V);
  ef.prototype.getTagSessionCorrelator = function () {
    return bd(this, 2);
  };
  ef.prototype.ca = function (a) {
    return dd(this, 4, a);
  };
  var ff = function (a) {
    this.i = K(a);
  };
  x(ff, V);
  ff.prototype.ab = function () {
    return $c(this, 2);
  };
  ff.prototype.Za = function (a) {
    var b = Fc(this, 3, I, 3, !0);
    xb(b, a);
    return b[a];
  };
  var gf = function (a) {
    this.i = K(a);
  };
  x(gf, V);
  var hf = function (a) {
    this.i = K(a);
  };
  x(hf, V);
  hf.prototype.getTagSessionCorrelator = function () {
    return bd(this, 1);
  };
  hf.prototype.ca = function (a) {
    return dd(this, 2, a);
  };
  var jf = function (a) {
    this.i = K(a);
  };
  x(jf, V);
  var kf = [1, 7],
    lf = [4, 6, 8];
  var nf = function (a) {
      this.g = a;
      this.Ra = new mf(this.g);
    },
    mf = function (a) {
      this.g = a;
      this.Ha = new of(this.g);
    },
    of = function (a) {
      this.g = a;
      this.outstream = new pf();
      this.request = new qf();
      this.threadYield = new rf();
      this.cb = new sf(this.g);
      this.gb = new tf(this.g);
      this.nb = new uf(this.g);
    },
    sf = function (a) {
      this.g = a;
    };
  sf.prototype.W = function (a) {
    this.g.D(
      Be(
        Ce(Ce(Ae('JwITQ'), ve(new te(), a.la)), ve(new te(), a.na)),
        ye(new we(), Math.round(a.Z)),
      ),
    );
  };
  var tf = function (a) {
    this.g = a;
  };
  tf.prototype.W = function (a) {
    this.g.D(
      Be(
        Ce(Ce(Ae('Pn3Upd'), ve(new te(), a.la)), ve(new te(), a.na)),
        ye(new we(), Math.round(a.Z)),
      ),
    );
  };
  var uf = function (a) {
    this.g = a;
  };
  uf.prototype.W = function (a) {
    var b = this.g,
      c = b.D,
      d = Ae('rkgGzc');
    var e = new te();
    e = Q(e, 2, ue, oc(a.source));
    d = Ce(d, e);
    e = new te();
    e = Q(e, 2, ue, oc(a.Ua));
    c.call(b, Be(Ce(d, e), ye(new we(), Math.round(a.Z))));
  };
  var pf = function () {},
    qf = function () {},
    rf = function () {},
    vf = function () {
      se.apply(this, arguments);
      this.Ka = new nf(this);
    };
  x(vf, se);
  var wf = function () {
    vf.apply(this, arguments);
  };
  x(wf, vf);
  wf.prototype.rb = function () {
    this.l.apply(
      this,
      oa(
        ua.apply(0, arguments).map(function (a) {
          return { N: !0, aa: 2, X: J(a) };
        }),
      ),
    );
  };
  wf.prototype.qb = function () {
    this.l.apply(
      this,
      oa(
        ua.apply(0, arguments).map(function (a) {
          return { N: !0, aa: 29, X: J(a) };
        }),
      ),
    );
  };
  wf.prototype.ea = function () {
    this.l.apply(
      this,
      oa(
        ua.apply(0, arguments).map(function (a) {
          return { N: !0, aa: 4, X: J(a) };
        }),
      ),
    );
  };
  wf.prototype.sb = function () {
    this.l.apply(
      this,
      oa(
        ua.apply(0, arguments).map(function (a) {
          return { N: !0, aa: 15, X: J(a) };
        }),
      ),
    );
  };
  wf.prototype.D = function () {
    this.l.apply(
      this,
      oa(
        ua.apply(0, arguments).map(function (a) {
          return { N: !1, aa: 1, X: J(a) };
        }),
      ),
    );
  };
  var xf = function (a, b) {
    if (u.globalThis.fetch)
      u.globalThis
        .fetch(a, {
          method: 'POST',
          body: b,
          keepalive: b.length < 65536,
          credentials: 'omit',
          mode: 'no-cors',
          redirect: 'follow',
        })
        .catch(function () {});
    else {
      var c = new XMLHttpRequest();
      c.open('POST', a, !0);
      c.send(b);
    }
  };
  var yf = function (a, b, c, d, e, f, g, h) {
    wf.call(this, a, b);
    this.T = c;
    this.S = d;
    this.U = e;
    this.P = f;
    this.R = g;
    this.I = h;
    this.g = [];
    this.j = null;
    this.K = !1;
  };
  x(yf, wf);
  var zf = function (a) {
    a.j !== null && (clearTimeout(a.j), (a.j = null));
    if (a.g.length) {
      var b = qe(a.g, a.o);
      a.S(a.T + '?e=1', b);
      a.g = [];
    }
  };
  yf.prototype.l = function () {
    var a = ua.apply(0, arguments),
      b = this;
    try {
      this.R && qe(this.g.concat(a), this.o).length >= 65536 && zf(this),
        this.I &&
          !this.K &&
          ((this.K = !0),
          this.I.g(function () {
            zf(b);
          })),
        this.g.push.apply(this.g, oa(a)),
        this.g.length >= this.P && zf(this),
        this.g.length &&
          this.j === null &&
          (this.j = setTimeout(function () {
            zf(b);
          }, this.U));
    } catch (c) {
      re(c, this.o);
    }
  };
  var Af = function (a, b, c, d, e, f) {
    yf.call(
      this,
      a,
      b,
      'https://pagead2.googlesyndication.com/pagead/ping',
      xf,
      c === void 0 ? 1e3 : c,
      d === void 0 ? 100 : d,
      (e === void 0 ? !1 : e) && !!u.globalThis.fetch,
      f,
    );
  };
  x(Af, yf);
  var Bf = function (a) {
      this.g = a;
      this.defaultValue = !1;
    },
    Cf = function (a, b) {
      this.g = a;
      this.defaultValue = b === void 0 ? 0 : b;
    };
  var Df = new Bf(501898423),
    Ef = new Cf(695925491, 20),
    Ff = new Bf(45624259),
    Gf = new Cf(635239304, 100),
    Hf = new Bf(662101539),
    If = new Cf(682056200, 100),
    Jf = new Cf(24),
    Kf = new (function (a, b) {
      b = b === void 0 ? [] : b;
      this.g = a;
      this.defaultValue = b;
    })(1934, [
      'AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==',
      'Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==',
      'A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
      'A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
    ]);
  var Lf = function (a) {
    this.i = K(a);
  };
  x(Lf, V);
  var Mf = function (a) {
    this.i = K(a);
  };
  x(Mf, V);
  var Nf = function (a) {
    this.i = K(a);
  };
  x(Nf, V);
  var Of = function (a) {
    this.i = K(a);
  };
  x(Of, V);
  var Pf = id(Of);
  var Qf = function (a) {
    this.g = a || { cookie: '' };
  };
  Qf.prototype.set = function (a, b, c) {
    var d = !1;
    if (typeof c === 'object') {
      var e = c.Kb;
      d = c.Lb || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.ib;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    h === void 0 && (h = -1);
    this.g.cookie =
      a +
      '=' +
      b +
      (f ? ';domain=' + f : '') +
      (g ? ';path=' + g : '') +
      (h < 0
        ? ''
        : h == 0
          ? ';expires=' + new Date(1970, 1, 1).toUTCString()
          : ';expires=' + new Date(Date.now() + h * 1e3).toUTCString()) +
      (d ? ';secure' : '') +
      (e != null ? ';samesite=' + e : '');
  };
  Qf.prototype.get = function (a, b) {
    for (
      var c = a + '=', d = (this.g.cookie || '').split(';'), e = 0, f;
      e < d.length;
      e++
    ) {
      f = Ba(d[e]);
      if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
      if (f == a) return '';
    }
    return b;
  };
  Qf.prototype.isEmpty = function () {
    return !this.g.cookie;
  };
  Qf.prototype.clear = function () {
    for (
      var a = (this.g.cookie || '').split(';'), b = [], c = [], d, e, f = 0;
      f < a.length;
      f++
    )
      (e = Ba(a[f])),
        (d = e.indexOf('=')),
        d == -1
          ? (b.push(''), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; a >= 0; a--)
      (c = b[a]),
        this.get(c),
        this.set(c, '', { ib: 0, path: void 0, domain: void 0 });
  };
  function Rf(a) {
    a = Sf(a);
    try {
      var b = a ? Pf(a) : null;
    } catch (c) {
      b = null;
    }
    return b ? R(b, Nf, 4) || null : null;
  }
  function Sf(a) {
    a = new Qf(a).get('FCCDCF', '');
    if (a)
      if (v(a, 'startsWith').call(a, '%'))
        try {
          var b = decodeURIComponent(a);
        } catch (c) {
          b = null;
        }
      else b = a;
    else b = null;
    return b;
  }
  nd(Sd).map(function (a) {
    return Number(a);
  });
  nd(Td).map(function (a) {
    return Number(a);
  });
  var Tf = function (a) {
      this.g = a;
    },
    Vf = function (a) {
      a.__tcfapiPostMessageReady || Uf(new Tf(a));
    },
    Uf = function (a) {
      a.j = function (b) {
        var c = typeof b.data === 'string';
        try {
          var d = c ? JSON.parse(b.data) : b.data;
        } catch (f) {
          return;
        }
        var e = d.__tcfapiCall;
        e &&
          (e.command === 'ping' ||
            e.command === 'addEventListener' ||
            e.command === 'removeEventListener') &&
          (0, a.g.__tcfapi)(
            e.command,
            e.version,
            function (f, g) {
              var h = {};
              h.__tcfapiReturn =
                e.command === 'removeEventListener'
                  ? { success: f, callId: e.callId }
                  : { returnValue: f, success: g, callId: e.callId };
              f = c ? JSON.stringify(h) : h;
              b.source &&
                typeof b.source.postMessage === 'function' &&
                b.source.postMessage(f, b.origin);
              return f;
            },
            e.parameter,
          );
      };
      a.g.addEventListener('message', a.j);
      a.g.__tcfapiPostMessageReady = !0;
    };
  var Wf = function (a) {
      this.g = a;
      this.j = null;
    },
    Yf = function (a) {
      a.__uspapiPostMessageReady || Xf(new Wf(a));
    },
    Xf = function (a) {
      a.j = function (b) {
        var c = typeof b.data === 'string';
        try {
          var d = c ? JSON.parse(b.data) : b.data;
        } catch (f) {
          return;
        }
        var e = d.__uspapiCall;
        e &&
          e.command === 'getUSPData' &&
          a.g.__uspapi(e.command, e.version, function (f, g) {
            var h = {};
            h.__uspapiReturn = { returnValue: f, success: g, callId: e.callId };
            f = c ? JSON.stringify(h) : h;
            b.source &&
              typeof b.source.postMessage === 'function' &&
              b.source.postMessage(f, b.origin);
            return f;
          });
      };
      a.g.addEventListener('message', a.j);
      a.g.__uspapiPostMessageReady = !0;
    };
  var Zf = function (a) {
    this.i = K(a);
  };
  x(Zf, V);
  var $f = function (a) {
    this.i = K(a);
  };
  x($f, V);
  var ag = id($f);
  function bg(a, b) {
    function c(m) {
      if (m.length < 10) return null;
      var n = h(m.slice(0, 4));
      n = l(n);
      m = h(m.slice(6, 10));
      m = k(m);
      return '1' + n + m + 'N';
    }
    function d(m) {
      if (m.length < 10) return null;
      var n = h(m.slice(0, 6));
      n = l(n);
      m = h(m.slice(6, 10));
      m = k(m);
      return '1' + n + m + 'N';
    }
    function e(m) {
      if (m.length < 12) return null;
      var n = h(m.slice(0, 6));
      n = l(n);
      m = h(m.slice(8, 12));
      m = k(m);
      return '1' + n + m + 'N';
    }
    function f(m) {
      if (m.length < 18) return null;
      var n = h(m.slice(0, 8));
      n = l(n);
      m = h(m.slice(12, 18));
      m = k(m);
      return '1' + n + m + 'N';
    }
    function g(m) {
      if (m.length < 10) return null;
      var n = h(m.slice(0, 6));
      n = l(n);
      m = h(m.slice(6, 10));
      m = k(m);
      return '1' + n + m + 'N';
    }
    function h(m) {
      for (var n = [], r = 0, t = 0; t < m.length / 2; t++)
        n.push(Wd(m.slice(r, r + 2))), (r += 2);
      return n;
    }
    function l(m) {
      return m.every(function (n) {
        return n === 1;
      })
        ? 'Y'
        : 'N';
    }
    function k(m) {
      return m.some(function (n) {
        return n === 1;
      })
        ? 'Y'
        : 'N';
    }
    if (a.length === 0) return null;
    a = a.split('.');
    if (a.length > 2) return null;
    a = Vd(a[0]);
    var p = Wd(a.slice(0, 6));
    a = a.slice(6);
    if (p !== 1) return null;
    switch (b) {
      case 8:
        return c(a);
      case 10:
      case 12:
      case 9:
        return d(a);
      case 11:
        return e(a);
      case 7:
        return f(a);
      case 13:
        return g(a);
      default:
        return null;
    }
  }
  function cg(a, b) {
    var c = a.document,
      d = function () {
        if (!a.frames[b])
          if (c.body) {
            var e = Qd('IFRAME', c);
            e.style.display = 'none';
            e.style.width = '0px';
            e.style.height = '0px';
            e.style.border = 'none';
            e.style.zIndex = '-1000';
            e.style.left = '-1000px';
            e.style.top = '-1000px';
            e.name = b;
            c.body.appendChild(e);
          } else a.setTimeout(d, 5);
      };
    d();
  }
  function dg(a) {
    if (a != null) return eg(a);
  }
  function eg(a) {
    return Nb(a) ? Number(a) : String(a);
  }
  var hg = function (a) {
      this.g = a;
      var b = Sf(this.g.document);
      try {
        var c = b ? Pf(b) : null;
      } catch (e) {
        c = null;
      }
      (b = c)
        ? ((c = R(b, Mf, 5) || null),
          (b = S(b, Lf, 7, O())),
          (b = fg(b != null ? b : [])),
          (c = { Da: c, Ga: b }))
        : (c = { Da: null, Ga: null });
      b = c;
      c = gg(b.Ga);
      b = b.Da;
      if (b != null && I(L(b, 2)) != null && T(b, 2).length !== 0) {
        var d = Sc(b, ce, 1) !== void 0 ? R(b, ce, 1) : de();
        b = { uspString: T(b, 2), ia: ee(d) };
      } else b = null;
      this.l =
        b && c
          ? c.ia > b.ia
            ? c.uspString
            : b.uspString
          : b
            ? b.uspString
            : c
              ? c.uspString
              : null;
      this.tcString =
        (c = Rf(a.document)) && I(L(c, 1)) != null ? T(c, 1) : null;
      this.j = (a = Rf(a.document)) && I(L(a, 2)) != null ? T(a, 2) : null;
    },
    kg = function (a) {
      a !== a.top ||
        a.__uspapi ||
        a.frames.__uspapiLocator ||
        ((a = new hg(a)), ig(a), jg(a));
    },
    ig = function (a) {
      !a.l ||
        a.g.__uspapi ||
        a.g.frames.__uspapiLocator ||
        ((a.g.__uspapiManager = 'fc'),
        cg(a.g, '__uspapiLocator'),
        za(
          '__uspapi',
          function (b, c, d) {
            typeof d === 'function' &&
              b === 'getUSPData' &&
              d({ version: 1, uspString: a.l }, !0);
          },
          a.g,
        ),
        Yf(a.g));
    },
    fg = function (a) {
      a = v(a, 'find').call(a, function (b) {
        return b && U(b, 1) === 13;
      });
      if (a == null ? 0 : I(L(a, 2)) != null)
        try {
          return ag(T(a, 2));
        } catch (b) {}
      return null;
    },
    gg = function (a) {
      if (
        a == null ||
        I(L(a, 1)) == null ||
        T(a, 1).length === 0 ||
        S(a, Zf, 2, O()).length === 0
      )
        return null;
      var b = T(a, 1);
      try {
        var c = Yd(b.split('~')[0]);
        var d = v(b, 'includes').call(b, '~') ? b.split('~').slice(1) : [];
      } catch (e) {
        return null;
      }
      a = S(a, Zf, 2, O()).reduce(function (e, f) {
        return eg(bd(lg(e), 1)) > eg(bd(lg(f), 1)) ? e : f;
      });
      c = Fc(c, 3, gc, O()).indexOf($c(a, 1));
      return c === -1 || c >= d.length
        ? null
        : { uspString: bg(d[c], $c(a, 1)), ia: ee(lg(a)) };
    },
    lg = function (a) {
      return Sc(a, ce, 2) !== void 0 ? R(a, ce, 2) : de();
    },
    jg = function (a) {
      !a.tcString ||
        a.g.__tcfapi ||
        a.g.frames.__tcfapiLocator ||
        ((a.g.__tcfapiManager = 'fc'),
        cg(a.g, '__tcfapiLocator'),
        (a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || []),
        za(
          '__tcfapi',
          function (b, c, d, e) {
            if (typeof d === 'function')
              if (c && (c > 2.2 || c <= 1)) d(null, !1);
              else
                switch (((c = a.g.__tcfapiEventListeners), b)) {
                  case 'ping':
                    d({
                      gdprApplies: !0,
                      cmpLoaded: !0,
                      cmpStatus: 'loaded',
                      displayStatus: 'disabled',
                      apiVersion: '2.2',
                      cmpVersion: 2,
                      cmpId: 300,
                    });
                    break;
                  case 'addEventListener':
                    b = c.push(d) - 1;
                    a.tcString
                      ? ((e = ke(a.tcString)),
                        (e.addtlConsent = a.j != null ? a.j : void 0),
                        (e.cmpStatus = 'loaded'),
                        (e.eventStatus = 'tcloaded'),
                        b != null && (e.listenerId = b),
                        (b = e))
                      : (b = null);
                    d(b, !0);
                    break;
                  case 'removeEventListener':
                    e !== void 0 && c[e] ? ((c[e] = null), d(!0)) : d(!1);
                    break;
                  case 'getInAppTCData':
                  case 'getVendorList':
                    d(null, !1);
                    break;
                  case 'getTCData':
                    d(null, !1);
                }
          },
          a.g,
        ),
        Vf(a.g));
    };
  var mg = qa([
      'https://pagead2.googlesyndication.com/pagead/managed/dict/',
      '/gpt',
    ]),
    ng = qa([
      'https://securepubads.g.doubleclick.net/pagead/managed/dict/',
      '/gpt',
    ]);
  function og(a, b, c) {
    try {
      var d = a.createElement('link'),
        e;
      if (
        (e = d.relList) != null &&
        e.supports('compression-dictionary') &&
        Oa()
      ) {
        if (b instanceof qd)
          (d.href = sd(b).toString()), (d.rel = 'compression-dictionary');
        else {
          if (xd.indexOf('compression-dictionary') === -1)
            throw Error(
              'TrustedResourceUrl href attribute required with rel="compression-dictionary"',
            );
          var f = td.test(b) ? b : void 0;
          f !== void 0 && ((d.href = f), (d.rel = 'compression-dictionary'));
        }
        a.head.appendChild(d);
      }
    } catch (g) {
      pg(c, { methodName: 1296, L: g });
    }
  }
  function qg(a, b) {
    return b ? Gd(mg, a) : Gd(ng, a);
  }
  var rg = null;
  function sg(a, b) {
    var c = S(a, Ue, 2, O());
    if (!c.length) return tg(a, b);
    a = U(a, 1);
    if (a === 1) {
      var d = sg(c[0], b);
      return d.success ? { success: !0, value: !d.value } : d;
    }
    c = Pa(c, function (h) {
      return sg(h, b);
    });
    switch (a) {
      case 2:
        var e;
        return (e =
          (d = v(c, 'find').call(c, function (h) {
            return h.success && !h.value;
          })) != null
            ? d
            : v(c, 'find').call(c, function (h) {
                return !h.success;
              })) != null
          ? e
          : { success: !0, value: !0 };
      case 3:
        var f, g;
        return (g =
          (f = v(c, 'find').call(c, function (h) {
            return h.success && h.value;
          })) != null
            ? f
            : v(c, 'find').call(c, function (h) {
                return !h.success;
              })) != null
          ? g
          : { success: !0, value: !1 };
      default:
        return { success: !1, C: 3 };
    }
  }
  function tg(a, b) {
    var c = Pc(a, Ve);
    a: {
      switch (c) {
        case 3:
          var d = ed(a, 3, Ve);
          break a;
        case 4:
          d = ed(a, 4, Ve);
          break a;
        case 5:
          d = ed(a, 5, Ve);
          break a;
      }
      d = void 0;
    }
    if (!d) return { success: !1, C: 2 };
    b = (b = b[c]) && b[d];
    if (!b) return { success: !1, O: d, Y: c, C: 1 };
    try {
      var e = b.apply;
      var f = Fc(a, 8, I, O());
      var g = e.call(b, null, oa(f));
    } catch (h) {
      return { success: !1, O: d, Y: c, C: 2 };
    }
    e = U(a, 1);
    if (e === 4) return { success: !0, value: !!g };
    if (e === 5) return { success: !0, value: g != null };
    if (e === 12) a = T(a, Qc(a, We, 7));
    else
      a: {
        switch (c) {
          case 4:
            a = cd(a, Qc(a, We, 6));
            break a;
          case 5:
            a = T(a, Qc(a, We, 7));
            break a;
        }
        a = void 0;
      }
    if (a == null) return { success: !1, O: d, Y: c, C: 3 };
    if (e === 6) return { success: !0, value: g === a };
    if (e === 9)
      return { success: !0, value: g != null && Ca(String(g), a) === 0 };
    if (g == null) return { success: !1, O: d, Y: c, C: 4 };
    switch (e) {
      case 7:
        c = g < a;
        break;
      case 8:
        c = g > a;
        break;
      case 12:
        c = Eb(a) && Eb(g) && new RegExp(a).test(g);
        break;
      case 10:
        c = g != null && Ca(String(g), a) === -1;
        break;
      case 11:
        c = g != null && Ca(String(g), a) === 1;
        break;
      default:
        return { success: !1, C: 3 };
    }
    return { success: !0, value: c };
  }
  function ug(a, b) {
    return a
      ? b
        ? sg(a, b)
        : { success: !1, C: 1 }
      : { success: !0, value: !0 };
  }
  var vg = function (a) {
    this.i = K(a);
  };
  x(vg, V);
  var wg = function (a) {
    this.i = K(a);
  };
  x(wg, V);
  wg.prototype.getValue = function () {
    return R(this, vg, 2);
  };
  var xg = function (a) {
    this.i = K(a);
  };
  x(xg, V);
  var yg = id(xg),
    zg = [1, 2, 3, 6, 7, 8];
  var Ag = function (a, b, c) {
      var d = d === void 0 ? new Af(6, 'unknown', b) : d;
      this.D = a;
      this.o = c;
      this.j = d;
      this.g = [];
      this.l = a > 0 && Ld() < 1 / a;
    },
    Cg = function (a, b, c, d, e, f) {
      if (a.l) {
        var g = Ge(Fe(new Ee(), b), c);
        b = Oe(Le(Ke(Ne(Me(new Je(), d), e), g), a.g.slice()), f);
        b = af(b);
        a.j.ea(Bg(a, b));
        if (
          f === 1 ||
          f === 3 ||
          (f === 4 &&
            !a.g.some(function (h) {
              return U(h, 1) === U(g, 1) && U(h, 2) === c;
            }))
        )
          a.g.push(g), a.g.length > 100 && a.g.shift();
      }
    },
    Dg = function (a, b, c, d) {
      if (a.l) {
        var e = new De();
        b = N(e, 1, fc(b));
        c = N(b, 2, fc(c));
        d = N(c, 3, H(d));
        c = new Ze();
        d = Wc(c, 8, $e, d);
        a.j.ea(Bg(a, d));
      }
    },
    Eg = function (a, b, c, d, e) {
      if (a.l) {
        var f = new Xe();
        b = Vc(f, 1, b);
        c = N(b, 2, H(c));
        d = N(c, 3, fc(d));
        if (e.Y === void 0) Q(d, 4, Ye, H(e.C));
        else
          switch (e.Y) {
            case 3:
              c = new Se();
              c = Q(c, 2, Te, H(e.O));
              e = N(c, 1, H(e.C));
              Wc(d, 5, Ye, e);
              break;
            case 4:
              c = new Se();
              c = Q(c, 3, Te, H(e.O));
              e = N(c, 1, H(e.C));
              Wc(d, 5, Ye, e);
              break;
            case 5:
              (c = new Se()),
                (c = Q(c, 4, Te, H(e.O))),
                (e = N(c, 1, H(e.C))),
                Wc(d, 5, Ye, e);
          }
        e = new Ze();
        e = Wc(e, 9, $e, d);
        a.j.ea(Bg(a, e));
      }
    },
    Bg = function (a, b) {
      var c = Date.now();
      c = v(Number, 'isFinite').call(Number, c) ? Math.round(c) : 0;
      b = fd(b, 1, c);
      c = Rd(window);
      b = fd(b, 2, c);
      return fd(b, 6, a.D);
    };
  var X = function (a) {
    var b = 'ka';
    if (a.ka && a.hasOwnProperty(b)) return a.ka;
    b = new a();
    return (a.ka = b);
  };
  var Fg = function () {
    var a = {};
    this.B = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
  };
  var Gg = /^true$/.test('false');
  function Hg(a, b) {
    switch (b) {
      case 1:
        return ed(a, 1, zg);
      case 2:
        return ed(a, 2, zg);
      case 3:
        return ed(a, 3, zg);
      case 6:
        return ed(a, 6, zg);
      case 8:
        return ed(a, 8, zg);
      default:
        return null;
    }
  }
  function Ig(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return Zc(a, 1);
      case 7:
        return T(a, 3);
      case 2:
        return cd(a, 2);
      case 3:
        return T(a, 3);
      case 6:
        return Fc(a, 4, I, O());
      case 8:
        return Fc(a, 4, I, O());
      default:
        return null;
    }
  }
  var Jg = ld(function () {
    if (!Gg) return {};
    try {
      var a = a === void 0 ? window : a;
      try {
        var b = a.sessionStorage.getItem('GGDFSSK');
      } catch (c) {
        b = null;
      }
      if (b) return JSON.parse(b);
    } catch (c) {}
    return {};
  });
  function Kg(a, b, c, d) {
    var e = (d = d === void 0 ? 0 : d),
      f,
      g;
    X(Lg).l[e] =
      (g = (f = X(Lg).l[e]) == null ? void 0 : f.add(b)) != null
        ? g
        : new u.Set().add(b);
    e = Jg();
    if (e[b] != null) return e[b];
    b = Mg(d)[b];
    if (!b) return c;
    b = yg(JSON.stringify(b));
    b = Ng(b);
    a = Ig(b, a);
    return a != null ? a : c;
  }
  function Ng(a) {
    var b = X(Fg).B;
    if (b && Pc(a, zg) !== 8) {
      var c = Qa(S(a, wg, 5, O()), function (f) {
        f = ug(R(f, Ue, 1), b);
        return f.success && f.value;
      });
      if (c) {
        var d;
        return (d = c.getValue()) != null ? d : null;
      }
    }
    var e;
    return (e = R(a, vg, 4)) != null ? e : null;
  }
  var Lg = function () {
    this.j = {};
    this.o = [];
    this.l = {};
    this.g = new u.Map();
  };
  function Og(a, b, c) {
    return !!Kg(1, a, b === void 0 ? !1 : b, c);
  }
  function Pg(a, b, c) {
    b = b === void 0 ? 0 : b;
    a = Number(Kg(2, a, b, c));
    return isNaN(a) ? b : a;
  }
  function Qg(a, b, c) {
    b = b === void 0 ? '' : b;
    a = Kg(3, a, b, c);
    return typeof a === 'string' ? a : b;
  }
  function Rg(a, b, c) {
    b = b === void 0 ? [] : b;
    a = Kg(6, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function Sg(a, b, c) {
    b = b === void 0 ? [] : b;
    a = Kg(8, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function Mg(a) {
    return X(Lg).j[a] || (X(Lg).j[a] = {});
  }
  function Tg(a, b) {
    var c = Mg(b);
    Md(a, function (d, e) {
      if (c[e]) {
        d = yg(JSON.stringify(d));
        var f = Qc(d, zg, 8);
        if (dc(L(d, f)) != null) {
          var g = yg(JSON.stringify(c[e]));
          f = Rc(d, vg, 4);
          g = Tc(g, vg, 4);
          g = Fc(g, 4, I, O());
          Yc(f, g);
        }
        c[e] = J(d);
      } else c[e] = d;
    });
  }
  function Ug(a, b, c, d, e) {
    e = e === void 0 ? !1 : e;
    var f = [],
      g = [];
    b = z(b);
    for (var h = b.next(); !h.done; h = b.next()) {
      h = h.value;
      for (var l = Mg(h), k = z(a), p = k.next(); !p.done; p = k.next()) {
        p = p.value;
        var m = Pc(p, zg),
          n = Hg(p, m);
        if (n) {
          var r = void 0,
            t = void 0,
            y = void 0;
          var A =
            (r =
              (y = X(Lg).g.get(h)) == null
                ? void 0
                : (t = y.get(n)) == null
                  ? void 0
                  : t.slice(0)) != null
              ? r
              : [];
          a: {
            r = n;
            t = m;
            y = new Pe();
            switch (t) {
              case 1:
                Q(y, 1, Qe, H(r));
                break;
              case 2:
                Q(y, 2, Qe, H(r));
                break;
              case 3:
                Q(y, 3, Qe, H(r));
                break;
              case 6:
                Q(y, 4, Qe, H(r));
                break;
              case 8:
                Q(y, 6, Qe, H(r));
                break;
              default:
                A = void 0;
                break a;
            }
            Lc(y, 5, A, ec);
            A = y;
          }
          if ((r = A))
            (t = void 0), (r = !((t = X(Lg).l[h]) == null || !t.has(n)));
          r && f.push(A);
          if (m === 8 && l[n])
            (A = yg(JSON.stringify(l[n]))),
              (m = Rc(p, vg, 4)),
              (A = Tc(A, vg, 4)),
              (A = Fc(A, 4, I, O())),
              Yc(m, A);
          else {
            if ((m = A))
              (r = void 0), (m = !((r = X(Lg).g.get(h)) == null || !r.has(n)));
            m && g.push(A);
          }
          e ||
            ((m = n),
            (A = h),
            (r = d),
            (t = X(Lg)),
            t.g.has(A) || t.g.set(A, new u.Map()),
            t.g.get(A).has(m) || t.g.get(A).set(m, []),
            r && t.g.get(A).get(m).push(r));
          l[n] = J(p);
        }
      }
    }
    if (f.length || g.length)
      (a = d != null ? d : void 0),
        c.l &&
          c.o &&
          ((d = new Re()),
          (f = Xc(d, 2, f)),
          (g = Xc(f, 3, g)),
          a && P(g, 1, fc(a), 0),
          (f = new Ze()),
          (g = Wc(f, 7, $e, g)),
          c.j.ea(Bg(c, g)));
  }
  function Vg(a, b) {
    b = Mg(b);
    a = z(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      c = c.value;
      var d = yg(JSON.stringify(c)),
        e = Pc(d, zg);
      (d = Hg(d, e)) && (b[d] || (b[d] = c));
    }
  }
  function Wg() {
    return v(Object, 'keys')
      .call(Object, X(Lg).j)
      .map(function (a) {
        return Number(a);
      });
  }
  function Xg(a) {
    ((q = X(Lg).o), v(q, 'includes')).call(q, a) || Tg(Mg(4), a);
  }
  function Y(a, b, c) {
    c.hasOwnProperty(a) || Object.defineProperty(c, String(a), { value: b });
  }
  function Z(a, b, c) {
    return b[a] || c;
  }
  function Yg(a) {
    Y(5, Og, a);
    Y(6, Pg, a);
    Y(7, Qg, a);
    Y(8, Rg, a);
    Y(17, Sg, a);
    Y(13, Vg, a);
    Y(15, Xg, a);
  }
  function Zg(a) {
    Y(
      4,
      function (b) {
        X(Fg).B = b;
      },
      a,
    );
    Y(
      9,
      function (b, c) {
        var d = X(Fg);
        d.B[3][b] == null && (d.B[3][b] = c);
      },
      a,
    );
    Y(
      10,
      function (b, c) {
        var d = X(Fg);
        d.B[4][b] == null && (d.B[4][b] = c);
      },
      a,
    );
    Y(
      11,
      function (b, c) {
        var d = X(Fg);
        d.B[5][b] == null && (d.B[5][b] = c);
      },
      a,
    );
    Y(
      14,
      function (b) {
        for (
          var c = X(Fg), d = z([3, 4, 5]), e = d.next();
          !e.done;
          e = d.next()
        )
          (e = e.value), v(Object, 'assign').call(Object, c.B[e], b[e]);
      },
      a,
    );
  }
  function $g(a) {
    a.hasOwnProperty('init-done') ||
      Object.defineProperty(a, 'init-done', { value: !0 });
  }
  var ah = function () {};
  ah.prototype.g = function () {};
  ah.prototype.j = function () {};
  ah.prototype.l = function () {
    return [];
  };
  var bh = function (a, b, c) {
    a.j = function (d, e) {
      Z(2, b, function () {
        return [];
      })(d, c, e);
    };
    a.l = function () {
      return Z(3, b, function () {
        return [];
      })(c);
    };
    a.g = function (d) {
      Z(16, b, function () {})(d, c);
    };
  };
  function ch(a) {
    X(ah).g(a);
  }
  function dh() {
    return X(ah).l();
  }
  function eh(a, b) {
    try {
      var c = a.split('.');
      a = B;
      for (var d = 0, e; a != null && d < c.length; d++)
        (e = a), (a = a[c[d]]), typeof a === 'function' && (a = e[c[d]]());
      var f = a;
      if (typeof f === b) return f;
    } catch (g) {}
  }
  var fh = {},
    gh = {},
    hh = {},
    ih = {},
    jh =
      ((ih[3] =
        ((fh[8] = function (a) {
          try {
            return xa(a) != null;
          } catch (b) {}
        }),
        (fh[9] = function (a) {
          try {
            var b = xa(a);
          } catch (c) {
            return;
          }
          if ((a = typeof b === 'function'))
            (b = b && b.toString && b.toString()),
              (a = typeof b === 'string' && b.indexOf('[native code]') != -1);
          return a;
        }),
        (fh[10] = function () {
          return window === window.top;
        }),
        (fh[6] = function (a) {
          var b = dh();
          return Array.prototype.indexOf.call(b, Number(a), void 0) >= 0;
        }),
        (fh[27] = function (a) {
          a = eh(a, 'boolean');
          return a !== void 0 ? a : void 0;
        }),
        (fh[60] = function (a) {
          try {
            return !!B.document.querySelector(a);
          } catch (b) {}
        }),
        (fh[80] = function (a) {
          try {
            return !!B.matchMedia(a).matches;
          } catch (b) {}
        }),
        (fh[69] = function (a) {
          var b = B.document;
          b = b === void 0 ? document : b;
          var c;
          return !(
            (c = b.featurePolicy) == null ||
            !((q = c.features()), v(q, 'includes')).call(q, a)
          );
        }),
        (fh[70] = function (a) {
          var b = B.document;
          b = b === void 0 ? document : b;
          var c;
          return !(
            (c = b.featurePolicy) == null ||
            !((q = c.allowedFeatures()), v(q, 'includes')).call(q, a)
          );
        }),
        (fh[79] = function (a) {
          var b = B.navigator;
          b = b === void 0 ? navigator : b;
          try {
            var c, d;
            var e = !!((c = b.protectedAudience) == null
              ? 0
              : (d = c.queryFeatureSupport) == null
                ? 0
                : d.call(c, a));
          } catch (f) {
            e = !1;
          }
          return e;
        }),
        fh)),
      (ih[4] =
        ((gh[3] = function () {
          return Od();
        }),
        (gh[6] = function (a) {
          a = eh(a, 'number');
          return a !== void 0 ? a : void 0;
        }),
        gh)),
      (ih[5] =
        ((hh[2] = function () {
          return window.location.href;
        }),
        (hh[3] = function () {
          try {
            return window.top.location.hash;
          } catch (a) {
            return '';
          }
        }),
        (hh[4] = function (a) {
          a = eh(a, 'string');
          return a !== void 0 ? a : void 0;
        }),
        (hh[12] = function (a) {
          try {
            var b = eh(a, 'string');
            if (b !== void 0) return atob(b);
          } catch (c) {}
        }),
        hh)),
      ih);
  function kh() {
    var a = a === void 0 ? B : a;
    return a.ggeac || (a.ggeac = {});
  }
  var lh = function (a) {
    this.i = K(a);
  };
  x(lh, V);
  lh.prototype.getId = function () {
    return $c(this, 1);
  };
  var mh = function (a) {
    this.i = K(a);
  };
  x(mh, V);
  var nh = function (a) {
    return S(a, lh, 2, O());
  };
  var oh = function (a) {
    this.i = K(a);
  };
  x(oh, V);
  var ph = function (a) {
    this.i = K(a);
  };
  x(ph, V);
  var qh = function (a) {
    this.i = K(a);
  };
  x(qh, V);
  function rh(a) {
    var b = {};
    return sh(
      ((b[0] = new u.Map()), (b[1] = new u.Map()), (b[2] = new u.Map()), b),
      a,
    );
  }
  function sh(a, b) {
    for (
      var c = new u.Map(), d = z(v(a[1], 'entries').call(a[1])), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = z(e.value);
      e = f.next().value;
      f = f.next().value;
      f = f[f.length - 1];
      c.set(e, f.Qa + f.La * f.Ma);
    }
    b = z(b);
    for (d = b.next(); !d.done; d = b.next())
      for (
        d = d.value, e = S(d, mh, 2, O()), e = z(e), f = e.next();
        !f.done;
        f = e.next()
      )
        if (((f = f.value), nh(f).length !== 0)) {
          var g = ad(f, 8);
          if (U(f, 4) && !U(f, 13) && !U(f, 14)) {
            var h = void 0;
            g = (h = c.get(U(f, 4))) != null ? h : 0;
            h = ad(f, 1) * nh(f).length;
            c.set(U(f, 4), g + h);
          }
          h = [];
          for (var l = 0; l < nh(f).length; l++) {
            var k = {
              Qa: g,
              La: ad(f, 1),
              Ma: nh(f).length,
              jb: l,
              ba: U(d, 1),
              fa: f,
              G: nh(f)[l],
            };
            h.push(k);
          }
          th(a[2], U(f, 10), h) ||
            th(a[1], U(f, 4), h) ||
            th(a[0], nh(f)[0].getId(), h);
        }
    return a;
  }
  function th(a, b, c) {
    if (!b) return !1;
    a.has(b) || a.set(b, []);
    var d;
    (d = a.get(b)).push.apply(d, oa(c));
    return !0;
  }
  function uh() {
    var a = Rd(window);
    a = a === void 0 ? Ld() : a;
    return function (b) {
      return Nd(b + ' + ' + a) % 1e3;
    };
  }
  var vh = [12, 13, 20],
    wh = function (a, b, c, d) {
      d = d === void 0 ? {} : d;
      var e = d.ja === void 0 ? !1 : d.ja;
      d = d.pb === void 0 ? [] : d.pb;
      this.M = a;
      this.A = c;
      this.o = {};
      this.ja = e;
      a = {};
      this.g = ((a[b] = []), (a[4] = []), a);
      this.j = {};
      this.l = {};
      var f = f === void 0 ? window : f;
      if (rg === null) {
        rg = '';
        try {
          b = '';
          try {
            b = f.top.location.hash;
          } catch (h) {
            b = f.location.hash;
          }
          if (b) {
            var g = b.match(/\bdeid=([\d,]+)/);
            rg = g ? g[1] : '';
          }
        } catch (h) {}
      }
      if ((f = rg))
        for (f = z(f.split(',') || []), g = f.next(); !g.done; g = f.next())
          (g = Number(g.value)) && (this.j[g] = !0);
      d = z(d);
      for (f = d.next(); !f.done; f = d.next()) this.j[f.value] = !0;
    },
    zh = function (a, b, c, d) {
      var e = [],
        f;
      if ((f = b !== 9)) a.o[b] ? (f = !0) : ((a.o[b] = !0), (f = !1));
      if (f) return Cg(a.A, b, c, e, [], 4), e;
      f = v(vh, 'includes').call(vh, b);
      for (
        var g = [], h = [], l = z([0, 1, 2]), k = l.next();
        !k.done;
        k = l.next()
      ) {
        k = k.value;
        for (
          var p = z(v(a.M[k], 'entries').call(a.M[k])), m = p.next();
          !m.done;
          m = p.next()
        ) {
          var n = z(m.value);
          m = n.next().value;
          n = n.next().value;
          var r = m,
            t = n;
          m = new He();
          n = t.filter(function (Ad) {
            return Ad.ba === b && a.j[Ad.G.getId()] && xh(a, Ad);
          });
          if (n.length)
            for (m = z(n), n = m.next(); !n.done; n = m.next())
              h.push(n.value.G);
          else if (!a.ja) {
            n = void 0;
            k === 2 ? ((n = d[1]), Q(m, 2, Ie, H(r))) : (n = d[0]);
            var y = void 0,
              A = void 0;
            n =
              (A = (y = n) == null ? void 0 : y(String(r))) != null
                ? A
                : k === 2 && U(t[0].fa, 11) === 1
                  ? void 0
                  : d[0](String(r));
            if (n !== void 0) {
              r = z(t);
              for (t = r.next(); !t.done; t = r.next())
                if (((t = t.value), t.ba === b)) {
                  y = n - t.Qa;
                  var sa = t;
                  A = sa.La;
                  var tb = sa.Ma;
                  sa = sa.jb;
                  y < 0 ||
                    y >= A * tb ||
                    y % tb !== sa ||
                    !xh(a, t) ||
                    ((y = U(t.fa, 13)),
                    y !== 0 &&
                      y !== void 0 &&
                      ((A = a.l[String(y)]),
                      A !== void 0 && A !== t.G.getId()
                        ? Dg(a.A, a.l[String(y)], t.G.getId(), y)
                        : (a.l[String(y)] = t.G.getId())),
                    h.push(t.G));
                }
              Pc(m, Ie) !== 0 && (P(m, 3, fc(n), 0), g.push(m));
            }
          }
        }
      }
      d = z(h);
      for (h = d.next(); !h.done; h = d.next())
        (h = h.value),
          (l = h.getId()),
          e.push(l),
          yh(a, l, f ? 4 : c),
          Ug(S(h, xg, 2, O()), f ? Wg() : [c], a.A, l);
      Cg(a.A, b, c, e, g, 1);
      return e;
    },
    yh = function (a, b, c) {
      a.g[c] || (a.g[c] = []);
      a = a.g[c];
      v(a, 'includes').call(a, b) || a.push(b);
    },
    xh = function (a, b) {
      var c = X(Fg).B,
        d = ug(R(b.fa, Ue, 3), c);
      if (!d.success) return Eg(a.A, R(b.fa, Ue, 3), b.ba, b.G.getId(), d), !1;
      if (!d.value) return !1;
      c = ug(R(b.G, Ue, 3), c);
      return c.success
        ? c.value
          ? !0
          : !1
        : (Eg(a.A, R(b.G, Ue, 3), b.ba, b.G.getId(), c), !1);
    },
    Ah = function (a, b) {
      b = b
        .map(function (c) {
          return new oh(c);
        })
        .filter(function (c) {
          return !v(vh, 'includes').call(vh, U(c, 1));
        });
      a.M = sh(a.M, b);
    },
    Bh = function (a, b) {
      Y(
        1,
        function (c) {
          a.j[c] = !0;
        },
        b,
      );
      Y(
        2,
        function (c, d, e) {
          return zh(a, c, d, e);
        },
        b,
      );
      Y(
        3,
        function (c) {
          return (a.g[c] || []).concat(a.g[4]);
        },
        b,
      );
      Y(
        12,
        function (c) {
          return void Ah(a, c);
        },
        b,
      );
      Y(
        16,
        function (c, d) {
          return void yh(a, c, d);
        },
        b,
      );
    };
  var Ch = function () {
    var a = {};
    this.g = function (b, c) {
      return a[b] != null ? a[b] : c;
    };
    this.j = function (b, c) {
      return a[b] != null ? a[b] : c;
    };
    this.I = function (b, c) {
      return a[b] != null ? a[b] : c;
    };
    this.l = function (b, c) {
      return a[b] != null ? a[b] : c;
    };
    this.D = function (b, c) {
      return a[b] != null ? c.concat(a[b]) : c;
    };
    this.o = function () {};
  };
  function Dh(a) {
    return X(Ch).g(a.g, a.defaultValue);
  }
  function Eh(a) {
    return X(Ch).j(a.g, a.defaultValue);
  }
  var Fh = function () {
      this.g = function () {};
    },
    Gh = function (a, b) {
      a.g = Z(14, b, function () {});
    };
  function Hh(a) {
    X(Fh).g(a);
  }
  var Ih, Jh, Kh, Lh, Mh, Nh;
  function Oh(a) {
    var b = a.Ya;
    var c = a.B;
    var d = a.config;
    var e = a.Ta === void 0 ? kh() : a.Ta;
    var f = a.Ca === void 0 ? 0 : a.Ca;
    var g =
      a.A === void 0
        ? new Ag(
            (Lh = dg((Ih = R(b, ph, 5)) == null ? void 0 : bd(Ih, 2))) != null
              ? Lh
              : 0,
            (Mh = dg((Jh = R(b, ph, 5)) == null ? void 0 : bd(Jh, 4))) != null
              ? Mh
              : 0,
            (Nh = (Kh = R(b, ph, 5)) == null ? void 0 : Zc(Kh, 3)) != null
              ? Nh
              : !1,
          )
        : a.A;
    a = a.M === void 0 ? rh(S(b, oh, 2, O(yb))) : a.M;
    e.hasOwnProperty('init-done')
      ? (Z(12, e, function () {})(
          S(b, oh, 2, O()).map(function (h) {
            return J(h);
          }),
        ),
        Z(13, e, function () {})(
          S(b, xg, 1, O()).map(function (h) {
            return J(h);
          }),
          f,
        ),
        c && Z(14, e, function () {})(c),
        Ph(f, e))
      : (Bh(new wh(a, f, g, d), e),
        Yg(e),
        Zg(e),
        $g(e),
        Ph(f, e),
        Ug(S(b, xg, 1, O(yb)), [f], g, void 0, !0),
        (Gg = Gg || !(!d || !d.ma)),
        Hh(jh),
        c && Hh(c));
  }
  function Ph(a, b) {
    var c = (b = b === void 0 ? kh() : b);
    bh(X(ah), c, a);
    Qh(b, a);
    a = b;
    Gh(X(Fh), a);
    X(Ch).o();
  }
  function Qh(a, b) {
    var c = X(Ch);
    c.g = function (d, e) {
      return Z(5, a, function () {
        return !1;
      })(d, e, b);
    };
    c.j = function (d, e) {
      return Z(6, a, function () {
        return 0;
      })(d, e, b);
    };
    c.I = function (d, e) {
      return Z(7, a, function () {
        return '';
      })(d, e, b);
    };
    c.l = function (d, e) {
      return Z(8, a, function () {
        return [];
      })(d, e, b);
    };
    c.D = function (d, e) {
      return Z(17, a, function () {
        return [];
      })(d, e, b);
    };
    c.o = function () {
      Z(15, a, function () {})(b);
    };
  }
  var Rh = qa(['https://pagead2.googlesyndication.com/pagead/js/err_rep.js']),
    Sh = function () {
      var a = a === void 0 ? 'jserror' : a;
      var b = b === void 0 ? 0.01 : b;
      var c = c === void 0 ? Gd(Rh) : c;
      this.g = a;
      this.l = b;
      this.j = c;
    };
  var Th,
    Uh = 64;
  function Vh() {
    try {
      return (
        Th != null || (Th = new Uint32Array(64)),
        Uh >= 64 && (crypto.getRandomValues(Th), (Uh = 0)),
        Th[Uh++]
      );
    } catch (a) {
      return Math.floor(Math.random() * 4294967296);
    }
  }
  var Wh = function () {
    var a;
    this.V = a =
      a === void 0
        ? {
            kb: Vh() + (Vh() & 2097151) * 4294967296,
            Wa: v(Number, 'MAX_SAFE_INTEGER'),
          }
        : a;
  };
  function Xh(a, b) {
    return b > 0 && a.kb * b <= a.Wa;
  }
  var Yh = function (a) {
    this.i = K(a);
  };
  x(Yh, V);
  function Zh(a) {
    a = a === void 0 ? B : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  function $h(a, b) {
    b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
    b.length < 2048 && b.push(a);
  }
  function ai(a, b) {
    var c = Zh(b);
    c && $h({ label: a, type: 9, value: c }, b);
  }
  function bi(a, b, c) {
    var d = !1;
    d = d === void 0 ? !1 : d;
    var e = window,
      f = typeof queueMicrotask !== 'undefined';
    return function () {
      var g = ua.apply(0, arguments);
      d &&
        f &&
        queueMicrotask(function () {
          e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
          e.google_rum_task_id_counter += 1;
        });
      var h = Zh(),
        l = 3;
      try {
        var k = b.apply(this, g);
      } catch (p) {
        l = 13;
        if (!c) throw p;
        c(a, p);
      } finally {
        e.google_measure_js_timing &&
          h &&
          $h(
            v(Object, 'assign').call(
              Object,
              {},
              {
                label: a.toString(),
                value: h,
                duration: (Zh() || 0) - h,
                type: l,
              },
              d &&
                f && {
                  taskId: (e.google_rum_task_id_counter =
                    e.google_rum_task_id_counter || 1),
                },
            ),
            e,
          );
      }
      return k;
    };
  }
  function ci(a, b) {
    return bi(a, b, function (c, d) {
      var e = new Sh();
      var f = f === void 0 ? e.l : f;
      var g = g === void 0 ? e.g : g;
      Math.random() > f ||
        ((d.error && d.meta && d.id) || (d = new me(d, { context: c, id: g })),
        (B.google_js_errors = B.google_js_errors || []),
        B.google_js_errors.push(d),
        B.error_rep_loaded ||
          ((f = B.document),
          (c = Qd('SCRIPT', f)),
          wd(c, e.j),
          (e = f.getElementsByTagName('script')[0]) &&
            e.parentNode &&
            e.parentNode.insertBefore(c, e),
          (B.error_rep_loaded = !0)));
    });
  }
  function di(a, b) {
    return b == null ? '&' + a + '=null' : '&' + a + '=' + Math.floor(b);
  }
  function ei(a, b) {
    return '&' + a + '=' + b.toFixed(3);
  }
  function fi() {
    var a = new u.Set();
    var b = window.googletag;
    b = (b == null ? 0 : b.apiReady) ? b : void 0;
    try {
      if (!b) return a;
      for (
        var c = b.pubads(), d = z(c.getSlots()), e = d.next();
        !e.done;
        e = d.next()
      )
        a.add(e.value.getSlotId().getDomId());
    } catch (f) {}
    return a;
  }
  function gi(a) {
    a = a.id;
    return (
      a != null &&
      (fi().has(a) ||
        v(a, 'startsWith').call(a, 'google_ads_iframe_') ||
        v(a, 'startsWith').call(a, 'aswift'))
    );
  }
  function hi(a, b, c) {
    if (!a.sources) return !1;
    switch (ii(a)) {
      case 2:
        var d = ji(a);
        if (d)
          return c.some(function (f) {
            return ki(d, f);
          });
        break;
      case 1:
        var e = li(a);
        if (e)
          return b.some(function (f) {
            return ki(e, f);
          });
    }
    return !1;
  }
  function ii(a) {
    if (!a.sources) return 0;
    a = a.sources.filter(function (b) {
      return b.previousRect && b.currentRect;
    });
    if (a.length >= 1) {
      a = a[0];
      if (a.previousRect.top < a.currentRect.top) return 2;
      if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
  }
  function li(a) {
    return mi(a, function (b) {
      return b.currentRect;
    });
  }
  function ji(a) {
    return mi(a, function (b) {
      return b.previousRect;
    });
  }
  function mi(a, b) {
    return a.sources.reduce(function (c, d) {
      d = b(d);
      return c
        ? d && d.width * d.height !== 0
          ? d.top < c.top
            ? d
            : c
          : c
        : d;
    }, null);
  }
  function ki(a, b) {
    var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return c <= 0 || a <= 0
      ? !1
      : (c * a * 100) / ((b.right - b.left) * (b.bottom - b.top)) >= 50;
  }
  var ni = function () {
      var a = { Ea: !0 };
      a = a === void 0 ? { Ea: !1 } : a;
      this.l = this.j = this.U = this.S = this.K = 0;
      this.ya = this.va = Number.NEGATIVE_INFINITY;
      this.g = [];
      this.P = {};
      this.sa = 0;
      this.T = Infinity;
      this.qa =
        this.ta =
        this.ua =
        this.wa =
        this.Ba =
        this.D =
        this.Aa =
        this.ha =
        this.o =
          0;
      this.ra = !1;
      this.ga = this.R = this.I = 0;
      this.A = null;
      this.xa = !1;
      this.pa = function () {};
      var b = document.querySelector('[data-google-query-id]');
      this.za = b ? b.getAttribute('data-google-query-id') : null;
      this.Sa = a;
    },
    oi,
    pi,
    si = function () {
      var a = new ni();
      if (Dh(Hf)) {
        var b = window;
        if (!b.google_plmetrics && window.PerformanceObserver) {
          b.google_plmetrics = !0;
          b = [
            'layout-shift',
            'largest-contentful-paint',
            'first-input',
            'longtask',
          ];
          a.Sa.Ea && b.push('event');
          b = z(b);
          for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = { type: c, buffered: !0 };
            c === 'event' && (d.durationThreshold = 40);
            qi(a).observe(d);
          }
          ri(a);
        }
      }
    },
    qi = function (a) {
      a.A ||
        (a.A = new PerformanceObserver(
          ci(640, function (b) {
            ti(a, b);
          }),
        ));
      return a.A;
    },
    ri = function (a) {
      var b = ci(641, function () {
          var d = document;
          (d.prerendering
            ? 3
            : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                d.visibilityState ||
                  d.webkitVisibilityState ||
                  d.mozVisibilityState ||
                  ''
              ] || 0) === 2 && ui(a);
        }),
        c = ci(641, function () {
          return void ui(a);
        });
      document.addEventListener('visibilitychange', b);
      document.addEventListener('pagehide', c);
      a.pa = function () {
        document.removeEventListener('visibilitychange', b);
        document.removeEventListener('pagehide', c);
        qi(a).disconnect();
      };
    },
    ui = function (a) {
      if (!a.xa) {
        a.xa = !0;
        qi(a).takeRecords();
        var b =
          'https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics';
        window.LayoutShift &&
          ((b += ei('cls', a.K)),
          (b += ei('mls', a.S)),
          (b += di('nls', a.U)),
          window.LayoutShiftAttribution &&
            ((b += ei('cas', a.D)),
            (b += di('nas', a.wa)),
            (b += ei('was', a.Ba))),
          (b += ei('wls', a.ha)),
          (b += ei('tls', a.Aa)));
        window.LargestContentfulPaint &&
          ((b += di('lcp', a.ua)), (b += di('lcps', a.ta)));
        window.PerformanceEventTiming && a.ra && (b += di('fid', a.qa));
        window.PerformanceLongTaskTiming &&
          ((b += di('cbt', a.I)),
          (b += di('mbt', a.R)),
          (b += di('nlt', a.ga)));
        for (
          var c = 0,
            d = z(document.getElementsByTagName('iframe')),
            e = d.next();
          !e.done;
          e = d.next()
        )
          gi(e.value) && c++;
        b += di('nif', c);
        c = window.google_unique_id;
        b += di('ifi', typeof c === 'number' ? c : 0);
        c = dh();
        b += '&eid=' + encodeURIComponent(c.join());
        b += '&top=' + (B === B.top ? 1 : 0);
        b += a.za ? '&qqid=' + encodeURIComponent(a.za) : di('pvsid', Rd(B));
        window.googletag && (b += '&gpt=1');
        c = Math.min(
          a.g.length - 1,
          Math.floor((a.A ? a.sa : performance.interactionCount || 0) / 50),
        );
        c >= 0 && ((c = a.g[c].latency), c >= 0 && (b += di('inp', c)));
        window.fetch(b, {
          keepalive: !0,
          credentials: 'include',
          redirect: 'follow',
          method: 'get',
          mode: 'no-cors',
        });
        a.pa();
      }
    },
    vi = function (a, b, c, d) {
      if (!b.hadRecentInput) {
        a.K += Number(b.value);
        Number(b.value) > a.S && (a.S = Number(b.value));
        a.U += 1;
        if ((c = hi(b, c, d))) (a.D += b.value), a.wa++;
        if (b.startTime - a.va > 5e3 || b.startTime - a.ya > 1e3)
          (a.va = b.startTime), (a.j = 0), (a.l = 0);
        a.ya = b.startTime;
        a.j += b.value;
        c && (a.l += b.value);
        a.j > a.ha &&
          ((a.ha = a.j), (a.Ba = a.l), (a.Aa = b.startTime + b.duration));
      }
    },
    ti = function (a, b) {
      var c = oi !== window.scrollX || pi !== window.scrollY ? [] : wi,
        d = xi();
      b = z(b.getEntries());
      for (var e = b.next(), f = {}; !e.done; f = { F: void 0 }, e = b.next())
        switch (((f.F = e.value), (e = f.F.entryType), e)) {
          case 'layout-shift':
            vi(a, f.F, c, d);
            break;
          case 'largest-contentful-paint':
            f = f.F;
            a.ua = Math.floor(f.renderTime || f.loadTime);
            a.ta = f.size;
            break;
          case 'first-input':
            e = f.F;
            a.qa = Number((e.processingStart - e.startTime).toFixed(3));
            a.ra = !0;
            a.g.some(
              (function (g) {
                return function (h) {
                  return v(h, 'entries').some(function (l) {
                    return (
                      g.F.duration === l.duration &&
                      g.F.startTime === l.startTime
                    );
                  });
                };
              })(f),
            ) || yi(a, f.F);
            break;
          case 'longtask':
            f = Math.max(0, f.F.duration - 50);
            a.I += f;
            a.R = Math.max(a.R, f);
            a.ga += 1;
            break;
          case 'event':
            yi(a, f.F);
            break;
          default:
            Vb(e);
        }
    },
    yi = function (a, b) {
      zi(a, b);
      var c = a.g[a.g.length - 1],
        d = a.P[b.interactionId];
      if (d || a.g.length < 10 || b.duration > c.latency)
        d
          ? (v(d, 'entries').push(b),
            (d.latency = Math.max(d.latency, b.duration)))
          : ((b = { id: b.interactionId, latency: b.duration, entries: [b] }),
            (a.P[b.id] = b),
            a.g.push(b)),
          a.g.sort(function (e, f) {
            return f.latency - e.latency;
          }),
          a.g.splice(10).forEach(function (e) {
            delete a.P[e.id];
          });
    },
    zi = function (a, b) {
      b.interactionId &&
        ((a.T = Math.min(a.T, b.interactionId)),
        (a.o = Math.max(a.o, b.interactionId)),
        (a.sa = a.o ? (a.o - a.T) / 7 + 1 : 0));
    },
    xi = function () {
      var a = v(Array, 'from')
          .call(Array, document.getElementsByTagName('iframe'))
          .filter(gi),
        b = []
          .concat(oa(fi()))
          .map(function (c) {
            return document.getElementById(c);
          })
          .filter(function (c) {
            return c !== null;
          });
      oi = window.scrollX;
      pi = window.scrollY;
      return (wi = [].concat(oa(a), oa(b)).map(function (c) {
        return c.getBoundingClientRect();
      }));
    },
    wi = [];
  var Ai = function (a) {
    this.i = K(a);
  };
  x(Ai, V);
  Ai.prototype.getVersion = function () {
    return T(this, 2);
  };
  var Bi = function (a) {
    this.i = K(a);
  };
  x(Bi, V);
  var Ci = function (a, b) {
      return N(a, 2, sc(b));
    },
    Di = function (a, b) {
      return N(a, 3, sc(b));
    },
    Ei = function (a, b) {
      return N(a, 4, sc(b));
    },
    Fi = function (a, b) {
      return N(a, 5, sc(b));
    },
    Gi = function (a, b) {
      return N(a, 9, sc(b));
    },
    Hi = function (a, b) {
      return Xc(a, 10, b);
    },
    Ii = function (a, b) {
      return N(a, 11, b == null ? b : ac(b));
    },
    Ji = function (a, b) {
      return N(a, 1, sc(b));
    },
    Ki = function (a, b) {
      return N(a, 7, b == null ? b : ac(b));
    };
  var Li =
    'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(
      ' ',
    );
  function Mi(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function Ni(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
          ? void 0
          : c.getHighEntropyValues) === 'function'
    );
  }
  function Oi(a) {
    if (!Ni(a)) return null;
    var b = Mi(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(Li).then(function (c) {
      b.uach != null || (b.uach = c);
      return c;
    });
    return (b.uach_promise = a);
  }
  function Pi(a) {
    var b;
    return Ii(
      Hi(
        Fi(
          Ci(
            Ji(
              Ei(
                Ki(
                  Gi(Di(new Bi(), a.architecture || ''), a.bitness || ''),
                  a.mobile || !1,
                ),
                a.model || '',
              ),
              a.platform || '',
            ),
            a.platformVersion || '',
          ),
          a.uaFullVersion || '',
        ),
        ((b = a.fullVersionList) == null
          ? void 0
          : b.map(function (c) {
              var d = new Ai();
              d = N(d, 1, sc(c.brand));
              return N(d, 2, sc(c.version));
            })) || [],
      ),
      a.wow64 || !1,
    );
  }
  function Qi(a) {
    var b, c;
    return (c =
      (b = Oi(a)) == null
        ? void 0
        : b.then(function (d) {
            return Pi(d);
          })) != null
      ? c
      : null;
  }
  var Ri = function (a) {
    this.i = K(a);
  };
  x(Ri, V);
  var Si = function (a) {
    this.i = K(a);
  };
  x(Si, V);
  var Ti = function (a) {
    var b = new Si();
    return Vc(b, 1, a);
  };
  function Ui(a, b, c) {
    try {
      Ab(!b._b_);
      var d = { d: J(a.data), p: a.lb };
      b._b_ = d;
    } catch (e) {
      pg(c, { methodName: 1298, L: e });
    }
  }
  var Vi = function (a, b, c) {
      this.g = a;
      this.J = b;
      this.j = c;
    },
    pg = function (a, b) {
      var c = Xh(a.J.V, 1e3),
        d = Eh(Ef),
        e = Xh(a.J.V, d);
      if (c || e) {
        var f = a.j,
          g = f.Oa,
          h = f.Na,
          l = f.Ia,
          k = f.ca,
          p = f.ab;
        f = f.Za;
        k = k();
        var m = b.L;
        try {
          var n = Eb(m == null ? void 0 : m.name) ? m.name : 'Unknown error';
        } catch (A) {
          n = 'e.name threw';
        }
        try {
          var r = Eb(m == null ? void 0 : m.message)
            ? m.message
            : 'Caught ' + m;
        } catch (A) {
          r = 'e.message threw';
        }
        try {
          var t = Eb(m == null ? void 0 : m.stack) ? m.stack : Error().stack;
          var y = t ? t.split(/\n\s*/) : [];
        } catch (A) {
          y = ['e.stack threw'];
        }
        t = y;
        y = new jf();
        y = fd(y, 5, 1e3);
        m = new gf();
        b = P(m, 1, H(b.methodName), 0);
        b = gd(b, 2, n);
        b = gd(b, 3, r);
        b = Lc(b, 4, t, rc);
        b = Cc(b);
        b = Wc(y, 1, kf, b);
        n = new hf();
        g = fd(n, 1, g);
        g = Lc(g, 2, k, ec);
        h = gd(g, 3, h);
        h = Cc(h);
        h = Vc(b, 2, h);
        h = Bc(Cc(h));
        g = new ff();
        l = gd(g, 1, l);
        p = p == null ? void 0 : p();
        p = P(l, 2, fc(p), 0);
        f = f == null ? void 0 : f();
        f = Lc(p, 3, f, rc);
        f = Cc(f);
        f = Wc(h, 4, lf, f);
        c && a.g.rb(f);
        e &&
          (fd(f, 5, d),
          (c = f.i),
          Oc(c, c[D] | 0, kf, 1),
          (c = Rc(f, gf, 1)),
          c != null && N(c, 4),
          a.g.qb(f));
      }
    };
  function Wi(a) {
    var b = {};
    b = ((b[0] = uh()), b);
    X(ah).j(a, b);
  }
  var Xi = {},
    Yi =
      ((Xi[253] = !1),
      (Xi[246] = []),
      (Xi[150] = ''),
      (Xi[263] = !1),
      (Xi[36] = /^true$/.test('false')),
      (Xi[264] = !1),
      (Xi[172] = null),
      (Xi[260] = void 0),
      (Xi[251] = null),
      Xi),
    Zi = function () {
      this.g = !1;
    };
  function $i(a) {
    X(Zi).g = !0;
    return Yi[a];
  }
  function aj(a, b) {
    X(Zi).g = !0;
    Yi[a] = b;
  }
  var bj =
    /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js)/;
  function cj(a) {
    var b = a.Ja;
    var c = a.hb;
    var d = a.Pa;
    var e = a.fb;
    var f = a.Xa;
    var g = a.bb;
    var h = b ? !bj.test(b.src) : !0;
    a = {};
    b = {};
    var l = {};
    return (
      (l[3] =
        ((a[3] = function () {
          return !h;
        }),
        (a[59] = function () {
          var k = ua.apply(0, arguments),
            p = v(k, 'includes'),
            m = String,
            n;
          var r = r === void 0 ? window : r;
          var t;
          r =
            (t =
              (n = Bd(r.location.href.match(zd)[3] || null)) == null
                ? void 0
                : n.split('.')) != null
              ? t
              : [];
          r.length < 2
            ? (n = null)
            : ((n = r[r.length - 1]),
              (n =
                n === 'uk' || n === 'br' || n === 'nz'
                  ? r.length < 3
                    ? null
                    : Nd(r.splice(r.length - 3).join('.'))
                  : Nd(r.splice(r.length - 2).join('.'))));
          return p.call(k, m(n));
        }),
        (a[74] = function () {
          return v(ua.apply(0, arguments), 'includes').call(
            ua.apply(0, arguments),
            String(Nd(window.location.href)),
          );
        }),
        (a[61] = function () {
          return e;
        }),
        (a[63] = function () {
          return e || g === '.google.ch';
        }),
        (a[73] = function (k) {
          return v(d, 'includes').call(d, Number(k));
        }),
        a)),
      (l[4] =
        ((b[1] = function () {
          return f;
        }),
        (b[13] = function () {
          return c || 0;
        }),
        b)),
      (l[5] = {}),
      l
    );
  }
  function dj(a, b) {
    var c = $i(246);
    c = yc(c);
    c = hd(qh, c);
    if (!S(c, xg, 1, O()).length && S(a, xg, 1, O()).length) {
      var d = S(a, xg, 1, O());
      Xc(c, 1, d);
    }
    !S(c, oh, 2, O()).length &&
      S(a, oh, 2, O()).length &&
      ((d = S(a, oh, 2, O())), Xc(c, 2, d));
    Sc(c, ph, 5) === void 0 &&
      Sc(a, ph, 5) !== void 0 &&
      ((a = R(a, ph, 5)), Vc(c, 5, a));
    aj(246, J(c));
    Oh({ Ya: c, B: cj(b), Ca: 2, config: { ma: b.ma } });
    b.Pa.forEach(ch);
  }
  var ej = function (a, b, c) {
    Vi.call(this, a, b, c);
    this.j = c;
  };
  x(ej, Vi);
  var fj = qa(['https://pagead2.googlesyndication.com/pagead/ppub_config']),
    gj = qa(['https://securepubads.g.doubleclick.net/pagead/ppub_config']);
  function hj(a, b, c, d, e) {
    a = a.location.host;
    var f = Dd(b.src, 'domain');
    b = Dd(b.src, 'network-code');
    if (a || f || b) {
      var g = new u.Map();
      a && g.set('ippd', a);
      f && g.set('pppd', f);
      b && g.set('pppnc', b);
      a = g;
    } else a = void 0;
    a
      ? ((c = c ? Gd(fj) : Gd(gj)), (c = Hd(c, a)), ij(c, d, e))
      : e(new u.globalThis.Error('no provided or inferred data'));
  }
  function ij(a, b, c) {
    var d = new u.globalThis.XMLHttpRequest();
    d.open('GET', a.toString(), !0);
    d.withCredentials = !1;
    d.onload = function () {
      d.status < 300
        ? (ai('13', window), b(d.status === 204 ? '' : d.responseText))
        : c(new u.globalThis.Error('resp:' + d.status));
    };
    d.onerror = function () {
      return void c(
        new u.globalThis.Error('s:' + d.status + ' rs:' + d.readyState),
      );
    };
    d.send();
  }
  var jj = function (a, b, c) {
      this.J = a;
      this.oa = b;
      this.da = c;
      this.g = [];
    },
    nj = function (a, b, c, d, e) {
      var f = e == null ? void 0 : T(Tc(e, jd, 1), 1);
      (f == null ? 0 : f.length) &&
      v(b.location.hostname, 'includes').call(b.location.hostname, f)
        ? (kj(a), lj(a, { mb: e }))
        : ((q = ['http:', 'https:']), v(q, 'includes')).call(
              q,
              b.location.protocol,
            )
          ? c
            ? (kj(a),
              hj(
                Kd(b),
                c,
                d,
                function (g) {
                  return void lj(a, { ob: g });
                },
                function (g) {
                  lj(a, { error: g });
                },
              ))
            : mj(a, 5)
          : mj(a, 4);
    },
    kj = function (a) {
      $i(260);
      aj(260, function (b) {
        a.j !== void 0 || a.l ? b(a.j, a.l) : a.g.push(b);
      });
    },
    lj = function (a, b) {
      var c = b.ob;
      var d = b.mb;
      b = b.error;
      a.j = c != null ? c : d == null ? void 0 : JSON.stringify(J(d));
      a.l = b;
      d = z(a.g);
      for (var e = d.next(); !e.done; e = d.next()) (e = e.value), e(a.j, a.l);
      a.g.length = 0;
      mj(a, b ? 6 : c ? 3 : 2);
    },
    mj = function (a, b) {
      var c = Eh(If);
      Xh(a.J.V, c) &&
        a.oa.Ka.Ra.Ha.nb.W({
          Z: c,
          source: b,
          Ua:
            !C('Android') || Oa() || Ma() || La() || C('Silk')
              ? Oa()
                ? 2
                : (Ka() ? 0 : C('Edge'))
                  ? 3
                  : Ma()
                    ? 4
                    : (Ka() ? 0 : C('Trident') || C('MSIE'))
                      ? 5
                      : (!C('iPad') && !C('iPhone')) ||
                          Na() ||
                          Oa() ||
                          (Ka() ? 0 : C('Coast')) ||
                          Ma() ||
                          !C('AppleWebKit')
                        ? La()
                          ? 6
                          : Na()
                            ? 7
                            : C('Silk')
                              ? 8
                              : 0
                        : 9
              : 1,
        });
      a = a.da;
      var d = Eh(If);
      if (Xh(a.J.V, d)) {
        var e = a.j,
          f = e.Ia,
          g = e.ca;
        c = e.Na;
        e = e.Oa;
        var h = new ef();
        e = fd(h, 2, e);
        f = gd(e, 3, f);
        e = Math;
        h = e.trunc;
        a: {
          if (u.globalThis.performance) {
            var l = performance.timeOrigin + performance.now();
            if (v(Number, 'isFinite').call(Number, l) && l > 0) break a;
          }
          l = Date.now();
          l = v(Number, 'isFinite').call(Number, l) && l > 0 ? l : 0;
        }
        f = fd(f, 1, h.call(e, l));
        g = g();
        g = Lc(f, 4, g, ec);
        d = fd(g, 5, d);
        c = gd(d, 6, c);
        d = new cf();
        g = new bf();
        b = N(g, 1, H(b));
        b = Cc(b);
        b = Wc(d, 10, df, b);
        b = Cc(b);
        b = Vc(c, 7, b);
        b = Cc(b);
        a.g.sb(b);
      }
    };
  var oj = (function (a) {
      return function (b) {
        b = JSON.parse(b);
        if (!Array.isArray(b))
          throw Error(
            'Expected jspb data to be an array, got ' + ya(b) + ': ' + b,
          );
        mb(b, 34);
        return new a(b);
      };
    })(Ri),
    pj = (function (a) {
      return function () {
        var b;
        (b = a[fb]) || ((b = new a()), mb(b.i, 34), (b = a[fb] = b));
        return b;
      };
    })(Ri);
  function qj(a, b) {
    try {
      var c = Bb;
      if (!Eb(a)) {
        var d,
          e,
          f =
            (e =
              (d = typeof c === 'function' ? c() : c) == null
                ? void 0
                : d.concat('\n')) != null
              ? e
              : '';
        throw Error(f + String(a));
      }
      return oj(a);
    } catch (g) {
      return pg(b, { methodName: 838, L: g }), pj();
    }
  }
  function rj() {
    var a;
    return (a = B.googletag) != null ? a : (B.googletag = { cmd: [] });
  }
  function sj(a, b) {
    var c = rj();
    c.hasOwnProperty(a) || (c[a] = b);
  }
  var tj = qa([
      'https://pagead2.googlesyndication.com/pagead/managed/js/gpt/',
      '/pubads_impl.js',
    ]),
    uj = qa([
      'https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/',
      '/pubads_impl.js',
    ]);
  function vj() {
    var a = sttc,
      b = wj(),
      c = b.J,
      d = b.oa,
      e = b.da;
    Za(function (A) {
      pg(e, { methodName: 1189, L: A });
    });
    b = rj();
    a = qj(a, e);
    Ab(!X(Zi).g);
    v(Object, 'assign').call(Object, Yi, b._vars_);
    b._vars_ = Yi;
    a &&
      (Zc(a, 3) && aj(36, !0),
      T(a, 6) && aj(150, T(a, 6)),
      Zc(a, 12) && aj(263, !0));
    var f = Tc(a, qh, 1),
      g = {
        fb: Zc(a, 5),
        hb: $c(a, 2),
        Pa: Fc(a, 10, gc, O()),
        Xa: $c(a, 7),
        bb: T(a, 6),
        ma: Zc(a, 4),
      },
      h = R(a, kd, 9),
      l = window,
      k = l.document;
    sj('_loaded_', !0);
    sj('cmd', []);
    var p,
      m = (p = xj(k)) != null ? p : yj(k);
    zj(f, l, v(Object, 'assign').call(Object, {}, { Ja: m }, g));
    try {
      si();
    } catch (A) {}
    ai('1', l);
    p = Aj(m);
    f = (m == null ? void 0 : m.crossOrigin) === 'anonymous';
    g = Eh(Gf);
    if (Xh(c.V, g)) {
      var n = d.Ka.Ra.Ha;
      n.gb.W({
        Z: g,
        la: (m == null ? void 0 : m.crossOrigin) === 'anonymous',
        na: Bj(m),
      });
      n.cb.W({
        Z: g,
        la: f,
        na:
          Bd(p.toString().match(zd)[3] || null) ===
          'pagead2.googlesyndication.com',
      });
    }
    var r = !1;
    Ui(
      {
        data: Cc(Ti(a)),
        lb: function () {
          return r;
        },
      },
      b,
      e,
    );
    g = !1;
    if (!Cj(k)) {
      n = 'gpt-impl-' + Math.random();
      try {
        yd(
          k,
          Ed(p, { id: n, nonce: vd(document), Fa: f ? 'anonymous' : void 0 }),
        );
      } catch (A) {}
      k.getElementById(n) && (Dh(Df) ? (g = !0) : (b._loadStarted_ = !0));
    }
    if (Dh(Df) ? !g : !b._loadStarted_) {
      g = Qd('SCRIPT');
      wd(g, p);
      g.async = !0;
      f && (g.crossOrigin = 'anonymous');
      p = k.body;
      f = k.documentElement;
      var t, y;
      ((y = (t = k.head) != null ? t : p) != null ? y : f).appendChild(g);
      Dh(Df) || (b._loadStarted_ = !0);
    }
    if (l === l.top)
      try {
        kg(l, Tc(a, Yh, 13));
      } catch (A) {
        pg(e, { methodName: 1209, L: A });
      }
    nj(new jj(c, d, e), l, m, Bj(m), h);
    Dh(Ff) &&
      Dj(l, function () {
        r = !0;
      });
    T(a, 14) && og(l.document, qg(T(a, 14), Bj(m)), e);
  }
  function Dj(a, b) {
    var c = function (d) {
      (d.data != null && d.data !== '') ||
        d.origin.indexOf('android-app://') !== 0 ||
        (b(), a.removeEventListener('message', c));
    };
    a.addEventListener('message', c);
  }
  function wj() {
    var a = Rd(window),
      b = new Wh(),
      c = new Af(11, 'm202503200101', 1e3);
    return {
      oa: c,
      J: b,
      da: new ej(c, b, {
        Oa: a,
        Na: window.document.URL,
        Ia: 'm202503200101',
        ca: dh,
      }),
    };
  }
  function xj(a) {
    return (a = a.currentScript) ? a : null;
  }
  function yj(a) {
    var b;
    a = z((b = a.scripts) != null ? b : []);
    for (b = a.next(); !b.done; b = a.next())
      if (((b = b.value), v(b.src, 'includes').call(b.src, '/tag/js/gpt')))
        return b;
    return null;
  }
  function Aj(a) {
    a = Bj(a) ? Gd(tj, 'm202503200101') : Gd(uj, 'm202503200101');
    var b = Eh(Jf);
    return b ? Hd(a, new u.Map([['cb', b]])) : a;
  }
  function zj(a, b, c) {
    aj(172, c.Ja);
    dj(a, c);
    Wi(12);
    Wi(5);
    (a = Qi(b)) &&
      a.then(function (d) {
        return void aj(251, JSON.stringify(J(d)));
      });
    Pd(X(Ch).l(Kf.g, Kf.defaultValue), b.document);
  }
  function Cj(a) {
    var b = xj(a);
    return (
      a.readyState === 'complete' ||
      a.readyState === 'loaded' ||
      !(b == null || !b.async)
    );
  }
  function Bj(a) {
    return (
      !(a == null || !a.src) &&
      Bd(a.src.match(zd)[3] || null) === 'pagead2.googlesyndication.com'
    );
  }
  try {
    vj();
  } catch (a) {
    try {
      pg(wj().da, { methodName: 420, L: a });
    } catch (b) {}
  }
}).call(
  this,
  '[[[[null,7,null,[null,0.1]],[null,null,null,[],[[[4,null,83],[null,null,null,["1 bidderRequests.bids bidder userIdAsEids.source","2 bidderRequests.bids.userIdAsEids source provider","3 bidderRequests.bids bidder ortb2Imp.ext.tid?","5 bidderRequests.bids bidder mediaTypes.banner","6 bidderRequests.bids bidder mediaTypes.native?","7 bidderRequests.bids bidder mediaTypes.video","8 bidderRequests.bids bidder ortb2Imp.ext.gpid?","9 bidderRequests.bids bidder ortb2.site.content.data.ext.segment?","10 bidderRequests.bids bidder ortb2.site.page","11 bidderRequests.bids bidder ortb2.user.data.segment?","12 bidderRequests.bids bidder ortb2.user.data.ext.segtax?","13 bidsReceived adId creativeId","14 bidderRequests.bids.userIdAsEids source uids.ext.provider","15 bidderRequests.bids.userIdAsEids source uids.atype","16 bidderRequests.bids.userIdAsEids source uids.length","17 bidsReceived adId ttl","18 bidsReceived adId meta.primaryCatId","19 bidsReceived adId meta.secondaryCatIds"]]]],657770675],[null,659575329,null,null,[[[4,null,83],[null,1]]]],[null,612427114,null,null,[[[4,null,83],[null,100]]]],[null,663827948,null,[null,-1]],[null,659579380,null,[null,-1],[[[4,null,83],[null,5000]]]],[null,659579379,null,[null,-1],[[[4,null,83],[null,60000]]]],[null,null,null,[null,null,null,["1 dbm\/(ad|clkk)"]],[[[4,null,83],[null,null,null,["1 dbm\/(ad|clkk)","2 (adsrvr|adserver)\\\\.org\/bid\/","3 criteo.com\/(delivery|[a-z]+\/auction)","4 yahoo.com\/bw\/[a-z]+\/imp\/","5 (adnxs|adnxs-simple).com\/it","6 amazon-adsystem.com\/[a-z\/]+\/impb"]]]],655300591],[null,643045660,null,null,[[[4,null,83],[null,1]]]],[null,612427113,null,null,[[[4,null,83],[null,100]]]],[null,699982590,null,null,[[[4,null,83],[null,100]]]],[null,732179314,null,[null,10]],[45681222,null,null,[]],[null,578655462,null,[null,1000]],[698519058,null,null,[1]],[667794963,null,null,[]],[null,704895900,null,[null,1000]],[null,680683506,null,[null,1000]],[697841467,null,null,[1]],[null,625028672,null,[null,100]],[null,629733890,null,[null,1000]],[null,695925491,null,[null,20]],[null,null,null,[],null,489560439],[null,null,null,[],null,505762507],[null,1921,null,[null,72]],[null,1920,null,[null,12]],[null,426169222,null,[null,1000]],[null,377289019,null,[null,10000]],[null,529,null,[null,20]],[null,573282293,null,[null,0.01]],[null,684553008,null,[null,100]],[45624259,null,null,[]],[45627954,null,null,[1]],[45646888,null,null,[]],[45622305,null,null,[1]],[null,447000223,null,[null,0.01]],[360245597,null,null,[1]],[null,716359135,null,[null,10]],[null,716359138,null,[null,50]],[null,716359132,null,[null,100]],[null,716359134,null,[null,1000]],[null,716359137,null,[null,0.25]],[null,716359136,null,[null,10]],[null,716359133,null,[null,5]],[629201869,null,null,[1]],[null,729624435,null,[null,10000]],[null,729624436,null,[null,500]],[null,550718589,null,[null,250],[[[3,[[4,null,15,null,null,null,null,["22814497764"]],[4,null,15,null,null,null,null,["6581"]],[4,null,15,null,null,null,null,["18190176"]],[4,null,15,null,null,null,null,["21881754602"]],[4,null,15,null,null,null,null,["6782"]],[4,null,15,null,null,null,null,["309565630"]],[4,null,15,null,null,null,null,["22306534072"]],[4,null,15,null,null,null,null,["7229"]],[4,null,15,null,null,null,null,["28253241"]],[4,null,15,null,null,null,null,["1254144"]],[4,null,15,null,null,null,null,["21732118914"]],[4,null,15,null,null,null,null,["5441"]],[4,null,15,null,null,null,null,["162717810"]],[4,null,15,null,null,null,null,["51912183"]],[4,null,15,null,null,null,null,["23202586"]],[4,null,15,null,null,null,null,["44520695"]],[4,null,15,null,null,null,null,["1030006"]],[4,null,15,null,null,null,null,["21830601346"]],[4,null,15,null,null,null,null,["23081961"]],[4,null,15,null,null,null,null,["21880406607"]],[4,null,15,null,null,null,null,["93656639"]],[4,null,15,null,null,null,null,["1020351"]],[4,null,15,null,null,null,null,["5931321"]],[4,null,15,null,null,null,null,["3355436"]],[4,null,15,null,null,null,null,["22106840220"]],[4,null,15,null,null,null,null,["22875833199"]],[4,null,15,null,null,null,null,["32866417"]],[4,null,15,null,null,null,null,["8095840"]],[4,null,15,null,null,null,null,["71161633"]],[4,null,15,null,null,null,null,["22668755367"]],[4,null,15,null,null,null,null,["6177"]],[4,null,15,null,null,null,null,["147246189"]],[4,null,15,null,null,null,null,["22152718"]],[4,null,15,null,null,null,null,["21751243814"]],[4,null,15,null,null,null,null,["22013536576"]],[4,null,15,null,null,null,null,["4444"]],[4,null,15,null,null,null,null,["44890869"]],[4,null,15,null,null,null,null,["248415179"]],[4,null,15,null,null,null,null,["5293"]],[4,null,15,null,null,null,null,["21675937462"]],[4,null,15,null,null,null,null,["21726375739"]],[4,null,15,null,null,null,null,["1002212"]],[4,null,15,null,null,null,null,["6718395"]]]],[null,500]]]],[null,575880738,null,[null,10]],[null,586681283,null,[null,100]],[null,45679761,null,[null,30000]],[null,732179799,null,[null,250]],[736264649,null,null,[1]],[713290237,null,null,[1]],[null,635239304,null,[null,100]],[null,618260805,null,[null,10]],[696192462,null,null,[1]],[null,532520346,null,[null,30]],[null,630428304,null,[null,100]],[null,624264750,null,[null,-1]],[607106222,null,null,[1]],[null,398776877,null,[null,60000]],[null,374201269,null,[null,60000]],[null,371364213,null,[null,60000]],[null,682056200,null,[null,100]],[null,376149757,null,[null,0.0025]],[570764855,null,null,[1]],[null,null,579921177,[null,null,"control_1\\\\.\\\\d"]],[null,570764854,null,[null,50]],[578725095,null,null,[1]],[684149381,null,null,[1]],[377936516,null,null,[1]],[null,599575765,null,[null,1000]],[null,null,2,[null,null,"1-0-41"]],[null,626653285,null,[null,1000]],[null,626653286,null,[null,2]],[null,642407444,null,[null,10]],[686634849,null,null,[1]],[715057423,null,null,[1]],[726102637,null,null,[1]],[730429031,null,null,[1]],[730512684,null,null,[1]],[null,506394061,null,[null,100]],[null,733365673,null,[null,2],[[[4,null,59,null,null,null,null,["1282204929"]],[null,1]]]],[null,null,null,[null,null,null,["95335247"]],null,631604025],[null,694630217,null,[null,670]],[null,null,null,[],null,489],[715133891,null,null,[1]],[392065905,null,null,null,[[[3,[[4,null,68],[4,null,83]]],[1]]]],[680005527,null,null,[1]],[null,360245595,null,[null,500]],[null,715129739,null,[null,30]],[null,681088477,null,[null,100]],[676934885,null,null,[1],[[[4,null,59,null,null,null,null,["4214592683","3186860772","2930824068","4127372480","3985777170","2998550476","1946945953","2901923877","1931583037","733037847","287365726","396735883","2445204049"]],[]]]],[730602489,null,null,[1]],[732257404,null,null,[1]],[703552063,null,null,[1]],[703102329,null,null,[1]],[703102335,null,null,[1]],[703102334,null,null,[1]],[703102333,null,null,[1]],[703102330,null,null,[1]],[703102332,null,null,[1]],[563462360,null,null,[1]],[555237688,null,null,[],[[[2,[[4,null,70,null,null,null,null,["browsing-topics"]],[1,[[4,null,27,null,null,null,null,["isSecureContext"]]]]]],[1]]]],[555237686,null,null,[]],[507033477,null,null,[1]],[null,638742197,null,[null,500]],[null,514795754,null,[null,2]],[null,null,null,[null,null,null,["679602798","965728666","3786422334","4071951799"]],null,603422363],[590730356,null,null,null,[[[12,null,null,null,4,null,"Chrome\\\\\/((?!1[0-1]\\\\d)(?!12[0-3])\\\\d{3,})",["navigator.userAgent"]],[1]]]],[716778109,null,null,[1]],[564724551,null,null,null,[[[12,null,null,null,4,null,"Chrome\\\\\/((?!10\\\\d)(?!11[0-6])\\\\d{3,})",["navigator.userAgent"]],[1]]]],[null,596918936,null,[null,500]],[null,607730666,null,[null,10]],[647262744,null,null,[1]],[616896918,null,null,[1]],[638632925,null,null,[1]],[647331452,null,null,[1]],[647331451,null,null,[1]],[null,null,null,[null,null,null,["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW\/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]],null,1934],[485990406,null,null,[]]],[[3,[[null,[[1337,[[77,null,null,[1]],[78,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]],[84,null,null,[1]],[188,null,null,[1]]]]]],[1000,[[31072561]],[2,[[4,null,70,null,null,null,null,["run-ad-auction"]],[12,null,null,null,4,null,"FLEDGE_GAM_EXTERNAL_TESTER",["navigator.userAgent"]]]]],[1,[[31075124,[[null,514795754,null,[null,4]]]]],[4,null,74,null,null,null,null,["1585821863","3976716532"]],59],[1,[[31080344],[95345212,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]],[95347233],[95348047,[[null,514795754,null,[null,4]],[null,641937776,null,[null,38912]]]],[95355998,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]],[95355999,[[null,514795754,null,[null,4]],[null,697023992,null,[null,250]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]],[95356000,[[null,514795754,null,[null,4]],[null,697023992,null,[null,500]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]],[95356372,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]],[1,[[12,null,null,null,4,null,".* Edg\/.*",["navigator.userAgent"]]]]]],59],[10,[[31088080],[31088081]]],[50,[[31088251],[31088252]],null,122,null,null,null,null,null,null,null,null,null,4],[3,[[31089135],[31089136,[[null,607730666,null,[null,1]]]],[31089137,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]],[1,[[12,null,null,null,4,null,".* Edg\/.*",["navigator.userAgent"]]]]]],59],[1,[[31089990],[31089992,[[null,514795754,null,[null,4]],[null,641937776,null,[null,38912]]]]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]],[1,[[12,null,null,null,4,null,".* Edg\/.*",["navigator.userAgent"]]]]]],59],[null,[[31090146,[[null,null,null,[null,null,null,["v","1-0-41"]],null,1]]],[31090147,[[null,null,2,[null,null,"1-0-41"]]]]]],[null,[[31090560,[[null,514795754,null,[null,4]],[null,null,null,[null,null,null,["https:\/\/td.doubleclick.net","https:\/\/f.creativecdn.com"]],null,663711111],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]],[95335986],[95346223,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,38912]]]],[95353416,[[null,514795754,null,[null,4]],[null,641937776,null,[null,38912]]]]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]],[1,[[12,null,null,null,4,null,".* Edg\/.*",["navigator.userAgent"]]]]]],59],[null,[[44798283,[[null,514795754,null,[null,4]]]]],[2,[[4,null,70,null,null,null,null,["run-ad-auction"]],[1,[[4,null,63]]]]],59],[480,[[83321072],[83321073,[[null,612427113,null,[null,100]]]]],null,136],[10,[[83321253,[[null,612427113,null,[null,100]]]],[83321254,[[null,612427113,null,[null,100]]]]],null,136],[10,[[83321266,[[null,612427113,null,[null,100]]]],[83321267]],null,136],[null,[[95331143],[95331207]],[2,[[4,null,9,null,null,null,null,["fetch"]],[4,null,9,null,null,null,null,["navigator.getInterestGroupAdAuctionData"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,["1585821863","3976716532"]]]],[1,[[12,null,null,null,4,null,".* Edg\/.*",["navigator.userAgent"]]]]]],59],[10,[[95332149],[95332150,[[616896918,null,null,[]]]]],null,59],[10,[[95347484],[95347486,[[null,682021787,null,[null,5]]]],[95347487],[95347488,[[null,682021787,null,[null,2]]]],[95347489,[[null,682021787,null,[null,5]]]],[95347490,[[null,682021787,null,[null,10]]]]],null,116],[50,[[95355140],[95355141,[[45646888,null,null,[1]]]]]],[50,[[95355263],[95355264,[[45627954,null,null,[]]]]]],[null,[[676982960],[676982998]]]]],[12,[[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,59],[40,[[95340252],[95340253,[[662101537,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71,null,null,null,800,null,null,null,null,null,5],[40,[[95340254],[95340255,[[662101539,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71,null,null,null,800,null,null,null,null,null,5]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]]]],[5,[[50,[[31067420],[31067421,[[360245597,null,null,[]]]],[31077191]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[1000,[[31084129,null,[2,[[2,[[8,null,null,1,null,-1],[7,null,null,1,null,10]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[1000,[[31084130,null,[2,[[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[50,[[31085776],[31085777,[[45624259,null,null,[1]]]]],null,114],[50,[[31085778,[[45624259,null,null,[1]]]]],[4,null,59,null,null,null,null,["2452487976"]],114],[100,[[31086814],[31086815,[[null,665058368,null,[null,1]]]]]],[1,[[31087707]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[1,[[31087708]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[null,[[31087882],[31087883],[31087884]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[1,[[31089417],[31089418,[[662648078,null,null,[1]]]]],null,139,null,null,null,998,null,null,null,null,null,8],[1,[[31089419],[31089420]],[4,null,61],139,null,null,null,998,null,null,null,null,null,8],[10,[[31089588],[31089589,[[null,707091695,null,[null,1]]]],[31089590,[[null,707155067,null,[null,1]],[null,707091695,null,[null,1]]]]]],[100,[[31090591],[31090592,[[726064440,null,null,[1]]]]]],[100,[[31090593],[31090594,[[726064441,null,null,[1]]]]]],[10,[[31090811],[31090812,[[null,532520346,null,[null,120]]]]]],[100,[[31090916],[31090917,[[45681222,null,null,[1]]]]]],[100,[[31091040],[31091041,[[719350044,null,null,[1]]]]]],[100,[[31091114],[31091115,[[734646072,null,null,[1]]]]]],[100,[[31091183],[31091184,[[null,723123766,null,[null,100]]]]]],[100,[[31091185],[31091186,[[null,735866756,null,[null,100]]]]]],[10,[[31091187],[31091188,[[736264896,null,null,[1]]]]]],[100,[[31091199],[31091200,[[734650244,null,null,[1]]]]]],[100,[[31091201],[31091202,[[736498457,null,null,[1]]]]]],[1000,[[31091225,[[null,24,null,[null,31091225]]],[6,null,null,13,null,31091225]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31091226,[[null,24,null,[null,31091226]]],[6,null,null,13,null,31091226]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[10,[[31091235],[31091236,[[720351949,null,null,[1]]]]]],[10,[[31091245],[31091246,[[732327994,null,null,[1]]]]]],[10,[[31091247],[31091248,[[738434219,null,null,[1]]]]]],[10,[[31091249],[31091250,[[736859238,null,null,[1]]]]]],[10,[[31091251],[31091252,[[737703593,null,null,[1]]]]]],[10,[[31091253],[31091254,[[736498582,null,null,[1]]]]]],[10,[[31091255],[31091256,[[737666266,null,null,[1]]]]]],[10,[[31091257],[31091258,[[736888757,null,null,[1]]]]]],[1000,[[31091281,[[null,24,null,[null,31091281]]],[6,null,null,13,null,31091281]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31091282,[[null,24,null,[null,31091282]]],[6,null,null,13,null,31091282]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[50,[[95353384],[95353385,[[667794963,null,null,[1]]]]]]]],[9,[[1000,[[31083577]],[4,null,13,null,null,null,null,["cxbbhbxm"]]]]],[2,[[10,[[31084489],[31084490]],null,null,null,null,32,null,null,142,1],[null,[[31084528],[31084529]],null,null,null,null,36,900,null,166,1],[1000,[[31084739,[[null,612427114,null,[null,100]]]]],[4,null,6,null,null,null,null,["31065645"]]],[10,[[31084865],[31084866]],null,null,null,null,35,null,null,166,1],[1000,[[31087377,null,[2,[[4,null,86],[4,null,6,null,null,null,null,["31065644"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31087378,null,[2,[[4,null,86],[4,null,6,null,null,null,null,["31065645"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31087490,null,[2,[[1,[[4,null,86]]],[4,null,6,null,null,null,null,["31065644"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31087491,null,[2,[[1,[[4,null,86]]],[4,null,6,null,null,null,null,["31065645"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1,[[31090361,null,[12,null,null,null,13,null,".*userId.*",["installedModules"]]]]],[50,[[31090599],[31090600,[[null,null,null,null,[[[4,null,83],[null,null,null,["1 bidderRequests.bids bidder userIdAsEids.source","2 bidderRequests.bids.userIdAsEids source provider","3 bidderRequests.bids bidder ortb2Imp.ext.tid?","5 bidderRequests.bids bidder mediaTypes.banner","6 bidderRequests.bids bidder mediaTypes.native?","7 bidderRequests.bids bidder mediaTypes.video","8 bidderRequests.bids bidder ortb2Imp.ext.gpid?","9 bidderRequests.bids bidder ortb2.site.content.data.ext.segment?","10 bidderRequests.bids bidder ortb2.site.page","11 bidderRequests.bids bidder ortb2.user.data.segment?","12 bidderRequests.bids bidder ortb2.user.data.ext.segtax?","13 bidsReceived adId creativeId","14 bidderRequests.bids.userIdAsEids source uids.ext.provider","15 bidderRequests.bids.userIdAsEids source uids.atype","16 bidderRequests.bids.userIdAsEids source uids.length","17 bidsReceived adId ttl","18 bidsReceived adId meta.primaryCatId","19 bidsReceived adId meta.secondaryCatIds","21 adUnits adUnitId ortb2Imp.ext.data.pbadslot"]]]],657770675]]]],[4,null,83],129],[10,[[31090843],[31090844,[[725693774,null,null,[1]]]]],null,null,null,null,null,null,null,198,1],[10,[[31090914],[31090915,[[729624434,null,null,[1]]]]],null,null,null,null,null,100,null,198,1],[10,[[31091084],[31091085,[[630167509,null,null,[1]]]]],null,null,null,null,null,null,null,202],[10,[[31091119],[31091120,[[732179798,null,null,[1]]]]],null,null,null,null,null,600,null,198,1],[10,[[31091189],[31091190,[[730909248,null,null,[1]]]],[31091191,[[730909249,null,null,[1]],[730909248,null,null,[1]]]],[31091192,[[730909248,null,null,[1]],[730909250,null,null,[1]]]],[31091193,[[730909248,null,null,[1]],[730909251,null,null,[1]]]]],null,null,null,null,null,200,null,198,1],[1,[[31091203],[31091204,[[706016261,null,null,[1]]]]],null,null,null,null,null,null,null,102],[10,[[95342027],[95342028]],[4,null,83],129],[50,[[95349880],[95349881,[[null,null,null,null,[[[4,null,83],[null,null,null,["1 dbm\/(ad|clkk)","2 (adsrvr|adserver)\\\\.org\/bid\/","3 criteo.com\/(delivery|[a-z]+\/auction)","4 yahoo.com\/bw\/[a-z]+\/imp\/","5 (adnxs|adnxs-simple).com\/it","6 amazon-adsystem.com\/[a-z\/]+\/impb","7 temu.com\/api\/[a-z0-9]+\/ads","8 temu.com\/[a-z0-9]+\/impr"]]]],655300591]]]],[4,null,83],129],[50,[[95351361],[95351362,[[null,null,null,null,[[[4,null,83],[]]],655300591]]]],[4,null,83],129],[50,[[95351363],[95351364,[[null,null,null,null,[[[4,null,83],[]]],657770675]]]],[4,null,83],129]]],[27,[[50,[[31090502,null,[2,[[4,null,59,null,null,null,null,["1282204929","2762681000"]],[8,null,null,17,null,0]]]],[31090503,[[728394046,null,null,[1]]],[2,[[4,null,59,null,null,null,null,["1282204929","2762681000"]],[8,null,null,17,null,0]]]]]]]],[4,[[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]],null,78]]]],null,null,[null,1000,1,1000]],null,null,null,1,".google.co.uk",7,null,[["globo.com",null,"https:\/\/g1.globo.com\/sp\/sao-paulo\/noticia\/2023\/07\/04\/ze-celso-e-internado-apos-incendio-atingir-apartamento-onde-mora-em-sp.ghtml",null,null,["1009127","107430338","122331895","136431902","138871148","143394101","1513505","162717810","170737076","17192557","175759447","175840252","211003152","21618554041","21671350435","21700180024","21725819945","21737107378","21831561254","21833905170","21842480936","21939239661","22065771467","22243774984","22247219933","22466671215","22487499523","22717329971","22787307354","22876227373","22877679933","22906616360","22917490941","269933763","282451443","38577695","43606300","59526924","67894880","7047","7103","7805314","85042905","95377733"]],[[["21737107378",null,2]]],[[["7047",null,1,null,[[1]]],["21671350435",null,1,null,[[1]]],["162717810",null,1,null,[[1]]],["136431902",null,1,null,[[1]]],["21618554041",null,1,null,[[1]]],["21725819945",null,1,null,[[1]]],["22787307354",null,1,null,[[1]]],["43606300",null,1,null,[[1]]],["85042905",null,1,null,[[1]]],["95377733",null,1,null,[[1]]]]],null,null,[["85042905",[["justtag.com",null,1],["liveintent.com",null,1],["utiq.com",null,1],["liveramp.com",null,1],["intimatemerger.com",null,1],["openx.net",null,1],["liveintent.indexexchange.com",null,1],["bidswitch.net",null,1],["euid.eu",null,1],["uidapi.com",null,1],["yahoo.com",null,1],["liveintent.triplelift.com",null,1],["audigent.com",null,1],["crwdcntrl.net",null,1],["rubiconproject.com",null,1],["pubmatic.com",null,1],["id5-sync.com",null,1],["intentiq.com",null,1],["pubcid.org",null,1],["adserver.org",null,1],["rtbhouse","https:\/\/invstatic101.creativecdn.com\/encrypted-signals\/encrypted-tag-g.js"],["1plusx.com"],["esp.criteo.com","https:\/\/static.criteo.net\/js\/ld\/publishertag.ids.js"],["parrable.com"],["openx","https:\/\/oa.openxcdn.net\/esp.js"],["openxtest","https:\/\/oa.openxcdn.net\/esp.js"],["novatiq.com"],["33across.com"],["loblawmedia.ca"],["first-id.fr"],["amazon.com"],["google.com",null,1]]],["95377733",[["liveramp.com",null,1],["google.com",null,1]]]],null,[[["1009127",1],["1036864",1],["10457013",1],["1047657",1],["107430338",1],["1095529",1],["1096601",1],["11208213",1],["119236197",1],["122331895",1],["12414925",1],["136431902",1],["138871148",1],["143394101",1],["1513505",1],["15471663",1],["162717810",1],["16281493",1],["170737076",1],["17192557",1],["17279704961",1],["175759447",1],["175840252",1],["1926945",1],["211003152",1],["21618554041",1],["21671350435",1],["21700180024",1],["21723401898",1],["21725819945",1],["21737107378",1],["21831561254",1],["21833905170",1],["21842480936",1],["21939239661",1],["22065771467",1],["22243774984",1],["22247219933",1],["22466671215",1],["22487499523",1],["22717329971",1],["22787307354",1],["22876227373",1],["22877679933",1],["22906616360",1],["22917490941",1],["2295796",1],["269933763",1],["282451443",1],["30992205",1],["32195238",1],["32352161",1],["38399101",1],["38577695",1],["3981009",1],["43606300",1],["4635328",1],["48017969",1],["50347861",1],["59526924",1],["67894880",1],["7047",1],["7103",0],["7805314",1],["85042905",1],["86622453",1],["95377733",1],["9738433",1]]],[[["1009127",1],["1036864",1],["10457013",1],["1047657",1],["107430338",1],["1095529",1],["1096601",1],["11208213",1],["119236197",1],["122331895",1],["12414925",1],["136431902",1],["138871148",1],["143394101",1],["1513505",1],["15471663",1],["162717810",1],["16281493",1],["170737076",1],["17192557",1],["17279704961",1],["175759447",1],["175840252",1],["1926945",1],["211003152",1],["21618554041",1],["21671350435",1],["21700180024",1],["21723401898",1],["21725819945",1],["21737107378",1],["21831561254",1],["21833905170",1],["21842480936",1],["21939239661",1],["22065771467",1],["22243774984",1],["22247219933",1],["22466671215",1],["22487499523",1],["22717329971",1],["22787307354",1],["22876227373",1],["22877679933",1],["22906616360",1],["22917490941",1],["2295796",1],["269933763",1],["282451443",1],["30992205",1],["32195238",1],["32352161",1],["38399101",1],["38577695",1],["3981009",1],["43606300",1],["4635328",1],["48017969",1],["50347861",1],["59526924",1],["67894880",1],["7047",1],["7103",1],["7805314",1],["85042905",1],["86622453",1],["95377733",1],["9738433",1]]],null,[[9684,1742906400],[2916,1742907600],[22424,1742908800],[42946,1742910000]]],null,null,null,[1,0,0],"m202503200101"]',
);
