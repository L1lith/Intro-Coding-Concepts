(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[114],{9295:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vision/logic-models-explained",function(){return o(8025)}])},6322:function(e,t,o){"use strict";var r=o(5893),n=o(6109),s=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){i(e,t,o[t])}))}return e}t.Z=function(e){var t=void 0===e?{url:""}:e;if("string"!==typeof t.url)throw new Error("Expected a video url");var o=a({},t);return delete o.url,delete o.children,(0,r.jsx)("div",a({},o,{className:s()["youtube-container"],children:(0,r.jsx)("iframe",{src:"https://www.youtube.com/embed/"+t.url,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}))}},8025:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return y}});var r=o(5893),n=o(1664);var s=function(){var e=!1,t={onMouseOver:function(t){e=!0,t.target.play()},onMouseOut:function(){e=!1},onEnded:function(t){!0===e&&t.target.play()}};return t},i=o(2962),a=o(6322);var l=function e(t){return Array.isArray(t)?t.some((function(t){return!e(t)})):(console.log(t),!!(null===t||void 0===t?void 0:t.type))},u=o(1525),c=o.n(u),d=o(7294);var h=function(e){if(l(e.children))throw new Error("Children are required for easter :)");var t=(0,d.useState)(!1),o=t[0],n=t[1];return(0,r.jsxs)(d.Fragment,{children:[(0,r.jsx)("span",{className:c()["easter-egg"],onClick:function(){n(!o)},children:!0===o?"\ud83d\udc23":"\ud83e\udd5a"}),!0===o?e.children:null]})};function g(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function f(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){g(e,t,o[t])}))}return e}function y(){return(0,r.jsxs)("div",{className:"logic-models",children:[(0,r.jsx)(i.PB,{description:"Arranging Logic Models",title:"\ud83e\udde0 Logic Models Explained"}),(0,r.jsx)("h2",{children:"#1.1 \ud83e\udde0 Logic Models Explained"}),(0,r.jsx)("br",{}),(0,r.jsxs)("span",{className:"intro-card",children:[(0,r.jsx)("video",f({autoPlay:!0},s(),{muted:!0,children:(0,r.jsx)("source",{src:"/video/redstoneContraption.webm",type:"video/webm"})})),"Minecraft is a great place to start your adventure :)"]}),(0,r.jsxs)("p",{children:["Next you will learn about boolean logic (boolean means something that is either true or false) logic and explain how to create a mental model when working with it. Modeling logical systems is a lot more useful than you might give it credit. The entire world is ruled by logic, like how you do your job, how you cross the street, or how you navigate a website.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Let's say for example you are at a crosswalk and you see the traffic light in the direction you are heading just turned red. It is now a fairly safe assumption that the street you are trying to cross is about to be filled with cars, and it would be a very bad idea to try to cross now. However, once that light turns green again you can assume that it's probably safe to cross (please abide by all proper safety rules, and use the crosswalk signs). The entire traffic system is designed to make the rules as efficient and safe as possible, and it is done by breaking down the logical components of the system."]}),(0,r.jsxs)("span",{className:"intro-card",children:[(0,r.jsx)("img",{src:"/images/spaghettiBowl.jpeg"}),"Nothing gets the blood pumping quite like being tail-gated around a 90\xb0 turn on the freeway.",(0,r.jsxs)("span",{className:"smaller-text",children:[" ","Credit to ",(0,r.jsx)("a",{href:"https://www.utahseagull.com/2019/10/",children:"Utah Seagull"})]})]}),(0,r.jsxs)("p",{children:["All logic models have 3 basic components",(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"bold",children:"Input Data:"}),"An incoming source of data to your logic model which you can use to make decisions."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"bold",children:"Rules:"}),' this is the the "logic" or "code" of your model. The rules decide what the result (or output) of our model is based on the input.']}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"bold",children:"Output Data: "}),"What the result of your logic model is."]})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Imagine you are a civil engineer trying to optimize the flow of traffic through a very busy area. Our input data is the flow of cars into the freeway and their intended destinations. Our output data is the flow of cars out of the freeway. As a civil engineer our logic model will not only make the difference when someone's trying to get to work quickly, but our decision will ultimately be the difference between life and death when reckless driving happens (please be a considerate driver).",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"While watching this video try to notice all the factors civil engineers must pay attention to when designing highways."]}),(0,r.jsx)(a.Z,{url:"9XIjqdk69O4"}),(0,r.jsxs)("p",{children:['"That\'s great... but how does this apply to coding?" I\'m glad you asked! When we are coding we too are writing a logic system to handle the input flow of information (like mouse and keyboard input when navigating a webpage) and the output flow of information (like displaying a webpage or rendering a video-game). As a coder you write (or "code") the logical rules of the system (like when the user clicks this link, take them to that page). While say inventing a computer or a roadway from scratch might be incredibly complex, computer, civil, and all kinds of engineers all take advantage of the technology and methodology that has been been in development for much longer than we have been alive.',(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"In coding we have a set of software and methodology that makes describing our logical system much easier. In the world of website development, we call this a"," ",(0,r.jsx)("span",{className:"bold",children:"stack"}),". Much like a civil engineer must consider the efficacy of a roadway system, when building a website we must consider many aspects of the system, like cyber safety (allowing unsafe input data has led to many stolen identities and credit cards), user experience, and visual appeal. By better understanding the logical rules behind our software we better understand where this issues arise, preventing catastrophic database leaks and user rage-quits before they ever happen.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsx)(a.Z,{url:"hZdLjyK89Cw"}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"italic",children:"it works perfectly 60% of the time!"}),(0,r.jsxs)("p",{children:['When designing software systems it\'s important to think it through from beginning to end. Most software bugs stem from coders thinking "it\'s not my job" or not putting that extra effort to consider edge cases because "it worked when I ran it". You must remember the 3 components of your logic model, so first consider your user ',(0,r.jsx)("span",{className:"bold",children:"input"}),". When navigating a site the user gives many inputs, like clicking a link, scrolling the page, logging in, or submitting a form.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Next you must think about every step in your code, and how these"," ",(0,r.jsx)("span",{className:"bold",children:"rules"})," ultimately handles your users input and translates it into the program's ",(0,r.jsx)("span",{className:"bold",children:"output"}),". Don't cut corners or leave problems for someone else to deal with. Building the best software you can the first time (you'll definitely write some messy code starting out, but after you make your first draft of something try to come back and look for ways to improve it) will save you a lot of time later on. Understand the deep inner workings of your software (or \"stack\") by"," ",(0,r.jsx)("span",{className:"underline",children:"toying around with it and asking questions"}),"!",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"The output is what the users of your software experience (this is a"," ",(0,r.jsx)("span",{className:"underline",children:"critical"})," aspect of your logic model), so when coding you must always think about what your users are trying to achieve, and not only all the possible issues and bugs they could run into, but also how to make your software straightforward and convenient. Like good road design, your software should effectively serve your users, instead of forcing your users to be focused on tediously tinkering with poorly designed software. Take responsibility as an engineer for avoidable crashes and other design issues that arise with your software."]}),(0,r.jsx)(n.default,{href:"/toying",children:(0,r.jsx)("a",{className:"next",children:"Next: #2.0 \ud83e\udde9 Playing around with Logic Puzzles"})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(h,{children:[(0,r.jsx)("p",{children:"Bonus: Liked the Rube Goldberg Machine?"}),(0,r.jsx)(a.Z,{url:"Av07QiqmsoA"})]})]})}},1525:function(e){e.exports={"easter-egg":"EasterEgg_easter-egg__1rNRT"}},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy"}}},function(e){e.O(0,[774,888,179],(function(){return t=9295,e(e.s=t);var t}));var t=e.O();_N_E=t}]);