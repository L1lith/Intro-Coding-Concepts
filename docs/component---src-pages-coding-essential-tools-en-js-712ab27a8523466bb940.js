"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[8587],{1444:function(e,t,n){var a=n(7487),l=n(5007);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"An expression is a piece of code that can be reduced to a single value, like a math equation"},e),e.children||"expression")}},1392:function(e,t,n){var a=n(7487),l=n(5007);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"A function is a re-usable piece of code with it's own set of inputs, rules, and outputs. It's like a miniature logic model that saves us time!"},e),e.children||"function")}},4618:function(e,t,n){var a=n(7487),l=n(5007);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"Your input is data that goes into your logic model"},e),e.children||"input")}},4516:function(e,t,n){var a=n(7487),l=n(5007);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"The JavaScript interpreter is the software that runs your code, like the engine"},e),e.children||"interpreter")}},9487:function(e,t,n){var a=n(7487),l=n(5007);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"JS is short for JavaScript, the coding language"},e),e.children||"JS")}},4963:function(e,t,n){var a=n(7487),l=n(5007);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"A variable holds any kind of data you want. They have a label and value."},e),e.children||"variable")}},8901:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(1025),l=n(5007),o=n(5007);var r=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1];return o.createElement("div",{className:"ShittyChecking-module--checkingExample--f1+bO"},o.createElement("span",{className:"ShittyChecking-module--appTitle--xIu5Y"},(0,a.Z)("💸 Banking",{es:"💸 Bancario"})),o.createElement("span",{className:"ShittyChecking-module--balance---cg03"},!0===t?(0,a.Z)("Balance: Unavailable",{es:"Saldo: no disponible"}):o.createElement("button",{onClick:function(){n(!0)}},(0,a.Z)("View your Balance",{es:"Ver su Saldo"}))),o.createElement("span",{className:"ShittyChecking-module--info--KNkbV"},!0!==t?null:(0,a.Z)("Please close the app and wait for your next transaction notification.",{es:"Cierre la aplicación y espere la próxima notificación de transacción."})))}},71:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(5007),l=n(5007),o=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var r=function(e){return void 0===e&&(e={url:url}),function(){var t=(0,a.useState)(!1),n=t[0],r=t[1],i=e,s=i.url,c=i.query,u=void 0===c?{}:c;if(e.hasOwnProperty("query")&&("object"!=typeof u||null===u||Object.keys(u).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof s)return console.warn(new Error("Expected a video url")),null;if(u.autoplay=1,!o.test(s))throw new Error("This url is invalid");var m="https://www.youtube.com/embed/"+s+"?"+Object.entries(u).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&"),d=Object.assign({},e);return delete d.url,delete d.children,l.createElement("div",Object.assign({},d,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),n?null:l.createElement(a.Fragment,null,l.createElement("img",{onClick:function(){return r(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+s+"/hqdefault.jpg",alt:"Youtube Video"}),l.createElement("span",null,"▶")),l.createElement("iframe",{className:"YTVideo-module--popout--baHpn"+(n?"":" YTVideo-module--disabled--HEa7g"),src:n?m:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},7614:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(8851),l=n(1444),o=n(1392),r=n(4618),i=n(4516),s=n(9487),c=n(2325),u=n(4963),m=n(8901),d=n(2472),h=n(71),p=n(5414),E=n(5007);function f(){return E.createElement(E.Fragment,null,E.createElement(p.q,null,E.createElement("title",null,"🔨 Essential Tools"),E.createElement("meta",{name:"description",content:"Learn essential coding tools to get started in JavaScript"})),E.createElement("h1",null,"#3.2 🔨 Essential Tools"),E.createElement("span",{className:"introCard"},E.createElement(h.Z,{url:"himmatLe7aQ",query:{start:32},thumbnail:"/images/melinda-mae.jpg"}),E.createElement("span",null,"How do you swallow a coding lesson? One byte at a time")),E.createElement("p",null,"You probably have a lot of information in your head from the last section, try to do your best to connect that information with the upcoming tasks. In this section we will be learning some tools 🔨 to help us build logic models in JavaScript more effectively. Once you finish this section you will know basic coding! If you feel overwhelmed consider taking a break.",E.createElement("br",null),E.createElement("br",null),"We will also be using terminal mode instead of the ",E.createElement(l.Z,null),' evaluator mode in our editors, so you\'ll be seeing some things that say "console.log(...)", and our program output will be whatever is inside the parenthesis (this is called a ',E.createElement(o.Z,null),", there is more on this below)."),E.createElement("div",null,E.createElement("h2",null,"Variables"),E.createElement("p",null,"We can create ",E.createElement(u.Z,null,"variables")," in order to store (save) data values for later use. In a basic logic model where we only have ",E.createElement(r.Z,null,"inputs")," and"," ",E.createElement(c.Z,null,"outputs"),", so it becomes incredibly difficult to deal with data that persists (needs to be saved). Let's say you're writing a checking account app, but you're not allowed to save any data. The user might see a notification saying \"You just spent $10.52\", and yet every time they open the app they're greeted with this:",E.createElement("br",null),E.createElement("span",{className:"bold"},"(try using the app below)")),E.createElement(m.Z,null),E.createElement("p",null,"This would be so annoying! Instead of doing this we store ",E.createElement(u.Z,null,"variables")," ","in our memory (or in this case the computer's memory) by giving them names, and then we can retrieve or modify them later when we need them.",E.createElement("br",null),E.createElement("br",null),"Here we name a ",E.createElement(u.Z,null)," called balance (note we do not give it any value yet so it defaults to undefined)"),E.createElement(a.Z,{className:"mini",value:"var balance\nconsole.log(balance)",consoleMode:!0}),E.createElement("p",null,'We can set a value by using the assignment operator "=" and putting the value we want after it, and once we have done this we can see our ',E.createElement(u.Z,null)," has a value now :)"),E.createElement(a.Z,{className:"mini",value:"var balance = 14.24\nconsole.log(balance)",consoleMode:!0})),E.createElement("div",{className:"functions"},E.createElement("h2",null,"Functions"),E.createElement("p",null,E.createElement(o.Z,null,"Functions")," let you make re-usable pieces of code that serve as a tool (like a blueprint of how to do something). ",E.createElement(o.Z,null,"Functions")," have a name, a set of ",E.createElement(r.Z,null,"inputs"),", a code section, and an ",E.createElement(c.Z,null,"output"),' (we use "return" to specify the output). ',E.createElement(o.Z,null,"Functions")," can save you a lot of time because you can re-use your function multiple times with different inputs, rather than having to write that piece of code over and over."," ",E.createElement(o.Z,null,"Functions")," use parenthesis to create their inputs, and brackets (they look like this ","{}","). After we've created our ",E.createElement(o.Z,null)," we use parenthesis again to call it (calling a ",E.createElement(o.Z,null),' means to run it) The "console.log" part of our code is an example of a function (in this case to ',E.createElement(c.Z,null)," some data). This"," ",E.createElement(o.Z,null)," doesn't have to be created by us because it's given to us automatically by the ",E.createElement(i.Z,null,"JS interpreter"),". It's called (to call a ",E.createElement(o.Z,null)," ","means to run it) with parenthesis and it can do different things depending on what the"," ",E.createElement(r.Z,null)," we put inside it is (which in the previous example was the balance"," ",E.createElement(u.Z,null,"variable's")," current value)."),E.createElement("h2",null,"Addition Function"),E.createElement("p",null,"While this ",E.createElement(o.Z,null)," is mostly redundant, you could easily make a ",E.createElement(o.Z,null)," to add two numbers together."),E.createElement(a.Z,{consoleMode:!0,value:"function add(a, b){\n    return a + b\n}",className:"short"}),E.createElement("p",null,"The ",E.createElement(c.Z,null)," is empty because we didn't log anything to the console.")),E.createElement("div",{className:"console"},E.createElement("h2",null,"More about the Console"),'On the previous page I was using the "JavaScript Expression Evaluator". On the right you would see what ',E.createElement(c.Z,null)," of the ",E.createElement(i.Z,null,"JS interpreter")," evaluating the code on the left side. Normally when we're coding we are running our code from a terminal, and we see the ",E.createElement(c.Z,null)," of the console.log ",E.createElement(o.Z,null)," in real-time instead of seeing the ",E.createElement(c.Z,null)," of the ",E.createElement(s.Z,null)," code evaluation. We only need to ",E.createElement(c.Z,null)," values using console.log when we as the developer (or coder) want to know what those values are, that way our program's ",E.createElement(c.Z,null)," doesn't get super cluttered."),E.createElement(a.Z,{consoleMode:!0,value:"function add(a, b){\n    return a + b\n}\nconsole.log(add(14, 16))",className:"short"}),E.createElement("div",{className:"parenthesis"},E.createElement("h2",null,"Parenthesis"),"Not only can you use parenthesis to change the ordering of math"," ",E.createElement(l.Z,null,"expressions"),", but you can also use parenthesis to change the ordering of any other kind of ",E.createElement(l.Z,null),". Here are some example of changing the order of code evaluation using parenthesis for math and non-math purposes.",E.createElement("br",null),E.createElement("br",null),E.createElement("h3",null,"Math Without Parenthesis"),E.createElement(a.Z,{consoleMode:!0,value:"console.log(10 * 3 + 4)",className:"mini"}),E.createElement("h3",null,"Math With Parenthesis"),E.createElement(a.Z,{consoleMode:!0,value:"console.log(10 * (3 + 4))",className:"mini"}),E.createElement("h3",null,"Boolean logic without Parenthesis"),E.createElement(a.Z,{consoleMode:!0,value:"console.log(false && true || true)",className:"mini"}),E.createElement("h3",null,"Boolean logic with Parenthesis"),E.createElement(a.Z,{consoleMode:!0,value:"console.log(false && (true || true))",className:"mini"})),E.createElement("br",null),E.createElement(d.Z,{className:"next",to:"/rpg"},"Next: #4.0 Building your Text RPG"))}}}]);
//# sourceMappingURL=component---src-pages-coding-essential-tools-en-js-712ab27a8523466bb940.js.map