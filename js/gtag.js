// Copyright 2012 Google Inc. All rights reserved.
(function () {

   var data = {
      "resource": {
         "version": "1",
         "macros": [],
         "tags": [],
         "predicates": [],
         "rules": []
      },
      "runtime": [
         [],
         []
      ]

   };
   var aa, ca = this,
      da = /^[\w+/_-]+[=]{0,2}$/,
      ea = null,
      fa = function (a, b) {
         function c() {}
         c.prototype = b.prototype;
         a.Xg = b.prototype;
         a.prototype = new c;
         a.prototype.constructor = a;
         a.Gg = function (d, e, g) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
         }
      };
   var ha = function () {},
      ia = function (a) {
         return "function" == typeof a
      },
      ja = function (a) {
         return "string" == typeof a
      },
      ka = function (a) {
         return "number" == typeof a && !isNaN(a)
      },
      la = function (a) {
         return "[object Array]" == Object.prototype.toString.call(Object(a))
      },
      ma = function (a, b) {
         if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
         }
         for (var d = 0; d < a.length; d++)
            if (a[d] === b) return d;
         return -1
      },
      oa = function (a, b) {
         if (a && la(a))
            for (var c = 0; c < a.length; c++)
               if (a[c] && b(a[c])) return a[c]
      },
      pa = function (a, b) {
         if (!ka(a) ||
            !ka(b) || a > b) a = 0, b = 2147483647;
         return Math.floor(Math.random() * (b - a + 1) + a)
      },
      qa = function (a, b) {
         for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
      },
      ra = function (a) {
         return Math.round(Number(a)) || 0
      },
      sa = function (a) {
         return "false" == String(a).toLowerCase() ? !1 : !!a
      },
      ta = function (a) {
         var b = [];
         if (la(a))
            for (var c = 0; c < a.length; c++) b.push(String(a[c]));
         return b
      },
      ua = function (a) {
         return a ? a.replace(/^\s+|\s+$/g, "") : ""
      },
      va = function () {
         return (new Date).getTime()
      },
      wa = function () {
         this.prefix = "gtm.";
         this.values = {}
      };
   wa.prototype.set = function (a, b) {
      this.values[this.prefix + a] = b
   };
   wa.prototype.get = function (a) {
      return this.values[this.prefix + a]
   };
   wa.prototype.contains = function (a) {
      return void 0 !== this.get(a)
   };
   var xa = function (a, b, c) {
         return a && a.hasOwnProperty(b) ? a[b] : c
      },
      ya = function (a) {
         var b = !1;
         return function () {
            if (!b) try {
               a()
            } catch (c) {}
            b = !0
         }
      },
      za = function (a, b) {
         for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
      },
      Aa = function (a) {
         for (var b in a)
            if (a.hasOwnProperty(b)) return !0;
         return !1
      },
      Ba = function (a, b) {
         for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
         return c
      };
   /*
    jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
   var Ca = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
      Da = function (a) {
         if (null == a) return String(a);
         var b = Ca.exec(Object.prototype.toString.call(Object(a)));
         return b ? b[1].toLowerCase() : "object"
      },
      Ea = function (a, b) {
         return Object.prototype.hasOwnProperty.call(Object(a), b)
      },
      Fa = function (a) {
         if (!a || "object" != Da(a) || a.nodeType || a == a.window) return !1;
         try {
            if (a.constructor && !Ea(a, "constructor") && !Ea(a.constructor.prototype, "isPrototypeOf")) return !1
         } catch (c) {
            return !1
         }
         for (var b in a);
         return void 0 ===
            b || Ea(a, b)
      },
      Ga = function (a, b) {
         var c = b || ("array" == Da(a) ? [] : {}),
            d;
         for (d in a)
            if (Ea(a, d)) {
               var e = a[d];
               "array" == Da(e) ? ("array" != Da(c[d]) && (c[d] = []), c[d] = Ga(e, c[d])) : Fa(e) ? (Fa(c[d]) || (c[d] = {}), c[d] = Ga(e, c[d])) : c[d] = e
            } return c
      };
   var f = window,
      u = document,
      Ha = navigator,
      Ia = u.currentScript && u.currentScript.src,
      Ja = function (a, b) {
         var c = f[a];
         f[a] = void 0 === c ? b : c;
         return f[a]
      },
      Ka = function (a, b) {
         b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
            a.readyState in {
               loaded: 1,
               complete: 1
            } && (a.onreadystatechange = null, b())
         })
      },
      La = function (a, b, c) {
         var d = u.createElement("script");
         d.type = "text/javascript";
         d.async = !0;
         d.src = a;
         Ka(d, b);
         c && (d.onerror = c);
         var e;
         if (null === ea) b: {
            var g = ca.document,
               h = g.querySelector && g.querySelector("script[nonce]");
            if (h) {
               var k = h.nonce || h.getAttribute("nonce");
               if (k && da.test(k)) {
                  ea = k;
                  break b
               }
            }
            ea = ""
         }
         e = ea;
         e && d.setAttribute("nonce", e);
         var l = u.getElementsByTagName("script")[0] || u.body || u.head;
         l.parentNode.insertBefore(d, l);
         return d
      },
      Ma = function () {
         if (Ia) {
            var a = Ia.toLowerCase();
            if (0 === a.indexOf("https://")) return 2;
            if (0 === a.indexOf("http://")) return 3
         }
         return 1
      },
      Na = function (a, b) {
         var c = u.createElement("iframe");
         c.height = "0";
         c.width = "0";
         c.style.display = "none";
         c.style.visibility = "hidden";
         var d = u.body && u.body.lastChild ||
            u.body || u.head;
         d.parentNode.insertBefore(c, d);
         Ka(c, b);
         void 0 !== a && (c.src = a);
         return c
      },
      Oa = function (a, b, c) {
         var d = new Image(1, 1);
         d.onload = function () {
            d.onload = null;
            b && b()
         };
         d.onerror = function () {
            d.onerror = null;
            c && c()
         };
         d.src = a;
         return d
      },
      Pa = function (a, b, c, d) {
         a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
      },
      Qa = function (a, b, c) {
         a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
      },
      z = function (a) {
         f.setTimeout(a, 0)
      },
      Sa = function (a) {
         var b =
            u.getElementById(a);
         if (b && Ra(b, "id") != a)
            for (var c = 1; c < document.all[a].length; c++)
               if (Ra(document.all[a][c], "id") == a) return document.all[a][c];
         return b
      },
      Ra = function (a, b) {
         return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
      },
      Ta = function (a) {
         var b = a.innerText || a.textContent || "";
         b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
         b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
         return b
      },
      Ua = function (a) {
         var b = u.createElement("div");
         b.innerHTML = "A<div>" + a + "</div>";
         b = b.lastChild;
         for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
         return c
      },
      Wa = function (a, b, c) {
         c = c || 100;
         for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
         for (var g = a, h = 0; g && h <= c; h++) {
            if (d[String(g.tagName).toLowerCase()]) return g;
            g = g.parentElement
         }
         return null
      };
   var Xa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
   var Ya = /:[0-9]+$/,
      Za = function (a, b, c) {
         for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var g = d[e].split("=");
            if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) {
               var h = g.slice(1).join("=");
               return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
            }
         }
      },
      bb = function (a, b, c, d, e) {
         b && (b = String(b).toLowerCase());
         if ("protocol" === b || "port" === b) a.protocol = $a(a.protocol) || $a(f.location.protocol);
         "port" === b ? a.port = String(Number(a.hostname ? a.port : f.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
            (a.hostname = (a.hostname || f.location.hostname).replace(Ya, "").toLowerCase());
         var g = b,
            h, k = $a(a.protocol);
         g && (g = String(g).toLowerCase());
         switch (g) {
         case "url_no_fragment":
            h = ab(a);
            break;
         case "protocol":
            h = k;
            break;
         case "host":
            h = a.hostname.replace(Ya, "").toLowerCase();
            if (c) {
               var l = /^www\d*\./.exec(h);
               l && l[0] && (h = h.substr(l[0].length))
            }
            break;
         case "port":
            h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
            break;
         case "path":
            h = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var m = h.split("/");
            0 <=
               ma(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
            h = m.join("/");
            break;
         case "query":
            h = a.search.replace("?", "");
            e && (h = Za(h, e, void 0));
            break;
         case "extension":
            var n = a.pathname.split(".");
            h = 1 < n.length ? n[n.length - 1] : "";
            h = h.split("/")[0];
            break;
         case "fragment":
            h = a.hash.replace("#", "");
            break;
         default:
            h = a && a.href
         }
         return h
      },
      $a = function (a) {
         return a ? a.replace(":", "").toLowerCase() : ""
      },
      ab = function (a) {
         var b = "";
         if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
         }
         return b
      },
      cb = function (a) {
         var b = u.createElement("a");
         a && (b.href = a);
         var c = b.pathname;
         "/" !== c[0] && (c = "/" + c);
         var d = b.hostname.replace(Ya, "");
         return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
         }
      };
   var db = function (a, b, c) {
         for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
            var h = e[g].split("="),
               k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
               var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
               l && c && (l = decodeURIComponent(l));
               d.push(l)
            }
         }
         return d
      },
      hb = function (a, b, c, d) {
         var e = eb(a, d);
         if (1 === e.length) return e[0].id;
         if (0 !== e.length) {
            e = fb(e, function (g) {
               return g.yb
            }, b);
            if (1 === e.length) return e[0].id;
            e = fb(e, function (g) {
               return g.Ta
            }, c);
            return e[0] ? e[0].id : void 0
         }
      };

   function ib(a, b, c) {
      var d = document.cookie;
      document.cookie = a;
      var e = document.cookie;
      return d != e || void 0 != c && 0 <= db(b, e).indexOf(c)
   }
   var lb = function (a, b, c, d, e, g) {
      d = d || "auto";
      var h = {
         path: c || "/"
      };
      e && (h.expires = e);
      "none" !== d && (h.domain = d);
      var k;
      a: {
         var l = b,
            m;
         if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
         else {
            g && (l = encodeURIComponent(l));
            var n = l;
            n && 1200 < n.length && (n = n.substring(0, 1200));
            l = n;
            m = a + "=" + l
         }
         var p = void 0,
            t = void 0,
            q;
         for (q in h)
            if (h.hasOwnProperty(q)) {
               var r = h[q];
               if (null != r) switch (q) {
               case "secure":
                  r && (m += "; secure");
                  break;
               case "domain":
                  p = r;
                  break;
               default:
                  "path" == q && (t = r), "expires" == q && r instanceof Date && (r =
                     r.toUTCString()), m += "; " + q + "=" + r
               }
            } if ("auto" === p) {
            for (var v = jb(), x = 0; x < v.length; ++x) {
               var y = "none" != v[x] ? v[x] : void 0;
               if (!kb(y, t) && ib(m + (y ? "; domain=" + y : ""), a, l)) {
                  k = !0;
                  break a
               }
            }
            k = !1
         } else p && "none" != p && (m += "; domain=" + p),
         k = !kb(p, t) && ib(m, a, l)
      }
      return k
   };

   function fb(a, b, c) {
      for (var d = [], e = [], g, h = 0; h < a.length; h++) {
         var k = a[h],
            l = b(k);
         l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
      }
      return 0 < d.length ? d : e
   }

   function eb(a, b) {
      for (var c = [], d = db(a), e = 0; e < d.length; e++) {
         var g = d[e].split("."),
            h = g.shift();
         if (!b || -1 !== b.indexOf(h)) {
            var k = g.shift();
            k && (k = k.split("-"), c.push({
               id: g.join("."),
               yb: 1 * k[0] || 1,
               Ta: 1 * k[1] || 1
            }))
         }
      }
      return c
   }
   var mb = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
      nb = /(^|\.)doubleclick\.net$/i,
      kb = function (a, b) {
         return nb.test(document.location.hostname) || "/" === b && mb.test(a)
      },
      jb = function () {
         var a = [],
            b = document.location.hostname.split(".");
         if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
         }
         for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
         a.push("none");
         return a
      };
   var Lb = [],
      Mb = [],
      Nb = [],
      Ob = [],
      Pb = [],
      Qb = {},
      Rb, Sb, Tb, Ub = function (a, b) {
         var c = {};
         c["function"] = "__" + a;
         for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
         return c
      },
      Vb = function (a, b) {
         var c = a["function"];
         if (!c) throw Error("Error: No function name given for function call.");
         var d = !!Qb[c],
            e = {},
            g;
         for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e[d ? g : g.substr(4)] = a[g]);
         return d ? Qb[c](e) : (void 0)(c, e, b)
      },
      Xb = function (a, b, c, d) {
         c = c || [];
         d = d || ha;
         var e = {},
            g;
         for (g in a) a.hasOwnProperty(g) && (e[g] = Wb(a[g], b,
            c, d));
         return e
      },
      Yb = function (a) {
         var b = a["function"];
         if (!b) throw "Error: No function name given for function call.";
         var c = Qb[b];
         return c ? c.b || 0 : 0
      },
      Wb = function (a, b, c, d) {
         if (la(a)) {
            var e;
            switch (a[0]) {
            case "function_id":
               return a[1];
            case "list":
               e = [];
               for (var g = 1; g < a.length; g++) e.push(Wb(a[g], b, c, d));
               return e;
            case "macro":
               var h = a[1];
               if (c[h]) return;
               var k = Lb[h];
               if (!k || b(k)) return;
               c[h] = !0;
               try {
                  var l = Xb(k, b, c, d);
                  e = Vb(l, d);
                  Tb && (e = Tb.ff(e, l))
               } catch (y) {
                  d(y, h), e = !1
               }
               c[h] = !1;
               return e;
            case "map":
               e = {};
               for (var m = 1; m < a.length; m +=
                  2) e[Wb(a[m], b, c, d)] = Wb(a[m + 1], b, c, d);
               return e;
            case "template":
               e = [];
               for (var n = !1, p = 1; p < a.length; p++) {
                  var t = Wb(a[p], b, c, d);
                  Sb && (n = n || t === Sb.ob);
                  e.push(t)
               }
               return Sb && n ? Sb.kf(e) : e.join("");
            case "escape":
               e = Wb(a[1], b, c, d);
               if (Sb && la(a[1]) && "macro" === a[1][0] && Sb.Nf(a)) return Sb.Yf(e);
               e = String(e);
               for (var q = 2; q < a.length; q++) ob[a[q]] && (e = ob[a[q]](e));
               return e;
            case "tag":
               var r = a[1];
               if (!Ob[r]) throw Error("Unable to resolve tag reference " + r + ".");
               return e = {
                  wd: a[2],
                  index: r
               };
            case "zb":
               var v = {
                  arg0: a[2],
                  arg1: a[3],
                  ignore_case: a[5]
               };
               v["function"] = a[1];
               var x = Zb(v, b, c, d);
               a[4] && (x = !x);
               return x;
            default:
               throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
         }
         return a
      },
      Zb = function (a, b, c, d) {
         try {
            return Rb(Xb(a, b, c, d))
         } catch (e) {
            JSON.stringify(a)
         }
         return null
      };
   var $b = null,
      cc = function (a, b) {
         function c(t) {
            for (var q = 0; q < t.length; q++) e[t[q]] = !0
         }
         var d = [],
            e = [];
         $b = ac(a, b || function () {});
         for (var g = 0; g < Mb.length; g++) {
            var h = Mb[g],
               k = bc(h);
            if (k) {
               for (var l = h.add || [], m = 0; m < l.length; m++) d[l[m]] = !0;
               c(h.block || [])
            } else null === k && c(h.block || [])
         }
         for (var n = [], p = 0; p < Ob.length; p++) d[p] && !e[p] && (n[p] = !0);
         return n
      },
      bc = function (a) {
         for (var b = a["if"] || [], c = 0; c < b.length; c++) {
            var d = $b(b[c]);
            if (!d) return null === d ? null : !1
         }
         for (var e = a.unless || [], g = 0; g < e.length; g++) {
            var h = $b(e[g]);
            if (null ===
               h) return null;
            if (h) return !1
         }
         return !0
      },
      ac = function (a, b) {
         var c = [];
         return function (d) {
            void 0 === c[d] && (c[d] = Zb(Nb[d], a, void 0, b));
            return c[d]
         }
      };
   /*
    Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

   var pc = {},
      qc = null,
      rc = Math.random();
   pc.m = "UA-137039313-1";
   pc.sb = "3i1";
   var sc = "www.googletagmanager.com/gtm.js";
   sc = "www.googletagmanager.com/gtag/js";
   var tc = sc,
      uc = null,
      vc = null,
      wc = null,
      xc = "//www.googletagmanager.com/a?id=" + pc.m + "&cv=1",
      yc = {},
      zc = {},
      Ac = function () {
         var a = qc.sequence || 0;
         qc.sequence = a + 1;
         return a
      };
   var E = function (a, b, c, d) {
         return (2 === Bc() || d || "http:" != f.location.protocol ? a : b) + c
      },
      Bc = function () {
         var a = Ma(),
            b;
         if (1 === a) a: {
            var c = tc;c = c.toLowerCase();
            for (var d = "https://" + c, e = "http://" + c, g = 1, h = u.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
               var l = h[k].src;
               if (l) {
                  l = l.toLowerCase();
                  if (0 === l.indexOf(e)) {
                     b = 3;
                     break a
                  }
                  1 === g && 0 === l.indexOf(d) && (g = 2)
               }
            }
            b = g
         }
         else b = a;
         return b
      };
   var Cc = !1;
   var Dc = function (a, b, c, d) {
      if (c) {
         d = d || {};
         var e = f._googWcmImpl || function () {
            e.q = e.q || [];
            e.q.push(arguments)
         };
         f._googWcmImpl = e;
         void 0 === f._googWcmAk && (f._googWcmAk = a);
         Cc ? d.za && z(d.za) : (La(E("https://", "http://", "www.gstatic.com/wcm/loader.js"), d.za, d.Ld), Cc = !0);
         var g = {
            ak: a,
            cl: b
         };
         void 0 === d.Yd && (g.autoreplace = c);
         e(2, d.Yd, g, c, 0, new Date, d.xg)
      }
   };
   var Fc = function () {
      var a = function (b) {
         return {
            toString: function () {
               return b
            }
         }
      };
      return {
         Vc: a("convert_case_to"),
         Wc: a("convert_false_to"),
         Xc: a("convert_null_to"),
         Yc: a("convert_true_to"),
         Zc: a("convert_undefined_to"),
         ra: a("function"),
         ye: a("instance_name"),
         ze: a("live_only"),
         Ae: a("malware_disabled"),
         Cg: a("original_vendor_template_id"),
         Be: a("once_per_event"),
         md: a("once_per_load"),
         nd: a("setup_tags"),
         Ce: a("tag_id"),
         od: a("teardown_tags")
      }
   }();
   var Gc = {},
      Hc = function (a) {
         Gc.GTM = Gc.GTM || [];
         Gc.GTM[a] = !0
      };
   var Ic = function () {
         return "&tc=" + Ob.filter(function (a) {
            return a
         }).length
      },
      Rc = function () {
         Jc && (f.clearTimeout(Jc), Jc = void 0);
         void 0 === Kc || Lc[Kc] && !Mc || (Nc[Kc] || Oc.Pf() || 0 >= Pc-- ? (Hc(1), Nc[Kc] = !0) : (Oc.gg(), Oa(Qc()), Lc[Kc] = !0, Mc = ""))
      },
      Qc = function () {
         var a = Kc;
         if (void 0 === a) return "";
         for (var b, c = [], d = Gc.GTM || [], e = 0; e < d.length; e++) d[e] && (c[Math.floor(e / 6)] ^= 1 << e % 6);
         for (var g = 0; g < c.length; g++) c[g] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g] || 0);
         b = c.join("");
         return [Sc, Lc[a] ? "" :
            "&es=1", Tc[a], b ? "&u=" + b : "", Ic(), Mc, "&z=0"
         ].join("")
      },
      Uc = function () {
         return [xc, "&v=3&t=t", "&pid=" + pa(), "&rv=" + pc.sb].join("")
      },
      Vc = "0.005000" > Math.random(),
      Sc = Uc(),
      Wc = function () {
         Sc = Uc()
      },
      Lc = {},
      Mc = "",
      Kc = void 0,
      Tc = {},
      Nc = {},
      Jc = void 0,
      Oc = function (a, b) {
         var c = 0,
            d = 0;
         return {
            Pf: function () {
               if (c < a) return !1;
               va() - d >= b && (c = 0);
               return c >= a
            },
            gg: function () {
               va() - d >= b && (c = 0);
               c++;
               d = va()
            }
         }
      }(2, 1E3),
      Pc = 1E3,
      Xc = function (a, b) {
         if (Vc && !Nc[a] && Kc !== a) {
            Rc();
            Kc = a;
            Mc = "";
            var c;
            c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) :
               "*";
            Tc[a] = "&e=" + c + "&eid=" + a;
            Jc || (Jc = f.setTimeout(Rc, 500))
         }
      },
      Yc = function (a, b, c) {
         if (Vc && !Nc[a] && b) {
            a !== Kc && (Rc(), Kc = a);
            var d = c + String(b[Fc.ra] || "").replace(/_/g, "");
            Mc = Mc ? Mc + "." + d : "&tr=" + d;
            Jc || (Jc = f.setTimeout(Rc, 500));
            2022 <= Qc().length && Rc()
         }
      };
   var Zc = new wa,
      $c = {},
      ad = {},
      ed = {
         set: function (a, b) {
            Ga(bd(a, b), $c);
            cd()
         },
         get: function (a) {
            return dd(a, 2)
         },
         reset: function () {
            Zc = new wa;
            $c = {};
            cd()
         }
      },
      dd = function (a, b) {
         if (2 != b) {
            var c = Zc.get(a);
            if (Vc) {
               var d = fd(a);
               c !== d && Hc(5)
            }
            return c
         }
         return fd(a)
      },
      fd = function (a, b, c) {
         var d = a.split("."),
            e = !1,
            g = void 0;
         var h = function (k, l) {
            for (var m = 0; void 0 !== k && m < d.length; m++) {
               if (null === k) return !1;
               k = k[d[m]]
            }
            return void 0 !== k || 1 < m ? k : l.length ? h(gd(l.pop()), l) : hd(d)
         };
         e = !0;
         g = h($c.eventModel, [b, c]);
         return e ? g : hd(d)
      },
      hd = function (a) {
         for (var b = $c, c = 0; c < a.length; c++) {
            if (null === b) return !1;
            if (void 0 === b) break;
            b = b[a[c]]
         }
         return b
      };
   var id = function (a, b) {
         return fd(a, b, void 0)
      },
      gd = function (a) {
         if (a) {
            var b = hd(["gtag", "targets", a]);
            return Fa(b) ? b : void 0
         }
      },
      jd = function (a, b) {
         function c(g) {
            g && qa(g, function (h) {
               d[h] = null
            })
         }
         var d = {};
         c($c);
         delete d.eventModel;
         c(gd(a));
         c(gd(b));
         c($c.eventModel);
         var e = [];
         qa(d, function (g) {
            e.push(g)
         });
         return e
      };
   var kd = function (a, b) {
         ad.hasOwnProperty(a) || (Zc.set(a, b), Ga(bd(a, b), $c), cd())
      },
      bd = function (a, b) {
         for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
         d[e[e.length - 1]] = b;
         return c
      },
      cd = function (a) {
         qa(ad, function (b, c) {
            Zc.set(b, c);
            Ga(bd(b, void 0), $c);
            Ga(bd(b, c), $c);
            a && delete ad[b]
         })
      };
   var ld = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
      md = {
         cl: ["ecl"],
         customPixels: ["nonGooglePixels"],
         ecl: ["cl"],
         html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
         customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
         nonGooglePixels: [],
         nonGoogleScripts: ["nonGooglePixels"],
         nonGoogleIframes: ["nonGooglePixels"]
      },
      nd = {
         cl: ["ecl"],
         customPixels: ["customScripts", "html"],
         ecl: ["cl"],
         html: ["customScripts"],
         customScripts: ["html"],
         nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
         nonGoogleScripts: ["customScripts", "html"],
         nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
      };
   var pd = function (a) {
         var b = dd("gtm.whitelist");
         b && Hc(9);
         b = ["google", "gtagfl", "lcl", "oid", "op"];
         var c = b && Ba(ta(b), md),
            d = dd("gtm.blacklist");
         d || (d = dd("tagTypeBlacklist")) && Hc(3);
         d ? Hc(8) : d = [];
         od() && (d = ta(d), d.push("nonGooglePixels", "nonGoogleScripts"));
         0 <= ma(ta(d), "google") && Hc(2);
         var e = d && Ba(ta(d), nd),
            g = {};
         return function (h) {
            var k = h && h[Fc.ra];
            if (!k || "string" != typeof k) return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== g[k]) return g[k];
            var l = zc[k] || [],
               m = a(k);
            if (b) {
               var n;
               if (n = m) a: {
                  if (0 > ma(c, k))
                     if (l && 0 < l.length)
                        for (var p = 0; p < l.length; p++) {
                           if (0 > ma(c, l[p])) {
                              Hc(11);
                              n = !1;
                              break a
                           }
                        } else {
                           n = !1;
                           break a
                        }
                  n = !0
               }
               m = n
            }
            var t = !1;
            if (d) {
               var q = 0 <= ma(e,
                  k);
               if (q) t = q;
               else {
                  var r;
                  b: {
                     for (var v = l || [], x = new wa, y = 0; y < e.length; y++) x.set(e[y], !0);
                     for (var w = 0; w < v.length; w++)
                        if (x.get(v[w])) {
                           r = !0;
                           break b
                        } r = !1
                  }
                  var D = r;
                  D && Hc(10);
                  t = D
               }
            }
            return g[k] = !m || t
         }
      },
      od = function () {
         return ld.test(f.location && f.location.hostname)
      };
   var rd = function (a) {
         return function (b, c) {
            if (ka(c)) a(b, c);
            else {
               b instanceof qd || (b = new qd(b));
               var d = b;
               c && d.jc.push(c);
               throw d;
            }
         }
      },
      qd = function (a) {
         this.Tf = a;
         this.jc = []
      };
   fa(qd, Error);
   var sd = {
      ff: function (a, b) {
         b[Fc.Vc] && "string" === typeof a && (a = 1 == b[Fc.Vc] ? a.toLowerCase() : a.toUpperCase());
         b.hasOwnProperty(Fc.Xc) && null === a && (a = b[Fc.Xc]);
         b.hasOwnProperty(Fc.Zc) && void 0 === a && (a = b[Fc.Zc]);
         b.hasOwnProperty(Fc.Yc) && !0 === a && (a = b[Fc.Yc]);
         b.hasOwnProperty(Fc.Wc) && !1 === a && (a = b[Fc.Wc]);
         return a
      }
   };
   var td = {
         active: !0,
         isWhitelisted: function () {
            return !0
         }
      },
      ud = function (a) {
         var b = qc.zones;
         !b && a && (b = qc.zones = a());
         return b
      };
   var vd = !1,
      wd = 0,
      xd = [];

   function yd(a) {
      if (!vd) {
         var b = u.createEventObject,
            c = "complete" == u.readyState,
            d = "interactive" == u.readyState;
         if (!a || "readystatechange" != a.type || c || !b && d) {
            vd = !0;
            for (var e = 0; e < xd.length; e++) z(xd[e])
         }
         xd.push = function () {
            for (var g = 0; g < arguments.length; g++) z(arguments[g]);
            return 0
         }
      }
   }

   function zd() {
      if (!vd && 140 > wd) {
         wd++;
         try {
            u.documentElement.doScroll("left"), yd()
         } catch (a) {
            f.setTimeout(zd, 50)
         }
      }
   }
   var Ad = function (a) {
      vd ? a() : xd.push(a)
   };
   var Bd = function () {
      function a(d) {
         return !ka(d) || 0 > d ? 0 : d
      }
      if (!qc._li && f.performance && f.performance.timing) {
         var b = f.performance.timing.navigationStart,
            c = ka(ed.get("gtm.start")) ? ed.get("gtm.start") : 0;
         qc._li = {
            cst: a(c - b),
            cbt: a(vc - b)
         }
      }
   };
   var Fd = !1,
      Gd = function () {
         return f.GoogleAnalyticsObject && f[f.GoogleAnalyticsObject]
      },
      Hd = !1;
   var Id = function (a) {
         f.GoogleAnalyticsObject || (f.GoogleAnalyticsObject = a || "ga");
         var b = f.GoogleAnalyticsObject;
         if (!f[b]) {
            var c = function () {
               c.q = c.q || [];
               c.q.push(arguments)
            };
            c.l = Number(new Date);
            f[b] = c
         }
         Bd();
         return f[b]
      },
      Jd = function (a, b, c, d) {
         b = String(b).replace(/\s+/g, "").split(",");
         var e = Gd();
         e(a + "require", "linker");
         e(a + "linker:autoLink", b, c, d)
      };
   var Ld = function () {},
      Kd = function () {
         return f.GoogleAnalyticsObject || "ga"
      },
      Md = !1;
   var Nd = function (a, b, c) {
      if (b) {
         c = c || {};
         var d = f._gaPhoneImpl || function () {
            d.q = d.q || [];
            d.q.push(arguments)
         };
         f._gaPhoneImpl = d;
         void 0 === f.ga_wpid && (f.ga_wpid = a);
         Md ? c.za && z(c.za) : (La(E("https://", "http://", "www.gstatic.com/gaphone/loader.js"), c.za, c.Ld), Md = !0);
         var e = {};
         void 0 !== c.zd ? e.receiver = c.zd : e.replace = b;
         e.ga_wpid = a;
         e.destination = b;
         d(2, new Date, e)
      }
   };
   var Td = function (a) {};

   function Sd(a, b) {
      a.containerId = pc.m;
      var c = {
         type: "GENERIC",
         value: a
      };
      b.length && (c.trace = b);
      return c
   };

   function Ud(a, b, c, d, e) {
      var g = Ob[a],
         h = Vd(a, b, c, d, e);
      if (!h) return null;
      var k = Wb(g[Fc.nd], d.da, [], ha);
      if (k && k.length) {
         var l = k[0];
         h = Ud(l.index, b, {
            I: h,
            O: 1 === l.wd ? c.terminate : h,
            terminate: c.terminate
         }, d, e)
      }
      return h
   }

   function Vd(a, b, c, d, e) {
      function g() {
         if (h[Fc.Ae]) l();
         else {
            var y = Xb(h, d.da, [], rd(function (B) {
                  Hc(6);
                  Td(B)
               })),
               w = !1;
            y.vtp_gtmOnSuccess = function () {
               if (!w) {
                  w = !0;
                  Yc(d.id, Ob[a], "5");
                  k()
               }
            };
            y.vtp_gtmOnFailure = function () {
               if (!w) {
                  w = !0;
                  Yc(d.id, Ob[a], "6");
                  l()
               }
            };
            y.vtp_gtmTagId = h.tag_id;
            Yc(d.id, h, "1");
            var D = !1,
               A = function (B, C) {
                  if (!D) {
                     B instanceof qd || (B = new qd(B));
                     var H = B;
                     C && H.jc.push(C);
                     throw H;
                  }
                  Td(B);
                  Yc(d.id, h, "7");
                  w || (w = !0, l())
               };
            try {
               Vb(y, A)
            } catch (B) {
               try {
                  D = !0, A(B)
               } catch (C) {}
            }
         }
      }
      var h = Ob[a],
         k = c.I,
         l = c.O,
         m = c.terminate;
      if (d.da(h)) return null;
      var n = Wb(h[Fc.od], d.da, [], ha);
      if (n && n.length) {
         var p = n[0],
            t = Ud(p.index, b, {
               I: k,
               O: l,
               terminate: m
            }, d, e);
         if (!t) return null;
         k = t;
         l = 2 === p.wd ? m : t
      }
      if (h[Fc.md] || h[Fc.Be]) {
         var q = h[Fc.md] ? Pb : b,
            r = k,
            v = l;
         if (!q[a]) {
            g = ya(g);
            var x = Wd(a, q, g);
            k = x.I;
            l = x.O
         }
         return function () {
            q[a](r, v)
         }
      }
      return g
   }

   function Wd(a, b, c) {
      var d = [],
         e = [];
      b[a] = Xd(d, e, c);
      return {
         I: function () {
            b[a] = Yd;
            for (var g = 0; g < d.length; g++) d[g]()
         },
         O: function () {
            b[a] = Zd;
            for (var g = 0; g < e.length; g++) e[g]()
         }
      }
   }

   function Xd(a, b, c) {
      return function (d, e) {
         a.push(d);
         b.push(e);
         c()
      }
   }

   function Yd(a) {
      a()
   }

   function Zd(a, b) {
      b()
   };

   function $d(a) {
      var b = 0,
         c = 0,
         d = !1;
      return {
         add: function () {
            c++;
            return ya(function () {
               b++;
               d && b >= c && a()
            })
         },
         Qe: function () {
            d = !0;
            b >= c && a()
         }
      }
   }
   var ce = function (a) {
      for (var b = $d(a.callback), c = [], d = [], e = 0; e < Ob.length; e++)
         if (a.Va[e]) {
            var g = Ob[e];
            var h = b.add();
            try {
               var k = Ud(e, c, {
                  I: h,
                  O: h,
                  terminate: h
               }, a, e);
               k ? d.push({
                  Wd: e,
                  b: Yb(g),
                  uf: k
               }) : (ae(e, a), h())
            } catch (m) {
               h()
            }
         } b.Qe();
      d.sort(be);
      for (var l = 0; l < d.length; l++) d[l].uf();
      return 0 < d.length
   };

   function be(a, b) {
      var c, d = b.b,
         e = a.b;
      c = d > e ? 1 : d < e ? -1 : 0;
      var g;
      if (0 !== c) g = c;
      else {
         var h = a.Wd,
            k = b.Wd;
         g = h > k ? 1 : h < k ? -1 : 0
      }
      return g
   }

   function ae(a, b) {
      if (!Vc) return;
      var c = function (d) {
         var e = b.da(Ob[d]) ? "3" : "4",
            g = Wb(Ob[d][Fc.nd], b.da, [], ha);
         g && g.length && c(g[0].index);
         Yc(b.id, Ob[d], e);
         var h = Wb(Ob[d][Fc.od], b.da, [], ha);
         h && h.length && c(h[0].index)
      };
      c(a);
   }
   var de = !1,
      ee = function (a, b, c, d) {
         if ("gtm.js" == b) {
            if (de) return !1;
            de = !0
         }
         Xc(a, b);
         var e = pd(c),
            g = {
               id: a,
               name: b,
               callback: d || ha,
               da: e,
               Va: []
            };
         g.Va = cc(e, rd(function (n) {
            Td(n)
         }));
         var h = ce(g);
         "gtm.js" !== b && "gtm.sync" !== b || Ld();
         if (!h) return h;
         for (var k = {
               __cl: !0,
               __ecl: !0,
               __evl: !0,
               __fsl: !0,
               __hl: !0,
               __jel: !0,
               __lcl: !0,
               __sdl: !0,
               __tl: !0,
               __ytl: !0
            }, l = 0; l < g.Va.length; l++)
            if (g.Va[l]) {
               var m =
                  Ob[l];
               if (m && !k[m[Fc.ra]]) return !0
            } return !1
      };
   var fe = function (a, b) {
      var c = Ub(a, b);
      Ob.push(c);
      return Ob.length - 1
   };
   var F = {
      Pb: "event_callback",
      Rb: "event_timeout"
   };
   F.Z = "gtag.config", F.Mb = "page_view", F.Zd = "user_engagement", F.R = "allow_ad_personalization_signals", F.$d = "allow_custom_scripts", F.ae = "allow_display_features", F.be = "allow_enhanced_conversions", F.ab = "client_id", F.N = "cookie_domain", F.T = "cookie_expires", F.cb = "cookie_name", F.na = "cookie_path", F.de = "cookie_update", F.oa = "currency", F.eb = "custom_params", F.fe = "custom_map", F.Tb = "groups", F.Ha = "language", F.ee = "country", F.Bg = "non_interaction", F.jb = "page_location", F.kb = "page_referrer", F.hd = "page_title", F.Ja = "send_page_view",
      F.qa = "send_to", F.lb = "session_duration", F.Xb = "session_engaged", F.mb = "session_id", F.Yb = "session_number", F.we = "tracking_id", F.nb = "user_properties", F.Ia = "linker", F.gb = "accept_incoming", F.H = "domains", F.ib = "url_position", F.hb = "decorate_forms", F.Wb = "phone_conversion_number", F.Ub = "phone_conversion_callback", F.Vb = "phone_conversion_css_class", F.jd = "phone_conversion_options", F.$c = "aw_remarketing", F.ad = "aw_remarketing_only", F.ba = "value", F.ue = "quantity", F.je = "affiliation", F.oe = "tax", F.ne = "shipping", F.Ob = "list_name",
      F.gd = "checkout_step", F.fd = "checkout_option", F.ke = "coupon", F.me = "promotions", F.Ka = "transaction_id", F.aa = "user_id", F.Ga = "conversion_linker", F.Fa = "conversion_cookie_prefix", F.F = "cookie_prefix", F.S = "items", F.Nb = "aw_merchant_id", F.cd = "aw_feed_country", F.dd = "aw_feed_language", F.bd = "discount", F.ed = "disable_merchant_reported_purchases", F.ie = "dc_natural_search", F.he = "dc_custom_params", F.xe = "trip_type", F.te = "passengers", F.qe = "method", F.ve = "search_term", F.ce = "content_type", F.se = "optimize_id", F.pe = "experiments",
      F.fb = "google_signals", F.Sb = "google_tld", F.Qb = "event_settings", F.kd = [F.R, F.N, F.T, F.cb, F.na, F.F, F.eb, F.Pb, F.Qb, F.Rb, F.fb, F.Sb, F.Tb, F.qa, F.Ja, F.lb, F.aa, F.nb], F.Uc = [F.qa, F.$c, F.ad, F.eb, F.Ja, F.Ha, F.ba, F.oa, F.Ka, F.aa, F.Ga, F.Fa, F.F, F.jb, F.kb, F.Wb, F.Ub, F.Vb, F.jd, F.S, F.Nb, F.cd, F.dd, F.bd, F.ed, F.R];
   var ge = {};
   var he = /[A-Z]+/,
      ie = /\s/,
      je = function (a) {
         if (ja(a) && (a = ua(a), !ie.test(a))) {
            var b = a.indexOf("-");
            if (!(0 > b)) {
               var c = a.substring(0, b);
               if (he.test(c)) {
                  for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                     if (!d[e]) return;
                  return {
                     id: a,
                     prefix: c,
                     containerId: c + "-" + d[0],
                     ca: d
                  }
               }
            }
         }
      },
      le = function (a) {
         for (var b = {}, c = 0; c < a.length; ++c) {
            var d = je(a[c]);
            d && (b[d.id] = d)
         }
         ke(b);
         var e = [];
         qa(b, function (g, h) {
            e.push(h)
         });
         return e
      };

   function ke(a) {
      var b = [],
         c;
      for (c in a)
         if (a.hasOwnProperty(c)) {
            var d = a[c];
            "AW" === d.prefix && d.ca[1] && b.push(d.containerId)
         } for (var e = 0; e < b.length; ++e) delete a[b[e]]
   };
   var me = null,
      ne = {},
      oe = {},
      pe, re = function (a, b) {
         var c = {
            event: a
         };
         b && (c.eventModel = Ga(b), b[F.Pb] && (c.eventCallback = b[F.Pb]), b[F.Rb] && (c.eventTimeout = b[F.Rb]));
         return c
      };
   var se = function () {
         me = me || !qc.gtagRegistered;
         qc.gtagRegistered = !0;
         return me
      },
      te = function (a) {
         if (void 0 === oe[a.id]) {
            var b;
            switch (a.prefix) {
            case "UA":
               b = fe("gtagua", {
                  trackingId: a.id
               });
               break;
            case "AW":
               b = fe("gtagaw", {
                  conversionId: a
               });
               break;
            case "DC":
               b = fe("gtagfl", {
                  targetId: a.id
               });
               break;
            case "GF":
               b = fe("gtaggf", {
                  conversionId: a
               });
               break;
            case "G":
               b = fe("get", {
                  trackingId: a.id,
                  isAutoTag: !0
               });
               break;
            case "HA":
               b = fe("gtagha", {
                  conversionId: a
               });
               break;
            default:
               return
            }
            if (!pe) {
               var c = Ub("v", {
                  name: "send_to",
                  dataLayerVersion: 2
               });
               Lb.push(c);
               pe = ["macro", Lb.length - 1]
            }
            var d = {
               arg0: pe,
               arg1: a.id,
               ignore_case: !1
            };
            d[Fc.ra] = "_lc";
            Nb.push(d);
            var e = {
               "if": [Nb.length - 1],
               add: [b]
            };
            e["if"] && (e.add || e.block) && Mb.push(e);
            oe[a.id] = b
         }
      },
      ue = function (a) {
         qa(ne, function (b, c) {
            var d = ma(c, a);
            0 <= d && c.splice(d, 1)
         })
      },
      ve = ya(function () {});
   var we = {
         config: function (a) {
            var b = a[2] || {};
            if (2 > a.length || !ja(a[1]) || !Fa(b)) return;
            var c = je(a[1]);
            if (!c) return;
            se() ? te(c) : ve();
            ue(c.id);
            var d = c.id,
               e = b[F.Tb] || "default";
            e = e.toString().split(",");
            for (var g = 0; g < e.length; g++) ne[e[g]] = ne[e[g]] || [], ne[e[g]].push(d);
            delete b[F.Tb];
            kd("gtag.targets." + c.id, void 0);
            kd("gtag.targets." + c.id, Ga(b));
            var h = {};
            h[F.qa] = c.id;
            return re(F.Z, h);
         },
         event: function (a) {
            var b = a[1];
            if (ja(b) && !(3 < a.length)) {
               var c;
               if (2 <
                  a.length) {
                  if (!Fa(a[2])) return;
                  c = a[2]
               }
               var d = re(b, c);
               var e;
               var g = c,
                  h = dd("gtag.fields.send_to", 2);
               ja(h) || (h = F.qa);
               var k = g && g[h];
               void 0 === k && (k = dd(h, 2), void 0 === k && (k = "default"));
               if (ja(k) || la(k)) {
                  for (var l = k.toString().replace(/\s+/g, "").split(","), m = [], n = 0; n < l.length; n++) 0 <= l[n].indexOf("-") ? m.push(l[n]) : m = m.concat(ne[l[n]] || []);
                  e = le(m)
               } else e = void 0;
               var p = e;
               if (!p) return;
               var t = se();
               t || ve();
               for (var q = [], r = 0; t && r < p.length; r++) {
                  var v = p[r];
                  q.push(v.id);
                  te(v)
               }
               d.eventModel = d.eventModel || {};
               0 < p.length ? d.eventModel[F.qa] = q.join() : delete d.eventModel[F.qa];
               return d
            }
         },
         js: function (a) {
            if (2 == a.length && a[1].getTime) return {
               event: "gtm.js",
               "gtm.start": a[1].getTime()
            }
         },
         policy: function (a) {
            if (3 === a.length) {
               var b = a[1],
                  c = a[2];
               ge[b] || (ge[b] = []);
               ge[b].push(c)
            }
         },
         set: function (a) {
            var b;
            2 == a.length && Fa(a[1]) ? b = Ga(a[1]) : 3 == a.length && ja(a[1]) && (b = {}, b[a[1]] = a[2]);
            if (b) return b.eventModel = Ga(b), b.event = "gtag.set", b._clear = !0, b
         }
      },
      xe = {
         policy: !0
      };
   var ye = function () {
      return !1
   };
   var Ee = function (a) {
      if (De(a)) return a;
      this.vg = a
   };
   Ee.prototype.Af = function () {
      return this.vg
   };
   var De = function (a) {
      return !a || "object" !== Da(a) || Fa(a) ? !1 : "getUntrustedUpdateValue" in a
   };
   Ee.prototype.getUntrustedUpdateValue = Ee.prototype.Af;
   var Fe = !1,
      Ge = [];

   function He() {
      if (!Fe) {
         Fe = !0;
         for (var a = 0; a < Ge.length; a++) z(Ge[a])
      }
   }
   var Ie = function (a) {
      Fe ? z(a) : Ge.push(a)
   };
   var Je = [],
      Ke = !1;

   function Le(a) {
      var b = a.eventCallback,
         c = ya(function () {
            ia(b) && z(function () {
               b(pc.m)
            })
         }),
         d = a.eventTimeout;
      d && f.setTimeout(c, Number(d));
      return c
   }
   var Me = function (a) {
         return f["dataLayer"].push(a)
      },
      Oe = function (a) {
         var b = a._clear;
         qa(a, function (g, h) {
            "_clear" !== g && (b && kd(g, void 0), kd(g, h))
         });
         var c = a.event;
         if (!c) return !1;
         var d = a["gtm.uniqueEventId"];
         d || (d = Ac(), a["gtm.uniqueEventId"] = d, kd("gtm.uniqueEventId", d));
         wc = c;
         var e = Ne(a);
         wc = null;
         if (!uc) {
            uc = a["gtm.start"];
         }
         return e
      };

   function Ne(a) {
      var b = a.event,
         c = a["gtm.uniqueEventId"],
         d, e = qc.zones;
      d = e ? e.checkState(pc.m, c) : td;
      if (!d.active) return !1;
      var g = Le(a);
      return ee(c, b, d.isWhitelisted, g) ? !0 : !1
   }
   var Pe = function () {
         for (var a = !1; !Ke && 0 < Je.length;) {
            Ke = !0;
            delete $c.eventModel;
            cd();
            var b = Je.shift();
            if (null != b) {
               var c = De(b);
               if (c) {
                  var d = b;
                  b = De(d) ? d.getUntrustedUpdateValue() : void 0;
                  for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < e.length; g++) {
                     var h = e[g],
                        k = dd(h, 1);
                     if (la(k) || Fa(k)) k = Ga(k);
                     ad[h] = k
                  }
               }
               try {
                  if (ia(b)) try {
                     b.call(ed)
                  } catch (v) {} else if (la(b)) {
                     var l = b;
                     if (ja(l[0])) {
                        var m =
                           l[0].split("."),
                           n = m.pop(),
                           p = l.slice(1),
                           t = dd(m.join("."), 2);
                        if (void 0 !== t && null !== t) try {
                           t[n].apply(t, p)
                        } catch (v) {}
                     }
                  } else {
                     var q = b;
                     if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee"))) {
                        a: {
                           if (b.length && ja(b[0])) {
                              var r = we[b[0]];
                              if (r && (!c || !xe[b[0]])) {
                                 b = r(b);
                                 break a
                              }
                           }
                           b = void 0
                        }
                        if (!b) {
                           Ke = !1;
                           continue
                        }
                     }
                     a = Oe(b) || a
                  }
               } finally {
                  c && cd(!0)
               }
            }
            Ke = !1
         }
         return !a
      },
      Qe = function () {
         var a = Pe();
         try {
            var b = pc.m,
               c = f["dataLayer"].hide;
            if (c && void 0 !== c[b] && c.end) {
               c[b] = !1;
               var d = !0,
                  e;
               for (e in c)
                  if (c.hasOwnProperty(e) && !0 === c[e]) {
                     d = !1;
                     break
                  } d && (c.end(), c.end = null)
            }
         } catch (g) {}
         return a
      },
      Re = function () {
         var a = Ja("dataLayer", []),
            b = Ja("google_tag_manager", {});
         b = b["dataLayer"] = b["dataLayer"] || {};
         Ad(function () {
            b.gtmDom || (b.gtmDom = !0, a.push({
               event: "gtm.dom"
            }))
         });
         Ie(function () {
            b.gtmLoad || (b.gtmLoad = !0, a.push({
               event: "gtm.load"
            }))
         });
         var c = a.push;
         a.push = function () {
            var d;
            if (0 < qc.SANDBOXED_JS_SEMAPHORE) {
               d = [];
               for (var e = 0; e < arguments.length; e++) d[e] = new Ee(arguments[e])
            } else d = [].slice.call(arguments, 0);
            var g = c.apply(a, d);
            Je.push.apply(Je, d);
            if (300 < this.length)
               for (Hc(4); 300 < this.length;) this.shift();
            var h = "boolean" !== typeof g || g;
            return Pe() && h
         };
         Je.push.apply(Je, a.slice(0));
         z(Qe)
      };
   var Te = function (a) {
         return Se ? u.querySelectorAll(a) : null
      },
      Ue = function (a, b) {
         if (!Se) return null;
         if (Element.prototype.closest) try {
            return a.closest(b)
         } catch (e) {
            return null
         }
         var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
         if (!u.documentElement.contains(d)) return null;
         do {
            try {
               if (c.call(d, b)) return d
            } catch (e) {
               break
            }
            d = d.parentElement || d.parentNode
         } while (null !== d && 1 === d.nodeType);
         return null
      },
      Ve = !1;
   if (u.querySelectorAll) try {
      var We = u.querySelectorAll(":root");
      We && 1 == We.length && We[0] == u.documentElement && (Ve = !0)
   } catch (a) {}
   var Se = Ve;
   var Xe;
   var tf = {};
   tf.ob = new String("undefined");
   var uf = function (a) {
      this.resolve = function (b) {
         for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === tf.ob ? b : a[d]);
         return c.join("")
      }
   };
   uf.prototype.toString = function () {
      return this.resolve("undefined")
   };
   uf.prototype.valueOf = uf.prototype.toString;
   tf.De = uf;
   tf.$b = {};
   tf.kf = function (a) {
      return new uf(a)
   };
   var vf = {};
   tf.hg = function (a, b) {
      var c = Ac();
      vf[c] = [a, b];
      return c
   };
   tf.td = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
         var d = vf[c];
         if (d && "function" === typeof d[b]) d[b]();
         vf[c] = void 0
      }
   };
   tf.Nf = function (a) {
      for (var b = !1, c = !1,
            d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
      return b && c
   };
   tf.Yf = function (a) {
      if (a === tf.ob) return a;
      var b = Ac();
      tf.$b[b] = a;
      return 'google_tag_manager["' + pc.m + '"].macro(' + b + ")"
   };
   tf.Rf = function (a, b, c) {
      a instanceof tf.De && (a = a.resolve(tf.hg(b, c)), b = ha);
      return {
         oc: a,
         I: b
      }
   };
   var wf = function (a, b, c) {
         var d = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": a.className,
            "gtm.elementId": a["for"] || Ra(a, "id") || "",
            "gtm.elementTarget": a.formTarget || a.target || ""
         };
         c && (d["gtm.triggers"] = c.join(","));
         d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "";
         return d
      },
      xf = function (a) {
         qc.hasOwnProperty("autoEventsSettings") || (qc.autoEventsSettings = {});
         var b = qc.autoEventsSettings;
         b.hasOwnProperty(a) || (b[a] = {});
         return b[a]
      },
      yf = function (a, b, c) {
         xf(a)[b] = c
      },
      zf = function (a, b, c, d) {
         var e = xf(a),
            g = xa(e, b, d);
         e[b] = c(g)
      },
      Af = function (a, b, c) {
         var d = xf(a);
         return xa(d, b, c)
      };
   var Bf = function () {
         for (var a = Ha.userAgent + (u.cookie || "") + (u.referrer || ""), b = a.length, c = f.history.length; 0 < c;) a += c-- ^ b++;
         var d = 1,
            e, g, h;
         if (a)
            for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
         return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(va() / 1E3)].join(".")
      },
      Ef = function (a, b, c, d) {
         var e = Cf(b);
         return hb(a, e, Df(c), d)
      },
      Cf = function (a) {
         if (!a) return 1;
         a = 0 === a.indexOf(".") ? a.substr(1) : a;
         return a.split(".").length
      },
      Df = function (a) {
         if (!a ||
            "/" === a) return 1;
         "/" !== a[0] && (a = "/" + a);
         "/" !== a[a.length - 1] && (a += "/");
         return a.split("/").length - 1
      };

   function Ff(a, b) {
      var c = "" + Cf(a),
         d = Df(b);
      1 < d && (c += "-" + d);
      return c
   };
   var Gf = ["1"],
      Hf = {},
      Lf = function (a, b, c, d) {
         var e = If(a);
         Hf[e] || Jf(e, b, c) || (Kf(e, Bf(), b, c, d), Jf(e, b, c))
      };

   function Kf(a, b, c, d, e) {
      var g;
      g = ["1", Ff(d, c), b].join(".");
      lb(a, g, c, d, 0 == e ? void 0 : new Date(va() + 1E3 * (void 0 == e ? 7776E3 : e)))
   }

   function Jf(a, b, c) {
      var d = Ef(a, b, c, Gf);
      d && (Hf[a] = d);
      return d
   }

   function If(a) {
      return (a || "_gcl") + "_au"
   };
   var Mf = function () {
      for (var a = [], b = u.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
         var e = b[d].match(c);
         e && a.push({
            Nc: e[1],
            value: e[2]
         })
      }
      var g = {};
      if (!a || !a.length) return g;
      for (var h = 0; h < a.length; h++) {
         var k = a[h].value.split(".");
         "1" == k[0] && 3 == k.length && k[1] && (g[a[h].Nc] || (g[a[h].Nc] = []), g[a[h].Nc].push({
            timestamp: k[1],
            xf: k[2]
         }))
      }
      return g
   };

   function Nf() {
      for (var a = Of, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
      return b
   }

   function Pf() {
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      a += a.toLowerCase() + "0123456789-_";
      return a + "."
   }
   var Of, Qf, Rf = function (a) {
         Of = Of || Pf();
         Qf = Qf || Nf();
         for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
               e = c + 2 < a.length,
               g = a.charCodeAt(c),
               h = d ? a.charCodeAt(c + 1) : 0,
               k = e ? a.charCodeAt(c + 2) : 0,
               l = g >> 2,
               m = (g & 3) << 4 | h >> 4,
               n = (h & 15) << 2 | k >> 6,
               p = k & 63;
            e || (p = 64, d || (n = 64));
            b.push(Of[l], Of[m], Of[n], Of[p])
         }
         return b.join("")
      },
      Sf = function (a) {
         function b(l) {
            for (; d < a.length;) {
               var m = a.charAt(d++),
                  n = Qf[m];
               if (null != n) return n;
               if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
         }
         Of = Of || Pf();
         Qf = Qf ||
            Nf();
         for (var c = "", d = 0;;) {
            var e = b(-1),
               g = b(0),
               h = b(64),
               k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | g >> 4);
            64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
         }
      };
   var Tf;

   function Uf(a, b) {
      if (!a || b === u.location.hostname) return !1;
      for (var c = 0; c < a.length; c++)
         if (a[c] instanceof RegExp) {
            if (a[c].test(b)) return !0
         } else if (0 <= b.indexOf(a[c])) return !0;
      return !1
   }
   var Vf = function () {
      var a = Ja("google_tag_data", {}),
         b = a.gl;
      b && b.decorators || (b = {
         decorators: []
      }, a.gl = b);
      return b
   };
   var Wf = /(.*?)\*(.*?)\*(.*)/,
      Xf = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
      Yf = /^(?:www\.|m\.|amp\.)+/,
      Zf = /([^?#]+)(\?[^#]*)?(#.*)?/,
      $f = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
      bg = function (a) {
         var b = [],
            c;
         for (c in a)
            if (a.hasOwnProperty(c)) {
               var d = a[c];
               void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Rf(String(d))))
            } var e = b.join("*");
         return ["1", ag(e), e].join("*")
      },
      ag = function (a, b) {
         var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
               window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a
            ].join("*"),
            d;
         if (!(d = Tf)) {
            for (var e = Array(256), g = 0; 256 > g; g++) {
               for (var h = g, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
               e[g] = h
            }
            d = e
         }
         Tf = d;
         for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ Tf[(l ^ c.charCodeAt(m)) & 255];
         return ((l ^ -1) >>> 0).toString(36)
      },
      dg = function () {
         return function (a) {
            var b = cb(f.location.href),
               c = b.search.replace("?", ""),
               d = Za(c, "_gl", !0) || "";
            a.query = cg(d) || {};
            var e = bb(b, "fragment").match($f);
            a.fragment = cg(e && e[3] ||
               "") || {}
         }
      },
      cg = function (a) {
         var b;
         b = void 0 === b ? 3 : b;
         try {
            if (a) {
               var c;
               a: {
                  for (var d = a, e = 0; 3 > e; ++e) {
                     var g = Wf.exec(d);
                     if (g) {
                        c = g;
                        break a
                     }
                     d = decodeURIComponent(d)
                  }
                  c = void 0
               }
               var h = c;
               if (h && "1" === h[1]) {
                  var k = h[3],
                     l;
                  a: {
                     for (var m = h[2], n = 0; n < b; ++n)
                        if (m === ag(k, n)) {
                           l = !0;
                           break a
                        } l = !1
                  }
                  if (l) {
                     for (var p = {}, t = k ? k.split("*") : [], q = 0; q < t.length; q += 2) p[t[q]] = Sf(t[q + 1]);
                     return p
                  }
               }
            }
         } catch (r) {}
      };

   function eg(a, b, c) {
      function d(m) {
         var n = m,
            p = $f.exec(n),
            t = n;
         if (p) {
            var q = p[2],
               r = p[4];
            t = p[1];
            r && (t = t + q + r)
         }
         m = t;
         var v = m.charAt(m.length - 1);
         m && "&" !== v && (m += "&");
         return m + l
      }
      c = void 0 === c ? !1 : c;
      var e = Zf.exec(b);
      if (!e) return "";
      var g = e[1],
         h = e[2] || "",
         k = e[3] || "",
         l = "_gl=" + a;
      c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
      return "" + g + h + k
   }

   function fg(a, b, c) {
      for (var d = {}, e = {}, g = Vf().decorators, h = 0; h < g.length; ++h) {
         var k = g[h];
         (!c || k.forms) && Uf(k.domains, b) && (k.fragment ? za(e, k.callback()) : za(d, k.callback()))
      }
      if (Aa(d)) {
         var l = bg(d);
         if (c) {
            if (a && a.action) {
               var m = (a.method || "").toLowerCase();
               if ("get" === m) {
                  for (var n = a.childNodes || [], p = !1, t = 0; t < n.length; t++) {
                     var q = n[t];
                     if ("_gl" === q.name) {
                        q.setAttribute("value", l);
                        p = !0;
                        break
                     }
                  }
                  if (!p) {
                     var r = u.createElement("input");
                     r.setAttribute("type", "hidden");
                     r.setAttribute("name", "_gl");
                     r.setAttribute("value",
                        l);
                     a.appendChild(r)
                  }
               } else if ("post" === m) {
                  var v = eg(l, a.action);
                  Xa.test(v) && (a.action = v)
               }
            }
         } else gg(l, a, !1)
      }
      if (!c && Aa(e)) {
         var x = bg(e);
         gg(x, a, !0)
      }
   }

   function gg(a, b, c) {
      if (b.href) {
         var d = eg(a, b.href, void 0 === c ? !1 : c);
         Xa.test(d) && (b.href = d)
      }
   }
   var hg = function (a) {
         try {
            var b;
            a: {
               for (var c = a.target || a.srcElement || {}, d = 100; c && 0 < d;) {
                  if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                     b = c;
                     break a
                  }
                  c = c.parentNode;
                  d--
               }
               b = null
            }
            var e = b;
            if (e) {
               var g = e.protocol;
               "http:" !== g && "https:" !== g || fg(e, e.hostname, !1)
            }
         } catch (h) {}
      },
      ig = function (a) {
         try {
            var b = a.target || a.srcElement || {};
            if (b.action) {
               var c = bb(cb(b.action), "host");
               fg(b, c, !0)
            }
         } catch (d) {}
      },
      jg = function (a, b, c, d) {
         var e = Vf();
         e.init || (Pa(u, "mousedown", hg), Pa(u, "keyup", hg), Pa(u, "submit", ig), e.init = !0);
         var g = {
            callback: a,
            domains: b,
            fragment: "fragment" === c,
            forms: !!d
         };
         Vf().decorators.push(g)
      },
      kg = function () {
         var a = u.location.hostname,
            b = Xf.exec(u.referrer);
         if (!b) return !1;
         var c = b[2],
            d = b[1],
            e = "";
         if (c) {
            var g = c.split("/"),
               h = g[1];
            e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
         } else if (d) {
            if (0 === d.indexOf("xn--")) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
         }
         return a.replace(Yf, "") === e.replace(Yf, "")
      },
      lg = function (a, b) {
         return !1 === a ? !1 : a || b || kg()
      };
   var mg = /^\w+$/,
      ng = /^[\w-]+$/,
      og = /^~?[\w-]+$/,
      pg = {
         aw: "_aw",
         dc: "_dc",
         gf: "_gf",
         ha: "_ha"
      };

   function qg(a) {
      return a && "string" == typeof a && a.match(mg) ? a : "_gcl"
   }
   var sg = function () {
      var a = cb(f.location.href),
         b = bb(a, "query", !1, void 0, "gclid"),
         c = bb(a, "query", !1, void 0, "gclsrc"),
         d = bb(a, "query", !1, void 0, "dclid");
      if (!b || !c) {
         var e = a.hash.replace("#", "");
         b = b || Za(e, "gclid", void 0);
         c = c || Za(e, "gclsrc", void 0)
      }
      return rg(b, c, d)
   };

   function rg(a, b, c) {
      var d = {},
         e = function (g, h) {
            d[h] || (d[h] = []);
            d[h].push(g)
         };
      if (void 0 !== a && a.match(ng)) switch (b) {
      case void 0:
         e(a, "aw");
         break;
      case "aw.ds":
         e(a, "aw");
         e(a, "dc");
         break;
      case "ds":
         e(a, "dc");
         break;
      case "gf":
         e(a, "gf");
         break;
      case "ha":
         e(a, "ha")
      }
      c && e(c, "dc");
      return d
   }

   function tg(a, b, c) {
      function d(p, t) {
         var q = ug(p, e);
         q && lb(q, t, h, g, l, !0)
      }
      b = b || {};
      var e = qg(b.prefix),
         g = b.domain || "auto",
         h = b.path || "/",
         k = void 0 == b.Jd ? 7776E3 : b.Jd;
      c = c || va();
      var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
         m = Math.round(c / 1E3),
         n = function (p) {
            return ["GCL", m, p].join(".")
         };
      a.aw && (!0 === b.bh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
      a.dc && d("dc", n(a.dc[0]));
      a.gf && d("gf", n(a.gf[0]));
      a.ha && d("ha", n(a.ha[0]))
   }
   var ug = function (a, b) {
         var c = pg[a];
         if (void 0 !== c) return b + c
      },
      vg = function (a) {
         var b = a.split(".");
         return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
      };

   function wg(a) {
      var b = a.split(".");
      if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
   }
   var xg = function (a, b, c, d, e) {
         if (la(b)) {
            var g = qg(e);
            jg(function () {
               for (var h = {}, k = 0; k < a.length; ++k) {
                  var l = ug(a[k], g);
                  if (l) {
                     var m = db(l, u.cookie);
                     m.length && (h[l] = m.sort()[m.length - 1])
                  }
               }
               return h
            }, b, c, d)
         }
      },
      yg = function (a) {
         return a.filter(function (b) {
            return og.test(b)
         })
      },
      zg = function (a, b) {
         for (var c = qg(b && b.prefix), d = {}, e = 0; e < a.length; e++) pg[a[e]] && (d[a[e]] = pg[a[e]]);
         qa(d, function (g, h) {
            var k = db(c + h, u.cookie);
            if (k.length) {
               var l = k[0],
                  m = vg(l),
                  n = {};
               n[g] = [wg(l)];
               tg(n, b, m)
            }
         })
      };
   var Ag = /^\d+\.fls\.doubleclick\.net$/;

   function Bg(a) {
      var b = cb(f.location.href),
         c = bb(b, "host", !1);
      if (c && c.match(Ag)) {
         var d = bb(b, "path").split(a + "=");
         if (1 < d.length) return d[1].split(";")[0].split("?")[0]
      }
   }

   function Cg(a, b) {
      if ("aw" == a || "dc" == a) {
         var c = Bg("gcl" + a);
         if (c) return c.split(".")
      }
      var d = qg(b);
      if ("_gcl" == d) {
         var e;
         e = sg()[a] || [];
         if (0 < e.length) return e
      }
      var g = ug(a, d),
         h;
      if (g) {
         var k = [];
         if (u.cookie) {
            var l = db(g, u.cookie);
            if (l && 0 != l.length) {
               for (var m = 0; m < l.length; m++) {
                  var n = wg(l[m]);
                  n && -1 === ma(k, n) && k.push(n)
               }
               h = yg(k)
            } else h = k
         } else h = k
      } else h = [];
      return h
   }
   var Dg = function () {
         var a = Bg("gac");
         if (a) return decodeURIComponent(a);
         var b = Mf(),
            c = [];
         qa(b, function (d, e) {
            for (var g = [], h = 0; h < e.length; h++) g.push(e[h].xf);
            g = yg(g);
            g.length && c.push(d + ":" + g.join(","))
         });
         return c.join(";")
      },
      Eg = function (a, b, c, d, e) {
         Lf(b, c, d, e);
         var g = Hf[If(b)],
            h = sg().dc || [],
            k = !1;
         if (g && 0 < h.length) {
            var l = qc.joined_au = qc.joined_au || {},
               m = b || "_gcl";
            if (!l[m])
               for (var n = 0; n < h.length; n++) {
                  var p = "https://adservice.google.com/ddm/regclk",
                     t = p = p + "?gclid=" + h[n] + "&auiddc=" + g;
                  Ha.sendBeacon && Ha.sendBeacon(t) || Oa(t);
                  k = l[m] = !0
               }
         }
         k |= a;
         if (k && g) {
            var q = If(b),
               r = Hf[q];
            r && Kf(q, r, c, d, e)
         }
      };
   var Fg;
   if (3 === pc.sb.length) Fg = "g";
   else {
      var Gg = "G";
      Gg = "g";
      Fg = Gg
   }
   var Hg = {
         "": "n",
         UA: "u",
         AW: "a",
         DC: "d",
         G: "e",
         GF: "f",
         HA: "h",
         GTM: Fg
      },
      Ig = function (a) {
         var b = pc.m.split("-"),
            c = b[0].toUpperCase(),
            d = Hg[c] || "i",
            e = a && "GTM" === c ? b[1] : "",
            g;
         if (3 === pc.sb.length) {
            var h = void 0;
            h = h || (ye() ? "s" : "o");
            g = "2" + (h || "w")
         } else g = "";
         return g + d + pc.sb + e
      };
   var Jg = function (a) {
         return !(void 0 === a || null === a || 0 === (a + "").length)
      },
      Kg = function (a, b) {
         var c;
         if (2 === b.L) return a("ord", pa(1E11, 1E13)), !0;
         if (3 === b.L) return a("ord", "1"), a("num", pa(1E11, 1E13)), !0;
         if (4 === b.L) return Jg(b.sessionId) && a("ord", b.sessionId), !0;
         if (5 === b.L) c = "1";
         else if (6 === b.L) c = b.Hc;
         else return !1;
         Jg(c) && a("qty", c);
         Jg(b.vb) && a("cost", b.vb);
         Jg(b.transactionId) && a("ord", b.transactionId);
         return !0
      },
      Lg = encodeURIComponent,
      Mg = function (a, b) {
         function c(n, p, t) {
            g.hasOwnProperty(n) || (p += "", e += ";" + n + "=" +
               (t ? p : Lg(p)))
         }
         var d = a.kc,
            e = a.protocol;
         e += a.Eb ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
         e += ";src=" + Lg(d) + (";type=" + Lg(a.nc)) + (";cat=" + Lg(a.Na));
         var g = a.nf || {};
         qa(g, function (n, p) {
            e += ";" + Lg(n) + "=" + Lg(p + "")
         });
         if (Kg(c, a)) {
            Jg(a.Kb) && c("u", a.Kb);
            Jg(a.Jb) && c("tran", a.Jb);
            c("gtm", Ig());
            !1 === a.Me && c("npa", "1");
            if (a.hc) {
               var h = Cg("dc", a.wa);
               h && h.length && c("gcldc", h.join("."));
               var k = Cg("aw", a.wa);
               k && k.length && c("gclaw", k.join("."));
               var l = Dg();
               l && c("gac", l);
               Lf(a.wa, void 0, a.hf, a.jf);
               var m = Hf[If(a.wa)];
               m && c("auiddc", m)
            }
            Jg(a.Dc) && c("prd", a.Dc, !0);
            qa(a.Qc, function (n, p) {
               c(n, p)
            });
            e += b || "";
            Jg(a.Cb) && c("~oref", a.Cb);
            a.Eb ? Na(e + "?", a.I) : Oa(e + "?", a.I, a.O)
         } else z(a.O)
      };
   var Og = function (a) {
         var b = "/pagead/conversion/" + Ng(a.conversion_id) + "/?",
            c = Ng(JSON.stringify(a.conversion_data)),
            d = "https://www.googletraveladservices.com/travel/flights/clk" + b + "conversion_data=" + c;
         if (a.conversionLinkerEnabled) {
            var e = Cg("gf", a.cookiePrefix);
            if (e && e.length)
               for (var g = 0; g < e.length; g++) d += "&gclgf=" + Ng(e[g])
         }
         Oa(d, a.onSuccess, a.onFailure)
      },
      Ng = function (a) {
         return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
      };
   var Pg = !!f.MutationObserver,
      Qg = void 0,
      Rg = function (a) {
         if (!Qg) {
            var b = function () {
               var c = u.body;
               if (c)
                  if (Pg)(new MutationObserver(function () {
                     for (var e = 0; e < Qg.length; e++) z(Qg[e])
                  })).observe(c, {
                     childList: !0,
                     subtree: !0
                  });
                  else {
                     var d = !1;
                     Pa(c, "DOMNodeInserted", function () {
                        d || (d = !0, z(function () {
                           d = !1;
                           for (var e = 0; e < Qg.length; e++) z(Qg[e])
                        }))
                     })
                  }
            };
            Qg = [];
            u.body ? b() : z(b)
         }
         Qg.push(a)
      };
   var ih = f.clearTimeout,
      jh = f.setTimeout,
      G = function (a, b, c) {
         if (ye()) {
            b && z(b)
         } else return La(a, b, c)
      },
      kh = function () {
         return new Date
      },
      lh = function () {
         return f.location.href
      },
      mh = function (a) {
         return bb(cb(a), "fragment")
      },
      nh = function (a) {
         return ab(cb(a))
      },
      oh = function (a, b) {
         return dd(a, b || 2)
      },
      ph = function (a, b, c) {
         b && (a.eventCallback = b, c && (a.eventTimeout = c));
         return Me(a)
      },
      qh = function (a, b) {
         f[a] = b
      },
      K = function (a, b, c) {
         b && (void 0 === f[a] ||
            c && !f[a]) && (f[a] = b);
         return f[a]
      },
      rh = function (a, b, c) {
         return db(a, b, void 0 === c ? !0 : !!c)
      },
      sh = function (a, b, c, d) {
         var e = {
               prefix: a,
               path: b,
               domain: c,
               Jd: d
            },
            g = sg();
         tg(g, e);
         zg(["aw"], e);
         zg(["dc"], e);
      },
      th = function (a, b, c, d, e) {
         var g = dg(),
            h = Vf();
         h.data || (h.data = {
            query: {},
            fragment: {}
         }, g(h.data));
         var k = {},
            l = h.data;
         l && (za(k, l.query), za(k, l.fragment));
         for (var m = qg(b), n = 0; n < a.length; ++n) {
            var p = a[n];
            if (void 0 !== pg[p]) {
               var t = ug(p, m),
                  q = k[t];
               if (q) {
                  var r = Math.min(vg(q), va()),
                     v;
                  b: {
                     for (var x = r, y = db(t, u.cookie), w = 0; w < y.length; ++w)
                        if (vg(y[w]) > x) {
                           v = !0;
                           break b
                        } v = !1
                  }
                  v || lb(t, q, c, d, 0 == e ? void 0 : new Date(r + 1E3 * (null == e ? 7776E3 : e)), !0)
               }
            }
         }
         var D = {
            prefix: b,
            path: c,
            domain: d
         };
         tg(rg(k.gclid, k.gclsrc), D);
      },
      uh = function (a, b, c, d, e) {
         xg(a, b, c, d, e);
      },
      vh = function (a, b) {
         if (ye()) {
            b && z(b)
         } else Na(a, b)
      },
      wh = function (a) {
         return !!Af(a, "init", !1)
      },
      xh = function (a) {
         yf(a, "init", !0)
      },
      yh = function (a, b, c) {
         var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : tc;
         d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
         b && qa(b, function (e, g) {
            g && (d += "&" + e + "=" + encodeURIComponent(g))
         });
         G(E("https://", "http://", d))
      };
   var zh = function (a, b, c, d, e, g) {
      var h = {
         config: a,
         gtm: Ig()
      };
      c && (Lf(d, void 0, e, g), h.auiddc = Hf[If(d)]);
      b && (h.loadInsecure = b);
      K("__dc_ns_processor", []).push(h);
      G((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
   };
   var Ah = tf.Rf;
   var Bh = new wa;

   function Ch(a, b) {
      function c(h) {
         var k = cb(h),
            l = bb(k, "protocol"),
            m = bb(k, "host", !0),
            n = bb(k, "port"),
            p = bb(k, "path").toLowerCase().replace(/\/$/, "");
         if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web", n = "default";
         return [l, m, n, p]
      }
      for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)
         if (d[g] !== e[g]) return !1;
      return !0
   }

   function Dh(a) {
      var b = a.arg0,
         c = a.arg1;
      if (a.any_of && la(c)) {
         for (var d = 0; d < c.length; d++)
            if (Dh({
                  "function": a["function"],
                  arg0: b,
                  arg1: c[d]
               })) return !0;
         return !1
      }
      switch (a["function"]) {
      case "_cn":
         return 0 <= String(b).indexOf(String(c));
      case "_css":
         var e;
         a: {
            if (b) {
               var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
               try {
                  for (var h = 0; h < g.length; h++)
                     if (b[g[h]]) {
                        e = b[g[h]](c);
                        break a
                     }
               } catch (v) {}
            }
            e = !1
         }
         return e;
      case "_ew":
         var k, l;
         k = String(b);
         l = String(c);
         var m = k.length -
            l.length;
         return 0 <= m && k.indexOf(l, m) == m;
      case "_eq":
         return String(b) == String(c);
      case "_ge":
         return Number(b) >= Number(c);
      case "_gt":
         return Number(b) > Number(c);
      case "_lc":
         var n;
         n = String(b).split(",");
         return 0 <= ma(n, String(c));
      case "_le":
         return Number(b) <= Number(c);
      case "_lt":
         return Number(b) < Number(c);
      case "_re":
         var p;
         var t = a.ignore_case ? "i" : void 0;
         try {
            var q = String(c) + t,
               r = Bh.get(q);
            r || (r = new RegExp(c, t), Bh.set(q, r));
            p = r.test(b)
         } catch (v) {
            p = !1
         }
         return p;
      case "_sw":
         return 0 == String(b).indexOf(String(c));
      case "_um":
         return Ch(b, c)
      }
      return !1
   };
   var Fh = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c;
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d
   };
   var Gh = {},
      Hh = encodeURI,
      M = encodeURIComponent,
      Ih = Oa;
   var Jh = function (a, b) {
      if (!a) return !1;
      var c = bb(cb(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
         var e = b[d] && b[d].toLowerCase();
         if (e) {
            var g = c.length - e.length;
            0 < g && "." != e.charAt(0) && (g--, e = "." + e);
            if (0 <= g && c.indexOf(e, g) == g) return !0
         }
      }
      return !1
   };
   var Kh = function (a, b, c) {
      for (var d = {}, e = !1, g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0);
      return e ? d : null
   };
   Gh.Of = function () {
      var a = !1;
      return a
   };
   var ti = function (a, b, c, d) {
         this.n = a;
         this.t = b;
         this.p = c;
         this.d = d
      },
      ui = function () {
         this.c = 1;
         this.e = [];
         this.p = null
      };

   function vi(a) {
      var b = qc,
         c = b.gss = b.gss || {};
      return c[a] = c[a] || new ui
   }
   var wi = function (a, b) {
         vi(a).p = b
      },
      xi = function (a) {
         var b = vi(a),
            c = b.p;
         if (c) {
            var d = b.e,
               e = [];
            b.e = [];
            var g = function (h) {
               for (var k = 0; k < h.length; k++) try {
                  var l = h[k];
                  l.d ? (l.d = !1, e.push(l)) : c(l.n, l.t, l.p)
               } catch (m) {}
            };
            g(d);
            g(e)
         }
      };
   var zi = function () {
      var a = f.gaGlobal = f.gaGlobal || {};
      a.hid = a.hid || pa();
      return a.hid
   };
   var Oi = window,
      Pi = document,
      Qi = function (a) {
         var b = Oi._gaUserPrefs;
         if (b && b.ioo && b.ioo() || a && !0 === Oi["ga-disable-" + a]) return !0;
         try {
            var c = Oi.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
         } catch (g) {}
         for (var d = db("AMP_TOKEN", Pi.cookie, !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e]) return !0;
         return Pi.getElementById("__gaOptOutExtension") ? !0 : !1
      };
   var Wi = function (a, b, c) {
         Vi(a);
         var d = Math.floor(va() / 1E3);
         vi(a).e.push(new ti(b, d, c, void 0));
         xi(a)
      },
      Xi = function (a, b, c) {
         Vi(a);
         var d = Math.floor(va() / 1E3);
         vi(a).e.push(new ti(b, d, c, !0))
      },
      Vi = function (a) {
         if (1 === vi(a).c) {
            vi(a).c = 2;
            var b = encodeURIComponent(a);
            La(("http:" != f.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c"))
         }
      },
      Zi = function (a, b) {},
      Yi = function (a, b) {};
   var X = {
      a: {}
   };
   X.a.gtagha = ["google"],
      function () {
         function a(h) {
            function k(m, n) {
               void 0 !== n && l.push(m + "=" + n)
            }
            if (void 0 === h) return "";
            var l = [];
            k("hct_base_price", h.Cd);
            k("hct_booking_xref", h.Dd);
            k("hct_checkin_date", h.Df);
            k("hct_checkout_date", h.Ef);
            k("hct_currency_code", h.Ff);
            k("hct_partner_hotel_id", h.Ed);
            k("hct_total_price", h.Fd);
            return l.join(";")
         }

         function b(h, k, l, m) {
            var n = M(h),
               p = M(a(k)),
               t = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + n + "/?data=" + p;
            l && (t += Cg("ha", m).map(function (q) {
               return "&gclha=" +
                  M(q)
            }).join(""));
            return t
         }

         function c(h, k, l, m, n, p) {
            /^\d+$/.test(h) ? Ih(b(h, k, l, m), n, p) : z(p)
         }

         function d(h, k, l, m) {
            var n = {};
            ja(h) ? n.Dd = h : "number" === typeof h && (n.Dd = String(h));
            ja(l) && (n.Ff = l);
            ja(k) ? n.Fd = n.Cd = k : "number" === typeof k && (n.Fd = n.Cd = String(k));
            if (!la(m) || 0 == m.length) return n;
            var p = m[0];
            if (!Fa(p)) return n;
            ja(p.id) ? n.Ed = p.id : "number" === typeof p.id && (n.Ed = String(p.id));
            ja(p.start_date) && (n.Df = p.start_date);
            ja(p.end_date) && (n.Ef = p.end_date);
            return n
         }

         function e(h) {
            var k = wc,
               l = h.vtp_gtmOnSuccess,
               m = h.vtp_gtmOnFailure,
               n = h.vtp_conversionId,
               p = n.containerId,
               t = function (D) {
                  return fd(D, p, n.id)
               },
               q = !1 !== t(F.Ga),
               r = t(F.Fa) || t(F.F),
               v = t(F.N),
               x = t(F.T);
            if (k === F.Z) {
               var y = t(F.Ia) || {};
               q && (lg(y[F.gb], !!y[F.H]) && th(g, r, void 0, v, x), sh(r, void 0, v, x));
               y[F.H] && uh(g, y[F.H], y[F.ib], !!y[F.hb], r);
               z(l)
            } else if ("purchase" === k) {
               var w = d(t(F.Ka), t(F.ba), t(F.oa), t(F.S));
               c(n.ca[0], w, q, r, l, m)
            } else z(m)
         }
         var g = ["ha"];
         X.__gtagha = e;
         X.__gtagha.g = "gtagha";
         X.__gtagha.h = !0;
         X.__gtagha.b = 0;
      }();
   X.a.e = ["google"],
      function () {
         (function (a) {
            X.__e = a;
            X.__e.g = "e";
            X.__e.h = !0;
            X.__e.b = 0
         })(function () {
            return wc
         })
      }();

   X.a.v = ["google"],
      function () {
         (function (a) {
            X.__v = a;
            X.__v.g = "v";
            X.__v.h = !0;
            X.__v.b = 0
         })(function (a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = oh(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            return void 0 !== c ? c : a.vtp_defaultValue
         })
      }();

   X.a.gtagaw = ["google"],
      function () {
         var a = !1,
            b = [],
            c = ["aw", "dc"],
            d = function (m) {
               var n = K("google_trackConversion"),
                  p = m.gtm_onFailure;
               "function" == typeof n ? n(m) || p() : p()
            },
            e = function () {
               for (; 0 < b.length;) d(b.shift())
            },
            g = function () {
               a || (a = !0, Bd(), G(E("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js"), function () {
                  e();
                  b = {
                     push: d
                  }
               }, function () {
                  e();
                  a = !1
               }))
            },
            h = function (m, n, p, t) {
               if (ye()) {} else {
                  la(n) || (n = [n]);
                  for (var q =
                        0; q < n.length; q++) 1 > q && Dc(m.ca[0], m.ca[1], n[q], {
                     Yd: p,
                     xg: t
                  })
               }
            },
            k = function (m) {
               if (m) {
                  for (var n = [], p = 0; p < m.length; ++p) {
                     var t = m[p];
                     t && n.push({
                        item_id: t.id,
                        quantity: t.quantity,
                        value: t.price,
                        start_date: t.start_date,
                        end_date: t.end_date
                     })
                  }
                  return n
               }
            },
            l = function (m) {
               var n = m.vtp_conversionId,
                  p = wc,
                  t = p == F.Z,
                  q = n.ca[0],
                  r = n.ca[1],
                  v = void 0 !== r,
                  x = n.containerId,
                  y = v ? n.id : void 0,
                  w = function (T) {
                     return fd(T, x, y)
                  },
                  D = !1 !== w(F.Ga),
                  A = w(F.Fa) || w(F.F),
                  B = w(F.N),
                  C = w(F.T);
               if (t) {
                  var H = w(F.Ia) || {};
                  D && (lg(H[F.gb], !!H[F.H]) && th(c, A, void 0,
                     B, C), sh(A, void 0, B, C));
                  H[F.H] && uh(c, H[F.H], H[F.ib], !!H[F.hb], A);
                  if (v) {
                     var N = w(F.Wb),
                        R = w(F.Ub),
                        V = w(F.Vb),
                        O = w(F.jd);
                     h(n, N, R || V, O)
                  }
               }
               var S = !1 === w(F.$c) || !1 === w(F.Ja);
               if (!t || !v && !S)
                  if (!0 === w(F.ad) && (v = !1), !1 !== w(F.R) || v) {
                     var Q = {
                        google_conversion_id: q,
                        google_remarketing_only: !v,
                        onload_callback: m.vtp_gtmOnSuccess,
                        gtm_onFailure: m.vtp_gtmOnFailure,
                        google_conversion_format: "3",
                        google_conversion_color: "ffffff",
                        google_conversion_domain: "",
                        google_conversion_label: r,
                        google_conversion_language: w(F.Ha),
                        google_conversion_value: w(F.ba),
                        google_conversion_currency: w(F.oa),
                        google_conversion_order_id: w(F.Ka),
                        google_user_id: w(F.aa),
                        google_conversion_page_url: w(F.jb),
                        google_conversion_referrer_url: w(F.kb),
                        google_gtm: Ig()
                     };
                     ye() && (Q.opt_image_generator = function () {
                        return new Image
                     }, Q.google_enable_display_cookie_match = !1);
                     !1 === w(F.R) && (Q.google_allow_ad_personalization_signals = !1);
                     Q.google_read_gcl_cookie_opt_out = !D;
                     D && A && (Q.google_gcl_cookie_prefix = A);
                     var J = function () {
                        var T = w(F.eb),
                           Y = {
                              event: p
                           };
                        if (la(T)) {
                           for (var L = 0; L < T.length; ++L) {
                              var P =
                                 T[L],
                                 ba = w(P);
                              void 0 !== ba && (Y[P] = ba)
                           }
                           return Y
                        }
                        var na = w("eventModel");
                        if (!na) return null;
                        Ga(na, Y);
                        for (var W = 0; W < F.Uc.length; ++W) delete Y[F.Uc[W]];
                        return Y
                     }();
                     J && (Q.google_custom_params = J);
                     !v && w(F.S) && (Q.google_gtag_event_data = {
                        items: w(F.S),
                        value: w(F.ba)
                     });
                     if (v && "purchase" == p) {
                        w(F.Nb) && (Q.google_conversion_merchant_id = w(F.Nb), Q.google_basket_feed_country = w(F.cd), Q.google_basket_feed_language = w(F.dd), Q.google_basket_discount = w(F.bd), Q.google_basket_transaction_type = p, Q.google_disable_merchant_reported_conversions = !0 === w(F.ed), ye() && (Q.google_disable_merchant_reported_conversions = !0));
                        var I = k(w(F.S));
                        I && (Q.google_conversion_items = I)
                     }
                     var U = !0;
                     U && b.push(Q)
                  } g()
            };
         X.__gtagaw = l;
         X.__gtagaw.g = "gtagaw";
         X.__gtagaw.h = !0;
         X.__gtagaw.b = 0
      }();
   X.a.get = ["google"],
      function () {
         function a(b, c) {
            qa(c, function (e) {
               "_" === e.charAt(0) && delete c[e]
            });
            var d = c[F.nb] || {};
            qa(d, function (e) {
               "_" === e.charAt(0) && delete d[e]
            })
         }(function (b) {
            X.__get = b;
            X.__get.g = "get";
            X.__get.h = !0;
            X.__get.b = 0
         })(function (b) {
            if (b.vtp_isAutoTag) {
               for (var c = String(b.vtp_trackingId), d = wc || "", e = {}, g = F.kd, h = 0; h < g.length; h++) {
                  var k = id(g[h], c);
                  void 0 !== k && (e[g[h]] = k)
               }
               var l = id(F.eb, c);
               if (la(l))
                  for (var m = 0; m < l.length; m++) {
                     var n = l[m],
                        p = id(n, c);
                     void 0 !== p && (e[n] = p)
                  } else {
                     var t = oh("eventModel");
                     Ga(t, e)
                  }
               if ("_" === d.charAt(0)) return;
               a(d, e);
               Wi(c, d, Ga(e))
            } else {
               var q = b.vtp_settings,
                  r = q.eventParameters,
                  v = q.userProperties;
               Ga(Kh(b.vtp_eventParameters, "name", "value"), r);
               Ga(Kh(b.vtp_userProperties, "name", "value"), v);
               r[F.nb] = v;
               var x = String(b.vtp_eventName),
                  y = b.vtp_allowSystemNames;
               if (!y && "_" === x.charAt(0)) return;
               y || a(x, r);
               (b.vtp_deferrable ? Xi : Wi)(String(q.streamId), x, r)
            }
            b.vtp_gtmOnSuccess()
         })
      }();

   X.a.gtagfl = [],
      function () {
         function a(e) {
            var g = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(e);
            if (g) {
               var h = {
                  standard: 2,
                  unique: 3,
                  per_session: 4,
                  transactions: 5,
                  items_sold: 6,
                  "": 1
               } [(g[5] || "").toLowerCase()];
               if (h) return {
                  containerId: "DC-" + g[1],
                  Xd: g[3] ? e : "",
                  Ge: g[1],
                  Fe: g[3] || "",
                  Na: g[4] || "",
                  L: h
               }
            }
         }

         function b(e, g) {
            function h(t, q, r) {
               void 0 !== r && 0 !== (r + "").length && k.push(t + q + ":" + e(r + ""))
            }
            var k = [],
               l = g(F.S) || [];
            if (la(l))
               for (var m = 0; m < l.length; m++) {
                  var n = l[m],
                     p = m + 1;
                  h("i", p, n.id);
                  h("p", p, n.price);
                  h("q", p, n.quantity);
                  h("c", p, g(F.ee));
                  h("l", p, g(F.Ha))
               }
            return k.join("|")
         }

         function c(e, g, h) {
            var k = /^u([1-9]\d?|100)$/,
               l = e(F.fe) || {},
               m = jd(g, h),
               n = {},
               p = {};
            if (Fa(l))
               for (var t in l)
                  if (l.hasOwnProperty(t) && k.test(t)) {
                     var q = l[t];
                     ja(q) && (n[t] = q)
                  } for (var r = 0; r < m.length; r++) {
               var v = m[r];
               k.test(v) && (n[v] = v)
            }
            for (var x in n) n.hasOwnProperty(x) && (p[x] = e(n[x]));
            return p
         }
         var d = ["aw", "dc"];
         (function (e) {
            X.__gtagfl = e;
            X.__gtagfl.g = "gtagfl";
            X.__gtagfl.h = !0;
            X.__gtagfl.b = 0
         })(function (e) {
            var g = e.vtp_gtmOnSuccess,
               h = e.vtp_gtmOnFailure,
               k = a(e.vtp_targetId);
            if (k) {
               var l = function (V) {
                     return fd(V, k.containerId, k.Xd || void 0)
                  },
                  m = !1 !== l(F.Ga),
                  n = l(F.Fa) || l(F.F),
                  p = l(F.N),
                  t = l(F.T),
                  q = l(F.ie),
                  r = 3 === Bc();
               if (wc === F.Z) {
                  var v = l(F.Ia) || {},
                     x = l(F.de),
                     y = void 0 === x ? !0 : !!x;
                  m && (lg(v[F.gb], !!v[F.H]) && th(d, n, void 0, p, t), sh(n, void 0, p, t), Eg(y, n, void 0, p, t));
                  v[F.H] && uh(d, v[F.H], v[F.ib], !!v[F.hb], n);
                  if (q && q.exclusion_parameters && q.engines) {}
                  z(g)
               } else {
                  var w = {},
                     D = l(F.he);
                  if (Fa(D))
                     for (var A in D)
                        if (D.hasOwnProperty(A)) {
                           var B = D[A];
                           void 0 !== B && null !== B && (w[A] = B)
                        } var C = "";
                  if (5 === k.L || 6 === k.L) C = b(M, l);
                  var H = c(l, k.containerId, k.Xd),
                     N = !0 === l(F.$d);
                  if (ye() && N) {
                     N = !1
                  }
                  var R = {
                     Na: k.Na,
                     hc: m,
                     hf: p,
                     jf: t,
                     wa: n,
                     vb: l(F.ba),
                     L: k.L,
                     nf: w,
                     kc: k.Ge,
                     nc: k.Fe,
                     O: h,
                     I: g,
                     Cb: nh(lh()),
                     Dc: C,
                     protocol: r ? "http:" : "https:",
                     Hc: l(F.ue),
                     Eb: N,
                     sessionId: l(F.mb),
                     Jb: void 0,
                     transactionId: l(F.Ka),
                     Kb: void 0,
                     Qc: H,
                     Me: !1 !== l(F.R)
                  };
                  Mg(R)
               }
            } else z(h)
         })
      }();

   X.a.gtaggf = ["google"],
      function () {
         var a = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
            b = function (c) {
               if (c) {
                  for (var d = [], e = 0, g = 0; g < c.length; ++g) {
                     var h = c[g];
                     !h || void 0 !== h.category && "" !== h.category && "FlightSegment" !== h.category || (d[e] = {
                        cabin: h.travel_class,
                        fare_product: h.fare_product,
                        booking_code: h.booking_code,
                        flight_number: h.flight_number,
                        origin: h.origin,
                        destination: h.destination,
                        departure_date: h.start_date
                     }, e++)
                  }
                  return d
               }
            };
         (function (c) {
            X.__gtaggf = c;
            X.__gtaggf.g = "gtaggf";
            X.__gtaggf.h = !0;
            X.__gtaggf.b =
               0
         })(function (c) {
            var d = wc,
               e = c.vtp_gtmOnSuccess,
               g = c.vtp_gtmOnFailure,
               h = c.vtp_conversionId,
               k = h.ca[0],
               l = h.containerId,
               m = function (w) {
                  return fd(w, l, h.id)
               },
               n = !1 !== m(F.Ga),
               p = m(F.Fa) || m(F.F),
               t = m(F.N),
               q = m(F.T);
            if (d === F.Z) n && sh(p, void 0, t, q), z(e);
            else {
               var r = {
                  conversion_id: k,
                  onFailure: g,
                  onSuccess: e,
                  conversionLinkerEnabled: n,
                  cookiePrefix: p
               };
               if ("purchase" === d) {
                  var v = a.test(lh()),
                     x = {
                        partner_id: k,
                        trip_type: m(F.xe),
                        total_price: m(F.ba),
                        currency: m(F.oa),
                        is_direct_booking: v,
                        flight_segment: b(m(F.S))
                     },
                     y = m(F.te);
                  y && "object" ===
                     typeof y && (x.passengers_total = y.total, x.passengers_adult = y.adult, x.passengers_child = y.child, x.passengers_infant_in_seat = y.infant_in_seat, x.passengers_infant_in_lap = y.infant_in_lap);
                  r.conversion_data = x
               }
               Og(r)
            }
         })
      }();

   X.a.gtagua = ["google"],
      function () {
         var a, b = {
               client_id: 1,
               client_storage: "storage",
               cookie_name: 1,
               cookie_domain: 1,
               cookie_expires: 1,
               cookie_path: 1,
               cookie_update: 1,
               sample_rate: 1,
               site_speed_sample_rate: 1,
               use_amp_client_id: 1,
               store_gac: 1,
               conversion_linker: "storeGac"
            },
            c = {
               anonymize_ip: 1,
               app_id: 1,
               app_installer_id: 1,
               app_name: 1,
               app_version: 1,
               campaign: {
                  name: "campaignName",
                  source: "campaignSource",
                  medium: "campaignMedium",
                  term: "campaignTerm",
                  content: "campaignContent",
                  id: "campaignId"
               },
               currency: "currencyCode",
               description: "exDescription",
               fatal: "exFatal",
               language: 1,
               non_interaction: 1,
               page_hostname: "hostname",
               page_referrer: "referrer",
               page_path: "page",
               page_location: "location",
               page_title: "title",
               screen_name: 1,
               transport_type: "transport",
               user_id: 1
            },
            d = {
               content_id: 1,
               event_category: 1,
               event_action: 1,
               event_label: 1,
               link_attribution: 1,
               linker: 1,
               method: 1,
               name: 1,
               send_page_view: 1,
               value: 1
            },
            e = {
               cookie_name: 1,
               cookie_expires: "duration",
               levels: 1
            },
            g = {
               anonymize_ip: 1,
               fatal: 1,
               non_interaction: 1,
               use_amp_client_id: 1,
               send_page_view: 1,
               store_gac: 1,
               conversion_linker: 1
            },
            h = function (r, v, x, y) {
               if (void 0 !== x)
                  if (g[v] && (x = sa(x)), "anonymize_ip" != v || x || (x = void 0), 1 === r) y[k(v)] = x;
                  else if (ja(r)) y[r] = x;
               else
                  for (var w in r) r.hasOwnProperty(w) && void 0 !== x[w] && (y[r[w]] = x[w])
            },
            k = function (r) {
               return r && ja(r) ? r.replace(/(_[a-z])/g, function (v) {
                  return v[1].toUpperCase()
               }) : r
            },
            l = function (r, v, x) {
               r.hasOwnProperty(v) || (r[v] = x)
            },
            m = function (r, v, x) {
               var y = {},
                  w = {},
                  D = {},
                  A;
               var B = id(F.pe, r);
               if (la(B)) {
                  for (var C = [], H = 0; H < B.length; H++) {
                     var N = B[H];
                     if (void 0 != N) {
                        var R = N.id,
                           V = N.variant;
                        void 0 != R && void 0 !=
                           V && C.push(String(R) + "." + String(V))
                     }
                  }
                  A = 0 < C.length ? C.join("!") : void 0
               } else A = void 0;
               var O = A;
               O && l(w, "exp", O);
               var S = id("custom_map", r);
               if (Fa(S))
                  for (var Q in S)
                     if (S.hasOwnProperty(Q) && /^(dimension|metric)\d+$/.test(Q) && void 0 != S[Q]) {
                        var J = id(String(S[Q]), r);
                        void 0 !== J && l(w, Q, J)
                     } for (var I = jd(r), U = 0; U < I.length; ++U) {
                  var T = I[U],
                     Y = id(T, r);
                  d.hasOwnProperty(T) ? h(d[T], T, Y, y) : c.hasOwnProperty(T) ? h(c[T], T, Y, w) : b.hasOwnProperty(T) ? h(b[T], T, Y, D) : /^(dimension|metric|content_group)\d+$/.test(T) ? h(1, T, Y, w) : T === F.F &&
                     0 > ma(I, F.cb) && (D.cookieName = Y + "_ga")
               }
               var L = String(wc);
               l(D, "cookieDomain", "auto");
               l(w, "forceSSL", !0);
               var P = "general";
               0 <= ma("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), L) ? P = "ecommerce" : 0 <= ma("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), L) ? P = "engagement" : "exception" == L && (P = "error");
               l(y, "eventCategory", P);
               0 <= ma(["view_item",
                  "view_item_list", "view_promotion", "view_search_results"
               ], L) && l(w, "nonInteraction", !0);
               "login" == L || "sign_up" == L || "share" == L ? l(y, "eventLabel", id(F.qe, r)) : "search" == L || "view_search_results" == L ? l(y, "eventLabel", id(F.ve, r)) : "select_content" == L && l(y, "eventLabel", id(F.ce, r));
               var ba = y[F.Ia] || {},
                  na = ba[F.gb];
               na || 0 != na && ba[F.H] ? D.allowLinker = !0 : !1 === na && l(D, "useAmpClientId", !1);
               if (!1 === id(F.ae, r) || !1 === id(F.R, r)) w.allowAdFeatures = !1;
               D.name = v;
               w["&gtm"] = Ig(!0);
               w.hitCallback = x;
               y.W = w;
               y.ud = D;
               return y
            },
            n = function (r) {
               function v(J) {
                  var I =
                     Ga(J);
                  I.list = J.list_name;
                  I.listPosition = J.list_position;
                  I.position = J.list_position || J.creative_slot;
                  I.creative = J.creative_name;
                  return I
               }

               function x(J) {
                  for (var I = [], U = 0; J && U < J.length; U++) J[U] && I.push(v(J[U]));
                  return I.length ? I : void 0
               }

               function y(J) {
                  return {
                     id: D(w.Ka),
                     affiliation: D(w.je),
                     revenue: D(w.ba),
                     tax: D(w.oe),
                     shipping: D(w.ne),
                     coupon: D(w.ke),
                     list: D(w.Ob) || J
                  }
               }
               for (var w = F, D = function (J) {
                     return fd(J, r, void 0)
                  }, A = D(w.S), B, C = 0; A && C < A.length && !(B = A[C][w.Ob]); C++);
               var H = D("custom_map");
               if (Fa(H))
                  for (var N =
                        0; A && N < A.length; ++N) {
                     var R = A[N],
                        V;
                     for (V in H) H.hasOwnProperty(V) && /^(dimension|metric)\d+$/.test(V) && void 0 != H[V] && l(R, V, R[H[V]])
                  }
               var O = null,
                  S = wc,
                  Q = D(w.me);
               "purchase" == S || "refund" == S ? O = {
                  action: S,
                  Ma: y(),
                  Ba: x(A)
               } : "add_to_cart" == S ? O = {
                  action: "add",
                  Ba: x(A)
               } : "remove_from_cart" == S ? O = {
                  action: "remove",
                  Ba: x(A)
               } : "view_item" == S ? O = {
                  action: "detail",
                  Ma: y(B),
                  Ba: x(A)
               } : "view_item_list" == S ? O = {
                  action: "impressions",
                  If: x(A)
               } : "view_promotion" == S ? O = {
                  action: "promo_view",
                  Ec: x(Q)
               } : "select_content" == S && Q && 0 < Q.length ? O = {
                  action: "promo_click",
                  Ec: x(Q)
               } : "select_content" == S ? O = {
                  action: "click",
                  Ma: {
                     list: D(w.Ob) || B
                  },
                  Ba: x(A)
               } : "begin_checkout" == S || "checkout_progress" == S ? O = {
                  action: "checkout",
                  Ba: x(A),
                  Ma: {
                     step: "begin_checkout" == S ? 1 : D(w.gd),
                     option: D(w.fd)
                  }
               } : "set_checkout_option" == S && (O = {
                  action: "checkout_option",
                  Ma: {
                     step: D(w.gd),
                     option: D(w.fd)
                  }
               });
               O && (O.Jg = D(w.oa));
               return O
            },
            p = {},
            t = function (r, v) {
               var x = p[r];
               p[r] = Ga(v);
               if (!x) return !1;
               for (var y in v)
                  if (v.hasOwnProperty(y) && v[y] !== x[y]) return !0;
               for (var w in x)
                  if (x.hasOwnProperty(w) && x[w] !== v[w]) return !0;
               return !1
            },
            q = function (r) {
               var v = r.vtp_trackingId,
                  x = Id();
               if (ia(x)) {
                  var y = "gtag_" + v.split("-").join("_"),
                     w = function (O) {
                        var S = [].slice.call(arguments, 0);
                        S[0] = y + "." + S[0];
                        x.apply(window, S)
                     },
                     D = function () {
                        var O = function (I, U) {
                              for (var T = 0; U && T < U.length; T++) w(I, U[T])
                           },
                           S = n(v);
                        if (S) {
                           var Q = S.action;
                           if ("impressions" == Q) O("ec:addImpression", S.If);
                           else if ("promo_click" == Q || "promo_view" == Q) {
                              var J = S.Ec;
                              O("ec:addPromo", S.Ec);
                              J && 0 < J.length && "promo_click" == Q && w("ec:setAction", Q)
                           } else O("ec:addProduct", S.Ba), w("ec:setAction",
                              Q, S.Ma)
                        }
                     },
                     A = function () {
                        if (ye()) {} else {
                           var O = id(F.se, v);
                           O && (w("require", O, {
                              dataLayer: "dataLayer"
                           }), w("require", "render"))
                        }
                     },
                     B = function () {
                        if (ye()) {} else {}
                     },
                     C = m(v, y, r.vtp_gtmOnSuccess);
                  t(y, C.ud) && x(function () {
                     Gd() && Gd().remove(y)
                  });
                  x("create", v, C.ud);
                  (function () {
                     var O = id("custom_map", v);
                     x(function () {
                        if (Fa(O)) {
                           var S = C.W,
                              Q = Gd().getByName(y),
                              J;
                           for (J in O)
                              if (O.hasOwnProperty(J) && /^(dimension|metric)\d+$/.test(J) && void 0 != O[J]) {
                                 var I = Q.get(k(O[J]));
                                 l(S, J, I)
                              }
                        }
                     })
                  })();
                  (function (O) {
                     if (O) {
                        var S = {};
                        if (Fa(O))
                           for (var Q in e) e.hasOwnProperty(Q) && h(e[Q], Q, O[Q], S);
                        w("require", "linkid", S)
                     }
                  })(C.linkAttribution);
                  var H = C[F.Ia];
                  if (H && H[F.H]) {
                     var N = H[F.ib];
                     Jd(y + ".", H[F.H],
                        void 0 === N ? !!H.use_anchor : "fragment" === N, !!H[F.hb])
                  }
                  var R = function (O, S, Q) {
                        Q && (S = "" + S);
                        C.W[O] = S
                     },
                     V = wc;
                  V == F.Mb ? (A(), w("send", "pageview", C.W)) : V == F.Z ? (A(), B(), 0 != C.sendPageView && w("send", "pageview", C.W)) : "screen_view" == V ? w("send", "screenview", C.W) : "timing_complete" == V ? (R("timingCategory", C.eventCategory, !0), R("timingVar", C.name, !0), R("timingValue", ra(C.value)), void 0 !== C.eventLabel && R("timingLabel", C.eventLabel, !0), w("send", "timing", C.W)) : "exception" == V ? w("send", "exception", C.W) : "optimize.callback" !=
                     V && (0 <= ma("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "), V) && (w("require", "ec", "ec.js"), D()), R("eventCategory", C.eventCategory, !0), R("eventAction", C.eventAction || V, !0), void 0 !== C.eventLabel && R("eventLabel", C.eventLabel, !0), void 0 !== C.value && R("eventValue", ra(C.value)), w("send", "event", C.W));
                  a || (a = !0, Bd(), G("https://www.google-analytics.com/analytics.js", function () {
                        Gd().loaded || r.vtp_gtmOnFailure()
                     },
                     r.vtp_gtmOnFailure))
               } else z(r.vtp_gtmOnFailure)
            };
         X.__gtagua = q;
         X.__gtagua.g = "gtagua";
         X.__gtagua.h = !0;
         X.__gtagua.b = 0
      }();

   var $i = {};
   $i.macro = function (a) {
      if (tf.$b.hasOwnProperty(a)) return tf.$b[a]
   }, $i.onHtmlSuccess = tf.td(!0), $i.onHtmlFailure = tf.td(!1);
   $i.dataLayer = ed;
   $i.callback = function (a) {
      yc.hasOwnProperty(a) && ia(yc[a]) && yc[a]();
      delete yc[a]
   };
   $i.Ve = function () {
      qc[pc.m] = $i;
      zc = X.a;
      Sb = Sb || tf;
      Tb = sd
   };
   $i.Jf = function () {
      qc = f.google_tag_manager = f.google_tag_manager || {};
      if (qc[pc.m]) {
         var a = qc.zones;
         a && a.unregisterChild(pc.m)
      } else {
         for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Lb.push(c[d]);
         for (var e = b.tags || [], g = 0; g < e.length; g++) Ob.push(e[g]);
         for (var h = b.predicates || [], k = 0; k < h.length; k++) Nb.push(h[k]);
         for (var l = b.rules || [], m = 0; m < l.length; m++) {
            for (var n = l[m], p = {}, t = 0; t <
               n.length; t++) p[n[t][0]] = Array.prototype.slice.call(n[t], 1);
            Mb.push(p)
         }
         Qb = X;
         Rb = Dh;
         $i.Ve();
         Re();
         vd = !1;
         wd = 0;
         if ("interactive" == u.readyState && !u.createEventObject || "complete" == u.readyState) yd();
         else {
            Pa(u, "DOMContentLoaded", yd);
            Pa(u, "readystatechange", yd);
            if (u.createEventObject && u.documentElement.doScroll) {
               var q = !0;
               try {
                  q = !f.frameElement
               } catch (y) {}
               q && zd()
            }
            Pa(f, "load", yd)
         }
         Fe = !1;
         "complete" === u.readyState ? He() : Pa(f, "load", He);
         a: {
            if (!Vc) break a;f.setInterval(Wc, 864E5);
         }
         vc = (new Date).getTime();
      }
   };
   (0, $i.Jf)();

})()
