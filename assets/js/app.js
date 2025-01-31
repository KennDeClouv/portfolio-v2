(() => {
  var au = Object.create;
  var Kr = Object.defineProperty,
    lu = Object.defineProperties,
    uu = Object.getOwnPropertyDescriptor,
    hu = Object.getOwnPropertyDescriptors,
    fu = Object.getOwnPropertyNames,
    Fo = Object.getOwnPropertySymbols,
    cu = Object.getPrototypeOf,
    zo = Object.prototype.hasOwnProperty,
    du = Object.prototype.propertyIsEnumerable;
  var No = (s, t, e) =>
      t in s
        ? Kr(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
        : (s[t] = e),
    Gt = (s, t) => {
      for (var e in t || (t = {})) zo.call(t, e) && No(s, e, t[e]);
      if (Fo) for (var e of Fo(t)) du.call(t, e) && No(s, e, t[e]);
      return s;
    },
    br = (s, t) => lu(s, hu(t));
  var Qr = (s, t) => () => (
      t || s((t = { exports: {} }).exports, t), t.exports
    ),
    pu = (s, t) => {
      for (var e in t) Kr(s, e, { get: t[e], enumerable: !0 });
    },
    _u = (s, t, e, i) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let r of fu(t))
          !zo.call(s, r) &&
            r !== e &&
            Kr(s, r, {
              get: () => t[r],
              enumerable: !(i = uu(t, r)) || i.enumerable,
            });
      return s;
    };
  var Jr = (s, t, e) => (
    (e = s != null ? au(cu(s)) : {}),
    _u(
      t || !s || !s.__esModule
        ? Kr(e, "default", { value: s, enumerable: !0 })
        : e,
      s
    )
  );
  var Bo = (s, t, e) =>
    new Promise((i, r) => {
      var n = (l) => {
          try {
            a(e.next(l));
          } catch (u) {
            r(u);
          }
        },
        o = (l) => {
          try {
            a(e.throw(l));
          } catch (u) {
            r(u);
          }
        },
        a = (l) => (l.done ? i(l.value) : Promise.resolve(l.value).then(n, o));
      a((e = e.apply(s, t)).next());
    });
  var $o = Qr((Uf, cs) => {
    function fs() {}
    fs.prototype = {
      on: function (s, t, e) {
        var i = this.e || (this.e = {});
        return (i[s] || (i[s] = [])).push({ fn: t, ctx: e }), this;
      },
      once: function (s, t, e) {
        var i = this;
        function r() {
          i.off(s, r), t.apply(e, arguments);
        }
        return (r._ = t), this.on(s, r, e);
      },
      emit: function (s) {
        var t = [].slice.call(arguments, 1),
          e = ((this.e || (this.e = {}))[s] || []).slice(),
          i = 0,
          r = e.length;
        for (i; i < r; i++) e[i].fn.apply(e[i].ctx, t);
        return this;
      },
      off: function (s, t) {
        var e = this.e || (this.e = {}),
          i = e[s],
          r = [];
        if (i && t)
          for (var n = 0, o = i.length; n < o; n++)
            i[n].fn !== t && i[n].fn._ !== t && r.push(i[n]);
        return r.length ? (e[s] = r) : delete e[s], this;
      },
    };
    cs.exports = fs;
    cs.exports.TinyEmitter = fs;
  });
  var Ko = Qr((ds, ps) => {
    (function (s, t) {
      typeof ds == "object" && typeof ps != "undefined"
        ? (ps.exports = t())
        : typeof define == "function" && define.amd
        ? define(t)
        : ((s || self).virtualScroll = t());
    })(ds, function () {
      var s = 0;
      function t(f) {
        return "__private_" + s++ + "_" + f;
      }
      function e(f, g) {
        if (!Object.prototype.hasOwnProperty.call(f, g))
          throw new TypeError("attempted to use private field on non-instance");
        return f;
      }
      function i() {}
      i.prototype = {
        on: function (f, g, p) {
          var m = this.e || (this.e = {});
          return (m[f] || (m[f] = [])).push({ fn: g, ctx: p }), this;
        },
        once: function (f, g, p) {
          var m = this;
          function y() {
            m.off(f, y), g.apply(p, arguments);
          }
          return (y._ = g), this.on(f, y, p);
        },
        emit: function (f) {
          for (
            var g = [].slice.call(arguments, 1),
              p = ((this.e || (this.e = {}))[f] || []).slice(),
              m = 0,
              y = p.length;
            m < y;
            m++
          )
            p[m].fn.apply(p[m].ctx, g);
          return this;
        },
        off: function (f, g) {
          var p = this.e || (this.e = {}),
            m = p[f],
            y = [];
          if (m && g)
            for (var _ = 0, v = m.length; _ < v; _++)
              m[_].fn !== g && m[_].fn._ !== g && y.push(m[_]);
          return y.length ? (p[f] = y) : delete p[f], this;
        },
      };
      var r = i;
      r.TinyEmitter = i;
      var n,
        o = "virtualscroll",
        a = t("options"),
        l = t("el"),
        u = t("emitter"),
        h = t("event"),
        c = t("touchStart"),
        d = t("bodyTouchAction");
      return (function () {
        function f(p) {
          var m = this;
          Object.defineProperty(this, a, { writable: !0, value: void 0 }),
            Object.defineProperty(this, l, { writable: !0, value: void 0 }),
            Object.defineProperty(this, u, { writable: !0, value: void 0 }),
            Object.defineProperty(this, h, { writable: !0, value: void 0 }),
            Object.defineProperty(this, c, { writable: !0, value: void 0 }),
            Object.defineProperty(this, d, { writable: !0, value: void 0 }),
            (this._onWheel = function (y) {
              var _ = e(m, a)[a],
                v = e(m, h)[h];
              (v.deltaX = y.wheelDeltaX || -1 * y.deltaX),
                (v.deltaY = y.wheelDeltaY || -1 * y.deltaY),
                n.isFirefox &&
                  y.deltaMode === 1 &&
                  ((v.deltaX *= _.firefoxMultiplier),
                  (v.deltaY *= _.firefoxMultiplier)),
                (v.deltaX *= _.mouseMultiplier),
                (v.deltaY *= _.mouseMultiplier),
                m._notify(y);
            }),
            (this._onMouseWheel = function (y) {
              var _ = e(m, h)[h];
              (_.deltaX = y.wheelDeltaX ? y.wheelDeltaX : 0),
                (_.deltaY = y.wheelDeltaY ? y.wheelDeltaY : y.wheelDelta),
                m._notify(y);
            }),
            (this._onTouchStart = function (y) {
              var _ = y.targetTouches ? y.targetTouches[0] : y;
              (e(m, c)[c].x = _.pageX), (e(m, c)[c].y = _.pageY);
            }),
            (this._onTouchMove = function (y) {
              var _ = e(m, a)[a];
              _.preventTouch &&
                !y.target.classList.contains(_.unpreventTouchClass) &&
                y.preventDefault();
              var v = e(m, h)[h],
                w = y.targetTouches ? y.targetTouches[0] : y;
              (v.deltaX = (w.pageX - e(m, c)[c].x) * _.touchMultiplier),
                (v.deltaY = (w.pageY - e(m, c)[c].y) * _.touchMultiplier),
                (e(m, c)[c].x = w.pageX),
                (e(m, c)[c].y = w.pageY),
                m._notify(y);
            }),
            (this._onKeyDown = function (y) {
              var _ = e(m, h)[h];
              _.deltaX = _.deltaY = 0;
              var v = window.innerHeight - 40;
              switch (y.keyCode) {
                case 37:
                case 38:
                  _.deltaY = e(m, a)[a].keyStep;
                  break;
                case 39:
                case 40:
                  _.deltaY = -e(m, a)[a].keyStep;
                  break;
                case 32:
                  _.deltaY = v * (y.shiftKey ? 1 : -1);
                  break;
                default:
                  return;
              }
              m._notify(y);
            }),
            (e(this, l)[l] = window),
            p && p.el && ((e(this, l)[l] = p.el), delete p.el),
            n ||
              (n = {
                hasWheelEvent: "onwheel" in document,
                hasMouseWheelEvent: "onmousewheel" in document,
                hasTouch: "ontouchstart" in document,
                hasTouchWin:
                  navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: "onkeydown" in document,
                isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
              }),
            (e(this, a)[a] = Object.assign(
              {
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                useKeyboard: !0,
                useTouch: !0,
              },
              p
            )),
            (e(this, u)[u] = new r()),
            (e(this, h)[h] = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
            (e(this, c)[c] = { x: null, y: null }),
            (e(this, d)[d] = null),
            e(this, a)[a].passive !== void 0 &&
              (this.listenerOptions = { passive: e(this, a)[a].passive });
        }
        var g = f.prototype;
        return (
          (g._notify = function (p) {
            var m = e(this, h)[h];
            (m.x += m.deltaX),
              (m.y += m.deltaY),
              e(this, u)[u].emit(o, {
                x: m.x,
                y: m.y,
                deltaX: m.deltaX,
                deltaY: m.deltaY,
                originalEvent: p,
              });
          }),
          (g._bind = function () {
            n.hasWheelEvent &&
              e(this, l)[l].addEventListener(
                "wheel",
                this._onWheel,
                this.listenerOptions
              ),
              n.hasMouseWheelEvent &&
                e(this, l)[l].addEventListener(
                  "mousewheel",
                  this._onMouseWheel,
                  this.listenerOptions
                ),
              n.hasTouch &&
                e(this, a)[a].useTouch &&
                (e(this, l)[l].addEventListener(
                  "touchstart",
                  this._onTouchStart,
                  this.listenerOptions
                ),
                e(this, l)[l].addEventListener(
                  "touchmove",
                  this._onTouchMove,
                  this.listenerOptions
                )),
              n.hasPointer &&
                n.hasTouchWin &&
                ((e(this, d)[d] = document.body.style.msTouchAction),
                (document.body.style.msTouchAction = "none"),
                e(this, l)[l].addEventListener(
                  "MSPointerDown",
                  this._onTouchStart,
                  !0
                ),
                e(this, l)[l].addEventListener(
                  "MSPointerMove",
                  this._onTouchMove,
                  !0
                )),
              n.hasKeyDown &&
                e(this, a)[a].useKeyboard &&
                document.addEventListener("keydown", this._onKeyDown);
          }),
          (g._unbind = function () {
            n.hasWheelEvent &&
              e(this, l)[l].removeEventListener("wheel", this._onWheel),
              n.hasMouseWheelEvent &&
                e(this, l)[l].removeEventListener(
                  "mousewheel",
                  this._onMouseWheel
                ),
              n.hasTouch &&
                (e(this, l)[l].removeEventListener(
                  "touchstart",
                  this._onTouchStart
                ),
                e(this, l)[l].removeEventListener(
                  "touchmove",
                  this._onTouchMove
                )),
              n.hasPointer &&
                n.hasTouchWin &&
                ((document.body.style.msTouchAction = e(this, d)[d]),
                e(this, l)[l].removeEventListener(
                  "MSPointerDown",
                  this._onTouchStart,
                  !0
                ),
                e(this, l)[l].removeEventListener(
                  "MSPointerMove",
                  this._onTouchMove,
                  !0
                )),
              n.hasKeyDown &&
                e(this, a)[a].useKeyboard &&
                document.removeEventListener("keydown", this._onKeyDown);
          }),
          (g.on = function (p, m) {
            e(this, u)[u].on(o, p, m);
            var y = e(this, u)[u].e;
            y && y[o] && y[o].length === 1 && this._bind();
          }),
          (g.off = function (p, m) {
            e(this, u)[u].off(o, p, m);
            var y = e(this, u)[u].e;
            (!y[o] || y[o].length <= 0) && this._unbind();
          }),
          (g.destroy = function () {
            e(this, u)[u].off(), this._unbind();
          }),
          f
        );
      })();
    });
  });
  var Zl = Qr((Jl, ls) => {
    (function (s, t) {
      typeof define == "function" && define.amd
        ? define([], function () {
            return (s.svg4everybody = t());
          })
        : typeof ls == "object" && ls.exports
        ? (ls.exports = t())
        : (s.svg4everybody = t());
    })(Jl, function () {
      function s(r, n, o) {
        if (o) {
          var a = document.createDocumentFragment(),
            l = !n.hasAttribute("viewBox") && o.getAttribute("viewBox");
          l && n.setAttribute("viewBox", l);
          for (var u = o.cloneNode(!0); u.childNodes.length; )
            a.appendChild(u.firstChild);
          r.appendChild(a);
        }
      }
      function t(r) {
        (r.onreadystatechange = function () {
          if (r.readyState === 4) {
            var n = r._cachedDocument;
            n ||
              ((n = r._cachedDocument =
                document.implementation.createHTMLDocument("")),
              (n.body.innerHTML = r.responseText),
              (r._cachedTarget = {})),
              r._embeds.splice(0).map(function (o) {
                var a = r._cachedTarget[o.id];
                a || (a = r._cachedTarget[o.id] = n.getElementById(o.id)),
                  s(o.parent, o.svg, a);
              });
          }
        }),
          r.onreadystatechange();
      }
      function e(r) {
        function n() {
          for (var y = 0; y < p.length; ) {
            var _ = p[y],
              v = _.parentNode,
              w = i(v),
              S = _.getAttribute("xlink:href") || _.getAttribute("href");
            if (
              (!S && a.attributeName && (S = _.getAttribute(a.attributeName)),
              w && S)
            ) {
              if (o)
                if (!a.validate || a.validate(S, w, _)) {
                  v.removeChild(_);
                  var C = S.split("#"),
                    x = C.shift(),
                    k = C.join("#");
                  if (x.length) {
                    var A = f[x];
                    A ||
                      ((A = f[x] = new XMLHttpRequest()),
                      A.open("GET", x),
                      A.send(),
                      (A._embeds = [])),
                      A._embeds.push({ parent: v, svg: w, id: k }),
                      t(A);
                  } else s(v, w, document.getElementById(k));
                } else ++y, ++m;
            } else ++y;
          }
          (!p.length || p.length - m > 0) && g(n, 67);
        }
        var o,
          a = Object(r),
          l = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
          u = /\bAppleWebKit\/(\d+)\b/,
          h = /\bEdge\/12\.(\d+)\b/,
          c = /\bEdge\/.(\d+)\b/,
          d = window.top !== window.self;
        o =
          "polyfill" in a
            ? a.polyfill
            : l.test(navigator.userAgent) ||
              (navigator.userAgent.match(h) || [])[1] < 10547 ||
              (navigator.userAgent.match(u) || [])[1] < 537 ||
              (c.test(navigator.userAgent) && d);
        var f = {},
          g = window.requestAnimationFrame || setTimeout,
          p = document.getElementsByTagName("use"),
          m = 0;
        o && n();
      }
      function i(r) {
        for (
          var n = r;
          n.nodeName.toLowerCase() !== "svg" && (n = n.parentNode);

        );
        return n;
      }
      return e;
    });
  });
  var ru = Qr((iu, Lo) => {
    (function () {
      "use strict";
      function s() {
        var t = window,
          e = document;
        if (
          "scrollBehavior" in e.documentElement.style &&
          t.__forceSmoothScrollPolyfill__ !== !0
        )
          return;
        var i = t.HTMLElement || t.Element,
          r = 468,
          n = {
            scroll: t.scroll || t.scrollTo,
            scrollBy: t.scrollBy,
            elementScroll: i.prototype.scroll || u,
            scrollIntoView: i.prototype.scrollIntoView,
          },
          o =
            t.performance && t.performance.now
              ? t.performance.now.bind(t.performance)
              : Date.now;
        function a(_) {
          var v = ["MSIE ", "Trident/", "Edge/"];
          return new RegExp(v.join("|")).test(_);
        }
        var l = a(t.navigator.userAgent) ? 1 : 0;
        function u(_, v) {
          (this.scrollLeft = _), (this.scrollTop = v);
        }
        function h(_) {
          return 0.5 * (1 - Math.cos(Math.PI * _));
        }
        function c(_) {
          if (
            _ === null ||
            typeof _ != "object" ||
            _.behavior === void 0 ||
            _.behavior === "auto" ||
            _.behavior === "instant"
          )
            return !0;
          if (typeof _ == "object" && _.behavior === "smooth") return !1;
          throw new TypeError(
            "behavior member of ScrollOptions " +
              _.behavior +
              " is not a valid value for enumeration ScrollBehavior."
          );
        }
        function d(_, v) {
          if (v === "Y") return _.clientHeight + l < _.scrollHeight;
          if (v === "X") return _.clientWidth + l < _.scrollWidth;
        }
        function f(_, v) {
          var w = t.getComputedStyle(_, null)["overflow" + v];
          return w === "auto" || w === "scroll";
        }
        function g(_) {
          var v = d(_, "Y") && f(_, "Y"),
            w = d(_, "X") && f(_, "X");
          return v || w;
        }
        function p(_) {
          for (; _ !== e.body && g(_) === !1; ) _ = _.parentNode || _.host;
          return _;
        }
        function m(_) {
          var v = o(),
            w,
            S,
            C,
            x = (v - _.startTime) / r;
          (x = x > 1 ? 1 : x),
            (w = h(x)),
            (S = _.startX + (_.x - _.startX) * w),
            (C = _.startY + (_.y - _.startY) * w),
            _.method.call(_.scrollable, S, C),
            (S !== _.x || C !== _.y) && t.requestAnimationFrame(m.bind(t, _));
        }
        function y(_, v, w) {
          var S,
            C,
            x,
            k,
            A = o();
          _ === e.body
            ? ((S = t),
              (C = t.scrollX || t.pageXOffset),
              (x = t.scrollY || t.pageYOffset),
              (k = n.scroll))
            : ((S = _), (C = _.scrollLeft), (x = _.scrollTop), (k = u)),
            m({
              scrollable: S,
              method: k,
              startTime: A,
              startX: C,
              startY: x,
              x: v,
              y: w,
            });
        }
        (t.scroll = t.scrollTo =
          function () {
            if (arguments[0] !== void 0) {
              if (c(arguments[0]) === !0) {
                n.scroll.call(
                  t,
                  arguments[0].left !== void 0
                    ? arguments[0].left
                    : typeof arguments[0] != "object"
                    ? arguments[0]
                    : t.scrollX || t.pageXOffset,
                  arguments[0].top !== void 0
                    ? arguments[0].top
                    : arguments[1] !== void 0
                    ? arguments[1]
                    : t.scrollY || t.pageYOffset
                );
                return;
              }
              y.call(
                t,
                e.body,
                arguments[0].left !== void 0
                  ? ~~arguments[0].left
                  : t.scrollX || t.pageXOffset,
                arguments[0].top !== void 0
                  ? ~~arguments[0].top
                  : t.scrollY || t.pageYOffset
              );
            }
          }),
          (t.scrollBy = function () {
            if (arguments[0] !== void 0) {
              if (c(arguments[0])) {
                n.scrollBy.call(
                  t,
                  arguments[0].left !== void 0
                    ? arguments[0].left
                    : typeof arguments[0] != "object"
                    ? arguments[0]
                    : 0,
                  arguments[0].top !== void 0
                    ? arguments[0].top
                    : arguments[1] !== void 0
                    ? arguments[1]
                    : 0
                );
                return;
              }
              y.call(
                t,
                e.body,
                ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                ~~arguments[0].top + (t.scrollY || t.pageYOffset)
              );
            }
          }),
          (i.prototype.scroll = i.prototype.scrollTo =
            function () {
              if (arguments[0] !== void 0) {
                if (c(arguments[0]) === !0) {
                  if (
                    typeof arguments[0] == "number" &&
                    arguments[1] === void 0
                  )
                    throw new SyntaxError("Value could not be converted");
                  n.elementScroll.call(
                    this,
                    arguments[0].left !== void 0
                      ? ~~arguments[0].left
                      : typeof arguments[0] != "object"
                      ? ~~arguments[0]
                      : this.scrollLeft,
                    arguments[0].top !== void 0
                      ? ~~arguments[0].top
                      : arguments[1] !== void 0
                      ? ~~arguments[1]
                      : this.scrollTop
                  );
                  return;
                }
                var _ = arguments[0].left,
                  v = arguments[0].top;
                y.call(
                  this,
                  this,
                  typeof _ == "undefined" ? this.scrollLeft : ~~_,
                  typeof v == "undefined" ? this.scrollTop : ~~v
                );
              }
            }),
          (i.prototype.scrollBy = function () {
            if (arguments[0] !== void 0) {
              if (c(arguments[0]) === !0) {
                n.elementScroll.call(
                  this,
                  arguments[0].left !== void 0
                    ? ~~arguments[0].left + this.scrollLeft
                    : ~~arguments[0] + this.scrollLeft,
                  arguments[0].top !== void 0
                    ? ~~arguments[0].top + this.scrollTop
                    : ~~arguments[1] + this.scrollTop
                );
                return;
              }
              this.scroll({
                left: ~~arguments[0].left + this.scrollLeft,
                top: ~~arguments[0].top + this.scrollTop,
                behavior: arguments[0].behavior,
              });
            }
          }),
          (i.prototype.scrollIntoView = function () {
            if (c(arguments[0]) === !0) {
              n.scrollIntoView.call(
                this,
                arguments[0] === void 0 ? !0 : arguments[0]
              );
              return;
            }
            var _ = p(this),
              v = _.getBoundingClientRect(),
              w = this.getBoundingClientRect();
            _ !== e.body
              ? (y.call(
                  this,
                  _,
                  _.scrollLeft + w.left - v.left,
                  _.scrollTop + w.top - v.top
                ),
                t.getComputedStyle(_).position !== "fixed" &&
                  t.scrollBy({ left: v.left, top: v.top, behavior: "smooth" }))
              : t.scrollBy({ left: w.left, top: w.top, behavior: "smooth" });
          });
      }
      typeof iu == "object" && typeof Lo != "undefined"
        ? (Lo.exports = { polyfill: s })
        : s();
    })();
  });
  function tn(s) {
    return (
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? (tn = function (t) {
            return typeof t;
          })
        : (tn = function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
      tn(s)
    );
  }
  function Xo(s, t) {
    if (!(s instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Wo(s, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function Uo(s, t, e) {
    return t && Wo(s.prototype, t), e && Wo(s, e), s;
  }
  function Yo(s, t, e) {
    return (
      t in s
        ? Object.defineProperty(s, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (s[t] = e),
      s
    );
  }
  function Zr(s, t) {
    return yu(s) || wu(s, t) || Ho(s, t) || xu();
  }
  function gu(s) {
    return mu(s) || vu(s) || Ho(s) || bu();
  }
  function mu(s) {
    if (Array.isArray(s)) return hs(s);
  }
  function yu(s) {
    if (Array.isArray(s)) return s;
  }
  function vu(s) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(s))
      return Array.from(s);
  }
  function wu(s, t) {
    if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(s)))) {
      var e = [],
        i = !0,
        r = !1,
        n = void 0;
      try {
        for (
          var o = s[Symbol.iterator](), a;
          !(i = (a = o.next()).done) &&
          (e.push(a.value), !(t && e.length === t));
          i = !0
        );
      } catch (l) {
        (r = !0), (n = l);
      } finally {
        try {
          !i && o.return != null && o.return();
        } finally {
          if (r) throw n;
        }
      }
      return e;
    }
  }
  function Ho(s, t) {
    if (!!s) {
      if (typeof s == "string") return hs(s, t);
      var e = Object.prototype.toString.call(s).slice(8, -1);
      if (
        (e === "Object" && s.constructor && (e = s.constructor.name),
        e === "Map" || e === "Set")
      )
        return Array.from(s);
      if (
        e === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
      )
        return hs(s, t);
    }
  }
  function hs(s, t) {
    (t == null || t > s.length) && (t = s.length);
    for (var e = 0, i = new Array(t); e < t; e++) i[e] = s[e];
    return i;
  }
  function bu() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function xu() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var J = (function () {
      function s(t) {
        Xo(this, s),
          (this.mAttr = "data-" + t.dataName),
          (this.mCaptureEvents = ["mouseenter", "mouseleave"]),
          (this.el = t.el);
      }
      return (
        Uo(s, [
          {
            key: "mInit",
            value: function (e) {
              var i = this;
              (this.modules = e),
                (this.mCheckEventTarget = this.mCheckEventTarget.bind(this)),
                this.events &&
                  Object.keys(this.events).forEach(function (r) {
                    return i.mAddEvent(r);
                  });
            },
          },
          {
            key: "mUpdate",
            value: function (e) {
              this.modules = e;
            },
          },
          {
            key: "mDestroy",
            value: function () {
              var e = this;
              this.events &&
                Object.keys(this.events).forEach(function (i) {
                  return e.mRemoveEvent(i);
                });
            },
          },
          {
            key: "mAddEvent",
            value: function (e) {
              var i = !!this.mCaptureEvents.includes(e);
              this.el.addEventListener(e, this.mCheckEventTarget, i);
            },
          },
          {
            key: "mRemoveEvent",
            value: function (e) {
              var i = !!this.mCaptureEvents.includes(e);
              this.el.removeEventListener(e, this.mCheckEventTarget, i);
            },
          },
          {
            key: "mCheckEventTarget",
            value: function (e) {
              var i = this.events[e.type];
              if (typeof i == "string") this[i](e);
              else {
                var r = "[" + this.mAttr + "]",
                  n = e.target;
                if (this.mCaptureEvents.includes(e.type))
                  n.matches(r) && this.mCallEventMethod(e, i, n);
                else
                  for (
                    ;
                    n &&
                    n !== document &&
                    !(
                      n.matches(r) &&
                      this.mCallEventMethod(e, i, n) != "undefined"
                    );

                  )
                    n = n.parentNode;
              }
            },
          },
          {
            key: "mCallEventMethod",
            value: function (e, i, r) {
              var n = r.getAttribute(this.mAttr);
              if (i.hasOwnProperty(n)) {
                var o = i[n];
                e.hasOwnProperty("currentTarget") ||
                  Object.defineProperty(e, "currentTarget", { value: r }),
                  e.hasOwnProperty("curTarget") ||
                    Object.defineProperty(e, "curTarget", { value: r }),
                  this[o](e);
              }
            },
          },
          {
            key: "$",
            value: function (e, i) {
              var r = e.indexOf("."),
                n = e.indexOf("#"),
                o = e.indexOf("["),
                a = [r, n, o].filter(function (d) {
                  return d != -1;
                }),
                l = !1,
                u = e,
                h = "",
                c = this.el;
              return (
                a.length &&
                  ((l = Math.min.apply(Math, gu(a))),
                  (u = e.slice(0, l)),
                  (h = e.slice(l))),
                tn(i) == "object" && (c = i),
                c.querySelectorAll("[" + this.mAttr + "=" + u + "]" + h)
              );
            },
          },
          {
            key: "parent",
            value: function (e, i) {
              for (
                var r = "[" + this.mAttr + "=" + e + "]", n = i.parentNode;
                n && n !== document;

              ) {
                if (n.matches(r)) return n;
                n = n.parentNode;
              }
            },
          },
          {
            key: "getData",
            value: function (e, i) {
              var r = i || this.el;
              return r.getAttribute(this.mAttr + "-" + e);
            },
          },
          {
            key: "setData",
            value: function (e, i, r) {
              var n = r || this.el;
              return n.setAttribute(this.mAttr + "-" + e, i);
            },
          },
          {
            key: "call",
            value: function (e, i, r, n) {
              var o = this;
              i && !r && ((r = i), (i = !1)),
                this.modules[r] &&
                  (n
                    ? this.modules[r][n] && this.modules[r][n][e](i)
                    : Object.keys(this.modules[r]).forEach(function (a) {
                        o.modules[r][a][e](i);
                      }));
            },
          },
          {
            key: "on",
            value: function (e, i, r, n) {
              var o = this;
              this.modules[i] &&
                (n
                  ? this.modules[i][n].el.addEventListener(e, function (a) {
                      return r(a);
                    })
                  : Object.keys(this.modules[i]).forEach(function (a) {
                      o.modules[i][a].el.addEventListener(e, function (l) {
                        return r(l);
                      });
                    }));
            },
          },
          { key: "init", value: function () {} },
          { key: "destroy", value: function () {} },
        ]),
        s
      );
    })(),
    Tu = (function () {
      function s(t) {
        Xo(this, s),
          this.app,
          (this.modules = t.modules),
          (this.currentModules = {}),
          (this.activeModules = {}),
          (this.newModules = {}),
          (this.moduleId = 0);
      }
      return (
        Uo(s, [
          {
            key: "init",
            value: function (e, i) {
              var r = this,
                n = i || document,
                o = n.querySelectorAll("*");
              e && !this.app && (this.app = e),
                (this.activeModules.app = { app: this.app }),
                o.forEach(function (a) {
                  Array.from(a.attributes).forEach(function (l) {
                    if (l.name.startsWith("data-module")) {
                      var u = !1,
                        h = l.name.split("-").splice(2),
                        c = r.toCamel(h);
                      if (
                        (r.modules[c]
                          ? (u = !0)
                          : r.modules[r.toUpper(c)] &&
                            ((c = r.toUpper(c)), (u = !0)),
                        u)
                      ) {
                        var d = { el: a, name: c, dataName: h.join("-") },
                          f = new r.modules[c](d),
                          g = l.value;
                        g ||
                          (r.moduleId++,
                          (g = "m" + r.moduleId),
                          a.setAttribute(l.name, g)),
                          r.addActiveModule(c, g, f);
                        var p = c + "-" + g;
                        i ? (r.newModules[p] = f) : (r.currentModules[p] = f);
                      }
                    }
                  });
                }),
                Object.entries(this.currentModules).forEach(function (a) {
                  var l = Zr(a, 2),
                    u = l[0],
                    h = l[1];
                  if (i) {
                    var c = u.split("-"),
                      d = c.shift(),
                      f = c.pop();
                    r.addActiveModule(d, f, h);
                  } else r.initModule(h);
                });
            },
          },
          {
            key: "initModule",
            value: function (e) {
              e.mInit(this.activeModules), e.init();
            },
          },
          {
            key: "addActiveModule",
            value: function (e, i, r) {
              this.activeModules[e]
                ? Object.assign(this.activeModules[e], Yo({}, i, r))
                : (this.activeModules[e] = Yo({}, i, r));
            },
          },
          {
            key: "update",
            value: function (e) {
              var i = this;
              this.init(this.app, e),
                Object.entries(this.currentModules).forEach(function (r) {
                  var n = Zr(r, 2),
                    o = n[0],
                    a = n[1];
                  a.mUpdate(i.activeModules);
                }),
                Object.entries(this.newModules).forEach(function (r) {
                  var n = Zr(r, 2),
                    o = n[0],
                    a = n[1];
                  i.initModule(a);
                }),
                Object.assign(this.currentModules, this.newModules);
            },
          },
          {
            key: "destroy",
            value: function (e) {
              e ? this.destroyScope(e) : this.destroyModules();
            },
          },
          {
            key: "destroyScope",
            value: function (e) {
              var i = this,
                r = e.querySelectorAll("*");
              r.forEach(function (n) {
                Array.from(n.attributes).forEach(function (o) {
                  if (o.name.startsWith("data-module")) {
                    var a = o.value,
                      l = o.name.split("-").splice(2),
                      u = i.toCamel(l) + "-" + a,
                      h = !1;
                    i.currentModules[u]
                      ? (h = !0)
                      : i.currentModules[i.toUpper(u)] &&
                        ((u = i.toUpper(u)), (h = !0)),
                      h &&
                        (i.destroyModule(i.currentModules[u]),
                        delete i.currentModules[u]);
                  }
                });
              }),
                (this.activeModules = {}),
                (this.newModules = {});
            },
          },
          {
            key: "destroyModules",
            value: function () {
              var e = this;
              Object.entries(this.currentModules).forEach(function (i) {
                var r = Zr(i, 2),
                  n = r[0],
                  o = r[1];
                e.destroyModule(o);
              }),
                (this.currentModules = []);
            },
          },
          {
            key: "destroyModule",
            value: function (e) {
              e.mDestroy(), e.destroy();
            },
          },
          {
            key: "toCamel",
            value: function (e) {
              var i = this;
              return e.reduce(function (r, n) {
                return r + i.toUpper(n);
              });
            },
          },
          {
            key: "toUpper",
            value: function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            },
          },
        ]),
        s
      );
    })(),
    Vo = Tu;
  var Do = {};
  pu(Do, {
    Accordion: () => rs,
    Clients: () => is,
    HeaderSlider: () => Jn,
    Knowledge: () => ts,
    Load: () => en,
    Nav: () => Zn,
    NavButton: () => os,
    Rail: () => ns,
    Scroll: () => jn,
    ScrollTo: () => as,
    Shapes: () => es,
    Slider: () => ss,
    Split: () => Kn,
    Timeline: () => $n,
  });
  function Su(s, t) {
    if (!(s instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function qo(s, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function Au(s, t, e) {
    return t && qo(s.prototype, t), e && qo(s, e), s;
  }
  function Cu(s, t) {
    return Mu(s) || ku(s, t) || Eu(s, t) || Ou();
  }
  function Mu(s) {
    if (Array.isArray(s)) return s;
  }
  function ku(s, t) {
    var e =
      s == null
        ? null
        : (typeof Symbol != "undefined" && s[Symbol.iterator]) ||
          s["@@iterator"];
    if (e != null) {
      var i = [],
        r = !0,
        n = !1,
        o,
        a;
      try {
        for (
          e = e.call(s);
          !(r = (o = e.next()).done) &&
          (i.push(o.value), !(t && i.length === t));
          r = !0
        );
      } catch (l) {
        (n = !0), (a = l);
      } finally {
        try {
          !r && e.return != null && e.return();
        } finally {
          if (n) throw a;
        }
      }
      return i;
    }
  }
  function Eu(s, t) {
    if (!!s) {
      if (typeof s == "string") return Go(s, t);
      var e = Object.prototype.toString.call(s).slice(8, -1);
      if (
        (e === "Object" && s.constructor && (e = s.constructor.name),
        e === "Map" || e === "Set")
      )
        return Array.from(s);
      if (
        e === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
      )
        return Go(s, t);
    }
  }
  function Go(s, t) {
    (t == null || t > s.length) && (t = s.length);
    for (var e = 0, i = new Array(t); e < t; e++) i[e] = s[e];
    return i;
  }
  function Ou() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var Pu = (function () {
      function s(t) {
        Su(this, s),
          (this.defaults = {
            name: "load",
            loadingClass: "is-loading",
            loadedClass: "is-loaded",
            readyClass: "is-ready",
            transitionsPrefix: "is-",
            transitionsHistory: !0,
            enterDelay: 0,
            exitDelay: 0,
            loadedDelay: 0,
            isLoaded: !1,
            isEntered: !1,
            isUrl: !1,
            transitionContainer: null,
            popstateIgnore: !1,
          }),
          Object.assign(this, this.defaults, t),
          (this.options = t),
          (this.namespace = "modular"),
          (this.html = document.documentElement),
          (this.href = window.location.href),
          (this.container = "data-" + this.name + "-container"),
          (this.subContainer = !1),
          (this.prevTransition = null),
          (this.loadAttributes = ["src", "srcset", "style", "href"]),
          (this.isInserted = !1),
          (this.isLoading = !1),
          (this.enterTimeout = !1),
          (this.controller = new AbortController()),
          (this.classContainer = this.html),
          (this.isChrome = navigator.userAgent.indexOf("Chrome") != -1),
          this.init();
      }
      return (
        Au(s, [
          {
            key: "init",
            value: function () {
              var e = this;
              window.addEventListener(
                "popstate",
                function (i) {
                  return e.checkState(i);
                },
                !1
              ),
                this.html.addEventListener(
                  "click",
                  function (i) {
                    return e.checkClick(i);
                  },
                  !1
                ),
                this.loadEls(document);
            },
          },
          {
            key: "checkClick",
            value: function (e) {
              if (!e.ctrlKey && !e.metaKey)
                for (var i = e.target; i && i !== document; ) {
                  if (i.matches("a") && i.getAttribute("download") == null) {
                    var r = i.getAttribute("href");
                    !r.startsWith("#") &&
                      !r.startsWith("mailto:") &&
                      !r.startsWith("tel:") &&
                      (e.preventDefault(),
                      this.reset(),
                      this.getClickOptions(i));
                    break;
                  }
                  i = i.parentNode;
                }
            },
          },
          {
            key: "checkState",
            value: function () {
              (typeof this.popstateIgnore == "string" &&
                window.location.href.indexOf(this.popstateIgnore) > -1) ||
                (this.reset(), this.getStateOptions());
            },
          },
          {
            key: "reset",
            value: function () {
              this.isLoading &&
                (this.controller.abort(),
                (this.isLoading = !1),
                (this.controller = new AbortController())),
                window.clearTimeout(this.enterTimeout),
                this.isInserted && this.removeContainer(),
                (this.classContainer = this.html),
                Object.assign(this, this.defaults, this.options);
            },
          },
          {
            key: "getClickOptions",
            value: function (e) {
              (this.transition = e.getAttribute("data-" + this.name)),
                (this.isUrl = e.getAttribute("data-" + this.name + "-url"));
              var i = e.getAttribute("href"),
                r = e.getAttribute("target");
              if (r == "_blank") {
                window.open(i, "_blank");
                return;
              }
              if (this.transition == "false") {
                window.location = i;
                return;
              }
              this.setOptions(i, !0);
            },
          },
          {
            key: "getStateOptions",
            value: function () {
              this.transitionsHistory
                ? (this.transition = history.state)
                : (this.transition = !1);
              var e = window.location.href;
              this.setOptions(e);
            },
          },
          {
            key: "goTo",
            value: function (e, i, r) {
              this.reset(),
                (this.transition = i),
                (this.isUrl = r),
                this.setOptions(e, !0);
            },
          },
          {
            key: "setOptions",
            value: function (e, i) {
              var r = "[" + this.container + "]",
                n;
              this.transition &&
                this.transition != "true" &&
                ((this.transitionContainer =
                  "[" + this.container + '="' + this.transition + '"]'),
                (this.loadingClass =
                  this.transitions[this.transition].loadingClass ||
                  this.loadingClass),
                (this.loadedClass =
                  this.transitions[this.transition].loadedClass ||
                  this.loadedClass),
                (this.readyClass =
                  this.transitions[this.transition].readyClass ||
                  this.readyClass),
                (this.transitionsPrefix =
                  this.transitions[this.transition].transitionsPrefix ||
                  this.transitionsPrefix),
                (this.enterDelay =
                  this.transitions[this.transition].enterDelay ||
                  this.enterDelay),
                (this.exitDelay =
                  this.transitions[this.transition].exitDelay ||
                  this.exitDelay),
                (this.loadedDelay =
                  this.transitions[this.transition].loadedDelay ||
                  this.loadedDelay),
                (n = document.querySelector(this.transitionContainer))),
                n
                  ? ((r = this.transitionContainer),
                    (this.oldContainer = n),
                    (this.classContainer = this.oldContainer.parentNode),
                    this.subContainer ||
                      history.replaceState(this.transition, null, this.href),
                    (this.subContainer = !0))
                  : ((this.oldContainer = document.querySelector(r)),
                    this.subContainer &&
                      history.replaceState(
                        this.prevTransition,
                        null,
                        this.href
                      ),
                    (this.subContainer = !1)),
                (this.href = e),
                (this.parentContainer = this.oldContainer.parentNode),
                this.isUrl === "" ||
                (this.isUrl != null &&
                  this.isUrl != "false" &&
                  this.isUrl != !1)
                  ? history.pushState(this.transition, null, e)
                  : (this.oldContainer.classList.add("is-old"),
                    this.setLoading(),
                    this.startEnterDelay(),
                    this.loadHref(e, r, i));
            },
          },
          {
            key: "setLoading",
            value: function () {
              this.classContainer.classList.remove(
                this.loadedClass,
                this.readyClass
              ),
                this.classContainer.classList.add(this.loadingClass),
                this.classContainer.classList.remove(
                  this.transitionsPrefix + this.prevTransition
                ),
                this.transition &&
                  this.classContainer.classList.add(
                    this.transitionsPrefix + this.transition
                  ),
                this.subContainer || (this.prevTransition = this.transition);
              var e = new Event(this.namespace + "loading");
              window.dispatchEvent(e);
            },
          },
          {
            key: "startEnterDelay",
            value: function () {
              var e = this;
              this.enterTimeout = window.setTimeout(function () {
                (e.isEntered = !0), e.isLoaded && e.transitionContainers();
              }, this.enterDelay);
            },
          },
          {
            key: "loadHref",
            value: function (e, i, r) {
              var n = this;
              this.isLoading = !0;
              var o = this.controller.signal;
              fetch(e, { signal: o })
                .then(function (a) {
                  return a.text();
                })
                .then(function (a) {
                  r && history.pushState(n.transition, null, e);
                  var l = new DOMParser();
                  (n.data = l.parseFromString(a, "text/html")),
                    (n.newContainer = n.data.querySelector(i)),
                    n.newContainer.classList.add("is-new"),
                    (n.parentNewContainer = n.newContainer.parentNode),
                    n.hideContainer(),
                    n.parentContainer.insertBefore(
                      n.newContainer,
                      n.oldContainer
                    ),
                    (n.isInserted = !0),
                    n.setSvgs(),
                    (n.isLoaded = !0),
                    n.isEntered && n.transitionContainers(),
                    n.loadEls(n.newContainer),
                    (n.isLoading = !1);
                })
                .catch(function (a) {
                  window.location = e;
                });
            },
          },
          {
            key: "transitionContainers",
            value: function () {
              var e = this;
              this.setAttributes(),
                this.showContainer(),
                this.setLoaded(),
                setTimeout(function () {
                  e.removeContainer(), e.setReady();
                }, this.exitDelay);
            },
          },
          {
            key: "setSvgs",
            value: function () {
              if (this.isChrome) {
                var e = this.newContainer.querySelectorAll("use");
                e.length &&
                  e.forEach(function (i) {
                    var r = i.getAttribute("xlink:href");
                    if (r)
                      i.parentNode.innerHTML =
                        '<use xlink:href="' + r + '"></use>';
                    else {
                      var n = i.getAttribute("href");
                      n &&
                        (i.parentNode.innerHTML =
                          '<use href="' + n + '"></use>');
                    }
                  });
              }
            },
          },
          {
            key: "setAttributes",
            value: function () {
              var e = this,
                i = this.data.getElementsByTagName("title")[0],
                r = this.data.head.querySelector('meta[name="description"]'),
                n = document.head.querySelector('meta[name="description"]'),
                o,
                a;
              this.subContainer
                ? ((a = this.parentNewContainer),
                  (o = document.querySelector(
                    this.transitionContainer
                  ).parentNode))
                : ((a = this.data.querySelector("html")),
                  (o = document.querySelector("html")));
              var l = Object.assign({}, a.dataset);
              i && (document.title = i.innerText),
                n && r && n.setAttribute("content", r.getAttribute("content")),
                l &&
                  Object.entries(l).forEach(function (u) {
                    var h = Cu(u, 2),
                      c = h[0],
                      d = h[1];
                    o.setAttribute("data-" + e.toDash(c), d);
                  });
            },
          },
          {
            key: "toDash",
            value: function (e) {
              return e
                .split(/(?=[A-Z])/)
                .join("-")
                .toLowerCase();
            },
          },
          {
            key: "hideContainer",
            value: function () {
              (this.newContainer.style.visibility = "hidden"),
                (this.newContainer.style.height = 0),
                (this.newContainer.style.overflow = "hidden");
            },
          },
          {
            key: "showContainer",
            value: function () {
              (this.newContainer.style.visibility = ""),
                (this.newContainer.style.height = ""),
                (this.newContainer.style.overflow = "");
            },
          },
          {
            key: "loadEls",
            value: function (e) {
              var i = this,
                r = [];
              this.loadAttributes.forEach(function (n) {
                var o = "data-" + i.name + "-" + n,
                  a = e.querySelectorAll("[" + o + "]");
                a.length &&
                  a.forEach(function (l) {
                    var u = l.getAttribute(o);
                    if ((l.setAttribute(n, u), n == "src" || n == "srcset")) {
                      var h = new Promise(function (c) {
                        l.onload = function () {
                          return c(l);
                        };
                      });
                      r.push(h);
                    }
                  });
              }),
                Promise.all(r).then(function (n) {
                  var o = new Event(i.namespace + "images");
                  window.dispatchEvent(o);
                });
            },
          },
          {
            key: "setLoaded",
            value: function () {
              var e = this;
              this.classContainer.classList.remove(this.loadingClass),
                setTimeout(function () {
                  e.classContainer.classList.add(e.loadedClass);
                }, this.loadedDelay);
              var i = new Event(this.namespace + "loaded");
              window.dispatchEvent(i);
            },
          },
          {
            key: "removeContainer",
            value: function () {
              this.parentContainer.removeChild(this.oldContainer),
                this.newContainer.classList.remove("is-new"),
                (this.isInserted = !1);
            },
          },
          {
            key: "setReady",
            value: function () {
              this.classContainer.classList.add(this.readyClass);
              var e = new Event(this.namespace + "ready");
              window.dispatchEvent(e);
            },
          },
          {
            key: "on",
            value: function (e, i) {
              var r = this;
              window.addEventListener(
                this.namespace + e,
                function () {
                  switch (e) {
                    case "loading":
                      return i(r.transition, r.oldContainer);
                    case "loaded":
                      return i(r.transition, r.oldContainer, r.newContainer);
                    case "ready":
                      return i(r.transition, r.newContainer);
                    default:
                      return i();
                  }
                },
                !1
              );
            },
          },
        ]),
        s
      );
    })(),
    jo = Pu;
  var en = class extends J {
    constructor(s) {
      super(s);
    }
    init() {
      new jo({ enterDelay: 0, transitions: { customTransition: {} } }).on(
        "loaded",
        (t, e, i) => {
          this.call("destroy", e, "app"),
            this.call("update", i, "app"),
            t == null &&
              html.setAttribute(
                "data-template",
                i.getAttribute("data-template")
              );
        }
      );
    }
  };
  var Jo = Jr($o(), 1),
    Zo = Jr(Ko(), 1);
  function xr() {
    return (
      (xr = Object.assign
        ? Object.assign.bind()
        : function (s) {
            for (var t = 1; t < arguments.length; t++) {
              var e = arguments[t];
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (s[i] = e[i]);
            }
            return s;
          }),
      xr.apply(this, arguments)
    );
  }
  function Qo(s, t) {
    let e = s % t;
    return ((t > 0 && e < 0) || (t < 0 && e > 0)) && (e += t), e;
  }
  var Du = ["duration", "easing"],
    _s = class {
      to(t, e = {}) {
        let { duration: i = 1, easing: r = (o) => o } = e,
          n = (function (o, a) {
            if (o == null) return {};
            var l,
              u,
              h = {},
              c = Object.keys(o);
            for (u = 0; u < c.length; u++)
              a.indexOf((l = c[u])) >= 0 || (h[l] = o[l]);
            return h;
          })(e, Du);
        (this.target = t),
          (this.fromKeys = xr({}, n)),
          (this.toKeys = xr({}, n)),
          (this.keys = Object.keys(xr({}, n))),
          this.keys.forEach((o) => {
            this.fromKeys[o] = t[o];
          }),
          (this.duration = i),
          (this.easing = r),
          (this.currentTime = 0),
          (this.isRunning = !0);
      }
      stop() {
        this.isRunning = !1;
      }
      raf(t) {
        if (!this.isRunning) return;
        this.currentTime = Math.min(this.currentTime + t, this.duration);
        let e = this.progress >= 1 ? 1 : this.easing(this.progress);
        this.keys.forEach((i) => {
          let r = this.fromKeys[i];
          this.target[i] = r + (this.toKeys[i] - r) * e;
        }),
          e === 1 && this.stop();
      }
      get progress() {
        return this.currentTime / this.duration;
      }
    },
    rn = class extends Jo.TinyEmitter {
      constructor({
        duration: t = 1.2,
        easing: e = (d) => Math.min(1, 1.001 - Math.pow(2, -10 * d)),
        smooth: i = !0,
        mouseMultiplier: r = 1,
        smoothTouch: n = !1,
        touchMultiplier: o = 2,
        direction: a = "vertical",
        gestureDirection: l = "vertical",
        infinite: u = !1,
        wrapper: h = window,
        content: c = document.body,
      } = {}) {
        var d, f, g;
        super(),
          (this.onWindowResize = () => {
            (this.wrapperWidth = window.innerWidth),
              (this.wrapperHeight = window.innerHeight);
          }),
          (this.onWrapperResize = ([m]) => {
            if (m) {
              let y = m.contentRect;
              (this.wrapperWidth = y.width), (this.wrapperHeight = y.height);
            }
          }),
          (this.onContentResize = ([m]) => {
            if (m) {
              let y = m.contentRect;
              (this.contentWidth = y.width), (this.contentHeight = y.height);
            }
          }),
          (this.onVirtualScroll = ({
            deltaY: m,
            deltaX: y,
            originalEvent: _,
          }) => {
            if (
              (this.gestureDirection === "vertical" && m === 0) ||
              (this.gestureDirection === "horizontal" && y === 0)
            )
              return;
            let v = !!_.composedPath().find(
              (S) => S.hasAttribute && S.hasAttribute("data-lenis-prevent")
            );
            if (_.ctrlKey || v) return;
            if (
              ((this.smooth = _.changedTouches
                ? this.smoothTouch
                : this.options.smooth),
              this.stopped)
            )
              return void _.preventDefault();
            if (!this.smooth || _.buttons === 4) return;
            this.smooth && _.preventDefault();
            let w = 0;
            (w =
              this.gestureDirection === "both"
                ? y + m
                : this.gestureDirection === "horizontal"
                ? y
                : m),
              (this.targetScroll -= w),
              this.scrollTo(this.targetScroll);
          }),
          (this.onScroll = (m) => {
            (this.isScrolling && this.smooth) ||
              ((this.targetScroll =
                this.scroll =
                this.lastScroll =
                  this.wrapperNode[this.scrollProperty]),
              this.notify());
          }),
          (window.lenisVersion = "0.2.28"),
          (this.options = {
            duration: t,
            easing: e,
            smooth: i,
            mouseMultiplier: r,
            smoothTouch: n,
            touchMultiplier: o,
            direction: a,
            gestureDirection: l,
            infinite: u,
            wrapper: h,
            content: c,
          }),
          (this.duration = t),
          (this.easing = e),
          (this.smooth = i),
          (this.mouseMultiplier = r),
          (this.smoothTouch = n),
          (this.touchMultiplier = o),
          (this.direction = a),
          (this.gestureDirection = l),
          (this.infinite = u),
          (this.wrapperNode = h),
          (this.contentNode = c),
          this.wrapperNode.addEventListener("scroll", this.onScroll),
          this.wrapperNode === window
            ? (this.wrapperNode.addEventListener("resize", this.onWindowResize),
              this.onWindowResize())
            : ((this.wrapperHeight = this.wrapperNode.offsetHeight),
              (this.wrapperWidth = this.wrapperNode.offsetWidth),
              (this.wrapperObserver = new ResizeObserver(this.onWrapperResize)),
              this.wrapperObserver.observe(this.wrapperNode)),
          (this.contentHeight = this.contentNode.offsetHeight),
          (this.contentWidth = this.contentNode.offsetWidth),
          (this.contentObserver = new ResizeObserver(this.onContentResize)),
          this.contentObserver.observe(this.contentNode),
          (this.targetScroll =
            this.scroll =
            this.lastScroll =
              this.wrapperNode[this.scrollProperty]),
          (this.animate = new _s());
        let p =
          ((d = navigator) == null || (f = d.userAgentData) == null
            ? void 0
            : f.platform) ||
          ((g = navigator) == null ? void 0 : g.platform) ||
          "unknown";
        (this.virtualScroll = new Zo.default({
          el: this.wrapperNode,
          firefoxMultiplier: 50,
          mouseMultiplier:
            this.mouseMultiplier *
            (p.includes("Win") || p.includes("Linux") ? 0.84 : 0.4),
          touchMultiplier: this.touchMultiplier,
          passive: !1,
          useKeyboard: !1,
          useTouch: !0,
        })),
          this.virtualScroll.on(this.onVirtualScroll);
      }
      get scrollProperty() {
        let t;
        return (
          (t =
            this.wrapperNode === window
              ? this.direction === "horizontal"
                ? "scrollX"
                : "scrollY"
              : this.direction === "horizontal"
              ? "scrollLeft"
              : "scrollTop"),
          t
        );
      }
      start() {
        let t = this.wrapperNode;
        this.wrapperNode === window && (t = document.documentElement),
          t.classList.remove("lenis-stopped"),
          (this.stopped = !1);
      }
      stop() {
        let t = this.wrapperNode;
        this.wrapperNode === window && (t = document.documentElement),
          t.classList.add("lenis-stopped"),
          (this.stopped = !0),
          this.animate.stop();
      }
      destroy() {
        var t;
        this.wrapperNode === window &&
          this.wrapperNode.removeEventListener("resize", this.onWindowResize),
          this.wrapperNode.removeEventListener("scroll", this.onScroll),
          this.virtualScroll.destroy(),
          (t = this.wrapperObserver) == null || t.disconnect(),
          this.contentObserver.disconnect();
      }
      get limit() {
        return this.direction === "horizontal"
          ? this.contentWidth - this.wrapperWidth
          : this.contentHeight - this.wrapperHeight;
      }
      raf(t) {
        let e = t - (this.now || 0);
        (this.now = t),
          !this.stopped &&
            this.smooth &&
            ((this.lastScroll = this.scroll),
            this.animate.raf(0.001 * e),
            this.scroll === this.targetScroll &&
              (this.lastScroll = this.scroll),
            this.isScrolling && (this.setScroll(this.scroll), this.notify()),
            (this.isScrolling = this.scroll !== this.targetScroll));
      }
      get velocity() {
        return this.scroll - this.lastScroll;
      }
      setScroll(t) {
        let e = this.infinite ? Qo(t, this.limit) : t;
        this.direction === "horizontal"
          ? this.wrapperNode.scrollTo(e, 0)
          : this.wrapperNode.scrollTo(0, e);
      }
      notify() {
        let t = this.infinite ? Qo(this.scroll, this.limit) : this.scroll;
        this.emit("scroll", {
          scroll: t,
          limit: this.limit,
          velocity: this.velocity,
          direction: this.velocity === 0 ? 0 : this.velocity > 0 ? 1 : -1,
          progress: t / this.limit,
        });
      }
      scrollTo(
        t,
        {
          offset: e = 0,
          immediate: i = !1,
          duration: r = this.duration,
          easing: n = this.easing,
        } = {}
      ) {
        if (t == null || this.stopped) return;
        let o;
        if (typeof t == "number") o = t;
        else if (t === "top" || t === "#top") o = 0;
        else if (t === "bottom") o = this.limit;
        else {
          let a;
          if (typeof t == "string") a = document.querySelector(t);
          else {
            if (t == null || !t.nodeType) return;
            a = t;
          }
          if (!a) return;
          let l = 0;
          if (this.wrapperNode !== window) {
            let h = this.wrapperNode.getBoundingClientRect();
            l = this.direction === "horizontal" ? h.left : h.top;
          }
          let u = a.getBoundingClientRect();
          o =
            (this.direction === "horizontal" ? u.left : u.top) +
            this.scroll -
            l;
        }
        (o += e),
          (this.targetScroll = this.infinite
            ? o
            : Math.max(0, Math.min(o, this.limit))),
          !this.smooth || i
            ? (this.animate.stop(),
              (this.scroll = this.lastScroll = this.targetScroll),
              this.setScroll(this.targetScroll))
            : this.animate.to(this, {
                duration: r,
                easing: n,
                scroll: this.targetScroll,
              });
      }
    };
  function Ge(s) {
    if (s === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return s;
  }
  function aa(s, t) {
    (s.prototype = Object.create(t.prototype)),
      (s.prototype.constructor = s),
      (s.__proto__ = t);
  }
  var oe = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Gi = { duration: 0.5, overwrite: !1, delay: 0 },
    Is,
    ne,
    bt,
    ve = 1e8,
    Z = 1 / ve,
    Ts = Math.PI * 2,
    Lu = Ts / 4,
    Iu = 0,
    la = Math.sqrt,
    Ru = Math.cos,
    Fu = Math.sin,
    Ct = function (t) {
      return typeof t == "string";
    },
    ht = function (t) {
      return typeof t == "function";
    },
    $e = function (t) {
      return typeof t == "number";
    },
    pn = function (t) {
      return typeof t == "undefined";
    },
    Be = function (t) {
      return typeof t == "object";
    },
    se = function (t) {
      return t !== !1;
    },
    ua = function () {
      return typeof window != "undefined";
    },
    nn = function (t) {
      return ht(t) || Ct(t);
    },
    ha =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    Wt = Array.isArray,
    Ss = /(?:-?\.?\d|\.)+/gi,
    Rs = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    ki = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    gs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Fs = /[+-]=-?[.\d]+/,
    fa = /[^,'"\[\]\s]+/gi,
    Nu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    st,
    ye,
    As,
    Ns,
    ce = {},
    ln = {},
    ca,
    da = function (t) {
      return (ln = Mi(t, ce)) && jt;
    },
    _n = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    un = function (t, e) {
      return !e && console.warn(t);
    },
    pa = function (t, e) {
      return (t && (ce[t] = e) && ln && (ln[t] = e)) || ce;
    },
    kr = function () {
      return 0;
    },
    zu = { suppressEvents: !0, isStart: !0, kill: !1 },
    sn = { suppressEvents: !0, kill: !1 },
    Bu = { suppressEvents: !0 },
    zs = {},
    fi = [],
    Cs = {},
    _a,
    ie = {},
    ms = {},
    ta = 30,
    on = [],
    Bs = "",
    Ws = function (t) {
      var e = t[0],
        i,
        r;
      if ((Be(e) || ht(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
        for (r = on.length; r-- && !on[r].targetTest(e); );
        i = on[r];
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new Us(t[r], i)))) ||
          t.splice(r, 1);
      return t;
    },
    ci = function (t) {
      return t._gsap || Ws(we(t))[0]._gsap;
    },
    Ys = function (t, e, i) {
      return (i = t[e]) && ht(i)
        ? t[e]()
        : (pn(i) && t.getAttribute && t.getAttribute(e)) || i;
    },
    $t = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    ft = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    Ot = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0;
    },
    Ei = function (t, e) {
      var i = e.charAt(0),
        r = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
      );
    },
    Wu = function (t, e) {
      for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
      return r < i;
    },
    hn = function () {
      var t = fi.length,
        e = fi.slice(0),
        i,
        r;
      for (Cs = {}, fi.length = 0, i = 0; i < t; i++)
        (r = e[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    ga = function (t, e, i, r) {
      fi.length && hn(),
        t.render(e, i, r || (ne && e < 0 && (t._initted || t._startAt))),
        fi.length && hn();
    },
    ma = function (t) {
      var e = parseFloat(t);
      return (e || e === 0) && (t + "").match(fa).length < 2
        ? e
        : Ct(t)
        ? t.trim()
        : t;
    },
    ya = function (t) {
      return t;
    },
    xe = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    },
    Yu = function (t) {
      return function (e, i) {
        for (var r in i)
          r in e || (r === "duration" && t) || r === "ease" || (e[r] = i[r]);
      };
    },
    Mi = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    ea = function s(t, e) {
      for (var i in e)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (t[i] = Be(e[i]) ? s(t[i] || (t[i] = {}), e[i]) : e[i]);
      return t;
    },
    fn = function (t, e) {
      var i = {},
        r;
      for (r in t) r in e || (i[r] = t[r]);
      return i;
    },
    Ar = function (t) {
      var e = t.parent || st,
        i = t.keyframes ? Yu(Wt(t.keyframes)) : xe;
      if (se(t.inherit))
        for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    },
    Xu = function (t, e) {
      for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
      return i < 0;
    },
    va = function (t, e, i, r, n) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var o = t[r],
        a;
      if (n) for (a = e[n]; o && o[n] > a; ) o = o._prev;
      return (
        o
          ? ((e._next = o._next), (o._next = e))
          : ((e._next = t[i]), (t[i] = e)),
        e._next ? (e._next._prev = e) : (t[r] = e),
        (e._prev = o),
        (e.parent = e._dp = t),
        e
      );
    },
    gn = function (t, e, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var n = e._prev,
        o = e._next;
      n ? (n._next = o) : t[i] === e && (t[i] = o),
        o ? (o._prev = n) : t[r] === e && (t[r] = n),
        (e._next = e._prev = e.parent = null);
    },
    di = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0);
    },
    Ai = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
      return t;
    },
    Uu = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    Ms = function (t, e, i, r) {
      return (
        t._startAt &&
        (ne
          ? t._startAt.revert(sn)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(e, !0, r))
      );
    },
    Hu = function s(t) {
      return !t || (t._ts && s(t.parent));
    },
    ia = function (t) {
      return t._repeat ? ji(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    ji = function (t, e) {
      var i = Math.floor((t /= e));
      return t && i === t ? i - 1 : i;
    },
    cn = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    mn = function (t) {
      return (t._end = Ot(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || Z) || 0)
      ));
    },
    yn = function (t, e) {
      var i = t._dp;
      return (
        i &&
          i.smoothChildTiming &&
          t._ts &&
          ((t._start = Ot(
            i._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          mn(t),
          i._dirty || Ai(i, t)),
        t
      );
    },
    wa = function (t, e) {
      var i;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((i = cn(t.rawTime(), e)),
          (!e._dur || Or(0, e.totalDuration(), i) - e._tTime > Z) &&
            e.render(i, !0)),
        Ai(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (i = t; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        t._zTime = -Z;
      }
    },
    ze = function (t, e, i, r) {
      return (
        e.parent && di(e),
        (e._start = Ot(
          ($e(i) ? i : i || t !== st ? me(t, i, e) : t._time) + e._delay
        )),
        (e._end = Ot(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        va(t, e, "_first", "_last", t._sort ? "_start" : 0),
        ks(e) || (t._recent = e),
        r || wa(t, e),
        t._ts < 0 && yn(t, t._tTime),
        t
      );
    },
    ba = function (t, e) {
      return (
        (ce.ScrollTrigger || _n("scrollTrigger", e)) &&
        ce.ScrollTrigger.create(e, t)
      );
    },
    xa = function (t, e, i, r, n) {
      if ((qs(t, e, n), !t._initted)) return 1;
      if (
        !i &&
        t._pt &&
        !ne &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        _a !== re.frame
      )
        return fi.push(t), (t._lazy = [n, r]), 1;
    },
    Vu = function s(t) {
      var e = t.parent;
      return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || s(e));
    },
    ks = function (t) {
      var e = t.data;
      return e === "isFromStart" || e === "isStart";
    },
    qu = function (t, e, i, r) {
      var n = t.ratio,
        o =
          e < 0 ||
          (!e &&
            ((!t._start && Vu(t) && !(!t._initted && ks(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !ks(t))))
            ? 0
            : 1,
        a = t._rDelay,
        l = 0,
        u,
        h,
        c;
      if (
        (a &&
          t._repeat &&
          ((l = Or(0, t._tDur, e)),
          (h = ji(l, a)),
          t._yoyo && h & 1 && (o = 1 - o),
          h !== ji(t._tTime, a) &&
            ((n = 1 - o),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        o !== n || ne || r || t._zTime === Z || (!e && t._zTime))
      ) {
        if (!t._initted && xa(t, e, r, i, l)) return;
        for (
          c = t._zTime,
            t._zTime = e || (i ? Z : 0),
            i || (i = e && !c),
            t.ratio = o,
            t._from && (o = 1 - o),
            t._time = 0,
            t._tTime = l,
            u = t._pt;
          u;

        )
          u.r(o, u.d), (u = u._next);
        e < 0 && Ms(t, e, i, !0),
          t._onUpdate && !i && be(t, "onUpdate"),
          l && t._repeat && !i && t.parent && be(t, "onRepeat"),
          (e >= t._tDur || e < 0) &&
            t.ratio === o &&
            (o && di(t, 1),
            !i &&
              !ne &&
              (be(t, o ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()));
      } else t._zTime || (t._zTime = e);
    },
    Gu = function (t, e, i) {
      var r;
      if (i > e)
        for (r = t._first; r && r._start <= i; ) {
          if (r.data === "isPause" && r._start > e) return r;
          r = r._next;
        }
      else
        for (r = t._last; r && r._start >= i; ) {
          if (r.data === "isPause" && r._start < e) return r;
          r = r._prev;
        }
    },
    $i = function (t, e, i, r) {
      var n = t._repeat,
        o = Ot(e) || 0,
        a = t._tTime / t._tDur;
      return (
        a && !r && (t._time *= o / t._dur),
        (t._dur = o),
        (t._tDur = n ? (n < 0 ? 1e10 : Ot(o * (n + 1) + t._rDelay * n)) : o),
        a > 0 && !r && yn(t, (t._tTime = t._tDur * a)),
        t.parent && mn(t),
        i || Ai(t.parent, t),
        t
      );
    },
    ra = function (t) {
      return t instanceof Bt ? Ai(t) : $i(t, t._dur);
    },
    ju = { _start: 0, endTime: kr, totalDuration: kr },
    me = function s(t, e, i) {
      var r = t.labels,
        n = t._recent || ju,
        o = t.duration() >= ve ? n.endTime(!1) : t._dur,
        a,
        l,
        u;
      return Ct(e) && (isNaN(e) || e in r)
        ? ((l = e.charAt(0)),
          (u = e.substr(-1) === "%"),
          (a = e.indexOf("=")),
          l === "<" || l === ">"
            ? (a >= 0 && (e = e.replace(/=/, "")),
              (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
                (parseFloat(e.substr(1)) || 0) *
                  (u ? (a < 0 ? n : i).totalDuration() / 100 : 1))
            : a < 0
            ? (e in r || (r[e] = o), r[e])
            : ((l = parseFloat(e.charAt(a - 1) + e.substr(a + 1))),
              u && i && (l = (l / 100) * (Wt(i) ? i[0] : i).totalDuration()),
              a > 1 ? s(t, e.substr(0, a - 1), i) + l : o + l))
        : e == null
        ? o
        : +e;
    },
    Cr = function (t, e, i) {
      var r = $e(e[1]),
        n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
        o = e[n],
        a,
        l;
      if ((r && (o.duration = e[1]), (o.parent = i), t)) {
        for (a = o, l = i; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = se(l.vars.inherit) && l.parent);
        (o.immediateRender = se(a.immediateRender)),
          t < 2 ? (o.runBackwards = 1) : (o.startAt = e[n - 1]);
      }
      return new wt(e[0], o, e[n + 1]);
    },
    pi = function (t, e) {
      return t || t === 0 ? e(t) : e;
    },
    Or = function (t, e, i) {
      return i < t ? t : i > e ? e : i;
    },
    Pt = function (t, e) {
      return !Ct(t) || !(e = Nu.exec(t)) ? "" : e[1];
    },
    $u = function (t, e, i) {
      return pi(i, function (r) {
        return Or(t, e, r);
      });
    },
    Es = [].slice,
    Ta = function (t, e) {
      return (
        t &&
        Be(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && Be(t[0]))) &&
        !t.nodeType &&
        t !== ye
      );
    },
    Ku = function (t, e, i) {
      return (
        i === void 0 && (i = []),
        t.forEach(function (r) {
          var n;
          return (Ct(r) && !e) || Ta(r, 1)
            ? (n = i).push.apply(n, we(r))
            : i.push(r);
        }) || i
      );
    },
    we = function (t, e, i) {
      return bt && !e && bt.selector
        ? bt.selector(t)
        : Ct(t) && !i && (As || !Ki())
        ? Es.call((e || Ns).querySelectorAll(t), 0)
        : Wt(t)
        ? Ku(t, i)
        : Ta(t)
        ? Es.call(t, 0)
        : t
        ? [t]
        : [];
    },
    Os = function (t) {
      return (
        (t = we(t)[0] || un("Invalid scope") || {}),
        function (e) {
          var i = t.current || t.nativeElement || t;
          return we(
            e,
            i.querySelectorAll
              ? i
              : i === t
              ? un("Invalid scope") || Ns.createElement("div")
              : t
          );
        }
      );
    },
    Sa = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Aa = function (t) {
      if (ht(t)) return t;
      var e = Be(t) ? t : { each: t },
        i = Ci(e.ease),
        r = e.from || 0,
        n = parseFloat(e.base) || 0,
        o = {},
        a = r > 0 && r < 1,
        l = isNaN(r) || a,
        u = e.axis,
        h = r,
        c = r;
      return (
        Ct(r)
          ? (h = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !a && l && ((h = r[0]), (c = r[1])),
        function (d, f, g) {
          var p = (g || e).length,
            m = o[p],
            y,
            _,
            v,
            w,
            S,
            C,
            x,
            k,
            A;
          if (!m) {
            if (((A = e.grid === "auto" ? 0 : (e.grid || [1, ve])[1]), !A)) {
              for (
                x = -ve;
                x < (x = g[A++].getBoundingClientRect().left) && A < p;

              );
              A--;
            }
            for (
              m = o[p] = [],
                y = l ? Math.min(A, p) * h - 0.5 : r % A,
                _ = A === ve ? 0 : l ? (p * c) / A - 0.5 : (r / A) | 0,
                x = 0,
                k = ve,
                C = 0;
              C < p;
              C++
            )
              (v = (C % A) - y),
                (w = _ - ((C / A) | 0)),
                (m[C] = S =
                  u ? Math.abs(u === "y" ? w : v) : la(v * v + w * w)),
                S > x && (x = S),
                S < k && (k = S);
            r === "random" && Sa(m),
              (m.max = x - k),
              (m.min = k),
              (m.v = p =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (A > p
                      ? p - 1
                      : u
                      ? u === "y"
                        ? p / A
                        : A
                      : Math.max(A, p / A)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (m.b = p < 0 ? n - p : n),
              (m.u = Pt(e.amount || e.each) || 0),
              (i = i && p < 0 ? Da(i) : i);
          }
          return (
            (p = (m[d] - m.min) / m.max || 0),
            Ot(m.b + (i ? i(p) : p) * m.v) + m.u
          );
        }
      );
    },
    Ps = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (i) {
        var r = Ot(Math.round(parseFloat(i) / t) * t * e);
        return (r - (r % 1)) / e + ($e(i) ? 0 : Pt(i));
      };
    },
    Ca = function (t, e) {
      var i = Wt(t),
        r,
        n;
      return (
        !i &&
          Be(t) &&
          ((r = i = t.radius || ve),
          t.values
            ? ((t = we(t.values)), (n = !$e(t[0])) && (r *= r))
            : (t = Ps(t.increment))),
        pi(
          e,
          i
            ? ht(t)
              ? function (o) {
                  return (n = t(o)), Math.abs(n - o) <= r ? n : o;
                }
              : function (o) {
                  for (
                    var a = parseFloat(n ? o.x : o),
                      l = parseFloat(n ? o.y : 0),
                      u = ve,
                      h = 0,
                      c = t.length,
                      d,
                      f;
                    c--;

                  )
                    n
                      ? ((d = t[c].x - a),
                        (f = t[c].y - l),
                        (d = d * d + f * f))
                      : (d = Math.abs(t[c] - a)),
                      d < u && ((u = d), (h = c));
                  return (
                    (h = !r || u <= r ? t[h] : o),
                    n || h === o || $e(o) ? h : h + Pt(o)
                  );
                }
            : Ps(t)
        )
      );
    },
    Ma = function (t, e, i, r) {
      return pi(Wt(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
        return Wt(t)
          ? t[~~(Math.random() * t.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - i / 2 + Math.random() * (e - t + i * 0.99)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    Qu = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      return function (r) {
        return e.reduce(function (n, o) {
          return o(n);
        }, r);
      };
    },
    Ju = function (t, e) {
      return function (i) {
        return t(parseFloat(i)) + (e || Pt(i));
      };
    },
    Zu = function (t, e, i) {
      return Ea(t, e, 0, 1, i);
    },
    ka = function (t, e, i) {
      return pi(i, function (r) {
        return t[~~e(r)];
      });
    },
    th = function s(t, e, i) {
      var r = e - t;
      return Wt(t)
        ? ka(t, s(0, t.length), e)
        : pi(i, function (n) {
            return ((r + ((n - t) % r)) % r) + t;
          });
    },
    eh = function s(t, e, i) {
      var r = e - t,
        n = r * 2;
      return Wt(t)
        ? ka(t, s(0, t.length - 1), e)
        : pi(i, function (o) {
            return (o = (n + ((o - t) % n)) % n || 0), t + (o > r ? n - o : o);
          });
    },
    Zi = function (t) {
      for (var e = 0, i = "", r, n, o, a; ~(r = t.indexOf("random(", e)); )
        (o = t.indexOf(")", r)),
          (a = t.charAt(r + 7) === "["),
          (n = t.substr(r + 7, o - r - 7).match(a ? fa : Ss)),
          (i +=
            t.substr(e, r - e) +
            Ma(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
          (e = o + 1);
      return i + t.substr(e, t.length - e);
    },
    Ea = function (t, e, i, r, n) {
      var o = e - t,
        a = r - i;
      return pi(n, function (l) {
        return i + (((l - t) / o) * a || 0);
      });
    },
    ih = function s(t, e, i, r) {
      var n = isNaN(t + e)
        ? 0
        : function (f) {
            return (1 - f) * t + f * e;
          };
      if (!n) {
        var o = Ct(t),
          a = {},
          l,
          u,
          h,
          c,
          d;
        if ((i === !0 && (r = 1) && (i = null), o))
          (t = { p: t }), (e = { p: e });
        else if (Wt(t) && !Wt(e)) {
          for (h = [], c = t.length, d = c - 2, u = 1; u < c; u++)
            h.push(s(t[u - 1], t[u]));
          c--,
            (n = function (g) {
              g *= c;
              var p = Math.min(d, ~~g);
              return h[p](g - p);
            }),
            (i = e);
        } else r || (t = Mi(Wt(t) ? [] : {}, t));
        if (!h) {
          for (l in e) Hs.call(a, t, l, "get", e[l]);
          n = function (g) {
            return $s(g, a) || (o ? t.p : t);
          };
        }
      }
      return pi(i, n);
    },
    na = function (t, e, i) {
      var r = t.labels,
        n = ve,
        o,
        a,
        l;
      for (o in r)
        (a = r[o] - e),
          a < 0 == !!i && a && n > (a = Math.abs(a)) && ((l = o), (n = a));
      return l;
    },
    be = function (t, e, i) {
      var r = t.vars,
        n = r[e],
        o = bt,
        a = t._ctx,
        l,
        u,
        h;
      if (!!n)
        return (
          (l = r[e + "Params"]),
          (u = r.callbackScope || t),
          i && fi.length && hn(),
          a && (bt = a),
          (h = l ? n.apply(u, l) : n.call(u)),
          (bt = o),
          h
        );
    },
    Tr = function (t) {
      return (
        di(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!ne),
        t.progress() < 1 && be(t, "onInterrupt"),
        t
      );
    },
    qi,
    rh = function (t) {
      t = (!t.name && t.default) || t;
      var e = t.name,
        i = ht(t),
        r =
          e && !i && t.init
            ? function () {
                this._props = [];
              }
            : t,
        n = {
          init: kr,
          render: $s,
          add: Hs,
          kill: vh,
          modifier: yh,
          rawVars: 0,
        },
        o = { targetTest: 0, get: 0, getSetter: vn, aliases: {}, register: 0 };
      if ((Ki(), t !== r)) {
        if (ie[e]) return;
        xe(r, xe(fn(t, n), o)),
          Mi(r.prototype, Mi(n, fn(t, o))),
          (ie[(r.prop = e)] = r),
          t.targetTest && (on.push(r), (zs[e] = 1)),
          (e =
            (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
            "Plugin");
      }
      pa(e, r), t.register && t.register(jt, r, Kt);
    },
    et = 255,
    Sr = {
      aqua: [0, et, et],
      lime: [0, et, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, et],
      navy: [0, 0, 128],
      white: [et, et, et],
      olive: [128, 128, 0],
      yellow: [et, et, 0],
      orange: [et, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [et, 0, 0],
      pink: [et, 192, 203],
      cyan: [0, et, et],
      transparent: [et, et, et, 0],
    },
    ys = function (t, e, i) {
      return (
        (t += t < 0 ? 1 : t > 1 ? -1 : 0),
        ((t * 6 < 1
          ? e + (i - e) * t * 6
          : t < 0.5
          ? i
          : t * 3 < 2
          ? e + (i - e) * (2 / 3 - t) * 6
          : e) *
          et +
          0.5) |
          0
      );
    },
    Oa = function (t, e, i) {
      var r = t ? ($e(t) ? [t >> 16, (t >> 8) & et, t & et] : 0) : Sr.black,
        n,
        o,
        a,
        l,
        u,
        h,
        c,
        d,
        f,
        g;
      if (!r) {
        if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Sr[t]))
          r = Sr[t];
        else if (t.charAt(0) === "#") {
          if (
            (t.length < 6 &&
              ((n = t.charAt(1)),
              (o = t.charAt(2)),
              (a = t.charAt(3)),
              (t =
                "#" +
                n +
                n +
                o +
                o +
                a +
                a +
                (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
            t.length === 9)
          )
            return (
              (r = parseInt(t.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & et, r & et, parseInt(t.substr(7), 16) / 255]
            );
          (t = parseInt(t.substr(1), 16)),
            (r = [t >> 16, (t >> 8) & et, t & et]);
        } else if (t.substr(0, 3) === "hsl") {
          if (((r = g = t.match(Ss)), !e))
            (l = (+r[0] % 360) / 360),
              (u = +r[1] / 100),
              (h = +r[2] / 100),
              (o = h <= 0.5 ? h * (u + 1) : h + u - h * u),
              (n = h * 2 - o),
              r.length > 3 && (r[3] *= 1),
              (r[0] = ys(l + 1 / 3, n, o)),
              (r[1] = ys(l, n, o)),
              (r[2] = ys(l - 1 / 3, n, o));
          else if (~t.indexOf("="))
            return (r = t.match(Rs)), i && r.length < 4 && (r[3] = 1), r;
        } else r = t.match(Ss) || Sr.transparent;
        r = r.map(Number);
      }
      return (
        e &&
          !g &&
          ((n = r[0] / et),
          (o = r[1] / et),
          (a = r[2] / et),
          (c = Math.max(n, o, a)),
          (d = Math.min(n, o, a)),
          (h = (c + d) / 2),
          c === d
            ? (l = u = 0)
            : ((f = c - d),
              (u = h > 0.5 ? f / (2 - c - d) : f / (c + d)),
              (l =
                c === n
                  ? (o - a) / f + (o < a ? 6 : 0)
                  : c === o
                  ? (a - n) / f + 2
                  : (n - o) / f + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(u * 100 + 0.5)),
          (r[2] = ~~(h * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Pa = function (t) {
      var e = [],
        i = [],
        r = -1;
      return (
        t.split(je).forEach(function (n) {
          var o = n.match(ki) || [];
          e.push.apply(e, o), i.push((r += o.length + 1));
        }),
        (e.c = i),
        e
      );
    },
    sa = function (t, e, i) {
      var r = "",
        n = (t + r).match(je),
        o = e ? "hsla(" : "rgba(",
        a = 0,
        l,
        u,
        h,
        c;
      if (!n) return t;
      if (
        ((n = n.map(function (d) {
          return (
            (d = Oa(d, e, 1)) &&
            o +
              (e
                ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                : d.join(",")) +
              ")"
          );
        })),
        i && ((h = Pa(t)), (l = i.c), l.join(r) !== h.c.join(r)))
      )
        for (u = t.replace(je, "1").split(ki), c = u.length - 1; a < c; a++)
          r +=
            u[a] +
            (~l.indexOf(a)
              ? n.shift() || o + "0,0,0,0)"
              : (h.length ? h : n.length ? n : i).shift());
      if (!u)
        for (u = t.split(je), c = u.length - 1; a < c; a++) r += u[a] + n[a];
      return r + u[c];
    },
    je = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in Sr) s += "|" + t + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    nh = /hsl[a]?\(/,
    Xs = function (t) {
      var e = t.join(" "),
        i;
      if (((je.lastIndex = 0), je.test(e)))
        return (
          (i = nh.test(e)),
          (t[1] = sa(t[1], i)),
          (t[0] = sa(t[0], i, Pa(t[1]))),
          !0
        );
    },
    Er,
    re = (function () {
      var s = Date.now,
        t = 500,
        e = 33,
        i = s(),
        r = i,
        n = 1e3 / 240,
        o = n,
        a = [],
        l,
        u,
        h,
        c,
        d,
        f,
        g = function p(m) {
          var y = s() - r,
            _ = m === !0,
            v,
            w,
            S,
            C;
          if (
            (y > t && (i += y - e),
            (r += y),
            (S = r - i),
            (v = S - o),
            (v > 0 || _) &&
              ((C = ++c.frame),
              (d = S - c.time * 1e3),
              (c.time = S = S / 1e3),
              (o += v + (v >= n ? 4 : n - v)),
              (w = 1)),
            _ || (l = u(p)),
            w)
          )
            for (f = 0; f < a.length; f++) a[f](S, d, C, m);
        };
      return (
        (c = {
          time: 0,
          frame: 0,
          tick: function () {
            g(!0);
          },
          deltaRatio: function (m) {
            return d / (1e3 / (m || 60));
          },
          wake: function () {
            ca &&
              (!As &&
                ua() &&
                ((ye = As = window),
                (Ns = ye.document || {}),
                (ce.gsap = jt),
                (ye.gsapVersions || (ye.gsapVersions = [])).push(jt.version),
                da(ln || ye.GreenSockGlobals || (!ye.gsap && ye) || {}),
                (h = ye.requestAnimationFrame)),
              l && c.sleep(),
              (u =
                h ||
                function (m) {
                  return setTimeout(m, (o - c.time * 1e3 + 1) | 0);
                }),
              (Er = 1),
              g(2));
          },
          sleep: function () {
            (h ? ye.cancelAnimationFrame : clearTimeout)(l), (Er = 0), (u = kr);
          },
          lagSmoothing: function (m, y) {
            (t = m || 1 / Z), (e = Math.min(y, t, 0));
          },
          fps: function (m) {
            (n = 1e3 / (m || 240)), (o = c.time * 1e3 + n);
          },
          add: function (m, y, _) {
            var v = y
              ? function (w, S, C, x) {
                  m(w, S, C, x), c.remove(v);
                }
              : m;
            return c.remove(m), a[_ ? "unshift" : "push"](v), Ki(), v;
          },
          remove: function (m, y) {
            ~(y = a.indexOf(m)) && a.splice(y, 1) && f >= y && f--;
          },
          _listeners: a,
        }),
        c
      );
    })(),
    Ki = function () {
      return !Er && re.wake();
    },
    U = {},
    sh = /^[\d.\-M][\d.\-,\s]/,
    oh = /["']/g,
    ah = function (t) {
      for (
        var e = {},
          i = t.substr(1, t.length - 3).split(":"),
          r = i[0],
          n = 1,
          o = i.length,
          a,
          l,
          u;
        n < o;
        n++
      )
        (l = i[n]),
          (a = n !== o - 1 ? l.lastIndexOf(",") : l.length),
          (u = l.substr(0, a)),
          (e[r] = isNaN(u) ? u.replace(oh, "").trim() : +u),
          (r = l.substr(a + 1).trim());
      return e;
    },
    lh = function (t) {
      var e = t.indexOf("(") + 1,
        i = t.indexOf(")"),
        r = t.indexOf("(", e);
      return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
    },
    uh = function (t) {
      var e = (t + "").split("("),
        i = U[e[0]];
      return i && e.length > 1 && i.config
        ? i.config.apply(
            null,
            ~t.indexOf("{") ? [ah(e[1])] : lh(t).split(",").map(ma)
          )
        : U._CE && sh.test(t)
        ? U._CE("", t)
        : i;
    },
    Da = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    La = function s(t, e) {
      for (var i = t._first, r; i; )
        i instanceof Bt
          ? s(i, e)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== e &&
            (i.timeline
              ? s(i.timeline, e)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = e))),
          (i = i._next);
    },
    Ci = function (t, e) {
      return (t && (ht(t) ? t : U[t] || uh(t))) || e;
    },
    Oi = function (t, e, i, r) {
      i === void 0 &&
        (i = function (l) {
          return 1 - e(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
          });
      var n = { easeIn: e, easeOut: i, easeInOut: r },
        o;
      return (
        $t(t, function (a) {
          (U[a] = ce[a] = n), (U[(o = a.toLowerCase())] = i);
          for (var l in n)
            U[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = U[a + "." + l] = n[l];
        }),
        n
      );
    },
    Ia = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
      };
    },
    vs = function s(t, e, i) {
      var r = e >= 1 ? e : 1,
        n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
        o = (n / Ts) * (Math.asin(1 / r) || 0),
        a = function (h) {
          return h === 1 ? 1 : r * Math.pow(2, -10 * h) * Fu((h - o) * n) + 1;
        },
        l =
          t === "out"
            ? a
            : t === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : Ia(a);
      return (
        (n = Ts / n),
        (l.config = function (u, h) {
          return s(t, u, h);
        }),
        l
      );
    },
    ws = function s(t, e) {
      e === void 0 && (e = 1.70158);
      var i = function (o) {
          return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
        },
        r =
          t === "out"
            ? i
            : t === "in"
            ? function (n) {
                return 1 - i(1 - n);
              }
            : Ia(i);
      return (
        (r.config = function (n) {
          return s(t, n);
        }),
        r
      );
    };
  $t("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, t) {
    var e = t < 5 ? t + 1 : t;
    Oi(
      s + ",Power" + (e - 1),
      t
        ? function (i) {
            return Math.pow(i, e);
          }
        : function (i) {
            return i;
          },
      function (i) {
        return 1 - Math.pow(1 - i, e);
      },
      function (i) {
        return i < 0.5
          ? Math.pow(i * 2, e) / 2
          : 1 - Math.pow((1 - i) * 2, e) / 2;
      }
    );
  });
  U.Linear.easeNone = U.none = U.Linear.easeIn;
  Oi("Elastic", vs("in"), vs("out"), vs());
  (function (s, t) {
    var e = 1 / t,
      i = 2 * e,
      r = 2.5 * e,
      n = function (a) {
        return a < e
          ? s * a * a
          : a < i
          ? s * Math.pow(a - 1.5 / t, 2) + 0.75
          : a < r
          ? s * (a -= 2.25 / t) * a + 0.9375
          : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
      };
    Oi(
      "Bounce",
      function (o) {
        return 1 - n(1 - o);
      },
      n
    );
  })(7.5625, 2.75);
  Oi("Expo", function (s) {
    return s ? Math.pow(2, 10 * (s - 1)) : 0;
  });
  Oi("Circ", function (s) {
    return -(la(1 - s * s) - 1);
  });
  Oi("Sine", function (s) {
    return s === 1 ? 1 : -Ru(s * Lu) + 1;
  });
  Oi("Back", ws("in"), ws("out"), ws());
  U.SteppedEase =
    U.steps =
    ce.SteppedEase =
      {
        config: function (t, e) {
          t === void 0 && (t = 1);
          var i = 1 / t,
            r = t + (e ? 0 : 1),
            n = e ? 1 : 0,
            o = 1 - Z;
          return function (a) {
            return (((r * Or(0, o, a)) | 0) + n) * i;
          };
        },
      };
  Gi.ease = U["quad.out"];
  $t(
    "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    function (s) {
      return (Bs += s + "," + s + "Params,");
    }
  );
  var Us = function (t, e) {
      (this.id = Iu++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : Ys),
        (this.set = e ? e.getSetter : vn);
    },
    Qi = (function () {
      function s(e) {
        (this.vars = e),
          (this._delay = +e.delay || 0),
          (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
            ((this._rDelay = e.repeatDelay || 0),
            (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
          (this._ts = 1),
          $i(this, +e.duration, 1, 1),
          (this.data = e.data),
          bt && ((this._ctx = bt), bt.data.push(this)),
          Er || re.wake();
      }
      var t = s.prototype;
      return (
        (t.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay;
        }),
        (t.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
              )
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              $i(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (i, r) {
          if ((Ki(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              yn(this, i), !n._dp || n.parent || wa(n, this);
              n && n.parent;

            )
              n.parent._time !==
                n._start +
                  (n._ts >= 0
                    ? n._tTime / n._ts
                    : (n.totalDuration() - n._tTime) / -n._ts) &&
                n.totalTime(n._tTime, !0),
                (n = n.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              ze(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === Z) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), ga(this, i, r)),
            this
          );
        }),
        (t.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + ia(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (t.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (t.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  ia(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (t.iteration = function (i, r) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * n, r)
            : this._repeat
            ? ji(this._tTime, n) + 1
            : 1;
        }),
        (t.timeScale = function (i) {
          if (!arguments.length) return this._rts === -Z ? 0 : this._rts;
          if (this._rts === i) return this;
          var r =
            this.parent && this._ts ? cn(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -Z ? 0 : this._rts),
            this.totalTime(Or(-this._delay, this._tDur, r), !0),
            mn(this),
            Uu(this)
          );
        }),
        (t.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Ki(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== Z &&
                        (this._tTime -= Z)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && ze(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (i) {
          return (
            this._start +
            (se(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (i) {
          var r = this.parent || this._dp;
          return r
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? cn(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (i) {
          i === void 0 && (i = Bu);
          var r = ne;
          return (
            (ne = i),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (ne = r),
            this
          );
        }),
        (t.globalTime = function (i) {
          for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
            (n = r._start + n / (r._ts || 1)), (r = r._dp);
          return !this.parent && this.vars.immediateRender ? -1 : n;
        }),
        (t.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), ra(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), ra(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (t.seek = function (i, r) {
          return this.totalTime(me(this, i), se(r));
        }),
        (t.restart = function (i, r) {
          return this.play().totalTime(i ? -this._delay : 0, se(r));
        }),
        (t.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (i, r) {
          return (
            i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -Z : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -Z), this;
        }),
        (t.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            n;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (n = i.rawTime(!0)) >= r &&
              n < this.endTime(!0) - Z)
          );
        }),
        (t.eventCallback = function (i, r, n) {
          var o = this.vars;
          return arguments.length > 1
            ? (r
                ? ((o[i] = r),
                  n && (o[i + "Params"] = n),
                  i === "onUpdate" && (this._onUpdate = r))
                : delete o[i],
              this)
            : o[i];
        }),
        (t.then = function (i) {
          var r = this;
          return new Promise(function (n) {
            var o = ht(i) ? i : ya,
              a = function () {
                var u = r.then;
                (r.then = null),
                  ht(o) && (o = o(r)) && (o.then || o === r) && (r.then = u),
                  n(o),
                  (r.then = u);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? a()
              : (r._prom = a);
          });
        }),
        (t.kill = function () {
          Tr(this);
        }),
        s
      );
    })();
  xe(Qi.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Z,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Bt = (function (s) {
    aa(t, s);
    function t(i, r) {
      var n;
      return (
        i === void 0 && (i = {}),
        (n = s.call(this, i) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!i.smoothChildTiming),
        (n.autoRemoveChildren = !!i.autoRemoveChildren),
        (n._sort = se(i.sortChildren)),
        st && ze(i.parent || st, Ge(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && ba(Ge(n), i.scrollTrigger),
        n
      );
    }
    var e = t.prototype;
    return (
      (e.to = function (r, n, o) {
        return Cr(0, arguments, this), this;
      }),
      (e.from = function (r, n, o) {
        return Cr(1, arguments, this), this;
      }),
      (e.fromTo = function (r, n, o, a) {
        return Cr(2, arguments, this), this;
      }),
      (e.set = function (r, n, o) {
        return (
          (n.duration = 0),
          (n.parent = this),
          Ar(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new wt(r, n, me(this, o), 1),
          this
        );
      }),
      (e.call = function (r, n, o) {
        return ze(this, wt.delayedCall(0, r, n), o);
      }),
      (e.staggerTo = function (r, n, o, a, l, u, h) {
        return (
          (o.duration = n),
          (o.stagger = o.stagger || a),
          (o.onComplete = u),
          (o.onCompleteParams = h),
          (o.parent = this),
          new wt(r, o, me(this, l)),
          this
        );
      }),
      (e.staggerFrom = function (r, n, o, a, l, u, h) {
        return (
          (o.runBackwards = 1),
          (Ar(o).immediateRender = se(o.immediateRender)),
          this.staggerTo(r, n, o, a, l, u, h)
        );
      }),
      (e.staggerFromTo = function (r, n, o, a, l, u, h, c) {
        return (
          (a.startAt = o),
          (Ar(a).immediateRender = se(a.immediateRender)),
          this.staggerTo(r, n, a, l, u, h, c)
        );
      }),
      (e.render = function (r, n, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          h = r <= 0 ? 0 : Ot(r),
          c = this._zTime < 0 != r < 0 && (this._initted || !u),
          d,
          f,
          g,
          p,
          m,
          y,
          _,
          v,
          w,
          S,
          C,
          x;
        if (
          (this !== st && h > l && r >= 0 && (h = l),
          h !== this._tTime || o || c)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((h += this._time - a), (r += this._time - a)),
            (d = h),
            (w = this._start),
            (v = this._ts),
            (y = !v),
            c && (u || (a = this._zTime), (r || !n) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((C = this._yoyo),
              (m = u + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(m * 100 + r, n, o);
            if (
              ((d = Ot(h % m)),
              h === l
                ? ((p = this._repeat), (d = u))
                : ((p = ~~(h / m)),
                  p && p === h / m && ((d = u), p--),
                  d > u && (d = u)),
              (S = ji(this._tTime, m)),
              !a && this._tTime && S !== p && (S = p),
              C && p & 1 && ((d = u - d), (x = 1)),
              p !== S && !this._lock)
            ) {
              var k = C && S & 1,
                A = k === (C && p & 1);
              if (
                (p < S && (k = !k),
                (a = k ? 0 : u),
                (this._lock = 1),
                (this.render(a || (x ? 0 : Ot(p * m)), n, !u)._lock = 0),
                (this._tTime = h),
                !n && this.parent && be(this, "onRepeat"),
                this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  y !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                A &&
                  ((this._lock = 2),
                  (a = k ? u : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !x && this.invalidate()),
                (this._lock = 0),
                !this._ts && !y)
              )
                return this;
              La(this, x);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((_ = Gu(this, Ot(a), Ot(d))), _ && (h -= d - (d = _._start))),
            (this._tTime = h),
            (this._time = d),
            (this._act = !v),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (a = 0)),
            !a && d && !n && (be(this, "onStart"), this._tTime !== h))
          )
            return this;
          if (d >= a && r >= 0)
            for (f = this._first; f; ) {
              if (
                ((g = f._next), (f._act || d >= f._start) && f._ts && _ !== f)
              ) {
                if (f.parent !== this) return this.render(r, n, o);
                if (
                  (f.render(
                    f._ts > 0
                      ? (d - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (d - f._start) * f._ts,
                    n,
                    o
                  ),
                  d !== this._time || (!this._ts && !y))
                ) {
                  (_ = 0), g && (h += this._zTime = -Z);
                  break;
                }
              }
              f = g;
            }
          else {
            f = this._last;
            for (var E = r < 0 ? r : d; f; ) {
              if (
                ((g = f._prev), (f._act || E <= f._end) && f._ts && _ !== f)
              ) {
                if (f.parent !== this) return this.render(r, n, o);
                if (
                  (f.render(
                    f._ts > 0
                      ? (E - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (E - f._start) * f._ts,
                    n,
                    o || (ne && (f._initted || f._startAt))
                  ),
                  d !== this._time || (!this._ts && !y))
                ) {
                  (_ = 0), g && (h += this._zTime = E ? -Z : Z);
                  break;
                }
              }
              f = g;
            }
          }
          if (
            _ &&
            !n &&
            (this.pause(),
            (_.render(d >= a ? 0 : -Z)._zTime = d >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = w), mn(this), this.render(r, n, o);
          this._onUpdate && !n && be(this, "onUpdate", !0),
            ((h === l && this._tTime >= this.totalDuration()) || (!h && a)) &&
              (w === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !u) &&
                  ((h === l && this._ts > 0) || (!h && this._ts < 0)) &&
                  di(this, 1),
                !n &&
                  !(r < 0 && !a) &&
                  (h || a || !l) &&
                  (be(
                    this,
                    h === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(h < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (e.add = function (r, n) {
        var o = this;
        if (($e(n) || (n = me(this, n, r)), !(r instanceof Qi))) {
          if (Wt(r))
            return (
              r.forEach(function (a) {
                return o.add(a, n);
              }),
              this
            );
          if (Ct(r)) return this.addLabel(r, n);
          if (ht(r)) r = wt.delayedCall(0, r);
          else return this;
        }
        return this !== r ? ze(this, r, n) : this;
      }),
      (e.getChildren = function (r, n, o, a) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -ve);
        for (var l = [], u = this._first; u; )
          u._start >= a &&
            (u instanceof wt
              ? n && l.push(u)
              : (o && l.push(u),
                r && l.push.apply(l, u.getChildren(!0, n, o)))),
            (u = u._next);
        return l;
      }),
      (e.getById = function (r) {
        for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
          if (n[o].vars.id === r) return n[o];
      }),
      (e.remove = function (r) {
        return Ct(r)
          ? this.removeLabel(r)
          : ht(r)
          ? this.killTweensOf(r)
          : (gn(this, r),
            r === this._recent && (this._recent = this._last),
            Ai(this));
      }),
      (e.totalTime = function (r, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Ot(
                re.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            s.prototype.totalTime.call(this, r, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (e.addLabel = function (r, n) {
        return (this.labels[r] = me(this, n)), this;
      }),
      (e.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (e.addPause = function (r, n, o) {
        var a = wt.delayedCall(0, n || kr, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), ze(this, a, me(this, r))
        );
      }),
      (e.removePause = function (r) {
        var n = this._first;
        for (r = me(this, r); n; )
          n._start === r && n.data === "isPause" && di(n), (n = n._next);
      }),
      (e.killTweensOf = function (r, n, o) {
        for (var a = this.getTweensOf(r, o), l = a.length; l--; )
          hi !== a[l] && a[l].kill(r, n);
        return this;
      }),
      (e.getTweensOf = function (r, n) {
        for (var o = [], a = we(r), l = this._first, u = $e(n), h; l; )
          l instanceof wt
            ? Wu(l._targets, a) &&
              (u
                ? (!hi || (l._initted && l._ts)) &&
                  l.globalTime(0) <= n &&
                  l.globalTime(l.totalDuration()) > n
                : !n || l.isActive()) &&
              o.push(l)
            : (h = l.getTweensOf(a, n)).length && o.push.apply(o, h),
            (l = l._next);
        return o;
      }),
      (e.tweenTo = function (r, n) {
        n = n || {};
        var o = this,
          a = me(o, r),
          l = n,
          u = l.startAt,
          h = l.onStart,
          c = l.onStartParams,
          d = l.immediateRender,
          f,
          g = wt.to(
            o,
            xe(
              {
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration:
                  n.duration ||
                  Math.abs(
                    (a - (u && "time" in u ? u.time : o._time)) / o.timeScale()
                  ) ||
                  Z,
                onStart: function () {
                  if ((o.pause(), !f)) {
                    var m =
                      n.duration ||
                      Math.abs(
                        (a - (u && "time" in u ? u.time : o._time)) /
                          o.timeScale()
                      );
                    g._dur !== m && $i(g, m, 0, 1).render(g._time, !0, !0),
                      (f = 1);
                  }
                  h && h.apply(g, c || []);
                },
              },
              n
            )
          );
        return d ? g.render(0) : g;
      }),
      (e.tweenFromTo = function (r, n, o) {
        return this.tweenTo(n, xe({ startAt: { time: me(this, r) } }, o));
      }),
      (e.recent = function () {
        return this._recent;
      }),
      (e.nextLabel = function (r) {
        return r === void 0 && (r = this._time), na(this, me(this, r));
      }),
      (e.previousLabel = function (r) {
        return r === void 0 && (r = this._time), na(this, me(this, r), 1);
      }),
      (e.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + Z);
      }),
      (e.shiftChildren = function (r, n, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
          a._start >= o && ((a._start += r), (a._end += r)), (a = a._next);
        if (n) for (u in l) l[u] >= o && (l[u] += r);
        return Ai(this);
      }),
      (e.invalidate = function (r) {
        var n = this._first;
        for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
        return s.prototype.invalidate.call(this, r);
      }),
      (e.clear = function (r) {
        r === void 0 && (r = !0);
        for (var n = this._first, o; n; )
          (o = n._next), this.remove(n), (n = o);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          Ai(this)
        );
      }),
      (e.totalDuration = function (r) {
        var n = 0,
          o = this,
          a = o._last,
          l = ve,
          u,
          h,
          c;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -r : r)
          );
        if (o._dirty) {
          for (c = o.parent; a; )
            (u = a._prev),
              a._dirty && a.totalDuration(),
              (h = a._start),
              h > l && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (ze(o, a, h - a._delay, 1)._lock = 0))
                : (l = h),
              h < 0 &&
                a._ts &&
                ((n -= h),
                ((!c && !o._dp) || (c && c.smoothChildTiming)) &&
                  ((o._start += h / o._ts), (o._time -= h), (o._tTime -= h)),
                o.shiftChildren(-h, !1, -1 / 0),
                (l = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = u);
          $i(o, o === st && o._time > n ? o._time : n, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (t.updateRoot = function (r) {
        if ((st._ts && (ga(st, cn(r, st)), (_a = re.frame)), re.frame >= ta)) {
          ta += oe.autoSleep || 120;
          var n = st._first;
          if ((!n || !n._ts) && oe.autoSleep && re._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || re.sleep();
          }
        }
      }),
      t
    );
  })(Qi);
  xe(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var hh = function (t, e, i, r, n, o, a) {
      var l = new Kt(this._pt, t, e, 0, 1, js, null, n),
        u = 0,
        h = 0,
        c,
        d,
        f,
        g,
        p,
        m,
        y,
        _;
      for (
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (y = ~r.indexOf("random(")) && (r = Zi(r)),
          o && ((_ = [i, r]), o(_, t, e), (i = _[0]), (r = _[1])),
          d = i.match(gs) || [];
        (c = gs.exec(r));

      )
        (g = c[0]),
          (p = r.substring(u, c.index)),
          f ? (f = (f + 1) % 5) : p.substr(-5) === "rgba(" && (f = 1),
          g !== d[h++] &&
            ((m = parseFloat(d[h - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: p || h === 1 ? p : ",",
              s: m,
              c: g.charAt(1) === "=" ? Ei(m, g) - m : parseFloat(g) - m,
              m: f && f < 4 ? Math.round : 0,
            }),
            (u = gs.lastIndex));
      return (
        (l.c = u < r.length ? r.substring(u, r.length) : ""),
        (l.fp = a),
        (Fs.test(r) || y) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Hs = function (t, e, i, r, n, o, a, l, u, h) {
      ht(r) && (r = r(n || 0, t, o));
      var c = t[e],
        d =
          i !== "get"
            ? i
            : ht(c)
            ? u
              ? t[
                  e.indexOf("set") || !ht(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](u)
              : t[e]()
            : c,
        f = ht(c) ? (u ? _h : Na) : Gs,
        g;
      if (
        (Ct(r) &&
          (~r.indexOf("random(") && (r = Zi(r)),
          r.charAt(1) === "=" &&
            ((g = Ei(d, r) + (Pt(d) || 0)), (g || g === 0) && (r = g))),
        !h || d !== r || Ds)
      )
        return !isNaN(d * r) && r !== ""
          ? ((g = new Kt(
              this._pt,
              t,
              e,
              +d || 0,
              r - (d || 0),
              typeof c == "boolean" ? mh : za,
              0,
              f
            )),
            u && (g.fp = u),
            a && g.modifier(a, this, t),
            (this._pt = g))
          : (!c && !(e in t) && _n(e, r),
            hh.call(this, t, e, d, r, f, l || oe.stringFilter, u));
    },
    fh = function (t, e, i, r, n) {
      if (
        (ht(t) && (t = Mr(t, n, e, i, r)),
        !Be(t) || (t.style && t.nodeType) || Wt(t) || ha(t))
      )
        return Ct(t) ? Mr(t, n, e, i, r) : t;
      var o = {},
        a;
      for (a in t) o[a] = Mr(t[a], n, e, i, r);
      return o;
    },
    Vs = function (t, e, i, r, n, o) {
      var a, l, u, h;
      if (
        ie[t] &&
        (a = new ie[t]()).init(
          n,
          a.rawVars ? e[t] : fh(e[t], r, n, o, i),
          i,
          r,
          o
        ) !== !1 &&
        ((i._pt = l = new Kt(i._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
        i !== qi)
      )
        for (u = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--; )
          u[a._props[h]] = l;
      return a;
    },
    hi,
    Ds,
    qs = function s(t, e, i) {
      var r = t.vars,
        n = r.ease,
        o = r.startAt,
        a = r.immediateRender,
        l = r.lazy,
        u = r.onUpdate,
        h = r.onUpdateParams,
        c = r.callbackScope,
        d = r.runBackwards,
        f = r.yoyoEase,
        g = r.keyframes,
        p = r.autoRevert,
        m = t._dur,
        y = t._startAt,
        _ = t._targets,
        v = t.parent,
        w = v && v.data === "nested" ? v.vars.targets : _,
        S = t._overwrite === "auto" && !Is,
        C = t.timeline,
        x,
        k,
        A,
        E,
        O,
        L,
        j,
        W,
        N,
        R,
        X,
        z,
        tt;
      if (
        (C && (!g || !n) && (n = "none"),
        (t._ease = Ci(n, Gi.ease)),
        (t._yEase = f ? Da(Ci(f === !0 ? n : f, Gi.ease)) : 0),
        f &&
          t._yoyo &&
          !t._repeat &&
          ((f = t._yEase), (t._yEase = t._ease), (t._ease = f)),
        (t._from = !C && !!r.runBackwards),
        !C || (g && !r.stagger))
      ) {
        if (
          ((W = _[0] ? ci(_[0]).harness : 0),
          (z = W && r[W.prop]),
          (x = fn(r, zs)),
          y &&
            (y._zTime < 0 && y.progress(1),
            e < 0 && d && a && !p
              ? y.render(-1, !0)
              : y.revert(d && m ? sn : zu),
            (y._lazy = 0)),
          o)
        ) {
          if (
            (di(
              (t._startAt = wt.set(
                _,
                xe(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: v,
                    immediateRender: !0,
                    lazy: se(l),
                    startAt: null,
                    delay: 0,
                    onUpdate: u,
                    onUpdateParams: h,
                    callbackScope: c,
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            e < 0 && (ne || (!a && !p)) && t._startAt.revert(sn),
            a && m && e <= 0 && i <= 0)
          ) {
            e && (t._zTime = e);
            return;
          }
        } else if (d && m && !y) {
          if (
            (e && (a = !1),
            (A = xe(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && se(l),
                immediateRender: a,
                stagger: 0,
                parent: v,
              },
              x
            )),
            z && (A[W.prop] = z),
            di((t._startAt = wt.set(_, A))),
            e < 0 && (ne ? t._startAt.revert(sn) : t._startAt.render(-1, !0)),
            (t._zTime = e),
            !a)
          )
            s(t._startAt, Z, Z);
          else if (!e) return;
        }
        for (
          t._pt = t._ptCache = 0, l = (m && se(l)) || (l && !m), k = 0;
          k < _.length;
          k++
        ) {
          if (
            ((O = _[k]),
            (j = O._gsap || Ws(_)[k]._gsap),
            (t._ptLookup[k] = R = {}),
            Cs[j.id] && fi.length && hn(),
            (X = w === _ ? k : w.indexOf(O)),
            W &&
              (N = new W()).init(O, z || x, t, X, w) !== !1 &&
              ((t._pt = E =
                new Kt(t._pt, O, N.name, 0, 1, N.render, N, 0, N.priority)),
              N._props.forEach(function (b) {
                R[b] = E;
              }),
              N.priority && (L = 1)),
            !W || z)
          )
            for (A in x)
              ie[A] && (N = Vs(A, x, t, X, O, w))
                ? N.priority && (L = 1)
                : (R[A] = E =
                    Hs.call(t, O, A, "get", x[A], X, w, 0, r.stringFilter));
          t._op && t._op[k] && t.kill(O, t._op[k]),
            S &&
              t._pt &&
              ((hi = t),
              st.killTweensOf(O, R, t.globalTime(e)),
              (tt = !t.parent),
              (hi = 0)),
            t._pt && l && (Cs[j.id] = 1);
        }
        L && Ks(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = u),
        (t._initted = (!t._op || t._pt) && !tt),
        g && e <= 0 && C.render(ve, !0, !0);
    },
    ch = function (t, e, i, r, n, o, a) {
      var l = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
        u,
        h,
        c,
        d;
      if (!l)
        for (
          l = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length;
          d--;

        ) {
          if (((u = c[d][e]), u && u.d && u.d._pt))
            for (u = u.d._pt; u && u.p !== e && u.fp !== e; ) u = u._next;
          if (!u) return (Ds = 1), (t.vars[e] = "+=0"), qs(t, a), (Ds = 0), 1;
          l.push(u);
        }
      for (d = l.length; d--; )
        (h = l[d]),
          (u = h._pt || h),
          (u.s = (r || r === 0) && !n ? r : u.s + (r || 0) + o * u.c),
          (u.c = i - u.s),
          h.e && (h.e = ft(i) + Pt(h.e)),
          h.b && (h.b = u.s + Pt(h.b));
    },
    dh = function (t, e) {
      var i = t[0] ? ci(t[0]).harness : 0,
        r = i && i.aliases,
        n,
        o,
        a,
        l;
      if (!r) return e;
      n = Mi({}, e);
      for (o in r)
        if (o in n)
          for (l = r[o].split(","), a = l.length; a--; ) n[l[a]] = n[o];
      return n;
    },
    ph = function (t, e, i, r) {
      var n = e.ease || r || "power1.inOut",
        o,
        a;
      if (Wt(e))
        (a = i[t] || (i[t] = [])),
          e.forEach(function (l, u) {
            return a.push({ t: (u / (e.length - 1)) * 100, v: l, e: n });
          });
      else
        for (o in e)
          (a = i[o] || (i[o] = [])),
            o === "ease" || a.push({ t: parseFloat(t), v: e[o], e: n });
    },
    Mr = function (t, e, i, r, n) {
      return ht(t)
        ? t.call(e, i, r, n)
        : Ct(t) && ~t.indexOf("random(")
        ? Zi(t)
        : t;
    },
    Ra = Bs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Fa = {};
  $t(Ra + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (Fa[s] = 1);
  });
  var wt = (function (s) {
    aa(t, s);
    function t(i, r, n, o) {
      var a;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (a = s.call(this, o ? r : Ar(r)) || this);
      var l = a.vars,
        u = l.duration,
        h = l.delay,
        c = l.immediateRender,
        d = l.stagger,
        f = l.overwrite,
        g = l.keyframes,
        p = l.defaults,
        m = l.scrollTrigger,
        y = l.yoyoEase,
        _ = r.parent || st,
        v = (Wt(i) || ha(i) ? $e(i[0]) : "length" in r) ? [i] : we(i),
        w,
        S,
        C,
        x,
        k,
        A,
        E,
        O;
      if (
        ((a._targets = v.length
          ? Ws(v)
          : un(
              "GSAP target " + i + " not found. https://greensock.com",
              !oe.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = f),
        g || d || nn(u) || nn(h))
      ) {
        if (
          ((r = a.vars),
          (w = a.timeline =
            new Bt({
              data: "nested",
              defaults: p || {},
              targets: _ && _.data === "nested" ? _.vars.targets : v,
            })),
          w.kill(),
          (w.parent = w._dp = Ge(a)),
          (w._start = 0),
          d || nn(u) || nn(h))
        ) {
          if (((x = v.length), (E = d && Aa(d)), Be(d)))
            for (k in d) ~Ra.indexOf(k) && (O || (O = {}), (O[k] = d[k]));
          for (S = 0; S < x; S++)
            (C = fn(r, Fa)),
              (C.stagger = 0),
              y && (C.yoyoEase = y),
              O && Mi(C, O),
              (A = v[S]),
              (C.duration = +Mr(u, Ge(a), S, A, v)),
              (C.delay = (+Mr(h, Ge(a), S, A, v) || 0) - a._delay),
              !d &&
                x === 1 &&
                C.delay &&
                ((a._delay = h = C.delay), (a._start += h), (C.delay = 0)),
              w.to(A, C, E ? E(S, A, v) : 0),
              (w._ease = U.none);
          w.duration() ? (u = h = 0) : (a.timeline = 0);
        } else if (g) {
          Ar(xe(w.vars.defaults, { ease: "none" })),
            (w._ease = Ci(g.ease || r.ease || "none"));
          var L = 0,
            j,
            W,
            N;
          if (Wt(g))
            g.forEach(function (R) {
              return w.to(v, R, ">");
            }),
              w.duration();
          else {
            C = {};
            for (k in g)
              k === "ease" || k === "easeEach" || ph(k, g[k], C, g.easeEach);
            for (k in C)
              for (
                j = C[k].sort(function (R, X) {
                  return R.t - X.t;
                }),
                  L = 0,
                  S = 0;
                S < j.length;
                S++
              )
                (W = j[S]),
                  (N = {
                    ease: W.e,
                    duration: ((W.t - (S ? j[S - 1].t : 0)) / 100) * u,
                  }),
                  (N[k] = W.v),
                  w.to(v, N, L),
                  (L += N.duration);
            w.duration() < u && w.to({}, { duration: u - w.duration() });
          }
        }
        u || a.duration((u = w.duration()));
      } else a.timeline = 0;
      return (
        f === !0 && !Is && ((hi = Ge(a)), st.killTweensOf(v), (hi = 0)),
        ze(_, Ge(a), n),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (c ||
          (!u &&
            !g &&
            a._start === Ot(_._time) &&
            se(c) &&
            Hu(Ge(a)) &&
            _.data !== "nested")) &&
          ((a._tTime = -Z), a.render(Math.max(0, -h) || 0)),
        m && ba(Ge(a), m),
        a
      );
    }
    var e = t.prototype;
    return (
      (e.render = function (r, n, o) {
        var a = this._time,
          l = this._tDur,
          u = this._dur,
          h = r < 0,
          c = r > l - Z && !h ? l : r < Z ? 0 : r,
          d,
          f,
          g,
          p,
          m,
          y,
          _,
          v,
          w;
        if (!u) qu(this, r, n, o);
        else if (
          c !== this._tTime ||
          !r ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== h)
        ) {
          if (((d = c), (v = this.timeline), this._repeat)) {
            if (((p = u + this._rDelay), this._repeat < -1 && h))
              return this.totalTime(p * 100 + r, n, o);
            if (
              ((d = Ot(c % p)),
              c === l
                ? ((g = this._repeat), (d = u))
                : ((g = ~~(c / p)),
                  g && g === c / p && ((d = u), g--),
                  d > u && (d = u)),
              (y = this._yoyo && g & 1),
              y && ((w = this._yEase), (d = u - d)),
              (m = ji(this._tTime, p)),
              d === a && !o && this._initted)
            )
              return (this._tTime = c), this;
            g !== m &&
              (v && this._yEase && La(v, y),
              this.vars.repeatRefresh &&
                !y &&
                !this._lock &&
                ((this._lock = o = 1),
                (this.render(Ot(p * g), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (xa(this, h ? r : d, o, n, c)) return (this._tTime = 0), this;
            if (a !== this._time) return this;
            if (u !== this._dur) return this.render(r, n, o);
          }
          if (
            ((this._tTime = c),
            (this._time = d),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = _ = (w || this._ease)(d / u)),
            this._from && (this.ratio = _ = 1 - _),
            d && !a && !n && (be(this, "onStart"), this._tTime !== c))
          )
            return this;
          for (f = this._pt; f; ) f.r(_, f.d), (f = f._next);
          (v &&
            v.render(
              r < 0 ? r : !d && y ? -Z : v._dur * v._ease(d / this._dur),
              n,
              o
            )) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (h && Ms(this, r, n, o), be(this, "onUpdate")),
            this._repeat &&
              g !== m &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              be(this, "onRepeat"),
            (c === this._tDur || !c) &&
              this._tTime === c &&
              (h && !this._onUpdate && Ms(this, r, !0, !0),
              (r || !u) &&
                ((c === this._tDur && this._ts > 0) || (!c && this._ts < 0)) &&
                di(this, 1),
              !n &&
                !(h && !a) &&
                (c || a || y) &&
                (be(this, c === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(c < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (e.targets = function () {
        return this._targets;
      }),
      (e.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          s.prototype.invalidate.call(this, r)
        );
      }),
      (e.resetTo = function (r, n, o, a) {
        Er || re.wake(), this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || qs(this, l),
          (u = this._ease(l / this._dur)),
          ch(this, r, n, o, a, u, l)
            ? this.resetTo(r, n, o, a)
            : (yn(this, 0),
              this.parent ||
                va(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (e.kill = function (r, n) {
        if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
          return (this._lazy = this._pt = 0), this.parent ? Tr(this) : this;
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, n, hi && hi.vars.overwrite !== !0)
              ._first || Tr(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              $i(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = r ? we(r) : a,
          u = this._ptLookup,
          h = this._pt,
          c,
          d,
          f,
          g,
          p,
          m,
          y;
        if ((!n || n === "all") && Xu(a, l))
          return n === "all" && (this._pt = 0), Tr(this);
        for (
          c = this._op = this._op || [],
            n !== "all" &&
              (Ct(n) &&
                ((p = {}),
                $t(n, function (_) {
                  return (p[_] = 1);
                }),
                (n = p)),
              (n = dh(a, n))),
            y = a.length;
          y--;

        )
          if (~l.indexOf(a[y])) {
            (d = u[y]),
              n === "all"
                ? ((c[y] = n), (g = d), (f = {}))
                : ((f = c[y] = c[y] || {}), (g = n));
            for (p in g)
              (m = d && d[p]),
                m &&
                  ((!("kill" in m.d) || m.d.kill(p) === !0) &&
                    gn(this, m, "_pt"),
                  delete d[p]),
                f !== "all" && (f[p] = 1);
          }
        return this._initted && !this._pt && h && Tr(this), this;
      }),
      (t.to = function (r, n) {
        return new t(r, n, arguments[2]);
      }),
      (t.from = function (r, n) {
        return Cr(1, arguments);
      }),
      (t.delayedCall = function (r, n, o, a) {
        return new t(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (t.fromTo = function (r, n, o) {
        return Cr(2, arguments);
      }),
      (t.set = function (r, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n);
      }),
      (t.killTweensOf = function (r, n, o) {
        return st.killTweensOf(r, n, o);
      }),
      t
    );
  })(Qi);
  xe(wt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
  $t("staggerTo,staggerFrom,staggerFromTo", function (s) {
    wt[s] = function () {
      var t = new Bt(),
        e = Es.call(arguments, 0);
      return e.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, e);
    };
  });
  var Gs = function (t, e, i) {
      return (t[e] = i);
    },
    Na = function (t, e, i) {
      return t[e](i);
    },
    _h = function (t, e, i, r) {
      return t[e](r.fp, i);
    },
    gh = function (t, e, i) {
      return t.setAttribute(e, i);
    },
    vn = function (t, e) {
      return ht(t[e]) ? Na : pn(t[e]) && t.setAttribute ? gh : Gs;
    },
    za = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
    },
    mh = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    js = function (t, e) {
      var i = e._pt,
        r = "";
      if (!t && e.b) r = e.b;
      else if (t === 1 && e.e) r = e.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * t)
              : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
            r),
            (i = i._next);
        r += e.c;
      }
      e.set(e.t, e.p, r, e);
    },
    $s = function (t, e) {
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
    },
    yh = function (t, e, i, r) {
      for (var n = this._pt, o; n; )
        (o = n._next), n.p === r && n.modifier(t, e, i), (n = o);
    },
    vh = function (t) {
      for (var e = this._pt, i, r; e; )
        (r = e._next),
          (e.p === t && !e.op) || e.op === t
            ? gn(this, e, "_pt")
            : e.dep || (i = 1),
          (e = r);
      return !i;
    },
    wh = function (t, e, i, r) {
      r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
    },
    Ks = function (t) {
      for (var e = t._pt, i, r, n, o; e; ) {
        for (i = e._next, r = n; r && r.pr > e.pr; ) r = r._next;
        (e._prev = r ? r._prev : o) ? (e._prev._next = e) : (n = e),
          (e._next = r) ? (r._prev = e) : (o = e),
          (e = i);
      }
      t._pt = n;
    },
    Kt = (function () {
      function s(e, i, r, n, o, a, l, u, h) {
        (this.t = i),
          (this.s = n),
          (this.c = o),
          (this.p = r),
          (this.r = a || za),
          (this.d = l || this),
          (this.set = u || Gs),
          (this.pr = h || 0),
          (this._next = e),
          e && (e._prev = this);
      }
      var t = s.prototype;
      return (
        (t.modifier = function (i, r, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = wh),
            (this.m = i),
            (this.mt = n),
            (this.tween = r);
        }),
        s
      );
    })();
  $t(
    Bs +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (s) {
      return (zs[s] = 1);
    }
  );
  ce.TweenMax = ce.TweenLite = wt;
  ce.TimelineLite = ce.TimelineMax = Bt;
  st = new Bt({
    sortChildren: !1,
    defaults: Gi,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0,
  });
  oe.stringFilter = Xs;
  var Ji = [],
    an = {},
    bh = [],
    oa = 0,
    bs = function (t) {
      return (an[t] || bh).map(function (e) {
        return e();
      });
    },
    Ls = function () {
      var t = Date.now(),
        e = [];
      t - oa > 2 &&
        (bs("matchMediaInit"),
        Ji.forEach(function (i) {
          var r = i.queries,
            n = i.conditions,
            o,
            a,
            l,
            u;
          for (a in r)
            (o = ye.matchMedia(r[a]).matches),
              o && (l = 1),
              o !== n[a] && ((n[a] = o), (u = 1));
          u && (i.revert(), l && e.push(i));
        }),
        bs("matchMediaRevert"),
        e.forEach(function (i) {
          return i.onMatch(i);
        }),
        (oa = t),
        bs("matchMedia"));
    },
    Ba = (function () {
      function s(e, i) {
        (this.selector = i && Os(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          e && this.add(e);
      }
      var t = s.prototype;
      return (
        (t.add = function (i, r, n) {
          ht(i) && ((n = r), (r = i), (i = ht));
          var o = this,
            a = function () {
              var u = bt,
                h = o.selector,
                c;
              return (
                u && u !== o && u.data.push(o),
                n && (o.selector = Os(n)),
                (bt = o),
                (c = r.apply(o, arguments)),
                ht(c) && o._r.push(c),
                (bt = u),
                (o.selector = h),
                (o.isReverted = !1),
                c
              );
            };
          return (o.last = a), i === ht ? a(o) : i ? (o[i] = a) : a;
        }),
        (t.ignore = function (i) {
          var r = bt;
          (bt = null), i(this), (bt = r);
        }),
        (t.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof s
                ? i.push.apply(i, r.getTweens())
                : r instanceof wt &&
                    !(r.parent && r.parent.data === "nested") &&
                    i.push(r);
            }),
            i
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (i, r) {
          var n = this;
          if (i) {
            var o = this.getTweens();
            this.data.forEach(function (l) {
              l.data === "isFlip" &&
                (l.revert(),
                l.getChildren(!0, !0, !1).forEach(function (u) {
                  return o.splice(o.indexOf(u), 1);
                }));
            }),
              o
                .map(function (l) {
                  return { g: l.globalTime(0), t: l };
                })
                .sort(function (l, u) {
                  return u.g - l.g || -1;
                })
                .forEach(function (l) {
                  return l.t.revert(i);
                }),
              this.data.forEach(function (l) {
                return !(l instanceof Qi) && l.revert && l.revert(i);
              }),
              this._r.forEach(function (l) {
                return l(i, n);
              }),
              (this.isReverted = !0);
          } else
            this.data.forEach(function (l) {
              return l.kill && l.kill();
            });
          if ((this.clear(), r)) {
            var a = Ji.indexOf(this);
            ~a && Ji.splice(a, 1);
          }
        }),
        (t.revert = function (i) {
          this.kill(i || {});
        }),
        s
      );
    })(),
    xh = (function () {
      function s(e) {
        (this.contexts = []), (this.scope = e);
      }
      var t = s.prototype;
      return (
        (t.add = function (i, r, n) {
          Be(i) || (i = { matches: i });
          var o = new Ba(0, n || this.scope),
            a = (o.conditions = {}),
            l,
            u,
            h;
          this.contexts.push(o), (r = o.add("onMatch", r)), (o.queries = i);
          for (u in i)
            u === "all"
              ? (h = 1)
              : ((l = ye.matchMedia(i[u])),
                l &&
                  (Ji.indexOf(o) < 0 && Ji.push(o),
                  (a[u] = l.matches) && (h = 1),
                  l.addListener
                    ? l.addListener(Ls)
                    : l.addEventListener("change", Ls)));
          return h && r(o), this;
        }),
        (t.revert = function (i) {
          this.kill(i || {});
        }),
        (t.kill = function (i) {
          this.contexts.forEach(function (r) {
            return r.kill(i, !0);
          });
        }),
        s
      );
    })(),
    dn = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        e.forEach(function (r) {
          return rh(r);
        });
      },
      timeline: function (t) {
        return new Bt(t);
      },
      getTweensOf: function (t, e) {
        return st.getTweensOf(t, e);
      },
      getProperty: function (t, e, i, r) {
        Ct(t) && (t = we(t)[0]);
        var n = ci(t || {}).get,
          o = i ? ya : ma;
        return (
          i === "native" && (i = ""),
          t &&
            (e
              ? o(((ie[e] && ie[e].get) || n)(t, e, i, r))
              : function (a, l, u) {
                  return o(((ie[a] && ie[a].get) || n)(t, a, l, u));
                })
        );
      },
      quickSetter: function (t, e, i) {
        if (((t = we(t)), t.length > 1)) {
          var r = t.map(function (h) {
              return jt.quickSetter(h, e, i);
            }),
            n = r.length;
          return function (h) {
            for (var c = n; c--; ) r[c](h);
          };
        }
        t = t[0] || {};
        var o = ie[e],
          a = ci(t),
          l = (a.harness && (a.harness.aliases || {})[e]) || e,
          u = o
            ? function (h) {
                var c = new o();
                (qi._pt = 0),
                  c.init(t, i ? h + i : h, qi, 0, [t]),
                  c.render(1, c),
                  qi._pt && $s(1, qi);
              }
            : a.set(t, l);
        return o
          ? u
          : function (h) {
              return u(t, l, i ? h + i : h, a, 1);
            };
      },
      quickTo: function (t, e, i) {
        var r,
          n = jt.to(
            t,
            Mi(((r = {}), (r[e] = "+=0.1"), (r.paused = !0), r), i || {})
          ),
          o = function (l, u, h) {
            return n.resetTo(e, l, u, h);
          };
        return (o.tween = n), o;
      },
      isTweening: function (t) {
        return st.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Ci(t.ease, Gi.ease)), ea(Gi, t || {});
      },
      config: function (t) {
        return ea(oe, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          i = t.effect,
          r = t.plugins,
          n = t.defaults,
          o = t.extendTimeline;
        (r || "").split(",").forEach(function (a) {
          return (
            a &&
            !ie[a] &&
            !ce[a] &&
            un(e + " effect requires " + a + " plugin.")
          );
        }),
          (ms[e] = function (a, l, u) {
            return i(we(a), xe(l || {}, n), u);
          }),
          o &&
            (Bt.prototype[e] = function (a, l, u) {
              return this.add(ms[e](a, Be(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (t, e) {
        U[t] = Ci(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Ci(t, e) : U;
      },
      getById: function (t) {
        return st.getById(t);
      },
      exportRoot: function (t, e) {
        t === void 0 && (t = {});
        var i = new Bt(t),
          r,
          n;
        for (
          i.smoothChildTiming = se(t.smoothChildTiming),
            st.remove(i),
            i._dp = 0,
            i._time = i._tTime = st._time,
            r = st._first;
          r;

        )
          (n = r._next),
            (e ||
              !(
                !r._dur &&
                r instanceof wt &&
                r.vars.onComplete === r._targets[0]
              )) &&
              ze(i, r, r._start - r._delay),
            (r = n);
        return ze(st, i, 0), i;
      },
      context: function (t, e) {
        return t ? new Ba(t, e) : bt;
      },
      matchMedia: function (t) {
        return new xh(t);
      },
      matchMediaRefresh: function () {
        return (
          Ji.forEach(function (t) {
            var e = t.conditions,
              i,
              r;
            for (r in e) e[r] && ((e[r] = !1), (i = 1));
            i && t.revert();
          }) || Ls()
        );
      },
      addEventListener: function (t, e) {
        var i = an[t] || (an[t] = []);
        ~i.indexOf(e) || i.push(e);
      },
      removeEventListener: function (t, e) {
        var i = an[t],
          r = i && i.indexOf(e);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: th,
        wrapYoyo: eh,
        distribute: Aa,
        random: Ma,
        snap: Ca,
        normalize: Zu,
        getUnit: Pt,
        clamp: $u,
        splitColor: Oa,
        toArray: we,
        selector: Os,
        mapRange: Ea,
        pipe: Qu,
        unitize: Ju,
        interpolate: ih,
        shuffle: Sa,
      },
      install: da,
      effects: ms,
      ticker: re,
      updateRoot: Bt.updateRoot,
      plugins: ie,
      globalTimeline: st,
      core: {
        PropTween: Kt,
        globals: pa,
        Tween: wt,
        Timeline: Bt,
        Animation: Qi,
        getCache: ci,
        _removeLinkedListItem: gn,
        reverting: function () {
          return ne;
        },
        context: function (t) {
          return t && bt && (bt.data.push(t), (t._ctx = bt)), bt;
        },
        suppressOverwrites: function (t) {
          return (Is = t);
        },
      },
    };
  $t("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (dn[s] = wt[s]);
  });
  re.add(Bt.updateRoot);
  qi = dn.to({}, { duration: 0 });
  var Th = function (t, e) {
      for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
      return i;
    },
    Sh = function (t, e) {
      var i = t._targets,
        r,
        n,
        o;
      for (r in e)
        for (n = i.length; n--; )
          (o = t._ptLookup[n][r]),
            o &&
              (o = o.d) &&
              (o._pt && (o = Th(o, r)),
              o && o.modifier && o.modifier(e[r], t, i[n], r));
    },
    xs = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (r, n, o) {
          o._onInit = function (a) {
            var l, u;
            if (
              (Ct(n) &&
                ((l = {}),
                $t(n, function (h) {
                  return (l[h] = 1);
                }),
                (n = l)),
              e)
            ) {
              l = {};
              for (u in n) l[u] = e(n[u]);
              n = l;
            }
            Sh(a, n);
          };
        },
      };
    },
    jt =
      dn.registerPlugin(
        {
          name: "attr",
          init: function (t, e, i, r, n) {
            var o, a, l;
            this.tween = i;
            for (o in e)
              (l = t.getAttribute(o) || ""),
                (a = this.add(
                  t,
                  "setAttribute",
                  (l || 0) + "",
                  e[o],
                  r,
                  n,
                  0,
                  0,
                  o
                )),
                (a.op = o),
                (a.b = l),
                this._props.push(o);
          },
          render: function (t, e) {
            for (var i = e._pt; i; )
              ne ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var i = e.length; i--; )
              this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
          },
        },
        xs("roundProps", Ps),
        xs("modifiers"),
        xs("snap", Ca)
      ) || dn;
  wt.version = Bt.version = jt.version = "3.11.2";
  ca = 1;
  ua() && Ki();
  var Ah = U.Power0,
    Ch = U.Power1,
    Mh = U.Power2,
    kh = U.Power3,
    Eh = U.Power4,
    Oh = U.Linear,
    Ph = U.Quad,
    Dh = U.Cubic,
    Lh = U.Quart,
    Ih = U.Quint,
    Rh = U.Strong,
    Fh = U.Elastic,
    Nh = U.Back,
    zh = U.SteppedEase,
    Bh = U.Bounce,
    Wh = U.Sine,
    Yh = U.Expo,
    Xh = U.Circ;
  var Wa,
    _i,
    er,
    ro,
    Ii,
    Uh,
    Ya,
    no,
    Hh = function () {
      return typeof window != "undefined";
    },
    Je = {},
    Li = 180 / Math.PI,
    ir = Math.PI / 180,
    tr = Math.atan2,
    Xa = 1e8,
    so = /([A-Z])/g,
    Vh = /(left|right|width|margin|padding|x)/i,
    qh = /[\s,\(]\S/,
    Qe = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Zs = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
    },
    Gh = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
        e
      );
    },
    jh = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
        e
      );
    },
    $h = function (t, e) {
      var i = e.s + e.c * t;
      e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    $a = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    Ka = function (t, e) {
      return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
    },
    Kh = function (t, e, i) {
      return (t.style[e] = i);
    },
    Qh = function (t, e, i) {
      return t.style.setProperty(e, i);
    },
    Jh = function (t, e, i) {
      return (t._gsap[e] = i);
    },
    Zh = function (t, e, i) {
      return (t._gsap.scaleX = t._gsap.scaleY = i);
    },
    tf = function (t, e, i, r, n) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = i), o.renderTransform(n, o);
    },
    ef = function (t, e, i, r, n) {
      var o = t._gsap;
      (o[e] = i), o.renderTransform(n, o);
    },
    ot = "transform",
    Ee = ot + "Origin",
    rf = function (t, e) {
      var i = this,
        r = this.target,
        n = r.style;
      if (t in Je) {
        if (
          ((this.tfm = this.tfm || {}),
          t !== "transform" &&
            ((t = Qe[t] || t),
            ~t.indexOf(",")
              ? t.split(",").forEach(function (o) {
                  return (i.tfm[o] = Ke(r, o));
                })
              : (this.tfm[t] = r._gsap.x ? r._gsap[t] : Ke(r, t))),
          this.props.indexOf(ot) >= 0)
        )
          return;
        r._gsap.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(Ee, e, "")),
          (t = ot);
      }
      (n || e) && this.props.push(t, e, n[t]);
    },
    Qa = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    nf = function () {
      var t = this.props,
        e = this.target,
        i = e.style,
        r = e._gsap,
        n,
        o;
      for (n = 0; n < t.length; n += 3)
        t[n + 1]
          ? (e[t[n]] = t[n + 2])
          : t[n + 2]
          ? (i[t[n]] = t[n + 2])
          : i.removeProperty(t[n].replace(so, "-$1").toLowerCase());
      if (this.tfm) {
        for (o in this.tfm) r[o] = this.tfm[o];
        r.svg &&
          (r.renderTransform(),
          e.setAttribute("data-svg-origin", this.svgo || "")),
          (n = no()),
          n && !n.isStart && !i[ot] && (Qa(i), (r.uncache = 1));
      }
    },
    Ja = function (t, e) {
      var i = { target: t, props: [], revert: nf, save: rf };
      return (
        e &&
          e.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    Za,
    to = function (t, e) {
      var i = _i.createElementNS
        ? _i.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : _i.createElement(t);
      return i.style ? i : _i.createElement(t);
    },
    We = function s(t, e, i) {
      var r = getComputedStyle(t);
      return (
        r[e] ||
        r.getPropertyValue(e.replace(so, "-$1").toLowerCase()) ||
        r.getPropertyValue(e) ||
        (!i && s(t, rr(e) || e, 1)) ||
        ""
      );
    },
    Ua = "O,Moz,ms,Ms,Webkit".split(","),
    rr = function (t, e, i) {
      var r = e || Ii,
        n = r.style,
        o = 5;
      if (t in n && !i) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        o-- && !(Ua[o] + t in n);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Ua[o] : "") + t;
    },
    eo = function () {
      Hh() &&
        window.document &&
        ((Wa = window),
        (_i = Wa.document),
        (er = _i.documentElement),
        (Ii = to("div") || { style: {} }),
        (Uh = to("div")),
        (ot = rr(ot)),
        (Ee = ot + "Origin"),
        (Ii.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Za = !!rr("perspective")),
        (no = jt.core.reverting),
        (ro = 1));
    },
    Qs = function s(t) {
      var e = to(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        i = this.parentNode,
        r = this.nextSibling,
        n = this.style.cssText,
        o;
      if (
        (er.appendChild(e),
        e.appendChild(this),
        (this.style.display = "block"),
        t)
      )
        try {
          (o = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = s);
        } catch (a) {}
      else this._gsapBBox && (o = this._gsapBBox());
      return (
        i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
        er.removeChild(e),
        (this.style.cssText = n),
        o
      );
    },
    Ha = function (t, e) {
      for (var i = e.length; i--; )
        if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
    },
    tl = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (i) {
        e = Qs.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === Qs ||
          (e = Qs.call(t, !0)),
        e && !e.width && !e.x && !e.y
          ? {
              x: +Ha(t, ["x", "cx", "x1"]) || 0,
              y: +Ha(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : e
      );
    },
    el = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && tl(t));
    },
    Dr = function (t, e) {
      if (e) {
        var i = t.style;
        e in Je && e !== Ee && (e = ot),
          i.removeProperty
            ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") &&
                (e = "-" + e),
              i.removeProperty(e.replace(so, "-$1").toLowerCase()))
            : i.removeAttribute(e);
      }
    },
    gi = function (t, e, i, r, n, o) {
      var a = new Kt(t._pt, e, i, 0, 1, o ? Ka : $a);
      return (t._pt = a), (a.b = r), (a.e = n), t._props.push(i), a;
    },
    Va = { deg: 1, rad: 1, turn: 1 },
    sf = { grid: 1, flex: 1 },
    mi = function s(t, e, i, r) {
      var n = parseFloat(i) || 0,
        o = (i + "").trim().substr((n + "").length) || "px",
        a = Ii.style,
        l = Vh.test(e),
        u = t.tagName.toLowerCase() === "svg",
        h = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        c = 100,
        d = r === "px",
        f = r === "%",
        g,
        p,
        m,
        y;
      return r === o || !n || Va[r] || Va[o]
        ? n
        : (o !== "px" && !d && (n = s(t, e, i, "px")),
          (y = t.getCTM && el(t)),
          (f || o === "%") && (Je[e] || ~e.indexOf("adius"))
            ? ((g = y ? t.getBBox()[l ? "width" : "height"] : t[h]),
              ft(f ? (n / g) * c : (n / 100) * g))
            : ((a[l ? "width" : "height"] = c + (d ? o : r)),
              (p =
                ~e.indexOf("adius") || (r === "em" && t.appendChild && !u)
                  ? t
                  : t.parentNode),
              y && (p = (t.ownerSVGElement || {}).parentNode),
              (!p || p === _i || !p.appendChild) && (p = _i.body),
              (m = p._gsap),
              m && f && m.width && l && m.time === re.time && !m.uncache
                ? ft((n / m.width) * c)
                : ((f || o === "%") &&
                    !sf[We(p, "display")] &&
                    (a.position = We(t, "position")),
                  p === t && (a.position = "static"),
                  p.appendChild(Ii),
                  (g = Ii[h]),
                  p.removeChild(Ii),
                  (a.position = "absolute"),
                  l && f && ((m = ci(p)), (m.time = re.time), (m.width = p[h])),
                  ft(d ? (g * n) / c : g && n ? (c / g) * n : 0))));
    },
    Ke = function (t, e, i, r) {
      var n;
      return (
        ro || eo(),
        e in Qe &&
          e !== "transform" &&
          ((e = Qe[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
        Je[e] && e !== "transform"
          ? ((n = Ir(t, r)),
            (n =
              e !== "transformOrigin"
                ? n[e]
                : n.svg
                ? n.origin
                : bn(We(t, Ee)) + " " + n.zOrigin + "px"))
          : ((n = t.style[e]),
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
              (n =
                (wn[e] && wn[e](t, e, i)) ||
                We(t, e) ||
                Ys(t, e) ||
                (e === "opacity" ? 1 : 0))),
        i && !~(n + "").trim().indexOf(" ") ? mi(t, e, n, i) + i : n
      );
    },
    of = function (t, e, i, r) {
      if (!i || i === "none") {
        var n = rr(e, t, 1),
          o = n && We(t, n, 1);
        o && o !== i
          ? ((e = n), (i = o))
          : e === "borderColor" && (i = We(t, "borderTopColor"));
      }
      var a = new Kt(this._pt, t.style, e, 0, 1, js),
        l = 0,
        u = 0,
        h,
        c,
        d,
        f,
        g,
        p,
        m,
        y,
        _,
        v,
        w,
        S;
      if (
        ((a.b = i),
        (a.e = r),
        (i += ""),
        (r += ""),
        r === "auto" &&
          ((t.style[e] = r), (r = We(t, e) || r), (t.style[e] = i)),
        (h = [i, r]),
        Xs(h),
        (i = h[0]),
        (r = h[1]),
        (d = i.match(ki) || []),
        (S = r.match(ki) || []),
        S.length)
      ) {
        for (; (c = ki.exec(r)); )
          (m = c[0]),
            (_ = r.substring(l, c.index)),
            g
              ? (g = (g + 1) % 5)
              : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") &&
                (g = 1),
            m !== (p = d[u++] || "") &&
              ((f = parseFloat(p) || 0),
              (w = p.substr((f + "").length)),
              m.charAt(1) === "=" && (m = Ei(f, m) + w),
              (y = parseFloat(m)),
              (v = m.substr((y + "").length)),
              (l = ki.lastIndex - v.length),
              v ||
                ((v = v || oe.units[e] || w),
                l === r.length && ((r += v), (a.e += v))),
              w !== v && (f = mi(t, e, p, v) || 0),
              (a._pt = {
                _next: a._pt,
                p: _ || u === 1 ? _ : ",",
                s: f,
                c: y - f,
                m: (g && g < 4) || e === "zIndex" ? Math.round : 0,
              }));
        a.c = l < r.length ? r.substring(l, r.length) : "";
      } else a.r = e === "display" && r === "none" ? Ka : $a;
      return Fs.test(r) && (a.e = 0), (this._pt = a), a;
    },
    qa = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    af = function (t) {
      var e = t.split(" "),
        i = e[0],
        r = e[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((t = i), (i = r), (r = t)),
        (e[0] = qa[i] || i),
        (e[1] = qa[r] || r),
        e.join(" ")
      );
    },
    lf = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var i = e.t,
          r = i.style,
          n = e.u,
          o = i._gsap,
          a,
          l,
          u;
        if (n === "all" || n === !0) (r.cssText = ""), (l = 1);
        else
          for (n = n.split(","), u = n.length; --u > -1; )
            (a = n[u]),
              Je[a] && ((l = 1), (a = a === "transformOrigin" ? Ee : ot)),
              Dr(i, a);
        l &&
          (Dr(i, ot),
          o &&
            (o.svg && i.removeAttribute("transform"),
            Ir(i, 1),
            (o.uncache = 1),
            Qa(r)));
      }
    },
    wn = {
      clearProps: function (t, e, i, r, n) {
        if (n.data !== "isFromStart") {
          var o = (t._pt = new Kt(t._pt, e, i, 0, 0, lf));
          return (o.u = r), (o.pr = -10), (o.tween = n), t._props.push(i), 1;
        }
      },
    },
    Lr = [1, 0, 0, 1, 0, 0],
    il = {},
    rl = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    Ga = function (t) {
      var e = We(t, ot);
      return rl(e) ? Lr : e.substr(7).match(Rs).map(ft);
    },
    oo = function (t, e) {
      var i = t._gsap || ci(t),
        r = t.style,
        n = Ga(t),
        o,
        a,
        l,
        u;
      return i.svg && t.getAttribute("transform")
        ? ((l = t.transform.baseVal.consolidate().matrix),
          (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
          n.join(",") === "1,0,0,1,0,0" ? Lr : n)
        : (n === Lr &&
            !t.offsetParent &&
            t !== er &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (o = t.parentNode),
            (!o || !t.offsetParent) &&
              ((u = 1), (a = t.nextElementSibling), er.appendChild(t)),
            (n = Ga(t)),
            l ? (r.display = l) : Dr(t, "display"),
            u &&
              (a
                ? o.insertBefore(t, a)
                : o
                ? o.appendChild(t)
                : er.removeChild(t))),
          e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    io = function (t, e, i, r, n, o) {
      var a = t._gsap,
        l = n || oo(t, !0),
        u = a.xOrigin || 0,
        h = a.yOrigin || 0,
        c = a.xOffset || 0,
        d = a.yOffset || 0,
        f = l[0],
        g = l[1],
        p = l[2],
        m = l[3],
        y = l[4],
        _ = l[5],
        v = e.split(" "),
        w = parseFloat(v[0]) || 0,
        S = parseFloat(v[1]) || 0,
        C,
        x,
        k,
        A;
      i
        ? l !== Lr &&
          (x = f * m - g * p) &&
          ((k = w * (m / x) + S * (-p / x) + (p * _ - m * y) / x),
          (A = w * (-g / x) + S * (f / x) - (f * _ - g * y) / x),
          (w = k),
          (S = A))
        : ((C = tl(t)),
          (w = C.x + (~v[0].indexOf("%") ? (w / 100) * C.width : w)),
          (S =
            C.y + (~(v[1] || v[0]).indexOf("%") ? (S / 100) * C.height : S))),
        r || (r !== !1 && a.smooth)
          ? ((y = w - u),
            (_ = S - h),
            (a.xOffset = c + (y * f + _ * p) - y),
            (a.yOffset = d + (y * g + _ * m) - _))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = w),
        (a.yOrigin = S),
        (a.smooth = !!r),
        (a.origin = e),
        (a.originIsAbsolute = !!i),
        (t.style[Ee] = "0px 0px"),
        o &&
          (gi(o, a, "xOrigin", u, w),
          gi(o, a, "yOrigin", h, S),
          gi(o, a, "xOffset", c, a.xOffset),
          gi(o, a, "yOffset", d, a.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + S);
    },
    Ir = function (t, e) {
      var i = t._gsap || new Us(t);
      if ("x" in i && !e && !i.uncache) return i;
      var r = t.style,
        n = i.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(t),
        u = We(t, Ee) || "0",
        h,
        c,
        d,
        f,
        g,
        p,
        m,
        y,
        _,
        v,
        w,
        S,
        C,
        x,
        k,
        A,
        E,
        O,
        L,
        j,
        W,
        N,
        R,
        X,
        z,
        tt,
        b,
        Mt,
        Lt,
        Ce,
        kt,
        It;
      return (
        (h = c = d = p = m = y = _ = v = w = 0),
        (f = g = 1),
        (i.svg = !!(t.getCTM && el(t))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[ot] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[ot] !== "none" ? l[ot] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (x = oo(t, i.svg)),
        i.svg &&
          (i.uncache
            ? ((z = t.getBBox()),
              (u = i.xOrigin - z.x + "px " + (i.yOrigin - z.y) + "px"),
              (X = ""))
            : (X = !e && t.getAttribute("data-svg-origin")),
          io(t, X || u, !!X || i.originIsAbsolute, i.smooth !== !1, x)),
        (S = i.xOrigin || 0),
        (C = i.yOrigin || 0),
        x !== Lr &&
          ((O = x[0]),
          (L = x[1]),
          (j = x[2]),
          (W = x[3]),
          (h = N = x[4]),
          (c = R = x[5]),
          x.length === 6
            ? ((f = Math.sqrt(O * O + L * L)),
              (g = Math.sqrt(W * W + j * j)),
              (p = O || L ? tr(L, O) * Li : 0),
              (_ = j || W ? tr(j, W) * Li + p : 0),
              _ && (g *= Math.abs(Math.cos(_ * ir))),
              i.svg && ((h -= S - (S * O + C * j)), (c -= C - (S * L + C * W))))
            : ((It = x[6]),
              (Ce = x[7]),
              (b = x[8]),
              (Mt = x[9]),
              (Lt = x[10]),
              (kt = x[11]),
              (h = x[12]),
              (c = x[13]),
              (d = x[14]),
              (k = tr(It, Lt)),
              (m = k * Li),
              k &&
                ((A = Math.cos(-k)),
                (E = Math.sin(-k)),
                (X = N * A + b * E),
                (z = R * A + Mt * E),
                (tt = It * A + Lt * E),
                (b = N * -E + b * A),
                (Mt = R * -E + Mt * A),
                (Lt = It * -E + Lt * A),
                (kt = Ce * -E + kt * A),
                (N = X),
                (R = z),
                (It = tt)),
              (k = tr(-j, Lt)),
              (y = k * Li),
              k &&
                ((A = Math.cos(-k)),
                (E = Math.sin(-k)),
                (X = O * A - b * E),
                (z = L * A - Mt * E),
                (tt = j * A - Lt * E),
                (kt = W * E + kt * A),
                (O = X),
                (L = z),
                (j = tt)),
              (k = tr(L, O)),
              (p = k * Li),
              k &&
                ((A = Math.cos(k)),
                (E = Math.sin(k)),
                (X = O * A + L * E),
                (z = N * A + R * E),
                (L = L * A - O * E),
                (R = R * A - N * E),
                (O = X),
                (N = z)),
              m &&
                Math.abs(m) + Math.abs(p) > 359.9 &&
                ((m = p = 0), (y = 180 - y)),
              (f = ft(Math.sqrt(O * O + L * L + j * j))),
              (g = ft(Math.sqrt(R * R + It * It))),
              (k = tr(N, R)),
              (_ = Math.abs(k) > 2e-4 ? k * Li : 0),
              (w = kt ? 1 / (kt < 0 ? -kt : kt) : 0)),
          i.svg &&
            ((X = t.getAttribute("transform")),
            (i.forceCSS = t.setAttribute("transform", "") || !rl(We(t, ot))),
            X && t.setAttribute("transform", X))),
        Math.abs(_) > 90 &&
          Math.abs(_) < 270 &&
          (n
            ? ((f *= -1),
              (_ += p <= 0 ? 180 : -180),
              (p += p <= 0 ? 180 : -180))
            : ((g *= -1), (_ += _ <= 0 ? 180 : -180))),
        (e = e || i.uncache),
        (i.x =
          h -
          ((i.xPercent =
            h &&
            ((!e && i.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0)))
            ? (t.offsetWidth * i.xPercent) / 100
            : 0) +
          o),
        (i.y =
          c -
          ((i.yPercent =
            c &&
            ((!e && i.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-c) ? -50 : 0)))
            ? (t.offsetHeight * i.yPercent) / 100
            : 0) +
          o),
        (i.z = d + o),
        (i.scaleX = ft(f)),
        (i.scaleY = ft(g)),
        (i.rotation = ft(p) + a),
        (i.rotationX = ft(m) + a),
        (i.rotationY = ft(y) + a),
        (i.skewX = _ + a),
        (i.skewY = v + a),
        (i.transformPerspective = w + o),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (r[Ee] = bn(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = oe.force3D),
        (i.renderTransform = i.svg ? hf : Za ? nl : uf),
        (i.uncache = 0),
        i
      );
    },
    bn = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Js = function (t, e, i) {
      var r = Pt(e);
      return ft(parseFloat(e) + parseFloat(mi(t, "x", i + "px", r))) + r;
    },
    uf = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        nl(t, e);
    },
    Pi = "0deg",
    Pr = "0px",
    Di = ") ",
    nl = function (t, e) {
      var i = e || this,
        r = i.xPercent,
        n = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.z,
        u = i.rotation,
        h = i.rotationY,
        c = i.rotationX,
        d = i.skewX,
        f = i.skewY,
        g = i.scaleX,
        p = i.scaleY,
        m = i.transformPerspective,
        y = i.force3D,
        _ = i.target,
        v = i.zOrigin,
        w = "",
        S = (y === "auto" && t && t !== 1) || y === !0;
      if (v && (c !== Pi || h !== Pi)) {
        var C = parseFloat(h) * ir,
          x = Math.sin(C),
          k = Math.cos(C),
          A;
        (C = parseFloat(c) * ir),
          (A = Math.cos(C)),
          (o = Js(_, o, x * A * -v)),
          (a = Js(_, a, -Math.sin(C) * -v)),
          (l = Js(_, l, k * A * -v + v));
      }
      m !== Pr && (w += "perspective(" + m + Di),
        (r || n) && (w += "translate(" + r + "%, " + n + "%) "),
        (S || o !== Pr || a !== Pr || l !== Pr) &&
          (w +=
            l !== Pr || S
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + Di),
        u !== Pi && (w += "rotate(" + u + Di),
        h !== Pi && (w += "rotateY(" + h + Di),
        c !== Pi && (w += "rotateX(" + c + Di),
        (d !== Pi || f !== Pi) && (w += "skew(" + d + ", " + f + Di),
        (g !== 1 || p !== 1) && (w += "scale(" + g + ", " + p + Di),
        (_.style[ot] = w || "translate(0, 0)");
    },
    hf = function (t, e) {
      var i = e || this,
        r = i.xPercent,
        n = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.rotation,
        u = i.skewX,
        h = i.skewY,
        c = i.scaleX,
        d = i.scaleY,
        f = i.target,
        g = i.xOrigin,
        p = i.yOrigin,
        m = i.xOffset,
        y = i.yOffset,
        _ = i.forceCSS,
        v = parseFloat(o),
        w = parseFloat(a),
        S,
        C,
        x,
        k,
        A;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (h = parseFloat(h)),
        h && ((h = parseFloat(h)), (u += h), (l += h)),
        l || u
          ? ((l *= ir),
            (u *= ir),
            (S = Math.cos(l) * c),
            (C = Math.sin(l) * c),
            (x = Math.sin(l - u) * -d),
            (k = Math.cos(l - u) * d),
            u &&
              ((h *= ir),
              (A = Math.tan(u - h)),
              (A = Math.sqrt(1 + A * A)),
              (x *= A),
              (k *= A),
              h &&
                ((A = Math.tan(h)),
                (A = Math.sqrt(1 + A * A)),
                (S *= A),
                (C *= A))),
            (S = ft(S)),
            (C = ft(C)),
            (x = ft(x)),
            (k = ft(k)))
          : ((S = c), (k = d), (C = x = 0)),
        ((v && !~(o + "").indexOf("px")) || (w && !~(a + "").indexOf("px"))) &&
          ((v = mi(f, "x", o, "px")), (w = mi(f, "y", a, "px"))),
        (g || p || m || y) &&
          ((v = ft(v + g - (g * S + p * x) + m)),
          (w = ft(w + p - (g * C + p * k) + y))),
        (r || n) &&
          ((A = f.getBBox()),
          (v = ft(v + (r / 100) * A.width)),
          (w = ft(w + (n / 100) * A.height))),
        (A =
          "matrix(" +
          S +
          "," +
          C +
          "," +
          x +
          "," +
          k +
          "," +
          v +
          "," +
          w +
          ")"),
        f.setAttribute("transform", A),
        _ && (f.style[ot] = A);
    },
    ff = function (t, e, i, r, n) {
      var o = 360,
        a = Ct(n),
        l = parseFloat(n) * (a && ~n.indexOf("rad") ? Li : 1),
        u = l - r,
        h = r + u + "deg",
        c,
        d;
      return (
        a &&
          ((c = n.split("_")[1]),
          c === "short" &&
            ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
          c === "cw" && u < 0
            ? (u = ((u + o * Xa) % o) - ~~(u / o) * o)
            : c === "ccw" && u > 0 && (u = ((u - o * Xa) % o) - ~~(u / o) * o)),
        (t._pt = d = new Kt(t._pt, e, i, r, u, Gh)),
        (d.e = h),
        (d.u = "deg"),
        t._props.push(i),
        d
      );
    },
    ja = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    cf = function (t, e, i) {
      var r = ja({}, i._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        o = i.style,
        a,
        l,
        u,
        h,
        c,
        d,
        f,
        g;
      r.svg
        ? ((u = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (o[ot] = e),
          (a = Ir(i, 1)),
          Dr(i, ot),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[ot]),
          (o[ot] = e),
          (a = Ir(i, 1)),
          (o[ot] = u));
      for (l in Je)
        (u = r[l]),
          (h = a[l]),
          u !== h &&
            n.indexOf(l) < 0 &&
            ((f = Pt(u)),
            (g = Pt(h)),
            (c = f !== g ? mi(i, l, u, g) : parseFloat(u)),
            (d = parseFloat(h)),
            (t._pt = new Kt(t._pt, a, l, c, d - c, Zs)),
            (t._pt.u = g || 0),
            t._props.push(l));
      ja(a, r);
    };
  $t("padding,margin,Width,Radius", function (s, t) {
    var e = "Top",
      i = "Right",
      r = "Bottom",
      n = "Left",
      o = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function (
        a
      ) {
        return t < 2 ? s + a : "border" + a + s;
      });
    wn[t > 1 ? "border" + s : s] = function (a, l, u, h, c) {
      var d, f;
      if (arguments.length < 4)
        return (
          (d = o.map(function (g) {
            return Ke(a, g, u);
          })),
          (f = d.join(" ")),
          f.split(d[0]).length === 5 ? d[0] : f
        );
      (d = (h + "").split(" ")),
        (f = {}),
        o.forEach(function (g, p) {
          return (f[g] = d[p] = d[p] || d[((p - 1) / 2) | 0]);
        }),
        a.init(l, f, c);
    };
  });
  var ao = {
    name: "css",
    register: eo,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, i, r, n) {
      var o = this._props,
        a = t.style,
        l = i.vars.startAt,
        u,
        h,
        c,
        d,
        f,
        g,
        p,
        m,
        y,
        _,
        v,
        w,
        S,
        C,
        x,
        k;
      ro || eo(),
        (this.styles = this.styles || Ja(t)),
        (k = this.styles.props),
        (this.tween = i);
      for (p in e)
        if (
          p !== "autoRound" &&
          ((h = e[p]), !(ie[p] && Vs(p, e, i, r, t, n)))
        ) {
          if (
            ((f = typeof h),
            (g = wn[p]),
            f === "function" && ((h = h.call(i, r, t, n)), (f = typeof h)),
            f === "string" && ~h.indexOf("random(") && (h = Zi(h)),
            g)
          )
            g(this, t, p, h, i) && (x = 1);
          else if (p.substr(0, 2) === "--")
            (u = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
              (h += ""),
              (je.lastIndex = 0),
              je.test(u) || ((m = Pt(u)), (y = Pt(h))),
              y ? m !== y && (u = mi(t, p, u, y) + y) : m && (h += m),
              this.add(a, "setProperty", u, h, r, n, 0, 0, p),
              o.push(p),
              k.push(p, 0, a[p]);
          else if (f !== "undefined") {
            if (
              (l && p in l
                ? ((u =
                    typeof l[p] == "function" ? l[p].call(i, r, t, n) : l[p]),
                  Ct(u) && ~u.indexOf("random(") && (u = Zi(u)),
                  Pt(u + "") || (u += oe.units[p] || Pt(Ke(t, p)) || ""),
                  (u + "").charAt(1) === "=" && (u = Ke(t, p)))
                : (u = Ke(t, p)),
              (d = parseFloat(u)),
              (_ = f === "string" && h.charAt(1) === "=" && h.substr(0, 2)),
              _ && (h = h.substr(2)),
              (c = parseFloat(h)),
              p in Qe &&
                (p === "autoAlpha" &&
                  (d === 1 && Ke(t, "visibility") === "hidden" && c && (d = 0),
                  k.push("visibility", 0, a.visibility),
                  gi(
                    this,
                    a,
                    "visibility",
                    d ? "inherit" : "hidden",
                    c ? "inherit" : "hidden",
                    !c
                  )),
                p !== "scale" &&
                  p !== "transform" &&
                  ((p = Qe[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (v = p in Je),
              v)
            ) {
              if (
                (this.styles.save(p),
                w ||
                  ((S = t._gsap),
                  (S.renderTransform && !e.parseTransform) ||
                    Ir(t, e.parseTransform),
                  (C = e.smoothOrigin !== !1 && S.smooth),
                  (w = this._pt =
                    new Kt(this._pt, a, ot, 0, 1, S.renderTransform, S, 0, -1)),
                  (w.dep = 1)),
                p === "scale")
              )
                (this._pt = new Kt(
                  this._pt,
                  S,
                  "scaleY",
                  d,
                  (_ ? Ei(d, _ + c) : c) - d || 0,
                  Zs
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                k.push(Ee, 0, a[Ee]),
                  (h = af(h)),
                  S.svg
                    ? io(t, h, 0, C, 0, this)
                    : ((y = parseFloat(h.split(" ")[2]) || 0),
                      y !== S.zOrigin && gi(this, S, "zOrigin", S.zOrigin, y),
                      gi(this, a, p, bn(u), bn(h)));
                continue;
              } else if (p === "svgOrigin") {
                io(t, h, 1, C, 0, this);
                continue;
              } else if (p in il) {
                ff(this, S, p, d, _ ? Ei(d, _ + h) : h);
                continue;
              } else if (p === "smoothOrigin") {
                gi(this, S, "smooth", S.smooth, h);
                continue;
              } else if (p === "force3D") {
                S[p] = h;
                continue;
              } else if (p === "transform") {
                cf(this, h, t);
                continue;
              }
            } else p in a || (p = rr(p) || p);
            if (
              v ||
              ((c || c === 0) && (d || d === 0) && !qh.test(h) && p in a)
            )
              (m = (u + "").substr((d + "").length)),
                c || (c = 0),
                (y = Pt(h) || (p in oe.units ? oe.units[p] : m)),
                m !== y && (d = mi(t, p, u, y)),
                (this._pt = new Kt(
                  this._pt,
                  v ? S : a,
                  p,
                  d,
                  (_ ? Ei(d, _ + c) : c) - d,
                  !v && (y === "px" || p === "zIndex") && e.autoRound !== !1
                    ? $h
                    : Zs
                )),
                (this._pt.u = y || 0),
                m !== y && y !== "%" && ((this._pt.b = u), (this._pt.r = jh));
            else if (p in a) of.call(this, t, p, u, _ ? _ + h : h);
            else if (p in t) this.add(t, p, u || t[p], _ ? _ + h : h, r, n);
            else {
              _n(p, h);
              continue;
            }
            v || (p in a ? k.push(p, 0, a[p]) : k.push(p, 1, u || t[p])),
              o.push(p);
          }
        }
      x && Ks(this);
    },
    render: function (t, e) {
      if (e.tween._time || !no())
        for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
      else e.styles.revert();
    },
    get: Ke,
    aliases: Qe,
    getSetter: function (t, e, i) {
      var r = Qe[e];
      return (
        r && r.indexOf(",") < 0 && (e = r),
        e in Je && e !== Ee && (t._gsap.x || Ke(t, "x"))
          ? i && Ya === i
            ? e === "scale"
              ? Zh
              : Jh
            : (Ya = i || {}) && (e === "scale" ? tf : ef)
          : t.style && !pn(t.style[e])
          ? Kh
          : ~e.indexOf("-")
          ? Qh
          : vn(t, e)
      );
    },
    core: { _removeProperty: Dr, _getMatrix: oo },
  };
  jt.utils.checkPrefix = rr;
  jt.core.getStyleSaver = Ja;
  (function (s, t, e, i) {
    var r = $t(s + "," + t + "," + e, function (n) {
      Je[n] = 1;
    });
    $t(t, function (n) {
      (oe.units[n] = "deg"), (il[n] = 1);
    }),
      (Qe[r[13]] = s + "," + t),
      $t(i, function (n) {
        var o = n.split(":");
        Qe[o[1]] = r[o[0]];
      });
  })(
    "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
    "rotation,rotationX,rotationY,skewX,skewY",
    "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
  );
  $t(
    "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
    function (s) {
      oe.units[s] = "px";
    }
  );
  jt.registerPlugin(ao);
  var K = jt.registerPlugin(ao) || jt,
    Jf = K.core.Tween;
  function sl(s, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function df(s, t, e) {
    return t && sl(s.prototype, t), e && sl(s, e), s;
  }
  var Yt,
    lo,
    pf,
    de,
    yi,
    vi,
    sr,
    al,
    Ri,
    Fr,
    ll,
    Ze,
    Oe,
    ul = function () {
      return (
        Yt ||
        (typeof window != "undefined" &&
          (Yt = window.gsap) &&
          Yt.registerPlugin &&
          Yt)
      );
    };
  var hl = 1,
    nr = [],
    H = [],
    Pe = [],
    Nr = Date.now,
    uo = function (t, e) {
      return e;
    },
    _f = function () {
      var t = Fr.core,
        e = t.bridge || {},
        i = t._scrollers,
        r = t._proxies;
      i.push.apply(i, H),
        r.push.apply(r, Pe),
        (H = i),
        (Pe = r),
        (uo = function (o, a) {
          return e[o](a);
        });
    },
    ei = function (t, e) {
      return ~Pe.indexOf(t) && Pe[Pe.indexOf(t) + 1][e];
    },
    zr = function (t) {
      return !!~ll.indexOf(t);
    },
    ae = function (t, e, i, r, n) {
      return t.addEventListener(e, i, { passive: !r, capture: !!n });
    },
    Qt = function (t, e, i, r) {
      return t.removeEventListener(e, i, !!r);
    },
    xn = "scrollLeft",
    Tn = "scrollTop",
    ho = function () {
      return (Ze && Ze.isPressed) || H.cache++;
    },
    Sn = function (t, e) {
      var i = function r(n) {
        if (n || n === 0) {
          hl && (de.history.scrollRestoration = "manual");
          var o = Ze && Ze.isPressed;
          (n = r.v = Math.round(n) || (Ze && Ze.iOS ? 1 : 0)),
            t(n),
            (r.cacheID = H.cache),
            o && uo("ss", n);
        } else
          (e || H.cache !== r.cacheID || uo("ref")) &&
            ((r.cacheID = H.cache), (r.v = t()));
        return r.v + r.offset;
      };
      return (i.offset = 0), t && i;
    },
    Xt = {
      s: xn,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Sn(function (s) {
        return arguments.length
          ? de.scrollTo(s, xt.sc())
          : de.pageXOffset || yi[xn] || vi[xn] || sr[xn] || 0;
      }),
    },
    xt = {
      s: Tn,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Xt,
      sc: Sn(function (s) {
        return arguments.length
          ? de.scrollTo(Xt.sc(), s)
          : de.pageYOffset || yi[Tn] || vi[Tn] || sr[Tn] || 0;
      }),
    },
    Jt = function (t) {
      return (
        Yt.utils.toArray(t)[0] ||
        (typeof t == "string" && Yt.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    ti = function (t, e) {
      var i = e.s,
        r = e.sc;
      zr(t) && (t = yi.scrollingElement || vi);
      var n = H.indexOf(t),
        o = r === xt.sc ? 1 : 2;
      !~n && (n = H.push(t) - 1), H[n + o] || t.addEventListener("scroll", ho);
      var a = H[n + o],
        l =
          a ||
          (H[n + o] =
            Sn(ei(t, i), !0) ||
            (zr(t)
              ? r
              : Sn(function (u) {
                  return arguments.length ? (t[i] = u) : t[i];
                })));
      return (
        (l.target = t),
        a || (l.smooth = Yt.getProperty(t, "scrollBehavior") === "smooth"),
        l
      );
    },
    An = function (t, e, i) {
      var r = t,
        n = t,
        o = Nr(),
        a = o,
        l = e || 50,
        u = Math.max(500, l * 3),
        h = function (g, p) {
          var m = Nr();
          p || m - o > l
            ? ((n = r), (r = g), (a = o), (o = m))
            : i
            ? (r += g)
            : (r = n + ((g - n) / (m - a)) * (o - a));
        },
        c = function () {
          (n = r = i ? 0 : r), (a = o = 0);
        },
        d = function (g) {
          var p = a,
            m = n,
            y = Nr();
          return (
            (g || g === 0) && g !== r && h(g),
            o === a || y - a > u
              ? 0
              : ((r + (i ? m : -m)) / ((i ? y : o) - p)) * 1e3
          );
        };
      return { update: h, reset: c, getVelocity: d };
    },
    Rr = function (t, e) {
      return (
        e && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    ol = function (t) {
      var e = Math.max.apply(Math, t),
        i = Math.min.apply(Math, t);
      return Math.abs(e) >= Math.abs(i) ? e : i;
    },
    fl = function () {
      (Fr = Yt.core.globals().ScrollTrigger), Fr && Fr.core && _f();
    },
    cl = function (t) {
      return (
        (Yt = t || ul()),
        Yt &&
          typeof document != "undefined" &&
          document.body &&
          ((de = window),
          (yi = document),
          (vi = yi.documentElement),
          (sr = yi.body),
          (ll = [de, yi, vi, sr]),
          (pf = Yt.utils.clamp),
          (Ri = "onpointerenter" in sr ? "pointer" : "mouse"),
          (al = _t.isTouch =
            de.matchMedia &&
            de.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in de ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Oe = _t.eventTypes =
            (
              "ontouchstart" in vi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in vi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (hl = 0);
          }, 500),
          fl(),
          (lo = 1)),
        lo
      );
    };
  Xt.op = xt;
  H.cache = 0;
  var _t = (function () {
    function s(e) {
      this.init(e);
    }
    var t = s.prototype;
    return (
      (t.init = function (i) {
        lo || cl(Yt) || console.warn("Please gsap.registerPlugin(Observer)"),
          Fr || fl();
        var r = i.tolerance,
          n = i.dragMinimum,
          o = i.type,
          a = i.target,
          l = i.lineHeight,
          u = i.debounce,
          h = i.preventDefault,
          c = i.onStop,
          d = i.onStopDelay,
          f = i.ignore,
          g = i.wheelSpeed,
          p = i.event,
          m = i.onDragStart,
          y = i.onDragEnd,
          _ = i.onDrag,
          v = i.onPress,
          w = i.onRelease,
          S = i.onRight,
          C = i.onLeft,
          x = i.onUp,
          k = i.onDown,
          A = i.onChangeX,
          E = i.onChangeY,
          O = i.onChange,
          L = i.onToggleX,
          j = i.onToggleY,
          W = i.onHover,
          N = i.onHoverEnd,
          R = i.onMove,
          X = i.ignoreCheck,
          z = i.isNormalizer,
          tt = i.onGestureStart,
          b = i.onGestureEnd,
          Mt = i.onWheel,
          Lt = i.onEnable,
          Ce = i.onDisable,
          kt = i.onClick,
          It = i.scrollSpeed,
          rt = i.capture,
          Rt = i.allowClicks,
          Ht = i.lockAxis,
          pr = i.onLockAxis;
        (this.target = a = Jt(a) || vi),
          (this.vars = i),
          f && (f = Yt.utils.toArray(f)),
          (r = r || 1e-9),
          (n = n || 0),
          (g = g || 1),
          (It = It || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(de.getComputedStyle(sr).lineHeight) || 22);
        var le,
          ge,
          $,
          Ft,
          ue,
          Le,
          Vt,
          T = this,
          He = 0,
          nt = 0,
          ni = ti(a, Xt),
          si = ti(a, xt),
          Xi = ni(),
          qt = si(),
          _r =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            Oe[0] === "pointerdown",
          oi = zr(a),
          pt = a.ownerDocument || yi,
          he = [0, 0, 0],
          Nt = [0, 0, 0],
          gr = 0,
          ai = function () {
            return (gr = Nr());
          },
          Ie = function (M, P) {
            return (
              ((T.event = M) && f && ~f.indexOf(M.target)) ||
              (P && _r && M.pointerType !== "touch") ||
              (X && X(M, P))
            );
          },
          mr = function () {
            T._vx.reset(), T._vy.reset(), ge.pause(), c && c(T);
          },
          li = function () {
            var M = (T.deltaX = ol(he)),
              P = (T.deltaY = ol(Nt)),
              D = Math.abs(M) >= r,
              F = Math.abs(P) >= r;
            O && (D || F) && O(T, M, P, he, Nt),
              D &&
                (S && T.deltaX > 0 && S(T),
                C && T.deltaX < 0 && C(T),
                A && A(T),
                L && T.deltaX < 0 != He < 0 && L(T),
                (He = T.deltaX),
                (he[0] = he[1] = he[2] = 0)),
              F &&
                (k && T.deltaY > 0 && k(T),
                x && T.deltaY < 0 && x(T),
                E && E(T),
                j && T.deltaY < 0 != nt < 0 && j(T),
                (nt = T.deltaY),
                (Nt[0] = Nt[1] = Nt[2] = 0)),
              (Ft || $) && (R && R(T), $ && (_(T), ($ = !1)), (Ft = !1)),
              Le && !(Le = !1) && pr && pr(T),
              ue && (Mt(T), (ue = !1)),
              (le = 0);
          },
          xi = function (M, P, D) {
            (he[D] += M),
              (Nt[D] += P),
              T._vx.update(M),
              T._vy.update(P),
              u ? le || (le = requestAnimationFrame(li)) : li();
          },
          Ui = function (M, P) {
            Ht &&
              !Vt &&
              ((T.axis = Vt = Math.abs(M) > Math.abs(P) ? "x" : "y"),
              (Le = !0)),
              Vt !== "y" && ((he[2] += M), T._vx.update(M, !0)),
              Vt !== "x" && ((Nt[2] += P), T._vy.update(P, !0)),
              u ? le || (le = requestAnimationFrame(li)) : li();
          },
          Q = function (M) {
            if (!Ie(M, 1)) {
              M = Rr(M, h);
              var P = M.clientX,
                D = M.clientY,
                F = P - T.x,
                St = D - T.y,
                B = T.isDragging;
              (T.x = P),
                (T.y = D),
                (B ||
                  Math.abs(T.startX - P) >= n ||
                  Math.abs(T.startY - D) >= n) &&
                  (_ && ($ = !0),
                  B || (T.isDragging = !0),
                  Ui(F, St),
                  B || (m && m(T)));
            }
          },
          ui = (T.onPress = function (G) {
            Ie(G, 1) ||
              ((T.axis = Vt = null),
              ge.pause(),
              (T.isPressed = !0),
              (G = Rr(G)),
              (He = nt = 0),
              (T.startX = T.x = G.clientX),
              (T.startY = T.y = G.clientY),
              T._vx.reset(),
              T._vy.reset(),
              ae(z ? a : pt, Oe[1], Q, h, !0),
              (T.deltaX = T.deltaY = 0),
              v && v(T));
          }),
          fe = function (M) {
            if (!Ie(M, 1)) {
              Qt(z ? a : pt, Oe[1], Q, !0);
              var P =
                  T.isDragging &&
                  (Math.abs(T.x - T.startX) > 3 ||
                    Math.abs(T.y - T.startY) > 3),
                D = Rr(M);
              P ||
                (T._vx.reset(),
                T._vy.reset(),
                h &&
                  Rt &&
                  Yt.delayedCall(0.08, function () {
                    if (Nr() - gr > 300 && !M.defaultPrevented) {
                      if (M.target.click) M.target.click();
                      else if (pt.createEvent) {
                        var F = pt.createEvent("MouseEvents");
                        F.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          de,
                          1,
                          D.screenX,
                          D.screenY,
                          D.clientX,
                          D.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          M.target.dispatchEvent(F);
                      }
                    }
                  })),
                (T.isDragging = T.isGesturing = T.isPressed = !1),
                c && !z && ge.restart(!0),
                y && P && y(T),
                w && w(T, P);
            }
          },
          Me = function (M) {
            return (
              M.touches &&
              M.touches.length > 1 &&
              (T.isGesturing = !0) &&
              tt(M, T.isDragging)
            );
          },
          Re = function () {
            return (T.isGesturing = !1) || b(T);
          },
          Fe = function (M) {
            if (!Ie(M)) {
              var P = ni(),
                D = si();
              xi((P - Xi) * It, (D - qt) * It, 1),
                (Xi = P),
                (qt = D),
                c && ge.restart(!0);
            }
          },
          Ti = function (M) {
            if (!Ie(M)) {
              (M = Rr(M, h)), Mt && (ue = !0);
              var P =
                (M.deltaMode === 1
                  ? l
                  : M.deltaMode === 2
                  ? de.innerHeight
                  : 1) * g;
              xi(M.deltaX * P, M.deltaY * P, 0), c && !z && ge.restart(!0);
            }
          },
          Hi = function (M) {
            if (!Ie(M)) {
              var P = M.clientX,
                D = M.clientY,
                F = P - T.x,
                St = D - T.y;
              (T.x = P), (T.y = D), (Ft = !0), (F || St) && Ui(F, St);
            }
          },
          Ve = function (M) {
            (T.event = M), W(T);
          },
          yr = function (M) {
            (T.event = M), N(T);
          },
          vr = function (M) {
            return Ie(M) || (Rr(M, h) && kt(T));
          };
        (ge = T._dc = Yt.delayedCall(d || 0.25, mr).pause()),
          (T.deltaX = T.deltaY = 0),
          (T._vx = An(0, 50, !0)),
          (T._vy = An(0, 50, !0)),
          (T.scrollX = ni),
          (T.scrollY = si),
          (T.isDragging = T.isGesturing = T.isPressed = !1),
          (T.enable = function (G) {
            return (
              T.isEnabled ||
                (ae(oi ? pt : a, "scroll", ho),
                o.indexOf("scroll") >= 0 &&
                  ae(oi ? pt : a, "scroll", Fe, h, rt),
                o.indexOf("wheel") >= 0 && ae(a, "wheel", Ti, h, rt),
                ((o.indexOf("touch") >= 0 && al) ||
                  o.indexOf("pointer") >= 0) &&
                  (ae(a, Oe[0], ui, h, rt),
                  ae(pt, Oe[2], fe),
                  ae(pt, Oe[3], fe),
                  Rt && ae(a, "click", ai, !1, !0),
                  kt && ae(a, "click", vr),
                  tt && ae(pt, "gesturestart", Me),
                  b && ae(pt, "gestureend", Re),
                  W && ae(a, Ri + "enter", Ve),
                  N && ae(a, Ri + "leave", yr),
                  R && ae(a, Ri + "move", Hi)),
                (T.isEnabled = !0),
                G && G.type && ui(G),
                Lt && Lt(T)),
              T
            );
          }),
          (T.disable = function () {
            T.isEnabled &&
              (nr.filter(function (G) {
                return G !== T && zr(G.target);
              }).length || Qt(oi ? pt : a, "scroll", ho),
              T.isPressed &&
                (T._vx.reset(), T._vy.reset(), Qt(z ? a : pt, Oe[1], Q, !0)),
              Qt(oi ? pt : a, "scroll", Fe, rt),
              Qt(a, "wheel", Ti, rt),
              Qt(a, Oe[0], ui, rt),
              Qt(pt, Oe[2], fe),
              Qt(pt, Oe[3], fe),
              Qt(a, "click", ai, !0),
              Qt(a, "click", vr),
              Qt(pt, "gesturestart", Me),
              Qt(pt, "gestureend", Re),
              Qt(a, Ri + "enter", Ve),
              Qt(a, Ri + "leave", yr),
              Qt(a, Ri + "move", Hi),
              (T.isEnabled = T.isPressed = T.isDragging = !1),
              Ce && Ce(T));
          }),
          (T.kill = function () {
            T.disable();
            var G = nr.indexOf(T);
            G >= 0 && nr.splice(G, 1), Ze === T && (Ze = 0);
          }),
          nr.push(T),
          z && zr(a) && (Ze = T),
          T.enable(p);
      }),
      df(s, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      s
    );
  })();
  _t.version = "3.11.2";
  _t.create = function (s) {
    return new _t(s);
  };
  _t.register = cl;
  _t.getAll = function () {
    return nr.slice();
  };
  _t.getById = function (s) {
    return nr.filter(function (t) {
      return t.vars.id === s;
    })[0];
  };
  ul() && Yt.registerPlugin(_t);
  var I,
    lr,
    q,
    ct,
    ri,
    dt,
    kl,
    Un,
    Hn,
    hr,
    Rn,
    Cn,
    Ut,
    qn,
    vo,
    te,
    dl,
    pl,
    ur,
    El,
    fo,
    Ol,
    Te,
    Pl,
    Dl,
    Ll,
    wi,
    wo,
    Ao,
    co,
    Mn = 1,
    ee = Date.now,
    po = ee(),
    Ae = 0,
    kn = 0,
    _l = function () {
      return (qn = 1);
    },
    gl = function () {
      return (qn = 0);
    },
    Ye = function (t) {
      return t;
    },
    Wr = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    Il = function () {
      return typeof window != "undefined";
    },
    Rl = function () {
      return I || (Il() && (I = window.gsap) && I.registerPlugin && I);
    },
    Bi = function (t) {
      return !!~kl.indexOf(t);
    },
    Fl = function (t) {
      return (
        ei(t, "getBoundingClientRect") ||
        (Bi(t)
          ? function () {
              return (Xn.width = q.innerWidth), (Xn.height = q.innerHeight), Xn;
            }
          : function () {
              return ii(t);
            })
      );
    },
    gf = function (t, e, i) {
      var r = i.d,
        n = i.d2,
        o = i.a;
      return (o = ei(t, "getBoundingClientRect"))
        ? function () {
            return o()[r];
          }
        : function () {
            return (e ? q["inner" + n] : t["client" + n]) || 0;
          };
    },
    mf = function (t, e) {
      return !e || ~Pe.indexOf(t)
        ? Fl(t)
        : function () {
            return Xn;
          };
    },
    bi = function (t, e) {
      var i = e.s,
        r = e.d2,
        n = e.d,
        o = e.a;
      return (i = "scroll" + r) && (o = ei(t, i))
        ? o() - Fl(t)()[n]
        : Bi(t)
        ? (ri[i] || dt[i]) -
          (q["inner" + r] || ri["client" + r] || dt["client" + r])
        : t[i] - t["offset" + r];
    },
    En = function (t, e) {
      for (var i = 0; i < ur.length; i += 3)
        (!e || ~e.indexOf(ur[i + 1])) && t(ur[i], ur[i + 1], ur[i + 2]);
    },
    De = function (t) {
      return typeof t == "string";
    },
    _e = function (t) {
      return typeof t == "function";
    },
    Yr = function (t) {
      return typeof t == "number";
    },
    Fn = function (t) {
      return typeof t == "object";
    };
  var Br = function (t, e, i) {
      return t && t.progress(e ? 0 : 1) && i && t.pause();
    },
    _o = function (t, e) {
      if (t.enabled) {
        var i = e(t);
        i && i.totalTime && (t.callbackAnimation = i);
      }
    },
    or = Math.abs;
  var Nl = "left",
    zl = "top",
    Co = "right",
    Mo = "bottom",
    Ni = "width",
    zi = "height",
    Ur = "Right",
    Hr = "Left",
    Vr = "Top",
    qr = "Bottom",
    Tt = "padding",
    Se = "margin",
    cr = "Width",
    ko = "Height",
    Zt = "px",
    Ue = function (t) {
      return q.getComputedStyle(t);
    },
    yf = function (t) {
      var e = Ue(t).position;
      t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
    },
    ml = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    },
    ii = function (t, e) {
      var i =
          e &&
          Ue(t)[vo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          I.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        r = t.getBoundingClientRect();
      return i && i.progress(0).kill(), r;
    },
    bo = function (t, e) {
      var i = e.d2;
      return t["offset" + i] || t["client" + i] || 0;
    },
    Bl = function (t) {
      var e = [],
        i = t.labels,
        r = t.duration(),
        n;
      for (n in i) e.push(i[n] / r);
      return e;
    },
    vf = function (t) {
      return function (e) {
        return I.utils.snap(Bl(t), e);
      };
    },
    Eo = function (t) {
      var e = I.utils.snap(t),
        i =
          Array.isArray(t) &&
          t.slice(0).sort(function (r, n) {
            return r - n;
          });
      return i
        ? function (r, n, o) {
            o === void 0 && (o = 0.001);
            var a;
            if (!n) return e(r);
            if (n > 0) {
              for (r -= o, a = 0; a < i.length; a++) if (i[a] >= r) return i[a];
              return i[a - 1];
            } else for (a = i.length, r += o; a--; ) if (i[a] <= r) return i[a];
            return i[0];
          }
        : function (r, n, o) {
            o === void 0 && (o = 0.001);
            var a = e(r);
            return !n || Math.abs(a - r) < o || a - r < 0 == n < 0
              ? a
              : e(n < 0 ? r - t : r + t);
          };
    },
    wf = function (t) {
      return function (e, i) {
        return Eo(Bl(t))(e, i.direction);
      };
    },
    On = function (t, e, i, r) {
      return i.split(",").forEach(function (n) {
        return t(e, n, r);
      });
    },
    Dt = function (t, e, i, r, n) {
      return t.addEventListener(e, i, { passive: !r, capture: !!n });
    },
    Et = function (t, e, i, r) {
      return t.removeEventListener(e, i, !!r);
    },
    Pn = function (t, e, i) {
      return i && i.wheelHandler && t(e, "wheel", i);
    },
    yl = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Dn = { toggleActions: "play", anticipatePin: 0 },
    Vn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Nn = function (t, e) {
      if (De(t)) {
        var i = t.indexOf("="),
          r = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
        ~i && (t.indexOf("%") > i && (r *= e / 100), (t = t.substr(0, i - 1))),
          (t =
            r +
            (t in Vn
              ? Vn[t] * e
              : ~t.indexOf("%")
              ? (parseFloat(t) * e) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    Ln = function (t, e, i, r, n, o, a, l) {
      var u = n.startColor,
        h = n.endColor,
        c = n.fontSize,
        d = n.indent,
        f = n.fontWeight,
        g = ct.createElement("div"),
        p = Bi(i) || ei(i, "pinType") === "fixed",
        m = t.indexOf("scroller") !== -1,
        y = p ? dt : i,
        _ = t.indexOf("start") !== -1,
        v = _ ? u : h,
        w =
          "border-color:" +
          v +
          ";font-size:" +
          c +
          ";color:" +
          v +
          ";font-weight:" +
          f +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (w += "position:" + ((m || l) && p ? "fixed;" : "absolute;")),
        (m || l || !p) &&
          (w += (r === xt ? Co : Mo) + ":" + (o + parseFloat(d)) + "px;"),
        a &&
          (w +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (g._isStart = _),
        g.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        (g.style.cssText = w),
        (g.innerText = e || e === 0 ? t + "-" + e : t),
        y.children[0] ? y.insertBefore(g, y.children[0]) : y.appendChild(g),
        (g._offset = g["offset" + r.op.d2]),
        zn(g, 0, r, _),
        g
      );
    },
    zn = function (t, e, i, r) {
      var n = { display: "block" },
        o = i[r ? "os2" : "p2"],
        a = i[r ? "p2" : "os2"];
      (t._isFlipped = r),
        (n[i.a + "Percent"] = r ? -100 : 0),
        (n[i.a] = r ? "1px" : 0),
        (n["border" + o + cr] = 1),
        (n["border" + a + cr] = 0),
        (n[i.p] = e + "px"),
        I.set(t, n);
    },
    V = [],
    xo = {},
    To,
    vl = function () {
      return ee() - Ae > 34 && dr();
    },
    ar = function () {
      (!Te || !Te.isPressed || Te.startX > dt.clientWidth) &&
        (H.cache++,
        To || (To = requestAnimationFrame(dr)),
        Ae || Yi("scrollStart"),
        (Ae = ee()));
    },
    go = function () {
      (Ll = q.innerWidth), (Dl = q.innerHeight);
    },
    Xr = function () {
      H.cache++,
        !Ut &&
          !Ol &&
          !ct.fullscreenElement &&
          !ct.webkitFullscreenElement &&
          (!Pl ||
            Ll !== q.innerWidth ||
            Math.abs(q.innerHeight - Dl) > q.innerHeight * 0.25) &&
          Un.restart(!0);
    },
    Wi = {},
    bf = [],
    Wl = function s() {
      return Et(Y, "scrollEnd", s) || fr(!0);
    },
    Yi = function (t) {
      return (
        (Wi[t] &&
          Wi[t].map(function (e) {
            return e();
          })) ||
        bf
      );
    },
    pe = [],
    Yl = function (t) {
      for (var e = 0; e < pe.length; e += 5)
        (!t || (pe[e + 4] && pe[e + 4].query === t)) &&
          ((pe[e].style.cssText = pe[e + 1]),
          pe[e].getBBox && pe[e].setAttribute("transform", pe[e + 2] || ""),
          (pe[e + 3].uncache = 1));
    },
    Oo = function (t, e) {
      var i;
      for (te = 0; te < V.length; te++)
        (i = V[te]),
          i && (!e || i._ctx === e) && (t ? i.kill(1) : i.revert(!0, !0));
      e && Yl(e), e || Yi("revert");
    },
    Xl = function (t, e) {
      H.cache++,
        (e || !Xe) &&
          H.forEach(function (i) {
            return _e(i) && i.cacheID++ && (i.rec = 0);
          }),
        De(t) && (q.history.scrollRestoration = Ao = t);
    },
    Xe,
    Bn = 0,
    fr = function (t, e) {
      if (Ae && !t) {
        Dt(Y, "scrollEnd", Wl);
        return;
      }
      (Xe = Y.isRefreshing = !0),
        H.forEach(function (r) {
          return _e(r) && r.cacheID++ && (r.rec = r());
        });
      var i = Yi("refreshInit");
      El && Y.sort(),
        e || Oo(),
        H.forEach(function (r) {
          _e(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        V.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        V.forEach(function (r) {
          return (
            r.vars.end === "max" &&
            r.setPositions(
              r.start,
              Math.max(r.start + 1, bi(r.scroller, r._dir))
            )
          );
        }),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        H.forEach(function (r) {
          _e(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        Xl(Ao, 1),
        Un.pause(),
        Bn++,
        dr(2),
        (Xe = Y.isRefreshing = !1),
        Yi("refresh");
    },
    wl = 0,
    Wn = 1,
    Fi,
    dr = function (t) {
      if (!Xe || t === 2) {
        (Y.isUpdating = !0), Fi && Fi.update(0);
        var e = V.length,
          i = ee(),
          r = i - po >= 50,
          n = e && V[0].scroll();
        if (
          ((Wn = wl > n ? -1 : 1),
          (wl = n),
          r &&
            (Ae && !qn && i - Ae > 200 && ((Ae = 0), Yi("scrollEnd")),
            (Rn = po),
            (po = i)),
          Wn < 0)
        ) {
          for (te = e; te-- > 0; ) V[te] && V[te].update(0, r);
          Wn = 1;
        } else for (te = 0; te < e; te++) V[te] && V[te].update(0, r);
        Y.isUpdating = !1;
      }
      To = 0;
    },
    So = [
      Nl,
      zl,
      Mo,
      Co,
      Se + qr,
      Se + Ur,
      Se + Vr,
      Se + Hr,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Yn = So.concat([
      Ni,
      zi,
      "boxSizing",
      "max" + cr,
      "max" + ko,
      "position",
      Se,
      Tt,
      Tt + Vr,
      Tt + Ur,
      Tt + qr,
      Tt + Hr,
    ]),
    xf = function (t, e, i) {
      Gr(i);
      var r = t._gsap;
      if (r.spacerIsNative) Gr(r.spacerState);
      else if (t._gsap.swappedIn) {
        var n = e.parentNode;
        n && (n.insertBefore(t, e), n.removeChild(e));
      }
      t._gsap.swappedIn = !1;
    },
    mo = function (t, e, i, r) {
      if (!t._gsap.swappedIn) {
        for (var n = So.length, o = e.style, a = t.style, l; n--; )
          (l = So[n]), (o[l] = i[l]);
        (o.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (o.display = "inline-block"),
          (a[Mo] = a[Co] = "auto"),
          (o.flexBasis = i.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[Ni] = bo(t, Xt) + Zt),
          (o[zi] = bo(t, xt) + Zt),
          (o[Tt] = a[Se] = a[zl] = a[Nl] = "0"),
          Gr(r),
          (a[Ni] = a["max" + cr] = i[Ni]),
          (a[zi] = a["max" + ko] = i[zi]),
          (a[Tt] = i[Tt]),
          t.parentNode !== e &&
            (t.parentNode.insertBefore(e, t), e.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    Tf = /([A-Z])/g,
    Gr = function (t) {
      if (t) {
        var e = t.t.style,
          i = t.length,
          r = 0,
          n,
          o;
        for ((t.t._gsap || I.core.getCache(t.t)).uncache = 1; r < i; r += 2)
          (o = t[r + 1]),
            (n = t[r]),
            o
              ? (e[n] = o)
              : e[n] && e.removeProperty(n.replace(Tf, "-$1").toLowerCase());
      }
    },
    In = function (t) {
      for (var e = Yn.length, i = t.style, r = [], n = 0; n < e; n++)
        r.push(Yn[n], i[Yn[n]]);
      return (r.t = t), r;
    },
    Sf = function (t, e, i) {
      for (var r = [], n = t.length, o = i ? 8 : 0, a; o < n; o += 2)
        (a = t[o]), r.push(a, a in e ? e[a] : t[o + 1]);
      return (r.t = t.t), r;
    },
    Xn = { left: 0, top: 0 },
    bl = function (t, e, i, r, n, o, a, l, u, h, c, d, f) {
      _e(t) && (t = t(l)),
        De(t) &&
          t.substr(0, 3) === "max" &&
          (t = d + (t.charAt(4) === "=" ? Nn("0" + t.substr(3), i) : 0));
      var g = f ? f.time() : 0,
        p,
        m,
        y;
      if ((f && f.seek(0), Yr(t))) a && zn(a, i, r, !0);
      else {
        _e(e) && (e = e(l));
        var _ = (t || "0").split(" "),
          v,
          w,
          S,
          C;
        (y = Jt(e) || dt),
          (v = ii(y) || {}),
          (!v || (!v.left && !v.top)) &&
            Ue(y).display === "none" &&
            ((C = y.style.display),
            (y.style.display = "block"),
            (v = ii(y)),
            C ? (y.style.display = C) : y.style.removeProperty("display")),
          (w = Nn(_[0], v[r.d])),
          (S = Nn(_[1] || "0", i)),
          (t = v[r.p] - u[r.p] - h + w + n - S),
          a && zn(a, S, r, i - S < 20 || (a._isStart && S > 20)),
          (i -= i - S);
      }
      if (o) {
        var x = t + i,
          k = o._isStart;
        (p = "scroll" + r.d2),
          zn(
            o,
            x,
            r,
            (k && x > 20) ||
              (!k && (c ? Math.max(dt[p], ri[p]) : o.parentNode[p]) <= x + 1)
          ),
          c &&
            ((u = ii(a)),
            c && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Zt));
      }
      return (
        f &&
          y &&
          ((p = ii(y)),
          f.seek(d),
          (m = ii(y)),
          (f._caScrollDist = p[r.p] - m[r.p]),
          (t = (t / f._caScrollDist) * d)),
        f && f.seek(g),
        f ? t : Math.round(t)
      );
    },
    Af = /(webkit|moz|length|cssText|inset)/i,
    xl = function (t, e, i, r) {
      if (t.parentNode !== e) {
        var n = t.style,
          o,
          a;
        if (e === dt) {
          (t._stOrig = n.cssText), (a = Ue(t));
          for (o in a)
            !+o &&
              !Af.test(o) &&
              a[o] &&
              typeof n[o] == "string" &&
              o !== "0" &&
              (n[o] = a[o]);
          (n.top = i), (n.left = r);
        } else n.cssText = t._stOrig;
        (I.core.getCache(t).uncache = 1), e.appendChild(t);
      }
    },
    Tl = function (t, e) {
      var i = ti(t, e),
        r = "_scroll" + e.p2,
        n,
        o,
        a = function l(u, h, c, d, f) {
          var g = l.tween,
            p = h.onComplete,
            m = {};
          return (
            (c = c || i()),
            (f = (d && f) || 0),
            (d = d || u - c),
            g && g.kill(),
            (n = Math.round(c)),
            (h[r] = u),
            (h.modifiers = m),
            (m[r] = function (y) {
              return (
                (y = Math.round(i())),
                y !== n && y !== o && Math.abs(y - n) > 3 && Math.abs(y - o) > 3
                  ? (g.kill(), (l.tween = 0))
                  : (y = c + d * g.ratio + f * g.ratio * g.ratio),
                (o = n),
                (n = Math.round(y))
              );
            }),
            (h.onComplete = function () {
              (l.tween = 0), p && p.call(g);
            }),
            (g = l.tween = I.to(t, h)),
            g
          );
        };
      return (
        (t[r] = i),
        (i.wheelHandler = function () {
          return a.tween && a.tween.kill() && (a.tween = 0);
        }),
        Dt(t, "wheel", i.wheelHandler),
        a
      );
    },
    Y = (function () {
      function s(e, i) {
        lr ||
          s.register(I) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          this.init(e, i);
      }
      var t = s.prototype;
      return (
        (t.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !kn)
          ) {
            this.update = this.refresh = this.kill = Ye;
            return;
          }
          i = ml(De(i) || Yr(i) || i.nodeType ? { trigger: i } : i, Dn);
          var n = i,
            o = n.onUpdate,
            a = n.toggleClass,
            l = n.id,
            u = n.onToggle,
            h = n.onRefresh,
            c = n.scrub,
            d = n.trigger,
            f = n.pin,
            g = n.pinSpacing,
            p = n.invalidateOnRefresh,
            m = n.anticipatePin,
            y = n.onScrubComplete,
            _ = n.onSnapComplete,
            v = n.once,
            w = n.snap,
            S = n.pinReparent,
            C = n.pinSpacer,
            x = n.containerAnimation,
            k = n.fastScrollEnd,
            A = n.preventOverlaps,
            E =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? Xt
                : xt,
            O = !c && c !== 0,
            L = Jt(i.scroller || q),
            j = I.core.getCache(L),
            W = Bi(L),
            N =
              ("pinType" in i
                ? i.pinType
                : ei(L, "pinType") || (W && "fixed")) === "fixed",
            R = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            X = O && i.toggleActions.split(" "),
            z = "markers" in i ? i.markers : Dn.markers,
            tt = W ? 0 : parseFloat(Ue(L)["border" + E.p2 + cr]) || 0,
            b = this,
            Mt =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(b);
              },
            Lt = gf(L, W, E),
            Ce = mf(L, W),
            kt = 0,
            It = 0,
            rt = ti(L, E),
            Rt,
            Ht,
            pr,
            le,
            ge,
            $,
            Ft,
            ue,
            Le,
            Vt,
            T,
            He,
            nt,
            ni,
            si,
            Xi,
            qt,
            _r,
            oi,
            pt,
            he,
            Nt,
            gr,
            ai,
            Ie,
            mr,
            li,
            xi,
            Ui,
            Q,
            ui,
            fe,
            Me,
            Re,
            Fe,
            Ti,
            Hi,
            Ve;
          if (
            (wo(b),
            (b._dir = E),
            (m *= 45),
            (b.scroller = L),
            (b.scroll = x ? x.time.bind(x) : rt),
            (le = rt()),
            (b.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((El = 1), i.refreshPriority === -9999 && (Fi = b)),
            (j.tweenScroll = j.tweenScroll || {
              top: Tl(L, xt),
              left: Tl(L, Xt),
            }),
            (b.tweenTo = Rt = j.tweenScroll[E.p]),
            (b.scrubDuration = function (M) {
              (ui = Yr(M) && M),
                ui
                  ? Q
                    ? Q.duration(M)
                    : (Q = I.to(r, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: ui,
                        paused: !0,
                        onComplete: function () {
                          return y && y(b);
                        },
                      }))
                  : (Q && Q.progress(1).kill(), (Q = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              r._initted ||
                (r.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (b.animation = r.pause()),
              (r.scrollTrigger = b),
              b.scrubDuration(c),
              (xi = 0),
              l || (l = r.vars.id)),
            V.push(b),
            w &&
              ((!Fn(w) || w.push) && (w = { snapTo: w }),
              "scrollBehavior" in dt.style &&
                I.set(W ? [dt, ri] : L, { scrollBehavior: "auto" }),
              (pr = _e(w.snapTo)
                ? w.snapTo
                : w.snapTo === "labels"
                ? vf(r)
                : w.snapTo === "labelsDirectional"
                ? wf(r)
                : w.directional !== !1
                ? function (M, P) {
                    return Eo(w.snapTo)(M, ee() - It < 500 ? 0 : P.direction);
                  }
                : I.utils.snap(w.snapTo)),
              (fe = w.duration || { min: 0.1, max: 2 }),
              (fe = Fn(fe) ? hr(fe.min, fe.max) : hr(fe, fe)),
              (Me = I.delayedCall(w.delay || ui / 2 || 0.1, function () {
                var M = rt(),
                  P = ee() - It < 500,
                  D = Rt.tween;
                if (
                  (P || Math.abs(b.getVelocity()) < 10) &&
                  !D &&
                  !qn &&
                  kt !== M
                ) {
                  var F = (M - $) / nt,
                    St = r && !O ? r.totalProgress() : F,
                    B = P ? 0 : ((St - Ui) / (ee() - Rn)) * 1e3 || 0,
                    mt = I.utils.clamp(-F, 1 - F, (or(B / 2) * B) / 0.185),
                    at = F + (w.inertia === !1 ? 0 : mt),
                    Ne = hr(0, 1, pr(at, b)),
                    it = Math.round($ + Ne * nt),
                    zt = w,
                    ke = zt.onStart,
                    lt = zt.onInterrupt,
                    ut = zt.onComplete;
                  if (M <= Ft && M >= $ && it !== M) {
                    if (D && !D._initted && D.data <= or(it - M)) return;
                    w.inertia === !1 && (mt = Ne - F),
                      Rt(
                        it,
                        {
                          duration: fe(
                            or(
                              (Math.max(or(at - St), or(Ne - St)) * 0.185) /
                                B /
                                0.05 || 0
                            )
                          ),
                          ease: w.ease || "power3",
                          data: or(it - M),
                          onInterrupt: function () {
                            return Me.restart(!0) && lt && lt(b);
                          },
                          onComplete: function () {
                            b.update(),
                              (kt = rt()),
                              (xi = Ui =
                                r && !O ? r.totalProgress() : b.progress),
                              _ && _(b),
                              ut && ut(b);
                          },
                        },
                        M,
                        mt * nt,
                        it - M - mt * nt
                      ),
                      ke && ke(b, Rt.tween);
                  }
                } else b.isActive && kt !== M && Me.restart(!0);
              }).pause())),
            l && (xo[l] = b),
            (d = b.trigger = Jt(d || f)),
            (Ve = d && d._gsap && d._gsap.stRevert),
            Ve && (Ve = Ve(b)),
            (f = f === !0 ? d : Jt(f)),
            De(a) && (a = { targets: d, className: a }),
            f &&
              (g === !1 ||
                g === Se ||
                (g = !g && Ue(f.parentNode).display === "flex" ? !1 : Tt),
              (b.pin = f),
              (Ht = I.core.getCache(f)),
              Ht.spacer
                ? (ni = Ht.pinState)
                : (C &&
                    ((C = Jt(C)),
                    C && !C.nodeType && (C = C.current || C.nativeElement),
                    (Ht.spacerIsNative = !!C),
                    C && (Ht.spacerState = In(C))),
                  (Ht.spacer = qt = C || ct.createElement("div")),
                  qt.classList.add("pin-spacer"),
                  l && qt.classList.add("pin-spacer-" + l),
                  (Ht.pinState = ni = In(f))),
              i.force3D !== !1 && I.set(f, { force3D: !0 }),
              (b.spacer = qt = Ht.spacer),
              (li = Ue(f)),
              (gr = li[g + E.os2]),
              (oi = I.getProperty(f)),
              (pt = I.quickSetter(f, E.a, Zt)),
              mo(f, qt, li),
              (Xi = In(f))),
            z)
          ) {
            (He = Fn(z) ? ml(z, yl) : yl),
              (Vt = Ln("scroller-start", l, L, E, He, 0)),
              (T = Ln("scroller-end", l, L, E, He, 0, Vt)),
              (_r = Vt["offset" + E.op.d2]);
            var yr = Jt(ei(L, "content") || L);
            (ue = this.markerStart = Ln("start", l, yr, E, He, _r, 0, x)),
              (Le = this.markerEnd = Ln("end", l, yr, E, He, _r, 0, x)),
              x && (Hi = I.quickSetter([ue, Le], E.a, Zt)),
              !N &&
                !(Pe.length && ei(L, "fixedMarkers") === !0) &&
                (yf(W ? dt : L),
                I.set([Vt, T], { force3D: !0 }),
                (Ie = I.quickSetter(Vt, E.a, Zt)),
                (mr = I.quickSetter(T, E.a, Zt)));
          }
          if (x) {
            var vr = x.vars.onUpdate,
              G = x.vars.onUpdateParams;
            x.eventCallback("onUpdate", function () {
              b.update(0, 0, 1), vr && vr.apply(G || []);
            });
          }
          (b.previous = function () {
            return V[V.indexOf(b) - 1];
          }),
            (b.next = function () {
              return V[V.indexOf(b) + 1];
            }),
            (b.revert = function (M, P) {
              if (!P) return b.kill(!0);
              var D = M !== !1 || !b.enabled,
                F = Ut;
              D !== b.isReverted &&
                (D &&
                  ((Fe = Math.max(rt(), b.scroll.rec || 0)),
                  (Re = b.progress),
                  (Ti = r && r.progress())),
                ue &&
                  [ue, Le, Vt, T].forEach(function (St) {
                    return (St.style.display = D ? "none" : "block");
                  }),
                D && (Ut = 1),
                b.update(D),
                (Ut = F),
                f &&
                  (D
                    ? xf(f, qt, ni)
                    : (!S || !b.isActive) && mo(f, qt, Ue(f), ai)),
                (b.isReverted = D));
            }),
            (b.refresh = function (M, P) {
              if (!((Ut || !b.enabled) && !P)) {
                if (f && M && Ae) {
                  Dt(s, "scrollEnd", Wl);
                  return;
                }
                !Xe && Mt && Mt(b),
                  (Ut = 1),
                  (It = ee()),
                  Rt.tween && (Rt.tween.kill(), (Rt.tween = 0)),
                  Q && Q.pause(),
                  p && r && r.revert({ kill: !1 }).invalidate(),
                  b.isReverted || b.revert(!0, !0);
                for (
                  var D = Lt(),
                    F = Ce(),
                    St = x ? x.duration() : bi(L, E),
                    B = 0,
                    mt = 0,
                    at = i.end,
                    Ne = i.endTrigger || d,
                    it =
                      i.start ||
                      (i.start === 0 || !d ? 0 : f ? "0 0" : "0 100%"),
                    zt = (b.pinnedContainer =
                      i.pinnedContainer && Jt(i.pinnedContainer)),
                    ke = (d && Math.max(0, V.indexOf(b))) || 0,
                    lt = ke,
                    ut,
                    yt,
                    Vi,
                    Si,
                    At,
                    vt,
                    qe,
                    us,
                    Ro,
                    wr;
                  lt--;

                )
                  (vt = V[lt]),
                    vt.end || vt.refresh(0, 1) || (Ut = 1),
                    (qe = vt.pin),
                    qe &&
                      (qe === d || qe === f) &&
                      !vt.isReverted &&
                      (wr || (wr = []), wr.unshift(vt), vt.revert(!0, !0)),
                    vt !== V[lt] && (ke--, lt--);
                for (
                  _e(it) && (it = it(b)),
                    $ =
                      bl(it, d, D, E, rt(), ue, Vt, b, F, tt, N, St, x) ||
                      (f ? -0.001 : 0),
                    _e(at) && (at = at(b)),
                    De(at) &&
                      !at.indexOf("+=") &&
                      (~at.indexOf(" ")
                        ? (at = (De(it) ? it.split(" ")[0] : "") + at)
                        : ((B = Nn(at.substr(2), D)),
                          (at = De(it) ? it : $ + B),
                          (Ne = d))),
                    Ft =
                      Math.max(
                        $,
                        bl(
                          at || (Ne ? "100% 0" : St),
                          Ne,
                          D,
                          E,
                          rt() + B,
                          Le,
                          T,
                          b,
                          F,
                          tt,
                          N,
                          St,
                          x
                        )
                      ) || -0.001,
                    nt = Ft - $ || (($ -= 0.01) && 0.001),
                    B = 0,
                    lt = ke;
                  lt--;

                )
                  (vt = V[lt]),
                    (qe = vt.pin),
                    qe &&
                      vt.start - vt._pinPush < $ &&
                      !x &&
                      vt.end > 0 &&
                      ((ut = vt.end - vt.start),
                      (qe === d || qe === zt) &&
                        !Yr(it) &&
                        (B += ut * (1 - vt.progress)),
                      qe === f && (mt += ut));
                if (
                  (($ += B),
                  (Ft += B),
                  (b._pinPush = mt),
                  ue &&
                    B &&
                    ((ut = {}),
                    (ut[E.a] = "+=" + B),
                    zt && (ut[E.p] = "-=" + rt()),
                    I.set([ue, Le], ut)),
                  f)
                )
                  (ut = Ue(f)),
                    (Si = E === xt),
                    (Vi = rt()),
                    (he = parseFloat(oi(E.a)) + mt),
                    !St &&
                      Ft > 1 &&
                      ((W ? dt : L).style["overflow-" + E.a] = "scroll"),
                    mo(f, qt, ut),
                    (Xi = In(f)),
                    (yt = ii(f, !0)),
                    (us = N && ti(L, Si ? Xt : xt)()),
                    g &&
                      ((ai = [g + E.os2, nt + mt + Zt]),
                      (ai.t = qt),
                      (lt = g === Tt ? bo(f, E) + nt + mt : 0),
                      lt && ai.push(E.d, lt + Zt),
                      Gr(ai),
                      N && rt(Fe)),
                    N &&
                      ((At = {
                        top: yt.top + (Si ? Vi - $ : us) + Zt,
                        left: yt.left + (Si ? us : Vi - $) + Zt,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (At[Ni] = At["max" + cr] = Math.ceil(yt.width) + Zt),
                      (At[zi] = At["max" + ko] = Math.ceil(yt.height) + Zt),
                      (At[Se] =
                        At[Se + Vr] =
                        At[Se + Ur] =
                        At[Se + qr] =
                        At[Se + Hr] =
                          "0"),
                      (At[Tt] = ut[Tt]),
                      (At[Tt + Vr] = ut[Tt + Vr]),
                      (At[Tt + Ur] = ut[Tt + Ur]),
                      (At[Tt + qr] = ut[Tt + qr]),
                      (At[Tt + Hr] = ut[Tt + Hr]),
                      (si = Sf(ni, At, S)),
                      Xe && rt(0)),
                    r
                      ? ((Ro = r._initted),
                        fo(1),
                        r.render(r.duration(), !0, !0),
                        (Nt = oi(E.a) - he + nt + mt),
                        nt !== Nt && N && si.splice(si.length - 2, 2),
                        r.render(0, !0, !0),
                        Ro || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        fo(0))
                      : (Nt = nt);
                else if (d && rt() && !x)
                  for (yt = d.parentNode; yt && yt !== dt; )
                    yt._pinOffset &&
                      (($ -= yt._pinOffset), (Ft -= yt._pinOffset)),
                      (yt = yt.parentNode);
                wr &&
                  wr.forEach(function (ou) {
                    return ou.revert(!1, !0);
                  }),
                  (b.start = $),
                  (b.end = Ft),
                  (le = ge = Xe ? Fe : rt()),
                  !x && !Xe && (le < Fe && rt(Fe), (b.scroll.rec = 0)),
                  b.revert(!1, !0),
                  Me &&
                    ((kt = -1), b.isActive && rt($ + nt * Re), Me.restart(!0)),
                  (Ut = 0),
                  r &&
                    O &&
                    (r._initted || Ti) &&
                    r.progress() !== Ti &&
                    r.progress(Ti, !0).render(r.time(), !0, !0),
                  (Re !== b.progress || x) &&
                    (r && !O && r.totalProgress(Re, !0),
                    (b.progress = (le - $) / nt === Re ? 0 : Re)),
                  f && g && (qt._pinOffset = Math.round(b.progress * Nt)),
                  h && h(b);
              }
            }),
            (b.getVelocity = function () {
              return ((rt() - ge) / (ee() - Rn)) * 1e3 || 0;
            }),
            (b.endAnimation = function () {
              Br(b.callbackAnimation),
                r &&
                  (Q
                    ? Q.progress(1)
                    : r.paused()
                    ? O || Br(r, b.direction < 0, 1)
                    : Br(r, r.reversed()));
            }),
            (b.labelToScroll = function (M) {
              return (
                (r &&
                  r.labels &&
                  ($ || b.refresh() || $) +
                    (r.labels[M] / r.duration()) * nt) ||
                0
              );
            }),
            (b.getTrailing = function (M) {
              var P = V.indexOf(b),
                D = b.direction > 0 ? V.slice(0, P).reverse() : V.slice(P + 1);
              return (
                De(M)
                  ? D.filter(function (F) {
                      return F.vars.preventOverlaps === M;
                    })
                  : D
              ).filter(function (F) {
                return b.direction > 0 ? F.end <= $ : F.start >= Ft;
              });
            }),
            (b.update = function (M, P, D) {
              if (!(x && !D && !M)) {
                var F = Xe ? Fe : b.scroll(),
                  St = M ? 0 : (F - $) / nt,
                  B = St < 0 ? 0 : St > 1 ? 1 : St || 0,
                  mt = b.progress,
                  at,
                  Ne,
                  it,
                  zt,
                  ke,
                  lt,
                  ut,
                  yt;
                if (
                  (P &&
                    ((ge = le),
                    (le = x ? rt() : F),
                    w && ((Ui = xi), (xi = r && !O ? r.totalProgress() : B))),
                  m &&
                    !B &&
                    f &&
                    !Ut &&
                    !Mn &&
                    Ae &&
                    $ < F + ((F - ge) / (ee() - Rn)) * m &&
                    (B = 1e-4),
                  B !== mt && b.enabled)
                ) {
                  if (
                    ((at = b.isActive = !!B && B < 1),
                    (Ne = !!mt && mt < 1),
                    (lt = at !== Ne),
                    (ke = lt || !!B != !!mt),
                    (b.direction = B > mt ? 1 : -1),
                    (b.progress = B),
                    ke &&
                      !Ut &&
                      ((it = B && !mt ? 0 : B === 1 ? 1 : mt === 1 ? 2 : 3),
                      O &&
                        ((zt =
                          (!lt && X[it + 1] !== "none" && X[it + 1]) || X[it]),
                        (yt =
                          r &&
                          (zt === "complete" || zt === "reset" || zt in r)))),
                    A &&
                      (lt || yt) &&
                      (yt || c || !r) &&
                      (_e(A)
                        ? A(b)
                        : b.getTrailing(A).forEach(function (vt) {
                            return vt.endAnimation();
                          })),
                    O ||
                      (Q && !Ut && !Mn
                        ? ((x || (Fi && Fi !== b)) &&
                            Q.render(Q._dp._time - Q._start),
                          Q.resetTo
                            ? Q.resetTo("totalProgress", B, r._tTime / r._tDur)
                            : ((Q.vars.totalProgress = B),
                              Q.invalidate().restart()))
                        : r && r.totalProgress(B, !!Ut)),
                    f)
                  ) {
                    if ((M && g && (qt.style[g + E.os2] = gr), !N))
                      pt(Wr(he + Nt * B));
                    else if (ke) {
                      if (
                        ((ut = !M && B > mt && Ft + 1 > F && F + 1 >= bi(L, E)),
                        S)
                      )
                        if (!M && (at || ut)) {
                          var Vi = ii(f, !0),
                            Si = F - $;
                          xl(
                            f,
                            dt,
                            Vi.top + (E === xt ? Si : 0) + Zt,
                            Vi.left + (E === xt ? 0 : Si) + Zt
                          );
                        } else xl(f, qt);
                      Gr(at || ut ? si : Xi),
                        (Nt !== nt && B < 1 && at) ||
                          pt(he + (B === 1 && !ut ? Nt : 0));
                    }
                  }
                  w && !Rt.tween && !Ut && !Mn && Me.restart(!0),
                    a &&
                      (lt || (v && B && (B < 1 || !co))) &&
                      Hn(a.targets).forEach(function (vt) {
                        return vt.classList[at || v ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !O && !M && o(b),
                    ke && !Ut
                      ? (O &&
                          (yt &&
                            (zt === "complete"
                              ? r.pause().totalProgress(1)
                              : zt === "reset"
                              ? r.restart(!0).pause()
                              : zt === "restart"
                              ? r.restart(!0)
                              : r[zt]()),
                          o && o(b)),
                        (lt || !co) &&
                          (u && lt && _o(b, u),
                          R[it] && _o(b, R[it]),
                          v && (B === 1 ? b.kill(!1, 1) : (R[it] = 0)),
                          lt ||
                            ((it = B === 1 ? 1 : 3), R[it] && _o(b, R[it]))),
                        k &&
                          !at &&
                          Math.abs(b.getVelocity()) > (Yr(k) ? k : 2500) &&
                          (Br(b.callbackAnimation),
                          Q
                            ? Q.progress(1)
                            : Br(r, zt === "reverse" ? 1 : !B, 1)))
                      : O && o && !Ut && o(b);
                }
                if (mr) {
                  var At = x ? (F / x.duration()) * (x._caScrollDist || 0) : F;
                  Ie(At + (Vt._isFlipped ? 1 : 0)), mr(At);
                }
                Hi && Hi((-F / x.duration()) * (x._caScrollDist || 0));
              }
            }),
            (b.enable = function (M, P) {
              b.enabled ||
                ((b.enabled = !0),
                Dt(L, "resize", Xr),
                Dt(W ? ct : L, "scroll", ar),
                Mt && Dt(s, "refreshInit", Mt),
                M !== !1 && ((b.progress = Re = 0), (le = ge = kt = rt())),
                P !== !1 && b.refresh());
            }),
            (b.getTween = function (M) {
              return M && Rt ? Rt.tween : Q;
            }),
            (b.setPositions = function (M, P) {
              f && ((he += M - $), (Nt += P - M - nt)),
                (b.start = $ = M),
                (b.end = Ft = P),
                (nt = P - M),
                b.update();
            }),
            (b.disable = function (M, P) {
              if (
                b.enabled &&
                (M !== !1 && b.revert(!0, !0),
                (b.enabled = b.isActive = !1),
                P || (Q && Q.pause()),
                (Fe = 0),
                Ht && (Ht.uncache = 1),
                Mt && Et(s, "refreshInit", Mt),
                Me &&
                  (Me.pause(), Rt.tween && Rt.tween.kill() && (Rt.tween = 0)),
                !W)
              ) {
                for (var D = V.length; D--; )
                  if (V[D].scroller === L && V[D] !== b) return;
                Et(L, "resize", Xr), Et(L, "scroll", ar);
              }
            }),
            (b.kill = function (M, P) {
              b.disable(M, P), Q && !P && Q.kill(), l && delete xo[l];
              var D = V.indexOf(b);
              D >= 0 && V.splice(D, 1),
                D === te && Wn > 0 && te--,
                (D = 0),
                V.forEach(function (F) {
                  return F.scroller === b.scroller && (D = 1);
                }),
                D || Xe || (b.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  M && r.revert({ kill: !1 }),
                  P || r.kill()),
                ue &&
                  [ue, Le, Vt, T].forEach(function (F) {
                    return F.parentNode && F.parentNode.removeChild(F);
                  }),
                Fi === b && (Fi = 0),
                f &&
                  (Ht && (Ht.uncache = 1),
                  (D = 0),
                  V.forEach(function (F) {
                    return F.pin === f && D++;
                  }),
                  D || (Ht.spacer = 0)),
                i.onKill && i.onKill(b);
            }),
            b.enable(!1, !1),
            Ve && Ve(b),
            !r || !r.add || nt
              ? b.refresh()
              : I.delayedCall(0.01, function () {
                  return $ || Ft || b.refresh();
                }) &&
                (nt = 0.01) &&
                ($ = Ft = 0);
        }),
        (s.register = function (i) {
          return (
            lr ||
              ((I = i || Rl()),
              Il() && window.document && s.enable(),
              (lr = kn)),
            lr
          );
        }),
        (s.defaults = function (i) {
          if (i) for (var r in i) Dn[r] = i[r];
          return Dn;
        }),
        (s.disable = function (i, r) {
          (kn = 0),
            V.forEach(function (o) {
              return o[r ? "kill" : "disable"](i);
            }),
            Et(q, "wheel", ar),
            Et(ct, "scroll", ar),
            clearInterval(Cn),
            Et(ct, "touchcancel", Ye),
            Et(dt, "touchstart", Ye),
            On(Et, ct, "pointerdown,touchstart,mousedown", _l),
            On(Et, ct, "pointerup,touchend,mouseup", gl),
            Un.kill(),
            En(Et);
          for (var n = 0; n < H.length; n += 3)
            Pn(Et, H[n], H[n + 1]), Pn(Et, H[n], H[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((q = window),
            (ct = document),
            (ri = ct.documentElement),
            (dt = ct.body),
            I &&
              ((Hn = I.utils.toArray),
              (hr = I.utils.clamp),
              (wo = I.core.context || Ye),
              (fo = I.core.suppressOverwrites || Ye),
              (Ao = q.history.scrollRestoration || "auto"),
              I.core.globals("ScrollTrigger", s),
              dt))
          ) {
            (kn = 1),
              _t.register(I),
              (s.isTouch = _t.isTouch),
              (wi =
                _t.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              Dt(q, "wheel", ar),
              (kl = [q, ct, ri, dt]),
              I.matchMedia
                ? ((s.matchMedia = function (l) {
                    var u = I.matchMedia(),
                      h;
                    for (h in l) u.add(h, l[h]);
                    return u;
                  }),
                  I.addEventListener("matchMediaInit", function () {
                    return Oo();
                  }),
                  I.addEventListener("matchMediaRevert", function () {
                    return Yl();
                  }),
                  I.addEventListener("matchMedia", function () {
                    fr(0, 1), Yi("matchMedia");
                  }),
                  I.matchMedia("(orientation: portrait)", function () {
                    return go(), go;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              go(),
              Dt(ct, "scroll", ar);
            var i = dt.style,
              r = i.borderTopStyle,
              n = I.core.Animation.prototype,
              o,
              a;
            for (
              n.revert ||
                Object.defineProperty(n, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                o = ii(dt),
                xt.m = Math.round(o.top + xt.sc()) || 0,
                Xt.m = Math.round(o.left + Xt.sc()) || 0,
                r
                  ? (i.borderTopStyle = r)
                  : i.removeProperty("border-top-style"),
                Cn = setInterval(vl, 250),
                I.delayedCall(0.5, function () {
                  return (Mn = 0);
                }),
                Dt(ct, "touchcancel", Ye),
                Dt(dt, "touchstart", Ye),
                On(Dt, ct, "pointerdown,touchstart,mousedown", _l),
                On(Dt, ct, "pointerup,touchend,mouseup", gl),
                vo = I.utils.checkPrefix("transform"),
                Yn.push(vo),
                lr = ee(),
                Un = I.delayedCall(0.2, fr).pause(),
                ur = [
                  ct,
                  "visibilitychange",
                  function () {
                    var l = q.innerWidth,
                      u = q.innerHeight;
                    ct.hidden
                      ? ((dl = l), (pl = u))
                      : (dl !== l || pl !== u) && Xr();
                  },
                  ct,
                  "DOMContentLoaded",
                  fr,
                  q,
                  "load",
                  fr,
                  q,
                  "resize",
                  Xr,
                ],
                En(Dt),
                V.forEach(function (l) {
                  return l.enable(0, 1);
                }),
                a = 0;
              a < H.length;
              a += 3
            )
              Pn(Et, H[a], H[a + 1]), Pn(Et, H[a], H[a + 2]);
          }
        }),
        (s.config = function (i) {
          "limitCallbacks" in i && (co = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(Cn)) || ((Cn = r) && setInterval(vl, r)),
            "ignoreMobileResize" in i &&
              (Pl = s.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (En(Et) || En(Dt, i.autoRefreshEvents || "none"),
              (Ol = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (i, r) {
          var n = Jt(i),
            o = H.indexOf(n),
            a = Bi(n);
          ~o && H.splice(o, a ? 6 : 2),
            r && (a ? Pe.unshift(q, r, dt, r, ri, r) : Pe.unshift(n, r));
        }),
        (s.clearMatchMedia = function (i) {
          V.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (s.isInViewport = function (i, r, n) {
          var o = (De(i) ? Jt(i) : i).getBoundingClientRect(),
            a = o[n ? Ni : zi] * r || 0;
          return n
            ? o.right - a > 0 && o.left + a < q.innerWidth
            : o.bottom - a > 0 && o.top + a < q.innerHeight;
        }),
        (s.positionInViewport = function (i, r, n) {
          De(i) && (i = Jt(i));
          var o = i.getBoundingClientRect(),
            a = o[n ? Ni : zi],
            l =
              r == null
                ? a / 2
                : r in Vn
                ? Vn[r] * a
                : ~r.indexOf("%")
                ? (parseFloat(r) * a) / 100
                : parseFloat(r) || 0;
          return n ? (o.left + l) / q.innerWidth : (o.top + l) / q.innerHeight;
        }),
        (s.killAll = function (i) {
          if (
            (V.forEach(function (n) {
              return n.vars.id !== "ScrollSmoother" && n.kill();
            }),
            i !== !0)
          ) {
            var r = Wi.killAll || [];
            (Wi = {}),
              r.forEach(function (n) {
                return n();
              });
          }
        }),
        s
      );
    })();
  Y.version = "3.11.2";
  Y.saveStyles = function (s) {
    return s
      ? Hn(s).forEach(function (t) {
          if (t && t.style) {
            var e = pe.indexOf(t);
            e >= 0 && pe.splice(e, 5),
              pe.push(
                t,
                t.style.cssText,
                t.getBBox && t.getAttribute("transform"),
                I.core.getCache(t),
                wo()
              );
          }
        })
      : pe;
  };
  Y.revert = function (s, t) {
    return Oo(!s, t);
  };
  Y.create = function (s, t) {
    return new Y(s, t);
  };
  Y.refresh = function (s) {
    return s ? Xr() : (lr || Y.register()) && fr(!0);
  };
  Y.update = dr;
  Y.clearScrollMemory = Xl;
  Y.maxScroll = function (s, t) {
    return bi(s, t ? Xt : xt);
  };
  Y.getScrollFunc = function (s, t) {
    return ti(Jt(s), t ? Xt : xt);
  };
  Y.getById = function (s) {
    return xo[s];
  };
  Y.getAll = function () {
    return V.filter(function (s) {
      return s.vars.id !== "ScrollSmoother";
    });
  };
  Y.isScrolling = function () {
    return !!Ae;
  };
  Y.snapDirectional = Eo;
  Y.addEventListener = function (s, t) {
    var e = Wi[s] || (Wi[s] = []);
    ~e.indexOf(t) || e.push(t);
  };
  Y.removeEventListener = function (s, t) {
    var e = Wi[s],
      i = e && e.indexOf(t);
    i >= 0 && e.splice(i, 1);
  };
  Y.batch = function (s, t) {
    var e = [],
      i = {},
      r = t.interval || 0.016,
      n = t.batchMax || 1e9,
      o = function (u, h) {
        var c = [],
          d = [],
          f = I.delayedCall(r, function () {
            h(c, d), (c = []), (d = []);
          }).pause();
        return function (g) {
          c.length || f.restart(!0),
            c.push(g.trigger),
            d.push(g),
            n <= c.length && f.progress(1);
        };
      },
      a;
    for (a in t)
      i[a] =
        a.substr(0, 2) === "on" && _e(t[a]) && a !== "onRefreshInit"
          ? o(a, t[a])
          : t[a];
    return (
      _e(n) &&
        ((n = n()),
        Dt(Y, "refresh", function () {
          return (n = t.batchMax());
        })),
      Hn(s).forEach(function (l) {
        var u = {};
        for (a in i) u[a] = i[a];
        (u.trigger = l), e.push(Y.create(u));
      }),
      e
    );
  };
  var Sl = function (t, e, i, r) {
      return (
        e > r ? t(r) : e < 0 && t(0),
        i > r ? (r - e) / (i - e) : i < 0 ? e / (e - i) : 1
      );
    },
    yo = function s(t, e) {
      e === !0
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            e === !0
              ? "auto"
              : e
              ? "pan-" + e + (_t.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === ri && s(dt, e);
    },
    Al = { auto: 1, scroll: 1 },
    Cf = function (t) {
      var e = t.event,
        i = t.target,
        r = t.axis,
        n = (e.changedTouches ? e.changedTouches[0] : e).target,
        o = n._gsap || I.core.getCache(n),
        a = ee(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (; n && n.scrollHeight <= n.clientHeight; ) n = n.parentNode;
        (o._isScroll =
          n &&
          !Bi(n) &&
          n !== i &&
          (Al[(l = Ue(n)).overflowY] || Al[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || r === "x") && (e.stopPropagation(), (e._gsapAllow = !0));
    },
    Ul = function (t, e, i, r) {
      return _t.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: (r = r && Cf),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && Dt(ct, _t.eventTypes[0], Ml, !1, !0);
        },
        onDisable: function () {
          return Et(ct, _t.eventTypes[0], Ml, !0);
        },
      });
    },
    Mf = /(input|label|select|textarea)/i,
    Cl,
    Ml = function (t) {
      var e = Mf.test(t.target.tagName);
      (e || Cl) && ((t._gsapAllow = !0), (Cl = e));
    },
    kf = function (t) {
      Fn(t) || (t = {}),
        (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
        t.type || (t.type = "wheel,touch"),
        (t.debounce = !!t.debounce),
        (t.id = t.id || "normalizer");
      var e = t,
        i = e.normalizeScrollX,
        r = e.momentum,
        n = e.allowNestedScroll,
        o,
        a,
        l = Jt(t.target) || ri,
        u = I.core.globals().ScrollSmoother,
        h = u && u.get(),
        c =
          wi &&
          ((t.content && Jt(t.content)) ||
            (h && t.content !== !1 && !h.smooth() && h.content())),
        d = ti(l, xt),
        f = ti(l, Xt),
        g = 1,
        p =
          (_t.isTouch && q.visualViewport
            ? q.visualViewport.scale * q.visualViewport.width
            : q.outerWidth) / q.innerWidth,
        m = 0,
        y = _e(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        _,
        v,
        w = Ul(l, t.type, !0, n),
        S = function () {
          return (v = !1);
        },
        C = Ye,
        x = Ye,
        k = function () {
          (a = bi(l, xt)),
            (x = hr(wi ? 1 : 0, a)),
            i && (C = hr(0, bi(l, Xt))),
            (_ = Bn);
        },
        A = function () {
          (c._gsap.y = Wr(parseFloat(c._gsap.y) + d.offset) + "px"),
            (c.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(c._gsap.y) +
              ", 0, 1)"),
            (d.offset = d.cacheID = 0);
        },
        E = function () {
          if (v) {
            requestAnimationFrame(S);
            var X = Wr(o.deltaY / 2),
              z = x(d.v - X);
            if (c && z !== d.v + d.offset) {
              d.offset = z - d.v;
              var tt = Wr((parseFloat(c && c._gsap.y) || 0) - d.offset);
              (c.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                tt +
                ", 0, 1)"),
                (c._gsap.y = tt + "px"),
                (d.cacheID = H.cache),
                dr();
            }
            return !0;
          }
          d.offset && A(), (v = !0);
        },
        O,
        L,
        j,
        W,
        N = function () {
          k(),
            O.isActive() &&
              O.vars.scrollY > a &&
              (d() > a ? O.progress(1) && d(a) : O.resetTo("scrollY", a));
        };
      return (
        c && I.set(c, { y: "+=0" }),
        (t.ignoreCheck = function (R) {
          return (
            (wi && R.type === "touchmove" && E(R)) ||
            (g > 1.05 && R.type !== "touchstart") ||
            o.isGesturing ||
            (R.touches && R.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          var R = g;
          (g = Wr(((q.visualViewport && q.visualViewport.scale) || 1) / p)),
            O.pause(),
            R !== g && yo(l, g > 1.01 ? !0 : i ? !1 : "x"),
            (L = f()),
            (j = d()),
            k(),
            (_ = Bn);
        }),
        (t.onRelease = t.onGestureStart =
          function (R, X) {
            if ((d.offset && A(), !X)) W.restart(!0);
            else {
              H.cache++;
              var z = y(),
                tt,
                b;
              i &&
                ((tt = f()),
                (b = tt + (z * 0.05 * -R.velocityX) / 0.227),
                (z *= Sl(f, tt, b, bi(l, Xt))),
                (O.vars.scrollX = C(b))),
                (tt = d()),
                (b = tt + (z * 0.05 * -R.velocityY) / 0.227),
                (z *= Sl(d, tt, b, bi(l, xt))),
                (O.vars.scrollY = x(b)),
                O.invalidate().duration(z).play(0.01),
                ((wi && O.vars.scrollY >= a) || tt >= a - 1) &&
                  I.to({}, { onUpdate: N, duration: z });
            }
          }),
        (t.onWheel = function () {
          O._ts && O.pause(), ee() - m > 1e3 && ((_ = 0), (m = ee()));
        }),
        (t.onChange = function (R, X, z, tt, b) {
          if (
            (Bn !== _ && k(),
            X &&
              i &&
              f(C(tt[2] === X ? L + (R.startX - R.x) : f() + X - tt[1])),
            z)
          ) {
            d.offset && A();
            var Mt = b[2] === z,
              Lt = Mt ? j + R.startY - R.y : d() + z - b[1],
              Ce = x(Lt);
            Mt && Lt !== Ce && (j += Ce - Lt), d(Ce);
          }
          (z || X) && dr();
        }),
        (t.onEnable = function () {
          yo(l, i ? !1 : "x"),
            Y.addEventListener("refresh", N),
            Dt(q, "resize", N),
            d.smooth &&
              ((d.target.style.scrollBehavior = "auto"),
              (d.smooth = f.smooth = !1)),
            w.enable();
        }),
        (t.onDisable = function () {
          yo(l, !0),
            Et(q, "resize", N),
            Y.removeEventListener("refresh", N),
            w.kill();
        }),
        (t.lockAxis = t.lockAxis !== !1),
        (o = new _t(t)),
        (o.iOS = wi),
        wi && !d() && d(1),
        wi && I.ticker.add(Ye),
        (W = o._dc),
        (O = I.to(o, {
          ease: "power4",
          paused: !0,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          onComplete: W.vars.onComplete,
        })),
        o
      );
    };
  Y.sort = function (s) {
    return V.sort(
      s ||
        function (t, e) {
          return (
            (t.vars.refreshPriority || 0) * -1e6 +
            t.start -
            (e.start + (e.vars.refreshPriority || 0) * -1e6)
          );
        }
    );
  };
  Y.observe = function (s) {
    return new _t(s);
  };
  Y.normalizeScroll = function (s) {
    if (typeof s == "undefined") return Te;
    if (s === !0 && Te) return Te.enable();
    if (s === !1) return Te && Te.kill();
    var t = s instanceof _t ? s : kf(s);
    return (
      Te && Te.target === t.target && Te.kill(), Bi(t.target) && (Te = t), t
    );
  };
  Y.core = {
    _getVelocityProp: An,
    _inputObserver: Ul,
    _scrollers: H,
    _proxies: Pe,
    bridge: {
      ss: function () {
        Ae || Yi("scrollStart"), (Ae = ee());
      },
      ref: function () {
        return Ut;
      },
    },
  };
  Rl() && I.registerPlugin(Y);
  var Hl = [];
  function Ef(s, t = {}) {
    return new Promise((e, i) => {
      let r = new Image();
      t.crossOrigin && (r.crossOrigin = t.crossOrigin);
      let n = () => {
        e(Gt({ element: r }, Of(r)));
      };
      r.decode
        ? ((r.src = s),
          r
            .decode()
            .then(n)
            .catch((o) => {
              i(o);
            }))
        : ((r.onload = n),
          (r.onerror = (o) => {
            i(o);
          }),
          (r.src = s));
    });
  }
  function Of(s) {
    return {
      url: s.src,
      width: s.naturalWidth,
      height: s.naturalHeight,
      ratio: s.naturalWidth / s.naturalHeight,
    };
  }
  function Vl(s, t, e) {
    return Bo(this, null, function* () {
      let i = t || s.dataset.src,
        r = Hl.find((n) => n.url === i);
      if (!r) {
        if (((r = yield Ef(i)), !r.url)) return;
        Hl.push(r);
      }
      s.src !== i &&
        (s.tagName === "IMG"
          ? (s.src = r.url)
          : (s.style.backgroundImage = `url(${r.url})`),
        requestAnimationFrame(() => {
          let n = s.closest(".c-lazy");
          n &&
            (n.classList.add("-lazy-loaded"), (n.style.backgroundImage = "")),
            s.classList.add("-lazy-loaded"),
            e == null || e();
        }));
    });
  }
  K.registerPlugin(Y);
  var Gn = "is-inview",
    jn = class extends J {
      constructor(s) {
        super(s),
          (this.$scrollItems = this.$("item")),
          (this.scrollToItems = this.$("to")),
          (this.$wrapper =
            typeof this.getData("wrapper") == "string"
              ? document.querySelector(this.getData("wrapper"))
              : window),
          (this.windowWidth = window.innerWidth),
          (this.events = { click: { to: "scrollTo" } });
      }
      ready() {
        (this.id = this.el.getAttribute("data-module-scroll")),
          (this.lenis = new rn({
            wrapper: this.$wrapper,
            content: this.el,
            direction: "vertical",
            smooth: !0,
            smoothTouch: !1,
            duration: 1.2,
            mouseMultiplier: 0.45,
            touchMultiplier: 2,
          })),
          this.lenis.on(
            "scroll",
            ({
              scroll: s,
              limit: t,
              velocity: e,
              direction: i,
              progress: r,
            }) => {
              this.id == "main" &&
                (window.scrollInstance = {
                  scroll: s,
                  velocity: e,
                  direction: i,
                  progress: r,
                });
            }
          ),
          this.raf(0),
          this.imagesLoading(),
          this.$wrapper.scrollTo(0, 0),
          K.delayedCall(0.2, () => {
            this.initElements();
          });
      }
      imagesLoading() {
        let s = Array.from(document.getElementsByTagName("img")),
          t = 0;
        s.forEach((e) => {
          e.addEventListener("load", () => {
            t++, t == s.length && this.initContainerSize();
          });
        });
      }
      initElements() {
        (this.triggers = new Array(this.$scrollItems.length)),
          (this.scrollElements = new Array(this.$scrollItems.length)),
          this.$scrollItems.forEach((s, t) => {
            let e = this.createElement(s, t),
              i = typeof s.getAttribute("data-scroll-marker") == "string",
              r =
                typeof s.getAttribute("data-scroll-target") == "string"
                  ? document.querySelector(s.getAttribute("data-scroll-target"))
                  : s,
              n = {
                scroller: this.$wrapper,
                trigger: r,
                start:
                  typeof s.getAttribute("data-scroll-start") == "string"
                    ? s.getAttribute("data-scroll-start")
                    : "top bottom",
                end:
                  typeof s.getAttribute("data-scroll-end") == "string"
                    ? s.getAttribute("data-scroll-end")
                    : "bottom top",
                markers: i,
                onEnter: () => {
                  this.onElementEnter(e, "down");
                },
                onLeave: () => {
                  this.onElementLeave(e, "down");
                },
                onEnterBack: () => {
                  this.onElementEnter(e, "up");
                },
                onLeaveBack: () => {
                  this.onElementLeave(e, "up");
                },
              };
            e.progressCallParameters != null &&
              (n = br(Gt({}, n), {
                onUpdate: (a) => {
                  this.onElementProgress(a, e);
                },
              }));
            let o = Y.create(n);
            this.scrollElements.push(br(Gt({}, e), { sTrigger: o }));
          });
      }
      createElement(s, t) {
        let e = s.getAttribute("data-scroll-id"),
          i = typeof s.getAttribute("data-scroll-repeat") == "string",
          r;
        if (typeof s.getAttribute("data-scroll-call") == "string") {
          let o = s.getAttribute("data-scroll-call").split(",");
          (r = {
            function: o[0],
            module: o[1],
            moduleId: o.length < 3 ? e : o[2],
          }),
            r.moduleId == null &&
              console.warn(
                "You didn't specified a data-scroll-id, or a moduleId in your data-scroll-call",
                this.el
              );
        } else r = void 0;
        let n;
        if (typeof s.getAttribute("data-scroll-progress-call") == "string") {
          let o = s.getAttribute("data-scroll-progress-call").split(",");
          (n = {
            function: o[0],
            module: o[1],
            moduleId: o.length < 3 ? e : o[2],
            isReversed:
              typeof s.getAttribute("data-scroll-progress-reverse") == "string",
          }),
            n.moduleId == null &&
              console.warn(
                "You didn't specified a data-scroll-id, or a moduleId in your data-scroll-progress-call",
                this.el
              );
        } else n = void 0;
        return {
          $el: s,
          id: e,
          isRepeatable: i,
          callParameters: r,
          progressCallParameters: n,
        };
      }
      onElementProgress(s, t) {
        let e = s.progress.toFixed(3);
        this.call(
          t.progressCallParameters.function,
          {
            progress: parseFloat(e),
            isReversed: t.progressCallParameters.isReversed,
          },
          t.progressCallParameters.module,
          t.progressCallParameters.moduleId
        );
      }
      onElementEnter(s, t) {
        (!s.isRepeatable && s.$el.classList.contains(Gn)) ||
          (s.$el.classList.add(Gn),
          s.callParameters != null &&
            this.call(
              s.callParameters.function,
              { mode: "enter", direction: t, $el: s.$el },
              s.callParameters.module,
              s.callParameters.moduleId
            ));
      }
      onElementLeave(s, t) {
        (!s.isRepeatable && s.$el.classList.contains(Gn)) ||
          (s.$el.classList.remove(Gn),
          s.callParameters != null &&
            this.call(
              s.callParameters.function,
              { mode: "leave", direction: t, $el: s.$el },
              s.callParameters.module,
              s.callParameters.moduleId
            ));
      }
      raf(s) {
        this.lenis.raf(s),
          (this.rafInstance = requestAnimationFrame((t) => this.raf(t)));
      }
      scrollTo(s) {
        typeof s.preventDefault == "function" && s.preventDefault();
        let t =
            typeof s.currentTarget.getAttribute("href") == "string"
              ? s.currentTarget.getAttribute("href")
              : s.currentTarget.getAttribute("data-href"),
          e =
            typeof s.currentTarget.getAttribute("data-scroll-to-duration") ==
            "string"
              ? parseFloat(
                  s.currentTarget.getAttribute("data-scroll-to-duration")
                )
              : 2,
          i =
            typeof s.currentTarget.getAttribute("data-scroll-to-offset") ==
            "string"
              ? parseInt(s.currentTarget.getAttribute("data-scroll-to-offset"))
              : -document.querySelector(".c-menu").getBoundingClientRect()
                  .height,
          r =
            typeof s.currentTarget.getAttribute("data-scroll-to-immediate") ==
            "string";
        this.lenis.scrollTo(t, {
          offset: i,
          duration: e,
          immediate: r,
          easing: (n) =>
            n < 0.5 ? 16 * n * n * n * n * n : 1 - Math.pow(-2 * n + 2, 5) / 2,
        });
      }
      initContainerSize() {
        if (this.direction === "horizontal") {
          let s = 0;
          for (let t = 0; t < this.el.children.length; t++)
            s += this.el.children[t].getBoundingClientRect().width;
          this.el.style.setProperty("--scrollContainerWidth", s + "px");
        }
      }
      refresh() {
        this.scrollElements.forEach((s) => {
          s.sTrigger.refresh();
        });
      }
      resize() {
        this.windowWidth != window.innerWidth &&
          (this.initContainerSize(), (this.windowWidth = window.innerWidth));
      }
      lazyLoad(s) {
        Vl(s.$el, null, () => {});
      }
      destroy() {
        this.scrollElements.forEach((s) => {
          s.sTrigger.kill();
        }),
          cancelAnimationFrame(this.rafInstance);
      }
    };
  var $n = class extends J {
    constructor(s) {
      super(s);
    }
    init() {
      (this.condition = window.innerWidth < window.innerHeight),
        (this.hasCondition = typeof this.getData("condition") == "string"),
        (this.disabledIfCondition =
          typeof this.getData("condition-disabled") == "string"),
        this.hasCondition &&
          ((this.bindResize = this.resize.bind(this)),
          window.addEventListener("resize", this.bindResize)),
        this.createTimeline();
    }
    createTimeline() {
      (this.from = JSON.parse(this.getData("from"))),
        (this.to = JSON.parse(this.getData("to"))),
        this.hasCondition &&
          this.condition &&
          ((this.from = JSON.parse(this.getData("from-condition"))),
          (this.to = JSON.parse(this.getData("to-condition")))),
        (this.tl = new K.timeline()),
        this.tl.pause(),
        this.tl.fromTo(
          this.el,
          Gt({}, this.from),
          br(Gt({}, this.to), { ease: "none", duration: 1 })
        );
    }
    progress({ progress: s, isReversed: t }) {
      let e = s;
      t && (e = 1 - s), this.tl != null && this.tl.progress(e);
    }
    resize() {
      let s = this.condition;
      (this.condition = window.innerWidth < window.innerHeight),
        s != this.condition &&
          (this.disabledIfCondition && this.condition && (this.tl = void 0),
          (!this.condition || (!this.disabledIfCondition && this.condition)) &&
            ((this.tl = void 0), this.createTimeline()));
    }
    destroy() {
      window.removeEventListener("resize", this.bindResize);
    }
  };
  var ql = "word-wrap",
    Gl = "line-wrap",
    Po = "char-wrap",
    Pf = "is-animated",
    Kn = class extends J {
      constructor(s) {
        super(s),
          (this.DEFAULT_FROM_ANIMATION = { y: "100%", scaleY: 1.5, alpha: 0 }),
          (this.DEFAULT_TO_ANIMATION = {
            alpha: 1,
            y: 0,
            scaleY: 1,
            duration: 0.8,
            stagger: 0.05,
            paused: !0,
            ease: "power2.out",
          });
      }
      init() {
        if (
          ((this.condition = window.innerWidth < window.innerHeight),
          (this.hasCondition = typeof this.getData("condition") == "string"),
          (this.splitMode = this.getData("type")
            ? this.getData("type")
            : "chars"),
          (this.animateMode = this.getData("animate")),
          (this.isFixed = typeof this.getData("fixed") == "string"),
          typeof this.getData("from") == "string" &&
            (this.DEFAULT_FROM_ANIMATION = JSON.parse(this.getData("from"))),
          this.hasCondition &&
            this.condition &&
            typeof this.getData("from-condition") == "string" &&
            (this.DEFAULT_FROM_ANIMATION = JSON.parse(
              this.getData("from-condition")
            )),
          typeof this.getData("to") == "string" &&
            (this.DEFAULT_TO_ANIMATION = JSON.parse(this.getData("to"))),
          this.hasCondition &&
            this.condition &&
            typeof this.getData("to-condition") == "string")
        ) {
          let s = JSON.parse(this.getData("to-condition"));
          this.DEFAULT_TO_ANIMATION = Gt(Gt({}, s), this.DEFAULT_TO_ANIMATION);
        }
        typeof this.getData("stagger") == "string" &&
          (this.DEFAULT_TO_ANIMATION.stagger = this.getData("stagger")),
          typeof this.getData("duration") == "string" &&
            (this.DEFAULT_TO_ANIMATION.duration = parseFloat(
              this.getData("duration")
            )),
          typeof this.getData("delay") == "string" &&
            (this.DEFAULT_TO_ANIMATION.delay = parseFloat(
              this.getData("delay")
            )),
          (this.animated = !1),
          this.splitChars(),
          this.splitMode == "lines"
            ? this.splitLines()
            : this.splitMode == "words" && this.splitWords(),
          this.isFixed ||
            ((this.animations = new Array()),
            this.initFromAnimation(this.animateMode));
      }
      ready() {
        this.isFixed ||
          ((typeof this.el.getAttribute("data-scroll") != "string" ||
            typeof this.getData("auto") == "string") &&
            this.animate());
      }
      trigger(s) {
        s.mode == "enter" && this.animate();
      }
      splitChars() {
        let s = this.el.textContent.split("");
        this.el.innerHTML = "";
        for (let t = 0; t < s.length; t++) {
          let e = document.createElement("span");
          (e.innerText = s[t] == "" ? "\xA0\xA0" : s[t]),
            e.classList.add(Po),
            this.el.append(e);
        }
      }
      splitLines() {
        let s = Array.from(this.el.querySelectorAll("span")),
          t = [],
          e = 0,
          i = !0;
        s.forEach((r, n) => {
          let o = r.getBoundingClientRect().top;
          if (i) (t[e] = [n]), (i = !1);
          else {
            let a = r.nextSibling;
            a != null
              ? a.getBoundingClientRect().top > o &&
                (t[e].push(n), e++, (i = !0))
              : t[e].push(n);
          }
        });
        for (let r = 0; r < t.length; r++) {
          let n = t[r][0],
            o = t[r][1] + 1,
            a = document.createElement("div");
          a.classList.add(Gl);
          let l = document.createElement("span");
          if ((a.append(l), !o))
            l.innerText = `${l.innerText}${s[n].innerText}`;
          else {
            let u = s.slice(n, o);
            u.forEach((h, c) => {
              h.innerText == "" && c != u.length - 1
                ? (l.innerText = `${l.innerText} `)
                : (l.innerText = `${l.innerText}${h.innerText}`),
                h.parentNode.removeChild(h);
            });
          }
          this.el.append(a);
        }
      }
      splitWords() {
        let s = Array.from(this.el.querySelectorAll("span")),
          t = [],
          e = 0,
          i = !0;
        s.forEach((r, n) => {
          let o = r.getBoundingClientRect().top;
          if (i) (t[e] = [n]), (i = !1);
          else {
            let a = r.nextSibling;
            a != null
              ? (a.innerText == "" || a.innerText == " ") &&
                (t[e].push(n), e++, (i = !0))
              : t[e].push(n);
          }
        });
        for (let r = 0; r < t.length; r++) {
          let n = t[r][0],
            o = t[r][1] + 1,
            a = document.createElement("span");
          a.classList.add(ql),
            o
              ? s.slice(n, o).forEach((u) => {
                  a.append(u);
                })
              : a.append(s[n]),
            this.el.append(a);
        }
      }
      initFromAnimation(s) {
        let t;
        if (
          (this.splitMode == "words"
            ? (t = this.el.querySelectorAll(`.${ql}`))
            : this.splitMode == "lines"
            ? (t = this.el.querySelectorAll(`.${Gl}`))
            : this.splitMode == "chars" && (t = this.el),
          t.length != null)
        )
          t.forEach((e) => {
            let i, r;
            if (s == "chars" || s == "") r = e.querySelectorAll(`.${Po}`);
            else if (s == "words") r = t;
            else return;
            K.set(r, Gt({}, this.DEFAULT_FROM_ANIMATION)),
              (i = K.to(r, Gt({}, this.DEFAULT_TO_ANIMATION))),
              this.animations.push(i);
          });
        else {
          let e = t.querySelectorAll(`.${Po}`),
            i;
          K.set(e, Gt({}, this.DEFAULT_FROM_ANIMATION)),
            (i = K.to(e, Gt({}, this.DEFAULT_TO_ANIMATION))),
            this.animations.push(i);
        }
      }
      animate() {
        this.el.classList.add("is-visible"),
          this.animations.forEach((s, t) => {
            K.delayedCall(this.DEFAULT_TO_ANIMATION.delay, () => {
              s.progress(0), s.play(), t == 0 && this.el.classList.add(Pf);
            });
          }),
          (this.animated = !0);
      }
    };
  function Qn(s) {
    for (let t = s.length - 1; t > 0; t--) {
      let e = Math.floor(Math.random() * (t + 1));
      [s[t], s[e]] = [s[e], s[t]];
    }
    return s;
  }
  var jl = "is-active",
    $l = "is-leaving",
    Jn = class extends J {
      constructor(s) {
        if (
          (super(s),
          (this.$itemsBase = Array.from(this.$("item"))),
          (this.duration = 6),
          (this.delay = 1),
          (this.currentIndex = 0),
          (this.oldIndex = -1),
          (this.isVisible = !1),
          (this.el.innerHTML = ""),
          (this.$items = Qn(this.$itemsBase)),
          this.$items.forEach((e) => {
            this.el.appendChild(e);
          }),
          window.isMobile)
        )
          return;
        this.$items[0].querySelectorAll("picture>*").forEach((e) => {
          e.getAttribute("srcset") ==
            "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" &&
            (e.setAttribute("srcset", e.getAttribute("data-srcset")),
            e.setAttribute("src", e.getAttribute("data-srcset")));
        });
      }
      init() {}
      trigger({ mode: s }) {
        s == "enter"
          ? ((this.isVisible = !0), this.launchSlider(2))
          : ((this.isVisible = !1), this.stopSlider());
      }
      launchSlider(s) {
        this.next(s);
      }
      stopSlider() {
        this.delayedCall.kill();
      }
      next(s = this.delay) {
        window.isMobile ||
          (this.currentIndex < this.$items.length - 1 &&
            this.$items[this.currentIndex + 1]
              .querySelectorAll("picture>*")
              .forEach((e) => {
                e.getAttribute("srcset") ==
                  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" &&
                  (e.setAttribute("srcset", e.getAttribute("data-srcset")),
                  e.setAttribute("src", e.getAttribute("data-srcset")));
              }),
          this.$items.forEach((t, e) => {
            e == this.currentIndex
              ? K.delayedCall(s, () => {
                  t.classList.add(jl);
                })
              : e == this.oldIndex &&
                (t.classList.add($l),
                t.classList.remove(jl),
                K.delayedCall(this.delay, () => {
                  t.classList.remove($l);
                }));
          }),
          (this.oldIndex = this.currentIndex),
          this.currentIndex < this.$items.length - 1
            ? this.currentIndex++
            : (this.currentIndex = 0),
          this.isVisible &&
            (this.delayedCall = K.delayedCall(this.duration, () =>
              this.launchSlider()
            )));
      }
    };
  var gt = document.documentElement,
    kc = document.body,
    Ec = gt.hasAttribute("data-debug");
  var Kl = "has-menu",
    Ql = "has-nav-open",
    Zn = class extends J {
      constructor(s) {
        super(s);
      }
      init() {}
      trigger({ mode: s, direction: t }) {
        s == "enter" && t == "down" && gt.classList.add(Kl),
          s == "leave" && t == "up" && gt.classList.remove(Kl);
      }
      open() {
        gt.classList.add(Ql);
      }
      close() {
        gt.classList.remove(Ql);
      }
    };
  var ts = class extends J {
    constructor(s) {
      super(s),
        (this.$items = this.$("item")),
        (this.index = 0),
        (this.oldIndex = -1),
        (this.duration = 2);
    }
    init() {}
    trigger({ mode: s }) {
      s == "enter" ? this.launch() : this.stop();
    }
    launch() {
      this.next(),
        (this.delayedCall = K.delayedCall(this.duration, () => {
          this.launch();
        }));
    }
    next() {
      this.call("goto", this.index, "Shapes"),
        this.$items.forEach((s, t) => {
          t == this.index && s.classList.add("is-active"),
            t == this.oldIndex &&
              (s.classList.remove("is-active"),
              s.classList.add("is-leaving"),
              K.delayedCall(0.6, () => {
                s.classList.remove("is-leaving");
              }));
        }),
        (this.oldIndex = this.index),
        this.index < this.$items.length - 1 ? this.index++ : (this.index = 0);
    }
    stop() {
      this.delayedCall != null && this.delayedCall.kill();
    }
  };
  var es = class extends J {
    constructor(s) {
      super(s), (this.$items = this.$("item")), (this.index = 0);
    }
    init() {}
    goto(s) {
      this.$items.forEach((t, e) => {
        t.classList.contains("is-active") &&
          (t.classList.add("is-leaving"),
          t.classList.remove("is-active"),
          K.delayedCall(1.2, () => {
            t.classList.remove("is-leaving");
          })),
          e == this.index && t.classList.add("is-active");
      }),
        this.index < this.$items.length - 1 ? this.index++ : (this.index = 0);
    }
  };
  var is = class extends J {
    constructor(s) {
      super(s),
        (this.$items = this.$("item")),
        (this.index = 0),
        (this.oldIndex = -1),
        (this.duration = 3);
    }
    init() {}
    trigger({ mode: s }) {
      s == "enter" && this.launch();
    }
    launch() {
      this.next(),
        (this.delayedCall = K.delayedCall(this.duration, () => {
          this.launch();
        }));
    }
    next() {
      this.$items.forEach((s, t) => {
        t == this.index && s.classList.add("is-active"),
          t == this.oldIndex &&
            (s.classList.remove("is-active"),
            s.classList.add("is-leaving"),
            K.delayedCall(1, () => {
              s.classList.remove("is-leaving");
            }));
      }),
        (this.oldIndex = this.index),
        this.index < this.$items.length - 1 ? this.index++ : (this.index = 0);
    }
    stop() {
      this.delayedCall != null && this.delayedCall.kill();
    }
  };
  var rs = class extends J {
    constructor(s) {
      super(s),
        (this.events = {
          click: { toggler: "toggle" },
          mouseenter: { toggler: "togglerEnter" },
          mouseleave: { toggler: "togglerLeave" },
        });
    }
    init() {}
    togglerEnter(s) {
      s.currentTarget.classList.remove("-top"),
        s.currentTarget.classList.remove("-bottom"),
        s.currentTarget.classList.add("is-enter"),
        s.offsetY < 10
          ? s.currentTarget.classList.add("-top")
          : s.currentTarget.classList.add("-bottom");
    }
    togglerLeave(s) {
      s.currentTarget.classList.remove("-top"),
        s.currentTarget.classList.remove("-bottom"),
        s.currentTarget.classList.remove("is-enter"),
        s.offsetY < 10
          ? s.currentTarget.classList.add("-top")
          : s.currentTarget.classList.add("-bottom");
    }
    toggle(s) {
      s.stopPropagation();
      let t = s.curTarget,
        e = this.parent("item", t);
      e.classList.contains("is-open")
        ? this.close(e)
        : (this.close(), this.open(e));
    }
    open(s) {
      let t = this.$("content", s)[0];
      s.classList.add("is-open"),
        this.call("start", {}, "Slider", s.getAttribute("id")),
        K.to(t, {
          duration: 0,
          height: this.compute(this.$("inner", s)[0]).height,
        }),
        window.isMobile ||
          K.delayedCall(0.4, () => {
            this.call("scrollTo", { currentTarget: s }, "Scroll", "main");
          });
    }
    close(s) {
      this.$("item").forEach((t) => {
        t.classList.remove("is-open"),
          this.call("stop", {}, "Slider", t.getAttribute("id"));
        let e = this.$("content", t)[0];
        e && K.to(e, 0, { height: 0 });
      });
    }
    compute(s) {
      return s.getBoundingClientRect();
    }
  };
  var Df = "one-way",
    jr = class {
      constructor(t, e, i, r, n) {
        (this.el = t),
          (this.isFixed = i),
          (this.containerWidth = 0),
          (this.requestAnimation = null),
          (this.scrollPosition = -1),
          (this.translation = 0),
          (this.grabbed = !1),
          (this.preventClick = !1),
          (this.paused = r),
          (this.originalVelocity = -e),
          (this.velocity = this.originalVelocity),
          (this.lastDelta = null),
          this.initializeElements(),
          (this.scrollInfluence = n);
      }
      launch() {
        this.initializeEvents();
      }
      initializeElements() {
        (this.$railMove = this.el.querySelectorAll(".js-rail-group-container")),
          (this.$railMoveChildren = this.el.querySelectorAll(".js-rail-item")),
          this.getBCR();
      }
      initializeEvents() {
        this.update();
      }
      setContainerWidth(t) {
        this.containerWidth = t;
      }
      getBCR() {
        this.railMoveBCR = this.$railMove[0].getBoundingClientRect();
      }
      updateScroll(t) {
        if (!this.isFixed && t !== void 0) {
          let e = Math.round(t.scroll) ? Math.round(t.scroll) : 0,
            i = e - this.scrollPosition;
          (this.scrollPosition = e),
            this.scrollInfluence == Df && (i = Math.abs(i)),
            i != 0 && (this.velocity = this.originalVelocity * i * 0.5);
        }
      }
      pause() {
        (this.paused = !0), cancelAnimationFrame(this.requestAnimation);
      }
      resume() {
        (this.paused = !1),
          (this.requestAnimation = requestAnimationFrame(() => this.update()));
      }
      update() {
        this.grabbed ||
          (this.translation > this.railMoveBCR.width / 2 ||
          this.translation < -this.railMoveBCR.width / 2
            ? (this.translation = 0)
            : (this.translation = this.translation + this.velocity));
        let t;
        this.translation > 0
          ? (t =
              -this.containerWidth + (this.translation % this.containerWidth))
          : (t = this.translation % this.containerWidth),
          K.set(this.$railMoveChildren, { x: Math.round(t), force3D: !0 }),
          this.scrollInfluence && this.updateScroll(window.scrollInstance),
          this.paused ||
            (this.requestAnimation = requestAnimationFrame(() =>
              this.update()
            ));
      }
      destroy() {
        cancelAnimationFrame(this.requestAnimation),
          K.set(this.$railMove, { x: 0 }),
          (this.translation = 0);
      }
    };
  var ns = class extends J {
    constructor(s) {
      super(s),
        (this.speed = this.el.getAttribute("data-rail-speed") || 1),
        (this.isFixed = typeof this.el.getAttribute("data-fixed") == "string"),
        (this.shuffle =
          typeof this.el.getAttribute("data-shuffle") == "string"),
        (this.paused = typeof this.el.getAttribute("data-paused") == "string"),
        (this.scrollInfluence =
          this.el.getAttribute("data-rail-scroll") != null
            ? this.el.getAttribute("data-rail-scroll") == ""
              ? !0
              : this.el.getAttribute("data-rail-scroll")
            : !1),
        (this.isMobile =
          typeof this.el.getAttribute("data-desktop") != "string"),
        (this.initialHTML = this.el.outerHTML),
        (this.isFirstHit = !0);
    }
    init() {
      (window.isMobile && !this.isMobile) ||
        (this.setClasses(),
        this.createTrack(),
        this.fillScreen(),
        this.groupTracks(),
        this.duplicateGroup(),
        this.wrapGroups(),
        (this.railMove = new jr(
          this.el,
          window.isMobile ? this.speed / 2 : this.speed,
          this.isFixed,
          this.paused,
          window.isMobile ? !1 : this.scrollInfluence
        )),
        this.railMove.setContainerWidth(this.trackGroupBCR.width));
    }
    setClasses() {
      this.el.classList.add("c-rail_wrapper"),
        (this.children = Array.from(this.el.children));
      for (let s of this.children)
        s.classList.add("c-rail_item", "js-rail-item");
    }
    createTrack() {
      if (
        ((this.track = document.createElement("div")),
        this.track.classList.add("c-rail_track"),
        this.el.appendChild(this.track),
        (this.tracks = []),
        this.tracks.push(this.track),
        this.shuffle != null)
      ) {
        let s = Qn(this.children);
        for (let t of s) this.track.appendChild(t);
      } else for (let s of this.children) this.track.appendChild(s);
    }
    fillScreen() {
      let s = window.innerWidth / this.track.getBoundingClientRect().width;
      if (s === 1 / 0) throw new Error("Ratio is Infinity");
      for (var t = 0; t < s; t++) {
        let e = this.track.cloneNode(!0);
        this.tracks.push(e), this.el.appendChild(e);
      }
    }
    groupTracks() {
      (this.trackGroup = document.createElement("div")),
        this.trackGroup.classList.add("c-rail_track-group"),
        this.el.appendChild(this.trackGroup);
      for (let s of this.tracks) this.trackGroup.appendChild(s);
      this.trackGroupBCR = this.trackGroup.getBoundingClientRect();
    }
    duplicateGroup() {
      (this.trackGroupClone = this.trackGroup.cloneNode(!0)),
        this.el.appendChild(this.trackGroupClone);
    }
    wrapGroups() {
      (this.groupsWrap = document.createElement("div")),
        this.groupsWrap.classList.add("js-rail-group-container"),
        this.groupsWrap.classList.add("c-rail_group-container"),
        this.el.append(this.groupsWrap);
      for (let s of [this.trackGroup, this.trackGroupClone])
        this.groupsWrap.append(s);
    }
    trigger(s) {
      (window.isMobile && !this.isMobile) ||
        (s.mode === "enter"
          ? this.isFirstHit
            ? (this.railMove.launch(), (this.isFirstHit = !1))
            : (this.railMove.pause(), this.railMove.resume())
          : this.railMove.pause());
    }
    launch() {
      this.railMove.launch();
    }
    destroy() {
      super.destroy();
    }
  };
  var ss = class extends J {
    constructor(s) {
      super(s);
    }
    init() {
      (this.swiper = new Swiper(this.el, {
        speed: 600,
        effect: "fade",
        loop: !0,
        autoplay: { delay: 2e3, disableOnInteraction: !1 },
        pagination: { el: ".swiper-pagination", clickable: !0 },
      })),
        this.stop(),
        (this.firstHit = !0);
    }
    start() {
      this.swiper.slideTo(1, 0),
        this.swiper.autoplay.start(),
        this.firstHit &&
          this.el.querySelectorAll("picture>*").forEach((t) => {
            t.getAttribute("srcset") ==
              "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" &&
              (t.setAttribute("srcset", t.getAttribute("data-srcset")),
              t.setAttribute("src", t.getAttribute("data-srcset")));
          }),
        (this.firstHit = !1);
    }
    stop() {
      this.swiper.autoplay.stop();
    }
  };
  var os = class extends J {
    constructor(s) {
      super(s), (this.events = { click: "trigger" });
    }
    init() {}
    trigger() {
      gt.classList.contains("has-nav-open")
        ? this.call("close", "Nav")
        : this.call("open", "Nav");
    }
  };
  var as = class extends J {
    constructor(s) {
      super(s), (this.events = { click: "onClick" });
    }
    init() {}
    onClick(s) {
      s.preventDefault(),
        this.call("close", "Nav"),
        this.call("scrollTo", s, "Scroll", "main");
    }
  };
  var tu = Jr(Zl(), 1);
  function eu() {
    (0, tu.default)();
  }
  var nu = Jr(ru(), 1),
    $r = new Vo({ modules: Do });
  window.isMobile =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  window.isMobile
    ? gt.classList.add("is-mobile")
    : gt.classList.add("is-desktop");
  window.isWindows = navigator.platform.indexOf("Win") > -1;
  window.isWindows && gt.classList.add("is-windows");
  window.isIos =
    /iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  window.isIos && gt.classList.add("is-ios");
  window.isIos && nu.default.polyfill();
  var Lf = document.createElement("canvas"),
    su = Lf.getContext("webgl"),
    If = su.getExtension("WEBGL_debug_renderer_info"),
    Io = su.getParameter(If.UNMASKED_RENDERER_WEBGL);
  Io.includes("M1");
  Io.includes("M1 Pro");
  Io.includes("M1 Max") && gt.classList.add("is-m1-max");
  window.onload = (s) => {
    Rf();
  };
  function Rf() {
    if (
      (eu(),
      $r.init($r),
      gt.classList.add("is-loaded"),
      gt.classList.remove("is-loading"),
      gt.classList.add("is-first-load"),
      setTimeout(() => {
        gt.classList.add("is-pre-ready"),
          setTimeout(() => {
            gt.classList.add("is-pre-ready-end"),
              setTimeout(() => {
                gt.classList.add("is-ready"),
                  gt.classList.add("has-dom-ready"),
                  Object.keys($r.currentModules).forEach((t) => {
                    typeof $r.currentModules[t].ready == "function" &&
                      $r.currentModules[t].ready();
                  });
              }, 400);
          }, 2e3);
      }, 600),
      navigator.userAgent.toLowerCase().indexOf("chrome") > -1)
    ) {
      var s = [
        `%c Developed by KennDeClouv\xE9 - https://kenndeclouv.rf.gd
`,
        "background: #0000; padding:10px 0;color: #ffffff;",
      ];
      window.console.log.apply(console, s);
    } else
      window.console &&
        window.console.log(
          "Developed by KennDeClouv\xE9 - https://kenndeclouv.rf.gd"
        );
  }
  // event listener untuk link
  document.addEventListener("DOMContentLoaded", () => {
    try {
      document.querySelectorAll("a:not([href*='#'])").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault(); // cegah default link behavior

          // pastikan elemen adalah <a>
          const target = e.target.closest("a"); // cari elemen <a> terdekat
          const href = target?.getAttribute("href"); // ambil href dari <a>
          // cek apakah href valid dan bukan "#"

          window.location.replace(href); // pindah halaman dan reload
        });
      });
    } catch (error) {
      console.error("An error occurred:", error);
      window.location.reload();
    }
  });
})();
