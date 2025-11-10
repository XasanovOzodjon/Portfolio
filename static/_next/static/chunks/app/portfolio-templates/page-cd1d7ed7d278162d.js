(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2659],
  {
    8612: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 9037)),
        Promise.resolve().then(l.bind(l, 1719)),
        Promise.resolve().then(l.bind(l, 4798));
    },
    9037: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => c });
      var s = l(7558),
        r = l(3946),
        a = l.n(r),
        o = l(7118),
        i = l(1719),
        n = l(46);
      let c = () =>
        (0, s.jsx)("footer", {
          className: "bg-gray-900 text-gray-300",
          children: (0, s.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [
              (0, s.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [
                  (0, s.jsxs)("div", {
                    className: "col-span-1",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex items-center space-x-3 mb-4",
                        children: [
                          (0, s.jsx)(o.default, {
                            src: "/logo/logo-light-rounded.png",
                            alt: "Logo",
                            width: 32,
                            height: 32,
                          }),
                          (0, s.jsx)("h3", {
                            className: "text-xl font-bold text-white",
                            children: "Developer Portfolio Templates",
                          }),
                        ],
                      }),
                      (0, s.jsx)("p", {
                        className: "text-gray-400 mb-4",
                        children:
                          "Create stunning developer portfolios with our modern, customizable templates.",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("h4", {
                        className: "text-white font-semibold mb-4",
                        children: "Quick Links",
                      }),
                      (0, s.jsxs)("ul", {
                        className: "space-y-2",
                        children: [
                          (0, s.jsx)("li", {
                            children: (0, s.jsx)(a(), {
                              onClick: () =>
                                (0, n.u4)("footer-templates-click", {
                                  cta: "All Templates",
                                }),
                              href: "/portfolio-templates",
                              className: "hover:text-white transition-colors",
                              children: "Templates",
                            }),
                          }),
                          (0, s.jsx)("li", {
                            children: (0, s.jsx)(a(), {
                              onClick: () =>
                                (0, n.u4)("footer-web-developer-click", {
                                  cta: "Web Developer Portfolio",
                                }),
                              href: "/portfolio-templates/web-developer",
                              className: "hover:text-white transition-colors",
                              children: "Web Developer Portfolio",
                            }),
                          }),
                          (0, s.jsx)("li", {
                            children: (0, s.jsx)(a(), {
                              onClick: () =>
                                (0, n.u4)("footer-frontend-developer-click", {
                                  cta: "Frontend Developer Portfolio",
                                }),
                              href: "/portfolio-templates/frontend-developer",
                              className: "hover:text-white transition-colors",
                              children: "Frontend Developer Portfolio",
                            }),
                          }),
                          (0, s.jsx)("li", {
                            children: (0, s.jsx)(a(), {
                              onClick: () =>
                                (0, n.u4)("footer-contact-click", {
                                  cta: "Contact Us",
                                }),
                              href: "/contact",
                              className: "hover:text-white transition-colors",
                              children: "Contact Us",
                            }),
                          }),
                          (0, s.jsx)("li", {
                            children: (0, s.jsx)(a(), {
                              onClick: () =>
                                (0, n.u4)("footer-faq-click", { cta: "FAQ" }),
                              href: "/faq",
                              className: "hover:text-white transition-colors",
                              children: "FAQ",
                            }),
                          }),
                          (0, s.jsx)("li", {
                            children: (0, s.jsx)(a(), {
                              onClick: () =>
                                (0, n.u4)("footer-blog-click", { cta: "Blog" }),
                              href: "/blog",
                              className: "hover:text-white transition-colors",
                              children: "Blog",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)(i.default, { compact: !0 }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "border-t border-gray-800 mt-12 pt-8 text-center text-gray-400",
                children: [
                  (0, s.jsx)("p", {
                    className: "mb-2",
                    children: "Made with ❤️ for developers",
                  }),
                  (0, s.jsxs)("p", {
                    children: [
                      "\xa9 ",
                      new Date().getFullYear(),
                      " DevPortfolio. All rights reserved.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
    },
    4798: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => v });
      var s = l(7558),
        r = l(5750),
        a = l(7343),
        o = l(7118),
        i = l(3946),
        n = l.n(i),
        c = l(709);
      let d = (0, c.A)("Filter", [
          [
            "polygon",
            {
              points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
              key: "1yg77f",
            },
          ],
        ]),
        m = (0, c.A)("Info", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M12 16v-4", key: "1dtifu" }],
          ["path", { d: "M12 8h.01", key: "e9boi3" }],
        ]);
      var x = l(7622),
        h = l(3079),
        p = l(7934),
        u = l(7618),
        g = l(6774),
        f = l(4474),
        b = l(9287),
        j = l(46);
      function v(e) {
        let { templates: t } = e,
          l = (0, a.usePathname)(),
          i = (0, a.useSearchParams)(),
          c = i.get("type"),
          [v, w] = (0, r.useState)("all"),
          [N, y] = (0, r.useState)("all"),
          [k, S] = (0, r.useState)("free"),
          [A, C] = (0, r.useState)("free" === c || "pro" === c ? c : "all");
        (0, r.useEffect)(() => {
          let e = new URLSearchParams(i.toString());
          if (
            ("all" === A ? e.delete("type") : e.set("type", A),
            e.toString() !== i.toString())
          )
            try {
              let t = ""
                .concat(l)
                .concat(e.toString() ? "?".concat(e.toString()) : "");
              window.history.replaceState(null, "", t);
            } catch (e) {
              console.error("Error updating URL:", e);
            }
        }, [A, l, i]);
        let [P, T] = (0, r.useState)(null),
          [O, U] = (0, r.useState)(!1),
          [D, F] = (0, r.useState)(!1),
          [R, _] = (0, r.useState)(null),
          [E, M] = (0, r.useState)(""),
          Y = {
            all: "\uD83C\uDFAF",
            frontend: "\uD83C\uDFA8",
            backend: "⚙️",
            "full stack": "\uD83D\uDEE0️",
            "software engineer": "\uD83D\uDCBB",
            mobile: "\uD83D\uDCF1",
          },
          q = { all: "\uD83C\uDFA8", dark: "\uD83C\uDF19", light: "☀️" },
          B = t.filter((e) => {
            let t = "all" === v || e.roles.includes(v),
              l = "all" === N || e.theme === N,
              s =
                "all" === A ||
                ("free" === A && !e.isPaid) ||
                ("pro" === A && e.isPaid);
            return t && l && s && !e.isPro;
          }),
          L = "all" !== v || "all" !== N || "all" !== A,
          z = (0, r.useRef)(null);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              ref: z,
              className: "max-w-6xl mx-auto mb-6",
              children: (0, s.jsxs)("div", {
                className:
                  "bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-xl shadow-sm border border-blue-100/50 p-4 relative overflow-hidden",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl",
                  }),
                  (0, s.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-1.5 mb-3",
                        children: [
                          (0, s.jsx)(d, { className: "w-4 h-4 text-blue-600" }),
                          (0, s.jsx)("h2", {
                            className:
                              "text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
                            children: "Customize Your Search",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "grid md:grid-cols-3 gap-4",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "space-y-1.5",
                            children: [
                              (0, s.jsx)("label", {
                                className:
                                  "block text-sm font-medium text-gray-700",
                                children: "Choose Your Role",
                              }),
                              (0, s.jsx)("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: [
                                  "all",
                                  "frontend",
                                  "backend",
                                  "full stack",
                                  "software engineer",
                                  "mobile",
                                ].map((e) =>
                                  (0, s.jsxs)(
                                    "button",
                                    {
                                      onClick: () => w("all" === e ? "all" : e),
                                      className:
                                        "\n												group flex items-center gap-1 px-2.5 py-1 rounded-md text-sm font-medium transition-all duration-200\n												min-w-[100px] justify-center\n												".concat(
                                          v === e
                                            ? "bg-blue-600 text-white shadow-sm hover:bg-blue-700"
                                            : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200",
                                          "\n											"
                                        ),
                                      children: [
                                        (0, s.jsx)("span", {
                                          className:
                                            "transform transition-transform duration-200 group-hover:scale-110 text-[13px]",
                                          children: Y[e],
                                        }),
                                        "all" === e
                                          ? "All Roles"
                                          : e.charAt(0).toUpperCase() +
                                            e.slice(1),
                                      ],
                                    },
                                    e
                                  )
                                ),
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "space-y-1.5",
                            children: [
                              (0, s.jsx)("label", {
                                className:
                                  "block text-sm font-medium text-gray-700",
                                children: "Select Theme",
                              }),
                              (0, s.jsx)("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: ["all", "dark", "light"].map((e) =>
                                  (0, s.jsxs)(
                                    "button",
                                    {
                                      onClick: () => y(e),
                                      className:
                                        "\n												group flex items-center gap-1 px-2.5 py-1 rounded-md text-sm font-medium transition-all duration-200\n												min-w-[100px] justify-center\n												".concat(
                                          N === e
                                            ? "bg-blue-600 text-white shadow-sm hover:bg-blue-700"
                                            : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200",
                                          "\n											"
                                        ),
                                      children: [
                                        (0, s.jsx)("span", {
                                          className:
                                            "transform transition-transform duration-200 group-hover:scale-110 text-[13px]",
                                          children: q[e],
                                        }),
                                        "all" === e
                                          ? "All Themes"
                                          : e.charAt(0).toUpperCase() +
                                            e.slice(1),
                                      ],
                                    },
                                    e
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      !1,
                      (0, s.jsxs)("div", {
                        className:
                          "mt-3 flex items-center gap-1 text-xs text-gray-500",
                        children: [
                          (0, s.jsx)(m, { className: "w-3.5 h-3.5" }),
                          (0, s.jsxs)("span", {
                            children: [
                              "Showing ",
                              "all" === v ? "all roles" : v,
                              " with ",
                              "all" === N
                                ? "any theme"
                                : "".concat(N, " theme"),
                              !1,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            B.length > 0
              ? (0, s.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto",
                  children: B.map((e) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className:
                          "group flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow",
                        children: [
                          (0, s.jsxs)(n(), {
                            href: e.isPro
                              ? "/pro-portfolio-templates/".concat(e.id)
                              : "/portfolio-templates/".concat(e.id),
                            className: "contents hover:cursor-pointer",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "aspect-[16/10] relative bg-gray-100",
                                children: (0, s.jsx)(o.default, {
                                  src: e.image,
                                  alt: "".concat(e.name, " Preview"),
                                  fill: !0,
                                  className: "object-cover",
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className: "flex flex-col flex-grow p-6",
                                children: (0, s.jsxs)("div", {
                                  className: "flex-grow",
                                  children: [
                                    (0, s.jsx)("h3", {
                                      className:
                                        "text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors",
                                      children: e.name,
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-gray-600 mb-4 line-clamp-3",
                                      children: e.description,
                                    }),
                                    (0, s.jsx)("div", {
                                      className: "flex flex-wrap gap-2 mb-6",
                                      children: e.tags.map((e) =>
                                        (0, s.jsx)(
                                          "span",
                                          {
                                            className:
                                              "px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full",
                                            children: e,
                                          },
                                          e
                                        )
                                      ),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "space-y-2",
                                      children: [
                                        e.features.map((e) =>
                                          (0, s.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "flex items-center text-gray-600",
                                              children: [
                                                (0, s.jsx)(x.A, {
                                                  className:
                                                    "w-5 h-5 flex-shrink-0 text-green-500 mr-2",
                                                }),
                                                (0, s.jsx)("span", {
                                                  className: "line-clamp-1",
                                                  children: e,
                                                }),
                                              ],
                                            },
                                            e
                                          )
                                        ),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "flex items-center text-gray-600",
                                          children: [
                                            (0, s.jsx)(x.A, {
                                              className:
                                                "w-5 h-5 flex-shrink-0 text-green-500 mr-2",
                                            }),
                                            (0, s.jsx)("span", {
                                              className: "line-clamp-1",
                                              children:
                                                "Next.js 15 + TypeScript",
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "flex items-center text-gray-600",
                                          children: [
                                            (0, s.jsx)(x.A, {
                                              className:
                                                "w-5 h-5 flex-shrink-0 text-green-500 mr-2",
                                            }),
                                            (0, s.jsx)("span", {
                                              className: "line-clamp-1",
                                              children: "100% Open Source",
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
                          (0, s.jsx)("div", {
                            className: "px-6 pb-6",
                            children: (0, s.jsxs)("div", {
                              className:
                                "flex flex-col gap-3 pt-6 border-t border-gray-100",
                              children: [
                                (0, s.jsxs)(n(), {
                                  href: e.isPro
                                    ? "/pro-portfolio-templates/".concat(e.id)
                                    : "/portfolio-templates/".concat(e.id),
                                  className:
                                    "bg-blue-600 text-white text-center px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2",
                                  children: [
                                    (0, s.jsx)(h.A, { className: "w-5 h-5" }),
                                    "View Demo",
                                  ],
                                }),
                                (0, s.jsxs)("button", {
                                  onClick: () => {
                                    e.isPaid
                                      ? ((0, j.u4)(
                                          "portfolios-list-use-template-paid-click",
                                          { cta: "Use Template" }
                                        ),
                                        T(e))
                                      : ((0, j.u4)(
                                          "portfolios-list-use-template-free-click",
                                          { cta: "Use Template" }
                                        ),
                                        _(e),
                                        F(!0));
                                  },
                                  className:
                                    "bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center px-4 py-2.5 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                                  children: [
                                    (0, s.jsx)(p.A, { className: "w-5 h-5" }),
                                    "Use Template",
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                })
              : (0, s.jsx)("div", {
                  className: "text-center py-16 px-4",
                  children: (0, s.jsxs)("div", {
                    className: "max-w-2xl mx-auto",
                    children: [
                      (0, s.jsx)(u.A, {
                        className: "w-16 h-16 mx-auto mb-4 text-gray-400",
                      }),
                      (0, s.jsx)("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-2",
                        children: "No matching templates found",
                      }),
                      (0, s.jsx)("p", {
                        className: "text-gray-600 mb-6",
                        children:
                          "We could not find any templates matching your current filters. Try adjusting your filters or viewing all templates.",
                      }),
                      (0, s.jsx)("button", {
                        onClick: () => {
                          if ((w("all"), y("all"), C("all"), z.current)) {
                            let e =
                              z.current.getBoundingClientRect().top +
                              window.pageYOffset -
                              100;
                            window.scrollTo({ top: e, behavior: "smooth" });
                          }
                        },
                        className:
                          "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                        children: "View All Templates",
                      }),
                    ],
                  }),
                }),
            L &&
              B.length > 0 &&
              (0, s.jsx)("div", {
                className: "flex justify-center mt-16",
                children: (0, s.jsx)("button", {
                  onClick: () => {
                    if ((w("all"), y("all"), C("all"), z.current)) {
                      let e =
                        z.current.getBoundingClientRect().top +
                        window.pageYOffset -
                        100;
                      window.scrollTo({ top: e, behavior: "smooth" });
                    }
                  },
                  className:
                    "inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg",
                  children: "View All Templates",
                }),
              }),
            P &&
              !O &&
              (0, s.jsx)(g.A, {
                isOpen: !!P,
                onClose: () => T(null),
                onOpenSubscriptionModal: () => {
                  M(P.github), T(null), U(!0);
                },
                templateId: P.id,
              }),
            R &&
              (0, s.jsx)(b.A, {
                isOpen: D,
                onClose: () => {
                  F(!1), _(null);
                },
                onOpenSubscriptionModal: () => {
                  R && M(R.github), F(!1), _(null), U(!0);
                },
                templateId: (null == R ? void 0 : R.id) || "",
              }),
            (0, s.jsx)(f.A, {
              isOpen: O,
              onClose: () => U(!1),
              onSuccess: () => {
                window.open(E, "_blank"), U(!1);
              },
            }),
          ],
        });
      }
    },
    7343: (e, t, l) => {
      "use strict";
      var s = l(6087);
      l.o(s, "usePathname") &&
        l.d(t, {
          usePathname: function () {
            return s.usePathname;
          },
        }),
        l.o(s, "useSearchParams") &&
          l.d(t, {
            useSearchParams: function () {
              return s.useSearchParams;
            },
          });
    },
    3079: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => s });
      let s = (0, l(709).A)("Eye", [
        [
          "path",
          {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0",
          },
        ],
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ]);
    },
    7618: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => s });
      let s = (0, l(709).A)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [2537, 9303, 3946, 4157, 314, 1719, 6249, 2890, 971, 7358], () =>
      t(8612)
    ),
      (_N_E = e.O());
  },
]);
