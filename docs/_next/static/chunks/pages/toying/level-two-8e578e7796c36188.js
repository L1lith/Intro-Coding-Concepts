(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{9734:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(4942);var o=r(181);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=r(6109),l=r.n(a),u=r(7294),s=r(5893);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var t=(0,u.useState)(!1),r=t[0],n=t[1],o=e.url,a=e.query,c=void 0===a?{}:a;if(e.hasOwnProperty("query")&&("object"!=typeof c||null===c||Object.keys(c).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof o)return console.warn(new Error("Expected a video url")),null;if(c.autoplay=1,!p.test(o))throw new Error("This url is invalid");var d="https://www.youtube.com/embed/"+o+"?"+Object.entries(c).map((function(e){var t=i(e,2),r=t[0],n=t[1];return"".concat(r,"=").concat(encodeURIComponent(n))})).join("&"),f=h({},e);return delete f.url,delete f.children,(0,s.jsx)("div",h(h({},f),{},{className:l()["youtube-container"]+" youtube-container",children:r?(0,s.jsx)("iframe",{src:d,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,s.jsxs)(u.Fragment,{children:[(0,s.jsx)("img",{onClick:function(){return n(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(o,"/hqdefault.jpg"),alt:"Youtube Video"}),(0,s.jsx)("span",{children:"\u25b6"})]})}))}()}},6979:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(54),o=r(5893),i=function(){var e=Math.random()>.5,t=!e;return(0,o.jsx)(n.Z,{title:"Level 2",size:3,rulesOptions:{allowNots:!0,notColors:e,notShapes:t}})},a=r(1664),l=r(2962),u=r(9734),s=function(){return(0,o.jsxs)("div",{className:"level-2",children:[(0,o.jsx)(l.PB,{title:'\ud83d\udeab Whats "Not" Allowed'}),(0,o.jsx)("h2",{children:'#2.2 \ud83d\udeab Whats "Not" Allowed'}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{className:"intro-card",children:(0,o.jsx)(u.Z,{url:"fhIdbRp6xeg",thumbnail:"/images/borat-not-joke.jpg"})}),(0,o.jsx)("br",{}),(0,o.jsx)("h2",{children:'The "Not" Operator'}),(0,o.jsx)("p",{children:"Now that we've learned the most basic expression OR, it's time to move onto NOT. The NOT operator outputs false when it's input is true, and true when it's input is false. You can think of this like an inversion, returning what was NOT specified."}),(0,o.jsx)("p",{children:'When playing the second level, make sure NOT to select any colors or shapes that are prefixed with "not".'}),(0,o.jsx)(i,{}),(0,o.jsx)(a.default,{href:"/toying/level-three",children:(0,o.jsx)("a",{className:"next",children:"Next: #2.3 \ud83d\udcbb Booleans for coding Apps"})})]})}},275:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toying/level-two",function(){return r(6979)}])},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy"}}},function(e){e.O(0,[281,970,962,186,367,54,774,888,179],(function(){return t=275,e(e.s=t);var t}));var t=e.O();_N_E=t}]);