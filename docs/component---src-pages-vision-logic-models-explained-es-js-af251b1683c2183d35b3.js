"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[1864],{5706:function(e,a,n){var r=n(7487),t=n(5007);a.Z=function(e){return t.createElement(r.Z,Object.assign({definition:'Un "boolean" es algo que es verdadero o falso, como una pregunta de sí o no.'},e),e.children||"boolean")}},1999:function(e,a,n){var r=n(7487),t=n(5007);a.Z=function(e){return t.createElement(r.Z,Object.assign({definition:'Tu "output" es el resultado de tu modelo lógico'},e),e.children||"output")}},4788:function(e,a,n){n.d(a,{Z:function(){return l}});var r=function e(a){return Array.isArray(a)?a.some((function(a){return!e(a)})):!(null==a||!a.type)},t=n(5007),o=n(5007);var l=function(e){if(r(e.children))throw new Error("Children are required for easter :)");var a=(0,t.useState)(!1),n=a[0],l=a[1];return o.createElement(t.Fragment,null,o.createElement("span",{className:"EasterEgg-module--easterEgg--vN6A1",onClick:function(){l(!n)}},!0===n?"🐣":"🥚"),!0===n?e.children:null)}},7487:function(e,a,n){function r(e,a){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,a){if(!e)return;if("string"==typeof e)return t(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,a)}(e))||a&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,r=new Array(a);n<a;n++)r[n]=e[n];return r}n.d(a,{Z:function(){return d}});var o=function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];var t=a.filter(Boolean);return t.length?0===t.length?t[0]:function(e){for(var a,n=r(t);!(a=n()).done;){var o=a.value;"function"==typeof o?o(e):o&&(o.current=e)}}:null},l=n(5007);var i=function(){var e=(0,l.useState)(!1),a=e[0],n=e[1],r=(0,l.useRef)(null);return(0,l.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?n(!0):n(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,a]};var s=function(){var e=(0,l.useState)(!1),a=e[0],n=e[1],r=(0,l.useRef)(null),t=function(){return n(!0)},o=function(){return n(!1)};return(0,l.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",t),e.addEventListener("mouseout",o),function(){e.removeEventListener("mouseover",t),e.removeEventListener("mouseout",o)}}),[r.current]),[r,a]};var u=function(){(0,l.useRef)(null);var e=(0,l.useState)(!1),a=e[0],n=e[1],r=s(),t=r[0],u=r[1],c=i(),d=c[0],m=c[1],p=u||m;return p!==a&&n(p),[o(t,d),a]},c=n(5007);var d=function(e){var a=u(),n=a[0],r=a[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");return c.createElement("span",{className:"HoverDefinition-module--hover-definition--UaMyO",ref:n},r?c.createElement("span",{className:"HoverDefinition-module--definition--yVWLg HoverDefinition-module--up--SLxoS"},e.definition):null,e.children)}},71:function(e,a,n){n.d(a,{Z:function(){return l}});var r=n(5007),t=n(5007),o=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var l=function(e){return void 0===e&&(e={url:url}),function(){var a=(0,r.useState)(!1),n=a[0],l=a[1],i=e,s=i.url,u=i.query,c=void 0===u?{}:u;if(e.hasOwnProperty("query")&&("object"!=typeof c||null===c||Object.keys(c).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof s)return console.warn(new Error("Expected a video url")),null;if(c.autoplay=1,!o.test(s))throw new Error("This url is invalid");var d="https://www.youtube.com/embed/"+s+"?"+Object.entries(c).map((function(e){var a=e[0],n=e[1];return a+"="+encodeURIComponent(n)})).join("&"),m=Object.assign({},e);return delete m.url,delete m.children,t.createElement("div",Object.assign({},m,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),n?null:t.createElement(r.Fragment,null,t.createElement("img",{onClick:function(){return l(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+s+"/hqdefault.jpg",alt:"Youtube Video"}),t.createElement("span",null,"▶")),t.createElement("iframe",{className:"YTVideo-module--popout--baHpn"+(n?"":" YTVideo-module--disabled--HEa7g"),src:n?d:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},5661:function(e,a){a.Z=function(){var e=!1,a={onMouseOver:function(a){e=!0,a.target.play()},onMouseOut:function(){e=!1},onEnded:function(a){!0===e&&a.target.play()}};return a}},6439:function(e,a,n){n.r(a),n.d(a,{default:function(){return b}});var r=n(5706),t=n(1999),o=n(7487),l=n(5007),i=function(e){return l.createElement(o.Z,Object.assign({definition:'Esta es la "lógica" o el "código" de su modelo lógico. Las "rules" se utilizan para decidir cuál es la salida de nuestro modelo en función de la entrada'},e),e.children||"rules")},s=n(5007),u=function(e){return s.createElement(o.Z,Object.assign({definition:'Su "stack" (como un pila) es la lista de software / aplicaciones que usa para codificar'},e),e.children||"stack")},c=n(4788),d=n(2472),m=n(71),p=n(5661),f=n(6034),g=n(5414),E=n(5007);function b(){return E.createElement("div",{className:"logic-models"},E.createElement(g.q,null,E.createElement("meta",{name:"description",content:"Arranging Logic Models"}),E.createElement("title",null,"🧠 Explicación de modelos lógicos")),E.createElement("h2",null,"#1.1 🧠 Explicación de modelos lógicos"),E.createElement("br",null),E.createElement("span",{className:"introCard"},E.createElement("video",Object.assign({autoPlay:!0},(0,p.Z)(),{muted:!0}),E.createElement("source",{src:"/video/redstoneContraption.webm",type:"video/webm"})),"Minecraft es un gran lugar para comenzar tu aventura :)"),E.createElement("p",null,"A continuación, aprenderá sobre la lógica ",E.createElement(r.Z,null,"boolean")," y cómo visualizarlos. Visualizante Los sistemas lógicos son muy útiles. El mundo entero opera usando la lógica; como como haces tu trabajo, cómo cruzas la calle o cómo navegas por un sitio web. Tomamos muchas decisiones sin darnos cuenta de que los hicimos."),null,E.createElement("p",null,"Todos los modelos lógicos tienen 3 componentes básicos",E.createElement("ol",{className:f.G},E.createElement("li",null,E.createElement("span",{className:"bold"},"Datos de Entrada: "),"Una fuente de datos entrante a su modelo lógico que puede utilizar para tomar decisiones."),E.createElement("li",null,E.createElement("span",{className:"bold"},"Reglas:"),' Esta es la "lógica" o el "código" de su modelo. Las reglas se utilizan para decidir cuál es el resultado (o salida) de nuestro modelo en función de la entrada.'),E.createElement("li",null,E.createElement("span",{className:"bold"},"Datos Resultantes: "),"Cuál es el resultado de su modelo lógico.")),E.createElement("br",null),E.createElement("br",null),"Imagínese que es un ingeniero civil que intenta optimizar el flujo de tráfico en una zona muy transitada. Nuestros datos de entrada son el flujo de automóviles hacia la autopista y sus destinos previstos. Nuestro ",E.createElement(t.Z,null,"resultado")," es el flujo de automóviles que salen de la autopista. Como ingeniero civil, nuestro modelo lógico no solo marcará la diferencia cuando alguien intente ponerse a trabajar rápidamente, sino que nuestra decisión finalmente marcará la diferencia entre la vida y la muerte cuando se produzca una conducción imprudente.",E.createElement("br",null),E.createElement("br",null),"Mientras mira este video, intente darse cuenta de todos los factores a los que los ingenieros civiles deben prestar atención al diseñar carreteras."),E.createElement(m.Z,{url:"DOc0glzYYhw",thumbnail:"/images/como-se-hacen-las-carreteras.jpg"}),E.createElement("p",null,'"Eso es genial... pero ¿cómo se aplica esto a la codificación?" ¡Me alegra que hayas preguntado! Cuando estamos codificando nosotros también estamos escribiendo un sistema lógico para manejar el flujo de entrada de información (como el mouse y entrada de teclado al navegar por una página web) y el flujo de información de salida',E.createElement(t.Z,null,"salida"),' (como mostrar una página web o renderizar un videojuego). Como codificador, escribe (o "codifica") el ',E.createElement(i,null,"reglas")," lógicas del sistema (como cuando el usuario hace clic en este enlace, lo lleva a esa página). Si bien decir que inventar una computadora o una carretera desde cero puede ser increíblemente complejo, ingenieros informáticos, civiles y de todo tipo aprovechan la tecnología y metodología que ha estado en desarrollo durante mucho más tiempo del que llevamos vivos."),"Aquí hay una tabla que describe el modelo lógico que usamos cuando estamos en un semáforo. Tu cerebro proporciona las ",E.createElement(i,null,"reglas")," de toma de decisiones del modelo lógico.",E.createElement("table",{className:f.x},E.createElement("thead",null,E.createElement("th",null,"Entrada (área geográfica)"),E.createElement("th",null,"Salida (tipo de camino)")),E.createElement("tr",null,E.createElement("td",null,"Un campo relativamente plano"),E.createElement("td",null,"Un campo plano de carretera largo, recto y de rápido movimiento")),E.createElement("tr",null,E.createElement("td",null,"Una ladera empinada"),E.createElement("td",null,"Una carretera sinuosa y lenta con muchas señales")),E.createElement("tr",null,E.createElement("td",null,"Una ciudad llena de gente"),E.createElement("td",null,"Una autopista muy ancha con muchas entradas y salidas"))),E.createElement("p",null,"En codificación tenemos un conjunto de software y metodología que hace que describir nuestro sistema lógico más fácil. En el mundo del desarrollo de sitios web, a esto lo llamamos"," ",E.createElement(u,null,"pila"),". Muy parecido a un El ingeniero civil debe considerar la eficacia de un sistema de carreteras, al construir un sitio web, debe considerar muchos aspectos del sistema, como la seguridad cibernética (permitir datos de entrada inseguros ha dio lugar a muchas identidades y tarjetas de crédito robadas), la experiencia del usuario y el atractivo visual. Por Entendiendo mejor las ",E.createElement(i,null,"reglas")," lógicas detrás de nuestro software, entendemos mejor dónde está surgen problemas, evitando fugas catastróficas de la base de datos y la rabia del usuario abandona antes de que ocurrir.",E.createElement("br",null),E.createElement("br",null)),E.createElement(m.Z,{url:"qybUFnY7Y8w",query:{cc_load_policy:"0"},thumbnail:"/images/this-too-shall-pass.jpg"}),E.createElement("span",{className:"italic"},"¡Funciona perfectamente el 60% del tiempo!"),E.createElement("p",null,'Al diseñar sistemas de software, es importante pensarlo de principio a fin. La mayoría de los errores de software provienen de programadores que piensan "no es mi trabajo" o que no hacen un esfuerzo adicional para considerar los casos extremos porque "funcionó cuando lo ejecuté". Debe recordar los 3 componentes de su modelo lógico, así que primero considere la'," ",E.createElement("span",{className:"bold"},"entrada")," de su usuario. Al navegar por un sitio, el usuario da muchas entradas, como hacer clic en un enlace, desplazarse por la página, iniciar sesión o enviar un formulario.",E.createElement("br",null),E.createElement("br",null),"A continuación, debe pensar en cada paso de su código y en cómo estas"," ",E.createElement(i,null,"reglas")," manejan en última instancia las entradas de sus usuarios y las traducen en la ",E.createElement(t.Z,null,"salida")," del programa. No tome atajos ni deje problemas para que alguien más se ocupe de ellos. Construir el mejor software que puedas la primera vez (definitivamente escribirás un código desordenado al comenzar, pero después de hacer tu primer borrador de algo, intenta regresar y buscar formas de mejorarlo) te ahorrará mucho tiempo más adelante. sobre. ¡Comprenda el funcionamiento interno profundo de su"," ",E.createElement(u,null,"pila")," ",E.createElement("span",{className:"underline"},"jugando con ella y haciendo preguntas!"),E.createElement("br",null),E.createElement("br",null),"El ",E.createElement(t.Z,null)," es lo que experimentan los usuarios de su software (este es un aspecto"," ",E.createElement("span",{className:"underline"},"crítico")," de su modelo lógico), por lo que al codificar siempre debe pensar en lo que sus usuarios están tratando de lograr, y no solo en todos los posibles problemas y errores que podrían ejecutar. en, pero también cómo hacer que su software sea sencillo y conveniente. Al igual que un buen diseño de carreteras, su software debe servir de manera efectiva a sus usuarios, en lugar de obligar a sus usuarios a concentrarse en juguetear tediosamente con un software mal diseñado. Asuma la responsabilidad como ingeniero de fallas evitables y otros problemas de diseño que surjan con su software."),E.createElement(d.Z,{className:"next",to:"/toying"},"Siguiente: #2.0 🧩 Jugando con rompecabezas lógicos"),E.createElement("br",null),E.createElement("br",null),E.createElement(c.Z,null,E.createElement("p",null,"Bono: ¿Te gustó la máquina de Rube Goldberg?"),E.createElement(m.Z,{url:"Av07QiqmsoA",thumbnail:"/images/lifes-lemons.jpg"})))}},6034:function(e,a,n){n.d(a,{x:function(){return r},G:function(){return t}});var r="logic-models-explained-module--trafficStop--oj9e-",t="logic-models-explained-module--logicModelChart--mYYlH"}}]);
//# sourceMappingURL=component---src-pages-vision-logic-models-explained-es-js-af251b1683c2183d35b3.js.map