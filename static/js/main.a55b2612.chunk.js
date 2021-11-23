(this["webpackJsonpbook-tracking"]=this["webpackJsonpbook-tracking"]||[]).push([[0],{14:function(e,t,n){e.exports={container:"Filter_container__2M0rY",title:"Filter_title__3gKSR",clear:"Filter_clear__1rN_K"}},27:function(e,t,n){},28:function(e,t,n){},4:function(e,t,n){e.exports={container:"Book_container__goIcj",status:"Book_status__3rjdk",statusActive:"Book_statusActive__3y9ux",content:"Book_content__3VPls",header:"Book_header__31wy1",headerLeft:"Book_headerLeft__3ZNYl",author:"Book_author__2iMAN",title:"Book_title__317oa",headerRight:"Book_headerRight__5bbIL",actionName:"Book_actionName__zNYnj",description:"Book_description__188L1"}},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(20),s=n.n(i),r=(n(27),n(13)),o=n(2),l=n(5),d=n(9),j=n(6),b=(n(28),n(7)),u=n(22),h=n(14),O=n.n(h),f=n(8),g=n.n(f),x=a.a.createContext(),_=n(1),m=function(e){var t=e.tags,n=Object(c.useContext)(x),a=n.clearFilterTags,i=n.deleteFilterTag;return Object(_.jsx)("div",{className:O.a.container,children:Object(_.jsxs)("div",{className:g.a.tags,children:[Object(_.jsx)("span",{className:O.a.title,children:"Filters by tags:"}),t.map((function(e,t){return Object(_.jsx)("div",{className:g.a.tag,onClick:function(){return i(e)},children:e},t)})),Object(_.jsx)("div",{className:O.a.clear,onClick:function(){return a()},children:"(clear)"})]})})},v=n(21),p=function(e){var t=e.tags,n=Object(c.useContext)(x),a=n.toggleFilterTag,i=n.filterTags;return Object(_.jsx)("div",{className:g.a.tags,children:t.map((function(e,t){return Object(_.jsxs)("div",{className:i.includes(e)?[g.a.tag,g.a.activeFilterTag].join(" "):g.a.tag,onClick:function(){return a(e)},children:["#",e]},t)}))})},k=n(4),N=n.n(k),T=function(e){var t=e.book,n=e.actionName,a=e.transfer,i=Object(c.useContext)(x).booksAlreadyRead;return Object(_.jsxs)("div",{className:N.a.container,children:[Object(_.jsx)("div",{className:i.includes(t.id)?[N.a.status,N.a.statusActive].join(" "):N.a.status,children:Object(_.jsx)("span",{children:"Read"})}),Object(_.jsx)("div",{className:N.a.content,children:Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:N.a.header,children:[Object(_.jsxs)("div",{className:N.a.headerLeft,children:[Object(_.jsx)("div",{className:N.a.author,children:t.author}),Object(_.jsx)("h2",{className:N.a.title,children:t.title})]}),Object(_.jsx)("div",{className:N.a.headerRight,children:Object(_.jsxs)("div",{className:N.a.actionName,onClick:function(){return a(t)},children:[Object(_.jsx)("span",{children:n}),"=>"]})})]}),Object(_.jsx)("div",{className:N.a.description,children:Object(_.jsx)("p",{children:t.description})}),Object(_.jsx)(p,{tags:t.tags})]})})]})},F=function(e){var t=e.books,n=e.action,c=e.actionLabel,i=a.a.useRef(),s=Object(v.a)({size:t.length,parentRef:i,estimateSize:a.a.useCallback((function(){return 260}),[])});return Object(_.jsx)("div",{style:{maxHeight:"100%",minHeight:"0px",height:"100%"},children:Object(_.jsx)("div",{ref:i,style:{height:"100%",overflow:"auto"},children:Object(_.jsx)("div",{style:{height:"".concat(s.totalSize,"px"),width:"100%",position:"relative"},children:s.virtualItems.map((function(e){return Object(_.jsx)("div",{ref:e.measureRef,style:{position:"absolute",top:0,left:0,width:"100%",height:"".concat(t[e.index],"px"),transform:"translateY(".concat(e.start,"px)")},children:Object(_.jsx)(T,{book:t[e.index],actionName:c,transfer:n},t[e.index].id)},e.index)}))})})})},C=new u.a("db");C.config.debug=!1;var B=function(e,t){return e.filter((function(e){return e.state===t})).map((function(e){return e.id}))};var L=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(j.a)(i,2),o=s[0],u=s[1],h=Object(c.useState)([]),O=Object(j.a)(h,2),f=O[0],g=O[1],v=Object(r.b)({}),p=Object(j.a)(v,2),k=p[0],N=p[1],T=Object(c.useState)([]),L=Object(j.a)(T,2),y=L[0],P=L[1];Object(c.useEffect)((function(){fetch("./30000-items.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){a(e.items)})),C.collection("books").get().then((function(e){g(e),P(B(e,"read"))}))}),[]),Object(c.useEffect)((function(){0===o.length?N({}):N({tags:o.join("%")})}),[o,N]),Object(c.useEffect)((function(){k.get("tags")&&u(k.get("tags").split("%"))}),[k]);var R=function(e){return u(o.filter((function(t){return t!==e})))},S=Object(c.useCallback)((function(e){return o.filter((function(t){return e.tags.includes(t)})).length===o.length}),[o]),A=Object(c.useMemo)((function(){return f.filter((function(e){return"inProgress"===e.state&&S(e)}))}),[f,S]),w=Object(c.useMemo)((function(){return f.filter((function(e){return"done"===e.state&&S(e)}))}),[S,f]),I=Object(c.useMemo)((function(){var e=[],t=f.reduce((function(e,t){return e[t.id]=t.state,e}),{});return n.forEach((function(n){(!t[n.id]&&S(n)||"read"===t[n.id]&&S(n))&&e.push(n)})),e}),[f,S,n]);return Object(_.jsx)(x.Provider,{value:{toggleFilterTag:function(e){return o.includes(e)?R(e):u([].concat(Object(d.a)(o),[e]))},deleteFilterTag:R,clearFilterTags:function(){return u([])},filterTags:o,booksAlreadyRead:y},children:Object(_.jsx)("div",{className:"App",children:Object(_.jsxs)(b.d,{className:"tabs",selectedTabClassName:"selectedTab",selectedTabPanelClassName:"tabPanel",children:[Object(_.jsxs)(b.b,{className:"tabList",children:[Object(_.jsxs)(b.a,{className:"tab",children:[Object(_.jsxs)("span",{children:["To read (",n.length-B(f,"inProgress").length-B(f,"done").length,")"]})," "]}),Object(_.jsxs)(b.a,{className:"tab",children:[Object(_.jsxs)("span",{children:["In progress (",B(f,"inProgress").length,")"]})," "]}),Object(_.jsxs)(b.a,{className:"tab",children:[Object(_.jsxs)("span",{children:["Done (",B(f,"done").length,")"]})," "]})]}),o.length?Object(_.jsx)(m,{tags:o}):"",Object(_.jsx)(b.c,{children:Object(_.jsx)(F,{books:I,action:function(e){C.collection("books").add(Object(l.a)(Object(l.a)({},e),{},{state:"inProgress"})),C.collection("books").doc({id:e.id,state:"read"}).get().then((function(t){t&&C.collection("books").doc({id:e.id,state:"read"}).delete()})),g([].concat(Object(d.a)(f.filter((function(t){return t.id!==e.id&&"read"!==t.state}))),[Object(l.a)(Object(l.a)({},e),{},{state:"inProgress"})])),P(Object(d.a)(y.filter((function(t){return t!==e.id}))))},actionLabel:"start reading"})}),Object(_.jsx)(b.c,{children:Object(_.jsx)(F,{books:A.reverse(),action:function(e){C.collection("books").doc({id:e.id}).delete(),C.collection("books").add(Object(l.a)(Object(l.a)({},e),{},{state:"done"})),g([].concat(Object(d.a)(f.filter((function(t){return t.id!==e.id}))),[Object(l.a)(Object(l.a)({},e),{},{state:"done"})]))},actionLabel:"finish reading"})}),Object(_.jsx)(b.c,{children:Object(_.jsx)(F,{books:w.reverse(),action:function(e){C.collection("books").doc({id:e.id}).delete(),C.collection("books").doc({id:e.id}).delete(),C.collection("books").add(Object(l.a)(Object(l.a)({},e),{},{state:"read"})),g([].concat(Object(d.a)(f.filter((function(t){return t.id!==e.id}))),[Object(l.a)(Object(l.a)({},e),{},{state:"read"})])),P([].concat(Object(d.a)(y),[e.id]))},actionLabel:"read over"})})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(r.a,{children:Object(_.jsx)(o.c,{children:Object(_.jsx)(o.a,{path:"/*",element:Object(_.jsx)(L,{})})})})}),document.getElementById("root")),y()},8:function(e,t,n){e.exports={tags:"Tags_tags__1bTOD",tag:"Tags_tag__2iD2D",activeFilterTag:"Tags_activeFilterTag__1sUbh"}}},[[40,1,2]]]);
//# sourceMappingURL=main.a55b2612.chunk.js.map