(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(7),l=t.n(r);t(17);var s=function(){return c.a.createElement("nav",{className:"teal accent-3"},c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("a",{href:"!#",className:"brand-logo"},"React Movies"),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement("a",{href:"!#"},"Sass")))))},i=t(1),o=t(2),m=t(4),p=t(3),u=t(5);var h=function(e){var a=e.Title,t=e.Year,n=e.imdbID,r=e.Type,l=e.Poster;return c.a.createElement("div",{id:n,className:"card"},c.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},"N/A"===l?c.a.createElement("img",{className:"activator",src:"https://via.placeholder.com/300x150.png?text=".concat(a)}):c.a.createElement("img",{className:"activator",src:l})),c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},a),c.a.createElement("p",null,t," ",c.a.createElement("span",null,r))))};var d=function(e){var a=e.movies,t=void 0===a?[]:a;return c.a.createElement("div",{className:"movies"},t.length?t.map(function(e){return c.a.createElement(h,Object.assign({key:e.imdbID},e))}):c.a.createElement("h4",null," \u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"))};var v=function(){return c.a.createElement("div",{className:"preloader-wrapper big active preloader"},c.a.createElement("div",{className:"spinner-layer spinner-blue"},c.a.createElement("div",{className:"circle-clipper left"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"gap-patch"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"circle-clipper right"},c.a.createElement("div",{className:"circle"}))))},E=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(c)))).state={search:"",type:"all"},t.handleKey=function(e){"Enter"===e.key&&t.props.searchMovies(t.state.search)},t.onTypeHandler=function(e){t.setState({type:e.target.dataset.type},function(){t.props.searchMovies(t.state.search,t.state.type)})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"search"},c.a.createElement("input",{value:this.state.search,onChange:function(a){e.setState({search:a.target.value})},onKeyDown:this.handleKey,placeholder:"search",type:"search","data-length":"10"}),c.a.createElement("button",{className:"btn search-btn",onClick:function(){e.props.searchMovies(e.state.search,e.state.type)}},"Search")),c.a.createElement("div",{className:"search-type"},c.a.createElement("p",null,c.a.createElement("label",null,c.a.createElement("input",{className:"with-gap",name:"group1",type:"radio","data-type":"all",onChange:this.onTypeHandler,checked:"all"===this.state.type}),c.a.createElement("span",null,"All"))),c.a.createElement("p",null,c.a.createElement("label",null,c.a.createElement("input",{className:"with-gap",name:"group1",type:"radio","data-type":"movie",onChange:this.onTypeHandler,checked:"movie"===this.state.type}),c.a.createElement("span",null,"Movies only"))),c.a.createElement("p",null,c.a.createElement("label",null,c.a.createElement("input",{className:"with-gap",name:"group1",type:"radio","data-type":"series",onChange:this.onTypeHandler,checked:"series"===this.state.type}),c.a.createElement("span",null,"Series only")))))}}]),a}(c.a.Component),g="b2518733",y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(c)))).state={movies:[],loadig:!0},t.searchMovies=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";t.setState({loadig:!0}),fetch("http://www.omdbapi.com/?apikey=".concat(g,"&s=").concat(e).concat("all"!==a?"&type=".concat(a):"")).then(function(e){return e.json()}).then(function(e){return t.setState({movies:e.Search,loading:!1})})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(g),fetch("http://www.omdbapi.com/?apikey=".concat(g,"&s=matrix")).then(function(e){return e.json()}).then(function(a){return e.setState({movies:a.Search,loading:!1})})}},{key:"render",value:function(){var e=this.state,a=e.movies,t=e.loading;return c.a.createElement("main",{className:" container content"},c.a.createElement(E,{searchMovies:this.searchMovies}),t?c.a.createElement(v,null):c.a.createElement(d,{movies:a}))}}]),a}(c.a.Component);var f=function(){return c.a.createElement("footer",{className:"page-footer teal accent-4"},c.a.createElement("div",{className:"footer-copyright"},c.a.createElement("div",{className:"container"},"\xa9 ",(new Date).getFullYear()," Copyright Text",c.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"#!"},"Repo"))))};var N=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement(y,null),c.a.createElement(f,null))};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)))},8:function(e,a,t){e.exports=t(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.9aaf3a0d.chunk.js.map