(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[114],{9734:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(4942);var o=n(181);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(l){a=!0,o=l}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=n(6109),a=n.n(s),l=n(5893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var t=e.url,n=e.query,r=void 0===n?{}:n;if(e.hasOwnProperty("query")&&("object"!=typeof r||null===r||Object.keys(r).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof t)return console.warn(new Error("Expected a video url")),null;if(r.autoplay=1,!d.test(t))throw new Error("This url is invalid");var o="https://www.youtube.com/embed/"+t+"?"+Object.entries(r).map((function(e){var t=i(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r))})).join("&"),s=u({},e);return delete s.url,delete s.children,(0,l.jsx)("div",u(u({},s),{},{className:a()["youtube-container"]+" youtube-container",children:(0,l.jsx)("iframe",{src:o,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,srcDoc:"<style>*{\n          padding:0;margin:0;overflow:hidden\n          }\n          html,body\n          {\n          height:100%;\n          background-color: black;\n          }\n          img{\n          width:100%;\n          height: 100%;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          }\n          span {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            font: 80px/1.5 sans-serif;\n            color: white;\n            filter: drop-shadow(0 0 5px #000000e6);\n            pointer-events: none;\n            cursor: pointer;\n          }\n          a {\n            display: block;\n          }\n          </style>\n          <a href=".concat(o,">\n          <img src=").concat(e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(t,"/hqdefault.jpg")," alt='Youtube Video'></a><span>\u25b6</span>")})}))}()}},728:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(4942),o=n(1664);var i=function(){var e=!1,t={onMouseOver:function(t){e=!0,t.target.play()},onMouseOut:function(){e=!1},onEnded:function(t){!0===e&&t.target.play()}};return t},s=n(2962),a=n(9734);var l=function e(t){return Array.isArray(t)?t.some((function(t){return!e(t)})):!(null===t||void 0===t||!t.type)},c=n(1525),u=n.n(c),d=n(7294),h=n(5893);var f=function(e){if(l(e.children))throw new Error("Children are required for easter :)");var t=(0,d.useState)(!1),n=t[0],r=t[1];return(0,h.jsxs)(d.Fragment,{children:[(0,h.jsx)("span",{className:u()["easter-egg"],onClick:function(){r(!n)},children:!0===n?"\ud83d\udc23":"\ud83e\udd5a"}),!0===n?e.children:null]})},g=n(5206),p=n.n(g);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(){return(0,h.jsxs)("div",{className:"logic-models",children:[(0,h.jsx)(s.PB,{description:"Arranging Logic Models",title:"\ud83e\udde0 Logic Models Explained"}),(0,h.jsx)("h2",{children:"#1.1 \ud83e\udde0 Logic Models Explained"}),(0,h.jsx)("br",{}),(0,h.jsxs)("span",{className:"intro-card",children:[(0,h.jsx)("video",m(m({autoPlay:!0},i()),{},{muted:!0,children:(0,h.jsx)("source",{src:"/video/redstoneContraption.webm",type:"video/webm"})})),"Minecraft is a great place to start your adventure :)"]}),(0,h.jsx)("p",{children:"Next you will learn about boolean logic (a boolean is something that is either true or false) and how to visualize them. Visualizing logical systems is very useful. The entire world operates using logic; like how you do your job, how you cross the street, or how you navigate a website. A lot of decisions we make without realizing we made them."}),(0,h.jsxs)("span",{className:"intro-card",children:[(0,h.jsx)("img",{src:"/images/spaghettiBowl.jpeg",alt:"SLC Spaghetti Bowl"}),"Nothing gets the blood pumping quite like being tail-gated around a 90\xb0 turn on the freeway.",(0,h.jsxs)("span",{className:"smaller-text",children:[" ","Credit to ",(0,h.jsx)("a",{href:"https://www.utahseagull.com/2019/10/",children:"Utah Seagull"})]})]}),(0,h.jsxs)("p",{children:["All logic models have 3 basic components",(0,h.jsxs)("ol",{children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{className:"bold",children:"Input Data: "}),"An incoming source of data to your logic model which you can use to make decisions."]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{className:"bold",children:"Rules:"}),' This is the the "logic" or "code" of your model. The rules decide what the result (or output) of our model is based on the input.']}),(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{className:"bold",children:"Output Data: "}),"What the result of your logic model is."]})]}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"Imagine you are a civil engineer trying to optimize the flow of traffic through a very busy area. Our input data is the flow of cars into the freeway and their intended destinations. Our output data is the flow of cars out of the freeway. As a civil engineer our logic model will not only make the difference when someone's trying to get to work quickly, but our decision will ultimately be the difference between life and death when reckless driving happens.",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"While watching this video try to notice all the factors civil engineers must pay attention to when designing highways."]}),(0,h.jsx)(a.Z,{url:"9XIjqdk69O4",thumbnail:"/images/highway-geometry.jpg"}),(0,h.jsx)("p",{children:'"That\'s great... but how does this apply to coding?" I\'m glad you asked! When we are coding we too are writing a logic system to handle the input flow of information (like mouse and keyboard input when navigating a webpage) and the output flow of information (like displaying a webpage or rendering a video-game). As a coder you write (or "code") the logical rules of the system (like when the user clicks this link, take them to that page). While say inventing a computer or a roadway from scratch might be incredibly complex, computer, civil, and all kinds of engineers all take advantage of the technology and methodology that has been been in development for much longer than we have been alive.'}),"Here's a table describing the logic model we use when we are at a traffic light. Your brain provides the decision-making rules of the logic model.",(0,h.jsxs)("table",{className:p()["traffic-stop"],children:[(0,h.jsxs)("thead",{children:[(0,h.jsx)("th",{children:"Input"}),(0,h.jsx)("th",{children:"Output"})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Light is red"}),(0,h.jsx)("td",{children:"Come to a smooth stop before the intersection."})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Light is yellow"}),(0,h.jsx)("td",{children:"Pay attention to the intersection. If you can stop, stop quickly."})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Light is green"}),(0,h.jsx)("td",{children:"Look ahead to ensure the traffic is clear, and continue on."})]})]}),(0,h.jsxs)("p",{children:["In coding we have a set of software and methodology that makes describing our logical system much easier. In the world of website development, we call this a"," ",(0,h.jsx)("span",{className:"bold",children:"stack"}),". Much like a civil engineer must consider the efficacy of a roadway system, when building a website we must consider many aspects of the system, like cyber safety (allowing unsafe input data has led to many stolen identities and credit cards), user experience, and visual appeal. By better understanding the logical rules behind our software we better understand where this issues arise, preventing catastrophic database leaks and user rage-quits before they ever happen.",(0,h.jsx)("br",{}),(0,h.jsx)("br",{})]}),(0,h.jsx)(a.Z,{url:"hZdLjyK89Cw",thumbnail:"/images/self-operating-napkin.jpg"}),(0,h.jsx)("span",{className:"italic",children:"it works perfectly 60% of the time!"}),(0,h.jsxs)("p",{children:['When designing software systems it\'s important to think it through from beginning to end. Most software bugs stem from coders thinking "it\'s not my job" or not putting that extra effort to consider edge cases because "it worked when I ran it". You must remember the 3 components of your logic model, so first consider your user ',(0,h.jsx)("span",{className:"bold",children:"input"}),". When navigating a site the user gives many inputs, like clicking a link, scrolling the page, logging in, or submitting a form.",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"Next you must think about every step in your code, and how these"," ",(0,h.jsx)("span",{className:"bold",children:"rules"})," ultimately handles your users input and translates it into the program's ",(0,h.jsx)("span",{className:"bold",children:"output"}),". Don't cut corners or leave problems for someone else to deal with. Building the best software you can the first time (you'll definitely write some messy code starting out, but after you make your first draft of something try to come back and look for ways to improve it) will save you a lot of time later on. Understand the deep inner workings of your software (or \"stack\") by"," ",(0,h.jsx)("span",{className:"underline",children:"toying around with it and asking questions"}),"!",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"The output is what the users of your software experience (this is a"," ",(0,h.jsx)("span",{className:"underline",children:"critical"})," aspect of your logic model), so when coding you must always think about what your users are trying to achieve, and not only all the possible issues and bugs they could run into, but also how to make your software straightforward and convenient. Like good road design, your software should effectively serve your users, instead of forcing your users to be focused on tediously tinkering with poorly designed software. Take responsibility as an engineer for avoidable crashes and other design issues that arise with your software."]}),(0,h.jsx)(o.default,{href:"/toying",children:(0,h.jsx)("a",{className:"next",children:"Next: #2.0 \ud83e\udde9 Playing around with Logic Puzzles"})}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsxs)(f,{children:[(0,h.jsx)("p",{children:"Bonus: Liked the Rube Goldberg Machine?"}),(0,h.jsx)(a.Z,{url:"Av07QiqmsoA",thumbnail:"/images/lifes-lemons.jpg"})]})]})}},9295:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vision/logic-models-explained",function(){return n(728)}])},1525:function(e){e.exports={"easter-egg":"EasterEgg_easter-egg__1rNRT",rainbow:"EasterEgg_rainbow__30jFr"}},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy"}},5206:function(e){e.exports={"traffic-stop":"logic-models-explained_traffic-stop__2A1xv"}},907:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},181:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(907);function o(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}},function(e){e.O(0,[774,888,179],(function(){return t=9295,e(e.s=t);var t}));var t=e.O();_N_E=t}]);