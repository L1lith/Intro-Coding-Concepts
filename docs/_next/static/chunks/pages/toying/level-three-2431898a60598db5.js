(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[993],{7705:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(1451),o=n(4942),i=n(5671),a=n(3144),s=n(7326),l=n(2531),c=n(245),u=n(1120),h=n(7294),f=n(6359);var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1)+e)},p=n(347),g=n.n(p),m=n(1042),v=n.n(m),b=n(3931),y=n.n(b);function w(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=e.filter((function(){return Math.random()>.5}));n.length<t&&e.length>n.length;){var r=e.filter((function(e){return!n.includes(e)})),o=r[d(0,r.length-1)];n.push(o)}return n}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["red","green","blue"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["square","triangle"],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.allowNots,o=void 0===r||r,i=n.minColors,a=void 0===i?1:i,s=n.minShapes,l=void 0===s?1:s,c=n.notColors,u=void 0!==c&&c,h=n.notShapes,f=void 0!==h&&h,d=w(e,a),p=w(t,l);!0===f&&p.length>=t.length&&(p=p.slice(0,t.length-1)),!0===o&&p.length<t.length-1&&!1!==f&&(!0===f||Math.random()>.5)&&(p=t.filter((function(e){return!p.includes(e)})),f=!0),!0===u&&d.length>=e.length&&(d=d.slice(0,t.length-1)),!0===o&&d.length<e.length-1&&!1!==u&&(!0===u||Math.random()>.5)&&(d=e.filter((function(e){return!d.includes(e)})),u=!0);var g=(u?"not (":"")+d.map((function(e){return y().name(e)[1]})).join(" or ")+(u?")":""),m=(f?"not (":"")+p.join(" or ")+(f?")":"");return{allowedColors:d,allowedShapes:p,notShapes:f,notColors:u,colorsDescription:g,shapesDescription:m,sourceCode:"function validate(chosenColor, chosenShape, rules) { // Returns true or false depending on whether the button the user picked was correct\n  const colorInRules = ".concat(d.map((function(e){return'chosenColor === "'.concat(e,'"')})).join(" || "),"\n  ").concat(u?"if (colorInRules) {\n  return false // That color was one of the banned colors":"if (not(colorInRules)) {\n  return false // That color wasn't one of the allowed colors"," else {\n    \n  }\n  return true // Nothing was wrong with it so we say it's valid :)"),validate:function(e,t){var n=d.includes(e);if(u==n)return!1;var r=p.includes(t);return f!=r&&(console.log(e,t,n,r,u,f),!0)}}},O=n(5893);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var S={_:{size:{_:Number,min:1,max:20,finite:!0,integer:!0},width:{_:Number,min:1,max:20,finite:!0,integer:!0},height:{_:Number,min:1,max:20,finite:!0,integer:!0},colors:[{_:String,trimmed:!0}],shapes:[{_:String,trimmed:!0}],rules:Object,title:String,rulesOptions:Object},allOptional:!0},E=["#ffccfb","#00ff00","#0080b3"],k=["\u25a2","\u29cd","\u25cb"];function N(e){var t=e.cell,n=e.width,r=e.height,o=e.x,i=e.y,a=e.activateCell,s=e.index,l=t.color,c=t.shape,u=t.active,h=t.failed,f=0===o?"left":o>=n-1?"right":"middle",d=0===i?"top":i>=r-1?"bottom":"middle";return(0,O.jsx)("span",{className:g().cell+(!0===h?" failed":""),vertical:d,horizontal:f,style:{backgroundColor:l,width:100/n+"%",height:100/r+"%"},onClick:function(){a(t,s)},disabled:!0!==u,children:(0,O.jsx)("span",{className:g().inner,children:c})})}var D=function(e){(0,l.Z)(n,e);var t=P(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),(0,f.Nw)(e,S),v()((0,s.Z)(r)),r.state=x(x({},r.generateGameState(r.props)),{},{gameState:"ongoing"}),r}return(0,a.Z)(n,[{key:"generateGameState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.colors||E,n=e.shapes||k;if(e.hasOwnProperty("size")&&(e.hasOwnProperty("width")||e.hasOwnProperty("height")))throw new Error("Must supply either size or w/h dimensions not both");for(var r=e.size||e.width||3,o=e.height||e.width||e.size||3,i=e.rules||j(t,n,this.props.rulesOptions),a=[];this.getRemainingCells(a,i).length<1;)for(var s=0,l=r*o;s<l;s++)a[s]={color:t[d(0,t.length-1)],shape:n[d(0,n.length-1)],active:!0};return{width:r,height:o,board:a,colors:t,shapes:n,rules:i}}},{key:"canActivate",value:function(e,t){t=t||this.state.rules;var n=e.color,r=e.shape;return t.validate(n,r)}},{key:"reset",value:function(){this.setState(x(x({},this.generateGameState(this.props)),{},{gameState:"ongoing"}))}},{key:"lose",value:function(){this.setState({gameState:"lost"})}},{key:"getRemainingCells",value:function(e,t){var n=this;return(e||this.state.board).filter((function(e){return n.canActivate(e,t)})).filter((function(e){return!0===e.active}))}},{key:"activateCell",value:function(e,t){if("ongoing"===this.state.gameState&&!0===e.active){var n=!0!==this.canActivate(e),o=(0,r.Z)(this.state.board),i=x({},e);i.active=!1,n&&(i.failed=!0),o[t]=i,this.setState({board:o}),n?this.lose():this.getRemainingCells().length<2&&this.win()}}},{key:"win",value:function(){this.setState({gameState:"won"})}},{key:"render",value:function(){var e=this.state.rules.colorsDescription.startsWith("not"),t=this.state.rules.shapesDescription.startsWith("not");return(0,O.jsxs)("div",{className:g()["boolean-game"],children:[(0,O.jsxs)("h2",{className:g().title,children:["Matching Rules",this.props.hasOwnProperty("title")?" - "+this.props.title.trim():null]}),(0,O.jsx)("noscript",{children:(0,O.jsx)("span",{className:g().jserror,children:"JavaScript is required to play this game."})}),(0,O.jsxs)("div",{className:g().rules,children:[(0,O.jsx)("h2",{children:"Color Palette"}),(0,O.jsx)("ul",{className:g()["color-list"],children:this.state.colors.map((function(e,t){return(0,O.jsx)("li",{children:(0,O.jsx)("span",{className:g().color,style:{backgroundColor:e},children:y().name(e)[1]})},t)}))}),(0,O.jsx)("h2",{children:"Rules"}),(e?"":"(")+this.state.rules.colorsDescription+(e?"":")")+" and "+(t?"":"(")+this.state.rules.shapesDescription+(t?"":")"),null]}),"ongoing"===this.state.gameState?null:"won"===this.state.gameState?(0,O.jsx)("span",{className:[g().result,g().won].join(" "),ref:function(e){document.body.contains(e)&&e.scrollIntoView()},children:"You Won!"}):"lost"===this.state.gameState?(0,O.jsx)("span",{className:[g().result,g().lost].join(" "),ref:function(e){document.body.contains(e)&&e.scrollIntoView()},children:"You lost \u3020_\u3020"}):"UNEXPECTED STATE: "+this.state.gameState,"ongoing"!==this.state.gameState?(0,O.jsx)("button",{className:g().replay,onClick:this.reset,children:"Replay"}):null,this.renderBoard()]})}},{key:"renderBoard",value:function(){var e=this,t=this.state,n=t.width,r=t.height;return(0,O.jsx)("div",{className:g().board,children:this.state.board.map((function(t,o){var i=Math.floor(o/n),a=o%n;return(0,O.jsx)(N,{width:n,height:r,x:a,y:i,activateCell:e.activateCell,index:o,cell:t},o)}))})}}]),n}(h.Component)},8253:function(e,t,n){"use strict";var r=n(4942),o=n(6120),i=n(5893);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){return(0,i.jsx)(o.Z,s(s({definition:"A boolean is something that is either true or false, like a yes or no question"},e),{},{children:e.children||"boolean"}))}},4520:function(e,t,n){"use strict";var r=n(4942),o=n(6120),i=n(5893);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){return(0,i.jsx)(o.Z,s(s({definition:"A coding operator is a tool in the language that inputs and outputs data"},e),{},{children:e.children||"operator"}))}},6120:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(6854),o=n(7373),i=n.n(o),a=n(7294);var s=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],r=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?n(!0):n(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,t]};var l=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],r=(0,a.useRef)(null),o=function(){return n(!0)},i=function(){return n(!1)};return(0,a.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",o),e.addEventListener("mouseout",i),function(){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",i)}}),[r.current]),[r,t]};function c(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.filter(Boolean);return r.length?0===r.length?r[0]:function(e){var t,n=c(r);try{for(n.s();!(t=n.n()).done;){var o=t.value;"function"===typeof o?o(e):o&&(o.current=e)}}catch(i){n.e(i)}finally{n.f()}}:null};var f=function(){(0,a.useRef)(null);var e=(0,a.useState)(!1),t=e[0],n=e[1],o=l(),i=(0,r.Z)(o,2),c=i[0],u=i[1],f=s(),d=(0,r.Z)(f,2),p=d[0],g=d[1],m=u||g;return m!==t&&n(m),[h(c,p),t]},d=n(5893),p=["up","left","down","right"];var g=function(e){var t=f(),n=(0,r.Z)(t,2),o=n[0],a=n[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");var s=e.hasOwnProperty("direction")?e.direction:"up";if(!p.includes(s))throw new Error("Invalid Direction Specified");return(0,d.jsxs)("span",{className:i()["hover-definition"],ref:o,children:[a?(0,d.jsx)("span",{className:i().definition+" "+i()[s],children:e.definition}):null,e.children]})}},4090:function(e,t,n){"use strict";var r=n(4942),o=n(6854),i=n(6109),a=n.n(i),s=n(7294),l=n(5893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var t=(0,s.useState)(!1),n=t[0],r=t[1],i=e.url,c=e.query,f=void 0===c?{}:c;if(e.hasOwnProperty("query")&&("object"!=typeof f||null===f||Object.keys(f).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof i)return console.warn(new Error("Expected a video url")),null;if(f.autoplay=1,!h.test(i))throw new Error("This url is invalid");var d="https://www.youtube.com/embed/"+i+"?"+Object.entries(f).map((function(e){var t=(0,o.Z)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r))})).join("&"),p=u({},e);return delete p.url,delete p.children,(0,l.jsxs)("div",u(u({},p),{},{className:a()["youtube-container"]+" youtube-container",children:[n?null:(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)("img",{onClick:function(){return r(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(i,"/hqdefault.jpg"),alt:"Youtube Video"}),(0,l.jsx)("span",{className:a().play,children:"\u25b6"})]}),(0,l.jsx)("iframe",{className:n?null:a().disabled,src:n?d:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}))}()}},8035:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7705),o=n(5893),i=function(){var e=Math.random()>.5,t=Math.random()>.5;return console.log("a",e,t),(0,o.jsx)(r.Z,{shapes:["\u25a2","\u29cd","\u25cb","\u25ca"],colors:["#ffccfb","#00ff00","#0080b3","#fdff80"],title:"Level 3",size:5,rulesOptions:{allowNots:!0,notColors:e,notShapes:t}})},a=n(1664),s=n(2962),l=n(4090),c=n(4942),u=n(6120);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){return(0,o.jsx)(u.Z,f(f({definition:"The syntax is the grammer (or rules) of the programming language"},e),{},{children:e.children||"syntax"}))},p=n(4520),g=n(8253),m=function(){return(0,o.jsxs)("div",{className:"level-3",children:[(0,o.jsx)(s.PB,{title:"\ud83d\udcbb Booleans for Apps"}),(0,o.jsx)("h2",{children:"#2.3 \ud83d\udcbb Booleans for coding Apps"}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["How does ",(0,o.jsx)(g.Z,{})," logic tie into coding? When a programmer is coding they write in a special language called a ",(0,o.jsx)(d,{}),". Every coding language can have different"," ",(0,o.jsx)(d,{children:"syntaxes"}),", but ultimately they are just different ways of representing our logic models using code.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Rather than writing enormous combinations of ORs, NOTs, and other logical"," ",(0,o.jsx)(p.Z,{children:"operators"}),", software engineers conveniently created coding languages packed in with features that allow us to better express what we are trying to do. In fact, nearly every coding language has support for ",(0,o.jsx)(g.Z,{})," logic built-in, which is an essential part of your toolkit as a coder.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"I've prepared one final challenge in case you'd like to test your skills at the matching game one more time before we proceed to talk about coding."]}),(0,o.jsx)(i,{}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["You might have noticed that when given a NOT ",(0,o.jsx)(p.Z,{})," with multiple values, it is sometimes easier to think of it as simply a request for whatever is missing. This is an example of how we can build more complex rules from simplistic systems. Writing good software is about learning to create apps with complex capabilities without making the code itself overly complex or messy.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Like speaking any language (human or machine), learning how to better express yourself (by using clean code and good design practices) allows you to say more while writing less. Spending more time to think about your code from a design perspective will allow you to save countless hours dealing with mind-numbing bugs and other issues."]}),(0,o.jsxs)("p",{children:["Many coding languages have the capabilities to compare and transform more complex data types than ",(0,o.jsx)(g.Z,{children:"booleans"}),", which is very powerful. We can do things like evaluate math expressions, compare text, and more. Watch this video to see this in practice, and to see the relationship between the boolean logic and coding mental models."]}),(0,o.jsx)(l.Z,{url:"_j9nvYKaOVE",thumbnail:"/images/cs-discoveries.jpg"}),(0,o.jsx)(a.default,{href:"/coding",children:(0,o.jsx)("a",{className:"next",children:"Next: #3.0 \ud83d\udee3\ufe0f Stepping into Coding"})})]})}},681:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toying/level-three",function(){return n(8035)}])},347:function(e){e.exports={"boolean-game":"BooleanGame_boolean-game__C6gJ2","color-list":"BooleanGame_color-list__gDeZD",color:"BooleanGame_color__24hwG",rules:"BooleanGame_rules__3_3sy",jserror:"BooleanGame_jserror__27K5g",result:"BooleanGame_result__3TfNV",won:"BooleanGame_won__3JVOV",lost:"BooleanGame_lost__2RITR",replay:"BooleanGame_replay__2QBF6",board:"BooleanGame_board__2TPJN",cell:"BooleanGame_cell__2j0R-",failed:"BooleanGame_failed__1Fh83",inner:"BooleanGame_inner__z-olS"}},7373:function(e){e.exports={"hover-definition":"HoverDefinition_hover-definition__3GBWJ",definition:"HoverDefinition_definition__1B_gz",up:"HoverDefinition_up__V_piZ",bottom:"HoverDefinition_bottom__1lWlR",left:"HoverDefinition_left__3HmVe",right:"HoverDefinition_right__j_Cqh"}},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy",disabled:"YTVideo_disabled__3feH4"}}},function(e){e.O(0,[925,774,888,179],(function(){return t=681,e(e.s=t);var t}));var t=e.O();_N_E=t}]);