(this.webpackJsonppokemon_app=this.webpackJsonppokemon_app||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),o=n(20),i=n.n(o),r=(n(29),n(10)),l=n(11),j=n(13),u=n(12),p=(n(30),n(23)),h=(n(31),n(7));var m=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],s=t[1];return Object(c.jsx)("div",{className:"navbar",children:Object(c.jsxs)("div",{className:"nav-items",children:[Object(c.jsx)(h.b,{to:"/",children:Object(c.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg",alt:"logo"})}),Object(c.jsx)("input",{type:"text",placeholder:"Search",name:"",value:n,onChange:function(e){s(e.target.value),console.log("this is value ".concat(e.target.value)),console.log("this is pokemon ".concat(n))}}),Object(c.jsxs)("ul",{className:"navlinks",children:[Object(c.jsx)(h.b,{to:"/",style:{textDecoration:"none"},children:Object(c.jsx)("li",{children:"home"})}),Object(c.jsx)(h.b,{to:"/type",style:{textDecoration:"none"},children:Object(c.jsx)("li",{children:"type"})}),Object(c.jsx)(h.b,{to:"/stats",style:{textDecoration:"none"},children:Object(c.jsx)("li",{children:"stats"})})]})]})})},b=n(2);var d=function(){return Object(c.jsx)("h1",{children:"Type Page"})};var O=function(){return Object(c.jsx)("h1",{children:"Stats Page"})},x=n(18),v=n.n(x),f=n(22);n(38);var g=function(e){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsx)("img",{className:"pokemon-img",src:e.imageURL,alt:e.name})}),Object(c.jsxs)("div",{className:"card-detail",children:[Object(c.jsx)("div",{className:"pokemon-name",children:Object(c.jsx)("h1",{children:e.name})}),Object(c.jsx)("div",{className:"pokemon-detail",children:Object(c.jsx)("a",{href:e.detail,children:e.detail})})]})]})},k=(n(39),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={pokemons:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({pokemons:n.results}),console.log(this.state.pokemons);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.pokemons.map((function(e){return Object(c.jsx)(g,{name:e.name,imageURL:"https://raw.githubusercontent.com/robert-z/simple-pokemon-json-api/master/public/images/".concat(e.name,".jpg"),detail:e.url},e.name)}));return Object(c.jsx)("div",{className:"pokemon-list",children:e})}}]),n}(s.a.Component)),y=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)(h.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(m,{}),Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{path:"/",exact:!0,component:k}),Object(c.jsx)(b.a,{path:"/type",component:d}),Object(c.jsx)(b.a,{path:"/stats",component:O})]})]})})}}]),n}(s.a.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),N()}},[[40,1,2]]]);
//# sourceMappingURL=main.05c33b9a.chunk.js.map