var VideoRecommendationPlugin = ((n) => {
  var i = {};
  function r(e) {
    var t;
    return (
      i[e] ||
      ((t = i[e] = { i: e, l: !1, exports: {} }),
      n[e].call(t.exports, t, t.exports, r),
      (t.l = !0),
      t)
    ).exports;
  }
  return (
    (r.m = n),
    (r.c = i),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i),
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ''),
    r((r.s = 3))
  );
})([
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = {};
    (t.env =
      (window.glb && window.glb.getCurrentEnv && window.glb.getCurrentEnv()) ||
      'local'),
      (t.tenant =
        (window.cdaaas &&
          window.cdaaas.SETTINGS &&
          window.cdaaas.SETTINGS.SITE_ID) ||
        'gshow'),
      (t.deviceGroup =
        (window.cdaaas &&
          window.cdaaas.SETTINGS &&
          window.cdaaas.SETTINGS.MOBILE_GROUP) ||
        'desktop'),
      (t.parseMilliseconds = function (e) {
        var e = e / 1e3,
          t = parseInt(e / 60, 10),
          n = parseInt(e % 60, 10);
        return 1 <= t
          ? t + (30 < n ? 1 : 0) + ' min'
          : parseInt(e, 10) + ' seg';
      }),
      (t.createElement = function (e) {
        var t = document.createElement('div');
        return t.setAttribute('class', e), t;
      }),
      (t.delegate = function (e, t, i, r) {
        function o(e, t) {
          return e && e.classList && e.classList.contains(t);
        }
        a[t + '-' + i] ||
          ((a[t + '-' + i] = { className: i, cb: r }),
          e.addEventListener(t, function (e) {
            var t = e.target,
              n = !0;
            if (!o(t, i))
              for (; t && n; ) (t = t.parentNode), o(t, i) && (n = !1);
            o(t, i) && r(t, e);
          }));
      }),
      (t.initCircleProgress = function (e) {
        var n = void 0,
          i = document.getElementById(e),
          r = i.getContext('2d'),
          o = ((r.lineWidth = '4'), (r.strokeStyle = '#fff'), i.width / 2),
          a = i.height / 2;
        return {
          start: function () {
            return new Promise(function (e) {
              var t;
              r.clearRect(0, 0, i.width, i.height),
                (t = 0),
                (n = setInterval(function () {
                  (t += 1),
                    r.clearRect(0, 0, i.width, i.height),
                    r.beginPath(),
                    r.arc(
                      o,
                      a,
                      40,
                      (Math.PI / 180) * 270,
                      (Math.PI / 180) * (270 + t),
                    ),
                    r.stroke(),
                    360 <= t && (clearInterval(n), e());
                }, 6e3 / 360));
            });
          },
          stop: function () {
            clearInterval(n);
          },
        };
      }),
      (t.ajax = function (e) {
        var i = e.url,
          t = e.method,
          r = void 0 === t ? 'GET' : t,
          t = e.body,
          o = void 0 === t ? null : t;
        return new Promise(function (e, t) {
          var n = new XMLHttpRequest();
          (n.withCredentials = !0),
            n.open(r, i),
            (n.onload = function () {
              200 <= n.status && n.status < 300 && e(n.response),
                t(n.statusText);
            }),
            (n.onerror = function () {
              return t(n.statusText);
            }),
            n.send(o);
        });
      }),
      (t.logging = function (e) {
        for (
          var t, n = arguments.length, i = Array(1 < n ? n - 1 : 0), r = 1;
          r < n;
          r++
        )
          i[r - 1] = arguments[r];
        return (t = console)[(e = console[e] ? e : 'log')].apply(
          t,
          ['[player-plugin-videos-recommendation]'].concat(i),
        );
      }),
      (t.getTypeView = function (e) {
        return e.detachOptions.isDetached
          ? 'pip'
          : e.isDetached
            ? 'fullscreen'
            : 'viewport';
      }),
      (t.getVolumeOfElementBsPlayer = function (e) {
        for (
          var t = 0;
          t < document.getElementsByTagName('bs-player').length;
          t++
        ) {
          var n = document.getElementsByTagName('bs-player')[t];
          if (n.videoid == e) return n.WMPlayer.container.volume;
        }
      });
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    (t.PLUGIN_KEYNAME = 'playerPluginVideosRecommendation'),
      (t.PLUGIN_FLOW_NAME = 'video-recommendation-flow-plugin'),
      (t.SEEN_VIDEOS_STORAGE_KEY = 'seen'),
      (t.GLOBO_AB_TIMEOUT = 3e3);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = n(12);
    var i = new ((n = n) && n.__esModule ? n : { default: n }).default();
    i.setHorizonClient();
    (t.default = {
      sendRecommendationScreenImpression: function () {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments[1];
        i.commonEvent({
          eventCategory: 'flow-videos',
          eventAction: 'impression',
          eventLabel: e.toString(),
          eventValue: null,
          eventProperty: t.toString(),
        });
      },
      sendRecommendationClick: function (e, t, n) {
        i.commonEvent({
          eventCategory: 'flow-videos',
          eventAction: 'click',
          eventLabel: e.toString(),
          eventValue: n,
          eventProperty: t.toString(),
        });
      },
      sendStartAutonext: function (e, t, n) {
        i.commonEvent({
          eventCategory: 'autonext-videos',
          eventAction: 'automatic play',
          eventLabel: n,
          eventValue: t,
          eventProperty: e.toString(),
        });
      },
      sendAdvanceAutonext: function (e, t, n) {
        i.commonEvent({
          eventCategory: 'autonext-videos',
          eventAction: 'click to play',
          eventLabel: n,
          eventValue: t,
          eventProperty: e.toString(),
        });
      },
      sendClickCancelAutonext: function (e, t) {
        i.commonEvent({
          eventCategory: 'autonext-videos',
          eventAction: 'click to cancel',
          eventLabel: t,
          eventValue: null,
          eventProperty: e.toString(),
        });
      },
      CATEGORY: 'flow-videos',
    }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function () {
        return n(4);
      }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = function (e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    n(5);
    var o = n(0),
      c = u(n(10)),
      a = u(n(11)),
      s = u(n(2)),
      l = n(1),
      d = u(n(13));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var n = Clappr,
      p = n.Events,
      f = n.UICorePlugin,
      h = {},
      n = (() => {
        var e = n,
          t = f;
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t,
          );
        function n(e) {
          var t;
          if (this instanceof n)
            return (
              ((t = ((e, t) => {
                if (e)
                  return !t || ('object' != typeof t && 'function' != typeof t)
                    ? e
                    : t;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              })(
                this,
                (n.__proto__ || Object.getPrototypeOf(n)).call(this, e),
              )).core.options.exitFullscreenOnEnd = !1),
              (t.pluginOptions =
                t.core._options.VideoRecommendationPlugin || {}),
              (t.enabled = !1),
              t.shouldInit &&
                ((t.uniqueId = t.core.uniqueId),
                (t.playerElement = t.core.el),
                (t.titleElement = t.pluginOptions.titleElement),
                (t.recommendationHandler = new d.default({
                  endpoint:
                    t.pluginOptions.endpoint ||
                    'https://recomendacao.globo.com/v3/globocom/ab/G1-VIDEOS-FLOW-item?responseFormat=legacyPublishing',
                  videoId: t.core.options.source,
                })),
                t.recommendationHandler.onError(function () {
                  (0, o.logging)('warn', 'Desabilitando plugin.'),
                    t.playerElement.classList.remove(
                      'video-rec-after-end--enabled',
                    ),
                    t.destroy();
                }),
                t.mountPluginElement(),
                t.mountCancelScreen(),
                t.addClickEvents(),
                t.enable(),
                t.addCloseToGlobal()),
              t
            );
          throw new TypeError('Cannot call a class as a function');
        }
        return (
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t)),
          i(n, [
            {
              key: 'name',
              get: function () {
                return l.PLUGIN_FLOW_NAME;
              },
            },
            {
              key: 'playback',
              get: function () {
                return this.core.getCurrentPlayback();
              },
            },
            {
              key: 'nextVideo',
              get: function () {
                return this.videos[0].content;
              },
            },
            {
              key: 'circleProgress',
              get: function () {
                return (
                  this.circleProgressCache ||
                    (this.circleProgressCache = (0, o.initCircleProgress)(
                      'canvas-' + this.uniqueId,
                    )),
                  this.circleProgressCache
                );
              },
            },
            {
              key: 'supportedVersion',
              get: function () {
                return { min: '0.4.0' };
              },
            },
            {
              key: 'shouldInit',
              get: function () {
                var e =
                    window.cdaaas &&
                    window.cdaaas.SETTINGS &&
                    window.cdaaas.SETTINGS.BRANDED_CONTENT,
                  t =
                    window.cdaaas &&
                    window.cdaaas.SETTINGS &&
                    'g1' === window.cdaaas.SETTINGS.SITE_ID;
                return !(e && t);
              },
            },
          ]),
          i(n, [
            {
              key: 'mountPluginElement',
              value: function () {
                (this.pluginElement = (0, o.createElement)(
                  'video-rec-after-end',
                )),
                  (this.pluginElement.innerHTML = this.template()),
                  (this.pluginElementTitle =
                    this.pluginElement.getElementsByClassName(
                      'video-rec-after-end__screen__title',
                    )[0]),
                  (this.pluginElementBackground =
                    this.pluginElement.getElementsByClassName(
                      'video-rec-after-end__screen--next-video',
                    )[0]),
                  this.playerElement.appendChild(this.pluginElement);
              },
            },
            {
              key: 'mountCancelScreen',
              value: function () {
                (this.cancelScreen = new a.default(
                  this.playerElement,
                  this.uniqueId,
                )),
                  this.cancelScreen.onReplay(this.replayVideo.bind(this)),
                  this.cancelScreen.onClick(this.playVideo.bind(this));
              },
            },
            {
              key: 'addClickEvents',
              value: function () {
                var e = this;
                (0, o.delegate)(
                  this.playerElement,
                  'click',
                  'canvas-' + this.uniqueId,
                  function () {
                    s.default.sendAdvanceAutonext(
                      e.nextVideo.video.id,
                      (0, o.getVolumeOfElementBsPlayer)(e.options.source),
                      (0, o.getTypeView)(e._options),
                    ),
                      e.circleProgress.stop(),
                      e.playVideo();
                  }.bind(this),
                ),
                  (0, o.delegate)(
                    this.playerElement,
                    'click',
                    'btn-cancel-' + this.uniqueId,
                    function () {
                      e.toggleScreen(!1),
                        s.default.sendClickCancelAutonext(
                          e.options.source,
                          (0, o.getTypeView)(e._options),
                        ),
                        e.circleProgress.stop(),
                        e.recommendationHandler.updateSeenVideos(
                          e.nextVideo.video.id,
                        ),
                        e.updatePlugin().then(function () {
                          return e.cancelScreen.open(e.options.source);
                        });
                    }.bind(this),
                  );
              },
            },
            {
              key: 'bindEvents',
              value: function () {
                this.listenTo(
                  this.core.mediaControl,
                  p.MEDIACONTROL_CONTAINERCHANGED,
                  this.onContainerChanged,
                );
              },
            },
            {
              key: 'onContainerChanged',
              value: function () {
                var e;
                this.container &&
                  (this.stopListening(this.container),
                  (e = this.container.playback)) &&
                  this.stopListening(e),
                  (this.container = this.core.getCurrentContainer()),
                  this.listenToOnce(
                    this.container.playback,
                    p.PLAYBACK_PLAY,
                    this.onPlay,
                  ),
                  this.listenTo(
                    this.container,
                    WP3.Events.WATCH_SESSION_END,
                    this.onEnded,
                  ),
                  this.listenTo(
                    this.container,
                    p.CONTAINER_DESTROYED,
                    this.onDestroy,
                  );
              },
            },
            {
              key: 'onDestroy',
              value: function () {
                this.circleProgress && this.circleProgress.stop();
              },
            },
            {
              key: 'getVideoAlternativeData',
              value: function (e) {
                var t = e._experiment_properties,
                  n = t.alternative,
                  i = t.userId,
                  r = t.hsid,
                  o = t.glbExpIdToken,
                  a = t.trackId,
                  t = t.userIdType,
                  e = e.id,
                  s = h[e];
                return (
                  s || ((s = new c.default()), (h[e] = s)),
                  {
                    alternative: n,
                    userId: i,
                    hsIdToken: r,
                    glbExpIdToken: o,
                    testId: a,
                    userIdType: t,
                    abClient: s,
                  }
                );
              },
            },
            {
              key: 'buildAndSendVideoConversion',
              value: function (e) {
                var t;
                e &&
                  ((t = (e = this.getVideoAlternativeData(e)).alternative),
                  e.abClient.sendConversion(
                    t,
                    e.testId,
                    e.userId,
                    e.hsIdToken,
                    e.glbExpIdToken,
                    e.userIdType,
                  ));
              },
            },
            {
              key: 'buildAndSendVideoImpression',
              value: function (e) {
                var t;
                e &&
                  ((t = (e = this.getVideoAlternativeData(e)).alternative),
                  e.abClient.sendImpression(
                    t,
                    e.testId,
                    e.userId,
                    e.hsIdToken,
                    e.glbExpIdToken,
                    e.userIdType,
                  ));
              },
            },
            {
              key: 'onPlay',
              value: function () {
                var e,
                  t = this;
                this.recommendationHandler.updateSeenVideos(
                  this.playback.video.id,
                ),
                  this.videos &&
                    ((e = this.videos.filter(function (e) {
                      return e.content.video.id === t.playback.video.id;
                    })[0]),
                    this.buildAndSendVideoConversion(e)),
                  this.updatePlugin(!0).catch(function () {});
              },
            },
            {
              key: 'playVideo',
              value: function () {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.nextVideo.video.id,
                  t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.nextVideo.title;
                this.toggleScreen(!1),
                  this.updateTitleElement(t),
                  this.core.load(e),
                  this.playback.play(),
                  this.updatePlugin().catch(function () {});
              },
            },
            {
              key: 'replayVideo',
              value: function () {
                this.playback.play();
              },
            },
            {
              key: 'onEnded',
              value: function () {
                var e = this;
                this.videos
                  ? (this.toggleScreen(!0),
                    this.buildAndSendVideoImpression(this.videos[0]),
                    this.circleProgress.start().then(function () {
                      e.circleProgress.stop(),
                        e.playVideo(),
                        s.default.sendStartAutonext(
                          e.nextVideo.video.id,
                          (0, o.getVolumeOfElementBsPlayer)(e.options.source),
                          (0, o.getTypeView)(e._options),
                        );
                    }),
                    this.recommendationHandler.updateSeenVideos(
                      this.nextVideo.video.id,
                    ))
                  : this.removePlugin();
              },
            },
            {
              key: 'updatePlugin',
              value: function () {
                var t = this,
                  e =
                    0 < arguments.length &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                return (
                  this.playerElement.classList.add(
                    'video-rec-after-end--enabled',
                  ),
                  this.toggleScreen(!1),
                  e
                    ? this.recommendationHandler
                        .getVideos()
                        .then(function (e) {
                          e
                            ? ((t.videos = e),
                              t.cancelScreen.updateVideos(e),
                              t.updateElement())
                            : t.removePlugin();
                        })
                        .catch(function () {
                          return t.removePlugin();
                        })
                    : Promise.resolve()
                );
              },
            },
            {
              key: 'updateElement',
              value: function () {
                (this.pluginElementBackground.style =
                  "background-image: url('" +
                  this.nextVideo.image.sizes.M.url +
                  "')"),
                  (this.pluginElementTitle.textContent = this.nextVideo.title);
              },
            },
            {
              key: 'updateTitleElement',
              value: function (e) {
                this.titleElement && (this.titleElement.textContent = e);
              },
            },
            {
              key: 'template',
              value: function () {
                return (
                  '\n      <div data-track-category="' +
                  s.default.CATEGORY +
                  '"\n        class="video-rec-after-end__screen video-rec-after-end__screen--next-video" style="background-image: url(\'\')">\n        <div class="video-rec-after-end__content">\n          <span class="video-rec-after-end__screen__chapeu">Assista ao próximo</span>\n          <span class="video-rec-after-end__screen__title"></span>\n          <div\n            data-track-action="next-video"\n            data-track-label="click"\n            class="video-rec-after-end__screen__canvas canvas-' +
                  this.uniqueId +
                  '"\n          >\n            <canvas id="canvas-' +
                  this.uniqueId +
                  '"></canvas>\n            <svg class="video-rec-after-end__screen__canvas__play" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <g fill="none" fill-rule="evenodd">\n              <path d="M0 0h24v24H0z"></path>\n              <path d="M8 6.267c0-.661.468-.931 1.04-.601l9.93 5.733c.573.33.573.871 0 1.202l-9.93 5.733c-.572.33-1.04.06-1.04-.6V6.266z" fill="#FFF"></path>\n            </g></svg>\n          </div>\n          <button\n            data-track-action="cancel-video"\n            data-track-label="click"\n            type="button"\n            class="video-rec-after-end__screen__btn-cancel btn-cancel-' +
                  this.uniqueId +
                  '">\n            Cancelar\n          </button>\n        </div>\n      </div>\n    '
                );
              },
            },
            {
              key: 'toggleScreen',
              value: function () {
                this.playerElement.classList.toggle(
                  'video-rec-after-end--show',
                  !(0 < arguments.length && void 0 !== arguments[0]) ||
                    arguments[0],
                );
              },
            },
            {
              key: 'addCloseToGlobal',
              value: function () {
                window.disableRecScreen = this.disableRecScreen.bind(this);
              },
            },
            {
              key: 'disableRecScreen',
              value: function () {
                (0, o.logging)(
                  'warn',
                  'Disabling Rec Screen due to external demand',
                ),
                  this.playerElement.classList.remove(
                    'video-rec-after-end--enabled',
                  ),
                  this.cancelScreen.close();
              },
            },
            {
              key: 'removePlugin',
              value: function () {
                (0, o.logging)('warn', 'Desabilitando plugin.'),
                  this.playerElement.classList.remove(
                    'video-rec-after-end--enabled',
                  ),
                  this.destroy();
              },
            },
          ]),
          n
        );
      })();
    (t.default = n), (e.exports = t.default);
  },
  function (e, t, n) {
    var i = n(6),
      r = ('string' == typeof i && (i = [[e.i, i, '']]), { hmr: !0 });
    (r.transform = void 0), n(8)(i, r);
    i.locals && (e.exports = i.locals);
  },
  function (e, t, n) {
    (e.exports = n(7)(!1)).push([
      e.i,
      '.clappr-player.video-rec-cancel-screen--enabled .poster{-webkit-filter:blur(10px);filter:blur(10px);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);position:static!important}.clappr-player:not(.clappr-detach--is-detached) .video-rec-cancel-screen__close-button{display:none!important}.clappr-player.clappr-detach--is-detached .video-rec-cancel-screen{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.clappr-player.clappr-detach--is-detached .video-rec-cancel-screen__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;margin-top:12px!important}.clappr-player.clappr-detach--is-detached .video-rec-cancel-screen__header>button{-ms-flex-item-align:end;align-self:flex-end;margin-top:-25px!important;padding:0;margin-right:5px!important}.clappr-player.clappr-detach--is-detached .video-rec-cancel-screen__close-button{width:20px!important;height:20px!important;pointer-events:auto}@media screen and (min-width:620px){.clappr-player.clappr-detach--is-detached .video-rec-cancel-screen__close-button{width:24px!important;height:24px!important}}.clappr-player.clappr-detach--is-detached .video-rec-cancel-screen__close-button>svg{background-color:rgba(0,0,0,.5);border-radius:4px;vertical-align:middle}.video-rec-cancel-screen{width:100%;height:100%;position:absolute;display:none!important;z-index:1000;background-color:transparent;background-position:0 0;background-repeat:no-repeat;background-size:cover;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:#fff;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:default}.video-rec-cancel-screen--active{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.video-rec-cancel-screen__title{font-size:14px!important;font-family:opensans-regular!important}@media screen and (min-width:620px){.video-rec-cancel-screen__title{font-size:20px!important;margin-top:5px!important}}.video-rec-cancel-screen__replay{display:-webkit-box;display:-ms-flexbox;display:flex;font:normal 14px/18px opensans-regular!important;letter-spacing:-.3px;text-align:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:1002;color:#fff;fill:#fff;background-color:transparent;border:0;margin:18px auto 0;padding:8px;outline:0;cursor:pointer}@media screen and (min-width:620px){.video-rec-cancel-screen__replay{margin-top:35px;font:normal 16px/18px opensans-regular!important}}.video-rec-cancel-screen__replay svg{margin-right:6px}.video-rec-cancel-screen__video-list{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:15px!important}@media screen and (min-width:620px){.video-rec-cancel-screen__video-list{max-width:80%;margin-top:25px!important}}.video-rec-cancel-screen__video-list section{-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0 15px!important;display:none!important;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;cursor:pointer}.video-rec-cancel-screen__video-list section:first-child{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media screen and (min-width:620px){.video-rec-cancel-screen__video-list section{display:block!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.video-rec-cancel-screen__video-list section:first-child{display:block!important}}.video-rec-cancel-screen__video-list section .thumb-container{max-width:35%;height:auto;position:relative;background-color:#333}@media screen and (min-width:620px){.video-rec-cancel-screen__video-list section .thumb-container{max-width:100%}.video-rec-cancel-screen__video-list section .thumb-container__picture{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.video-rec-cancel-screen__video-list section .thumb-container picture img{width:100%}@media screen and (min-width:620px){.video-rec-cancel-screen__video-list section .thumb-container picture img{max-width:100%;height:auto}}.video-rec-cancel-screen__video-list section .thumb-container__duration{right:0;position:absolute;bottom:0;background-color:#000;font-size:12px!important;font-family:opensans-regular!important;padding:2px 5px!important}.video-rec-cancel-screen__video-list section .thumb-container__play{top:30%;left:37%;max-width:25%;position:absolute}.video-rec-cancel-screen__video-list section .info-container{width:100%;text-align:left;font:normal 14px/18px opensans-bold!important;margin-left:10px!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media screen and (min-width:620px){.video-rec-cancel-screen__video-list section .info-container{display:block;margin-left:0!important}}.video-rec-cancel-screen__video-list section .info-container__chapeu{display:block;font-family:opensans-regular!important;font-weight:600;-webkit-line-clamp:1;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}@media screen and (min-width:620px){.video-rec-cancel-screen__video-list section .info-container__chapeu{margin-top:10px!important;font-size:14px!important}}.video-rec-cancel-screen__video-list section .info-container__title{-webkit-line-clamp:2;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical}@media screen and (min-width:620px){.video-rec-cancel-screen__video-list section .info-container__title{-webkit-line-clamp:3;margin-top:4px!important;font-size:16px!important;line-height:20px!important}}.clappr-player.video-rec-after-end--enabled .poster__play-wrapper{visibility:hidden!important}.video-rec-after-end{display:none!important;width:100%;height:100%;position:absolute;z-index:1000;background-color:#333}.video-rec-after-end #canvas{width:100%;height:auto}.video-rec-after-end__content{max-width:72%;z-index:1002}.video-rec-after-end__screen{width:100%;height:100%;position:absolute;z-index:1000;background-color:transparent;background-position:0 0;background-repeat:no-repeat;background-size:cover;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:#fff;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.video-rec-after-end__screen--next-video{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.video-rec-after-end__screen--next-video:after{content:"";width:100%;height:100%;position:absolute;top:0;left:0;z-index:1001;background-color:#000;opacity:.6}.video-rec-after-end__screen__chapeu{display:block;font:normal 14px/19px opensans-regular!important;letter-spacing:-.3px;text-align:center}@media screen and (min-width:620px){.video-rec-after-end__screen__chapeu{font:normal 18px/18px opensans-regular!important}}.video-rec-after-end__screen__title{display:block;font:normal 4.5vw/5.5vw opensans-bold!important;letter-spacing:-.3px;text-align:center;margin-top:2px!important;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media screen and (min-width:620px){.video-rec-after-end__screen__title{font-size:20px!important;line-height:24px!important;margin-top:8px!important;display:block}}.video-rec-after-end__screen__canvas{position:relative;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;margin-top:10px!important;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);height:12vw}@media screen and (min-width:620px){.video-rec-after-end__screen__canvas{margin-top:30px!important;-webkit-transform:none;-ms-transform:none;transform:none;height:auto;height:70px}}.video-rec-after-end__screen__canvas__play{max-width:40px;position:absolute}.video-rec-after-end__screen__btn-cancel{display:block;font:normal 14px/18px opensans-regular!important;letter-spacing:-.3px;text-align:center;z-index:1002;color:#fff;background-color:transparent;border:0;margin:10px auto 0;cursor:pointer;position:relative;z-index:2}@media screen and (min-width:620px){.video-rec-after-end__screen__btn-cancel{font:normal 16px/18px opensans-regular!important;margin:28px auto 0}}.video-rec-after-end__screen__btn-cancel:active{outline:0}.video-rec-after-end--show .video-rec-after-end{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.video-rec-after-end--show .media-control{display:none}',
      '',
    ]);
  },
  function (e, t, n) {
    e.exports = function (n) {
      var a = [];
      return (
        (a.toString = function () {
          return this.map(function (e) {
            var t = ((e, t) => {
              var n = e[1] || '',
                i = e[3];
              return i
                ? (t && 'function' == typeof btoa
                    ? ((e = ((e) =>
                        '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
                        ' */')(i)),
                      (t = i.sources.map(function (e) {
                        return '/*# sourceURL=' + i.sourceRoot + e + ' */';
                      })),
                      [n].concat(t).concat([e]))
                    : [n]
                  ).join('\n')
                : n;
            })(e, n);
            return e[2] ? '@media ' + e[2] + '{' + t + '}' : t;
          }).join('');
        }),
        (a.i = function (e, t) {
          'string' == typeof e && (e = [[null, e, '']]);
          for (var n = {}, i = 0; i < this.length; i++) {
            var r = this[i][0];
            'number' == typeof r && (n[r] = !0);
          }
          for (i = 0; i < e.length; i++) {
            var o = e[i];
            ('number' == typeof o[0] && n[o[0]]) ||
              (t && !o[2]
                ? (o[2] = t)
                : t && (o[2] = '(' + o[2] + ') and (' + t + ')'),
              a.push(o));
          }
        }),
        a
      );
    };
  },
  function (e, t, n) {
    var i,
      r,
      o,
      c = {},
      l =
        ((i = function () {
          return window && document && document.all && !window.atob;
        }),
        function () {
          return (r = void 0 === r ? i.apply(this, arguments) : r);
        }),
      a =
        ((o = {}),
        function (e) {
          if (void 0 === o[e]) {
            var t = function (e) {
              return document.querySelector(e);
            }.call(this, e);
            if (t instanceof window.HTMLIFrameElement)
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            o[e] = t;
          }
          return o[e];
        }),
      s = null,
      d = 0,
      u = [],
      p = n(9);
    function f(e, t) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n],
          r = c[i.id];
        if (r) {
          r.refs++;
          for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
          for (; o < i.parts.length; o++) r.parts.push(y(i.parts[o], t));
        } else {
          for (var a = [], o = 0; o < i.parts.length; o++)
            a.push(y(i.parts[o], t));
          c[i.id] = { id: i.id, refs: 1, parts: a };
        }
      }
    }
    function h(e, t) {
      for (var n = [], i = {}, r = 0; r < e.length; r++) {
        var o = e[r],
          a = t.base ? o[0] + t.base : o[0],
          o = { css: o[1], media: o[2], sourceMap: o[3] };
        i[a] ? i[a].parts.push(o) : n.push((i[a] = { id: a, parts: [o] }));
      }
      return n;
    }
    function v(e, t) {
      var n = a(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
        );
      var i = u[u.length - 1];
      if ('top' === e.insertAt)
        i
          ? i.nextSibling
            ? n.insertBefore(t, i.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          u.push(t);
      else if ('bottom' === e.insertAt) n.appendChild(t);
      else {
        if ('object' != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n",
          );
        i = a(e.insertInto + ' ' + e.insertAt.before);
        n.insertBefore(t, i);
      }
    }
    function m(e) {
      null !== e.parentNode &&
        (e.parentNode.removeChild(e), 0 <= (e = u.indexOf(e))) &&
        u.splice(e, 1);
    }
    function g(e) {
      var t = document.createElement('style');
      return (e.attrs.type = 'text/css'), b(t, e.attrs), v(e, t), t;
    }
    function b(t, n) {
      Object.keys(n).forEach(function (e) {
        t.setAttribute(e, n[e]);
      });
    }
    function y(t, e) {
      var n, i, r, o, a;
      if (e.transform && t.css) {
        if (!(o = e.transform(t.css))) return function () {};
        t.css = o;
      }
      return (
        (r = e.singleton
          ? ((o = d++),
            (n = s = s || g(e)),
            (i = w.bind(null, n, o, !1)),
            w.bind(null, n, o, !0))
          : t.sourceMap &&
              'function' == typeof URL &&
              'function' == typeof URL.createObjectURL &&
              'function' == typeof URL.revokeObjectURL &&
              'function' == typeof Blob &&
              'function' == typeof btoa
            ? ((o = e),
              (a = document.createElement('link')),
              (o.attrs.type = 'text/css'),
              (o.attrs.rel = 'stylesheet'),
              b(a, o.attrs),
              v(o, a),
              (n = a),
              (i = function (e, t, n) {
                var i = n.css,
                  n = n.sourceMap,
                  r = void 0 === t.convertToAbsoluteUrls && n;
                (t.convertToAbsoluteUrls || r) && (i = p(i));
                n &&
                  (i +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
                    ' */');
                (t = new Blob([i], { type: 'text/css' })), (r = e.href);
                (e.href = URL.createObjectURL(t)), r && URL.revokeObjectURL(r);
              }.bind(null, n, e)),
              function () {
                m(n), n.href && URL.revokeObjectURL(n.href);
              })
            : ((n = g(e)),
              (i = function (e, t) {
                var n = t.css,
                  t = t.media;
                t && e.setAttribute('media', t);
                if (e.styleSheet) e.styleSheet.cssText = n;
                else {
                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                  e.appendChild(document.createTextNode(n));
                }
              }.bind(null, n)),
              function () {
                m(n);
              })),
        i(t),
        function (e) {
          e
            ? (e.css === t.css &&
                e.media === t.media &&
                e.sourceMap === t.sourceMap) ||
              i((t = e))
            : r();
        }
      );
    }
    e.exports = function (e, a) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment',
        );
      ((a = a || {}).attrs = 'object' == typeof a.attrs ? a.attrs : {}),
        a.singleton || 'boolean' == typeof a.singleton || (a.singleton = l()),
        a.insertInto || (a.insertInto = 'head'),
        a.insertAt || (a.insertAt = 'bottom');
      var s = h(e, a);
      return (
        f(s, a),
        function (e) {
          for (var t = [], n = 0; n < s.length; n++) {
            var i = s[n];
            (r = c[i.id]).refs--, t.push(r);
          }
          e && f(h(e, a), a);
          for (var r, n = 0; n < t.length; n++)
            if (0 === (r = t[n]).refs) {
              for (var o = 0; o < r.parts.length; o++) r.parts[o]();
              delete c[r.id];
            }
        }
      );
    };
    x = [];
    var x,
      _ = function (e, t) {
        return (x[e] = t), x.filter(Boolean).join('\n');
      };
    function w(e, t, n, i) {
      var n = n ? '' : i.css;
      e.styleSheet
        ? (e.styleSheet.cssText = _(t, n))
        : ((i = document.createTextNode(n)),
          (n = e.childNodes)[t] && e.removeChild(n[t]),
          n.length ? e.insertBefore(i, n[t]) : e.appendChild(i));
    }
  },
  function (e, t, n) {
    e.exports = function (e) {
      var n,
        i,
        t = 'undefined' != typeof window && window.location;
      if (t)
        return e && 'string' == typeof e
          ? ((n = t.protocol + '//' + t.host),
            (i = n + t.pathname.replace(/\/[^\/]*$/, '/')),
            e.replace(
              /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
              function (e, t) {
                t = t
                  .trim()
                  .replace(/^"(.*)"$/, function (e, t) {
                    return t;
                  })
                  .replace(/^'(.*)'$/, function (e, t) {
                    return t;
                  });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(t)
                  ? e
                  : ((e =
                      0 === t.indexOf('//')
                        ? t
                        : 0 === t.indexOf('/')
                          ? n + t
                          : i + t.replace(/^\.\//, '')),
                    'url(' + JSON.stringify(e) + ')');
              },
            ))
          : e;
      throw new Error('fixUrls requires window.location');
    };
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = function (e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var u = n(0),
      o = n(1);
    function a(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function s(e) {
      return function () {
        var s = e.apply(this, arguments);
        return new Promise(function (o, a) {
          return (function t(e, n) {
            try {
              var i = s[e](n),
                r = i.value;
            } catch (e) {
              return void a(e);
            }
            if (!i.done)
              return Promise.resolve(r).then(
                function (e) {
                  t('next', e);
                },
                function (e) {
                  t('throw', e);
                },
              );
            o(r);
          })('next');
        });
      };
    }
    i(f, [
      {
        key: '_lazyInit',
        value:
          ((p = s(
            regeneratorRuntime.mark(function e() {
              var n = this;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (this._initPromise)
                          return e.abrupt('return', this._initPromise);
                        e.next = 2;
                        break;
                      case 2:
                        return (
                          (this._initPromise = s(
                            regeneratorRuntime.mark(function e() {
                              var t;
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          window.globalWebdeps('globo-ab-sdk')
                                        );
                                      case 3:
                                        (t =
                                          'qa' === u.env ||
                                          'sandbox_qa' === u.env
                                            ? 'qa-https'
                                            : 'prod-https'),
                                          (n.globoABClient =
                                            new window.GloboAbSdk().ab(t)),
                                          n.globoABClient.setTimeout(
                                            o.GLOBO_AB_TIMEOUT,
                                          ),
                                          (e.next = 13);
                                        break;
                                      case 8:
                                        throw (
                                          ((e.prev = 8),
                                          (e.t0 = e.catch(0)),
                                          (0, u.logging)(
                                            'error',
                                            'The following error ocurred while creating an instance of the AB SDK:' +
                                              e.t0,
                                          ),
                                          (n._initPromise = null),
                                          e.t0)
                                        );
                                      case 13:
                                      case 'end':
                                        return e.stop();
                                    }
                                },
                                e,
                                n,
                                [[0, 8]],
                              );
                            }),
                          )()),
                          e.abrupt('return', this._initPromise)
                        );
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          )),
          function () {
            return p.apply(this, arguments);
          }),
      },
      {
        key: '_sendCustom',
        value: function (e) {
          for (
            var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            n[i - 1] = arguments[i];
          var r = n[0],
            o = n[1],
            a = n[2],
            s = n[3],
            c = n[4],
            l = n[5],
            d = [{ 'x-canonical-uri': window.cdaaas.SETTINGS.CANONICAL_URL }];
          (0, u.logging)(
            'log',
            'send ' +
              e +
              ' to experiment ' +
              this.experimentName +
              ' for alternative ' +
              r +
              ', with testId ' +
              o,
          ),
            'impression' === e
              ? this.globoABClient.impression(
                  {
                    experiment: this.experimentName,
                    alternative: r,
                    testId: o,
                    context: [],
                  },
                  a,
                  c,
                  s,
                  d,
                  l,
                )
              : 'conversion' === e &&
                this.globoABClient.conversion(
                  {
                    experiment: this.experimentName,
                    alternative: r,
                    testId: o,
                    context: [],
                  },
                  a,
                  c,
                  s,
                  d,
                  l,
                );
        },
      },
      {
        key: 'send',
        value:
          ((d = s(
            regeneratorRuntime.mark(function e(t) {
              var n,
                i,
                r,
                o = arguments;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), this._lazyInit();
                      case 2:
                        if (!this._interactionsSent.includes(t)) {
                          for (
                            n = o.length, i = Array(1 < n ? n - 1 : 0), r = 1;
                            r < n;
                            r++
                          )
                            i[r - 1] = o[r];
                          this._sendCustom.apply(this, [t].concat(a(i))),
                            this._interactionsSent.push(t);
                        }
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          )),
          function (e) {
            return d.apply(this, arguments);
          }),
      },
      {
        key: 'sendImpression',
        value:
          ((l = s(
            regeneratorRuntime.mark(function e() {
              for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                n[i] = arguments[i];
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          this.send.apply(this, ['impression'].concat(a(n)))
                        );
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          )),
          function () {
            return l.apply(this, arguments);
          }),
      },
      {
        key: 'sendConversion',
        value:
          ((c = s(
            regeneratorRuntime.mark(function e() {
              for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                n[i] = arguments[i];
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          this.send.apply(this, ['conversion'].concat(a(n)))
                        );
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          )),
          function () {
            return c.apply(this, arguments);
          }),
      },
    ]);
    var c,
      l,
      d,
      p,
      n = f;
    function f() {
      if (!(this instanceof f))
        throw new TypeError('Cannot call a class as a function');
      (this.experimentName = 'G1-VIDEOS-FLOW-item'),
        (this.globoABClient = null),
        (this._interactionsSent = []),
        (this._initPromise = null);
    }
    (t.default = n), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = function (e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var o = n(0),
      n = n(2),
      a = (n = n) && n.__esModule ? n : { default: n };
    function s(e, t) {
      if (!(this instanceof s))
        throw new TypeError('Cannot call a class as a function');
      (this.uniqueId = t),
        (this.playerElement = e),
        (this.videoIds = []),
        (this.element = (0, o.createElement)('video-rec-cancel-screen')),
        (this.element.innerHTML = this.template()),
        this.playerElement.appendChild(this.element),
        (this.listElement = this.element.getElementsByClassName(
          'video-rec-cancel-screen__video-list',
        )[0]),
        (this.replayCallback = function () {}),
        (this.clickCallback = function (e) {
          return e;
        }),
        (0, o.delegate)(
          this.playerElement,
          'click',
          'replay-' + this.uniqueId,
          this.handleReplay.bind(this),
        ),
        (0, o.delegate)(
          this.playerElement,
          'click',
          'video-' + this.uniqueId,
          this.handleClick.bind(this),
        ),
        (0, o.delegate)(
          this.playerElement,
          'click',
          'close-' + this.uniqueId,
          this.handleClose.bind(this),
        );
    }
    i(s, [
      {
        key: 'open',
        value: function (e) {
          this.playerElement.classList.add('video-rec-cancel-screen--enabled'),
            this.element.classList.add('video-rec-cancel-screen--active'),
            a.default.sendRecommendationScreenImpression(this.videoIds, e);
        },
      },
      {
        key: 'close',
        value: function () {
          this.playerElement.classList.remove(
            'video-rec-cancel-screen--enabled',
          ),
            this.element.classList.remove('video-rec-cancel-screen--active');
        },
      },
      {
        key: 'closeButton',
        value: function () {
          WM.PlayerManager.map(function (e) {
            e.configure({ isDetached: !1 });
          });
        },
      },
      {
        key: 'updateVideos',
        value: function () {
          var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
          (this.videoIds = e.map(function (e) {
            return e.content.video.id;
          })),
            (this.listElement.innerHTML = e
              .map(this.renderVideo.bind(this))
              .join(''));
        },
      },
      {
        key: 'onReplay',
        value: function (e) {
          this.replayCallback = e;
        },
      },
      {
        key: 'onClick',
        value: function (e) {
          this.clickCallback = e;
        },
      },
      {
        key: 'handleReplay',
        value: function () {
          this.close(), this.replayCallback();
        },
      },
      {
        key: 'handleClose',
        value: function () {
          this.closeButton();
        },
      },
      {
        key: 'handleClick',
        value: function (e) {
          var t = parseInt(e.getAttribute('data-index'), 10) + 1,
            n = parseInt(e.getAttribute('data-video-id')),
            e = e.getAttribute('data-video-title');
          this.clickCallback(n, e),
            this.close(),
            a.default.sendRecommendationClick(
              t,
              n,
              this.playerElement.parentElement.WMPlayer.container.volume,
            );
        },
      },
      {
        key: 'renderVideo',
        value: function (e, t) {
          return (
            '\n      <section data-index="' +
            t +
            '" class="video-' +
            this.uniqueId +
            '"\n      data-video-id="' +
            e.content.video.id +
            '"\n      data-video-title="' +
            e.content.title +
            '">\n        <div class="thumb-container">\n          <picture class="thumb-container__picture">\n            <source media="(min-width: 620px)" srcset="' +
            e.content.image.sizes.S.url +
            '">\n            <img src="' +
            e.content.image.sizes.S.url +
            '" />\n          </picture>\n          <span class="thumb-container__duration">' +
            (0, o.parseMilliseconds)(e.content.video.duration) +
            '</span>\n          <svg class="thumb-container__play" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <g fill="none" fill-rule="evenodd">\n              <path d="M0 0h24v24H0z"></path>\n              <path d="M8 6.267c0-.661.468-.931 1.04-.601l9.93 5.733c.573.33.573.871 0 1.202l-9.93 5.733c-.572.33-1.04.06-1.04-.6V6.266z" fill="#FFF"></path>\n            </g>\n          </svg>\n        </div>\n        <div class="info-container">\n          <span class="info-container__chapeu">' +
            e.content.section +
            '</span>\n          <span class="info-container__title">' +
            e.content.title +
            '<span>\n        </div>\n      </section>\n    '
          );
        },
      },
      {
        key: 'template',
        value: function () {
          return (
            '\n      <div class="video-rec-cancel-screen__header">\n        <span class="video-rec-cancel-screen__title">Assista também</span>\n        <button class="video-rec-cancel-screen__close-button close-' +
            this.uniqueId +
            ' media-control-button">\n          <svg fill="#FFF" viewBox="0 0 24 24" >\n            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />\n          </svg>\n        </button>\n      </div>\n      <div class="video-rec-cancel-screen__video-list"></div>\n      <button class="video-rec-cancel-screen__replay replay-' +
            this.uniqueId +
            '" type="button">\n        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22">\n          <path d="M0 0h24v24H0z" fill="none"/>\n          <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>\n        </svg>\n        Reveja\n      </button>\n    '
          );
        },
      },
    ]),
      (t.default = s),
      (e.exports = t.default);
  },
  function (e, t, n) {
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function r() {
      if (!(this instanceof r))
        throw new TypeError('Cannot call a class as a function');
      this.client = null;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (function (e, t, n) {
        t && i(e.prototype, t), n && i(e, n);
      })(r, [
        {
          key: 'setHorizonClient',
          value: function () {
            var t = this;
            setTimeout(function () {
              if (window.HorizonClient)
                return window.HorizonClient.then(function (e) {
                  return (t.client = e);
                });
              t.setHorizonClient();
            }, 100);
          },
        },
        {
          key: 'send',
          value: function (e) {
            this.client && this.client.send(Object.assign(e));
          },
        },
        {
          key: 'commonEvent',
          value: function (e) {
            var t = e.eventCategory;
            this.send({
              id: 'common-event',
              version: '0.1',
              contentType: 'common',
              properties: {
                eventCategory: t,
                eventAction: e.eventAction,
                eventLabel: e.eventLabel,
                eventValue: e.eventValue,
                eventProperty: e.eventProperty,
              },
            });
          },
        },
      ]),
      (t.default = r),
      (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) {
          var n = t,
            i = [],
            r = !0,
            t = !1,
            o = void 0;
          try {
            for (
              var a, s = e[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (i.push(a.value), !n || i.length !== n);
              r = !0
            );
          } catch (e) {
            (t = !0), (o = e);
          } finally {
            try {
              !r && s.return && s.return();
            } finally {
              if (t) throw o;
            }
          }
          return i;
        }
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      },
      i = function (e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
      };
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var a = n(1),
      s = n(0),
      n = n(14),
      c = (n = n) && n.__esModule ? n : { default: n };
    function l(e) {
      return function () {
        var s = e.apply(this, arguments);
        return new Promise(function (o, a) {
          return (function t(e, n) {
            try {
              var i = s[e](n),
                r = i.value;
            } catch (e) {
              return void a(e);
            }
            if (!i.done)
              return Promise.resolve(r).then(
                function (e) {
                  t('next', e);
                },
                function (e) {
                  t('throw', e);
                },
              );
            o(r);
          })('next');
        });
      };
    }
    i(p, [
      {
        key: '_getEndpoint',
        value:
          ((u = l(
            regeneratorRuntime.mark(function e() {
              var t, n;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), this._getHorizonData();
                      case 2:
                        return (
                          (t = e.sent),
                          (n = this.endpoint),
                          this.videoId &&
                            (n += '&anchors.item=video:' + this.videoId),
                          t.hsid && (n += '&hsid=' + t.hsid),
                          t.anonymous && (n += '&glb_uid=' + t.anonymous),
                          e.abrupt('return', Promise.resolve(n))
                        );
                      case 8:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          )),
          function () {
            return u.apply(this, arguments);
          }),
      },
      {
        key: '_getHorizonData',
        value:
          ((d = l(
            regeneratorRuntime.mark(function e() {
              var t, n, i;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = new c.default()),
                          (e.next = 3),
                          Promise.all([t.getHsid(), t.getAnonymousUser()])
                        );
                      case 3:
                        if (
                          ((t = e.sent),
                          (i = r(t, 2)),
                          (n = i[0]),
                          (i = i[1]),
                          n && i)
                        ) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt(
                          'return',
                          Promise.reject(
                            new Error('Erro ao obter hsid ou usuário anônimo.'),
                          ),
                        );
                      case 9:
                        return e.abrupt('return', {
                          hsid: n,
                          anonymous: i.glb_uid,
                        });
                      case 10:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          )),
          function () {
            return d.apply(this, arguments);
          }),
      },
      {
        key: '_requestData',
        value: function () {
          var t = this;
          return this._getEndpoint().then(function (e) {
            return (0, s.ajax)({ url: e })
              .catch(function (e) {
                return (
                  (0, s.logging)(
                    'error',
                    'Falha ao requisitar vídeos recomendados.',
                  ),
                  Promise.reject(e)
                );
              })
              .then(function (e) {
                return (
                  (t.endpointData = JSON.parse(e)),
                  Promise.resolve(t.endpointData)
                );
              });
          });
        },
      },
      {
        key: '_getSessionStorage',
        value: function (e) {
          if (window.sessionStorage) {
            e = window.sessionStorage.getItem(a.PLUGIN_KEYNAME + '--' + e);
            if (!e) return null;
            try {
              return JSON.parse(e);
            } catch (e) {
              return { error: e };
            }
          }
        },
      },
      {
        key: '_setSessionStorage',
        value: function (e, t) {
          var n;
          if (window.sessionStorage)
            return (
              (n = 'string' == typeof e ? e : JSON.stringify(e)),
              window.sessionStorage.setItem(a.PLUGIN_KEYNAME + '--' + t, n),
              e
            );
        },
      },
      {
        key: '_filterSeenVideos',
        value: function (e) {
          var t = this.getSeenVideos();
          return t.length <= 0
            ? e
            : e.filter(function (e) {
                return t.indexOf(e.content.video.id) < 0;
              });
        },
      },
      {
        key: 'onError',
        value: function (e) {
          'function' == typeof e && (this.onErrorCallback = e);
        },
      },
      {
        key: 'getSeenVideos',
        value: function () {
          return this._getSessionStorage(a.SEEN_VIDEOS_STORAGE_KEY) || [];
        },
      },
      {
        key: 'getVideos',
        value: function () {
          var t = this,
            n =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : 3;
          return this._requestData()
            .then(function (e) {
              return t._filterSeenVideos(e);
            })
            .then(function (e) {
              return e.length >= n
                ? Promise.resolve(e.slice(0, n))
                : ((0, s.logging)('warn', 'Todos os vídeos foram vistos.'),
                  Promise.reject());
            })
            .catch(function (e) {
              return (
                e instanceof Error && (0, s.logging)('error', e),
                Promise.reject(t.onErrorCallback())
              );
            });
        },
      },
      {
        key: 'updateSeenVideos',
        value: function (e) {
          var t = this.getSeenVideos();
          return (
            e && t.indexOf(e) < 0 && t.push(e),
            this._setSessionStorage(t, a.SEEN_VIDEOS_STORAGE_KEY)
          );
        },
      },
    ]);
    var d,
      u,
      n = p;
    function p(e) {
      var t = e.endpoint,
        e = e.videoId;
      if (!(this instanceof p))
        throw new TypeError('Cannot call a class as a function');
      (this.endpoint = t),
        (this.endpointData = []),
        (this.currentConfig = {}),
        (this.onErrorCallback = function () {}),
        (this.videoId = e);
    }
    (t.default = n), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = function (e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var o = n(0);
    function a(e) {
      return function () {
        var s = e.apply(this, arguments);
        return new Promise(function (o, a) {
          return (function t(e, n) {
            try {
              var i = s[e](n),
                r = i.value;
            } catch (e) {
              return void a(e);
            }
            if (!i.done)
              return Promise.resolve(r).then(
                function (e) {
                  t('next', e);
                },
                function (e) {
                  t('throw', e);
                },
              );
            o(r);
          })('next');
        });
      };
    }
    i(u, [
      {
        key: '_lazyInit',
        value:
          ((d = a(
            regeneratorRuntime.mark(function e() {
              var t = this;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (this._initPromise)
                          return e.abrupt('return', this._initPromise);
                        e.next = 2;
                        break;
                      case 2:
                        return (
                          (this._initPromise = a(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          window.globalWebdeps('horizon-v3')
                                        );
                                      case 3:
                                        (t.horizonv3Client = window.horizonv3),
                                          (e.next = 11);
                                        break;
                                      case 6:
                                        throw (
                                          ((e.prev = 6),
                                          (e.t0 = e.catch(0)),
                                          (0, o.logging)(
                                            'error',
                                            'The following error ocurred while creating an instance of the Horizon:' +
                                              e.t0,
                                          ),
                                          (t._initPromise = null),
                                          e.t0)
                                        );
                                      case 11:
                                      case 'end':
                                        return e.stop();
                                    }
                                },
                                e,
                                t,
                                [[0, 6]],
                              );
                            }),
                          )()),
                          e.abrupt('return', this._initPromise)
                        );
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          )),
          function () {
            return d.apply(this, arguments);
          }),
      },
      {
        key: '_ensureClientInitialized',
        value:
          ((l = a(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (this.horizonv3Client) {
                          e.next = 3;
                          break;
                        }
                        return (e.next = 3), this._lazyInit();
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          )),
          function () {
            return l.apply(this, arguments);
          }),
      },
      {
        key: 'getHsid',
        value:
          ((c = a(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), this._ensureClientInitialized();
                      case 2:
                        return e.abrupt(
                          'return',
                          this.horizonv3Client.IDManager.getHsid()
                            .then(function (e) {
                              return e;
                            })
                            .catch(function (e) {
                              return (
                                (0, o.logging)(
                                  'error',
                                  '[Player-plugin-videos-recommendation] - Error error getting hsid: ' +
                                    e,
                                ),
                                null
                              );
                            }),
                        );
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          )),
          function () {
            return c.apply(this, arguments);
          }),
      },
      {
        key: 'getAnonymousUser',
        value:
          ((s = a(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), this._ensureClientInitialized();
                      case 2:
                        return e.abrupt(
                          'return',
                          this.horizonv3Client.IDManager.getAnonymousUser()
                            .then(function (e) {
                              return e;
                            })
                            .catch(function (e) {
                              return (
                                (0, o.logging)(
                                  'error',
                                  '[Player-plugin-videos-recommendation] - Error error getting anonymous user: ' +
                                    e,
                                ),
                                null
                              );
                            }),
                        );
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          )),
          function () {
            return s.apply(this, arguments);
          }),
      },
    ]);
    var s,
      c,
      l,
      d,
      n = u;
    function u() {
      if (!(this instanceof u))
        throw new TypeError('Cannot call a class as a function');
      (this.horizonv3Client = null), (this._initPromise = null);
    }
    (t.default = n), (e.exports = t.default);
  },
]);
