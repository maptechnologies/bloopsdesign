! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    var n = [],
        i = n.slice,
        o = n.concat,
        s = n.push,
        r = n.indexOf,
        a = {},
        l = a.toString,
        c = a.hasOwnProperty,
        u = {},
        d = "1.11.1",
        p = function(t, e) {
            return new p.fn.init(t, e)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        f = /^-ms-/,
        m = /-([\da-z])/gi,
        g = function(t, e) {
            return e.toUpperCase()
        };

    function y(t) {
        var e = t.length,
            n = p.type(t);
        return "function" !== n && !p.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }
    p.fn = p.prototype = {
        jquery: d,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : i.call(this)
        },
        pushStack: function(t) {
            var e = p.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return p.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(p.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, p.extend = p.fn.extend = function() {
        var t, e, n, i, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || p.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (o = arguments[a]))
                for (i in o) t = r[i], r !== (n = o[i]) && (c && n && (p.isPlainObject(n) || (e = p.isArray(n))) ? (e ? (e = !1, s = t && p.isArray(t) ? t : []) : s = t && p.isPlainObject(t) ? t : {}, r[i] = p.extend(c, s, n)) : void 0 !== n && (r[i] = n));
        return r
    }, p.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === p.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === p.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !p.isArray(t) && t - parseFloat(t) >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== p.type(t) || t.nodeType || p.isWindow(t)) return !1;
            try {
                if (t.constructor && !c.call(t, "constructor") && !c.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            if (u.ownLast)
                for (e in t) return c.call(t, e);
            for (e in t);
            return void 0 === e || c.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? a[l.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && p.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(f, "ms-").replace(m, g)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var i = 0,
                o = t.length,
                s = y(t);
            if (n) {
                if (s)
                    for (; o > i && !1 !== e.apply(t[i], n); i++);
                else
                    for (i in t)
                        if (!1 === e.apply(t[i], n)) break
            } else if (s)
                for (; o > i && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(h, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (y(Object(t)) ? p.merge(n, "string" == typeof t ? [t] : t) : s.call(n, t)), n
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (r) return r.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; n > i;) t[o++] = e[i++];
            if (n != n)
                for (; void 0 !== e[i];) t[o++] = e[i++];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            for (var i = [], o = 0, s = t.length, r = !n; s > o; o++) !e(t[o], o) !== r && i.push(t[o]);
            return i
        },
        map: function(t, e, n) {
            var i, s = 0,
                r = t.length,
                a = [];
            if (y(t))
                for (; r > s; s++) null != (i = e(t[s], s, n)) && a.push(i);
            else
                for (s in t) null != (i = e(t[s], s, n)) && a.push(i);
            return o.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, o, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), p.isFunction(t) ? (n = i.call(arguments, 2), (o = function() {
                return t.apply(e || this, n.concat(i.call(arguments)))
            }).guid = t.guid = t.guid || p.guid++, o) : void 0
        },
        now: function() {
            return +new Date
        },
        support: u
    }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        a["[object " + e + "]"] = e.toLowerCase()
    });
    var v = function(t) {
        var e, n, i, o, s, r, a, l, c, u, d, p, h, f, m, g, y, v, b, x = "sizzle" + -new Date,
            w = t.document,
            S = 0,
            T = 0,
            C = st(),
            k = st(),
            $ = st(),
            E = function(t, e) {
                return t === e && (d = !0), 0
            },
            L = "undefined",
            A = 1 << 31,
            P = {}.hasOwnProperty,
            _ = [],
            I = _.pop,
            z = _.push,
            M = _.push,
            D = _.slice,
            N = _.indexOf || function(t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] === t) return e;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = H.replace("w", "w#"),
            W = "\\[" + j + "*(" + H + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + j + "*\\]",
            q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            R = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            B = new RegExp("^" + j + "*," + j + "*"),
            X = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            Y = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
            U = new RegExp(q),
            V = new RegExp("^" + F + "$"),
            Q = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
            },
            Z = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = /'|\\/g,
            nt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
            it = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            M.apply(_ = D.call(w.childNodes), w.childNodes), _[w.childNodes.length].nodeType
        } catch (t) {
            M = {
                apply: _.length ? function(t, e) {
                    z.apply(t, D.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }

        function ot(t, e, i, o) {
            var s, a, c, u, d, f, y, v, S, T;
            if ((e ? e.ownerDocument || e : w) !== h && p(e), i = i || [], !t || "string" != typeof t) return i;
            if (1 !== (u = (e = e || h).nodeType) && 9 !== u) return [];
            if (m && !o) {
                if (s = K.exec(t))
                    if (c = s[1]) {
                        if (9 === u) {
                            if (!(a = e.getElementById(c)) || !a.parentNode) return i;
                            if (a.id === c) return i.push(a), i
                        } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(c)) && b(e, a) && a.id === c) return i.push(a), i
                    } else {
                        if (s[2]) return M.apply(i, e.getElementsByTagName(t)), i;
                        if ((c = s[3]) && n.getElementsByClassName && e.getElementsByClassName) return M.apply(i, e.getElementsByClassName(c)), i
                    }
                if (n.qsa && (!g || !g.test(t))) {
                    if (v = y = x, S = e, T = 9 === u && t, 1 === u && "object" !== e.nodeName.toLowerCase()) {
                        for (f = r(t), (y = e.getAttribute("id")) ? v = y.replace(et, "\\$&") : e.setAttribute("id", v), v = "[id='" + v + "'] ", d = f.length; d--;) f[d] = v + mt(f[d]);
                        S = tt.test(t) && ht(e.parentNode) || e, T = f.join(",")
                    }
                    if (T) try {
                        return M.apply(i, S.querySelectorAll(T)), i
                    } catch (t) {} finally {
                        y || e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(R, "$1"), e, i, o)
        }

        function st() {
            var t = [];
            return function e(n, o) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o
            }
        }

        function rt(t) {
            return t[x] = !0, t
        }

        function at(t) {
            var e = h.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function lt(t, e) {
            for (var n = t.split("|"), o = t.length; o--;) i.attrHandle[n[o]] = e
        }

        function ct(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || A) - (~t.sourceIndex || A);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function ut(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function dt(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function pt(t) {
            return rt(function(e) {
                return e = +e, rt(function(n, i) {
                    for (var o, s = t([], n.length, e), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function ht(t) {
            return t && typeof t.getElementsByTagName !== L && t
        }
        for (e in n = ot.support = {}, s = ot.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, p = ot.setDocument = function(t) {
                var e, o = t ? t.ownerDocument || t : w,
                    r = o.defaultView;
                return o !== h && 9 === o.nodeType && o.documentElement ? (h = o, f = o.documentElement, m = !s(o), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                    p()
                }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                    p()
                })), n.attributes = at(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), n.getElementsByTagName = at(function(t) {
                    return t.appendChild(o.createComment("")), !t.getElementsByTagName("*").length
                }), n.getElementsByClassName = J.test(o.getElementsByClassName) && at(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), n.getById = at(function(t) {
                    return f.appendChild(t).id = x, !o.getElementsByName || !o.getElementsByName(x).length
                }), n.getById ? (i.find.ID = function(t, e) {
                    if (typeof e.getElementById !== L && m) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, i.filter.ID = function(t) {
                    var e = t.replace(nt, it);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete i.find.ID, i.filter.ID = function(t) {
                    var e = t.replace(nt, it);
                    return function(t) {
                        var n = typeof t.getAttributeNode !== L && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== L ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                    return typeof e.getElementsByClassName !== L && m ? e.getElementsByClassName(t) : void 0
                }, y = [], g = [], (n.qsa = J.test(o.querySelectorAll)) && (at(function(t) {
                    t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && g.push("[*^$]=" + j + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + j + "*(?:value|" + O + ")"), t.querySelectorAll(":checked").length || g.push(":checked")
                }), at(function(t) {
                    var e = o.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + j + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                })), (n.matchesSelector = J.test(v = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(t) {
                    n.disconnectedMatch = v.call(t, "div"), v.call(t, "[s!='']:x"), y.push("!=", q)
                }), g = g.length && new RegExp(g.join("|")), y = y.length && new RegExp(y.join("|")), e = J.test(f.compareDocumentPosition), b = e || J.test(f.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, E = e ? function(t, e) {
                    if (t === e) return d = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === o || t.ownerDocument === w && b(w, t) ? -1 : e === o || e.ownerDocument === w && b(w, e) ? 1 : u ? N.call(u, t) - N.call(u, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return d = !0, 0;
                    var n, i = 0,
                        s = t.parentNode,
                        r = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!s || !r) return t === o ? -1 : e === o ? 1 : s ? -1 : r ? 1 : u ? N.call(u, t) - N.call(u, e) : 0;
                    if (s === r) return ct(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? ct(a[i], l[i]) : a[i] === w ? -1 : l[i] === w ? 1 : 0
                }, o) : h
            }, ot.matches = function(t, e) {
                return ot(t, null, null, e)
            }, ot.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== h && p(t), e = e.replace(Y, "='$1']"), !(!n.matchesSelector || !m || y && y.test(e) || g && g.test(e))) try {
                    var i = v.call(t, e);
                    if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return ot(e, h, null, [t]).length > 0
            }, ot.contains = function(t, e) {
                return (t.ownerDocument || t) !== h && p(t), b(t, e)
            }, ot.attr = function(t, e) {
                (t.ownerDocument || t) !== h && p(t);
                var o = i.attrHandle[e.toLowerCase()],
                    s = o && P.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;
                return void 0 !== s ? s : n.attributes || !m ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
            }, ot.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, ot.uniqueSort = function(t) {
                var e, i = [],
                    o = 0,
                    s = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(E), d) {
                    for (; e = t[s++];) e === t[s] && (o = i.push(s));
                    for (; o--;) t.splice(i[o], 1)
                }
                return u = null, t
            }, o = ot.getText = function(t) {
                var e, n = "",
                    i = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[i++];) n += o(e);
                return n
            }, (i = ot.selectors = {
                cacheLength: 50,
                createPseudo: rt,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(nt, it), t[3] = (t[3] || t[4] || t[5] || "").replace(nt, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && U.test(n) && (e = r(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(nt, it).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = C[t + " "];
                        return e || (e = new RegExp("(^|" + j + ")" + t + "(" + j + "|$)")) && C(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== L && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, n) {
                        return function(i) {
                            var o = ot.attr(i, t);
                            return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var s = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, u, d, p, h, f, m = s !== r ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                y = a && e.nodeName.toLowerCase(),
                                v = !l && !a;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild], r && v) {
                                    for (h = (c = (u = g[x] || (g[x] = {}))[t] || [])[0] === S && c[1], p = c[0] === S && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (p = h = 0) || f.pop();)
                                        if (1 === d.nodeType && ++p && d === e) {
                                            u[t] = [S, h, p];
                                            break
                                        }
                                } else if (v && (c = (e[x] || (e[x] = {}))[t]) && c[0] === S) p = c[1];
                                else
                                    for (;
                                        (d = ++h && d && d[m] || (p = h = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++p || (v && ((d[x] || (d[x] = {}))[t] = [S, p]), d !== e)););
                                return (p -= o) === i || p % i == 0 && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                        return o[x] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? rt(function(t, n) {
                            for (var i, s = o(t, e), r = s.length; r--;) t[i = N.call(t, s[r])] = !(n[i] = s[r])
                        }) : function(t) {
                            return o(t, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: rt(function(t) {
                        var e = [],
                            n = [],
                            i = a(t.replace(R, "$1"));
                        return i[x] ? rt(function(t, e, n, o) {
                            for (var s, r = i(t, null, o, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                        }) : function(t, o, s) {
                            return e[0] = t, i(e, null, s, n), !n.pop()
                        }
                    }),
                    has: rt(function(t) {
                        return function(e) {
                            return ot(t, e).length > 0
                        }
                    }),
                    contains: rt(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                        }
                    }),
                    lang: rt(function(t) {
                        return V.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(nt, it).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === f
                    },
                    focus: function(t) {
                        return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !i.pseudos.empty(t)
                    },
                    header: function(t) {
                        return G.test(t.nodeName)
                    },
                    input: function(t) {
                        return Z.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: pt(function() {
                        return [0]
                    }),
                    last: pt(function(t, e) {
                        return [e - 1]
                    }),
                    eq: pt(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: pt(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: pt(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: pt(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: pt(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[e] = ut(e);
        for (e in {
                submit: !0,
                reset: !0
            }) i.pseudos[e] = dt(e);

        function ft() {}

        function mt(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function gt(t, e, n) {
            var i = e.dir,
                o = n && "parentNode" === i,
                s = T++;
            return e.first ? function(e, n, s) {
                for (; e = e[i];)
                    if (1 === e.nodeType || o) return t(e, n, s)
            } : function(e, n, r) {
                var a, l, c = [S, s];
                if (r) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || o) && t(e, n, r)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) {
                            if ((a = (l = e[x] || (e[x] = {}))[i]) && a[0] === S && a[1] === s) return c[2] = a[2];
                            if (l[i] = c, c[2] = t(e, n, r)) return !0
                        }
            }
        }

        function yt(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function vt(t, e, n, i, o) {
            for (var s, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (!n || n(s, i, o)) && (r.push(s), c && e.push(a));
            return r
        }

        function bt(t, e, n, i, o, s) {
            return i && !i[x] && (i = bt(i)), o && !o[x] && (o = bt(o, s)), rt(function(s, r, a, l) {
                var c, u, d, p = [],
                    h = [],
                    f = r.length,
                    m = s || function(t, e, n) {
                        for (var i = 0, o = e.length; o > i; i++) ot(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []),
                    g = !t || !s && e ? m : vt(m, p, t, a, l),
                    y = n ? o || (s ? t : f || i) ? [] : r : g;
                if (n && n(g, y, a, l), i)
                    for (c = vt(y, h), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (y[h[u]] = !(g[h[u]] = d));
                if (s) {
                    if (o || t) {
                        if (o) {
                            for (c = [], u = y.length; u--;)(d = y[u]) && c.push(g[u] = d);
                            o(null, y = [], c, l)
                        }
                        for (u = y.length; u--;)(d = y[u]) && (c = o ? N.call(s, d) : p[u]) > -1 && (s[c] = !(r[c] = d))
                    }
                } else y = vt(y === r ? y.splice(f, y.length) : y), o ? o(null, r, y, l) : M.apply(r, y)
            })
        }

        function xt(t) {
            for (var e, n, o, s = t.length, r = i.relative[t[0].type], a = r || i.relative[" "], l = r ? 1 : 0, u = gt(function(t) {
                    return t === e
                }, a, !0), d = gt(function(t) {
                    return N.call(e, t) > -1
                }, a, !0), p = [function(t, n, i) {
                    return !r && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : d(t, n, i))
                }]; s > l; l++)
                if (n = i.relative[t[l].type]) p = [gt(yt(p), n)];
                else {
                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
                        for (o = ++l; s > o && !i.relative[t[o].type]; o++);
                        return bt(l > 1 && yt(p), l > 1 && mt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(R, "$1"), n, o > l && xt(t.slice(l, o)), s > o && xt(t = t.slice(o)), s > o && mt(t))
                    }
                    p.push(n)
                }
            return yt(p)
        }

        function wt(t, e) {
            var n = e.length > 0,
                o = t.length > 0,
                s = function(s, r, a, l, u) {
                    var d, p, f, m = 0,
                        g = "0",
                        y = s && [],
                        v = [],
                        b = c,
                        x = s || o && i.find.TAG("*", u),
                        w = S += null == b ? 1 : Math.random() || .1,
                        T = x.length;
                    for (u && (c = r !== h && r); g !== T && null != (d = x[g]); g++) {
                        if (o && d) {
                            for (p = 0; f = t[p++];)
                                if (f(d, r, a)) {
                                    l.push(d);
                                    break
                                }
                            u && (S = w)
                        }
                        n && ((d = !f && d) && m--, s && y.push(d))
                    }
                    if (m += g, n && g !== m) {
                        for (p = 0; f = e[p++];) f(y, v, r, a);
                        if (s) {
                            if (m > 0)
                                for (; g--;) y[g] || v[g] || (v[g] = I.call(l));
                            v = vt(v)
                        }
                        M.apply(l, v), u && !s && v.length > 0 && m + e.length > 1 && ot.uniqueSort(l)
                    }
                    return u && (S = w, c = b), y
                };
            return n ? rt(s) : s
        }
        return ft.prototype = i.filters = i.pseudos, i.setFilters = new ft, r = ot.tokenize = function(t, e) {
            var n, o, s, r, a, l, c, u = k[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (a = t, l = [], c = i.preFilter; a;) {
                for (r in (!n || (o = B.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = X.exec(a)) && (n = o.shift(), s.push({
                        value: n,
                        type: o[0].replace(R, " ")
                    }), a = a.slice(n.length)), i.filter) !(o = Q[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
                    value: n,
                    type: r,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? ot.error(t) : k(t, l).slice(0)
        }, a = ot.compile = function(t, e) {
            var n, i = [],
                o = [],
                s = $[t + " "];
            if (!s) {
                for (e || (e = r(t)), n = e.length; n--;)(s = xt(e[n]))[x] ? i.push(s) : o.push(s);
                (s = $(t, wt(o, i))).selector = t
            }
            return s
        }, l = ot.select = function(t, e, o, s) {
            var l, c, u, d, p, h = "function" == typeof t && t,
                f = !s && r(t = h.selector || t);
            if (o = o || [], 1 === f.length) {
                if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && n.getById && 9 === e.nodeType && m && i.relative[c[1].type]) {
                    if (!(e = (i.find.ID(u.matches[0].replace(nt, it), e) || [])[0])) return o;
                    h && (e = e.parentNode), t = t.slice(c.shift().value.length)
                }
                for (l = Q.needsContext.test(t) ? 0 : c.length; l-- && (u = c[l], !i.relative[d = u.type]);)
                    if ((p = i.find[d]) && (s = p(u.matches[0].replace(nt, it), tt.test(c[0].type) && ht(e.parentNode) || e))) {
                        if (c.splice(l, 1), !(t = s.length && mt(c))) return M.apply(o, s), o;
                        break
                    }
            }
            return (h || a(t, f))(s, e, !m, o, tt.test(t) && ht(e.parentNode) || e), o
        }, n.sortStable = x.split("").sort(E).join("") === x, n.detectDuplicates = !!d, p(), n.sortDetached = at(function(t) {
            return 1 & t.compareDocumentPosition(h.createElement("div"))
        }), at(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || lt("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), n.attributes && at(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || lt("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), at(function(t) {
            return null == t.getAttribute("disabled")
        }) || lt(O, function(t, e, n) {
            var i;
            return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), ot
    }(t);
    p.find = v, p.expr = v.selectors, p.expr[":"] = p.expr.pseudos, p.unique = v.uniqueSort, p.text = v.getText, p.isXMLDoc = v.isXML, p.contains = v.contains;
    var b = p.expr.match.needsContext,
        x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function S(t, e, n) {
        if (p.isFunction(e)) return p.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return p.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (w.test(e)) return p.filter(e, t, n);
            e = p.filter(e, t)
        }
        return p.grep(t, function(t) {
            return p.inArray(t, e) >= 0 !== n
        })
    }
    p.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? p.find.matchesSelector(i, t) ? [i] : [] : p.find.matches(t, p.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, p.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof t) return this.pushStack(p(t).filter(function() {
                for (e = 0; o > e; e++)
                    if (p.contains(i[e], this)) return !0
            }));
            for (e = 0; o > e; e++) p.find(t, i[e], n);
            return (n = this.pushStack(o > 1 ? p.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(S(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(S(this, t || [], !0))
        },
        is: function(t) {
            return !!S(this, "string" == typeof t && b.test(t) ? p(t) : t || [], !1).length
        }
    });
    var T, C = t.document,
        k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (p.fn.init = function(t, e) {
        var n, i;
        if (!t) return this;
        if ("string" == typeof t) {
            if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : k.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || T).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof p ? e[0] : e, p.merge(this, p.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : C, !0)), x.test(n[1]) && p.isPlainObject(e))
                    for (n in e) p.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            if ((i = C.getElementById(n[2])) && i.parentNode) {
                if (i.id !== n[2]) return T.find(t);
                this.length = 1, this[0] = i
            }
            return this.context = C, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : p.isFunction(t) ? void 0 !== T.ready ? T.ready(t) : t(p) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), p.makeArray(t, this))
    }).prototype = p.fn, T = p(C);
    var $ = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(t, e) {
        do {
            t = t[e]
        } while (t && 1 !== t.nodeType);
        return t
    }
    p.extend({
        dir: function(t, e, n) {
            for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !p(o).is(n));) 1 === o.nodeType && i.push(o), o = o[e];
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), p.fn.extend({
        has: function(t) {
            var e, n = p(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (p.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, s = [], r = b.test(t) || "string" != typeof t ? p(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, t))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? p.unique(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? p.inArray(this[0], p(t)) : p.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(p.unique(p.merge(this.get(), p(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), p.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return p.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return p.dir(t, "parentNode", n)
        },
        next: function(t) {
            return L(t, "nextSibling")
        },
        prev: function(t) {
            return L(t, "previousSibling")
        },
        nextAll: function(t) {
            return p.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return p.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return p.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return p.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return p.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return p.sibling(t.firstChild)
        },
        contents: function(t) {
            return p.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : p.merge([], t.childNodes)
        }
    }, function(t, e) {
        p.fn[t] = function(n, i) {
            var o = p.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = p.filter(i, o)), this.length > 1 && (E[t] || (o = p.unique(o)), $.test(t) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var A, P = /\S+/g,
        _ = {};

    function I() {
        C.addEventListener ? (C.removeEventListener("DOMContentLoaded", z, !1), t.removeEventListener("load", z, !1)) : (C.detachEvent("onreadystatechange", z), t.detachEvent("onload", z))
    }

    function z() {
        (C.addEventListener || "load" === event.type || "complete" === C.readyState) && (I(), p.ready())
    }
    p.Callbacks = function(t) {
        t = "string" == typeof t ? _[t] || function(t) {
            var e = _[t] = {};
            return p.each(t.match(P) || [], function(t, n) {
                e[n] = !0
            }), e
        }(t) : p.extend({}, t);
        var e, n, i, o, s, r, a = [],
            l = !t.once && [],
            c = function(d) {
                for (n = t.memory && d, i = !0, s = r || 0, r = 0, o = a.length, e = !0; a && o > s; s++)
                    if (!1 === a[s].apply(d[0], d[1]) && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                e = !1, a && (l ? l.length && c(l.shift()) : n ? a = [] : u.disable())
            },
            u = {
                add: function() {
                    if (a) {
                        var i = a.length;
                        ! function e(n) {
                            p.each(n, function(n, i) {
                                var o = p.type(i);
                                "function" === o ? t.unique && u.has(i) || a.push(i) : i && i.length && "string" !== o && e(i)
                            })
                        }(arguments), e ? o = a.length : n && (r = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return a && p.each(arguments, function(t, n) {
                        for (var i;
                            (i = p.inArray(n, a, i)) > -1;) a.splice(i, 1), e && (o >= i && o--, s >= i && s--)
                    }), this
                },
                has: function(t) {
                    return t ? p.inArray(t, a) > -1 : !(!a || !a.length)
                },
                empty: function() {
                    return a = [], o = 0, this
                },
                disable: function() {
                    return a = l = n = void 0, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return l = void 0, n || u.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(t, n) {
                    return !a || i && !l || (n = [t, (n = n || []).slice ? n.slice() : n], e ? l.push(n) : c(n)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, p.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return p.Deferred(function(n) {
                            p.each(e, function(e, s) {
                                var r = p.isFunction(t[e]) && t[e];
                                o[s[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && p.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? p.extend(t, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, p.each(e, function(t, s) {
                var r = s[2],
                    a = s[3];
                i[s[1]] = r.add, a && r.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? i : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, n, o, s = 0,
                r = i.call(arguments),
                a = r.length,
                l = 1 !== a || t && p.isFunction(t.promise) ? a : 0,
                c = 1 === l ? t : p.Deferred(),
                u = function(t, n, o) {
                    return function(s) {
                        n[t] = this, o[t] = arguments.length > 1 ? i.call(arguments) : s, o === e ? c.notifyWith(n, o) : --l || c.resolveWith(n, o)
                    }
                };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), o = new Array(a); a > s; s++) r[s] && p.isFunction(r[s].promise) ? r[s].promise().done(u(s, o, r)).fail(c.reject).progress(u(s, n, e)) : --l;
            return l || c.resolveWith(o, r), c.promise()
        }
    }), p.fn.ready = function(t) {
        return p.ready.promise().done(t), this
    }, p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? p.readyWait++ : p.ready(!0)
        },
        ready: function(t) {
            if (!0 === t ? !--p.readyWait : !p.isReady) {
                if (!C.body) return setTimeout(p.ready);
                p.isReady = !0, !0 !== t && --p.readyWait > 0 || (A.resolveWith(C, [p]), p.fn.triggerHandler && (p(C).triggerHandler("ready"), p(C).off("ready")))
            }
        }
    }), p.ready.promise = function(e) {
        if (!A)
            if (A = p.Deferred(), "complete" === C.readyState) setTimeout(p.ready);
            else if (C.addEventListener) C.addEventListener("DOMContentLoaded", z, !1), t.addEventListener("load", z, !1);
        else {
            C.attachEvent("onreadystatechange", z), t.attachEvent("onload", z);
            var n = !1;
            try {
                n = null == t.frameElement && C.documentElement
            } catch (t) {}
            n && n.doScroll && function t() {
                if (!p.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(t, 50)
                    }
                    I(), p.ready()
                }
            }()
        }
        return A.promise(e)
    };
    var M, D = "undefined";
    for (M in p(u)) break;
    u.ownLast = "0" !== M, u.inlineBlockNeedsLayout = !1, p(function() {
            var t, e, n, i;
            (n = C.getElementsByTagName("body")[0]) && n.style && (e = C.createElement("div"), (i = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== D && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", u.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var t = C.createElement("div");
            if (null == u.deleteExpando) {
                u.deleteExpando = !0;
                try {
                    delete t.test
                } catch (t) {
                    u.deleteExpando = !1
                }
            }
            t = null
        }(), p.acceptData = function(t) {
            var e = p.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
        };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function j(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(O, "-$1").toLowerCase();
            if ("string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : N.test(n) ? p.parseJSON(n) : n)
                } catch (t) {}
                p.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function H(t) {
        var e;
        for (e in t)
            if (("data" !== e || !p.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function F(t, e, i, o) {
        if (p.acceptData(t)) {
            var s, r, a = p.expando,
                l = t.nodeType,
                c = l ? p.cache : t,
                u = l ? t[a] : t[a] && a;
            if (u && c[u] && (o || c[u].data) || void 0 !== i || "string" != typeof e) return u || (u = l ? t[a] = n.pop() || p.guid++ : a), c[u] || (c[u] = l ? {} : {
                toJSON: p.noop
            }), ("object" == typeof e || "function" == typeof e) && (o ? c[u] = p.extend(c[u], e) : c[u].data = p.extend(c[u].data, e)), r = c[u], o || (r.data || (r.data = {}), r = r.data), void 0 !== i && (r[p.camelCase(e)] = i), "string" == typeof e ? null == (s = r[e]) && (s = r[p.camelCase(e)]) : s = r, s
        }
    }

    function W(t, e, n) {
        if (p.acceptData(t)) {
            var i, o, s = t.nodeType,
                r = s ? p.cache : t,
                a = s ? t[p.expando] : p.expando;
            if (r[a]) {
                if (e && (i = n ? r[a] : r[a].data)) {
                    p.isArray(e) ? e = e.concat(p.map(e, p.camelCase)) : e in i ? e = [e] : e = (e = p.camelCase(e)) in i ? [e] : e.split(" "), o = e.length;
                    for (; o--;) delete i[e[o]];
                    if (n ? !H(i) : !p.isEmptyObject(i)) return
                }(n || (delete r[a].data, H(r[a]))) && (s ? p.cleanData([t], !0) : u.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
            }
        }
    }
    p.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? p.cache[t[p.expando]] : t[p.expando]) && !H(t)
        },
        data: function(t, e, n) {
            return F(t, e, n)
        },
        removeData: function(t, e) {
            return W(t, e)
        },
        _data: function(t, e, n) {
            return F(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return W(t, e, !0)
        }
    }), p.fn.extend({
        data: function(t, e) {
            var n, i, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (o = p.data(s), 1 === s.nodeType && !p._data(s, "parsedAttrs"))) {
                    for (n = r.length; n--;) r[n] && (0 === (i = r[n].name).indexOf("data-") && j(s, i = p.camelCase(i.slice(5)), o[i]));
                    p._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                p.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                p.data(this, t, e)
            }) : s ? j(s, t, p.data(s, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                p.removeData(this, t)
            })
        }
    }), p.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = p._data(t, e), n && (!i || p.isArray(n) ? i = p._data(t, e, p.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = p.queue(t, e),
                i = n.length,
                o = n.shift(),
                s = p._queueHooks(t, e);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete s.stop, o.call(t, function() {
                p.dequeue(t, e)
            }, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return p._data(t, n) || p._data(t, n, {
                empty: p.Callbacks("once memory").add(function() {
                    p._removeData(t, e + "queue"), p._removeData(t, n)
                })
            })
        }
    }), p.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? p.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = p.queue(this, t, e);
                p._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && p.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                p.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                o = p.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(n = p._data(s[r], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        B = function(t, e) {
            return t = e || t, "none" === p.css(t, "display") || !p.contains(t.ownerDocument, t)
        },
        X = p.access = function(t, e, n, i, o, s, r) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === p.type(n))
                for (a in o = !0, n) p.access(t, e, a, n[a], !0, s, r);
            else if (void 0 !== i && (o = !0, p.isFunction(i) || (r = !0), c && (r ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(p(t), n)
                })), e))
                for (; l > a; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : s
        },
        Y = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = C.createElement("input"),
            e = C.createElement("div"),
            n = C.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", u.leadingWhitespace = 3 === e.firstChild.nodeType, u.tbody = !e.getElementsByTagName("tbody").length, u.htmlSerialize = !!e.getElementsByTagName("link").length, u.html5Clone = "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), u.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", u.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, u.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                u.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == u.deleteExpando) {
            u.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                u.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, n, i = C.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (u[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), u[e + "Bubbles"] = !1 === i.attributes[n].expando);
        i = null
    }();
    var U = /^(?:input|select|textarea)$/i,
        V = /^key/,
        Q = /^(?:mouse|pointer|contextmenu)|click/,
        Z = /^(?:focusinfocus|focusoutblur)$/,
        G = /^([^.]*)(?:\.(.+)|)$/;

    function J() {
        return !0
    }

    function K() {
        return !1
    }

    function tt() {
        try {
            return C.activeElement
        } catch (t) {}
    }

    function et(t) {
        var e = nt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }
    p.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var s, r, a, l, c, u, d, h, f, m, g, y = p._data(t);
            if (y) {
                for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = p.guid++), (r = y.events) || (r = y.events = {}), (u = y.handle) || ((u = y.handle = function(t) {
                        return typeof p === D || t && p.event.triggered === t.type ? void 0 : p.event.dispatch.apply(u.elem, arguments)
                    }).elem = t), a = (e = (e || "").match(P) || [""]).length; a--;) f = g = (s = G.exec(e[a]) || [])[1], m = (s[2] || "").split(".").sort(), f && (c = p.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = p.event.special[f] || {}, d = p.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && p.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l), (h = r[f]) || ((h = r[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, m, u) || (t.addEventListener ? t.addEventListener(f, u, !1) : t.attachEvent && t.attachEvent("on" + f, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), p.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, o) {
            var s, r, a, l, c, u, d, h, f, m, g, y = p.hasData(t) && p._data(t);
            if (y && (u = y.events)) {
                for (c = (e = (e || "").match(P) || [""]).length; c--;)
                    if (f = g = (a = G.exec(e[c]) || [])[1], m = (a[2] || "").split(".").sort(), f) {
                        for (d = p.event.special[f] || {}, h = u[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) r = h[s], !o && g !== r.origType || n && n.guid !== r.guid || a && !a.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (h.splice(s, 1), r.selector && h.delegateCount--, d.remove && d.remove.call(t, r));
                        l && !h.length && (d.teardown && !1 !== d.teardown.call(t, m, y.handle) || p.removeEvent(t, f, y.handle), delete u[f])
                    } else
                        for (f in u) p.event.remove(t, f + e[c], n, i, !0);
                p.isEmptyObject(u) && (delete y.handle, p._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, o) {
            var s, r, a, l, u, d, h, f = [i || C],
                m = c.call(e, "type") ? e.type : e,
                g = c.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = d = i = i || C, 3 !== i.nodeType && 8 !== i.nodeType && !Z.test(m + p.event.triggered) && (m.indexOf(".") >= 0 && (g = m.split("."), m = g.shift(), g.sort()), r = m.indexOf(":") < 0 && "on" + m, (e = e[p.expando] ? e : new p.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : p.makeArray(n, [e]), u = p.event.special[m] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                if (!o && !u.noBubble && !p.isWindow(i)) {
                    for (l = u.delegateType || m, Z.test(l + m) || (a = a.parentNode); a; a = a.parentNode) f.push(a), d = a;
                    d === (i.ownerDocument || C) && f.push(d.defaultView || d.parentWindow || t)
                }
                for (h = 0;
                    (a = f[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : u.bindType || m, (s = (p._data(a, "events") || {})[e.type] && p._data(a, "handle")) && s.apply(a, n), (s = r && a[r]) && s.apply && p.acceptData(a) && (e.result = s.apply(a, n), !1 === e.result && e.preventDefault());
                if (e.type = m, !o && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), n)) && p.acceptData(i) && r && i[m] && !p.isWindow(i)) {
                    (d = i[r]) && (i[r] = null), p.event.triggered = m;
                    try {
                        i[m]()
                    } catch (t) {}
                    p.event.triggered = void 0, d && (i[r] = d)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = p.event.fix(t);
            var e, n, o, s, r, a = [],
                l = i.call(arguments),
                c = (p._data(this, "events") || {})[t.type] || [],
                u = p.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                for (a = p.event.handlers.call(this, t, c), e = 0;
                    (s = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, r = 0;
                        (o = s.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, void 0 !== (n = ((p.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, s, r = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (o = [], s = 0; a > s; s++) void 0 === o[n = (i = e[s]).selector + " "] && (o[n] = i.needsContext ? p(n, this).index(l) >= 0 : p.find(n, this, null, [l]).length), o[n] && o.push(i);
                        o.length && r.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return a < e.length && r.push({
                elem: this,
                handlers: e.slice(a)
            }), r
        },
        fix: function(t) {
            if (t[p.expando]) return t;
            var e, n, i, o = t.type,
                s = t,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = Q.test(o) ? this.mouseHooks : V.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, t = new p.Event(s), e = i.length; e--;) t[n = i[e]] = s[n];
            return t.target || (t.target = s.srcElement || C), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, s) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, o, s = e.button,
                    r = e.fromElement;
                return null == t.pageX && null != e.clientX && (o = (i = t.target.ownerDocument || C).documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== tt() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === tt() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return p.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var o = p.extend(new p.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? p.event.trigger(o, null, e) : p.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, p.removeEvent = C.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === D && (t[i] = null), t.detachEvent(i, n))
    }, p.Event = function(t, e) {
        return this instanceof p.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? J : K) : this.type = t, e && p.extend(this, e), this.timeStamp = t && t.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(t, e)
    }, p.Event.prototype = {
        isDefaultPrevented: K,
        isPropagationStopped: K,
        isImmediatePropagationStopped: K,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = J, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = J, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = J, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        p.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = t.relatedTarget,
                    o = t.handleObj;
                return (!i || i !== this && !p.contains(this, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), u.submitBubbles || (p.event.special.submit = {
        setup: function() {
            return !p.nodeName(this, "form") && void p.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = p.nodeName(e, "input") || p.nodeName(e, "button") ? e.form : void 0;
                n && !p._data(n, "submitBubbles") && (p.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), p._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && p.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return !p.nodeName(this, "form") && void p.event.remove(this, "._submit")
        }
    }), u.changeBubbles || (p.event.special.change = {
        setup: function() {
            return U.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (p.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), p.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, t, !0)
            })), !1) : void p.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                U.test(e.nodeName) && !p._data(e, "changeBubbles") && (p.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || p.event.simulate("change", this.parentNode, t, !0)
                }), p._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return p.event.remove(this, "._change"), !U.test(this.nodeName)
        }
    }), u.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            p.event.simulate(e, t.target, p.event.fix(t), !0)
        };
        p.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = p._data(i, e);
                o || i.addEventListener(t, n, !0), p._data(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = p._data(i, e) - 1;
                o ? p._data(i, e, o) : (i.removeEventListener(t, n, !0), p._removeData(i, e))
            }
        }
    }), p.fn.extend({
        on: function(t, e, n, i, o) {
            var s, r;
            if ("object" == typeof t) {
                for (s in "string" != typeof e && (n = n || e, e = void 0), t) this.on(s, e, n, t[s], o);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), !1 === i) i = K;
            else if (!i) return this;
            return 1 === o && (r = i, (i = function(t) {
                return p().off(t), r.apply(this, arguments)
            }).guid = r.guid || (r.guid = p.guid++)), this.each(function() {
                p.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, p(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return (!1 === e || "function" == typeof e) && (n = e, e = void 0), !1 === n && (n = K), this.each(function() {
                p.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                p.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? p.event.trigger(t, e, n, !0) : void 0
        }
    });
    var nt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        it = / jQuery\d+="(?:null|\d+)"/g,
        ot = new RegExp("<(?:" + nt + ")[\\s/>]", "i"),
        st = /^\s+/,
        rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        at = /<([\w:]+)/,
        lt = /<tbody/i,
        ct = /<|&#?\w+;/,
        ut = /<(?:script|style|link)/i,
        dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pt = /^$|\/(?:java|ecma)script/i,
        ht = /^true\/(.*)/,
        ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        mt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: u.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        gt = et(C).appendChild(C.createElement("div"));

    function yt(t, e) {
        var n, i, o = 0,
            s = typeof t.getElementsByTagName !== D ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== D ? t.querySelectorAll(e || "*") : void 0;
        if (!s)
            for (s = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || p.nodeName(i, e) ? s.push(i) : p.merge(s, yt(i, e));
        return void 0 === e || e && p.nodeName(t, e) ? p.merge([t], s) : s
    }

    function vt(t) {
        Y.test(t.type) && (t.defaultChecked = t.checked)
    }

    function bt(t, e) {
        return p.nodeName(t, "table") && p.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function xt(t) {
        return t.type = (null !== p.find.attr(t, "type")) + "/" + t.type, t
    }

    function wt(t) {
        var e = ht.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function St(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) p._data(n, "globalEval", !e || p._data(e[i], "globalEval"))
    }

    function Tt(t, e) {
        if (1 === e.nodeType && p.hasData(t)) {
            var n, i, o, s = p._data(t),
                r = p._data(e, s),
                a = s.events;
            if (a)
                for (n in delete r.handle, r.events = {}, a)
                    for (i = 0, o = a[n].length; o > i; i++) p.event.add(e, n, a[n][i]);
            r.data && (r.data = p.extend({}, r.data))
        }
    }

    function Ct(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !u.noCloneEvent && e[p.expando]) {
                for (i in (o = p._data(e)).events) p.removeEvent(e, i, o.handle);
                e.removeAttribute(p.expando)
            }
            "script" === n && e.text !== t.text ? (xt(e).text = t.text, wt(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), u.html5Clone && t.innerHTML && !p.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Y.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }
    mt.optgroup = mt.option, mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td, p.extend({
        clone: function(t, e, n) {
            var i, o, s, r, a, l = p.contains(t.ownerDocument, t);
            if (u.html5Clone || p.isXMLDoc(t) || !ot.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (gt.innerHTML = t.outerHTML, gt.removeChild(s = gt.firstChild)), !(u.noCloneEvent && u.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || p.isXMLDoc(t)))
                for (i = yt(s), a = yt(t), r = 0; null != (o = a[r]); ++r) i[r] && Ct(o, i[r]);
            if (e)
                if (n)
                    for (a = a || yt(t), i = i || yt(s), r = 0; null != (o = a[r]); r++) Tt(o, i[r]);
                else Tt(t, s);
            return (i = yt(s, "script")).length > 0 && St(i, !l && yt(t, "script")), i = a = o = null, s
        },
        buildFragment: function(t, e, n, i) {
            for (var o, s, r, a, l, c, d, h = t.length, f = et(e), m = [], g = 0; h > g; g++)
                if ((s = t[g]) || 0 === s)
                    if ("object" === p.type(s)) p.merge(m, s.nodeType ? [s] : s);
                    else if (ct.test(s)) {
                for (a = a || f.appendChild(e.createElement("div")), l = (at.exec(s) || ["", ""])[1].toLowerCase(), d = mt[l] || mt._default, a.innerHTML = d[1] + s.replace(rt, "<$1></$2>") + d[2], o = d[0]; o--;) a = a.lastChild;
                if (!u.leadingWhitespace && st.test(s) && m.push(e.createTextNode(st.exec(s)[0])), !u.tbody)
                    for (o = (s = "table" !== l || lt.test(s) ? "<table>" !== d[1] || lt.test(s) ? 0 : a : a.firstChild) && s.childNodes.length; o--;) p.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                for (p.merge(m, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = f.lastChild
            } else m.push(e.createTextNode(s));
            for (a && f.removeChild(a), u.appendChecked || p.grep(yt(m, "input"), vt), g = 0; s = m[g++];)
                if ((!i || -1 === p.inArray(s, i)) && (r = p.contains(s.ownerDocument, s), a = yt(f.appendChild(s), "script"), r && St(a), n))
                    for (o = 0; s = a[o++];) pt.test(s.type || "") && n.push(s);
            return a = null, f
        },
        cleanData: function(t, e) {
            for (var i, o, s, r, a = 0, l = p.expando, c = p.cache, d = u.deleteExpando, h = p.event.special; null != (i = t[a]); a++)
                if ((e || p.acceptData(i)) && (r = (s = i[l]) && c[s])) {
                    if (r.events)
                        for (o in r.events) h[o] ? p.event.remove(i, o) : p.removeEvent(i, o, r.handle);
                    c[s] && (delete c[s], d ? delete i[l] : typeof i.removeAttribute !== D ? i.removeAttribute(l) : i[l] = null, n.push(s))
                }
        }
    }), p.fn.extend({
        text: function(t) {
            return X(this, function(t) {
                return void 0 === t ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || bt(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = bt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? p.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || p.cleanData(yt(n)), n.parentNode && (e && p.contains(n.ownerDocument, n) && St(yt(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && p.cleanData(yt(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && p.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return p.clone(this, t, e)
            })
        },
        html: function(t) {
            return X(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(it, "") : void 0;
                if (!("string" != typeof t || ut.test(t) || !u.htmlSerialize && ot.test(t) || !u.leadingWhitespace && st.test(t) || mt[(at.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(rt, "<$1></$2>");
                    try {
                        for (; i > n; n++) 1 === (e = this[n] || {}).nodeType && (p.cleanData(yt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, p.cleanData(yt(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = o.apply([], t);
            var n, i, s, r, a, l, c = 0,
                d = this.length,
                h = this,
                f = d - 1,
                m = t[0],
                g = p.isFunction(m);
            if (g || d > 1 && "string" == typeof m && !u.checkClone && dt.test(m)) return this.each(function(n) {
                var i = h.eq(n);
                g && (t[0] = m.call(this, n, i.html())), i.domManip(t, e)
            });
            if (d && (n = (l = p.buildFragment(t, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = n), n)) {
                for (s = (r = p.map(yt(l, "script"), xt)).length; d > c; c++) i = l, c !== f && (i = p.clone(i, !0, !0), s && p.merge(r, yt(i, "script"))), e.call(this[c], i, c);
                if (s)
                    for (a = r[r.length - 1].ownerDocument, p.map(r, wt), c = 0; s > c; c++) i = r[c], pt.test(i.type || "") && !p._data(i, "globalEval") && p.contains(a, i) && (i.src ? p._evalUrl && p._evalUrl(i.src) : p.globalEval((i.text || i.textContent || i.innerHTML || "").replace(ft, "")));
                l = n = null
            }
            return this
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        p.fn[t] = function(t) {
            for (var n, i = 0, o = [], r = p(t), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), p(r[i])[e](n), s.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var kt, $t = {};

    function Et(e, n) {
        var i, o = p(n.createElement(e)).appendTo(n.body),
            s = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : p.css(o[0], "display");
        return o.detach(), s
    }

    function Lt(t) {
        var e = C,
            n = $t[t];
        return n || ("none" !== (n = Et(t, e)) && n || ((e = ((kt = (kt || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || kt[0].contentDocument).document).edit(), e.close(), n = Et(t, e), kt.detach()), $t[t] = n), n
    }! function() {
        var t;
        u.shrinkWrapBlocks = function() {
            return null != t ? t : (t = !1, (n = C.getElementsByTagName("body")[0]) && n.style ? (e = C.createElement("div"), (i = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== D && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(C.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0);
            var e, n, i
        }
    }();
    var At, Pt, _t = /^margin/,
        It = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
        zt = /^(top|right|bottom|left)$/;

    function Mt(t, e) {
        return {
            get: function() {
                var n = t();
                if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    t.getComputedStyle ? (At = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, Pt = function(t, e, n) {
            var i, o, s, r, a = t.style;
            return r = (n = n || At(t)) ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== r || p.contains(t.ownerDocument, t) || (r = p.style(t, e)), It.test(r) && _t.test(e) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 === r ? r : r + ""
        }) : C.documentElement.currentStyle && (At = function(t) {
            return t.currentStyle
        }, Pt = function(t, e, n) {
            var i, o, s, r, a = t.style;
            return null == (r = (n = n || At(t)) ? n[e] : void 0) && a && a[e] && (r = a[e]), It.test(r) && !zt.test(e) && (i = a.left, (s = (o = t.runtimeStyle) && o.left) && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = i, s && (o.left = s)), void 0 === r ? r : r + "" || "auto"
        }),
        function() {
            var e, n, i, o, s, r, a;
            if ((e = C.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = (i = e.getElementsByTagName("a")[0]) && i.style) {
                function l() {
                    var e, n, i, l;
                    (n = C.getElementsByTagName("body")[0]) && n.style && (e = C.createElement("div"), (i = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, a = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                        width: "4px"
                    }).width, (l = e.appendChild(C.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", e.style.width = "1px", a = !parseFloat((t.getComputedStyle(l, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (l = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", r = 0 === l[0].offsetHeight), n.removeChild(i))
                }
                n.cssText = "float:left;opacity:.5", u.opacity = "0.5" === n.opacity, u.cssFloat = !!n.cssFloat, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === e.style.backgroundClip, u.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, p.extend(u, {
                    reliableHiddenOffsets: function() {
                        return null == r && l(), r
                    },
                    boxSizingReliable: function() {
                        return null == s && l(), s
                    },
                    pixelPosition: function() {
                        return null == o && l(), o
                    },
                    reliableMarginRight: function() {
                        return null == a && l(), a
                    }
                })
            }
        }(), p.swap = function(t, e, n, i) {
            var o, s, r = {};
            for (s in e) r[s] = t.style[s], t.style[s] = e[s];
            for (s in o = n.apply(t, i || []), e) t.style[s] = r[s];
            return o
        };
    var Dt = /alpha\([^)]*\)/i,
        Nt = /opacity\s*=\s*([^)]*)/,
        Ot = /^(none|table(?!-c[ea]).+)/,
        jt = new RegExp("^(" + q + ")(.*)$", "i"),
        Ht = new RegExp("^([+-])=(" + q + ")", "i"),
        Ft = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Wt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        qt = ["Webkit", "O", "Moz", "ms"];

    function Rt(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = qt.length; o--;)
            if ((e = qt[o] + n) in t) return e;
        return i
    }

    function Bt(t, e) {
        for (var n, i, o, s = [], r = 0, a = t.length; a > r; r++)(i = t[r]).style && (s[r] = p._data(i, "olddisplay"), n = i.style.display, e ? (s[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && B(i) && (s[r] = p._data(i, "olddisplay", Lt(i.nodeName)))) : (o = B(i), (n && "none" !== n || !o) && p._data(i, "olddisplay", o ? n : p.css(i, "display"))));
        for (r = 0; a > r; r++)(i = t[r]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[r] || "" : "none"));
        return t
    }

    function Xt(t, e, n) {
        var i = jt.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function Yt(t, e, n, i, o) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === n && (r += p.css(t, n + R[s], !0, o)), i ? ("content" === n && (r -= p.css(t, "padding" + R[s], !0, o)), "margin" !== n && (r -= p.css(t, "border" + R[s] + "Width", !0, o))) : (r += p.css(t, "padding" + R[s], !0, o), "padding" !== n && (r += p.css(t, "border" + R[s] + "Width", !0, o)));
        return r
    }

    function Ut(t, e, n) {
        var i = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = At(t),
            r = u.boxSizing && "border-box" === p.css(t, "boxSizing", !1, s);
        if (0 >= o || null == o) {
            if ((0 > (o = Pt(t, e, s)) || null == o) && (o = t.style[e]), It.test(o)) return o;
            i = r && (u.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + Yt(t, e, n || (r ? "border" : "content"), i, s) + "px"
    }

    function Vt(t, e, n, i, o) {
        return new Vt.prototype.init(t, e, n, i, o)
    }
    p.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = Pt(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: u.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, s, r, a = p.camelCase(e),
                    l = t.style;
                if (e = p.cssProps[a] || (p.cssProps[a] = Rt(l, a)), r = p.cssHooks[e] || p.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (o = r.get(t, !1, i)) ? o : l[e];
                if ("string" === (s = typeof n) && (o = Ht.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(p.css(t, e)), s = "number"), null != n && n == n && ("number" !== s || p.cssNumber[a] || (n += "px"), u.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (n = r.set(t, n, i))))) try {
                    l[e] = n
                } catch (t) {}
            }
        },
        css: function(t, e, n, i) {
            var o, s, r, a = p.camelCase(e);
            return e = p.cssProps[a] || (p.cssProps[a] = Rt(t.style, a)), (r = p.cssHooks[e] || p.cssHooks[a]) && "get" in r && (s = r.get(t, !0, n)), void 0 === s && (s = Pt(t, e, i)), "normal" === s && e in Wt && (s = Wt[e]), "" === n || n ? (o = parseFloat(s), !0 === n || p.isNumeric(o) ? o || 0 : s) : s
        }
    }), p.each(["height", "width"], function(t, e) {
        p.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? Ot.test(p.css(t, "display")) && 0 === t.offsetWidth ? p.swap(t, Ft, function() {
                    return Ut(t, e, i)
                }) : Ut(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var o = i && At(t);
                return Xt(0, n, i ? Yt(t, e, i, u.boxSizing && "border-box" === p.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), u.opacity || (p.cssHooks.opacity = {
        get: function(t, e) {
            return Nt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                o = p.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                s = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === p.trim(s.replace(Dt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = Dt.test(s) ? s.replace(Dt, o) : s + " " + o)
        }
    }), p.cssHooks.marginRight = Mt(u.reliableMarginRight, function(t, e) {
        return e ? p.swap(t, {
            display: "inline-block"
        }, Pt, [t, "marginRight"]) : void 0
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        p.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + R[i] + e] = s[i] || s[i - 2] || s[0];
                return o
            }
        }, _t.test(t) || (p.cssHooks[t + e].set = Xt)
    }), p.fn.extend({
        css: function(t, e) {
            return X(this, function(t, e, n) {
                var i, o, s = {},
                    r = 0;
                if (p.isArray(e)) {
                    for (i = At(t), o = e.length; o > r; r++) s[e[r]] = p.css(t, e[r], !1, i);
                    return s
                }
                return void 0 !== n ? p.style(t, e, n) : p.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return Bt(this, !0)
        },
        hide: function() {
            return Bt(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                B(this) ? p(this).show() : p(this).hide()
            })
        }
    }), p.Tween = Vt, Vt.prototype = {
        constructor: Vt,
        init: function(t, e, n, i, o, s) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (p.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = Vt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Vt.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = Vt.propHooks[this.prop];
            return this.pos = e = this.options.duration ? p.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Vt.propHooks._default.set(this), this
        }
    }, Vt.prototype.init.prototype = Vt.prototype, Vt.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = p.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
            },
            set: function(t) {
                p.fx.step[t.prop] ? p.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[p.cssProps[t.prop]] || p.cssHooks[t.prop]) ? p.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, Vt.propHooks.scrollTop = Vt.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, p.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, p.fx = Vt.prototype.init, p.fx.step = {};
    var Qt, Zt, Gt = /^(?:toggle|show|hide)$/,
        Jt = new RegExp("^(?:([+-])=|)(" + q + ")([a-z%]*)$", "i"),
        Kt = /queueHooks$/,
        te = [function(t, e, n) {
            var i, o, s, r, a, l, c, d = this,
                h = {},
                f = t.style,
                m = t.nodeType && B(t),
                g = p._data(t, "fxshow");
            for (i in n.queue || (null == (a = p._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, d.always(function() {
                    d.always(function() {
                        a.unqueued--, p.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = p.css(t, "display"), "inline" === ("none" === c ? p._data(t, "olddisplay") || Lt(t.nodeName) : c) && "none" === p.css(t, "float") && (u.inlineBlockNeedsLayout && "inline" !== Lt(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.shrinkWrapBlocks() || d.always(function() {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                })), e)
                if (o = e[i], Gt.exec(o)) {
                    if (delete e[i], s = s || "toggle" === o, o === (m ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    h[i] = g && g[i] || p.style(t, i)
                } else c = void 0;
            if (p.isEmptyObject(h)) "inline" === ("none" === c ? Lt(t.nodeName) : c) && (f.display = c);
            else
                for (i in g ? "hidden" in g && (m = g.hidden) : g = p._data(t, "fxshow", {}), s && (g.hidden = !m), m ? p(t).show() : d.done(function() {
                        p(t).hide()
                    }), d.done(function() {
                        var e;
                        for (e in p._removeData(t, "fxshow"), h) p.style(t, e, h[e])
                    }), h) r = oe(m ? g[i] : 0, i, d), i in g || (g[i] = r.start, m && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
        }],
        ee = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    i = n.cur(),
                    o = Jt.exec(e),
                    s = o && o[3] || (p.cssNumber[t] ? "" : "px"),
                    r = (p.cssNumber[t] || "px" !== s && +i) && Jt.exec(p.css(n.elem, t)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== s) {
                    s = s || r[3], o = o || [], r = +i || 1;
                    do {
                        r /= a = a || ".5", p.style(n.elem, t, r + s)
                    } while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (r = n.start = +r || +i || 0, n.unit = s, n.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };

    function ne() {
        return setTimeout(function() {
            Qt = void 0
        }), Qt = p.now()
    }

    function ie(t, e) {
        var n, i = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) i["margin" + (n = R[o])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function oe(t, e, n) {
        for (var i, o = (ee[e] || []).concat(ee["*"]), s = 0, r = o.length; r > s; s++)
            if (i = o[s].call(n, e, t)) return i
    }

    function se(t, e, n) {
        var i, o, s = 0,
            r = te.length,
            a = p.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = Qt || ne(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), s = 0, r = c.tweens.length; r > s; s++) c.tweens[s].run(i);
                return a.notifyWith(t, [c, i, n]), 1 > i && r ? n : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: p.extend({}, e),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Qt || ne(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = p.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (function(t, e) {
                var n, i, o, s, r;
                for (n in t)
                    if (o = e[i = p.camelCase(n)], s = t[n], p.isArray(s) && (o = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), (r = p.cssHooks[i]) && "expand" in r)
                        for (n in s = r.expand(s), delete t[i], s) n in t || (t[n] = s[n], e[n] = o);
                    else e[i] = o
            }(u, c.opts.specialEasing); r > s; s++)
            if (i = te[s].call(c, t, u, c.opts)) return i;
        return p.map(u, oe, c), p.isFunction(c.opts.start) && c.opts.start.call(t, c), p.fx.timer(p.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    p.Animation = p.extend(se, {
            tweener: function(t, e) {
                p.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; o > i; i++) n = t[i], ee[n] = ee[n] || [], ee[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? te.unshift(t) : te.push(t)
            }
        }), p.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? p.extend({}, t) : {
                complete: n || !n && e || p.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !p.isFunction(e) && e
            };
            return i.duration = p.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in p.fx.speeds ? p.fx.speeds[i.duration] : p.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                p.isFunction(i.old) && i.old.call(this), i.queue && p.dequeue(this, i.queue)
            }, i
        }, p.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(B).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var o = p.isEmptyObject(t),
                    s = p.speed(e, n, i),
                    r = function() {
                        var e = se(this, p.extend({}, t), s);
                        (o || p._data(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        s = p.timers,
                        r = p._data(this);
                    if (o) r[o] && r[o].stop && i(r[o]);
                    else
                        for (o in r) r[o] && r[o].stop && Kt.test(o) && i(r[o]);
                    for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(n), e = !1, s.splice(o, 1));
                    (e || !n) && p.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, n = p._data(this),
                        i = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        s = p.timers,
                        r = i ? i.length : 0;
                    for (n.finish = !0, p.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; r > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), p.each(["toggle", "show", "hide"], function(t, e) {
            var n = p.fn[e];
            p.fn[e] = function(t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ie(e, !0), t, i, o)
            }
        }), p.each({
            slideDown: ie("show"),
            slideUp: ie("hide"),
            slideToggle: ie("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            p.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), p.timers = [], p.fx.tick = function() {
            var t, e = p.timers,
                n = 0;
            for (Qt = p.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
            e.length || p.fx.stop(), Qt = void 0
        }, p.fx.timer = function(t) {
            p.timers.push(t), t() ? p.fx.start() : p.timers.pop()
        }, p.fx.interval = 13, p.fx.start = function() {
            Zt || (Zt = setInterval(p.fx.tick, p.fx.interval))
        }, p.fx.stop = function() {
            clearInterval(Zt), Zt = null
        }, p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, p.fn.delay = function(t, e) {
            return t = p.fx && p.fx.speeds[t] || t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var t, e, n, i, o;
            (e = C.createElement("div")).setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], o = (n = C.createElement("select")).appendChild(C.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", u.getSetAttribute = "t" !== e.className, u.style = /top/.test(i.getAttribute("style")), u.hrefNormalized = "/a" === i.getAttribute("href"), u.checkOn = !!t.value, u.optSelected = o.selected, u.enctype = !!C.createElement("form").enctype, n.disabled = !0, u.optDisabled = !o.disabled, (t = C.createElement("input")).setAttribute("value", ""), u.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), u.radioValue = "t" === t.value
        }();
    var re = /\r/g;
    p.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = p.isFunction(t), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? t.call(this, n, p(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : p.isArray(o) && (o = p.map(o, function(t) {
                    return null == t ? "" : t + ""
                })), (e = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = p.valHooks[o.type] || p.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(re, "") : null == n ? "" : n : void 0
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = p.find.attr(t, "value");
                    return null != e ? e : p.trim(p.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : i.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                        if (!(!(n = i[l]).selected && l !== o || (u.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && p.nodeName(n.parentNode, "optgroup"))) {
                            if (e = p(n).val(), s) return e;
                            r.push(e)
                        }
                    return r
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, s = p.makeArray(e), r = o.length; r--;)
                        if (i = o[r], p.inArray(p.valHooks.option.get(i), s) >= 0) try {
                            i.selected = n = !0
                        } catch (t) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            set: function(t, e) {
                return p.isArray(e) ? t.checked = p.inArray(p(t).val(), e) >= 0 : void 0
            }
        }, u.checkOn || (p.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var ae, le, ce = p.expr.attrHandle,
        ue = /^(?:checked|selected)$/i,
        de = u.getSetAttribute,
        pe = u.input;
    p.fn.extend({
        attr: function(t, e) {
            return X(this, p.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                p.removeAttr(this, t)
            })
        }
    }), p.extend({
        attr: function(t, e, n) {
            var i, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === D ? p.prop(t, e, n) : (1 === s && p.isXMLDoc(t) || (e = e.toLowerCase(), i = p.attrHooks[e] || (p.expr.match.bool.test(e) ? le : ae)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : null == (o = p.find.attr(t, e)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void p.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, i, o = 0,
                s = e && e.match(P);
            if (s && 1 === t.nodeType)
                for (; n = s[o++];) i = p.propFix[n] || n, p.expr.match.bool.test(n) ? pe && de || !ue.test(n) ? t[i] = !1 : t[p.camelCase("default-" + n)] = t[i] = !1 : p.attr(t, n, ""), t.removeAttribute(de ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!u.radioValue && "radio" === e && p.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), le = {
        set: function(t, e, n) {
            return !1 === e ? p.removeAttr(t, n) : pe && de || !ue.test(n) ? t.setAttribute(!de && p.propFix[n] || n, n) : t[p.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ce[e] || p.find.attr;
        ce[e] = pe && de || !ue.test(e) ? function(t, e, i) {
            var o, s;
            return i || (s = ce[e], ce[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, ce[e] = s), o
        } : function(t, e, n) {
            return n ? void 0 : t[p.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), pe && de || (p.attrHooks.value = {
        set: function(t, e, n) {
            return p.nodeName(t, "input") ? void(t.defaultValue = e) : ae && ae.set(t, e, n)
        }
    }), de || (ae = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, ce.id = ce.name = ce.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, p.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: ae.set
    }, p.attrHooks.contenteditable = {
        set: function(t, e, n) {
            ae.set(t, "" !== e && e, n)
        }
    }, p.each(["width", "height"], function(t, e) {
        p.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), u.style || (p.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var he = /^(?:input|select|textarea|button|object)$/i,
        fe = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(t, e) {
            return X(this, p.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = p.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (t) {}
            })
        }
    }), p.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(t, e, n) {
            var i, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !p.isXMLDoc(t)) && (e = p.propFix[e] || e, o = p.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = p.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : he.test(t.nodeName) || fe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), u.hrefNormalized || p.each(["href", "src"], function(t, e) {
        p.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), u.optSelected || (p.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        p.propFix[this.toLowerCase()] = this
    }), u.enctype || (p.propFix.enctype = "encoding");
    var me = /[\t\r\n\f]/g;
    p.fn.extend({
        addClass: function(t) {
            var e, n, i, o, s, r, a = 0,
                l = this.length,
                c = "string" == typeof t && t;
            if (p.isFunction(t)) return this.each(function(e) {
                p(this).addClass(t.call(this, e, this.className))
            });
            if (c)
                for (e = (t || "").match(P) || []; l > a; a++)
                    if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(me, " ") : " ")) {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r = p.trim(i), n.className !== r && (n.className = r)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, s, r, a = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof t && t;
            if (p.isFunction(t)) return this.each(function(e) {
                p(this).removeClass(t.call(this, e, this.className))
            });
            if (c)
                for (e = (t || "").match(P) || []; l > a; a++)
                    if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(me, " ") : "")) {
                        for (s = 0; o = e[s++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        r = t ? p.trim(i) : "", n.className !== r && (n.className = r)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(p.isFunction(t) ? function(n) {
                p(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, i = 0, o = p(this), s = t.match(P) || []; e = s[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(n === D || "boolean" === n) && (this.className && p._data(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : p._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(me, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        p.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), p.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var ge = p.now(),
        ye = /\?/,
        ve = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
            o = p.trim(e + "");
        return o && !p.trim(o.replace(ve, function(t, e, o, s) {
            return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !s - !o, "")
        })) ? Function("return " + o)() : p.error("Invalid JSON: " + e)
    }, p.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? n = (new DOMParser).parseFromString(e, "text/xml") : ((n = new ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(e))
        } catch (t) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + e), n
    };
    var be, xe, we = /#.*$/,
        Se = /([?&])_=[^&]*/,
        Te = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ce = /^(?:GET|HEAD)$/,
        ke = /^\/\//,
        $e = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ee = {},
        Le = {},
        Ae = "*/".concat("*");
    try {
        xe = location.href
    } catch (t) {
        (xe = C.createElement("a")).href = "", xe = xe.href
    }

    function Pe(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                s = e.toLowerCase().match(P) || [];
            if (p.isFunction(n))
                for (; i = s[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function _e(t, e, n, i) {
        var o = {},
            s = t === Le;

        function r(a) {
            var l;
            return o[a] = !0, p.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function Ie(t, e) {
        var n, i, o = p.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && p.extend(!0, t, n), t
    }
    be = $e.exec(xe.toLowerCase()) || [], p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(be[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ae,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Ie(Ie(t, p.ajaxSettings), e) : Ie(p.ajaxSettings, t)
        },
        ajaxPrefilter: Pe(Ee),
        ajaxTransport: Pe(Le),
        ajax: function(t, e) {
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, i, o, s, r, a, l, c, u = p.ajaxSetup({}, e),
                d = u.context || u,
                h = u.context && (d.nodeType || d.jquery) ? p(d) : p.event,
                f = p.Deferred(),
                m = p.Callbacks("once memory"),
                g = u.statusCode || {},
                y = {},
                v = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; e = Te.exec(s);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = v[n] = v[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (u.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) g[e] = [g[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return l && l.abort(e), S(0, e), this
                    }
                };
            if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || xe) + "").replace(we, "").replace(ke, be[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = p.trim(u.dataType || "*").toLowerCase().match(P) || [""], null == u.crossDomain && (n = $e.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === be[1] && n[2] === be[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (be[3] || ("http:" === be[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = p.param(u.data, u.traditional)), _e(Ee, u, e, w), 2 === b) return w;
            for (i in (a = u.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Ce.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (ye.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = Se.test(o) ? o.replace(Se, "$1_=" + ge++) : o + (ye.test(o) ? "&" : "?") + "_=" + ge++)), u.ifModified && (p.lastModified[o] && w.setRequestHeader("If-Modified-Since", p.lastModified[o]), p.etag[o] && w.setRequestHeader("If-None-Match", p.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || e.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Ae + "; q=0.01" : "") : u.accepts["*"]), u.headers) w.setRequestHeader(i, u.headers[i]);
            if (u.beforeSend && (!1 === u.beforeSend.call(d, w, u) || 2 === b)) return w.abort();
            for (i in x = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[i](u[i]);
            if (l = _e(Le, u, e, w)) {
                w.readyState = 1, a && h.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (r = setTimeout(function() {
                    w.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, l.send(y, S)
                } catch (t) {
                    if (!(2 > b)) throw t;
                    S(-1, t)
                }
            } else S(-1, "No Transport");

            function S(t, e, n, i) {
                var c, y, v, x, S, T = e;
                2 !== b && (b = 2, r && clearTimeout(r), l = void 0, s = i || "", w.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, n && (x = function(t, e, n) {
                    for (var i, o, s, r, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (o)
                        for (r in a)
                            if (a[r] && a[r].test(o)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) s = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            i || (i = r)
                        }
                        s = s || i
                    }
                    return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
                }(u, w, n)), x = function(t, e, n, i) {
                    var o, s, r, a, l, c = {},
                        u = t.dataTypes.slice();
                    if (u[1])
                        for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                    for (s = u.shift(); s;)
                        if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(r = c[l + " " + s] || c["* " + s]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== r)
                            if (r && t.throws) e = r(e);
                            else try {
                                e = r(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: r ? t : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(u, x, w, c), c ? (u.ifModified && ((S = w.getResponseHeader("Last-Modified")) && (p.lastModified[o] = S), (S = w.getResponseHeader("etag")) && (p.etag[o] = S)), 204 === t || "HEAD" === u.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, y = x.data, c = !(v = x.error))) : (v = T, (t || !T) && (T = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || T) + "", c ? f.resolveWith(d, [y, T, w]) : f.rejectWith(d, [w, T, v]), w.statusCode(g), g = void 0, a && h.trigger(c ? "ajaxSuccess" : "ajaxError", [w, u, c ? y : v]), m.fireWith(d, [w, T]), a && (h.trigger("ajaxComplete", [w, u]), --p.active || p.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(t, e, n) {
            return p.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return p.get(t, void 0, e, "script")
        }
    }), p.each(["get", "post"], function(t, e) {
        p[e] = function(t, n, i, o) {
            return p.isFunction(n) && (o = o || i, i = n, n = void 0), p.ajax({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        p.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), p._evalUrl = function(t) {
        return p.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, p.fn.extend({
        wrapAll: function(t) {
            if (p.isFunction(t)) return this.each(function(e) {
                p(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = p(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(p.isFunction(t) ? function(e) {
                p(this).wrapInner(t.call(this, e))
            } : function() {
                var e = p(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = p.isFunction(t);
            return this.each(function(n) {
                p(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }), p.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !u.reliableHiddenOffsets() && "none" === (t.style && t.style.display || p.css(t, "display"))
    }, p.expr.filters.visible = function(t) {
        return !p.expr.filters.hidden(t)
    };
    var ze = /%20/g,
        Me = /\[\]$/,
        De = /\r?\n/g,
        Ne = /^(?:submit|button|image|reset|file)$/i,
        Oe = /^(?:input|select|textarea|keygen)/i;

    function je(t, e, n, i) {
        var o;
        if (p.isArray(e)) p.each(e, function(e, o) {
            n || Me.test(t) ? i(t, o) : je(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
        });
        else if (n || "object" !== p.type(e)) i(t, e);
        else
            for (o in e) je(t + "[" + o + "]", e[o], n, i)
    }
    p.param = function(t, e) {
        var n, i = [],
            o = function(t, e) {
                e = p.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(t) || t.jquery && !p.isPlainObject(t)) p.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (n in t) je(n, t[n], e, o);
        return i.join("&").replace(ze, "+")
    }, p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = p.prop(this, "elements");
                return t ? p.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !p(this).is(":disabled") && Oe.test(this.nodeName) && !Ne.test(t) && (this.checked || !Y.test(t))
            }).map(function(t, e) {
                var n = p(this).val();
                return null == n ? null : p.isArray(n) ? p.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(De, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(De, "\r\n")
                }
            }).get()
        }
    }), p.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && qe() || function() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }()
    } : qe;
    var He = 0,
        Fe = {},
        We = p.ajaxSettings.xhr();

    function qe() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }
    t.ActiveXObject && p(t).on("unload", function() {
        for (var t in Fe) Fe[t](void 0, !0)
    }), u.cors = !!We && "withCredentials" in We, (We = u.ajax = !!We) && p.ajaxTransport(function(t) {
        var e;
        if (!t.crossDomain || u.cors) return {
            send: function(n, i) {
                var o, s = t.xhr(),
                    r = ++He;
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) s[o] = t.xhrFields[o];
                for (o in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[o] && s.setRequestHeader(o, n[o] + "");
                s.send(t.hasContent && t.data || null), e = function(n, o) {
                    var a, l, c;
                    if (e && (o || 4 === s.readyState))
                        if (delete Fe[r], e = void 0, s.onreadystatechange = p.noop, o) 4 !== s.readyState && s.abort();
                        else {
                            c = {}, a = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                            try {
                                l = s.statusText
                            } catch (t) {
                                l = ""
                            }
                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                        }
                    c && i(a, l, c, s.getAllResponseHeaders())
                }, t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = Fe[r] = e : e()
            },
            abort: function() {
                e && e(void 0, !0)
            }
        }
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return p.globalEval(t), t
            }
        }
    }), p.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), p.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = C.head || p("head")[0] || C.documentElement;
            return {
                send: function(i, o) {
                    (e = C.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var Re = [],
        Be = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Re.pop() || p.expando + "_" + ge++;
            return this[t] = !0, t
        }
    }), p.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, s, r, a = !1 !== e.jsonp && (Be.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = p.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Be, "$1" + o) : !1 !== e.jsonp && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return r || p.error(o + " was not called"), r[0]
        }, e.dataTypes[0] = "json", s = t[o], t[o] = function() {
            r = arguments
        }, i.always(function() {
            t[o] = s, e[o] && (e.jsonpCallback = n.jsonpCallback, Re.push(o)), r && p.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), p.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || C;
        var i = x.exec(t),
            o = !n && [];
        return i ? [e.createElement(i[1])] : (i = p.buildFragment([t], e, o), o && o.length && p(o).remove(), p.merge([], i.childNodes))
    };
    var Xe = p.fn.load;
    p.fn.load = function(t, e, n) {
        if ("string" != typeof t && Xe) return Xe.apply(this, arguments);
        var i, o, s, r = this,
            a = t.indexOf(" ");
        return a >= 0 && (i = p.trim(t.slice(a, t.length)), t = t.slice(0, a)), p.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && p.ajax({
            url: t,
            type: s,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, r.html(i ? p("<div>").append(p.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            r.each(n, o || [t.responseText, e, t])
        }), this
    }, p.expr.filters.animated = function(t) {
        return p.grep(p.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Ye = t.document.documentElement;

    function Ue(t) {
        return p.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    p.offset = {
        setOffset: function(t, e, n) {
            var i, o, s, r, a, l, c = p.css(t, "position"),
                u = p(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), s = p.css(t, "top"), l = p.css(t, "left"), ("absolute" === c || "fixed" === c) && p.inArray("auto", [s, l]) > -1 ? (r = (i = u.position()).top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), p.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
        }
    }, p.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                p.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                s = o && o.ownerDocument;
            return s ? (e = s.documentElement, p.contains(e, o) ? (typeof o.getBoundingClientRect !== D && (i = o.getBoundingClientRect()), n = Ue(s), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === p.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), p.nodeName(t[0], "html") || (n = t.offset()), n.top += p.css(t[0], "borderTopWidth", !0), n.left += p.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - p.css(i, "marginTop", !0),
                    left: e.left - n.left - p.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Ye; t && !p.nodeName(t, "html") && "static" === p.css(t, "position");) t = t.offsetParent;
                return t || Ye
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        p.fn[t] = function(i) {
            return X(this, function(t, i, o) {
                var s = Ue(t);
                return void 0 === o ? s ? e in s ? s[e] : s.document.documentElement[i] : t[i] : void(s ? s.scrollTo(n ? p(s).scrollLeft() : o, n ? o : p(s).scrollTop()) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), p.each(["top", "left"], function(t, e) {
        p.cssHooks[e] = Mt(u.pixelPosition, function(t, n) {
            return n ? (n = Pt(t, e), It.test(n) ? p(t).position()[e] + "px" : n) : void 0
        })
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        p.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            p.fn[i] = function(i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    r = n || (!0 === i || !0 === o ? "margin" : "border");
                return X(this, function(e, n, i) {
                    var o;
                    return p.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? p.css(e, n, r) : p.style(e, n, i, r)
                }, e, s ? i : void 0, s, null)
            }
        })
    }), p.fn.size = function() {
        return this.length
    }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return p
    });
    var Ve = t.jQuery,
        Qe = t.$;
    return p.noConflict = function(e) {
        return t.$ === p && (t.$ = Qe), e && t.jQuery === p && (t.jQuery = Ve), p
    }, typeof e === D && (t.jQuery = t.$ = p), p
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(n, i) {
            var o, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(n),
                appendDots: t(n),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, n) {
                    return t('<button type="button" />').text(n + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(n), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(n).data("slick") || {}, s.options = t.extend({}, s.defaults, i, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = e++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null;
        else if (n < 0 || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : i ? t(e).insertBefore(o.$slides.eq(n)) : t(e).insertAfter(o.$slides.eq(n)) : !0 === i ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, n) {
            t(n).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, e.prototype.animateSlide = function(e, n) {
        var i = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t), !1 === o.options.vertical ? (i[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
            o.disableTransition(), n.call()
        }, o.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e
    }, e.prototype.asNavFor = function(e) {
        var n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var n = t(this).slick("getSlick");
            n.unslicked || n.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(t) {
        var e = this,
            n = {};
        !1 === e.options.fade ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
    }, e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, n, i = this;
        if (!0 === i.options.dots) {
            for (i.$slider.addClass("slick-dotted"), n = t("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) n.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, n) {
            t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var t, e, n, i, o, s, r, a = this;
        if (i = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; t < o; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var u = t * r + (e * a.options.slidesPerRow + n);
                        s.get(u) && c.appendChild(s.get(u))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, n) {
        var i, o, s, r = this,
            a = !1,
            l = r.$slider.width(),
            c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (i in o = null, r.breakpoints) r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[i] && (o = r.breakpoints[i]) : s > r.breakpoints[i] && (o = r.breakpoints[i]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || n) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = o), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, e.prototype.changeSlide = function(e, n) {
        var i, o, s = this,
            r = t(e.currentTarget);
        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), i = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
            case "previous":
                o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                break;
            case "next":
                o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                break;
            case "index":
                var a = 0 === e.data.index ? 0 : e.data.index || r.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(a), !1, n), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(t) {
        var e, n;
        if (n = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
        else
            for (var i in e) {
                if (t < e[i]) {
                    t = n;
                    break
                }
                n = e[i]
            }
        return t
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function(e) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), t(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, e || n.$slider.trigger("destroy", [n])
    }, e.prototype.disableTransition = function(t) {
        var e = this,
            n = {};
        n[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
    }, e.prototype.fadeSlide = function(t, e) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(t).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(t).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), e && setTimeout(function() {
            n.disableTransition(t), e.call()
        }, n.options.speed))
    }, e.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) {
            n.stopImmediatePropagation();
            var i = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = i.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, e.prototype.getDotCount = function() {
        var t = this,
            e = 0,
            n = 0,
            i = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow) ++i;
            else
                for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode) i = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return i - 1
    }, e.prototype.getLeft = function(t) {
        var e, n, i, o, s = this,
            r = 0;
        return s.slideOffset = 0, n = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = n * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (t - s.slideCount)) * n * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * n * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (t + s.options.slidesToShow - s.slideCount) * n), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * n * -1 + r, !0 === s.options.variableWidth && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === s.options.centerMode && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (s.$list.width() - i.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t]
    }, e.prototype.getNavigableIndexes = function() {
        var t, e = this,
            n = 0,
            i = 0,
            o = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (n = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); n < t;) o.push(n), n = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(o, s) {
            if (s.offsetLeft - n + t(s).outerWidth() / 2 > -1 * i.swipeLeft) return e = s, !1
        }), Math.abs(t(e).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var n = this;
        t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), e && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this,
            n = Math.ceil(e.slideCount / e.options.slidesToShow),
            i = e.getNavigableIndexes().filter(function(t) {
                return t >= 0 && t < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(n) {
            var o = i.indexOf(n);
            t(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + n,
                tabindex: -1
            }), -1 !== o && t(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + o
            })
        }), e.$dots.attr("role", "tablist").find("li").each(function(o) {
            var s = i[o];
            t(this).attr({
                role: "presentation"
            }), t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + o,
                "aria-controls": "slick-slide" + e.instanceUid + s,
                "aria-label": o + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var o = e.currentSlide, s = o + e.options.slidesToShow; o < s; o++) e.$slides.eq(o).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
    }, e.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this),
                    n = t(this).attr("data-lazy"),
                    i = t(this).attr("data-srcset"),
                    o = t(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        i && (e.attr("srcset", i), o && e.attr("sizes", o)), e.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, e, n])
                    })
                }, r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, n])
                }, r.src = n
            })
        }
        var n, i, o, s = this;
        if (!0 === s.options.centerMode ? !0 === s.options.infinite ? o = (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(i + s.options.slidesToShow), !0 === s.options.fade && (i > 0 && i--, o <= s.slideCount && o++)), n = s.$slider.find(".slick-slide").slice(i, o), "anticipated" === s.options.lazyLoad)
            for (var r = i - 1, a = o, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), n = (n = n.add(l.eq(r))).add(l.eq(a)), r--, a++;
        e(n), s.slideCount <= s.options.slidesToShow ? e(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function(e) {
        var n = this;
        n.unslicked || (n.$slider.trigger("afterChange", [n, e]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && t(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var n, i, o, s, r, a = this,
            l = t("img[data-lazy]", a.$slider);
        l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), s = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            o && (n.attr("srcset", o), s && n.attr("sizes", s)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                a.progressiveLazyLoad(e + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
        }, r.src = i) : a.$slider.trigger("allImagesLoaded", [a])
    }, e.prototype.refresh = function(e) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
            currentSlide: n
        }), o.init(), e || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, n, i, o = this,
            s = o.options.responsive || null;
        if ("array" === t.type(s) && s.length) {
            for (e in o.respondTo = o.options.respondTo || "window", s)
                if (i = o.breakpoints.length - 1, s.hasOwnProperty(e)) {
                    for (n = s[e].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(n), o.breakpointSettings[n] = s[e].settings
                }
            o.breakpoints.sort(function(t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, n) {
        var i = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : i.slideCount - 1 : !0 === e ? --t : t, i.slideCount < 1 || t < 0 || t > i.slideCount - 1) return !1;
        i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
    }, e.prototype.setCSS = function(t) {
        var e, n, i = this,
            o = {};
        !0 === i.options.rtl && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", o[i.positionProp] = t, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + e + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + e + ", " + n + ", 0px)", i.$slideTrack.css(o)))
    }, e.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, n = this;
        n.$slides.each(function(i, o) {
            e = n.slideWidth * i * -1, !0 === n.options.rtl ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, n, i, o, s, r = this,
            a = !1;
        if ("object" === t.type(arguments[0]) ? (i = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[i] = o;
        else if ("multiple" === s) t.each(i, function(t, e) {
            r.options[t] = e
        });
        else if ("responsive" === s)
            for (n in o)
                if ("array" !== t.type(r.options.responsive)) r.options.responsive = [o[n]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === o[n].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(o[n])
                }
        a && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, e.prototype.setSlideClasses = function(t) {
        var e, n, i, o, s = this;
        if (n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + t, n.slice(i - e + 1 + r, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")
        } else t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, i = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? n.slice(i - (s.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - i; e -= 1) n = e - 1, t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i + o.slideCount; e += 1) n = e, t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function(t) {
        t || this.autoPlay(), this.interrupted = t
    }, e.prototype.selectHandler = function(e) {
        var n = this,
            i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
    }, e.prototype.slideHandler = function(t, e, n) {
        var i, o, s, r, a, l = null,
            c = this;
        if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
            if (!1 === e && c.asNavFor(t), i = t, l = c.getLeft(i), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(r, function() {
                c.postSlide(i)
            }) : c.postSlide(i));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(r, function() {
            c.postSlide(i)
        }) : c.postSlide(i));
        else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight();
            !0 !== n ? c.animateSlide(l, function() {
                c.postSlide(o)
            }) : c.postSlide(o)
        }
    }, e.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var t, e, n, i, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(e, t), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function(t) {
        var e, n, i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
        if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
                case "left":
                case "down":
                    e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function(t) {
        var e, n, i, o, s, r, a = this;
        return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), n = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + i * o : a.swipeLeft = e + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = e + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, e.prototype.swipeStart = function(t) {
        var e, n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, n.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function() {
        var t, n, i = this,
            o = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            r = i.length;
        for (t = 0; t < r; t++)
            if ("object" == typeof o || void 0 === o ? i[t].slick = new e(i[t], o) : n = i[t].slick[o].apply(i[t].slick, s), void 0 !== n) return n;
        return i
    }
}),
function(t, e, n, i) {
    "use strict";

    function o(t) {
        var e = n(t.currentTarget),
            i = t.data ? t.data.options : {},
            o = e.attr("data-fancybox") || "",
            s = 0,
            r = [];
        t.isDefaultPrevented() || (t.preventDefault(), o ? (s = (r = (r = i.selector ? n(i.selector) : t.data ? t.data.items : []).length ? r.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]')).index(e)) < 0 && (s = 0) : r = [e], n.fancybox.open(r, i, s))
    }
    if (n) {
        if (n.fn.fancybox) return void("console" in t && console.log("fancyBox already initialized"));
        var s = {
                loop: !1,
                margin: [44, 0],
                gutter: 50,
                keyboard: !0,
                arrows: !0,
                infobar: !0,
                toolbar: !0,
                buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
                idleTime: 3,
                smallBtn: "auto",
                protect: !1,
                modal: !1,
                image: {
                    preload: "auto"
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 500,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                    smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'
                },
                parentEl: "body",
                autoFocus: !1,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 4e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    idleTime: !1,
                    margin: 0,
                    clickContent: function(t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function(t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function(t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schliessen",
                        NEXT: "Weiter",
                        PREV: "ZurÃƒÆ’Ã‚Â¼ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃƒÆ’Ã‚Â¤ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "MaÃƒÆ’Ã…Â¸stab"
                    }
                }
            },
            r = n(t),
            a = n(e),
            l = 0,
            c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            },
            u = function() {
                var t, n = e.createElement("fakeelement"),
                    o = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in o)
                    if (n.style[t] !== i) return o[t];
                return "transitionend"
            }(),
            d = function(t) {
                return t && t.length && t[0].offsetHeight
            },
            p = function(t, i, o) {
                var s = this;
                s.opts = n.extend(!0, {
                    index: o
                }, n.fancybox.defaults, i || {}), n.fancybox.isMobile && (s.opts = n.extend(!0, {}, s.opts, s.opts.mobile)), i && n.isArray(i.buttons) && (s.opts.buttons = i.buttons), s.id = s.opts.id || ++l, s.group = [], s.currIndex = parseInt(s.opts.index, 10) || 0, s.prevIndex = null, s.prevPos = null, s.currPos = 0, s.firstRun = null, s.createGroup(t), s.group.length && (s.$lastFocus = n(e.activeElement).blur(), s.slides = {}, s.init())
            };
        n.extend(p.prototype, {
            init: function() {
                var o, s, r, l = this,
                    c = l.group[l.currIndex],
                    u = c.opts,
                    d = n.fancybox.scrollbarWidth;
                l.scrollTop = a.scrollTop(), l.scrollLeft = a.scrollLeft(), n.fancybox.getInstance() || (n("body").addClass("fancybox-active"), /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream ? "image" !== c.type && n("body").css("top", -1 * n("body").scrollTop()).addClass("fancybox-iosfix") : !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (d === i && (o = n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"), d = n.fancybox.scrollbarWidth = o[0].offsetWidth - o[0].clientWidth, o.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + d + "px; }</style>"), n("body").addClass("compensate-for-scrollbar"))), r = "", n.each(u.buttons, function(t, e) {
                    r += u.btnTpl[e] || ""
                }), s = n(l.translate(l, u.baseTpl.replace("{{buttons}}", r).replace("{{arrows}}", u.btnTpl.arrowLeft + u.btnTpl.arrowRight))).attr("id", "fancybox-container-" + l.id).addClass("fancybox-is-hidden").addClass(u.baseClass).data("FancyBox", l).appendTo(u.parentEl), l.$refs = {
                    container: s
                }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                    l.$refs[t] = s.find(".fancybox-" + t)
                }), l.trigger("onInit"), l.activate(), l.jumpTo(l.currIndex)
            },
            translate: function(t, e) {
                var n = t.opts.i18n[t.opts.lang];
                return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                    var o = n[e];
                    return o === i ? t : o
                })
            },
            createGroup: function(t) {
                var e = this,
                    o = n.makeArray(t);
                n.each(o, function(t, o) {
                    var s, r, a, l, c, u = {},
                        d = {};
                    n.isPlainObject(o) ? (u = o, d = o.opts || o) : "object" === n.type(o) && n(o).length ? (d = (s = n(o)).data(), (d = n.extend({}, d, d.options || {})).$orig = s, u.src = d.src || s.attr("href"), u.type || u.src || (u.type = "inline", u.src = o)) : u = {
                        type: "html",
                        src: o + ""
                    }, u.opts = n.extend(!0, {}, e.opts, d), n.isArray(d.buttons) && (u.opts.buttons = d.buttons), r = u.type || u.opts.type, l = u.src || "", !r && l && (l.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : l.match(/\.(pdf)((\?|#).*)?$/i) ? r = "pdf" : (a = l.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (r = "video", u.opts.videoFormat || (u.opts.videoFormat = "video/" + ("ogv" === a[1] ? "ogg" : a[1]))) : "#" === l.charAt(0) && (r = "inline")), r ? u.type = r : e.trigger("objectNeedsType", u), u.index = e.group.length, u.opts.$orig && !u.opts.$orig.length && delete u.opts.$orig, !u.opts.$thumb && u.opts.$orig && (u.opts.$thumb = u.opts.$orig.find("img:first")), u.opts.$thumb && !u.opts.$thumb.length && delete u.opts.$thumb, "function" === n.type(u.opts.caption) && (u.opts.caption = u.opts.caption.apply(o, [e, u])), "function" === n.type(e.opts.caption) && (u.opts.caption = e.opts.caption.apply(o, [e, u])), u.opts.caption instanceof n || (u.opts.caption = u.opts.caption === i ? "" : u.opts.caption + ""), "ajax" === r && ((c = l.split(/\s+/, 2)).length > 1 && (u.src = c.shift(), u.opts.filter = c.shift())), "auto" == u.opts.smallBtn && (n.inArray(r, ["html", "inline", "ajax"]) > -1 ? (u.opts.toolbar = !1, u.opts.smallBtn = !0) : u.opts.smallBtn = !1), "pdf" === r && (u.type = "iframe", u.opts.iframe.preload = !1), u.opts.modal && (u.opts = n.extend(!0, u.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), e.group.push(u)
                })
            },
            addEvents: function() {
                var i = this;
                i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                    t.stopPropagation(), t.preventDefault(), i.close(t)
                }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
                    t.stopPropagation(), t.preventDefault(), i.previous()
                }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
                    t.stopPropagation(), t.preventDefault(), i.next()
                }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                    i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }), r.on("orientationchange.fb resize.fb", function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? c(function() {
                        i.update()
                    }) : (i.$refs.stage.hide(), setTimeout(function() {
                        i.$refs.stage.show(), i.update()
                    }, 600))
                }), a.on("focusin.fb", function(t) {
                    var o = n.fancybox ? n.fancybox.getInstance() : null;
                    o.isClosing || !o.current || !o.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || o && "fixed" !== n(t.target).css("position") && !o.$refs.container.has(t.target).length && (t.stopPropagation(), o.focus(), r.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))
                }), a.on("keydown.fb", function(t) {
                    var e = i.current,
                        o = t.keyCode || t.which;
                    if (e && e.opts.keyboard && !n(t.target).is("input") && !n(t.target).is("textarea")) return 8 === o || 27 === o ? (t.preventDefault(), void i.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void i.previous()) : 39 === o || 40 === o ? (t.preventDefault(), void i.next()) : void i.trigger("afterKeydown", t, o)
                }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                    i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
                }), i.idleInterval = t.setInterval(function() {
                    i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                var e = this;
                r.off("orientationchange.fb resize.fb"), a.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function(t, e, o) {
                var s, r, a, l, c, u, p, h = this,
                    f = h.group.length;
                if (!(h.isDragging || h.isClosing || h.isAnimating && h.firstRun)) {
                    if (t = parseInt(t, 10), !(r = h.current ? h.current.opts.loop : h.opts.loop) && (t < 0 || t >= f)) return !1;
                    if (s = h.firstRun = null === h.firstRun, !(f < 2 && !s && h.isDragging)) {
                        if (l = h.current, h.prevIndex = h.currIndex, h.prevPos = h.currPos, a = h.createSlide(t), f > 1 && ((r || a.index > 0) && h.createSlide(t - 1), (r || a.index < f - 1) && h.createSlide(t + 1)), h.current = a, h.currIndex = a.index, h.currPos = a.pos, h.trigger("beforeShow", s), h.updateControls(), u = n.fancybox.getTranslate(a.$slide), a.isMoved = (0 !== u.left || 0 !== u.top) && !a.$slide.hasClass("fancybox-animated"), a.forcedDuration = i, n.isNumeric(e) ? a.forcedDuration = e : e = a.opts[s ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), s) return a.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"), h.$refs.container.removeClass("fancybox-is-hidden"), d(h.$refs.container), h.$refs.container.addClass("fancybox-is-open"), a.$slide.addClass("fancybox-slide--current"), h.loadSlide(a), void h.preload("image");
                        n.each(h.slides, function(t, e) {
                            n.fancybox.stop(e.$slide)
                        }), a.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), a.isMoved ? (c = Math.round(a.$slide.width()), n.each(h.slides, function(t, i) {
                            var o = i.pos - a.pos;
                            n.fancybox.animate(i.$slide, {
                                top: 0,
                                left: o * c + o * i.opts.gutter
                            }, e, function() {
                                i.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === h.currPos && (a.isMoved = !1, h.complete())
                            })
                        })) : h.$refs.stage.children().removeAttr("style"), a.isLoaded ? h.revealContent(a) : h.loadSlide(a), h.preload("image"), l.pos !== a.pos && (p = "fancybox-slide--" + (l.pos > a.pos ? "next" : "previous"), l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), l.isComplete = !1, e && (a.isMoved || a.opts.transitionEffect) && (a.isMoved ? l.$slide.addClass(p) : (p = "fancybox-animated " + p + " fancybox-fx-" + a.opts.transitionEffect, n.fancybox.animate(l.$slide, p, e, function() {
                            l.$slide.removeClass(p).removeAttr("style")
                        }))))
                    }
                }
            },
            createSlide: function(t) {
                var e, i, o = this;
                return i = (i = t % o.group.length) < 0 ? o.group.length + i : i, !o.slides[t] && o.group[i] && (e = n('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[t] = n.extend(!0, {}, o.group[i], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }), o.updateSlide(o.slides[t])), o.slides[t]
            },
            scaleToActual: function(t, e, o) {
                var s, r, a, l, c, u = this,
                    d = u.current,
                    p = d.$content,
                    h = parseInt(d.$slide.width(), 10),
                    f = parseInt(d.$slide.height(), 10),
                    m = d.width,
                    g = d.height;
                "image" != d.type || d.hasError || !p || u.isAnimating || (n.fancybox.stop(p), u.isAnimating = !0, t = t === i ? .5 * h : t, e = e === i ? .5 * f : e, l = m / (s = n.fancybox.getTranslate(p)).width, c = g / s.height, r = .5 * h - .5 * m, a = .5 * f - .5 * g, m > h && ((r = s.left * l - (t * l - t)) > 0 && (r = 0), r < h - m && (r = h - m)), g > f && ((a = s.top * c - (e * c - e)) > 0 && (a = 0), a < f - g && (a = f - g)), u.updateCursor(m, g), n.fancybox.animate(p, {
                    top: a,
                    left: r,
                    scaleX: l,
                    scaleY: c
                }, o || 330, function() {
                    u.isAnimating = !1
                }), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())
            },
            scaleToFit: function(t) {
                var e, i = this,
                    o = i.current,
                    s = o.$content;
                "image" != o.type || o.hasError || !s || i.isAnimating || (n.fancybox.stop(s), i.isAnimating = !0, e = i.getFitPos(o), i.updateCursor(e.width, e.height), n.fancybox.animate(s, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / s.width(),
                    scaleY: e.height / s.height()
                }, t || 330, function() {
                    i.isAnimating = !1
                }))
            },
            getFitPos: function(t) {
                var e, i, o, s, r, a = t.$content,
                    l = t.width,
                    c = t.height,
                    u = t.opts.margin;
                return !(!a || !a.length || !l && !c) && ("number" === n.type(u) && (u = [u, u]), 2 == u.length && (u = [u[0], u[1], u[0], u[1]]), e = parseInt(this.$refs.stage.width(), 10) - (u[1] + u[3]), i = parseInt(this.$refs.stage.height(), 10) - (u[0] + u[2]), o = Math.min(1, e / l, i / c), s = Math.floor(o * l), r = Math.floor(o * c), {
                    top: Math.floor(.5 * (i - r)) + u[0],
                    left: Math.floor(.5 * (e - s)) + u[3],
                    width: s,
                    height: r
                })
            },
            update: function() {
                var t = this;
                n.each(t.slides, function(e, n) {
                    t.updateSlide(n)
                })
            },
            updateSlide: function(t, e) {
                var i = this,
                    o = t && t.$content;
                o && (t.width || t.height) && (i.isAnimating = !1, n.fancybox.stop(o), n.fancybox.setTranslate(o, i.getFitPos(t)), t.pos === i.currPos && i.updateCursor()), t.$slide.trigger("refresh"), i.trigger("onUpdate", t)
            },
            centerSlide: function(t, e) {
                var o, s;
                this.current && (o = Math.round(t.$slide.width()), s = t.pos - this.current.pos, n.fancybox.animate(t.$slide, {
                    top: 0,
                    left: s * o + s * t.opts.gutter,
                    opacity: 1
                }, e === i ? 0 : e, null, !1))
            },
            updateCursor: function(t, e) {
                var n = this,
                    o = n.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                n.current && !n.isClosing && (n.isZoomable() ? (o.addClass("fancybox-is-zoomable"), (t !== i && e !== i ? t < n.current.width && e < n.current.height : n.isScaledDown()) ? o.addClass("fancybox-can-zoomIn") : n.current.opts.touch ? o.addClass("fancybox-can-drag") : o.addClass("fancybox-can-zoomOut")) : n.current.opts.touch && o.addClass("fancybox-can-drag"))
            },
            isZoomable: function() {
                var t, e = this,
                    i = e.current;
                if (i && !e.isClosing) return !!("image" === i.type && i.isLoaded && !i.hasError && ("zoom" === i.opts.clickContent || n.isFunction(i.opts.clickContent) && "zoom" === i.opts.clickContent(i)) && (t = e.getFitPos(i), i.width > t.width || i.height > t.height))
            },
            isScaledDown: function() {
                var t = this.current,
                    e = t.$content,
                    i = !1;
                return e && (i = (i = n.fancybox.getTranslate(e)).width < t.width || i.height < t.height), i
            },
            canPan: function() {
                var t = this.current,
                    e = t.$content,
                    n = !1;
                return e && (n = this.getFitPos(t), n = Math.abs(e.width() - n.width) > 1 || Math.abs(e.height() - n.height) > 1), n
            },
            loadSlide: function(t) {
                var e, i, o, s = this;
                if (!t.isLoading && !t.isLoaded) {
                    switch (t.isLoading = !0, s.trigger("beforeLoad", t), e = t.type, (i = t.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {
                        case "image":
                            s.setImage(t);
                            break;
                        case "iframe":
                            s.setIframe(t);
                            break;
                        case "html":
                            s.setContent(t, t.src || t.content);
                            break;
                        case "inline":
                            n(t.src).length ? s.setContent(t, n(t.src)) : s.setError(t);
                            break;
                        case "ajax":
                            s.showLoading(t), o = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                url: t.src,
                                success: function(e, n) {
                                    "success" === n && s.setContent(t, e)
                                },
                                error: function(e, n) {
                                    e && "abort" !== n && s.setError(t)
                                }
                            })), i.one("onReset", function() {
                                o.abort()
                            });
                            break;
                        case "video":
                            s.setContent(t, '<video controls><source src="' + t.src + '" type="' + t.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video>");
                            break;
                        default:
                            s.setError(t)
                    }
                    return !0
                }
            },
            setImage: function(e) {
                var i, o, s, r, a = this,
                    l = e.opts.srcset || e.opts.image.srcset;
                if (l) {
                    s = t.devicePixelRatio || 1, r = t.innerWidth * s, (o = l.split(",").map(function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function(t, n) {
                            var i = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === n ? e.url = t : void(i && (e.value = i, e.postfix = t[t.length - 1]))
                        }), e
                    })).sort(function(t, e) {
                        return t.value - e.value
                    });
                    for (var c = 0; c < o.length; c++) {
                        var u = o[c];
                        if ("w" === u.postfix && u.value >= r || "x" === u.postfix && u.value >= s) {
                            i = u;
                            break
                        }
                    }!i && o.length && (i = o[o.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value))
                }
                e.$content = n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide), !1 !== e.opts.preload && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("error", function() {
                    n(this).remove(), e.$ghost = null, a.setBigImage(e)
                }).one("load", function() {
                    a.afterLoad(e), a.setBigImage(e)
                }).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : a.setBigImage(e)
            },
            setBigImage: function(t) {
                var e = this,
                    i = n("<img />");
                t.$image = i.one("error", function() {
                    e.setError(t)
                }).one("load", function() {
                    clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = t.opts.width || this.naturalWidth, t.height = t.opts.height || this.naturalHeight, t.opts.image.srcset && i.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function() {
                        t.timouts = null, t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i[0].complete || "complete" == i[0].readyState) && i[0].naturalWidth && i[0].naturalHeight ? i.trigger("load") : i[0].error ? i.trigger("error") : t.timouts = setTimeout(function() {
                    i[0].complete || t.hasError || e.showLoading(t)
                }, 100)
            },
            setIframe: function(t) {
                var e, o = this,
                    s = t.opts.iframe,
                    r = t.$slide;
                t.$content = n('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(r), e = n(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(s.attr).appendTo(t.$content), s.preload ? (o.showLoading(t), e.on("load.fb error.fb", function(e) {
                    this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
                }), r.on("refresh.fb", function() {
                    var n, o, r = t.$content,
                        a = s.css.width,
                        l = s.css.height;
                    if (1 === e[0].isReady) {
                        try {
                            o = e.contents().find("body")
                        } catch (t) {}
                        o && o.length && (a === i && (n = e[0].contentWindow.document.documentElement.scrollWidth, a = Math.ceil(o.outerWidth(!0) + (r.width() - n)), a += r.outerWidth() - r.innerWidth()), l === i && (l = Math.ceil(o.outerHeight(!0)), l += r.outerHeight() - r.innerHeight()), a && r.width(a), l && r.height(l)), r.removeClass("fancybox-is-hidden")
                    }
                })) : this.afterLoad(t), e.attr("src", t.src), !0 === t.opts.smallBtn && t.$content.prepend(o.translate(t, t.opts.btnTpl.smallBtn)), r.one("onReset", function() {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank")
                    } catch (t) {}
                    n(this).empty(), t.isLoaded = !1
                })
            },
            setContent: function(t, e) {
                this.isClosing || (this.hideLoading(t), t.$slide.empty(), function(t) {
                    return t && t.hasOwnProperty && t instanceof n
                }(e) && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = n("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (3 === (e = n("<div>").append(n.trim(e)).contents())[0].nodeType && (e = n("<div>").html(e))), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                    n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1)
                }), t.$content = n(e).appendTo(t.$slide), this.afterLoad(t))
            },
            setError: function(t) {
                t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
            },
            showLoading: function(t) {
                (t = t || this.current) && !t.$spinner && (t.$spinner = n(this.opts.spinnerTpl).appendTo(t.$slide))
            },
            hideLoading: function(t) {
                (t = t || this.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
            },
            afterLoad: function(t) {
                var e = this;
                e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                    return 2 == t.button && t.preventDefault(), !0
                }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
            },
            revealContent: function(t) {
                var e, o, s, r, a, l = this,
                    c = t.$slide,
                    u = !1;
                return e = t.opts[l.firstRun ? "animationEffect" : "transitionEffect"], s = t.opts[l.firstRun ? "animationDuration" : "transitionDuration"], s = parseInt(t.forcedDuration === i ? s : t.forcedDuration, 10), !t.isMoved && t.pos === l.currPos && s || (e = !1), "zoom" !== e || t.pos === l.currPos && s && "image" === t.type && !t.hasError && (u = l.getThumbPos(t)) || (e = "fade"), "zoom" === e ? ((a = l.getFitPos(t)).scaleX = a.width / u.width, a.scaleY = a.height / u.height, delete a.width, delete a.height, "auto" == (r = t.opts.zoomOpacity) && (r = Math.abs(t.width / t.height - u.width / u.height) > .1), r && (u.opacity = .1, a.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), u), d(t.$content), void n.fancybox.animate(t.$content, a, s, function() {
                    l.complete()
                })) : (l.updateSlide(t), e ? (n.fancybox.stop(c), o = "fancybox-animated fancybox-slide--" + (t.pos >= l.prevPos ? "next" : "previous") + " fancybox-fx-" + e, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(o), t.$content.removeClass("fancybox-is-hidden"), d(c), void n.fancybox.animate(c, "fancybox-slide--current", s, function(e) {
                    c.removeClass(o).removeAttr("style"), t.pos === l.currPos && l.complete()
                }, !0)) : (d(c), t.$content.removeClass("fancybox-is-hidden"), void(t.pos === l.currPos && l.complete())))
            },
            getThumbPos: function(i) {
                var o, s = !1,
                    r = i.opts.$thumb,
                    a = r ? r.offset() : 0;
                return a && r[0].ownerDocument === e && function(e) {
                    for (var i = e[0], o = i.getBoundingClientRect(), s = []; null !== i.parentElement;) "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;
                    return s.every(function(t) {
                        var e = Math.min(o.right, t.right) - Math.max(o.left, t.left),
                            n = Math.min(o.bottom, t.bottom) - Math.max(o.top, t.top);
                        return e > 0 && n > 0
                    }) && o.bottom > 0 && o.right > 0 && o.left < n(t).width() && o.top < n(t).height()
                }(r) && (o = this.$refs.stage.offset(), s = {
                    top: a.top - o.top + parseFloat(r.css("border-top-width") || 0),
                    left: a.left - o.left + parseFloat(r.css("border-left-width") || 0),
                    width: r.width(),
                    height: r.height(),
                    scaleX: 1,
                    scaleY: 1
                }), s
            },
            complete: function() {
                var t = this,
                    i = t.current,
                    o = {};
                i.isMoved || !i.isLoaded || i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), t.preload("inline"), d(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function(e, i) {
                    i.pos >= t.currPos - 1 && i.pos <= t.currPos + 1 ? o[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove())
                }), t.slides = o, t.updateCursor(), t.trigger("afterShow"), i.$slide.find("video,audio").first().trigger("play"), (n(e.activeElement).is("[disabled]") || i.opts.autoFocus && "image" != i.type && "iframe" !== i.type) && t.focus())
            },
            preload: function(t) {
                var e = this,
                    n = e.slides[e.currPos + 1],
                    i = e.slides[e.currPos - 1];
                n && n.type === t && e.loadSlide(n), i && i.type === t && e.loadSlide(i)
            },
            focus: function() {
                var t, e = this.current;
                this.isClosing || (e && e.isComplete && ((t = e.$slide.find("input[autofocus]:enabled:visible:first")).length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), (t = t && t.length ? t : this.$refs.container).focus())
            },
            activate: function() {
                var t = this;
                n(".fancybox-container").each(function() {
                    var e = n(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
            },
            close: function(t, e) {
                var i, o, s, r, a, l, p = this,
                    h = p.current,
                    f = function() {
                        p.cleanUp(t)
                    };
                return !(p.isClosing || (p.isClosing = !0, !1 === p.trigger("beforeClose", t) ? (p.isClosing = !1, c(function() {
                    p.update()
                }), 1) : (p.removeEvents(), h.timouts && clearTimeout(h.timouts), s = h.$content, i = h.opts.animationEffect, o = n.isNumeric(e) ? e : i ? h.opts.animationDuration : 0, h.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), h.$slide.siblings().trigger("onReset").remove(), o && p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), p.hideLoading(h), p.hideControls(), p.updateCursor(), "zoom" !== i || !0 !== t && s && o && "image" === h.type && !h.hasError && (l = p.getThumbPos(h)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(s), a = n.fancybox.getTranslate(s), a.width = a.width * a.scaleX, a.height = a.height * a.scaleY, r = h.opts.zoomOpacity, "auto" == r && (r = Math.abs(h.width / h.height - l.width / l.height) > .1), r && (l.opacity = 0), a.scaleX = a.width / l.width, a.scaleY = a.height / l.height, a.width = l.width, a.height = l.height, n.fancybox.setTranslate(h.$content, a), d(h.$content), n.fancybox.animate(h.$content, l, o, f), 0) : (i && o ? !0 === t ? setTimeout(f, o) : n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, o, f) : f(), 0))))
            },
            cleanUp: function(t) {
                var i, o, s = this,
                    a = n("body");
                s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", t), s.$lastFocus && s.current.opts.backFocus && s.$lastFocus.focus(), s.current = null, (i = n.fancybox.getInstance()) ? i.activate() : (r.scrollTop(s.scrollTop).scrollLeft(s.scrollLeft), a.removeClass("fancybox-active compensate-for-scrollbar"), a.hasClass("fancybox-iosfix") && (o = parseInt(e.body.style.top, 10), a.removeClass("fancybox-iosfix").css("top", "").scrollTop(-1 * o)), n("#fancybox-style-noscroll").remove())
            },
            trigger: function(t, e) {
                var i, o = Array.prototype.slice.call(arguments, 1),
                    s = this,
                    r = e && e.opts ? e : s.current;
                return r ? o.unshift(r) : r = s, o.unshift(s), n.isFunction(r.opts[t]) && (i = r.opts[t].apply(r, o)), !1 === i ? i : void("afterClose" !== t && s.$refs ? s.$refs.container.trigger(t + ".fb", o) : a.trigger(t + ".fb", o))
            },
            updateControls: function(t) {
                var e = this,
                    n = e.current,
                    i = n.index,
                    o = n.opts.caption,
                    s = e.$refs.container,
                    r = e.$refs.caption;
                n.$slide.trigger("refresh"), e.$caption = o && o.length ? r.html(o) : null, e.isHiddenControls || e.isIdle || e.showControls(), s.find("[data-fancybox-count]").html(e.group.length), s.find("[data-fancybox-index]").html(i + 1), s.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && i <= 0), s.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && i >= e.group.length - 1), "image" === n.type ? s.find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : s.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
            },
            hideControls: function() {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            },
            showControls: function() {
                var t = this,
                    e = t.current ? t.current.opts : t.opts,
                    n = t.$refs.container;
                t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls()
            }
        }), n.fancybox = {
            version: "3.2.10",
            defaults: s,
            getInstance: function(t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    i = Array.prototype.slice.call(arguments, 1);
                return e instanceof p && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i), e)
            },
            open: function(t, e, n) {
                return new p(t, e, n)
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(), !0 === t && this.close())
            },
            destroy: function() {
                this.close(!0), a.off("click.fb-start")
            },
            isMobile: e.createTouch !== i && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var n = e.createElement("div");
                return t.getComputedStyle && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
            }(),
            getTranslate: function(t) {
                var e;
                if (!t || !t.length) return !1;
                if ((e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix") ? e = (e = (e = e.split("(")[1]).split(")")[0]).split(",") : e = [], e.length) e = (e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]]).map(parseFloat);
                else {
                    e = [0, 0, 1, 1];
                    var n = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));
                    n && (e[0] = parseFloat(n[2]), e[1] = parseFloat(n[1]))
                }
                return {
                    top: e[0],
                    left: e[1],
                    scaleX: e[2],
                    scaleY: e[3],
                    opacity: parseFloat(t.css("opacity")),
                    width: t.width(),
                    height: t.height()
                }
            },
            setTranslate: function(t, e) {
                var n = "",
                    o = {};
                if (t && e) return e.left === i && e.top === i || (n = (e.left === i ? t.position().left : e.left) + "px, " + (e.top === i ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== i && e.scaleY !== i && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (o.transform = n), e.opacity !== i && (o.opacity = e.opacity), e.width !== i && (o.width = e.width), e.height !== i && (o.height = e.height), t.css(o)
            },
            animate: function(t, e, o, s, r) {
                n.isFunction(o) && (s = o, o = null), n.isPlainObject(e) || t.removeAttr("style"), t.on(u, function(o) {
                    (!o || !o.originalEvent || t.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (n.fancybox.stop(t), n.isPlainObject(e) ? (e.scaleX !== i && e.scaleY !== i && (t.css("transition-duration", ""), e.width = Math.round(t.width() * e.scaleX), e.height = Math.round(t.height() * e.scaleY), e.scaleX = 1, e.scaleY = 1, n.fancybox.setTranslate(t, e)), !1 === r && t.removeAttr("style")) : !0 !== r && t.removeClass(e), n.isFunction(s) && s(o))
                }), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e), e.scaleX && t.hasClass("fancybox-image-wrap") && t.parent().addClass("fancybox-is-scaling"), t.data("timer", setTimeout(function() {
                    t.trigger("transitionend")
                }, o + 16))
            },
            stop: function(t) {
                clearTimeout(t.data("timer")), t.off("transitionend").css("transition-duration", ""), t.hasClass("fancybox-image-wrap") && t.parent().removeClass("fancybox-is-scaling")
            }
        }, n.fn.fancybox = function(t) {
            var e;
            return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, o) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, o), this
        }, a.on("click.fb-start", "[data-fancybox]", o)
    }
}(window, document, window.jQuery || jQuery),
function(t) {
    "use strict";
    var e = function(e, n, i) {
            if (e) return i = i || "", "object" === t.type(i) && (i = t.param(i, !0)), t.each(n, function(t, n) {
                e = e.replace("$" + t, n || "")
            }), i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e
        },
        n = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "//www.youtube.com/embed/$4",
                thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1,
                    api: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            metacafe: {
                matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                type: "iframe",
                url: "//www.metacafe.com/embed/$1/?ap=1"
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: "iframe",
                url: "//www.dailymotion.com/embed/video/$1"
            },
            vine: {
                matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                type: "iframe",
                url: "//vine.co/v/$1/embed/simple"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        };
    t(document).on("objectNeedsType.fb", function(i, o, s) {
        var r, a, l, c, u, d, p, h = s.src || "",
            f = !1;
        r = t.extend(!0, {}, n, s.opts.media), t.each(r, function(n, i) {
            if (l = h.match(i.matcher)) {
                if (f = i.type, d = {}, i.paramPlace && l[i.paramPlace]) {
                    "?" == (u = l[i.paramPlace])[0] && (u = u.substring(1)), u = u.split("&");
                    for (var o = 0; o < u.length; ++o) {
                        var r = u[o].split("=", 2);
                        2 == r.length && (d[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")))
                    }
                }
                return c = t.extend(!0, {}, i.params, s.opts[n], d), h = "function" === t.type(i.url) ? i.url.call(this, l, c, s) : e(i.url, l, c), a = "function" === t.type(i.thumb) ? i.thumb.call(this, l, c, s) : e(i.thumb, l), "vimeo" === n && (h = h.replace("&%23", "#")), !1
            }
        }), f ? (s.src = h, s.type = f, s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = a), "iframe" === f && (t.extend(!0, s.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        }), s.contentProvider = p, s.opts.slideClass += " fancybox-slide--video")) : h && (s.type = s.opts.defaultType)
    })
}(window.jQuery || jQuery),
function(t, e, n) {
    "use strict";
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        },
        o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
            t.clearTimeout(e)
        },
        s = function(e) {
            var n = [];
            for (var i in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[i].pageX ? n.push({
                x: e[i].pageX,
                y: e[i].pageY
            }) : e[i].clientX && n.push({
                x: e[i].clientX,
                y: e[i].clientY
            });
            return n
        },
        r = function(t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        a = function(t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++)
                if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        l = function(e) {
            var n = t.getComputedStyle(e)["overflow-y"],
                i = t.getComputedStyle(e)["overflow-x"],
                o = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                s = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth;
            return o || s
        },
        c = function(t) {
            for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
            return e
        },
        u = function(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
        };
    u.prototype.destroy = function() {
        this.$container.off(".fb.touch")
    }, u.prototype.ontouchstart = function(i) {
        var o = this,
            l = n(i.target),
            u = o.instance,
            d = u.current,
            p = d.$content,
            h = "touchstart" == i.type;
        if (h && o.$container.off("mousedown.fb.touch"), (!i.originalEvent || 2 != i.originalEvent.button) && l.length && !a(l) && !a(l.parent()) && (l.is("img") || !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
            if (!d || o.instance.isAnimating || o.instance.isClosing) return i.stopPropagation(), void i.preventDefault();
            if (o.realPoints = o.startPoints = s(i), o.startPoints) {
                if (i.stopPropagation(), o.startEvent = i, o.canTap = !0, o.$target = l, o.$content = p, o.opts = d.opts.touch, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.isScrolling = !1, o.sliderStartPos = o.sliderLastPos || {
                        top: 0,
                        left: 0
                    }, o.contentStartPos = n.fancybox.getTranslate(o.$content), o.contentLastPos = null, o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canvasWidth = Math.round(d.$slide[0].clientWidth), o.canvasHeight = Math.round(d.$slide[0].clientHeight), n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(o, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(o, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", o.onscroll, !0), !o.opts && !u.canPan() || !l.is(o.$stage) && !o.$stage.find(l).length) return void(l.is("img") && i.preventDefault());
                n.fancybox.isMobile && (c(l) || c(l.parent())) || i.preventDefault(), 1 === o.startPoints.length && ("image" === d.type && (o.contentStartPos.width > o.canvasWidth + 1 || o.contentStartPos.height > o.canvasHeight + 1) ? (n.fancybox.stop(o.$content), o.$content.css("transition-duration", ""), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-controls--isGrabbing")), 2 !== o.startPoints.length || u.isAnimating || d.hasError || "image" !== d.type || !d.isLoaded && !d.$ghost || (o.canTap = !1, o.isSwiping = !1, o.isPanning = !1, o.isZooming = !0, n.fancybox.stop(o.$content), o.$content.css("transition-duration", ""), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - n(t).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - n(t).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = r(o.startPoints[0], o.startPoints[1]))
            }
        }
    }, u.prototype.onscroll = function(t) {
        self.isScrolling = !0
    }, u.prototype.ontouchmove = function(t) {
        var e = this,
            i = n(t.target);
        return e.isScrolling || !i.is(e.$stage) && !e.$stage.find(i).length ? void(e.canTap = !1) : (e.newPoints = s(t), void((e.opts || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = r(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = r(e.newPoints[0], e.startPoints[0], "y"), e.distance = r(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, u.prototype.onSwipe = function(e) {
        var s, r = this,
            a = r.isSwiping,
            l = r.sliderStartPos.left || 0;
        if (!0 !== a) "x" == a && (r.distanceX > 0 && (r.instance.group.length < 2 || 0 === r.instance.current.index && !r.instance.current.opts.loop) ? l += Math.pow(r.distanceX, .8) : r.distanceX < 0 && (r.instance.group.length < 2 || r.instance.current.index === r.instance.group.length - 1 && !r.instance.current.opts.loop) ? l -= Math.pow(-r.distanceX, .8) : l += r.distanceX), r.sliderLastPos = {
            top: "x" == a ? 0 : r.sliderStartPos.top + r.distanceY,
            left: l
        }, r.requestId && (o(r.requestId), r.requestId = null), r.requestId = i(function() {
            r.sliderLastPos && (n.each(r.instance.slides, function(t, e) {
                var i = e.pos - r.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                    top: r.sliderLastPos.top,
                    left: r.sliderLastPos.left + i * r.canvasWidth + i * e.opts.gutter
                })
            }), r.$container.addClass("fancybox-is-sliding"))
        });
        else if (Math.abs(r.distance) > 10) {
            if (r.canTap = !1, r.instance.group.length < 2 && r.opts.vertical ? r.isSwiping = "y" : r.instance.isDragging || !1 === r.opts.vertical || "auto" === r.opts.vertical && n(t).width() > 800 ? r.isSwiping = "x" : (s = Math.abs(180 * Math.atan2(r.distanceY, r.distanceX) / Math.PI), r.isSwiping = s > 45 && s < 135 ? "y" : "x"), r.canTap = !1, "y" === r.isSwiping && n.fancybox.isMobile && (c(r.$target) || c(r.$target.parent()))) return void(r.isScrolling = !0);
            r.instance.isDragging = r.isSwiping, r.startPoints = r.newPoints, n.each(r.instance.slides, function(t, e) {
                n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", ""), e.inTransition = !1, e.pos === r.instance.current.pos && (r.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left)
            }), r.instance.SlideShow && r.instance.SlideShow.isActive && r.instance.SlideShow.stop()
        }
    }, u.prototype.onPan = function() {
        var t = this;
        return r(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void(t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && (o(t.requestId), t.requestId = null), void(t.requestId = i(function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })))
    }, u.prototype.limitMovement = function() {
        var t, e, n, i, o, s, r = this,
            a = r.canvasWidth,
            l = r.canvasHeight,
            c = r.distanceX,
            u = r.distanceY,
            d = r.contentStartPos,
            p = d.left,
            h = d.top,
            f = d.width,
            m = d.height;
        return o = f > a ? p + c : p, s = h + u, t = Math.max(0, .5 * a - .5 * f), e = Math.max(0, .5 * l - .5 * m), n = Math.min(a - f, .5 * a - .5 * f), i = Math.min(l - m, .5 * l - .5 * m), f > a && (c > 0 && o > t && (o = t - 1 + Math.pow(-t + p + c, .8) || 0), c < 0 && o < n && (o = n + 1 - Math.pow(n - p - c, .8) || 0)), m > l && (u > 0 && s > e && (s = e - 1 + Math.pow(-e + h + u, .8) || 0), u < 0 && s < i && (s = i + 1 - Math.pow(i - h - u, .8) || 0)), {
            top: s,
            left: o,
            scaleX: d.scaleX,
            scaleY: d.scaleY
        }
    }, u.prototype.limitPosition = function(t, e, n, i) {
        var o = this.canvasWidth,
            s = this.canvasHeight;
        return n > o ? t = (t = t > 0 ? 0 : t) < o - n ? o - n : t : t = Math.max(0, o / 2 - n / 2), i > s ? e = (e = e > 0 ? 0 : e) < s - i ? s - i : e : e = Math.max(0, s / 2 - i / 2), {
            top: e,
            left: t
        }
    }, u.prototype.onZoom = function() {
        var e = this,
            s = e.contentStartPos.width,
            a = e.contentStartPos.height,
            l = e.contentStartPos.left,
            c = e.contentStartPos.top,
            u = r(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            d = Math.floor(s * u),
            p = Math.floor(a * u),
            h = (s - d) * e.percentageOfImageAtPinchPointX,
            f = (a - p) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            g = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            y = m - e.centerPointStartX,
            v = {
                top: c + (f + (g - e.centerPointStartY)),
                left: l + (h + y),
                scaleX: e.contentStartPos.scaleX * u,
                scaleY: e.contentStartPos.scaleY * u
            };
        e.canTap = !1, e.newWidth = d, e.newHeight = p, e.contentLastPos = v, e.requestId && (o(e.requestId), e.requestId = null), e.requestId = i(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, u.prototype.ontouchend = function(t) {
        var i = this,
            r = Math.max((new Date).getTime() - i.startTime, 1),
            a = i.isSwiping,
            l = i.isPanning,
            c = i.isZooming,
            u = i.isScrolling;
        return i.endPoints = s(t), i.$container.removeClass("fancybox-controls--isGrabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", i.onscroll, !0), i.requestId && (o(i.requestId), i.requestId = null), i.isSwiping = !1, i.isPanning = !1, i.isZooming = !1, i.isScrolling = !1, i.instance.isDragging = !1, i.canTap ? i.onTap(t) : (i.speed = 366, i.velocityX = i.distanceX / r * .5, i.velocityY = i.distanceY / r * .5, i.speedX = Math.max(.5 * i.speed, Math.min(1.5 * i.speed, 1 / Math.abs(i.velocityX) * i.speed)), void(l ? i.endPanning() : c ? i.endZooming() : i.endSwiping(a, u)))
    }, u.prototype.endSwiping = function(t, e) {
        var i = this,
            o = !1,
            s = i.instance.group.length;
        i.sliderLastPos = null, "y" == t && !e && Math.abs(i.distanceY) > 50 ? (n.fancybox.animate(i.instance.current.$slide, {
            top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
            opacity: 0
        }, 150), o = i.instance.close(!0, 300)) : "x" == t && i.distanceX > 50 && s > 1 ? o = i.instance.previous(i.speedX) : "x" == t && i.distanceX < -50 && s > 1 && (o = i.instance.next(i.speedX)), !1 !== o || "x" != t && "y" != t || (e || s < 2 ? i.instance.centerSlide(i.instance.current, 150) : i.instance.jumpTo(i.instance.current.index)), i.$container.removeClass("fancybox-is-sliding")
    }, u.prototype.endPanning = function() {
        var t, e, i, o = this;
        o.contentLastPos && (!1 === o.opts.momentum ? (t = o.contentLastPos.left, e = o.contentLastPos.top) : (t = o.contentLastPos.left + o.velocityX * o.speed, e = o.contentLastPos.top + o.velocityY * o.speed), (i = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width, i.height = o.contentStartPos.height, n.fancybox.animate(o.$content, i, 330))
    }, u.prototype.endZooming = function() {
        var t, e, i, o, s = this,
            r = s.instance.current,
            a = s.newWidth,
            l = s.newHeight;
        s.contentLastPos && (t = s.contentLastPos.left, o = {
            top: e = s.contentLastPos.top,
            left: t,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(s.$content, o), a < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : a > r.width || l > r.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (i = s.limitPosition(t, e, a, l), n.fancybox.setTranslate(s.content, n.fancybox.getTranslate(s.$content)), n.fancybox.animate(s.$content, i, 150)))
    }, u.prototype.onTap = function(t) {
        var e, i = this,
            o = n(t.target),
            r = i.instance,
            a = r.current,
            l = t && s(t) || i.startPoints,
            c = l[0] ? l[0].x - i.$stage.offset().left : 0,
            u = l[0] ? l[0].y - i.$stage.offset().top : 0,
            d = function(e) {
                var o = a.opts[e];
                if (n.isFunction(o) && (o = o.apply(r, [a, t])), o) switch (o) {
                    case "close":
                        r.close(i.startEvent);
                        break;
                    case "toggleControls":
                        r.toggleControls(!0);
                        break;
                    case "next":
                        r.next();
                        break;
                    case "nextOrClose":
                        r.group.length > 1 ? r.next() : r.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == a.type && (a.isLoaded || a.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(c, u) : r.group.length < 2 && r.close(i.startEvent))
                }
            };
        if ((!t.originalEvent || 2 != t.originalEvent.button) && (o.is("img") || !(c > o[0].clientWidth + o.offset().left))) {
            if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
            else if (o.is(".fancybox-slide")) e = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(o).addBack().filter(o).length) return;
                e = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, Math.abs(c - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
                d("dblclick" + e)
            } else i.tapX = c, i.tapY = u, a.opts["dblclick" + e] && a.opts["dblclick" + e] !== a.opts["click" + e] ? i.tapped = setTimeout(function() {
                i.tapped = null, d("click" + e)
            }, 500) : d("click" + e);
            return this
        }
    }, n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new u(e))
    })
}(window, document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3
        }
    });
    var n = function(t) {
        this.instance = t, this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
        },
        set: function(t) {
            var e = this;
            e.instance && e.instance.current && (!0 === t || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() {
                e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length)
            }, e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
        },
        clear: function() {
            clearTimeout(this.timer), this.timer = null
        },
        start: function() {
            var t = this,
                e = t.instance.current;
            e && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.set(!0))
        },
        stop: function() {
            var t = this,
                e = t.instance.current;
            t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, i) {
            var o = e && e.SlideShow;
            i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var i = e && e.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function(n, i, o, s, r) {
            var a = i && i.SlideShow;
            !a || !o.opts.slideShow || 80 !== r && 32 !== r || e(t.activeElement).is("button,a,input") || (s.preventDefault(), a.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance(),
            i = n && n.SlideShow;
        i && i.isActive && (t.hidden ? i.clear() : i.set())
    })
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        var e, n, i, o = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ],
            s = {};
        for (n = 0; n < o.length; n++)
            if ((e = o[n]) && e[1] in t) {
                for (i = 0; i < e.length; i++) s[o[0][i]] = e[i];
                return s
            }
        return !1
    }();
    if (n) {
        var i = {
            request: function(e) {
                (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                t[n.exitFullscreen]()
            },
            toggle: function(e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function() {
                return Boolean(t[n.fullscreenElement])
            },
            enabled: function() {
                return Boolean(t[n.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                var n;
                e && e.group[e.currIndex].opts.fullScreen ? ((n = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                    t.stopPropagation(), t.preventDefault(), i.toggle(n[0])
                }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(n[0]), e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
            },
            "afterKeydown.fb": function(t, e, n, i, o) {
                e && e.FullScreen && 70 === o && (i.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
            },
            "beforeClose.fb": function(t) {
                t && t.FullScreen && i.exit()
            }
        }), e(t).on(n.fullscreenchange, function() {
            var t = i.isFullscreen(),
                n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t))
        })
    } else e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1)
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var n = function(t) {
        this.init(t)
    };
    e.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this;
            e.instance = t, t.Thumbs = e;
            var n = t.group[0],
                i = t.group[1];
            e.opts = t.group[t.currIndex].opts.thumbs, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), e.opts && n && i && ("image" == n.type || n.opts.thumb || n.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (e.$button.show().on("click", function() {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var t, n, i = this,
                o = i.instance,
                s = i.opts.parentEl;
            i.$grid = e('<div class="fancybox-thumbs fancybox-thumbs-' + i.opts.axis + '"></div>').appendTo(o.$refs.container.find(s).addBack().filter(s)), t = "<ul>", e.each(o.group, function(e, i) {
                (n = i.opts.thumb || (i.opts.$thumb ? i.opts.$thumb.attr("src") : null)) || "image" !== i.type || (n = i.src), n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
            }), t += "</ul>", i.$list = e(t).appendTo(i.$grid).on("click", "li", function() {
                o.jumpTo(e(this).data("index"))
            }), i.$list.find("img").hide().one("load", function() {
                var t, n, i, o, s = e(this).parent().removeClass("fancybox-thumbs-loading"),
                    r = s.outerWidth(),
                    a = s.outerHeight();
                t = this.naturalWidth || this.width, o = (n = this.naturalHeight || this.height) / a, (i = t / r) >= 1 && o >= 1 && (i > o ? (t /= o, n = a) : (t = r, n /= i)), e(this).css({
                    width: Math.floor(t),
                    height: Math.floor(n),
                    "margin-top": n > a ? Math.floor(.3 * a - .3 * n) : Math.floor(.5 * a - .5 * n),
                    "margin-left": Math.floor(.5 * r - .5 * t)
                }).show()
            }).each(function() {
                this.src = e(this).data("src")
            }), "x" === i.opts.axis && i.$list.width(parseInt(i.$grid.css("padding-right")) + o.group.length * i.$list.children().eq(0).outerWidth(!0) + "px")
        },
        focus: function(t) {
            var e, n, i = this,
                o = i.$list;
            i.instance.current && (n = (e = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === i.opts.axis && (n.top < 0 || n.top > o.height() - e.outerHeight()) ? o.stop().animate({
                scrollTop: o.scrollTop() + n.top
            }, t) : "x" === i.opts.axis && (n.left < o.parent().scrollLeft() || n.left > o.parent().scrollLeft() + (o.parent().width() - e.outerWidth())) && o.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            var i;
            e && !e.Thumbs && ((i = new n(e)).isActive && !0 === i.opts.autoStart && i.show())
        },
        "beforeShow.fb": function(t, e, n, i) {
            var o = e && e.Thumbs;
            o && o.isVisible && o.focus(i ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, n, i, o) {
            var s = e && e.Thumbs;
            s && s.isActive && 71 === o && (i.preventDefault(), s.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, window.jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
        },
        share: {
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", function() {
        var t, n, i = e.fancybox.getInstance();
        i && (t = !1 === i.current.opts.hash ? i.current.src : window.location, n = i.current.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.current.type ? encodeURIComponent(i.current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, function(t) {
            var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(t).replace(/[&<>"'`=\/]/g, function(t) {
                return e[t]
            })
        }(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
            src: i.translate(i, n),
            type: "html",
            opts: {
                animationEffect: "fade",
                animationDuration: 250,
                afterLoad: function(t, e) {
                    e.$content.find(".fancybox-share__links a").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                }
            }
        }))
    })
}(document, window.jQuery || jQuery),
function(t, e, n) {
    "use strict";

    function i() {
        var t = e.location.hash.substr(1),
            n = t.split("-"),
            i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return i < 1 && (i = 1), {
            hash: t,
            index: i,
            gallery: n.join("-")
        }
    }

    function o(t) {
        var e;
        "" !== t.gallery && ((e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1)).length || (e = n("#" + n.escapeSelector(t.gallery))), e.length && (r = !1, e.trigger("click")))
    }

    function s(t) {
        var e;
        return !!t && ((e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") : ""))
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
            return e ? "\0" === t ? "ÃƒÂ¯Ã‚Â¿Ã‚Â½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    });
    var r = !0,
        a = null,
        l = null;
    n(function() {
        !1 !== n.fancybox.defaults.hash && (n(t).on({
            "onInit.fb": function(t, e) {
                var n, o;
                !1 !== e.group[e.currIndex].opts.hash && (n = i(), (o = s(e)) && n.gallery && o == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, i, o) {
                var c;
                o && !1 !== o.opts.hash && ((c = s(i)) && "" !== c && (e.location.hash.indexOf(c) < 0 && (i.opts.origHash = e.location.hash), a = c + (i.group.length > 1 ? "-" + (o.index + 1) : ""), "replaceState" in e.history ? (l && clearTimeout(l), l = setTimeout(function() {
                    e.history[r ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + a), l = null, r = !1
                }, 300)) : e.location.hash = a))
            },
            "beforeClose.fb": function(i, o, r) {
                var c, u;
                l && clearTimeout(l), !1 !== r.opts.hash && (c = s(o), u = o && o.opts.origHash ? o.opts.origHash : "", c && "" !== c && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + u) : (e.location.hash = u, n(e).scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))), a = null)
            }
        }), n(e).on("hashchange.fb", function() {
            var t = i();
            n.fancybox.getInstance() ? !a || a === t.gallery + "-" + t.index || 1 === t.index && a == t.gallery || (a = null, n.fancybox.close()) : "" !== t.gallery && o(t)
        }), setTimeout(function() {
            o(i())
        }, 50))
    })
}(document, window, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, e, i) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var i = e.current,
                    o = (new Date).getTime();
                e.group.length < 1 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (t.preventDefault(), t.stopPropagation(), i.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, o - n < 250 || (n = o, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, window.jQuery || jQuery),
function() {
    var t, e, n, i, o, s = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        r = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var n, i;
            for (n in e) i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function(t, e, n, i) {
            var o;
            return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i) : null != document.createEventObject ? (o = document.createEventObject()).eventType = t : o.eventName = t, o
        }, t.prototype.emitEvent = function(t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function(t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function(t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
            var e, n, i, o;
            for (e = n = 0, i = (o = this.keys).length; i > n; e = ++n)
                if (o[e] === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var n, i, o, s;
            for (n = i = 0, o = (s = this.keys).length; o > i; n = ++i)
                if (s[n] === t) return void(this.values[n] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
    }()), i = this.getComputedStyle || function(t, e) {
        return this.getPropertyValue = function(e) {
            var n;
            return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                return e.toUpperCase()
            }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = s(this.scrollCallback, this), this.scrollHandler = s(this.scrollHandler, this), this.resetAnimation = s(this.resetAnimation, this), this.start = s(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, o.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function() {
            var e, n, i, o;
            if (this.stopped = !1, this.boxes = function() {
                    var t, n, i, o;
                    for (o = [], t = 0, n = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; n > t; t++) e = i[t], o.push(e);
                    return o
                }.call(this), this.all = function() {
                    var t, n, i, o;
                    for (o = [], t = 0, n = (i = this.boxes).length; n > t; t++) e = i[t], o.push(e);
                    return o
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (n = 0, i = (o = this.boxes).length; i > n; n++) e = o[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                return function(e) {
                    var n, i, o, s, r;
                    for (r = [], n = 0, i = e.length; i > n; n++) s = e[n], r.push(function() {
                        var t, e, n, i;
                        for (i = [], t = 0, e = (n = s.addedNodes || []).length; e > t; t++) o = n[t], i.push(this.doSync(o));
                        return i
                    }.call(t));
                    return r
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, o.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function(e) {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function(t) {
            var e, n, i, o, s;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (s = [], n = 0, i = (o = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; i > n; n++) e = o[n], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), s.push(this.scrolled = !0)) : s.push(void 0);
                return s
            }
        }, o.prototype.show = function(t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function(t, e) {
            var n, i, o, s;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate((s = this, function() {
                return s.customStyle(t, e, i, n, o)
            }))
        }, o.prototype.animate = "requestAnimationFrame" in window ? function(t) {
            return window.requestAnimationFrame(t)
        } : function(t) {
            return t()
        }, o.prototype.resetStyle = function() {
            var t, e, n, i, o;
            for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.resetAnimation = function(t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim() : void 0
        }, o.prototype.customStyle = function(t, e, n, i, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
                animationDuration: n
            }), i && this.vendorSet(t.style, {
                animationDelay: i
            }), o && this.vendorSet(t.style, {
                animationIterationCount: o
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
            var n, i, o, s;
            for (n in i = [], e) o = e[n], t["" + n] = o, i.push(function() {
                var e, i, r, a;
                for (a = [], e = 0, i = (r = this.vendors).length; i > e; e++) s = r[e], a.push(t["" + s + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                return a
            }.call(this));
            return i
        }, o.prototype.vendorCSS = function(t, e) {
            var n, o, s, r, a, l;
            for (r = (a = i(t)).getPropertyCSSValue(e), n = 0, o = (s = this.vendors).length; o > n; n++) l = s[n], r = r || a.getPropertyCSSValue("-" + l + "-" + e);
            return r
        }, o.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = i(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function() {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var e, n, i, o;
                for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++)(t = i[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function(t) {
            var e, n, i, o, s;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, o = (s = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, e = (i = this.offsetTop(t)) + t.clientHeight, o >= i && e >= s
        }, o.prototype.util = function() {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}.call(this),
    function(t, e) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(n) {
            return e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";

        function n(n, s, a) {
            (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[n] = function(t) {
                return "string" == typeof t ? function(t, e, i) {
                    var o, s = "$()." + n + '("' + e + '")';
                    return t.each(function(t, l) {
                        var c = a.data(l, n);
                        if (c) {
                            var u = c[e];
                            if (u && "_" != e.charAt(0)) {
                                var d = u.apply(c, i);
                                o = void 0 === o ? d : o
                            } else r(s + " is not a valid method")
                        } else r(n + " not initialized. Cannot call methods, i.e. " + s)
                    }), void 0 !== o ? o : t
                }(this, t, o.call(arguments, 1)) : (function(t, e) {
                    t.each(function(t, i) {
                        var o = a.data(i, n);
                        o ? (o.option(e), o._init()) : (o = new s(i, e), a.data(i, n, o))
                    })
                }(this, t), this)
            }, i(a))
        }

        function i(t) {
            !t || t && t.bridget || (t.bridget = n)
        }
        var o = Array.prototype.slice,
            s = t.console,
            r = void 0 === s ? function() {} : function(t) {
                s.error(t)
            };
        return i(e || t.jQuery), n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return -1 == i.indexOf(e) && i.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                n = n.slice(0), e = e || [];
                for (var i = this._onceEvents && this._onceEvents[t], o = 0; o < n.length; o++) {
                    var s = n[o];
                    i && i[s] && (this.off(t, s), delete i[s]), s.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function e(t) {
            var e = getComputedStyle(t);
            return e || s("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
        }

        function n() {
            if (!l) {
                l = !0;
                var n = document.createElement("div");
                n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style.boxSizing = "border-box";
                var s = document.body || document.documentElement;
                s.appendChild(n);
                var r = e(n);
                o = 200 == Math.round(t(r.width)), i.isBoxSizeOuter = o, s.removeChild(n)
            }
        }

        function i(i) {
            if (n(), "string" == typeof i && (i = document.querySelector(i)), i && "object" == typeof i && i.nodeType) {
                var s = e(i);
                if ("none" == s.display) return function() {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < a; e++) t[r[e]] = 0;
                    return t
                }();
                var l = {};
                l.width = i.offsetWidth, l.height = i.offsetHeight;
                for (var c = l.isBorderBox = "border-box" == s.boxSizing, u = 0; u < a; u++) {
                    var d = r[u],
                        p = s[d],
                        h = parseFloat(p);
                    l[d] = isNaN(h) ? 0 : h
                }
                var f = l.paddingLeft + l.paddingRight,
                    m = l.paddingTop + l.paddingBottom,
                    g = l.marginLeft + l.marginRight,
                    y = l.marginTop + l.marginBottom,
                    v = l.borderLeftWidth + l.borderRightWidth,
                    b = l.borderTopWidth + l.borderBottomWidth,
                    x = c && o,
                    w = t(s.width);
                !1 !== w && (l.width = w + (x ? 0 : f + v));
                var S = t(s.height);
                return !1 !== S && (l.height = S + (x ? 0 : m + b)), l.innerWidth = l.width - (f + v), l.innerHeight = l.height - (m + b), l.outerWidth = l.width + g, l.outerHeight = l.height + y, l
            }
        }
        var o, s = "undefined" == typeof console ? function() {} : function(t) {
                console.error(t)
            },
            r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            a = r.length,
            l = !1;
        return i
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var i = e[n] + "MatchesSelector";
                if (t[i]) return i
            }
        }();
        return function(e, n) {
            return e[t](n)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(n) {
            return e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var n = {
                extend: function(t, e) {
                    for (var n in e) t[n] = e[n];
                    return t
                },
                modulo: function(t, e) {
                    return (t % e + e) % e
                }
            },
            i = Array.prototype.slice;
        n.makeArray = function(t) {
            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? i.call(t) : [t]
        }, n.removeFrom = function(t, e) {
            var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
        }, n.getParent = function(t, n) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, e(t, n)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, i) {
            t = n.makeArray(t);
            var o = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!i) return void o.push(t);
                    e(t, i) && o.push(t);
                    for (var n = t.querySelectorAll(i), s = 0; s < n.length; s++) o.push(n[s])
                }
            }), o
        }, n.debounceMethod = function(t, e, n) {
            n = n || 100;
            var i = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                clearTimeout(t);
                var e = arguments,
                    s = this;
                this[o] = setTimeout(function() {
                    i.apply(s, e), delete s[o]
                }, n)
            }
        }, n.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        };
        var o = t.console;
        return n.htmlInit = function(e, i) {
            n.docReady(function() {
                var s = n.toDashed(i),
                    r = "data-" + s,
                    a = document.querySelectorAll("[" + r + "]"),
                    l = document.querySelectorAll(".js-" + s),
                    c = n.makeArray(a).concat(n.makeArray(l)),
                    u = r + "-options",
                    d = t.jQuery;
                c.forEach(function(t) {
                    var n, s = t.getAttribute(r) || t.getAttribute(u);
                    try {
                        n = s && JSON.parse(s)
                    } catch (e) {
                        return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, n);
                    d && d.data(t, i, a)
                })
            })
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
        "use strict";

        function n(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var i = document.documentElement.style,
            o = "string" == typeof i.transition ? "transition" : "WebkitTransition",
            s = "string" == typeof i.transform ? "transform" : "WebkitTransform",
            r = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[o],
            a = {
                transform: s,
                transition: o,
                transitionDuration: o + "Duration",
                transitionProperty: o + "Property",
                transitionDelay: o + "Delay"
            },
            l = n.prototype = Object.create(t.prototype);
        l.constructor = n, l._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, l.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.getSize = function() {
            this.size = e(this.element)
        }, l.css = function(t) {
            var e = this.element.style;
            for (var n in t) {
                e[a[n] || n] = t[n]
            }
        }, l.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                i = t[e ? "left" : "right"],
                o = t[n ? "top" : "bottom"],
                s = parseFloat(i),
                r = parseFloat(o),
                a = this.layout.size; - 1 != i.indexOf("%") && (s = s / 100 * a.width), -1 != o.indexOf("%") && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= n ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
        }, l.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                o = n ? "paddingLeft" : "paddingRight",
                s = n ? "left" : "right",
                r = n ? "right" : "left",
                a = this.position.x + t[o];
            e[s] = this.getXValue(a), e[r] = "";
            var l = i ? "paddingTop" : "paddingBottom",
                c = i ? "top" : "bottom",
                u = i ? "bottom" : "top",
                d = this.position.y + t[l];
            e[c] = this.getYValue(d), e[u] = "", this.css(e), this.emitEvent("layout", [this])
        }, l.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, l.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, l._transitionTo = function(t, e) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                o = t == this.position.x && e == this.position.y;
            if (this.setPosition(t, e), !o || this.isTransitioning) {
                var s = t - n,
                    r = e - i,
                    a = {};
                a.transform = this.getTranslate(s, r), this.transition({
                    to: a,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            } else this.layoutPosition()
        }, l.getTranslate = function(t, e) {
            return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
        }, l.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, l.moveTo = l._transitionTo, l.setPosition = function(t, e) {
            this.position.x = parseFloat(t), this.position.y = parseFloat(e)
        }, l._nonTransition = function(t) {
            for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, l.transition = function(t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
                for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var c = "opacity," + function(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }(s);
        l.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: c,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(r, this, !1)
            }
        }, l.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, l.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var u = {
            "-webkit-transform": "transform"
        };
        l.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = u[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], function(t) {
                        for (var e in t) return !1;
                        return !0
                    }(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) e.onEnd[n].call(this), delete e.onEnd[n];
                this.emitEvent("transitionEnd", [this])
            }
        }, l.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
        }, l._removeStyles = function(t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var d = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return l.removeTransitionStyles = function() {
            this.css(d)
        }, l.stagger = function(t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, l.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, l.remove = function() {
            return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, l.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, l.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var n in e) return n
        }, l.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, l.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(n, i, o, s) {
            return e(t, n, i, o, s)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, n, i, o) {
        "use strict";

        function s(t, e) {
            var n = i.getQueryElement(t);
            if (n) {
                this.element = n, l && (this.$element = l(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(e);
                var o = ++u;
                this.element.outlayerGUID = o, d[o] = this, this._create(), this._getOption("initLayout") && this.layout()
            } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
        }

        function r(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }
        var a = t.console,
            l = t.jQuery,
            c = function() {},
            u = 0,
            d = {};
        s.namespace = "outlayer", s.Item = o, s.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var p = s.prototype;
        i.extend(p, e.prototype), p.option = function(t) {
            i.extend(this.options, t)
        }, p._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, s.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, p._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
        }, p.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, p._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], o = 0; o < e.length; o++) {
                var s = new n(e[o], this);
                i.push(s)
            }
            return i
        }, p._filterFindItemElements = function(t) {
            return i.filterFindElements(t, this.options.itemSelector)
        }, p.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        }, p.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, p._init = p.layout, p._resetLayout = function() {
            this.getSize()
        }, p.getSize = function() {
            this.size = n(this.element)
        }, p._getMeasurement = function(t, e) {
            var i, o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : o instanceof HTMLElement && (i = o), this[t] = i ? n(i)[e] : o) : this[t] = 0
        }, p.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, p._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        }, p._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var n = [];
                t.forEach(function(t) {
                    var i = this._getItemLayoutPosition(t);
                    i.item = t, i.isInstant = e || t.isLayoutInstant, n.push(i)
                }, this), this._processLayoutQueue(n)
            }
        }, p._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, p._processLayoutQueue = function(t) {
            this.updateStagger(), t.forEach(function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, p.updateStagger = function() {
            var t = this.options.stagger;
            return null == t ? void(this.stagger = 0) : (this.stagger = function(t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/),
                    n = e && e[1],
                    i = e && e[2];
                return n.length ? (n = parseFloat(n)) * (h[i] || 1) : 0
            }(t), this.stagger)
        }, p._positionItem = function(t, e, n, i, o) {
            i ? t.goTo(e, n) : (t.stagger(o * this.stagger), t.moveTo(e, n))
        }, p._postLayout = function() {
            this.resizeContainer()
        }, p.resizeContainer = function() {
            if (this._getOption("resizeContainer")) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, p._getContainerSize = c, p._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, p._emitCompleteOnItems = function(t, e) {
            function n() {
                o.dispatchEvent(t + "Complete", null, [e])
            }

            function i() {
                ++r == s && n()
            }
            var o = this,
                s = e.length;
            if (e && s) {
                var r = 0;
                e.forEach(function(e) {
                    e.once(t, i)
                })
            } else n()
        }, p.dispatchEvent = function(t, e, n) {
            var i = e ? [e].concat(n) : n;
            if (this.emitEvent(t, i), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var o = l.Event(e);
                    o.type = t, this.$element.trigger(o, n)
                } else this.$element.trigger(t, n)
        }, p.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, p.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, p.stamp = function(t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, p.unstamp = function(t) {
            (t = this._find(t)) && t.forEach(function(t) {
                i.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, p._find = function(t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), i.makeArray(t)
        }, p._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, p._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, p._manageStamp = c, p._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                o = n(t);
            return {
                left: e.left - i.left - o.marginLeft,
                top: e.top - i.top - o.marginTop,
                right: i.right - e.right - o.marginRight,
                bottom: i.bottom - e.bottom - o.marginBottom
            }
        }, p.handleEvent = i.handleEvent, p.bindResize = function() {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, p.unbindResize = function() {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, p.onresize = function() {
            this.resize()
        }, i.debounceMethod(s, "onresize", 100), p.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, p.needsResizeLayout = function() {
            var t = n(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, p.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, p.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, p.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, p.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, n) {
                    t.stagger(n * e), t.reveal()
                })
            }
        }, p.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, n) {
                    t.stagger(n * e), t.hide()
                })
            }
        }, p.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, p.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, p.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var n = this.items[e];
                if (n.element == t) return n
            }
        }, p.getItems = function(t) {
            t = i.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var n = this.getItem(t);
                n && e.push(n)
            }, this), e
        }, p.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                t.remove(), i.removeFrom(this.items, t)
            }, this)
        }, p.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete d[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, s.data = function(t) {
            var e = (t = i.getQueryElement(t)) && t.outlayerGUID;
            return e && d[e]
        }, s.create = function(t, e) {
            var n = r(s);
            return n.defaults = i.extend({}, s.defaults), i.extend(n.defaults, e), n.compatOptions = i.extend({}, s.compatOptions), n.namespace = t, n.data = s.data, n.Item = r(o), i.htmlInit(n, t), l && l.bridget && l.bridget(t, n), n
        };
        var h = {
            ms: 1,
            s: 1e3
        };
        return s.Item = o, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var n = e.prototype = Object.create(t.Item.prototype),
            i = n._create;
        n._create = function() {
            this.id = this.layout.itemGUID++, i.call(this), this.sortData = {}
        }, n.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var n in t) {
                    var i = e[n];
                    this.sortData[n] = i(this.element, this)
                }
            }
        };
        var o = n.destroy;
        return n.destroy = function() {
            o.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        "use strict";

        function n(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var i = n.prototype;
        return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) {
            i[t] = function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }), i.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element);
            return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
        }, i._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, i.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, i.getSegmentSize = function(t, e) {
            var n = t + e,
                i = "outer" + e;
            if (this._getMeasurement(n, i), !this[n]) {
                var o = this.getFirstItemSize();
                this[n] = o && o[i] || this.isotope.size["inner" + e]
            }
        }, i.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, n.modes = {}, n.create = function(t, e) {
            function o() {
                n.apply(this, arguments)
            }
            return o.prototype = Object.create(i), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, n.modes[t] = o, o
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function(t, e) {
        var n = t.create("masonry");
        n.compatOptions.fitWidth = "isFitWidth";
        var i = n.prototype;
        return i._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, i.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            var i = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                s = o / i,
                r = i - o % i;
            s = Math[r && r < 1 ? "round" : "floor"](s), this.cols = Math.max(s, 1)
        }, i.getContainerWidth = function() {
            var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                n = e(t);
            this.containerWidth = n && n.innerWidth
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, t), o = {
                    x: this.columnWidth * i.col,
                    y: i.y
                }, s = i.y + t.size.outerHeight, r = n + i.col, a = i.col; a < r; a++) this.colYs[a] = s;
            return o
        }, i._getTopColPosition = function(t) {
            var e = this._getTopColGroup(t),
                n = Math.min.apply(Math, e);
            return {
                col: e.indexOf(n),
                y: n
            }
        }, i._getTopColGroup = function(t) {
            if (t < 2) return this.colYs;
            for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) e[i] = this._getColGroupY(i, t);
            return e
        }, i._getColGroupY = function(t, e) {
            if (e < 2) return this.colYs[t];
            var n = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, n)
        }, i._getHorizontalColPosition = function(t, e) {
            var n = this.horizontalColIndex % this.cols;
            n = t > 1 && n + t > this.cols ? 0 : n;
            var i = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = i ? n + t : this.horizontalColIndex, {
                col: n,
                y: this._getColGroupY(n, t)
            }
        }, i._manageStamp = function(t) {
            var n = e(t),
                i = this._getElementOffset(t),
                o = this._getOption("originLeft") ? i.left : i.right,
                s = o + n.outerWidth,
                r = Math.floor(o / this.columnWidth);
            r = Math.max(0, r);
            var a = Math.floor(s / this.columnWidth);
            a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this._getOption("originTop") ? i.top : i.bottom) + n.outerHeight, c = r; c <= a; c++) this.colYs[c] = Math.max(l, this.colYs[c])
        }, i._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, i._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        "use strict";
        var n = t.create("masonry"),
            i = n.prototype,
            o = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var s in e.prototype) o[s] || (i[s] = e.prototype[s]);
        var r = i.measureColumns;
        i.measureColumns = function() {
            this.items = this.isotope.filteredItems, r.call(this)
        };
        var a = i._getOption;
        return i._getOption = function(t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("fitRows"),
            n = e.prototype;
        return n._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, n._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                n = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > n && (this.x = 0, this.y = this.maxY);
            var i = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i
        }, n._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("vertical", {
                horizontalAlignment: 0
            }),
            n = e.prototype;
        return n._resetLayout = function() {
            this.y = 0
        }, n._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                n = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: n
            }
        }, n._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(n, i, o, s, r, a) {
            return e(t, n, i, o, s, r, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, n, i, o, s, r) {
        var a = t.jQuery,
            l = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            c = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        c.Item = s, c.LayoutMode = r;
        var u = c.prototype;
        u._create = function() {
            for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
        }, u.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, u._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), n = 0; n < t.length; n++) {
                t[n].id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, u._initLayoutMode = function(t) {
            var e = r.modes[t],
                n = this.options[t] || {};
            this.options[t] = e.options ? o.extend(e.options, n) : n, this.modes[t] = new e(this)
        }, u.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, u._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, u.arrange = function(t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, u._init = u.arrange, u._hideReveal = function(t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, u._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, u._bindArrangeComplete = function() {
            function t() {
                e && n && i && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            var e, n, i, o = this;
            this.once("layoutComplete", function() {
                e = !0, t()
            }), this.once("hideComplete", function() {
                n = !0, t()
            }), this.once("revealComplete", function() {
                i = !0, t()
            })
        }, u._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var n = [], i = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                var a = t[r];
                if (!a.isIgnored) {
                    var l = s(a);
                    l && n.push(a), l && a.isHidden ? i.push(a) : l || a.isHidden || o.push(a)
                }
            }
            return {
                matches: n,
                needReveal: i,
                needHide: o
            }
        }, u._getFilterTest = function(t) {
            return a && this.options.isJQueryFiltering ? function(e) {
                return a(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return i(e.element, t)
            }
        }, u.updateSortData = function(t) {
            var e;
            t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, u._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var n = t[e];
                this._sorters[e] = d(n)
            }
        }, u._updateItemsSortData = function(t) {
            for (var e = t && t.length, n = 0; e && n < e; n++) {
                t[n].updateSortData()
            }
        };
        var d = function() {
            return function(t) {
                if ("string" != typeof t) return t;
                var e = l(t).split(" "),
                    n = e[0],
                    i = n.match(/^\[(.+)\]$/),
                    o = function(t, e) {
                        return t ? function(e) {
                            return e.getAttribute(t)
                        } : function(t) {
                            var n = t.querySelector(e);
                            return n && n.textContent
                        }
                    }(i && i[1], n),
                    s = c.sortDataParsers[e[1]];
                return s ? function(t) {
                    return t && s(o(t))
                } : function(t) {
                    return t && o(t)
                }
            }
        }();
        c.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, u._sort = function() {
            if (this.options.sortBy) {
                var t = o.makeArray(this.options.sortBy);
                this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                var e = function(t, e) {
                    return function(n, i) {
                        for (var o = 0; o < t.length; o++) {
                            var s = t[o],
                                r = n.sortData[s],
                                a = i.sortData[s];
                            if (r > a || r < a) return (r > a ? 1 : -1) * ((void 0 !== e[s] ? e[s] : e) ? 1 : -1)
                        }
                        return 0
                    }
                }(this.sortHistory, this.options.sortAscending);
                this.filteredItems.sort(e)
            }
        }, u._getIsSameSortBy = function(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] != this.sortHistory[e]) return !1;
            return !0
        }, u._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, u._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, u._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, u._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, u._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, u.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, u.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var n = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(n)
            }
        }, u.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var n = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = n.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, u._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, u.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var n, i, o = e.length;
                for (n = 0; n < o; n++) i = e[n], this.element.appendChild(i.element);
                var s = this._filter(e).matches;
                for (n = 0; n < o; n++) e[n].isLayoutInstant = !0;
                for (this.arrange(), n = 0; n < o; n++) delete e[n].isLayoutInstant;
                this.reveal(s)
            }
        };
        var p = u.remove;
        return u.remove = function(t) {
            t = o.makeArray(t);
            var e = this.getItems(t);
            p.call(this, t);
            for (var n = e && e.length, i = 0; n && i < n; i++) {
                var s = e[i];
                o.removeFrom(this.filteredItems, s)
            }
        }, u.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
                this.items[t].sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, u._noTransition = function(t, e) {
            var n = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.apply(this, e);
            return this.options.transitionDuration = n, i
        }, u.getFilteredItemElements = function() {
            return this.filteredItems.map(function(t) {
                return t.element
            })
        }, c
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = function(n, i) {
            this.$element = t(n), this.defaults = t.extend({}, e.defaults, this.$element.data(), t.isPlainObject(i) ? i : {}), this.init()
        };
        e.prototype = {
            constructor: e,
            init: function() {
                var t = this.$element.html(),
                    e = new Date(this.defaults.date || t);
                e.getTime() && (this.content = t, this.date = e, this.find(), this.defaults.autoStart && this.start())
            },
            find: function() {
                var t = this.$element;
                this.$days = t.find("[data-days]"), this.$hours = t.find("[data-hours]"), this.$minutes = t.find("[data-minutes]"), this.$seconds = t.find("[data-seconds]"), this.$days.length + this.$hours.length + this.$minutes.length + this.$seconds.length > 0 && (this.found = !0)
            },
            reset: function() {
                this.found ? (this.output("days"), this.output("hours"), this.output("minutes"), this.output("seconds")) : this.output()
            },
            ready: function() {
                var t, e = this.date,
                    n = {};
                return !!e && (0 >= (t = e.getTime() - (new Date).getTime()) ? (this.end(), !1) : (n.days = t, n.hours = n.days % 864e5, n.minutes = n.hours % 36e5, n.seconds = n.minutes % 6e4, n.milliseconds = n.seconds % 1e3, this.days = Math.floor(n.days / 864e5), this.hours = Math.floor(n.hours / 36e5), this.minutes = Math.floor(n.minutes / 6e4), this.seconds = Math.floor(n.seconds / 1e3), this.deciseconds = Math.floor(n.milliseconds / 100), !0))
            },
            start: function() {
                !this.active && this.ready() && (this.active = !0, this.reset(), this.autoUpdate = this.defaults.fast ? setInterval(t.proxy(this.fastUpdate, this), 100) : setInterval(t.proxy(this.update, this), 1e3))
            },
            stop: function() {
                this.active && (this.active = !1, clearInterval(this.autoUpdate))
            },
            end: function() {
                this.date && (this.stop(), this.days = 0, this.hours = 0, this.minutes = 0, this.seconds = 0, this.deciseconds = 0, this.reset(), this.defaults.end())
            },
            destroy: function() {
                this.date && (this.stop(), this.$days = null, this.$hours = null, this.$minutes = null, this.$seconds = null, this.$element.empty().html(this.content), this.$element.removeData("countdown"))
            },
            fastUpdate: function() {
                --this.deciseconds >= 0 ? this.output("deciseconds") : (this.deciseconds = 9, this.update())
            },
            update: function() {
                --this.seconds >= 0 ? this.output("seconds") : (this.seconds = 59, --this.minutes >= 0 ? this.output("minutes") : (this.minutes = 59, --this.hours >= 0 ? this.output("hours") : (this.hours = 23, --this.days >= 0 ? this.output("days") : this.end())))
            },
            output: function(t) {
                if (this.found) switch (t) {
                    case "deciseconds":
                        this.$seconds.text(this.getSecondsText());
                        break;
                    case "seconds":
                        this.$seconds.text(this.seconds);
                        break;
                    case "minutes":
                        this.$minutes.text(this.minutes);
                        break;
                    case "hours":
                        this.$hours.text(this.hours);
                        break;
                    case "days":
                        this.$days.text(this.days)
                } else this.$element.empty().html(this.template())
            },
            template: function() {
                return this.defaults.text.replace("%s", this.days).replace("%s", this.hours).replace("%s", this.minutes).replace("%s", this.getSecondsText())
            },
            getSecondsText: function() {
                return this.active && this.defaults.fast ? this.seconds + "." + this.deciseconds : this.seconds
            }
        }, e.defaults = {
            autoStart: !0,
            date: null,
            fast: !1,
            end: t.noop,
            text: "%s days, %s hours, %s minutes, %s seconds"
        }, e.setDefaults = function(n) {
            t.extend(e.defaults, n)
        }, t.fn.countdown = function(n) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("countdown");
                o || i.data("countdown", o = new e(this, n)), "string" == typeof n && t.isFunction(o[n]) && o[n]()
            })
        }, t.fn.countdown.constructor = e, t.fn.countdown.setDefaults = e.setDefaults, t(function() {
            t("[countdown]").countdown()
        })
    });