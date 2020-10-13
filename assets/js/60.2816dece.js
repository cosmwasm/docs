(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{642:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"contract-composition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contract-composition"}},[e._v("#")]),e._v(" Contract Composition")]),e._v(" "),a("p",[e._v("Given the "),a("a",{attrs:{href:"./actor"}},[e._v("Actor model")]),e._v(" of dispatching messages, and "),a("a",{attrs:{href:"./query"}},[e._v("synchronous queries")]),e._v(" implemented in CosmWasm v0.8, we have all the raw components\nto enable arbitrary composition of contracts with both other contracts and native modules. Here we will explain how the components fit together and how they can be extended.")]),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(" The text below applies to CosmWasm 0.8, release May 25, 2020. Please upgrade if you wish to take advantage of the power of composition.")]),e._v(" "),a("h2",{attrs:{id:"terminology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[e._v("#")]),e._v(" Terminology")]),e._v(" "),a("p",[e._v('For the remainder of this article, I will make a key distinction between "Contracts" and "Native Modules". "Contracts" are CosmWasm code that is\ndynamically uploaded to the blockchain at a given address. This can be added after the fact and is not tied to any runtime implementation.\n"Native Modules" are basically Go Cosmos SDK modules, which are compiled into the blockchain binary. These are relatively static (requiring a\nsoft or hard fork to be added or modified) and will differ between different blockchains running CosmWasm.')]),e._v(" "),a("p",[e._v('We support composition between both types, but we must look more deeply at the integration with "Native Modules", as using those can\ncause '),a("a",{attrs:{href:"#portability"}},[e._v("Portability")]),e._v(' issues. To minimize this issue, we provide some abstractions around "Modules"')]),e._v(" "),a("h2",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),a("p",[e._v("Both "),a("code",[e._v("init")]),e._v(" and "),a("code",[e._v("handle")]),e._v(" can return an arbitrary number of\n"),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/blob/08717b4c589bbfe59f44bb8cccffb08f63696413/packages/std/src/init_handle.rs#L11-L31",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("CosmosMsg")]),a("OutboundLink")],1),e._v("\nobjects, which will be re-dispatched in the same transaction (thus providing atomic success/rollback with the contract execution).\nThere are 3 classes of messages:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Contract")]),e._v(" - This will call a given contract address with a given message (provided in serialized form). It assumes the caller has access to the API format.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#modules"}},[e._v("Module interfaces")]),e._v(" - These are standardized interfaces that can be supported by any chain to expose native modules under a "),a("em",[e._v("portable")]),e._v(" interface.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#customization"}},[a("code",[e._v("Custom")])]),e._v(" - This encapsulates a chain-dependent extension to the message types to call into custom native modules. Ideally they should be "),a("em",[e._v("immutable")]),e._v(" on the same chain over time, but they make no portability guarantees.")])]),e._v(" "),a("h2",{attrs:{id:"queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),a("p",[e._v("As of CosmWasm v0.8, we now allow the contracts to make synchronous "),a("em",[e._v("read-only")]),e._v(" queries to the surrounding runtime.\nAs with "),a("a",{attrs:{href:"#messages"}},[e._v("Messages")]),e._v(", we have three fundamental types:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Contract")]),e._v(" - This will query a given contract address with a given message (provided in serialized form). It assumes the caller has access to the API format.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#modules"}},[e._v("Module interfaces")]),e._v(" - These are standardized interfaces that can be supported by any chain to expose native modules under a "),a("em",[e._v("portable")]),e._v(" interface.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#customization"}},[a("code",[e._v("Custom")])]),e._v(" - This encapsulates a chain-dependent extension to to query custom native modules. Ideally they should be "),a("em",[e._v("immutable")]),e._v(" on the same chain over time, but they make no portability guarantees.")])]),e._v(" "),a("p",[e._v("Cross-Contract queries take the address of the contract and a serialized "),a("code",[e._v("QueryMsg")]),e._v(" in the contract-specific format, and synchronously get\na binary serialized return value in the contract-specific format. It is up to the calling contract to understand the appropriate formats.\nIn order to simplify this, we can provide some contract-specific type-safe wrappers, much in the way we provide a simple\n"),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/blob/08717b4c589bbfe59f44bb8cccffb08f63696413/packages/std/src/traits.rs#L95-L105",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("query_balance")]),a("OutboundLink")],1),e._v("\nmethod as a wrapper around the "),a("code",[e._v("query")]),e._v(" implementation provided by the Trait.")]),e._v(" "),a("h2",{attrs:{id:"modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[e._v("#")]),e._v(" Modules")]),e._v(" "),a("p",[e._v("In order to enable better integrations with the native blockchain, we are providing a set of standardized module interfaces\nthat should work consistently among all CosmWasm chain. The most basic one\nis to the "),a("code",[e._v("Bank")]),e._v(" module, which provides access to the underlying native tokens. This gives us "),a("code",[e._v("BankMsg::Send")]),e._v(" as well as\n"),a("code",[e._v("BankQuery::Balance")]),e._v(" and "),a("code",[e._v("BankQuery::AllBalances")]),e._v(" to check balances and move tokens.")]),e._v(" "),a("p",[e._v("The second standardized module is "),a("code",[e._v("staking")]),e._v(", which provides some standardized messages for "),a("code",[e._v("Delegate")]),e._v(", "),a("code",[e._v("Undelegate")]),e._v(",\n"),a("code",[e._v("Redelegate")]),e._v(" and "),a("code",[e._v("Withdraw")]),e._v(", as well as querying "),a("code",[e._v("Validators")]),e._v(" and "),a("code",[e._v("Delegations")]),e._v(". These interfaces are designed to support\nmost PoS systems and able to be supported on any PoS system, not just with the current staking module of the Cosmos SDK.\n(So, if you fork that for your chain, the contracts should still work).")]),e._v(" "),a("p",[e._v("This provides a clean design, where one can develop a contract that eg. issues staking derivatives using the "),a("code",[e._v("staking")]),e._v(" module interface,\nand have confidence that that same contract will run on two different blockchains, even if they are both heavily customized and one is\non Cosmos SDK 0.38 and the other on Cosmos SDK 0.39 (with many breaking changes). The downside here is that every module interface must\nbe added to all layers of the stack, which provides some delay to supporting custom features, and we cannot easily add support for every custom\nmodule in every Cosmos SDK-based blockchain.")]),e._v(" "),a("p",[e._v("That said, we highly recommend using the module interface when possible, and using "),a("a",{attrs:{href:"#customization"}},[e._v("custom types")]),e._v(" as a temporary measure\nto keep a fast release cycle. We are happy to work with projects with concrete use cases that can be re-used between many different chains\nto add new standardized module interfaces. Perhaps for governance, or for IBC/light client related features.")]),e._v(" "),a("p",[e._v("Note, that theoretically these module interfaces can also be implemented by contracts, not just native code.\nEg. if we made a standard "),a("code",[e._v("swap")]),e._v(" interface, and your blockchain has no native "),a("code",[e._v("swap")]),e._v(" module, we could upload a UniSwap-inspired contract\nand register that somehow with the Go blockchain. Then the blockchain would know to take the swap message and dispatch it to this custom contract.\n(Note that this is not implemented at all, just an idea of future directions).")]),e._v(" "),a("h2",{attrs:{id:"customization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),a("p",[e._v("Many chains will want to allow contracts to execute with their custom go modules, without going through all the work to try to turn it into a standardized "),a("a",{attrs:{href:"#modules"}},[e._v("Module Interface")]),e._v(" and wait for a new CosmWasm release. For this case, we introduce the "),a("code",[e._v("Custom")]),e._v(" variant on both "),a("code",[e._v("CosmosMsg")]),e._v(" and "),a("code",[e._v("QueryRequest")]),e._v(".\nThe idea here is that the contract can define the type to be include in the "),a("code",[e._v("Custom")]),e._v(" variants, and it just needs to be agreed upon by the Cosmos SDK app\n(in Golang) on the other side. All the code between the contract and the blockchain codec treats it as opaque json bytes.")]),e._v(" "),a("p",[e._v('The demo "reflect" contract in the standard CosmWasm repo,\n'),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/blob/71f643f577184a23b2f1f122531c944f0de94c34/contracts/reflect/src/msg.rs#L30-L64",target:"_blank",rel:"noopener noreferrer"}},[e._v("shows how to use "),a("code",[e._v("CustomMsg")]),e._v(" and "),a("code",[e._v("CustomQuery")]),a("OutboundLink")],1),e._v(". You can see how the contract "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/blob/master/contracts/reflect/src/contract.rs#L94-L101",target:"_blank",rel:"noopener noreferrer"}},[e._v("uses a "),a("code",[e._v("CustomQuery")]),a("OutboundLink")],1),e._v('\nto call out to some "runtime-provided" code. For unit tests, we can '),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/blob/master/contracts/reflect/src/testing.rs#L20-L37",target:"_blank",rel:"noopener noreferrer"}},[e._v("mock out the runtime querier"),a("OutboundLink")],1),e._v(", but in a deployed system, this should be provided by native Go code in your Cosmos SDK application.")]),e._v(" "),a("p",[e._v("Beyond trivial cases, we are working with Terra to expose their "),a("code",[e._v("swap")]),e._v(", "),a("code",[e._v("oracle")]),e._v(" and "),a("code",[e._v("treasury")]),e._v(" modules to CosmWasm contracts on their chains.\nThese features need to be exposed in an immutable format that will work forever on their chain, but there is no need for portability.\nMore interesting is the ability to quickly expose new features of their native modules to contracts on their chain. In fact, this concrete use\ncase inspired all the refactoring to make sure custom messages and queries possible.")]),e._v(" "),a("h2",{attrs:{id:"design-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-considerations"}},[e._v("#")]),e._v(" Design Considerations")]),e._v(" "),a("p",[e._v("In producing a solid design, we want the API to fulfill all these requirements (or strike a good balance if truly impossible to achieve them all):")]),e._v(" "),a("h3",{attrs:{id:"portability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#portability"}},[e._v("#")]),e._v(" Portability")]),e._v(" "),a("p",[e._v("The same contract should run on two distinct blockchains, with differing Golang modules, different versions of the Cosmos SDK, or ideally, even\nbased on different frameworks (eg. running on Substrate). This should be possible when avoiding "),a("code",[e._v("Custom")]),e._v(" messages, and checking the optional features one uses.\nThe features are currently "),a("code",[e._v("staking")]),e._v(", which assumes a PoS system, and "),a("code",[e._v("iterator")]),e._v(", which assumes we can do prefix scans over the storage (ie. it is a Merkle "),a("strong",[e._v("Tree")]),e._v(", not a Merkle "),a("strong",[e._v("Trie")]),e._v(").")]),e._v(" "),a("h3",{attrs:{id:"immutability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#immutability"}},[e._v("#")]),e._v(" Immutability")]),e._v(" "),a("p",[e._v("Contracts are immutable and encode the query and message formats in their bytecode. If we allowed dispatching "),a("code",[e._v("sdk.Msg")]),e._v(" in the native format\n(be it json, amino or protobuf), and the format of native messages change, then the contracts would break.\nThis may mean that a staking module could never undelegate the tokens. If you think this is a theoretical issue, please note that every major\nupdate of the Cosmos SDK has produced such breaking changes and has migrations for them. Migrations that cannot be performed on immutable contracts.\nThus, we need to ensure that our design provides an immutable API to a potentially mutable runtime, which is a primary design criteria when\ndesigning the standard "),a("a",{attrs:{href:"#modules"}},[e._v("module interfaces")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"extensibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extensibility"}},[e._v("#")]),e._v(" Extensibility")]),e._v(" "),a("p",[e._v("We should be able to add new interfaces to a contract and blockchain without needing to update any of the intermediate layers. That is,\nif you are building a custom "),a("code",[e._v("superd")]),e._v(" blockchain app, which imports "),a("code",[e._v("x/wasm")]),e._v(" from "),a("code",[e._v("wasmd")]),e._v(", and want to develop contracts on it that\ncall into your custom "),a("code",[e._v("superd")]),e._v(" modules, then in an ideal world, you could add those message types to an additional "),a("code",[e._v("cw-superd")]),e._v(" library\nthat you can import in your contracts and add the callbacks to them in "),a("code",[e._v("superd")]),e._v(" Go code. "),a("em",[e._v("Without any changes")]),e._v(" in "),a("code",[e._v("cosmwasm-std")]),e._v(", "),a("code",[e._v("cosmwasm-vm")]),e._v(",\n"),a("code",[e._v("go-cosmwasm")]),e._v(", or "),a("code",[e._v("wasmd")]),e._v(" repositories (which have a different release cycle than your app).")]),e._v(" "),a("p",[e._v("We provide the "),a("a",{attrs:{href:"#customization"}},[a("code",[e._v("Custom")])]),e._v(" variants to "),a("code",[e._v("CosmosMsg")]),e._v(" and "),a("code",[e._v("QueryRequest")]),e._v(" to enable such cases. They can provide immutability but not\nportability.")]),e._v(" "),a("h2",{attrs:{id:"usability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usability"}},[e._v("#")]),e._v(" Usability")]),e._v(" "),a("p",[e._v("We also want to make it not just secure and "),a("em",[e._v("possible")]),e._v(" to compose contracts into a larger whole, but make it simple from the developer's perspective.\nThis applies to both the contract authors, as well as the blockchain developers integrating CosmWasm into their custom blockchain.\nAnd we want to make it easy to build client side applications using the contracts.")]),e._v(" "),a("p",[e._v("We are using JSON encoding for the CosmWasm messages to make this simple and export "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-examples/tree/master/erc20/schema",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON schemas"),a("OutboundLink")],1),e._v(" for every contract to allow auto-generation of client-side codecs. We also provide "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("CosmJS"),a("OutboundLink")],1),e._v("\nas a easy-to-use TypeScript client library allowing access to all contracts (and bank module) on a CosmWasm-based chain.")]),e._v(" "),a("h3",{attrs:{id:"checking-for-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-for-support"}},[e._v("#")]),e._v(" Checking for Support")]),e._v(" "),a("p",[e._v("If we want to call some extensions, say to the "),a("code",[e._v("Staking")]),e._v(" modules, we can compile our contract to handle that. But how do we detect if the blockchain\ncan support it? We want to fail on upload or instantiation of a contract, and not discover some key functionality doesn't work on this chain,\nwhen there is value stored in the contract.")]),e._v(" "),a("p",[e._v('The design decision was to you use feature flags, exposed as wasm export functions, to configure which extra features are required by the contract.\nThis lets the host chain inspect compatibility before allowing an upload. To do so, we make some "ghost" exports like\n'),a("code",[e._v("requires_staking()")]),e._v(" or "),a("code",[e._v("requires_terra()")]),e._v(". This would only pass compatibility check if the runtime also exposed such features.\nWhen instantiating "),a("code",[e._v("x/wasm.NewKeeper()")]),e._v(" you can specify which features are supported.")]),e._v(" "),a("h3",{attrs:{id:"type-safe-wrappers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-safe-wrappers"}},[e._v("#")]),e._v(" Type-Safe Wrappers")]),e._v(" "),a("p",[e._v('When querying or calling into other contracts, we give up all the type-checks we get with native module interfaces.\nThey require the caller to know the details of the caller. This is the same as Ethereum. However, we can provide some "interface"\nwrappers that a contract could export, such that other contracts can easily call into it.')]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"cHViIHN0cnVjdCBOYW1lU2VydmljZShDYW5vbmljYWxBZGRyKTsKCmltcGwgTmFtZVNlcnZpY2UgewogICAgcHViIGZuIHF1ZXJ5X25hbWUoZGVwczogJmFtcDtFeHRlcm4sIG5hbWU6ICZhbXA7c3RyKSAtJmd0OyBDYW5vbmljYWxBZGRyIHsgLyogLi4gKi8gfQogICAgcHViIGZuIHJlZ2lzdGVyKGFwaTogJmFtcDtBcGksIG5hbWU6ICZhbXA7c3RyKSAtJmd0OyBDb3Ntb3NNc2cgeyAvKiAuLiAqLyB9Cn0K"}}),e._v(" "),a("p",[e._v("Rather than storing just the "),a("code",[e._v("CanonicalAddr")]),e._v(" of the other contract in our configuration, we could store "),a("code",[e._v("NameService")]),e._v(", which is\na zero-cost "),a("a",{attrs:{href:"https://doc.rust-lang.org/stable/rust-by-example/generics/new_types.html",target:"_blank",rel:"noopener noreferrer"}},[e._v('"newtype"'),a("OutboundLink")],1),e._v("\nover the original address, with the same serialization format. However, it would provide us\nsome type-safe helpers to make queries against the contract, as well as produce "),a("code",[e._v("CosmosMsg")]),e._v(" for registration.")]),e._v(" "),a("p",[e._v("Note that these type-safe wrappers are not tied to an "),a("em",[e._v("implementation")]),e._v(" of a contract, but rather the contract's "),a("em",[e._v("interface")]),e._v('.\nThus, we could create a small library with a list of standard/popular interfaces (like the ERCxxx specs) represented with such\n"newtypes". A contract creator could import one of these wrappers and then easily call the contract, regardless of implementation,\nas long as it supported the proper interface')])],1)}),[],!1,null,null,null);t.default=s.exports}}]);