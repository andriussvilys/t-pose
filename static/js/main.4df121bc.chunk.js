(this["webpackJsonpt-pose"]=this["webpackJsonpt-pose"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(8),r=t.n(l),o=t(3),s=t(5),i=t(6),u=t(2),m=function(e){return c.a.createElement("div",{id:e.id,className:"ImageBox-wrapper ".concat(e.selected?"clicked":""),onClick:e.onClick},c.a.createElement("img",{"data-value":e.value,src:e.src,alt:e.alt||""}))},p=function(){var e=c.a.useState(15),a=(Object(u.a)(e,1)[0],c.a.useState(15)),t=Object(u.a)(a,2),l=t[0],r=t[1],p=c.a.useState([]),E=Object(u.a)(p,2),d=E[0],f=E[1],v=c.a.useState(null),g=Object(u.a)(v,2),_=g[0],k=g[1],b=function(e,a){console.log("_______ID_________"),console.log(e),console.log("SELECTED"),console.log(d);var t=_[e].price;if(d.indexOf(e)>=0)return f(d.filter((function(a){return a!==e}))),void r(l+t);l-t<0?alert("youre out of dollars"):(r(l-t),f([].concat(Object(i.a)(d),[e])))};return c.a.useEffect((function(){})),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"app-wrapper"},c.a.createElement("h3",{className:"title"},"You have 15$ to choose what you want for your physical form"),c.a.createElement("main",null,c.a.createElement("section",{className:"PickImg-wrapper"},c.a.createElement("div",{className:"cost"},c.a.createElement("div",null,c.a.createElement("span",null,"$5")),c.a.createElement("div",null,c.a.createElement("span",null,"$4")),c.a.createElement("div",null,c.a.createElement("span",null,"$3")),c.a.createElement("div",null,c.a.createElement("span",null,"$2")),c.a.createElement("div",null,c.a.createElement("span",null,"$1"))),c.a.createElement("div",{className:"images"},function(){for(var e=0,a=[],t=0,n=5,l={},r=function(){var r="picker-".concat(e);a=[].concat(Object(i.a)(a),[c.a.createElement(m,{key:"imageBox-".concat(e),id:r,selected:d.indexOf(r)>=0,src:"img/t-posen".concat(e,".jpg"),onClick:function(e){b(r)}})]),l=Object(s.a)(Object(s.a)({},l),{},Object(o.a)({},"picker-".concat(e),{price:n,selected:!1,src:"img/t-posen".concat(e,".jpg")})),5===(t+=1)&&(t=0,n-=1)};e<25;e++)r();return _||k(l),a}().map((function(e){return e})))),c.a.createElement("section",{className:"selected-wrapper"},c.a.createElement("div",{className:"dollar-left"},"You have ",c.a.createElement("span",null,l," $")," left"),c.a.createElement("div",{className:"preview-wrapper"},d.length>0?d.map((function(e){return c.a.createElement(m,{key:"imageBox-selected-".concat(e),src:_[e].src,onClick:function(){b(e)}})})):null)))))};t(14);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.4df121bc.chunk.js.map