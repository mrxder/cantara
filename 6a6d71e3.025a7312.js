(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(175)),i={id:"maintainers_intro",title:"Developing Cantara"},c={id:"maintainers_intro",title:"Developing Cantara",description:"This is for everyone who wishes to contribute to Cantara.",source:"@site/docs/maintainers_intro.md",permalink:"/docs/maintainers_intro",editUrl:"https://github.com/CantaraJS/cantara/edit/master/docs/docs/maintainers_intro.md",sidebar:"main",previous:{title:"Official starter templates",permalink:"/docs/starter_templates"}},p=[{value:"Start development",id:"start-development",children:[]},{value:"Building cantara",id:"building-cantara",children:[]}],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is for everyone who wishes to contribute to Cantara."),Object(o.b)("p",null,"This page is heavily WIP."),Object(o.b)("h2",{id:"start-development"},"Start development"),Object(o.b)("p",null,"Create a .env file in the root of the project.\nSet the following values:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"DEV_PROJECT_PATH=path/to/a/cantara/project\nDEV_CANTARA_COMMAND=dev app-x\n")),Object(o.b)("p",null,"Set ",Object(o.b)("inlineCode",{parentName:"p"},"DEV_PROJECT_PATH")," to a path of a Cantara project. Use ",Object(o.b)("inlineCode",{parentName:"p"},"DEV_CANTARA_COMMAND")," to simulate a command.\nNow run ",Object(o.b)("inlineCode",{parentName:"p"},"npm start")," to start the development."),Object(o.b)("h2",{id:"building-cantara"},"Building cantara"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n")))}u.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);