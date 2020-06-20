var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function u(t){try{s(r["throw"](t))}catch(t){o(t)}}function s(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}s((r=r.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-a6904dd4.system.js","./p-45890bdd.system.js","./p-2978c157.system.js","./p-94417ec5.system.js","./p-78563a64.system.js","./p-80b537b4.system.js","./p-02ea9913.system.js"],function(t,e){"use strict";var n,r,i,o,a,u,s,c,l,h,f,d,p;return{setters:[function(t){n=t.r;r=t.d;i=t.h;o=t.H;a=t.c;u=t.e},function(t){s=t.b},function(){},function(t){c=t.o;l=t.c},function(t){h=t.e},function(t){f=t.a;d=t.d},function(t){p=t.t}],execute:function(){var v=function(){function t(t){var e=this;n(this,t);this.routerDirection="forward";this.onClick=function(t){c(e.href,t,e.routerDirection)}}t.prototype.componentDidLoad=function(){console.warn("The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.")};t.prototype.render=function(){var t;var e=r(this);var n={href:this.href,rel:this.rel};return i(o,{onClick:this.onClick,class:Object.assign({},l(this.color),(t={},t[e]=true,t["ion-activatable"]=true,t))},i("a",Object.assign({},n),i("slot",null)))};Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},enumerable:true,configurable:true});return t}();t("ion_anchor",v);var g=function(){function t(t){n(this,t);this.url="";this.ionRouteDataChanged=a(this,"ionRouteDataChanged",7)}t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)};t.prototype.onComponentProps=function(t,e){if(t===e){return}var n=t?Object.keys(t):[];var r=e?Object.keys(e):[];if(n.length!==r.length){this.onUpdate(t);return}for(var i=0,o=n;i<o.length;i++){var a=o[i];if(t[a]!==e[a]){this.onUpdate(t);return}}};t.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()};t.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()};Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:true,configurable:true});return t}();t("ion_route",g);var m=function(){function t(t){n(this,t);this.ionRouteRedirectChanged=a(this,"ionRouteRedirectChanged",7)}t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()};t.prototype.componentDidLoad=function(){this.ionRouteRedirectChanged.emit()};t.prototype.componentDidUnload=function(){this.ionRouteRedirectChanged.emit()};Object.defineProperty(t,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:true,configurable:true});return t}();t("ion_route_redirect",m);var b="root";var w="forward";var y="back";function _(t){var e=t.filter(function(t){return t.length>0}).join("/");return"/"+e}function R(t){var e=[];for(var n=0,r=t;n<r.length;n++){var i=r[n];for(var o=0,a=i.path;o<a.length;o++){var u=a[o];if(u[0]===":"){var s=i.params&&i.params[u.slice(1)];if(!s){return null}e.push(s)}else if(u!==""){e.push(u)}}}return e}function C(t,e,n,r,i,o){var a=_(D(e).concat(r));if(n){a="#"+a}if(i===w){t.pushState(o,"",a)}else{t.replaceState(o,"",a)}}function P(t,e){if(t.length>e.length){return null}if(t.length<=1&&t[0]===""){return e}for(var n=0;n<t.length;n++){if(t[n].length>0&&t[n]!==e[n]){return null}}if(e.length===t.length){return[""]}return e.slice(t.length)}function E(t,e,n){var r=t.pathname;if(n){var i=t.hash;r=i[0]==="#"?i.slice(1):""}var o=D(e);var a=D(r);return P(o,a)}function D(t){if(t==null){return[""]}var e=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0});if(e.length===0){return[""]}else{return e}}function S(t){console.group("[ion-core] ROUTES["+t.length+"]");var e=function(t){var e=[];t.forEach(function(t){return e.push.apply(e,t.path)});var n=t.map(function(t){return t.id});console.debug("%c "+_(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")};for(var n=0,r=t;n<r.length;n++){var i=r[n];e(i)}console.groupEnd()}function k(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];if(r.to){console.debug("FROM: ","$c "+_(r.from),"font-weight: bold"," TO: ","$c "+_(r.to),"font-weight: bold")}}console.groupEnd()}function L(t,e,n,r,i){if(i===void 0){i=false}return __awaiter(this,void 0,void 0,function(){var o,a,u,s;return __generator(this,function(c){switch(c.label){case 0:c.trys.push([0,6,,7]);o=H(t);if(r>=e.length||!o){return[2,i]}return[4,o.componentOnReady()];case 1:c.sent();a=e[r];return[4,o.setRouteId(a.id,a.params,n)];case 2:u=c.sent();if(u.changed){n=b;i=true}return[4,L(u.element,e,n,r+1,i)];case 3:i=c.sent();if(!u.markVisible)return[3,5];return[4,u.markVisible()];case 4:c.sent();c.label=5;case 5:return[2,i];case 6:s=c.sent();console.error(s);return[2,false];case 7:return[2]}})})}function O(t){return __awaiter(this,void 0,void 0,function(){var e,n,r,i;return __generator(this,function(o){switch(o.label){case 0:e=[];r=t;o.label=1;case 1:if(!true)return[3,5];n=H(r);if(!n)return[3,3];return[4,n.getRouteId()];case 2:i=o.sent();if(i){r=i.element;i.element=undefined;e.push(i)}else{return[3,5]}return[3,4];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}})})}function j(){if(H(document.body)){return Promise.resolve()}return new Promise(function(t){window.addEventListener("ionNavWillLoad",t,{once:true})})}var N=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function H(t){if(!t){return undefined}if(t.matches(N)){return t}var e=t.querySelector(N);return e?e:undefined}function T(t,e){var n=e.from,r=e.to;if(r===undefined){return false}if(n.length>t.length){return false}for(var i=0;i<n.length;i++){var o=n[i];if(o==="*"){return true}if(o!==t[i]){return false}}return n.length===t.length}function U(t,e){return e.find(function(e){return T(t,e)})}function W(t,e){var n=Math.min(t.length,e.length);var r=0;for(;r<n;r++){if(t[r].toLowerCase()!==e[r].id){break}}return r}function A(t,e){var n=new V(t);var r=false;var i;for(var o=0;o<e.length;o++){var a=e[o].path;if(a[0]===""){r=true}else{for(var u=0,s=a;u<s.length;u++){var c=s[u];var l=n.next();if(c[0]===":"){if(l===""){return null}i=i||[];var h=i[o]||(i[o]={});h[c.slice(1)]=l}else if(l!==c){return null}}r=false}}var f=r?r===(n.next()===""):true;if(!f){return null}if(i){return e.map(function(t,e){return{id:t.id,path:t.path,params:x(t.params,i[e])}})}return e}function x(t,e){if(!t&&e){return e}else if(t&&!e){return t}else if(t&&e){return Object.assign({},t,e)}return undefined}function I(t,e){var n=null;var r=0;var i=t.map(function(t){return t.id});for(var o=0,a=e;o<a.length;o++){var u=a[o];var s=W(i,u);if(s>r){n=u;r=s}}if(n){return n.map(function(e,n){return{id:e.id,path:e.path,params:x(e.params,t[n]&&t[n].params)}})}return null}function B(t,e){var n=null;var r=0;for(var i=0,o=e;i<o.length;i++){var a=o[i];var u=A(t,a);if(u!==null){var s=M(u);if(s>r){r=s;n=u}}}return n}function M(t){var e=1;var n=1;for(var r=0,i=t;r<i.length;r++){var o=i[r];for(var a=0,u=o.path;a<u.length;a++){var s=u[a];if(s[0]===":"){e+=Math.pow(1,n)}else if(s!==""){e+=Math.pow(2,n)}n++}}return e}var V=function(){function t(t){this.path=t.slice()}t.prototype.next=function(){if(this.path.length>0){return this.path.shift()}return""};return t}();function X(t){return Array.from(t.children).filter(function(t){return t.tagName==="ION-ROUTE-REDIRECT"}).map(function(t){var e=F(t,"to");return{from:D(F(t,"from")),to:e==null?undefined:D(e)}})}function Y(t){return G(q(t))}function q(t,e){if(e===void 0){e=t}return Array.from(e.children).filter(function(t){return t.tagName==="ION-ROUTE"&&t.component}).map(function(e){var n=F(e,"component");if(n==null){throw new Error("component missing in ion-route")}return{path:D(F(e,"url")),id:n.toLowerCase(),params:e.componentProps,children:q(t,e)}})}function F(t,e){if(e in t){return t[e]}if(t.hasAttribute(e)){return t.getAttribute(e)}return null}function G(t){var e=[];for(var n=0,r=t;n<r.length;n++){var i=r[n];$([],e,i)}return e}function $(t,e,n){var r=t.slice();r.push({id:n.id,path:n.path,params:n.params});if(n.children.length===0){e.push(r);return}for(var i=0,o=n.children;i<o.length;i++){var a=o[i];$(r,e,a)}}var J=function(){function t(t){n(this,t);this.previousPath=null;this.busy=false;this.state=0;this.lastState=0;this.root="/";this.useHash=true;this.ionRouteWillChange=a(this,"ionRouteWillChange",7);this.ionRouteDidChange=a(this,"ionRouteDidChange",7)}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:console.debug("[ion-router] router will load");return[4,j()];case 1:t.sent();console.debug("[ion-router] found nav");return[4,this.onRoutesChanged()];case 2:t.sent();return[2]}})})};t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",h(this.onRedirectChanged.bind(this),10));window.addEventListener("ionRouteDataChanged",h(this.onRoutesChanged.bind(this),100))};t.prototype.onPopState=function(){var t=this.historyDirection();var e=this.getPath();console.debug("[ion-router] URL changed -> update nav",e,t);return this.writeNavStateRoot(e,t)};t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,function(){return e.back()})};t.prototype.push=function(t,e){if(e===void 0){e="forward"}if(t.startsWith(".")){t=new URL(t,window.location.href).pathname}console.debug("[ion-router] URL pushed -> updating nav",t,e);var n=D(t);this.setPath(n,e);return this.writeNavStateRoot(n,e)};t.prototype.back=function(){window.history.back();return Promise.resolve(this.waitPromise)};t.prototype.printDebug=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){console.debug("CURRENT PATH",this.getPath());console.debug("PREVIOUS PATH",this.previousPath);S(Y(this.el));k(X(this.el));return[2]})})};t.prototype.navChanged=function(t){return __awaiter(this,void 0,void 0,function(){var e,n,r,i,o,a;return __generator(this,function(u){switch(u.label){case 0:if(this.busy){console.warn("[ion-router] router is busy, navChanged was cancelled");return[2,false]}return[4,O(window.document.body)];case 1:e=u.sent(),n=e.ids,r=e.outlet;i=Y(this.el);o=I(n,i);if(!o){console.warn("[ion-router] no matching URL for ",n.map(function(t){return t.id}));return[2,false]}a=R(o);if(!a){console.warn("[ion-router] router could not match path because some required param is missing");return[2,false]}console.debug("[ion-router] nav changed -> update URL",n,a);this.setPath(a,t);return[4,this.safeWriteNavState(r,o,b,a,null,n.length)];case 2:u.sent();return[2,true]}})})};t.prototype.onRedirectChanged=function(){var t=this.getPath();if(t&&U(t,X(this.el))){this.writeNavStateRoot(t,b)}};t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),b)};t.prototype.historyDirection=function(){var t=window;if(t.history.state===null){this.state++;t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href)}var e=t.history.state;var n=this.lastState;this.lastState=e;if(e>n){return w}else if(e<n){return y}else{return b}};t.prototype.writeNavStateRoot=function(t,e){return __awaiter(this,void 0,void 0,function(){var n,r,i,o,a;return __generator(this,function(u){if(!t){console.error("[ion-router] URL is not part of the routing set");return[2,false]}n=X(this.el);r=U(t,n);i=null;if(r){this.setPath(r.to,e);i=r.from;t=r.to}o=Y(this.el);a=B(t,o);if(!a){console.error("[ion-router] the path does not match any route");return[2,false]}return[2,this.safeWriteNavState(document.body,a,e,t,i)]})})};t.prototype.safeWriteNavState=function(t,e,n,r,i,o){if(o===void 0){o=0}return __awaiter(this,void 0,void 0,function(){var a,u,s;return __generator(this,function(c){switch(c.label){case 0:return[4,this.lock()];case 1:a=c.sent();u=false;c.label=2;case 2:c.trys.push([2,4,,5]);return[4,this.writeNavState(t,e,n,r,i,o)];case 3:u=c.sent();return[3,5];case 4:s=c.sent();console.error(s);return[3,5];case 5:a();return[2,u]}})})};t.prototype.lock=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:t=this.waitPromise;this.waitPromise=new Promise(function(t){return e=t});if(!(t!==undefined))return[3,2];return[4,t];case 1:n.sent();n.label=2;case 2:return[2,e]}})})};t.prototype.writeNavState=function(t,e,n,r,i,o){if(o===void 0){o=0}return __awaiter(this,void 0,void 0,function(){var a,u;return __generator(this,function(s){switch(s.label){case 0:if(this.busy){console.warn("[ion-router] router is busy, transition was cancelled");return[2,false]}this.busy=true;a=this.routeChangeEvent(r,i);if(a){this.ionRouteWillChange.emit(a)}return[4,L(t,e,n,o)];case 1:u=s.sent();this.busy=false;if(u){console.debug("[ion-router] route changed",r)}if(a){this.ionRouteDidChange.emit(a)}return[2,u]}})})};t.prototype.setPath=function(t,e){this.state++;C(window.history,this.root,this.useHash,t,e,this.state)};t.prototype.getPath=function(){return E(window.location,this.root,this.useHash)};t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath;var r=_(t);this.previousPath=r;if(r===n){return null}var i=e?_(e):null;return{from:n,redirectedFrom:i,to:r}};Object.defineProperty(t.prototype,"el",{get:function(){return u(this)},enumerable:true,configurable:true});return t}();t("ion_router",J);var z=function(){function t(t){var e=this;n(this,t);this.routerDirection="forward";this.onClick=function(t){c(e.href,t,e.routerDirection)}}t.prototype.render=function(){var t;var e=r(this);var n={href:this.href,rel:this.rel};return i(o,{onClick:this.onClick,class:Object.assign({},l(this.color),(t={},t[e]=true,t["ion-activatable"]=true,t))},i("a",Object.assign({},n),i("slot",null)))};Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},enumerable:true,configurable:true});return t}();t("ion_router_link",z);var K=function(){function t(t){n(this,t);this.animated=true;this.ionNavWillLoad=a(this,"ionNavWillLoad",7);this.ionNavWillChange=a(this,"ionNavWillChange",3);this.ionNavDidChange=a(this,"ionNavDidChange",3)}t.prototype.swipeHandlerChanged=function(){if(this.gesture){this.gesture.setDisabled(this.swipeHandler===undefined)}};t.prototype.componentWillLoad=function(){this.ionNavWillLoad.emit()};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t;var n=this;return __generator(this,function(r){switch(r.label){case 0:t=this;return[4,e.import("./p-72b9e86e.system.js")];case 1:t.gesture=r.sent().createSwipeBackGesture(this.el,function(){return!!n.swipeHandler&&n.swipeHandler.canStart()},function(){return n.swipeHandler&&n.swipeHandler.onStart()},function(t){return n.ani&&n.ani.progressStep(t)},function(t,e,r){if(n.ani){n.ani.progressEnd(t,e,r)}if(n.swipeHandler){n.swipeHandler.onEnd(t)}});this.swipeHandlerChanged();return[2]}})})};t.prototype.componentDidUnload=function(){this.activeEl=this.activeComponent=undefined;if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.commit=function(t,e,n){return __awaiter(this,void 0,void 0,function(){var r,i,o;return __generator(this,function(a){switch(a.label){case 0:return[4,this.lock()];case 1:r=a.sent();i=false;a.label=2;case 2:a.trys.push([2,4,,5]);return[4,this.transition(t,e,n)];case 3:i=a.sent();return[3,5];case 4:o=a.sent();console.error(o);return[3,5];case 5:r();return[2,i]}})})};t.prototype.setRouteId=function(t,e,n){return __awaiter(this,void 0,void 0,function(){var r;return __generator(this,function(i){switch(i.label){case 0:return[4,this.setRoot(t,e,{duration:n==="root"?0:undefined,direction:n==="back"?"back":"forward"})];case 1:r=i.sent();return[2,{changed:r,element:this.activeEl}]}})})};t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){t=this.activeEl;return[2,t?{id:t.tagName,element:t}:undefined]})})};t.prototype.setRoot=function(t,e,n){return __awaiter(this,void 0,void 0,function(){var r,i;return __generator(this,function(o){switch(o.label){case 0:if(this.activeComponent===t){return[2,false]}r=this.activeEl;return[4,f(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e)];case 1:i=o.sent();this.activeComponent=t;this.activeEl=i;return[4,this.commit(i,r,n)];case 2:o.sent();return[4,d(this.delegate,r)];case 3:o.sent();return[2,true]}})})};t.prototype.transition=function(t,e,n){if(n===void 0){n={}}return __awaiter(this,void 0,void 0,function(){var i,o,a,u;var c=this;return __generator(this,function(l){switch(l.label){case 0:if(e===t){return[2,false]}this.ionNavWillChange.emit();i=r(this);o=this.el;a=this.animated&&s.getBoolean("animated",true);u=this.animation||n.animationBuilder||s.get("navAnimation");return[4,p(Object.assign({mode:i,animated:a,animationBuilder:u,enteringEl:t,leavingEl:e,baseEl:o,progressCallback:n.progressAnimation?function(t){return c.ani=t}:undefined},n))];case 1:l.sent();this.ionNavDidChange.emit();return[2,true]}})})};t.prototype.lock=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:t=this.waitPromise;this.waitPromise=new Promise(function(t){return e=t});if(!(t!==undefined))return[3,2];return[4,t];case 1:n.sent();n.label=2;case 2:return[2,e]}})})};t.prototype.render=function(){return i("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return u(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{swipeHandler:["swipeHandlerChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:true,configurable:true});return t}();t("ion_router_outlet",K)}}});