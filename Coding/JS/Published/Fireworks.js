/*  fws01skjs  */
document.write('<style>\n');
document.write('canvas {\n');
document.write('   cursor: crosshair;\n');
document.write('   display: block;\n');
document.write('   left: 0;\n');
document.write('   position: fixed;\n');
document.write('   top: 0;\n');
document.write('   z-index: 20;\n');
document.write('   width: auto;\n');
document.write('   height: auto;\n');
document.write('}\n');
document.write('.Fireworks-01-sk-js_without_Firework {\n');
document.write('   height: auto;\n');
document.write('   width: auto;\n');
document.write('   line-height: 0%;\n');
document.write('   line-width: 0%;\n');
document.write('   position: relative;\n');
document.write('   z-index:1000;\n');
document.write('}\n');
document.write('</style>');
document.write('<audio style=\"display:none;z-index:5;\" type=\"audio/mpeg\" controlsList=\"nocontrols\" id=\"Fireworks-01-sk.js_firework_sound-audio-01\" src=\"https://virtualgadgets.in/diwali/fire.mp3\"></audio>');
! function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("fws01skjs requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
	var c = [],
		d = c.slice,
		e = c.concat,
		f = c.push,
		g = c.indexOf,
		h = {},
		i = h.toString,
		j = h.hasOwnProperty,
		k = {},
		l = "3.0.0-alpha1+compat",
		m = function (a, b) {
			return new m.fn.init(a, b)
		},
		n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		o = /^-ms-/,
		p = /-([a-z])/g,
		q = function (a, b) {
			return b.toUpperCase()
		};
	m.fn = m.prototype = {
		fws01skjs: l,
		constructor: m,
		length: 0,
		toArray: function () {
			return d.call(this)
		},
		get: function (a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
		},
		pushStack: function (a) {
			var b = m.merge(this.constructor(), a);
			return b.prevObject = this, b
		},
		each: function (a) {
			return m.each(this, a)
		},
		map: function (a) {
			return this.pushStack(m.map(this, function (b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function () {
			return this.pushStack(d.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: f,
		sort: c.sort,
		splice: c.splice
	}, m.extend = m.fn.extend = function () {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
			if (null != (e = arguments[h]))
				for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
		return g
	}, m.extend({
		expando: "fws01skjs" + (l + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (a) {
			throw new Error(a)
		},
		noop: function () {},
		isFunction: function (a) {
			return "function" === m.type(a)
		},
		isArray: Array.isArray || function (a) {
			return "array" === m.type(a)
		},
		isWindow: function (a) {
			return null != a && a == a.window
		},
		isNumeric: function (a) {
			return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
		},
		isEmptyObject: function (a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		isPlainObject: function (a) {
			var b;
			if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
			try {
				if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (c) {
				return !1
			}
			if (!k.ownFirst)
				for (b in a) return j.call(a, b);
			for (b in a);
			return void 0 === b || j.call(a, b)
		},
		type: function (a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
		},
		globalEval: function (a) {
			var b = y.head || m("head")[0] || y.documentElement,
				c = y.createElement("script");
			c.text = a, b.appendChild(c), b.removeChild(c)
		},
		camelCase: function (a) {
			return a.replace(o, "ms-").replace(p, q)
		},
		nodeName: function (a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function (a, b) {
			var c = 0,
				d = a.length,
				e = r(a);
			if (e) {
				for (; d > c; c++)
					if (b.call(a[c], c, a[c]) === !1) break
			} else
				for (c in a)
					if (b.call(a[c], c, a[c]) === !1) break; return a
		},
		trim: function (a) {
			return null == a ? "" : (a + "").replace(n, "")
		},
		makeArray: function (a, b) {
			var c = b || [];
			return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
		},
		inArray: function (a, b, c) {
			var d;
			if (b) {
				if (g) return g.call(b, a, c);
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
					if (c in b && b[c] === a) return c
			}
			return -1
		},
		merge: function (a, b) {
			var c = +b.length,
				d = 0,
				e = a.length;
			while (c > d) a[e++] = b[d++];
			if (c !== c)
				while (void 0 !== b[d]) a[e++] = b[d++];
			return a.length = e, a
		},
		grep: function (a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function (a, b, c) {
			var d, f = 0,
				g = a.length,
				h = r(a),
				i = [];
			if (h)
				for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
			else
				for (f in a) d = b(a[f], f, c), null != d && i.push(d);
			return e.apply([], i)
		},
		guid: 1,
		proxy: function (a, b) {
			var c, e, f;
			return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
				return a.apply(b || this, c.concat(d.call(arguments)))
			}, e.guid = a.guid = a.guid || m.guid++, e) : void 0
		},
		now: function () {
			return +new Date
		},
		support: k
	}), "function" == typeof Symbol && (m.fn[Symbol.iterator] = c[Symbol.iterator]), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		h["[object " + b + "]"] = b.toLowerCase()
	});

	function r(a) {
		var b = "length" in a && a.length,
			c = m.type(a);
		return "function" === c || m.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	var s = function (a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
			v = a.document,
			w = 0,
			x = 0,
			y = ga(),
			z = ga(),
			A = ga(),
			B = function (a, b) {
				return a === b && (l = !0), 0
			},
			C = 1 << 31,
			D = {}.hasOwnProperty,
			E = [],
			F = E.pop,
			G = E.push,
			H = E.push,
			I = E.slice,
			J = function (a, b) {
				for (var c = 0, d = a.length; d > c; c++)
					if (a[c] === b) return c;
				return -1
			},
			K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			L = "[\\x20\\t\\r\\n\\f]",
			M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
			O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
			P = new RegExp(L + "+", "g"),
			Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
			R = new RegExp("^" + L + "*," + L + "*"),
			S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
			T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
			U = new RegExp(O),
			V = new RegExp("^" + M + "$"),
			W = {
				ID: new RegExp("^#(" + M + ")"),
				CLASS: new RegExp("^\\.(" + M + ")"),
				TAG: new RegExp("^(" + M + "|[*])"),
				ATTR: new RegExp("^" + N),
				PSEUDO: new RegExp("^" + O),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + K + ")$", "i"),
				needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
			},
			X = /^(?:input|select|textarea|button)$/i,
			Y = /^h\d$/i,
			Z = /^[^{]+\{\s*\[native \w/,
			$ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			_ = /[+~]/,
			aa = /'|\\/g,
			ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
			ca = function (a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			},
			da = function () {
				m()
			};
		try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
		} catch (ea) {
			H = {
				apply: E.length ? function (a, b) {
					G.apply(a, I.call(b))
				} : function (a, b) {
					var c = a.length,
						d = 0;
					while (a[c++] = b[d++]);
					a.length = c - 1
				}
			}
		}

		function fa(a, b, d, e) {
			var f, h, j, k, l, o, r, s = b && b.ownerDocument,
				w = b ? b.nodeType : 9;
			if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
			if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
				if (11 !== w && (l = $.exec(a)))
					if (f = l[1]) {
						if (9 === w) {
							if (!(j = b.getElementById(f))) return d;
							if (j.id === f) return d.push(j), d
						} else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
					} else {
						if (l[2]) return H.apply(d, b.getElementsByTagName(a)), d;
						if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
					}
				if (!(!c.qsa || A[a + " "] || q && q.test(a))) {
					if (1 !== w) s = b, r = a;
					else if ("object" !== b.nodeName.toLowerCase()) {
						(k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), o = g(a), h = o.length;
						while (h--) o[h] = "[id='" + k + "'] " + qa(o[h]);
						r = o.join(","), s = _.test(a) && oa(b.parentNode) || b
					}
					if (r) try {
						return H.apply(d, s.querySelectorAll(r)), d
					} catch (x) {} finally {
						k === u && b.removeAttribute("id")
					}
				}
			}
			return i(a.replace(Q, "$1"), b, d, e)
		}

		function ga() {
			var a = [];

			function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
			}
			return b
		}

		function ha(a) {
			return a[u] = !0, a
		}

		function ia(a) {
			var b = n.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function ja(a, b) {
			var c = a.split("|"),
				e = a.length;
			while (e--) d.attrHandle[c[e]] = b
		}

		function ka(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
			if (d) return d;
			if (c)
				while (c = c.nextSibling)
					if (c === b) return -1;
			return a ? 1 : -1
		}

		function la(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function na(a) {
			return ha(function (b) {
				return b = +b, ha(function (c, d) {
					var e, f = a([], c.length, b),
						g = f.length;
					while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function oa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}
		c = fa.support = {}, f = fa.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, m = fa.setDocument = function (a) {
			var b, e, g = a ? a.ownerDocument || a : v;
			return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), n.documentMode && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
				return a.className = "i", !a.getAttribute("className")
			}), c.getElementsByTagName = ia(function (a) {
				return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
			}), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
				return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
			}), c.getById ? (d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);
					return c ? [c] : []
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(ba, ca);
				return function (a) {
					return a.getAttribute("id") === b
				}
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(ba, ca);
				return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
			} : function (a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if ("*" === a) {
					while (c = f[e++]) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
			}, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
			}), ia(function (a) {
				var b = n.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
			})), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b) {
				if (b)
					while (b = b.parentNode)
						if (b === a) return !0;
				return !1
			}, B = b ? function (a, b) {
				if (a === b) return l = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
			} : function (a, b) {
				if (a === b) return l = !0, 0;
				var c, d = 0,
					e = a.parentNode,
					f = b.parentNode,
					g = [a],
					h = [b];
				if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
				if (e === f) return ka(a, b);
				c = a;
				while (c = c.parentNode) g.unshift(c);
				c = b;
				while (c = c.parentNode) h.unshift(c);
				while (g[d] === h[d]) d++;
				return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
			}, n) : n
		}, fa.matches = function (a, b) {
			return fa(a, null, null, b)
		}, fa.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), !(!c.matchesSelector || !p || A[b + " "] || r && r.test(b) || q && q.test(b))) try {
				var d = s.call(a, b);
				if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			} catch (e) {}
			return fa(b, n, null, [a]).length > 0
		}, fa.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b)
		}, fa.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()],
				f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
		}, fa.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, fa.uniqueSort = function (a) {
			var b, d = [],
				e = 0,
				f = 0;
			if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++]) b === a[f] && (e = d.push(f));
				while (e--) a.splice(d[e], 1)
			}
			return k = null, a
		}, e = fa.getText = function (a) {
			var b, c = "",
				d = 0,
				f = a.nodeType;
			if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
				} else if (3 === f || 4 === f) return a.nodeValue
			} else
				while (b = a[d++]) c += e(b);
			return c
		}, d = fa.selectors = {
			cacheLength: 50,
			createPseudo: ha,
			match: W,
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
				ATTR: function (a) {
					return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function (a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
				},
				PSEUDO: function (a) {
					var b, c = !a[6] && a[2];
					return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function (a) {
					var b = a.replace(ba, ca).toLowerCase();
					return "*" === a ? function () {
						return !0
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function (a) {
					var b = y[a + " "];
					return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
					})
				},
				ATTR: function (a, b, c) {
					return function (d) {
						var e = fa.attr(d, a);
						return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
					}
				},
				CHILD: function (a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode
					} : function (b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h,
							t = !1;
						if (q) {
							if (f) {
								while (p) {
									m = b;
									while (m = m[p])
										if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
								while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
									if (1 === m.nodeType && ++t && m === b) {
										k[a] = [w, n, t];
										break
									}
							} else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
								while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
									if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
							return t -= e, t === d || t % d === 0 && t / d >= 0
						}
					}
				},
				PSEUDO: function (a, b) {
					var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
					return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
						var d, f = e(a, b),
							g = f.length;
						while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
					}) : function (a) {
						return e(a, 0, c)
					}) : e
				}
			},
			pseudos: {
				not: ha(function (a) {
					var b = [],
						c = [],
						d = h(a.replace(Q, "$1"));
					return d[u] ? ha(function (a, b, c, e) {
						var f, g = d(a, null, e, []),
							h = a.length;
						while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: ha(function (a) {
					return function (b) {
						return fa(a, b).length > 0
					}
				}),
				contains: ha(function (a) {
					return a = a.replace(ba, ca),
						function (b) {
							return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
						}
				}),
				lang: ha(function (a) {
					return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
						function (b) {
							var c;
							do
								if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
							while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function (b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function (a) {
					return a === o
				},
				focus: function (a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: function (a) {
					return a.disabled === !1
				},
				disabled: function (a) {
					return a.disabled === !0
				},
				checked: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function (a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function (a) {
					for (a = a.firstChild; a; a = a.nextSibling)
						if (a.nodeType < 6) return !1;
					return !0
				},
				parent: function (a) {
					return !d.pseudos.empty(a)
				},
				header: function (a) {
					return Y.test(a.nodeName)
				},
				input: function (a) {
					return X.test(a.nodeName)
				},
				button: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function (a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: na(function () {
					return [0]
				}),
				last: na(function (a, b) {
					return [b - 1]
				}),
				eq: na(function (a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: na(function (a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: na(function (a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: na(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: na(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, d.pseudos.nth = d.pseudos.eq;
		for (b in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) d.pseudos[b] = la(b);
		for (b in {
			submit: !0,
			reset: !0
		}) d.pseudos[b] = ma(b);

		function pa() {}
		pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if (k) return b ? 0 : k.slice(0);
			h = a, i = [], j = d.preFilter;
			while (h) {
				(!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
					value: c,
					type: e[0].replace(Q, " ")
				}), h = h.slice(c.length));
				for (g in d.filter)!(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
					value: c,
					type: g,
					matches: e
				}), h = h.slice(c.length));
				if (!c) break
			}
			return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
		};

		function qa(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
			return d
		}

		function ra(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === d,
				f = x++;
			return b.first ? function (b, c, f) {
				while (b = b[d])
					if (1 === b.nodeType || e) return a(b, c, f)
			} : function (b, c, g) {
				var h, i, j, k = [w, f];
				if (g) {
					while (b = b[d])
						if ((1 === b.nodeType || e) && a(b, c, g)) return !0
				} else
					while (b = b[d])
						if (1 === b.nodeType || e) {
							if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
							if (i[d] = k, k[2] = a(b, c, g)) return !0
						}
			}
		}

		function sa(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;
				while (e--)
					if (!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}

		function ta(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
			return c
		}

		function ua(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function va(a, b, c, d, e, f) {
			return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					p = f || ta(b || "*", h.nodeType ? [h] : h, []),
					q = !a || !f && b ? p : ua(p, m, a, h, i),
					r = c ? e || (f ? a : o || d) ? [] : g : q;
				if (c && c(q, r, h, i), d) {
					j = ua(r, n), d(j, [], h, i), k = j.length;
					while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
				}
				if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;
							while (k--)(l = r[k]) && j.push(q[k] = l);
							e(null, r = [], j, i)
						}
						k = r.length;
						while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
					}
				} else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
			})
		}

		function wa(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
				return a === b
			}, h, !0), l = ra(function (a) {
				return J(b, a) > -1
			}, h, !0), m = [
				function (a, c, d) {
					var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
					return b = null, e
				}
			]; f > i; i++)
				if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
				else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++)
							if (d.relative[a[e].type]) break;
						return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
							value: " " === a[i - 2].type ? "*" : ""
						})).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
					}
					m.push(c)
				}
			return sa(m)
		}

		function xa(a, b) {
			var c = b.length > 0,
				e = a.length > 0,
				f = function (f, g, h, i, k) {
					var l, o, q, r = 0,
						s = "0",
						t = f && [],
						u = [],
						v = j,
						x = f || e && d.find.TAG("*", k),
						y = w += null == v ? 1 : Math.random() || .1,
						z = x.length;
					for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
						if (e && l) {
							o = 0, g || l.ownerDocument === n || (m(l), h = !p);
							while (q = a[o++])
								if (q(l, g || n, h)) {
									i.push(l);
									break
								}
							k && (w = y)
						}
						c && ((l = !q && l) && r--, f && t.push(l))
					}
					if (r += s, c && s !== r) {
						o = 0;
						while (q = b[o++]) q(t, u, g, h);
						if (f) {
							if (r > 0)
								while (s--) t[s] || u[s] || (u[s] = F.call(i));
							u = ua(u)
						}
						H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
					}
					return k && (w = y, j = v), t
				};
			return c ? ha(f) : f
		}
		return h = fa.compile = function (a, b) {
			var c, d = [],
				e = [],
				f = A[a + " "];
			if (!f) {
				b || (b = g(a)), c = b.length;
				while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
				f = A(a, xa(e, d)), f.selector = a
			}
			return f
		}, i = fa.select = function (a, b, e, f) {
			var i, j, k, l, m, n = "function" == typeof a && a,
				o = !f && g(a = n.selector || a);
			if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
					n && (b = b.parentNode), a = a.slice(j.shift().value.length)
				}
				i = W.needsContext.test(a) ? 0 : j.length;
				while (i--) {
					if (k = j[i], d.relative[l = k.type]) break;
					if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
						if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
						break
					}
				}
			}
			return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"))
		}), ia(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || ja("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), c.attributes && ia(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || ja("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), ia(function (a) {
			return null == a.getAttribute("disabled")
		}) || ja(K, function (a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), fa
	}(a);
	m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.uniqueSort = m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
	var t = m.expr.match.needsContext,
		u = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		v = /^.[^:#\[\.,]*$/;

	function w(a, b, c) {
		if (m.isFunction(b)) return m.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return m.grep(a, function (a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (v.test(b)) return m.filter(b, a, c);
			b = m.filter(b, a)
		}
		return m.grep(a, function (a) {
			return m.inArray(a, b) > -1 !== c
		})
	}
	m.filter = function (a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
			return 1 === a.nodeType
		}))
	}, m.fn.extend({
		find: function (a) {
			var b, c = [],
				d = this,
				e = d.length;
			if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
				for (b = 0; e > b; b++)
					if (m.contains(d[b], this)) return !0
			}));
			for (b = 0; e > b; b++) m.find(a, d[b], c);
			return this.pushStack(e > 1 ? m.uniqueSort(c) : c)
		},
		filter: function (a) {
			return this.pushStack(w(this, a || [], !1))
		},
		not: function (a) {
			return this.pushStack(w(this, a || [], !0))
		},
		is: function (a) {
			return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
		}
	});
	var x, y = a.document,
		z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		A = m.fn.init = function (a, b, c) {
			var d, e;
			if (!a) return this;
			if (c = c || x, "string" == typeof a) {
				if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !d || !d[1] && b) return !b || b.fws01skjs ? (b || c).find(a) : this.constructor(b).find(a);
				if (d[1]) {
					if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(d[1]) && m.isPlainObject(b))
						for (d in b) m.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
					return this
				}
				return e = y.getElementById(d[2]), e && (this[0] = e, this.length = 1), this
			}
			return a.nodeType ? (this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(m) : m.makeArray(a, this)
		};
	A.prototype = m.fn, x = m(y);
	var B = /^(?:parents|prev(?:Until|All))/,
		C = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	m.extend({
		dir: function (a, b, c) {
			var d = [],
				e = a[b];
			while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
			return d
		},
		sibling: function (a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), m.fn.extend({
		has: function (a) {
			var b, c = m(a, this),
				d = c.length;
			return this.filter(function () {
				for (b = 0; d > b; b++)
					if (m.contains(this, c[b])) return !0
			})
		},
		closest: function (a, b) {
			for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c !== b; c = c.parentNode)
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
						f.push(c);
						break
					}
			return this.pushStack(f.length > 1 ? m.uniqueSort(f) : f)
		},
		index: function (a) {
			return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.fws01skjs ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (a, b) {
			return this.pushStack(m.uniqueSort(m.merge(this.get(), m(a, b))))
		},
		addBack: function (a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});

	function D(a, b) {
		do a = a[b]; while (a && 1 !== a.nodeType);
		return a
	}
	m.each({
		parent: function (a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function (a) {
			return m.dir(a, "parentNode")
		},
		parentsUntil: function (a, b, c) {
			return m.dir(a, "parentNode", c)
		},
		next: function (a) {
			return D(a, "nextSibling")
		},
		prev: function (a) {
			return D(a, "previousSibling")
		},
		nextAll: function (a) {
			return m.dir(a, "nextSibling")
		},
		prevAll: function (a) {
			return m.dir(a, "previousSibling")
		},
		nextUntil: function (a, b, c) {
			return m.dir(a, "nextSibling", c)
		},
		prevUntil: function (a, b, c) {
			return m.dir(a, "previousSibling", c)
		},
		siblings: function (a) {
			return m.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function (a) {
			return m.sibling(a.firstChild)
		},
		contents: function (a) {
			return a.contentDocument || m.merge([], a.childNodes)
		}
	}, function (a, b) {
		m.fn[a] = function (c, d) {
			var e = m.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.uniqueSort(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
		}
	});
	var E = /\S+/g;

	function F(a) {
		var b = {};
		return m.each(a.match(E) || [], function (a, c) {
			b[c] = !0
		}), b
	}
	m.Callbacks = function (a) {
		a = "string" == typeof a ? F(a) : m.extend({}, a);
		var b, c, d, e, f = [],
			g = [],
			h = -1,
			i = function () {
				for (e = a.once, d = b = !0; g.length; h = -1) {
					c = g.shift();
					while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
				}
				a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
			},
			j = {
				add: function () {
					return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
						m.each(b, function (b, c) {
							m.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== m.type(c) && d(c)
						})
					}(arguments), c && !b && i()), this
				},
				remove: function () {
					return m.each(arguments, function (a, b) {
						var c;
						while ((c = m.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
					}), this
				},
				has: function (a) {
					return a ? m.inArray(a, f) > -1 : f.length > 0
				},
				empty: function () {
					return f && (f = []), this
				},
				disable: function () {
					return e = g = [], f = c = "", this
				},
				disabled: function () {
					return !f
				},
				lock: function () {
					return e = g = [], c || b || (f = c = ""), this
				},
				locked: function () {
					return !!e
				},
				fireWith: function (a, c) {
					return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
				},
				fire: function () {
					return j.fireWith(this, arguments), this
				},
				fired: function () {
					return !!d
				}
			};
		return j
	};

	function G(a) {
		return a
	}

	function H(a) {
		throw a
	}
	m.extend({
		Deferred: function (a) {
			var b = [
					["notify", "progress", m.Callbacks("memory"), m.Callbacks("memory"), 2],
					["resolve", "done", m.Callbacks("once memory"), m.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", m.Callbacks("once memory"), m.Callbacks("once memory"), 1, "rejected"]
				],
				c = "pending",
				d = {
					state: function () {
						return c
					},
					always: function () {
						return e.done(arguments).fail(arguments), this
					},
					"catch": function (a) {
						return d.then(null, a)
					},
					pipe: function () {
						var a = arguments;
						return m.Deferred(function (c) {
							m.each(b, function (b, f) {
								var g = m.isFunction(a[f[4]]) && a[f[4]];
								e[f[1]](function () {
									var a = g && g.apply(this, arguments);
									a && m.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					then: function (a, c, e) {
						var f = 0;

						function g(a, b, c, e) {
							return function () {
								var h = this === d ? void 0 : this,
									i = arguments,
									j = function () {
										var d, j;
										if (!(f > a)) {
											if (d = c.apply(h, i), d === b.promise()) throw new TypeError("Thenable self-resolution");
											j = d && ("object" == typeof d || "function" == typeof d) && d.then, m.isFunction(j) ? e ? j.call(d, g(f, b, G, e), g(f, b, H, e)) : (f++, j.call(d, g(f, b, G, e), g(f, b, H, e), g(f, b, G, b.notify))) : (c !== G && (h = void 0, i = [d]), (e || b.resolveWith)(h || b.promise(), i))
										}
									},
									k = e ? j : function () {
										try {
											j()
										} catch (d) {
											a + 1 >= f && (c !== H && (h = void 0, i = [d]), b.rejectWith(h || b.promise(), i))
										}
									};
								a ? k() : setTimeout(k)
							}
						}
						return m.Deferred(function (d) {
							b[0][3].add(g(0, d, m.isFunction(e) ? e : G, d.notifyWith)), b[1][3].add(g(0, d, m.isFunction(a) ? a : G)), b[2][3].add(g(0, d, m.isFunction(c) ? c : H))
						}).promise()
					},
					promise: function (a) {
						return null != a ? m.extend(a, d) : d
					}
				},
				e = {};
			return m.each(b, function (a, f) {
				var g = f[2],
					h = f[5];
				d[f[1]] = g.add, h && g.add(function () {
					c = h
				}, b[3 - a][2].disable, b[0][2].lock), g.add(f[3].fire), e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function (a) {
			var b, c = 0,
				e = d.call(arguments),
				f = e.length,
				g = 1 !== f || a && m.isFunction(a.promise) ? f : 0,
				h = 1 === g ? a : m.Deferred(),
				i = function (a, b, c) {
					return function (e) {
						b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === j ? h.notifyWith(b, c) : --g || h.resolveWith(b, c)
					}
				},
				j, k, l;
			if (f > 1)
				for (j = new Array(f), k = new Array(f), l = new Array(f); f > c; c++) e[c] && m.isFunction(b = e[c].promise) ? b.call(e[c]).progress(i(c, k, j)).done(i(c, l, e)).fail(h.reject) : e[c] && m.isFunction(b = e[c].then) ? b.call(e[c], i(c, l, e), h.reject, i(c, k, j)) : --g;
			return g || h.resolveWith(l, e), h.promise()
		}
	});
	var I;
	m.fn.ready = function (a) {
		return m.ready.promise().done(a), this
	}, m.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (a) {
			a ? m.readyWait++ : m.ready(!0)
		},
		ready: function (a) {
			if (a === !0 ? !--m.readyWait : !m.isReady) {
				if (!y.body) return setTimeout(m.ready);
				m.isReady = !0, a !== !0 && --m.readyWait > 0 || I.resolveWith(y, [m])
			}
		}
	});

	function J() {
		y.addEventListener ? (y.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (y.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
	}

	function K() {
		(y.addEventListener || "load" === event.type || "complete" === y.readyState) && (J(), m.ready())
	}
	m.ready.promise = function (b) {
		return I || (I = m.Deferred(), "complete" === y.readyState ? setTimeout(m.ready) : y.addEventListener ? (y.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K)) : (y.attachEvent("onreadystatechange", K), a.attachEvent("onload", K))), I.promise(b)
	}, m.ready.promise();
	var L;
	for (L in m(k)) break;
	k.ownFirst = "0" === L,
	function () {
		var a = y.createElement("div");
		k.deleteExpando = !0;
		try {
			delete a.test
		} catch (b) {
			k.deleteExpando = !1
		}
		a = null
	}(), m.acceptData = function (a) {
		var b = m.noData[(a.nodeName + " ").toLowerCase()],
			c = +a.nodeType || 1;
		return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
	};
	var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		N = /([A-Z])/g;

	function O(a, b, c) {
		if (void 0 === c && 1 === a.nodeType) {
			var d = "data-" + b.replace(N, "-$1").toLowerCase();
			if (c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
				} catch (e) {}
				m.data(a, b, c)
			} else c = void 0
		}
		return c
	}

	function P(a) {
		var b;
		for (b in a)
			if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
		return !0
	}

	function Q(a, b, d, e) {
		if (m.acceptData(a)) {
			var f, g, h = m.expando,
				i = a.nodeType,
				j = i ? m.cache : a,
				k = i ? a[h] : a[h] && h;
			if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) {
				if (k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
					toJSON: m.noop
				}), f = j[k], e || (f.data || (f.data = {}), f = f.data), "object" == typeof b || "function" == typeof b) {
					for (g in b) f[m.camelCase(g)] = b[g];
					return f
				}
				return void 0 !== d ? f[m.camelCase(b)] = d : "string" == typeof b ? f[m.camelCase(b)] : f
			}
		}
	}

	function R(a, b, c) {
		if (m.acceptData(a)) {
			var d, e, f = a.nodeType,
				g = f ? m.cache : a,
				h = f ? a[m.expando] : m.expando;
			if (g[h]) {
				if (b && (d = c ? g[h] : g[h].data)) {
					m.isArray(b) ? b = m.map(b, m.camelCase) : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
					while (e--) delete d[b[e]];
					if (c ? !P(d) : !m.isEmptyObject(d)) return
				}(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
			}
		}
	}
	m.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function (a) {
			return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
		},
		data: function (a, b, c) {
			return Q(a, b, c)
		},
		removeData: function (a, b) {
			return R(a, b)
		},
		_data: function (a, b, c) {
			return Q(a, b, c, !0)
		},
		_removeData: function (a, b) {
			return R(a, b, !0)
		}
	}), m.fn.extend({
		data: function (a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
					c = g.length;
					while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
					m._data(f, "parsedAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function () {
				m.data(this, a)
			}) : arguments.length > 1 ? this.each(function () {
				m.data(this, a, b)
			}) : f ? O(f, a, m.data(f, a)) : void 0
		},
		removeData: function (a) {
			return this.each(function () {
				m.removeData(this, a)
			})
		}
	}), m.extend({
		queue: function (a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function (a, b) {
			b = b || "fx";
			var c = m.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = m._queueHooks(a, b),
				g = function () {
					m.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function (a, b) {
			var c = b + "queueHooks";
			return m._data(a, c) || m._data(a, c, {
				empty: m.Callbacks("once memory").add(function () {
					m._removeData(a, b + "queue"), m._removeData(a, c)
				})
			})
		}
	}), m.fn.extend({
		queue: function (a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = m.queue(this, a, b);
				m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
			})
		},
		dequeue: function (a) {
			return this.each(function () {
				m.dequeue(this, a)
			})
		},
		clearQueue: function (a) {
			return this.queue(a || "fx", [])
		},
		promise: function (a, b) {
			var c, d = 1,
				e = m.Deferred(),
				f = this,
				g = this.length,
				h = function () {
					--d || e.resolveWith(f, [f])
				};
			"string" != typeof a && (b = a, a = void 0), a = a || "fx";
			while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
		U = ["Top", "Right", "Bottom", "Left"],
		V = function (a, b) {
			return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
		},
		W = function (a, b, c, d) {
			var e, f, g = {};
			for (f in b) g[f] = a.style[f], a.style[f] = b[f];
			e = c.apply(a, d || []);
			for (f in b) a.style[f] = g[f];
			return e
		};

	function X(a, b, c, d) {
		var e, f = 1,
			g = 20,
			h = d ? function () {
				return d.cur()
			} : function () {
				return m.css(a, b, "")
			},
			i = h(),
			j = c && c[3] || (m.cssNumber[b] ? "" : "px"),
			k = (m.cssNumber[b] || "px" !== j && +i) && T.exec(m.css(a, b));
		if (k && k[3] !== j) {
			j = j || k[3], c = c || [], k = +i || 1;
			do f = f || ".5", k /= f, m.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
		}
		return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
	}

	function Y(a, b) {
		for (var c, d, e = [], f = 0, g = a.length; g > f; f++) d = a[f], d.style && (c = d.style.display, b ? "none" === c && (e[f] = m._data(d, "display") || "") : "none" !== c && (e[f] = "none", m._data(d, "display", c)));
		for (f = 0; g > f; f++) null != e[f] && (a[f].style.display = e[f]);
		return a
	}
	var Z = m.access = function (a, b, c, d, e, f, g) {
			var h = 0,
				i = a.length,
				j = null == c;
			if ("object" === m.type(c)) {
				e = !0;
				for (h in c) Z(a, b, h, c[h], !0, f, g)
			} else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
				return j.call(m(a), c)
			})), b))
				for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
			return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
		},
		$ = /^(?:checkbox|radio)$/i,
		_ = /<([\w:-]+)/,
		aa = /^$|\/(?:java|ecma)script/i,
		ba = /^\s+/,
		ca = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

	function da(a) {
		var b = ca.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement)
			while (b.length) c.createElement(b.pop());
		return c
	}! function () {
		var a = y.createElement("div"),
			b = y.createDocumentFragment();
		a.innerHTML = "  <link/><a href='/a'></a>", k.leadingWhitespace = 3 === a.firstChild.nodeType, k.htmlSerialize = !!a.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), a.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !!a.addEventListener, a[m.expando] = 1, k.attributes = !a.getAttribute(m.expando)
	}();
	var ea = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table>", "</table>"],
		td: [3, "<table>", "</table>"],
		_default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};
	ea.optgroup = ea.option, ea.tbody = ea.tfoot = ea.colgroup = ea.caption = ea.thead, ea.th = ea.td;

	function fa(a, b) {
		var c, d, e = 0,
			f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
		if (!f)
			for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || m.nodeName(d, b) ? f.push(d) : m.merge(f, fa(d, b));
		return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
	}

	function ga(a, b) {
		for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
	}
	var ha = /<|&#?\w+;/;

	function ia(a, b, c, d, e) {
		for (var f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)
			if (g = a[q], g || 0 === g)
				if ("object" === m.type(g)) m.merge(p, g.nodeType ? [g] : g);
				else if (ha.test(g)) {
			i = i || o.appendChild(b.createElement("div")), j = (_.exec(g) || ["", ""])[1].toLowerCase(), l = ea[j] || ea._default, i.innerHTML = l[1] + m.htmlPrefilter(g) + l[2], f = l[0];
			while (f--) i = i.lastChild;
			!k.leadingWhitespace && ba.test(g) && p.push(b.createTextNode(ba.exec(g)[0])), m.merge(p, i.childNodes), i.textContent = "";
			while (i.firstChild) i.removeChild(i.firstChild);
			i = o.lastChild
		} else p.push(b.createTextNode(g));
		i && o.removeChild(i), q = 0;
		while (g = p[q++])
			if (d && m.inArray(g, d) > -1) e && e.push(g);
			else if (h = m.contains(g.ownerDocument, g), i = fa(o.appendChild(g), "script"), h && ga(i), c) {
			f = 0;
			while (g = i[f++]) aa.test(g.type || "") && c.push(g)
		}
		return i = null, o
	}! function () {
		var b, c, d = y.createElement("div");
		for (b in {
			submit: !0,
			change: !0,
			focusin: !0
		}) c = "on" + b, (k[b] = c in a) || (d.setAttribute(c, "t"), k[b] = d.attributes[c].expando === !1);
		d = null
	}();
	var ja = /^(?:input|select|textarea)$/i,
		ka = /^key/,
		la = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		ma = /^(?:focusinfocus|focusoutblur)$/,
		na = /^([^.]*)(?:\.(.+)|)/;

	function oa() {
		return !0
	}

	function pa() {
		return !1
	}

	function qa() {
		try {
			return y.activeElement
		} catch (a) {}
	}

	function ra(a, b, c, d, e, f) {
		var g, h;
		if ("object" == typeof b) {
			"string" != typeof c && (d = d || c, c = void 0);
			for (g in b) ra(a, g, c, d, b[g], f);
			return a
		}
		return null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1 && (e = pa), 1 === f && (h = e, e = function (a) {
			return m().off(a), h.apply(this, arguments)
		}, e.guid = h.guid || (h.guid = m.guid++)), a.each(function () {
			m.event.add(this, b, e, d, c)
		})
	}
	m.event = {
		global: {},
		add: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
			if (r) {
				c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
					return "undefined" == typeof m || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
				}, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
				while (h--) f = na.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
					type: o,
					origType: q,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && m.expr.match.needsContext.test(e),
					namespace: p.join(".")
				}, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
				a = null
			}
		},
		remove: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
			if (r && (k = r.events)) {
				b = (b || "").match(E) || [""], j = b.length;
				while (j--)
					if (h = na.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
						l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
						while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
						i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
					} else
						for (o in k) m.event.remove(a, o + b[j], c, d, !0);
				m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
			}
		},
		trigger: function (b, c, d, e) {
			var f, g, h, i, k, l, n, o = [d || y],
				p = j.call(b, "type") ? b.type : b,
				q = j.call(b, "namespace") ? b.namespace.split(".") : [];
			if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !ma.test(p + m.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
				if (!e && !k.noBubble && !m.isWindow(d)) {
					for (i = k.delegateType || p, ma.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
					l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
				}
				n = 0;
				while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
				if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
					l = d[g], l && (d[g] = null), m.event.triggered = p;
					try {
						d[p]()
					} catch (r) {}
					m.event.triggered = void 0, l && (d[g] = l)
				}
				return b.result
			}
		},
		dispatch: function (a) {
			a = m.event.fix(a);
			var b, c, e, f, g, h = [],
				i = d.call(arguments),
				j = (m._data(this, "events") || {})[a.type] || [],
				k = m.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = m.event.handlers.call(this, a, j), b = 0;
				while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, g = 0;
					while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.rnamespace || a.rnamespace.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function (a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type))
				for (; i != this; i = i.parentNode || this)
					if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
						for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) > -1 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
						e.length && g.push({
							elem: i,
							handlers: e
						})
					}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		fix: function (a) {
			if (a[m.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			g || (this.fixHooks[e] = g = la.test(e) ? this.mouseHooks : ka.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
			while (b--) c = d[b], a[c] = f[c];
			return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (a, b) {
				var c, d, e, f = b.button,
					g = b.fromElement;
				return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== qa() && this.focus) try {
						return this.focus(), !1
					} catch (a) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === qa() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function (a) {
					return m.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function (a, b, c) {
			var d = m.extend(new m.Event, c, {
				type: a,
				isSimulated: !0
			});
			m.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
		}
	}, m.removeEvent = y.removeEventListener ? function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c)
	} : function (a, b, c) {
		var d = "on" + b;
		a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
	}, m.Event = function (a, b) {
		return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? oa : pa) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
	}, m.Event.prototype = {
		constructor: m.Event,
		isDefaultPrevented: pa,
		isPropagationStopped: pa,
		isImmediatePropagationStopped: pa,
		preventDefault: function () {
			var a = this.originalEvent;
			this.isDefaultPrevented = oa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function () {
			var a = this.originalEvent;
			this.isPropagationStopped = oa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = oa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, m.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (a, b) {
		m.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function (a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), k.submit || (m.event.special.submit = {
		setup: function () {
			return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
				var b = a.target,
					c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
				c && !m._data(c, "submit") && (m.event.add(c, "submit._submit", function (a) {
					a._submitBubble = !0
				}), m._data(c, "submit", !0))
			})
		},
		postDispatch: function (a) {
			a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a))
		},
		teardown: function () {
			return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
		}
	}), k.change || (m.event.special.change = {
		setup: function () {
			return ja.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
				"checked" === a.originalEvent.propertyName && (this._justChanged = !0)
			}), m.event.add(this, "click._change", function (a) {
				this._justChanged && !a.isTrigger && (this._justChanged = !1), m.event.simulate("change", this, a)
			})), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
				var b = a.target;
				ja.test(b.nodeName) && !m._data(b, "change") && (m.event.add(b, "change._change", function (a) {
					!this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a)
				}), m._data(b, "change", !0))
			})
		},
		handle: function (a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function () {
			return m.event.remove(this, "._change"), !ja.test(this.nodeName)
		}
	}), k.focusin || m.each({
		focus: "focusin",
		blur: "focusout"
	}, function (a, b) {
		var c = function (a) {
			m.event.simulate(b, a.target, m.event.fix(a))
		};
		m.event.special[b] = {
			setup: function () {
				var d = this.ownerDocument || this,
					e = m._data(d, b);
				e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
			},
			teardown: function () {
				var d = this.ownerDocument || this,
					e = m._data(d, b) - 1;
				e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
			}
		}
	}), m.fn.extend({
		on: function (a, b, c, d) {
			return ra(this, a, b, c, d)
		},
		one: function (a, b, c, d) {
			return ra(this, a, b, c, d, 1)
		},
		off: function (a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = pa), this.each(function () {
				m.event.remove(this, a, c, b)
			})
		},
		trigger: function (a, b) {
			return this.each(function () {
				m.event.trigger(a, b, this)
			})
		},
		triggerHandler: function (a, b) {
			var c = this[0];
			return c ? m.event.trigger(a, b, c, !0) : void 0
		}
	});
	var sa = / fws01skjs\d+="(?:null|\d+)"/g,
		ta = new RegExp("<(?:" + ca + ")[\\s/>]", "i"),
		ua = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		va = /<(?:script|style|link)/i,
		wa = /checked\s*(?:[^=]|=\s*.checked.)/i,
		xa = /^true\/(.*)/,
		ya = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		za = da(y),
		Aa = za.appendChild(y.createElement("div"));

	function Ba(a, b) {
		return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
	}

	function Ca(a) {
		return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
	}

	function Da(a) {
		var b = xa.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function Ea(a, b) {
		if (1 === b.nodeType && m.hasData(a)) {
			var c, d, e, f = m._data(a),
				g = m._data(b, f),
				h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h)
					for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
			}
			g.data && (g.data = m.extend({}, g.data))
		}
	}

	function Fa(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
				e = m._data(b);
				for (d in e.events) m.removeEvent(b, d, e.handle);
				b.removeAttribute(m.expando)
			}
			"script" === c && b.text !== a.text ? (Ca(b).text = a.text, Da(b)) : "input" === c && $.test(a.type) ? b.checked = a.checked : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
		}
	}

	function Ga(a, b, c, d) {
		b = e.apply([], b);
		var f, g, h, i, j, l, n = 0,
			o = a.length,
			p = o - 1,
			q = b[0],
			r = m.isFunction(q);
		if (r || o > 1 && "string" == typeof q && !k.checkClone && wa.test(q)) return a.each(function (e) {
			var f = a.eq(e);
			r && (b[0] = q.call(this, e, f.html())), Ga(f, b, c, d)
		});
		if (o && (l = ia(b, a[0].ownerDocument, !1, a, d), f = l.firstChild, 1 === l.childNodes.length && (l = f), f || d)) {
			for (i = m.map(fa(l, "script"), Ca), h = i.length; o > n; n++) g = l, n !== p && (g = m.clone(g, !0, !0), h && m.merge(i, fa(g, "script"))), c.call(a[n], g, n);
			if (h)
				for (j = i[i.length - 1].ownerDocument, m.map(i, Da), n = 0; h > n; n++) g = i[n], aa.test(g.type || "") && !m._data(g, "globalEval") && m.contains(j, g) && (g.src ? m._evalUrl && m._evalUrl(g.src) : m.globalEval((g.text || g.textContent || g.innerHTML || "").replace(ya, "")));
			l = f = null
		}
		return a
	}

	function Ha(a, b, c) {
		for (var d, e = b ? m.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || m.cleanData(fa(d)), d.parentNode && (c && m.contains(d.ownerDocument, d) && ga(fa(d, "script")), d.parentNode.removeChild(d));
		return a
	}
	m.extend({
		htmlPrefilter: function (a) {
			return a.replace(ua, "<$1></$2>")
		},
		clone: function (a, b, c) {
			var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
			if (k.html5Clone || m.isXMLDoc(a) || !ta.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Aa.innerHTML = a.outerHTML, Aa.removeChild(f = Aa.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
				for (d = fa(f), h = fa(a), g = 0; null != (e = h[g]); ++g) d[g] && Fa(e, d[g]);
			if (b)
				if (c)
					for (h = h || fa(a), d = d || fa(f), g = 0; null != (e = h[g]); g++) Ea(e, d[g]);
				else Ea(a, f);
			return d = fa(f, "script"), d.length > 0 && ga(d, !i && fa(a, "script")), d = h = e = null, f
		},
		cleanData: function (a, b) {
			for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.attributes, n = m.event.special; null != (d = a[h]); h++)
				if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
					if (g.events)
						for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
					j[f] && (delete j[f], l || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
				}
		}
	}), m.fn.extend({
		detach: function (a) {
			return Ha(this, a, !0)
		},
		remove: function (a) {
			return Ha(this, a)
		},
		text: function (a) {
			return Z(this, function (a) {
				return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
			}, null, a, arguments.length)
		},
		append: function () {
			return Ga(this, arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ba(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function () {
			return Ga(this, arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ba(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function () {
			return Ga(this, arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function () {
			return Ga(this, arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		empty: function () {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && m.cleanData(fa(a, !1));
				while (a.firstChild) a.removeChild(a.firstChild);
				a.options && m.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		},
		clone: function (a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return m.clone(this, a, b)
			})
		},
		html: function (a) {
			return Z(this, function (a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(sa, "") : void 0;
				if (!("string" != typeof a || va.test(a) || !k.htmlSerialize && ta.test(a) || !k.leadingWhitespace && ba.test(a) || ea[(_.exec(a) || ["", ""])[1].toLowerCase()])) {
					a = m.htmlPrefilter(a);
					try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(fa(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function () {
			var a = [];
			return Ga(this, arguments, function (b) {
				var c = this.parentNode;
				m.inArray(this, a) < 0 && (m.cleanData(fa(this)), c && c.replaceChild(b, this))
			}, a)
		}
	}), m.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (a, b) {
		m.fn[a] = function (a) {
			for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
			return this.pushStack(e)
		}
	});
	var Ia = /^margin/,
		Ja = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i");
	! function () {
		var b, c, d, e, f, g, h, i, j, l;
		if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = b.getElementsByTagName("a")[0], d = e && e.style) {
			d.cssText = "float:left;opacity:.5", k.opacity = "0.5" === d.opacity, k.cssFloat = !!d.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, c = y.createElement("div"), c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", b.innerHTML = "", c.appendChild(b), m.extend(k, {
				reliableHiddenOffsets: function () {
					return null == f && n(), j
				},
				boxSizingReliable: function () {
					return null == f && n(), g
				},
				gBCRDimensions: function () {
					return null == f && n(), h
				},
				pixelMarginRight: function () {
					return null == f && n(), i
				},
				pixelPosition: function () {
					return null == f && n(), f
				},
				reliableMarginRight: function () {
					return null == f && n(), l
				}
			});

			function n() {
				var d, e, k = y.body;
				k && k.style && (k.appendChild(c), b.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;margin:0;margin-top:1%;margin-right:50%;border:1px;padding:1px;top:1%;height:4px;width:50%", f = g = !1, i = l = !0, h = !!b.getBoundingClientRect().width, a.getComputedStyle && (e = a.getComputedStyle(b), f = "1%" !== (e || {}).top, g = "4px" === (e || {
					height: "4px"
				}).height, i = "4px" === (e || {
					marginRight: "4px"
				}).marginRight, d = b.appendChild(y.createElement("div")), d.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", d.style.marginRight = d.style.width = "0", b.style.width = "1px", l = !parseFloat((a.getComputedStyle(d) || {}).marginRight), b.removeChild(d)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d = b.getElementsByTagName("td"), d[0].style.cssText = "margin:0;border:0;padding:0;display:none", j = 0 === d[0].offsetHeight, j && (d[0].style.display = "", d[1].style.display = "none", j = 0 === d[0].offsetHeight), k.removeChild(c))
			}
		}
	}();
	var Ka, La, Ma = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (Ka = function (b) {
		var c = b.ownerDocument.defaultView;
		return c.opener || (c = a), c.getComputedStyle(b)
	}, La = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ka(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), !k.pixelMarginRight() && Ja.test(g) && Ia.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
	}) : y.documentElement.currentStyle && (Ka = function (a) {
		return a.currentStyle
	}, La = function (a, b, c) {
		var d, e, f = a.style;
		return c = c || Ka(a), e = c ? c[b] : void 0, null == e && f && f[b] && (e = f[b]), Ja.test(e) && !Ma.test(b) && (d = f.left, f.left = "fontSize" === b ? "1em" : e, e = f.pixelLeft + "px", f.left = d), void 0 === e ? e : e + "" || "auto"
	});

	function Na(a, b) {
		return {
			get: function () {
				var c = a();
				if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}
	var Oa = /alpha\([^)]*\)/i,
		Pa = /opacity\s*=\s*([^)]*)/i,
		Qa = /^(none|table(?!-c[ea]).+)/,
		Ra = new RegExp("^(" + S + ")(.*)$", "i"),
		Sa = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ta = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ua = ["Webkit", "Moz", "ms"],
		Va = y.createElement("div").style;

	function Wa(a) {
		if (a in Va) return a;
		var b = a[0].toUpperCase() + a.slice(1),
			c = Ua.length;
		while (c--)
			if (a = Ua[c] + b, a in Va) return a
	}

	function Xa(a, b, c) {
		var d = Ra.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function Ya(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + U[f] + "Width", !0, e))) : (g += m.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += m.css(a, "border" + U[f] + "Width", !0, e)));
		return g
	}

	function Za(b, c, d) {
		var e, f = !0,
			g = Ka(b),
			h = "border-box" === m.css(b, "boxSizing", !1, g);
		if (k.gBCRDimensions() ? b.getClientRects().length && (e = b.getBoundingClientRect()[c]) : e = "width" === c ? b.offsetWidth : b.offsetHeight, y.msFullscreenElement && a.top !== a && (e *= 100), 0 >= e || null == e) {
			if (e = La(b, c, g), (0 > e || null == e) && (e = b.style[c]), Ja.test(e)) return e;
			f = h && (k.boxSizingReliable() || e === b.style[c]), e = parseFloat(e) || 0
		}
		return e + Ya(b, c, d || (h ? "border" : "content"), f, g) + "px"
	}
	m.extend({
		cssHooks: {
			opacity: {
				get: function (a, b) {
					if (b) {
						var c = La(a, "opacity");
						return "" === c ? "1" : c
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
			"float": k.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = m.camelCase(b),
					i = a.style;
				if (b = m.cssProps[h] || (m.cssProps[h] = Wa(h) || h), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
				if (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (m.cssNumber[h] ? "" : "px")), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
					i[b] = c
				} catch (j) {}
			}
		},
		css: function (a, b, c, d) {
			var e, f, g, h = m.camelCase(b);
			return b = m.cssProps[h] || (m.cssProps[h] = Wa(h) || h), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = La(a, b, d)), "normal" === f && b in Ta && (f = Ta[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
		}
	}), m.each(["height", "width"], function (a, b) {
		m.cssHooks[b] = {
			get: function (a, c, d) {
				return c ? !Qa.test(m.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Za(a, b, d) : W(a, Sa, function () {
					return Za(a, b, d)
				}) : void 0
			},
			set: function (a, c, d) {
				var e = d && Ka(a);
				return Xa(a, c, d ? Ya(a, b, d, "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), k.opacity || (m.cssHooks.opacity = {
		get: function (a, b) {
			return Pa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		},
		set: function (a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Oa, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Oa.test(f) ? f.replace(Oa, e) : f + " " + e)
		}
	}), m.cssHooks.marginRight = Na(k.reliableMarginRight, function (a, b) {
		return b ? W(a, {
			display: "inline-block"
		}, La, [a, "marginRight"]) : void 0
	}), m.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (a, b) {
		m.cssHooks[a + b] = {
			expand: function (c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, Ia.test(a) || (m.cssHooks[a + b].set = Xa)
	}), m.fn.extend({
		css: function (a, b) {
			return Z(this, function (a, b, c) {
				var d, e, f = {},
					g = 0;
				if (m.isArray(b)) {
					for (d = Ka(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function () {
			return Y(this, !0)
		},
		hide: function () {
			return Y(this)
		},
		toggle: function (a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				V(this) ? m(this).show() : m(this).hide()
			})
		}
	});

	function $a(a, b, c, d, e) {
		return new $a.prototype.init(a, b, c, d, e)
	}
	m.Tween = $a, $a.prototype = {
		constructor: $a,
		init: function (a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || m.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
		},
		cur: function () {
			var a = $a.propHooks[this.prop];
			return a && a.get ? a.get(this) : $a.propHooks._default.get(this)
		},
		run: function (a) {
			var b, c = $a.propHooks[this.prop];
			return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $a.propHooks._default.set(this), this
		}
	}, $a.prototype.init.prototype = $a.prototype, $a.propHooks = {
		_default: {
			get: function (a) {
				var b;
				return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
			},
			set: function (a) {
				m.fx.step[a.prop] ? m.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[m.cssProps[a.prop]] && !m.cssHooks[a.prop] ? a.elem[a.prop] = a.now : m.style(a.elem, a.prop, a.now + a.unit)
			}
		}
	}, $a.propHooks.scrollTop = $a.propHooks.scrollLeft = {
		set: function (a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, m.easing = {
		linear: function (a) {
			return a
		},
		swing: function (a) {
			return .5 - Math.cos(a * Math.PI) / 2
		},
		_default: "swing"
	}, m.fx = $a.prototype.init, m.fx.step = {};
	var _a, ab, bb = /^(?:toggle|show|hide)$/,
		cb = /queueHooks$/;

	function db() {
		ab && (a.requestAnimationFrame(db), m.fx.tick())
	}

	function eb() {
		return setTimeout(function () {
			_a = void 0
		}), _a = m.now()
	}

	function fb(a, b) {
		var c, d = {
				height: a
			},
			e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}

	function gb(a, b, c) {
		for (var d, e = (jb.tweeners[b] || []).concat(jb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
			if (d = e[f].call(c, b, a)) return d
	}

	function hb(a, b, c) {
		var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
			n = this,
			o = {},
			p = a.style,
			q = a.nodeType && V(a),
			r = m._data(a, "fxshow");
		c.queue || (g = m._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
			g.unqueued || h()
		}), g.unqueued++, n.always(function () {
			n.always(function () {
				g.unqueued--, m.queue(a, "fx").length || g.empty.fire()
			})
		}));
		for (d in b)
			if (e = b[d], bb.test(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
					if ("show" !== e || !r || void 0 === r[d]) continue;
					q = !0
				}
				o[d] = r && r[d] || m.style(a, d)
			}
		if (i = !m.isEmptyObject(b), i || !m.isEmptyObject(o)) {
			l && 1 === a.nodeType && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = r && r.display, null == j && (j = m._data(a, "display")), k = m.css(a, "display"), "none" === k && (k = j || W(a, {
				display: ""
			}, function () {
				return m.css(a, "display")
			})), ("inline" === k || "inline-block" === k && null != j) && "none" === m.css(a, "float") && (i || (n.done(function () {
				p.display = j
			}), null == j && (k = p.display, j = "none" === k ? "" : k)), p.display = "inline-block")), c.overflow && (p.overflow = "hidden", n.always(function () {
				p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
			})), i = !1;
			for (d in o) i || (r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {
				display: j
			}), f && (r.hidden = !q), q && Y([a], !0), n.done(function () {
				q || Y([a]), m._removeData(a, "fxshow");
				for (d in o) m.style(a, d, o[d])
			})), i = gb(q ? r[d] : 0, d, n), d in r || (r[d] = i.start, q && (i.end = i.start, i.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function ib(a, b) {
		var c, d, e, f, g;
		for (c in a)
			if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function jb(a, b, c) {
		var d, e, f = 0,
			g = jb.prefilters.length,
			h = m.Deferred().always(function () {
				delete i.elem
			}),
			i = function () {
				if (e) return !1;
				for (var b = _a || eb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: m.extend({}, b),
				opts: m.extend(!0, {
					specialEasing: {},
					easing: m.easing._default
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: _a || eb(),
				duration: c.duration,
				tweens: [],
				createTween: function (b, c) {
					var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function (b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (ib(k, j.opts.specialEasing); g > f; f++)
			if (d = jb.prefilters[f].call(j, a, k, j.opts)) return m.isFunction(d.stop) && (m._queueHooks(j.elem, j.opts.queue).stop = m.proxy(d.stop, d)), d;
		return m.map(k, gb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	m.Animation = m.extend(jb, {
		tweeners: {
			"*": [
				function (a, b) {
					var c = this.createTween(a, b);
					return X(c.elem, a, T.exec(b), c), c
				}
			]
		},
		tweener: function (a, b) {
			m.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(E);
			for (var c, d = 0, e = a.length; e > d; d++) c = a[d], jb.tweeners[c] = jb.tweeners[c] || [], jb.tweeners[c].unshift(b)
		},
		prefilters: [hb],
		prefilter: function (a, b) {
			b ? jb.prefilters.unshift(a) : jb.prefilters.push(a)
		}
	}), m.speed = function (a, b, c) {
		var d = a && "object" == typeof a ? m.extend({}, a) : {
			complete: c || !c && b || m.isFunction(a) && a,
			duration: a,
			easing: c && b || b && !m.isFunction(b) && b
		};
		return m.fx.off || y.hidden ? d.duration = 0 : d.duration = "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
			m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
		}, d
	}, m.fn.extend({
		fadeTo: function (a, b, c, d) {
			return this.filter(V).css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function (a, b, c, d) {
			var e = m.isEmptyObject(a),
				f = m.speed(b, c, d),
				g = function () {
					var b = jb(this, m.extend({}, a), f);
					(e || m._data(this, "finish")) && b.stop(!0)
				};
			return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		},
		stop: function (a, b, c) {
			var d = function (a) {
				var b = a.stop;
				delete a.stop, b(c)
			};
			return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
				var b = !0,
					e = null != a && a + "queueHooks",
					f = m.timers,
					g = m._data(this);
				if (e) g[e] && g[e].stop && d(g[e]);
				else
					for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
				for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				(b || !c) && m.dequeue(this, a)
			})
		},
		finish: function (a) {
			return a !== !1 && (a = a || "fx"), this.each(function () {
				var b, c = m._data(this),
					d = c[a + "queue"],
					e = c[a + "queueHooks"],
					f = m.timers,
					g = d ? d.length : 0;
				for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
				delete c.finish
			})
		}
	}), m.each(["toggle", "show", "hide"], function (a, b) {
		var c = m.fn[b];
		m.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(fb(b, !0), a, d, e)
		}
	}), m.each({
		slideDown: fb("show"),
		slideUp: fb("hide"),
		slideToggle: fb("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (a, b) {
		m.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), m.timers = [], m.fx.tick = function () {
		var a, b = m.timers,
			c = 0;
		for (_a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
		b.length || m.fx.stop(), _a = void 0
	}, m.fx.timer = function (a) {
		m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
	}, m.fx.interval = 13, m.fx.start = function () {
		ab = a.requestAnimationFrame ? a.requestAnimationFrame(db) : setInterval(m.fx.tick, m.fx.interval)
	}, m.fx.stop = function () {
		a.cancelAnimationFrame ? a.cancelAnimationFrame(ab) : clearInterval(ab), ab = null
	}, m.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, m.fn.delay = function (a, b) {
		return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
			var d = setTimeout(b, a);
			c.stop = function () {
				clearTimeout(d)
			}
		})
	},
	function () {
		var a, b, c, d, e;
		b = y.createElement("div"), b.innerHTML = "  <link/><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.style = /top/.test(d.getAttribute("style")), k.checkOn = !!a.value, k.optSelected = e.selected, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
	}();
	var kb = /\r/g;
	m.fn.extend({
		val: function (a) {
			var b, c, d, e = this[0]; {
				if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
						return null == a ? "" : a + ""
					})), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(kb, "") : null == c ? "" : c)
			}
		}
	}), m.extend({
		valHooks: {
			option: {
				get: function (a) {
					return m.trim(a.value)
				}
			},
			select: {
				get: function (a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
							if (b = m(c).val(), f) return b;
							g.push(b)
						}
					return g
				},
				set: function (a, b) {
					var c, d, e = a.options,
						f = m.makeArray(b),
						g = e.length;
					while (g--) d = e[g], (d.selected = m.inArray(m.valHooks.option.get(d), f) > -1) && (c = !0);
					return c || (a.selectedIndex = -1), e
				}
			}
		}
	}), m.each(["radio", "checkbox"], function () {
		m.valHooks[this] = {
			set: function (a, b) {
				return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) > -1 : void 0
			}
		}, k.checkOn || (m.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var lb, mb = m.expr.attrHandle,
		nb = /^(?:checked|selected)$/i,
		ob = k.input;
	m.fn.extend({
		attr: function (a, b) {
			return Z(this, m.attr, a, b, arguments.length > 1)
		},
		removeAttr: function (a) {
			return this.each(function () {
				m.removeAttr(this, a)
			})
		}
	}), m.extend({
		attr: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), e = m.attrHooks[b] || (m.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void m.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = m.find.attr(a, b), null == d ? void 0 : d))
		},
		attrHooks: {
			type: {
				set: function (a, b) {
					if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		},
		removeAttr: function (a, b) {
			var c, d, e = 0,
				f = b && b.match(E);
			if (f && 1 === a.nodeType)
				while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) && (ob || !nb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1), a.removeAttribute(c)
		}
	}), lb = {
		set: function (a, b, c) {
			return b === !1 ? m.removeAttr(a, c) : ob || !nb.test(c) ? a.setAttribute(m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
		}
	}, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = mb[b] || m.find.attr;
		ob || !nb.test(b) ? mb[b] = function (a, b, d) {
			var e, f;
			return d || (f = mb[b], mb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, mb[b] = f), e
		} : mb[b] = function (a, b, c) {
			return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
		}
	}), ob || (m.attrHooks.value = {
		set: function (a, b) {
			m.nodeName(a, "input") && (a.defaultValue = b)
		}
	}), k.style || (m.attrHooks.style = {
		get: function (a) {
			return a.style.cssText || void 0
		},
		set: function (a, b) {
			return a.style.cssText = b + ""
		}
	});
	var pb = /^(?:input|select|textarea|button|object)$/i,
		qb = /^(?:a|area)$/i;
	m.fn.extend({
		prop: function (a, b) {
			return Z(this, m.prop, a, b, arguments.length > 1)
		},
		removeProp: function (a) {
			return a = m.propFix[a] || a, this.each(function () {
				try {
					this[a] = void 0, delete this[a]
				} catch (b) {}
			})
		}
	}), m.extend({
		prop: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) return 1 === f && m.isXMLDoc(a) || (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function (a) {
					var b = m.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : pb.test(a.nodeName) || qb.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), k.optSelected || (m.propHooks.selected = {
		get: function (a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	}), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		m.propFix[this.toLowerCase()] = this
	});
	var rb = /[\t\r\n\f]/g;

	function sb(a) {
		return a.getAttribute && a.getAttribute("class") || ""
	}
	m.fn.extend({
		addClass: function (a) {
			var b, c, d, e, f, g, h, i = 0,
				j = this.length,
				k = "string" == typeof a && a;
			if (m.isFunction(a)) return this.each(function (b) {
				m(this).addClass(a.call(this, b, sb(this)))
			});
			if (k)
				for (b = (a || "").match(E) || []; j > i; i++)
					if (c = this[i], e = sb(c), d = 1 === c.nodeType && (" " + e + " ").replace(rb, " ")) {
						g = 0;
						while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
						h = m.trim(d), e !== h && c.setAttribute("class", h)
					}
			return this
		},
		removeClass: function (a) {
			var b, c, d, e, f, g, h, i = 0,
				j = this.length,
				k = 0 === arguments.length || "string" == typeof a && a;
			if (m.isFunction(a)) return this.each(function (b) {
				m(this).removeClass(a.call(this, b, sb(this)))
			});
			if (k)
				for (b = (a || "").match(E) || []; j > i; i++)
					if (c = this[i], e = sb(c), d = 1 === c.nodeType && (" " + e + " ").replace(rb, " ")) {
						g = 0;
						while (f = b[g++])
							while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
						h = a ? m.trim(d) : "", e !== h && c.setAttribute("class", h)
					}
			return this
		},
		toggleClass: function (a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : m.isFunction(a) ? this.each(function (c) {
				m(this).toggleClass(a.call(this, c, sb(this), b), b)
			}) : this.each(function () {
				var b, d, e, f;
				if ("string" === c) {
					d = 0, e = m(this), f = a.match(E) || [];
					while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
				} else(void 0 === a || "boolean" === c) && (b = sb(this), b && m._data(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : m._data(this, "__className__") || ""))
			})
		},
		hasClass: function (a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if (1 === this[c].nodeType && (" " + sb(this[c]) + " ").replace(rb, " ").indexOf(b) > -1) return !0;
			return !1
		}
	}), m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
		m.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), m.fn.extend({
		hover: function (a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
		bind: function (a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function (a, b) {
			return this.off(a, null, b)
		},
		delegate: function (a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function (a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var tb = m.now(),
		ub = /\?/;
	m.parseJSON = function (a) {
		return JSON.parse(a + "")
	}, m.parseXML = function (b) {
		var c, d;
		if (!b || "string" != typeof b) return null;
		try {
			a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
		} catch (e) {
			c = void 0
		}
		return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
	};
	var vb = /#.*$/,
		wb = /([?&])_=[^&]*/,
		xb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		yb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		zb = /^(?:GET|HEAD)$/,
		Ab = /^\/\//,
		Bb = {},
		Cb = {},
		Db = "*/".concat("*"),
		Eb = y.createElement("a");
	Eb.href = location.href;

	function Fb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(E) || [];
			if (m.isFunction(c))
				while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function Gb(a, b, c, d) {
		var e = {},
			f = a === Cb;

		function g(h) {
			var i;
			return e[h] = !0, m.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function Hb(a, b) {
		var c, d, e = m.ajaxSettings.flatOptions || {};
		for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
		return c && m.extend(!0, a, c), a
	}

	function Ib(a, b, c) {
		var d, e, f, g, h = a.contents,
			i = a.dataTypes;
		while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
		if (e)
			for (g in h)
				if (h[g] && h[g].test(e)) {
					i.unshift(g);
					break
				}
		if (i[0] in c) f = i[0];
		else {
			for (g in c) {
				if (!i[0] || a.converters[g + " " + i[0]]) {
					f = g;
					break
				}
				d || (d = g)
			}
			f = f || d
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function Jb(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1])
			for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while (f)
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if ("*" === f) f = i;
				else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)
				for (e in j)
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
						break
					}
			if (g !== !0)
				if (g && a["throws"]) b = g(b);
				else try {
					b = g(b)
				} catch (l) {
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}
	m.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: yb.test(location.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Db,
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
				"text json": m.parseJSON,
				"text xml": m.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (a, b) {
			return b ? Hb(Hb(a, m.ajaxSettings), b) : Hb(m.ajaxSettings, a)
		},
		ajaxPrefilter: Fb(Bb),
		ajaxTransport: Fb(Cb),
		ajax: function (a, b) {
			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
				l = k.context || k,
				n = k.context && (l.nodeType || l.fws01skjs) ? m(l) : m.event,
				o = m.Deferred(),
				p = m.Callbacks("once memory"),
				q = k.statusCode || {},
				r = {},
				s = {},
				t = 0,
				u = "canceled",
				v = {
					readyState: 0,
					getResponseHeader: function (a) {
						var b;
						if (2 === t) {
							if (!j) {
								j = {};
								while (b = xb.exec(e)) j[b[1].toLowerCase()] = b[2]
							}
							b = j[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function () {
						return 2 === t ? e : null
					},
					setRequestHeader: function (a, b) {
						var c = a.toLowerCase();
						return t || (a = s[c] = s[c] || a, r[a] = b), this
					},
					overrideMimeType: function (a) {
						return t || (k.mimeType = a), this
					},
					statusCode: function (a) {
						var b;
						if (a)
							if (2 > t)
								for (b in a) q[b] = [q[b], a[b]];
							else v.always(a[v.status]);
						return this
					},
					abort: function (a) {
						var b = a || u;
						return i && i.abort(b), x(0, b), this
					}
				};
			if (o.promise(v), k.url = ((a || k.url || location.href) + "").replace(vb, "").replace(Ab, location.protocol + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain) {
				g = y.createElement("a");
				try {
					g.href = k.url, g.href = g.href, k.crossDomain = Eb.protocol + "//" + Eb.host != g.protocol + "//" + g.host
				} catch (w) {
					k.crossDomain = !0
				}
			}
			if (k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Gb(Bb, k, b, v), 2 === t) return v;
			h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !zb.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (ub.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = wb.test(d) ? d.replace(wb, "$1_=" + tb++) : d + (ub.test(d) ? "&" : "?") + "_=" + tb++)), k.ifModified && (m.lastModified[d] && v.setRequestHeader("If-Modified-Since", m.lastModified[d]), m.etag[d] && v.setRequestHeader("If-None-Match", m.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Db + "; q=0.01" : "") : k.accepts["*"]);
			for (c in k.headers) v.setRequestHeader(c, k.headers[c]);
			if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
			if (u = "abort", p.add(k.complete), v.done(k.success), v.fail(k.error), i = Gb(Cb, k, b, v)) {
				if (v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), 2 === t) return v;
				k.async && k.timeout > 0 && (f = setTimeout(function () {
					v.abort("timeout")
				}, k.timeout));
				try {
					t = 1, i.send(r, x)
				} catch (w) {
					if (!(2 > t)) throw w;
					x(-1, w)
				}
			} else x(-1, "No Transport");

			function x(a, b, c, g) {
				var j, r, s, u, w, x = b;
				2 !== t && (t = 2, f && clearTimeout(f), i = void 0, e = g || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ib(k, v, c)), u = Jb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (m.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
			}
			return v
		},
		getJSON: function (a, b, c) {
			return m.get(a, b, c, "json")
		},
		getScript: function (a, b) {
			return m.get(a, void 0, b, "script")
		}
	}), m.each(["get", "post"], function (a, b) {
		m[b] = function (a, c, d, e) {
			return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax(m.extend({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			}, m.isPlainObject(a) && a))
		}
	}), m._evalUrl = function (a) {
		return m.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	}, m.fn.extend({
		wrapAll: function (a) {
			var b;
			return this[0] && (m.isFunction(a) && (a = a.call(this[0])), b = m(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
				var a = this;
				while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
				return a
			}).append(this)), this
		},
		wrapInner: function (a) {
			return m.isFunction(a) ? this.each(function (b) {
				m(this).wrapInner(a.call(this, b))
			}) : this.each(function () {
				var b = m(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function (a) {
			var b = m.isFunction(a);
			return this.each(function (c) {
				m(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function (a) {
			return this.parent(a).not("body").each(function () {
				m(this).replaceWith(this.childNodes)
			}), this
		}
	}), m.expr.filters.hidden = function (a) {
		return !m.expr.filters.visible(a)
	}, m.expr.filters.visible = function (a) {
		return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) && (k.reliableHiddenOffsets() || "none" !== (a.style && a.style.display || m.css(a, "display")))
	};
	var Kb = /%20/g,
		Lb = /\[\]$/,
		Mb = /\r?\n/g,
		Nb = /^(?:submit|button|image|reset|file)$/i,
		Ob = /^(?:input|select|textarea|keygen)/i;

	function Pb(a, b, c, d) {
		var e;
		if (m.isArray(b)) m.each(b, function (b, e) {
			c || Lb.test(a) ? d(a, e) : Pb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== m.type(b)) d(a, b);
		else
			for (e in b) Pb(a + "[" + e + "]", b[e], c, d)
	}
	m.param = function (a, b) {
		var c, d = [],
			e = function (a, b) {
				b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.fws01skjs && !m.isPlainObject(a)) m.each(a, function () {
			e(this.name, this.value)
		});
		else
			for (c in a) Pb(c, a[c], b, e);
		return d.join("&").replace(Kb, "+")
	}, m.fn.extend({
		serialize: function () {
			return m.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var a = m.prop(this, "elements");
				return a ? m.makeArray(a) : this
			}).filter(function () {
				var a = this.type;
				return this.name && !m(this).is(":disabled") && Ob.test(this.nodeName) && !Nb.test(a) && (this.checked || !$.test(a))
			}).map(function (a, b) {
				var c = m(this).val();
				return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
					return {
						name: b.name,
						value: a.replace(Mb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(Mb, "\r\n")
				}
			}).get()
		}
	}), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
		return this.isLocal ? Sb() : y.documentMode > 8 ? Rb() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Rb() || Sb()
	} : Rb;
	var Qb = m.ajaxSettings.xhr();
	k.cors = !!Qb && "withCredentials" in Qb, Qb = k.ajax = !!Qb, Qb && m.ajaxTransport(function (a) {
		if (!a.crossDomain || k.cors) {
			var b;
			return {
				send: function (c, d) {
					var e, f = a.xhr();
					if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
						for (e in a.xhrFields) f[e] = a.xhrFields[e];
					a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
					for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
					f.send(a.hasContent && a.data || null), b = function (c, e) {
						var g, h, i;
						if (b && (e || 4 === f.readyState))
							if (b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
							else {
								i = {}, g = f.status, "string" == typeof f.responseText && (i.text = f.responseText);
								try {
									h = f.statusText
								} catch (j) {
									h = ""
								}
								g || !a.isLocal || a.crossDomain ? 1223 === g && (g = 204) : g = i.text ? 200 : 404
							}
						i && d(g, h, i, f.getAllResponseHeaders())
					}, a.async ? f.onreadystatechange = b : b()
				},
				abort: function () {
					b && b(void 0, !0)
				}
			}
		}
	});

	function Rb() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}

	function Sb() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}
	m.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (a) {
				return m.globalEval(a), a
			}
		}
	}), m.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), m.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c = y.head || m("head")[0] || y.documentElement;
			return {
				send: function (d, e) {
					b = y.createElement("script"), a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
						(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
					}, c.appendChild(b)
				},
				abort: function () {
					b && b.onload(void 0, !0)
				}
			}
		}
	});
	var Tb = [],
		Ub = /(=)\?(?=&|$)|\?\?/;
	m.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var a = Tb.pop() || m.expando + "_" + tb++;
			return this[a] = !0, a
		}
	}), m.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (ub.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || m.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments
		}, d.always(function () {
			void 0 === f ? m(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), k.createHTMLDocument = function () {
		if (!y.implementation.createHTMLDocument) return !1;
		var a = y.implementation.createHTMLDocument("");
		return a.body.innerHTML = "<form></form><form></form>", 2 === a.body.childNodes.length
	}(), m.parseHTML = function (a, b, c) {
		if ("string" != typeof a) return [];
		"boolean" == typeof b && (c = b, b = !1), b = b || (k.createHTMLDocument ? y.implementation.createHTMLDocument("") : y);
		var d = u.exec(a),
			e = !c && [];
		return d ? [b.createElement(d[1])] : (d = ia([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
	}, m.fn.load = function (a, b, c) {
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h > -1 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
			url: a,
			type: f || "GET",
			dataType: "html",
			data: b
		}).done(function (a) {
			e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
		}).always(c && function (a, b) {
			g.each(function () {
				c.apply(g, e || [a.responseText, b, a])
			})
		}), this
	}, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		m.fn[b] = function (a) {
			return this.on(b, a)
		}
	}), m.expr.filters.animated = function (a) {
		return m.grep(m.timers, function (b) {
			return a === b.elem
		}).length
	};
	var Vb = a.document.documentElement;

	function Wb(a) {
		return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}
	m.offset = {
		setOffset: function (a, b, c) {
			var d, e, f, g, h, i, j, k = m.css(a, "position"),
				l = m(a),
				n = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, m.extend({}, h))), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
		}
	}, m.fn.extend({
		offset: function (a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				m.offset.setOffset(this, a, b)
			});
			var b, c, d, e, f = this[0];
			if (f) return e = f.ownerDocument, b = e.documentElement, m.contains(b, f) ? (d = f.getBoundingClientRect(), d.width || d.height || f.getClientRects().length ? (c = Wb(e), {
				top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
				left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
			}) : d) : {
				top: 0,
				left: 0
			}
		},
		position: function () {
			if (this[0]) {
				var a, b, c = {
						top: 0,
						left: 0
					},
					d = this[0];
				return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0) - a.scrollTop(), c.left += m.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
					top: b.top - c.top - m.css(d, "marginTop", !0),
					left: b.left - c.left - m.css(d, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				var a = this.offsetParent;
				while (a && "static" === m.css(a, "position")) a = a.offsetParent;
				return a || Vb
			})
		}
	}), m.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (a, b) {
		var c = /Y/.test(b);
		m.fn[a] = function (d) {
			return Z(this, function (a, d, e) {
				var f = Wb(a);
				return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
			}, a, d, arguments.length, null)
		}
	}), m.each(["top", "left"], function (a, b) {
		m.cssHooks[b] = Na(k.pixelPosition, function (a, c) {
			return c ? (c = La(a, b), Ja.test(c) ? m(a).position()[b] + "px" : c) : void 0
		})
	}), m.each({
		Height: "height",
		Width: "width"
	}, function (a, b) {
		m.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function (c, d) {
			m.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return Z(this, function (b, c, d) {
					var e;
					return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), "function" == typeof define && define.amd && define("fws01skjs", [], function () {
		return m
	});
	var Xb = a.fws01skjs,
		Yb = a.$;
	return m.noConflict = function (b) {
		return a.$ === m && (a.$ = Yb), b && a.fws01skjs === m && (a.fws01skjs = Xb), m
	}, b || (a.fws01skjs = a.$ = m), m
});
$(function () {
	var Fireworks = function () {
		var self = this;
		var rand = function (rMi, rMa) {
			return~~ ((Math.random() * (rMa - rMi + 1)) + rMi);
		}
		var hitTest = function (x1, y1, w1, h1, x2, y2, w2, h2) {
			return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
		};
		window.requestAnimFrame = function () {
			return window.requestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (a) {
				window.setTimeout(a, 1E3 / 60)
			}
		}();
		self.init = function () {
			let dt = 'This Page is Designed By virtualgadgets.in';
			self.canvas = document.createElement('canvas');
			self.canvas.width = self.cw = $(window).innerWidth();
			self.canvas.height = self.ch = $(window).innerHeight();
			self.fireworks = [];
			self.particles = [];
			self.partCount = 200;
			self.partSpeed = 3;
			self.partSpeedVariance = 7;
			self.partWind = 0.9;
			self.partFriction = 5;
			self.partGravity = 1;
			self.fworkSpeed = 1;
			self.fworkAccel = 1.5;
			self.clearAlpha = 8;
			self.lineWidth = 3;
			self.hueMin = 0;
			self.hueMax = 360;
			self.hueVariance = 28;
			self.showTarget = false;
			$(document.body).append(self.canvas);
			self.ctx = self.canvas.getContext('2d');
			self.bindEvents();
			self.canvasLoop();
			self.mx = self.cw / 2;
			self.my = self.ch / 2;
			self.currentHue = 30;
			self.flickerDensity = 250;
			self.showShockwave = true;
			self.ctx.lineCap = 'round';
			self.ctx.lineJoin = 'round';
			console.log(`%c ${dt}`, styles);
			self.canvas.onselectstart = function () {
				return false;
			};
		};
		self.createParticles = function (x, y, hue) {
			var audio = document.getElementById('Fireworks-01-sk.js_firework_sound-audio-01');
			if (audio.paused) {
				audio.play();
			} else {
				audio.currentTime = 0
			}
			var countdown = self.partCount;
			while (countdown--) {
				var newParticle = {
					x: x,
					y: y,
					coordLast: [{
						x: x,
						y: y
					}, {
						x: x,
						y: y
					}, {
						x: x,
						y: y
					}],
					angle: rand(0, 360),
					speed: rand(((self.partSpeed - self.partSpeedVariance) <= 0) ? 1 : self.partSpeed - self.partSpeedVariance, (self.partSpeed + self.partSpeedVariance)),
					friction: 1 - self.partFriction / 100,
					gravity: self.partGravity / 2,
					hue: rand(hue - self.hueVariance, hue + self.hueVariance),
					brightness: rand(50, 50),
					alpha: rand(4, 100) / 100,
					decay: rand(4, 10) / 1000,
					wind: (rand(0, self.partWind) - (self.partWind / 2)) / 25,
					lineWidth: self.lineWidth
				};
				self.particles.push(newParticle);
			}
		};
		self.updateParticles = function () {
			var i = self.particles.length;
			while (i--) {
				var p = self.particles[i];
				var radians = p.angle * Math.PI / 180;
				var vx = Math.cos(radians) * p.speed;
				var vy = Math.sin(radians) * p.speed;
				p.speed *= p.friction;
				p.coordLast[2].x = p.coordLast[1].x;
				p.coordLast[2].y = p.coordLast[1].y;
				p.coordLast[1].x = p.coordLast[0].x;
				p.coordLast[1].y = p.coordLast[0].y;
				p.coordLast[0].x = p.x;
				p.coordLast[0].y = p.y;
				p.x += vx;
				p.y += vy;
				p.y += p.gravity;
				p.angle += p.wind;
				p.alpha -= p.decay;
				if (!hitTest(0, 0, self.cw, self.ch, p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2) || p.alpha < .05) {
					self.particles.splice(i, 1);
				}
			};
		};
		self.drawParticles = function () {
			var i = self.particles.length;
			while (i--) {
				var p = self.particles[i];
				var coordRand = (rand(2, 3) - 1);
				self.ctx.beginPath();
				self.ctx.moveTo(Math.round(p.coordLast[coordRand].x), Math.round(p.coordLast[coordRand].y));
				self.ctx.lineTo(Math.round(p.x), Math.round(p.y));
				self.ctx.closePath();
				self.ctx.strokeStyle = 'hsla(' + p.hue + ', 100%, ' + p.brightness + '%, ' + p.alpha + ')';
				self.ctx.stroke();
				if (self.flickerDensity > 0) {
					var inverseDensity = 50 - self.flickerDensity;
					if (rand(0, inverseDensity) === inverseDensity) {
						self.ctx.beginPath();
						self.ctx.arc(Math.round(p.x), Math.round(p.y), rand(p.lineWidth, p.lineWidth + 3) / 2, 0, Math.PI * 2, false)
						self.ctx.closePath();
						var randAlpha = rand(50, 100) / 100;
						self.ctx.fillStyle = 'hsla(' + p.hue + ', 100%, ' + p.brightness + '%, ' + randAlpha + ')';
						self.ctx.fill();
					}
				}
			};
		};
		self.createFireworks = function (startX, startY, targetX, targetY) {
			var newFirework = {
				x: startX,
				y: startY,
				startX: startX,
				startY: startY,
				hitX: false,
				hitY: false,
				coordLast: [{
					x: startX,
					y: startY
				}, {
					x: startX,
					y: startY
				}, {
					x: startX,
					y: startY
				}],
				targetX: targetX,
				targetY: targetY,
				speed: self.fworkSpeed,
				angle: Math.atan2(targetY - startY, targetX - startX),
				shockwaveAngle: Math.atan2(targetY - startY, targetX - startX) + (90 * (Math.PI / 180)),
				acceleration: self.fworkAccel / 100,
				hue: self.currentHue,
				brightness: rand(50, 80),
				alpha: rand(50, 100) / 100,
				lineWidth: self.lineWidth
			};
			self.fireworks.push(newFirework);
		};
		self.updateFireworks = function () {
			var i = self.fireworks.length;
			while (i--) {
				var f = self.fireworks[i];
				self.ctx.lineWidth = f.lineWidth;
				vx = Math.cos(f.angle) * f.speed,
				vy = Math.sin(f.angle) * f.speed;
				f.speed *= 1 + f.acceleration;
				f.coordLast[2].x = f.coordLast[1].x;
				f.coordLast[2].y = f.coordLast[1].y;
				f.coordLast[1].x = f.coordLast[0].x;
				f.coordLast[1].y = f.coordLast[0].y;
				f.coordLast[0].x = f.x;
				f.coordLast[0].y = f.y;
				if (f.startX >= f.targetX) {
					if (f.x + vx <= f.targetX) {
						f.x = f.targetX;
						f.hitX = true;
					} else {
						f.x += vx;
					}
				} else {
					if (f.x + vx >= f.targetX) {
						f.x = f.targetX;
						f.hitX = true;
					} else {
						f.x += vx;
					}
				}
				if (f.startY >= f.targetY) {
					if (f.y + vy <= f.targetY) {
						f.y = f.targetY;
						f.hitY = true;
					} else {
						f.y += vy;
					}
				} else {
					if (f.y + vy >= f.targetY) {
						f.y = f.targetY;
						f.hitY = true;
					} else {
						f.y += vy;
					}
				}
				if (f.hitX && f.hitY) {
					self.createParticles(f.targetX, f.targetY, f.hue);
					self.fireworks.splice(i, 1);
				}
			};
		};
		self.drawFireworks = function () {
			var i = self.fireworks.length;
			self.ctx.globalCompositeOperation = 'lighter';
			while (i--) {
				var f = self.fireworks[i];
				self.ctx.lineWidth = f.lineWidth;
				var coordRand = (rand(1, 3) - 1);
				self.ctx.beginPath();
				self.ctx.moveTo(Math.round(f.coordLast[coordRand].x), Math.round(f.coordLast[coordRand].y));
				self.ctx.lineTo(Math.round(f.x), Math.round(f.y));
				self.ctx.closePath();
				self.ctx.strokeStyle = 'hsla(' + f.hue + ', 100%, ' + f.brightness + '%, ' + f.alpha + ')';
				self.ctx.stroke();
				if (self.showTarget) {
					self.ctx.save();
					self.ctx.beginPath();
					self.ctx.arc(Math.round(f.targetX), Math.round(f.targetY), rand(1, 8), 0, Math.PI * 2, false)
					self.ctx.closePath();
					self.ctx.lineWidth = 1;
					self.ctx.stroke();
					self.ctx.restore();
				}
				if (self.showShockwave) {
					self.ctx.save();
					self.ctx.translate(Math.round(f.x), Math.round(f.y));
					self.ctx.rotate(f.shockwaveAngle);
					self.ctx.beginPath();
					self.ctx.arc(0, 0, 1 * (f.speed / 5), 0, Math.PI, true);
					self.ctx.strokeStyle = 'hsla(' + f.hue + ', 100%, ' + f.brightness + '%, ' + rand(25, 60) / 100 + ')';
					self.ctx.lineWidth = f.lineWidth;
					self.ctx.stroke();
					self.ctx.restore();
				}
			};
		};
		self.bindEvents = function () {
			$(window).on('resize', function () {
				clearTimeout(self.timeout);
				self.timeout = setTimeout(function () {
					self.canvas.width = self.cw = $(window).innerWidth();
					self.canvas.height = self.ch = $(window).innerHeight();
					self.ctx.lineCap = 'round';
					self.ctx.lineJoin = 'round';
				}, 100);
			});
			$(self.canvas).on('mousedown', function (e) {
				self.mx = e.pageX - self.canvas.offsetLeft;
				self.my = e.pageY - self.canvas.offsetTop;
				self.currentHue = rand(self.hueMin, self.hueMax);
				self.createFireworks(self.cw / 2, self.ch, self.mx, self.my);
				$(self.canvas).on('mousemove.fireworks', function (e) {
					self.mx = e.pageX - self.canvas.offsetLeft;
					self.my = e.pageY - self.canvas.offsetTop;
					self.currentHue = rand(self.hueMin, self.hueMax);
					self.createFireworks(self.cw / 2, self.ch, self.mx, self.my);
				});
			});
			$(self.canvas).on('mouseup', function (e) {
				$(self.canvas).off('mousemove.fireworks');
			});
		}
		self.clear = function () {
			self.particles = [];
			self.fireworks = [];
			self.ctx.clearRect(0, 0, self.cw, self.ch);
		};
		self.canvasLoop = function () {
			requestAnimFrame(self.canvasLoop, self.canvas);
			self.ctx.globalCompositeOperation = 'destination-out';
			self.ctx.fillStyle = 'rgba(0,0,0,' + self.clearAlpha / 100 + ')';
			self.ctx.fillRect(0, 0, self.cw, self.ch);
			self.updateFireworks();
			self.updateParticles();
			self.drawFireworks();
			self.drawParticles();
		};
		self.init();
	}
	var fworks = new Fireworks();
	$('#info-toggle').on('click', function (e) {
		$('#info-inner').stop(false, true).slideToggle(100);
		e.preventDefault();
	});
});
