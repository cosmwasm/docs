(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{644:function(d,c,t){"use strict";t.r(c);var b=t(0),l=Object(b.a)({},(function(){var d=this,c=d.$createElement,t=d._self._c||c;return t("ContentSlotsDistributor",{attrs:{"slot-key":d.$parent.slotKey}},[t("h1",{attrs:{id:"uploading-and-interacting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uploading-and-interacting"}},[d._v("#")]),d._v(" Uploading and Interacting")]),d._v(" "),t("p",[d._v("We have the binary ready. Now it is time to see some wasm action. You can use "),t("a",{attrs:{href:"#GO-CLI"}},[d._v("Go CLI")]),d._v(" or\n"),t("a",{attrs:{href:"#Node-Console"}},[d._v("Node Console")]),d._v(" as you wish.")]),d._v(" "),t("h2",{attrs:{id:"go-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-cli"}},[d._v("#")]),d._v(" GO CLI")]),d._v(" "),t("p",[d._v("We generated a wasm binary executable in the previous chapter. Let's put it into use. Now, we will\nupload the code to the blockchain. Afterwards, you can download the bytecode to verify it is proper:")]),d._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBzZWUgaG93IG1hbnkgY29kZXMgd2UgaGF2ZSBub3cKd2FzbWNsaSBxdWVyeSB3YXNtIGxpc3QtY29kZQoKIyBnYXMgaXMgaHVnZSBkdWUgdG8gd2FzbSBzaXplLi4uIGJ1dCBhdXRvLXppcHBpbmcgcmVkdWNlZCB0aGlzIGZyb20gMS44TSB0byBhcm91bmQgNjAwawojIHlvdSBjYW4gc2VlIHRoZSBjb2RlIGluIHRoZSByZXN1bHQKUkVTPSQod2FzbWNsaSB0eCB3YXNtIHN0b3JlIGNvbnRyYWN0Lndhc20gLS1mcm9tIGZyZWQgLS1nYXMgOTAwMDAwIC15KQojIHlvdSBjYW4gYWxzbyBnZXQgdGhlIGNvZGUgdGhpcyB3YXkKQ09ERV9JRD0kKGVjaG8gJFJFUyB8IGpxIC1yICcubG9nc1swXS5ldmVudHNbMF0uYXR0cmlidXRlc1stMV0udmFsdWUnKQojIG5vIGNvbnRyYWN0cyB5ZXQsIHRoaXMgc2hvdWxkIHJldHVybiBgbnVsbGAKd2FzbWNsaSBxdWVyeSB3YXNtIGxpc3QtY29udHJhY3QtYnktY29kZSAkQ09ERV9JRAoKIyB5b3UgY2FuIGFsc28gZG93bmxvYWQgdGhlIHdhc20gZnJvbSB0aGUgY2hhaW4gYW5kIGNoZWNrIHRoYXQgdGhlIGRpZmYgYmV0d2VlbiB0aGVtIGlzIGVtcHR5Cndhc21jbGkgcXVlcnkgd2FzbSBjb2RlICRDT0RFX0lEIGRvd25sb2FkLndhc20KZGlmZiBjb250cmFjdC53YXNtIGRvd25sb2FkLndhc20K"}}),d._v(" "),t("h3",{attrs:{id:"instantiating-the-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instantiating-the-contract"}},[d._v("#")]),d._v(" Instantiating the Contract")]),d._v(" "),t("p",[d._v("We can now create an instance of this wasm contract. Here the verifier will fund an escrow, that\nwill allow fred to control payout and upon release, the funds go to bob.")]),d._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBpbnN0YW50aWF0ZSBjb250cmFjdCBhbmQgdmVyaWZ5CklOSVQ9JChqcSAtbiAtLWFyZyBmcmVkICQod2FzbWNsaSBrZXlzIHNob3cgLWEgZnJlZCkgLS1hcmcgYm9iICQod2FzbWNsaSBrZXlzIHNob3cgLWEgYm9iKSAneyZxdW90O2FyYml0ZXImcXVvdDs6JGZyZWQsJnF1b3Q7cmVjaXBpZW50JnF1b3Q7OiRib2J9JykKd2FzbWNsaSB0eCB3YXNtIGluc3RhbnRpYXRlICRDT0RFX0lEICZxdW90OyRJTklUJnF1b3Q7IC0tZnJvbSBmcmVkIC0tYW1vdW50PTUwMDAwdWNvc20gIC0tbGFiZWwgJnF1b3Q7ZXNjcm93IDEmcXVvdDsgLXkKCiMgY2hlY2sgdGhlIGNvbnRyYWN0IHN0YXRlIChhbmQgYWNjb3VudCBiYWxhbmNlKQp3YXNtY2xpIHF1ZXJ5IHdhc20gbGlzdC1jb250cmFjdC1ieS1jb2RlICRDT0RFX0lECkNPTlRSQUNUPSQod2FzbWNsaSBxdWVyeSB3YXNtIGxpc3QtY29udHJhY3QtYnktY29kZSAkQ09ERV9JRCB8IGpxIC1yICcuWzBdLmFkZHJlc3MnKQplY2hvICRDT05UUkFDVAojIHdlIHNob3VsZCBzZWUgdGhpcyBjb250cmFjdCB3aXRoIDUwMDAwdWNvc20Kd2FzbWNsaSBxdWVyeSB3YXNtIGNvbnRyYWN0ICRDT05UUkFDVAp3YXNtY2xpIHF1ZXJ5IGFjY291bnQgJENPTlRSQUNUCgojIHlvdSBjYW4gZHVtcCBlbnRpcmUgY29udHJhY3Qgc3RhdGUKd2FzbWNsaSBxdWVyeSB3YXNtIGNvbnRyYWN0LXN0YXRlIGFsbCAkQ09OVFJBQ1QKCiMgbm90ZSB0aGF0IHdlIHByZWZpeCB0aGUga2V5ICZxdW90O2NvbmZpZyZxdW90OyB3aXRoIHR3byBieXRlcyBpbmRpY2F0aW5nIGl0J3MgbGVuZ3RoCiMgZWNobyAtbiBjb25maWcgfCB4eGQgLXBzCiMgZ2l2ZXMgNjM2ZjZlNjY2OTY3CiMgdGh1cyB3ZSBoYXZlIGEga2V5IDAwMDY2MzZmNmU2NjY5NjcKCiMgeW91IGNhbiBhbHNvIHF1ZXJ5IG9uZSBrZXkgZGlyZWN0bHkKd2FzbWNsaSBxdWVyeSB3YXNtIGNvbnRyYWN0LXN0YXRlIHJhdyAkQ09OVFJBQ1QgMDAwNjYzNmY2ZTY2Njk2NyAtLWhleAoKIyBOb3RlIHRoYXQga2V5cyBhcmUgaGV4IGVuY29kZWQsIGFuZCB2YWwgaXMgYmFzZTY0IGVuY29kZWQuCiMgVG8gdmlldyB0aGUgcmV0dXJuZWQgZGF0YSAoYXNzdW1pbmcgaXQgaXMgYXNjaWkpLCB0cnkgc29tZXRoaW5nIGxpa2U6CiMgKE5vdGUgdGhhdCBpbiBtYW55IGNhc2VzIHRoZSBiaW5hcnkgZGF0YSByZXR1cm5lZCBpcyBub24gaW4gYXNjaWkgZm9ybWF0LCB0aHVzIHRoZSBlbmNvZGluZykKd2FzbWNsaSBxdWVyeSB3YXNtIGNvbnRyYWN0LXN0YXRlIGFsbCAkQ09OVFJBQ1QgfCBqcSAtciAnLlswXS5rZXknIHwgeHhkIC1yIC1wcwp3YXNtY2xpIHF1ZXJ5IHdhc20gY29udHJhY3Qtc3RhdGUgYWxsICRDT05UUkFDVCB8IGpxIC1yICcuWzBdLnZhbCcgfCBiYXNlNjQgLWQKCiMgb3IgdHJ5IGEgJnF1b3Q7c21hcnQgcXVlcnkmcXVvdDssIGV4ZWN1dGluZyBhZ2FpbnN0IHRoZSBjb250cmFjdAp3YXNtY2xpIHF1ZXJ5IHdhc20gY29udHJhY3Qtc3RhdGUgc21hcnQgJENPTlRSQUNUICd7fScKIyAoc2luY2Ugd2UgZGlkbid0IGltcGxlbWVudCBhbnkgdmFsaWQgUXVlcnlNc2csIHdlIGp1c3QgZ2V0IGEgcGFyc2UgZXJyb3IgYmFjaykK"}}),d._v(" "),t("p",[d._v("Once we have the funds in the escrow, let us try to release them. First, failing to do so with a key\nthat is not the verifier, then using the proper key to release.")]),d._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBleGVjdXRlIGZhaWxzIGlmIHdyb25nIHBlcnNvbgpBUFBST1ZFPSd7JnF1b3Q7YXBwcm92ZSZxdW90Ozp7JnF1b3Q7cXVhbnRpdHkmcXVvdDs6W3smcXVvdDthbW91bnQmcXVvdDs6JnF1b3Q7NTAwMDAmcXVvdDssJnF1b3Q7ZGVub20mcXVvdDs6JnF1b3Q7dWNvc20mcXVvdDt9XX19Jwp3YXNtY2xpIHR4IHdhc20gZXhlY3V0ZSAkQ09OVFJBQ1QgJnF1b3Q7JEFQUFJPVkUmcXVvdDsgLS1mcm9tIHRoaWVmIC15CiMgbG9va2luZyBhdCB0aGUgbG9ncyBzaG91bGQgc2hvdzogJnF1b3Q7ZXhlY3V0ZSB3YXNtIGNvbnRyYWN0IGZhaWxlZDogVW5hdXRob3JpemVkJnF1b3Q7CiMgYW5kIGJvYiBzaG91bGQgc3RpbGwgYmUgYnJva2UgKGFuZCBicm9rZW4gc2hvd2luZyB0aGUgYWNjb3VudCBkb2VzIG5vdCBleGlzdCBFcnJvcikKd2FzbWNsaSBxdWVyeSBhY2NvdW50ICQod2FzbWNsaSBrZXlzIHNob3cgYm9iIC1hKQoKIyBidXQgc3VjY2VlZHMgd2hlbiBmcmVkIHRyaWVzCndhc21jbGkgdHggd2FzbSBleGVjdXRlICRDT05UUkFDVCAmcXVvdDskQVBQUk9WRSZxdW90OyAtLWZyb20gZnJlZCAteQp3YXNtY2xpIHF1ZXJ5IGFjY291bnQgJCh3YXNtY2xpIGtleXMgc2hvdyBib2IgLWEpCiMgY29udHJhY3QgY29pbnMgbXVzdCBiZSBlbXB0eQp3YXNtY2xpIHF1ZXJ5IGFjY291bnQgJENPTlRSQUNUCg=="}}),d._v(" "),t("h2",{attrs:{id:"node-console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-console"}},[d._v("#")]),d._v(" Node Console")]),d._v(" "),t("p",[d._v("If you set up the Node Console / REPL in the "),t("a",{attrs:{href:"./using-the-sdk"}},[d._v("client setup section")]),d._v(", you can use\nthat to deploy and execute your contract. I think you will find that JSON manipulation and parsing\nis a bit nicer in JavaScript than in Shell Script.")]),d._v(" "),t("p",[d._v("First, go to the cli directory and start up your console:")]),d._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bnB4IEBjb3NtanMvY2xpIC0taW5pdCBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQ29zbVdhc20vdGVzdG5ldHMvbWFzdGVyL2RlbW8tMTAvY2xpX2hlbHBlci50cwo="}}),d._v(" "),t("p",[d._v("Now, we make all the keys and initialize clients:")]),d._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgZnJlZFNlZWQgPSBsb2FkT3JDcmVhdGVNbmVtb25pYygmcXVvdDtmcmVkLmtleSZxdW90Oyk7CmNvbnN0IHthZGRyZXNzOiBmcmVkQWRkciwgY2xpZW50OiBmcmVkQ2xpZW50fSA9IGF3YWl0IGNvbm5lY3QoZnJlZFNlZWQsIHt9KTsKCi8vIGJvYiBkb2Vzbid0IGhhdmUgYSBjbGllbnQgaGVyZSBhcyB3ZSB3aWxsIG5vdAovLyBzdWJtaXQgYW55IHR4IHdpdGggdGhpcyBhY2NvdW50LCBqdXN0IHF1ZXJ5IGJhbGFuY2UKY29uc3QgYm9iU2VlZCA9IGxvYWRPckNyZWF0ZU1uZW1vbmljKCZxdW90O2JvYi5rZXkmcXVvdDspOwpjb25zdCBib2JBZGRyID0gYXdhaXQgbW5lbW9uaWNUb0FkZHJlc3MoJnF1b3Q7Y29zbW9zJnF1b3Q7LCBib2JTZWVkKTsKCmNvbnN0IHRoaWVmU2VlZCA9IGxvYWRPckNyZWF0ZU1uZW1vbmljKCZxdW90O3RoaWVmLmtleSZxdW90Oyk7Cgpjb25zdCB7YWRkcmVzczogdGhpZWZBZGRyLCBjbGllbnQ6IHRoaWVmQ2xpZW50fSA9IGF3YWl0IGNvbm5lY3QodGhpZWZTZWVkLCB7fSk7Cgpjb25zb2xlLmxvZyhmcmVkQWRkciwgYm9iQWRkciwgdGhpZWZBZGRyKTsK"}}),d._v(" "),t("p",[d._v("Hit the faucet it needed for fred , so he has tokens to submit transactions:")]),d._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"ZnJlZENsaWVudC5nZXRBY2NvdW50KCk7Ci8vIGlmICZxdW90O3VuZGVmaW5lZCZxdW90OywgZG8gdGhlIGZvbGxvd2luZwpoaXRGYXVjZXQoZGVmYXVsdEZhdWNldFVybCwgZnJlZEFkZHIsICZxdW90O0NPU00mcXVvdDspCmZyZWRDbGllbnQuZ2V0QWNjb3VudCgpOwoKdGhpZWZDbGllbnQuZ2V0QWNjb3VudCgpOwovLyBpZiAmcXVvdDt1bmRlZmluZWQmcXVvdDssIGRvIHRoZSBmb2xsb3dpbmcKaGl0RmF1Y2V0KGRlZmF1bHRGYXVjZXRVcmwsIHRoaWVmQWRkciwgJnF1b3Q7Q09TTSZxdW90OykKdGhpZWZDbGllbnQuZ2V0QWNjb3VudCgpOwoKLy8gY2hlY2sgYm9iQWRkciBoYXMgbm8gZnVuZHMKZnJlZENsaWVudC5nZXRBY2NvdW50KGJvYkFkZHIpOwoKLy8gZ2V0IHRoZSB3b3JraW5nIGRpcmVjdG9yeSAobmVlZGVkIGxhdGVyKQpwcm9jZXNzLmN3ZCgpCg=="}}),d._v(" "),t("h3",{attrs:{id:"uploading-with-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uploading-with-js"}},[d._v("#")]),d._v(" Uploading with JS")]),d._v(" "),t("p",[d._v("Now, we go back to the Node console and upload the contract and instantiate it:")]),d._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3Qgd2FzbSA9IGZzLnJlYWRGaWxlU3luYygnY29udHJhY3Qud2FzbScpOwovLyB5b3UgY2FuIGFkZCBleHRyYSBpbmZvcm1hdGlvbiB0byBjb250cmFjdCBkZXRhaWxzIHN1Y2ggYXMgc291cmNlIGFuZCBidWlsZGVyLgpjb25zdCB1cCA9IGF3YWl0IGZyZWRDbGllbnQudXBsb2FkKHdhc20sIHsgc291cmNlOiAmcXVvdDtodHRwczovL2NyYXRlcy5pby9hcGkvdjEvY3JhdGVzL2N3LWVzY3Jvdy8wLjYuMC9kb3dubG9hZCZxdW90OywgYnVpbGRlcjogJnF1b3Q7Y29zbXdhc20vcnVzdC1vcHRpbWl6ZXI6MC45LjAmcXVvdDt9KTsKCmNvbnNvbGUubG9nKHVwKTsKY29uc3QgeyBjb2RlSWQgfSA9IHVwOwoKY29uc3QgaW5pdE1zZyA9IHthcmJpdGVyOiBmcmVkQWRkciwgcmVjaXBpZW50OiBib2JBZGRyfTsKY29uc3QgeyBjb250cmFjdEFkZHJlc3MgfSA9IGF3YWl0IGZyZWRDbGllbnQuaW5zdGFudGlhdGUoY29kZUlkLCBpbml0TXNnLCAmcXVvdDtFc2Nyb3cgMSZxdW90OywgeyBtZW1vOiAmcXVvdDttZW1vJnF1b3Q7LCB0cmFuc2ZlckFtb3VudDogW3tkZW5vbTogJnF1b3Q7dWNvc20mcXVvdDssIGFtb3VudDogJnF1b3Q7NTAwMDAmcXVvdDt9XX0pOwoKLy8gY2hlY2sgdGhlIGNvbnRyYWN0IGlzIHNldCB1cCBwcm9wZXJseQpjb25zb2xlLmxvZyhjb250cmFjdEFkZHJlc3MpOwpmcmVkQ2xpZW50LmdldENvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcyk7CmZyZWRDbGllbnQuZ2V0QWNjb3VudChjb250cmFjdEFkZHJlc3MpOwoKLy8gbWFrZSBhIHJhdyBxdWVyeSAtIGtleSBsZW5ndGggcHJlZml4ZWQgJnF1b3Q7Y29uZmlnJnF1b3Q7CmNvbnN0IGtleSA9IG5ldyBVaW50OEFycmF5KFswLCA2LCAuLi50b0FzY2lpKCZxdW90O2NvbmZpZyZxdW90OyldKTsKY29uc3QgcmF3ID0gYXdhaXQgZnJlZENsaWVudC5xdWVyeUNvbnRyYWN0UmF3KGNvbnRyYWN0QWRkcmVzcywga2V5KTsKSlNPTi5wYXJzZShmcm9tVXRmOChyYXcpKQovLyBub3RlIHRoZSBhZGRyZXNzZXMgYXJlIHN0b3JlZCBpbiBiYXNlNjQgaW50ZXJuYWxseSwgbm90IGJlY2gzMiwgYnV0IHRoZSBkYXRhIGlzIHRoZXJlLi4uIHRoaXMgaXMgd2h5IHdlIG9mdGVuIGltcGxlbWVudCBzbWFydCBxdWVyaWVzIG9uIHJlYWwgY29udHJhY3RzCg=="}}),d._v(" "),t("h3",{attrs:{id:"executing-contract-with-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#executing-contract-with-js"}},[d._v("#")]),d._v(" Executing Contract with JS")]),d._v(" "),t("p",[d._v('Once we have properly configured the contract, let\'s show how to use it, both the proper "approve"\ncommand:')]),d._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgYXBwcm92ZSA9IHthcHByb3ZlOiB7cXVhbnRpdHk6IFt7YW1vdW50OiAmcXVvdDs1MDAwMCZxdW90OywgZGVub206ICZxdW90O3Vjb3NtJnF1b3Q7fV19fTsKCi8vIHRoaWVmIGNhbm5vdCBhcHByb3ZlCnRoaWVmQ2xpZW50LmV4ZWN1dGUoY29udHJhY3RBZGRyZXNzLCBhcHByb3ZlKQoKLy8gYnV0IGZyZWQgY2FuIChhbmQgbW92ZXMgbW9uZXkgdG8gYm9iKQpmcmVkQ2xpZW50LmV4ZWN1dGUoY29udHJhY3RBZGRyZXNzLCBhcHByb3ZlKTsKLy8gdmVyaWZ5IGJvYiBnb3QgdGhlIHRva2VucwpmcmVkQ2xpZW50LmdldEFjY291bnQoYm9iQWRkcik7Ci8vIHZlcmlmeSBjb250cmFjdCBsb3N0CmZyZWRDbGllbnQuZ2V0QWNjb3VudChjb250cmFjdEFkZHJlc3MpOwo="}})],1)}),[],!1,null,null,null);c.default=l.exports}}]);