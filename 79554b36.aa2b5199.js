(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{156:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var a=t(1),i=t(9),r=(t(0),t(175)),p={id:"building_packages_apps",title:"Building packages/apps"},c={id:"building_packages_apps",title:"Building packages/apps",description:"To create an optimized production build of your application or package, use the `build` command.",source:"@site/docs/building_packages_apps.md",permalink:"/docs/building_packages_apps",editUrl:"https://github.com/CantaraJS/cantara/edit/master/docs/docs/building_packages_apps.md",sidebar:"main",previous:{title:"Environment variables",permalink:"/docs/environment_variables"},next:{title:"Deploying serverless endpoints",permalink:"/docs/deploying_serverless"}},o=[{value:"Differences between packages and apps",id:"differences-between-packages-and-apps",children:[{value:"Building packages",id:"building-packages",children:[]}]},{value:"Building apps",id:"building-apps",children:[]}],l={rightToc:o};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To create an optimized production build of your application or package, use the ",Object(r.b)("inlineCode",{parentName:"p"},"build")," command."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ctra build <app-name|package-name>\n")),Object(r.b)("p",null,"The result will be available under the ",Object(r.b)("inlineCode",{parentName:"p"},"build")," folder of the specified application/package."),Object(r.b)("h2",{id:"differences-between-packages-and-apps"},"Differences between packages and apps"),Object(r.b)("h3",{id:"building-packages"},"Building packages"),Object(r.b)("p",null,"When building packages, you get a ready to use NPM package under ",Object(r.b)("inlineCode",{parentName:"p"},"build")," which can be ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"in_depth_tutorial_publish_to_npm"}),"published to NPM"),"."),Object(r.b)("p",null,"Besides that, ",Object(r.b)("strong",{parentName:"p"},"TypeScript")," types are automatically generated. So anyone consuming this package gets autocompletion and intellisense out of the box! What a time to be alive."),Object(r.b)("p",null,"The package which is generated to be used in CommonJS environments doesn't contain any dependencies. Which is the way it should be. But if you would like to use your package in e.g. directly the browser by including it via a ",Object(r.b)("inlineCode",{parentName:"p"},"<script>")," tag, Cantara also create a minfied ",Object(r.b)("inlineCode",{parentName:"p"},"UMD")," build, called ",Object(r.b)("inlineCode",{parentName:"p"},"<package-name>.min.umd.js"),"."),Object(r.b)("h2",{id:"building-apps"},"Building apps"),Object(r.b)("p",null,"When building React apps, the contents of the ",Object(r.b)("inlineCode",{parentName:"p"},"build")," folder can directly be published to a CDN/server."),Object(r.b)("p",null,"Building NodeJS apps results in an executable ",Object(r.b)("inlineCode",{parentName:"p"},"main.js")," file. Execute ",Object(r.b)("inlineCode",{parentName:"p"},"node main.js")," to start your server in production."),Object(r.b)("p",null,"Directly building serverless endpoints doesn't work, as this happens as part of the ",Object(r.b)("inlineCode",{parentName:"p"},"deploy")," command."))}s.isMDXComponent=!0},175:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,m=u["".concat(p,".").concat(b)]||u[b]||d[b]||r;return t?i.a.createElement(m,c({ref:n},l,{components:t})):i.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=b;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var l=2;l<r;l++)p[l]=t[l];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);