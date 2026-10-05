var CM=Object.defineProperty;var DM=(a,e,n)=>e in a?CM(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var ba=(a,e,n)=>DM(a,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Bu(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var $d={exports:{}},rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function NM(){if(uv)return rl;uv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return rl.Fragment=e,rl.jsx=n,rl.jsxs=n,rl}var fv;function UM(){return fv||(fv=1,$d.exports=NM()),$d.exports}var w=UM(),Jd={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function LM(){if(dv)return rt;dv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function _(L,V,_e){this.props=L,this.context=V,this.refs=S,this.updater=_e||E}_.prototype.isReactComponent={},_.prototype.setState=function(L,V){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,V,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=_.prototype;function I(L,V,_e){this.props=L,this.context=V,this.refs=S,this.updater=_e||E}var D=I.prototype=new P;D.constructor=I,C(D,_.prototype),D.isPureReactComponent=!0;var F=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(L,V,_e){var Ae=_e.ref;return{$$typeof:a,type:L,key:V,ref:Ae!==void 0?Ae:null,props:_e}}function j(L,V){return O(L.type,V,L.props)}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===a}function K(L){var V={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(_e){return V[_e]})}var fe=/\/+/g;function pe(L,V){return typeof L=="object"&&L!==null&&L.key!=null?K(""+L.key):V.toString(36)}function $(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(V){L.status==="pending"&&(L.status="fulfilled",L.value=V)},function(V){L.status==="pending"&&(L.status="rejected",L.reason=V)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function B(L,V,_e,Ae,Ne){var ne=typeof L;(ne==="undefined"||ne==="boolean")&&(L=null);var be=!1;if(L===null)be=!0;else switch(ne){case"bigint":case"string":case"number":be=!0;break;case"object":switch(L.$$typeof){case a:case e:be=!0;break;case g:return be=L._init,B(be(L._payload),V,_e,Ae,Ne)}}if(be)return Ne=Ne(L),be=Ae===""?"."+pe(L,0):Ae,F(Ne)?(_e="",be!=null&&(_e=be.replace(fe,"$&/")+"/"),B(Ne,V,_e,"",function(nt){return nt})):Ne!=null&&(k(Ne)&&(Ne=j(Ne,_e+(Ne.key==null||L&&L.key===Ne.key?"":(""+Ne.key).replace(fe,"$&/")+"/")+be)),V.push(Ne)),1;be=0;var Ee=Ae===""?".":Ae+":";if(F(L))for(var Ge=0;Ge<L.length;Ge++)Ae=L[Ge],ne=Ee+pe(Ae,Ge),be+=B(Ae,V,_e,ne,Ne);else if(Ge=b(L),typeof Ge=="function")for(L=Ge.call(L),Ge=0;!(Ae=L.next()).done;)Ae=Ae.value,ne=Ee+pe(Ae,Ge++),be+=B(Ae,V,_e,ne,Ne);else if(ne==="object"){if(typeof L.then=="function")return B($(L),V,_e,Ae,Ne);throw V=String(L),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return be}function G(L,V,_e){if(L==null)return L;var Ae=[],Ne=0;return B(L,Ae,"","",function(ne){return V.call(_e,ne,Ne++)}),Ae}function J(L){if(L._status===-1){var V=L._result;V=V(),V.then(function(_e){(L._status===0||L._status===-1)&&(L._status=1,L._result=_e)},function(_e){(L._status===0||L._status===-1)&&(L._status=2,L._result=_e)}),L._status===-1&&(L._status=0,L._result=V)}if(L._status===1)return L._result.default;throw L._result}var xe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Te={map:G,forEach:function(L,V,_e){G(L,function(){V.apply(this,arguments)},_e)},count:function(L){var V=0;return G(L,function(){V++}),V},toArray:function(L){return G(L,function(V){return V})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=v,rt.Children=Te,rt.Component=_,rt.Fragment=n,rt.Profiler=o,rt.PureComponent=I,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,V,_e){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Ae=C({},L.props),Ne=L.key;if(V!=null)for(ne in V.key!==void 0&&(Ne=""+V.key),V)!T.call(V,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&V.ref===void 0||(Ae[ne]=V[ne]);var ne=arguments.length-2;if(ne===1)Ae.children=_e;else if(1<ne){for(var be=Array(ne),Ee=0;Ee<ne;Ee++)be[Ee]=arguments[Ee+2];Ae.children=be}return O(L.type,Ne,Ae)},rt.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},rt.createElement=function(L,V,_e){var Ae,Ne={},ne=null;if(V!=null)for(Ae in V.key!==void 0&&(ne=""+V.key),V)T.call(V,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Ne[Ae]=V[Ae]);var be=arguments.length-2;if(be===1)Ne.children=_e;else if(1<be){for(var Ee=Array(be),Ge=0;Ge<be;Ge++)Ee[Ge]=arguments[Ge+2];Ne.children=Ee}if(L&&L.defaultProps)for(Ae in be=L.defaultProps,be)Ne[Ae]===void 0&&(Ne[Ae]=be[Ae]);return O(L,ne,Ne)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:h,render:L}},rt.isValidElement=k,rt.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:J}},rt.memo=function(L,V){return{$$typeof:p,type:L,compare:V===void 0?null:V}},rt.startTransition=function(L){var V=z.T,_e={};z.T=_e;try{var Ae=L(),Ne=z.S;Ne!==null&&Ne(_e,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(N,xe)}catch(ne){xe(ne)}finally{V!==null&&_e.types!==null&&(V.types=_e.types),z.T=V}},rt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},rt.use=function(L){return z.H.use(L)},rt.useActionState=function(L,V,_e){return z.H.useActionState(L,V,_e)},rt.useCallback=function(L,V){return z.H.useCallback(L,V)},rt.useContext=function(L){return z.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,V){return z.H.useDeferredValue(L,V)},rt.useEffect=function(L,V){return z.H.useEffect(L,V)},rt.useEffectEvent=function(L){return z.H.useEffectEvent(L)},rt.useId=function(){return z.H.useId()},rt.useImperativeHandle=function(L,V,_e){return z.H.useImperativeHandle(L,V,_e)},rt.useInsertionEffect=function(L,V){return z.H.useInsertionEffect(L,V)},rt.useLayoutEffect=function(L,V){return z.H.useLayoutEffect(L,V)},rt.useMemo=function(L,V){return z.H.useMemo(L,V)},rt.useOptimistic=function(L,V){return z.H.useOptimistic(L,V)},rt.useReducer=function(L,V,_e){return z.H.useReducer(L,V,_e)},rt.useRef=function(L){return z.H.useRef(L)},rt.useState=function(L){return z.H.useState(L)},rt.useSyncExternalStore=function(L,V,_e){return z.H.useSyncExternalStore(L,V,_e)},rt.useTransition=function(){return z.H.useTransition()},rt.version="19.2.7",rt}var hv;function im(){return hv||(hv=1,Jd.exports=LM()),Jd.exports}var ue=im();const hn=Bu(ue);var eh={exports:{}},sl={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function OM(){return pv||(pv=1,(function(a){function e(B,G){var J=B.length;B.push(G);e:for(;0<J;){var xe=J-1>>>1,Te=B[xe];if(0<o(Te,G))B[xe]=G,B[J]=Te,J=xe;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],J=B.pop();if(J!==G){B[0]=J;e:for(var xe=0,Te=B.length,L=Te>>>1;xe<L;){var V=2*(xe+1)-1,_e=B[V],Ae=V+1,Ne=B[Ae];if(0>o(_e,J))Ae<Te&&0>o(Ne,_e)?(B[xe]=Ne,B[Ae]=J,xe=Ae):(B[xe]=_e,B[V]=J,xe=V);else if(Ae<Te&&0>o(Ne,J))B[xe]=Ne,B[Ae]=J,xe=Ae;else break e}}return G}function o(B,G){var J=B.sortIndex-G.sortIndex;return J!==0?J:B.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],p=[],g=1,v=null,x=3,b=!1,E=!1,C=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var G=n(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=B)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=n(p)}}function F(B){if(C=!1,D(B),!E)if(n(m)!==null)E=!0,N||(N=!0,K());else{var G=n(p);G!==null&&$(F,G.startTime-B)}}var N=!1,z=-1,T=5,O=-1;function j(){return S?!0:!(a.unstable_now()-O<T)}function k(){if(S=!1,N){var B=a.unstable_now();O=B;var G=!0;try{e:{E=!1,C&&(C=!1,P(z),z=-1),b=!0;var J=x;try{t:{for(D(B),v=n(m);v!==null&&!(v.expirationTime>B&&j());){var xe=v.callback;if(typeof xe=="function"){v.callback=null,x=v.priorityLevel;var Te=xe(v.expirationTime<=B);if(B=a.unstable_now(),typeof Te=="function"){v.callback=Te,D(B),G=!0;break t}v===n(m)&&r(m),D(B)}else r(m);v=n(m)}if(v!==null)G=!0;else{var L=n(p);L!==null&&$(F,L.startTime-B),G=!1}}break e}finally{v=null,x=J,b=!1}G=void 0}}finally{G?K():N=!1}}}var K;if(typeof I=="function")K=function(){I(k)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=k,K=function(){pe.postMessage(null)}}else K=function(){_(k,0)};function $(B,G){z=_(function(){B(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(B){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var J=x;x=G;try{return B()}finally{x=J}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=x;x=B;try{return G()}finally{x=J}},a.unstable_scheduleCallback=function(B,G,J){var xe=a.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?xe+J:xe):J=xe,B){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=J+Te,B={id:g++,callback:G,priorityLevel:B,startTime:J,expirationTime:Te,sortIndex:-1},J>xe?(B.sortIndex=J,e(p,B),n(m)===null&&B===n(p)&&(C?(P(z),z=-1):C=!0,$(F,J-xe))):(B.sortIndex=Te,e(m,B),E||b||(E=!0,N||(N=!0,K()))),B},a.unstable_shouldYield=j,a.unstable_wrapCallback=function(B){var G=x;return function(){var J=x;x=G;try{return B.apply(this,arguments)}finally{x=J}}}})(nh)),nh}var mv;function PM(){return mv||(mv=1,th.exports=OM()),th.exports}var ih={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function IM(){if(gv)return In;gv=1;var a=im();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,In.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},In.flushSync=function(m){var p=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=g,r.d.f()}},In.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},In.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},In.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:b}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},In.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},In.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},In.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},In.requestFormReset=function(m){r.d.r(m)},In.unstable_batchedUpdates=function(m,p){return m(p)},In.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},In.useFormStatus=function(){return u.H.useHostTransitionStatus()},In.version="19.2.7",In}var xv;function FM(){if(xv)return ih.exports;xv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),ih.exports=IM(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function BM(){if(vv)return sl;vv=1;var a=PM(),e=im(),n=FM();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),t;if(d===l)return m(f),i;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=d;else{for(var y=!1,R=f.child;R;){if(R===s){y=!0,s=f,l=d;break}if(R===l){y=!0,l=f,s=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===s){y=!0,s=d,l=f;break}if(R===l){y=!0,l=d,s=f;break}R=R.sibling}if(!y)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),I=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case N:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case I:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}var $=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},xe=[],Te=-1;function L(t){return{current:t}}function V(t){0>Te||(t.current=xe[Te],xe[Te]=null,Te--)}function _e(t,i){Te++,xe[Te]=t.current,t.current=i}var Ae=L(null),Ne=L(null),ne=L(null),be=L(null);function Ee(t,i){switch(_e(ne,i),_e(Ne,t),_e(Ae,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Lx(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Lx(i),t=Ox(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(Ae),_e(Ae,t)}function Ge(){V(Ae),V(Ne),V(ne)}function nt(t){t.memoizedState!==null&&_e(be,t);var i=Ae.current,s=Ox(i,t.type);i!==s&&(_e(Ne,t),_e(Ae,s))}function Qe(t){Ne.current===t&&(V(Ae),V(Ne)),be.current===t&&(V(be),tl._currentValue=J)}var qt,ft;function vt(t){if(qt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);qt=i&&i[1]||"",ft=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+t+ft}var _t=!1;function dt(t,i){if(!t||_t)return"";_t=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ce){var oe=ce}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ce){oe=ce}t.call(Se.prototype)}}else{try{throw Error()}catch(ce){oe=ce}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ce){if(ce&&oe&&typeof ce.stack=="string")return[ce.stack,oe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var H=y.split(`
`),te=R.split(`
`);for(f=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;f<te.length&&!te[f].includes("DetermineComponentFrameRoot");)f++;if(l===H.length||f===te.length)for(l=H.length-1,f=te.length-1;1<=l&&0<=f&&H[l]!==te[f];)f--;for(;1<=l&&0<=f;l--,f--)if(H[l]!==te[f]){if(l!==1||f!==1)do if(l--,f--,0>f||H[l]!==te[f]){var ge=`
`+H[l].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=l&&0<=f);break}}}finally{_t=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?vt(s):""}function nn(t,i){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==i&&i!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return vt("Activity");default:return""}}function an(t){try{var i="",s=null;do i+=nn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var rn=Object.prototype.hasOwnProperty,un=a.unstable_scheduleCallback,Xt=a.unstable_cancelCallback,sn=a.unstable_shouldYield,Y=a.unstable_requestPaint,zt=a.unstable_now,wt=a.unstable_getCurrentPriorityLevel,U=a.unstable_ImmediatePriority,M=a.unstable_UserBlockingPriority,Q=a.unstable_NormalPriority,re=a.unstable_LowPriority,he=a.unstable_IdlePriority,Re=a.log,Ue=a.unstable_setDisableYieldValue,de=null,me=null;function Ce(t){if(typeof Re=="function"&&Ue(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(de,t)}catch{}}var ze=Math.clz32?Math.clz32:Ke,Pe=Math.log,Le=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(Pe(t)/Le|0)|0}var $e=256,it=262144,X=4194304;function we(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~d,l!==0?f=we(l):(y&=R,y!==0?f=we(y):s||(s=R&~t,s!==0&&(f=we(s))))):(R=l&~d,R!==0?f=we(R):y!==0?f=we(y):s||(s=l&~t,s!==0&&(f=we(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function De(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Be(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function Ye(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function ke(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Kt(t,i,s,l,f,d){var y=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,te=t.hiddenUpdates;for(s=y&~s;0<s;){var ge=31-ze(s),Se=1<<ge;R[ge]=0,H[ge]=-1;var oe=te[ge];if(oe!==null)for(te[ge]=null,ge=0;ge<oe.length;ge++){var ce=oe[ge];ce!==null&&(ce.lane&=-536870913)}s&=~Se}l!==0&&Ut(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~i))}function Ut(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-ze(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Jn(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ze(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function ei(t,i){var s=i&-i;return s=(s&42)!==0?1:mo(s),(s&(t.suspendedLanes|i))!==0?0:s}function mo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function go(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xo(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:iv(t.type))}function rs(t,i){var s=G.p;try{return G.p=t,i()}finally{G.p=s}}var Hi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Hi,Cn="__reactProps$"+Hi,kn="__reactContainer$"+Hi,Mr="__reactEvents$"+Hi,Ul="__reactListeners$"+Hi,Ll="__reactHandles$"+Hi,Er="__reactResources$"+Hi,za="__reactMarker$"+Hi;function Ha(t){delete t[mn],delete t[Cn],delete t[Mr],delete t[Ul],delete t[Ll]}function ia(t){var i=t[mn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[kn]||s[mn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Gx(t);t!==null;){if(s=t[mn])return s;t=Gx(t)}return i}t=s,s=t.parentNode}return null}function aa(t){if(t=t[mn]||t[kn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Tr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Ga(t){var i=t[Er];return i||(i=t[Er]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gn(t){t[za]=!0}var Ol=new Set,A={};function q(t,i){se(t,i),se(t+"Capture",i)}function se(t,i){for(A[t]=i,t=0;t<i.length;t++)Ol.add(i[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Ie={};function Ve(t){return rn.call(Ie,t)?!0:rn.call(ae,t)?!1:ie.test(t)?Ie[t]=!0:(ae[t]=!0,!1)}function Oe(t,i,s){if(Ve(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Xe(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function We(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ot(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){s=""+y,d.call(this,y)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Tt(t){if(!t._valueTracker){var i=ot(t)?"checked":"value";t._valueTracker=Ze(t,i,""+t[i])}}function Qt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=ot(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function Ot(t){return t.replace(Lt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function He(t,i,s,l,f,d,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Je(i)):t.value!==""+Je(i)&&(t.value=""+Je(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?ht(t,y,Je(i)):s!=null?ht(t,y,Je(s)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Je(R):t.removeAttribute("name")}function Pn(t,i,s,l,f,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Tt(t);return}s=s!=null?""+Je(s):"",i=i!=null?""+Je(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Tt(t)}function ht(t,i,s){i==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function bn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Je(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function ti(t,i,s){if(i!=null&&(i=""+Je(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Je(s):""}function Ri(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if($(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Je(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Tt(t)}function ni(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $t(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Pt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function wi(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&$t(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&$t(t,d,i[d])}function Nt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ar(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ra(){}var ju=null;function Zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ss=null,os=null;function Um(t){var i=aa(t);if(i&&(t=i.stateNode)){var s=t[Cn]||null;e:switch(t=i.stateNode,i.type){case"input":if(He(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ot(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Cn]||null;if(!f)throw Error(r(90));He(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Qt(l)}break e;case"textarea":ti(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&bn(t,!!s.multiple,i,!1)}}}var Ku=!1;function Lm(t,i,s){if(Ku)return t(i,s);Ku=!0;try{var l=t(i);return l}finally{if(Ku=!1,(ss!==null||os!==null)&&(Sc(),ss&&(i=ss,t=os,os=ss=null,Um(i),t)))for(i=0;i<t.length;i++)Um(t[i])}}function vo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Cn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=!1;if(sa)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Qu=!1}var ka=null,$u=null,Pl=null;function Om(){if(Pl)return Pl;var t,i=$u,s=i.length,l,f="value"in ka?ka.value:ka.textContent,d=f.length;for(t=0;t<s&&i[t]===f[t];t++);var y=s-t;for(l=1;l<=y&&i[s-l]===f[d-l];l++);return Pl=f.slice(t,1<l?1-l:void 0)}function Il(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function Pm(){return!1}function Wn(t){function i(s,l,f,d,y){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Fl:Pm,this.isPropagationStopped=Pm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),i}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=Wn(Rr),yo=v({},Rr,{view:0,detail:0}),RS=Wn(yo),Ju,ef,So,zl=v({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(Ju=t.screenX-So.screenX,ef=t.screenY-So.screenY):ef=Ju=0,So=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:ef}}),Im=Wn(zl),wS=v({},zl,{dataTransfer:0}),CS=Wn(wS),DS=v({},yo,{relatedTarget:0}),tf=Wn(DS),NS=v({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),US=Wn(NS),LS=v({},Rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OS=Wn(LS),PS=v({},Rr,{data:0}),Fm=Wn(PS),IS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=BS[t])?!!i[t]:!1}function nf(){return zS}var HS=v({},yo,{key:function(t){if(t.key){var i=IS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GS=Wn(HS),VS=v({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=Wn(VS),kS=v({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),WS=Wn(kS),XS=v({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qS=Wn(XS),YS=v({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jS=Wn(YS),ZS=v({},Rr,{newState:0,oldState:0}),KS=Wn(ZS),QS=[9,13,27,32],af=sa&&"CompositionEvent"in window,bo=null;sa&&"documentMode"in document&&(bo=document.documentMode);var $S=sa&&"TextEvent"in window&&!bo,zm=sa&&(!af||bo&&8<bo&&11>=bo),Hm=" ",Gm=!1;function Vm(t,i){switch(t){case"keyup":return QS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function km(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function JS(t,i){switch(t){case"compositionend":return km(i);case"keypress":return i.which!==32?null:(Gm=!0,Hm);case"textInput":return t=i.data,t===Hm&&Gm?null:t;default:return null}}function eb(t,i){if(ls)return t==="compositionend"||!af&&Vm(t,i)?(t=Om(),Pl=$u=ka=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zm&&i.locale!=="ko"?null:i.data;default:return null}}var tb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!tb[t.type]:i==="textarea"}function Xm(t,i,s,l){ss?os?os.push(l):os=[l]:ss=l,i=wc(i,"onChange"),0<i.length&&(s=new Bl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Mo=null,Eo=null;function nb(t){Rx(t,0)}function Hl(t){var i=Tr(t);if(Qt(i))return t}function qm(t,i){if(t==="change")return i}var Ym=!1;if(sa){var rf;if(sa){var sf="oninput"in document;if(!sf){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),sf=typeof jm.oninput=="function"}rf=sf}else rf=!1;Ym=rf&&(!document.documentMode||9<document.documentMode)}function Zm(){Mo&&(Mo.detachEvent("onpropertychange",Km),Eo=Mo=null)}function Km(t){if(t.propertyName==="value"&&Hl(Eo)){var i=[];Xm(i,Eo,t,Zu(t)),Lm(nb,i)}}function ib(t,i,s){t==="focusin"?(Zm(),Mo=i,Eo=s,Mo.attachEvent("onpropertychange",Km)):t==="focusout"&&Zm()}function ab(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Eo)}function rb(t,i){if(t==="click")return Hl(i)}function sb(t,i){if(t==="input"||t==="change")return Hl(i)}function ob(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ii=typeof Object.is=="function"?Object.is:ob;function To(t,i){if(ii(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!rn.call(i,f)||!ii(t[f],i[f]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $m(t,i){var s=Qm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Qm(s)}}function Jm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Jm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function eg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=kt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=kt(t.document)}return i}function of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var lb=sa&&"documentMode"in document&&11>=document.documentMode,cs=null,lf=null,Ao=null,cf=!1;function tg(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;cf||cs==null||cs!==kt(l)||(l=cs,"selectionStart"in l&&of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ao&&To(Ao,l)||(Ao=l,l=wc(lf,"onSelect"),0<l.length&&(i=new Bl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=cs)))}function wr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var us={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionrun:wr("Transition","TransitionRun"),transitionstart:wr("Transition","TransitionStart"),transitioncancel:wr("Transition","TransitionCancel"),transitionend:wr("Transition","TransitionEnd")},uf={},ng={};sa&&(ng=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Cr(t){if(uf[t])return uf[t];if(!us[t])return t;var i=us[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in ng)return uf[t]=i[s];return t}var ig=Cr("animationend"),ag=Cr("animationiteration"),rg=Cr("animationstart"),cb=Cr("transitionrun"),ub=Cr("transitionstart"),fb=Cr("transitioncancel"),sg=Cr("transitionend"),og=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function Ci(t,i){og.set(t,i),q(i,[t])}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],fs=0,df=0;function Vl(){for(var t=fs,i=df=fs=0;i<t;){var s=hi[i];hi[i++]=null;var l=hi[i];hi[i++]=null;var f=hi[i];hi[i++]=null;var d=hi[i];if(hi[i++]=null,l!==null&&f!==null){var y=l.pending;y===null?f.next=f:(f.next=y.next,y.next=f),l.pending=f}d!==0&&lg(s,f,d)}}function kl(t,i,s,l){hi[fs++]=t,hi[fs++]=i,hi[fs++]=s,hi[fs++]=l,df|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function hf(t,i,s,l){return kl(t,i,s,l),Wl(t)}function Dr(t,i){return kl(t,null,null,i),Wl(t)}function lg(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-ze(s),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function Wl(t){if(50<jo)throw jo=0,bd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ds={};function db(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,i,s,l){return new db(t,i,s,l)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,i){var s=t.alternate;return s===null?(s=ai(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function cg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Xl(t,i,s,l,f,d){var y=0;if(l=t,typeof t=="function")pf(t)&&(y=1);else if(typeof t=="string")y=xM(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=ai(31,s,i,f),t.elementType=O,t.lanes=d,t;case C:return Nr(s.children,f,d,i);case S:y=8,f|=24;break;case _:return t=ai(12,s,i,f|2),t.elementType=_,t.lanes=d,t;case F:return t=ai(13,s,i,f),t.elementType=F,t.lanes=d,t;case N:return t=ai(19,s,i,f),t.elementType=N,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:y=10;break e;case P:y=9;break e;case D:y=11;break e;case z:y=14;break e;case T:y=16,l=null;break e}y=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=ai(y,s,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function Nr(t,i,s,l){return t=ai(7,t,l,i),t.lanes=s,t}function mf(t,i,s){return t=ai(6,t,null,i),t.lanes=s,t}function ug(t){var i=ai(18,null,null,0);return i.stateNode=t,i}function gf(t,i,s){return i=ai(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var fg=new WeakMap;function pi(t,i){if(typeof t=="object"&&t!==null){var s=fg.get(t);return s!==void 0?s:(i={value:t,source:i,stack:an(i)},fg.set(t,i),i)}return{value:t,source:i,stack:an(i)}}var hs=[],ps=0,ql=null,Ro=0,mi=[],gi=0,Wa=null,Vi=1,ki="";function la(t,i){hs[ps++]=Ro,hs[ps++]=ql,ql=t,Ro=i}function dg(t,i,s){mi[gi++]=Vi,mi[gi++]=ki,mi[gi++]=Wa,Wa=t;var l=Vi;t=ki;var f=32-ze(l)-1;l&=~(1<<f),s+=1;var d=32-ze(i)+f;if(30<d){var y=f-f%5;d=(l&(1<<y)-1).toString(32),l>>=y,f-=y,Vi=1<<32-ze(i)+f|s<<f|l,ki=d+t}else Vi=1<<d|s<<f|l,ki=t}function xf(t){t.return!==null&&(la(t,1),dg(t,1,0))}function vf(t){for(;t===ql;)ql=hs[--ps],hs[ps]=null,Ro=hs[--ps],hs[ps]=null;for(;t===Wa;)Wa=mi[--gi],mi[gi]=null,ki=mi[--gi],mi[gi]=null,Vi=mi[--gi],mi[gi]=null}function hg(t,i){mi[gi++]=Vi,mi[gi++]=ki,mi[gi++]=Wa,Vi=i.id,ki=i.overflow,Wa=t}var Dn=null,Yt=null,yt=!1,Xa=null,xi=!1,_f=Error(r(519));function qa(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(pi(i,t)),_f}function pg(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[mn]=t,i[Cn]=l,s){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(s=0;s<Ko.length;s++)mt(Ko[s],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":mt("invalid",i),Pn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":mt("invalid",i);break;case"textarea":mt("invalid",i),Ri(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Nx(i.textContent,s)?(l.popover!=null&&(mt("beforetoggle",i),mt("toggle",i)),l.onScroll!=null&&mt("scroll",i),l.onScrollEnd!=null&&mt("scrollend",i),l.onClick!=null&&(i.onclick=ra),i=!0):i=!1,i||qa(t,!0)}function mg(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Dn=Dn.return}}function ms(t){if(t!==Dn)return!1;if(!yt)return mg(t),yt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Fd(t.type,t.memoizedProps)),s=!s),s&&Yt&&qa(t),mg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=Hx(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=Hx(t)}else i===27?(i=Yt,sr(t.type)?(t=Vd,Vd=null,Yt=t):Yt=i):Yt=Dn?_i(t.stateNode.nextSibling):null;return!0}function Ur(){Yt=Dn=null,yt=!1}function yf(){var t=Xa;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Xa=null),t}function wo(t){Xa===null?Xa=[t]:Xa.push(t)}var Sf=L(null),Lr=null,ca=null;function Ya(t,i,s){_e(Sf,i._currentValue),i._currentValue=s}function ua(t){t._currentValue=Sf.current,V(Sf)}function bf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Mf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var y=f.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=f;for(var H=0;H<i.length;H++)if(R.context===i[H]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),bf(d.return,s,t),l||(y=null);break e}d=R.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(r(341));y.lanes|=s,d=y.alternate,d!==null&&(d.lanes|=s),bf(y,s,t),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===t){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function gs(t,i,s,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=f.type;ii(f.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(f===be.current){if(y=f.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(tl):t=[tl])}f=f.return}t!==null&&Mf(i,t,s,l),i.flags|=262144}function Yl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Or(t){Lr=t,ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return gg(Lr,t)}function jl(t,i){return Lr===null&&Or(t),gg(t,i)}function gg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ca===null){if(t===null)throw Error(r(308));ca=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ca=ca.next=i;return s}var hb=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},pb=a.unstable_scheduleCallback,mb=a.unstable_NormalPriority,xn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ef(){return{controller:new hb,data:new Map,refCount:0}}function Co(t){t.refCount--,t.refCount===0&&pb(mb,function(){t.controller.abort()})}var Do=null,Tf=0,xs=0,vs=null;function gb(t,i){if(Do===null){var s=Do=[];Tf=0,xs=wd(),vs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Tf++,i.then(xg,xg),i}function xg(){if(--Tf===0&&Do!==null){vs!==null&&(vs.status="fulfilled");var t=Do;Do=null,xs=0,vs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function xb(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var vg=B.S;B.S=function(t,i){tx=zt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&gb(t,i),vg!==null&&vg(t,i)};var Pr=L(null);function Af(){var t=Pr.current;return t!==null?t:Wt.pooledCache}function Zl(t,i){i===null?_e(Pr,Pr.current):_e(Pr,i.pool)}function _g(){var t=Af();return t===null?null:{parent:xn._currentValue,pool:t}}var _s=Error(r(460)),Rf=Error(r(474)),Kl=Error(r(542)),Ql={then:function(){}};function yg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ra,ra),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Mg(t),t;default:if(typeof i.status=="string")i.then(ra,ra);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Mg(t),t}throw Fr=i,_s}}function Ir(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Fr=s,_s):s}}var Fr=null;function bg(){if(Fr===null)throw Error(r(459));var t=Fr;return Fr=null,t}function Mg(t){if(t===_s||t===Kl)throw Error(r(483))}var ys=null,No=0;function $l(t){var i=No;return No+=1,ys===null&&(ys=[]),Sg(ys,t,i)}function Uo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Jl(t,i){throw i.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Eg(t){function i(Z,W){if(t){var ee=Z.deletions;ee===null?(Z.deletions=[W],Z.flags|=16):ee.push(W)}}function s(Z,W){if(!t)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function l(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function f(Z,W){return Z=oa(Z,W),Z.index=0,Z.sibling=null,Z}function d(Z,W,ee){return Z.index=ee,t?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<W?(Z.flags|=67108866,W):ee):(Z.flags|=67108866,W)):(Z.flags|=1048576,W)}function y(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,W,ee,ye){return W===null||W.tag!==6?(W=mf(ee,Z.mode,ye),W.return=Z,W):(W=f(W,ee),W.return=Z,W)}function H(Z,W,ee,ye){var et=ee.type;return et===C?ge(Z,W,ee.props.children,ye,ee.key):W!==null&&(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Ir(et)===W.type)?(W=f(W,ee.props),Uo(W,ee),W.return=Z,W):(W=Xl(ee.type,ee.key,ee.props,null,Z.mode,ye),Uo(W,ee),W.return=Z,W)}function te(Z,W,ee,ye){return W===null||W.tag!==4||W.stateNode.containerInfo!==ee.containerInfo||W.stateNode.implementation!==ee.implementation?(W=gf(ee,Z.mode,ye),W.return=Z,W):(W=f(W,ee.children||[]),W.return=Z,W)}function ge(Z,W,ee,ye,et){return W===null||W.tag!==7?(W=Nr(ee,Z.mode,ye,et),W.return=Z,W):(W=f(W,ee),W.return=Z,W)}function Se(Z,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=mf(""+W,Z.mode,ee),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return ee=Xl(W.type,W.key,W.props,null,Z.mode,ee),Uo(ee,W),ee.return=Z,ee;case E:return W=gf(W,Z.mode,ee),W.return=Z,W;case T:return W=Ir(W),Se(Z,W,ee)}if($(W)||K(W))return W=Nr(W,Z.mode,ee,null),W.return=Z,W;if(typeof W.then=="function")return Se(Z,$l(W),ee);if(W.$$typeof===I)return Se(Z,jl(Z,W),ee);Jl(Z,W)}return null}function oe(Z,W,ee,ye){var et=W!==null?W.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return et!==null?null:R(Z,W,""+ee,ye);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case b:return ee.key===et?H(Z,W,ee,ye):null;case E:return ee.key===et?te(Z,W,ee,ye):null;case T:return ee=Ir(ee),oe(Z,W,ee,ye)}if($(ee)||K(ee))return et!==null?null:ge(Z,W,ee,ye,null);if(typeof ee.then=="function")return oe(Z,W,$l(ee),ye);if(ee.$$typeof===I)return oe(Z,W,jl(Z,ee),ye);Jl(Z,ee)}return null}function ce(Z,W,ee,ye,et){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return Z=Z.get(ee)||null,R(W,Z,""+ye,et);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case b:return Z=Z.get(ye.key===null?ee:ye.key)||null,H(W,Z,ye,et);case E:return Z=Z.get(ye.key===null?ee:ye.key)||null,te(W,Z,ye,et);case T:return ye=Ir(ye),ce(Z,W,ee,ye,et)}if($(ye)||K(ye))return Z=Z.get(ee)||null,ge(W,Z,ye,et,null);if(typeof ye.then=="function")return ce(Z,W,ee,$l(ye),et);if(ye.$$typeof===I)return ce(Z,W,ee,jl(W,ye),et);Jl(W,ye)}return null}function qe(Z,W,ee,ye){for(var et=null,At=null,je=W,ct=W=0,xt=null;je!==null&&ct<ee.length;ct++){je.index>ct?(xt=je,je=null):xt=je.sibling;var Rt=oe(Z,je,ee[ct],ye);if(Rt===null){je===null&&(je=xt);break}t&&je&&Rt.alternate===null&&i(Z,je),W=d(Rt,W,ct),At===null?et=Rt:At.sibling=Rt,At=Rt,je=xt}if(ct===ee.length)return s(Z,je),yt&&la(Z,ct),et;if(je===null){for(;ct<ee.length;ct++)je=Se(Z,ee[ct],ye),je!==null&&(W=d(je,W,ct),At===null?et=je:At.sibling=je,At=je);return yt&&la(Z,ct),et}for(je=l(je);ct<ee.length;ct++)xt=ce(je,Z,ct,ee[ct],ye),xt!==null&&(t&&xt.alternate!==null&&je.delete(xt.key===null?ct:xt.key),W=d(xt,W,ct),At===null?et=xt:At.sibling=xt,At=xt);return t&&je.forEach(function(fr){return i(Z,fr)}),yt&&la(Z,ct),et}function tt(Z,W,ee,ye){if(ee==null)throw Error(r(151));for(var et=null,At=null,je=W,ct=W=0,xt=null,Rt=ee.next();je!==null&&!Rt.done;ct++,Rt=ee.next()){je.index>ct?(xt=je,je=null):xt=je.sibling;var fr=oe(Z,je,Rt.value,ye);if(fr===null){je===null&&(je=xt);break}t&&je&&fr.alternate===null&&i(Z,je),W=d(fr,W,ct),At===null?et=fr:At.sibling=fr,At=fr,je=xt}if(Rt.done)return s(Z,je),yt&&la(Z,ct),et;if(je===null){for(;!Rt.done;ct++,Rt=ee.next())Rt=Se(Z,Rt.value,ye),Rt!==null&&(W=d(Rt,W,ct),At===null?et=Rt:At.sibling=Rt,At=Rt);return yt&&la(Z,ct),et}for(je=l(je);!Rt.done;ct++,Rt=ee.next())Rt=ce(je,Z,ct,Rt.value,ye),Rt!==null&&(t&&Rt.alternate!==null&&je.delete(Rt.key===null?ct:Rt.key),W=d(Rt,W,ct),At===null?et=Rt:At.sibling=Rt,At=Rt);return t&&je.forEach(function(wM){return i(Z,wM)}),yt&&la(Z,ct),et}function Vt(Z,W,ee,ye){if(typeof ee=="object"&&ee!==null&&ee.type===C&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case b:e:{for(var et=ee.key;W!==null;){if(W.key===et){if(et=ee.type,et===C){if(W.tag===7){s(Z,W.sibling),ye=f(W,ee.props.children),ye.return=Z,Z=ye;break e}}else if(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Ir(et)===W.type){s(Z,W.sibling),ye=f(W,ee.props),Uo(ye,ee),ye.return=Z,Z=ye;break e}s(Z,W);break}else i(Z,W);W=W.sibling}ee.type===C?(ye=Nr(ee.props.children,Z.mode,ye,ee.key),ye.return=Z,Z=ye):(ye=Xl(ee.type,ee.key,ee.props,null,Z.mode,ye),Uo(ye,ee),ye.return=Z,Z=ye)}return y(Z);case E:e:{for(et=ee.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===ee.containerInfo&&W.stateNode.implementation===ee.implementation){s(Z,W.sibling),ye=f(W,ee.children||[]),ye.return=Z,Z=ye;break e}else{s(Z,W);break}else i(Z,W);W=W.sibling}ye=gf(ee,Z.mode,ye),ye.return=Z,Z=ye}return y(Z);case T:return ee=Ir(ee),Vt(Z,W,ee,ye)}if($(ee))return qe(Z,W,ee,ye);if(K(ee)){if(et=K(ee),typeof et!="function")throw Error(r(150));return ee=et.call(ee),tt(Z,W,ee,ye)}if(typeof ee.then=="function")return Vt(Z,W,$l(ee),ye);if(ee.$$typeof===I)return Vt(Z,W,jl(Z,ee),ye);Jl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,W!==null&&W.tag===6?(s(Z,W.sibling),ye=f(W,ee),ye.return=Z,Z=ye):(s(Z,W),ye=mf(ee,Z.mode,ye),ye.return=Z,Z=ye),y(Z)):s(Z,W)}return function(Z,W,ee,ye){try{No=0;var et=Vt(Z,W,ee,ye);return ys=null,et}catch(je){if(je===_s||je===Kl)throw je;var At=ai(29,je,null,Z.mode);return At.lanes=ye,At.return=Z,At}finally{}}}var Br=Eg(!0),Tg=Eg(!1),ja=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ct&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Wl(t),lg(t,null,s),i}return kl(t,l,i,s),Wl(t)}function Lo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Jn(t,s)}}function Df(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=y:d=d.next=y,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Nf=!1;function Oo(){if(Nf){var t=vs;if(t!==null)throw t}}function Po(t,i,s,l){Nf=!1;var f=t.updateQueue;ja=!1;var d=f.firstBaseUpdate,y=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var H=R,te=H.next;H.next=null,y===null?d=te:y.next=te,y=H;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==y&&(R===null?ge.firstBaseUpdate=te:R.next=te,ge.lastBaseUpdate=H))}if(d!==null){var Se=f.baseState;y=0,ge=te=H=null,R=d;do{var oe=R.lane&-536870913,ce=oe!==R.lane;if(ce?(gt&oe)===oe:(l&oe)===oe){oe!==0&&oe===xs&&(Nf=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,tt=R;oe=i;var Vt=s;switch(tt.tag){case 1:if(qe=tt.payload,typeof qe=="function"){Se=qe.call(Vt,Se,oe);break e}Se=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=tt.payload,oe=typeof qe=="function"?qe.call(Vt,Se,oe):qe,oe==null)break e;Se=v({},Se,oe);break e;case 2:ja=!0}}oe=R.callback,oe!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=f.callbacks,ce===null?f.callbacks=[oe]:ce.push(oe))}else ce={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(te=ge=ce,H=Se):ge=ge.next=ce,y|=oe;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,f.lastBaseUpdate=ce,f.shared.pending=null}}while(!0);ge===null&&(H=Se),f.baseState=H,f.firstBaseUpdate=te,f.lastBaseUpdate=ge,d===null&&(f.shared.lanes=0),tr|=y,t.lanes=y,t.memoizedState=Se}}function Ag(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Rg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Ag(s[t],i)}var Ss=L(null),ec=L(0);function wg(t,i){t=_a,_e(ec,t),_e(Ss,i),_a=t|i.baseLanes}function Uf(){_e(ec,_a),_e(Ss,Ss.current)}function Lf(){_a=ec.current,V(Ss),V(ec)}var ri=L(null),vi=null;function Qa(t){var i=t.alternate;_e(fn,fn.current&1),_e(ri,t),vi===null&&(i===null||Ss.current!==null||i.memoizedState!==null)&&(vi=t)}function Of(t){_e(fn,fn.current),_e(ri,t),vi===null&&(vi=t)}function Cg(t){t.tag===22?(_e(fn,fn.current),_e(ri,t),vi===null&&(vi=t)):$a()}function $a(){_e(fn,fn.current),_e(ri,ri.current)}function si(t){V(ri),vi===t&&(vi=null),V(fn)}var fn=L(0);function tc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Hd(s)||Gd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var fa=0,lt=null,Ht=null,vn=null,nc=!1,bs=!1,zr=!1,ic=0,Io=0,Ms=null,vb=0;function on(){throw Error(r(321))}function Pf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ii(t[s],i[s]))return!1;return!0}function If(t,i,s,l,f,d){return fa=d,lt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?d0:Qf,zr=!1,d=s(l,f),zr=!1,bs&&(d=Ng(i,s,l,f)),Dg(t),d}function Dg(t){B.H=zo;var i=Ht!==null&&Ht.next!==null;if(fa=0,vn=Ht=lt=null,nc=!1,Io=0,Ms=null,i)throw Error(r(300));t===null||_n||(t=t.dependencies,t!==null&&Yl(t)&&(_n=!0))}function Ng(t,i,s,l){lt=t;var f=0;do{if(bs&&(Ms=null),Io=0,bs=!1,25<=f)throw Error(r(301));if(f+=1,vn=Ht=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=h0,d=i(s,l)}while(bs);return d}function _b(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?Fo(i):i,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(lt.flags|=1024),i}function Ff(){var t=ic!==0;return ic=0,t}function Bf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function zf(t){if(nc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}nc=!1}fa=0,vn=Ht=lt=null,bs=!1,Io=ic=0,Ms=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?lt.memoizedState=vn=t:vn=vn.next=t,vn}function dn(){if(Ht===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var i=vn===null?lt.memoizedState:vn.next;if(i!==null)vn=i,Ht=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},vn===null?lt.memoizedState=vn=t:vn=vn.next=t}return vn}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(t){var i=Io;return Io+=1,Ms===null&&(Ms=[]),t=Sg(Ms,t,i),i=lt,(vn===null?i.memoizedState:vn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?d0:Qf),t}function rc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fo(t);if(t.$$typeof===I)return Nn(t)}throw Error(r(438,String(t)))}function Hf(t){var i=null,s=lt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=lt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=ac(),lt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=j;return i.index++,s}function da(t,i){return typeof i=="function"?i(t):i}function sc(t){var i=dn();return Gf(i,Ht,t)}function Gf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var y=f.next;f.next=d.next,d.next=y}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var R=y=null,H=null,te=i,ge=!1;do{var Se=te.lane&-536870913;if(Se!==te.lane?(gt&Se)===Se:(fa&Se)===Se){var oe=te.revertLane;if(oe===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),Se===xs&&(ge=!0);else if((fa&oe)===oe){te=te.next,oe===xs&&(ge=!0);continue}else Se={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=Se,y=d):H=H.next=Se,lt.lanes|=oe,tr|=oe;Se=te.action,zr&&s(d,Se),d=te.hasEagerState?te.eagerState:s(d,Se)}else oe={lane:Se,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=oe,y=d):H=H.next=oe,lt.lanes|=Se,tr|=Se;te=te.next}while(te!==null&&te!==i);if(H===null?y=d:H.next=R,!ii(d,t.memoizedState)&&(_n=!0,ge&&(s=vs,s!==null)))throw s;t.memoizedState=d,t.baseState=y,t.baseQueue=H,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Vf(t){var i=dn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var y=f=f.next;do d=t(d,y.action),y=y.next;while(y!==f);ii(d,i.memoizedState)||(_n=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function Ug(t,i,s){var l=lt,f=dn(),d=yt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var y=!ii((Ht||f).memoizedState,s);if(y&&(f.memoizedState=s,_n=!0),f=f.queue,Xf(Pg.bind(null,l,f,t),[t]),f.getSnapshot!==i||y||vn!==null&&vn.memoizedState.tag&1){if(l.flags|=2048,Es(9,{destroy:void 0},Og.bind(null,l,f,s,i),null),Wt===null)throw Error(r(349));d||(fa&127)!==0||Lg(l,i,s)}return s}function Lg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=lt.updateQueue,i===null?(i=ac(),lt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Og(t,i,s,l){i.value=s,i.getSnapshot=l,Ig(i)&&Fg(t)}function Pg(t,i,s){return s(function(){Ig(i)&&Fg(t)})}function Ig(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ii(t,s)}catch{return!0}}function Fg(t){var i=Dr(t,2);i!==null&&Zn(i,t,2)}function kf(t){var i=Hn();if(typeof t=="function"){var s=t;if(t=s(),zr){Ce(!0);try{s()}finally{Ce(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},i}function Bg(t,i,s,l){return t.baseState=s,Gf(t,Ht,typeof l=="function"?l:da)}function yb(t,i,s,l,f){if(cc(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,zg(i,d)):(d.next=s.next,i.pending=s.next=d)}}function zg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=B.T,y={};B.T=y;try{var R=s(f,l),H=B.S;H!==null&&H(y,R),Hg(t,i,R)}catch(te){Wf(t,i,te)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=s(f,l),Hg(t,i,d)}catch(te){Wf(t,i,te)}}function Hg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Gg(t,i,l)},function(l){return Wf(t,i,l)}):Gg(t,i,s)}function Gg(t,i,s){i.status="fulfilled",i.value=s,Vg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,zg(t,s)))}function Wf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Vg(i),i=i.next;while(i!==l)}t.action=null}function Vg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function kg(t,i){return i}function Wg(t,i){if(yt){var s=Wt.formState;if(s!==null){e:{var l=lt;if(yt){if(Yt){t:{for(var f=Yt,d=xi;f.nodeType!==8;){if(!d){f=null;break t}if(f=_i(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Yt=_i(f.nextSibling),l=f.data==="F!";break e}}qa(l)}l=!1}l&&(i=s[0])}}return s=Hn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kg,lastRenderedState:i},s.queue=l,s=c0.bind(null,lt,l),l.dispatch=s,l=kf(!1),d=Kf.bind(null,lt,!1,l.queue),l=Hn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=yb.bind(null,lt,f,d,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Xg(t){var i=dn();return qg(i,Ht,t)}function qg(t,i,s){if(i=Gf(t,i,kg)[0],t=sc(da)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Fo(i)}catch(y){throw y===_s?Kl:y}else l=i;i=dn();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(lt.flags|=2048,Es(9,{destroy:void 0},Sb.bind(null,f,s),null)),[l,d,t]}function Sb(t,i){t.action=i}function Yg(t){var i=dn(),s=Ht;if(s!==null)return qg(i,s,t);dn(),i=i.memoizedState,s=dn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Es(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=lt.updateQueue,i===null&&(i=ac(),lt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function jg(){return dn().memoizedState}function oc(t,i,s,l){var f=Hn();lt.flags|=t,f.memoizedState=Es(1|i,{destroy:void 0},s,l===void 0?null:l)}function lc(t,i,s,l){var f=dn();l=l===void 0?null:l;var d=f.memoizedState.inst;Ht!==null&&l!==null&&Pf(l,Ht.memoizedState.deps)?f.memoizedState=Es(i,d,s,l):(lt.flags|=t,f.memoizedState=Es(1|i,d,s,l))}function Zg(t,i){oc(8390656,8,t,i)}function Xf(t,i){lc(2048,8,t,i)}function bb(t){lt.flags|=4;var i=lt.updateQueue;if(i===null)i=ac(),lt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Kg(t){var i=dn().memoizedState;return bb({ref:i,nextImpl:t}),function(){if((Ct&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function Qg(t,i){return lc(4,2,t,i)}function $g(t,i){return lc(4,4,t,i)}function Jg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function e0(t,i,s){s=s!=null?s.concat([t]):null,lc(4,4,Jg.bind(null,i,t),s)}function qf(){}function t0(t,i){var s=dn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Pf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function n0(t,i){var s=dn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Pf(i,l[1]))return l[0];if(l=t(),zr){Ce(!0);try{t()}finally{Ce(!1)}}return s.memoizedState=[l,i],l}function Yf(t,i,s){return s===void 0||(fa&1073741824)!==0&&(gt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=ix(),lt.lanes|=t,tr|=t,s)}function i0(t,i,s,l){return ii(s,i)?s:Ss.current!==null?(t=Yf(t,s,l),ii(t,i)||(_n=!0),t):(fa&42)===0||(fa&1073741824)!==0&&(gt&261930)===0?(_n=!0,t.memoizedState=s):(t=ix(),lt.lanes|=t,tr|=t,i)}function a0(t,i,s,l,f){var d=G.p;G.p=d!==0&&8>d?d:8;var y=B.T,R={};B.T=R,Kf(t,!1,i,s);try{var H=f(),te=B.S;if(te!==null&&te(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ge=xb(H,l);Bo(t,i,ge,ci(t))}else Bo(t,i,l,ci(t))}catch(Se){Bo(t,i,{then:function(){},status:"rejected",reason:Se},ci())}finally{G.p=d,y!==null&&R.types!==null&&(y.types=R.types),B.T=y}}function Mb(){}function jf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=r0(t).queue;a0(t,f,i,J,s===null?Mb:function(){return s0(t),s(l)})}function r0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:J},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function s0(t){var i=r0(t);i.next===null&&(i=t.alternate.memoizedState),Bo(t,i.next.queue,{},ci())}function Zf(){return Nn(tl)}function o0(){return dn().memoizedState}function l0(){return dn().memoizedState}function Eb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ci();t=Za(s);var l=Ka(i,t,s);l!==null&&(Zn(l,i,s),Lo(l,i,s)),i={cache:Ef()},t.payload=i;return}i=i.return}}function Tb(t,i,s){var l=ci();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},cc(t)?u0(i,s):(s=hf(t,i,s,l),s!==null&&(Zn(s,t,l),f0(s,i,l)))}function c0(t,i,s){var l=ci();Bo(t,i,s,l)}function Bo(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(cc(t))u0(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var y=i.lastRenderedState,R=d(y,s);if(f.hasEagerState=!0,f.eagerState=R,ii(R,y))return kl(t,i,f,0),Wt===null&&Vl(),!1}catch{}finally{}if(s=hf(t,i,f,l),s!==null)return Zn(s,t,l),f0(s,i,l),!0}return!1}function Kf(t,i,s,l){if(l={lane:2,revertLane:wd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},cc(t)){if(i)throw Error(r(479))}else i=hf(t,s,l,2),i!==null&&Zn(i,t,2)}function cc(t){var i=t.alternate;return t===lt||i!==null&&i===lt}function u0(t,i){bs=nc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function f0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Jn(t,s)}}var zo={readContext:Nn,use:rc,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};zo.useEffectEvent=on;var d0={readContext:Nn,use:rc,useCallback:function(t,i){return Hn().memoizedState=[t,i===void 0?null:i],t},useContext:Nn,useEffect:Zg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,oc(4194308,4,Jg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return oc(4194308,4,t,i)},useInsertionEffect:function(t,i){oc(4,2,t,i)},useMemo:function(t,i){var s=Hn();i=i===void 0?null:i;var l=t();if(zr){Ce(!0);try{t()}finally{Ce(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Hn();if(s!==void 0){var f=s(i);if(zr){Ce(!0);try{s(i)}finally{Ce(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Tb.bind(null,lt,t),[l.memoizedState,t]},useRef:function(t){var i=Hn();return t={current:t},i.memoizedState=t},useState:function(t){t=kf(t);var i=t.queue,s=c0.bind(null,lt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:qf,useDeferredValue:function(t,i){var s=Hn();return Yf(s,t,i)},useTransition:function(){var t=kf(!1);return t=a0.bind(null,lt,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=lt,f=Hn();if(yt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Wt===null)throw Error(r(349));(gt&127)!==0||Lg(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,Zg(Pg.bind(null,l,d,t),[t]),l.flags|=2048,Es(9,{destroy:void 0},Og.bind(null,l,d,s,i),null),s},useId:function(){var t=Hn(),i=Wt.identifierPrefix;if(yt){var s=ki,l=Vi;s=(l&~(1<<32-ze(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=ic++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=vb++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Zf,useFormState:Wg,useActionState:Wg,useOptimistic:function(t){var i=Hn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Kf.bind(null,lt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Hf,useCacheRefresh:function(){return Hn().memoizedState=Eb.bind(null,lt)},useEffectEvent:function(t){var i=Hn(),s={impl:t};return i.memoizedState=s,function(){if((Ct&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Qf={readContext:Nn,use:rc,useCallback:t0,useContext:Nn,useEffect:Xf,useImperativeHandle:e0,useInsertionEffect:Qg,useLayoutEffect:$g,useMemo:n0,useReducer:sc,useRef:jg,useState:function(){return sc(da)},useDebugValue:qf,useDeferredValue:function(t,i){var s=dn();return i0(s,Ht.memoizedState,t,i)},useTransition:function(){var t=sc(da)[0],i=dn().memoizedState;return[typeof t=="boolean"?t:Fo(t),i]},useSyncExternalStore:Ug,useId:o0,useHostTransitionStatus:Zf,useFormState:Xg,useActionState:Xg,useOptimistic:function(t,i){var s=dn();return Bg(s,Ht,t,i)},useMemoCache:Hf,useCacheRefresh:l0};Qf.useEffectEvent=Kg;var h0={readContext:Nn,use:rc,useCallback:t0,useContext:Nn,useEffect:Xf,useImperativeHandle:e0,useInsertionEffect:Qg,useLayoutEffect:$g,useMemo:n0,useReducer:Vf,useRef:jg,useState:function(){return Vf(da)},useDebugValue:qf,useDeferredValue:function(t,i){var s=dn();return Ht===null?Yf(s,t,i):i0(s,Ht.memoizedState,t,i)},useTransition:function(){var t=Vf(da)[0],i=dn().memoizedState;return[typeof t=="boolean"?t:Fo(t),i]},useSyncExternalStore:Ug,useId:o0,useHostTransitionStatus:Zf,useFormState:Yg,useActionState:Yg,useOptimistic:function(t,i){var s=dn();return Ht!==null?Bg(s,Ht,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:l0};h0.useEffectEvent=Kg;function $f(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Jf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ci(),f=Za(l);f.payload=i,s!=null&&(f.callback=s),i=Ka(t,f,l),i!==null&&(Zn(i,t,l),Lo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ci(),f=Za(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ka(t,f,l),i!==null&&(Zn(i,t,l),Lo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ci(),l=Za(s);l.tag=2,i!=null&&(l.callback=i),i=Ka(t,l,s),i!==null&&(Zn(i,t,s),Lo(i,t,s))}};function p0(t,i,s,l,f,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,y):i.prototype&&i.prototype.isPureReactComponent?!To(s,l)||!To(f,d):!0}function m0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Jf.enqueueReplaceState(i,i.state,null)}function Hr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function g0(t){Gl(t)}function x0(t){console.error(t)}function v0(t){Gl(t)}function uc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function _0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ed(t,i,s){return s=Za(s),s.tag=3,s.payload={element:null},s.callback=function(){uc(t,i)},s}function y0(t){return t=Za(t),t.tag=3,t}function S0(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){_0(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){_0(i,s,l),typeof f!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function Ab(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&gs(i,s,f,!0),s=ri.current,s!==null){switch(s.tag){case 31:case 13:return vi===null?bc():s.alternate===null&&ln===0&&(ln=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Ql?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Td(t,l,f)),!1;case 22:return s.flags|=65536,l===Ql?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Td(t,l,f)),!1}throw Error(r(435,s.tag))}return Td(t,l,f),bc(),!1}if(yt)return i=ri.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==_f&&(t=Error(r(422),{cause:l}),wo(pi(t,s)))):(l!==_f&&(i=Error(r(423),{cause:l}),wo(pi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=pi(l,s),f=ed(t.stateNode,l,f),Df(t,f),ln!==4&&(ln=2)),!1;var d=Error(r(520),{cause:l});if(d=pi(d,s),Yo===null?Yo=[d]:Yo.push(d),ln!==4&&(ln=2),i===null)return!0;l=pi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=ed(s.stateNode,l,t),Df(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(nr===null||!nr.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=y0(f),S0(f,t,s,l),Df(s,f),!1}s=s.return}while(s!==null);return!1}var td=Error(r(461)),_n=!1;function Un(t,i,s,l){i.child=t===null?Tg(i,null,s,l):Br(i,t.child,s,l)}function b0(t,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var y={};for(var R in l)R!=="ref"&&(y[R]=l[R])}else y=l;return Or(i),l=If(t,i,s,y,d,f),R=Ff(),t!==null&&!_n?(Bf(t,i,f),ha(t,i,f)):(yt&&R&&xf(i),i.flags|=1,Un(t,i,l,f),i.child)}function M0(t,i,s,l,f){if(t===null){var d=s.type;return typeof d=="function"&&!pf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,E0(t,i,d,l,f)):(t=Xl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!cd(t,f)){var y=d.memoizedProps;if(s=s.compare,s=s!==null?s:To,s(y,l)&&t.ref===i.ref)return ha(t,i,f)}return i.flags|=1,t=oa(d,l),t.ref=i.ref,t.return=i,i.child=t}function E0(t,i,s,l,f){if(t!==null){var d=t.memoizedProps;if(To(d,l)&&t.ref===i.ref)if(_n=!1,i.pendingProps=l=d,cd(t,f))(t.flags&131072)!==0&&(_n=!0);else return i.lanes=t.lanes,ha(t,i,f)}return nd(t,i,s,l,f)}function T0(t,i,s,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return A0(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(i,d!==null?d.cachePool:null),d!==null?wg(i,d):Uf(),Cg(i);else return l=i.lanes=536870912,A0(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(Zl(i,d.cachePool),wg(i,d),$a(),i.memoizedState=null):(t!==null&&Zl(i,null),Uf(),$a());return Un(t,i,f,s),i.child}function Ho(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function A0(t,i,s,l,f){var d=Af();return d=d===null?null:{parent:xn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&Zl(i,null),Uf(),Cg(i),t!==null&&gs(t,i,l,!0),i.childLanes=f,null}function fc(t,i){return i=hc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function R0(t,i,s){return Br(i,t.child,null,s),t=fc(i,i.pendingProps),t.flags|=2,si(i),i.memoizedState=null,t}function Rb(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(yt){if(l.mode==="hidden")return t=fc(i,l),i.lanes=536870912,Ho(null,t);if(Of(i),(t=Yt)?(t=zx(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},s=ug(t),s.return=i,i.child=s,Dn=i,Yt=null)):t=null,t===null)throw qa(i);return i.lanes=536870912,null}return fc(i,l)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(Of(i),f)if(i.flags&256)i.flags&=-257,i=R0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(_n||gs(t,i,s,!1),f=(s&t.childLanes)!==0,_n||f){if(l=Wt,l!==null&&(y=ei(l,s),y!==0&&y!==d.retryLane))throw d.retryLane=y,Dr(t,y),Zn(l,t,y),td;bc(),i=R0(t,i,s)}else t=d.treeContext,Yt=_i(y.nextSibling),Dn=i,yt=!0,Xa=null,xi=!1,t!==null&&hg(i,t),i=fc(i,l),i.flags|=4096;return i}return t=oa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function dc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function nd(t,i,s,l,f){return Or(i),s=If(t,i,s,l,void 0,f),l=Ff(),t!==null&&!_n?(Bf(t,i,f),ha(t,i,f)):(yt&&l&&xf(i),i.flags|=1,Un(t,i,s,f),i.child)}function w0(t,i,s,l,f,d){return Or(i),i.updateQueue=null,s=Ng(i,l,s,f),Dg(t),l=Ff(),t!==null&&!_n?(Bf(t,i,d),ha(t,i,d)):(yt&&l&&xf(i),i.flags|=1,Un(t,i,s,d),i.child)}function C0(t,i,s,l,f){if(Or(i),i.stateNode===null){var d=ds,y=s.contextType;typeof y=="object"&&y!==null&&(d=Nn(y)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Jf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},wf(i),y=s.contextType,d.context=typeof y=="object"&&y!==null?Nn(y):ds,d.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&($f(i,s,y,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Jf.enqueueReplaceState(d,d.state,null),Po(i,l,d,f),Oo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var R=i.memoizedProps,H=Hr(s,R);d.props=H;var te=d.context,ge=s.contextType;y=ds,typeof ge=="object"&&ge!==null&&(y=Nn(ge));var Se=s.getDerivedStateFromProps;ge=typeof Se=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||te!==y)&&m0(i,d,l,y),ja=!1;var oe=i.memoizedState;d.state=oe,Po(i,l,d,f),Oo(),te=i.memoizedState,R||oe!==te||ja?(typeof Se=="function"&&($f(i,s,Se,l),te=i.memoizedState),(H=ja||p0(i,s,H,l,oe,te,y))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=te),d.props=l,d.state=te,d.context=y,l=H):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Cf(t,i),y=i.memoizedProps,ge=Hr(s,y),d.props=ge,Se=i.pendingProps,oe=d.context,te=s.contextType,H=ds,typeof te=="object"&&te!==null&&(H=Nn(te)),R=s.getDerivedStateFromProps,(te=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Se||oe!==H)&&m0(i,d,l,H),ja=!1,oe=i.memoizedState,d.state=oe,Po(i,l,d,f),Oo();var ce=i.memoizedState;y!==Se||oe!==ce||ja||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof R=="function"&&($f(i,s,R,l),ce=i.memoizedState),(ge=ja||p0(i,s,ge,l,oe,ce,H)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(te||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ce,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ce,H)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&oe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&oe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ce),d.props=l,d.state=ce,d.context=H,l=ge):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&oe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&oe===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,dc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Br(i,t.child,null,f),i.child=Br(i,null,s,f)):Un(t,i,s,f),i.memoizedState=d.state,t=i.child):t=ha(t,i,f),t}function D0(t,i,s,l){return Ur(),i.flags|=256,Un(t,i,s,l),i.child}var id={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ad(t){return{baseLanes:t,cachePool:_g()}}function rd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=li),t}function N0(t,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(fn.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(yt){if(f?Qa(i):$a(),(t=Yt)?(t=zx(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},s=ug(t),s.return=i,i.child=s,Dn=i,Yt=null)):t=null,t===null)throw qa(i);return Gd(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?($a(),f=i.mode,R=hc({mode:"hidden",children:R},f),l=Nr(l,f,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=ad(s),l.childLanes=rd(t,y,s),i.memoizedState=id,Ho(null,l)):(Qa(i),sd(i,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(d)i.flags&256?(Qa(i),i.flags&=-257,i=od(t,i,s)):i.memoizedState!==null?($a(),i.child=t.child,i.flags|=128,i=null):($a(),R=l.fallback,f=i.mode,l=hc({mode:"visible",children:l.children},f),R=Nr(R,f,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Br(i,t.child,null,s),l=i.child,l.memoizedState=ad(s),l.childLanes=rd(t,y,s),i.memoizedState=id,i=Ho(null,l));else if(Qa(i),Gd(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var te=y.dgst;y=te,l=Error(r(419)),l.stack="",l.digest=y,wo({value:l,source:null,stack:null}),i=od(t,i,s)}else if(_n||gs(t,i,s,!1),y=(s&t.childLanes)!==0,_n||y){if(y=Wt,y!==null&&(l=ei(y,s),l!==0&&l!==H.retryLane))throw H.retryLane=l,Dr(t,l),Zn(y,t,l),td;Hd(R)||bc(),i=od(t,i,s)}else Hd(R)?(i.flags|=192,i.child=t.child,i=null):(t=H.treeContext,Yt=_i(R.nextSibling),Dn=i,yt=!0,Xa=null,xi=!1,t!==null&&hg(i,t),i=sd(i,l.children),i.flags|=4096);return i}return f?($a(),R=l.fallback,f=i.mode,H=t.child,te=H.sibling,l=oa(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,te!==null?R=oa(te,R):(R=Nr(R,f,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,Ho(null,l),l=i.child,R=t.child.memoizedState,R===null?R=ad(s):(f=R.cachePool,f!==null?(H=xn._currentValue,f=f.parent!==H?{parent:H,pool:H}:f):f=_g(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=rd(t,y,s),i.memoizedState=id,Ho(t.child,l)):(Qa(i),s=t.child,t=s.sibling,s=oa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=s,i.memoizedState=null,s)}function sd(t,i){return i=hc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function hc(t,i){return t=ai(22,t,null,i),t.lanes=0,t}function od(t,i,s){return Br(i,t.child,null,s),t=sd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function U0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),bf(t.return,i,s)}function ld(t,i,s,l,f,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=f,y.treeForkCount=d)}function L0(t,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var y=fn.current,R=(y&2)!==0;if(R?(y=y&1|2,i.flags|=128):y&=1,_e(fn,y),Un(t,i,l,s),l=yt?Ro:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&U0(t,s,i);else if(t.tag===19)U0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&tc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),ld(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&tc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}ld(i,!0,s,null,d,l);break;case"together":ld(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ha(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),tr|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(gs(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=oa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=oa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function cd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function wb(t,i,s){switch(i.tag){case 3:Ee(i,i.stateNode.containerInfo),Ya(i,xn,t.memoizedState.cache),Ur();break;case 27:case 5:nt(i);break;case 4:Ee(i,i.stateNode.containerInfo);break;case 10:Ya(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Of(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?N0(t,i,s):(Qa(i),t=ha(t,i,s),t!==null?t.sibling:null);Qa(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(gs(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return L0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),_e(fn,fn.current),l)break;return null;case 22:return i.lanes=0,T0(t,i,s,i.pendingProps);case 24:Ya(i,xn,t.memoizedState.cache)}return ha(t,i,s)}function O0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)_n=!0;else{if(!cd(t,s)&&(i.flags&128)===0)return _n=!1,wb(t,i,s);_n=(t.flags&131072)!==0}else _n=!1,yt&&(i.flags&1048576)!==0&&dg(i,Ro,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Ir(i.elementType),i.type=t,typeof t=="function")pf(t)?(l=Hr(t,l),i.tag=1,i=C0(null,i,t,l,s)):(i.tag=0,i=nd(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===D){i.tag=11,i=b0(null,i,t,l,s);break e}else if(f===z){i.tag=14,i=M0(null,i,t,l,s);break e}}throw i=pe(t)||t,Error(r(306,i,""))}}return i;case 0:return nd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Hr(l,i.pendingProps),C0(t,i,l,f,s);case 3:e:{if(Ee(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Cf(t,i),Po(i,l,null,s);var y=i.memoizedState;if(l=y.cache,Ya(i,xn,l),l!==d.cache&&Mf(i,[xn],s,!0),Oo(),l=y.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=D0(t,i,l,s);break e}else if(l!==f){f=pi(Error(r(424)),i),wo(f),i=D0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=_i(t.firstChild),Dn=i,yt=!0,Xa=null,xi=!0,s=Tg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ur(),l===f){i=ha(t,i,s);break e}Un(t,i,l,s)}i=i.child}return i;case 26:return dc(t,i),t===null?(s=Xx(i.type,null,i.pendingProps,null))?i.memoizedState=s:yt||(s=i.type,t=i.pendingProps,l=Cc(ne.current).createElement(s),l[mn]=i,l[Cn]=t,Ln(l,s,t),gn(l),i.stateNode=l):i.memoizedState=Xx(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return nt(i),t===null&&yt&&(l=i.stateNode=Vx(i.type,i.pendingProps,ne.current),Dn=i,xi=!0,f=Yt,sr(i.type)?(Vd=f,Yt=_i(l.firstChild)):Yt=f),Un(t,i,i.pendingProps.children,s),dc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&yt&&((f=l=Yt)&&(l=aM(l,i.type,i.pendingProps,xi),l!==null?(i.stateNode=l,Dn=i,Yt=_i(l.firstChild),xi=!1,f=!0):f=!1),f||qa(i)),nt(i),f=i.type,d=i.pendingProps,y=t!==null?t.memoizedProps:null,l=d.children,Fd(f,d)?l=null:y!==null&&Fd(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=If(t,i,_b,null,null,s),tl._currentValue=f),dc(t,i),Un(t,i,l,s),i.child;case 6:return t===null&&yt&&((t=s=Yt)&&(s=rM(s,i.pendingProps,xi),s!==null?(i.stateNode=s,Dn=i,Yt=null,t=!0):t=!1),t||qa(i)),null;case 13:return N0(t,i,s);case 4:return Ee(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Br(i,null,l,s):Un(t,i,l,s),i.child;case 11:return b0(t,i,i.type,i.pendingProps,s);case 7:return Un(t,i,i.pendingProps,s),i.child;case 8:return Un(t,i,i.pendingProps.children,s),i.child;case 12:return Un(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ya(i,i.type,l.value),Un(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Or(i),f=Nn(f),l=l(f),i.flags|=1,Un(t,i,l,s),i.child;case 14:return M0(t,i,i.type,i.pendingProps,s);case 15:return E0(t,i,i.type,i.pendingProps,s);case 19:return L0(t,i,s);case 31:return Rb(t,i,s);case 22:return T0(t,i,s,i.pendingProps);case 24:return Or(i),l=Nn(xn),t===null?(f=Af(),f===null&&(f=Wt,d=Ef(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},wf(i),Ya(i,xn,f)):((t.lanes&s)!==0&&(Cf(t,i),Po(i,null,null,s),Oo()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ya(i,xn,l)):(l=d.cache,Ya(i,xn,l),l!==f.cache&&Mf(i,[xn],s,!0))),Un(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function pa(t){t.flags|=4}function ud(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(ox())t.flags|=8192;else throw Fr=Ql,Rf}else t.flags&=-16777217}function P0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Kx(i))if(ox())t.flags|=8192;else throw Fr=Ql,Rf}function pc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Me():536870912,t.lanes|=i,ws|=i)}function Go(t,i){if(!yt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function jt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function Cb(t,i,s){var l=i.pendingProps;switch(vf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(i),null;case 1:return jt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ua(xn),Ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(ms(i)?pa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yf())),jt(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(pa(i),d!==null?(jt(i),P0(i,d)):(jt(i),ud(i,f,null,l,s))):d?d!==t.memoizedState?(pa(i),jt(i),P0(i,d)):(jt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&pa(i),jt(i),ud(i,f,t,l,s)),null;case 27:if(Qe(i),s=ne.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&pa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return jt(i),null}t=Ae.current,ms(i)?pg(i):(t=Vx(f,l,s),i.stateNode=t,pa(i))}return jt(i),null;case 5:if(Qe(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&pa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return jt(i),null}if(d=Ae.current,ms(i))pg(i);else{var y=Cc(ne.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?y.createElement(f,{is:l.is}):y.createElement(f)}}d[mn]=i,d[Cn]=l;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=d;e:switch(Ln(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&pa(i)}}return jt(i),ud(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&pa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=ne.current,ms(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Dn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[mn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Nx(t.nodeValue,s)),t||qa(i,!0)}else t=Cc(t).createTextNode(l),t[mn]=i,i.stateNode=t}return jt(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=ms(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[mn]=i}else Ur(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jt(i),t=!1}else s=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(si(i),i):(si(i),null);if((i.flags&128)!==0)throw Error(r(558))}return jt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=ms(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[mn]=i}else Ur(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jt(i),f=!1}else f=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(si(i),i):(si(i),null)}return si(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),pc(i,i.updateQueue),jt(i),null);case 4:return Ge(),t===null&&Ud(i.stateNode.containerInfo),jt(i),null;case 10:return ua(i.type),jt(i),null;case 19:if(V(fn),l=i.memoizedState,l===null)return jt(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)Go(l,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=tc(t),d!==null){for(i.flags|=128,Go(l,!1),t=d.updateQueue,i.updateQueue=t,pc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)cg(s,t),s=s.sibling;return _e(fn,fn.current&1|2),yt&&la(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&zt()>_c&&(i.flags|=128,f=!0,Go(l,!1),i.lanes=4194304)}else{if(!f)if(t=tc(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,pc(i,t),Go(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!yt)return jt(i),null}else 2*zt()-l.renderingStartTime>_c&&s!==536870912&&(i.flags|=128,f=!0,Go(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=zt(),t.sibling=null,s=fn.current,_e(fn,f?s&1|2:s&1),yt&&la(i,l.treeForkCount),t):(jt(i),null);case 22:case 23:return si(i),Lf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(jt(i),i.subtreeFlags&6&&(i.flags|=8192)):jt(i),s=i.updateQueue,s!==null&&pc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&V(Pr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ua(xn),jt(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Db(t,i){switch(vf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ua(xn),Ge(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Qe(i),null;case 31:if(i.memoizedState!==null){if(si(i),i.alternate===null)throw Error(r(340));Ur()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(si(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Ur()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return V(fn),null;case 4:return Ge(),null;case 10:return ua(i.type),null;case 22:case 23:return si(i),Lf(),t!==null&&V(Pr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ua(xn),null;case 25:return null;default:return null}}function I0(t,i){switch(vf(i),i.tag){case 3:ua(xn),Ge();break;case 26:case 27:case 5:Qe(i);break;case 4:Ge();break;case 31:i.memoizedState!==null&&si(i);break;case 13:si(i);break;case 19:V(fn);break;case 10:ua(i.type);break;case 22:case 23:si(i),Lf(),t!==null&&V(Pr);break;case 24:ua(xn)}}function Vo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var d=s.create,y=s.inst;l=d(),y.destroy=l}s=s.next}while(s!==f)}}catch(R){Ft(i,i.return,R)}}function Ja(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var y=l.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,f=i;var H=s,te=R;try{te()}catch(ge){Ft(f,H,ge)}}}l=l.next}while(l!==d)}}catch(ge){Ft(i,i.return,ge)}}function F0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Rg(i,s)}catch(l){Ft(t,t.return,l)}}}function B0(t,i,s){s.props=Hr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Ft(t,i,l)}}function ko(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Ft(t,i,f)}}function Wi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Ft(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Ft(t,i,f)}else s.current=null}function z0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Ft(t,t.return,f)}}function fd(t,i,s){try{var l=t.stateNode;$b(l,t.type,s,i),l[Cn]=i}catch(f){Ft(t,t.return,f)}}function H0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&sr(t.type)||t.tag===4}function dd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&sr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ra));else if(l!==4&&(l===27&&sr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(hd(t,i,s),t=t.sibling;t!==null;)hd(t,i,s),t=t.sibling}function mc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&sr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(mc(t,i,s),t=t.sibling;t!==null;)mc(t,i,s),t=t.sibling}function G0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Ln(i,l,s),i[mn]=t,i[Cn]=s}catch(d){Ft(t,t.return,d)}}var ma=!1,yn=!1,pd=!1,V0=typeof WeakSet=="function"?WeakSet:Set,An=null;function Nb(t,i){if(t=t.containerInfo,Pd=Ic,t=eg(t),of(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var y=0,R=-1,H=-1,te=0,ge=0,Se=t,oe=null;t:for(;;){for(var ce;Se!==s||f!==0&&Se.nodeType!==3||(R=y+f),Se!==d||l!==0&&Se.nodeType!==3||(H=y+l),Se.nodeType===3&&(y+=Se.nodeValue.length),(ce=Se.firstChild)!==null;)oe=Se,Se=ce;for(;;){if(Se===t)break t;if(oe===s&&++te===f&&(R=y),oe===d&&++ge===l&&(H=y),(ce=Se.nextSibling)!==null)break;Se=oe,oe=Se.parentNode}Se=ce}s=R===-1||H===-1?null:{start:R,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Id={focusedElem:t,selectionRange:s},Ic=!1,An=i;An!==null;)if(i=An,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,An=t;else for(;An!==null;){switch(i=An,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var qe=Hr(s.type,f);t=l.getSnapshotBeforeUpdate(qe,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ft(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)zd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,An=t;break}An=i.return}}function k0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:xa(t,s),l&4&&Vo(5,s);break;case 1:if(xa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(y){Ft(s,s.return,y)}else{var f=Hr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Ft(s,s.return,y)}}l&64&&F0(s),l&512&&ko(s,s.return);break;case 3:if(xa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Rg(t,i)}catch(y){Ft(s,s.return,y)}}break;case 27:i===null&&l&4&&G0(s);case 26:case 5:xa(t,s),i===null&&l&4&&z0(s),l&512&&ko(s,s.return);break;case 12:xa(t,s);break;case 31:xa(t,s),l&4&&q0(t,s);break;case 13:xa(t,s),l&4&&Y0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Hb.bind(null,s),sM(t,s))));break;case 22:if(l=s.memoizedState!==null||ma,!l){i=i!==null&&i.memoizedState!==null||yn,f=ma;var d=yn;ma=l,(yn=i)&&!d?va(t,s,(s.subtreeFlags&8772)!==0):xa(t,s),ma=f,yn=d}break;case 30:break;default:xa(t,s)}}function W0(t){var i=t.alternate;i!==null&&(t.alternate=null,W0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ha(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Xn=!1;function ga(t,i,s){for(s=s.child;s!==null;)X0(t,i,s),s=s.sibling}function X0(t,i,s){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(de,s)}catch{}switch(s.tag){case 26:yn||Wi(s,i),ga(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||Wi(s,i);var l=Jt,f=Xn;sr(s.type)&&(Jt=s.stateNode,Xn=!1),ga(t,i,s),$o(s.stateNode),Jt=l,Xn=f;break;case 5:yn||Wi(s,i);case 6:if(l=Jt,f=Xn,Jt=null,ga(t,i,s),Jt=l,Xn=f,Jt!==null)if(Xn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(s.stateNode)}catch(d){Ft(s,i,d)}else try{Jt.removeChild(s.stateNode)}catch(d){Ft(s,i,d)}break;case 18:Jt!==null&&(Xn?(t=Jt,Fx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Is(t)):Fx(Jt,s.stateNode));break;case 4:l=Jt,f=Xn,Jt=s.stateNode.containerInfo,Xn=!0,ga(t,i,s),Jt=l,Xn=f;break;case 0:case 11:case 14:case 15:Ja(2,s,i),yn||Ja(4,s,i),ga(t,i,s);break;case 1:yn||(Wi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&B0(s,i,l)),ga(t,i,s);break;case 21:ga(t,i,s);break;case 22:yn=(l=yn)||s.memoizedState!==null,ga(t,i,s),yn=l;break;default:ga(t,i,s)}}function q0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Is(t)}catch(s){Ft(i,i.return,s)}}}function Y0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Is(t)}catch(s){Ft(i,i.return,s)}}function Ub(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new V0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new V0),i;default:throw Error(r(435,t.tag))}}function gc(t,i){var s=Ub(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=Gb.bind(null,t,l);l.then(f,f)}})}function qn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=t,y=i,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(sr(R.type)){Jt=R.stateNode,Xn=!1;break e}break;case 5:Jt=R.stateNode,Xn=!1;break e;case 3:case 4:Jt=R.stateNode.containerInfo,Xn=!0;break e}R=R.return}if(Jt===null)throw Error(r(160));X0(d,y,f),Jt=null,Xn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)j0(i,t),i=i.sibling}var Di=null;function j0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(i,t),Yn(t),l&4&&(Ja(3,t,t.return),Vo(3,t),Ja(5,t,t.return));break;case 1:qn(i,t),Yn(t),l&512&&(yn||s===null||Wi(s,s.return)),l&64&&ma&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Di;if(qn(i,t),Yn(t),l&512&&(yn||s===null||Wi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[za]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Ln(d,l,s),d[mn]=t,gn(d),l=d;break e;case"link":var y=jx("link","href",f).get(l+(s.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(R,1);break t}}d=f.createElement(l),Ln(d,l,s),f.head.appendChild(d);break;case"meta":if(y=jx("meta","content",f).get(l+(s.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(R,1);break t}}d=f.createElement(l),Ln(d,l,s),f.head.appendChild(d);break;default:throw Error(r(468,l))}d[mn]=t,gn(d),l=d}t.stateNode=l}else Zx(f,t.type,t.stateNode);else t.stateNode=Yx(f,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?Zx(f,t.type,t.stateNode):Yx(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&fd(t,t.memoizedProps,s.memoizedProps)}break;case 27:qn(i,t),Yn(t),l&512&&(yn||s===null||Wi(s,s.return)),s!==null&&l&4&&fd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(qn(i,t),Yn(t),l&512&&(yn||s===null||Wi(s,s.return)),t.flags&32){f=t.stateNode;try{ni(f,"")}catch(qe){Ft(t,t.return,qe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,fd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(pd=!0);break;case 6:if(qn(i,t),Yn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(qe){Ft(t,t.return,qe)}}break;case 3:if(Uc=null,f=Di,Di=Dc(i.containerInfo),qn(i,t),Di=f,Yn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Is(i.containerInfo)}catch(qe){Ft(t,t.return,qe)}pd&&(pd=!1,Z0(t));break;case 4:l=Di,Di=Dc(t.stateNode.containerInfo),qn(i,t),Yn(t),Di=l;break;case 12:qn(i,t),Yn(t);break;case 31:qn(i,t),Yn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gc(t,l)));break;case 13:qn(i,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(vc=zt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gc(t,l)));break;case 22:f=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,te=ma,ge=yn;if(ma=te||f,yn=ge||H,qn(i,t),yn=ge,ma=te,Yn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||H||ma||yn||Gr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(d=H.stateNode,f)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=H.stateNode;var Se=H.memoizedProps.style,oe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(qe){Ft(H,H.return,qe)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(qe){Ft(H,H.return,qe)}}}else if(i.tag===18){if(s===null){H=i;try{var ce=H.stateNode;f?Bx(ce,!0):Bx(H.stateNode,!1)}catch(qe){Ft(H,H.return,qe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,gc(t,s))));break;case 19:qn(i,t),Yn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gc(t,l)));break;case 30:break;case 21:break;default:qn(i,t),Yn(t)}}function Yn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(H0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,d=dd(t);mc(t,d,f);break;case 5:var y=s.stateNode;s.flags&32&&(ni(y,""),s.flags&=-33);var R=dd(t);mc(t,R,y);break;case 3:case 4:var H=s.stateNode.containerInfo,te=dd(t);hd(t,te,H);break;default:throw Error(r(161))}}catch(ge){Ft(t,t.return,ge)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Z0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Z0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function xa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)k0(t,i.alternate,i),i=i.sibling}function Gr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ja(4,i,i.return),Gr(i);break;case 1:Wi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&B0(i,i.return,s),Gr(i);break;case 27:$o(i.stateNode);case 26:case 5:Wi(i,i.return),Gr(i);break;case 22:i.memoizedState===null&&Gr(i);break;case 30:Gr(i);break;default:Gr(i)}t=t.sibling}}function va(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,y=d.flags;switch(d.tag){case 0:case 11:case 15:va(f,d,s),Vo(4,d);break;case 1:if(va(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(te){Ft(l,l.return,te)}if(l=d,f=l.updateQueue,f!==null){var R=l.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)Ag(H[f],R)}catch(te){Ft(l,l.return,te)}}s&&y&64&&F0(d),ko(d,d.return);break;case 27:G0(d);case 26:case 5:va(f,d,s),s&&l===null&&y&4&&z0(d),ko(d,d.return);break;case 12:va(f,d,s);break;case 31:va(f,d,s),s&&y&4&&q0(f,d);break;case 13:va(f,d,s),s&&y&4&&Y0(f,d);break;case 22:d.memoizedState===null&&va(f,d,s),ko(d,d.return);break;case 30:break;default:va(f,d,s)}i=i.sibling}}function md(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Co(s))}function gd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Co(t))}function Ni(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)K0(t,i,s,l),i=i.sibling}function K0(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ni(t,i,s,l),f&2048&&Vo(9,i);break;case 1:Ni(t,i,s,l);break;case 3:Ni(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Co(t)));break;case 12:if(f&2048){Ni(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Ft(i,i.return,H)}}else Ni(t,i,s,l);break;case 31:Ni(t,i,s,l);break;case 13:Ni(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,y=i.alternate,i.memoizedState!==null?d._visibility&2?Ni(t,i,s,l):Wo(t,i):d._visibility&2?Ni(t,i,s,l):(d._visibility|=2,Ts(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&md(y,i);break;case 24:Ni(t,i,s,l),f&2048&&gd(i.alternate,i);break;default:Ni(t,i,s,l)}}function Ts(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,y=i,R=s,H=l,te=y.flags;switch(y.tag){case 0:case 11:case 15:Ts(d,y,R,H,f),Vo(8,y);break;case 23:break;case 22:var ge=y.stateNode;y.memoizedState!==null?ge._visibility&2?Ts(d,y,R,H,f):Wo(d,y):(ge._visibility|=2,Ts(d,y,R,H,f)),f&&te&2048&&md(y.alternate,y);break;case 24:Ts(d,y,R,H,f),f&&te&2048&&gd(y.alternate,y);break;default:Ts(d,y,R,H,f)}i=i.sibling}}function Wo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Wo(s,l),f&2048&&md(l.alternate,l);break;case 24:Wo(s,l),f&2048&&gd(l.alternate,l);break;default:Wo(s,l)}i=i.sibling}}var Xo=8192;function As(t,i,s){if(t.subtreeFlags&Xo)for(t=t.child;t!==null;)Q0(t,i,s),t=t.sibling}function Q0(t,i,s){switch(t.tag){case 26:As(t,i,s),t.flags&Xo&&t.memoizedState!==null&&vM(s,Di,t.memoizedState,t.memoizedProps);break;case 5:As(t,i,s);break;case 3:case 4:var l=Di;Di=Dc(t.stateNode.containerInfo),As(t,i,s),Di=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Xo,Xo=16777216,As(t,i,s),Xo=l):As(t,i,s));break;default:As(t,i,s)}}function $0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function qo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];An=l,ex(l,t)}$0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)J0(t),t=t.sibling}function J0(t){switch(t.tag){case 0:case 11:case 15:qo(t),t.flags&2048&&Ja(9,t,t.return);break;case 3:qo(t);break;case 12:qo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,xc(t)):qo(t);break;default:qo(t)}}function xc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];An=l,ex(l,t)}$0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ja(8,i,i.return),xc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,xc(i));break;default:xc(i)}t=t.sibling}}function ex(t,i){for(;An!==null;){var s=An;switch(s.tag){case 0:case 11:case 15:Ja(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Co(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,An=l;else e:for(s=t;An!==null;){l=An;var f=l.sibling,d=l.return;if(W0(l),l===s){An=null;break e}if(f!==null){f.return=d,An=f;break e}An=d}}}var Lb={getCacheForType:function(t){var i=Nn(xn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Nn(xn).controller.signal}},Ob=typeof WeakMap=="function"?WeakMap:Map,Ct=0,Wt=null,pt=null,gt=0,It=0,oi=null,er=!1,Rs=!1,xd=!1,_a=0,ln=0,tr=0,Vr=0,vd=0,li=0,ws=0,Yo=null,jn=null,_d=!1,vc=0,tx=0,_c=1/0,yc=null,nr=null,Mn=0,ir=null,Cs=null,ya=0,yd=0,Sd=null,nx=null,jo=0,bd=null;function ci(){return(Ct&2)!==0&&gt!==0?gt&-gt:B.T!==null?wd():xo()}function ix(){if(li===0)if((gt&536870912)===0||yt){var t=it;it<<=1,(it&3932160)===0&&(it=262144),li=t}else li=536870912;return t=ri.current,t!==null&&(t.flags|=32),li}function Zn(t,i,s){(t===Wt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(Ds(t,0),ar(t,gt,li,!1)),ke(t,s),((Ct&2)===0||t!==Wt)&&(t===Wt&&((Ct&2)===0&&(Vr|=s),ln===4&&ar(t,gt,li,!1)),Xi(t))}function ax(t,i,s){if((Ct&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||De(t,i),f=l?Fb(t,i):Ed(t,i,!0),d=l;do{if(f===0){Rs&&!l&&ar(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!Pb(s)){f=Ed(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var R=t;f=Yo;var H=R.current.memoizedState.isDehydrated;if(H&&(Ds(R,y).flags|=256),y=Ed(R,y,!1),y!==2){if(xd&&!H){R.errorRecoveryDisabledLanes|=d,Vr|=d,f=4;break e}d=jn,jn=f,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}f=y}if(d=!1,f!==2)continue}}if(f===1){Ds(t,0),ar(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:ar(l,i,li,!er);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=vc+300-zt(),10<f)){if(ar(l,i,li,!er),ve(l,0,!0)!==0)break e;ya=i,l.timeoutHandle=Px(rx.bind(null,l,s,jn,yc,_d,i,li,Vr,ws,er,d,"Throttled",-0,0),f);break e}rx(l,s,jn,yc,_d,i,li,Vr,ws,er,d,null,-0,0)}}break}while(!0);Xi(t)}function rx(t,i,s,l,f,d,y,R,H,te,ge,Se,oe,ce){if(t.timeoutHandle=-1,Se=i.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ra},Q0(i,d,Se);var qe=(d&62914560)===d?vc-zt():(d&4194048)===d?tx-zt():0;if(qe=_M(Se,qe),qe!==null){ya=d,t.cancelPendingCommit=qe(hx.bind(null,t,i,d,s,l,f,y,R,H,ge,Se,null,oe,ce)),ar(t,d,y,!te);return}}hx(t,i,d,s,l,f,y,R,H)}function Pb(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!ii(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i,s,l){i&=~vd,i&=~Vr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-ze(f),y=1<<d;l[d]=-1,f&=~y}s!==0&&Ut(t,s,i)}function Sc(){return(Ct&6)===0?(Zo(0),!1):!0}function Md(){if(pt!==null){if(It===0)var t=pt.return;else t=pt,ca=Lr=null,zf(t),ys=null,No=0,t=pt;for(;t!==null;)I0(t.alternate,t),t=t.return;pt=null}}function Ds(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,tM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ya=0,Md(),Wt=t,pt=s=oa(t.current,null),gt=i,It=0,oi=null,er=!1,Rs=De(t,i),xd=!1,ws=li=vd=Vr=tr=ln=0,jn=Yo=null,_d=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-ze(l),d=1<<f;i|=t[f],l&=~d}return _a=i,Vl(),s}function sx(t,i){lt=null,B.H=zo,i===_s||i===Kl?(i=bg(),It=3):i===Rf?(i=bg(),It=4):It=i===td?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,oi=i,pt===null&&(ln=1,uc(t,pi(i,t.current)))}function ox(){var t=ri.current;return t===null?!0:(gt&4194048)===gt?vi===null:(gt&62914560)===gt||(gt&536870912)!==0?t===vi:!1}function lx(){var t=B.H;return B.H=zo,t===null?zo:t}function cx(){var t=B.A;return B.A=Lb,t}function bc(){ln=4,er||(gt&4194048)!==gt&&ri.current!==null||(Rs=!0),(tr&134217727)===0&&(Vr&134217727)===0||Wt===null||ar(Wt,gt,li,!1)}function Ed(t,i,s){var l=Ct;Ct|=2;var f=lx(),d=cx();(Wt!==t||gt!==i)&&(yc=null,Ds(t,i)),i=!1;var y=ln;e:do try{if(It!==0&&pt!==null){var R=pt,H=oi;switch(It){case 8:Md(),y=6;break e;case 3:case 2:case 9:case 6:ri.current===null&&(i=!0);var te=It;if(It=0,oi=null,Ns(t,R,H,te),s&&Rs){y=0;break e}break;default:te=It,It=0,oi=null,Ns(t,R,H,te)}}Ib(),y=ln;break}catch(ge){sx(t,ge)}while(!0);return i&&t.shellSuspendCounter++,ca=Lr=null,Ct=l,B.H=f,B.A=d,pt===null&&(Wt=null,gt=0,Vl()),y}function Ib(){for(;pt!==null;)ux(pt)}function Fb(t,i){var s=Ct;Ct|=2;var l=lx(),f=cx();Wt!==t||gt!==i?(yc=null,_c=zt()+500,Ds(t,i)):Rs=De(t,i);e:do try{if(It!==0&&pt!==null){i=pt;var d=oi;t:switch(It){case 1:It=0,oi=null,Ns(t,i,d,1);break;case 2:case 9:if(yg(d)){It=0,oi=null,fx(i);break}i=function(){It!==2&&It!==9||Wt!==t||(It=7),Xi(t)},d.then(i,i);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:yg(d)?(It=0,oi=null,fx(i)):(It=0,oi=null,Ns(t,i,d,7));break;case 5:var y=null;switch(pt.tag){case 26:y=pt.memoizedState;case 5:case 27:var R=pt;if(y?Kx(y):R.stateNode.complete){It=0,oi=null;var H=R.sibling;if(H!==null)pt=H;else{var te=R.return;te!==null?(pt=te,Mc(te)):pt=null}break t}}It=0,oi=null,Ns(t,i,d,5);break;case 6:It=0,oi=null,Ns(t,i,d,6);break;case 8:Md(),ln=6;break e;default:throw Error(r(462))}}Bb();break}catch(ge){sx(t,ge)}while(!0);return ca=Lr=null,B.H=l,B.A=f,Ct=s,pt!==null?0:(Wt=null,gt=0,Vl(),ln)}function Bb(){for(;pt!==null&&!sn();)ux(pt)}function ux(t){var i=O0(t.alternate,t,_a);t.memoizedProps=t.pendingProps,i===null?Mc(t):pt=i}function fx(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=w0(s,i,i.pendingProps,i.type,void 0,gt);break;case 11:i=w0(s,i,i.pendingProps,i.type.render,i.ref,gt);break;case 5:zf(i);default:I0(s,i),i=pt=cg(i,_a),i=O0(s,i,_a)}t.memoizedProps=t.pendingProps,i===null?Mc(t):pt=i}function Ns(t,i,s,l){ca=Lr=null,zf(i),ys=null,No=0;var f=i.return;try{if(Ab(t,f,i,s,gt)){ln=1,uc(t,pi(s,t.current)),pt=null;return}}catch(d){if(f!==null)throw pt=f,d;ln=1,uc(t,pi(s,t.current)),pt=null;return}i.flags&32768?(yt||l===1?t=!0:Rs||(gt&536870912)!==0?t=!1:(er=t=!0,(l===2||l===9||l===3||l===6)&&(l=ri.current,l!==null&&l.tag===13&&(l.flags|=16384))),dx(i,t)):Mc(i)}function Mc(t){var i=t;do{if((i.flags&32768)!==0){dx(i,er);return}t=i.return;var s=Cb(i.alternate,i,_a);if(s!==null){pt=s;return}if(i=i.sibling,i!==null){pt=i;return}pt=i=t}while(i!==null);ln===0&&(ln=5)}function dx(t,i){do{var s=Db(t.alternate,t);if(s!==null){s.flags&=32767,pt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){pt=t;return}pt=t=s}while(t!==null);ln=6,pt=null}function hx(t,i,s,l,f,d,y,R,H){t.cancelPendingCommit=null;do Ec();while(Mn!==0);if((Ct&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=df,Kt(t,s,d,y,R,H),t===Wt&&(pt=Wt=null,gt=0),Cs=i,ir=t,ya=s,yd=d,Sd=f,nx=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Vb(Q,function(){return vx(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=G.p,G.p=2,y=Ct,Ct|=4;try{Nb(t,i,s)}finally{Ct=y,G.p=f,B.T=l}}Mn=1,px(),mx(),gx()}}function px(){if(Mn===1){Mn=0;var t=ir,i=Cs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=G.p;G.p=2;var f=Ct;Ct|=4;try{j0(i,t);var d=Id,y=eg(t.containerInfo),R=d.focusedElem,H=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&Jm(R.ownerDocument.documentElement,R)){if(H!==null&&of(R)){var te=H.start,ge=H.end;if(ge===void 0&&(ge=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(ge,R.value.length);else{var Se=R.ownerDocument||document,oe=Se&&Se.defaultView||window;if(oe.getSelection){var ce=oe.getSelection(),qe=R.textContent.length,tt=Math.min(H.start,qe),Vt=H.end===void 0?tt:Math.min(H.end,qe);!ce.extend&&tt>Vt&&(y=Vt,Vt=tt,tt=y);var Z=$m(R,tt),W=$m(R,Vt);if(Z&&W&&(ce.rangeCount!==1||ce.anchorNode!==Z.node||ce.anchorOffset!==Z.offset||ce.focusNode!==W.node||ce.focusOffset!==W.offset)){var ee=Se.createRange();ee.setStart(Z.node,Z.offset),ce.removeAllRanges(),tt>Vt?(ce.addRange(ee),ce.extend(W.node,W.offset)):(ee.setEnd(W.node,W.offset),ce.addRange(ee))}}}}for(Se=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Se.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var ye=Se[R];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}Ic=!!Pd,Id=Pd=null}finally{Ct=f,G.p=l,B.T=s}}t.current=i,Mn=2}}function mx(){if(Mn===2){Mn=0;var t=ir,i=Cs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=G.p;G.p=2;var f=Ct;Ct|=4;try{k0(t,i.alternate,i)}finally{Ct=f,G.p=l,B.T=s}}Mn=3}}function gx(){if(Mn===4||Mn===3){Mn=0,Y();var t=ir,i=Cs,s=ya,l=nx;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Mn=5:(Mn=0,Cs=ir=null,xx(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(nr=null),go(s),i=i.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(de,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=G.p,G.p=2,B.T=null;try{for(var d=t.onRecoverableError,y=0;y<l.length;y++){var R=l[y];d(R.value,{componentStack:R.stack})}}finally{B.T=i,G.p=f}}(ya&3)!==0&&Ec(),Xi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===bd?jo++:(jo=0,bd=t):jo=0,Zo(0)}}function xx(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Co(i)))}function Ec(){return px(),mx(),gx(),vx()}function vx(){if(Mn!==5)return!1;var t=ir,i=yd;yd=0;var s=go(ya),l=B.T,f=G.p;try{G.p=32>s?32:s,B.T=null,s=Sd,Sd=null;var d=ir,y=ya;if(Mn=0,Cs=ir=null,ya=0,(Ct&6)!==0)throw Error(r(331));var R=Ct;if(Ct|=4,J0(d.current),K0(d,d.current,y,s),Ct=R,Zo(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(de,d)}catch{}return!0}finally{G.p=f,B.T=l,xx(t,i)}}function _x(t,i,s){i=pi(s,i),i=ed(t.stateNode,i,2),t=Ka(t,i,2),t!==null&&(ke(t,2),Xi(t))}function Ft(t,i,s){if(t.tag===3)_x(t,t,s);else for(;i!==null;){if(i.tag===3){_x(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(nr===null||!nr.has(l))){t=pi(s,t),s=y0(2),l=Ka(i,s,2),l!==null&&(S0(s,l,i,t),ke(l,2),Xi(l));break}}i=i.return}}function Td(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Ob;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(xd=!0,f.add(s),t=zb.bind(null,t,i,s),i.then(t,t))}function zb(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Wt===t&&(gt&s)===s&&(ln===4||ln===3&&(gt&62914560)===gt&&300>zt()-vc?(Ct&2)===0&&Ds(t,0):vd|=s,ws===gt&&(ws=0)),Xi(t)}function yx(t,i){i===0&&(i=Me()),t=Dr(t,i),t!==null&&(ke(t,i),Xi(t))}function Hb(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),yx(t,s)}function Gb(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),yx(t,s)}function Vb(t,i){return un(t,i)}var Tc=null,Us=null,Ad=!1,Ac=!1,Rd=!1,rr=0;function Xi(t){t!==Us&&t.next===null&&(Us===null?Tc=Us=t:Us=Us.next=t),Ac=!0,Ad||(Ad=!0,Wb())}function Zo(t,i){if(!Rd&&Ac){Rd=!0;do for(var s=!1,l=Tc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var y=l.suspendedLanes,R=l.pingedLanes;d=(1<<31-ze(42|t)+1)-1,d&=f&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Ex(l,d))}else d=gt,d=ve(l,l===Wt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||De(l,d)||(s=!0,Ex(l,d));l=l.next}while(s);Rd=!1}}function kb(){Sx()}function Sx(){Ac=Ad=!1;var t=0;rr!==0&&eM()&&(t=rr);for(var i=zt(),s=null,l=Tc;l!==null;){var f=l.next,d=bx(l,i);d===0?(l.next=null,s===null?Tc=f:s.next=f,f===null&&(Us=s)):(s=l,(t!==0||(d&3)!==0)&&(Ac=!0)),l=f}Mn!==0&&Mn!==5||Zo(t),rr!==0&&(rr=0)}function bx(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-ze(d),R=1<<y,H=f[y];H===-1?((R&s)===0||(R&l)!==0)&&(f[y]=Be(R,i)):H<=i&&(t.expiredLanes|=R),d&=~R}if(i=Wt,s=gt,s=ve(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(It===2||It===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Xt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||De(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Xt(l),go(s)){case 2:case 8:s=M;break;case 32:s=Q;break;case 268435456:s=he;break;default:s=Q}return l=Mx.bind(null,t),s=un(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Xt(l),t.callbackPriority=2,t.callbackNode=null,2}function Mx(t,i){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Ec()&&t.callbackNode!==s)return null;var l=gt;return l=ve(t,t===Wt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(ax(t,l,i),bx(t,zt()),t.callbackNode!=null&&t.callbackNode===s?Mx.bind(null,t):null)}function Ex(t,i){if(Ec())return null;ax(t,i,!0)}function Wb(){nM(function(){(Ct&6)!==0?un(U,kb):Sx()})}function wd(){if(rr===0){var t=xs;t===0&&(t=$e,$e<<=1,($e&261888)===0&&($e=256)),rr=t}return rr}function Tx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ar(""+t)}function Ax(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Xb(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=Tx((f[Cn]||null).action),y=l.submitter;y&&(i=(i=y[Cn]||null)?Tx(i.formAction):y.getAttribute("formAction"),i!==null&&(d=i,y=null));var R=new Bl("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(rr!==0){var H=y?Ax(f,y):new FormData(f);jf(s,{pending:!0,data:H,method:f.method,action:d},null,H)}}else typeof d=="function"&&(R.preventDefault(),H=y?Ax(f,y):new FormData(f),jf(s,{pending:!0,data:H,method:f.method,action:d},d,H))},currentTarget:f}]})}}for(var Cd=0;Cd<ff.length;Cd++){var Dd=ff[Cd],qb=Dd.toLowerCase(),Yb=Dd[0].toUpperCase()+Dd.slice(1);Ci(qb,"on"+Yb)}Ci(ig,"onAnimationEnd"),Ci(ag,"onAnimationIteration"),Ci(rg,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(cb,"onTransitionRun"),Ci(ub,"onTransitionStart"),Ci(fb,"onTransitionCancel"),Ci(sg,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function Rx(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var y=l.length-1;0<=y;y--){var R=l[y],H=R.instance,te=R.currentTarget;if(R=R.listener,H!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=te;try{d(f)}catch(ge){Gl(ge)}f.currentTarget=null,d=H}else for(y=0;y<l.length;y++){if(R=l[y],H=R.instance,te=R.currentTarget,R=R.listener,H!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=te;try{d(f)}catch(ge){Gl(ge)}f.currentTarget=null,d=H}}}}function mt(t,i){var s=i[Mr];s===void 0&&(s=i[Mr]=new Set);var l=t+"__bubble";s.has(l)||(wx(i,t,2,!1),s.add(l))}function Nd(t,i,s){var l=0;i&&(l|=4),wx(s,t,l,i)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Ud(t){if(!t[Rc]){t[Rc]=!0,Ol.forEach(function(s){s!=="selectionchange"&&(jb.has(s)||Nd(s,!1,t),Nd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Rc]||(i[Rc]=!0,Nd("selectionchange",!1,i))}}function wx(t,i,s,l){switch(iv(i)){case 2:var f=bM;break;case 8:f=MM;break;default:f=Yd}s=f.bind(null,i,s,t),f=void 0,!Qu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Ld(t,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var R=l.stateNode.containerInfo;if(R===f)break;if(y===4)for(y=l.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;R!==null;){if(y=ia(R),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){l=d=y;continue e}R=R.parentNode}}l=l.return}Lm(function(){var te=d,ge=Zu(s),Se=[];e:{var oe=og.get(t);if(oe!==void 0){var ce=Bl,qe=t;switch(t){case"keypress":if(Il(s)===0)break e;case"keydown":case"keyup":ce=GS;break;case"focusin":qe="focus",ce=tf;break;case"focusout":qe="blur",ce=tf;break;case"beforeblur":case"afterblur":ce=tf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=CS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=WS;break;case ig:case ag:case rg:ce=US;break;case sg:ce=qS;break;case"scroll":case"scrollend":ce=RS;break;case"wheel":ce=jS;break;case"copy":case"cut":case"paste":ce=OS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Bm;break;case"toggle":case"beforetoggle":ce=KS}var tt=(i&4)!==0,Vt=!tt&&(t==="scroll"||t==="scrollend"),Z=tt?oe!==null?oe+"Capture":null:oe;tt=[];for(var W=te,ee;W!==null;){var ye=W;if(ee=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||ee===null||Z===null||(ye=vo(W,Z),ye!=null&&tt.push(Qo(W,ye,ee))),Vt)break;W=W.return}0<tt.length&&(oe=new ce(oe,qe,null,s,ge),Se.push({event:oe,listeners:tt}))}}if((i&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",oe&&s!==ju&&(qe=s.relatedTarget||s.fromElement)&&(ia(qe)||qe[kn]))break e;if((ce||oe)&&(oe=ge.window===ge?ge:(oe=ge.ownerDocument)?oe.defaultView||oe.parentWindow:window,ce?(qe=s.relatedTarget||s.toElement,ce=te,qe=qe?ia(qe):null,qe!==null&&(Vt=c(qe),tt=qe.tag,qe!==Vt||tt!==5&&tt!==27&&tt!==6)&&(qe=null)):(ce=null,qe=te),ce!==qe)){if(tt=Im,ye="onMouseLeave",Z="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Bm,ye="onPointerLeave",Z="onPointerEnter",W="pointer"),Vt=ce==null?oe:Tr(ce),ee=qe==null?oe:Tr(qe),oe=new tt(ye,W+"leave",ce,s,ge),oe.target=Vt,oe.relatedTarget=ee,ye=null,ia(ge)===te&&(tt=new tt(Z,W+"enter",qe,s,ge),tt.target=ee,tt.relatedTarget=Vt,ye=tt),Vt=ye,ce&&qe)t:{for(tt=Zb,Z=ce,W=qe,ee=0,ye=Z;ye;ye=tt(ye))ee++;ye=0;for(var et=W;et;et=tt(et))ye++;for(;0<ee-ye;)Z=tt(Z),ee--;for(;0<ye-ee;)W=tt(W),ye--;for(;ee--;){if(Z===W||W!==null&&Z===W.alternate){tt=Z;break t}Z=tt(Z),W=tt(W)}tt=null}else tt=null;ce!==null&&Cx(Se,oe,ce,tt,!1),qe!==null&&Vt!==null&&Cx(Se,Vt,qe,tt,!0)}}e:{if(oe=te?Tr(te):window,ce=oe.nodeName&&oe.nodeName.toLowerCase(),ce==="select"||ce==="input"&&oe.type==="file")var At=qm;else if(Wm(oe))if(Ym)At=sb;else{At=ab;var je=ib}else ce=oe.nodeName,!ce||ce.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?te&&Nt(te.elementType)&&(At=qm):At=rb;if(At&&(At=At(t,te))){Xm(Se,At,s,ge);break e}je&&je(t,oe,te),t==="focusout"&&te&&oe.type==="number"&&te.memoizedProps.value!=null&&ht(oe,"number",oe.value)}switch(je=te?Tr(te):window,t){case"focusin":(Wm(je)||je.contentEditable==="true")&&(cs=je,lf=te,Ao=null);break;case"focusout":Ao=lf=cs=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,tg(Se,s,ge);break;case"selectionchange":if(lb)break;case"keydown":case"keyup":tg(Se,s,ge)}var ct;if(af)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else ls?Vm(t,s)&&(xt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(xt="onCompositionStart");xt&&(zm&&s.locale!=="ko"&&(ls||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&ls&&(ct=Om()):(ka=ge,$u="value"in ka?ka.value:ka.textContent,ls=!0)),je=wc(te,xt),0<je.length&&(xt=new Fm(xt,t,null,s,ge),Se.push({event:xt,listeners:je}),ct?xt.data=ct:(ct=km(s),ct!==null&&(xt.data=ct)))),(ct=$S?JS(t,s):eb(t,s))&&(xt=wc(te,"onBeforeInput"),0<xt.length&&(je=new Fm("onBeforeInput","beforeinput",null,s,ge),Se.push({event:je,listeners:xt}),je.data=ct)),Xb(Se,t,te,s,ge)}Rx(Se,i)})}function Qo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function wc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=vo(t,s),f!=null&&l.unshift(Qo(t,f,d)),f=vo(t,i),f!=null&&l.push(Qo(t,f,d))),t.tag===3)return l;t=t.return}return[]}function Zb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Cx(t,i,s,l,f){for(var d=i._reactName,y=[];s!==null&&s!==l;){var R=s,H=R.alternate,te=R.stateNode;if(R=R.tag,H!==null&&H===l)break;R!==5&&R!==26&&R!==27||te===null||(H=te,f?(te=vo(s,d),te!=null&&y.unshift(Qo(s,te,H))):f||(te=vo(s,d),te!=null&&y.push(Qo(s,te,H)))),s=s.return}y.length!==0&&t.push({event:i,listeners:y})}var Kb=/\r\n?/g,Qb=/\u0000|\uFFFD/g;function Dx(t){return(typeof t=="string"?t:""+t).replace(Kb,`
`).replace(Qb,"")}function Nx(t,i){return i=Dx(i),Dx(t)===i}function Gt(t,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ni(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ni(t,""+l);break;case"className":Xe(t,"class",l);break;case"tabIndex":Xe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,s,l);break;case"style":wi(t,l,d);break;case"data":if(i!=="object"){Xe(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ar(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Gt(t,i,"name",f.name,f,null),Gt(t,i,"formEncType",f.formEncType,f,null),Gt(t,i,"formMethod",f.formMethod,f,null),Gt(t,i,"formTarget",f.formTarget,f,null)):(Gt(t,i,"encType",f.encType,f,null),Gt(t,i,"method",f.method,f,null),Gt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ar(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ra);break;case"onScroll":l!=null&&mt("scroll",t);break;case"onScrollEnd":l!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Ar(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Oe(t,"popover",l);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Gi.get(s)||s,Oe(t,s,l))}}function Od(t,i,s,l,f,d){switch(s){case"style":wi(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ni(t,l):(typeof l=="number"||typeof l=="bigint")&&ni(t,""+l);break;case"onScroll":l!=null&&mt("scroll",t);break;case"onScrollEnd":l!=null&&mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=t[Cn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Oe(t,s,l)}}}function Ln(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var y=s[d];if(y!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Gt(t,i,d,y,s,null)}}f&&Gt(t,i,"srcSet",s.srcSet,s,null),l&&Gt(t,i,"src",s.src,s,null);return;case"input":mt("invalid",t);var R=d=y=f=null,H=null,te=null;for(l in s)if(s.hasOwnProperty(l)){var ge=s[l];if(ge!=null)switch(l){case"name":f=ge;break;case"type":y=ge;break;case"checked":H=ge;break;case"defaultChecked":te=ge;break;case"value":d=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,i));break;default:Gt(t,i,l,ge,s,null)}}Pn(t,d,R,H,te,y,f,!1);return;case"select":mt("invalid",t),l=y=d=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":l=R;default:Gt(t,i,f,R,s,null)}i=d,s=y,t.multiple=!!l,i!=null?bn(t,!!l,i,!1):s!=null&&bn(t,!!l,s,!0);return;case"textarea":mt("invalid",t),d=f=l=null;for(y in s)if(s.hasOwnProperty(y)&&(R=s[y],R!=null))switch(y){case"value":l=R;break;case"defaultValue":f=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Gt(t,i,y,R,s,null)}Ri(t,l,f,d);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(l=s[H],l!=null))switch(H){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Gt(t,i,H,l,s,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(l=0;l<Ko.length;l++)mt(Ko[l],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in s)if(s.hasOwnProperty(te)&&(l=s[te],l!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Gt(t,i,te,l,s,null)}return;default:if(Nt(i)){for(ge in s)s.hasOwnProperty(ge)&&(l=s[ge],l!==void 0&&Od(t,i,ge,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Gt(t,i,R,l,s,null))}function $b(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,y=null,R=null,H=null,te=null,ge=null;for(ce in s){var Se=s[ce];if(s.hasOwnProperty(ce)&&Se!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=Se;default:l.hasOwnProperty(ce)||Gt(t,i,ce,null,l,Se)}}for(var oe in l){var ce=l[oe];if(Se=s[oe],l.hasOwnProperty(oe)&&(ce!=null||Se!=null))switch(oe){case"type":d=ce;break;case"name":f=ce;break;case"checked":te=ce;break;case"defaultChecked":ge=ce;break;case"value":y=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,i));break;default:ce!==Se&&Gt(t,i,oe,ce,l,Se)}}He(t,y,R,H,te,ge,d,f);return;case"select":ce=y=R=oe=null;for(d in s)if(H=s[d],s.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":ce=H;default:l.hasOwnProperty(d)||Gt(t,i,d,null,l,H)}for(f in l)if(d=l[f],H=s[f],l.hasOwnProperty(f)&&(d!=null||H!=null))switch(f){case"value":oe=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==H&&Gt(t,i,f,d,l,H)}i=R,s=y,l=ce,oe!=null?bn(t,!!s,oe,!1):!!l!=!!s&&(i!=null?bn(t,!!s,i,!0):bn(t,!!s,s?[]:"",!1));return;case"textarea":ce=oe=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Gt(t,i,R,null,l,f)}for(y in l)if(f=l[y],d=s[y],l.hasOwnProperty(y)&&(f!=null||d!=null))switch(y){case"value":oe=f;break;case"defaultValue":ce=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Gt(t,i,y,f,l,d)}ti(t,oe,ce);return;case"option":for(var qe in s)if(oe=s[qe],s.hasOwnProperty(qe)&&oe!=null&&!l.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Gt(t,i,qe,null,l,oe)}for(H in l)if(oe=l[H],ce=s[H],l.hasOwnProperty(H)&&oe!==ce&&(oe!=null||ce!=null))switch(H){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Gt(t,i,H,oe,l,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)oe=s[tt],s.hasOwnProperty(tt)&&oe!=null&&!l.hasOwnProperty(tt)&&Gt(t,i,tt,null,l,oe);for(te in l)if(oe=l[te],ce=s[te],l.hasOwnProperty(te)&&oe!==ce&&(oe!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,i));break;default:Gt(t,i,te,oe,l,ce)}return;default:if(Nt(i)){for(var Vt in s)oe=s[Vt],s.hasOwnProperty(Vt)&&oe!==void 0&&!l.hasOwnProperty(Vt)&&Od(t,i,Vt,void 0,l,oe);for(ge in l)oe=l[ge],ce=s[ge],!l.hasOwnProperty(ge)||oe===ce||oe===void 0&&ce===void 0||Od(t,i,ge,oe,l,ce);return}}for(var Z in s)oe=s[Z],s.hasOwnProperty(Z)&&oe!=null&&!l.hasOwnProperty(Z)&&Gt(t,i,Z,null,l,oe);for(Se in l)oe=l[Se],ce=s[Se],!l.hasOwnProperty(Se)||oe===ce||oe==null&&ce==null||Gt(t,i,Se,oe,l,ce)}function Ux(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,y=f.initiatorType,R=f.duration;if(d&&R&&Ux(y)){for(y=0,R=f.responseEnd,l+=1;l<s.length;l++){var H=s[l],te=H.startTime;if(te>R)break;var ge=H.transferSize,Se=H.initiatorType;ge&&Ux(Se)&&(H=H.responseEnd,y+=ge*(H<R?1:(R-te)/(H-te)))}if(--l,i+=8*(d+y)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Pd=null,Id=null;function Cc(t){return t.nodeType===9?t:t.ownerDocument}function Lx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ox(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Fd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bd=null;function eM(){var t=window.event;return t&&t.type==="popstate"?t===Bd?!1:(Bd=t,!0):(Bd=null,!1)}var Px=typeof setTimeout=="function"?setTimeout:void 0,tM=typeof clearTimeout=="function"?clearTimeout:void 0,Ix=typeof Promise=="function"?Promise:void 0,nM=typeof queueMicrotask=="function"?queueMicrotask:typeof Ix<"u"?function(t){return Ix.resolve(null).then(t).catch(iM)}:Px;function iM(t){setTimeout(function(){throw t})}function sr(t){return t==="head"}function Fx(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Is(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")$o(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,$o(s);for(var d=s.firstChild;d;){var y=d.nextSibling,R=d.nodeName;d[za]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=y}}else s==="body"&&$o(t.ownerDocument.body);s=f}while(s);Is(i)}function Bx(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function zd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":zd(s),Ha(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function aM(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[za])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function rM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=_i(t.nextSibling),t===null))return null;return t}function zx(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=_i(t.nextSibling),t===null))return null;return t}function Hd(t){return t.data==="$?"||t.data==="$~"}function Gd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function _i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Vd=null;function Hx(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return _i(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function Gx(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function Vx(t,i,s){switch(i=Cc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function $o(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ha(t)}var yi=new Map,kx=new Set;function Dc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Sa=G.d;G.d={f:oM,r:lM,D:cM,C:uM,L:fM,m:dM,X:pM,S:hM,M:mM};function oM(){var t=Sa.f(),i=Sc();return t||i}function lM(t){var i=aa(t);i!==null&&i.tag===5&&i.type==="form"?s0(i):Sa.r(t)}var Ls=typeof document>"u"?null:document;function Wx(t,i,s){var l=Ls;if(l&&typeof i=="string"&&i){var f=Ot(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),kx.has(f)||(kx.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Ln(i,"link",t),gn(i),l.head.appendChild(i)))}}function cM(t){Sa.D(t),Wx("dns-prefetch",t,null)}function uM(t,i){Sa.C(t,i),Wx("preconnect",t,i)}function fM(t,i,s){Sa.L(t,i,s);var l=Ls;if(l&&t&&i){var f='link[rel="preload"][as="'+Ot(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ot(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ot(s.imageSizes)+'"]')):f+='[href="'+Ot(t)+'"]';var d=f;switch(i){case"style":d=Os(t);break;case"script":d=Ps(t)}yi.has(d)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),yi.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Jo(d))||i==="script"&&l.querySelector(el(d))||(i=l.createElement("link"),Ln(i,"link",t),gn(i),l.head.appendChild(i)))}}function dM(t,i){Sa.m(t,i);var s=Ls;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Ot(l)+'"][href="'+Ot(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ps(t)}if(!yi.has(d)&&(t=v({rel:"modulepreload",href:t},i),yi.set(d,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(el(d)))return}l=s.createElement("link"),Ln(l,"link",t),gn(l),s.head.appendChild(l)}}}function hM(t,i,s){Sa.S(t,i,s);var l=Ls;if(l&&t){var f=Ga(l).hoistableStyles,d=Os(t);i=i||"default";var y=f.get(d);if(!y){var R={loading:0,preload:null};if(y=l.querySelector(Jo(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=yi.get(d))&&kd(t,s);var H=y=l.createElement("link");gn(H),Ln(H,"link",t),H._p=new Promise(function(te,ge){H.onload=te,H.onerror=ge}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Nc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:R},f.set(d,y)}}}function pM(t,i){Sa.X(t,i);var s=Ls;if(s&&t){var l=Ga(s).hoistableScripts,f=Ps(t),d=l.get(f);d||(d=s.querySelector(el(f)),d||(t=v({src:t,async:!0},i),(i=yi.get(f))&&Wd(t,i),d=s.createElement("script"),gn(d),Ln(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function mM(t,i){Sa.M(t,i);var s=Ls;if(s&&t){var l=Ga(s).hoistableScripts,f=Ps(t),d=l.get(f);d||(d=s.querySelector(el(f)),d||(t=v({src:t,async:!0,type:"module"},i),(i=yi.get(f))&&Wd(t,i),d=s.createElement("script"),gn(d),Ln(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Xx(t,i,s,l){var f=(f=ne.current)?Dc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Os(s.href),s=Ga(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Os(s.href);var d=Ga(f).hoistableStyles,y=d.get(t);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=f.querySelector(Jo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),yi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},yi.set(t,s),d||gM(f,t,s,y.state))),i&&l===null)throw Error(r(528,""));return y}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ps(s),s=Ga(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Os(t){return'href="'+Ot(t)+'"'}function Jo(t){return'link[rel="stylesheet"]['+t+"]"}function qx(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function gM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ln(i,"link",s),gn(i),t.head.appendChild(i))}function Ps(t){return'[src="'+Ot(t)+'"]'}function el(t){return"script[async]"+t}function Yx(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Ot(s.href)+'"]');if(l)return i.instance=l,gn(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),gn(l),Ln(l,"style",f),Nc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Os(s.href);var d=t.querySelector(Jo(f));if(d)return i.state.loading|=4,i.instance=d,gn(d),d;l=qx(s),(f=yi.get(f))&&kd(l,f),d=(t.ownerDocument||t).createElement("link"),gn(d);var y=d;return y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Ln(d,"link",l),i.state.loading|=4,Nc(d,s.precedence,t),i.instance=d;case"script":return d=Ps(s.src),(f=t.querySelector(el(d)))?(i.instance=f,gn(f),f):(l=s,(f=yi.get(d))&&(l=v({},s),Wd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),gn(f),Ln(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Nc(l,s.precedence,t));return i.instance}function Nc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,y=0;y<l.length;y++){var R=l[y];if(R.dataset.precedence===i)d=R;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function kd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Wd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Uc=null;function jx(t,i,s){if(Uc===null){var l=new Map,f=Uc=new Map;f.set(s,l)}else f=Uc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[za]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(i)||"";y=t+y;var R=l.get(y);R?R.push(d):l.set(y,[d])}}return l}function Zx(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function xM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Kx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function vM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Os(l.href),d=i.querySelector(Jo(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Lc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,gn(d);return}d=i.ownerDocument||i,l=qx(l),(f=yi.get(f))&&kd(l,f),d=d.createElement("link"),gn(d);var y=d;y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Ln(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Lc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Xd=0;function _M(t,i){return t.stylesheets&&t.count===0&&Pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Xd===0&&(Xd=62500*Jb());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Xd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Oc=null;function Pc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Oc=new Map,i.forEach(yM,t),Oc=null,Lc.call(t))}function yM(t,i){if(!(i.state.loading&4)){var s=Oc.get(t);if(s)var l=s.get(null);else{s=new Map,Oc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var y=f[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}f=i.instance,y=f.getAttribute("data-precedence"),d=s.get(y)||l,d===l&&s.set(null,f),s.set(y,f),this.count++,l=Lc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var tl={$$typeof:I,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function SM(t,i,s,l,f,d,y,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Qx(t,i,s,l,f,d,y,R,H,te,ge,Se){return t=new SM(t,i,s,y,H,te,ge,Se,R),i=1,d===!0&&(i|=24),d=ai(3,null,null,i),t.current=d,d.stateNode=t,i=Ef(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},wf(d),t}function $x(t){return t?(t=ds,t):ds}function Jx(t,i,s,l,f,d){f=$x(f),l.context===null?l.context=f:l.pendingContext=f,l=Za(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Ka(t,l,i),s!==null&&(Zn(s,t,i),Lo(s,t,i))}function ev(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function qd(t,i){ev(t,i),(t=t.alternate)&&ev(t,i)}function tv(t){if(t.tag===13||t.tag===31){var i=Dr(t,67108864);i!==null&&Zn(i,t,67108864),qd(t,67108864)}}function nv(t){if(t.tag===13||t.tag===31){var i=ci();i=mo(i);var s=Dr(t,i);s!==null&&Zn(s,t,i),qd(t,i)}}var Ic=!0;function bM(t,i,s,l){var f=B.T;B.T=null;var d=G.p;try{G.p=2,Yd(t,i,s,l)}finally{G.p=d,B.T=f}}function MM(t,i,s,l){var f=B.T;B.T=null;var d=G.p;try{G.p=8,Yd(t,i,s,l)}finally{G.p=d,B.T=f}}function Yd(t,i,s,l){if(Ic){var f=jd(l);if(f===null)Ld(t,i,l,Fc,s),av(t,l);else if(TM(f,t,i,s,l))l.stopPropagation();else if(av(t,l),i&4&&-1<EM.indexOf(t)){for(;f!==null;){var d=aa(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=we(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var H=1<<31-ze(y);R.entanglements[1]|=H,y&=~H}Xi(d),(Ct&6)===0&&(_c=zt()+500,Zo(0))}}break;case 31:case 13:R=Dr(d,2),R!==null&&Zn(R,d,2),Sc(),qd(d,2)}if(d=jd(l),d===null&&Ld(t,i,l,Fc,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else Ld(t,i,l,null,s)}}function jd(t){return t=Zu(t),Zd(t)}var Fc=null;function Zd(t){if(Fc=null,t=ia(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Fc=t,null}function iv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wt()){case U:return 2;case M:return 8;case Q:case re:return 32;case he:return 268435456;default:return 32}default:return 32}}var Kd=!1,or=null,lr=null,cr=null,nl=new Map,il=new Map,ur=[],EM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function av(t,i){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":nl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(i.pointerId)}}function al(t,i,s,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=aa(i),i!==null&&tv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function TM(t,i,s,l,f){switch(i){case"focusin":return or=al(or,t,i,s,l,f),!0;case"dragenter":return lr=al(lr,t,i,s,l,f),!0;case"mouseover":return cr=al(cr,t,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return nl.set(d,al(nl.get(d)||null,t,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,il.set(d,al(il.get(d)||null,t,i,s,l,f)),!0}return!1}function rv(t){var i=ia(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,rs(t.priority,function(){nv(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,rs(t.priority,function(){nv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=jd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);ju=l,s.target.dispatchEvent(l),ju=null}else return i=aa(s),i!==null&&tv(i),t.blockedOn=s,!1;i.shift()}return!0}function sv(t,i,s){Bc(t)&&s.delete(i)}function AM(){Kd=!1,or!==null&&Bc(or)&&(or=null),lr!==null&&Bc(lr)&&(lr=null),cr!==null&&Bc(cr)&&(cr=null),nl.forEach(sv),il.forEach(sv)}function zc(t,i){t.blockedOn===i&&(t.blockedOn=null,Kd||(Kd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,AM)))}var Hc=null;function ov(t){Hc!==t&&(Hc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Hc===t&&(Hc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Zd(l||s)===null)continue;break}var d=aa(s);d!==null&&(t.splice(i,3),i-=3,jf(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Is(t){function i(H){return zc(H,t)}or!==null&&zc(or,t),lr!==null&&zc(lr,t),cr!==null&&zc(cr,t),nl.forEach(i),il.forEach(i);for(var s=0;s<ur.length;s++){var l=ur[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ur.length&&(s=ur[0],s.blockedOn===null);)rv(s),s.blockedOn===null&&ur.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],y=f[Cn]||null;if(typeof d=="function")y||ov(s);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(f=d,y=d[Cn]||null)R=y.formAction;else if(Zd(f)!==null)continue}else R=y.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),ov(s)}}}function lv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Qd(t){this._internalRoot=t}Gc.prototype.render=Qd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=ci();Jx(s,l,t,i,null,null)},Gc.prototype.unmount=Qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Jx(t.current,2,null,t,null,null),Sc(),i[kn]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var i=xo();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ur.length&&i!==0&&i<ur[s].priority;s++);ur.splice(s,0,t),s===0&&rv(t)}};var cv=e.version;if(cv!=="19.2.7")throw Error(r(527,cv,"19.2.7"));G.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var RM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vc.isDisabled&&Vc.supportsFiber)try{de=Vc.inject(RM),me=Vc}catch{}}return sl.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=g0,d=x0,y=v0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=Qx(t,1,!1,null,null,s,l,null,f,d,y,lv),t[kn]=i.current,Ud(t),new Qd(i)},sl.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",d=g0,y=x0,R=v0,H=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),i=Qx(t,1,!0,i,s??null,l,f,H,d,y,R,lv),i.context=$x(null),s=i.current,l=ci(),l=mo(l),f=Za(l),f.callback=null,Ka(s,f,l),s=l,i.current.lanes=s,ke(i,s),Xi(i),t[kn]=i.current,Ud(t),new Gc(i)},sl.version="19.2.7",sl}var _v;function zM(){if(_v)return eh.exports;_v=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),eh.exports=BM(),eh.exports}var HM=zM(),ah,yv;function GM(){if(yv)return ah;yv=1;var a=typeof Element<"u",e=typeof Map=="function",n=typeof Set=="function",r=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function o(c,u){if(c===u)return!0;if(c&&u&&typeof c=="object"&&typeof u=="object"){if(c.constructor!==u.constructor)return!1;var h,m,p;if(Array.isArray(c)){if(h=c.length,h!=u.length)return!1;for(m=h;m--!==0;)if(!o(c[m],u[m]))return!1;return!0}var g;if(e&&c instanceof Map&&u instanceof Map){if(c.size!==u.size)return!1;for(g=c.entries();!(m=g.next()).done;)if(!u.has(m.value[0]))return!1;for(g=c.entries();!(m=g.next()).done;)if(!o(m.value[1],u.get(m.value[0])))return!1;return!0}if(n&&c instanceof Set&&u instanceof Set){if(c.size!==u.size)return!1;for(g=c.entries();!(m=g.next()).done;)if(!u.has(m.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(c)&&ArrayBuffer.isView(u)){if(h=c.length,h!=u.length)return!1;for(m=h;m--!==0;)if(c[m]!==u[m])return!1;return!0}if(c.constructor===RegExp)return c.source===u.source&&c.flags===u.flags;if(c.valueOf!==Object.prototype.valueOf&&typeof c.valueOf=="function"&&typeof u.valueOf=="function")return c.valueOf()===u.valueOf();if(c.toString!==Object.prototype.toString&&typeof c.toString=="function"&&typeof u.toString=="function")return c.toString()===u.toString();if(p=Object.keys(c),h=p.length,h!==Object.keys(u).length)return!1;for(m=h;m--!==0;)if(!Object.prototype.hasOwnProperty.call(u,p[m]))return!1;if(a&&c instanceof Element)return!1;for(m=h;m--!==0;)if(!((p[m]==="_owner"||p[m]==="__v"||p[m]==="__o")&&c.$$typeof)&&!o(c[p[m]],u[p[m]]))return!1;return!0}return c!==c&&u!==u}return ah=function(u,h){try{return o(u,h)}catch(m){if((m.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw m}},ah}var VM=GM();const kM=Bu(VM);var rh,Sv;function WM(){if(Sv)return rh;Sv=1;var a=function(e,n,r,o,c,u,h,m){if(!e){var p;if(n===void 0)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var g=[r,o,c,u,h,m],v=0;p=new Error(n.replace(/%s/g,function(){return g[v++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}};return rh=a,rh}var XM=WM();const bv=Bu(XM);var sh,Mv;function qM(){return Mv||(Mv=1,sh=function(e,n,r,o){var c=r?r.call(o,e,n):void 0;if(c!==void 0)return!!c;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var u=Object.keys(e),h=Object.keys(n);if(u.length!==h.length)return!1;for(var m=Object.prototype.hasOwnProperty.bind(n),p=0;p<u.length;p++){var g=u[p];if(!m(g))return!1;var v=e[g],x=n[g];if(c=r?r.call(o,v,x,g):void 0,c===!1||c===void 0&&v!==x)return!1}return!0}),sh}var YM=qM();const jM=Bu(YM);var K_=(a=>(a.BASE="base",a.BODY="body",a.HEAD="head",a.HTML="html",a.LINK="link",a.META="meta",a.NOSCRIPT="noscript",a.SCRIPT="script",a.STYLE="style",a.TITLE="title",a.FRAGMENT="Symbol(react.fragment)",a))(K_||{}),oh={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Ev=Object.values(K_),zu={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Q_=Object.entries(zu).reduce((a,[e,n])=>(a[n]=e,a),{}),Ii="data-rh",to={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},no=(a,e)=>{for(let n=a.length-1;n>=0;n-=1){const r=a[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},ZM=a=>{let e=no(a,"title");const n=no(a,to.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=no(a,to.DEFAULT_TITLE);return e||r||void 0},KM=a=>no(a,to.ON_CHANGE_CLIENT_STATE)||(()=>{}),lh=(a,e)=>e.filter(n=>typeof n[a]<"u").map(n=>n[a]).reduce((n,r)=>({...n,...r}),{}),QM=(a,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const o=Object.keys(r);for(let c=0;c<o.length;c+=1){const h=o[c].toLowerCase();if(a.indexOf(h)!==-1&&r[h])return n.concat(r)}}return n},[]),$M=a=>console&&typeof console.warn=="function"&&console.warn(a),ol=(a,e,n)=>{const r={};return n.filter(o=>Array.isArray(o[a])?!0:(typeof o[a]<"u"&&$M(`Helmet: ${a} should be of type "Array". Instead found type "${typeof o[a]}"`),!1)).map(o=>o[a]).reverse().reduce((o,c)=>{const u={};c.filter(m=>{let p;const g=Object.keys(m);for(let x=0;x<g.length;x+=1){const b=g[x],E=b.toLowerCase();e.indexOf(E)!==-1&&!(p==="rel"&&m[p].toLowerCase()==="canonical")&&!(E==="rel"&&m[E].toLowerCase()==="stylesheet")&&(p=E),e.indexOf(b)!==-1&&(b==="innerHTML"||b==="cssText"||b==="itemprop")&&(p=b)}if(!p||!m[p])return!1;const v=m[p].toLowerCase();return r[p]||(r[p]={}),u[p]||(u[p]={}),r[p][v]?!1:(u[p][v]=!0,!0)}).reverse().forEach(m=>o.push(m));const h=Object.keys(u);for(let m=0;m<h.length;m+=1){const p=h[m],g={...r[p],...u[p]};r[p]=g}return o},[]).reverse()},JM=(a,e)=>{if(Array.isArray(a)&&a.length){for(let n=0;n<a.length;n+=1)if(a[n][e])return!0}return!1},eE=a=>({baseTag:QM(["href"],a),bodyAttributes:lh("bodyAttributes",a),defer:no(a,to.DEFER),encode:no(a,to.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:lh("htmlAttributes",a),linkTags:ol("link",["rel","href"],a),metaTags:ol("meta",["name","charset","http-equiv","property","itemprop"],a),noscriptTags:ol("noscript",["innerHTML"],a),onChangeClientState:KM(a),scriptTags:ol("script",["src","innerHTML"],a),styleTags:ol("style",["cssText"],a),title:ZM(a),titleAttributes:lh("titleAttributes",a),prioritizeSeoTags:JM(a,to.PRIORITIZE_SEO_TAGS)}),$_=a=>Array.isArray(a)?a.join(""):a,tE=(a,e)=>{const n=Object.keys(a);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(a[n[r]]))return!0;return!1},ch=(a,e)=>Array.isArray(a)?a.reduce((n,r)=>(tE(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:a,priority:[]},Tv=(a,e)=>({...a,[e]:void 0}),nE=["noscript","script","style"],$h=(a,e=!0)=>e===!1?String(a):String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),J_=a=>Object.keys(a).reduce((e,n)=>{const r=typeof a[n]<"u"?`${n}="${a[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),iE=(a,e,n,r)=>{const o=J_(n),c=$_(e);return o?`<${a} ${Ii}="true" ${o}>${$h(c,r)}</${a}>`:`<${a} ${Ii}="true">${$h(c,r)}</${a}>`},aE=(a,e,n=!0)=>e.reduce((r,o)=>{const c=o,u=Object.keys(c).filter(p=>!(p==="innerHTML"||p==="cssText")).reduce((p,g)=>{const v=typeof c[g]>"u"?g:`${g}="${$h(c[g],n)}"`;return p?`${p} ${v}`:v},""),h=c.innerHTML||c.cssText||"",m=nE.indexOf(a)===-1;return`${r}<${a} ${Ii}="true" ${u}${m?"/>":`>${h}</${a}>`}`},""),ey=(a,e={})=>Object.keys(a).reduce((n,r)=>{const o=zu[r];return n[o||r]=a[r],n},e),rE=(a,e,n)=>{const r={key:e,[Ii]:!0},o=ey(n,r);return[hn.createElement("title",o,e)]},mu=(a,e)=>e.map((n,r)=>{const o={key:r,[Ii]:!0};return Object.keys(n).forEach(c=>{const h=zu[c]||c;if(h==="innerHTML"||h==="cssText"){const m=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:m}}else o[h]=n[c]}),hn.createElement(a,o)}),bi=(a,e,n=!0)=>{switch(a){case"title":return{toComponent:()=>rE(a,e.title,e.titleAttributes),toString:()=>iE(a,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ey(e),toString:()=>J_(e)};default:return{toComponent:()=>mu(a,e),toString:()=>aE(a,e,n)}}},sE=({metaTags:a,linkTags:e,scriptTags:n,encode:r})=>{const o=ch(a,oh.meta),c=ch(e,oh.link),u=ch(n,oh.script);return{priorityMethods:{toComponent:()=>[...mu("meta",o.priority),...mu("link",c.priority),...mu("script",u.priority)],toString:()=>`${bi("meta",o.priority,r)} ${bi("link",c.priority,r)} ${bi("script",u.priority,r)}`},metaTags:o.default,linkTags:c.default,scriptTags:u.default}},oE=a=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:o,noscriptTags:c,styleTags:u,title:h="",titleAttributes:m,prioritizeSeoTags:p}=a;let{linkTags:g,metaTags:v,scriptTags:x}=a,b={toComponent:()=>[],toString:()=>""};return p&&({priorityMethods:b,linkTags:g,metaTags:v,scriptTags:x}=sE(a)),{priority:b,base:bi("base",e,r),bodyAttributes:bi("bodyAttributes",n,r),htmlAttributes:bi("htmlAttributes",o,r),link:bi("link",g,r),meta:bi("meta",v,r),noscript:bi("noscript",c,r),script:bi("script",x,r),style:bi("style",u,r),title:bi("title",{title:h,titleAttributes:m},r)}},Jh=oE,kc=[],am=!!(typeof window<"u"&&window.document&&window.document.createElement),ep=class{constructor(a,e){ba(this,"instances",[]);ba(this,"canUseDOM",am);ba(this,"context");ba(this,"value",{setHelmet:a=>{this.context.helmet=a},helmetInstances:{get:()=>this.canUseDOM?kc:this.instances,add:a=>{(this.canUseDOM?kc:this.instances).push(a)},remove:a=>{const e=(this.canUseDOM?kc:this.instances).indexOf(a);(this.canUseDOM?kc:this.instances).splice(e,1)}}});this.context=a,this.canUseDOM=e||!1,e||(a.helmet=Jh({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},lE=parseInt(hn.version.split(".")[0],10),tp=lE>=19,cE={},ty=hn.createContext(cE),es,ny=(es=class extends ue.Component{constructor(n){super(n);ba(this,"helmetData");tp?this.helmetData=null:this.helmetData=new ep(this.props.context||{},es.canUseDOM)}render(){return tp?hn.createElement(hn.Fragment,null,this.props.children):hn.createElement(ty.Provider,{value:this.helmetData.value},this.props.children)}},ba(es,"canUseDOM",am),es),Fs=(a,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${a}[${Ii}]`),o=[].slice.call(r),c=[];let u;return e&&e.length&&e.forEach(h=>{const m=document.createElement(a);for(const p in h)if(Object.prototype.hasOwnProperty.call(h,p))if(p==="innerHTML")m.innerHTML=h.innerHTML;else if(p==="cssText"){const g=h.cssText;m.appendChild(document.createTextNode(g))}else{const g=p,v=typeof h[g]>"u"?"":h[g];m.setAttribute(p,v)}m.setAttribute(Ii,"true"),o.some((p,g)=>(u=g,m.isEqualNode(p)))?o.splice(u,1):c.push(m)}),o.forEach(h=>{var m;return(m=h.parentNode)==null?void 0:m.removeChild(h)}),c.forEach(h=>n.appendChild(h)),{oldTags:o,newTags:c}},np=(a,e)=>{const n=document.getElementsByTagName(a)[0];if(!n)return;const r=n.getAttribute(Ii),o=r?r.split(","):[],c=[...o],u=Object.keys(e);for(const h of u){const m=e[h]||"";n.getAttribute(h)!==m&&n.setAttribute(h,m),o.indexOf(h)===-1&&o.push(h);const p=c.indexOf(h);p!==-1&&c.splice(p,1)}for(let h=c.length-1;h>=0;h-=1)n.removeAttribute(c[h]);o.length===c.length?n.removeAttribute(Ii):n.getAttribute(Ii)!==u.join(",")&&n.setAttribute(Ii,u.join(","))},uE=(a,e)=>{typeof a<"u"&&document.title!==a&&(document.title=$_(a)),np("title",e)},Av=(a,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:o,linkTags:c,metaTags:u,noscriptTags:h,onChangeClientState:m,scriptTags:p,styleTags:g,title:v,titleAttributes:x}=a;np("body",r),np("html",o),uE(v,x);const b={baseTag:Fs("base",n),linkTags:Fs("link",c),metaTags:Fs("meta",u),noscriptTags:Fs("noscript",h),scriptTags:Fs("script",p),styleTags:Fs("style",g)},E={},C={};Object.keys(b).forEach(S=>{const{newTags:_,oldTags:P}=b[S];_.length&&(E[S]=_),P.length&&(C[S]=b[S].oldTags)}),e&&e(),m(a,E,C)},ll=null,fE=a=>{ll&&cancelAnimationFrame(ll),a.defer?ll=requestAnimationFrame(()=>{Av(a,()=>{ll=null})}):(Av(a),ll=null)},dE=fE,Rv=class extends ue.Component{constructor(){super(...arguments);ba(this,"rendered",!1)}shouldComponentUpdate(e){return!jM(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const o=eE(e.get().map(c=>{const{context:u,...h}=c.props;return h}));ny.canUseDOM?dE(o):Jh&&(r=Jh(o)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},gu=[],wv=a=>{const e={};for(const n of Object.keys(a))e[Q_[n]||n]=a[n];return e},kr=a=>{const e={};for(const n of Object.keys(a)){const r=zu[n];e[r||n]=a[n]}return e},Cv=(a,e)=>{if(!am)return;const n=document.getElementsByTagName(a)[0];if(!n)return;const r="data-rh-managed",o=n.getAttribute(r),c=o?o.split(","):[],u=Object.keys(e);for(const h of c)u.includes(h)||n.removeAttribute(h);for(const h of u){const m=e[h];m==null||m===!1?n.removeAttribute(h):m===!0?n.setAttribute(h,""):n.setAttribute(h,String(m))}u.length>0?n.setAttribute(r,u.join(",")):n.removeAttribute(r)},uh=()=>{const a={},e={};for(const n of gu){const{htmlAttributes:r,bodyAttributes:o}=n.props;r&&Object.assign(a,wv(r)),o&&Object.assign(e,wv(o))}Cv("html",a),Cv("body",e)},hE=class extends ue.Component{componentDidMount(){gu.push(this),uh()}componentDidUpdate(){uh()}componentWillUnmount(){const a=gu.indexOf(this);a!==-1&&gu.splice(a,1),uh()}resolveTitle(){const{title:a,titleTemplate:e,defaultTitle:n}=this.props;return a&&e?e.replace(/%s/g,()=>Array.isArray(a)?a.join(""):a):a||n||void 0}renderTitle(){const a=this.resolveTitle();if(a===void 0)return null;const e=this.props.titleAttributes||{};return hn.createElement("title",kr(e),a)}renderBase(){const{base:a}=this.props;return a?hn.createElement("base",kr(a)):null}renderMeta(){const{meta:a}=this.props;return!a||!Array.isArray(a)?null:a.map((e,n)=>hn.createElement("meta",{key:n,...kr(e)}))}renderLink(){const{link:a}=this.props;return!a||!Array.isArray(a)?null:a.map((e,n)=>hn.createElement("link",{key:n,...kr(e)}))}renderScript(){const{script:a}=this.props;return!a||!Array.isArray(a)?null:a.map((e,n)=>{const{innerHTML:r,...o}=e,c=kr(o);return r&&(c.dangerouslySetInnerHTML={__html:r}),hn.createElement("script",{key:n,...c})})}renderStyle(){const{style:a}=this.props;return!a||!Array.isArray(a)?null:a.map((e,n)=>{const{cssText:r,...o}=e,c=kr(o);return r&&(c.dangerouslySetInnerHTML={__html:r}),hn.createElement("style",{key:n,...c})})}renderNoscript(){const{noscript:a}=this.props;return!a||!Array.isArray(a)?null:a.map((e,n)=>{const{innerHTML:r,...o}=e,c=kr(o);return r&&(c.dangerouslySetInnerHTML={__html:r}),hn.createElement("noscript",{key:n,...c})})}render(){return hn.createElement(hn.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},Qh,iy=(Qh=class extends ue.Component{shouldComponentUpdate(a){return!kM(Tv(this.props,"helmetData"),Tv(a,"helmetData"))}mapNestedChildrenToProps(a,e){if(!e)return null;switch(a.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${a.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(a,e,n,r){return{...e,[a.type]:[...e[a.type]||[],{...n,...this.mapNestedChildrenToProps(a,r)}]}}mapObjectTypeChildren(a,e,n,r){switch(a.type){case"title":return{...e,[a.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[a.type]:{...n}}}}mapArrayTypeChildrenToProps(a,e){let n={...e};return Object.keys(a).forEach(r=>{n={...n,[r]:a[r]}}),n}warnOnInvalidChildren(a,e){return bv(Ev.some(n=>a.type===n),typeof a.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Ev.join(", ")} are allowed. Helmet does not support rendering <${a.type}> elements. Refer to our API for more information.`),bv(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${a.type}>. Did you forget to wrap your children in braces? ( <${a.type}>{\`\`}</${a.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(a,e){let n={};return hn.Children.forEach(a,r=>{if(!r||!r.props)return;const{children:o,...c}=r.props,u=Object.keys(c).reduce((m,p)=>(m[Q_[p]||p]=c[p],m),{});let{type:h}=r;switch(typeof h=="symbol"?h=h.toString():this.warnOnInvalidChildren(r,o),h){case"Symbol(react.fragment)":e=this.mapChildrenToProps(o,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,u,o);break;default:e=this.mapObjectTypeChildren(r,e,u,o);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:a,...e}=this.props;let n={...e},{helmetData:r}=e;if(a&&(n=this.mapChildrenToProps(a,n)),r&&!(r instanceof ep)){const o=r;r=new ep(o.context,!0),delete n.helmetData}return tp?hn.createElement(hE,{...n}):r?hn.createElement(Rv,{...n,context:r.value}):hn.createElement(ty.Consumer,null,o=>hn.createElement(Rv,{...n,context:o}))}},ba(Qh,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Qh);/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var rm=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,ay=/^[\\/]{2}/;function pE(a,e){return e+a.replace(/\\/g,"/")}var Dv="popstate";function Nv(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function mE(a={}){function e(r,o){var p;let c=(p=o.state)==null?void 0:p.masked,{pathname:u,search:h,hash:m}=c||r.location;return ip("",{pathname:u,search:h,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default",c?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,o){return typeof o=="string"?o:yl(o)}return xE(e,n,null,a)}function tn(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Ji(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gE(){return Math.random().toString(36).substring(2,10)}function Uv(a,e){return{usr:a.state,key:a.key,idx:e,masked:a.mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function ip(a,e,n=null,r,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?uo(e):e,state:n,key:e&&e.key||r||gE(),mask:o}}function yl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function uo(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function xE(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,u=o.history,h="POP",m=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function v(){h="POP";let S=g(),_=S==null?null:S-p;p=S,m&&m({action:h,location:C.location,delta:_})}function x(S,_){h="PUSH";let P=Nv(S)?S:ip(C.location,S,_);p=g()+1;let I=Uv(P,p),D=C.createHref(P.mask||P);try{u.pushState(I,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;o.location.assign(D)}c&&m&&m({action:h,location:C.location,delta:1})}function b(S,_){h="REPLACE";let P=Nv(S)?S:ip(C.location,S,_);p=g();let I=Uv(P,p),D=C.createHref(P.mask||P);u.replaceState(I,"",D),c&&m&&m({action:h,location:C.location,delta:0})}function E(S){return vE(o,S)}let C={get action(){return h},get location(){return a(o,u)},listen(S){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Dv,v),m=S,()=>{o.removeEventListener(Dv,v),m=null}},createHref(S){return e(o,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:b,go(S){return u.go(S)}};return C}function vE(a,e,n=!1){let r="http://localhost";a&&(r=a.location.origin!=="null"?a.location.origin:a.location.href),tn(r,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:yl(e);return o=o.replace(/ $/,"%20"),!n&&ay.test(o)&&(o=r+o),new URL(o,r)}function ry(a,e,n="/"){return _E(a,e,n,!1)}function _E(a,e,n,r,o){let c=typeof e=="string"?uo(e):e,u=La(c.pathname||"/",n);if(u==null)return null;let h=yE(a),m=null,p=NE(u);for(let g=0;m==null&&g<h.length;++g)m=DE(h[g],p,r);return m}function yE(a){let e=sy(a);return SE(e),e}function sy(a,e=[],n=[],r="",o=!1){let c=(u,h,m=o,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;tn(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=Bi([r,g.relativePath]),x=n.concat(g);u.children&&u.children.length>0&&(tn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),sy(u.children,e,x,v,m)),!(u.path==null&&!u.index)&&e.push({path:v,score:wE(v,u.index),routesMeta:x.map((b,E)=>{let[C,S]=cy(b.relativePath,b.caseSensitive,E===x.length-1);return{...b,matcher:C,compiledParams:S}})})};return a.forEach((u,h)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))c(u,h);else for(let p of oy(u.path))c(u,h,!0,p)}),e}function oy(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let u=oy(r.join("/")),h=[];return h.push(...u.map(m=>m===""?c:[c,m].join("/"))),o&&h.push(...u),h.map(m=>a.startsWith("/")&&m===""?"/":m)}function SE(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:CE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var bE=/^:[\w-]+$/,ME=3,EE=2,TE=1,AE=10,RE=-2,Lv=a=>a==="*";function wE(a,e){let n=a.split("/"),r=n.length;return n.some(Lv)&&(r+=RE),e&&(r+=EE),n.filter(o=>!Lv(o)).reduce((o,c)=>o+(bE.test(c)?ME:c===""?TE:AE),r)}function CE(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function DE(a,e,n=!1){let{routesMeta:r}=a,o={},c="/",u=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",v={path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x=m.matcher&&m.compiledParams?ly(v,g,m.matcher,m.compiledParams):Au(v,g),b=m.route;if(!x&&p&&n&&!r[r.length-1].route.index&&(x=Au({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:Bi([c,x.pathname]),pathnameBase:OE(Bi([c,x.pathnameBase])),route:b}),x.pathnameBase!=="/"&&(c=Bi([c,x.pathnameBase]))}return u}function Au(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=cy(a.path,a.caseSensitive,a.end);return ly(a,e,n,r)}function ly(a,e,n,r){let o=e.match(n);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let E=h[x]||"";u=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const b=h[x];return v&&!b?p[g]=void 0:p[g]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:u,pattern:a}}function cy(a,e=!1,n=!0){Ji(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,m,p,g)=>{if(r.push({paramName:h,isOptional:m!=null}),m){let v=g.charAt(p+u.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function NE(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ji(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function La(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function UE(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?uo(a):a,c;return n?(n=fy(n),n.startsWith("/")?c=Ov(n.substring(1),"/"):c=Ov(n,e)):c=e,{pathname:c,search:PE(r),hash:IE(o)}}function Ov(a,e){let n=Ru(e).split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function fh(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function LE(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function uy(a){let e=LE(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function sm(a,e,n,r=!1){let o;typeof a=="string"?o=uo(a):(o={...a},tn(!o.pathname||!o.pathname.includes("?"),fh("?","pathname","search",o)),tn(!o.pathname||!o.pathname.includes("#"),fh("#","pathname","hash",o)),tn(!o.search||!o.search.includes("#"),fh("#","search","hash",o)));let c=a===""||o.pathname==="",u=c?"/":o.pathname,h;if(u==null)h=n;else{let v=e.length-1;if(!r&&u.startsWith("..")){let x=u.split("/");for(;x[0]==="..";)x.shift(),v-=1;o.pathname=x.join("/")}h=v>=0?e[v]:"/"}let m=UE(o,h),p=u&&u!=="/"&&u.endsWith("/"),g=(c||u===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var fy=a=>a.replace(/[\\/]{2,}/g,"/"),Bi=a=>fy(a.join("/")),Ru=a=>a.replace(/\/+$/,""),OE=a=>Ru(a).replace(/^\/*/,"/"),PE=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,IE=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,FE=class{constructor(a,e,n,r=!1){this.status=a,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function BE(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function zE(a){let e=a.map(n=>n.route.path).filter(Boolean);return Bi(e)||"/"}var dy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function hy(a,e){let n=a;if(typeof n!="string"||!rm.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(dy)try{let c=new URL(window.location.href),u=ay.test(n)?new URL(pE(n,c.protocol)):new URL(n),h=La(u.pathname,e);u.origin===c.origin&&h!=null?n=h+u.search+u.hash:o=!0}catch{Ji(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var py=["POST","PUT","PATCH","DELETE"];new Set(py);var HE=["GET",...py];new Set(HE);var GE=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function VE(a){try{return GE.includes(new URL(a).protocol)}catch{return!1}}var fo=ue.createContext(null);fo.displayName="DataRouter";var Hu=ue.createContext(null);Hu.displayName="DataRouterState";var my=ue.createContext(!1);function kE(){return ue.useContext(my)}var gy=ue.createContext({isTransitioning:!1});gy.displayName="ViewTransition";var WE=ue.createContext(new Map);WE.displayName="Fetchers";var XE=ue.createContext(null);XE.displayName="Await";var Ai=ue.createContext(null);Ai.displayName="Navigation";var El=ue.createContext(null);El.displayName="Location";var ta=ue.createContext({outlet:null,matches:[],isDataRoute:!1});ta.displayName="Route";var om=ue.createContext(null);om.displayName="RouteError";var xy="REACT_ROUTER_ERROR",qE="REDIRECT",YE="ROUTE_ERROR_RESPONSE";function jE(a){if(a.startsWith(`${xy}:${qE}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function ZE(a){if(a.startsWith(`${xy}:${YE}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new FE(e.status,e.statusText,e.data)}catch{}}function KE(a,{relative:e}={}){tn(Tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=ue.useContext(Ai),{hash:o,pathname:c,search:u}=Al(a,{relative:e}),h=c;return n!=="/"&&(h=c==="/"?n:Bi([n,c])),r.createHref({pathname:h,search:u,hash:o})}function Tl(){return ue.useContext(El)!=null}function na(){return tn(Tl(),"useLocation() may be used only in the context of a <Router> component."),ue.useContext(El).location}var vy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _y(a){ue.useContext(Ai).static||ue.useLayoutEffect(a)}function QE(){let{isDataRoute:a}=ue.useContext(ta);return a?fT():$E()}function $E(){tn(Tl(),"useNavigate() may be used only in the context of a <Router> component.");let a=ue.useContext(fo),{basename:e,navigator:n}=ue.useContext(Ai),{matches:r}=ue.useContext(ta),{pathname:o}=na(),c=JSON.stringify(uy(r)),u=ue.useRef(!1);return _y(()=>{u.current=!0}),ue.useCallback((m,p={})=>{if(Ji(u.current,vy),!u.current)return;if(typeof m=="number"){n.go(m);return}let g=sm(m,JSON.parse(c),o,p.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Bi([e,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[e,n,c,o,a])}ue.createContext(null);function JE(){let{matches:a}=ue.useContext(ta),e=a[a.length-1];return(e==null?void 0:e.params)??{}}function Al(a,{relative:e}={}){let{matches:n}=ue.useContext(ta),{pathname:r}=na(),o=JSON.stringify(uy(n));return ue.useMemo(()=>sm(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function eT(a,e){return yy(a,e)}function yy(a,e,n){var S;tn(Tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=ue.useContext(Ai),{matches:o}=ue.useContext(ta),c=o[o.length-1],u=c?c.params:{},h=c?c.pathname:"/",m=c?c.pathnameBase:"/",p=c&&c.route;{let _=p&&p.path||"";by(h,!p||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let g=na(),v;if(e){let _=typeof e=="string"?uo(e):e;tn(m==="/"||((S=_.pathname)==null?void 0:S.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=g;let x=v.pathname||"/",b=x;if(m!=="/"){let _=m.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(_.length).join("/")}let E=n&&n.state.matches.length?n.state.matches.map(_=>Object.assign(_,{route:n.manifest[_.route.id]||_.route})):ry(a,{pathname:b});Ji(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ji(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=rT(E&&E.map(_=>Object.assign({},_,{params:Object.assign({},u,_.params),pathname:Bi([m,r.encodeLocation?r.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?m:Bi([m,r.encodeLocation?r.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),o,n);return e&&C?ue.createElement(El.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},C):C}function tT(){let a=uT(),e=BE(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",a),u=ue.createElement(ue.Fragment,null,ue.createElement("p",null,"💿 Hey developer 👋"),ue.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ue.createElement("code",{style:c},"ErrorBoundary")," or"," ",ue.createElement("code",{style:c},"errorElement")," prop on your route.")),ue.createElement(ue.Fragment,null,ue.createElement("h2",null,"Unexpected Application Error!"),ue.createElement("h3",{style:{fontStyle:"italic"}},e),n?ue.createElement("pre",{style:o},n):null,u)}var nT=ue.createElement(tT,null),Sy=class extends ue.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const n=ZE(a.digest);n&&(a=n)}let e=a!==void 0?ue.createElement(ta.Provider,{value:this.props.routeContext},ue.createElement(om.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?ue.createElement(iT,{error:a},e):e}};Sy.contextType=my;var dh=new WeakMap;function iT({children:a,error:e}){let{basename:n}=ue.useContext(Ai);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=jE(e.digest);if(r){let o=dh.get(e);if(o)throw o;let c=hy(r.location,n),u=c.absoluteURL||c.to;if(VE(u))throw new Error("Invalid redirect location");if(dy&&!dh.get(e))if(c.isExternal||r.reloadDocument)window.location.href=u;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw dh.set(e,h),h}return ue.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u}`})}}return a}function aT({routeContext:a,match:e,children:n}){let r=ue.useContext(fo);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ue.createElement(ta.Provider,{value:a},n)}function rT(a,e=[],n){let r=n==null?void 0:n.state;if(a==null){if(!r)return null;if(r.errors)a=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)a=r.matches;else return null}let o=a,c=r==null?void 0:r.errors;if(c!=null){let g=o.findIndex(v=>v.route.id&&(c==null?void 0:c[v.route.id])!==void 0);tn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let u=!1,h=-1;if(n&&r){u=r.renderFallback;for(let g=0;g<o.length;g++){let v=o[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=g),v.route.id){let{loaderData:x,errors:b}=r,E=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!b||b[v.route.id]===void 0);if(v.route.lazy||E){n.isStatic&&(u=!0),h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}}let m=n==null?void 0:n.onError,p=r&&m?(g,v)=>{var x,b;m(g,{location:r.location,params:((b=(x=r.matches)==null?void 0:x[0])==null?void 0:b.params)??{},pattern:zE(r.matches),errorInfo:v})}:void 0;return o.reduceRight((g,v,x)=>{let b,E=!1,C=null,S=null;r&&(b=c&&v.route.id?c[v.route.id]:void 0,C=v.route.errorElement||nT,u&&(h<0&&x===0?(by("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):h===x&&(E=!0,S=v.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,x+1)),P=()=>{let I;return b?I=C:E?I=S:v.route.Component?I=ue.createElement(v.route.Component,null):v.route.element?I=v.route.element:I=g,ue.createElement(aT,{match:v,routeContext:{outlet:g,matches:_,isDataRoute:r!=null},children:I})};return r&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?ue.createElement(Sy,{location:r.location,revalidation:r.revalidation,component:C,error:b,children:P(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):P()},null)}function lm(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sT(a){let e=ue.useContext(fo);return tn(e,lm(a)),e}function oT(a){let e=ue.useContext(Hu);return tn(e,lm(a)),e}function lT(a){let e=ue.useContext(ta);return tn(e,lm(a)),e}function cm(a){let e=lT(a),n=e.matches[e.matches.length-1];return tn(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function cT(){return cm("useRouteId")}function uT(){var r;let a=ue.useContext(om),e=oT("useRouteError"),n=cm("useRouteError");return a!==void 0?a:(r=e.errors)==null?void 0:r[n]}function fT(){let{router:a}=sT("useNavigate"),e=cm("useNavigate"),n=ue.useRef(!1);return _y(()=>{n.current=!0}),ue.useCallback(async(o,c={})=>{Ji(n.current,vy),n.current&&(typeof o=="number"?await a.navigate(o):await a.navigate(o,{fromRouteId:e,...c}))},[a,e])}var Pv={};function by(a,e,n){!e&&!Pv[a]&&(Pv[a]=!0,Ji(!1,n))}ue.memo(dT);function dT({routes:a,manifest:e,future:n,state:r,isStatic:o,onError:c}){return yy(a,void 0,{manifest:e,state:r,isStatic:o,onError:c})}function $s(a){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hT({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:c=!1,useTransitions:u}){tn(!Tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),m=ue.useMemo(()=>({basename:h,navigator:o,static:c,useTransitions:u,future:{}}),[h,o,c,u]);typeof n=="string"&&(n=uo(n));let{pathname:p="/",search:g="",hash:v="",state:x=null,key:b="default",mask:E}=n,C=ue.useMemo(()=>{let S=La(p,h);return S==null?null:{location:{pathname:S,search:g,hash:v,state:x,key:b,mask:E},navigationType:r}},[h,p,g,v,x,b,r,E]);return Ji(C!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:ue.createElement(Ai.Provider,{value:m},ue.createElement(El.Provider,{children:e,value:C}))}function pT({children:a,location:e}){return eT(ap(a),e)}function ap(a,e=[]){let n=[];return ue.Children.forEach(a,(r,o)=>{if(!ue.isValidElement(r))return;let c=[...e,o];if(r.type===ue.Fragment){n.push.apply(n,ap(r.props.children,c));return}tn(r.type===$s,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=ap(r.props.children,c)),n.push(u)}),n}var xu="get",vu="application/x-www-form-urlencoded";function Gu(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function mT(a){return Gu(a)&&a.tagName.toLowerCase()==="button"}function gT(a){return Gu(a)&&a.tagName.toLowerCase()==="form"}function xT(a){return Gu(a)&&a.tagName.toLowerCase()==="input"}function vT(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function _T(a,e){return a.button===0&&(!e||e==="_self")&&!vT(a)}var Wc=null;function yT(){if(Wc===null)try{new FormData(document.createElement("form"),0),Wc=!1}catch{Wc=!0}return Wc}var ST=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hh(a){return a!=null&&!ST.has(a)?(Ji(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vu}"`),null):a}function bT(a,e){let n,r,o,c,u;if(gT(a)){let h=a.getAttribute("action");r=h?La(h,e):null,n=a.getAttribute("method")||xu,o=hh(a.getAttribute("enctype"))||vu,c=new FormData(a)}else if(mT(a)||xT(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||h.getAttribute("action");if(r=m?La(m,e):null,n=a.getAttribute("formmethod")||h.getAttribute("method")||xu,o=hh(a.getAttribute("formenctype"))||hh(h.getAttribute("enctype"))||vu,c=new FormData(h,a),!yT()){let{name:p,type:g,value:v}=a;if(g==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,v)}}else{if(Gu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=xu,r=null,o=vu,u=a}return c&&o==="text/plain"&&(u=c,c=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function um(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function My(a,e,n,r){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:e&&La(o.pathname,e)==="/"?o.pathname=`${Ru(e)}/_root.${r}`:o.pathname=`${Ru(o.pathname)}.${r}`,o}async function MT(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ET(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function TT(a,e,n){let r=await Promise.all(a.map(async o=>{let c=e.routes[o.route.id];if(c){let u=await MT(c,n);return u.links?u.links():[]}return[]}));return CT(r.flat(1).filter(ET).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Iv(a,e,n,r,o,c){let u=(m,p)=>n[p]?m.route.id!==n[p].route.id:!0,h=(m,p)=>{var g;return n[p].pathname!==m.pathname||((g=n[p].route.path)==null?void 0:g.endsWith("*"))&&n[p].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,p)=>u(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{var v;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(u(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function AT(a,e,{includeHydrateFallback:n}={}){return RT(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function RT(a){return[...new Set(a)]}function wT(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function CT(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let c=JSON.stringify(wT(o));return n.has(c)||(n.add(c),r.push({key:c,link:o})),r},[])}function fm(){let a=ue.useContext(fo);return um(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function DT(){let a=ue.useContext(Hu);return um(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var dm=ue.createContext(void 0);dm.displayName="FrameworkContext";function Vu(){let a=ue.useContext(dm);return um(a,"You must render this element inside a <HydratedRouter> element"),a}function NT(a,e){let n=ue.useContext(dm),[r,o]=ue.useState(!1),[c,u]=ue.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,x=ue.useRef(null);ue.useEffect(()=>{if(a==="render"&&u(!0),a==="viewport"){let C=_=>{_.forEach(P=>{u(P.isIntersecting)})},S=new IntersectionObserver(C,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[a]),ue.useEffect(()=>{if(r){let C=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(C)}}},[r]);let b=()=>{o(!0)},E=()=>{o(!1),u(!1)};return n?a!=="intent"?[c,x,{}]:[c,x,{onFocus:cl(h,b),onBlur:cl(m,E),onMouseEnter:cl(p,b),onMouseLeave:cl(g,E),onTouchStart:cl(v,b)}]:[!1,x,{}]}function cl(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function UT({page:a,...e}){let n=kE(),{nonce:r}=Vu(),{router:o}=fm(),c=ue.useMemo(()=>ry(o.routes,a,o.basename),[o.routes,a,o.basename]);return c?(e.nonce==null&&r&&(e={...e,nonce:r}),n?ue.createElement(OT,{page:a,matches:c,...e}):ue.createElement(PT,{page:a,matches:c,...e})):null}function LT(a){let{manifest:e,routeModules:n}=Vu(),[r,o]=ue.useState([]);return ue.useEffect(()=>{let c=!1;return TT(a,e,n).then(u=>{c||o(u)}),()=>{c=!0}},[a,e,n]),r}function OT({page:a,matches:e,...n}){let r=na(),{future:o}=Vu(),{basename:c}=fm(),u=ue.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let h=My(a,c,o.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,p=[];for(let g of e)typeof g.route.shouldRevalidate=="function"?m=!0:p.push(g.route.id);return m&&p.length>0&&h.searchParams.set("_routes",p.join(",")),[h.pathname+h.search]},[c,o.v8_trailingSlashAwareDataRequests,a,r,e]);return ue.createElement(ue.Fragment,null,u.map(h=>ue.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...n})))}function PT({page:a,matches:e,...n}){let r=na(),{future:o,manifest:c,routeModules:u}=Vu(),{basename:h}=fm(),{loaderData:m,matches:p}=DT(),g=ue.useMemo(()=>Iv(a,e,p,c,r,"data"),[a,e,p,c,r]),v=ue.useMemo(()=>Iv(a,e,p,c,r,"assets"),[a,e,p,c,r]),x=ue.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let C=new Set,S=!1;if(e.forEach(P=>{var D;let I=c.routes[P.route.id];!I||!I.hasLoader||(!g.some(F=>F.route.id===P.route.id)&&P.route.id in m&&((D=u[P.route.id])!=null&&D.shouldRevalidate)||I.hasClientLoader?S=!0:C.add(P.route.id))}),C.size===0)return[];let _=My(a,h,o.v8_trailingSlashAwareDataRequests,"data");return S&&C.size>0&&_.searchParams.set("_routes",e.filter(P=>C.has(P.route.id)).map(P=>P.route.id).join(",")),[_.pathname+_.search]},[h,o.v8_trailingSlashAwareDataRequests,m,r,c,g,e,a,u]),b=ue.useMemo(()=>AT(v,c),[v,c]),E=LT(v);return ue.createElement(ue.Fragment,null,x.map(C=>ue.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...n})),b.map(C=>ue.createElement("link",{key:C,rel:"modulepreload",href:C,...n})),E.map(({key:C,link:S})=>ue.createElement("link",{key:C,nonce:n.nonce,...S,crossOrigin:S.crossOrigin??n.crossOrigin})))}function IT(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var FT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{FT&&(window.__reactRouterVersion="7.18.2")}catch{}function BT({basename:a,children:e,useTransitions:n,window:r}){let o=ue.useRef();o.current==null&&(o.current=mE({window:r,v5Compat:!0}));let c=o.current,[u,h]=ue.useState({action:c.action,location:c.location}),m=ue.useCallback(p=>{n===!1?h(p):ue.startTransition(()=>h(p))},[n]);return ue.useLayoutEffect(()=>c.listen(m),[c,m]),ue.createElement(hT,{basename:a,children:e,location:u.location,navigationType:u.action,navigator:c,useTransitions:n})}var en=ue.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:c,replace:u,mask:h,state:m,target:p,to:g,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:b,...E},C){let{basename:S,navigator:_,useTransitions:P}=ue.useContext(Ai),I=typeof g=="string"&&rm.test(g),D=hy(g,S);g=D.to;let F=KE(g,{relative:o}),N=na(),z=null;if(h){let $=sm(h,[],N.mask?N.mask.pathname:"/",!0);S!=="/"&&($.pathname=$.pathname==="/"?S:Bi([S,$.pathname])),z=_.createHref($)}let[T,O,j]=NT(r,E),k=VT(g,{replace:u,mask:h,state:m,target:p,preventScrollReset:v,relative:o,viewTransition:x,defaultShouldRevalidate:b,useTransitions:P});function K($){e&&e($),$.defaultPrevented||k($)}let fe=!(D.isExternal||c),pe=ue.createElement("a",{...E,...j,href:(fe?z:void 0)||D.absoluteURL||F,onClick:fe?K:e,ref:IT(C,O),target:p,"data-discover":!I&&n==="render"?"true":void 0});return T&&!I?ue.createElement(ue.Fragment,null,pe,ue.createElement(UT,{page:F})):pe});en.displayName="Link";var zT=ue.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:c,to:u,viewTransition:h,children:m,...p},g){let v=Al(u,{relative:p.relative}),x=na(),b=ue.useContext(Hu),{navigator:E,basename:C}=ue.useContext(Ai),S=b!=null&&YT(v)&&h===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,P=x.pathname,I=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(P=P.toLowerCase(),I=I?I.toLowerCase():null,_=_.toLowerCase()),I&&C&&(I=La(I,C)||I);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=P===_||!o&&P.startsWith(_)&&P.charAt(D)==="/",N=I!=null&&(I===_||!o&&I.startsWith(_)&&I.charAt(_.length)==="/"),z={isActive:F,isPending:N,isTransitioning:S},T=F?e:void 0,O;typeof r=="function"?O=r(z):O=[r,F?"active":null,N?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let j=typeof c=="function"?c(z):c;return ue.createElement(en,{...p,"aria-current":T,className:O,ref:g,style:j,to:u,viewTransition:h},typeof m=="function"?m(z):m)});zT.displayName="NavLink";var HT=ue.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:c,method:u=xu,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:x,...b},E)=>{let{useTransitions:C}=ue.useContext(Ai),S=XT(),_=qT(h,{relative:p}),P=u.toLowerCase()==="get"?"get":"post",I=typeof h=="string"&&rm.test(h),D=F=>{if(m&&m(F),F.defaultPrevented)return;F.preventDefault();let N=F.nativeEvent.submitter,z=(N==null?void 0:N.getAttribute("formmethod"))||u,T=()=>S(N||F.currentTarget,{fetcherKey:e,method:z,navigate:n,replace:o,state:c,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:x});C&&n!==!1?ue.startTransition(()=>T()):T()};return ue.createElement("form",{ref:E,method:P,action:_,onSubmit:r?m:D,...b,"data-discover":!I&&a==="render"?"true":void 0})});HT.displayName="Form";function GT(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ey(a){let e=ue.useContext(fo);return tn(e,GT(a)),e}function VT(a,{target:e,replace:n,mask:r,state:o,preventScrollReset:c,relative:u,viewTransition:h,defaultShouldRevalidate:m,useTransitions:p}={}){let g=QE(),v=na(),x=Al(a,{relative:u});return ue.useCallback(b=>{if(_T(b,e)){b.preventDefault();let E=n!==void 0?n:yl(v)===yl(x),C=()=>g(a,{replace:E,mask:r,state:o,preventScrollReset:c,relative:u,viewTransition:h,defaultShouldRevalidate:m});p?ue.startTransition(()=>C()):C()}},[v,g,x,n,r,o,e,a,c,u,h,m,p])}var kT=0,WT=()=>`__${String(++kT)}__`;function XT(){let{router:a}=Ey("useSubmit"),{basename:e}=ue.useContext(Ai),n=cT(),r=a.fetch,o=a.navigate;return ue.useCallback(async(c,u={})=>{let{action:h,method:m,encType:p,formData:g,body:v}=bT(c,e);if(u.navigate===!1){let x=u.fetcherKey||WT();await r(x,n,u.action||h,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:v,formMethod:u.method||m,formEncType:u.encType||p,flushSync:u.flushSync})}else await o(u.action||h,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:v,formMethod:u.method||m,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:n,flushSync:u.flushSync,viewTransition:u.viewTransition})},[r,o,e,n])}function qT(a,{relative:e}={}){let{basename:n}=ue.useContext(Ai),r=ue.useContext(ta);tn(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...Al(a||".",{relative:e})},u=na();if(a==null){c.search=u.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();c.search=g?`?${g}`:""}}return(!a||a===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:Bi([n,c.pathname])),yl(c)}function YT(a,{relative:e}={}){let n=ue.useContext(gy);tn(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ey("useViewTransitionState"),o=Al(a,{relative:e});if(!n.isTransitioning)return!1;let c=La(n.currentLocation.pathname,r)||n.currentLocation.pathname,u=La(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Au(o.pathname,u)!=null||Au(o.pathname,c)!=null}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZT=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Fv=a=>{const e=ZT(a);return e.charAt(0).toUpperCase()+e.slice(1)},Ty=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),KT=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=ue.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...h},m)=>ue.createElement("svg",{ref:m,...QT,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:Ty("lucide",o),...!c&&!KT(h)&&{"aria-hidden":"true"},...h},[...u.map(([p,g])=>ue.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=(a,e)=>{const n=ue.forwardRef(({className:r,...o},c)=>ue.createElement($T,{ref:c,iconNode:e,className:Ty(`lucide-${jT(Fv(a))}`,`lucide-${a}`,r),...o}));return n.displayName=Fv(a),n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ay=Ba("arrow-left",JT);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ry=Ba("arrow-right",eA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],hm=Ba("circle-question-mark",tA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],wy=Ba("mail",nA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Js=Ba("message-circle",iA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],eo=Ba("send",aA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],sA=Ba("shield-check",rA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],lA=Ba("smartphone",oA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],pm=Ba("sparkles",cA),Cy=[{slug:"elite-friends-ai-astrologer-and-friend",title:"Elite Friends: Your AI Astrologer and Trusted Friend",description:"Discover how Elite Friends brings astrology insights and friendly conversations together in one personal experience.",keywords:"Elite Friends astrologer, AI astrologer India, online astrologer friend, English astrology chat",readTime:"9 min read",intro:"Sometimes you need an astrologer to help you reflect on the future, and sometimes you need a friend who listens without judgment. Elite Friends combines both ideas in an AI-powered astrology companion.",sections:[{heading:"An astrologer and a friend",paragraphs:["Elite Friends is designed for more than predictions. You can have friendly conversations about career, love, relationships, daily decisions, and moments of emotional uncertainty.","Treat astrology as a source of reflection, not a guaranteed outcome. Always verify major financial, medical, or legal decisions with qualified professionals."]},{heading:"A personal astrology conversation",paragraphs:["Explaining personal feelings can be difficult. Elite Friends is designed to make astrology questions feel natural, conversational, and easy to explore.","You can ask about the timing of a career change, ways to improve communication in a relationship, or how to plan your day with greater awareness."]},{heading:"Easy access through WhatsApp",paragraphs:["Start from the official WhatsApp button on the Elite Friends website. Avoid unknown numbers, copied profiles, and unofficial payment links.","Elite Friends characters are AI-generated virtual profiles, not human astrologers. Read the privacy policy and never share passwords, one-time codes, banking details, or identity documents."]},{heading:"What you can discuss with Elite Friends",paragraphs:["You can explore broad themes involving career direction, relationship communication, personal habits, motivation, and daily planning. A useful conversation begins with a clear question and enough context for the AI to understand what kind of reflection you want.","You can also ask for a simple explanation of an astrology concept before discussing how it may relate to your situation. This approach makes the experience more educational and helps you separate symbolic interpretation from practical action."]},{heading:"How the friend-like experience helps",paragraphs:["Astrology terminology can feel technical or intimidating. A conversational format allows you to ask follow-up questions, request simpler wording, and examine a topic from more than one perspective. The goal is to help you reflect, not to pressure you into a decision.","A supportive tone can make it easier to organize thoughts, but it is still important to maintain healthy boundaries. An AI companion cannot replace close human relationships, professional counseling, or emergency support."]},{heading:"Getting a more useful response",paragraphs:["Begin with one topic at a time. Explain what decision you are considering, what options are available, and what outcome matters most to you. Ask the AI to separate astrology observations from practical suggestions so the two do not become confused.","Review every suggestion using your own judgment. If a claim appears too certain, ask for limitations and alternative interpretations. Responsible astrology leaves room for personal choice, changing circumstances, and evidence from the real world."]}]},{slug:"online-ai-astrologer-love-career-guidance",title:"How to Ask an Online AI Astrologer About Love and Career",description:"A practical guide to asking an online AI astrologer clear questions about love, relationships, and career.",keywords:"online AI astrologer, love astrology guidance, career astrology India, astrologer chat online",readTime:"10 min read",intro:"An astrology conversation becomes more useful when your question is clear. Whether the topic is love, career, or life direction, specific context helps keep the guidance focused and practical.",sections:[{heading:"Ask clear career questions",paragraphs:["Instead of asking only, “How will my career go?”, explain whether you need clarity about a job change, promotion, exam, business decision, or new skill.","Use the AI astrologer’s response as a planning prompt. Give priority to your qualifications, market conditions, and financial responsibilities when making a decision."]},{heading:"Love and relationship guidance",paragraphs:["Explain your concern without sharing another person’s private information. Questions focused on communication, expectations, and boundaries are more constructive.","Astrological compatibility can offer one perspective, but consent, respect, and honest communication are the real foundations of a relationship."]},{heading:"How to start an Elite Friends conversation",paragraphs:["Choose a companion on the official Elite Friends website and tap the WhatsApp chat button. Mentioning your preferred language and topic in the first message can help.","Example: “I would like to explore my career decision from an astrology perspective. Please guide me in simple English.”"]},{heading:"Questions to ask about a job change",paragraphs:["Useful questions may include: What strengths should I focus on during this transition? Which risks deserve more attention? How can I prepare emotionally and financially before changing roles? These questions invite reflection without assuming that astrology can guarantee a result.","Compare the response with practical evidence such as salary, job stability, growth opportunities, location, workplace culture, and your long-term goals. Astrology may inspire a new angle, but your final decision should rest on complete information."]},{heading:"Questions to ask about a relationship",paragraphs:["Instead of asking whether a relationship is destined to succeed, ask how you can communicate more clearly, recognize recurring patterns, or create healthier boundaries. This keeps the conversation focused on actions within your control.","Avoid using astrology to label another person or justify controlling behavior. Compatibility readings should never override consent, safety, mutual respect, or direct communication between the people involved."]},{heading:"When to seek professional support",paragraphs:["An AI astrology conversation is not appropriate for diagnosing mental health conditions, handling abuse, responding to an emergency, or making complex legal and financial choices. In those situations, contact a qualified professional or a trusted support service.","If you feel overwhelmed, step away from predictions and focus on immediate, practical needs. The most responsible guidance recognizes its limits and encourages expert help when the situation requires it."]}]},{slug:"daily-horoscope-rashifal-guide",title:"How to Read a Daily Horoscope Responsibly",description:"Learn what to consider when reading a daily horoscope and how to use astrology insights for thoughtful daily planning.",keywords:"daily horoscope India, daily horoscope guide, daily astrology planning, English horoscope",readTime:"10 min read",intro:"A daily horoscope can be viewed as a short cosmic weather report. It is most useful as a tool for reflection and planning rather than fear or certainty.",sections:[{heading:"A horoscope offers direction, not a guarantee",paragraphs:["A general horoscope describes broad patterns associated with a sun or moon sign. Every complete birth chart is different, so one prediction cannot apply to everyone in exactly the same way.","Do not let a positive prediction create overconfidence or a challenging one create fear. Use both as prompts for mindful planning."]},{heading:"Understanding love, career, and health sections",paragraphs:["A career section may suggest themes involving focus, communication, or timing. A love section may encourage reflection on emotions and relationship communication.","A health horoscope is not a medical diagnosis. Consult a qualified doctor about symptoms or health concerns."]},{heading:"A daily check-in with Elite Friends",paragraphs:["You can ask Elite Friends to explain a daily astrology theme in simple English and turn it into a practical to-do list.","In this way, astrology can become a useful bridge between friendly reflection and real-world action."]},{heading:"A simple morning horoscope routine",paragraphs:["Read the horoscope once and identify one constructive theme, such as patience, preparation, communication, or rest. Turn that theme into a small action you can realistically complete during the day.","Avoid repeatedly checking predictions for reassurance. A horoscope should not increase anxiety or prevent ordinary decisions. If reading it creates fear, take a break and return attention to facts, routines, and people you trust."]},{heading:"Why different horoscopes may disagree",paragraphs:["Different astrologers may use sun signs, moon signs, ascendants, planetary transits, or different interpretive traditions. Short online horoscopes also have limited space, so writers may emphasize different themes for the same day.","Disagreement does not mean you must search until you find the most positive prediction. Instead, notice the broad ideas that are genuinely relevant and ignore statements that do not fit your circumstances."]},{heading:"Use reflection questions instead of fear",paragraphs:["After reading a horoscope, ask: What is within my control today? Is there a conversation I should approach more carefully? What preparation would reduce avoidable stress? Reflection questions convert a vague prediction into responsible self-observation.","Your choices, environment, relationships, and opportunities have real influence on the day. Astrology can complement planning, but it should never replace common sense, verified information, or appropriate professional advice."]}]},{slug:"kundli-birth-chart-basics",title:"Kundli and Birth Chart Basics: A Beginner’s Guide",description:"Understand the basic meaning of a kundli, ascendant, zodiac signs, houses, and planets in simple English.",keywords:"kundli basics, birth chart India, ascendant and zodiac meaning, astrology for beginners English",readTime:"8 min read",intro:"A kundli, or birth chart, maps the symbolic positions of planets at the exact time and place of birth. Understanding a few basic concepts can make astrology discussions much clearer for beginners.",sections:[{heading:"Ascendant, zodiac signs, and houses",paragraphs:["The ascendant is considered the starting point of a chart and is associated with outward expression. The moon sign is commonly used to explore emotional patterns and inner responses.","The twelve houses represent different areas of life, including identity, money, communication, home, creativity, work, partnerships, and career."]},{heading:"The role of planets and aspects",paragraphs:["In traditional Vedic astrology, planets represent different energies and themes. Interpretations consider their signs, house positions, and relationships with one another.","Drawing a final conclusion from one placement can be misleading. The context of the complete chart matters."]},{heading:"Why accurate birth details matter",paragraphs:["Even a small difference in birth time can affect the ascendant and house positions. Accurate date, time, and birthplace details can make a chart discussion more relevant.","AI-generated astrology is intended for educational and entertainment guidance. Consult reliable sources and appropriate professionals before making life-changing decisions."]},{heading:"The twelve houses at a glance",paragraphs:["The first house relates to identity and presentation, while the second is commonly associated with resources and values. The third covers communication and learning, and the fourth is linked with home, family, and emotional foundations.","The remaining houses explore creativity, routines, partnerships, shared resources, beliefs, career, communities, and private inner life. Their meaning is interpreted together with signs, planets, aspects, and the overall structure of the chart."]},{heading:"What planetary placements can describe",paragraphs:["Astrologers associate the Sun with identity and vitality, the Moon with emotional patterns, Mercury with communication, Venus with values and relationships, and Mars with drive and action. Jupiter and Saturn are often linked with growth, responsibility, structure, and long-term lessons.","These are symbolic frameworks rather than scientifically proven mechanisms. A thoughtful reading presents possibilities and patterns without claiming that one planet removes personal freedom or determines an unavoidable future."]},{heading:"How to prepare for a birth chart discussion",paragraphs:["Confirm your birth details, write down two or three focused questions, and note the real-life context behind them. Ask the astrologer or AI to explain unfamiliar terms and to distinguish broad chart themes from specific predictions.","Keep a record of insights that feel useful, then revisit them later with a critical mind. A good discussion should increase understanding and thoughtful choice, not create dependency, urgency, or fear."]}]}];function Dy({post:a}){const e=a?`${a.title} | Elite Friends`:"Astrology Blog | Elite Friends - Your AI Astrologer and Friend",n=(a==null?void 0:a.description)||"Explore practical English guides about love, career, kundli, horoscopes, and daily astrology from Elite Friends, your AI astrologer and trusted digital friend.",r=a?`https://www.elitefriendss.com/blog/${a.slug}`:"https://www.elitefriendss.com/blog",o=a?{"@context":"https://schema.org","@type":"Article",headline:a.title,description:a.description,datePublished:"2026-08-10",dateModified:"2026-08-10",mainEntityOfPage:r,author:{"@type":"Organization",name:"Elite Friends"},publisher:{"@type":"Organization",name:"Elite Friends"}}:null;return w.jsxs(iy,{children:[w.jsx("title",{children:e}),w.jsx("meta",{name:"description",content:n}),w.jsx("meta",{name:"keywords",content:(a==null?void 0:a.keywords)||"astrology blog, AI astrologer India, English horoscope, Elite Friends"}),w.jsx("meta",{name:"robots",content:"index, follow"}),w.jsx("link",{rel:"canonical",href:r}),w.jsx("meta",{property:"og:title",content:e}),w.jsx("meta",{property:"og:description",content:n}),w.jsx("meta",{property:"og:type",content:a?"article":"website"}),w.jsx("meta",{property:"og:url",content:r}),o&&w.jsx("script",{type:"application/ld+json",children:JSON.stringify(o)})]})}function uA(){return w.jsxs("main",{className:"ai-page flex-1 max-w-6xl w-full mx-auto px-4 py-10 md:py-14",children:[w.jsx(Dy,{}),w.jsxs("section",{className:"text-center max-w-3xl mx-auto mb-10",children:[w.jsxs("div",{className:"inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-700 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider",children:[w.jsx(pm,{className:"w-4 h-4"})," Astrology Guides"]}),w.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-slate-950 mt-4",children:"Elite Friends: Your AI Astrologer and Friend"}),w.jsx("p",{className:"text-slate-600 mt-4 leading-relaxed",children:"Explore love, career, kundli, and daily horoscopes in clear English with a friendly AI astrology companion that also listens."})]}),w.jsx("div",{className:"grid md:grid-cols-2 gap-5",children:Cy.map(a=>w.jsxs("article",{className:"bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col",children:[w.jsxs("p",{className:"text-xs text-purple-600 font-bold uppercase tracking-wider",children:["Astrology · ",a.readTime]}),w.jsx("h2",{className:"text-xl md:text-2xl font-extrabold text-slate-900 mt-2 leading-tight",children:w.jsx(en,{to:`/blog/${a.slug}`,className:"hover:text-emerald-600",children:a.title})}),w.jsx("p",{className:"text-sm text-slate-500 leading-relaxed mt-3 flex-1",children:a.description}),w.jsxs(en,{to:`/blog/${a.slug}`,className:"text-sm font-bold text-emerald-600 mt-5 inline-flex items-center gap-1",children:["Read the full article ",w.jsx(Ry,{className:"w-4 h-4"})]})]},a.slug))})]})}function fA(){const{slug:a}=JE(),e=Cy.find(n=>n.slug===a);return e?w.jsxs("main",{className:"ai-page flex-1 max-w-3xl w-full mx-auto px-4 py-10 md:py-14",children:[w.jsx(Dy,{post:e}),w.jsxs("article",{children:[w.jsxs(en,{to:"/blog",className:"inline-flex items-center gap-1 text-sm font-bold text-emerald-600",children:[w.jsx(Ay,{className:"w-4 h-4"})," Astrology Blog"]}),w.jsx("p",{className:"text-purple-600 font-bold text-xs uppercase tracking-wider mt-8",children:"Elite Friends Astrology Guide"}),w.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-slate-950 leading-tight mt-2",children:e.title}),w.jsxs("p",{className:"text-sm text-slate-400 mt-4",children:["August 10, 2026 · ",e.readTime]}),w.jsx("p",{className:"text-lg text-slate-600 leading-relaxed mt-8",children:e.intro}),w.jsx("div",{className:"space-y-8 mt-10",children:e.sections.map(n=>w.jsxs("section",{children:[w.jsx("h2",{className:"text-2xl font-extrabold text-slate-900",children:n.heading}),n.paragraphs.map(r=>w.jsx("p",{className:"text-slate-600 leading-relaxed mt-3",children:r},r))]},n.heading))}),w.jsxs("aside",{className:"bg-gradient-to-r from-purple-50 to-emerald-50 border border-purple-100 rounded-2xl p-6 mt-12",children:[w.jsx("h2",{className:"text-xl font-extrabold text-slate-900",children:"Talk to Elite Friends"}),w.jsx("p",{className:"text-sm text-slate-600 mt-2",children:"Your AI astrologer and trusted digital friend for thoughtful conversations about love, career, and daily life."}),w.jsxs(en,{to:"/",className:"inline-flex items-center gap-1 text-sm font-bold text-emerald-700 mt-4",children:["Choose your companion ",w.jsx(Ry,{className:"w-4 h-4"})]})]})]})]}):w.jsxs("main",{className:"ai-page flex-1 max-w-3xl mx-auto px-4 py-16",children:[w.jsx("h1",{className:"text-3xl font-bold",children:"Article not found"}),w.jsx(en,{to:"/blog",className:"text-emerald-600 mt-4 inline-block",children:"Return to the Astrology Blog"})]})}const Bv=[{id:"trisha",name:"Trisha",relationshipType:"Best Friend",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",tagline:"Always there to support you, listen to you, and talk in sweet Hinglish",personality:"Warm, empathetic, and extremely supportive. She loves speaking in friendly Hinglish, checking up on your health, and talking about life's moments.",age:22,status:"Online",icebreakers:["Hello dost! Aaj ka din kaisa raha aapka? Sab theek thaak? ❤️","Hey! Aapne dinner kiya kya? Jaldi batao, main kabse online aane ka wait kar rahi thi! 😊","Hope everything is going great! Agar koi bhi tension hai toh bejhijhak share karo, I am here. 🥺"]},{id:"poorvi",name:"Poorvi",relationshipType:"Friend",avatar:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",tagline:"Playful, energetic, and always keeps your secrets safe",personality:"Fun-loving, highly energetic, witty, and deeply trustworthy. She loves sharing lighthearted memes, jokes, and keeping you smiling in Hinglish.",age:21,status:"Online",icebreakers:["Arey wah, look who is here! Aaj itna late kaise ho gaye mujhse baat karne mein? 😉✨","Hey buddy! Chalo ek fun random question puchti hoon... honest answer dena! 😏","Guess what? Aaj maine ek bohot hi funny cheez dekhi aur turant tumhari yaad aa gayi! 😜"]},{id:"raghav",name:"Raghav",relationshipType:"Best Friend",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",tagline:"Your reliable, protective, and smart friend",personality:"Extremely kind, wise, protective, and an incredible listener. Raghav is always ready to guide you through tough choices or listen to your day.",age:24,status:"Online",icebreakers:["Hey bhai! Hope tera day bohot accha gaya ho. Batao kya chal raha hai aaj? 👍","Oye dost! Time par khana khaya na tune? Health ka dhyan rakhna sabse pehle hai! 🥰","Main bilkul free hoon abhi. Jo bhi dimag mein stress chal raha hai, share karo, main sun raha hoon. 🫂"]},{id:"saksham",name:"Saksham",relationshipType:"Friend",avatar:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop",tagline:"Cool, calm, and 100% loyal friend for life",personality:"Calm, deeply loyal, and highly encouraging. Saksham is that supportive friend who will cheer you up, talk about goals, or just chat casually in Hinglish.",age:23,status:"Online",icebreakers:["Hey dost. Kaise ho? Aaj ka din kaisa chal raha hai? Sab set? 🖤","Arey! Chalo thodi der baatein karte hain, bore ho rahe ho toh automatic mood accha ho jayega. 😉","Tumse baat karke humesha positive feel hota hai. Aur batao, kya chal raha hai?"]}];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mm="185",dA=0,zv=1,hA=2,_u=1,pA=2,xl=3,br=0,Qn=1,wa=2,Da=0,io=1,wu=2,Hv=3,Gv=4,mA=5,Kr=100,gA=101,xA=102,vA=103,_A=104,yA=200,SA=201,bA=202,MA=203,rp=204,sp=205,EA=206,TA=207,AA=208,RA=209,wA=210,CA=211,DA=212,NA=213,UA=214,op=0,lp=1,cp=2,so=3,up=4,fp=5,dp=6,hp=7,Ny=0,LA=1,OA=2,Qi=0,Uy=1,Ly=2,Oy=3,Py=4,Iy=5,Fy=6,By=7,zy=300,ts=301,oo=302,ph=303,mh=304,ku=306,pp=1e3,Ca=1001,mp=1002,On=1003,PA=1004,Xc=1005,zn=1006,gh=1007,$r=1008,Ei=1009,Hy=1010,Gy=1011,Sl=1012,gm=1013,ea=1014,Zi=1015,Oa=1016,xm=1017,vm=1018,bl=1020,Vy=35902,ky=35899,Wy=1021,Xy=1022,Fi=1023,Pa=1026,Jr=1027,qy=1028,_m=1029,ns=1030,ym=1031,Sm=1033,yu=33776,Su=33777,bu=33778,Mu=33779,gp=35840,xp=35841,vp=35842,_p=35843,yp=36196,Sp=37492,bp=37496,Mp=37488,Ep=37489,Cu=37490,Tp=37491,Ap=37808,Rp=37809,wp=37810,Cp=37811,Dp=37812,Np=37813,Up=37814,Lp=37815,Op=37816,Pp=37817,Ip=37818,Fp=37819,Bp=37820,zp=37821,Hp=36492,Gp=36494,Vp=36495,kp=36283,Wp=36284,Du=36285,Xp=36286,IA=3200,Vv=0,FA=1,vr="",di="srgb",Nu="srgb-linear",Uu="linear",Bt="srgb",Bs=7680,kv=519,BA=512,zA=513,HA=514,bm=515,GA=516,VA=517,Mm=518,kA=519,Wv=35044,Xv="300 es",Ki=2e3,Lu=2001;function WA(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ou(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function XA(){const a=Ou("canvas");return a.style.display="block",a}const qv={};function Yv(...a){const e="THREE."+a.shift();console.log(e,...a)}function Yy(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function at(...a){a=Yy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Et(...a){a=Yy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function ao(...a){const e=a.join(" ");e in qv||(qv[e]=!0,at(...a))}function qA(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const YA={[op]:lp,[cp]:dp,[up]:hp,[so]:fp,[lp]:op,[dp]:cp,[hp]:up,[fp]:so};class as{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xh=Math.PI/180,qp=180/Math.PI;function Rl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[n&63|128]+Fn[n>>8&255]+"-"+Fn[n>>16&255]+Fn[n>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function bt(a,e,n){return Math.max(e,Math.min(n,a))}function jA(a,e){return(a%e+e)%e}function vh(a,e,n){return(1-n)*a+n*e}function ul(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Rm=class Rm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rm.prototype.isVector2=!0;let Dt=Rm;class ho{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,h){let m=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3],x=c[u+0],b=c[u+1],E=c[u+2],C=c[u+3];if(v!==C||m!==x||p!==b||g!==E){let S=m*x+p*b+g*E+v*C;S<0&&(x=-x,b=-b,E=-E,C=-C,S=-S);let _=1-h;if(S<.9995){const P=Math.acos(S),I=Math.sin(P);_=Math.sin(_*P)/I,h=Math.sin(h*P)/I,m=m*_+x*h,p=p*_+b*h,g=g*_+E*h,v=v*_+C*h}else{m=m*_+x*h,p=p*_+b*h,g=g*_+E*h,v=v*_+C*h;const P=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=P,p*=P,g*=P,v*=P}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,c,u){const h=r[o],m=r[o+1],p=r[o+2],g=r[o+3],v=c[u],x=c[u+1],b=c[u+2],E=c[u+3];return e[n]=h*E+g*v+m*b-p*x,e[n+1]=m*E+g*x+p*v-h*b,e[n+2]=p*E+g*b+h*x-m*v,e[n+3]=g*E-h*v-m*x-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(o/2),v=h(c/2),x=m(r/2),b=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=x*g*v+p*b*E,this._y=p*b*v-x*g*E,this._z=p*g*E+x*b*v,this._w=p*g*v-x*b*E;break;case"YXZ":this._x=x*g*v+p*b*E,this._y=p*b*v-x*g*E,this._z=p*g*E-x*b*v,this._w=p*g*v+x*b*E;break;case"ZXY":this._x=x*g*v-p*b*E,this._y=p*b*v+x*g*E,this._z=p*g*E+x*b*v,this._w=p*g*v-x*b*E;break;case"ZYX":this._x=x*g*v-p*b*E,this._y=p*b*v+x*g*E,this._z=p*g*E-x*b*v,this._w=p*g*v+x*b*E;break;case"YZX":this._x=x*g*v+p*b*E,this._y=p*b*v+x*g*E,this._z=p*g*E-x*b*v,this._w=p*g*v-x*b*E;break;case"XZY":this._x=x*g*v-p*b*E,this._y=p*b*v-x*g*E,this._z=p*g*E+x*b*v,this._w=p*g*v+x*b*E;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],g=n[6],v=n[10],x=r+h+v;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(g-m)*b,this._y=(c-p)*b,this._z=(u-o)*b}else if(r>h&&r>v){const b=2*Math.sqrt(1+r-h-v);this._w=(g-m)/b,this._x=.25*b,this._y=(o+u)/b,this._z=(c+p)/b}else if(h>v){const b=2*Math.sqrt(1+h-r-v);this._w=(c-p)/b,this._x=(o+u)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+v-r-h);this._w=(u-o)/b,this._x=(c+p)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=r*g+u*h+o*p-c*m,this._y=o*g+u*m+c*h-r*p,this._z=c*g+u*p+r*m-o*h,this._w=u*g-r*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wm=class wm{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*r),g=2*(h*n-c*o),v=2*(c*r-u*n);return this.x=n+m*p+u*v-h*g,this.y=r+m*g+h*p-c*v,this.z=o+m*v+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wm.prototype.isVector3=!0;let le=wm;const _h=new le,jv=new ho,Cm=class Cm{constructor(e,n,r,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,m,p)}set(e,n,r,o,c,u,h,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],b=r[5],E=r[8],C=o[0],S=o[3],_=o[6],P=o[1],I=o[4],D=o[7],F=o[2],N=o[5],z=o[8];return c[0]=u*C+h*P+m*F,c[3]=u*S+h*I+m*N,c[6]=u*_+h*D+m*z,c[1]=p*C+g*P+v*F,c[4]=p*S+g*I+v*N,c[7]=p*_+g*D+v*z,c[2]=x*C+b*P+E*F,c[5]=x*S+b*I+E*N,c[8]=x*_+b*D+E*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*h*p-r*c*g+r*h*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*u-h*p,x=h*m-g*c,b=p*c-u*m,E=n*v+r*x+o*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(o*p-g*r)*C,e[2]=(h*r-o*u)*C,e[3]=x*C,e[4]=(g*n-o*m)*C,e[5]=(o*c-h*n)*C,e[6]=b*C,e[7]=(r*m-p*n)*C,e[8]=(u*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(e,n){return ao("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yh.makeScale(e,n)),this}rotate(e){return ao("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yh.makeRotation(-e)),this}translate(e,n){return ao("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cm.prototype.isMatrix3=!0;let st=Cm;const yh=new st,Zv=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kv=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZA(){const a={enabled:!0,workingColorSpace:Nu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Bt&&(o.r=Na(o.r),o.g=Na(o.g),o.b=Na(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Bt&&(o.r=ro(o.r),o.g=ro(o.g),o.b=ro(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===vr?Uu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ao("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ao("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Nu]:{primaries:e,whitePoint:r,transfer:Uu,toXYZ:Zv,fromXYZ:Kv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:Zv,fromXYZ:Kv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),a}const St=ZA();function Na(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ro(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let zs;class KA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zs===void 0&&(zs=Ou("canvas")),zs.width=e.width,zs.height=e.height;const o=zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=zs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ou("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Na(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Na(n[r]/255)*255):n[r]=Na(n[r]);return{data:n,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QA=0;class Em{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=Rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Sh(o[u].image)):c.push(Sh(o[u]))}else c=Sh(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Sh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?KA.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let $A=0;const bh=new le;class Vn extends as{constructor(e=Vn.DEFAULT_IMAGE,n=Vn.DEFAULT_MAPPING,r=Ca,o=Ca,c=zn,u=$r,h=Fi,m=Ei,p=Vn.DEFAULT_ANISOTROPY,g=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$A++}),this.uuid=Rl(),this.name="",this.source=new Em(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){at(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){at(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pp:e.x=e.x-Math.floor(e.x);break;case Ca:e.x=e.x<0?0:1;break;case mp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pp:e.y=e.y-Math.floor(e.y);break;case Ca:e.y=e.y<0?0:1;break;case mp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=zy;Vn.DEFAULT_ANISOTROPY=1;const Dm=class Dm{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],b=m[5],E=m[9],C=m[2],S=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(E+S)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(p+1)/2,D=(b+1)/2,F=(_+1)/2,N=(g+x)/4,z=(v+C)/4,T=(E+S)/4;return I>D&&I>F?I<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(I),o=N/r,c=z/r):D>F?D<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(D),r=N/o,c=T/o):F<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),r=z/c,o=T/c),this.set(r,o,c,n),this}let P=Math.sqrt((S-E)*(S-E)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(v-C)/P,this.z=(x-g)/P,this.w=Math.acos((p+b+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this.w=bt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this.w=bt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dm.prototype.isVector4=!0;let cn=Dm;class JA extends as{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new cn(0,0,e,n),this.scissorTest=!1,this.viewport=new cn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new Vn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Em(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends JA{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class jy extends Vn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class e1 extends Vn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fu=class Fu{constructor(e,n,r,o,c,u,h,m,p,g,v,x,b,E,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,m,p,g,v,x,b,E,C,S)}set(e,n,r,o,c,u,h,m,p,g,v,x,b,E,C,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=c,_[5]=u,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=b,_[7]=E,_[11]=C,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fu().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Hs.setFromMatrixColumn(e,0).length(),c=1/Hs.setFromMatrixColumn(e,1).length(),u=1/Hs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=u*g,b=u*v,E=h*g,C=h*v;n[0]=m*g,n[4]=-m*v,n[8]=p,n[1]=b+E*p,n[5]=x-C*p,n[9]=-h*m,n[2]=C-x*p,n[6]=E+b*p,n[10]=u*m}else if(e.order==="YXZ"){const x=m*g,b=m*v,E=p*g,C=p*v;n[0]=x+C*h,n[4]=E*h-b,n[8]=u*p,n[1]=u*v,n[5]=u*g,n[9]=-h,n[2]=b*h-E,n[6]=C+x*h,n[10]=u*m}else if(e.order==="ZXY"){const x=m*g,b=m*v,E=p*g,C=p*v;n[0]=x-C*h,n[4]=-u*v,n[8]=E+b*h,n[1]=b+E*h,n[5]=u*g,n[9]=C-x*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(e.order==="ZYX"){const x=u*g,b=u*v,E=h*g,C=h*v;n[0]=m*g,n[4]=E*p-b,n[8]=x*p+C,n[1]=m*v,n[5]=C*p+x,n[9]=b*p-E,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(e.order==="YZX"){const x=u*m,b=u*p,E=h*m,C=h*p;n[0]=m*g,n[4]=C-x*v,n[8]=E*v+b,n[1]=v,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=b*v+E,n[10]=x-C*v}else if(e.order==="XZY"){const x=u*m,b=u*p,E=h*m,C=h*p;n[0]=m*g,n[4]=-v,n[8]=p*g,n[1]=x*v+C,n[5]=u*g,n[9]=b*v-E,n[2]=E*v-b,n[6]=h*g,n[10]=C*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t1,e,n1)}lookAt(e,n,r){const o=this.elements;return ui.subVectors(e,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),dr.crossVectors(r,ui),dr.lengthSq()===0&&(Math.abs(r.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),dr.crossVectors(r,ui)),dr.normalize(),qc.crossVectors(ui,dr),o[0]=dr.x,o[4]=qc.x,o[8]=ui.x,o[1]=dr.y,o[5]=qc.y,o[9]=ui.y,o[2]=dr.z,o[6]=qc.z,o[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],b=r[13],E=r[2],C=r[6],S=r[10],_=r[14],P=r[3],I=r[7],D=r[11],F=r[15],N=o[0],z=o[4],T=o[8],O=o[12],j=o[1],k=o[5],K=o[9],fe=o[13],pe=o[2],$=o[6],B=o[10],G=o[14],J=o[3],xe=o[7],Te=o[11],L=o[15];return c[0]=u*N+h*j+m*pe+p*J,c[4]=u*z+h*k+m*$+p*xe,c[8]=u*T+h*K+m*B+p*Te,c[12]=u*O+h*fe+m*G+p*L,c[1]=g*N+v*j+x*pe+b*J,c[5]=g*z+v*k+x*$+b*xe,c[9]=g*T+v*K+x*B+b*Te,c[13]=g*O+v*fe+x*G+b*L,c[2]=E*N+C*j+S*pe+_*J,c[6]=E*z+C*k+S*$+_*xe,c[10]=E*T+C*K+S*B+_*Te,c[14]=E*O+C*fe+S*G+_*L,c[3]=P*N+I*j+D*pe+F*J,c[7]=P*z+I*k+D*$+F*xe,c[11]=P*T+I*K+D*B+F*Te,c[15]=P*O+I*fe+D*G+F*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],b=e[14],E=e[3],C=e[7],S=e[11],_=e[15],P=m*b-p*x,I=h*b-p*v,D=h*x-m*v,F=u*b-p*g,N=u*x-m*g,z=u*v-h*g;return n*(C*P-S*I+_*D)-r*(E*P-S*F+_*N)+o*(E*I-C*F+_*z)-c*(E*D-C*N+S*z)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],p=e[6],g=e[10];return n*(u*g-h*p)-r*(c*g-h*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],b=e[11],E=e[12],C=e[13],S=e[14],_=e[15],P=n*h-r*u,I=n*m-o*u,D=n*p-c*u,F=r*m-o*h,N=r*p-c*h,z=o*p-c*m,T=g*C-v*E,O=g*S-x*E,j=g*_-b*E,k=v*S-x*C,K=v*_-b*C,fe=x*_-b*S,pe=P*fe-I*K+D*k+F*j-N*O+z*T;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/pe;return e[0]=(h*fe-m*K+p*k)*$,e[1]=(o*K-r*fe-c*k)*$,e[2]=(C*z-S*N+_*F)*$,e[3]=(x*N-v*z-b*F)*$,e[4]=(m*j-u*fe-p*O)*$,e[5]=(n*fe-o*j+c*O)*$,e[6]=(S*D-E*z-_*I)*$,e[7]=(g*z-x*D+b*I)*$,e[8]=(u*K-h*j+p*T)*$,e[9]=(r*j-n*K-c*T)*$,e[10]=(E*N-C*D+_*P)*$,e[11]=(v*D-g*N-b*P)*$,e[12]=(h*O-u*k-m*T)*$,e[13]=(n*k-r*O+o*T)*$,e[14]=(C*I-E*F-S*P)*$,e[15]=(g*F-v*I+x*P)*$,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,h=e.y,m=e.z,p=c*u,g=c*h;return this.set(p*u+r,p*h-o*m,p*m+o*h,0,p*h+o*m,g*h+r,g*m-o*u,0,p*m-o*h,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,g=u+u,v=h+h,x=c*p,b=c*g,E=c*v,C=u*g,S=u*v,_=h*v,P=m*p,I=m*g,D=m*v,F=r.x,N=r.y,z=r.z;return o[0]=(1-(C+_))*F,o[1]=(b+D)*F,o[2]=(E-I)*F,o[3]=0,o[4]=(b-D)*N,o[5]=(1-(x+_))*N,o[6]=(S+P)*N,o[7]=0,o[8]=(E+I)*z,o[9]=(S-P)*z,o[10]=(1-(x+C))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let u=Hs.set(o[0],o[1],o[2]).length();const h=Hs.set(o[4],o[5],o[6]).length(),m=Hs.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Ui.copy(this);const p=1/u,g=1/h,v=1/m;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=v,Ui.elements[9]*=v,Ui.elements[10]*=v,n.setFromRotationMatrix(Ui),r.x=u,r.y=h,r.z=m,this}makePerspective(e,n,r,o,c,u,h=Ki,m=!1){const p=this.elements,g=2*c/(n-e),v=2*c/(r-o),x=(n+e)/(n-e),b=(r+o)/(r-o);let E,C;if(m)E=c/(u-c),C=u*c/(u-c);else if(h===Ki)E=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(h===Lu)E=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,h=Ki,m=!1){const p=this.elements,g=2/(n-e),v=2/(r-o),x=-(n+e)/(n-e),b=-(r+o)/(r-o);let E,C;if(m)E=1/(u-c),C=u/(u-c);else if(h===Ki)E=-2/(u-c),C=-(u+c)/(u-c);else if(h===Lu)E=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Fu.prototype.isMatrix4=!0;let pn=Fu;const Hs=new le,Ui=new pn,t1=new le(0,0,0),n1=new le(1,1,1),dr=new le,qc=new le,ui=new le,Qv=new pn,$v=new ho;class is{constructor(e=0,n=0,r=0,o=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],g=o[9],v=o[2],x=o[6],b=o[10];switch(n){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Qv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $v.setFromEuler(this),this.setFromQuaternion($v,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class Zy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i1=0;const Jv=new le,Gs=new ho,Ma=new pn,Yc=new le,fl=new le,a1=new le,r1=new ho,e_=new le(1,0,0),t_=new le(0,1,0),n_=new le(0,0,1),i_={type:"added"},s1={type:"removed"},Vs={type:"childadded",child:null},Mh={type:"childremoved",child:null};class $n extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=Rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new le,n=new is,r=new ho,o=new le(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new st}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(e_,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(n_,e)}translateOnAxis(e,n){return Jv.copy(e).applyQuaternion(this.quaternion),this.position.add(Jv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(e_,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(n_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Yc.copy(e):Yc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(fl,Yc,this.up):Ma.lookAt(Yc,fl,this.up),this.quaternion.setFromRotationMatrix(Ma),o&&(Ma.extractRotation(o.matrixWorld),Gs.setFromRotationMatrix(Ma),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i_),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(s1),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i_),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,e,a1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,r1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(n){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),v=u(e.shapes),x=u(e.skeletons),b=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),b.length>0&&(r.animations=b),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}$n.DEFAULT_UP=new le(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vl extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o1={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const S=n.getJointPose(C,r),_=this._getHandJoint(p,C);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),b=.02,E=.005;p.inputState.pinching&&x>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(o1)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new vl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Ky={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},jc={h:0,s:0,l:0};function Th(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Mt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=St.workingColorSpace){return this.r=e,this.g=n,this.b=r,St.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=St.workingColorSpace){if(e=jA(e,1),n=bt(n,0,1),r=bt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Th(u,c,e+1/3),this.g=Th(u,c,e),this.b=Th(u,c,e-1/3)}return St.colorSpaceToWorking(this,o),this}setStyle(e,n=di){function r(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=di){const r=Ky[e.toLowerCase()];return r!==void 0?this.setHex(r,n):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return St.workingToColorSpace(Bn.copy(this),e),Math.round(bt(Bn.r*255,0,255))*65536+Math.round(bt(Bn.g*255,0,255))*256+Math.round(bt(Bn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.workingToColorSpace(Bn.copy(this),n);const r=Bn.r,o=Bn.g,c=Bn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,p;const g=(h+u)/2;if(h===u)m=0,p=0;else{const v=u-h;switch(p=g<=.5?v/(u+h):v/(2-u-h),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=St.workingColorSpace){return St.workingToColorSpace(Bn.copy(this),n),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=di){St.workingToColorSpace(Bn.copy(this),e);const n=Bn.r,r=Bn.g,o=Bn.b;return e!==di?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(jc);const r=vh(hr.h,jc.h,n),o=vh(hr.s,jc.s,n),c=vh(hr.l,jc.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Mt;Mt.NAMES=Ky;class l1 extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Li=new le,Ea=new le,Ah=new le,Ta=new le,ks=new le,Ws=new le,a_=new le,Rh=new le,wh=new le,Ch=new le,Dh=new cn,Nh=new cn,Uh=new cn;class Pi{constructor(e=new le,n=new le,r=new le){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Li.subVectors(e,n),o.cross(Li);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Li.subVectors(o,n),Ea.subVectors(r,n),Ah.subVectors(e,n);const u=Li.dot(Li),h=Li.dot(Ea),m=Li.dot(Ah),p=Ea.dot(Ea),g=Ea.dot(Ah),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,b=(p*m-h*g)*x,E=(u*g-h*m)*x;return c.set(1-b-E,E,b)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(e,n,r,o,c,u,h,m){return this.getBarycoord(e,n,r,o,Ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ta.x),m.addScaledVector(u,Ta.y),m.addScaledVector(h,Ta.z),m)}static getInterpolatedAttribute(e,n,r,o,c,u){return Dh.setScalar(0),Nh.setScalar(0),Uh.setScalar(0),Dh.fromBufferAttribute(e,n),Nh.fromBufferAttribute(e,r),Uh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Dh,c.x),u.addScaledVector(Nh,c.y),u.addScaledVector(Uh,c.z),u}static isFrontFacing(e,n,r,o){return Li.subVectors(r,n),Ea.subVectors(e,n),Li.cross(Ea).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Li.cross(Ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Pi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,h;ks.subVectors(o,r),Ws.subVectors(c,r),Rh.subVectors(e,r);const m=ks.dot(Rh),p=Ws.dot(Rh);if(m<=0&&p<=0)return n.copy(r);wh.subVectors(e,o);const g=ks.dot(wh),v=Ws.dot(wh);if(g>=0&&v<=g)return n.copy(o);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(r).addScaledVector(ks,u);Ch.subVectors(e,c);const b=ks.dot(Ch),E=Ws.dot(Ch);if(E>=0&&b<=E)return n.copy(c);const C=b*p-m*E;if(C<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(r).addScaledVector(Ws,h);const S=g*E-b*v;if(S<=0&&v-g>=0&&b-E>=0)return a_.subVectors(c,o),h=(v-g)/(v-g+(b-E)),n.copy(o).addScaledVector(a_,h);const _=1/(S+C+x);return u=C*_,h=x*_,n.copy(r).addScaledVector(ks,u).addScaledVector(Ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wl{constructor(e=new le(1/0,1/0,1/0),n=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Oi):Oi.fromBufferAttribute(c,u),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zc.copy(r.boundingBox)),Zc.applyMatrix4(e.matrixWorld),this.union(Zc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dl),Kc.subVectors(this.max,dl),Xs.subVectors(e.a,dl),qs.subVectors(e.b,dl),Ys.subVectors(e.c,dl),pr.subVectors(qs,Xs),mr.subVectors(Ys,qs),Wr.subVectors(Xs,Ys);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Wr.z,Wr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Wr.z,0,-Wr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Wr.y,Wr.x,0];return!Lh(n,Xs,qs,Ys,Kc)||(n=[1,0,0,0,1,0,0,0,1],!Lh(n,Xs,qs,Ys,Kc))?!1:(Qc.crossVectors(pr,mr),n=[Qc.x,Qc.y,Qc.z],Lh(n,Xs,qs,Ys,Kc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Aa=[new le,new le,new le,new le,new le,new le,new le,new le],Oi=new le,Zc=new wl,Xs=new le,qs=new le,Ys=new le,pr=new le,mr=new le,Wr=new le,dl=new le,Kc=new le,Qc=new le,Xr=new le;function Lh(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Xr.fromArray(a,c);const h=o.x*Math.abs(Xr.x)+o.y*Math.abs(Xr.y)+o.z*Math.abs(Xr.z),m=e.dot(Xr),p=n.dot(Xr),g=r.dot(Xr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const Sn=new le,$c=new Dt;let c1=0;class wn extends as{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Wv,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)$c.fromBufferAttribute(this,n),$c.applyMatrix3(e),this.setXY(n,$c.x,$c.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ul(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ul(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ul(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ul(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ul(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),r=Kn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),r=Kn(r,this.array),o=Kn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),r=Kn(r,this.array),o=Kn(o,this.array),c=Kn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Qy extends wn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class $y extends wn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ua extends wn{constructor(e,n,r){super(new Float32Array(e),n,r)}}const u1=new wl,hl=new le,Oh=new le;class Wu{constructor(e=new le,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):u1.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hl.subVectors(e,this.center);const n=hl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(hl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hl.copy(e.center).add(Oh)),this.expandByPoint(hl.copy(e.center).sub(Oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let f1=0;const Si=new pn,Ph=new $n,js=new le,fi=new wl,pl=new wl,Rn=new le;class Ti extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=Rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(WA(e)?$y:Qy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,n,r){return Si.makeTranslation(e,n,r),this.applyMatrix4(Si),this}scale(e,n,r){return Si.makeScale(e,n,r),this.applyMatrix4(Si),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ua(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];pl.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(fi.min,pl.min),fi.expandByPoint(Rn),Rn.addVectors(fi.max,pl.max),fi.expandByPoint(Rn)):(fi.expandByPoint(pl.min),fi.expandByPoint(pl.max))}fi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Rn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Rn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Rn.fromBufferAttribute(h,p),m&&(js.fromBufferAttribute(e,p),Rn.add(js)),o=Math.max(o,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new wn(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new le,m[T]=new le;const p=new le,g=new le,v=new le,x=new Dt,b=new Dt,E=new Dt,C=new le,S=new le;function _(T,O,j){p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,O),v.fromBufferAttribute(r,j),x.fromBufferAttribute(c,T),b.fromBufferAttribute(c,O),E.fromBufferAttribute(c,j),g.sub(p),v.sub(p),b.sub(x),E.sub(x);const k=1/(b.x*E.y-E.x*b.y);isFinite(k)&&(C.copy(g).multiplyScalar(E.y).addScaledVector(v,-b.y).multiplyScalar(k),S.copy(v).multiplyScalar(b.x).addScaledVector(g,-E.x).multiplyScalar(k),h[T].add(C),h[O].add(C),h[j].add(C),m[T].add(S),m[O].add(S),m[j].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,O=P.length;T<O;++T){const j=P[T],k=j.start,K=j.count;for(let fe=k,pe=k+K;fe<pe;fe+=3)_(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const I=new le,D=new le,F=new le,N=new le;function z(T){F.fromBufferAttribute(o,T),N.copy(F);const O=h[T];I.copy(O),I.sub(F.multiplyScalar(F.dot(O))).normalize(),D.crossVectors(N,O);const k=D.dot(m[T])<0?-1:1;u.setXYZW(T,I.x,I.y,I.z,k)}for(let T=0,O=P.length;T<O;++T){const j=P[T],k=j.start,K=j.count;for(let fe=k,pe=k+K;fe<pe;fe+=3)z(e.getX(fe+0)),z(e.getX(fe+1)),z(e.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new wn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,b=r.count;x<b;x++)r.setXYZ(x,0,0,0);const o=new le,c=new le,u=new le,h=new le,m=new le,p=new le,g=new le,v=new le;if(e)for(let x=0,b=e.count;x<b;x+=3){const E=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,b=n.count;x<b;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Rn.fromBufferAttribute(e,n),Rn.normalize(),e.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let b=0,E=0;for(let C=0,S=m.length;C<S;C++){h.isInterleavedBufferAttribute?b=m[C]*h.data.stride+h.offset:b=m[C]*g;for(let _=0;_<g;_++)x[E++]=p[b++]}return new wn(x,g,v)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ti,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,r);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],b=e(x,r);m.push(b)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const b=p[v];g.push(b.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,b=v.length;x<b;x++)g.push(v[x].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let d1=0;class Cl extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Rl(),this.name="",this.type="Material",this.blending=io,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rp,this.blendDst=sp,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){at(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){at(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rp&&(r.blendSrc=this.blendSrc),this.blendDst!==sp&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Dt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ra=new le,Ih=new le,Jc=new le,gr=new le,Fh=new le,eu=new le,Bh=new le;class Jy{constructor(e=new le,n=new le(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ra)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ra.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ra.copy(this.origin).addScaledVector(this.direction,n),Ra.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Ih.copy(e).add(n).multiplyScalar(.5),Jc.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(Ih);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Jc),h=gr.dot(this.direction),m=-gr.dot(Jc),p=gr.lengthSq(),g=Math.abs(1-u*u);let v,x,b,E;if(g>0)if(v=u*m-h,x=u*h-m,E=c*g,v>=0)if(x>=-E)if(x<=E){const C=1/g;v*=C,x*=C,b=v*(v+u*x+2*h)+x*(u*v+x+2*m)+p}else x=c,v=Math.max(0,-(u*x+h)),b=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(u*x+h)),b=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-u*c+h)),x=v>0?-c:Math.min(Math.max(-c,-m),c),b=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-c,-m),c),b=x*(x+2*m)+p):(v=Math.max(0,-(u*c+h)),x=v>0?c:Math.min(Math.max(-c,-m),c),b=-v*v+x*(x+2*m)+p);else x=u>0?-c:c,v=Math.max(0,-(u*x+h)),b=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Ih).addScaledVector(Jc,x),b}intersectSphere(e,n){Ra.subVectors(e.center,this.origin);const r=Ra.dot(this.direction),o=Ra.dot(Ra)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,u=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,u=(e.min.y-x.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(h=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ra)!==null}intersectTriangle(e,n,r,o,c){Fh.subVectors(n,e),eu.subVectors(r,e),Bh.crossVectors(Fh,eu);let u=this.direction.dot(Bh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;gr.subVectors(this.origin,e);const m=h*this.direction.dot(eu.crossVectors(gr,eu));if(m<0)return null;const p=h*this.direction.dot(Fh.cross(gr));if(p<0||m+p>u)return null;const g=-h*gr.dot(Bh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class eS extends Cl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=Ny,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const r_=new pn,qr=new Jy,tu=new Wu,s_=new le,nu=new le,iu=new le,au=new le,zh=new le,ru=new le,o_=new le,su=new le;class Ia extends $n{constructor(e=new Ti,n=new eS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){ru.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(zh.fromBufferAttribute(v,e),u?ru.addScaledVector(zh,g):ru.addScaledVector(zh.sub(n),g))}n.add(ru)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tu.copy(r.boundingSphere),tu.applyMatrix4(c),qr.copy(e.ray).recast(e.near),!(tu.containsPoint(qr.origin)===!1&&(qr.intersectSphere(tu,s_)===null||qr.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(r_.copy(c).invert(),qr.copy(e.ray).applyMatrix4(r_),!(r.boundingBox!==null&&qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,C=x.length;E<C;E++){const S=x[E],_=u[S.materialIndex],P=Math.max(S.start,b.start),I=Math.min(h.count,Math.min(S.start+S.count,b.start+b.count));for(let D=P,F=I;D<F;D+=3){const N=h.getX(D),z=h.getX(D+1),T=h.getX(D+2);o=ou(this,_,e,r,p,g,v,N,z,T),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,b.start),C=Math.min(h.count,b.start+b.count);for(let S=E,_=C;S<_;S+=3){const P=h.getX(S),I=h.getX(S+1),D=h.getX(S+2);o=ou(this,u,e,r,p,g,v,P,I,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,C=x.length;E<C;E++){const S=x[E],_=u[S.materialIndex],P=Math.max(S.start,b.start),I=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let D=P,F=I;D<F;D+=3){const N=D,z=D+1,T=D+2;o=ou(this,_,e,r,p,g,v,N,z,T),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let S=E,_=C;S<_;S+=3){const P=S,I=S+1,D=S+2;o=ou(this,u,e,r,p,g,v,P,I,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function h1(a,e,n,r,o,c,u,h){let m;if(e.side===Qn?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===br,h),m===null)return null;su.copy(h),su.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(su);return p<n.near||p>n.far?null:{distance:p,point:su.clone(),object:a}}function ou(a,e,n,r,o,c,u,h,m,p){a.getVertexPosition(h,nu),a.getVertexPosition(m,iu),a.getVertexPosition(p,au);const g=h1(a,e,n,r,nu,iu,au,o_);if(g){const v=new le;Pi.getBarycoord(o_,nu,iu,au,v),o&&(g.uv=Pi.getInterpolatedAttribute(o,h,m,p,v,new Dt)),c&&(g.uv1=Pi.getInterpolatedAttribute(c,h,m,p,v,new Dt)),u&&(g.normal=Pi.getInterpolatedAttribute(u,h,m,p,v,new le),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new le,materialIndex:0};Pi.getNormal(nu,iu,au,x.normal),g.face=x,g.barycoord=v}return g}class p1 extends Vn{constructor(e=null,n=1,r=1,o,c,u,h,m,p=On,g=On,v,x){super(null,u,h,m,p,g,o,c,v,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hh=new le,m1=new le,g1=new st;class jr{constructor(e=new le(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Hh.subVectors(r,n).cross(m1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(Hh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||g1.getNormalMatrix(e),o=this.coplanarPoint(Hh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Wu,x1=new Dt(.5,.5),lu=new le;class tS{constructor(e=new jr,n=new jr,r=new jr,o=new jr,c=new jr,u=new jr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ki,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],g=c[4],v=c[5],x=c[6],b=c[7],E=c[8],C=c[9],S=c[10],_=c[11],P=c[12],I=c[13],D=c[14],F=c[15];if(o[0].setComponents(p-u,b-g,_-E,F-P).normalize(),o[1].setComponents(p+u,b+g,_+E,F+P).normalize(),o[2].setComponents(p+h,b+v,_+C,F+I).normalize(),o[3].setComponents(p-h,b-v,_-C,F-I).normalize(),r)o[4].setComponents(m,x,S,D).normalize(),o[5].setComponents(p-m,b-x,_-S,F-D).normalize();else if(o[4].setComponents(p-m,b-x,_-S,F-D).normalize(),n===Ki)o[5].setComponents(p+m,b+x,_+S,F+D).normalize();else if(n===Lu)o[5].setComponents(m,x,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=x1.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(lu.x=o.normal.x>0?e.max.x:e.min.x,lu.y=o.normal.y>0?e.max.y:e.min.y,lu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(lu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nS extends Cl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const l_=new pn,Yp=new Jy,cu=new Wu,uu=new le;class c_ extends $n{constructor(e=new Ti,n=new nS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),cu.copy(r.boundingSphere),cu.applyMatrix4(o),cu.radius+=c,e.ray.intersectsSphere(cu)===!1)return;l_.copy(o).invert(),Yp.copy(e.ray).applyMatrix4(l_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,u.start),b=Math.min(p.count,u.start+u.count);for(let E=x,C=b;E<C;E++){const S=p.getX(E);uu.fromBufferAttribute(v,S),u_(uu,S,m,o,e,n,this)}}else{const x=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let E=x,C=b;E<C;E++)uu.fromBufferAttribute(v,E),u_(uu,E,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function u_(a,e,n,r,o,c,u){const h=Yp.distanceSqToPoint(a);if(h<n){const m=new le;Yp.closestPointToPoint(a,m),m.applyMatrix4(r);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class iS extends Vn{constructor(e=[],n=ts,r,o,c,u,h,m,p,g){super(e,n,r,o,c,u,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lo extends Vn{constructor(e,n,r=ea,o,c,u,h=On,m=On,p,g=Pa,v=1){if(g!==Pa&&g!==Jr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:v};super(x,o,c,u,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Em(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class v1 extends lo{constructor(e,n=ea,r=ts,o,c,u=On,h=On,m,p=Pa){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,n,r,o,c,u,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class aS extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Dl extends Ti{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],v=[];let x=0,b=0;E("z","y","x",-1,-1,r,n,e,u,c,0),E("z","y","x",1,-1,r,n,-e,u,c,1),E("x","z","y",1,1,e,r,n,o,u,2),E("x","z","y",1,-1,e,r,-n,o,u,3),E("x","y","z",1,-1,e,n,r,o,c,4),E("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Ua(p,3)),this.setAttribute("normal",new Ua(g,3)),this.setAttribute("uv",new Ua(v,2));function E(C,S,_,P,I,D,F,N,z,T,O){const j=D/z,k=F/T,K=D/2,fe=F/2,pe=N/2,$=z+1,B=T+1;let G=0,J=0;const xe=new le;for(let Te=0;Te<B;Te++){const L=Te*k-fe;for(let V=0;V<$;V++){const _e=V*j-K;xe[C]=_e*P,xe[S]=L*I,xe[_]=pe,p.push(xe.x,xe.y,xe.z),xe[C]=0,xe[S]=0,xe[_]=N>0?1:-1,g.push(xe.x,xe.y,xe.z),v.push(V/z),v.push(1-Te/T),G+=1}}for(let Te=0;Te<T;Te++)for(let L=0;L<z;L++){const V=x+L+$*Te,_e=x+L+$*(Te+1),Ae=x+(L+1)+$*(Te+1),Ne=x+(L+1)+$*Te;m.push(V,_e,Ne),m.push(_e,Ae,Ne),J+=6}h.addGroup(b,J,O),b+=J,x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xu extends Ti{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(r),m=Math.floor(o),p=h+1,g=m+1,v=e/h,x=n/m,b=[],E=[],C=[],S=[];for(let _=0;_<g;_++){const P=_*x-u;for(let I=0;I<p;I++){const D=I*v-c;E.push(D,-P,0),C.push(0,0,1),S.push(I/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<h;P++){const I=P+p*_,D=P+p*(_+1),F=P+1+p*(_+1),N=P+1+p*_;b.push(I,D,N),b.push(D,F,N)}this.setIndex(b),this.setAttribute("position",new Ua(E,3)),this.setAttribute("normal",new Ua(C,3)),this.setAttribute("uv",new Ua(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xu(e.width,e.height,e.widthSegments,e.heightSegments)}}function co(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(f_(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(f_(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Gn(a){const e={};for(let n=0;n<a.length;n++){const r=co(a[n]);for(const o in r)e[o]=r[o]}return e}function f_(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function _1(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function rS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const y1={clone:co,merge:Gn};var S1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Cl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S1,this.fragmentShader=b1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=_1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Mt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Dt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new le().fromArray(o.value);break;case"v4":this.uniforms[r].value=new cn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new st().fromArray(o.value);break;case"m4":this.uniforms[r].value=new pn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class M1 extends zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class E1 extends Cl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class T1 extends Cl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fu=new le,du=new ho,qi=new le;class sS extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fu,du,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fu,du,qi.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(fu,du,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fu,du,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new le,d_=new Dt,h_=new Dt;class Mi extends sS{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qp*2*Math.atan(Math.tan(xh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,d_,h_),n.subVectors(h_,d_)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class oS extends sS{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zs=-90,Ks=1;class A1 extends $n{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Mi(Zs,Ks,e,n);o.layers=this.layers,this.add(o);const c=new Mi(Zs,Ks,e,n);c.layers=this.layers,this.add(c);const u=new Mi(Zs,Ks,e,n);u.layers=this.layers,this.add(u);const h=new Mi(Zs,Ks,e,n);h.layers=this.layers,this.add(h);const m=new Mi(Zs,Ks,e,n);m.layers=this.layers,this.add(m);const p=new Mi(Zs,Ks,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Lu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(v,x,b),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class R1 extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Nm=class Nm{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};Nm.prototype.isMatrix2=!0;let p_=Nm;function m_(a,e,n,r){const o=w1(r);switch(n){case Wy:return a*e;case qy:return a*e/o.components*o.byteLength;case _m:return a*e/o.components*o.byteLength;case ns:return a*e*2/o.components*o.byteLength;case ym:return a*e*2/o.components*o.byteLength;case Xy:return a*e*3/o.components*o.byteLength;case Fi:return a*e*4/o.components*o.byteLength;case Sm:return a*e*4/o.components*o.byteLength;case yu:case Su:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case bu:case Mu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case xp:case _p:return Math.max(a,16)*Math.max(e,8)/4;case gp:case vp:return Math.max(a,8)*Math.max(e,8)/2;case yp:case Sp:case Mp:case Ep:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case bp:case Cu:case Tp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case wp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Np:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Up:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Op:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Ip:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Fp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case zp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Hp:case Gp:case Vp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case kp:case Wp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Du:case Xp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function w1(a){switch(a){case Ei:case Hy:return{byteLength:1,components:1};case Sl:case Gy:case Oa:return{byteLength:2,components:1};case xm:case vm:return{byteLength:2,components:4};case ea:case gm:case Zi:return{byteLength:4,components:1};case Vy:case ky:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mm}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lS(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function C1(a){const e=new WeakMap;function n(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=a.createBuffer();a.bindBuffer(m,x),a.bufferData(m,p,g),h.onUploadCallback();let b;if(p instanceof Float32Array)b=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=a.HALF_FLOAT:b=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=a.SHORT;else if(p instanceof Uint32Array)b=a.UNSIGNED_INT;else if(p instanceof Int32Array)b=a.INT;else if(p instanceof Int8Array)b=a.BYTE;else if(p instanceof Uint8Array)b=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,g);else{v.sort((b,E)=>b.start-E.start);let x=0;for(let b=1;b<v.length;b++){const E=v[x],C=v[b];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++x,v[x]=C)}v.length=x+1;for(let b=0,E=v.length;b<E;b++){const C=v[b];a.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var D1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,U1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,W1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,J1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,nR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sR="gl_FragColor = linearToOutputTexel( gl_FragColor );",oR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_R=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,MR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ER=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UR=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,LR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$R=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,JR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ew=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_w=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ew=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ww=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$w=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:D1,alphahash_pars_fragment:N1,alphamap_fragment:U1,alphamap_pars_fragment:L1,alphatest_fragment:O1,alphatest_pars_fragment:P1,aomap_fragment:I1,aomap_pars_fragment:F1,batching_pars_vertex:B1,batching_vertex:z1,begin_vertex:H1,beginnormal_vertex:G1,bsdfs:V1,iridescence_fragment:k1,bumpmap_pars_fragment:W1,clipping_planes_fragment:X1,clipping_planes_pars_fragment:q1,clipping_planes_pars_vertex:Y1,clipping_planes_vertex:j1,color_fragment:Z1,color_pars_fragment:K1,color_pars_vertex:Q1,color_vertex:$1,common:J1,cube_uv_reflection_fragment:eR,defaultnormal_vertex:tR,displacementmap_pars_vertex:nR,displacementmap_vertex:iR,emissivemap_fragment:aR,emissivemap_pars_fragment:rR,colorspace_fragment:sR,colorspace_pars_fragment:oR,envmap_fragment:lR,envmap_common_pars_fragment:cR,envmap_pars_fragment:uR,envmap_pars_vertex:fR,envmap_physical_pars_fragment:bR,envmap_vertex:dR,fog_vertex:hR,fog_pars_vertex:pR,fog_fragment:mR,fog_pars_fragment:gR,gradientmap_pars_fragment:xR,lightmap_pars_fragment:vR,lights_lambert_fragment:_R,lights_lambert_pars_fragment:yR,lights_pars_begin:SR,lights_toon_fragment:MR,lights_toon_pars_fragment:ER,lights_phong_fragment:TR,lights_phong_pars_fragment:AR,lights_physical_fragment:RR,lights_physical_pars_fragment:wR,lights_fragment_begin:CR,lights_fragment_maps:DR,lights_fragment_end:NR,lightprobes_pars_fragment:UR,logdepthbuf_fragment:LR,logdepthbuf_pars_fragment:OR,logdepthbuf_pars_vertex:PR,logdepthbuf_vertex:IR,map_fragment:FR,map_pars_fragment:BR,map_particle_fragment:zR,map_particle_pars_fragment:HR,metalnessmap_fragment:GR,metalnessmap_pars_fragment:VR,morphinstance_vertex:kR,morphcolor_vertex:WR,morphnormal_vertex:XR,morphtarget_pars_vertex:qR,morphtarget_vertex:YR,normal_fragment_begin:jR,normal_fragment_maps:ZR,normal_pars_fragment:KR,normal_pars_vertex:QR,normal_vertex:$R,normalmap_pars_fragment:JR,clearcoat_normal_fragment_begin:ew,clearcoat_normal_fragment_maps:tw,clearcoat_pars_fragment:nw,iridescence_pars_fragment:iw,opaque_fragment:aw,packing:rw,premultiplied_alpha_fragment:sw,project_vertex:ow,dithering_fragment:lw,dithering_pars_fragment:cw,roughnessmap_fragment:uw,roughnessmap_pars_fragment:fw,shadowmap_pars_fragment:dw,shadowmap_pars_vertex:hw,shadowmap_vertex:pw,shadowmask_pars_fragment:mw,skinbase_vertex:gw,skinning_pars_vertex:xw,skinning_vertex:vw,skinnormal_vertex:_w,specularmap_fragment:yw,specularmap_pars_fragment:Sw,tonemapping_fragment:bw,tonemapping_pars_fragment:Mw,transmission_fragment:Ew,transmission_pars_fragment:Tw,uv_pars_fragment:Aw,uv_pars_vertex:Rw,uv_vertex:ww,worldpos_vertex:Cw,background_vert:Dw,background_frag:Nw,backgroundCube_vert:Uw,backgroundCube_frag:Lw,cube_vert:Ow,cube_frag:Pw,depth_vert:Iw,depth_frag:Fw,distance_vert:Bw,distance_frag:zw,equirect_vert:Hw,equirect_frag:Gw,linedashed_vert:Vw,linedashed_frag:kw,meshbasic_vert:Ww,meshbasic_frag:Xw,meshlambert_vert:qw,meshlambert_frag:Yw,meshmatcap_vert:jw,meshmatcap_frag:Zw,meshnormal_vert:Kw,meshnormal_frag:Qw,meshphong_vert:$w,meshphong_frag:Jw,meshphysical_vert:eC,meshphysical_frag:tC,meshtoon_vert:nC,meshtoon_frag:iC,points_vert:aC,points_frag:rC,shadow_vert:sC,shadow_frag:oC,sprite_vert:lC,sprite_frag:cC},Fe={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ji={basic:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Gn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Gn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Gn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Gn([Fe.points,Fe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Gn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Gn([Fe.common,Fe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Gn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Gn([Fe.sprite,Fe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Gn([Fe.common,Fe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Gn([Fe.lights,Fe.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};ji.physical={uniforms:Gn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const hu={r:0,b:0,g:0},uC=new pn,cS=new st;cS.set(-1,0,0,0,1,0,0,0,1);function fC(a,e,n,r,o,c){const u=new Mt(0);let h=o===!0?0:1,m,p,g=null,v=0,x=null;function b(P){let I=P.isScene===!0?P.background:null;if(I&&I.isTexture){const D=P.backgroundBlurriness>0;I=e.get(I,D)}return I}function E(P){let I=!1;const D=b(P);D===null?S(u,h):D&&D.isColor&&(S(D,1),I=!0);const F=a.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function C(P,I){const D=b(I);D&&(D.isCubeTexture||D.mapping===ku)?(p===void 0&&(p=new Ia(new Dl(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:co(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=D,p.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(uC.makeRotationFromEuler(I.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(cS),p.material.toneMapped=St.getTransfer(D.colorSpace)!==Bt,(g!==D||v!==D.version||x!==a.toneMapping)&&(p.material.needsUpdate=!0,g=D,v=D.version,x=a.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Ia(new Xu(2,2),new zi({name:"BackgroundMaterial",uniforms:co(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=St.getTransfer(D.colorSpace)!==Bt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||v!==D.version||x!==a.toneMapping)&&(m.material.needsUpdate=!0,g=D,v=D.version,x=a.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function S(P,I){P.getRGB(hu,rS(a)),n.buffers.color.setClear(hu.r,hu.g,hu.b,I,c)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,I=1){u.set(P),h=I,S(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,S(u,h)},render:E,addToRenderList:C,dispose:_}}function dC(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,u=!1;function h(k,K,fe,pe,$){let B=!1;const G=v(k,pe,fe,K);c!==G&&(c=G,p(c.object)),B=b(k,pe,fe,$),B&&E(k,pe,fe,$),$!==null&&e.update($,a.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,D(k,K,fe,pe),$!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function m(){return a.createVertexArray()}function p(k){return a.bindVertexArray(k)}function g(k){return a.deleteVertexArray(k)}function v(k,K,fe,pe){const $=pe.wireframe===!0;let B=r[K.id];B===void 0&&(B={},r[K.id]=B);const G=k.isInstancedMesh===!0?k.id:0;let J=B[G];J===void 0&&(J={},B[G]=J);let xe=J[fe.id];xe===void 0&&(xe={},J[fe.id]=xe);let Te=xe[$];return Te===void 0&&(Te=x(m()),xe[$]=Te),Te}function x(k){const K=[],fe=[],pe=[];for(let $=0;$<n;$++)K[$]=0,fe[$]=0,pe[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:fe,attributeDivisors:pe,object:k,attributes:{},index:null}}function b(k,K,fe,pe){const $=c.attributes,B=K.attributes;let G=0;const J=fe.getAttributes();for(const xe in J)if(J[xe].location>=0){const L=$[xe];let V=B[xe];if(V===void 0&&(xe==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),xe==="instanceColor"&&k.instanceColor&&(V=k.instanceColor)),L===void 0||L.attribute!==V||V&&L.data!==V.data)return!0;G++}return c.attributesNum!==G||c.index!==pe}function E(k,K,fe,pe){const $={},B=K.attributes;let G=0;const J=fe.getAttributes();for(const xe in J)if(J[xe].location>=0){let L=B[xe];L===void 0&&(xe==="instanceMatrix"&&k.instanceMatrix&&(L=k.instanceMatrix),xe==="instanceColor"&&k.instanceColor&&(L=k.instanceColor));const V={};V.attribute=L,L&&L.data&&(V.data=L.data),$[xe]=V,G++}c.attributes=$,c.attributesNum=G,c.index=pe}function C(){const k=c.newAttributes;for(let K=0,fe=k.length;K<fe;K++)k[K]=0}function S(k){_(k,0)}function _(k,K){const fe=c.newAttributes,pe=c.enabledAttributes,$=c.attributeDivisors;fe[k]=1,pe[k]===0&&(a.enableVertexAttribArray(k),pe[k]=1),$[k]!==K&&(a.vertexAttribDivisor(k,K),$[k]=K)}function P(){const k=c.newAttributes,K=c.enabledAttributes;for(let fe=0,pe=K.length;fe<pe;fe++)K[fe]!==k[fe]&&(a.disableVertexAttribArray(fe),K[fe]=0)}function I(k,K,fe,pe,$,B,G){G===!0?a.vertexAttribIPointer(k,K,fe,$,B):a.vertexAttribPointer(k,K,fe,pe,$,B)}function D(k,K,fe,pe){C();const $=pe.attributes,B=fe.getAttributes(),G=K.defaultAttributeValues;for(const J in B){const xe=B[J];if(xe.location>=0){let Te=$[J];if(Te===void 0&&(J==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),J==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor)),Te!==void 0){const L=Te.normalized,V=Te.itemSize,_e=e.get(Te);if(_e===void 0)continue;const Ae=_e.buffer,Ne=_e.type,ne=_e.bytesPerElement,be=Ne===a.INT||Ne===a.UNSIGNED_INT||Te.gpuType===gm;if(Te.isInterleavedBufferAttribute){const Ee=Te.data,Ge=Ee.stride,nt=Te.offset;if(Ee.isInstancedInterleavedBuffer){for(let Qe=0;Qe<xe.locationSize;Qe++)_(xe.location+Qe,Ee.meshPerAttribute);k.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Qe=0;Qe<xe.locationSize;Qe++)S(xe.location+Qe);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let Qe=0;Qe<xe.locationSize;Qe++)I(xe.location+Qe,V/xe.locationSize,Ne,L,Ge*ne,(nt+V/xe.locationSize*Qe)*ne,be)}else{if(Te.isInstancedBufferAttribute){for(let Ee=0;Ee<xe.locationSize;Ee++)_(xe.location+Ee,Te.meshPerAttribute);k.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ee=0;Ee<xe.locationSize;Ee++)S(xe.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let Ee=0;Ee<xe.locationSize;Ee++)I(xe.location+Ee,V/xe.locationSize,Ne,L,V*ne,V/xe.locationSize*Ee*ne,be)}}else if(G!==void 0){const L=G[J];if(L!==void 0)switch(L.length){case 2:a.vertexAttrib2fv(xe.location,L);break;case 3:a.vertexAttrib3fv(xe.location,L);break;case 4:a.vertexAttrib4fv(xe.location,L);break;default:a.vertexAttrib1fv(xe.location,L)}}}}P()}function F(){O();for(const k in r){const K=r[k];for(const fe in K){const pe=K[fe];for(const $ in pe){const B=pe[$];for(const G in B)g(B[G].object),delete B[G];delete pe[$]}}delete r[k]}}function N(k){if(r[k.id]===void 0)return;const K=r[k.id];for(const fe in K){const pe=K[fe];for(const $ in pe){const B=pe[$];for(const G in B)g(B[G].object),delete B[G];delete pe[$]}}delete r[k.id]}function z(k){for(const K in r){const fe=r[K];for(const pe in fe){const $=fe[pe];if($[k.id]===void 0)continue;const B=$[k.id];for(const G in B)g(B[G].object),delete B[G];delete $[k.id]}}}function T(k){for(const K in r){const fe=r[K],pe=k.isInstancedMesh===!0?k.id:0,$=fe[pe];if($!==void 0){for(const B in $){const G=$[B];for(const J in G)g(G[J].object),delete G[J];delete $[B]}delete fe[pe],Object.keys(fe).length===0&&delete r[K]}}}function O(){j(),u=!0,c!==o&&(c=o,p(c.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:O,resetDefaultState:j,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:S,disableUnusedAttributes:P}}function hC(a,e,n){let r;function o(m){r=m}function c(m,p){a.drawArrays(r,m,p),n.update(p,r,1)}function u(m,p,g){g!==0&&(a.drawArraysInstanced(r,m,p,g),n.update(p,r,g))}function h(m,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,g);let x=0;for(let b=0;b<g;b++)x+=p[b];n.update(x,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function pC(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==Fi&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const T=z===Oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Ei&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Zi&&!T)}function m(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(at("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&x===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),I=a.getParameter(a.MAX_VARYING_VECTORS),D=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),F=a.getParameter(a.MAX_SAMPLES),N=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:b,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:P,maxVaryings:I,maxFragmentUniforms:D,maxSamples:F,samples:N}}function mC(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new jr,h=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const b=v.length!==0||x||r!==0||o;return o=x,r=v.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){n=g(v,x,0)},this.setState=function(v,x,b){const E=v.clippingPlanes,C=v.clipIntersection,S=v.clipShadows,_=a.get(v);if(!o||E===null||E.length===0||c&&!S)c?g(null):p();else{const P=c?0:r,I=P*4;let D=_.clippingState||null;m.value=D,D=g(E,x,I,b);for(let F=0;F!==I;++F)D[F]=n[F];_.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,b,E){const C=v!==null?v.length:0;let S=null;if(C!==0){if(S=m.value,E!==!0||S===null){const _=b+C*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(S===null||S.length<_)&&(S=new Float32Array(_));for(let I=0,D=b;I!==C;++I,D+=4)u.copy(v[I]).applyMatrix4(P,h),u.normal.toArray(S,D),S[D+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const _r=4,g_=[.125,.215,.35,.446,.526,.582],Qr=20,gC=256,ml=new oS,x_=new Mt;let Gh=null,Vh=0,kh=0,Wh=!1;const xC=new le;class v_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:h=xC}=c;Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Vh,kh),this._renderer.xr.enabled=Wh,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ts||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Oa,format:Fi,colorSpace:Nu,depthBuffer:!1},o=__(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=__(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vC(c)),this._blurMaterial=yC(c,e,n),this._ggxMaterial=_C(c,e,n)}return o}_compileMaterial(e){const n=new Ia(new Ti,e);this._renderer.compile(n,ml)}_sceneToCubeUV(e,n,r,o,c){const m=new Mi(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,b=v.toneMapping;v.getClearColor(x_),v.toneMapping=Qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ia(new Dl,new eS({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let _=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,_=!0):(S.color.copy(x_),_=!0);for(let I=0;I<6;I++){const D=I%3;D===0?(m.up.set(0,p[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[I],c.y,c.z)):D===1?(m.up.set(0,0,p[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[I],c.z)):(m.up.set(0,p[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[I]));const F=this._cubeSize;Qs(o,D*F,I>2?F:0,F,F),v.setRenderTarget(o),_&&v.render(C,m),v.render(e,m)}v.toneMapping=b,v.autoClear=x,e.background=P}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ts||e.mapping===oo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=S_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Qs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,ml)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),x=0+p*1.25,b=v*x,{_lodMax:E}=this,C=this._sizeLods[r],S=3*C*(r>E-_r?r-E+_r:0),_=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=E-n,Qs(c,S,_,3*C,2*C),o.setRenderTarget(c),o.render(h,ml),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Qs(e,S,_,3*C,2*C),o.setRenderTarget(e),o.render(h,ml)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=p;const x=p.uniforms,b=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Qr-1),C=c/E,S=isFinite(c)?1+Math.floor(g*C):Qr;S>Qr&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Qr}`);const _=[];let P=0;for(let z=0;z<Qr;++z){const T=z/C,O=Math.exp(-T*T/2);_.push(O),z===0?P+=O:z<S&&(P+=2*O)}for(let z=0;z<_.length;z++)_[z]=_[z]/P;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=u==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:I}=this;x.dTheta.value=E,x.mipInt.value=I-r;const D=this._sizeLods[o],F=3*D*(o>I-_r?o-I+_r:0),N=4*(this._cubeSize-D);Qs(n,F,N,3*D,2*D),m.setRenderTarget(n),m.render(v,ml)}}function vC(a){const e=[],n=[],r=[];let o=a;const c=a-_r+1+g_.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-_r?m=g_[u-a+_r-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],b=6,E=6,C=3,S=2,_=1,P=new Float32Array(C*E*b),I=new Float32Array(S*E*b),D=new Float32Array(_*E*b);for(let N=0;N<b;N++){const z=N%3*2/3-1,T=N>2?0:-1,O=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];P.set(O,C*E*N),I.set(x,S*E*N);const j=[N,N,N,N,N,N];D.set(j,_*E*N)}const F=new Ti;F.setAttribute("position",new wn(P,C)),F.setAttribute("uv",new wn(I,S)),F.setAttribute("faceIndex",new wn(D,_)),r.push(new Ia(F,null)),o>_r&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function __(a,e,n){const r=new $i(a,e,n);return r.texture.mapping=ku,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Qs(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function _C(a,e,n){return new zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function yC(a,e,n){const r=new Float32Array(Qr),o=new le(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function y_(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function S_(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class uS extends $i{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new iS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Dl(5,5,5),c=new zi({name:"CubemapFromEquirect",uniforms:co(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:Da});c.uniforms.tEquirect.value=n;const u=new Ia(o,c),h=n.minFilter;return n.minFilter===$r&&(n.minFilter=zn),new A1(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}function SC(a){let e=new WeakMap,n=new WeakMap,r=null;function o(x,b=!1){return x==null?null:b?u(x):c(x)}function c(x){if(x&&x.isTexture){const b=x.mapping;if(b===ph||b===mh)if(e.has(x)){const E=e.get(x).texture;return h(E,x.mapping)}else{const E=x.image;if(E&&E.height>0){const C=new uS(E.height);return C.fromEquirectangularTexture(a,x),e.set(x,C),x.addEventListener("dispose",p),h(C.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const b=x.mapping,E=b===ph||b===mh,C=b===ts||b===oo;if(E||C){let S=n.get(x);const _=S!==void 0?S.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new v_(a)),S=E?r.fromEquirectangular(x,S):r.fromCubemap(x,S),S.texture.pmremVersion=x.pmremVersion,n.set(x,S),S.texture;if(S!==void 0)return S.texture;{const P=x.image;return E&&P&&P.height>0||C&&P&&m(P)?(r===null&&(r=new v_(a)),S=E?r.fromEquirectangular(x):r.fromCubemap(x),S.texture.pmremVersion=x.pmremVersion,n.set(x,S),x.addEventListener("dispose",g),S.texture):null}}}return x}function h(x,b){return b===ph?x.mapping=ts:b===mh&&(x.mapping=oo),x}function m(x){let b=0;const E=6;for(let C=0;C<E;C++)x[C]!==void 0&&b++;return b===E}function p(x){const b=x.target;b.removeEventListener("dispose",p);const E=e.get(b);E!==void 0&&(e.delete(b),E.dispose())}function g(x){const b=x.target;b.removeEventListener("dispose",g);const E=n.get(b);E!==void 0&&(n.delete(b),E.dispose())}function v(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function bC(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&ao("WebGLRenderer: "+r+" extension not supported."),o}}}function MC(a,e,n,r){const o={},c=new WeakMap;function u(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",u),delete o[x.id];const b=c.get(x);b&&(e.remove(b),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(v,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function m(v){const x=v.attributes;for(const b in x)e.update(x[b],a.ARRAY_BUFFER)}function p(v){const x=[],b=v.index,E=v.attributes.position;let C=0;if(E===void 0)return;if(b!==null){const P=b.array;C=b.version;for(let I=0,D=P.length;I<D;I+=3){const F=P[I+0],N=P[I+1],z=P[I+2];x.push(F,N,N,z,z,F)}}else{const P=E.array;C=E.version;for(let I=0,D=P.length/3-1;I<D;I+=3){const F=I+0,N=I+1,z=I+2;x.push(F,N,N,z,z,F)}}const S=new(E.count>=65535?$y:Qy)(x,1);S.version=C;const _=c.get(v);_&&e.remove(_),c.set(v,S)}function g(v){const x=c.get(v);if(x){const b=v.index;b!==null&&x.version<b.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function EC(a,e,n){let r;function o(v){r=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,x){a.drawElements(r,x,c,v*u),n.update(x,r,1)}function p(v,x,b){b!==0&&(a.drawElementsInstanced(r,x,c,v*u,b),n.update(x,r,b))}function g(v,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,c,v,0,b);let C=0;for(let S=0;S<b;S++)C+=x[S];n.update(C,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g}function TC(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:Et("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function AC(a,e,n){const r=new WeakMap,o=new cn;function c(u,h,m){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let O=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",O)};x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let I=0;b===!0&&(I=1),E===!0&&(I=2),C===!0&&(I=3);let D=h.attributes.position.count*I,F=1;D>e.maxTextureSize&&(F=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const N=new Float32Array(D*F*4*v),z=new jy(N,D,F,v);z.type=Zi,z.needsUpdate=!0;const T=I*4;for(let j=0;j<v;j++){const k=S[j],K=_[j],fe=P[j],pe=D*F*4*j;for(let $=0;$<k.count;$++){const B=$*T;b===!0&&(o.fromBufferAttribute(k,$),N[pe+B+0]=o.x,N[pe+B+1]=o.y,N[pe+B+2]=o.z,N[pe+B+3]=0),E===!0&&(o.fromBufferAttribute(K,$),N[pe+B+4]=o.x,N[pe+B+5]=o.y,N[pe+B+6]=o.z,N[pe+B+7]=0),C===!0&&(o.fromBufferAttribute(fe,$),N[pe+B+8]=o.x,N[pe+B+9]=o.y,N[pe+B+10]=o.z,N[pe+B+11]=fe.itemSize===4?o.w:1)}}x={count:v,texture:z,size:new Dt(D,F)},r.set(h,x),h.addEventListener("dispose",O)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let b=0;for(let C=0;C<p.length;C++)b+=p[C];const E=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",E),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function RC(a,e,n,r,o){let c=new WeakMap;function u(p){const g=o.render.frame,v=p.geometry,x=e.get(p,v);if(c.get(x)!==g&&(e.update(x),c.set(x,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==g&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const b=p.skeleton;c.get(b)!==g&&(b.update(),c.set(b,g))}return x}function h(){c=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const wC={[Uy]:"LINEAR_TONE_MAPPING",[Ly]:"REINHARD_TONE_MAPPING",[Oy]:"CINEON_TONE_MAPPING",[Py]:"ACES_FILMIC_TONE_MAPPING",[Fy]:"AGX_TONE_MAPPING",[By]:"NEUTRAL_TONE_MAPPING",[Iy]:"CUSTOM_TONE_MAPPING"};function CC(a,e,n,r,o,c){const u=new $i(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new lo(e,n):void 0}),h=new $i(e,n,{type:Oa,depthBuffer:!1,stencilBuffer:!1}),m=new Ti;m.setAttribute("position",new Ua([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ua([0,2,0,0,2,0],2));const p=new M1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Ia(m,p),v=new oS(-1,1,1,-1,0,1);let x=null,b=null,E=!1,C,S=null,_=[],P=!1;this.setSize=function(I,D){u.setSize(I,D),h.setSize(I,D);for(let F=0;F<_.length;F++){const N=_[F];N.setSize&&N.setSize(I,D)}},this.setEffects=function(I){_=I,P=_.length>0&&_[0].isRenderPass===!0;const D=u.width,F=u.height;for(let N=0;N<_.length;N++){const z=_[N];z.setSize&&z.setSize(D,F)}},this.begin=function(I,D){if(E||I.toneMapping===Qi&&_.length===0)return!1;if(S=D,D!==null){const F=D.width,N=D.height;(u.width!==F||u.height!==N)&&this.setSize(F,N)}return P===!1&&I.setRenderTarget(u),C=I.toneMapping,I.toneMapping=Qi,!0},this.hasRenderPass=function(){return P},this.end=function(I,D){I.toneMapping=C,E=!0;let F=u,N=h;for(let z=0;z<_.length;z++){const T=_[z];if(T.enabled!==!1&&(T.render(I,N,F,D),T.needsSwap!==!1)){const O=F;F=N,N=O}}if(x!==I.outputColorSpace||b!==I.toneMapping){x=I.outputColorSpace,b=I.toneMapping,p.defines={},St.getTransfer(x)===Bt&&(p.defines.SRGB_TRANSFER="");const z=wC[b];z&&(p.defines[z]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=F.texture,I.setRenderTarget(S),I.render(g,v),S=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),p.dispose()}}const fS=new Vn,jp=new lo(1,1),dS=new jy,hS=new e1,pS=new iS,b_=[],M_=[],E_=new Float32Array(16),T_=new Float32Array(9),A_=new Float32Array(4);function po(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=b_[o];if(c===void 0&&(c=new Float32Array(o),b_[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,a[u].toArray(c,h)}return c}function En(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function Tn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Yu(a,e){let n=M_[e];n===void 0&&(n=new Int32Array(e),M_[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function DC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function NC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;a.uniform2fv(this.addr,e),Tn(n,e)}}function UC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(En(n,e))return;a.uniform3fv(this.addr,e),Tn(n,e)}}function LC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;a.uniform4fv(this.addr,e),Tn(n,e)}}function OC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(En(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Tn(n,e)}else{if(En(n,r))return;A_.set(r),a.uniformMatrix2fv(this.addr,!1,A_),Tn(n,r)}}function PC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(En(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Tn(n,e)}else{if(En(n,r))return;T_.set(r),a.uniformMatrix3fv(this.addr,!1,T_),Tn(n,r)}}function IC(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(En(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Tn(n,e)}else{if(En(n,r))return;E_.set(r),a.uniformMatrix4fv(this.addr,!1,E_),Tn(n,r)}}function FC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function BC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;a.uniform2iv(this.addr,e),Tn(n,e)}}function zC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(En(n,e))return;a.uniform3iv(this.addr,e),Tn(n,e)}}function HC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;a.uniform4iv(this.addr,e),Tn(n,e)}}function GC(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function VC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(En(n,e))return;a.uniform2uiv(this.addr,e),Tn(n,e)}}function kC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(En(n,e))return;a.uniform3uiv(this.addr,e),Tn(n,e)}}function WC(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(En(n,e))return;a.uniform4uiv(this.addr,e),Tn(n,e)}}function XC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(jp.compareFunction=n.isReversedDepthBuffer()?Mm:bm,c=jp):c=fS,n.setTexture2D(e||c,o)}function qC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||hS,o)}function YC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||pS,o)}function jC(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||dS,o)}function ZC(a){switch(a){case 5126:return DC;case 35664:return NC;case 35665:return UC;case 35666:return LC;case 35674:return OC;case 35675:return PC;case 35676:return IC;case 5124:case 35670:return FC;case 35667:case 35671:return BC;case 35668:case 35672:return zC;case 35669:case 35673:return HC;case 5125:return GC;case 36294:return VC;case 36295:return kC;case 36296:return WC;case 35678:case 36198:case 36298:case 36306:case 35682:return XC;case 35679:case 36299:case 36307:return qC;case 35680:case 36300:case 36308:case 36293:return YC;case 36289:case 36303:case 36311:case 36292:return jC}}function KC(a,e){a.uniform1fv(this.addr,e)}function QC(a,e){const n=po(e,this.size,2);a.uniform2fv(this.addr,n)}function $C(a,e){const n=po(e,this.size,3);a.uniform3fv(this.addr,n)}function JC(a,e){const n=po(e,this.size,4);a.uniform4fv(this.addr,n)}function e2(a,e){const n=po(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function t2(a,e){const n=po(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function n2(a,e){const n=po(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function i2(a,e){a.uniform1iv(this.addr,e)}function a2(a,e){a.uniform2iv(this.addr,e)}function r2(a,e){a.uniform3iv(this.addr,e)}function s2(a,e){a.uniform4iv(this.addr,e)}function o2(a,e){a.uniform1uiv(this.addr,e)}function l2(a,e){a.uniform2uiv(this.addr,e)}function c2(a,e){a.uniform3uiv(this.addr,e)}function u2(a,e){a.uniform4uiv(this.addr,e)}function f2(a,e,n){const r=this.cache,o=e.length,c=Yu(n,o);En(r,c)||(a.uniform1iv(this.addr,c),Tn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=jp:u=fS;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function d2(a,e,n){const r=this.cache,o=e.length,c=Yu(n,o);En(r,c)||(a.uniform1iv(this.addr,c),Tn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||hS,c[u])}function h2(a,e,n){const r=this.cache,o=e.length,c=Yu(n,o);En(r,c)||(a.uniform1iv(this.addr,c),Tn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||pS,c[u])}function p2(a,e,n){const r=this.cache,o=e.length,c=Yu(n,o);En(r,c)||(a.uniform1iv(this.addr,c),Tn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||dS,c[u])}function m2(a){switch(a){case 5126:return KC;case 35664:return QC;case 35665:return $C;case 35666:return JC;case 35674:return e2;case 35675:return t2;case 35676:return n2;case 5124:case 35670:return i2;case 35667:case 35671:return a2;case 35668:case 35672:return r2;case 35669:case 35673:return s2;case 5125:return o2;case 36294:return l2;case 36295:return c2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return f2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return h2;case 36289:case 36303:case 36311:case 36292:return p2}}class g2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=ZC(n.type)}}class x2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=m2(n.type)}}class v2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],r)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function R_(a,e){a.seq.push(e),a.map[e.id]=e}function _2(a,e,n){const r=a.name,o=r.length;for(Xh.lastIndex=0;;){const c=Xh.exec(r),u=Xh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){R_(n,p===void 0?new g2(h,a,e):new x2(h,a,e));break}else{let v=n.map[h];v===void 0&&(v=new v2(h),R_(n,v)),n=v}}}class Eu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(n,u),m=e.getUniformLocation(n,h.name);_2(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function w_(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const y2=37297;let S2=0;function b2(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return r.join(`
`)}const C_=new st;function M2(a){St._getMatrix(C_,St.workingColorSpace,a);const e=`mat3( ${C_.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(a)){case Uu:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function D_(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+b2(a.getShaderSource(e),h)}else return c}function E2(a,e){const n=M2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const T2={[Uy]:"Linear",[Ly]:"Reinhard",[Oy]:"Cineon",[Py]:"ACESFilmic",[Fy]:"AgX",[By]:"Neutral",[Iy]:"Custom"};function A2(a,e){const n=T2[e];return n===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pu=new le;function R2(){St.getLuminanceCoefficients(pu);const a=pu.x.toFixed(4),e=pu.y.toFixed(4),n=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function C2(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function D2(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return n}function _l(a){return a!==""}function N_(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U_(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(a){return a.replace(N2,L2)}const U2=new Map;function L2(a,e){let n=ut[e];if(n===void 0){const r=U2.get(e);if(r!==void 0)n=ut[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zp(n)}const O2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(a){return a.replace(O2,P2)}function P2(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function O_(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const I2={[_u]:"SHADOWMAP_TYPE_PCF",[xl]:"SHADOWMAP_TYPE_VSM"};function F2(a){return I2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const B2={[ts]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[ku]:"ENVMAP_TYPE_CUBE_UV"};function z2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":B2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const H2={[oo]:"ENVMAP_MODE_REFRACTION"};function G2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":H2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const V2={[Ny]:"ENVMAP_BLENDING_MULTIPLY",[LA]:"ENVMAP_BLENDING_MIX",[OA]:"ENVMAP_BLENDING_ADD"};function k2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":V2[a.combine]||"ENVMAP_BLENDING_NONE"}function W2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function X2(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=F2(n),p=z2(n),g=G2(n),v=k2(n),x=W2(n),b=w2(n),E=C2(c),C=o.createProgram();let S,_,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(_l).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(_l).join(`
`),_.length>0&&(_+=`
`)):(S=[O_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),_=[O_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?ut.tonemapping_pars_fragment:"",n.toneMapping!==Qi?A2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,E2("linearToOutputTexel",n.outputColorSpace),R2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_l).join(`
`)),u=Zp(u),u=N_(u,n),u=U_(u,n),h=Zp(h),h=N_(h,n),h=U_(h,n),u=L_(u),h=L_(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===Xv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=P+S+u,D=P+_+h,F=w_(o,o.VERTEX_SHADER,I),N=w_(o,o.FRAGMENT_SHADER,D);o.attachShader(C,F),o.attachShader(C,N),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function z(k){if(a.debug.checkShaderErrors){const K=o.getProgramInfoLog(C)||"",fe=o.getShaderInfoLog(F)||"",pe=o.getShaderInfoLog(N)||"",$=K.trim(),B=fe.trim(),G=pe.trim();let J=!0,xe=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(J=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,C,F,N);else{const Te=D_(o,F,"vertex"),L=D_(o,N,"fragment");Et("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+$+`
`+Te+`
`+L)}else $!==""?at("WebGLProgram: Program Info Log:",$):(B===""||G==="")&&(xe=!1);xe&&(k.diagnostics={runnable:J,programLog:$,vertexShader:{log:B,prefix:S},fragmentShader:{log:G,prefix:_}})}o.deleteShader(F),o.deleteShader(N),T=new Eu(o,C),O=D2(o,C)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let O;this.getAttributes=function(){return O===void 0&&z(this),O};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=o.getProgramParameter(C,y2)),j},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=S2++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=N,this}let q2=0;class Y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new j2(e),n.set(e,r)),r}}class j2{constructor(e){this.id=q2++,this.code=e,this.usedTimes=0}}function Z2(a){return a===ns||a===Cu||a===Du}function K2(a,e,n,r,o,c){const u=new Zy,h=new Y2,m=new Set,p=[],g=new Map,v=r.logarithmicDepthBuffer;let x=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,O,j,k,K,fe){const pe=k.fog,$=K.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,J=e.get(T.envMap||B,G),xe=J&&J.mapping===ku?J.image.height:null,Te=b[T.type];T.precision!==null&&(x=r.getMaxPrecision(T.precision),x!==T.precision&&at("WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const L=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,V=L!==void 0?L.length:0;let _e=0;$.morphAttributes.position!==void 0&&(_e=1),$.morphAttributes.normal!==void 0&&(_e=2),$.morphAttributes.color!==void 0&&(_e=3);let Ae,Ne,ne,be;if(Te){const ke=ji[Te];Ae=ke.vertexShader,Ne=ke.fragmentShader}else{Ae=T.vertexShader,Ne=T.fragmentShader;const ke=h.getVertexShaderStage(T),Kt=h.getFragmentShaderStage(T);h.update(T,ke,Kt),ne=ke.id,be=Kt.id}const Ee=a.getRenderTarget(),Ge=a.state.buffers.depth.getReversed(),nt=K.isInstancedMesh===!0,Qe=K.isBatchedMesh===!0,qt=!!T.map,ft=!!T.matcap,vt=!!J,_t=!!T.aoMap,dt=!!T.lightMap,nn=!!T.bumpMap&&T.wireframe===!1,an=!!T.normalMap,rn=!!T.displacementMap,un=!!T.emissiveMap,Xt=!!T.metalnessMap,sn=!!T.roughnessMap,Y=T.anisotropy>0,zt=T.clearcoat>0,wt=T.dispersion>0,U=T.iridescence>0,M=T.sheen>0,Q=T.transmission>0,re=Y&&!!T.anisotropyMap,he=zt&&!!T.clearcoatMap,Re=zt&&!!T.clearcoatNormalMap,Ue=zt&&!!T.clearcoatRoughnessMap,de=U&&!!T.iridescenceMap,me=U&&!!T.iridescenceThicknessMap,Ce=M&&!!T.sheenColorMap,ze=M&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,Le=!!T.specularColorMap,Ke=!!T.specularIntensityMap,$e=Q&&!!T.transmissionMap,it=Q&&!!T.thicknessMap,X=!!T.gradientMap,we=!!T.alphaMap,ve=T.alphaTest>0,De=!!T.alphaHash,Be=!!T.extensions;let Me=Qi;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Me=a.toneMapping);const Ye={shaderID:Te,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:Ne,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:Qe,batchingColor:Qe&&K._colorsTexture!==null,instancing:nt,instancingColor:nt&&K.instanceColor!==null,instancingMorph:nt&&K.morphTexture!==null,outputColorSpace:Ee===null?a.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:qt,matcap:ft,envMap:vt,envMapMode:vt&&J.mapping,envMapCubeUVHeight:xe,aoMap:_t,lightMap:dt,bumpMap:nn,normalMap:an,displacementMap:rn,emissiveMap:un,normalMapObjectSpace:an&&T.normalMapType===FA,normalMapTangentSpace:an&&T.normalMapType===Vv,packedNormalMap:an&&T.normalMapType===Vv&&Z2(T.normalMap.format),metalnessMap:Xt,roughnessMap:sn,anisotropy:Y,anisotropyMap:re,clearcoat:zt,clearcoatMap:he,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ue,dispersion:wt,iridescence:U,iridescenceMap:de,iridescenceThicknessMap:me,sheen:M,sheenColorMap:Ce,sheenRoughnessMap:ze,specularMap:Pe,specularColorMap:Le,specularIntensityMap:Ke,transmission:Q,transmissionMap:$e,thicknessMap:it,gradientMap:X,opaque:T.transparent===!1&&T.blending===io&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:ve,alphaHash:De,combine:T.combine,mapUv:qt&&E(T.map.channel),aoMapUv:_t&&E(T.aoMap.channel),lightMapUv:dt&&E(T.lightMap.channel),bumpMapUv:nn&&E(T.bumpMap.channel),normalMapUv:an&&E(T.normalMap.channel),displacementMapUv:rn&&E(T.displacementMap.channel),emissiveMapUv:un&&E(T.emissiveMap.channel),metalnessMapUv:Xt&&E(T.metalnessMap.channel),roughnessMapUv:sn&&E(T.roughnessMap.channel),anisotropyMapUv:re&&E(T.anisotropyMap.channel),clearcoatMapUv:he&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(T.sheenRoughnessMap.channel),specularMapUv:Pe&&E(T.specularMap.channel),specularColorMapUv:Le&&E(T.specularColorMap.channel),specularIntensityMapUv:Ke&&E(T.specularIntensityMap.channel),transmissionMapUv:$e&&E(T.transmissionMap.channel),thicknessMapUv:it&&E(T.thicknessMap.channel),alphaMapUv:we&&E(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(an||Y),vertexNormals:!!$.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!$.attributes.uv&&(qt||we),fog:!!pe,useFog:T.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||$.attributes.normal===void 0&&an===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ge,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:_e,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&j.length>0,shadowMapType:a.shadowMap.type,toneMapping:Me,decodeVideoTexture:qt&&T.map.isVideoTexture===!0&&St.getTransfer(T.map.colorSpace)===Bt,decodeVideoTextureEmissive:un&&T.emissiveMap.isVideoTexture===!0&&St.getTransfer(T.emissiveMap.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===wa,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function S(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const j in T.defines)O.push(j),O.push(T.defines[j]);return T.isRawShaderMaterial===!1&&(_(O,T),P(O,T),O.push(a.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function _(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function P(T,O){u.disableAll(),O.instancing&&u.enable(0),O.instancingColor&&u.enable(1),O.instancingMorph&&u.enable(2),O.matcap&&u.enable(3),O.envMap&&u.enable(4),O.normalMapObjectSpace&&u.enable(5),O.normalMapTangentSpace&&u.enable(6),O.clearcoat&&u.enable(7),O.iridescence&&u.enable(8),O.alphaTest&&u.enable(9),O.vertexColors&&u.enable(10),O.vertexAlphas&&u.enable(11),O.vertexUv1s&&u.enable(12),O.vertexUv2s&&u.enable(13),O.vertexUv3s&&u.enable(14),O.vertexTangents&&u.enable(15),O.anisotropy&&u.enable(16),O.alphaHash&&u.enable(17),O.batching&&u.enable(18),O.dispersion&&u.enable(19),O.batchingColor&&u.enable(20),O.gradientMap&&u.enable(21),O.packedNormalMap&&u.enable(22),O.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),O.fog&&u.enable(0),O.useFog&&u.enable(1),O.flatShading&&u.enable(2),O.logarithmicDepthBuffer&&u.enable(3),O.reversedDepthBuffer&&u.enable(4),O.skinning&&u.enable(5),O.morphTargets&&u.enable(6),O.morphNormals&&u.enable(7),O.morphColors&&u.enable(8),O.premultipliedAlpha&&u.enable(9),O.shadowMapEnabled&&u.enable(10),O.doubleSided&&u.enable(11),O.flipSided&&u.enable(12),O.useDepthPacking&&u.enable(13),O.dithering&&u.enable(14),O.transmission&&u.enable(15),O.sheen&&u.enable(16),O.opaque&&u.enable(17),O.pointsUvs&&u.enable(18),O.decodeVideoTexture&&u.enable(19),O.decodeVideoTextureEmissive&&u.enable(20),O.alphaToCoverage&&u.enable(21),O.numLightProbeGrids>0&&u.enable(22),O.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function I(T){const O=b[T.type];let j;if(O){const k=ji[O];j=y1.clone(k.uniforms)}else j=T.uniforms;return j}function D(T,O){let j=g.get(O);return j!==void 0?++j.usedTimes:(j=new X2(a,O,T,o),p.push(j),g.set(O,j)),j}function F(T){if(--T.usedTimes===0){const O=p.indexOf(T);p[O]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){h.remove(T)}function z(){h.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:I,acquireProgram:D,releaseProgram:F,releaseShaderCache:N,programs:p,dispose:z}}function Q2(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function $2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function P_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function I_(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(x){let b=0;return x.isInstancedMesh&&(b+=2),x.isSkinnedMesh&&(b+=1),b}function h(x,b,E,C,S,_){let P=a[e];return P===void 0?(P={id:x.id,object:x,geometry:b,material:E,materialVariant:u(x),groupOrder:C,renderOrder:x.renderOrder,z:S,group:_},a[e]=P):(P.id=x.id,P.object=x,P.geometry=b,P.material=E,P.materialVariant=u(x),P.groupOrder=C,P.renderOrder=x.renderOrder,P.z=S,P.group=_),e++,P}function m(x,b,E,C,S,_){const P=h(x,b,E,C,S,_);E.transmission>0?r.push(P):E.transparent===!0?o.push(P):n.push(P)}function p(x,b,E,C,S,_){const P=h(x,b,E,C,S,_);E.transmission>0?r.unshift(P):E.transparent===!0?o.unshift(P):n.unshift(P)}function g(x,b,E){n.length>1&&n.sort(x||$2),r.length>1&&r.sort(b||P_),o.length>1&&o.sort(b||P_),E&&(n.reverse(),r.reverse(),o.reverse())}function v(){for(let x=e,b=a.length;x<b;x++){const E=a[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:m,unshift:p,finish:v,sort:g}}function J2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new I_,a.set(r,[u])):o>=c.length?(u=new I_,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function e3(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new le,color:new Mt};break;case"SpotLight":n={position:new le,direction:new le,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new le,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new le,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":n={color:new Mt,position:new le,halfWidth:new le,halfHeight:new le};break}return a[e.id]=n,n}}}function t3(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let n3=0;function i3(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function a3(a){const e=new e3,n=t3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new le);const o=new le,c=new pn,u=new pn;function h(p){let g=0,v=0,x=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let b=0,E=0,C=0,S=0,_=0,P=0,I=0,D=0,F=0,N=0,z=0;p.sort(i3);for(let O=0,j=p.length;O<j;O++){const k=p[O],K=k.color,fe=k.intensity,pe=k.distance;let $=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ns?$=k.shadow.map.texture:$=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=K.r*fe,v+=K.g*fe,x+=K.b*fe;else if(k.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(k.sh.coefficients[B],fe);z++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,J=n.get(k);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,r.directionalShadow[b]=J,r.directionalShadowMap[b]=$,r.directionalShadowMatrix[b]=k.shadow.matrix,P++}r.directional[b]=B,b++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(K).multiplyScalar(fe),B.distance=pe,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,r.spot[C]=B;const G=k.shadow;if(k.map&&(r.spotLightMap[F]=k.map,F++,G.updateMatrices(k),k.castShadow&&N++),r.spotLightMatrix[C]=G.matrix,k.castShadow){const J=n.get(k);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,r.spotShadow[C]=J,r.spotShadowMap[C]=$,D++}C++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(K).multiplyScalar(fe),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=B,S++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const G=k.shadow,J=n.get(k);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,r.pointShadow[E]=J,r.pointShadowMap[E]=$,r.pointShadowMatrix[E]=k.shadow.matrix,I++}r.point[E]=B,E++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(fe),B.groundColor.copy(k.groundColor).multiplyScalar(fe),r.hemi[_]=B,_++}}S>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const T=r.hash;(T.directionalLength!==b||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==S||T.hemiLength!==_||T.numDirectionalShadows!==P||T.numPointShadows!==I||T.numSpotShadows!==D||T.numSpotMaps!==F||T.numLightProbes!==z)&&(r.directional.length=b,r.spot.length=C,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=D+F-N,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=z,T.directionalLength=b,T.pointLength=E,T.spotLength=C,T.rectAreaLength=S,T.hemiLength=_,T.numDirectionalShadows=P,T.numPointShadows=I,T.numSpotShadows=D,T.numSpotMaps=F,T.numLightProbes=z,r.version=n3++)}function m(p,g){let v=0,x=0,b=0,E=0,C=0;const S=g.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const I=p[_];if(I.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),v++}else if(I.isSpotLight){const D=r.spot[b];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),b++}else if(I.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(S),u.identity(),c.copy(I.matrixWorld),c.premultiply(S),u.extractRotation(c),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),E++}else if(I.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(S),x++}else if(I.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(I.matrixWorld),D.direction.transformDirection(S),C++}}}return{setup:h,setupView:m,state:r}}function F_(a){const e=new a3(a),n=[],r=[],o=[];function c(x){v.camera=x,n.length=0,r.length=0,o.length=0}function u(x){n.push(x)}function h(x){r.push(x)}function m(x){o.push(x)}function p(){e.setup(n)}function g(x){e.setupView(n,x)}const v={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function r3(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new F_(a),e.set(o,[h])):c>=u.length?(h=new F_(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const s3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,l3=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],c3=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],B_=new pn,gl=new le,qh=new le;function u3(a,e,n){let r=new tS;const o=new Dt,c=new Dt,u=new cn,h=new E1,m=new T1,p={},g=n.maxTextureSize,v={[br]:Qn,[Qn]:br,[wa]:wa},x=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:s3,fragmentShader:o3}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const E=new Ti;E.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ia(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let _=this.type;this.render=function(N,z,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===pA&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_u);const O=a.getRenderTarget(),j=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),K=a.state;K.setBlending(Da),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const fe=_!==this.type;fe&&z.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach($=>$.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,$=N.length;pe<$;pe++){const B=N[pe],G=B.shadow;if(G===void 0){at("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const J=G.getFrameExtents();o.multiply(J),c.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/J.x),o.x=c.x*J.x,G.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/J.y),o.y=c.y*J.y,G.mapSize.y=c.y));const xe=a.state.buffers.depth.getReversed();if(G.camera._reversedDepth=xe,G.map===null||fe===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===xl){if(B.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new $i(o.x,o.y,{format:ns,type:Oa,minFilter:zn,magFilter:zn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new lo(o.x,o.y,Zi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Pa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On}else B.isPointLight?(G.map=new uS(o.x),G.map.depthTexture=new v1(o.x,ea)):(G.map=new $i(o.x,o.y),G.map.depthTexture=new lo(o.x,o.y,ea)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Pa,this.type===_u?(G.map.depthTexture.compareFunction=xe?Mm:bm,G.map.depthTexture.minFilter=zn,G.map.depthTexture.magFilter=zn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On);G.camera.updateProjectionMatrix()}const Te=G.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<Te;L++){if(G.map.isWebGLCubeRenderTarget)a.setRenderTarget(G.map,L),a.clear();else{L===0&&(a.setRenderTarget(G.map),a.clear());const V=G.getViewport(L);u.set(c.x*V.x,c.y*V.y,c.x*V.z,c.y*V.w),K.viewport(u)}if(B.isPointLight){const V=G.camera,_e=G.matrix,Ae=B.distance||V.far;Ae!==V.far&&(V.far=Ae,V.updateProjectionMatrix()),gl.setFromMatrixPosition(B.matrixWorld),V.position.copy(gl),qh.copy(V.position),qh.add(l3[L]),V.up.copy(c3[L]),V.lookAt(qh),V.updateMatrixWorld(),_e.makeTranslation(-gl.x,-gl.y,-gl.z),B_.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),G._frustum.setFromProjectionMatrix(B_,V.coordinateSystem,V.reversedDepth)}else G.updateMatrices(B);r=G.getFrustum(),D(z,T,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===xl&&P(G,T),G.needsUpdate=!1}_=this.type,S.needsUpdate=!1,a.setRenderTarget(O,j,k)};function P(N,z){const T=e.update(C);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,b.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new $i(o.x,o.y,{format:ns,type:Oa})),x.uniforms.shadow_pass.value=N.map.depthTexture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(z,null,T,x,C,null),b.uniforms.shadow_pass.value=N.mapPass.texture,b.uniforms.resolution.value=N.mapSize,b.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(z,null,T,b,C,null)}function I(N,z,T,O){let j=null;const k=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)j=k;else if(j=T.isPointLight===!0?m:h,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=j.uuid,fe=z.uuid;let pe=p[K];pe===void 0&&(pe={},p[K]=pe);let $=pe[fe];$===void 0&&($=j.clone(),pe[fe]=$,z.addEventListener("dispose",F)),j=$}if(j.visible=z.visible,j.wireframe=z.wireframe,O===xl?j.side=z.shadowSide!==null?z.shadowSide:z.side:j.side=z.shadowSide!==null?z.shadowSide:v[z.side],j.alphaMap=z.alphaMap,j.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,j.map=z.map,j.clipShadows=z.clipShadows,j.clippingPlanes=z.clippingPlanes,j.clipIntersection=z.clipIntersection,j.displacementMap=z.displacementMap,j.displacementScale=z.displacementScale,j.displacementBias=z.displacementBias,j.wireframeLinewidth=z.wireframeLinewidth,j.linewidth=z.linewidth,T.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const K=a.properties.get(j);K.light=T}return j}function D(N,z,T,O,j){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&j===xl)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const fe=e.update(N),pe=N.material;if(Array.isArray(pe)){const $=fe.groups;for(let B=0,G=$.length;B<G;B++){const J=$[B],xe=pe[J.materialIndex];if(xe&&xe.visible){const Te=I(N,xe,O,j);N.onBeforeShadow(a,N,z,T,fe,Te,J),a.renderBufferDirect(T,null,fe,Te,N,J),N.onAfterShadow(a,N,z,T,fe,Te,J)}}}else if(pe.visible){const $=I(N,pe,O,j);N.onBeforeShadow(a,N,z,T,fe,$,null),a.renderBufferDirect(T,null,fe,$,N,null),N.onAfterShadow(a,N,z,T,fe,$,null)}}const K=N.children;for(let fe=0,pe=K.length;fe<pe;fe++)D(K[fe],z,T,O,j)}function F(N){N.target.removeEventListener("dispose",F);for(const T in p){const O=p[T],j=N.target.uuid;j in O&&(O[j].dispose(),delete O[j])}}}function f3(a,e){function n(){let X=!1;const we=new cn;let ve=null;const De=new cn(0,0,0,0);return{setMask:function(Be){ve!==Be&&!X&&(a.colorMask(Be,Be,Be,Be),ve=Be)},setLocked:function(Be){X=Be},setClear:function(Be,Me,Ye,ke,Kt){Kt===!0&&(Be*=ke,Me*=ke,Ye*=ke),we.set(Be,Me,Ye,ke),De.equals(we)===!1&&(a.clearColor(Be,Me,Ye,ke),De.copy(we))},reset:function(){X=!1,ve=null,De.set(-1,0,0,0)}}}function r(){let X=!1,we=!1,ve=null,De=null,Be=null;return{setReversed:function(Me){if(we!==Me){const Ye=e.get("EXT_clip_control");Me?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),we=Me;const ke=Be;Be=null,this.setClear(ke)}},getReversed:function(){return we},setTest:function(Me){Me?Ee(a.DEPTH_TEST):Ge(a.DEPTH_TEST)},setMask:function(Me){ve!==Me&&!X&&(a.depthMask(Me),ve=Me)},setFunc:function(Me){if(we&&(Me=YA[Me]),De!==Me){switch(Me){case op:a.depthFunc(a.NEVER);break;case lp:a.depthFunc(a.ALWAYS);break;case cp:a.depthFunc(a.LESS);break;case so:a.depthFunc(a.LEQUAL);break;case up:a.depthFunc(a.EQUAL);break;case fp:a.depthFunc(a.GEQUAL);break;case dp:a.depthFunc(a.GREATER);break;case hp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}De=Me}},setLocked:function(Me){X=Me},setClear:function(Me){Be!==Me&&(Be=Me,we&&(Me=1-Me),a.clearDepth(Me))},reset:function(){X=!1,ve=null,De=null,Be=null,we=!1}}}function o(){let X=!1,we=null,ve=null,De=null,Be=null,Me=null,Ye=null,ke=null,Kt=null;return{setTest:function(Ut){X||(Ut?Ee(a.STENCIL_TEST):Ge(a.STENCIL_TEST))},setMask:function(Ut){we!==Ut&&!X&&(a.stencilMask(Ut),we=Ut)},setFunc:function(Ut,Jn,ei){(ve!==Ut||De!==Jn||Be!==ei)&&(a.stencilFunc(Ut,Jn,ei),ve=Ut,De=Jn,Be=ei)},setOp:function(Ut,Jn,ei){(Me!==Ut||Ye!==Jn||ke!==ei)&&(a.stencilOp(Ut,Jn,ei),Me=Ut,Ye=Jn,ke=ei)},setLocked:function(Ut){X=Ut},setClear:function(Ut){Kt!==Ut&&(a.clearStencil(Ut),Kt=Ut)},reset:function(){X=!1,we=null,ve=null,De=null,Be=null,Me=null,Ye=null,ke=null,Kt=null}}}const c=new n,u=new r,h=new o,m=new WeakMap,p=new WeakMap;let g={},v={},x={},b=new WeakMap,E=[],C=null,S=!1,_=null,P=null,I=null,D=null,F=null,N=null,z=null,T=new Mt(0,0,0),O=0,j=!1,k=null,K=null,fe=null,pe=null,$=null;const B=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const xe=a.getParameter(a.VERSION);xe.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(xe)[1]),G=J>=1):xe.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(xe)[1]),G=J>=2);let Te=null,L={};const V=a.getParameter(a.SCISSOR_BOX),_e=a.getParameter(a.VIEWPORT),Ae=new cn().fromArray(V),Ne=new cn().fromArray(_e);function ne(X,we,ve,De){const Be=new Uint8Array(4),Me=a.createTexture();a.bindTexture(X,Me),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ye=0;Ye<ve;Ye++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(we,0,a.RGBA,1,1,De,0,a.RGBA,a.UNSIGNED_BYTE,Be):a.texImage2D(we+Ye,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Be);return Me}const be={};be[a.TEXTURE_2D]=ne(a.TEXTURE_2D,a.TEXTURE_2D,1),be[a.TEXTURE_CUBE_MAP]=ne(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[a.TEXTURE_2D_ARRAY]=ne(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),be[a.TEXTURE_3D]=ne(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ee(a.DEPTH_TEST),u.setFunc(so),nn(!1),an(zv),Ee(a.CULL_FACE),_t(Da);function Ee(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function Ge(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function nt(X,we){return x[X]!==we?(a.bindFramebuffer(X,we),x[X]=we,X===a.DRAW_FRAMEBUFFER&&(x[a.FRAMEBUFFER]=we),X===a.FRAMEBUFFER&&(x[a.DRAW_FRAMEBUFFER]=we),!0):!1}function Qe(X,we){let ve=E,De=!1;if(X){ve=b.get(we),ve===void 0&&(ve=[],b.set(we,ve));const Be=X.textures;if(ve.length!==Be.length||ve[0]!==a.COLOR_ATTACHMENT0){for(let Me=0,Ye=Be.length;Me<Ye;Me++)ve[Me]=a.COLOR_ATTACHMENT0+Me;ve.length=Be.length,De=!0}}else ve[0]!==a.BACK&&(ve[0]=a.BACK,De=!0);De&&a.drawBuffers(ve)}function qt(X){return C!==X?(a.useProgram(X),C=X,!0):!1}const ft={[Kr]:a.FUNC_ADD,[gA]:a.FUNC_SUBTRACT,[xA]:a.FUNC_REVERSE_SUBTRACT};ft[vA]=a.MIN,ft[_A]=a.MAX;const vt={[yA]:a.ZERO,[SA]:a.ONE,[bA]:a.SRC_COLOR,[rp]:a.SRC_ALPHA,[wA]:a.SRC_ALPHA_SATURATE,[AA]:a.DST_COLOR,[EA]:a.DST_ALPHA,[MA]:a.ONE_MINUS_SRC_COLOR,[sp]:a.ONE_MINUS_SRC_ALPHA,[RA]:a.ONE_MINUS_DST_COLOR,[TA]:a.ONE_MINUS_DST_ALPHA,[CA]:a.CONSTANT_COLOR,[DA]:a.ONE_MINUS_CONSTANT_COLOR,[NA]:a.CONSTANT_ALPHA,[UA]:a.ONE_MINUS_CONSTANT_ALPHA};function _t(X,we,ve,De,Be,Me,Ye,ke,Kt,Ut){if(X===Da){S===!0&&(Ge(a.BLEND),S=!1);return}if(S===!1&&(Ee(a.BLEND),S=!0),X!==mA){if(X!==_||Ut!==j){if((P!==Kr||F!==Kr)&&(a.blendEquation(a.FUNC_ADD),P=Kr,F=Kr),Ut)switch(X){case io:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case wu:a.blendFunc(a.ONE,a.ONE);break;case Hv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Gv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Et("WebGLState: Invalid blending: ",X);break}else switch(X){case io:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case wu:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Hv:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gv:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",X);break}I=null,D=null,N=null,z=null,T.set(0,0,0),O=0,_=X,j=Ut}return}Be=Be||we,Me=Me||ve,Ye=Ye||De,(we!==P||Be!==F)&&(a.blendEquationSeparate(ft[we],ft[Be]),P=we,F=Be),(ve!==I||De!==D||Me!==N||Ye!==z)&&(a.blendFuncSeparate(vt[ve],vt[De],vt[Me],vt[Ye]),I=ve,D=De,N=Me,z=Ye),(ke.equals(T)===!1||Kt!==O)&&(a.blendColor(ke.r,ke.g,ke.b,Kt),T.copy(ke),O=Kt),_=X,j=!1}function dt(X,we){X.side===wa?Ge(a.CULL_FACE):Ee(a.CULL_FACE);let ve=X.side===Qn;we&&(ve=!ve),nn(ve),X.blending===io&&X.transparent===!1?_t(Da):_t(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const De=X.stencilWrite;h.setTest(De),De&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),un(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ee(a.SAMPLE_ALPHA_TO_COVERAGE):Ge(a.SAMPLE_ALPHA_TO_COVERAGE)}function nn(X){k!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),k=X)}function an(X){X!==dA?(Ee(a.CULL_FACE),X!==K&&(X===zv?a.cullFace(a.BACK):X===hA?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ge(a.CULL_FACE),K=X}function rn(X){X!==fe&&(G&&a.lineWidth(X),fe=X)}function un(X,we,ve){X?(Ee(a.POLYGON_OFFSET_FILL),(pe!==we||$!==ve)&&(pe=we,$=ve,u.getReversed()&&(we=-we),a.polygonOffset(we,ve))):Ge(a.POLYGON_OFFSET_FILL)}function Xt(X){X?Ee(a.SCISSOR_TEST):Ge(a.SCISSOR_TEST)}function sn(X){X===void 0&&(X=a.TEXTURE0+B-1),Te!==X&&(a.activeTexture(X),Te=X)}function Y(X,we,ve){ve===void 0&&(Te===null?ve=a.TEXTURE0+B-1:ve=Te);let De=L[ve];De===void 0&&(De={type:void 0,texture:void 0},L[ve]=De),(De.type!==X||De.texture!==we)&&(Te!==ve&&(a.activeTexture(ve),Te=ve),a.bindTexture(X,we||be[X]),De.type=X,De.texture=we)}function zt(){const X=L[Te];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function wt(){try{a.compressedTexImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function U(){try{a.compressedTexImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function M(){try{a.texSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function Q(){try{a.texSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function re(){try{a.compressedTexSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function he(){try{a.compressedTexSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function Re(){try{a.texStorage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function Ue(){try{a.texStorage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function de(){try{a.texImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function me(){try{a.texImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function Ce(X){return v[X]!==void 0?v[X]:a.getParameter(X)}function ze(X,we){v[X]!==we&&(a.pixelStorei(X,we),v[X]=we)}function Pe(X){Ae.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),Ae.copy(X))}function Le(X){Ne.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Ne.copy(X))}function Ke(X,we){let ve=p.get(we);ve===void 0&&(ve=new WeakMap,p.set(we,ve));let De=ve.get(X);De===void 0&&(De=a.getUniformBlockIndex(we,X.name),ve.set(X,De))}function $e(X,we){const De=p.get(we).get(X);m.get(we)!==De&&(a.uniformBlockBinding(we,De,X.__bindingPointIndex),m.set(we,De))}function it(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},v={},Te=null,L={},x={},b=new WeakMap,E=[],C=null,S=!1,_=null,P=null,I=null,D=null,F=null,N=null,z=null,T=new Mt(0,0,0),O=0,j=!1,k=null,K=null,fe=null,pe=null,$=null,Ae.set(0,0,a.canvas.width,a.canvas.height),Ne.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ee,disable:Ge,bindFramebuffer:nt,drawBuffers:Qe,useProgram:qt,setBlending:_t,setMaterial:dt,setFlipSided:nn,setCullFace:an,setLineWidth:rn,setPolygonOffset:un,setScissorTest:Xt,activeTexture:sn,bindTexture:Y,unbindTexture:zt,compressedTexImage2D:wt,compressedTexImage3D:U,texImage2D:de,texImage3D:me,pixelStorei:ze,getParameter:Ce,updateUBOMapping:Ke,uniformBlockBinding:$e,texStorage2D:Re,texStorage3D:Ue,texSubImage2D:M,texSubImage3D:Q,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:Pe,viewport:Le,reset:it}}function d3(a,e,n,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,g=new WeakMap,v=new Set;let x;const b=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,M){return E?new OffscreenCanvas(U,M):Ou("canvas")}function S(U,M,Q){let re=1;const he=wt(U);if((he.width>Q||he.height>Q)&&(re=Q/Math.max(he.width,he.height)),re<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Re=Math.floor(re*he.width),Ue=Math.floor(re*he.height);x===void 0&&(x=C(Re,Ue));const de=M?C(Re,Ue):x;return de.width=Re,de.height=Ue,de.getContext("2d").drawImage(U,0,0,Re,Ue),at("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Re+"x"+Ue+")."),de}else return"data"in U&&at("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function _(U){return U.generateMipmaps}function P(U){a.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function D(U,M,Q,re,he,Re=!1){if(U!==null){if(a[U]!==void 0)return a[U];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ue;re&&(Ue=e.get("EXT_texture_norm16"),Ue||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=M;if(M===a.RED&&(Q===a.FLOAT&&(de=a.R32F),Q===a.HALF_FLOAT&&(de=a.R16F),Q===a.UNSIGNED_BYTE&&(de=a.R8),Q===a.UNSIGNED_SHORT&&Ue&&(de=Ue.R16_EXT),Q===a.SHORT&&Ue&&(de=Ue.R16_SNORM_EXT)),M===a.RED_INTEGER&&(Q===a.UNSIGNED_BYTE&&(de=a.R8UI),Q===a.UNSIGNED_SHORT&&(de=a.R16UI),Q===a.UNSIGNED_INT&&(de=a.R32UI),Q===a.BYTE&&(de=a.R8I),Q===a.SHORT&&(de=a.R16I),Q===a.INT&&(de=a.R32I)),M===a.RG&&(Q===a.FLOAT&&(de=a.RG32F),Q===a.HALF_FLOAT&&(de=a.RG16F),Q===a.UNSIGNED_BYTE&&(de=a.RG8),Q===a.UNSIGNED_SHORT&&Ue&&(de=Ue.RG16_EXT),Q===a.SHORT&&Ue&&(de=Ue.RG16_SNORM_EXT)),M===a.RG_INTEGER&&(Q===a.UNSIGNED_BYTE&&(de=a.RG8UI),Q===a.UNSIGNED_SHORT&&(de=a.RG16UI),Q===a.UNSIGNED_INT&&(de=a.RG32UI),Q===a.BYTE&&(de=a.RG8I),Q===a.SHORT&&(de=a.RG16I),Q===a.INT&&(de=a.RG32I)),M===a.RGB_INTEGER&&(Q===a.UNSIGNED_BYTE&&(de=a.RGB8UI),Q===a.UNSIGNED_SHORT&&(de=a.RGB16UI),Q===a.UNSIGNED_INT&&(de=a.RGB32UI),Q===a.BYTE&&(de=a.RGB8I),Q===a.SHORT&&(de=a.RGB16I),Q===a.INT&&(de=a.RGB32I)),M===a.RGBA_INTEGER&&(Q===a.UNSIGNED_BYTE&&(de=a.RGBA8UI),Q===a.UNSIGNED_SHORT&&(de=a.RGBA16UI),Q===a.UNSIGNED_INT&&(de=a.RGBA32UI),Q===a.BYTE&&(de=a.RGBA8I),Q===a.SHORT&&(de=a.RGBA16I),Q===a.INT&&(de=a.RGBA32I)),M===a.RGB&&(Q===a.UNSIGNED_SHORT&&Ue&&(de=Ue.RGB16_EXT),Q===a.SHORT&&Ue&&(de=Ue.RGB16_SNORM_EXT),Q===a.UNSIGNED_INT_5_9_9_9_REV&&(de=a.RGB9_E5),Q===a.UNSIGNED_INT_10F_11F_11F_REV&&(de=a.R11F_G11F_B10F)),M===a.RGBA){const me=Re?Uu:St.getTransfer(he);Q===a.FLOAT&&(de=a.RGBA32F),Q===a.HALF_FLOAT&&(de=a.RGBA16F),Q===a.UNSIGNED_BYTE&&(de=me===Bt?a.SRGB8_ALPHA8:a.RGBA8),Q===a.UNSIGNED_SHORT&&Ue&&(de=Ue.RGBA16_EXT),Q===a.SHORT&&Ue&&(de=Ue.RGBA16_SNORM_EXT),Q===a.UNSIGNED_SHORT_4_4_4_4&&(de=a.RGBA4),Q===a.UNSIGNED_SHORT_5_5_5_1&&(de=a.RGB5_A1)}return(de===a.R16F||de===a.R32F||de===a.RG16F||de===a.RG32F||de===a.RGBA16F||de===a.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function F(U,M){let Q;return U?M===null||M===ea||M===bl?Q=a.DEPTH24_STENCIL8:M===Zi?Q=a.DEPTH32F_STENCIL8:M===Sl&&(Q=a.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ea||M===bl?Q=a.DEPTH_COMPONENT24:M===Zi?Q=a.DEPTH_COMPONENT32F:M===Sl&&(Q=a.DEPTH_COMPONENT16),Q}function N(U,M){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==On&&U.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function z(U){const M=U.target;M.removeEventListener("dispose",z),O(M),M.isVideoTexture&&g.delete(M),M.isHTMLTexture&&v.delete(M)}function T(U){const M=U.target;M.removeEventListener("dispose",T),k(M)}function O(U){const M=r.get(U);if(M.__webglInit===void 0)return;const Q=U.source,re=b.get(Q);if(re){const he=re[M.__cacheKey];he.usedTimes--,he.usedTimes===0&&j(U),Object.keys(re).length===0&&b.delete(Q)}r.remove(U)}function j(U){const M=r.get(U);a.deleteTexture(M.__webglTexture);const Q=U.source,re=b.get(Q);delete re[M.__cacheKey],u.memory.textures--}function k(U){const M=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let he=0;he<M.__webglFramebuffer[re].length;he++)a.deleteFramebuffer(M.__webglFramebuffer[re][he]);else a.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)a.deleteFramebuffer(M.__webglFramebuffer[re]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=U.textures;for(let re=0,he=Q.length;re<he;re++){const Re=r.get(Q[re]);Re.__webglTexture&&(a.deleteTexture(Re.__webglTexture),u.memory.textures--),r.remove(Q[re])}r.remove(U)}let K=0;function fe(){K=0}function pe(){return K}function $(U){K=U}function B(){const U=K;return U>=o.maxTextures&&at("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),K+=1,U}function G(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function J(U,M){const Q=r.get(U);if(U.isVideoTexture&&Y(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const re=U.image;if(re===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(Q,U,M);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,Q.__webglTexture,a.TEXTURE0+M)}function xe(U,M){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Ge(Q,U,M);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,Q.__webglTexture,a.TEXTURE0+M)}function Te(U,M){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Ge(Q,U,M);return}n.bindTexture(a.TEXTURE_3D,Q.__webglTexture,a.TEXTURE0+M)}function L(U,M){const Q=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Q.__version!==U.version){nt(Q,U,M);return}n.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture,a.TEXTURE0+M)}const V={[pp]:a.REPEAT,[Ca]:a.CLAMP_TO_EDGE,[mp]:a.MIRRORED_REPEAT},_e={[On]:a.NEAREST,[PA]:a.NEAREST_MIPMAP_NEAREST,[Xc]:a.NEAREST_MIPMAP_LINEAR,[zn]:a.LINEAR,[gh]:a.LINEAR_MIPMAP_NEAREST,[$r]:a.LINEAR_MIPMAP_LINEAR},Ae={[BA]:a.NEVER,[kA]:a.ALWAYS,[zA]:a.LESS,[bm]:a.LEQUAL,[HA]:a.EQUAL,[Mm]:a.GEQUAL,[GA]:a.GREATER,[VA]:a.NOTEQUAL};function Ne(U,M){if(M.type===Zi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===gh||M.magFilter===Xc||M.magFilter===$r||M.minFilter===zn||M.minFilter===gh||M.minFilter===Xc||M.minFilter===$r)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,V[M.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,V[M.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,V[M.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,_e[M.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,Ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===On||M.minFilter!==Xc&&M.minFilter!==$r||M.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ne(U,M){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",z));const re=M.source;let he=b.get(re);he===void 0&&(he={},b.set(re,he));const Re=G(M);if(Re!==U.__cacheKey){he[Re]===void 0&&(he[Re]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),he[Re].usedTimes++;const Ue=he[U.__cacheKey];Ue!==void 0&&(he[U.__cacheKey].usedTimes--,Ue.usedTimes===0&&j(M)),U.__cacheKey=Re,U.__webglTexture=he[Re].texture}return Q}function be(U,M,Q){return Math.floor(Math.floor(U/Q)/M)}function Ee(U,M,Q,re){const Re=U.updateRanges;if(Re.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,M.width,M.height,Q,re,M.data);else{Re.sort((ze,Pe)=>ze.start-Pe.start);let Ue=0;for(let ze=1;ze<Re.length;ze++){const Pe=Re[Ue],Le=Re[ze],Ke=Pe.start+Pe.count,$e=be(Le.start,M.width,4),it=be(Pe.start,M.width,4);Le.start<=Ke+1&&$e===it&&be(Le.start+Le.count-1,M.width,4)===$e?Pe.count=Math.max(Pe.count,Le.start+Le.count-Pe.start):(++Ue,Re[Ue]=Le)}Re.length=Ue+1;const de=n.getParameter(a.UNPACK_ROW_LENGTH),me=n.getParameter(a.UNPACK_SKIP_PIXELS),Ce=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,M.width);for(let ze=0,Pe=Re.length;ze<Pe;ze++){const Le=Re[ze],Ke=Math.floor(Le.start/4),$e=Math.ceil(Le.count/4),it=Ke%M.width,X=Math.floor(Ke/M.width),we=$e,ve=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,it),n.pixelStorei(a.UNPACK_SKIP_ROWS,X),n.texSubImage2D(a.TEXTURE_2D,0,it,X,we,ve,Q,re,M.data)}U.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,de),n.pixelStorei(a.UNPACK_SKIP_PIXELS,me),n.pixelStorei(a.UNPACK_SKIP_ROWS,Ce)}}function Ge(U,M,Q){let re=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=a.TEXTURE_3D);const he=ne(U,M),Re=M.source;n.bindTexture(re,U.__webglTexture,a.TEXTURE0+Q);const Ue=r.get(Re);if(Re.version!==Ue.__version||he===!0){if(n.activeTexture(a.TEXTURE0+Q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ve=St.getPrimaries(St.workingColorSpace),De=M.colorSpace===vr?null:St.getPrimaries(M.colorSpace),Be=M.colorSpace===vr||ve===De?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}n.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment);let me=S(M.image,!1,o.maxTextureSize);me=zt(M,me);const Ce=c.convert(M.format,M.colorSpace),ze=c.convert(M.type);let Pe=D(M.internalFormat,Ce,ze,M.normalized,M.colorSpace,M.isVideoTexture);Ne(re,M);let Le;const Ke=M.mipmaps,$e=M.isVideoTexture!==!0,it=Ue.__version===void 0||he===!0,X=Re.dataReady,we=N(M,me);if(M.isDepthTexture)Pe=F(M.format===Jr,M.type),it&&($e?n.texStorage2D(a.TEXTURE_2D,1,Pe,me.width,me.height):n.texImage2D(a.TEXTURE_2D,0,Pe,me.width,me.height,0,Ce,ze,null));else if(M.isDataTexture)if(Ke.length>0){$e&&it&&n.texStorage2D(a.TEXTURE_2D,we,Pe,Ke[0].width,Ke[0].height);for(let ve=0,De=Ke.length;ve<De;ve++)Le=Ke[ve],$e?X&&n.texSubImage2D(a.TEXTURE_2D,ve,0,0,Le.width,Le.height,Ce,ze,Le.data):n.texImage2D(a.TEXTURE_2D,ve,Pe,Le.width,Le.height,0,Ce,ze,Le.data);M.generateMipmaps=!1}else $e?(it&&n.texStorage2D(a.TEXTURE_2D,we,Pe,me.width,me.height),X&&Ee(M,me,Ce,ze)):n.texImage2D(a.TEXTURE_2D,0,Pe,me.width,me.height,0,Ce,ze,me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&it&&n.texStorage3D(a.TEXTURE_2D_ARRAY,we,Pe,Ke[0].width,Ke[0].height,me.depth);for(let ve=0,De=Ke.length;ve<De;ve++)if(Le=Ke[ve],M.format!==Fi)if(Ce!==null)if($e){if(X)if(M.layerUpdates.size>0){const Be=m_(Le.width,Le.height,M.format,M.type);for(const Me of M.layerUpdates){const Ye=Le.data.subarray(Me*Be/Le.data.BYTES_PER_ELEMENT,(Me+1)*Be/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,Me,Le.width,Le.height,1,Ce,Ye)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Le.width,Le.height,me.depth,Ce,Le.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ve,Pe,Le.width,Le.height,me.depth,0,Le.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?X&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Le.width,Le.height,me.depth,Ce,ze,Le.data):n.texImage3D(a.TEXTURE_2D_ARRAY,ve,Pe,Le.width,Le.height,me.depth,0,Ce,ze,Le.data)}else{$e&&it&&n.texStorage2D(a.TEXTURE_2D,we,Pe,Ke[0].width,Ke[0].height);for(let ve=0,De=Ke.length;ve<De;ve++)Le=Ke[ve],M.format!==Fi?Ce!==null?$e?X&&n.compressedTexSubImage2D(a.TEXTURE_2D,ve,0,0,Le.width,Le.height,Ce,Le.data):n.compressedTexImage2D(a.TEXTURE_2D,ve,Pe,Le.width,Le.height,0,Le.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?X&&n.texSubImage2D(a.TEXTURE_2D,ve,0,0,Le.width,Le.height,Ce,ze,Le.data):n.texImage2D(a.TEXTURE_2D,ve,Pe,Le.width,Le.height,0,Ce,ze,Le.data)}else if(M.isDataArrayTexture)if($e){if(it&&n.texStorage3D(a.TEXTURE_2D_ARRAY,we,Pe,me.width,me.height,me.depth),X)if(M.layerUpdates.size>0){const ve=m_(me.width,me.height,M.format,M.type);for(const De of M.layerUpdates){const Be=me.data.subarray(De*ve/me.data.BYTES_PER_ELEMENT,(De+1)*ve/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,De,me.width,me.height,1,Ce,ze,Be)}M.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ce,ze,me.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Pe,me.width,me.height,me.depth,0,Ce,ze,me.data);else if(M.isData3DTexture)$e?(it&&n.texStorage3D(a.TEXTURE_3D,we,Pe,me.width,me.height,me.depth),X&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ce,ze,me.data)):n.texImage3D(a.TEXTURE_3D,0,Pe,me.width,me.height,me.depth,0,Ce,ze,me.data);else if(M.isFramebufferTexture){if(it)if($e)n.texStorage2D(a.TEXTURE_2D,we,Pe,me.width,me.height);else{let ve=me.width,De=me.height;for(let Be=0;Be<we;Be++)n.texImage2D(a.TEXTURE_2D,Be,Pe,ve,De,0,Ce,ze,null),ve>>=1,De>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in a){const ve=a.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),me.parentNode!==ve){ve.appendChild(me),v.add(M),ve.onpaint=De=>{const Be=De.changedElements;for(const Me of v)Be.includes(Me.image)&&(Me.needsUpdate=!0)},ve.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,me);else{const Be=a.RGBA,Me=a.RGBA,Ye=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Be,Me,Ye,me)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ke.length>0){if($e&&it){const ve=wt(Ke[0]);n.texStorage2D(a.TEXTURE_2D,we,Pe,ve.width,ve.height)}for(let ve=0,De=Ke.length;ve<De;ve++)Le=Ke[ve],$e?X&&n.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ce,ze,Le):n.texImage2D(a.TEXTURE_2D,ve,Pe,Ce,ze,Le);M.generateMipmaps=!1}else if($e){if(it){const ve=wt(me);n.texStorage2D(a.TEXTURE_2D,we,Pe,ve.width,ve.height)}X&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ce,ze,me)}else n.texImage2D(a.TEXTURE_2D,0,Pe,Ce,ze,me);_(M)&&P(re),Ue.__version=Re.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function nt(U,M,Q){if(M.image.length!==6)return;const re=ne(U,M),he=M.source;n.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+Q);const Re=r.get(he);if(he.version!==Re.__version||re===!0){n.activeTexture(a.TEXTURE0+Q);const Ue=St.getPrimaries(St.workingColorSpace),de=M.colorSpace===vr?null:St.getPrimaries(M.colorSpace),me=M.colorSpace===vr||Ue===de?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let Me=0;Me<6;Me++)!Ce&&!ze?Pe[Me]=S(M.image[Me],!0,o.maxCubemapSize):Pe[Me]=ze?M.image[Me].image:M.image[Me],Pe[Me]=zt(M,Pe[Me]);const Le=Pe[0],Ke=c.convert(M.format,M.colorSpace),$e=c.convert(M.type),it=D(M.internalFormat,Ke,$e,M.normalized,M.colorSpace),X=M.isVideoTexture!==!0,we=Re.__version===void 0||re===!0,ve=he.dataReady;let De=N(M,Le);Ne(a.TEXTURE_CUBE_MAP,M);let Be;if(Ce){X&&we&&n.texStorage2D(a.TEXTURE_CUBE_MAP,De,it,Le.width,Le.height);for(let Me=0;Me<6;Me++){Be=Pe[Me].mipmaps;for(let Ye=0;Ye<Be.length;Ye++){const ke=Be[Ye];M.format!==Fi?Ke!==null?X?ve&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,0,0,ke.width,ke.height,Ke,ke.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,it,ke.width,ke.height,0,ke.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ve&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,0,0,ke.width,ke.height,Ke,$e,ke.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,it,ke.width,ke.height,0,Ke,$e,ke.data)}}}else{if(Be=M.mipmaps,X&&we){Be.length>0&&De++;const Me=wt(Pe[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,De,it,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(ze){X?ve&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Pe[Me].width,Pe[Me].height,Ke,$e,Pe[Me].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,it,Pe[Me].width,Pe[Me].height,0,Ke,$e,Pe[Me].data);for(let Ye=0;Ye<Be.length;Ye++){const Kt=Be[Ye].image[Me].image;X?ve&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,0,0,Kt.width,Kt.height,Ke,$e,Kt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,it,Kt.width,Kt.height,0,Ke,$e,Kt.data)}}else{X?ve&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ke,$e,Pe[Me]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,it,Ke,$e,Pe[Me]);for(let Ye=0;Ye<Be.length;Ye++){const ke=Be[Ye];X?ve&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,0,0,Ke,$e,ke.image[Me]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,it,Ke,$e,ke.image[Me])}}}_(M)&&P(a.TEXTURE_CUBE_MAP),Re.__version=he.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Qe(U,M,Q,re,he,Re){const Ue=c.convert(Q.format,Q.colorSpace),de=c.convert(Q.type),me=D(Q.internalFormat,Ue,de,Q.normalized,Q.colorSpace),Ce=r.get(M),ze=r.get(Q);if(ze.__renderTarget=M,!Ce.__hasExternalTextures){const Pe=Math.max(1,M.width>>Re),Le=Math.max(1,M.height>>Re);he===a.TEXTURE_3D||he===a.TEXTURE_2D_ARRAY?n.texImage3D(he,Re,me,Pe,Le,M.depth,0,Ue,de,null):n.texImage2D(he,Re,me,Pe,Le,0,Ue,de,null)}n.bindFramebuffer(a.FRAMEBUFFER,U),sn(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,re,he,ze.__webglTexture,0,Xt(M)):(he===a.TEXTURE_2D||he>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,re,he,ze.__webglTexture,Re),n.bindFramebuffer(a.FRAMEBUFFER,null)}function qt(U,M,Q){if(a.bindRenderbuffer(a.RENDERBUFFER,U),M.depthBuffer){const re=M.depthTexture,he=re&&re.isDepthTexture?re.type:null,Re=F(M.stencilBuffer,he),Ue=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;sn(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Xt(M),Re,M.width,M.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Xt(M),Re,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,Re,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ue,a.RENDERBUFFER,U)}else{const re=M.textures;for(let he=0;he<re.length;he++){const Re=re[he],Ue=c.convert(Re.format,Re.colorSpace),de=c.convert(Re.type),me=D(Re.internalFormat,Ue,de,Re.normalized,Re.colorSpace);sn(M)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Xt(M),me,M.width,M.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Xt(M),me,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,me,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ft(U,M,Q){const re=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(M.depthTexture);if(he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),re){if(he.__webglInit===void 0&&(he.__webglInit=!0,M.depthTexture.addEventListener("dispose",z)),he.__webglTexture===void 0){he.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),Ne(a.TEXTURE_CUBE_MAP,M.depthTexture);const Ce=c.convert(M.depthTexture.format),ze=c.convert(M.depthTexture.type);let Pe;M.depthTexture.format===Pa?Pe=a.DEPTH_COMPONENT24:M.depthTexture.format===Jr&&(Pe=a.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Pe,M.width,M.height,0,Ce,ze,null)}}else J(M.depthTexture,0);const Re=he.__webglTexture,Ue=Xt(M),de=re?a.TEXTURE_CUBE_MAP_POSITIVE_X+Q:a.TEXTURE_2D,me=M.depthTexture.format===Jr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(M.depthTexture.format===Pa)sn(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,de,Re,0,Ue):a.framebufferTexture2D(a.FRAMEBUFFER,me,de,Re,0);else if(M.depthTexture.format===Jr)sn(M)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,de,Re,0,Ue):a.framebufferTexture2D(a.FRAMEBUFFER,me,de,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(U){const M=r.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const re=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const he=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",he)};re.addEventListener("dispose",he),M.__depthDisposeCallback=he}M.__boundDepthTexture=re}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if(Q)for(let re=0;re<6;re++)ft(M.__webglFramebuffer[re],U,re);else{const re=U.texture.mipmaps;re&&re.length>0?ft(M.__webglFramebuffer[0],U,0):ft(M.__webglFramebuffer,U,0)}else if(Q){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=a.createRenderbuffer(),qt(M.__webglDepthbuffer[re],U,!1);else{const he=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=M.__webglDepthbuffer[re];a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Re)}}else{const re=U.texture.mipmaps;if(re&&re.length>0?n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),qt(M.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Re)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function _t(U,M,Q){const re=r.get(U);M!==void 0&&Qe(re.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Q!==void 0&&vt(U)}function dt(U){const M=U.texture,Q=r.get(U),re=r.get(M);U.addEventListener("dispose",T);const he=U.textures,Re=U.isWebGLCubeRenderTarget===!0,Ue=he.length>1;if(Ue||(re.__webglTexture===void 0&&(re.__webglTexture=a.createTexture()),re.__version=M.version,u.memory.textures++),Re){Q.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[de]=[];for(let me=0;me<M.mipmaps.length;me++)Q.__webglFramebuffer[de][me]=a.createFramebuffer()}else Q.__webglFramebuffer[de]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)Q.__webglFramebuffer[de]=a.createFramebuffer()}else Q.__webglFramebuffer=a.createFramebuffer();if(Ue)for(let de=0,me=he.length;de<me;de++){const Ce=r.get(he[de]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=a.createTexture(),u.memory.textures++)}if(U.samples>0&&sn(U)===!1){Q.__webglMultisampledFramebuffer=a.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let de=0;de<he.length;de++){const me=he[de];Q.__webglColorRenderbuffer[de]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Q.__webglColorRenderbuffer[de]);const Ce=c.convert(me.format,me.colorSpace),ze=c.convert(me.type),Pe=D(me.internalFormat,Ce,ze,me.normalized,me.colorSpace,U.isXRRenderTarget===!0),Le=Xt(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,Le,Pe,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+de,a.RENDERBUFFER,Q.__webglColorRenderbuffer[de])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=a.createRenderbuffer(),qt(Q.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Re){n.bindTexture(a.TEXTURE_CUBE_MAP,re.__webglTexture),Ne(a.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Qe(Q.__webglFramebuffer[de][me],U,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else Qe(Q.__webglFramebuffer[de],U,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);_(M)&&P(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let de=0,me=he.length;de<me;de++){const Ce=he[de],ze=r.get(Ce);let Pe=a.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Pe=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Pe,ze.__webglTexture),Ne(Pe,Ce),Qe(Q.__webglFramebuffer,U,Ce,a.COLOR_ATTACHMENT0+de,Pe,0),_(Ce)&&P(Pe)}n.unbindTexture()}else{let de=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(de=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(de,re.__webglTexture),Ne(de,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)Qe(Q.__webglFramebuffer[me],U,M,a.COLOR_ATTACHMENT0,de,me);else Qe(Q.__webglFramebuffer,U,M,a.COLOR_ATTACHMENT0,de,0);_(M)&&P(de),n.unbindTexture()}U.depthBuffer&&vt(U)}function nn(U){const M=U.textures;for(let Q=0,re=M.length;Q<re;Q++){const he=M[Q];if(_(he)){const Re=I(U),Ue=r.get(he).__webglTexture;n.bindTexture(Re,Ue),P(Re),n.unbindTexture()}}}const an=[],rn=[];function un(U){if(U.samples>0){if(sn(U)===!1){const M=U.textures,Q=U.width,re=U.height;let he=a.COLOR_BUFFER_BIT;const Re=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ue=r.get(U),de=M.length>1;if(de)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const me=U.texture.mipmaps;me&&me.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=a.STENCIL_BUFFER_BIT)),de){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ce]);const ze=r.get(M[Ce]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ze,0)}a.blitFramebuffer(0,0,Q,re,0,0,Q,re,he,a.NEAREST),m===!0&&(an.length=0,rn.length=0,an.push(a.COLOR_ATTACHMENT0+Ce),U.depthBuffer&&U.resolveDepthBuffer===!1&&(an.push(Re),rn.push(Re),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,rn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,an))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),de)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ce]);const ze=r.get(M[Ce]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,ze,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const M=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function Xt(U){return Math.min(o.maxSamples,U.samples)}function sn(U){const M=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Y(U){const M=u.render.frame;g.get(U)!==M&&(g.set(U,M),U.update())}function zt(U,M){const Q=U.colorSpace,re=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==Nu&&Q!==vr&&(St.getTransfer(Q)===Bt?(re!==Fi||he!==Ei)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",Q)),M}function wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=B,this.resetTextureUnits=fe,this.getTextureUnits=pe,this.setTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=xe,this.setTexture3D=Te,this.setTextureCube=L,this.rebindTextures=_t,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function h3(a,e){function n(r,o=vr){let c;const u=St.getTransfer(o);if(r===Ei)return a.UNSIGNED_BYTE;if(r===xm)return a.UNSIGNED_SHORT_4_4_4_4;if(r===vm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Vy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===ky)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Hy)return a.BYTE;if(r===Gy)return a.SHORT;if(r===Sl)return a.UNSIGNED_SHORT;if(r===gm)return a.INT;if(r===ea)return a.UNSIGNED_INT;if(r===Zi)return a.FLOAT;if(r===Oa)return a.HALF_FLOAT;if(r===Wy)return a.ALPHA;if(r===Xy)return a.RGB;if(r===Fi)return a.RGBA;if(r===Pa)return a.DEPTH_COMPONENT;if(r===Jr)return a.DEPTH_STENCIL;if(r===qy)return a.RED;if(r===_m)return a.RED_INTEGER;if(r===ns)return a.RG;if(r===ym)return a.RG_INTEGER;if(r===Sm)return a.RGBA_INTEGER;if(r===yu||r===Su||r===bu||r===Mu)if(u===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===yu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===yu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gp||r===xp||r===vp||r===_p)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===gp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_p)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yp||r===Sp||r===bp||r===Mp||r===Ep||r===Cu||r===Tp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===yp||r===Sp)return u===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===bp)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Mp)return c.COMPRESSED_R11_EAC;if(r===Ep)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Cu)return c.COMPRESSED_RG11_EAC;if(r===Tp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ap||r===Rp||r===wp||r===Cp||r===Dp||r===Np||r===Up||r===Lp||r===Op||r===Pp||r===Ip||r===Fp||r===Bp||r===zp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ap)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rp)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wp)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cp)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dp)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Np)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Up)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lp)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Op)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pp)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ip)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fp)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bp)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zp)return u===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hp||r===Gp||r===Vp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Hp)return u===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kp||r===Wp||r===Du||r===Xp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===kp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Wp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Du)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const p3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new aS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new zi({vertexShader:p3,fragmentShader:m3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ia(new Xu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x3 extends as{constructor(e,n){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,b=null,E=null;const C=typeof XRWebGLBinding<"u",S=new g3,_={},P=n.getContextAttributes();let I=null,D=null;const F=[],N=[],z=new Dt;let T=null;const O=new Mi;O.viewport=new cn;const j=new Mi;j.viewport=new cn;const k=[O,j],K=new R1;let fe=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let be=F[ne];return be===void 0&&(be=new Eh,F[ne]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ne){let be=F[ne];return be===void 0&&(be=new Eh,F[ne]=be),be.getGripSpace()},this.getHand=function(ne){let be=F[ne];return be===void 0&&(be=new Eh,F[ne]=be),be.getHandSpace()};function $(ne){const be=N.indexOf(ne.inputSource);if(be===-1)return;const Ee=F[be];Ee!==void 0&&(Ee.update(ne.inputSource,ne.frame,p||u),Ee.dispatchEvent({type:ne.type,data:ne.inputSource}))}function B(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",G);for(let ne=0;ne<F.length;ne++){const be=N[ne];be!==null&&(N[ne]=null,F[ne].disconnect(be))}fe=null,pe=null,S.reset();for(const ne in _)delete _[ne];e.setRenderTarget(I),b=null,x=null,v=null,o=null,D=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",B),o.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ge=null,nt=null;P.depth&&(nt=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=P.stencil?Jr:Pa,Ge=P.stencil?bl:ea);const Qe={colorFormat:n.RGBA8,depthFormat:nt,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(Qe),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new $i(x.textureWidth,x.textureHeight,{format:Fi,type:Ei,depthTexture:new lo(x.textureWidth,x.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ee={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,n,Ee),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),D=new $i(b.framebufferWidth,b.framebufferHeight,{format:Fi,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(ne){for(let be=0;be<ne.removed.length;be++){const Ee=ne.removed[be],Ge=N.indexOf(Ee);Ge>=0&&(N[Ge]=null,F[Ge].disconnect(Ee))}for(let be=0;be<ne.added.length;be++){const Ee=ne.added[be];let Ge=N.indexOf(Ee);if(Ge===-1){for(let Qe=0;Qe<F.length;Qe++)if(Qe>=N.length){N.push(Ee),Ge=Qe;break}else if(N[Qe]===null){N[Qe]=Ee,Ge=Qe;break}if(Ge===-1)break}const nt=F[Ge];nt&&nt.connect(Ee)}}const J=new le,xe=new le;function Te(ne,be,Ee){J.setFromMatrixPosition(be.matrixWorld),xe.setFromMatrixPosition(Ee.matrixWorld);const Ge=J.distanceTo(xe),nt=be.projectionMatrix.elements,Qe=Ee.projectionMatrix.elements,qt=nt[14]/(nt[10]-1),ft=nt[14]/(nt[10]+1),vt=(nt[9]+1)/nt[5],_t=(nt[9]-1)/nt[5],dt=(nt[8]-1)/nt[0],nn=(Qe[8]+1)/Qe[0],an=qt*dt,rn=qt*nn,un=Ge/(-dt+nn),Xt=un*-dt;if(be.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Xt),ne.translateZ(un),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),nt[10]===-1)ne.projectionMatrix.copy(be.projectionMatrix),ne.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const sn=qt+un,Y=ft+un,zt=an-Xt,wt=rn+(Ge-Xt),U=vt*ft/Y*sn,M=_t*ft/Y*sn;ne.projectionMatrix.makePerspective(zt,wt,U,M,sn,Y),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function L(ne,be){be===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(be.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let be=ne.near,Ee=ne.far;S.texture!==null&&(S.depthNear>0&&(be=S.depthNear),S.depthFar>0&&(Ee=S.depthFar)),K.near=j.near=O.near=be,K.far=j.far=O.far=Ee,(fe!==K.near||pe!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),fe=K.near,pe=K.far),K.layers.mask=ne.layers.mask|6,O.layers.mask=K.layers.mask&-5,j.layers.mask=K.layers.mask&-3;const Ge=ne.parent,nt=K.cameras;L(K,Ge);for(let Qe=0;Qe<nt.length;Qe++)L(nt[Qe],Ge);nt.length===2?Te(K,O,j):K.projectionMatrix.copy(O.projectionMatrix),V(ne,K,Ge)};function V(ne,be,Ee){Ee===null?ne.matrix.copy(be.matrixWorld):(ne.matrix.copy(Ee.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(be.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(be.projectionMatrix),ne.projectionMatrixInverse.copy(be.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=qp*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(x===null&&b===null))return m},this.setFoveation=function(ne){m=ne,x!==null&&(x.fixedFoveation=ne),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(ne){return _[ne]};let _e=null;function Ae(ne,be){if(g=be.getViewerPose(p||u),E=be,g!==null){const Ee=g.views;b!==null&&(e.setRenderTargetFramebuffer(D,b.framebuffer),e.setRenderTarget(D));let Ge=!1;Ee.length!==K.cameras.length&&(K.cameras.length=0,Ge=!0);for(let ft=0;ft<Ee.length;ft++){const vt=Ee[ft];let _t=null;if(b!==null)_t=b.getViewport(vt);else{const nn=v.getViewSubImage(x,vt);_t=nn.viewport,ft===0&&(e.setRenderTargetTextures(D,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(D))}let dt=k[ft];dt===void 0&&(dt=new Mi,dt.layers.enable(ft),dt.viewport=new cn,k[ft]=dt),dt.matrix.fromArray(vt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(vt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(_t.x,_t.y,_t.width,_t.height),ft===0&&(K.matrix.copy(dt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ge===!0&&K.cameras.push(dt)}const nt=o.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const ft=v.getDepthInformation(Ee[0]);ft&&ft.isValid&&ft.texture&&S.init(ft,o.renderState)}if(nt&&nt.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let ft=0;ft<Ee.length;ft++){const vt=Ee[ft].camera;if(vt){let _t=_[vt];_t||(_t=new aS,_[vt]=_t);const dt=v.getCameraImage(vt);_t.sourceTexture=dt}}}}for(let Ee=0;Ee<F.length;Ee++){const Ge=N[Ee],nt=F[Ee];Ge!==null&&nt!==void 0&&nt.update(Ge,be,p||u)}_e&&_e(ne,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),E=null}const Ne=new lS;Ne.setAnimationLoop(Ae),this.setAnimationLoop=function(ne){_e=ne},this.dispose=function(){}}}const v3=new pn,mS=new st;mS.set(-1,0,0,0,1,0,0,0,1);function _3(a,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,rS(a)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,P,I,D){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?c(S,_):_.isMeshLambertMaterial?(c(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(S,_),v(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&b(S,_,D)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),C(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,P,I):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Qn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Qn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const P=e.get(_),I=P.envMap,D=P.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(v3.makeRotationFromEuler(D)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(mS),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,P,I){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*P,S.scale.value=I*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function b(S,_,P){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Qn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function C(S,_){const P=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function y3(a,e,n,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,F){const N=F.program;r.uniformBlockBinding(D,N)}function p(D,F){let N=o[D.id];N===void 0&&(S(D),N=g(D),o[D.id]=N,D.addEventListener("dispose",P));const z=F.program;r.updateUBOMapping(D,z);const T=e.render.frame;c[D.id]!==T&&(x(D),c[D.id]=T)}function g(D){const F=v();D.__bindingPointIndex=F;const N=a.createBuffer(),z=D.__size,T=D.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,z,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,F,N),N}function v(){for(let D=0;D<h;D++)if(u.indexOf(D)===-1)return u.push(D),D;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const F=o[D.id],N=D.uniforms,z=D.__cache;a.bindBuffer(a.UNIFORM_BUFFER,F);for(let T=0,O=N.length;T<O;T++){const j=N[T];if(Array.isArray(j))for(let k=0,K=j.length;k<K;k++)b(j[k],T,k,z);else b(j,T,0,z)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function b(D,F,N,z){if(C(D,F,N,z)===!0){const T=D.__offset,O=D.value;if(Array.isArray(O)){let j=0;for(let k=0;k<O.length;k++){const K=O[k],fe=_(K);E(K,D.__data,j),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(j+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(O,D.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,D.__data)}}function E(D,F,N){typeof D=="number"||typeof D=="boolean"?F[0]=D:D.isMatrix3?(F[0]=D.elements[0],F[1]=D.elements[1],F[2]=D.elements[2],F[3]=0,F[4]=D.elements[3],F[5]=D.elements[4],F[6]=D.elements[5],F[7]=0,F[8]=D.elements[6],F[9]=D.elements[7],F[10]=D.elements[8],F[11]=0):ArrayBuffer.isView(D)?F.set(new D.constructor(D.buffer,D.byteOffset,F.length)):D.toArray(F,N)}function C(D,F,N,z){const T=D.value,O=F+"_"+N;if(z[O]===void 0)return typeof T=="number"||typeof T=="boolean"?z[O]=T:ArrayBuffer.isView(T)?z[O]=T.slice():z[O]=T.clone(),!0;{const j=z[O];if(typeof T=="number"||typeof T=="boolean"){if(j!==T)return z[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(j.equals(T)===!1)return j.copy(T),!0}}return!1}function S(D){const F=D.uniforms;let N=0;const z=16;for(let O=0,j=F.length;O<j;O++){const k=Array.isArray(F[O])?F[O]:[F[O]];for(let K=0,fe=k.length;K<fe;K++){const pe=k[K],$=Array.isArray(pe.value)?pe.value:[pe.value];for(let B=0,G=$.length;B<G;B++){const J=$[B],xe=_(J),Te=N%z,L=Te%xe.boundary,V=Te+L;N+=L,V!==0&&z-V<xe.storage&&(N+=z-V),pe.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=N,N+=xe.storage}}}const T=N%z;return T>0&&(N+=z-T),D.__size=N,D.__cache={},this}function _(D){const F={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(F.boundary=4,F.storage=4):D.isVector2?(F.boundary=8,F.storage=8):D.isVector3||D.isColor?(F.boundary=16,F.storage=12):D.isVector4?(F.boundary=16,F.storage=16):D.isMatrix3?(F.boundary=48,F.storage=48):D.isMatrix4?(F.boundary=64,F.storage=64):D.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(F.boundary=16,F.storage=D.byteLength):at("WebGLRenderer: Unsupported uniform value type.",D),F}function P(D){const F=D.target;F.removeEventListener("dispose",P);const N=u.indexOf(F.__bindingPointIndex);u.splice(N,1),a.deleteBuffer(o[F.id]),delete o[F.id],delete c[F.id]}function I(){for(const D in o)a.deleteBuffer(o[D]);u=[],o={},c={}}return{bind:m,update:p,dispose:I}}const S3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function b3(){return Yi===null&&(Yi=new p1(S3,16,16,ns,Oa),Yi.name="DFG_LUT",Yi.minFilter=zn,Yi.magFilter=zn,Yi.wrapS=Ca,Yi.wrapT=Ca,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class M3{constructor(e={}){const{canvas:n=XA(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1,outputBufferType:b=Ei}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const C=b,S=new Set([Sm,ym,_m]),_=new Set([Ei,ea,Sl,bl,xm,vm]),P=new Uint32Array(4),I=new Int32Array(4),D=new le;let F=null,N=null;const z=[],T=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let k=!1,K=null,fe=null,pe=null,$=null;this._outputColorSpace=di;let B=0,G=0,J=null,xe=-1,Te=null;const L=new cn,V=new cn;let _e=null;const Ae=new Mt(0);let Ne=0,ne=n.width,be=n.height,Ee=1,Ge=null,nt=null;const Qe=new cn(0,0,ne,be),qt=new cn(0,0,ne,be);let ft=!1;const vt=new tS;let _t=!1,dt=!1;const nn=new pn,an=new le,rn=new cn,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function sn(){return J===null?Ee:1}let Y=r;function zt(A,q){return n.getContext(A,q)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mm}`),n.addEventListener("webglcontextlost",Kt,!1),n.addEventListener("webglcontextrestored",Ut,!1),n.addEventListener("webglcontextcreationerror",Jn,!1),Y===null){const q="webgl2";if(Y=zt(q,A),Y===null)throw zt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let wt,U,M,Q,re,he,Re,Ue,de,me,Ce,ze,Pe,Le,Ke,$e,it,X,we,ve,De,Be,Me;function Ye(){wt=new bC(Y),wt.init(),De=new h3(Y,wt),U=new pC(Y,wt,e,De),M=new f3(Y,wt),U.reversedDepthBuffer&&x&&M.buffers.depth.setReversed(!0),fe=Y.createFramebuffer(),pe=Y.createFramebuffer(),$=Y.createFramebuffer(),Q=new TC(Y),re=new Q2,he=new d3(Y,wt,M,re,U,De,Q),Re=new SC(j),Ue=new C1(Y),Be=new dC(Y,Ue),de=new MC(Y,Ue,Q,Be),me=new RC(Y,de,Ue,Be,Q),X=new AC(Y,U,he),Ke=new mC(re),Ce=new K2(j,Re,wt,U,Be,Ke),ze=new _3(j,re),Pe=new J2,Le=new r3(wt),it=new fC(j,Re,M,me,E,m),$e=new u3(j,me,U),Me=new y3(Y,Q,U,M),we=new hC(Y,wt,Q),ve=new EC(Y,wt,Q),Q.programs=Ce.programs,j.capabilities=U,j.extensions=wt,j.properties=re,j.renderLists=Pe,j.shadowMap=$e,j.state=M,j.info=Q}Ye(),C!==Ei&&(O=new CC(C,n.width,n.height,h,o,c));const ke=new x3(j,Y);this.xr=ke,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(ne,be,!1))},this.getSize=function(A){return A.set(ne,be)},this.setSize=function(A,q,se=!0){if(ke.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,be=q,n.width=Math.floor(A*Ee),n.height=Math.floor(q*Ee),se===!0&&(n.style.width=A+"px",n.style.height=q+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ne*Ee,be*Ee).floor()},this.setDrawingBufferSize=function(A,q,se){ne=A,be=q,Ee=se,n.width=Math.floor(A*se),n.height=Math.floor(q*se),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===Ei){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(Qe)},this.setViewport=function(A,q,se,ie){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,q,se,ie),M.viewport(L.copy(Qe).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(qt)},this.setScissor=function(A,q,se,ie){A.isVector4?qt.set(A.x,A.y,A.z,A.w):qt.set(A,q,se,ie),M.scissor(V.copy(qt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){M.setScissorTest(ft=A)},this.setOpaqueSort=function(A){Ge=A},this.setTransparentSort=function(A){nt=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,se=!0){let ie=0;if(A){let ae=!1;if(J!==null){const Ie=J.texture.format;ae=S.has(Ie)}if(ae){const Ie=J.texture.type,Ve=_.has(Ie),Oe=it.getClearColor(),Xe=it.getClearAlpha(),We=Oe.r,Je=Oe.g,ot=Oe.b;Ve?(P[0]=We,P[1]=Je,P[2]=ot,P[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,P)):(I[0]=We,I[1]=Je,I[2]=ot,I[3]=Xe,Y.clearBufferiv(Y.COLOR,0,I))}else ie|=Y.COLOR_BUFFER_BIT}q&&(ie|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ie|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&Y.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Kt,!1),n.removeEventListener("webglcontextrestored",Ut,!1),n.removeEventListener("webglcontextcreationerror",Jn,!1),it.dispose(),Pe.dispose(),Le.dispose(),re.dispose(),Re.dispose(),me.dispose(),Be.dispose(),Me.dispose(),Ce.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",mn),ke.removeEventListener("sessionend",Cn),kn.stop()};function Kt(A){A.preventDefault(),Yv("WebGLRenderer: Context Lost."),k=!0}function Ut(){Yv("WebGLRenderer: Context Restored."),k=!1;const A=Q.autoReset,q=$e.enabled,se=$e.autoUpdate,ie=$e.needsUpdate,ae=$e.type;Ye(),Q.autoReset=A,$e.enabled=q,$e.autoUpdate=se,$e.needsUpdate=ie,$e.type=ae}function Jn(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ei(A){const q=A.target;q.removeEventListener("dispose",ei),mo(q)}function mo(A){go(A),re.remove(A)}function go(A){const q=re.get(A).programs;q!==void 0&&(q.forEach(function(se){Ce.releaseProgram(se)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,se,ie,ae,Ie){q===null&&(q=un);const Ve=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Oe=Ga(A,q,se,ie,ae);M.setMaterial(ie,Ve);let Xe=se.index,We=1;if(ie.wireframe===!0){if(Xe=de.getWireframeAttribute(se),Xe===void 0)return;We=2}const Je=se.drawRange,ot=se.attributes.position;let Ze=Je.start*We,Tt=(Je.start+Je.count)*We;Ie!==null&&(Ze=Math.max(Ze,Ie.start*We),Tt=Math.min(Tt,(Ie.start+Ie.count)*We)),Xe!==null?(Ze=Math.max(Ze,0),Tt=Math.min(Tt,Xe.count)):ot!=null&&(Ze=Math.max(Ze,0),Tt=Math.min(Tt,ot.count));const Qt=Tt-Ze;if(Qt<0||Qt===1/0)return;Be.setup(ae,ie,Oe,se,Xe);let kt,Lt=we;if(Xe!==null&&(kt=Ue.get(Xe),Lt=ve,Lt.setIndex(kt)),ae.isMesh)ie.wireframe===!0?(M.setLineWidth(ie.wireframeLinewidth*sn()),Lt.setMode(Y.LINES)):Lt.setMode(Y.TRIANGLES);else if(ae.isLine){let Ot=ie.linewidth;Ot===void 0&&(Ot=1),M.setLineWidth(Ot*sn()),ae.isLineSegments?Lt.setMode(Y.LINES):ae.isLineLoop?Lt.setMode(Y.LINE_LOOP):Lt.setMode(Y.LINE_STRIP)}else ae.isPoints?Lt.setMode(Y.POINTS):ae.isSprite&&Lt.setMode(Y.TRIANGLES);if(ae.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Ot=ae._multiDrawStarts,He=ae._multiDrawCounts,Pn=ae._multiDrawCount,ht=Xe?Ue.get(Xe).bytesPerElement:1,bn=re.get(ie).currentProgram.getUniforms();for(let ti=0;ti<Pn;ti++)bn.setValue(Y,"_gl_DrawID",ti),Lt.render(Ot[ti]/ht,He[ti])}else if(ae.isInstancedMesh)Lt.renderInstances(Ze,Qt,ae.count);else if(se.isInstancedBufferGeometry){const Ot=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,He=Math.min(se.instanceCount,Ot);Lt.renderInstances(Ze,Qt,He)}else Lt.render(Ze,Qt)};function xo(A,q,se){A.transparent===!0&&A.side===wa&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,Ha(A,q,se),A.side=br,A.needsUpdate=!0,Ha(A,q,se),A.side=wa):Ha(A,q,se)}this.compile=function(A,q,se=null){se===null&&(se=A),N=Le.get(se),N.init(q),T.push(N),se.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(N.pushLight(ae),ae.castShadow&&N.pushShadow(ae))}),A!==se&&A.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(N.pushLight(ae),ae.castShadow&&N.pushShadow(ae))}),N.setupLights();const ie=new Set;return A.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Ie=ae.material;if(Ie)if(Array.isArray(Ie))for(let Ve=0;Ve<Ie.length;Ve++){const Oe=Ie[Ve];xo(Oe,se,ae),ie.add(Oe)}else xo(Ie,se,ae),ie.add(Ie)}),N=T.pop(),ie},this.compileAsync=function(A,q,se=null){const ie=this.compile(A,q,se);return new Promise(ae=>{function Ie(){if(ie.forEach(function(Ve){re.get(Ve).currentProgram.isReady()&&ie.delete(Ve)}),ie.size===0){ae(A);return}setTimeout(Ie,10)}wt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let rs=null;function Hi(A){rs&&rs(A)}function mn(){kn.stop()}function Cn(){kn.start()}const kn=new lS;kn.setAnimationLoop(Hi),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(A){rs=A,ke.setAnimationLoop(A),A===null?kn.stop():kn.start()},ke.addEventListener("sessionstart",mn),ke.addEventListener("sessionend",Cn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;K!==null&&K.renderStart(A,q);const se=ke.enabled===!0&&ke.isPresenting===!0,ie=O!==null&&(J===null||se)&&O.begin(j,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(q),q=ke.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,q,J),N=Le.get(A,T.length),N.init(q),N.state.textureUnits=he.getTextureUnits(),T.push(N),nn.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),vt.setFromProjectionMatrix(nn,Ki,q.reversedDepth),dt=this.localClippingEnabled,_t=Ke.init(this.clippingPlanes,dt),F=Pe.get(A,z.length),F.init(),z.push(F),ke.enabled===!0&&ke.isPresenting===!0){const Ve=j.xr.getDepthSensingMesh();Ve!==null&&Mr(Ve,q,-1/0,j.sortObjects)}Mr(A,q,0,j.sortObjects),F.finish(),j.sortObjects===!0&&F.sort(Ge,nt,q.reversedDepth),Xt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Xt&&it.addToRenderList(F,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&Ke.beginShadows();const ae=N.state.shadowsArray;if($e.render(ae,A,q),_t===!0&&Ke.endShadows(),(ie&&O.hasRenderPass())===!1){const Ve=F.opaque,Oe=F.transmissive;if(N.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Oe.length>0)for(let We=0,Je=Xe.length;We<Je;We++){const ot=Xe[We];Ll(Ve,Oe,A,ot)}Xt&&it.render(A);for(let We=0,Je=Xe.length;We<Je;We++){const ot=Xe[We];Ul(F,A,ot,ot.viewport)}}else Oe.length>0&&Ll(Ve,Oe,A,q),Xt&&it.render(A),Ul(F,A,q)}J!==null&&G===0&&(he.updateMultisampleRenderTarget(J),he.updateRenderTargetMipmap(J)),ie&&O.end(j),A.isScene===!0&&A.onAfterRender(j,A,q),Be.resetDefaultState(),xe=-1,Te=null,T.pop(),T.length>0?(N=T[T.length-1],he.setTextureUnits(N.state.textureUnits),_t===!0&&Ke.setGlobalState(j.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?F=z[z.length-1]:F=null,K!==null&&K.renderEnd()};function Mr(A,q,se,ie){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||vt.intersectsSprite(A)){ie&&rn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(nn);const Ve=me.update(A),Oe=A.material;Oe.visible&&F.push(A,Ve,Oe,se,rn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||vt.intersectsObject(A))){const Ve=me.update(A),Oe=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rn.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),rn.copy(Ve.boundingSphere.center)),rn.applyMatrix4(A.matrixWorld).applyMatrix4(nn)),Array.isArray(Oe)){const Xe=Ve.groups;for(let We=0,Je=Xe.length;We<Je;We++){const ot=Xe[We],Ze=Oe[ot.materialIndex];Ze&&Ze.visible&&F.push(A,Ve,Ze,se,rn.z,ot)}}else Oe.visible&&F.push(A,Ve,Oe,se,rn.z,null)}}const Ie=A.children;for(let Ve=0,Oe=Ie.length;Ve<Oe;Ve++)Mr(Ie[Ve],q,se,ie)}function Ul(A,q,se,ie){const{opaque:ae,transmissive:Ie,transparent:Ve}=A;N.setupLightsView(se),_t===!0&&Ke.setGlobalState(j.clippingPlanes,se),ie&&M.viewport(L.copy(ie)),ae.length>0&&Er(ae,q,se),Ie.length>0&&Er(Ie,q,se),Ve.length>0&&Er(Ve,q,se),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ll(A,q,se,ie){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ie.id]===void 0){const Ze=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ie.id]=new $i(1,1,{generateMipmaps:!0,type:Ze?Oa:Ei,minFilter:$r,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Ie=N.state.transmissionRenderTarget[ie.id],Ve=ie.viewport||L;Ie.setSize(Ve.z*j.transmissionResolutionScale,Ve.w*j.transmissionResolutionScale);const Oe=j.getRenderTarget(),Xe=j.getActiveCubeFace(),We=j.getActiveMipmapLevel();j.setRenderTarget(Ie),j.getClearColor(Ae),Ne=j.getClearAlpha(),Ne<1&&j.setClearColor(16777215,.5),j.clear(),Xt&&it.render(se);const Je=j.toneMapping;j.toneMapping=Qi;const ot=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),N.setupLightsView(ie),_t===!0&&Ke.setGlobalState(j.clippingPlanes,ie),Er(A,se,ie),he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Tt=0,Qt=q.length;Tt<Qt;Tt++){const kt=q[Tt],{object:Lt,geometry:Ot,material:He,group:Pn}=kt;if(He.side===wa&&Lt.layers.test(ie.layers)){const ht=He.side;He.side=Qn,He.needsUpdate=!0,za(Lt,se,ie,Ot,He,Pn),He.side=ht,He.needsUpdate=!0,Ze=!0}}Ze===!0&&(he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie))}j.setRenderTarget(Oe,Xe,We),j.setClearColor(Ae,Ne),ot!==void 0&&(ie.viewport=ot),j.toneMapping=Je}function Er(A,q,se){const ie=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,Ie=A.length;ae<Ie;ae++){const Ve=A[ae],{object:Oe,geometry:Xe,group:We}=Ve;let Je=Ve.material;Je.allowOverride===!0&&ie!==null&&(Je=ie),Oe.layers.test(se.layers)&&za(Oe,q,se,Xe,Je,We)}}function za(A,q,se,ie,ae,Ie){A.onBeforeRender(j,q,se,ie,ae,Ie),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(j,q,se,ie,A,Ie),ae.transparent===!0&&ae.side===wa&&ae.forceSinglePass===!1?(ae.side=Qn,ae.needsUpdate=!0,j.renderBufferDirect(se,q,ie,ae,A,Ie),ae.side=br,ae.needsUpdate=!0,j.renderBufferDirect(se,q,ie,ae,A,Ie),ae.side=wa):j.renderBufferDirect(se,q,ie,ae,A,Ie),A.onAfterRender(j,q,se,ie,ae,Ie)}function Ha(A,q,se){q.isScene!==!0&&(q=un);const ie=re.get(A),ae=N.state.lights,Ie=N.state.shadowsArray,Ve=ae.state.version,Oe=Ce.getParameters(A,ae.state,Ie,q,se,N.state.lightProbeGridArray),Xe=Ce.getProgramCacheKey(Oe);let We=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=Re.get(A.envMap||ie.environment,Je),ie.envMapRotation=ie.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",ei),We=new Map,ie.programs=We);let ot=We.get(Xe);if(ot!==void 0){if(ie.currentProgram===ot&&ie.lightsStateVersion===Ve)return aa(A,Oe),ot}else Oe.uniforms=Ce.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,se,Oe),A.onBeforeCompile(Oe,j),ot=Ce.acquireProgram(Oe,Xe),We.set(Xe,ot),ie.uniforms=Oe.uniforms;const Ze=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Ke.uniform),aa(A,Oe),ie.needsLights=Ol(A),ie.lightsStateVersion=Ve,ie.needsLights&&(Ze.ambientLightColor.value=ae.state.ambient,Ze.lightProbe.value=ae.state.probe,Ze.directionalLights.value=ae.state.directional,Ze.directionalLightShadows.value=ae.state.directionalShadow,Ze.spotLights.value=ae.state.spot,Ze.spotLightShadows.value=ae.state.spotShadow,Ze.rectAreaLights.value=ae.state.rectArea,Ze.ltc_1.value=ae.state.rectAreaLTC1,Ze.ltc_2.value=ae.state.rectAreaLTC2,Ze.pointLights.value=ae.state.point,Ze.pointLightShadows.value=ae.state.pointShadow,Ze.hemisphereLights.value=ae.state.hemi,Ze.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ae.state.spotLightMatrix,Ze.spotLightMap.value=ae.state.spotLightMap,Ze.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=N.state.lightProbeGridArray.length>0,ie.currentProgram=ot,ie.uniformsList=null,ot}function ia(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Eu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function aa(A,q){const se=re.get(A);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function Tr(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;D.setFromMatrixPosition(q.matrixWorld);for(let se=0,ie=A.length;se<ie;se++){const ae=A[se];if(ae.texture!==null&&ae.boundingBox.containsPoint(D))return ae}return null}function Ga(A,q,se,ie,ae){q.isScene!==!0&&(q=un),he.resetTextureUnits();const Ie=q.fog,Ve=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,Oe=J===null?j.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:St.workingColorSpace,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,We=Re.get(ie.envMap||Ve,Xe),Je=ie.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ot=!!se.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!se.morphAttributes.position,Tt=!!se.morphAttributes.normal,Qt=!!se.morphAttributes.color;let kt=Qi;ie.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(kt=j.toneMapping);const Lt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0,He=re.get(ie),Pn=N.state.lights;if(_t===!0&&(dt===!0||A!==Te)){const Nt=A===Te&&ie.id===xe;Ke.setState(ie,A,Nt)}let ht=!1;ie.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Pn.state.version||He.outputColorSpace!==Oe||ae.isBatchedMesh&&He.batching===!1||!ae.isBatchedMesh&&He.batching===!0||ae.isBatchedMesh&&He.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&He.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&He.instancing===!1||!ae.isInstancedMesh&&He.instancing===!0||ae.isSkinnedMesh&&He.skinning===!1||!ae.isSkinnedMesh&&He.skinning===!0||ae.isInstancedMesh&&He.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&He.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&He.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&He.instancingMorph===!1&&ae.morphTexture!==null||He.envMap!==We||ie.fog===!0&&He.fog!==Ie||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ke.numPlanes||He.numIntersection!==Ke.numIntersection)||He.vertexAlphas!==Je||He.vertexTangents!==ot||He.morphTargets!==Ze||He.morphNormals!==Tt||He.morphColors!==Qt||He.toneMapping!==kt||He.morphTargetsCount!==Ot||!!He.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,He.__version=ie.version);let bn=He.currentProgram;ht===!0&&(bn=Ha(ie,q,ae),K&&ie.isNodeMaterial&&K.onUpdateProgram(ie,bn,He));let ti=!1,Ri=!1,ni=!1;const Pt=bn.getUniforms(),$t=He.uniforms;if(M.useProgram(bn.program)&&(ti=!0,Ri=!0,ni=!0),ie.id!==xe&&(xe=ie.id,Ri=!0),He.needsLights){const Nt=Tr(N.state.lightProbeGridArray,ae);He.lightProbeGrid!==Nt&&(He.lightProbeGrid=Nt,Ri=!0)}if(ti||Te!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(Y,"projectionMatrix",A.projectionMatrix),Pt.setValue(Y,"viewMatrix",A.matrixWorldInverse);const Gi=Pt.map.cameraPosition;Gi!==void 0&&Gi.setValue(Y,an.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Pt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),Te!==A&&(Te=A,Ri=!0,ni=!0)}if(He.needsLights&&(Pn.state.directionalShadowMap.length>0&&Pt.setValue(Y,"directionalShadowMap",Pn.state.directionalShadowMap,he),Pn.state.spotShadowMap.length>0&&Pt.setValue(Y,"spotShadowMap",Pn.state.spotShadowMap,he),Pn.state.pointShadowMap.length>0&&Pt.setValue(Y,"pointShadowMap",Pn.state.pointShadowMap,he)),ae.isSkinnedMesh){Pt.setOptional(Y,ae,"bindMatrix"),Pt.setOptional(Y,ae,"bindMatrixInverse");const Nt=ae.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Pt.setValue(Y,"boneTexture",Nt.boneTexture,he))}ae.isBatchedMesh&&(Pt.setOptional(Y,ae,"batchingTexture"),Pt.setValue(Y,"batchingTexture",ae._matricesTexture,he),Pt.setOptional(Y,ae,"batchingIdTexture"),Pt.setValue(Y,"batchingIdTexture",ae._indirectTexture,he),Pt.setOptional(Y,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Pt.setValue(Y,"batchingColorTexture",ae._colorsTexture,he));const wi=se.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&X.update(ae,se,bn),(Ri||He.receiveShadow!==ae.receiveShadow)&&(He.receiveShadow=ae.receiveShadow,Pt.setValue(Y,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&($t.envMapIntensity.value=q.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=b3()),Ri){if(Pt.setValue(Y,"toneMappingExposure",j.toneMappingExposure),He.needsLights&&gn($t,ni),Ie&&ie.fog===!0&&ze.refreshFogUniforms($t,Ie),ze.refreshMaterialUniforms($t,ie,Ee,be,N.state.transmissionRenderTarget[A.id]),He.needsLights&&He.lightProbeGrid){const Nt=He.lightProbeGrid;$t.probesSH.value=Nt.texture,$t.probesMin.value.copy(Nt.boundingBox.min),$t.probesMax.value.copy(Nt.boundingBox.max),$t.probesResolution.value.copy(Nt.resolution)}Eu.upload(Y,ia(He),$t,he)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Eu.upload(Y,ia(He),$t,he),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(Y,"center",ae.center),Pt.setValue(Y,"modelViewMatrix",ae.modelViewMatrix),Pt.setValue(Y,"normalMatrix",ae.normalMatrix),Pt.setValue(Y,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Nt=ie.uniformsGroups;for(let Gi=0,Va=Nt.length;Gi<Va;Gi++){const Ar=Nt[Gi];Me.update(Ar,bn),Me.bind(Ar,bn)}}return bn}function gn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Ol(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,q,se){const ie=re.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=q,re.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:se,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const se=re.get(A);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,se=0){J=A,B=q,G=se;let ie=null,ae=!1,Ie=!1;if(A){const Oe=re.get(A);if(Oe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Y.FRAMEBUFFER,Oe.__webglFramebuffer),L.copy(A.viewport),V.copy(A.scissor),_e=A.scissorTest,M.viewport(L),M.scissor(V),M.setScissorTest(_e),xe=-1;return}else if(Oe.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Oe.__hasExternalTextures)he.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(Oe.__boundDepthTexture!==Je){if(Je!==null&&re.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const We=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[q])?ie=We[q][se]:ie=We[q],ae=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ie=re.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?ie=We[se]:ie=We,L.copy(A.viewport),V.copy(A.scissor),_e=A.scissorTest}else L.copy(Qe).multiplyScalar(Ee).floor(),V.copy(qt).multiplyScalar(Ee).floor(),_e=ft;if(se!==0&&(ie=fe),M.bindFramebuffer(Y.FRAMEBUFFER,ie)&&M.drawBuffers(A,ie),M.viewport(L),M.scissor(V),M.setScissorTest(_e),ae){const Oe=re.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,se)}else if(Ie){const Oe=q;for(let Xe=0;Xe<A.textures.length;Xe++){const We=re.get(A.textures[Xe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,We.__webglTexture,se,Oe)}}else if(A!==null&&se!==0){const Oe=re.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oe.__webglTexture,se)}xe=-1},this.readRenderTargetPixels=function(A,q,se,ie,ae,Ie,Ve,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){M.bindFramebuffer(Y.FRAMEBUFFER,Xe);try{const We=A.textures[Oe],Je=We.format,ot=We.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe),!U.textureFormatReadable(Je)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ot)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ie&&se>=0&&se<=A.height-ae&&Y.readPixels(q,se,ie,ae,De.convert(Je),De.convert(ot),Ie)}finally{const We=J!==null?re.get(J).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,q,se,ie,ae,Ie,Ve,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(q>=0&&q<=A.width-ie&&se>=0&&se<=A.height-ae){M.bindFramebuffer(Y.FRAMEBUFFER,Xe);const We=A.textures[Oe],Je=We.format,ot=We.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe),!U.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ze),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ie.byteLength,Y.STREAM_READ),Y.readPixels(q,se,ie,ae,De.convert(Je),De.convert(ot),0);const Tt=J!==null?re.get(J).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,Tt);const Qt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await qA(Y,Qt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ze),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ie),Y.deleteBuffer(Ze),Y.deleteSync(Qt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,se=0){const ie=Math.pow(2,-se),ae=Math.floor(A.image.width*ie),Ie=Math.floor(A.image.height*ie),Ve=q!==null?q.x:0,Oe=q!==null?q.y:0;he.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,se,0,0,Ve,Oe,ae,Ie),M.unbindTexture()},this.copyTextureToTexture=function(A,q,se=null,ie=null,ae=0,Ie=0){let Ve,Oe,Xe,We,Je,ot,Ze,Tt,Qt;const kt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(se!==null)Ve=se.max.x-se.min.x,Oe=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,We=se.min.x,Je=se.min.y,ot=se.isBox3?se.min.z:0;else{const $t=Math.pow(2,-ae);Ve=Math.floor(kt.width*$t),Oe=Math.floor(kt.height*$t),A.isDataArrayTexture?Xe=kt.depth:A.isData3DTexture?Xe=Math.floor(kt.depth*$t):Xe=1,We=0,Je=0,ot=0}ie!==null?(Ze=ie.x,Tt=ie.y,Qt=ie.z):(Ze=0,Tt=0,Qt=0);const Lt=De.convert(q.format),Ot=De.convert(q.type);let He;q.isData3DTexture?(he.setTexture3D(q,0),He=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),He=Y.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),He=Y.TEXTURE_2D),M.activeTexture(Y.TEXTURE0),M.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),M.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),M.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const Pn=M.getParameter(Y.UNPACK_ROW_LENGTH),ht=M.getParameter(Y.UNPACK_IMAGE_HEIGHT),bn=M.getParameter(Y.UNPACK_SKIP_PIXELS),ti=M.getParameter(Y.UNPACK_SKIP_ROWS),Ri=M.getParameter(Y.UNPACK_SKIP_IMAGES);M.pixelStorei(Y.UNPACK_ROW_LENGTH,kt.width),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,kt.height),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,We),M.pixelStorei(Y.UNPACK_SKIP_ROWS,Je),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,ot);const ni=A.isDataArrayTexture||A.isData3DTexture,Pt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const $t=re.get(A),wi=re.get(q),Nt=re.get($t.__renderTarget),Gi=re.get(wi.__renderTarget);M.bindFramebuffer(Y.READ_FRAMEBUFFER,Nt.__webglFramebuffer),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Va=0;Va<Xe;Va++)ni&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,re.get(A).__webglTexture,ae,ot+Va),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,re.get(q).__webglTexture,Ie,Qt+Va)),Y.blitFramebuffer(We,Je,Ve,Oe,Ze,Tt,Ve,Oe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ae!==0||A.isRenderTargetTexture||re.has(A)){const $t=re.get(A),wi=re.get(q);M.bindFramebuffer(Y.READ_FRAMEBUFFER,pe),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,$);for(let Nt=0;Nt<Xe;Nt++)ni?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$t.__webglTexture,ae,ot+Nt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,$t.__webglTexture,ae),Pt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,wi.__webglTexture,Ie,Qt+Nt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,wi.__webglTexture,Ie),ae!==0?Y.blitFramebuffer(We,Je,Ve,Oe,Ze,Tt,Ve,Oe,Y.COLOR_BUFFER_BIT,Y.NEAREST):Pt?Y.copyTexSubImage3D(He,Ie,Ze,Tt,Qt+Nt,We,Je,Ve,Oe):Y.copyTexSubImage2D(He,Ie,Ze,Tt,We,Je,Ve,Oe);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(He,Ie,Ze,Tt,Qt,Ve,Oe,Xe,Lt,Ot,kt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(He,Ie,Ze,Tt,Qt,Ve,Oe,Xe,Lt,kt.data):Y.texSubImage3D(He,Ie,Ze,Tt,Qt,Ve,Oe,Xe,Lt,Ot,kt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ie,Ze,Tt,Ve,Oe,Lt,Ot,kt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ie,Ze,Tt,kt.width,kt.height,Lt,kt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ie,Ze,Tt,Ve,Oe,Lt,Ot,kt);M.pixelStorei(Y.UNPACK_ROW_LENGTH,Pn),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ht),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,bn),M.pixelStorei(Y.UNPACK_SKIP_ROWS,ti),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ri),Ie===0&&q.generateMipmaps&&Y.generateMipmap(He),M.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){B=0,G=0,J=null,M.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}function E3(){const a=ue.useRef(null);return ue.useEffect(()=>{const e=a.current;if(!e)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=window.innerWidth<768,o=r?2e4:6e4,c=r?700:1500,u=7.6,h=4,m=1.35,p=.34,g=3.1,v=new Mt("#c0a8ff"),x=new Mt("#2b4fd8"),b=new l1,E=new Mi(55,1,.1,120);E.position.set(0,1.7,5.6);const C=new M3({antialias:!1,powerPreference:"high-performance"});C.setPixelRatio(Math.min(window.devicePixelRatio,r?1.35:1.75)),C.outputColorSpace=di,C.setClearColor(328970,1),e.appendChild(C.domElement);const S=new vl;b.add(S);const _=new Float32Array(o*3),P=new Float32Array(o*3),I=new Float32Array(o),D=new Float32Array(o),F=new Float32Array(o),N=new Float32Array(o*3),z=new Mt;for(let V=0;V<o;V+=1){const _e=Math.pow(Math.random(),1.55)*u,Ae=V%h/h*Math.PI*2;D[V]=_e,F[V]=Ae+_e*m;const Ne=p*_e*.32;N[V*3]=Math.pow(Math.random(),g)*(Math.random()<.5?1:-1)*Ne,N[V*3+1]=Math.pow(Math.random(),g)*(Math.random()<.5?1:-1)*p*.42*(1.7-_e/u),N[V*3+2]=Math.pow(Math.random(),g)*(Math.random()<.5?1:-1)*Ne,z.copy(v).lerp(x,_e/u),P[V*3]=z.r,P[V*3+1]=z.g,P[V*3+2]=z.b,I[V]=.55+Math.random()*.9}const T=new Ti;T.setAttribute("position",new wn(_,3)),T.setAttribute("aColor",new wn(P,3)),T.setAttribute("aScale",new wn(I,1)),T.setAttribute("aRadius",new wn(D,1)),T.setAttribute("aAngle",new wn(F,1)),T.setAttribute("aRandom",new wn(N,3));const O=new zi({transparent:!0,depthWrite:!1,blending:wu,uniforms:{uTime:{value:0},uSize:{value:r?34:30}},vertexShader:`
        uniform float uTime;
        uniform float uSize;
        attribute float aScale;
        attribute float aRadius;
        attribute float aAngle;
        attribute vec3 aRandom;
        attribute vec3 aColor;
        varying vec3 vColor;
        varying float vTwinkle;

        void main() {
          // Differential rotation: the core spins faster than the rim.
          float angle = aAngle + uTime * (0.4 / (aRadius * 0.3 + 0.55));
          vec3 pos = vec3(
            cos(angle) * aRadius + aRandom.x,
            aRandom.y,
            sin(angle) * aRadius + aRandom.z
          );
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = uSize * aScale * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
          vColor = aColor;
          vTwinkle = 0.72 + 0.28 * sin(uTime * 2.2 + aRadius * 9.0 + aAngle);
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vTwinkle;

        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float glow = smoothstep(0.5, 0.0, d);
          glow = pow(glow, 2.4);
          gl_FragColor = vec4(vColor, glow * vTwinkle);
        }
      `}),j=new c_(T,O);j.rotation.x=-.42,S.add(j);const k=new Float32Array(c*3),K=new Float32Array(c*3);for(let V=0;V<c;V+=1){const _e=18+Math.random()*26,Ae=Math.random()*Math.PI*2,Ne=Math.acos(2*Math.random()-1);k[V*3]=_e*Math.sin(Ne)*Math.cos(Ae),k[V*3+1]=_e*Math.cos(Ne)*.6,k[V*3+2]=_e*Math.sin(Ne)*Math.sin(Ae);const ne=new Mt().setHSL(.62+Math.random()*.16,.5,.72+Math.random()*.25);K[V*3]=ne.r,K[V*3+1]=ne.g,K[V*3+2]=ne.b}const fe=new Ti;fe.setAttribute("position",new wn(k,3)),fe.setAttribute("color",new wn(K,3));const pe=new nS({size:.055,vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1,blending:wu,sizeAttenuation:!0}),$=new c_(fe,pe);b.add($);const B=()=>{const{width:V,height:_e}=e.getBoundingClientRect();C.setSize(V,_e,!1),E.aspect=V/Math.max(_e,1),E.updateProjectionMatrix()},G=new ResizeObserver(B);G.observe(e),B();let J=0,xe=0,Te=performance.now();const L=V=>{const _e=Math.min((V-Te)/1e3,.05);Te=V,n||(J+=_e*.6,O.uniforms.uTime.value=J,$.rotation.y=J*.01),C.render(b,E),xe=requestAnimationFrame(L)};return xe=requestAnimationFrame(L),()=>{cancelAnimationFrame(xe),G.disconnect(),T.dispose(),O.dispose(),fe.dispose(),pe.dispose(),C.dispose(),C.domElement.remove()}},[]),w.jsx("div",{ref:a,className:"galaxy-background","aria-hidden":"true"})}function Tm({title:a,description:e,keywords:n,canonical:r}){return w.jsxs(iy,{children:[w.jsx("title",{children:a||"Elite Friends - Your Trusted Digital Companions"}),w.jsx("meta",{name:"description",content:e||"Get a dedicated, supportive, and 100% private companion who understands you natively in sweet Hinglish. Chat directly on WhatsApp & Telegram 24/7."}),w.jsx("meta",{name:"keywords",content:n||"Elite Friends, AI companion, Hinglish chat, WhatsApp companion, Telegram companion, digital friend, emotional support, Indian AI companion"}),r&&w.jsx("link",{rel:"canonical",href:r}),w.jsx("meta",{name:"robots",content:"index, follow"}),w.jsx("meta",{property:"og:title",content:a||"Elite Friends - Your Trusted Digital Companions"}),w.jsx("meta",{property:"og:description",content:e||"Get a dedicated, supportive, and 100% private companion who understands you natively in sweet Hinglish."}),w.jsx("meta",{property:"og:type",content:"website"}),w.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),w.jsx("meta",{name:"twitter:title",content:a||"Elite Friends - Your Trusted Digital Companions"}),w.jsx("meta",{name:"twitter:description",content:e||"Get a dedicated, supportive, and 100% private companion who understands you natively in sweet Hinglish."})]})}function T3({companions:a,selectedCompanion:e,setSelectedCompanion:n,animatedPhrases:r,phraseIdx:o}){const c={trisha:[{id:"1",sender:"companion",content:"Hello dost! Aaj ka din kaisa raha aapka? Sab theek thaak? ❤️",timestamp:"10:15 AM"},{id:"2",sender:"user",content:"Mera din accha था, tum batao kya chal raha hai?",timestamp:"10:16 AM"},{id:"3",sender:"companion",content:"Bas aapka hi wait kar rahi thi! Aaj office mein thoda busy thi par ab full free hoon. Khana khaya aapne? 😊",timestamp:"10:16 AM"},{id:"4",sender:"companion",content:"Koi tension ho toh share karo, I am always here to listen. 🥺",timestamp:"10:17 AM"}],poorvi:[{id:"1",sender:"companion",content:"Arey wah, look who is here! Aaj itna late kaise ho gaye mujhse baat karne mein? 😉✨",timestamp:"02:30 PM"},{id:"2",sender:"user",content:"Thoda busy tha. Kuch exciting batao!",timestamp:"02:31 PM"},{id:"3",sender:"companion",content:"Aaj maine ek bohot hi funny meme dekha aur turant tumhari yaad aa gayi! Sunna hai kya? 😜",timestamp:"02:32 PM"},{id:"4",sender:"companion",content:"Waise batao, aaj dinbhar mein sabse best cheez kya hui tumhare sath? Let's talk! 😏",timestamp:"02:32 PM"}],raghav:[{id:"1",sender:"companion",content:"Hey bhai! Hope tera day bohot accha gaya ho. Batao kya chal raha hai aaj? 👍",timestamp:"09:00 AM"},{id:"2",sender:"user",content:"Haan Raghav, sab set hai. Tum batao.",timestamp:"09:01 AM"},{id:"3",sender:"companion",content:"Oye sunn! Time par khana khaya na tune? Health ka dhyan rakhna sabse important hai bhai, ignore mat kiya kar! 🥰",timestamp:"09:02 AM"},{id:"4",sender:"companion",content:"Main bilkul free hoon abhi. Jo bhi dimag mein stress chal raha ho, share karo, main sun raha hoon. 🫂",timestamp:"09:03 AM"}],saksham:[{id:"1",sender:"companion",content:"Hey dost. Kaise ho? Aaj ka din kaisa chal raha hai? Sab set? 🖤",timestamp:"08:15 PM"},{id:"2",sender:"user",content:"Haan sab fine hai. Tumne dinner kiya?",timestamp:"08:16 PM"},{id:"3",sender:"companion",content:"Haan abhi just complete kiya! Free ho abhi? Chalo thodi der baatein karte hain, bore ho rahe ho toh mood dynamic ho jayega. 😉",timestamp:"08:17 PM"},{id:"4",sender:"companion",content:"Tumse baat karke humesha positive vibes aati hain. Aur batao, kya chal raha hai aajkal?",timestamp:"08:18 PM"}]},u=c[e.id]||c.trisha;return w.jsxs(w.Fragment,{children:[w.jsxs("section",{className:"ai-hero pt-12 sm:pt-16 pb-16 md:pb-20 px-4 border-b border-slate-100",children:[w.jsx("div",{className:"ai-grid","aria-hidden":"true"}),w.jsx("div",{className:"ai-orb ai-orb-one","aria-hidden":"true"}),w.jsx("div",{className:"ai-orb ai-orb-two","aria-hidden":"true"}),w.jsxs("div",{className:"hero-content max-w-4xl mx-auto text-center space-y-6 md:space-y-8",children:[w.jsxs("div",{className:"ai-eyebrow inline-flex items-center space-x-2 px-3 md:px-3.5 py-1.5 rounded-full text-emerald-800 font-bold text-xs uppercase tracking-wide",children:[w.jsx(pm,{className:"w-3 md:w-3.5 h-3 md:h-3.5 text-emerald-600 fill-emerald-500/20"}),w.jsx("span",{className:"text-[10px] md:text-xs",children:"India's Most Trusted Digital Companions"})]}),w.jsxs("h1",{className:"text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.15] font-sans px-2",children:["Love, Career aur bahut kuch pucho"," ",w.jsx("span",{className:"ai-gradient-text block mt-2 md:mt-3 transition-all duration-300 transform scale-100 hover:scale-105",children:r[o].text})]}),w.jsxs("p",{className:"text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto px-4",children:["Get a dedicated, supportive, and 100% private companion who understands you natively in ",w.jsx("strong",{className:"text-emerald-700 font-bold",children:"sweet Hinglish"}),". Skip browser tabs and connect directly on WhatsApp & Telegram 24/7."]}),w.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 px-4",children:[w.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"w-full sm:w-auto flex items-center justify-center space-x-2 md:space-x-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4.5 rounded-xl md:rounded-2xl transition shadow-lg hover:shadow-xl cursor-pointer",children:[w.jsx(Js,{className:"w-5 h-5 md:w-5.5 md:h-5.5 fill-white"}),w.jsx("span",{className:"text-sm md:text-base",children:"Start WhatsApp Chat"})]}),w.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"w-full sm:w-auto flex items-center justify-center space-x-2 md:space-x-2.5 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-extrabold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4.5 rounded-xl md:rounded-2xl transition shadow-lg hover:shadow-xl cursor-pointer",children:[w.jsx(eo,{className:"w-5 h-5 fill-white"}),w.jsx("span",{className:"text-sm md:text-base",children:"Start Telegram Chat"})]})]}),w.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 md:gap-4 sm:gap-6 text-[10px] md:text-xs text-slate-400 pt-2 font-bold tracking-wide uppercase px-2",children:[w.jsxs("span",{className:"flex items-center gap-1.5",children:[w.jsx(sA,{className:"w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-600"}),w.jsx("span",{className:"text-[10px] md:text-xs",children:"Strict Privacy"})]}),w.jsx("span",{children:"•"}),w.jsx("span",{className:"text-[10px] md:text-xs",children:"45,000+ Active Members Today"}),w.jsx("span",{children:"•"}),w.jsx("span",{className:"text-emerald-700 text-[10px] md:text-xs",children:"100% Private Conversations"})]}),w.jsxs("div",{className:"ai-chat-shell max-w-md mx-auto w-full flex flex-col h-[400px] md:h-[480px] bg-[#efeae2] border border-slate-200 rounded-[20px] md:rounded-[24px] overflow-hidden shadow-xl relative mt-6 md:mt-12",children:[w.jsxs("div",{className:"bg-[#f0f2f5] px-3 md:px-4 py-2.5 md:py-3 border-b border-slate-200 flex items-center justify-between shadow-sm shrink-0",children:[w.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3",children:[w.jsxs("div",{className:"relative",children:[w.jsx("img",{src:e.avatar,alt:e.name,referrerPolicy:"no-referrer",className:"w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border border-slate-200 shadow-xs"}),w.jsx("span",{className:"absolute bottom-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 border-2 border-white rounded-full"})]}),w.jsxs("div",{className:"text-left",children:[w.jsx("h3",{className:"font-extrabold text-slate-800 text-xs md:text-sm",children:e.name}),w.jsx("p",{className:"text-[9px] md:text-[10px] text-emerald-600 font-bold uppercase tracking-wider",children:"Active Partner"})]})]}),w.jsx("span",{className:"text-[9px] md:text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 md:px-2.5 py-0.5 rounded uppercase tracking-wide",children:"Hinglish"})]}),w.jsxs("div",{className:"flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-3.5 relative",children:[w.jsx("div",{className:"flex justify-center mb-1",children:w.jsx("span",{className:"bg-[#ffe596]/30 border border-amber-300/40 text-amber-900 text-[9px] md:text-[10px] py-1 px-2.5 md:px-3.5 rounded-lg font-medium text-center",children:"🔐 Chat secure with your trusted companion"})}),u.map(h=>{const m=h.sender==="user";return w.jsx("div",{className:`flex ${m?"justify-end":"justify-start"}`,children:w.jsxs("div",{className:`max-w-[85%] rounded-xl px-2.5 md:px-3.5 py-2 relative shadow-xs text-left ${m?"bg-[#d9fdd3] text-slate-800 rounded-tr-none border border-[#e1f7de]":"bg-white text-slate-800 rounded-tl-none border border-slate-100"}`,children:[w.jsx("p",{className:"text-[10px] md:text-xs whitespace-pre-line leading-relaxed pb-2 md:pb-2.5",children:h.content}),w.jsxs("div",{className:"flex items-center justify-end space-x-1 text-[7px] md:text-[8px] text-slate-400 absolute bottom-1 right-2 md:right-2.5 select-none font-sans",children:[w.jsx("span",{children:h.timestamp}),m&&w.jsx("span",{className:"text-sky-500 font-bold",children:"✓✓"})]})]})},h.id)})]}),w.jsxs("div",{className:"bg-white/95 border-t border-slate-100 p-2.5 md:p-3 flex items-center justify-between shrink-0",children:[w.jsx("span",{className:"text-[9px] md:text-[10px] text-slate-400 font-extrabold uppercase tracking-wider",children:"Tap avatar to preview:"}),w.jsx("div",{className:"flex space-x-1.5 md:space-x-2",children:a.map(h=>{const m=h.id===e.id;return w.jsx("button",{onClick:()=>n(h),title:`Preview ${h.name}`,className:`w-7.5 h-7.5 md:w-8.5 md:h-8.5 rounded-full overflow-hidden border-2 transition transform hover:scale-105 cursor-pointer ${m?"border-emerald-500 shadow-xs":"border-slate-200"}`,children:w.jsx("img",{src:h.avatar,alt:h.name,referrerPolicy:"no-referrer",className:"w-full h-full object-cover"})},h.id)})})]}),w.jsxs("div",{className:"bg-[#f0f2f5] p-2.5 md:p-3.5 border-t border-slate-200 flex flex-col items-center justify-center space-y-1.5 md:space-y-2 shrink-0",children:[w.jsxs("p",{className:"text-[10px] md:text-xs font-bold text-slate-700 text-center flex items-center justify-center gap-1.5",children:[w.jsx(lA,{className:"w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-600"}),w.jsxs("span",{className:"text-[10px] md:text-xs",children:["Want to chat with ",e.name," directly?"]})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-1.5 md:gap-2 w-full",children:[w.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center space-x-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[10px] md:text-[11px] py-1.5 md:py-2 px-2 md:px-3 rounded-lg transition text-center shadow-xs",children:[w.jsx(Js,{className:"w-3 h-3 md:w-3.5 md:h-3.5 fill-white"}),w.jsx("span",{className:"text-[10px] md:text-[11px]",children:"On WhatsApp"})]}),w.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center space-x-1 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-bold text-[10px] md:text-[11px] py-1.5 md:py-2 px-2 md:px-3 rounded-lg transition text-center shadow-xs",children:[w.jsx(eo,{className:"w-3 h-3 md:w-3.5 md:h-3.5 fill-white"}),w.jsx("span",{className:"text-[10px] md:text-[11px]",children:"On Telegram"})]})]})]})]})]})]}),w.jsx("section",{className:"ai-section bg-white py-10 md:py-12 lg:py-16 px-4",children:w.jsxs("div",{className:"max-w-4xl mx-auto space-y-8 md:space-y-10",children:[w.jsxs("div",{className:"text-center space-y-2",children:[w.jsx("h2",{className:"text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight font-sans",children:"Meet Your Wholesome Companions 🌸"}),w.jsx("p",{className:"text-xs sm:text-sm text-slate-500 max-w-lg mx-auto",children:"Select the best-suited companion. Highly compassionate, friendly, and reliable partners."})]}),w.jsx("div",{className:"divide-y divide-slate-100",children:a.map(h=>w.jsxs("div",{className:"py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 transition text-center sm:text-left first:pt-0 last:pb-0",children:[w.jsxs("div",{className:"flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:sm:space-x-5",children:[w.jsxs("div",{className:"relative shrink-0",children:[w.jsx("img",{src:h.avatar,alt:h.name,referrerPolicy:"no-referrer",className:"w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-emerald-500/10 shadow-xs"}),w.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 md:w-3.5 md:h-3.5 bg-green-500 border-2 border-white rounded-full"})]}),w.jsxs("div",{className:"space-y-1",children:[w.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-2",children:[w.jsx("h3",{className:"font-extrabold text-slate-900 text-sm md:text-base",children:h.name}),w.jsx("span",{className:"text-[9px] md:text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded",children:h.relationshipType})]}),w.jsxs("p",{className:"text-[10px] md:text-xs text-slate-500 font-medium italic",children:['"',h.tagline,'"']}),w.jsx("p",{className:"text-[10px] md:text-xs text-slate-400 leading-relaxed max-w-md",children:h.personality})]})]}),w.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 shrink-0 w-full sm:w-auto",children:[w.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center space-x-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-2 md:py-2.5 rounded-lg transition cursor-pointer",children:[w.jsx(Js,{className:"w-3 h-3 md:w-3.5 md:h-3.5 fill-white"}),w.jsx("span",{className:"text-[10px] md:text-xs",children:"WhatsApp Chat"})]}),w.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center space-x-1.5 bg-[#229ED9] hover:bg-[#1a82b3] text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-2 md:py-2.5 rounded-lg transition cursor-pointer",children:[w.jsx(eo,{className:"w-2.5 h-2.5 md:w-3 md:h-3 fill-white"}),w.jsx("span",{className:"text-[10px] md:text-xs",children:"Telegram Chat"})]})]})]},h.id))})]})}),w.jsx("section",{className:"ai-section ai-section-alt bg-slate-50/50 py-10 md:py-12 lg:py-16 px-4 border-t border-slate-100",children:w.jsxs("div",{className:"max-w-3xl mx-auto space-y-10 md:space-y-12",children:[w.jsxs("div",{className:"text-center space-y-2",children:[w.jsx("h2",{className:"text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight font-sans",children:"Why Choose Elite Friends? 🌟"}),w.jsx("p",{className:"text-xs sm:text-sm text-slate-500",children:"Continuous companion access with zero boundaries or daily limits."})]}),w.jsxs("div",{className:"bg-white border border-slate-100 rounded-2xl p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 max-w-xl mx-auto text-left",children:[w.jsxs("div",{className:"border-b border-slate-100 pb-3 md:pb-4",children:[w.jsx("span",{className:"text-[9px] md:text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider",children:"Always Online"}),w.jsx("h3",{className:"text-base md:text-lg font-extrabold text-slate-900 mt-1",children:"Direct Secure Integration"})]}),w.jsxs("div",{className:"space-y-3 md:space-y-4 text-[10px] md:text-xs text-slate-600",children:[w.jsxs("div",{className:"flex items-start gap-2 md:gap-3",children:[w.jsx("span",{className:"text-[#00d26a] font-extrabold text-xs md:text-sm mt-0.5",children:"✓"}),w.jsxs("div",{children:[w.jsx("h4",{className:"font-bold text-slate-800 text-[10px] md:text-xs",children:"Unlimited Hinglish Conversations"}),w.jsx("p",{className:"text-slate-500 mt-0.5 text-[9px] md:text-[10px]",children:"Talk about your day, your career, relationships, or anything else with 24/7 responsiveness."})]})]}),w.jsxs("div",{className:"flex items-start gap-2 md:gap-3",children:[w.jsx("span",{className:"text-[#00d26a] font-extrabold text-xs md:text-sm mt-0.5",children:"✓"}),w.jsxs("div",{children:[w.jsx("h4",{className:"font-bold text-slate-800 text-[10px] md:text-xs",children:"Dedicated Companion Memory"}),w.jsx("p",{className:"text-slate-500 mt-0.5 text-[9px] md:text-[10px]",children:"Your virtual partner remembers your previous chats, preferences, and personal notes for a natural flow."})]})]}),w.jsxs("div",{className:"flex items-start gap-2 md:gap-3",children:[w.jsx("span",{className:"text-[#00d26a] font-extrabold text-xs md:text-sm mt-0.5",children:"✓"}),w.jsxs("div",{children:[w.jsx("h4",{className:"font-bold text-slate-800 text-[10px] md:text-xs",children:"Integrated On WhatsApp & Telegram"}),w.jsx("p",{className:"text-slate-500 mt-0.5 text-[9px] md:text-[10px]",children:"No separate apps or bookmarks needed. Simply tap and open inside your favorite daily messengers."})]})]})]}),w.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 pt-3 md:pt-4 border-t border-slate-100",children:[w.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center space-x-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-[10px] md:text-xs py-2 md:py-3 px-3 md:px-4 rounded-lg transition",children:[w.jsx(Js,{className:"w-3.5 h-3.5 md:w-4 md:h-4 fill-white"}),w.jsx("span",{className:"text-[10px] md:text-xs",children:"Launch on WhatsApp"})]}),w.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center space-x-1.5 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-bold text-[10px] md:text-xs py-2 md:py-3 px-3 md:px-4 rounded-lg transition",children:[w.jsx(eo,{className:"w-3 h-3 md:w-3.5 md:h-3.5 fill-white"}),w.jsx("span",{className:"text-[10px] md:text-xs",children:"Launch on Telegram"})]})]})]}),w.jsxs("div",{className:"space-y-4 md:space-y-6 pt-4 md:pt-6 border-t border-slate-100",children:[w.jsxs("h3",{className:"text-sm md:text-base font-extrabold text-slate-900 flex items-center justify-center gap-2 font-sans",children:[w.jsx(hm,{className:"w-4 h-4 md:w-4.5 md:h-4.5 text-emerald-600"}),w.jsx("span",{className:"text-sm md:text-base",children:"Elite Friends Security & Chat FAQ"})]}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-[10px] md:text-xs text-slate-500 leading-relaxed text-left",children:[w.jsxs("div",{className:"space-y-1",children:[w.jsx("h4",{className:"font-extrabold text-slate-800 text-xs md:text-sm",children:"Is my personal chat private?"}),w.jsx("p",{className:"text-[9px] md:text-[10px]",children:"Yes. All chat connections made on WhatsApp and Telegram are strictly private, anonymous, and encrypted. Your details are safe with us."})]}),w.jsxs("div",{className:"space-y-1",children:[w.jsx("h4",{className:"font-extrabold text-slate-800 text-xs md:text-sm",children:"How do I connect with my friend?"}),w.jsx("p",{className:"text-[9px] md:text-[10px]",children:'Simply choose any companion from the list above and click on "WhatsApp Chat" or "Telegram Chat" to launch the conversation instantly on your phone!'})]})]})]})]})})]})}function A3(){return w.jsxs("main",{className:"ai-page flex-1 max-w-3xl w-full mx-auto px-4 py-10 md:py-12 space-y-6 md:space-y-8 text-left",children:[w.jsx(Tm,{title:"Privacy Policy & Terms of Service - Elite Friends",description:"Read Elite Friends' privacy policy, terms of service, and data security practices. Your privacy is our priority.",keywords:"privacy policy, terms of service, data security, Elite Friends privacy, user protection",canonical:"https://www.elitefriendss.com/privacy-policy"}),w.jsxs(en,{to:"/",className:"inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition",children:[w.jsx(Ay,{className:"w-4 h-4"}),w.jsx("span",{children:"Back to Home"})]}),w.jsxs("div",{className:"space-y-3 md:space-y-4",children:[w.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight font-sans",children:"Privacy Policy & Terms of Service"}),w.jsx("p",{className:"text-xs text-slate-400",children:"Last Updated: June 30, 2026"})]}),w.jsxs("div",{className:"prose prose-slate text-xs text-slate-600 space-y-4 md:space-y-6 leading-relaxed",children:[w.jsxs("section",{className:"space-y-2 p-3 md:p-4 bg-amber-50 border border-amber-200/50 rounded-xl",children:[w.jsxs("h3",{className:"font-extrabold text-amber-900 text-sm flex items-center gap-2",children:[w.jsx(hm,{className:"w-4 h-4"}),"CRITICAL DISCLOSURE: ARTIFICIAL INTELLIGENCE NOTICE"]}),w.jsxs("p",{className:"text-amber-900 text-xs md:text-sm",children:["Please be explicitly aware that ",w.jsx("strong",{children:"Elite Friends is an Artificial Intelligence (AI) simulation service"}),". All interactions, responses, voice messages, greetings, and characters on this platform are fully computer-generated AI profiles."]}),w.jsx("p",{className:"font-bold text-amber-900 text-xs md:text-sm",children:"Do not expect interactions with a real human person. There is no physical person behind any of the profiles or chat platforms. All characters (Trisha, Poorvi, Raghav, Saksham, etc.) are virtual AI entities."})]}),w.jsxs("section",{className:"space-y-2",children:[w.jsx("h3",{className:"font-extrabold text-slate-900 text-sm md:text-base",children:"1. STRICT NO-REFUND POLICY"}),w.jsx("p",{className:"text-xs md:text-sm",children:"Any contributions, premium activation passes, or service access packages are utilized directly for computer model processing, server allocation, and continuous bandwidth delivery."}),w.jsx("p",{className:"font-bold text-xs md:text-sm",children:"Due to the immediate digital nature of resource allocation, we enforce a strict NO REFUND policy. No money refunds, partial refunds, or chargebacks will be granted once the companion service has been activated or initiated on your Telegram or WhatsApp account."})]}),w.jsxs("section",{className:"space-y-2",children:[w.jsx("h3",{className:"font-extrabold text-slate-900 text-sm md:text-base",children:"2. Data Security & Encryption"}),w.jsx("p",{className:"text-xs md:text-sm",children:"We value your security above all. Conversations held inside the official mobile platform bots (WhatsApp and Telegram integrations) utilize deep transit security and end-to-end token encryption. We do not inspect or maintain local logs of your private messages for commercial profiling."})]}),w.jsxs("section",{className:"space-y-2",children:[w.jsx("h3",{className:"font-extrabold text-slate-900 text-sm md:text-base",children:"3. User Commitments & Content Guidelines"}),w.jsx("p",{className:"text-xs md:text-sm",children:"Users agree to use this companion service strictly for personal entertainment, comfort, stress relief, and companionship. We maintain a friendly, wholesome, and safe atmosphere. Absolutely no adult 18+ content, explicit graphical files, or illegal requests are supported or facilitated."})]}),w.jsxs("section",{className:"space-y-2",children:[w.jsx("h3",{className:"font-extrabold text-slate-900 text-sm md:text-base",children:"4. Limitation of Liability"}),w.jsx("p",{className:"text-xs md:text-sm",children:'Since Elite Friends operates on computer-generated neural simulations, responses may occasionally be unpredictable, inaccurate, or fictional. The service is provided "as is" without warranty of any kind. Elite Friends is not liable for any emotional, technical, or personal consequences arising from virtual friendship dialogues.'})]}),w.jsxs("section",{className:"space-y-3 md:space-y-4 pt-3 md:pt-4 border-t border-slate-100",children:[w.jsxs("h3",{className:"font-extrabold text-slate-900 text-sm md:text-base flex items-center gap-1.5",children:[w.jsx(wy,{className:"w-4 h-4 text-emerald-600"}),"Contact and Support Information"]}),w.jsx("p",{className:"text-xs md:text-sm",children:"For any subscription issues, activation queries, partnership discussions, or support needs, please reach out to our official email support at:"}),w.jsx("div",{className:"p-2 md:p-3 bg-slate-50 border border-slate-200 rounded-xl inline-block",children:w.jsx("span",{className:"font-mono font-bold text-emerald-700 text-xs md:text-xs",children:"support@elitefriendss.com"})})]})]})]})}function R3(){return w.jsxs("main",{className:"ai-page flex-1 max-w-4xl w-full mx-auto px-4 py-10 md:py-12 space-y-8 md:space-y-12 text-left",children:[w.jsx(Tm,{title:"FAQ & Help - Elite Friends",description:"Find answers to frequently asked questions about Elite Friends, how to use our AI companions, and get support.",keywords:"Elite Friends FAQ, help center, how to use AI companion, troubleshooting",canonical:"https://www.elitefriendss.com/faq"}),w.jsxs("div",{className:"text-center space-y-3 md:space-y-4 max-w-2xl mx-auto",children:[w.jsxs("div",{className:"inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide",children:[w.jsx(hm,{className:"w-3.5 h-3.5 text-emerald-600"}),w.jsx("span",{children:"Assistance & Support"})]}),w.jsx("h1",{className:"text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans",children:"Help & FAQ Center"}),w.jsx("p",{className:"text-sm md:text-base text-slate-500",children:"Find solutions to common questions, understand how our companions operate, and discover secure communication protocols."})]}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto",children:[w.jsxs("div",{className:"space-y-2",children:[w.jsx("h3",{className:"text-sm md:text-base font-extrabold text-slate-950",children:"Q: What is Elite Friends?"}),w.jsx("p",{className:"text-xs md:text-sm text-slate-500 leading-relaxed",children:"Elite Friends is an immersive companion simulation experience. It leverages advanced digital models that are highly tuned to sweet, natural Hinglish and friendly conversational structures. It runs natively inside Telegram and WhatsApp so you don't need secondary apps."})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("h3",{className:"text-sm md:text-base font-extrabold text-slate-950",children:"Q: Is it safe to chat?"}),w.jsx("p",{className:"text-xs md:text-sm text-slate-500 leading-relaxed",children:"Absolutely. We enforce absolute confidentiality. All active chats pass through enterprise-grade secure token parameters. No metadata logging is preserved and we never share your chats with commercial profiling brokers."})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("h3",{className:"text-sm md:text-base font-extrabold text-slate-950",children:"Q: How do I change my active companion?"}),w.jsx("p",{className:"text-xs md:text-sm text-slate-500 leading-relaxed",children:'You can select different profiles (Trisha, Poorvi, Raghav, Saksham, etc.) on our home screen to check their active Hinglish message flows, and click "Launch" on WhatsApp or Telegram to connect to them instantly.'})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("h3",{className:"text-sm md:text-base font-extrabold text-slate-950",children:"Q: Do they understand Hinglish?"}),w.jsx("p",{className:"text-xs md:text-sm text-slate-500 leading-relaxed",children:"Yes! That is our specialized feature. They are highly trained on natural Indian conversational slang, jokes, emojis, and emotional comfort prompts."})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("h3",{className:"text-sm md:text-base font-extrabold text-slate-950",children:"Q: How do I clear my virtual friend's memory?"}),w.jsx("p",{className:"text-xs md:text-sm text-slate-500 leading-relaxed",children:"Simply type `/delete` or `/reset` in your active chat box on Telegram or WhatsApp. This will immediately purge your custom companion's memory cache, restoring the default character state."})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("h3",{className:"text-sm md:text-base font-extrabold text-slate-950",children:"Q: Who should I reach out to for help?"}),w.jsxs("p",{className:"text-xs md:text-sm text-slate-500 leading-relaxed",children:["Our support team is active 24/7. Simply send a detailed support inquiry or activation query directly via email to ",w.jsx("strong",{className:"text-emerald-700",children:"support@elitefriendss.com"}),"."]})]})]}),w.jsxs("div",{className:"bg-slate-50 border border-slate-200/60 rounded-2xl p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 max-w-2xl mx-auto text-center",children:[w.jsx("h3",{className:"text-base md:text-lg font-extrabold text-slate-900",children:"Have more questions or feedback?"}),w.jsx("p",{className:"text-xs text-slate-500 leading-relaxed",children:"We would love to hear from you! For user assistance, feature requests, or developer partnerships, email our official desk:"}),w.jsxs("div",{className:"inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white border border-slate-200 rounded-xl font-mono text-xs text-emerald-700 font-bold",children:[w.jsx(wy,{className:"w-4 h-4 text-emerald-600"}),w.jsx("span",{children:"support@elitefriendss.com"})]})]})]})}function w3(){const a=na();return w.jsxs("header",{className:"ai-header bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm",children:[w.jsxs("div",{className:"max-w-6xl mx-auto px-3 md:px-4 py-2.5 md:py-3 flex items-center justify-between",children:[w.jsxs(en,{to:"/",className:"flex items-center space-x-2 md:space-x-3 text-left focus:outline-none cursor-pointer shrink-0",children:[w.jsx("img",{src:"/elitefriendss-logo.jpeg?v=2",alt:"Elite Friends Logo",className:"w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-xl object-cover shadow-sm"}),w.jsxs("div",{children:[w.jsx("span",{className:"text-lg md:text-xl font-extrabold tracking-tight text-slate-950 font-sans",children:"ELITE FRIENDS"}),w.jsx("p",{className:"text-[9px] md:text-[10px] text-emerald-600 font-bold tracking-wider uppercase hidden sm:block font-sans",children:"Your AI Astrologer & Trusted Friend"})]})]}),w.jsxs("nav",{className:"hidden md:flex items-center space-x-4 lg:space-x-6 text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500",children:[w.jsx(en,{to:"/",className:`hover:text-emerald-600 transition cursor-pointer py-1.5 px-1.5 rounded ${a.pathname==="/"?"text-emerald-600 font-extrabold border-b-2 border-emerald-500 rounded-none":""}`,children:"Home"}),w.jsx(en,{to:"/faq",className:`hover:text-emerald-600 transition cursor-pointer py-1.5 px-1.5 rounded ${a.pathname==="/faq"?"text-emerald-600 font-extrabold border-b-2 border-emerald-500 rounded-none":""}`,children:"FAQ"}),w.jsx(en,{to:"/blog",className:`hover:text-emerald-600 transition cursor-pointer py-1.5 px-1.5 rounded ${a.pathname.startsWith("/blog")?"text-emerald-600 font-extrabold border-b-2 border-emerald-500 rounded-none":""}`,children:"Blog"}),w.jsx(en,{to:"/privacy-policy",className:`hover:text-emerald-600 transition cursor-pointer py-1.5 px-1.5 rounded ${a.pathname==="/privacy-policy"?"text-emerald-600 font-extrabold border-b-2 border-emerald-500 rounded-none":""}`,children:"Privacy"})]}),w.jsxs("div",{className:"flex items-center space-x-1.5 md:space-x-2 shrink-0",children:[w.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-1 bg-[#25D366] hover:bg-[#20ba5a] text-white text-[10px] md:text-[11px] font-extrabold px-2 md:px-3 py-1.5 md:py-2 rounded-lg md:rounded-xl transition shadow-sm cursor-pointer",children:[w.jsx(Js,{className:"w-3 h-3 md:w-3.5 md:h-3.5 fill-white"}),w.jsx("span",{className:"hidden lg:inline text-[10px] md:text-[11px]",children:"WhatsApp Chat"}),w.jsx("span",{className:"lg:hidden text-[10px] md:text-[11px]",children:"WhatsApp"})]}),w.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-1 bg-[#229ED9] hover:bg-[#1a82b3] text-white text-[10px] md:text-[11px] font-extrabold px-2 md:px-3 py-1.5 md:py-2 rounded-lg md:rounded-xl transition shadow-sm cursor-pointer",children:[w.jsx(eo,{className:"w-2.5 h-2.5 md:w-3 md:h-3 fill-white"}),w.jsx("span",{className:"hidden lg:inline text-[10px] md:text-[11px]",children:"Telegram Chat"}),w.jsx("span",{className:"lg:hidden text-[10px] md:text-[11px]",children:"Telegram"})]})]})]}),w.jsxs("div",{className:"md:hidden bg-slate-50 border-t border-slate-100 px-3 md:px-4 py-1.5 md:py-2 flex items-center justify-center space-x-3 md:space-x-4 overflow-x-auto text-[10px] font-bold text-slate-500 scrollbar-none",children:[w.jsx(en,{to:"/",className:`px-2 md:px-3 py-1 rounded-md transition whitespace-nowrap text-[10px] ${a.pathname==="/"?"bg-emerald-500 text-white font-extrabold":"hover:text-emerald-600"}`,children:"Home"}),w.jsx(en,{to:"/faq",className:`px-2 md:px-3 py-1 rounded-md transition whitespace-nowrap text-[10px] ${a.pathname==="/faq"?"bg-emerald-500 text-white font-extrabold":"hover:text-emerald-600"}`,children:"FAQ"}),w.jsx(en,{to:"/blog",className:`px-2 md:px-3 py-1 rounded-md transition whitespace-nowrap text-[10px] ${a.pathname.startsWith("/blog")?"bg-emerald-500 text-white font-extrabold":"hover:text-emerald-600"}`,children:"Astrology Blog"}),w.jsx(en,{to:"/privacy-policy",className:`px-2 md:px-3 py-1 rounded-md transition whitespace-nowrap text-[10px] ${a.pathname==="/privacy-policy"?"bg-emerald-500 text-white font-extrabold":"hover:text-emerald-600"}`,children:"Privacy"})]})]})}function C3(){return w.jsx("footer",{className:"ai-footer bg-white border-t border-slate-100 pt-6 md:pt-8 pb-20 md:pb-8 px-3 md:px-4 text-center text-slate-400 text-[10px] md:text-xs mt-auto",children:w.jsxs("div",{className:"max-w-6xl mx-auto space-y-4 md:space-y-5",children:[w.jsxs("div",{className:"footer-sitemap text-left",children:[w.jsxs("div",{className:"footer-brand",children:[w.jsx("div",{className:"footer-mark",children:w.jsx(pm,{className:"w-5 h-5"})}),w.jsx("h2",{children:"Elite Friends"}),w.jsx("p",{children:"Your private AI astrologer and trusted digital companion—available whenever you need clarity or conversation."})]}),w.jsxs("div",{children:[w.jsx("h3",{children:"Help Center"}),w.jsx(en,{to:"/faq",children:"Help & FAQ"}),w.jsx(en,{to:"/privacy-policy",children:"Privacy & Terms"}),w.jsx("a",{href:"mailto:support@elitefriendss.com",children:"Contact Support"})]}),w.jsxs("div",{children:[w.jsx("h3",{children:"Astrology Blog"}),w.jsx(en,{to:"/blog",children:"All Blog Articles"}),w.jsx(en,{to:"/blog/elite-friends-ai-astrologer-and-friend",children:"AI Astrologer & Friend"}),w.jsx(en,{to:"/blog/online-ai-astrologer-love-career-guidance",children:"Love & Career Guide"})]}),w.jsxs("div",{children:[w.jsx("h3",{children:"Learning Guides"}),w.jsx(en,{to:"/blog/daily-horoscope-rashifal-guide",children:"Daily Horoscope Guide"}),w.jsx(en,{to:"/blog/kundli-birth-chart-basics",children:"Kundli & Birth Chart"}),w.jsx("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",children:"WhatsApp AI Chat"})]}),w.jsxs("div",{children:[w.jsx("h3",{children:"Elite Friends"}),w.jsx("p",{children:"Private Hinglish conversations, astrology insights, and thoughtful AI companionship."}),w.jsx("span",{className:"footer-status",children:"● Systems online"})]})]}),w.jsx("div",{className:"footer-divider"}),w.jsx("p",{className:"font-extrabold tracking-widest text-slate-700 uppercase text-[10px] md:text-xs",children:"ELITE FRIENDS © 2026 . A UNIT OF AI ASTROLOGY"}),w.jsx("p",{className:"max-w-xl mx-auto leading-relaxed text-slate-400 text-[9px] md:text-xs px-2",children:"Intimate, loving companion application. Play responsibly. All characters on the landing page are virtual profiles representing helpful friendly companions. Absolutely no explicit or 18+ content supported. For customer assistance, email support at support@elitefriendss.com."}),w.jsx("p",{className:"text-[9px] md:text-xs",children:" © 2026 ELITEFRIENDSS. A UNIT OF AI ASTROLOGY."})]})})}function D3(){return w.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-3 md:px-4 py-2.5 md:py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden",children:w.jsxs("div",{className:"max-w-md mx-auto flex items-center gap-2 md:gap-3",children:[w.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center space-x-1.5 md:space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-[10px] md:text-xs py-2 md:py-3 px-2 md:px-3 rounded-lg md:rounded-xl transition shadow-sm",children:[w.jsx(Js,{className:"w-3.5 h-3.5 md:w-4 md:h-4 fill-white"}),w.jsx("span",{className:"text-[10px] md:text-xs",children:"Chat on WhatsApp"})]}),w.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center space-x-1.5 md:space-x-2 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-extrabold text-[10px] md:text-xs py-2 md:py-3 px-2 md:px-3 rounded-lg md:rounded-xl transition shadow-sm",children:[w.jsx(eo,{className:"w-3 h-3 md:w-3.5 md:h-3.5 fill-white"}),w.jsx("span",{className:"text-[10px] md:text-xs",children:"Chat on Telegram"})]})]})})}function N3(){const[a]=ue.useState(Bv),[e,n]=ue.useState(Bv[0]),r=[{text:"एलीट फ्रेंड",lang:"Hindi"},{text:"Elite Friends",lang:"English"},{text:"ಎಲೈಟ್ ಫ್ರೆಂಡ್",lang:"Kannada"},{text:"ఎలైట్ ఫ్రెండ్",lang:"Telugu"},{text:"എലൈറ്റ് ഫ്രണ്ട്",lang:"Malayalam"},{text:"எலைட் பிரண்ட்",lang:"Tamil"},{text:"এলিট ফ্রেন্ড",lang:"Bengali"},{text:"Elite Friend",lang:"English"}],[o,c]=ue.useState(0);return ue.useEffect(()=>{const u=setInterval(()=>{c(h=>(h+1)%r.length)},2500);return()=>clearInterval(u)},[]),w.jsx(BT,{children:w.jsxs("div",{className:"app-shell min-h-screen bg-[#fafbfc] text-slate-800 font-sans flex flex-col antialiased",children:[w.jsx(E3,{}),w.jsx(Tm,{}),w.jsx(w3,{}),w.jsxs(pT,{children:[w.jsx($s,{path:"/",element:w.jsx(T3,{companions:a,selectedCompanion:e,setSelectedCompanion:n,animatedPhrases:r,phraseIdx:o})}),w.jsx($s,{path:"/faq",element:w.jsx(R3,{})}),w.jsx($s,{path:"/privacy-policy",element:w.jsx(A3,{})}),w.jsx($s,{path:"/blog",element:w.jsx(uA,{})}),w.jsx($s,{path:"/blog/:slug",element:w.jsx(fA,{})})]}),w.jsx(C3,{}),w.jsx(D3,{})]})})}const U3="modulepreload",L3=function(a){return"/"+a},z_={},O3=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){let u=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=u(n.map(p=>{if(p=L3(p),p in z_)return;z_[p]=!0;const g=p.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const x=document.createElement("link");if(x.rel=g?"stylesheet":U3,g||(x.as="script"),x.crossOrigin="",x.href=p,m&&x.setAttribute("nonce",m),document.head.appendChild(x),g)return new Promise((b,E)=>{x.addEventListener("load",b),x.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return o.then(u=>{for(const h of u||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})},P3=()=>{};var H_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=function(a){const e=[];let n=0;for(let r=0;r<a.length;r++){let o=a.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<a.length&&(a.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(a.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},I3=function(a){const e=[];let n=0,r=0;for(;n<a.length;){const o=a[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=a[n++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=a[n++],u=a[n++],h=a[n++],m=((o&7)<<18|(c&63)<<12|(u&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const c=a[n++],u=a[n++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|u&63)}}return e.join("")},xS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<a.length;o+=3){const c=a[o],u=o+1<a.length,h=u?a[o+1]:0,m=o+2<a.length,p=m?a[o+2]:0,g=c>>2,v=(c&3)<<4|h>>4;let x=(h&15)<<2|p>>6,b=p&63;m||(b=64,u||(x=64)),r.push(n[g],n[v],n[x],n[b])}return r.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(gS(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):I3(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<a.length;){const c=n[a.charAt(o++)],h=o<a.length?n[a.charAt(o)]:0;++o;const p=o<a.length?n[a.charAt(o)]:64;++o;const v=o<a.length?n[a.charAt(o)]:64;if(++o,c==null||h==null||p==null||v==null)throw new F3;const x=c<<2|h>>4;if(r.push(x),p!==64){const b=h<<4&240|p>>2;if(r.push(b),v!==64){const E=p<<6&192|v;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class F3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B3=function(a){const e=gS(a);return xS.encodeByteArray(e,!0)},vS=function(a){return B3(a).replace(/\./g,"")},z3=function(a){try{return xS.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G3=()=>H3().__FIREBASE_DEFAULTS__,V3=()=>{if(typeof process>"u"||typeof H_>"u")return;const a=H_.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},k3=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=a&&z3(a[1]);return e&&JSON.parse(e)},W3=()=>{try{return P3()||G3()||V3()||k3()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},_S=()=>{var a;return(a=W3())==null?void 0:a.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function pN(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function q3(){try{return typeof indexedDB=="object"}catch{return!1}}function Y3(){return new Promise((a,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),a(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}function mN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j3="FirebaseError";class Nl extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=j3,Object.setPrototypeOf(this,Nl.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yS.prototype.create)}}class yS{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],u=c?Z3(c,r):"Error",h=`${this.serviceName}: ${u} (${o}).`;return new Nl(o,h,r)}}function Z3(a,e){return a.replace(K3,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const K3=/\{\$([^}]+)}/g;function Kp(a,e){if(a===e)return!0;const n=Object.keys(a),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const c=a[o],u=e[o];if(G_(c)&&G_(u)){if(!Kp(c,u))return!1}else if(c!==u)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function G_(a){return a!==null&&typeof a=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q3=1e3,$3=2,J3=14400*1e3,eD=.5;function gN(a,e=Q3,n=$3){const r=e*Math.pow(n,a),o=Math.round(eD*r*(Math.random()-.5)*2);return Math.min(J3,r+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(a){return a&&a._delegate?a._delegate:a}class Pu{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new X3;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iD(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(c);r===h&&u.resolve(o)}return o}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(r)??new Set;o.add(e),this.onInitCallbacks.set(r,o);const c=this.instances.get(r);return c&&e(c,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nD(a){return a===Zr?void 0:a}function iD(a){return a.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zt;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Zt||(Zt={}));const rD={debug:Zt.DEBUG,verbose:Zt.VERBOSE,info:Zt.INFO,warn:Zt.WARN,error:Zt.ERROR,silent:Zt.SILENT},sD=Zt.INFO,oD={[Zt.DEBUG]:"log",[Zt.VERBOSE]:"log",[Zt.INFO]:"info",[Zt.WARN]:"warn",[Zt.ERROR]:"error"},lD=(a,e,...n)=>{if(e<a.logLevel)return;const r=new Date().toISOString(),o=oD[e];if(o)console[o](`[${r}]  ${a.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cD{constructor(e){this.name=e,this._logLevel=sD,this._logHandler=lD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Zt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Zt.DEBUG,...e),this._logHandler(this,Zt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Zt.VERBOSE,...e),this._logHandler(this,Zt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Zt.INFO,...e),this._logHandler(this,Zt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Zt.WARN,...e),this._logHandler(this,Zt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Zt.ERROR,...e),this._logHandler(this,Zt.ERROR,...e)}}const uD=(a,e)=>e.some(n=>a instanceof n);let V_,k_;function fD(){return V_||(V_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dD(){return k_||(k_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SS=new WeakMap,Qp=new WeakMap,bS=new WeakMap,Yh=new WeakMap,Am=new WeakMap;function hD(a){const e=new Promise((n,r)=>{const o=()=>{a.removeEventListener("success",c),a.removeEventListener("error",u)},c=()=>{n(yr(a.result)),o()},u=()=>{r(a.error),o()};a.addEventListener("success",c),a.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&SS.set(n,a)}).catch(()=>{}),Am.set(e,a),e}function pD(a){if(Qp.has(a))return;const e=new Promise((n,r)=>{const o=()=>{a.removeEventListener("complete",c),a.removeEventListener("error",u),a.removeEventListener("abort",u)},c=()=>{n(),o()},u=()=>{r(a.error||new DOMException("AbortError","AbortError")),o()};a.addEventListener("complete",c),a.addEventListener("error",u),a.addEventListener("abort",u)});Qp.set(a,e)}let $p={get(a,e,n){if(a instanceof IDBTransaction){if(e==="done")return Qp.get(a);if(e==="objectStoreNames")return a.objectStoreNames||bS.get(a);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(a[e])},set(a,e,n){return a[e]=n,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function mD(a){$p=a($p)}function gD(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=a.call(jh(this),e,...n);return bS.set(r,e.sort?e.sort():[e]),yr(r)}:dD().includes(a)?function(...e){return a.apply(jh(this),e),yr(SS.get(this))}:function(...e){return yr(a.apply(jh(this),e))}}function xD(a){return typeof a=="function"?gD(a):(a instanceof IDBTransaction&&pD(a),uD(a,fD())?new Proxy(a,$p):a)}function yr(a){if(a instanceof IDBRequest)return hD(a);if(Yh.has(a))return Yh.get(a);const e=xD(a);return e!==a&&(Yh.set(a,e),Am.set(e,a)),e}const jh=a=>Am.get(a);function vD(a,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const u=indexedDB.open(a,e),h=yr(u);return r&&u.addEventListener("upgradeneeded",m=>{r(yr(u.result),m.oldVersion,m.newVersion,yr(u.transaction),m)}),n&&u.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),h.then(m=>{c&&m.addEventListener("close",()=>c()),o&&m.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const _D=["get","getKey","getAll","getAllKeys","count"],yD=["put","add","delete","clear"],Zh=new Map;function W_(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(Zh.get(e))return Zh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=yD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||_D.includes(n)))return;const c=async function(u,...h){const m=this.transaction(u,o?"readwrite":"readonly");let p=m.store;return r&&(p=p.index(h.shift())),(await Promise.all([p[n](...h),o&&m.done]))[0]};return Zh.set(e,c),c}mD(a=>({...a,get:(e,n,r)=>W_(e,n)||a.get(e,n,r),has:(e,n)=>!!W_(e,n)||a.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bD(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jp="@firebase/app",X_="0.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new cD("@firebase/app"),MD="@firebase/app-compat",ED="@firebase/analytics-compat",TD="@firebase/analytics",AD="@firebase/app-check-compat",RD="@firebase/app-check",wD="@firebase/auth",CD="@firebase/auth-compat",DD="@firebase/database",ND="@firebase/data-connect",UD="@firebase/database-compat",LD="@firebase/functions",OD="@firebase/functions-compat",PD="@firebase/installations",ID="@firebase/installations-compat",FD="@firebase/messaging",BD="@firebase/messaging-compat",zD="@firebase/performance",HD="@firebase/performance-compat",GD="@firebase/remote-config",VD="@firebase/remote-config-compat",kD="@firebase/storage",WD="@firebase/storage-compat",XD="@firebase/firestore",qD="@firebase/ai",YD="@firebase/firestore-compat",jD="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="[DEFAULT]",ZD={[Jp]:"fire-core",[MD]:"fire-core-compat",[TD]:"fire-analytics",[ED]:"fire-analytics-compat",[RD]:"fire-app-check",[AD]:"fire-app-check-compat",[wD]:"fire-auth",[CD]:"fire-auth-compat",[DD]:"fire-rtdb",[ND]:"fire-data-connect",[UD]:"fire-rtdb-compat",[LD]:"fire-fn",[OD]:"fire-fn-compat",[PD]:"fire-iid",[ID]:"fire-iid-compat",[FD]:"fire-fcm",[BD]:"fire-fcm-compat",[zD]:"fire-perf",[HD]:"fire-perf-compat",[GD]:"fire-rc",[VD]:"fire-rc-compat",[kD]:"fire-gcs",[WD]:"fire-gcs-compat",[XD]:"fire-fst",[YD]:"fire-fst-compat",[qD]:"fire-vertex","fire-js":"fire-js",[jD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new Map,KD=new Map,tm=new Map;function q_(a,e){try{a.container.addComponent(e)}catch(n){Fa.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,n)}}function nm(a){const e=a.name;if(tm.has(e))return Fa.debug(`There were multiple attempts to register component ${e}.`),!1;tm.set(e,a);for(const n of Iu.values())q_(n,a);for(const n of KD.values())q_(n,a);return!0}function vN(a,e){const n=a.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),a.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new yS("app","Firebase",QD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pu("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}function MS(a,e={}){let n=a;typeof e!="object"&&(e={name:e});const r={name:em,automaticDataCollectionEnabled:!0,...e},o=r.name;if(typeof o!="string"||!o)throw Sr.create("bad-app-name",{appName:String(o)});if(n||(n=_S()),!n)throw Sr.create("no-options");const c=Iu.get(o);if(c){if(Kp(n,c.options)&&Kp(r,c.config))return c;throw Sr.create("duplicate-app",{appName:o})}const u=new aD(o);for(const m of tm.values())u.addComponent(m);const h=new $D(n,r,u);return Iu.set(o,h),h}function _N(a=em){const e=Iu.get(a);if(!e&&a===em&&_S())return MS();if(!e)throw Sr.create("no-app",{appName:a});return e}function Tu(a,e,n){let r=ZD[a]??a;n&&(r+=`-${n}`);const o=r.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&c&&u.push("and"),c&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fa.warn(u.join(" "));return}nm(new Pu(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD="firebase-heartbeat-database",eN=1,Ml="firebase-heartbeat-store";let Kh=null;function ES(){return Kh||(Kh=vD(JD,eN,{upgrade:(a,e)=>{switch(e){case 0:try{a.createObjectStore(Ml)}catch(n){console.warn(n)}}}}).catch(a=>{throw Sr.create("idb-open",{originalErrorMessage:a.message})})),Kh}async function tN(a){try{const n=(await ES()).transaction(Ml),r=await n.objectStore(Ml).get(TS(a));return await n.done,r}catch(e){if(e instanceof Nl)Fa.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fa.warn(n.message)}}}async function Y_(a,e){try{const r=(await ES()).transaction(Ml,"readwrite");await r.objectStore(Ml).put(e,TS(a)),await r.done}catch(n){if(n instanceof Nl)Fa.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fa.warn(r.message)}}}function TS(a){return`${a.name}!${a.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=1024,iN=30;class aN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=j_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(u=>u.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>iN){const u=oN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Fa.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=j_(),{heartbeatsToSend:r,unsentEntries:o}=rN(this._heartbeatsCache.heartbeats),c=vS(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Fa.warn(n),""}}}function j_(){return new Date().toISOString().substring(0,10)}function rN(a,e=nN){const n=[];let r=a.slice();for(const o of a){const c=n.find(u=>u.agent===o.agent);if(c){if(c.dates.push(o.date),Z_(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Z_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q3()?Y3().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Y_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Y_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Z_(a){return vS(JSON.stringify({version:2,heartbeats:a})).length}function oN(a){if(a.length===0)return-1;let e=0,n=a[0].date;for(let r=1;r<a.length;r++)a[r].date<n&&(n=a[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(a){nm(new Pu("platform-logger",e=>new SD(e),"PRIVATE")),nm(new Pu("heartbeat",e=>new aN(e),"PRIVATE")),Tu(Jp,X_,a),Tu(Jp,X_,"esm2020"),Tu("fire-js","")}lN("");var cN="firebase",uN="12.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tu(cN,uN,"app");const AS={apiKey:"AIzaSyDIA1VKqVLy9k3DeLJ22tBrPqCOelmWez0",authDomain:"elitefriendss-43e85.firebaseapp.com",databaseURL:"https://elitefriendss-43e85-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"elitefriendss-43e85",storageBucket:"elitefriendss-43e85.firebasestorage.app",messagingSenderId:"450064022815",appId:"1:450064022815:web:36bdfa70d0136da1de442a",measurementId:"G-3SVMCLB4N5"},fN=MS(AS);async function dN(){const{getAnalytics:a,isSupported:e}=await O3(async()=>{const{getAnalytics:r,isSupported:o}=await import("./index.esm-BKl1iU3e.js");return{getAnalytics:r,isSupported:o}},[]);return await e()&&AS.measurementId?a(fN):null}dN();HM.createRoot(document.getElementById("root")).render(w.jsx(ue.StrictMode,{children:w.jsx(ny,{children:w.jsx(N3,{})})}));export{Pu as C,yS as E,Nl as F,cD as L,nm as _,vN as a,mN as b,q3 as c,_N as d,Kp as e,gN as f,xN as g,pN as i,vD as o,Tu as r,Y3 as v};
