(this.webpackJsonpjeoparty3=this.webpackJsonpjeoparty3||[]).push([[0],{102:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(52),c=n.n(i),s=n(3),r=n(33),o=n(53),l=n.n(o)()(),u=Object(a.createContext)(),d=n(1),j=function(e){var t=Object(a.useContext)(u);return Object(a.useEffect)((function(){t.on("disconnect",(function(){window.location.reload()}))})),Object(d.jsx)("div",{children:e.children})},b=n(7),O=n(4),f=n(5),h=n(10),m=n(11),g=(n(51),n(91),function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useContext)(u);Object(a.useEffect)((function(){c.on("session_name",(function(e){i(e)})),c.on("start_game_failure",(function(){alert("There aren't any players in this session!")}))}),[]);var r=Object(a.useCallback)((function(){c.emit("start_game")}),[]);return Object(d.jsx)(b.a,{fluid:!0,className:"browser-lobby",children:Object(d.jsxs)(O.a,{className:"text-center",children:[Object(d.jsx)(f.a,{lg:"12",children:Object(d.jsx)("h1",{children:"Jeoparty! 3"})}),Object(d.jsx)(f.a,{lg:"12",children:Object(d.jsxs)("span",{children:["Session name: ",n]})}),Object(d.jsx)(f.a,{lg:"12",children:Object(d.jsx)(h.a,{className:"mb-3 justify-content-center",children:Object(d.jsx)(m.a,{onClick:function(){return r()},variant:"light",children:"Start Game"})})})]})})}),x=(n(92),n(17)),v=function(){var e=Object(a.useState)(x.sampleCategories),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useContext)(u);Object(a.useEffect)((function(){c.on("categories",(function(e){i(e)}))}),[]);var r=n.map((function(e){var t=e.title;return Object(d.jsx)(f.a,{lg:"2",children:e&&e.completed?"":t})})),o=Array.from(Array(5).keys()).map((function(e){var t=200*(e+1),a=Array.from(Array(6).keys()).map((function(a){var i=n&&n[a].clues[e];return console.log(n),Object(d.jsx)(f.a,{lg:"2",children:i&&i.completed?"":t})}));return Object(d.jsx)(O.a,{className:"board-row",children:a})}));return Object(d.jsxs)(b.a,{fluid:!0,children:[Object(d.jsx)(O.a,{className:"board-row",children:r}),o]})},_=(n(93),function(e){return e.style.transform="translateY(".concat(e.start?0:"20vh",")"),Object(d.jsx)("div",{style:e.style,className:"timer-container",children:Object(d.jsxs)("div",{className:"timer-frame",children:[e.children,Object(d.jsx)("span",{children:Array.from(Array(9).keys()).map((function(){return Object(d.jsx)("div",{className:"timer-frame-cell"})}))})]})})}),y=function(e){return console.log("rendering Timer with start=".concat(e.start)),Object(d.jsxs)(_,{style:e.style,start:e.start,children:[Object(d.jsx)("div",{className:"timer-background"}),Object(d.jsx)("div",{style:{transform:"scaleX(".concat(e.start?0:1,")"),transitionDuration:"".concat(e.time,"s")},className:"timer"})]})},w=(n(94),function(){var e=Object(a.useState)(x.sampleCategories),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(null),r=Object(s.a)(c,2),o=r[0],l=r[1],j=Object(a.useState)(null),h=Object(s.a)(j,2),m=h[0],g=h[1],v=Object(a.useState)(!1),_=Object(s.a)(v,2),w=_[0],S=_[1],p=Object(a.useContext)(u);return Object(a.useEffect)((function(){p.on("categories",(function(e){i(e)})),p.on("request_clue",(function(e,t){l(e),g(t)})),setTimeout((function(){S(!0)}),100)})),Object(d.jsxs)(b.a,{fluid:!0,children:[Object(d.jsx)(O.a,{className:"clue-row text-center",children:Object(d.jsxs)(f.a,{lg:"12",children:["Browser Clue ",Object(d.jsx)("br",{}),null!==o&&null!==m&&n[o].clues[m].question]})}),Object(d.jsx)(O.a,{className:"timer-row",children:Object(d.jsx)(y,{style:{width:"60vw",height:"6vh"},start:w,time:5})})]})}),S=(n(95),function(){var e=Object(a.useState)(x.sampleCategories),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(null),r=Object(s.a)(c,2),o=r[0],l=r[1],j=Object(a.useState)(null),h=Object(s.a)(j,2),m=h[0],g=h[1],v=Object(a.useState)(""),_=Object(s.a)(v,2),w=_[0],S=_[1],p=Object(a.useState)(!1),A=Object(s.a)(p,2),k=A[0],C=A[1],T=Object(a.useContext)(u);return Object(a.useEffect)((function(){T.on("categories",(function(e){i(e)})),T.on("request_clue",(function(e,t){l(e),g(t)})),T.on("answer_livefeed",(function(e){S(e)})),setTimeout((function(){C(!0)}),100)})),Object(d.jsxs)(b.a,{fluid:!0,children:[Object(d.jsx)(O.a,{className:"answer-row text-center",children:Object(d.jsxs)(f.a,{lg:"12",children:["Browser Answer ",Object(d.jsx)("br",{}),null!==o&&null!==m&&n[o].clues[m].question,Object(d.jsx)("br",{}),"Answer Livefeed: ",w]})}),Object(d.jsx)(O.a,{className:"timer-row",children:Object(d.jsx)(y,{style:{width:"60vw",height:"6vh"},start:k,time:5})})]})}),p=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),r=Object(s.a)(c,2),o=r[0],l=r[1],j=Object(a.useState)(!1),h=Object(s.a)(j,2),m=h[0],g=h[1],x=Object(a.useState)(""),v=Object(s.a)(x,2),_=v[0],y=v[1],w=Object(a.useState)(!1),S=Object(s.a)(w,2),p=S[0],A=S[1],k=Object(a.useState)(""),C=Object(s.a)(k,2),T=C[0],N=C[1],I=Object(a.useContext)(u);return Object(a.useEffect)((function(){I.on("show_answer",(function(e){i(!0),y(e)})),I.on("show_decision",(function(e){i(!1),l(!0),A(e)})),I.on("show_correct_answer",(function(e){l(!1),g(!0),N(e)}))}),[]),Object(d.jsx)(b.a,{fluid:!0,children:Object(d.jsx)(O.a,{className:"text-center",children:Object(d.jsxs)(f.a,{lg:"12",children:[n&&_,o&&(p?"correct!":"incorrect!"),m&&T]})})})},A=(n(96),n(97),function(e){return Object.values(e).sort((function(e,t){return t.score-e.score}))}),k=function(e,t){return e.name===t},C=function(e){return Object(d.jsx)(O.a,{style:{transform:"translate(0, ".concat(25*e.positionChange,"vh)")},className:"player-card-row",children:Object(d.jsxs)(f.a,{lg:"12",className:"player-card-col",children:[e.player.name,": ",e.player.score]})})},T=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)([]),r=Object(s.a)(c,2),o=r[0],l=r[1],j=Object(a.useState)(!1),O=Object(s.a)(j,2),f=O[0],h=O[1],m=Object(a.useContext)(u);return Object(a.useEffect)((function(){m.on("players",(function(e){i(A(e))})),m.on("updated_players",(function(e){l(A(e))})),m.on("show_update",(function(){h(!0)}))}),[]),Object(d.jsx)(b.a,{fluid:!0,children:n.map((function(e){var t=n.findIndex((function(t){return k(t,e.name)})),a=o.findIndex((function(t){return k(t,e.name)})),i=f?a-t:0,c=4-(f?a:t),s=f?o[a]:e;return Object(d.jsx)(C,{style:{zIndex:"".concat(c)},player:s,positionChange:i})}))})},N=function(e){var t=Object(a.useContext)(u);return Object(a.useEffect)((function(){t.on("reload",(function(){window.location.reload()})),t.on("disconnect",(function(){console.log("You've been disconnected!")}))})),Object(d.jsx)("div",{children:e.children})},I=n(22),q=function(){var e="sessionName",t="signature",n="isWaiting",i=Object(a.useState)(""),c=Object(s.a)(i,2),r=c[0],o=c[1],l=Object(a.useState)(""),j=Object(s.a)(l,2),g=j[0],x=j[1],v=Object(a.useState)(e),_=Object(s.a)(v,2),y=_[0],w=_[1],S=Object(a.useContext)(u);Object(a.useEffect)((function(){S.on("join_session_success",(function(e){alert("You joined session (".concat(e,")")),o(""),w(t)})),S.on("join_session_failure",(function(e){alert("Couldn't find session (".concat(e,")")),o("")})),S.on("submit_signature_success",(function(){x(""),w(n)})),S.on("submit_signature_failure",(function(){alert("That signature was illegal, please try again!"),x("")})),S.on("reconnect",(function(){w(n)}))}),[]);var p=Object(a.useCallback)((function(e){S.emit("join_session",e)}),[]),A=Object(a.useCallback)((function(e){S.emit("submit_signature",e)}),[]);return Object(d.jsxs)(b.a,{fluid:!0,children:[y===e&&Object(d.jsx)(O.a,{className:"text-center",children:Object(d.jsxs)(f.a,{lg:"12",children:["Welcome to the mobile lobby!",Object(d.jsxs)(h.a,{className:"mb-3",children:[Object(d.jsx)(I.a,{value:r,onChange:function(e){return o(e.target.value)},"aria-describedby":"basic-addon1"}),Object(d.jsx)(h.a.Prepend,{children:Object(d.jsx)(m.a,{onClick:function(){return p(r)},variant:"outline-secondary",children:"Join"})})]})]})}),y===t&&Object(d.jsx)(O.a,{className:"text-center",children:Object(d.jsxs)(f.a,{lg:"12",children:["You're in a session!",Object(d.jsxs)(h.a,{className:"mb-3",children:[Object(d.jsx)(I.a,{value:g,onChange:function(e){return x(e.target.value)},"aria-describedby":"basic-addon1"}),Object(d.jsx)(h.a.Prepend,{children:Object(d.jsx)(m.a,{onClick:function(){return A(g)},variant:"outline-secondary",children:"Submit"})})]})]})}),y===n&&Object(d.jsx)(O.a,{className:"text-center",children:Object(d.jsx)(f.a,{lg:"12",children:"You're waiting!"})})]})},Z=n(23),D=(n(102),function(){var e=Object(a.useState)(x.sampleCategories),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!0),r=Object(s.a)(c,2),o=r[0],l=r[1],j=Object(a.useState)(null),g=Object(s.a)(j,2),v=g[0],_=g[1],y=Object(a.useState)(null),w=Object(s.a)(y,2),S=w[0],p=w[1],A=Object(a.useContext)(u);Object(a.useEffect)((function(){A.on("categories",(function(e){i(e)})),A.on("is_board_controller",(function(e){l(e)}))}),[]);var k=Object(a.useCallback)((function(e,t){A.emit("request_clue",e,t)}),[]),C=Array.from(Array(6).keys()).map((function(e){var t=n[e],a=t.title;return Object(d.jsx)(Z.a.Item,{action:!0,active:v===e,onClick:function(){return _(e)},disabled:t&&t.completed,children:t&&t.completed?"":a})})),T=Array.from(Array(5).keys()).map((function(e){if(null!==v){var t=n[v],a=t&&t.clues[e],i=200*(e+1);return Object(d.jsx)(Z.a.Item,{action:!0,active:S===e,onClick:function(){return p(e)},disabled:a&&a.completed,children:a&&a.completed?"":i})}}));return Object(d.jsxs)(b.a,{fluid:!0,children:[o&&Object(d.jsxs)("div",{children:[Object(d.jsx)(O.a,{className:"category-list-row text-center",children:Object(d.jsx)(f.a,{lg:"12",children:Object(d.jsx)(Z.a,{children:C})})}),Object(d.jsx)("hr",{}),Object(d.jsx)(O.a,{className:"clue-list-row text-center",children:Object(d.jsx)(f.a,{lg:"12",children:null!==v&&Object(d.jsx)(Z.a,{children:T})})}),Object(d.jsx)(O.a,{className:"submit-button-row text-center",children:Object(d.jsx)(f.a,{lg:"12",children:null!==v&&null!==S&&Object(d.jsx)(h.a,{className:"mb-3 justify-content-center",children:Object(d.jsx)(m.a,{onClick:function(){return k(v,S)},variant:"dark",children:"Submit"})})})})]}),!o&&Object(d.jsx)(O.a,{className:"text-center",children:Object(d.jsx)(f.a,{lg:"12",children:"You can't select a clue... dumbass!"})})]})}),E=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useContext)(u);Object(a.useEffect)((function(){c.on("players_answered",(function(e){i(e.includes(c.id))}))}),[]);var r=Object(a.useCallback)((function(){c.emit("buzz_in")}),[]);return Object(d.jsxs)(b.a,{fluid:!0,children:[!n&&Object(d.jsx)(O.a,{className:"text-center",children:Object(d.jsx)(f.a,{lg:"12",children:Object(d.jsx)(m.a,{variant:"danger",onClick:function(){return r()},children:"Buzz In!"})})}),n&&Object(d.jsx)(O.a,{className:"text-center",children:Object(d.jsx)(f.a,{lg:"12",children:"You've already buzzed in... dumbass!"})})]})},z=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),r=Object(s.a)(c,2),o=r[0],l=r[1],j=Object(a.useContext)(u);Object(a.useEffect)((function(){j.on("is_answering",(function(e){l(e)})),j.on("answer_timeout",(function(e){j.emit("submit_answer",e)}))}),[]);var g=Object(a.useCallback)((function(e){i(e.target.value),j.emit("answer_livefeed",e.target.value)}),[]),x=Object(a.useCallback)((function(e){j.emit("submit_answer",e)}),[]);return Object(d.jsxs)(b.a,{fluid:!0,children:[o&&Object(d.jsx)(O.a,{className:"text-center",children:Object(d.jsx)(f.a,{lg:"12",children:Object(d.jsxs)(h.a,{className:"mb-3",children:[Object(d.jsx)(I.a,{value:n,onChange:function(e){return g(e)},"aria-describedby":"basic-addon1"}),Object(d.jsx)(h.a.Prepend,{children:Object(d.jsx)(m.a,{onClick:function(){return x(n)},variant:"outline-secondary",children:"Submit"})})]})})}),!o&&Object(d.jsx)(O.a,{className:"text-center",children:Object(d.jsx)(f.a,{lg:"12",children:"You're not answering... dumbass!"})})]})},B=function(){return Object(d.jsx)(b.a,{fluid:!0,children:Object(d.jsx)(O.a,{className:"text-center",children:Object(d.jsx)(f.a,{lg:"12",children:"Welcome to the mobile decision page!"})})})},U=function(){return Object(d.jsx)(b.a,{fluid:!0,children:Object(d.jsx)(O.a,{className:"text-center",children:Object(d.jsx)(f.a,{lg:"12",children:"Welcome to the mobile scoreboard page!"})})})},K=(n(103),n(18)),Q=function(){var e=Object(a.useState)(K.GameState.LOBBY),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)((function(){return function(){}})),o=Object(s.a)(c,2),b=o[0],O=o[1];Object(a.useEffect)((function(){l.onAny((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];console.log("Heard ".concat(e," with args ").concat(n))})),l.on("set_game_state",(function(e,t){i(e),O((function(){return t()}))}))}),[]),Object(a.useEffect)((function(){b&&b(),O((function(){return function(){}}))}),[n]);var f=null,h=null;switch(n){case K.GameState.LOBBY:f=Object(d.jsx)(g,{}),h=Object(d.jsx)(q,{});break;case K.GameState.BOARD:f=Object(d.jsx)(v,{}),h=Object(d.jsx)(D,{});break;case K.GameState.CLUE:f=Object(d.jsx)(w,{}),h=Object(d.jsx)(E,{});break;case K.GameState.ANSWER:f=Object(d.jsx)(S,{}),h=Object(d.jsx)(z,{});break;case K.GameState.DECISION:f=Object(d.jsx)(p,{}),h=Object(d.jsx)(B,{});break;case K.GameState.SCOREBOARD:f=Object(d.jsx)(T,{}),h=Object(d.jsx)(U,{});break;default:f=Object(d.jsx)(g,{}),h=Object(d.jsx)(q,{})}return Object(d.jsxs)(u.Provider,{value:l,children:[Object(d.jsx)(r.BrowserView,{children:Object(d.jsx)(j,{children:f})}),Object(d.jsx)(r.MobileView,{children:Object(d.jsx)(N,{children:h})})]})};l.on("connect_device",(function(){l.emit("connect_device",/Mobi/.test(navigator.userAgent))})),c.a.render(Object(d.jsx)(Q,{}),document.getElementById("root"))},17:function(e,t){t.sampleCategories=[{id:12619,title:"classic rock",clues_count:5,clues:[{id:94925,answer:"Led Zeppelin",question:"This group's fourth album had no title or name on the cover but did sell millions",value:200,airdate:"2010-07-13T12:00:00.000Z",category_id:12619,game_id:null,invalid_count:null},{id:94931,answer:"The Beach Boys",question:'"I Get Around" was their first #1 hit',value:400,airdate:"2010-07-13T12:00:00.000Z",category_id:12619,game_id:null,invalid_count:null},{id:94937,answer:"Lynyrd Skynyrd",question:'This group that gave us "Sweet Home Alabama" was inducted into the Rock & Roll Hall of Fame in 2006',value:600,airdate:"2010-07-13T12:00:00.000Z",category_id:12619,game_id:null,invalid_count:null},{id:94943,answer:"The Eagles",question:'This group followed up 1994\'s "Hell Freezes Over" with the 2007 studio album "Long Road Out of Eden"',value:800,airdate:"2010-07-13T12:00:00.000Z",category_id:12619,game_id:null,invalid_count:null},{id:94949,answer:'"My Generation"',question:'It\'s The Who song that says, "Hope I die before I get old"',value:1e3,airdate:"2010-07-13T12:00:00.000Z",category_id:12619,game_id:null,invalid_count:null}]},{id:7295,title:"full service",clues_count:5,clues:[{id:57159,answer:"baptism",question:"Performed to make you part of the Mormon Church, it needs a body of water large enough for total immersion",value:200,airdate:"2002-10-08T12:00:00.000Z",category_id:7295,game_id:null,invalid_count:null},{id:57165,answer:"Dearly beloved",question:"They're the first 2 words in the Book of Common Prayerwedding service",value:400,airdate:"2002-10-08T12:00:00.000Z",category_id:7295,game_id:null,invalid_count:null},{id:57171,answer:"bread & wine",question:"As used during the Last Supper they're the food & drink blessed during the eucharist",value:600,airdate:"2002-10-08T12:00:00.000Z",category_id:7295,game_id:null,invalid_count:null},{id:57177,answer:"Yom Kippur",question:"Kol Nidre, which negates vows made between humans & God, is recited on the eve of this Jewish holiday",value:800,airdate:"2002-10-08T12:00:00.000Z",category_id:7295,game_id:null,invalid_count:null},{id:57183,answer:"requiem mass",question:'This kind of mass has included a "Dies Irae"; Mozart wrote one late in his life',value:1e3,airdate:"2002-10-08T12:00:00.000Z",category_id:7295,game_id:null,invalid_count:null}]},{id:17611,title:"carbonation nation",clues_count:10,clues:[{id:127977,answer:"Dr Pepper",question:'In 1890 it said it was "good for brain and brawn"; well, it should know--it is a "physician"',value:200,airdate:"2013-11-11T12:00:00.000Z",category_id:17611,game_id:null,invalid_count:null},{id:127983,answer:"7-Up",question:"One type of this beverage that already has a number in its name is called 10, for its calorie count",value:400,airdate:"2013-11-11T12:00:00.000Z",category_id:17611,game_id:null,invalid_count:null},{id:127989,answer:"A&W",question:"rootbeer.com is operated by this letter-perfect company, around since 1919",value:600,airdate:"2013-11-11T12:00:00.000Z",category_id:17611,game_id:null,invalid_count:null},{id:127995,answer:"Mr. Pibb",question:"I've been billed as \"a great tasting soft drink that's strong & bold & refreshing\"; they call me Mr. this!",value:800,airdate:"2013-11-11T12:00:00.000Z",category_id:17611,game_id:null,invalid_count:null},{id:128001,answer:"Monster",question:'This energy drink wants you to "Unleash the beast", perhaps with options like M-80 or Assault',value:1e3,airdate:"2013-11-11T12:00:00.000Z",category_id:17611,game_id:null,invalid_count:null}]},{id:7006,title:'ole "miss"',clues_count:5,clues:[{id:54999,answer:"missionary",question:"Someone who does church work abroad",value:200,airdate:"2003-01-17T12:00:00.000Z",category_id:7006,game_id:null,invalid_count:null},{id:55005,answer:"Missouri",question:"It's bordered by Tennessee, Arkansas & Oklahoma",value:400,airdate:"2003-01-17T12:00:00.000Z",category_id:7006,game_id:null,invalid_count:null},{id:55011,answer:"the Missing Link",question:"Theoretical transitional evolutionary stage between apes & humans",value:600,airdate:"2003-01-17T12:00:00.000Z",category_id:7006,game_id:null,invalid_count:null},{id:55017,answer:"<i>Miss Saigon</i>",question:"This musical takes place in part during the last days of the Vietnam War",value:800,airdate:"2003-01-17T12:00:00.000Z",category_id:7006,game_id:null,invalid_count:null},{id:55023,answer:"Missoula",question:"City that's home to the University of Montana",value:1e3,airdate:"2003-01-17T12:00:00.000Z",category_id:7006,game_id:null,invalid_count:null}]},{id:11006,title:"____off!",clues_count:5,clues:[{id:83678,answer:"a spin-off",question:'"The Jeffersons" was "moving on up" as one of these from "All In The Family"',value:200,airdate:"2008-07-09T12:00:00.000Z",category_id:11006,game_id:null,invalid_count:null},{id:83684,answer:"a rip-off",question:"A theft, cheat or swindle; what a.,.",value:400,airdate:"2008-07-09T12:00:00.000Z",category_id:11006,game_id:null,invalid_count:null},{id:83690,answer:"a knockoff",question:"8-letter term for an unlicensed copy of fashion clothing or purses",value:600,airdate:"2008-07-09T12:00:00.000Z",category_id:11006,game_id:null,invalid_count:null},{id:83696,answer:"a write-off",question:"A cancellation from accountants as a loss",value:800,airdate:"2008-07-09T12:00:00.000Z",category_id:11006,game_id:null,invalid_count:null},{id:83702,answer:"a runoff",question:"Rain flowing from land into a stream, or a final contest between 2 first-place contestants",value:1e3,airdate:"2008-07-09T12:00:00.000Z",category_id:11006,game_id:null,invalid_count:null}]},{id:331,title:"numbers in song",clues_count:5,clues:[{id:2110,answer:"16",question:"Biggest hit for The Crests was about a birthday cake with this many candles",value:100,airdate:"1987-04-29T12:00:00.000Z",category_id:331,game_id:null,invalid_count:null},{id:2116,answer:"sweet 16",question:"Neil Sedaka said, \"You've turned into the prettiest girl I've ever seen\" when she'd reached this age",value:200,airdate:"1987-04-29T12:00:00.000Z",category_id:331,game_id:null,invalid_count:null},{id:2122,answer:'"Sixteen Tons"',question:'Title of the song that begins, "Some people say a man is made out of mud"',value:300,airdate:"1987-04-29T12:00:00.000Z",category_id:331,game_id:null,invalid_count:null},{id:2128,answer:"16th Avenue",question:'Lacy J. Dalton sang "God bless the boys who make the noise on" this Nashville street',value:400,airdate:"1987-04-29T12:00:00.000Z",category_id:331,game_id:null,invalid_count:null},{id:2134,answer:"15 miles",question:'It\'s the specific distance mentioned in folk song "The Erie Canal"',value:500,airdate:"1987-04-29T12:00:00.000Z",category_id:331,game_id:null,invalid_count:null}]}]},18:function(e,t){t.GameState={LOBBY:"lobby",BOARD:"board",CLUE:"clue",ANSWER:"answer",DECISION:"decision",SCOREBOARD:"scoreboard"}},51:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t){t.samplePlayers={zsS3DKSSIUOegOQuAAAA:{socketId:"zsS3DKSSIUOegOQuAAAA",sessionName:"think",name:"Luffy",score:200},zsS3DKSSIUOegOQuAAAB:{socketId:"zsS3DKSSIUOegOQuAAAB",sessionName:"think",name:"Zoro",score:1e3},zsS3DKSSIUOegOQuAAAC:{socketId:"zsS3DKSSIUOegOQuAAAC",sessionName:"think",name:"Nami",score:2e3},zsS3DKSSIUOegOQuAAAD:{socketId:"zsS3DKSSIUOegOQuAAAD",sessionName:"think",name:"Chopper",score:1200}},t.sampleUpdatedPlayers={zsS3DKSSIUOegOQuAAAA:{socketId:"zsS3DKSSIUOegOQuAAAA",sessionName:"think",name:"Luffy",score:200},zsS3DKSSIUOegOQuAAAB:{socketId:"zsS3DKSSIUOegOQuAAAB",sessionName:"think",name:"Zoro",score:1e3},zsS3DKSSIUOegOQuAAAC:{socketId:"zsS3DKSSIUOegOQuAAAC",sessionName:"think",name:"Nami",score:2e3},zsS3DKSSIUOegOQuAAAD:{socketId:"zsS3DKSSIUOegOQuAAAD",sessionName:"think",name:"Chopper",score:2200}}},97:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.61017172.chunk.js.map