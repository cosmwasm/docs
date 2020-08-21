(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{644:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"querying-contract-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querying-contract-state"}},[e._v("#")]),e._v(" Querying Contract State")]),e._v(" "),a("p",[e._v('There are many cases where you want to view the state of a contract. Both as an external client (using the cli), but also while executing a contract. For example, we discussed resolving names like "Alice" or "Bob" in the last section, which would require a query to another contract. We will first cover the two types of queries - raw and custom - then look at the semantics of querying via an '),a("em",[e._v("external client")]),e._v(", as well an "),a("em",[e._v("internal client")]),e._v(" (another contract). We will pay special attention not only to how it works practically, but also the design and security issues of executing queries from one contract to another.")]),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(" This has been updated for CosmWasm 0.8 with full support for cross-contract queries.")]),e._v(" "),a("h2",{attrs:{id:"raw-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raw-queries"}},[e._v("#")]),e._v(" Raw Queries")]),e._v(" "),a("p",[e._v("The simplest query to implement is just raw read access to the key-value store.  If the caller (either external client, or other contract) passes in the raw binary key that is used in the contract's storage, we can easily return the raw binary value. The benefit of this approach is that it is very easy to implement and universal. The downside is that it links the caller to the "),a("em",[e._v("implementation")]),e._v(" of the storage and requires knowledge of the exact contract being executed.")]),e._v(" "),a("p",[e._v("This is implemented inside the "),a("code",[e._v("wasmd")]),e._v(" runtime and circumvents the VM. As a consequence it requires no support from the CosmWasm contract and all contract state is visible. Such a "),a("code",[e._v("query_raw")]),e._v(" function is exposed to all callers (external and internal).")]),e._v(" "),a("h2",{attrs:{id:"custom-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-queries"}},[e._v("#")]),e._v(" Custom Queries")]),e._v(" "),a("p",[e._v("There are many cases where it is undesirable to couple tightly to "),a("em",[e._v("implementation")]),e._v(", and we would rather depend on an "),a("em",[e._v("interface")]),e._v('. For example, we will define a standard for "ERC20" '),a("code",[e._v("HandleMsg")]),e._v(" for calling the contract and we would want to define such a standard for a "),a("code",[e._v("QueryMsg")]),e._v(". For example, query balance by address, query allowance via granter + grantee, query token info (ticker, decimals, etc). By defining a standard "),a("em",[e._v("interface")]),e._v(', we allow many implementations, including complex contracts, where the "ERC20" interface is only a small subset of their functionality.')]),e._v(" "),a("p",[e._v("To enable custom queries, we allow each contract to expose a "),a("code",[e._v("query")]),e._v(" function, that can access its data store in read-only mode. It can load any data it wishes and even perform calculations on it. This method is exposed as "),a("code",[e._v("query_custom")]),e._v(" to call callers (external and internal). The data format (both query and response) is anything the contract desires, and should be documented in the public schema, along with "),a("code",[e._v("HandleMsg")]),e._v(" and "),a("code",[e._v("InitMsg")]),e._v(".")]),e._v(" "),a("p",[e._v("Note that executing a contract may consume an unbounded amount gas. Whereas "),a("code",[e._v("query_raw")]),e._v(" will read one key and has a small, mostly fixed cost, we need to enforce a gas limit on these queries. This is done differently for external and internal calls and discussed below.")]),e._v(" "),a("h2",{attrs:{id:"external-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-queries"}},[e._v("#")]),e._v(" External Queries")]),e._v(" "),a("p",[e._v("External queries are the typical way all web and cli clients work with the blockchain. They call Tendermint RPC, which calls into "),a("code",[e._v("abci_query")]),e._v(" in the Cosmos SDK, which delegates down to the module to handle it. As far as I know, there is an infinite gas limit on queries, as they are only executed on one node, and cannot slow down the entire blockchain. This functionality is generally not exposed on validating nodes. The query functionality exposed in the current SDK is hard coded, and has execution time limits designed by the developers. This limits abuse. But what about someone uploading a wasm contract with an infinite loop, and then using that to DoS any public RPC node that exposes querying?")]),e._v(" "),a("p",[e._v("To avoid such issues, we need to define some fixed gas limit for all "),a("code",[e._v("query_custom")]),e._v(" transaction called externally. This will not charge a fee, but is used to limit abuse. However, it is difficult to define a standard value, for a free public node would prefer a small amount, but I may want to sync my own archive node and perform complex queries. Thus, a gas limit for all "),a("code",[e._v("query_custom")]),e._v(" calls can be defined in an app-specific configuration file, which can be customized by each node operator, with a sensible default limit. This will allow public nodes to protect themselves from complex queries, while still allowing optional queries to perform large aggregation over all contract data in specially-configured nodes.")]),e._v(" "),a("p",[e._v("Note that the "),a("code",[e._v("abci_query")]),e._v(' call never reads the current "in-progress" state of the modules, but uses a read-only snapshot of the state after the last committed block.')]),e._v(" "),a("h2",{attrs:{id:"internal-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal-queries"}},[e._v("#")]),e._v(" Internal Queries")]),e._v(" "),a("p",[e._v("While many interactions between contracts can easily be modelled by sending messages, there are some cases where we would like to synchronously query other modules, without altering their state. For example, if I want to resolve a name to a "),a("a",{attrs:{href:"./addresses#canonical-address"}},[e._v("Canonical Address")]),e._v(", or if I want to check KYC status of some account (in another contract) before enabling some action. One could model this as a series of messages, but it is quite complex and makes such simple use-cases almost unusable in the system.")]),e._v(" "),a("p",[e._v("However, this design violates one of the basic principles of the "),a("a",{attrs:{href:"./actor"}},[e._v("actor model")]),e._v(", namely that each contract has exclusive access to its own internal state. (Both "),a("code",[e._v("query_raw")]),e._v(" and "),a("code",[e._v("query_custom")]),e._v(" fail in this regard). Far from just being a theoretical issue, this may lead to concurrency and reentrancy issues if not handled correctly. We do not want to push such safety critical reasoning into the laps of the contract developers, but rather provide these security guarantees in the platform. However, providing old data also leads to many possible errors and bugs, especially since we use the same "),a("code",[e._v("Querier")]),e._v(" interface\nto interact with the native SDK modules, "),a("em",[e._v("including querying the contract's own balance")]),e._v(".")]),e._v(" "),a("p",[e._v("As such, we provide the "),a("code",[e._v("Querier")]),e._v(" with read-only access to the state snapshot "),a("em",[e._v("right before execution of the current CosmWasm message")]),e._v(". Since we take a\nsnapshot and both the executing contract and the queried contract have read-only access to the data "),a("em",[e._v("before the contract execution")]),e._v(", this is still\nsafe with Rust's borrowing rules (as a placeholder for secure design). The current contract only writes to a cache, which is flushed afterwards on success.")]),e._v(" "),a("p",[e._v("Another issue is to avoid reentrancy. Since these queries are called synchronously, they can call back into the calling contract and possibly cause issues. Since queries only have read-only access and cannot have side-effects, this is not nearly as dangerous as executing a remote contract synchronously, but still may be an issue to consider. Notably, it will only have access to the state before the current execution. I cannot see a place where this could cause more errors than a query function intentionally returning false data, but it is a place to investigate more.")]),e._v(" "),a("p",[e._v("Since all queries are performed as part of a transaction, that already has a strongly enforced gas limit, we don't need extra work here. All storage reads and data processing performed as part of a query are deducted from the same gas meter as the rest of the transaction, and thus limit processing time. We consider adding explicit guards against re-entrancy or max query depth, but have not enforced them yet in "),a("code",[e._v("wasmd")]),e._v(". As more work on cross-contract queries comes to fruition, this is another place to investigate.")])])}),[],!1,null,null,null);t.default=n.exports}}]);