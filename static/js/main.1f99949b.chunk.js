(this["webpackJsonpsavvy-shopper"]=this["webpackJsonpsavvy-shopper"]||[]).push([[0],[,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(1),o=t.n(r);t(8),t(9);var c=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Hello from App.js"))};t(10);var i=function(){return l.a.createElement("div",{className:"calc"},l.a.createElement("h1",null,"Hello from calc.jsx"))};t(11);!function(){var e=localStorage.getItem("userName");if(null===e)localStorage.setItem("userName",prompt("Enter Your Name:"))}();var u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function m(){var e,a,t=new Date,n=t.getHours(),r=t.toLocaleTimeString(),o=t.getDay(),c=t.getMonth(),i=t.getDate(),m=u[o],f=s[c];return n>11?(a="Good Morning, ",e="greeting morning"):n>=11&&n<17?(a="Good Afternoon, ",e="greeting afternoon"):(a="Good Evening, ",e="greeting night"),l.a.createElement("div",{className:e},l.a.createElement("div",{className:"date-time"},l.a.createElement("h2",null,r),l.a.createElement("h2",null,m+", "+f+" "+i)),l.a.createElement("h1",null,a+localStorage.getItem("userName")+"!"))}var f=m;t(12);var p=function(){return l.a.createElement("div",{className:"nav"},l.a.createElement("i",{onClick:function(e){e.preventDefault(),alert("Recipe Search")},className:"fas fa-utensils fa-2x"}),l.a.createElement("i",{onClick:function(e){e.preventDefault(),alert("Calculator App")},className:"fas fa-calculator fa-2x"}),l.a.createElement("i",{onClick:function(e){e.preventDefault(),alert("Todo List")},className:"fas fa-list fa-2x"}),l.a.createElement("i",{onClick:function(e){e.preventDefault(),alert("Shopping List")},className:"fas fa-shopping-cart fa-2x"}),l.a.createElement("i",{onClick:function(e){e.preventDefault(),alert("Home Page")},className:"fas fa-home fa-4x"}))};t(13);var v=function(){return l.a.createElement("div",{className:"recipe"},l.a.createElement("h1",null,"Hello from recipe.jsx"))};t(14);var E=function(){return l.a.createElement("div",{className:"shopping"},l.a.createElement("h1",null,"Hello from shopping.jsx"))};t(15);var g=function(){return l.a.createElement("div",{className:"todo"},l.a.createElement("h1",null,"Hello from todo.jsx"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null),l.a.createElement(i,null),l.a.createElement(c,null),l.a.createElement(v,null),l.a.createElement(E,null),l.a.createElement(g,null),l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.1f99949b.chunk.js.map