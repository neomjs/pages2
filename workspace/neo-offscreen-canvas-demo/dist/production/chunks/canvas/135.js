(self.webpackChunkneo_offscreen_canvas_demo=self.webpackChunkneo_offscreen_canvas_demo||[]).push([[135],{4135:function(t,n,e){!function(t,n,e,r){"use strict";function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){var t=1,e=20,r=.1,u=.1,o=n.randomNormal(),i=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=t/e,a=[],c=0;c<e+1;c++){a.push(n);var s=o()*Math.sqrt(i)*u+(r-u*u/2)*i;n*=Math.exp(s)}return a};return i.period=function(){return arguments.length?(t=arguments.length<=0?void 0:arguments[0],i):t},i.steps=function(){return arguments.length?(e=arguments.length<=0?void 0:arguments[0],i):e},i.mu=function(){return arguments.length?(r=arguments.length<=0?void 0:arguments[0],i):r},i.sigma=function(){return arguments.length?(u=arguments.length<=0?void 0:arguments[0],i):u},i.random=function(){return arguments.length?(o=arguments.length<=0?void 0:arguments[0],i):o},i}function i(t){return"function"==typeof t?t:function(){return t}}t.randomFinancial=function(){var t=new Date,a=100,c=r.timeDay,s=1,f=r.timeYear,l=1,h=null,d=function(){var t=n.randomNormal(1,.1);return Math.ceil(1e3*t())},g=o(),m=function(t,n){var e,r,u=(e=t,r=f.offset(e,l)-e,(c.offset(e,s)-e)/r),o=g.period(u)(n),i={date:t,open:o[0],high:Math.max.apply(Math,o),low:Math.min.apply(Math,o),close:o[g.steps()]};return i.volume=d(i),i},v=function(n){var e,r,u;do{e=n?c.offset(n.date,s):new Date(t.getTime()),r=n?n.close:a,n=m(e,r),u=h&&!h(n)}while(u);return n},M=function(){var t,n={next:function(){var n=v(t);return t=n,n},take:function(t){return n.until((function(n,e){return!t||t<0||e===t}))},until:function(n){for(var e=[],r=0,u=v(t),o=n&&!n(u,r);o;)e.push(u),u=v(t=u),r+=1,o=n&&!n(u,r);return e}};return n},y=function(t){return M().take(t)};if(y.stream=M,"function"!=typeof Symbol||"symbol"!==u(Symbol.iterator))throw new Error("d3fc-random-data depends on Symbol. Make sure that you load a polyfill in older browsers. See README.");return y[Symbol.iterator]=function(){var t=M();return{next:function(){return{value:t.next(),done:!1}}}},y.startDate=function(){return arguments.length?(t=arguments.length<=0?void 0:arguments[0],y):t},y.startPrice=function(){return arguments.length?(a=arguments.length<=0?void 0:arguments[0],y):a},y.interval=function(){return arguments.length?(c=arguments.length<=0?void 0:arguments[0],y):c},y.intervalStep=function(){return arguments.length?(s=arguments.length<=0?void 0:arguments[0],y):s},y.unitInterval=function(){return arguments.length?(f=arguments.length<=0?void 0:arguments[0],y):f},y.unitIntervalStep=function(){return arguments.length?(l=arguments.length<=0?void 0:arguments[0],y):l},y.filter=function(){return arguments.length?(h=arguments.length<=0?void 0:arguments[0],y):h},y.volume=function(){return arguments.length?(d=i(arguments.length<=0?void 0:arguments[0]),y):d},e.rebindAll(y,g),y},t.randomGeometricBrownianMotion=o,t.randomSkipWeekends=function(t){var n=t.date.getDay();return!(0===n||6===n)},Object.defineProperty(t,"__esModule",{value:!0})}(n,e(9067),e(741),e(9712))},741:(t,n,e)=>{"use strict";e.r(n),e.d(n,{exclude:()=>i,include:()=>a,includeMap:()=>c,prefix:()=>s,rebind:()=>r.Z,rebindAll:()=>u.Z});var r=e(6275),u=e(6505);const o=t=>t.map((t=>"string"==typeof t?new RegExp(`^${t}$`):t)),i=(...t)=>(t=o(t),n=>t.every((t=>!t.test(n)))&&n),a=(...t)=>(t=o(t),n=>t.some((t=>t.test(n)))&&n),c=t=>n=>t[n],s=t=>n=>{return t+((e=n)[0].toUpperCase()+e.slice(1));var e}},3274:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});const r=(t,n,e)=>{const r=n[e];if("function"!=typeof r)throw new Error(`Attempt to rebind ${e} which isn't a function on the source object`);return(...e)=>{var u=r.apply(n,e);return u===n?t:u}}},6275:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var r=e(3274);const u=(t,n,...e)=>{for(const u of e)t[u]=(0,r.Z)(t,n,u);return t}},6505:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var r=e(3274);const u=(t,n,...e)=>{const u=(t=>n=>t.reduce(((t,n)=>t&&n(t)),n))(e);for(const e of Object.keys(n)){const o=u(e);o&&(t[o]=(0,r.Z)(t,n,e))}return t}},9757:(t,n,e)=>{"use strict";function r(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}e.d(n,{Z:()=>r})},477:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var r=e(9757);function u(t){let n=t,e=t;function u(t,n,r,u){for(null==r&&(r=0),null==u&&(u=t.length);r<u;){const o=r+u>>>1;e(t[o],n)<0?r=o+1:u=o}return r}return 1===t.length&&(n=(n,e)=>t(n)-e,e=function(t){return(n,e)=>(0,r.Z)(t(n),e)}(t)),{left:u,center:function(t,e,r,o){null==r&&(r=0),null==o&&(o=t.length);const i=u(t,e,r,o-1);return i>r&&n(t[i-1],e)>-n(t[i],e)?i-1:i},right:function(t,n,r,u){for(null==r&&(r=0),null==u&&(u=t.length);r<u;){const o=r+u>>>1;e(t[o],n)>0?u=o:r=o+1}return r}}}},3896:(t,n,e)=>{"use strict";e.d(n,{ZP:()=>i,G9:()=>a,ly:()=>c});var r=Math.sqrt(50),u=Math.sqrt(10),o=Math.sqrt(2);function i(t,n,e){var r,u,o,i,c=-1;if(e=+e,(t=+t)==(n=+n)&&e>0)return[t];if((r=n<t)&&(u=t,t=n,n=u),0===(i=a(t,n,e))||!isFinite(i))return[];if(i>0){let e=Math.round(t/i),r=Math.round(n/i);for(e*i<t&&++e,r*i>n&&--r,o=new Array(u=r-e+1);++c<u;)o[c]=(e+c)*i}else{i=-i;let e=Math.round(t*i),r=Math.round(n*i);for(e/i<t&&++e,r/i>n&&--r,o=new Array(u=r-e+1);++c<u;)o[c]=(e+c)/i}return r&&o.reverse(),o}function a(t,n,e){var i=(n-t)/Math.max(0,e),a=Math.floor(Math.log(i)/Math.LN10),c=i/Math.pow(10,a);return a>=0?(c>=r?10:c>=u?5:c>=o?2:1)*Math.pow(10,a):-Math.pow(10,-a)/(c>=r?10:c>=u?5:c>=o?2:1)}function c(t,n,e){var i=Math.abs(n-t)/Math.max(0,e),a=Math.pow(10,Math.floor(Math.log(i)/Math.LN10)),c=i/a;return c>=r?a*=10:c>=u?a*=5:c>=o&&(a*=2),n<t?-a:a}},9067:(t,n,e)=>{"use strict";e.r(n),e.d(n,{randomBates:()=>s,randomBernoulli:()=>h,randomBeta:()=>m,randomBinomial:()=>v,randomCauchy:()=>y,randomExponential:()=>f,randomGamma:()=>g,randomGeometric:()=>d,randomInt:()=>o,randomIrwinHall:()=>c,randomLcg:()=>U,randomLogNormal:()=>a,randomLogistic:()=>Z,randomNormal:()=>i,randomPareto:()=>l,randomPoisson:()=>T,randomUniform:()=>u,randomWeibull:()=>M});const r=Math.random,u=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(r),o=function t(n){function e(t,e){return arguments.length<2&&(e=t,t=0),t=Math.floor(t),e=Math.floor(e)-t,function(){return Math.floor(n()*e+t)}}return e.source=t,e}(r),i=function t(n){function e(t,e){var r,u;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,u=r*r+o*o}while(!u||u>1);return t+e*o*Math.sqrt(-2*Math.log(u)/u)}}return e.source=t,e}(r),a=function t(n){var e=i.source(n);function r(){var t=e.apply(this,arguments);return function(){return Math.exp(t())}}return r.source=t,r}(r),c=function t(n){function e(t){return(t=+t)<=0?()=>0:function(){for(var e=0,r=t;r>1;--r)e+=n();return e+r*n()}}return e.source=t,e}(r),s=function t(n){var e=c.source(n);function r(t){if(0==(t=+t))return n;var r=e(t);return function(){return r()/t}}return r.source=t,r}(r),f=function t(n){function e(t){return function(){return-Math.log1p(-n())/t}}return e.source=t,e}(r),l=function t(n){function e(t){if((t=+t)<0)throw new RangeError("invalid alpha");return t=1/-t,function(){return Math.pow(1-n(),t)}}return e.source=t,e}(r),h=function t(n){function e(t){if((t=+t)<0||t>1)throw new RangeError("invalid p");return function(){return Math.floor(n()+t)}}return e.source=t,e}(r),d=function t(n){function e(t){if((t=+t)<0||t>1)throw new RangeError("invalid p");return 0===t?()=>1/0:1===t?()=>1:(t=Math.log1p(-t),function(){return 1+Math.floor(Math.log1p(-n())/t)})}return e.source=t,e}(r),g=function t(n){var e=i.source(n)();function r(t,r){if((t=+t)<0)throw new RangeError("invalid k");if(0===t)return()=>0;if(r=null==r?1:+r,1===t)return()=>-Math.log1p(-n())*r;var u=(t<1?t+1:t)-1/3,o=1/(3*Math.sqrt(u)),i=t<1?()=>Math.pow(n(),1/t):()=>1;return function(){do{do{var t=e(),a=1+o*t}while(a<=0);a*=a*a;var c=1-n()}while(c>=1-.0331*t*t*t*t&&Math.log(c)>=.5*t*t+u*(1-a+Math.log(a)));return u*a*i()*r}}return r.source=t,r}(r),m=function t(n){var e=g.source(n);function r(t,n){var r=e(t),u=e(n);return function(){var t=r();return 0===t?0:t/(t+u())}}return r.source=t,r}(r),v=function t(n){var e=d.source(n),r=m.source(n);function u(t,n){return t=+t,(n=+n)>=1?()=>t:n<=0?()=>0:function(){for(var u=0,o=t,i=n;o*i>16&&o*(1-i)>16;){var a=Math.floor((o+1)*i),c=r(a,o-a+1)();c<=i?(u+=a,o-=a,i=(i-c)/(1-c)):(o=a-1,i/=c)}for(var s=i<.5,f=e(s?i:1-i),l=f(),h=0;l<=o;++h)l+=f();return u+(s?h:o-h)}}return u.source=t,u}(r),M=function t(n){function e(t,e,r){var u;return 0==(t=+t)?u=t=>-Math.log(t):(t=1/t,u=n=>Math.pow(n,t)),e=null==e?0:+e,r=null==r?1:+r,function(){return e+r*u(-Math.log1p(-n()))}}return e.source=t,e}(r),y=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,function(){return t+e*Math.tan(Math.PI*n())}}return e.source=t,e}(r),Z=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,function(){var r=n();return t+e*Math.log(r/(1-r))}}return e.source=t,e}(r),T=function t(n){var e=g.source(n),r=v.source(n);function u(t){return function(){for(var u=0,o=t;o>16;){var i=Math.floor(.875*o),a=e(i)();if(a>o)return u+r(i-1,o/a)();u+=i,o-=a}for(var c=-Math.log1p(-n()),s=0;c<=o;++s)c-=Math.log1p(-n());return u+s}}return u.source=t,u}(r),p=1/4294967296;function U(t=Math.random()){let n=0|(0<=t&&t<1?t/p:Math.abs(t));return()=>(n=1664525*n+1013904223|0,p*(n>>>0))}},6199:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i,a:()=>a});var r=e(2576),u=e(1262),o=(0,r.Z)((t=>t.setHours(0,0,0,0)),((t,n)=>t.setDate(t.getDate()+n)),((t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*u.yB)/u.UD),(t=>t.getDate()-1));const i=o;var a=o.range},1262:(t,n,e)=>{"use strict";e.d(n,{Ym:()=>r,yB:()=>u,Y2:()=>o,UD:()=>i,iM:()=>a,jz:()=>c,qz:()=>s});const r=1e3,u=60*r,o=60*u,i=24*o,a=7*i,c=30*i,s=365*i},6549:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i,i:()=>a});var r=e(2576),u=e(1262),o=(0,r.Z)((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*u.Ym-t.getMinutes()*u.yB)}),(function(t,n){t.setTime(+t+n*u.Y2)}),(function(t,n){return(n-t)/u.Y2}),(function(t){return t.getHours()}));const i=o;var a=o.range},9712:(t,n,e)=>{"use strict";e.r(n),e.d(n,{timeInterval:()=>r.Z,timeMillisecond:()=>u.Z,timeMilliseconds:()=>u.m,utcMillisecond:()=>u.Z,utcMilliseconds:()=>u.m,timeSecond:()=>o.Z,timeSeconds:()=>o.m,utcSecond:()=>o.Z,utcSeconds:()=>o.m,timeMinute:()=>i.Z,timeMinutes:()=>i.L,timeHour:()=>a.Z,timeHours:()=>a.i,timeDay:()=>c.Z,timeDays:()=>c.a,timeWeek:()=>s.OM,timeWeeks:()=>s.vm,timeSunday:()=>s.OM,timeSundays:()=>s.vm,timeMonday:()=>s.wA,timeMondays:()=>s.bJ,timeTuesday:()=>s.sy,timeTuesdays:()=>s.aU,timeWednesday:()=>s.zg,timeWednesdays:()=>s.Ld,timeThursday:()=>s.bL,timeThursdays:()=>s.$t,timeFriday:()=>s.mC,timeFridays:()=>s.b$,timeSaturday:()=>s.EY,timeSaturdays:()=>s.Ff,timeMonth:()=>f.Z,timeMonths:()=>f.e,timeYear:()=>l.Z,timeYears:()=>l.g,utcMinute:()=>h.Z,utcMinutes:()=>h.N,utcHour:()=>d.Z,utcHours:()=>d.X,utcDay:()=>g.Z,utcDays:()=>g.y,utcWeek:()=>m.Ox,utcWeeks:()=>m.SU,utcSunday:()=>m.Ox,utcSundays:()=>m.SU,utcMonday:()=>m.l6,utcMondays:()=>m.$3,utcTuesday:()=>m.J1,utcTuesdays:()=>m.DK,utcWednesday:()=>m.b3,utcWednesdays:()=>m.uy,utcThursday:()=>m.hB,utcThursdays:()=>m.xj,utcFriday:()=>m.QQ,utcFridays:()=>m.fz,utcSaturday:()=>m.g4,utcSaturdays:()=>m.Q_,utcMonth:()=>v.Z,utcMonths:()=>v.K,utcYear:()=>M.Z,utcYears:()=>M.D,utcTicks:()=>y.WG,utcTickInterval:()=>y.jo,timeTicks:()=>y.jK,timeTickInterval:()=>y._g});var r=e(2576),u=e(4839),o=e(6599),i=e(2828),a=e(6549),c=e(6199),s=e(5235),f=e(6978),l=e(8887),h=e(1504),d=e(5917),g=e(4834),m=e(1416),v=e(5414),M=e(9935),y=e(9256)},2576:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});var r=new Date,u=new Date;function o(t,n,e,i){function a(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return a.floor=function(n){return t(n=new Date(+n)),n},a.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},a.round=function(t){var n=a(t),e=a.ceil(t);return t-n<e-t?n:e},a.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},a.range=function(e,r,u){var o,i=[];if(e=a.ceil(e),u=null==u?1:Math.floor(u),!(e<r&&u>0))return i;do{i.push(o=new Date(+e)),n(e,u),t(e)}while(o<e&&e<r);return i},a.filter=function(e){return o((function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)}),(function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););}))},e&&(a.count=function(n,o){return r.setTime(+n),u.setTime(+o),t(r),t(u),Math.floor(e(r,u))},a.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?a.filter(i?function(n){return i(n)%t==0}:function(n){return a.count(0,n)%t==0}):a:null}),a}},4839:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o,m:()=>i});var r=e(2576),u=(0,r.Z)((function(){}),(function(t,n){t.setTime(+t+n)}),(function(t,n){return n-t}));u.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?(0,r.Z)((function(n){n.setTime(Math.floor(n/t)*t)}),(function(n,e){n.setTime(+n+e*t)}),(function(n,e){return(e-n)/t})):u:null};const o=u;var i=u.range},2828:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i,L:()=>a});var r=e(2576),u=e(1262),o=(0,r.Z)((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*u.Ym)}),(function(t,n){t.setTime(+t+n*u.yB)}),(function(t,n){return(n-t)/u.yB}),(function(t){return t.getMinutes()}));const i=o;var a=o.range},6978:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u,e:()=>o});var r=(0,e(2576).Z)((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()}));const u=r;var o=r.range},6599:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i,m:()=>a});var r=e(2576),u=e(1262),o=(0,r.Z)((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,n){t.setTime(+t+n*u.Ym)}),(function(t,n){return(n-t)/u.Ym}),(function(t){return t.getUTCSeconds()}));const i=o;var a=o.range},9256:(t,n,e)=>{"use strict";e.d(n,{WG:()=>p,jo:()=>U,jK:()=>Y,_g:()=>w});var r=e(477),u=e(3896),o=e(1262),i=e(4839),a=e(6599),c=e(2828),s=e(6549),f=e(6199),l=e(5235),h=e(6978),d=e(8887),g=e(1504),m=e(5917),v=e(4834),M=e(1416),y=e(5414),Z=e(9935);function T(t,n,e,c,s,f){const l=[[a.Z,1,o.Ym],[a.Z,5,5*o.Ym],[a.Z,15,15*o.Ym],[a.Z,30,30*o.Ym],[f,1,o.yB],[f,5,5*o.yB],[f,15,15*o.yB],[f,30,30*o.yB],[s,1,o.Y2],[s,3,3*o.Y2],[s,6,6*o.Y2],[s,12,12*o.Y2],[c,1,o.UD],[c,2,2*o.UD],[e,1,o.iM],[n,1,o.jz],[n,3,3*o.jz],[t,1,o.qz]];function h(n,e,a){const c=Math.abs(e-n)/a,s=(0,r.Z)((([,,t])=>t)).right(l,c);if(s===l.length)return t.every((0,u.ly)(n/o.qz,e/o.qz,a));if(0===s)return i.Z.every(Math.max((0,u.ly)(n,e,a),1));const[f,h]=l[c/l[s-1][2]<l[s][2]/c?s-1:s];return f.every(h)}return[function(t,n,e){const r=n<t;r&&([t,n]=[n,t]);const u=e&&"function"==typeof e.range?e:h(t,n,e),o=u?u.range(t,+n+1):[];return r?o.reverse():o},h]}const[p,U]=T(Z.Z,y.Z,M.Ox,v.Z,m.Z,g.Z),[Y,w]=T(d.Z,h.Z,l.OM,f.Z,s.Z,c.Z)},4834:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i,y:()=>a});var r=e(2576),u=e(1262),o=(0,r.Z)((function(t){t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+n)}),(function(t,n){return(n-t)/u.UD}),(function(t){return t.getUTCDate()-1}));const i=o;var a=o.range},5917:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i,X:()=>a});var r=e(2576),u=e(1262),o=(0,r.Z)((function(t){t.setUTCMinutes(0,0,0)}),(function(t,n){t.setTime(+t+n*u.Y2)}),(function(t,n){return(n-t)/u.Y2}),(function(t){return t.getUTCHours()}));const i=o;var a=o.range},1504:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i,N:()=>a});var r=e(2576),u=e(1262),o=(0,r.Z)((function(t){t.setUTCSeconds(0,0)}),(function(t,n){t.setTime(+t+n*u.yB)}),(function(t,n){return(n-t)/u.yB}),(function(t){return t.getUTCMinutes()}));const i=o;var a=o.range},5414:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u,K:()=>o});var r=(0,e(2576).Z)((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)}),(function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()}));const u=r;var o=r.range},1416:(t,n,e)=>{"use strict";e.d(n,{Ox:()=>i,l6:()=>a,J1:()=>c,b3:()=>s,hB:()=>f,QQ:()=>l,g4:()=>h,SU:()=>d,$3:()=>g,DK:()=>m,uy:()=>v,xj:()=>M,fz:()=>y,Q_:()=>Z});var r=e(2576),u=e(1262);function o(t){return(0,r.Z)((function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+7*n)}),(function(t,n){return(n-t)/u.iM}))}var i=o(0),a=o(1),c=o(2),s=o(3),f=o(4),l=o(5),h=o(6),d=i.range,g=a.range,m=c.range,v=s.range,M=f.range,y=l.range,Z=h.range},9935:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o,D:()=>i});var r=e(2576),u=(0,r.Z)((function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)}),(function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()}),(function(t){return t.getUTCFullYear()}));u.every=function(t){return isFinite(t=Math.floor(t))&&t>0?(0,r.Z)((function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)})):null};const o=u;var i=u.range},5235:(t,n,e)=>{"use strict";e.d(n,{OM:()=>i,wA:()=>a,sy:()=>c,zg:()=>s,bL:()=>f,mC:()=>l,EY:()=>h,vm:()=>d,bJ:()=>g,aU:()=>m,Ld:()=>v,$t:()=>M,b$:()=>y,Ff:()=>Z});var r=e(2576),u=e(1262);function o(t){return(0,r.Z)((function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+7*n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*u.yB)/u.iM}))}var i=o(0),a=o(1),c=o(2),s=o(3),f=o(4),l=o(5),h=o(6),d=i.range,g=a.range,m=c.range,v=s.range,M=f.range,y=l.range,Z=h.range},8887:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o,g:()=>i});var r=e(2576),u=(0,r.Z)((function(t){t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n)}),(function(t,n){return n.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()}));u.every=function(t){return isFinite(t=Math.floor(t))&&t>0?(0,r.Z)((function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,e){n.setFullYear(n.getFullYear()+e*t)})):null};const o=u;var i=u.range}}]);