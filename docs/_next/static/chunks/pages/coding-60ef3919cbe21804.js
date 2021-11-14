(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[314],{9734:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(4942);var o=n(181);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n(6109),l=n.n(a),s=n(5893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var t=e.url,n=e.query,r=void 0===n?{}:n;if(e.hasOwnProperty("query")&&("object"!=typeof r||null===r||Object.keys(r).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof t)return console.warn(new Error("Expected a video url")),null;if(r.autoplay=1,!d.test(t))throw new Error("This url is invalid");var o="https://www.youtube.com/embed/"+t+"?"+Object.entries(r).map((function(e){var t=i(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r))})).join("&"),a=u({},e);return delete a.url,delete a.children,(0,s.jsx)("div",u(u({},a),{},{className:l()["youtube-container"]+" youtube-container",children:(0,s.jsx)("iframe",{src:o,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,srcDoc:"<style>*{\n          padding:0;margin:0;overflow:hidden\n          }\n          html,body\n          {\n          height:100%;\n          background-color: black;\n          }\n          img{\n          width:100%;\n          height: 100%;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          }\n          span {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            font: 80px/1.5 sans-serif;\n            color: white;\n            filter: drop-shadow(0 0 5px #000000e6);\n            pointer-events: none;\n            cursor: pointer;\n          }\n          a {\n            display: block;\n          }\n          </style>\n          <a href=".concat(o,">\n          <img src=").concat(e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(t,"/hqdefault.jpg")," alt='Youtube Video'></a><span>\u25b6</span>")})}))}()}},4688:function(e,t,n){"use strict";n.r(t);var r=n(1664),o=n(2962),i=n(9734),a=n(5893);t.default=function(){return(0,a.jsxs)("div",{className:"coding-intro",children:[(0,a.jsx)("h1",{className:"title",children:"Chapter 3"}),(0,a.jsx)(o.PB,{title:"\ud83d\udee3\ufe0f Stepping into Coding"}),(0,a.jsxs)("ol",{className:"toc pages",children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/coding#lesson",children:(0,a.jsx)("a",{children:"#3.0 \ud83d\udee3\ufe0f Stepping into Coding"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/coding/primitives",children:(0,a.jsx)("a",{children:"#3.1 \ud83d\udcca Basic Data Types"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/coding/essential-tools",children:(0,a.jsx)("a",{children:"#3.2 \ud83d\udd28 Essential Tools"})})})]}),(0,a.jsx)("h2",{id:"lesson",children:"#3.0 \ud83d\udee3\ufe0f Stepping into Coding"}),(0,a.jsx)("br",{}),(0,a.jsxs)("span",{className:"intro-card",children:[(0,a.jsx)(i.Z,{url:"MAlSjtxy5ak",thumbnail:"/images/coding-tutorial-meme.jpg"}),"(this video is a joke)"]}),(0,a.jsxs)("p",{children:['How is JS (JavaScript) code written? JavaScript code is just a series of logical expressions (like little logic models) that are evaluated (run by the JavaScript engine software called the "interpreter") in a particular order. Each line is evaluated one at a time from top to bottom. While individual lines are generally read left-to-right The JS interpreter also understands and applies the rules of'," ",(0,a.jsx)("a",{href:"https://www.mathsisfun.com/operation-order-pemdas.html",children:"PEMDAS"}),". Every line of code you write should combine cohesively in order to form a well functioning program.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Coding doesn't have to be frustrating, let's try to have some fun with it. In this section I hope it will become clear how you can take an approached based on logic models to write basic code. I'm going to be providing many examples, and if you get stuck it's okay to continue on and come back later. Try to get a feel for what is going on overall by toying with the code."]}),(0,a.jsx)(r.default,{href:"/coding/primitives",children:(0,a.jsx)("a",{className:"next",children:"Next: #3.1 \ud83d\udcca Basic Data Types"})})]})}},502:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coding",function(){return n(4688)}])},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy"}},907:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},181:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(907);function o(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}},function(e){e.O(0,[774,888,179],(function(){return t=502,e(e.s=t);var t}));var t=e.O();_N_E=t}]);