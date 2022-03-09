"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[6565],{5706:function(e,a,n){var l=n(7487),t=n(5007);a.Z=function(e){return t.createElement(l.Z,Object.assign({definition:'Un "boolean" es algo que es verdadero o falso, como una pregunta de sí o no.'},e),e.children||"boolean")}},880:function(e,a,n){var l=n(7487),t=n(5007);a.Z=function(e){return t.createElement(l.Z,Object.assign({definition:'Una "expression" es un fragmento de código que se puede reducir a un solo valor, como una ecuación matemática'},e),e.children||"expression")}},5369:function(e,a,n){var l=n(7487),t=n(5007);a.Z=function(e){return t.createElement(l.Z,Object.assign({definition:'Tu "input" son datos que entran en tu modelo lógico'},e),e.children||"input")}},1103:function(e,a,n){var l=n(7487),t=n(5007);a.Z=function(e){return t.createElement(l.Z,Object.assign({definition:'El "JavaScript Interpreter" es el software que ejecuta su código, como el motor'},e),e.children||"interpreter")}},8016:function(e,a,n){var l=n(7487),t=n(5007);a.Z=function(e){return t.createElement(l.Z,Object.assign({definition:"JS es la abreviatura de JavaScript, el lenguaje de codificación"},e),e.children||"JS")}},2002:function(e,a,n){var l=n(7487),t=n(5007);a.Z=function(e){return t.createElement(l.Z,Object.assign({definition:'Un "operador" es una acción en la codificación que ingresa y genera datos, como comparar dos valores booleanos o sumar dos números.'},e),e.children||"operator")}},1999:function(e,a,n){var l=n(7487),t=n(5007);a.Z=function(e){return t.createElement(l.Z,Object.assign({definition:'Tu "output" es el resultado de tu modelo lógico'},e),e.children||"output")}},818:function(e,a,n){var l=n(7487),t=n(5007);a.Z=function(e){return t.createElement(l.Z,Object.assign({definition:'Una "cadena" es un fragmento de texto humano que su computadora sabe que no es código, pero aún puede usarse en su código'},e),e.children||"string")}},8989:function(e,a,n){var l=n(7487),t=n(5007);a.Z=function(e){return t.createElement(l.Z,Object.assign({definition:'Una "variable" contiene cualquier tipo de datos que desee. Tienen etiqueta y valor.'},e),e.children||"variable")}},71:function(e,a,n){n.d(a,{Z:function(){return o}});var l=n(5007),t=n(5007),r=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var o=function(e){return void 0===e&&(e={url:url}),function(){var a=(0,l.useState)(!1),n=a[0],o=a[1],i=e,s=i.url,c=i.query,u=void 0===c?{}:c;if(e.hasOwnProperty("query")&&("object"!=typeof u||null===u||Object.keys(u).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof s)return console.warn(new Error("Expected a video url")),null;if(u.autoplay=1,!r.test(s))throw new Error("This url is invalid");var m="https://www.youtube.com/embed/"+s+"?"+Object.entries(u).map((function(e){var a=e[0],n=e[1];return a+"="+encodeURIComponent(n)})).join("&"),d=Object.assign({},e);return delete d.url,delete d.children,t.createElement("div",Object.assign({},d,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),n?null:t.createElement(l.Fragment,null,t.createElement("img",{onClick:function(){return o(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+s+"/hqdefault.jpg",alt:"Youtube Video"}),t.createElement("span",null,"▶")),t.createElement("iframe",{className:"YTVideo-module--popout--baHpn"+(n?"":" YTVideo-module--disabled--HEa7g"),src:n?m:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},4836:function(e,a,n){n.r(a);var l=n(8851),t=n(5706),r=n(880),o=n(5369),i=n(1103),s=n(8016),c=n(2002),u=n(1999),m=n(818),d=n(8989),p=n(2472),E=n(71),v=n(865),f=n(5414),b=n(5007);a.default=function(){return b.createElement("div",{className:v.S},b.createElement(f.q,null,b.createElement("title",null,"📊 Tipos de datos básicos"),b.createElement("meta",{name:"description",content:"Más información sobre los diferentes tipos de datos en JavaScript "})),b.createElement("h2",null,"#3.1 📊 Tipos de datos básicos"),b.createElement("br",null),b.createElement("span",{className:"introCard"},b.createElement(E.Z,{url:"_4TPlwwHM8Q",thumbnail:"/images/blender-horror.jpg"}),b.createElement("span",null,"Puede leer más"," ",b.createElement("a",{target:"_blank",href:"https://www.tecnologia-informatica.com/el-sistema-binario/"},"aquí")," ","si desea una explicación más detallada sobre cómo los valores binarios se convierten en tipos de datos más complejos.")),b.createElement("br",null),b.createElement("p",null,"En esta sección, pasaremos de trabajar solo con lógica ",b.createElement(t.Z,null)," a escribir JavaScript que funcione. Los primitivos son los tipos básicos de datos en JavaScript. Hefre son las primitivas básicas:"),b.createElement("ul",{className:v.j},b.createElement("li",null,b.createElement(t.Z,null,"Boolean")),b.createElement("li",null,"Number"),b.createElement("li",null,b.createElement(m.Z,null,"String")),b.createElement("li",null,"undefined"),b.createElement("li",null,"null")),b.createElement("p",null,"Ahora detallaré cada tipo de datos y sus ",b.createElement(c.Z,null,"operators"),", luego, en la página siguiente, proporcionaré más ejemplos de cómo se pueden usar juntos. Además, puede editar la"," ",b.createElement(o.Z,null)," de todos los ejemplos de código a continuación. Si su sintaxis no es válida (esto significa que su gramática de codificación es incorrecta), recibirá un error en lugar de la"," ",b.createElement(u.Z,null)," que esperaba porque el ",b.createElement(i.Z,null,"JS interpreter")," se confundirá.",b.createElement("br",null),b.createElement("br",null),"El lado izquierdo del editor es el código que le damos al ",b.createElement(i.Z,null),' y el lado derecho es el resultado que nos da. Actualmente estamos en el modo "',b.createElement(r.Z,null,"Expression")," ",'Evaluator", lo que significa que tomará cualquier código que esté en el lado izquierdo y lo reducirá a un solo valor en el lado derecho.'),b.createElement("div",{className:"type boolean"},b.createElement("h2",null,"Booleans"),b.createElement("p",null,"JavaScript tiene soporte integrado para ",b.createElement(t.Z,null,"booleans"),"."),b.createElement(l.Z,{value:"true",className:"mini"}),b.createElement(l.Z,{value:"false",className:"mini"}),b.createElement("h3",null,"Or Operations"),b.createElement("p",null,"El ",b.createElement(c.Z,null),' "Or" se escribe como "||" en JavaScript, y se usa para comparar dos valores'," ",b.createElement(t.Z,null,"booleans"),". Devuelve verdadero si alguno de los valores"," ",b.createElement(t.Z,null,"booleans")," al lado es verdadero; de lo contrario, devuelve falso."),b.createElement(l.Z,{value:"true || false",className:"mini"}),b.createElement(l.Z,{value:"false || true",className:"mini"}),b.createElement(l.Z,{value:"false || false",className:"mini"}),b.createElement("h3",null,"Not Operations"),b.createElement("p",null,"El ",b.createElement(c.Z,null),' "No" se escribe como "!" en JavaScript, y devuelve lo contrario.'),b.createElement(l.Z,{value:"!true",className:"mini"}),b.createElement(l.Z,{value:"!false",className:"mini"}),b.createElement("h3",null,"And Operations"),b.createElement("p",null,"El ",b.createElement(c.Z,null),' "Y" está escrito como "&&" en JavaScript. Devuelve verdadero si los dos valores ',b.createElement(t.Z,null,"booleans")," junto a él son verdaderos; de lo contrario, devuelve falso."),b.createElement(l.Z,{value:"true && true",className:"mini"}),b.createElement(l.Z,{value:"true && false",className:"mini"}),b.createElement(l.Z,{value:"false && false",className:"mini"})),b.createElement("div",{className:"type numbers"},b.createElement("h2",null,"Numbers"),b.createElement("p",null,"Los Numbers pueden ser enteros (números enteros como 33) o flotantes (es decir, decimales como 45.512). Algunas operaciones básicas son sumar, multiplicar, dividir y restar. Además de cambiar los números, también puede compararlos (usando símbolos como >, <, or ≥) para ",b.createElement(u.Z,null)," valores ",b.createElement(t.Z,null),"."),b.createElement("h3",null,"Adición/Sustracción"),b.createElement(l.Z,{value:"12 + 12",className:"mini"}),b.createElement(l.Z,{value:"30 - 12",className:"mini"}),b.createElement("h3",null,"Mayor Que y Menor Que"),b.createElement("p",null,"Los ",b.createElement(c.Z,null,"operators")," mayor que y menor que devuelven valores ",b.createElement(t.Z,null),"."),b.createElement(l.Z,{value:"12 > 10",className:"mini"}),b.createElement(l.Z,{value:"12 < 10",className:"mini"}),b.createElement(l.Z,{value:"5 >= 5",className:"mini"}),b.createElement(l.Z,{value:"6 <= 5",className:"mini"}),b.createElement("h3",null,"Multiplicar/Dividir"),b.createElement(l.Z,{value:"32 * 11",className:"mini"}),b.createElement(l.Z,{value:"4 / 12",className:"mini"})),b.createElement("div",{className:"type strings"},b.createElement("h2",null,"Strings"),b.createElement("p",null,"Las ",b.createElement(m.Z,null,"strings")," son colecciones de texto (como el nombre de alguien, una dirección, etc.). Se escriben rodeando el texto entre comillas simples o dobles."),b.createElement(l.Z,{value:'"me gusta la leche chocolatada"',className:"mini"}),b.createElement(l.Z,{value:"'me llamo Jeff'",className:"mini"}),b.createElement("p",null,"También se pueden sumar (simplemente se juntan, no se suman como números)"),b.createElement(l.Z,{value:"'beep' + 'bop'",className:"mini"}),b.createElement(l.Z,{value:"'9' + '10'",className:"mini"})),b.createElement("div",{className:"type undefined"},b.createElement("h2",null,"undefined"),b.createElement("p",null,"El valor undefined se utiliza para representar un valor al que no se le ha asignado nada más. Es básicamente el valor de marcador de posición universal. Indefinido es el valor dado a las ",b.createElement(d.Z,null,"variables")," si no les damos un valor nosotros mismos."),b.createElement(l.Z,{value:"undefined",className:"mini"})),b.createElement("div",{className:"type null"},b.createElement("h2",null,"null"),b.createElement("p",null,'El valor nulo se utiliza para representar el valor "null". Es diferente de undefined porque significa que el codificador intencionalmente lo convirtió en nada en lugar de que solo sea un valor faltante.'),b.createElement(l.Z,{value:"null",className:"mini"})),b.createElement("div",{className:"equality"},b.createElement("h2",null,"Equality"),b.createElement("p",null,"Para comprobar si dos valores son exactamente iguales podemos utilizar el ",b.createElement(c.Z,null),' de igualdad estricta "==="'),b.createElement(l.Z,{value:"1 === 1",className:"mini"}),b.createElement(l.Z,{value:'1 === "1"',className:"mini"}),b.createElement(l.Z,{value:"1 === 1.1",className:"mini"})),b.createElement("br",null),b.createElement("p",null,"En la siguiente sección usaremos estos valores primitivos para que pueda ver un poco más por qué son útiles. Puede leer con más detalle sobre los tipos de datos de ",b.createElement(s.Z,null,"JS")," ",b.createElement("a",{target:"_blank",href:"https://es.javascript.info/types"},"aquí")),b.createElement(p.Z,{className:"next",to:"/coding/essential-tools"},"Siguiente: #3.2 Herramientas esenciales"))}},865:function(e,a,n){n.d(a,{S:function(){return l},j:function(){return t}});var l="primitives-module--primitives--i5iJX",t="primitives-module--primitivesList--+RJSn"}}]);
//# sourceMappingURL=component---src-pages-coding-primitives-es-js-37e3920e3b21099742ec.js.map