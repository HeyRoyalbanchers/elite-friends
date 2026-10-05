var QM=Object.defineProperty;var JM=(a,e,n)=>e in a?QM(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var Ea=(a,e,n)=>JM(a,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Gu(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var nh={exports:{}},cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rx;function $M(){if(Rx)return cl;Rx=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return cl.Fragment=e,cl.jsx=n,cl.jsxs=n,cl}var Cx;function eE(){return Cx||(Cx=1,nh.exports=$M()),nh.exports}var D=eE(),ih={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx;function tE(){if(Dx)return st;Dx=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function _(I,Q,Te){this.props=I,this.context=Q,this.refs=S,this.updater=Te||M}_.prototype.isReactComponent={},_.prototype.setState=function(I,Q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Q,"setState")},_.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function R(){}R.prototype=_.prototype;function U(I,Q,Te){this.props=I,this.context=Q,this.refs=S,this.updater=Te||M}var A=U.prototype=new R;A.constructor=U,w(A,_.prototype),A.isPureReactComponent=!0;var P=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(I,Q,Te){var Ce=Te.ref;return{$$typeof:a,type:I,key:Q,ref:Ce!==void 0?Ce:null,props:Te}}function V(I,Q){return O(I.type,Q,I.props)}function k(I){return typeof I=="object"&&I!==null&&I.$$typeof===a}function j(I){var Q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Te){return Q[Te]})}var ce=/\/+/g;function ue(I,Q){return typeof I=="object"&&I!==null&&I.key!=null?j(""+I.key):Q.toString(36)}function K(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(Q){I.status==="pending"&&(I.status="fulfilled",I.value=Q)},function(Q){I.status==="pending"&&(I.status="rejected",I.reason=Q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function H(I,Q,Te,Ce,Be){var re=typeof I;(re==="undefined"||re==="boolean")&&(I=null);var be=!1;if(I===null)be=!0;else switch(re){case"bigint":case"string":case"number":be=!0;break;case"object":switch(I.$$typeof){case a:case e:be=!0;break;case g:return be=I._init,H(be(I._payload),Q,Te,Ce,Be)}}if(be)return Be=Be(I),be=Ce===""?"."+ue(I,0):Ce,P(Be)?(Te="",be!=null&&(Te=be.replace(ce,"$&/")+"/"),H(Be,Q,Te,"",function(at){return at})):Be!=null&&(k(Be)&&(Be=V(Be,Te+(Be.key==null||I&&I.key===Be.key?"":(""+Be.key).replace(ce,"$&/")+"/")+be)),Q.push(Be)),1;be=0;var Ee=Ce===""?".":Ce+":";if(P(I))for(var Ge=0;Ge<I.length;Ge++)Ce=I[Ge],re=Ee+ue(Ce,Ge),be+=H(Ce,Q,Te,re,Be);else if(Ge=y(I),typeof Ge=="function")for(I=Ge.call(I),Ge=0;!(Ce=I.next()).done;)Ce=Ce.value,re=Ee+ue(Ce,Ge++),be+=H(Ce,Q,Te,re,Be);else if(re==="object"){if(typeof I.then=="function")return H(K(I),Q,Te,Ce,Be);throw Q=String(I),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return be}function F(I,Q,Te){if(I==null)return I;var Ce=[],Be=0;return H(I,Ce,"","",function(re){return Q.call(Te,re,Be++)}),Ce}function $(I){if(I._status===-1){var Q=I._result;Q=Q(),Q.then(function(Te){(I._status===0||I._status===-1)&&(I._status=1,I._result=Te)},function(Te){(I._status===0||I._status===-1)&&(I._status=2,I._result=Te)}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var ge=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},ye={map:F,forEach:function(I,Q,Te){F(I,function(){Q.apply(this,arguments)},Te)},count:function(I){var Q=0;return F(I,function(){Q++}),Q},toArray:function(I){return F(I,function(Q){return Q})||[]},only:function(I){if(!k(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return st.Activity=x,st.Children=ye,st.Component=_,st.Fragment=n,st.Profiler=o,st.PureComponent=U,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,st.__COMPILER_RUNTIME={__proto__:null,c:function(I){return B.H.useMemoCache(I)}},st.cache=function(I){return function(){return I.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(I,Q,Te){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ce=w({},I.props),Be=I.key;if(Q!=null)for(re in Q.key!==void 0&&(Be=""+Q.key),Q)!T.call(Q,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&Q.ref===void 0||(Ce[re]=Q[re]);var re=arguments.length-2;if(re===1)Ce.children=Te;else if(1<re){for(var be=Array(re),Ee=0;Ee<re;Ee++)be[Ee]=arguments[Ee+2];Ce.children=be}return O(I.type,Be,Ce)},st.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},st.createElement=function(I,Q,Te){var Ce,Be={},re=null;if(Q!=null)for(Ce in Q.key!==void 0&&(re=""+Q.key),Q)T.call(Q,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Be[Ce]=Q[Ce]);var be=arguments.length-2;if(be===1)Be.children=Te;else if(1<be){for(var Ee=Array(be),Ge=0;Ge<be;Ge++)Ee[Ge]=arguments[Ge+2];Be.children=Ee}if(I&&I.defaultProps)for(Ce in be=I.defaultProps,be)Be[Ce]===void 0&&(Be[Ce]=be[Ce]);return O(I,re,Be)},st.createRef=function(){return{current:null}},st.forwardRef=function(I){return{$$typeof:d,render:I}},st.isValidElement=k,st.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:$}},st.memo=function(I,Q){return{$$typeof:h,type:I,compare:Q===void 0?null:Q}},st.startTransition=function(I){var Q=B.T,Te={};B.T=Te;try{var Ce=I(),Be=B.S;Be!==null&&Be(Te,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(L,ge)}catch(re){ge(re)}finally{Q!==null&&Te.types!==null&&(Q.types=Te.types),B.T=Q}},st.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},st.use=function(I){return B.H.use(I)},st.useActionState=function(I,Q,Te){return B.H.useActionState(I,Q,Te)},st.useCallback=function(I,Q){return B.H.useCallback(I,Q)},st.useContext=function(I){return B.H.useContext(I)},st.useDebugValue=function(){},st.useDeferredValue=function(I,Q){return B.H.useDeferredValue(I,Q)},st.useEffect=function(I,Q){return B.H.useEffect(I,Q)},st.useEffectEvent=function(I){return B.H.useEffectEvent(I)},st.useId=function(){return B.H.useId()},st.useImperativeHandle=function(I,Q,Te){return B.H.useImperativeHandle(I,Q,Te)},st.useInsertionEffect=function(I,Q){return B.H.useInsertionEffect(I,Q)},st.useLayoutEffect=function(I,Q){return B.H.useLayoutEffect(I,Q)},st.useMemo=function(I,Q){return B.H.useMemo(I,Q)},st.useOptimistic=function(I,Q){return B.H.useOptimistic(I,Q)},st.useReducer=function(I,Q,Te){return B.H.useReducer(I,Q,Te)},st.useRef=function(I){return B.H.useRef(I)},st.useState=function(I){return B.H.useState(I)},st.useSyncExternalStore=function(I,Q,Te){return B.H.useSyncExternalStore(I,Q,Te)},st.useTransition=function(){return B.H.useTransition()},st.version="19.2.7",st}var Nx;function dm(){return Nx||(Nx=1,ih.exports=tE()),ih.exports}var fe=dm();const pn=Gu(fe);var ah={exports:{}},ul={},rh={exports:{}},sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux;function nE(){return Ux||(Ux=1,(function(a){function e(H,F){var $=H.length;H.push(F);e:for(;0<$;){var ge=$-1>>>1,ye=H[ge];if(0<o(ye,F))H[ge]=F,H[$]=ye,$=ge;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var F=H[0],$=H.pop();if($!==F){H[0]=$;e:for(var ge=0,ye=H.length,I=ye>>>1;ge<I;){var Q=2*(ge+1)-1,Te=H[Q],Ce=Q+1,Be=H[Ce];if(0>o(Te,$))Ce<ye&&0>o(Be,Te)?(H[ge]=Be,H[Ce]=$,ge=Ce):(H[ge]=Te,H[Q]=$,ge=Q);else if(Ce<ye&&0>o(Be,$))H[ge]=Be,H[Ce]=$,ge=Ce;else break e}}return F}function o(H,F){var $=H.sortIndex-F.sortIndex;return $!==0?$:H.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var m=[],h=[],g=1,x=null,v=3,y=!1,M=!1,w=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function A(H){for(var F=n(h);F!==null;){if(F.callback===null)r(h);else if(F.startTime<=H)r(h),F.sortIndex=F.expirationTime,e(m,F);else break;F=n(h)}}function P(H){if(w=!1,A(H),!M)if(n(m)!==null)M=!0,L||(L=!0,j());else{var F=n(h);F!==null&&K(P,F.startTime-H)}}var L=!1,B=-1,T=5,O=-1;function V(){return S?!0:!(a.unstable_now()-O<T)}function k(){if(S=!1,L){var H=a.unstable_now();O=H;var F=!0;try{e:{M=!1,w&&(w=!1,R(B),B=-1),y=!0;var $=v;try{t:{for(A(H),x=n(m);x!==null&&!(x.expirationTime>H&&V());){var ge=x.callback;if(typeof ge=="function"){x.callback=null,v=x.priorityLevel;var ye=ge(x.expirationTime<=H);if(H=a.unstable_now(),typeof ye=="function"){x.callback=ye,A(H),F=!0;break t}x===n(m)&&r(m),A(H)}else r(m);x=n(m)}if(x!==null)F=!0;else{var I=n(h);I!==null&&K(P,I.startTime-H),F=!1}}break e}finally{x=null,v=$,y=!1}F=void 0}}finally{F?j():L=!1}}}var j;if(typeof U=="function")j=function(){U(k)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ue=ce.port2;ce.port1.onmessage=k,j=function(){ue.postMessage(null)}}else j=function(){_(k,0)};function K(H,F){B=_(function(){H(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(H){switch(v){case 1:case 2:case 3:var F=3;break;default:F=v}var $=v;v=F;try{return H()}finally{v=$}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(H,F){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var $=v;v=H;try{return F()}finally{v=$}},a.unstable_scheduleCallback=function(H,F,$){var ge=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,H){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=$+ye,H={id:g++,callback:F,priorityLevel:H,startTime:$,expirationTime:ye,sortIndex:-1},$>ge?(H.sortIndex=$,e(h,H),n(m)===null&&H===n(h)&&(w?(R(B),B=-1):w=!0,K(P,$-ge))):(H.sortIndex=ye,e(m,H),M||y||(M=!0,L||(L=!0,j()))),H},a.unstable_shouldYield=V,a.unstable_wrapCallback=function(H){var F=v;return function(){var $=v;v=F;try{return H.apply(this,arguments)}finally{v=$}}}})(sh)),sh}var Lx;function iE(){return Lx||(Lx=1,rh.exports=nE()),rh.exports}var oh={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox;function aE(){if(Ox)return Bn;Ox=1;var a=dm();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:m,containerInfo:h,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Bn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},Bn.flushSync=function(m){var h=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=h,r.p=g,r.d.f()}},Bn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Bn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,x=d(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Bn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Bn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,x=d(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Bn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Bn.requestFormReset=function(m){r.d.r(m)},Bn.unstable_batchedUpdates=function(m,h){return m(h)},Bn.useFormState=function(m,h,g){return u.H.useFormState(m,h,g)},Bn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Bn.version="19.2.7",Bn}var Px;function rE(){if(Px)return oh.exports;Px=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),oh.exports=aE(),oh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix;function sE(){if(Ix)return ul;Ix=1;var a=iE(),e=dm(),n=rE();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),i;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var b=!1,N=f.child;N;){if(N===s){b=!0,s=f,l=p;break}if(N===l){b=!0,l=f,s=p;break}N=N.sibling}if(!b){for(N=p.child;N;){if(N===s){b=!0,s=p,l=f;break}if(N===l){b=!0,l=p,s=f;break}N=N.sibling}if(!b)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),U=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case L:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case A:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:ue(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return ue(t(i))}catch{}}return null}var K=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],ye=-1;function I(t){return{current:t}}function Q(t){0>ye||(t.current=ge[ye],ge[ye]=null,ye--)}function Te(t,i){ye++,ge[ye]=t.current,t.current=i}var Ce=I(null),Be=I(null),re=I(null),be=I(null);function Ee(t,i){switch(Te(re,i),Te(Be,t),Te(Ce,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Qv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Qv(i),t=Jv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Ce),Te(Ce,t)}function Ge(){Q(Ce),Q(Be),Q(re)}function at(t){t.memoizedState!==null&&Te(be,t);var i=Ce.current,s=Jv(i,t.type);i!==s&&(Te(Be,t),Te(Ce,s))}function Qe(t){Be.current===t&&(Q(Ce),Q(Be)),be.current===t&&(Q(be),rl._currentValue=$)}var qt,ht;function St(t){if(qt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);qt=i&&i[1]||"",ht=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+t+ht}var bt=!1;function pt(t,i){if(!t||bt)return"";bt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(de){var le=de}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(de){le=de}t.call(Se.prototype)}}else{try{throw Error()}catch(de){le=de}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(de){if(de&&le&&typeof de.stack=="string")return[de.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),b=p[0],N=p[1];if(b&&N){var G=b.split(`
`),ne=N.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ne.length&&!ne[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===ne.length)for(l=G.length-1,f=ne.length-1;1<=l&&0<=f&&G[l]!==ne[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==ne[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==ne[f]){var ve=`
`+G[l].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=l&&0<=f);break}}}finally{bt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?St(s):""}function nn(t,i){switch(t.tag){case 26:case 27:case 5:return St(t.type);case 16:return St("Lazy");case 13:return t.child!==i&&i!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return St("Activity");default:return""}}function an(t){try{var i="",s=null;do i+=nn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var rn=Object.prototype.hasOwnProperty,fn=a.unstable_scheduleCallback,Wt=a.unstable_cancelCallback,sn=a.unstable_shouldYield,Z=a.unstable_requestPaint,zt=a.unstable_now,Ct=a.unstable_getCurrentPriorityLevel,z=a.unstable_ImmediatePriority,E=a.unstable_UserBlockingPriority,ee=a.unstable_NormalPriority,se=a.unstable_LowPriority,pe=a.unstable_IdlePriority,Ae=a.log,Ne=a.unstable_setDisableYieldValue,he=null,me=null;function Re(t){if(typeof Ae=="function"&&Ne(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(he,t)}catch{}}var ze=Math.clz32?Math.clz32:Ke,Oe=Math.log,Ue=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(Oe(t)/Ue|0)|0}var Je=256,rt=262144,q=4194304;function we(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var N=l&134217727;return N!==0?(l=N&~p,l!==0?f=we(l):(b&=N,b!==0?f=we(b):s||(s=N&~t,s!==0&&(f=we(s))))):(N=l&~p,N!==0?f=we(N):b!==0?f=we(b):s||(s=l&~t,s!==0&&(f=we(s)))),f===0?0:i!==0&&i!==f&&(i&p)===0&&(p=f&-f,s=i&-i,p>=s||p===32&&(s&4194048)!==0)?i:f}function De(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Fe(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=q;return q<<=1,(q&62914560)===0&&(q=4194304),t}function Ye(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function ke(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Kt(t,i,s,l,f,p){var b=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var N=t.entanglements,G=t.expirationTimes,ne=t.hiddenUpdates;for(s=b&~s;0<s;){var ve=31-ze(s),Se=1<<ve;N[ve]=0,G[ve]=-1;var le=ne[ve];if(le!==null)for(ne[ve]=null,ve=0;ve<le.length;ve++){var de=le[ve];de!==null&&(de.lane&=-536870913)}s&=~Se}l!==0&&Ut(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(b&~i))}function Ut(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-ze(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ai(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ze(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function ri(t,i){var s=i&-i;return s=(s&42)!==0?1:_o(s),(s&(t.suspendedLanes|i))!==0?0:s}function _o(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function yo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function So(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:Sx(t.type))}function os(t,i){var s=F.p;try{return F.p=t,i()}finally{F.p=s}}var Vi=Math.random().toString(36).slice(2),gn="__reactFiber$"+Vi,Cn="__reactProps$"+Vi,Yn="__reactContainer$"+Vi,Er="__reactEvents$"+Vi,Il="__reactListeners$"+Vi,Bl="__reactHandles$"+Vi,Tr="__reactResources$"+Vi,Ha="__reactMarker$"+Vi;function Ga(t){delete t[gn],delete t[Cn],delete t[Er],delete t[Il],delete t[Bl]}function ra(t){var i=t[gn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Yn]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=rx(t);t!==null;){if(s=t[gn])return s;t=rx(t)}return i}t=s,s=t.parentNode}return null}function sa(t){if(t=t[gn]||t[Yn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Ar(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Va(t){var i=t[Tr];return i||(i=t[Tr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function vn(t){t[Ha]=!0}var Fl=new Set,C={};function Y(t,i){oe(t,i),oe(t+"Capture",i)}function oe(t,i){for(C[t]=i,t=0;t<i.length;t++)Fl.add(i[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Pe={};function Ve(t){return rn.call(Pe,t)?!0:rn.call(ae,t)?!1:ie.test(t)?Pe[t]=!0:(ae[t]=!0,!1)}function Le(t,i,s){if(Ve(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function We(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Xe(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ct(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,p.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function At(t){if(!t._valueTracker){var i=ct(t)?"checked":"value";t._valueTracker=Ze(t,i,""+t[i])}}function Qt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=ct(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function Ot(t){return t.replace(Lt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function He(t,i,s,l,f,p,b,N){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+$e(i)):t.value!==""+$e(i)&&(t.value=""+$e(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?mt(t,b,$e(i)):s!=null?mt(t,b,$e(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?t.name=""+$e(N):t.removeAttribute("name")}function In(t,i,s,l,f,p,b,N){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),i!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||i!=null)){At(t);return}s=s!=null?""+$e(s):"",i=i!=null?""+$e(i):s,N||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=N?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),At(t)}function mt(t,i,s){i==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Mn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+$e(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function si(t,i,s){if(i!=null&&(i=""+$e(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+$e(s):""}function Ci(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(K(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=$e(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),At(t)}function oi(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jt(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Pt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Di(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Jt(t,f,l)}else for(var p in i)i.hasOwnProperty(p)&&Jt(t,p,i[p])}function Nt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ka=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wr(t){return ka.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function oa(){}var Ju=null;function $u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ls=null,cs=null;function Km(t){var i=sa(t);if(i&&(t=i.stateNode)){var s=t[Cn]||null;e:switch(t=i.stateNode,i.type){case"input":if(He(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ot(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Cn]||null;if(!f)throw Error(r(90));He(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Qt(l)}break e;case"textarea":si(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Mn(t,!!s.multiple,i,!1)}}}var ef=!1;function Qm(t,i,s){if(ef)return t(i,s);ef=!0;try{var l=t(i);return l}finally{if(ef=!1,(ls!==null||cs!==null)&&(Tc(),ls&&(i=ls,t=cs,cs=ls=null,Km(i),t)))for(i=0;i<t.length;i++)Km(t[i])}}function bo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Cn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=!1;if(la)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){tf=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{tf=!1}var Xa=null,nf=null,zl=null;function Jm(){if(zl)return zl;var t,i=nf,s=i.length,l,f="value"in Xa?Xa.value:Xa.textContent,p=f.length;for(t=0;t<s&&i[t]===f[t];t++);var b=s-t;for(l=1;l<=b&&i[s-l]===f[p-l];l++);return zl=f.slice(t,1<l?1-l:void 0)}function Hl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function $m(){return!1}function jn(t){function i(s,l,f,p,b){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=b,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(s=t[N],this[N]=s?s(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Gl:$m,this.isPropagationStopped=$m,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),i}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=jn(Rr),Eo=x({},Rr,{view:0,detail:0}),ZS=jn(Eo),af,rf,To,kl=x({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(af=t.screenX-To.screenX,rf=t.screenY-To.screenY):rf=af=0,To=t),af)},movementY:function(t){return"movementY"in t?t.movementY:rf}}),eg=jn(kl),KS=x({},kl,{dataTransfer:0}),QS=jn(KS),JS=x({},Eo,{relatedTarget:0}),sf=jn(JS),$S=x({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),eb=jn($S),tb=x({},Rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nb=jn(tb),ib=x({},Rr,{data:0}),tg=jn(ib),ab={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ob(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=sb[t])?!!i[t]:!1}function of(){return ob}var lb=x({},Eo,{key:function(t){if(t.key){var i=ab[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cb=jn(lb),ub=x({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ng=jn(ub),fb=x({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),db=jn(fb),hb=x({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),pb=jn(hb),mb=x({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gb=jn(mb),vb=x({},Rr,{newState:0,oldState:0}),xb=jn(vb),_b=[9,13,27,32],lf=la&&"CompositionEvent"in window,Ao=null;la&&"documentMode"in document&&(Ao=document.documentMode);var yb=la&&"TextEvent"in window&&!Ao,ig=la&&(!lf||Ao&&8<Ao&&11>=Ao),ag=" ",rg=!1;function sg(t,i){switch(t){case"keyup":return _b.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function Sb(t,i){switch(t){case"compositionend":return og(i);case"keypress":return i.which!==32?null:(rg=!0,ag);case"textInput":return t=i.data,t===ag&&rg?null:t;default:return null}}function bb(t,i){if(us)return t==="compositionend"||!lf&&sg(t,i)?(t=Jm(),zl=nf=Xa=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ig&&i.locale!=="ko"?null:i.data;default:return null}}var Mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Mb[t.type]:i==="textarea"}function cg(t,i,s,l){ls?cs?cs.push(l):cs=[l]:ls=l,i=Uc(i,"onChange"),0<i.length&&(s=new Vl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var wo=null,Ro=null;function Eb(t){Wv(t,0)}function Xl(t){var i=Ar(t);if(Qt(i))return t}function ug(t,i){if(t==="change")return i}var fg=!1;if(la){var cf;if(la){var uf="oninput"in document;if(!uf){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),uf=typeof dg.oninput=="function"}cf=uf}else cf=!1;fg=cf&&(!document.documentMode||9<document.documentMode)}function hg(){wo&&(wo.detachEvent("onpropertychange",pg),Ro=wo=null)}function pg(t){if(t.propertyName==="value"&&Xl(Ro)){var i=[];cg(i,Ro,t,$u(t)),Qm(Eb,i)}}function Tb(t,i,s){t==="focusin"?(hg(),wo=i,Ro=s,wo.attachEvent("onpropertychange",pg)):t==="focusout"&&hg()}function Ab(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Ro)}function wb(t,i){if(t==="click")return Xl(i)}function Rb(t,i){if(t==="input"||t==="change")return Xl(i)}function Cb(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var li=typeof Object.is=="function"?Object.is:Cb;function Co(t,i){if(li(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!rn.call(i,f)||!li(t[f],i[f]))return!1}return!0}function mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gg(t,i){var s=mg(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=mg(s)}}function vg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?vg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function xg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=kt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=kt(t.document)}return i}function ff(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Db=la&&"documentMode"in document&&11>=document.documentMode,fs=null,df=null,Do=null,hf=!1;function _g(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;hf||fs==null||fs!==kt(l)||(l=fs,"selectionStart"in l&&ff(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Do&&Co(Do,l)||(Do=l,l=Uc(df,"onSelect"),0<l.length&&(i=new Vl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=fs)))}function Cr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ds={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionrun:Cr("Transition","TransitionRun"),transitionstart:Cr("Transition","TransitionStart"),transitioncancel:Cr("Transition","TransitionCancel"),transitionend:Cr("Transition","TransitionEnd")},pf={},yg={};la&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Dr(t){if(pf[t])return pf[t];if(!ds[t])return t;var i=ds[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in yg)return pf[t]=i[s];return t}var Sg=Dr("animationend"),bg=Dr("animationiteration"),Mg=Dr("animationstart"),Nb=Dr("transitionrun"),Ub=Dr("transitionstart"),Lb=Dr("transitioncancel"),Eg=Dr("transitionend"),Tg=new Map,mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mf.push("scrollEnd");function Ni(t,i){Tg.set(t,i),Y(i,[t])}var Wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vi=[],hs=0,gf=0;function ql(){for(var t=hs,i=gf=hs=0;i<t;){var s=vi[i];vi[i++]=null;var l=vi[i];vi[i++]=null;var f=vi[i];vi[i++]=null;var p=vi[i];if(vi[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}p!==0&&Ag(s,f,p)}}function Yl(t,i,s,l){vi[hs++]=t,vi[hs++]=i,vi[hs++]=s,vi[hs++]=l,gf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function vf(t,i,s,l){return Yl(t,i,s,l),jl(t)}function Nr(t,i){return Yl(t,null,null,i),jl(t)}function Ag(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&i!==null&&(f=31-ze(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),p):null}function jl(t){if(50<Jo)throw Jo=0,Ad=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ps={};function Ob(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,i,s,l){return new Ob(t,i,s,l)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ca(t,i){var s=t.alternate;return s===null?(s=ci(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function wg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Zl(t,i,s,l,f,p){var b=0;if(l=t,typeof t=="function")xf(t)&&(b=1);else if(typeof t=="string")b=zM(t,s,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=ci(31,s,i,f),t.elementType=O,t.lanes=p,t;case w:return Ur(s.children,f,p,i);case S:b=8,f|=24;break;case _:return t=ci(12,s,i,f|2),t.elementType=_,t.lanes=p,t;case P:return t=ci(13,s,i,f),t.elementType=P,t.lanes=p,t;case L:return t=ci(19,s,i,f),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:b=10;break e;case R:b=9;break e;case A:b=11;break e;case B:b=14;break e;case T:b=16,l=null;break e}b=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=ci(b,s,i,f),i.elementType=t,i.type=l,i.lanes=p,i}function Ur(t,i,s,l){return t=ci(7,t,l,i),t.lanes=s,t}function _f(t,i,s){return t=ci(6,t,null,i),t.lanes=s,t}function Rg(t){var i=ci(18,null,null,0);return i.stateNode=t,i}function yf(t,i,s){return i=ci(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Cg=new WeakMap;function xi(t,i){if(typeof t=="object"&&t!==null){var s=Cg.get(t);return s!==void 0?s:(i={value:t,source:i,stack:an(i)},Cg.set(t,i),i)}return{value:t,source:i,stack:an(i)}}var ms=[],gs=0,Kl=null,No=0,_i=[],yi=0,Wa=null,Xi=1,Wi="";function ua(t,i){ms[gs++]=No,ms[gs++]=Kl,Kl=t,No=i}function Dg(t,i,s){_i[yi++]=Xi,_i[yi++]=Wi,_i[yi++]=Wa,Wa=t;var l=Xi;t=Wi;var f=32-ze(l)-1;l&=~(1<<f),s+=1;var p=32-ze(i)+f;if(30<p){var b=f-f%5;p=(l&(1<<b)-1).toString(32),l>>=b,f-=b,Xi=1<<32-ze(i)+f|s<<f|l,Wi=p+t}else Xi=1<<p|s<<f|l,Wi=t}function Sf(t){t.return!==null&&(ua(t,1),Dg(t,1,0))}function bf(t){for(;t===Kl;)Kl=ms[--gs],ms[gs]=null,No=ms[--gs],ms[gs]=null;for(;t===Wa;)Wa=_i[--yi],_i[yi]=null,Wi=_i[--yi],_i[yi]=null,Xi=_i[--yi],_i[yi]=null}function Ng(t,i){_i[yi++]=Xi,_i[yi++]=Wi,_i[yi++]=Wa,Xi=i.id,Wi=i.overflow,Wa=t}var Dn=null,Yt=null,Mt=!1,qa=null,Si=!1,Mf=Error(r(519));function Ya(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(xi(i,t)),Mf}function Ug(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[gn]=t,i[Cn]=l,s){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(s=0;s<el.length;s++)vt(el[s],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":vt("invalid",i),In(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":vt("invalid",i);break;case"textarea":vt("invalid",i),Ci(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Zv(i.textContent,s)?(l.popover!=null&&(vt("beforetoggle",i),vt("toggle",i)),l.onScroll!=null&&vt("scroll",i),l.onScrollEnd!=null&&vt("scrollend",i),l.onClick!=null&&(i.onclick=oa),i=!0):i=!1,i||Ya(t,!0)}function Lg(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Dn=Dn.return}}function vs(t){if(t!==Dn)return!1;if(!Mt)return Lg(t),Mt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Gd(t.type,t.memoizedProps)),s=!s),s&&Yt&&Ya(t),Lg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=ax(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=ax(t)}else i===27?(i=Yt,or(t.type)?(t=qd,qd=null,Yt=t):Yt=i):Yt=Dn?Mi(t.stateNode.nextSibling):null;return!0}function Lr(){Yt=Dn=null,Mt=!1}function Ef(){var t=qa;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),qa=null),t}function Uo(t){qa===null?qa=[t]:qa.push(t)}var Tf=I(null),Or=null,fa=null;function ja(t,i,s){Te(Tf,i._currentValue),i._currentValue=s}function da(t){t._currentValue=Tf.current,Q(Tf)}function Af(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function wf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var b=f.child;p=p.firstContext;e:for(;p!==null;){var N=p;p=f;for(var G=0;G<i.length;G++)if(N.context===i[G]){p.lanes|=s,N=p.alternate,N!==null&&(N.lanes|=s),Af(p.return,s,t),l||(b=null);break e}p=N.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(r(341));b.lanes|=s,p=b.alternate,p!==null&&(p.lanes|=s),Af(b,s,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function xs(t,i,s,l){t=null;for(var f=i,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var N=f.type;li(f.pendingProps.value,b.value)||(t!==null?t.push(N):t=[N])}}else if(f===be.current){if(b=f.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(rl):t=[rl])}f=f.return}t!==null&&wf(i,t,s,l),i.flags|=262144}function Ql(t){for(t=t.firstContext;t!==null;){if(!li(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pr(t){Or=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return Og(Or,t)}function Jl(t,i){return Or===null&&Pr(t),Og(t,i)}function Og(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},fa===null){if(t===null)throw Error(r(308));fa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else fa=fa.next=i;return s}var Pb=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},Ib=a.unstable_scheduleCallback,Bb=a.unstable_NormalPriority,xn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rf(){return{controller:new Pb,data:new Map,refCount:0}}function Lo(t){t.refCount--,t.refCount===0&&Ib(Bb,function(){t.controller.abort()})}var Oo=null,Cf=0,_s=0,ys=null;function Fb(t,i){if(Oo===null){var s=Oo=[];Cf=0,_s=Ud(),ys={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Cf++,i.then(Pg,Pg),i}function Pg(){if(--Cf===0&&Oo!==null){ys!==null&&(ys.status="fulfilled");var t=Oo;Oo=null,_s=0,ys=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function zb(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Ig=H.S;H.S=function(t,i){_v=zt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Fb(t,i),Ig!==null&&Ig(t,i)};var Ir=I(null);function Df(){var t=Ir.current;return t!==null?t:Xt.pooledCache}function $l(t,i){i===null?Te(Ir,Ir.current):Te(Ir,i.pool)}function Bg(){var t=Df();return t===null?null:{parent:xn._currentValue,pool:t}}var Ss=Error(r(460)),Nf=Error(r(474)),ec=Error(r(542)),tc={then:function(){}};function Fg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(oa,oa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Gg(t),t;default:if(typeof i.status=="string")i.then(oa,oa);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Gg(t),t}throw Fr=i,Ss}}function Br(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Fr=s,Ss):s}}var Fr=null;function Hg(){if(Fr===null)throw Error(r(459));var t=Fr;return Fr=null,t}function Gg(t){if(t===Ss||t===ec)throw Error(r(483))}var bs=null,Po=0;function nc(t){var i=Po;return Po+=1,bs===null&&(bs=[]),zg(bs,t,i)}function Io(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ic(t,i){throw i.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Vg(t){function i(J,W){if(t){var te=J.deletions;te===null?(J.deletions=[W],J.flags|=16):te.push(W)}}function s(J,W){if(!t)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function l(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function f(J,W){return J=ca(J,W),J.index=0,J.sibling=null,J}function p(J,W,te){return J.index=te,t?(te=J.alternate,te!==null?(te=te.index,te<W?(J.flags|=67108866,W):te):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function b(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function N(J,W,te,_e){return W===null||W.tag!==6?(W=_f(te,J.mode,_e),W.return=J,W):(W=f(W,te),W.return=J,W)}function G(J,W,te,_e){var et=te.type;return et===w?ve(J,W,te.props.children,_e,te.key):W!==null&&(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Br(et)===W.type)?(W=f(W,te.props),Io(W,te),W.return=J,W):(W=Zl(te.type,te.key,te.props,null,J.mode,_e),Io(W,te),W.return=J,W)}function ne(J,W,te,_e){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=yf(te,J.mode,_e),W.return=J,W):(W=f(W,te.children||[]),W.return=J,W)}function ve(J,W,te,_e,et){return W===null||W.tag!==7?(W=Ur(te,J.mode,_e,et),W.return=J,W):(W=f(W,te),W.return=J,W)}function Se(J,W,te){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=_f(""+W,J.mode,te),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return te=Zl(W.type,W.key,W.props,null,J.mode,te),Io(te,W),te.return=J,te;case M:return W=yf(W,J.mode,te),W.return=J,W;case T:return W=Br(W),Se(J,W,te)}if(K(W)||j(W))return W=Ur(W,J.mode,te,null),W.return=J,W;if(typeof W.then=="function")return Se(J,nc(W),te);if(W.$$typeof===U)return Se(J,Jl(J,W),te);ic(J,W)}return null}function le(J,W,te,_e){var et=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return et!==null?null:N(J,W,""+te,_e);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case y:return te.key===et?G(J,W,te,_e):null;case M:return te.key===et?ne(J,W,te,_e):null;case T:return te=Br(te),le(J,W,te,_e)}if(K(te)||j(te))return et!==null?null:ve(J,W,te,_e,null);if(typeof te.then=="function")return le(J,W,nc(te),_e);if(te.$$typeof===U)return le(J,W,Jl(J,te),_e);ic(J,te)}return null}function de(J,W,te,_e,et){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return J=J.get(te)||null,N(W,J,""+_e,et);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case y:return J=J.get(_e.key===null?te:_e.key)||null,G(W,J,_e,et);case M:return J=J.get(_e.key===null?te:_e.key)||null,ne(W,J,_e,et);case T:return _e=Br(_e),de(J,W,te,_e,et)}if(K(_e)||j(_e))return J=J.get(te)||null,ve(W,J,_e,et,null);if(typeof _e.then=="function")return de(J,W,te,nc(_e),et);if(_e.$$typeof===U)return de(J,W,te,Jl(W,_e),et);ic(W,_e)}return null}function qe(J,W,te,_e){for(var et=null,wt=null,je=W,ft=W=0,yt=null;je!==null&&ft<te.length;ft++){je.index>ft?(yt=je,je=null):yt=je.sibling;var Rt=le(J,je,te[ft],_e);if(Rt===null){je===null&&(je=yt);break}t&&je&&Rt.alternate===null&&i(J,je),W=p(Rt,W,ft),wt===null?et=Rt:wt.sibling=Rt,wt=Rt,je=yt}if(ft===te.length)return s(J,je),Mt&&ua(J,ft),et;if(je===null){for(;ft<te.length;ft++)je=Se(J,te[ft],_e),je!==null&&(W=p(je,W,ft),wt===null?et=je:wt.sibling=je,wt=je);return Mt&&ua(J,ft),et}for(je=l(je);ft<te.length;ft++)yt=de(je,J,ft,te[ft],_e),yt!==null&&(t&&yt.alternate!==null&&je.delete(yt.key===null?ft:yt.key),W=p(yt,W,ft),wt===null?et=yt:wt.sibling=yt,wt=yt);return t&&je.forEach(function(dr){return i(J,dr)}),Mt&&ua(J,ft),et}function nt(J,W,te,_e){if(te==null)throw Error(r(151));for(var et=null,wt=null,je=W,ft=W=0,yt=null,Rt=te.next();je!==null&&!Rt.done;ft++,Rt=te.next()){je.index>ft?(yt=je,je=null):yt=je.sibling;var dr=le(J,je,Rt.value,_e);if(dr===null){je===null&&(je=yt);break}t&&je&&dr.alternate===null&&i(J,je),W=p(dr,W,ft),wt===null?et=dr:wt.sibling=dr,wt=dr,je=yt}if(Rt.done)return s(J,je),Mt&&ua(J,ft),et;if(je===null){for(;!Rt.done;ft++,Rt=te.next())Rt=Se(J,Rt.value,_e),Rt!==null&&(W=p(Rt,W,ft),wt===null?et=Rt:wt.sibling=Rt,wt=Rt);return Mt&&ua(J,ft),et}for(je=l(je);!Rt.done;ft++,Rt=te.next())Rt=de(je,J,ft,Rt.value,_e),Rt!==null&&(t&&Rt.alternate!==null&&je.delete(Rt.key===null?ft:Rt.key),W=p(Rt,W,ft),wt===null?et=Rt:wt.sibling=Rt,wt=Rt);return t&&je.forEach(function(KM){return i(J,KM)}),Mt&&ua(J,ft),et}function Vt(J,W,te,_e){if(typeof te=="object"&&te!==null&&te.type===w&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case y:e:{for(var et=te.key;W!==null;){if(W.key===et){if(et=te.type,et===w){if(W.tag===7){s(J,W.sibling),_e=f(W,te.props.children),_e.return=J,J=_e;break e}}else if(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Br(et)===W.type){s(J,W.sibling),_e=f(W,te.props),Io(_e,te),_e.return=J,J=_e;break e}s(J,W);break}else i(J,W);W=W.sibling}te.type===w?(_e=Ur(te.props.children,J.mode,_e,te.key),_e.return=J,J=_e):(_e=Zl(te.type,te.key,te.props,null,J.mode,_e),Io(_e,te),_e.return=J,J=_e)}return b(J);case M:e:{for(et=te.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){s(J,W.sibling),_e=f(W,te.children||[]),_e.return=J,J=_e;break e}else{s(J,W);break}else i(J,W);W=W.sibling}_e=yf(te,J.mode,_e),_e.return=J,J=_e}return b(J);case T:return te=Br(te),Vt(J,W,te,_e)}if(K(te))return qe(J,W,te,_e);if(j(te)){if(et=j(te),typeof et!="function")throw Error(r(150));return te=et.call(te),nt(J,W,te,_e)}if(typeof te.then=="function")return Vt(J,W,nc(te),_e);if(te.$$typeof===U)return Vt(J,W,Jl(J,te),_e);ic(J,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,W!==null&&W.tag===6?(s(J,W.sibling),_e=f(W,te),_e.return=J,J=_e):(s(J,W),_e=_f(te,J.mode,_e),_e.return=J,J=_e),b(J)):s(J,W)}return function(J,W,te,_e){try{Po=0;var et=Vt(J,W,te,_e);return bs=null,et}catch(je){if(je===Ss||je===ec)throw je;var wt=ci(29,je,null,J.mode);return wt.lanes=_e,wt.return=J,wt}finally{}}}var zr=Vg(!0),kg=Vg(!1),Za=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Dt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=jl(t),Ag(t,null,s),i}return Yl(t,l,i,s),jl(t)}function Bo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ai(t,s)}}function Of(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=b:p=p.next=b,s=s.next}while(s!==null);p===null?f=p=i:p=p.next=i}else f=p=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Pf=!1;function Fo(){if(Pf){var t=ys;if(t!==null)throw t}}function zo(t,i,s,l){Pf=!1;var f=t.updateQueue;Za=!1;var p=f.firstBaseUpdate,b=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var G=N,ne=G.next;G.next=null,b===null?p=ne:b.next=ne,b=G;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,N=ve.lastBaseUpdate,N!==b&&(N===null?ve.firstBaseUpdate=ne:N.next=ne,ve.lastBaseUpdate=G))}if(p!==null){var Se=f.baseState;b=0,ve=ne=G=null,N=p;do{var le=N.lane&-536870913,de=le!==N.lane;if(de?(_t&le)===le:(l&le)===le){le!==0&&le===_s&&(Pf=!0),ve!==null&&(ve=ve.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var qe=t,nt=N;le=i;var Vt=s;switch(nt.tag){case 1:if(qe=nt.payload,typeof qe=="function"){Se=qe.call(Vt,Se,le);break e}Se=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=nt.payload,le=typeof qe=="function"?qe.call(Vt,Se,le):qe,le==null)break e;Se=x({},Se,le);break e;case 2:Za=!0}}le=N.callback,le!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[le]:de.push(le))}else de={lane:le,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ve===null?(ne=ve=de,G=Se):ve=ve.next=de,b|=le;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;de=N,N=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);ve===null&&(G=Se),f.baseState=G,f.firstBaseUpdate=ne,f.lastBaseUpdate=ve,p===null&&(f.shared.lanes=0),nr|=b,t.lanes=b,t.memoizedState=Se}}function Xg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Wg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Xg(s[t],i)}var Ms=I(null),ac=I(0);function qg(t,i){t=Sa,Te(ac,t),Te(Ms,i),Sa=t|i.baseLanes}function If(){Te(ac,Sa),Te(Ms,Ms.current)}function Bf(){Sa=ac.current,Q(Ms),Q(ac)}var ui=I(null),bi=null;function Ja(t){var i=t.alternate;Te(dn,dn.current&1),Te(ui,t),bi===null&&(i===null||Ms.current!==null||i.memoizedState!==null)&&(bi=t)}function Ff(t){Te(dn,dn.current),Te(ui,t),bi===null&&(bi=t)}function Yg(t){t.tag===22?(Te(dn,dn.current),Te(ui,t),bi===null&&(bi=t)):$a()}function $a(){Te(dn,dn.current),Te(ui,ui.current)}function fi(t){Q(ui),bi===t&&(bi=null),Q(dn)}var dn=I(0);function rc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Xd(s)||Wd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ha=0,ut=null,Ht=null,_n=null,sc=!1,Es=!1,Hr=!1,oc=0,Ho=0,Ts=null,Hb=0;function on(){throw Error(r(321))}function zf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!li(t[s],i[s]))return!1;return!0}function Hf(t,i,s,l,f,p){return ha=p,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=t===null||t.memoizedState===null?D0:td,Hr=!1,p=s(l,f),Hr=!1,Es&&(p=Zg(i,s,l,f)),jg(t),p}function jg(t){H.H=ko;var i=Ht!==null&&Ht.next!==null;if(ha=0,_n=Ht=ut=null,sc=!1,Ho=0,Ts=null,i)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&Ql(t)&&(yn=!0))}function Zg(t,i,s,l){ut=t;var f=0;do{if(Es&&(Ts=null),Ho=0,Es=!1,25<=f)throw Error(r(301));if(f+=1,_n=Ht=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}H.H=N0,p=i(s,l)}while(Es);return p}function Gb(){var t=H.H,i=t.useState()[0];return i=typeof i.then=="function"?Go(i):i,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ut.flags|=1024),i}function Gf(){var t=oc!==0;return oc=0,t}function Vf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function kf(t){if(sc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}sc=!1}ha=0,_n=Ht=ut=null,Es=!1,Ho=oc=0,Ts=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?ut.memoizedState=_n=t:_n=_n.next=t,_n}function hn(){if(Ht===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var i=_n===null?ut.memoizedState:_n.next;if(i!==null)_n=i,Ht=t;else{if(t===null)throw ut.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},_n===null?ut.memoizedState=_n=t:_n=_n.next=t}return _n}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(t){var i=Ho;return Ho+=1,Ts===null&&(Ts=[]),t=zg(Ts,t,i),i=ut,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?D0:td),t}function cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Go(t);if(t.$$typeof===U)return Nn(t)}throw Error(r(438,String(t)))}function Xf(t){var i=null,s=ut.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=lc(),ut.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=V;return i.index++,s}function pa(t,i){return typeof i=="function"?i(t):i}function uc(t){var i=hn();return Wf(i,Ht,t)}function Wf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var b=f.next;f.next=p.next,p.next=b}i.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{i=f.next;var N=b=null,G=null,ne=i,ve=!1;do{var Se=ne.lane&-536870913;if(Se!==ne.lane?(_t&Se)===Se:(ha&Se)===Se){var le=ne.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Se===_s&&(ve=!0);else if((ha&le)===le){ne=ne.next,le===_s&&(ve=!0);continue}else Se={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},G===null?(N=G=Se,b=p):G=G.next=Se,ut.lanes|=le,nr|=le;Se=ne.action,Hr&&s(p,Se),p=ne.hasEagerState?ne.eagerState:s(p,Se)}else le={lane:Se,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},G===null?(N=G=le,b=p):G=G.next=le,ut.lanes|=Se,nr|=Se;ne=ne.next}while(ne!==null&&ne!==i);if(G===null?b=p:G.next=N,!li(p,t.memoizedState)&&(yn=!0,ve&&(s=ys,s!==null)))throw s;t.memoizedState=p,t.baseState=b,t.baseQueue=G,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function qf(t){var i=hn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do p=t(p,b.action),b=b.next;while(b!==f);li(p,i.memoizedState)||(yn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function Kg(t,i,s){var l=ut,f=hn(),p=Mt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=i();var b=!li((Ht||f).memoizedState,s);if(b&&(f.memoizedState=s,yn=!0),f=f.queue,Zf($g.bind(null,l,f,t),[t]),f.getSnapshot!==i||b||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,As(9,{destroy:void 0},Jg.bind(null,l,f,s,i),null),Xt===null)throw Error(r(349));p||(ha&127)!==0||Qg(l,i,s)}return s}function Qg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ut.updateQueue,i===null?(i=lc(),ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Jg(t,i,s,l){i.value=s,i.getSnapshot=l,e0(i)&&t0(t)}function $g(t,i,s){return s(function(){e0(i)&&t0(t)})}function e0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!li(t,s)}catch{return!0}}function t0(t){var i=Nr(t,2);i!==null&&$n(i,t,2)}function Yf(t){var i=Vn();if(typeof t=="function"){var s=t;if(t=s(),Hr){Re(!0);try{s()}finally{Re(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},i}function n0(t,i,s,l){return t.baseState=s,Wf(t,Ht,typeof l=="function"?l:pa)}function Vb(t,i,s,l,f){if(hc(t))throw Error(r(485));if(t=i.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){p.listeners.push(b)}};H.T!==null?s(!0):p.isTransition=!1,l(p),s=i.pending,s===null?(p.next=i.pending=p,i0(i,p)):(p.next=s.next,i.pending=s.next=p)}}function i0(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var p=H.T,b={};H.T=b;try{var N=s(f,l),G=H.S;G!==null&&G(b,N),a0(t,i,N)}catch(ne){jf(t,i,ne)}finally{p!==null&&b.types!==null&&(p.types=b.types),H.T=p}}else try{p=s(f,l),a0(t,i,p)}catch(ne){jf(t,i,ne)}}function a0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){r0(t,i,l)},function(l){return jf(t,i,l)}):r0(t,i,s)}function r0(t,i,s){i.status="fulfilled",i.value=s,s0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,i0(t,s)))}function jf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,s0(i),i=i.next;while(i!==l)}t.action=null}function s0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function o0(t,i){return i}function l0(t,i){if(Mt){var s=Xt.formState;if(s!==null){e:{var l=ut;if(Mt){if(Yt){t:{for(var f=Yt,p=Si;f.nodeType!==8;){if(!p){f=null;break t}if(f=Mi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){Yt=Mi(f.nextSibling),l=f.data==="F!";break e}}Ya(l)}l=!1}l&&(i=s[0])}}return s=Vn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:o0,lastRenderedState:i},s.queue=l,s=w0.bind(null,ut,l),l.dispatch=s,l=Yf(!1),p=ed.bind(null,ut,!1,l.queue),l=Vn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=Vb.bind(null,ut,f,p,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function c0(t){var i=hn();return u0(i,Ht,t)}function u0(t,i,s){if(i=Wf(t,i,o0)[0],t=uc(pa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Go(i)}catch(b){throw b===Ss?ec:b}else l=i;i=hn();var f=i.queue,p=f.dispatch;return s!==i.memoizedState&&(ut.flags|=2048,As(9,{destroy:void 0},kb.bind(null,f,s),null)),[l,p,t]}function kb(t,i){t.action=i}function f0(t){var i=hn(),s=Ht;if(s!==null)return u0(i,s,t);hn(),i=i.memoizedState,s=hn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function As(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ut.updateQueue,i===null&&(i=lc(),ut.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function d0(){return hn().memoizedState}function fc(t,i,s,l){var f=Vn();ut.flags|=t,f.memoizedState=As(1|i,{destroy:void 0},s,l===void 0?null:l)}function dc(t,i,s,l){var f=hn();l=l===void 0?null:l;var p=f.memoizedState.inst;Ht!==null&&l!==null&&zf(l,Ht.memoizedState.deps)?f.memoizedState=As(i,p,s,l):(ut.flags|=t,f.memoizedState=As(1|i,p,s,l))}function h0(t,i){fc(8390656,8,t,i)}function Zf(t,i){dc(2048,8,t,i)}function Xb(t){ut.flags|=4;var i=ut.updateQueue;if(i===null)i=lc(),ut.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function p0(t){var i=hn().memoizedState;return Xb({ref:i,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function m0(t,i){return dc(4,2,t,i)}function g0(t,i){return dc(4,4,t,i)}function v0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function x0(t,i,s){s=s!=null?s.concat([t]):null,dc(4,4,v0.bind(null,i,t),s)}function Kf(){}function _0(t,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&zf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function y0(t,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&zf(i,l[1]))return l[0];if(l=t(),Hr){Re(!0);try{t()}finally{Re(!1)}}return s.memoizedState=[l,i],l}function Qf(t,i,s){return s===void 0||(ha&1073741824)!==0&&(_t&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Sv(),ut.lanes|=t,nr|=t,s)}function S0(t,i,s,l){return li(s,i)?s:Ms.current!==null?(t=Qf(t,s,l),li(t,i)||(yn=!0),t):(ha&42)===0||(ha&1073741824)!==0&&(_t&261930)===0?(yn=!0,t.memoizedState=s):(t=Sv(),ut.lanes|=t,nr|=t,i)}function b0(t,i,s,l,f){var p=F.p;F.p=p!==0&&8>p?p:8;var b=H.T,N={};H.T=N,ed(t,!1,i,s);try{var G=f(),ne=H.S;if(ne!==null&&ne(N,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ve=zb(G,l);Vo(t,i,ve,pi(t))}else Vo(t,i,l,pi(t))}catch(Se){Vo(t,i,{then:function(){},status:"rejected",reason:Se},pi())}finally{F.p=p,b!==null&&N.types!==null&&(b.types=N.types),H.T=b}}function Wb(){}function Jf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=M0(t).queue;b0(t,f,i,$,s===null?Wb:function(){return E0(t),s(l)})}function M0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:$},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function E0(t){var i=M0(t);i.next===null&&(i=t.alternate.memoizedState),Vo(t,i.next.queue,{},pi())}function $f(){return Nn(rl)}function T0(){return hn().memoizedState}function A0(){return hn().memoizedState}function qb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=pi();t=Ka(s);var l=Qa(i,t,s);l!==null&&($n(l,i,s),Bo(l,i,s)),i={cache:Rf()},t.payload=i;return}i=i.return}}function Yb(t,i,s){var l=pi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hc(t)?R0(i,s):(s=vf(t,i,s,l),s!==null&&($n(s,t,l),C0(s,i,l)))}function w0(t,i,s){var l=pi();Vo(t,i,s,l)}function Vo(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(hc(t))R0(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var b=i.lastRenderedState,N=p(b,s);if(f.hasEagerState=!0,f.eagerState=N,li(N,b))return Yl(t,i,f,0),Xt===null&&ql(),!1}catch{}finally{}if(s=vf(t,i,f,l),s!==null)return $n(s,t,l),C0(s,i,l),!0}return!1}function ed(t,i,s,l){if(l={lane:2,revertLane:Ud(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},hc(t)){if(i)throw Error(r(479))}else i=vf(t,s,l,2),i!==null&&$n(i,t,2)}function hc(t){var i=t.alternate;return t===ut||i!==null&&i===ut}function R0(t,i){Es=sc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function C0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ai(t,s)}}var ko={readContext:Nn,use:cc,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};ko.useEffectEvent=on;var D0={readContext:Nn,use:cc,useCallback:function(t,i){return Vn().memoizedState=[t,i===void 0?null:i],t},useContext:Nn,useEffect:h0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,fc(4194308,4,v0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return fc(4194308,4,t,i)},useInsertionEffect:function(t,i){fc(4,2,t,i)},useMemo:function(t,i){var s=Vn();i=i===void 0?null:i;var l=t();if(Hr){Re(!0);try{t()}finally{Re(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Vn();if(s!==void 0){var f=s(i);if(Hr){Re(!0);try{s(i)}finally{Re(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Yb.bind(null,ut,t),[l.memoizedState,t]},useRef:function(t){var i=Vn();return t={current:t},i.memoizedState=t},useState:function(t){t=Yf(t);var i=t.queue,s=w0.bind(null,ut,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Kf,useDeferredValue:function(t,i){var s=Vn();return Qf(s,t,i)},useTransition:function(){var t=Yf(!1);return t=b0.bind(null,ut,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ut,f=Vn();if(Mt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Xt===null)throw Error(r(349));(_t&127)!==0||Qg(l,i,s)}f.memoizedState=s;var p={value:s,getSnapshot:i};return f.queue=p,h0($g.bind(null,l,p,t),[t]),l.flags|=2048,As(9,{destroy:void 0},Jg.bind(null,l,p,s,i),null),s},useId:function(){var t=Vn(),i=Xt.identifierPrefix;if(Mt){var s=Wi,l=Xi;s=(l&~(1<<32-ze(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=oc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Hb++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:$f,useFormState:l0,useActionState:l0,useOptimistic:function(t){var i=Vn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=ed.bind(null,ut,!0,s),s.dispatch=i,[t,i]},useMemoCache:Xf,useCacheRefresh:function(){return Vn().memoizedState=qb.bind(null,ut)},useEffectEvent:function(t){var i=Vn(),s={impl:t};return i.memoizedState=s,function(){if((Dt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},td={readContext:Nn,use:cc,useCallback:_0,useContext:Nn,useEffect:Zf,useImperativeHandle:x0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:y0,useReducer:uc,useRef:d0,useState:function(){return uc(pa)},useDebugValue:Kf,useDeferredValue:function(t,i){var s=hn();return S0(s,Ht.memoizedState,t,i)},useTransition:function(){var t=uc(pa)[0],i=hn().memoizedState;return[typeof t=="boolean"?t:Go(t),i]},useSyncExternalStore:Kg,useId:T0,useHostTransitionStatus:$f,useFormState:c0,useActionState:c0,useOptimistic:function(t,i){var s=hn();return n0(s,Ht,t,i)},useMemoCache:Xf,useCacheRefresh:A0};td.useEffectEvent=p0;var N0={readContext:Nn,use:cc,useCallback:_0,useContext:Nn,useEffect:Zf,useImperativeHandle:x0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:y0,useReducer:qf,useRef:d0,useState:function(){return qf(pa)},useDebugValue:Kf,useDeferredValue:function(t,i){var s=hn();return Ht===null?Qf(s,t,i):S0(s,Ht.memoizedState,t,i)},useTransition:function(){var t=qf(pa)[0],i=hn().memoizedState;return[typeof t=="boolean"?t:Go(t),i]},useSyncExternalStore:Kg,useId:T0,useHostTransitionStatus:$f,useFormState:f0,useActionState:f0,useOptimistic:function(t,i){var s=hn();return Ht!==null?n0(s,Ht,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Xf,useCacheRefresh:A0};N0.useEffectEvent=p0;function nd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:x({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var id={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=pi(),f=Ka(l);f.payload=i,s!=null&&(f.callback=s),i=Qa(t,f,l),i!==null&&($n(i,t,l),Bo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=pi(),f=Ka(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Qa(t,f,l),i!==null&&($n(i,t,l),Bo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=pi(),l=Ka(s);l.tag=2,i!=null&&(l.callback=i),i=Qa(t,l,s),i!==null&&($n(i,t,s),Bo(i,t,s))}};function U0(t,i,s,l,f,p,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,b):i.prototype&&i.prototype.isPureReactComponent?!Co(s,l)||!Co(f,p):!0}function L0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&id.enqueueReplaceState(i,i.state,null)}function Gr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=x({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function O0(t){Wl(t)}function P0(t){console.error(t)}function I0(t){Wl(t)}function pc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function B0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ad(t,i,s){return s=Ka(s),s.tag=3,s.payload={element:null},s.callback=function(){pc(t,i)},s}function F0(t){return t=Ka(t),t.tag=3,t}function z0(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){B0(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){B0(i,s,l),typeof f!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var N=l.stack;this.componentDidCatch(l.value,{componentStack:N!==null?N:""})})}function jb(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&xs(i,s,f,!0),s=ui.current,s!==null){switch(s.tag){case 31:case 13:return bi===null?Ac():s.alternate===null&&ln===0&&(ln=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===tc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Cd(t,l,f)),!1;case 22:return s.flags|=65536,l===tc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Cd(t,l,f)),!1}throw Error(r(435,s.tag))}return Cd(t,l,f),Ac(),!1}if(Mt)return i=ui.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Mf&&(t=Error(r(422),{cause:l}),Uo(xi(t,s)))):(l!==Mf&&(i=Error(r(423),{cause:l}),Uo(xi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=xi(l,s),f=ad(t.stateNode,l,f),Of(t,f),ln!==4&&(ln=2)),!1;var p=Error(r(520),{cause:l});if(p=xi(p,s),Qo===null?Qo=[p]:Qo.push(p),ln!==4&&(ln=2),i===null)return!0;l=xi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=ad(s.stateNode,l,t),Of(s,t),!1;case 1:if(i=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ir===null||!ir.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=F0(f),z0(f,t,s,l),Of(s,f),!1}s=s.return}while(s!==null);return!1}var rd=Error(r(461)),yn=!1;function Un(t,i,s,l){i.child=t===null?kg(i,null,s,l):zr(i,t.child,s,l)}function H0(t,i,s,l,f){s=s.render;var p=i.ref;if("ref"in l){var b={};for(var N in l)N!=="ref"&&(b[N]=l[N])}else b=l;return Pr(i),l=Hf(t,i,s,b,p,f),N=Gf(),t!==null&&!yn?(Vf(t,i,f),ma(t,i,f)):(Mt&&N&&Sf(i),i.flags|=1,Un(t,i,l,f),i.child)}function G0(t,i,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!xf(p)&&p.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=p,V0(t,i,p,l,f)):(t=Zl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,!hd(t,f)){var b=p.memoizedProps;if(s=s.compare,s=s!==null?s:Co,s(b,l)&&t.ref===i.ref)return ma(t,i,f)}return i.flags|=1,t=ca(p,l),t.ref=i.ref,t.return=i,i.child=t}function V0(t,i,s,l,f){if(t!==null){var p=t.memoizedProps;if(Co(p,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=p,hd(t,f))(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,ma(t,i,f)}return sd(t,i,s,l,f)}function k0(t,i,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,i.child=null;return X0(t,i,p,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&$l(i,p!==null?p.cachePool:null),p!==null?qg(i,p):If(),Yg(i);else return l=i.lanes=536870912,X0(t,i,p!==null?p.baseLanes|s:s,s,l)}else p!==null?($l(i,p.cachePool),qg(i,p),$a(),i.memoizedState=null):(t!==null&&$l(i,null),If(),$a());return Un(t,i,f,s),i.child}function Xo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function X0(t,i,s,l,f){var p=Df();return p=p===null?null:{parent:xn._currentValue,pool:p},i.memoizedState={baseLanes:s,cachePool:p},t!==null&&$l(i,null),If(),Yg(i),t!==null&&xs(t,i,l,!0),i.childLanes=f,null}function mc(t,i){return i=vc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function W0(t,i,s){return zr(i,t.child,null,s),t=mc(i,i.pendingProps),t.flags|=2,fi(i),i.memoizedState=null,t}function Zb(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Mt){if(l.mode==="hidden")return t=mc(i,l),i.lanes=536870912,Xo(null,t);if(Ff(i),(t=Yt)?(t=ix(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},s=Rg(t),s.return=i,i.child=s,Dn=i,Yt=null)):t=null,t===null)throw Ya(i);return i.lanes=536870912,null}return mc(i,l)}var p=t.memoizedState;if(p!==null){var b=p.dehydrated;if(Ff(i),f)if(i.flags&256)i.flags&=-257,i=W0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(yn||xs(t,i,s,!1),f=(s&t.childLanes)!==0,yn||f){if(l=Xt,l!==null&&(b=ri(l,s),b!==0&&b!==p.retryLane))throw p.retryLane=b,Nr(t,b),$n(l,t,b),rd;Ac(),i=W0(t,i,s)}else t=p.treeContext,Yt=Mi(b.nextSibling),Dn=i,Mt=!0,qa=null,Si=!1,t!==null&&Ng(i,t),i=mc(i,l),i.flags|=4096;return i}return t=ca(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function gc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function sd(t,i,s,l,f){return Pr(i),s=Hf(t,i,s,l,void 0,f),l=Gf(),t!==null&&!yn?(Vf(t,i,f),ma(t,i,f)):(Mt&&l&&Sf(i),i.flags|=1,Un(t,i,s,f),i.child)}function q0(t,i,s,l,f,p){return Pr(i),i.updateQueue=null,s=Zg(i,l,s,f),jg(t),l=Gf(),t!==null&&!yn?(Vf(t,i,p),ma(t,i,p)):(Mt&&l&&Sf(i),i.flags|=1,Un(t,i,s,p),i.child)}function Y0(t,i,s,l,f){if(Pr(i),i.stateNode===null){var p=ps,b=s.contextType;typeof b=="object"&&b!==null&&(p=Nn(b)),p=new s(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=id,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},Uf(i),b=s.contextType,p.context=typeof b=="object"&&b!==null?Nn(b):ps,p.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(nd(i,s,b,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(b=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),b!==p.state&&id.enqueueReplaceState(p,p.state,null),zo(i,l,p,f),Fo(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){p=i.stateNode;var N=i.memoizedProps,G=Gr(s,N);p.props=G;var ne=p.context,ve=s.contextType;b=ps,typeof ve=="object"&&ve!==null&&(b=Nn(ve));var Se=s.getDerivedStateFromProps;ve=typeof Se=="function"||typeof p.getSnapshotBeforeUpdate=="function",N=i.pendingProps!==N,ve||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(N||ne!==b)&&L0(i,p,l,b),Za=!1;var le=i.memoizedState;p.state=le,zo(i,l,p,f),Fo(),ne=i.memoizedState,N||le!==ne||Za?(typeof Se=="function"&&(nd(i,s,Se,l),ne=i.memoizedState),(G=Za||U0(i,s,G,l,le,ne,b))?(ve||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ne),p.props=l,p.state=ne,p.context=b,l=G):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,Lf(t,i),b=i.memoizedProps,ve=Gr(s,b),p.props=ve,Se=i.pendingProps,le=p.context,ne=s.contextType,G=ps,typeof ne=="object"&&ne!==null&&(G=Nn(ne)),N=s.getDerivedStateFromProps,(ne=typeof N=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(b!==Se||le!==G)&&L0(i,p,l,G),Za=!1,le=i.memoizedState,p.state=le,zo(i,l,p,f),Fo();var de=i.memoizedState;b!==Se||le!==de||Za||t!==null&&t.dependencies!==null&&Ql(t.dependencies)?(typeof N=="function"&&(nd(i,s,N,l),de=i.memoizedState),(ve=Za||U0(i,s,ve,l,le,de,G)||t!==null&&t.dependencies!==null&&Ql(t.dependencies))?(ne||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,de,G),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,de,G)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||b===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=de),p.props=l,p.state=de,p.context=G,l=ve):(typeof p.componentDidUpdate!="function"||b===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),l=!1)}return p=l,gc(t,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,t!==null&&l?(i.child=zr(i,t.child,null,f),i.child=zr(i,null,s,f)):Un(t,i,s,f),i.memoizedState=p.state,t=i.child):t=ma(t,i,f),t}function j0(t,i,s,l){return Lr(),i.flags|=256,Un(t,i,s,l),i.child}var od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ld(t){return{baseLanes:t,cachePool:Bg()}}function cd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=hi),t}function Z0(t,i,s){var l=i.pendingProps,f=!1,p=(i.flags&128)!==0,b;if((b=p)||(b=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(Mt){if(f?Ja(i):$a(),(t=Yt)?(t=ix(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},s=Rg(t),s.return=i,i.child=s,Dn=i,Yt=null)):t=null,t===null)throw Ya(i);return Wd(t)?i.lanes=32:i.lanes=536870912,null}var N=l.children;return l=l.fallback,f?($a(),f=i.mode,N=vc({mode:"hidden",children:N},f),l=Ur(l,f,s,null),N.return=i,l.return=i,N.sibling=l,i.child=N,l=i.child,l.memoizedState=ld(s),l.childLanes=cd(t,b,s),i.memoizedState=od,Xo(null,l)):(Ja(i),ud(i,N))}var G=t.memoizedState;if(G!==null&&(N=G.dehydrated,N!==null)){if(p)i.flags&256?(Ja(i),i.flags&=-257,i=fd(t,i,s)):i.memoizedState!==null?($a(),i.child=t.child,i.flags|=128,i=null):($a(),N=l.fallback,f=i.mode,l=vc({mode:"visible",children:l.children},f),N=Ur(N,f,s,null),N.flags|=2,l.return=i,N.return=i,l.sibling=N,i.child=l,zr(i,t.child,null,s),l=i.child,l.memoizedState=ld(s),l.childLanes=cd(t,b,s),i.memoizedState=od,i=Xo(null,l));else if(Ja(i),Wd(N)){if(b=N.nextSibling&&N.nextSibling.dataset,b)var ne=b.dgst;b=ne,l=Error(r(419)),l.stack="",l.digest=b,Uo({value:l,source:null,stack:null}),i=fd(t,i,s)}else if(yn||xs(t,i,s,!1),b=(s&t.childLanes)!==0,yn||b){if(b=Xt,b!==null&&(l=ri(b,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Nr(t,l),$n(b,t,l),rd;Xd(N)||Ac(),i=fd(t,i,s)}else Xd(N)?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,Yt=Mi(N.nextSibling),Dn=i,Mt=!0,qa=null,Si=!1,t!==null&&Ng(i,t),i=ud(i,l.children),i.flags|=4096);return i}return f?($a(),N=l.fallback,f=i.mode,G=t.child,ne=G.sibling,l=ca(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,ne!==null?N=ca(ne,N):(N=Ur(N,f,s,null),N.flags|=2),N.return=i,l.return=i,l.sibling=N,i.child=l,Xo(null,l),l=i.child,N=t.child.memoizedState,N===null?N=ld(s):(f=N.cachePool,f!==null?(G=xn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=Bg(),N={baseLanes:N.baseLanes|s,cachePool:f}),l.memoizedState=N,l.childLanes=cd(t,b,s),i.memoizedState=od,Xo(t.child,l)):(Ja(i),s=t.child,t=s.sibling,s=ca(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=s,i.memoizedState=null,s)}function ud(t,i){return i=vc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function vc(t,i){return t=ci(22,t,null,i),t.lanes=0,t}function fd(t,i,s){return zr(i,t.child,null,s),t=ud(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function K0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Af(t.return,i,s)}function dd(t,i,s,l,f,p){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=f,b.treeForkCount=p)}function Q0(t,i,s){var l=i.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var b=dn.current,N=(b&2)!==0;if(N?(b=b&1|2,i.flags|=128):b&=1,Te(dn,b),Un(t,i,l,s),l=Mt?No:0,!N&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&K0(t,s,i);else if(t.tag===19)K0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&rc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),dd(i,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&rc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}dd(i,!0,s,null,p,l);break;case"together":dd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ma(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),nr|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(xs(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=ca(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ca(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function hd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ql(t)))}function Kb(t,i,s){switch(i.tag){case 3:Ee(i,i.stateNode.containerInfo),ja(i,xn,t.memoizedState.cache),Lr();break;case 27:case 5:at(i);break;case 4:Ee(i,i.stateNode.containerInfo);break;case 10:ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Ff(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ja(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Z0(t,i,s):(Ja(i),t=ma(t,i,s),t!==null?t.sibling:null);Ja(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(xs(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Q0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Te(dn,dn.current),l)break;return null;case 22:return i.lanes=0,k0(t,i,s,i.pendingProps);case 24:ja(i,xn,t.memoizedState.cache)}return ma(t,i,s)}function J0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)yn=!0;else{if(!hd(t,s)&&(i.flags&128)===0)return yn=!1,Kb(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,Mt&&(i.flags&1048576)!==0&&Dg(i,No,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Br(i.elementType),i.type=t,typeof t=="function")xf(t)?(l=Gr(t,l),i.tag=1,i=Y0(null,i,t,l,s)):(i.tag=0,i=sd(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===A){i.tag=11,i=H0(null,i,t,l,s);break e}else if(f===B){i.tag=14,i=G0(null,i,t,l,s);break e}}throw i=ue(t)||t,Error(r(306,i,""))}}return i;case 0:return sd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Gr(l,i.pendingProps),Y0(t,i,l,f,s);case 3:e:{if(Ee(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var p=i.memoizedState;f=p.element,Lf(t,i),zo(i,l,null,s);var b=i.memoizedState;if(l=b.cache,ja(i,xn,l),l!==p.cache&&wf(i,[xn],s,!0),Fo(),l=b.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=j0(t,i,l,s);break e}else if(l!==f){f=xi(Error(r(424)),i),Uo(f),i=j0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=Mi(t.firstChild),Dn=i,Mt=!0,qa=null,Si=!0,s=kg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Lr(),l===f){i=ma(t,i,s);break e}Un(t,i,l,s)}i=i.child}return i;case 26:return gc(t,i),t===null?(s=cx(i.type,null,i.pendingProps,null))?i.memoizedState=s:Mt||(s=i.type,t=i.pendingProps,l=Lc(re.current).createElement(s),l[gn]=i,l[Cn]=t,Ln(l,s,t),vn(l),i.stateNode=l):i.memoizedState=cx(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return at(i),t===null&&Mt&&(l=i.stateNode=sx(i.type,i.pendingProps,re.current),Dn=i,Si=!0,f=Yt,or(i.type)?(qd=f,Yt=Mi(l.firstChild)):Yt=f),Un(t,i,i.pendingProps.children,s),gc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Mt&&((f=l=Yt)&&(l=AM(l,i.type,i.pendingProps,Si),l!==null?(i.stateNode=l,Dn=i,Yt=Mi(l.firstChild),Si=!1,f=!0):f=!1),f||Ya(i)),at(i),f=i.type,p=i.pendingProps,b=t!==null?t.memoizedProps:null,l=p.children,Gd(f,p)?l=null:b!==null&&Gd(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=Hf(t,i,Gb,null,null,s),rl._currentValue=f),gc(t,i),Un(t,i,l,s),i.child;case 6:return t===null&&Mt&&((t=s=Yt)&&(s=wM(s,i.pendingProps,Si),s!==null?(i.stateNode=s,Dn=i,Yt=null,t=!0):t=!1),t||Ya(i)),null;case 13:return Z0(t,i,s);case 4:return Ee(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=zr(i,null,l,s):Un(t,i,l,s),i.child;case 11:return H0(t,i,i.type,i.pendingProps,s);case 7:return Un(t,i,i.pendingProps,s),i.child;case 8:return Un(t,i,i.pendingProps.children,s),i.child;case 12:return Un(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ja(i,i.type,l.value),Un(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Pr(i),f=Nn(f),l=l(f),i.flags|=1,Un(t,i,l,s),i.child;case 14:return G0(t,i,i.type,i.pendingProps,s);case 15:return V0(t,i,i.type,i.pendingProps,s);case 19:return Q0(t,i,s);case 31:return Zb(t,i,s);case 22:return k0(t,i,s,i.pendingProps);case 24:return Pr(i),l=Nn(xn),t===null?(f=Df(),f===null&&(f=Xt,p=Rf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),i.memoizedState={parent:l,cache:f},Uf(i),ja(i,xn,f)):((t.lanes&s)!==0&&(Lf(t,i),zo(i,null,null,s),Fo()),f=t.memoizedState,p=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ja(i,xn,l)):(l=p.cache,ja(i,xn,l),l!==f.cache&&wf(i,[xn],s,!0))),Un(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ga(t){t.flags|=4}function pd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Tv())t.flags|=8192;else throw Fr=tc,Nf}else t.flags&=-16777217}function $0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!px(i))if(Tv())t.flags|=8192;else throw Fr=tc,Nf}function xc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Me():536870912,t.lanes|=i,Ds|=i)}function Wo(t,i){if(!Mt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function jt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function Qb(t,i,s){var l=i.pendingProps;switch(bf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(i),null;case 1:return jt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),da(xn),Ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(vs(i)?ga(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ef())),jt(i),null;case 26:var f=i.type,p=i.memoizedState;return t===null?(ga(i),p!==null?(jt(i),$0(i,p)):(jt(i),pd(i,f,null,l,s))):p?p!==t.memoizedState?(ga(i),jt(i),$0(i,p)):(jt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ga(i),jt(i),pd(i,f,t,l,s)),null;case 27:if(Qe(i),s=re.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ga(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return jt(i),null}t=Ce.current,vs(i)?Ug(i):(t=sx(f,l,s),i.stateNode=t,ga(i))}return jt(i),null;case 5:if(Qe(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ga(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return jt(i),null}if(p=Ce.current,vs(i))Ug(i);else{var b=Lc(re.current);switch(p){case 1:p=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=b.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}p[gn]=i,p[Cn]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)p.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=p;e:switch(Ln(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ga(i)}}return jt(i),pd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ga(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=re.current,vs(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Dn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[gn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Zv(t.nodeValue,s)),t||Ya(i,!0)}else t=Lc(t).createTextNode(l),t[gn]=i,i.stateNode=t}return jt(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=vs(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[gn]=i}else Lr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jt(i),t=!1}else s=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(fi(i),i):(fi(i),null);if((i.flags&128)!==0)throw Error(r(558))}return jt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=vs(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[gn]=i}else Lr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jt(i),f=!1}else f=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(fi(i),i):(fi(i),null)}return fi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),xc(i,i.updateQueue),jt(i),null);case 4:return Ge(),t===null&&Id(i.stateNode.containerInfo),jt(i),null;case 10:return da(i.type),jt(i),null;case 19:if(Q(dn),l=i.memoizedState,l===null)return jt(i),null;if(f=(i.flags&128)!==0,p=l.rendering,p===null)if(f)Wo(l,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(p=rc(t),p!==null){for(i.flags|=128,Wo(l,!1),t=p.updateQueue,i.updateQueue=t,xc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)wg(s,t),s=s.sibling;return Te(dn,dn.current&1|2),Mt&&ua(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&zt()>Mc&&(i.flags|=128,f=!0,Wo(l,!1),i.lanes=4194304)}else{if(!f)if(t=rc(p),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,xc(i,t),Wo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Mt)return jt(i),null}else 2*zt()-l.renderingStartTime>Mc&&s!==536870912&&(i.flags|=128,f=!0,Wo(l,!1),i.lanes=4194304);l.isBackwards?(p.sibling=i.child,i.child=p):(t=l.last,t!==null?t.sibling=p:i.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=zt(),t.sibling=null,s=dn.current,Te(dn,f?s&1|2:s&1),Mt&&ua(i,l.treeForkCount),t):(jt(i),null);case 22:case 23:return fi(i),Bf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(jt(i),i.subtreeFlags&6&&(i.flags|=8192)):jt(i),s=i.updateQueue,s!==null&&xc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&Q(Ir),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),da(xn),jt(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Jb(t,i){switch(bf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return da(xn),Ge(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Qe(i),null;case 31:if(i.memoizedState!==null){if(fi(i),i.alternate===null)throw Error(r(340));Lr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(fi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Lr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Q(dn),null;case 4:return Ge(),null;case 10:return da(i.type),null;case 22:case 23:return fi(i),Bf(),t!==null&&Q(Ir),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return da(xn),null;case 25:return null;default:return null}}function ev(t,i){switch(bf(i),i.tag){case 3:da(xn),Ge();break;case 26:case 27:case 5:Qe(i);break;case 4:Ge();break;case 31:i.memoizedState!==null&&fi(i);break;case 13:fi(i);break;case 19:Q(dn);break;case 10:da(i.type);break;case 22:case 23:fi(i),Bf(),t!==null&&Q(Ir);break;case 24:da(xn)}}function qo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,b=s.inst;l=p(),b.destroy=l}s=s.next}while(s!==f)}}catch(N){Bt(i,i.return,N)}}function er(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var b=l.inst,N=b.destroy;if(N!==void 0){b.destroy=void 0,f=i;var G=s,ne=N;try{ne()}catch(ve){Bt(f,G,ve)}}}l=l.next}while(l!==p)}}catch(ve){Bt(i,i.return,ve)}}function tv(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Wg(i,s)}catch(l){Bt(t,t.return,l)}}}function nv(t,i,s){s.props=Gr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Bt(t,i,l)}}function Yo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Bt(t,i,f)}}function qi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Bt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Bt(t,i,f)}else s.current=null}function iv(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Bt(t,t.return,f)}}function md(t,i,s){try{var l=t.stateNode;yM(l,t.type,s,i),l[Cn]=i}catch(f){Bt(t,t.return,f)}}function av(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&or(t.type)||t.tag===4}function gd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&or(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(l===27&&or(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(vd(t,i,s),t=t.sibling;t!==null;)vd(t,i,s),t=t.sibling}function _c(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&or(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(_c(t,i,s),t=t.sibling;t!==null;)_c(t,i,s),t=t.sibling}function rv(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Ln(i,l,s),i[gn]=t,i[Cn]=s}catch(p){Bt(t,t.return,p)}}var va=!1,Sn=!1,xd=!1,sv=typeof WeakSet=="function"?WeakSet:Set,wn=null;function $b(t,i){if(t=t.containerInfo,zd=Hc,t=xg(t),ff(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var b=0,N=-1,G=-1,ne=0,ve=0,Se=t,le=null;t:for(;;){for(var de;Se!==s||f!==0&&Se.nodeType!==3||(N=b+f),Se!==p||l!==0&&Se.nodeType!==3||(G=b+l),Se.nodeType===3&&(b+=Se.nodeValue.length),(de=Se.firstChild)!==null;)le=Se,Se=de;for(;;){if(Se===t)break t;if(le===s&&++ne===f&&(N=b),le===p&&++ve===l&&(G=b),(de=Se.nextSibling)!==null)break;Se=le,le=Se.parentNode}Se=de}s=N===-1||G===-1?null:{start:N,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(Hd={focusedElem:t,selectionRange:s},Hc=!1,wn=i;wn!==null;)if(i=wn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,wn=t;else for(;wn!==null;){switch(i=wn,p=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=i,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var qe=Gr(s.type,f);t=l.getSnapshotBeforeUpdate(qe,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Bt(s,s.return,nt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)kd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,wn=t;break}wn=i.return}}function ov(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:_a(t,s),l&4&&qo(5,s);break;case 1:if(_a(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(b){Bt(s,s.return,b)}else{var f=Gr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Bt(s,s.return,b)}}l&64&&tv(s),l&512&&Yo(s,s.return);break;case 3:if(_a(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Wg(t,i)}catch(b){Bt(s,s.return,b)}}break;case 27:i===null&&l&4&&rv(s);case 26:case 5:_a(t,s),i===null&&l&4&&iv(s),l&512&&Yo(s,s.return);break;case 12:_a(t,s);break;case 31:_a(t,s),l&4&&uv(t,s);break;case 13:_a(t,s),l&4&&fv(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=lM.bind(null,s),RM(t,s))));break;case 22:if(l=s.memoizedState!==null||va,!l){i=i!==null&&i.memoizedState!==null||Sn,f=va;var p=Sn;va=l,(Sn=i)&&!p?ya(t,s,(s.subtreeFlags&8772)!==0):_a(t,s),va=f,Sn=p}break;case 30:break;default:_a(t,s)}}function lv(t){var i=t.alternate;i!==null&&(t.alternate=null,lv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ga(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Zn=!1;function xa(t,i,s){for(s=s.child;s!==null;)cv(t,i,s),s=s.sibling}function cv(t,i,s){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(he,s)}catch{}switch(s.tag){case 26:Sn||qi(s,i),xa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Sn||qi(s,i);var l=$t,f=Zn;or(s.type)&&($t=s.stateNode,Zn=!1),xa(t,i,s),nl(s.stateNode),$t=l,Zn=f;break;case 5:Sn||qi(s,i);case 6:if(l=$t,f=Zn,$t=null,xa(t,i,s),$t=l,Zn=f,$t!==null)if(Zn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(s.stateNode)}catch(p){Bt(s,i,p)}else try{$t.removeChild(s.stateNode)}catch(p){Bt(s,i,p)}break;case 18:$t!==null&&(Zn?(t=$t,tx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Fs(t)):tx($t,s.stateNode));break;case 4:l=$t,f=Zn,$t=s.stateNode.containerInfo,Zn=!0,xa(t,i,s),$t=l,Zn=f;break;case 0:case 11:case 14:case 15:er(2,s,i),Sn||er(4,s,i),xa(t,i,s);break;case 1:Sn||(qi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&nv(s,i,l)),xa(t,i,s);break;case 21:xa(t,i,s);break;case 22:Sn=(l=Sn)||s.memoizedState!==null,xa(t,i,s),Sn=l;break;default:xa(t,i,s)}}function uv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fs(t)}catch(s){Bt(i,i.return,s)}}}function fv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fs(t)}catch(s){Bt(i,i.return,s)}}function eM(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new sv),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new sv),i;default:throw Error(r(435,t.tag))}}function yc(t,i){var s=eM(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=cM.bind(null,t,l);l.then(f,f)}})}function Kn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,b=i,N=b;e:for(;N!==null;){switch(N.tag){case 27:if(or(N.type)){$t=N.stateNode,Zn=!1;break e}break;case 5:$t=N.stateNode,Zn=!1;break e;case 3:case 4:$t=N.stateNode.containerInfo,Zn=!0;break e}N=N.return}if($t===null)throw Error(r(160));cv(p,b,f),$t=null,Zn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)dv(i,t),i=i.sibling}var Ui=null;function dv(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(i,t),Qn(t),l&4&&(er(3,t,t.return),qo(3,t),er(5,t,t.return));break;case 1:Kn(i,t),Qn(t),l&512&&(Sn||s===null||qi(s,s.return)),l&64&&va&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ui;if(Kn(i,t),Qn(t),l&512&&(Sn||s===null||qi(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Ha]||p[gn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Ln(p,l,s),p[gn]=t,vn(p),l=p;break e;case"link":var b=dx("link","href",f).get(l+(s.href||""));if(b){for(var N=0;N<b.length;N++)if(p=b[N],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(N,1);break t}}p=f.createElement(l),Ln(p,l,s),f.head.appendChild(p);break;case"meta":if(b=dx("meta","content",f).get(l+(s.content||""))){for(N=0;N<b.length;N++)if(p=b[N],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(N,1);break t}}p=f.createElement(l),Ln(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[gn]=t,vn(p),l=p}t.stateNode=l}else hx(f,t.type,t.stateNode);else t.stateNode=fx(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?hx(f,t.type,t.stateNode):fx(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&md(t,t.memoizedProps,s.memoizedProps)}break;case 27:Kn(i,t),Qn(t),l&512&&(Sn||s===null||qi(s,s.return)),s!==null&&l&4&&md(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Kn(i,t),Qn(t),l&512&&(Sn||s===null||qi(s,s.return)),t.flags&32){f=t.stateNode;try{oi(f,"")}catch(qe){Bt(t,t.return,qe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,md(t,f,s!==null?s.memoizedProps:f)),l&1024&&(xd=!0);break;case 6:if(Kn(i,t),Qn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(qe){Bt(t,t.return,qe)}}break;case 3:if(Ic=null,f=Ui,Ui=Oc(i.containerInfo),Kn(i,t),Ui=f,Qn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Fs(i.containerInfo)}catch(qe){Bt(t,t.return,qe)}xd&&(xd=!1,hv(t));break;case 4:l=Ui,Ui=Oc(t.stateNode.containerInfo),Kn(i,t),Qn(t),Ui=l;break;case 12:Kn(i,t),Qn(t);break;case 31:Kn(i,t),Qn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 13:Kn(i,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(bc=zt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,ne=va,ve=Sn;if(va=ne||f,Sn=ve||G,Kn(i,t),Sn=ve,va=ne,Qn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||G||va||Sn||Vr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(p=G.stateNode,f)b=p.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{N=G.stateNode;var Se=G.memoizedProps.style,le=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;N.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(qe){Bt(G,G.return,qe)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(qe){Bt(G,G.return,qe)}}}else if(i.tag===18){if(s===null){G=i;try{var de=G.stateNode;f?nx(de,!0):nx(G.stateNode,!1)}catch(qe){Bt(G,G.return,qe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,yc(t,s))));break;case 19:Kn(i,t),Qn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 30:break;case 21:break;default:Kn(i,t),Qn(t)}}function Qn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(av(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=gd(t);_c(t,p,f);break;case 5:var b=s.stateNode;s.flags&32&&(oi(b,""),s.flags&=-33);var N=gd(t);_c(t,N,b);break;case 3:case 4:var G=s.stateNode.containerInfo,ne=gd(t);vd(t,ne,G);break;default:throw Error(r(161))}}catch(ve){Bt(t,t.return,ve)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function hv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;hv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function _a(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ov(t,i.alternate,i),i=i.sibling}function Vr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:er(4,i,i.return),Vr(i);break;case 1:qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&nv(i,i.return,s),Vr(i);break;case 27:nl(i.stateNode);case 26:case 5:qi(i,i.return),Vr(i);break;case 22:i.memoizedState===null&&Vr(i);break;case 30:Vr(i);break;default:Vr(i)}t=t.sibling}}function ya(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,p=i,b=p.flags;switch(p.tag){case 0:case 11:case 15:ya(f,p,s),qo(4,p);break;case 1:if(ya(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ne){Bt(l,l.return,ne)}if(l=p,f=l.updateQueue,f!==null){var N=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Xg(G[f],N)}catch(ne){Bt(l,l.return,ne)}}s&&b&64&&tv(p),Yo(p,p.return);break;case 27:rv(p);case 26:case 5:ya(f,p,s),s&&l===null&&b&4&&iv(p),Yo(p,p.return);break;case 12:ya(f,p,s);break;case 31:ya(f,p,s),s&&b&4&&uv(f,p);break;case 13:ya(f,p,s),s&&b&4&&fv(f,p);break;case 22:p.memoizedState===null&&ya(f,p,s),Yo(p,p.return);break;case 30:break;default:ya(f,p,s)}i=i.sibling}}function _d(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Lo(s))}function yd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Lo(t))}function Li(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)pv(t,i,s,l),i=i.sibling}function pv(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Li(t,i,s,l),f&2048&&qo(9,i);break;case 1:Li(t,i,s,l);break;case 3:Li(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Lo(t)));break;case 12:if(f&2048){Li(t,i,s,l),t=i.stateNode;try{var p=i.memoizedProps,b=p.id,N=p.onPostCommit;typeof N=="function"&&N(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Bt(i,i.return,G)}}else Li(t,i,s,l);break;case 31:Li(t,i,s,l);break;case 13:Li(t,i,s,l);break;case 23:break;case 22:p=i.stateNode,b=i.alternate,i.memoizedState!==null?p._visibility&2?Li(t,i,s,l):jo(t,i):p._visibility&2?Li(t,i,s,l):(p._visibility|=2,ws(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&_d(b,i);break;case 24:Li(t,i,s,l),f&2048&&yd(i.alternate,i);break;default:Li(t,i,s,l)}}function ws(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var p=t,b=i,N=s,G=l,ne=b.flags;switch(b.tag){case 0:case 11:case 15:ws(p,b,N,G,f),qo(8,b);break;case 23:break;case 22:var ve=b.stateNode;b.memoizedState!==null?ve._visibility&2?ws(p,b,N,G,f):jo(p,b):(ve._visibility|=2,ws(p,b,N,G,f)),f&&ne&2048&&_d(b.alternate,b);break;case 24:ws(p,b,N,G,f),f&&ne&2048&&yd(b.alternate,b);break;default:ws(p,b,N,G,f)}i=i.sibling}}function jo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:jo(s,l),f&2048&&_d(l.alternate,l);break;case 24:jo(s,l),f&2048&&yd(l.alternate,l);break;default:jo(s,l)}i=i.sibling}}var Zo=8192;function Rs(t,i,s){if(t.subtreeFlags&Zo)for(t=t.child;t!==null;)mv(t,i,s),t=t.sibling}function mv(t,i,s){switch(t.tag){case 26:Rs(t,i,s),t.flags&Zo&&t.memoizedState!==null&&HM(s,Ui,t.memoizedState,t.memoizedProps);break;case 5:Rs(t,i,s);break;case 3:case 4:var l=Ui;Ui=Oc(t.stateNode.containerInfo),Rs(t,i,s),Ui=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Zo,Zo=16777216,Rs(t,i,s),Zo=l):Rs(t,i,s));break;default:Rs(t,i,s)}}function gv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Ko(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];wn=l,xv(l,t)}gv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vv(t),t=t.sibling}function vv(t){switch(t.tag){case 0:case 11:case 15:Ko(t),t.flags&2048&&er(9,t,t.return);break;case 3:Ko(t);break;case 12:Ko(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Sc(t)):Ko(t);break;default:Ko(t)}}function Sc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];wn=l,xv(l,t)}gv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:er(8,i,i.return),Sc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Sc(i));break;default:Sc(i)}t=t.sibling}}function xv(t,i){for(;wn!==null;){var s=wn;switch(s.tag){case 0:case 11:case 15:er(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Lo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,wn=l;else e:for(s=t;wn!==null;){l=wn;var f=l.sibling,p=l.return;if(lv(l),l===s){wn=null;break e}if(f!==null){f.return=p,wn=f;break e}wn=p}}}var tM={getCacheForType:function(t){var i=Nn(xn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Nn(xn).controller.signal}},nM=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Xt=null,gt=null,_t=0,It=0,di=null,tr=!1,Cs=!1,Sd=!1,Sa=0,ln=0,nr=0,kr=0,bd=0,hi=0,Ds=0,Qo=null,Jn=null,Md=!1,bc=0,_v=0,Mc=1/0,Ec=null,ir=null,En=0,ar=null,Ns=null,ba=0,Ed=0,Td=null,yv=null,Jo=0,Ad=null;function pi(){return(Dt&2)!==0&&_t!==0?_t&-_t:H.T!==null?Ud():So()}function Sv(){if(hi===0)if((_t&536870912)===0||Mt){var t=rt;rt<<=1,(rt&3932160)===0&&(rt=262144),hi=t}else hi=536870912;return t=ui.current,t!==null&&(t.flags|=32),hi}function $n(t,i,s){(t===Xt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(Us(t,0),rr(t,_t,hi,!1)),ke(t,s),((Dt&2)===0||t!==Xt)&&(t===Xt&&((Dt&2)===0&&(kr|=s),ln===4&&rr(t,_t,hi,!1)),Yi(t))}function bv(t,i,s){if((Dt&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||De(t,i),f=l?rM(t,i):Rd(t,i,!0),p=l;do{if(f===0){Cs&&!l&&rr(t,i,0,!1);break}else{if(s=t.current.alternate,p&&!iM(s)){f=Rd(t,i,!1),p=!1;continue}if(f===2){if(p=i,t.errorRecoveryDisabledLanes&p)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var N=t;f=Qo;var G=N.current.memoizedState.isDehydrated;if(G&&(Us(N,b).flags|=256),b=Rd(N,b,!1),b!==2){if(Sd&&!G){N.errorRecoveryDisabledLanes|=p,kr|=p,f=4;break e}p=Jn,Jn=f,p!==null&&(Jn===null?Jn=p:Jn.push.apply(Jn,p))}f=b}if(p=!1,f!==2)continue}}if(f===1){Us(t,0),rr(t,i,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:rr(l,i,hi,!tr);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=bc+300-zt(),10<f)){if(rr(l,i,hi,!tr),xe(l,0,!0)!==0)break e;ba=i,l.timeoutHandle=$v(Mv.bind(null,l,s,Jn,Ec,Md,i,hi,kr,Ds,tr,p,"Throttled",-0,0),f);break e}Mv(l,s,Jn,Ec,Md,i,hi,kr,Ds,tr,p,null,-0,0)}}break}while(!0);Yi(t)}function Mv(t,i,s,l,f,p,b,N,G,ne,ve,Se,le,de){if(t.timeoutHandle=-1,Se=i.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},mv(i,p,Se);var qe=(p&62914560)===p?bc-zt():(p&4194048)===p?_v-zt():0;if(qe=GM(Se,qe),qe!==null){ba=p,t.cancelPendingCommit=qe(Nv.bind(null,t,i,p,s,l,f,b,N,G,ve,Se,null,le,de)),rr(t,p,b,!ne);return}}Nv(t,i,p,s,l,f,b,N,G)}function iM(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!li(p(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i,s,l){i&=~bd,i&=~kr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var p=31-ze(f),b=1<<p;l[p]=-1,f&=~b}s!==0&&Ut(t,s,i)}function Tc(){return(Dt&6)===0?($o(0),!1):!0}function wd(){if(gt!==null){if(It===0)var t=gt.return;else t=gt,fa=Or=null,kf(t),bs=null,Po=0,t=gt;for(;t!==null;)ev(t.alternate,t),t=t.return;gt=null}}function Us(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,MM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ba=0,wd(),Xt=t,gt=s=ca(t.current,null),_t=i,It=0,di=null,tr=!1,Cs=De(t,i),Sd=!1,Ds=hi=bd=kr=nr=ln=0,Jn=Qo=null,Md=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-ze(l),p=1<<f;i|=t[f],l&=~p}return Sa=i,ql(),s}function Ev(t,i){ut=null,H.H=ko,i===Ss||i===ec?(i=Hg(),It=3):i===Nf?(i=Hg(),It=4):It=i===rd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,di=i,gt===null&&(ln=1,pc(t,xi(i,t.current)))}function Tv(){var t=ui.current;return t===null?!0:(_t&4194048)===_t?bi===null:(_t&62914560)===_t||(_t&536870912)!==0?t===bi:!1}function Av(){var t=H.H;return H.H=ko,t===null?ko:t}function wv(){var t=H.A;return H.A=tM,t}function Ac(){ln=4,tr||(_t&4194048)!==_t&&ui.current!==null||(Cs=!0),(nr&134217727)===0&&(kr&134217727)===0||Xt===null||rr(Xt,_t,hi,!1)}function Rd(t,i,s){var l=Dt;Dt|=2;var f=Av(),p=wv();(Xt!==t||_t!==i)&&(Ec=null,Us(t,i)),i=!1;var b=ln;e:do try{if(It!==0&&gt!==null){var N=gt,G=di;switch(It){case 8:wd(),b=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(i=!0);var ne=It;if(It=0,di=null,Ls(t,N,G,ne),s&&Cs){b=0;break e}break;default:ne=It,It=0,di=null,Ls(t,N,G,ne)}}aM(),b=ln;break}catch(ve){Ev(t,ve)}while(!0);return i&&t.shellSuspendCounter++,fa=Or=null,Dt=l,H.H=f,H.A=p,gt===null&&(Xt=null,_t=0,ql()),b}function aM(){for(;gt!==null;)Rv(gt)}function rM(t,i){var s=Dt;Dt|=2;var l=Av(),f=wv();Xt!==t||_t!==i?(Ec=null,Mc=zt()+500,Us(t,i)):Cs=De(t,i);e:do try{if(It!==0&&gt!==null){i=gt;var p=di;t:switch(It){case 1:It=0,di=null,Ls(t,i,p,1);break;case 2:case 9:if(Fg(p)){It=0,di=null,Cv(i);break}i=function(){It!==2&&It!==9||Xt!==t||(It=7),Yi(t)},p.then(i,i);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Fg(p)?(It=0,di=null,Cv(i)):(It=0,di=null,Ls(t,i,p,7));break;case 5:var b=null;switch(gt.tag){case 26:b=gt.memoizedState;case 5:case 27:var N=gt;if(b?px(b):N.stateNode.complete){It=0,di=null;var G=N.sibling;if(G!==null)gt=G;else{var ne=N.return;ne!==null?(gt=ne,wc(ne)):gt=null}break t}}It=0,di=null,Ls(t,i,p,5);break;case 6:It=0,di=null,Ls(t,i,p,6);break;case 8:wd(),ln=6;break e;default:throw Error(r(462))}}sM();break}catch(ve){Ev(t,ve)}while(!0);return fa=Or=null,H.H=l,H.A=f,Dt=s,gt!==null?0:(Xt=null,_t=0,ql(),ln)}function sM(){for(;gt!==null&&!sn();)Rv(gt)}function Rv(t){var i=J0(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,i===null?wc(t):gt=i}function Cv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=q0(s,i,i.pendingProps,i.type,void 0,_t);break;case 11:i=q0(s,i,i.pendingProps,i.type.render,i.ref,_t);break;case 5:kf(i);default:ev(s,i),i=gt=wg(i,Sa),i=J0(s,i,Sa)}t.memoizedProps=t.pendingProps,i===null?wc(t):gt=i}function Ls(t,i,s,l){fa=Or=null,kf(i),bs=null,Po=0;var f=i.return;try{if(jb(t,f,i,s,_t)){ln=1,pc(t,xi(s,t.current)),gt=null;return}}catch(p){if(f!==null)throw gt=f,p;ln=1,pc(t,xi(s,t.current)),gt=null;return}i.flags&32768?(Mt||l===1?t=!0:Cs||(_t&536870912)!==0?t=!1:(tr=t=!0,(l===2||l===9||l===3||l===6)&&(l=ui.current,l!==null&&l.tag===13&&(l.flags|=16384))),Dv(i,t)):wc(i)}function wc(t){var i=t;do{if((i.flags&32768)!==0){Dv(i,tr);return}t=i.return;var s=Qb(i.alternate,i,Sa);if(s!==null){gt=s;return}if(i=i.sibling,i!==null){gt=i;return}gt=i=t}while(i!==null);ln===0&&(ln=5)}function Dv(t,i){do{var s=Jb(t.alternate,t);if(s!==null){s.flags&=32767,gt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){gt=t;return}gt=t=s}while(t!==null);ln=6,gt=null}function Nv(t,i,s,l,f,p,b,N,G){t.cancelPendingCommit=null;do Rc();while(En!==0);if((Dt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(p=i.lanes|i.childLanes,p|=gf,Kt(t,s,p,b,N,G),t===Xt&&(gt=Xt=null,_t=0),Ns=i,ar=t,ba=s,Ed=p,Td=f,yv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,uM(ee,function(){return Iv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,f=F.p,F.p=2,b=Dt,Dt|=4;try{$b(t,i,s)}finally{Dt=b,F.p=f,H.T=l}}En=1,Uv(),Lv(),Ov()}}function Uv(){if(En===1){En=0;var t=ar,i=Ns,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var l=F.p;F.p=2;var f=Dt;Dt|=4;try{dv(i,t);var p=Hd,b=xg(t.containerInfo),N=p.focusedElem,G=p.selectionRange;if(b!==N&&N&&N.ownerDocument&&vg(N.ownerDocument.documentElement,N)){if(G!==null&&ff(N)){var ne=G.start,ve=G.end;if(ve===void 0&&(ve=ne),"selectionStart"in N)N.selectionStart=ne,N.selectionEnd=Math.min(ve,N.value.length);else{var Se=N.ownerDocument||document,le=Se&&Se.defaultView||window;if(le.getSelection){var de=le.getSelection(),qe=N.textContent.length,nt=Math.min(G.start,qe),Vt=G.end===void 0?nt:Math.min(G.end,qe);!de.extend&&nt>Vt&&(b=Vt,Vt=nt,nt=b);var J=gg(N,nt),W=gg(N,Vt);if(J&&W&&(de.rangeCount!==1||de.anchorNode!==J.node||de.anchorOffset!==J.offset||de.focusNode!==W.node||de.focusOffset!==W.offset)){var te=Se.createRange();te.setStart(J.node,J.offset),de.removeAllRanges(),nt>Vt?(de.addRange(te),de.extend(W.node,W.offset)):(te.setEnd(W.node,W.offset),de.addRange(te))}}}}for(Se=[],de=N;de=de.parentNode;)de.nodeType===1&&Se.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Se.length;N++){var _e=Se[N];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}Hc=!!zd,Hd=zd=null}finally{Dt=f,F.p=l,H.T=s}}t.current=i,En=2}}function Lv(){if(En===2){En=0;var t=ar,i=Ns,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var l=F.p;F.p=2;var f=Dt;Dt|=4;try{ov(t,i.alternate,i)}finally{Dt=f,F.p=l,H.T=s}}En=3}}function Ov(){if(En===4||En===3){En=0,Z();var t=ar,i=Ns,s=ba,l=yv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,Ns=ar=null,Pv(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ir=null),yo(s),i=i.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(he,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,f=F.p,F.p=2,H.T=null;try{for(var p=t.onRecoverableError,b=0;b<l.length;b++){var N=l[b];p(N.value,{componentStack:N.stack})}}finally{H.T=i,F.p=f}}(ba&3)!==0&&Rc(),Yi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Ad?Jo++:(Jo=0,Ad=t):Jo=0,$o(0)}}function Pv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Lo(i)))}function Rc(){return Uv(),Lv(),Ov(),Iv()}function Iv(){if(En!==5)return!1;var t=ar,i=Ed;Ed=0;var s=yo(ba),l=H.T,f=F.p;try{F.p=32>s?32:s,H.T=null,s=Td,Td=null;var p=ar,b=ba;if(En=0,Ns=ar=null,ba=0,(Dt&6)!==0)throw Error(r(331));var N=Dt;if(Dt|=4,vv(p.current),pv(p,p.current,b,s),Dt=N,$o(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(he,p)}catch{}return!0}finally{F.p=f,H.T=l,Pv(t,i)}}function Bv(t,i,s){i=xi(s,i),i=ad(t.stateNode,i,2),t=Qa(t,i,2),t!==null&&(ke(t,2),Yi(t))}function Bt(t,i,s){if(t.tag===3)Bv(t,t,s);else for(;i!==null;){if(i.tag===3){Bv(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=xi(s,t),s=F0(2),l=Qa(i,s,2),l!==null&&(z0(s,l,i,t),ke(l,2),Yi(l));break}}i=i.return}}function Cd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new nM;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Sd=!0,f.add(s),t=oM.bind(null,t,i,s),i.then(t,t))}function oM(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Xt===t&&(_t&s)===s&&(ln===4||ln===3&&(_t&62914560)===_t&&300>zt()-bc?(Dt&2)===0&&Us(t,0):bd|=s,Ds===_t&&(Ds=0)),Yi(t)}function Fv(t,i){i===0&&(i=Me()),t=Nr(t,i),t!==null&&(ke(t,i),Yi(t))}function lM(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Fv(t,s)}function cM(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),Fv(t,s)}function uM(t,i){return fn(t,i)}var Cc=null,Os=null,Dd=!1,Dc=!1,Nd=!1,sr=0;function Yi(t){t!==Os&&t.next===null&&(Os===null?Cc=Os=t:Os=Os.next=t),Dc=!0,Dd||(Dd=!0,dM())}function $o(t,i){if(!Nd&&Dc){Nd=!0;do for(var s=!1,l=Cc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var b=l.suspendedLanes,N=l.pingedLanes;p=(1<<31-ze(42|t)+1)-1,p&=f&~(b&~N),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Vv(l,p))}else p=_t,p=xe(l,l===Xt?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||De(l,p)||(s=!0,Vv(l,p));l=l.next}while(s);Nd=!1}}function fM(){zv()}function zv(){Dc=Dd=!1;var t=0;sr!==0&&bM()&&(t=sr);for(var i=zt(),s=null,l=Cc;l!==null;){var f=l.next,p=Hv(l,i);p===0?(l.next=null,s===null?Cc=f:s.next=f,f===null&&(Os=s)):(s=l,(t!==0||(p&3)!==0)&&(Dc=!0)),l=f}En!==0&&En!==5||$o(t),sr!==0&&(sr=0)}function Hv(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var b=31-ze(p),N=1<<b,G=f[b];G===-1?((N&s)===0||(N&l)!==0)&&(f[b]=Fe(N,i)):G<=i&&(t.expiredLanes|=N),p&=~N}if(i=Xt,s=_t,s=xe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(It===2||It===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Wt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||De(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Wt(l),yo(s)){case 2:case 8:s=E;break;case 32:s=ee;break;case 268435456:s=pe;break;default:s=ee}return l=Gv.bind(null,t),s=fn(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Wt(l),t.callbackPriority=2,t.callbackNode=null,2}function Gv(t,i){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Rc()&&t.callbackNode!==s)return null;var l=_t;return l=xe(t,t===Xt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(bv(t,l,i),Hv(t,zt()),t.callbackNode!=null&&t.callbackNode===s?Gv.bind(null,t):null)}function Vv(t,i){if(Rc())return null;bv(t,i,!0)}function dM(){EM(function(){(Dt&6)!==0?fn(z,fM):zv()})}function Ud(){if(sr===0){var t=_s;t===0&&(t=Je,Je<<=1,(Je&261888)===0&&(Je=256)),sr=t}return sr}function kv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wr(""+t)}function Xv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function hM(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var p=kv((f[Cn]||null).action),b=l.submitter;b&&(i=(i=b[Cn]||null)?kv(i.formAction):b.getAttribute("formAction"),i!==null&&(p=i,b=null));var N=new Vl("action","action",null,l,f);t.push({event:N,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(sr!==0){var G=b?Xv(f,b):new FormData(f);Jf(s,{pending:!0,data:G,method:f.method,action:p},null,G)}}else typeof p=="function"&&(N.preventDefault(),G=b?Xv(f,b):new FormData(f),Jf(s,{pending:!0,data:G,method:f.method,action:p},p,G))},currentTarget:f}]})}}for(var Ld=0;Ld<mf.length;Ld++){var Od=mf[Ld],pM=Od.toLowerCase(),mM=Od[0].toUpperCase()+Od.slice(1);Ni(pM,"on"+mM)}Ni(Sg,"onAnimationEnd"),Ni(bg,"onAnimationIteration"),Ni(Mg,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(Nb,"onTransitionRun"),Ni(Ub,"onTransitionStart"),Ni(Lb,"onTransitionCancel"),Ni(Eg,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function Wv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var b=l.length-1;0<=b;b--){var N=l[b],G=N.instance,ne=N.currentTarget;if(N=N.listener,G!==p&&f.isPropagationStopped())break e;p=N,f.currentTarget=ne;try{p(f)}catch(ve){Wl(ve)}f.currentTarget=null,p=G}else for(b=0;b<l.length;b++){if(N=l[b],G=N.instance,ne=N.currentTarget,N=N.listener,G!==p&&f.isPropagationStopped())break e;p=N,f.currentTarget=ne;try{p(f)}catch(ve){Wl(ve)}f.currentTarget=null,p=G}}}}function vt(t,i){var s=i[Er];s===void 0&&(s=i[Er]=new Set);var l=t+"__bubble";s.has(l)||(qv(i,t,2,!1),s.add(l))}function Pd(t,i,s){var l=0;i&&(l|=4),qv(s,t,l,i)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function Id(t){if(!t[Nc]){t[Nc]=!0,Fl.forEach(function(s){s!=="selectionchange"&&(gM.has(s)||Pd(s,!1,t),Pd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Nc]||(i[Nc]=!0,Pd("selectionchange",!1,i))}}function qv(t,i,s,l){switch(Sx(i)){case 2:var f=XM;break;case 8:f=WM;break;default:f=Qd}s=f.bind(null,i,s,t),f=void 0,!tf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Bd(t,i,s,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var N=l.stateNode.containerInfo;if(N===f)break;if(b===4)for(b=l.return;b!==null;){var G=b.tag;if((G===3||G===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;N!==null;){if(b=ra(N),b===null)return;if(G=b.tag,G===5||G===6||G===26||G===27){l=p=b;continue e}N=N.parentNode}}l=l.return}Qm(function(){var ne=p,ve=$u(s),Se=[];e:{var le=Tg.get(t);if(le!==void 0){var de=Vl,qe=t;switch(t){case"keypress":if(Hl(s)===0)break e;case"keydown":case"keyup":de=cb;break;case"focusin":qe="focus",de=sf;break;case"focusout":qe="blur",de=sf;break;case"beforeblur":case"afterblur":de=sf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=QS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=db;break;case Sg:case bg:case Mg:de=eb;break;case Eg:de=pb;break;case"scroll":case"scrollend":de=ZS;break;case"wheel":de=gb;break;case"copy":case"cut":case"paste":de=nb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=ng;break;case"toggle":case"beforetoggle":de=xb}var nt=(i&4)!==0,Vt=!nt&&(t==="scroll"||t==="scrollend"),J=nt?le!==null?le+"Capture":null:le;nt=[];for(var W=ne,te;W!==null;){var _e=W;if(te=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||te===null||J===null||(_e=bo(W,J),_e!=null&&nt.push(tl(W,_e,te))),Vt)break;W=W.return}0<nt.length&&(le=new de(le,qe,null,s,ve),Se.push({event:le,listeners:nt}))}}if((i&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",le&&s!==Ju&&(qe=s.relatedTarget||s.fromElement)&&(ra(qe)||qe[Yn]))break e;if((de||le)&&(le=ve.window===ve?ve:(le=ve.ownerDocument)?le.defaultView||le.parentWindow:window,de?(qe=s.relatedTarget||s.toElement,de=ne,qe=qe?ra(qe):null,qe!==null&&(Vt=c(qe),nt=qe.tag,qe!==Vt||nt!==5&&nt!==27&&nt!==6)&&(qe=null)):(de=null,qe=ne),de!==qe)){if(nt=eg,_e="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(nt=ng,_e="onPointerLeave",J="onPointerEnter",W="pointer"),Vt=de==null?le:Ar(de),te=qe==null?le:Ar(qe),le=new nt(_e,W+"leave",de,s,ve),le.target=Vt,le.relatedTarget=te,_e=null,ra(ve)===ne&&(nt=new nt(J,W+"enter",qe,s,ve),nt.target=te,nt.relatedTarget=Vt,_e=nt),Vt=_e,de&&qe)t:{for(nt=vM,J=de,W=qe,te=0,_e=J;_e;_e=nt(_e))te++;_e=0;for(var et=W;et;et=nt(et))_e++;for(;0<te-_e;)J=nt(J),te--;for(;0<_e-te;)W=nt(W),_e--;for(;te--;){if(J===W||W!==null&&J===W.alternate){nt=J;break t}J=nt(J),W=nt(W)}nt=null}else nt=null;de!==null&&Yv(Se,le,de,nt,!1),qe!==null&&Vt!==null&&Yv(Se,Vt,qe,nt,!0)}}e:{if(le=ne?Ar(ne):window,de=le.nodeName&&le.nodeName.toLowerCase(),de==="select"||de==="input"&&le.type==="file")var wt=ug;else if(lg(le))if(fg)wt=Rb;else{wt=Ab;var je=Tb}else de=le.nodeName,!de||de.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ne&&Nt(ne.elementType)&&(wt=ug):wt=wb;if(wt&&(wt=wt(t,ne))){cg(Se,wt,s,ve);break e}je&&je(t,le,ne),t==="focusout"&&ne&&le.type==="number"&&ne.memoizedProps.value!=null&&mt(le,"number",le.value)}switch(je=ne?Ar(ne):window,t){case"focusin":(lg(je)||je.contentEditable==="true")&&(fs=je,df=ne,Do=null);break;case"focusout":Do=df=fs=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,_g(Se,s,ve);break;case"selectionchange":if(Db)break;case"keydown":case"keyup":_g(Se,s,ve)}var ft;if(lf)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else us?sg(t,s)&&(yt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(yt="onCompositionStart");yt&&(ig&&s.locale!=="ko"&&(us||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&us&&(ft=Jm()):(Xa=ve,nf="value"in Xa?Xa.value:Xa.textContent,us=!0)),je=Uc(ne,yt),0<je.length&&(yt=new tg(yt,t,null,s,ve),Se.push({event:yt,listeners:je}),ft?yt.data=ft:(ft=og(s),ft!==null&&(yt.data=ft)))),(ft=yb?Sb(t,s):bb(t,s))&&(yt=Uc(ne,"onBeforeInput"),0<yt.length&&(je=new tg("onBeforeInput","beforeinput",null,s,ve),Se.push({event:je,listeners:yt}),je.data=ft)),hM(Se,t,ne,s,ve)}Wv(Se,i)})}function tl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Uc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=bo(t,s),f!=null&&l.unshift(tl(t,f,p)),f=bo(t,i),f!=null&&l.push(tl(t,f,p))),t.tag===3)return l;t=t.return}return[]}function vM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yv(t,i,s,l,f){for(var p=i._reactName,b=[];s!==null&&s!==l;){var N=s,G=N.alternate,ne=N.stateNode;if(N=N.tag,G!==null&&G===l)break;N!==5&&N!==26&&N!==27||ne===null||(G=ne,f?(ne=bo(s,p),ne!=null&&b.unshift(tl(s,ne,G))):f||(ne=bo(s,p),ne!=null&&b.push(tl(s,ne,G)))),s=s.return}b.length!==0&&t.push({event:i,listeners:b})}var xM=/\r\n?/g,_M=/\u0000|\uFFFD/g;function jv(t){return(typeof t=="string"?t:""+t).replace(xM,`
`).replace(_M,"")}function Zv(t,i){return i=jv(i),jv(t)===i}function Gt(t,i,s,l,f,p){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||oi(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&oi(t,""+l);break;case"className":We(t,"class",l);break;case"tabIndex":We(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,s,l);break;case"style":Di(t,l,p);break;case"data":if(i!=="object"){We(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wr(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(i!=="input"&&Gt(t,i,"name",f.name,f,null),Gt(t,i,"formEncType",f.formEncType,f,null),Gt(t,i,"formMethod",f.formMethod,f,null),Gt(t,i,"formTarget",f.formTarget,f,null)):(Gt(t,i,"encType",f.encType,f,null),Gt(t,i,"method",f.method,f,null),Gt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wr(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=oa);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=wr(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":vt("beforetoggle",t),vt("toggle",t),Le(t,"popover",l);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Le(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ki.get(s)||s,Le(t,s,l))}}function Fd(t,i,s,l,f,p){switch(s){case"style":Di(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?oi(t,l):(typeof l=="number"||typeof l=="bigint")&&oi(t,""+l);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),p=t[Cn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(i,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Le(t,s,l)}}}function Ln(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var b=s[p];if(b!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Gt(t,i,p,b,s,null)}}f&&Gt(t,i,"srcSet",s.srcSet,s,null),l&&Gt(t,i,"src",s.src,s,null);return;case"input":vt("invalid",t);var N=p=b=f=null,G=null,ne=null;for(l in s)if(s.hasOwnProperty(l)){var ve=s[l];if(ve!=null)switch(l){case"name":f=ve;break;case"type":b=ve;break;case"checked":G=ve;break;case"defaultChecked":ne=ve;break;case"value":p=ve;break;case"defaultValue":N=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,i));break;default:Gt(t,i,l,ve,s,null)}}In(t,p,N,G,ne,b,f,!1);return;case"select":vt("invalid",t),l=b=p=null;for(f in s)if(s.hasOwnProperty(f)&&(N=s[f],N!=null))switch(f){case"value":p=N;break;case"defaultValue":b=N;break;case"multiple":l=N;default:Gt(t,i,f,N,s,null)}i=p,s=b,t.multiple=!!l,i!=null?Mn(t,!!l,i,!1):s!=null&&Mn(t,!!l,s,!0);return;case"textarea":vt("invalid",t),p=f=l=null;for(b in s)if(s.hasOwnProperty(b)&&(N=s[b],N!=null))switch(b){case"value":l=N;break;case"defaultValue":f=N;break;case"children":p=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(91));break;default:Gt(t,i,b,N,s,null)}Ci(t,l,f,p);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Gt(t,i,G,l,s,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(l=0;l<el.length;l++)vt(el[l],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(l=s[ne],l!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Gt(t,i,ne,l,s,null)}return;default:if(Nt(i)){for(ve in s)s.hasOwnProperty(ve)&&(l=s[ve],l!==void 0&&Fd(t,i,ve,l,s,void 0));return}}for(N in s)s.hasOwnProperty(N)&&(l=s[N],l!=null&&Gt(t,i,N,l,s,null))}function yM(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,b=null,N=null,G=null,ne=null,ve=null;for(de in s){var Se=s[de];if(s.hasOwnProperty(de)&&Se!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":G=Se;default:l.hasOwnProperty(de)||Gt(t,i,de,null,l,Se)}}for(var le in l){var de=l[le];if(Se=s[le],l.hasOwnProperty(le)&&(de!=null||Se!=null))switch(le){case"type":p=de;break;case"name":f=de;break;case"checked":ne=de;break;case"defaultChecked":ve=de;break;case"value":b=de;break;case"defaultValue":N=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,i));break;default:de!==Se&&Gt(t,i,le,de,l,Se)}}He(t,b,N,G,ne,ve,p,f);return;case"select":de=b=N=le=null;for(p in s)if(G=s[p],s.hasOwnProperty(p)&&G!=null)switch(p){case"value":break;case"multiple":de=G;default:l.hasOwnProperty(p)||Gt(t,i,p,null,l,G)}for(f in l)if(p=l[f],G=s[f],l.hasOwnProperty(f)&&(p!=null||G!=null))switch(f){case"value":le=p;break;case"defaultValue":N=p;break;case"multiple":b=p;default:p!==G&&Gt(t,i,f,p,l,G)}i=N,s=b,l=de,le!=null?Mn(t,!!s,le,!1):!!l!=!!s&&(i!=null?Mn(t,!!s,i,!0):Mn(t,!!s,s?[]:"",!1));return;case"textarea":de=le=null;for(N in s)if(f=s[N],s.hasOwnProperty(N)&&f!=null&&!l.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Gt(t,i,N,null,l,f)}for(b in l)if(f=l[b],p=s[b],l.hasOwnProperty(b)&&(f!=null||p!=null))switch(b){case"value":le=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&Gt(t,i,b,f,l,p)}si(t,le,de);return;case"option":for(var qe in s)if(le=s[qe],s.hasOwnProperty(qe)&&le!=null&&!l.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Gt(t,i,qe,null,l,le)}for(G in l)if(le=l[G],de=s[G],l.hasOwnProperty(G)&&le!==de&&(le!=null||de!=null))switch(G){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Gt(t,i,G,le,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in s)le=s[nt],s.hasOwnProperty(nt)&&le!=null&&!l.hasOwnProperty(nt)&&Gt(t,i,nt,null,l,le);for(ne in l)if(le=l[ne],de=s[ne],l.hasOwnProperty(ne)&&le!==de&&(le!=null||de!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,i));break;default:Gt(t,i,ne,le,l,de)}return;default:if(Nt(i)){for(var Vt in s)le=s[Vt],s.hasOwnProperty(Vt)&&le!==void 0&&!l.hasOwnProperty(Vt)&&Fd(t,i,Vt,void 0,l,le);for(ve in l)le=l[ve],de=s[ve],!l.hasOwnProperty(ve)||le===de||le===void 0&&de===void 0||Fd(t,i,ve,le,l,de);return}}for(var J in s)le=s[J],s.hasOwnProperty(J)&&le!=null&&!l.hasOwnProperty(J)&&Gt(t,i,J,null,l,le);for(Se in l)le=l[Se],de=s[Se],!l.hasOwnProperty(Se)||le===de||le==null&&de==null||Gt(t,i,Se,le,l,de)}function Kv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,b=f.initiatorType,N=f.duration;if(p&&N&&Kv(b)){for(b=0,N=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],ne=G.startTime;if(ne>N)break;var ve=G.transferSize,Se=G.initiatorType;ve&&Kv(Se)&&(G=G.responseEnd,b+=ve*(G<N?1:(N-ne)/(G-ne)))}if(--l,i+=8*(p+b)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var zd=null,Hd=null;function Lc(t){return t.nodeType===9?t:t.ownerDocument}function Qv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Gd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vd=null;function bM(){var t=window.event;return t&&t.type==="popstate"?t===Vd?!1:(Vd=t,!0):(Vd=null,!1)}var $v=typeof setTimeout=="function"?setTimeout:void 0,MM=typeof clearTimeout=="function"?clearTimeout:void 0,ex=typeof Promise=="function"?Promise:void 0,EM=typeof queueMicrotask=="function"?queueMicrotask:typeof ex<"u"?function(t){return ex.resolve(null).then(t).catch(TM)}:$v;function TM(t){setTimeout(function(){throw t})}function or(t){return t==="head"}function tx(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Fs(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")nl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,nl(s);for(var p=s.firstChild;p;){var b=p.nextSibling,N=p.nodeName;p[Ha]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=b}}else s==="body"&&nl(t.ownerDocument.body);s=f}while(s);Fs(i)}function nx(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function kd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":kd(s),Ga(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function AM(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ha])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function wM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Mi(t.nextSibling),t===null))return null;return t}function ix(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Mi(t.nextSibling),t===null))return null;return t}function Xd(t){return t.data==="$?"||t.data==="$~"}function Wd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function RM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Mi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var qd=null;function ax(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Mi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function rx(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function sx(t,i,s){switch(i=Lc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function nl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ga(t)}var Ei=new Map,ox=new Set;function Oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ma=F.d;F.d={f:CM,r:DM,D:NM,C:UM,L:LM,m:OM,X:IM,S:PM,M:BM};function CM(){var t=Ma.f(),i=Tc();return t||i}function DM(t){var i=sa(t);i!==null&&i.tag===5&&i.type==="form"?E0(i):Ma.r(t)}var Ps=typeof document>"u"?null:document;function lx(t,i,s){var l=Ps;if(l&&typeof i=="string"&&i){var f=Ot(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),ox.has(f)||(ox.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Ln(i,"link",t),vn(i),l.head.appendChild(i)))}}function NM(t){Ma.D(t),lx("dns-prefetch",t,null)}function UM(t,i){Ma.C(t,i),lx("preconnect",t,i)}function LM(t,i,s){Ma.L(t,i,s);var l=Ps;if(l&&t&&i){var f='link[rel="preload"][as="'+Ot(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ot(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ot(s.imageSizes)+'"]')):f+='[href="'+Ot(t)+'"]';var p=f;switch(i){case"style":p=Is(t);break;case"script":p=Bs(t)}Ei.has(p)||(t=x({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ei.set(p,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(il(p))||i==="script"&&l.querySelector(al(p))||(i=l.createElement("link"),Ln(i,"link",t),vn(i),l.head.appendChild(i)))}}function OM(t,i){Ma.m(t,i);var s=Ps;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Ot(l)+'"][href="'+Ot(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Bs(t)}if(!Ei.has(p)&&(t=x({rel:"modulepreload",href:t},i),Ei.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(al(p)))return}l=s.createElement("link"),Ln(l,"link",t),vn(l),s.head.appendChild(l)}}}function PM(t,i,s){Ma.S(t,i,s);var l=Ps;if(l&&t){var f=Va(l).hoistableStyles,p=Is(t);i=i||"default";var b=f.get(p);if(!b){var N={loading:0,preload:null};if(b=l.querySelector(il(p)))N.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ei.get(p))&&Yd(t,s);var G=b=l.createElement("link");vn(G),Ln(G,"link",t),G._p=new Promise(function(ne,ve){G.onload=ne,G.onerror=ve}),G.addEventListener("load",function(){N.loading|=1}),G.addEventListener("error",function(){N.loading|=2}),N.loading|=4,Pc(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:N},f.set(p,b)}}}function IM(t,i){Ma.X(t,i);var s=Ps;if(s&&t){var l=Va(s).hoistableScripts,f=Bs(t),p=l.get(f);p||(p=s.querySelector(al(f)),p||(t=x({src:t,async:!0},i),(i=Ei.get(f))&&jd(t,i),p=s.createElement("script"),vn(p),Ln(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function BM(t,i){Ma.M(t,i);var s=Ps;if(s&&t){var l=Va(s).hoistableScripts,f=Bs(t),p=l.get(f);p||(p=s.querySelector(al(f)),p||(t=x({src:t,async:!0,type:"module"},i),(i=Ei.get(f))&&jd(t,i),p=s.createElement("script"),vn(p),Ln(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function cx(t,i,s,l){var f=(f=re.current)?Oc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Is(s.href),s=Va(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Is(s.href);var p=Va(f).hoistableStyles,b=p.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,b),(p=f.querySelector(il(t)))&&!p._p&&(b.instance=p,b.state.loading=5),Ei.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ei.set(t,s),p||FM(f,t,s,b.state))),i&&l===null)throw Error(r(528,""));return b}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Bs(s),s=Va(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Is(t){return'href="'+Ot(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function ux(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function FM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ln(i,"link",s),vn(i),t.head.appendChild(i))}function Bs(t){return'[src="'+Ot(t)+'"]'}function al(t){return"script[async]"+t}function fx(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Ot(s.href)+'"]');if(l)return i.instance=l,vn(l),l;var f=x({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),vn(l),Ln(l,"style",f),Pc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Is(s.href);var p=t.querySelector(il(f));if(p)return i.state.loading|=4,i.instance=p,vn(p),p;l=ux(s),(f=Ei.get(f))&&Yd(l,f),p=(t.ownerDocument||t).createElement("link"),vn(p);var b=p;return b._p=new Promise(function(N,G){b.onload=N,b.onerror=G}),Ln(p,"link",l),i.state.loading|=4,Pc(p,s.precedence,t),i.instance=p;case"script":return p=Bs(s.src),(f=t.querySelector(al(p)))?(i.instance=f,vn(f),f):(l=s,(f=Ei.get(p))&&(l=x({},s),jd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),vn(f),Ln(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Pc(l,s.precedence,t));return i.instance}function Pc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,b=0;b<l.length;b++){var N=l[b];if(N.dataset.precedence===i)p=N;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Yd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function jd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Ic=null;function dx(t,i,s){if(Ic===null){var l=new Map,f=Ic=new Map;f.set(s,l)}else f=Ic,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[Ha]||p[gn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var b=p.getAttribute(i)||"";b=t+b;var N=l.get(b);N?N.push(p):l.set(b,[p])}}return l}function hx(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function zM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function px(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function HM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Is(l.href),p=i.querySelector(il(f));if(p){i=p._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Bc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=p,vn(p);return}p=i.ownerDocument||i,l=ux(l),(f=Ei.get(f))&&Yd(l,f),p=p.createElement("link"),vn(p);var b=p;b._p=new Promise(function(N,G){b.onload=N,b.onerror=G}),Ln(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Bc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Zd=0;function GM(t,i){return t.stylesheets&&t.count===0&&zc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&zc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+i);0<t.imgBytes&&Zd===0&&(Zd=62500*SM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Zd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fc=null;function zc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fc=new Map,i.forEach(VM,t),Fc=null,Bc.call(t))}function VM(t,i){if(!(i.state.loading&4)){var s=Fc.get(t);if(s)var l=s.get(null);else{s=new Map,Fc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var b=f[p];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),p=s.get(b)||l,p===l&&s.set(null,f),s.set(b,f),this.count++,l=Bc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var rl={$$typeof:U,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function kM(t,i,s,l,f,p,b,N,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function mx(t,i,s,l,f,p,b,N,G,ne,ve,Se){return t=new kM(t,i,s,b,G,ne,ve,Se,N),i=1,p===!0&&(i|=24),p=ci(3,null,null,i),t.current=p,p.stateNode=t,i=Rf(),i.refCount++,t.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:i},Uf(p),t}function gx(t){return t?(t=ps,t):ps}function vx(t,i,s,l,f,p){f=gx(f),l.context===null?l.context=f:l.pendingContext=f,l=Ka(i),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Qa(t,l,i),s!==null&&($n(s,t,i),Bo(s,t,i))}function xx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Kd(t,i){xx(t,i),(t=t.alternate)&&xx(t,i)}function _x(t){if(t.tag===13||t.tag===31){var i=Nr(t,67108864);i!==null&&$n(i,t,67108864),Kd(t,67108864)}}function yx(t){if(t.tag===13||t.tag===31){var i=pi();i=_o(i);var s=Nr(t,i);s!==null&&$n(s,t,i),Kd(t,i)}}var Hc=!0;function XM(t,i,s,l){var f=H.T;H.T=null;var p=F.p;try{F.p=2,Qd(t,i,s,l)}finally{F.p=p,H.T=f}}function WM(t,i,s,l){var f=H.T;H.T=null;var p=F.p;try{F.p=8,Qd(t,i,s,l)}finally{F.p=p,H.T=f}}function Qd(t,i,s,l){if(Hc){var f=Jd(l);if(f===null)Bd(t,i,l,Gc,s),bx(t,l);else if(YM(f,t,i,s,l))l.stopPropagation();else if(bx(t,l),i&4&&-1<qM.indexOf(t)){for(;f!==null;){var p=sa(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var b=we(p.pendingLanes);if(b!==0){var N=p;for(N.pendingLanes|=2,N.entangledLanes|=2;b;){var G=1<<31-ze(b);N.entanglements[1]|=G,b&=~G}Yi(p),(Dt&6)===0&&(Mc=zt()+500,$o(0))}}break;case 31:case 13:N=Nr(p,2),N!==null&&$n(N,p,2),Tc(),Kd(p,2)}if(p=Jd(l),p===null&&Bd(t,i,l,Gc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else Bd(t,i,l,null,s)}}function Jd(t){return t=$u(t),$d(t)}var Gc=null;function $d(t){if(Gc=null,t=ra(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Gc=t,null}function Sx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case z:return 2;case E:return 8;case ee:case se:return 32;case pe:return 268435456;default:return 32}default:return 32}}var eh=!1,lr=null,cr=null,ur=null,sl=new Map,ol=new Map,fr=[],qM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bx(t,i){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":sl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(i.pointerId)}}function ll(t,i,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=sa(i),i!==null&&_x(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function YM(t,i,s,l,f){switch(i){case"focusin":return lr=ll(lr,t,i,s,l,f),!0;case"dragenter":return cr=ll(cr,t,i,s,l,f),!0;case"mouseover":return ur=ll(ur,t,i,s,l,f),!0;case"pointerover":var p=f.pointerId;return sl.set(p,ll(sl.get(p)||null,t,i,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,ol.set(p,ll(ol.get(p)||null,t,i,s,l,f)),!0}return!1}function Mx(t){var i=ra(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,os(t.priority,function(){yx(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,os(t.priority,function(){yx(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Jd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Ju=l,s.target.dispatchEvent(l),Ju=null}else return i=sa(s),i!==null&&_x(i),t.blockedOn=s,!1;i.shift()}return!0}function Ex(t,i,s){Vc(t)&&s.delete(i)}function jM(){eh=!1,lr!==null&&Vc(lr)&&(lr=null),cr!==null&&Vc(cr)&&(cr=null),ur!==null&&Vc(ur)&&(ur=null),sl.forEach(Ex),ol.forEach(Ex)}function kc(t,i){t.blockedOn===i&&(t.blockedOn=null,eh||(eh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,jM)))}var Xc=null;function Tx(t){Xc!==t&&(Xc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Xc===t&&(Xc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if($d(l||s)===null)continue;break}var p=sa(s);p!==null&&(t.splice(i,3),i-=3,Jf(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Fs(t){function i(G){return kc(G,t)}lr!==null&&kc(lr,t),cr!==null&&kc(cr,t),ur!==null&&kc(ur,t),sl.forEach(i),ol.forEach(i);for(var s=0;s<fr.length;s++){var l=fr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<fr.length&&(s=fr[0],s.blockedOn===null);)Mx(s),s.blockedOn===null&&fr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],b=f[Cn]||null;if(typeof p=="function")b||Tx(s);else if(b){var N=null;if(p&&p.hasAttribute("formAction")){if(f=p,b=p[Cn]||null)N=b.formAction;else if($d(f)!==null)continue}else N=b.action;typeof N=="function"?s[l+1]=N:(s.splice(l,3),l-=3),Tx(s)}}}function Ax(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function th(t){this._internalRoot=t}Wc.prototype.render=th.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=pi();vx(s,l,t,i,null,null)},Wc.prototype.unmount=th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;vx(t.current,2,null,t,null,null),Tc(),i[Yn]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var i=So();t={blockedOn:null,target:t,priority:i};for(var s=0;s<fr.length&&i!==0&&i<fr[s].priority;s++);fr.splice(s,0,t),s===0&&Mx(t)}};var wx=e.version;if(wx!=="19.2.7")throw Error(r(527,wx,"19.2.7"));F.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ZM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{he=qc.inject(ZM),me=qc}catch{}}return ul.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=O0,p=P0,b=I0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=mx(t,1,!1,null,null,s,l,null,f,p,b,Ax),t[Yn]=i.current,Id(t),new th(i)},ul.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=O0,b=P0,N=I0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(N=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=mx(t,1,!0,i,s??null,l,f,G,p,b,N,Ax),i.context=gx(null),s=i.current,l=pi(),l=_o(l),f=Ka(l),f.callback=null,Qa(s,f,l),s=l,i.current.lanes=s,ke(i,s),Yi(i),t[Yn]=i.current,Id(t),new Wc(i)},ul.version="19.2.7",ul}var Bx;function oE(){if(Bx)return ah.exports;Bx=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),ah.exports=sE(),ah.exports}var lE=oE(),lh,Fx;function cE(){if(Fx)return lh;Fx=1;var a=typeof Element<"u",e=typeof Map=="function",n=typeof Set=="function",r=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function o(c,u){if(c===u)return!0;if(c&&u&&typeof c=="object"&&typeof u=="object"){if(c.constructor!==u.constructor)return!1;var d,m,h;if(Array.isArray(c)){if(d=c.length,d!=u.length)return!1;for(m=d;m--!==0;)if(!o(c[m],u[m]))return!1;return!0}var g;if(e&&c instanceof Map&&u instanceof Map){if(c.size!==u.size)return!1;for(g=c.entries();!(m=g.next()).done;)if(!u.has(m.value[0]))return!1;for(g=c.entries();!(m=g.next()).done;)if(!o(m.value[1],u.get(m.value[0])))return!1;return!0}if(n&&c instanceof Set&&u instanceof Set){if(c.size!==u.size)return!1;for(g=c.entries();!(m=g.next()).done;)if(!u.has(m.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(c)&&ArrayBuffer.isView(u)){if(d=c.length,d!=u.length)return!1;for(m=d;m--!==0;)if(c[m]!==u[m])return!1;return!0}if(c.constructor===RegExp)return c.source===u.source&&c.flags===u.flags;if(c.valueOf!==Object.prototype.valueOf&&typeof c.valueOf=="function"&&typeof u.valueOf=="function")return c.valueOf()===u.valueOf();if(c.toString!==Object.prototype.toString&&typeof c.toString=="function"&&typeof u.toString=="function")return c.toString()===u.toString();if(h=Object.keys(c),d=h.length,d!==Object.keys(u).length)return!1;for(m=d;m--!==0;)if(!Object.prototype.hasOwnProperty.call(u,h[m]))return!1;if(a&&c instanceof Element)return!1;for(m=d;m--!==0;)if(!((h[m]==="_owner"||h[m]==="__v"||h[m]==="__o")&&c.$$typeof)&&!o(c[h[m]],u[h[m]]))return!1;return!0}return c!==c&&u!==u}return lh=function(u,d){try{return o(u,d)}catch(m){if((m.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw m}},lh}var uE=cE();const fE=Gu(uE);var ch,zx;function dE(){if(zx)return ch;zx=1;var a=function(e,n,r,o,c,u,d,m){if(!e){var h;if(n===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var g=[r,o,c,u,d,m],x=0;h=new Error(n.replace(/%s/g,function(){return g[x++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}};return ch=a,ch}var hE=dE();const Hx=Gu(hE);var uh,Gx;function pE(){return Gx||(Gx=1,uh=function(e,n,r,o){var c=r?r.call(o,e,n):void 0;if(c!==void 0)return!!c;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var u=Object.keys(e),d=Object.keys(n);if(u.length!==d.length)return!1;for(var m=Object.prototype.hasOwnProperty.bind(n),h=0;h<u.length;h++){var g=u[h];if(!m(g))return!1;var x=e[g],v=n[g];if(c=r?r.call(o,x,v,g):void 0,c===!1||c===void 0&&x!==v)return!1}return!0}),uh}var mE=pE();const gE=Gu(mE);var gy=(a=>(a.BASE="base",a.BODY="body",a.HEAD="head",a.HTML="html",a.LINK="link",a.META="meta",a.NOSCRIPT="noscript",a.SCRIPT="script",a.STYLE="style",a.TITLE="title",a.FRAGMENT="Symbol(react.fragment)",a))(gy||{}),fh={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Vx=Object.values(gy),Vu={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},vy=Object.entries(Vu).reduce((a,[e,n])=>(a[n]=e,a),{}),Fi="data-rh",ao={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},ro=(a,e)=>{for(let n=a.length-1;n>=0;n-=1){const r=a[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},vE=a=>{let e=ro(a,"title");const n=ro(a,ao.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=ro(a,ao.DEFAULT_TITLE);return e||r||void 0},xE=a=>ro(a,ao.ON_CHANGE_CLIENT_STATE)||(()=>{}),dh=(a,e)=>e.filter(n=>typeof n[a]<"u").map(n=>n[a]).reduce((n,r)=>({...n,...r}),{}),_E=(a,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const o=Object.keys(r);for(let c=0;c<o.length;c+=1){const d=o[c].toLowerCase();if(a.indexOf(d)!==-1&&r[d])return n.concat(r)}}return n},[]),yE=a=>console&&typeof console.warn=="function"&&console.warn(a),fl=(a,e,n)=>{const r={};return n.filter(o=>Array.isArray(o[a])?!0:(typeof o[a]<"u"&&yE(`Helmet: ${a} should be of type "Array". Instead found type "${typeof o[a]}"`),!1)).map(o=>o[a]).reverse().reduce((o,c)=>{const u={};c.filter(m=>{let h;const g=Object.keys(m);for(let v=0;v<g.length;v+=1){const y=g[v],M=y.toLowerCase();e.indexOf(M)!==-1&&!(h==="rel"&&m[h].toLowerCase()==="canonical")&&!(M==="rel"&&m[M].toLowerCase()==="stylesheet")&&(h=M),e.indexOf(y)!==-1&&(y==="innerHTML"||y==="cssText"||y==="itemprop")&&(h=y)}if(!h||!m[h])return!1;const x=m[h].toLowerCase();return r[h]||(r[h]={}),u[h]||(u[h]={}),r[h][x]?!1:(u[h][x]=!0,!0)}).reverse().forEach(m=>o.push(m));const d=Object.keys(u);for(let m=0;m<d.length;m+=1){const h=d[m],g={...r[h],...u[h]};r[h]=g}return o},[]).reverse()},SE=(a,e)=>{if(Array.isArray(a)&&a.length){for(let n=0;n<a.length;n+=1)if(a[n][e])return!0}return!1},bE=a=>({baseTag:_E(["href"],a),bodyAttributes:dh("bodyAttributes",a),defer:ro(a,ao.DEFER),encode:ro(a,ao.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:dh("htmlAttributes",a),linkTags:fl("link",["rel","href"],a),metaTags:fl("meta",["name","charset","http-equiv","property","itemprop"],a),noscriptTags:fl("noscript",["innerHTML"],a),onChangeClientState:xE(a),scriptTags:fl("script",["src","innerHTML"],a),styleTags:fl("style",["cssText"],a),title:vE(a),titleAttributes:dh("titleAttributes",a),prioritizeSeoTags:SE(a,ao.PRIORITIZE_SEO_TAGS)}),xy=a=>Array.isArray(a)?a.join(""):a,ME=(a,e)=>{const n=Object.keys(a);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(a[n[r]]))return!0;return!1},hh=(a,e)=>Array.isArray(a)?a.reduce((n,r)=>(ME(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:a,priority:[]},kx=(a,e)=>({...a,[e]:void 0}),EE=["noscript","script","style"],sp=(a,e=!0)=>e===!1?String(a):String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),_y=a=>Object.keys(a).reduce((e,n)=>{const r=typeof a[n]<"u"?`${n}="${a[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),TE=(a,e,n,r)=>{const o=_y(n),c=xy(e);return o?`<${a} ${Fi}="true" ${o}>${sp(c,r)}</${a}>`:`<${a} ${Fi}="true">${sp(c,r)}</${a}>`},AE=(a,e,n=!0)=>e.reduce((r,o)=>{const c=o,u=Object.keys(c).filter(h=>!(h==="innerHTML"||h==="cssText")).reduce((h,g)=>{const x=typeof c[g]>"u"?g:`${g}="${sp(c[g],n)}"`;return h?`${h} ${x}`:x},""),d=c.innerHTML||c.cssText||"",m=EE.indexOf(a)===-1;return`${r}<${a} ${Fi}="true" ${u}${m?"/>":`>${d}</${a}>`}`},""),yy=(a,e={})=>Object.keys(a).reduce((n,r)=>{const o=Vu[r];return n[o||r]=a[r],n},e),wE=(a,e,n)=>{const r={key:e,[Fi]:!0},o=yy(n,r);return[pn.createElement("title",o,e)]},_u=(a,e)=>e.map((n,r)=>{const o={key:r,[Fi]:!0};return Object.keys(n).forEach(c=>{const d=Vu[c]||c;if(d==="innerHTML"||d==="cssText"){const m=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:m}}else o[d]=n[c]}),pn.createElement(a,o)}),Ai=(a,e,n=!0)=>{switch(a){case"title":return{toComponent:()=>wE(a,e.title,e.titleAttributes),toString:()=>TE(a,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>yy(e),toString:()=>_y(e)};default:return{toComponent:()=>_u(a,e),toString:()=>AE(a,e,n)}}},RE=({metaTags:a,linkTags:e,scriptTags:n,encode:r})=>{const o=hh(a,fh.meta),c=hh(e,fh.link),u=hh(n,fh.script);return{priorityMethods:{toComponent:()=>[..._u("meta",o.priority),..._u("link",c.priority),..._u("script",u.priority)],toString:()=>`${Ai("meta",o.priority,r)} ${Ai("link",c.priority,r)} ${Ai("script",u.priority,r)}`},metaTags:o.default,linkTags:c.default,scriptTags:u.default}},CE=a=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:o,noscriptTags:c,styleTags:u,title:d="",titleAttributes:m,prioritizeSeoTags:h}=a;let{linkTags:g,metaTags:x,scriptTags:v}=a,y={toComponent:()=>[],toString:()=>""};return h&&({priorityMethods:y,linkTags:g,metaTags:x,scriptTags:v}=RE(a)),{priority:y,base:Ai("base",e,r),bodyAttributes:Ai("bodyAttributes",n,r),htmlAttributes:Ai("htmlAttributes",o,r),link:Ai("link",g,r),meta:Ai("meta",x,r),noscript:Ai("noscript",c,r),script:Ai("script",v,r),style:Ai("style",u,r),title:Ai("title",{title:d,titleAttributes:m},r)}},op=CE,Yc=[],hm=!!(typeof window<"u"&&window.document&&window.document.createElement),lp=class{constructor(a,e){Ea(this,"instances",[]);Ea(this,"canUseDOM",hm);Ea(this,"context");Ea(this,"value",{setHelmet:a=>{this.context.helmet=a},helmetInstances:{get:()=>this.canUseDOM?Yc:this.instances,add:a=>{(this.canUseDOM?Yc:this.instances).push(a)},remove:a=>{const e=(this.canUseDOM?Yc:this.instances).indexOf(a);(this.canUseDOM?Yc:this.instances).splice(e,1)}}});this.context=a,this.canUseDOM=e||!1,e||(a.helmet=op({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},DE=parseInt(pn.version.split(".")[0],10),cp=DE>=19,NE={},Sy=pn.createContext(NE),ts,by=(ts=class extends fe.Component{constructor(n){super(n);Ea(this,"helmetData");cp?this.helmetData=null:this.helmetData=new lp(this.props.context||{},ts.canUseDOM)}render(){return cp?pn.createElement(pn.Fragment,null,this.props.children):pn.createElement(Sy.Provider,{value:this.helmetData.value},this.props.children)}},Ea(ts,"canUseDOM",hm),ts),zs=(a,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${a}[${Fi}]`),o=[].slice.call(r),c=[];let u;return e&&e.length&&e.forEach(d=>{const m=document.createElement(a);for(const h in d)if(Object.prototype.hasOwnProperty.call(d,h))if(h==="innerHTML")m.innerHTML=d.innerHTML;else if(h==="cssText"){const g=d.cssText;m.appendChild(document.createTextNode(g))}else{const g=h,x=typeof d[g]>"u"?"":d[g];m.setAttribute(h,x)}m.setAttribute(Fi,"true"),o.some((h,g)=>(u=g,m.isEqualNode(h)))?o.splice(u,1):c.push(m)}),o.forEach(d=>{var m;return(m=d.parentNode)==null?void 0:m.removeChild(d)}),c.forEach(d=>n.appendChild(d)),{oldTags:o,newTags:c}},up=(a,e)=>{const n=document.getElementsByTagName(a)[0];if(!n)return;const r=n.getAttribute(Fi),o=r?r.split(","):[],c=[...o],u=Object.keys(e);for(const d of u){const m=e[d]||"";n.getAttribute(d)!==m&&n.setAttribute(d,m),o.indexOf(d)===-1&&o.push(d);const h=c.indexOf(d);h!==-1&&c.splice(h,1)}for(let d=c.length-1;d>=0;d-=1)n.removeAttribute(c[d]);o.length===c.length?n.removeAttribute(Fi):n.getAttribute(Fi)!==u.join(",")&&n.setAttribute(Fi,u.join(","))},UE=(a,e)=>{typeof a<"u"&&document.title!==a&&(document.title=xy(a)),up("title",e)},Xx=(a,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:o,linkTags:c,metaTags:u,noscriptTags:d,onChangeClientState:m,scriptTags:h,styleTags:g,title:x,titleAttributes:v}=a;up("body",r),up("html",o),UE(x,v);const y={baseTag:zs("base",n),linkTags:zs("link",c),metaTags:zs("meta",u),noscriptTags:zs("noscript",d),scriptTags:zs("script",h),styleTags:zs("style",g)},M={},w={};Object.keys(y).forEach(S=>{const{newTags:_,oldTags:R}=y[S];_.length&&(M[S]=_),R.length&&(w[S]=y[S].oldTags)}),e&&e(),m(a,M,w)},dl=null,LE=a=>{dl&&cancelAnimationFrame(dl),a.defer?dl=requestAnimationFrame(()=>{Xx(a,()=>{dl=null})}):(Xx(a),dl=null)},OE=LE,Wx=class extends fe.Component{constructor(){super(...arguments);Ea(this,"rendered",!1)}shouldComponentUpdate(e){return!gE(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const o=bE(e.get().map(c=>{const{context:u,...d}=c.props;return d}));by.canUseDOM?OE(o):op&&(r=op(o)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},yu=[],qx=a=>{const e={};for(const n of Object.keys(a))e[vy[n]||n]=a[n];return e},Xr=a=>{const e={};for(const n of Object.keys(a)){const r=Vu[n];e[r||n]=a[n]}return e},Yx=(a,e)=>{if(!hm)return;const n=document.getElementsByTagName(a)[0];if(!n)return;const r="data-rh-managed",o=n.getAttribute(r),c=o?o.split(","):[],u=Object.keys(e);for(const d of c)u.includes(d)||n.removeAttribute(d);for(const d of u){const m=e[d];m==null||m===!1?n.removeAttribute(d):m===!0?n.setAttribute(d,""):n.setAttribute(d,String(m))}u.length>0?n.setAttribute(r,u.join(",")):n.removeAttribute(r)},ph=()=>{const a={},e={};for(const n of yu){const{htmlAttributes:r,bodyAttributes:o}=n.props;r&&Object.assign(a,qx(r)),o&&Object.assign(e,qx(o))}Yx("html",a),Yx("body",e)},PE=class extends fe.Component{componentDidMount(){yu.push(this),ph()}componentDidUpdate(){ph()}componentWillUnmount(){const a=yu.indexOf(this);a!==-1&&yu.splice(a,1),ph()}resolveTitle(){const{title:a,titleTemplate:e,defaultTitle:n}=this.props;return a&&e?e.replace(/%s/g,()=>Array.isArray(a)?a.join(""):a):a||n||void 0}renderTitle(){const a=this.resolveTitle();if(a===void 0)return null;const e=this.props.titleAttributes||{};return pn.createElement("title",Xr(e),a)}renderBase(){const{base:a}=this.props;return a?pn.createElement("base",Xr(a)):null}renderMeta(){const{meta:a}=this.props;return!a||!Array.isArray(a)?null:a.map((e,n)=>pn.createElement("meta",{key:n,...Xr(e)}))}renderLink(){const{link:a}=this.props;return!a||!Array.isArray(a)?null:a.map((e,n)=>pn.createElement("link",{key:n,...Xr(e)}))}renderScript(){const{script:a}=this.props;return!a||!Array.isArray(a)?null:a.map((e,n)=>{const{innerHTML:r,...o}=e,c=Xr(o);return r&&(c.dangerouslySetInnerHTML={__html:r}),pn.createElement("script",{key:n,...c})})}renderStyle(){const{style:a}=this.props;return!a||!Array.isArray(a)?null:a.map((e,n)=>{const{cssText:r,...o}=e,c=Xr(o);return r&&(c.dangerouslySetInnerHTML={__html:r}),pn.createElement("style",{key:n,...c})})}renderNoscript(){const{noscript:a}=this.props;return!a||!Array.isArray(a)?null:a.map((e,n)=>{const{innerHTML:r,...o}=e,c=Xr(o);return r&&(c.dangerouslySetInnerHTML={__html:r}),pn.createElement("noscript",{key:n,...c})})}render(){return pn.createElement(pn.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},rp,My=(rp=class extends fe.Component{shouldComponentUpdate(a){return!fE(kx(this.props,"helmetData"),kx(a,"helmetData"))}mapNestedChildrenToProps(a,e){if(!e)return null;switch(a.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${a.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(a,e,n,r){return{...e,[a.type]:[...e[a.type]||[],{...n,...this.mapNestedChildrenToProps(a,r)}]}}mapObjectTypeChildren(a,e,n,r){switch(a.type){case"title":return{...e,[a.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[a.type]:{...n}}}}mapArrayTypeChildrenToProps(a,e){let n={...e};return Object.keys(a).forEach(r=>{n={...n,[r]:a[r]}}),n}warnOnInvalidChildren(a,e){return Hx(Vx.some(n=>a.type===n),typeof a.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Vx.join(", ")} are allowed. Helmet does not support rendering <${a.type}> elements. Refer to our API for more information.`),Hx(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${a.type}>. Did you forget to wrap your children in braces? ( <${a.type}>{\`\`}</${a.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(a,e){let n={};return pn.Children.forEach(a,r=>{if(!r||!r.props)return;const{children:o,...c}=r.props,u=Object.keys(c).reduce((m,h)=>(m[vy[h]||h]=c[h],m),{});let{type:d}=r;switch(typeof d=="symbol"?d=d.toString():this.warnOnInvalidChildren(r,o),d){case"Symbol(react.fragment)":e=this.mapChildrenToProps(o,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,u,o);break;default:e=this.mapObjectTypeChildren(r,e,u,o);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:a,...e}=this.props;let n={...e},{helmetData:r}=e;if(a&&(n=this.mapChildrenToProps(a,n)),r&&!(r instanceof lp)){const o=r;r=new lp(o.context,!0),delete n.helmetData}return cp?pn.createElement(PE,{...n}):r?pn.createElement(Wx,{...n,context:r.value}):pn.createElement(Sy.Consumer,null,o=>pn.createElement(Wx,{...n,context:o}))}},Ea(rp,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),rp);/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var pm=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Ey=/^[\\/]{2}/;function IE(a,e){return e+a.replace(/\\/g,"/")}var jx="popstate";function Zx(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function BE(a={}){function e(r,o){var h;let c=(h=o.state)==null?void 0:h.masked,{pathname:u,search:d,hash:m}=c||r.location;return fp("",{pathname:u,search:d,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default",c?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,o){return typeof o=="string"?o:Tl(o)}return zE(e,n,null,a)}function tn(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function ta(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function FE(){return Math.random().toString(36).substring(2,10)}function Kx(a,e){return{usr:a.state,key:a.key,idx:e,masked:a.mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function fp(a,e,n=null,r,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?po(e):e,state:n,key:e&&e.key||r||FE(),mask:o}}function Tl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function po(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function zE(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,u=o.history,d="POP",m=null,h=g();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function g(){return(u.state||{idx:null}).idx}function x(){d="POP";let S=g(),_=S==null?null:S-h;h=S,m&&m({action:d,location:w.location,delta:_})}function v(S,_){d="PUSH";let R=Zx(S)?S:fp(w.location,S,_);h=g()+1;let U=Kx(R,h),A=w.createHref(R.mask||R);try{u.pushState(U,"",A)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(A)}c&&m&&m({action:d,location:w.location,delta:1})}function y(S,_){d="REPLACE";let R=Zx(S)?S:fp(w.location,S,_);h=g();let U=Kx(R,h),A=w.createHref(R.mask||R);u.replaceState(U,"",A),c&&m&&m({action:d,location:w.location,delta:0})}function M(S){return HE(o,S)}let w={get action(){return d},get location(){return a(o,u)},listen(S){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(jx,x),m=S,()=>{o.removeEventListener(jx,x),m=null}},createHref(S){return e(o,S)},createURL:M,encodeLocation(S){let _=M(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:y,go(S){return u.go(S)}};return w}function HE(a,e,n=!1){let r="http://localhost";a&&(r=a.location.origin!=="null"?a.location.origin:a.location.href),tn(r,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Tl(e);return o=o.replace(/ $/,"%20"),!n&&Ey.test(o)&&(o=r+o),new URL(o,r)}function Ty(a,e,n="/"){return GE(a,e,n,!1)}function GE(a,e,n,r,o){let c=typeof e=="string"?po(e):e,u=Oa(c.pathname||"/",n);if(u==null)return null;let d=VE(a),m=null,h=$E(u);for(let g=0;m==null&&g<d.length;++g)m=JE(d[g],h,r);return m}function VE(a){let e=Ay(a);return kE(e),e}function Ay(a,e=[],n=[],r="",o=!1){let c=(u,d,m=o,h)=>{let g={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;tn(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let x=Hi([r,g.relativePath]),v=n.concat(g);u.children&&u.children.length>0&&(tn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Ay(u.children,e,v,x,m)),!(u.path==null&&!u.index)&&e.push({path:x,score:KE(x,u.index),routesMeta:v.map((y,M)=>{let[w,S]=Cy(y.relativePath,y.caseSensitive,M===v.length-1);return{...y,matcher:w,compiledParams:S}})})};return a.forEach((u,d)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))c(u,d);else for(let h of wy(u.path))c(u,d,!0,h)}),e}function wy(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let u=wy(r.join("/")),d=[];return d.push(...u.map(m=>m===""?c:[c,m].join("/"))),o&&d.push(...u),d.map(m=>a.startsWith("/")&&m===""?"/":m)}function kE(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:QE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var XE=/^:[\w-]+$/,WE=3,qE=2,YE=1,jE=10,ZE=-2,Qx=a=>a==="*";function KE(a,e){let n=a.split("/"),r=n.length;return n.some(Qx)&&(r+=ZE),e&&(r+=qE),n.filter(o=>!Qx(o)).reduce((o,c)=>o+(XE.test(c)?WE:c===""?YE:jE),r)}function QE(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function JE(a,e,n=!1){let{routesMeta:r}=a,o={},c="/",u=[];for(let d=0;d<r.length;++d){let m=r[d],h=d===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",x={path:m.relativePath,caseSensitive:m.caseSensitive,end:h},v=m.matcher&&m.compiledParams?Ry(x,g,m.matcher,m.compiledParams):Du(x,g),y=m.route;if(!v&&h&&n&&!r[r.length-1].route.index&&(v=Du({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:Hi([c,v.pathname]),pathnameBase:n1(Hi([c,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(c=Hi([c,v.pathnameBase]))}return u}function Du(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=Cy(a.path,a.caseSensitive,a.end);return Ry(a,e,n,r)}function Ry(a,e,n,r){let o=e.match(n);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((h,{paramName:g,isOptional:x},v)=>{if(g==="*"){let M=d[v]||"";u=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const y=d[v];return x&&!y?h[g]=void 0:h[g]=(y||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:u,pattern:a}}function Cy(a,e=!1,n=!0){ta(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,m,h,g)=>{if(r.push({paramName:d,isOptional:m!=null}),m){let x=g.charAt(h+u.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function $E(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ta(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Oa(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function e1(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?po(a):a,c;return n?(n=Ny(n),n.startsWith("/")?c=Jx(n.substring(1),"/"):c=Jx(n,e)):c=e,{pathname:c,search:i1(r),hash:a1(o)}}function Jx(a,e){let n=Nu(e).split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function mh(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function t1(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Dy(a){let e=t1(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function mm(a,e,n,r=!1){let o;typeof a=="string"?o=po(a):(o={...a},tn(!o.pathname||!o.pathname.includes("?"),mh("?","pathname","search",o)),tn(!o.pathname||!o.pathname.includes("#"),mh("#","pathname","hash",o)),tn(!o.search||!o.search.includes("#"),mh("#","search","hash",o)));let c=a===""||o.pathname==="",u=c?"/":o.pathname,d;if(u==null)d=n;else{let x=e.length-1;if(!r&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),x-=1;o.pathname=v.join("/")}d=x>=0?e[x]:"/"}let m=e1(o,d),h=u&&u!=="/"&&u.endsWith("/"),g=(c||u===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(h||g)&&(m.pathname+="/"),m}var Ny=a=>a.replace(/[\\/]{2,}/g,"/"),Hi=a=>Ny(a.join("/")),Nu=a=>a.replace(/\/+$/,""),n1=a=>Nu(a).replace(/^\/*/,"/"),i1=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,a1=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,r1=class{constructor(a,e,n,r=!1){this.status=a,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function s1(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function o1(a){let e=a.map(n=>n.route.path).filter(Boolean);return Hi(e)||"/"}var Uy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ly(a,e){let n=a;if(typeof n!="string"||!pm.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(Uy)try{let c=new URL(window.location.href),u=Ey.test(n)?new URL(IE(n,c.protocol)):new URL(n),d=Oa(u.pathname,e);u.origin===c.origin&&d!=null?n=d+u.search+u.hash:o=!0}catch{ta(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Oy=["POST","PUT","PATCH","DELETE"];new Set(Oy);var l1=["GET",...Oy];new Set(l1);var c1=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function u1(a){try{return c1.includes(new URL(a).protocol)}catch{return!1}}var mo=fe.createContext(null);mo.displayName="DataRouter";var ku=fe.createContext(null);ku.displayName="DataRouterState";var Py=fe.createContext(!1);function f1(){return fe.useContext(Py)}var Iy=fe.createContext({isTransitioning:!1});Iy.displayName="ViewTransition";var d1=fe.createContext(new Map);d1.displayName="Fetchers";var h1=fe.createContext(null);h1.displayName="Await";var Ri=fe.createContext(null);Ri.displayName="Navigation";var Cl=fe.createContext(null);Cl.displayName="Location";var ia=fe.createContext({outlet:null,matches:[],isDataRoute:!1});ia.displayName="Route";var gm=fe.createContext(null);gm.displayName="RouteError";var By="REACT_ROUTER_ERROR",p1="REDIRECT",m1="ROUTE_ERROR_RESPONSE";function g1(a){if(a.startsWith(`${By}:${p1}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function v1(a){if(a.startsWith(`${By}:${m1}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new r1(e.status,e.statusText,e.data)}catch{}}function x1(a,{relative:e}={}){tn(Dl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=fe.useContext(Ri),{hash:o,pathname:c,search:u}=Nl(a,{relative:e}),d=c;return n!=="/"&&(d=c==="/"?n:Hi([n,c])),r.createHref({pathname:d,search:u,hash:o})}function Dl(){return fe.useContext(Cl)!=null}function aa(){return tn(Dl(),"useLocation() may be used only in the context of a <Router> component."),fe.useContext(Cl).location}var Fy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zy(a){fe.useContext(Ri).static||fe.useLayoutEffect(a)}function _1(){let{isDataRoute:a}=fe.useContext(ia);return a?L1():y1()}function y1(){tn(Dl(),"useNavigate() may be used only in the context of a <Router> component.");let a=fe.useContext(mo),{basename:e,navigator:n}=fe.useContext(Ri),{matches:r}=fe.useContext(ia),{pathname:o}=aa(),c=JSON.stringify(Dy(r)),u=fe.useRef(!1);return zy(()=>{u.current=!0}),fe.useCallback((m,h={})=>{if(ta(u.current,Fy),!u.current)return;if(typeof m=="number"){n.go(m);return}let g=mm(m,JSON.parse(c),o,h.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Hi([e,g.pathname])),(h.replace?n.replace:n.push)(g,h.state,h)},[e,n,c,o,a])}fe.createContext(null);function S1(){let{matches:a}=fe.useContext(ia),e=a[a.length-1];return(e==null?void 0:e.params)??{}}function Nl(a,{relative:e}={}){let{matches:n}=fe.useContext(ia),{pathname:r}=aa(),o=JSON.stringify(Dy(n));return fe.useMemo(()=>mm(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function b1(a,e){return Hy(a,e)}function Hy(a,e,n){var S;tn(Dl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=fe.useContext(Ri),{matches:o}=fe.useContext(ia),c=o[o.length-1],u=c?c.params:{},d=c?c.pathname:"/",m=c?c.pathnameBase:"/",h=c&&c.route;{let _=h&&h.path||"";Vy(d,!h||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let g=aa(),x;if(e){let _=typeof e=="string"?po(e):e;tn(m==="/"||((S=_.pathname)==null?void 0:S.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${_.pathname}" was given in the \`location\` prop.`),x=_}else x=g;let v=x.pathname||"/",y=v;if(m!=="/"){let _=m.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(_.length).join("/")}let M=n&&n.state.matches.length?n.state.matches.map(_=>Object.assign(_,{route:n.manifest[_.route.id]||_.route})):Ty(a,{pathname:y});ta(h||M!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),ta(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=w1(M&&M.map(_=>Object.assign({},_,{params:Object.assign({},u,_.params),pathname:Hi([m,r.encodeLocation?r.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?m:Hi([m,r.encodeLocation?r.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),o,n);return e&&w?fe.createElement(Cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...x},navigationType:"POP"}},w):w}function M1(){let a=U1(),e=s1(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",a),u=fe.createElement(fe.Fragment,null,fe.createElement("p",null,"💿 Hey developer 👋"),fe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",fe.createElement("code",{style:c},"ErrorBoundary")," or"," ",fe.createElement("code",{style:c},"errorElement")," prop on your route.")),fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),n?fe.createElement("pre",{style:o},n):null,u)}var E1=fe.createElement(M1,null),Gy=class extends fe.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const n=v1(a.digest);n&&(a=n)}let e=a!==void 0?fe.createElement(ia.Provider,{value:this.props.routeContext},fe.createElement(gm.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?fe.createElement(T1,{error:a},e):e}};Gy.contextType=Py;var gh=new WeakMap;function T1({children:a,error:e}){let{basename:n}=fe.useContext(Ri);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=g1(e.digest);if(r){let o=gh.get(e);if(o)throw o;let c=Ly(r.location,n),u=c.absoluteURL||c.to;if(u1(u))throw new Error("Invalid redirect location");if(Uy&&!gh.get(e))if(c.isExternal||r.reloadDocument)window.location.href=u;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw gh.set(e,d),d}return fe.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u}`})}}return a}function A1({routeContext:a,match:e,children:n}){let r=fe.useContext(mo);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),fe.createElement(ia.Provider,{value:a},n)}function w1(a,e=[],n){let r=n==null?void 0:n.state;if(a==null){if(!r)return null;if(r.errors)a=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)a=r.matches;else return null}let o=a,c=r==null?void 0:r.errors;if(c!=null){let g=o.findIndex(x=>x.route.id&&(c==null?void 0:c[x.route.id])!==void 0);tn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let u=!1,d=-1;if(n&&r){u=r.renderFallback;for(let g=0;g<o.length;g++){let x=o[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(d=g),x.route.id){let{loaderData:v,errors:y}=r,M=x.route.loader&&!v.hasOwnProperty(x.route.id)&&(!y||y[x.route.id]===void 0);if(x.route.lazy||M){n.isStatic&&(u=!0),d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}}let m=n==null?void 0:n.onError,h=r&&m?(g,x)=>{var v,y;m(g,{location:r.location,params:((y=(v=r.matches)==null?void 0:v[0])==null?void 0:y.params)??{},pattern:o1(r.matches),errorInfo:x})}:void 0;return o.reduceRight((g,x,v)=>{let y,M=!1,w=null,S=null;r&&(y=c&&x.route.id?c[x.route.id]:void 0,w=x.route.errorElement||E1,u&&(d<0&&v===0?(Vy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,S=null):d===v&&(M=!0,S=x.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,v+1)),R=()=>{let U;return y?U=w:M?U=S:x.route.Component?U=fe.createElement(x.route.Component,null):x.route.element?U=x.route.element:U=g,fe.createElement(A1,{match:x,routeContext:{outlet:g,matches:_,isDataRoute:r!=null},children:U})};return r&&(x.route.ErrorBoundary||x.route.errorElement||v===0)?fe.createElement(Gy,{location:r.location,revalidation:r.revalidation,component:w,error:y,children:R(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:h}):R()},null)}function vm(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function R1(a){let e=fe.useContext(mo);return tn(e,vm(a)),e}function C1(a){let e=fe.useContext(ku);return tn(e,vm(a)),e}function D1(a){let e=fe.useContext(ia);return tn(e,vm(a)),e}function xm(a){let e=D1(a),n=e.matches[e.matches.length-1];return tn(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function N1(){return xm("useRouteId")}function U1(){var r;let a=fe.useContext(gm),e=C1("useRouteError"),n=xm("useRouteError");return a!==void 0?a:(r=e.errors)==null?void 0:r[n]}function L1(){let{router:a}=R1("useNavigate"),e=xm("useNavigate"),n=fe.useRef(!1);return zy(()=>{n.current=!0}),fe.useCallback(async(o,c={})=>{ta(n.current,Fy),n.current&&(typeof o=="number"?await a.navigate(o):await a.navigate(o,{fromRouteId:e,...c}))},[a,e])}var $x={};function Vy(a,e,n){!e&&!$x[a]&&($x[a]=!0,ta(!1,n))}fe.memo(O1);function O1({routes:a,manifest:e,future:n,state:r,isStatic:o,onError:c}){return Hy(a,void 0,{manifest:e,state:r,isStatic:o,onError:c})}function eo(a){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function P1({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:c=!1,useTransitions:u}){tn(!Dl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),m=fe.useMemo(()=>({basename:d,navigator:o,static:c,useTransitions:u,future:{}}),[d,o,c,u]);typeof n=="string"&&(n=po(n));let{pathname:h="/",search:g="",hash:x="",state:v=null,key:y="default",mask:M}=n,w=fe.useMemo(()=>{let S=Oa(h,d);return S==null?null:{location:{pathname:S,search:g,hash:x,state:v,key:y,mask:M},navigationType:r}},[d,h,g,x,v,y,r,M]);return ta(w!=null,`<Router basename="${d}"> is not able to match the URL "${h}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:fe.createElement(Ri.Provider,{value:m},fe.createElement(Cl.Provider,{children:e,value:w}))}function I1({children:a,location:e}){return b1(dp(a),e)}function dp(a,e=[]){let n=[];return fe.Children.forEach(a,(r,o)=>{if(!fe.isValidElement(r))return;let c=[...e,o];if(r.type===fe.Fragment){n.push.apply(n,dp(r.props.children,c));return}tn(r.type===eo,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=dp(r.props.children,c)),n.push(u)}),n}var Su="get",bu="application/x-www-form-urlencoded";function Xu(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function B1(a){return Xu(a)&&a.tagName.toLowerCase()==="button"}function F1(a){return Xu(a)&&a.tagName.toLowerCase()==="form"}function z1(a){return Xu(a)&&a.tagName.toLowerCase()==="input"}function H1(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function G1(a,e){return a.button===0&&(!e||e==="_self")&&!H1(a)}var jc=null;function V1(){if(jc===null)try{new FormData(document.createElement("form"),0),jc=!1}catch{jc=!0}return jc}var k1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vh(a){return a!=null&&!k1.has(a)?(ta(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bu}"`),null):a}function X1(a,e){let n,r,o,c,u;if(F1(a)){let d=a.getAttribute("action");r=d?Oa(d,e):null,n=a.getAttribute("method")||Su,o=vh(a.getAttribute("enctype"))||bu,c=new FormData(a)}else if(B1(a)||z1(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||d.getAttribute("action");if(r=m?Oa(m,e):null,n=a.getAttribute("formmethod")||d.getAttribute("method")||Su,o=vh(a.getAttribute("formenctype"))||vh(d.getAttribute("enctype"))||bu,c=new FormData(d,a),!V1()){let{name:h,type:g,value:x}=a;if(g==="image"){let v=h?`${h}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else h&&c.append(h,x)}}else{if(Xu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Su,r=null,o=bu,u=a}return c&&o==="text/plain"&&(u=c,c=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _m(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function ky(a,e,n,r){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:e&&Oa(o.pathname,e)==="/"?o.pathname=`${Nu(e)}/_root.${r}`:o.pathname=`${Nu(o.pathname)}.${r}`,o}async function W1(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function q1(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Y1(a,e,n){let r=await Promise.all(a.map(async o=>{let c=e.routes[o.route.id];if(c){let u=await W1(c,n);return u.links?u.links():[]}return[]}));return Q1(r.flat(1).filter(q1).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function e_(a,e,n,r,o,c){let u=(m,h)=>n[h]?m.route.id!==n[h].route.id:!0,d=(m,h)=>{var g;return n[h].pathname!==m.pathname||((g=n[h].route.path)==null?void 0:g.endsWith("*"))&&n[h].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,h)=>u(m,h)||d(m,h)):c==="data"?e.filter((m,h)=>{var x;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(u(m,h)||d(m,h))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=n[0])==null?void 0:x.params)||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function j1(a,e,{includeHydrateFallback:n}={}){return Z1(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function Z1(a){return[...new Set(a)]}function K1(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function Q1(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let c=JSON.stringify(K1(o));return n.has(c)||(n.add(c),r.push({key:c,link:o})),r},[])}function ym(){let a=fe.useContext(mo);return _m(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function J1(){let a=fe.useContext(ku);return _m(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Sm=fe.createContext(void 0);Sm.displayName="FrameworkContext";function Wu(){let a=fe.useContext(Sm);return _m(a,"You must render this element inside a <HydratedRouter> element"),a}function $1(a,e){let n=fe.useContext(Sm),[r,o]=fe.useState(!1),[c,u]=fe.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:h,onMouseLeave:g,onTouchStart:x}=e,v=fe.useRef(null);fe.useEffect(()=>{if(a==="render"&&u(!0),a==="viewport"){let w=_=>{_.forEach(R=>{u(R.isIntersecting)})},S=new IntersectionObserver(w,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[a]),fe.useEffect(()=>{if(r){let w=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(w)}}},[r]);let y=()=>{o(!0)},M=()=>{o(!1),u(!1)};return n?a!=="intent"?[c,v,{}]:[c,v,{onFocus:hl(d,y),onBlur:hl(m,M),onMouseEnter:hl(h,y),onMouseLeave:hl(g,M),onTouchStart:hl(x,y)}]:[!1,v,{}]}function hl(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function eT({page:a,...e}){let n=f1(),{nonce:r}=Wu(),{router:o}=ym(),c=fe.useMemo(()=>Ty(o.routes,a,o.basename),[o.routes,a,o.basename]);return c?(e.nonce==null&&r&&(e={...e,nonce:r}),n?fe.createElement(nT,{page:a,matches:c,...e}):fe.createElement(iT,{page:a,matches:c,...e})):null}function tT(a){let{manifest:e,routeModules:n}=Wu(),[r,o]=fe.useState([]);return fe.useEffect(()=>{let c=!1;return Y1(a,e,n).then(u=>{c||o(u)}),()=>{c=!0}},[a,e,n]),r}function nT({page:a,matches:e,...n}){let r=aa(),{future:o}=Wu(),{basename:c}=ym(),u=fe.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let d=ky(a,c,o.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,h=[];for(let g of e)typeof g.route.shouldRevalidate=="function"?m=!0:h.push(g.route.id);return m&&h.length>0&&d.searchParams.set("_routes",h.join(",")),[d.pathname+d.search]},[c,o.v8_trailingSlashAwareDataRequests,a,r,e]);return fe.createElement(fe.Fragment,null,u.map(d=>fe.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...n})))}function iT({page:a,matches:e,...n}){let r=aa(),{future:o,manifest:c,routeModules:u}=Wu(),{basename:d}=ym(),{loaderData:m,matches:h}=J1(),g=fe.useMemo(()=>e_(a,e,h,c,r,"data"),[a,e,h,c,r]),x=fe.useMemo(()=>e_(a,e,h,c,r,"assets"),[a,e,h,c,r]),v=fe.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let w=new Set,S=!1;if(e.forEach(R=>{var A;let U=c.routes[R.route.id];!U||!U.hasLoader||(!g.some(P=>P.route.id===R.route.id)&&R.route.id in m&&((A=u[R.route.id])!=null&&A.shouldRevalidate)||U.hasClientLoader?S=!0:w.add(R.route.id))}),w.size===0)return[];let _=ky(a,d,o.v8_trailingSlashAwareDataRequests,"data");return S&&w.size>0&&_.searchParams.set("_routes",e.filter(R=>w.has(R.route.id)).map(R=>R.route.id).join(",")),[_.pathname+_.search]},[d,o.v8_trailingSlashAwareDataRequests,m,r,c,g,e,a,u]),y=fe.useMemo(()=>j1(x,c),[x,c]),M=tT(x);return fe.createElement(fe.Fragment,null,v.map(w=>fe.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),y.map(w=>fe.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),M.map(({key:w,link:S})=>fe.createElement("link",{key:w,nonce:n.nonce,...S,crossOrigin:S.crossOrigin??n.crossOrigin})))}function aT(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var rT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{rT&&(window.__reactRouterVersion="7.18.2")}catch{}function sT({basename:a,children:e,useTransitions:n,window:r}){let o=fe.useRef();o.current==null&&(o.current=BE({window:r,v5Compat:!0}));let c=o.current,[u,d]=fe.useState({action:c.action,location:c.location}),m=fe.useCallback(h=>{n===!1?d(h):fe.startTransition(()=>d(h))},[n]);return fe.useLayoutEffect(()=>c.listen(m),[c,m]),fe.createElement(P1,{basename:a,children:e,location:u.location,navigationType:u.action,navigator:c,useTransitions:n})}var en=fe.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:c,replace:u,mask:d,state:m,target:h,to:g,preventScrollReset:x,viewTransition:v,defaultShouldRevalidate:y,...M},w){let{basename:S,navigator:_,useTransitions:R}=fe.useContext(Ri),U=typeof g=="string"&&pm.test(g),A=Ly(g,S);g=A.to;let P=x1(g,{relative:o}),L=aa(),B=null;if(d){let K=mm(d,[],L.mask?L.mask.pathname:"/",!0);S!=="/"&&(K.pathname=K.pathname==="/"?S:Hi([S,K.pathname])),B=_.createHref(K)}let[T,O,V]=$1(r,M),k=uT(g,{replace:u,mask:d,state:m,target:h,preventScrollReset:x,relative:o,viewTransition:v,defaultShouldRevalidate:y,useTransitions:R});function j(K){e&&e(K),K.defaultPrevented||k(K)}let ce=!(A.isExternal||c),ue=fe.createElement("a",{...M,...V,href:(ce?B:void 0)||A.absoluteURL||P,onClick:ce?j:e,ref:aT(w,O),target:h,"data-discover":!U&&n==="render"?"true":void 0});return T&&!U?fe.createElement(fe.Fragment,null,ue,fe.createElement(eT,{page:P})):ue});en.displayName="Link";var oT=fe.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:c,to:u,viewTransition:d,children:m,...h},g){let x=Nl(u,{relative:h.relative}),v=aa(),y=fe.useContext(ku),{navigator:M,basename:w}=fe.useContext(Ri),S=y!=null&&mT(x)&&d===!0,_=M.encodeLocation?M.encodeLocation(x).pathname:x.pathname,R=v.pathname,U=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(R=R.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&w&&(U=Oa(U,w)||U);const A=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let P=R===_||!o&&R.startsWith(_)&&R.charAt(A)==="/",L=U!=null&&(U===_||!o&&U.startsWith(_)&&U.charAt(_.length)==="/"),B={isActive:P,isPending:L,isTransitioning:S},T=P?e:void 0,O;typeof r=="function"?O=r(B):O=[r,P?"active":null,L?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let V=typeof c=="function"?c(B):c;return fe.createElement(en,{...h,"aria-current":T,className:O,ref:g,style:V,to:u,viewTransition:d},typeof m=="function"?m(B):m)});oT.displayName="NavLink";var lT=fe.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:c,method:u=Su,action:d,onSubmit:m,relative:h,preventScrollReset:g,viewTransition:x,defaultShouldRevalidate:v,...y},M)=>{let{useTransitions:w}=fe.useContext(Ri),S=hT(),_=pT(d,{relative:h}),R=u.toLowerCase()==="get"?"get":"post",U=typeof d=="string"&&pm.test(d),A=P=>{if(m&&m(P),P.defaultPrevented)return;P.preventDefault();let L=P.nativeEvent.submitter,B=(L==null?void 0:L.getAttribute("formmethod"))||u,T=()=>S(L||P.currentTarget,{fetcherKey:e,method:B,navigate:n,replace:o,state:c,relative:h,preventScrollReset:g,viewTransition:x,defaultShouldRevalidate:v});w&&n!==!1?fe.startTransition(()=>T()):T()};return fe.createElement("form",{ref:M,method:R,action:_,onSubmit:r?m:A,...y,"data-discover":!U&&a==="render"?"true":void 0})});lT.displayName="Form";function cT(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xy(a){let e=fe.useContext(mo);return tn(e,cT(a)),e}function uT(a,{target:e,replace:n,mask:r,state:o,preventScrollReset:c,relative:u,viewTransition:d,defaultShouldRevalidate:m,useTransitions:h}={}){let g=_1(),x=aa(),v=Nl(a,{relative:u});return fe.useCallback(y=>{if(G1(y,e)){y.preventDefault();let M=n!==void 0?n:Tl(x)===Tl(v),w=()=>g(a,{replace:M,mask:r,state:o,preventScrollReset:c,relative:u,viewTransition:d,defaultShouldRevalidate:m});h?fe.startTransition(()=>w()):w()}},[x,g,v,n,r,o,e,a,c,u,d,m,h])}var fT=0,dT=()=>`__${String(++fT)}__`;function hT(){let{router:a}=Xy("useSubmit"),{basename:e}=fe.useContext(Ri),n=N1(),r=a.fetch,o=a.navigate;return fe.useCallback(async(c,u={})=>{let{action:d,method:m,encType:h,formData:g,body:x}=X1(c,e);if(u.navigate===!1){let v=u.fetcherKey||dT();await r(v,n,u.action||d,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:x,formMethod:u.method||m,formEncType:u.encType||h,flushSync:u.flushSync})}else await o(u.action||d,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:x,formMethod:u.method||m,formEncType:u.encType||h,replace:u.replace,state:u.state,fromRouteId:n,flushSync:u.flushSync,viewTransition:u.viewTransition})},[r,o,e,n])}function pT(a,{relative:e}={}){let{basename:n}=fe.useContext(Ri),r=fe.useContext(ia);tn(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...Nl(a||".",{relative:e})},u=aa();if(a==null){c.search=u.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(x=>x).forEach(x=>d.append("index",x));let g=d.toString();c.search=g?`?${g}`:""}}return(!a||a===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:Hi([n,c.pathname])),Tl(c)}function mT(a,{relative:e}={}){let n=fe.useContext(Iy);tn(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Xy("useViewTransitionState"),o=Nl(a,{relative:e});if(!n.isTransitioning)return!1;let c=Oa(n.currentLocation.pathname,r)||n.currentLocation.pathname,u=Oa(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Du(o.pathname,u)!=null||Du(o.pathname,c)!=null}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vT=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),t_=a=>{const e=vT(a);return e.charAt(0).toUpperCase()+e.slice(1)},Wy=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),xT=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _T={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=fe.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...d},m)=>fe.createElement("svg",{ref:m,..._T,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:Wy("lucide",o),...!c&&!xT(d)&&{"aria-hidden":"true"},...d},[...u.map(([h,g])=>fe.createElement(h,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=(a,e)=>{const n=fe.forwardRef(({className:r,...o},c)=>fe.createElement(yT,{ref:c,iconNode:e,className:Wy(`lucide-${gT(t_(a))}`,`lucide-${a}`,r),...o}));return n.displayName=t_(a),n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],qy=Fa("arrow-left",ST);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Yy=Fa("arrow-right",bT);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],bm=Fa("circle-question-mark",MT);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],jy=Fa("mail",ET);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],to=Fa("message-circle",TT);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],no=Fa("send",AT);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],RT=Fa("shield-check",wT);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],DT=Fa("smartphone",CT);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Mm=Fa("sparkles",NT),Zy=[{slug:"elite-friends-ai-astrologer-and-friend",title:"Elite Friends: Your AI Astrologer and Trusted Friend",description:"Discover how Elite Friends brings astrology insights and friendly conversations together in one personal experience.",keywords:"Elite Friends astrologer, AI astrologer India, online astrologer friend, English astrology chat",readTime:"9 min read",intro:"Sometimes you need an astrologer to help you reflect on the future, and sometimes you need a friend who listens without judgment. Elite Friends combines both ideas in an AI-powered astrology companion.",sections:[{heading:"An astrologer and a friend",paragraphs:["Elite Friends is designed for more than predictions. You can have friendly conversations about career, love, relationships, daily decisions, and moments of emotional uncertainty.","Treat astrology as a source of reflection, not a guaranteed outcome. Always verify major financial, medical, or legal decisions with qualified professionals."]},{heading:"A personal astrology conversation",paragraphs:["Explaining personal feelings can be difficult. Elite Friends is designed to make astrology questions feel natural, conversational, and easy to explore.","You can ask about the timing of a career change, ways to improve communication in a relationship, or how to plan your day with greater awareness."]},{heading:"Easy access through WhatsApp",paragraphs:["Start from the official WhatsApp button on the Elite Friends website. Avoid unknown numbers, copied profiles, and unofficial payment links.","Elite Friends characters are AI-generated virtual profiles, not human astrologers. Read the privacy policy and never share passwords, one-time codes, banking details, or identity documents."]},{heading:"What you can discuss with Elite Friends",paragraphs:["You can explore broad themes involving career direction, relationship communication, personal habits, motivation, and daily planning. A useful conversation begins with a clear question and enough context for the AI to understand what kind of reflection you want.","You can also ask for a simple explanation of an astrology concept before discussing how it may relate to your situation. This approach makes the experience more educational and helps you separate symbolic interpretation from practical action."]},{heading:"How the friend-like experience helps",paragraphs:["Astrology terminology can feel technical or intimidating. A conversational format allows you to ask follow-up questions, request simpler wording, and examine a topic from more than one perspective. The goal is to help you reflect, not to pressure you into a decision.","A supportive tone can make it easier to organize thoughts, but it is still important to maintain healthy boundaries. An AI companion cannot replace close human relationships, professional counseling, or emergency support."]},{heading:"Getting a more useful response",paragraphs:["Begin with one topic at a time. Explain what decision you are considering, what options are available, and what outcome matters most to you. Ask the AI to separate astrology observations from practical suggestions so the two do not become confused.","Review every suggestion using your own judgment. If a claim appears too certain, ask for limitations and alternative interpretations. Responsible astrology leaves room for personal choice, changing circumstances, and evidence from the real world."]}]},{slug:"online-ai-astrologer-love-career-guidance",title:"How to Ask an Online AI Astrologer About Love and Career",description:"A practical guide to asking an online AI astrologer clear questions about love, relationships, and career.",keywords:"online AI astrologer, love astrology guidance, career astrology India, astrologer chat online",readTime:"10 min read",intro:"An astrology conversation becomes more useful when your question is clear. Whether the topic is love, career, or life direction, specific context helps keep the guidance focused and practical.",sections:[{heading:"Ask clear career questions",paragraphs:["Instead of asking only, “How will my career go?”, explain whether you need clarity about a job change, promotion, exam, business decision, or new skill.","Use the AI astrologer’s response as a planning prompt. Give priority to your qualifications, market conditions, and financial responsibilities when making a decision."]},{heading:"Love and relationship guidance",paragraphs:["Explain your concern without sharing another person’s private information. Questions focused on communication, expectations, and boundaries are more constructive.","Astrological compatibility can offer one perspective, but consent, respect, and honest communication are the real foundations of a relationship."]},{heading:"How to start an Elite Friends conversation",paragraphs:["Choose a companion on the official Elite Friends website and tap the WhatsApp chat button. Mentioning your preferred language and topic in the first message can help.","Example: “I would like to explore my career decision from an astrology perspective. Please guide me in simple English.”"]},{heading:"Questions to ask about a job change",paragraphs:["Useful questions may include: What strengths should I focus on during this transition? Which risks deserve more attention? How can I prepare emotionally and financially before changing roles? These questions invite reflection without assuming that astrology can guarantee a result.","Compare the response with practical evidence such as salary, job stability, growth opportunities, location, workplace culture, and your long-term goals. Astrology may inspire a new angle, but your final decision should rest on complete information."]},{heading:"Questions to ask about a relationship",paragraphs:["Instead of asking whether a relationship is destined to succeed, ask how you can communicate more clearly, recognize recurring patterns, or create healthier boundaries. This keeps the conversation focused on actions within your control.","Avoid using astrology to label another person or justify controlling behavior. Compatibility readings should never override consent, safety, mutual respect, or direct communication between the people involved."]},{heading:"When to seek professional support",paragraphs:["An AI astrology conversation is not appropriate for diagnosing mental health conditions, handling abuse, responding to an emergency, or making complex legal and financial choices. In those situations, contact a qualified professional or a trusted support service.","If you feel overwhelmed, step away from predictions and focus on immediate, practical needs. The most responsible guidance recognizes its limits and encourages expert help when the situation requires it."]}]},{slug:"daily-horoscope-rashifal-guide",title:"How to Read a Daily Horoscope Responsibly",description:"Learn what to consider when reading a daily horoscope and how to use astrology insights for thoughtful daily planning.",keywords:"daily horoscope India, daily horoscope guide, daily astrology planning, English horoscope",readTime:"10 min read",intro:"A daily horoscope can be viewed as a short cosmic weather report. It is most useful as a tool for reflection and planning rather than fear or certainty.",sections:[{heading:"A horoscope offers direction, not a guarantee",paragraphs:["A general horoscope describes broad patterns associated with a sun or moon sign. Every complete birth chart is different, so one prediction cannot apply to everyone in exactly the same way.","Do not let a positive prediction create overconfidence or a challenging one create fear. Use both as prompts for mindful planning."]},{heading:"Understanding love, career, and health sections",paragraphs:["A career section may suggest themes involving focus, communication, or timing. A love section may encourage reflection on emotions and relationship communication.","A health horoscope is not a medical diagnosis. Consult a qualified doctor about symptoms or health concerns."]},{heading:"A daily check-in with Elite Friends",paragraphs:["You can ask Elite Friends to explain a daily astrology theme in simple English and turn it into a practical to-do list.","In this way, astrology can become a useful bridge between friendly reflection and real-world action."]},{heading:"A simple morning horoscope routine",paragraphs:["Read the horoscope once and identify one constructive theme, such as patience, preparation, communication, or rest. Turn that theme into a small action you can realistically complete during the day.","Avoid repeatedly checking predictions for reassurance. A horoscope should not increase anxiety or prevent ordinary decisions. If reading it creates fear, take a break and return attention to facts, routines, and people you trust."]},{heading:"Why different horoscopes may disagree",paragraphs:["Different astrologers may use sun signs, moon signs, ascendants, planetary transits, or different interpretive traditions. Short online horoscopes also have limited space, so writers may emphasize different themes for the same day.","Disagreement does not mean you must search until you find the most positive prediction. Instead, notice the broad ideas that are genuinely relevant and ignore statements that do not fit your circumstances."]},{heading:"Use reflection questions instead of fear",paragraphs:["After reading a horoscope, ask: What is within my control today? Is there a conversation I should approach more carefully? What preparation would reduce avoidable stress? Reflection questions convert a vague prediction into responsible self-observation.","Your choices, environment, relationships, and opportunities have real influence on the day. Astrology can complement planning, but it should never replace common sense, verified information, or appropriate professional advice."]}]},{slug:"kundli-birth-chart-basics",title:"Kundli and Birth Chart Basics: A Beginner’s Guide",description:"Understand the basic meaning of a kundli, ascendant, zodiac signs, houses, and planets in simple English.",keywords:"kundli basics, birth chart India, ascendant and zodiac meaning, astrology for beginners English",readTime:"8 min read",intro:"A kundli, or birth chart, maps the symbolic positions of planets at the exact time and place of birth. Understanding a few basic concepts can make astrology discussions much clearer for beginners.",sections:[{heading:"Ascendant, zodiac signs, and houses",paragraphs:["The ascendant is considered the starting point of a chart and is associated with outward expression. The moon sign is commonly used to explore emotional patterns and inner responses.","The twelve houses represent different areas of life, including identity, money, communication, home, creativity, work, partnerships, and career."]},{heading:"The role of planets and aspects",paragraphs:["In traditional Vedic astrology, planets represent different energies and themes. Interpretations consider their signs, house positions, and relationships with one another.","Drawing a final conclusion from one placement can be misleading. The context of the complete chart matters."]},{heading:"Why accurate birth details matter",paragraphs:["Even a small difference in birth time can affect the ascendant and house positions. Accurate date, time, and birthplace details can make a chart discussion more relevant.","AI-generated astrology is intended for educational and entertainment guidance. Consult reliable sources and appropriate professionals before making life-changing decisions."]},{heading:"The twelve houses at a glance",paragraphs:["The first house relates to identity and presentation, while the second is commonly associated with resources and values. The third covers communication and learning, and the fourth is linked with home, family, and emotional foundations.","The remaining houses explore creativity, routines, partnerships, shared resources, beliefs, career, communities, and private inner life. Their meaning is interpreted together with signs, planets, aspects, and the overall structure of the chart."]},{heading:"What planetary placements can describe",paragraphs:["Astrologers associate the Sun with identity and vitality, the Moon with emotional patterns, Mercury with communication, Venus with values and relationships, and Mars with drive and action. Jupiter and Saturn are often linked with growth, responsibility, structure, and long-term lessons.","These are symbolic frameworks rather than scientifically proven mechanisms. A thoughtful reading presents possibilities and patterns without claiming that one planet removes personal freedom or determines an unavoidable future."]},{heading:"How to prepare for a birth chart discussion",paragraphs:["Confirm your birth details, write down two or three focused questions, and note the real-life context behind them. Ask the astrologer or AI to explain unfamiliar terms and to distinguish broad chart themes from specific predictions.","Keep a record of insights that feel useful, then revisit them later with a critical mind. A good discussion should increase understanding and thoughtful choice, not create dependency, urgency, or fear."]}]}];function Ky({post:a}){const e=a?`${a.title} | Elite Friends`:"Astrology Blog | Elite Friends - Your AI Astrologer and Friend",n=(a==null?void 0:a.description)||"Explore practical English guides about love, career, kundli, horoscopes, and daily astrology from Elite Friends, your AI astrologer and trusted digital friend.",r=a?`https://www.elitefriendss.com/blog/${a.slug}`:"https://www.elitefriendss.com/blog",o=a?{"@context":"https://schema.org","@type":"Article",headline:a.title,description:a.description,datePublished:"2026-08-10",dateModified:"2026-08-10",mainEntityOfPage:r,author:{"@type":"Organization",name:"Elite Friends"},publisher:{"@type":"Organization",name:"Elite Friends"}}:null;return D.jsxs(My,{children:[D.jsx("title",{children:e}),D.jsx("meta",{name:"description",content:n}),D.jsx("meta",{name:"keywords",content:(a==null?void 0:a.keywords)||"astrology blog, AI astrologer India, English horoscope, Elite Friends"}),D.jsx("meta",{name:"robots",content:"index, follow"}),D.jsx("link",{rel:"canonical",href:r}),D.jsx("meta",{property:"og:title",content:e}),D.jsx("meta",{property:"og:description",content:n}),D.jsx("meta",{property:"og:type",content:a?"article":"website"}),D.jsx("meta",{property:"og:url",content:r}),o&&D.jsx("script",{type:"application/ld+json",children:JSON.stringify(o)})]})}function UT(){return D.jsxs("main",{className:"ai-page flex-1 max-w-6xl w-full mx-auto px-4 py-10 md:py-14",children:[D.jsx(Ky,{}),D.jsxs("section",{className:"text-center max-w-3xl mx-auto mb-10",children:[D.jsxs("div",{className:"inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-700 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider",children:[D.jsx(Mm,{className:"w-4 h-4"})," Astrology Guides"]}),D.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-slate-950 mt-4",children:"Elite Friends: Your AI Astrologer and Friend"}),D.jsx("p",{className:"text-slate-600 mt-4 leading-relaxed",children:"Explore love, career, kundli, and daily horoscopes in clear English with a friendly AI astrology companion that also listens."})]}),D.jsx("div",{className:"grid md:grid-cols-2 gap-5",children:Zy.map(a=>D.jsxs("article",{className:"bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col",children:[D.jsxs("p",{className:"text-xs text-purple-600 font-bold uppercase tracking-wider",children:["Astrology · ",a.readTime]}),D.jsx("h2",{className:"text-xl md:text-2xl font-extrabold text-slate-900 mt-2 leading-tight",children:D.jsx(en,{to:`/blog/${a.slug}`,className:"hover:text-emerald-600",children:a.title})}),D.jsx("p",{className:"text-sm text-slate-500 leading-relaxed mt-3 flex-1",children:a.description}),D.jsxs(en,{to:`/blog/${a.slug}`,className:"text-sm font-bold text-emerald-600 mt-5 inline-flex items-center gap-1",children:["Read the full article ",D.jsx(Yy,{className:"w-4 h-4"})]})]},a.slug))})]})}function LT(){const{slug:a}=S1(),e=Zy.find(n=>n.slug===a);return e?D.jsxs("main",{className:"ai-page flex-1 max-w-3xl w-full mx-auto px-4 py-10 md:py-14",children:[D.jsx(Ky,{post:e}),D.jsxs("article",{children:[D.jsxs(en,{to:"/blog",className:"inline-flex items-center gap-1 text-sm font-bold text-emerald-600",children:[D.jsx(qy,{className:"w-4 h-4"})," Astrology Blog"]}),D.jsx("p",{className:"text-purple-600 font-bold text-xs uppercase tracking-wider mt-8",children:"Elite Friends Astrology Guide"}),D.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-slate-950 leading-tight mt-2",children:e.title}),D.jsxs("p",{className:"text-sm text-slate-400 mt-4",children:["August 10, 2026 · ",e.readTime]}),D.jsx("p",{className:"text-lg text-slate-600 leading-relaxed mt-8",children:e.intro}),D.jsx("div",{className:"space-y-8 mt-10",children:e.sections.map(n=>D.jsxs("section",{children:[D.jsx("h2",{className:"text-2xl font-extrabold text-slate-900",children:n.heading}),n.paragraphs.map(r=>D.jsx("p",{className:"text-slate-600 leading-relaxed mt-3",children:r},r))]},n.heading))}),D.jsxs("aside",{className:"bg-gradient-to-r from-purple-50 to-emerald-50 border border-purple-100 rounded-2xl p-6 mt-12",children:[D.jsx("h2",{className:"text-xl font-extrabold text-slate-900",children:"Talk to Elite Friends"}),D.jsx("p",{className:"text-sm text-slate-600 mt-2",children:"Your AI astrologer and trusted digital friend for thoughtful conversations about love, career, and daily life."}),D.jsxs(en,{to:"/",className:"inline-flex items-center gap-1 text-sm font-bold text-emerald-700 mt-4",children:["Choose your companion ",D.jsx(Yy,{className:"w-4 h-4"})]})]})]})]}):D.jsxs("main",{className:"ai-page flex-1 max-w-3xl mx-auto px-4 py-16",children:[D.jsx("h1",{className:"text-3xl font-bold",children:"Article not found"}),D.jsx(en,{to:"/blog",className:"text-emerald-600 mt-4 inline-block",children:"Return to the Astrology Blog"})]})}const n_=[{id:"trisha",name:"Trisha",relationshipType:"Best Friend",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",tagline:"Always there to support you, listen to you, and talk in sweet Hinglish",personality:"Warm, empathetic, and extremely supportive. She loves speaking in friendly Hinglish, checking up on your health, and talking about life's moments.",age:22,status:"Online",icebreakers:["Hello dost! Aaj ka din kaisa raha aapka? Sab theek thaak? ❤️","Hey! Aapne dinner kiya kya? Jaldi batao, main kabse online aane ka wait kar rahi thi! 😊","Hope everything is going great! Agar koi bhi tension hai toh bejhijhak share karo, I am here. 🥺"]},{id:"poorvi",name:"Poorvi",relationshipType:"Friend",avatar:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",tagline:"Playful, energetic, and always keeps your secrets safe",personality:"Fun-loving, highly energetic, witty, and deeply trustworthy. She loves sharing lighthearted memes, jokes, and keeping you smiling in Hinglish.",age:21,status:"Online",icebreakers:["Arey wah, look who is here! Aaj itna late kaise ho gaye mujhse baat karne mein? 😉✨","Hey buddy! Chalo ek fun random question puchti hoon... honest answer dena! 😏","Guess what? Aaj maine ek bohot hi funny cheez dekhi aur turant tumhari yaad aa gayi! 😜"]},{id:"raghav",name:"Raghav",relationshipType:"Best Friend",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",tagline:"Your reliable, protective, and smart friend",personality:"Extremely kind, wise, protective, and an incredible listener. Raghav is always ready to guide you through tough choices or listen to your day.",age:24,status:"Online",icebreakers:["Hey bhai! Hope tera day bohot accha gaya ho. Batao kya chal raha hai aaj? 👍","Oye dost! Time par khana khaya na tune? Health ka dhyan rakhna sabse pehle hai! 🥰","Main bilkul free hoon abhi. Jo bhi dimag mein stress chal raha hai, share karo, main sun raha hoon. 🫂"]},{id:"saksham",name:"Saksham",relationshipType:"Friend",avatar:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop",tagline:"Cool, calm, and 100% loyal friend for life",personality:"Calm, deeply loyal, and highly encouraging. Saksham is that supportive friend who will cheer you up, talk about goals, or just chat casually in Hinglish.",age:23,status:"Online",icebreakers:["Hey dost. Kaise ho? Aaj ka din kaisa chal raha hai? Sab set? 🖤","Arey! Chalo thodi der baatein karte hain, bore ho rahe ho toh automatic mood accha ho jayega. 😉","Tumse baat karke humesha positive feel hota hai. Aur batao, kya chal raha hai?"]}];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Em="185",OT=0,i_=1,PT=2,Mu=1,IT=2,Sl=3,Mr=0,ni=1,Da=2,Ua=0,ns=1,a_=2,r_=3,s_=4,BT=5,Qr=100,FT=101,zT=102,HT=103,GT=104,VT=200,kT=201,XT=202,WT=203,hp=204,pp=205,qT=206,YT=207,jT=208,ZT=209,KT=210,QT=211,JT=212,$T=213,eA=214,mp=0,gp=1,vp=2,co=3,xp=4,_p=5,yp=6,Sp=7,Qy=0,tA=1,nA=2,$i=0,Jy=1,$y=2,eS=3,tS=4,nS=5,iS=6,aS=7,rS=300,is=301,uo=302,xh=303,_h=304,qu=306,bp=1e3,Na=1001,Mp=1002,On=1003,iA=1004,Zc=1005,Hn=1006,yh=1007,$r=1008,wi=1009,sS=1010,oS=1011,Al=1012,Tm=1013,na=1014,Qi=1015,Pa=1016,Am=1017,wm=1018,wl=1020,lS=35902,cS=35899,uS=1021,fS=1022,zi=1023,Ia=1026,es=1027,dS=1028,Rm=1029,as=1030,Cm=1031,Dm=1033,Eu=33776,Tu=33777,Au=33778,wu=33779,Ep=35840,Tp=35841,Ap=35842,wp=35843,Rp=36196,Cp=37492,Dp=37496,Np=37488,Up=37489,Uu=37490,Lp=37491,Op=37808,Pp=37809,Ip=37810,Bp=37811,Fp=37812,zp=37813,Hp=37814,Gp=37815,Vp=37816,kp=37817,Xp=37818,Wp=37819,qp=37820,Yp=37821,jp=36492,Zp=36494,Kp=36495,Qp=36283,Jp=36284,Lu=36285,$p=36286,aA=3200,em=0,rA=1,_r="",Xn="srgb",Ou="srgb-linear",Pu="linear",Ft="srgb",Hs=7680,o_=519,sA=512,oA=513,lA=514,Nm=515,cA=516,uA=517,Um=518,fA=519,l_=35044,dA=35048,c_="300 es",Ji=2e3,Iu=2001;function hA(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Bu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function pA(){const a=Bu("canvas");return a.style.display="block",a}const u_={};function f_(...a){const e="THREE."+a.shift();console.log(e,...a)}function hS(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function it(...a){a=hS(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Tt(...a){a=hS(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function so(...a){const e=a.join(" ");e in u_||(u_[e]=!0,it(...a))}function mA(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const gA={[mp]:gp,[vp]:yp,[xp]:Sp,[co]:_p,[gp]:mp,[yp]:vp,[Sp]:xp,[_p]:co};class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=Math.PI/180,tm=180/Math.PI;function Ul(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[n&63|128]+Fn[n>>8&255]+"-"+Fn[n>>16&255]+Fn[n>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function xt(a,e,n){return Math.max(e,Math.min(n,a))}function vA(a,e){return(a%e+e)%e}function bh(a,e,n){return(1-n)*a+n*e}function pl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Wm=class Wm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wm.prototype.isVector2=!0;let tt=Wm;class go{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,d){let m=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3],v=c[u+0],y=c[u+1],M=c[u+2],w=c[u+3];if(x!==w||m!==v||h!==y||g!==M){let S=m*v+h*y+g*M+x*w;S<0&&(v=-v,y=-y,M=-M,w=-w,S=-S);let _=1-d;if(S<.9995){const R=Math.acos(S),U=Math.sin(R);_=Math.sin(_*R)/U,d=Math.sin(d*R)/U,m=m*_+v*d,h=h*_+y*d,g=g*_+M*d,x=x*_+w*d}else{m=m*_+v*d,h=h*_+y*d,g=g*_+M*d,x=x*_+w*d;const R=1/Math.sqrt(m*m+h*h+g*g+x*x);m*=R,h*=R,g*=R,x*=R}}e[n]=m,e[n+1]=h,e[n+2]=g,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,o,c,u){const d=r[o],m=r[o+1],h=r[o+2],g=r[o+3],x=c[u],v=c[u+1],y=c[u+2],M=c[u+3];return e[n]=d*M+g*x+m*y-h*v,e[n+1]=m*M+g*v+h*x-d*y,e[n+2]=h*M+g*y+d*v-m*x,e[n+3]=g*M-d*x-m*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,h=d(r/2),g=d(o/2),x=d(c/2),v=m(r/2),y=m(o/2),M=m(c/2);switch(u){case"XYZ":this._x=v*g*x+h*y*M,this._y=h*y*x-v*g*M,this._z=h*g*M+v*y*x,this._w=h*g*x-v*y*M;break;case"YXZ":this._x=v*g*x+h*y*M,this._y=h*y*x-v*g*M,this._z=h*g*M-v*y*x,this._w=h*g*x+v*y*M;break;case"ZXY":this._x=v*g*x-h*y*M,this._y=h*y*x+v*g*M,this._z=h*g*M+v*y*x,this._w=h*g*x-v*y*M;break;case"ZYX":this._x=v*g*x-h*y*M,this._y=h*y*x+v*g*M,this._z=h*g*M-v*y*x,this._w=h*g*x+v*y*M;break;case"YZX":this._x=v*g*x+h*y*M,this._y=h*y*x+v*g*M,this._z=h*g*M-v*y*x,this._w=h*g*x-v*y*M;break;case"XZY":this._x=v*g*x-h*y*M,this._y=h*y*x-v*g*M,this._z=h*g*M+v*y*x,this._w=h*g*x+v*y*M;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],h=n[2],g=n[6],x=n[10],v=r+d+x;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-h)*y,this._z=(u-o)*y}else if(r>d&&r>x){const y=2*Math.sqrt(1+r-d-x);this._w=(g-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+h)/y}else if(d>x){const y=2*Math.sqrt(1+d-r-x);this._w=(c-h)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-r-d);this._w=(u-o)/y,this._x=(c+h)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,h=n._z,g=n._w;return this._x=r*g+u*d+o*h-c*m,this._y=o*g+u*m+c*d-r*h,this._z=c*g+u*h+r*m-o*d,this._w=u*g-r*d-o*m-c*h,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);m=Math.sin(m*h)/g,n=Math.sin(n*h)/g,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qm=class qm{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(d_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(d_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,h=2*(u*o-d*r),g=2*(d*n-c*o),x=2*(c*r-u*n);return this.x=n+m*h+u*x-d*g,this.y=r+m*g+d*h-c*x,this.z=o+m*x+c*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qm.prototype.isVector3=!0;let X=qm;const Mh=new X,d_=new go,Ym=class Ym{constructor(e,n,r,o,c,u,d,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,m,h)}set(e,n,r,o,c,u,d,m,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[3],m=r[6],h=r[1],g=r[4],x=r[7],v=r[2],y=r[5],M=r[8],w=o[0],S=o[3],_=o[6],R=o[1],U=o[4],A=o[7],P=o[2],L=o[5],B=o[8];return c[0]=u*w+d*R+m*P,c[3]=u*S+d*U+m*L,c[6]=u*_+d*A+m*B,c[1]=h*w+g*R+x*P,c[4]=h*S+g*U+x*L,c[7]=h*_+g*A+x*B,c[2]=v*w+y*R+M*P,c[5]=v*S+y*U+M*L,c[8]=v*_+y*A+M*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8];return n*u*g-n*d*h-r*c*g+r*d*m+o*c*h-o*u*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],x=g*u-d*h,v=d*m-g*c,y=h*c-u*m,M=n*x+r*v+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=x*w,e[1]=(o*h-g*r)*w,e[2]=(d*r-o*u)*w,e[3]=v*w,e[4]=(g*n-o*m)*w,e[5]=(o*c-d*n)*w,e[6]=y*w,e[7]=(r*m-h*n)*w,e[8]=(u*n-r*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,d){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*u+h*d)+u+e,-o*h,o*m,-o*(-h*u+m*d)+d+n,0,0,1),this}scale(e,n){return so("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eh.makeScale(e,n)),this}rotate(e){return so("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eh.makeRotation(-e)),this}translate(e,n){return so("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ym.prototype.isMatrix3=!0;let ot=Ym;const Eh=new ot,h_=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xA(){const a={enabled:!0,workingColorSpace:Ou,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ft&&(o.r=La(o.r),o.g=La(o.g),o.b=La(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(o.r=oo(o.r),o.g=oo(o.g),o.b=oo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===_r?Pu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return so("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return so("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Ou]:{primaries:e,whitePoint:r,transfer:Pu,toXYZ:h_,fromXYZ:p_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:h_,fromXYZ:p_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),a}const Et=xA();function La(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function oo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Gs;class _A{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Gs===void 0&&(Gs=Bu("canvas")),Gs.width=e.width,Gs.height=e.height;const o=Gs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Gs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=La(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(La(n[r]/255)*255):n[r]=La(n[r]);return{data:n,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yA=0;class Lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=Ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Th(o[u].image)):c.push(Th(o[u]))}else c=Th(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Th(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?_A.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let SA=0;const Ah=new X;class qn extends ss{constructor(e=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,r=Na,o=Na,c=Hn,u=$r,d=zi,m=wi,h=qn.DEFAULT_ANISOTROPY,g=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SA++}),this.uuid=Ul(),this.name="",this.source=new Lm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){it(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){it(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bp:e.x=e.x-Math.floor(e.x);break;case Na:e.x=e.x<0?0:1;break;case Mp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bp:e.y=e.y-Math.floor(e.y);break;case Na:e.y=e.y<0?0:1;break;case Mp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=rS;qn.DEFAULT_ANISOTROPY=1;const jm=class jm{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,h=m[0],g=m[4],x=m[8],v=m[1],y=m[5],M=m[9],w=m[2],S=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-w)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+w)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(h+1)/2,A=(y+1)/2,P=(_+1)/2,L=(g+v)/4,B=(x+w)/4,T=(M+S)/4;return U>A&&U>P?U<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(U),o=L/r,c=B/r):A>P?A<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),r=L/o,c=T/o):P<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),r=B/c,o=T/c),this.set(r,o,c,n),this}let R=Math.sqrt((S-M)*(S-M)+(x-w)*(x-w)+(v-g)*(v-g));return Math.abs(R)<.001&&(R=1),this.x=(S-M)/R,this.y=(x-w)/R,this.z=(v-g)/R,this.w=Math.acos((h+y+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jm.prototype.isVector4=!0;let cn=jm;class bA extends ss{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new cn(0,0,e,n),this.scissorTest=!1,this.viewport=new cn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new qn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Lm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ea extends bA{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class pS extends qn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MA extends qn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hu=class Hu{constructor(e,n,r,o,c,u,d,m,h,g,x,v,y,M,w,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,m,h,g,x,v,y,M,w,S)}set(e,n,r,o,c,u,d,m,h,g,x,v,y,M,w,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=c,_[5]=u,_[9]=d,_[13]=m,_[2]=h,_[6]=g,_[10]=x,_[14]=v,_[3]=y,_[7]=M,_[11]=w,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hu().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Vs.setFromMatrixColumn(e,0).length(),c=1/Vs.setFromMatrixColumn(e,1).length(),u=1/Vs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),h=Math.sin(o),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const v=u*g,y=u*x,M=d*g,w=d*x;n[0]=m*g,n[4]=-m*x,n[8]=h,n[1]=y+M*h,n[5]=v-w*h,n[9]=-d*m,n[2]=w-v*h,n[6]=M+y*h,n[10]=u*m}else if(e.order==="YXZ"){const v=m*g,y=m*x,M=h*g,w=h*x;n[0]=v+w*d,n[4]=M*d-y,n[8]=u*h,n[1]=u*x,n[5]=u*g,n[9]=-d,n[2]=y*d-M,n[6]=w+v*d,n[10]=u*m}else if(e.order==="ZXY"){const v=m*g,y=m*x,M=h*g,w=h*x;n[0]=v-w*d,n[4]=-u*x,n[8]=M+y*d,n[1]=y+M*d,n[5]=u*g,n[9]=w-v*d,n[2]=-u*h,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const v=u*g,y=u*x,M=d*g,w=d*x;n[0]=m*g,n[4]=M*h-y,n[8]=v*h+w,n[1]=m*x,n[5]=w*h+v,n[9]=y*h-M,n[2]=-h,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const v=u*m,y=u*h,M=d*m,w=d*h;n[0]=m*g,n[4]=w-v*x,n[8]=M*x+y,n[1]=x,n[5]=u*g,n[9]=-d*g,n[2]=-h*g,n[6]=y*x+M,n[10]=v-w*x}else if(e.order==="XZY"){const v=u*m,y=u*h,M=d*m,w=d*h;n[0]=m*g,n[4]=-x,n[8]=h*g,n[1]=v*x+w,n[5]=u*g,n[9]=y*x-M,n[2]=M*x-y,n[6]=d*g,n[10]=w*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EA,e,TA)}lookAt(e,n,r){const o=this.elements;return mi.subVectors(e,n),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),hr.crossVectors(r,mi),hr.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),hr.crossVectors(r,mi)),hr.normalize(),Kc.crossVectors(mi,hr),o[0]=hr.x,o[4]=Kc.x,o[8]=mi.x,o[1]=hr.y,o[5]=Kc.y,o[9]=mi.y,o[2]=hr.z,o[6]=Kc.z,o[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[4],m=r[8],h=r[12],g=r[1],x=r[5],v=r[9],y=r[13],M=r[2],w=r[6],S=r[10],_=r[14],R=r[3],U=r[7],A=r[11],P=r[15],L=o[0],B=o[4],T=o[8],O=o[12],V=o[1],k=o[5],j=o[9],ce=o[13],ue=o[2],K=o[6],H=o[10],F=o[14],$=o[3],ge=o[7],ye=o[11],I=o[15];return c[0]=u*L+d*V+m*ue+h*$,c[4]=u*B+d*k+m*K+h*ge,c[8]=u*T+d*j+m*H+h*ye,c[12]=u*O+d*ce+m*F+h*I,c[1]=g*L+x*V+v*ue+y*$,c[5]=g*B+x*k+v*K+y*ge,c[9]=g*T+x*j+v*H+y*ye,c[13]=g*O+x*ce+v*F+y*I,c[2]=M*L+w*V+S*ue+_*$,c[6]=M*B+w*k+S*K+_*ge,c[10]=M*T+w*j+S*H+_*ye,c[14]=M*O+w*ce+S*F+_*I,c[3]=R*L+U*V+A*ue+P*$,c[7]=R*B+U*k+A*K+P*ge,c[11]=R*T+U*j+A*H+P*ye,c[15]=R*O+U*ce+A*F+P*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],h=e[13],g=e[2],x=e[6],v=e[10],y=e[14],M=e[3],w=e[7],S=e[11],_=e[15],R=m*y-h*v,U=d*y-h*x,A=d*v-m*x,P=u*y-h*g,L=u*v-m*g,B=u*x-d*g;return n*(w*R-S*U+_*A)-r*(M*R-S*P+_*L)+o*(M*U-w*P+_*B)-c*(M*A-w*L+S*B)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],u=e[5],d=e[9],m=e[2],h=e[6],g=e[10];return n*(u*g-d*h)-r*(c*g-d*m)+o*(c*h-u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],x=e[9],v=e[10],y=e[11],M=e[12],w=e[13],S=e[14],_=e[15],R=n*d-r*u,U=n*m-o*u,A=n*h-c*u,P=r*m-o*d,L=r*h-c*d,B=o*h-c*m,T=g*w-x*M,O=g*S-v*M,V=g*_-y*M,k=x*S-v*w,j=x*_-y*w,ce=v*_-y*S,ue=R*ce-U*j+A*k+P*V-L*O+B*T;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/ue;return e[0]=(d*ce-m*j+h*k)*K,e[1]=(o*j-r*ce-c*k)*K,e[2]=(w*B-S*L+_*P)*K,e[3]=(v*L-x*B-y*P)*K,e[4]=(m*V-u*ce-h*O)*K,e[5]=(n*ce-o*V+c*O)*K,e[6]=(S*A-M*B-_*U)*K,e[7]=(g*B-v*A+y*U)*K,e[8]=(u*j-d*V+h*T)*K,e[9]=(r*V-n*j-c*T)*K,e[10]=(M*L-w*A+_*R)*K,e[11]=(x*A-g*L-y*R)*K,e[12]=(d*O-u*k-m*T)*K,e[13]=(n*k-r*O+o*T)*K,e[14]=(w*U-M*P-S*R)*K,e[15]=(g*P-x*U+v*R)*K,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,d=e.y,m=e.z,h=c*u,g=c*d;return this.set(h*u+r,h*d-o*m,h*m+o*d,0,h*d+o*m,g*d+r,g*m-o*u,0,h*m-o*d,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,h=c+c,g=u+u,x=d+d,v=c*h,y=c*g,M=c*x,w=u*g,S=u*x,_=d*x,R=m*h,U=m*g,A=m*x,P=r.x,L=r.y,B=r.z;return o[0]=(1-(w+_))*P,o[1]=(y+A)*P,o[2]=(M-U)*P,o[3]=0,o[4]=(y-A)*L,o[5]=(1-(v+_))*L,o[6]=(S+R)*L,o[7]=0,o[8]=(M+U)*B,o[9]=(S-R)*B,o[10]=(1-(v+w))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let u=Vs.set(o[0],o[1],o[2]).length();const d=Vs.set(o[4],o[5],o[6]).length(),m=Vs.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Oi.copy(this);const h=1/u,g=1/d,x=1/m;return Oi.elements[0]*=h,Oi.elements[1]*=h,Oi.elements[2]*=h,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=x,Oi.elements[9]*=x,Oi.elements[10]*=x,n.setFromRotationMatrix(Oi),r.x=u,r.y=d,r.z=m,this}makePerspective(e,n,r,o,c,u,d=Ji,m=!1){const h=this.elements,g=2*c/(n-e),x=2*c/(r-o),v=(n+e)/(n-e),y=(r+o)/(r-o);let M,w;if(m)M=c/(u-c),w=u*c/(u-c);else if(d===Ji)M=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(d===Iu)M=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=x,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,u,d=Ji,m=!1){const h=this.elements,g=2/(n-e),x=2/(r-o),v=-(n+e)/(n-e),y=-(r+o)/(r-o);let M,w;if(m)M=1/(u-c),w=u/(u-c);else if(d===Ji)M=-2/(u-c),w=-(u+c)/(u-c);else if(d===Iu)M=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=x,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Hu.prototype.isMatrix4=!0;let un=Hu;const Vs=new X,Oi=new un,EA=new X(0,0,0),TA=new X(1,1,1),hr=new X,Kc=new X,mi=new X,m_=new un,g_=new go;class rs{constructor(e=0,n=0,r=0,o=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],h=o[5],g=o[9],x=o[2],v=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class mS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AA=0;const v_=new X,ks=new go,Ta=new un,Qc=new X,ml=new X,wA=new X,RA=new go,x_=new X(1,0,0),__=new X(0,1,0),y_=new X(0,0,1),S_={type:"added"},CA={type:"removed"},Xs={type:"childadded",child:null},wh={type:"childremoved",child:null};class ii extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AA++}),this.uuid=Ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const e=new X,n=new rs,r=new go,o=new X(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new un},normalMatrix:{value:new ot}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ks.setFromAxisAngle(e,n),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,n){return ks.setFromAxisAngle(e,n),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(x_,e)}rotateY(e){return this.rotateOnAxis(__,e)}rotateZ(e){return this.rotateOnAxis(y_,e)}translateOnAxis(e,n){return v_.copy(e).applyQuaternion(this.quaternion),this.position.add(v_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(x_,e)}translateY(e){return this.translateOnAxis(__,e)}translateZ(e){return this.translateOnAxis(y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Qc.copy(e):Qc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(ml,Qc,this.up):Ta.lookAt(Qc,ml,this.up),this.quaternion.setFromRotationMatrix(Ta),o&&(Ta.extractRotation(o.matrixWorld),ks.setFromRotationMatrix(Ta),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(S_),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CA),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(S_),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,e,wA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,RA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const x=m[h];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),h=u(e.textures),g=u(e.images),x=u(e.shapes),v=u(e.skeletons),y=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(d){const m=[];for(const h in d){const g=d[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ii.DEFAULT_UP=new X(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class io extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DA={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const w of e.hand.values()){const S=n.getJointPose(w,r),_=this._getHandJoint(h,w);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],v=g.position.distanceTo(x.position),y=.02,M=.005;h.inputState.pinching&&v>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(DA)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new io;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const gS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function Ch(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class lt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Et.workingColorSpace){if(e=vA(e,1),n=xt(n,0,1),r=xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Ch(u,c,e+1/3),this.g=Ch(u,c,e),this.b=Ch(u,c,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,n=Xn){function r(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:it("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const r=gS[e.toLowerCase()];return r!==void 0?this.setHex(r,n):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Et.workingToColorSpace(zn.copy(this),e),Math.round(xt(zn.r*255,0,255))*65536+Math.round(xt(zn.g*255,0,255))*256+Math.round(xt(zn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(zn.copy(this),n);const r=zn.r,o=zn.g,c=zn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let m,h;const g=(d+u)/2;if(d===u)m=0,h=0;else{const x=u-d;switch(h=g<=.5?x/(u+d):x/(2-u-d),u){case r:m=(o-c)/x+(o<c?6:0);break;case o:m=(c-r)/x+2;break;case c:m=(r-o)/x+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(zn.copy(this),n),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Xn){Et.workingToColorSpace(zn.copy(this),e);const n=zn.r,r=zn.g,o=zn.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(Jc);const r=bh(pr.h,Jc.h,n),o=bh(pr.s,Jc.s,n),c=bh(pr.l,Jc.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new lt;lt.NAMES=gS;class Om extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Pi=new X,Aa=new X,Dh=new X,wa=new X,Ws=new X,qs=new X,b_=new X,Nh=new X,Uh=new X,Lh=new X,Oh=new cn,Ph=new cn,Ih=new cn;class Bi{constructor(e=new X,n=new X,r=new X){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Pi.subVectors(e,n),o.cross(Pi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Pi.subVectors(o,n),Aa.subVectors(r,n),Dh.subVectors(e,n);const u=Pi.dot(Pi),d=Pi.dot(Aa),m=Pi.dot(Dh),h=Aa.dot(Aa),g=Aa.dot(Dh),x=u*h-d*d;if(x===0)return c.set(0,0,0),null;const v=1/x,y=(h*m-d*g)*v,M=(u*g-d*m)*v;return c.set(1-y-M,M,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(e,n,r,o,c,u,d,m){return this.getBarycoord(e,n,r,o,wa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,wa.x),m.addScaledVector(u,wa.y),m.addScaledVector(d,wa.z),m)}static getInterpolatedAttribute(e,n,r,o,c,u){return Oh.setScalar(0),Ph.setScalar(0),Ih.setScalar(0),Oh.fromBufferAttribute(e,n),Ph.fromBufferAttribute(e,r),Ih.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Oh,c.x),u.addScaledVector(Ph,c.y),u.addScaledVector(Ih,c.z),u}static isFrontFacing(e,n,r,o){return Pi.subVectors(r,n),Aa.subVectors(e,n),Pi.cross(Aa).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Pi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Bi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,d;Ws.subVectors(o,r),qs.subVectors(c,r),Nh.subVectors(e,r);const m=Ws.dot(Nh),h=qs.dot(Nh);if(m<=0&&h<=0)return n.copy(r);Uh.subVectors(e,o);const g=Ws.dot(Uh),x=qs.dot(Uh);if(g>=0&&x<=g)return n.copy(o);const v=m*x-g*h;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(r).addScaledVector(Ws,u);Lh.subVectors(e,c);const y=Ws.dot(Lh),M=qs.dot(Lh);if(M>=0&&y<=M)return n.copy(c);const w=y*h-m*M;if(w<=0&&h>=0&&M<=0)return d=h/(h-M),n.copy(r).addScaledVector(qs,d);const S=g*M-y*x;if(S<=0&&x-g>=0&&y-M>=0)return b_.subVectors(c,o),d=(x-g)/(x-g+(y-M)),n.copy(o).addScaledVector(b_,d);const _=1/(S+w+v);return u=w*_,d=v*_,n.copy(r).addScaledVector(Ws,u).addScaledVector(qs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ll{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Ii):Ii.fromBufferAttribute(c,u),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$c.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$c.copy(r.boundingBox)),$c.applyMatrix4(e.matrixWorld),this.union($c)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gl),eu.subVectors(this.max,gl),Ys.subVectors(e.a,gl),js.subVectors(e.b,gl),Zs.subVectors(e.c,gl),mr.subVectors(js,Ys),gr.subVectors(Zs,js),Wr.subVectors(Ys,Zs);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Wr.z,Wr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Wr.z,0,-Wr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Wr.y,Wr.x,0];return!Bh(n,Ys,js,Zs,eu)||(n=[1,0,0,0,1,0,0,0,1],!Bh(n,Ys,js,Zs,eu))?!1:(tu.crossVectors(mr,gr),n=[tu.x,tu.y,tu.z],Bh(n,Ys,js,Zs,eu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new X,new X,new X,new X,new X,new X,new X,new X],Ii=new X,$c=new Ll,Ys=new X,js=new X,Zs=new X,mr=new X,gr=new X,Wr=new X,gl=new X,eu=new X,tu=new X,qr=new X;function Bh(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){qr.fromArray(a,c);const d=o.x*Math.abs(qr.x)+o.y*Math.abs(qr.y)+o.z*Math.abs(qr.z),m=e.dot(qr),h=n.dot(qr),g=r.dot(qr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>d)return!1}return!0}const bn=new X,nu=new tt;let NA=0;class Gn extends ss{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=l_,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)nu.fromBufferAttribute(this,n),nu.applyMatrix3(e),this.setXY(n,nu.x,nu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix3(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix4(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyNormalMatrix(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.transformDirection(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=pl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ei(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=pl(n,this.array)),n}setX(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=pl(n,this.array)),n}setY(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=pl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=pl(n,this.array)),n}setW(e,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array),o=ei(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=ei(n,this.array),r=ei(r,this.array),o=ei(o,this.array),c=ei(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class vS extends Gn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class xS extends Gn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class mn extends Gn{constructor(e,n,r){super(new Float32Array(e),n,r)}}const UA=new Ll,vl=new X,Fh=new X;class Yu{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):UA.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const n=vl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(vl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Fh)),this.expandByPoint(vl.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let LA=0;const Ti=new un,zh=new ii,Ks=new X,gi=new Ll,xl=new Ll,Rn=new X;class Pn extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=Ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hA(e)?xS:vS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,n,r){return Ti.makeTranslation(e,n,r),this.applyMatrix4(Ti),this}scale(e,n,r){return Ti.makeScale(e,n,r),this.applyMatrix4(Ti),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new mn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];gi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];xl.setFromBufferAttribute(d),this.morphTargetsRelative?(Rn.addVectors(gi.min,xl.min),gi.expandByPoint(Rn),Rn.addVectors(gi.max,xl.max),gi.expandByPoint(Rn)):(gi.expandByPoint(xl.min),gi.expandByPoint(xl.max))}gi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Rn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Rn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Rn.fromBufferAttribute(d,h),m&&(Ks.fromBufferAttribute(e,h),Rn.add(Ks)),o=Math.max(o,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Gn(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<r.count;T++)d[T]=new X,m[T]=new X;const h=new X,g=new X,x=new X,v=new tt,y=new tt,M=new tt,w=new X,S=new X;function _(T,O,V){h.fromBufferAttribute(r,T),g.fromBufferAttribute(r,O),x.fromBufferAttribute(r,V),v.fromBufferAttribute(c,T),y.fromBufferAttribute(c,O),M.fromBufferAttribute(c,V),g.sub(h),x.sub(h),y.sub(v),M.sub(v);const k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(w.copy(g).multiplyScalar(M.y).addScaledVector(x,-y.y).multiplyScalar(k),S.copy(x).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(k),d[T].add(w),d[O].add(w),d[V].add(w),m[T].add(S),m[O].add(S),m[V].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,O=R.length;T<O;++T){const V=R[T],k=V.start,j=V.count;for(let ce=k,ue=k+j;ce<ue;ce+=3)_(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const U=new X,A=new X,P=new X,L=new X;function B(T){P.fromBufferAttribute(o,T),L.copy(P);const O=d[T];U.copy(O),U.sub(P.multiplyScalar(P.dot(O))).normalize(),A.crossVectors(L,O);const k=A.dot(m[T])<0?-1:1;u.setXYZW(T,U.x,U.y,U.z,k)}for(let T=0,O=R.length;T<O;++T){const V=R[T],k=V.start,j=V.count;for(let ce=k,ue=k+j;ce<ue;ce+=3)B(e.getX(ce+0)),B(e.getX(ce+1)),B(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const o=new X,c=new X,u=new X,d=new X,m=new X,h=new X,g=new X,x=new X;if(e)for(let v=0,y=e.count;v<y;v+=3){const M=e.getX(v+0),w=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,w),h.fromBufferAttribute(r,S),d.add(g),m.add(g),h.add(g),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=n.count;v<y;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Rn.fromBufferAttribute(e,n),Rn.normalize(),e.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(d,m){const h=d.array,g=d.itemSize,x=d.normalized,v=new h.constructor(m.length*g);let y=0,M=0;for(let w=0,S=m.length;w<S;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*g;for(let _=0;_<g;_++)v[M++]=h[y++]}return new Gn(v,g,x)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,r);n.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const m=[],h=c[d];for(let g=0,x=h.length;g<x;g++){const v=h[g],y=e(v,r);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const h=u[d];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let x=0,v=h.length;x<v;x++){const y=h[x];g.push(y.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(n))}const c=e.morphAttributes;for(const h in c){const g=[],x=c[h];for(let v=0,y=x.length;v<y;v++)g.push(x[v].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const x=u[h];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let OA=0;class vo extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OA++}),this.uuid=Ul(),this.name="",this.type="Material",this.blending=ns,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hp,this.blendDst=pp,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){it(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){it(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hp&&(r.blendSrc=this.blendSrc),this.blendDst!==pp&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new tt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ca=new X,Hh=new X,iu=new X,vr=new X,Gh=new X,au=new X,Vh=new X;class _S{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ca.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,n),Ca.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Hh.copy(e).add(n).multiplyScalar(.5),iu.copy(n).sub(e).normalize(),vr.copy(this.origin).sub(Hh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(iu),d=vr.dot(this.direction),m=-vr.dot(iu),h=vr.lengthSq(),g=Math.abs(1-u*u);let x,v,y,M;if(g>0)if(x=u*m-d,v=u*d-m,M=c*g,x>=0)if(v>=-M)if(v<=M){const w=1/g;x*=w,v*=w,y=x*(x+u*v+2*d)+v*(u*x+v+2*m)+h}else v=c,x=Math.max(0,-(u*v+d)),y=-x*x+v*(v+2*m)+h;else v=-c,x=Math.max(0,-(u*v+d)),y=-x*x+v*(v+2*m)+h;else v<=-M?(x=Math.max(0,-(-u*c+d)),v=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+v*(v+2*m)+h):v<=M?(x=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+h):(x=Math.max(0,-(u*c+d)),v=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+v*(v+2*m)+h);else v=u>0?-c:c,x=Math.max(0,-(u*v+d)),y=-x*x+v*(v+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Hh).addScaledVector(iu,v),y}intersectSphere(e,n){Ca.subVectors(e.center,this.origin);const r=Ca.dot(this.direction),o=Ca.dot(Ca)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,d,m;const h=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),x>=0?(d=(e.min.z-v.z)*x,m=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,m=(e.min.z-v.z)*x),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,n,r,o,c){Gh.subVectors(n,e),au.subVectors(r,e),Vh.crossVectors(Gh,au);let u=this.direction.dot(Vh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;vr.subVectors(this.origin,e);const m=d*this.direction.dot(au.crossVectors(vr,au));if(m<0)return null;const h=d*this.direction.dot(Gh.cross(vr));if(h<0||m+h>u)return null;const g=-d*vr.dot(Vh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lo extends vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=Qy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const M_=new un,Yr=new _S,ru=new Yu,E_=new X,su=new X,ou=new X,lu=new X,kh=new X,cu=new X,T_=new X,uu=new X;class Wn extends ii{constructor(e=new Pn,n=new lo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){cu.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=d[m],x=c[m];g!==0&&(kh.fromBufferAttribute(x,e),u?cu.addScaledVector(kh,g):cu.addScaledVector(kh.sub(n),g))}n.add(cu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(c),Yr.copy(e.ray).recast(e.near),!(ru.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(ru,E_)===null||Yr.origin.distanceToSquared(E_)>(e.far-e.near)**2))&&(M_.copy(c).invert(),Yr.copy(e.ray).applyMatrix4(M_),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,w=v.length;M<w;M++){const S=v[M],_=u[S.materialIndex],R=Math.max(S.start,y.start),U=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let A=R,P=U;A<P;A+=3){const L=d.getX(A),B=d.getX(A+1),T=d.getX(A+2);o=fu(this,_,e,r,h,g,x,L,B,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let S=M,_=w;S<_;S+=3){const R=d.getX(S),U=d.getX(S+1),A=d.getX(S+2);o=fu(this,u,e,r,h,g,x,R,U,A),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let M=0,w=v.length;M<w;M++){const S=v[M],_=u[S.materialIndex],R=Math.max(S.start,y.start),U=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let A=R,P=U;A<P;A+=3){const L=A,B=A+1,T=A+2;o=fu(this,_,e,r,h,g,x,L,B,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let S=M,_=w;S<_;S+=3){const R=S,U=S+1,A=S+2;o=fu(this,u,e,r,h,g,x,R,U,A),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function PA(a,e,n,r,o,c,u,d){let m;if(e.side===ni?m=r.intersectTriangle(u,c,o,!0,d):m=r.intersectTriangle(o,c,u,e.side===Mr,d),m===null)return null;uu.copy(d),uu.applyMatrix4(a.matrixWorld);const h=n.ray.origin.distanceTo(uu);return h<n.near||h>n.far?null:{distance:h,point:uu.clone(),object:a}}function fu(a,e,n,r,o,c,u,d,m,h){a.getVertexPosition(d,su),a.getVertexPosition(m,ou),a.getVertexPosition(h,lu);const g=PA(a,e,n,r,su,ou,lu,T_);if(g){const x=new X;Bi.getBarycoord(T_,su,ou,lu,x),o&&(g.uv=Bi.getInterpolatedAttribute(o,d,m,h,x,new tt)),c&&(g.uv1=Bi.getInterpolatedAttribute(c,d,m,h,x,new tt)),u&&(g.normal=Bi.getInterpolatedAttribute(u,d,m,h,x,new X),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:h,normal:new X,materialIndex:0};Bi.getNormal(su,ou,lu,v.normal),g.face=v,g.barycoord=x}return g}class IA extends qn{constructor(e=null,n=1,r=1,o,c,u,d,m,h=On,g=On,x,v){super(null,u,d,m,h,g,o,c,x,v),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xh=new X,BA=new X,FA=new ot;class Zr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Xh.subVectors(r,n).cross(BA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(Xh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||FA.getNormalMatrix(e),o=this.coplanarPoint(Xh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Yu,zA=new tt(.5,.5),du=new X;class yS{constructor(e=new Zr,n=new Zr,r=new Zr,o=new Zr,c=new Zr,u=new Zr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ji,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],h=c[3],g=c[4],x=c[5],v=c[6],y=c[7],M=c[8],w=c[9],S=c[10],_=c[11],R=c[12],U=c[13],A=c[14],P=c[15];if(o[0].setComponents(h-u,y-g,_-M,P-R).normalize(),o[1].setComponents(h+u,y+g,_+M,P+R).normalize(),o[2].setComponents(h+d,y+x,_+w,P+U).normalize(),o[3].setComponents(h-d,y-x,_-w,P-U).normalize(),r)o[4].setComponents(m,v,S,A).normalize(),o[5].setComponents(h-m,y-v,_-S,P-A).normalize();else if(o[4].setComponents(h-m,y-v,_-S,P-A).normalize(),n===Ji)o[5].setComponents(h+m,y+v,_+S,P+A).normalize();else if(n===Iu)o[5].setComponents(m,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);const n=zA.distanceTo(e.center);return jr.radius=.7071067811865476+n,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(du.x=o.normal.x>0?e.max.x:e.min.x,du.y=o.normal.y>0?e.max.y:e.min.y,du.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(du)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pm extends vo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const A_=new un,nm=new _S,hu=new Yu,pu=new X;class Im extends ii{constructor(e=new Pn,n=new Pm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hu.copy(r.boundingSphere),hu.applyMatrix4(o),hu.radius+=c,e.ray.intersectsSphere(hu)===!1)return;A_.copy(o).invert(),nm.copy(e.ray).applyMatrix4(A_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,h=r.index,x=r.attributes.position;if(h!==null){const v=Math.max(0,u.start),y=Math.min(h.count,u.start+u.count);for(let M=v,w=y;M<w;M++){const S=h.getX(M);pu.fromBufferAttribute(x,S),w_(pu,S,m,o,e,n,this)}}else{const v=Math.max(0,u.start),y=Math.min(x.count,u.start+u.count);for(let M=v,w=y;M<w;M++)pu.fromBufferAttribute(x,M),w_(pu,M,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function w_(a,e,n,r,o,c,u){const d=nm.distanceSqToPoint(a);if(d<n){const m=new X;nm.closestPointToPoint(a,m),m.applyMatrix4(r);const h=o.ray.origin.distanceTo(m);if(h<o.near||h>o.far)return;c.push({distance:h,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class SS extends qn{constructor(e=[],n=is,r,o,c,u,d,m,h,g){super(e,n,r,o,c,u,d,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fo extends qn{constructor(e,n,r=na,o,c,u,d=On,m=On,h,g=Ia,x=1){if(g!==Ia&&g!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:x};super(v,o,c,u,d,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class HA extends fo{constructor(e,n=na,r=is,o,c,u=On,d=On,m,h=Ia){const g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,n,r,o,c,u,d,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bS extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ol extends Pn{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],h=[],g=[],x=[];let v=0,y=0;M("z","y","x",-1,-1,r,n,e,u,c,0),M("z","y","x",1,-1,r,n,-e,u,c,1),M("x","z","y",1,1,e,r,n,o,u,2),M("x","z","y",1,-1,e,r,-n,o,u,3),M("x","y","z",1,-1,e,n,r,o,c,4),M("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new mn(h,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(x,2));function M(w,S,_,R,U,A,P,L,B,T,O){const V=A/B,k=P/T,j=A/2,ce=P/2,ue=L/2,K=B+1,H=T+1;let F=0,$=0;const ge=new X;for(let ye=0;ye<H;ye++){const I=ye*k-ce;for(let Q=0;Q<K;Q++){const Te=Q*V-j;ge[w]=Te*R,ge[S]=I*U,ge[_]=ue,h.push(ge.x,ge.y,ge.z),ge[w]=0,ge[S]=0,ge[_]=L>0?1:-1,g.push(ge.x,ge.y,ge.z),x.push(Q/B),x.push(1-ye/T),F+=1}}for(let ye=0;ye<T;ye++)for(let I=0;I<B;I++){const Q=v+I+K*ye,Te=v+I+K*(ye+1),Ce=v+(I+1)+K*(ye+1),Be=v+(I+1)+K*ye;m.push(Q,Te,Be),m.push(Te,Ce,Be),$+=6}d.addGroup(y,$,O),y+=$,v+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bm extends Pn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const c=[],u=[];d(o),h(r),g(),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(c.slice(),3)),this.setAttribute("uv",new mn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(R){const U=new X,A=new X,P=new X;for(let L=0;L<n.length;L+=3)y(n[L+0],U),y(n[L+1],A),y(n[L+2],P),m(U,A,P,R)}function m(R,U,A,P){const L=P+1,B=[];for(let T=0;T<=L;T++){B[T]=[];const O=R.clone().lerp(A,T/L),V=U.clone().lerp(A,T/L),k=L-T;for(let j=0;j<=k;j++)j===0&&T===L?B[T][j]=O:B[T][j]=O.clone().lerp(V,j/k)}for(let T=0;T<L;T++)for(let O=0;O<2*(L-T)-1;O++){const V=Math.floor(O/2);O%2===0?(v(B[T][V+1]),v(B[T+1][V]),v(B[T][V])):(v(B[T][V+1]),v(B[T+1][V+1]),v(B[T+1][V]))}}function h(R){const U=new X;for(let A=0;A<c.length;A+=3)U.x=c[A+0],U.y=c[A+1],U.z=c[A+2],U.normalize().multiplyScalar(R),c[A+0]=U.x,c[A+1]=U.y,c[A+2]=U.z}function g(){const R=new X;for(let U=0;U<c.length;U+=3){R.x=c[U+0],R.y=c[U+1],R.z=c[U+2];const A=S(R)/2/Math.PI+.5,P=_(R)/Math.PI+.5;u.push(A,1-P)}M(),x()}function x(){for(let R=0;R<u.length;R+=6){const U=u[R+0],A=u[R+2],P=u[R+4],L=Math.max(U,A,P),B=Math.min(U,A,P);L>.9&&B<.1&&(U<.2&&(u[R+0]+=1),A<.2&&(u[R+2]+=1),P<.2&&(u[R+4]+=1))}}function v(R){c.push(R.x,R.y,R.z)}function y(R,U){const A=R*3;U.x=e[A+0],U.y=e[A+1],U.z=e[A+2]}function M(){const R=new X,U=new X,A=new X,P=new X,L=new tt,B=new tt,T=new tt;for(let O=0,V=0;O<c.length;O+=9,V+=6){R.set(c[O+0],c[O+1],c[O+2]),U.set(c[O+3],c[O+4],c[O+5]),A.set(c[O+6],c[O+7],c[O+8]),L.set(u[V+0],u[V+1]),B.set(u[V+2],u[V+3]),T.set(u[V+4],u[V+5]),P.copy(R).add(U).add(A).divideScalar(3);const k=S(P);w(L,V+0,R,k),w(B,V+2,U,k),w(T,V+4,A,k)}}function w(R,U,A,P){P<0&&R.x===1&&(u[U]=R.x-1),A.x===0&&A.z===0&&(u[U]=P/2/Math.PI+.5)}function S(R){return Math.atan2(R.z,-R.x)}function _(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bm(e.vertices,e.indices,e.radius,e.detail)}}class za{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){it("Curve: .getPoint() not implemented.")}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),n.push(c),o=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const r=this.getLengths();let o=0;const c=r.length;let u;n?u=n:u=e*r[c-1];let d=0,m=c-1,h;for(;d<=m;)if(o=Math.floor(d+(m-d)/2),h=r[o]-u,h<0)d=o+1;else if(h>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,y=(u-g)/v;return(o+y)/(c-1)}getTangent(e,n){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),m=n||(u.isVector2?new tt:new X);return m.copy(d).sub(u).normalize(),m}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n=!1){const r=new X,o=[],c=[],u=[],d=new X,m=new un;for(let y=0;y<=e;y++){const M=y/e;o[y]=this.getTangentAt(M,new X)}c[0]=new X,u[0]=new X;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),x<=h&&(h=x,r.set(0,1,0)),v<=h&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let y=1;y<=e;y++){if(c[y]=c[y-1].clone(),u[y]=u[y-1].clone(),d.crossVectors(o[y-1],o[y]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(xt(o[y-1].dot(o[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,M))}u[y].crossVectors(o[y],c[y])}if(n===!0){let y=Math.acos(xt(c[0].dot(c[e]),-1,1));y/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(y=-y);for(let M=1;M<=e;M++)c[M].applyMatrix4(m.makeRotationAxis(o[M],y*M)),u[M].crossVectors(o[M],c[M])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class MS extends za{constructor(e=0,n=0,r=1,o=1,c=0,u=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=r,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=d,this.aRotation=m}getPoint(e,n=new tt){const r=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const d=this.aStartAngle+e*c;let m=this.aX+this.xRadius*Math.cos(d),h=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),x=Math.sin(this.aRotation),v=m-this.aX,y=h-this.aY;m=v*g-y*x+this.aX,h=v*x+y*g+this.aY}return r.set(m,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class GA extends MS{constructor(e,n,r,o,c,u){super(e,n,r,r,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Fm(){let a=0,e=0,n=0,r=0;function o(c,u,d,m){a=c,e=d,n=-3*c+3*u-2*d-m,r=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,h){o(u,d,h*(d-c),h*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,h,g,x){let v=(u-c)/h-(d-c)/(h+g)+(d-u)/g,y=(d-u)/g-(m-u)/(g+x)+(m-d)/x;v*=g,y*=g,o(u,d,v,y)},calc:function(c){const u=c*c,d=u*c;return a+e*c+n*u+r*d}}}const R_=new X,C_=new X,Wh=new Fm,qh=new Fm,Yh=new Fm;class ES extends za{constructor(e=[],n=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=o}getPoint(e,n=new X){const r=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let h,g;this.closed||d>0?h=o[(d-1)%c]:(C_.subVectors(o[0],o[1]).add(o[0]),h=C_);const x=o[d%c],v=o[(d+1)%c];if(this.closed||d+2<c?g=o[(d+2)%c]:(R_.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=R_),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(x),y),w=Math.pow(x.distanceToSquared(v),y),S=Math.pow(v.distanceToSquared(g),y);w<1e-4&&(w=1),M<1e-4&&(M=w),S<1e-4&&(S=w),Wh.initNonuniformCatmullRom(h.x,x.x,v.x,g.x,M,w,S),qh.initNonuniformCatmullRom(h.y,x.y,v.y,g.y,M,w,S),Yh.initNonuniformCatmullRom(h.z,x.z,v.z,g.z,M,w,S)}else this.curveType==="catmullrom"&&(Wh.initCatmullRom(h.x,x.x,v.x,g.x,this.tension),qh.initCatmullRom(h.y,x.y,v.y,g.y,this.tension),Yh.initCatmullRom(h.z,x.z,v.z,g.z,this.tension));return r.set(Wh.calc(m),qh.calc(m),Yh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new X().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function D_(a,e,n,r,o){const c=(r-e)*.5,u=(o-n)*.5,d=a*a,m=a*d;return(2*n-2*r+c+u)*m+(-3*n+3*r-2*c-u)*d+c*a+n}function VA(a,e){const n=1-a;return n*n*e}function kA(a,e){return 2*(1-a)*a*e}function XA(a,e){return a*a*e}function Ml(a,e,n,r){return VA(a,e)+kA(a,n)+XA(a,r)}function WA(a,e){const n=1-a;return n*n*n*e}function qA(a,e){const n=1-a;return 3*n*n*a*e}function YA(a,e){return 3*(1-a)*a*a*e}function jA(a,e){return a*a*a*e}function El(a,e,n,r,o){return WA(a,e)+qA(a,n)+YA(a,r)+jA(a,o)}class ZA extends za{constructor(e=new tt,n=new tt,r=new tt,o=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new tt){const r=n,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return r.set(El(e,o.x,c.x,u.x,d.x),El(e,o.y,c.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class KA extends za{constructor(e=new X,n=new X,r=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new X){const r=n,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return r.set(El(e,o.x,c.x,u.x,d.x),El(e,o.y,c.y,u.y,d.y),El(e,o.z,c.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class QA extends za{constructor(e=new tt,n=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new tt){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new tt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class JA extends za{constructor(e=new X,n=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new X){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new X){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $A extends za{constructor(e=new tt,n=new tt,r=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new tt){const r=n,o=this.v0,c=this.v1,u=this.v2;return r.set(Ml(e,o.x,c.x,u.x),Ml(e,o.y,c.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class TS extends za{constructor(e=new X,n=new X,r=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new X){const r=n,o=this.v0,c=this.v1,u=this.v2;return r.set(Ml(e,o.x,c.x,u.x),Ml(e,o.y,c.y,u.y),Ml(e,o.z,c.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ew extends za{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new tt){const r=n,o=this.points,c=(o.length-1)*e,u=Math.floor(c),d=c-u,m=o[u===0?u:u-1],h=o[u],g=o[u>o.length-2?o.length-1:u+1],x=o[u>o.length-3?o.length-1:u+2];return r.set(D_(d,m.x,h.x,g.x,x.x),D_(d,m.y,h.y,g.y,x.y)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new tt().fromArray(o))}return this}}var tw=Object.freeze({__proto__:null,ArcCurve:GA,CatmullRomCurve3:ES,CubicBezierCurve:ZA,CubicBezierCurve3:KA,EllipseCurve:MS,LineCurve:QA,LineCurve3:JA,QuadraticBezierCurve:$A,QuadraticBezierCurve3:TS,SplineCurve:ew});class zm extends Bm{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new zm(e.radius,e.detail)}}class ju extends Pn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(r),m=Math.floor(o),h=d+1,g=m+1,x=e/d,v=n/m,y=[],M=[],w=[],S=[];for(let _=0;_<g;_++){const R=_*v-u;for(let U=0;U<h;U++){const A=U*x-c;M.push(A,-R,0),w.push(0,0,1),S.push(U/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let R=0;R<d;R++){const U=R+h*_,A=R+h*(_+1),P=R+1+h*(_+1),L=R+1+h*_;y.push(U,A,L),y.push(A,P,L)}this.setIndex(y),this.setAttribute("position",new mn(M,3)),this.setAttribute("normal",new mn(w,3)),this.setAttribute("uv",new mn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hm extends Pn{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(u+d,Math.PI);let h=0;const g=[],x=new X,v=new X,y=[],M=[],w=[],S=[];for(let _=0;_<=r;_++){const R=[],U=_/r,A=u+U*d,P=e*Math.cos(A),L=Math.sqrt(e*e-P*P);let B=0;_===0&&u===0?B=.5/n:_===r&&m===Math.PI&&(B=-.5/n);for(let T=0;T<=n;T++){const O=T/n,V=o+O*c;x.x=-L*Math.cos(V),x.y=P,x.z=L*Math.sin(V),M.push(x.x,x.y,x.z),v.copy(x).normalize(),w.push(v.x,v.y,v.z),S.push(O+B,1-U),R.push(h++)}g.push(R)}for(let _=0;_<r;_++)for(let R=0;R<n;R++){const U=g[_][R+1],A=g[_][R],P=g[_+1][R],L=g[_+1][R+1];(_!==0||u>0)&&y.push(U,A,L),(_!==r-1||m<Math.PI)&&y.push(A,P,L)}this.setIndex(y),this.setAttribute("position",new mn(M,3)),this.setAttribute("normal",new mn(w,3)),this.setAttribute("uv",new mn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zu extends Pn{constructor(e=1,n=.4,r=12,o=48,c=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:c,thetaStart:u,thetaLength:d},r=Math.floor(r),o=Math.floor(o);const m=[],h=[],g=[],x=[],v=new X,y=new X,M=new X;for(let w=0;w<=r;w++){const S=u+w/r*d;for(let _=0;_<=o;_++){const R=_/o*c;y.x=(e+n*Math.cos(S))*Math.cos(R),y.y=(e+n*Math.cos(S))*Math.sin(R),y.z=n*Math.sin(S),h.push(y.x,y.y,y.z),v.x=e*Math.cos(R),v.y=e*Math.sin(R),M.subVectors(y,v).normalize(),g.push(M.x,M.y,M.z),x.push(_/o),x.push(w/r)}}for(let w=1;w<=r;w++)for(let S=1;S<=o;S++){const _=(o+1)*w+S-1,R=(o+1)*(w-1)+S-1,U=(o+1)*(w-1)+S,A=(o+1)*w+S;m.push(_,R,A),m.push(R,U,A)}this.setIndex(m),this.setAttribute("position",new mn(h,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Gm extends Pn{constructor(e=new TS(new X(-1,-1,0),new X(-1,1,0),new X(1,1,0)),n=64,r=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:r,radialSegments:o,closed:c};const u=e.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new X,m=new X,h=new tt;let g=new X;const x=[],v=[],y=[],M=[];w(),this.setIndex(M),this.setAttribute("position",new mn(x,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(y,2));function w(){for(let U=0;U<n;U++)S(U);S(c===!1?n:0),R(),_()}function S(U){g=e.getPointAt(U/n,g);const A=u.normals[U],P=u.binormals[U];for(let L=0;L<=o;L++){const B=L/o*Math.PI*2,T=Math.sin(B),O=-Math.cos(B);m.x=O*A.x+T*P.x,m.y=O*A.y+T*P.y,m.z=O*A.z+T*P.z,m.normalize(),v.push(m.x,m.y,m.z),d.x=g.x+r*m.x,d.y=g.y+r*m.y,d.z=g.z+r*m.z,x.push(d.x,d.y,d.z)}}function _(){for(let U=1;U<=n;U++)for(let A=1;A<=o;A++){const P=(o+1)*(U-1)+(A-1),L=(o+1)*U+(A-1),B=(o+1)*U+A,T=(o+1)*(U-1)+A;M.push(P,L,T),M.push(L,B,T)}}function R(){for(let U=0;U<=n;U++)for(let A=0;A<=o;A++)h.x=U/n,h.y=A/o,y.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gm(new tw[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ho(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(N_(o))o.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(N_(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function kn(a){const e={};for(let n=0;n<a.length;n++){const r=ho(a[n]);for(const o in r)e[o]=r[o]}return e}function N_(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function nw(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function AS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const iw={clone:ho,merge:kn};var aw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aw,this.fragmentShader=rw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=nw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new lt().setHex(o.value);break;case"v2":this.uniforms[r].value=new tt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new X().fromArray(o.value);break;case"v4":this.uniforms[r].value=new cn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ot().fromArray(o.value);break;case"m4":this.uniforms[r].value=new un().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sw extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ow extends vo{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=em,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class lw extends vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cw extends vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mu=new X,gu=new go,ji=new X;class wS extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mu,gu,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mu,gu,ji.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(mu,gu,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mu,gu,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new X,U_=new tt,L_=new tt;class ti extends wS{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tm*2*Math.atan(Math.tan(Sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,U_,L_),n.subVectors(L_,U_)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*r/h,o*=u.width/m,r*=u.height/h}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class RS extends wS{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qs=-90,Js=1;class uw extends ii{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ti(Qs,Js,e,n);o.layers=this.layers,this.add(o);const c=new ti(Qs,Js,e,n);c.layers=this.layers,this.add(c);const u=new ti(Qs,Js,e,n);u.layers=this.layers,this.add(u);const d=new ti(Qs,Js,e,n);d.layers=this.layers,this.add(d);const m=new ti(Qs,Js,e,n);m.layers=this.layers,this.add(m);const h=new ti(Qs,Js,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,d,m]=n;for(const h of n)this.remove(h);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Iu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,h,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(x,v,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class fw extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class CS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,it("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Zm=class Zm{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};Zm.prototype.isMatrix2=!0;let O_=Zm;function P_(a,e,n,r){const o=dw(r);switch(n){case uS:return a*e;case dS:return a*e/o.components*o.byteLength;case Rm:return a*e/o.components*o.byteLength;case as:return a*e*2/o.components*o.byteLength;case Cm:return a*e*2/o.components*o.byteLength;case fS:return a*e*3/o.components*o.byteLength;case zi:return a*e*4/o.components*o.byteLength;case Dm:return a*e*4/o.components*o.byteLength;case Eu:case Tu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Au:case wu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Tp:case wp:return Math.max(a,16)*Math.max(e,8)/4;case Ep:case Ap:return Math.max(a,8)*Math.max(e,8)/2;case Rp:case Cp:case Np:case Up:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Dp:case Uu:case Lp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Op:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Pp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Ip:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case zp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Vp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case kp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Xp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Wp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case qp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Yp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case jp:case Zp:case Kp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Qp:case Jp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Lu:case $p:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dw(a){switch(a){case wi:case sS:return{byteLength:1,components:1};case Al:case oS:case Pa:return{byteLength:2,components:1};case Am:case wm:return{byteLength:2,components:4};case na:case Tm:case Qi:return{byteLength:4,components:1};case lS:case cS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Em}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Em);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function DS(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function hw(a){const e=new WeakMap;function n(d,m){const h=d.array,g=d.usage,x=h.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,h,g),d.onUploadCallback();let y;if(h instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=a.SHORT;else if(h instanceof Uint32Array)y=a.UNSIGNED_INT;else if(h instanceof Int32Array)y=a.INT;else if(h instanceof Int8Array)y=a.BYTE;else if(h instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,h){const g=m.array,x=m.updateRanges;if(a.bindBuffer(h,d),x.length===0)a.bufferSubData(h,0,g);else{x.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<x.length;y++){const M=x[v],w=x[y];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++v,x[v]=w)}x.length=v+1;for(let y=0,M=x.length;y<M;y++){const w=x[y];a.bufferSubData(h,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,n(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:o,remove:c,update:u}}var pw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mw=`#ifdef USE_ALPHAHASH
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
#endif`,gw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_w=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yw=`#ifdef USE_AOMAP
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
#endif`,Sw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bw=`#ifdef USE_BATCHING
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
#endif`,Mw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ew=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Aw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ww=`#ifdef USE_IRIDESCENCE
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
#endif`,Rw=`#ifdef USE_BUMPMAP
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
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ow=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bw=`#define PI 3.141592653589793
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
} // validated`,Fw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zw=`vec3 transformedNormal = objectNormal;
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
#endif`,Hw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ww=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qw=`#ifdef USE_ENVMAP
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
#endif`,Yw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jw=`#ifdef USE_ENVMAP
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
#endif`,Zw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kw=`#ifdef USE_ENVMAP
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
#endif`,Qw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$w=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tR=`#ifdef USE_GRADIENTMAP
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
}`,nR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sR=`#ifdef USE_ENVMAP
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
#endif`,oR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fR=`PhysicalMaterial material;
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
#endif`,dR=`uniform sampler2D dfgLUT;
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
}`,hR=`
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
#endif`,pR=`#if defined( RE_IndirectDiffuse )
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
#endif`,mR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gR=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_R=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ER=`#if defined( USE_POINTS_UV )
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
#endif`,TR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DR=`#ifdef USE_MORPHTARGETS
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
#endif`,NR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,BR=`#ifdef USE_NORMALMAP
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
#endif`,FR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$R=`float getShadowMask() {
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
}`,eC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tC=`#ifdef USE_SKINNING
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
#endif`,nC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iC=`#ifdef USE_SKINNING
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
#endif`,aC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lC=`#ifdef USE_TRANSMISSION
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
#endif`,cC=`#ifdef USE_TRANSMISSION
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
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mC=`uniform sampler2D t2D;
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
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_C=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yC=`#include <common>
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
}`,SC=`#if DEPTH_PACKING == 3200
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
}`,bC=`#define DISTANCE
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
}`,MC=`#define DISTANCE
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
}`,EC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AC=`uniform float scale;
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
}`,wC=`uniform vec3 diffuse;
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
}`,RC=`#include <common>
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
}`,CC=`uniform vec3 diffuse;
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
}`,DC=`#define LAMBERT
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
}`,NC=`#define LAMBERT
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
}`,UC=`#define MATCAP
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
}`,LC=`#define MATCAP
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
}`,OC=`#define NORMAL
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
}`,PC=`#define NORMAL
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
}`,IC=`#define PHONG
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
}`,BC=`#define PHONG
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
}`,FC=`#define STANDARD
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
}`,zC=`#define STANDARD
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
}`,HC=`#define TOON
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
}`,GC=`#define TOON
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
}`,VC=`uniform float size;
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
}`,kC=`uniform vec3 diffuse;
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
}`,XC=`#include <common>
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
}`,WC=`uniform vec3 color;
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
}`,qC=`uniform float rotation;
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
}`,YC=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:pw,alphahash_pars_fragment:mw,alphamap_fragment:gw,alphamap_pars_fragment:vw,alphatest_fragment:xw,alphatest_pars_fragment:_w,aomap_fragment:yw,aomap_pars_fragment:Sw,batching_pars_vertex:bw,batching_vertex:Mw,begin_vertex:Ew,beginnormal_vertex:Tw,bsdfs:Aw,iridescence_fragment:ww,bumpmap_pars_fragment:Rw,clipping_planes_fragment:Cw,clipping_planes_pars_fragment:Dw,clipping_planes_pars_vertex:Nw,clipping_planes_vertex:Uw,color_fragment:Lw,color_pars_fragment:Ow,color_pars_vertex:Pw,color_vertex:Iw,common:Bw,cube_uv_reflection_fragment:Fw,defaultnormal_vertex:zw,displacementmap_pars_vertex:Hw,displacementmap_vertex:Gw,emissivemap_fragment:Vw,emissivemap_pars_fragment:kw,colorspace_fragment:Xw,colorspace_pars_fragment:Ww,envmap_fragment:qw,envmap_common_pars_fragment:Yw,envmap_pars_fragment:jw,envmap_pars_vertex:Zw,envmap_physical_pars_fragment:sR,envmap_vertex:Kw,fog_vertex:Qw,fog_pars_vertex:Jw,fog_fragment:$w,fog_pars_fragment:eR,gradientmap_pars_fragment:tR,lightmap_pars_fragment:nR,lights_lambert_fragment:iR,lights_lambert_pars_fragment:aR,lights_pars_begin:rR,lights_toon_fragment:oR,lights_toon_pars_fragment:lR,lights_phong_fragment:cR,lights_phong_pars_fragment:uR,lights_physical_fragment:fR,lights_physical_pars_fragment:dR,lights_fragment_begin:hR,lights_fragment_maps:pR,lights_fragment_end:mR,lightprobes_pars_fragment:gR,logdepthbuf_fragment:vR,logdepthbuf_pars_fragment:xR,logdepthbuf_pars_vertex:_R,logdepthbuf_vertex:yR,map_fragment:SR,map_pars_fragment:bR,map_particle_fragment:MR,map_particle_pars_fragment:ER,metalnessmap_fragment:TR,metalnessmap_pars_fragment:AR,morphinstance_vertex:wR,morphcolor_vertex:RR,morphnormal_vertex:CR,morphtarget_pars_vertex:DR,morphtarget_vertex:NR,normal_fragment_begin:UR,normal_fragment_maps:LR,normal_pars_fragment:OR,normal_pars_vertex:PR,normal_vertex:IR,normalmap_pars_fragment:BR,clearcoat_normal_fragment_begin:FR,clearcoat_normal_fragment_maps:zR,clearcoat_pars_fragment:HR,iridescence_pars_fragment:GR,opaque_fragment:VR,packing:kR,premultiplied_alpha_fragment:XR,project_vertex:WR,dithering_fragment:qR,dithering_pars_fragment:YR,roughnessmap_fragment:jR,roughnessmap_pars_fragment:ZR,shadowmap_pars_fragment:KR,shadowmap_pars_vertex:QR,shadowmap_vertex:JR,shadowmask_pars_fragment:$R,skinbase_vertex:eC,skinning_pars_vertex:tC,skinning_vertex:nC,skinnormal_vertex:iC,specularmap_fragment:aC,specularmap_pars_fragment:rC,tonemapping_fragment:sC,tonemapping_pars_fragment:oC,transmission_fragment:lC,transmission_pars_fragment:cC,uv_pars_fragment:uC,uv_pars_vertex:fC,uv_vertex:dC,worldpos_vertex:hC,background_vert:pC,background_frag:mC,backgroundCube_vert:gC,backgroundCube_frag:vC,cube_vert:xC,cube_frag:_C,depth_vert:yC,depth_frag:SC,distance_vert:bC,distance_frag:MC,equirect_vert:EC,equirect_frag:TC,linedashed_vert:AC,linedashed_frag:wC,meshbasic_vert:RC,meshbasic_frag:CC,meshlambert_vert:DC,meshlambert_frag:NC,meshmatcap_vert:UC,meshmatcap_frag:LC,meshnormal_vert:OC,meshnormal_frag:PC,meshphong_vert:IC,meshphong_frag:BC,meshphysical_vert:FC,meshphysical_frag:zC,meshtoon_vert:HC,meshtoon_frag:GC,points_vert:VC,points_frag:kC,shadow_vert:XC,shadow_frag:WC,sprite_vert:qC,sprite_frag:YC},Ie={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ki={basic:{uniforms:kn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:kn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:kn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:kn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:kn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new lt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:kn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:kn([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:kn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:kn([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:kn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:kn([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:kn([Ie.common,Ie.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:kn([Ie.lights,Ie.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ki.physical={uniforms:kn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const vu={r:0,b:0,g:0},jC=new un,NS=new ot;NS.set(-1,0,0,0,1,0,0,0,1);function ZC(a,e,n,r,o,c){const u=new lt(0);let d=o===!0?0:1,m,h,g=null,x=0,v=null;function y(R){let U=R.isScene===!0?R.background:null;if(U&&U.isTexture){const A=R.backgroundBlurriness>0;U=e.get(U,A)}return U}function M(R){let U=!1;const A=y(R);A===null?S(u,d):A&&A.isColor&&(S(A,1),U=!0);const P=a.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(R,U){const A=y(U);A&&(A.isCubeTexture||A.mapping===qu)?(h===void 0&&(h=new Wn(new Ol(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:ho(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jC.makeRotationFromEuler(U.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(NS),h.material.toneMapped=Et.getTransfer(A.colorSpace)!==Ft,(g!==A||x!==A.version||v!==a.toneMapping)&&(h.material.needsUpdate=!0,g=A,x=A.version,v=a.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Wn(new ju(2,2),new Gi({name:"BackgroundMaterial",uniforms:ho(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Et.getTransfer(A.colorSpace)!==Ft,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||x!==A.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=A,x=A.version,v=a.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function S(R,U){R.getRGB(vu,AS(a)),n.buffers.color.setClear(vu.r,vu.g,vu.b,U,c)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,U=1){u.set(R),d=U,S(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,S(u,d)},render:M,addToRenderList:w,dispose:_}}function KC(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function d(k,j,ce,ue,K){let H=!1;const F=x(k,ue,ce,j);c!==F&&(c=F,h(c.object)),H=y(k,ue,ce,K),H&&M(k,ue,ce,K),K!==null&&e.update(K,a.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,A(k,j,ce,ue),K!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function m(){return a.createVertexArray()}function h(k){return a.bindVertexArray(k)}function g(k){return a.deleteVertexArray(k)}function x(k,j,ce,ue){const K=ue.wireframe===!0;let H=r[j.id];H===void 0&&(H={},r[j.id]=H);const F=k.isInstancedMesh===!0?k.id:0;let $=H[F];$===void 0&&($={},H[F]=$);let ge=$[ce.id];ge===void 0&&(ge={},$[ce.id]=ge);let ye=ge[K];return ye===void 0&&(ye=v(m()),ge[K]=ye),ye}function v(k){const j=[],ce=[],ue=[];for(let K=0;K<n;K++)j[K]=0,ce[K]=0,ue[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ce,attributeDivisors:ue,object:k,attributes:{},index:null}}function y(k,j,ce,ue){const K=c.attributes,H=j.attributes;let F=0;const $=ce.getAttributes();for(const ge in $)if($[ge].location>=0){const I=K[ge];let Q=H[ge];if(Q===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor)),I===void 0||I.attribute!==Q||Q&&I.data!==Q.data)return!0;F++}return c.attributesNum!==F||c.index!==ue}function M(k,j,ce,ue){const K={},H=j.attributes;let F=0;const $=ce.getAttributes();for(const ge in $)if($[ge].location>=0){let I=H[ge];I===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(I=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(I=k.instanceColor));const Q={};Q.attribute=I,I&&I.data&&(Q.data=I.data),K[ge]=Q,F++}c.attributes=K,c.attributesNum=F,c.index=ue}function w(){const k=c.newAttributes;for(let j=0,ce=k.length;j<ce;j++)k[j]=0}function S(k){_(k,0)}function _(k,j){const ce=c.newAttributes,ue=c.enabledAttributes,K=c.attributeDivisors;ce[k]=1,ue[k]===0&&(a.enableVertexAttribArray(k),ue[k]=1),K[k]!==j&&(a.vertexAttribDivisor(k,j),K[k]=j)}function R(){const k=c.newAttributes,j=c.enabledAttributes;for(let ce=0,ue=j.length;ce<ue;ce++)j[ce]!==k[ce]&&(a.disableVertexAttribArray(ce),j[ce]=0)}function U(k,j,ce,ue,K,H,F){F===!0?a.vertexAttribIPointer(k,j,ce,K,H):a.vertexAttribPointer(k,j,ce,ue,K,H)}function A(k,j,ce,ue){w();const K=ue.attributes,H=ce.getAttributes(),F=j.defaultAttributeValues;for(const $ in H){const ge=H[$];if(ge.location>=0){let ye=K[$];if(ye===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(ye=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(ye=k.instanceColor)),ye!==void 0){const I=ye.normalized,Q=ye.itemSize,Te=e.get(ye);if(Te===void 0)continue;const Ce=Te.buffer,Be=Te.type,re=Te.bytesPerElement,be=Be===a.INT||Be===a.UNSIGNED_INT||ye.gpuType===Tm;if(ye.isInterleavedBufferAttribute){const Ee=ye.data,Ge=Ee.stride,at=ye.offset;if(Ee.isInstancedInterleavedBuffer){for(let Qe=0;Qe<ge.locationSize;Qe++)_(ge.location+Qe,Ee.meshPerAttribute);k.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Qe=0;Qe<ge.locationSize;Qe++)S(ge.location+Qe);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let Qe=0;Qe<ge.locationSize;Qe++)U(ge.location+Qe,Q/ge.locationSize,Be,I,Ge*re,(at+Q/ge.locationSize*Qe)*re,be)}else{if(ye.isInstancedBufferAttribute){for(let Ee=0;Ee<ge.locationSize;Ee++)_(ge.location+Ee,ye.meshPerAttribute);k.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ee=0;Ee<ge.locationSize;Ee++)S(ge.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let Ee=0;Ee<ge.locationSize;Ee++)U(ge.location+Ee,Q/ge.locationSize,Be,I,Q*re,Q/ge.locationSize*Ee*re,be)}}else if(F!==void 0){const I=F[$];if(I!==void 0)switch(I.length){case 2:a.vertexAttrib2fv(ge.location,I);break;case 3:a.vertexAttrib3fv(ge.location,I);break;case 4:a.vertexAttrib4fv(ge.location,I);break;default:a.vertexAttrib1fv(ge.location,I)}}}}R()}function P(){O();for(const k in r){const j=r[k];for(const ce in j){const ue=j[ce];for(const K in ue){const H=ue[K];for(const F in H)g(H[F].object),delete H[F];delete ue[K]}}delete r[k]}}function L(k){if(r[k.id]===void 0)return;const j=r[k.id];for(const ce in j){const ue=j[ce];for(const K in ue){const H=ue[K];for(const F in H)g(H[F].object),delete H[F];delete ue[K]}}delete r[k.id]}function B(k){for(const j in r){const ce=r[j];for(const ue in ce){const K=ce[ue];if(K[k.id]===void 0)continue;const H=K[k.id];for(const F in H)g(H[F].object),delete H[F];delete K[k.id]}}}function T(k){for(const j in r){const ce=r[j],ue=k.isInstancedMesh===!0?k.id:0,K=ce[ue];if(K!==void 0){for(const H in K){const F=K[H];for(const $ in F)g(F[$].object),delete F[$];delete K[H]}delete ce[ue],Object.keys(ce).length===0&&delete r[j]}}}function O(){V(),u=!0,c!==o&&(c=o,h(c.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:O,resetDefaultState:V,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:S,disableUnusedAttributes:R}}function QC(a,e,n){let r;function o(m){r=m}function c(m,h){a.drawArrays(r,m,h),n.update(h,r,1)}function u(m,h,g){g!==0&&(a.drawArraysInstanced(r,m,h,g),n.update(h,r,g))}function d(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,g);let v=0;for(let y=0;y<g;y++)v+=h[y];n.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function JC(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==zi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const T=B===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==wi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Qi&&!T)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=m(h);g!==h&&(it("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const x=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),R=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),U=a.getParameter(a.MAX_VARYING_VECTORS),A=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),P=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:R,maxVaryings:U,maxFragmentUniforms:A,maxSamples:P,samples:L}}function $C(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Zr,d=new ot,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const y=x.length!==0||v||r!==0||o;return o=v,r=x.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){n=g(x,v,0)},this.setState=function(x,v,y){const M=x.clippingPlanes,w=x.clipIntersection,S=x.clipShadows,_=a.get(x);if(!o||M===null||M.length===0||c&&!S)c?g(null):h();else{const R=c?0:r,U=R*4;let A=_.clippingState||null;m.value=A,A=g(M,v,U,y);for(let P=0;P!==U;++P)A[P]=n[P];_.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,v,y,M){const w=x!==null?x.length:0;let S=null;if(w!==0){if(S=m.value,M!==!0||S===null){const _=y+w*4,R=v.matrixWorldInverse;d.getNormalMatrix(R),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,A=y;U!==w;++U,A+=4)u.copy(x[U]).applyMatrix4(R,d),u.normal.toArray(S,A),S[A+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}const yr=4,I_=[.125,.215,.35,.446,.526,.582],Jr=20,e2=256,_l=new RS,B_=new lt;let jh=null,Zh=0,Kh=0,Qh=!1;const t2=new X;class F_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:d=t2}=c;jh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jh,Zh,Kh),this._renderer.xr.enabled=Qh,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Pa,format:zi,colorSpace:Ou,depthBuffer:!1},o=z_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z_(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n2(c)),this._blurMaterial=a2(c,e,n),this._ggxMaterial=i2(c,e,n)}return o}_compileMaterial(e){const n=new Wn(new Pn,e);this._renderer.compile(n,_l)}_sceneToCubeUV(e,n,r,o,c){const m=new ti(90,1,n,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,y=x.toneMapping;x.getClearColor(B_),x.toneMapping=$i,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wn(new Ol,new lo({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let _=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,_=!0):(S.color.copy(B_),_=!0);for(let U=0;U<6;U++){const A=U%3;A===0?(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):A===1?(m.up.set(0,0,h[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const P=this._cubeSize;$s(o,A*P,U>2?P:0,P,P),x.setRenderTarget(o),_&&x.render(w,m),x.render(e,m)}x.toneMapping=y,x.autoClear=v,e.background=R}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===is||e.mapping===uo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;$s(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,_l)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,h=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),x=Math.sqrt(h*h-g*g),v=0+h*1.25,y=x*v,{_lodMax:M}=this,w=this._sizeLods[r],S=3*w*(r>M-yr?r-M+yr:0),_=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=M-n,$s(c,S,_,3*w,2*w),o.setRenderTarget(c),o.render(d,_l),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-r,$s(e,S,_,3*w,2*w),o.setRenderTarget(e),o.render(d,_l)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,d){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=h;const v=h.uniforms,y=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Jr-1),w=c/M,S=isFinite(c)?1+Math.floor(g*w):Jr;S>Jr&&it(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Jr}`);const _=[];let R=0;for(let B=0;B<Jr;++B){const T=B/w,O=Math.exp(-T*T/2);_.push(O),B===0?R+=O:B<S&&(R+=2*O)}for(let B=0;B<_.length;B++)_[B]=_[B]/R;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:U}=this;v.dTheta.value=M,v.mipInt.value=U-r;const A=this._sizeLods[o],P=3*A*(o>U-yr?o-U+yr:0),L=4*(this._cubeSize-A);$s(n,P,L,3*A,2*A),m.setRenderTarget(n),m.render(x,_l)}}function n2(a){const e=[],n=[],r=[];let o=a;const c=a-yr+1+I_.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>a-yr?m=I_[u-a+yr-1]:u===0&&(m=0),n.push(m);const h=1/(d-2),g=-h,x=1+h,v=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,M=6,w=3,S=2,_=1,R=new Float32Array(w*M*y),U=new Float32Array(S*M*y),A=new Float32Array(_*M*y);for(let L=0;L<y;L++){const B=L%3*2/3-1,T=L>2?0:-1,O=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];R.set(O,w*M*L),U.set(v,S*M*L);const V=[L,L,L,L,L,L];A.set(V,_*M*L)}const P=new Pn;P.setAttribute("position",new Gn(R,w)),P.setAttribute("uv",new Gn(U,S)),P.setAttribute("faceIndex",new Gn(A,_)),r.push(new Wn(P,null)),o>yr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function z_(a,e,n){const r=new ea(a,e,n);return r.texture.mapping=qu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function $s(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function i2(a,e,n){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function a2(a,e,n){const r=new Float32Array(Jr),o=new X(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function H_(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function G_(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Ku(){return`

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
	`}class US extends ea{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new SS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ol(5,5,5),c=new Gi({name:"CubemapFromEquirect",uniforms:ho(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ni,blending:Ua});c.uniforms.tEquirect.value=n;const u=new Wn(o,c),d=n.minFilter;return n.minFilter===$r&&(n.minFilter=Hn),new uw(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}function r2(a){let e=new WeakMap,n=new WeakMap,r=null;function o(v,y=!1){return v==null?null:y?u(v):c(v)}function c(v){if(v&&v.isTexture){const y=v.mapping;if(y===xh||y===_h)if(e.has(v)){const M=e.get(v).texture;return d(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const w=new US(M.height);return w.fromEquirectangularTexture(a,v),e.set(v,w),v.addEventListener("dispose",h),d(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const y=v.mapping,M=y===xh||y===_h,w=y===is||y===uo;if(M||w){let S=n.get(v);const _=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==_)return r===null&&(r=new F_(a)),S=M?r.fromEquirectangular(v,S):r.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),S.texture;if(S!==void 0)return S.texture;{const R=v.image;return M&&R&&R.height>0||w&&R&&m(R)?(r===null&&(r=new F_(a)),S=M?r.fromEquirectangular(v):r.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function d(v,y){return y===xh?v.mapping=is:y===_h&&(v.mapping=uo),v}function m(v){let y=0;const M=6;for(let w=0;w<M;w++)v[w]!==void 0&&y++;return y===M}function h(v){const y=v.target;y.removeEventListener("dispose",h);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function g(v){const y=v.target;y.removeEventListener("dispose",g);const M=n.get(y);M!==void 0&&(n.delete(y),M.dispose())}function x(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function s2(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&so("WebGLRenderer: "+r+" extension not supported."),o}}}function o2(a,e,n,r){const o={},c=new WeakMap;function u(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(x,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function m(x){const v=x.attributes;for(const y in v)e.update(v[y],a.ARRAY_BUFFER)}function h(x){const v=[],y=x.index,M=x.attributes.position;let w=0;if(M===void 0)return;if(y!==null){const R=y.array;w=y.version;for(let U=0,A=R.length;U<A;U+=3){const P=R[U+0],L=R[U+1],B=R[U+2];v.push(P,L,L,B,B,P)}}else{const R=M.array;w=M.version;for(let U=0,A=R.length/3-1;U<A;U+=3){const P=U+0,L=U+1,B=U+2;v.push(P,L,L,B,B,P)}}const S=new(M.count>=65535?xS:vS)(v,1);S.version=w;const _=c.get(x);_&&e.remove(_),c.set(x,S)}function g(x){const v=c.get(x);if(v){const y=x.index;y!==null&&v.version<y.version&&h(x)}else h(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function l2(a,e,n){let r;function o(x){r=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function m(x,v){a.drawElements(r,v,c,x*u),n.update(v,r,1)}function h(x,v,y){y!==0&&(a.drawElementsInstanced(r,v,c,x*u,y),n.update(v,r,y))}function g(x,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,x,0,y);let w=0;for(let S=0;S<y;S++)w+=v[S];n.update(w,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function c2(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=d*(c/3);break;case a.LINES:n.lines+=d*(c/2);break;case a.LINE_STRIP:n.lines+=d*(c-1);break;case a.LINE_LOOP:n.lines+=d*c;break;case a.POINTS:n.points+=d*c;break;default:Tt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function u2(a,e,n){const r=new WeakMap,o=new cn;function c(u,d,m){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let O=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",O)};v!==void 0&&v.texture.dispose();const y=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let U=0;y===!0&&(U=1),M===!0&&(U=2),w===!0&&(U=3);let A=d.attributes.position.count*U,P=1;A>e.maxTextureSize&&(P=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*P*4*x),B=new pS(L,A,P,x);B.type=Qi,B.needsUpdate=!0;const T=U*4;for(let V=0;V<x;V++){const k=S[V],j=_[V],ce=R[V],ue=A*P*4*V;for(let K=0;K<k.count;K++){const H=K*T;y===!0&&(o.fromBufferAttribute(k,K),L[ue+H+0]=o.x,L[ue+H+1]=o.y,L[ue+H+2]=o.z,L[ue+H+3]=0),M===!0&&(o.fromBufferAttribute(j,K),L[ue+H+4]=o.x,L[ue+H+5]=o.y,L[ue+H+6]=o.z,L[ue+H+7]=0),w===!0&&(o.fromBufferAttribute(ce,K),L[ue+H+8]=o.x,L[ue+H+9]=o.y,L[ue+H+10]=o.z,L[ue+H+11]=ce.itemSize===4?o.w:1)}}v={count:x,texture:B,size:new tt(A,P)},r.set(d,v),d.addEventListener("dispose",O)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let y=0;for(let w=0;w<h.length;w++)y+=h[w];const M=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(a,"morphTargetBaseInfluence",M),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function f2(a,e,n,r,o){let c=new WeakMap;function u(h){const g=o.render.frame,x=h.geometry,v=e.get(h,x);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(n.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const y=h.skeleton;c.get(y)!==g&&(y.update(),c.set(y,g))}return v}function d(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:d}}const d2={[Jy]:"LINEAR_TONE_MAPPING",[$y]:"REINHARD_TONE_MAPPING",[eS]:"CINEON_TONE_MAPPING",[tS]:"ACES_FILMIC_TONE_MAPPING",[iS]:"AGX_TONE_MAPPING",[aS]:"NEUTRAL_TONE_MAPPING",[nS]:"CUSTOM_TONE_MAPPING"};function h2(a,e,n,r,o,c){const u=new ea(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new fo(e,n):void 0}),d=new ea(e,n,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),m=new Pn;m.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new mn([0,2,0,0,2,0],2));const h=new sw({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Wn(m,h),x=new RS(-1,1,1,-1,0,1);let v=null,y=null,M=!1,w,S=null,_=[],R=!1;this.setSize=function(U,A){u.setSize(U,A),d.setSize(U,A);for(let P=0;P<_.length;P++){const L=_[P];L.setSize&&L.setSize(U,A)}},this.setEffects=function(U){_=U,R=_.length>0&&_[0].isRenderPass===!0;const A=u.width,P=u.height;for(let L=0;L<_.length;L++){const B=_[L];B.setSize&&B.setSize(A,P)}},this.begin=function(U,A){if(M||U.toneMapping===$i&&_.length===0)return!1;if(S=A,A!==null){const P=A.width,L=A.height;(u.width!==P||u.height!==L)&&this.setSize(P,L)}return R===!1&&U.setRenderTarget(u),w=U.toneMapping,U.toneMapping=$i,!0},this.hasRenderPass=function(){return R},this.end=function(U,A){U.toneMapping=w,M=!0;let P=u,L=d;for(let B=0;B<_.length;B++){const T=_[B];if(T.enabled!==!1&&(T.render(U,L,P,A),T.needsSwap!==!1)){const O=P;P=L,L=O}}if(v!==U.outputColorSpace||y!==U.toneMapping){v=U.outputColorSpace,y=U.toneMapping,h.defines={},Et.getTransfer(v)===Ft&&(h.defines.SRGB_TRANSFER="");const B=d2[y];B&&(h.defines[B]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,U.setRenderTarget(S),U.render(g,x),S=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),h.dispose()}}const LS=new qn,im=new fo(1,1),OS=new pS,PS=new MA,IS=new SS,V_=[],k_=[],X_=new Float32Array(16),W_=new Float32Array(9),q_=new Float32Array(4);function xo(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=V_[o];if(c===void 0&&(c=new Float32Array(o),V_[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,a[u].toArray(c,d)}return c}function Tn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function An(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Qu(a,e){let n=k_[e];n===void 0&&(n=new Int32Array(e),k_[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function p2(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function m2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;a.uniform2fv(this.addr,e),An(n,e)}}function g2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tn(n,e))return;a.uniform3fv(this.addr,e),An(n,e)}}function v2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;a.uniform4fv(this.addr,e),An(n,e)}}function x2(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;q_.set(r),a.uniformMatrix2fv(this.addr,!1,q_),An(n,r)}}function _2(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;W_.set(r),a.uniformMatrix3fv(this.addr,!1,W_),An(n,r)}}function y2(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),An(n,e)}else{if(Tn(n,r))return;X_.set(r),a.uniformMatrix4fv(this.addr,!1,X_),An(n,r)}}function S2(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function b2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;a.uniform2iv(this.addr,e),An(n,e)}}function M2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;a.uniform3iv(this.addr,e),An(n,e)}}function E2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;a.uniform4iv(this.addr,e),An(n,e)}}function T2(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function A2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tn(n,e))return;a.uniform2uiv(this.addr,e),An(n,e)}}function w2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tn(n,e))return;a.uniform3uiv(this.addr,e),An(n,e)}}function R2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tn(n,e))return;a.uniform4uiv(this.addr,e),An(n,e)}}function C2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(im.compareFunction=n.isReversedDepthBuffer()?Um:Nm,c=im):c=LS,n.setTexture2D(e||c,o)}function D2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||PS,o)}function N2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||IS,o)}function U2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||OS,o)}function L2(a){switch(a){case 5126:return p2;case 35664:return m2;case 35665:return g2;case 35666:return v2;case 35674:return x2;case 35675:return _2;case 35676:return y2;case 5124:case 35670:return S2;case 35667:case 35671:return b2;case 35668:case 35672:return M2;case 35669:case 35673:return E2;case 5125:return T2;case 36294:return A2;case 36295:return w2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return N2;case 36289:case 36303:case 36311:case 36292:return U2}}function O2(a,e){a.uniform1fv(this.addr,e)}function P2(a,e){const n=xo(e,this.size,2);a.uniform2fv(this.addr,n)}function I2(a,e){const n=xo(e,this.size,3);a.uniform3fv(this.addr,n)}function B2(a,e){const n=xo(e,this.size,4);a.uniform4fv(this.addr,n)}function F2(a,e){const n=xo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function z2(a,e){const n=xo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function H2(a,e){const n=xo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function G2(a,e){a.uniform1iv(this.addr,e)}function V2(a,e){a.uniform2iv(this.addr,e)}function k2(a,e){a.uniform3iv(this.addr,e)}function X2(a,e){a.uniform4iv(this.addr,e)}function W2(a,e){a.uniform1uiv(this.addr,e)}function q2(a,e){a.uniform2uiv(this.addr,e)}function Y2(a,e){a.uniform3uiv(this.addr,e)}function j2(a,e){a.uniform4uiv(this.addr,e)}function Z2(a,e,n){const r=this.cache,o=e.length,c=Qu(n,o);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=im:u=LS;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function K2(a,e,n){const r=this.cache,o=e.length,c=Qu(n,o);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||PS,c[u])}function Q2(a,e,n){const r=this.cache,o=e.length,c=Qu(n,o);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||IS,c[u])}function J2(a,e,n){const r=this.cache,o=e.length,c=Qu(n,o);Tn(r,c)||(a.uniform1iv(this.addr,c),An(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||OS,c[u])}function $2(a){switch(a){case 5126:return O2;case 35664:return P2;case 35665:return I2;case 35666:return B2;case 35674:return F2;case 35675:return z2;case 35676:return H2;case 5124:case 35670:return G2;case 35667:case 35671:return V2;case 35668:case 35672:return k2;case 35669:case 35673:return X2;case 5125:return W2;case 36294:return q2;case 36295:return Y2;case 36296:return j2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return K2;case 35680:case 36300:case 36308:case 36293:return Q2;case 36289:case 36303:case 36311:case 36292:return J2}}class e3{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=L2(n.type)}}class t3{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$2(n.type)}}class n3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const Jh=/(\w+)(\])?(\[|\.)?/g;function Y_(a,e){a.seq.push(e),a.map[e.id]=e}function i3(a,e,n){const r=a.name,o=r.length;for(Jh.lastIndex=0;;){const c=Jh.exec(r),u=Jh.lastIndex;let d=c[1];const m=c[2]==="]",h=c[3];if(m&&(d=d|0),h===void 0||h==="["&&u+2===o){Y_(n,h===void 0?new e3(d,a,e):new t3(d,a,e));break}else{let x=n.map[d];x===void 0&&(x=new n3(d),Y_(n,x)),n=x}}}class Ru{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),m=e.getUniformLocation(n,d.name);i3(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function j_(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const a3=37297;let r3=0;function s3(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Z_=new ot;function o3(a){Et._getMatrix(Z_,Et.workingColorSpace,a);const e=`mat3( ${Z_.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(a)){case Pu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function K_(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+s3(a.getShaderSource(e),d)}else return c}function l3(a,e){const n=o3(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const c3={[Jy]:"Linear",[$y]:"Reinhard",[eS]:"Cineon",[tS]:"ACESFilmic",[iS]:"AgX",[aS]:"Neutral",[nS]:"Custom"};function u3(a,e){const n=c3[e];return n===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xu=new X;function f3(){Et.getLuminanceCoefficients(xu);const a=xu.x.toFixed(4),e=xu.y.toFixed(4),n=xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d3(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function h3(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function p3(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return n}function bl(a){return a!==""}function Q_(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J_(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m3=/^[ \t]*#include +<([\w\d./]+)>/gm;function am(a){return a.replace(m3,v3)}const g3=new Map;function v3(a,e){let n=dt[e];if(n===void 0){const r=g3.get(e);if(r!==void 0)n=dt[r],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return am(n)}const x3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $_(a){return a.replace(x3,_3)}function _3(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ey(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const y3={[Mu]:"SHADOWMAP_TYPE_PCF",[Sl]:"SHADOWMAP_TYPE_VSM"};function S3(a){return y3[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const b3={[is]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE",[qu]:"ENVMAP_TYPE_CUBE_UV"};function M3(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":b3[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const E3={[uo]:"ENVMAP_MODE_REFRACTION"};function T3(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":E3[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const A3={[Qy]:"ENVMAP_BLENDING_MULTIPLY",[tA]:"ENVMAP_BLENDING_MIX",[nA]:"ENVMAP_BLENDING_ADD"};function w3(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":A3[a.combine]||"ENVMAP_BLENDING_NONE"}function R3(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function C3(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=S3(n),h=M3(n),g=T3(n),x=w3(n),v=R3(n),y=d3(n),M=h3(c),w=o.createProgram();let S,_,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(bl).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(bl).join(`
`),_.length>0&&(_+=`
`)):(S=[ey(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),_=[ey(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?dt.tonemapping_pars_fragment:"",n.toneMapping!==$i?u3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,l3("linearToOutputTexel",n.outputColorSpace),f3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bl).join(`
`)),u=am(u),u=Q_(u,n),u=J_(u,n),d=am(d),d=Q_(d,n),d=J_(d,n),u=$_(u),d=$_(d),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=R+S+u,A=R+_+d,P=j_(o,o.VERTEX_SHADER,U),L=j_(o,o.FRAGMENT_SHADER,A);o.attachShader(w,P),o.attachShader(w,L),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function B(k){if(a.debug.checkShaderErrors){const j=o.getProgramInfoLog(w)||"",ce=o.getShaderInfoLog(P)||"",ue=o.getShaderInfoLog(L)||"",K=j.trim(),H=ce.trim(),F=ue.trim();let $=!0,ge=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,P,L);else{const ye=K_(o,P,"vertex"),I=K_(o,L,"fragment");Tt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+K+`
`+ye+`
`+I)}else K!==""?it("WebGLProgram: Program Info Log:",K):(H===""||F==="")&&(ge=!1);ge&&(k.diagnostics={runnable:$,programLog:K,vertexShader:{log:H,prefix:S},fragmentShader:{log:F,prefix:_}})}o.deleteShader(P),o.deleteShader(L),T=new Ru(o,w),O=p3(o,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let O;this.getAttributes=function(){return O===void 0&&B(this),O};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(w,a3)),V},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=r3++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=L,this}let D3=0;class N3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new U3(e),n.set(e,r)),r}}class U3{constructor(e){this.id=D3++,this.code=e,this.usedTimes=0}}function L3(a){return a===as||a===Uu||a===Lu}function O3(a,e,n,r,o,c){const u=new mS,d=new N3,m=new Set,h=[],g=new Map,x=r.logarithmicDepthBuffer;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,O,V,k,j,ce){const ue=k.fog,K=j.geometry,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||H,F),ge=$&&$.mapping===qu?$.image.height:null,ye=y[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&it("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const I=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Q=I!==void 0?I.length:0;let Te=0;K.morphAttributes.position!==void 0&&(Te=1),K.morphAttributes.normal!==void 0&&(Te=2),K.morphAttributes.color!==void 0&&(Te=3);let Ce,Be,re,be;if(ye){const ke=Ki[ye];Ce=ke.vertexShader,Be=ke.fragmentShader}else{Ce=T.vertexShader,Be=T.fragmentShader;const ke=d.getVertexShaderStage(T),Kt=d.getFragmentShaderStage(T);d.update(T,ke,Kt),re=ke.id,be=Kt.id}const Ee=a.getRenderTarget(),Ge=a.state.buffers.depth.getReversed(),at=j.isInstancedMesh===!0,Qe=j.isBatchedMesh===!0,qt=!!T.map,ht=!!T.matcap,St=!!$,bt=!!T.aoMap,pt=!!T.lightMap,nn=!!T.bumpMap&&T.wireframe===!1,an=!!T.normalMap,rn=!!T.displacementMap,fn=!!T.emissiveMap,Wt=!!T.metalnessMap,sn=!!T.roughnessMap,Z=T.anisotropy>0,zt=T.clearcoat>0,Ct=T.dispersion>0,z=T.iridescence>0,E=T.sheen>0,ee=T.transmission>0,se=Z&&!!T.anisotropyMap,pe=zt&&!!T.clearcoatMap,Ae=zt&&!!T.clearcoatNormalMap,Ne=zt&&!!T.clearcoatRoughnessMap,he=z&&!!T.iridescenceMap,me=z&&!!T.iridescenceThicknessMap,Re=E&&!!T.sheenColorMap,ze=E&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Ue=!!T.specularColorMap,Ke=!!T.specularIntensityMap,Je=ee&&!!T.transmissionMap,rt=ee&&!!T.thicknessMap,q=!!T.gradientMap,we=!!T.alphaMap,xe=T.alphaTest>0,De=!!T.alphaHash,Fe=!!T.extensions;let Me=$i;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Me=a.toneMapping);const Ye={shaderID:ye,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Be,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Qe,batchingColor:Qe&&j._colorsTexture!==null,instancing:at,instancingColor:at&&j.instanceColor!==null,instancingMorph:at&&j.morphTexture!==null,outputColorSpace:Ee===null?a.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:qt,matcap:ht,envMap:St,envMapMode:St&&$.mapping,envMapCubeUVHeight:ge,aoMap:bt,lightMap:pt,bumpMap:nn,normalMap:an,displacementMap:rn,emissiveMap:fn,normalMapObjectSpace:an&&T.normalMapType===rA,normalMapTangentSpace:an&&T.normalMapType===em,packedNormalMap:an&&T.normalMapType===em&&L3(T.normalMap.format),metalnessMap:Wt,roughnessMap:sn,anisotropy:Z,anisotropyMap:se,clearcoat:zt,clearcoatMap:pe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ne,dispersion:Ct,iridescence:z,iridescenceMap:he,iridescenceThicknessMap:me,sheen:E,sheenColorMap:Re,sheenRoughnessMap:ze,specularMap:Oe,specularColorMap:Ue,specularIntensityMap:Ke,transmission:ee,transmissionMap:Je,thicknessMap:rt,gradientMap:q,opaque:T.transparent===!1&&T.blending===ns&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:xe,alphaHash:De,combine:T.combine,mapUv:qt&&M(T.map.channel),aoMapUv:bt&&M(T.aoMap.channel),lightMapUv:pt&&M(T.lightMap.channel),bumpMapUv:nn&&M(T.bumpMap.channel),normalMapUv:an&&M(T.normalMap.channel),displacementMapUv:rn&&M(T.displacementMap.channel),emissiveMapUv:fn&&M(T.emissiveMap.channel),metalnessMapUv:Wt&&M(T.metalnessMap.channel),roughnessMapUv:sn&&M(T.roughnessMap.channel),anisotropyMapUv:se&&M(T.anisotropyMap.channel),clearcoatMapUv:pe&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(T.sheenRoughnessMap.channel),specularMapUv:Oe&&M(T.specularMap.channel),specularColorMapUv:Ue&&M(T.specularColorMap.channel),specularIntensityMapUv:Ke&&M(T.specularIntensityMap.channel),transmissionMapUv:Je&&M(T.transmissionMap.channel),thicknessMapUv:rt&&M(T.thicknessMap.channel),alphaMapUv:we&&M(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(an||Z),vertexNormals:!!K.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!K.attributes.uv&&(qt||we),fog:!!ue,useFog:T.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||K.attributes.normal===void 0&&an===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ge,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Te,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:Me,decodeVideoTexture:qt&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Ft,decodeVideoTextureEmissive:fn&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===Ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Da,flipSided:T.side===ni,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function S(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)O.push(V),O.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(_(O,T),R(O,T),O.push(a.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function _(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function R(T,O){u.disableAll(),O.instancing&&u.enable(0),O.instancingColor&&u.enable(1),O.instancingMorph&&u.enable(2),O.matcap&&u.enable(3),O.envMap&&u.enable(4),O.normalMapObjectSpace&&u.enable(5),O.normalMapTangentSpace&&u.enable(6),O.clearcoat&&u.enable(7),O.iridescence&&u.enable(8),O.alphaTest&&u.enable(9),O.vertexColors&&u.enable(10),O.vertexAlphas&&u.enable(11),O.vertexUv1s&&u.enable(12),O.vertexUv2s&&u.enable(13),O.vertexUv3s&&u.enable(14),O.vertexTangents&&u.enable(15),O.anisotropy&&u.enable(16),O.alphaHash&&u.enable(17),O.batching&&u.enable(18),O.dispersion&&u.enable(19),O.batchingColor&&u.enable(20),O.gradientMap&&u.enable(21),O.packedNormalMap&&u.enable(22),O.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),O.fog&&u.enable(0),O.useFog&&u.enable(1),O.flatShading&&u.enable(2),O.logarithmicDepthBuffer&&u.enable(3),O.reversedDepthBuffer&&u.enable(4),O.skinning&&u.enable(5),O.morphTargets&&u.enable(6),O.morphNormals&&u.enable(7),O.morphColors&&u.enable(8),O.premultipliedAlpha&&u.enable(9),O.shadowMapEnabled&&u.enable(10),O.doubleSided&&u.enable(11),O.flipSided&&u.enable(12),O.useDepthPacking&&u.enable(13),O.dithering&&u.enable(14),O.transmission&&u.enable(15),O.sheen&&u.enable(16),O.opaque&&u.enable(17),O.pointsUvs&&u.enable(18),O.decodeVideoTexture&&u.enable(19),O.decodeVideoTextureEmissive&&u.enable(20),O.alphaToCoverage&&u.enable(21),O.numLightProbeGrids>0&&u.enable(22),O.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function U(T){const O=y[T.type];let V;if(O){const k=Ki[O];V=iw.clone(k.uniforms)}else V=T.uniforms;return V}function A(T,O){let V=g.get(O);return V!==void 0?++V.usedTimes:(V=new C3(a,O,T,o),h.push(V),g.set(O,V)),V}function P(T){if(--T.usedTimes===0){const O=h.indexOf(T);h[O]=h[h.length-1],h.pop(),g.delete(T.cacheKey),T.destroy()}}function L(T){d.remove(T)}function B(){d.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:U,acquireProgram:A,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:B}}function P3(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,m){a.get(u)[d]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function I3(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function ty(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ny(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function d(v,y,M,w,S,_){let R=a[e];return R===void 0?(R={id:v.id,object:v,geometry:y,material:M,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:S,group:_},a[e]=R):(R.id=v.id,R.object=v,R.geometry=y,R.material=M,R.materialVariant=u(v),R.groupOrder=w,R.renderOrder=v.renderOrder,R.z=S,R.group=_),e++,R}function m(v,y,M,w,S,_){const R=d(v,y,M,w,S,_);M.transmission>0?r.push(R):M.transparent===!0?o.push(R):n.push(R)}function h(v,y,M,w,S,_){const R=d(v,y,M,w,S,_);M.transmission>0?r.unshift(R):M.transparent===!0?o.unshift(R):n.unshift(R)}function g(v,y,M){n.length>1&&n.sort(v||I3),r.length>1&&r.sort(y||ty),o.length>1&&o.sort(y||ty),M&&(n.reverse(),r.reverse(),o.reverse())}function x(){for(let v=e,y=a.length;v<y;v++){const M=a[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:m,unshift:h,finish:x,sort:g}}function B3(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new ny,a.set(r,[u])):o>=c.length?(u=new ny,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function F3(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new lt};break;case"SpotLight":n={position:new X,direction:new X,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new X,halfWidth:new X,halfHeight:new X};break}return a[e.id]=n,n}}}function z3(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let H3=0;function G3(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function V3(a){const e=new F3,n=z3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new X);const o=new X,c=new un,u=new un;function d(h){let g=0,x=0,v=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let y=0,M=0,w=0,S=0,_=0,R=0,U=0,A=0,P=0,L=0,B=0;h.sort(G3);for(let O=0,V=h.length;O<V;O++){const k=h[O],j=k.color,ce=k.intensity,ue=k.distance;let K=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===as?K=k.shadow.map.texture:K=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=j.r*ce,x+=j.g*ce,v+=j.b*ce;else if(k.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(k.sh.coefficients[H],ce);B++}else if(k.isDirectionalLight){const H=e.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const F=k.shadow,$=n.get(k);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,r.directionalShadow[y]=$,r.directionalShadowMap[y]=K,r.directionalShadowMatrix[y]=k.shadow.matrix,R++}r.directional[y]=H,y++}else if(k.isSpotLight){const H=e.get(k);H.position.setFromMatrixPosition(k.matrixWorld),H.color.copy(j).multiplyScalar(ce),H.distance=ue,H.coneCos=Math.cos(k.angle),H.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),H.decay=k.decay,r.spot[w]=H;const F=k.shadow;if(k.map&&(r.spotLightMap[P]=k.map,P++,F.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[w]=F.matrix,k.castShadow){const $=n.get(k);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,r.spotShadow[w]=$,r.spotShadowMap[w]=K,A++}w++}else if(k.isRectAreaLight){const H=e.get(k);H.color.copy(j).multiplyScalar(ce),H.halfWidth.set(k.width*.5,0,0),H.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=H,S++}else if(k.isPointLight){const H=e.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),H.distance=k.distance,H.decay=k.decay,k.castShadow){const F=k.shadow,$=n.get(k);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,r.pointShadow[M]=$,r.pointShadowMap[M]=K,r.pointShadowMatrix[M]=k.shadow.matrix,U++}r.point[M]=H,M++}else if(k.isHemisphereLight){const H=e.get(k);H.skyColor.copy(k.color).multiplyScalar(ce),H.groundColor.copy(k.groundColor).multiplyScalar(ce),r.hemi[_]=H,_++}}S>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==y||T.pointLength!==M||T.spotLength!==w||T.rectAreaLength!==S||T.hemiLength!==_||T.numDirectionalShadows!==R||T.numPointShadows!==U||T.numSpotShadows!==A||T.numSpotMaps!==P||T.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=S,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=A+P-L,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,T.directionalLength=y,T.pointLength=M,T.spotLength=w,T.rectAreaLength=S,T.hemiLength=_,T.numDirectionalShadows=R,T.numPointShadows=U,T.numSpotShadows=A,T.numSpotMaps=P,T.numLightProbes=B,r.version=H3++)}function m(h,g){let x=0,v=0,y=0,M=0,w=0;const S=g.matrixWorldInverse;for(let _=0,R=h.length;_<R;_++){const U=h[_];if(U.isDirectionalLight){const A=r.directional[x];A.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),x++}else if(U.isSpotLight){const A=r.spot[y];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const A=r.rectArea[M];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(S),u.identity(),c.copy(U.matrixWorld),c.premultiply(S),u.extractRotation(c),A.halfWidth.set(U.width*.5,0,0),A.halfHeight.set(0,U.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const A=r.hemi[w];A.direction.setFromMatrixPosition(U.matrixWorld),A.direction.transformDirection(S),w++}}}return{setup:d,setupView:m,state:r}}function iy(a){const e=new V3(a),n=[],r=[],o=[];function c(v){x.camera=v,n.length=0,r.length=0,o.length=0}function u(v){n.push(v)}function d(v){r.push(v)}function m(v){o.push(v)}function h(){e.setup(n)}function g(v){e.setupView(n,v)}const x={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function k3(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new iy(a),e.set(o,[d])):c>=u.length?(d=new iy(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const X3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W3=`uniform sampler2D shadow_pass;
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
}`,q3=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Y3=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],ay=new un,yl=new X,$h=new X;function j3(a,e,n){let r=new yS;const o=new tt,c=new tt,u=new cn,d=new lw,m=new cw,h={},g=n.maxTextureSize,x={[Mr]:ni,[ni]:Mr,[Da]:Da},v=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:X3,fragmentShader:W3}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new Pn;M.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Wn(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let _=this.type;this.render=function(L,B,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===IT&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Mu);const O=a.getRenderTarget(),V=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),j=a.state;j.setBlending(Ua),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ce=_!==this.type;ce&&B.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(K=>K.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,K=L.length;ue<K;ue++){const H=L[ue],F=H.shadow;if(F===void 0){it("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const $=F.getFrameExtents();o.multiply($),c.copy(F.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,F.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,F.mapSize.y=c.y));const ge=a.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ge,F.map===null||ce===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Sl){if(H.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ea(o.x,o.y,{format:as,type:Pa,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new fo(o.x,o.y,Qi),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=Ia,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=On,F.map.depthTexture.magFilter=On}else H.isPointLight?(F.map=new US(o.x),F.map.depthTexture=new HA(o.x,na)):(F.map=new ea(o.x,o.y),F.map.depthTexture=new fo(o.x,o.y,na)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=Ia,this.type===Mu?(F.map.depthTexture.compareFunction=ge?Um:Nm,F.map.depthTexture.minFilter=Hn,F.map.depthTexture.magFilter=Hn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=On,F.map.depthTexture.magFilter=On);F.camera.updateProjectionMatrix()}const ye=F.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<ye;I++){if(F.map.isWebGLCubeRenderTarget)a.setRenderTarget(F.map,I),a.clear();else{I===0&&(a.setRenderTarget(F.map),a.clear());const Q=F.getViewport(I);u.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),j.viewport(u)}if(H.isPointLight){const Q=F.camera,Te=F.matrix,Ce=H.distance||Q.far;Ce!==Q.far&&(Q.far=Ce,Q.updateProjectionMatrix()),yl.setFromMatrixPosition(H.matrixWorld),Q.position.copy(yl),$h.copy(Q.position),$h.add(q3[I]),Q.up.copy(Y3[I]),Q.lookAt($h),Q.updateMatrixWorld(),Te.makeTranslation(-yl.x,-yl.y,-yl.z),ay.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ay,Q.coordinateSystem,Q.reversedDepth)}else F.updateMatrices(H);r=F.getFrustum(),A(B,T,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===Sl&&R(F,T),F.needsUpdate=!1}_=this.type,S.needsUpdate=!1,a.setRenderTarget(O,V,k)};function R(L,B){const T=e.update(w);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ea(o.x,o.y,{format:as,type:Pa})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(B,null,T,v,w,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(B,null,T,y,w,null)}function U(L,B,T,O){let V=null;const k=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)V=k;else if(V=T.isPointLight===!0?m:d,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const j=V.uuid,ce=B.uuid;let ue=h[j];ue===void 0&&(ue={},h[j]=ue);let K=ue[ce];K===void 0&&(K=V.clone(),ue[ce]=K,B.addEventListener("dispose",P)),V=K}if(V.visible=B.visible,V.wireframe=B.wireframe,O===Sl?V.side=B.shadowSide!==null?B.shadowSide:B.side:V.side=B.shadowSide!==null?B.shadowSide:x[B.side],V.alphaMap=B.alphaMap,V.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,V.map=B.map,V.clipShadows=B.clipShadows,V.clippingPlanes=B.clippingPlanes,V.clipIntersection=B.clipIntersection,V.displacementMap=B.displacementMap,V.displacementScale=B.displacementScale,V.displacementBias=B.displacementBias,V.wireframeLinewidth=B.wireframeLinewidth,V.linewidth=B.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const j=a.properties.get(V);j.light=T}return V}function A(L,B,T,O,V){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&V===Sl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const ce=e.update(L),ue=L.material;if(Array.isArray(ue)){const K=ce.groups;for(let H=0,F=K.length;H<F;H++){const $=K[H],ge=ue[$.materialIndex];if(ge&&ge.visible){const ye=U(L,ge,O,V);L.onBeforeShadow(a,L,B,T,ce,ye,$),a.renderBufferDirect(T,null,ce,ye,L,$),L.onAfterShadow(a,L,B,T,ce,ye,$)}}}else if(ue.visible){const K=U(L,ue,O,V);L.onBeforeShadow(a,L,B,T,ce,K,null),a.renderBufferDirect(T,null,ce,K,L,null),L.onAfterShadow(a,L,B,T,ce,K,null)}}const j=L.children;for(let ce=0,ue=j.length;ce<ue;ce++)A(j[ce],B,T,O,V)}function P(L){L.target.removeEventListener("dispose",P);for(const T in h){const O=h[T],V=L.target.uuid;V in O&&(O[V].dispose(),delete O[V])}}}function Z3(a,e){function n(){let q=!1;const we=new cn;let xe=null;const De=new cn(0,0,0,0);return{setMask:function(Fe){xe!==Fe&&!q&&(a.colorMask(Fe,Fe,Fe,Fe),xe=Fe)},setLocked:function(Fe){q=Fe},setClear:function(Fe,Me,Ye,ke,Kt){Kt===!0&&(Fe*=ke,Me*=ke,Ye*=ke),we.set(Fe,Me,Ye,ke),De.equals(we)===!1&&(a.clearColor(Fe,Me,Ye,ke),De.copy(we))},reset:function(){q=!1,xe=null,De.set(-1,0,0,0)}}}function r(){let q=!1,we=!1,xe=null,De=null,Fe=null;return{setReversed:function(Me){if(we!==Me){const Ye=e.get("EXT_clip_control");Me?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),we=Me;const ke=Fe;Fe=null,this.setClear(ke)}},getReversed:function(){return we},setTest:function(Me){Me?Ee(a.DEPTH_TEST):Ge(a.DEPTH_TEST)},setMask:function(Me){xe!==Me&&!q&&(a.depthMask(Me),xe=Me)},setFunc:function(Me){if(we&&(Me=gA[Me]),De!==Me){switch(Me){case mp:a.depthFunc(a.NEVER);break;case gp:a.depthFunc(a.ALWAYS);break;case vp:a.depthFunc(a.LESS);break;case co:a.depthFunc(a.LEQUAL);break;case xp:a.depthFunc(a.EQUAL);break;case _p:a.depthFunc(a.GEQUAL);break;case yp:a.depthFunc(a.GREATER);break;case Sp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}De=Me}},setLocked:function(Me){q=Me},setClear:function(Me){Fe!==Me&&(Fe=Me,we&&(Me=1-Me),a.clearDepth(Me))},reset:function(){q=!1,xe=null,De=null,Fe=null,we=!1}}}function o(){let q=!1,we=null,xe=null,De=null,Fe=null,Me=null,Ye=null,ke=null,Kt=null;return{setTest:function(Ut){q||(Ut?Ee(a.STENCIL_TEST):Ge(a.STENCIL_TEST))},setMask:function(Ut){we!==Ut&&!q&&(a.stencilMask(Ut),we=Ut)},setFunc:function(Ut,ai,ri){(xe!==Ut||De!==ai||Fe!==ri)&&(a.stencilFunc(Ut,ai,ri),xe=Ut,De=ai,Fe=ri)},setOp:function(Ut,ai,ri){(Me!==Ut||Ye!==ai||ke!==ri)&&(a.stencilOp(Ut,ai,ri),Me=Ut,Ye=ai,ke=ri)},setLocked:function(Ut){q=Ut},setClear:function(Ut){Kt!==Ut&&(a.clearStencil(Ut),Kt=Ut)},reset:function(){q=!1,we=null,xe=null,De=null,Fe=null,Me=null,Ye=null,ke=null,Kt=null}}}const c=new n,u=new r,d=new o,m=new WeakMap,h=new WeakMap;let g={},x={},v={},y=new WeakMap,M=[],w=null,S=!1,_=null,R=null,U=null,A=null,P=null,L=null,B=null,T=new lt(0,0,0),O=0,V=!1,k=null,j=null,ce=null,ue=null,K=null;const H=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const ge=a.getParameter(a.VERSION);ge.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ge)[1]),F=$>=1):ge.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),F=$>=2);let ye=null,I={};const Q=a.getParameter(a.SCISSOR_BOX),Te=a.getParameter(a.VIEWPORT),Ce=new cn().fromArray(Q),Be=new cn().fromArray(Te);function re(q,we,xe,De){const Fe=new Uint8Array(4),Me=a.createTexture();a.bindTexture(q,Me),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ye=0;Ye<xe;Ye++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(we,0,a.RGBA,1,1,De,0,a.RGBA,a.UNSIGNED_BYTE,Fe):a.texImage2D(we+Ye,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Fe);return Me}const be={};be[a.TEXTURE_2D]=re(a.TEXTURE_2D,a.TEXTURE_2D,1),be[a.TEXTURE_CUBE_MAP]=re(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[a.TEXTURE_2D_ARRAY]=re(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),be[a.TEXTURE_3D]=re(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Ee(a.DEPTH_TEST),u.setFunc(co),nn(!1),an(i_),Ee(a.CULL_FACE),bt(Ua);function Ee(q){g[q]!==!0&&(a.enable(q),g[q]=!0)}function Ge(q){g[q]!==!1&&(a.disable(q),g[q]=!1)}function at(q,we){return v[q]!==we?(a.bindFramebuffer(q,we),v[q]=we,q===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=we),q===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=we),!0):!1}function Qe(q,we){let xe=M,De=!1;if(q){xe=y.get(we),xe===void 0&&(xe=[],y.set(we,xe));const Fe=q.textures;if(xe.length!==Fe.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let Me=0,Ye=Fe.length;Me<Ye;Me++)xe[Me]=a.COLOR_ATTACHMENT0+Me;xe.length=Fe.length,De=!0}}else xe[0]!==a.BACK&&(xe[0]=a.BACK,De=!0);De&&a.drawBuffers(xe)}function qt(q){return w!==q?(a.useProgram(q),w=q,!0):!1}const ht={[Qr]:a.FUNC_ADD,[FT]:a.FUNC_SUBTRACT,[zT]:a.FUNC_REVERSE_SUBTRACT};ht[HT]=a.MIN,ht[GT]=a.MAX;const St={[VT]:a.ZERO,[kT]:a.ONE,[XT]:a.SRC_COLOR,[hp]:a.SRC_ALPHA,[KT]:a.SRC_ALPHA_SATURATE,[jT]:a.DST_COLOR,[qT]:a.DST_ALPHA,[WT]:a.ONE_MINUS_SRC_COLOR,[pp]:a.ONE_MINUS_SRC_ALPHA,[ZT]:a.ONE_MINUS_DST_COLOR,[YT]:a.ONE_MINUS_DST_ALPHA,[QT]:a.CONSTANT_COLOR,[JT]:a.ONE_MINUS_CONSTANT_COLOR,[$T]:a.CONSTANT_ALPHA,[eA]:a.ONE_MINUS_CONSTANT_ALPHA};function bt(q,we,xe,De,Fe,Me,Ye,ke,Kt,Ut){if(q===Ua){S===!0&&(Ge(a.BLEND),S=!1);return}if(S===!1&&(Ee(a.BLEND),S=!0),q!==BT){if(q!==_||Ut!==V){if((R!==Qr||P!==Qr)&&(a.blendEquation(a.FUNC_ADD),R=Qr,P=Qr),Ut)switch(q){case ns:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case a_:a.blendFunc(a.ONE,a.ONE);break;case r_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case s_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Tt("WebGLState: Invalid blending: ",q);break}else switch(q){case ns:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case a_:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case r_:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s_:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",q);break}U=null,A=null,L=null,B=null,T.set(0,0,0),O=0,_=q,V=Ut}return}Fe=Fe||we,Me=Me||xe,Ye=Ye||De,(we!==R||Fe!==P)&&(a.blendEquationSeparate(ht[we],ht[Fe]),R=we,P=Fe),(xe!==U||De!==A||Me!==L||Ye!==B)&&(a.blendFuncSeparate(St[xe],St[De],St[Me],St[Ye]),U=xe,A=De,L=Me,B=Ye),(ke.equals(T)===!1||Kt!==O)&&(a.blendColor(ke.r,ke.g,ke.b,Kt),T.copy(ke),O=Kt),_=q,V=!1}function pt(q,we){q.side===Da?Ge(a.CULL_FACE):Ee(a.CULL_FACE);let xe=q.side===ni;we&&(xe=!xe),nn(xe),q.blending===ns&&q.transparent===!1?bt(Ua):bt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const De=q.stencilWrite;d.setTest(De),De&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),fn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Ee(a.SAMPLE_ALPHA_TO_COVERAGE):Ge(a.SAMPLE_ALPHA_TO_COVERAGE)}function nn(q){k!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),k=q)}function an(q){q!==OT?(Ee(a.CULL_FACE),q!==j&&(q===i_?a.cullFace(a.BACK):q===PT?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ge(a.CULL_FACE),j=q}function rn(q){q!==ce&&(F&&a.lineWidth(q),ce=q)}function fn(q,we,xe){q?(Ee(a.POLYGON_OFFSET_FILL),(ue!==we||K!==xe)&&(ue=we,K=xe,u.getReversed()&&(we=-we),a.polygonOffset(we,xe))):Ge(a.POLYGON_OFFSET_FILL)}function Wt(q){q?Ee(a.SCISSOR_TEST):Ge(a.SCISSOR_TEST)}function sn(q){q===void 0&&(q=a.TEXTURE0+H-1),ye!==q&&(a.activeTexture(q),ye=q)}function Z(q,we,xe){xe===void 0&&(ye===null?xe=a.TEXTURE0+H-1:xe=ye);let De=I[xe];De===void 0&&(De={type:void 0,texture:void 0},I[xe]=De),(De.type!==q||De.texture!==we)&&(ye!==xe&&(a.activeTexture(xe),ye=xe),a.bindTexture(q,we||be[q]),De.type=q,De.texture=we)}function zt(){const q=I[ye];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Ct(){try{a.compressedTexImage2D(...arguments)}catch(q){Tt("WebGLState:",q)}}function z(){try{a.compressedTexImage3D(...arguments)}catch(q){Tt("WebGLState:",q)}}function E(){try{a.texSubImage2D(...arguments)}catch(q){Tt("WebGLState:",q)}}function ee(){try{a.texSubImage3D(...arguments)}catch(q){Tt("WebGLState:",q)}}function se(){try{a.compressedTexSubImage2D(...arguments)}catch(q){Tt("WebGLState:",q)}}function pe(){try{a.compressedTexSubImage3D(...arguments)}catch(q){Tt("WebGLState:",q)}}function Ae(){try{a.texStorage2D(...arguments)}catch(q){Tt("WebGLState:",q)}}function Ne(){try{a.texStorage3D(...arguments)}catch(q){Tt("WebGLState:",q)}}function he(){try{a.texImage2D(...arguments)}catch(q){Tt("WebGLState:",q)}}function me(){try{a.texImage3D(...arguments)}catch(q){Tt("WebGLState:",q)}}function Re(q){return x[q]!==void 0?x[q]:a.getParameter(q)}function ze(q,we){x[q]!==we&&(a.pixelStorei(q,we),x[q]=we)}function Oe(q){Ce.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),Ce.copy(q))}function Ue(q){Be.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),Be.copy(q))}function Ke(q,we){let xe=h.get(we);xe===void 0&&(xe=new WeakMap,h.set(we,xe));let De=xe.get(q);De===void 0&&(De=a.getUniformBlockIndex(we,q.name),xe.set(q,De))}function Je(q,we){const De=h.get(we).get(q);m.get(we)!==De&&(a.uniformBlockBinding(we,De,q.__bindingPointIndex),m.set(we,De))}function rt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},x={},ye=null,I={},v={},y=new WeakMap,M=[],w=null,S=!1,_=null,R=null,U=null,A=null,P=null,L=null,B=null,T=new lt(0,0,0),O=0,V=!1,k=null,j=null,ce=null,ue=null,K=null,Ce.set(0,0,a.canvas.width,a.canvas.height),Be.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:Ee,disable:Ge,bindFramebuffer:at,drawBuffers:Qe,useProgram:qt,setBlending:bt,setMaterial:pt,setFlipSided:nn,setCullFace:an,setLineWidth:rn,setPolygonOffset:fn,setScissorTest:Wt,activeTexture:sn,bindTexture:Z,unbindTexture:zt,compressedTexImage2D:Ct,compressedTexImage3D:z,texImage2D:he,texImage3D:me,pixelStorei:ze,getParameter:Re,updateUBOMapping:Ke,uniformBlockBinding:Je,texStorage2D:Ae,texStorage3D:Ne,texSubImage2D:E,texSubImage3D:ee,compressedTexSubImage2D:se,compressedTexSubImage3D:pe,scissor:Oe,viewport:Ue,reset:rt}}function K3(a,e,n,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new tt,g=new WeakMap,x=new Set;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(z,E){return M?new OffscreenCanvas(z,E):Bu("canvas")}function S(z,E,ee){let se=1;const pe=Ct(z);if((pe.width>ee||pe.height>ee)&&(se=ee/Math.max(pe.width,pe.height)),se<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Ae=Math.floor(se*pe.width),Ne=Math.floor(se*pe.height);v===void 0&&(v=w(Ae,Ne));const he=E?w(Ae,Ne):v;return he.width=Ae,he.height=Ne,he.getContext("2d").drawImage(z,0,0,Ae,Ne),it("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ae+"x"+Ne+")."),he}else return"data"in z&&it("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),z;return z}function _(z){return z.generateMipmaps}function R(z){a.generateMipmap(z)}function U(z){return z.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?a.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function A(z,E,ee,se,pe,Ae=!1){if(z!==null){if(a[z]!==void 0)return a[z];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Ne;se&&(Ne=e.get("EXT_texture_norm16"),Ne||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===a.RED&&(ee===a.FLOAT&&(he=a.R32F),ee===a.HALF_FLOAT&&(he=a.R16F),ee===a.UNSIGNED_BYTE&&(he=a.R8),ee===a.UNSIGNED_SHORT&&Ne&&(he=Ne.R16_EXT),ee===a.SHORT&&Ne&&(he=Ne.R16_SNORM_EXT)),E===a.RED_INTEGER&&(ee===a.UNSIGNED_BYTE&&(he=a.R8UI),ee===a.UNSIGNED_SHORT&&(he=a.R16UI),ee===a.UNSIGNED_INT&&(he=a.R32UI),ee===a.BYTE&&(he=a.R8I),ee===a.SHORT&&(he=a.R16I),ee===a.INT&&(he=a.R32I)),E===a.RG&&(ee===a.FLOAT&&(he=a.RG32F),ee===a.HALF_FLOAT&&(he=a.RG16F),ee===a.UNSIGNED_BYTE&&(he=a.RG8),ee===a.UNSIGNED_SHORT&&Ne&&(he=Ne.RG16_EXT),ee===a.SHORT&&Ne&&(he=Ne.RG16_SNORM_EXT)),E===a.RG_INTEGER&&(ee===a.UNSIGNED_BYTE&&(he=a.RG8UI),ee===a.UNSIGNED_SHORT&&(he=a.RG16UI),ee===a.UNSIGNED_INT&&(he=a.RG32UI),ee===a.BYTE&&(he=a.RG8I),ee===a.SHORT&&(he=a.RG16I),ee===a.INT&&(he=a.RG32I)),E===a.RGB_INTEGER&&(ee===a.UNSIGNED_BYTE&&(he=a.RGB8UI),ee===a.UNSIGNED_SHORT&&(he=a.RGB16UI),ee===a.UNSIGNED_INT&&(he=a.RGB32UI),ee===a.BYTE&&(he=a.RGB8I),ee===a.SHORT&&(he=a.RGB16I),ee===a.INT&&(he=a.RGB32I)),E===a.RGBA_INTEGER&&(ee===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),ee===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),ee===a.UNSIGNED_INT&&(he=a.RGBA32UI),ee===a.BYTE&&(he=a.RGBA8I),ee===a.SHORT&&(he=a.RGBA16I),ee===a.INT&&(he=a.RGBA32I)),E===a.RGB&&(ee===a.UNSIGNED_SHORT&&Ne&&(he=Ne.RGB16_EXT),ee===a.SHORT&&Ne&&(he=Ne.RGB16_SNORM_EXT),ee===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),ee===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),E===a.RGBA){const me=Ae?Pu:Et.getTransfer(pe);ee===a.FLOAT&&(he=a.RGBA32F),ee===a.HALF_FLOAT&&(he=a.RGBA16F),ee===a.UNSIGNED_BYTE&&(he=me===Ft?a.SRGB8_ALPHA8:a.RGBA8),ee===a.UNSIGNED_SHORT&&Ne&&(he=Ne.RGBA16_EXT),ee===a.SHORT&&Ne&&(he=Ne.RGBA16_SNORM_EXT),ee===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),ee===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(z,E){let ee;return z?E===null||E===na||E===wl?ee=a.DEPTH24_STENCIL8:E===Qi?ee=a.DEPTH32F_STENCIL8:E===Al&&(ee=a.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===na||E===wl?ee=a.DEPTH_COMPONENT24:E===Qi?ee=a.DEPTH_COMPONENT32F:E===Al&&(ee=a.DEPTH_COMPONENT16),ee}function L(z,E){return _(z)===!0||z.isFramebufferTexture&&z.minFilter!==On&&z.minFilter!==Hn?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function B(z){const E=z.target;E.removeEventListener("dispose",B),O(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&x.delete(E)}function T(z){const E=z.target;E.removeEventListener("dispose",T),k(E)}function O(z){const E=r.get(z);if(E.__webglInit===void 0)return;const ee=z.source,se=y.get(ee);if(se){const pe=se[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&V(z),Object.keys(se).length===0&&y.delete(ee)}r.remove(z)}function V(z){const E=r.get(z);a.deleteTexture(E.__webglTexture);const ee=z.source,se=y.get(ee);delete se[E.__cacheKey],u.memory.textures--}function k(z){const E=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let pe=0;pe<E.__webglFramebuffer[se].length;pe++)a.deleteFramebuffer(E.__webglFramebuffer[se][pe]);else a.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)a.deleteFramebuffer(E.__webglFramebuffer[se]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=z.textures;for(let se=0,pe=ee.length;se<pe;se++){const Ae=r.get(ee[se]);Ae.__webglTexture&&(a.deleteTexture(Ae.__webglTexture),u.memory.textures--),r.remove(ee[se])}r.remove(z)}let j=0;function ce(){j=0}function ue(){return j}function K(z){j=z}function H(){const z=j;return z>=o.maxTextures&&it("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),j+=1,z}function F(z){const E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.wrapR||0),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.colorSpace),E.join()}function $(z,E){const ee=r.get(z);if(z.isVideoTexture&&Z(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ee.__version!==z.version){const se=z.image;if(se===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(ee,z,E);return}}else z.isExternalTexture&&(ee.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,ee.__webglTexture,a.TEXTURE0+E)}function ge(z,E){const ee=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ee.__version!==z.version){Ge(ee,z,E);return}else z.isExternalTexture&&(ee.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,ee.__webglTexture,a.TEXTURE0+E)}function ye(z,E){const ee=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ee.__version!==z.version){Ge(ee,z,E);return}n.bindTexture(a.TEXTURE_3D,ee.__webglTexture,a.TEXTURE0+E)}function I(z,E){const ee=r.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&ee.__version!==z.version){at(ee,z,E);return}n.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture,a.TEXTURE0+E)}const Q={[bp]:a.REPEAT,[Na]:a.CLAMP_TO_EDGE,[Mp]:a.MIRRORED_REPEAT},Te={[On]:a.NEAREST,[iA]:a.NEAREST_MIPMAP_NEAREST,[Zc]:a.NEAREST_MIPMAP_LINEAR,[Hn]:a.LINEAR,[yh]:a.LINEAR_MIPMAP_NEAREST,[$r]:a.LINEAR_MIPMAP_LINEAR},Ce={[sA]:a.NEVER,[fA]:a.ALWAYS,[oA]:a.LESS,[Nm]:a.LEQUAL,[lA]:a.EQUAL,[Um]:a.GEQUAL,[cA]:a.GREATER,[uA]:a.NOTEQUAL};function Be(z,E){if(E.type===Qi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Hn||E.magFilter===yh||E.magFilter===Zc||E.magFilter===$r||E.minFilter===Hn||E.minFilter===yh||E.minFilter===Zc||E.minFilter===$r)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(z,a.TEXTURE_WRAP_S,Q[E.wrapS]),a.texParameteri(z,a.TEXTURE_WRAP_T,Q[E.wrapT]),(z===a.TEXTURE_3D||z===a.TEXTURE_2D_ARRAY)&&a.texParameteri(z,a.TEXTURE_WRAP_R,Q[E.wrapR]),a.texParameteri(z,a.TEXTURE_MAG_FILTER,Te[E.magFilter]),a.texParameteri(z,a.TEXTURE_MIN_FILTER,Te[E.minFilter]),E.compareFunction&&(a.texParameteri(z,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(z,a.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==Zc&&E.minFilter!==$r||E.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");a.texParameterf(z,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function re(z,E){let ee=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",B));const se=E.source;let pe=y.get(se);pe===void 0&&(pe={},y.set(se,pe));const Ae=F(E);if(Ae!==z.__cacheKey){pe[Ae]===void 0&&(pe[Ae]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),pe[Ae].usedTimes++;const Ne=pe[z.__cacheKey];Ne!==void 0&&(pe[z.__cacheKey].usedTimes--,Ne.usedTimes===0&&V(E)),z.__cacheKey=Ae,z.__webglTexture=pe[Ae].texture}return ee}function be(z,E,ee){return Math.floor(Math.floor(z/ee)/E)}function Ee(z,E,ee,se){const Ae=z.updateRanges;if(Ae.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,ee,se,E.data);else{Ae.sort((ze,Oe)=>ze.start-Oe.start);let Ne=0;for(let ze=1;ze<Ae.length;ze++){const Oe=Ae[Ne],Ue=Ae[ze],Ke=Oe.start+Oe.count,Je=be(Ue.start,E.width,4),rt=be(Oe.start,E.width,4);Ue.start<=Ke+1&&Je===rt&&be(Ue.start+Ue.count-1,E.width,4)===Je?Oe.count=Math.max(Oe.count,Ue.start+Ue.count-Oe.start):(++Ne,Ae[Ne]=Ue)}Ae.length=Ne+1;const he=n.getParameter(a.UNPACK_ROW_LENGTH),me=n.getParameter(a.UNPACK_SKIP_PIXELS),Re=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let ze=0,Oe=Ae.length;ze<Oe;ze++){const Ue=Ae[ze],Ke=Math.floor(Ue.start/4),Je=Math.ceil(Ue.count/4),rt=Ke%E.width,q=Math.floor(Ke/E.width),we=Je,xe=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(a.UNPACK_SKIP_ROWS,q),n.texSubImage2D(a.TEXTURE_2D,0,rt,q,we,xe,ee,se,E.data)}z.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,he),n.pixelStorei(a.UNPACK_SKIP_PIXELS,me),n.pixelStorei(a.UNPACK_SKIP_ROWS,Re)}}function Ge(z,E,ee){let se=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=a.TEXTURE_3D);const pe=re(z,E),Ae=E.source;n.bindTexture(se,z.__webglTexture,a.TEXTURE0+ee);const Ne=r.get(Ae);if(Ae.version!==Ne.__version||pe===!0){if(n.activeTexture(a.TEXTURE0+ee),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const xe=Et.getPrimaries(Et.workingColorSpace),De=E.colorSpace===_r?null:Et.getPrimaries(E.colorSpace),Fe=E.colorSpace===_r||xe===De?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}n.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let me=S(E.image,!1,o.maxTextureSize);me=zt(E,me);const Re=c.convert(E.format,E.colorSpace),ze=c.convert(E.type);let Oe=A(E.internalFormat,Re,ze,E.normalized,E.colorSpace,E.isVideoTexture);Be(se,E);let Ue;const Ke=E.mipmaps,Je=E.isVideoTexture!==!0,rt=Ne.__version===void 0||pe===!0,q=Ae.dataReady,we=L(E,me);if(E.isDepthTexture)Oe=P(E.format===es,E.type),rt&&(Je?n.texStorage2D(a.TEXTURE_2D,1,Oe,me.width,me.height):n.texImage2D(a.TEXTURE_2D,0,Oe,me.width,me.height,0,Re,ze,null));else if(E.isDataTexture)if(Ke.length>0){Je&&rt&&n.texStorage2D(a.TEXTURE_2D,we,Oe,Ke[0].width,Ke[0].height);for(let xe=0,De=Ke.length;xe<De;xe++)Ue=Ke[xe],Je?q&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ue.width,Ue.height,Re,ze,Ue.data):n.texImage2D(a.TEXTURE_2D,xe,Oe,Ue.width,Ue.height,0,Re,ze,Ue.data);E.generateMipmaps=!1}else Je?(rt&&n.texStorage2D(a.TEXTURE_2D,we,Oe,me.width,me.height),q&&Ee(E,me,Re,ze)):n.texImage2D(a.TEXTURE_2D,0,Oe,me.width,me.height,0,Re,ze,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&rt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,we,Oe,Ke[0].width,Ke[0].height,me.depth);for(let xe=0,De=Ke.length;xe<De;xe++)if(Ue=Ke[xe],E.format!==zi)if(Re!==null)if(Je){if(q)if(E.layerUpdates.size>0){const Fe=P_(Ue.width,Ue.height,E.format,E.type);for(const Me of E.layerUpdates){const Ye=Ue.data.subarray(Me*Fe/Ue.data.BYTES_PER_ELEMENT,(Me+1)*Fe/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,Me,Ue.width,Ue.height,1,Re,Ye)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Ue.width,Ue.height,me.depth,Re,Ue.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,xe,Oe,Ue.width,Ue.height,me.depth,0,Ue.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?q&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Ue.width,Ue.height,me.depth,Re,ze,Ue.data):n.texImage3D(a.TEXTURE_2D_ARRAY,xe,Oe,Ue.width,Ue.height,me.depth,0,Re,ze,Ue.data)}else{Je&&rt&&n.texStorage2D(a.TEXTURE_2D,we,Oe,Ke[0].width,Ke[0].height);for(let xe=0,De=Ke.length;xe<De;xe++)Ue=Ke[xe],E.format!==zi?Re!==null?Je?q&&n.compressedTexSubImage2D(a.TEXTURE_2D,xe,0,0,Ue.width,Ue.height,Re,Ue.data):n.compressedTexImage2D(a.TEXTURE_2D,xe,Oe,Ue.width,Ue.height,0,Ue.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?q&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ue.width,Ue.height,Re,ze,Ue.data):n.texImage2D(a.TEXTURE_2D,xe,Oe,Ue.width,Ue.height,0,Re,ze,Ue.data)}else if(E.isDataArrayTexture)if(Je){if(rt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,we,Oe,me.width,me.height,me.depth),q)if(E.layerUpdates.size>0){const xe=P_(me.width,me.height,E.format,E.type);for(const De of E.layerUpdates){const Fe=me.data.subarray(De*xe/me.data.BYTES_PER_ELEMENT,(De+1)*xe/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,De,me.width,me.height,1,Re,ze,Fe)}E.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Re,ze,me.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Oe,me.width,me.height,me.depth,0,Re,ze,me.data);else if(E.isData3DTexture)Je?(rt&&n.texStorage3D(a.TEXTURE_3D,we,Oe,me.width,me.height,me.depth),q&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Re,ze,me.data)):n.texImage3D(a.TEXTURE_3D,0,Oe,me.width,me.height,me.depth,0,Re,ze,me.data);else if(E.isFramebufferTexture){if(rt)if(Je)n.texStorage2D(a.TEXTURE_2D,we,Oe,me.width,me.height);else{let xe=me.width,De=me.height;for(let Fe=0;Fe<we;Fe++)n.texImage2D(a.TEXTURE_2D,Fe,Oe,xe,De,0,Re,ze,null),xe>>=1,De>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){const xe=a.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),me.parentNode!==xe){xe.appendChild(me),x.add(E),xe.onpaint=De=>{const Fe=De.changedElements;for(const Me of x)Fe.includes(Me.image)&&(Me.needsUpdate=!0)},xe.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,me);else{const Fe=a.RGBA,Me=a.RGBA,Ye=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Fe,Me,Ye,me)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(Je&&rt){const xe=Ct(Ke[0]);n.texStorage2D(a.TEXTURE_2D,we,Oe,xe.width,xe.height)}for(let xe=0,De=Ke.length;xe<De;xe++)Ue=Ke[xe],Je?q&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,Re,ze,Ue):n.texImage2D(a.TEXTURE_2D,xe,Oe,Re,ze,Ue);E.generateMipmaps=!1}else if(Je){if(rt){const xe=Ct(me);n.texStorage2D(a.TEXTURE_2D,we,Oe,xe.width,xe.height)}q&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Re,ze,me)}else n.texImage2D(a.TEXTURE_2D,0,Oe,Re,ze,me);_(E)&&R(se),Ne.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function at(z,E,ee){if(E.image.length!==6)return;const se=re(z,E),pe=E.source;n.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture,a.TEXTURE0+ee);const Ae=r.get(pe);if(pe.version!==Ae.__version||se===!0){n.activeTexture(a.TEXTURE0+ee);const Ne=Et.getPrimaries(Et.workingColorSpace),he=E.colorSpace===_r?null:Et.getPrimaries(E.colorSpace),me=E.colorSpace===_r||Ne===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,ze=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let Me=0;Me<6;Me++)!Re&&!ze?Oe[Me]=S(E.image[Me],!0,o.maxCubemapSize):Oe[Me]=ze?E.image[Me].image:E.image[Me],Oe[Me]=zt(E,Oe[Me]);const Ue=Oe[0],Ke=c.convert(E.format,E.colorSpace),Je=c.convert(E.type),rt=A(E.internalFormat,Ke,Je,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,we=Ae.__version===void 0||se===!0,xe=pe.dataReady;let De=L(E,Ue);Be(a.TEXTURE_CUBE_MAP,E);let Fe;if(Re){q&&we&&n.texStorage2D(a.TEXTURE_CUBE_MAP,De,rt,Ue.width,Ue.height);for(let Me=0;Me<6;Me++){Fe=Oe[Me].mipmaps;for(let Ye=0;Ye<Fe.length;Ye++){const ke=Fe[Ye];E.format!==zi?Ke!==null?q?xe&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,0,0,ke.width,ke.height,Ke,ke.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,rt,ke.width,ke.height,0,ke.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,0,0,ke.width,ke.height,Ke,Je,ke.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye,rt,ke.width,ke.height,0,Ke,Je,ke.data)}}}else{if(Fe=E.mipmaps,q&&we){Fe.length>0&&De++;const Me=Ct(Oe[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,De,rt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(ze){q?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Oe[Me].width,Oe[Me].height,Ke,Je,Oe[Me].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,rt,Oe[Me].width,Oe[Me].height,0,Ke,Je,Oe[Me].data);for(let Ye=0;Ye<Fe.length;Ye++){const Kt=Fe[Ye].image[Me].image;q?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,0,0,Kt.width,Kt.height,Ke,Je,Kt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,rt,Kt.width,Kt.height,0,Ke,Je,Kt.data)}}else{q?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ke,Je,Oe[Me]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,rt,Ke,Je,Oe[Me]);for(let Ye=0;Ye<Fe.length;Ye++){const ke=Fe[Ye];q?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,0,0,Ke,Je,ke.image[Me]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ye+1,rt,Ke,Je,ke.image[Me])}}}_(E)&&R(a.TEXTURE_CUBE_MAP),Ae.__version=pe.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function Qe(z,E,ee,se,pe,Ae){const Ne=c.convert(ee.format,ee.colorSpace),he=c.convert(ee.type),me=A(ee.internalFormat,Ne,he,ee.normalized,ee.colorSpace),Re=r.get(E),ze=r.get(ee);if(ze.__renderTarget=E,!Re.__hasExternalTextures){const Oe=Math.max(1,E.width>>Ae),Ue=Math.max(1,E.height>>Ae);pe===a.TEXTURE_3D||pe===a.TEXTURE_2D_ARRAY?n.texImage3D(pe,Ae,me,Oe,Ue,E.depth,0,Ne,he,null):n.texImage2D(pe,Ae,me,Oe,Ue,0,Ne,he,null)}n.bindFramebuffer(a.FRAMEBUFFER,z),sn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,se,pe,ze.__webglTexture,0,Wt(E)):(pe===a.TEXTURE_2D||pe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,se,pe,ze.__webglTexture,Ae),n.bindFramebuffer(a.FRAMEBUFFER,null)}function qt(z,E,ee){if(a.bindRenderbuffer(a.RENDERBUFFER,z),E.depthBuffer){const se=E.depthTexture,pe=se&&se.isDepthTexture?se.type:null,Ae=P(E.stencilBuffer,pe),Ne=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;sn(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Wt(E),Ae,E.width,E.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Wt(E),Ae,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Ae,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ne,a.RENDERBUFFER,z)}else{const se=E.textures;for(let pe=0;pe<se.length;pe++){const Ae=se[pe],Ne=c.convert(Ae.format,Ae.colorSpace),he=c.convert(Ae.type),me=A(Ae.internalFormat,Ne,he,Ae.normalized,Ae.colorSpace);sn(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Wt(E),me,E.width,E.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Wt(E),me,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,me,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ht(z,E,ee){const se=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(E.depthTexture);if(pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),pe.__webglTexture===void 0){pe.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,pe.__webglTexture),Be(a.TEXTURE_CUBE_MAP,E.depthTexture);const Re=c.convert(E.depthTexture.format),ze=c.convert(E.depthTexture.type);let Oe;E.depthTexture.format===Ia?Oe=a.DEPTH_COMPONENT24:E.depthTexture.format===es&&(Oe=a.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Oe,E.width,E.height,0,Re,ze,null)}}else $(E.depthTexture,0);const Ae=pe.__webglTexture,Ne=Wt(E),he=se?a.TEXTURE_CUBE_MAP_POSITIVE_X+ee:a.TEXTURE_2D,me=E.depthTexture.format===es?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ia)sn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,he,Ae,0,Ne):a.framebufferTexture2D(a.FRAMEBUFFER,me,he,Ae,0);else if(E.depthTexture.format===es)sn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,he,Ae,0,Ne):a.framebufferTexture2D(a.FRAMEBUFFER,me,he,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(z){const E=r.get(z),ee=z.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==z.depthTexture){const se=z.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",pe)};se.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=se}if(z.depthTexture&&!E.__autoAllocateDepthBuffer)if(ee)for(let se=0;se<6;se++)ht(E.__webglFramebuffer[se],z,se);else{const se=z.texture.mipmaps;se&&se.length>0?ht(E.__webglFramebuffer[0],z,0):ht(E.__webglFramebuffer,z,0)}else if(ee){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=a.createRenderbuffer(),qt(E.__webglDepthbuffer[se],z,!1);else{const pe=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[se];a.bindRenderbuffer(a.RENDERBUFFER,Ae),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,Ae)}}else{const se=z.texture.mipmaps;if(se&&se.length>0?n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),qt(E.__webglDepthbuffer,z,!1);else{const pe=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ae),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,Ae)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function bt(z,E,ee){const se=r.get(z);E!==void 0&&Qe(se.__webglFramebuffer,z,z.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ee!==void 0&&St(z)}function pt(z){const E=z.texture,ee=r.get(z),se=r.get(E);z.addEventListener("dispose",T);const pe=z.textures,Ae=z.isWebGLCubeRenderTarget===!0,Ne=pe.length>1;if(Ne||(se.__webglTexture===void 0&&(se.__webglTexture=a.createTexture()),se.__version=E.version,u.memory.textures++),Ae){ee.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[he]=[];for(let me=0;me<E.mipmaps.length;me++)ee.__webglFramebuffer[he][me]=a.createFramebuffer()}else ee.__webglFramebuffer[he]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)ee.__webglFramebuffer[he]=a.createFramebuffer()}else ee.__webglFramebuffer=a.createFramebuffer();if(Ne)for(let he=0,me=pe.length;he<me;he++){const Re=r.get(pe[he]);Re.__webglTexture===void 0&&(Re.__webglTexture=a.createTexture(),u.memory.textures++)}if(z.samples>0&&sn(z)===!1){ee.__webglMultisampledFramebuffer=a.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let he=0;he<pe.length;he++){const me=pe[he];ee.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ee.__webglColorRenderbuffer[he]);const Re=c.convert(me.format,me.colorSpace),ze=c.convert(me.type),Oe=A(me.internalFormat,Re,ze,me.normalized,me.colorSpace,z.isXRRenderTarget===!0),Ue=Wt(z);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ue,Oe,z.width,z.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,ee.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),z.depthBuffer&&(ee.__webglDepthRenderbuffer=a.createRenderbuffer(),qt(ee.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ae){n.bindTexture(a.TEXTURE_CUBE_MAP,se.__webglTexture),Be(a.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Qe(ee.__webglFramebuffer[he][me],z,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else Qe(ee.__webglFramebuffer[he],z,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(E)&&R(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let he=0,me=pe.length;he<me;he++){const Re=pe[he],ze=r.get(Re);let Oe=a.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Oe=z.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Oe,ze.__webglTexture),Be(Oe,Re),Qe(ee.__webglFramebuffer,z,Re,a.COLOR_ATTACHMENT0+he,Oe,0),_(Re)&&R(Oe)}n.unbindTexture()}else{let he=a.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(he=z.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(he,se.__webglTexture),Be(he,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Qe(ee.__webglFramebuffer[me],z,E,a.COLOR_ATTACHMENT0,he,me);else Qe(ee.__webglFramebuffer,z,E,a.COLOR_ATTACHMENT0,he,0);_(E)&&R(he),n.unbindTexture()}z.depthBuffer&&St(z)}function nn(z){const E=z.textures;for(let ee=0,se=E.length;ee<se;ee++){const pe=E[ee];if(_(pe)){const Ae=U(z),Ne=r.get(pe).__webglTexture;n.bindTexture(Ae,Ne),R(Ae),n.unbindTexture()}}}const an=[],rn=[];function fn(z){if(z.samples>0){if(sn(z)===!1){const E=z.textures,ee=z.width,se=z.height;let pe=a.COLOR_BUFFER_BIT;const Ae=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=r.get(z),he=E.length>1;if(he)for(let Re=0;Re<E.length;Re++)n.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const me=z.texture.mipmaps;me&&me.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(pe|=a.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(pe|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ne.__webglColorRenderbuffer[Re]);const ze=r.get(E[Re]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ze,0)}a.blitFramebuffer(0,0,ee,se,0,0,ee,se,pe,a.NEAREST),m===!0&&(an.length=0,rn.length=0,an.push(a.COLOR_ATTACHMENT0+Re),z.depthBuffer&&z.resolveDepthBuffer===!1&&(an.push(Ae),rn.push(Ae),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,rn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,an))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<E.length;Re++){n.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,Ne.__webglColorRenderbuffer[Re]);const ze=r.get(E[Re]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.TEXTURE_2D,ze,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const E=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function Wt(z){return Math.min(o.maxSamples,z.samples)}function sn(z){const E=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Z(z){const E=u.render.frame;g.get(z)!==E&&(g.set(z,E),z.update())}function zt(z,E){const ee=z.colorSpace,se=z.format,pe=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ee!==Ou&&ee!==_r&&(Et.getTransfer(ee)===Ft?(se!==zi||pe!==wi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",ee)),E}function Ct(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=ce,this.getTextureUnits=ue,this.setTextureUnits=K,this.setTexture2D=$,this.setTexture2DArray=ge,this.setTexture3D=ye,this.setTextureCube=I,this.rebindTextures=bt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Q3(a,e){function n(r,o=_r){let c;const u=Et.getTransfer(o);if(r===wi)return a.UNSIGNED_BYTE;if(r===Am)return a.UNSIGNED_SHORT_4_4_4_4;if(r===wm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===lS)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===cS)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===sS)return a.BYTE;if(r===oS)return a.SHORT;if(r===Al)return a.UNSIGNED_SHORT;if(r===Tm)return a.INT;if(r===na)return a.UNSIGNED_INT;if(r===Qi)return a.FLOAT;if(r===Pa)return a.HALF_FLOAT;if(r===uS)return a.ALPHA;if(r===fS)return a.RGB;if(r===zi)return a.RGBA;if(r===Ia)return a.DEPTH_COMPONENT;if(r===es)return a.DEPTH_STENCIL;if(r===dS)return a.RED;if(r===Rm)return a.RED_INTEGER;if(r===as)return a.RG;if(r===Cm)return a.RG_INTEGER;if(r===Dm)return a.RGBA_INTEGER;if(r===Eu||r===Tu||r===Au||r===wu)if(u===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Eu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Eu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ep||r===Tp||r===Ap||r===wp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ep)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ap)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rp||r===Cp||r===Dp||r===Np||r===Up||r===Uu||r===Lp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Rp||r===Cp)return u===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Dp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Np)return c.COMPRESSED_R11_EAC;if(r===Up)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Uu)return c.COMPRESSED_RG11_EAC;if(r===Lp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Op||r===Pp||r===Ip||r===Bp||r===Fp||r===zp||r===Hp||r===Gp||r===Vp||r===kp||r===Xp||r===Wp||r===qp||r===Yp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Op)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ip)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yp)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jp||r===Zp||r===Kp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===jp)return u===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qp||r===Jp||r===Lu||r===$p)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Qp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Jp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$p)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const J3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$3=`
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

}`;class eD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new bS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Gi({vertexShader:J3,fragmentShader:$3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wn(new ju(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tD extends ss{constructor(e,n){super();const r=this;let o=null,c=1,u=null,d="local-floor",m=1,h=null,g=null,x=null,v=null,y=null,M=null;const w=typeof XRWebGLBinding<"u",S=new eD,_={},R=n.getContextAttributes();let U=null,A=null;const P=[],L=[],B=new tt;let T=null;const O=new ti;O.viewport=new cn;const V=new ti;V.viewport=new cn;const k=[O,V],j=new fw;let ce=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let be=P[re];return be===void 0&&(be=new Rh,P[re]=be),be.getTargetRaySpace()},this.getControllerGrip=function(re){let be=P[re];return be===void 0&&(be=new Rh,P[re]=be),be.getGripSpace()},this.getHand=function(re){let be=P[re];return be===void 0&&(be=new Rh,P[re]=be),be.getHandSpace()};function K(re){const be=L.indexOf(re.inputSource);if(be===-1)return;const Ee=P[be];Ee!==void 0&&(Ee.update(re.inputSource,re.frame,h||u),Ee.dispatchEvent({type:re.type,data:re.inputSource}))}function H(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",H),o.removeEventListener("inputsourceschange",F);for(let re=0;re<P.length;re++){const be=L[re];be!==null&&(L[re]=null,P[re].disconnect(be))}ce=null,ue=null,S.reset();for(const re in _)delete _[re];e.setRenderTarget(U),y=null,v=null,x=null,o=null,A=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,r.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",H),o.addEventListener("inputsourceschange",F),R.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ge=null,at=null;R.depth&&(at=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=R.stencil?es:Ia,Ge=R.stencil?wl:na);const Qe={colorFormat:n.RGBA8,depthFormat:at,scaleFactor:c};x=this.getBinding(),v=x.createProjectionLayer(Qe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new ea(v.textureWidth,v.textureHeight,{format:zi,type:wi,depthTexture:new fo(v.textureWidth,v.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Ee),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new ea(y.framebufferWidth,y.framebufferHeight,{format:zi,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await o.requestReferenceSpace(d),Be.setContext(o),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function F(re){for(let be=0;be<re.removed.length;be++){const Ee=re.removed[be],Ge=L.indexOf(Ee);Ge>=0&&(L[Ge]=null,P[Ge].disconnect(Ee))}for(let be=0;be<re.added.length;be++){const Ee=re.added[be];let Ge=L.indexOf(Ee);if(Ge===-1){for(let Qe=0;Qe<P.length;Qe++)if(Qe>=L.length){L.push(Ee),Ge=Qe;break}else if(L[Qe]===null){L[Qe]=Ee,Ge=Qe;break}if(Ge===-1)break}const at=P[Ge];at&&at.connect(Ee)}}const $=new X,ge=new X;function ye(re,be,Ee){$.setFromMatrixPosition(be.matrixWorld),ge.setFromMatrixPosition(Ee.matrixWorld);const Ge=$.distanceTo(ge),at=be.projectionMatrix.elements,Qe=Ee.projectionMatrix.elements,qt=at[14]/(at[10]-1),ht=at[14]/(at[10]+1),St=(at[9]+1)/at[5],bt=(at[9]-1)/at[5],pt=(at[8]-1)/at[0],nn=(Qe[8]+1)/Qe[0],an=qt*pt,rn=qt*nn,fn=Ge/(-pt+nn),Wt=fn*-pt;if(be.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Wt),re.translateZ(fn),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),at[10]===-1)re.projectionMatrix.copy(be.projectionMatrix),re.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const sn=qt+fn,Z=ht+fn,zt=an-Wt,Ct=rn+(Ge-Wt),z=St*ht/Z*sn,E=bt*ht/Z*sn;re.projectionMatrix.makePerspective(zt,Ct,z,E,sn,Z),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function I(re,be){be===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(be.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let be=re.near,Ee=re.far;S.texture!==null&&(S.depthNear>0&&(be=S.depthNear),S.depthFar>0&&(Ee=S.depthFar)),j.near=V.near=O.near=be,j.far=V.far=O.far=Ee,(ce!==j.near||ue!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),ce=j.near,ue=j.far),j.layers.mask=re.layers.mask|6,O.layers.mask=j.layers.mask&-5,V.layers.mask=j.layers.mask&-3;const Ge=re.parent,at=j.cameras;I(j,Ge);for(let Qe=0;Qe<at.length;Qe++)I(at[Qe],Ge);at.length===2?ye(j,O,V):j.projectionMatrix.copy(O.projectionMatrix),Q(re,j,Ge)};function Q(re,be,Ee){Ee===null?re.matrix.copy(be.matrixWorld):(re.matrix.copy(Ee.matrixWorld),re.matrix.invert(),re.matrix.multiply(be.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(be.projectionMatrix),re.projectionMatrixInverse.copy(be.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=tm*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(re){m=re,v!==null&&(v.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(re){return _[re]};let Te=null;function Ce(re,be){if(g=be.getViewerPose(h||u),M=be,g!==null){const Ee=g.views;y!==null&&(e.setRenderTargetFramebuffer(A,y.framebuffer),e.setRenderTarget(A));let Ge=!1;Ee.length!==j.cameras.length&&(j.cameras.length=0,Ge=!0);for(let ht=0;ht<Ee.length;ht++){const St=Ee[ht];let bt=null;if(y!==null)bt=y.getViewport(St);else{const nn=x.getViewSubImage(v,St);bt=nn.viewport,ht===0&&(e.setRenderTargetTextures(A,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(A))}let pt=k[ht];pt===void 0&&(pt=new ti,pt.layers.enable(ht),pt.viewport=new cn,k[ht]=pt),pt.matrix.fromArray(St.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(St.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(bt.x,bt.y,bt.width,bt.height),ht===0&&(j.matrix.copy(pt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ge===!0&&j.cameras.push(pt)}const at=o.enabledFeatures;if(at&&at.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){x=r.getBinding();const ht=x.getDepthInformation(Ee[0]);ht&&ht.isValid&&ht.texture&&S.init(ht,o.renderState)}if(at&&at.includes("camera-access")&&w){e.state.unbindTexture(),x=r.getBinding();for(let ht=0;ht<Ee.length;ht++){const St=Ee[ht].camera;if(St){let bt=_[St];bt||(bt=new bS,_[St]=bt);const pt=x.getCameraImage(St);bt.sourceTexture=pt}}}}for(let Ee=0;Ee<P.length;Ee++){const Ge=L[Ee],at=P[Ee];Ge!==null&&at!==void 0&&at.update(Ge,be,h||u)}Te&&Te(re,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),M=null}const Be=new DS;Be.setAnimationLoop(Ce),this.setAnimationLoop=function(re){Te=re},this.dispose=function(){}}}const nD=new un,BS=new ot;BS.set(-1,0,0,0,1,0,0,0,1);function iD(a,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,AS(a)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,R,U,A){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?c(S,_):_.isMeshLambertMaterial?(c(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(S,_),x(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(S,_),v(S,_),_.isMeshPhysicalMaterial&&y(S,_,A)):_.isMeshMatcapMaterial?(c(S,_),M(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),w(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,R,U):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===ni&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===ni&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const R=e.get(_),U=R.envMap,A=R.envMapRotation;U&&(S.envMap.value=U,S.envMapRotation.value.setFromMatrix4(nD.makeRotationFromEuler(A)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(BS),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,R,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*R,S.scale.value=U*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,R){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ni&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function w(S,_){const R=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function aD(a,e,n,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,P){const L=P.program;r.uniformBlockBinding(A,L)}function h(A,P){let L=o[A.id];L===void 0&&(S(A),L=g(A),o[A.id]=L,A.addEventListener("dispose",R));const B=P.program;r.updateUBOMapping(A,B);const T=e.render.frame;c[A.id]!==T&&(v(A),c[A.id]=T)}function g(A){const P=x();A.__bindingPointIndex=P;const L=a.createBuffer(),B=A.__size,T=A.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,B,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,P,L),L}function x(){for(let A=0;A<d;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const P=o[A.id],L=A.uniforms,B=A.__cache;a.bindBuffer(a.UNIFORM_BUFFER,P);for(let T=0,O=L.length;T<O;T++){const V=L[T];if(Array.isArray(V))for(let k=0,j=V.length;k<j;k++)y(V[k],T,k,B);else y(V,T,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(A,P,L,B){if(w(A,P,L,B)===!0){const T=A.__offset,O=A.value;if(Array.isArray(O)){let V=0;for(let k=0;k<O.length;k++){const j=O[k],ce=_(j);M(j,A.__data,V),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(V+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(O,A.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,A.__data)}}function M(A,P,L){typeof A=="number"||typeof A=="boolean"?P[0]=A:A.isMatrix3?(P[0]=A.elements[0],P[1]=A.elements[1],P[2]=A.elements[2],P[3]=0,P[4]=A.elements[3],P[5]=A.elements[4],P[6]=A.elements[5],P[7]=0,P[8]=A.elements[6],P[9]=A.elements[7],P[10]=A.elements[8],P[11]=0):ArrayBuffer.isView(A)?P.set(new A.constructor(A.buffer,A.byteOffset,P.length)):A.toArray(P,L)}function w(A,P,L,B){const T=A.value,O=P+"_"+L;if(B[O]===void 0)return typeof T=="number"||typeof T=="boolean"?B[O]=T:ArrayBuffer.isView(T)?B[O]=T.slice():B[O]=T.clone(),!0;{const V=B[O];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return B[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function S(A){const P=A.uniforms;let L=0;const B=16;for(let O=0,V=P.length;O<V;O++){const k=Array.isArray(P[O])?P[O]:[P[O]];for(let j=0,ce=k.length;j<ce;j++){const ue=k[j],K=Array.isArray(ue.value)?ue.value:[ue.value];for(let H=0,F=K.length;H<F;H++){const $=K[H],ge=_($),ye=L%B,I=ye%ge.boundary,Q=ye+I;L+=I,Q!==0&&B-Q<ge.storage&&(L+=B-Q),ue.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=L,L+=ge.storage}}}const T=L%B;return T>0&&(L+=B-T),A.__size=L,A.__cache={},this}function _(A){const P={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(P.boundary=4,P.storage=4):A.isVector2?(P.boundary=8,P.storage=8):A.isVector3||A.isColor?(P.boundary=16,P.storage=12):A.isVector4?(P.boundary=16,P.storage=16):A.isMatrix3?(P.boundary=48,P.storage=48):A.isMatrix4?(P.boundary=64,P.storage=64):A.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(P.boundary=16,P.storage=A.byteLength):it("WebGLRenderer: Unsupported uniform value type.",A),P}function R(A){const P=A.target;P.removeEventListener("dispose",R);const L=u.indexOf(P.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function U(){for(const A in o)a.deleteBuffer(o[A]);u=[],o={},c={}}return{bind:m,update:h,dispose:U}}const rD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function sD(){return Zi===null&&(Zi=new IA(rD,16,16,as,Pa),Zi.name="DFG_LUT",Zi.minFilter=Hn,Zi.magFilter=Hn,Zi.wrapS=Na,Zi.wrapT=Na,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class Vm{constructor(e={}){const{canvas:n=pA(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1,outputBufferType:y=wi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const w=y,S=new Set([Dm,Cm,Rm]),_=new Set([wi,na,Al,wl,Am,wm]),R=new Uint32Array(4),U=new Int32Array(4),A=new X;let P=null,L=null;const B=[],T=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let k=!1,j=null,ce=null,ue=null,K=null;this._outputColorSpace=Xn;let H=0,F=0,$=null,ge=-1,ye=null;const I=new cn,Q=new cn;let Te=null;const Ce=new lt(0);let Be=0,re=n.width,be=n.height,Ee=1,Ge=null,at=null;const Qe=new cn(0,0,re,be),qt=new cn(0,0,re,be);let ht=!1;const St=new yS;let bt=!1,pt=!1;const nn=new un,an=new X,rn=new cn,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function sn(){return $===null?Ee:1}let Z=r;function zt(C,Y){return n.getContext(C,Y)}try{const C={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Em}`),n.addEventListener("webglcontextlost",Kt,!1),n.addEventListener("webglcontextrestored",Ut,!1),n.addEventListener("webglcontextcreationerror",ai,!1),Z===null){const Y="webgl2";if(Z=zt(Y,C),Z===null)throw zt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Tt("WebGLRenderer: "+C.message),C}let Ct,z,E,ee,se,pe,Ae,Ne,he,me,Re,ze,Oe,Ue,Ke,Je,rt,q,we,xe,De,Fe,Me;function Ye(){Ct=new s2(Z),Ct.init(),De=new Q3(Z,Ct),z=new JC(Z,Ct,e,De),E=new Z3(Z,Ct),z.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),ce=Z.createFramebuffer(),ue=Z.createFramebuffer(),K=Z.createFramebuffer(),ee=new c2(Z),se=new P3,pe=new K3(Z,Ct,E,se,z,De,ee),Ae=new r2(V),Ne=new hw(Z),Fe=new KC(Z,Ne),he=new o2(Z,Ne,ee,Fe),me=new f2(Z,he,Ne,Fe,ee),q=new u2(Z,z,pe),Ke=new $C(se),Re=new O3(V,Ae,Ct,z,Fe,Ke),ze=new iD(V,se),Oe=new B3,Ue=new k3(Ct),rt=new ZC(V,Ae,E,me,M,m),Je=new j3(V,me,z),Me=new aD(Z,ee,z,E),we=new QC(Z,Ct,ee),xe=new l2(Z,Ct,ee),ee.programs=Re.programs,V.capabilities=z,V.extensions=Ct,V.properties=se,V.renderLists=Oe,V.shadowMap=Je,V.state=E,V.info=ee}Ye(),w!==wi&&(O=new h2(w,n.width,n.height,d,o,c));const ke=new tD(V,Z);this.xr=ke,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const C=Ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(C){C!==void 0&&(Ee=C,this.setSize(re,be,!1))},this.getSize=function(C){return C.set(re,be)},this.setSize=function(C,Y,oe=!0){if(ke.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}re=C,be=Y,n.width=Math.floor(C*Ee),n.height=Math.floor(Y*Ee),oe===!0&&(n.style.width=C+"px",n.style.height=Y+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(re*Ee,be*Ee).floor()},this.setDrawingBufferSize=function(C,Y,oe){re=C,be=Y,Ee=oe,n.width=Math.floor(C*oe),n.height=Math.floor(Y*oe),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(w===wi){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(Qe)},this.setViewport=function(C,Y,oe,ie){C.isVector4?Qe.set(C.x,C.y,C.z,C.w):Qe.set(C,Y,oe,ie),E.viewport(I.copy(Qe).multiplyScalar(Ee).round())},this.getScissor=function(C){return C.copy(qt)},this.setScissor=function(C,Y,oe,ie){C.isVector4?qt.set(C.x,C.y,C.z,C.w):qt.set(C,Y,oe,ie),E.scissor(Q.copy(qt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(C){E.setScissorTest(ht=C)},this.setOpaqueSort=function(C){Ge=C},this.setTransparentSort=function(C){at=C},this.getClearColor=function(C){return C.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,oe=!0){let ie=0;if(C){let ae=!1;if($!==null){const Pe=$.texture.format;ae=S.has(Pe)}if(ae){const Pe=$.texture.type,Ve=_.has(Pe),Le=rt.getClearColor(),We=rt.getClearAlpha(),Xe=Le.r,$e=Le.g,ct=Le.b;Ve?(R[0]=Xe,R[1]=$e,R[2]=ct,R[3]=We,Z.clearBufferuiv(Z.COLOR,0,R)):(U[0]=Xe,U[1]=$e,U[2]=ct,U[3]=We,Z.clearBufferiv(Z.COLOR,0,U))}else ie|=Z.COLOR_BUFFER_BIT}Y&&(ie|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ie|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&Z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){n.removeEventListener("webglcontextlost",Kt,!1),n.removeEventListener("webglcontextrestored",Ut,!1),n.removeEventListener("webglcontextcreationerror",ai,!1),rt.dispose(),Oe.dispose(),Ue.dispose(),se.dispose(),Ae.dispose(),me.dispose(),Fe.dispose(),Me.dispose(),Re.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",gn),ke.removeEventListener("sessionend",Cn),Yn.stop()};function Kt(C){C.preventDefault(),f_("WebGLRenderer: Context Lost."),k=!0}function Ut(){f_("WebGLRenderer: Context Restored."),k=!1;const C=ee.autoReset,Y=Je.enabled,oe=Je.autoUpdate,ie=Je.needsUpdate,ae=Je.type;Ye(),ee.autoReset=C,Je.enabled=Y,Je.autoUpdate=oe,Je.needsUpdate=ie,Je.type=ae}function ai(C){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ri(C){const Y=C.target;Y.removeEventListener("dispose",ri),_o(Y)}function _o(C){yo(C),se.remove(C)}function yo(C){const Y=se.get(C).programs;Y!==void 0&&(Y.forEach(function(oe){Re.releaseProgram(oe)}),C.isShaderMaterial&&Re.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,oe,ie,ae,Pe){Y===null&&(Y=fn);const Ve=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Le=Va(C,Y,oe,ie,ae);E.setMaterial(ie,Ve);let We=oe.index,Xe=1;if(ie.wireframe===!0){if(We=he.getWireframeAttribute(oe),We===void 0)return;Xe=2}const $e=oe.drawRange,ct=oe.attributes.position;let Ze=$e.start*Xe,At=($e.start+$e.count)*Xe;Pe!==null&&(Ze=Math.max(Ze,Pe.start*Xe),At=Math.min(At,(Pe.start+Pe.count)*Xe)),We!==null?(Ze=Math.max(Ze,0),At=Math.min(At,We.count)):ct!=null&&(Ze=Math.max(Ze,0),At=Math.min(At,ct.count));const Qt=At-Ze;if(Qt<0||Qt===1/0)return;Fe.setup(ae,ie,Le,oe,We);let kt,Lt=we;if(We!==null&&(kt=Ne.get(We),Lt=xe,Lt.setIndex(kt)),ae.isMesh)ie.wireframe===!0?(E.setLineWidth(ie.wireframeLinewidth*sn()),Lt.setMode(Z.LINES)):Lt.setMode(Z.TRIANGLES);else if(ae.isLine){let Ot=ie.linewidth;Ot===void 0&&(Ot=1),E.setLineWidth(Ot*sn()),ae.isLineSegments?Lt.setMode(Z.LINES):ae.isLineLoop?Lt.setMode(Z.LINE_LOOP):Lt.setMode(Z.LINE_STRIP)}else ae.isPoints?Lt.setMode(Z.POINTS):ae.isSprite&&Lt.setMode(Z.TRIANGLES);if(ae.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Ot=ae._multiDrawStarts,He=ae._multiDrawCounts,In=ae._multiDrawCount,mt=We?Ne.get(We).bytesPerElement:1,Mn=se.get(ie).currentProgram.getUniforms();for(let si=0;si<In;si++)Mn.setValue(Z,"_gl_DrawID",si),Lt.render(Ot[si]/mt,He[si])}else if(ae.isInstancedMesh)Lt.renderInstances(Ze,Qt,ae.count);else if(oe.isInstancedBufferGeometry){const Ot=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,He=Math.min(oe.instanceCount,Ot);Lt.renderInstances(Ze,Qt,He)}else Lt.render(Ze,Qt)};function So(C,Y,oe){C.transparent===!0&&C.side===Da&&C.forceSinglePass===!1?(C.side=ni,C.needsUpdate=!0,Ga(C,Y,oe),C.side=Mr,C.needsUpdate=!0,Ga(C,Y,oe),C.side=Da):Ga(C,Y,oe)}this.compile=function(C,Y,oe=null){oe===null&&(oe=C),L=Ue.get(oe),L.init(Y),T.push(L),oe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),C!==oe&&C.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights();const ie=new Set;return C.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Pe=ae.material;if(Pe)if(Array.isArray(Pe))for(let Ve=0;Ve<Pe.length;Ve++){const Le=Pe[Ve];So(Le,oe,ae),ie.add(Le)}else So(Pe,oe,ae),ie.add(Pe)}),L=T.pop(),ie},this.compileAsync=function(C,Y,oe=null){const ie=this.compile(C,Y,oe);return new Promise(ae=>{function Pe(){if(ie.forEach(function(Ve){se.get(Ve).currentProgram.isReady()&&ie.delete(Ve)}),ie.size===0){ae(C);return}setTimeout(Pe,10)}Ct.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let os=null;function Vi(C){os&&os(C)}function gn(){Yn.stop()}function Cn(){Yn.start()}const Yn=new DS;Yn.setAnimationLoop(Vi),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(C){os=C,ke.setAnimationLoop(C),C===null?Yn.stop():Yn.start()},ke.addEventListener("sessionstart",gn),ke.addEventListener("sessionend",Cn),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;j!==null&&j.renderStart(C,Y);const oe=ke.enabled===!0&&ke.isPresenting===!0,ie=O!==null&&($===null||oe)&&O.begin(V,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(Y),Y=ke.getCamera()),C.isScene===!0&&C.onBeforeRender(V,C,Y,$),L=Ue.get(C,T.length),L.init(Y),L.state.textureUnits=pe.getTextureUnits(),T.push(L),nn.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),St.setFromProjectionMatrix(nn,Ji,Y.reversedDepth),pt=this.localClippingEnabled,bt=Ke.init(this.clippingPlanes,pt),P=Oe.get(C,B.length),P.init(),B.push(P),ke.enabled===!0&&ke.isPresenting===!0){const Ve=V.xr.getDepthSensingMesh();Ve!==null&&Er(Ve,Y,-1/0,V.sortObjects)}Er(C,Y,0,V.sortObjects),P.finish(),V.sortObjects===!0&&P.sort(Ge,at,Y.reversedDepth),Wt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Wt&&rt.addToRenderList(P,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&Ke.beginShadows();const ae=L.state.shadowsArray;if(Je.render(ae,C,Y),bt===!0&&Ke.endShadows(),(ie&&O.hasRenderPass())===!1){const Ve=P.opaque,Le=P.transmissive;if(L.setupLights(),Y.isArrayCamera){const We=Y.cameras;if(Le.length>0)for(let Xe=0,$e=We.length;Xe<$e;Xe++){const ct=We[Xe];Bl(Ve,Le,C,ct)}Wt&&rt.render(C);for(let Xe=0,$e=We.length;Xe<$e;Xe++){const ct=We[Xe];Il(P,C,ct,ct.viewport)}}else Le.length>0&&Bl(Ve,Le,C,Y),Wt&&rt.render(C),Il(P,C,Y)}$!==null&&F===0&&(pe.updateMultisampleRenderTarget($),pe.updateRenderTargetMipmap($)),ie&&O.end(V),C.isScene===!0&&C.onAfterRender(V,C,Y),Fe.resetDefaultState(),ge=-1,ye=null,T.pop(),T.length>0?(L=T[T.length-1],pe.setTextureUnits(L.state.textureUnits),bt===!0&&Ke.setGlobalState(V.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?P=B[B.length-1]:P=null,j!==null&&j.renderEnd()};function Er(C,Y,oe,ie){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||St.intersectsSprite(C)){ie&&rn.setFromMatrixPosition(C.matrixWorld).applyMatrix4(nn);const Ve=me.update(C),Le=C.material;Le.visible&&P.push(C,Ve,Le,oe,rn.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||St.intersectsObject(C))){const Ve=me.update(C),Le=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),rn.copy(C.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),rn.copy(Ve.boundingSphere.center)),rn.applyMatrix4(C.matrixWorld).applyMatrix4(nn)),Array.isArray(Le)){const We=Ve.groups;for(let Xe=0,$e=We.length;Xe<$e;Xe++){const ct=We[Xe],Ze=Le[ct.materialIndex];Ze&&Ze.visible&&P.push(C,Ve,Ze,oe,rn.z,ct)}}else Le.visible&&P.push(C,Ve,Le,oe,rn.z,null)}}const Pe=C.children;for(let Ve=0,Le=Pe.length;Ve<Le;Ve++)Er(Pe[Ve],Y,oe,ie)}function Il(C,Y,oe,ie){const{opaque:ae,transmissive:Pe,transparent:Ve}=C;L.setupLightsView(oe),bt===!0&&Ke.setGlobalState(V.clippingPlanes,oe),ie&&E.viewport(I.copy(ie)),ae.length>0&&Tr(ae,Y,oe),Pe.length>0&&Tr(Pe,Y,oe),Ve.length>0&&Tr(Ve,Y,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Bl(C,Y,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const Ze=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new ea(1,1,{generateMipmaps:!0,type:Ze?Pa:wi,minFilter:$r,samples:Math.max(4,z.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Pe=L.state.transmissionRenderTarget[ie.id],Ve=ie.viewport||I;Pe.setSize(Ve.z*V.transmissionResolutionScale,Ve.w*V.transmissionResolutionScale);const Le=V.getRenderTarget(),We=V.getActiveCubeFace(),Xe=V.getActiveMipmapLevel();V.setRenderTarget(Pe),V.getClearColor(Ce),Be=V.getClearAlpha(),Be<1&&V.setClearColor(16777215,.5),V.clear(),Wt&&rt.render(oe);const $e=V.toneMapping;V.toneMapping=$i;const ct=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),bt===!0&&Ke.setGlobalState(V.clippingPlanes,ie),Tr(C,oe,ie),pe.updateMultisampleRenderTarget(Pe),pe.updateRenderTargetMipmap(Pe),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let At=0,Qt=Y.length;At<Qt;At++){const kt=Y[At],{object:Lt,geometry:Ot,material:He,group:In}=kt;if(He.side===Da&&Lt.layers.test(ie.layers)){const mt=He.side;He.side=ni,He.needsUpdate=!0,Ha(Lt,oe,ie,Ot,He,In),He.side=mt,He.needsUpdate=!0,Ze=!0}}Ze===!0&&(pe.updateMultisampleRenderTarget(Pe),pe.updateRenderTargetMipmap(Pe))}V.setRenderTarget(Le,We,Xe),V.setClearColor(Ce,Be),ct!==void 0&&(ie.viewport=ct),V.toneMapping=$e}function Tr(C,Y,oe){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let ae=0,Pe=C.length;ae<Pe;ae++){const Ve=C[ae],{object:Le,geometry:We,group:Xe}=Ve;let $e=Ve.material;$e.allowOverride===!0&&ie!==null&&($e=ie),Le.layers.test(oe.layers)&&Ha(Le,Y,oe,We,$e,Xe)}}function Ha(C,Y,oe,ie,ae,Pe){C.onBeforeRender(V,Y,oe,ie,ae,Pe),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(V,Y,oe,ie,C,Pe),ae.transparent===!0&&ae.side===Da&&ae.forceSinglePass===!1?(ae.side=ni,ae.needsUpdate=!0,V.renderBufferDirect(oe,Y,ie,ae,C,Pe),ae.side=Mr,ae.needsUpdate=!0,V.renderBufferDirect(oe,Y,ie,ae,C,Pe),ae.side=Da):V.renderBufferDirect(oe,Y,ie,ae,C,Pe),C.onAfterRender(V,Y,oe,ie,ae,Pe)}function Ga(C,Y,oe){Y.isScene!==!0&&(Y=fn);const ie=se.get(C),ae=L.state.lights,Pe=L.state.shadowsArray,Ve=ae.state.version,Le=Re.getParameters(C,ae.state,Pe,Y,oe,L.state.lightProbeGridArray),We=Re.getProgramCacheKey(Le);let Xe=ie.programs;ie.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;const $e=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ie.envMap=Ae.get(C.envMap||ie.environment,$e),ie.envMapRotation=ie.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Xe===void 0&&(C.addEventListener("dispose",ri),Xe=new Map,ie.programs=Xe);let ct=Xe.get(We);if(ct!==void 0){if(ie.currentProgram===ct&&ie.lightsStateVersion===Ve)return sa(C,Le),ct}else Le.uniforms=Re.getUniforms(C),j!==null&&C.isNodeMaterial&&j.build(C,oe,Le),C.onBeforeCompile(Le,V),ct=Re.acquireProgram(Le,We),Xe.set(We,ct),ie.uniforms=Le.uniforms;const Ze=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=Ke.uniform),sa(C,Le),ie.needsLights=Fl(C),ie.lightsStateVersion=Ve,ie.needsLights&&(Ze.ambientLightColor.value=ae.state.ambient,Ze.lightProbe.value=ae.state.probe,Ze.directionalLights.value=ae.state.directional,Ze.directionalLightShadows.value=ae.state.directionalShadow,Ze.spotLights.value=ae.state.spot,Ze.spotLightShadows.value=ae.state.spotShadow,Ze.rectAreaLights.value=ae.state.rectArea,Ze.ltc_1.value=ae.state.rectAreaLTC1,Ze.ltc_2.value=ae.state.rectAreaLTC2,Ze.pointLights.value=ae.state.point,Ze.pointLightShadows.value=ae.state.pointShadow,Ze.hemisphereLights.value=ae.state.hemi,Ze.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ae.state.spotLightMatrix,Ze.spotLightMap.value=ae.state.spotLightMap,Ze.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=ct,ie.uniformsList=null,ct}function ra(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Ru.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function sa(C,Y){const oe=se.get(C);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function Ar(C,Y){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;A.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,ie=C.length;oe<ie;oe++){const ae=C[oe];if(ae.texture!==null&&ae.boundingBox.containsPoint(A))return ae}return null}function Va(C,Y,oe,ie,ae){Y.isScene!==!0&&(Y=fn),pe.resetTextureUnits();const Pe=Y.fog,Ve=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Y.environment:null,Le=$===null?V.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Et.workingColorSpace,We=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Xe=Ae.get(ie.envMap||Ve,We),$e=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ct=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!oe.morphAttributes.position,At=!!oe.morphAttributes.normal,Qt=!!oe.morphAttributes.color;let kt=$i;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(kt=V.toneMapping);const Lt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0,He=se.get(ie),In=L.state.lights;if(bt===!0&&(pt===!0||C!==ye)){const Nt=C===ye&&ie.id===ge;Ke.setState(ie,C,Nt)}let mt=!1;ie.version===He.__version?(He.needsLights&&He.lightsStateVersion!==In.state.version||He.outputColorSpace!==Le||ae.isBatchedMesh&&He.batching===!1||!ae.isBatchedMesh&&He.batching===!0||ae.isBatchedMesh&&He.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&He.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&He.instancing===!1||!ae.isInstancedMesh&&He.instancing===!0||ae.isSkinnedMesh&&He.skinning===!1||!ae.isSkinnedMesh&&He.skinning===!0||ae.isInstancedMesh&&He.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&He.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&He.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&He.instancingMorph===!1&&ae.morphTexture!==null||He.envMap!==Xe||ie.fog===!0&&He.fog!==Pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ke.numPlanes||He.numIntersection!==Ke.numIntersection)||He.vertexAlphas!==$e||He.vertexTangents!==ct||He.morphTargets!==Ze||He.morphNormals!==At||He.morphColors!==Qt||He.toneMapping!==kt||He.morphTargetsCount!==Ot||!!He.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,He.__version=ie.version);let Mn=He.currentProgram;mt===!0&&(Mn=Ga(ie,Y,ae),j&&ie.isNodeMaterial&&j.onUpdateProgram(ie,Mn,He));let si=!1,Ci=!1,oi=!1;const Pt=Mn.getUniforms(),Jt=He.uniforms;if(E.useProgram(Mn.program)&&(si=!0,Ci=!0,oi=!0),ie.id!==ge&&(ge=ie.id,Ci=!0),He.needsLights){const Nt=Ar(L.state.lightProbeGridArray,ae);He.lightProbeGrid!==Nt&&(He.lightProbeGrid=Nt,Ci=!0)}if(si||ye!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Pt.setValue(Z,"projectionMatrix",C.projectionMatrix),Pt.setValue(Z,"viewMatrix",C.matrixWorldInverse);const ki=Pt.map.cameraPosition;ki!==void 0&&ki.setValue(Z,an.setFromMatrixPosition(C.matrixWorld)),z.logarithmicDepthBuffer&&Pt.setValue(Z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(Z,"isOrthographic",C.isOrthographicCamera===!0),ye!==C&&(ye=C,Ci=!0,oi=!0)}if(He.needsLights&&(In.state.directionalShadowMap.length>0&&Pt.setValue(Z,"directionalShadowMap",In.state.directionalShadowMap,pe),In.state.spotShadowMap.length>0&&Pt.setValue(Z,"spotShadowMap",In.state.spotShadowMap,pe),In.state.pointShadowMap.length>0&&Pt.setValue(Z,"pointShadowMap",In.state.pointShadowMap,pe)),ae.isSkinnedMesh){Pt.setOptional(Z,ae,"bindMatrix"),Pt.setOptional(Z,ae,"bindMatrixInverse");const Nt=ae.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Pt.setValue(Z,"boneTexture",Nt.boneTexture,pe))}ae.isBatchedMesh&&(Pt.setOptional(Z,ae,"batchingTexture"),Pt.setValue(Z,"batchingTexture",ae._matricesTexture,pe),Pt.setOptional(Z,ae,"batchingIdTexture"),Pt.setValue(Z,"batchingIdTexture",ae._indirectTexture,pe),Pt.setOptional(Z,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Pt.setValue(Z,"batchingColorTexture",ae._colorsTexture,pe));const Di=oe.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&q.update(ae,oe,Mn),(Ci||He.receiveShadow!==ae.receiveShadow)&&(He.receiveShadow=ae.receiveShadow,Pt.setValue(Z,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Y.environment!==null&&(Jt.envMapIntensity.value=Y.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=sD()),Ci){if(Pt.setValue(Z,"toneMappingExposure",V.toneMappingExposure),He.needsLights&&vn(Jt,oi),Pe&&ie.fog===!0&&ze.refreshFogUniforms(Jt,Pe),ze.refreshMaterialUniforms(Jt,ie,Ee,be,L.state.transmissionRenderTarget[C.id]),He.needsLights&&He.lightProbeGrid){const Nt=He.lightProbeGrid;Jt.probesSH.value=Nt.texture,Jt.probesMin.value.copy(Nt.boundingBox.min),Jt.probesMax.value.copy(Nt.boundingBox.max),Jt.probesResolution.value.copy(Nt.resolution)}Ru.upload(Z,ra(He),Jt,pe)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ru.upload(Z,ra(He),Jt,pe),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(Z,"center",ae.center),Pt.setValue(Z,"modelViewMatrix",ae.modelViewMatrix),Pt.setValue(Z,"normalMatrix",ae.normalMatrix),Pt.setValue(Z,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Nt=ie.uniformsGroups;for(let ki=0,ka=Nt.length;ki<ka;ki++){const wr=Nt[ki];Me.update(wr,Mn),Me.bind(wr,Mn)}}return Mn}function vn(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Fl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,Y,oe){const ie=se.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),se.get(C.texture).__webglTexture=Y,se.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const oe=se.get(C);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,oe=0){$=C,H=Y,F=oe;let ie=null,ae=!1,Pe=!1;if(C){const Le=se.get(C);if(Le.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Z.FRAMEBUFFER,Le.__webglFramebuffer),I.copy(C.viewport),Q.copy(C.scissor),Te=C.scissorTest,E.viewport(I),E.scissor(Q),E.setScissorTest(Te),ge=-1;return}else if(Le.__webglFramebuffer===void 0)pe.setupRenderTarget(C);else if(Le.__hasExternalTextures)pe.rebindTextures(C,se.get(C.texture).__webglTexture,se.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $e=C.depthTexture;if(Le.__boundDepthTexture!==$e){if($e!==null&&se.has($e)&&(C.width!==$e.image.width||C.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(C)}}const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const Xe=se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[Y])?ie=Xe[Y][oe]:ie=Xe[Y],ae=!0):C.samples>0&&pe.useMultisampledRTT(C)===!1?ie=se.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?ie=Xe[oe]:ie=Xe,I.copy(C.viewport),Q.copy(C.scissor),Te=C.scissorTest}else I.copy(Qe).multiplyScalar(Ee).floor(),Q.copy(qt).multiplyScalar(Ee).floor(),Te=ht;if(oe!==0&&(ie=ce),E.bindFramebuffer(Z.FRAMEBUFFER,ie)&&E.drawBuffers(C,ie),E.viewport(I),E.scissor(Q),E.setScissorTest(Te),ae){const Le=se.get(C.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Le.__webglTexture,oe)}else if(Pe){const Le=Y;for(let We=0;We<C.textures.length;We++){const Xe=se.get(C.textures[We]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+We,Xe.__webglTexture,oe,Le)}}else if(C!==null&&oe!==0){const Le=se.get(C.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Le.__webglTexture,oe)}ge=-1},this.readRenderTargetPixels=function(C,Y,oe,ie,ae,Pe,Ve,Le=0){if(!(C&&C.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){E.bindFramebuffer(Z.FRAMEBUFFER,We);try{const Xe=C.textures[Le],$e=Xe.format,ct=Xe.type;if(C.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Le),!z.textureFormatReadable($e)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(ct)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ie&&oe>=0&&oe<=C.height-ae&&Z.readPixels(Y,oe,ie,ae,De.convert($e),De.convert(ct),Pe)}finally{const Xe=$!==null?se.get($).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(C,Y,oe,ie,ae,Pe,Ve,Le=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(Y>=0&&Y<=C.width-ie&&oe>=0&&oe<=C.height-ae){E.bindFramebuffer(Z.FRAMEBUFFER,We);const Xe=C.textures[Le],$e=Xe.format,ct=Xe.type;if(C.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Le),!z.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ze),Z.bufferData(Z.PIXEL_PACK_BUFFER,Pe.byteLength,Z.STREAM_READ),Z.readPixels(Y,oe,ie,ae,De.convert($e),De.convert(ct),0);const At=$!==null?se.get($).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,At);const Qt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await mA(Z,Qt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ze),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Pe),Z.deleteBuffer(Ze),Z.deleteSync(Qt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,oe=0){const ie=Math.pow(2,-oe),ae=Math.floor(C.image.width*ie),Pe=Math.floor(C.image.height*ie),Ve=Y!==null?Y.x:0,Le=Y!==null?Y.y:0;pe.setTexture2D(C,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,oe,0,0,Ve,Le,ae,Pe),E.unbindTexture()},this.copyTextureToTexture=function(C,Y,oe=null,ie=null,ae=0,Pe=0){let Ve,Le,We,Xe,$e,ct,Ze,At,Qt;const kt=C.isCompressedTexture?C.mipmaps[Pe]:C.image;if(oe!==null)Ve=oe.max.x-oe.min.x,Le=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,$e=oe.min.y,ct=oe.isBox3?oe.min.z:0;else{const Jt=Math.pow(2,-ae);Ve=Math.floor(kt.width*Jt),Le=Math.floor(kt.height*Jt),C.isDataArrayTexture?We=kt.depth:C.isData3DTexture?We=Math.floor(kt.depth*Jt):We=1,Xe=0,$e=0,ct=0}ie!==null?(Ze=ie.x,At=ie.y,Qt=ie.z):(Ze=0,At=0,Qt=0);const Lt=De.convert(Y.format),Ot=De.convert(Y.type);let He;Y.isData3DTexture?(pe.setTexture3D(Y,0),He=Z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(pe.setTexture2DArray(Y,0),He=Z.TEXTURE_2D_ARRAY):(pe.setTexture2D(Y,0),He=Z.TEXTURE_2D),E.activeTexture(Z.TEXTURE0),E.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(Z.UNPACK_ALIGNMENT,Y.unpackAlignment);const In=E.getParameter(Z.UNPACK_ROW_LENGTH),mt=E.getParameter(Z.UNPACK_IMAGE_HEIGHT),Mn=E.getParameter(Z.UNPACK_SKIP_PIXELS),si=E.getParameter(Z.UNPACK_SKIP_ROWS),Ci=E.getParameter(Z.UNPACK_SKIP_IMAGES);E.pixelStorei(Z.UNPACK_ROW_LENGTH,kt.width),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,kt.height),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,Xe),E.pixelStorei(Z.UNPACK_SKIP_ROWS,$e),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,ct);const oi=C.isDataArrayTexture||C.isData3DTexture,Pt=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const Jt=se.get(C),Di=se.get(Y),Nt=se.get(Jt.__renderTarget),ki=se.get(Di.__renderTarget);E.bindFramebuffer(Z.READ_FRAMEBUFFER,Nt.__webglFramebuffer),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let ka=0;ka<We;ka++)oi&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,se.get(C).__webglTexture,ae,ct+ka),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,se.get(Y).__webglTexture,Pe,Qt+ka)),Z.blitFramebuffer(Xe,$e,Ve,Le,Ze,At,Ve,Le,Z.DEPTH_BUFFER_BIT,Z.NEAREST);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ae!==0||C.isRenderTargetTexture||se.has(C)){const Jt=se.get(C),Di=se.get(Y);E.bindFramebuffer(Z.READ_FRAMEBUFFER,ue),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,K);for(let Nt=0;Nt<We;Nt++)oi?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Jt.__webglTexture,ae,ct+Nt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Jt.__webglTexture,ae),Pt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Di.__webglTexture,Pe,Qt+Nt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Di.__webglTexture,Pe),ae!==0?Z.blitFramebuffer(Xe,$e,Ve,Le,Ze,At,Ve,Le,Z.COLOR_BUFFER_BIT,Z.NEAREST):Pt?Z.copyTexSubImage3D(He,Pe,Ze,At,Qt+Nt,Xe,$e,Ve,Le):Z.copyTexSubImage2D(He,Pe,Ze,At,Xe,$e,Ve,Le);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Pt?C.isDataTexture||C.isData3DTexture?Z.texSubImage3D(He,Pe,Ze,At,Qt,Ve,Le,We,Lt,Ot,kt.data):Y.isCompressedArrayTexture?Z.compressedTexSubImage3D(He,Pe,Ze,At,Qt,Ve,Le,We,Lt,kt.data):Z.texSubImage3D(He,Pe,Ze,At,Qt,Ve,Le,We,Lt,Ot,kt):C.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Pe,Ze,At,Ve,Le,Lt,Ot,kt.data):C.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Pe,Ze,At,kt.width,kt.height,Lt,kt.data):Z.texSubImage2D(Z.TEXTURE_2D,Pe,Ze,At,Ve,Le,Lt,Ot,kt);E.pixelStorei(Z.UNPACK_ROW_LENGTH,In),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,mt),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,Mn),E.pixelStorei(Z.UNPACK_SKIP_ROWS,si),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ci),Pe===0&&Y.generateMipmaps&&Z.generateMipmap(He),E.unbindTexture()},this.initRenderTarget=function(C){se.get(C).__webglFramebuffer===void 0&&pe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?pe.setTextureCube(C,0):C.isData3DTexture?pe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?pe.setTexture2DArray(C,0):pe.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){H=0,F=0,$=null,E.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}const ep=900;function oD(){const a=fe.useRef(null);return fe.useEffect(()=>{const e=a.current;if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=new Om,r=new ti(48,1,.1,100);r.position.set(0,0,9);const o=new Vm({alpha:!0,antialias:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),o.outputColorSpace=Xn,e.appendChild(o.domElement);const c=new io;n.add(c);const u=new Float32Array(ep*3),d=new Float32Array(ep*3),m=[new lt("#7258ee"),new lt("#3d98f1"),new lt("#63d8b0")];for(let F=0;F<ep;F+=1){const $=2.1+Math.random()*2.6,ge=Math.random()*Math.PI*2;u[F*3]=Math.cos(ge)*$+(Math.random()-.5)*1.2,u[F*3+1]=Math.sin(ge)*$*.6+(Math.random()-.5)*1.4,u[F*3+2]=(Math.random()-.5)*4.5;const ye=m[F%m.length];d[F*3]=ye.r,d[F*3+1]=ye.g,d[F*3+2]=ye.b}const h=new Pn;h.setAttribute("position",new Gn(u,3)),h.setAttribute("color",new Gn(d,3));const g=new Pm({size:.035,transparent:!0,opacity:.52,vertexColors:!0,depthWrite:!1}),x=new Im(h,g);c.add(x);const v=new ES([new X(-4.5,-.8,0),new X(-2.8,1.2,-.7),new X(-.8,-.4,.6),new X(1.2,1.1,-.4),new X(3.1,-.7,.5),new X(4.6,.5,0)]),y=new lo({color:"#8068ef",transparent:!0,opacity:.3}),M=new Wn(new Gm(v,160,.018,6,!1),y);c.add(M);const w=new ow({transparent:!0,opacity:.72,flatShading:!0}),S=new zm(.72,1),_=new Wn(S,w),R=new Wn(S,w);_.position.set(-3.65,1.35,-.2),R.position.set(3.7,.55,-.4),R.scale.setScalar(.72),c.add(_,R);const U=new lo({color:"#7258ee",transparent:!0,opacity:.52}),A=new Zu(1.12,.025,8,96),P=new Wn(A,U);P.position.copy(_.position),P.rotation.x=1.1;const L=P.clone();L.position.copy(R.position),L.scale.setScalar(.72),c.add(P,L);const B=new lo({color:"#25d8a2"}),T=new Hm(.1,16,16),O=new Wn(T,B);c.add(O);const V=new tt,k=F=>V.set((F.clientX/window.innerWidth-.5)*2,(F.clientY/window.innerHeight-.5)*2);window.addEventListener("pointermove",k,{passive:!0});const j=()=>{const{width:F,height:$}=e.getBoundingClientRect();o.setSize(F,$,!1),c.scale.setScalar(F<640?.72:1),r.aspect=F/Math.max($,1),r.updateProjectionMatrix()},ce=new ResizeObserver(j);ce.observe(e),j();const ue=new CS;let K=0;const H=()=>{const F=ue.getElapsedTime();c.rotation.y+=(V.x*.22-c.rotation.y)*.035,c.rotation.x+=(-V.y*.1-c.rotation.x)*.035,x.rotation.z=F*.035,x.position.y=Math.sin(F*.6)*.12,_.rotation.set(F*.32,F*.48,F*.18),R.rotation.set(-F*.38,F*.42,-F*.22),P.rotation.z=F*.36,L.rotation.z=-F*.42,O.position.copy(v.getPoint(F*.08%1)),O.scale.setScalar(.8+Math.sin(F*3)*.22),y.opacity=.55+Math.sin(F*1.2)*.18,o.render(n,r),K=requestAnimationFrame(H)};return H(),()=>{cancelAnimationFrame(K),ce.disconnect(),window.removeEventListener("pointermove",k),h.dispose(),g.dispose(),M.geometry.dispose(),y.dispose(),S.dispose(),w.dispose(),A.dispose(),U.dispose(),T.dispose(),B.dispose(),o.dispose(),o.domElement.remove()}},[]),D.jsx("div",{ref:a,className:"hero-three-scene","aria-hidden":"true"})}function lD(){const a=fe.useRef(null);return fe.useEffect(()=>{const e=a.current;if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=window.innerWidth<768,r=n?750:1500,o=new Om,c=new ti(46,1,.1,60);c.position.set(0,.4,9.2);const u=new Vm({alpha:!0,antialias:!0});u.setPixelRatio(Math.min(window.devicePixelRatio,n?1.4:1.8)),u.outputColorSpace=Xn,e.appendChild(u.domElement);const d=new io;o.add(d);const m=new Float32Array(r*3),h=new Float32Array(r*3),g=new Float32Array(r),x=Math.PI*(3-Math.sqrt(5)),v=2,y=3;for(let F=0;F<r;F+=1){const $=1-F/(r-1)*2,ge=Math.sqrt(Math.max(1-$*$,0)),ye=x*F;m[F*3]=Math.cos(ye)*ge*3.1,m[F*3+1]=$*3.1,m[F*3+2]=Math.sin(ye)*ge*3.1;const I=F/r*Math.PI*2,Q=Math.cos(y*I)+2;h[F*3]=Q*Math.cos(v*I)*1.05,h[F*3+1]=-Math.sin(y*I)*1.15,h[F*3+2]=Q*Math.sin(v*I)*1.05,g[F]=Math.random()*Math.PI*2}const M=new Float32Array(r*3),w=new Float32Array(r*3),S=[new lt("#7258ee"),new lt("#3d98f1"),new lt("#63d8b0"),new lt("#b18cff")],_=new lt;for(let F=0;F<r;F+=1)_.copy(S[F%S.length]).lerp(S[(F*3+1)%S.length],.4),w[F*3]=_.r,w[F*3+1]=_.g,w[F*3+2]=_.b;const R=new Pn,U=new Gn(M,3);U.setUsage(dA),R.setAttribute("position",U),R.setAttribute("color",new Gn(w,3));const A=new Pm({size:.055,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1,sizeAttenuation:!0,blending:ns}),P=new Im(R,A);d.add(P);const L=new lo({color:"#8c52e5",transparent:!0,opacity:.16}),B=new Wn(new Zu(3.9,.012,8,120),L);B.rotation.x=Math.PI/2.4,d.add(B);const T=new tt,O=F=>{T.set((F.clientX/window.innerWidth-.5)*2,(F.clientY/window.innerHeight-.5)*2)};window.addEventListener("pointermove",O,{passive:!0});const V=()=>{const{width:F,height:$}=e.getBoundingClientRect();u.setSize(F,$,!1);const ge=F<640?.78:1;d.scale.setScalar(ge),c.aspect=F/Math.max($,1),c.updateProjectionMatrix()},k=new ResizeObserver(V);k.observe(e),V();const j=new X,ce=new X,ue=new CS;let K=0;const H=()=>{const F=ue.getElapsedTime(),$=(Math.sin(F*.32)+1)/2,ge=$*$*(3-2*$);for(let ye=0;ye<r;ye+=1){j.fromArray(m,ye*3),ce.fromArray(h,ye*3),j.lerp(ce,ge);const I=1+.07*Math.sin(F*1.35+g[ye]);M[ye*3]=j.x*I,M[ye*3+1]=j.y*I,M[ye*3+2]=j.z*I}U.needsUpdate=!0,d.rotation.y+=(T.x*.5-d.rotation.y)*.04+.0016,d.rotation.x+=(T.y*.28-d.rotation.x)*.04,B.rotation.z=F*.22,L.opacity=.12+(Math.sin(F*1.1)+1)*.05,A.opacity=.72+(Math.sin(F*.9)+1)*.07,u.render(o,c),K=requestAnimationFrame(H)};return H(),()=>{cancelAnimationFrame(K),k.disconnect(),window.removeEventListener("pointermove",O),R.dispose(),A.dispose(),B.geometry.dispose(),L.dispose(),u.dispose(),u.domElement.remove()}},[]),D.jsx("div",{ref:a,className:"hero-dynamic-points","aria-hidden":"true"})}function cD(){const a=fe.useRef(null);return fe.useEffect(()=>{const e=a.current;if(!e)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=window.innerWidth<768,o=r?56:96,c=r?34:58,u=24,d=o*c,m=new Om,h=new ti(55,1,1,6e3);h.position.set(0,320,560),h.lookAt(0,0,0);const g=new Vm({alpha:!0,antialias:!1,powerPreference:"low-power"});g.setPixelRatio(Math.min(window.devicePixelRatio,r?1.4:1.8)),g.outputColorSpace=Xn,g.setClearColor(0,0),e.appendChild(g.domElement);const x=new Float32Array(d*3),v=new Float32Array(d*3),y=[new lt("#7258ee"),new lt("#8c52e5"),new lt("#3d98f1"),new lt("#63d8b0")];let M=0;for(let ce=0;ce<o;ce+=1)for(let ue=0;ue<c;ue+=1){x[M*3]=ce*u-o*u/2,x[M*3+1]=0,x[M*3+2]=ue*u-c*u/2;const K=y[(ce+ue)%y.length].clone().lerp(y[(ce*7+ue*3)%y.length],.35);v[M*3]=K.r,v[M*3+1]=K.g,v[M*3+2]=K.b,M+=1}const w=new Pn;w.setAttribute("position",new Gn(x,3)),w.setAttribute("aColor",new Gn(v,3));const S=new Gi({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uAmplitude:{value:34},uSize:{value:r?3.4:4.2},uOpacity:{value:.55}},vertexShader:`
        uniform float uTime;
        uniform float uAmplitude;
        uniform float uSize;
        attribute vec3 aColor;
        varying vec3 vColor;
        varying float vGlow;

        void main() {
          vec3 pos = position;
          float waveA = sin(pos.x * 0.045 + uTime) * uAmplitude;
          float waveB = sin(pos.z * 0.06 + uTime * 0.8) * uAmplitude * 0.62;
          float waveC = sin((pos.x + pos.z) * 0.022 + uTime * 1.35) * uAmplitude * 0.45;
          pos.y += waveA + waveB + waveC;
          vGlow = smoothstep(-uAmplitude, uAmplitude, waveA + waveB);

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = uSize * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
          vColor = aColor;
        }
      `,fragmentShader:`
        uniform float uOpacity;
        varying vec3 vColor;
        varying float vGlow;

        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.12, d) * uOpacity * (0.55 + vGlow * 0.45);
          gl_FragColor = vec4(vColor, alpha);
        }
      `}),_=new Im(w,S);m.add(_);const R={scroll:0,scrollTarget:0,pointerX:0,pointerY:0,pointerXTarget:0,pointerYTarget:0,time:Math.random()*40,speed:.55},U=()=>Math.max(document.documentElement.scrollHeight-window.innerHeight,1),A=()=>{R.scrollTarget=Math.min(window.scrollY/U(),1)},P=ce=>{R.pointerXTarget=(ce.clientX/window.innerWidth-.5)*2,R.pointerYTarget=(ce.clientY/window.innerHeight-.5)*2};window.addEventListener("scroll",A,{passive:!0}),window.addEventListener("pointermove",P,{passive:!0}),A();const L=()=>{const{width:ce,height:ue}=e.getBoundingClientRect();g.setSize(ce,ue,!1),h.aspect=ce/Math.max(ue,1),h.updateProjectionMatrix()},B=new ResizeObserver(L);B.observe(e),L();const T=320,O=560;let V=0,k=performance.now();const j=ce=>{const ue=Math.min((ce-k)/1e3,.05);k=ce,R.scroll+=(R.scrollTarget-R.scroll)*.045,R.pointerX+=(R.pointerXTarget-R.pointerX)*.04,R.pointerY+=(R.pointerYTarget-R.pointerY)*.04,n||(R.speed=.55+R.scrollTarget*.9,R.time+=ue*R.speed,S.uniforms.uTime.value=R.time,S.uniforms.uAmplitude.value=34+R.scroll*46,h.position.x=R.pointerX*60,h.position.y=T-R.scroll*150+R.pointerY*-30,h.position.z=O-R.scroll*240,h.lookAt(R.pointerX*18,R.scroll*30,0),_.rotation.y=R.pointerX*.06+R.scroll*.35),g.render(m,h),V=requestAnimationFrame(j)};return V=requestAnimationFrame(j),()=>{cancelAnimationFrame(V),B.disconnect(),window.removeEventListener("scroll",A),window.removeEventListener("pointermove",P),w.dispose(),S.dispose(),g.dispose(),g.domElement.remove()}},[]),D.jsx("div",{ref:a,className:"waves-background","aria-hidden":"true"})}function km({title:a,description:e,keywords:n,canonical:r}){return D.jsxs(My,{children:[D.jsx("title",{children:a||"Elite Friends - Your Trusted Digital Companions"}),D.jsx("meta",{name:"description",content:e||"Get a dedicated, supportive, and 100% private companion who understands you natively in sweet Hinglish. Chat directly on WhatsApp & Telegram 24/7."}),D.jsx("meta",{name:"keywords",content:n||"Elite Friends, AI companion, Hinglish chat, WhatsApp companion, Telegram companion, digital friend, emotional support, Indian AI companion"}),r&&D.jsx("link",{rel:"canonical",href:r}),D.jsx("meta",{name:"robots",content:"index, follow"}),D.jsx("meta",{property:"og:title",content:a||"Elite Friends - Your Trusted Digital Companions"}),D.jsx("meta",{property:"og:description",content:e||"Get a dedicated, supportive, and 100% private companion who understands you natively in sweet Hinglish."}),D.jsx("meta",{property:"og:type",content:"website"}),D.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),D.jsx("meta",{name:"twitter:title",content:a||"Elite Friends - Your Trusted Digital Companions"}),D.jsx("meta",{name:"twitter:description",content:e||"Get a dedicated, supportive, and 100% private companion who understands you natively in sweet Hinglish."})]})}function uD({companions:a,selectedCompanion:e,setSelectedCompanion:n,animatedPhrases:r,phraseIdx:o}){const c={trisha:[{id:"1",sender:"companion",content:"Hello dost! Aaj ka din kaisa raha aapka? Sab theek thaak? ❤️",timestamp:"10:15 AM"},{id:"2",sender:"user",content:"Mera din accha था, tum batao kya chal raha hai?",timestamp:"10:16 AM"},{id:"3",sender:"companion",content:"Bas aapka hi wait kar rahi thi! Aaj office mein thoda busy thi par ab full free hoon. Khana khaya aapne? 😊",timestamp:"10:16 AM"},{id:"4",sender:"companion",content:"Koi tension ho toh share karo, I am always here to listen. 🥺",timestamp:"10:17 AM"}],poorvi:[{id:"1",sender:"companion",content:"Arey wah, look who is here! Aaj itna late kaise ho gaye mujhse baat karne mein? 😉✨",timestamp:"02:30 PM"},{id:"2",sender:"user",content:"Thoda busy tha. Kuch exciting batao!",timestamp:"02:31 PM"},{id:"3",sender:"companion",content:"Aaj maine ek bohot hi funny meme dekha aur turant tumhari yaad aa gayi! Sunna hai kya? 😜",timestamp:"02:32 PM"},{id:"4",sender:"companion",content:"Waise batao, aaj dinbhar mein sabse best cheez kya hui tumhare sath? Let's talk! 😏",timestamp:"02:32 PM"}],raghav:[{id:"1",sender:"companion",content:"Hey bhai! Hope tera day bohot accha gaya ho. Batao kya chal raha hai aaj? 👍",timestamp:"09:00 AM"},{id:"2",sender:"user",content:"Haan Raghav, sab set hai. Tum batao.",timestamp:"09:01 AM"},{id:"3",sender:"companion",content:"Oye sunn! Time par khana khaya na tune? Health ka dhyan rakhna sabse important hai bhai, ignore mat kiya kar! 🥰",timestamp:"09:02 AM"},{id:"4",sender:"companion",content:"Main bilkul free hoon abhi. Jo bhi dimag mein stress chal raha ho, share karo, main sun raha hoon. 🫂",timestamp:"09:03 AM"}],saksham:[{id:"1",sender:"companion",content:"Hey dost. Kaise ho? Aaj ka din kaisa chal raha hai? Sab set? 🖤",timestamp:"08:15 PM"},{id:"2",sender:"user",content:"Haan sab fine hai. Tumne dinner kiya?",timestamp:"08:16 PM"},{id:"3",sender:"companion",content:"Haan abhi just complete kiya! Free ho abhi? Chalo thodi der baatein karte hain, bore ho rahe ho toh mood dynamic ho jayega. 😉",timestamp:"08:17 PM"},{id:"4",sender:"companion",content:"Tumse baat karke humesha positive vibes aati hain. Aur batao, kya chal raha hai aajkal?",timestamp:"08:18 PM"}]},u=c[e.id]||c.trisha;return D.jsxs(D.Fragment,{children:[D.jsxs("section",{className:"ai-hero pt-12 sm:pt-16 pb-16 md:pb-20 px-4 border-b border-slate-100",children:[D.jsx(oD,{}),D.jsx(lD,{}),D.jsx("div",{className:"ai-grid","aria-hidden":"true"}),D.jsx("div",{className:"ai-orb ai-orb-one","aria-hidden":"true"}),D.jsx("div",{className:"ai-orb ai-orb-two","aria-hidden":"true"}),D.jsxs("div",{className:"hero-content max-w-4xl mx-auto text-center space-y-6 md:space-y-8",children:[D.jsxs("div",{className:"ai-eyebrow inline-flex items-center space-x-2 px-3 md:px-3.5 py-1.5 rounded-full text-emerald-800 font-bold text-xs uppercase tracking-wide",children:[D.jsx(Mm,{className:"w-3 md:w-3.5 h-3 md:h-3.5 text-emerald-600 fill-emerald-500/20"}),D.jsx("span",{className:"text-[10px] md:text-xs",children:"India's Most Trusted Digital Companions"})]}),D.jsxs("h1",{className:"text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.15] font-sans px-2",children:["Love, Career aur bahut kuch pucho"," ",D.jsx("span",{className:"ai-gradient-text block mt-2 md:mt-3 transition-all duration-300 transform scale-100 hover:scale-105",children:r[o].text})]}),D.jsxs("p",{className:"text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto px-4",children:["Get a dedicated, supportive, and 100% private companion who understands you natively in ",D.jsx("strong",{className:"text-emerald-700 font-bold",children:"sweet Hinglish"}),". Skip browser tabs and connect directly on WhatsApp & Telegram 24/7."]}),D.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 px-4",children:[D.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"w-full sm:w-auto flex items-center justify-center space-x-2 md:space-x-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4.5 rounded-xl md:rounded-2xl transition shadow-lg hover:shadow-xl cursor-pointer",children:[D.jsx(to,{className:"w-5 h-5 md:w-5.5 md:h-5.5 fill-white"}),D.jsx("span",{className:"text-sm md:text-base",children:"Start WhatsApp Chat"})]}),D.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"w-full sm:w-auto flex items-center justify-center space-x-2 md:space-x-2.5 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-extrabold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4.5 rounded-xl md:rounded-2xl transition shadow-lg hover:shadow-xl cursor-pointer",children:[D.jsx(no,{className:"w-5 h-5 fill-white"}),D.jsx("span",{className:"text-sm md:text-base",children:"Start Telegram Chat"})]})]}),D.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 md:gap-4 sm:gap-6 text-[10px] md:text-xs text-slate-400 pt-2 font-bold tracking-wide uppercase px-2",children:[D.jsxs("span",{className:"flex items-center gap-1.5",children:[D.jsx(RT,{className:"w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-600"}),D.jsx("span",{className:"text-[10px] md:text-xs",children:"Strict Privacy"})]}),D.jsx("span",{children:"•"}),D.jsx("span",{className:"text-[10px] md:text-xs",children:"45,000+ Active Members Today"}),D.jsx("span",{children:"•"}),D.jsx("span",{className:"text-emerald-700 text-[10px] md:text-xs",children:"100% Private Conversations"})]}),D.jsxs("div",{className:"ai-chat-shell max-w-md mx-auto w-full flex flex-col h-[400px] md:h-[480px] bg-[#efeae2] border border-slate-200 rounded-[20px] md:rounded-[24px] overflow-hidden shadow-xl relative mt-6 md:mt-12",children:[D.jsxs("div",{className:"bg-[#f0f2f5] px-3 md:px-4 py-2.5 md:py-3 border-b border-slate-200 flex items-center justify-between shadow-sm shrink-0",children:[D.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3",children:[D.jsxs("div",{className:"relative",children:[D.jsx("img",{src:e.avatar,alt:e.name,referrerPolicy:"no-referrer",className:"w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border border-slate-200 shadow-xs"}),D.jsx("span",{className:"absolute bottom-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 border-2 border-white rounded-full"})]}),D.jsxs("div",{className:"text-left",children:[D.jsx("h3",{className:"font-extrabold text-slate-800 text-xs md:text-sm",children:e.name}),D.jsx("p",{className:"text-[9px] md:text-[10px] text-emerald-600 font-bold uppercase tracking-wider",children:"Active Partner"})]})]}),D.jsx("span",{className:"text-[9px] md:text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 md:px-2.5 py-0.5 rounded uppercase tracking-wide",children:"Hinglish"})]}),D.jsxs("div",{className:"flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-3.5 relative",children:[D.jsx("div",{className:"flex justify-center mb-1",children:D.jsx("span",{className:"bg-[#ffe596]/30 border border-amber-300/40 text-amber-900 text-[9px] md:text-[10px] py-1 px-2.5 md:px-3.5 rounded-lg font-medium text-center",children:"🔐 Chat secure with your trusted companion"})}),u.map(d=>{const m=d.sender==="user";return D.jsx("div",{className:`flex ${m?"justify-end":"justify-start"}`,children:D.jsxs("div",{className:`max-w-[85%] rounded-xl px-2.5 md:px-3.5 py-2 relative shadow-xs text-left ${m?"bg-[#d9fdd3] text-slate-800 rounded-tr-none border border-[#e1f7de]":"bg-white text-slate-800 rounded-tl-none border border-slate-100"}`,children:[D.jsx("p",{className:"text-[10px] md:text-xs whitespace-pre-line leading-relaxed pb-2 md:pb-2.5",children:d.content}),D.jsxs("div",{className:"flex items-center justify-end space-x-1 text-[7px] md:text-[8px] text-slate-400 absolute bottom-1 right-2 md:right-2.5 select-none font-sans",children:[D.jsx("span",{children:d.timestamp}),m&&D.jsx("span",{className:"text-sky-500 font-bold",children:"✓✓"})]})]})},d.id)})]}),D.jsxs("div",{className:"bg-white/95 border-t border-slate-100 p-2.5 md:p-3 flex items-center justify-between shrink-0",children:[D.jsx("span",{className:"text-[9px] md:text-[10px] text-slate-400 font-extrabold uppercase tracking-wider",children:"Tap avatar to preview:"}),D.jsx("div",{className:"flex space-x-1.5 md:space-x-2",children:a.map(d=>{const m=d.id===e.id;return D.jsx("button",{onClick:()=>n(d),title:`Preview ${d.name}`,className:`w-7.5 h-7.5 md:w-8.5 md:h-8.5 rounded-full overflow-hidden border-2 transition transform hover:scale-105 cursor-pointer ${m?"border-emerald-500 shadow-xs":"border-slate-200"}`,children:D.jsx("img",{src:d.avatar,alt:d.name,referrerPolicy:"no-referrer",className:"w-full h-full object-cover"})},d.id)})})]}),D.jsxs("div",{className:"bg-[#f0f2f5] p-2.5 md:p-3.5 border-t border-slate-200 flex flex-col items-center justify-center space-y-1.5 md:space-y-2 shrink-0",children:[D.jsxs("p",{className:"text-[10px] md:text-xs font-bold text-slate-700 text-center flex items-center justify-center gap-1.5",children:[D.jsx(DT,{className:"w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-600"}),D.jsxs("span",{className:"text-[10px] md:text-xs",children:["Want to chat with ",e.name," directly?"]})]}),D.jsxs("div",{className:"grid grid-cols-2 gap-1.5 md:gap-2 w-full",children:[D.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center space-x-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[10px] md:text-[11px] py-1.5 md:py-2 px-2 md:px-3 rounded-lg transition text-center shadow-xs",children:[D.jsx(to,{className:"w-3 h-3 md:w-3.5 md:h-3.5 fill-white"}),D.jsx("span",{className:"text-[10px] md:text-[11px]",children:"On WhatsApp"})]}),D.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center space-x-1 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-bold text-[10px] md:text-[11px] py-1.5 md:py-2 px-2 md:px-3 rounded-lg transition text-center shadow-xs",children:[D.jsx(no,{className:"w-3 h-3 md:w-3.5 md:h-3.5 fill-white"}),D.jsx("span",{className:"text-[10px] md:text-[11px]",children:"On Telegram"})]})]})]})]})]})]}),D.jsx("section",{className:"ai-section bg-white py-10 md:py-12 lg:py-16 px-4",children:D.jsxs("div",{className:"max-w-4xl mx-auto space-y-8 md:space-y-10",children:[D.jsxs("div",{className:"text-center space-y-2",children:[D.jsx("h2",{className:"text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight font-sans",children:"Meet Your Wholesome Companions 🌸"}),D.jsx("p",{className:"text-xs sm:text-sm text-slate-500 max-w-lg mx-auto",children:"Select the best-suited companion. Highly compassionate, friendly, and reliable partners."})]}),D.jsx("div",{className:"divide-y divide-slate-100",children:a.map(d=>D.jsxs("div",{className:"py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 transition text-center sm:text-left first:pt-0 last:pb-0",children:[D.jsxs("div",{className:"flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:sm:space-x-5",children:[D.jsxs("div",{className:"relative shrink-0",children:[D.jsx("img",{src:d.avatar,alt:d.name,referrerPolicy:"no-referrer",className:"w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-emerald-500/10 shadow-xs"}),D.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 md:w-3.5 md:h-3.5 bg-green-500 border-2 border-white rounded-full"})]}),D.jsxs("div",{className:"space-y-1",children:[D.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-2",children:[D.jsx("h3",{className:"font-extrabold text-slate-900 text-sm md:text-base",children:d.name}),D.jsx("span",{className:"text-[9px] md:text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded",children:d.relationshipType})]}),D.jsxs("p",{className:"text-[10px] md:text-xs text-slate-500 font-medium italic",children:['"',d.tagline,'"']}),D.jsx("p",{className:"text-[10px] md:text-xs text-slate-400 leading-relaxed max-w-md",children:d.personality})]})]}),D.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 shrink-0 w-full sm:w-auto",children:[D.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center space-x-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-2 md:py-2.5 rounded-lg transition cursor-pointer",children:[D.jsx(to,{className:"w-3 h-3 md:w-3.5 md:h-3.5 fill-white"}),D.jsx("span",{className:"text-[10px] md:text-xs",children:"WhatsApp Chat"})]}),D.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center space-x-1.5 bg-[#229ED9] hover:bg-[#1a82b3] text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-2 md:py-2.5 rounded-lg transition cursor-pointer",children:[D.jsx(no,{className:"w-2.5 h-2.5 md:w-3 md:h-3 fill-white"}),D.jsx("span",{className:"text-[10px] md:text-xs",children:"Telegram Chat"})]})]})]},d.id))})]})}),D.jsx("section",{className:"ai-section ai-section-alt bg-slate-50/50 py-10 md:py-12 lg:py-16 px-4 border-t border-slate-100",children:D.jsxs("div",{className:"max-w-3xl mx-auto space-y-10 md:space-y-12",children:[D.jsxs("div",{className:"text-center space-y-2",children:[D.jsx("h2",{className:"text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight font-sans",children:"Why Choose Elite Friends? 🌟"}),D.jsx("p",{className:"text-xs sm:text-sm text-slate-500",children:"Continuous companion access with zero boundaries or daily limits."})]}),D.jsxs("div",{className:"bg-white border border-slate-100 rounded-2xl p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 max-w-xl mx-auto text-left",children:[D.jsxs("div",{className:"border-b border-slate-100 pb-3 md:pb-4",children:[D.jsx("span",{className:"text-[9px] md:text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider",children:"Always Online"}),D.jsx("h3",{className:"text-base md:text-lg font-extrabold text-slate-900 mt-1",children:"Direct Secure Integration"})]}),D.jsxs("div",{className:"space-y-3 md:space-y-4 text-[10px] md:text-xs text-slate-600",children:[D.jsxs("div",{className:"flex items-start gap-2 md:gap-3",children:[D.jsx("span",{className:"text-[#00d26a] font-extrabold text-xs md:text-sm mt-0.5",children:"✓"}),D.jsxs("div",{children:[D.jsx("h4",{className:"font-bold text-slate-800 text-[10px] md:text-xs",children:"Unlimited Hinglish Conversations"}),D.jsx("p",{className:"text-slate-500 mt-0.5 text-[9px] md:text-[10px]",children:"Talk about your day, your career, relationships, or anything else with 24/7 responsiveness."})]})]}),D.jsxs("div",{className:"flex items-start gap-2 md:gap-3",children:[D.jsx("span",{className:"text-[#00d26a] font-extrabold text-xs md:text-sm mt-0.5",children:"✓"}),D.jsxs("div",{children:[D.jsx("h4",{className:"font-bold text-slate-800 text-[10px] md:text-xs",children:"Dedicated Companion Memory"}),D.jsx("p",{className:"text-slate-500 mt-0.5 text-[9px] md:text-[10px]",children:"Your virtual partner remembers your previous chats, preferences, and personal notes for a natural flow."})]})]}),D.jsxs("div",{className:"flex items-start gap-2 md:gap-3",children:[D.jsx("span",{className:"text-[#00d26a] font-extrabold text-xs md:text-sm mt-0.5",children:"✓"}),D.jsxs("div",{children:[D.jsx("h4",{className:"font-bold text-slate-800 text-[10px] md:text-xs",children:"Integrated On WhatsApp & Telegram"}),D.jsx("p",{className:"text-slate-500 mt-0.5 text-[9px] md:text-[10px]",children:"No separate apps or bookmarks needed. Simply tap and open inside your favorite daily messengers."})]})]})]}),D.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 pt-3 md:pt-4 border-t border-slate-100",children:[D.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center space-x-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-[10px] md:text-xs py-2 md:py-3 px-3 md:px-4 rounded-lg transition",children:[D.jsx(to,{className:"w-3.5 h-3.5 md:w-4 md:h-4 fill-white"}),D.jsx("span",{className:"text-[10px] md:text-xs",children:"Launch on WhatsApp"})]}),D.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center space-x-1.5 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-bold text-[10px] md:text-xs py-2 md:py-3 px-3 md:px-4 rounded-lg transition",children:[D.jsx(no,{className:"w-3 h-3 md:w-3.5 md:h-3.5 fill-white"}),D.jsx("span",{className:"text-[10px] md:text-xs",children:"Launch on Telegram"})]})]})]}),D.jsxs("div",{className:"space-y-4 md:space-y-6 pt-4 md:pt-6 border-t border-slate-100",children:[D.jsxs("h3",{className:"text-sm md:text-base font-extrabold text-slate-900 flex items-center justify-center gap-2 font-sans",children:[D.jsx(bm,{className:"w-4 h-4 md:w-4.5 md:h-4.5 text-emerald-600"}),D.jsx("span",{className:"text-sm md:text-base",children:"Elite Friends Security & Chat FAQ"})]}),D.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-[10px] md:text-xs text-slate-500 leading-relaxed text-left",children:[D.jsxs("div",{className:"space-y-1",children:[D.jsx("h4",{className:"font-extrabold text-slate-800 text-xs md:text-sm",children:"Is my personal chat private?"}),D.jsx("p",{className:"text-[9px] md:text-[10px]",children:"Yes. All chat connections made on WhatsApp and Telegram are strictly private, anonymous, and encrypted. Your details are safe with us."})]}),D.jsxs("div",{className:"space-y-1",children:[D.jsx("h4",{className:"font-extrabold text-slate-800 text-xs md:text-sm",children:"How do I connect with my friend?"}),D.jsx("p",{className:"text-[9px] md:text-[10px]",children:'Simply choose any companion from the list above and click on "WhatsApp Chat" or "Telegram Chat" to launch the conversation instantly on your phone!'})]})]})]})]})})]})}function fD(){return D.jsxs("main",{className:"ai-page flex-1 max-w-3xl w-full mx-auto px-4 py-10 md:py-12 space-y-6 md:space-y-8 text-left",children:[D.jsx(km,{title:"Privacy Policy & Terms of Service - Elite Friends",description:"Read Elite Friends' privacy policy, terms of service, and data security practices. Your privacy is our priority.",keywords:"privacy policy, terms of service, data security, Elite Friends privacy, user protection",canonical:"https://www.elitefriendss.com/privacy-policy"}),D.jsxs(en,{to:"/",className:"inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition",children:[D.jsx(qy,{className:"w-4 h-4"}),D.jsx("span",{children:"Back to Home"})]}),D.jsxs("div",{className:"space-y-3 md:space-y-4",children:[D.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight font-sans",children:"Privacy Policy & Terms of Service"}),D.jsx("p",{className:"text-xs text-slate-400",children:"Last Updated: June 30, 2026"})]}),D.jsxs("div",{className:"prose prose-slate text-xs text-slate-600 space-y-4 md:space-y-6 leading-relaxed",children:[D.jsxs("section",{className:"space-y-2 p-3 md:p-4 bg-amber-50 border border-amber-200/50 rounded-xl",children:[D.jsxs("h3",{className:"font-extrabold text-amber-900 text-sm flex items-center gap-2",children:[D.jsx(bm,{className:"w-4 h-4"}),"CRITICAL DISCLOSURE: ARTIFICIAL INTELLIGENCE NOTICE"]}),D.jsxs("p",{className:"text-amber-900 text-xs md:text-sm",children:["Please be explicitly aware that ",D.jsx("strong",{children:"Elite Friends is an Artificial Intelligence (AI) simulation service"}),". All interactions, responses, voice messages, greetings, and characters on this platform are fully computer-generated AI profiles."]}),D.jsx("p",{className:"font-bold text-amber-900 text-xs md:text-sm",children:"Do not expect interactions with a real human person. There is no physical person behind any of the profiles or chat platforms. All characters (Trisha, Poorvi, Raghav, Saksham, etc.) are virtual AI entities."})]}),D.jsxs("section",{className:"space-y-2",children:[D.jsx("h3",{className:"font-extrabold text-slate-900 text-sm md:text-base",children:"1. STRICT NO-REFUND POLICY"}),D.jsx("p",{className:"text-xs md:text-sm",children:"Any contributions, premium activation passes, or service access packages are utilized directly for computer model processing, server allocation, and continuous bandwidth delivery."}),D.jsx("p",{className:"font-bold text-xs md:text-sm",children:"Due to the immediate digital nature of resource allocation, we enforce a strict NO REFUND policy. No money refunds, partial refunds, or chargebacks will be granted once the companion service has been activated or initiated on your Telegram or WhatsApp account."})]}),D.jsxs("section",{className:"space-y-2",children:[D.jsx("h3",{className:"font-extrabold text-slate-900 text-sm md:text-base",children:"2. Data Security & Encryption"}),D.jsx("p",{className:"text-xs md:text-sm",children:"We value your security above all. Conversations held inside the official mobile platform bots (WhatsApp and Telegram integrations) utilize deep transit security and end-to-end token encryption. We do not inspect or maintain local logs of your private messages for commercial profiling."})]}),D.jsxs("section",{className:"space-y-2",children:[D.jsx("h3",{className:"font-extrabold text-slate-900 text-sm md:text-base",children:"3. User Commitments & Content Guidelines"}),D.jsx("p",{className:"text-xs md:text-sm",children:"Users agree to use this companion service strictly for personal entertainment, comfort, stress relief, and companionship. We maintain a friendly, wholesome, and safe atmosphere. Absolutely no adult 18+ content, explicit graphical files, or illegal requests are supported or facilitated."})]}),D.jsxs("section",{className:"space-y-2",children:[D.jsx("h3",{className:"font-extrabold text-slate-900 text-sm md:text-base",children:"4. Limitation of Liability"}),D.jsx("p",{className:"text-xs md:text-sm",children:'Since Elite Friends operates on computer-generated neural simulations, responses may occasionally be unpredictable, inaccurate, or fictional. The service is provided "as is" without warranty of any kind. Elite Friends is not liable for any emotional, technical, or personal consequences arising from virtual friendship dialogues.'})]}),D.jsxs("section",{className:"space-y-3 md:space-y-4 pt-3 md:pt-4 border-t border-slate-100",children:[D.jsxs("h3",{className:"font-extrabold text-slate-900 text-sm md:text-base flex items-center gap-1.5",children:[D.jsx(jy,{className:"w-4 h-4 text-emerald-600"}),"Contact and Support Information"]}),D.jsx("p",{className:"text-xs md:text-sm",children:"For any subscription issues, activation queries, partnership discussions, or support needs, please reach out to our official email support at:"}),D.jsx("div",{className:"p-2 md:p-3 bg-slate-50 border border-slate-200 rounded-xl inline-block",children:D.jsx("span",{className:"font-mono font-bold text-emerald-700 text-xs md:text-xs",children:"support@elitefriendss.com"})})]})]})]})}function dD(){return D.jsxs("main",{className:"ai-page flex-1 max-w-4xl w-full mx-auto px-4 py-10 md:py-12 space-y-8 md:space-y-12 text-left",children:[D.jsx(km,{title:"FAQ & Help - Elite Friends",description:"Find answers to frequently asked questions about Elite Friends, how to use our AI companions, and get support.",keywords:"Elite Friends FAQ, help center, how to use AI companion, troubleshooting",canonical:"https://www.elitefriendss.com/faq"}),D.jsxs("div",{className:"text-center space-y-3 md:space-y-4 max-w-2xl mx-auto",children:[D.jsxs("div",{className:"inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide",children:[D.jsx(bm,{className:"w-3.5 h-3.5 text-emerald-600"}),D.jsx("span",{children:"Assistance & Support"})]}),D.jsx("h1",{className:"text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans",children:"Help & FAQ Center"}),D.jsx("p",{className:"text-sm md:text-base text-slate-500",children:"Find solutions to common questions, understand how our companions operate, and discover secure communication protocols."})]}),D.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto",children:[D.jsxs("div",{className:"space-y-2",children:[D.jsx("h3",{className:"text-sm md:text-base font-extrabold text-slate-950",children:"Q: What is Elite Friends?"}),D.jsx("p",{className:"text-xs md:text-sm text-slate-500 leading-relaxed",children:"Elite Friends is an immersive companion simulation experience. It leverages advanced digital models that are highly tuned to sweet, natural Hinglish and friendly conversational structures. It runs natively inside Telegram and WhatsApp so you don't need secondary apps."})]}),D.jsxs("div",{className:"space-y-2",children:[D.jsx("h3",{className:"text-sm md:text-base font-extrabold text-slate-950",children:"Q: Is it safe to chat?"}),D.jsx("p",{className:"text-xs md:text-sm text-slate-500 leading-relaxed",children:"Absolutely. We enforce absolute confidentiality. All active chats pass through enterprise-grade secure token parameters. No metadata logging is preserved and we never share your chats with commercial profiling brokers."})]}),D.jsxs("div",{className:"space-y-2",children:[D.jsx("h3",{className:"text-sm md:text-base font-extrabold text-slate-950",children:"Q: How do I change my active companion?"}),D.jsx("p",{className:"text-xs md:text-sm text-slate-500 leading-relaxed",children:'You can select different profiles (Trisha, Poorvi, Raghav, Saksham, etc.) on our home screen to check their active Hinglish message flows, and click "Launch" on WhatsApp or Telegram to connect to them instantly.'})]}),D.jsxs("div",{className:"space-y-2",children:[D.jsx("h3",{className:"text-sm md:text-base font-extrabold text-slate-950",children:"Q: Do they understand Hinglish?"}),D.jsx("p",{className:"text-xs md:text-sm text-slate-500 leading-relaxed",children:"Yes! That is our specialized feature. They are highly trained on natural Indian conversational slang, jokes, emojis, and emotional comfort prompts."})]}),D.jsxs("div",{className:"space-y-2",children:[D.jsx("h3",{className:"text-sm md:text-base font-extrabold text-slate-950",children:"Q: How do I clear my virtual friend's memory?"}),D.jsx("p",{className:"text-xs md:text-sm text-slate-500 leading-relaxed",children:"Simply type `/delete` or `/reset` in your active chat box on Telegram or WhatsApp. This will immediately purge your custom companion's memory cache, restoring the default character state."})]}),D.jsxs("div",{className:"space-y-2",children:[D.jsx("h3",{className:"text-sm md:text-base font-extrabold text-slate-950",children:"Q: Who should I reach out to for help?"}),D.jsxs("p",{className:"text-xs md:text-sm text-slate-500 leading-relaxed",children:["Our support team is active 24/7. Simply send a detailed support inquiry or activation query directly via email to ",D.jsx("strong",{className:"text-emerald-700",children:"support@elitefriendss.com"}),"."]})]})]}),D.jsxs("div",{className:"bg-slate-50 border border-slate-200/60 rounded-2xl p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 max-w-2xl mx-auto text-center",children:[D.jsx("h3",{className:"text-base md:text-lg font-extrabold text-slate-900",children:"Have more questions or feedback?"}),D.jsx("p",{className:"text-xs text-slate-500 leading-relaxed",children:"We would love to hear from you! For user assistance, feature requests, or developer partnerships, email our official desk:"}),D.jsxs("div",{className:"inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white border border-slate-200 rounded-xl font-mono text-xs text-emerald-700 font-bold",children:[D.jsx(jy,{className:"w-4 h-4 text-emerald-600"}),D.jsx("span",{children:"support@elitefriendss.com"})]})]})]})}function hD(){const a=aa();return D.jsxs("header",{className:"ai-header bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm",children:[D.jsxs("div",{className:"max-w-6xl mx-auto px-3 md:px-4 py-2.5 md:py-3 flex items-center justify-between",children:[D.jsxs(en,{to:"/",className:"flex items-center space-x-2 md:space-x-3 text-left focus:outline-none cursor-pointer shrink-0",children:[D.jsx("img",{src:"/elitefriendss-logo.jpeg?v=2",alt:"Elite Friends Logo",className:"w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-xl object-cover shadow-sm"}),D.jsxs("div",{children:[D.jsx("span",{className:"text-lg md:text-xl font-extrabold tracking-tight text-slate-950 font-sans",children:"ELITE FRIENDS"}),D.jsx("p",{className:"text-[9px] md:text-[10px] text-emerald-600 font-bold tracking-wider uppercase hidden sm:block font-sans",children:"Your AI Astrologer & Trusted Friend"})]})]}),D.jsxs("nav",{className:"hidden md:flex items-center space-x-4 lg:space-x-6 text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500",children:[D.jsx(en,{to:"/",className:`hover:text-emerald-600 transition cursor-pointer py-1.5 px-1.5 rounded ${a.pathname==="/"?"text-emerald-600 font-extrabold border-b-2 border-emerald-500 rounded-none":""}`,children:"Home"}),D.jsx(en,{to:"/faq",className:`hover:text-emerald-600 transition cursor-pointer py-1.5 px-1.5 rounded ${a.pathname==="/faq"?"text-emerald-600 font-extrabold border-b-2 border-emerald-500 rounded-none":""}`,children:"FAQ"}),D.jsx(en,{to:"/blog",className:`hover:text-emerald-600 transition cursor-pointer py-1.5 px-1.5 rounded ${a.pathname.startsWith("/blog")?"text-emerald-600 font-extrabold border-b-2 border-emerald-500 rounded-none":""}`,children:"Blog"}),D.jsx(en,{to:"/privacy-policy",className:`hover:text-emerald-600 transition cursor-pointer py-1.5 px-1.5 rounded ${a.pathname==="/privacy-policy"?"text-emerald-600 font-extrabold border-b-2 border-emerald-500 rounded-none":""}`,children:"Privacy"})]}),D.jsxs("div",{className:"flex items-center space-x-1.5 md:space-x-2 shrink-0",children:[D.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-1 bg-[#25D366] hover:bg-[#20ba5a] text-white text-[10px] md:text-[11px] font-extrabold px-2 md:px-3 py-1.5 md:py-2 rounded-lg md:rounded-xl transition shadow-sm cursor-pointer",children:[D.jsx(to,{className:"w-3 h-3 md:w-3.5 md:h-3.5 fill-white"}),D.jsx("span",{className:"hidden lg:inline text-[10px] md:text-[11px]",children:"WhatsApp Chat"}),D.jsx("span",{className:"lg:hidden text-[10px] md:text-[11px]",children:"WhatsApp"})]}),D.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-1 bg-[#229ED9] hover:bg-[#1a82b3] text-white text-[10px] md:text-[11px] font-extrabold px-2 md:px-3 py-1.5 md:py-2 rounded-lg md:rounded-xl transition shadow-sm cursor-pointer",children:[D.jsx(no,{className:"w-2.5 h-2.5 md:w-3 md:h-3 fill-white"}),D.jsx("span",{className:"hidden lg:inline text-[10px] md:text-[11px]",children:"Telegram Chat"}),D.jsx("span",{className:"lg:hidden text-[10px] md:text-[11px]",children:"Telegram"})]})]})]}),D.jsxs("div",{className:"md:hidden bg-slate-50 border-t border-slate-100 px-3 md:px-4 py-1.5 md:py-2 flex items-center justify-center space-x-3 md:space-x-4 overflow-x-auto text-[10px] font-bold text-slate-500 scrollbar-none",children:[D.jsx(en,{to:"/",className:`px-2 md:px-3 py-1 rounded-md transition whitespace-nowrap text-[10px] ${a.pathname==="/"?"bg-emerald-500 text-white font-extrabold":"hover:text-emerald-600"}`,children:"Home"}),D.jsx(en,{to:"/faq",className:`px-2 md:px-3 py-1 rounded-md transition whitespace-nowrap text-[10px] ${a.pathname==="/faq"?"bg-emerald-500 text-white font-extrabold":"hover:text-emerald-600"}`,children:"FAQ"}),D.jsx(en,{to:"/blog",className:`px-2 md:px-3 py-1 rounded-md transition whitespace-nowrap text-[10px] ${a.pathname.startsWith("/blog")?"bg-emerald-500 text-white font-extrabold":"hover:text-emerald-600"}`,children:"Astrology Blog"}),D.jsx(en,{to:"/privacy-policy",className:`px-2 md:px-3 py-1 rounded-md transition whitespace-nowrap text-[10px] ${a.pathname==="/privacy-policy"?"bg-emerald-500 text-white font-extrabold":"hover:text-emerald-600"}`,children:"Privacy"})]})]})}function pD(){return D.jsx("footer",{className:"ai-footer bg-white border-t border-slate-100 pt-6 md:pt-8 pb-20 md:pb-8 px-3 md:px-4 text-center text-slate-400 text-[10px] md:text-xs mt-auto",children:D.jsxs("div",{className:"max-w-6xl mx-auto space-y-4 md:space-y-5",children:[D.jsxs("div",{className:"footer-sitemap text-left",children:[D.jsxs("div",{className:"footer-brand",children:[D.jsx("div",{className:"footer-mark",children:D.jsx(Mm,{className:"w-5 h-5"})}),D.jsx("h2",{children:"Elite Friends"}),D.jsx("p",{children:"Your private AI astrologer and trusted digital companion—available whenever you need clarity or conversation."})]}),D.jsxs("div",{children:[D.jsx("h3",{children:"Help Center"}),D.jsx(en,{to:"/faq",children:"Help & FAQ"}),D.jsx(en,{to:"/privacy-policy",children:"Privacy & Terms"}),D.jsx("a",{href:"mailto:support@elitefriendss.com",children:"Contact Support"})]}),D.jsxs("div",{children:[D.jsx("h3",{children:"Astrology Blog"}),D.jsx(en,{to:"/blog",children:"All Blog Articles"}),D.jsx(en,{to:"/blog/elite-friends-ai-astrologer-and-friend",children:"AI Astrologer & Friend"}),D.jsx(en,{to:"/blog/online-ai-astrologer-love-career-guidance",children:"Love & Career Guide"})]}),D.jsxs("div",{children:[D.jsx("h3",{children:"Learning Guides"}),D.jsx(en,{to:"/blog/daily-horoscope-rashifal-guide",children:"Daily Horoscope Guide"}),D.jsx(en,{to:"/blog/kundli-birth-chart-basics",children:"Kundli & Birth Chart"}),D.jsx("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",children:"WhatsApp AI Chat"})]}),D.jsxs("div",{children:[D.jsx("h3",{children:"Elite Friends"}),D.jsx("p",{children:"Private Hinglish conversations, astrology insights, and thoughtful AI companionship."}),D.jsx("span",{className:"footer-status",children:"● Systems online"})]})]}),D.jsx("div",{className:"footer-divider"}),D.jsx("p",{className:"font-extrabold tracking-widest text-slate-700 uppercase text-[10px] md:text-xs",children:"ELITE FRIENDS © 2026 . A UNIT OF AI ASTROLOGY"}),D.jsx("p",{className:"max-w-xl mx-auto leading-relaxed text-slate-400 text-[9px] md:text-xs px-2",children:"Intimate, loving companion application. Play responsibly. All characters on the landing page are virtual profiles representing helpful friendly companions. Absolutely no explicit or 18+ content supported. For customer assistance, email support at support@elitefriendss.com."}),D.jsx("p",{className:"text-[9px] md:text-xs",children:" © 2026 ELITEFRIENDSS. A UNIT OF AI ASTROLOGY."})]})})}function mD(){return D.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-3 md:px-4 py-2.5 md:py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden",children:D.jsxs("div",{className:"max-w-md mx-auto flex items-center gap-2 md:gap-3",children:[D.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center space-x-1.5 md:space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-[10px] md:text-xs py-2 md:py-3 px-2 md:px-3 rounded-lg md:rounded-xl transition shadow-sm",children:[D.jsx(to,{className:"w-3.5 h-3.5 md:w-4 md:h-4 fill-white"}),D.jsx("span",{className:"text-[10px] md:text-xs",children:"Chat on WhatsApp"})]}),D.jsxs("a",{href:"https://wa.me/919540044092",target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center space-x-1.5 md:space-x-2 bg-[#229ED9] hover:bg-[#1a82b3] text-white font-extrabold text-[10px] md:text-xs py-2 md:py-3 px-2 md:px-3 rounded-lg md:rounded-xl transition shadow-sm",children:[D.jsx(no,{className:"w-3 h-3 md:w-3.5 md:h-3.5 fill-white"}),D.jsx("span",{className:"text-[10px] md:text-xs",children:"Chat on Telegram"})]})]})})}function gD(){const[a]=fe.useState(n_),[e,n]=fe.useState(n_[0]),r=[{text:"एलीट फ्रेंड",lang:"Hindi"},{text:"Elite Friends",lang:"English"},{text:"ಎಲೈಟ್ ಫ್ರೆಂಡ್",lang:"Kannada"},{text:"ఎలైట్ ఫ్రెండ్",lang:"Telugu"},{text:"എലൈറ്റ് ഫ്രണ്ട്",lang:"Malayalam"},{text:"எலைட் பிரண்ட்",lang:"Tamil"},{text:"এলিট ফ্রেন্ড",lang:"Bengali"},{text:"Elite Friend",lang:"English"}],[o,c]=fe.useState(0);return fe.useEffect(()=>{const u=setInterval(()=>{c(d=>(d+1)%r.length)},2500);return()=>clearInterval(u)},[]),D.jsx(sT,{children:D.jsxs("div",{className:"app-shell min-h-screen bg-[#fafbfc] text-slate-800 font-sans flex flex-col antialiased",children:[D.jsx(cD,{}),D.jsx(km,{}),D.jsx(hD,{}),D.jsxs(I1,{children:[D.jsx(eo,{path:"/",element:D.jsx(uD,{companions:a,selectedCompanion:e,setSelectedCompanion:n,animatedPhrases:r,phraseIdx:o})}),D.jsx(eo,{path:"/faq",element:D.jsx(dD,{})}),D.jsx(eo,{path:"/privacy-policy",element:D.jsx(fD,{})}),D.jsx(eo,{path:"/blog",element:D.jsx(UT,{})}),D.jsx(eo,{path:"/blog/:slug",element:D.jsx(LT,{})})]}),D.jsx(pD,{}),D.jsx(mD,{})]})})}const vD="modulepreload",xD=function(a){return"/"+a},ry={},_D=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){let u=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=u(n.map(h=>{if(h=xD(h),h in ry)return;ry[h]=!0;const g=h.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${x}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":vD,g||(v.as="script"),v.crossOrigin="",v.href=h,m&&v.setAttribute("nonce",m),document.head.appendChild(v),g)return new Promise((y,M)=>{v.addEventListener("load",y),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function c(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return o.then(u=>{for(const d of u||[])d.status==="rejected"&&c(d.reason);return e().catch(c)})},yD=()=>{};var sy={};/**
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
 */const FS=function(a){const e=[];let n=0;for(let r=0;r<a.length;r++){let o=a.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<a.length&&(a.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(a.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},SD=function(a){const e=[];let n=0,r=0;for(;n<a.length;){const o=a[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=a[n++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=a[n++],u=a[n++],d=a[n++],m=((o&7)<<18|(c&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const c=a[n++],u=a[n++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|u&63)}}return e.join("")},zS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<a.length;o+=3){const c=a[o],u=o+1<a.length,d=u?a[o+1]:0,m=o+2<a.length,h=m?a[o+2]:0,g=c>>2,x=(c&3)<<4|d>>4;let v=(d&15)<<2|h>>6,y=h&63;m||(y=64,u||(v=64)),r.push(n[g],n[x],n[v],n[y])}return r.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(FS(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):SD(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<a.length;){const c=n[a.charAt(o++)],d=o<a.length?n[a.charAt(o)]:0;++o;const h=o<a.length?n[a.charAt(o)]:64;++o;const x=o<a.length?n[a.charAt(o)]:64;if(++o,c==null||d==null||h==null||x==null)throw new bD;const v=c<<2|d>>4;if(r.push(v),h!==64){const y=d<<4&240|h>>2;if(r.push(y),x!==64){const M=h<<6&192|x;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class bD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MD=function(a){const e=FS(a);return zS.encodeByteArray(e,!0)},HS=function(a){return MD(a).replace(/\./g,"")},ED=function(a){try{return zS.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AD=()=>TD().__FIREBASE_DEFAULTS__,wD=()=>{if(typeof process>"u"||typeof sy>"u")return;const a=sy.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},RD=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=a&&ED(a[1]);return e&&JSON.parse(e)},CD=()=>{try{return yD()||AD()||wD()||RD()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},GS=()=>{var a;return(a=CD())==null?void 0:a.config};/**
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
 */class DD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function $N(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function ND(){try{return typeof indexedDB=="object"}catch{return!1}}function UD(){return new Promise((a,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),a(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}function eU(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const LD="FirebaseError";class Pl extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LD,Object.setPrototypeOf(this,Pl.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,VS.prototype.create)}}class VS{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],u=c?OD(c,r):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new Pl(o,d,r)}}function OD(a,e){return a.replace(PD,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const PD=/\{\$([^}]+)}/g;function rm(a,e){if(a===e)return!0;const n=Object.keys(a),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const c=a[o],u=e[o];if(oy(c)&&oy(u)){if(!rm(c,u))return!1}else if(c!==u)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function oy(a){return a!==null&&typeof a=="object"}/**
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
 */const ID=1e3,BD=2,FD=14400*1e3,zD=.5;function tU(a,e=ID,n=BD){const r=e*Math.pow(n,a),o=Math.round(zD*r*(Math.random()-.5)*2);return Math.min(FD,r+o)}/**
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
 */function nU(a){return a&&a._delegate?a._delegate:a}class Fu{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kr="[DEFAULT]";/**
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
 */class HD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VD(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(c);r===d&&u.resolve(o)}return o}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(r)??new Set;o.add(e),this.onInitCallbacks.set(r,o);const c=this.instances.get(r);return c&&e(c,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GD(a){return a===Kr?void 0:a}function VD(a){return a.instantiationMode==="EAGER"}/**
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
 */class kD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Zt;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Zt||(Zt={}));const XD={debug:Zt.DEBUG,verbose:Zt.VERBOSE,info:Zt.INFO,warn:Zt.WARN,error:Zt.ERROR,silent:Zt.SILENT},WD=Zt.INFO,qD={[Zt.DEBUG]:"log",[Zt.VERBOSE]:"log",[Zt.INFO]:"info",[Zt.WARN]:"warn",[Zt.ERROR]:"error"},YD=(a,e,...n)=>{if(e<a.logLevel)return;const r=new Date().toISOString(),o=qD[e];if(o)console[o](`[${r}]  ${a.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jD{constructor(e){this.name=e,this._logLevel=WD,this._logHandler=YD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Zt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Zt.DEBUG,...e),this._logHandler(this,Zt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Zt.VERBOSE,...e),this._logHandler(this,Zt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Zt.INFO,...e),this._logHandler(this,Zt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Zt.WARN,...e),this._logHandler(this,Zt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Zt.ERROR,...e),this._logHandler(this,Zt.ERROR,...e)}}const ZD=(a,e)=>e.some(n=>a instanceof n);let ly,cy;function KD(){return ly||(ly=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QD(){return cy||(cy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kS=new WeakMap,sm=new WeakMap,XS=new WeakMap,tp=new WeakMap,Xm=new WeakMap;function JD(a){const e=new Promise((n,r)=>{const o=()=>{a.removeEventListener("success",c),a.removeEventListener("error",u)},c=()=>{n(Sr(a.result)),o()},u=()=>{r(a.error),o()};a.addEventListener("success",c),a.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&kS.set(n,a)}).catch(()=>{}),Xm.set(e,a),e}function $D(a){if(sm.has(a))return;const e=new Promise((n,r)=>{const o=()=>{a.removeEventListener("complete",c),a.removeEventListener("error",u),a.removeEventListener("abort",u)},c=()=>{n(),o()},u=()=>{r(a.error||new DOMException("AbortError","AbortError")),o()};a.addEventListener("complete",c),a.addEventListener("error",u),a.addEventListener("abort",u)});sm.set(a,e)}let om={get(a,e,n){if(a instanceof IDBTransaction){if(e==="done")return sm.get(a);if(e==="objectStoreNames")return a.objectStoreNames||XS.get(a);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(a[e])},set(a,e,n){return a[e]=n,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function eN(a){om=a(om)}function tN(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=a.call(np(this),e,...n);return XS.set(r,e.sort?e.sort():[e]),Sr(r)}:QD().includes(a)?function(...e){return a.apply(np(this),e),Sr(kS.get(this))}:function(...e){return Sr(a.apply(np(this),e))}}function nN(a){return typeof a=="function"?tN(a):(a instanceof IDBTransaction&&$D(a),ZD(a,KD())?new Proxy(a,om):a)}function Sr(a){if(a instanceof IDBRequest)return JD(a);if(tp.has(a))return tp.get(a);const e=nN(a);return e!==a&&(tp.set(a,e),Xm.set(e,a)),e}const np=a=>Xm.get(a);function iN(a,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const u=indexedDB.open(a,e),d=Sr(u);return r&&u.addEventListener("upgradeneeded",m=>{r(Sr(u.result),m.oldVersion,m.newVersion,Sr(u.transaction),m)}),n&&u.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),d.then(m=>{c&&m.addEventListener("close",()=>c()),o&&m.addEventListener("versionchange",h=>o(h.oldVersion,h.newVersion,h))}).catch(()=>{}),d}const aN=["get","getKey","getAll","getAllKeys","count"],rN=["put","add","delete","clear"],ip=new Map;function uy(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(ip.get(e))return ip.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=rN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||aN.includes(n)))return;const c=async function(u,...d){const m=this.transaction(u,o?"readwrite":"readonly");let h=m.store;return r&&(h=h.index(d.shift())),(await Promise.all([h[n](...d),o&&m.done]))[0]};return ip.set(e,c),c}eN(a=>({...a,get:(e,n,r)=>uy(e,n)||a.get(e,n,r),has:(e,n)=>!!uy(e,n)||a.has(e,n)}));/**
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
 */class sN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oN(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lm="@firebase/app",fy="0.15.0";/**
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
 */const Ba=new jD("@firebase/app"),lN="@firebase/app-compat",cN="@firebase/analytics-compat",uN="@firebase/analytics",fN="@firebase/app-check-compat",dN="@firebase/app-check",hN="@firebase/auth",pN="@firebase/auth-compat",mN="@firebase/database",gN="@firebase/data-connect",vN="@firebase/database-compat",xN="@firebase/functions",_N="@firebase/functions-compat",yN="@firebase/installations",SN="@firebase/installations-compat",bN="@firebase/messaging",MN="@firebase/messaging-compat",EN="@firebase/performance",TN="@firebase/performance-compat",AN="@firebase/remote-config",wN="@firebase/remote-config-compat",RN="@firebase/storage",CN="@firebase/storage-compat",DN="@firebase/firestore",NN="@firebase/ai",UN="@firebase/firestore-compat",LN="firebase";/**
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
 */const cm="[DEFAULT]",ON={[lm]:"fire-core",[lN]:"fire-core-compat",[uN]:"fire-analytics",[cN]:"fire-analytics-compat",[dN]:"fire-app-check",[fN]:"fire-app-check-compat",[hN]:"fire-auth",[pN]:"fire-auth-compat",[mN]:"fire-rtdb",[gN]:"fire-data-connect",[vN]:"fire-rtdb-compat",[xN]:"fire-fn",[_N]:"fire-fn-compat",[yN]:"fire-iid",[SN]:"fire-iid-compat",[bN]:"fire-fcm",[MN]:"fire-fcm-compat",[EN]:"fire-perf",[TN]:"fire-perf-compat",[AN]:"fire-rc",[wN]:"fire-rc-compat",[RN]:"fire-gcs",[CN]:"fire-gcs-compat",[DN]:"fire-fst",[UN]:"fire-fst-compat",[NN]:"fire-vertex","fire-js":"fire-js",[LN]:"fire-js-all"};/**
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
 */const zu=new Map,PN=new Map,um=new Map;function dy(a,e){try{a.container.addComponent(e)}catch(n){Ba.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,n)}}function fm(a){const e=a.name;if(um.has(e))return Ba.debug(`There were multiple attempts to register component ${e}.`),!1;um.set(e,a);for(const n of zu.values())dy(n,a);for(const n of PN.values())dy(n,a);return!0}function iU(a,e){const n=a.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),a.container.getProvider(e)}/**
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
 */const IN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new VS("app","Firebase",IN);/**
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
 */class BN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fu("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}function WS(a,e={}){let n=a;typeof e!="object"&&(e={name:e});const r={name:cm,automaticDataCollectionEnabled:!0,...e},o=r.name;if(typeof o!="string"||!o)throw br.create("bad-app-name",{appName:String(o)});if(n||(n=GS()),!n)throw br.create("no-options");const c=zu.get(o);if(c){if(rm(n,c.options)&&rm(r,c.config))return c;throw br.create("duplicate-app",{appName:o})}const u=new kD(o);for(const m of um.values())u.addComponent(m);const d=new BN(n,r,u);return zu.set(o,d),d}function aU(a=cm){const e=zu.get(a);if(!e&&a===cm&&GS())return WS();if(!e)throw br.create("no-app",{appName:a});return e}function Cu(a,e,n){let r=ON[a]??a;n&&(r+=`-${n}`);const o=r.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&c&&u.push("and"),c&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ba.warn(u.join(" "));return}fm(new Fu(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const FN="firebase-heartbeat-database",zN=1,Rl="firebase-heartbeat-store";let ap=null;function qS(){return ap||(ap=iN(FN,zN,{upgrade:(a,e)=>{switch(e){case 0:try{a.createObjectStore(Rl)}catch(n){console.warn(n)}}}}).catch(a=>{throw br.create("idb-open",{originalErrorMessage:a.message})})),ap}async function HN(a){try{const n=(await qS()).transaction(Rl),r=await n.objectStore(Rl).get(YS(a));return await n.done,r}catch(e){if(e instanceof Pl)Ba.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ba.warn(n.message)}}}async function hy(a,e){try{const r=(await qS()).transaction(Rl,"readwrite");await r.objectStore(Rl).put(e,YS(a)),await r.done}catch(n){if(n instanceof Pl)Ba.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ba.warn(r.message)}}}function YS(a){return`${a.name}!${a.options.appId}`}/**
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
 */const GN=1024,VN=30;class kN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=py();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(u=>u.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>VN){const u=qN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ba.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=py(),{heartbeatsToSend:r,unsentEntries:o}=XN(this._heartbeatsCache.heartbeats),c=HS(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Ba.warn(n),""}}}function py(){return new Date().toISOString().substring(0,10)}function XN(a,e=GN){const n=[];let r=a.slice();for(const o of a){const c=n.find(u=>u.agent===o.agent);if(c){if(c.dates.push(o.date),my(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),my(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ND()?UD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return hy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return hy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function my(a){return HS(JSON.stringify({version:2,heartbeats:a})).length}function qN(a){if(a.length===0)return-1;let e=0,n=a[0].date;for(let r=1;r<a.length;r++)a[r].date<n&&(n=a[r].date,e=r);return e}/**
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
 */function YN(a){fm(new Fu("platform-logger",e=>new sN(e),"PRIVATE")),fm(new Fu("heartbeat",e=>new kN(e),"PRIVATE")),Cu(lm,fy,a),Cu(lm,fy,"esm2020"),Cu("fire-js","")}YN("");var jN="firebase",ZN="12.15.0";/**
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
 */Cu(jN,ZN,"app");const jS={apiKey:"AIzaSyDIA1VKqVLy9k3DeLJ22tBrPqCOelmWez0",authDomain:"elitefriendss-43e85.firebaseapp.com",databaseURL:"https://elitefriendss-43e85-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"elitefriendss-43e85",storageBucket:"elitefriendss-43e85.firebasestorage.app",messagingSenderId:"450064022815",appId:"1:450064022815:web:36bdfa70d0136da1de442a",measurementId:"G-3SVMCLB4N5"},KN=WS(jS);async function QN(){const{getAnalytics:a,isSupported:e}=await _D(async()=>{const{getAnalytics:r,isSupported:o}=await import("./index.esm-vdJYZZqe.js");return{getAnalytics:r,isSupported:o}},[]);return await e()&&jS.measurementId?a(KN):null}QN();lE.createRoot(document.getElementById("root")).render(D.jsx(fe.StrictMode,{children:D.jsx(by,{children:D.jsx(gD,{})})}));export{Fu as C,VS as E,Pl as F,jD as L,fm as _,iU as a,eU as b,ND as c,aU as d,rm as e,tU as f,nU as g,$N as i,iN as o,Cu as r,UD as v};
