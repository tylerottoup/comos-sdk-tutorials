(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{709:function(e,t,c){"use strict";c.r(t);var a=c(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"setname"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#setname"}},[e._v("#")]),e._v(" SetName")]),e._v(" "),c("h2",{attrs:{id:"msgsetsetname"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#msgsetsetname"}},[e._v("#")]),e._v(" "),c("code",[e._v("MsgSetSetName")])]),e._v(" "),c("p",[e._v("The naming convention for the SDK "),c("code",[e._v("Msgs")]),e._v(" is "),c("code",[e._v("Msg{ .Action }")]),e._v(". The first action to implement is "),c("code",[e._v("SetName")]),e._v(", so we'll call it "),c("code",[e._v("MsgSetName")]),e._v(". This "),c("code",[e._v("Msg")]),e._v(" allows the owner of a name to set the return value for that name within the resolver. Start by renaming the "),c("code",[e._v("./x/nameservice/types/MsgSetWhois.go")]),e._v(" file to  "),c("code",[e._v("./x/nameservice/types/MsgSetName.go")]),e._v(".")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bXYgeC9uYW1lc2VydmljZS90eXBlcy9Nc2dTZXRXaG9pcy5nbyB4L25hbWVzZXJ2aWNlL3R5cGVzL01zZ1NldE5hbWUuZ28K"}}),e._v(" "),c("p",[e._v("Afterwards, we can start making slight modifications to our file, starting by updating "),c("code",[e._v("MsgSetName")]),e._v(" -")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB0eXBlcwoKaW1wb3J0ICgKCXNkayAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzJnF1b3Q7CikKCmNvbnN0IFJvdXRlcktleSA9IE1vZHVsZU5hbWUgLy8gdGhpcyB3YXMgZGVmaW5lZCBpbiB5b3VyIGtleS5nbyBmaWxlCgovLyBNc2dTZXROYW1lIGRlZmluZXMgYSBTZXROYW1lIG1lc3NhZ2UKdHlwZSBNc2dTZXROYW1lIHN0cnVjdCB7CglOYW1lICBzdHJpbmcgICAgICAgICBganNvbjomcXVvdDtuYW1lJnF1b3Q7YAoJVmFsdWUgc3RyaW5nICAgICAgICAgYGpzb246JnF1b3Q7dmFsdWUmcXVvdDtgCglPd25lciBzZGsuQWNjQWRkcmVzcyBganNvbjomcXVvdDtvd25lciZxdW90O2AKfQoKLy8gTmV3TXNnU2V0TmFtZSBpcyBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGZvciBNc2dTZXROYW1lCmZ1bmMgTmV3TXNnU2V0TmFtZShuYW1lIHN0cmluZywgdmFsdWUgc3RyaW5nLCBvd25lciBzZGsuQWNjQWRkcmVzcykgTXNnU2V0TmFtZSB7CglyZXR1cm4gTXNnU2V0TmFtZXsKCQlOYW1lOiAgbmFtZSwKCQlWYWx1ZTogdmFsdWUsCgkJT3duZXI6IG93bmVyLAoJfQp9Cg=="}}),e._v(" "),c("p",[e._v("The "),c("code",[e._v("MsgSetName")]),e._v(" has the three attributes needed to set the value for a name:")]),e._v(" "),c("ul",[c("li",[c("code",[e._v("name")]),e._v(" - The name trying to be set.")]),e._v(" "),c("li",[c("code",[e._v("value")]),e._v(" - What the name resolves to.")]),e._v(" "),c("li",[c("code",[e._v("owner")]),e._v(" - The owner of that name.")])]),e._v(" "),c("p",[e._v("Next, implement the "),c("code",[e._v("Msg")]),e._v(" interface:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUm91dGUgc2hvdWxkIHJldHVybiB0aGUgbmFtZSBvZiB0aGUgbW9kdWxlCmZ1bmMgKG1zZyBNc2dTZXROYW1lKSBSb3V0ZSgpIHN0cmluZyB7IHJldHVybiBSb3V0ZXJLZXkgfQoKLy8gVHlwZSBzaG91bGQgcmV0dXJuIHRoZSBhY3Rpb24KZnVuYyAobXNnIE1zZ1NldE5hbWUpIFR5cGUoKSBzdHJpbmcgeyByZXR1cm4gJnF1b3Q7c2V0X25hbWUmcXVvdDsgfQo="}}),e._v(" "),c("p",[e._v("The above functions are used by the SDK to route "),c("code",[e._v("Msgs")]),e._v(" to the proper module for handling. They also add human readable names to database tags used for indexing.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmFsaWRhdGVCYXNpYyBydW5zIHN0YXRlbGVzcyBjaGVja3Mgb24gdGhlIG1lc3NhZ2UKZnVuYyAobXNnIE1zZ1NldE5hbWUpIFZhbGlkYXRlQmFzaWMoKSBlcnJvciB7CglpZiBtc2cuT3duZXIuRW1wdHkoKSB7CgkJcmV0dXJuIHNka2Vycm9ycy5XcmFwKHNka2Vycm9ycy5FcnJJbnZhbGlkQWRkcmVzcywgbXNnLk93bmVyLlN0cmluZygpKQoJfQoJaWYgbGVuKG1zZy5OYW1lKSA9PSAwIHx8IGxlbihtc2cuVmFsdWUpID09IDAgewoJCXJldHVybiBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJyVW5rbm93blJlcXVlc3QsICZxdW90O05hbWUgYW5kL29yIFZhbHVlIGNhbm5vdCBiZSBlbXB0eSZxdW90OykKCX0KCXJldHVybiBuaWwKfQo="}}),e._v(" "),c("p",[c("code",[e._v("ValidateBasic")]),e._v(" is used to provide some basic "),c("strong",[e._v("stateless")]),e._v(" checks on the validity of the "),c("code",[e._v("Msg")]),e._v(". In this case, check that none of the attributes are empty.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2V0U2lnbkJ5dGVzIGVuY29kZXMgdGhlIG1lc3NhZ2UgZm9yIHNpZ25pbmcKZnVuYyAobXNnIE1zZ1NldE5hbWUpIEdldFNpZ25CeXRlcygpIFtdYnl0ZSB7CglyZXR1cm4gc2RrLk11c3RTb3J0SlNPTihNb2R1bGVDZGMuTXVzdE1hcnNoYWxKU09OKG1zZykpCn0K"}}),e._v(" "),c("p",[c("code",[e._v("GetSignBytes")]),e._v(" defines how the "),c("code",[e._v("Msg")]),e._v(" gets encoded for signing. In most cases this means marshal to sorted JSON. The output should not be modified.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2V0U2lnbmVycyBkZWZpbmVzIHdob3NlIHNpZ25hdHVyZSBpcyByZXF1aXJlZApmdW5jIChtc2cgTXNnU2V0TmFtZSkgR2V0U2lnbmVycygpIFtdc2RrLkFjY0FkZHJlc3MgewoJcmV0dXJuIFtdc2RrLkFjY0FkZHJlc3N7bXNnLk93bmVyfQp9Cg=="}}),e._v(" "),c("p",[c("code",[e._v("GetSigners")]),e._v(" defines whose signature is required on a "),c("code",[e._v("Tx")]),e._v(" in order for it to be valid. In this case, for example, the "),c("code",[e._v("MsgSetName")]),e._v(" requires that the "),c("code",[e._v("Owner")]),e._v(" signs the transaction when trying to reset what the name points to.")]),e._v(" "),c("h2",{attrs:{id:"handler"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#handler"}},[e._v("#")]),e._v(" "),c("code",[e._v("Handler")])]),e._v(" "),c("p",[e._v("Now that "),c("code",[e._v("MsgSetName")]),e._v(" is specified, the next step is to define what action(s) needs to be taken when this message is received. This is the role of the "),c("code",[e._v("handler")]),e._v(".")]),e._v(" "),c("p",[c("code",[e._v("NewHandler")]),e._v(" is essentially a sub-router that directs messages coming into this module to the proper handler. At the moment, there is only one "),c("code",[e._v("Msg")]),e._v("/"),c("code",[e._v("Handler")]),e._v(".")]),e._v(" "),c("p",[e._v("Let's rename our "),c("code",[e._v("x/nameservice/handlerMsgSetWhois.go")]),e._v(" to "),c("code",[e._v("x/nameservice/handlerMsgSetName.go")]),e._v(".")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bXYgeC9uYW1lc2VydmljZS9oYW5kbGVyTXNnU2V0V2hvaXMuZ28geC9uYW1lc2VydmljZS9oYW5kbGVyTXNnU2V0TmFtZS5nbwo="}}),e._v(" "),c("p",[e._v("Then, define the actual logic for handling the "),c("code",[e._v("MsgSetName")]),e._v(" message in "),c("code",[e._v("handleMsgSetName")]),e._v(":")]),e._v(" "),c("blockquote",[c("p",[c("em",[c("em",[e._v("NOTE")])]),e._v(": The naming convention for handler names in the SDK is "),c("code",[e._v("handleMsg{ .Action }")])])]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSGFuZGxlIGEgbWVzc2FnZSB0byBzZXQgbmFtZQpmdW5jIGhhbmRsZU1zZ1NldE5hbWUoY3R4IHNkay5Db250ZXh0LCBrZWVwZXIgS2VlcGVyLCBtc2cgTXNnU2V0TmFtZSkgKCpzZGsuUmVzdWx0LCBlcnJvcikgewoJaWYgIW1zZy5Pd25lci5FcXVhbHMoa2VlcGVyLkdldE93bmVyKGN0eCwgbXNnLk5hbWUpKSB7IC8vIENoZWNrcyBpZiB0aGUgdGhlIG1zZyBzZW5kZXIgaXMgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgb3duZXIKCQlyZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJyVW5hdXRob3JpemVkLCAmcXVvdDtJbmNvcnJlY3QgT3duZXImcXVvdDspIC8vIElmIG5vdCwgdGhyb3cgYW4gZXJyb3IKCX0KCWtlZXBlci5TZXROYW1lKGN0eCwgbXNnLk5hbWUsIG1zZy5WYWx1ZSkgLy8gSWYgc28sIHNldCB0aGUgbmFtZSB0byB0aGUgdmFsdWUgc3BlY2lmaWVkIGluIHRoZSBtc2cuCglyZXR1cm4gJmFtcDtzZGsuUmVzdWx0e30sIG5pbCAgICAgICAgICAgICAgICAvLyByZXR1cm4KfQo="}}),e._v(" "),c("p",[e._v("In this function, check to see if the "),c("code",[e._v("Msg")]),e._v(" sender is actually the owner of the name ("),c("code",[e._v("keeper.GetOwner")]),e._v("). If so, they can set the name by calling the function on the "),c("code",[e._v("Keeper")]),e._v(". If not, throw an error and return that to the user.")]),e._v(" "),c("p",[e._v("In the file ("),c("code",[e._v("./x/nameservice/handler.go")]),e._v(") make sure to replace the "),c("code",[e._v("types.MsgSetWhois")]),e._v(" with the following code:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBuYW1lc2VydmljZQoKaW1wb3J0ICgKCSZxdW90O2ZtdCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vdXNlci9uYW1lc2VydmljZS94L25hbWVzZXJ2aWNlL3R5cGVzJnF1b3Q7CgoJc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCXNka2Vycm9ycyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL2Vycm9ycyZxdW90OwopCgovLyBOZXdIYW5kbGVyIHJldHVybnMgYSBoYW5kbGVyIGZvciAmcXVvdDtuYW1lc2VydmljZSZxdW90OyB0eXBlIG1lc3NhZ2VzLgpmdW5jIE5ld0hhbmRsZXIoa2VlcGVyIEtlZXBlcikgc2RrLkhhbmRsZXIgewoJcmV0dXJuIGZ1bmMoY3R4IHNkay5Db250ZXh0LCBtc2cgc2RrLk1zZykgKCpzZGsuUmVzdWx0LCBlcnJvcikgewoJCXN3aXRjaCBtc2cgOj0gbXNnLih0eXBlKSB7CgkJY2FzZSBNc2dTZXROYW1lOgoJCQlyZXR1cm4gaGFuZGxlTXNnU2V0TmFtZShjdHgsIGtlZXBlciwgbXNnKQoJCWRlZmF1bHQ6CgkJCXJldHVybiBuaWwsIHNka2Vycm9ycy5XcmFwKHNka2Vycm9ycy5FcnJVbmtub3duUmVxdWVzdCwgZm10LlNwcmludGYoJnF1b3Q7VW5yZWNvZ25pemVkIG5hbWVzZXJ2aWNlIE1zZyB0eXBlOiAldiZxdW90OywgbXNnLlR5cGUoKSkpCgkJfQoJfQp9Cg=="}}),e._v(" "),c("p",[e._v("Great, now owners can "),c("code",[e._v("SetName")]),e._v("s! But what if a name doesn't have an owner yet? Your module needs a way for users to buy names! Let us define define the "),c("code",[e._v("BuyName")]),e._v(" message")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);