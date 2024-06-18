(function() {
    var __sections__ = {};
    (function() {
        for (var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
            __sections__[s[i]] = true;
    })();
    (function() {
        if (!__sections__["banner-with-text"] && !window.DesignMode) return;
        try {

            const events = [
                'shopify:section:reorder',
                'shopify:section:deselect',
                'shopify:section:select',
                'shopify:section:unload',
                'shopify:section:load',
            ];

            const banner_with_text = () => {
                let headerOverlay = document.querySelector('.overlay');
                let pageAbout = document.querySelector('.page-about');
                let pageLookbook = document.querySelector('.page-lookbook');
                let breadCrumb = document.querySelector('.main-breadcrumb');
                let colorScheme = document.querySelector('.header-color-light');
                let colorSchemeDark = document.querySelector('.header-color-dark');
                let firstSection = document.querySelector('section:first-of-type');

                if (
                    headerOverlay &&
                    firstSection.classList.contains('section-banner-with-text')
                ) {
                    document.querySelector('main').classList.add('page-about');
                    let pageAbout = document.querySelector('.page-about');
                    let pageLookbook = document.querySelector('.page-lookbook');
                    if (colorScheme) {
                        headerOverlay.classList.add('theme-dark');
                        headerOverlay.classList.add('header-color-background-5');
                        if (pageAbout || pageLookbook) {
                            breadCrumb.classList.add('color-background-5');
                        }
                    }

                    if (colorSchemeDark) {
                        headerOverlay.classList.remove('theme-dark');
                        headerOverlay.classList.remove('header-color-background-5');
                        headerOverlay.classList.add('color-background-1');
                        if (pageAbout || pageLookbook) {
                            breadCrumb.classList.remove('color-background-5');
                        }
                    }
                } else {
                    if (colorScheme) {
                        if (pageAbout || pageLookbook) {
                            breadCrumb.classList.add('color-background-5');
                        }
                    }

                    if (colorSchemeDark) {
                        if (pageAbout || pageLookbook) {
                            breadCrumb.classList.remove('color-background-5');
                        }
                    }
                }
            };

            banner_with_text();

            events.forEach(function(item) {
                document.addEventListener(item, function() {
                    banner_with_text();
                });
            });

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["featured-product"] && !window.DesignMode) return;
        try {

            class ProductModal extends ModalDialog {
                constructor() {
                    super();
                }

                hide() {
                    super.hide();
                    window.pauseAllMedia();
                }

                show(opener) {
                    super.show(opener);
                    //this.showActiveMedia();
                    this.constProductPageSwiperCall();
                }
                showActiveMedia() {
                    this.querySelectorAll(
                        `[data-media-id]:not([data-media-id="${this.openedBy.getAttribute(
					'data-media-id'
				)}"])`
                    ).forEach((element) => {
                        element.classList.remove('active');
                    });

                    const activeMedia = this.querySelector(
                        `[data-media-id="${this.openedBy.getAttribute('data-media-id')}"]`
                    );
                    const activeMediaTemplate = activeMedia.querySelector('template');
                    const activeMediaContent = activeMediaTemplate ?
                        activeMediaTemplate.content :
                        null;
                    activeMedia.classList.add('active');

                    activeMedia.scrollIntoView();

                    if (
                        activeMedia.nodeName == 'DEFERRED-MEDIA' &&
                        activeMediaContent &&
                        activeMediaContent.querySelector('.js-youtube')
                    )
                        activeMedia.loadContent();
                }

                constProductPageSwiperCall(showActiveMedia) {
                    const activeMedia = this.querySelector(
                        `[data-media-id="${this.openedBy.getAttribute('data-media-id')}"]`
                    );
                    let activeMediaIndex = 0;

                    this.querySelectorAll(`.swiper-slide`).forEach((element, index) => {
                        if (element == activeMedia) {
                            activeMediaIndex = index;
                        }
                    });

                    const prodPageSwiper = new Swiper('#product-page-swiper', {
                        zoom: true,
                        centeredSlides: false,
                        slidesPerView: 1,
                        autoheight: true,
                        watchSlidesVisibility: false,
                        watchSlidesProgress: true,
                        observer: true,
                        observeParents: true,
                        init: false,
                        navigation: {
                            nextEl: '.swiper-button-next-prod-page',
                            prevEl: '.swiper-button-prev-prod-page',
                        },
                        pagination: {
                            el: '.swiper-pagination-product-page',
                            clickable: true,
                        },
                        on: {
                            click: function(e) {
                                if (this.zoom.scale === 1) {
                                    this.zoom.in();
                                } else {
                                    this.zoom.out();
                                }
                            },
                        },
                    });

                    prodPageSwiper.on('init', function() {
                        prodPageSwiper.slideTo(activeMediaIndex, 0, false);
                    });
                    prodPageSwiper.init();

                    document
                        .querySelector('.product-media-modal__toggle')
                        .addEventListener('click', function() {
                            prodPageSwiper.destroy();
                        });
                }
            }

            class ProductRecommendations extends HTMLElement {
                constructor() {
                    super();

                    const handleIntersection = (entries, observer) => {
                        if (!entries[0].isIntersecting) return;
                        observer.unobserve(this);

                        fetch(this.dataset.url)
                            .then((response) => response.text())
                            .then((text) => {
                                const html = document.createElement('div');
                                html.innerHTML = text;
                                const recommendations = html.querySelector(
                                    'product-recommendations'
                                );
                                if (recommendations && recommendations.innerHTML.trim().length) {
                                    this.innerHTML = recommendations.innerHTML;
                                }
                            })
                            .catch((e) => {
                                console.error(e);
                            });
                    };

                    new IntersectionObserver(handleIntersection.bind(this), {
                        rootMargin: '0px 0px 200px 0px',
                    }).observe(this);
                }
            }

            customElements.define('product-modal', ProductModal);
            customElements.define('product-recommendations', ProductRecommendations);

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["footer"]) return;
        try {

            class LocalizationForm extends HTMLElement {
                constructor() {
                    super();
                    this.elements = {
                        input: this.querySelector(
                            'input[name="locale_code"], input[name="country_code"]'
                        ),
                        button: this.querySelector('button'),
                        panel: this.querySelector('ul'),
                    };
                    this.elements.button.addEventListener(
                        'click',
                        this.openSelector.bind(this)
                    );
                    this.elements.button.addEventListener(
                        'focusout',
                        this.closeSelector.bind(this)
                    );
                    this.addEventListener('keyup', this.onContainerKeyUp.bind(this));

                    this.querySelectorAll('a').forEach((item) =>
                        item.addEventListener('click', this.onItemClick.bind(this))
                    );
                }

                hidePanel() {
                    this.elements.button.setAttribute('aria-expanded', 'false');
                    this.elements.panel.setAttribute('hidden', true);
                }

                onContainerKeyUp(event) {
                    if (event.code.toUpperCase() !== 'ESCAPE') return;

                    this.hidePanel();
                    this.elements.button.focus();
                }

                onItemClick(event) {
                    event.preventDefault();
                    this.elements.input.value = event.currentTarget.dataset.value;
                    this.querySelector('form') ? .submit();
                }

                openSelector() {
                    this.elements.button.focus();
                    this.elements.panel.toggleAttribute('hidden');
                    this.elements.button.setAttribute(
                        'aria-expanded',
                        (
                            this.elements.button.getAttribute('aria-expanded') === 'false'
                        ).toString()
                    );
                }

                closeSelector(event) {
                    const shouldClose =
                        event.relatedTarget && event.relatedTarget.nodeName === 'BUTTON';
                    if (event.relatedTarget === null || shouldClose) {
                        this.hidePanel();
                    }
                }
            }

            customElements.define('localization-form', LocalizationForm);

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["header"]) return;
        try {

            class StickyHeader extends HTMLElement {
                constructor() {
                    super();
                }

                connectedCallback() {
                    this.header = document.querySelector('.shopify-section-header');
                    this.header_overlay = document.querySelector('.header');
                    this.headerOverlay = document.querySelector('.overlay');

                    this.headerBounds = {};
                    this.predictiveSearch = this.querySelector('predictive-search');
                    this.currentScrollTop = 0;

                    this.onScrollHandler = this.onScroll.bind(this);

                    window.addEventListener('scroll', this.onScrollHandler, false);

                    this.createObserver();
                }

                disconnectedCallback() {
                    window.removeEventListener('scroll', this.onScrollHandler);
                }

                createObserver() {
                    let observer = new IntersectionObserver((entries, observer) => {
                        this.headerBounds = entries[0].intersectionRect;
                        observer.disconnect();
                    });

                    observer.observe(this.header);
                }



                onScroll() {
                    let logoSlideshowFirst = document.querySelector(".first-logo-slideshow")


                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                    if (logoSlideshowFirst) {
                        let logoSlideshowFirstHeight = logoSlideshowFirst.offsetHeight
                        if (scrollTop > this.currentScrollTop && scrollTop > logoSlideshowFirstHeight && scrollTop > this.headerBounds.bottom) {
                            requestAnimationFrame(this.hide.bind(this));
                            if (this.predictiveSearch && this.predictiveSearch.onFocusOut) {
                                this.predictiveSearch.onFocusOut();
                                this.predictiveSearch.onBlur();
                            }
                        } else if (scrollTop - logoSlideshowFirstHeight < this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
                            requestAnimationFrame(this.reveal.bind(this));
                        } else if (scrollTop - logoSlideshowFirstHeight <= this.headerBounds.top) {
                            requestAnimationFrame(this.reset.bind(this));
                        }

                        this.currentScrollTop = scrollTop;
                    } else {
                        if (scrollTop > this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
                            requestAnimationFrame(this.hide.bind(this));
                            if (this.predictiveSearch && this.predictiveSearch.onFocusOut) {
                                this.predictiveSearch.onFocusOut();
                                this.predictiveSearch.onBlur();
                            }
                        } else if (scrollTop < this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
                            requestAnimationFrame(this.reveal.bind(this));
                        } else if (scrollTop <= this.headerBounds.top) {
                            requestAnimationFrame(this.reset.bind(this));
                        }

                        this.currentScrollTop = scrollTop;
                    }
                }

                hide() {
                    this.header.classList.add('shopify-section-header-hidden', 'shopify-section-header-sticky');
                    this.closeMenuDisclosure();
                    //this.closeSearchModal();
                }

                reveal() {
                    this.header.classList.add('shopify-section-header-sticky', 'animate');
                    this.header.classList.add('shopify-section-header-sticky', 'animate');
                    this.headerOverlay && this.header_overlay.classList.add('header_overlay-scroll');
                    this.header.classList.remove('shopify-section-header-hidden');
                }

                reset() {
                    this.headerOverlay && this.header_overlay.classList.remove('header_overlay-scroll');
                    this.header.classList.remove('shopify-section-header-hidden', 'shopify-section-header-sticky', 'animate');
                }

                closeMenuDisclosure() {
                    this.disclosures = this.disclosures || this.header.querySelectorAll('details-disclosure');
                    this.disclosures.forEach(disclosure => disclosure.close());
                }

                closeSearchModal() {
                    this.searchModal = this.searchModal || this.header.querySelector('details-modal');
                    this.searchModal.close(false);
                }
            }

            customElements.define('sticky-header', StickyHeader);

            const events = [
                "shopify:section:reorder",
                "shopify:section:deselect",
                "shopify:section:select",
                "shopify:section:unload",
                "shopify:section:load",
            ];

            const header_overlay = () => {
                let headerOverlay = document.querySelector(".overlay");
                let headerHeightOverlay = headerOverlay && headerOverlay.offsetHeight;

                document.documentElement.style.setProperty('--my-header-height', headerHeightOverlay + "px");

                if (headerOverlay) {
                    document.querySelector("main").classList.add("header_overlay");
                } else {
                    document.querySelector("main").classList.remove("header_overlay");
                }
            };

            header_overlay();

            events.forEach(function(item) {
                document.addEventListener(item, function() {
                    header_overlay();
                });
            });

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["main-blog"]) return;
        try {

            const events = [
                'shopify:section:reorder',
                'shopify:section:deselect',
                'shopify:section:select',
                'shopify:section:unload',
                'shopify:section:load',
            ];

            const blog_header_overlay = () => {
                let headerOverlay = document.querySelector('.overlay');
                let colorScheme = document.querySelector('.header-color-light');

                if (headerOverlay) {
                    if (colorScheme) {
                        headerOverlay.classList.add('theme-dark');
                        headerOverlay.classList.add('header-color-background-5');
                    } else {
                        headerOverlay.classList.remove('theme-dark');
                        headerOverlay.classList.remove('header-color-background-5');
                        headerOverlay.classList.add('color-background-1');
                    }
                }
            };

            blog_header_overlay();

            events.forEach(function(item) {
                document.addEventListener(item, function() {
                    blog_header_overlay();
                });
            });

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["main-cart-footer"]) return;
        try {

            class CartNote extends HTMLElement {
                constructor() {
                    super();

                    this.addEventListener(
                        'change',
                        debounce((event) => {
                            const body = JSON.stringify({
                                note: event.target.value
                            });
                            fetch(`${routes.cart_update_url}`, { ...fetchConfig(),
                                ...{
                                    body
                                }
                            });
                        }, 300)
                    );
                }
            }

            customElements.define('cart-note', CartNote);

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["main-collection-banner"]) return;
        try {

            const events = [
                'shopify:section:reorder',
                'shopify:section:deselect',
                'shopify:section:select',
                'shopify:section:unload',
                'shopify:section:load',
            ];

            const main_collection_banner = () => {
                let headerOverlay = document.querySelector('.overlay');
                let colorScheme = document.querySelector('.header-color-light');

                if (headerOverlay) {
                    if (colorScheme) {
                        headerOverlay.classList.add('theme-dark');
                        headerOverlay.classList.add('header-color-background-5');
                    } else {
                        headerOverlay.classList.remove('theme-dark');
                        headerOverlay.classList.remove('header-color-background-5');
                        headerOverlay.classList.add('color-background-1');
                    }
                }
            };

            main_collection_banner();

            events.forEach(function(item) {
                document.addEventListener(item, function() {
                    main_collection_banner();
                });
            });

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["main-login"]) return;
        try {

            const events = [
                'shopify:section:reorder',
                'shopify:section:deselect',
                'shopify:section:select',
                'shopify:section:unload',
                'shopify:section:load',
            ];

            const account_header_overlay = () => {
                let headerOverlay = document.querySelector('.overlay');
                let colorScheme = document.querySelector('.header-color-light');

                if (headerOverlay) {
                    if (colorScheme) {
                        headerOverlay.classList.add('theme-dark');
                        headerOverlay.classList.add('header-color-background-5');
                    } else {
                        headerOverlay.classList.remove('theme-dark');
                        headerOverlay.classList.remove('header-color-background-5');
                        headerOverlay.classList.add('color-background-1');
                    }
                }
            };

            account_header_overlay();

            events.forEach(function(item) {
                document.addEventListener(item, function() {
                    account_header_overlay();
                });
            });

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["main-product"]) return;
        try {

            class ProductModal extends ModalDialog {
                constructor() {
                    super();
                }

                hide() {
                    super.hide();
                    window.pauseAllMedia();
                }

                show(opener) {
                    super.show(opener);
                    //this.showActiveMedia();
                    this.constProductPageSwiperCall()
                }
                showActiveMedia() {

                    this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach((element) => {
                        element.classList.remove('active');
                    })

                    const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`);
                    const activeMediaTemplate = activeMedia.querySelector('template');
                    const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
                    activeMedia.classList.add('active');

                    activeMedia.scrollIntoView();

                    if (
                        activeMedia.nodeName == 'DEFERRED-MEDIA' &&
                        activeMediaContent &&
                        activeMediaContent.querySelector('.js-youtube')
                    )
                        activeMedia.loadContent();
                }

                constProductPageSwiperCall(showActiveMedia) {
                    const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`);
                    let activeMediaIndex = 0

                    this.querySelectorAll(`.swiper-slide`).forEach((element, index) => {
                        if (element == activeMedia) {
                            activeMediaIndex = index
                        }
                    })

                    const prodPageSwiper = new Swiper("#product-page-swiper", {
                        zoom: true,
                        centeredSlides: false,
                        slidesPerView: 1,
                        autoheight: true,
                        watchSlidesVisibility: false,
                        watchSlidesProgress: true,
                        observer: true,
                        observeParents: true,
                        init: false,
                        navigation: {
                            nextEl: ".swiper-button-next-prod-page",
                            prevEl: ".swiper-button-prev-prod-page",
                        },
                        pagination: {
                            el: ".swiper-pagination-product-page",
                            clickable: true,
                        },
                        on: {
                            click: function(e) {
                                if (this.zoom.scale === 1) {
                                    this.zoom.in();
                                } else {
                                    this.zoom.out();
                                }
                            },
                        },
                    });

                    prodPageSwiper.on('init', function() {
                        prodPageSwiper.slideTo(activeMediaIndex, 0, false);
                    });
                    prodPageSwiper.init()

                    document.querySelector('.product-media-modal__toggle').addEventListener("click", function() {
                        prodPageSwiper.destroy()
                    });
                }
            }

            class ProductRecommendations extends HTMLElement {
                constructor() {
                    super();

                    const handleIntersection = (entries, observer) => {
                        if (!entries[0].isIntersecting) return;
                        observer.unobserve(this);

                        fetch(this.dataset.url)
                            .then(response => response.text())
                            .then(text => {
                                const html = document.createElement('div');
                                html.innerHTML = text;
                                const recommendations = html.querySelector('product-recommendations');
                                if (recommendations && recommendations.innerHTML.trim().length) {
                                    this.innerHTML = recommendations.innerHTML;
                                }
                            })
                            .catch(e => {
                                console.error(e);
                            });
                    }

                    new IntersectionObserver(handleIntersection.bind(this), {
                        rootMargin: '0px 0px 200px 0px'
                    }).observe(this);
                }
            }

            customElements.define('product-modal', ProductModal);
            customElements.define('product-recommendations', ProductRecommendations);


        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["main-register"]) return;
        try {

            const events = [
                'shopify:section:reorder',
                'shopify:section:deselect',
                'shopify:section:select',
                'shopify:section:unload',
                'shopify:section:load',
            ];

            const account_header_overlay = () => {
                let headerOverlay = document.querySelector('.overlay');
                let colorScheme = document.querySelector('.header-color-light');

                if (headerOverlay) {
                    if (colorScheme) {
                        headerOverlay.classList.add('theme-dark');
                        headerOverlay.classList.add('header-color-background-5');
                    } else {
                        headerOverlay.classList.remove('theme-dark');
                        headerOverlay.classList.remove('header-color-background-5');
                        headerOverlay.classList.add('color-background-1');
                    }
                }
            };

            account_header_overlay();

            events.forEach(function(item) {
                document.addEventListener(item, function() {
                    account_header_overlay();
                });
            });

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["product-recommendations"]) return;
        try {

            class ProductRecommendations extends HTMLElement {
                constructor() {
                    super();

                    const handleIntersection = (entries, observer) => {
                        if (!entries[0].isIntersecting) return;
                        observer.unobserve(this);

                        fetch(this.dataset.url)
                            .then((response) => response.text())
                            .then((text) => {
                                const html = document.createElement('div');
                                html.innerHTML = text;
                                const recommendations = html.querySelector(
                                    'product-recommendations-also-like'
                                );
                                if (recommendations && recommendations.innerHTML.trim().length) {
                                    this.innerHTML = recommendations.innerHTML;
                                }
                            })
                            .catch((e) => {
                                console.error(e);
                            });
                    };

                    new IntersectionObserver(handleIntersection.bind(this), {
                        rootMargin: '0px 0px 200px 0px',
                    }).observe(this);
                }
            }

            customElements.define(
                'product-recommendations-also-like',
                ProductRecommendations
            );

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["video-banner"] && !window.DesignMode) return;
        try {

            const events = [
                'shopify:section:reorder',
                'shopify:section:deselect',
                'shopify:section:select',
                'shopify:section:unload',
                'shopify:section:load',
            ];

            const banner_video = () => {
                let headerOverlay = document.querySelector('.overlay');
                let pageAbout = document.querySelector('.page-about');
                let pageLookbook = document.querySelector('.page-lookbook');
                let breadCrumb = document.querySelector('.main-breadcrumb');
                let colorScheme = document.querySelector('.header-color-light');
                let colorSchemeDark = document.querySelector('.header-color-dark');
                let firstSection = document.querySelector('section:first-of-type');

                if (
                    headerOverlay &&
                    firstSection.classList.contains('video-banner-section')
                ) {
                    document.querySelector('main').classList.add('page-about');
                    let pageAbout = document.querySelector('.page-about');
                    let pageLookbook = document.querySelector('.page-lookbook');
                    if (colorScheme) {
                        headerOverlay.classList.add('theme-dark');
                        headerOverlay.classList.add('header-color-background-5');
                        if (pageAbout || pageLookbook) {
                            breadCrumb.classList.add('color-background-5');
                        }
                    }

                    if (colorSchemeDark) {
                        headerOverlay.classList.remove('theme-dark');
                        headerOverlay.classList.remove('header-color-background-5');
                        headerOverlay.classList.add('color-background-1');
                        if (pageAbout || pageLookbook) {
                            breadCrumb.classList.remove('color-background-5');
                        }
                    }
                } else {
                    if (colorScheme) {
                        if (pageAbout || pageLookbook) {
                            breadCrumb.classList.add('color-background-5');
                        }
                    }

                    if (colorSchemeDark) {
                        if (pageAbout || pageLookbook) {
                            breadCrumb.classList.remove('color-background-5');
                        }
                    }
                }
            };

            banner_video();

            events.forEach(function(item) {
                document.addEventListener(item, function() {
                    banner_video();
                });
            });

        } catch (e) {
            console.error(e);
        }
    })();
})();