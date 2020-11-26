!function (n) {
    var r = {};

    function e(t) {
        if (r[t]) return r[t].exports;
        var i = r[t] = {i: t, l: !1, exports: {}};
        return n[t].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }

    e.m = n, e.c = r, e.d = function (t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {enumerable: !0, get: n})
    }, e.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, e.t = function (i, t) {
        if (1 & t && (i = e(i)), 8 & t) return i;
        if (4 & t && "object" == typeof i && i && i.__esModule) return i;
        var n = Object.create(null);
        if (e.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: i
        }), 2 & t && "string" != typeof i) for (var r in i) e.d(n, r, function (t) {
            return i[t]
        }.bind(null, r));
        return n
    }, e.n = function (t) {
        var i = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function (t, i) {
        return Object.prototype.hasOwnProperty.call(t, i)
    }, e.p = "", e(e.s = 29)
}([function (t, i) {
    t.exports = {
        e: Object.prototype.hasOwnProperty, a: function (t, i) {
            for (var n = t, r = i.split("."); r.length;) {
                if (n === undefined || null === n) return undefined;
                n = n[r.shift()]
            }
            return n
        }, u: function (t) {
            if ("object" != typeof t) return "";
            var i = [];
            for (var n in t) this.e.call(t, n) && i.push(n + "=" + encodeURIComponent(t[n]));
            return i.join("&")
        }, f: function (t) {
            for (var i in t) return !1;
            return !0
        }, h: function (t, n) {
            return t.replace(/{(\w*?)}/g, function (t, i) {
                return n[i] === undefined ? "" : n[i]
            })
        }, v: function (t) {
            var i = {'"': "&quot;", ">": "&gt;", "<": "&lt;", "&": "&amp;"};
            return t.replace(/["<>&]/g, function (t) {
                return i[t]
            })
        }, _: function (t, e) {
            var o = this;
            return t.replace(/\{(\w+):(\w+)\}/g, function (t, i, n) {
                var r = e[i];
                switch (n) {
                    case"number":
                        r = +r || 0;
                        break;
                    case"boolean":
                        r = !!r;
                        break;
                    case"html":
                        r = o.v(r)
                }
                return r
            })
        }, w: function (t) {
            var i = "";
            return window.JSON && window.JSON.parse && (i = window.JSON.parse(t)), i
        }, y: function (t) {
            var i = "";
            try {
                i = window.JSON && window.JSON.stringify ? window.JSON.stringify(t) : window.eval(t)
            } catch (n) {
            }
            return i
        }, b: function (t) {
            return t.replace(/(^\s*)|(\s*$)/g, "")
        }, I: function (t) {
            for (var i = [], n = {}, r = t.length, e = 0; e < r; e++) {
                var o = t[e];
                n[o] || (n[i[i.length] = o] = !0)
            }
            return i
        }, k: function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, A: function (t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }, x: function (t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        }, S: function (t) {
            return "[object Number]" === Object.prototype.toString.call(t)
        }, D: function (t) {
            return "[object String]" === Object.prototype.toString.call(t)
        }, C: function (t) {
            var i, n = Object.prototype.hasOwnProperty;
            if (!(t && "[object Object]" === Object.prototype.toString.call(t) && "isPrototypeOf" in t)) return !1;
            if (t.constructor && !n.call(t, "constructor") && !n.call(t.constructor.prototype, "isPrototypeOf")) return !1;
            for (i in t) ;
            return i === undefined || n.call(t, i)
        }, T: function (t) {
            var i, n, r = t;
            if (!t || t instanceof Number || t instanceof String || t instanceof Boolean) return r;
            if (this.k(t)) {
                r = [];
                var e = 0;
                for (i = 0, n = t.length; i < n; i++) r[e++] = this.T(t[i])
            } else if (this.C(t)) for (i in r = {}, t) t.hasOwnProperty(i) && (r[i] = this.T(t[i]));
            return r
        }, P: function (t, i) {
            var n = Array.prototype.slice.apply(arguments), r = n.shift(),
                e = "function" == typeof this ? this : n.shift();
            return function () {
                var t = Array.prototype.slice.apply(arguments);
                return e.apply(r, t.concat(n))
            }
        }
    }
}, function (t, i) {
    t.exports = {
        O: "BAIDU_SSP_",
        M: "___baidu_union_callback",
        U: "https:",
        B: "https:" === document.location.protocol,
        R: "___adblockplus_",
        L: "BAIDU_SSP_lcr",
        N: "//pos.baidu.com/",
        F: "",
        j: "pos.baidu.com",
        H: "HTML_POST",
        W: "SSP_JSONP",
        z: "STATIC_JSONP",
        V: "//pos.baidu.com/bfp/snippetcacher.php?",
        q: 1,
        J: 2,
        G: 4,
        X: 8,
        K: 16,
        Y: "pageSearchId",
        $: "0",
        Q: "AUTO_JSONP",
        Z: 4,
        it: "auto_dup",
        nt: "auto_ds",
        rt: "111003",
        et: "fatalError",
        ot: "remote",
        at: "BAIDU_DUP2_pageFirstRequestTime",
        st: "DUP_DEBUG_FLAG",
        ut: "https://dup.baidustatic.com/dup/painter/",
        ct: "__baidu_dup_jobruner",
        ft: 111e3,
        ht: /^u?\d*0[0-7]_\d+$/,
        dt: {CLOSEAD: "closeAd"}
    }
}, function (t, i, f) {
    var e = f(0), h = f(5), u = f(17), r = f(3);
    t.exports = {
        g: function (t, i) {
            return t ? e.D(t) && 0 < t.length ? (i = i || window).document.getElementById(t) : !t.nodeName || 1 !== t.nodeType && 9 !== t.nodeType ? null : t : null
        }, lt: function (t, i) {
            if (!t) return null;
            var n;
            if (document.getElementsByClassName) n = document.getElementsByClassName(t); else {
                n = [];
                for (var r = document.getElementsByTagName(i), e = 0, o = r.length; e < o; e++) {
                    var a = r[e], s = a.getAttribute("class") || a.getAttribute("className");
                    s && 0 <= s.indexOf(t) && n.push(a)
                }
            }
            return n
        }, vt: function (t, i, n) {
            if (!t) return null;
            if (1 === t.nodeType) return t;
            var r = this.lt(t, i);
            if (n instanceof Function) for (var e = 0, o = r.length; e < o; e++) if (n(r[e])) return r[e];
            return r[0]
        }, pt: function (t) {
            if (t._t) return t._t;
            var i = t.containerId;
            return t._t = this.g(i) || this.vt(i, "div", function (t) {
                var i = r.__slotMap;
                for (var n in i) if (i.hasOwnProperty(n) && i[n] && i[n]._t === t) return !1;
                return !0
            }), t._t
        }, wt: function (t) {
            return 9 === t.nodeType ? t : t.ownerDocument || t.document
        }, mt: function (t) {
            var i = this.wt(t);
            return i.parentWindow || i.defaultView || null
        }, gt: function (t) {
            try {
                if (t && "object" == typeof t && t.document && "setInterval" in t) return !0
            } catch (i) {
                return !1
            }
            return !1
        }, yt: function (t, i) {
            return (t = t || window) != window.top && t != t.parent || !this.gt(t)
        }, bt: function (t) {
            try {
                return !!t.parent.location.toString()
            } catch (i) {
                return !1
            }
        }, It: function (t, i) {
            i = 2 === arguments.length ? i : t.parent;
            for (var n = 0; n++ < 10 && this.yt(t, i);) {
                if (!this.bt(t)) return !0;
                t = t.parent
            }
            return 10 <= n
        }, kt: function (t, i, s) {
            var u = (s = s || this.win || window).document;
            i = i || 0, this.domReadyMonitorRunTimes = 0, this.readyFuncArray = this.readyFuncArray || [], this.readyFuncArray.push({
                func: t,
                delay: i,
                done: !1
            });
            var n = e.P(this, function () {
                var t = !1;
                this.domReadyMonitorRunTimes++;
                var i = !1;
                try {
                    s.frameElement && (i = !0)
                } catch (o) {
                    i = !0
                }
                if (h.ie && h.ie < 9 && !i) try {
                    u.documentElement.doScroll("left"), t = !0
                } catch (o) {
                } else if ("complete" === u.readyState || this.domContentLoaded) t = !0; else if (3e5 < this.domReadyMonitorRunTimes) return void (this.domReadyMonitorId && (s.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null));
                if (t) try {
                    if (this.readyFuncArray && this.readyFuncArray.length) for (var n = 0, r = this.readyFuncArray.length; n < r; n++) {
                        var e = this.readyFuncArray[n];
                        e && e.func && !e.done && (e.delay ? (e.done = !0, s.setTimeout(e.func, e.delay)) : (e.done = !0, e.func()))
                    }
                } catch (a) {
                } finally {
                    this.domReadyMonitorId && (s.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null)
                }
            }), r = e.P(this, function () {
                this.domContentLoaded = !0, n()
            });
            this.domReadyMonitorId || (this.domReadyMonitorId = s.setInterval(n, 50), u.addEventListener ? (u.addEventListener("DOMContentLoaded", r, !1), s.addEventListener("load", r, !1)) : u.attachEvent && s.attachEvent("onload", r, !1))
        }, At: function (t, i, n) {
            return i = i.replace(/^on/i, "").toLowerCase(), t.addEventListener ? t.addEventListener(i, n, !1) : t.attachEvent && t.attachEvent("on" + i, n), t
        }, xt: function (t, i, n) {
            return i = i.replace(/^on/i, "").toLowerCase(), t.removeEventListener ? t.removeEventListener(i, n, !1) : t.attachEvent && t.detachEvent("on" + i, n), t
        }, St: function (t, i) {
            1 === arguments.length && e.S(t) && (i = t, t = undefined), i = i || 10;
            for (var n = window, r = 0; r++ < i && this.yt(n) && !this.It(n) && (!t || !t(n));) n = n.parent;
            return n
        }, Dt: function (t) {
            var i = this.gt(t) ? t.document : this.wt(t);
            return "CSS1Compat" === i.compatMode ? i.documentElement : i.body
        }, Ct: function (t) {
            var i = document.createElement("script");
            i.type = "text/javascript", i.async = !0, i.src = t;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode && n.parentNode.insertBefore(i, n)
        }, Tt: function (t) {
            switch (t.nodeName.toLowerCase()) {
                case"a":
                case"script":
                case"iframe":
                case"br":
                case"title":
                case"option":
                case"button":
                case"h1":
                case"h2":
                case"h3":
                case"h4":
                case"h5":
                case"h6":
                    return !1;
                default:
                    return !0
            }
        }, Et: function (t, n, i, r) {
            try {
                var e = t || document.createElement("script");
                if (!e.attachEvent || e.attachEvent.toString && e.attachEvent.toString().indexOf("[native code") < 0 || h.opera ? (this.At(e, "error", i), this.At(e, "load", n)) : this.At(t, "readystatechange", function (t) {
                    var i = (t.currentTarget || t.srcElement).readyState;
                    "complete" !== i && "loaded" !== i || n(t)
                }), !t && r) {
                    for (var o in e.type = "text/javascript", e.async = !0, r) r.hasOwnProperty(o) && (e[o] = r[o]);
                    var a = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
                    a.parentNode.insertBefore(e, a)
                }
                return e
            } catch (c) {
                var s = f(6), u = f(1);
                s.Pt(u.et, c, {pos: "loadScriptError"})
            }
        }, Ot: function (t, i, n) {
            var r = "exp" === n;
            if (u.Mt(20) && (i = this.Ut() + i), u.Mt(20) && (i += this.Ut()), u.Mt(20)) {
                for (var e = "", o = "", a = u.Bt(1, 3), s = 0; s < a; s++) e += this.Rt(), o += "</div>";
                i = e + i + o
            }
            return (r || u.Mt(30)) && t.removeAttribute && t.removeAttribute("id"), (r || u.Mt(80)) && t.removeAttribute && t.removeAttribute("style"), i
        }, Ut: function () {
            var t = u.Lt(["div", "abbr", "span", "ins", "em"]), i = "";
            u.Mt(20) && (i = ' id="' + u.Nt(5, 10) + '" ');
            var n = "";
            u.Mt(20) && (n = ' class="' + u.Nt(6, 15) + '" ');
            var r = u.Lt(["display:none;", "width:0px;height:0px;"]);
            u.Mt(50) && (r += u.Ft()), r = ' style="' + r + '" ';
            return e.h("<{tagname} {idString} {classString} {styleString}></{tagname}>", {
                tagname: t,
                idString: i,
                classString: n,
                styleString: r
            })
        }, Rt: function () {
            var t = "";
            u.Mt(30) && (t = ' id="' + u.Nt(5, 10) + '" ');
            var i = "";
            u.Mt(60) && (i = ' style="' + u.Ft() + '" ');
            return e.h("<div {idString} {styleString}>", {idString: t, styleString: i})
        }
    }
}, function (t, i) {
    var n = "___delivery___global___counter___";
    if (window._SF_ && window._SF_._global_ && window._SF_._global_._ssp && !window.___baidu_union) {
        var r = window._SF_._global_._ssp;
        r.DUP_4_SF = !0, r.destroy = function () {
            try {
                window.top[n] = {}
            } catch (t) {
                window[n] = {}
            }
        }, window.___baidu_union = r
    }
    var e = window.___baidu_union = window.___baidu_union || {};
    try {
        e.counter = window.top[n] = window.top[n] || {}
    } catch (a) {
        e.counter = window[n] = window[n] || {}
    }
    var o = "";
    e.domainInfo, e.domainInfo = {dup: o, pos: ""}, e.startTime = (new Date).getTime(), t.exports = e
}, function (t, i, n) {
    var c = n(1), a = n(12), _ = n(2), s = n(17), u = n(0), w = n(8), r = n(5), e = n(15), o = n(6), f = n(25),
        h = n(20), d = n(3), l = n(11);
    d.__slotMap = d.__slotMap || {};
    var v = d.__slotMap, p = d.counter || {};
    p.slotTotalCount = p.slotTotalCount || 1, p.slotCountIndex = p.slotCountIndex || {}, t.exports = {
        jt: function (t) {
            return v[t]
        }, Ht: function (t) {
            for (var i in v) if (v.hasOwnProperty(i) && -1 < i.indexOf(t)) return v[i];
            return {}
        }, Wt: function (t) {
            var i = "" + t.slotId;
            p.slotCountIndex[i] = p.slotCountIndex[i] || 0;
            var n = {};
            return n.index = p.slotCountIndex[i], n.count = 0 === i.indexOf("u") ? p.slotTotalCount : 0, n.id = i + "_" + n.index, n.containerId = c.O + "_wrapper_" + i + "_" + n.index, n.slotId = t.slotId, n.productLine = t.productLine, n.errors = [], p.slotCountIndex[i] = p.slotCountIndex[i] + 1, i !== c.$ && (p.slotTotalCount = p.slotTotalCount + 1), n.isAsync = t.isAsync, n.timestampWatcher = d.startTime ? {t1: d.startTime} : {t1: 0}, t.coa && u.x(t.coa) ? n.styleOpenApi = t.coa : window.cproStyleApi ? n.styleOpenApi = window.cproStyleApi[i] || {} : n.styleOpenApi = {}, n.isUnion = 0 === i.indexOf("u"), n.width = 0, n.height = 0, n.domainInfo = d.domainInfo || {}, n.domainInfo.mixOffset = h.zt(n.domainInfo.dup), n
        }, processSlot: function (t) {
            var i = t.response.rtb_deliv = t.response.rtb_deliv || {},
                n = t.response.order_deliv = t.response.order_deliv || {},
                r = t.response.pdb_deliv = t.response.pdb_deliv || {}, e = i.deliv_id = parseInt(i.deliv_id, 10),
                o = i.demand_id = parseInt(i.demand_id, 10), a = n.deliv_id = parseInt(n.deliv_id, 10),
                s = n.demand_id = parseInt(n.demand_id, 10), u = r.deliv_id = parseInt(r.deliv_id, 10);
            r.demand_id = parseInt(r.demand_id, 10);
            var c = t.response.placement || {};
            t.containerInfo = c.container || {}, t.complementType = c.complement_type, t.isPdbAd = 0 === e && 0 === o && 0 === a && 0 === s, t.isNeedCacheRequest = !isNaN(e) && 0 !== e && 7 === t.complementType || !isNaN(a) && 0 !== a || !isNaN(e) && 0 !== e && 0 !== u
        }, Vt: function (t) {
            v[t.id] = t
        }, qt: function (t, i) {
            t.status = t.status ^ i
        }, Jt: function (t, i) {
            return 0 < (t.status & i)
        }, Gt: function (t, i) {
            var n = this.jt(t);
            n && (n.status |= i)
        }, Xt: function () {
            var t = v;
            for (var i in t) if (i && t[i] && t.hasOwnProperty(i)) {
                var n = t[i];
                if (n.status >= c.J) continue;
                this.Kt(n), this.Yt(n), this.$t(n)
            }
        }, $t: function (t) {
            t.isAnti && (d.prScript = _.Et(d.prScript, u.P(this, this.Qt, t), u.P(this, this.Qt, t), {src: "//cpro.baidustatic.com/cpro/ui/pr.js"}))
        }, Qt: function (t, i) {
            "object" != typeof window.__baidu_dup_jobruner && 1 !== i.proxy && (i.proxy = 1, this.Yt(i), "block" !== window.__baidu_dup_jobruner && (window.__baidu_dup_jobruner = "block", e.Zt("___ds_storage__isblock", i.proxy + "|" + (new Date).getTime())))
        }, Yt: function (t) {
            !d.ti && window.postMessage && (d.ti = !0, _.At(window, "message", u.P(this, this.ii)));
            var i, n = t.isUnion || t.isAsync;
            t.proxy = t.proxy || this.ni(t), t.paramObj = t.paramObj || a.ri(t);
            var r = t.domainInfo.mixOffset, e = a.ei(t.paramObj, t.proxy, r), o = c.F + e;
            1 === t.proxy && t.domainInfo.mixOffset && (o = c.U + "//" + t.domainInfo.dup + "/" + s.Nt(5, 10) + "?" + e), t.paramObj.dtm = c.H, t.timestampWatcher.t2 = +new Date, (i = this.oi(t)) ? window[c.R](i) : this.ai(o, n), f.si(t), this.Gt(t.id, c.J)
        }, ii: function (t) {
            var i = t.data;
            if ("string" == typeof i && window.JSON && window.JSON.parse) try {
                i = JSON.parse(i)
            } catch (n) {
            }
            i && i.tuid && (i.placement && i.placement.update && i.queryid ? (this.ui(i), -1 < i.tuid.indexOf("u") && i.noadx && parseInt(i.noadx, 10) && 3 !== parseInt(i.noadx, 10) && this.ci(i)) : 1 === i.type && this.fi(t, i))
        }, fi: function (t, i) {
            var n = t.origin || t.originalEvent.origin, r = n && n.split("//")[1], e = i.tuid, o = i.msg,
                a = this.Ht(e), s = a && a.response,
                u = s && s.placement && s.placement.basic && s.placement.basic.publisherDomain && s.placement.basic.publisherDomain.pos;
            !a || r !== c.j && r !== u || "click" !== o || (this.hi(a), l.li(c.dt.CLOSEAD, e))
        }, ui: function (t) {
            var i, n = t.placement.update, r = e.Lt(t.tuid);
            r && (i = u.w(r), e.vi() && window.JSON && window.JSON.stringify && i && i.placement && i.placement.update && i.placement.update !== n && (t.adExpire = (new Date).getTime(), e.Zt(t.tuid, JSON.stringify(t))))
        }, oi: function (t) {
            try {
                if (r.ie && r.ie < 9 || !e.vi() || t.isAutoAd) return !1;
                var i = e.Lt(t.id);
                return !!i && u.w(i)
            } catch (n) {
                o.Pt("elog", n, {pos: "localAdInfo", id: t.id})
            }
        }, pi: function (t) {
            try {
                var i = t.response, n = t.id;
                n && !t.isPdbAd && t.isUnion && !t.isAutoAd && window.JSON && window.JSON.stringify && e.vi() && !e.Lt(n) && (i.adExpire = (new Date).getTime(), e.Zt(n, JSON.stringify(i)))
            } catch (r) {
            }
        }, Kt: function (t) {
            _.pt(t) || (t.isAsync ? "union" === t.productLine && (t.containerId = "cpro_" + t.slotId) : (document.write('<div id="' + t.containerId + '"></div>'), _.g(t.containerId) || this._i(t))), this.Gt(t.id, c.q)
        }, _i: function (t) {
            try {
                var i = document.getElementsByTagName("script"), n = i[i.length - 1];
                if (n) {
                    var r = n.parentNode;
                    if (r) {
                        var e = document.createElement("div");
                        return e.id = t.containerId, r.insertBefore(e, n), !0
                    }
                }
            } catch (o) {
            }
            return !1
        }, ai: function (t, i) {
            if (i) {
                var n = document.createElement("script");
                if (!n) return;
                n.type = "text/javascript", n.async = !0, n.src = t;
                var r = document.getElementsByTagName("script")[0];
                r && r.parentNode ? r.parentNode.insertBefore(n, r) : document.write('<script charset="utf-8" src="' + t + '"><\/script>')
            } else document.write('<script charset="utf-8" src="' + t + '"><\/script>')
        }, wi: function (t) {
            var i = t.response, n = i.pdb_deliv, r = i.rtb_deliv, e = i.order_deliv;
            return !(!t.isUnion && 7 === t.complementType && 0 === n.deliv_id && 0 === r.deliv_id && 0 === e.deliv_id)
        }, ci: function (t) {
            var i = this.Ht(t.tuid);
            i && 7 === t.placement.complement_type && this.hi(i)
        }, hi: function (t) {
            var i = _.pt(t);
            i && (i.parentNode.removeChild(i), n(13).unregisetViewWatch(t))
        }, processSlotInfo: function (t) {
            var i = this.mi(t), n = t.response.placement.basic;
            return i.cname = n.cname, i
        }, mi: function (t) {
            var i = t.response.placement, n = t.response["extends"] || {}, r = _.pt(t), e = i.container,
                o = t.styleOpenApi, a = e.width, s = e.height, u = o.cpro_w || o.rsi0 || 0, c = o.cpro_h || o.rsi1 || 0,
                f = e.sizeType;
            if (5 !== f && !t.isUnion && n && n.hasOwnProperty("sspw") && n.hasOwnProperty("ssph")) {
                var h = parseInt(n.sspw || 0, 10), d = parseInt(n.ssph || 0, 10), l = parseInt(n.cbsz || 0, 10);
                f = 0 < l ? l : f, a = 0 < h ? h : a, s = 0 < d ? d : s
            }
            if (o.scale) {
                f = 2;
                var v = o.scale.split(".") || [];
                a = v[0], s = v[1]
            }
            (u || c) && (f = 1, a = u || w.gi(), s = c || s), ("-1" === t.pcwd || t.ftpc || t.styleOpenApi.cpro_ftpc) && (f = "-1" === t.pcwd && "-1" === t.pchd ? 8 : 5), o.sizeType && (f = o.sizeType && parseInt(o.sizeType, 10) || f, a = o.width && parseInt(o.width, 10) || a, s = o.height && parseInt(o.height, 10) || s), 2 !== o.apType && 3 !== o.apType || (e.location = o.apType);
            var p = 0;
            switch (f) {
                case 1:
                    break;
                case 2:
                    a = t.pcwd || a, s = t.pchd || s, a && s && (p = s / a), a = w.gi(), s = Math.ceil(a * p);
                    break;
                case 3:
                    a = w.gi();
                    break;
                case 5:
                    a && s && (p = s / a), a = w.yi(r.parentElement), s = Math.ceil(a * p);
                    break;
                case 6:
                    a = w.yi(r.parentElement);
                    break;
                case 7:
                    s = w.bi(r.parentElement);
                    break;
                case 8:
                    a = w.yi(r.parentElement), s = w.bi(r.parentElement)
            }
            return {width: t.width = a, height: t.height = s, sizeType: f}
        }, ni: function (t) {
            var i = 0;
            if (t.isAnti) if (window[c.ct]) i = "block" === window[c.ct] ? 1 : 0; else {
                var n = e.Ii("isblock");
                0 !== n && 1 !== n || (i = n, window[c.ct] = n ? "block" : "unblock")
            }
            return i
        }
    }
}, function (t, i, n) {
    var s = n(0), u = window, c = window.navigator;
    var r = {
        ki: function () {
            var t = navigator.userAgent, i = window.RegExp;
            this.antBrowser = !1, /msie (\d+\.\d)/i.test(t) && (this.ie = document.documentMode || +i.$1), /opera\/(\d+\.\d)/i.test(t) && (this.opera = +i.$1), /firefox\/(\d+\.\d)/i.test(t) && (this.firefox = +i.$1), /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(t) && !/chrome/i.test(t) && (this.safari = +(i.$1 || i.$2)), /chrome\/(\d+\.\d)/i.test(t) && (this.chrome = +i.$1, function o() {
                try {
                    return "scoped" in document.createElement("style")
                } catch (t) {
                    return !1
                }
            }() && (this.qihoo = !0)), /qqbrowser\/(\d+\.\d)/i.test(t) && (this.tencent = !0), (/ucbrowser\/(\d+\.\d)/i.test(t) || /ubrowser\/(\d+\.\d)/i.test(t)) && (this.uc = !0), /miuibrowser\/(\d+\.\d)/i.test(t) && (this.xiaomi = !0), /vivobrowser\/(\d+\.\d)/i.test(t) && (this.vivo = !0), /oppobrowser\/(\d+\.\d)/i.test(t) && (this.oppo = !0), /baiduboxapp\/([\d.]+)/.test(t) && (this.baiduboxapp = !0), /qqbrowser|ucbrowser|ubrowser|miuibrowser|vivobrowser|oppobrowser/i.test(t) && (this.isAdBlock = !0);
            try {
                /(\d+\.\d)/.test(s.a(window, "external.max_version")) && (this.maxthon = +i.$1)
            } catch (a) {
            }
            /Chrome\/[8-9][0-9]/.test(t) && (this.hasSameSiteLimit = !0), (this.tencent || this.uc || this.xiaomi || this.vivo || this.oppo) && (this.antBrowser = !0), this.isWebkit = /webkit/i.test(t), this.isGecko = /gecko/i.test(t) && !/like gecko/i.test(t);
            for (var n = ["Android", "iPad", "iPod", "iPhone", "iOS", "Linux", "Macintosh", "Windows"], r = "", e = 0; e < n.length; e++) if (r = n[e], t.match(new RegExp(r, "i"))) {
                "iPad" === r || "iPhone" === r || "iOS" === r || "iPod" === r ? this.isIOS = !0 : "Android" === r && (this.isAndroid = !0);
                break
            }
            this.platform = r
        }, Ai: function () {
            var t = 0;
            try {
                var i = "https:" === document.location.protocol;
                if (45 <= this.chrome || i) return 0;
                if (c.plugins && c.mimeTypes.length) {
                    var n = c.plugins["Shockwave Flash"];
                    n && n.description && (t = n.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0")
                }
                if (0 === t && (u.ActiveXObject || u.hasOwnProperty("ActiveXObject"))) for (var r = 30; 2 <= r; r--) try {
                    var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + r);
                    if (e) {
                        var o = e.GetVariable("$version");
                        if (0 < (t = o.replace(/WIN/g, "").replace(/,/g, "."))) break
                    }
                } catch (a) {
                }
                t = parseInt(t, 10), this.Ai = function () {
                    return t
                }
            } catch (s) {
                t = 0
            }
            return t
        }
    };
    r.ki(), t.exports = r
}, function (t, i, n) {
    var o = n(0), a = n(11), s = n(15), u = "BAIDU_DUP_log_storage";
    t.exports = {
        xi: function (t, i) {
            var n = new Image, r = "BAIDU_DUP_log_" + Math.floor(2147483648 * Math.random()).toString(36);
            (window[r] = n).onload = n.onerror = n.onabort = function () {
                n.onload = n.onerror = n.onabort = null, window[r] = null, n = null, i && i(u, t, !0)
            }, n.src = t
        }, Si: function (t) {
            var i = new Image, n = "baidu_dan_log_" + +new Date;
            (window[n] = i).onload = i.onerror = i.onabort = function () {
                try {
                    delete window[n]
                } catch (t) {
                    window[n] = undefined
                }
                i = null
            }, t += -1 < t.indexOf("?") ? "&" : "?", t += "stamp=" + Math.random(), i.src = t
        }, Di: function (t) {
            var i = (t = o.x(t) ? t : {}).url || "//eclick.baidu.com/se.jpg", n = t.data || {}, r = t.option || "now",
                e = o.u(n);
            switch (i += (0 <= i.indexOf("?") ? "&" : "?") + e + (e ? "&" : "") + "ver=1122&rdm=" + +new Date, r) {
                case"now":
                    this.xi(i);
                    break;
                case"block":
                    break;
                case"unload":
                default:
                    s.Ci(u, i, !0), a.At(window, "unload", o.P(this, function () {
                        this.xi(i, o.P(s, s.Ti))
                    }))
            }
        }, Ei: function (t, i, n) {
            if (!t || !i) return "";
            var r = "//eclick.baidu.com/" + t + "?type=" + i;
            if (n) for (var e in n) n.hasOwnProperty(e) && (r += "&" + e + "=" + n[e]);
            this.Di({url: r, option: "now"})
        }, Pi: function (t, i) {
            this.Ei("se.jpg", t, i)
        }, Pt: function (t, i, n) {
            n = n || {};
            var r = i && i.stack ? i.stack : i;
            n.stack = encodeURIComponent(r), this.Ei("rs.jpg", t, n)
        }
    }
}, function (t, i, n) {
    var u = n(0), r = n(2), e = n(3);
    e.__pageInfo = e.__pageInfo || {};
    var c = e.__pageInfo, o = r.St(), f = o.BAIDU_SSP__info || (o.BAIDU_SSP__info = {});
    t.exports = {
        Oi: function (t, i, n) {
            var r, e = n ? f : c;
            if (u.D(t)) {
                for (var o = t.split("."), a = e; o.length;) {
                    var s = o.shift();
                    0 < o.length ? a[s] || (a[s] = {}) : a[s] = i, a = a[s]
                }
                r = i
            }
            return r
        }, Mi: function (t, i) {
            var n = i ? f : c;
            if (u.D(t)) for (var r = t.split("."); r.length;) {
                var e = r.shift();
                if (!r.length || n[e] === undefined) return delete n[e], !0;
                n = n[e]
            }
            return !1
        }, Ui: function (t, i) {
            var n, r = i ? f : c;
            return u.D(t) && (n = u.a(r, t)), n
        }, Bi: function (t) {
            var i = window, n = i[t];
            return i[t] = undefined, n
        }, Ri: function (t, i, n) {
            var r = n || window;
            return r[t] ? r[t] : r[t] = i
        }, Li: function (t) {
            return !!t && (c = this.Ui("pageConfig") || {})[t]
        }, Ni: function (t, i) {
            return !(!t || !i) && ((c = this.Ui("pageConfig") || {})[t] = i, this.Oi("pageConfig", c), !0)
        }
    }
}, function (t, i, n) {
    var f = n(2), a = n(0), s = n(5);
    t.exports = {
        Fi: function (t) {
            t = t || window;
            try {
                var i = f.Dt(t).clientWidth;
                if (i || 0 === i) return i
            } catch (n) {
            }
            return -1
        }, ji: function (t) {
            t = t || window;
            try {
                var i = f.Dt(t).clientHeight;
                if (i || 0 === i) return i
            } catch (n) {
            }
            return -1
        }, Hi: function (t) {
            var i = {top: 0, left: 0};
            if (t === f.Dt(t)) return i;
            var n = f.wt(t), r = n.body, e = n.documentElement;
            if (r && t.getBoundingClientRect) {
                var o = t.getBoundingClientRect();
                i.left = Math.floor(o.left) + Math.max(e.scrollLeft, r.scrollLeft), i.top = Math.floor(o.top) + Math.max(e.scrollTop, r.scrollTop), i.left -= e.clientLeft, i.top -= e.clientTop;
                var a = this.Wi(r, "borderLeftWidth"), s = this.Wi(r, "borderTopWidth"), u = parseInt(a, 10),
                    c = parseInt(s, 10);
                i.left -= isNaN(u) ? 2 : u, i.top -= isNaN(c) ? 2 : c
            }
            return i
        }, Wi: function (t, i) {
            if (!t) return "";
            var n = "";
            n = -1 < i.indexOf("-") ? i.replace(/[-][^-]{1}/g, function (t) {
                return t.charAt(1).toUpperCase()
            }) : i.replace(/[A-Z]{1}/g, function (t) {
                return "-" + t.charAt(0).toLowerCase()
            });
            var r, e = f.mt(t);
            if (t.style[i] || t.style[n]) return t.style[i] || t.style[n];
            if (e && e.getComputedStyle) {
                if (r = e.getComputedStyle(t, null)) return r.getPropertyValue(i) || r.getPropertyValue(n)
            } else if (t.currentStyle) return (r = t.currentStyle)[i] || r[n];
            return ""
        }, zi: function (t) {
            if (!t) return {top: 0, left: 0};
            var i = this.Hi(t), n = f.mt(t);
            if (!n) return i;
            try {
                for (var r = 0; n !== n.parent && r++ < 10 && !f.It(n) && n.frameElement;) {
                    var e = this.Hi(n.frameElement);
                    i.left += e.left, i.top += e.top, n = n.parent
                }
            } catch (o) {
            }
            return i
        }, Vi: function (t) {
            for (var i = t, n = f.mt(i), r = 100; i && i.tagName;) {
                var e = 100;
                if (s.ie) {
                    if (5 < s.ie) try {
                        e = parseInt(a.a(i, "filters.alpha.opacity"), 10) || 100
                    } catch (o) {
                    }
                    r = e < r ? e : r
                } else {
                    try {
                        e = 100 * (n.getComputedStyle(i, null).opacity || 1)
                    } catch (o) {
                    }
                    r *= e / 100
                }
                i = i.parentNode
            }
            return 0 === r ? 0 : r || 100
        }, qi: function (t) {
            var i = f.mt(t), n = this.Vi(t);
            try {
                for (var r = 0; r++ < 10 && f.yt(i) && !f.It(i);) {
                    n *= (i.frameElement ? this.Vi(i.frameElement) : 100) / 100, i = i.parent
                }
            } catch (e) {
            }
            return n
        }, Ji: function (t) {
            t = t || window;
            try {
                var i = f.Dt(t).scrollWidth;
                if (i || 0 === i) return i
            } catch (n) {
            }
            return -1
        }, Gi: function (t) {
            t = t || window;
            try {
                var i = f.Dt(t).scrollHeight;
                if (i || 0 === i) return i
            } catch (n) {
            }
            return -1
        }, Xi: function (t) {
            var i = (t = t || window).document;
            return t.pageYOffset || i.documentElement.scrollTop || i.body.scrollTop
        }, Ki: function (t) {
            var i = t || window, n = f.Dt(i);
            return i.pageXOffset || n.scrollLeft
        }, Yi: function (t, i) {
            var n = t.offsetWidth;
            return i && (n += this.$i(t, "Left") + this.$i(t, "Right")), n
        }, $i: function (t, i) {
            var n = this.Wi(t, "margin" + i).toString().toLowerCase().replace("px", "").replace("auto", "0");
            return parseInt(n, 10) || 0
        }, Qi: function (t, i) {
            var n = t.offsetHeight;
            return i && (n += this.$i(t, "Top") + this.$i(t, "Bottom")), n
        }, Zi: function (t, i) {
            var n = ["<div ", 'style="position: absolute; right: 0px; top: 0px; z-index: 9999999;line-height:1.2;', 'font-size: 12px;background:#ff0000;font-weight: 700;">', "BAIDU_AD_", i, "<br>", t.clientWidth, "*", t.clientHeight, "</div>"].join(""),
                r = document.createElement("div");
            r.innerHTML = n;
            var e = t.style;
            e.border = "1px solid #ff0000", e.position = e.position || "relative", t.appendChild(r)
        }, "in": function (t) {
            for (var i = t, n = f.mt(i); i && i.tagName;) {
                if (!("hidden" !== n.getComputedStyle(i, null).visibility)) return !1;
                i = i.parentNode
            }
            return !0
        }, nn: function (t) {
            var i = f.mt(t), n = this["in"](t);
            if (!n) return !1;
            try {
                for (var r = 0; r++ < 10 && f.yt(i) && !f.It(i) && i.frameElement;) {
                    if (!(n = this["in"](i.frameElement))) return !1;
                    i = i.parent
                }
            } catch (e) {
            }
            return !0
        }, gi: function () {
            var t = Math.max(320, window.innerWidth);
            return t = isNaN(t) ? this.Fi() : t
        }, yi: function (t) {
            if (!t) return window.screen.width;
            var i = parseInt(this.Wi(t, "paddingLeft"), 10) || 0, n = parseInt(this.Wi(t, "paddingRight"), 10) || 0,
                r = t.clientWidth - i - n;
            return r = 0 < r ? r : window.screen.width
        }, bi: function (t) {
            if (!t) return 0;
            var i = parseInt(this.Wi(t, "paddingTop"), 10) || 0, n = parseInt(this.Wi(t, "paddingBottom"), 10) || 0,
                r = t.clientHeight - i - n;
            return r = 0 < r ? r : 0
        }
    }
}, function (t, i, n) {
    var r, e, o, a = n(3), s = n(0), u = {};
    if (!a.__onlyExps) for (var c in a.__onlyExps = {}, u) u.hasOwnProperty(c) && u[c] && (o = u[c]).onlyExp && (r = o.expId, e = o.baseId, r && (a.__onlyExps[r] = !0), e && (a.__onlyExps[e] = !0));
    t.exports = {
        rn: function (t, i) {
            return t && i ? t += "," + i : t = t || i, t
        }, en: function (t) {
            var i = "", n = 1e4 * Math.random(), r = 100 * t.percent, e = 200 * t.percent;
            return n < r ? i = t.expId : r <= n && n < e && (i = t.baseId), i
        }, on: function (t, i) {
            var n = this.en(t), r = "";
            return (n = n && this.an(i) ? "" : n) && (n === t.expId ? r = "exp" : n === t.baseId && (r = "base")), {
                expType: r,
                expId: n
            }
        }, an: function (t) {
            if (s.f(a.__onlyExps)) return !1;
            var i = this.sn(t), n = i && i.split(",");
            if (0 < n.length) for (var r = 0; r < n.length; r++) if (a.__onlyExps[n[r]]) return !0;
            return !1
        }, sn: function (t) {
            return t && t.exps ? t.paramObj && t.paramObj.exps ? t.paramObj.exps : t.exps : ""
        }
    }
}, function (t, i, n) {
    var h = n(1), d = n(4), u = n(35), r = n(7), e = n(6), l = n(2), o = n(0);
    t.exports = {
        un: function (t, i) {
            return t.nodeName && t.nodeName.toUpperCase() === i.toUpperCase()
        }, cn: function (t, i) {
            try {
                var n = document.createElement("script");
                n.type = "text/javascript", t.src ? n.src = t.src : n.text = t.text || t.textContent || t.innerHTML || "", i.insertBefore(n, i.firstChild)
            } catch (r) {
                e.Pt(h.et, r, {pos: "createscripterror", status: "renderFail"})
            }
        }, fn: function (t, i) {
            if (!t) return !1;
            t.innerHTML = '<span style="display: none">ie</span>' + i;
            for (var n = t.childNodes, r = [], e = 0; n[e]; e++) !this.un(n[e], "script") || n[e].type && "text/javascript" !== n[e].type.toLowerCase() || r.push(n[e]);
            r.reverse();
            for (var o = 0, a = r.length; o < a; o++) this.cn(r[o].parentNode.removeChild(r[o]), t);
            return !0
        }, hn: function (t, i) {
            var n = d.jt(t);
            if (n && !d.Jt(n, h.K)) {
                var r = n.response.pdb_deliv.deliv_des;
                r = r._html;
                var e = this.dn();
                if (this.ln() && i.getAttribute("src", 2) !== e) i.src = e; else {
                    if (r && "url" === r.type) return i.src = r.content, void d.Gt(n.id, h.K);
                    try {
                        d.Gt(n.id, h.K);
                        var o = u.vn(r, n);
                        o.indexOf("<body>") < 0 && (o = "<!DOCTYPE html><body>" + o);
                        var a = i.contentWindow.document;
                        a.open("text/html", "replace"), a.write(o), a.body && (a.body.style.backgroundColor = "transparent")
                    } catch (s) {
                    }
                }
            }
        }, ln: function () {
            var t = document.createElement("iframe"), i = !1;
            if (!document.body) return i;
            return t.src = "about:blank", document.body.insertBefore(t, document.body.firstChild), i = function n(t) {
                try {
                    return !t.contentWindow.document
                } catch (i) {
                    return !0
                }
            }(t), document.body.removeChild(t), this.ln = function () {
                return i
            }, i
        }, pn: function () {
            var t = navigator.userAgent, i = t && t.match(/iphone.*micromessenger/i);
            return this.pn = function () {
                return i
            }, i
        }, dn: function () {
            return this.ln() ? r.Li("domainPolicyFileUrl") || "/domain-policy.htm" : this.pn() ? r.Li("blankPolicyFileUrl") || "/blank-policy.htm" : "about:blank"
        }, renderRichMaterial: function (t) {
            var i = t.response, n = i && i.pdb_deliv && i.pdb_deliv.deliv_des, r = n && n._html,
                e = t.isNeedCacheRequest;
            if (!r || "rich" !== r.type || e) return !1;
            var o = l.pt(t), a = r.content, s = t.isAsync, u = t.productLine, c = !1;
            if (s) if (!s || "clb" !== u && "dup" !== u) c = this.fn(o, a); else {
                var f = this._n(t);
                o.innerHTML = f, c = !0
            } else document.write(a), d.Gt(t.id, h.K), c = !0;
            return c
        }, _n: function (t) {
            var i = this.wn(t);
            return this.mn(i)
        }, wn: function (t) {
            var i = t.containerInfo, n = t.width || i.width, r = t.height || i.height, e = this.dn();
            return {
                iframeId: "iframe" + t.id,
                srcAttriName: "src",
                onloadDefine: 'onload="' + h.M + "(3, '" + t.id + "', this);\"",
                iframeWidth: "" + n,
                iframeHeight: "" + r,
                url: e
            }
        }, mn: function (t) {
            var i = ["<iframe", ' id="{iframeId}"', ' name="{iframeId}"', " {onloadDefine}", ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0;vertical-align:bottom;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"', ' allowtransparency="true">', "</iframe>"].join("");
            return o.h(i, t)
        }
    }
}, function (t, i, n) {
    var r = n(3), e = n(0);
    r.__eventMap = r.__eventMap || {};
    var o = r.__eventMap;
    t.exports = {
        At: function (t, i, n) {
            if (t) if (t.addEventListener) t.addEventListener(i, n, !1); else if (t.attachEvent) t.attachEvent("on" + i, n); else {
                var r = t["on" + i];
                t["on" + i] = function () {
                    r && r.apply(this, arguments), n.apply(this, arguments)
                }
            }
            return t
        }, gn: function (t, i) {
            e.A(i) && (o[t] = i)
        }, yn: function (t) {
            delete o[t]
        }, li: function (t) {
            var i = o[t];
            if (e.A(i)) {
                var n = Array.prototype.slice.call(arguments, 1);
                i.apply(window, n)
            }
        }
    }
}, function (t, i, n) {
    var d = n(1), r = n(30), e = n(32), o = n(22), a = n(33), s = n(19), l = n(20), v = n(5), p = n(17), u = n(2),
        c = n(0), h = n(6), f = n(34), _ = n(24),
        w = {slotParam: r, businessParam: e, browserParam: o, systemParam: a, additionalParam: s};
    t.exports = {
        bn: function (t) {
            for (var i = [], n = t.paramsList, r = 0, e = n.length; r < e; r++) {
                var o = n[r], a = o.key, s = o.encode, u = o.value, c = o.limit;
                try {
                    u = "function" == typeof u ? u.apply(t) : u, u = c ? u.substr(0, c) : u, u = s ? encodeURIComponent(u) : u, i.push({
                        key: a,
                        value: u
                    })
                } catch (f) {
                    h.Pt("adcodex_error", f, {key: encodeURIComponent(a)})
                }
            }
            return i
        }, In: function (t) {
            var i = [];
            return r.setSlotInfo(t), o.setSlotInfo(t), e.setSlotInfo(t), e.kn(u.St()), i = (i = (i = (i = (i = i.concat(this.bn(r))).concat(this.bn(e))).concat(this.bn(o))).concat(this.bn(s))).concat(this.bn(a))
        }, ri: function (t) {
            for (var i = this.In(t), n = {}, r = 0, e = i.length; r < e; r++) {
                var o = i[r];
                n[o.key] = o.value
            }
            return n
        }, An: function (t) {
            var i = [], n = {};
            f.setSlotInfo(t), f.kn(u.St());
            for (var r = 0, e = (i = (i = i.concat(this.bn(f))).concat(this.bn(s))).length; r < e; r++) {
                var o = i[r];
                n[o.key] = o.value
            }
            return n
        }, ei: function (t, i, n, r) {
            var e = [];
            for (var o in t) if (o && (t[o] || 0 === t[o]) && t.hasOwnProperty(o) && (!r || !r[o])) {
                var a = t[o];
                e.push(o + "=" + a)
            }
            if (i && (e = p.xn(e)), window && window.location && window.location.ancestorOrigins && window.location.ancestorOrigins.length) {
                var s = window.location.ancestorOrigins;
                e.push("lto=" + encodeURIComponent(s[s.length - 1])), e.push("ltl=" + s.length)
            }
            return 1 === i && n && !v.ie ? l.Sn(n, e) : e.join("&")
        }, getPmpRequestUrl: function (t) {
            var i = t.paramObj, n = t.timestampWatcher, r = n.t1, e = n.t2, o = n.t3, a = t.response;
            i.qn = a.queryid;
            var s = ["conwid=" + t.width, "conhei=" + t.height], u = a.pdb_deliv, c = a.order_deliv, f = a.rtb_deliv;
            a.media_protect && "0" !== a.media_protect && s.push("mpdi=" + a.media_protect), u.deliv_id && s.push("pdbid=" + u.deliv_id), c.deliv_id && s.push("orderid=" + c.deliv_id), c.demand_id && s.push("odid=" + c.demand_id), f.deliv_id && s.push("rtbid=" + f.deliv_id), f.demand_id && s.push("rdid=" + f.demand_id), t.isNeedCacheRequest && (i.dpv = i.qn), t.isUnion ? s.push("dc=3") : s.push("dc=2"), 0 < r && 0 < e && 0 < o && (i.tt = r + "." + (e - r) + "." + (o - r) + "." + (new Date - r));
            var h = {};
            return i.exps && (s.push("exps=" + i.exps), h.exps = !0), this.Dn(t, d.U, d.Cn, i, s, h)
        }, Tn: function (t) {
            var i = t.paramObj, n = d.B && p.Mt(50) ? "" : d.U, r = d.N + "s?", e = {},
                o = ["wid=" + t.width, "hei=" + t.height];
            if (o.push("di=" + i.di), e.di = !0, i.ltu && (o.push("ltu=" + i.ltu), e.ltu = !0), i.psi && (o.push("psi=" + i.psi), e.psi = !0), t.isUnion ? o.push("dc=3") : o.push("dc=2"), 1 === t.proxy) for (var a = ["ti", "utdi", "drs", "cfv", "cpl", "chi", "cce", "tlm", "psr", "ccd", "cja", "cmi", "col", "cdo", "tcn", "ltr"], s = 0; s < a.length; s++) e[a[s]] = !0;
            return this.Dn(t, n, r, i, o, e)
        }, Dn: function (t, i, n, r, e, o) {
            var a = i + n + e.join("&") + "&", s = t.response.placement.basic.publisherDomain, u = "", c = !1;
            if (1 === t.proxy && s && s.pos) if (a = i + "//" + s.pos + "/", v.ie) a = a + "s?" + e.join("&") + "&"; else {
                u = l.zt(s.pos), a = a + p.Nt(5, 10) + "?" + l.Sn(u, e) + "&";
                var f = _.En(r);
                c = !0
            }
            var h = a + this.ei(r, t.proxy, u, o);
            if (c) {
                var d = "";
                switch (f) {
                    case"exp":
                        d = "&swt=1.2";
                        break;
                    case"base":
                        d = "&swt=1.1";
                        break;
                    default:
                        d = "&swt=1"
                }
                h += d
            }
            return h
        }, Pn: function (t, i) {
            var n = w[t] && w[t].paramsList;
            if (n) for (var r = 0; r < n.length; r++) if (n[r].key === i) return c.P(w[t], n[r].value)()
        }
    }
}, function (t, i, n) {
    var l = n(2), p = n(8), s = n(5), u = n(6), r = n(0), c = 1, f = 2, h = 3, _ = !0, w = window, d = 0, v = 0;
    t.exports = {
        On: "//eclick.baidu.com/a.js",
        Mn: 72e5,
        Un: {},
        Bn: null,
        Rn: null,
        Ln: 500,
        Nn: !1,
        regisetViewWatch: function (t) {
            this.Nn || (this.Fn(), this.Nn = !0), this.Bn = this.Bn || [];
            var i = l.pt(t);
            if (i) {
                var n = t.paramObj, r = t.width, e = t.height, o = t.response.queryid, a = t.containerInfo;
                r = a.width, e = a.height;
                var s = new Date, u = "" + t.slotId, c = {
                    uid: t.id,
                    slotId: u,
                    domEle: i,
                    jk: o,
                    word: n.ltu,
                    iframeStatus: n.dis,
                    aw: r,
                    ah: e,
                    viewContext: {
                        opacity: 1,
                        pageStayTime: 0,
                        pageStayTimeStamp: s,
                        inViewTime: 0,
                        inViewTimeStamp: s,
                        currViewStatus: !1,
                        focusTime: 0,
                        adViewTime: 0,
                        currAdViewStatus: !1,
                        adViewTimeStamp: s
                    }
                };
                if (window.postMessage && c.slotId && -1 < c.slotId.indexOf("u")) {
                    c.sendMessage = function () {
                        if (this.watchIframeWindow && this.watchIframeLoaded && this.viewContext && this.viewContext.lastAdViewStatus !== this.viewContext.currAdViewStatus) try {
                            var t = this.analysisUrl && this.analysisUrl.split("?"), i = t ? t[1] : "";
                            this.watchIframeWindow.postMessage(i, this.targetOrigin)
                        } catch (n) {
                        }
                    };
                    var f = i.getElementsByTagName("iframe");
                    if (f && f.length) {
                        var h = f[0];
                        c.watchIframe = h, c.targetOrigin = h.getAttribute("src") || "*";
                        try {
                            c.watchIframeWindow = h.contentWindow
                        } catch (d) {
                            c.watchIframeWindow = ""
                        }
                        c.viewContext.lastAdViewStatus = !1, c.viewContext.lastViewStatus = !1, l.At(c.watchIframe, "load", function () {
                            c.watchIframeLoaded = !0, c.viewContext.lastAdViewStatus = !c.viewContext.currAdViewStatus, c.sendMessage()
                        })
                    }
                }
                this.jn(c, i), this.Bn.push(c)
            }
        },
        unregisetViewWatch: function (t) {
            if (this.Bn) for (var i = t.id, n = 0; n < this.Bn.length; n++) {
                if (this.Bn[n].uid === i) return void this.Bn.splice(n, 1)
            }
        },
        Hn: function (t, i) {
            if (t && i) {
                var n = t + "?", r = i.viewContext;
                r.inViewTime > this.Mn && (r.inViewTime = this.Mn), r.adViewTime > this.Mn && (r.adViewTime = this.Mn), r.pageStayTime >= this.Mn && (r.pageStayTime = this.Mn);
                var e = [];
                return e.push("tu=" + i.slotId), e.push("op=" + r.opacity), e.push("jk=" + i.jk), e.push("word=" + i.word), e.push("if=" + i.iframeStatus), e.push("aw=" + i.aw), e.push("ah=" + i.ah), e.push("pt=" + r.pageStayTime), e.push("it=" + r.inViewTime), e.push("vt=" + r.adViewTime), e.push("csp=" + i.desktopResolution), e.push("bcl=" + i.browserRegion), e.push("pof=" + i.pageRegion), e.push("top=" + i.top), e.push("left=" + i.left), e.push("uid=" + i.uid), e.push("iw=" + r.currAdViewStatus), n + e.join("&")
            }
        },
        Fn: function () {
            this.Wn(), l.kt(r.P(this, this.zn), 2e3), s.platform && (-1 < s.platform.indexOf("Android") || -1 < s.platform.indexOf("Phone") || -1 < s.platform.indexOf("iPod")) || l.At(w, "beforeunload", r.P(this, this.Vn))
        },
        jn: function (t, i) {
            var n = p.zi(i);
            t.left = n.left, t.top = n.top;
            var r = window.screen.availWidth, e = window.screen.availHeight;
            1e4 < r && (r = 0), 1e4 < e && (e = 0), t.desktopResolution = r + "," + e, t.browserRegion = p.Fi(window) + "," + p.ji(window), t.pageRegion = p.Ji(window) + "," + p.Gi(window)
        },
        Jn: function (t, i) {
            var n, r, e, o = i.isInView, a = i.isAdView, s = new Date;
            return n = r = e = this.Ln, t.lastViewStatus = t.currViewStatus, t.lastAdViewStatus = t.currAdViewStatus, v === c && (v = f, n = r = 0, e = r = 0), t.currViewStatus ? (v === c && ((n = parseInt(s.getTime() - t.inViewTimeStamp.getTime(), 10)) < 0 ? n = 0 : n > this.Ln && (n = this.Ln)), t.inViewTime += n, t.inViewTimeStamp = s) : o && (t.inViewTimeStamp = s), t.currViewStatus = o, t.currAdViewStatus ? (v === h && ((e = parseInt(s.getTime() - t.adViewTimeStamp.getTime(), 10)) < 0 ? e = 0 : e > this.Ln && (e = this.Ln)), t.adViewTime += e, t.adViewTimeStamp = s) : a && (t.adViewTimeStamp = s), t.currAdViewStatus = a, t.pageStayTime = t.pageStayTime || 0, d = d || 0, v === h && (this.pageTimeSpan = parseInt(s.getTime() - t.pageStayTimeStamp.getTime(), 10), r < 0 ? r = 0 : r > this.Ln && (r = this.Ln)), t.pageStayTime += r, d += r, _ && (t.focusTime += r), t.pageStayTimeStamp = s, t.opacity = i.opacity, t
        },
        Gn: function (t) {
            var i = t.domEle;
            if (!i) return {isInView: !1, isAdView: !1, opacity: 1};
            var n = !1, r = !1, e = 1;
            if (_) try {
                if (e = this.qi(t), this.Xn(i)) {
                    var o = p.Fi(w), a = p.ji(w), s = this.zi(i), u = p.Yi(i), c = p.Qi(i);
                    n = 0 <= s.top && s.bottom <= a && 0 <= s.left && s.left <= o;
                    var f = 0 < s.top ? s.top : 0, h = s.bottom > a ? a : s.bottom, d = 0 < s.left ? s.left : 0,
                        l = s.right > o ? o : s.right;
                    if (f < h && d < l) r = .5 * (u * c) < (h - f) * (l - d)
                } else r = n = !1
            } catch (v) {
            }
            return {isInView: n, isAdView: r, opacity: e}
        },
        Xn: function (t) {
            return !!t && (50 <= p.qi(t) && p.nn(t))
        },
        qi: function (t) {
            var i = t.uid, n = t.domEle;
            this.Un[i] = this.Un[i] || 0;
            var r = p.qi(n);
            return 100 === r && (this.Un[i] |= 1), r < 100 && 0 < r && (this.Un[i] |= 2), 0 === r && (this.Un[i] |= 4), this.Un[i]
        },
        zi: function (t) {
            var i = p.Hi(t), n = p.Ki(window), r = p.Xi(window), e = p.Yi(t, !1), o = p.Qi(t, !1);
            return {
                top: i.top - r,
                bottom: i.top - r + o,
                left: i.left - n,
                right: i.left - n + e,
                topAbs: i.top,
                bottomAbs: i.top + o,
                leftAbs: i.left,
                rightAbs: i.left + e
            }
        },
        Kn: function () {
            if (this.Bn) for (var t = 0, i = this.Bn.length; t < i; t++) {
                var n = this.Bn[t], r = this.Gn(n);
                n.viewContext = this.Jn(n.viewContext, r), n.analysisUrl = this.Hn(this.On, n), n.sendMessage && n.sendMessage()
            }
        },
        Yn: function () {
            this.Kn(), d >= this.Mn && this.Vn(!1)
        },
        Wn: function () {
            v = c, this.$n(w), (!s.ie || s.ie && 6 < s.ie) && this.Yn(), this.Rn = setInterval(r.P(this, this.Yn), this.Ln)
        },
        zn: function () {
            var t, i, n, r;
            for (t = 0, i = this.Bn.length; t < i; t++) (n = this.Bn[t]) && (r = n.domEle) && this.jn(n, r)
        },
        Vn: function (t) {
            try {
                if (clearInterval(this.Rn), v !== f) return void (v = h);
                var i, n;
                for (v = h, this.Kn(), i = 0, n = this.Bn.length; i < n; i++) {
                    var r = this.Bn[i];
                    r && r.analysisUrl && !r.isSended && (r.isSended = !0, 0 === i && (r.analysisUrl += "&total=" + this.Bn.length), u.Di({url: r.analysisUrl}))
                }
                if (t) {
                    var e, o = (new Date).getTime();
                    if (s.ie) for (e = o + 200; o < e;) o = (new Date).getTime(); else {
                        for (n = 1e5, i = 0; i < n; i++) ;
                        for (n = 1e7 < (n = 2e7 / ((e = (new Date).getTime()) - o)) ? 1e7 : n, i = 0; i < n; i++) ;
                    }
                }
            } catch (a) {
            }
        },
        $n: function (t) {
            t = t || w, _ = !0, s.ie ? (l.At(t, "focusin", r.P(this, this.Qn)), l.At(t, "focusout", r.P(this, this.Zn))) : (l.At(t, "focus", r.P(this, this.Qn)), l.At(t, "blur", r.P(this, this.Zn)))
        },
        Qn: function () {
            _ = !0
        },
        Zn: function () {
            _ = !1
        }
    }
}, function (t, i, n) {
    var u = n(1), c = n(26), f = n(12), h = n(0), d = n(7), r = n(10);
    t.exports = {
        getFrameHTML: function (t) {
            if (t.isPdbAd) return r._n(t);
            var i = this.wn(t);
            return this.mn(i)
        }, wn: function (t) {
            var i = t.containerInfo, n = t.width || i.width, r = t.height || i.height,
                e = t.isDsFlow || t.isAnti ? f.Tn(t) : f.getPmpRequestUrl(t), o = "";
            if (t.isNeedCacheRequest) {
                var a = t.response.queryid;
                c.tr(a, t), d.Ri("adsbybaidu_callback", h.P(c, c.ir)), o = 'onload="' + u.M + "(1, '" + a + "', this);\""
            } else if (t.styleOpenApi && t.styleOpenApi.floatingState && "show" !== t.styleOpenApi.floatingState || 2 === i.location) {
                var s = t.styleOpenApi && t.styleOpenApi.floatingState ? t.styleOpenApi.floatingState : "upSlideShow";
                o = 'onload="' + u.M + "(2, '" + i.location + "', '" + s + "', this);\""
            }
            return {
                iframeId: "iframe" + t.id,
                srcAttriName: "src",
                onloadDefine: o,
                iframeWidth: "" + n,
                iframeHeight: "" + r,
                url: e
            }
        }, mn: function (t) {
            var i = ["<iframe", ' id="{iframeId}"', ' name="{iframeId}"', " {onloadDefine}", ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"', ' allowtransparency="true">', "</iframe>"].join("");
            return h.h(i, t)
        }
    }
}, function (t, i) {
    var o = null, r = !1;
    try {
        (o = window.localStorage) && o.removeItem && (r = !0)
    } catch (n) {
    }
    t.exports = {
        nr: "___ds_storage__", vi: function () {
            return r
        }, Zt: function (t, i, n) {
            if (o) {
                i = n ? encodeURIComponent(i) : i;
                try {
                    o.setItem(t, i)
                } catch (r) {
                }
            }
        }, Lt: function (t, i) {
            if (o) try {
                var n = o.getItem(t);
                return i && n ? decodeURIComponent(n) : n
            } catch (r) {
                return null
            }
            return null
        }, Ci: function (t, i, n) {
            if (o) {
                i = n ? encodeURIComponent(i) : i;
                var r = this.Lt(t) || "";
                r += (r && "|") + i;
                try {
                    this.Zt(t, r)
                } catch (e) {
                }
            }
        }, rr: function (t) {
            try {
                o && o.removeItem(t)
            } catch (i) {
            }
        }, Ti: function (t, i, n) {
            if (o) {
                i = n ? encodeURIComponent(i) : i;
                var r = this.Lt(t) || "";
                if (r = r.replace(new RegExp(i + "\\|?", "g"), "").replace(/\|$/, "")) try {
                    this.Zt(t, r)
                } catch (e) {
                } else o.removeItem(t)
            }
        }, Ii: function (t) {
            var i, n = this.Lt(this.nr + t) || "";
            return r && n && (n = n.split("|"), i = parseInt(n[0], 10) || 0), i
        }, er: function (t) {
            this.rr(this.nr + t)
        }
    }
}, function (t, i) {
    t.exports = {
        Di: function (t) {
            var i = t.response.pdb_deliv.deliv_des, n = i && i._html, r = n && n.monitorUrl;
            if (r) {
                var e = new Image, o = "log" + +new Date;
                window[o] = e, "http" === r.substr(0, 4).toLowerCase() ? ("http://" === r.substr(0, 7).toLowerCase() && (r = r.replace("http://", "//")), "https://" === r.substr(0, 8).toLowerCase() && (r = r.replace("https://", "//"))) : r = "//" + r;
                e.onload = e.onerror = e.onabort = function () {
                    e.onload = e.onerror = e.onabort = null;
                    try {
                        delete window[o]
                    } catch (t) {
                        window[o] = undefined
                    }
                }, e.src = r
            }
        }
    }
}, function (t, i) {
    t.exports = {
        Bt: function (t, i) {
            return t = t || 0, i = i || 1, Math.floor(Math.random() * (i - t + 1)) + t
        }, Nt: function (t, i) {
            for (var n = "", r = this.Bt(t, i), e = 0; e < r; e++) n += String.fromCharCode(Math.floor(26 * Math.random()) + 97);
            return n
        }, Mt: function (t) {
            var i = !1;
            return t = 10 * (t || 50), this.Bt(0, 1e3) < t && (i = !0), i
        }, Lt: function (t) {
            var i;
            t && 0 < t.length && (i = t[this.Bt(0, t.length - 1)]);
            return i
        }, Ft: function () {
            var t = ["padding-left:0px;", "padding-right:0px;", "padding-top:0px;", "padding-bottom:0px;", "padding:0px;", "margin-left:0px;", "margin-right:0px;", "margin-top:0px;", "margin-bottom:0px;", "margin:0px;", "cursor:auto;", "visibility:visible;", "text-align:left;", "zoom:1;"];
            return t[this.Bt(0, t.length - 1)]
        }, xn: function (t) {
            for (var i = t.length; 0 < i; i--) {
                var n = Math.floor(Math.random() * i), r = t[i - 1];
                t[i - 1] = t[n], t[n] = r
            }
            return t
        }
    }
}, function (t, i, n) {
    var f = n(0), h = n(7);
    t.exports = {
        or: "bizOrientations", ar: "bizUrgentOrientations", sr: function (t, i) {
            var n = this.ur.apply(this, arguments);
            return this.cr(t, n)
        }, ur: function (t, i) {
            return t && /^[0-9a-zA-Z]+$/.test(t) && i ? i = f.k(i) ? i : Array.prototype.slice.call(arguments, 1) : []
        }, cr: function (t, i) {
            if (!i || !i.length) return !1;
            var n = this.or, r = h.Ui(n) || {}, e = {};
            for (var o in r) f.e.call(r, o) && (e[o] = f.k(r[o]) ? r[o].slice() : r[o]);
            for (var a = e[t] || [], s = i.length, u = 0; u < s; u++) {
                var c = i[u];
                "string" == typeof c && (c = encodeURIComponent(c)).length <= 100 && (a[a.length] = c)
            }
            return !!a.length && (e[t] = f.I(a), h.Oi(n, e), !0)
        }, fr: function (t) {
            t = t || 500, t = Math.max(0, Math.min(t, 500));
            var i, n = [], r = h.Ui(this.ar) || h.Ui(this.or) || {};
            if (f.x(r)) for (var e in r) f.e.call(r, e) && (i = e + "=" + r[e].join(","), n[n.length] = i);
            h.Oi(this.ar, undefined), n.sort(function (t, i) {
                return t.length - i.length
            });
            for (var o = "", a = n.length, s = 0; s < a && !(o.length + n[s].length >= t); s++) o += (s ? "&" : "") + n[s];
            return o
        }
    }
}, function (t, i) {
    t.exports = {
        paramsList: [],
        hr: {
            clid: {key: "apdi", encode: !0},
            cuid: {key: "udi", encode: !0},
            ctkey: {key: "lcdi", encode: !0},
            acid: {key: "acid", encode: !0}
        },
        dr: function (t, i) {
            for (var n in this.paramsList = [], i) if (n && i.hasOwnProperty(n) && this.hr[n]) {
                var r = this.hr[n], e = {};
                try {
                    r.key && (e.key = r.key, e.value = this.lr(r, i[n])), r && !r.key && (e.key = n, e.value = this.lr(r, i[n])), this.paramsList.push(e)
                } catch (o) {
                }
            }
        },
        lr: function (t, i) {
            return t.encode ? encodeURIComponent(i) : i
        }
    }
}, function (t, i, n) {
    var c = n(3);
    c.__mappingCache = c.__mappingCache || {}, t.exports = {
        zt: function (t) {
            if (!t) return 0;
            for (var i = 21, n = 0; n < t.length; n++) i += t.charCodeAt(n);
            return i
        }, vr: function (t) {
            var i, n = t % 25 + 1, r = "key" + n;
            if (!(i = c.__mappingCache[r])) {
                i = {};
                for (var e = 97; e <= 122; e++) {
                    var o = String.fromCharCode(e), a = e + n;
                    a = 122 < a ? a - 26 : a;
                    var s = String.fromCharCode(a);
                    i[o] = s
                }
                c.__mappingCache[r] = i
            }
            return i
        }, pr: function (t) {
            var i, n = t % 64 + 1, r = "v" + n, e = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_-.";
            if (!(i = c.__mappingCache[r])) {
                i = {};
                for (var o = 0; o < e.length; o++) {
                    var a = e.charAt(o), s = o + n, u = e.charAt(65 <= s ? s - 65 : s);
                    i[a] = u
                }
                c.__mappingCache[r] = i
            }
            return i
        }, Sn: function (t, i) {
            for (var n = this.vr(t), r = this.pr(t), e = {}, o = 0; o < i.length; o++) {
                i[o] = i[o].replace(/\./g, "%_"), i[o] = i[o].replace(/%/g, ".");
                var a = i[o].split("=");
                e[a[0]] = a[1]
            }
            var s = [];
            for (var u in e) if (e.hasOwnProperty(u) && e[u]) {
                for (var c = "", f = 0; f < u.length; f++) {
                    c += n[u.charAt(f)]
                }
                c += "=";
                for (var h = e[u], d = 0; d < h.length; d++) {
                    var l = h.charAt(d);
                    r[l] ? c += r[l] : c += l
                }
                s.push(c)
            }
            return s.join("&")
        }
    }
}, function (t, i, n) {
    var e = n(22), o = n(1), a = n(0), s = n(6);
    t.exports = {
        _r: function (t) {
            a.x(t) ? (this.hasher = t.hasher, this.time = t.time, this.url = t.url, this.random = t.random, this.screen_resolution = t.screen_resolution, this.screen_orientation = t.screen_orientation, this.canvas = t.canvas, this.ie_activex = t.ie_activex) : "function" == typeof t && (this.hasher = t)
        }, wr: function () {
            var t = [];
            t.push((new Date).getTime()), t.push(Math.random()), this.url && t.push(this.url);
            try {
                if (t.push(navigator.userAgent), t.push(navigator.language), t.push(window.screen.colorDepth), this.screen_resolution) {
                    var i = this.mr();
                    void 0 !== i && t.push(i.join("x"))
                }
                t.push((new Date).getTimezoneOffset()), t.push(this.gr()), t.push(this.yr()), t.push(this.br()), document.body ? t.push(typeof document.body.addBehavior) : t.push(typeof undefined), t.push(typeof window.openDatabase), t.push(navigator.cpuClass), t.push(navigator.platform), t.push(navigator.doNotTrack), this.canvas && this.Ir() && t.push(this.kr())
            } catch (n) {
                s.Pt(o.et, n, {key: "pageSearchId", value: "navigatorParam"})
            }
            return this.hasher ? this.hasher(t.join("~~~"), 31) : this.Ar(t.join("~~~"), 31)
        }, xr: function (t, i) {
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], i = [i[0] >>> 16, 65535 & i[0], i[1] >>> 16, 65535 & i[1]];
            var n = [0, 0, 0, 0];
            return n[3] += t[3] + i[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + i[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + i[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + i[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
        }, Sr: function (t, i) {
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], i = [i[0] >>> 16, 65535 & i[0], i[1] >>> 16, 65535 & i[1]];
            var n = [0, 0, 0, 0];
            return n[3] += t[3] * i[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * i[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * i[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * i[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * i[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * i[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * i[3] + t[1] * i[2] + t[2] * i[1] + t[3] * i[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
        }, Dr: function (t, i) {
            return 32 === (i %= 64) ? [t[1], t[0]] : i < 32 ? [t[0] << i | t[1] >>> 32 - i, t[1] << i | t[0] >>> 32 - i] : (i -= 32, [t[1] << i | t[0] >>> 32 - i, t[0] << i | t[1] >>> 32 - i])
        }, Cr: function (t, i) {
            return 0 === (i %= 64) ? t : i < 32 ? [t[0] << i | t[1] >>> 32 - i, t[1] << i] : [t[1] << i - 32, 0]
        }, Tr: function (t, i) {
            return [t[0] ^ i[0], t[1] ^ i[1]]
        }, Er: function (t) {
            return t = this.Tr(t, [0, t[0] >>> 1]), t = this.Sr(t, [4283543511, 3981806797]), t = this.Tr(t, [0, t[0] >>> 1]), t = this.Sr(t, [3301882366, 444984403]), t = this.Tr(t, [0, t[0] >>> 1])
        }, Ar: function (t, i) {
            i = i || 0;
            for (var n = (t = t || "").length % 16, r = t.length - n, e = [0, i], o = [0, i], a = [0, 0], s = [0, 0], u = [2277735313, 289559509], c = [1291169091, 658871167], f = 0; f < r; f += 16) a = [255 & t.charCodeAt(f + 4) | (255 & t.charCodeAt(f + 5)) << 8 | (255 & t.charCodeAt(f + 6)) << 16 | (255 & t.charCodeAt(f + 7)) << 24, 255 & t.charCodeAt(f) | (255 & t.charCodeAt(f + 1)) << 8 | (255 & t.charCodeAt(f + 2)) << 16 | (255 & t.charCodeAt(f + 3)) << 24], s = [255 & t.charCodeAt(f + 12) | (255 & t.charCodeAt(f + 13)) << 8 | (255 & t.charCodeAt(f + 14)) << 16 | (255 & t.charCodeAt(f + 15)) << 24, 255 & t.charCodeAt(f + 8) | (255 & t.charCodeAt(f + 9)) << 8 | (255 & t.charCodeAt(f + 10)) << 16 | (255 & t.charCodeAt(f + 11)) << 24], a = this.Sr(a, u), a = this.Dr(a, 31), a = this.Sr(a, c), e = this.Tr(e, a), e = this.Dr(e, 27), e = this.xr(e, o), e = this.xr(this.Sr(e, [0, 5]), [0, 1390208809]), s = this.Sr(s, c), s = this.Dr(s, 33), s = this.Sr(s, u), o = this.Tr(o, s), o = this.Dr(o, 31), o = this.xr(o, e), o = this.xr(this.Sr(o, [0, 5]), [0, 944331445]);
            switch (a = [0, 0], s = [0, 0], n) {
                case 15:
                    s = this.Tr(s, this.Cr([0, t.charCodeAt(f + 14)], 48));
                case 14:
                    s = this.Tr(s, this.Cr([0, t.charCodeAt(f + 13)], 40));
                case 13:
                    s = this.Tr(s, this.Cr([0, t.charCodeAt(f + 12)], 32));
                case 12:
                    s = this.Tr(s, this.Cr([0, t.charCodeAt(f + 11)], 24));
                case 11:
                    s = this.Tr(s, this.Cr([0, t.charCodeAt(f + 10)], 16));
                case 10:
                    s = this.Tr(s, this.Cr([0, t.charCodeAt(f + 9)], 8));
                case 9:
                    s = this.Tr(s, [0, t.charCodeAt(f + 8)]), s = this.Sr(s, c), s = this.Dr(s, 33), s = this.Sr(s, u), o = this.Tr(o, s);
                case 8:
                    a = this.Tr(a, this.Cr([0, t.charCodeAt(f + 7)], 56));
                case 7:
                    a = this.Tr(a, this.Cr([0, t.charCodeAt(f + 6)], 48));
                case 6:
                    a = this.Tr(a, this.Cr([0, t.charCodeAt(f + 5)], 40));
                case 5:
                    a = this.Tr(a, this.Cr([0, t.charCodeAt(f + 4)], 32));
                case 4:
                    a = this.Tr(a, this.Cr([0, t.charCodeAt(f + 3)], 24));
                case 3:
                    a = this.Tr(a, this.Cr([0, t.charCodeAt(f + 2)], 16));
                case 2:
                    a = this.Tr(a, this.Cr([0, t.charCodeAt(f + 1)], 8));
                case 1:
                    a = this.Tr(a, [0, t.charCodeAt(f)]), a = this.Sr(a, u), a = this.Dr(a, 31), a = this.Sr(a, c), e = this.Tr(e, a)
            }
            return e = this.Tr(e, [0, t.length]), o = this.Tr(o, [0, t.length]), e = this.xr(e, o), o = this.xr(o, e), e = this.Er(e), o = this.Er(o), e = this.xr(e, o), o = this.xr(o, e), ("00000000" + (e[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (e[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
        }, yr: function () {
            try {
                return !!window.localStorage
            } catch (t) {
                return !0
            }
        }, gr: function () {
            try {
                return !!window.sessionStorage
            } catch (t) {
                return !0
            }
        }, br: function () {
            try {
                return !!window.indexedDB
            } catch (t) {
                return !0
            }
        }, Ir: function () {
            var t = document.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"))
        }, mr: function () {
            return this.screen_orientation ? window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height] : [window.screen.height, window.screen.width]
        }, kr: function () {
            var t = document.createElement("canvas"), i = t.getContext("2d"), n = "http://valve.github.io";
            return i.textBaseline = "top", i.font = '14px "Arial"', i.textBaseline = "alphabetic", i.fillStyle = "#f60", i.fillRect(125, 1, 62, 20), i.fillStyle = "#069", i.fillText(n, 2, 15), i.fillStyle = "rgba(102, 204, 0, 0.7)", i.fillText(n, 4, 17), t.toDataURL()
        }, Pr: function () {
            try {
                for (var t = "", i = e.paramsList, n = 0; n < i.length; n++) if ("ltu" === i[n].key) {
                    t = a.P(e, i[n].value)();
                    break
                }
                return this._r({url: t}), this.wr()
            } catch (r) {
                s.Pt(o.et, r, {key: "pageSearchId"})
            }
        }
    }
}, function (t, i, n) {
    var e = n(1), r = n(5), o = n(2), a = n(8), s = n(23), u = n(31), c = n(3), f = window, h = f.document,
        d = f.navigator, l = o.St();
    t.exports = {
        paramsList: [{
            key: "dbv", value: function () {
                return r.qihoo ? "1" : r.chrome ? "2" : "0"
            }
        }, {
            key: "drs", value: function () {
                try {
                    return {uninitialized: 0, loading: 1, loaded: 2, interactive: 3, complete: 4}[h.readyState]
                } catch (t) {
                    return -1
                }
            }
        }, {
            key: "pcs", value: function () {
                return [a.Fi(l), a.ji(l)].join("x")
            }
        }, {
            key: "pss", value: function () {
                return [a.Ji(l), a.Gi(l)].join("x")
            }
        }, {
            key: "cfv", value: function () {
                return r.Ai()
            }
        }, {
            key: "cpl", value: function () {
                return d.plugins.length || 0
            }
        }, {
            key: "chi", value: function () {
                return f.history.length || 0
            }
        }, {
            key: "cce", value: function () {
                return d.cookieEnabled || 0
            }
        }, {
            key: "cec", value: function () {
                return (h.characterSet ? h.characterSet : h.charset) || ""
            }
        }, {
            key: "tlm", value: function () {
                return Date.parse(h.lastModified) / 1e3
            }
        }, {
            key: "prot", value: function () {
                return "2"
            }
        }, {
            key: "rw", value: function () {
                var t = Math.max(320, Math.min(window.innerWidth, window.innerHeight));
                return isNaN(t) && (t = Math.min(a.Fi(), a.ji())), t || 0
            }
        }, {
            key: "ltu", encode: !0, limit: 700, value: function () {
                var t;
                return 0 < (t = c.location && c.location.href ? c.location.href : s.Or(function (t) {
                    var i = a.Fi(t), n = a.ji(t);
                    return 400 < i && 120 < n
                })).indexOf("cpro_prev") && (t = t.slice(0, t.indexOf("?"))), t
            }
        }, {
            key: "liu", encode: !0, limit: 700, value: function () {
                return o.yt(f) ? h.URL : ""
            }
        }, {
            key: "ltr", encode: !0, limit: 300, value: function () {
                var t = "";
                try {
                    t = l.opener ? l.opener.document.location.href : ""
                } catch (i) {
                }
                return t || l.document.referrer
            }
        }, {
            key: "lcr", encode: !0, value: function () {
                if ("union" === this.Mr.productLine) return "";
                var t = h.referrer;
                if (!t) return "";
                var i = t.replace(/^https?:\/\//, "");
                i = (i = i.split("/")[0]).split(":")[0], i = s.Ur(i);
                var n = s.Ur(), r = u.Br(e.L);
                return r && n === i ? r : n !== i ? (u.Rr(e.L, t, {domain: n}), t) : ""
            }
        }, {
            key: "ecd", encode: !0, value: function () {
                return r.ie && r.ie < 9 ? 0 : 1
            }
        }], setSlotInfo: function (t) {
            this.Mr = t
        }
    }
}, function (t, i, n) {
    var r = n(2);
    t.exports = {
        Or: function (t) {
            var i = r.St(t), n = "";
            return r.yt(i) && (n = i.document.referrer), n = n || i.location.href
        }, Ur: function (t) {
            0 === (t = t || document.domain).indexOf("www.") && (t = t.substr(4)), "." === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1));
            var i = "([a-z0-9][a-z0-9\\-]*?\\.(?:" + ["com", "cn", "net", "org", "gov", "info", "la", "cc", "co", "jp", "us", "hk", "tv", "me", "biz", "in", "be", "io", "tk", "cm", "li", "ru", "ws", "hn", "fm", "tw", "ma", "in", "vn", "name", "mx", "gd", "im"].join("|") + ")(?:\\.(?:cn|jp|tw|ru|th))?)$",
                n = new RegExp(i, "i"), r = t.match(n);
            return r ? r[0] : t
        }
    }
}, function (t, i, n) {
    var o = n(9), a = {"m.how234.com": {expId: "110700", baseId: "110701"}}, r = "110702", e = "110703";
    t.exports = {
        Lr: function (t) {
            var i = window.location.hostname;
            if (a[i]) {
                var n = a[i], r = o.on({percent: 50, expId: n.expId, baseId: n.baseId}), e = t.paramObj.exps;
                return t.paramObj.exps = o.rn(e, r.expId), r.expType
            }
        }, En: function (t) {
            var i = o.on({percent: 10, expId: r, baseId: e}), n = t.exps;
            return t.exps = o.rn(n, i.expId), i.expType
        }
    }
}, function (t, i, n) {
    var r = n(1), e = n(3), o = n(11), a = n(2), s = n(15), u = n(0), c = n(7), f = n(9), h = n(5);
    t.exports = {
        Nr: function () {
            this.idPrefix = "BAIDU_DUP_fp_", this.fpElId = this.idPrefix + "wrapper", a.g(this.fpElId) || o.At(window, "load", u.P(this, this.Fr))
        }, Fr: function () {
            if (!a.g(this.fpElId)) {
                var t = window.document, i = t.body, n = t.createElement("div");
                n.id = this.fpElId, n.style.position = "absolute", n.style.left = "-1px", n.style.bottom = "-1px", n.style.zIndex = 0, n.style.width = 0, n.style.height = 0, n.style.overflow = "hidden", n.style.visibility = "hidden", n.style.display = "none";
                var r = t.createElement("iframe");
                r.id = this.idPrefix + "iframe", r.src = "https://pos.baidu.com/wh/o.htm?ltr=", r.style.width = 0, r.style.height = 0, r.style.visibility = "hidden", r.style.display = "none";
                try {
                    n.insertBefore(r, n.firstChild), i && i.insertBefore(n, i.firstChild)
                } catch (e) {
                }
            }
        }, si: function (t) {
            try {
                if (e.antiScript || !this.jr(t)) return;
                e.antiScript = document.createElement("script"), e.antiScript.type = "text/javascript", e.antiScript.async = !0, e.antiScript.src = "//cpro.baidustatic.com/cpro/ui/ab.min.js";
                var i = document.getElementsByTagName("script")[0];
                i && i.parentNode && i.parentNode.insertBefore(e.antiScript, i), a.Et(e.antiScript, function () {
                    window.BAIDU_SSP_sendAntiLog && window.BAIDU_SSP_sendAntiLog()
                }), c.Ri("__abbaidu_2028_cb", u.P(this, function (t) {
                    t && s.Zt("___ds_storage__loadAntiFile", t)
                }))
            } catch (n) {
            }
        }, Hr: function (t) {
            var i = t.paramObj, n = i.exps || "";
            if (this.jr(t)) {
                var r = s.Lt("___ds_storage__loadAntiFile") ? "119015" : "";
                n = f.rn(n, r), i.exps = n
            }
        }, jr: function (t) {
            return (h.isAndroid || h.isIOS) && !a.yt(window) && !t.isAnti && r.ht.test(t.id)
        }
    }
}, function (t, i, n) {
    var c = n(4), f = n(1), h = n(2), d = n(10), o = n(13), r = {}, l = {};
    t.exports = {
        tr: function (t, i) {
            r[t] = i
        }, Wr: function (t) {
            return r[t]
        }, zr: function (t, i) {
            if (!t || l[t]) return !1;
            l[t] = i;
            var n = this.Wr(t), r = f.V + "dpv=" + t + "&di=" + n.slotId;
            h.Ct(r)
        }, ir: function (t) {
            if ("success" !== (t.html || "success")) {
                var i = this.Wr(t.dpv);
                if (i) {
                    var n = i.response, r = n.pdb_deliv, e = n.rtb_deliv, o = n.order_deliv, a = r.deliv_des;
                    if (a = a._html || {}, 0 === parseInt(r.deliv_id, 10) && (0 !== parseInt(o.deliv_id, 10) || 0 !== parseInt(e.deliv_id, 10)) && 7 === n.placement.complement_type) return this.Vr(i);
                    if ("rich" === a.type) {
                        var s = h.pt(i);
                        d.fn(s, a.content)
                    } else {
                        var u = l[t.dpv];
                        c.qt(i, f.K), u.outerHTML = d._n(i)
                    }
                }
            }
        }, Vr: function (t) {
            var i = t.containerId, n = h.pt(t), r = document.getElementById(i + "_left"),
                e = document.getElementById(i + "_right");
            n && (o.unregisetViewWatch(t), n.parentNode.removeChild(n)), r && r.parentNode.removeChild(r), e && e.parentNode.removeChild(e)
        }
    }
}, function (t, i, n) {
    var e = n(1), r = n(4), o = n(25), a = n(7), s = n(28), u = n(36), c = n(37), f = n(38), h = n(39), d = n(40),
        l = n(2), v = n(0), p = n(3), _ = n(13), w = n(41), m = n(8), g = n(6), y = n(44), b = n(45), I = n(48),
        k = n(49), A = n(50), x = n(51), S = n(26), D = n(10), C = n(52),
        T = {inlayFix: b, "mobile.inlayFix": I, "mobile.float": k, "mobile.insideText": A, "ds.inlay": x};
    t.exports = {
        Xt: function () {
            this.qr(), w.Jr(), d.Jr(), c.Jr(), f.Jr(), u.Jr(), h.Jr(), o.Nr()
        }, qr: function () {
            a.Ri(e.R, v.P(this, this.Gr)), a.Ri(e.M, this.Xr)
        }, Gr: function (t) {
            try {
                var i = r.jt(t.tuid);
                if (!i || i.containerId && !l.pt(i)) return;
                i.response = t, r.Gt(i.id, e.G), r.processSlot(i), i.timestampWatcher.t3 = (new Date).getTime(), r.pi(i), o.Hr(i), this.Kr(i)
            } catch (n) {
                if (!t.tuid) return;
                g.Pt(e.et, n, {pos: "callback", id: t.tuid})
            }
        }, Kr: function (t) {
            var i = s.Yr(t);
            if (i) {
                var n = C.getDeliveryEntrance2ExpNumber(t.productLine);
                C.setExpNumber(t, n);
                var r = C.getPainter2ExpNumber(i);
                C.setExpNumber(t, r), t.isPdbAd && g.Pi("pdbDupLog");
                var e = T[i] || this.$r(i);
                e ? this.Qr(i, t, e) : this.Zr(i, t)
            }
        }, Zr: function (t, i) {
            var n = t;
            0 < n.indexOf(".") && (n = n.replace(".", "/")), n = e.ut + n + ".js", y.te(i.id, n, v.P(this, this.ne, t, i))
        }, ne: function (t, i) {
            try {
                var n = this.$r(t);
                this.Qr(t, i, n)
            } catch (r) {
                g.Pt(e.et, r, {pos: "painterLoadCallback", painter: t, id: i.id})
            }
        }, $r: function (t) {
            var i = p.painter;
            if (i) {
                var n = t.split(".");
                return "mobile" === n[0] ? i.mobile && i.mobile[n[1]] : i[n[0]]
            }
        }, Qr: function (t, i, n) {
            n && (n.render(i), this.re(i), t && -1 < t.indexOf("mobile") && _.regisetViewWatch(i), this.ee(i))
        }, re: function (i) {
            var t = l.pt(i), n = t && t.querySelector && t.querySelector("iframe");
            n && l.At(n, "load", function () {
                if (window.JSON && window.JSON.stringify && n.contentWindow && n.contentWindow.postMessage) {
                    var t = JSON.stringify({type: 1, tuid: i.id});
                    n.contentWindow.postMessage(t, "*")
                }
            })
        }, Xr: function (t) {
            try {
                var i = Array.prototype.slice.call(arguments, 1);
                switch (t) {
                    case"auto":
                        w.Gr.apply(w, i);
                        break;
                    case 1:
                        S.zr.apply(S, i);
                        break;
                    case 2:
                        k.oe.apply(k, i);
                        break;
                    case 3:
                        D.hn.apply(D, i)
                }
            } catch (n) {
                g.Pt(e.et, n, {pos: "commoncallback"})
            }
        }, ee: function (t) {
            var i = l.pt(t);
            -1 < (t.paramObj.dis ? t.paramObj.ltu : window.location.href).indexOf(e.st) && m.Zi(i, t.id)
        }
    }
}, function (t, i) {
    t.exports = {
        Yr: function (t) {
            var i = t.response;
            if (!i.painter) {
                var n = this.ae(t);
                if (n) return n
            }
            return this.se(t, i)
        }, ae: function (t) {
            var i = t.response.placement.userdefine || "", n = t.response.placement.encode_userdefine || "";
            n && "encoded" === n && (i = decodeURIComponent(i), t.response.placement.userdefine = i);
            for (var r = i.split("|") || [], e = {}, o = 0, a = r.length; o < a; o++) {
                var s = r[o].split("="), u = s[0];
                u && (e[u] = s[1])
            }
            if (e.hasOwnProperty("painter")) return e.painter;
            var c = t.styleOpenApi.tn || "", f = parseInt(t.styleOpenApi.xuanting || 0, 10);
            return 0 <= c.indexOf("mobile") && 0 < f ? "mobile.float" : 0 <= c.indexOf("mobile") ? "mobile.inlayFix" : 0 < f ? "dynamicFloat" : c && 0 < c.length && c.indexOf("_xuanfu") < 0 && c.indexOf("float") < 0 ? "inlayFix" : ""
        }, se: function (t, i) {
            var n = this.ue(t);
            return this.ce(n, i) ? "ds.inlay" : this.fe(n, i) ? "mobile.float" : this.he(i) ? "mobile.inlayFix" : this.de(i) ? "mobile.float" : this.le(i) ? "mobile.insideText" : this.ve(i) ? "inlayFix" : this.pe(i) ? "insideText" : this._e(i) ? "dynamicFloat" : this.we(i) ? "bottomSearchBar" : void 0
        }, ue: function (t) {
            return t.isAutoAd && t.isAnti && t.styleOpenApi && "string" == typeof t.styleOpenApi.painter && t.styleOpenApi.painter
        }, we: function (t) {
            var i = t.placement, n = i.container, r = i.fillstyle;
            return !(3 !== n.anchoredType || !n.slide || 9 !== r.btnStyleId)
        }, ve: function (t) {
            var i = t.placement, n = i.basic, r = i.container, e = r.floated;
            return 1 === n.rspFormat && 1 === n.flowType && 1 === r.anchoredType && (!e || (1 === e.trigger || !this.me(e)))
        }, me: function (t) {
            for (var i in t) return !0;
            return !1
        }, _e: function (t) {
            var i = t.placement, n = i.basic, r = i.container, e = r.floated;
            return !(1 !== n.rspFormat || 1 !== n.flowType || 1 !== r.anchoredType || !e || 8 !== e.trigger)
        }, pe: function (t) {
            var i = t.placement, n = i.basic, r = i.container;
            return 3 === n.rspFormat && 1 === n.flowType && 8 === r.occurrence && 11 === r.anchoredType
        }, he: function (t) {
            var i = t.placement, n = i.basic, r = i.container;
            return 1 === n.rspFormat && 2 === n.flowType && 1 === r.anchoredType
        }, de: function (t) {
            var i = t.placement, n = i.basic, r = i.container;
            return 1 === n.rspFormat && 2 === n.flowType && (3 === r.anchoredType || 11 === r.anchoredType)
        }, le: function (t) {
            var i = t.painter, n = t.placement, r = n.basic, e = n.container;
            return 3 === i || "mobile.insideText" === i || !i && 3 === r.rspFormat && 2 === r.flowType && 8 === e.occurrence && 11 === e.anchoredType
        }, ce: function (t, i) {
            var n = t || i.painter;
            return 1 === n || "mobile.inlayFix" === n || "inlayFix" === n
        }, fe: function (t, i) {
            var n = t || i.painter;
            return 2 === n || "mobile.float" === n
        }
    }
}, function (t, i, n) {
    try {
        o = n(3), a = n(7), s = n(0), u = n(4), c = n(13), f = n(14), h = n(10), d = n(12), l = n(27), n(54), a.Ri("regisetViewWatch", s.P(c, c.regisetViewWatch), o), a.Ri("getFrameHTML", s.P(f, f.getFrameHTML), o), a.Ri("renderRichMaterial", s.P(h, h.renderRichMaterial), o), a.Ri("processSlotInfo", s.P(u, u.processSlotInfo), o), a.Ri("getPmpRequestUrl", s.P(d, d.getPmpRequestUrl), o), l.Xt()
    } catch (v) {
        var r = n(6), e = n(1);
        r.Pt(e.et, v, {date: "1122"})
    }
    var o, a, s, u, c, f, h, d, l
}, function (t, i, n) {
    var o = n(2), a = n(8), e = n(5), s = n(1), u = n(9), c = n(3), r = n(21), f = n(6), h = window;
    t.exports = {
        paramsList: [{
            key: "psi", value: function () {
                var t = c[s.Y];
                return t = t || (c[s.Y] = r.Pr())
            }
        }, {
            key: "di", value: function () {
                return this.Mr.slotId
            }
        }, {
            key: "dri", value: function () {
                return this.Mr.index
            }
        }, {
            key: "dis", value: function () {
                var t = 0;
                o.yt(h) && (t += 1), o.It(h, h.top) && (t += 2);
                var i = a.Fi(), n = a.ji();
                (i < 40 || n < 10) && (t += 4);
                try {
                    if (3 == (3 & t)) {
                        var r = o.St();
                        r.document.referrer && r.top === r.parent && (t += 8)
                    }
                } catch (e) {
                    f.Pt(s.et, e, {pos: "disParam"})
                }
                return t
            }
        }, {
            key: "dai", value: function () {
                return this.Mr.count
            }
        }, {
            key: "ps", value: function () {
                var t = o.pt(this.Mr), i = a.zi(t);
                return i.top + "x" + i.left
            }
        }, {
            key: "coa", encode: !0, value: function () {
                var t = [], i = this.Mr.styleOpenApi;
                for (var n in "-1" === this.Mr.pcwd && (i.cpro_ftpc = "true"), i) if (n && "undefined" != typeof i[n] && i.hasOwnProperty(n)) {
                    var r = n;
                    if ("width" === n || "height" === n || "sizeType" === n || "apType" === n || "floatingState" === n) continue;
                    "cpro_w" === n && (r = "rsi0"), "cpro_h" === n && (r = "rsi1"), t.push(r + "=" + encodeURIComponent(i[n]))
                }
                return t.join("&")
            }
        }, {
            key: "enu", value: function () {
                return "encoding"
            }
        }, {
            key: "cw", value: function () {
                var t = this.Mr.styleOpenApi.cpro_ftpc || "true" === this.Mr.styleOpenApi.cpro_ftpc || "-1" === this.Mr.pcwd,
                    i = o.pt(this.Mr);
                if (t && i && i.parentElement.clientWidth) return i.parentElement.clientWidth || 0
            }
        }, {
            key: "exps", value: function () {
                var t = this.Mr.exps;
                if (t && 0 <= t.indexOf(s.ft)) {
                    for (var i, n = t.split(","), r = 0; r < n.length; r++) (i = parseInt(n[r], 10)) === s.ft && 1 === this.Mr.proxy && (i = e.isAdBlock ? i + 1 : i + 2, n[r] = "" + i);
                    t = n.join(",")
                }
                return u.rn(t, c.expId)
            }
        }, {
            key: "ant", value: function () {
                return 1 === this.Mr.proxy ? 1 : 0
            }
        }], setSlotInfo: function (t) {
            this.Mr = t
        }
    }
}, function (t, i) {
    t.exports = {
        Br: function (t, i) {
            var n = new RegExp("(^| )" + t + "=([^;]*)(;|$)").exec(document.cookie), r = "";
            return n && (r = i ? decodeURIComponent(n[2]) : n[2]), r
        }, Rr: function (t, i, n, r) {
            var e = n.expires;
            document.cookie = t + "=" + (r ? encodeURIComponent(i) : i) + (n.path ? "; path=" + n.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (n.domain ? "; domain=" + n.domain : "")
        }, ge: function (t) {
            var i = new Date;
            i.setTime(i.getTime() - 86400), this.Rr(t, "", {path: "/", expires: i})
        }
    }
}, function (t, i, n) {
    var r = n(1), e = n(5), o = n(18), a = n(3);
    t.exports = {
        kn: function (t) {
            this.ye = t
        }, paramsList: [{
            key: "dcb", value: function () {
                return r.R
            }
        }, {
            key: "dtm", value: function () {
                return r.W
            }
        }, {
            key: "dvi", value: function () {
                return "0.0"
            }
        }, {
            key: "dci", value: function () {
                return "-1"
            }
        }, {
            key: "dds", value: function () {
                return ""
            }
        }, {
            key: "dpt", value: function () {
                return "none"
            }
        }, {
            key: "tsr", value: function () {
                var t = 0, i = +new Date;
                return r.startTime && (t = i - r.startTime), t
            }
        }, {
            key: "tpr", value: function () {
                var t = (new Date).getTime(), i = a.DUP_4_SF ? a : this.ye, n = i[r.at];
                return (!n || "number" != typeof n || 24e4 <= t - n) && (n = i[r.at] = t), n
            }
        }, {
            key: "cop", encode: !0, value: function () {
                return o.fr()
            }
        }, {
            key: "ti", encode: !0, limit: 60, value: function () {
                var t = e.baiduboxapp && this.ye.articleTitle ? this.ye.articleTitle : this.ye.document.title;
                return t = this.Mr.title ? this.Mr.title : t
            }
        }, {
            key: "utdi", encode: !0, value: function () {
                return e.baiduboxapp && this.ye.MP && this.ye.MP.globalConf && this.ye.MP.globalConf.cuid || ""
            }
        }, {
            key: "atdi", encode: !0, value: function () {
                return e.baiduboxapp && this.ye.MP && this.ye.MP.globalConf && this.ye.MP.globalConf.nid || ""
            }
        }, {
            key: "ari", value: function () {
                return 2
            }
        }, {
            key: "ver", value: function () {
                return "1122"
            }
        }], setSlotInfo: function (t) {
            this.Mr = t
        }
    }
}, function (t, i, n) {
    var r = n(2), e = n(8), o = window, a = o.screen;
    t.exports = {
        paramsList: [{
            key: "uc", value: function () {
                return [a.availWidth, a.availHeight].join("x")
            }
        }, {
            key: "pis", value: function () {
                return (r.yt(o) ? [e.Fi(), e.ji()] : [-1, -1]).join("x")
            }
        }, {
            key: "sr", value: function () {
                return [a.width, a.height].join("x")
            }
        }, {
            key: "tcn", value: function () {
                var t = +new Date;
                return Math.round(t / 1e3)
            }
        }]
    }
}, function (t, i, n) {
    var o = n(1), a = n(3), s = n(2), u = n(8), c = n(5), f = n(6), r = n(23), h = n(9), e = n(21), d = window,
        l = d.document, v = d.navigator, p = d.screen, _ = s.St();
    t.exports = {
        setSlotInfo: function (t) {
            this.Mr = t
        }, kn: function (t) {
            this.ye = t
        }, paramsList: [{
            key: "ti", encode: !0, limit: 60, value: function () {
                return c.baiduboxapp && this.ye.articleTitle ? this.ye.articleTitle : this.ye.document.title
            }
        }, {
            key: "utdi", encode: !0, value: function () {
                return c.baiduboxapp && this.ye.MP && this.ye.MP.globalConf && this.ye.MP.globalConf.cuid || ""
            }
        }, {
            key: "atdi", encode: !0, value: function () {
                return c.baiduboxapp && this.ye.MP && this.ye.MP.globalConf && this.ye.MP.globalConf.nid || ""
            }
        }, {
            key: "ps", value: function () {
                var t = s.pt(this.Mr), i = u.zi(t);
                return i.top + "x" + i.left
            }
        }, {
            key: "drs", value: function () {
                try {
                    return {uninitialized: 0, loading: 1, loaded: 2, interactive: 3, complete: 4}[l.readyState]
                } catch (t) {
                    return -1
                }
            }
        }, {
            key: "pcs", value: function () {
                return [u.Fi(_), u.ji(_)].join("x")
            }
        }, {
            key: "pss", value: function () {
                return [u.Ji(_), u.Gi(_)].join("x")
            }
        }, {
            key: "cfv", value: function () {
                return c.Ai()
            }
        }, {
            key: "cpl", value: function () {
                return v.plugins.length || 0
            }
        }, {
            key: "chi", value: function () {
                return d.history.length || 0
            }
        }, {
            key: "cce", value: function () {
                return v.cookieEnabled || 0
            }
        }, {
            key: "cec", value: function () {
                return (l.characterSet ? l.characterSet : l.charset) || ""
            }
        }, {
            key: "tlm", value: function () {
                return Date.parse(l.lastModified) / 1e3
            }
        }, {
            key: "psr", value: function () {
                return [p.width, p.height].join("x")
            }
        }, {
            key: "par", value: function () {
                return [p.availWidth, p.availHeight].join("x")
            }
        }, {
            key: "pis", value: function () {
                return (s.yt(d) ? [u.Fi(), u.ji()] : [-1, -1]).join("x")
            }
        }, {
            key: "ccd", value: function () {
                return p.colorDepth || 0
            }
        }, {
            key: "cja", value: function () {
                return v.javaEnabled().toString()
            }
        }, {
            key: "cmi", value: function () {
                return v.mimeTypes.length || 0
            }
        }, {
            key: "col", value: function () {
                var t = v.language || v.browserLanguage || v.systemLanguage || "";
                return t = t.replace(/[^a-zA-Z0-9-]/g, "")
            }
        }, {
            key: "cdo", value: function () {
                var t = d.orientation;
                return t === undefined && (t = -1), t
            }
        }, {
            key: "tcn", value: function () {
                var t = +new Date;
                return Math.round(t / 1e3)
            }
        }, {
            key: "psi", value: function () {
                var t = a[o.Y];
                return t = t || (a[o.Y] = e.Pr())
            }
        }, {
            key: "di", value: function () {
                return this.Mr.slotId
            }
        }, {
            key: "dtm", value: function () {
                return o.W
            }
        }, {
            key: "tpr", value: function () {
                var t = (new Date).getTime(), i = a.DUP_4_SF ? a : this.ye, n = i[o.at];
                return (!n || "number" != typeof n || 24e4 <= t - n) && (n = i[o.at] = t), n
            }
        }, {
            key: "ari", value: function () {
                return 2
            }
        }, {
            key: "ant", value: function () {
                return 1 === this.Mr.proxy ? 1 : 0
            }
        }, {
            key: "exps", value: function () {
                var t = this.Mr.exps;
                if (t && 0 <= t.indexOf(o.ft)) {
                    for (var i, n = t.split(","), r = 0; r < n.length; r++) (i = parseInt(n[r], 10)) === o.ft && 1 === this.Mr.proxy && (i = c.isAdBlock ? i + 1 : i + 2, n[r] = "" + i);
                    t = n.join(",")
                }
                var e = a.expId;
                return c.hasSameSiteLimit && (e = 1 === this.Mr.proxy ? h.rn("112028", a.expId) : h.rn("112027", a.expId)), h.rn(t, e)
            }
        }, {
            key: "prot", value: function () {
                return "2"
            }
        }, {
            key: "dis", value: function () {
                var t = 0;
                s.yt(d) && (t += 1), s.It(d, d.top) && (t += 2);
                var i = u.Fi(), n = u.ji();
                (i < 40 || n < 10) && (t += 4);
                try {
                    if (!0 & t) {
                        var r = s.St();
                        r.document.referrer && r.top === r.parent && (t += 8)
                    }
                } catch (e) {
                    f.Pt(o.et, e, {pos: "disParam"})
                }
                return t
            }
        }, {
            key: "dai", value: function () {
                return this.Mr.count
            }
        }, {
            key: "dri", value: function () {
                return this.Mr.index
            }
        }, {
            key: "ltu", encode: !0, limit: 700, value: function () {
                var t;
                return 0 < (t = a.location && a.location.href ? a.location.href : r.Or(function (t) {
                    var i = u.Fi(t), n = u.ji(t);
                    return 400 < i && 120 < n
                })).indexOf("cpro_prev") && (t = t.slice(0, t.indexOf("?"))), t
            }
        }, {
            key: "liu", encode: !0, limit: 700, value: function () {
                return s.yt(d) ? l.URL : ""
            }
        }, {
            key: "ltr", encode: !0, limit: 300, value: function () {
                var t = "";
                try {
                    t = _.opener ? _.opener.document.location.href : ""
                } catch (i) {
                }
                return t || _.document.referrer
            }
        }, {
            key: "coa", encode: !0, value: function () {
                var t = [], i = this.Mr.styleOpenApi;
                for (var n in "-1" === this.Mr.pcwd && (i.cpro_ftpc = "true"), i) if (n && "undefined" != typeof i[n] && i.hasOwnProperty(n)) {
                    var r = n;
                    if ("width" === n || "height" === n || "sizeType" === n || "apType" === n || "floatingState" === n) continue;
                    "cpro_w" === n && (r = "rsi0"), "cpro_h" === n && (r = "rsi1"), t.push(r + "=" + encodeURIComponent(i[n]))
                }
                return t.join("&")
            }
        }]
    }
}, function (t, i, n) {
    var f = n(0), o = {};

    function s(t, i, n) {
        if ("string" == typeof t) return t;
        if (!t.type) return "";
        var r = o[t.type];
        if (!r) return "";
        var e = "string" == typeof r ? f._(r, t) : r(t, i);
        return n ? e : "<!DOCTYPE html><body>" + e
    }

    o.text = function (t) {
        var i = '<span style="word-wrap:break-word;"><a href="{clickUrl:string}" target="{target:string}" style="font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};"{events}>{text:string}</a></span>',
            n = /\{events\}/;
        if (1 === t.version) i = i.replace(n, ""); else if (2 === t.version) {
            i = i.replace(n, " onmouseover=\"this.style.color='{hoverColor:string}';this.style.fontWeight='{hoverBold:string}';this.style.fontStyle='{hoverItalic:string}';this.style.textDecoration='{hoverUnderline:string}';\" onmouseout=\"this.style.color='{defaultColor:string}';this.style.fontWeight='{defaultBold:string}';this.style.fontStyle='{defaultItalic:string}';this.style.textDecoration='{defaultUnderline:string}';\"");
            for (var r = ["default", "hover"], e = 0; e < r.length; e++) {
                var o = r[e], a = o + "Color", s = o + "Bold", u = o + "Italic", c = o + "Underline";
                t[a] = "#" + t[a], t[s] = t[s] ? "bold" : "normal", t[u] = t[u] ? "italic" : "normal", t[c] = t[c] ? "underline" : "none"
            }
        }
        return f._(i, t)
    }, o.image = '<a href="{clickUrl:string}" target="{target:string}"><img src="{src:string}" title="{title:html}" alt="{title:html}" border="0" height="{height:number}" width="{width:number}" /></a>', o.flash = function (t) {
        return t.file = t.hasLink ? "cflash" : "flash", t.imageClickUrl = t.clickUrl, t.hasLink || (t.clickUrl = ""), f._(["<script>", "var BD = BD || {};", "BD.MC = BD.MC || {};", "BD.MC.ADFlash = BD.MC.ADFlash || {};", "BD.MC.ADImg = BD.MC.ADImg || {};", "BD.MC.ADFlash.w = {width:number};", "BD.MC.ADFlash.h = {height:number};", 'BD.MC.ADFlash.mu = "{src:string}";', 'BD.MC.ADFlash.cu = "{clickUrl:string}";', "BD.MC.ADFlash.wm = {wmode:number};", 'BD.MC.ADFlash.ct = "{clickTag:string}";', "BD.MC.ADImg.w = {imageWidth:number};", "BD.MC.ADImg.h = {imageHeight:number};", 'BD.MC.ADImg.mu = "{imageSrc:string}";', 'BD.MC.ADImg.cu = "{imageClickUrl:string}";', 'BD.MC.ADImg.tw = "{target:string}";', "BD.MC.ADImg.flag = {backupImage:number};", "<\/script>", '<script src ="', '//cbjs.baidu.com/js/{file:string}.js">', "<\/script>"].join(""), t)
    }, o.rich = function (t) {
        return t.content
    }, o.slide = function (t, i) {
        for (var n = [], r = t.materials, e = 0; e < r.length; e++) {
            var o = r[e];
            "string" != typeof o && (o = s(o, i, !0)), n.push(o)
        }
        t.html = "<div>" + n.join("</div><div>") + "</div>";
        var a = i.response.placement.container;
        return t.width = i.width || a.width, t.height = i.height || a.height, f._('<div id="bd_ec_clb_asp" style="width:{width:number}px;height:{height:number}px;overflow:hidden;">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G("bd_ec_clb_asp");var pages = container.childNodes;var pl = 0;for (var i = 0; i < pages.length; i++) {if (pages[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = ""; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = "none";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); };})();<\/script>', t)
    }, t.exports = {vn: s}
}, function (t, i, n) {
    var o = n(4), a = n(1), r = n(18), e = n(7), s = n(0);
    t.exports = {
        be: {
            BAIDU_CLB_fillSlot: !0,
            BAIDU_CLB_singleFillSlot: !0,
            BAIDU_CLB_fillSlotWithSize: !0,
            BAIDU_CLB_fillSlotAsync: !0
        }, Jr: function () {
            var t;
            try {
                var i = window.BAIDU_CLB_SLOT_ID;
                for (var n in window.BAIDU_CLB_SLOT_ID = null, i && (t = o.Wt({
                    slotId: i,
                    productLine: "clb",
                    isAsync: !1
                }), o.Vt(t), o.Xt()), this.be) e.Ri(n, this.Ie);
                this.ke()
            } catch (r) {
            }
        }, Ae: function () {
        }, Ie: function (t, i) {
            var n;
            t && ((n = o.Wt({
                slotId: t,
                productLine: "clb",
                isAsync: !!i
            })).containerId = i || n.containerId, o.Vt(n), o.Xt())
        }, ke: function () {
            try {
                e.Ri("BAIDU_CLB_prepareMoveSlot", this.xe), e.Ri("BAIDU_CLB_setConfig", s.P(e, e.Ni)), e.Ri("BAIDU_CLB_addOrientation", s.P(r, r.sr)), e.Ri("BAIDU_CLB_addSlot", this.Ae), e.Ri("BAIDU_CLB_enableAllSlots", this.Ae), e.Ri("BAIDU_CLB_preloadSlots", this.Ae), e.Ri("BAIDU_DUP_addSlotStatusCallback", this.Ae)
            } catch (t) {
            }
        }, xe: function (t) {
            try {
                for (var i = 0, n = t + "_" + i; o.jt(n) && 0 !== o.jt(n)[0];) {
                    var r = o.jt(n);
                    o.qt(r, a.K), n = t + "_" + ++i
                }
            } catch (e) {
            }
        }
    }
}, function (t, i, n) {
    var u = n(4);
    t.exports = {
        Jr: function () {
            var t, i = window.cpro_id;
            window.cpro_id = null, i && (t = u.Wt({slotId: i, productLine: "union", isAsync: !1}), u.Vt(t));
            var n, r, e = window.cproArray;
            if (window.cproArray = null, e) for (n = 0, r = e.length; n < r; n++) t = u.Wt({
                slotId: e[n].id,
                productLine: "union",
                isAsync: !0
            }), u.Vt(t);
            var o = window.cpro_mobile_slot;
            if (window.cpro_mobile_slot = null, o) for (n = 0, r = o.length; n < r; n++) {
                var a = o[n];
                for (var s in (t = u.Wt({
                    slotId: a.id,
                    productLine: "union",
                    isAsync: !0
                })).styleOpenApi = t.styleOpenApi || {}, a) s && a[s] && a.hasOwnProperty(s) && (t.styleOpenApi[s] = a[s]);
                u.Vt(t)
            }
            u.Xt()
        }
    }
}, function (t, i, n) {
    var s = n(4);
    t.exports = {
        Jr: function () {
            this.delieveryObjArray = this.delieveryObjArray || [], window.BAIDU_DUP = window.BAIDU_DUP || [], window.BAIDU_DUP && window.BAIDU_DUP instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.BAIDU_DUP), window.BAIDU_DUP = []), this.ke(), this.Xt()
        }, ke: function () {
            window.BAIDU_DUP = this, window.BAIDU_DUP.load = !0
        }, Xt: function () {
            for (var t, i = 0, n = this.delieveryObjArray.length; i < n; i++) {
                var r = this.delieveryObjArray[i];
                if (r instanceof Array && 2 <= r.length) {
                    var e = r[0], o = r[1], a = r[2];
                    if ("fill" !== e && "fillAsync" !== e || !o) continue;
                    (t = s.Wt({
                        slotId: o,
                        productLine: "dup",
                        isAsync: "fillAsync" === e
                    })).containerId = a || t.containerId, s.Vt(t)
                }
            }
            this.delieveryObjArray = [], s.Xt()
        }, push: function (t) {
            this.delieveryObjArray = this.delieveryObjArray && [], this.delieveryObjArray.push(t), this.Xt()
        }
    }
}, function (t, i, n) {
    var s = n(4), u = n(19), o = n(18), a = n(0), c = n(3), f = n(11), h = n(1);
    t.exports = {
        Jr: function () {
            this.delieveryObjArray = this.delieveryObjArray || [], window.slotbydup = window.slotbydup || [], window.slotbydup && window.slotbydup instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.slotbydup), window.slotbydup = []), c.slotbyds = c.slotbyds || [], c.slotbyds instanceof Array && c.domainInfo.dup && (this.delieveryObjArray = this.delieveryObjArray.concat(c.slotbyds), c.slotbyds = []), this.ke(), 0 < this.delieveryObjArray.length && this.Xt()
        }, Xt: function () {
            for (var t, i = 0, n = this.delieveryObjArray.length; i < n; i++) {
                var r = this.delieveryObjArray[i];
                if (c.domainInfo.dup || !r.isAnti) if (r.hasOwnProperty("id")) {
                    var e = r.isRelateRecomAd && r.title,
                        o = r.hasOwnProperty("isAsync") && r.isAsync || r.hasOwnProperty("async") && r.async || e,
                        a = r.hasOwnProperty("coa") && r.coa;
                    t = s.Wt({
                        slotId: r.id,
                        productLine: "adcodex",
                        isAsync: o,
                        coa: a
                    }), u.dr(t, r), t.containerId = r.container || t.containerId, t.display = r.display, t.ftpc = r.ftpc || !1, t.size = r.size || "", t.pcwd = r.pcwd || "", t.pchd = r.pchd || "", t.exps = r.exps || "", t.isAutoAd = r.isAutoAd || !1, t.isAnti = r.isAnti || "", t.startTime = r.startTime || 0, e && (t.title = r.title), s.Vt(t)
                } else this.Se(r); else (c.slotbyds = c.slotbyds || []).push(r)
            }
            this.delieveryObjArray = [], s.Xt()
        }, ke: function () {
            window.slotbydup = this, window.slotbydup.load = !0
        }, push: function (t) {
            this.delieveryObjArray = this.delieveryObjArray && [], this.delieveryObjArray.push(t), this.Xt()
        }, Se: function (t) {
            var i = t.addOrientation;
            for (var n in i && a.k(i) && o.sr.apply(o, i), h.dt) if (h.dt.hasOwnProperty(n)) {
                var r = h.dt[n], e = t[r];
                a.A(e) && f.gn(r, e)
            }
        }
    }
}, function (t, i, n) {
    var a = n(1), r = n(2), o = n(0), s = n(6), e = n(3), u = n(4), c = n(12), f = n(19);
    window.__delivery_global_ = window.__delivery_global_ || {};
    var h = window.__delivery_global_;
    t.exports = {
        Jr: function () {
            h.dupApi = h.dupApi || [], h.api = h.api || [];
            var t = [], i = h.dupApi, n = h.api;
            o.k(i) && (t = t.concat(i)), o.k(n) && (t = t.concat(n)), h.dupApi = h.api = this;
            for (var r = 0, e = t.length; r < e; r++) this.push(t[r])
        }, push: function (t) {
            try {
                var i = t.container;
                if (!document.getElementById(i)) return !1;
                var n = t.apiInfo, r = n && n.coa || {},
                    e = u.Wt({slotId: t.id, productLine: "asd", isAsync: !0, coa: r});
                f.dr(e, n), e.isDsFlow = !0, e.proxy = t.proxy, e.exps = t.exps, e.containerId = i, u.Vt(e), e.response = t.adInfo, e.response.painter = r.painter || e.response.painter, e.containerInfo = e.response.placement.container || {}, e.paramObj = c.An(e), e.paramObj.dtm = a.H, u.processSlot(e), this.Xt(e)
            } catch (o) {
                s.Pt(a.ot, o)
            }
        }, Xt: function (t) {
            !e.ti && window.postMessage && (e.ti = !0, r.At(window, "message", o.P(u, u.ii))), n(27).Kr(t)
        }
    }
}, function (t, i, n) {
    var o = n(1), a = n(2), s = n(6), u = n(0), r = n(5), e = n(15), c = n(3), f = n(4), h = n(12), d = n(9), l = n(42),
        v = n(20);
    t.exports = {
        Jr: function () {
            try {
                if (!c.expId && !r.baiduboxapp) if (c.expId = "110011", 0 === h.Pn("slotParam", "dis")) {
                    var t = this.De();
                    this.Ce(t)
                }
            } catch (i) {
                s.Pt(o.et, i, {pos: "autoAds"})
            }
        }, De: function () {
            return f.Wt({slotId: o.$, isAsync: !0})
        }, Ce: function (t) {
            t.paramObj = h.ri(t), t.paramObj.dcb = o.M, t.paramObj.dtm = o.Q, t.paramObj.dc = o.Z;
            var i = this.Te() ? 1 : 0, n = v.zt(t.domainInfo.pos);
            l.Ee(t.paramObj);
            var r = h.ei(t.paramObj, i, n), e = o.U + o.N + o.it + "?" + r;
            1 == i && n && (e = o.U + "//" + c.domainInfo.pos + "/" + o.nt + "?" + r), a.kt(u.P(this, a.Ct, e))
        }, Gr: function (t, i) {
            try {
                i instanceof Array && document.querySelector && this.Pe(i)
            } catch (n) {
                s.Pt(o.et, n, {pos: "autoDupCallback"})
            }
        }, Pe: function (t) {
            t = l.Oe(t);
            for (var i = 0; i < t.length; i++) {
                var n = t[i], r = n.tuid, e = n.placement;
                r && u.x(e) && (this.Me(r, e.processor, e.position, n), s.Pi("autoDupLog", {
                    tuid: r,
                    ltu: encodeURIComponent(h.Pn("browserParam", "ltu")),
                    psi: h.Pn("slotParam", "psi")
                }))
            }
        }, Me: function (t, i, n, r) {
            var e = n && document.querySelector(n), o = "";
            switch (i = parseInt(i, 10)) {
                case 0:
                    e = (o = e) && o.parentNode;
                    break;
                case 1:
                    o = this.Ue(e);
                    break;
                case 2:
                    o = this.Be(e)
            }
            this.Re(t, o, e, r)
        }, Ue: function (t) {
            var i = t && t.children;
            if (i && 1 < i.length && t.scrollHeight > window.screen.height) {
                var n = i.length;
                return i[Math.ceil(n / 2)]
            }
        }, Be: function (t) {
            var i = t && t.children;
            if (i && 0 < i.length) return i[i.length - 1]
        }, Re: function (t, i, n, r) {
            if (!i || !n) return !1;
            var e = document.createElement("div");
            e.id = "_" + Math.random().toString(36).slice(2);
            for (var o = this.Le(t, e.id, r, e), a = 0; a < o.length; a++) e.appendChild(o[a]);
            n.insertBefore(e, i)
        }, Le: function (t, i, n) {
            var r = this.Ne(t, i, n);
            return this.Fe(r)
        }, Fe: function (t) {
            var i = document.createElement("script");
            return i.text = u.h('(window.slotbydup = window.slotbydup || []).push({ id:"{tuid}", container:"{containerId}", exps:"{exps}", isAutoAd:true, coa:{coa}, isAnti:{isAnti}});', t), [i]
        }, Ne: function (t, i, n) {
            var r = n.userdefine;
            return r = window.JSON && window.JSON.stringify && u.x(r) && JSON.stringify(r), {
                tuid: t,
                containerId: i,
                exps: d.rn(o.rt, n.exps),
                coa: r || "{}",
                isAnti: this.Te(),
                token: n.token
            }
        }, Te: function () {
            return !(!c.domainInfo.dup || !c.domainInfo.pos || u.x(window[o.ct]) && 0 === e.Ii("isblock"))
        }
    }
}, function (t, i, n) {
    var o = n(9), h = n(43), d = n(3);
    t.exports = {
        Ee: function (t) {
            var i = decodeURIComponent(t.ltu), n = h.autoExpAdInfo();
            for (var r in n) if (n.hasOwnProperty(r) && -1 < i.indexOf(n[r].partten)) {
                var e = o.en({percent: 30, expId: r, baseId: n[r].baseExp});
                d.expId = o.rn(d.expId, e), t.exps = o.rn(t.exps, e);
                break
            }
        }, Oe: function (t) {
            var i = d.expId;
            if (i && "string" == typeof i) {
                for (var n = i.split(","), r = h.autoExpAdInfo(), e = [], o = t, a = 0; a < n.length; a++) {
                    var s = r[n[a]];
                    if (s && s.adInfo) {
                        e = s.adInfo;
                        break
                    }
                }
                for (var u = 0; u < e.length; u++) {
                    var c = e[u], f = {
                        tuid: c.tuid,
                        placement: {position: c.position, processor: c.processor},
                        userdefine: c.coa,
                        exps: c.tuidExp,
                        token: c.token
                    };
                    o.push(f)
                }
                return o
            }
        }
    }
}, function (t, i) {
    t.exports = {
        coaInfo: {}, autoExpAdInfo: function () {
            return {}
        }
    }
}, function (t, i, n) {
    var a = n(0), s = {};
    t.exports = {
        te: function (t, i, n) {
            if (i) {
                var r = document.createElement("script");
                r.type = "text/javascript", r.async = !0, r.src = i;
                var e = a.P(this, this.je, t, r);
                r.onload = r.onerror = r.onreadystatechange = e;
                var o = document.getElementsByTagName("script")[0];
                o.parentNode.insertBefore(r, o), s[t] = n
            }
        }, je: function (t, i, n) {
            n = 3 === arguments.length ? (i = i, n) : i = t;
            var r = s[i];
            n && /loaded|complete|undefined/.test(n.readyState) && (n.onload = n.onerror = n.onreadystatechange = null, n = undefined, r && r())
        }
    }
}, function (t, i, n) {
    var a = n(1), s = n(2), u = n(4), c = n(14), f = n(13), h = n(10), d = n(16), l = n(46), r = n(11), v = n(0),
        e = n(5), o = n(47), p = !e.ie || 8 <= e.ie;
    t.exports = {
        He: function (n) {
            var t = s.pt(n);
            r.At(t, "mouseover", function (t) {
                var i = t.target || t.srcElement;
                "iframe" !== i.tagName.toLowerCase() && "iframe" !== i.nodeName.toLowerCase() || l.We("mouseover", n.id)
            })
        }, ze: function (t) {
            if (t.isUnion) {
                var i = o.Ve(t), n = o.ze(t);
                return n && o.qe(i, t.containerId), n
            }
            return !0
        }, Je: function (t, i) {
            0 === i.complementType && (t.style.width = i.width + "px", t.style.height = i.height + "px", t.style.display = "inline-block")
        }, render: function (t) {
            u.Gt(t.id, a.X);
            var i = s.pt(t);
            if (!u.wi(t)) return u.Gt(t.id, a.K), !1;
            var n = t.containerInfo.slide, r = n && !v.f(n) && p;
            if (r && (l.Ge(t), this.He(t)), this.ze(t)) if (d.Di(t), h.renderRichMaterial(t)) p && setTimeout(function () {
                l.We("adloaded", t.id)
            }, 800); else {
                var e = u.processSlotInfo(t);
                t.width = e.width, t.height = e.height, this.Je(i, t);
                var o = c.getFrameHTML(t);
                i.innerHTML = o, f.regisetViewWatch(t), t.isPdbAd || u.Gt(t.id, a.K), r && setTimeout(function () {
                    l.We("adloaded", t.id)
                }, 800)
            }
        }
    }
}, function (t, i, n) {
    var v = n(2), e = n(11), p = n(4), _ = {}, w = {}, r = !1, u = {up: {}, down: {}, left: {}, right: {}};
    t.exports = {
        Xe: function (t, i) {
            var n = p.jt(t), r = v.pt(n);
            if (r) {
                var e = r.getElementsByTagName("iframe")[0];
                i = JSON.stringify(i), e.contentWindow.postMessage(i, "*")
            }
        }, Ke: function (t) {
            return window.getComputedStyle ? window.getComputedStyle(t).width : t.currentStyle.width
        }, Ye: function () {
            var n = this;
            (window.addEventListener || window.attachEvent) && JSON && JSON.parse && e.At(window, "message", function r(t) {
                if ("string" != typeof t.data) return !1;
                var i = JSON.parse(t.data);
                if (!i.title || "baidudup" !== i.title) return !1;
                if ("invokeMethod" === i.type) switch (i.method) {
                    case"expand":
                        n.$e(i.parameters[0]);
                        break;
                    case"close":
                        n.Qe(i.parameters[0])
                }
            }), e.At(window, "scroll", function () {
                n.Ze()
            }), e.At(window, "resize", function () {
                n.Ze()
            })
        }, Ze: function () {
            var t = u;
            for (var i in t) for (var n in t[i]) {
                var r = t[i][n];
                if (!r.isExpand) return;
                var e, o = r.origin, a = o.getElementsByTagName("iframe")[0], s = r.originWidth;
                switch (i) {
                    case"up":
                    case"down":
                        e = parseInt(this.Ke(o), 10), a.style.left = 0;
                        break;
                    case"left":
                        e = parseInt(this.Ke(o), 10), a.style.right = e - s + "px";
                        break;
                    case"right":
                        e = parseInt(this.Ke(o), 10), a.style.left = 0
                }
            }
        }, to: function (t, i, n, r, e, o, a) {
            if (!u[t][i]) {
                var s = u[t][i] = {};
                s.isExpand = !0, s.origin = n, s.originWidth = r, s.originHeight = e, s.targetWidth = o, s.targetHeight = a
            }
        }, io: function (t, i, n, r, e, o) {
            this.to("up", t, i, n, r, e, o);
            var a = i.getElementsByTagName("iframe")[0];
            a.style.bottom = 0, a.style.left = 0
        }, no: function (t, i, n, r, e, o) {
            this.to("down", t, i, n, r, e, o);
            var a = i.getElementsByTagName("iframe")[0];
            a.style.top = 0, a.style.left = 0
        }, ro: function (t, i, n, r, e, o) {
            this.to("left", t, i, n, r, e, o);
            var a = i.getElementsByTagName("iframe")[0], s = parseInt(this.Ke(i), 10);
            a.style.bottom = 0, a.style.right = s - n + "px"
        }, eo: function (t, i, n, r, e, o) {
            this.to("right", t, i, n, r, e, o);
            var a = i.getElementsByTagName("iframe")[0];
            a.style.bottom = 0, a.style.left = 0
        }, $e: function (t) {
            if (!_[t]) {
                _[t] = !0;
                var i = p.Ht(t), n = i.containerInfo, r = n.width, e = n.height, o = n.slide, a = o.slideWidth,
                    s = o.slideHeight, u = 1e3 * parseInt(o.extendTime, 10), c = parseInt(o.slideMode, 10),
                    f = parseInt(o.direction, 10), h = v.pt(i), d = h.getElementsByTagName("iframe")[0];
                if (1 === f || 2 === f ? (d.setAttribute("height", s), d.style.height = s + "px") : 3 !== f && 4 !== f || (d.setAttribute("width", a), d.style.width = a + "px"), 2 === c && 2 === f || 2 === c && 4 === f) switch (f) {
                    case 2:
                        d.setAttribute("height", s), d.style.height = s + "px";
                        break;
                    case 4:
                        d.setAttribute("width", a), d.style.width = a + "px"
                } else switch (h.style.position = "relative", d.style.position = "absolute", h.style.height = e + "px", f) {
                    case 1:
                        this.io(t, h, r, e, a, s);
                        break;
                    case 2:
                        this.no(t, h, r, e, a, s);
                        break;
                    case 3:
                        this.ro(t, h, r, e, a, s);
                        break;
                    case 4:
                        this.eo(t, h, r, e, a, s)
                }
                var l = this;
                w[t] = setTimeout(function () {
                    _[t] && l.Qe(t)
                }, Math.min(u))
            }
        }, Qe: function (t) {
            if (_[t]) {
                _[t] = !1, clearTimeout(w[t]);
                var i = p.Ht(t), n = i.containerInfo.width, r = i.containerInfo.height, e = v.pt(i),
                    o = e.getElementsByTagName("iframe")[0];
                for (var a in e.style.position = "", e.style.width = "", e.style.height = "", e.style.top = "", e.style.left = "", o.style.position = "", o.style.display = "", o.style.top = "", o.style.left = "", o.style.right = "", o.style.width = "", o.style.height = "", o.setAttribute("height", r), o.setAttribute("width", n), u) for (var s in u[a]) s === t && (u[a][s].isExpand = !1)
            }
        }, Ge: function (t) {
            t = p.Ht(t.slotId), v.pt(t).style.textAlign = "left", r || (r = !0, this.Ye())
        }, We: function (t, i) {
            var n, r = p.Ht(i).containerInfo.slide;
            r && (n = r.trigger);
            var e, o = 0;
            e = n, "[object Array]" === Object.prototype.toString.call(e) ? o = n[0] : n && (o = n);
            ["", "BEFORE_PAGELOAD", "AFTER_PAGECLOSE", "PAGE_PERCENT", "mouseover", "click", "adloaded", "SLIP"][o] === t && this.Xe(i, {
                title: "baidudup",
                type: "eventHappen",
                parameters: [t]
            })
        }
    }
}, function (t, i, n) {
    var s = n(28), r = n(2), u = "inlay", c = "linkunit", e = {inlay: 25, linkunit: 25}, o = {};
    t.exports = {
        ze: function (t) {
            if (!t.isUnion) return !0;
            var i = this.Ve(t);
            return this.oo(i) < e[i]
        }, oo: function (t) {
            var i = o[t] || {}, n = 0;
            for (var r in i) i.hasOwnProperty(r) && (n += i[r]);
            return n
        }, qe: function (t, i) {
            var n = o[t];
            return n || (o[t] = {}, n = o[t]), r.g(i) ? n[i] = 1 : n[i] ? n[i]++ : n[i] = 1, !0
        }, Ve: function (t) {
            var i = u, n = t.response;
            if (!n) return i;
            var r = n.placement;
            if ((s.ve(n) || s._e(n)) && (i = u), r && r.fillstyle) for (var e = n.placement.fillstyle.elements || [], o = 0, a = e.length; o < a; o++) if (5 === e[o]) return c;
            return i
        }
    }
}, function (t, i, n) {
    var u = n(1), r = n(0), c = n(2), f = n(4), h = n(16), d = n(14), l = n(10);
    t.exports = {
        ao: function (t) {
            var i = ['<div style="box-sizing: content-box;width:{width}px;height:{height}px;position:relative;margin:0 auto;">', "{iframeHtml}", "</div>"].join("");
            return r.h(i, t)
        }, Je: function (t, i) {
            0 === i.complementType && (t.style.width = i.width + "px", t.style.height = i.height + "px", t.style.display = "inline-block")
        }, render: function (t) {
            if (f.Gt(t.id, u.X), !f.wi(t)) return !1;
            var i = c.pt(t);
            if (h.Di(t), !l.renderRichMaterial(t)) {
                var n = f.processSlotInfo(t);
                if (t.width = n.width, t.height = n.height, 2 === n.sizeType || 5 === n.sizeType) {
                    var r = t.response.pdb_deliv.deliv_des;
                    if (r && r._html) {
                        var e = (r = r._html).type;
                        "text" !== e && "image" !== e && "flash" !== e || (r.width = t.width, r.height = t.height)
                    }
                }
                this.Je(i, t);
                var o = d.getFrameHTML(t), a = {id: t.id, width: n.width, height: n.height, iframeHtml: o},
                    s = this.ao(a);
                s = 1 === t.proxy ? c.Ot(i, s) : s, i.innerHTML = s, t.isPdbAd || f.Gt(t.id, u.K)
            }
        }
    }
}, function (t, i, n) {
    var c = n(1), o = n(0), e = n(8), f = n(2), h = n(4), d = n(14), l = n(16), v = n(10);
    t.exports = {
        so: "show",
        uo: "upSlideShow",
        co: "downSlideShow",
        fo: 2,
        ho: 1,
        "do": String.fromCharCode(65088),
        lo: String.fromCharCode(65087),
        vo: function (t, i) {
            var n = !1, r = t.containerInfo.location, e = t.styleOpenApi, o = 2 === e.apType;
            if (2 === r && !o) return !1;
            (1 !== i.sizeType || e.rsi0 || e.rsi1 || e.cpro_w || e.cpro_h) && (n = 3.4 < i.width / i.height);
            return n
        },
        po: function (t) {
            var i = t.containerInfo, n = t.response.placement.fillstyle || {}, r = parseFloat(n.opacity || .9),
                e = n.backgroundColor || "#000";
            t.styleOpenApi.sizeType && (t.styleOpenApi.sizeType = 2), i.sizeType = 2;
            var o = h.processSlotInfo(t);
            o.backgroundOpacity = r, o.backgroundColor = e;
            var a = 2 === i.location ? 2 : 3;
            return o.locationType = a, o.containerId = t.containerId, o.floatingState = this._o(t, a), o
        },
        ao: function (t) {
            var i = ["{closeBtnHtml}", "{iframeHtml}"].join("");
            return o.h(i, t)
        },
        wo: function (t) {
            var i = "", n = "", r = "0", e = 0;
            return e = 2 === t.locationType ? (i = "0 0 40px 40px", r = t.height, n = t.floatingState === this.so ? this.lo : this["do"], this.ho) : (i = "40px 40px 0 0", r = -20, n = t.floatingState === this.so ? this["do"] : this.lo, this.fo), {
                domId: t.containerId,
                borderRadius: i,
                top: r,
                btnTag: n,
                lineHeight: e
            }
        },
        mo: function (t) {
            var i = ["<div", ' class="closeBtn"', ' style="', "position:absolute;", "left:50%;", "top:{top}px;", "margin-left: -20px;", "width:40px;", "height:20px;", "background-color:#4a4a4a;", "cursor:pointer;", "border-radius:{borderRadius};", "z-index:2147483647;", "color:#ffffff;", "font-weight:600;", "box-sizing:border-box;", "font-size:14px;", "font-family:'Microsoft Yahei',sans-serif;", 'line-height:{lineHeight};">', "{btnTag}", "</div>"].join(""),
                n = this.wo(t);
            return o.h(i, n)
        },
        Je: function (t, i) {
            var n = 0;
            i.floatingState !== this.so && "ontouchend" in document && 0 < i.height && (n = -1 * (i.height + 20));
            var r = 2 === i.locationType ? "top" : "bottom", e = 2 === i.locationType ? "border-bottom" : "border-top";
            t.style.cssText = ["box-sizing: content-box;", "display:block", "position:fixed", "z-index:2147483647;", "left:0", r + ":" + n + "px", "background-color:" + i.backgroundColor, "opacity:" + i.backgroundOpacity, "text-align:center", "width:" + i.width + "px", "height:" + i.height + "px", e + ":2px solid #4a4a4a"].join(";")
        },
        go: function (t, i, n, r) {
            var e = 2 === i.locationType ? "top" : "bottom";
            "hidden" === n.getAttribute("state") ? this.yo(e, n, r) : this.bo(e, n, r)
        },
        yo: function (t, i, n) {
            i.setAttribute("state", "show"), i.style.transition = t + " 0.75s", i.style["-webkit-transition"] = t + " 0.75s", i.style["-moz-transition"] = t + " 0.75s", i.style["-o-transition"] = t + " 0.75s", i.style[t] = "0px", "top" === t ? (n.style.lineHeight = this.ho, n.innerText = this.lo) : (n.style.lineHeight = this.fo, n.innerText = this["do"])
        },
        bo: function (t, i, n) {
            i.setAttribute("state", "hidden");
            var r = e.Wi(i, "height");
            r = r && parseInt(r, 10), i.style.transition = t + " 0.75s", i.style["-webkit-transition"] = t + " 0.75s", i.style["-moz-transition"] = t + " 0.75s", i.style["-o-transition"] = t + " 0.75s", i.style[t] = -1 * r + "px", "top" === t ? (n.style.lineHeight = this.fo, n.innerText = this["do"]) : (n.style.lineHeight = this.ho, n.innerText = this.lo)
        },
        render: function (t) {
            if (!h.wi(t)) return !1;
            h.Gt(t.id, c.X), this.id = t.id;
            var i = this.po(t);
            l.Di(t);
            var n = v.renderRichMaterial(t), r = f.pt(t);
            if (!n && r && this.vo(t, i)) {
                this.Je(r, i);
                var e = this.mo(i);
                this.Io(i, t);
                var o = {closeBtnHtml: e, iframeHtml: d.getFrameHTML(t)}, a = this.ao(o);
                r.innerHTML = a;
                var s = r.getElementsByClassName("closeBtn")[0];
                if (s) {
                    var u = this;
                    f.At(s, "click", function () {
                        u.go(t, i, r, this)
                    })
                }
                t.isPdbAd || h.Gt(t.id, c.K)
            }
        },
        oe: function (t, i, n) {
            var r = n.parentElement;
            if (document.body && r) {
                var e = r.getElementsByClassName("closeBtn")[0];
                t = "2" === t ? "top" : "bottom", f.At(document.body, "touchstart", o.P(this, this.ko)), f.At(document.body, "touchend", o.P(this, this.Ao, r, e, t, i))
            }
        },
        ko: function (t) {
            this.startY = t.targetTouches[0] && t.targetTouches[0].pageY
        },
        Ao: function (t, i, n, r, e) {
            this[r] = this[r] || !1, this.pageY = t.changedTouches[0] && t.changedTouches[0].pageY;
            var o = this.pageY - this.startY;
            (o < -10 && !this[r] && e === this.uo || 10 < o && !this[r] && e === this.co) && (this[r] = !0, this.yo(r, i, n))
        },
        _o: function (t, i) {
            return t.styleOpenApi && t.styleOpenApi.floatingState ? t.styleOpenApi.floatingState : 2 === i ? this.uo : this.so
        },
        Io: function (t, i) {
            if (2 === t.sizeType) {
                var n = i.response.pdb_deliv.deliv_des;
                if (n && n._html) {
                    var r = (n = n._html).type;
                    "text" !== r && "image" !== r && "flash" !== r || (n.width = i.width, n.height = i.height)
                }
            }
        }
    }
}, function (t, i, n) {
    var e = n(1), o = n(0), a = n(2), r = n(4), s = n(12), u = n(7), c = n(13), f = n(5), h = n(16);
    t.exports = {
        xo: {}, So: 0, Do: "BAIDU_DUP_MOBILE_INSIDE_TEXT_", Co: 40, To: 3, Eo: 0, Po: {}, render: function (t) {
            r.Gt(t.id, e.X), h.Di(t);
            var i = a.pt(t);
            if (i) {
                u.Ri(this.Do, o.P(this, this.Oo));
                var n = this.Mo(i);
                n && ("complete" === document.readyState ? (this.Uo(t, i), this.Bo(n)) : a.At(document, "readystatechange", o.P(this, function () {
                    "complete" === document.readyState && (this.Uo(t, i), this.Bo(n))
                })), c.regisetViewWatch(t), r.Gt(t.id, e.K))
            }
        }, Mo: function (t) {
            var i = t.parentNode;
            return i.tagName && "body" === i.tagName.toLowerCase() ? i : this.Mo(i)
        }, Uo: function (t, i) {
            t.paramObj.dcb = this.Do, t.paramObj.dtm = e.z, t.paramObj.cec = "utf-8";
            var n = s.getPmpRequestUrl(t), r = document.createElement("script");
            r.src = n, r.charset = t.paramObj.cec, i.appendChild(r)
        }, Bo: function (t) {
            for (var i = t.childNodes, n = 0; n < i.length; n++) {
                var r = i[n];
                if (a.Tt(r)) switch (r.nodeType) {
                    case 3:
                        var e;
                        f.ie < 9 && r.nodeValue && (e = r.nodeValue), r.textContent && (e = r.textContent), e && o.b(e) && 0 < e.length && this.Ro(r);
                        break;
                    default:
                        this.Bo(r)
                }
            }
        }, Ro: function (t) {
            var i = t.parentNode;
            i.innerHTML && (this.xo["item_" + this.So] = i, this.So++)
        }, Oo: function () {
            var t = arguments[0] && arguments[0].slots[0] && arguments[0].slots[0].ads[0];
            if (t) {
                var i = t.data && t.data.meta;
                if (i && 0 !== i.length) for (var n in this.xo) {
                    var r = this.xo[n];
                    if (document.contains(r)) {
                        for (var e = r.innerHTML, o = 0; o < i.length; o++) e = this.Lo(i[o], e);
                        if (r.innerHTML = e, this.Eo === this.Co) break
                    }
                }
            }
        }, Lo: function (t, i) {
            if (!t || !i) return i;
            var n = t.title, r = new RegExp(n, "i");
            if (n && 0 < n.length && r.test(i) && this.No(n, i) && this.Fo(n, i)) {
                var e = '<a href="' + (t.curl || "") + '" target="_blank" style="color:#38f;text-decoration:none">' + n + "</a>";
                if (this.Po[n] || (this.Po[n] = 0), this.Eo < this.Co && this.Po[n] < this.To) return this.Eo++, this.Po[n]++, i.replace(r, e)
            }
            return i
        }, No: function (t, i) {
            var n = i.indexOf(t), r = n - 4, e = n + t.length, o = "</a>" === i.substr(r, 4),
                a = "<a " === i.substr(e, 3);
            return !o && !a
        }, Fo: function (t, i) {
            var n = new RegExp("<[^>]*" + t + "[^<]*>", "i"), r = new RegExp(">[^<]*" + t + "[^>]*</", "i");
            return !n.test(i) && !r.test(i)
        }
    }
}, function (t, i, n) {
    var s = n(1), u = n(0), c = n(2), f = n(4), h = n(14), d = n(24);
    t.exports = {
        render: function (t) {
            f.Gt(t.id, s.X);
            var i = f.processSlotInfo(t);
            t.width = i.width, t.height = i.height;
            var n = d.Lr(t), r = c.pt(t), e = h.wn(t),
                o = u.h('<iframe width="{iframeWidth}" frameborder="0" height="{iframeHeight}" scrolling="no" src="{url}"></iframe>', e),
                a = c.Ot(r, o, n);
            r.innerHTML = a, f.Gt(t.id, s.K)
        }
    }
}, function (t, i, n) {
    var r = n(9), e = n(53);
    t.exports = {
        setExpNumber: function (t, i) {
            t.paramObj.exps = r.rn(i, t.paramObj.exps)
        }, getPainter2ExpNumber: function (t) {
            return e.PAINTER_EXPS[t]
        }, getDeliveryEntrance2ExpNumber: function (t) {
            return e.DELIVERY_ENTRANCE_EXPS[t]
        }
    }
}, function (t, i) {
    t.exports = {
        DELIVERY_ENTRANCE_EXPS: {
            asd: "110009",
            clb: "110250",
            dup: "110251",
            adcodex: "110252",
            union: "110254"
        },
        PAINTER_EXPS: {
            "ds.inlay": "110257",
            "mobile.float": "110258",
            "mobile.inlayFix": "110259",
            "mobile.insideText": "110260",
            inlayFix: "110261",
            expand: "110262",
            insideText: "110264",
            dynamicFloat: "110265",
            bottomSearchBar: "110267",
            wapInsert: "110268"
        }
    }
}, function (t, i, n) {
    var r = n(1), e = String.fromCharCode(Math.floor(26 * Math.random()) + 97),
        o = String.fromCharCode(Math.floor(26 * Math.random()) + 97);
    r.F || (r.Cn = r.N + e + "c" + o + "m?", r.F = r.U + r.Cn)
}]);