(self.webpackChunkAfterPay = self.webpackChunkAfterPay || []).push([
    [574], {
        9293: function(e, t, n) {
            var i;
            ! function(r, o) {
                "use strict";
                var a = "function",
                    s = "undefined",
                    c = "object",
                    u = "string",
                    l = "model",
                    d = "name",
                    p = "type",
                    f = "vendor",
                    h = "version",
                    v = "architecture",
                    m = "console",
                    b = "mobile",
                    g = "tablet",
                    y = "smarttv",
                    w = "wearable",
                    k = "embedded",
                    S = "Amazon",
                    _ = "Apple",
                    I = "ASUS",
                    C = "BlackBerry",
                    x = "Browser",
                    O = "Chrome",
                    E = "Firefox",
                    A = "Google",
                    j = "Huawei",
                    N = "LG",
                    P = "Microsoft",
                    T = "Motorola",
                    R = "Opera",
                    D = "Samsung",
                    L = "Sharp",
                    M = "Sony",
                    U = "Xiaomi",
                    V = "Zebra",
                    F = "Facebook",
                    W = function(e) {
                        for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                        return t
                    },
                    q = function(e, t) {
                        return typeof e === u && -1 !== G(t).indexOf(G(e))
                    },
                    G = function(e) {
                        return e.toLowerCase()
                    },
                    Z = function(e, t) {
                        if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 350)
                    },
                    z = function(e, t) {
                        for (var n, i, r, s, u, l, d = 0; d < t.length && !u;) {
                            var p = t[d],
                                f = t[d + 1];
                            for (n = i = 0; n < p.length && !u;)
                                if (u = p[n++].exec(e))
                                    for (r = 0; r < f.length; r++) l = u[++i], typeof(s = f[r]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
                            d += 2
                        }
                    },
                    B = function(e, t) {
                        for (var n in t)
                            if (typeof t[n] === c && t[n].length > 0) {
                                for (var i = 0; i < t[n].length; i++)
                                    if (q(t[n][i], e)) return "?" === n ? o : n
                            } else if (q(t[n], e)) return "?" === n ? o : n;
                        return e
                    },
                    J = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    X = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [h, [d, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [h, [d, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [d, h],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [h, [d, R + " Mini"]],
                            [/\bopr\/([\w\.]+)/i],
                            [h, [d, R]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [d, h],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [h, [d, "UC" + x]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                            [h, [d, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [h, [d, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [h, [d, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [h, [d, "IE"]],
                            [/yabrowser\/([\w\.]+)/i],
                            [h, [d, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 Secure " + x], h
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [h, [d, E + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [h, [d, R + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [h, [d, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [h, [d, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [h, [d, R + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [h, [d, "MIUI " + x]],
                            [/fxios\/([-\w\.]+)/i],
                            [h, [d, E]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [d, "360 " + x]
                            ],
                            [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 " + x], h
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [d, /_/g, " "], h
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [d, h],
                            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                            [d],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [d, F], h
                            ],
                            [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                            [d, h],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [h, [d, "GSA"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [h, [d, O + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [d, O + " WebView"], h
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [h, [d, "Android " + x]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [d, h],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [h, [d, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [h, d],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [d, [h, B, {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [d, h],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [d, "Netscape"], h
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [h, [d, E + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                            [d, h],
                            [/(cobalt)\/([\w\.]+)/i],
                            [d, [h, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [v, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [v, G]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [v, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [v, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [v, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [v, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [v, /ower/, "", G]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [v, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [v, G]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [l, [f, D],
                                [p, g]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [l, [f, D],
                                [p, b]
                            ],
                            [/((ipod|iphone)\d+,\d+)/i],
                            [l, [f, _],
                                [p, b]
                            ],
                            [/(ipad\d+,\d+)/i],
                            [l, [f, _],
                                [p, g]
                            ],
                            [/\((ip(?:hone|od)[\w ]*);/i],
                            [l, [f, _],
                                [p, b]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [l, [f, _],
                                [p, g]
                            ],
                            [/(macintosh);/i],
                            [l, [f, _]],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [l, [f, j],
                                [p, g]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [l, [f, j],
                                [p, b]
                            ],
                            [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [l, /_/g, " "],
                                [f, U],
                                [p, b]
                            ],
                            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [l, /_/g, " "],
                                [f, U],
                                [p, g]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [l, [f, "OPPO"],
                                [p, b]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [l, [f, "Vivo"],
                                [p, b]
                            ],
                            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                            [l, [f, "Realme"],
                                [p, b]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [l, [f, T],
                                [p, b]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [l, [f, T],
                                [p, g]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [l, [f, N],
                                [p, g]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [l, [f, N],
                                [p, b]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [l, [f, "Lenovo"],
                                [p, g]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [l, /_/g, " "],
                                [f, "Nokia"],
                                [p, b]
                            ],
                            [/(pixel c)\b/i],
                            [l, [f, A],
                                [p, g]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [l, [f, A],
                                [p, b]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [l, [f, M],
                                [p, b]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [l, "Xperia Tablet"],
                                [f, M],
                                [p, g]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [l, [f, "OnePlus"],
                                [p, b]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [l, [f, S],
                                [p, g]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [l, /(.+)/g, "Fire Phone $1"],
                                [f, S],
                                [p, b]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [l, f, [p, g]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [l, [f, C],
                                [p, b]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [l, [f, I],
                                [p, g]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [l, [f, I],
                                [p, b]
                            ],
                            [/(nexus 9)/i],
                            [l, [f, "HTC"],
                                [p, g]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [f, [l, /_/g, " "],
                                [p, b]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [l, [f, "Acer"],
                                [p, g]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [l, [f, "Meizu"],
                                [p, b]
                            ],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [l, [f, L],
                                [p, b]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [f, l, [p, b]],
                            [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [f, l, [p, g]],
                            [/(surface duo)/i],
                            [l, [f, P],
                                [p, g]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [l, [f, "Fairphone"],
                                [p, b]
                            ],
                            [/(u304aa)/i],
                            [l, [f, "AT&T"],
                                [p, b]
                            ],
                            [/\bsie-(\w*)/i],
                            [l, [f, "Siemens"],
                                [p, b]
                            ],
                            [/\b(rct\w+) b/i],
                            [l, [f, "RCA"],
                                [p, g]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [l, [f, "Dell"],
                                [p, g]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [l, [f, "Verizon"],
                                [p, g]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [l, [f, "Barnes & Noble"],
                                [p, g]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [l, [f, "NuVision"],
                                [p, g]
                            ],
                            [/\b(k88) b/i],
                            [l, [f, "ZTE"],
                                [p, g]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [l, [f, "ZTE"],
                                [p, b]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [l, [f, "Swiss"],
                                [p, b]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [l, [f, "Swiss"],
                                [p, g]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [l, [f, "Zeki"],
                                [p, g]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [f, "Dragon Touch"], l, [p, g]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [l, [f, "Insignia"],
                                [p, g]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [l, [f, "NextBook"],
                                [p, g]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [f, "Voice"], l, [p, b]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [f, "LvTel"], l, [p, b]
                            ],
                            [/\b(ph-1) /i],
                            [l, [f, "Essential"],
                                [p, b]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [l, [f, "Envizen"],
                                [p, g]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [l, [f, "MachSpeed"],
                                [p, g]
                            ],
                            [/\btu_(1491) b/i],
                            [l, [f, "Rotor"],
                                [p, g]
                            ],
                            [/(shield[\w ]+) b/i],
                            [l, [f, "Nvidia"],
                                [p, g]
                            ],
                            [/(sprint) (\w+)/i],
                            [f, l, [p, b]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [l, /\./g, " "],
                                [f, P],
                                [p, b]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [l, [f, V],
                                [p, g]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [l, [f, V],
                                [p, b]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [f, l, [p, m]],
                            [/droid.+; (shield) bui/i],
                            [l, [f, "Nvidia"],
                                [p, m]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [l, [f, M],
                                [p, m]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [l, [f, P],
                                [p, m]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [f, [p, y]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [l, /^/, "SmartTV"],
                                [f, D],
                                [p, y]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [f, N],
                                [p, y]
                            ],
                            [/(apple) ?tv/i],
                            [f, [l, _ + " TV"],
                                [p, y]
                            ],
                            [/crkey/i],
                            [
                                [l, O + "cast"],
                                [f, A],
                                [p, y]
                            ],
                            [/droid.+aft(\w)( bui|\))/i],
                            [l, [f, S],
                                [p, y]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [l, [f, L],
                                [p, y]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [l, [f, M],
                                [p, y]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [l, [f, U],
                                [p, y]
                            ],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                            [
                                [f, Z],
                                [l, Z],
                                [p, y]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [p, y]
                            ],
                            [/((pebble))app/i],
                            [f, l, [p, w]],
                            [/droid.+; (glass) \d/i],
                            [l, [f, A],
                                [p, w]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [l, [f, V],
                                [p, w]
                            ],
                            [/(quest( 2)?)/i],
                            [l, [f, F],
                                [p, w]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [f, [p, k]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                            [l, [p, b]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [l, [p, g]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [p, g]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [p, b]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [l, [f, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [h, [d, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [h, [d, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                            [d, h],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [h, d]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [d, h],
                            [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                            [d, [h, B, J]],
                            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [d, "Windows"],
                                [h, B, J]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                            [
                                [h, /_/g, "."],
                                [d, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [d, "Mac OS"],
                                [h, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [h, d],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [d, h],
                            [/\(bb(10);/i],
                            [h, [d, C]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [h, [d, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [h, [d, E + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [h, [d, "webOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [h, [d, O + "cast"]],
                            [/(cros) [\w]+ ([\w\.]+\w)/i],
                            [
                                [d, "Chromium OS"], h
                            ],
                            [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [d, h],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [d, "Solaris"], h
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                            [d, h]
                        ]
                    },
                    H = function(e, t) {
                        if (typeof e === c && (t = e, e = o), !(this instanceof H)) return new H(e, t).getResult();
                        var n = e || (typeof r !== s && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
                            i = t ? function(e, t) {
                                var n = {};
                                for (var i in e) t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                                return n
                            }(X, t) : X;
                        return this.getBrowser = function() {
                            var e, t = {};
                            return t[d] = o, t[h] = o, z.call(t, n, i.browser), t.major = typeof(e = t.version) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, t
                        }, this.getCPU = function() {
                            var e = {};
                            return e[v] = o, z.call(e, n, i.cpu), e
                        }, this.getDevice = function() {
                            var e = {};
                            return e[f] = o, e[l] = o, e[p] = o, z.call(e, n, i.device), e
                        }, this.getEngine = function() {
                            var e = {};
                            return e[d] = o, e[h] = o, z.call(e, n, i.engine), e
                        }, this.getOS = function() {
                            var e = {};
                            return e[d] = o, e[h] = o, z.call(e, n, i.os), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return n
                        }, this.setUA = function(e) {
                            return n = typeof e === u && e.length > 350 ? Z(e, 350) : e, this
                        }, this.setUA(n), this
                    };
                H.VERSION = "0.7.33", H.BROWSER = W([d, h, "major"]), H.CPU = W([v]), H.DEVICE = W([l, f, p, m, b, y, g, w, k]), H.ENGINE = H.OS = W([d, h]), typeof t !== s ? (e.exports && (t = e.exports = H), t.UAParser = H) : n.amdO ? (i = function() {
                    return H
                }.call(t, n, t, e)) === o || (e.exports = i) : typeof r !== s && (r.UAParser = H);
                var Y = typeof r !== s && (r.jQuery || r.Zepto);
                if (Y && !Y.ua) {
                    var K = new H;
                    Y.ua = K.getResult(), Y.ua.get = function() {
                        return K.getUA()
                    }, Y.ua.set = function(e) {
                        K.setUA(e);
                        var t = K.getResult();
                        for (var n in t) Y.ua[n] = t[n]
                    }
                }
            }("object" == typeof window ? window : this)
        },
        9772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return gn
                }
            });
            var i = {};
            n.r(i), n.d(i, {
                exclude: function() {
                    return j
                },
                extract: function() {
                    return I
                },
                parse: function() {
                    return C
                },
                parseUrl: function() {
                    return O
                },
                pick: function() {
                    return A
                },
                stringify: function() {
                    return x
                },
                stringifyUrl: function() {
                    return E
                }
            });
            n(4155);

            function r() {
                return "object" == typeof window && void 0 !== (null === window || void 0 === window ? void 0 : window.document)
            }
            var o = n(9560),
                a = n.n(o);
            const s = "%[a-f0-9]{2}",
                c = new RegExp("(" + s + ")|([^%]+?)", "gi"),
                u = new RegExp("(" + s + ")+", "gi");

            function l(e, t) {
                try {
                    return [decodeURIComponent(e.join(""))]
                } catch {}
                if (1 === e.length) return e;
                t = t || 1;
                const n = e.slice(0, t),
                    i = e.slice(t);
                return Array.prototype.concat.call([], l(n), l(i))
            }

            function d(e) {
                try {
                    return decodeURIComponent(e)
                } catch {
                    let t = e.match(c) || [];
                    for (let n = 1; n < t.length; n++) t = (e = l(t, n).join("")).match(c) || [];
                    return e
                }
            }

            function p(e) {
                if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return decodeURIComponent(e)
                } catch {
                    return function(e) {
                        const t = {
                            "%FE%FF": "��",
                            "%FF%FE": "��"
                        };
                        let n = u.exec(e);
                        for (; n;) {
                            try {
                                t[n[0]] = decodeURIComponent(n[0])
                            } catch {
                                const e = d(n[0]);
                                e !== n[0] && (t[n[0]] = e)
                            }
                            n = u.exec(e)
                        }
                        t["%C2"] = "�";
                        const i = Object.keys(t);
                        for (const n of i) e = e.replace(new RegExp(n, "g"), t[n]);
                        return e
                    }(e)
                }
            }

            function f(e, t) {
                if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
                if ("" === e || "" === t) return [];
                const n = e.indexOf(t);
                return -1 === n ? [] : [e.slice(0, n), e.slice(n + t.length)]
            }

            function h(e, t) {
                const n = {};
                if (Array.isArray(t))
                    for (const i of t) {
                        const t = Object.getOwnPropertyDescriptor(e, i);
                        t ? .enumerable && Object.defineProperty(n, i, t)
                    } else
                        for (const i of Reflect.ownKeys(e)) {
                            const r = Object.getOwnPropertyDescriptor(e, i);
                            if (r.enumerable) {
                                t(i, e[i], e) && Object.defineProperty(n, i, r)
                            }
                        }
                return n
            }
            const v = e => null == e,
                m = e => encodeURIComponent(e).replace(/[!'()*]/g, (e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)),
                b = Symbol("encodeFragmentIdentifier");

            function g(e) {
                if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function y(e, t) {
                return t.encode ? t.strict ? m(e) : encodeURIComponent(e) : e
            }

            function w(e, t) {
                return t.decode ? p(e) : e
            }

            function k(e) {
                return Array.isArray(e) ? e.sort() : "object" == typeof e ? k(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
            }

            function S(e) {
                const t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function _(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
            }

            function I(e) {
                const t = (e = S(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function C(e, t) {
                g((t = {
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1,
                    ...t
                }).arrayFormatSeparator);
                const n = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, n, i) => {
                                    t = /\[(\d*)]$/.exec(e), e = e.replace(/\[\d*]$/, ""), t ? (void 0 === i[e] && (i[e] = {}), i[e][t[1]] = n) : i[e] = n
                                };
                            case "bracket":
                                return (e, n, i) => {
                                    t = /(\[])$/.exec(e), e = e.replace(/\[]$/, ""), t ? void 0 !== i[e] ? i[e] = [...i[e], n] : i[e] = [n] : i[e] = n
                                };
                            case "colon-list-separator":
                                return (e, n, i) => {
                                    t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== i[e] ? i[e] = [...i[e], n] : i[e] = [n] : i[e] = n
                                };
                            case "comma":
                            case "separator":
                                return (t, n, i) => {
                                    const r = "string" == typeof n && n.includes(e.arrayFormatSeparator),
                                        o = "string" == typeof n && !r && w(n, e).includes(e.arrayFormatSeparator);
                                    n = o ? w(n, e) : n;
                                    const a = r || o ? n.split(e.arrayFormatSeparator).map((t => w(t, e))) : null === n ? n : w(n, e);
                                    i[t] = a
                                };
                            case "bracket-separator":
                                return (t, n, i) => {
                                    const r = /(\[])$/.test(t);
                                    if (t = t.replace(/\[]$/, ""), !r) return void(i[t] = n ? w(n, e) : n);
                                    const o = null === n ? [] : n.split(e.arrayFormatSeparator).map((t => w(t, e)));
                                    void 0 !== i[t] ? i[t] = [...i[t], ...o] : i[t] = o
                                };
                            default:
                                return (e, t, n) => {
                                    void 0 !== n[e] ? n[e] = [...[n[e]].flat(), t] : n[e] = t
                                }
                        }
                    }(t),
                    i = Object.create(null);
                if ("string" != typeof e) return i;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return i;
                for (const r of e.split("&")) {
                    if ("" === r) continue;
                    const e = t.decode ? r.replace(/\+/g, " ") : r;
                    let [o, a] = f(e, "=");
                    void 0 === o && (o = e), a = void 0 === a ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? a : w(a, t), n(w(o, t), a, i)
                }
                for (const [e, n] of Object.entries(i))
                    if ("object" == typeof n && null !== n)
                        for (const [e, i] of Object.entries(n)) n[e] = _(i, t);
                    else i[e] = _(n, t);
                return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce(((e, t) => {
                    const n = i[t];
                    return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = k(n) : e[t] = n, e
                }), Object.create(null))
            }

            function x(e, t) {
                if (!e) return "";
                g((t = {
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    ...t
                }).arrayFormatSeparator);
                const n = n => t.skipNull && v(e[n]) || t.skipEmptyString && "" === e[n],
                    i = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (n, i) => {
                                    const r = n.length;
                                    return void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : null === i ? [...n, [y(t, e), "[", r, "]"].join("")] : [...n, [y(t, e), "[", y(r, e), "]=", y(i, e)].join("")]
                                };
                            case "bracket":
                                return t => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : null === i ? [...n, [y(t, e), "[]"].join("")] : [...n, [y(t, e), "[]=", y(i, e)].join("")];
                            case "colon-list-separator":
                                return t => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : null === i ? [...n, [y(t, e), ":list="].join("")] : [...n, [y(t, e), ":list=", y(i, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return n => (i, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? i : (r = null === r ? "" : r, 0 === i.length ? [
                                        [y(n, e), t, y(r, e)].join("")
                                    ] : [
                                        [i, y(r, e)].join(e.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return t => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : null === i ? [...n, y(t, e)] : [...n, [y(t, e), "=", y(i, e)].join("")]
                        }
                    }(t),
                    r = {};
                for (const [t, i] of Object.entries(e)) n(t) || (r[t] = i);
                const o = Object.keys(r);
                return !1 !== t.sort && o.sort(t.sort), o.map((n => {
                    const r = e[n];
                    return void 0 === r ? "" : null === r ? y(n, t) : Array.isArray(r) ? 0 === r.length && "bracket-separator" === t.arrayFormat ? y(n, t) + "[]" : r.reduce(i(n), []).join("&") : y(n, t) + "=" + y(r, t)
                })).filter((e => e.length > 0)).join("&")
            }

            function O(e, t) {
                t = {
                    decode: !0,
                    ...t
                };
                let [n, i] = f(e, "#");
                return void 0 === n && (n = e), {
                    url: n ? .split("?") ? .[0] ? ? "",
                    query: C(I(e), t),
                    ...t && t.parseFragmentIdentifier && i ? {
                        fragmentIdentifier: w(i, t)
                    } : {}
                }
            }

            function E(e, t) {
                t = {
                    encode: !0,
                    strict: !0,
                    [b]: !0,
                    ...t
                };
                const n = S(e.url).split("?")[0] || "";
                let i = x({ ...C(I(e.url), {
                        sort: !1
                    }),
                    ...e.query
                }, t);
                i && (i = `?${i}`);
                let r = function(e) {
                    let t = "";
                    const n = e.indexOf("#");
                    return -1 !== n && (t = e.slice(n)), t
                }(e.url);
                if (e.fragmentIdentifier) {
                    const i = new URL(n);
                    i.hash = e.fragmentIdentifier, r = t[b] ? i.hash : `#${e.fragmentIdentifier}`
                }
                return `${n}${i}${r}`
            }

            function A(e, t, n) {
                n = {
                    parseFragmentIdentifier: !0,
                    [b]: !1,
                    ...n
                };
                const {
                    url: i,
                    query: r,
                    fragmentIdentifier: o
                } = O(e, n);
                return E({
                    url: i,
                    query: h(r, t),
                    fragmentIdentifier: o
                }, n)
            }

            function j(e, t, n) {
                return A(e, Array.isArray(t) ? e => !t.includes(e) : (e, n) => !t(e, n), n)
            }
            var N = i,
                P = n(9293),
                T = n.n(P),
                R = function() {
                    function e() {}
                    return e.prototype.getApplicationContext = function() {
                        return {
                            versionName: this.versionName,
                            language: D(),
                            platform: "Web",
                            os: void 0,
                            deviceModel: void 0
                        }
                    }, e
                }(),
                D = function() {
                    return "undefined" != typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language) || ""
                },
                L = function() {
                    function e() {
                        this.queue = []
                    }
                    return e.prototype.logEvent = function(e) {
                        this.receiver ? this.receiver(e) : this.queue.length < 512 && this.queue.push(e)
                    }, e.prototype.setEventReceiver = function(e) {
                        this.receiver = e, this.queue.length > 0 && (this.queue.forEach((function(t) {
                            e(t)
                        })), this.queue = [])
                    }, e
                }(),
                M = function() {
                    return M = Object.assign || function(e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }, M.apply(this, arguments)
                },
                U = function(e, t) {
                    var n = typeof e;
                    if (n !== typeof t) return !1;
                    for (var i = 0, r = ["string", "number", "boolean", "undefined"]; i < r.length; i++) {
                        if (r[i] === n) return e === t
                    }
                    if (null == e && null == t) return !0;
                    if (null == e || null == t) return !1;
                    if (e.length !== t.length) return !1;
                    var o = Array.isArray(e),
                        a = Array.isArray(t);
                    if (o !== a) return !1;
                    if (!o || !a) {
                        var s = Object.keys(e).sort(),
                            c = Object.keys(t).sort();
                        if (!U(s, c)) return !1;
                        var u = !0;
                        return Object.keys(e).forEach((function(n) {
                            U(e[n], t[n]) || (u = !1)
                        })), u
                    }
                    for (var l = 0; l < e.length; l++)
                        if (!U(e[l], t[l])) return !1;
                    return !0
                };
            Object.entries || (Object.entries = function(e) {
                for (var t = Object.keys(e), n = t.length, i = new Array(n); n--;) i[n] = [t[n], e[t[n]]];
                return i
            });
            var V = function() {
                    function e() {
                        this.identity = {
                            userProperties: {}
                        }, this.listeners = new Set
                    }
                    return e.prototype.editIdentity = function() {
                        var e = this,
                            t = M({}, this.identity.userProperties),
                            n = M(M({}, this.identity), {
                                userProperties: t
                            });
                        return {
                            setUserId: function(e) {
                                return n.userId = e, this
                            },
                            setDeviceId: function(e) {
                                return n.deviceId = e, this
                            },
                            setUserProperties: function(e) {
                                return n.userProperties = e, this
                            },
                            setOptOut: function(e) {
                                return n.optOut = e, this
                            },
                            updateUserProperties: function(e) {
                                for (var t = n.userProperties || {}, i = 0, r = Object.entries(e); i < r.length; i++) {
                                    var o = r[i],
                                        a = o[0],
                                        s = o[1];
                                    switch (a) {
                                        case "$set":
                                            for (var c = 0, u = Object.entries(s); c < u.length; c++) {
                                                var l = u[c],
                                                    d = l[0],
                                                    p = l[1];
                                                t[d] = p
                                            }
                                            break;
                                        case "$unset":
                                            for (var f = 0, h = Object.keys(s); f < h.length; f++) {
                                                delete t[d = h[f]]
                                            }
                                            break;
                                        case "$clearAll":
                                            t = {}
                                    }
                                }
                                return n.userProperties = t, this
                            },
                            commit: function() {
                                return e.setIdentity(n), this
                            }
                        }
                    }, e.prototype.getIdentity = function() {
                        return M({}, this.identity)
                    }, e.prototype.setIdentity = function(e) {
                        var t = M({}, this.identity);
                        this.identity = M({}, e), U(t, this.identity) || this.listeners.forEach((function(t) {
                            t(e)
                        }))
                    }, e.prototype.addIdentityListener = function(e) {
                        this.listeners.add(e)
                    }, e.prototype.removeIdentityListener = function(e) {
                        this.listeners.delete(e)
                    }, e
                }(),
                F = "undefined" != typeof globalThis ? globalThis : void 0 !== n.g ? n.g : self,
                W = function() {
                    function e() {
                        this.identityStore = new V, this.eventBridge = new L, this.applicationContextProvider = new R
                    }
                    return e.getInstance = function(t) {
                        return F.analyticsConnectorInstances || (F.analyticsConnectorInstances = {}), F.analyticsConnectorInstances[t] || (F.analyticsConnectorInstances[t] = new e), F.analyticsConnectorInstances[t]
                    }, e
                }();

            function q(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(n), !0).forEach((function(t) {
                        X(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Z(e) {
                return Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, Z(e)
            }

            function z(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function B(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, $(i.key), i)
                }
            }

            function J(e, t, n) {
                return t && B(e.prototype, t), n && B(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function X(e, t, n) {
                return (t = $(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function H(e) {
                return function(e) {
                    if (Array.isArray(e)) return K(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Y(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Y(e, t) {
                if (e) {
                    if ("string" == typeof e) return K(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? K(e, t) : void 0
                }
            }

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function $(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(e, t || "default");
                        if ("object" != typeof i) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            var Q = "$default_instance",
                ee = 2,
                te = 4096,
                ne = 1e3,
                ie = "$identify",
                re = "$groupidentify",
                oe = "api.amplitude.com",
                ae = "api.eu.amplitude.com",
                se = "regionconfig.amplitude.com",
                ce = "regionconfig.eu.amplitude.com",
                ue = 0,
                le = 1,
                de = 2,
                pe = 3,
                fe = 4,
                he = 5,
                ve = 6,
                me = 7,
                be = "amp_cookie_test",
                ge = "amp",
                ye = "",
                we = "cookies",
                ke = "none",
                Se = "localStorage",
                _e = "sessionStorage",
                Ie = "revenue_amount",
                Ce = "$productId",
                xe = "$quantity",
                Oe = "$price",
                Ee = "$revenueType",
                Ae = "amp_device_id",
                je = "amp_referrer",
                Ne = "referrer",
                Pe = "referring_domain",
                Te = "utm_source",
                Re = "utm_medium",
                De = "utm_campaign",
                Le = "utm_term",
                Me = "utm_content",
                Ue = "[Amplitude] Attribution Captured",
                Ve = "http",
                Fe = "beacon",
                We = function(e) {
                    for (var t = "", n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n);
                        i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128))
                    }
                    return t
                },
                qe = function(e) {
                    for (var t = "", n = 0, i = 0, r = 0, o = 0; n < e.length;)(i = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(i), n++) : i > 191 && i < 224 ? (r = e.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & r), n += 2) : (r = e.charCodeAt(n + 1), o = e.charCodeAt(n + 2), t += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | 63 & o), n += 3);
                    return t
                },
                Ge = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== n.g ? n.g : void 0,
                Ze = {
                    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    encode: function(e) {
                        try {
                            if (Ge.btoa && Ge.atob) return Ge.btoa(unescape(encodeURIComponent(e)))
                        } catch (e) {}
                        return Ze._encode(e)
                    },
                    _encode: function(e) {
                        var t, n, i, r, o, a, s, c = "",
                            u = 0;
                        for (e = We(e); u < e.length;) r = (t = e.charCodeAt(u++)) >> 2, o = (3 & t) << 4 | (n = e.charCodeAt(u++)) >> 4, a = (15 & n) << 2 | (i = e.charCodeAt(u++)) >> 6, s = 63 & i, isNaN(n) ? a = s = 64 : isNaN(i) && (s = 64), c = c + Ze._keyStr.charAt(r) + Ze._keyStr.charAt(o) + Ze._keyStr.charAt(a) + Ze._keyStr.charAt(s);
                        return c
                    },
                    decode: function(e) {
                        try {
                            if (Ge.btoa && Ge.atob) return decodeURIComponent(escape(Ge.atob(e)))
                        } catch (e) {}
                        return Ze._decode(e)
                    },
                    _decode: function(e) {
                        var t, n, i, r, o, a, s = "",
                            c = 0;
                        for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); c < e.length;) t = Ze._keyStr.indexOf(e.charAt(c++)) << 2 | (r = Ze._keyStr.indexOf(e.charAt(c++))) >> 4, n = (15 & r) << 4 | (o = Ze._keyStr.indexOf(e.charAt(c++))) >> 2, i = (3 & o) << 6 | (a = Ze._keyStr.indexOf(e.charAt(c++))), s += String.fromCharCode(t), 64 !== o && (s += String.fromCharCode(n)), 64 !== a && (s += String.fromCharCode(i));
                        return s = qe(s)
                    }
                },
                ze = Object.prototype.toString;

            function Be(e) {
                switch (ze.call(e)) {
                    case "[object Date]":
                        return "date";
                    case "[object RegExp]":
                        return "regexp";
                    case "[object Arguments]":
                        return "arguments";
                    case "[object Array]":
                        return "array";
                    case "[object Error]":
                        return "error"
                }
                return null === e ? "null" : void 0 === e ? "undefined" : e != e ? "nan" : e && 1 === e.nodeType ? "element" : "undefined" != typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(e) ? "buffer" : Z(e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e))
            }
            var Je, Xe = {
                    DISABLE: 0,
                    ERROR: 1,
                    WARN: 2,
                    INFO: 3
                },
                He = Xe.WARN,
                Ye = {
                    error: function(e) {
                        He >= Xe.ERROR && Ke(e)
                    },
                    warn: function(e) {
                        He >= Xe.WARN && Ke(e)
                    },
                    info: function(e) {
                        He >= Xe.INFO && Ke(e)
                    }
                },
                Ke = function(e) {
                    try {
                        console.log("[Amplitude] " + e)
                    } catch (e) {}
                },
                $e = function(e) {
                    return "string" === Be(e) && e.length > te ? e.substring(0, te) : e
                },
                Qe = function(e, t, n) {
                    return Be(e) === n || (Ye.error("Invalid " + t + " input type. Expected " + n + " but received " + Be(e)), !1)
                },
                et = function(e) {
                    var t = Be(e);
                    if ("object" !== t) return Ye.error("Error: invalid properties format. Expecting Javascript object, received " + t + ", ignoring"), {};
                    if (Object.keys(e).length > ne) return Ye.error("Error: too many properties (more than 1000), ignoring"), {};
                    var n = {};
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var r = i,
                                o = Be(r);
                            "string" !== o && (r = String(r), Ye.warn("WARNING: Non-string property key, received type " + o + ', coercing to string "' + r + '"'));
                            var a = nt(r, e[i]);
                            null !== a && (n[r] = a)
                        }
                    return n
                },
                tt = ["nan", "function", "arguments", "regexp", "element"],
                nt = function e(t, n) {
                    var i = Be(n);
                    if (-1 !== tt.indexOf(i)) Ye.warn('WARNING: Property key "' + t + '" with invalid value type ' + i + ", ignoring"), n = null;
                    else if ("undefined" === i) n = null;
                    else if ("error" === i) n = String(n), Ye.warn('WARNING: Property key "' + t + '" with value type error, coercing to ' + n);
                    else if ("array" === i) {
                        for (var r = [], o = 0; o < n.length; o++) {
                            var a = n[o],
                                s = Be(a);
                            "array" !== s ? "object" === s ? r.push(et(a)) : r.push(e(t, a)) : Ye.warn("WARNING: Cannot have " + s + " nested in an array property value, skipping")
                        }
                        n = r
                    } else "object" === i && (n = et(n));
                    return n
                },
                it = function(e, t) {
                    var n = Be(t);
                    if ("string" === n) return t;
                    if ("date" === n || "number" === n || "boolean" === n) return t = String(t), Ye.warn("WARNING: Non-string groupName, received type " + n + ', coercing to string "' + t + '"'), t;
                    if ("array" === n) {
                        for (var i = [], r = 0; r < t.length; r++) {
                            var o = t[r],
                                a = Be(o);
                            "array" !== a && "object" !== a ? "string" === a ? i.push(o) : "date" !== a && "number" !== a && "boolean" !== a || (o = String(o), Ye.warn("WARNING: Non-string groupName, received type " + a + ', coercing to string "' + o + '"'), i.push(o)) : Ye.warn("WARNING: Skipping nested " + a + " in array groupName")
                        }
                        return i
                    }
                    Ye.warn("WARNING: Non-string groupName, received type " + n + ". Please use strings or array of strings for groupName")
                },
                rt = function(e) {
                    Object.prototype.hasOwnProperty.call(Xe, e) && (He = Xe[e])
                },
                ot = Ye,
                at = function(e) {
                    return !e || 0 === e.length
                },
                st = function() {
                    return "undefined" != typeof WorkerGlobalScope
                },
                ct = function(e, t) {
                    e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                    var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                    return null === n ? void 0 : decodeURIComponent(n[1].replace(/\+/g, " "))
                },
                ut = function e(t) {
                    if ("array" === Be(t))
                        for (var n = 0; n < t.length; n++) t[n] = e(t[n]);
                    else if ("object" === Be(t))
                        for (var i in t) i in t && (t[i] = e(t[i]));
                    else t = $e(t);
                    return t
                },
                lt = function(e) {
                    var t = Be(e);
                    if ("object" !== t) return Ye.error("Error: invalid groups format. Expecting Javascript object, received " + t + ", ignoring"), {};
                    var n = {};
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var r = i,
                                o = Be(r);
                            "string" !== o && (r = String(r), Ye.warn("WARNING: Non-string groupType, received type " + o + ', coercing to string "' + r + '"'));
                            var a = it(r, e[i]);
                            null !== a && (n[r] = a)
                        }
                    return n
                },
                dt = Qe,
                pt = et,
                ft = function(e) {
                    return !!Qe(e, "deviceId", "string") && (!(e.indexOf(".") >= 0) || (Ye.error("Device IDs may not contain '.' characters. Value will be ignored: \"".concat(e, '"')), !1))
                },
                ht = function(e) {
                    return !!Qe(e, "transport", "string") && (e !== Ve && e !== Fe ? (Ye.error("transport value must be one of '".concat(Fe, "' or '").concat(Ve, "'")), !1) : !(e !== Ve && "undefined" != typeof navigator && !navigator.sendBeacon) || (Ye.error("browser does not support sendBeacon, so transport must be HTTP"), !1))
                },
                vt = function(e) {
                    return !!(Qe(e, "sessionId", "number") && new Date(e).getTime() > 0) || (Ye.error("sessionId value must in milliseconds since epoch (Unix Timestamp)"), !1)
                },
                mt = function() {
                    return Ge.location
                },
                bt = function(e) {
                    var t = Ge.location ? Ge.location.hostname : "";
                    if (e) {
                        if ("undefined" != typeof document) {
                            var n = document.createElement("a");
                            return n.href = e, n.hostname || t
                        }
                        if ("function" == typeof URL) return new URL(e).hostname || t
                    }
                    return t
                },
                gt = function(e) {
                    try {
                        for (var t = document.cookie.split(";"), n = null, i = 0; i < t.length; i++) {
                            for (var r = t[i];
                                " " === r.charAt(0);) r = r.substring(1, r.length);
                            if (0 === r.indexOf(e)) {
                                n = r.substring(e.length, r.length);
                                break
                            }
                        }
                        return n
                    } catch (e) {
                        return null
                    }
                },
                yt = function(e, t, n) {
                    var i = null !== t ? n.expirationDays : -1;
                    if (i) {
                        var r = new Date;
                        r.setTime(r.getTime() + 24 * i * 60 * 60 * 1e3), i = r
                    }
                    var o = e + "=" + t;
                    i && (o += "; expires=" + i.toUTCString()), o += "; path=/", n.domain && (o += "; domain=" + n.domain), n.secure && (o += "; Secure"), n.sameSite && (o += "; SameSite=" + n.sameSite), document.cookie = o
                },
                wt = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = t.split(".")[fe];
                    return n && (e = parseInt(n, 32)), e || (ot.warn("unable to parse malformed cookie: ".concat(t)), 0)
                },
                kt = yt,
                St = gt,
                _t = function(e) {
                    try {
                        var t, n = document.cookie.split(";").map((function(e) {
                                return e.trimStart()
                            })),
                            i = [],
                            r = function(e, t) {
                                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(e) || (n = Y(e)) || t && e && "number" == typeof e.length) {
                                        n && (e = n);
                                        var i = 0,
                                            r = function() {};
                                        return {
                                            s: r,
                                            n: function() {
                                                return i >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[i++]
                                                }
                                            },
                                            e: function(e) {
                                                throw e
                                            },
                                            f: r
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var o, a = !0,
                                    s = !1;
                                return {
                                    s: function() {
                                        n = n.call(e)
                                    },
                                    n: function() {
                                        var e = n.next();
                                        return a = e.done, e
                                    },
                                    e: function(e) {
                                        s = !0, o = e
                                    },
                                    f: function() {
                                        try {
                                            a || null == n.return || n.return()
                                        } finally {
                                            if (s) throw o
                                        }
                                    }
                                }
                            }(n);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                for (var o = t.value;
                                    " " === o.charAt(0);) o = o.substring(1);
                                0 === o.indexOf(e) && i.push(o.substring(e.length))
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        return i
                    } catch (e) {
                        return []
                    }
                },
                It = function(e) {
                    return H(e).sort((function(e, t) {
                        var n = wt(e);
                        return wt(t) - n
                    }))
                },
                Ct = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = be;
                    if ("undefined" == typeof document) return !1;
                    var n = !1;
                    try {
                        var i = String(Date.now());
                        yt(t, i, e), ot.info("Testing if cookies available"), n = gt(t + "=") === i
                    } catch (e) {
                        ot.warn('Error thrown when checking for cookies. Reason: "'.concat(e, '"'))
                    } finally {
                        ot.info("Cleaning up cookies availability test"), yt(t, null, e)
                    }
                    return n
                },
                xt = function() {
                    for (var e = "", t = 0; t < 22; ++t) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Math.floor(64 * Math.random()));
                    return e
                },
                Ot = function(e) {
                    var t = bt(e).split("."),
                        n = [],
                        i = "_tldtest_" + xt();
                    if (st()) return "";
                    for (var r = t.length - 2; r >= 0; --r) n.push(t.slice(r).join("."));
                    for (var o = 0; o < n.length; ++o) {
                        var a = n[o],
                            s = {
                                domain: "." + a
                            };
                        if (kt(i, 1, s), St(i)) return kt(i, null, s), a
                    }
                    return ""
                },
                Et = {
                    expirationDays: void 0,
                    domain: void 0
                },
                At = function(e) {
                    var t = "";
                    return Et.domain && (t = "." === Et.domain.charAt(0) ? Et.domain.substring(1) : Et.domain), e + t
                },
                jt = function(e) {
                    var t = At(e) + "=",
                        n = St(t);
                    try {
                        if (n) return JSON.parse(Ze.decode(n))
                    } catch (e) {
                        return null
                    }
                    return null
                },
                Nt = function(e, t) {
                    try {
                        return kt(At(e), Ze.encode(JSON.stringify(t)), Et), !0
                    } catch (e) {
                        return !1
                    }
                },
                Pt = function(e) {
                    try {
                        return kt(At(e), null, Et), !0
                    } catch (e) {
                        return !1
                    }
                },
                Tt = {
                    reset: function() {
                        Et = {
                            expirationDays: void 0,
                            domain: void 0
                        }
                    },
                    options: function(e) {
                        if (0 === arguments.length) return Et;
                        e = e || {}, Et.expirationDays = e.expirationDays, Et.secure = e.secure, Et.sameSite = e.sameSite;
                        var t = at(e.domain) ? "." + Ot(mt().href) : e.domain,
                            n = Math.random();
                        Et.domain = t, Nt("amplitude_test", n);
                        var i = jt("amplitude_test");
                        return i && i === n || (t = null), Pt("amplitude_test"), Et.domain = t, Et
                    },
                    get: jt,
                    set: Nt,
                    remove: Pt,
                    setRaw: function(e, t) {
                        try {
                            return kt(At(e), t, Et), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    getRaw: function(e) {
                        var t = At(e) + "=";
                        return St(t)
                    }
                },
                Rt = function() {
                    function e() {
                        z(this, e), this.map = new Map, this.length = 0
                    }
                    return J(e, [{
                        key: "key",
                        value: function(e) {
                            var t = Array.from(this.map.keys())[e];
                            return this.map.get(t)
                        }
                    }, {
                        key: "getItem",
                        value: function(e) {
                            return this.map.get(e)
                        }
                    }, {
                        key: "setItem",
                        value: function(e, t) {
                            this.map.has(e) || (this.length += 1), this.map.set(e, t)
                        }
                    }, {
                        key: "removeItem",
                        value: function(e) {
                            this.map.has(e) && (this.length -= 1, this.map.delete(e))
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.map.clear(), this.length = 0
                        }
                    }]), e
                }();
            if (function() {
                    var e, t = new Date;
                    try {
                        return Ge.localStorage.setItem(t, t), e = Ge.localStorage.getItem(t) === String(t), Ge.localStorage.removeItem(t), e
                    } catch (e) {}
                    return !1
                }()) Je = Ge.localStorage;
            else if (void 0 !== Ge && Ge.globalStorage) try {
                Je = Ge.globalStorage[Ge.location.hostname]
            } catch (e) {} else if ("undefined" != typeof document) {
                var Dt = document.createElement("div"),
                    Lt = "localStorage";
                Dt.style.display = "none", document.getElementsByTagName("head")[0].appendChild(Dt), Dt.addBehavior && (Dt.addBehavior("#default#userdata"), Je = {
                    length: 0,
                    setItem: function(e, t) {
                        Dt.load(Lt), Dt.getAttribute(e) || this.length++, Dt.setAttribute(e, t), Dt.save(Lt)
                    },
                    getItem: function(e) {
                        return Dt.load(Lt), Dt.getAttribute(e)
                    },
                    removeItem: function(e) {
                        Dt.load(Lt), Dt.getAttribute(e) && this.length--, Dt.removeAttribute(e), Dt.save(Lt)
                    },
                    clear: function() {
                        Dt.load(Lt);
                        for (var e, t = 0; e = Dt.XMLDocument.documentElement.attributes[t++];) Dt.removeAttribute(e.name);
                        Dt.save(Lt), this.length = 0
                    },
                    key: function(e) {
                        return Dt.load(Lt), Dt.XMLDocument.documentElement.attributes[e]
                    }
                }, Dt.load(Lt), Je.length = Dt.XMLDocument.documentElement.attributes.length)
            } else st() && (Je = new Rt);
            Je || (Je = {
                length: 0,
                setItem: function(e, t) {},
                getItem: function(e) {},
                removeItem: function(e) {},
                clear: function() {},
                key: function(e) {}
            });
            var Mt, Ut = Je,
                Vt = function() {
                    this.storage = null
                };
            Vt.prototype.getStorage = function(e) {
                if (null !== this.storage) return this.storage;
                if (!e && Ct()) this.storage = Tt;
                else {
                    var t = "amp_cookiestore_";
                    this.storage = {
                        _options: {
                            expirationDays: void 0,
                            domain: void 0,
                            secure: !1
                        },
                        reset: function() {
                            this._options = {
                                expirationDays: void 0,
                                domain: void 0,
                                secure: !1
                            }
                        },
                        options: function(e) {
                            return 0 === arguments.length ? this._options : (e = e || {}, this._options.expirationDays = e.expirationDays || this._options.expirationDays, this._options.domain = e.domain || this._options.domain || Ge && Ge.location && Ge.location.hostname, this._options.secure = e.secure || !1)
                        },
                        get: function(e) {
                            try {
                                return JSON.parse(Ut.getItem(t + e))
                            } catch (e) {}
                            return null
                        },
                        set: function(e, n) {
                            try {
                                return Ut.setItem(t + e, JSON.stringify(n)), !0
                            } catch (e) {}
                            return !1
                        },
                        remove: function(e) {
                            try {
                                Ut.removeItem(t + e)
                            } catch (e) {
                                return !1
                            }
                        }
                    }
                }
                return this.storage
            };
            var Ft = (X(Mt = {}, we, !0), X(Mt, ke, !0), X(Mt, Se, !0), X(Mt, _e, !0), Mt),
                Wt = function() {
                    function e(t) {
                        var n = t.storageKey,
                            i = t.disableCookies,
                            r = t.domain,
                            o = t.secure,
                            a = t.sameSite,
                            s = t.expirationDays,
                            c = t.storage;
                        z(this, e), this.storageKey = n, this.domain = r, this.secure = o, this.sameSite = a, this.expirationDays = s, this.cookieDomain = "";
                        var u = mt() ? mt().href : void 0,
                            l = i ? "" : Ot(u);
                        if (this.cookieDomain = r || (l ? "." + l : null), Ft[c]) this.storage = c;
                        else {
                            var d = i || !Ct({
                                domain: this.cookieDomain,
                                secure: this.secure,
                                sameSite: this.sameSite,
                                expirationDays: this.expirationDays
                            });
                            this.storage = d ? Se : we
                        }
                    }
                    return J(e, [{
                        key: "getCookieStorageKey",
                        value: function() {
                            if (!this.domain) return this.storageKey;
                            var e = "." === this.domain.charAt(0) ? this.domain.substring(1) : this.domain;
                            return "".concat(this.storageKey).concat(e ? "_".concat(e) : "")
                        }
                    }, {
                        key: "save",
                        value: function(e) {
                            var t = e.deviceId,
                                n = e.userId,
                                i = e.optOut,
                                r = e.sessionId,
                                o = e.lastEventTime,
                                a = e.eventId,
                                s = e.identifyId,
                                c = e.sequenceNumber;
                            if (this.storage !== ke) {
                                var u = [t, Ze.encode(n || ""), i ? "1" : "", r ? r.toString(32) : "0", o ? o.toString(32) : "0", a ? a.toString(32) : "0", s ? s.toString(32) : "0", c ? c.toString(32) : "0"].join(".");
                                switch (this.storage) {
                                    case _e:
                                        Ge.sessionStorage && Ge.sessionStorage.setItem(this.storageKey, u);
                                        break;
                                    case Se:
                                        Ut.setItem(this.storageKey, u);
                                        break;
                                    case we:
                                        this.saveCookie(u)
                                }
                            }
                        }
                    }, {
                        key: "saveCookie",
                        value: function(e) {
                            kt(this.getCookieStorageKey(), e, {
                                domain: this.cookieDomain,
                                secure: this.secure,
                                sameSite: this.sameSite,
                                expirationDays: this.expirationDays
                            })
                        }
                    }, {
                        key: "load",
                        value: function() {
                            var e, t = this;
                            if (this.storage === we) {
                                var n = this.getCookieStorageKey() + "=",
                                    i = _t(n);
                                if (0 === i.length || 1 === i.length) e = i[0];
                                else {
                                    var r = It(i)[0];
                                    i.forEach((function() {
                                        return kt(t.getCookieStorageKey(), null, {})
                                    })), this.saveCookie(r), e = St(n)
                                }
                            }
                            if (e || (e = Ut.getItem(this.storageKey)), !e) try {
                                e = Ge.sessionStorage && Ge.sessionStorage.getItem(this.storageKey)
                            } catch (e) {
                                ot.info('window.sessionStorage unavailable. Reason: "'.concat(e, '"'))
                            }
                            if (!e) return null;
                            var o = e.split("."),
                                a = null;
                            if (o[le]) try {
                                a = Ze.decode(o[le])
                            } catch (e) {
                                a = null
                            }
                            return {
                                deviceId: o[ue],
                                userId: a,
                                optOut: "1" === o[de],
                                sessionId: parseInt(o[pe], 32),
                                lastEventTime: parseInt(o[fe], 32),
                                eventId: parseInt(o[he], 32),
                                identifyId: parseInt(o[ve], 32),
                                sequenceNumber: parseInt(o[me], 32)
                            }
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            var e;
                            if (this.storage === we && (e = St(this.getCookieStorageKey() + "="), kt(this.getCookieStorageKey(), null, {
                                    domain: this.cookieDomain,
                                    secure: this.secure,
                                    sameSite: this.sameSite,
                                    expirationDays: 0
                                })), e || (e = Ut.getItem(this.storageKey), Ut.clear()), !e) try {
                                e = Ge.sessionStorage && Ge.sessionStorage.getItem(this.storageKey), Ge.sessionStorage.clear()
                            } catch (e) {
                                ot.info('window.sessionStorage unavailable. Reason: "'.concat(e, '"'))
                            }
                            return !!e
                        }
                    }]), e
                }(),
                qt = "$clearAll",
                Gt = function() {
                    this.userPropertiesOperations = {}, this.properties = []
                };
            Gt.prototype.add = function(e, t) {
                return "number" === Be(t) || "string" === Be(t) ? this._addOperation("$add", e, t) : ot.error("Unsupported type for value: " + Be(t) + ", expecting number or string"), this
            }, Gt.prototype.append = function(e, t) {
                return this._addOperation("$append", e, t), this
            }, Gt.prototype.clearAll = function() {
                return Object.keys(this.userPropertiesOperations).length > 0 ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, qt) || ot.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"), this) : (this.userPropertiesOperations[qt] = "-", this)
            }, Gt.prototype.prepend = function(e, t) {
                return this._addOperation("$prepend", e, t), this
            }, Gt.prototype.set = function(e, t) {
                return this._addOperation("$set", e, t), this
            }, Gt.prototype.setOnce = function(e, t) {
                return this._addOperation("$setOnce", e, t), this
            }, Gt.prototype.unset = function(e) {
                return this._addOperation("$unset", e, "-"), this
            }, Gt.prototype.preInsert = function(e, t) {
                return this._addOperation("$preInsert", e, t), this
            }, Gt.prototype.postInsert = function(e, t) {
                return this._addOperation("$postInsert", e, t), this
            }, Gt.prototype.remove = function(e, t) {
                return this._addOperation("$remove", e, t), this
            }, Gt.prototype._addOperation = function(e, t, n) {
                Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, qt) ? ot.error("This identify already contains a $clearAll operation, skipping operation " + e) : -1 === this.properties.indexOf(t) ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, e) || (this.userPropertiesOperations[e] = {}), this.userPropertiesOperations[e][t] = n, this.properties.push(t)) : ot.error('User property "' + t + '" already used in this identify, skipping operation ' + e)
            };
            var Zt = function(e, t, n) {
                this.url = e, this.data = t || {}, this.headers = n
            };
            Zt.prototype.send = function(e) {
                if (!!Ge.XDomainRequest) {
                    var t = new Ge.XDomainRequest;
                    t.open("POST", this.url, !0), t.onload = function() {
                        e(200, t.responseText)
                    }, t.onerror = function() {
                        "Request Entity Too Large" === t.responseText ? e(413, t.responseText) : e(500, t.responseText)
                    }, t.ontimeout = function() {}, t.onprogress = function() {}, t.send(N.stringify(this.data))
                } else if ("undefined" != typeof XMLHttpRequest) {
                    var n = new XMLHttpRequest;
                    n.open("POST", this.url, !0), n.onreadystatechange = function() {
                            4 === n.readyState && e(n.status, n.responseText)
                        },
                        function(e, t) {
                            for (var n in t)("Cross-Origin-Resource-Policy" !== n || t[n]) && e.setRequestHeader(n, t[n])
                        }(n, this.headers), n.send(N.stringify(this.data))
                } else {
                    var i = void 0;
                    fetch(this.url, {
                        method: "POST",
                        headers: this.headers,
                        body: N.stringify(this.data)
                    }).then((function(e) {
                        return i = e.status, e.text()
                    })).then((function(t) {
                        e(i, t)
                    }))
                }
            };
            var zt = function() {
                this._price = null, this._productId = null, this._quantity = 1, this._revenueType = null, this._properties = null
            };
            zt.prototype.setProductId = function(e) {
                return "string" !== Be(e) ? ot.error("Unsupported type for productId: " + Be(e) + ", expecting string") : at(e) ? ot.error("Invalid empty productId") : this._productId = e, this
            }, zt.prototype.setQuantity = function(e) {
                return "number" !== Be(e) ? ot.error("Unsupported type for quantity: " + Be(e) + ", expecting number") : this._quantity = parseInt(e), this
            }, zt.prototype.setPrice = function(e) {
                return "number" !== Be(e) ? ot.error("Unsupported type for price: " + Be(e) + ", expecting number") : this._price = e, this
            }, zt.prototype.setRevenueType = function(e) {
                return "string" !== Be(e) ? ot.error("Unsupported type for revenueType: " + Be(e) + ", expecting string") : this._revenueType = e, this
            }, zt.prototype.setEventProperties = function(e) {
                return "object" !== Be(e) ? ot.error("Unsupported type for eventProperties: " + Be(e) + ", expecting object") : this._properties = pt(e), this
            }, zt.prototype._isValidRevenue = function() {
                return "number" === Be(this._price) || (ot.error("Invalid revenue, need to set price field"), !1)
            }, zt.prototype._toJSONObject = function() {
                var e = "object" === Be(this._properties) ? this._properties : {};
                return null !== this._productId && (e[Ce] = this._productId), null !== this._quantity && (e[xe] = this._quantity), null !== this._price && (e[Oe] = this._price), null !== this._revenueType && (e[Ee] = this._revenueType), e
            };
            var Bt = function e(t) {
                    return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
                },
                Jt = "US",
                Xt = "EU",
                Ht = function(e) {
                    var t = oe;
                    switch (e) {
                        case Xt:
                            t = ae;
                            break;
                        case Jt:
                            t = oe
                    }
                    return t
                },
                Yt = "8.21.9",
                Kt = {
                    apiEndpoint: oe,
                    batchEvents: !1,
                    cookieExpiration: 365,
                    cookieName: "amplitude_id",
                    sameSiteCookie: "Lax",
                    cookieForceUpgrade: !1,
                    deferInitialization: !1,
                    disableCookies: !1,
                    deviceIdFromUrlParam: !1,
                    domain: "",
                    eventUploadPeriodMillis: 3e4,
                    eventUploadThreshold: 30,
                    forceHttps: !0,
                    includeFbclid: !1,
                    includeGclid: !1,
                    includeReferrer: !1,
                    includeUtm: !1,
                    ingestionMetadata: {
                        sourceName: "",
                        sourceVersion: ""
                    },
                    language: function() {
                        return "undefined" != typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage) || ""
                    }(),
                    library: {
                        name: "amplitude-js",
                        version: Yt
                    },
                    logLevel: "WARN",
                    logAttributionCapturedEvent: !1,
                    optOut: !1,
                    onError: function() {},
                    onExitPage: function() {},
                    onNewSessionStart: function() {},
                    plan: {
                        branch: "",
                        source: "",
                        version: "",
                        versionId: ""
                    },
                    platform: "Web",
                    savedMaxCount: 1e3,
                    saveEvents: !0,
                    saveParamsReferrerOncePerSession: !0,
                    secureCookie: !1,
                    sessionTimeout: 18e5,
                    storage: ye,
                    trackingOptions: {
                        city: !0,
                        country: !0,
                        carrier: !0,
                        device_manufacturer: !0,
                        device_model: !0,
                        dma: !0,
                        ip_address: !0,
                        language: !0,
                        os_name: !0,
                        os_version: !0,
                        platform: !0,
                        region: !0,
                        version_name: !0
                    },
                    transport: Ve,
                    unsetParamsReferrerOnNewSession: !1,
                    unsentKey: "amplitude_unsent",
                    unsentIdentifyKey: "amplitude_unsent_identify",
                    uploadBatchSize: 100,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "Cross-Origin-Resource-Policy": "cross-origin"
                    },
                    serverZone: Jt,
                    useDynamicConfig: !1,
                    serverZoneBasedApi: !1,
                    sessionId: null,
                    partnerId: ""
                },
                $t = new(function() {
                    function e() {
                        return z(this, e), e.instance || (this.ingestionEndpoint = oe, e.instance = this), e.instance
                    }
                    return J(e, [{
                        key: "refresh",
                        value: function(e, t, n) {
                            var i = "https";
                            t || "https:" === Ge.location.protocol || (i = "http");
                            var r = i + "://" + function(e) {
                                    var t = se;
                                    switch (e) {
                                        case Xt:
                                            t = ce;
                                            break;
                                        case Jt:
                                            t = se
                                    }
                                    return t
                                }(e),
                                o = this;
                            if (!!Ge.XDomainRequest) {
                                var a = new Ge.XDomainRequest;
                                a.open("GET", r, !0), a.onload = function() {
                                    var e = JSON.parse(a.responseText);
                                    o.ingestionEndpoint = e.ingestionEndpoint, n && n()
                                }, a.onerror = function() {}, a.ontimeout = function() {}, a.onprogress = function() {}, a.send()
                            } else {
                                var s = new XMLHttpRequest;
                                s.open("GET", r, !0), s.onreadystatechange = function() {
                                    if (4 === s.readyState && 200 === s.status) {
                                        var e = JSON.parse(s.responseText);
                                        o.ingestionEndpoint = e.ingestionEndpoint, n && n()
                                    }
                                }, s.send()
                            }
                        }
                    }]), e
                }()),
                Qt = function(e) {
                    r() || st() || ot.warn("amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node"), this._instanceName = at(e) ? Q : e.toLowerCase(), this._unsentEvents = [], this._unsentIdentifys = [], this.options = G(G({}, Kt), {}, {
                        headers: G({}, Kt.headers),
                        ingestionMetadata: G({}, Kt.ingestionMetadata),
                        library: G({}, Kt.library),
                        plan: G({}, Kt.plan),
                        trackingOptions: G({}, Kt.trackingOptions)
                    }), this._q = [], this._sending = !1, this._updateScheduled = !1, this._onInitCallbacks = [], this._onNewSessionStartCallbacks = [], this._eventId = 0, this._identifyId = 0, this._lastEventTime = null, this._newSession = !1, this._sequenceNumber = 0, this._sessionId = null, this._isInitialized = !1, this._connector = null, this._userAgent = "undefined" != typeof navigator && navigator && navigator.userAgent || null, this._ua = new(T())(this._userAgent).getResult()
                };
            Qt.prototype.Identify = Gt, Qt.prototype.Revenue = zt, Qt.prototype.init = function(e, t, n, i) {
                var o = this;
                if ("string" !== Be(e) || at(e)) ot.error("Invalid apiKey. Please re-initialize with a valid apiKey");
                else try {
                    this._connector = W.getInstance(this._instanceName), tn(this.options, n), (r() || st()) && void 0 !== Ge.Prototype && Array.prototype.toJSON && (! function() {
                        var e;
                        if (r()) {
                            var t = window,
                                n = Array;
                            if (void 0 !== t.Prototype && void 0 !== (null === (e = n.prototype) || void 0 === e ? void 0 : e.toJSON)) return delete n.prototype.toJSON, !0
                        }
                    }(), ot.warn("Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify")), this.options.cookieName !== Kt.cookieName && ot.warn("The cookieName option is deprecated. We will be ignoring it for newer cookies"), this.options.serverZoneBasedApi && (this.options.apiEndpoint = Ht(this.options.serverZone)), this._refreshDynamicConfig(), this.options.apiKey = e, this._storageSuffix = "_" + e + (this._instanceName === Q ? "" : "_" + this._instanceName), this._storageSuffixV5 = e.slice(0, 6), this._oldCookiename = this.options.cookieName + this._storageSuffix, this._unsentKey = this.options.unsentKey + this._storageSuffix, this._unsentIdentifyKey = this.options.unsentIdentifyKey + this._storageSuffix, this._cookieName = ge + "_" + this._storageSuffixV5, this.cookieStorage = (new Vt).getStorage(this.options.disableCookies), this.cookieStorage.options({
                        expirationDays: this.options.cookieExpiration,
                        domain: this.options.domain,
                        secure: this.options.secureCookie,
                        sameSite: this.options.sameSiteCookie
                    }), this._metadataStorage = new Wt({
                        storageKey: this._cookieName,
                        disableCookies: this.options.disableCookies,
                        expirationDays: this.options.cookieExpiration,
                        domain: this.options.domain,
                        secure: this.options.secureCookie,
                        sameSite: this.options.sameSiteCookie,
                        storage: this.options.storage
                    });
                    var a = !!this.cookieStorage.get(this._oldCookiename),
                        s = !!this._metadataStorage.load();
                    this._useOldCookie = !s && a && !this.options.cookieForceUpgrade;
                    var c = s || a;
                    if (this.options.deferInitialization && !c) return void this._deferInitialization(e, t, n, i);
                    this.options.domain = this.cookieStorage.options().domain, "string" === Be(this.options.logLevel) && rt(this.options.logLevel);
                    var u = pn(this);
                    this._apiPropertiesTrackingOptions = Object.keys(u).length > 0 ? {
                        tracking_options: u
                    } : {}, this.options.cookieForceUpgrade && a && (s || rn(this), this.cookieStorage.remove(this._oldCookiename)), nn(this), this._pendingReadStorage = !0;
                    this.options.saveEvents && (this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey).map((function(e) {
                            return {
                                event: e
                            }
                        })).concat(this._unsentEvents), this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey).map((function(e) {
                            return {
                                event: e
                            }
                        })).concat(this._unsentIdentifys)), n && n.onNewSessionStart && this.onNewSessionStart(this.options.onNewSessionStart),
                        function(e) {
                            n && n.deviceId && !ft(n.deviceId) && (ot.error('Invalid device ID rejected. Randomly generated UUID will be used instead of "'.concat(n.deviceId, '"')), delete n.deviceId), o.options.deviceId = o._getInitialDeviceId(n && n.deviceId, e), o.options.userId = "string" === Be(t) && !at(t) && t || "number" === Be(t) && t.toString() || o.options.userId || null;
                            var i = (new Date).getTime(),
                                r = !o._sessionId || !o._lastEventTime || i - o._lastEventTime > o.options.sessionTimeout || o.options.sessionId;
                            r && (o.options.unsetParamsReferrerOnNewSession && o._unsetUTMParams(), o._newSession = !0, o._sessionId = o.options.sessionId || i, o.options.sessionId = void 0, o.options.saveParamsReferrerOncePerSession && o._trackParamsAndReferrer()), o.options.saveParamsReferrerOncePerSession || o._trackParamsAndReferrer(), o.options.saveEvents && (en(o._unsentEvents), en(o._unsentIdentifys)), o._lastEventTime = i, an(o), o._pendingReadStorage = !1, o._sendEventsIfReady();
                            for (var a = 0; a < o._onInitCallbacks.length; a++) o._onInitCallbacks[a](o);
                            o._onInitCallbacks = [], o._isInitialized = !0, r && o._runNewSessionStartCallbacks()
                        }(), this.runQueuedFunctions(), "function" === Be(i) && i(this);
                    var l = this.options.onExitPage;
                    if ("function" === Be(l) && Ge.addEventListener && !this.pageHandlersAdded) {
                        this.pageHandlersAdded = !0;
                        Ge.addEventListener("pagehide", (function() {
                            var e;
                            e = o.options.transport, o.setTransport(Fe), l(), o.setTransport(e)
                        }), !1)
                    }
                    this._connector.eventBridge.setEventReceiver((function(e) {
                        o._logEvent(e.eventType, e.eventProperties, e.userProperties)
                    }));
                    var d = this._connector.identityStore.editIdentity();
                    this.options.deviceId && d.setDeviceId(this.options.deviceId), this.options.userId && d.setUserId(this.options.userId), d.commit()
                } catch (e) {
                    ot.error(e), n && "function" === Be(n.onError) && n.onError(e)
                }
            }, Qt.prototype._runNewSessionStartCallbacks = function() {
                for (var e = 0; e < this._onNewSessionStartCallbacks.length; e++) this._onNewSessionStartCallbacks[e](this)
            }, Qt.prototype.deleteLowerLevelDomainCookies = function() {
                var e = bt(),
                    t = this.options.domain && "." === this.options.domain[0] ? this.options.domain.slice(1) : this.options.domain;
                if (t && st() && e !== t && new RegExp(t + "$").test(e)) {
                    for (var n = e.split("."), i = t.split("."), r = n.length; r > i.length; --r) {
                        var o = n.slice(n.length - r).join(".");
                        kt(this._cookieName, null, {
                            domain: "." + o
                        })
                    }
                    kt(this._cookieName, null, {})
                }
            }, Qt.prototype._getInitialDeviceId = function(e, t) {
                if (e) return e;
                if (this.options.deviceIdFromUrlParam) {
                    var n = this._getDeviceIdFromUrlParam(this._getUrlParams());
                    if (n) return n
                }
                return this.options.deviceId ? this.options.deviceId : t || xt()
            };
            var en = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t].event.user_properties,
                        i = e[t].event.event_properties,
                        r = e[t].event.groups;
                    e[t].event.user_properties = pt(n), e[t].event.event_properties = pt(i), e[t].event.groups = lt(r)
                }
            };
            Qt.prototype._trackParamsAndReferrer = function() {
                var e, t, n, i;
                if (this.options.includeUtm && (e = this._initUtmData()), this.options.includeReferrer && (t = this._saveReferrer(this._getReferrer())), this.options.includeGclid && (n = this._saveGclid(this._getUrlParams())), this.options.includeFbclid && (i = this._saveFbclid(this._getUrlParams())), this.options.logAttributionCapturedEvent) {
                    var r = G(G(G(G({}, e), t), n), i);
                    Object.keys(r).length > 0 && this.logEvent(Ue, r)
                }
            };
            var tn = function e(t, n) {
                if ("object" === Be(n)) {
                    var i = new Set(["headers"]),
                        r = new Set(["eventUploadPeriodMillis"]),
                        o = function(i) {
                            if (Object.prototype.hasOwnProperty.call(t, i)) {
                                var o = n[i],
                                    a = Be(t[i]);
                                ("transport" !== i || ht(o)) && ("sessionId" !== i || null === o ? dt(o, i + " option", a) && ("boolean" === a ? t[i] = !!o : "string" === a && !at(o) || "number" === a && (o > 0 || 0 === o && r.has(i)) || "function" === a ? t[i] = o : "object" === a && e(t[i], o)) : t[i] = vt(o) ? o : null)
                            }
                        };
                    for (var a in n) i.has(a) ? t[a] = G(G({}, t[a]), n[a]) : Object.prototype.hasOwnProperty.call(n, a) && o(a)
                }
            };
            Qt.prototype.runQueuedFunctions = function() {
                var e = this._q;
                this._q = [];
                for (var t = 0; t < e.length; t++) {
                    var n = this[e[t][0]];
                    "function" === Be(n) && n.apply(this, e[t].slice(1))
                }
            }, Qt.prototype._apiKeySet = function(e) {
                return !at(this.options.apiKey) || (ot.error("Invalid apiKey. Please set a valid apiKey with init() before calling " + e), !1)
            }, Qt.prototype._loadSavedUnsentEvents = function(e) {
                var t = this._getFromStorage(Ut, e),
                    n = this._parseSavedUnsentEventsString(t, e);
                return this._setInStorage(Ut, e, JSON.stringify(n)), n
            }, Qt.prototype._parseSavedUnsentEventsString = function(e, t) {
                if (at(e)) return [];
                if ("string" === Be(e)) try {
                    var n = JSON.parse(e);
                    if ("array" === Be(n)) return n
                } catch (e) {}
                return ot.error("Unable to load " + t + " events. Restart with a new empty queue."), []
            }, Qt.prototype.isNewSession = function() {
                return this._newSession
            }, Qt.prototype.onInit = function(e) {
                this._isInitialized ? e(this) : this._onInitCallbacks.push(e)
            }, Qt.prototype.onNewSessionStart = function(e) {
                this._onNewSessionStartCallbacks.push(e)
            }, Qt.prototype.getSessionId = function() {
                return this._sessionId
            }, Qt.prototype.nextEventId = function() {
                return this._eventId++, this._eventId
            }, Qt.prototype.nextIdentifyId = function() {
                return this._identifyId++, this._identifyId
            }, Qt.prototype.nextSequenceNumber = function() {
                return this._sequenceNumber++, this._sequenceNumber
            }, Qt.prototype._unsentCount = function() {
                return this._unsentEvents.length + this._unsentIdentifys.length
            }, Qt.prototype._sendEventsIfReady = function() {
                return 0 !== this._unsentCount() && (this.options.batchEvents ? this._unsentCount() >= this.options.eventUploadThreshold || this.options.transport === Fe ? (this.sendEvents(), !0) : (this._updateScheduled || (this._updateScheduled = !0, setTimeout(function() {
                    this._updateScheduled = !1, this.sendEvents()
                }.bind(this), this.options.eventUploadPeriodMillis)), !1) : (this.sendEvents(), !0))
            }, Qt.prototype.clearStorage = function() {
                return this._metadataStorage.clear()
            }, Qt.prototype._getFromStorage = function(e, t) {
                return e.getItem(t + this._storageSuffix)
            }, Qt.prototype._setInStorage = function(e, t, n) {
                e.setItem(t + this._storageSuffix, n)
            };
            var nn = function(e) {
                    if (e._useOldCookie) {
                        var t = e.cookieStorage.get(e._oldCookiename);
                        "object" !== Be(t) || on(e, t)
                    } else {
                        var n = e._metadataStorage.load();
                        "object" === Be(n) && on(e, n)
                    }
                },
                rn = function(e) {
                    var t = e.cookieStorage.get(e._oldCookiename);
                    "object" === Be(t) && (on(e, t), an(e))
                },
                on = function(e, t) {
                    t.deviceId && (e.options.deviceId = t.deviceId), t.userId && (e.options.userId = t.userId), null !== t.optOut && void 0 !== t.optOut && !1 !== t.optOut && (e.options.optOut = t.optOut), t.sessionId && (e._sessionId = parseInt(t.sessionId, 10)), t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime, 10)), t.eventId && (e._eventId = parseInt(t.eventId, 10)), t.identifyId && (e._identifyId = parseInt(t.identifyId, 10)), t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber, 10))
                },
                an = function(e) {
                    var t = {
                        deviceId: e.options.deviceId,
                        userId: e.options.userId,
                        optOut: e.options.optOut,
                        sessionId: e._sessionId,
                        lastEventTime: e._lastEventTime,
                        eventId: e._eventId,
                        identifyId: e._identifyId,
                        sequenceNumber: e._sequenceNumber
                    };
                    e._useOldCookie ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, t) : e._metadataStorage.save(t)
                };
            Qt.prototype._initUtmData = function(e, t) {
                e = e || this._getUrlParams(), t = t || this.cookieStorage.get("__utmz");
                var n, i, r, o, a, s, c, u, l, d, p, f = (i = e, r = (n = t) ? "?" + n.split(".").slice(-1)[0].replace(/\|/g, "&") : "", o = function(e, t, n, i) {
                    return ct(e, t) || ct(n, i)
                }, a = o(Te, i, "utmcsr", r), s = o(Re, i, "utmcmd", r), c = o(De, i, "utmccn", r), u = o(Le, i, "utmctr", r), l = o(Me, i, "utmcct", r), d = {}, (p = function(e, t) {
                    at(t) || (d[e] = t)
                })(Te, a), p(Re, s), p(De, c), p(Le, u), p(Me, l), d);
                return sn(this, f), f
            }, Qt.prototype._unsetUTMParams = function() {
                var e = new Gt;
                e.unset(Ne), e.unset(Pe), e.unset(Te), e.unset(Re), e.unset(De), e.unset(Le), e.unset(Me), this.identify(e)
            };
            var sn = function(e, t) {
                if ("object" === Be(t) && 0 !== Object.keys(t).length) {
                    var n = new Gt;
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n.setOnce("initial_" + i, t[i]), n.set(i, t[i]));
                    e.identify(n)
                }
            };
            Qt.prototype._getReferrer = function() {
                var e = this._getReferrerFromUrlParam(this._getUrlParams());
                return e || ("undefined" != typeof document ? document.referrer : "")
            }, Qt.prototype._getUrlParams = function() {
                return Ge.location.search
            }, Qt.prototype._saveGclid = function(e) {
                var t = ct("gclid", e);
                if (!at(t)) {
                    var n = {
                        gclid: t
                    };
                    return sn(this, n), n
                }
            }, Qt.prototype._saveFbclid = function(e) {
                var t = ct("fbclid", e);
                if (!at(t)) {
                    var n = {
                        fbclid: t
                    };
                    return sn(this, n), n
                }
            }, Qt.prototype._getDeviceIdFromUrlParam = function(e) {
                return ct(Ae, e)
            }, Qt.prototype._getReferrerFromUrlParam = function(e) {
                return ct(je, e)
            }, Qt.prototype._getReferringDomain = function(e) {
                if (at(e)) return null;
                var t = e.split("/");
                return t.length >= 3 ? t[2] : null
            }, Qt.prototype._saveReferrer = function(e) {
                if (!at(e)) {
                    var t = {
                        referrer: e,
                        referring_domain: this._getReferringDomain(e)
                    };
                    return sn(this, t), t
                }
            }, Qt.prototype.saveEvents = function() {
                try {
                    var e = JSON.stringify(this._unsentEvents.map((function(e) {
                        return e.event
                    })));
                    this._setInStorage(Ut, this.options.unsentKey, e)
                } catch (e) {}
                try {
                    var t = JSON.stringify(this._unsentIdentifys.map((function(e) {
                        return e.event
                    })));
                    this._setInStorage(Ut, this.options.unsentIdentifyKey, t)
                } catch (e) {}
            }, Qt.prototype.setDomain = function(e) {
                if (this._shouldDeferCall()) return this._q.push(["setDomain"].concat(Array.prototype.slice.call(arguments, 0)));
                if (dt(e, "domain", "string")) try {
                    this.cookieStorage.options({
                        expirationDays: this.options.cookieExpiration,
                        secure: this.options.secureCookie,
                        domain: e,
                        sameSite: this.options.sameSiteCookie
                    }), this.options.domain = this.cookieStorage.options().domain, nn(this), an(this)
                } catch (e) {
                    ot.error(e)
                }
            }, Qt.prototype.setUserId = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (dt(t, "startNewSession", "boolean")) {
                    if (this._shouldDeferCall()) return this._q.push(["setUserId"].concat(Array.prototype.slice.call(arguments, 0)));
                    try {
                        this.options.userId = null != e && "" + e || null, t && (this.options.unsetParamsReferrerOnNewSession && this._unsetUTMParams(), this._newSession = !0, this._sessionId = (new Date).getTime(), this._runNewSessionStartCallbacks(), this.options.saveParamsReferrerOncePerSession && this._trackParamsAndReferrer()), an(this), this._connector && this._connector.identityStore.editIdentity().setUserId(this.options.userId).commit()
                    } catch (e) {
                        ot.error(e)
                    }
                }
            }, Qt.prototype.setGroup = function(e, t) {
                if (this._shouldDeferCall()) return this._q.push(["setGroup"].concat(Array.prototype.slice.call(arguments, 0)));
                if (this._apiKeySet("setGroup()") && dt(e, "groupType", "string") && !at(e)) {
                    var n = {};
                    n[e] = t;
                    var i = (new Gt).set(e, t);
                    this._logEvent(ie, null, null, i.userPropertiesOperations, n, null, null, null)
                }
            }, Qt.prototype.setOptOut = function(e) {
                if (this._shouldDeferCall()) return this._q.push(["setOptOut"].concat(Array.prototype.slice.call(arguments, 0)));
                if (dt(e, "enable", "boolean")) try {
                    this.options.optOut = e, an(this)
                } catch (e) {
                    ot.error(e)
                }
            }, Qt.prototype.setSessionId = function(e) {
                if (dt(e, "sessionId", "number")) try {
                    this._sessionId = e, an(this)
                } catch (e) {
                    ot.error(e)
                }
            }, Qt.prototype.resetSessionId = function() {
                this.setSessionId((new Date).getTime())
            }, Qt.prototype.regenerateDeviceId = function() {
                if (this._shouldDeferCall()) return this._q.push(["regenerateDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                this.setDeviceId(xt())
            }, Qt.prototype.setDeviceId = function(e) {
                if (this._shouldDeferCall()) return this._q.push(["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                if (ft(e)) try {
                    at(e) || (this.options.deviceId = "" + e, an(this), this._connector && this._connector.identityStore.editIdentity().setDeviceId(this.options.deviceId).commit())
                } catch (e) {
                    ot.error(e)
                }
            }, Qt.prototype.setTransport = function(e) {
                if (this._shouldDeferCall()) return this._q.push(["setTransport"].concat(Array.prototype.slice.call(arguments, 0)));
                ht(e) && (this.options.transport = e)
            }, Qt.prototype.setUserProperties = function(e) {
                if (this._shouldDeferCall()) return this._q.push(["setUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                if (this._apiKeySet("setUserProperties()") && dt(e, "userProperties", "object")) {
                    var t = ut(pt(e));
                    if (0 !== Object.keys(t).length) {
                        var n = new Gt;
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && n.set(i, t[i]);
                        this.identify(n)
                    }
                }
            }, Qt.prototype.clearUserProperties = function() {
                if (this._shouldDeferCall()) return this._q.push(["clearUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                if (this._apiKeySet("clearUserProperties()")) {
                    var e = new Gt;
                    e.clearAll(), this.identify(e)
                }
            };
            var cn = function(e, t) {
                for (var n = 0; n < t._q.length; n++) {
                    var i = e[t._q[n][0]];
                    "function" === Be(i) && i.apply(e, t._q[n].slice(1))
                }
                return e
            };
            Qt.prototype.identify = function(e, t, n, i) {
                if (this._shouldDeferCall()) return this._q.push(["identify"].concat(Array.prototype.slice.call(arguments, 0)));
                if (this._apiKeySet("identify()"))
                    if ("object" === Be(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = cn(new Gt, e)), e instanceof Gt) {
                        if (Object.keys(e.userPropertiesOperations).length > 0) return this._logEvent(ie, null, null, e.userPropertiesOperations, null, null, null, t, n, i);
                        hn(t, n, 0, "No request sent", {
                            reason: "No user property operations"
                        })
                    } else ot.error("Invalid identify input type. Expected Identify object but saw " + Be(e)), hn(t, n, 0, "No request sent", {
                        reason: "Invalid identify input type"
                    });
                else hn(t, n, 0, "No request sent", {
                    reason: "API key is not set"
                })
            }, Qt.prototype.groupIdentify = function(e, t, n, i, r, o) {
                if (this._shouldDeferCall()) return this._q.push(["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0)));
                if (this._apiKeySet("groupIdentify()"))
                    if (dt(e, "group_type", "string") && !at(e))
                        if (null != t)
                            if ("object" === Be(n) && Object.prototype.hasOwnProperty.call(n, "_q") && (n = cn(new Gt, n)), n instanceof Gt) {
                                if (Object.keys(n.userPropertiesOperations).length > 0) return this._logEvent(re, null, null, null, X({}, e, t), n.userPropertiesOperations, null, i, r, o);
                                hn(i, r, 0, "No request sent", {
                                    reason: "No group property operations"
                                })
                            } else ot.error("Invalid identify input type. Expected Identify object but saw " + Be(n)), hn(i, r, 0, "No request sent", {
                                reason: "Invalid identify input type"
                            });
                else hn(i, r, 0, "No request sent", {
                    reason: "Invalid group name"
                });
                else hn(i, r, 0, "No request sent", {
                    reason: "Invalid group type"
                });
                else hn(i, r, 0, "No request sent", {
                    reason: "API key is not set"
                })
            }, Qt.prototype.setVersionName = function(e) {
                if (this._shouldDeferCall()) return this._q.push(["setVersionName"].concat(Array.prototype.slice.call(arguments, 0)));
                dt(e, "versionName", "string") && (this.options.versionName = e)
            }, Qt.prototype._logEvent = function(e, t, n, i, r, o, a, s, c, u) {
                if (nn(this), e)
                    if (this.options.optOut) hn(s, c, 0, "No request sent", {
                        reason: "optOut is set to true"
                    });
                    else try {
                        var l;
                        l = e === ie || e === re ? this.nextIdentifyId() : this.nextEventId();
                        var d = this.nextSequenceNumber(),
                            p = "number" === Be(a) ? a : (new Date).getTime();
                        u ? this._sessionId = -1 : (!this._sessionId || !this._lastEventTime || p - this._lastEventTime > this.options.sessionTimeout) && (this._sessionId = p, this._runNewSessionStartCallbacks()), this._lastEventTime = p, an(this);
                        var f = this._ua.browser.name,
                            h = this._ua.browser.major,
                            v = this._ua.device.model || this._ua.os.name,
                            m = this._ua.device.vendor;
                        i = i || {};
                        var b = G({}, this._apiPropertiesTrackingOptions);
                        n = G(G({}, n || {}), b), t = t || {}, r = r || {}, o = o || {};
                        var g = {
                            device_id: this.options.deviceId,
                            user_id: this.options.userId,
                            timestamp: p,
                            event_id: l,
                            session_id: this._sessionId || -1,
                            event_type: e,
                            version_name: this.options.versionName || null,
                            platform: dn(this, "platform") ? this.options.platform : null,
                            os_name: dn(this, "os_name") && f || null,
                            os_version: dn(this, "os_version") && h || null,
                            device_model: dn(this, "device_model") && v || null,
                            device_manufacturer: dn(this, "device_manufacturer") && m || null,
                            language: dn(this, "language") ? this.options.language : null,
                            api_properties: n,
                            event_properties: ut(pt(t)),
                            user_properties: ut(pt(i)),
                            uuid: Bt(),
                            library: this.options.library,
                            sequence_number: d,
                            groups: ut(lt(r)),
                            group_properties: ut(pt(o)),
                            user_agent: this._userAgent,
                            partner_id: this.options.partnerId || null
                        };
                        return un(this) && (g.plan = {
                            branch: this.options.plan.branch || void 0,
                            source: this.options.plan.source || void 0,
                            version: this.options.plan.version || void 0,
                            versionId: this.options.plan.versionId || void 0
                        }), ln(this) && (g.ingestion_metadata = {
                            source_name: this.options.ingestionMetadata.sourceName || void 0,
                            source_version: this.options.ingestionMetadata.sourceVersion || void 0
                        }), e === ie || e === re ? (this._unsentIdentifys.push({
                            event: g,
                            callback: s,
                            errorCallback: c
                        }), this._limitEventsQueued(this._unsentIdentifys)) : (this._unsentEvents.push({
                            event: g,
                            callback: s,
                            errorCallback: c
                        }), this._limitEventsQueued(this._unsentEvents)), this.options.saveEvents && this.saveEvents(), this._sendEventsIfReady(), e === ie && this._connector && this._connector.identityStore.editIdentity().updateUserProperties(ut(pt(i))).commit(), l
                    } catch (e) {
                        ot.error(e)
                    } else hn(s, c, 0, "No request sent", {
                        reason: "Missing eventType"
                    })
            };
            var un = function(e) {
                    return e.options.plan && (e.options.plan.source || e.options.plan.branch || e.options.plan.version || e.options.plan.versionId)
                },
                ln = function(e) {
                    return e.options.ingestionMetadata && (e.options.ingestionMetadata.sourceName || e.options.ingestionMetadata.sourceVersion)
                },
                dn = function(e, t) {
                    return !!e.options.trackingOptions[t]
                },
                pn = function(e) {
                    for (var t = ["city", "country", "dma", "ip_address", "region"], n = {}, i = 0; i < t.length; i++) {
                        var r = t[i];
                        dn(e, r) || (n[r] = !1)
                    }
                    return n
                };
            Qt.prototype._limitEventsQueued = function(e) {
                e.length > this.options.savedMaxCount && e.splice(0, e.length - this.options.savedMaxCount).forEach((function(e) {
                    hn(e.callback, e.errorCallback, 0, "No request sent", {
                        reason: "Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker"
                    })
                }))
            }, Qt.prototype.logEvent = function(e, t, n, i) {
                var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                return this._shouldDeferCall() ? this._q.push(["logEvent"].concat(Array.prototype.slice.call(arguments, 0))) : this.logEventWithTimestamp(e, t, null, n, i, r)
            }, Qt.prototype.logEventWithTimestamp = function(e, t, n, i, r) {
                var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                return this._shouldDeferCall() ? this._q.push(["logEventWithTimestamp"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEvent()") ? dt(e, "eventType", "string") ? at(e) ? (hn(i, r, 0, "No request sent", {
                    reason: "Missing eventType"
                }), -1) : (dt(o, "outOfSession", "boolean") || hn(i, r, 0, "No request sent", {
                    reason: "Invalid outOfSession value"
                }), this._logEvent(e, t, null, null, null, null, n, i, r, o)) : (hn(i, r, 0, "No request sent", {
                    reason: "Invalid type for eventType"
                }), -1) : (hn(i, r, 0, "No request sent", {
                    reason: "API key not set"
                }), -1)
            }, Qt.prototype.logEventWithGroups = function(e, t, n, i, r) {
                var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                return this._shouldDeferCall() ? this._q.push(["logEventWithGroups"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEventWithGroups()") ? dt(e, "eventType", "string") ? (dt(o, "outOfSession", "boolean") || hn(event.callback, event.errorCallback, 0, "No request sent", {
                    reason: "Invalid outOfSession value"
                }), this._logEvent(e, t, null, null, n, null, null, i, r, o)) : (hn(event.callback, event.errorCallback, 0, "No request sent", {
                    reason: "Invalid type for eventType"
                }), -1) : (hn(event.callback, event.errorCallback, 0, "No request sent", {
                    reason: "API key not set"
                }), -1)
            };
            var fn = function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                hn = function(e, t, n, i, r) {
                    "function" === Be(e) && e(n, i, r), "function" === Be(t) && t(n, i, r)
                };
            Qt.prototype.logRevenueV2 = function(e) {
                if (this._shouldDeferCall()) return this._q.push(["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0)));
                if (this._apiKeySet("logRevenueV2()"))
                    if ("object" === Be(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = cn(new zt, e)), e instanceof zt) {
                        if (e && e._isValidRevenue()) return this.logEvent(Ie, e._toJSONObject())
                    } else ot.error("Invalid revenue input type. Expected Revenue object but saw " + Be(e))
            }, Qt.prototype.logRevenue = function(e, t, n) {
                return this._shouldDeferCall() ? this._q.push(["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logRevenue()") && fn(e) && (void 0 === t || fn(t)) ? this._logEvent(Ie, {}, {
                    productId: n,
                    special: "revenue_amount",
                    quantity: t || 1,
                    price: e
                }, null, null, null, null, null) : -1
            }, Qt.prototype._logErrorsOnEvents = function(e, t, n, i) {
                for (var r = ["_unsentEvents", "_unsentIdentifys"], o = 0; o < r.length; o++)
                    for (var a = r[o], s = "_unsentEvents" === a ? e : t, c = 0; c < this[a].length; c++) {
                        var u = this[a][c];
                        u.event.event_id <= s && u.errorCallback && u.errorCallback(n, i)
                    }
            }, Qt.prototype.removeEvents = function(e, t, n, i) {
                vn(this, "_unsentEvents", e, n, i), vn(this, "_unsentIdentifys", t, n, i)
            };
            var vn = function(e, t, n, i, r) {
                if (!(n < 0)) {
                    for (var o = [], a = 0; a < e[t].length; a++) {
                        var s = e[t][a];
                        s.event.event_id > n ? o.push(s) : s.callback && s.callback(i, r)
                    }
                    e[t] = o
                }
            };
            Qt.prototype.sendEvents = function() {
                if (this._apiKeySet("sendEvents()")) {
                    if (this.options.optOut) this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                        reason: "Opt out is set to true"
                    });
                    else if (0 !== this._unsentCount()) {
                        if (this.options.transport !== Fe) {
                            if (this._sending) return;
                            this._sending = !0
                        }
                        var e = (this.options.forceHttps || "https:" === Ge.location.protocol ? "https" : "http") + "://" + this.options.apiEndpoint,
                            t = Math.min(this._unsentCount(), this.options.uploadBatchSize),
                            n = this._mergeEventsAndIdentifys(t),
                            i = n.maxEventId,
                            r = n.maxIdentifyId,
                            o = JSON.stringify(n.eventsToSend.map((function(e) {
                                return e.event
                            }))),
                            s = (new Date).getTime(),
                            c = {
                                client: this.options.apiKey,
                                e: o,
                                v: ee,
                                upload_time: s,
                                checksum: a()(ee + this.options.apiKey + o + s)
                            };
                        if (this.options.transport !== Fe || "undefined" == typeof navigator) {
                            var u = this;
                            try {
                                new Zt(e, c, this.options.headers).send((function(e, n) {
                                    u._sending = !1;
                                    try {
                                        200 === e ? (u.removeEvents(i, r, e, n), u.options.saveEvents && u.saveEvents(), u._sendEventsIfReady()) : (u._logErrorsOnEvents(i, r, e, n), 413 === e && (1 === u.options.uploadBatchSize && u.removeEvents(i, r, e, n), u.options.uploadBatchSize = Math.ceil(t / 2), u.sendEvents()))
                                    } catch (e) {}
                                }))
                            } catch (e) {
                                var l = "Request failed to send";
                                ot.error(l), u._logErrorsOnEvents(i, r, 0, l), u.removeEvents(i, r, 0, l, {
                                    reason: e.message
                                })
                            }
                        } else {
                            navigator.sendBeacon(e, new URLSearchParams(c)) ? (this.removeEvents(i, r, 200, "success"), this.options.saveEvents && this.saveEvents()) : this._logErrorsOnEvents(i, r, 0, "")
                        }
                    }
                } else this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                    reason: "API key not set"
                })
            }, Qt.prototype._mergeEventsAndIdentifys = function(e) {
                for (var t = [], n = 0, i = -1, r = 0, o = -1; t.length < e;) {
                    var a = void 0,
                        s = r >= this._unsentIdentifys.length,
                        c = n >= this._unsentEvents.length;
                    if (c && s) {
                        ot.error("Merging Events and Identifys, less events and identifys than expected");
                        break
                    }
                    s ? i = (a = this._unsentEvents[n++]).event.event_id : c ? o = (a = this._unsentIdentifys[r++]).event.event_id : !("sequence_number" in this._unsentEvents[n].event) || this._unsentEvents[n].event.sequence_number < this._unsentIdentifys[r].event.sequence_number ? i = (a = this._unsentEvents[n++]).event.event_id : o = (a = this._unsentIdentifys[r++]).event.event_id, t.push(a)
                }
                return {
                    eventsToSend: t,
                    maxEventId: i,
                    maxIdentifyId: o
                }
            }, Qt.prototype.setGlobalUserProperties = function(e) {
                this.setUserProperties(e)
            }, Qt.prototype.__VERSION__ = function() {
                return this.options.library.version
            }, Qt.prototype.setLibrary = function(e, t) {
                null != e && (this.options.library.name = e), null != t && (this.options.library.version = t)
            }, Qt.prototype._shouldDeferCall = function() {
                return this._pendingReadStorage || this._initializationDeferred
            }, Qt.prototype._deferInitialization = function() {
                this._initializationDeferred = !0, this._q.push(["init"].concat(Array.prototype.slice.call(arguments, 0)))
            }, Qt.prototype.enableTracking = function() {
                this._initializationDeferred = !1, an(this), this.runQueuedFunctions()
            }, Qt.prototype._refreshDynamicConfig = function() {
                this.options.useDynamicConfig && $t.refresh(this.options.serverZone, this.options.forceHttps, function() {
                    this.options.apiEndpoint = $t.ingestionEndpoint
                }.bind(this))
            }, Qt.prototype.getDeviceId = function() {
                return this.options.deviceId
            }, Qt.prototype.getUserId = function() {
                return this.options.userId
            }, Qt.prototype.setMinTimeBetweenSessionsMillis = function(e) {
                if (dt(e, "timeInMillis", "number")) {
                    if (this._shouldDeferCall()) return this._q.push(["setMinTimeBetweenSessionsMillis"].concat(Array.prototype.slice.call(arguments, 0)));
                    try {
                        this.options.sessionTimeout = e
                    } catch (e) {
                        ot.error(e)
                    }
                }
            }, Qt.prototype.setEventUploadThreshold = function(e) {
                if (dt(e, "eventUploadThreshold", "number")) {
                    if (this._shouldDeferCall()) return this._q.push(["setEventUploadThreshold"].concat(Array.prototype.slice.call(arguments, 0)));
                    try {
                        this.options.eventUploadThreshold = e
                    } catch (e) {
                        ot.error(e)
                    }
                }
            }, Qt.prototype.setUseDynamicConfig = function(e) {
                if (dt(e, "useDynamicConfig", "boolean")) {
                    if (this._shouldDeferCall()) return this._q.push(["setUseDynamicConfig"].concat(Array.prototype.slice.call(arguments, 0)));
                    try {
                        this.options.useDynamicConfig = e, this._refreshDynamicConfig()
                    } catch (e) {
                        ot.error(e)
                    }
                }
            }, Qt.prototype.setServerZone = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if ((e === Xt || e === Jt) && dt(t, "serverZoneBasedApi", "boolean")) {
                    if (this._shouldDeferCall()) return this._q.push(["setServerZone"].concat(Array.prototype.slice.call(arguments, 0)));
                    try {
                        this.options.serverZone = e, this.options.serverZoneBasedApi = t, t && (this.options.apiEndpoint = Ht(this.options.serverZone))
                    } catch (e) {
                        ot.error(e)
                    }
                }
            }, Qt.prototype.setServerUrl = function(e) {
                if (dt(e, "serverUrl", "string")) {
                    if (this._shouldDeferCall()) return this._q.push(["setServerUrl"].concat(Array.prototype.slice.call(arguments, 0)));
                    try {
                        this.options.apiEndpoint = e
                    } catch (e) {
                        ot.error(e)
                    }
                }
            };
            var mn = function() {
                this.options = G({}, Kt), this._q = [], this._instances = {}
            };
            mn.prototype.Identify = Gt, mn.prototype.Revenue = zt, mn.prototype.getInstance = function(e) {
                e = at(e) ? Q : e.toLowerCase();
                var t = this._instances[e];
                return void 0 === t && (t = new Qt(e), this._instances[e] = t), t
            }, mn.prototype.init = function(e, t, n, i) {
                this.getInstance().init(e, t, n, function(e) {
                    this.options = e.options, "function" === Be(i) && i(e)
                }.bind(this))
            }, mn.prototype.isNewSession = function() {
                return this.getInstance().isNewSession()
            }, mn.prototype.getSessionId = function() {
                return this.getInstance().getSessionId()
            }, mn.prototype.nextEventId = function() {
                return this.getInstance().nextEventId()
            }, mn.prototype.nextIdentifyId = function() {
                return this.getInstance().nextIdentifyId()
            }, mn.prototype.nextSequenceNumber = function() {
                return this.getInstance().nextSequenceNumber()
            }, mn.prototype.saveEvents = function() {
                this.getInstance().saveEvents()
            }, mn.prototype.setDomain = function(e) {
                this.getInstance().setDomain(e)
            }, mn.prototype.setUserId = function(e) {
                this.getInstance().setUserId(e)
            }, mn.prototype.setGroup = function(e, t) {
                this.getInstance().setGroup(e, t)
            }, mn.prototype.setOptOut = function(e) {
                this.getInstance().setOptOut(e)
            }, mn.prototype.regenerateDeviceId = function() {
                this.getInstance().regenerateDeviceId()
            }, mn.prototype.setDeviceId = function(e) {
                this.getInstance().setDeviceId(e)
            }, mn.prototype.setUserProperties = function(e) {
                this.getInstance().setUserProperties(e)
            }, mn.prototype.clearUserProperties = function() {
                this.getInstance().clearUserProperties()
            }, mn.prototype.identify = function(e, t) {
                this.getInstance().identify(e, t)
            }, mn.prototype.setVersionName = function(e) {
                this.getInstance().setVersionName(e)
            }, mn.prototype.logEvent = function(e, t, n) {
                return this.getInstance().logEvent(e, t, n)
            }, mn.prototype.logEventWithGroups = function(e, t, n, i) {
                return this.getInstance().logEventWithGroups(e, t, n, i)
            }, mn.prototype.logRevenueV2 = function(e) {
                return this.getInstance().logRevenueV2(e)
            }, mn.prototype.logRevenue = function(e, t, n) {
                return this.getInstance().logRevenue(e, t, n)
            }, mn.prototype.removeEvents = function(e, t) {
                this.getInstance().removeEvents(e, t)
            }, mn.prototype.sendEvents = function(e) {
                this.getInstance().sendEvents(e)
            }, mn.prototype.setGlobalUserProperties = function(e) {
                this.getInstance().setUserProperties(e)
            }, mn.prototype.__VERSION__ = Yt;
            var bn = void 0 !== Ge && Ge.amplitude || {},
                gn = new mn;
            for (var yn in gn._q = bn._q || [], bn._iq) Object.prototype.hasOwnProperty.call(bn._iq, yn) && (gn.getInstance(yn)._q = bn._iq[yn]._q || [])
        },
        9560: function(e, t, n) {
            var i;
            ! function(r) {
                "use strict";

                function o(e, t) {
                    var n = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                }

                function a(e, t, n, i, r, a) {
                    return o((s = o(o(t, e), o(i, a))) << (c = r) | s >>> 32 - c, n);
                    var s, c
                }

                function s(e, t, n, i, r, o, s) {
                    return a(t & n | ~t & i, e, t, r, o, s)
                }

                function c(e, t, n, i, r, o, s) {
                    return a(t & i | n & ~i, e, t, r, o, s)
                }

                function u(e, t, n, i, r, o, s) {
                    return a(t ^ n ^ i, e, t, r, o, s)
                }

                function l(e, t, n, i, r, o, s) {
                    return a(n ^ (t | ~i), e, t, r, o, s)
                }

                function d(e, t) {
                    var n, i, r, a, d;
                    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                    var p = 1732584193,
                        f = -271733879,
                        h = -1732584194,
                        v = 271733878;
                    for (n = 0; n < e.length; n += 16) i = p, r = f, a = h, d = v, p = s(p, f, h, v, e[n], 7, -680876936), v = s(v, p, f, h, e[n + 1], 12, -389564586), h = s(h, v, p, f, e[n + 2], 17, 606105819), f = s(f, h, v, p, e[n + 3], 22, -1044525330), p = s(p, f, h, v, e[n + 4], 7, -176418897), v = s(v, p, f, h, e[n + 5], 12, 1200080426), h = s(h, v, p, f, e[n + 6], 17, -1473231341), f = s(f, h, v, p, e[n + 7], 22, -45705983), p = s(p, f, h, v, e[n + 8], 7, 1770035416), v = s(v, p, f, h, e[n + 9], 12, -1958414417), h = s(h, v, p, f, e[n + 10], 17, -42063), f = s(f, h, v, p, e[n + 11], 22, -1990404162), p = s(p, f, h, v, e[n + 12], 7, 1804603682), v = s(v, p, f, h, e[n + 13], 12, -40341101), h = s(h, v, p, f, e[n + 14], 17, -1502002290), p = c(p, f = s(f, h, v, p, e[n + 15], 22, 1236535329), h, v, e[n + 1], 5, -165796510), v = c(v, p, f, h, e[n + 6], 9, -1069501632), h = c(h, v, p, f, e[n + 11], 14, 643717713), f = c(f, h, v, p, e[n], 20, -373897302), p = c(p, f, h, v, e[n + 5], 5, -701558691), v = c(v, p, f, h, e[n + 10], 9, 38016083), h = c(h, v, p, f, e[n + 15], 14, -660478335), f = c(f, h, v, p, e[n + 4], 20, -405537848), p = c(p, f, h, v, e[n + 9], 5, 568446438), v = c(v, p, f, h, e[n + 14], 9, -1019803690), h = c(h, v, p, f, e[n + 3], 14, -187363961), f = c(f, h, v, p, e[n + 8], 20, 1163531501), p = c(p, f, h, v, e[n + 13], 5, -1444681467), v = c(v, p, f, h, e[n + 2], 9, -51403784), h = c(h, v, p, f, e[n + 7], 14, 1735328473), p = u(p, f = c(f, h, v, p, e[n + 12], 20, -1926607734), h, v, e[n + 5], 4, -378558), v = u(v, p, f, h, e[n + 8], 11, -2022574463), h = u(h, v, p, f, e[n + 11], 16, 1839030562), f = u(f, h, v, p, e[n + 14], 23, -35309556), p = u(p, f, h, v, e[n + 1], 4, -1530992060), v = u(v, p, f, h, e[n + 4], 11, 1272893353), h = u(h, v, p, f, e[n + 7], 16, -155497632), f = u(f, h, v, p, e[n + 10], 23, -1094730640), p = u(p, f, h, v, e[n + 13], 4, 681279174), v = u(v, p, f, h, e[n], 11, -358537222), h = u(h, v, p, f, e[n + 3], 16, -722521979), f = u(f, h, v, p, e[n + 6], 23, 76029189), p = u(p, f, h, v, e[n + 9], 4, -640364487), v = u(v, p, f, h, e[n + 12], 11, -421815835), h = u(h, v, p, f, e[n + 15], 16, 530742520), p = l(p, f = u(f, h, v, p, e[n + 2], 23, -995338651), h, v, e[n], 6, -198630844), v = l(v, p, f, h, e[n + 7], 10, 1126891415), h = l(h, v, p, f, e[n + 14], 15, -1416354905), f = l(f, h, v, p, e[n + 5], 21, -57434055), p = l(p, f, h, v, e[n + 12], 6, 1700485571), v = l(v, p, f, h, e[n + 3], 10, -1894986606), h = l(h, v, p, f, e[n + 10], 15, -1051523), f = l(f, h, v, p, e[n + 1], 21, -2054922799), p = l(p, f, h, v, e[n + 8], 6, 1873313359), v = l(v, p, f, h, e[n + 15], 10, -30611744), h = l(h, v, p, f, e[n + 6], 15, -1560198380), f = l(f, h, v, p, e[n + 13], 21, 1309151649), p = l(p, f, h, v, e[n + 4], 6, -145523070), v = l(v, p, f, h, e[n + 11], 10, -1120210379), h = l(h, v, p, f, e[n + 2], 15, 718787259), f = l(f, h, v, p, e[n + 9], 21, -343485551), p = o(p, i), f = o(f, r), h = o(h, a), v = o(v, d);
                    return [p, f, h, v]
                }

                function p(e) {
                    var t, n = "",
                        i = 32 * e.length;
                    for (t = 0; t < i; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                    return n
                }

                function f(e) {
                    var t, n = [];
                    for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                    var i = 8 * e.length;
                    for (t = 0; t < i; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                    return n
                }

                function h(e) {
                    var t, n, i = "0123456789abcdef",
                        r = "";
                    for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
                    return r
                }

                function v(e) {
                    return unescape(encodeURIComponent(e))
                }

                function m(e) {
                    return function(e) {
                        return p(d(f(e), 8 * e.length))
                    }(v(e))
                }

                function b(e, t) {
                    return function(e, t) {
                        var n, i, r = f(e),
                            o = [],
                            a = [];
                        for (o[15] = a[15] = void 0, r.length > 16 && (r = d(r, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ r[n], a[n] = 1549556828 ^ r[n];
                        return i = d(o.concat(f(t)), 512 + 8 * t.length), p(d(a.concat(i), 640))
                    }(v(e), v(t))
                }

                function g(e, t, n) {
                    return t ? n ? b(t, e) : h(b(t, e)) : n ? m(e) : h(m(e))
                }
                void 0 === (i = function() {
                    return g
                }.call(t, n, t, e)) || (e.exports = i)
            }()
        },
        7848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                componentsToDebugString: function() {
                    return j
                },
                getComponents: function() {
                    return A
                },
                hashComponents: function() {
                    return N
                },
                isChromium: function() {
                    return m
                },
                isDesktopSafari: function() {
                    return g
                },
                isEdgeHTML: function() {
                    return v
                },
                isGecko: function() {
                    return y
                },
                isTrident: function() {
                    return h
                },
                isWebKit: function() {
                    return b
                },
                load: function() {
                    return T
                },
                murmurX64Hash128: function() {
                    return D
                }
            });
            var i = n(7582);

            function r(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }

            function o(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }

            function a(e, t) {
                return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
            }

            function s(e, t) {
                return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
            }

            function c(e, t) {
                return [e[0] ^ t[0], e[1] ^ t[1]]
            }

            function u(e) {
                return e = c(e, [0, e[0] >>> 1]), e = c(e = o(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), e = c(e = o(e, [3301882366, 444984403]), [0, e[0] >>> 1])
            }

            function l(e, t) {
                t = t || 0;
                var n, i = (e = e || "").length % 16,
                    l = e.length - i,
                    d = [0, t],
                    p = [0, t],
                    f = [0, 0],
                    h = [0, 0],
                    v = [2277735313, 289559509],
                    m = [1291169091, 658871167];
                for (n = 0; n < l; n += 16) f = [255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24, 255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24], h = [255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24, 255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24], f = a(f = o(f, v), 31), d = r(d = a(d = c(d, f = o(f, m)), 27), p), d = r(o(d, [0, 5]), [0, 1390208809]), h = a(h = o(h, m), 33), p = r(p = a(p = c(p, h = o(h, v)), 31), d), p = r(o(p, [0, 5]), [0, 944331445]);
                switch (f = [0, 0], h = [0, 0], i) {
                    case 15:
                        h = c(h, s([0, e.charCodeAt(n + 14)], 48));
                    case 14:
                        h = c(h, s([0, e.charCodeAt(n + 13)], 40));
                    case 13:
                        h = c(h, s([0, e.charCodeAt(n + 12)], 32));
                    case 12:
                        h = c(h, s([0, e.charCodeAt(n + 11)], 24));
                    case 11:
                        h = c(h, s([0, e.charCodeAt(n + 10)], 16));
                    case 10:
                        h = c(h, s([0, e.charCodeAt(n + 9)], 8));
                    case 9:
                        h = o(h = c(h, [0, e.charCodeAt(n + 8)]), m), p = c(p, h = o(h = a(h, 33), v));
                    case 8:
                        f = c(f, s([0, e.charCodeAt(n + 7)], 56));
                    case 7:
                        f = c(f, s([0, e.charCodeAt(n + 6)], 48));
                    case 6:
                        f = c(f, s([0, e.charCodeAt(n + 5)], 40));
                    case 5:
                        f = c(f, s([0, e.charCodeAt(n + 4)], 32));
                    case 4:
                        f = c(f, s([0, e.charCodeAt(n + 3)], 24));
                    case 3:
                        f = c(f, s([0, e.charCodeAt(n + 2)], 16));
                    case 2:
                        f = c(f, s([0, e.charCodeAt(n + 1)], 8));
                    case 1:
                        f = o(f = c(f, [0, e.charCodeAt(n)]), v), d = c(d, f = o(f = a(f, 31), m))
                }
                return d = r(d = c(d, [0, e.length]), p = c(p, [0, e.length])), p = r(p, d), d = r(d = u(d), p = u(p)), p = r(p, d), ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (p[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (p[1] >>> 0).toString(16)).slice(-8)
            }

            function d(e) {
                return parseInt(e)
            }

            function p(e) {
                return parseFloat(e)
            }

            function f(e) {
                return e.reduce((function(e, t) {
                    return e + (t ? 1 : 0)
                }), 0)
            }

            function h() {
                var e = window,
                    t = navigator;
                return f(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
            }

            function v() {
                var e = window,
                    t = navigator;
                return f(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !h()
            }

            function m() {
                var e = window,
                    t = navigator;
                return f(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
            }

            function b() {
                var e = window,
                    t = navigator;
                return f(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates" in t, "WebKitMediaKeys" in e]) >= 4
            }

            function g() {
                var e = window;
                return f(["safari" in e, !("DeviceMotionEvent" in e), !("ongestureend" in e), !("standalone" in navigator)]) >= 3
            }

            function y() {
                var e, t, n = window;
                return f(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "MediaRecorderErrorEvent" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4
            }

            function w(e, t, n) {
                (function(e) {
                    return e && "function" == typeof e.setValueAtTime
                })(t) && t.setValueAtTime(n, e.currentTime)
            }

            function k(e) {
                return new Promise((function(t, n) {
                    e.oncomplete = function(e) {
                        return t(e.renderedBuffer)
                    };
                    var i = 3,
                        r = function() {
                            switch (e.startRendering(), e.state) {
                                case "running":
                                    setTimeout((function() {
                                        return n(_("timeout"))
                                    }), 1e3);
                                    break;
                                case "suspended":
                                    document.hidden || i--, i > 0 ? setTimeout(r, 500) : n(_("suspended"))
                            }
                        };
                    r()
                }))
            }

            function S(e) {
                for (var t = 0, n = 4500; n < 5e3; ++n) t += Math.abs(e[n]);
                return t
            }

            function _(e) {
                var t = new Error(e);
                return t.name = e, t
            }
            var I = ["monospace", "sans-serif", "serif"],
                C = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"],
                x = {
                    fontStyle: "normal",
                    fontWeight: "normal",
                    letterSpacing: "normal",
                    lineBreak: "auto",
                    lineHeight: "normal",
                    textTransform: "none",
                    textAlign: "left",
                    textDecoration: "none",
                    textShadow: "none",
                    whiteSpace: "normal",
                    wordBreak: "normal",
                    wordSpacing: "normal",
                    position: "absolute",
                    left: "-9999px",
                    fontSize: "48px"
                };

            function O(e) {
                return e.toDataURL()
            }
            var E = {
                osCpu: function() {
                    return navigator.oscpu
                },
                languages: function() {
                    var e, t = navigator,
                        n = [],
                        i = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
                    if (void 0 !== i && n.push([i]), Array.isArray(t.languages)) m() && f([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || n.push(t.languages);
                    else if ("string" == typeof t.languages) {
                        var r = t.languages;
                        r && n.push(r.split(","))
                    }
                    return n
                },
                colorDepth: function() {
                    return window.screen.colorDepth
                },
                deviceMemory: function() {
                    return e = p(navigator.deviceMemory), t = void 0, "number" == typeof e && isNaN(e) ? t : e;
                    var e, t
                },
                screenResolution: function() {
                    var e = screen,
                        t = [d(e.width), d(e.height)];
                    return t.sort().reverse(), t
                },
                availableScreenResolution: function() {
                    var e = screen;
                    if (e.availWidth && e.availHeight) {
                        var t = [d(e.availWidth), d(e.availHeight)];
                        return t.sort().reverse(), t
                    }
                },
                hardwareConcurrency: function() {
                    try {
                        var e = d(navigator.hardwareConcurrency);
                        return isNaN(e) ? 1 : e
                    } catch (e) {
                        return 1
                    }
                },
                timezoneOffset: function() {
                    var e = (new Date).getFullYear();
                    return Math.max(p(new Date(e, 0, 1).getTimezoneOffset()), p(new Date(e, 6, 1).getTimezoneOffset()))
                },
                timezone: function() {
                    var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
                    if (t) return (new t).resolvedOptions().timeZone
                },
                sessionStorage: function() {
                    try {
                        return !!window.sessionStorage
                    } catch (e) {
                        return !0
                    }
                },
                localStorage: function() {
                    try {
                        return !!window.localStorage
                    } catch (e) {
                        return !0
                    }
                },
                indexedDB: function() {
                    if (!h() && !v()) try {
                        return !!window.indexedDB
                    } catch (e) {
                        return !0
                    }
                },
                openDatabase: function() {
                    return !!window.openDatabase
                },
                cpuClass: function() {
                    return navigator.cpuClass
                },
                platform: function() {
                    return navigator.platform
                },
                plugins: function() {
                    if (h()) return [];
                    if (navigator.plugins) {
                        for (var e = [], t = 0; t < navigator.plugins.length; ++t) {
                            var n = navigator.plugins[t];
                            if (n) {
                                for (var i = [], r = 0; r < n.length; ++r) {
                                    var o = n[r];
                                    i.push({
                                        type: o.type,
                                        suffixes: o.suffixes
                                    })
                                }
                                e.push({
                                    name: n.name,
                                    description: n.description,
                                    mimeTypes: i
                                })
                            }
                        }
                        return e
                    }
                },
                canvas: function() {
                    var e = function() {
                            var e = document.createElement("canvas");
                            return e.width = 240, e.height = 140, e.style.display = "inline", [e, e.getContext("2d")]
                        }(),
                        t = e[0],
                        n = e[1];
                    if (! function(e, t) {
                            return !(!t || !e.toDataURL)
                        }(t, n)) return {
                        winding: !1,
                        data: ""
                    };
                    n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6);
                    var i = !n.isPointInPath(5, 5, "evenodd");
                    n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.font = "11pt no-real-font-123";
                    var r = "Cwm fjordbank 😃 gly";
                    return n.fillText(r, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText(r, 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), {
                        winding: i,
                        data: O(t)
                    }
                },
                touchSupport: function() {
                    var e, t = navigator,
                        n = 0;
                    void 0 !== t.maxTouchPoints ? n = d(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (n = t.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"), e = !0
                    } catch (t) {
                        e = !1
                    }
                    return {
                        maxTouchPoints: n,
                        touchEvent: e,
                        touchStart: "ontouchstart" in window
                    }
                },
                fonts: function() {
                    var e = document,
                        t = e.body,
                        n = e.createElement("div"),
                        i = e.createElement("div"),
                        r = {},
                        o = {},
                        a = function() {
                            var t = e.createElement("span");
                            t.textContent = "mmMwWLliI0O&1";
                            for (var n = 0, i = Object.keys(x); n < i.length; n++) {
                                var r = i[n];
                                t.style[r] = x[r]
                            }
                            return t
                        },
                        s = function(e) {
                            return I.some((function(t, n) {
                                return e[n].offsetWidth !== r[t] || e[n].offsetHeight !== o[t]
                            }))
                        },
                        c = I.map((function(e) {
                            var t = a();
                            return t.style.fontFamily = e, n.appendChild(t), t
                        }));
                    t.appendChild(n);
                    for (var u = 0, l = I.length; u < l; u++) r[I[u]] = c[u].offsetWidth, o[I[u]] = c[u].offsetHeight;
                    var d = function() {
                        for (var e = {}, t = function(t) {
                                e[t] = I.map((function(e) {
                                    var n = function(e, t) {
                                        var n = a();
                                        return n.style.fontFamily = "'" + e + "'," + t, n
                                    }(t, e);
                                    return i.appendChild(n), n
                                }))
                            }, n = 0, r = C; n < r.length; n++) {
                            t(r[n])
                        }
                        return e
                    }();
                    t.appendChild(i);
                    for (var p = [], f = 0, h = C.length; f < h; f++) s(d[C[f]]) && p.push(C[f]);
                    return t.removeChild(i), t.removeChild(n), p
                },
                audio: function() {
                    return (0, i.mG)(this, void 0, void 0, (function() {
                        var e, t, n, r, o, a, s;
                        return (0, i.Jh)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    if (e = window, !(t = e.OfflineAudioContext || e.webkitOfflineAudioContext)) return [2, -2];
                                    if (b() && !g() && ! function() {
                                            var e = window;
                                            return f(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
                                        }()) return [2, -1];
                                    n = new t(1, 44100, 44100), (r = n.createOscillator()).type = "triangle", w(n, r.frequency, 1e4), o = n.createDynamicsCompressor(), w(n, o.threshold, -50), w(n, o.knee, 40), w(n, o.ratio, 12), w(n, o.reduction, -20), w(n, o.attack, 0), w(n, o.release, .25), r.connect(o), o.connect(n.destination), r.start(0), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, 4, 5]), [4, k(n)];
                                case 2:
                                    return a = i.sent(), [3, 5];
                                case 3:
                                    if ("timeout" === (s = i.sent()).name || "suspended" === s.name) return [2, -3];
                                    throw s;
                                case 4:
                                    return r.disconnect(), o.disconnect(), [7];
                                case 5:
                                    return [2, S(a.getChannelData(0))]
                            }
                        }))
                    }))
                },
                pluginsSupport: function() {
                    return void 0 !== navigator.plugins
                },
                productSub: function() {
                    return navigator.productSub
                },
                emptyEvalLength: function() {
                    return eval.toString().length
                },
                errorFF: function() {
                    try {
                        throw "a"
                    } catch (e) {
                        try {
                            return e.toSource(), !0
                        } catch (e) {
                            return !1
                        }
                    }
                },
                vendor: function() {
                    return navigator.vendor
                },
                chrome: function() {
                    return void 0 !== window.chrome
                },
                cookiesEnabled: function() {
                    var e = document;
                    try {
                        e.cookie = "cookietest=1; SameSite=Strict;";
                        var t = -1 !== e.cookie.indexOf("cookietest=");
                        return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
                    } catch (e) {
                        return !1
                    }
                }
            };

            function A(e, t, n) {
                return (0, i.mG)(this, void 0, void 0, (function() {
                    var r, o, a, s, c, u, l, d, p;
                    return (0, i.Jh)(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                r = Date.now(), o = {}, a = 0, s = Object.keys(e), f.label = 1;
                            case 1:
                                if (!(a < s.length)) return [3, 7];
                                if (c = s[a], function(e, t) {
                                        for (var n = 0, i = e.length; n < i; ++n)
                                            if (e[n] === t) return !0;
                                        return !1
                                    }(n, c)) return [3, 6];
                                u = void 0, f.label = 2;
                            case 2:
                                return f.trys.push([2, 4, , 5]), p = {}, [4, e[c](t)];
                            case 3:
                                return p.value = f.sent(), u = p, [3, 5];
                            case 4:
                                return l = f.sent(), u = l && "object" == typeof l && "message" in l ? {
                                    error: l
                                } : {
                                    error: {
                                        message: l
                                    }
                                }, [3, 5];
                            case 5:
                                d = Date.now(), o[c] = (0, i.pi)((0, i.pi)({}, u), {
                                    duration: d - r
                                }), r = d, f.label = 6;
                            case 6:
                                return a++, [3, 1];
                            case 7:
                                return [2, o]
                        }
                    }))
                }))
            }

            function j(e) {
                return JSON.stringify(e, (function(e, t) {
                    return t instanceof Error ? (n = t, (0, i.pi)({
                        name: n.name,
                        message: n.message,
                        stack: null === (r = n.stack) || void 0 === r ? void 0 : r.split("\n")
                    }, n)) : t;
                    var n, r
                }), 2)
            }

            function N(e) {
                return l(function(e) {
                    for (var t = "", n = 0, i = Object.keys(e); n < i.length; n++) {
                        var r = i[n],
                            o = e[r],
                            a = o.error ? "error" : JSON.stringify(o.value);
                        t += (t ? "|" : "") + r.replace(/([:|\\])/g, "\\$1") + ":" + a
                    }
                    return t
                }(e))
            }
            var P = function() {
                function e() {}
                return e.prototype.get = function(e) {
                    return void 0 === e && (e = {}), (0, i.mG)(this, void 0, void 0, (function() {
                        var t, n;
                        return (0, i.Jh)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, A(E, void 0, [])];
                                case 1:
                                    return t = i.sent(), n = function(e) {
                                        var t;
                                        return {
                                            components: e,
                                            get visitorId() {
                                                return void 0 === t && (t = N(this.components)), t
                                            },
                                            set visitorId(e) {
                                                t = e
                                            }
                                        }
                                    }(t), e.debug && console.log("Copy the text below to get the debug data:\n\n```\nversion: 3.0.6\nuserAgent: " + navigator.userAgent + "\ngetOptions: " + JSON.stringify(e, void 0, 2) + "\nvisitorId: " + n.visitorId + "\ncomponents: " + j(t) + "\n```"), [2, n]
                            }
                        }))
                    }))
                }, e
            }();

            function T(e) {
                var t = (void 0 === e ? {} : e).delayFallback,
                    n = void 0 === t ? 50 : t;
                return (0, i.mG)(this, void 0, void 0, (function() {
                    return (0, i.Jh)(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, (t = n, i = 2 * n, void 0 === i && (i = 1 / 0), new Promise((function(e) {
                                    var n = window.requestIdleCallback;
                                    n ? n((function() {
                                        return e()
                                    }), {
                                        timeout: i
                                    }) : setTimeout(e, Math.min(t, i))
                                })))];
                            case 1:
                                return e.sent(), [2, new P]
                        }
                        var t, i
                    }))
                }))
            }
            var R = {
                    load: T,
                    hashComponents: N,
                    componentsToDebugString: j
                },
                D = l;
            t.default = R
        },
        3279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                componentsToDebugString: function() {
                    return ae
                },
                default: function() {
                    return de
                },
                getFullscreenElement: function() {
                    return P
                },
                getScreenFrame: function() {
                    return Z
                },
                hashComponents: function() {
                    return se
                },
                isAndroid: function() {
                    return T
                },
                isChromium: function() {
                    return E
                },
                isDesktopSafari: function() {
                    return j
                },
                isEdgeHTML: function() {
                    return O
                },
                isGecko: function() {
                    return N
                },
                isTrident: function() {
                    return x
                },
                isWebKit: function() {
                    return A
                },
                load: function() {
                    return le
                },
                loadSources: function() {
                    return I
                },
                murmurX64Hash128: function() {
                    return pe
                },
                prepareForSources: function() {
                    return ce
                },
                sources: function() {
                    return ie
                },
                transformSource: function() {
                    return C
                },
                withIframe: function() {
                    return D
                }
            });
            var i = n(7582),
                r = "3.4.2";

            function o(e, t) {
                return new Promise((function(n) {
                    return setTimeout(n, e, t)
                }))
            }

            function a(e) {
                return !!e && "function" == typeof e.then
            }

            function s(e, t) {
                try {
                    var n = e();
                    a(n) ? n.then((function(e) {
                        return t(!0, e)
                    }), (function(e) {
                        return t(!1, e)
                    })) : t(!0, n)
                } catch (e) {
                    t(!1, e)
                }
            }

            function c(e, t, n) {
                return void 0 === n && (n = 16), (0, i.mG)(this, void 0, void 0, (function() {
                    var r, a, s, c;
                    return (0, i.Jh)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                r = Array(e.length), a = Date.now(), s = 0, i.label = 1;
                            case 1:
                                return s < e.length ? (r[s] = t(e[s], s), (c = Date.now()) >= a + n ? (a = c, [4, o(0)]) : [3, 3]) : [3, 4];
                            case 2:
                                i.sent(), i.label = 3;
                            case 3:
                                return ++s, [3, 1];
                            case 4:
                                return [2, r]
                        }
                    }))
                }))
            }

            function u(e) {
                e.then(void 0, (function() {}))
            }

            function l(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }

            function d(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }

            function p(e, t) {
                return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
            }

            function f(e, t) {
                return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
            }

            function h(e, t) {
                return [e[0] ^ t[0], e[1] ^ t[1]]
            }

            function v(e) {
                return e = h(e, [0, e[0] >>> 1]), e = h(e = d(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), e = h(e = d(e, [3301882366, 444984403]), [0, e[0] >>> 1])
            }

            function m(e, t) {
                t = t || 0;
                var n, i = (e = e || "").length % 16,
                    r = e.length - i,
                    o = [0, t],
                    a = [0, t],
                    s = [0, 0],
                    c = [0, 0],
                    u = [2277735313, 289559509],
                    m = [1291169091, 658871167];
                for (n = 0; n < r; n += 16) s = [255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24, 255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24], c = [255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24, 255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24], s = p(s = d(s, u), 31), o = l(o = p(o = h(o, s = d(s, m)), 27), a), o = l(d(o, [0, 5]), [0, 1390208809]), c = p(c = d(c, m), 33), a = l(a = p(a = h(a, c = d(c, u)), 31), o), a = l(d(a, [0, 5]), [0, 944331445]);
                switch (s = [0, 0], c = [0, 0], i) {
                    case 15:
                        c = h(c, f([0, e.charCodeAt(n + 14)], 48));
                    case 14:
                        c = h(c, f([0, e.charCodeAt(n + 13)], 40));
                    case 13:
                        c = h(c, f([0, e.charCodeAt(n + 12)], 32));
                    case 12:
                        c = h(c, f([0, e.charCodeAt(n + 11)], 24));
                    case 11:
                        c = h(c, f([0, e.charCodeAt(n + 10)], 16));
                    case 10:
                        c = h(c, f([0, e.charCodeAt(n + 9)], 8));
                    case 9:
                        c = d(c = h(c, [0, e.charCodeAt(n + 8)]), m), a = h(a, c = d(c = p(c, 33), u));
                    case 8:
                        s = h(s, f([0, e.charCodeAt(n + 7)], 56));
                    case 7:
                        s = h(s, f([0, e.charCodeAt(n + 6)], 48));
                    case 6:
                        s = h(s, f([0, e.charCodeAt(n + 5)], 40));
                    case 5:
                        s = h(s, f([0, e.charCodeAt(n + 4)], 32));
                    case 4:
                        s = h(s, f([0, e.charCodeAt(n + 3)], 24));
                    case 3:
                        s = h(s, f([0, e.charCodeAt(n + 2)], 16));
                    case 2:
                        s = h(s, f([0, e.charCodeAt(n + 1)], 8));
                    case 1:
                        s = d(s = h(s, [0, e.charCodeAt(n)]), u), o = h(o, s = d(s = p(s, 31), m))
                }
                return o = l(o = h(o, [0, e.length]), a = h(a, [0, e.length])), a = l(a, o), o = l(o = v(o), a = v(a)), a = l(a, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
            }

            function b(e) {
                return parseInt(e)
            }

            function g(e) {
                return parseFloat(e)
            }

            function y(e, t) {
                return "number" == typeof e && isNaN(e) ? t : e
            }

            function w(e) {
                return e.reduce((function(e, t) {
                    return e + (t ? 1 : 0)
                }), 0)
            }

            function k(e, t) {
                if (void 0 === t && (t = 1), Math.abs(t) >= 1) return Math.round(e / t) * t;
                var n = 1 / t;
                return Math.round(e * n) / n
            }

            function S(e) {
                return e && "object" == typeof e && "message" in e ? e : {
                    message: e
                }
            }

            function _(e) {
                return "function" != typeof e
            }

            function I(e, t, n) {
                var r = Object.keys(e).filter((function(e) {
                        return ! function(e, t) {
                            for (var n = 0, i = e.length; n < i; ++n)
                                if (e[n] === t) return !0;
                            return !1
                        }(n, e)
                    })),
                    o = c(r, (function(n) {
                        return function(e, t) {
                            var n = new Promise((function(n) {
                                var i = Date.now();
                                s(e.bind(null, t), (function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var r = Date.now() - i;
                                    if (!e[0]) return n((function() {
                                        return {
                                            error: S(e[1]),
                                            duration: r
                                        }
                                    }));
                                    var o = e[1];
                                    if (_(o)) return n((function() {
                                        return {
                                            value: o,
                                            duration: r
                                        }
                                    }));
                                    n((function() {
                                        return new Promise((function(e) {
                                            var t = Date.now();
                                            s(o, (function() {
                                                for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                                                var o = r + Date.now() - t;
                                                if (!n[0]) return e({
                                                    error: S(n[1]),
                                                    duration: o
                                                });
                                                e({
                                                    value: n[1],
                                                    duration: o
                                                })
                                            }))
                                        }))
                                    }))
                                }))
                            }));
                            return u(n),
                                function() {
                                    return n.then((function(e) {
                                        return e()
                                    }))
                                }
                        }(e[n], t)
                    }));
                return u(o),
                    function() {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            var e, t, n, a;
                            return (0, i.Jh)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, o];
                                    case 1:
                                        return [4, c(i.sent(), (function(e) {
                                            var t = e();
                                            return u(t), t
                                        }))];
                                    case 2:
                                        return e = i.sent(), [4, Promise.all(e)];
                                    case 3:
                                        for (t = i.sent(), n = {}, a = 0; a < r.length; ++a) n[r[a]] = t[a];
                                        return [2, n]
                                }
                            }))
                        }))
                    }
            }

            function C(e, t) {
                var n = function(e) {
                    return _(e) ? t(e) : function() {
                        var n = e();
                        return a(n) ? n.then(t) : t(n)
                    }
                };
                return function(t) {
                    var i = e(t);
                    return a(i) ? i.then(n) : n(i)
                }
            }

            function x() {
                var e = window,
                    t = navigator;
                return w(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
            }

            function O() {
                var e = window,
                    t = navigator;
                return w(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !x()
            }

            function E() {
                var e = window,
                    t = navigator;
                return w(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
            }

            function A() {
                var e = window,
                    t = navigator;
                return w(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates" in t, "WebKitMediaKeys" in e]) >= 4
            }

            function j() {
                var e = window;
                return w(["safari" in e, !("DeviceMotionEvent" in e), !("ongestureend" in e), !("standalone" in navigator)]) >= 3
            }

            function N() {
                var e, t, n = window;
                return w(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4
            }

            function P() {
                var e = document;
                return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
            }

            function T() {
                var e = E(),
                    t = N();
                if (!e && !t) return !1;
                var n = window;
                return w(["onorientationchange" in n, "orientation" in n, e && !("SharedWorker" in n), t && /android/i.test(navigator.appVersion)]) >= 2
            }

            function R(e) {
                var t = new Error(e);
                return t.name = e, t
            }

            function D(e, t, n) {
                var r, a, s;
                return void 0 === n && (n = 50), (0, i.mG)(this, void 0, void 0, (function() {
                    var c, u;
                    return (0, i.Jh)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                c = document, i.label = 1;
                            case 1:
                                return c.body ? [3, 3] : [4, o(n)];
                            case 2:
                                return i.sent(), [3, 1];
                            case 3:
                                u = c.createElement("iframe"), i.label = 4;
                            case 4:
                                return i.trys.push([4, , 10, 11]), [4, new Promise((function(e, n) {
                                    var i = !1,
                                        r = function() {
                                            i = !0, e()
                                        };
                                    u.onload = r, u.onerror = function(e) {
                                        i = !0, n(e)
                                    };
                                    var o = u.style;
                                    o.setProperty("display", "block", "important"), o.position = "absolute", o.top = "0", o.left = "0", o.visibility = "hidden", t && "srcdoc" in u ? u.srcdoc = t : u.src = "about:blank", c.body.appendChild(u);
                                    var a = function() {
                                        var e, t;
                                        i || ("complete" === (null === (t = null === (e = u.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? r() : setTimeout(a, 10))
                                    };
                                    a()
                                }))];
                            case 5:
                                i.sent(), i.label = 6;
                            case 6:
                                return (null === (a = null === (r = u.contentWindow) || void 0 === r ? void 0 : r.document) || void 0 === a ? void 0 : a.body) ? [3, 8] : [4, o(n)];
                            case 7:
                                return i.sent(), [3, 6];
                            case 8:
                                return [4, e(u, u.contentWindow)];
                            case 9:
                                return [2, i.sent()];
                            case 10:
                                return null === (s = u.parentNode) || void 0 === s || s.removeChild(u), [7];
                            case 11:
                                return [2]
                        }
                    }))
                }))
            }

            function L(e) {
                for (var t = function(e) {
                        for (var t, n, i = "Unexpected syntax '".concat(e, "'"), r = /^\s*([a-z-]*)(.*)$/i.exec(e), o = r[1] || void 0, a = {}, s = /([.:#][\w-]+|\[.+?\])/gi, c = function(e, t) {
                                a[e] = a[e] || [], a[e].push(t)
                            };;) {
                            var u = s.exec(r[2]);
                            if (!u) break;
                            var l = u[0];
                            switch (l[0]) {
                                case ".":
                                    c("class", l.slice(1));
                                    break;
                                case "#":
                                    c("id", l.slice(1));
                                    break;
                                case "[":
                                    var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);
                                    if (!d) throw new Error(i);
                                    c(d[1], null !== (n = null !== (t = d[4]) && void 0 !== t ? t : d[5]) && void 0 !== n ? n : "");
                                    break;
                                default:
                                    throw new Error(i)
                            }
                        }
                        return [o, a]
                    }(e), n = t[0], i = t[1], r = document.createElement(null != n ? n : "div"), o = 0, a = Object.keys(i); o < a.length; o++) {
                    var s = a[o],
                        c = i[s].join(" ");
                    "style" === s ? M(r.style, c) : r.setAttribute(s, c)
                }
                return r
            }

            function M(e, t) {
                for (var n = 0, i = t.split(";"); n < i.length; n++) {
                    var r = i[n],
                        o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(r);
                    if (o) {
                        var a = o[1],
                            s = o[2],
                            c = o[4];
                        e.setProperty(a, s, c || "")
                    }
                }
            }
            var U = ["monospace", "sans-serif", "serif"],
                V = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

            function F(e) {
                return e.toDataURL()
            }
            var W, q, G = 2500;

            function Z() {
                var e = this;
                return function() {
                        if (void 0 === q) {
                            var e = function() {
                                var t = z();
                                B(t) ? q = setTimeout(e, G) : (W = t, q = void 0)
                            };
                            e()
                        }
                    }(),
                    function() {
                        return (0, i.mG)(e, void 0, void 0, (function() {
                            var e;
                            return (0, i.Jh)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return B(e = z()) ? W ? [2, (0, i.ev)([], W, !0)] : P() ? [4, (n = document, (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n))] : [3, 2] : [3, 2];
                                    case 1:
                                        t.sent(), e = z(), t.label = 2;
                                    case 2:
                                        return B(e) || (W = e), [2, e]
                                }
                                var n
                            }))
                        }))
                    }
            }

            function z() {
                var e = screen;
                return [y(g(e.availTop), null), y(g(e.width) - g(e.availWidth) - y(g(e.availLeft), 0), null), y(g(e.height) - g(e.availHeight) - y(g(e.availTop), 0), null), y(g(e.availLeft), null)]
            }

            function B(e) {
                for (var t = 0; t < 4; ++t)
                    if (e[t]) return !1;
                return !0
            }

            function J(e) {
                var t;
                return (0, i.mG)(this, void 0, void 0, (function() {
                    var n, r, a, s, c, u, l;
                    return (0, i.Jh)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                for (n = document, r = n.createElement("div"), a = new Array(e.length), s = {}, X(r), l = 0; l < e.length; ++l) "DIALOG" === (c = L(e[l])).tagName && c.show(), X(u = n.createElement("div")), u.appendChild(c), r.appendChild(u), a[l] = c;
                                i.label = 1;
                            case 1:
                                return n.body ? [3, 3] : [4, o(50)];
                            case 2:
                                return i.sent(), [3, 1];
                            case 3:
                                n.body.appendChild(r);
                                try {
                                    for (l = 0; l < e.length; ++l) a[l].offsetParent || (s[e[l]] = !0)
                                } finally {
                                    null === (t = r.parentNode) || void 0 === t || t.removeChild(r)
                                }
                                return [2, s]
                        }
                    }))
                }))
            }

            function X(e) {
                e.style.setProperty("display", "block", "important")
            }

            function H(e) {
                return matchMedia("(inverted-colors: ".concat(e, ")")).matches
            }

            function Y(e) {
                return matchMedia("(forced-colors: ".concat(e, ")")).matches
            }

            function K(e) {
                return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
            }

            function $(e) {
                return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
            }

            function Q(e) {
                return matchMedia("(dynamic-range: ".concat(e, ")")).matches
            }
            var ee = Math,
                te = function() {
                    return 0
                };
            var ne = {
                default: [],
                apple: [{
                    font: "-apple-system-body"
                }],
                serif: [{
                    fontFamily: "serif"
                }],
                sans: [{
                    fontFamily: "sans-serif"
                }],
                mono: [{
                    fontFamily: "monospace"
                }],
                min: [{
                    fontSize: "1px"
                }],
                system: [{
                    fontFamily: "system-ui"
                }]
            };
            var ie = {
                fonts: function() {
                    return D((function(e, t) {
                        var n = t.document,
                            i = n.body;
                        i.style.fontSize = "48px";
                        var r = n.createElement("div"),
                            o = {},
                            a = {},
                            s = function(e) {
                                var t = n.createElement("span"),
                                    i = t.style;
                                return i.position = "absolute", i.top = "0", i.left = "0", i.fontFamily = e, t.textContent = "mmMwWLliI0O&1", r.appendChild(t), t
                            },
                            c = U.map(s),
                            u = function() {
                                for (var e = {}, t = function(t) {
                                        e[t] = U.map((function(e) {
                                            return function(e, t) {
                                                return s("'".concat(e, "',").concat(t))
                                            }(t, e)
                                        }))
                                    }, n = 0, i = V; n < i.length; n++) {
                                    t(i[n])
                                }
                                return e
                            }();
                        i.appendChild(r);
                        for (var l = 0; l < U.length; l++) o[U[l]] = c[l].offsetWidth, a[U[l]] = c[l].offsetHeight;
                        return V.filter((function(e) {
                            return t = u[e], U.some((function(e, n) {
                                return t[n].offsetWidth !== o[e] || t[n].offsetHeight !== a[e]
                            }));
                            var t
                        }))
                    }))
                },
                domBlockers: function(e) {
                    var t = (void 0 === e ? {} : e).debug;
                    return (0, i.mG)(this, void 0, void 0, (function() {
                        var e, n, r, o, a;
                        return (0, i.Jh)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return A() || T() ? (s = atob, e = {
                                        abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', s("I0JveC1CYW5uZXItYWRz")],
                                        abpvn: [".quangcao", "#mobileCatfish", s("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                                        adBlockFinland: [".mainostila", s("LnNwb25zb3JpdA=="), ".ylamainos", s("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                                        adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", s("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                                        adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", s("LmhlYWRlci1ibG9ja2VkLWFk"), s("I2FkX2Jsb2NrZXI=")],
                                        adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                                        adGuardBase: [".BetterJsPopOverlay", s("I2FkXzMwMFgyNTA="), s("I2Jhbm5lcmZsb2F0MjI="), s("I2NhbXBhaWduLWJhbm5lcg=="), s("I0FkLUNvbnRlbnQ=")],
                                        adGuardChinese: [s("LlppX2FkX2FfSA=="), s("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", s("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), s("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                                        adGuardFrench: ["#pavePub", s("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", s("LmFkc19iYW4=")],
                                        adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                                        adGuardJapanese: ["#kauli_yad_1", s("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), s("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), s("LmFkZ29vZ2xl"), s("Ll9faXNib29zdFJldHVybkFk")],
                                        adGuardMobile: [s("YW1wLWF1dG8tYWRz"), s("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", s("I2FkX2ludmlld19hcmVh")],
                                        adGuardRussian: [s("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), s("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', s("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                                        adGuardSocial: [s("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), s("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                                        adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                                        adGuardTrackingProtection: ["#qoo-counter", s("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), s("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), s("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                                        adGuardTurkish: ["#backkapat", s("I3Jla2xhbWk="), s("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), s("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), s("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                                        bulgarian: [s("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                                        easyList: [".yb-floorad", s("LndpZGdldF9wb19hZHNfd2lkZ2V0"), s("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", s("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                                        easyListChina: [s("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), s("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                                        easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", s("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                                        easyListCzechSlovak: ["#onlajny-stickers", s("I3Jla2xhbW5pLWJveA=="), s("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", s("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                                        easyListDutch: [s("I2FkdmVydGVudGll"), s("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", s("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                                        easyListGermany: ["#SSpotIMPopSlider", s("LnNwb25zb3JsaW5rZ3J1ZW4="), s("I3dlcmJ1bmdza3k="), s("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), s("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                                        easyListItaly: [s("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", s("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                                        easyListLithuania: [s("LnJla2xhbW9zX3RhcnBhcw=="), s("LnJla2xhbW9zX251b3JvZG9z"), s("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), s("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), s("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                                        estonian: [s("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                                        fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                                        fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                                        fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                                        fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                                        frellwitSwedish: [s("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), s("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", s("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                                        greekAdBlock: [s("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), s("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), s("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                                        hungarian: ["#cemp_doboz", ".optimonk-iframe-container", s("LmFkX19tYWlu"), s("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                                        iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                                        icelandicAbp: [s("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                                        latvian: [s("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), s("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                                        listKr: [s("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), s("I2xpdmVyZUFkV3JhcHBlcg=="), s("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), s("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                                        listeAr: [s("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", s("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), s("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), s("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                                        listeFr: [s("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), s("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), s("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                                        officialPolish: ["#ceneo-placeholder-ceneo-12", s("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), s("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), s("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), s("ZGl2I3NrYXBpZWNfYWQ=")],
                                        ro: [s("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), s("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), s("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                                        ruAd: [s("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), s("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), s("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                                        thaiAds: ["a[href*=macau-uta-popup]", s("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), s("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                                        webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", s("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                                    }, n = Object.keys(e), [4, J((a = []).concat.apply(a, n.map((function(t) {
                                        return e[t]
                                    }))))]) : [2, void 0];
                                case 1:
                                    return r = i.sent(), t && function(e, t) {
                                        for (var n = "DOM blockers debug:\n```", i = 0, r = Object.keys(e); i < r.length; i++) {
                                            var o = r[i];
                                            n += "\n".concat(o, ":");
                                            for (var a = 0, s = e[o]; a < s.length; a++) {
                                                var c = s[a];
                                                n += "\n  ".concat(t[c] ? "🚫" : "➡️", " ").concat(c)
                                            }
                                        }
                                        console.log("".concat(n, "\n```"))
                                    }(e, r), (o = n.filter((function(t) {
                                        var n = e[t];
                                        return w(n.map((function(e) {
                                            return r[e]
                                        }))) > .6 * n.length
                                    }))).sort(), [2, o]
                            }
                            var s
                        }))
                    }))
                },
                fontPreferences: function() {
                    return function(e, t) {
                        void 0 === t && (t = 4e3);
                        return D((function(n, r) {
                            var o = r.document,
                                a = o.body,
                                s = a.style;
                            s.width = "".concat(t, "px"), s.webkitTextSizeAdjust = s.textSizeAdjust = "none", E() ? a.style.zoom = "".concat(1 / r.devicePixelRatio) : A() && (a.style.zoom = "reset");
                            var c = o.createElement("div");
                            return c.textContent = (0, i.ev)([], Array(t / 20 << 0), !0).map((function() {
                                return "word"
                            })).join(" "), a.appendChild(c), e(o, a)
                        }), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
                    }((function(e, t) {
                        for (var n = {}, i = {}, r = 0, o = Object.keys(ne); r < o.length; r++) {
                            var a = o[r],
                                s = ne[a],
                                c = s[0],
                                u = void 0 === c ? {} : c,
                                l = s[1],
                                d = void 0 === l ? "mmMwWLliI0fiflO&1" : l,
                                p = e.createElement("span");
                            p.textContent = d, p.style.whiteSpace = "nowrap";
                            for (var f = 0, h = Object.keys(u); f < h.length; f++) {
                                var v = h[f],
                                    m = u[v];
                                void 0 !== m && (p.style[v] = m)
                            }
                            n[a] = p, t.appendChild(e.createElement("br")), t.appendChild(p)
                        }
                        for (var b = 0, g = Object.keys(ne); b < g.length; b++) {
                            i[a = g[b]] = n[a].getBoundingClientRect().width
                        }
                        return i
                    }))
                },
                audio: function() {
                    var e = window,
                        t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
                    if (!t) return -2;
                    if (A() && !j() && ! function() {
                            var e = window;
                            return w(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
                        }()) return -1;
                    var n = new t(1, 5e3, 44100),
                        i = n.createOscillator();
                    i.type = "triangle", i.frequency.value = 1e4;
                    var r = n.createDynamicsCompressor();
                    r.threshold.value = -50, r.knee.value = 40, r.ratio.value = 12, r.attack.value = 0, r.release.value = .25, i.connect(r), r.connect(n.destination), i.start(0);
                    var o = function(e) {
                            var t = 3,
                                n = 500,
                                i = 500,
                                r = 5e3,
                                o = function() {},
                                s = new Promise((function(s, c) {
                                    var l = !1,
                                        d = 0,
                                        p = 0;
                                    e.oncomplete = function(e) {
                                        return s(e.renderedBuffer)
                                    };
                                    var f = function() {
                                            setTimeout((function() {
                                                return c(R("timeout"))
                                            }), Math.min(i, p + r - Date.now()))
                                        },
                                        h = function() {
                                            try {
                                                var i = e.startRendering();
                                                switch (a(i) && u(i), e.state) {
                                                    case "running":
                                                        p = Date.now(), l && f();
                                                        break;
                                                    case "suspended":
                                                        document.hidden || d++, l && d >= t ? c(R("suspended")) : setTimeout(h, n)
                                                }
                                            } catch (e) {
                                                c(e)
                                            }
                                        };
                                    h(), o = function() {
                                        l || (l = !0, p > 0 && f())
                                    }
                                }));
                            return [s, o]
                        }(n),
                        s = o[0],
                        c = o[1],
                        l = s.then((function(e) {
                            return function(e) {
                                for (var t = 0, n = 0; n < e.length; ++n) t += Math.abs(e[n]);
                                return t
                            }(e.getChannelData(0).subarray(4500))
                        }), (function(e) {
                            if ("timeout" === e.name || "suspended" === e.name) return -3;
                            throw e
                        }));
                    return u(l),
                        function() {
                            return c(), l
                        }
                },
                screenFrame: function() {
                    var e = this,
                        t = Z();
                    return function() {
                        return (0, i.mG)(e, void 0, void 0, (function() {
                            var e, n;
                            return (0, i.Jh)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, t()];
                                    case 1:
                                        return e = i.sent(), [2, [(n = function(e) {
                                            return null === e ? null : k(e, 10)
                                        })(e[0]), n(e[1]), n(e[2]), n(e[3])]]
                                }
                            }))
                        }))
                    }
                },
                osCpu: function() {
                    return navigator.oscpu
                },
                languages: function() {
                    var e, t = navigator,
                        n = [],
                        i = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
                    if (void 0 !== i && n.push([i]), Array.isArray(t.languages)) E() && w([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || n.push(t.languages);
                    else if ("string" == typeof t.languages) {
                        var r = t.languages;
                        r && n.push(r.split(","))
                    }
                    return n
                },
                colorDepth: function() {
                    return window.screen.colorDepth
                },
                deviceMemory: function() {
                    return y(g(navigator.deviceMemory), void 0)
                },
                screenResolution: function() {
                    var e = screen,
                        t = function(e) {
                            return y(b(e), null)
                        },
                        n = [t(e.width), t(e.height)];
                    return n.sort().reverse(), n
                },
                hardwareConcurrency: function() {
                    return y(b(navigator.hardwareConcurrency), void 0)
                },
                timezone: function() {
                    var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
                    if (t) {
                        var n = (new t).resolvedOptions().timeZone;
                        if (n) return n
                    }
                    var i, r = (i = (new Date).getFullYear(), -Math.max(g(new Date(i, 0, 1).getTimezoneOffset()), g(new Date(i, 6, 1).getTimezoneOffset())));
                    return "UTC".concat(r >= 0 ? "+" : "").concat(Math.abs(r))
                },
                sessionStorage: function() {
                    try {
                        return !!window.sessionStorage
                    } catch (e) {
                        return !0
                    }
                },
                localStorage: function() {
                    try {
                        return !!window.localStorage
                    } catch (e) {
                        return !0
                    }
                },
                indexedDB: function() {
                    if (!x() && !O()) try {
                        return !!window.indexedDB
                    } catch (e) {
                        return !0
                    }
                },
                openDatabase: function() {
                    return !!window.openDatabase
                },
                cpuClass: function() {
                    return navigator.cpuClass
                },
                platform: function() {
                    var e = navigator.platform;
                    return "MacIntel" === e && A() && !j() ? function() {
                        if ("iPad" === navigator.platform) return !0;
                        var e = screen,
                            t = e.width / e.height;
                        return w(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
                    }() ? "iPad" : "iPhone" : e
                },
                plugins: function() {
                    var e = navigator.plugins;
                    if (e) {
                        for (var t = [], n = 0; n < e.length; ++n) {
                            var i = e[n];
                            if (i) {
                                for (var r = [], o = 0; o < i.length; ++o) {
                                    var a = i[o];
                                    r.push({
                                        type: a.type,
                                        suffixes: a.suffixes
                                    })
                                }
                                t.push({
                                    name: i.name,
                                    description: i.description,
                                    mimeTypes: r
                                })
                            }
                        }
                        return t
                    }
                },
                canvas: function() {
                    var e, t, n = !1,
                        i = function() {
                            var e = document.createElement("canvas");
                            return e.width = 1, e.height = 1, [e, e.getContext("2d")]
                        }(),
                        r = i[0],
                        o = i[1];
                    if (function(e, t) {
                            return !(!t || !e.toDataURL)
                        }(r, o)) {
                        n = function(e) {
                                return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
                            }(o),
                            function(e, t) {
                                e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
                                var n = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                                t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45)
                            }(r, o);
                        var a = F(r);
                        a !== F(r) ? e = t = "unstable" : (t = a, function(e, t) {
                            e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
                            for (var n = 0, i = [
                                    ["#f2f", 40, 40],
                                    ["#2ff", 80, 40],
                                    ["#ff2", 60, 80]
                                ]; n < i.length; n++) {
                                var r = i[n],
                                    o = r[0],
                                    a = r[1],
                                    s = r[2];
                                t.fillStyle = o, t.beginPath(), t.arc(a, s, 40, 0, 2 * Math.PI, !0), t.closePath(), t.fill()
                            }
                            t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, 2 * Math.PI, !0), t.arc(60, 60, 20, 0, 2 * Math.PI, !0), t.fill("evenodd")
                        }(r, o), e = F(r))
                    } else e = t = "";
                    return {
                        winding: n,
                        geometry: e,
                        text: t
                    }
                },
                touchSupport: function() {
                    var e, t = navigator,
                        n = 0;
                    void 0 !== t.maxTouchPoints ? n = b(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (n = t.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"), e = !0
                    } catch (t) {
                        e = !1
                    }
                    return {
                        maxTouchPoints: n,
                        touchEvent: e,
                        touchStart: "ontouchstart" in window
                    }
                },
                vendor: function() {
                    return navigator.vendor || ""
                },
                vendorFlavors: function() {
                    for (var e = [], t = 0, n = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < n.length; t++) {
                        var i = n[t],
                            r = window[i];
                        r && "object" == typeof r && e.push(i)
                    }
                    return e.sort()
                },
                cookiesEnabled: function() {
                    var e = document;
                    try {
                        e.cookie = "cookietest=1; SameSite=Strict;";
                        var t = -1 !== e.cookie.indexOf("cookietest=");
                        return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
                    } catch (e) {
                        return !1
                    }
                },
                colorGamut: function() {
                    for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
                        var n = t[e];
                        if (matchMedia("(color-gamut: ".concat(n, ")")).matches) return n
                    }
                },
                invertedColors: function() {
                    return !!H("inverted") || !H("none") && void 0
                },
                forcedColors: function() {
                    return !!Y("active") || !Y("none") && void 0
                },
                monochrome: function() {
                    if (matchMedia("(min-monochrome: 0)").matches) {
                        for (var e = 0; e <= 100; ++e)
                            if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
                        throw new Error("Too high value")
                    }
                },
                contrast: function() {
                    return K("no-preference") ? 0 : K("high") || K("more") ? 1 : K("low") || K("less") ? -1 : K("forced") ? 10 : void 0
                },
                reducedMotion: function() {
                    return !!$("reduce") || !$("no-preference") && void 0
                },
                hdr: function() {
                    return !!Q("high") || !Q("standard") && void 0
                },
                math: function() {
                    var e, t = ee.acos || te,
                        n = ee.acosh || te,
                        i = ee.asin || te,
                        r = ee.asinh || te,
                        o = ee.atanh || te,
                        a = ee.atan || te,
                        s = ee.sin || te,
                        c = ee.sinh || te,
                        u = ee.cos || te,
                        l = ee.cosh || te,
                        d = ee.tan || te,
                        p = ee.tanh || te,
                        f = ee.exp || te,
                        h = ee.expm1 || te,
                        v = ee.log1p || te;
                    return {
                        acos: t(.12312423423423424),
                        acosh: n(1e308),
                        acoshPf: (e = 1e154, ee.log(e + ee.sqrt(e * e - 1))),
                        asin: i(.12312423423423424),
                        asinh: r(1),
                        asinhPf: function(e) {
                            return ee.log(e + ee.sqrt(e * e + 1))
                        }(1),
                        atanh: o(.5),
                        atanhPf: function(e) {
                            return ee.log((1 + e) / (1 - e)) / 2
                        }(.5),
                        atan: a(.5),
                        sin: s(-1e300),
                        sinh: c(1),
                        sinhPf: function(e) {
                            return ee.exp(e) - 1 / ee.exp(e) / 2
                        }(1),
                        cos: u(10.000000000123),
                        cosh: l(1),
                        coshPf: function(e) {
                            return (ee.exp(e) + 1 / ee.exp(e)) / 2
                        }(1),
                        tan: d(-1e300),
                        tanh: p(1),
                        tanhPf: function(e) {
                            return (ee.exp(2 * e) - 1) / (ee.exp(2 * e) + 1)
                        }(1),
                        exp: f(1),
                        expm1: h(1),
                        expm1Pf: function(e) {
                            return ee.exp(e) - 1
                        }(1),
                        log1p: v(10),
                        log1pPf: function(e) {
                            return ee.log(1 + e)
                        }(10),
                        powPI: function(e) {
                            return ee.pow(ee.PI, e)
                        }(-100)
                    }
                },
                videoCard: function() {
                    var e, t = document.createElement("canvas"),
                        n = null !== (e = t.getContext("webgl")) && void 0 !== e ? e : t.getContext("experimental-webgl");
                    if (n && "getExtension" in n) {
                        var i = n.getExtension("WEBGL_debug_renderer_info");
                        if (i) return {
                            vendor: (n.getParameter(i.UNMASKED_VENDOR_WEBGL) || "").toString(),
                            renderer: (n.getParameter(i.UNMASKED_RENDERER_WEBGL) || "").toString()
                        }
                    }
                },
                pdfViewerEnabled: function() {
                    return navigator.pdfViewerEnabled
                },
                architecture: function() {
                    var e = new Float32Array(1),
                        t = new Uint8Array(e.buffer);
                    return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
                }
            };
            var re = "$ if upgrade to Pro: https://fpjs.dev/pro";

            function oe(e) {
                var t = function(e) {
                        if (T()) return .4;
                        if (A()) return j() ? .5 : .3;
                        var t = e.platform.value || "";
                        if (/^Win/.test(t)) return .6;
                        if (/^Mac/.test(t)) return .5;
                        return .7
                    }(e),
                    n = function(e) {
                        return k(.99 + .01 * e, 1e-4)
                    }(t);
                return {
                    score: t,
                    comment: re.replace(/\$/g, "".concat(n))
                }
            }

            function ae(e) {
                return JSON.stringify(e, (function(e, t) {
                    return t instanceof Error ? (n = t, (0, i.pi)({
                        name: n.name,
                        message: n.message,
                        stack: null === (r = n.stack) || void 0 === r ? void 0 : r.split("\n")
                    }, n)) : t;
                    var n, r
                }), 2)
            }

            function se(e) {
                return m(function(e) {
                    for (var t = "", n = 0, i = Object.keys(e).sort(); n < i.length; n++) {
                        var r = i[n],
                            o = e[r],
                            a = o.error ? "error" : JSON.stringify(o.value);
                        t += "".concat(t ? "|" : "").concat(r.replace(/([:|\\])/g, "\\$1"), ":").concat(a)
                    }
                    return t
                }(e))
            }

            function ce(e) {
                return void 0 === e && (e = 50),
                    function(e, t) {
                        void 0 === t && (t = 1 / 0);
                        var n = window.requestIdleCallback;
                        return n ? new Promise((function(e) {
                            return n.call(window, (function() {
                                return e()
                            }), {
                                timeout: t
                            })
                        })) : o(Math.min(e, t))
                    }(e, 2 * e)
            }

            function ue(e, t) {
                var n = Date.now();
                return {
                    get: function(o) {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            var a, s, c;
                            return (0, i.Jh)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return a = Date.now(), [4, e()];
                                    case 1:
                                        return s = i.sent(), c = function(e) {
                                            var t;
                                            return {
                                                get visitorId() {
                                                    return void 0 === t && (t = se(this.components)), t
                                                },
                                                set visitorId(e) {
                                                    t = e
                                                },
                                                confidence: oe(e),
                                                components: e,
                                                version: r
                                            }
                                        }(s), (t || (null == o ? void 0 : o.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(c.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(a - n, "\nvisitorId: ").concat(c.visitorId, "\ncomponents: ").concat(ae(s), "\n```")), [2, c]
                                }
                            }))
                        }))
                    }
                }
            }

            function le(e) {
                var t = void 0 === e ? {} : e,
                    n = t.delayFallback,
                    o = t.debug,
                    a = t.monitoring,
                    s = void 0 === a || a;
                return (0, i.mG)(this, void 0, void 0, (function() {
                    return (0, i.Jh)(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return s && function() {
                                    if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
                                        var e = new XMLHttpRequest;
                                        e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(r, "/npm-monitoring"), !0), e.send()
                                    } catch (e) {
                                        console.error(e)
                                    }
                                }(), [4, ce(n)];
                            case 1:
                                return e.sent(), [2, ue(I(ie, {
                                    debug: o
                                }, []), o)]
                        }
                    }))
                }))
            }
            var de = {
                    load: le,
                    hashComponents: se,
                    componentsToDebugString: ae
                },
                pe = m
        },
        4171: function(e, t, n) {
            "use strict";
            var i;
            n.r(t), n.d(t, {
                    DEFAULT_OPTIONS: function() {
                        return s
                    },
                    default: function() {
                        return We
                    },
                    parseConfig: function() {
                        return c
                    }
                }),
                function(e) {
                    e.IDENTIFY_EVENT = "Identify"
                }(i || (i = {}));
            var r = "AJAX",
                o = "BEACON";

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var s = {
                    apiKey: "",
                    apiEndpoint: "https://iq.afterpay-beta.com/us/v1/event",
                    platform: "Web",
                    transport: "AJAX",
                    trackingOptions: {
                        enableUserAgent: !1,
                        enableUTM: !1,
                        enableFbclid: !1,
                        enableGclid: !1
                    },
                    saveEvents: !1,
                    cookieExpiration: 365,
                    cookieSecure: !1,
                    cookieSameSite: "Lax",
                    domain: location.hostname,
                    cookiePrefix: "apt_pixel",
                    disableCookies: !1
                },
                c = function(e, t) {
                    return t ? function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            })))), i.forEach((function(t) {
                                a(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e, t) : e
                };

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var l = function(e, t) {
                var n = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            })))), i.forEach((function(t) {
                                u(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, t),
                    i = new Blob([JSON.stringify(n)], {
                        type: "application/json"
                    }),
                    r = navigator.sendBeacon(e, i);
                return console.log(r), r
            };

            function d(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }
            var p = "function",
                f = "undefined",
                h = "object",
                v = "string",
                m = "model",
                b = "name",
                g = "type",
                y = "vendor",
                w = "version",
                k = "architecture",
                S = "console",
                _ = "mobile",
                I = "tablet",
                C = "smarttv",
                x = "wearable",
                O = "embedded",
                E = "Amazon",
                A = "Apple",
                j = "ASUS",
                N = "BlackBerry",
                P = "Browser",
                T = "Chrome",
                R = "Firefox",
                D = "Google",
                L = "Huawei",
                M = "LG",
                U = "Microsoft",
                V = "Motorola",
                F = "Opera",
                W = "Samsung",
                q = "Sony",
                G = "Xiaomi",
                Z = "Zebra",
                z = "Facebook",
                B = function(e) {
                    for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                    return t
                },
                J = function(e, t) {
                    return (void 0 === e ? "undefined" : d(e)) === v && -1 !== X(t).indexOf(X(e))
                },
                X = function(e) {
                    return e.toLowerCase()
                },
                H = function(e, t) {
                    if ((void 0 === e ? "undefined" : d(e)) === v) return e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), (void 0 === t ? "undefined" : d(t)) === f ? e : e.substring(0, 275)
                },
                Y = function(e, t) {
                    for (var n, i, r, o, a, s, c = 0; c < t.length && !a;) {
                        var u = t[c],
                            l = t[c + 1];
                        for (n = i = 0; n < u.length && !a;)
                            if (a = u[n++].exec(e))
                                for (r = 0; r < l.length; r++) s = a[++i], (void 0 === (o = l[r]) ? "undefined" : d(o)) === h && o.length > 0 ? 2 === o.length ? d(o[1]) == p ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : 3 === o.length ? d(o[1]) !== p || o[1].exec && o[1].test ? this[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0 : 4 === o.length && (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0) : this[o] = s || void 0;
                        c += 2
                    }
                },
                K = function(e, t) {
                    for (var n in t)
                        if (d(t[n]) === h && t[n].length > 0) {
                            for (var i = 0; i < t[n].length; i++)
                                if (J(t[n][i], e)) return "?" === n ? void 0 : n
                        } else if (J(t[n], e)) return "?" === n ? void 0 : n;
                    return e
                },
                $ = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                },
                Q = {
                    browser: [
                        [/\b(?:crmo|crios)\/([\w\.]+)/i],
                        [w, [b, "Chrome"]],
                        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                        [w, [b, "Edge"]],
                        [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                        [b, w],
                        [/opios[\/ ]+([\w\.]+)/i],
                        [w, [b, F + " Mini"]],
                        [/\bopr\/([\w\.]+)/i],
                        [w, [b, F]],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                        [b, w],
                        [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                        [w, [b, "UC" + P]],
                        [/\bqbcore\/([\w\.]+)/i],
                        [w, [b, "WeChat(Win) Desktop"]],
                        [/micromessenger\/([\w\.]+)/i],
                        [w, [b, "WeChat"]],
                        [/konqueror\/([\w\.]+)/i],
                        [w, [b, "Konqueror"]],
                        [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                        [w, [b, "IE"]],
                        [/yabrowser\/([\w\.]+)/i],
                        [w, [b, "Yandex"]],
                        [/(avast|avg)\/([\w\.]+)/i],
                        [
                            [b, /(.+)/, "$1 Secure " + P], w
                        ],
                        [/\bfocus\/([\w\.]+)/i],
                        [w, [b, R + " Focus"]],
                        [/\bopt\/([\w\.]+)/i],
                        [w, [b, F + " Touch"]],
                        [/coc_coc\w+\/([\w\.]+)/i],
                        [w, [b, "Coc Coc"]],
                        [/dolfin\/([\w\.]+)/i],
                        [w, [b, "Dolphin"]],
                        [/coast\/([\w\.]+)/i],
                        [w, [b, F + " Coast"]],
                        [/miuibrowser\/([\w\.]+)/i],
                        [w, [b, "MIUI " + P]],
                        [/fxios\/([-\w\.]+)/i],
                        [w, [b, R]],
                        [/\bqihu|(qi?ho?o?|360)browser/i],
                        [
                            [b, "360 " + P]
                        ],
                        [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                        [
                            [b, /(.+)/, "$1 " + P], w
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [b, /_/g, " "], w
                        ],
                        [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                        [b, w],
                        [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                        [b],
                        [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                        [
                            [b, z], w
                        ],
                        [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                        [b, w],
                        [/\bgsa\/([\w\.]+) .*safari\//i],
                        [w, [b, "GSA"]],
                        [/headlesschrome(?:\/([\w\.]+)| )/i],
                        [w, [b, T + " Headless"]],
                        [/ wv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [b, T + " WebView"], w
                        ],
                        [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                        [w, [b, "Android " + P]],
                        [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                        [b, w],
                        [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                        [w, [b, "Mobile Safari"]],
                        [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                        [w, b],
                        [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                        [b, [w, K, {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }]],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [b, w],
                        [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                        [
                            [b, "Netscape"], w
                        ],
                        [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                        [w, [b, R + " Reality"]],
                        [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                        [b, w]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                        [
                            [k, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [k, X]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [k, "ia32"]
                        ],
                        [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                        [
                            [k, "arm64"]
                        ],
                        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                        [
                            [k, "armhf"]
                        ],
                        [/windows (ce|mobile); ppc;/i],
                        [
                            [k, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                        [
                            [k, /ower/, "", X]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [k, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                        [
                            [k, X]
                        ]
                    ],
                    device: [
                        [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                        [m, [y, W],
                            [g, I]
                        ],
                        [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                        [m, [y, W],
                            [g, _]
                        ],
                        [/\((ip(?:hone|od)[\w ]*);/i],
                        [m, [y, A],
                            [g, _]
                        ],
                        [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                        [m, [y, A],
                            [g, I]
                        ],
                        [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                        [m, [y, L],
                            [g, I]
                        ],
                        [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                        [m, [y, L],
                            [g, _]
                        ],
                        [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                        [
                            [m, /_/g, " "],
                            [y, G],
                            [g, _]
                        ],
                        [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                        [
                            [m, /_/g, " "],
                            [y, G],
                            [g, I]
                        ],
                        [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                        [m, [y, "OPPO"],
                            [g, _]
                        ],
                        [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                        [m, [y, "Vivo"],
                            [g, _]
                        ],
                        [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                        [m, [y, "Realme"],
                            [g, _]
                        ],
                        [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                        [m, [y, V],
                            [g, _]
                        ],
                        [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                        [m, [y, V],
                            [g, I]
                        ],
                        [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                        [m, [y, M],
                            [g, I]
                        ],
                        [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                        [m, [y, M],
                            [g, _]
                        ],
                        [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                        [m, [y, "Lenovo"],
                            [g, I]
                        ],
                        [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                        [
                            [m, /_/g, " "],
                            [y, "Nokia"],
                            [g, _]
                        ],
                        [/(pixel c)\b/i],
                        [m, [y, D],
                            [g, I]
                        ],
                        [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                        [m, [y, D],
                            [g, _]
                        ],
                        [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        [m, [y, q],
                            [g, _]
                        ],
                        [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                        [
                            [m, "Xperia Tablet"],
                            [y, q],
                            [g, I]
                        ],
                        [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                        [m, [y, "OnePlus"],
                            [g, _]
                        ],
                        [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                        [m, [y, E],
                            [g, I]
                        ],
                        [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                        [
                            [m, /(.+)/g, "Fire Phone $1"],
                            [y, E],
                            [g, _]
                        ],
                        [/(playbook);[-\w\),; ]+(rim)/i],
                        [m, y, [g, I]],
                        [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                        [m, [y, N],
                            [g, _]
                        ],
                        [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                        [m, [y, j],
                            [g, I]
                        ],
                        [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                        [m, [y, j],
                            [g, _]
                        ],
                        [/(nexus 9)/i],
                        [m, [y, "HTC"],
                            [g, I]
                        ],
                        [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                        [y, [m, /_/g, " "],
                            [g, _]
                        ],
                        [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                        [m, [y, "Acer"],
                            [g, I]
                        ],
                        [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                        [m, [y, "Meizu"],
                            [g, _]
                        ],
                        [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                        [m, [y, "Sharp"],
                            [g, _]
                        ],
                        [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                        [y, m, [g, _]],
                        [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                        [y, m, [g, I]],
                        [/(surface duo)/i],
                        [m, [y, U],
                            [g, I]
                        ],
                        [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                        [m, [y, "Fairphone"],
                            [g, _]
                        ],
                        [/(u304aa)/i],
                        [m, [y, "AT&T"],
                            [g, _]
                        ],
                        [/\bsie-(\w*)/i],
                        [m, [y, "Siemens"],
                            [g, _]
                        ],
                        [/\b(rct\w+) b/i],
                        [m, [y, "RCA"],
                            [g, I]
                        ],
                        [/\b(venue[\d ]{2,7}) b/i],
                        [m, [y, "Dell"],
                            [g, I]
                        ],
                        [/\b(q(?:mv|ta)\w+) b/i],
                        [m, [y, "Verizon"],
                            [g, I]
                        ],
                        [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                        [m, [y, "Barnes & Noble"],
                            [g, I]
                        ],
                        [/\b(tm\d{3}\w+) b/i],
                        [m, [y, "NuVision"],
                            [g, I]
                        ],
                        [/\b(k88) b/i],
                        [m, [y, "ZTE"],
                            [g, I]
                        ],
                        [/\b(nx\d{3}j) b/i],
                        [m, [y, "ZTE"],
                            [g, _]
                        ],
                        [/\b(gen\d{3}) b.+49h/i],
                        [m, [y, "Swiss"],
                            [g, _]
                        ],
                        [/\b(zur\d{3}) b/i],
                        [m, [y, "Swiss"],
                            [g, I]
                        ],
                        [/\b((zeki)?tb.*\b) b/i],
                        [m, [y, "Zeki"],
                            [g, I]
                        ],
                        [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                        [
                            [y, "Dragon Touch"], m, [g, I]
                        ],
                        [/\b(ns-?\w{0,9}) b/i],
                        [m, [y, "Insignia"],
                            [g, I]
                        ],
                        [/\b((nxa|next)-?\w{0,9}) b/i],
                        [m, [y, "NextBook"],
                            [g, I]
                        ],
                        [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                        [
                            [y, "Voice"], m, [g, _]
                        ],
                        [/\b(lvtel\-)?(v1[12]) b/i],
                        [
                            [y, "LvTel"], m, [g, _]
                        ],
                        [/\b(ph-1) /i],
                        [m, [y, "Essential"],
                            [g, _]
                        ],
                        [/\b(v(100md|700na|7011|917g).*\b) b/i],
                        [m, [y, "Envizen"],
                            [g, I]
                        ],
                        [/\b(trio[-\w\. ]+) b/i],
                        [m, [y, "MachSpeed"],
                            [g, I]
                        ],
                        [/\btu_(1491) b/i],
                        [m, [y, "Rotor"],
                            [g, I]
                        ],
                        [/(shield[\w ]+) b/i],
                        [m, [y, "Nvidia"],
                            [g, I]
                        ],
                        [/(sprint) (\w+)/i],
                        [y, m, [g, _]],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [m, /\./g, " "],
                            [y, U],
                            [g, _]
                        ],
                        [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                        [m, [y, Z],
                            [g, I]
                        ],
                        [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                        [m, [y, Z],
                            [g, _]
                        ],
                        [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                        [y, m, [g, S]],
                        [/droid.+; (shield) bui/i],
                        [m, [y, "Nvidia"],
                            [g, S]
                        ],
                        [/(playstation [345portablevi]+)/i],
                        [m, [y, q],
                            [g, S]
                        ],
                        [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                        [m, [y, U],
                            [g, S]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [y, [g, C]],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [m, /^/, "SmartTV"],
                            [y, W],
                            [g, C]
                        ],
                        [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                        [
                            [y, M],
                            [g, C]
                        ],
                        [/(apple) ?tv/i],
                        [y, [m, A + " TV"],
                            [g, C]
                        ],
                        [/crkey/i],
                        [
                            [m, T + "cast"],
                            [y, D],
                            [g, C]
                        ],
                        [/droid.+aft(\w)( bui|\))/i],
                        [m, [y, E],
                            [g, C]
                        ],
                        [/\(dtv[\);].+(aquos)/i],
                        [m, [y, "Sharp"],
                            [g, C]
                        ],
                        [/(bravia[\w- ]+) bui/i],
                        [m, [y, q],
                            [g, C]
                        ],
                        [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                        [
                            [y, H],
                            [m, H],
                            [g, C]
                        ],
                        [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                        [
                            [g, C]
                        ],
                        [/((pebble))app/i],
                        [y, m, [g, x]],
                        [/droid.+; (glass) \d/i],
                        [m, [y, D],
                            [g, x]
                        ],
                        [/droid.+; (wt63?0{2,3})\)/i],
                        [m, [y, Z],
                            [g, x]
                        ],
                        [/(quest( 2)?)/i],
                        [m, [y, z],
                            [g, x]
                        ],
                        [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                        [y, [g, O]],
                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                        [m, [g, _]],
                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                        [m, [g, I]],
                        [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                        [
                            [g, I]
                        ],
                        [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                        [
                            [g, _]
                        ],
                        [/(android[-\w\. ]{0,9});.+buil/i],
                        [m, [y, "Generic"]]
                    ],
                    engine: [
                        [/windows.+ edge\/([\w\.]+)/i],
                        [w, [b, "EdgeHTML"]],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [w, [b, "Blink"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                        [b, w],
                        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                        [w, b]
                    ],
                    os: [
                        [/microsoft (windows) (vista|xp)/i],
                        [b, w],
                        [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                        [b, [w, K, $]],
                        [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                        [
                            [b, "Windows"],
                            [w, K, $]
                        ],
                        [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                        [
                            [w, /_/g, "."],
                            [b, "iOS"]
                        ],
                        [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                        [
                            [b, "Mac OS"],
                            [w, /_/g, "."]
                        ],
                        [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                        [w, b],
                        [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                        [b, w],
                        [/\(bb(10);/i],
                        [w, [b, N]],
                        [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                        [w, [b, "Symbian"]],
                        [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                        [w, [b, R + " OS"]],
                        [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                        [w, [b, "webOS"]],
                        [/crkey\/([\d\.]+)/i],
                        [w, [b, T + "cast"]],
                        [/(cros) [\w]+ ([\w\.]+\w)/i],
                        [
                            [b, "Chromium OS"], w
                        ],
                        [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                        [b, w],
                        [/(sunos) ?([\w\.\d]*)/i],
                        [
                            [b, "Solaris"], w
                        ],
                        [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                        [b, w]
                    ]
                },
                ee = function(e, t) {
                    if ((void 0 === e ? "undefined" : d(e)) === h && (t = e, e = void 0), n = this, !(null != (i = ee) && "undefined" != typeof Symbol && i[Symbol.hasInstance] ? i[Symbol.hasInstance](n) : n instanceof i)) return new ee(e, t).getResult();
                    var n, i, r = e || (("undefined" == typeof window ? "undefined" : d(window)) !== f && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : ""),
                        o = t ? function(e, t) {
                            var n = {};
                            for (var i in e) t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                            return n
                        }(Q, t) : Q;
                    return this.getBrowser = function() {
                        var e, t = {};
                        return t[b] = void 0, t[w] = void 0, Y.call(t, r, o.browser), t.major = (void 0 === (e = t.version) ? "undefined" : d(e)) === v ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0, t
                    }, this.getCPU = function() {
                        var e = {};
                        return e[k] = void 0, Y.call(e, r, o.cpu), e
                    }, this.getDevice = function() {
                        var e = {};
                        return e[y] = void 0, e[m] = void 0, e[g] = void 0, Y.call(e, r, o.device), e
                    }, this.getEngine = function() {
                        var e = {};
                        return e[b] = void 0, e[w] = void 0, Y.call(e, r, o.engine), e
                    }, this.getOS = function() {
                        var e = {};
                        return e[b] = void 0, e[w] = void 0, Y.call(e, r, o.os), e
                    }, this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function() {
                        return r
                    }, this.setUA = function(e) {
                        return r = (void 0 === e ? "undefined" : d(e)) === v && e.length > 275 ? H(e, 275) : e, this
                    }, this.setUA(r), this
                };
            ee.VERSION = "0.7.31", ee.BROWSER = B([b, w, "major"]), ee.CPU = B([k]), ee.DEVICE = B([m, y, g, S, _, C, I, x, O]), ee.ENGINE = ee.OS = B([b, w]);
            var te = function(e) {
                    if (!e) return {};
                    var t = new ee(e).getResult();
                    return {
                        browser_name: t.browser.name || "",
                        browser_version: t.browser.version || "",
                        os_name: t.os.name,
                        os_version: t.os.version,
                        device: t.device.model
                    }
                },
                ne = function(e) {
                    for (var t = "", n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n);
                        i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128))
                    }
                    return t
                },
                ie = function(e) {
                    for (var t = "", n = 0, i = 0, r = 0, o = 0; n < e.length;)(i = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(i), n++) : i > 191 && i < 224 ? (r = e.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & r), n += 2) : (r = e.charCodeAt(n + 1), o = e.charCodeAt(n + 2), t += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | 63 & o), n += 3);
                    return t
                },
                re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                oe = function() {
                    return void 0 !== window.btoa && void 0 !== window.atob
                },
                ae = function(e) {
                    try {
                        if (oe()) return window.btoa(unescape(encodeURIComponent(e)))
                    } catch (e) {}
                    return function(e) {
                        var t, n, i, r, o, a, s, c = "",
                            u = 0;
                        for (e = ne(e); u < e.length;) r = (t = e.charCodeAt(u++)) >> 2, o = (3 & t) << 4 | (n = e.charCodeAt(u++)) >> 4, a = (15 & n) << 2 | (i = e.charCodeAt(u++)) >> 6, s = 63 & i, isNaN(n) ? a = s = 64 : isNaN(i) && (s = 64), c = c + re.charAt(r) + re.charAt(o) + re.charAt(a) + re.charAt(s);
                        return c
                    }(e)
                },
                se = function(e) {
                    try {
                        if (oe()) return decodeURIComponent(escape(window.atob(e)))
                    } catch (e) {}
                    return function(e) {
                        var t, n, i, r, o, a, s = "",
                            c = 0;
                        for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); c < e.length;) t = re.indexOf(e.charAt(c++)) << 2 | (r = re.indexOf(e.charAt(c++))) >> 4, n = (15 & r) << 4 | (o = re.indexOf(e.charAt(c++))) >> 2, i = (3 & o) << 6 | (a = re.indexOf(e.charAt(c++))), s += String.fromCharCode(t), 64 !== o && (s += String.fromCharCode(n)), 64 !== a && (s += String.fromCharCode(i));
                        return ie(s)
                    }(e)
                };

            function ce(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            var ue = function() {
                function e(t) {
                    var n, i, r, o, a, s, c;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), c = void 0, (s = "_options") in (a = this) ? Object.defineProperty(a, s, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : a[s] = c, this._options = {
                        expirationDays: (null === (n = t) || void 0 === n ? void 0 : n.expirationDays) || 0,
                        domain: (null === (i = t) || void 0 === i ? void 0 : i.domain) || "",
                        secure: (null === (r = t) || void 0 === r ? void 0 : r.secure) || !1,
                        sameSite: (null === (o = t) || void 0 === o ? void 0 : o.sameSite) || ""
                    }
                }
                var t, n, i;
                return t = e, n = [{
                    key: "get",
                    value: function(e) {
                        try {
                            var t = this.findByKey(e);
                            return t ? JSON.parse(se(t)) : void 0
                        } catch (e) {
                            return
                        }
                    }
                }, {
                    key: "findByKey",
                    value: function(e) {
                        var t = window.document.cookie.split("; ").find((function(t) {
                            return 0 === t.indexOf(e + "=")
                        }));
                        if (t) return t.substring(e.length + 1)
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        var n, i, r, o, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._options,
                            s = null !== t ? null === (n = a) || void 0 === n ? void 0 : n.expirationDays : -1,
                            c = void 0;
                        if (s) {
                            var u = new Date;
                            u.setTime(u.getTime() + 24 * s * 60 * 60 * 1e3), c = u
                        }
                        var l = "".concat(e, "=").concat(ae(JSON.stringify(t)));
                        c && (l += "; expires=".concat(c.toUTCString())), l += "; path=/", (null === (i = a) || void 0 === i ? void 0 : i.domain) && (l += "; domain=".concat(a.domain)), (null === (r = a) || void 0 === r ? void 0 : r.secure) && (l += "; Secure"), (null === (o = a) || void 0 === o ? void 0 : o.sameSite) && (l += "; SameSite=".concat(a.sameSite)), window.document.cookie = l
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        this.set(e, null)
                    }
                }, {
                    key: "reset",
                    value: function() {}
                }], n && ce(t.prototype, n), i && ce(t, i), e
            }();

            function le(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function de(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function pe(e) {
                return pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, pe(e)
            }

            function fe(e, t) {
                return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t;
                var n
            }

            function he(e, t) {
                return he = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, he(e, t)
            }

            function ve(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var i, r, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t); a = !0);
                        } catch (e) {
                            s = !0, r = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw r
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return le(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return le(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function me(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = pe(e);
                    if (t) {
                        var r = pe(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return fe(this, n)
                }
            }
            var be = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && he(e, t)
                }(o, e);
                var t, n, i, r = me(o);

                function o() {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), r.apply(this, arguments)
                }
                return t = o, (n = [{
                    key: "get",
                    value: function(e) {
                        try {
                            var t = this.findByKey(e);
                            if (!t) return;
                            return t.split(".").splice(-1)[0].split("|").reduce((function(e, t) {
                                var n = ve(t.split("=", 2), 2),
                                    i = n[0],
                                    r = n[1],
                                    o = void 0 === r ? "" : r;
                                return o ? (e[i] = decodeURIComponent(o), e) : e
                            }), {})
                        } catch (e) {
                            return
                        }
                    }
                }]) && de(t.prototype, n), i && de(t, i), o
            }(ue);

            function ge(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function ye(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var i, r, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t); a = !0);
                        } catch (e) {
                            s = !0, r = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw r
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ge(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ge(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var we = function() {
                    if ("undefined" == typeof window) return {};
                    var e = window.location.href.split("?");
                    return e.length > 1 ? e[1].split("&").filter(Boolean).reduce((function(e, t) {
                        var n = ye(t.split("=", 2), 2),
                            i = n[0],
                            r = n[1],
                            o = void 0 === r ? "" : r;
                        return o ? (e[decodeURIComponent(i)] = decodeURIComponent(o), e) : e
                    }), {}) : {}
                },
                ke = function() {
                    var e = we(),
                        t = (new be).get("__utmz") || {},
                        n = e.utm_source || t.utmcsr,
                        i = e.utm_medium || t.utmcmd,
                        r = e.utm_campaign || t.utmccn,
                        o = e.utm_term || t.utmctr,
                        a = e.utm_content || t.utmcct,
                        s = {};
                    return n && (s.utm_source = n), i && (s.utm_medium = i), r && (s.utm_campaign = r), o && (s.utm_term = o), a && (s.utm_content = a), s
                },
                Se = function() {
                    var e = we();
                    return {
                        referrer: e.referrer,
                        referring_domain: e.referring_domain,
                        gclid: e.gclid,
                        fbclid: e.fbclid
                    }
                };

            function _e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function Ie(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var Ce = {
                    "Content-Type": "application/json"
                },
                xe = function() {
                    function e(t, n, i) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), Ie(this, "url", void 0), Ie(this, "data", void 0), Ie(this, "headers", void 0), this.url = t || "", this.data = n || {}, this.headers = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                })))), i.forEach((function(t) {
                                    Ie(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, Ce, i)
                    }
                    var t, n, i;
                    return t = e, (n = [{
                        key: "setHeaders",
                        value: function(e, t) {
                            for (var n in t)("Cross-Origin-Resource-Policy" !== n || t[n]) && e.setRequestHeader(n, t[n])
                        }
                    }, {
                        key: "send",
                        value: function(e) {
                            if ("undefined" != typeof XMLHttpRequest) {
                                var t = new XMLHttpRequest;
                                t.open("POST", this.url, !0), t.withCredentials = !0, t.onreadystatechange = function() {
                                    var n;
                                    4 === t.readyState && (null === (n = e) || void 0 === n || n(t.status, t.responseText))
                                }, this.setHeaders(t, this.headers), t.send(JSON.stringify(this.data))
                            } else {
                                var n;
                                fetch(this.url, {
                                    method: "POST",
                                    headers: this.headers,
                                    body: JSON.stringify(this.data)
                                }).then((function(e) {
                                    return n = e.status, e.text()
                                })).then((function(t) {
                                    var i;
                                    null === (i = e) || void 0 === i || i(n, t)
                                }))
                            }
                        }
                    }]) && _e(t.prototype, n), i && _e(t, i), e
                }(),
                Oe = function(e) {
                    return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : (String(1e7) + String(-1e3) + String(-4e3) + String(-8e3) + String(-1e11)).replace(/[018]/g, Oe)
                },
                Ee = function(e) {
                    return !e || 0 === e.length
                },
                Ae = function(e) {
                    return void 0 !== e && "boolean" == typeof e
                },
                je = function(e, t) {
                    localStorage.setItem(e, t)
                };
            var Ne = function(e) {
                switch (toString.call(e)) {
                    case "[object Date]":
                        return "date";
                    case "[object RegExp]":
                        return "regexp";
                    case "[object Arguments]":
                        return "arguments";
                    case "[object Array]":
                        return "array";
                    case "[object Error]":
                        return "error"
                }
                return null === e ? "null" : void 0 === e ? "undefined" : e != e ? "nan" : void 0 === (e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e)) ? "undefined" : (t = e) && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t;
                var t
            };

            function Pe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function Te(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function Re(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function De(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), i.forEach((function(t) {
                        Re(e, t, n[t])
                    }))
                }
                return e
            }

            function Le(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, i)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                })), e
            }

            function Me(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var i, r, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t); a = !0);
                        } catch (e) {
                            s = !0, r = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw r
                            }
                        }
                        return o
                    }
                }(e, t) || Ve(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ue(e) {
                return function(e) {
                    if (Array.isArray(e)) return Pe(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Ve(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ve(e, t) {
                if (e) {
                    if ("string" == typeof e) return Pe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pe(e, t) : void 0
                }
            }
            var Fe = "apt_unsent_events",
                We = function() {
                    function e(t, n, i) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), Re(this, "options", void 0), Re(this, "userId", void 0), Re(this, "apiKey", void 0), Re(this, "useragent", void 0), Re(this, "ua", void 0), Re(this, "utm", void 0), Re(this, "queque", void 0), Re(this, "unsentEvents", void 0), Re(this, "eventId", void 0), Re(this, "isInitialized", void 0), Re(this, "screen", void 0), Re(this, "language", void 0), Re(this, "cookieName", void 0), Re(this, "deviceId", void 0), Re(this, "cookieStorage", void 0), Re(this, "lastEventTime", void 0), Re(this, "eventData", void 0), Re(this, "checkout", void 0), this.isInitialized = !1, this.eventId = 0, this.userId = n, this.deviceId = "", this.apiKey = t, this.options = c(s, i), this.queque = [], this.unsentEvents = [], this.useragent = navigator && navigator.userAgent, this.ua = this.options.trackingOptions.enableUserAgent ? te(this.useragent) : {}, this.utm = this.options.trackingOptions.enableUTM ? ke() : {}, this.language = "undefined" != typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language) || "", this.screen = "undefined" == typeof screen ? {} : {
                            height: screen.height,
                            width: screen.width,
                            pixel_depth: screen.pixelDepth
                        }, this.cookieName = this.options.cookiePrefix + "", this.eventData = {}, this.cookieStorage = new ue({
                            domain: this.options.domain,
                            expirationDays: this.options.cookieExpiration,
                            secure: this.options.cookieSecure,
                            sameSite: this.options.cookieSameSite
                        }), this.initFromStorage()
                    }
                    var t, n, a;
                    return t = e, (n = [{
                        key: "setOptions",
                        value: function(e) {
                            if ("object" == typeof e) {
                                var t, n;
                                if (e.transport && ("AJAX" !== (t = e.transport) && "BEACON" !== t ? (console.log("transport value must be one of AJAX or BEACON"), 0) : "AJAX" === t || navigator.sendBeacon || (console.log("browser does not support sendBeacon, so transport must be HTTP"), 0)) && (this.options.transport = e.transport), e.platform && ("Web" === e.platform || (console.log("platform value only support Web"), 0)) && (this.options.platform = e.platform), !e.cookieExpiration || ("number" != typeof(n = e.cookieExpiration) ? (console.log("cookieExpiration value must be number"), 1) : n > s.cookieExpiration && (console.log("cookieExpiration value must be less than one year"), 1)) || (this.options.cookieExpiration = e.cookieExpiration), e.apiKey && Ee(e.apiKey) && (this.options.apiKey = e.apiKey), e.cookiePrefix && Ee(e.cookiePrefix) && (this.options.cookiePrefix = e.cookiePrefix), e.trackingOptions) {
                                    var i = e.trackingOptions,
                                        r = i.enableFbclid,
                                        o = i.enableGclid,
                                        a = i.enableUserAgent,
                                        c = i.enableUTM;
                                    Ae(r) && (this.options.trackingOptions.enableFbclid = r), Ae(o) && (this.options.trackingOptions.enableGclid = o), Ae(a) && (this.options.trackingOptions.enableUserAgent = a), Ae(c) && (this.options.trackingOptions.enableUTM = c)
                                }
                                void 0 !== e.saveEvents && Ae(e.saveEvents) && (this.options.saveEvents = e.saveEvents)
                            }
                        }
                    }, {
                        key: "shouldDefer",
                        value: function() {}
                    }, {
                        key: "setUserId",
                        value: function(e) {
                            this.userId = e, null === Ne(e) && "string" === Ne(e) ? this.sendEvent(i.IDENTIFY_EVENT) : console.log("User id should be a valid string")
                        }
                    }, {
                        key: "getCollectedProperties",
                        value: function() {
                            try {
                                var e = Se(),
                                    t = e.referrer,
                                    n = e.referring_domain,
                                    i = Se(),
                                    r = i.gclid,
                                    o = i.fbclid,
                                    a = this.options.trackingOptions,
                                    s = a.enableUserAgent,
                                    c = a.enableUTM,
                                    u = a.enableGclid,
                                    l = a.enableFbclid;
                                return s ? (this.useragent = navigator.userAgent, this.ua = te(this.useragent)) : this.ua = {}, this.utm = c ? ke() : {}, Le(De({}, this.screen, this.utm, this.ua), {
                                    referrer: t,
                                    referring_domain: n,
                                    location: Intl.DateTimeFormat().resolvedOptions().timeZone,
                                    language: this.language,
                                    device_id: this.deviceId,
                                    user_id: this.userId,
                                    platform: "Web",
                                    gclid: u ? r : void 0,
                                    fbclid: l ? o : void 0,
                                    from: "iq-pixel",
                                    version: "0.0.1",
                                    url: window.location.href
                                })
                            } catch (e) {
                                return null
                            }
                        }
                    }, {
                        key: "runQueuedFunctions",
                        value: function() {
                            var e = this.queque;
                            this.queque = [];
                            for (var t = 0; t < e.length; t++) {
                                var n = this[e[t][0]];
                                "function" === Ne(n) && n.apply(this, e[t].slice(1))
                            }
                        }
                    }, {
                        key: "sendEvent",
                        value: function(e, t) {
                            if ("undefined" !== Ne(e))
                                if (t && "object" !== Ne(t)) console.log("Wrong type for event data, it should be object");
                                else {
                                    this.eventId += 1;
                                    var n = this.getCollectedProperties();
                                    if (null !== n) try {
                                        this.lastEventTime = (new Date).getTime();
                                        var i = Le(De({}, n), {
                                            event_id: this.eventId,
                                            event: e,
                                            event_properties: t || {},
                                            merchant_token: this.apiKey
                                        });
                                        this.eventData = t || {}, this.logEvent(i, !1)
                                    } catch (e) {
                                        console.log(e)
                                    } else console.log("Unable to send event")
                                }
                            else console.log("Missing EventName")
                        }
                    }, {
                        key: "logEvent",
                        value: function(e, t) {
                            var n = this;
                            try {
                                this.lastEventTime = (new Date).getTime();
                                var i = this.options.saveEvents;
                                this.options.transport === r ? new xe(this.options.apiEndpoint, e).send((function(r, o) {
                                    200 === r ? t && n.removeUnsentEvent(e) : i && n.setUnsentEvent(e)
                                })) : this.options.transport === o && (l(this.options.apiEndpoint, e) ? i && this.removeUnsentEvent(e) : i && this.setUnsentEvent(e)), this.options.disableCookies || this.saveCookies()
                            } catch (e) {
                                console.log(e)
                            }
                        }
                    }, {
                        key: "validatedCheckout",
                        value: function(e) {
                            if (void 0 !== e && "object" === Ne(e)) {
                                var t = /^[a-zA-Z0-9]+$/,
                                    n = /^[a-zA-Z0-9-]*$/,
                                    i = Object.entries(e),
                                    r = i.filter((function(e) {
                                        var i = Me(e, 2),
                                            r = i[0],
                                            o = i[1];
                                        return t.test(r) && n.test(o)
                                    }));
                                return i.length !== r.length && console.warn("Checkout data contains invalid entries."), Object.fromEntries(r)
                            }
                        }
                    }, {
                        key: "setCheckout",
                        value: function(e) {
                            var t = this.validatedCheckout(e);
                            t && (this.checkout = t, this.saveCookies())
                        }
                    }, {
                        key: "getDataFromCookies",
                        value: function() {
                            var e, t, n, i, r = this.cookieStorage.get(this.cookieName);
                            return "object" === Ne(r) && ("undefined" !== Ne(r.deviceId) && (e = r.deviceId), "number" === Ne(r.eventId) && (t = r.eventId), "undefined" !== Ne(r.userId) && (n = r.userId), "object" === Ne(r.checkout) && (i = r.checkout)), {
                                deviceId: e,
                                eventId: t,
                                userId: n,
                                checkout: i
                            }
                        }
                    }, {
                        key: "getUnsentEvents",
                        value: function() {
                            try {
                                var e = function(e) {
                                        try {
                                            return localStorage.getItem(e)
                                        } catch (e) {
                                            return null
                                        }
                                    }(Fe),
                                    t = e && !Ee(e) ? JSON.parse(e) : [];
                                return "array" === Ne(t) ? t : []
                            } catch (e) {
                                return console.log("Error: unable to retrive unsent events"), []
                            }
                        }
                    }, {
                        key: "setUnsentEvent",
                        value: function(e) {
                            if ("undefined" !== Ne(e)) {
                                void 0 === e.retry && (e.retry = 0);
                                var t = this.unsentEvents.filter((function(t) {
                                        return t.event_id !== e.event_id && t.retry <= 3
                                    })),
                                    n = e.retry >= 3 ? Ue(t) : Ue(t).concat([Le(De({}, e), {
                                        retry: e.retry + 1
                                    })]);
                                this.unsentEvents = n, je(Fe, JSON.stringify(n))
                            }
                        }
                    }, {
                        key: "removeUnsentEvent",
                        value: function(e) {
                            var t = e.event_id;
                            try {
                                this.unsentEvents = this.unsentEvents.filter((function(e) {
                                    return e.event_id === t
                                })), je(Fe, JSON.stringify(this.unsentEvents))
                            } catch (e) {
                                console.log("Unable to save unsent events")
                            }
                        }
                    }, {
                        key: "initFromStorage",
                        value: function() {
                            var e = this;
                            if (this.options.disableCookies) return this.deviceId = "", this.eventId = 0, void(this.isInitialized = !0);
                            var t = this.getDataFromCookies(),
                                n = t.deviceId,
                                i = t.eventId,
                                r = t.userId,
                                o = t.checkout,
                                a = we().device_id;
                            this.deviceId = a || n || Oe(), this.eventId = "number" == typeof i ? i + 1 : 0, "undefined" !== Ne(r) && (this.userId = r), this.checkout = this.validatedCheckout(o), this.options.saveEvents && (this.unsentEvents = this.getUnsentEvents(), this.unsentEvents.length > 0 && this.unsentEvents.forEach((function(t) {
                                setTimeout((function() {
                                    e.logEvent(t, !0)
                                }), 0)
                            }))), this.saveCookies(), this.isInitialized = !0
                        }
                    }, {
                        key: "saveCookies",
                        value: function() {
                            var e = {
                                deviceId: this.deviceId,
                                userId: this.userId,
                                eventId: this.eventId,
                                lastEventTime: this.lastEventTime,
                                checkout: this.checkout
                            };
                            this.cookieStorage.set(this.cookieName, e)
                        }
                    }, {
                        key: "clearStorage",
                        value: function() {
                            this.cookieStorage.remove(this.cookieName)
                        }
                    }, {
                        key: "getProperties",
                        value: function() {
                            return Le(De({}, this.getCollectedProperties()), {
                                platform: "Web",
                                event_id: this.eventId,
                                merchant_token: this.apiKey,
                                event_properties: this.eventData
                            })
                        }
                    }]) && Te(t.prototype, n), a && Te(t, a), e
                }()
        },
        7582: function(e, t, n) {
            "use strict";
            n.d(t, {
                Jh: function() {
                    return o
                },
                ev: function() {
                    return a
                },
                mG: function() {
                    return r
                },
                pi: function() {
                    return i
                }
            });
            var i = function() {
                return i = Object.assign || function(e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }, i.apply(this, arguments)
            };

            function r(e, t, n, i) {
                return new(n || (n = Promise))((function(r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            }

            function o(e, t) {
                var n, i, r, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(s) {
                    return function(c) {
                        return function(s) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, s[0] && (a = 0)), a;) try {
                                if (n = 1, i && (r = 2 & s[0] ? i.return : s[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, s[1])).done) return r;
                                switch (i = 0, r && (s = [2 & s[0], r.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        r = s;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                            a.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && a.label < r[1]) {
                                            a.label = r[1], r = s;
                                            break
                                        }
                                        if (r && a.label < r[2]) {
                                            a.label = r[2], a.ops.push(s);
                                            break
                                        }
                                        r[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                s = t.call(e, a)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                n = r = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, c])
                    }
                }
            }
            Object.create;

            function a(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var i, r = 0, o = t.length; r < o; r++) !i && r in t || (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
                return e.concat(i || Array.prototype.slice.call(t))
            }
            Object.create;
            "function" == typeof SuppressedError && SuppressedError
        }
    }
]);