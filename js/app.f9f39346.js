(function () {
  "use strict";
  var t = {
      4706: function (t, e, a) {
        var r = a(144),
          o = a(998),
          n = a(3675),
          s = a(6190),
          i = a(4324),
          l = a(3687),
          c = a(7953),
          u = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              o.Z,
              [
                e(
                  "div",
                  { staticStyle: {} },
                  [
                    e(
                      n.Z,
                      {
                        staticClass: "px-0",
                        attrs: {
                          elevation: "4",
                          color: "blue-grey darken-2",
                          dark: "",
                          width: "",
                        },
                      },
                      [
                        e(
                          c.qW,
                          [
                            e(
                              s.Z,
                              {
                                staticClass: "px-2",
                                attrs: { to: "/", dark: "", text: "" },
                              },
                              [
                                e(i.Z, [t._v("mdi-home-outline")]),
                                e(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value:
                                          !t.$vuetify.breakpoint.sm &&
                                          !t.$vuetify.breakpoint.xs,
                                        expression:
                                          "!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs",
                                      },
                                    ],
                                    staticClass: "pl-2",
                                  },
                                  [t._v(" Phil Hüffer ")]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e(l.Z),
                        t._l(t.navItems, function (a) {
                          return e(
                            "div",
                            { key: a.route },
                            [
                              e(
                                s.Z,
                                {
                                  staticClass: "px-2",
                                  attrs: { to: a.route, dark: "", text: "" },
                                },
                                [
                                  e(i.Z, [t._v(t._s(a.icon))]),
                                  e(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            !t.$vuetify.breakpoint.sm &&
                                            !t.$vuetify.breakpoint.xs,
                                          expression:
                                            "!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs",
                                        },
                                      ],
                                      staticClass: "pl-2",
                                    },
                                    [t._v(" " + t._s(a.name) + " ")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          );
                        }),
                      ],
                      2
                    ),
                  ],
                  1
                ),
                e("router-view"),
              ],
              1
            );
          },
          m = [],
          p = r.ZP.extend({
            name: "App",
            data: () => ({
              navItems: [
                {
                  route: "/cv",
                  name: "Academic Career",
                  icon: "mdi-school-outline",
                },
                {
                  route: "/workexperience",
                  name: "Work Experience",
                  icon: "mdi-briefcase-outline",
                },
                { route: "/skills", name: "Skills", icon: "mdi-tools" },
              ],
            }),
          }),
          d = p,
          h = a(1001),
          v = (0, h.Z)(d, u, m, !1, null, null, null),
          f = v.exports,
          g = a(8345),
          y = a(2118),
          _ = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e("div", [e(y.Z, [e("home-page")], 1)], 1);
          },
          Z = [],
          x = a(8107),
          b = a(4886),
          w = a(266),
          k = a(5808),
          C = a(4525),
          P = a(1713),
          S = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "div",
              { attrs: { src: "../assets/Resume picture.png" } },
              [
                e(
                  y.Z,
                  [
                    e(
                      P.Z,
                      [
                        e(
                          w.Z,
                          {
                            staticClass:
                              "d-flex flex-shrink-1 flex-grow-1 .align-stretch pr-0",
                            attrs: {
                              xl: "4",
                              lg: "4",
                              md: "4",
                              sm: "6",
                              xs: "12",
                            },
                          },
                          [
                            e(
                              x.Z,
                              { attrs: { heigth: "100%", width: "100%" } },
                              [
                                e("img", {
                                  attrs: {
                                    center: "",
                                    "max-width": "100px",
                                    width: "100%",
                                    alt: "Avatar",
                                    src: a(3377),
                                  },
                                }),
                                e(
                                  k.Z,
                                  [
                                    e(C.Z, [
                                      t._v(
                                        " Phil Hüffer (" +
                                          t._s(t.getAge("2000-04-13")) +
                                          ") "
                                      ),
                                    ]),
                                    e(C.Z, [
                                      t._v(
                                        " M.Sc. Student of Geoinformatics and Spatial Data Science"
                                      ),
                                    ]),
                                    e(
                                      b.ZB,
                                      [
                                        e(i.Z, { attrs: { small: "" } }, [
                                          t._v("mdi-map-marker"),
                                        ]),
                                        t._v(" Münster, Germany "),
                                        e("br"),
                                        t._v(" Get in touch with me: "),
                                        e(
                                          s.Z,
                                          {
                                            attrs: {
                                              icon: "",
                                              href: "mailto:phil.hueffer@gmail.com",
                                            },
                                          },
                                          [e(i.Z, [t._v("mdi-email")])],
                                          1
                                        ),
                                        e(
                                          s.Z,
                                          {
                                            attrs: {
                                              icon: "",
                                              href: "https://www.linkedin.com/in/phil-hüffer",
                                            },
                                          },
                                          [e(i.Z, [t._v("mdi-linkedin")])],
                                          1
                                        ),
                                        e(
                                          s.Z,
                                          {
                                            attrs: {
                                              icon: "",
                                              href: "https://www.instagram.com/hufferphil/",
                                            },
                                          },
                                          [e(i.Z, [t._v("mdi-instagram")])],
                                          1
                                        ),
                                        e(
                                          s.Z,
                                          {
                                            attrs: {
                                              icon: "",
                                              href: "https://github.com/phuef/",
                                            },
                                          },
                                          [e(i.Z, [t._v("mdi-github")])],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          w.Z,
                          {
                            attrs: {
                              xl: "8",
                              lg: "8",
                              md: "8",
                              sm: "6",
                              xs: "12",
                            },
                          },
                          [
                            e(
                              x.Z,
                              { staticClass: "mb-2" },
                              [
                                e(b.EB, [t._v("About me")]),
                                e(b.ZB, { staticClass: "text-h6" }, [
                                  t._v(
                                    "When I was young, I used to be the curious kid that always annoyed people by asking why. Why does this work this way, why can't this be different. If something didn't work the way I wanted it to, I tried to find a way to make it work. Even today I'm still eager to figure out everything and solve problems out there. Let us solve this worlds problems together. "
                                  ),
                                ]),
                              ],
                              1
                            ),
                            e(l.Z),
                            e(
                              x.Z,
                              [
                                e(b.EB, [t._v("My motto")]),
                                e(b.ZB, { staticClass: "text-h6" }, [
                                  t._v(' "Be the change you want to see" '),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          T = [],
          B = r.ZP.extend({
            name: "HomeView",
            methods: {
              getAge: function (t) {
                var e = new Date(),
                  a = new Date(t),
                  r = e.getFullYear() - a.getFullYear(),
                  o = e.getMonth() - a.getMonth();
                return (
                  (o < 0 || (0 === o && e.getDate() < a.getDate())) && r--, r
                );
              },
            },
          }),
          H = B,
          j = (0, h.Z)(H, S, T, !1, null, null, null),
          D = j.exports,
          A = r.ZP.extend({
            name: "home-view",
            components: { HomePage: D },
            data() {
              return { bugClicked: !1 };
            },
          }),
          G = A,
          E = (0, h.Z)(G, _, Z, !1, null, "712a3ed2", null),
          M = E.exports,
          R = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e("div", { staticClass: "about" }, [e("about-page")], 1);
          },
          I = [],
          O = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e("div", { staticClass: "about" }, [t._v(" test ")]);
          },
          W = [],
          N = r.ZP.extend({ name: "AboutPage" }),
          q = N,
          L = (0, h.Z)(q, O, W, !1, null, null, null),
          F = L.exports,
          $ = r.ZP.extend({ name: "about-view", components: { AboutPage: F } }),
          z = $,
          U = (0, h.Z)(z, R, I, !1, null, null, null),
          V = U.exports,
          J = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e("div", { staticClass: "me" }, [e("me-page")], 1);
          },
          Q = [],
          X = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e("div", [t._v(" Welcome on the Me page ")]);
          },
          Y = [],
          K = r.ZP.extend({ name: "MePage" }),
          tt = K,
          et = (0, h.Z)(tt, X, Y, !1, null, null, null),
          at = et.exports,
          rt = r.ZP.extend({ name: "me-view", components: { MePage: at } }),
          ot = rt,
          nt = (0, h.Z)(ot, J, Q, !1, null, null, null),
          st = nt.exports,
          it = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "div",
              { staticClass: "random-picture" },
              [e("random-picture-page")],
              1
            );
          },
          lt = [],
          ct = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "div",
              [
                e(y.Z, [
                  e("h3", { attrs: { "text-align": "center" } }, [
                    t._v("Click on the picture to get another picture"),
                  ]),
                  e("img", {
                    staticClass: "picsumpicture",
                    attrs: {
                      src: "https://picsum.photos/800/500",
                      onclick: "location.reload()",
                    },
                  }),
                ]),
              ],
              1
            );
          },
          ut = [],
          mt = r.ZP.extend({ name: "RandomPicturePage" }),
          pt = mt,
          dt = (0, h.Z)(pt, ct, ut, !1, null, null, null),
          ht = dt.exports,
          vt = r.ZP.extend({
            name: "random-picture-view",
            components: { RandomPicturePage: ht },
          }),
          ft = vt,
          gt = (0, h.Z)(ft, it, lt, !1, null, null, null),
          yt = gt.exports,
          _t = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "div",
              { staticClass: "dicover" },
              [e("discover-page")],
              1
            );
          },
          Zt = [],
          xt = a(8598),
          bt = a(4971),
          wt = a(9223),
          kt = a(5495),
          Ct = a(7423),
          Pt = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "div",
              { staticClass: "discover" },
              [
                e(
                  y.Z,
                  [
                    e(
                      P.Z,
                      [
                        e(
                          w.Z,
                          { attrs: { cols: "6" } },
                          [
                            e(
                              x.Z,
                              [
                                e(b.EB, [
                                  t._v("Congrats on finding this secret page!"),
                                ]),
                                e(b.ZB, [
                                  t._v(
                                    "It bugs me a bit that it was this easy for you to find this page. Here you can find different stuff, e.g. my favorite music and projects. Have fun exploring :) "
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          xt.Z,
                          {
                            model: {
                              value: t.model,
                              callback: function (e) {
                                t.model = e;
                              },
                              expression: "model",
                            },
                          },
                          [
                            e(
                              bt.Z,
                              { staticClass: "catHeadphonesCursor" },
                              [
                                e(
                                  Ct.Z,
                                  {
                                    attrs: {
                                      color: "cyan darken-3",
                                      height: "100%",
                                      tile: "",
                                    },
                                  },
                                  [
                                    e(
                                      y.Z,
                                      { attrs: { cyan: "", "lighten-3": "" } },
                                      [
                                        e(
                                          P.Z,
                                          [
                                            e(w.Z, { attrs: { cols: "12" } }, [
                                              e(
                                                "div",
                                                {
                                                  staticClass: "text-h2",
                                                  attrs: { align: "center" },
                                                },
                                                [
                                                  t._v(
                                                    "some of my favorite playlists:"
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            e(
                                              x.Z,
                                              {
                                                attrs: {
                                                  cols: "2",
                                                  color: "cyan lighten-2",
                                                },
                                              },
                                              [
                                                e(b.EB, [
                                                  e(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href: "https://open.spotify.com/playlist/6W0bXilSfcpwPhFXaAUPWo?si=73eb4f7532694a8b",
                                                        target: "_blank",
                                                      },
                                                    },
                                                    [t._v("All time favorites")]
                                                  ),
                                                ]),
                                                e(b.Qq, [
                                                  t._v(
                                                    "Songs I can listen to no matter the location or occasion."
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                            e(
                                              x.Z,
                                              {
                                                attrs: {
                                                  cols: "2",
                                                  color: "cyan lighten-1",
                                                },
                                              },
                                              [
                                                e(b.EB, [
                                                  e(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href: "https://open.spotify.com/playlist/4z7zV4bahNaXcq2mBlvmaO?si=ebdbfc6701db44d8",
                                                      },
                                                    },
                                                    [t._v(" Sounddesign")]
                                                  ),
                                                ]),
                                                e(b.Qq, [
                                                  t._v(
                                                    " Songs with an interesting sounddesign. "
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                            e(
                                              x.Z,
                                              {
                                                attrs: {
                                                  cols: "2",
                                                  color: "cyan",
                                                },
                                              },
                                              [
                                                e(b.EB, [
                                                  e(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href: "https://open.spotify.com/playlist/5qEXYNSb8plAK1JyYzwUwR?si=0b4933d2a0ee4226",
                                                        target: "_blank",
                                                      },
                                                    },
                                                    [t._v("Endance")]
                                                  ),
                                                ]),
                                                e(b.Qq, [
                                                  t._v(
                                                    " To enhance your mood and make you dance"
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            t._e(),
                            e(
                              bt.Z,
                              [
                                e(
                                  Ct.Z,
                                  {
                                    attrs: {
                                      color: "light-green darken-3",
                                      height: "100%",
                                      tile: "",
                                    },
                                  },
                                  [
                                    e(
                                      P.Z,
                                      {
                                        staticClass: "fill-height",
                                        attrs: {
                                          align: "center",
                                          justify: "center",
                                        },
                                      },
                                      [
                                        e(
                                          w.Z,
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass: "text-h2",
                                                attrs: { align: "center" },
                                              },
                                              [
                                                e(kt.Z, {
                                                  attrs: {
                                                    height: "100px",
                                                    width: "100px",
                                                    src: a(7386),
                                                  },
                                                }),
                                                t._v(" "),
                                                e(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      red: "",
                                                      href: "https://rad-oder-regen.netlify.app/",
                                                    },
                                                  },
                                                  [t._v(" Rad oder Regen?")]
                                                ),
                                              ],
                                              1
                                            ),
                                            t._v(" "),
                                            e("br"),
                                            e(wt.Z),
                                            t._v(" "),
                                            e("br"),
                                            e(
                                              "div",
                                              {
                                                staticClass: "text-h4",
                                                attrs: { align: "center" },
                                              },
                                              [
                                                t._v(
                                                  " A project developed during the two-day "
                                                ),
                                                e("i", [t._v("ifgihack 2022")]),
                                                t._v(
                                                  " (a Hackathon from ifgi). "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e(
                              bt.Z,
                              [
                                e(
                                  Ct.Z,
                                  {
                                    attrs: {
                                      color: "cyan darken-3",
                                      height: "100%",
                                      tile: "",
                                    },
                                  },
                                  [
                                    e(
                                      P.Z,
                                      {
                                        staticClass: "fill-height",
                                        attrs: {
                                          align: "center",
                                          justify: "center",
                                        },
                                      },
                                      [
                                        e(w.Z, [
                                          e(
                                            "div",
                                            {
                                              staticClass: "text-h2",
                                              attrs: { align: "center" },
                                            },
                                            [t._v(" To be continued... ")]
                                          ),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          St = [],
          Tt = r.ZP.extend({
            components: { RandomPicturePage: ht },
            name: "DiscoverPage",
            data() {
              return {
                model: 0,
                colors: ["cyan darken-3", "deep-orange lighten-3"],
              };
            },
          }),
          Bt = Tt,
          Ht = (0, h.Z)(Bt, Pt, St, !1, null, null, null),
          jt = Ht.exports,
          Dt = r.ZP.extend({
            name: "discover-view",
            components: { DiscoverPage: jt },
          }),
          At = Dt,
          Gt = (0, h.Z)(At, _t, Zt, !1, null, null, null),
          Et = Gt.exports,
          Mt = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e("div", { staticClass: "cv" }, [e("c-v-page")], 1);
          },
          Rt = [],
          It = a(3423),
          Ot = a(8893),
          Wt = a(2082),
          Nt = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "div",
              { staticClass: "cv" },
              [
                e(
                  Ot.Z,
                  { attrs: { "align-top": "", dense: "" } },
                  [
                    e(
                      Wt.Z,
                      {
                        attrs: { color: "blue" },
                        scopedSlots: t._u([
                          {
                            key: "icon",
                            fn: function () {
                              return [
                                e(
                                  It.Z,
                                  [
                                    e(kt.Z, {
                                      attrs: {
                                        src: "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=ScreamOpen&skinColor=Pale",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        e(
                          P.Z,
                          { staticClass: "pt-1" },
                          [
                            e(w.Z, { attrs: { cols: "3" } }, [
                              e("strong", [t._v("13th April 2000")]),
                            ]),
                            e(
                              w.Z,
                              [
                                e("strong", [t._v("Birth")]),
                                t._v(" "),
                                e(i.Z, [t._v("mdi-cake")]),
                                e(
                                  "div",
                                  { staticClass: "text-caption mb-2" },
                                  [
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-message-outline"),
                                    ]),
                                    e("i", [t._v('"wow he has big feet"')]),
                                    t._v(
                                      " - midwife quote, right after my birth "
                                    ),
                                    e("br"),
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-map-marker-outline"),
                                    ]),
                                    t._v(" Gütersloh "),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      Wt.Z,
                      {
                        attrs: { color: "blue" },
                        scopedSlots: t._u([
                          {
                            key: "icon",
                            fn: function () {
                              return [
                                e(It.Z, [
                                  e("img", {
                                    attrs: {
                                      src: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Disbelief&skinColor=Pale",
                                    },
                                  }),
                                ]),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        e(
                          P.Z,
                          { staticClass: "pt-1" },
                          [
                            e(w.Z, { attrs: { cols: "3" } }, [
                              e("strong", [t._v("2006 - 2009")]),
                            ]),
                            e(
                              w.Z,
                              [
                                e("strong", [t._v("Elementary School")]),
                                t._v(" "),
                                e(i.Z, [t._v("mdi-school")]),
                                e(
                                  "div",
                                  { staticClass: "text-caption mb-2" },
                                  [
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-message-outline"),
                                    ]),
                                    e("i", [t._v(' "poet and thinker"')]),
                                    t._v(
                                      " - my class teacher's prediction of what I become "
                                    ),
                                    e("br"),
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-map-marker-outline"),
                                    ]),
                                    e(
                                      "a",
                                      {
                                        attrs: {
                                          href: "https://brueder-grimm-schule-wd.de/",
                                        },
                                      },
                                      [t._v("Brüdergrimmschule")]
                                    ),
                                    t._v(", Rheda-Wiedenbrück "),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      Wt.Z,
                      {
                        attrs: { color: "blue" },
                        scopedSlots: t._u([
                          {
                            key: "icon",
                            fn: function () {
                              return [
                                e(It.Z, [
                                  e("img", {
                                    attrs: {
                                      src: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale",
                                    },
                                  }),
                                ]),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        e(
                          P.Z,
                          { staticClass: "pt-1" },
                          [
                            e(w.Z, { attrs: { cols: "3" } }, [
                              e("strong", [t._v("2009 - 2017")]),
                            ]),
                            e(
                              w.Z,
                              [
                                e("strong", [t._v("High School")]),
                                t._v(" "),
                                e(i.Z, [t._v("mdi-school")]),
                                e(
                                  "div",
                                  { staticClass: "text-caption mb-2" },
                                  [
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-notebook-multiple"),
                                    ]),
                                    e("i", [
                                      t._v(
                                        "Math, Geography, Informatics and German"
                                      ),
                                    ]),
                                    t._v(" - my graduation subjects"),
                                    e("br"),
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-map-marker-outline"),
                                    ]),
                                    e(
                                      "a",
                                      {
                                        attrs: {
                                          href: "https://www.ratsgymnasium.com/",
                                        },
                                      },
                                      [t._v("Ratsgymnasium")]
                                    ),
                                    t._v(", Rheda-Wiedenbrück "),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      Wt.Z,
                      {
                        attrs: { color: "blue" },
                        scopedSlots: t._u([
                          {
                            key: "icon",
                            fn: function () {
                              return [
                                e(It.Z, [
                                  e("img", {
                                    attrs: {
                                      src: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale",
                                    },
                                  }),
                                ]),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        e(
                          P.Z,
                          { staticClass: "pt-1" },
                          [
                            e(w.Z, { attrs: { cols: "3" } }, [
                              e("strong", [t._v("2017 - 2022")]),
                            ]),
                            e(
                              w.Z,
                              [
                                e("strong", [t._v("B.Sc. in Geoinformatics")]),
                                t._v(" "),
                                e(i.Z, [t._v("mdi-school")]),
                                e(
                                  "div",
                                  { staticClass: "text-caption mb-2" },
                                  [
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-notebook-multiple"),
                                    ]),
                                    t._v(
                                      " A search engine for web-based interactive visualizations - the topic of my bachelor thesis "
                                    ),
                                    e("br"),
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-information"),
                                    ]),
                                    e(
                                      "a",
                                      {
                                        attrs: {
                                          href: "https://bachelor-geoinformatik.de/",
                                        },
                                      },
                                      [t._v("more information")]
                                    ),
                                    e("br"),
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-map-marker-outline"),
                                    ]),
                                    t._v(" University Münster "),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      Wt.Z,
                      {
                        attrs: { color: "blue" },
                        scopedSlots: t._u([
                          {
                            key: "icon",
                            fn: function () {
                              return [
                                e(It.Z, [
                                  e("img", {
                                    attrs: {
                                      src: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale",
                                    },
                                  }),
                                ]),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        e(
                          P.Z,
                          { staticClass: "pt-1" },
                          [
                            e(w.Z, { attrs: { cols: "3" } }, [
                              e("strong", [t._v("2022 - today")]),
                            ]),
                            e(
                              w.Z,
                              [
                                e("strong", [
                                  t._v(
                                    "M.Sc. in Geoinformatics and Spatial Data Science"
                                  ),
                                ]),
                                e(i.Z, [t._v("mdi-school-outline")]),
                                e(
                                  "div",
                                  { staticClass: "text-caption mb-2" },
                                  [
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-information"),
                                    ]),
                                    e(
                                      "a",
                                      {
                                        attrs: {
                                          href: "https://master-geoinformatics.com/",
                                        },
                                      },
                                      [t._v("more information")]
                                    ),
                                    e("br"),
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-map-marker-outline"),
                                    ]),
                                    t._v(" University Münster "),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          qt = [],
          Lt = r.ZP.extend({ name: "CVPage" }),
          Ft = Lt,
          $t = (0, h.Z)(Ft, Nt, qt, !1, null, null, null),
          zt = $t.exports,
          Ut = r.ZP.extend({ name: "c-v-view", components: { CVPage: zt } }),
          Vt = Ut,
          Jt = (0, h.Z)(Vt, Mt, Rt, !1, null, null, null),
          Qt = Jt.exports,
          Xt = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "div",
              { staticClass: "workexperience" },
              [e("work-experience-page")],
              1
            );
          },
          Yt = [],
          Kt = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "div",
              { staticClass: "cv" },
              [
                e(
                  Ot.Z,
                  { attrs: { "align-top": "", dense: "" } },
                  [
                    e(
                      Wt.Z,
                      {
                        attrs: { color: "blue" },
                        scopedSlots: t._u([
                          {
                            key: "icon",
                            fn: function () {
                              return [
                                e(It.Z, [
                                  e("img", {
                                    attrs: {
                                      src: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale",
                                    },
                                  }),
                                ]),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        e(
                          P.Z,
                          { staticClass: "pt-1" },
                          [
                            e(w.Z, { attrs: { cols: "3" } }, [
                              e("strong", [t._v("two weeks during 9th class")]),
                            ]),
                            e(
                              w.Z,
                              [
                                e("strong", [
                                  t._v(
                                    "Internship at district administration of geoinformation, cadastre and surveying"
                                  ),
                                ]),
                                e(i.Z, [t._v("mdi-city")]),
                                e(
                                  "div",
                                  { staticClass: "text-caption mb-2" },
                                  [
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-information-outline"),
                                    ]),
                                    t._v(
                                      " Assistance in various areas. E.g. field work with surveyors and working with GIS programs. "
                                    ),
                                    e("br"),
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-map-marker-outline"),
                                    ]),
                                    e(
                                      "a",
                                      {
                                        attrs: {
                                          href: "https://www.kreis-guetersloh.de/themen/geoinformation-kataster-und-vermessung/",
                                        },
                                      },
                                      [t._v(" Kreisverwaltung Gütersloh")]
                                    ),
                                    t._v(", Gütersloh "),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      Wt.Z,
                      {
                        attrs: { color: "blue" },
                        scopedSlots: t._u([
                          {
                            key: "icon",
                            fn: function () {
                              return [
                                e(
                                  It.Z,
                                  [
                                    e(kt.Z, {
                                      attrs: {
                                        src: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        e(
                          P.Z,
                          { staticClass: "pt-1" },
                          [
                            e(w.Z, { attrs: { cols: "3" } }, [
                              e("strong", [t._v("08.2018 - 09.2018")]),
                            ]),
                            e(
                              w.Z,
                              [
                                e("strong", [t._v("Factory Worker")]),
                                t._v(" "),
                                e(i.Z, [t._v("mdi-factory")]),
                                e(
                                  "div",
                                  { staticClass: "text-caption mb-2" },
                                  [
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-information-outline"),
                                    ]),
                                    t._v(
                                      " Doing supporting work in a factory. "
                                    ),
                                    e("br"),
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-map-marker-outline"),
                                    ]),
                                    e(
                                      "a",
                                      {
                                        attrs: {
                                          href: "https://www.nielsen-design.de/",
                                        },
                                      },
                                      [t._v(" Nielsen Design GmbH")]
                                    ),
                                    t._v(", Rheda-Wiedenbrück "),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      Wt.Z,
                      {
                        attrs: { color: "blue" },
                        scopedSlots: t._u([
                          {
                            key: "icon",
                            fn: function () {
                              return [
                                e(
                                  It.Z,
                                  [
                                    e(kt.Z, {
                                      attrs: {
                                        src: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        e(
                          P.Z,
                          { staticClass: "pt-1" },
                          [
                            e(w.Z, { attrs: { cols: "3" } }, [
                              e("strong", [t._v("05.2019 - 04.2022")]),
                            ]),
                            e(
                              w.Z,
                              [
                                e("strong", [
                                  t._v(
                                    "Student Assistant as software developer"
                                  ),
                                ]),
                                e(i.Z, [t._v("mdi-code-not-equal-variant")]),
                                e(
                                  "div",
                                  { staticClass: "text-caption mb-2" },
                                  [
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-information-outline"),
                                    ]),
                                    t._v(
                                      " Assisting in scrum-based projects with the main activity of a software developer. Developing features and adjusting already existing ones for customers."
                                    ),
                                    e("br"),
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-code-tags"),
                                    ]),
                                    t._v(
                                      " JavaScript/TypeScript, Vuejs, HTML, CSS "
                                    ),
                                    e("br"),
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-information-outline"),
                                    ]),
                                    t._v(
                                      " Using and developing components for map.apps, which is built on the ArcGIS API for JavaScript. "
                                    ),
                                    e("br"),
                                    e(i.Z, { attrs: { small: "" } }, [
                                      t._v("mdi-map-marker-outline"),
                                    ]),
                                    e(
                                      "a",
                                      {
                                        attrs: {
                                          href: "https://www.con-terra.com/",
                                        },
                                      },
                                      [t._v("con terra GmbH")]
                                    ),
                                    t._v(", Münster "),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          te = [],
          ee = r.ZP.extend({ name: "WorkExperiencePage" }),
          ae = ee,
          re = (0, h.Z)(ae, Kt, te, !1, null, null, null),
          oe = re.exports,
          ne = r.ZP.extend({
            name: "work-experience-view",
            components: { WorkExperiencePage: oe },
          }),
          se = ne,
          ie = (0, h.Z)(se, Xt, Yt, !1, null, null, null),
          le = ie.exports,
          ce = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e("div", { staticClass: "skills" }, [e("skills-page")], 1);
          },
          ue = [],
          me = a(4127),
          pe = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              y.Z,
              [
                e(
                  P.Z,
                  [
                    e(
                      w.Z,
                      {
                        attrs: {
                          cols: "12",
                          xl: "2",
                          lg: "3",
                          md: "3",
                          sm: "6",
                          xs: "12",
                        },
                      },
                      [
                        e(
                          x.Z,
                          { attrs: { color: "grey lighten-4" } },
                          [
                            e(b.EB, [t._v("Programming:")]),
                            t._l(t.programmingLanguages, function (a, r) {
                              return e(
                                me.Z,
                                {
                                  key: r,
                                  staticClass: "ma-2",
                                  attrs: {
                                    outlined: "",
                                    color: a.color,
                                    "text-color": a.color,
                                    label: "",
                                  },
                                },
                                [
                                  e(i.Z, { attrs: { left: "" } }, [
                                    t._v(t._s(a.icon)),
                                  ]),
                                  t._v(" " + t._s(a.name) + " "),
                                ],
                                1
                              );
                            }),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                    e(
                      w.Z,
                      {
                        attrs: {
                          cols: "12",
                          xl: "2",
                          lg: "3",
                          md: "3",
                          sm: "6",
                          xs: "12",
                        },
                      },
                      [
                        e(
                          x.Z,
                          { attrs: { color: "green lighten-5" } },
                          [
                            e(b.EB, [t._v("Human languages:")]),
                            t._l(t.humanLanguages, function (a, r) {
                              return e(
                                "div",
                                { key: r },
                                [
                                  e(
                                    me.Z,
                                    {
                                      staticClass: "ma-2",
                                      attrs: {
                                        color: a.color,
                                        label: "",
                                        "text-color": a.text,
                                      },
                                    },
                                    [
                                      e("strong", [t._v(t._s(a.name))]),
                                      t._v(": " + t._s(a.level) + " "),
                                    ]
                                  ),
                                ],
                                1
                              );
                            }),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                    e(
                      w.Z,
                      {
                        attrs: {
                          cols: "12",
                          xl: "2",
                          lg: "3",
                          md: "3",
                          sm: "6",
                          xs: "12",
                        },
                      },
                      [
                        e(
                          x.Z,
                          { attrs: { color: "cyan lighten-5" } },
                          [
                            e(b.EB, [t._v("Working in Projects:")]),
                            t._l(t.projectManaging, function (a, r) {
                              return e(
                                me.Z,
                                {
                                  key: r,
                                  staticClass: "ma-2",
                                  attrs: {
                                    color: a.color,
                                    label: "",
                                    "text-color": "white",
                                  },
                                },
                                [
                                  e(i.Z, { attrs: { left: "" } }, [
                                    t._v(t._s(a.icon)),
                                  ]),
                                  t._v(" " + t._s(a.name) + " "),
                                ],
                                1
                              );
                            }),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                    e(
                      w.Z,
                      {
                        attrs: {
                          cols: "12",
                          xl: "2",
                          lg: "3",
                          md: "3",
                          sm: "6",
                          xs: "12",
                        },
                      },
                      [
                        e(
                          x.Z,
                          {
                            attrs: { color: "grey lighten-4", height: "100%" },
                          },
                          [
                            e(b.EB, [t._v("Analytical:")]),
                            t._l(t.analyticals, function (a, r) {
                              return e(
                                me.Z,
                                {
                                  key: r,
                                  staticClass: "ma-2",
                                  attrs: {
                                    outlined: "",
                                    color: a.color,
                                    label: "",
                                  },
                                },
                                [
                                  e(i.Z, { attrs: { left: "" } }, [
                                    t._v(t._s(a.icon)),
                                  ]),
                                  t._v(" " + t._s(a.name) + " "),
                                ],
                                1
                              );
                            }),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                    e(
                      w.Z,
                      {
                        attrs: {
                          cols: "12",
                          xl: "2",
                          lg: "3",
                          md: "3",
                          sm: "6",
                          xs: "12",
                        },
                      },
                      [
                        e(
                          x.Z,
                          { attrs: { color: "teal lighten-5" } },
                          [
                            e(b.EB, [t._v("Other:")]),
                            t._l(t.other, function (a, r) {
                              return e(
                                me.Z,
                                {
                                  key: r,
                                  staticClass: "ma-2",
                                  attrs: {
                                    color: a.color,
                                    label: "",
                                    "text-color": "white",
                                  },
                                },
                                [
                                  e(i.Z, { attrs: { left: "" } }, [
                                    t._v(t._s(a.icon)),
                                  ]),
                                  t._v(" " + t._s(a.name) + " "),
                                ],
                                1
                              );
                            }),
                            e(b.Qq, [
                              t._v(
                                "to be continued, because I'm always eager to learn new skills"
                              ),
                            ]),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          de = [],
          he = r.ZP.extend({
            name: "SkillsPage",
            data() {
              return {
                programmingLanguages: [
                  {
                    name: "javascript",
                    color: "green",
                    icon: "mdi-language-javascript",
                  },
                  {
                    name: "typescript",
                    color: "blue",
                    icon: "mdi-language-typescript",
                  },
                  { name: "python", color: "pink", icon: "mdi-snake" },
                  { name: "R", color: "red", icon: "mdi-alpha-r" },
                  { name: "java", color: "grey", icon: "mdi-language-java" },
                  { name: "html", color: "orange", icon: "mdi-language-html5" },
                  { name: "css", color: "blue", icon: "mdi-language-css3" },
                  { name: "sql", color: "purple", icon: "mdi-database" },
                ],
                humanLanguages: [
                  {
                    name: "german",
                    level: "mother tongue",
                    color: "orange lighten-2",
                    text: "white",
                  },
                  {
                    name: "english",
                    level: "fluent",
                    color: "red lighten-2",
                    text: "white",
                  },
                  {
                    name: "dutch",
                    level: "basics",
                    color: "blue lighten-2",
                    text: "white",
                  },
                ],
                projectManaging: [
                  { name: "git", color: "cyan darken", icon: "mdi-git" },
                  {
                    name: "github",
                    color: "cyan darken-1",
                    icon: "mdi-github",
                  },
                  {
                    name: "scrum",
                    color: "cyan darken-2",
                    icon: "mdi-sync-alert",
                  },
                  {
                    name: "continuous development",
                    color: "cyan darken-3",
                    icon: "mdi-autorenew",
                  },
                  {
                    name: "teamplayer",
                    color: "cyan darken-4",
                    icon: "mdi-account-group",
                  },
                ],
                analyticals: [
                  {
                    name: "critical thinking",
                    color: "",
                    icon: "mdi-head-dots-horizontal-outline",
                  },
                  {
                    name: "data analysis",
                    color: "",
                    icon: "mdi-database-search-outline",
                  },
                  {
                    name: "(geo)statistics",
                    color: "",
                    icon: "mdi-chart-bar-stacked",
                  },
                  {
                    name: "problem solving",
                    color: "",
                    icon: "mdi-lightbulb-outline",
                  },
                ],
                other: [
                  {
                    name: "drivers license (B1)",
                    color: "teal darken-3",
                    icon: "mdi-car",
                  },
                  {
                    name: "music production",
                    color: "teal darken-3",
                    icon: "mdi-music",
                  },
                  {
                    name: "video editing",
                    color: "teal darken-3",
                    icon: "mdi-movie-open-edit",
                  },
                  { name: "", color: "", icon: "mdi-" },
                ],
              };
            },
          }),
          ve = he,
          fe = (0, h.Z)(ve, pe, de, !1, null, null, null),
          ge = fe.exports,
          ye = r.ZP.extend({
            name: "skills-view",
            components: { SkillsPage: ge },
          }),
          _e = ye,
          Ze = (0, h.Z)(_e, ce, ue, !1, null, null, null),
          xe = Ze.exports,
          be = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "div",
              { staticClass: "projects" },
              [e("projects-page")],
              1
            );
          },
          we = [],
          ke = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e(
              "div",
              { staticClass: "projects" },
              [
                e(
                  y.Z,
                  [
                    e(
                      xt.Z,
                      {
                        attrs: { "show-arrows-on-hover": "" },
                        model: {
                          value: t.model,
                          callback: function (e) {
                            t.model = e;
                          },
                          expression: "model",
                        },
                      },
                      [
                        t._e(),
                        e(
                          bt.Z,
                          [
                            e(
                              Ct.Z,
                              {
                                attrs: {
                                  color: "#313641",
                                  height: "100%",
                                  tile: "",
                                },
                              },
                              [
                                e(
                                  P.Z,
                                  {
                                    staticClass: "fill-height",
                                    attrs: {
                                      align: "center",
                                      justify: "center",
                                    },
                                  },
                                  [
                                    e(
                                      w.Z,
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass: "text-h2 mb-2",
                                            attrs: { align: "center" },
                                          },
                                          [
                                            e(
                                              "p",
                                              { staticClass: "grey--text" },
                                              [t._v("Find your Spot")]
                                            ),
                                          ]
                                        ),
                                        e("br"),
                                        e(wt.Z, { attrs: { color: "grey" } }),
                                        t._v(" "),
                                        e("br"),
                                        e(
                                          "div",
                                          {
                                            staticClass: "text-h4 grey mb-4",
                                            attrs: {
                                              align: "center",
                                              "text-color": "white",
                                            },
                                          },
                                          [
                                            t._v(
                                              " A webapp that helps citizens of Münster find their spot in the city. "
                                            ),
                                          ]
                                        ),
                                        e(wt.Z),
                                        e(
                                          "div",
                                          {
                                            staticClass: "text-h5 grey--text",
                                            attrs: { align: "center" },
                                          },
                                          [
                                            t._v(
                                              " Developed in a course during my masters studies "
                                            ),
                                            e(
                                              s.Z,
                                              {
                                                attrs: {
                                                  icon: "",
                                                  href: "https://github.com/phuef/Geoinformation-in-Society-22",
                                                },
                                              },
                                              [
                                                e(
                                                  i.Z,
                                                  { attrs: { color: "grey" } },
                                                  [t._v("mdi-github")]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          bt.Z,
                          [
                            e(
                              Ct.Z,
                              {
                                attrs: {
                                  color: "yellow lighten-4",
                                  height: "100%",
                                  tile: "",
                                },
                              },
                              [
                                e(
                                  P.Z,
                                  {
                                    staticClass: "fill-height",
                                    attrs: {
                                      align: "center",
                                      justify: "center",
                                    },
                                  },
                                  [
                                    e(
                                      w.Z,
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass: "text-h2 mb-2",
                                            attrs: { align: "center" },
                                          },
                                          [
                                            e(
                                              "p",
                                              {
                                                staticClass:
                                                  "yellow--text text--darken-3",
                                              },
                                              [t._v(" Reality as a basemap ")]
                                            ),
                                          ]
                                        ),
                                        e("br"),
                                        e(wt.Z, {
                                          staticClass: "yellow darken-3",
                                        }),
                                        t._v(" "),
                                        e("br"),
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "text-h4 yellow darken-3 mb-4",
                                            attrs: {
                                              align: "center",
                                              "text-color": "white",
                                            },
                                          },
                                          [
                                            t._v(
                                              " Implementation of typical basemap features and functionalities, in augmented reality (AR). "
                                            ),
                                          ]
                                        ),
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "text-h5 yellow--text text--darken-3",
                                            attrs: { align: "center" },
                                          },
                                          [
                                            t._v(
                                              " During a study project during my bachelor "
                                            ),
                                            e(
                                              s.Z,
                                              {
                                                attrs: {
                                                  icon: "",
                                                  href: "https://github.com/phuef/reality-as-a-basemap",
                                                },
                                              },
                                              [
                                                e(
                                                  i.Z,
                                                  {
                                                    attrs: {
                                                      color: "yellow darken-3",
                                                    },
                                                  },
                                                  [t._v("mdi-github")]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          bt.Z,
                          [
                            e(
                              Ct.Z,
                              {
                                attrs: {
                                  color: "teal darken-3",
                                  height: "100%",
                                  tile: "",
                                },
                              },
                              [
                                e(
                                  P.Z,
                                  {
                                    staticClass: "fill-height",
                                    attrs: {
                                      align: "center",
                                      justify: "center",
                                    },
                                  },
                                  [
                                    e(
                                      w.Z,
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass: "text-h2 mb-2",
                                            attrs: { align: "center" },
                                          },
                                          [
                                            e(
                                              "a",
                                              {
                                                staticClass:
                                                  "deep-purple--text text--lighten-3",
                                                attrs: {
                                                  href: "https://rad-oder-regen.netlify.app/",
                                                },
                                              },
                                              [t._v(" Rad oder Regen?")]
                                            ),
                                          ]
                                        ),
                                        e("br"),
                                        e(wt.Z, {
                                          staticClass: "deep-purple lighten-3",
                                        }),
                                        e("br"),
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "text-h4 deep-purple lighten-3 mb-4 teal--text darken-3--text",
                                            attrs: { align: "center" },
                                          },
                                          [
                                            t._v(
                                              " A website that tells you whether you should take the bike or not, with random creative sayings "
                                            ),
                                          ]
                                        ),
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "text-h5 deep-purple--text text--lighten-3",
                                            attrs: { align: "center" },
                                          },
                                          [
                                            t._v(
                                              " A project developed during the two-day "
                                            ),
                                            e("i", [t._v("ifgihack 2022")]),
                                            t._v(" (a Hackathon from ifgi). "),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          bt.Z,
                          [
                            e(
                              Ct.Z,
                              {
                                attrs: {
                                  color: "cyan darken-3",
                                  height: "100%",
                                  tile: "",
                                },
                              },
                              [
                                e(
                                  P.Z,
                                  {
                                    staticClass: "fill-height",
                                    attrs: {
                                      align: "center",
                                      justify: "center",
                                    },
                                  },
                                  [
                                    e(w.Z, [
                                      e(
                                        "div",
                                        {
                                          staticClass: "text-h2",
                                          attrs: { align: "center" },
                                        },
                                        [t._v("To be continued...")]
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          Ce = [],
          Pe = r.ZP.extend({
            name: "ProjectsPage",
            data() {
              return {
                model: 0,
                colors: ["cyan darken-3", "deep-orange lighten-3"],
              };
            },
          }),
          Se = Pe,
          Te = (0, h.Z)(Se, ke, Ce, !1, null, null, null),
          Be = Te.exports,
          He = r.ZP.extend({
            name: "projects-view",
            components: { ProjectsPage: Be },
          }),
          je = He,
          De = (0, h.Z)(je, be, we, !1, null, null, null),
          Ae = De.exports,
          Ge = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e("div", [e("three-d-page")], 1);
          },
          Ee = [],
          Me = function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e("canvas", { ref: "experie nce" });
          },
          Re = [],
          Ie = a(9477),
          Oe = r.ZP.extend({
            name: "ThreeDPage",
            mounted() {
              const t = (0, r.iH)(null),
                e = new Ie.cPb(
                  70,
                  window.innerWidth / window.innerHeight,
                  0.01,
                  10
                );
              e.position.z = 1;
              const a = new Ie.xsS(),
                o = new Ie.DvJ(0.2, 0.2, 0.2),
                n = new Ie.RSm(),
                s = new Ie.Kj0(o, n);
              a.add(s);
              const i = new Ie.CP7({ canvas: t.value, antialias: !0 });
              i.setSize(window.innerWidth, window.innerHeight), i.render(a, e);
            },
          }),
          We = Oe,
          Ne = (0, h.Z)(We, Me, Re, !1, null, null, null),
          qe = Ne.exports,
          Le = r.ZP.extend({
            name: "three-d-view",
            components: { threeDPage: qe },
          }),
          Fe = Le,
          $e = (0, h.Z)(Fe, Ge, Ee, !1, null, null, null),
          ze = $e.exports;
        r.ZP.use(g.ZP);
        const Ue = [
            { path: "/", name: "home-view", component: M },
            { path: "/home", redirect: "/" },
            { path: "/about", name: "about-view", component: V },
            { path: "/me", name: "me-view", component: st },
            {
              path: "/randompicture",
              name: "random-picture-view",
              component: yt,
            },
            { path: "/discover", name: "discover-view", component: Et },
            { path: "/cv", name: "c-v-view", component: Qt },
            {
              path: "/workexperience",
              name: "work-experience-view",
              component: le,
            },
            { path: "/skills", name: "skills-view", component: xe },
            { path: "/projects", name: "projects-view", component: Ae },
            { path: "/3d", name: "three-d-view", component: ze },
          ],
          Ve = new g.ZP({ mode: "history", base: "/", routes: Ue });
        var Je = Ve,
          Qe = a(8864);
        r.ZP.use(Qe.Z);
        var Xe = new Qe.Z({});
        (r.ZP.config.productionTip = !1),
          new r.ZP({ router: Je, vuetify: Xe, render: (t) => t(f) }).$mount(
            "#app"
          );
      },
      3377: function (t, e, a) {
        t.exports = a.p + "img/Resume picture.1a9699f4.png";
      },
      7386: function (t, e, a) {
        t.exports = a.p + "img/rad_oder_regen_logo.13d65544.png";
      },
    },
    e = {};
  function a(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var n = (e[r] = { exports: {} });
    return t[r](n, n.exports, a), n.exports;
  }
  (a.m = t),
    (function () {
      var t = [];
      a.O = function (e, r, o, n) {
        if (!r) {
          var s = 1 / 0;
          for (u = 0; u < t.length; u++) {
            (r = t[u][0]), (o = t[u][1]), (n = t[u][2]);
            for (var i = !0, l = 0; l < r.length; l++)
              (!1 & n || s >= n) &&
              Object.keys(a.O).every(function (t) {
                return a.O[t](r[l]);
              })
                ? r.splice(l--, 1)
                : ((i = !1), n < s && (s = n));
            if (i) {
              t.splice(u--, 1);
              var c = o();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        n = n || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > n; u--) t[u] = t[u - 1];
        t[u] = [r, o, n];
      };
    })(),
    (function () {
      a.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return a.d(e, { a: e }), e;
      };
    })(),
    (function () {
      a.d = function (t, e) {
        for (var r in e)
          a.o(e, r) &&
            !a.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
      };
    })(),
    (function () {
      a.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      a.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      a.p = "/";
    })(),
    (function () {
      var t = { 143: 0 };
      a.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, r) {
          var o,
            n,
            s = r[0],
            i = r[1],
            l = r[2],
            c = 0;
          if (
            s.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (o in i) a.o(i, o) && (a.m[o] = i[o]);
            if (l) var u = l(a);
          }
          for (e && e(r); c < s.length; c++)
            (n = s[c]), a.o(t, n) && t[n] && t[n][0](), (t[n] = 0);
          return a.O(u);
        },
        r = (self["webpackChunkmain"] = self["webpackChunkmain"] || []);
      r.forEach(e.bind(null, 0)), (r.push = e.bind(null, r.push.bind(r)));
    })();
  var r = a.O(void 0, [998], function () {
    return a(4706);
  });
  r = a.O(r);
})();
//# sourceMappingURL=app.f9f39346.js.map
