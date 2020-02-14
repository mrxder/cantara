(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{140:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return a?r.a.createElement(m,i({ref:t},b,{components:a})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),c=(a(0),a(140)),o={id:"cantara_config_js",title:"cantara.config.js"},i={id:"cantara_config_js",title:"cantara.config.js",description:"Every package and application can have an associated `cantara.config.js` file in it's root.\r",source:"@site/docs\\cantara_config_js.md",permalink:"/cantara/docs/cantara_config_js",editUrl:"https://github.com/CantaraJS/cantara/edit/master/docs/docs/cantara_config_js.md",sidebar:"main",previous:{title:"CSS",permalink:"/cantara/docs/css"},next:{title:"Official starter templates",permalink:"/cantara/docs/starter_templates"}},l=[],b={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Every package and application can have an associated ",Object(c.b)("inlineCode",{parentName:"p"},"cantara.config.js")," file in it's root.\nHere, several parameters, depending on the type of the package or application, can be set."),Object(c.b)("p",null,"In the very root you project, you can also create a ",Object(c.b)("inlineCode",{parentName:"p"},"cantara.config.js")," file to tweak several parameters."),Object(c.b)("p",null,"Below you will a list of all possible values of a ",Object(c.b)("inlineCode",{parentName:"p"},"cantara.config.js")," file."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"property name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"where to use"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"env"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"react-apps/node-apps"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"The required environment variables for this app.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"e2e"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"project root"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Have a look at the ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"e2e_testing"}),"E2E testing guide"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"displayName"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"react-apps"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Display name which will be used in PWA manifest and inside ",Object(c.b)("inlineCode",{parentName:"td"},"<title>")," tag of index.html")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"themeColor"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"react-apps"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Theme color to be used in PWA manifest")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"skipCacheInvalidation"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"serverless-endpoints"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"If this is set to true, nodemon is used to manually restart serverless offline after each change. Can be used to avoid reaching the maximum number of DB connection and the need to establish a new DB connection for every new call. Depends on your architecture if you need this")))))}p.isMDXComponent=!0}}]);