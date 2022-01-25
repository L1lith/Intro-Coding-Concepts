"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[418],{7681:function(e,t,n){var r=n(7487),o=n(5007);t.Z=function(e){return o.createElement(r.Z,Object.assign({definition:"A boolean is something that is either true or false, like a yes or no question"},e),e.children||"boolean")}},2325:function(e,t,n){var r=n(7487),o=n(5007);t.Z=function(e){return o.createElement(r.Z,Object.assign({definition:"Your output is the result of your logic model"},e),e.children||"output")}},4788:function(e,t,n){n.d(t,{Z:function(){return i}});var r=function e(t){return Array.isArray(t)?t.some((function(t){return!e(t)})):!(null==t||!t.type)},o=n(5007),a=n(5007);var i=function(e){if(r(e.children))throw new Error("Children are required for easter :)");var t=(0,o.useState)(!1),n=t[0],i=t[1];return a.createElement(o.Fragment,null,a.createElement("span",{className:"EasterEgg-module--easterEgg--vN6A1",onClick:function(){i(!n)}},!0===n?"🐣":"🥚"),!0===n?e.children:null)}},7487:function(e,t,n){function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return d}});var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.filter(Boolean);return o.length?0===o.length?o[0]:function(e){for(var t,n=r(o);!(t=n()).done;){var a=t.value;"function"==typeof a?a(e):a&&(a.current=e)}}:null},i=n(5007);var l=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?n(!0):n(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,t]};var s=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=(0,i.useRef)(null),o=function(){return n(!0)},a=function(){return n(!1)};return(0,i.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",o),e.addEventListener("mouseout",a),function(){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",a)}}),[r.current]),[r,t]};var u=function(){(0,i.useRef)(null);var e=(0,i.useState)(!1),t=e[0],n=e[1],r=s(),o=r[0],u=r[1],c=l(),d=c[0],m=c[1],f=u||m;return f!==t&&n(f),[a(o,d),t]},c=n(5007);var d=function(e){var t=u(),n=t[0],r=t[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");return c.createElement("span",{className:"HoverDefinition-module--hover-definition--UaMyO",ref:n},r?c.createElement("span",{className:"HoverDefinition-module--definition--yVWLg HoverDefinition-module--up--SLxoS"},e.definition):null,e.children)}},71:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(5007),o=n(5007),a=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var i=function(e){return void 0===e&&(e={url:url}),function(){var t=(0,r.useState)(!1),n=t[0],i=t[1],l=e,s=l.url,u=l.query,c=void 0===u?{}:u;if(e.hasOwnProperty("query")&&("object"!=typeof c||null===c||Object.keys(c).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof s)return console.warn(new Error("Expected a video url")),null;if(c.autoplay=1,!a.test(s))throw new Error("This url is invalid");var d="https://www.youtube.com/embed/"+s+"?"+Object.entries(c).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&"),m=Object.assign({},e);return delete m.url,delete m.children,o.createElement("div",Object.assign({},m,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),n?null:o.createElement(r.Fragment,null,o.createElement("img",{onClick:function(){return i(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+s+"/hqdefault.jpg",alt:"Youtube Video"}),o.createElement("span",null,"▶")),o.createElement("iframe",{className:n?null:"YTVideo-module--disabled--HEa7g",src:n?d:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},5661:function(e,t){t.Z=function(){var e=!1,t={onMouseOver:function(t){e=!0,t.target.play()},onMouseOut:function(){e=!1},onEnded:function(t){!0===e&&t.target.play()}};return t}},2220:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(7681),o=n(2325),a=n(7487),i=n(5007),l=function(e){return i.createElement(a.Z,Object.assign({definition:"Your stack is the list of software/apps that you use to code"},e),e.children||"stack")},s=n(4788),u=n(2472),c=n(71),d=n(5661),m=n(6034),f=n(5414),h=n(5007);function g(){return h.createElement("div",{className:"logic-models"},h.createElement(f.q,null,h.createElement("meta",{name:"description",content:"Arranging Logic Models"}),h.createElement("title",null,"🧠 Logic Models Explained")),h.createElement("h2",null,"#1.1 🧠 Logic Models Explained"),h.createElement("br",null),h.createElement("span",{className:"introCard"},h.createElement("video",Object.assign({autoPlay:!0},(0,d.Z)(),{muted:!0}),h.createElement("source",{src:"/video/redstoneContraption.webm",type:"video/webm"})),"Minecraft is a great place to start your adventure :)"),h.createElement("p",null,"Next you will learn about ",h.createElement(r.Z,null)," logic and how to visualize them. Visualizing logical systems is very useful. The entire world operates using logic; like how you do your job, how you cross the street, or how you navigate a website. We make a lot of decisions without realizing we made them."),null,h.createElement("p",null,"All logic models have 3 basic components",h.createElement("ol",{className:m.G},h.createElement("li",null,h.createElement("span",{className:"bold"},"Input Data: "),"An incoming source of data to your logic model which you can use to make decisions."),h.createElement("li",null,h.createElement("span",{className:"bold"},"Rules:"),' This is the "logic" or "code" of your model. The rules are used to decide what the result (or output) of our model is based on the input.'),h.createElement("li",null,h.createElement("span",{className:"bold"},"Output Data: "),"What the result of your logic model is.")),h.createElement("br",null),h.createElement("br",null),"Imagine you are a civil engineer trying to optimize the flow of traffic through a very busy area. Our input data is the flow of cars into the freeway and their intended destinations. Our ",h.createElement(o.Z,null)," is the flow of cars out of the freeway. As a civil engineer our logic model will not only make the difference when someone's trying to get to work quickly, but our decision will ultimately be the difference between life and death when reckless driving happens.",h.createElement("br",null),h.createElement("br",null),"While watching this video try to notice all the factors civil engineers must pay attention to when designing highways."),h.createElement(c.Z,{url:"9XIjqdk69O4",thumbnail:"/images/highway-geometry.jpg"}),h.createElement("p",null,"\"That's great... but how does this apply to coding?\" I'm glad you asked! When we are coding we too are writing a logic system to handle the input flow of information (like mouse and keyboard input when navigating a webpage) and the ",h.createElement(o.Z,null),' flow of information (like displaying a webpage or rendering a video-game). As a coder you write (or "code") the logical rules of the system (like when the user clicks this link, take them to that page). While say inventing a computer or a roadway from scratch might be incredibly complex, computer, civil, and all kinds of engineers all take advantage of the technology and methodology that has been been in development for much longer than we have been alive.'),"Here's a table describing the logic model we use when we are at a traffic light. Your brain provides the decision-making rules of the logic model.",h.createElement("table",{className:m.x},h.createElement("thead",null,h.createElement("th",null,"Input (Geographical Area)"),h.createElement("th",null,"Output (Road Type)")),h.createElement("tr",null,h.createElement("td",null,"A relatively flat countryside"),h.createElement("td",null,"A long, straight, and fast-moving highway")),h.createElement("tr",null,h.createElement("td",null,"A steep mountainside"),h.createElement("td",null,"A winding, slow-moving road with a lot of signs")),h.createElement("tr",null,h.createElement("td",null,"A crowded city"),h.createElement("td",null,"A very wide freeway with lots of entrances and exits"))),h.createElement("p",null,"In coding we have a set of software and methodology that makes describing our logical system much easier. In the world of website development, we call this a ",h.createElement(l,null),". Much like a civil engineer must consider the efficacy of a roadway system, when building a website we must consider many aspects of the system, like cyber safety (allowing unsafe input data has led to many stolen identities and credit cards), user experience, and visual appeal. By better understanding the logical rules behind our software we better understand where this issues arise, preventing catastrophic database leaks and user rage-quits before they ever happen.",h.createElement("br",null),h.createElement("br",null)),h.createElement(c.Z,{url:"qybUFnY7Y8w",thumbnail:"/images/this-too-shall-pass.jpg"}),h.createElement("span",{className:"italic"},"it works perfectly 60% of the time!"),h.createElement("p",null,'When designing software systems it\'s important to think it through from beginning to end. Most software bugs stem from coders thinking "it\'s not my job" or not putting that extra effort to consider edge cases because "it worked when I ran it". You must remember the 3 components of your logic model, so first consider your user'," ",h.createElement("span",{className:"bold"},"input"),". When navigating a site the user gives many inputs, like clicking a link, scrolling the page, logging in, or submitting a form.",h.createElement("br",null),h.createElement("br",null),"Next you must think about every step in your code, and how these"," ",h.createElement("span",{className:"bold"},"rules")," ultimately handles your users input and translates it into the program's ",h.createElement(o.Z,null),". Don't cut corners or leave problems for someone else to deal with. Building the best software you can the first time (you'll definitely write some messy code starting out, but after you make your first draft of something try to come back and look for ways to improve it) will save you a lot of time later on. Understand the deep inner workings of your ",h.createElement(l,null)," by"," ",h.createElement("span",{className:"underline"},"toying around with it and asking questions"),"!",h.createElement("br",null),h.createElement("br",null),"The ",h.createElement(o.Z,null)," is what the users of your software experience (this is a"," ",h.createElement("span",{className:"underline"},"critical")," aspect of your logic model), so when coding you must always think about what your users are trying to achieve, and not only all the possible issues and bugs they could run into, but also how to make your software straightforward and convenient. Like good road design, your software should effectively serve your users, instead of forcing your users to be focused on tediously tinkering with poorly designed software. Take responsibility as an engineer for avoidable crashes and other design issues that arise with your software."),h.createElement(u.Z,{className:"next",to:"/toying"},"Next: #2.0 🧩 Playing around with Logic Puzzles"),h.createElement("br",null),h.createElement("br",null),h.createElement(s.Z,null,h.createElement("p",null,"Bonus: Liked the Rube Goldberg Machine?"),h.createElement(c.Z,{url:"Av07QiqmsoA",thumbnail:"/images/lifes-lemons.jpg"})))}},6034:function(e,t,n){n.d(t,{x:function(){return r},G:function(){return o}});var r="logic-models-explained-module--trafficStop--oj9e-",o="logic-models-explained-module--logicModelChart--mYYlH"}}]);
//# sourceMappingURL=component---src-pages-vision-logic-models-explained-en-js-b823195cfb69f710c49c.js.map