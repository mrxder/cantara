(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(175)),i={id:"css",title:"CSS"},c={id:"css",title:"CSS",description:"There are essentially **3** ways to style your React applications using Cantara. Cantara tries to make no assumptions how you plan to use CSS.",source:"@site/docs/css.md",permalink:"/docs/css",editUrl:"https://github.com/CantaraJS/cantara/edit/master/docs/docs/css.md",sidebar:"main",previous:{title:"E2E/Integration testing with Cypress",permalink:"/docs/e2e_testing"},next:{title:"cantara.config.js",permalink:"/docs/cantara_config_js"}},s=[{value:"Using CSS-in-JS",id:"using-css-in-js",children:[]},{value:"Importing CSS files directly",id:"importing-css-files-directly",children:[]},{value:"CSS modules",id:"css-modules",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are essentially ",Object(o.b)("strong",{parentName:"p"},"3")," ways to style your React applications using Cantara. Cantara tries to make no assumptions how you plan to use CSS."),Object(o.b)("h2",{id:"using-css-in-js"},"Using CSS-in-JS"),Object(o.b)("p",null,"You can just use your favorite CSS-in-JS solution like you are used to. Cantara doesn't change that in any way."),Object(o.b)("h2",{id:"importing-css-files-directly"},"Importing CSS files directly"),Object(o.b)("p",null,"You can can import css files anywhere:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// SomeComponent.tsx\nimport './index.css';\n")),Object(o.b)("p",null,"Styles defined like this will be applied globally."),Object(o.b)("h2",{id:"css-modules"},"CSS modules"),Object(o.b)("p",null,"By appending ",Object(o.b)("inlineCode",{parentName:"p"},".module.css")," to your CSS file, you can make use of CSS modules, like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"/* index.modules.css */\n.red-box {\n  background: red;\n  height: 20px;\n  width: 20px;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// SomeComponent.tsx\nimport { redBox } from './index.module.css';\n")))}u.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);