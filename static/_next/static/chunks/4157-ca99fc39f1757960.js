"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4157],
  {
    7118: (e, t, n) => {
      n.d(t, { default: () => o.a });
      var r = n(8845),
        o = n.n(r);
    },
    8845: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return a;
          },
        });
      let r = n(634),
        o = n(6403),
        l = n(9303),
        i = r._(n(6102));
      function a(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let s = l.Image;
    },
    46: (e, t, n) => {
      function r() {
        return "undefined" != typeof window;
      }
      function o() {
        return (r() ? window.vam : "production") || "production";
      }
      function l() {
        return "production" === o();
      }
      function i(e, t, n) {
        var i, a;
        if (!r()) {
          let e =
            "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
          if (l()) console.warn(e);
          else throw Error(e);
          return;
        }
        if (!t) {
          null == (i = window.va) ||
            i.call(window, "event", { name: e, options: n });
          return;
        }
        try {
          let r = (function (e, t) {
            if (!e) return;
            let n = e,
              r = [];
            for (let [o, l] of Object.entries(e))
              "object" == typeof l &&
                null !== l &&
                (t.strip
                  ? (n = (function (e, { [e]: t, ...n }) {
                      return n;
                    })(o, n))
                  : r.push(o));
            if (r.length > 0 && !t.strip)
              throw Error(
                `The following properties are not valid: ${r.join(
                  ", "
                )}. Only strings, numbers, booleans, and null are allowed.`
              );
            return n;
          })(t, { strip: l() });
          null == (a = window.va) ||
            a.call(window, "event", { name: e, data: r, options: n });
        } catch (e) {
          e instanceof Error && "development" === o() && console.error(e);
        }
      }
      n.d(t, { u4: () => i });
    },
    8681: (e, t, n) => {
      n.d(t, { N: () => w });
      var r = n(7558),
        o = n(5750),
        l = n(1965),
        i = n(2909),
        a = n(9845),
        s = n(2924);
      class u extends o.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = t.offsetParent,
              n = (e instanceof HTMLElement && e.offsetWidth) || 0,
              r = this.props.sizeRef.current;
            (r.height = t.offsetHeight || 0),
              (r.width = t.offsetWidth || 0),
              (r.top = t.offsetTop),
              (r.left = t.offsetLeft),
              (r.right = n - r.width - r.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c(e) {
        let { children: t, isPresent: n, anchorX: l } = e,
          i = (0, o.useId)(),
          a = (0, o.useRef)(null),
          c = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: d } = (0, o.useContext)(s.Q);
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: e, height: t, top: r, left: o, right: s } = c.current;
            if (n || !a.current || !e || !t) return;
            a.current.dataset.motionPopId = i;
            let u = document.createElement("style");
            return (
              d && (u.nonce = d),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      i,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            ")
                    .concat(
                      "left" === l ? "left: ".concat(o) : "right: ".concat(s),
                      "px !important;\n            top: "
                    )
                    .concat(r, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [n]),
          (0, r.jsx)(u, {
            isPresent: n,
            childRef: a,
            sizeRef: c,
            children: o.cloneElement(t, { ref: a }),
          })
        );
      }
      let d = (e) => {
        let {
            children: t,
            initial: n,
            isPresent: l,
            onExitComplete: s,
            custom: u,
            presenceAffectsLayout: d,
            mode: h,
            anchorX: p,
          } = e,
          m = (0, i.M)(f),
          g = (0, o.useId)(),
          w = (0, o.useCallback)(
            (e) => {
              for (let t of (m.set(e, !0), m.values())) if (!t) return;
              s && s();
            },
            [m, s]
          ),
          v = (0, o.useMemo)(
            () => ({
              id: g,
              initial: n,
              isPresent: l,
              custom: u,
              onExitComplete: w,
              register: (e) => (m.set(e, !1), () => m.delete(e)),
            }),
            d ? [Math.random(), w] : [l, w]
          );
        return (
          (0, o.useMemo)(() => {
            m.forEach((e, t) => m.set(t, !1));
          }, [l]),
          o.useEffect(() => {
            l || m.size || !s || s();
          }, [l]),
          "popLayout" === h &&
            (t = (0, r.jsx)(c, { isPresent: l, anchorX: p, children: t })),
          (0, r.jsx)(a.t.Provider, { value: v, children: t })
        );
      };
      function f() {
        return new Map();
      }
      var h = n(3322);
      let p = (e) => e.key || "";
      function m(e) {
        let t = [];
        return (
          o.Children.forEach(e, (e) => {
            (0, o.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var g = n(8142);
      let w = (e) => {
        let {
            children: t,
            custom: n,
            initial: a = !0,
            onExitComplete: s,
            presenceAffectsLayout: u = !0,
            mode: c = "sync",
            propagate: f = !1,
            anchorX: w = "left",
          } = e,
          [v, y] = (0, h.xQ)(f),
          k = (0, o.useMemo)(() => m(t), [t]),
          A = f && !v ? [] : k.map(p),
          x = (0, o.useRef)(!0),
          E = (0, o.useRef)(k),
          C = (0, i.M)(() => new Map()),
          [b, M] = (0, o.useState)(k),
          [j, P] = (0, o.useState)(k);
        (0, g.E)(() => {
          (x.current = !1), (E.current = k);
          for (let e = 0; e < j.length; e++) {
            let t = p(j[e]);
            A.includes(t) ? C.delete(t) : !0 !== C.get(t) && C.set(t, !1);
          }
        }, [j, A.length, A.join("-")]);
        let L = [];
        if (k !== b) {
          let e = [...k];
          for (let t = 0; t < j.length; t++) {
            let n = j[t],
              r = p(n);
            A.includes(r) || (e.splice(t, 0, n), L.push(n));
          }
          return "wait" === c && L.length && (e = L), P(m(e)), M(k), null;
        }
        let { forceRender: R } = (0, o.useContext)(l.L);
        return (0, r.jsx)(r.Fragment, {
          children: j.map((e) => {
            let t = p(e),
              o = (!f || !!v) && (k === j || A.includes(t));
            return (0, r.jsx)(
              d,
              {
                isPresent: o,
                initial: (!x.current || !!a) && void 0,
                custom: o ? void 0 : n,
                presenceAffectsLayout: u,
                mode: c,
                onExitComplete: o
                  ? void 0
                  : () => {
                      if (!C.has(t)) return;
                      C.set(t, !0);
                      let e = !0;
                      C.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == R || R(),
                          P(E.current),
                          f && (null == y || y()),
                          s && s());
                    },
                anchorX: w,
                children: e,
              },
              t
            );
          }),
        });
      };
    },
    709: (e, t, n) => {
      n.d(t, { A: () => s });
      var r = n(5750);
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        l = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t
            .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var i = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let a = (0, r.forwardRef)((e, t) => {
          let {
            color: n = "currentColor",
            size: o = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: s,
            className: u = "",
            children: c,
            iconNode: d,
            ...f
          } = e;
          return (0, r.createElement)(
            "svg",
            {
              ref: t,
              ...i,
              width: o,
              height: o,
              stroke: n,
              strokeWidth: s ? (24 * Number(a)) / Number(o) : a,
              className: l("lucide", u),
              ...f,
            },
            [
              ...d.map((e) => {
                let [t, n] = e;
                return (0, r.createElement)(t, n);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ]
          );
        }),
        s = (e, t) => {
          let n = (0, r.forwardRef)((n, i) => {
            let { className: s, ...u } = n;
            return (0, r.createElement)(a, {
              ref: i,
              iconNode: t,
              className: l("lucide-".concat(o(e)), s),
              ...u,
            });
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    7622: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(709).A)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    9944: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(709).A)("CircleCheckBig", [
        ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
        ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
      ]);
    },
    380: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(709).A)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    1206: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(709).A)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    2661: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(709).A)("Zap", [
        [
          "path",
          {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db",
          },
        ],
      ]);
    },
  },
]);
