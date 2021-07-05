(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6859],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=c,w=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(w,a(a({ref:t},p),{},{components:n})):r.createElement(w,a({ref:t},p))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:c,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2521:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(2122),c=n(9756),i=(n(7294),n(3905)),a=["components"],o={title:"cw20-base Spec",sidebar_position:2},s="CW20 Basic",l={unversionedId:"cw-plus/cw20/cw20-base-spec",id:"cw-plus/cw20/cw20-base-spec",isDocsHomePage:!1,title:"cw20-base Spec",description:"This is a basic implementation of a cw20 contract. It implements the cw20 spec and is designed to be deployed",source:"@site/docs/cw-plus/cw20/cw20-base-spec.md",sourceDirName:"cw-plus/cw20",slug:"/cw-plus/cw20/cw20-base-spec",permalink:"/docs/0.14/cw-plus/cw20/cw20-base-spec",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/cw-plus/cw20/cw20-base-spec.md",version:"current",sidebarPosition:2,frontMatter:{title:"cw20-base Spec",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CW20 Spec: Fungible Tokens",permalink:"/docs/0.14/cw-plus/cw20/spec"},next:{title:"cw20-base Tutorial",permalink:"/docs/0.14/cw-plus/cw20/cw20-base-tutorial"}},p=[{value:"Importing this contract",id:"importing-this-contract",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,c.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cw20-basic"},"CW20 Basic"),(0,i.kt)("p",null,"This is a basic implementation of a cw20 contract. It implements the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.14/cw-plus/cw20/spec"},"cw20 spec")," and is designed to be deployed\nas is, or imported into other contracts to easily build cw20-compatible tokens with custom logic."),(0,i.kt)("p",null,"Implements:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","cw20 Base"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Mintable extension"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Allowances extension")),(0,i.kt)("h2",{id:"importing-this-contract"},"Importing this contract"),(0,i.kt)("p",null,"You can also import much of the logic of this contract to build another ERC20-contract, such as a bonding curve,\noverriding or extending what you need."),(0,i.kt)("p",null,"Basically, you just need to write your handle function and import\n",(0,i.kt)("inlineCode",{parentName:"p"},"cw20_base::contract::handle_transfer"),", etc and dispatch to them. This allows you to use custom ",(0,i.kt)("inlineCode",{parentName:"p"},"HandleMsg"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg")," with your additional calls, but then use the underlying implementation for the standard cw20 messages you\nwant to support. The same with ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg"),". You ",(0,i.kt)("em",{parentName:"p"},"could")," reuse ",(0,i.kt)("inlineCode",{parentName:"p"},"init"),"\nas it, but it is likely you will want to change it. And it is rather simple."))}d.isMDXComponent=!0}}]);