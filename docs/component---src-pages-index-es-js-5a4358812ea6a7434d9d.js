"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[171],{2497:function(e,t,n){var r=n(7487),o=n(5007);t.Z=function(e){return o.createElement(r.Z,Object.assign({definition:'"RPG" significa Role Playing Game, que es una especie de juego de aventuras.'},e),e.children||"RPG")}},7487:function(e,t,n){function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return d}});var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.filter(Boolean);return o.length?0===o.length?o[0]:function(e){for(var t,n=r(o);!(t=n()).done;){var a=t.value;"function"==typeof a?a(e):a&&(a.current=e)}}:null},i=n(5007);var u=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?n(!0):n(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,t]};var l=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=(0,i.useRef)(null),o=function(){return n(!0)},a=function(){return n(!1)};return(0,i.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",o),e.addEventListener("mouseout",a),function(){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",a)}}),[r.current]),[r,t]};var c=function(){(0,i.useRef)(null);var e=(0,i.useState)(!1),t=e[0],n=e[1],r=l(),o=r[0],c=r[1],s=u(),d=s[0],m=s[1],f=c||m;return f!==t&&n(f),[a(o,d),t]},s=n(5007);var d=function(e){var t=c(),n=t[0],r=t[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");return s.createElement("span",{className:"HoverDefinition-module--hover-definition--UaMyO",ref:n},r?s.createElement("span",{className:"HoverDefinition-module--definition--yVWLg HoverDefinition-module--up--SLxoS"},e.definition):null,e.children)}},71:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(5007),o=n(5007),a=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var i=function(e){return void 0===e&&(e={url:url}),function(){var t=(0,r.useState)(!1),n=t[0],i=t[1],u=e,l=u.url,c=u.query,s=void 0===c?{}:c;if(e.hasOwnProperty("query")&&("object"!=typeof s||null===s||Object.keys(s).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof l)return console.warn(new Error("Expected a video url")),null;if(s.autoplay=1,!a.test(l))throw new Error("This url is invalid");var d="https://www.youtube.com/embed/"+l+"?"+Object.entries(s).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&"),m=Object.assign({},e);return delete m.url,delete m.children,o.createElement("div",Object.assign({},m,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),n?null:o.createElement(r.Fragment,null,o.createElement("img",{onClick:function(){return i(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+l+"/hqdefault.jpg",alt:"Youtube Video"}),o.createElement("span",null,"▶")),o.createElement("iframe",{className:n?null:"YTVideo-module--disabled--HEa7g",src:n?d:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},627:function(e,t,n){n.r(t);var r=n(2497),o=n(2472),a=n(71),i=n(1859),u=n(5414),l=n(5007);t.default=function(){return l.createElement("div",{className:i.LE},l.createElement(u.q,null,l.createElement("title",null,"Tu Primer Juego RPG"),l.createElement("meta",{name:"description",content:"¡Aprende a crear tu propio juego de aventuras en línea y compártelo con tus amigos!"})),l.createElement("h1",{className:i.TN},l.createElement("span",{className:i.yG},"Introducción a la codificación:"),l.createElement("br",null)," Tu Primer Juego RPG"),l.createElement("h2",null,"¿Que aprenderás?"),l.createElement("p",null,"En este curso explicaré los conceptos básicos de la codificación en JavaScript. Harás tu propio juego ",l.createElement(r.Z,null)," basado en texto que podrás compartir con tus amigos 😃 Espero poder hacer que aprender a codificar sea simple para ti."),l.createElement("h2",null,"¿Por qué este curso?"),l.createElement("p",null,"Diseñé este curso para que sea fácil de entender y fácil de comenzar. no necesitas para instalar cualquier cosa, y funciona en dispositivos móviles y ordenadores más baratos. yo también he usado juegos y videos para que sea una experiencia más atractiva e interactiva."),l.createElement("h2",null,"Secciones"),l.createElement("ol",{className:"toc sections"},l.createElement("li",null,l.createElement(o.Z,{to:"/vision"},"👀 Visualización de modelos lógicos")),l.createElement("li",null,l.createElement(o.Z,{to:"/toying"},"👐 Jugando con modelos lógicos")),l.createElement("li",null,l.createElement(o.Z,{to:"/coding"},"💻 Aprendiendo a codificar")),l.createElement("li",null,l.createElement(o.Z,{to:"/rpg"},"🎮 Construyendo un juego!"))),l.createElement(o.Z,{to:"/resources"},"Recuerde consultar la sección de recursos si se queda atascado"),l.createElement("div",{className:i.bO},l.createElement("h2",null,"¿Miedo a la codificación? ¡No lo seas!"),"Echa un vistazo a esta inspiradora charla de Linda Liukas",l.createElement(a.Z,{url:"-jRREn6ifEQ",query:{cc_lang_pref:"es",cc_load_policy:"1"},thumbnail:"/images/poetry-of-programming.jpg"})),l.createElement(o.Z,{className:"next",to:"/vision"},"Get Started: 🗺️ Planning it out"))}},1859:function(e,t,n){n.d(t,{LE:function(){return r},TN:function(){return o},bO:function(){return a},yG:function(){return i}});var r="index-module--home--Vytd+",o="index-module--title--dmrol",a="index-module--extra--4t5rN",i="index-module--small--CNF4P"}}]);
//# sourceMappingURL=component---src-pages-index-es-js-5a4358812ea6a7434d9d.js.map