(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(28)},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(9),o=n.n(i),c=n(4),l=(n(27),n(1)),u=n(2),s=n(6),p=n(3),b=n(5),f=n(11),h={board:[],rows:6,cols:7,player:1,winner:0,cellsToWin:4},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":var n=function(e,t){for(var n=[],r=0;r<e;r++){var a=Array(t).fill(0);n.push(a)}return n}(t.rows,t.cols);return Object.assign({},e,{board:n,rows:t.rows,cols:t.cols,cellsToWin:t.cellsToWin,player:1,winner:0});case"MOVE":return Object.assign({},e,{player:t.player,board:t.board});case"ENDGAME":return Object.assign({},e,{winner:t.winner});default:return e}};var d=Object(f.b)(m),v=function(){return{type:"INIT",rows:6,cols:7,cellsToWin:4}},y=function(e){var t={type:"MOVE"};return t.board=O(e.board,e.player,e.rows,e.col),t.player=1===e.player?2:1,t},O=function(e,t,n,r){for(var a=n-1;e.length===n&&a>=0;a--)if(!e[a][r]){e[a][r]=t;break}return e},j=function(e){var t=w(e.board,e.cellsToWin);return t?{type:"ENDGAME",winner:t}:{type:"DONOTHING"}},w=function(e,t){var n=function(n){for(var r=e.length,a=e[0].length,i=Math.max(r,a),o=[],c=0;c<=2*(i-1);++c){for(var l=[],u=r-1;u>=0;--u){var s=c-(n?r-u:u);s>=0&&s<a&&l.push(e[u][s])}l.length>=t&&o.push(l)}return o},r=function(e){var n=0,r=Array(t).fill("1").join(""),a=Array(t).fill("2").join("");return e.some(function(e){var t=e.join("");return t.match(r)?(n=1,!0):!!t.match(a)&&(n=2,!0)}),n};return r(e)||function(){var t=e.map(function(t,n){return e.map(function(e){return e[n]})});return r(t)}()||r(n())||r(n(!0))},E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).handleClick=function(e){n.props.winner||n.props.move(e)},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("td",{className:1===this.props.player?"board-td p1-td":"board-td p2-td"},a.a.createElement("div",{className:1===this.props.value?"player1":2===this.props.value?"player2":"init",onClick:this.handleClick.bind(this,{rows:this.props.rows,col:this.props.col,player:this.props.player,board:this.props.board,cellsToWin:this.props.cellsToWin})}))}}]),t}(r.Component);var k=Object(c.b)(function(e){return e},function(e){return{move:function(t){e(y(t)),e(j(t))}}})(E),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("tr",null,this.props.row.map(function(e,t){return a.a.createElement(k,{key:t,value:e,col:t})}))}}]),t}(r.Component),N=Object(c.b)(function(e){return e})(g),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"initializeBoard",value:function(){this.props.init()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("table",{className:"board"},a.a.createElement("tbody",null,this.props.board.map(function(e,t){return a.a.createElement(N,{key:t,row:e,rowCount:t})}))))}}]),t}(r.Component);var T=Object(c.b)(function(e){return e},function(e){return{init:function(){e(v())}}})(C),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"initializeBoard",value:function(){this.props.init()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("button",{className:"btn",onClick:this.initializeBoard.bind(this)},"New Game"),this.props.board.length>0?a.a.createElement("div",null,this.props.winner?a.a.createElement("h2",null,"Game Over! Player ",this.props.winner," wins!"):a.a.createElement("h2",null,"Player ",this.props.player),a.a.createElement(T,null)):null)}}]),t}(r.Component);var W=Object(c.b)(function(e){return e},function(e){return{init:function(){e(v())}}})(A),I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement("h1",{className:"title"},"Connect 4"),a.a.createElement("p",null,"A classic game created using ReactJS",a.a.createElement("br",null),"First player to connect 4 wins")),a.a.createElement(W,null))}}]),t}(r.Component);o.a.render(a.a.createElement(c.a,{store:d},a.a.createElement(I,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2c11828f.chunk.js.map