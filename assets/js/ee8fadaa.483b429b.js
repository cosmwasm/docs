(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9922],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,h=m["".concat(l,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4211:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:2},l={unversionedId:"getting-started/installation",id:"version-0.14/getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"In this section, we will gear up your workhorse for developing, deploying and, enjoying smart",source:"@site/versioned_docs/version-0.14/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",editUrl:"https://github.com/CosmWasm/docs/edit/main/versioned_docs/version-0.14/getting-started/installation.md",version:"0.14",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Your First Contract",permalink:"/getting-started/intro"},next:{title:"Setting Up Environment",permalink:"/getting-started/setting-env"}},u=[{value:"Go",id:"go",children:[]},{value:"Rust",id:"rust",children:[{value:"Installing Rust in Linux and Mac",id:"installing-rust-in-linux-and-mac",children:[]},{value:"Installing Rust in Windows 10",id:"installing-rust-in-windows-10",children:[]}]},{value:"wasmd",id:"wasmd",children:[]},{value:"Using Testnets",id:"using-testnets",children:[]},{value:"Further Information on the Cosmos SDK",id:"further-information-on-the-cosmos-sdk",children:[]},{value:"Setting up your IDE",id:"setting-up-your-ide",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, we will gear up your workhorse for developing, deploying and, enjoying smart\ncontracts on Cosmos SDK."),(0,i.kt)("h2",{id:"go"},"Go"),(0,i.kt)("p",null,"You can setup golang following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki#working-with-go"},"official\ndocumentation"),". The latest versions of ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd"),"\nrequire go version ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.15"),"."),(0,i.kt)("h2",{id:"rust"},"Rust"),(0,i.kt)("p",null,"Assuming you have never worked with rust, you will first need to install some tooling. The standard\napproach is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup")," to maintain dependencies and handle updating multiple versions of\n",(0,i.kt)("inlineCode",{parentName:"p"},"cargo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rustc"),", which you will be using."),(0,i.kt)("h3",{id:"installing-rust-in-linux-and-mac"},"Installing Rust in Linux and Mac"),(0,i.kt)("p",null,"First, ",(0,i.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"install rustup"),". Once installed, make sure you have the wasm32 target:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"rustup default stable\ncargo version\n# If this is lower than 1.50.0+, update\nrustup update stable\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),(0,i.kt)("h3",{id:"installing-rust-in-windows-10"},"Installing Rust in Windows 10"),(0,i.kt)("p",null,"First, download and execute ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup-init.exe")," from ",(0,i.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"rustup.rs"),"\nor ",(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"rust-lang.org"),"."),(0,i.kt)("p",null,"If requested, manually download and install Visual C++ Build Tools 2019,\nfrom ",(0,i.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"https://visualstudio.microsoft.com/visual-cpp-build-tools/"),' .\nMake sure "Windows 10 SDK" and "English language pack" are selected.'),(0,i.kt)("p",null,"Continue running ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup-init.exe"),", and proceed with the installation."),(0,i.kt)("p",null,"Optionally:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download and install ",(0,i.kt)("a",{parentName:"li",href:"https://www.vim.org/download.php#pc"},"gvim"),", and modify the Env vars to add \\<gvim folder",">","\nto the PATH."),(0,i.kt)("li",{parentName:"ul"},"Download and install ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"git for windows"),". Modify the Env vars to add \\<git folder",">","\\bin\nto PATH."),(0,i.kt)("li",{parentName:"ul"},"Turn on Developer Mode (Settings -> Update and Security: For Developers) and enable Device Discovery, to be able to\naccess the Windows 10 server through ssh (",(0,i.kt)("a",{parentName:"li",href:"https://www.ctrl.blog/entry/how-to-win10-ssh-service.html#section-mssshserv-enable"},"https://www.ctrl.blog/entry/how-to-win10-ssh-service.html#section-mssshserv-enable"),").")),(0,i.kt)("p",null,"Install the wasm32 target:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"rustup default stable\ncargo version\n# If this is lower than 1.51.0, update\nrustup update stable\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),(0,i.kt)("p",null,"For those new to rust, the ",(0,i.kt)("inlineCode",{parentName:"p"},"stable")," channel comes out every 6 weeks with a stable release.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"nightly")," channel is the bleeding edge and not\nonly is it a version or two ahead (for testing), but it allows some extra unstable features, whose\nAPIs may change. For compiling ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm"),", you will want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"stable"),". We use ",(0,i.kt)("inlineCode",{parentName:"p"},"nightly")," to compile\nthe runtime for ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd"),", which needs it for the singlepass compiler with gas metering and more."),(0,i.kt)("h2",{id:"wasmd"},"wasmd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," is the backbone of CosmWasm platform. It is the implementation of a Cosmoszone with wasm\nsmart contracts enabled."),(0,i.kt)("p",null,"This code was forked from the ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmos/gaia")," repository as a basis and then added x/wasm and cleaned\nup many gaia-specific files. However, the wasmd binary should function just like gaiad except for\nthe addition of the x/wasm module."),(0,i.kt)("p",null,"If you intend to develop or edit a contract, you need wasmd."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/CosmWasm/wasmd.git\ncd wasmd\n# replace the v0.16.0 with the most stable version on https://github.com/CosmWasm/wasmd/releases\ngit checkout v0.16.0\nmake install\n\n# verify the installation\nwasmd version\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have any problems here, check your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"make install")," will copy ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," to\n",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," by default, please make sure that is set up in your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," as well, which should be\nthe case in general for building Go code from source."))),(0,i.kt)("h2",{id:"using-testnets"},"Using Testnets"),(0,i.kt)("p",null,"Testing network ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/testnets/tree/master/oysternet-1"},"Oysternet")," is launched to\nsave you of the hassle of running a local network and speed up your development."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use go 1.15+ for compiling ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," executable"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# clone wasmd repo\ngit clone https://github.com/CosmWasm/wasmd.git && cd wasmd\n\n# oysternet runs on wasmd v0.16.0\ngit checkout v0.16.0\n\n# build wasmd executable\nmake install\n")),(0,i.kt)("h2",{id:"further-information-on-the-cosmos-sdk"},"Further Information on the Cosmos SDK"),(0,i.kt)("p",null,"These represent an instance of a blockchain that\nutilizes all of the stable features of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos SDK"),". As\nsuch, ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," have all the same features (plus WASM smart contracts obviously). If\nyou'd like to learn more about accessing those features take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/tree/main/docs/gaia-tutorials"},"Gaia\ndocs"),". If you'd like to learn more about\ngetting started with the Cosmos SDK in general, take a look at the series of\n",(0,i.kt)("a",{parentName:"p",href:"https://tutorials.cosmos.network/"},"Tutorials")," that show how to build custom modules for\napplication-specific blockchains."),(0,i.kt)("h2",{id:"setting-up-your-ide"},"Setting up your IDE"),(0,i.kt)("p",null,"We will need a good editor to guide us through the experience. We highly recommend plugins that help\nyou learn syntax, especially when just starting rust. There are two free editor environments we\nrecommend, choose the one that is more familiar to you."),(0,i.kt)("p",null,"If you use VSCode (",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Download link"),") you just need to add the\nrust plugin. This is the best supported environment for RLS (Rust Language Server) and uses the rust\ncompiler to type-check all your code on save. This gives the same error messages as the actual\ncompiler would and highlights along the line of the code, but it can be a bit slow to respond\nsometime (as it runs the compiler). It is quite good, and if you are used to VSCode, I highly\nrecommend it:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=rust-lang.rust"},"RLS for VSCode")),(0,i.kt)("p",null,"The other option I can recommend it Intellij IDEA Community Edition (",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download/"},"Download\nlink"),"), along with the Rust Plugin. This has very nice and\nquick support for many language features directly inline. In particular, it shows the inferred types\nalong variables, which can be very helpful, especially when working with (nested) generics. It\ncatches most syntax errors very quickly, but not all of them. Which means sometimes you have to look\nat the compile failures to find the errors. If you are coming from another Intellij product (eg.\nGoland), I recommend this approach:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://intellij-rust.github.io/"},"RUST for Intellij")),(0,i.kt)("p",null,"There are many more editors out there and some have varying degrees of rust support, at least syntax\nhighlighting, but I would recommend trying one of the two above, especially if you are new to rust.\nOnce you are confident in the language, you can always use another editor and customize it to your\nliking."))}p.isMDXComponent=!0}}]);