/*! For license information please see index-1.4.4.js.LICENSE.txt */
(() => {
  var e = {
      38: function (e) {
        'undefined' != typeof self && self,
          (e.exports = (function (e) {
            var t = {};
            function n(o) {
              if (t[o]) return t[o].exports;
              var r = (t[o] = { i: o, l: !1, exports: {} });
              return (
                e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
              );
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, o) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: o,
                  });
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, 'a', t), t;
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ''),
              n((n.s = 7))
            );
          })([
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o = r(n(3));
              function r(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var i = {
                  AVOID_COOKIE_USAGE: !1,
                  EVENTS_BUFFER_SIZE: 100,
                  EVENTS_SENDER_INTERVAL: 1e4,
                  EVENTS_SENDER_MIN_INTERVAL: 5e3,
                  EVENTS_SENDER_MAX_INTERVAL: 2e4,
                  EVENTS_DISCARD_AFTER_MSECS: 36e5,
                  EVENTS_BULK_SIZE: 10,
                  HORIZON_CALLBACK_STACK_LIMIT: 1e3,
                  HORIZON_TRACK_IDENTIFICATION_RESOURCE: 'id',
                  HORIZON_TRACK_HOST: 'horizon-track.globo.com',
                  HORIZON_CLIENT_UUID: r(n(2)).default.getResource(
                    'clientInstanceUUID',
                    (0, o.default)(),
                  ),
                  HORIZON_REQUEST_ENCODING: 'base64',
                  HORIZON_SCHEMAS_HOST: 'horizon-schemas.globo.com',
                  IDENTIFICATION_LOAD_RETRY_AFTER_MSECS: 5e3,
                  PACKAGE_VERSION: '1.11.0',
                  SCHEMA_VALIDATOR_SCRIPT_URL:
                    's3.glbimg.com/cdn/libs/tv4/1.3.0/tv4.min.js',
                  SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES: 2,
                  SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS: 1e4,
                  USE_HTTPS: !0,
                },
                a = {
                  avoidCookieUsage: function () {
                    i.AVOID_COOKIE_USAGE = !0;
                  },
                  useHTTPOnly: function () {
                    i.USE_HTTPS = !1;
                  },
                  useQAConfiguration: function () {
                    (i.HORIZON_TRACK_HOST = 'horizon-track.qa.globoi.com'),
                      (i.HORIZON_SCHEMAS_HOST =
                        'horizon-schemas.qa.globoi.com'),
                      (i.HORIZON_REQUEST_ENCODING = 'json');
                  },
                  useJSONEncoding: function () {
                    i.HORIZON_REQUEST_ENCODING = 'json';
                  },
                };
              t.default = Object.assign(i, a);
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o = {
                  COMPONENT_NOT_READY: '[Horizon] Component is not ready.',
                  COMPONENT_UNAVAILABLE:
                    '[Horizon] Class or function is required.',
                  DUPLICATED_SCHEMA: '[Horizon] Duplicated schema.',
                  ERROR_LOADING_RESOURCE: '[Horizon] Failed to load resource.',
                  INVALID_AUTH_TOKEN: '[Horizon] Invalid authorization token.',
                  INVALID_DATA: '[Horizon] Invalid data.',
                  INVALID_DATE: '[Horizon] Invalid date-time RFC 3339 format.',
                  INVALID_STRING_NUMERIC_STRING:
                    '[Horizon] numericString should be string.',
                  INVALID_EMPTY_NUMERIC_STRING:
                    '[Horizon] numericString should be empty.',
                  INVALID_NUMERIC_STRING:
                    '[Horizon] Invalid number. Field with NumericString must to be number.',
                  INVALID_ENVIRONMENT: '[Horizon] Invalid environment value.',
                  INVALID_FORMAT: '[Horizon] Invalid event format.',
                  INVALID_REQUEST: '[Horizon] Invalid request.',
                  INVALID_TIMESTAMP: '[Horizon] Invalid timestamp.',
                  INVALID_VERSION_FORMAT: '[Horizon] Invalid version format.',
                  INVALID_RELATION_ID:
                    '[Horizon] Invalid relation identification.',
                  LIMIT_EXCEEDED: '[Horizon] Resource limit exceeded.',
                  MUST_BE_DEFINED:
                    '[Horizon] Parameter or argument must be defined',
                  SCHEMA_VALIDATOR_ERROR_LOADING:
                    '[Horizon] Could not load SchemaValidator.',
                  UNSUPPORTED_TYPE: '[Horizon] Unsupported type.',
                  UNSUPPORTED_TENANT: '[Horizon] Unsupported tenant.',
                  UNSUPPORTED_ENCODER: '[Horizon] Unsupported encoder.',
                  USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE:
                    '[Horizon] Can not set or remove a logged user when AVOID_COOKIE_USAGE is not enabled.',
                },
                r = {
                  mustBeDefined: function (e) {
                    throw new Error(o.MUST_BE_DEFINED + ': ' + e + '.');
                  },
                };
              t.default = Object.assign(o, r);
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o = function () {
                return (
                  (window.horizonResources = window.horizonResources || {}),
                  window.horizonResources
                );
              };
              t.default = {
                getContext: o,
                getResource: function (e, t) {
                  var n = o();
                  return (n[e] = n[e] || t), n[e];
                },
              };
            },
            function (e, t, n) {
              var o = n(11),
                r = n(12);
              e.exports = function (e, t, n) {
                var i = (t && n) || 0;
                'string' == typeof e &&
                  ((t = 'binary' === e ? new Array(16) : null), (e = null));
                var a = (e = e || {}).random || (e.rng || o)();
                if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t))
                  for (var s = 0; s < 16; ++s) t[i + s] = a[s];
                return t || r(a);
              };
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                  execAsync: function (e, t) {
                    setTimeout(function () {
                      return e(t);
                    }, 1);
                  },
                });
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = {
                  request: function (e, t, n, o) {
                    var r = new XMLHttpRequest();
                    r.open(e, t, !0),
                      (r.onload = function () {
                        return r.status < 400
                          ? n(JSON.parse(r.response))
                          : o(r.response);
                      }),
                      (r.onerror = o),
                      r.send();
                  },
                });
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var o = t[n];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t;
                  };
                })(),
                r = l(n(4)),
                i = l(n(2)),
                a = l(n(1)),
                s = l(n(5)),
                c = l(n(0));
              function l(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = function () {
                  return i.default.getResource('idManager', {
                    loggedIDs: null,
                    anonymousIDs: null,
                    sessionIDs: null,
                  });
                },
                d = ['GLBID', 'GST', 'EXT_ID'],
                f = 'statusReady',
                h = 'statusNotReady',
                g = 'statusLoading',
                p = 'statusScheduled',
                b = 'statusError',
                v = (function () {
                  function e(t, n) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          'Cannot call a class as a function',
                        );
                    })(this, e),
                      (this.state = n ? f : h),
                      (this.url = t),
                      (this.bypass = n),
                      (this.callbacks = {
                        onReady: [],
                        onError: [],
                        onRetry: [],
                        onLoad: [],
                      });
                  }
                  return (
                    o(e, [
                      {
                        key: 'onLoad',
                        value: function (e) {
                          this.callbacks.onLoad.push(e);
                        },
                      },
                      {
                        key: 'onRetry',
                        value: function (e) {
                          this.callbacks.onRetry.push(e);
                        },
                      },
                      {
                        key: 'onReady',
                        value: function (e) {
                          if (this.state === f) return e(this.getClientIDs());
                          if (
                            this.callbacks.onReady.length >
                            c.default.HORIZON_CALLBACK_STACK_LIMIT
                          )
                            throw new Error(
                              a.default.LIMIT_EXCEEDED +
                                ' IDManager callback stack.',
                            );
                          return this.callbacks.onReady.push(e);
                        },
                      },
                      {
                        key: 'onError',
                        value: function (e) {
                          this.state === b
                            ? e()
                            : this.callbacks.onError.push(e);
                        },
                      },
                      {
                        key: 'getAsKeyValue',
                        value: function () {
                          if (!this.isReady())
                            throw new Error('' + a.default.COMPONENT_NOT_READY);
                          if (this.bypass) return '';
                          var e = this.getClientIDs();
                          return Object.keys(e)
                            .map(function (t) {
                              return (
                                encodeURIComponent(t) +
                                '=' +
                                encodeURIComponent(e[t])
                              );
                            })
                            .join('&');
                        },
                      },
                      {
                        key: 'getClientIDs',
                        value: function () {
                          var e = u();
                          return Object.assign(
                            e.loggedIDs || {},
                            e.anonymousIDs || {},
                            e.sessionIDs || {},
                          );
                        },
                      },
                      {
                        key: 'isReady',
                        value: function () {
                          return this.state === f;
                        },
                      },
                      {
                        key: 'retry',
                        value: function () {
                          var e = this;
                          (this.state = p),
                            this.callbacks.onRetry.forEach(function (e) {
                              return e();
                            }),
                            setTimeout(function () {
                              (e.state = h), e.load();
                            }, c.default.IDENTIFICATION_LOAD_RETRY_AFTER_MSECS);
                        },
                      },
                      {
                        key: 'setLoggedUser',
                        value: function (e, t) {
                          if (-1 === d.indexOf(e))
                            throw Error(a.default.INVALID_AUTH_TOKEN);
                          var n = u();
                          n.loggedIDs = Object.assign(
                            n.loggedIDs || {},
                            (function (e, t, n) {
                              return (
                                t in e
                                  ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                    })
                                  : (e[t] = n),
                                e
                              );
                            })({}, e, t),
                          );
                        },
                      },
                      {
                        key: 'setAnonymousUser',
                        value: function (e) {
                          var t =
                              !(
                                arguments.length > 1 && void 0 !== arguments[1]
                              ) || arguments[1],
                            n = u();
                          if (null == n.anonymousIDs || t) {
                            if (!('glb_uid' in e) || !('glb_uid_public' in e))
                              throw a.default.mustBeDefined(
                                'glb_uid and glb_uid_public',
                              );
                            var o = {
                              glb_uid: e.glb_uid,
                              glb_uid_public: e.glb_uid_public,
                            };
                            n.anonymousIDs = Object.assign(
                              n.anonymousIDs || {},
                              o,
                            );
                          }
                        },
                      },
                      {
                        key: 'getAnonymousUser',
                        value: function () {
                          return u().anonymousIDs;
                        },
                      },
                      {
                        key: 'getHsid',
                        value: function () {
                          return u().sessionIDs;
                        },
                      },
                      {
                        key: 'setSessionID',
                        value: function (e) {
                          e.hsid &&
                            (u().sessionIDs = Object.assign(
                              {},
                              { hsid: e.hsid },
                            ));
                        },
                      },
                      {
                        key: 'removeLoggedUser',
                        value: function () {
                          var e = u();
                          d.forEach(function (t) {
                            e.loggedIDs[t] && delete e.loggedIDs[t];
                          });
                        },
                      },
                      {
                        key: 'load',
                        value: function () {
                          var e = this;
                          if (this.state === h) {
                            (this.state = g),
                              this.callbacks.onLoad.forEach(function (e) {
                                return e();
                              });
                            var t = c.default.USE_HTTPS
                              ? 'https://'
                              : 'http://';
                            s.default.request(
                              'GET',
                              '' + t + this.url,
                              function (t) {
                                e.setSessionID(t),
                                  e.setAnonymousUser(t, !1),
                                  (e.state = f),
                                  e.callbacks.onReady.forEach(function (t) {
                                    return r.default.execAsync(
                                      t,
                                      e.getClientIDs(),
                                    );
                                  });
                              },
                              function (t) {
                                (e.state = b),
                                  e.callbacks.onError.forEach(function (e) {
                                    return r.default.execAsync(e, t);
                                  }),
                                  e.retry();
                              },
                            );
                          }
                        },
                      },
                    ]),
                    e
                  );
                })(),
                y = function (e) {
                  var t = u();
                  if (!t.instance) {
                    var n =
                        e ||
                        c.default.HORIZON_TRACK_HOST +
                          '/' +
                          c.default.HORIZON_TRACK_IDENTIFICATION_RESOURCE,
                      o = !1 === c.default.AVOID_COOKIE_USAGE;
                    t.instance = new v(n, o);
                  }
                  return t.instance;
                };
              t.default = {
                getInstance: y,
                getContextManager: u,
                setLoggedUser: function (e, t) {
                  if (!c.default.AVOID_COOKIE_USAGE)
                    throw Error(
                      a.default.USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE,
                    );
                  (e && 0 !== e.length) || a.default.mustBeDefined('tokenName'),
                    (t && 0 !== t.length) ||
                      a.default.mustBeDefined('tokenValue'),
                    y().setLoggedUser(e, t);
                },
                removeLoggedUser: function () {
                  if (!c.default.AVOID_COOKIE_USAGE)
                    throw Error(
                      a.default.USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE,
                    );
                  y().removeLoggedUser();
                },
                setAnonymousUser: function (e) {
                  y().setAnonymousUser(e);
                },
                getAnonymousUser: function () {
                  return y().getAnonymousUser();
                },
                getHsid: function () {
                  return y().getHsid();
                },
              };
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.IDManager = t.Settings = t.HorizonClient = void 0),
                n(8);
              var o = a(n(10)),
                r = a(n(0)),
                i = a(n(6));
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var s = {
                setLoggedUser: i.default.setLoggedUser,
                removeLoggedUser: i.default.removeLoggedUser,
                setAnonymousUser: i.default.setAnonymousUser,
                getAnonymousUser: i.default.getAnonymousUser,
                getHsid: i.default.getHsid,
              };
              (t.HorizonClient = o.default),
                (t.Settings = r.default),
                (t.IDManager = s);
            },
            function (e, t, n) {
              'use strict';
              n(9).polyfill();
            },
            function (e, t, n) {
              'use strict';
              function o(e, t) {
                if (null == e)
                  throw new TypeError(
                    'Cannot convert first argument to object',
                  );
                for (var n = Object(e), o = 1; o < arguments.length; o++) {
                  var r = arguments[o];
                  if (null != r)
                    for (
                      var i = Object.keys(Object(r)), a = 0, s = i.length;
                      a < s;
                      a++
                    ) {
                      var c = i[a],
                        l = Object.getOwnPropertyDescriptor(r, c);
                      void 0 !== l && l.enumerable && (n[c] = r[c]);
                    }
                }
                return n;
              }
              e.exports = {
                assign: o,
                polyfill: function () {
                  Object.assign ||
                    Object.defineProperty(Object, 'assign', {
                      enumerable: !1,
                      configurable: !0,
                      writable: !0,
                      value: o,
                    });
                },
              };
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      },
                r = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var o = t[n];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t;
                  };
                })(),
                i = g(n(3)),
                a = g(n(0)),
                s = g(n(13)),
                c = g(n(1)),
                l = g(n(15)),
                u = g(n(26)),
                d = g(n(27)),
                f = g(n(6)),
                h = g(n(2));
              function g(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var p = 'stateReady',
                b = 'stateNotReady',
                v = 'stateLoading',
                y = ['web', 'instant-article', 'app'],
                m = (function () {
                  function e() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      o = this,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      g =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 'web';
                    if (
                      ((function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            'Cannot call a class as a function',
                          );
                      })(this, e),
                      (this.tenant =
                        t ||
                        d.default.getTenant() ||
                        c.default.mustBeDefined('tenant')),
                      (this.deviceGroup =
                        n ||
                        d.default.getDeviceGroup() ||
                        c.default.mustBeDefined('deviceGroup')),
                      (this.defaultContentType = r),
                      -1 === y.indexOf(g))
                    )
                      throw Error(c.default.INVALID_ENVIRONMENT);
                    (this.environment = g),
                      (this.validator = s.default),
                      (this.clientVersion = a.default.PACKAGE_VERSION),
                      (this.state = b),
                      (this.referer = document.referrer);
                    var p = null,
                      v = null,
                      m = null,
                      I = function () {
                        return h.default.getResource('horizonActionInfo', {
                          horizonActionSequence: 0,
                          horizonClientContextID: (0, i.default)(),
                        });
                      };
                    (this.getHorizonActionSequence = function () {
                      var e = I();
                      return (
                        2147483647 === e.horizonActionSequence &&
                          (e.horizonActionSequence = 0),
                        (e.horizonActionSequence += 1),
                        e.horizonActionSequence
                      );
                    }),
                      (this.getHorizonClientContextID = function () {
                        return I().horizonClientContextID;
                      }),
                      (this.getHorizonActionExtraAttributes = function () {
                        return '';
                      }),
                      (this.updateHorizonClientContextID = function () {
                        I().horizonClientContextID = (0, i.default)();
                      }),
                      (this.setSchemasProvider = function (e) {
                        p = e;
                      }),
                      (this.getSchemasProvider = function () {
                        if (!p) {
                          var e = u.default.getInstance();
                          o.setSchemasProvider(e);
                        }
                        return p;
                      }),
                      (this.setEventBus = function (e) {
                        v = e;
                      }),
                      (this.getEventBus = function () {
                        if (!v) {
                          var e = l.default.getInstance(
                            o.tenant,
                            o.deviceGroup,
                            o.environment,
                            o.getIdManager(),
                          );
                          o.setEventBus(e);
                        }
                        return v;
                      }),
                      (this.setIdManager = function (e) {
                        m = e;
                      }),
                      (this.getIdManager = function () {
                        if (!m) {
                          var e = f.default.getInstance();
                          o.setIdManager(e);
                        }
                        return m;
                      }),
                      (this.isReady = function () {
                        return (
                          !!p &&
                          !!m &&
                          o.validator.isReady() &&
                          p.isReady() &&
                          m.isReady()
                        );
                      }),
                      window.addEventListener('beforeunload', function () {
                        o.unload();
                      });
                  }
                  return (
                    r(e, [
                      {
                        key: 'useDefaultContentType',
                        value: function (e) {
                          this.defaultContentType = e;
                        },
                      },
                      {
                        key: 'setValidator',
                        value: function (e) {
                          this.validator = e;
                        },
                      },
                      {
                        key: 'setReferer',
                        value: function (e) {
                          this.referer = e || document.referrer;
                        },
                      },
                      {
                        key: 'unload',
                        value: function () {
                          this.flush();
                        },
                      },
                      {
                        key: 'getScopeInfo',
                        value: function (e) {
                          return {
                            url: document.location.href,
                            actionTs: +Date.now(),
                            horizonClientVersion: this.clientVersion,
                            horizonClientReferer: this.referer,
                            horizonRelationId: e,
                            horizonActionUUID: (0, i.default)(),
                            horizonActionSequence:
                              this.getHorizonActionSequence(),
                            horizonClientContextID:
                              this.getHorizonClientContextID(),
                            horizonActionExtraAttributes:
                              this.getHorizonActionExtraAttributes(),
                          };
                        },
                      },
                      {
                        key: 'validateBeforeEnqueue',
                        value: function (e) {
                          var t = this.getSchemasProvider().get(
                            e.id,
                            e.version,
                          );
                          this.validator.validateFor(e, t);
                        },
                      },
                      {
                        key: 'onReady',
                        value: function (e) {
                          this.validator.isReady()
                            ? this.getSchemasProvider().isReady()
                              ? this.getIdManager().isReady()
                                ? ((this.state = p), e())
                                : ((this.state = v),
                                  this.getIdManager().onReady(e),
                                  this.getIdManager().load())
                              : ((this.state = v),
                                this.getSchemasProvider().onReady(e),
                                this.getSchemasProvider().load())
                            : ((this.state = v),
                              this.validator.onReady(e),
                              this.validator.load());
                        },
                      },
                      {
                        key: 'flush',
                        value: function () {
                          var e = this;
                          this.isReady()
                            ? this.getEventBus().flush()
                            : this.onReady(function () {
                                return e.flush();
                              });
                        },
                      },
                      {
                        key: 'send',
                        value: function (e) {
                          var t = this,
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null;
                          if (null != n && 'string' != typeof n)
                            throw new Error(
                              c.default.INVALID_RELATION_ID +
                                ' Wrong relationId type. It should be a String: actual type is ' +
                                (void 0 === n ? 'undefined' : o(n)),
                            );
                          [].concat(e).forEach(function (e) {
                            t.validator.validateArgs(e),
                              t.sendWithInfo(e, t.getScopeInfo(n));
                          });
                        },
                      },
                      {
                        key: 'sendWithInfo',
                        value: function (e, t) {
                          var n = this;
                          if (!this.isReady())
                            return (
                              this.state === b && this.flush(),
                              void this.onReady(function () {
                                return n.sendWithInfo(e, t);
                              })
                            );
                          this.validateBeforeEnqueue(e);
                          var o = Object.assign({}, t, e);
                          o.contentType ||
                            (this.defaultContentType ||
                              c.default.mustBeDefined('contentType'),
                            (o.contentType = this.defaultContentType)),
                            this.getEventBus().enqueue(o);
                        },
                      },
                      {
                        key: 'newContextId',
                        value: function () {
                          this.updateHorizonClientContextID();
                        },
                      },
                      {
                        key: 'getContextId',
                        value: function () {
                          return this.getHorizonClientContextID();
                        },
                      },
                    ]),
                    e
                  );
                })();
              t.default = m;
            },
            function (e, t) {
              var n =
                ('undefined' != typeof crypto &&
                  crypto.getRandomValues &&
                  crypto.getRandomValues.bind(crypto)) ||
                ('undefined' != typeof msCrypto &&
                  'function' == typeof window.msCrypto.getRandomValues &&
                  msCrypto.getRandomValues.bind(msCrypto));
              if (n) {
                var o = new Uint8Array(16);
                e.exports = function () {
                  return n(o), o;
                };
              } else {
                var r = new Array(16);
                e.exports = function () {
                  for (var e, t = 0; t < 16; t++)
                    0 == (3 & t) && (e = 4294967296 * Math.random()),
                      (r[t] = (e >>> ((3 & t) << 3)) & 255);
                  return r;
                };
              }
            },
            function (e, t) {
              for (var n = [], o = 0; o < 256; ++o)
                n[o] = (o + 256).toString(16).substr(1);
              e.exports = function (e, t) {
                var o = t || 0,
                  r = n;
                return [
                  r[e[o++]],
                  r[e[o++]],
                  r[e[o++]],
                  r[e[o++]],
                  '-',
                  r[e[o++]],
                  r[e[o++]],
                  '-',
                  r[e[o++]],
                  r[e[o++]],
                  '-',
                  r[e[o++]],
                  r[e[o++]],
                  '-',
                  r[e[o++]],
                  r[e[o++]],
                  r[e[o++]],
                  r[e[o++]],
                  r[e[o++]],
                  r[e[o++]],
                ].join('');
              };
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      },
                r = s(n(14)),
                i = s(n(1)),
                a = s(n(0));
              function s(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var c = { ready: [] },
                l = ['url'],
                u = function () {
                  return !!window.tv4;
                },
                d = function (e) {
                  return null === e || (isNaN(e) && !isNaN(Date.parse(e)))
                    ? null
                    : i.default.INVALID_DATE;
                },
                f = function (e) {
                  return 'string' != typeof e
                    ? i.default.INVALID_STRING_NUMERIC_STRING
                    : '' === e.trim()
                      ? i.default.INVALID_EMPTY_NUMERIC_STRING
                      : Number.isFinite(Number(e))
                        ? null
                        : i.default.INVALID_NUMERIC_STRING;
                };
              t.default = {
                validateFor: function (e, t) {
                  if (!u())
                    throw new Error(
                      i.default.ERROR_LOADING_RESOURCE +
                        ' Validator is not ready.',
                    );
                  if (!t)
                    throw new Error(
                      i.default.INVALID_DATA + ' Argument: schema.',
                    );
                  if (!/\d+\.\d+/.test(e.version))
                    throw new Error(i.default.INVALID_VERSION_FORMAT);
                  if (!tv4.validate(e.properties, t))
                    throw new Error(
                      i.default.INVALID_DATA +
                        ' ' +
                        e.id +
                        ' ' +
                        e.version +
                        '. ' +
                        tv4.error,
                    );
                },
                validateArgs: function (e) {
                  var t = Object.prototype.hasOwnProperty;
                  if (
                    !(
                      e &&
                      t.call(e, 'id') &&
                      t.call(e, 'version') &&
                      t.call(e, 'properties')
                    )
                  )
                    throw new Error(
                      i.default.INVALID_FORMAT +
                        ' Missing properties: ' +
                        JSON.stringify(e),
                    );
                  if (
                    'string' != typeof e.id ||
                    'string' != typeof e.version ||
                    'object' !== o(e.properties)
                  )
                    throw new Error(
                      i.default.INVALID_FORMAT +
                        ' Wrong object type: ' +
                        JSON.stringify(e),
                    );
                  if (
                    l.filter(function (t) {
                      return e[t] && 'string' != typeof e[t];
                    }).length > 0
                  )
                    throw new Error(
                      i.default.INVALID_FORMAT +
                        ' Wrong object type: ' +
                        JSON.stringify(e),
                    );
                  if (e.id.length < 2 || e.version.length < 3)
                    throw new Error(
                      i.default.INVALID_FORMAT +
                        ' Invalid property size: ' +
                        JSON.stringify(e),
                    );
                  var n = Object.assign({}, e);
                  delete n.id,
                    delete n.version,
                    delete n.properties,
                    delete n.contentType;
                  var r = Object.keys(n);
                  if (
                    r.length > 0 &&
                    !r.every(function (e) {
                      return -1 !== l.indexOf(e);
                    })
                  )
                    throw new Error(
                      i.default.INVALID_FORMAT +
                        " Extra keys aren't allowed: " +
                        JSON.stringify(n),
                    );
                },
                tv4IsValidData: d,
                tv4IsNumericString: f,
                isReady: u,
                onReady: function (e) {
                  if (u()) return e();
                  if (c.ready.length > a.default.HORIZON_CALLBACK_STACK_LIMIT)
                    throw new Error(
                      i.default.LIMIT_EXCEEDED + ' Validator callback stack.',
                    );
                  return c.ready.unshift(e);
                },
                load: function () {
                  if (!r.default.isDefined('tv4')) {
                    var e =
                      (a.default.USE_HTTPS ? 'https://' : 'http://') +
                      a.default.SCHEMA_VALIDATOR_SCRIPT_URL;
                    (0, r.default)([e], 'tv4', {
                      async: !0,
                      numRetries: a.default.SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES,
                      success: function () {
                        tv4.addFormat('date-time', d),
                          tv4.addFormat('numericString', f),
                          c.ready.forEach(function (e) {
                            return e();
                          });
                      },
                      error: function (e) {
                        throw new Error(
                          i.default.SCHEMA_VALIDATOR_ERROR_LOADING + ' ' + e,
                        );
                      },
                    });
                  }
                },
              };
            },
            function (e, t, n) {
              var o, r, i, a;
              (a = function () {
                var e = function () {},
                  t = {},
                  n = {},
                  o = {};
                function r(e, t) {
                  if (e) {
                    var r = o[e];
                    if (((n[e] = t), r))
                      for (; r.length; ) r[0](e, t), r.splice(0, 1);
                  }
                }
                function i(t, n) {
                  t.call && (t = { success: t }),
                    n.length ? (t.error || e)(n) : (t.success || e)(t);
                }
                function a(t, n, o, r) {
                  var i,
                    s,
                    c = document,
                    l = o.async,
                    u = (o.numRetries || 0) + 1,
                    d = o.before || e,
                    f = t.replace(/^(css|img)!/, '');
                  (r = r || 0),
                    /(^css!|\.css$)/.test(t)
                      ? (((s = c.createElement('link')).rel = 'stylesheet'),
                        (s.href = f),
                        (i = 'hideFocus' in s) &&
                          s.relList &&
                          ((i = 0), (s.rel = 'preload'), (s.as = 'style')))
                      : /(^img!|\.(png|gif|jpg|svg)$)/.test(t)
                        ? ((s = c.createElement('img')).src = f)
                        : (((s = c.createElement('script')).src = t),
                          (s.async = void 0 === l || l)),
                    (s.onload =
                      s.onerror =
                      s.onbeforeload =
                        function (e) {
                          var c = e.type[0];
                          if (i)
                            try {
                              s.sheet.cssText.length || (c = 'e');
                            } catch (e) {
                              18 != e.code && (c = 'e');
                            }
                          if ('e' == c) {
                            if ((r += 1) < u) return a(t, n, o, r);
                          } else if ('preload' == s.rel && 'style' == s.as)
                            return (s.rel = 'stylesheet');
                          n(t, c, e.defaultPrevented);
                        }),
                    !1 !== d(t, s) && c.head.appendChild(s);
                }
                function s(e, n, o) {
                  var s, c;
                  if ((n && n.trim && (s = n), (c = (s ? o : n) || {}), s)) {
                    if (s in t) throw 'LoadJS';
                    t[s] = !0;
                  }
                  function l(t, n) {
                    !(function (e, t, n) {
                      var o,
                        r,
                        i = (e = e.push ? e : [e]).length,
                        s = i,
                        c = [];
                      for (
                        o = function (e, n, o) {
                          if (('e' == n && c.push(e), 'b' == n)) {
                            if (!o) return;
                            c.push(e);
                          }
                          --i || t(c);
                        },
                          r = 0;
                        r < s;
                        r++
                      )
                        a(e[r], o, n);
                    })(
                      e,
                      function (e) {
                        i(c, e), t && i({ success: t, error: n }, e), r(s, e);
                      },
                      c,
                    );
                  }
                  if (c.returnPromise) return new Promise(l);
                  l();
                }
                return (
                  (s.ready = function (e, t) {
                    return (
                      (function (e, t) {
                        var r,
                          i,
                          a,
                          s = [],
                          c = (e = e.push ? e : [e]).length,
                          l = c;
                        for (
                          r = function (e, n) {
                            n.length && s.push(e), --l || t(s);
                          };
                          c--;

                        )
                          (i = e[c]),
                            (a = n[i]) ? r(i, a) : (o[i] = o[i] || []).push(r);
                      })(e, function (e) {
                        i(t, e);
                      }),
                      s
                    );
                  }),
                  (s.done = function (e) {
                    r(e, []);
                  }),
                  (s.reset = function () {
                    (t = {}), (n = {}), (o = {});
                  }),
                  (s.isDefined = function (e) {
                    return e in t;
                  }),
                  s
                );
              }),
                (r = []),
                void 0 ===
                  (i = 'function' == typeof (o = a) ? o.apply(t, r) : o) ||
                  (e.exports = i);
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      'value' in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                return function (t, n, o) {
                  return n && e(t.prototype, n), o && e(t, o), t;
                };
              })();
              n(16);
              var r = d(n(2)),
                i = d(n(17)),
                a = d(n(0)),
                s = d(n(1)),
                c = d(n(22)),
                l = d(n(24)),
                u = d(n(25));
              function d(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var f = function () {
                  return r.default.getResource('bus', {});
                },
                h = (function () {
                  function e(t, n, o, r, i) {
                    var d = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          'Cannot call a class as a function',
                        );
                    })(this, e),
                      (this.currentTenant =
                        t || s.default.mustBeDefined('tenant')),
                      (this.instanceID =
                        n || s.default.mustBeDefined('instanceID')),
                      (this.deviceGroup =
                        o || s.default.mustBeDefined('deviceGroup')),
                      (this.environment =
                        r || s.default.mustBeDefined('environment')),
                      (this.queue = new l.default(
                        a.default.EVENTS_BUFFER_SIZE,
                      )),
                      (this.idManager = i),
                      (this.dispatchNumber = 1),
                      (this.actionCounter = 0),
                      new u.default()
                        .every(a.default.EVENTS_SENDER_INTERVAL)
                        .call(function () {
                          d.queue = d.filterQueue();
                          var e = d.prepareRequest();
                          d.dispatch(e, a.default.HORIZON_REQUEST_ENCODING) ||
                            e.actions.forEach(function (e) {
                              return d.enqueue(e);
                            });
                        })
                        .call(c.default.applyThrottlingPolicy)
                        .start();
                  }
                  return (
                    o(e, [
                      {
                        key: 'setMaxQueueSize',
                        value: function (e) {
                          this.queue = l.default.fromArray(this.queue.items, e);
                        },
                      },
                      {
                        key: 'filterQueue',
                        value: function () {
                          var e =
                            +Date.now() - a.default.EVENTS_DISCARD_AFTER_MSECS;
                          return this.queue.filter(function (t) {
                            return t.actionTs > e;
                          });
                        },
                      },
                      {
                        key: 'prepareRequest',
                        value: function () {
                          var e = this.queue.splice(
                            0,
                            a.default.EVENTS_BULK_SIZE,
                          );
                          return (
                            (this.actionCounter += e.length),
                            {
                              horizonClientUUID: this.instanceID,
                              horizonClientTenant: this.currentTenant,
                              horizonClientTs: Date.now(),
                              horizonClientType: 'js',
                              horizonClientDeviceGroup: this.deviceGroup,
                              horizonDispatchNumber: this.dispatchNumber,
                              horizonActionCounter: this.actionCounter,
                              horizonEnvironment: this.environment,
                              actions: e,
                            }
                          );
                        },
                      },
                      {
                        key: 'isValidRequest',
                        value: function (e) {
                          if (!e || (e && !e.actions))
                            throw new Error(s.default.INVALID_REQUEST);
                          return e.actions.length > 0;
                        },
                      },
                      {
                        key: 'sendByFetch',
                        value: function (e, t) {
                          try {
                            return (
                              fetch(e, {
                                method: 'POST',
                                credentials: 'include',
                                body: t,
                              }).then(function (e) {
                                e.ok ||
                                  console.error(
                                    'Failed to send Horizon events using fetch. Status ' +
                                      e.status +
                                      ' - ' +
                                      e.statusText,
                                  );
                              }),
                              !0
                            );
                          } catch (e) {
                            return !1;
                          }
                        },
                      },
                      {
                        key: 'sendByXMLHttpRequest',
                        value: function (e, t, n) {
                          try {
                            var o = new XMLHttpRequest();
                            return (
                              o.open('POST', e),
                              (o.withCredentials = !0),
                              'json' === n &&
                                o.setRequestHeader(
                                  'Content-Type',
                                  'application/json',
                                ),
                              (o.onreadystatechange = function () {
                                if (o.readyState === XMLHttpRequest.DONE) {
                                  var e = o.status,
                                    t = o.statusText;
                                  0 === e ||
                                    (e >= 200 && e < 400) ||
                                    console.error(
                                      'Failed to send Horizon events using XMLHttpRequest. Status ' +
                                        e +
                                        ' - ' +
                                        t,
                                    );
                                }
                              }),
                              o.send(t),
                              !0
                            );
                          } catch (e) {
                            return !1;
                          }
                        },
                      },
                      {
                        key: 'dispatch',
                        value: function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 'json',
                            n = a.default.USE_HTTPS ? 'https://' : 'http://',
                            o = this.idManager.getAsKeyValue(),
                            r = o ? '?' + o : '',
                            s =
                              '' +
                              n +
                              c.default.applyDestinationPolicy() +
                              '/event/' +
                              this.currentTenant +
                              r,
                            l = i.default.get(t);
                          if (!this.isValidRequest(e)) return !1;
                          this.dispatchNumber += 1;
                          var u = l(e),
                            d = !1,
                            f = !1,
                            h = !1;
                          try {
                            d = navigator.sendBeacon(s, u);
                          } catch (e) {
                            d = !1;
                          }
                          return (
                            d ||
                              (h = this.sendByFetch(s, u)) ||
                              (f = this.sendByXMLHttpRequest(s, u, t)),
                            d || h || f
                          );
                        },
                      },
                      {
                        key: 'enqueue',
                        value: function (e) {
                          if (!e.actionTs)
                            throw new Error(s.default.INVALID_TIMESTAMP);
                          this.queue.push(e);
                        },
                      },
                      {
                        key: 'flush',
                        value: function () {
                          for (; this.queue.length > 0; ) {
                            this.queue = this.filterQueue();
                            var e = this.prepareRequest();
                            this.dispatch(
                              e,
                              a.default.HORIZON_REQUEST_ENCODING,
                            );
                          }
                        },
                      },
                      {
                        key: 'length',
                        get: function () {
                          return this.queue.length;
                        },
                      },
                    ]),
                    e
                  );
                })();
              t.default = {
                getInstance: function (e, t, n, o) {
                  var r = f(),
                    i = e + '-' + t;
                  return (
                    r[i] ||
                      (r[i] = new h(e, a.default.HORIZON_CLIENT_UUID, t, n, o)),
                    r[i]
                  );
                },
                reset: function (e, t) {
                  (e && 0 !== e.length) || s.default.mustBeDefined('tenant'),
                    (t && 0 !== t.length) ||
                      s.default.mustBeDefined('deviceGroup');
                  var n = e + '-' + t;
                  delete f()[n];
                },
                getContextBus: f,
              };
            },
            function (e, t) {
              function n(e) {
                return (n =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      })(e);
              }
              (function () {
                (function () {
                  return 'navigator' in this && 'sendBeacon' in this.navigator;
                }).call(this) ||
                  ('navigator' in this || (this.navigator = {}),
                  (this.navigator.sendBeacon = function (e, t) {
                    var n = this.event && this.event.type,
                      o = 'unload' === n || 'beforeunload' === n,
                      r =
                        'XMLHttpRequest' in this
                          ? new XMLHttpRequest()
                          : new ActiveXObject('Microsoft.XMLHTTP');
                    r.open('POST', e, !o),
                      (r.withCredentials = !0),
                      r.setRequestHeader('Accept', '*/*'),
                      (function (e) {
                        return 'string' == typeof e;
                      })(t)
                        ? (r.setRequestHeader(
                            'Content-Type',
                            'text/plain;charset=UTF-8',
                          ),
                          (r.responseType = 'text/plain'))
                        : (function (e) {
                            return e instanceof Blob;
                          })(t) &&
                          t.type &&
                          r.setRequestHeader('Content-Type', t.type);
                    try {
                      r.send(t);
                    } catch (e) {
                      return !1;
                    }
                    return !0;
                  }.bind(this)));
              }).call(
                'object' ===
                  ('undefined' == typeof window ? 'undefined' : n(window))
                  ? window
                  : {},
              );
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o = a(n(18)),
                r = a(n(21)),
                i = a(n(1));
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var s = {
                base64: function (e) {
                  var t = new FormData();
                  return (
                    t.append(
                      'data',
                      o.default.encode(r.default.encode(JSON.stringify(e))),
                    ),
                    t.append('encoding', 'base64'),
                    t
                  );
                },
                json: function (e) {
                  return JSON.stringify(e);
                },
              };
              t.default = {
                get: function (e) {
                  if (!(e in s))
                    throw new Error(
                      i.default.UNSUPPORTED_ENCODER +
                        ' Invalid ' +
                        e +
                        ' encoder.',
                    );
                  return s[e];
                },
              };
            },
            function (e, t, n) {
              (function (e, o) {
                var r;
                !(function (i) {
                  var a =
                    ('object' == typeof e && e && e.exports,
                    'object' == typeof o && o);
                  a.global !== a && a.window;
                  var s = function (e) {
                    this.message = e;
                  };
                  (s.prototype = new Error()).name = 'InvalidCharacterError';
                  var c = function (e) {
                      throw new s(e);
                    },
                    l =
                      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                    u = /[\t\n\f\r ]/g,
                    d = {
                      encode: function (e) {
                        (e = String(e)),
                          /[^\0-\xFF]/.test(e) &&
                            c(
                              'The string to be encoded contains characters outside of the Latin1 range.',
                            );
                        for (
                          var t,
                            n,
                            o,
                            r,
                            i = e.length % 3,
                            a = '',
                            s = -1,
                            u = e.length - i;
                          ++s < u;

                        )
                          (t = e.charCodeAt(s) << 16),
                            (n = e.charCodeAt(++s) << 8),
                            (o = e.charCodeAt(++s)),
                            (a +=
                              l.charAt(((r = t + n + o) >> 18) & 63) +
                              l.charAt((r >> 12) & 63) +
                              l.charAt((r >> 6) & 63) +
                              l.charAt(63 & r));
                        return (
                          2 == i
                            ? ((t = e.charCodeAt(s) << 8),
                              (n = e.charCodeAt(++s)),
                              (a +=
                                l.charAt((r = t + n) >> 10) +
                                l.charAt((r >> 4) & 63) +
                                l.charAt((r << 2) & 63) +
                                '='))
                            : 1 == i &&
                              ((r = e.charCodeAt(s)),
                              (a +=
                                l.charAt(r >> 2) +
                                l.charAt((r << 4) & 63) +
                                '==')),
                          a
                        );
                      },
                      decode: function (e) {
                        var t = (e = String(e).replace(u, '')).length;
                        t % 4 == 0 && (t = (e = e.replace(/==?$/, '')).length),
                          (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) &&
                            c(
                              'Invalid character: the string to be decoded is not correctly encoded.',
                            );
                        for (var n, o, r = 0, i = '', a = -1; ++a < t; )
                          (o = l.indexOf(e.charAt(a))),
                            (n = r % 4 ? 64 * n + o : o),
                            r++ % 4 &&
                              (i += String.fromCharCode(
                                255 & (n >> ((-2 * r) & 6)),
                              ));
                        return i;
                      },
                      version: '0.1.0',
                    };
                  void 0 ===
                    (r = function () {
                      return d;
                    }.call(t, n, t, e)) || (e.exports = r);
                })();
              }).call(t, n(19)(e), n(20));
            },
            function (e, t) {
              e.exports = function (e) {
                return (
                  e.webpackPolyfill ||
                    ((e.deprecate = function () {}),
                    (e.paths = []),
                    e.children || (e.children = []),
                    Object.defineProperty(e, 'loaded', {
                      enumerable: !0,
                      get: function () {
                        return e.l;
                      },
                    }),
                    Object.defineProperty(e, 'id', {
                      enumerable: !0,
                      get: function () {
                        return e.i;
                      },
                    }),
                    (e.webpackPolyfill = 1)),
                  e
                );
              };
            },
            function (e, t) {
              var n;
              n = (function () {
                return this;
              })();
              try {
                n = n || Function('return this')() || (0, eval)('this');
              } catch (e) {
                'object' == typeof window && (n = window);
              }
              e.exports = n;
            },
            function (e, t, n) {
              !(function (e) {
                var t,
                  n,
                  o,
                  r = String.fromCharCode;
                function i(e) {
                  for (var t, n, o = [], r = 0, i = e.length; r < i; )
                    (t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < i
                      ? 56320 == (64512 & (n = e.charCodeAt(r++)))
                        ? o.push(((1023 & t) << 10) + (1023 & n) + 65536)
                        : (o.push(t), r--)
                      : o.push(t);
                  return o;
                }
                function a(e) {
                  if (e >= 55296 && e <= 57343)
                    throw Error(
                      'Lone surrogate U+' +
                        e.toString(16).toUpperCase() +
                        ' is not a scalar value',
                    );
                }
                function s(e, t) {
                  return r(((e >> t) & 63) | 128);
                }
                function c(e) {
                  if (0 == (4294967168 & e)) return r(e);
                  var t = '';
                  return (
                    0 == (4294965248 & e)
                      ? (t = r(((e >> 6) & 31) | 192))
                      : 0 == (4294901760 & e)
                        ? (a(e),
                          (t = r(((e >> 12) & 15) | 224)),
                          (t += s(e, 6)))
                        : 0 == (4292870144 & e) &&
                          ((t = r(((e >> 18) & 7) | 240)),
                          (t += s(e, 12)),
                          (t += s(e, 6))),
                    t + r((63 & e) | 128)
                  );
                }
                function l() {
                  if (o >= n) throw Error('Invalid byte index');
                  var e = 255 & t[o];
                  if ((o++, 128 == (192 & e))) return 63 & e;
                  throw Error('Invalid continuation byte');
                }
                function u() {
                  var e, r;
                  if (o > n) throw Error('Invalid byte index');
                  if (o == n) return !1;
                  if (((e = 255 & t[o]), o++, 0 == (128 & e))) return e;
                  if (192 == (224 & e)) {
                    if ((r = ((31 & e) << 6) | l()) >= 128) return r;
                    throw Error('Invalid continuation byte');
                  }
                  if (224 == (240 & e)) {
                    if ((r = ((15 & e) << 12) | (l() << 6) | l()) >= 2048)
                      return a(r), r;
                    throw Error('Invalid continuation byte');
                  }
                  if (
                    240 == (248 & e) &&
                    (r = ((7 & e) << 18) | (l() << 12) | (l() << 6) | l()) >=
                      65536 &&
                    r <= 1114111
                  )
                    return r;
                  throw Error('Invalid UTF-8 detected');
                }
                (e.version = '3.0.0'),
                  (e.encode = function (e) {
                    for (var t = i(e), n = t.length, o = -1, r = ''; ++o < n; )
                      r += c(t[o]);
                    return r;
                  }),
                  (e.decode = function (e) {
                    (t = i(e)), (n = t.length), (o = 0);
                    for (var a, s = []; !1 !== (a = u()); ) s.push(a);
                    return (function (e) {
                      for (var t, n = e.length, o = -1, i = ''; ++o < n; )
                        (t = e[o]) > 65535 &&
                          ((i += r((((t -= 65536) >>> 10) & 1023) | 55296)),
                          (t = 56320 | (1023 & t))),
                          (i += r(t));
                      return i;
                    })(s);
                  });
              })(t);
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o = i(n(23)),
                r = i(n(0));
              function i(e) {
                return e && e.__esModule ? e : { default: e };
              }
              t.default = {
                applyThrottlingPolicy: function (e) {
                  var t = r.default.EVENTS_SENDER_MIN_INTERVAL,
                    n = r.default.EVENTS_SENDER_MAX_INTERVAL,
                    i =
                      Number(o.default.get('_hzt.interval')) ||
                      r.default.EVENTS_SENDER_INTERVAL;
                  i <= n && i >= t && e.interval !== i && e.reschedule(i);
                },
                applyDestinationPolicy: function () {
                  return (
                    o.default.get('_hzt.host') || r.default.HORIZON_TRACK_HOST
                  );
                },
              };
            },
            function (e, t, n) {
              var o, r, i;
              (i = function () {
                function e() {
                  for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n) t[o] = n[o];
                  }
                  return t;
                }
                return (function t(n) {
                  function o(t, r, i) {
                    var a;
                    if ('undefined' != typeof document) {
                      if (arguments.length > 1) {
                        if (
                          'number' ==
                          typeof (i = e({ path: '/' }, o.defaults, i)).expires
                        ) {
                          var s = new Date();
                          s.setMilliseconds(
                            s.getMilliseconds() + 864e5 * i.expires,
                          ),
                            (i.expires = s);
                        }
                        i.expires = i.expires ? i.expires.toUTCString() : '';
                        try {
                          (a = JSON.stringify(r)), /^[\{\[]/.test(a) && (r = a);
                        } catch (e) {}
                        (r = n.write
                          ? n.write(r, t)
                          : encodeURIComponent(String(r)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent,
                            )),
                          (t = (t = (t = encodeURIComponent(String(t))).replace(
                            /%(23|24|26|2B|5E|60|7C)/g,
                            decodeURIComponent,
                          )).replace(/[\(\)]/g, escape));
                        var c = '';
                        for (var l in i)
                          i[l] &&
                            ((c += '; ' + l), !0 !== i[l] && (c += '=' + i[l]));
                        return (document.cookie = t + '=' + r + c);
                      }
                      t || (a = {});
                      for (
                        var u = document.cookie
                            ? document.cookie.split('; ')
                            : [],
                          d = /(%[0-9A-Z]{2})+/g,
                          f = 0;
                        f < u.length;
                        f++
                      ) {
                        var h = u[f].split('='),
                          g = h.slice(1).join('=');
                        this.json ||
                          '"' !== g.charAt(0) ||
                          (g = g.slice(1, -1));
                        try {
                          var p = h[0].replace(d, decodeURIComponent);
                          if (
                            ((g = n.read
                              ? n.read(g, p)
                              : n(g, p) || g.replace(d, decodeURIComponent)),
                            this.json)
                          )
                            try {
                              g = JSON.parse(g);
                            } catch (e) {}
                          if (t === p) {
                            a = g;
                            break;
                          }
                          t || (a[p] = g);
                        } catch (e) {}
                      }
                      return a;
                    }
                  }
                  return (
                    (o.set = o),
                    (o.get = function (e) {
                      return o.call(o, e);
                    }),
                    (o.getJSON = function () {
                      return o.apply({ json: !0 }, [].slice.call(arguments));
                    }),
                    (o.defaults = {}),
                    (o.remove = function (t, n) {
                      o(t, '', e(n, { expires: -1 }));
                    }),
                    (o.withConverter = t),
                    o
                  );
                })(function () {});
              }),
                void 0 ===
                  (r = 'function' == typeof (o = i) ? o.call(t, n, t, e) : o) ||
                  (e.exports = r),
                (e.exports = i());
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var o = t[n];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t;
                  };
                })(),
                r = (function () {
                  function e() {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 100;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          'Cannot call a class as a function',
                        );
                    })(this, e),
                      (this._queue = []),
                      (this.maxSize = t);
                  }
                  return (
                    o(
                      e,
                      [
                        {
                          key: 'push',
                          value: function (e) {
                            this._queue = [e].concat(
                              (function (e) {
                                if (Array.isArray(e)) {
                                  for (
                                    var t = 0, n = Array(e.length);
                                    t < e.length;
                                    t++
                                  )
                                    n[t] = e[t];
                                  return n;
                                }
                                return Array.from(e);
                              })(this.slice(0, this.maxSize - 1)),
                            );
                          },
                        },
                        {
                          key: 'forEach',
                          value: function (e) {
                            return this._queue.forEach(e);
                          },
                        },
                        {
                          key: 'slice',
                          value: function (e, t) {
                            return this._queue.slice(e, t);
                          },
                        },
                        {
                          key: 'splice',
                          value: function (e, t) {
                            return this._queue.splice(e, t);
                          },
                        },
                        {
                          key: 'clear',
                          value: function () {
                            this._queue = [];
                          },
                        },
                        {
                          key: 'filter',
                          value: function (t) {
                            return e.fromArray(
                              this._queue.filter(t),
                              this.maxSize,
                            );
                          },
                        },
                        {
                          key: 'length',
                          get: function () {
                            return this._queue.length;
                          },
                        },
                        {
                          key: 'items',
                          get: function () {
                            return JSON.parse(JSON.stringify(this._queue));
                          },
                        },
                      ],
                      [
                        {
                          key: 'fromArray',
                          value: function (t, n) {
                            var o = new e(n);
                            return (
                              t.forEach(function (e) {
                                return o.push(e);
                              }),
                              o
                            );
                          },
                        },
                      ],
                    ),
                    e
                  );
                })();
              t.default = r;
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var o = t[n];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t;
                  };
                })(),
                r = (function () {
                  function e() {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          'Cannot call a class as a function',
                        );
                    })(this, e),
                      (this.interval = 0),
                      (this.tickIntervalId = 0),
                      (this.callbacks = []);
                  }
                  return (
                    o(e, [
                      {
                        key: 'tick',
                        value: function () {
                          var e = this;
                          this.callbacks.forEach(function (t) {
                            return t(e);
                          });
                        },
                      },
                      {
                        key: 'start',
                        value: function () {
                          return (
                            (this.tickIntervalId = setInterval(
                              this.tick.bind(this),
                              this.interval,
                            )),
                            this
                          );
                        },
                      },
                      {
                        key: 'stop',
                        value: function () {
                          return (
                            clearInterval(this.tickIntervalId),
                            (this.tickIntervalId = 0),
                            this
                          );
                        },
                      },
                      {
                        key: 'reschedule',
                        value: function (e) {
                          return this.stop().every(e).start();
                        },
                      },
                      {
                        key: 'every',
                        value: function (e) {
                          return (this.interval = e), this;
                        },
                      },
                      {
                        key: 'call',
                        value: function (e) {
                          return this.callbacks.push(e), this;
                        },
                      },
                      {
                        key: 'isRunning',
                        get: function () {
                          return !!this.tickIntervalId;
                        },
                      },
                    ]),
                    e
                  );
                })();
              t.default = r;
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var o = t[n];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                    }
                  }
                  return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t;
                  };
                })(),
                r = l(n(4)),
                i = l(n(2)),
                a = l(n(1)),
                s = l(n(0)),
                c = l(n(5));
              function l(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var u = 'statusReady',
                d = 'statusNotReady',
                f = 'statusLoading',
                h = 'statusScheduled',
                g = 'statusError',
                p = function () {
                  return i.default.getResource('schemas', { data: {} });
                },
                b = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          'Cannot call a class as a function',
                        );
                    })(this, e),
                      (this.url = t),
                      (this.state = d),
                      (this.callbacks = {
                        onReady: [],
                        onError: [],
                        onRetry: [],
                        onLoad: [],
                      });
                  }
                  return (
                    o(e, [
                      {
                        key: 'get',
                        value: function (e, t) {
                          var n = e + '-' + t;
                          if (!this.isReady())
                            throw new Error('' + a.default.COMPONENT_NOT_READY);
                          var o = p().data[n];
                          if (!o)
                            throw new Error(
                              a.default.UNSUPPORTED_TYPE + ': ' + n,
                            );
                          return o;
                        },
                      },
                      {
                        key: 'isReady',
                        value: function () {
                          return this.state === u;
                        },
                      },
                      {
                        key: 'retry',
                        value: function () {
                          var e = this;
                          (this.state = h),
                            this.callbacks.onRetry.forEach(function (e) {
                              return e();
                            }),
                            setTimeout(function () {
                              (e.state = d), e.load();
                            }, s.default.SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS);
                        },
                      },
                      {
                        key: 'onLoad',
                        value: function (e) {
                          this.callbacks.onLoad.push(e);
                        },
                      },
                      {
                        key: 'onRetry',
                        value: function (e) {
                          this.callbacks.onRetry.push(e);
                        },
                      },
                      {
                        key: 'onReady',
                        value: function (e) {
                          if (this.state === u) return e(p().data);
                          if (
                            this.callbacks.onReady.length >
                            s.default.HORIZON_CALLBACK_STACK_LIMIT
                          )
                            throw new Error(
                              a.default.LIMIT_EXCEEDED +
                                ' Schemas callback stack.',
                            );
                          return this.callbacks.onReady.push(e);
                        },
                      },
                      {
                        key: 'onError',
                        value: function (e) {
                          this.state === g
                            ? e()
                            : this.callbacks.onError.push(e);
                        },
                      },
                      {
                        key: 'load',
                        value: function () {
                          var e = this,
                            t = p();
                          if (this.state === d) {
                            (this.state = f),
                              this.callbacks.onLoad.forEach(function (e) {
                                return e();
                              });
                            var n = s.default.USE_HTTPS
                              ? 'https://'
                              : 'http://';
                            c.default.request(
                              'GET',
                              '' + n + this.url,
                              function (n) {
                                (t.data = Object.assign(t.data || {}, n)),
                                  (e.state = u),
                                  e.callbacks.onReady.forEach(function (e) {
                                    return r.default.execAsync(e, t.data);
                                  });
                              },
                              function (t) {
                                (e.state = g),
                                  e.callbacks.onError.forEach(function (e) {
                                    return r.default.execAsync(e, t);
                                  }),
                                  e.retry();
                              },
                            );
                          }
                        },
                      },
                    ]),
                    e
                  );
                })();
              t.default = {
                getInstance: function (e) {
                  var t = p();
                  return (
                    t.provider ||
                      (t.provider = new b(
                        e || s.default.HORIZON_SCHEMAS_HOST + '/schemas',
                      )),
                    t.provider
                  );
                },
                getContextSchemas: p,
              };
            },
            function (e, t, n) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var o = function (e) {
                  return window.cdaaas && window.cdaaas.SETTINGS
                    ? window.cdaaas.SETTINGS[e]
                    : null;
                },
                r = function (e) {
                  return window.utag_data ? window.utag_data[e] : null;
                };
              t.default = {
                getTenant: function () {
                  return o('SITE_ID') || r('ut.profile') || 'unknown';
                },
                getDeviceGroup: function () {
                  return o('MOBILE_GROUP') || r('platform') || 'unknown';
                },
              };
            },
          ]));
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { exports: {} });
    return e[o].call(i.exports, i, i.exports, n), i.exports;
  }
  (() => {
    'use strict';
    class e {
      constructor() {
        var e;
        this.settings =
          null === (e = window.cdaaas) || void 0 === e ? void 0 : e.SETTINGS;
      }
      get(e) {
        const t = e.replace(new RegExp('[{}]', 'g'), '');
        try {
          return t.split('.').reduce((e, t) => {
            if (t in e) return e[t];
            throw new Error();
          }, this.settings);
        } catch (e) {
          return (
            console.warn(
              `[PORTFÓLIO][BARRA] A propriedade "${t}" não foi encontrada nas configurações globais`,
            ),
            null
          );
        }
      }
    }
    const t = {
      class: 'class',
      tabIndex: 'tabindex',
      ariaLabel: 'aria-label',
      accessKey: 'accesskey',
      style: 'style',
    };
    function o(e, n) {
      n &&
        Object.keys(n).forEach((o) => {
          const r = t[o];
          void 0 !== n[o] && e.setAttribute(r, n[o]);
        });
    }
    function r() {
      return 'desktop' === new e().get('MOBILE_GROUP');
    }
    function i(e, t) {
      const n = e.shadowRoot.querySelector('.button-login'),
        o = n.querySelector('.button-login-name');
      (n.ariaLabel = 'Login'),
        (o.innerHTML = 'Conta Globo'),
        t && a(e.shadowRoot, t);
    }
    function a(e, t) {
      const n = e.querySelector('.button-login-icon'),
        o = e.querySelector('.button-login-img');
      if (t.icon.startsWith('http'))
        return (o.src = t.icon), void (o.style.display = 'inherit');
      if (((n.innerHTML = t.icon), 1 === t.icon.length)) {
        const e = (function (e) {
          const t = [
              '#E40D39',
              '#FD7D23',
              '#15984A',
              '#FDBD36',
              '#199ED8',
              '#073DA3',
              '#9A3296',
              '#E3289A',
            ],
            n = null == e ? void 0 : e.toUpperCase();
          return ['A'].includes(n)
            ? t[0]
            : ['B', 'C', 'D', 'E'].includes(n)
              ? t[1]
              : ['F', 'G', 'H', 'I'].includes(n)
                ? t[2]
                : ['J', 'K', 'L'].includes(n)
                  ? t[3]
                  : ['M', 'N', 'O'].includes(n)
                    ? t[4]
                    : ['P', 'Q', 'R'].includes(n)
                      ? t[5]
                      : ['S', 'T', 'U', 'V'].includes(n)
                        ? t[6]
                        : ['W', 'X', 'Y', 'Z'].includes(n)
                          ? t[7]
                          : null;
        })(t.icon);
        (n.style.marginRight = 'var(--spacing-50)'),
          e
            ? ((n.style.backgroundColor = e), (n.style.color = '#fff'))
            : (n.style.backgroundColor = '#f5f5f5');
      }
    }
    class s {
      constructor(e) {
        this.props = e;
      }
      createElement() {
        var e, t, n, r, i, a, s;
        const c = document.createElement('a');
        if (
          ((c.innerHTML = this.props.name),
          this.props.url && (c.href = this.props.url),
          this.props.onClick && c.addEventListener('click', this.props.onClick),
          (null ===
            (t = null === (e = this.props) || void 0 === e ? void 0 : e.logo) ||
          void 0 === t
            ? void 0
            : t.useImage) && this.props.logo.image)
        ) {
          c.innerHTML = this.props.logo.image;
          const e = c.querySelector('svg');
          (null ===
            (r =
              null === (n = this.props.logo) || void 0 === n
                ? void 0
                : n.customStyle) || void 0 === r
            ? void 0
            : r.height) &&
            (e.style.height =
              null ===
                (a =
                  null === (i = this.props.logo) || void 0 === i
                    ? void 0
                    : i.customStyle) || void 0 === a
                ? void 0
                : a.height);
        }
        return (
          o(
            c,
            null === (s = this.props) || void 0 === s ? void 0 : s.attributes,
          ),
          c
        );
      }
    }
    class c {
      constructor(e) {
        this.props = e;
      }
      createElement() {
        var e;
        const t = document.createElement('li');
        return (
          o(
            t,
            null === (e = this.props) || void 0 === e ? void 0 : e.attributes,
          ),
          t
        );
      }
    }
    class l {
      constructor(e) {
        this.props = e;
      }
      createElement() {
        var e, t;
        const n = document.createElement('button');
        return (
          this.props.onClick && n.addEventListener('click', this.props.onClick),
          o(n, this.props.attributes),
          (
            null ===
              (t =
                null === (e = this.props.attributes) || void 0 === e
                  ? void 0
                  : e.class) || void 0 === t
              ? void 0
              : t.includes('button-login')
          )
            ? (n.insertAdjacentElement('afterbegin', this.createSpan()),
              n.insertAdjacentElement('afterbegin', this.createIcon()))
            : (n.innerHTML = this.props.icon
                ? this.props.icon + this.props.name
                : this.props.name),
          n
        );
      }
      createSpan() {
        const e = document.createElement('span');
        return (
          e.classList.add('button-login-name'),
          (e.innerHTML = this.props.name),
          e
        );
      }
      createIcon() {
        const e = document.createElement('div');
        return (
          e.classList.add('button-login-icon'),
          this.props.icon.startsWith('http') || (e.innerHTML = this.props.icon),
          e.insertAdjacentElement('afterbegin', this.createImage()),
          e
        );
      }
      createImage() {
        const e = document.createElement('img');
        return (
          e.classList.add('button-login-img'),
          (e.alt = 'Perfil do usuário'),
          (e.style.display = 'none'),
          e
        );
      }
    }
    const u = {
      qa: {
        env: 'qa',
        auth_server_url:
          'https://goidc.authentication.qa.globoi.com/auth/realms/globo.com/protocol/openid-connect/auth',
        client_globoid_url:
          'https://s3.glbimg.com/v1/AUTH_05f06ca986b54d6e9c5df94927ccf7fc/libs/globoid-js/1.3.1/globoid-js.min.js',
        oidcProvider:
          'https://goidc.authentication.qa.globoi.com/auth/realms/globo.com',
        clientId: 'barra-qa@apps.globoid',
        resource: 'barra-qa@apps.globoid',
        sessionManagement: 'token',
        show_redirect_path: 'login-callback.ghtml',
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: '',
        scope: 'openid profile',
        legacyCompatible: !0,
      },
      sandbox_qa: {
        env: 'qa',
        auth_server_url:
          'https://goidc.authentication.qa.globoi.com/auth/realms/globo.com/protocol/openid-connect/auth',
        client_globoid_url:
          'https://s3.glbimg.com/v1/AUTH_05f06ca986b54d6e9c5df94927ccf7fc/libs/globoid-js/1.3.1/globoid-js.min.js',
        oidcProvider:
          'https://goidc.authentication.qa.globoi.com/auth/realms/globo.com',
        clientId: 'barra-qa@apps.globoid',
        resource: 'barra-qa@apps.globoid',
        sessionManagement: 'token',
        show_redirect_path: 'login-callback.ghtml',
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: '',
        scope: 'openid profile',
        legacyCompatible: !0,
      },
      prod: {
        env: 'prod',
        auth_server_url:
          'https://goidc.globo.com/auth/realms/globo.com/protocol/openid-connect/auth',
        client_globoid_url:
          'https://s3.glbimg.com/v1/AUTH_05f06ca986b54d6e9c5df94927ccf7fc/libs/globoid-js/1.3.1/globoid-js.min.js',
        oidcProvider: 'https://goidc.globo.com/auth/realms/globo.com',
        clientId: 'barra@apps.globoid',
        resource: 'barra@apps.globoid',
        sessionManagement: 'token',
        show_redirect_path: 'login-callback.ghtml',
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: '',
        scope: 'openid profile',
        legacyCompatible: !0,
      },
    };
    var d = function (e, t, n, o) {
      return new (n || (n = Promise))(function (r, i) {
        function a(e) {
          try {
            c(o.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            c(o.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, s);
        }
        c((o = o.apply(e, t || [])).next());
      });
    };
    class f {
      static executeGloboIdSetup(e, t) {
        var n = f.glb.barra.defaults.oidcSettings,
          o = n.clientId;
        f.glb.globoIdClientMap
          .initNewGloboIdClient(n)
          .then(function () {
            var t = f.glb.globoIdClientMap.getGloboIdClient(o);
            e(t.globoId.isInitialized);
          })
          .catch(function (e) {
            t(e);
          });
      }
      static domainSetup(e) {
        return new Promise(function (t, n) {
          var o = f.glb.globoIdClientMap.getGloboIdClient(e);
          o && o.globoId.isInitialized ? t(!0) : f.executeGloboIdSetup(t, n);
        });
      }
      static enqueueApplicationUsage(e) {
        var t = f.glb.globoIdClientMap.getGloboIdClient(e);
        return (
          (t.stageQueueMap.applicationUsageStageQueue =
            t.stageQueueMap.applicationUsageStageQueue || []),
          new Promise(function (e, n) {
            t.stageQueueMap.applicationUsageStageQueue.push(function (t) {
              e(t);
            });
          })
        );
      }
      static prepareGloboIdExecution() {
        var e = f.glb.barra.defaults.oidcSettings.clientId;
        return new Promise(function (t, n) {
          f.domainSetup(e)
            .then(function (o) {
              o
                ? f.enqueueApplicationUsage(e).then(function (e) {
                    t(e);
                  })
                : n(
                    '[PORTFÓLIO][BARRA] GloboId client was not initialized correctly',
                  );
            })
            .catch(function (e) {
              n(e);
            });
        });
      }
      static login() {
        f.prepareGloboIdExecution()
          .then(function (e) {
            e.loginCustomSettings({ storeState: !0 });
          })
          .catch(function (e) {
            console.error('[PORTFÓLIO][BARRA] Login not executed. '.concat(e));
          });
      }
      static logout() {
        f.prepareGloboIdExecution()
          .then(function (e) {
            (e.settings.redirectUri = window.location.href), e.logout();
          })
          .catch(function (e) {
            console.error('[PORTFÓLIO][BARRA] Logout not executed. '.concat(e));
          });
      }
      static isLogged() {
        return new Promise(function (e, t) {
          f.prepareGloboIdExecution()
            .then(function (t) {
              e(t.isLogged());
            })
            .catch(function (e) {
              console.error(
                '[PORTFÓLIO][BARRA] isLogged not executed. '.concat(e),
              ),
                t(e);
            });
        });
      }
      static getUserData() {
        return new Promise(function (e, t) {
          f.prepareGloboIdExecution()
            .then(function (t) {
              t.loadUserInfo().then(function (t) {
                e(t);
              });
            })
            .catch(function (e) {
              console.error(
                '[PORTFÓLIO][BARRA] loadUserInfo not executed. '.concat(e),
              ),
                t(e);
            });
        });
      }
      static getGloboIDInfo(e) {
        return d(this, void 0, void 0, function* () {
          const t = window.cdaaas.SETTINGS.ENV || 'qa';
          var n = window.glb,
            o = {
              defaults: {
                oidcSettings: {
                  redirectUri: window.location.origin.concat(
                    '/' + u[t].show_redirect_path,
                  ),
                  authServerUrl: u[t].auth_server_url,
                  oidcProvider: u[t].oidcProvider,
                  clientId: u[t].clientId,
                  resource: u[t].resource,
                  sessionManagement: u[t].sessionManagement,
                  onLoad: u[t].onLoad,
                  silentCheckSsoRedirectUri: u[t].silentCheckSsoRedirectUri,
                  scope: u[t].scope,
                  legacyCompatible: u[t].legacyCompatible,
                },
                resolveGloboIdJs: function () {
                  return d(this, void 0, void 0, function* () {
                    return window.globalWebdeps
                      ? yield window.globalWebdeps('globoid-js')
                      : n.barra.clientGloboId.loadClientGloboId();
                  });
                },
              },
            };
          window.glb.barra
            ? (window.glb.barra = Object.assign(window.glb.barra, o))
            : (window.glb.barra = o),
            (f.glb = window.glb || {});
          try {
            yield window.glb.barra.defaults.resolveGloboIdJs();
            const t = yield f.getUserState();
            e.updateButton(t),
              console.log(
                '[PORTFÓLIO][BARRA] globoid-js carregado com sucesso: ',
              );
          } catch (t) {
            e.updateButton(null),
              console.error('[PORTFÓLIO][BARRA] Erro ao carregar globoid-js');
          }
        });
      }
      static getUserState() {
        return d(this, void 0, void 0, function* () {
          try {
            if (yield f.isLogged()) {
              const e = yield f.getUserData();
              return f.organizeUserData(e);
            }
            return null;
          } catch (e) {
            return console.error('[PORTFÓLIO][BARRA] '.concat(e)), null;
          }
        });
      }
      static organizeUserData(e) {
        return {
          name: `${e.userName.split(' ')[0]} ${e.userName.split(' ')[1]}`,
          icon: e.photoUrl || Array.from(e.name)[0],
        };
      }
    }
    f.glb = window.glb || {};
    const h = {
      scroll: { currentScrollLeft: 0, hasMovedLeft: !1, hasMovedRight: !1 },
    };
    class g {
      constructor(e) {
        (this.props = e),
          (this.handleScrollHorizontal = (e) => {
            const t = e.target,
              n = this.calcWidthOverlayScroll(t);
            t.style.setProperty('--overlay-width', `${n.toFixed(1)}px`),
              (this.state.scroll.hasMovedLeft &&
                this.state.scroll.hasMovedRight) ||
                (this.hasMovedLeft(this.state.scroll.currentScrollLeft, t)
                  ? this.onScrollLeft(t)
                  : this.onScrollRight(t));
          }),
          (this.calcWidthOverlayScroll = (e) => {
            const t = e.scrollWidth - e.offsetWidth;
            return 80 * (1 - e.scrollLeft / t);
          }),
          (this.hasMovedLeft = (e, t) => e > t.scrollLeft),
          (this.onScrollLeft = (e) => {
            this.state.scroll.hasMovedLeft ||
              (C.getInstance().send('barra globo', 'Swipe', 'left'),
              R.getInstance().event('barra globo', 'left', !0, 'Swipe')),
              (this.state = Object.assign(Object.assign({}, this.state), {
                scroll: Object.assign(Object.assign({}, this.state.scroll), {
                  currentScrollLeft: e.scrollLeft,
                  hasMovedLeft: !0,
                }),
              }));
          }),
          (this.onScrollRight = (e) => {
            this.state.scroll.hasMovedRight ||
              (C.getInstance().send('barra globo', 'Swipe', 'right'),
              R.getInstance().event('barra globo', 'right', !0, 'Swipe')),
              (this.state = Object.assign(Object.assign({}, this.state), {
                scroll: Object.assign(Object.assign({}, this.state.scroll), {
                  currentScrollLeft: e.scrollLeft,
                  hasMovedRight: !0,
                }),
              }));
          }),
          (this.state = Object.assign({}, h));
      }
      createElement() {
        const e = document.createElement('div'),
          t = this.createContainerList();
        if (((e.className = 'base-container'), e.appendChild(t), r())) {
          const t = this.createContainerRight();
          e.appendChild(t);
        }
        return e;
      }
      createListItemProduct(e) {
        return new E(e).createElement();
      }
      createListItemsProduct() {
        return [
          ...this.props.barraConfig.defaultProducts,
          ...this.props.barraConfig.additionalProducts,
        ].map((e) =>
          this.createListItemProduct({
            productConfig: e,
            customStyle: e.customStyle,
          }),
        );
      }
      createContainerList() {
        const e = document.createElement('ul');
        return (
          this.createListItemsProduct().forEach((t) => e.appendChild(t)),
          (e.className = 'container-list-item'),
          e.setAttribute('aria-label', 'Produtos Globo'),
          !r() && this.props.barraConfig.additionalProducts.length > 0
            ? e.addEventListener('scroll', this.handleScrollHorizontal)
            : e.style.setProperty('--overlay-display', 'none'),
          e
        );
      }
      createButtonLogin(e) {
        const t = new m(e);
        return f.getGloboIDInfo(t), t.createElement();
      }
      createContainerRight() {
        const e = document.createElement('div');
        if (this.props.barraConfig.login.showButton) {
          const t = this.createButtonLogin({
            name: 'Conta Globo',
            root: this.props.root,
          });
          e.appendChild(t);
        }
        return (e.className = 'container-right'), e;
      }
    }
    class p {
      constructor(e) {
        (this.props = e),
          (this.handleClick = (e) => {
            C.getInstance().send(
              'barra globo',
              'Click Link Produto',
              this.props.url,
            ),
              R.getInstance().event(
                'barra globo - Link produto',
                this.props.url,
                !0,
                'click',
              );
          });
      }
      createElement() {
        const e = this.createLink();
        var t, n;
        return (
          (t = e),
          (n = {
            '--link-logo-hover-border-color': this.props.customStyle.color,
          }) &&
            Object.keys(n).forEach((e) => {
              n[e] && t.style.setProperty(e, n[e]);
            }),
          e
        );
      }
      createLink() {
        var e;
        const t = this.isCurrentUrl(this.props.url);
        return new s({
          name: this.props.name,
          url: t ? null : this.props.url,
          onClick: t ? null : this.handleClick,
          logo: {
            useImage: this.props.logo.useImage,
            image: this.props.logo.image,
            customStyle:
              null === (e = this.props.logo) || void 0 === e
                ? void 0
                : e.customStyle,
          },
          attributes: {
            class: 'link-logo',
            tabIndex: t ? -1 : 0,
            ariaLabel: this.props.attributes.ariaLabel,
            accessKey: this.props.attributes.accessKey,
            style: `color: ${this.props.customStyle.color};`,
          },
        }).createElement();
      }
      isCurrentUrl(e) {
        const { search: t, href: n } = window.location;
        return (
          e.replace(t, '').replaceAll('/', '') ===
          n.replace(t, '').replaceAll('/', '')
        );
      }
    }
    const b = {
      tenantId: null,
      login: { showButton: !0 },
      defaultProducts: [
        {
          tenantId: 'globocom',
          name: 'globo.com',
          url: 'https://www.globo.com/',
          ariaLabel: 'Ir para globo.com',
          customStyle: { color: 'var(--color-globocom)' },
          logo: { useImage: !0, image: '' },
        },
        {
          tenantId: 'g1',
          name: 'g1',
          url: 'https://g1.globo.com/',
          ariaLabel: 'Ir para G 1',
          accessKey: 'n',
          customStyle: { color: 'var(--color-g1)' },
          logo: { useImage: !0, image: '' },
        },
        {
          tenantId: 'ge',
          name: 'ge',
          url: 'https://ge.globo.com/',
          ariaLabel: 'Ir para G E',
          accessKey: 'e',
          customStyle: { color: 'var(--color-ge)' },
          logo: { useImage: !0, image: '', customStyle: { height: '12px' } },
        },
        {
          tenantId: 'gshow',
          name: 'gshow',
          url: 'https://gshow.globo.com/',
          ariaLabel: 'Ir para G Show',
          accessKey: 'i',
          customStyle: { color: 'var(--color-gshow)' },
          logo: { useImage: !0, image: '' },
        },
        {
          tenantId: 'globoplay',
          name: 'globoplay',
          url: 'https://globoplay.globo.com/?origemId=92434',
          ariaLabel: 'Ir para Globoplay',
          accessKey: 'v',
          customStyle: { color: 'var(--color-globoplay)' },
          logo: { useImage: !0, image: '' },
        },
      ],
      additionalProducts: [],
      incluirComScore: !0,
      metricsConfig: { horizon: { enabled: !1 }, ga4: { enabled: !1 } },
    };
    class v {
      constructor(e, t) {
        (this.tenantId = e), (this.productsConfig = t);
      }
      formatJsonUrl(e) {
        return 'https://novabarra.globo.com/products-config/[tenantId].json'.replace(
          '[tenantId]',
          e,
        );
      }
      getConfig() {
        return (
          (e = this),
          (t = void 0),
          (o = function* () {
            const e = this.formatJsonUrl(this.tenantId);
            let t = Object.assign({}, b);
            try {
              let n;
              if (this.productsConfig) n = JSON.parse(this.productsConfig);
              else {
                const t = yield (function (e, t = {}) {
                  return (
                    (n = this),
                    (o = void 0),
                    (i = function* () {
                      const n = 8e3,
                        { timeout: o = n } = t,
                        r = new AbortController(),
                        i = setTimeout(() => r.abort(), o),
                        a = yield fetch(
                          e,
                          Object.assign(Object.assign({}, t), {
                            signal: r.signal,
                          }),
                        );
                      return clearTimeout(i), a;
                    }),
                    new ((r = void 0) || (r = Promise))(function (e, t) {
                      function a(e) {
                        try {
                          c(i.next(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function s(e) {
                        try {
                          c(i.throw(e));
                        } catch (e) {
                          t(e);
                        }
                      }
                      function c(t) {
                        var n;
                        t.done
                          ? e(t.value)
                          : ((n = t.value),
                            n instanceof r
                              ? n
                              : new r(function (e) {
                                  e(n);
                                })).then(a, s);
                      }
                      c((i = i.apply(n, o || [])).next());
                    })
                  );
                  var n, o, r, i;
                })(e, { timeout: 5e3 });
                n = yield t.json();
              }
              n
                ? (n.defaultProducts &&
                    (n.defaultProducts = this.overrideDefaultProducts(n)),
                  (t = Object.assign(Object.assign({}, t), n)))
                : console.warn(
                    '[PORTFÓLIO][BARRA] Configuração do produto vazia!',
                  );
            } catch (e) {
              'AbortError' === e.name
                ? console.error(
                    '[PORTFÓLIO][BARRA] Tempo limite da request excedido',
                  )
                : console.error(
                    '[PORTFÓLIO][BARRA] Erro na request do JSON do produto: ',
                    e,
                  );
            }
            return t;
          }),
          new ((n = void 0) || (n = Promise))(function (r, i) {
            function a(e) {
              try {
                c(o.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                c(o.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((o = o.apply(e, t || [])).next());
          })
        );
        var e, t, n, o;
      }
      overrideDefaultProducts(e) {
        return b.defaultProducts.map((t) => {
          const n = e.defaultProducts.find((e) => e.tenantId === t.tenantId);
          return n ? Object.assign(Object.assign({}, t), n) : t;
        });
      }
    }
    const y = {
      name: 'Conta Globo',
      icon: ' <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13V14.1H1.9V13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V13C16 10.34 10.67 9 8 9Z" fill="#171717"/>\n                    </svg>',
    };
    class m {
      constructor(e) {
        (this.props = e),
          (this.handleClick = (e) => {
            this.state.userInfo
              ? ((function (e, t) {
                  const n = e.shadowRoot.querySelector('.button-login'),
                    o = n.querySelector('.button-login-name');
                  (n.ariaLabel = 'Área do usuário'),
                    (o.innerHTML = t.name),
                    a(e.shadowRoot, t);
                })(this.props.root, this.state.userInfo),
                this.dropdownLogin.isOpen()
                  ? this.dropdownLogin.close()
                  : (this.dropdownLogin.open(), e.stopPropagation()))
              : f.login(),
              C.getInstance().send(
                'barra globo',
                'Click para entrar',
                'Login Iniciado',
              ),
              R.getInstance().event(
                'barra globo',
                'Login Iniciado',
                !0,
                'click',
              );
          }),
          (this.state = { userInfo: null }),
          (this.dropdownLogin = new I({ root: this.props.root, onLogout: i }));
      }
      createElement() {
        const e = this.createButton(!0),
          t = this.dropdownLogin.createElement(),
          n = this.createSkeletonCircle(),
          o = this.createSkeletonBox();
        return (
          e.insertAdjacentElement('afterbegin', o),
          e.insertAdjacentElement('afterbegin', n),
          e.appendChild(t),
          (e.style.pointerEvents = 'none'),
          e
        );
      }
      createSkeletonBox() {
        const e = document.createElement('div');
        return (e.className = 'skeleton-box'), e;
      }
      createSkeletonCircle() {
        const e = document.createElement('div');
        return (e.className = 'skeleton-circle'), e;
      }
      updateButton(e) {
        return (
          (t = this),
          (n = void 0),
          (r = function* () {
            yield (function (e, t) {
              const n = t || document;
              return new Promise((o) => {
                if (n.querySelector(e)) return o(n.querySelector(e));
                const r = new MutationObserver((t) => {
                  n.querySelector(e) && (r.disconnect(), o(n.querySelector(e)));
                });
                r.observe(t ? document.body : t, {
                  childList: !0,
                  subtree: !0,
                });
              });
            })('.base-container .container-right', this.props.root.shadowRoot);
            const t = this.props.root.shadowRoot.querySelector(
              '.base-container .container-right',
            );
            if (t) {
              const n = this.props.root.shadowRoot.querySelector(
                '.base-container .button-login',
              );
              this.state = Object.assign(Object.assign({}, this.state), {
                userInfo: e,
              });
              const o = this.createButton(!1),
                r = this.dropdownLogin.createElement();
              o.appendChild(r),
                a(o, this.state.userInfo || y),
                n.remove(),
                t.appendChild(o);
            }
          }),
          new ((o = void 0) || (o = Promise))(function (e, i) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function c(t) {
              var n;
              t.done
                ? e(t.value)
                : ((n = t.value),
                  n instanceof o
                    ? n
                    : new o(function (e) {
                        e(n);
                      })).then(a, s);
            }
            c((r = r.apply(t, n || [])).next());
          })
        );
        var t, n, o, r;
      }
      createButton(e) {
        const t = this.state.userInfo || y;
        return new l({
          name: e ? '' : t.name,
          icon: e ? '' : t.icon,
          onClick: this.handleClick,
          attributes: {
            class: 'button-login ' + (e ? 'button-login-hide' : ''),
            tabIndex: 0,
            ariaLabel: e || !t ? 'Login' : 'Área do usuário',
          },
        }).createElement();
      }
    }
    class I {
      constructor(e) {
        (this.props = e),
          (this.handleClickMyAccount = (e) => {
            C.getInstance().send(
              'barra globo',
              'Click Minha conta',
              'https://minhaconta.globo.com',
            ),
              R.getInstance().event(
                'barra globo - Entrar Minha Conta',
                'https://minhaconta.globo.com',
                !0,
                'click',
              ),
              e.stopPropagation();
          }),
          (this.handleClickLogout = (e) => {
            this.props.root.shadowRoot
              .querySelector('.base-container')
              .classList.remove('user-logged'),
              this.props.onLogout && this.props.onLogout(this.props.root),
              this.close(),
              C.getInstance().send('barra globo', 'Click Usuário', 'Sair'),
              R.getInstance().event('barra globo', 'Logout', !0, 'click'),
              e.stopPropagation(),
              f.logout();
          }),
          (this.handleClickOutsideDropdown = (e) => {
            this.isOpen() && this.close();
          }),
          (this.clearWindowEvent = () => {
            document.removeEventListener(
              'click',
              this.handleClickOutsideDropdown,
            );
          });
      }
      createElement() {
        const e = document.createElement('ul'),
          t = this.createListItemMyAccount(),
          n = this.createListItemLogout();
        return (
          (e.className = 'container-dropdown-login'),
          e.appendChild(t),
          e.appendChild(n),
          document.addEventListener('click', this.handleClickOutsideDropdown),
          e
        );
      }
      createListItemMyAccount() {
        const e = new c({ attributes: { class: 'list-item-my-account' } }),
          t = new s({
            name: 'Minha conta',
            url: 'https://minhaconta.globo.com/',
            onClick: this.handleClickMyAccount,
            attributes: { ariaLabel: 'Minha conta Globo', tabIndex: 0 },
          }),
          n = e.createElement(),
          o = t.createElement();
        return n.appendChild(o), n;
      }
      createListItemLogout() {
        const e = new c({ attributes: { class: 'list-item-logout' } }),
          t = new l({
            name: 'Sair',
            onClick: this.handleClickLogout,
            attributes: { ariaLabel: 'Sair da minha conta Globo', tabIndex: 0 },
          }),
          n = e.createElement(),
          o = t.createElement();
        return n.appendChild(o), n;
      }
      isOpen() {
        return this.props.root.shadowRoot
          .querySelector('.container-dropdown-login')
          .className.includes('open');
      }
      open() {
        this.isOpen() ||
          (this.props.root.shadowRoot
            .querySelector('.container-dropdown-login')
            .classList.add('open'),
          C.getInstance().send('barra globo', 'Click Usuário', 'Abrir'),
          R.getInstance().event(
            'barra globo',
            'Click Usuário - Abrir',
            !0,
            'click',
          ));
      }
      close() {
        this.props.root.shadowRoot
          .querySelector('.container-dropdown-login')
          .classList.remove('open'),
          C.getInstance().send('barra globo', 'Click Usuário', 'Fechar'),
          R.getInstance().event(
            'barra globo',
            'Click Usuário - Fechar',
            !0,
            'click',
          );
      }
    }
    class E {
      constructor(e) {
        this.props = e;
      }
      createElement() {
        const e = this.createListItem(),
          t = this.createLinkLogo();
        return e.appendChild(t), e;
      }
      createListItem() {
        return new c({
          attributes: { class: 'list-item-product' },
        }).createElement();
      }
      createLinkLogo() {
        const {
          name: e,
          url: t,
          ariaLabel: n,
          accessKey: o,
          customStyle: r,
          logo: i,
        } = this.props.productConfig;
        return new p({
          name: e,
          url: t,
          customStyle: r,
          logo: {
            useImage: i.useImage,
            image: i.image,
            customStyle: null == i ? void 0 : i.customStyle,
          },
          attributes: { ariaLabel: n, accessKey: o },
        }).createElement();
      }
    }
    class w {
      constructor(e, t) {
        (this.barraGloboService = e), (this.root = t);
      }
      createTemplate() {
        return (
          (e = this),
          (t = void 0),
          (o = function* () {
            const e = document.createElement('template');
            this.barraConfig = Object.assign({}, b);
            try {
              this.barraConfig = yield this.barraGloboService.getConfig();
            } catch (e) {
              console.error('[PORTFÓLIO][BARRA] Error get product JSON');
            }
            this.setWindowBarraConfig({
              metricsConfig: this.barraConfig.metricsConfig,
            });
            const t = this.createBase();
            return (
              e.content.appendChild(this.mountStyle()),
              e.content.appendChild(t),
              e
            );
          }),
          new ((n = void 0) || (n = Promise))(function (r, i) {
            function a(e) {
              try {
                c(o.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                c(o.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((o = o.apply(e, t || [])).next());
          })
        );
        var e, t, n, o;
      }
      getBarraConfig() {
        return this.barraConfig;
      }
      setWindowBarraConfig(e) {
        window.glb.barra.novaBarraConfig = Object.assign(
          Object.assign({}, window.glb.barra.novaBarraConfig),
          e,
        );
      }
      createBase() {
        return new g({
          barraConfig: this.barraConfig,
          root: this.root,
        }).createElement();
      }
      getVariablesCss() {
        return "\n            :host {\n                --font-family-primary: 'Globotipo Variable', 'Globotipo', 'Globotipo UI', 'Globotipo Display', 'Globotipo Book', Avenir, Ubuntu, -apple-system, system-ui, BlinkMacSystemFont, sans-serif;\n                --font-weight-semibold: 600;\n                --font-weight-bold: 700;\n                --font-letter-spacing-210: 0.01em;\n                --font-text-decoration-null: none;\n                --font-style-roman: normal;\n                --font-size-40: 16px;\n                --font-size-30: 14px;\n                --font-line-height-20: 20px;\n                --font-line-height-10: 16px;\n\n                --color-gray-130: #171717;\n                --color-background-barraglobo: #FFFFFF;\n                --color-globocom: #0669DE;\n                --color-g1: #C4170C;\n                --color-ge: #06AA48;\n                --color-gshow: #FF6700;\n                --color-globoplay: #FB0334;\n                --color-receitas: #A5147D;\n                --color-oglobo: #1E4C9A;\n                --color-blue-hover: #1063E0;\n\n                --spacing-50: 8px;\n                --spacing-60: 12px;\n                --spacing-90: 24px;\n            }\n        ";
      }
      mountStyle() {
        const e = document.createElement('style');
        return (
          (e.innerHTML = `\n            ${this.getVariablesCss()}\n            \n        .base-container {\n            display: flex;\n            margin: 0 auto;\n            max-width: 1360px;\n            background-color: var(--color-background-barraglobo);\n            position: relative;\n        }\n        .base-container a,\n        .base-container button {\n            height: 48px;\n        }\n        .base-container .container-list-item {\n            --overlay-width: 80px;\n            --overlay-display: block;\n            display: flex;\n            flex: 1;\n            margin: 0;\n            padding: 0;\n            list-style: none;\n            overflow-x: auto;\n        }\n\n        .base-container .container-list-item::-webkit-scrollbar {\n            display: none;\n        }\n\n        .base-container .container-list-item::after {\n            content: '';\n            display: var(--overlay-display);\n            width: var(--overlay-width);\n            height: 100%;\n            background: linear-gradient(270deg, rgba(255, 255, 255, 0.8) 16.67%, rgba(255, 255, 255, 0) 100%);\n            position: absolute;\n            right: 0;\n        }\n\n        .base-container .container-right {\n            display: none;\n            align-items: center;\n        }\n\n        @media(min-width: 1200px) {\n            .base-container .container-list-item {\n                overflow-x: initial;\n            }\n\n            .base-container .container-list-item::after {\n                display: none;\n            }\n\n            .base-container .container-right {\n                display: flex;\n            }\n        }\n    \n            \n            \n        .base-container a {\n            text-decoration: var(--font-text-decoration-null);\n        }\n    \n            \n        .base-container button {\n            border: none;\n            background-color: inherit;\n            cursor: pointer;\n        }\n    \n            \n        .base-container .list-item-product {\n            display: inline-block;\n            flex-shrink: 0;\n        }\n\n        .base-container .list-item-product:first-child .link-logo {\n            padding-left: 12px;\n        }\n    \n            \n        .base-container .link-logo {\n            display: flex;\n            padding: var(--spacing-60) 11px;\n            position: relative;\n            font-family: var(--font-family-primary);\n            font-weight: var(--font-weight-semibold);\n            font-size: var(--font-size-40);\n            font-style: var(--font-style-roman);\n            line-height: var(--font-line-height-20);\n            letter-spacing: -0.16px;\n            font-variant-numeric: lining-nums proportional-nums;\n            font-feature-settings: 'ss01' on, 'ss03' off;\n            font-stretch: normal;\n            font-variation-settings: 'opsz' 10;\n            height: 48px;\n            box-sizing: border-box;\n            align-items: center;\n        }\n\n        .base-container .link-logo:hover::after {\n            content: '';\n            display: block;\n            width: 100%;\n            border-bottom: 2px solid var(--link-logo-hover-border-color);\n            border-radius: 8px;\n            position: absolute;\n            left: 0;\n            bottom: 0;\n        }\n\n        .base-container .link-logo svg {\n            width: auto;\n            height: 14px;\n        }\n    \n            \n        @keyframes bg-skeleton-box {\n            100% {\n                background-position: 2500% 0;\n            }\n        }\n\n        .base-container .button-login {\n            background-color: inherit;\n            color: var(--color-gray-130);\n            padding: 0 var(--spacing-90);\n            padding-right: 12px;\n            font-family: var(--font-family-primary);\n            font-weight: var(--font-weight-semibold);\n            font-size: var(--font-size-40);\n            font-style: var(--font-style-roman);\n            line-height: var(--font-line-height-20);\n            letter-spacing: -0.16px;\n            font-variant-numeric: lining-nums proportional-nums;\n            font-feature-settings: 'ss01' on, 'ss03' off;\n            font-stretch: normal;\n            font-variation-settings: 'opsz' 10;\n            cursor: pointer;\n            position: relative;\n            display: flex;\n            align-items: center;\n        }\n\n        .base-container .button-login .skeleton-box {\n            --skeleton-width: inherit;\n            --skeleton-height: 20px;\n            --skeleton-beam: linear-gradient(90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.7) 50%,rgba(255,255,255,0) 100%);\n            width: var(--skeleton-width,100px);\n            min-height: var(--skeleton-height,100px);\n            background-color: #eee;\n            background-image: var(--skeleton-beam);\n            background-size: 95% 100%;\n            background-repeat: no-repeat;\n            background-position: -2500% 0;\n            animation: bg-skeleton-box 1s linear infinite;\n            border-radius: 20px;\n        }\n\n        .base-container .button-login .skeleton-circle {\n            --skeleton-width: 32px;\n            --skeleton-height: 32px;\n            --skeleton-beam: linear-gradient(90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.7) 50%,rgba(255,255,255,0) 100%);\n            width: var(--skeleton-width,100px);\n            min-height: var(--skeleton-height,100px);\n            background-color: #eee;\n            background-image: var(--skeleton-beam);\n            background-size: 95% 100%;\n            background-repeat: no-repeat;\n            background-position: -2500% 0;\n            animation: bg-skeleton-box 1s linear infinite;\n            border-radius: 50%;\n            margin-right: 8px;\n        }\n\n        .base-container .button-login svg {\n            width: 14px;\n            height: 14px;\n            margin-right: var(--spacing-50);\n        }\n\n        .base-container .button-login:hover {\n            color: var(--color-blue-hover);\n        }\n\n        .base-container .button-login:hover svg path{\n            fill: var(--color-blue-hover);\n        }\n\n        .base-container .button-login:visited {\n            color: var(--color-gray-130);\n        }\n\n        .base-container .button-login-icon {\n            width: 32px;\n            height: 32px;\n            border-radius: 16px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .base-container .button-login-icon img {\n            width: 100%;\n            height: 100%;\n            border-radius: inherit;\n            margin-right: var(--spacing-50);\n        }\n\n        .base-container .button-login.button-login-hide .button-login-icon,\n        .base-container .button-login.button-login-hide svg {\n            display: none;\n        }\n    \n            \n        .base-container .container-dropdown-login {\n            display: none;\n            min-width: 140px;\n            width: 90%;\n            flex-direction: column;\n            align-items: end;\n            list-style: none;\n            padding: 0;\n            position: absolute;\n            right: 0;\n            background-color: var(--color-background-barraglobo);\n            box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1), 0px 0px 3px 1px rgba(0, 0, 0, 0.05);\n            z-index: 9999;\n            top: 32px;\n        }\n\n        .base-container .container-dropdown-login.open {\n            display: flex;\n        }\n\n        .base-container .container-dropdown-login li {\n            display: flex;\n            width: 100%;\n            justify-content: end;\n        }\n\n        .base-container .container-dropdown-login li a {\n            margin-top: 6px;\n        }\n\n        .base-container .container-dropdown-login li button,\n        .base-container .container-dropdown-login li a {\n            width: 100%;\n            text-align: right;\n            color: var(--color-gray-130);\n            padding: 0 var(--spacing-90);\n            font-family: var(--font-family-primary);\n            font-weight: var(--font-weight-semibold);\n            font-style: var(--font-style-roman);\n            font-variant-numeric: lining-nums proportional-nums;\n            font-feature-settings: 'ss01' on, 'ss03' off;\n            font-stretch: normal;\n            font-variation-settings: 'opsz' 10;\n            display: flex;\n            align-items: center;\n            justify-content: flex-end;\n        }\n\n        .base-container .container-dropdown-login li button:hover,\n        .base-container .container-dropdown-login li a:hover {\n            color: var(--color-blue-hover) !important;\n        }\n\n        .base-container .container-dropdown-login li button:visited,\n        .base-container .container-dropdown-login li a:visited {\n            color: var(--color-gray-130);\n        }\n\n        .base-container .container-dropdown-login li.list-item-my-account button,\n        .base-container .container-dropdown-login li.list-item-my-account a {\n            font-size: var(--font-size-40);\n            line-height: var(--font-line-height-20);\n            letter-spacing: -0.16px;\n        }\n\n        .base-container .container-dropdown-login li.list-item-logout button {\n            font-size: var(--font-size-30);\n            line-height: var(--font-line-height-10);\n            letter-spacing: -0.005em;\n            margin-top: 12px;\n        }\n    \n        `),
          e
        );
      }
    }
    var _ = n(38);
    class C {
      constructor() {
        this.initHorizon();
      }
      initHorizon() {
        const t = new e();
        this._horizon = new _.HorizonClient(
          t.get('SITE_ID'),
          t.get('MOBILE_GROUP'),
          'barra-globo',
        );
      }
      static getInstance() {
        return this._instance || (this._instance = new C()), this._instance;
      }
      send(e, t, n) {
        var o, r, i;
        if (
          !(null ===
            (i =
              null ===
                (r =
                  null ===
                    (o =
                      null === window || void 0 === window
                        ? void 0
                        : window.glb) || void 0 === o
                    ? void 0
                    : o.barra) || void 0 === r
                ? void 0
                : r.novaBarraConfig) || void 0 === i
            ? void 0
            : i.metricsConfig.horizon.enabled)
        )
          return;
        const a = {
          id: 'common-event',
          version: '0.1',
          contentType: 'common',
          properties: { eventCategory: e, eventLabel: n, eventAction: t },
        };
        this._horizon.send(a);
      }
    }
    var S = function (e, t, n, o) {
      return new (n || (n = Promise))(function (r, i) {
        function a(e) {
          try {
            c(o.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            c(o.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, s);
        }
        c((o = o.apply(e, t || [])).next());
      });
    };
    class R {
      getLib() {
        return S(this, void 0, void 0, function* () {
          var e;
          return (
            this._lib ||
              (this._lib = yield ((e = 'libAnalytics'),
              new Promise((t) => {
                let n = 0;
                const o = () =>
                  n >= 500
                    ? (console.warn(
                        '[PORTFÓLIO][BARRA] libAnalytics não encontrada',
                      ),
                      void t(null))
                    : window[e] && 0 !== Object.keys(window[e]).length
                      ? void t(window[e])
                      : ((n += 10), void setTimeout(o, 10));
                o();
              }))),
            this._lib
          );
        });
      }
      static getInstance() {
        return this._instance || (this._instance = new R()), this._instance;
      }
      event(e, t, n, o) {
        var r, i, a;
        return S(this, void 0, void 0, function* () {
          if (
            !(null ===
              (a =
                null ===
                  (i =
                    null ===
                      (r =
                        null === window || void 0 === window
                          ? void 0
                          : window.glb) || void 0 === r
                      ? void 0
                      : r.barra) || void 0 === i
                  ? void 0
                  : i.novaBarraConfig) || void 0 === a
              ? void 0
              : a.metricsConfig.ga4.enabled)
          )
            return;
          const s = {
              data: [{ key: e, value: t, persist: n }],
              events: [
                {
                  type: 'ga4',
                  method: 'gtm',
                  disableCommonEvent: !1,
                  eventName: o,
                  eventParams: [e],
                },
              ],
            },
            c = yield this.getLib();
          null == c || c.send.event(s);
        });
      }
    }
    const A = function () {
      var e, t, n, o;
      (window._comscore = window._comscore || []),
        _comscore.push({
          c1: '2',
          c2: '6035227',
          options: {
            enableFirstPartyCookie: !0,
            bypassUserConsentRequirementFor1PCookie: !0,
          },
        }),
        (e = 'https://sb.scorecardresearch.com/cs/6035227/beacon.js'),
        ((o = document.createElement('script')).type = 'text/javascript'),
        (o.async = !0),
        (o.id = 'jsonpGeneratedId-'.concat(
          window.glb.barra.scriptHeaderId.toString(),
        )),
        (o.src = e),
        window.glb.barra.scriptHeaderId++,
        (function (e, t, n) {
          var o = document.getElementsByTagName('head')[0];
          t &&
            (n &&
              'onreadystatechange' in e &&
              ((e.htmlFor = e.id), (e.event = 'onclick')),
            (e.onreadystatechange = function () {
              if (!e.readyState || e.readyState.match(/loaded|complete/)) {
                if (n)
                  try {
                    e.onclick && e.onclick();
                  } catch (e) {}
                t();
              }
            }),
            e.readyState ||
              ((e.onload = e.onreadystatechange), n && (e.onerror = e.onload))),
            o.appendChild(e);
        })(o, t, n);
    };
    class O extends HTMLElement {
      constructor() {
        super(),
          (this.tenantId = this.tenantId),
          (this.productsConfig = this.productsConfig);
      }
      connectedCallback() {
        return (
          (e = this),
          (t = void 0),
          (o = function* () {
            const e = document.querySelector('#glbbarrawidget');
            if (
              ((window.glb = window.glb || {}),
              (window.glb.barra = window.glb.barra || {}),
              (window.glb.barra.scriptHeaderId = 0),
              !e.contains(this))
            ) {
              const t = new v(this.tenantId, this.productsConfig),
                n = new w(t, this);
              this.attachShadow({ mode: 'open' });
              const o = yield n.createTemplate();
              this.shadowRoot.appendChild(o.content),
                e.appendChild(this),
                this.onLoaded(n.getBarraConfig());
            }
          }),
          new ((n = void 0) || (n = Promise))(function (r, i) {
            function a(e) {
              try {
                c(o.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                c(o.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((o = o.apply(e, t || [])).next());
          })
        );
        var e, t, n, o;
      }
      onLoaded(e) {
        this.hideOverlayAddictionalProducts(),
          e.incluirComScore && A(),
          this.removeJsonAfterRender();
      }
      hideOverlayAddictionalProducts() {
        const e = this.shadowRoot.querySelector('.container-list-item');
        e.scrollWidth <= screen.width &&
          e.style.setProperty('--overlay-display', 'none');
      }
      removeJsonAfterRender() {
        const e = document.querySelector('nova-barra-globocom');
        (null == e ? void 0 : e.getAttribute('products-config')) &&
          (null == e || e.removeAttribute('products-config'));
      }
      set tenantId(e) {
        e
          ? this.setAttribute('tenant-id', e)
          : this.setAttribute('tenant-id', 'default');
      }
      get tenantId() {
        return this.getAttribute('tenant-id');
      }
      set productsConfig(e) {
        e
          ? this.setAttribute('products-config', e)
          : this.setAttribute('products-config', '');
      }
      get productsConfig() {
        return this.getAttribute('products-config');
      }
    }
    customElements.define('nova-barra-globocom', O);
  })();
})();
