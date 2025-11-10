"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6249],
  {
    9287: (e, t, a) => {
      a.d(t, { A: () => b });
      var s = a(7558),
        r = a(5750),
        l = a(4390),
        i = a(1492),
        o = a(9549),
        n = a(9962),
        c = a(3231),
        m = a(1206),
        d = a(1587),
        x = a(7622),
        p = a(46),
        h = a(7118);
      let u = [
          {
            title: "Stunning Portfolio",
            icon: (0, s.jsx)(o.A, {
              className: "w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-500",
            }),
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            features: [
              "Professionally Designed Templates",
              "Functional Contact Form Integration",
              "Built-in Analytics",
              "SEO Optimized",
              "Dark/Light Theme Toggle",
              "Functional Resume Download Button",
              "Access to All Pro Templates",
            ],
          },
          {
            title: "Job-Ready Guide",
            icon: (0, s.jsx)(n.A, { className: "w-5 h-5 mr-2 text-green-500" }),
            bgColor: "bg-green-50",
            borderColor: "border-green-200",
            features: [
              "Exclusive Tech Interview Roadmap",
              "Curated Coding, System Design & Behavioral Interview Resources",
              "FAANG-Ready Resume Template",
            ],
          },
          {
            title: "Community & Support",
            icon: (0, s.jsx)(c.A, {
              className: "w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-500",
            }),
            bgColor: "bg-yellow-50",
            borderColor: "border-yellow-200",
            features: [
              "Private Discord Community Access",
              "Priority Email & Discord Support",
            ],
          },
        ],
        g = u.flatMap((e) => e.features),
        f = ["Simple portfolio template"];
      function b(e) {
        let { isOpen: t, onClose: a, onOpenSubscriptionModal: o } = e,
          [n, c] = (0, r.useState)(1),
          b = (0, r.useRef)(null),
          [y, j] = (0, r.useState)(null),
          w = (0, r.useMemo)(
            () => [
              {
                name: "Free",
                price: "$0",
                description: "Get started with a simple portfolio template.",
                href: "",
                features: f,
                cta: "Get Free Template",
              },
              {
                name: "Complete Pro Package",
                price: "$39",
                originalPrice: "",
                description: (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text",
                      children: "Pro Portfolio Templates",
                    }),
                    " +",
                    " ",
                    (0, s.jsx)("span", {
                      className:
                        "font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text",
                      children: "Job-Ready Guide",
                    }),
                    " ",
                    "and",
                    " ",
                    (0, s.jsx)("span", {
                      className:
                        "font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text",
                      children: "Interview Resources",
                    }),
                    ".",
                  ],
                }),
                href: "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
                features: g,
                cta: "Get Complete Access",
              },
            ],
            []
          );
        return (
          (0, r.useEffect)(() => {
            if (t) {
              (0, p.u4)("free-template-modal-view"),
                c(1),
                setTimeout(() => {
                  if (b.current) {
                    let e = b.current.clientWidth;
                    b.current.scrollTo({ left: 1 * e, behavior: "instant" });
                  }
                }, 0);
              let e = setTimeout(() => {
                if ((c(0), b.current)) {
                  let e = b.current.clientWidth;
                  b.current.scrollTo({ left: 0 * e, behavior: "smooth" });
                }
              }, 500);
              return () => clearTimeout(e);
            }
          }, [t]),
          (0, s.jsx)(l.e, {
            appear: !0,
            show: t,
            as: r.Fragment,
            children: (0, s.jsxs)(i.lG, {
              as: "div",
              className: "relative z-50",
              onClose: a,
              children: [
                (0, s.jsx)(l._, {
                  as: r.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, s.jsx)("div", {
                    className: "fixed inset-0 bg-black/30 backdrop-blur-sm",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "fixed inset-0 overflow-y-auto",
                  children: (0, s.jsx)("div", {
                    className:
                      "flex min-h-full items-center justify-center p-4 text-center",
                    children: (0, s.jsx)(l._, {
                      as: r.Fragment,
                      enter: "ease-out duration-300",
                      enterFrom: "opacity-0 scale-95",
                      enterTo: "opacity-100 scale-100",
                      leave: "ease-in duration-200",
                      leaveFrom: "opacity-100 scale-100",
                      leaveTo: "opacity-0 scale-95",
                      children: (0, s.jsxs)(i.Lj, {
                        className:
                          "w-full max-w-sm md:max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center",
                                children: [
                                  (0, s.jsx)(i.L3, {
                                    as: "h3",
                                    className:
                                      "mt-4 text-2xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl",
                                    children: "Choose Your Portfolio Type",
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "mt-3 max-w-2xl mx-auto text-md md:text-lg text-indigo-200",
                                    children:
                                      "Start with our free template or join 1,500+ developers who landed jobs at Google, Meta, and Netflix using our Pro Templates and Interview Resources.",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "mt-4 flex justify-center items-center gap-4",
                                    children: [
                                      (0, s.jsx)(h.default, {
                                        src: "/company-logos/google-icon.svg",
                                        alt: "Google",
                                        width: 32,
                                        height: 32,
                                        className: "h-7 md:h-8 w-auto",
                                      }),
                                      (0, s.jsx)(h.default, {
                                        src: "/company-logos/meta-icon.svg",
                                        alt: "Meta",
                                        width: 32,
                                        height: 32,
                                        className: "h-7 md:h-8 w-auto",
                                      }),
                                      (0, s.jsx)(h.default, {
                                        src: "/company-logos/netflix-icon.svg",
                                        alt: "Netflix",
                                        width: 32,
                                        height: 32,
                                        className: "h-7 md:h-8 w-auto",
                                      }),
                                      (0, s.jsx)(h.default, {
                                        src: "/company-logos/apple.svg",
                                        alt: "Apple",
                                        width: 32,
                                        height: 32,
                                        className: "h-7 md:h-8 w-auto",
                                      }),
                                      (0, s.jsx)(h.default, {
                                        src: "/company-logos/amazon-icon.svg",
                                        alt: "Amazon",
                                        width: 32,
                                        height: 32,
                                        className: "h-7 md:h-8 w-auto mt-1",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("button", {
                                type: "button",
                                className:
                                  "absolute top-4 right-4 text-white/80 hover:text-white focus:outline-none",
                                onClick: a,
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close",
                                  }),
                                  (0, s.jsx)(m.A, { className: "h-6 w-6" }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "p-6",
                            children: [
                              (0, s.jsx)("div", {
                                className: "md:hidden mb-6",
                                children: (0, s.jsx)("div", {
                                  className: "flex bg-gray-100 rounded-lg p-1",
                                  children: w.map((e, t) =>
                                    (0, s.jsx)(
                                      "button",
                                      {
                                        onClick: () => {
                                          if ((c(t), b.current)) {
                                            let e = b.current.clientWidth;
                                            b.current.scrollTo({
                                              left: t * e,
                                              behavior: "smooth",
                                            });
                                          }
                                        },
                                        className:
                                          "flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200 ".concat(
                                            n === t
                                              ? "bg-white text-gray-900 shadow-sm"
                                              : "text-gray-500 hover:text-gray-700"
                                          ),
                                        children:
                                          "Complete Pro Package" === e.name
                                            ? "Complete Pro"
                                            : e.name,
                                      },
                                      e.name
                                    )
                                  ),
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className: "md:hidden px-4",
                                children: (0, s.jsx)("div", {
                                  ref: b,
                                  className:
                                    "overflow-x-scroll scroll-smooth snap-x snap-mandatory -mx-4",
                                  onScroll: (e) => {
                                    let t = e.target;
                                    c(Math.round(t.scrollLeft / t.clientWidth));
                                  },
                                  children: (0, s.jsx)("div", {
                                    className: "flex px-4 py-1",
                                    style: { width: "calc(200% + 2rem)" },
                                    children: w.map((e, t) =>
                                      (0, s.jsxs)(
                                        "div",
                                        {
                                          className:
                                            "flex-shrink-0 snap-center relative flex flex-col rounded-2xl border p-4 shadow-lg ".concat(
                                              "Complete Pro Package" === e.name
                                                ? "border-purple-500 ring-2 ring-purple-500 shadow-2xl shadow-purple-400"
                                                : "border-gray-200"
                                            ),
                                          style: {
                                            width: "calc(50% - 0.5rem)",
                                            marginRight: 0 === t ? "1rem" : "0",
                                          },
                                          children: [
                                            (0, s.jsx)("h4", {
                                              className:
                                                "text-lg font-semibold text-gray-900",
                                              children: e.name,
                                            }),
                                            (0, s.jsxs)("p", {
                                              className:
                                                "mt-1 flex items-baseline gap-x-1",
                                              children: [
                                                e.originalPrice &&
                                                  (0, s.jsx)("span", {
                                                    className:
                                                      "text-xl font-medium text-gray-400 line-through",
                                                    children: e.originalPrice,
                                                  }),
                                                (0, s.jsx)("span", {
                                                  className:
                                                    "text-3xl font-bold tracking-tight text-gray-900",
                                                  children: e.price,
                                                }),
                                                "$0" !== e.price &&
                                                  (0, s.jsx)("span", {
                                                    className:
                                                      "text-sm font-semibold leading-6 tracking-wide text-gray-600",
                                                    children: "/one-time",
                                                  }),
                                              ],
                                            }),
                                            e.originalPrice &&
                                              (0, s.jsx)("div", {
                                                className:
                                                  "mt-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full px-3 py-1 self-start",
                                                children: "You save 50%!",
                                              }),
                                            (0, s.jsx)("p", {
                                              className:
                                                "mt-4 text-sm text-gray-500 h-10",
                                              children: e.description,
                                            }),
                                            (0, s.jsxs)("button", {
                                              onClick: (t) => {
                                                "Free" === e.name
                                                  ? (t.preventDefault(),
                                                    (0, p.u4)(
                                                      "free-template-modal-click-free",
                                                      {
                                                        cta: "Get Free Template",
                                                      }
                                                    ),
                                                    o())
                                                  : ((0, p.u4)(
                                                      "free-template-modal-get-pro-access-click"
                                                    ),
                                                    j(e.name),
                                                    setTimeout(() => {
                                                      window.location.href =
                                                        e.href;
                                                    }, 120));
                                              },
                                              className:
                                                "relative mt-6 block w-full rounded-md py-3 px-3 text-center text-md font-semibold transition-all duration-300 ease-out ".concat(
                                                  "Complete Pro Package" ===
                                                    e.name
                                                    ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white hover:from-purple-600 hover:via-fuchsia-600 hover:to-pink-600 shadow-md"
                                                    : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                                                ),
                                              disabled:
                                                "Free" !== e.name &&
                                                y === e.name,
                                              children: [
                                                (0, s.jsx)("span", {
                                                  className:
                                                    "inline-flex items-center justify-center gap-2 transition-opacity duration-200 ".concat(
                                                      "Free" !== e.name &&
                                                        y === e.name
                                                        ? "opacity-0"
                                                        : "opacity-100"
                                                    ),
                                                  children: e.cta,
                                                }),
                                                "Free" !== e.name &&
                                                  (0, s.jsx)("span", {
                                                    className:
                                                      "absolute inset-0 grid place-items-center transition-opacity duration-200 ".concat(
                                                        y === e.name
                                                          ? "opacity-100"
                                                          : "opacity-0"
                                                      ),
                                                    "aria-hidden":
                                                      y === e.name
                                                        ? "false"
                                                        : "true",
                                                    children: (0, s.jsx)(
                                                      "span",
                                                      {
                                                        className:
                                                          "h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin",
                                                      }
                                                    ),
                                                  }),
                                              ],
                                            }),
                                            "Complete Pro Package" === e.name &&
                                              (0, s.jsxs)("div", {
                                                className:
                                                  "mt-3 flex items-center justify-center text-sm text-gray-600",
                                                children: [
                                                  (0, s.jsx)(d.A, {
                                                    className:
                                                      "h-4 w-4 mr-2 text-green-500",
                                                  }),
                                                  (0, s.jsx)("span", {
                                                    children:
                                                      "30-day money back guarantee",
                                                  }),
                                                ],
                                              }),
                                            (0, s.jsx)("div", {
                                              className:
                                                "mt-4 space-y-4 flex-1",
                                              children: u.map((t) =>
                                                (0, s.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "rounded-lg p-3 border "
                                                        .concat(
                                                          t.borderColor,
                                                          " "
                                                        )
                                                        .concat(t.bgColor),
                                                    children: [
                                                      (0, s.jsxs)("h5", {
                                                        className:
                                                          "font-semibold text-gray-800 flex items-center mb-3",
                                                        children: [
                                                          t.icon,
                                                          t.title,
                                                        ],
                                                      }),
                                                      (0, s.jsx)("ul", {
                                                        role: "list",
                                                        className: "space-y-3",
                                                        children:
                                                          t.features.map(
                                                            (t) => {
                                                              let a =
                                                                  "Free" ===
                                                                    e.name &&
                                                                  "Professionally Designed Templates" ===
                                                                    t
                                                                    ? "Simple Portfolio Template"
                                                                    : t,
                                                                r =
                                                                  e.features.includes(
                                                                    t
                                                                  ) ||
                                                                  ("Free" ===
                                                                    e.name &&
                                                                    "Professionally Designed Templates" ===
                                                                      t);
                                                              return (0,
                                                              s.jsxs)(
                                                                "li",
                                                                {
                                                                  className:
                                                                    "flex items-start space-x-2",
                                                                  children: [
                                                                    (0, s.jsx)(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex-shrink-0 pt-0.5",
                                                                        children:
                                                                          r
                                                                            ? (0,
                                                                              s.jsx)(
                                                                                x.A,
                                                                                {
                                                                                  className:
                                                                                    "h-4 w-4 text-green-500",
                                                                                }
                                                                              )
                                                                            : (0,
                                                                              s.jsx)(
                                                                                m.A,
                                                                                {
                                                                                  className:
                                                                                    "h-4 w-4 text-red-500",
                                                                                }
                                                                              ),
                                                                      }
                                                                    ),
                                                                    (0, s.jsx)(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-sm ".concat(
                                                                            r
                                                                              ? "text-gray-700"
                                                                              : "text-gray-500 line-through"
                                                                          ),
                                                                        dangerouslySetInnerHTML:
                                                                          {
                                                                            __html:
                                                                              a,
                                                                          },
                                                                      }
                                                                    ),
                                                                  ],
                                                                },
                                                                t
                                                              );
                                                            }
                                                          ),
                                                      }),
                                                    ],
                                                  },
                                                  t.title
                                                )
                                              ),
                                            }),
                                          ],
                                        },
                                        "mobile-".concat(e.name)
                                      )
                                    ),
                                  }),
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "hidden md:flex lg:mt-0 justify-center gap-6",
                                children: w.map((e) =>
                                  (0, s.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "relative flex flex-col rounded-2xl border p-4 md:p-6 shadow-lg w-full max-w-md ".concat(
                                          "Complete Pro Package" === e.name
                                            ? "border-purple-500 ring-2 ring-purple-500 shadow-2xl shadow-purple-400"
                                            : "border-gray-200"
                                        ),
                                      children: [
                                        (0, s.jsx)("h4", {
                                          className:
                                            "text-lg md:text-xl font-semibold text-gray-900",
                                          children: e.name,
                                        }),
                                        (0, s.jsxs)("p", {
                                          className:
                                            "mt-1 flex items-baseline gap-x-1",
                                          children: [
                                            e.originalPrice &&
                                              (0, s.jsx)("span", {
                                                className:
                                                  "text-xl md:text-2xl font-medium text-gray-400 line-through",
                                                children: e.originalPrice,
                                              }),
                                            (0, s.jsx)("span", {
                                              className:
                                                "text-3xl md:text-4xl font-bold tracking-tight text-gray-900",
                                              children: e.price,
                                            }),
                                            "$0" !== e.price &&
                                              (0, s.jsx)("span", {
                                                className:
                                                  "text-sm font-semibold leading-6 tracking-wide text-gray-600",
                                                children: "/one-time",
                                              }),
                                          ],
                                        }),
                                        e.originalPrice &&
                                          (0, s.jsx)("div", {
                                            className:
                                              "mt-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full px-3 py-1 self-start",
                                            children: "You save 50%!",
                                          }),
                                        (0, s.jsx)("p", {
                                          className:
                                            "mt-4 text-base text-gray-500 h-10",
                                          children: e.description,
                                        }),
                                        (0, s.jsxs)("button", {
                                          onClick: (t) => {
                                            "Free" === e.name
                                              ? (t.preventDefault(),
                                                (0, p.u4)(
                                                  "free-template-modal-click-free",
                                                  { cta: "Get Free Template" }
                                                ),
                                                o())
                                              : ((0, p.u4)(
                                                  "free-template-modal-get-pro-access-click"
                                                ),
                                                j(e.name),
                                                setTimeout(() => {
                                                  window.location.href = e.href;
                                                }, 120));
                                          },
                                          className:
                                            "relative mt-6 block w-full rounded-md py-3 px-3 md:py-3 md:px-4 text-center text-md font-semibold transition-all duration-300 ease-out ".concat(
                                              "Complete Pro Package" === e.name
                                                ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white hover:from-purple-600 hover:via-fuchsia-600 hover:to-pink-600 shadow-md"
                                                : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                                            ),
                                          disabled:
                                            "Free" !== e.name && y === e.name,
                                          children: [
                                            (0, s.jsx)("span", {
                                              className:
                                                "inline-flex items-center justify-center gap-2 transition-opacity duration-200 ".concat(
                                                  "Free" !== e.name &&
                                                    y === e.name
                                                    ? "opacity-0"
                                                    : "opacity-100"
                                                ),
                                              children: e.cta,
                                            }),
                                            "Free" !== e.name &&
                                              (0, s.jsx)("span", {
                                                className:
                                                  "absolute inset-0 grid place-items-center transition-opacity duration-200 ".concat(
                                                    y === e.name
                                                      ? "opacity-100"
                                                      : "opacity-0"
                                                  ),
                                                "aria-hidden":
                                                  y === e.name
                                                    ? "false"
                                                    : "true",
                                                children: (0, s.jsx)("span", {
                                                  className:
                                                    "h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin",
                                                }),
                                              }),
                                          ],
                                        }),
                                        "Complete Pro Package" === e.name
                                          ? (0, s.jsxs)("div", {
                                              className:
                                                "mt-3 flex items-center justify-center text-sm text-gray-600",
                                              children: [
                                                (0, s.jsx)(d.A, {
                                                  className:
                                                    "h-4 w-4 mr-2 text-green-500",
                                                }),
                                                (0, s.jsx)("span", {
                                                  children:
                                                    "30-day money back guarantee",
                                                }),
                                              ],
                                            })
                                          : (0, s.jsx)("div", {
                                              className: "mb-[33px]",
                                            }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "mt-4 lg:mt-4 space-y-4 flex-1",
                                          children: u.map((t) =>
                                            (0, s.jsxs)(
                                              "div",
                                              {
                                                className:
                                                  "rounded-lg p-3 md:p-4 border "
                                                    .concat(t.borderColor, " ")
                                                    .concat(t.bgColor),
                                                children: [
                                                  (0, s.jsxs)("h5", {
                                                    className:
                                                      "font-semibold text-gray-800 flex items-center mb-3",
                                                    children: [t.icon, t.title],
                                                  }),
                                                  (0, s.jsx)("ul", {
                                                    role: "list",
                                                    className: "space-y-3",
                                                    children: t.features.map(
                                                      (t) => {
                                                        let a =
                                                            "Free" === e.name &&
                                                            "Professionally Designed Templates" ===
                                                              t
                                                              ? "Simple portfolio template"
                                                              : t,
                                                          r =
                                                            e.features.includes(
                                                              t
                                                            ) ||
                                                            ("Free" ===
                                                              e.name &&
                                                              "Professionally Designed Templates" ===
                                                                t);
                                                        return (0, s.jsxs)(
                                                          "li",
                                                          {
                                                            className:
                                                              "flex items-start space-x-2 md:space-x-3",
                                                            children: [
                                                              (0, s.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex-shrink-0 pt-0.5",
                                                                  children: r
                                                                    ? (0,
                                                                      s.jsx)(
                                                                        x.A,
                                                                        {
                                                                          className:
                                                                            "h-4 w-4 md:h-5 md:w-5 text-green-500",
                                                                        }
                                                                      )
                                                                    : (0,
                                                                      s.jsx)(
                                                                        m.A,
                                                                        {
                                                                          className:
                                                                            "h-4 w-4 md:h-5 md:w-5 text-red-500",
                                                                        }
                                                                      ),
                                                                }
                                                              ),
                                                              (0, s.jsx)(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-sm ".concat(
                                                                      r
                                                                        ? "text-gray-700"
                                                                        : "text-gray-500 line-through"
                                                                    ),
                                                                  dangerouslySetInnerHTML:
                                                                    {
                                                                      __html: a,
                                                                    },
                                                                }
                                                              ),
                                                            ],
                                                          },
                                                          t
                                                        );
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              },
                                              t.title
                                            )
                                          ),
                                        }),
                                      ],
                                    },
                                    e.name
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    4474: (e, t, a) => {
      a.d(t, { A: () => h });
      var s = a(7558),
        r = a(5750),
        l = a(4390),
        i = a(1492),
        o = a(7622),
        n = a(1206),
        c = a(8016),
        m = a(380),
        d = a(46),
        x = a(7614);
      let p = [
        {
          text: "Your complete portfolio setup guide",
          icon: (0, s.jsx)(o.A, { className: "w-5 h-5 text-green-500" }),
        },
        {
          text: "Template customization tips",
          icon: (0, s.jsx)(o.A, { className: "w-5 h-5 text-green-500" }),
        },
        {
          text: "Best practices for deployment",
          icon: (0, s.jsx)(o.A, { className: "w-5 h-5 text-green-500" }),
        },
      ];
      function h(e) {
        let { isOpen: t, onClose: a, onSuccess: o } = e,
          [h, u] = (0, r.useState)(""),
          [g, f] = (0, r.useState)(!1),
          [b, y] = (0, r.useState)({
            show: !1,
            type: "success",
            title: "",
            message: "",
          }),
          j = (e, t, a) => {
            y({ show: !0, type: e, title: t, message: a });
          },
          w = () => {
            (0, d.u4)("free-template-subscribed-from-new-modal"), o();
          },
          N = async (e) => {
            if ((e.preventDefault(), !h)) {
              j("error", "Error", "Please enter your email address");
              return;
            }
            f(!0);
            try {
              let e = await fetch("/api/newsletter", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: h }),
                }),
                t = await e.json();
              if (!e.ok) throw Error(t.error || "Failed to subscribe");
              w();
            } catch (t) {
              let e = t instanceof Error ? t.message : "Failed to subscribe";
              "Email already subscribed" === e
                ? w()
                : j("error", "Subscription Failed", e);
            } finally {
              f(!1);
            }
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            b.show &&
              (0, s.jsx)(x.A, {
                type: b.type,
                title: b.title,
                message: b.message,
                onClose: () => y((e) => ({ ...e, show: !1 })),
              }),
            (0, s.jsx)(l.e, {
              appear: !0,
              show: t,
              as: r.Fragment,
              children: (0, s.jsxs)(i.lG, {
                as: "div",
                className: "relative z-50",
                onClose: a,
                children: [
                  (0, s.jsx)(l._, {
                    as: r.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: (0, s.jsx)("div", {
                      className: "fixed inset-0 bg-black/30 backdrop-blur-sm",
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: (0, s.jsx)("div", {
                      className:
                        "flex min-h-full items-center justify-center p-4 text-center",
                      children: (0, s.jsx)(l._, {
                        as: r.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: (0, s.jsxs)(i.Lj, {
                          className:
                            "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                          children: [
                            (0, s.jsx)("div", {
                              className: "absolute top-4 right-4",
                              children: (0, s.jsxs)("button", {
                                type: "button",
                                className:
                                  "text-gray-400 hover:text-gray-500 focus:outline-none",
                                onClick: a,
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close",
                                  }),
                                  (0, s.jsx)(n.A, { className: "h-6 w-6" }),
                                ],
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: "text-center",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100",
                                  children: (0, s.jsx)(c.A, {
                                    className: "h-6 w-6 text-green-600",
                                  }),
                                }),
                                (0, s.jsx)(i.L3, {
                                  as: "h3",
                                  className:
                                    "mt-4 text-xl font-bold leading-6 text-gray-900",
                                  children: "Get Your Free Portfolio Kit",
                                }),
                                (0, s.jsx)("div", {
                                  className: "mt-2",
                                  children: (0, s.jsx)("p", {
                                    className: "text-sm text-gray-500",
                                    children:
                                      "Enter your email to get instant access to the template and other goodies:",
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsx)("ul", {
                              className: "mt-6 space-y-2 text-sm text-gray-600",
                              children: p.map((e, t) =>
                                (0, s.jsxs)(
                                  "li",
                                  {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.icon,
                                      (0, s.jsx)("span", { children: e.text }),
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                            (0, s.jsx)("form", {
                              onSubmit: N,
                              className: "mt-6",
                              children: (0, s.jsxs)("div", {
                                className: "flex flex-col sm:flex-row gap-2",
                                children: [
                                  (0, s.jsx)("input", {
                                    type: "email",
                                    value: h,
                                    onChange: (e) => u(e.target.value),
                                    placeholder: "Enter your email",
                                    disabled: g,
                                    className:
                                      "flex-1 px-3 py-2 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm disabled:opacity-50",
                                  }),
                                  (0, s.jsx)("button", {
                                    type: "submit",
                                    disabled: g,
                                    className:
                                      "px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap",
                                    children: g
                                      ? (0, s.jsxs)("div", {
                                          className:
                                            "flex items-center justify-center gap-2",
                                          children: [
                                            (0, s.jsx)(m.A, {
                                              className: "animate-spin h-4 w-4",
                                            }),
                                            (0, s.jsx)("span", {
                                              children: "Sending...",
                                            }),
                                          ],
                                        })
                                      : "Get Access Now",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    6774: (e, t, a) => {
      a.d(t, { A: () => f });
      var s = a(7558),
        r = a(5750),
        l = a(4390),
        i = a(1492),
        o = a(9549),
        n = a(9962),
        c = a(3231),
        m = a(1206),
        d = a(1587),
        x = a(7622),
        p = a(46),
        h = a(7118);
      let u = [
          {
            title: "Stunning Portfolios",
            icon: (0, s.jsx)(o.A, {
              className: "w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-500",
            }),
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            features: [
              "Professionally Designed Templates",
              "Functional Contact Form Integration",
              "Built-in Analytics",
              "SEO Optimized",
              "Dark/Light Theme Toggle",
              "Functional Resume Download Button",
              "Access to All Pro Templates",
            ],
          },
          {
            title: "Job-Ready Guide",
            icon: (0, s.jsx)(n.A, { className: "w-5 h-5 mr-2 text-green-500" }),
            bgColor: "bg-green-50",
            borderColor: "border-green-200",
            features: [
              "Exclusive Tech Interview Roadmap",
              "Curated Coding, System Design & Behavioral Interview Resources",
              "FAANG-Ready Resume Template",
            ],
          },
          {
            title: "Community & Support",
            icon: (0, s.jsx)(c.A, {
              className: "w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-500",
            }),
            bgColor: "bg-yellow-50",
            borderColor: "border-yellow-200",
            features: [
              "Private Discord Community Access",
              "Priority Email & Discord Support",
            ],
          },
        ],
        g = u.flatMap((e) => e.features);
      function f(e) {
        let { isOpen: t, onClose: a } = e,
          [o, n] = (0, r.useState)(0),
          c = (0, r.useRef)(null),
          [f, b] = (0, r.useState)(null),
          y = (0, r.useMemo)(
            () => [
              {
                name: "Portfolio Pro",
                price: "$19",
                originalPrice: "",
                description: (0, s.jsxs)(s.Fragment, {
                  children: [
                    "Get access to all",
                    " ",
                    (0, s.jsx)("span", {
                      className:
                        "font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text",
                      children: "Pro Portfolio Templates",
                    }),
                    ".",
                  ],
                }),
                href: "https://buy.polar.sh/polar_cl_6rjYHgrUt48h6Jh6H9rntaZ4HU3hENO7DyKlv1qkN4w",
                features: u[0].features,
                cta: "Get Portfolio Pro",
              },
              {
                name: "Complete Pro Package",
                price: "$39",
                originalPrice: "$78",
                description: (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text",
                      children: "Pro Portfolio Templates",
                    }),
                    " +",
                    " ",
                    (0, s.jsx)("span", {
                      className:
                        "font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text",
                      children: "Job-Ready Guide",
                    }),
                    " ",
                    "and",
                    " ",
                    (0, s.jsx)("span", {
                      className:
                        "font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text",
                      children: "Interview Resources",
                    }),
                    ".",
                  ],
                }),
                href: "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
                features: g,
                cta: "Get Complete Access - 50% Off! ",
              },
            ],
            []
          );
        return (
          (0, r.useEffect)(() => {
            if (t) {
              (0, p.u4)("pro-template-modal-view"),
                n(0),
                setTimeout(() => {
                  if (c.current) {
                    let e = c.current.clientWidth;
                    c.current.scrollTo({ left: 0 * e, behavior: "instant" });
                  }
                }, 0);
              let e = setTimeout(() => {
                if ((n(1), c.current)) {
                  let e = c.current.clientWidth;
                  c.current.scrollTo({ left: 1 * e, behavior: "smooth" });
                }
              }, 500);
              return () => clearTimeout(e);
            }
          }, [t]),
          (0, s.jsx)(l.e, {
            appear: !0,
            show: t,
            as: r.Fragment,
            children: (0, s.jsxs)(i.lG, {
              as: "div",
              className: "relative z-50",
              onClose: a,
              children: [
                (0, s.jsx)(l._, {
                  as: r.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, s.jsx)("div", {
                    className: "fixed inset-0 bg-black/30 backdrop-blur-sm",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "fixed inset-0 overflow-y-auto",
                  children: (0, s.jsx)("div", {
                    className:
                      "flex min-h-full items-center justify-center p-4 text-center",
                    children: (0, s.jsx)(l._, {
                      as: r.Fragment,
                      enter: "ease-out duration-300",
                      enterFrom: "opacity-0 scale-95",
                      enterTo: "opacity-100 scale-100",
                      leave: "ease-in duration-200",
                      leaveFrom: "opacity-100 scale-100",
                      leaveTo: "opacity-0 scale-95",
                      children: (0, s.jsxs)(i.Lj, {
                        className:
                          "w-full max-w-sm md:max-w-5xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center",
                                children: [
                                  (0, s.jsx)(i.L3, {
                                    as: "h3",
                                    className:
                                      "mt-4 text-2xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl",
                                    children: "Choose Your Pro Access Level",
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "mt-3 max-w-xl mx-auto text-md md:text-lg text-indigo-200",
                                    children:
                                      "Join 1,500+ developers who landed jobs at Google, Meta, and Netflix using our Pro Templates and Interview Resources.",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "mt-4 flex justify-center items-center gap-4",
                                    children: [
                                      (0, s.jsx)(h.default, {
                                        src: "/company-logos/google-icon.svg",
                                        alt: "Google",
                                        width: 32,
                                        height: 32,
                                        className: "h-7 md:h-8 w-auto",
                                      }),
                                      (0, s.jsx)(h.default, {
                                        src: "/company-logos/meta-icon.svg",
                                        alt: "Meta",
                                        width: 32,
                                        height: 32,
                                        className: "h-7 md:h-8 w-auto",
                                      }),
                                      (0, s.jsx)(h.default, {
                                        src: "/company-logos/netflix-icon.svg",
                                        alt: "Netflix",
                                        width: 32,
                                        height: 32,
                                        className: "h-7 md:h-8 w-auto",
                                      }),
                                      (0, s.jsx)(h.default, {
                                        src: "/company-logos/apple.svg",
                                        alt: "Apple",
                                        width: 32,
                                        height: 32,
                                        className: "h-7 md:h-8 w-auto",
                                      }),
                                      (0, s.jsx)(h.default, {
                                        src: "/company-logos/amazon-icon.svg",
                                        alt: "Amazon",
                                        width: 32,
                                        height: 32,
                                        className: "h-7 md:h-8 w-auto mt-1",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("button", {
                                type: "button",
                                className:
                                  "absolute top-4 right-4 text-white/80 hover:text-white focus:outline-none",
                                onClick: a,
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close",
                                  }),
                                  (0, s.jsx)(m.A, { className: "h-6 w-6" }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "p-6",
                            children: [
                              (0, s.jsx)("div", {
                                className: "md:hidden mb-3",
                                children: (0, s.jsx)("div", {
                                  className: "flex bg-gray-100 rounded-lg p-1",
                                  children: y.map((e, t) =>
                                    (0, s.jsx)(
                                      "button",
                                      {
                                        onClick: () => {
                                          if ((n(t), c.current)) {
                                            let e = c.current.clientWidth;
                                            c.current.scrollTo({
                                              left: t * e,
                                              behavior: "smooth",
                                            });
                                          }
                                        },
                                        className:
                                          "flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200 ".concat(
                                            o === t
                                              ? "bg-white text-gray-900 shadow-sm"
                                              : "text-gray-500 hover:text-gray-700"
                                          ),
                                        children:
                                          "Complete Pro Package" === e.name
                                            ? "Complete Pro"
                                            : e.name,
                                      },
                                      e.name
                                    )
                                  ),
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className: "md:hidden px-4",
                                children: (0, s.jsx)("div", {
                                  ref: c,
                                  className:
                                    "overflow-x-scroll scroll-smooth snap-x snap-mandatory -mx-4",
                                  onScroll: (e) => {
                                    let t = e.target;
                                    n(Math.round(t.scrollLeft / t.clientWidth));
                                  },
                                  children: (0, s.jsx)("div", {
                                    className: "flex px-4 py-1 pt-[14px]",
                                    style: { width: "calc(200% + 2rem)" },
                                    children: y.map((e, t) =>
                                      (0, s.jsxs)(
                                        "div",
                                        {
                                          className:
                                            "flex-shrink-0 snap-center relative flex flex-col rounded-2xl border p-4 shadow-lg ".concat(
                                              0 === t
                                                ? "border-green-500 ring-2 ring-green-500 shadow-2xl shadow-green-400"
                                                : "border-purple-500 ring-2 ring-purple-500 shadow-2xl shadow-purple-400"
                                            ),
                                          style: {
                                            width: "calc(50% - 0.5rem)",
                                            marginRight: 0 === t ? "1rem" : "0",
                                          },
                                          children: [
                                            (0, s.jsx)("h4", {
                                              className:
                                                "text-lg font-semibold text-gray-900",
                                              children: e.name,
                                            }),
                                            (0, s.jsxs)("p", {
                                              className:
                                                "mt-1 flex items-baseline gap-x-1",
                                              children: [
                                                e.originalPrice &&
                                                  (0, s.jsx)("span", {
                                                    className:
                                                      "text-xl font-medium text-gray-400 line-through",
                                                    children: e.originalPrice,
                                                  }),
                                                (0, s.jsx)("span", {
                                                  className:
                                                    "text-3xl font-bold tracking-tight text-gray-900",
                                                  children: e.price,
                                                }),
                                                "$0" !== e.price &&
                                                  (0, s.jsx)("span", {
                                                    className:
                                                      "text-sm font-semibold leading-6 tracking-wide text-gray-600",
                                                    children: "/one-time",
                                                  }),
                                              ],
                                            }),
                                            (0, s.jsx)("p", {
                                              className:
                                                "mt-4 text-sm text-gray-500 h-10",
                                              children: e.description,
                                            }),
                                            (0, s.jsxs)("button", {
                                              onClick: (t) => {
                                                "Portfolio Pro" === e.name
                                                  ? (t.preventDefault(),
                                                    (0, p.u4)(
                                                      "pro-template-modal-click-pro",
                                                      {
                                                        cta: "Get Portfolio Pro Access",
                                                      }
                                                    ))
                                                  : "Complete Pro Package" ===
                                                      e.name &&
                                                    (t.preventDefault(),
                                                    (0, p.u4)(
                                                      "pro-template-modal-click-pro-plus",
                                                      {
                                                        cta: "Get Complete Pro Package Access",
                                                      }
                                                    )),
                                                  "$0" !== e.price
                                                    ? (b(e.name),
                                                      setTimeout(() => {
                                                        window.location.href =
                                                          e.href;
                                                      }, 120))
                                                    : (window.location.href =
                                                        e.href);
                                              },
                                              className:
                                                "relative mt-6 block w-full rounded-md py-3 text-center text-md font-semibold transition-all duration-300 ease-out ".concat(
                                                  0 === t
                                                    ? "bg-green-600 text-white hover:bg-green-700 shadow-md"
                                                    : "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white hover:from-purple-600 hover:via-fuchsia-600 hover:to-pink-600 shadow-md"
                                                ),
                                              disabled: f === e.name,
                                              children: [
                                                (0, s.jsx)("span", {
                                                  className:
                                                    "inline-flex items-center justify-center gap-2 transition-opacity duration-200 ".concat(
                                                      f === e.name
                                                        ? "opacity-0"
                                                        : "opacity-100"
                                                    ),
                                                  children: e.cta,
                                                }),
                                                (0, s.jsx)("span", {
                                                  className:
                                                    "absolute inset-0 grid place-items-center transition-opacity duration-200 ".concat(
                                                      f === e.name
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                    ),
                                                  "aria-hidden":
                                                    f === e.name
                                                      ? "false"
                                                      : "true",
                                                  children: (0, s.jsx)("span", {
                                                    className:
                                                      "h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, s.jsxs)("div", {
                                              className:
                                                "mt-3 flex items-center justify-center text-sm text-gray-600",
                                              children: [
                                                (0, s.jsx)(d.A, {
                                                  className:
                                                    "h-4 w-4 mr-2 text-green-500",
                                                }),
                                                (0, s.jsx)("span", {
                                                  children:
                                                    "30-day money back guarantee",
                                                }),
                                              ],
                                            }),
                                            (0, s.jsx)("div", {
                                              className:
                                                "mt-4 space-y-4 flex-1",
                                              children: u.map((t) =>
                                                (0, s.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "rounded-lg p-3 border "
                                                        .concat(
                                                          t.borderColor,
                                                          " "
                                                        )
                                                        .concat(t.bgColor),
                                                    children: [
                                                      (0, s.jsxs)("h5", {
                                                        className:
                                                          "font-semibold text-gray-800 flex items-center mb-3",
                                                        children: [
                                                          t.icon,
                                                          t.title,
                                                        ],
                                                      }),
                                                      (0, s.jsx)("ul", {
                                                        role: "list",
                                                        className: "space-y-3",
                                                        children:
                                                          t.features.map(
                                                            (a) => {
                                                              let r =
                                                                  "Job-Ready Guide" ===
                                                                  t.title,
                                                                l =
                                                                  "Complete Pro Package" ===
                                                                    e.name ||
                                                                  !r;
                                                              return (0,
                                                              s.jsxs)(
                                                                "li",
                                                                {
                                                                  className:
                                                                    "flex items-start space-x-2",
                                                                  children: [
                                                                    (0, s.jsx)(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex-shrink-0 pt-0.5",
                                                                        children:
                                                                          l
                                                                            ? (0,
                                                                              s.jsx)(
                                                                                x.A,
                                                                                {
                                                                                  className:
                                                                                    "h-4 w-4 text-green-500",
                                                                                }
                                                                              )
                                                                            : (0,
                                                                              s.jsx)(
                                                                                m.A,
                                                                                {
                                                                                  className:
                                                                                    "h-4 w-4 text-red-500",
                                                                                }
                                                                              ),
                                                                      }
                                                                    ),
                                                                    (0, s.jsx)(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-sm ".concat(
                                                                            l
                                                                              ? "text-gray-700"
                                                                              : "text-gray-500 line-through"
                                                                          ),
                                                                        dangerouslySetInnerHTML:
                                                                          {
                                                                            __html:
                                                                              a,
                                                                          },
                                                                      }
                                                                    ),
                                                                  ],
                                                                },
                                                                a
                                                              );
                                                            }
                                                          ),
                                                      }),
                                                    ],
                                                  },
                                                  t.title
                                                )
                                              ),
                                            }),
                                          ],
                                        },
                                        "mobile-".concat(e.name)
                                      )
                                    ),
                                  }),
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "hidden md:flex lg:mt-0 justify-center gap-6",
                                children: y.map((e, t) =>
                                  (0, s.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "relative flex flex-col rounded-2xl border p-4 md:p-6 shadow-lg ".concat(
                                          0 === t
                                            ? "border-green-500 ring-2 ring-green-500 shadow-2xl shadow-green-400"
                                            : "border-purple-500 ring-2 ring-purple-500 shadow-2xl shadow-purple-400"
                                        ),
                                      children: [
                                        (0, s.jsx)("h4", {
                                          className:
                                            "text-lg md:text-xl font-semibold text-gray-900",
                                          children: e.name,
                                        }),
                                        (0, s.jsxs)("p", {
                                          className:
                                            "mt-1 flex items-baseline gap-x-1",
                                          children: [
                                            e.originalPrice &&
                                              (0, s.jsx)("span", {
                                                className:
                                                  "text-xl md:text-2xl font-medium text-gray-400 line-through",
                                                children: e.originalPrice,
                                              }),
                                            (0, s.jsx)("span", {
                                              className:
                                                "text-3xl md:text-4xl font-bold tracking-tight text-gray-900",
                                              children: e.price,
                                            }),
                                            "$0" !== e.price &&
                                              (0, s.jsx)("span", {
                                                className:
                                                  "text-sm font-semibold leading-6 tracking-wide text-gray-600",
                                                children: "/one-time",
                                              }),
                                          ],
                                        }),
                                        (0, s.jsx)("p", {
                                          className:
                                            "mt-4 text-base text-gray-500 h-10",
                                          children: e.description,
                                        }),
                                        (0, s.jsxs)("button", {
                                          onClick: (t) => {
                                            "Portfolio Pro" === e.name
                                              ? (t.preventDefault(),
                                                (0, p.u4)(
                                                  "pro-template-modal-click-pro",
                                                  {
                                                    cta: "Get Portfolio Pro Access",
                                                  }
                                                ))
                                              : "Portfolio Pro Plus" ===
                                                  e.name &&
                                                (t.preventDefault(),
                                                (0, p.u4)(
                                                  "pro-template-modal-click-pro-plus",
                                                  {
                                                    cta: "Get Portfolio Pro Plus Access",
                                                  }
                                                )),
                                              "$0" !== e.price
                                                ? (b(e.name),
                                                  setTimeout(() => {
                                                    window.location.href =
                                                      e.href;
                                                  }, 120))
                                                : (window.location.href =
                                                    e.href);
                                          },
                                          className:
                                            "relative mt-6 block w-full rounded-md py-3 px-3 md:py-3 md:px-4 text-center text-md font-semibold transition-all duration-300 ease-out ".concat(
                                              0 === t
                                                ? "bg-green-600 text-white hover:bg-green-700 shadow-md"
                                                : "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white hover:from-purple-600 hover:via-fuchsia-600 hover:to-pink-600 shadow-md"
                                            ),
                                          disabled: f === e.name,
                                          children: [
                                            (0, s.jsx)("span", {
                                              className:
                                                "inline-flex items-center justify-center gap-2 transition-opacity duration-200 ".concat(
                                                  f === e.name
                                                    ? "opacity-0"
                                                    : "opacity-100"
                                                ),
                                              children: e.cta,
                                            }),
                                            (0, s.jsx)("span", {
                                              className:
                                                "absolute inset-0 grid place-items-center transition-opacity duration-200 ".concat(
                                                  f === e.name
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                                ),
                                              "aria-hidden":
                                                f === e.name ? "false" : "true",
                                              children: (0, s.jsx)("span", {
                                                className:
                                                  "h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin",
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "mt-3 flex items-center justify-center text-sm text-gray-600",
                                          children: [
                                            (0, s.jsx)(d.A, {
                                              className:
                                                "h-4 w-4 mr-2 text-green-500",
                                            }),
                                            (0, s.jsx)("span", {
                                              children:
                                                "30-day money back guarantee",
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "mt-4 lg:mt-4 space-y-4 flex-1",
                                          children: u.map((t) =>
                                            (0, s.jsxs)(
                                              "div",
                                              {
                                                className:
                                                  "rounded-lg p-3 md:p-4 border "
                                                    .concat(t.borderColor, " ")
                                                    .concat(t.bgColor),
                                                children: [
                                                  (0, s.jsxs)("h5", {
                                                    className:
                                                      "font-semibold text-gray-800 flex items-center mb-3",
                                                    children: [t.icon, t.title],
                                                  }),
                                                  (0, s.jsx)("ul", {
                                                    role: "list",
                                                    className: "space-y-3",
                                                    children: t.features.map(
                                                      (a) => {
                                                        let r =
                                                            "Job-Ready Guide" ===
                                                            t.title,
                                                          l =
                                                            "Complete Pro Package" ===
                                                              e.name || !r;
                                                        return (0, s.jsxs)(
                                                          "li",
                                                          {
                                                            className:
                                                              "flex items-start space-x-2 md:space-x-3",
                                                            children: [
                                                              (0, s.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex-shrink-0 pt-0.5",
                                                                  children: l
                                                                    ? (0,
                                                                      s.jsx)(
                                                                        x.A,
                                                                        {
                                                                          className:
                                                                            "h-4 w-4 md:h-5 md:w-5 text-green-500",
                                                                        }
                                                                      )
                                                                    : (0,
                                                                      s.jsx)(
                                                                        m.A,
                                                                        {
                                                                          className:
                                                                            "h-4 w-4 md:h-5 md:w-5 text-red-500",
                                                                        }
                                                                      ),
                                                                }
                                                              ),
                                                              (0, s.jsx)(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-sm ".concat(
                                                                      l
                                                                        ? "text-gray-700"
                                                                        : "text-gray-500 line-through"
                                                                    ),
                                                                  dangerouslySetInnerHTML:
                                                                    {
                                                                      __html: a,
                                                                    },
                                                                }
                                                              ),
                                                            ],
                                                          },
                                                          a
                                                        );
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              },
                                              t.title
                                            )
                                          ),
                                        }),
                                      ],
                                    },
                                    e.name
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
  },
]);
