(this["webpackJsonpsavvy-shopper"]=this["webpackJsonpsavvy-shopper"]||[]).push([[0],[,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=(a(13),a(1));a(14);!function(){var e=localStorage.getItem("userName");if(null===e)localStorage.setItem("userName",prompt("Enter Your Name:"))}();var i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var u=function(){var e,t,a=Object(n.useState)(new Date),c=Object(o.a)(a,2),l=c[0],u=c[1],m=l.getHours(),f=l.toLocaleTimeString(),p=l.getDay(),h=l.getMonth(),E=l.getDate(),g=i[p],v=s[h];return m>=5&&m<11?(t="Good Morning, ",e="greeting morning"):m>=11&&m<17?(t="Good Afternoon, ",e="greeting afternoon"):m>=17&&m<24?(t="Good Evening, ",e="greeting night"):(t="Good Morning, ",e="greeting night"),Object(n.useEffect)((function(){setInterval((function(){return u(new Date)}),1e3)})),r.a.createElement("div",{className:e},r.a.createElement("div",{className:"date-time"},r.a.createElement("h2",null,f),r.a.createElement("h2",null,g+", "+v+" "+E)),r.a.createElement("h1",null,t+localStorage.getItem("userName")+"!"))};a(15),a(16);var m=function(){return r.a.createElement("div",{className:"calc"},r.a.createElement("h1",null,"Hello from calc.jsx"))};a(17);var f=function(){return r.a.createElement("div",{className:"shopping"},r.a.createElement("h1",null,"Hello from shopping.jsx"))},p=a(2),h=a.n(p),E=a(7),g=(a(4),function(e){var t=e.title,a=e.calories,n=e.image,c=e.ingredients;return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",null,t),r.a.createElement("p",null,Math.round(a)," Calories"),r.a.createElement("img",{className:"food-pics",src:n,alt:t}),r.a.createElement("ul",null,c.map((function(e,t){return r.a.createElement("li",{key:t},e.text)}))))});a(19).config();var v=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)("chicken"),f=Object(o.a)(m,2),p=f[0],v=f[1];Object(n.useEffect)((function(){d()}),[p]);var d=function(){var e=Object(E.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(p,"&app_id=").concat("d843d4c8","&app_key=").concat("2e30a51ebccb2f3115c10140b3e38ea0","&to=20"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Recipe"},r.a.createElement("h1",null,"Recipe Search"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(s),u("")},className:"search-form"},r.a.createElement("input",{className:"search-bar",type:"text",value:s,onChange:function(e){u(e.target.value)},placeholder:"Search"}),r.a.createElement("button",{className:"search-btn",type:"submit"},r.a.createElement("i",{className:"fas fa-search"}))),r.a.createElement("p",null,"Please limit searches to no more than 5 per minute."),r.a.createElement("div",{className:"search-results"},a.map((function(e){return r.a.createElement(g,{key:e.recipe.image,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))),r.a.createElement("footer",null))};a(22);var d=function(){return r.a.createElement("div",{className:"todo"},r.a.createElement("h1",null,"Hello from todo.jsx"))};var b=function(){var e=r.a.useState(r.a.createElement(u,null)),t=Object(o.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",null,a,r.a.createElement("div",{className:"nav"},r.a.createElement("i",{onClick:function(){return n(r.a.createElement(v,null))},className:"fas fa-utensils fa-2x"}),r.a.createElement("i",{onClick:function(){return n(r.a.createElement(m,null))},className:"fas fa-calculator fa-2x"}),r.a.createElement("i",{onClick:function(){return n(r.a.createElement(d,null))},className:"fas fa-list fa-2x"}),r.a.createElement("i",{onClick:function(){return n(r.a.createElement(f,null))},className:"fas fa-shopping-cart fa-2x"}),r.a.createElement("i",{onClick:function(){return n(r.a.createElement(u,null))},className:"fas fa-home fa-4x"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.a9d52b7f.chunk.js.map