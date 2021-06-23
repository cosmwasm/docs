(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5199],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1303:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={title:"IBC And CosmWasm",sidebar_position:1},s={unversionedId:"ibc/overview",id:"version-0.14/ibc/overview",isDocsHomePage:!1,title:"IBC And CosmWasm",description:"The inter-blockchain communication protocol (IBC) is an end-to-end, connection-oriented,",source:"@site/versioned_docs/version-0.14/ibc/overview.md",sourceDirName:"ibc",slug:"/ibc/overview",permalink:"/ibc/overview",editUrl:"https://github.com/CosmWasm/docs/edit/main/versioned_docs/version-0.14/ibc/overview.md",version:"0.14",sidebarPosition:1,frontMatter:{title:"IBC And CosmWasm",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Advanced REPL tips",permalink:"/cw-plus/general/tips"},next:{title:"Relayer",permalink:"/ibc/relayer"}},p=[{value:"Index",id:"index",children:[]}],l={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The inter-blockchain communication protocol (",(0,a.kt)("a",{parentName:"p",href:"https://ibcprotocol.org/"},"IBC"),") is an end-to-end, connection-oriented,\nstateful protocol for reliable, ordered, and authenticated communication between heterogeneous blockchains arranged\nin an unknown and dynamic topology. The protocol realises this by specifying a set of data structures, abstractions,\nand semantics that can be implemented by any distributed ledger provided they satisfy a small set of requirements."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For inner workings of IBC, head to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ics"},"cosmos/ics")," specifications and\nstart reading from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ics/tree/master/spec/ics-001-ics-standard"},"ics1"),"."))),(0,a.kt)("p",null,"CosmWasm supports IBC protocol ",(0,a.kt)("strong",{parentName:"p"},"out of the box")," and adds power of smart contracts on top.\nCosmWasm relies on ",(0,a.kt)("strong",{parentName:"p"},"Dynamic IBC")," protocol which differs from\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ics#ibcapp"},"Interchain standards"),"(currently ics20 and interchain accounts).\nThis term is coined and proposed by ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/agoric/the-road-to-dynamic-ibc-4a43bc964bca"},"Agoric"),", and the\ncommunication protocol and scheme is defined by the contracts. Contract should specify the actions taken during an\nIBC handshake."),(0,a.kt)("h2",{id:"index"},"Index"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/ibc/relayer"},"Relayer")," section explains the relayer component of IBC and demonstrates setting up one for\nconnecting CosmWasm enabled chains.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/ibc/active-connections"},"Active IBC Connections section")," has a list of remote testnet network connections that you\ncan use for testing and learning.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/ibc/cw20-ics20"},"cw20-ics")," is a smart contract that is first of its kind. This is an IBC Enabled contract that\nallows us\nto send CW20 tokens from one chain over the standard ICS20 protocol to the bank module of another chain. In short,\nit let's us send our custom CW20 tokens with IBC and use them just like native tokens on other chains."))))}m.isMDXComponent=!0}}]);