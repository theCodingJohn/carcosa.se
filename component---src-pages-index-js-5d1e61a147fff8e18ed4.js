/*! For license information please see component---src-pages-index-js-5d1e61a147fff8e18ed4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7W2i":function(e,t,o){var n=o("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"Eh/l":function(e,t,o){e.exports=o.p+"static/pic02-ce910a45c05efb9ddefbf2f9aa5565ab.jpg"},Fxm3:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,o,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+n?(clearTimeout(o),o=setTimeout((function(){t=r,e()}),n)):(t=r,e())}};t.default=n},ILy0:function(e,t,o){e.exports=o.p+"static/pic01-5ac05903cff7fd9e6034b0f9539da51d.jpg"},Ijbi:function(e,t,o){var n=o("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Nsbk:function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,o(t)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},RIqP:function(e,t,o){var n=o("Ijbi"),r=o("EbDI"),a=o("ZhPi"),l=o("Bnag");e.exports=function(e){return n(e)||r(e)||a(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},RXBc:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),r=o.n(n),a=o("YIkO"),l=o.n(a),s=o("7oih");var i=o("dI71"),c=o("dwco"),u=o.n(c),f=function(e){return e.children},p=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(i.a)(t,e);var o=t.prototype;return o.componentDidMount=function(){u.a.polyfill()},o.handleClick=function(e){e.preventDefault();var t=0,o=!0,n=this.props,r=n.type,a=n.element,l=n.offset,s=n.timeout;if(r&&a)switch(r){case"class":o=!!(t=document.getElementsByClassName(a)[0]);break;case"id":o=!!(t=document.getElementById(a))}o?this.scrollTo(t,l,s):console.log("Element not found: "+a)},o.scrollTo=function(e,t,o){void 0===t&&(t=0),void 0===o&&(o=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;o?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),o):window.scroll({top:n+t,left:0,behavior:"smooth"})},o.render=function(){return r.a.createElement(f,null,"object"==typeof this.props.children?r.a.cloneElement(this.props.children,{onClick:this.handleClick}):r.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(r.a.Component),m=o("obyI"),d=o.n(m);function h(){return r.a.createElement("section",{id:"header"},r.a.createElement("header",{className:"major"},r.a.createElement("h1",null,d.a.heading),r.a.createElement("p",null,d.a.subHeading)),r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"actions special"},r.a.createElement("li",null,r.a.createElement(p,{type:"id",element:"one"},r.a.createElement("a",{href:"#one",className:"button primary"},"Begin"))))))}function v(){return r.a.createElement("footer",null,r.a.createElement("ul",{className:"icons"},d.a.socialLinks.map((function(e){var t=e.icon,o=e.name,n=e.url;return r.a.createElement("li",{key:n},r.a.createElement("a",{href:n,className:"icon alt "+t},r.a.createElement("span",{className:"label"},o)))}))),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"© Carcosa R&D AB 2021"),r.a.createElement("li",null,"Demo Images: ",r.a.createElement("a",{href:"http://unsplash.com"},"Unsplash"))))}var y=o("Uc+0"),g=o.n(y),b=(o("Wbzz"),[{id:"one",bg:o("ILy0")},{id:"two",bg:o("Eh/l")},{id:"three",bg:o("b3N1")}]);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(h,null),r.a.createElement("section",{id:"one",className:"main special"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"image fit primary"},r.a.createElement("img",{src:b[0].bg,alt:""})),r.a.createElement("div",{className:"content"},r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"What are we?")),r.a.createElement("p",null,"We are startup hub and Time Venture firm, investing software development time in start-up companies. Through collaboration with other passionate co-founders we build teams, products and companies with clear bussiness modelles.")),r.a.createElement(p,{type:"id",element:"two"},r.a.createElement("a",{href:"#two",className:"goto-next "},"Next")))),r.a.createElement("section",{id:"two",className:"main special"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"image fit primary"},r.a.createElement("img",{src:b[0].bg,alt:""})),r.a.createElement("div",{className:"content"},r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"Who are we?")),r.a.createElement("p",null,"We are it-entrepreneurs for life. Since early childhood we have been hacking with computers and been eager to learn more about those marvelous things. During our adult life we have been running companies and performed two exits.")),r.a.createElement(p,{type:"id",element:"three"},r.a.createElement("a",{href:"#three",className:"goto-next "},"Next")))),r.a.createElement("section",{id:"three",className:"main special"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"image fit primary"},r.a.createElement("img",{src:b[1].bg,alt:""})),r.a.createElement("div",{className:"content"},r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"What we do?")),r.a.createElement("p",null,"We build tech, proccess and systems that can be used in all companies we collaborate with. This minimizes the technology and information we need to understand and helps us to be experts in what we do."),r.a.createElement("ul",{className:"icons-grid"},r.a.createElement("li",null,r.a.createElement("span",{className:"icon major fa-code"}),r.a.createElement("h3",null,"System Development")),r.a.createElement("li",null,r.a.createElement("span",{className:"icon major fa-briefcase"}),r.a.createElement("h3",null,"Bussiness Development")),r.a.createElement("li",null,r.a.createElement("span",{className:"icon major fa-users"}),r.a.createElement("h3",null,"Team Development")),r.a.createElement("li",null,r.a.createElement("span",{className:"icon major fa-coffee"}),r.a.createElement("h3",null,"Sipping Coffee")))),r.a.createElement(p,{type:"id",element:"footer"},r.a.createElement("a",{href:"#footer",className:"goto-next "},"Next")))),r.a.createElement("section",{id:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"Contact us")),r.a.createElement("p",null,r.a.createElement("b",null,"Phone:")," 08-38 91 38.",r.a.createElement("br",null),r.a.createElement("b",null,"Email: "),"info@carcosa.se")),r.a.createElement(v,null)),r.a.createElement(l.a,{items:b.map((function(e){return e.id})),currentClassName:"active",offset:50,componentTag:"div"},b.map((function(e){return r.a.createElement("div",{key:e.id,className:"main-bg",id:e.id+"-bg",style:{backgroundImage:"url("+g.a+"), url("+e.bg+")"}})}))))}},TSYQ:function(e,t,o){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var s in n)o.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},"Uc+0":function(e,t){e.exports="data:image/png;base64,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"},W8MJ:function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n},e.exports.default=e.exports,e.exports.__esModule=!0},YIkO:function(e,t,o){"use strict";var n=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("pVnL")),a=n(o("lSNA")),l=n(o("RIqP")),s=n(o("lwsE")),i=n(o("a1gu")),c=n(o("Nsbk")),u=n(o("PJYZ")),f=n(o("W8MJ")),p=n(o("7W2i")),m=n(o("17x9")),d=n(o("q1tI")),h=n(o("TSYQ")),v=n(o("Fxm3"));var y=function(e){function t(e){var o;return(0,s.default)(this,t),(o=(0,i.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},o._handleSpy=o._handleSpy.bind((0,u.default)(o)),o}return(0,p.default)(t,e),(0,f.default)(t,null,[{key:"propTypes",get:function(){return{items:m.default.arrayOf(m.default.string).isRequired,currentClassName:m.default.string.isRequired,scrolledPastClassName:m.default.string,style:m.default.object,componentTag:m.default.oneOfType([m.default.string,m.default.elementType]),offset:m.default.number,rootEl:m.default.string,onUpdate:m.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var o=[],n=0,r=e.length;n<r;n++)o[n]=t;return o}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],o=[],n=[],r=e||this.state.targetItems,a=!1,s=0,i=r.length;s<i;s++){var c=r[s],u=!a&&this._isInView(c);u?(a=!0,t.push(c)):o.push(c);var f=s===i-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&f&&p&&(o.pop(),o.push.apply(o,(0,l.default)(t)),t=[c],n=this._fillArray(n,!1),u=!0),n.push(u)}return{inView:t,outView:o,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,o=this.props,n=o.rootEl,r=o.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var a=e.getBoundingClientRect(),l=n?t.height:window.innerHeight,s=this._getScrollDimension().scrollTop,i=s+l,c=n?a.top+s-t.top+r:a.top+s+r,u=c+e.offsetHeight;return c<i&&u>s}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),o=t.scrollTop,n=t.scrollHeight;return o+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,o=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:o.viewStatusList,isScrolledPast:o.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,o;(t=this.state.inViewState,o=e,t.length===o.length&&t.every((function(e,t){return e===o[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,o=this.props,n=o.children,l=o.className,s=o.scrolledPastClassName,i=o.style,c=0,u=d.default.Children.map(n,(function(t,o){var n;if(!t)return null;var l=t.type,i=s&&e.state.isScrolledPast[o],u=(0,h.default)((n={},(0,a.default)(n,"".concat(t.props.className),t.props.className),(0,a.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[o]),(0,a.default)(n,"".concat(e.props.scrolledPastClassName),i),n));return d.default.createElement(l,(0,r.default)({},t.props,{className:u,key:c++}),t.props.children)})),f=(0,h.default)((0,a.default)({},"".concat(l),l));return d.default.createElement(t,{className:f,style:i},u)}}]),t}(d.default.Component);t.default=y},ZhPi:function(e,t,o){var n=o("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},a1gu:function(e,t,o){var n=o("cDf5").default,r=o("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},b3N1:function(e,t,o){e.exports=o.p+"static/pic03-cb1d5ced8ddc6b435c78b0761c230d82.jpg"},dwco:function(e,t,o){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var o,n=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||s,scrollIntoView:n.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,l=(o=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var o=p(this),n=o.getBoundingClientRect(),a=this.getBoundingClientRect();o!==t.body?(d.call(this,o,o.scrollLeft+a.left-n.left,o.scrollTop+a.top-n.top),"fixed"!==e.getComputedStyle(o).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function u(t,o){var n=e.getComputedStyle(t,null)["overflow"+o];return"auto"===n||"scroll"===n}function f(e){var t=c(e,"Y")&&u(e,"Y"),o=c(e,"X")&&u(e,"X");return t||o}function p(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function m(t){var o,n,r,l,s=(a()-t.startTime)/468;l=s=s>1?1:s,o=.5*(1-Math.cos(Math.PI*l)),n=t.startX+(t.x-t.startX)*o,r=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,n,r),n===t.x&&r===t.y||e.requestAnimationFrame(m.bind(e,t))}function d(o,n,l){var i,c,u,f,p=a();o===t.body?(i=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=r.scroll):(i=o,c=o.scrollLeft,u=o.scrollTop,f=s),m({scrollable:i,method:f,startTime:p,startX:c,startY:u,x:n,y:l})}}}}()},lSNA:function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},obyI:function(e,t){e.exports={siteTitle:"Carcosa R&D",manifestName:"Highlights",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/sacred-cow.svg",pathPrefix:"/",heading:"Carcosa R&D",subHeading:"Venture Time Firm through Software Development",socialLinks:[{icon:"fa-linkedin",name:"Linkedin",url:"https://www.linkedin.com/in/carcosa-rnd"},{icon:"fa-github",name:"Github",url:"https://github.com/carcosa-rnd"},{icon:"fa-envelope-o",name:"Email",url:"mailto:info@carcosa.se"}]}}}]);
//# sourceMappingURL=component---src-pages-index-js-5d1e61a147fff8e18ed4.js.map