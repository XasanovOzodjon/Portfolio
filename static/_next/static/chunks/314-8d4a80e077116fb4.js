"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [314],
  {
    1492: (e, t, n) => {
      n.d(t, { lG: () => eL, Lj: () => ek, L3: () => ex });
      var r = n(5750),
        l = ((e) => (
          (e.Space = " "),
          (e.Enter = "Enter"),
          (e.Escape = "Escape"),
          (e.Backspace = "Backspace"),
          (e.Delete = "Delete"),
          (e.ArrowLeft = "ArrowLeft"),
          (e.ArrowUp = "ArrowUp"),
          (e.ArrowRight = "ArrowRight"),
          (e.ArrowDown = "ArrowDown"),
          (e.Home = "Home"),
          (e.End = "End"),
          (e.PageUp = "PageUp"),
          (e.PageDown = "PageDown"),
          (e.Tab = "Tab"),
          e
        ))(l || {}),
        o = n(8688);
      function i(e, t, n, l) {
        let i = (0, o.Y)(n);
        (0, r.useEffect)(() => {
          function n(e) {
            i.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, l),
            () => e.removeEventListener(t, n, l)
          );
        }, [e, t, l]);
      }
      class a extends Map {
        get(e) {
          let t = super.get(e);
          return void 0 === t && ((t = this.factory(e)), this.set(e, t)), t;
        }
        constructor(e) {
          super(), (this.factory = e);
        }
      }
      function u(e, t) {
        let n = e(),
          r = new Set();
        return {
          getSnapshot: () => n,
          subscribe: (e) => (r.add(e), () => r.delete(e)),
          dispatch(e) {
            for (
              var l = arguments.length, o = Array(l > 1 ? l - 1 : 0), i = 1;
              i < l;
              i++
            )
              o[i - 1] = arguments[i];
            let a = t[e].call(n, ...o);
            a && ((n = a), r.forEach((e) => e()));
          },
        };
      }
      var s = n(55);
      function c(e) {
        return (0, r.useSyncExternalStore)(
          e.subscribe,
          e.getSnapshot,
          e.getSnapshot
        );
      }
      let d = new a(() =>
        u(() => [], {
          ADD(e) {
            return this.includes(e) ? this : [...this, e];
          },
          REMOVE(e) {
            let t = this.indexOf(e);
            if (-1 === t) return this;
            let n = this.slice();
            return n.splice(t, 1), n;
          },
        })
      );
      function f(e, t) {
        let n = d.get(t),
          l = (0, r.useId)(),
          o = c(n);
        if (
          ((0, s.s)(() => {
            if (e) return n.dispatch("ADD", l), () => n.dispatch("REMOVE", l);
          }, [n, e]),
          !e)
        )
          return !1;
        let i = o.indexOf(l),
          a = o.length;
        return -1 === i && ((i = a), (a += 1)), i === a - 1;
      }
      var m = n(8149),
        p = n(3157),
        v = n(4833);
      function h(e) {
        return v._.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
      let g = new Map(),
        E = new Map();
      function y(e) {
        var t;
        let n = null != (t = E.get(e)) ? t : 0;
        return (
          E.set(e, n + 1),
          0 !== n ||
            (g.set(e, {
              "aria-hidden": e.getAttribute("aria-hidden"),
              inert: e.inert,
            }),
            e.setAttribute("aria-hidden", "true"),
            (e.inert = !0)),
          () =>
            (function (e) {
              var t;
              let n = null != (t = E.get(e)) ? t : 1;
              if ((1 === n ? E.delete(e) : E.set(e, n - 1), 1 !== n)) return;
              let r = g.get(e);
              r &&
                (null === r["aria-hidden"]
                  ? e.removeAttribute("aria-hidden")
                  : e.setAttribute("aria-hidden", r["aria-hidden"]),
                (e.inert = r.inert),
                g.delete(e));
            })(e)
        );
      }
      var b = n(2071);
      let w = [
          "[contentEditable=true]",
          "[tabindex]",
          "a[href]",
          "area[href]",
          "button:not([disabled])",
          "iframe",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
        ]
          .map((e) => "".concat(e, ":not([tabindex='-1'])"))
          .join(","),
        F = ["[data-autofocus]"]
          .map((e) => "".concat(e, ":not([tabindex='-1'])"))
          .join(",");
      var C = ((e) => (
          (e[(e.First = 1)] = "First"),
          (e[(e.Previous = 2)] = "Previous"),
          (e[(e.Next = 4)] = "Next"),
          (e[(e.Last = 8)] = "Last"),
          (e[(e.WrapAround = 16)] = "WrapAround"),
          (e[(e.NoScroll = 32)] = "NoScroll"),
          (e[(e.AutoFocus = 64)] = "AutoFocus"),
          e
        ))(C || {}),
        A = ((e) => (
          (e[(e.Error = 0)] = "Error"),
          (e[(e.Overflow = 1)] = "Overflow"),
          (e[(e.Success = 2)] = "Success"),
          (e[(e.Underflow = 3)] = "Underflow"),
          e
        ))(A || {}),
        P = ((e) => (
          (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
        ))(P || {}),
        T = ((e) => (
          (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
        ))(T || {}),
        S = ((e) => (
          (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
        ))(S || {});
      function k(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function x(e, t) {
        var n, r, l;
        let {
            sorted: o = !0,
            relativeTo: i = null,
            skipElements: a = [],
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {},
          u = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          s = Array.isArray(e)
            ? o
              ? (function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : (e) => e;
                  return e.slice().sort((e, n) => {
                    let r = t(e),
                      l = t(n);
                    if (null === r || null === l) return 0;
                    let o = r.compareDocumentPosition(l);
                    return o & Node.DOCUMENT_POSITION_FOLLOWING
                      ? -1
                      : o & Node.DOCUMENT_POSITION_PRECEDING
                      ? 1
                      : 0;
                  });
                })(e)
              : e
            : 64 & t
            ? (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : document.body;
                return null == e
                  ? []
                  : Array.from(e.querySelectorAll(F)).sort((e, t) =>
                      Math.sign(
                        (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (t.tabIndex || Number.MAX_SAFE_INTEGER)
                      )
                    );
              })(e)
            : (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : document.body;
                return null == e
                  ? []
                  : Array.from(e.querySelectorAll(w)).sort((e, t) =>
                      Math.sign(
                        (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (t.tabIndex || Number.MAX_SAFE_INTEGER)
                      )
                    );
              })(e);
        a.length > 0 &&
          s.length > 1 &&
          (s = s.filter(
            (e) =>
              !a.some((t) =>
                null != t && "current" in t
                  ? (null == t ? void 0 : t.current) === e
                  : t === e
              )
          )),
          (i = null != i ? i : u.activeElement);
        let c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, s.indexOf(i)) - 1;
            if (4 & t) return Math.max(0, s.indexOf(i)) + 1;
            if (8 & t) return s.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          m = 0,
          p = s.length,
          v;
        do {
          if (m >= p || m + p <= 0) return 0;
          let e = d + m;
          if (16 & t) e = (e + p) % p;
          else {
            if (e < 0) return 3;
            if (e >= p) return 1;
          }
          null == (v = s[e]) || v.focus(f), (m += c);
        } while (v !== u.activeElement);
        return (
          6 & t &&
            null !=
              (l =
                null == (r = null == (n = v) ? void 0 : n.matches)
                  ? void 0
                  : r.call(n, "textarea,input")) &&
            l &&
            v.select(),
          2
        );
      }
      function L() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function O(e, t, n, l) {
        let i = (0, o.Y)(n);
        (0, r.useEffect)(() => {
          if (e)
            return (
              document.addEventListener(t, n, l),
              () => document.removeEventListener(t, n, l)
            );
          function n(e) {
            i.current(e);
          }
        }, [e, t, l]);
      }
      function M(e, t, n, l) {
        let i = (0, o.Y)(n);
        (0, r.useEffect)(() => {
          if (e)
            return (
              window.addEventListener(t, n, l),
              () => window.removeEventListener(t, n, l)
            );
          function n(e) {
            i.current(e);
          }
        }, [e, t, l]);
      }
      function R() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.useMemo)(() => h(...t), [...t]);
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
      var N = n(9538),
        _ = ((e) => (
          (e[(e.None = 1)] = "None"),
          (e[(e.Focusable = 2)] = "Focusable"),
          (e[(e.Hidden = 4)] = "Hidden"),
          e
        ))(_ || {});
      let D = (0, N.FX)(function (e, t) {
          var n;
          let { features: r = 1, ...l } = e,
            o = {
              ref: t,
              "aria-hidden":
                (2 & r) == 2 || (null != (n = l["aria-hidden"]) ? n : void 0),
              hidden: (4 & r) == 4 || void 0,
              style: {
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0",
                ...((4 & r) == 4 && (2 & r) != 2 && { display: "none" }),
              },
            };
          return (0, N.Ci)()({
            ourProps: o,
            theirProps: l,
            slot: {},
            defaultTag: "span",
            name: "Hidden",
          });
        }),
        I = (0, r.createContext)(null);
      function H(e) {
        let { children: t, node: n } = e,
          [l, o] = (0, r.useState)(null),
          i = j(null != n ? n : l);
        return r.createElement(
          I.Provider,
          { value: i },
          t,
          null === i &&
            r.createElement(D, {
              features: _.Hidden,
              ref: (e) => {
                var t, n;
                if (e) {
                  for (let r of null !=
                  (n =
                    null == (t = h(e))
                      ? void 0
                      : t.querySelectorAll("html > *, body > *"))
                    ? n
                    : [])
                    if (
                      r !== document.body &&
                      r !== document.head &&
                      r instanceof HTMLElement &&
                      null != r &&
                      r.contains(e)
                    ) {
                      o(r);
                      break;
                    }
                }
              },
            })
        );
      }
      function j() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return null != (e = (0, r.useContext)(I)) ? e : t;
      }
      let U = u(() => new Map(), {
        PUSH(e, t) {
          var n;
          let r =
            null != (n = this.get(e))
              ? n
              : { doc: e, count: 0, d: (0, p.e)(), meta: new Set() };
          return r.count++, r.meta.add(t), this.set(e, r), this;
        },
        POP(e, t) {
          let n = this.get(e);
          return n && (n.count--, n.meta.delete(t)), this;
        },
        SCROLL_PREVENT(e) {
          let t,
            { doc: n, d: r, meta: l } = e,
            o = {
              doc: n,
              d: r,
              meta: (function (e) {
                let t = {};
                for (let n of e) Object.assign(t, n(t));
                return t;
              })(l),
            },
            i = [
              L()
                ? {
                    before(e) {
                      let { doc: t, d: n, meta: r } = e;
                      function l(e) {
                        return r.containers
                          .flatMap((e) => e())
                          .some((t) => t.contains(e));
                      }
                      n.microTask(() => {
                        var e;
                        if (
                          "auto" !==
                          window.getComputedStyle(t.documentElement)
                            .scrollBehavior
                        ) {
                          let e = (0, p.e)();
                          e.style(t.documentElement, "scrollBehavior", "auto"),
                            n.add(() => n.microTask(() => e.dispose()));
                        }
                        let r =
                            null != (e = window.scrollY)
                              ? e
                              : window.pageYOffset,
                          o = null;
                        n.addEventListener(
                          t,
                          "click",
                          (e) => {
                            if (e.target instanceof HTMLElement)
                              try {
                                let n = e.target.closest("a");
                                if (!n) return;
                                let { hash: r } = new URL(n.href),
                                  i = t.querySelector(r);
                                i && !l(i) && (o = i);
                              } catch (e) {}
                          },
                          !0
                        ),
                          n.addEventListener(t, "touchstart", (e) => {
                            if (e.target instanceof HTMLElement) {
                              if (l(e.target)) {
                                let t = e.target;
                                for (; t.parentElement && l(t.parentElement); )
                                  t = t.parentElement;
                                n.style(t, "overscrollBehavior", "contain");
                              } else n.style(e.target, "touchAction", "none");
                            }
                          }),
                          n.addEventListener(
                            t,
                            "touchmove",
                            (e) => {
                              if (
                                e.target instanceof HTMLElement &&
                                "INPUT" !== e.target.tagName
                              ) {
                                if (l(e.target)) {
                                  let t = e.target;
                                  for (
                                    ;
                                    t.parentElement &&
                                    "" !== t.dataset.headlessuiPortal &&
                                    !(
                                      t.scrollHeight > t.clientHeight ||
                                      t.scrollWidth > t.clientWidth
                                    );

                                  )
                                    t = t.parentElement;
                                  "" === t.dataset.headlessuiPortal &&
                                    e.preventDefault();
                                } else e.preventDefault();
                              }
                            },
                            { passive: !1 }
                          ),
                          n.add(() => {
                            var e;
                            r !==
                              (null != (e = window.scrollY)
                                ? e
                                : window.pageYOffset) && window.scrollTo(0, r),
                              o &&
                                o.isConnected &&
                                (o.scrollIntoView({ block: "nearest" }),
                                (o = null));
                          });
                      });
                    },
                  }
                : {},
              {
                before(e) {
                  var n;
                  let { doc: r } = e,
                    l = r.documentElement;
                  t = Math.max(
                    0,
                    (null != (n = r.defaultView) ? n : window).innerWidth -
                      l.clientWidth
                  );
                },
                after(e) {
                  let { doc: n, d: r } = e,
                    l = n.documentElement,
                    o = Math.max(0, l.clientWidth - l.offsetWidth),
                    i = Math.max(0, t - o);
                  r.style(l, "paddingRight", "".concat(i, "px"));
                },
              },
              {
                before(e) {
                  let { doc: t, d: n } = e;
                  n.style(t.documentElement, "overflow", "hidden");
                },
              },
            ];
          i.forEach((e) => {
            let { before: t } = e;
            return null == t ? void 0 : t(o);
          }),
            i.forEach((e) => {
              let { after: t } = e;
              return null == t ? void 0 : t(o);
            });
        },
        SCROLL_ALLOW(e) {
          let { d: t } = e;
          t.dispose();
        },
        TEARDOWN(e) {
          let { doc: t } = e;
          this.delete(t);
        },
      });
      U.subscribe(() => {
        let e = U.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = "hidden" === t.get(n.doc),
            r = 0 !== n.count;
          ((r && !e) || (!r && e)) &&
            U.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && U.dispatch("TEARDOWN", n);
        }
      });
      var Y = n(6426),
        X = n(6209);
      let V = (0, r.createContext)(() => {});
      function q(e) {
        let { value: t, children: n } = e;
        return r.createElement(V.Provider, { value: t }, n);
      }
      var B = n(9997);
      let K = (0, r.createContext)(!1);
      function W(e) {
        return r.createElement(K.Provider, { value: e.force }, e.children);
      }
      let G = (0, r.createContext)(void 0),
        z = (0, r.createContext)(null);
      z.displayName = "DescriptionContext";
      let $ = Object.assign(
        (0, N.FX)(function (e, t) {
          let n = (0, r.useId)(),
            l = (0, r.useContext)(G),
            { id: o = "headlessui-description-".concat(n), ...i } = e,
            a = (function e() {
              let t = (0, r.useContext)(z);
              if (null === t) {
                let t = Error(
                  "You used a <Description /> component, but it is not inside a relevant parent."
                );
                throw (
                  (Error.captureStackTrace && Error.captureStackTrace(t, e), t)
                );
              }
              return t;
            })(),
            u = (0, X.P)(t);
          (0, s.s)(() => a.register(o), [o, a.register]);
          let c = l || !1,
            d = (0, r.useMemo)(() => ({ ...a.slot, disabled: c }), [a.slot, c]),
            f = { ref: u, ...a.props, id: o };
          return (0, N.Ci)()({
            ourProps: f,
            theirProps: i,
            slot: d,
            defaultTag: "p",
            name: a.name || "Description",
          });
        }),
        {}
      );
      var Z = n(5462),
        J = n(378),
        Q = n(9672);
      function ee(e) {
        let t = (0, m._)(e),
          n = (0, r.useRef)(!1);
        (0, r.useEffect)(
          () => (
            (n.current = !1),
            () => {
              (n.current = !0),
                (0, Q._)(() => {
                  n.current && t();
                });
            }
          ),
          [t]
        );
      }
      var et = ((e) => (
        (e[(e.Forwards = 0)] = "Forwards"),
        (e[(e.Backwards = 1)] = "Backwards"),
        e
      ))(et || {});
      function en(e, t) {
        let n = (0, r.useRef)([]),
          l = (0, m._)(e);
        (0, r.useEffect)(() => {
          let e = [...n.current];
          for (let [r, o] of t.entries())
            if (n.current[r] !== o) {
              let r = l(t, e);
              return (n.current = t), r;
            }
        }, [l, ...t]);
      }
      let er = [];
      function el(e) {
        if (!e) return new Set();
        if ("function" == typeof e) return new Set(e());
        let t = new Set();
        for (let n of e.current)
          n.current instanceof HTMLElement && t.add(n.current);
        return t;
      }
      !(function (e) {
        function t() {
          "loading" !== document.readyState &&
            (e(), document.removeEventListener("DOMContentLoaded", t));
        }
        "undefined" != typeof window &&
          "undefined" != typeof document &&
          (document.addEventListener("DOMContentLoaded", t), t());
      })(() => {
        function e(e) {
          if (
            !(e.target instanceof HTMLElement) ||
            e.target === document.body ||
            er[0] === e.target
          )
            return;
          let t = e.target;
          (t = t.closest(w)),
            er.unshift(null != t ? t : e.target),
            (er = er.filter((e) => null != e && e.isConnected)).splice(10);
        }
        window.addEventListener("click", e, { capture: !0 }),
          window.addEventListener("mousedown", e, { capture: !0 }),
          window.addEventListener("focus", e, { capture: !0 }),
          document.body.addEventListener("click", e, { capture: !0 }),
          document.body.addEventListener("mousedown", e, { capture: !0 }),
          document.body.addEventListener("focus", e, { capture: !0 });
      });
      var eo = ((e) => (
        (e[(e.None = 0)] = "None"),
        (e[(e.InitialFocus = 1)] = "InitialFocus"),
        (e[(e.TabLock = 2)] = "TabLock"),
        (e[(e.FocusLock = 4)] = "FocusLock"),
        (e[(e.RestoreFocus = 8)] = "RestoreFocus"),
        (e[(e.AutoFocus = 16)] = "AutoFocus"),
        e
      ))(eo || {});
      let ei = Object.assign(
        (0, N.FX)(function (e, t) {
          let n,
            l = (0, r.useRef)(null),
            o = (0, X.P)(l, t),
            {
              initialFocus: a,
              initialFocusFallback: u,
              containers: s,
              features: c = 15,
              ...d
            } = e;
          (0, Y.g)() || (c = 0);
          let p = R(l);
          !(function (e, t) {
            let { ownerDocument: n } = t,
              l = !!(8 & e),
              o = (function () {
                let e =
                    !(arguments.length > 0) ||
                    void 0 === arguments[0] ||
                    arguments[0],
                  t = (0, r.useRef)(er.slice());
                return (
                  en(
                    (e, n) => {
                      let [r] = e,
                        [l] = n;
                      !0 === l &&
                        !1 === r &&
                        (0, Q._)(() => {
                          t.current.splice(0);
                        }),
                        !1 === l && !0 === r && (t.current = er.slice());
                    },
                    [e, er, t]
                  ),
                  (0, m._)(() => {
                    var e;
                    return null !=
                      (e = t.current.find((e) => null != e && e.isConnected))
                      ? e
                      : null;
                  })
                );
              })(l);
            en(() => {
              l ||
                ((null == n ? void 0 : n.activeElement) ===
                  (null == n ? void 0 : n.body) &&
                  k(o()));
            }, [l]),
              ee(() => {
                l && k(o());
              });
          })(c, { ownerDocument: p });
          let v = (function (e, t) {
            let {
                ownerDocument: n,
                container: l,
                initialFocus: o,
                initialFocusFallback: i,
              } = t,
              a = (0, r.useRef)(null),
              u = f(!!(1 & e), "focus-trap#initial-focus"),
              s = (0, J.a)();
            return (
              en(() => {
                if (0 === e) return;
                if (!u) {
                  null != i && i.current && k(i.current);
                  return;
                }
                let t = l.current;
                t &&
                  (0, Q._)(() => {
                    if (!s.current) return;
                    let r = null == n ? void 0 : n.activeElement;
                    if (null != o && o.current) {
                      if ((null == o ? void 0 : o.current) === r) {
                        a.current = r;
                        return;
                      }
                    } else if (t.contains(r)) {
                      a.current = r;
                      return;
                    }
                    if (null != o && o.current) k(o.current);
                    else {
                      if (16 & e) {
                        if (x(t, C.First | C.AutoFocus) !== A.Error) return;
                      } else if (x(t, C.First) !== A.Error) return;
                      if (
                        null != i &&
                        i.current &&
                        (k(i.current),
                        (null == n ? void 0 : n.activeElement) === i.current)
                      )
                        return;
                      console.warn(
                        "There are no focusable elements inside the <FocusTrap />"
                      );
                    }
                    a.current = null == n ? void 0 : n.activeElement;
                  });
              }, [i, u, e]),
              a
            );
          })(c, {
            ownerDocument: p,
            container: l,
            initialFocus: a,
            initialFocusFallback: u,
          });
          !(function (e, t) {
            let {
                ownerDocument: n,
                container: r,
                containers: l,
                previousActiveElement: o,
              } = t,
              a = (0, J.a)(),
              u = !!(4 & e);
            i(
              null == n ? void 0 : n.defaultView,
              "focus",
              (e) => {
                if (!u || !a.current) return;
                let t = el(l);
                r.current instanceof HTMLElement && t.add(r.current);
                let n = o.current;
                if (!n) return;
                let i = e.target;
                i && i instanceof HTMLElement
                  ? ea(t, i)
                    ? ((o.current = i), k(i))
                    : (e.preventDefault(), e.stopPropagation(), k(n))
                  : k(o.current);
              },
              !0
            );
          })(c, {
            ownerDocument: p,
            container: l,
            containers: s,
            previousActiveElement: v,
          });
          let h =
              ((n = (0, r.useRef)(0)),
              M(
                !0,
                "keydown",
                (e) => {
                  "Tab" === e.key && (n.current = e.shiftKey ? 1 : 0);
                },
                !0
              ),
              n),
            g = (0, m._)((e) => {
              let t = l.current;
              t &&
                (0, b.Y)(h.current, {
                  [et.Forwards]: () => {
                    x(t, C.First, { skipElements: [e.relatedTarget, u] });
                  },
                  [et.Backwards]: () => {
                    x(t, C.Last, { skipElements: [e.relatedTarget, u] });
                  },
                });
            }),
            E = f(!!(2 & c), "focus-trap#tab-lock"),
            y = (0, Z.L)(),
            w = (0, r.useRef)(!1),
            F = (0, N.Ci)();
          return r.createElement(
            r.Fragment,
            null,
            E &&
              r.createElement(D, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: g,
                features: _.Focusable,
              }),
            F({
              ourProps: {
                ref: o,
                onKeyDown(e) {
                  "Tab" == e.key &&
                    ((w.current = !0),
                    y.requestAnimationFrame(() => {
                      w.current = !1;
                    }));
                },
                onBlur(e) {
                  if (!(4 & c)) return;
                  let t = el(s);
                  l.current instanceof HTMLElement && t.add(l.current);
                  let n = e.relatedTarget;
                  n instanceof HTMLElement &&
                    "true" !== n.dataset.headlessuiFocusGuard &&
                    (ea(t, n) ||
                      (w.current
                        ? x(
                            l.current,
                            (0, b.Y)(h.current, {
                              [et.Forwards]: () => C.Next,
                              [et.Backwards]: () => C.Previous,
                            }) | C.WrapAround,
                            { relativeTo: e.target }
                          )
                        : e.target instanceof HTMLElement && k(e.target)));
                },
              },
              theirProps: d,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            E &&
              r.createElement(D, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: g,
                features: _.Focusable,
              })
          );
        }),
        { features: eo }
      );
      function ea(e, t) {
        for (let n of e) if (n.contains(t)) return !0;
        return !1;
      }
      var eu = n(275);
      let es = r.Fragment,
        ec = (0, N.FX)(function (e, t) {
          let n = (0, r.useRef)(null),
            l = (0, X.P)(
              (0, X.a)((e) => {
                n.current = e;
              }),
              t
            ),
            o = R(n),
            i = (function (e) {
              let t = (0, r.useContext)(K),
                n = (0, r.useContext)(ef),
                l = R(e),
                [o, i] = (0, r.useState)(() => {
                  var e;
                  if (!t && null !== n)
                    return null != (e = n.current) ? e : null;
                  if (v._.isServer) return null;
                  let r =
                    null == l
                      ? void 0
                      : l.getElementById("headlessui-portal-root");
                  if (r) return r;
                  if (null === l) return null;
                  let o = l.createElement("div");
                  return (
                    o.setAttribute("id", "headlessui-portal-root"),
                    l.body.appendChild(o)
                  );
                });
              return (
                (0, r.useEffect)(() => {
                  null !== o &&
                    ((null != l && l.body.contains(o)) ||
                      null == l ||
                      l.body.appendChild(o));
                }, [o, l]),
                (0, r.useEffect)(() => {
                  t || (null !== n && i(n.current));
                }, [n, i, t]),
                o
              );
            })(n),
            [a] = (0, r.useState)(() => {
              var e;
              return v._.isServer
                ? null
                : null != (e = null == o ? void 0 : o.createElement("div"))
                ? e
                : null;
            }),
            u = (0, r.useContext)(em),
            c = (0, Y.g)();
          (0, s.s)(() => {
            !i ||
              !a ||
              i.contains(a) ||
              (a.setAttribute("data-headlessui-portal", ""), i.appendChild(a));
          }, [i, a]),
            (0, s.s)(() => {
              if (a && u) return u.register(a);
            }, [u, a]),
            ee(() => {
              var e;
              i &&
                a &&
                (a instanceof Node && i.contains(a) && i.removeChild(a),
                i.childNodes.length <= 0 &&
                  (null == (e = i.parentElement) || e.removeChild(i)));
            });
          let d = (0, N.Ci)();
          return c && i && a
            ? (0, eu.createPortal)(
                d({
                  ourProps: { ref: l },
                  theirProps: e,
                  slot: {},
                  defaultTag: es,
                  name: "Portal",
                }),
                a
              )
            : null;
        }),
        ed = r.Fragment,
        ef = (0, r.createContext)(null),
        em = (0, r.createContext)(null),
        ep = (0, N.FX)(function (e, t) {
          let n = (0, X.P)(t),
            { enabled: l = !0, ...o } = e,
            i = (0, N.Ci)();
          return l
            ? r.createElement(ec, { ...o, ref: n })
            : i({
                ourProps: { ref: n },
                theirProps: o,
                slot: {},
                defaultTag: es,
                name: "Portal",
              });
        }),
        ev = (0, N.FX)(function (e, t) {
          let { target: n, ...l } = e,
            o = { ref: (0, X.P)(t) },
            i = (0, N.Ci)();
          return r.createElement(
            ef.Provider,
            { value: n },
            i({
              ourProps: o,
              theirProps: l,
              defaultTag: ed,
              name: "Popover.Group",
            })
          );
        }),
        eh = Object.assign(ep, { Group: ev });
      var eg = n(4390),
        eE = ((e) => (
          (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
        ))(eE || {}),
        ey = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(ey || {});
      let eb = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        ew = (0, r.createContext)(null);
      function eF(e) {
        let t = (0, r.useContext)(ew);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Dialog /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, eF), t);
        }
        return t;
      }
      function eC(e, t) {
        return (0, b.Y)(t.type, eb, e, t);
      }
      ew.displayName = "DialogContext";
      let eA = (0, N.FX)(function (e, t) {
          var n;
          let a,
            u,
            d,
            v,
            g,
            E,
            F,
            C,
            A,
            P,
            S,
            k = (0, r.useId)(),
            {
              id: x = "headlessui-dialog-".concat(k),
              open: _,
              onClose: D,
              initialFocus: I,
              role: H = "dialog",
              autoFocus: V = !0,
              __demoMode: K = !1,
              unmount: G = !1,
              ...$
            } = e,
            Z = (0, r.useRef)(!1);
          H =
            "dialog" === H || "alertdialog" === H
              ? H
              : (Z.current ||
                  ((Z.current = !0),
                  console.warn(
                    "Invalid role [".concat(
                      H,
                      "] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead."
                    )
                  )),
                "dialog");
          let J = (0, B.O_)();
          void 0 === _ && null !== J && (_ = (J & B.Uw.Open) === B.Uw.Open);
          let Q = (0, r.useRef)(null),
            ee = (0, X.P)(Q, t),
            et = R(Q),
            en = _ ? 0 : 1,
            [er, el] = (0, r.useReducer)(eC, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, r.createRef)(),
            }),
            ea = (0, m._)(() => D(!1)),
            eu = (0, m._)((e) => el({ type: 0, id: e })),
            es = !!(0, Y.g)() && 0 === en,
            [ec, ed] =
              ((a = (0, r.useContext)(em)),
              (u = (0, r.useRef)([])),
              (d = (0, m._)(
                (e) => (u.current.push(e), a && a.register(e), () => v(e))
              )),
              (v = (0, m._)((e) => {
                let t = u.current.indexOf(e);
                -1 !== t && u.current.splice(t, 1), a && a.unregister(e);
              })),
              (g = (0, r.useMemo)(
                () => ({ register: d, unregister: v, portals: u }),
                [d, v, u]
              )),
              [
                u,
                (0, r.useMemo)(
                  () =>
                    function (e) {
                      let { children: t } = e;
                      return r.createElement(em.Provider, { value: g }, t);
                    },
                  [g]
                ),
              ]),
            ef = j(),
            { resolveContainers: ep } = (function () {
              let {
                  defaultContainers: e = [],
                  portals: t,
                  mainTreeNode: n,
                } = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
                r = R(n),
                l = (0, m._)(() => {
                  var l, o;
                  let i = [];
                  for (let t of e)
                    null !== t &&
                      (t instanceof HTMLElement
                        ? i.push(t)
                        : "current" in t &&
                          t.current instanceof HTMLElement &&
                          i.push(t.current));
                  if (null != t && t.current)
                    for (let e of t.current) i.push(e);
                  for (let e of null !=
                  (l =
                    null == r
                      ? void 0
                      : r.querySelectorAll("html > *, body > *"))
                    ? l
                    : [])
                    e !== document.body &&
                      e !== document.head &&
                      e instanceof HTMLElement &&
                      "headlessui-portal-root" !== e.id &&
                      ((n &&
                        (e.contains(n) ||
                          e.contains(
                            null == (o = null == n ? void 0 : n.getRootNode())
                              ? void 0
                              : o.host
                          ))) ||
                        i.some((t) => e.contains(t)) ||
                        i.push(e));
                  return i;
                });
              return {
                resolveContainers: l,
                contains: (0, m._)((e) => l().some((t) => t.contains(e))),
              };
            })({
              mainTreeNode: ef,
              portals: ec,
              defaultContainers: [
                {
                  get current() {
                    var eg;
                    return null != (eg = er.panelRef.current) ? eg : Q.current;
                  },
                },
              ],
            }),
            eE = null !== J && (J & B.Uw.Closing) === B.Uw.Closing;
          (function (e) {
            let { allowed: t, disallowed: n } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = f(e, "inert-others");
            (0, s.s)(() => {
              var e, l;
              if (!r) return;
              let o = (0, p.e)();
              for (let t of null != (e = null == n ? void 0 : n()) ? e : [])
                t && o.add(y(t));
              let i = null != (l = null == t ? void 0 : t()) ? l : [];
              for (let e of i) {
                if (!e) continue;
                let t = h(e);
                if (!t) continue;
                let n = e.parentElement;
                for (; n && n !== t.body; ) {
                  for (let e of n.children)
                    i.some((t) => e.contains(t)) || o.add(y(e));
                  n = n.parentElement;
                }
              }
              return o.dispose;
            }, [r, t, n]);
          })(!K && !eE && es, {
            allowed: (0, m._)(() => {
              var e, t;
              return [
                null !=
                (t =
                  null == (e = Q.current)
                    ? void 0
                    : e.closest("[data-headlessui-portal]"))
                  ? t
                  : null,
              ];
            }),
            disallowed: (0, m._)(() => {
              var e;
              return [
                null !=
                (e =
                  null == ef
                    ? void 0
                    : ef.closest("body > *:not(#headlessui-portal-root)"))
                  ? e
                  : null,
              ];
            }),
          }),
            (n = (e) => {
              e.preventDefault(), ea();
            }),
            (E = f(es, "outside-click")),
            (F = (0, o.Y)(n)),
            (C = (0, r.useCallback)(
              function (e, t) {
                if (e.defaultPrevented) return;
                let n = t(e);
                if (
                  null !== n &&
                  n.getRootNode().contains(n) &&
                  n.isConnected
                ) {
                  for (let t of (function e(t) {
                    return "function" == typeof t
                      ? e(t())
                      : Array.isArray(t) || t instanceof Set
                      ? t
                      : [t];
                  })(ep))
                    if (
                      null !== t &&
                      (t.contains(n) ||
                        (e.composed && e.composedPath().includes(t)))
                    )
                      return;
                  return (
                    (function (e) {
                      var t;
                      let n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0;
                      return (
                        e !== (null == (t = h(e)) ? void 0 : t.body) &&
                        (0, b.Y)(n, {
                          0: () => e.matches(w),
                          1() {
                            let t = e;
                            for (; null !== t; ) {
                              if (t.matches(w)) return !0;
                              t = t.parentElement;
                            }
                            return !1;
                          },
                        })
                      );
                    })(n, T.Loose) ||
                      -1 === n.tabIndex ||
                      e.preventDefault(),
                    F.current(e, n)
                  );
                }
              },
              [F, ep]
            )),
            (A = (0, r.useRef)(null)),
            O(
              E,
              "pointerdown",
              (e) => {
                var t, n;
                A.current =
                  (null ==
                  (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                    ? void 0
                    : n[0]) || e.target;
              },
              !0
            ),
            O(
              E,
              "mousedown",
              (e) => {
                var t, n;
                A.current =
                  (null ==
                  (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                    ? void 0
                    : n[0]) || e.target;
              },
              !0
            ),
            O(
              E,
              "click",
              (e) => {
                L() ||
                  /Android/gi.test(window.navigator.userAgent) ||
                  (A.current && (C(e, () => A.current), (A.current = null)));
              },
              !0
            ),
            (P = (0, r.useRef)({ x: 0, y: 0 })),
            O(
              E,
              "touchstart",
              (e) => {
                (P.current.x = e.touches[0].clientX),
                  (P.current.y = e.touches[0].clientY);
              },
              !0
            ),
            O(
              E,
              "touchend",
              (e) => {
                let t = {
                  x: e.changedTouches[0].clientX,
                  y: e.changedTouches[0].clientY,
                };
                if (
                  !(
                    Math.abs(t.x - P.current.x) >= 30 ||
                    Math.abs(t.y - P.current.y) >= 30
                  )
                )
                  return C(e, () =>
                    e.target instanceof HTMLElement ? e.target : null
                  );
              },
              !0
            ),
            M(
              E,
              "blur",
              (e) =>
                C(e, () =>
                  window.document.activeElement instanceof HTMLIFrameElement
                    ? window.document.activeElement
                    : null
                ),
              !0
            ),
            (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "undefined" != typeof document
                    ? document.defaultView
                    : null,
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = f(e, "escape");
              i(t, "keydown", (e) => {
                r && (e.defaultPrevented || (e.key === l.Escape && n(e)));
              });
            })(es, null == et ? void 0 : et.defaultView, (e) => {
              e.preventDefault(),
                e.stopPropagation(),
                document.activeElement &&
                  "blur" in document.activeElement &&
                  "function" == typeof document.activeElement.blur &&
                  document.activeElement.blur(),
                ea();
            }),
            (function (e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : () => [document.body];
              !(function (e, t) {
                let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : () => ({ containers: [] }),
                  r = c(U),
                  l = t ? r.get(t) : void 0;
                l && l.count,
                  (0, s.s)(() => {
                    if (!(!t || !e))
                      return (
                        U.dispatch("PUSH", t, n), () => U.dispatch("POP", t, n)
                      );
                  }, [e, t]);
              })(f(e, "scroll-lock"), t, (e) => {
                var t;
                return {
                  containers: [...(null != (t = e.containers) ? t : []), n],
                };
              });
            })(!K && !eE && es, et, ep),
            (S = (0, o.Y)((e) => {
              let t = e.getBoundingClientRect();
              0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && ea();
            })),
            (0, r.useEffect)(() => {
              if (!es) return;
              let e =
                null === Q ? null : Q instanceof HTMLElement ? Q : Q.current;
              if (!e) return;
              let t = (0, p.e)();
              if ("undefined" != typeof ResizeObserver) {
                let n = new ResizeObserver(() => S.current(e));
                n.observe(e), t.add(() => n.disconnect());
              }
              if ("undefined" != typeof IntersectionObserver) {
                let n = new IntersectionObserver(() => S.current(e));
                n.observe(e), t.add(() => n.disconnect());
              }
              return () => t.dispose();
            }, [Q, S, es]);
          let [ey, eb] = (function () {
              let [e, t] = (0, r.useState)([]);
              return [
                e.length > 0 ? e.join(" ") : void 0,
                (0, r.useMemo)(
                  () =>
                    function (e) {
                      let n = (0, m._)(
                          (e) => (
                            t((t) => [...t, e]),
                            () =>
                              t((t) => {
                                let n = t.slice(),
                                  r = n.indexOf(e);
                                return -1 !== r && n.splice(r, 1), n;
                              })
                          )
                        ),
                        l = (0, r.useMemo)(
                          () => ({
                            register: n,
                            slot: e.slot,
                            name: e.name,
                            props: e.props,
                            value: e.value,
                          }),
                          [n, e.slot, e.name, e.props, e.value]
                        );
                      return r.createElement(
                        z.Provider,
                        { value: l },
                        e.children
                      );
                    },
                  [t]
                ),
              ];
            })(),
            eF = (0, r.useMemo)(
              () => [
                { dialogState: en, close: ea, setTitleId: eu, unmount: G },
                er,
              ],
              [en, er, ea, eu, G]
            ),
            eA = (0, r.useMemo)(() => ({ open: 0 === en }), [en]),
            eS = {
              ref: ee,
              id: x,
              role: H,
              tabIndex: -1,
              "aria-modal": K ? void 0 : 0 === en || void 0,
              "aria-labelledby": er.titleId,
              "aria-describedby": ey,
              unmount: G,
            },
            ek = !(function () {
              var e;
              let [t] = (0, r.useState)(() =>
                  "undefined" != typeof window &&
                  "function" == typeof window.matchMedia
                    ? window.matchMedia("(pointer: coarse)")
                    : null
                ),
                [n, l] = (0, r.useState)(
                  null != (e = null == t ? void 0 : t.matches) && e
                );
              return (
                (0, s.s)(() => {
                  if (t)
                    return (
                      t.addEventListener("change", e),
                      () => t.removeEventListener("change", e)
                    );
                  function e(e) {
                    l(e.matches);
                  }
                }, [t]),
                n
              );
            })(),
            ex = eo.None;
          es &&
            !K &&
            ((ex |= eo.RestoreFocus),
            (ex |= eo.TabLock),
            V && (ex |= eo.AutoFocus),
            ek && (ex |= eo.InitialFocus));
          let eL = (0, N.Ci)();
          return r.createElement(
            B.$x,
            null,
            r.createElement(
              W,
              { force: !0 },
              r.createElement(
                eh,
                null,
                r.createElement(
                  ew.Provider,
                  { value: eF },
                  r.createElement(
                    ev,
                    { target: Q },
                    r.createElement(
                      W,
                      { force: !1 },
                      r.createElement(
                        eb,
                        { slot: eA },
                        r.createElement(
                          ed,
                          null,
                          r.createElement(
                            ei,
                            {
                              initialFocus: I,
                              initialFocusFallback: Q,
                              containers: ep,
                              features: ex,
                            },
                            r.createElement(
                              q,
                              { value: ea },
                              eL({
                                ourProps: eS,
                                theirProps: $,
                                slot: eA,
                                defaultTag: eP,
                                features: eT,
                                visible: 0 === en,
                                name: "Dialog",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        eP = "div",
        eT = N.Ac.RenderStrategy | N.Ac.Static,
        eS = (0, N.FX)(function (e, t) {
          let { transition: n = !1, open: l, ...o } = e,
            i = (0, B.O_)(),
            a = e.hasOwnProperty("open") || null !== i,
            u = e.hasOwnProperty("onClose");
          if (!a && !u)
            throw Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            );
          if (!a)
            throw Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            );
          if (!u)
            throw Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
            );
          if (!i && "boolean" != typeof e.open)
            throw Error(
              "You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(
                e.open
              )
            );
          if ("function" != typeof e.onClose)
            throw Error(
              "You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(
                e.onClose
              )
            );
          return (void 0 !== l || n) && !o.static
            ? r.createElement(
                H,
                null,
                r.createElement(
                  eg.e,
                  { show: l, transition: n, unmount: o.unmount },
                  r.createElement(eA, { ref: t, ...o })
                )
              )
            : r.createElement(
                H,
                null,
                r.createElement(eA, { ref: t, open: l, ...o })
              );
        }),
        ek = (0, N.FX)(function (e, t) {
          let n = (0, r.useId)(),
            {
              id: l = "headlessui-dialog-panel-".concat(n),
              transition: o = !1,
              ...i
            } = e,
            [{ dialogState: a, unmount: u }, s] = eF("Dialog.Panel"),
            c = (0, X.P)(t, s.panelRef),
            d = (0, r.useMemo)(() => ({ open: 0 === a }), [a]),
            f = (0, m._)((e) => {
              e.stopPropagation();
            }),
            p = o ? eg._ : r.Fragment,
            v = (0, N.Ci)();
          return r.createElement(
            p,
            { ...(o ? { unmount: u } : {}) },
            v({
              ourProps: { ref: c, id: l, onClick: f },
              theirProps: i,
              slot: d,
              defaultTag: "div",
              name: "Dialog.Panel",
            })
          );
        }),
        ex =
          ((0, N.FX)(function (e, t) {
            let { transition: n = !1, ...l } = e,
              [{ dialogState: o, unmount: i }] = eF("Dialog.Backdrop"),
              a = (0, r.useMemo)(() => ({ open: 0 === o }), [o]),
              u = n ? eg._ : r.Fragment,
              s = (0, N.Ci)();
            return r.createElement(
              u,
              { ...(n ? { unmount: i } : {}) },
              s({
                ourProps: { ref: t, "aria-hidden": !0 },
                theirProps: l,
                slot: a,
                defaultTag: "div",
                name: "Dialog.Backdrop",
              })
            );
          }),
          (0, N.FX)(function (e, t) {
            let n = (0, r.useId)(),
              { id: l = "headlessui-dialog-title-".concat(n), ...o } = e,
              [{ dialogState: i, setTitleId: a }] = eF("Dialog.Title"),
              u = (0, X.P)(t);
            (0, r.useEffect)(() => (a(l), () => a(null)), [l, a]);
            let s = (0, r.useMemo)(() => ({ open: 0 === i }), [i]);
            return (0, N.Ci)()({
              ourProps: { ref: u, id: l },
              theirProps: o,
              slot: s,
              defaultTag: "h2",
              name: "Dialog.Title",
            });
          })),
        eL = Object.assign(eS, { Panel: ek, Title: ex, Description: $ });
    },
    4390: (e, t, n) => {
      n.d(t, { e: () => O, _: () => L });
      var r,
        l,
        o = n(5750),
        i = n(5462),
        a = n(8149),
        u = n(378),
        s = n(55),
        c = n(8688),
        d = n(6426),
        f = n(6209),
        m = n(3157),
        p = n(5173);
      void 0 !== p &&
        "undefined" != typeof globalThis &&
        "undefined" != typeof Element &&
        (null == (r = null == p ? void 0 : p.env) ? void 0 : r.NODE_ENV) ===
          "test" &&
        void 0 ===
          (null == (l = null == Element ? void 0 : Element.prototype)
            ? void 0
            : l.getAnimations) &&
        (Element.prototype.getAnimations = function () {
          return (
            console.warn(
              "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.\nPlease install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.\n\nExample usage:\n```js\nimport { mockAnimationsApi } from 'jsdom-testing-mocks'\nmockAnimationsApi()\n```"
            ),
            []
          );
        });
      var v = ((e) => (
          (e[(e.None = 0)] = "None"),
          (e[(e.Closed = 1)] = "Closed"),
          (e[(e.Enter = 2)] = "Enter"),
          (e[(e.Leave = 4)] = "Leave"),
          e
        ))(v || {}),
        h = n(9997),
        g = n(6483),
        E = n(2071),
        y = n(9538);
      function b(e) {
        var t;
        return (
          !!(
            e.enter ||
            e.enterFrom ||
            e.enterTo ||
            e.leave ||
            e.leaveFrom ||
            e.leaveTo
          ) ||
          (null != (t = e.as) ? t : T) !== o.Fragment ||
          1 === o.Children.count(e.children)
        );
      }
      let w = (0, o.createContext)(null);
      w.displayName = "TransitionContext";
      var F = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(
        F || {}
      );
      let C = (0, o.createContext)(null);
      function A(e) {
        return "children" in e
          ? A(e.children)
          : e.current
              .filter((e) => {
                let { el: t } = e;
                return null !== t.current;
              })
              .filter((e) => {
                let { state: t } = e;
                return "visible" === t;
              }).length > 0;
      }
      function P(e, t) {
        let n = (0, c.Y)(e),
          r = (0, o.useRef)([]),
          l = (0, u.a)(),
          s = (0, i.L)(),
          d = (0, a._)(function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : y.mK.Hidden,
              o = r.current.findIndex((t) => {
                let { el: n } = t;
                return n === e;
              });
            -1 !== o &&
              ((0, E.Y)(t, {
                [y.mK.Unmount]() {
                  r.current.splice(o, 1);
                },
                [y.mK.Hidden]() {
                  r.current[o].state = "hidden";
                },
              }),
              s.microTask(() => {
                var e;
                !A(r) && l.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          f = (0, a._)((e) => {
            let t = r.current.find((t) => {
              let { el: n } = t;
              return n === e;
            });
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : r.current.push({ el: e, state: "visible" }),
              () => d(e, y.mK.Unmount)
            );
          }),
          m = (0, o.useRef)([]),
          p = (0, o.useRef)(Promise.resolve()),
          v = (0, o.useRef)({ enter: [], leave: [] }),
          h = (0, a._)((e, n, r) => {
            m.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter((t) => {
                  let [n] = t;
                  return n !== e;
                })),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    m.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    Promise.all(
                      v.current[n].map((e) => {
                        let [t, n] = e;
                        return n;
                      })
                    ).then(() => e());
                  }),
                ]),
              "enter" === n
                ? (p.current = p.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => r(n)))
                : r(n);
          }),
          g = (0, a._)((e, t, n) => {
            Promise.all(
              v.current[t].splice(0).map((e) => {
                let [t, n] = e;
                return n;
              })
            )
              .then(() => {
                var e;
                null == (e = m.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, o.useMemo)(
          () => ({
            children: r,
            register: f,
            unregister: d,
            onStart: h,
            onStop: g,
            wait: p,
            chains: v,
          }),
          [f, d, r, h, g, v, p]
        );
      }
      C.displayName = "NestingContext";
      let T = o.Fragment,
        S = y.Ac.RenderStrategy,
        k = (0, y.FX)(function (e, t) {
          let { show: n, appear: r = !1, unmount: l = !0, ...i } = e,
            u = (0, o.useRef)(null),
            c = b(e),
            m = (0, f.P)(...(c ? [u, t] : null === t ? [] : [t]));
          (0, d.g)();
          let p = (0, h.O_)();
          if (
            (void 0 === n && null !== p && (n = (p & h.Uw.Open) === h.Uw.Open),
            void 0 === n)
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          let [v, g] = (0, o.useState)(n ? "visible" : "hidden"),
            E = P(() => {
              n || g("hidden");
            }),
            [F, T] = (0, o.useState)(!0),
            k = (0, o.useRef)([n]);
          (0, s.s)(() => {
            !1 !== F &&
              k.current[k.current.length - 1] !== n &&
              (k.current.push(n), T(!1));
          }, [k, n]);
          let L = (0, o.useMemo)(
            () => ({ show: n, appear: r, initial: F }),
            [n, r, F]
          );
          (0, s.s)(() => {
            n ? g("visible") : A(E) || null === u.current || g("hidden");
          }, [n, E]);
          let O = { unmount: l },
            M = (0, a._)(() => {
              var t;
              F && T(!1), null == (t = e.beforeEnter) || t.call(e);
            }),
            R = (0, a._)(() => {
              var t;
              F && T(!1), null == (t = e.beforeLeave) || t.call(e);
            }),
            N = (0, y.Ci)();
          return o.createElement(
            C.Provider,
            { value: E },
            o.createElement(
              w.Provider,
              { value: L },
              N({
                ourProps: {
                  ...O,
                  as: o.Fragment,
                  children: o.createElement(x, {
                    ref: m,
                    ...O,
                    ...i,
                    beforeEnter: M,
                    beforeLeave: R,
                  }),
                },
                theirProps: {},
                defaultTag: o.Fragment,
                features: S,
                visible: "visible" === v,
                name: "Transition",
              })
            )
          );
        }),
        x = (0, y.FX)(function (e, t) {
          var n, r;
          let {
              transition: l = !0,
              beforeEnter: u,
              afterEnter: c,
              beforeLeave: p,
              afterLeave: v,
              enter: F,
              enterFrom: k,
              enterTo: x,
              entered: L,
              leave: O,
              leaveFrom: M,
              leaveTo: R,
              ...N
            } = e,
            [_, D] = (0, o.useState)(null),
            I = (0, o.useRef)(null),
            H = b(e),
            j = (0, f.P)(...(H ? [I, t, D] : null === t ? [] : [t])),
            U = null == (n = N.unmount) || n ? y.mK.Unmount : y.mK.Hidden,
            {
              show: Y,
              appear: X,
              initial: V,
            } = (function () {
              let e = (0, o.useContext)(w);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            [q, B] = (0, o.useState)(Y ? "visible" : "hidden"),
            K = (function () {
              let e = (0, o.useContext)(C);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            { register: W, unregister: G } = K;
          (0, s.s)(() => W(I), [W, I]),
            (0, s.s)(() => {
              if (U === y.mK.Hidden && I.current) {
                if (Y && "visible" !== q) {
                  B("visible");
                  return;
                }
                return (0, E.Y)(q, { hidden: () => G(I), visible: () => W(I) });
              }
            }, [q, I, W, G, Y, U]);
          let z = (0, d.g)();
          (0, s.s)(() => {
            if (H && z && "visible" === q && null === I.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }, [I, q, z, H]);
          let $ = V && !X,
            Z = X && Y && V,
            J = (0, o.useRef)(!1),
            Q = P(() => {
              J.current || (B("hidden"), G(I));
            }, K),
            ee = (0, a._)((e) => {
              (J.current = !0),
                Q.onStart(I, e ? "enter" : "leave", (e) => {
                  "enter" === e
                    ? null == u || u()
                    : "leave" === e && (null == p || p());
                });
            }),
            et = (0, a._)((e) => {
              let t = e ? "enter" : "leave";
              (J.current = !1),
                Q.onStop(I, t, (e) => {
                  "enter" === e
                    ? null == c || c()
                    : "leave" === e && (null == v || v());
                }),
                "leave" !== t || A(Q) || (B("hidden"), G(I));
            });
          (0, o.useEffect)(() => {
            (H && l) || (ee(Y), et(Y));
          }, [Y, H, l]);
          let [, en] = (function (e, t, n, r) {
              let [l, a] = (0, o.useState)(n),
                {
                  hasFlag: u,
                  addFlag: c,
                  removeFlag: d,
                } = (function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    [t, n] = (0, o.useState)(e),
                    r = (0, o.useCallback)((e) => n(e), [t]),
                    l = (0, o.useCallback)((e) => n((t) => t | e), [t]),
                    i = (0, o.useCallback)((e) => (t & e) === e, [t]);
                  return {
                    flags: t,
                    setFlag: r,
                    addFlag: l,
                    hasFlag: i,
                    removeFlag: (0, o.useCallback)(
                      (e) => n((t) => t & ~e),
                      [n]
                    ),
                    toggleFlag: (0, o.useCallback)((e) => n((t) => t ^ e), [n]),
                  };
                })(e && l ? 3 : 0),
                f = (0, o.useRef)(!1),
                p = (0, o.useRef)(!1),
                v = (0, i.L)();
              return (
                (0, s.s)(() => {
                  var l;
                  if (e) {
                    if ((n && a(!0), !t)) {
                      n && c(3);
                      return;
                    }
                    return (
                      null == (l = null == r ? void 0 : r.start) ||
                        l.call(r, n),
                      (function (e, t) {
                        let { prepare: n, run: r, done: l, inFlight: o } = t,
                          i = (0, m.e)();
                        return (
                          (function (e, t) {
                            let { inFlight: n, prepare: r } = t;
                            if (null != n && n.current) {
                              r();
                              return;
                            }
                            let l = e.style.transition;
                            (e.style.transition = "none"),
                              r(),
                              e.offsetHeight,
                              (e.style.transition = l);
                          })(e, { prepare: n, inFlight: o }),
                          i.nextFrame(() => {
                            r(),
                              i.requestAnimationFrame(() => {
                                i.add(
                                  (function (e, t) {
                                    var n, r;
                                    let l = (0, m.e)();
                                    if (!e) return l.dispose;
                                    let o = !1;
                                    l.add(() => {
                                      o = !0;
                                    });
                                    let i =
                                      null !=
                                      (r =
                                        null == (n = e.getAnimations)
                                          ? void 0
                                          : n
                                              .call(e)
                                              .filter(
                                                (e) =>
                                                  e instanceof CSSTransition
                                              ))
                                        ? r
                                        : [];
                                    return (
                                      0 === i.length
                                        ? t()
                                        : Promise.allSettled(
                                            i.map((e) => e.finished)
                                          ).then(() => {
                                            o || t();
                                          }),
                                      l.dispose
                                    );
                                  })(e, l)
                                );
                              });
                          }),
                          i.dispose
                        );
                      })(t, {
                        inFlight: f,
                        prepare() {
                          p.current
                            ? (p.current = !1)
                            : (p.current = f.current),
                            (f.current = !0),
                            p.current || (n ? (c(3), d(4)) : (c(4), d(2)));
                        },
                        run() {
                          p.current
                            ? n
                              ? (d(3), c(4))
                              : (d(4), c(3))
                            : n
                            ? d(1)
                            : c(1);
                        },
                        done() {
                          var e;
                          (p.current &&
                            "function" == typeof t.getAnimations &&
                            t.getAnimations().length > 0) ||
                            ((f.current = !1),
                            d(7),
                            n || a(!1),
                            null == (e = null == r ? void 0 : r.end) ||
                              e.call(r, n));
                        },
                      })
                    );
                  }
                }, [e, n, t, v]),
                e
                  ? [
                      l,
                      {
                        closed: u(1),
                        enter: u(2),
                        leave: u(4),
                        transition: u(2) || u(4),
                      },
                    ]
                  : [
                      n,
                      {
                        closed: void 0,
                        enter: void 0,
                        leave: void 0,
                        transition: void 0,
                      },
                    ]
              );
            })(!(!l || !H || !z || $), _, Y, { start: ee, end: et }),
            er = (0, y.oE)({
              ref: j,
              className:
                (null ==
                (r = (0, g.x)(
                  N.className,
                  Z && F,
                  Z && k,
                  en.enter && F,
                  en.enter && en.closed && k,
                  en.enter && !en.closed && x,
                  en.leave && O,
                  en.leave && !en.closed && M,
                  en.leave && en.closed && R,
                  !en.transition && Y && L
                ))
                  ? void 0
                  : r.trim()) || void 0,
              ...(function (e) {
                let t = {};
                for (let n in e) !0 === e[n] && (t["data-".concat(n)] = "");
                return t;
              })(en),
            }),
            el = 0;
          "visible" === q && (el |= h.Uw.Open),
            "hidden" === q && (el |= h.Uw.Closed),
            en.enter && (el |= h.Uw.Opening),
            en.leave && (el |= h.Uw.Closing);
          let eo = (0, y.Ci)();
          return o.createElement(
            C.Provider,
            { value: Q },
            o.createElement(
              h.El,
              { value: el },
              eo({
                ourProps: er,
                theirProps: N,
                defaultTag: T,
                features: S,
                visible: "visible" === q,
                name: "Transition.Child",
              })
            )
          );
        }),
        L = (0, y.FX)(function (e, t) {
          let n = null !== (0, o.useContext)(w),
            r = null !== (0, h.O_)();
          return o.createElement(
            o.Fragment,
            null,
            !n && r
              ? o.createElement(k, { ref: t, ...e })
              : o.createElement(x, { ref: t, ...e })
          );
        }),
        O = Object.assign(k, { Child: L, Root: k });
    },
    5462: (e, t, n) => {
      n.d(t, { L: () => o });
      var r = n(5750),
        l = n(3157);
      function o() {
        let [e] = (0, r.useState)(l.e);
        return (0, r.useEffect)(() => () => e.dispose(), [e]), e;
      }
    },
    8149: (e, t, n) => {
      n.d(t, { _: () => o });
      var r = n(5750),
        l = n(8688);
      let o = function (e) {
        let t = (0, l.Y)(e);
        return r.useCallback(
          function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return t.current(...n);
          },
          [t]
        );
      };
    },
    378: (e, t, n) => {
      n.d(t, { a: () => o });
      var r = n(5750),
        l = n(55);
      function o() {
        let e = (0, r.useRef)(!1);
        return (
          (0, l.s)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
    },
    55: (e, t, n) => {
      n.d(t, { s: () => o });
      var r = n(5750),
        l = n(4833);
      let o = (e, t) => {
        l._.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
      };
    },
    8688: (e, t, n) => {
      n.d(t, { Y: () => o });
      var r = n(5750),
        l = n(55);
      function o(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, l.s)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    6426: (e, t, n) => {
      n.d(t, { g: () => i });
      var r,
        l = n(5750),
        o = n(4833);
      function i() {
        let e;
        let t =
            ((e = "undefined" == typeof document),
            (0, (r || (r = n.t(l, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !e
            )),
          [i, a] = l.useState(o._.isHandoffComplete);
        return (
          i && !1 === o._.isHandoffComplete && a(!1),
          l.useEffect(() => {
            !0 !== i && a(!0);
          }, [i]),
          l.useEffect(() => o._.handoff(), []),
          !t && i
        );
      }
    },
    6209: (e, t, n) => {
      n.d(t, { P: () => a, a: () => i });
      var r = n(5750),
        l = n(8149);
      let o = Symbol();
      function i(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return Object.assign(e, { [o]: t });
      }
      function a() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        let i = (0, r.useRef)(t);
        (0, r.useEffect)(() => {
          i.current = t;
        }, [t]);
        let a = (0, l._)((e) => {
          for (let t of i.current)
            null != t && ("function" == typeof t ? t(e) : (t.current = e));
        });
        return t.every((e) => null == e || (null == e ? void 0 : e[o]))
          ? void 0
          : a;
      }
    },
    9997: (e, t, n) => {
      n.d(t, { $x: () => u, El: () => a, O_: () => i, Uw: () => o });
      var r = n(5750);
      let l = (0, r.createContext)(null);
      l.displayName = "OpenClosedContext";
      var o = ((e) => (
        (e[(e.Open = 1)] = "Open"),
        (e[(e.Closed = 2)] = "Closed"),
        (e[(e.Closing = 4)] = "Closing"),
        (e[(e.Opening = 8)] = "Opening"),
        e
      ))(o || {});
      function i() {
        return (0, r.useContext)(l);
      }
      function a(e) {
        let { value: t, children: n } = e;
        return r.createElement(l.Provider, { value: t }, n);
      }
      function u(e) {
        let { children: t } = e;
        return r.createElement(l.Provider, { value: null }, t);
      }
    },
    6483: (e, t, n) => {
      n.d(t, { x: () => r });
      function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return Array.from(
          new Set(t.flatMap((e) => ("string" == typeof e ? e.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
    },
    3157: (e, t, n) => {
      n.d(t, {
        e: () =>
          function e() {
            let t = [],
              n = {
                addEventListener: (e, t, r, l) => (
                  e.addEventListener(t, r, l),
                  n.add(() => e.removeEventListener(t, r, l))
                ),
                requestAnimationFrame() {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  let l = requestAnimationFrame(...t);
                  return n.add(() => cancelAnimationFrame(l));
                },
                nextFrame() {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return n.requestAnimationFrame(() =>
                    n.requestAnimationFrame(...t)
                  );
                },
                setTimeout() {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  let l = setTimeout(...t);
                  return n.add(() => clearTimeout(l));
                },
                microTask() {
                  for (
                    var e = arguments.length, t = Array(e), l = 0;
                    l < e;
                    l++
                  )
                    t[l] = arguments[l];
                  let o = { current: !0 };
                  return (
                    (0, r._)(() => {
                      o.current && t[0]();
                    }),
                    n.add(() => {
                      o.current = !1;
                    })
                  );
                },
                style(e, t, n) {
                  let r = e.style.getPropertyValue(t);
                  return (
                    Object.assign(e.style, { [t]: n }),
                    this.add(() => {
                      Object.assign(e.style, { [t]: r });
                    })
                  );
                },
                group(t) {
                  let n = e();
                  return t(n), this.add(() => n.dispose());
                },
                add: (e) => (
                  t.includes(e) || t.push(e),
                  () => {
                    let n = t.indexOf(e);
                    if (n >= 0) for (let e of t.splice(n, 1)) e();
                  }
                ),
                dispose() {
                  for (let e of t.splice(0)) e();
                },
              };
            return n;
          },
      });
      var r = n(9672);
    },
    4833: (e, t, n) => {
      n.d(t, { _: () => a });
      var r = Object.defineProperty,
        l = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        o = (e, t, n) => (l(e, "symbol" != typeof t ? t + "" : t, n), n);
      class i {
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
        constructor() {
          o(this, "current", this.detect()),
            o(this, "handoffState", "pending"),
            o(this, "currentId", 0);
        }
      }
      let a = new i();
    },
    2071: (e, t, n) => {
      n.d(t, { Y: () => r });
      function r(e, t) {
        for (
          var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          l[o - 2] = arguments[o];
        if (e in t) {
          let n = t[e];
          return "function" == typeof n ? n(...l) : n;
        }
        let i = Error(
          'Tried to handle "'
            .concat(
              e,
              '" but there is no handler defined. Only defined handlers are: '
            )
            .concat(
              Object.keys(t)
                .map((e) => '"'.concat(e, '"'))
                .join(", "),
              "."
            )
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(i, r), i);
      }
    },
    9672: (e, t, n) => {
      n.d(t, { _: () => r });
      function r(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
    },
    9538: (e, t, n) => {
      n.d(t, {
        Ac: () => i,
        Ci: () => u,
        FX: () => f,
        mK: () => a,
        oE: () => m,
      });
      var r = n(5750),
        l = n(6483),
        o = n(2071),
        i = ((e) => (
          (e[(e.None = 0)] = "None"),
          (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
          (e[(e.Static = 2)] = "Static"),
          e
        ))(i || {}),
        a = ((e) => (
          (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
        ))(a || {});
      function u() {
        let e, t;
        let n =
          ((e = (0, r.useRef)([])),
          (t = (0, r.useCallback)((t) => {
            for (let n of e.current)
              null != n && ("function" == typeof n ? n(t) : (n.current = t));
          }, [])),
          function () {
            for (var n = arguments.length, r = Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            if (!r.every((e) => null == e)) return (e.current = r), t;
          });
        return (0, r.useCallback)(
          (e) =>
            (function (e) {
              let {
                ourProps: t,
                theirProps: n,
                slot: r,
                defaultTag: l,
                features: i,
                visible: a = !0,
                name: u,
                mergeRefs: f,
              } = e;
              f = null != f ? f : c;
              let m = d(n, t);
              if (a) return s(m, r, l, u, f);
              let p = null != i ? i : 0;
              if (2 & p) {
                let { static: e = !1, ...t } = m;
                if (e) return s(t, r, l, u, f);
              }
              if (1 & p) {
                let { unmount: e = !0, ...t } = m;
                return (0, o.Y)(e ? 0 : 1, {
                  0: () => null,
                  1: () =>
                    s(
                      { ...t, hidden: !0, style: { display: "none" } },
                      r,
                      l,
                      u,
                      f
                    ),
                });
              }
              return s(m, r, l, u, f);
            })({ mergeRefs: n, ...e }),
          [n]
        );
      }
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          o = arguments.length > 3 ? arguments[3] : void 0,
          i = arguments.length > 4 ? arguments[4] : void 0,
          {
            as: a = n,
            children: u,
            refName: s = "ref",
            ...c
          } = p(e, ["unmount", "static"]),
          f = void 0 !== e.ref ? { [s]: e.ref } : {},
          v = "function" == typeof u ? u(t) : u;
        "className" in c &&
          c.className &&
          "function" == typeof c.className &&
          (c.className = c.className(t)),
          c["aria-labelledby"] &&
            c["aria-labelledby"] === c.id &&
            (c["aria-labelledby"] = void 0);
        let h = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, l] of Object.entries(t))
            "boolean" == typeof l && (e = !0),
              !0 === l &&
                n.push(
                  r.replace(/([A-Z])/g, (e) => "-".concat(e.toLowerCase()))
                );
          if (e)
            for (let e of ((h["data-headlessui-state"] = n.join(" ")), n))
              h["data-".concat(e)] = "";
        }
        if (
          a === r.Fragment &&
          (Object.keys(m(c)).length > 0 || Object.keys(m(h)).length > 0)
        ) {
          if (!(0, r.isValidElement)(v) || (Array.isArray(v) && v.length > 1)) {
            if (Object.keys(m(c)).length > 0)
              throw Error(
                [
                  'Passing props on "Fragment"!',
                  "",
                  "The current component <".concat(
                    o,
                    ' /> is rendering a "Fragment".'
                  ),
                  "However we need to passthrough the following props:",
                  Object.keys(m(c))
                    .concat(Object.keys(m(h)))
                    .map((e) => "  - ".concat(e))
                    .join("\n"),
                  "",
                  "You can apply a few solutions:",
                  [
                    'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                    "Render a single element as the child so that we can forward the props onto that element.",
                  ]
                    .map((e) => "  - ".concat(e))
                    .join("\n"),
                ].join("\n")
              );
          } else {
            let e = v.props,
              t = null == e ? void 0 : e.className,
              n =
                "function" == typeof t
                  ? function () {
                      for (
                        var e = arguments.length, n = Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      return (0, l.x)(t(...n), c.className);
                    }
                  : (0, l.x)(t, c.className),
              o = d(v.props, m(p(c, ["ref"])));
            for (let e in h) e in o && delete h[e];
            return (0, r.cloneElement)(
              v,
              Object.assign(
                {},
                o,
                h,
                f,
                {
                  ref: i(
                    r.version.split(".")[0] >= "19" ? v.props.ref : v.ref,
                    f.ref
                  ),
                },
                n ? { className: n } : {}
              )
            );
          }
        }
        return (0, r.createElement)(
          a,
          Object.assign(
            {},
            p(c, ["ref"]),
            a !== r.Fragment && f,
            a !== r.Fragment && h
          ),
          v
        );
      }
      function c() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.every((e) => null == e)
          ? void 0
          : (e) => {
              for (let n of t)
                null != n && ("function" == typeof n ? n(e) : (n.current = e));
            };
      }
      function d() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        let r = {},
          l = {};
        for (let e of t)
          for (let t in e)
            t.startsWith("on") && "function" == typeof e[t]
              ? (null != l[t] || (l[t] = []), l[t].push(e[t]))
              : (r[t] = e[t]);
        if (r.disabled || r["aria-disabled"])
          for (let e in l)
            /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e) &&
              (l[e] = [
                (e) => {
                  var t;
                  return null == (t = null == e ? void 0 : e.preventDefault)
                    ? void 0
                    : t.call(e);
                },
              ]);
        for (let e in l)
          Object.assign(r, {
            [e](t) {
              for (
                var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              for (let n of l[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                n(t, ...r);
              }
            },
          });
        return r;
      }
      function f(e) {
        var t;
        return Object.assign((0, r.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function m(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function p(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
    },
    9962: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(709).A)("Briefcase", [
        [
          "path",
          { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" },
        ],
        [
          "rect",
          { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
        ],
      ]);
    },
    8016: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(709).A)("Gift", [
        [
          "rect",
          { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" },
        ],
        ["path", { d: "M12 8v13", key: "1c76mn" }],
        [
          "path",
          { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" },
        ],
        [
          "path",
          {
            d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
            key: "1ihvrl",
          },
        ],
      ]);
    },
    3231: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(709).A)("MessageSquare", [
        [
          "path",
          {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            key: "1lielz",
          },
        ],
      ]);
    },
    9549: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(709).A)("Palette", [
        [
          "circle",
          {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w",
          },
        ],
        [
          "circle",
          {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f",
          },
        ],
        [
          "circle",
          {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn",
          },
        ],
        [
          "circle",
          {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx",
          },
        ],
        [
          "path",
          {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8",
          },
        ],
      ]);
    },
    7934: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(709).A)("Rocket", [
        [
          "path",
          {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz",
          },
        ],
        [
          "path",
          {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk",
          },
        ],
        [
          "path",
          { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" },
        ],
        [
          "path",
          { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" },
        ],
      ]);
    },
    1587: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(709).A)("Shield", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
      ]);
    },
  },
]);
