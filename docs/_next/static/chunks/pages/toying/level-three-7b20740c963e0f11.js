(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[993],{7705:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(1451),o=n(4942),a=n(5671),i=n(3144),s=n(7326),l=n(2531),c=n(245),u=n(1120),h=n(7294),d=n(6359);var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1)+e)},p=n(347),g=n.n(p),m=n(1042),v=n.n(m),y=n(3931),b=n.n(y);function w(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=e.filter((function(){return Math.random()>.5}));n.length<t&&e.length>n.length;){var r=e.filter((function(e){return!n.includes(e)})),o=r[f(0,r.length-1)];n.push(o)}return n}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["red","green","blue"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["square","triangle"],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.allowNots,o=void 0===r||r,a=n.minColors,i=void 0===a?1:a,s=n.minShapes,l=void 0===s?1:s,c=n.notColors,u=void 0!==c&&c,h=n.notShapes,d=void 0!==h&&h,f=w(e,i),p=w(t,l);!0===d&&p.length>=t.length&&(p=p.slice(0,t.length-1)),!0===o&&p.length<t.length-1&&!1!==d&&(!0===d||Math.random()>.5)&&(p=t.filter((function(e){return!p.includes(e)})),d=!0),!0===u&&f.length>=e.length&&(f=f.slice(0,t.length-1)),!0===o&&f.length<e.length-1&&!1!==u&&(!0===u||Math.random()>.5)&&(f=e.filter((function(e){return!f.includes(e)})),u=!0);var g=(u?"not (":"")+f.map((function(e){return b().name(e)[1]})).join(" or ")+(u?")":""),m=(d?"not (":"")+p.join(" or ")+(d?")":"");return{allowedColors:f,allowedShapes:p,notShapes:d,notColors:u,colorsDescription:g,shapesDescription:m,sourceCode:"function validate(chosenColor, chosenShape, rules) { // Returns true or false depending on whether the button the user picked was correct\n  const colorInRules = ".concat(f.map((function(e){return'chosenColor === "'.concat(e,'"')})).join(" || "),"\n  ").concat(u?"if (colorInRules) {\n  return false // That color was one of the banned colors":"if (not(colorInRules)) {\n  return false // That color wasn't one of the allowed colors"," else {\n    \n  }\n  return true // Nothing was wrong with it so we say it's valid :)"),validate:function(e,t){var n=f.includes(e);if(u==n)return!1;var r=p.includes(t);return d!=r&&(console.log(e,t,n,r,u,d),!0)}}},x=n(5893);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var k={_:{size:{_:Number,min:1,max:20,finite:!0,integer:!0},width:{_:Number,min:1,max:20,finite:!0,integer:!0},height:{_:Number,min:1,max:20,finite:!0,integer:!0},colors:[{_:String,trimmed:!0}],shapes:[{_:String,trimmed:!0}],rules:Object,title:String,rulesOptions:Object},allOptional:!0},N=["#ffccfb","#00ff00","#0080b3"],P=["\u25a2","\u29cd","\u25cb"];function C(e){var t=e.cell,n=e.width,r=e.height,o=e.x,a=e.y,i=e.activateCell,s=e.index,l=t.color,c=t.shape,u=t.active,h=t.failed,d=0===o?"left":o>=n-1?"right":"middle",f=0===a?"top":a>=r-1?"bottom":"middle";return(0,x.jsx)("span",{className:g().cell+(!0===h?" failed":""),vertical:f,horizontal:d,style:{backgroundColor:l,width:100/n+"%",height:100/r+"%"},onClick:function(){i(t,s)},disabled:!0!==u,children:(0,x.jsx)("span",{className:g().inner,children:c})})}var E=function(e){(0,l.Z)(n,e);var t=S(n);function n(e){var r;return(0,a.Z)(this,n),r=t.call(this,e),(0,d.Nw)(e,k),v()((0,s.Z)(r)),r.state=O(O({},r.generateGameState(r.props)),{},{gameState:"ongoing"}),r}return(0,i.Z)(n,[{key:"generateGameState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.colors||N,n=e.shapes||P;if(e.hasOwnProperty("size")&&(e.hasOwnProperty("width")||e.hasOwnProperty("height")))throw new Error("Must supply either size or w/h dimensions not both");for(var r=e.size||e.width||3,o=e.height||e.width||e.size||3,a=e.rules||j(t,n,this.props.rulesOptions),i=[];this.getRemainingCells(i,a).length<1;)for(var s=0,l=r*o;s<l;s++)i[s]={color:t[f(0,t.length-1)],shape:n[f(0,n.length-1)],active:!0};return{width:r,height:o,board:i,colors:t,shapes:n,rules:a}}},{key:"canActivate",value:function(e,t){t=t||this.state.rules;var n=e.color,r=e.shape;return t.validate(n,r)}},{key:"reset",value:function(){this.setState(O(O({},this.generateGameState(this.props)),{},{gameState:"ongoing"}))}},{key:"lose",value:function(){this.setState({gameState:"lost"})}},{key:"getRemainingCells",value:function(e,t){var n=this;return(e||this.state.board).filter((function(e){return n.canActivate(e,t)})).filter((function(e){return!0===e.active}))}},{key:"activateCell",value:function(e,t){if("ongoing"===this.state.gameState&&!0===e.active){var n=!0!==this.canActivate(e),o=(0,r.Z)(this.state.board),a=O({},e);a.active=!1,n&&(a.failed=!0),o[t]=a,this.setState({board:o}),n?this.lose():this.getRemainingCells().length<2&&this.win()}}},{key:"win",value:function(){this.setState({gameState:"won"})}},{key:"render",value:function(){var e=this.state.rules.colorsDescription.startsWith("not"),t=this.state.rules.shapesDescription.startsWith("not");return(0,x.jsxs)("div",{className:g()["boolean-game"],children:[(0,x.jsxs)("h2",{className:g().title,children:["Matching Rules",this.props.hasOwnProperty("title")?" - "+this.props.title.trim():null]}),(0,x.jsx)("noscript",{children:(0,x.jsx)("span",{className:g().jserror,children:"JavaScript is required to play this game."})}),(0,x.jsxs)("div",{className:g().rules,children:[(0,x.jsx)("h2",{children:"Color Palette"}),(0,x.jsx)("ul",{className:g()["color-list"],children:this.state.colors.map((function(e,t){return(0,x.jsx)("li",{children:(0,x.jsx)("span",{className:g().color,style:{backgroundColor:e},children:b().name(e)[1]})},t)}))}),(0,x.jsx)("h2",{children:"Rules"}),(e?"":"(")+this.state.rules.colorsDescription+(e?"":")")+" and "+(t?"":"(")+this.state.rules.shapesDescription+(t?"":")"),null]}),"ongoing"===this.state.gameState?null:"won"===this.state.gameState?(0,x.jsx)("span",{className:[g().result,g().won].join(" "),ref:function(e){document.body.contains(e)&&e.scrollIntoView()},children:"You Won!"}):"lost"===this.state.gameState?(0,x.jsx)("span",{className:[g().result,g().lost].join(" "),ref:function(e){document.body.contains(e)&&e.scrollIntoView()},children:"You lost \u3020_\u3020"}):"UNEXPECTED STATE: "+this.state.gameState,"ongoing"!==this.state.gameState?(0,x.jsx)("button",{className:g().replay,onClick:this.reset,children:"Replay"}):null,this.renderBoard()]})}},{key:"renderBoard",value:function(){var e=this,t=this.state,n=t.width,r=t.height;return(0,x.jsx)("div",{className:g().board,children:this.state.board.map((function(t,o){var a=Math.floor(o/n),i=o%n;return(0,x.jsx)(C,{width:n,height:r,x:i,y:a,activateCell:e.activateCell,index:o,cell:t},o)}))})}}]),n}(h.Component)},9734:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(4942);var o=n(181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){s=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n(6109),s=n.n(i),l=n(7294),c=n(5893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var t=(0,l.useState)(!1),n=t[0],r=t[1],o=e.url,i=e.query,u=void 0===i?{}:i;if(e.hasOwnProperty("query")&&("object"!=typeof u||null===u||Object.keys(u).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof o)return console.warn(new Error("Expected a video url")),null;if(u.autoplay=1,!d.test(o))throw new Error("This url is invalid");var f="https://www.youtube.com/embed/"+o+"?"+Object.entries(u).map((function(e){var t=a(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r))})).join("&"),p=h({},e);return delete p.url,delete p.children,(0,c.jsxs)("div",h(h({},p),{},{className:s()["youtube-container"]+" youtube-container",children:[n?null:(0,c.jsxs)(l.Fragment,{children:[(0,c.jsx)("img",{onClick:function(){return r(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(o,"/hqdefault.jpg"),alt:"Youtube Video"}),(0,c.jsx)("span",{className:s().play,children:"\u25b6"})]}),(0,c.jsx)("iframe",{className:n?null:s().disabled,src:n?f:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}))}()}},305:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7705),o=n(5893),a=function(){var e=Math.random()>.5,t=Math.random()>.5;return console.log("a",e,t),(0,o.jsx)(r.Z,{shapes:["\u25a2","\u29cd","\u25cb","\u25ca"],colors:["#ffccfb","#00ff00","#0080b3","#fdff80"],title:"Level 3",size:5,rulesOptions:{allowNots:!0,notColors:e,notShapes:t}})},i=n(1664),s=n(2962),l=n(9734),c=function(){return(0,o.jsxs)("div",{className:"level-3",children:[(0,o.jsx)(s.PB,{title:"\ud83d\udcbb Booleans for Apps"}),(0,o.jsx)("h2",{children:"#2.3 \ud83d\udcbb Booleans for coding Apps"}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["How does boolean logic tie into coding? When a programmer is writing code they write in coding language. Every language has a syntax (a syntax is a language with a set of rules, kind of like any spoken language, and like boolean logic too!). Every coding language can have different syntax (or rules), but ultimately it is just a more advanced form of a logic model.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Rather than writing enormous combinations of ORs, NOTs, and other logical operators, software engineers conveniently created coding languages packed in with features that allow us to better express what we are trying to do. In fact, nearly every coding language has support for boolean logic built-in, which is an essential part of your toolkit as a coder.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"I've prepared one final challenge in case you'd like to test your skills at the matching game one more time before we proceed to talk about coding."]}),(0,o.jsx)(a,{}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["You might have noticed that when given a NOT with multiple values, it is sometimes easier to think of it as simply a request for whatever is missing. This is an example of how we can build more complex rules from simplistic systems. Writing good software is about learning to create apps with complex capabilities without making the code itself overly complex or messy.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Like speaking any language (human or machine), learning how to better express yourself (i.e. clean code and effective design patterns) allows you to say more while writing less. Spending more time to think about your code from a design perspective will allow you to save countless hours dealing with mind-numbing bugs and other issues."]}),(0,o.jsx)("p",{children:"Many coding languages have the capabilities to compare and transform more complex data types than booleans (true/false), which is very powerful. We can do things like evaluate math expressions, compare text, and more. Watch this video to see this in practice, and to see the relationship between the boolean logic and coding mental models."}),(0,o.jsx)(l.Z,{url:"_j9nvYKaOVE",thumbnail:"/images/cs-discoveries.jpg"}),(0,o.jsx)(i.default,{href:"/coding",children:(0,o.jsx)("a",{className:"next",children:"Next: #3.0 \ud83d\udee3\ufe0f Stepping into Coding"})})]})}},681:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toying/level-three",function(){return n(305)}])},347:function(e){e.exports={"boolean-game":"BooleanGame_boolean-game__C6gJ2","color-list":"BooleanGame_color-list__gDeZD",color:"BooleanGame_color__24hwG",rules:"BooleanGame_rules__3_3sy",jserror:"BooleanGame_jserror__27K5g",result:"BooleanGame_result__3TfNV",won:"BooleanGame_won__3JVOV",lost:"BooleanGame_lost__2RITR",replay:"BooleanGame_replay__2QBF6",board:"BooleanGame_board__2TPJN",cell:"BooleanGame_cell__2j0R-",failed:"BooleanGame_failed__1Fh83",inner:"BooleanGame_inner__z-olS"}},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy",disabled:"YTVideo_disabled__3feH4"}}},function(e){e.O(0,[981,774,888,179],(function(){return t=681,e(e.s=t);var t}));var t=e.O();_N_E=t}]);