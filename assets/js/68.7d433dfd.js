(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{650:function(t,a,e){"use strict";e.r(a);var c=e(0),s=Object(c.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"giving-life-to-a-smart-contract-with-voting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#giving-life-to-a-smart-contract-with-voting"}},[t._v("#")]),t._v(" Giving Life to a Smart Contract with Voting")]),t._v(" "),e("h2",{attrs:{id:"getting-the-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-contract"}},[t._v("#")]),t._v(" Getting the contract")]),t._v(" "),e("p",[t._v("There are two options to get the sample contract:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Download "),e("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/tree/v0.1.1/contracts/cw20-base",target:"_blank",rel:"noopener noreferrer"}},[t._v("source code"),e("OutboundLink")],1),t._v(", and "),e("RouterLink",{attrs:{to:"/getting-started/compile-contract.html"}},[t._v("compile")]),t._v(" it your self.")],1)]),t._v(" "),e("li",[e("p",[t._v("Download "),e("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/releases/download/v0.1.1/cw20_base.wasm",target:"_blank",rel:"noopener noreferrer"}},[t._v("pre-compiled binary"),e("OutboundLink")],1),t._v(".")])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[t._v("What could go wrong with\ndownloading and executing a binary uploaded by some random people on the internet right 😉")])]),t._v(" "),e("h3",{attrs:{id:"uploading-contract-and-submitting-proposals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uploading-contract-and-submitting-proposals"}},[t._v("#")]),t._v(" Uploading Contract and Submitting Proposals")]),t._v(" "),e("p",[t._v("This command will handle the deployment of the contract and submission of a proposal and extract "),e("strong",[t._v("Code ID")]),t._v(" from the\nresponse for later use:")]),t._v(" "),e("p",[t._v("This is the signature of wasm code store submit proposal:")]),t._v(" "),e("code-block",{staticClass:"codeblock",attrs:{language:"shell script",base64:"Z2FpYWZsZXggdHggZ292IHN1Ym1pdC1wcm9wb3NhbCB3YXNtLXN0b3JlIFt3YXNtIGZpbGVdIFwKICAtLXNvdXJjZSBbc291cmNlXSAtLWJ1aWxkZXIgW2J1aWxkZXJdIC0tdGl0bGUgW3RleHRdIFwKICAtLWRlc2NyaXB0aW9uIFt0ZXh0XSAtLXJ1bi1hcyBbYWRkcmVzc10gW2ZsYWdzXQo="}}),t._v(" "),e("p",[e("code",[t._v("--run-as")]),t._v(" flag is the contract creator, and it is required.")]),t._v(" "),e("p",[t._v("If you run "),e("code",[t._v("gaiaflex tx gov submit-proposal wasm-store -h")]),t._v(", you will notice two more important flags:")]),t._v(" "),e("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"LS1pbnN0YW50aWF0ZS1ldmVyeWJvZHkgc3RyaW5nICAgICAgRXZlcnlib2R5IGNhbiBpbnN0YW50aWF0ZSBhIGNvbnRyYWN0IGZyb20gdGhlIGNvZGUsIG9wdGlvbmFsCi0taW5zdGFudGlhdGUtb25seS1hZGRyZXNzIHN0cmluZyAgIE9ubHkgdGhpcyBhZGRyZXNzIGNhbiBpbnN0YW50aWF0ZSBhIGNvbnRyYWN0IGluc3RhbmNlIGZyb20gdGhlIGNvZGUsIG9wdGlvbmFsCg=="}}),t._v(" "),e("p",[t._v("By default, the first flag is enabled. If you want only one address to be able to initiate the contract,\nset the "),e("code",[t._v("instantiate-only-address")]),t._v(" flag.")]),t._v(" "),e("p",[t._v("If either of these flags are set, the voting committee should decide if that is acceptable for the given contract.\nInstantiate-everybody might make sense for a multisig (everyone makes their own), but not for creating a new token.")]),t._v(" "),e("p",[t._v("Sending proposal tx script:")]),t._v(" "),e("code-block",{staticClass:"codeblock",attrs:{language:"shell script",base64:"ZXhwb3J0IFBST1BPU0FMX0lEPSQoZ2FpYWZsZXggdHggZ292IHN1Ym1pdC1wcm9wb3NhbCB3YXNtLXN0b3JlIGN3MjBfYmFzZS53YXNtIFwKICAgIC0tc291cmNlICZxdW90O2h0dHBzOi8vY3JhdGVzLmlvL2FwaS92MS9jcmF0ZXMvY3cyMC1iYXNlLzAuMS4xL2Rvd25sb2FkJnF1b3Q7IFwKICAgIC0tYnVpbGRlciAmcXVvdDtjb3Ntd2FzbS9ydXN0LW9wdGltaXplcjowLjEwLjEmcXVvdDsgLS1kZXBvc2l0IDEwMDAwMHVtdW9uICBcCiAgICAtLXRpdGxlICZxdW90O0VuYWJsZSBzYW1wbGUgY3cyMCB0b2tlbiZxdW90OyBcCiAgICAtLWRlc2NyaXB0aW9uICZxdW90O1RoaXMgY29udHJhY3QgZGVwbG95cyB0aGUgZmlyc3QgY3cyMCB0b2tlbiBvbiB0aGUgaHViJnF1b3Q7IFwKICAgIC0tcnVuLWFzICQoZ2FpYWZsZXgga2V5cyBzaG93IC1hIGFjYykgXAogICAgLS1mcm9tIG9ya3VuIC0tZ2FzIGF1dG8gLS1nYXMtYWRqdXN0bWVudCAmcXVvdDsxLjEyJnF1b3Q7IC15IHwganEgLXIgLmRhdGEpCg=="}}),t._v(" "),e("p",[t._v("Now the clock is ticking for voting period to end.")]),t._v(" "),e("p",[t._v("Vote using the command:")]),t._v(" "),e("code-block",{staticClass:"codeblock",attrs:{language:"shell script",base64:"Z2FpYWZsZXggdHggZ292IHZvdGUgJFBST1BPU0FMX0lEIHllcyAtLWZyb20gYWNjCg=="}}),t._v(" "),e("h3",{attrs:{id:"instantiating-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instantiating-contract"}},[t._v("#")]),t._v(" Instantiating Contract")]),t._v(" "),e("p",[t._v("Now the wasm code is stored to the chain after the voting period is ended and result is yes. A one more voting needs to be done\nto initiate the contract from the code with arguments.")]),t._v(" "),e("code-block",{staticClass:"codeblock",attrs:{language:"shell script",base64:"SU5JVD0neyZxdW90O25hbWUmcXVvdDs6JnF1b3Q7R29sZGVuIFN0YXJzJnF1b3Q7LCZxdW90O3N5bWJvbCZxdW90OzomcXVvdDtTVEFSJnF1b3Q7LCZxdW90O2RlY2ltYWxzJnF1b3Q7OjIsJnF1b3Q7aW5pdGlhbF9iYWxhbmNlcyZxdW90OzpbeyZxdW90O2FkZHJlc3MmcXVvdDs6JnF1b3Q7Y29zbW9zMXgyMDBhMjN6YzJhY2MyMm1teTlwdTRmdWFjbDc5dzB5ajRsZXFyJnF1b3Q7LCZxdW90O2Ftb3VudCZxdW90OzomcXVvdDsxMDAwMCZxdW90O30seyZxdW90O2FkZHJlc3MmcXVvdDs6JnF1b3Q7Y29zbW9zMWxqMGN1aDM0YzV1c2V5Y2Qyd2wzcHVxZnI1N2x4ZDM5aG44cWN2JnF1b3Q7LCZxdW90O2Ftb3VudCZxdW90OzomcXVvdDsxMDAwMCZxdW90O31dLCZxdW90O21pbnQmcXVvdDs6eyZxdW90O21pbnRlciZxdW90OzomcXVvdDtjb3Ntb3MxbGowY3VoMzRjNXVzZXljZDJ3bDNwdXFmcjU3bHhkMzlobjhxY3YmcXVvdDt9fScKZ2FpYWZsZXggdHggZ292IHN1Ym1pdC1wcm9wb3NhbCBpbnN0YW50aWF0ZS1jb250cmFjdCAkUFJPUE9TQUxfSUQgJnF1b3Q7JElOSVQmcXVvdDsgLS1sYWJlbCAmcXVvdDtJbml0IEdvbGRlbiBTdGFycyB0b2tlbiZxdW90OyBcCiAgICAtLWFkbWluICBcCiAgICAtLXJ1bi1hcyBjb3Ntb3MxbGowY3VoMzRjNXVzZXljZDJ3bDNwdXFmcjU3bHhkMzlobjhxY3YgXAogICAgLS10aXRsZSBpbnN0YW50aWF0ZSAtLWRlc2NyaXB0aW9uIHRlc3QgXAogICAgLS1hbW91bnQgMTAwMDAwdW11b24gLS1kZXBvc2l0IDEwMTExMXVtdW9uIC0tZnJvbSBhY2MgLS1nYXMgYXV0byAtLWdhcy1hZGp1c3RtZW50PTEuMTIgLS1nYXMtcHJpY2VzCg=="}}),t._v(" "),e("p",[t._v("Vote: "),e("code",[t._v('gaiaflex tx gov vote 2 yes --from acc --gas auto --gas-prices "0.025umuon"')])]),t._v(" "),e("h2",{attrs:{id:"execute-the-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#execute-the-contract"}},[t._v("#")]),t._v(" Execute the contract")]),t._v(" "),e("p",[t._v("Once the contracts is initiated, execution is same as in "),e("a",{attrs:{href:"../learn/using-contracts"}},[t._v("CW20 tutorial")]),t._v(" section.")]),t._v(" "),e("h2",{attrs:{id:"migrating-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrating-contract"}},[t._v("#")]),t._v(" Migrating Contract")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[t._v("Note: this is an advanced feature, both on the contract design as well as governance, and will be demoed by the CosmWasm team")])]),t._v(" "),e("p",[t._v("Here is a code migration contract if contracts supports the feature.")]),t._v(" "),e("code-block",{staticClass:"codeblock",attrs:{language:"shell script",base64:"Z2FpYWZsZXggdHggZ292IHN1Ym1pdC1wcm9wb3NhbCBtaWdyYXRlLWNvbnRyYWN0ICRDT05UUkFDVF9BRERSRVNTICRORVdfQ09ERV9JRCAkTUlHUkFUSU9OX0FSR1MgLS10aXRsZSBidXJuZXIgXAogIC0tZGVzY3JpcHRpb24gJnF1b3Q7cGVyZm9ybSBtaWdyYXRpb24mcXVvdDsgLS1ydW4tYXMgJChnYWlhZmxleCBrZXlzIHNob3cgLWEgY29kZS1ydW5uZXIpIFwgLS1kZXBvc2l0IDEwMDB1bXVvbiAgLS1mcm9tIGFjYyBcCiAgLS1nYXMgYXV0byAtLWdhcy1wcmljZXM9JnF1b3Q7MC4wMjV1bXVvbiZxdW90Owo="}}),t._v(" "),e("h2",{attrs:{id:"set-admin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-admin"}},[t._v("#")]),t._v(" Set Admin")]),t._v(" "),e("p",[t._v("Admin is the entity that can modify the contract. If it was set during instantiation,\nyou don't even need a governance vote to modify the contract (like ethereum proxy libraries).")]),t._v(" "),e("p",[t._v("A live contract's admin can be changed later with another voting:")]),t._v(" "),e("code-block",{staticClass:"codeblock",attrs:{language:"shell script",base64:"Z2FpYWZsZXggdHggZ292IHN1Ym1pdC1wcm9wb3NhbCBzZXQtY29udHJhY3QtYWRtaW4gJENPTlRSQUNUX0FERFJFU1MgJE5FV19BRE1JTl9BRERSRVNTIC0tdGl0bGUgJnF1b3Q7VXBkYXRlIGEgY29udHJhY3RzIGFkbWluZyZxdW90OyBcCiAgLS1kZXNjcmlwdGlvbiAmcXVvdDtzdWNoIGEgZGVzY3JpcHRpb24gJnF1b3Q7LS1kZXBvc2l0IDEwMDAwdW11b24gLS1mcm9tIGFjYyAtLWdhcyBhdXRvIC0tZ2FzLXByaWNlcz0mcXVvdDswLjAyNXVtdW9uJnF1b3Q7Cg=="}}),t._v(" "),e("h2",{attrs:{id:"clear-admin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clear-admin"}},[t._v("#")]),t._v(" Clear Admin")]),t._v(" "),e("p",[t._v("And a contract can be adminless:")]),t._v(" "),e("code-block",{staticClass:"codeblock",attrs:{language:"shell script",base64:"Z2FpYWZsZXggdHggZ292IHN1Ym1pdC1wcm9wb3NhbCBjbGVhci1jb250cmFjdC1hZG1pbiAkQ09OVFJBQ1RfQUREUkVTUyAtLXRpdGxlIGNsZWFyLWFkbWluIC0tZGVzY3JpcHRpb24gJnF1b3Q7Q290bnJhY3QgaXMgc3RhYmxlJnF1b3Q7IFwKICAtLWRlcG9zaXQgMTAwMDB1bXVvbiAtLWZyb20gYWNjIC0tZ2FzIGF1dG8gLS1nYXMtcHJpY2VzPSZxdW90OzAuMDI1dW11b24mcXVvdDsK"}})],1)}),[],!1,null,null,null);a.default=s.exports}}]);