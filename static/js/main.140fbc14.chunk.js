(this.webpackJsonpgamestore=this.webpackJsonpgamestore||[]).push([[0],{77:function(e,n,t){"use strict";t.r(n);var a,c,r,i,s,o,d,m,l,b,j,g,u,h,p=t(0),O=t.n(p),f=t(22),x=t.n(f),v=t(5),w=t(13),y=t(16),S=t.n(y),k=t(21),_=t(17),E=t.n(_),G="https://api.rawg.io/api/",C=t(72)(),D=(C.format("MM"),C.format("DD"),C.format("YYYY"),C.add("1","day").format("YYYY-MM-DD")),I=C.add("1","year").format("YYYY-MM-DD"),A=C.subtract("1","year").format("YYYY-MM-DD"),L="games?dates=".concat(A,",").concat(D,"&ordering=-rating&page_size=10"),Y="games?dates=".concat(D,",").concat(I,"&ordering=-added&page_size=10"),z="games?dates=".concat(A,",").concat(D,"&ordering=-released&page_size=10"),F=function(e){return"".concat(G,"games/").concat(e,"/screenshots")},M=function(e){return"".concat(G,"games?search=").concat(e,"&page_size=9")},T=t(6),H=t(3),N=t(19),P=function(e,n){e.match(/media\/screenshots/)?e.replace("media/screenshots","media/resize/".concat(n,"/-/screenshots")):e.replace("/media/games/","/media/resize/".concat(n,"/-/games/"));return e},R=t(1),X=Object(T.b)(H.c.div)(a||(a=Object(v.a)(["\nmin-height:30vh;\ntext-align:center;\nborder-radius:1rem;\nbox-shadow: 0px 5px 20px rgba(0, 0, 0,0.2);\noverflow:hidden;\nimg{\n    width:100%;\n    height:40vh;\n    object-fit:cover;\n}\ncursor:pointer;\n\n"]))),B=function(e){var n=e.name,t=e.released,a=e.id,c=e.image,r=Object(w.b)();return Object(R.jsx)(X,{layoutId:a.toString(),onClick:function(){document.body.style.overflow="hidden",r(function(e){return function(){var n=Object(k.a)(S.a.mark((function n(t){var a,c;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING_DETAILS"}),n.next=3,E.a.get((r=e,"".concat(G,"games/").concat(r)));case 3:return a=n.sent,n.next=6,E.a.get(F(e));case 6:c=n.sent,t({type:"FETCH_DETAILS",payload:{detailGame:a.data,detailScreenshot:c.data.results}});case 8:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()}(a))},children:Object(R.jsxs)(N.b,{to:"/GameStop/game/".concat(a),children:[Object(R.jsx)(H.c.h3,{layoutId:"title ".concat(a.toString()),children:n}),Object(R.jsx)("p",{children:t}),Object(R.jsx)(H.c.img,{layoutId:"image ".concat(a.toString()),src:P(c,640),alt:n})]})})},J=t(4),U=t.p+"static/media/playstation.18cc4b9c.svg",V=t.p+"static/media/steam.d7b8819f.svg",q=t.p+"static/media/xbox.3e7db735.svg",K=t.p+"static/media/nintendo.f579be04.svg",Q=t.p+"static/media/apple.5757c37e.svg",W=t.p+"static/media/gamepad.c9269ef5.svg",Z=t(43),$=t.n(Z),ee=Object(T.b)(H.c.div)(c||(c=Object(v.a)(["\nwidth:100%;\nmin-height:100vh;\nbackground:rgba(0,0,0,0.5);\noverflow-y : scroll;\nposition:fixed; \ntop:0;\nleft:0;\nz-index: 5;\n\n&::-webkit-scrollbar{\n    width:0.5rem;\n}\n\n&::-webkit-scrollbar-thumb{\n    background-color:#ff7676;\n}\n\n&::-webkit-scrollbar-track{\n    background:white;\n}\n\n"]))),ne=Object(T.b)(H.c.div)(r||(r=Object(v.a)(["\nwidth:80%;\nborder-radius:1rem;\npadding:2rem 5rem;\nbackground:white;\ncolor:black;\nposition:absolute;\nz-index: 10;\nleft:10%;\nimg{\n    width:100%;\n}\n@media (max-width: 1000px) {\n    padding: 1rem 0.5rem;\n  }\n\n"]))),te=Object(T.b)(H.c.div)(i||(i=Object(v.a)(["\ndisplay:flex;\nalign-items:center;\njustify-content:space-between;\n\n@media (max-width: 1050px) {\n    h3 {\n      display: inline;\n    }\n    img {\n      width: 1rem;\n      height: 1rem;\n    }\n    .rating {\n      max-width: 10rem;\n    }\n  }\n\n"]))),ae=Object(T.b)(H.c.div)(s||(s=Object(v.a)(["\ntext-align:center;\n@media (max-width: 1050px) {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    h3 {\n      padding: 0.5rem;\n    }\n  }\n\n"]))),ce=Object(T.b)(H.c.div)(o||(o=Object(v.a)(["\ndisplay:flex;\njustify-content:space-evenly;\nimg{\n    margin-left:3rem;\n}\n\n@media (max-width: 1050px) {\n    img {\n      margin-left: 0.5rem;\n      margin-right: 0;\n    }\n  }\n\n"]))),re=Object(T.b)(H.c.div)(d||(d=Object(v.a)(["\nmargin-top:2rem;\nimg{\n    width:100%;\n}\n@media (max-width: 1050px) {\n    margin-top: 1rem;\n  }\n"]))),ie=Object(T.b)(H.c.div)(m||(m=Object(v.a)(["\nmargin:2rem 0rem;\n@media (max-width: 1050px) {\n    margin: 1rem 0;\n  }\n"]))),se=Object(T.b)(H.c.div)(l||(l=Object(v.a)(["\nimg{\n    margin:0.5rem 0rem;\n}\n\n\n"]))),oe=function(e){var n=e.pathId,t=Object(J.e)();console.log(typeof n);var a=Object(w.c)((function(e){return e.detail})),c=a.game,r=a.game_screenshot,i=a.isLoading;return Object(R.jsx)(R.Fragment,{children:!i&&Object(R.jsx)(ee,{className:"shadow",onClick:function(e){e.target.classList.contains("shadow")&&(document.body.style.overflow="auto",t.push("/GameStop/"))},children:Object(R.jsxs)(ne,{layoutId:n.toString(),children:[Object(R.jsxs)(te,{children:[Object(R.jsxs)("div",{className:"rating",children:[Object(R.jsx)(H.c.h3,{layoutId:"title ".concat(n.toString()),children:c.name}),Object(R.jsx)($.a,{value:c.rating,edit:!1,isHalf:!0,size:20,activeColor:"#ff7676"})]}),Object(R.jsxs)(ae,{children:[Object(R.jsx)("h3",{children:"Platforms:"}),Object(R.jsx)(ce,{children:c.platforms.map((function(e){return Object(R.jsx)("img",{src:(n=e.platform.name,n.includes("PlayStation")?U:n.includes("Xbox")?q:"PC"===n?V:"Nintendo Switch"===n?K:n.includes("OS")?Q:W),alt:e.platform.name,title:e.platform.name},e.platform.id);var n}))})]})]}),Object(R.jsx)(re,{children:Object(R.jsx)(H.c.img,{layoutId:"image ".concat(n.toString()),src:P(c.background_image,1280),alt:"background"})}),Object(R.jsx)(ie,{children:Object(R.jsxs)("p",{children:[" ",c.description_raw," "]})}),Object(R.jsx)(se,{children:r.map((function(e){return Object(R.jsx)("img",{src:P(e.image,1280),alt:"background"},e.id)}))})]})})})},de=Object(T.b)(H.c.div)(b||(b=Object(v.a)(["\npadding:0rem 5rem;\nh2{\n    padding:5rem 0rem;\n}\n\n"]))),me=Object(T.b)(H.c.div)(j||(j=Object(v.a)(["\nmin-height:80vh;\ndisplay:grid;\ngrid-template-columns: repeat(auto-fit, minmax(400px,1fr));\ngrid-column-gap:3rem;\ngrid-row-gap:5rem;\n\n"]))),le=function(){var e=Object(J.f)().pathname.split("/")[2],n=Object(w.b)();Object(p.useEffect)((function(){n(function(){var e=Object(k.a)(S.a.mark((function e(n){var t,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(G).concat(L));case 2:return t=e.sent,e.next=5,E.a.get("".concat(G).concat(Y));case 5:return a=e.sent,e.next=8,E.a.get("".concat(G).concat(z));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popularGames:t.data.results,upcomingGames:a.data.results,newGames:c.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[n]);var t=Object(w.c)((function(e){return e.games})),a=t.newGames,c=t.popularGames,r=t.upcomingGames,i=t.searched;return Object(R.jsx)(de,{children:Object(R.jsxs)(H.b,{type:"crossfade",children:[Object(R.jsx)(H.a,{children:e&&Object(R.jsx)(oe,{pathId:e})}),i.length>0?Object(R.jsxs)("div",{className:"searched",children:[Object(R.jsx)("h3",{children:"".concat(i.length," results found..")}),Object(R.jsx)("h2",{children:"Searched Games"}),Object(R.jsx)(me,{children:i.map((function(e){return Object(R.jsx)(B,{name:"".concat(e.name),released:e.released,id:e.id,image:e.background_image},e.id)}))})]}):"",Object(R.jsx)("h2",{children:"Upcoming Games"}),Object(R.jsx)(me,{children:r.map((function(e){return Object(R.jsx)(B,{name:"".concat(e.name),released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(R.jsx)("h2",{children:"New Games"}),Object(R.jsx)(me,{children:a.map((function(e){return Object(R.jsx)(B,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(R.jsx)("h2",{children:"Popular Games"}),Object(R.jsx)(me,{children:c.map((function(e){return Object(R.jsx)(B,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]})})},be=Object(T.a)(g||(g=Object(v.a)(["\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n}\nhtml{\n    &::-webkit-scrollbar{\n        width:0.5rem;\n    }\n    &::-webkit-scrollbar-thumb{\n        background-color:darkgrey;\n    }\n    &::-webkit-scrollbar-track{\n    background:white;\n}\n}\n\nbody{\n    font-family:'Montserrat';\n    width:100%;\n}\nh2{\n    font-size:3rem;\n    font-family:'Abril Fatface', cursive;\n    font-weight:lighter;\n    color:#FF7676;\n}\nh3{\n    font-size:1.3rem;\n    color:#333;\n    padding:1.5rem 0.5rem;\n}\np{\n    font-size:1.2rem;\n    line-height:200%;\n    color:#696969;\n    padding:0.5rem;\n}\na{\n    text-decoration:none;\n    color:#333;\n}\nimg{\n    display:block;\n}\n\ninput{\n    font-weight:bold;\n    font-family:'Montserrat',sans-serif;\n}\n\n"]))),je=t(45),ge=t.p+"static/media/memoji.8715d61b.png",ue=Object(T.b)(H.c.div)(u||(u=Object(v.a)(["\npadding:3rem 5rem;\ntext-align:center;\ninput{\n    width:50%;\n    font-size:1.5rem;\n    padding:0.5rem;\n    border:none;\n    margin:1rem 1rem 0rem 0rem;\n    outline:none;\n    box-shadow: 0px 0px 30px rgba(0,0,0,0.2);\n\n}\n\nbutton{\n    font-size:1.5rem;\n    border:none;\n    padding:0.5rem 2rem;\n    cursor:pointer;\n    background: #ff7676;\n    color:white;\n}\n"]))),he=Object(T.b)(H.c.div)(h||(h=Object(v.a)(["\ndisplay:flex;\njustify-content:center;\ncursor:pointer;\n\nimg{\n\n    height:4rem;\n    width:4rem;\n    object-fit:cover;\n}\n\nh1{\n    margin-top:0.5rem;\n}\n\n"]))),pe=function(){var e=Object(w.b)(),n=Object(p.useState)(""),t=Object(je.a)(n,2),a=t[0],c=t[1];return Object(R.jsxs)(ue,{children:[Object(R.jsxs)(he,{onClick:function(n){e({type:"CLEAR_SEARCHED"}),c("")},children:[Object(R.jsx)("img",{src:ge,alt:"logo"}),Object(R.jsx)("h1",{children:"GameStop"})]}),Object(R.jsxs)("form",{className:"search",onSubmit:function(n){var t;n.preventDefault(),e((t=a,function(){var e=Object(k.a)(S.a.mark((function e(n){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(M(t));case 2:a=e.sent,n({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())),c("")},children:[Object(R.jsx)("input",{value:a,type:"text",onChange:function(e){c(e.target.value)}}),Object(R.jsx)("button",{type:"submit",children:"Search"})]})]})};var Oe=function(){return Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(be,{}),Object(R.jsx)(pe,{}),Object(R.jsx)(J.a,{path:["/GameStop/","game/:id"],children:Object(R.jsx)(le,{})})]})},fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},xe=t(15),ve=t(8),we={popularGames:[],newGames:[],upcomingGames:[],searched:[]},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(ve.a)(Object(ve.a)({},e),{},{popularGames:n.payload.popularGames,newGames:n.payload.newGames,upcomingGames:n.payload.upcomingGames});case"FETCH_SEARCHED":return Object(ve.a)(Object(ve.a)({},e),{},{searched:n.payload.searched});case"CLEAR_SEARCHED":return Object(ve.a)(Object(ve.a)({},e),{},{searched:[]});default:return Object(ve.a)({},e)}},Se={game:{},game_screenshot:{},isLoading:!0},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_DETAILS":return Object(ve.a)(Object(ve.a)({},e),{},{game:n.payload.detailGame,game_screenshot:n.payload.detailScreenshot,isLoading:!1});case"LOADING_DETAILS":return Object(ve.a)(Object(ve.a)({},e),{},{isLoading:!0});default:return Object(ve.a)({},e)}},_e=Object(xe.c)({games:ye,detail:ke}),Ee=t(44),Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xe.d,Ce=Object(xe.e)(_e,Ge(Object(xe.a)(Ee.a)));x.a.render(Object(R.jsx)(O.a.StrictMode,{children:Object(R.jsx)(w.a,{store:Ce,children:Object(R.jsx)(N.a,{children:Object(R.jsx)(Oe,{})})})}),document.getElementById("root")),fe()}},[[77,1,2]]]);
//# sourceMappingURL=main.140fbc14.chunk.js.map