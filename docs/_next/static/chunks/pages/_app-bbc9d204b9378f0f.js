(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7942:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,s=(o=n(7294))&&o.__esModule?o:{default:o},a=n(4957),c=n(9898),i=n(639);var u={};function l(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=s.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),s=n[0],c=n[1];return{href:s,as:e.as?a.resolveHref(o,e.as):c||s}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,_=e.shallow,v=e.scroll,g=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var b=(t=s.default.Children.only(h))&&"object"===typeof t&&t.ref,j=i.useIntersection({rootMargin:"200px"}),y=r(j,2),x=y[0],O=y[1],k=s.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);s.default.useEffect((function(){var e=O&&n&&a.isLocalURL(d),t="undefined"!==typeof g?g:o&&o.locale,r=u[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(o,d,p,{locale:t})}),[p,d,O,g,n,o]);var w={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,s,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:s,locale:i,scroll:c}))}(e,o,d,p,m,_,v,g)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof g?g:o&&o.locale,E=o&&o.isLocaleDomain&&a.getDomainLocale(p,N,o&&o.locales,o&&o.domainLocales);w.href=E||a.addBasePath(a.addLocale(p,N,o&&o.defaultLocale))}return s.default.cloneElement(t,w)};t.default=f},639:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,i=o.useRef(),u=o.useState(!1),l=r(u,2),f=l[0],d=l[1],p=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,s=r.observer,a=r.elements;return a.set(e,t),s.observe(e),function(){a.delete(e),s.unobserve(e),0===a.size&&(s.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!a&&!f){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),s=n(6286),a="undefined"!==typeof IntersectionObserver;var c=new Map},4010:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(4942),o=n(7294),s=n(8857),a=n.n(s),c=n(1664),i=n(2914),u=n.n(i),l=n(5893),f=function(e){var t=(0,o.useState)(!1),n=t[0],r=t[1],s=("string"==typeof e.className?e.className+" ":"")+" emoji-button "+u()["settings-button"],a=null;return n&&(a=(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)("span",{className:u()["dom-blocker"]}),(0,l.jsxs)("div",{className:u()["settings-menu"],children:[(0,l.jsx)("button",{onClick:function(){r(!1),document.body.classList.remove("disabled")},className:u().close+" emoji-button grayscale",children:"\u274c"}),(0,l.jsx)("button",{children:"Download the App!"})]})]})),(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)("button",{onClick:function(){r(!0),document.body.classList.add("disabled")},className:s,children:"\u2699\ufe0f"}),a]})},d=function(){return(0,l.jsxs)("header",{className:a()["main-header"],children:[(0,l.jsx)(c.default,{href:"/resources",children:(0,l.jsx)("a",{className:a().resources,children:"Stuck?"})}),(0,l.jsx)("h1",{className:"site-title",children:(0,l.jsx)(c.default,{href:"/",children:(0,l.jsx)("a",{className:a()["home-link"],children:"Your First RPG"})})}),(0,l.jsx)("img",{alt:"site logo",className:a()["site-icon"],src:"/images/site-icon.svg"}),null,(0,l.jsx)(f,{className:a().settings})]})},p=n(6481),h=n.n(p);n(3972),n(5673);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=e.Component,n=e.pageProps;return(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)(d,{}),(0,l.jsx)("main",{className:"page "+h().page,children:(0,l.jsx)(t,_({},n))})]})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4010)}])},5673:function(){},3972:function(){},2914:function(e){e.exports={"settings-button":"Settings_settings-button__1wgGV","settings-menu":"Settings_settings-menu__3WJK9",close:"Settings_close__1xgc-","dom-blocker":"Settings_dom-blocker__3qWTy"}},6481:function(e){e.exports={page:"_app_page__1Uxjk",title:"_app_title__1mAPh"}},8857:function(e){e.exports={"main-header":"header_main-header__3uhea",resources:"header_resources__3CG5j",settings:"header_settings__KLajV","home-link":"header_home-link__22wiF","site-icon":"header_site-icon__3Xsih"}},1664:function(e,t,n){e.exports=n(7942)},4942:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(9898)}));var n=e.O();_N_E=n}]);