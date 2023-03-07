"use strict";(()=>{var xr=Object.create;var ke=Object.defineProperty;var Ar=Object.getOwnPropertyDescriptor;var yr=Object.getOwnPropertyNames;var hr=Object.getPrototypeOf,br=Object.prototype.hasOwnProperty;var z=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var vr=(e,r,t,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of yr(r))!br.call(e,n)&&n!==t&&ke(e,n,{get:()=>r[n],enumerable:!(a=Ar(r,n))||a.enumerable});return e};var ue=(e,r,t)=>(t=e!=null?xr(hr(e)):{},vr(r||!e||!e.__esModule?ke(t,"default",{value:e,enumerable:!0}):t,e));var de=z((pe,je)=>{(function(e,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof pe<"u")r(je);else{var t={exports:{}};r(t),e.browser=t.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:pe,function(e){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",t=a=>{let n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(n).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class u extends WeakMap{constructor(s,m=void 0){super(m),this.createItem=s}get(s){return this.has(s)||this.set(s,this.createItem(s)),super.get(s)}}let f=o=>o&&typeof o=="object"&&typeof o.then=="function",g=(o,s)=>(...m)=>{a.runtime.lastError?o.reject(new Error(a.runtime.lastError.message)):s.singleCallbackArg||m.length<=1&&s.singleCallbackArg!==!1?o.resolve(m[0]):o.resolve(m)},c=o=>o==1?"argument":"arguments",x=(o,s)=>function(l,...b){if(b.length<s.minArgs)throw new Error(`Expected at least ${s.minArgs} ${c(s.minArgs)} for ${o}(), got ${b.length}`);if(b.length>s.maxArgs)throw new Error(`Expected at most ${s.maxArgs} ${c(s.maxArgs)} for ${o}(), got ${b.length}`);return new Promise((k,S)=>{if(s.fallbackToNoCallback)try{l[o](...b,g({resolve:k,reject:S},s))}catch(i){console.warn(`${o} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),l[o](...b),s.fallbackToNoCallback=!1,s.noCallback=!0,k()}else s.noCallback?(l[o](...b),k()):l[o](...b,g({resolve:k,reject:S},s))})},A=(o,s,m)=>new Proxy(s,{apply(l,b,k){return m.call(b,o,...k)}}),y=Function.call.bind(Object.prototype.hasOwnProperty),T=(o,s={},m={})=>{let l=Object.create(null),b={has(S,i){return i in o||i in l},get(S,i,C){if(i in l)return l[i];if(!(i in o))return;let h=o[i];if(typeof h=="function")if(typeof s[i]=="function")h=A(o,o[i],s[i]);else if(y(m,i)){let U=x(i,m[i]);h=A(o,o[i],U)}else h=h.bind(o);else if(typeof h=="object"&&h!==null&&(y(s,i)||y(m,i)))h=T(h,s[i],m[i]);else if(y(m,"*"))h=T(h,s[i],m["*"]);else return Object.defineProperty(l,i,{configurable:!0,enumerable:!0,get(){return o[i]},set(U){o[i]=U}}),h;return l[i]=h,h},set(S,i,C,h){return i in l?l[i]=C:o[i]=C,!0},defineProperty(S,i,C){return Reflect.defineProperty(l,i,C)},deleteProperty(S,i){return Reflect.deleteProperty(l,i)}},k=Object.create(o);return new Proxy(k,b)},d=o=>({addListener(s,m,...l){s.addListener(o.get(m),...l)},hasListener(s,m){return s.hasListener(o.get(m))},removeListener(s,m){s.removeListener(o.get(m))}}),M=new u(o=>typeof o!="function"?o:function(m){let l=T(m,{},{getContent:{minArgs:0,maxArgs:0}});o(l)}),j=new u(o=>typeof o!="function"?o:function(m,l,b){let k=!1,S,i=new Promise(L=>{S=function(I){k=!0,L(I)}}),C;try{C=o(m,l,S)}catch(L){C=Promise.reject(L)}let h=C!==!0&&f(C);if(C!==!0&&!h&&!k)return!1;let U=L=>{L.then(I=>{b(I)},I=>{let le;I&&(I instanceof Error||typeof I.message=="string")?le=I.message:le="An unexpected error occurred",b({__mozWebExtensionPolyfillReject__:!0,message:le})}).catch(I=>{console.error("Failed to send onMessage rejected reply",I)})};return U(h?C:i),!0}),E=({reject:o,resolve:s},m)=>{a.runtime.lastError?a.runtime.lastError.message===r?s():o(new Error(a.runtime.lastError.message)):m&&m.__mozWebExtensionPolyfillReject__?o(new Error(m.message)):s(m)},P=(o,s,m,...l)=>{if(l.length<s.minArgs)throw new Error(`Expected at least ${s.minArgs} ${c(s.minArgs)} for ${o}(), got ${l.length}`);if(l.length>s.maxArgs)throw new Error(`Expected at most ${s.maxArgs} ${c(s.maxArgs)} for ${o}(), got ${l.length}`);return new Promise((b,k)=>{let S=E.bind(null,{resolve:b,reject:k});l.push(S),m.sendMessage(...l)})},O={devtools:{network:{onRequestFinished:d(M)}},runtime:{onMessage:d(j),onMessageExternal:d(j),sendMessage:P.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:P.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},G={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":G},services:{"*":G},websites:{"*":G}},T(a,O,n)};e.exports=t(chrome)}else e.exports=globalThis.browser})});var sr=z((As,ar)=>{"use strict";ar.exports=()=>{let e={};return e.promise=new Promise((r,t)=>{e.resolve=r,e.reject=t}),e}});var ir=z((ys,nr)=>{"use strict";var co=sr();function xo(e,r="maxAge"){let t,a,n,u=async()=>{if(t!==void 0)return;let c=async x=>{n=co();let A=x[1][r]-Date.now();if(A<=0){e.delete(x[0]),n.resolve();return}return t=x[0],a=setTimeout(()=>{e.delete(x[0]),n&&n.resolve()},A),typeof a.unref=="function"&&a.unref(),n.promise};try{for(let x of e)await c(x)}catch{}t=void 0},f=()=>{t=void 0,a!==void 0&&(clearTimeout(a),a=void 0),n!==void 0&&(n.reject(void 0),n=void 0)},g=e.set.bind(e);return e.set=(c,x)=>{e.has(c)&&e.delete(c);let A=g(c,x);return t&&t===c&&f(),u(),A},u(),e}nr.exports=xo});var mr=z((hs,fr)=>{"use strict";var Ao=ir(),he=class{constructor(r,t){if(this.maxAge=r,this[Symbol.toStringTag]="Map",this.data=new Map,Ao(this.data),t)for(let[a,n]of t)this.set(a,n)}get size(){return this.data.size}clear(){this.data.clear()}delete(r){return this.data.delete(r)}has(r){return this.data.has(r)}get(r){let t=this.data.get(r);if(t)return t.data}set(r,t){return this.data.set(r,{maxAge:Date.now()+this.maxAge,data:t}),this}values(){return this.createIterator(r=>r[1].data)}keys(){return this.data.keys()}entries(){return this.createIterator(r=>[r[0],r[1].data])}forEach(r,t){for(let[a,n]of this.entries())r.apply(t,[n,a,this])}[Symbol.iterator](){return this.entries()}*createIterator(r){for(let t of this.data.entries())yield r(t)}};fr.exports=he});var W=ue(de());var wr=typeof global=="object"&&global&&global.Object===Object&&global,V=wr;var Tr=typeof self=="object"&&self&&self.Object===Object&&self,Pr=V||Tr||Function("return this")(),w=Pr;var kr=w.Symbol,F=kr;var Se=Object.prototype,jr=Se.hasOwnProperty,Sr=Se.toString,$=F?F.toStringTag:void 0;function Cr(e){var r=jr.call(e,$),t=e[$];try{e[$]=void 0;var a=!0}catch{}var n=Sr.call(e);return a&&(r?e[$]=t:delete e[$]),n}var Ce=Cr;var Er=Object.prototype,Or=Er.toString;function Mr(e){return Or.call(e)}var Ee=Mr;var Ir="[object Null]",Nr="[object Undefined]",Oe=F?F.toStringTag:void 0;function Rr(e){return e==null?e===void 0?Nr:Ir:Oe&&Oe in Object(e)?Ce(e):Ee(e)}var R=Rr;function Br(e){return e!=null&&typeof e=="object"}var _=Br;var Dr=Array.isArray,Me=Dr;function Ur(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var K=Ur;var Fr="[object AsyncFunction]",_r="[object Function]",Wr="[object GeneratorFunction]",Gr="[object Proxy]";function Lr(e){if(!K(e))return!1;var r=R(e);return r==_r||r==Wr||r==Fr||r==Gr}var J=Lr;var $r=w["__core-js_shared__"],H=$r;var Ie=function(){var e=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function qr(e){return!!Ie&&Ie in e}var Ne=qr;var zr=Function.prototype,Vr=zr.toString;function Kr(e){if(e!=null){try{return Vr.call(e)}catch{}try{return e+""}catch{}}return""}var B=Kr;var Jr=/[\\^$.*+?()[\]{}|]/g,Hr=/^\[object .+?Constructor\]$/,Zr=Function.prototype,Xr=Object.prototype,Qr=Zr.toString,Yr=Xr.hasOwnProperty,et=RegExp("^"+Qr.call(Yr).replace(Jr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function rt(e){if(!K(e)||Ne(e))return!1;var r=J(e)?et:Hr;return r.test(B(e))}var Re=rt;function tt(e,r){return e?.[r]}var Be=tt;function ot(e,r){var t=Be(e,r);return Re(t)?t:void 0}var N=ot;var at=N(w,"WeakMap"),Z=at;var st=9007199254740991;function nt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=st}var X=nt;function it(e){return e!=null&&X(e.length)&&!J(e)}var De=it;var ft=Object.prototype;function mt(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||ft;return e===t}var Q=mt;var lt="[object Arguments]";function ut(e){return _(e)&&R(e)==lt}var ge=ut;var Ue=Object.prototype,pt=Ue.hasOwnProperty,dt=Ue.propertyIsEnumerable,gt=ge(function(){return arguments}())?ge:function(e){return _(e)&&pt.call(e,"callee")&&!dt.call(e,"callee")},Fe=gt;function ct(){return!1}var _e=ct;var Le=typeof exports=="object"&&exports&&!exports.nodeType&&exports,We=Le&&typeof module=="object"&&module&&!module.nodeType&&module,xt=We&&We.exports===Le,Ge=xt?w.Buffer:void 0,At=Ge?Ge.isBuffer:void 0,yt=At||_e,$e=yt;var ht="[object Arguments]",bt="[object Array]",vt="[object Boolean]",wt="[object Date]",Tt="[object Error]",Pt="[object Function]",kt="[object Map]",jt="[object Number]",St="[object Object]",Ct="[object RegExp]",Et="[object Set]",Ot="[object String]",Mt="[object WeakMap]",It="[object ArrayBuffer]",Nt="[object DataView]",Rt="[object Float32Array]",Bt="[object Float64Array]",Dt="[object Int8Array]",Ut="[object Int16Array]",Ft="[object Int32Array]",_t="[object Uint8Array]",Wt="[object Uint8ClampedArray]",Gt="[object Uint16Array]",Lt="[object Uint32Array]",p={};p[Rt]=p[Bt]=p[Dt]=p[Ut]=p[Ft]=p[_t]=p[Wt]=p[Gt]=p[Lt]=!0;p[ht]=p[bt]=p[It]=p[vt]=p[Nt]=p[wt]=p[Tt]=p[Pt]=p[kt]=p[jt]=p[St]=p[Ct]=p[Et]=p[Ot]=p[Mt]=!1;function $t(e){return _(e)&&X(e.length)&&!!p[R(e)]}var qe=$t;function qt(e){return function(r){return e(r)}}var ze=qt;var Ve=typeof exports=="object"&&exports&&!exports.nodeType&&exports,q=Ve&&typeof module=="object"&&module&&!module.nodeType&&module,zt=q&&q.exports===Ve,ce=zt&&V.process,Vt=function(){try{var e=q&&q.require&&q.require("util").types;return e||ce&&ce.binding&&ce.binding("util")}catch{}}(),xe=Vt;var Ke=xe&&xe.isTypedArray,Kt=Ke?ze(Ke):qe,Je=Kt;function Jt(e,r){return function(t){return e(r(t))}}var He=Jt;var Ht=He(Object.keys,Object),Ze=Ht;var Zt=Object.prototype,Xt=Zt.hasOwnProperty;function Qt(e){if(!Q(e))return Ze(e);var r=[];for(var t in Object(e))Xt.call(e,t)&&t!="constructor"&&r.push(t);return r}var Xe=Qt;var Yt=N(w,"Map"),Y=Yt;var eo=N(w,"DataView"),ee=eo;var ro=N(w,"Promise"),re=ro;var to=N(w,"Set"),te=to;var Qe="[object Map]",oo="[object Object]",Ye="[object Promise]",er="[object Set]",rr="[object WeakMap]",tr="[object DataView]",ao=B(ee),so=B(Y),no=B(re),io=B(te),fo=B(Z),D=R;(ee&&D(new ee(new ArrayBuffer(1)))!=tr||Y&&D(new Y)!=Qe||re&&D(re.resolve())!=Ye||te&&D(new te)!=er||Z&&D(new Z)!=rr)&&(D=function(e){var r=R(e),t=r==oo?e.constructor:void 0,a=t?B(t):"";if(a)switch(a){case ao:return tr;case so:return Qe;case no:return Ye;case io:return er;case fo:return rr}return r});var or=D;var mo="[object Map]",lo="[object Set]",uo=Object.prototype,po=uo.hasOwnProperty;function go(e){if(e==null)return!0;if(De(e)&&(Me(e)||typeof e=="string"||typeof e.splice=="function"||$e(e)||Je(e)||Fe(e)))return!e.length;var r=or(e);if(r==mo||r==lo)return!e.size;if(Q(e))return!Xe(e).length;for(var t in e)if(po.call(e,t))return!1;return!0}var Ae=go;var ye=ue(de());async function oe(){let{provider:e="chatgpt"}=await ye.default.storage.local.get("provider"),r="provider:gpt3",t=await ye.default.storage.local.get(r);return{provider:e,configs:{["gpt3"]:t[r]}}}var gr=ue(mr());var ae,yo=new Uint8Array(16);function be(){if(!ae&&(ae=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ae))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ae(yo)}var v=[];for(let e=0;e<256;++e)v.push((e+256).toString(16).slice(1));function lr(e,r=0){return(v[e[r+0]]+v[e[r+1]]+v[e[r+2]]+v[e[r+3]]+"-"+v[e[r+4]]+v[e[r+5]]+"-"+v[e[r+6]]+v[e[r+7]]+"-"+v[e[r+8]]+v[e[r+9]]+"-"+v[e[r+10]]+v[e[r+11]]+v[e[r+12]]+v[e[r+13]]+v[e[r+14]]+v[e[r+15]]).toLowerCase()}var ho=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ve={randomUUID:ho};function bo(e,r,t){if(ve.randomUUID&&!r&&!e)return ve.randomUUID();e=e||{};let a=e.random||(e.rng||be)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,r){t=t||0;for(let n=0;n<16;++n)r[t+n]=a[n];return r}return lr(a)}var se=bo;function ur(e){let r,t,a,n,u,f,g;return c(),{feed:x,reset:c};function c(){r=!0,t="",a=0,n=-1,u=void 0,f=void 0,g=""}function x(y){t=t?t+y:y,r&&vo(t)&&(t=t.slice(pr.length)),r=!1;let T=t.length,d=0,M=!1;for(;d<T;){M&&(t[d]===`
`&&++d,M=!1);let j=-1,E=n,P;for(let O=a;j<0&&O<T;++O)P=t[O],P===":"&&E<0?E=O-d:P==="\r"?(M=!0,j=O-d):P===`
`&&(j=O-d);if(j<0){a=T-d,n=E;break}else a=0,n=-1;A(t,d,E,j),d+=j+1}d===T?t="":d>0&&(t=t.slice(d))}function A(y,T,d,M){if(M===0){g.length>0&&(e({type:"event",id:u,event:f||void 0,data:g.slice(0,-1)}),g="",u=void 0),f=void 0;return}let j=d<0,E=y.slice(T,T+(j?M:d)),P=0;j?P=M:y[T+d+1]===" "?P=d+2:P=d+1;let O=T+P,G=M-P,o=y.slice(O,O+G).toString();if(E==="data")g+=o?"".concat(o,`
`):`
`;else if(E==="event")f=o;else if(E==="id"&&!o.includes("\0"))u=o;else if(E==="retry"){let s=parseInt(o,10);Number.isNaN(s)||e({type:"reconnect-interval",value:s})}}}var pr=[239,187,191];function vo(e){return pr.every((r,t)=>e.charCodeAt(t)===r)}async function*dr(e){let r=e.getReader();try{for(;;){let{done:t,value:a}=await r.read();if(t)return;yield a}}finally{r.releaseLock()}}async function ne(e,r){let{onMessage:t,...a}=r,n=await fetch(e,a);if(!n.ok){let f=await n.json().catch(()=>({}));throw new Error(Ae(f)?`${n.status} ${n.statusText}`:JSON.stringify(f))}let u=ur(f=>{f.type==="event"&&t(f.data)});for await(let f of dr(n.body)){let g=new TextDecoder().decode(f);u.feed(g)}}async function Pe(e,r,t,a){return fetch(`https://chat.openai.com/backend-api${t}`,{method:r,headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:a===void 0?void 0:JSON.stringify(a)})}async function cr(e,r){await Pe(e,"POST","/conversation/message_feedback",r)}async function wo(e,r,t){await Pe(e,"PATCH",`/conversation/${r}`,t)}var we="accessToken",Te=new gr.default(10*1e3);async function fe(){if(Te.get(we))return Te.get(we);let e=await fetch("https://chat.openai.com/api/auth/session");if(e.status===403)throw new Error("CLOUDFLARE");let r=await e.json().catch(()=>({}));if(!r.accessToken)throw new Error("UNAUTHORIZED");return Te.set(we,r.accessToken),r.accessToken}var ie=class{constructor(r){this.token=r;this.token=r}async fetchModels(){return(await Pe(this.token,"GET","/models").then(t=>t.json())).models}async getModelName(){try{return(await this.fetchModels())[0].slug}catch(r){return console.error(r),"text-davinci-002-render"}}async generateAnswer(r){let t,a=()=>{t&&wo(this.token,t,{is_visible:!1})},n=await this.getModelName();return await ne("https://chat.openai.com/backend-api/conversation",{method:"POST",signal:r.signal,headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify({action:"next",messages:[{id:se(),role:"user",content:{content_type:"text",parts:[r.prompt]}}],model:n,parent_message_id:se()}),onMessage(u){var c,x,A;if(console.debug("sse message",u),u==="[DONE]"){r.onEvent({type:"done"}),a();return}let f;try{f=JSON.parse(u)}catch(y){return}let g=(A=(x=(c=f.message)==null?void 0:c.content)==null?void 0:x.parts)==null?void 0:A[0];g&&(t=f.conversation_id,r.onEvent({type:"answer",data:{text:g,messageId:f.message.id,conversationId:f.conversation_id}}))}}),{cleanup:a}}};var me=class{constructor(r,t){this.token=r;this.model=t;this.token=r,this.model=t}buildPrompt(r){return this.model.startsWith("text-chat-davinci")?`Respond conversationally.<|im_end|>

User: ${r}<|im_sep|>
ChatGPT:`:r}buildMessages(r){return[{role:"user",content:r}]}async generateAnswer(r){var g,c;let[t]=await Promise.all([oe()]),a=(c=(g=t.configs["gpt3"])==null?void 0:g.model)!=null?c:"gpt-3.5-turbo",n="",u={model:this.model,stream:!0,max_tokens:800};a==="text-davinci-003"?(n="https://api.openai.com/v1/completions",u={...u,prompt:this.buildPrompt(r.prompt)}):(n="https://api.openai.com/v1/chat/completions",u={...u,messages:this.buildMessages(r.prompt)});let f="";return await ne(n,{method:"POST",signal:r.signal,headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify(u),onMessage(x){if(console.debug("sse message",x),x==="[DONE]"){r.onEvent({type:"done"});return}let A;try{A=JSON.parse(x);let y=a==="text-davinci-003"?A.choices[0].text:A.choices[0].delta.content;if(y===void 0||y==="<|im_end|>"||y==="<|im_sep|>")return;f+=y,r.onEvent({type:"answer",data:{text:f,messageId:A.id,conversationId:A.id}})}catch(y){return}}}),{}}};async function Po(e,r){let t=await oe(),a;if(t.provider==="chatgpt"){let f=await fe();a=new ie(f)}else if(t.provider==="gpt3"){let{apiKey:f,model:g}=t.configs["gpt3"];a=new me(f,g)}else throw new Error(`Unknown provider ${t.provider}`);let n=new AbortController;e.onDisconnect.addListener(()=>{n.abort(),u==null||u()});let{cleanup:u}=await a.generateAnswer({prompt:r,signal:n.signal,onEvent(f){if(f.type==="done"){e.postMessage({event:"DONE"});return}e.postMessage(f.data)}})}W.default.runtime.onConnect.addListener(e=>{e.onMessage.addListener(async r=>{console.debug("received msg",r);try{await Po(e,r.question)}catch(t){e.postMessage({error:t.message})}})});W.default.runtime.onMessage.addListener(async e=>{if(e.type==="FEEDBACK"){let r=await fe();await cr(r,e.data)}else if(e.type==="OPEN_OPTIONS_PAGE")W.default.runtime.openOptionsPage();else if(e.type==="GET_ACCESS_TOKEN")return fe()});W.default.runtime.onInstalled.addListener(e=>{e.reason==="install"&&W.default.runtime.openOptionsPage()});})();
