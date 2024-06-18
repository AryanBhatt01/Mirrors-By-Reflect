"use strict";
(self.webpackChunkAfterPay = self.webpackChunkAfterPay || []).push([
    [142], {
        7346: function(n, r, e) {
            e.r(r);
            var t = e(5671),
                i = e(3144),
                u = (e(4338), e(6603)),
                a = e(4317),
                o = e(4147),
                c = e(6921),
                s = u.Z.analytics.AMP_INSTANCE_NAME,
                l = a.ZP.AMP_API_KEY,
                f = o.i8,
                p = function() {
                    function n() {
                        (0, t.Z)(this, n)
                    }
                    return (0, i.Z)(n, null, [{
                        key: "init",
                        value: function() {
                            (0, c.d)("amplitude-js").then((function(n) {
                                var r = n.default;
                                try {
                                    r.getInstance(s).init(l), r.getInstance(s).setVersionName(f)
                                } catch (n) {
                                    console.error("Error initializing amplitude instance. Details: ".concat(n.message))
                                }
                            })).catch((function(n) {
                                return console.error("Error importing amplitude js. Details: ".concat(n.message))
                            }))
                        }
                    }, {
                        key: "logEvent",
                        value: function(n) {
                            window.Square.Marketplace.isAnalyticsInitialized && (0, c.d)("amplitude-js").then((function(r) {
                                var e = r.default;
                                try {
                                    e.getInstance(s).logEvent(n)
                                } catch (r) {
                                    console.error("Error logging event ".concat(n, " with amplitude. Details: ").concat(r.message))
                                }
                            })).catch((function(n) {
                                return console.error("Error importing amplitude js. Details: ".concat(n.message))
                            }))
                        }
                    }]), n
                }();
            r.default = p
        },
        1474: function(n, r, e) {
            e.r(r), e.d(r, {
                doesFpBelongToABSet: function() {
                    return I
                },
                generateFingerprints: function() {
                    return b
                },
                getOrGenerateFingerprintData: function() {
                    return m
                },
                isObject: function() {
                    return d
                },
                mapFingerprintData: function() {
                    return g
                },
                shouldRegenerateFingerprint: function() {
                    return E
                },
                validateStoredFingerprint: function() {
                    return k
                }
            });
            var t = e(3324),
                i = e(5861),
                u = e(1002),
                a = e(4687),
                o = e.n(a),
                c = (e(752), e(9358), e(228), e(3964), e(1694), e(6265), e(6921)),
                s = function(n) {
                    try {
                        return sessionStorage.getItem(n)
                    } catch (n) {
                        return null
                    }
                },
                l = function(n, r) {
                    try {
                        return sessionStorage.setItem(n, r), {
                            keyName: n,
                            keyValue: r
                        }
                    } catch (n) {
                        return null
                    }
                },
                f = e(4317),
                p = e(9007),
                v = f.ZP.SELECTED_AB_BUCKET;

            function g(n, r) {
                var e, t, i, u, a, o;
                return {
                    fp: null !== (e = null == n ? void 0 : n.fingerprint) && void 0 !== e ? e : "",
                    fpVer: null !== (t = null == n ? void 0 : n.version) && void 0 !== t ? t : "",
                    fpCache: null !== (i = null == n ? void 0 : n.fromCache) && void 0 !== i ? i : "",
                    fp2: null !== (u = null == r ? void 0 : r.fingerprint) && void 0 !== u ? u : "",
                    fp2Ver: null !== (a = null == r ? void 0 : r.version) && void 0 !== a ? a : "",
                    fp2Cache: null !== (o = null == r ? void 0 : r.fromCache) && void 0 !== o ? o : ""
                }
            }
            var d = function(n) {
                    return "object" === (0, u.Z)(n) && !Array.isArray(n) && null !== n
                },
                h = null;

            function m() {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = (0, i.Z)(o().mark((function n() {
                    var r, e, i, u, a;
                    return o().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (!h) {
                                    n.next = 2;
                                    break
                                }
                                return n.abrupt("return", h);
                            case 2:
                                return r = null, n.prev = 3, n.next = 6, b();
                            case 6:
                                e = n.sent, i = (0, t.Z)(e, 2), u = i[0], a = i[1], r = g(u, a), h = r, n.next = 18;
                                break;
                            case 14:
                                n.prev = 14, n.t0 = n.catch(3), console.warn("Could not get or generate FP for placement", n.t0.message), r = g(null, null);
                            case 18:
                                return n.abrupt("return", r);
                            case 19:
                            case "end":
                                return n.stop()
                        }
                    }), n, null, [
                        [3, 14]
                    ])
                })))).apply(this, arguments)
            }
            var b = function() {
                    var n = (0, i.Z)(o().mark((function n() {
                        var r, e, t, i;
                        return o().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.prev = 0, n.next = 3, (0, c.d)("fingerprint-lib-3.0.6");
                                case 3:
                                    return r = n.sent, n.next = 6, (0, c.d)("fingerprint-lib-3.4.2");
                                case 6:
                                    return e = n.sent, t = w(r, "3.0.6", "apt-visitor-fp"), i = w(e, "3.4.2", "apt-visitor-fp2"), n.next = 11, Promise.all([t, i]);
                                case 11:
                                    return n.abrupt("return", n.sent);
                                case 14:
                                    return n.prev = 14, n.t0 = n.catch(0), console.warn("Unable to get or generate fps", n.t0), n.abrupt("return", [null, null]);
                                case 18:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [0, 14]
                        ])
                    })));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }(),
                k = function(n) {
                    var r = d(n) ? n : {},
                        e = {};
                    return ["fingerprint", "scriptVersion", "expiry"].forEach((function(n) {
                        return e[n] = encodeURIComponent(r[n])
                    })), e
                },
                E = function(n, r) {
                    return !n || !n.fingerprint || r !== n.scriptVersion || !parseInt(n.expiry) || Date.now() > parseInt(n.expiry)
                },
                w = function() {
                    var n = (0, i.Z)(o().mark((function n(r, e, t) {
                        var i, u;
                        return o().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (n.prev = 0, i = s(t), u = i ? k(JSON.parse(i)) : null, !E(u, e)) {
                                        n.next = 7;
                                        break
                                    }
                                    return n.abrupt("return", x(r, t));
                                case 7:
                                    return n.abrupt("return", {
                                        fingerprint: u.fingerprint,
                                        version: u.scriptVersion,
                                        fromCache: !0
                                    });
                                case 8:
                                    n.next = 14;
                                    break;
                                case 10:
                                    return n.prev = 10, n.t0 = n.catch(0), console.warn("Unable to get or generate fp", n.t0), n.abrupt("return", null);
                                case 14:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [0, 10]
                        ])
                    })));
                    return function(r, e, t) {
                        return n.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var n = (0, i.Z)(o().mark((function n(r, e) {
                        var t, i, u, a, c, s;
                        return o().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, r.load();
                                case 2:
                                    return n.next = 4, n.sent.get();
                                case 4:
                                    return t = n.sent, i = t.components, u = t.version, a = r.hashComponents(i), s = {
                                        fingerprint: a,
                                        scriptVersion: c = u || "3.0.6",
                                        expiry: Date.now() + 36e5
                                    }, l(e, JSON.stringify(s)), n.abrupt("return", {
                                        fingerprint: a,
                                        version: c,
                                        fromCache: !1
                                    });
                                case 12:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(r, e) {
                        return n.apply(this, arguments)
                    }
                }(),
                I = function(n) {
                    return (0, p.PL)(n) === v
                }
        },
        9007: function(n, r, e) {
            e.d(r, {
                PL: function() {
                    return f
                },
                bG: function() {
                    return c
                },
                yM: function() {
                    return s
                },
                zH: function() {
                    return l
                }
            });
            var t = e(1002),
                i = (e(9358), e(228), e(2826), e(7522), e(3e3), e(4317)),
                u = e(5501),
                a = e(4155),
                o = i.ZP.IQ_PIXEL_BASE_URL,
                c = function(n) {
                    document.cookie = "".concat(n, "=;Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;")
                },
                s = function(n) {
                    var r = n;
                    return r && Object.keys(r).length > 0 && Object.keys(r).forEach((function(n) {
                        void 0 !== r[n] && null !== r[n] ? "object" === (0, t.Z)(r[n]) ? r[n] = JSON.stringify(r[n]) : r[n] = r[n].toString() : r[n] = ""
                    })), r
                },
                l = function() {
                    return a.env.ARE_UI_TESTS_RUNNING ? "http://localhost:3122" : encodeURI(o)
                },
                f = function(n) {
                    var r = null == n ? void 0 : n.fp,
                        e = -1;
                    return r && (e = function(n) {
                        var r = -1;
                        if (n && n.length > 3) {
                            var e = n.substring(0, 4);
                            try {
                                r = parseInt(e, 16)
                            } catch (n) {
                                console.error(new u.h5(n.message))
                            }
                        }
                        return r
                    }(r) % 20), isNaN(e) ? -1 : e
                }
        }
    }
]);