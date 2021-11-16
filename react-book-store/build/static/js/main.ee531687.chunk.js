(this["webpackJsonpreact-bookstore"] =
  this["webpackJsonpreact-bookstore"] || []).push([
  [0],
  {
    14: function (t, e, r) {},
    16: function (t, e, r) {
      "use strict";
      r.r(e);
      var c = r(0),
        n = r(1),
        i = r.n(n),
        a = r(7),
        o = r.n(a),
        s = (r(14), r(8)),
        d = r(6),
        j = r(3),
        l = { cartItem: {} };
      var u = function (t) {
          return Object(c.jsxs)("div", {
            style: l.cartItem,
            children: [
              t.title,
              " - ",
              t.price,
              Object(c.jsx)("button", {
                onClick: function (e) {
                  t.removeFromCart(t.id);
                },
                children: "remove",
              }),
            ],
          });
        },
        b = { cart: {} };
      var h = function (t) {
          return Object(c.jsxs)("div", {
            style: b.cart,
            children: [
              Object(c.jsx)("h2", { children: "Cart" }),
              t.inCart.map(function (e) {
                return Object(c.jsx)(
                  u,
                  Object(j.a)({ removeFromCart: t.removeFromCart }, e),
                  e.id
                );
              }),
              "Total: $",
              (function (t) {
                for (var e = 0, r = 0; r < t.length; r++)
                  e += Number(t[r].price);
                return e;
              })(t.inCart),
              " USD",
            ],
          });
        },
        m = {
          product: {},
          thumbnail: { maxWidth: "100%", height: "auto", padding: "4px" },
        },
        O = i.a.memo(function (t) {
          var e = t.title,
            r = t.author,
            n = t.published,
            i = t.country,
            a = t.lang,
            o = t.pages,
            s = t.image,
            d = t.url,
            j = t.price;
          return Object(c.jsxs)("div", {
            style: m.product,
            children: [
              Object(c.jsx)("a", {
                href: d,
                children: Object(c.jsx)("img", {
                  style: m.thumbnail,
                  src: s ? "images/" + s : "images/default.jpg",
                  alt: "{title}",
                }),
              }),
              Object(c.jsxs)("div", {
                children: [
                  Object(c.jsx)("h3", {
                    children: Object(c.jsx)("a", { href: d, children: e }),
                  }),
                  Object(c.jsxs)("div", { children: ["by: ", r] }),
                  Object(c.jsxs)("div", {
                    children: ["Published: ", n, ", ", i],
                  }),
                  Object(c.jsxs)("div", { children: ["Language: ", a] }),
                  Object(c.jsxs)("div", { children: ["Pages: ", o] }),
                  Object(c.jsxs)("div", { children: ["Price: $", j] }),
                  Object(c.jsx)("button", {
                    onClick: function () {
                      t.inCart ? t.removeFromCart(t.id) : t.addToCart(t.id);
                    },
                    children: t.inCart ? "In Cart" : "Add to Cart",
                  }),
                ],
              }),
            ],
          });
        }),
        f = {
          productList: {
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "stretch",
          },
          productListItem: { listStyle: "none", width: "32%" },
        },
        v = i.a.memo(function (t) {
          var e = t.inCart,
            r = t.products;
          return r.length > 0
            ? Object(c.jsx)("ul", {
                style: f.productList,
                children: r.map(function (r) {
                  return Object(c.jsx)(
                    "li",
                    {
                      style: f.productListItem,
                      children: Object(c.jsx)(
                        O,
                        Object(j.a)(
                          Object(j.a)({}, r),
                          {},
                          {
                            inCart: e.includes(r.id) ? "1" : "",
                            addToCart: t.addToCart,
                            removeFromCart: t.removeFromCart,
                          }
                        )
                      ),
                    },
                    r.id
                  );
                }),
              })
            : null;
        });
      var x = function (t) {
        var e = Object(n.useState)([]),
          r = Object(d.a)(e, 2),
          i = r[0],
          a = r[1],
          o = Object(n.useState)([]),
          j = Object(d.a)(o, 2),
          l = j[0],
          u = j[1];
        Object(n.useEffect)(function () {
          fetch("/data/products.json").then(function (t) {
            return t
              .json()
              .then(function (t) {
                return m(t);
              })
              .then(function (t) {
                u(t);
              });
          });
        }, []);
        var b = function (t) {
            var e = i.filter(function (e) {
              return e !== t;
            });
            a(e);
          },
          m = function (t) {
            for (var e = t.length - 1; e > 0; e--) {
              var r = Math.floor(Math.random() * (e + 1)),
                c = t[e];
              (t[e] = t[r]), (t[r] = c);
            }
            return t;
          },
          O = i.map(function (t) {
            return (function (t, e) {
              return t.find(function (t) {
                return e === t.id;
              });
            })(l, t);
          });
        return Object(c.jsxs)("div", {
          className: "container",
          children: [
            Object(c.jsx)("header", {
              className: "row",
              children: Object(c.jsx)("div", {
                className: "col-md-12",
                children: Object(c.jsx)("h1", {
                  children: "Welcome to React Bookstore",
                }),
              }),
            }),
            Object(c.jsxs)("div", {
              className: "row",
              children: [
                Object(c.jsx)("div", {
                  className: "col-md-8",
                  children: Object(c.jsx)(v, {
                    addToCart: function (t) {
                      var e = [].concat(Object(s.a)(i), [t]);
                      a(e);
                    },
                    removeFromCart: b,
                    products: l,
                    inCart: i,
                  }),
                }),
                Object(c.jsx)("div", {
                  className: "col-md-4",
                  children: Object(c.jsx)(h, { removeFromCart: b, inCart: O }),
                }),
              ],
            }),
            Object(c.jsx)("footer", {}),
          ],
        });
      };
      r(15);
      o.a.render(Object(c.jsx)(x, {}), document.getElementById("root"));
    },
  },
  [[16, 1, 2]],
]);
//# sourceMappingURL=main.ee531687.chunk.js.map
