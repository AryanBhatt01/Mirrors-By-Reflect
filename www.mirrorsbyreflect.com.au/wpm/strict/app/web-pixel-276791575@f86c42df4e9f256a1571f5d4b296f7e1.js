(() => {
    var N = Object.create;
    var b = Object.defineProperty;
    var k = Object.getOwnPropertyDescriptor;
    var R = Object.getOwnPropertyNames;
    var E = Object.getPrototypeOf,
        _ = Object.prototype.hasOwnProperty;
    var x = (t, e) => () => (e || t((e = {
        exports: {}
    }).exports, e), e.exports);
    var C = (t, e, i, o) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let n of R(e)) !_.call(t, n) && n !== i && b(t, n, {
                get: () => e[n],
                enumerable: !(o = k(e, n)) || o.enumerable
            });
        return t
    };
    var P = (t, e, i) => (i = t != null ? N(E(t)) : {}, C(e || !t || !t.__esModule ? b(i, "default", {
        value: t,
        enumerable: !0
    }) : i, t));
    var v = (t, e, i) => new Promise((o, n) => {
        var a = r => {
                try {
                    s(i.next(r))
                } catch (l) {
                    n(l)
                }
            },
            u = r => {
                try {
                    s(i.throw(r))
                } catch (l) {
                    n(l)
                }
            },
            s = r => r.done ? o(r.value) : Promise.resolve(r.value).then(a, u);
        s((i = i.apply(t, e)).next())
    });
    var w = x((H, S) => {
        var m = {
                isSnippetTesting: () => !1,
                getPresentmentCurrency: function() {
                    return window.Shopify && window.Shopify.currency ? window.Shopify.currency : void 0
                },
                getHostName: function() {
                    return "https://upsell-app.logbase.io"
                },
                log: function(t, e) {},
                arrayUnique: function(t) {
                    let e = t.concat();
                    for (let i = 0; i < e.length; ++i)
                        for (let o = i + 1; o < e.length; ++o) e[i] === e[o] && e.splice(o--, 1);
                    return e
                }
            },
            g = S.exports = {
                getOfferHistory: function() {
                    let t = sessionStorage.getItem("lb-upsell-offer-history");
                    return t ? JSON.parse(t) : void 0
                },
                processSelleasyAIMetrics: function(t, e, i, o) {
                    if (t.length && i && i.offerMetricId) {
                        let n = {
                            storeId: o,
                            metrics: [{
                                id: i.offerMetricId,
                                data: t.map(a => ({
                                    recoProductId: a,
                                    viewsCount: e ? 1 : void 0,
                                    clicksCount: e ? void 0 : 1
                                }))
                            }]
                        };
                        g.apiRequest("/metrics", n, "https://stylist.logbase.io/api/metrics")
                    }
                },
                apiRequest: function(t, e, i = void 0) {
                    fetch(i || `${m.getHostName()}${t}`, {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                },
                getFormattedOfferClicks: function(t) {
                    let e = {};
                    return Object.keys(t).forEach(i => {
                        if (t[i].offerSettings || t[i].isShopifyRecosOffer) {
                            let o = t[i].isShopifyRecosOffer ? t[i].widgetSettings.id : t[i].offerSettings.id;
                            e[o] ? t[i].products && e[o].products && (e[o].products = m.arrayUnique(e[o].products.concat(t[i].products))) : e[o] = t[i]
                        }
                    }), e
                },
                isConversionValid: function(t, e) {
                    return e && `${t.variant.product.id}` == `${e.product_id}` ? (m.log("is 1+1 offer valid", t.quantity > e.quanatity), t.quantity > e.quantity) : !0
                },
                trackConversion: function(t, e, i) {
                    return v(this, null, function*() {
                        let o = t || {};
                        m.log("checkout:", o);
                        let n = yield e.getItem("lb-upsell-offer-clicked");
                        if (m.log("upsellOffersClicked:", n), n = n ? JSON.parse(n) : void 0, o && o.lineItems && o.lineItems.length && n && Object.keys(n) && Object.keys(n).length) {
                            let a = g.getFormattedOfferClicks(n),
                                u = [];
                            if (Object.keys(a).forEach(s => {
                                    if (a[s].products && a[s].products.length) {
                                        let r = [],
                                            l = [],
                                            d = a[s];
                                        d.addedVariants && d.addedVariants.length ? d.addedVariants.forEach(f => {
                                            let c = o.lineItems.find(p => `${p.variant.id}` == `${f.id}`);
                                            c && g.isConversionValid(c, a[s].leastPricedTriggerItem) && (c.line_price = c.variant.price.amount, l.push(c))
                                        }) : d.products.forEach(f => {
                                            let c = o.lineItems.find(p => `${p.variant.product.id}` == `${f}`);
                                            c && g.isConversionValid(c, a[s].leastPricedTriggerItem) && (c.line_price = c.variant.price.amount, r.push(c))
                                        }), (r.length || l.length) && u.push({
                                            id: d.isShopifyRecosOffer ? void 0 : d.offerSettings.id,
                                            metricId: d.isShopifyRecosOffer ? void 0 : d.offerSettings.metricId,
                                            widget: {
                                                id: d.widgetSettings.id,
                                                metricId: d.widgetSettings.metricId
                                            },
                                            details: {
                                                offeredProducts: d.products,
                                                converetedProducts: r,
                                                convertedVariants: l
                                            },
                                            isShopifyRecosOffer: d.isShopifyRecosOffer
                                        })
                                    }
                                }), u && u.length) {
                                let s = yield e.getItem("lb-upsell-account-settings");
                                s = s ? JSON.parse(s) : void 0;
                                let r = yield e.getItem("lb-upsell-offer-discount");
                                r = r ? JSON.parse(r) : void 0;
                                let l;
                                r && r.code && o.discountApplications && o.discountApplications.some(f => f.title === r.code) && (l = {
                                    code: r.code,
                                    priceRuleId: r.priceRuleId,
                                    discountCodeId: r.discountCodeId
                                }, yield e.removeItem("lb-upsell-offer-discount"));
                                let d = {
                                    eventType: "offers-converted",
                                    eventData: {
                                        account: s,
                                        offers: u,
                                        order: {
                                            id: Number(o.order.id)
                                        },
                                        dicountToDelete: l
                                    }
                                };
                                if (m.log("event:", d), g.apiRequest("/metrics", d), s && s.id && s.isSelleasyAIEnabled) {
                                    let f = u.filter(c => c.metricId && c.metricId.includes("stylist"));
                                    if (f && f.length) {
                                        let c = {
                                            storeId: s.id,
                                            metrics: f.map(p => ({
                                                id: p.metricId,
                                                data: p.details.converetedProducts.map(h => ({
                                                    recoProductId: h.product_id,
                                                    conversionCount: 1,
                                                    conversionValue: Number(h.line_price)
                                                }))
                                            })),
                                            info: {
                                                orderId: Number(o.order.id),
                                                orderAt: i
                                            }
                                        };
                                        g.apiRequest("/metrics", c, "https://stylist.logbase.io/api/metrics")
                                    }
                                }
                                yield e.removeItem("lb-upsell-offer-clicked"), yield e.removeItem("lbUpselPixel")
                            }
                        }
                    })
                }
            }
    });
    var I = "WebPixel::Render";
    var y = t => shopify.extend(I, t);
    var O = P(w());
    y(t => {
        t.analytics.subscribe("page_viewed", e => {
            t.browser.localStorage.setItem("lbUpselPixel", "true")
        }), t.analytics.subscribe("checkout_completed", e => {
            console.log(`Event Name is: ${e.name}`), t.browser.localStorage.getItem("lb-upsell-offer-clicked").then(i => {
                i && O.default.trackConversion(e.data.checkout, t.browser.localStorage, e.timestamp)
            }).catch(i => {
                console.log("Error while getting localstorage", i)
            })
        })
    });
})();