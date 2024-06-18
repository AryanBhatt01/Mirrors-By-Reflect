;
(function() {
    const DEFAULT_ZOID = '9.0.85'
    const hashes = {
        '9.0.54': 'sha384-q9ZBwpaktWbGxjx2qRNszPEWQ9oaZsim0Y3eLjZ9qglcEf+G2lEmyXZmDbj5w0em',
        '9.0.85': 'sha384-67MznxkYtbE8teNrhdkvnzQBmeiErnMskO7eD8QwolLpdUliTdivKWx0ANHgw+w8',
    }

    class PlacementApi {
        constructor() {
            this.params = {}
            this.zoidVersion = DEFAULT_ZOID
            this.mpid = ''
            this.data = null
            this.consumerUUID = ''
        }

        async start() {
            const COOKIE_CONSUMER_UUID = 'apt-user-id'

            this.params = new URLSearchParams(document.location.search)
            this.zoidVersion = this.params.get('zoid') ? window.encodeURIComponent(this.params.get('zoid')) : DEFAULT_ZOID

            try {
                this.data = await this.logJSONData()

                this.consumerUUID = this.getCookie(COOKIE_CONSUMER_UUID)
                this.affixScriptToHead(this.zoidVersion)
            } catch (e) {
                console.warn('Unable to parse JSON data', e.message)
            }
        }

        async logJSONData() {
            let jsonData
            try {
                // @ts-ignore
                const data = window.document.querySelector('#__AP_DATA__').innerText
                jsonData = JSON.parse(data)
            } catch (e) {
                console.error(e)
                throw Error('Data not available')
            }
            return jsonData
        }

        getCookie(cname) {
            const name = cname + '='
            const decodedCookie = decodeURIComponent(document.cookie)
            const ca = decodedCookie.split(';')
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i]
                while (c.charAt(0) === ' ') {
                    c = c.substring(1)
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length)
                }
            }
            return ''
        }

        onSuccess() {
            // @ts-ignore
            window.zoid.create({
                tag: 'placement-api',
            })
            // @ts-ignore
            window.xprops ? .onPlacementAPIComplete({
                errors: this.data.errors,
                merchant: {
                    mcr: this.data.mcrResponse,
                    promo: this.data.promoResponse,
                    participationEnabled: this.data.participationEnabled,
                },
                consumer: {
                    isAfterpayCustomer: !!this.consumerUUID,
                    uuid: this.consumerUUID,
                },
                meta: this.data.meta,
            })
        }

        loadError(oError) {
            throw new URIError(`The script ${oError.target.src} didn't load correctly.`)
        }

        affixScriptToHead(zoid) {
            const newScript = document.createElement('script')
            newScript.integrity = hashes[zoid]
            newScript.crossOrigin = 'anonymous'
            newScript.onerror = this.loadError
            if (this.onSuccess) {
                newScript.onload = this.onSuccess.bind(this)
            }
            document.head.appendChild(newScript)
            newScript.src = `https://cdn.jsdelivr.net/npm/zoid@${this.zoidVersion}/dist/zoid.min.js`
        }
    }

    const placementApi = new PlacementApi()
    placementApi.start()
}).call(this)