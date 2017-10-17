webpackJsonp(
  [0],
  {
    "3je4": function(t, e, i) {
      "use strict";
      e.a = {
        name: "SpooferItem",
        props: ["title", "description", "image", "url"]
      };
    },
    "71VN": function(t, e, i) {
      "use strict";
      var s = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { attrs: { id: "app" } },
            [
              i("h3", { staticClass: "main-heading" }, [t._v("Create")]),
              t._v(" "),
              i("SpooferForm"),
              t._v(" "),
              i("SpooferList", { attrs: { spooferItems: t.spooferItems } })
            ],
            1
          );
        },
        o = [],
        r = { render: s, staticRenderFns: o };
      e.a = r;
    },
    "76iX": function(t, e) {},
    Crn4: function(t, e, i) {
      "use strict";
      var s = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.spooferItems.length > 0
            ? i("div", { staticClass: "SpooferListWrapper" }, [
                i(
                  "ul",
                  { staticClass: "SpooferList" },
                  t._l(t.spooferItems, function(t, e) {
                    return i("SpooferItem", {
                      key: t.id,
                      attrs: {
                        title: t.title,
                        description: t.description,
                        image: t.image,
                        url: t.url,
                        index: e
                      }
                    });
                  })
                )
              ])
            : t._e();
        },
        o = [],
        r = { render: s, staticRenderFns: o };
      e.a = r;
    },
    IK4g: function(t, e, i) {
      "use strict";
      function s(t) {
        i("NBcI");
      }
      var o = i("3je4"),
        r = i("wj4O"),
        a = i("VU/8"),
        n = s,
        p = a(o.a, r.a, n, null, null);
      e.a = p.exports;
    },
    M93x: function(t, e, i) {
      "use strict";
      function s(t) {
        i("76iX");
      }
      var o = i("xJD8"),
        r = i("71VN"),
        a = i("VU/8"),
        n = s,
        p = a(o.a, r.a, n, null, null);
      e.a = p.exports;
    },
    NBcI: function(t, e) {},
    NHnr: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = i("7+uW"),
        o = i("M93x");
      (s.a.config.productionTip = !1),
        new s.a({ el: "#app", template: "<App/>", components: { App: o.a } });
    },
    "OzZ+": function(t, e) {},
    SDRB: function(t, e, i) {
      "use strict";
      function s(t) {
        i("OzZ+");
      }
      var o = i("nsxA"),
        r = i("kI68"),
        a = i("VU/8"),
        n = s,
        p = a(o.a, r.a, n, "data-v-87cff318", null);
      e.a = p.exports;
    },
    "Yi+/": function(t, e, i) {
      "use strict";
      var s = i("IK4g");
      e.a = {
        name: "SpooferList",
        components: { SpooferItem: s.a },
        props: ["spooferItems"]
      };
    },
    ewd9: function(t, e, i) {
      "use strict";
      function s(t) {
        i("lXaC");
      }
      var o = i("Yi+/"),
        r = i("Crn4"),
        a = i("VU/8"),
        n = s,
        p = a(o.a, r.a, n, "data-v-1fdda564", null);
      e.a = p.exports;
    },
    kI68: function(t, e, i) {
      "use strict";
      var s = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "form",
            {
              staticClass: "SpooferForm",
              on: {
                submit: function(e) {
                  e.preventDefault(), t.submit(e);
                }
              }
            },
            [
              i("div", { staticClass: "SpooferForm__field" }, [
                i("label", { staticClass: "SpooferForm__label" }, [
                  t._v("Title "),
                  i("span", { staticClass: "break" }),
                  t._v(" "),
                  i("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.title,
                        expression: "title"
                      }
                    ],
                    staticClass: "SpooferForm__input SpooferForm__input--text",
                    attrs: { type: "text" },
                    domProps: { value: t.title },
                    on: {
                      input: function(e) {
                        e.target.composing || (t.title = e.target.value);
                      }
                    }
                  })
                ])
              ]),
              t._v(" "),
              i("div", { staticClass: "SpooferForm__field" }, [
                i("label", { staticClass: "SpooferForm__label" }, [
                  t._v("Description "),
                  i("span", { staticClass: "break" }),
                  t._v(" "),
                  i("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.description,
                        expression: "description"
                      }
                    ],
                    staticClass: "SpooferForm__input SpooferForm__input--text",
                    attrs: { type: "text" },
                    domProps: { value: t.description },
                    on: {
                      input: function(e) {
                        e.target.composing || (t.description = e.target.value);
                      }
                    }
                  })
                ])
              ]),
              t._v(" "),
              i("div", { staticClass: "SpooferForm__field" }, [
                i("label", { staticClass: "SpooferForm__label" }, [
                  t._v("Image "),
                  i("span", { staticClass: "break" }),
                  t._v(" "),
                  i("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.image,
                        expression: "image"
                      }
                    ],
                    staticClass: "SpooferForm__input SpooferForm__input--text",
                    attrs: { type: "text" },
                    domProps: { value: t.image },
                    on: {
                      input: function(e) {
                        e.target.composing || (t.image = e.target.value);
                      }
                    }
                  })
                ])
              ]),
              t._v(" "),
              i(
                "button",
                {
                  staticClass: "SpooferForm__submit",
                  attrs: { type: "submit" }
                },
                [t._v("Pop it!")]
              )
            ]
          );
        },
        o = [],
        r = { render: s, staticRenderFns: o };
      e.a = r;
    },
    lXaC: function(t, e) {},
    nsxA: function(t, e, i) {
      "use strict";
      e.a = {
        name: "SpooferForm",
        data: function() {
          return { title: "", description: "", image: "" };
        },
        methods: {
          submit: function() {
            var t = this.title,
              e = this.description,
              i = this.image;
            this.$parent.createSpoofItem({
              title: t,
              description: e,
              image: i
            });
          }
        }
      };
    },
    wj4O: function(t, e, i) {
      "use strict";
      var s = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("li", { staticClass: "SpooferList__item" }, [
            i("div", { staticClass: "SpooferList__item-image" }, [
              i("div", { staticClass: "SpooferList__item-image-wrapper" }, [
                i("img", { attrs: { src: t.image } })
              ])
            ]),
            t._v(" "),
            i("div", { staticClass: "SpooferList__item-body" }, [
              i("p", [
                i("strong", [t._v("Title:")]),
                t._v(" " + t._s(t.title)),
                i("br"),
                t._v(" "),
                i("strong", [t._v("Description:")]),
                t._v(" " + t._s(t.description)),
                i("br"),
                t._v(" "),
                i("strong", [t._v("Link:")]),
                t._v(" "),
                i("a", { attrs: { href: t.url } }, [t._v(t._s(t.url))])
              ])
            ])
          ]);
        },
        o = [],
        r = { render: s, staticRenderFns: o };
      e.a = r;
    },
    xJD8: function(t, e, i) {
      "use strict";
      var s = i("mvHQ"),
        o = i.n(s),
        r = i("rplX"),
        a = (i.n(r), i("SDRB")),
        n = i("ewd9");
      e.a = {
        name: "app",
        data: function() {
          return { spooferItems: [] };
        },
        components: { SpooferForm: a.a, SpooferList: n.a },
        methods: {
          createSpoofItem: function(t) {
            var e = this;
            fetch(i.i({ NODE_ENV: "production" }).BACKEND_URL + "/api/posts", {
              method: "POST",
              body: o()({ title: t.title, desc: t.description, img: t.image }),
              headers: { "Content-Type": "application/json" }
            })
              .then(function(t) {
                return t.json();
              })
              .then(function(t) {
                e.spooferItems.push({
                  title: t.title,
                  description: t.desc,
                  image: t.img,
                  url:
                    i.i({ NODE_ENV: "production" }).BACKEND_URL + "/" + t.name
                });
              });
          }
        }
      };
    }
  },
  ["NHnr"]
);
//# sourceMappingURL=app.ea8bcf400c4049a72e3e.js.map
