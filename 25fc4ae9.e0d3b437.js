(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(175)),c={id:"continous_integration",title:"Continous Integration"},i={id:"continous_integration",title:"Continous Integration",description:"One very useful command for CI is the `build-changed` command.",source:"@site/docs/continous_integration.md",permalink:"/docs/continous_integration",editUrl:"https://github.com/CantaraJS/cantara/edit/master/docs/docs/continous_integration.md",sidebar:"main",previous:{title:"Publishing packages to NPM",permalink:"/docs/publish_to_npm"},next:{title:"Executing arbitrary commands for apps/packages",permalink:"/docs/execute_arbitrary_cmds"}},u=[],s={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"One very useful command for CI is the ",Object(o.b)("inlineCode",{parentName:"p"},"build-changed")," command."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ctra build-changed\n")),Object(o.b)("p",null,"This will only rebuild the parts of your repository which changed since the last commit and can therfore save precious CI execution time."),Object(o.b)("p",null,"The counterpart for testing is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ctra test-changed\n")),Object(o.b)("p",null,"Like this, you can re-build and test only the parts of your repository which actually changed."),Object(o.b)("p",null,"Currently, you need to integrate those commands with your CI system yourself. Contributions in that area are very welcome!"),Object(o.b)("p",null,"To execute arbitrary commands when parts of the repository changed, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"exec-changed")," command. ",Object(o.b)("strong",{parentName:"p"},"Example"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ctra exec-changed express-api ./upload-to-server.sh\n")),Object(o.b)("p",null,"If you execute this command in your CI system, the ",Object(o.b)("inlineCode",{parentName:"p"},"upload-to-server.sh")," script will only be executed if the code in ",Object(o.b)("inlineCode",{parentName:"p"},"node-apps/express-api")," changed since the last commit. This command can be useful to do stuff like uploading newly generated assets to a CDN or a server."))}l.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i({ref:t},s,{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);