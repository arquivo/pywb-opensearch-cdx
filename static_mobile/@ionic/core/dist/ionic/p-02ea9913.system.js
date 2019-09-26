var __awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))(function(i,a){function o(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r["throw"](e))}catch(e){a(e)}}function u(e){e.done?i(e.value):new t(function(n){n(e.value)}).then(o,s)}u((r=r.apply(e,n||[])).next())})};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(n){return u([e,n])}}function u(o){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;i=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){t.label=o[1];break}if(o[0]===6&&t.label<a[1]){t.label=a[1];a=o;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(o);break}if(a[2])t.ops.pop();t.trys.pop();continue}o=n.call(e,t)}catch(e){o=[6,e];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-a6904dd4.system.js","./p-2978c157.system.js"],function(e,n){"use strict";var t,r,i,a,o;return{setters:[function(e){t=e.w},function(e){r=e.b;i=e.L;a=e.a;o=e.c}],execute:function(){e({d:k,l:y,s:x,t:c});var s=function(){return n.import("./p-7001a4e6.system.js")};var u=function(){return n.import("./p-dfa17f20.system.js")};function c(e){return new Promise(function(n,r){t(function(){l(e);f(e).then(function(t){if(t.animation){t.animation.destroy()}d(e);n(t)},function(n){d(e);r(n)})})})}function l(e){var n=e.enteringEl;var t=e.leavingEl;C(n,t,e.direction);if(e.showGoBack){n.classList.add("can-go-back")}else{n.classList.remove("can-go-back")}x(n,false);if(t){x(t,false)}}function f(e){return __awaiter(this,void 0,void 0,function(){var n,t;return __generator(this,function(r){switch(r.label){case 0:return[4,v(e)];case 1:n=r.sent();t=n?h(n,e):p(e);return[2,t]}})})}function d(e){var n=e.enteringEl;var t=e.leavingEl;n.classList.remove("ion-page-invisible");if(t!==undefined){t.classList.remove("ion-page-invisible")}}function v(e){return __awaiter(this,void 0,void 0,function(){var n,t;return __generator(this,function(r){switch(r.label){case 0:if(!e.leavingEl||!e.animated||e.duration===0){return[2,undefined]}if(e.animationBuilder){return[2,e.animationBuilder]}if(!(e.mode==="ios"))return[3,2];return[4,s()];case 1:t=r.sent().iosTransitionAnimation;return[3,4];case 2:return[4,u()];case 3:t=r.sent().mdTransitionAnimation;r.label=4;case 4:n=t;return[2,n]}})})}function h(e,t){return __awaiter(this,void 0,void 0,function(){var r;return __generator(this,function(i){switch(i.label){case 0:return[4,m(t,true)];case 1:i.sent();return[4,n.import("./p-92a1505a.system.js").then(function(n){return n.create(e,t.baseEl,t)})];case 2:r=i.sent();_(t.enteringEl,t.leavingEl);return[4,g(r,t)];case 3:i.sent();if(t.progressCallback){t.progressCallback(undefined)}if(r.hasCompleted){w(t.enteringEl,t.leavingEl)}return[2,{hasCompleted:r.hasCompleted,animation:r}]}})})}function p(e){return __awaiter(this,void 0,void 0,function(){var n,t;return __generator(this,function(r){switch(r.label){case 0:n=e.enteringEl;t=e.leavingEl;return[4,m(e,false)];case 1:r.sent();_(n,t);w(n,t);return[2,{hasCompleted:true}]}})})}function m(e,n){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(i){switch(i.label){case 0:t=e.deepWait!==undefined?e.deepWait:n;r=t?[k(e.enteringEl),k(e.leavingEl)]:[E(e.enteringEl),E(e.leavingEl)];return[4,Promise.all(r)];case 1:i.sent();return[4,b(e.viewIsReady,e.enteringEl)];case 2:i.sent();return[2]}})})}function b(e,n){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:if(!e)return[3,2];return[4,e(n)];case 1:t.sent();t.label=2;case 2:return[2]}})})}function g(e,n){var t=n.progressCallback;var r=new Promise(function(n){return e.onFinish(n)});if(t){e.progressStart();t(e)}else{e.play()}return r}function _(e,n){y(n,r);y(e,i)}function w(e,n){y(e,a);y(n,o)}function y(e,n){if(e){var t=new CustomEvent(n,{bubbles:false,cancelable:false});e.dispatchEvent(t)}}function E(e){if(e&&e.componentOnReady){return e.componentOnReady()}return Promise.resolve()}function k(e){return __awaiter(this,void 0,void 0,function(){var n,t;return __generator(this,function(r){switch(r.label){case 0:n=e;if(!n)return[3,4];if(!(n.componentOnReady!=null))return[3,2];return[4,n.componentOnReady()];case 1:t=r.sent();if(t!=null){return[2]}r.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(k))];case 3:r.sent();r.label=4;case 4:return[2]}})})}function x(e,n){if(n){e.setAttribute("aria-hidden","true");e.classList.add("ion-page-hidden")}else{e.hidden=false;e.removeAttribute("aria-hidden");e.classList.remove("ion-page-hidden")}}function C(e,n,t){if(e!==undefined){e.style.zIndex=t==="back"?"99":"101"}if(n!==undefined){n.style.zIndex="100"}}}}});