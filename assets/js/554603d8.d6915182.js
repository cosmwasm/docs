(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1015],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),w=l(n),d=o,m=w["".concat(i,".").concat(d)]||w[d]||u[d]||c;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=w;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},3378:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),a=["components"],s={title:"cw20-escrow Spec",sidebar_position:5},i={unversionedId:"cw-plus/cw20/cw20-escrow-spec",id:"version-0.14/cw-plus/cw20/cw20-escrow-spec",isDocsHomePage:!1,title:"CW20 Escrow",description:"cw20-escrow source code//github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-escrow",source:"@site/versioned_docs/version-0.14/cw-plus/cw20/cw20-escrow-spec.md",sourceDirName:"cw-plus/cw20",slug:"/cw-plus/cw20/cw20-escrow-spec",permalink:"/cw-plus/cw20/cw20-escrow-spec",editUrl:"https://github.com/CosmWasm/docs/edit/main/versioned_docs/version-0.14/cw-plus/cw20/cw20-escrow-spec.md",version:"0.14",sidebarPosition:5,frontMatter:{title:"cw20-escrow Spec",sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"CW20 Bonding curve",permalink:"/cw-plus/cw20/cw20-bonding-spec"},next:{title:"CW20 Staking Derivates",permalink:"/cw-plus/cw20/cw20-staking-spec"}},l=[{value:"Token types",id:"token-types",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"cw20-escrow source code: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-escrow"},"https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-escrow")),(0,c.kt)("p",null,"This is an escrow meta-contract that allows multiple users to\ncreate independent escrows. Each escrow has a sender, recipient,\nand arbiter. It also has a unique id (for future calls to reference it)\nand an optional timeout."),(0,c.kt)("p",null,"The basic function is the sender creates an escrow with funds.\nThe arbiter may at any time decide to release the funds to either\nthe intended recipient or the original sender (but no one else),\nand if it passes with optional timeout, anyone can refund the locked\ntokens to the original sender."),(0,c.kt)("p",null,'We also add a function called "top_up", which allows anyone to add more\nfunds to the contract at any time.'),(0,c.kt)("h2",{id:"token-types"},"Token types"),(0,c.kt)("p",null,'This contract is meant not just to be functional, but also to work as a simple\nexample of an cw20 "Receiver". And demonstrate how the same calls can be fed\nnative tokens (via typical ',(0,c.kt)("inlineCode",{parentName:"p"},"HandleMsg")," route), or cw20 tokens (via ",(0,c.kt)("inlineCode",{parentName:"p"},"Receiver")," interface)."),(0,c.kt)("p",null,"Both ",(0,c.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"top_up")," can be called directly (with a payload of native tokens),\nor from a cw20 contract using the ",(0,c.kt)("a",{parentName:"p",href:"/cw-plus/cw20/spec#receiver"},"Receiver Interface"),".\nThis means we can load the escrow with any number of native or cw20 tokens (or a mix),\nallow of which get released when the arbiter decides."))}u.isMDXComponent=!0}}]);