(this["webpackJsonpsavvy-shopper"]=this["webpackJsonpsavvy-shopper"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),s=(a(21),a(5));a(22);!function(){var e=localStorage.getItem("userName");if(null===e||""===e)localStorage.setItem("userName",prompt("Enter Your Name:"))}();var o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var m=function(){var e,t,a=Object(n.useState)(new Date),c=Object(s.a)(a,2),i=c[0],m=c[1],u=i.getHours(),p=i.toLocaleTimeString(),f=i.getDay(),d=i.getMonth(),h=i.getDate(),v=o[f],g=l[d];return u>=5&&u<11?(t="Good Morning, ",e="greeting morning"):u>=11&&u<17?(t="Good Afternoon, ",e="greeting afternoon"):u>=17&&u<24?(t="Good Evening, ",e="greeting night"):(t="Good Morning, ",e="greeting night"),Object(n.useEffect)((function(){return setInterval((function(){m(new Date)}),1e3),function(){for(var e=0;e<1e4;++e)clearInterval(e)}}),[]),r.a.createElement("div",{className:e},r.a.createElement("div",{className:"date-time"},r.a.createElement("h2",null,p),r.a.createElement("h2",null,v+", "+g+" "+h)),r.a.createElement("h1",null,t+localStorage.getItem("userName")+"!"),r.a.createElement("h5",{className:"recipes"},"Recipes"),r.a.createElement("h5",{className:"shopping"},"Shopping List"),r.a.createElement("h5",{className:"home"},"Home"))},u=(a(23),a(6)),p=a.n(u),f=a(15),d=a(8),h=a(1),v=a(2),g=a(4),E=a(3),b=(a(11),a(25),function(e){Object(g.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).toggleItem=function(){e.props.updateItemFn(e.props.item)},e.deleteItem=function(){e.props.deleteItemFn(e.props.item)},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement("div",{className:"item-container"},r.a.createElement("h5",{onClick:this.toggleItem,className:"shopping-item"+(e.completed?" completed":"")},e.text),r.a.createElement("i",{onClick:this.deleteItem,className:"fas fa-trash-alt"}))}}]),a}(n.Component)),I=function(e){Object(g.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).updateItem=function(t){e.props.updateItemFn(t)},e.deleteItem=function(t){delete e.props.items[1]},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this,t=this.props.items;return r.a.createElement("div",{className:"list-container"},t.map((function(t,a){return r.a.createElement(b,{deleteItemFn:e.deleteItem,updateItemFn:e.updateItem,key:a,item:t})})))}}]),a}(n.Component),N=function(e){Object(g.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).updadeInput=function(t){e.setState({item:t.target.value})},e.submitItem=function(t){t.preventDefault(),e.props.addItemFn(e.state.item),document.getElementById("addItemInput").value=""},e.state={item:""},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"search-form",onSubmit:function(t){return e.submitItem(t)}},r.a.createElement("input",{className:"search-bar",id:"addItemInput",onChange:function(t){return e.updadeInput(t)},type:"text",placeholder:"Add Items"}),r.a.createElement("button",{className:"search-btn",type:"submit"},r.a.createElement("i",{className:"fas fa-plus"}))))}}]),a}(n.Component),O=function(e){Object(g.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).componentDidMount=function(){var t=localStorage.getItem("items");if(t){var a=JSON.parse(t);e.setState({items:a})}},e.addItem=function(){var t=Object(d.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==document.getElementById("addItemInput").value.trim()){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.setState({items:[].concat(Object(f.a)(e.state.items),[{text:a,key:Date.now(),completed:!1}])});case 6:localStorage.setItem("items",JSON.stringify(e.state.items));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateItem=function(){var t=Object(d.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.items.map((function(e){return a===e?{text:a.text,key:a.key,completed:!a.completed}:e})),t.next=3,e.setState({items:n});case 3:localStorage.setItem("items",JSON.stringify(e.state.items));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.clearItems=function(t){var a=e.state.items;a.splice(t),e.setState({items:a}),localStorage.removeItem("items")},e.state={items:[]},e}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"shopping-app"},r.a.createElement("h1",null,"Shopping List"),r.a.createElement(N,{addItemFn:this.addItem}),r.a.createElement("p",null,"For meal ideas, check out our ",r.a.createElement("i",{className:"fas fa-utensils"})," page!"),r.a.createElement(I,{updateItemFn:this.updateItem,items:this.state.items}),r.a.createElement("button",{onClick:this.clearItems,className:"clear-btn"},"Clear"),r.a.createElement("footer",null))}}]),a}(n.Component),S=(a(12),function(e){var t=e.title,a=e.calories,n=e.image,c=e.ingredients;return r.a.createElement("div",{className:"cards"},r.a.createElement("h2",null,t),r.a.createElement("p",null,Math.round(a)," Calories"),r.a.createElement("img",{className:"food-pics",src:n,alt:t}),r.a.createElement("ul",null,c.map((function(e,t){return r.a.createElement("li",{key:t},e.text)}))))});a(26).config();var j=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),l=o[0],m=o[1],u=Object(n.useState)("Julia"),f=Object(s.a)(u,2),h=f[0],v=f[1];Object(n.useEffect)((function(){g()}),[h]);var g=function(){var e=Object(d.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("d843d4c8","&app_key=").concat("2e30a51ebccb2f3115c10140b3e38ea0","&to=20"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Recipe"},r.a.createElement("h1",null,"Recipe Search"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(l),m("")},className:"search-form"},r.a.createElement("input",{className:"search-bar",type:"text",value:l,onChange:function(e){m(e.target.value)},placeholder:"Search"}),r.a.createElement("button",{className:"search-btn",type:"submit"},r.a.createElement("i",{className:"fas fa-search"}))),r.a.createElement("p",null,"Please limit searches to no more than 5 per minute."),r.a.createElement("div",{className:"search-results"},a.map((function(e){return r.a.createElement(S,{key:e.recipe.image,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))),r.a.createElement("footer",null))};var y=function(){var e=r.a.useState("Greeting"),t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",null,"Recipe"===a?r.a.createElement(j,null):"Shopping"===a?r.a.createElement(O,null):r.a.createElement(m,null),r.a.createElement("div",{className:"nav"},r.a.createElement("i",{onClick:function(){return n("Recipe")},className:"fas fa-utensils fa-2x"}),r.a.createElement("i",{onClick:function(){return n("Shopping")},className:"fas fa-shopping-cart fa-2x"}),r.a.createElement("i",{onClick:function(){return n("Greeting")},className:"fas fa-home fa-4x"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.a0113e8e.chunk.js.map