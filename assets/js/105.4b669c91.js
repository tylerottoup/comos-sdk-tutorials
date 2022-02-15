(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{702:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"events-emitting-game-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events-emitting-game-information"}},[e._v("#")]),e._v(" Events - Emitting Game Information")]),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("Make sure you have all you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You understand the concepts of "),a("RouterLink",{attrs:{to:"/academy/2-main-concepts/events.html"}},[e._v("events")]),e._v(".")],1),e._v(" "),a("li",[e._v("Have Go installed.")]),e._v(" "),a("li",[e._v("The checkers blockchain codebase with "),a("code",[e._v("MsgPlayMove")]),e._v(" and its handling. You can get there by following the "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/play-game.html"}},[e._v("previous steps")]),e._v(" or checking out "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/play-move-handler",target:"_blank",rel:"noopener noreferrer"}},[e._v("the relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("p",[e._v("Now that you have "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/play-game.html"}},[e._v("added the possible actions")]),e._v(" including their return values, use events to alert/notify players.")],1),e._v(" "),a("p",[e._v("Imagine a potential or current player waiting for their turn. It is not practical to look at all the transactions and search for the ones signifying the player's turn. It is better to listen to known events that let determine whose player's turn it is.")]),e._v(" "),a("p",[e._v("Adding events to your application is as simple as:")]),e._v(" "),a("ol",[a("li",[e._v("Defining the events you want to use.")]),e._v(" "),a("li",[e._v("Emitting the events at the right locations.")])]),e._v(" "),a("h2",{attrs:{id:"game-created-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#game-created-event"}},[e._v("#")]),e._v(" Game created event")]),e._v(" "),a("p",[e._v("Start with the event that announces the creation of a new game. The goal is to:")]),e._v(" "),a("ul",[a("li",[e._v("Inform/alert the players of the game.")]),e._v(" "),a("li",[e._v("Make it easy for the players to find the relevant game.")])]),e._v(" "),a("p",[e._v("So define some new keys in "),a("code",[e._v("x/checkers/types/keys.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgU3RvcmVkR2FtZUV2ZW50S2V5ICAgICA9ICZxdW90O05ld0dhbWVDcmVhdGVkJnF1b3Q7IC8vIEluZGljYXRlcyB3aGF0IGtleSB0byBsaXN0ZW4gdG8KICAgIFN0b3JlZEdhbWVFdmVudENyZWF0b3IgPSAmcXVvdDtDcmVhdG9yJnF1b3Q7CiAgICBTdG9yZWRHYW1lRXZlbnRJbmRleCAgID0gJnF1b3Q7SW5kZXgmcXVvdDsgLy8gV2hhdCBnYW1lIGlzIHJlbGV2YW50CiAgICBTdG9yZWRHYW1lRXZlbnRSZWQgICAgID0gJnF1b3Q7UmVkJnF1b3Q7IC8vIElzIGl0IHJlbGV2YW50IHRvIG1lPwogICAgU3RvcmVkR2FtZUV2ZW50QmxhY2sgICA9ICZxdW90O0JsYWNrJnF1b3Q7IC8vIElzIGl0IHJlbGV2YW50IHRvIG1lPwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/f5764b84452983bc85e59823302464723df02f9a/x/checkers/types/keys.go#L34-L39"}}),e._v(" "),a("p",[e._v("Emit the event in your handler file "),a("code",[e._v("x/checkers/keeper/msg_server_create_game.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgIHNkay5OZXdFdmVudChzZGsuRXZlbnRUeXBlTWVzc2FnZSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHNkay5BdHRyaWJ1dGVLZXlNb2R1bGUsICZxdW90O2NoZWNrZXJzJnF1b3Q7KSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHNkay5BdHRyaWJ1dGVLZXlBY3Rpb24sIHR5cGVzLlN0b3JlZEdhbWVFdmVudEtleSksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5TdG9yZWRHYW1lRXZlbnRDcmVhdG9yLCBtc2cuQ3JlYXRvciksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5TdG9yZWRHYW1lRXZlbnRJbmRleCwgbmV3SW5kZXgpLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUodHlwZXMuU3RvcmVkR2FtZUV2ZW50UmVkLCBtc2cuUmVkKSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLlN0b3JlZEdhbWVFdmVudEJsYWNrLCBtc2cuQmxhY2spLAogICAgKSwKKQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/f5764b84452983bc85e59823302464723df02f9a/x/checkers/keeper/msg_server_create_game.go#L37-L46"}}),e._v(" "),a("p",[e._v("The only thing left to do is to implement this correspondingly in the GUI or include a server to listen for such events.")]),e._v(" "),a("h2",{attrs:{id:"player-moved-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#player-moved-event"}},[e._v("#")]),e._v(" Player moved event")]),e._v(" "),a("p",[e._v("The created transaction to play a move informs the opponent about:")]),e._v(" "),a("ul",[a("li",[e._v("Which player is relevant.")]),e._v(" "),a("li",[e._v("Which game does the move relate to.")]),e._v(" "),a("li",[e._v("When the move happened.")]),e._v(" "),a("li",[e._v("What the move's outcome was.")]),e._v(" "),a("li",[e._v("Whether the game was won.")])]),e._v(" "),a("p",[e._v("Contrary to the "),a("em",[e._v("create game")]),e._v(" event, which alerted the players about a new game, the players now know which game IDs to keep an eye out for. There is no need to repeat the players' addresses, the game ID is information enough.")]),e._v(" "),a("p",[e._v("You define new keys in "),a("code",[e._v("x/checkers/types/keys.go")]),e._v(" similarly:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgUGxheU1vdmVFdmVudEtleSAgICAgICA9ICZxdW90O01vdmVQbGF5ZWQmcXVvdDsKICAgIFBsYXlNb3ZlRXZlbnRDcmVhdG9yICAgPSAmcXVvdDtDcmVhdG9yJnF1b3Q7CiAgICBQbGF5TW92ZUV2ZW50SWRWYWx1ZSAgID0gJnF1b3Q7SWRWYWx1ZSZxdW90OwogICAgUGxheU1vdmVFdmVudENhcHR1cmVkWCA9ICZxdW90O0NhcHR1cmVkWCZxdW90OwogICAgUGxheU1vdmVFdmVudENhcHR1cmVkWSA9ICZxdW90O0NhcHR1cmVkWSZxdW90OwogICAgUGxheU1vdmVFdmVudFdpbm5lciAgICA9ICZxdW90O1dpbm5lciZxdW90OwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/f5764b84452983bc85e59823302464723df02f9a/x/checkers/types/keys.go#L41-L48"}}),e._v(" "),a("p",[e._v("Emit the event in your file "),a("code",[e._v("x/checkers/keeper/msg_server_play_move.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgICBzZGsuTmV3RXZlbnQoc2RrLkV2ZW50VHlwZU1lc3NhZ2UsCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZShzZGsuQXR0cmlidXRlS2V5TW9kdWxlLCAmcXVvdDtjaGVja2VycyZxdW90OyksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZShzZGsuQXR0cmlidXRlS2V5QWN0aW9uLCB0eXBlcy5QbGF5TW92ZUV2ZW50S2V5KSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLlBsYXlNb3ZlRXZlbnRDcmVhdG9yLCBtc2cuQ3JlYXRvciksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5QbGF5TW92ZUV2ZW50SWRWYWx1ZSwgbXNnLklkVmFsdWUpLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUodHlwZXMuUGxheU1vdmVFdmVudENhcHR1cmVkWCwgc3RyY29udi5Gb3JtYXRJbnQoaW50NjQoY2FwdHVyZWQuWCksIDEwKSksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5QbGF5TW92ZUV2ZW50Q2FwdHVyZWRZLCBzdHJjb252LkZvcm1hdEludChpbnQ2NChjYXB0dXJlZC5ZKSwgMTApKSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLlBsYXlNb3ZlRXZlbnRXaW5uZXIsIGdhbWUuV2lubmVyKCkuQ29sb3IpLAogICAgKSwKKQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/f5764b84452983bc85e59823302464723df02f9a/x/checkers/keeper/msg_server_play_move.go#L62-L72"}}),e._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),a("p",[e._v("Time to add a third message to make it possible for a player to "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/reject-game.html"}},[e._v("reject a game")]),e._v(" and make your checkers blockchain more resistant to spam.")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);