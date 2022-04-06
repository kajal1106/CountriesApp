(() => {
var exports = {};
exports.id = 368;
exports.ids = [368];
exports.modules = {

/***/ 2118:
/***/ ((module) => {

// Exports
module.exports = {
	"AnimateEntry": "PageHeader_AnimateEntry__OmduB",
	"pageContentBlockEntry": "PageHeader_pageContentBlockEntry__82JDn",
	"PageCountryIndex": "PageHeader_PageCountryIndex__zE5pl",
	"AppNavBar": "PageHeader_AppNavBar__Ln7dW",
	"LoadingBlocker": "PageHeader_LoadingBlocker__fLSoN",
	"AppPortal": "PageHeader_AppPortal__MhTOx",
	"DialogLayer": "PageHeader_DialogLayer___7Jdf",
	"grid": "PageHeader_grid__Bg_R_",
	"no-grid": "PageHeader_no-grid__CPgmp",
	"grid-tablet-span-1": "PageHeader_grid-tablet-span-1__QBELF",
	"grid-span-1": "PageHeader_grid-span-1__Mk_V8",
	"grid-span-2": "PageHeader_grid-span-2__n6xf5",
	"grid-phone-span-2": "PageHeader_grid-phone-span-2__J3BRw",
	"grid-tablet-span-2": "PageHeader_grid-tablet-span-2__XfSeA",
	"grid-span-3": "PageHeader_grid-span-3__Xbc_D",
	"grid-phone-span-3": "PageHeader_grid-phone-span-3__1_hcC",
	"grid-tablet-span-3": "PageHeader_grid-tablet-span-3__C6bPV",
	"grid-span-4": "PageHeader_grid-span-4__q46cL",
	"grid-phone-span-4": "PageHeader_grid-phone-span-4__hL5TB",
	"grid-tablet-span-4": "PageHeader_grid-tablet-span-4__KB4EJ",
	"grid-span-5": "PageHeader_grid-span-5__OdCoS",
	"grid-phone-span-5": "PageHeader_grid-phone-span-5__eM2z5",
	"grid-tablet-span-5": "PageHeader_grid-tablet-span-5__H_Rwr",
	"grid-span-6": "PageHeader_grid-span-6__7YkE1",
	"grid-phone-span-6": "PageHeader_grid-phone-span-6__JMTsO",
	"grid-tablet-span-6": "PageHeader_grid-tablet-span-6__SqhSX",
	"pageSection": "PageHeader_pageSection__OfA_P",
	"container": "PageHeader_container__EFNZ7",
	"PageHeader": "PageHeader_PageHeader__8kO8m",
	"filterCountries__container": "PageHeader_filterCountries__container__vZnfa",
	"categoryTags": "PageHeader_categoryTags__1caIv",
	"filterCountries": "PageHeader_filterCountries__I3l3s",
	"sortSelect": "PageHeader_sortSelect__Vf8tv"
};


/***/ }),

/***/ 6208:
/***/ ((module) => {

// Exports
module.exports = {
	"AnimateEntry": "Home_AnimateEntry__O7wHY",
	"pageContentBlockEntry": "Home_pageContentBlockEntry__wOUP3",
	"PageCountryIndex": "Home_PageCountryIndex__h5PhF",
	"AppNavBar": "Home_AppNavBar__eMPA3",
	"LoadingBlocker": "Home_LoadingBlocker__0PS_e",
	"AppPortal": "Home_AppPortal__XY64V",
	"DialogLayer": "Home_DialogLayer__qYzXG",
	"grid": "Home_grid__npx0i",
	"no-grid": "Home_no-grid__f2o36",
	"grid-tablet-span-1": "Home_grid-tablet-span-1__a6_qp",
	"grid-span-1": "Home_grid-span-1__GbxDo",
	"grid-span-2": "Home_grid-span-2__s6ZAK",
	"grid-phone-span-2": "Home_grid-phone-span-2__YUA09",
	"grid-tablet-span-2": "Home_grid-tablet-span-2__Vt6Sd",
	"grid-span-3": "Home_grid-span-3__j_tH0",
	"grid-phone-span-3": "Home_grid-phone-span-3__0XgsC",
	"grid-tablet-span-3": "Home_grid-tablet-span-3__bHCuX",
	"grid-span-4": "Home_grid-span-4__wUr0h",
	"grid-phone-span-4": "Home_grid-phone-span-4__MuxcX",
	"grid-tablet-span-4": "Home_grid-tablet-span-4__cTbfs",
	"grid-span-5": "Home_grid-span-5__FjfsI",
	"grid-phone-span-5": "Home_grid-phone-span-5__MX6ML",
	"grid-tablet-span-5": "Home_grid-tablet-span-5__xqq4J",
	"grid-span-6": "Home_grid-span-6__sbQzd",
	"grid-phone-span-6": "Home_grid-phone-span-6__r62bo",
	"grid-tablet-span-6": "Home_grid-tablet-span-6__dg_xk",
	"pageSection": "Home_pageSection__Bd_fJ",
	"container": "Home_container__97eC3",
	"PageCountryIndexContent": "Home_PageCountryIndexContent__Z3BRy",
	"PageBackdropLayer": "Home_PageBackdropLayer__J61kH",
	"loading": "Home_loading__10Rkg",
	"spin": "Home_spin__ySelc"
};


/***/ }),

/***/ 5362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ countries),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/AppNavBar/AppNavBar.tsx + 2 modules
var AppNavBar = __webpack_require__(8914);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/addCommaToNumbers.utils.ts
var addCommaToNumbers_utils = __webpack_require__(8090);
// EXTERNAL MODULE: ./components/CountryCard/CountryCard.module.scss
var CountryCard_module = __webpack_require__(9551);
var CountryCard_module_default = /*#__PURE__*/__webpack_require__.n(CountryCard_module);
;// CONCATENATED MODULE: ./components/CountryCard/CountryCard.tsx





const CountryCard = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (CountryCard_module_default()).CountryCard,
        "data-country": props.country.name.common,
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            as: `/countries/${props.country.cca2.toLowerCase()}`,
            href: `/countries/${props.country.cca2.toLowerCase()}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: `/countries/${props.country.cca2.toLowerCase()}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (CountryCard_module_default()).CountryCardInner,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("header", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (CountryCard_module_default()).CountryCardFlag,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: props.country.flags.svg,
                                        alt: props.country.name.common
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (CountryCard_module_default()).CountryRegionTag,
                                        children: props.country.region
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (CountryCard_module_default()).CountryCardInfo,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (CountryCard_module_default()).CountryCardInfoHeading,
                                    children: [
                                        props.country.name.common && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            "data-cy": props.country.name.common,
                                            className: (CountryCard_module_default()).CountryName,
                                            children: props.country.name.common
                                        }),
                                        props.country.flag && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: props.country.flag
                                        })
                                    ]
                                }),
                                props.country.capital.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Capital: "
                                        }),
                                        " ",
                                        props.country.capital
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Population: "
                                        }),
                                        props.country.population && (0,addCommaToNumbers_utils/* addCommaToNumber */.E)(props.country.population)
                                    ]
                                }),
                                props.country.area && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Area: "
                                        }),
                                        props.country.area
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const CountryCard_CountryCard = (CountryCard);

