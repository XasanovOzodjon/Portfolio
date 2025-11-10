"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4944],
  {
    4944: (e, t, o) => {
      o.d(t, { default: () => u });
      var a = o(7558),
        r = o(3946),
        i = o.n(r),
        l = o(7118),
        s = o(5750),
        n = o(7343),
        p = o(4474),
        d = o(6774),
        m = o(9287);
      let c = (0, o(709).A)("ChevronLeft", [
        ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
      ]);
      var h = o(7934),
        g = o(46),
        f = o(7257);
      function u() {
        let [e, t] = (0, s.useState)(!1),
          [o, r] = (0, s.useState)(!1),
          [u, b] = (0, s.useState)(!1),
          [v, w] = (0, s.useState)(!1),
          [P, k] = (0, s.useState)(!1),
          [x, j] = (0, s.useState)(""),
          y = (0, n.usePathname)(),
          I =
            y.includes("/portfolio-templates/") && "/portfolio-templates" !== y,
          A = (I && y.split("/").pop()) || "",
          S = f.e.find((e) => e.id === A);
        (0, s.useEffect)(() => {
          let e = () => {
            t(window.scrollY > 10);
          };
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []),
          (0, s.useEffect)(() => {
            r(!1);
          }, [y]);
        let N = () => {
            r(!1);
          },
          B = (e) => {
            e.preventDefault(),
              S &&
                (S.isPaid
                  ? ((0, g.u4)("navbar-use-template-paid-click", {
                      cta: "Use Template",
                      templateId: S.id,
                    }),
                    b(!0))
                  : ((0, g.u4)("navbar-use-template-free-click", {
                      cta: "Use Template",
                      templateId: S.id,
                    }),
                    j(S.github),
                    k(!0)));
          };
        return (0, a.jsxs)("nav", {
          className: "fixed z-50 transition-all duration-200 "
            .concat(
              I
                ? "md:left-1/2 md:-translate-x-1/2 md:top-6 md:rounded-full md:px-3 md:w-auto md:bg-white/70 md:backdrop-blur-lg md:shadow-lg w-full"
                : "w-full",
              " "
            )
            .concat(
              e || o
                ? "bg-white/70 backdrop-blur-lg shadow-lg"
                : "bg-transparent"
            ),
          children: [
            (0, a.jsxs)("div", {
              className: "".concat(
                I ? "md:px-0 px-4" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              ),
              children: [
                (0, a.jsxs)("div", {
                  className: "flex justify-between items-center ".concat(
                    I ? "md:h-12 h-16" : "h-16"
                  ),
                  children: [
                    (0, a.jsxs)(i(), {
                      href: "/",
                      onClick: N,
                      className: "flex items-center space-x-2 group ".concat(
                        I ? "text-sm" : ""
                      ),
                      children: [
                        (0, a.jsx)(l.default, {
                          src: "/logo/logo-dark-rounded.png",
                          alt: "Logo",
                          width: 28,
                          height: 28,
                        }),
                        (0, a.jsxs)("span", {
                          className: "font-bold relative",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity",
                              children: "DevPortfolio",
                            }),
                            !I &&
                              (0, a.jsx)("span", {
                                className:
                                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300",
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "hidden md:flex items-center",
                      children: [
                        I &&
                          (0, a.jsx)("div", {
                            className: "h-4 w-px bg-gray-200 ml-4 mr-3",
                          }),
                        I
                          ? (0, a.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, a.jsxs)(i(), {
                                  href: "/portfolio-templates",
                                  onClick: () =>
                                    (0, g.u4)(
                                      "navbar-back-to-templates-click",
                                      { cta: "Back to Templates" }
                                    ),
                                  className:
                                    "text-sm text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-1.5",
                                  children: [
                                    (0, a.jsx)(c, { className: "w-3.5 h-3.5" }),
                                    (0, a.jsx)("span", {
                                      children: "Back to Templates",
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "h-4 w-px bg-gray-200 mx-4",
                                }),
                                (0, a.jsxs)(i(), {
                                  href: (null == S ? void 0 : S.github) || "#",
                                  onClick: B,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "flex items-center space-x-2 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5",
                                  children: [
                                    (0, a.jsx)(h.A, { className: "w-4 h-4" }),
                                    (0, a.jsx)("span", {
                                      children: "Use Template",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, a.jsx)("div", {
                              className: "flex items-center space-x-4",
                              children:
                                "/" === y
                                  ? (0, a.jsx)(a.Fragment, {
                                      children: (0, a.jsxs)(i(), {
                                        href: "/portfolio-templates",
                                        onClick: () =>
                                          (0, g.u4)(
                                            "navbar-all-templates-click",
                                            { cta: "All Templates" }
                                          ),
                                        className:
                                          "relative text-gray-600 hover:text-gray-900 transition-colors font-medium group",
                                        children: [
                                          "Templates",
                                          (0, a.jsx)("span", {
                                            className:
                                              "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300",
                                          }),
                                        ],
                                      }),
                                    })
                                  : (0, a.jsxs)(i(), {
                                      href: "/portfolio-templates",
                                      className:
                                        "relative text-gray-600 hover:text-gray-900 transition-colors font-medium group ".concat(
                                          "/portfolio-templates" === y
                                            ? "text-gray-900"
                                            : ""
                                        ),
                                      children: [
                                        "Templates",
                                        (0, a.jsx)("span", {
                                          className:
                                            "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 ".concat(
                                              "/portfolio-templates" === y
                                                ? "w-full"
                                                : ""
                                            ),
                                        }),
                                      ],
                                    }),
                            }),
                      ],
                    }),
                    I &&
                      (0, a.jsxs)(i(), {
                        href: (null == S ? void 0 : S.github) || "#",
                        onClick: B,
                        className:
                          "md:hidden flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 mx-2 transform hover:-translate-y-0.5",
                        children: [
                          (0, a.jsx)(h.A, { className: "w-4 h-4" }),
                          (0, a.jsx)("span", { children: "Use Template" }),
                        ],
                      }),
                    (0, a.jsx)("button", {
                      className:
                        "md:hidden relative h-16 px-2 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600/5 hover:to-purple-600/5 transition-colors",
                      onClick: () => r(!o),
                      "aria-label": "Toggle menu",
                      children: (0, a.jsxs)("div", {
                        className: "relative w-5 h-4 ".concat(
                          o ? "" : "pt-[5px]"
                        ),
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "absolute left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-all duration-300 ease-in-out ".concat(
                                o
                                  ? "rotate-45 translate-y-1.5 w-5"
                                  : "w-5 -translate-y-1.5"
                              ),
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "absolute left-0 h-0.5 w-5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-all duration-300 ease-in-out ".concat(
                                o ? "opacity-0 translate-x-2" : "opacity-100"
                              ),
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "absolute left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-all duration-300 ease-in-out ".concat(
                                o
                                  ? "-rotate-45 translate-y-1.5 w-5"
                                  : "w-5 translate-y-1.5"
                              ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "md:hidden transition-all duration-300 ease-in-out overflow-hidden ".concat(
                      o ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    ),
                  children: (0, a.jsx)("div", {
                    className: "px-2 pt-2 pb-3 space-y-3",
                    children: I
                      ? (0, a.jsxs)(i(), {
                          href: "/portfolio-templates",
                          onClick: N,
                          className:
                            "px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:bg-gradient-to-r hover:from-blue-600/5 hover:to-purple-600/5 hover:text-gray-900 transition-all duration-300 flex items-center",
                          children: [
                            (0, a.jsx)(c, { className: "w-4 h-4 mr-2" }),
                            "Back to Templates",
                          ],
                        })
                      : "/" === y
                      ? (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsx)(i(), {
                            href: "/portfolio-templates",
                            onClick: () => {
                              N(),
                                (0, g.u4)("navbar-all-templates-click", {
                                  cta: "All Templates",
                                });
                            },
                            className:
                              "block px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:bg-gradient-to-r hover:from-blue-600/5 hover:to-purple-600/5 hover:text-gray-900 transition-all duration-300",
                            children: "Templates",
                          }),
                        })
                      : (0, a.jsx)(i(), {
                          href: "/portfolio-templates",
                          onClick: () => {
                            N(),
                              (0, g.u4)("navbar-back-to-templates-click", {
                                cta: "Back to Templates",
                              });
                          },
                          className:
                            "block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ".concat(
                              "/portfolio-templates" === y
                                ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-gray-900"
                                : "text-gray-600 hover:bg-gradient-to-r hover:from-blue-600/5 hover:to-purple-600/5 hover:text-gray-900"
                            ),
                          children: "Templates",
                        }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(d.A, {
              isOpen: u,
              onClose: () => b(!1),
              onOpenSubscriptionModal: () => {
                b(!1), w(!0);
              },
              templateId: y.split("/").pop() || "",
            }),
            (0, a.jsx)(m.A, {
              isOpen: P,
              onClose: () => k(!1),
              onOpenSubscriptionModal: () => {
                k(!1), w(!0);
              },
              templateId: y.split("/").pop() || "",
            }),
            (0, a.jsx)(p.A, {
              isOpen: v,
              onClose: () => w(!1),
              onSuccess: () => {
                w(!1), window.open(x, "_blank");
              },
            }),
          ],
        });
      }
    },
    7257: (e, t, o) => {
      o.d(t, { e: () => a });
      let a = [
        {
          id: "web-developer",
          name: "Web Developer Portfolio",
          description:
            "Modern portfolio with animated background and project showcase.",
          image: "/portfolio-previews/web-developer-portfolio-template.png",
          tags: ["Modern", "Code", "Dark"],
          features: [
            "Animated background",
            "Project showcase",
            "Contact Section",
          ],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["frontend", "backend", "full stack"],
          theme: "dark",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "web-developer-pro",
          name: "Web Developer Portfolio Pro",
          description:
            "Modern portfolio with animated background and project showcase.",
          image: "/portfolio-previews/web-developer-portfolio-template.png",
          tags: ["Modern", "Code", "Dark"],
          features: [
            "Pro",
            "Animated background",
            "Project showcase",
            "Contact Section",
          ],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["frontend", "backend", "full stack"],
          theme: "dark",
          isPro: !0,
          isPaid: !0,
        },
        {
          id: "web-developer-light",
          name: "Web Developer Portfolio Light",
          description:
            "Modern portfolio with animated background and project showcase.",
          image:
            "/portfolio-previews/web-developer-light-portfolio-template.png",
          tags: ["Modern", "Code", "Light"],
          features: [
            "Animated background",
            "Project showcase",
            "Contact Section",
          ],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["frontend", "backend", "full stack"],
          theme: "light",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "full-stack-developer",
          name: "Full Stack Developer Portfolio",
          description:
            "Technical portfolio with system diagrams and API metrics.",
          image:
            "/portfolio-previews/full-stack-developer-portfolio-template.png",
          tags: ["Technical", "Full Stack", "Dark"],
          features: ["System diagrams", "API showcase", "Project metrics"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["full stack", "backend"],
          theme: "dark",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "full-stack-developer-pro",
          name: "Full Stack Developer Portfolio Pro",
          description:
            "Technical portfolio with system diagrams and API metrics.",
          image:
            "/portfolio-previews/full-stack-developer-portfolio-template.png",
          tags: ["Technical", "Full Stack", "Dark"],
          features: [
            "Pro",
            "System diagrams",
            "API showcase",
            "Project metrics",
          ],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["full stack", "backend"],
          theme: "dark",
          isPro: !0,
          isPaid: !0,
        },
        {
          id: "full-stack-developer-light",
          name: "Full Stack Developer Portfolio Light",
          description:
            "Technical portfolio with system diagrams and API metrics.",
          image:
            "/portfolio-previews/full-stack-developer-light-portfolio-template.png",
          tags: ["Technical", "Full Stack", "Light"],
          features: ["System diagrams", "API showcase", "Project metrics"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["full stack", "backend"],
          theme: "light",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "frontend-developer",
          name: "Frontend Developer Portfolio",
          description: "Interactive showcase for UI/UX and frontend projects.",
          image:
            "/portfolio-previews/frontend-developer-portfolio-template.png",
          tags: ["Interactive", "Modern", "Dark"],
          features: ["Interactive UI", "Animations", "Project grid"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["frontend"],
          theme: "dark",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "frontend-developer-pro",
          name: "Frontend Developer Portfolio Pro",
          description: "Interactive showcase for UI/UX and frontend projects.",
          image:
            "/portfolio-previews/frontend-developer-portfolio-template.png",
          tags: ["Interactive", "Modern", "Dark"],
          features: ["Pro", "Interactive UI", "Animations", "Project grid"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["frontend"],
          theme: "dark",
          isPro: !0,
          isPaid: !0,
        },
        {
          id: "frontend-developer-light",
          name: "Frontend Developer Portfolio Light",
          description: "Interactive showcase for UI/UX and frontend projects.",
          image:
            "/portfolio-previews/frontend-developer-light-portfolio-template.png",
          tags: ["Interactive", "Modern", "Light"],
          features: ["Interactive UI", "Animations", "Project grid"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["frontend"],
          theme: "light",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "backend-developer",
          name: "Backend Developer Portfolio",
          description:
            "Terminal-style portfolio with system architecture focus.",
          image: "/portfolio-previews/backend-developer-portfolio-template.png",
          tags: ["Technical", "Full Stack", "Dark"],
          features: ["Terminal UI", "System diagrams", "API metrics"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["backend"],
          theme: "dark",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "backend-developer-pro",
          name: "Backend Developer Portfolio Pro",
          description:
            "Terminal-style portfolio with system architecture focus.",
          image: "/portfolio-previews/backend-developer-portfolio-template.png",
          tags: ["Technical", "Full Stack", "Dark"],
          features: ["Pro", "Terminal UI", "System diagrams", "API metrics"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["backend"],
          theme: "dark",
          isPro: !0,
          isPaid: !0,
        },
        {
          id: "mobile-developer",
          name: "Mobile Developer Portfolio",
          description:
            "Showcase your mobile app development skills with a sleek, user-friendly design.",
          image: "/portfolio-previews/mobile-developer-portfolio-template.png",
          tags: ["Mobile", "Apps", "Dark"],
          features: ["App showcase", "Store stats", "Dev process"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["mobile"],
          theme: "dark",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "mobile-developer-pro",
          name: "Mobile Developer Portfolio Pro",
          description:
            "Showcase your mobile app development skills with a sleek, user-friendly design.",
          image: "/portfolio-previews/mobile-developer-portfolio-template.png",
          tags: ["Mobile", "Apps", "Dark"],
          features: ["Pro", "App showcase", "Store stats", "Dev process"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["mobile"],
          theme: "dark",
          isPro: !0,
          isPaid: !0,
        },
        {
          id: "mobile-developer-light",
          name: "Mobile Developer Portfolio Light",
          description:
            "Showcase your mobile app development skills with a sleek, user-friendly design.",
          image:
            "/portfolio-previews/mobile-developer-light-portfolio-template.png",
          tags: ["Mobile", "Apps", "Light"],
          features: ["App showcase", "Store stats", "Dev process"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["mobile"],
          theme: "light",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "modern-minimal",
          name: "Modern Minimal Portfolio",
          description: "Bold and modern design with smooth animations.",
          image: "/portfolio-previews/modern-minimal-portfolio-template.png",
          tags: ["Minimal", "Modern", "Dark"],
          features: ["Smooth animations", "Dark theme", "Project grid"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["all", "software engineer"],
          theme: "dark",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "modern-minimal-pro",
          name: "Modern Minimal Portfolio Pro",
          description: "Bold and modern design with smooth animations.",
          image: "/portfolio-previews/modern-minimal-portfolio-template.png",
          tags: ["Minimal", "Modern", "Dark"],
          features: ["Pro", "Smooth animations", "Dark theme", "Project grid"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["all", "software engineer"],
          theme: "dark",
          isPro: !0,
          isPaid: !0,
        },
        {
          id: "modern-minimal-light",
          name: "Modern Minimal Portfolio Light",
          description: "Bold and modern design with smooth animations.",
          image:
            "/portfolio-previews/modern-minimal-light-portfolio-template.png",
          tags: ["Minimal", "Modern", "Light"],
          features: ["Smooth animations", "Light theme", "Project grid"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["all", "software engineer"],
          theme: "light",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "simple-dark",
          name: "Simple Portfolio Dark",
          description: "Clean, to the point, fast-loading minimalist design.",
          image: "/portfolio-previews/simple-dark-portfolio-template.png",
          tags: ["Clean", "Simple", "Dark"],
          features: ["Free", "Clean layout", "Fast load", "Project grid"],
          github:
            "https://github.com/devportfoliotemplates/devportfoliotemplates",
          roles: ["all", "software engineer"],
          theme: "dark",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "simple",
          name: "Simple Portfolio",
          description: "Clean, to the point, fast-loading minimalist design.",
          image: "/portfolio-previews/simple-portfolio-template.png",
          tags: ["Clean", "Simple", "Light"],
          features: ["Free", "Clean layout", "Fast load", "Project grid"],
          github:
            "https://github.com/devportfoliotemplates/devportfoliotemplates",
          roles: ["all", "software engineer"],
          theme: "light",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "simple-pro",
          name: "Simple Portfolio Pro",
          description: "Clean, to the point, fast-loading minimalist design.",
          image: "/portfolio-previews/simple-portfolio-template.png",
          tags: ["Clean", "Simple", "Light"],
          features: ["Pro", "Clean layout", "Fast load", "Project grid"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["all", "software engineer"],
          theme: "light",
          isPro: !0,
          isPaid: !0,
        },
        {
          id: "minimalist",
          name: "Minimalist Portfolio",
          description:
            "Single-page minimalist portfolio with a focus on skills and experience.",
          image: "/portfolio-previews/minimalist-portfolio-template.png",
          tags: ["Minimal", "Professional", "Dark"],
          features: ["Free", "No scroll", "Concise layout", "Responsive"],
          github:
            "https://github.com/devportfoliotemplates/devportfoliotemplates",
          roles: ["all", "software engineer"],
          theme: "dark",
          isPro: !1,
          isPaid: !0,
        },
        {
          id: "minimalist-pro",
          name: "Minimalist Portfolio Pro",
          description:
            "Single-page minimalist portfolio with a focus on skills and experience.",
          image: "/portfolio-previews/minimalist-portfolio-template.png",
          tags: ["Minimal", "Professional", "Dark"],
          features: ["Pro", "No scroll", "Concise layout", "Responsive"],
          github:
            "https://buy.polar.sh/polar_cl_Vbpcl4vnhI6aPazjTS4B4BGAwI3NYKGFp1E4A13kVZr",
          roles: ["all", "software engineer"],
          theme: "dark",
          isPro: !0,
          isPaid: !0,
        },
        {
          id: "minimalist-light",
          name: "Minimalist Portfolio Light",
          description:
            "Single-page minimalist portfolio with a focus on skills and experience.",
          image: "/portfolio-previews/minimalist-light-portfolio-template.png",
          tags: ["Minimal", "Professional", "Light"],
          features: ["Free", "No scroll", "Concise layout", "Responsive"],
          github:
            "https://github.com/devportfoliotemplates/devportfoliotemplates",
          roles: ["all", "software engineer"],
          theme: "light",
          isPro: !1,
          isPaid: !0,
        },
      ];
    },
    7343: (e, t, o) => {
      var a = o(6087);
      o.o(a, "usePathname") &&
        o.d(t, {
          usePathname: function () {
            return a.usePathname;
          },
        }),
        o.o(a, "useSearchParams") &&
          o.d(t, {
            useSearchParams: function () {
              return a.useSearchParams;
            },
          });
    },
  },
]);
