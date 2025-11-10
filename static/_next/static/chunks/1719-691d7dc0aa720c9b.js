"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1719],
  {
    1719: (e, s, t) => {
      t.d(s, { default: () => c });
      var a = t(7558),
        r = t(5750),
        i = t(8681),
        l = t(2537),
        o = t(7614),
        n = t(380),
        d = t(9944),
        m = t(2661);
      function c(e) {
        let { compact: s = !1, hideText: t = !1, onSuccess: c } = e,
          [x, u] = (0, r.useState)(""),
          [p, b] = (0, r.useState)(!1),
          [g, h] = (0, r.useState)({
            show: !1,
            type: "success",
            title: "",
            message: "",
          }),
          y = (e, s, t) => {
            h({ show: !0, type: e, title: s, message: t });
          },
          f = async (e) => {
            if ((e.preventDefault(), !x)) {
              y("error", "Error", "Please enter your email address");
              return;
            }
            try {
              b(!0);
              let e = await fetch("/api/newsletter", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: x }),
                }),
                s = await e.json();
              if (!e.ok) throw Error(s.error || "Failed to subscribe");
              y(
                "success",
                "Successfully Subscribed! \uD83C\uDF89",
                "Welcome to our newsletter! Check your inbox for a welcome message."
              ),
                u(""),
                null == c || c();
            } catch (e) {
              y(
                "error",
                "Subscription Failed",
                e instanceof Error ? e.message : "Failed to subscribe"
              );
            } finally {
              b(!1);
            }
          };
        return s
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(i.N, {
                  children:
                    g.show &&
                    (0, a.jsx)(o.A, {
                      type: g.type,
                      title: g.title,
                      message: g.message,
                      onClose: () => h((e) => ({ ...e, show: !1 })),
                    }),
                }),
                (0, a.jsxs)("form", {
                  onSubmit: f,
                  className: "flex flex-col gap-3",
                  children: [
                    !t &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("h4", {
                            className: "text-white font-semibold",
                            children: "Stay Updated",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-gray-400 text-sm",
                            children:
                              "Get the latest updates on web development and career advice.",
                          }),
                        ],
                      }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col sm:flex-row gap-2",
                      children: [
                        (0, a.jsx)("input", {
                          type: "email",
                          value: x,
                          onChange: (e) => u(e.target.value),
                          placeholder: "Enter your email",
                          disabled: p,
                          className:
                            "flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm disabled:opacity-50",
                        }),
                        (0, a.jsx)("button", {
                          type: "submit",
                          disabled: p,
                          className:
                            "px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap",
                          children: p
                            ? (0, a.jsxs)("div", {
                                className:
                                  "flex items-center justify-center gap-2",
                                children: [
                                  (0, a.jsx)(n.A, {
                                    className: "animate-spin h-4 w-4",
                                  }),
                                  (0, a.jsx)("span", {
                                    children: "Subscribing...",
                                  }),
                                ],
                              })
                            : "Subscribe",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(i.N, {
                  children:
                    g.show &&
                    (0, a.jsx)(o.A, {
                      type: g.type,
                      title: g.title,
                      message: g.message,
                      onClose: () => h((e) => ({ ...e, show: !1 })),
                    }),
                }),
                (0, a.jsxs)(l.P.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  className:
                    "bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-1 shadow-xl relative overflow-hidden mx-2 sm:mx-0",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5",
                    }),
                    (0, a.jsxs)("div", {
                      className: "absolute inset-0",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute inset-0 bg-[linear-gradient(90deg,rgba(56,189,248,0.07)_0%,rgba(168,85,247,0.07)_100%)]",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "absolute inset-0 bg-grid-gray-900/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "relative bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10",
                      children: (0, a.jsxs)("div", {
                        className: "max-w-2xl mx-auto text-center",
                        children: [
                          (0, a.jsx)(l.P.div, {
                            initial: { opacity: 0, y: 10 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.1 },
                            children: (0, a.jsxs)("span", {
                              className:
                                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6",
                              children: [
                                (0, a.jsx)("span", {
                                  className:
                                    "w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500 animate-ping",
                                }),
                                "Stay Connected",
                              ],
                            }),
                          }),
                          (0, a.jsx)(l.P.h3, {
                            initial: { opacity: 0, y: 10 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.2 },
                            className:
                              "text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700",
                            children: "Stay in the Loop with Our Newsletter",
                          }),
                          (0, a.jsx)(l.P.p, {
                            initial: { opacity: 0, y: 10 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.3 },
                            className:
                              "text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-1 max-w-xl mx-auto",
                            children:
                              "Subscribe to our newsletter to receive the latest articles and updates directly in your inbox.",
                          }),
                          (0, a.jsxs)(l.P.form, {
                            initial: { opacity: 0, y: 10 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.4 },
                            onSubmit: f,
                            className:
                              "flex flex-col gap-3 sm:flex-row sm:gap-1 justify-center relative z-10 px-1",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex-1 relative group w-full mr-2",
                                children: [
                                  (0, a.jsx)("input", {
                                    type: "email",
                                    value: x,
                                    onChange: (e) => u(e.target.value),
                                    placeholder: "Enter your email",
                                    disabled: p,
                                    className:
                                      "w-full px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500/20 outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-white/70 backdrop-blur-sm text-base",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-100 group-hover:from-blue-500/5 group-hover:to-purple-500/5 -z-10 transition-opacity duration-300",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("button", {
                                type: "submit",
                                disabled: p,
                                className:
                                  "relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.2)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "relative",
                                    children: p
                                      ? (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center justify-center gap-2",
                                          children: [
                                            (0, a.jsx)(n.A, {
                                              className:
                                                "animate-spin h-4 w-4 sm:h-5 sm:w-5",
                                            }),
                                            (0, a.jsx)("span", {
                                              children: "Subscribing...",
                                            }),
                                          ],
                                        })
                                      : "Subscribe",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)(l.P.div, {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 0.5 },
                            className:
                              "mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-1.5 sm:gap-2",
                                children: [
                                  (0, a.jsx)(d.A, {
                                    className:
                                      "w-4 h-4 sm:w-5 sm:h-5 text-blue-500",
                                  }),
                                  (0, a.jsx)("span", {
                                    children: "No spam, ever",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-1.5 sm:gap-2",
                                children: [
                                  (0, a.jsx)(m.A, {
                                    className:
                                      "w-4 h-4 sm:w-5 sm:h-5 text-purple-500",
                                  }),
                                  (0, a.jsx)("span", {
                                    children: "Unsubscribe anytime",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
    },
    7614: (e, s, t) => {
      t.d(s, { A: () => n });
      var a = t(7558),
        r = t(2537),
        i = t(5750),
        l = t(7622),
        o = t(1206);
      function n(e) {
        let {
          type: s,
          title: t,
          message: n,
          onClose: d,
          duration: m = 5e3,
        } = e;
        (0, i.useEffect)(() => {
          let e = setTimeout(() => {
            d();
          }, m);
          return () => clearTimeout(e);
        }, [m, d]);
        let c = {
            success: {
              border: "border-green-500",
              background: "bg-green-100",
              text: "text-green-500",
              progress: "bg-green-500",
            },
            error: {
              border: "border-red-500",
              background: "bg-red-100",
              text: "text-red-500",
              progress: "bg-red-500",
            },
          },
          x = {
            success: (0, a.jsx)(l.A, {
              className: "w-5 h-5 sm:w-6 sm:h-6 text-green-500",
            }),
            error: (0, a.jsx)(o.A, {
              className: "w-5 h-5 sm:w-6 sm:h-6 text-red-500",
            }),
          };
        return (0, a.jsxs)(r.P.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          className:
            "fixed mx-4 sm:mx-0 bottom-4 sm:bottom-8 right-0 sm:right-8 left-0 sm:left-auto bg-white rounded-lg shadow-2xl p-4 sm:p-6 sm:max-w-md z-50 border-l-4 ".concat(
              c[s].border,
              " overflow-hidden"
            ),
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-start gap-3 sm:gap-4",
              children: [
                (0, a.jsx)("div", {
                  className: "flex-shrink-0",
                  children: (0, a.jsx)("div", {
                    className: "w-8 h-8 sm:w-10 sm:h-10 ".concat(
                      c[s].background,
                      " rounded-full flex items-center justify-center"
                    ),
                    children: x[s],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    (0, a.jsx)("h4", {
                      className:
                        "text-gray-900 font-semibold text-sm sm:text-base mb-0.5 sm:mb-1 truncate pr-6",
                      children: t,
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-gray-600 text-xs sm:text-sm line-clamp-2",
                      children: n,
                    }),
                  ],
                }),
                (0, a.jsx)("button", {
                  onClick: d,
                  className:
                    "absolute right-3 top-3 text-gray-400 hover:text-gray-500 transition-colors p-1 rounded-full hover:bg-gray-100",
                  children: (0, a.jsx)(o.A, {
                    className: "w-4 h-4 sm:w-5 sm:h-5",
                  }),
                }),
              ],
            }),
            (0, a.jsx)(r.P.div, {
              initial: { scaleX: 0 },
              animate: { scaleX: 1 },
              transition: { duration: m / 1e3, ease: "linear" },
              className: "absolute bottom-0 left-0 h-0.5 sm:h-1 ".concat(
                c[s].progress,
                " origin-left"
              ),
              style: { width: "100%" },
            }),
          ],
        });
      }
    },
  },
]);
