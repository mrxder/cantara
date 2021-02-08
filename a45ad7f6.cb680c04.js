(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{164:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(9),i=(r(0),r(182)),c={id:"css_modules_types",title:"TypeScript + CSS Modules"},a={id:"css_modules_types",title:"TypeScript + CSS Modules",description:"When using CSS Modules, it's handy to have correctly typed imports during development.",source:"@site/docs/types_for_css_modules.md",permalink:"/docs/css_modules_types",editUrl:"https://github.com/CantaraJS/cantara/edit/master/docs/docs/types_for_css_modules.md",sidebar:"main",previous:{title:"Overwriding the External Dependencies Map for Webpack",permalink:"/docs/external_dependencies"},next:{title:"cantara_config_js",permalink:"/docs/cantara_config_js"}},s=[],p={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When using CSS Modules, it's handy to have correctly typed imports during development."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/mrmckeb/typescript-plugin-css-modules/main/.github/images/example.gif",alt:"autocomplete"}))),Object(i.b)("p",null,"This should work out of the box with Cantara thanks to an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mrmckeb/typescript-plugin-css-modules"}),"awesome language server plugin"),"."),Object(i.b)("p",null,"Because it's just a language server plugin, this won't work during build time and is just a helper when developing your app with VSCode."),Object(i.b)("p",null,"To use this plugin with Visual Studio Code, you should set your workspace's version of TypeScript, which will load plugins from your tsconfig.json file."),Object(i.b)("p",null,"For instructions, see: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript"}),"Using the workspace version of TypeScript")))}u.isMDXComponent=!0},182:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return r?o.a.createElement(f,a({ref:t},p,{components:r})):o.a.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);