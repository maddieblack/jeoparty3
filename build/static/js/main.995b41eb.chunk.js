(this.webpackJsonpjeoparty3=this.webpackJsonpjeoparty3||[]).push([[0],{23:function(e,t){t.GameState={LOBBY:"lobby",BOARD:"board",CLOSED_CLUE:"closedClue",OPEN_CLUE:"openClue",DECISION:"decision",ANSWER:"answer",SCOREBOARD:"scoreboard"}},47:function(e,t,n){},55:function(e,t,n){},87:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(48),s=n.n(a),i=n(12),r=n(28),o=n(14),j=n(7),l=n(6),u=(n(55),n(1)),b=function(e){var t=e.categories.map((function(e){var t=e.title;return Object(u.jsx)(l.a,{lg:"2",children:t})})),n=Array.from({length:5},(function(e,t){return t+1})).map((function(e){var t=200*e,n=Array.from(Array(6).keys()).map((function(){return Object(u.jsx)(l.a,{lg:"2",children:t})}));return Object(u.jsx)(j.a,{className:"board-row",children:n})}));return Object(u.jsxs)(o.a,{fluid:!0,children:[Object(u.jsx)(j.a,{className:"board-row",children:t}),n]})},O=n(15),d=n(19),f=n(49),x=n.n(f)()(),h=Object(c.createContext)(),m=(n(47),n(87),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(h),r=Object(c.useCallback)((function(){s.emit("start_game")}),[]);return Object(c.useEffect)((function(){s.on("session_name",(function(e){a(e)})),s.on("start_game_failure",(function(){alert("There aren't any players in this session!")}))}),[]),Object(u.jsx)(o.a,{fluid:!0,className:"browser-lobby",children:Object(u.jsxs)(j.a,{className:"text-center",children:[Object(u.jsx)(l.a,{lg:"12",children:Object(u.jsx)("h1",{children:"Jeoparty! 3"})}),Object(u.jsx)(l.a,{lg:"12",children:Object(u.jsxs)("span",{children:["Session name: ",n]})}),Object(u.jsx)(l.a,{lg:"12",children:Object(u.jsx)(O.a,{className:"mb-3 justify-content-center",children:Object(u.jsx)(d.a,{onClick:function(){return r()},variant:"light",children:"Start Game"})})})]})})}),g=function(e){var t=Object(c.useContext)(h);return Object(c.useEffect)((function(){t.on("disconnect",(function(){alert("You've been disconnected!")}))})),Object(u.jsx)("div",{children:e.children})},v=function(){return Object(u.jsx)(o.a,{fluid:!0,children:Object(u.jsx)(j.a,{className:"text-center",children:Object(u.jsx)(l.a,{lg:"12",children:"Welcome to the mobile board!"})})})},y=n(29),C=function(){var e="sessionName",t="signature",n="waiting",a=Object(c.useState)(""),s=Object(i.a)(a,2),r=s[0],b=s[1],f=Object(c.useState)(""),x=Object(i.a)(f,2),m=x[0],g=x[1],v=Object(c.useState)(e),C=Object(i.a)(v,2),_=C[0],p=C[1],S=Object(c.useContext)(h),N=Object(c.useCallback)((function(e){S.emit("join_session",e)}),[]),w=Object(c.useCallback)((function(e){S.emit("submit_signature",e)}),[]);return Object(c.useEffect)((function(){S.on("join_session_success",(function(e){alert("You joined session (".concat(e,")")),b(""),p(t)})),S.on("join_session_failure",(function(e){alert("Couldn't find session (".concat(e,")")),b("")})),S.on("submit_signature_success",(function(){g(""),p(n)})),S.on("submit_signature_failure",(function(){alert("That signature was illegal, please try again!"),g("")})),S.on("reconnect",(function(){p(n)}))}),[]),Object(u.jsxs)(o.a,{fluid:!0,children:[_===e&&Object(u.jsx)(j.a,{className:"text-center",children:Object(u.jsxs)(l.a,{lg:"12",children:["Welcome to the mobile lobby!",Object(u.jsxs)(O.a,{className:"mb-3",children:[Object(u.jsx)(y.a,{value:r,onChange:function(e){return b(e.target.value)},"aria-describedby":"basic-addon1"}),Object(u.jsx)(O.a.Prepend,{children:Object(u.jsx)(d.a,{onClick:function(){return N(r)},variant:"outline-secondary",children:"Join"})})]})]})}),_===t&&Object(u.jsx)(j.a,{className:"text-center",children:Object(u.jsxs)(l.a,{lg:"12",children:["You're in a session!",Object(u.jsxs)(O.a,{className:"mb-3",children:[Object(u.jsx)(y.a,{value:m,onChange:function(e){return g(e.target.value)},"aria-describedby":"basic-addon1"}),Object(u.jsx)(O.a.Prepend,{children:Object(u.jsx)(d.a,{onClick:function(){return w(m)},variant:"outline-secondary",children:"Submit"})})]})]})}),_===n&&Object(u.jsx)(j.a,{className:"text-center",children:Object(u.jsx)(l.a,{lg:"12",children:"You're waiting!"})})]})},_=n(23),p=(n(93),function(){var e=Object(c.useState)(_.GameState.LOBBY),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),o=Object(i.a)(s,2),j=o[0],l=o[1];Object(c.useEffect)((function(){x.onAny((function(e){console.log("Heard (".concat(e,")"))})),x.on("set_game_state",(function(e){a(e)})),x.on("categories",(function(e){l(e)}))}),[]);var O=null,d=null;switch(n){case _.GameState.LOBBY:O=Object(u.jsx)(m,{}),d=Object(u.jsx)(C,{});break;case _.GameState.BOARD:O=Object(u.jsx)(b,{categories:j}),d=Object(u.jsx)(v,{});break;default:O=Object(u.jsx)(m,{}),d=Object(u.jsx)(C,{})}return Object(u.jsxs)(h.Provider,{value:x,children:[Object(u.jsx)(r.BrowserView,{children:O}),Object(u.jsx)(r.MobileView,{children:Object(u.jsx)(g,{children:d})})]})});x.on("connect_device",(function(){x.emit("connect_device",/Mobi/.test(navigator.userAgent))})),s.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.995b41eb.chunk.js.map