(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{7705:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var s=n(1451),r=n(4942),a=n(5671),l=n(3144),o=n(7326),i=n(2531),c=n(245),h=n(1120),u=n(7294),m=n(6359);var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1)+e)},f=n(347),b=n.n(f),p=n(1042),g=n.n(p),j=n(3931),x=n.n(j);function v(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=e.filter((function(){return Math.random()>.5}));n.length<t&&e.length>n.length;){var s=e.filter((function(e){return!n.includes(e)})),r=s[d(0,s.length-1)];n.push(r)}return n}var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["red","green","blue"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["square","triangle"],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=n.allowNots,r=void 0===s||s,a=n.minColors,l=void 0===a?1:a,o=n.minShapes,i=void 0===o?1:o,c=n.notColors,h=void 0!==c&&c,u=n.notShapes,m=void 0!==u&&u,d=v(e,l),f=v(t,i);!0===m&&f.length>=t.length&&(f=f.slice(0,t.length-1)),!0===r&&f.length<t.length-1&&!1!==m&&(!0===m||Math.random()>.5)&&(f=t.filter((function(e){return!f.includes(e)})),m=!0),!0===h&&d.length>=e.length&&(d=d.slice(0,t.length-1)),!0===r&&d.length<e.length-1&&!1!==h&&(!0===h||Math.random()>.5)&&(d=e.filter((function(e){return!d.includes(e)})),h=!0);var b=(h?"not (":"")+d.map((function(e){return x().name(e)[1]})).join(" or ")+(h?")":""),p=(m?"not (":"")+f.join(" or ")+(m?")":"");return{allowedColors:d,allowedShapes:f,notShapes:m,notColors:h,colorsDescription:b,shapesDescription:p,sourceCode:"function validate(chosenColor, chosenShape, rules) { // Returns true or false depending on whether the button the user picked was correct\n  const colorInRules = ".concat(d.map((function(e){return'chosenColor === "'.concat(e,'"')})).join(" || "),"\n  ").concat(h?"if (colorInRules) {\n  return false // That color was one of the banned colors":"if (not(colorInRules)) {\n  return false // That color wasn't one of the allowed colors"," else {\n    \n  }\n  return true // Nothing was wrong with it so we say it's valid :)"),validate:function(e,t){var n=d.includes(e);if(h==n)return!1;var s=f.includes(t);return m!=s&&(console.log(e,t,n,s,h,m),!0)}}},w=n(5893);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,h.Z)(e);if(t){var r=(0,h.Z)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return(0,c.Z)(this,n)}}var S={_:{size:{_:Number,min:1,max:20,finite:!0,integer:!0},width:{_:Number,min:1,max:20,finite:!0,integer:!0},height:{_:Number,min:1,max:20,finite:!0,integer:!0},colors:[{_:String,trimmed:!0}],shapes:[{_:String,trimmed:!0}],rules:Object,title:String,rulesOptions:Object},allOptional:!0},B=["#ffccfb","#00ff00","#0080b3"],C=["\u25a2","\u29cd","\u25cb"];function k(e){var t=e.cell,n=e.width,s=e.height,r=e.x,a=e.y,l=e.activateCell,o=e.index,i=t.color,c=t.shape,h=t.active,u=t.failed,m=0===r?"left":r>=n-1?"right":"middle",d=0===a?"top":a>=s-1?"bottom":"middle";return(0,w.jsx)("span",{className:b().cell+(!0===u?" failed":""),vertical:d,horizontal:m,style:{backgroundColor:i,width:100/n+"%",height:100/s+"%"},onClick:function(){l(t,o)},disabled:!0!==h,children:(0,w.jsx)("span",{className:b().inner,children:c})})}var R=function(e){(0,i.Z)(n,e);var t=O(n);function n(e){var s;return(0,a.Z)(this,n),s=t.call(this,e),(0,m.Nw)(e,S),g()((0,o.Z)(s)),s.state=y(y({},s.generateGameState(s.props)),{},{gameState:"ongoing"}),s}return(0,l.Z)(n,[{key:"generateGameState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.colors||B,n=e.shapes||C;if(e.hasOwnProperty("size")&&(e.hasOwnProperty("width")||e.hasOwnProperty("height")))throw new Error("Must supply either size or w/h dimensions not both");for(var s=e.size||e.width||3,r=e.height||e.width||e.size||3,a=e.rules||N(t,n,this.props.rulesOptions),l=[];this.getRemainingCells(l,a).length<1;)for(var o=0,i=s*r;o<i;o++)l[o]={color:t[d(0,t.length-1)],shape:n[d(0,n.length-1)],active:!0};return{width:s,height:r,board:l,colors:t,shapes:n,rules:a}}},{key:"canActivate",value:function(e,t){t=t||this.state.rules;var n=e.color,s=e.shape;return t.validate(n,s)}},{key:"reset",value:function(){this.setState(y(y({},this.generateGameState(this.props)),{},{gameState:"ongoing"}))}},{key:"lose",value:function(){this.setState({gameState:"lost"})}},{key:"getRemainingCells",value:function(e,t){var n=this;return(e||this.state.board).filter((function(e){return n.canActivate(e,t)})).filter((function(e){return!0===e.active}))}},{key:"activateCell",value:function(e,t){if("ongoing"===this.state.gameState&&!0===e.active){var n=!0!==this.canActivate(e),r=(0,s.Z)(this.state.board),a=y({},e);a.active=!1,n&&(a.failed=!0),r[t]=a,this.setState({board:r}),n?this.lose():this.getRemainingCells().length<2&&this.win()}}},{key:"win",value:function(){this.setState({gameState:"won"})}},{key:"render",value:function(){console.log(this.state.rules);var e=this.state.rules.colorsDescription.startsWith("not"),t=this.state.rules.shapesDescription.startsWith("not");return(0,w.jsxs)("div",{className:b()["boolean-game"],children:[(0,w.jsxs)("h2",{className:b().title,children:["Matching Rules",this.props.hasOwnProperty("title")?" - "+this.props.title.trim():null]}),(0,w.jsx)("noscript",{children:(0,w.jsx)("span",{className:b().jserror,children:"JavaScript is required to play this game."})}),(0,w.jsxs)("div",{className:b().rules,children:[(0,w.jsx)("h2",{children:"Color Palette"}),(0,w.jsx)("ul",{className:b()["color-list"],children:this.state.colors.map((function(e,t){return(0,w.jsx)("li",{children:(0,w.jsx)("span",{className:b().color,style:{backgroundColor:e},children:x().name(e)[1]})},t)}))}),(0,w.jsx)("h2",{children:"Rules"}),(e?"":"(")+this.state.rules.colorsDescription+(e?"":")")+" and "+(t?"":"(")+this.state.rules.shapesDescription+(t?"":")"),null]}),"ongoing"===this.state.gameState?null:"won"===this.state.gameState?(0,w.jsx)("span",{className:[b().result,b().won].join(" "),ref:function(e){document.body.contains(e)&&e.scrollIntoView()},children:"You Won!"}):"lost"===this.state.gameState?(0,w.jsx)("span",{className:[b().result,b().lost].join(" "),ref:function(e){document.body.contains(e)&&e.scrollIntoView()},children:"You lost \u3020_\u3020"}):"UNEXPECTED STATE: "+this.state.gameState,"ongoing"!==this.state.gameState?(0,w.jsx)("button",{className:b().replay,onClick:this.reset,children:"Replay"}):null,this.renderBoard()]})}},{key:"renderBoard",value:function(){var e=this,t=this.state,n=t.width,s=t.height;return(0,w.jsx)("div",{className:b().board,children:this.state.board.map((function(t,r){var a=Math.floor(r/n),l=r%n;return(0,w.jsx)(k,{width:n,height:s,x:l,y:a,activateCell:e.activateCell,index:r,cell:t},r)}))})}}]),n}(u.Component)},7189:function(e,t,n){"use strict";var s=n(7705),r=n(5893);t.Z=function(){return(0,r.jsx)(s.Z,{title:"Level 1",size:3,rulesOptions:{allowNots:!1,minColors:2,minShapes:2}})}},9150:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var s=n(7189),r=n(1664),a=n(2962),l=n(16),o=n.n(l),i=n(5893),c=function(){return(0,i.jsxs)("table",{className:o()["boolean-ops"],children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:"table-member"}),(0,i.jsx)("th",{className:"table-member",children:"A"}),(0,i.jsx)("th",{className:"table-member",children:"B"}),(0,i.jsx)("th",{className:"table-member",children:"A & B (AND)"}),(0,i.jsx)("th",{className:"table-member",children:"A || B (OR)"}),(0,i.jsx)("th",{className:"table-member",children:"NOT A"}),(0,i.jsx)("th",{className:"table-member",children:"NOT B"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"table-member",children:"#1"}),(0,i.jsx)("td",{className:"table-member",children:"true"}),(0,i.jsx)("td",{className:"table-member",children:"true"}),(0,i.jsx)("td",{className:"table-member",children:"true"}),(0,i.jsx)("td",{className:"table-member",children:"true"}),(0,i.jsx)("td",{className:"table-member",children:"false"}),(0,i.jsx)("td",{className:"table-member",children:"false"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"table-member",children:"#2"}),(0,i.jsx)("td",{className:"table-member",children:"false"}),(0,i.jsx)("td",{className:"table-member",children:"false"}),(0,i.jsx)("td",{className:"table-member",children:"false"}),(0,i.jsx)("td",{className:"table-member",children:"false"}),(0,i.jsx)("td",{className:"table-member",children:"true"}),(0,i.jsx)("td",{className:"table-member",children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"table-member",children:"#3"}),(0,i.jsx)("td",{className:"table-member",children:"true"}),(0,i.jsx)("td",{className:"table-member",children:"false"}),(0,i.jsx)("td",{className:"table-member",children:"false"}),(0,i.jsx)("td",{className:"table-member",children:"true"}),(0,i.jsx)("td",{className:"table-member",children:"false"}),(0,i.jsx)("td",{className:"table-member",children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"table-member",children:"#4"}),(0,i.jsx)("td",{className:"table-member",children:"false"}),(0,i.jsx)("td",{className:"table-member",children:"true"}),(0,i.jsx)("td",{className:"table-member",children:"false"}),(0,i.jsx)("td",{className:"table-member",children:"true"}),(0,i.jsx)("td",{className:"table-member",children:"true"}),(0,i.jsx)("td",{className:"table-member",children:"false"})]})]})]})},h=function(){return(0,i.jsxs)("div",{className:"level-1",children:[(0,i.jsx)(a.PB,{title:'\ud83d\udcac "Or" Expressions'}),(0,i.jsx)("h2",{children:'#2.1 \ud83d\udcac Basic "Or" Expressions'}),(0,i.jsx)("br",{}),(0,i.jsxs)("span",{className:"intro-card",children:[(0,i.jsx)(c,{}),"Here you can see a chart of the basic boolean operations (& means AND, || means OR)"]}),(0,i.jsxs)("p",{children:["In this section we will be playing the Matching Rules game in order to learn about boolean logic. Boolean logic is the fundamental language that both electronic circuitry, and computers themselves are made out of, and it happens to be a great tool for introducing the reasoning behind the way we communicate with computers.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Boolean logic contains a set of expressions (kind of like coding language) that allow us to perform basic operations on information. True or false statements (boolean values) are the main type of data handled with boolean logic. We can represent all kinds of other information by combining many true or false statements together, however that is out of the scope of this section."]}),(0,i.jsx)("br",{}),(0,i.jsx)("h2",{children:'The "Or" Operator'}),(0,i.jsx)("p",{children:"Or is a logical operator that means that any of values we input to it may be true. The Or expression will only output false when none of it's inputs are true. In the first level of the Matching Game we will experiment with the Or operator. Choose each of the tiles whose colors and shapes are allowed to win."}),(0,i.jsx)(s.Z,{}),(0,i.jsx)("p",{children:"Once you've played the first level of the Matching Game a few times and are confident you understand OR continue on to the next section to learn about NOT expressions \ud83d\ude0a"}),(0,i.jsx)(r.default,{href:"/toying/level-two",children:(0,i.jsx)("a",{className:"next",children:'Next: #2.2 \ud83d\udeab Whats "Not" Allowed'})})]})}},2592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toying/level-one",function(){return n(9150)}])},347:function(e){e.exports={"boolean-game":"BooleanGame_boolean-game__C6gJ2","color-list":"BooleanGame_color-list__gDeZD",color:"BooleanGame_color__24hwG",rules:"BooleanGame_rules__3_3sy",jserror:"BooleanGame_jserror__27K5g",result:"BooleanGame_result__3TfNV",won:"BooleanGame_won__3JVOV",lost:"BooleanGame_lost__2RITR",replay:"BooleanGame_replay__2QBF6",board:"BooleanGame_board__2TPJN",cell:"BooleanGame_cell__2j0R-",failed:"BooleanGame_failed__1Fh83",inner:"BooleanGame_inner__z-olS"}},16:function(e){e.exports={"boolean-ops":"BooleanOps_boolean-ops__37KUF","table-member":"BooleanOps_table-member__33v8O"}}},function(e){e.O(0,[981,774,888,179],(function(){return t=2592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);