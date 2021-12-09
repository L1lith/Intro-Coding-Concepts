(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9734:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(4942);var i=t(181);function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}}(e,r)||(0,i.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=t(6109),c=t.n(a),l=t(7294),s=t(5893);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var h=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var r=(0,l.useState)(!1),t=r[0],n=r[1],i=e.url,a=e.query,u=void 0===a?{}:a;if(e.hasOwnProperty("query")&&("object"!=typeof u||null===u||Object.keys(u).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof i)return console.warn(new Error("Expected a video url")),null;if(u.autoplay=1,!h.test(i))throw new Error("This url is invalid");var f="https://www.youtube.com/embed/"+i+"?"+Object.entries(u).map((function(e){var r=o(e,2),t=r[0],n=r[1];return"".concat(t,"=").concat(encodeURIComponent(n))})).join("&"),y=d({},e);return delete y.url,delete y.children,(0,s.jsx)("div",d(d({},y),{},{className:c()["youtube-container"]+" youtube-container",children:t?(0,s.jsx)("iframe",{src:f,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,s.jsxs)(l.Fragment,{children:[(0,s.jsx)("img",{onClick:function(){return n(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(i,"/hqdefault.jpg"),alt:"Youtube Video"}),(0,s.jsx)("span",{children:"\u25b6"})]})}))}()}},2748:function(e,r,t){"use strict";t.r(r);var n=t(1664),i=t(9734),o=t(1312),a=t.n(o),c=t(5893);r.default=function(){return(0,c.jsxs)("div",{className:a().home,children:[(0,c.jsxs)("h1",{className:"title",children:[(0,c.jsx)("span",{className:"smaller-text",children:"Coding Intro:"}),(0,c.jsx)("br",{}),"Making a Game"]}),(0,c.jsxs)("span",{className:"intro-card",children:[(0,c.jsx)(i.Z,{url:"-jRREn6ifEQ",thumbnail:"/images/poetry-of-programming.jpg"}),"Coding is a lot like human language, and they both need diversity"]}),(0,c.jsx)("p",{children:"In this course I will explain how to visualize coding & how we can use it to make awesome things. I will teach you the basics of the JavaScript language, and show you how to make your own text based game and share it with your friends :)"}),(0,c.jsx)("h2",{children:"Sections"}),(0,c.jsxs)("ol",{className:"toc sections",children:[(0,c.jsx)("li",{children:(0,c.jsx)(n.default,{href:"/vision",children:(0,c.jsx)("a",{children:"\ud83d\udc40 Visualizing Logic Models"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.default,{href:"/toying",children:(0,c.jsx)("a",{children:"\ud83d\udc50 Toying with Logic Models"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.default,{href:"/coding",children:(0,c.jsx)("a",{children:"\ud83d\udcbb Learning to Code"})})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.default,{href:"/rpg",children:(0,c.jsx)("a",{children:"\ud83c\udfae Building an RPG"})})})]}),(0,c.jsxs)("div",{className:"extras",children:[null,(0,c.jsx)(n.default,{href:"/resources",children:(0,c.jsx)("a",{children:"Remember to check out the resource section if you get stuck"})})]})]})}},8581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2748)}])},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy"}},1312:function(e){e.exports={home:"styles_home__UFMHZ",extras:"styles_extras__3uRai"}},907:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t.d(r,{Z:function(){return n}})},181:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(907);function i(e,r){if(e){if("string"===typeof e)return(0,n.Z)(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,n.Z)(e,r):void 0}}}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);