;// CONCATENATED MODULE: ./constants/index.tsx
const REGIONS = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania", 
];
const LIST_SEPERATOR = ", ";

// EXTERNAL MODULE: ./components/PageHeader/PageHeader.module.scss
var PageHeader_module = __webpack_require__(2118);
var PageHeader_module_default = /*#__PURE__*/__webpack_require__.n(PageHeader_module);
;// CONCATENATED MODULE: ./components/PageHeader/PageHeader.tsx




const PageHeader = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (PageHeader_module_default()).PageHeader,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (PageHeader_module_default()).filterCountries__container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (PageHeader_module_default()).filterCountries,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Filter country by Region:"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (PageHeader_module_default()).categoryTags,
                            children: REGIONS.map((region, i)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    "data-cy-region": region,
                                    className: (PageHeader_module_default()).filterLocationButtons,
                                    onClick: ()=>props.filterRegion(region)
                                    ,
                                    children: region
                                }, `region-${i}`)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (PageHeader_module_default()).sortSelect,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            is: "sort-booking",
                            onChange: (e)=>props.sortCountries(e)
                            ,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "A",
                                    children: "Sort:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "PopulationAsc",
                                    children: "Population: Low to High"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "PopulationDesc",
                                    children: "Population: High to Low"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "AreaAsc",
                                    children: "Area: Low to High"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "AreaDesc",
                                    children: "Area: High to Low"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            width: "16",
                            height: "32",
                            viewBox: "0 0 16 32",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M1.40039 15.2466L8.20039 19.2466L15.0004 15.2466",
                                stroke: "#171C29",
                                strokeWidth: "1.6",
                                strokeLinecap: "round"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const PageHeader_PageHeader = (PageHeader);

// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(6208);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/countries/index.tsx







const Home = (props)=>{
    const { 0: filteredCountries1 , 1: setFilteredCountries  } = (0,external_react_.useState)(props.countries);
    const { 0: regionValue , 1: setRegionValue  } = (0,external_react_.useState)("");
    const { 0: isLoading , 1: setLoading  } = (0,external_react_.useState)(true);
    const { 0: sortFilter , 1: setSortFilter  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1000);
    }, []);
    const filterBasedOnRegion = (value)=>{
        setRegionValue(value);
        if (value === "") {
            setFilteredCountries(props.countries);
        } else {
            const filteredCountries = props.countries.filter((country)=>country.region === value
            );
            setFilteredCountries(filteredCountries);
        }
    };
    const InputOnChange = (e)=>{
        if (e.currentTarget.value === "") {
            setFilteredCountries(props.countries);
        } else {
            const filteredCountries = props.countries.filter((country)=>country.name.common.toLowerCase().includes(e.currentTarget.value)
            );
            setFilteredCountries(filteredCountries);
        }
    };
    const sortCountries = (e)=>{
        const sortFilterOption = e.currentTarget.value;
        setSortFilter(sortFilterOption);
        if (sortFilterOption === "PopulationAsc") {
            const sortedData = props.countries.sort((a, b)=>{
                return a.population - b.population;
            });
            setFilteredCountries(sortedData);
        }
        if (sortFilterOption === "PopulationDesc") {
            const sortedData = props.countries.sort((a, b)=>{
                return b.population - a.population;
            });
            console.log(sortedData);
            setFilteredCountries(sortedData);
        }
        if (sortFilterOption === "AreaAsc") {
            const sortedData = props.countries.sort((a, b)=>a.area - b.area
            );
            setFilteredCountries(sortedData);
        }
        if (sortFilterOption === "AreaDesc") {
            const sortedData = props.countries.sort((a, b)=>b.area - a.area
            );
            setFilteredCountries(sortedData);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${[
                (Home_module_default()).pageSection
            ]} ${[
                (Home_module_default()).PageCountryIndex
            ]}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(AppNavBar/* default */.Z, {
                        InputOnChange: InputOnChange,
                        isHomePage: true
                    }),
                    isLoading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Home_module_default()).loading,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    }),
                    !isLoading && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(PageHeader_PageHeader, {
                                filterRegion: filterBasedOnRegion,
                                sortCountries: sortCountries
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${[
                                    (Home_module_default()).PageCountryIndexContent
                                ]} ${[
                                    (Home_module_default()).grid1
                                ]} ${[
                                    (Home_module_default()).AnimateEntry
                                ]}`,
                                children: filteredCountries1.map((country, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CountryCard_CountryCard, {
                                            country: country
                                        }, index)
                                    }, index)
                                )
                            })
                        ]
                    })
                ]
            })
        })
    });
};
async function getStaticProps() {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=flag,flags,cca2,name,nativeName,population,region,capital,area");
        const countries = await res.json();
        if (!res) return {
            notFound: true
        };
        return {
            props: {
                countries
            }
        };
    } catch (e) {
        return {
            notFound: true
        };
    }
}
/* harmony default export */ const countries = (Home);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,914,885], () => (__webpack_exec__(5362)));
module.exports = __webpack_exports__;

})();