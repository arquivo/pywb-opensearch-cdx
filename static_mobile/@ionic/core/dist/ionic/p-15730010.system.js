var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(a,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function o(t){try{c(r["throw"](t))}catch(t){i(t)}}function c(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(u,o)}c((r=r.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,u;return u={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function o(t){return function(e){return c([t,e])}}function c(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(i=u[0]&2?a["return"]:u[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,u[1])).done)return i;if(a=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;a=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1];i=u;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(u);break}if(i[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(t){u=[6,t];a=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register([],function(t){"use strict";return{execute:function(){t("startHardwareBackButton",e);function e(){var t=document;var e=false;t.addEventListener("backbutton",function(){if(e){return}var r=[];var a=new CustomEvent("ionBackButton",{bubbles:false,detail:{register:function(t,e){r.push({priority:t,handler:e})}}});t.dispatchEvent(a);if(r.length>0){var i=Number.MIN_SAFE_INTEGER;var u;r.forEach(function(t){var e=t.priority,n=t.handler;if(e>=i){i=e;u=n}});e=true;n(u).then(function(){return e=false})}})}function n(t){return __awaiter(this,void 0,void 0,function(){var e,n;return __generator(this,function(r){switch(r.label){case 0:r.trys.push([0,3,,4]);if(!t)return[3,2];e=t();if(!(e!=null))return[3,2];return[4,e];case 1:r.sent();r.label=2;case 2:return[3,4];case 3:n=r.sent();console.error(n);return[3,4];case 4:return[2]}})})}}}});