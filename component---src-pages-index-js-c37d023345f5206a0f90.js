/*! For license information please see component---src-pages-index-js-c37d023345f5206a0f90.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7W2i":function(e,t,a){var o=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"Eh/l":function(e,t,a){e.exports=a.p+"static/pic02-ce910a45c05efb9ddefbf2f9aa5565ab.jpg"},Fxm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){var t,a,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var n=+new Date;!!t&&n<t+o?(clearTimeout(a),a=setTimeout((function(){t=n,e()}),o)):(t=n,e())}};t.default=o},ILy0:function(e,t,a){e.exports=a.p+"static/pic01-c052a846e63f015be158148b9421d2e7.jpg"},Ijbi:function(e,t,a){var o=a("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,a(t)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},RIqP:function(e,t,a){var o=a("Ijbi"),n=a("EbDI"),l=a("ZhPi"),r=a("Bnag");e.exports=function(e){return o(e)||n(e)||l(e)||r()},e.exports.default=e.exports,e.exports.__esModule=!0},RXBc:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),l=a("YIkO"),r=a.n(l),i=a("7oih");var s=a("dI71"),c=a("dwco"),u=a.n(c),m=function(e){return e.children},p=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(s.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){u.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,o=this.props,n=o.type,l=o.element,r=o.offset,i=o.timeout;if(n&&l)switch(n){case"class":a=!!(t=document.getElementsByClassName(l)[0]);break;case"id":a=!!(t=document.getElementById(l))}a?this.scrollTo(t,r,i):console.log("Element not found: "+l)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),a):window.scroll({top:o+t,left:0,behavior:"smooth"})},a.render=function(){return n.a.createElement(m,null,"object"==typeof this.props.children?n.a.cloneElement(this.props.children,{onClick:this.handleClick}):n.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(n.a.Component),f=a("obyI"),d=a.n(f);function h(){return n.a.createElement("section",{id:"header"},n.a.createElement("header",{className:"major"},n.a.createElement("h1",null,d.a.heading),n.a.createElement("p",null,d.a.subHeading)),n.a.createElement("div",{className:"container"},n.a.createElement("ul",{className:"actions special"},n.a.createElement("li",null,n.a.createElement(p,{type:"id",element:"one"},n.a.createElement("a",{href:"#one",className:"button primary"},"Begin"))))))}function v(){return n.a.createElement("footer",null,n.a.createElement("ul",{className:"icons"},d.a.socialLinks.map((function(e){var t=e.icon,a=e.name,o=e.url;return n.a.createElement("li",{key:o},n.a.createElement("a",{href:o,className:"icon alt "+t},n.a.createElement("span",{className:"label"},a)))}))),n.a.createElement("ul",{className:"copyright"},n.a.createElement("li",null,"© Highlights"),n.a.createElement("li",null,"Design: ",n.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP")),n.a.createElement("li",null,"Demo Images: ",n.a.createElement("a",{href:"http://unsplash.com"},"Unsplash"))))}var g=a("Uc+0"),y=a.n(g),b=a("Wbzz"),E=[{id:"one",bg:a("ILy0")},{id:"two",bg:a("Eh/l")},{id:"three",bg:a("b3N1")}];t.default=function(){return n.a.createElement(i.a,null,n.a.createElement(h,null),n.a.createElement("section",{id:"one",className:"main special"},n.a.createElement("div",{className:"container"},n.a.createElement("span",{className:"image fit primary"},n.a.createElement("img",{src:E[0].bg,alt:""})),n.a.createElement("div",{className:"content"},n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,"Who I am")),n.a.createElement("p",null,"Aliquam ante ac id. Adipiscing interdum lorem praesent fusce pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed adipiscing eu amet interdum lorem blandit vis ac commodo aliquet integer vulputate phasellus lorem ipsum dolor lorem magna consequat sed etiam adipiscing interdum.")),n.a.createElement(p,{type:"id",element:"two"},n.a.createElement("a",{href:"#two",className:"goto-next "},"Next")))),n.a.createElement("section",{id:"two",className:"main special"},n.a.createElement("div",{className:"container"},n.a.createElement("span",{className:"image fit primary"},n.a.createElement("img",{src:E[1].bg,alt:""})),n.a.createElement("div",{className:"content"},n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,"Stuff I do")),n.a.createElement("p",null,"Consequat sed ultricies rutrum. Sed adipiscing eu amet interdum lorem blandit vis ac commodo aliquet vulputate."),n.a.createElement("ul",{className:"icons-grid"},n.a.createElement("li",null,n.a.createElement("span",{className:"icon major fa-camera-retro"}),n.a.createElement("h3",null,"Photography")),n.a.createElement("li",null,n.a.createElement("span",{className:"icon major fa-pencil"}),n.a.createElement("h3",null,"Blogging")),n.a.createElement("li",null,n.a.createElement("span",{className:"icon major fa-code"}),n.a.createElement("h3",null,"Web Development")),n.a.createElement("li",null,n.a.createElement("span",{className:"icon major fa-coffee"}),n.a.createElement("h3",null,"Sipping Coffee")))),n.a.createElement(p,{type:"id",element:"three"},n.a.createElement("a",{href:"#three",className:"goto-next "},"Next")))),n.a.createElement("section",{id:"three",className:"main special"},n.a.createElement("div",{className:"container"},n.a.createElement("span",{className:"image fit primary"},n.a.createElement("img",{src:E[2].bg,alt:""})),n.a.createElement("div",{className:"content"},n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,"One more thing")),n.a.createElement("p",null,"Aliquam ante ac id. Adipiscing interdum lorem praesent fusce pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed adipiscing eu amet interdum lorem blandit vis ac commodo aliquet integer vulputate phasellus lorem ipsum dolor lorem magna consequat sed etiam adipiscing interdum.")),n.a.createElement(p,{type:"id",element:"footer"},n.a.createElement("a",{href:"#footer",className:"goto-next "},"Next")))),n.a.createElement("section",{id:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,"Get in touch")),n.a.createElement("form",{method:"post",action:"#"},n.a.createElement("div",{className:"row gtr-uniform"},n.a.createElement("div",{className:"col-6 col-12-xsmall"},n.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),n.a.createElement("div",{className:"col-6 col-12-xsmall"},n.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("textarea",{name:"message",id:"message",placeholder:"Message",rows:"4"})),n.a.createElement("div",{className:"col-12"},n.a.createElement("ul",{className:"actions special"},n.a.createElement("li",null,n.a.createElement("input",{type:"submit",value:"Send Message",className:"primary"})))))),n.a.createElement(b.Link,{to:"/Elements"}," Check out Elements page")),n.a.createElement(v,null)),n.a.createElement(r.a,{items:E.map((function(e){return e.id})),currentClassName:"active",offset:50,componentTag:"div"},E.map((function(e){return n.a.createElement("div",{key:e.id,className:"main-bg",id:e.id+"-bg",style:{backgroundImage:"url("+y.a+"), url("+e.bg+")"}})}))))}},TSYQ:function(e,t,a){var o;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var l=typeof o;if("string"===l||"number"===l)e.push(o);else if(Array.isArray(o)){if(o.length){var r=n.apply(null,o);r&&e.push(r)}}else if("object"===l)if(o.toString===Object.prototype.toString)for(var i in o)a.call(o,i)&&o[i]&&e.push(i);else e.push(o.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()},"Uc+0":function(e,t){e.exports="data:image/png;base64,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"},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&a(e.prototype,t),o&&a(e,o),e},e.exports.default=e.exports,e.exports.__esModule=!0},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o},e.exports.default=e.exports,e.exports.__esModule=!0},YIkO:function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("pVnL")),l=o(a("lSNA")),r=o(a("RIqP")),i=o(a("lwsE")),s=o(a("a1gu")),c=o(a("Nsbk")),u=o(a("PJYZ")),m=o(a("W8MJ")),p=o(a("7W2i")),f=o(a("17x9")),d=o(a("q1tI")),h=o(a("TSYQ")),v=o(a("Fxm3"));var g=function(e){function t(e){var a;return(0,i.default)(this,t),(a=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,u.default)(a)),a}return(0,p.default)(t,e),(0,m.default)(t,null,[{key:"propTypes",get:function(){return{items:f.default.arrayOf(f.default.string).isRequired,currentClassName:f.default.string.isRequired,scrolledPastClassName:f.default.string,style:f.default.object,componentTag:f.default.oneOfType([f.default.string,f.default.elementType]),offset:f.default.number,rootEl:f.default.string,onUpdate:f.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,m.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],o=0,n=e.length;o<n;o++)a[o]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],o=[],n=e||this.state.targetItems,l=!1,i=0,s=n.length;i<s;i++){var c=n[i],u=!l&&this._isInView(c);u?(l=!0,t.push(c)):a.push(c);var m=i===s-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&m&&p&&(a.pop(),a.push.apply(a,(0,r.default)(t)),t=[c],o=this._fillArray(o,!1),u=!0),o.push(u)}return{inView:t,outView:a,viewStatusList:o,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(o)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,o=a.rootEl,n=a.offset;o&&(t=document.querySelector(o).getBoundingClientRect());var l=e.getBoundingClientRect(),r=o?t.height:window.innerHeight,i=this._getScrollDimension().scrollTop,s=i+r,c=o?l.top+i-t.top+n:l.top+i+n,u=c+e.offsetHeight;return c<s&&u>i}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,o=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=o}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),o=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(o)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,o=a.children,r=a.className,i=a.scrolledPastClassName,s=a.style,c=0,u=d.default.Children.map(o,(function(t,a){var o;if(!t)return null;var r=t.type,s=i&&e.state.isScrolledPast[a],u=(0,h.default)((o={},(0,l.default)(o,"".concat(t.props.className),t.props.className),(0,l.default)(o,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,l.default)(o,"".concat(e.props.scrolledPastClassName),s),o));return d.default.createElement(r,(0,n.default)({},t.props,{className:u,key:c++}),t.props.children)})),m=(0,h.default)((0,l.default)({},"".concat(r),r));return d.default.createElement(t,{className:m,style:s},u)}}]),t}(d.default.Component);t.default=g},ZhPi:function(e,t,a){var o=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},a1gu:function(e,t,a){var o=a("cDf5").default,n=a("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?n(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},b3N1:function(e,t,a){e.exports=a.p+"static/pic03-cb1d5ced8ddc6b435c78b0761c230d82.jpg"},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,o=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||i,scrollIntoView:o.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var a=p(this),o=a.getBoundingClientRect(),l=this.getBoundingClientRect();a!==t.body?(d.call(this,a,a.scrollLeft+l.left-o.left,a.scrollTop+l.top-o.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function u(t,a){var o=e.getComputedStyle(t,null)["overflow"+a];return"auto"===o||"scroll"===o}function m(e){var t=c(e,"Y")&&u(e,"Y"),a=c(e,"X")&&u(e,"X");return t||a}function p(e){for(;e!==t.body&&!1===m(e);)e=e.parentNode||e.host;return e}function f(t){var a,o,n,r,i=(l()-t.startTime)/468;r=i=i>1?1:i,a=.5*(1-Math.cos(Math.PI*r)),o=t.startX+(t.x-t.startX)*a,n=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,o,n),o===t.x&&n===t.y||e.requestAnimationFrame(f.bind(e,t))}function d(a,o,r){var s,c,u,m,p=l();a===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,m=n.scroll):(s=a,c=a.scrollLeft,u=a.scrollTop,m=i),f({scrollable:s,method:m,startTime:p,startX:c,startY:u,x:o,y:r})}}}}()},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.default=e.exports,e.exports.__esModule=!0},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},obyI:function(e,t){e.exports={siteTitle:"Carcosa R&D",manifestName:"Highlights",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/sacred-cow.svg",pathPrefix:"/",heading:"Carcosa R&D",subHeading:"System Development",socialLinks:[{icon:"fa-linkedin",name:"Linkedin",url:"https://www.linkedin.com/in/carcosa-rnd"},{icon:"fa-github",name:"Github",url:"https://github.com/carcosa-rnd"},{icon:"fa-envelope-o",name:"Email",url:"mailto:info@carcosa.se"}]}}}]);
//# sourceMappingURL=component---src-pages-index-js-c37d023345f5206a0f90.js.map