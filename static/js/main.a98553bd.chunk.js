(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,o){t.exports=o(16)},15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(2),s=o.n(r),l=o(3),c=o(4),i=o(8),d=o(5),u=o(9),m=(o(15),fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then(function(t){return t.json()})),f=o(6),g=o(7),h=o.n(g),b=function(t){var e=t.good,o=h()({good:!0},Object(f.a)({},"good--".concat(e.color),!0));return a.a.createElement("li",{className:o},e.name)},p=function(t){var e=t.goods;return a.a.createElement("ul",null,e.map(function(t){return a.a.createElement(b,{key:t.id,good:t})}))},E={all:"all",fiveFirst:"fiveFirst",red:"red"},v=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(i.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={goods:[],show:null},o.loadAllGoods=function(){m.then(function(t){o.setState({goods:t,show:E.all})})},o.loadFiveFirstGoods=function(){m.then(function(t){o.setState({goods:t.sort(function(t,e){return t.name.localeCompare(e.name)}).filter(function(t,e){return e<5}),show:E.fiveFirst})})},o.loadRedGoods=function(){m.then(function(t){o.setState({goods:t.filter(function(t){return"red"===t.color}),show:E.red})})},o}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.state,e=t.goods,o=t.show;return a.a.createElement("div",{className:"App"},a.a.createElement("section",null,o===E.all?a.a.createElement(p,{goods:e}):a.a.createElement("button",{className:"button",type:"button",onClick:this.loadAllGoods},"Load goods")),a.a.createElement("section",null,o===E.fiveFirst?a.a.createElement(p,{goods:e}):a.a.createElement("button",{className:"button",type:"button",onClick:this.loadFiveFirstGoods},"Load 5 first goods")),a.a.createElement("section",null,o===E.red?a.a.createElement(p,{goods:e}):a.a.createElement("button",{className:"button",type:"button",onClick:this.loadRedGoods},"Load red goods")))}}]),e}(a.a.Component);s.a.render(a.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a98553bd.chunk.js.map