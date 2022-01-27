"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[7016],{2646:function(e,n,t){var r=t(7645),o=t(5007);n.Z=function(){var e=Math.random()>.5,n=!e;return o.createElement(r.Z,{title:"Level 2",size:3,rulesOptions:{allowNots:!0,notColors:e,notShapes:n}})}},2002:function(e,n,t){var r=t(7487),o=t(5007);n.Z=function(e){return o.createElement(r.Z,Object.assign({definition:'Un "operador" es una acción en la codificación que ingresa y genera datos, como comparar dos valores booleanos o sumar dos números.'},e),e.children||"operator")}},7487:function(e,n,t){function r(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return d}});var a=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=n.filter(Boolean);return o.length?0===o.length?o[0]:function(e){for(var n,t=r(o);!(n=t()).done;){var a=n.value;"function"==typeof a?a(e):a&&(a.current=e)}}:null},i=t(5007);var u=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],r=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?t(!0):t(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,n]};var l=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],r=(0,i.useRef)(null),o=function(){return t(!0)},a=function(){return t(!1)};return(0,i.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",o),e.addEventListener("mouseout",a),function(){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",a)}}),[r.current]),[r,n]};var c=function(){(0,i.useRef)(null);var e=(0,i.useState)(!1),n=e[0],t=e[1],r=l(),o=r[0],c=r[1],s=u(),d=s[0],m=s[1],f=c||m;return f!==n&&t(f),[a(o,d),n]},s=t(5007);var d=function(e){var n=c(),t=n[0],r=n[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");return s.createElement("span",{className:"HoverDefinition-module--hover-definition--UaMyO",ref:t},r?s.createElement("span",{className:"HoverDefinition-module--definition--yVWLg HoverDefinition-module--up--SLxoS"},e.definition):null,e.children)}},71:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(5007),o=t(5007),a=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var i=function(e){return void 0===e&&(e={url:url}),function(){var n=(0,r.useState)(!1),t=n[0],i=n[1],u=e,l=u.url,c=u.query,s=void 0===c?{}:c;if(e.hasOwnProperty("query")&&("object"!=typeof s||null===s||Object.keys(s).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof l)return console.warn(new Error("Expected a video url")),null;if(s.autoplay=1,!a.test(l))throw new Error("This url is invalid");var d="https://www.youtube.com/embed/"+l+"?"+Object.entries(s).map((function(e){var n=e[0],t=e[1];return n+"="+encodeURIComponent(t)})).join("&"),m=Object.assign({},e);return delete m.url,delete m.children,o.createElement("div",Object.assign({},m,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),t?null:o.createElement(r.Fragment,null,o.createElement("img",{onClick:function(){return i(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+l+"/hqdefault.jpg",alt:"Youtube Video"}),o.createElement("span",null,"▶")),o.createElement("iframe",{className:t?null:"YTVideo-module--disabled--HEa7g",src:t?d:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},7049:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var r=t(2646),o=t(2002),a=t(2472),i=t(71),u=t(5414),l=t(5007);function c(){return l.createElement("div",{className:"level-2"},l.createElement(u.q,null,l.createElement("title",null,'🚫 Lo que es "NOT" permitido'),l.createElement("meta",{name:"description",content:"¡Aprende sobre las expresiones Not con un juego simple!"})),l.createElement("h2",null,'#2.2 🚫 Lo que es "NOT" permitido'),l.createElement("br",null),l.createElement("span",{className:"introCard"},l.createElement(i.Z,{url:"Q2hX-uIs92Y",thumbnail:"/images/borat-not-joke.jpg"})),l.createElement("br",null),l.createElement("h2",null,'La operadora "not"'),l.createElement("p",null,"Ahora que hemos aprendido el ",l.createElement(o.Z,null)," OR más básico, es hora de pasar a NOT. El"," ",l.createElement(o.Z,null)," NOT devuelve falso cuando su entrada es verdadera y verdadero cuando su entrada es falsa. Puede pensar en esto como una inversión (inversión que significa que devuelve lo contrario)."),l.createElement("p",null,'Cuando juegues en el segundo nivel, asegúrate de NO seleccionar ningún color o forma que tenga el prefijo "no".'),l.createElement(r.Z,null),l.createElement(a.Z,{className:"next",to:"/toying/level-three"},"Siguiente: #2.3 💻 Booleans para aplicaciones de codificación"))}}}]);
//# sourceMappingURL=component---src-pages-toying-level-two-es-js-bcd1b0ab699db57f0d08.js.map