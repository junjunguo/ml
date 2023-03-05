function r2(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(r,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var Pn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function s2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o2(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var s=[null];s.push.apply(s,arguments);var o=Function.bind.apply(t,s);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var s=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return e[r]}})}),n}var Aa={},i2={get exports(){return Aa},set exports(e){Aa=e}},wl={},q={},a2={get exports(){return q},set exports(e){q=e}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ii=Symbol.for("react.element"),l2=Symbol.for("react.portal"),u2=Symbol.for("react.fragment"),c2=Symbol.for("react.strict_mode"),f2=Symbol.for("react.profiler"),p2=Symbol.for("react.provider"),d2=Symbol.for("react.context"),h2=Symbol.for("react.forward_ref"),m2=Symbol.for("react.suspense"),g2=Symbol.for("react.memo"),y2=Symbol.for("react.lazy"),kd=Symbol.iterator;function v2(e){return e===null||typeof e!="object"?null:(e=kd&&e[kd]||e["@@iterator"],typeof e=="function"?e:null)}var Dm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Im=Object.assign,Cm={};function mo(e,t,n){this.props=e,this.context=t,this.refs=Cm,this.updater=n||Dm}mo.prototype.isReactComponent={};mo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Om(){}Om.prototype=mo.prototype;function Tf(e,t,n){this.props=e,this.context=t,this.refs=Cm,this.updater=n||Dm}var Nf=Tf.prototype=new Om;Nf.constructor=Tf;Im(Nf,mo.prototype);Nf.isPureReactComponent=!0;var xd=Array.isArray,Am=Object.prototype.hasOwnProperty,kf={current:null},Pm={key:!0,ref:!0,__self:!0,__source:!0};function Rm(e,t,n){var r,s={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Am.call(t,r)&&!Pm.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Ii,type:e,key:o,ref:i,props:s,_owner:kf.current}}function w2(e,t){return{$$typeof:Ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ii}function S2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _d=/\/+/g;function nu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S2(""+e.key):t.toString(36)}function ga(e,t,n,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ii:case l2:i=!0}}if(i)return i=e,s=s(i),e=r===""?"."+nu(i,0):r,xd(s)?(n="",e!=null&&(n=e.replace(_d,"$&/")+"/"),ga(s,t,n,"",function(u){return u})):s!=null&&(xf(s)&&(s=w2(s,n+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(_d,"$&/")+"/")+e)),t.push(s)),1;if(i=0,r=r===""?".":r+":",xd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+nu(o,a);i+=ga(o,t,n,l,s)}else if(l=v2(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+nu(o,a++),i+=ga(o,t,n,l,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ji(e,t,n){if(e==null)return e;var r=[],s=0;return ga(e,r,"","",function(o){return t.call(n,o,s++)}),r}function E2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var At={current:null},ya={transition:null},b2={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:ya,ReactCurrentOwner:kf};ge.Children={map:Ji,forEach:function(e,t,n){Ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ji(e,function(){t++}),t},toArray:function(e){return Ji(e,function(t){return t})||[]},only:function(e){if(!xf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ge.Component=mo;ge.Fragment=u2;ge.Profiler=f2;ge.PureComponent=Tf;ge.StrictMode=c2;ge.Suspense=m2;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b2;ge.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Im({},e.props),s=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=kf.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Am.call(t,l)&&!Pm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ii,type:e.type,key:s,ref:o,props:r,_owner:i}};ge.createContext=function(e){return e={$$typeof:d2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:p2,_context:e},e.Consumer=e};ge.createElement=Rm;ge.createFactory=function(e){var t=Rm.bind(null,e);return t.type=e,t};ge.createRef=function(){return{current:null}};ge.forwardRef=function(e){return{$$typeof:h2,render:e}};ge.isValidElement=xf;ge.lazy=function(e){return{$$typeof:y2,_payload:{_status:-1,_result:e},_init:E2}};ge.memo=function(e,t){return{$$typeof:g2,type:e,compare:t===void 0?null:t}};ge.startTransition=function(e){var t=ya.transition;ya.transition={};try{e()}finally{ya.transition=t}};ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ge.useCallback=function(e,t){return At.current.useCallback(e,t)};ge.useContext=function(e){return At.current.useContext(e)};ge.useDebugValue=function(){};ge.useDeferredValue=function(e){return At.current.useDeferredValue(e)};ge.useEffect=function(e,t){return At.current.useEffect(e,t)};ge.useId=function(){return At.current.useId()};ge.useImperativeHandle=function(e,t,n){return At.current.useImperativeHandle(e,t,n)};ge.useInsertionEffect=function(e,t){return At.current.useInsertionEffect(e,t)};ge.useLayoutEffect=function(e,t){return At.current.useLayoutEffect(e,t)};ge.useMemo=function(e,t){return At.current.useMemo(e,t)};ge.useReducer=function(e,t,n){return At.current.useReducer(e,t,n)};ge.useRef=function(e){return At.current.useRef(e)};ge.useState=function(e){return At.current.useState(e)};ge.useSyncExternalStore=function(e,t,n){return At.current.useSyncExternalStore(e,t,n)};ge.useTransition=function(){return At.current.useTransition()};ge.version="18.2.0";(function(e){e.exports=ge})(a2);const Fm=s2(q),Uu=r2({__proto__:null,default:Fm},[q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T2=q,N2=Symbol.for("react.element"),k2=Symbol.for("react.fragment"),x2=Object.prototype.hasOwnProperty,_2=T2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$2={key:!0,ref:!0,__self:!0,__source:!0};function Lm(e,t,n){var r,s={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)x2.call(t,r)&&!$2.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:N2,type:e,key:o,ref:i,props:s,_owner:_2.current}}wl.Fragment=k2;wl.jsx=Lm;wl.jsxs=Lm;(function(e){e.exports=wl})(i2);const We=Aa.jsx,Pa=Aa.jsxs;var Vu={},Hu={},D2={get exports(){return Hu},set exports(e){Hu=e}},nn={},Wu={},I2={get exports(){return Wu},set exports(e){Wu=e}},Bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(G,ne){var ue=G.length;G.push(ne);e:for(;0<ue;){var Te=ue-1>>>1,Oe=G[Te];if(0<s(Oe,ne))G[Te]=ne,G[ue]=Oe,ue=Te;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var ne=G[0],ue=G.pop();if(ue!==ne){G[0]=ue;e:for(var Te=0,Oe=G.length,jn=Oe>>>1;Te<jn;){var Kt=2*(Te+1)-1,Yr=G[Kt],sn=Kt+1,Mn=G[sn];if(0>s(Yr,ue))sn<Oe&&0>s(Mn,Yr)?(G[Te]=Mn,G[sn]=ue,Te=sn):(G[Te]=Yr,G[Kt]=ue,Te=Kt);else if(sn<Oe&&0>s(Mn,ue))G[Te]=Mn,G[sn]=ue,Te=sn;else break e}}return ne}function s(G,ne){var ue=G.sortIndex-ne.sortIndex;return ue!==0?ue:G.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var l=[],u=[],f=1,p=null,d=3,h=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(G){for(var ne=n(u);ne!==null;){if(ne.callback===null)r(u);else if(ne.startTime<=G)r(u),ne.sortIndex=ne.expirationTime,t(l,ne);else break;ne=n(u)}}function D(G){if(w=!1,N(G),!v)if(n(l)!==null)v=!0,Je(C);else{var ne=n(u);ne!==null&&Se(D,ne.startTime-G)}}function C(G,ne){v=!1,w&&(w=!1,S(z),z=-1),h=!0;var ue=d;try{for(N(ne),p=n(l);p!==null&&(!(p.expirationTime>ne)||G&&!Q());){var Te=p.callback;if(typeof Te=="function"){p.callback=null,d=p.priorityLevel;var Oe=Te(p.expirationTime<=ne);ne=e.unstable_now(),typeof Oe=="function"?p.callback=Oe:p===n(l)&&r(l),N(ne)}else r(l);p=n(l)}if(p!==null)var jn=!0;else{var Kt=n(u);Kt!==null&&Se(D,Kt.startTime-ne),jn=!1}return jn}finally{p=null,d=ue,h=!1}}var P=!1,F=null,z=-1,K=5,U=-1;function Q(){return!(e.unstable_now()-U<K)}function le(){if(F!==null){var G=e.unstable_now();U=G;var ne=!0;try{ne=F(!0,G)}finally{ne?fe():(P=!1,F=null)}}else P=!1}var fe;if(typeof T=="function")fe=function(){T(le)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Ce=me.port2;me.port1.onmessage=le,fe=function(){Ce.postMessage(null)}}else fe=function(){k(le,0)};function Je(G){F=G,P||(P=!0,fe())}function Se(G,ne){z=k(function(){G(e.unstable_now())},ne)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(G){G.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,Je(C))},e.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<G?Math.floor(1e3/G):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(G){switch(d){case 1:case 2:case 3:var ne=3;break;default:ne=d}var ue=d;d=ne;try{return G()}finally{d=ue}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(G,ne){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ue=d;d=G;try{return ne()}finally{d=ue}},e.unstable_scheduleCallback=function(G,ne,ue){var Te=e.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Te+ue:Te):ue=Te,G){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=ue+Oe,G={id:f++,callback:ne,priorityLevel:G,startTime:ue,expirationTime:Oe,sortIndex:-1},ue>Te?(G.sortIndex=ue,t(u,G),n(l)===null&&G===n(u)&&(w?(S(z),z=-1):w=!0,Se(D,ue-Te))):(G.sortIndex=Oe,t(l,G),v||h||(v=!0,Je(C))),G},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(G){var ne=d;return function(){var ue=d;d=ne;try{return G.apply(this,arguments)}finally{d=ue}}}})(Bm);(function(e){e.exports=Bm})(I2);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=q,tn=Wu;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jm=new Set,oi={};function bs(e,t){ro(e,t),ro(e+"Capture",t)}function ro(e,t){for(oi[e]=t,e=0;e<t.length;e++)jm.add(t[e])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=Object.prototype.hasOwnProperty,C2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$d={},Dd={};function O2(e){return Ku.call(Dd,e)?!0:Ku.call($d,e)?!1:C2.test(e)?Dd[e]=!0:($d[e]=!0,!1)}function A2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P2(e,t,n,r){if(t===null||typeof t>"u"||A2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pt(e,t,n,r,s,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){St[e]=new Pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];St[t]=new Pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){St[e]=new Pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){St[e]=new Pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){St[e]=new Pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){St[e]=new Pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){St[e]=new Pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){St[e]=new Pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){St[e]=new Pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var _f=/[\-:]([a-z])/g;function $f(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_f,$f);St[t]=new Pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_f,$f);St[t]=new Pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_f,$f);St[t]=new Pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){St[e]=new Pt(e,1,!1,e.toLowerCase(),null,!1,!1)});St.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){St[e]=new Pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Df(e,t,n,r){var s=St.hasOwnProperty(t)?St[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P2(t,n,s,r)&&(n=null),r||s===null?O2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mr=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zi=Symbol.for("react.element"),As=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),Mm=Symbol.for("react.provider"),Um=Symbol.for("react.context"),Cf=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),Of=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),Vm=Symbol.for("react.offscreen"),Id=Symbol.iterator;function Do(e){return e===null||typeof e!="object"?null:(e=Id&&e[Id]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Object.assign,ru;function Uo(e){if(ru===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ru=t&&t[1]||""}return`
`+ru+e}var su=!1;function ou(e,t){if(!e||su)return"";su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),o=r.stack.split(`
`),i=s.length-1,a=o.length-1;1<=i&&0<=a&&s[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(s[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||s[i]!==o[a]){var l=`
`+s[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=a);break}}}finally{su=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Uo(e):""}function R2(e){switch(e.tag){case 5:return Uo(e.type);case 16:return Uo("Lazy");case 13:return Uo("Suspense");case 19:return Uo("SuspenseList");case 0:case 2:case 15:return e=ou(e.type,!1),e;case 11:return e=ou(e.type.render,!1),e;case 1:return e=ou(e.type,!0),e;default:return""}}function Yu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ps:return"Fragment";case As:return"Portal";case Gu:return"Profiler";case If:return"StrictMode";case qu:return"Suspense";case Xu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Um:return(e.displayName||"Context")+".Consumer";case Mm:return(e._context.displayName||"Context")+".Provider";case Cf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Of:return t=e.displayName||null,t!==null?t:Yu(e.type)||"Memo";case Er:t=e._payload,e=e._init;try{return Yu(e(t))}catch{}}return null}function F2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(t);case 8:return t===If?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function L2(e){var t=Hm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ea(e){e._valueTracker||(e._valueTracker=L2(e))}function Wm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ra(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qu(e,t){var n=t.checked;return Ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Km(e,t){t=t.checked,t!=null&&Df(e,"checked",t,!1)}function Ju(e,t){Km(e,t);var n=zr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zu(e,t.type,zr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Od(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zu(e,t,n){(t!=="number"||Ra(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vo=Array.isArray;function Gs(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zr(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ec(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return Ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ad(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(H(92));if(Vo(n)){if(1<n.length)throw Error(H(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zr(n)}}function Gm(e,t){var n=zr(t.value),r=zr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ta,Xm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ta.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ii(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},B2=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(e){B2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qo[t]=qo[e]})});function Ym(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qo.hasOwnProperty(e)&&qo[e]?(""+t).trim():t+"px"}function Qm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Ym(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var z2=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(e,t){if(t){if(z2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function rc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sc=null;function Af(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oc=null,qs=null,Xs=null;function Rd(e){if(e=Ai(e)){if(typeof oc!="function")throw Error(H(280));var t=e.stateNode;t&&(t=Nl(t),oc(e.stateNode,e.type,t))}}function Jm(e){qs?Xs?Xs.push(e):Xs=[e]:qs=e}function Zm(){if(qs){var e=qs,t=Xs;if(Xs=qs=null,Rd(e),t)for(e=0;e<t.length;e++)Rd(t[e])}}function e1(e,t){return e(t)}function t1(){}var iu=!1;function n1(e,t,n){if(iu)return e(t,n);iu=!0;try{return e1(e,t,n)}finally{iu=!1,(qs!==null||Xs!==null)&&(t1(),Zm())}}function ai(e,t){var n=e.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var ic=!1;if(sr)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){ic=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{ic=!1}function j2(e,t,n,r,s,o,i,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Xo=!1,Fa=null,La=!1,ac=null,M2={onError:function(e){Xo=!0,Fa=e}};function U2(e,t,n,r,s,o,i,a,l){Xo=!1,Fa=null,j2.apply(M2,arguments)}function V2(e,t,n,r,s,o,i,a,l){if(U2.apply(this,arguments),Xo){if(Xo){var u=Fa;Xo=!1,Fa=null}else throw Error(H(198));La||(La=!0,ac=u)}}function Ts(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function r1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fd(e){if(Ts(e)!==e)throw Error(H(188))}function H2(e){var t=e.alternate;if(!t){if(t=Ts(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Fd(s),e;if(o===r)return Fd(s),t;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=s,r=o;else{for(var i=!1,a=s.child;a;){if(a===n){i=!0,n=s,r=o;break}if(a===r){i=!0,r=s,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=s;break}if(a===r){i=!0,r=o,n=s;break}a=a.sibling}if(!i)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function s1(e){return e=H2(e),e!==null?o1(e):null}function o1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=o1(e);if(t!==null)return t;e=e.sibling}return null}var i1=tn.unstable_scheduleCallback,Ld=tn.unstable_cancelCallback,W2=tn.unstable_shouldYield,K2=tn.unstable_requestPaint,et=tn.unstable_now,G2=tn.unstable_getCurrentPriorityLevel,Pf=tn.unstable_ImmediatePriority,a1=tn.unstable_UserBlockingPriority,Ba=tn.unstable_NormalPriority,q2=tn.unstable_LowPriority,l1=tn.unstable_IdlePriority,Sl=null,Rn=null;function X2(e){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Sl,e,void 0,(e.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:J2,Y2=Math.log,Q2=Math.LN2;function J2(e){return e>>>=0,e===0?32:31-(Y2(e)/Q2|0)|0}var na=64,ra=4194304;function Ho(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function za(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~s;a!==0?r=Ho(a):(o&=i,o!==0&&(r=Ho(o)))}else i=n&~s,i!==0?r=Ho(i):o!==0&&(r=Ho(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kn(t),s=1<<n,r|=e[n],t&=~s;return r}function Z2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e3(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-kn(o),a=1<<i,l=s[i];l===-1?(!(a&n)||a&r)&&(s[i]=Z2(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function lc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function u1(){var e=na;return na<<=1,!(na&4194240)&&(na=64),e}function au(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kn(t),e[t]=n}function t3(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-kn(n),o=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~o}}function Rf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kn(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var De=0;function c1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var f1,Ff,p1,d1,h1,uc=!1,sa=[],Dr=null,Ir=null,Cr=null,li=new Map,ui=new Map,Tr=[],n3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bd(e,t){switch(e){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ui.delete(t.pointerId)}}function Co(e,t,n,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},t!==null&&(t=Ai(t),t!==null&&Ff(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function r3(e,t,n,r,s){switch(t){case"focusin":return Dr=Co(Dr,e,t,n,r,s),!0;case"dragenter":return Ir=Co(Ir,e,t,n,r,s),!0;case"mouseover":return Cr=Co(Cr,e,t,n,r,s),!0;case"pointerover":var o=s.pointerId;return li.set(o,Co(li.get(o)||null,e,t,n,r,s)),!0;case"gotpointercapture":return o=s.pointerId,ui.set(o,Co(ui.get(o)||null,e,t,n,r,s)),!0}return!1}function m1(e){var t=ns(e.target);if(t!==null){var n=Ts(t);if(n!==null){if(t=n.tag,t===13){if(t=r1(n),t!==null){e.blockedOn=t,h1(e.priority,function(){p1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function va(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sc=r,n.target.dispatchEvent(r),sc=null}else return t=Ai(n),t!==null&&Ff(t),e.blockedOn=n,!1;t.shift()}return!0}function zd(e,t,n){va(e)&&n.delete(t)}function s3(){uc=!1,Dr!==null&&va(Dr)&&(Dr=null),Ir!==null&&va(Ir)&&(Ir=null),Cr!==null&&va(Cr)&&(Cr=null),li.forEach(zd),ui.forEach(zd)}function Oo(e,t){e.blockedOn===t&&(e.blockedOn=null,uc||(uc=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,s3)))}function ci(e){function t(s){return Oo(s,e)}if(0<sa.length){Oo(sa[0],e);for(var n=1;n<sa.length;n++){var r=sa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dr!==null&&Oo(Dr,e),Ir!==null&&Oo(Ir,e),Cr!==null&&Oo(Cr,e),li.forEach(t),ui.forEach(t),n=0;n<Tr.length;n++)r=Tr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)m1(n),n.blockedOn===null&&Tr.shift()}var Ys=mr.ReactCurrentBatchConfig,ja=!0;function o3(e,t,n,r){var s=De,o=Ys.transition;Ys.transition=null;try{De=1,Lf(e,t,n,r)}finally{De=s,Ys.transition=o}}function i3(e,t,n,r){var s=De,o=Ys.transition;Ys.transition=null;try{De=4,Lf(e,t,n,r)}finally{De=s,Ys.transition=o}}function Lf(e,t,n,r){if(ja){var s=cc(e,t,n,r);if(s===null)yu(e,t,r,Ma,n),Bd(e,r);else if(r3(s,e,t,n,r))r.stopPropagation();else if(Bd(e,r),t&4&&-1<n3.indexOf(e)){for(;s!==null;){var o=Ai(s);if(o!==null&&f1(o),o=cc(e,t,n,r),o===null&&yu(e,t,r,Ma,n),o===s)break;s=o}s!==null&&r.stopPropagation()}else yu(e,t,r,null,n)}}var Ma=null;function cc(e,t,n,r){if(Ma=null,e=Af(r),e=ns(e),e!==null)if(t=Ts(e),t===null)e=null;else if(n=t.tag,n===13){if(e=r1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ma=e,null}function g1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G2()){case Pf:return 1;case a1:return 4;case Ba:case q2:return 16;case l1:return 536870912;default:return 16}default:return 16}}var kr=null,Bf=null,wa=null;function y1(){if(wa)return wa;var e,t=Bf,n=t.length,r,s="value"in kr?kr.value:kr.textContent,o=s.length;for(e=0;e<n&&t[e]===s[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===s[o-r];r++);return wa=s.slice(e,1<r?1-r:void 0)}function Sa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oa(){return!0}function jd(){return!1}function rn(e){function t(n,r,s,o,i){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oa:jd,this.isPropagationStopped=jd,this}return Ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),t}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zf=rn(go),Oi=Ge({},go,{view:0,detail:0}),a3=rn(Oi),lu,uu,Ao,El=Ge({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ao&&(Ao&&e.type==="mousemove"?(lu=e.screenX-Ao.screenX,uu=e.screenY-Ao.screenY):uu=lu=0,Ao=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),Md=rn(El),l3=Ge({},El,{dataTransfer:0}),u3=rn(l3),c3=Ge({},Oi,{relatedTarget:0}),cu=rn(c3),f3=Ge({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),p3=rn(f3),d3=Ge({},go,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),h3=rn(d3),m3=Ge({},go,{data:0}),Ud=rn(m3),g3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=v3[e])?!!t[e]:!1}function jf(){return w3}var S3=Ge({},Oi,{key:function(e){if(e.key){var t=g3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?y3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(e){return e.type==="keypress"?Sa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E3=rn(S3),b3=Ge({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=rn(b3),T3=Ge({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),N3=rn(T3),k3=Ge({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),x3=rn(k3),_3=Ge({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$3=rn(_3),D3=[9,13,27,32],Mf=sr&&"CompositionEvent"in window,Yo=null;sr&&"documentMode"in document&&(Yo=document.documentMode);var I3=sr&&"TextEvent"in window&&!Yo,v1=sr&&(!Mf||Yo&&8<Yo&&11>=Yo),Hd=String.fromCharCode(32),Wd=!1;function w1(e,t){switch(e){case"keyup":return D3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rs=!1;function C3(e,t){switch(e){case"compositionend":return S1(t);case"keypress":return t.which!==32?null:(Wd=!0,Hd);case"textInput":return e=t.data,e===Hd&&Wd?null:e;default:return null}}function O3(e,t){if(Rs)return e==="compositionend"||!Mf&&w1(e,t)?(e=y1(),wa=Bf=kr=null,Rs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return v1&&t.locale!=="ko"?null:t.data;default:return null}}var A3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A3[e.type]:t==="textarea"}function E1(e,t,n,r){Jm(r),t=Ua(t,"onChange"),0<t.length&&(n=new zf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qo=null,fi=null;function P3(e){O1(e,0)}function bl(e){var t=Bs(e);if(Wm(t))return e}function R3(e,t){if(e==="change")return t}var b1=!1;if(sr){var fu;if(sr){var pu="oninput"in document;if(!pu){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),pu=typeof Gd.oninput=="function"}fu=pu}else fu=!1;b1=fu&&(!document.documentMode||9<document.documentMode)}function qd(){Qo&&(Qo.detachEvent("onpropertychange",T1),fi=Qo=null)}function T1(e){if(e.propertyName==="value"&&bl(fi)){var t=[];E1(t,fi,e,Af(e)),n1(P3,t)}}function F3(e,t,n){e==="focusin"?(qd(),Qo=t,fi=n,Qo.attachEvent("onpropertychange",T1)):e==="focusout"&&qd()}function L3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(fi)}function B3(e,t){if(e==="click")return bl(t)}function z3(e,t){if(e==="input"||e==="change")return bl(t)}function j3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _n=typeof Object.is=="function"?Object.is:j3;function pi(e,t){if(_n(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ku.call(t,s)||!_n(e[s],t[s]))return!1}return!0}function Xd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yd(e,t){var n=Xd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xd(n)}}function N1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?N1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function k1(){for(var e=window,t=Ra();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ra(e.document)}return t}function Uf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function M3(e){var t=k1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&N1(n.ownerDocument.documentElement,n)){if(r!==null&&Uf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=Yd(n,o);var i=Yd(n,r);s&&i&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var U3=sr&&"documentMode"in document&&11>=document.documentMode,Fs=null,fc=null,Jo=null,pc=!1;function Qd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pc||Fs==null||Fs!==Ra(r)||(r=Fs,"selectionStart"in r&&Uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jo&&pi(Jo,r)||(Jo=r,r=Ua(fc,"onSelect"),0<r.length&&(t=new zf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fs)))}function ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ls={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},du={},x1={};sr&&(x1=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Tl(e){if(du[e])return du[e];if(!Ls[e])return e;var t=Ls[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in x1)return du[e]=t[n];return e}var _1=Tl("animationend"),$1=Tl("animationiteration"),D1=Tl("animationstart"),I1=Tl("transitionend"),C1=new Map,Jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(e,t){C1.set(e,t),bs(t,[e])}for(var hu=0;hu<Jd.length;hu++){var mu=Jd[hu],V3=mu.toLowerCase(),H3=mu[0].toUpperCase()+mu.slice(1);Hr(V3,"on"+H3)}Hr(_1,"onAnimationEnd");Hr($1,"onAnimationIteration");Hr(D1,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(I1,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function Zd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,V2(r,t,void 0,e),e.currentTarget=null}function O1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&s.isPropagationStopped())break e;Zd(s,a,u),o=l}else for(i=0;i<r.length;i++){if(a=r[i],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&s.isPropagationStopped())break e;Zd(s,a,u),o=l}}}if(La)throw e=ac,La=!1,ac=null,e}function ze(e,t){var n=t[yc];n===void 0&&(n=t[yc]=new Set);var r=e+"__bubble";n.has(r)||(A1(t,e,2,!1),n.add(r))}function gu(e,t,n){var r=0;t&&(r|=4),A1(n,e,r,t)}var aa="_reactListening"+Math.random().toString(36).slice(2);function di(e){if(!e[aa]){e[aa]=!0,jm.forEach(function(n){n!=="selectionchange"&&(W3.has(n)||gu(n,!1,e),gu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[aa]||(t[aa]=!0,gu("selectionchange",!1,t))}}function A1(e,t,n,r){switch(g1(t)){case 1:var s=o3;break;case 4:s=i3;break;default:s=Lf}n=s.bind(null,t,n,e),s=void 0,!ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function yu(e,t,n,r,s){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;i=i.return}for(;a!==null;){if(i=ns(a),i===null)return;if(l=i.tag,l===5||l===6){r=o=i;continue e}a=a.parentNode}}r=r.return}n1(function(){var u=o,f=Af(n),p=[];e:{var d=C1.get(e);if(d!==void 0){var h=zf,v=e;switch(e){case"keypress":if(Sa(n)===0)break e;case"keydown":case"keyup":h=E3;break;case"focusin":v="focus",h=cu;break;case"focusout":v="blur",h=cu;break;case"beforeblur":case"afterblur":h=cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=u3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=N3;break;case _1:case $1:case D1:h=p3;break;case I1:h=x3;break;case"scroll":h=a3;break;case"wheel":h=$3;break;case"copy":case"cut":case"paste":h=h3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Vd}var w=(t&4)!==0,k=!w&&e==="scroll",S=w?d!==null?d+"Capture":null:d;w=[];for(var T=u,N;T!==null;){N=T;var D=N.stateNode;if(N.tag===5&&D!==null&&(N=D,S!==null&&(D=ai(T,S),D!=null&&w.push(hi(T,D,N)))),k)break;T=T.return}0<w.length&&(d=new h(d,v,null,n,f),p.push({event:d,listeners:w}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&n!==sc&&(v=n.relatedTarget||n.fromElement)&&(ns(v)||v[or]))break e;if((h||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=u,v=v?ns(v):null,v!==null&&(k=Ts(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=u),h!==v)){if(w=Md,D="onMouseLeave",S="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(w=Vd,D="onPointerLeave",S="onPointerEnter",T="pointer"),k=h==null?d:Bs(h),N=v==null?d:Bs(v),d=new w(D,T+"leave",h,n,f),d.target=k,d.relatedTarget=N,D=null,ns(f)===u&&(w=new w(S,T+"enter",v,n,f),w.target=N,w.relatedTarget=k,D=w),k=D,h&&v)t:{for(w=h,S=v,T=0,N=w;N;N=Is(N))T++;for(N=0,D=S;D;D=Is(D))N++;for(;0<T-N;)w=Is(w),T--;for(;0<N-T;)S=Is(S),N--;for(;T--;){if(w===S||S!==null&&w===S.alternate)break t;w=Is(w),S=Is(S)}w=null}else w=null;h!==null&&eh(p,d,h,w,!1),v!==null&&k!==null&&eh(p,k,v,w,!0)}}e:{if(d=u?Bs(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var C=R3;else if(Kd(d))if(b1)C=z3;else{C=L3;var P=F3}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=B3);if(C&&(C=C(e,u))){E1(p,C,n,f);break e}P&&P(e,d,u),e==="focusout"&&(P=d._wrapperState)&&P.controlled&&d.type==="number"&&Zu(d,"number",d.value)}switch(P=u?Bs(u):window,e){case"focusin":(Kd(P)||P.contentEditable==="true")&&(Fs=P,fc=u,Jo=null);break;case"focusout":Jo=fc=Fs=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Qd(p,n,f);break;case"selectionchange":if(U3)break;case"keydown":case"keyup":Qd(p,n,f)}var F;if(Mf)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Rs?w1(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(v1&&n.locale!=="ko"&&(Rs||z!=="onCompositionStart"?z==="onCompositionEnd"&&Rs&&(F=y1()):(kr=f,Bf="value"in kr?kr.value:kr.textContent,Rs=!0)),P=Ua(u,z),0<P.length&&(z=new Ud(z,e,null,n,f),p.push({event:z,listeners:P}),F?z.data=F:(F=S1(n),F!==null&&(z.data=F)))),(F=I3?C3(e,n):O3(e,n))&&(u=Ua(u,"onBeforeInput"),0<u.length&&(f=new Ud("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=F))}O1(p,t)})}function hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ua(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=ai(e,n),o!=null&&r.unshift(hi(e,o,s)),o=ai(e,t),o!=null&&r.push(hi(e,o,s))),e=e.return}return r}function Is(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eh(e,t,n,r,s){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,s?(l=ai(n,o),l!=null&&i.unshift(hi(n,l,a))):s||(l=ai(n,o),l!=null&&i.push(hi(n,l,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var K3=/\r\n?/g,G3=/\u0000|\uFFFD/g;function th(e){return(typeof e=="string"?e:""+e).replace(K3,`
`).replace(G3,"")}function la(e,t,n){if(t=th(t),th(e)!==t&&n)throw Error(H(425))}function Va(){}var dc=null,hc=null;function mc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,q3=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,X3=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(e){return nh.resolve(null).then(e).catch(Y3)}:gc;function Y3(e){setTimeout(function(){throw e})}function vu(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),ci(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ci(t)}function Or(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yo=Math.random().toString(36).slice(2),An="__reactFiber$"+yo,mi="__reactProps$"+yo,or="__reactContainer$"+yo,yc="__reactEvents$"+yo,Q3="__reactListeners$"+yo,J3="__reactHandles$"+yo;function ns(e){var t=e[An];if(t)return t;for(var n=e.parentNode;n;){if(t=n[or]||n[An]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rh(e);e!==null;){if(n=e[An])return n;e=rh(e)}return t}e=n,n=e.parentNode}return null}function Ai(e){return e=e[An]||e[or],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bs(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function Nl(e){return e[mi]||null}var vc=[],zs=-1;function Wr(e){return{current:e}}function je(e){0>zs||(e.current=vc[zs],vc[zs]=null,zs--)}function Le(e,t){zs++,vc[zs]=e.current,e.current=t}var jr={},Dt=Wr(jr),Ut=Wr(!1),ps=jr;function so(e,t){var n=e.type.contextTypes;if(!n)return jr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Vt(e){return e=e.childContextTypes,e!=null}function Ha(){je(Ut),je(Dt)}function sh(e,t,n){if(Dt.current!==jr)throw Error(H(168));Le(Dt,t),Le(Ut,n)}function P1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(H(108,F2(e)||"Unknown",s));return Ge({},n,r)}function Wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jr,ps=Dt.current,Le(Dt,e),Le(Ut,Ut.current),!0}function oh(e,t,n){var r=e.stateNode;if(!r)throw Error(H(169));n?(e=P1(e,t,ps),r.__reactInternalMemoizedMergedChildContext=e,je(Ut),je(Dt),Le(Dt,e)):je(Ut),Le(Ut,n)}var Xn=null,kl=!1,wu=!1;function R1(e){Xn===null?Xn=[e]:Xn.push(e)}function Z3(e){kl=!0,R1(e)}function Kr(){if(!wu&&Xn!==null){wu=!0;var e=0,t=De;try{var n=Xn;for(De=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xn=null,kl=!1}catch(s){throw Xn!==null&&(Xn=Xn.slice(e+1)),i1(Pf,Kr),s}finally{De=t,wu=!1}}return null}var js=[],Ms=0,Ka=null,Ga=0,pn=[],dn=0,ds=null,Zn=1,er="";function es(e,t){js[Ms++]=Ga,js[Ms++]=Ka,Ka=e,Ga=t}function F1(e,t,n){pn[dn++]=Zn,pn[dn++]=er,pn[dn++]=ds,ds=e;var r=Zn;e=er;var s=32-kn(r)-1;r&=~(1<<s),n+=1;var o=32-kn(t)+s;if(30<o){var i=s-s%5;o=(r&(1<<i)-1).toString(32),r>>=i,s-=i,Zn=1<<32-kn(t)+s|n<<s|r,er=o+e}else Zn=1<<o|n<<s|r,er=e}function Vf(e){e.return!==null&&(es(e,1),F1(e,1,0))}function Hf(e){for(;e===Ka;)Ka=js[--Ms],js[Ms]=null,Ga=js[--Ms],js[Ms]=null;for(;e===ds;)ds=pn[--dn],pn[dn]=null,er=pn[--dn],pn[dn]=null,Zn=pn[--dn],pn[dn]=null}var en=null,Zt=null,Ve=!1,Tn=null;function L1(e,t){var n=hn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ih(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,en=e,Zt=Or(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,en=e,Zt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ds!==null?{id:Zn,overflow:er}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=hn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,en=e,Zt=null,!0):!1;default:return!1}}function wc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sc(e){if(Ve){var t=Zt;if(t){var n=t;if(!ih(e,t)){if(wc(e))throw Error(H(418));t=Or(n.nextSibling);var r=en;t&&ih(e,t)?L1(r,n):(e.flags=e.flags&-4097|2,Ve=!1,en=e)}}else{if(wc(e))throw Error(H(418));e.flags=e.flags&-4097|2,Ve=!1,en=e}}}function ah(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;en=e}function ua(e){if(e!==en)return!1;if(!Ve)return ah(e),Ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!mc(e.type,e.memoizedProps)),t&&(t=Zt)){if(wc(e))throw B1(),Error(H(418));for(;t;)L1(e,t),t=Or(t.nextSibling)}if(ah(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Zt=Or(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Zt=null}}else Zt=en?Or(e.stateNode.nextSibling):null;return!0}function B1(){for(var e=Zt;e;)e=Or(e.nextSibling)}function oo(){Zt=en=null,Ve=!1}function Wf(e){Tn===null?Tn=[e]:Tn.push(e)}var ev=mr.ReactCurrentBatchConfig;function En(e,t){if(e&&e.defaultProps){t=Ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qa=Wr(null),Xa=null,Us=null,Kf=null;function Gf(){Kf=Us=Xa=null}function qf(e){var t=qa.current;je(qa),e._currentValue=t}function Ec(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qs(e,t){Xa=e,Kf=Us=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(jt=!0),e.firstContext=null)}function gn(e){var t=e._currentValue;if(Kf!==e)if(e={context:e,memoizedValue:t,next:null},Us===null){if(Xa===null)throw Error(H(308));Us=e,Xa.dependencies={lanes:0,firstContext:e}}else Us=Us.next=e;return t}var rs=null;function Xf(e){rs===null?rs=[e]:rs.push(e)}function z1(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Xf(t)):(n.next=s.next,s.next=n),t.interleaved=n,ir(e,r)}function ir(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var br=!1;function Yf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ar(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,be&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,ir(e,n)}return s=r.interleaved,s===null?(t.next=t,Xf(r)):(t.next=s.next,s.next=t),r.interleaved=t,ir(e,n)}function Ea(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rf(e,n)}}function lh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ya(e,t,n,r){var s=e.updateQueue;br=!1;var o=s.firstBaseUpdate,i=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,u=l.next;l.next=null,i===null?o=u:i.next=u,i=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==i&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var p=s.baseState;i=0,f=u=l=null,a=o;do{var d=a.lane,h=a.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(d=t,h=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(h,p,d);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(h,p,d):v,d==null)break e;p=Ge({},p,d);break e;case 2:br=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=s.effects,d===null?s.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=h,l=p):f=f.next=h,i|=d;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;d=a,a=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(1);if(f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=f,t=s.shared.interleaved,t!==null){s=t;do i|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);ms|=i,e.lanes=i,e.memoizedState=p}}function uh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(H(191,s));s.call(r)}}}var M1=new zm.Component().refs;function bc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xl={isMounted:function(e){return(e=e._reactInternals)?Ts(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ot(),s=Rr(e),o=tr(r,s);o.payload=t,n!=null&&(o.callback=n),t=Ar(e,o,s),t!==null&&(xn(t,e,s,r),Ea(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ot(),s=Rr(e),o=tr(r,s);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ar(e,o,s),t!==null&&(xn(t,e,s,r),Ea(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),r=Rr(e),s=tr(n,r);s.tag=2,t!=null&&(s.callback=t),t=Ar(e,s,r),t!==null&&(xn(t,e,r,n),Ea(t,e,r))}};function ch(e,t,n,r,s,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!pi(n,r)||!pi(s,o):!0}function U1(e,t,n){var r=!1,s=jr,o=t.contextType;return typeof o=="object"&&o!==null?o=gn(o):(s=Vt(t)?ps:Dt.current,r=t.contextTypes,o=(r=r!=null)?so(e,s):jr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function fh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xl.enqueueReplaceState(t,t.state,null)}function Tc(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=M1,Yf(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=gn(o):(o=Vt(t)?ps:Dt.current,s.context=so(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bc(e,t,o,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&xl.enqueueReplaceState(s,s.state,null),Ya(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Po(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,e));var s=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=s.refs;a===M1&&(a=s.refs={}),i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function ca(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ph(e){var t=e._init;return t(e._payload)}function V1(e){function t(S,T){if(e){var N=S.deletions;N===null?(S.deletions=[T],S.flags|=16):N.push(T)}}function n(S,T){if(!e)return null;for(;T!==null;)t(S,T),T=T.sibling;return null}function r(S,T){for(S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function s(S,T){return S=Fr(S,T),S.index=0,S.sibling=null,S}function o(S,T,N){return S.index=N,e?(N=S.alternate,N!==null?(N=N.index,N<T?(S.flags|=2,T):N):(S.flags|=2,T)):(S.flags|=1048576,T)}function i(S){return e&&S.alternate===null&&(S.flags|=2),S}function a(S,T,N,D){return T===null||T.tag!==6?(T=xu(N,S.mode,D),T.return=S,T):(T=s(T,N),T.return=S,T)}function l(S,T,N,D){var C=N.type;return C===Ps?f(S,T,N.props.children,D,N.key):T!==null&&(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Er&&ph(C)===T.type)?(D=s(T,N.props),D.ref=Po(S,T,N),D.return=S,D):(D=_a(N.type,N.key,N.props,null,S.mode,D),D.ref=Po(S,T,N),D.return=S,D)}function u(S,T,N,D){return T===null||T.tag!==4||T.stateNode.containerInfo!==N.containerInfo||T.stateNode.implementation!==N.implementation?(T=_u(N,S.mode,D),T.return=S,T):(T=s(T,N.children||[]),T.return=S,T)}function f(S,T,N,D,C){return T===null||T.tag!==7?(T=us(N,S.mode,D,C),T.return=S,T):(T=s(T,N),T.return=S,T)}function p(S,T,N){if(typeof T=="string"&&T!==""||typeof T=="number")return T=xu(""+T,S.mode,N),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Zi:return N=_a(T.type,T.key,T.props,null,S.mode,N),N.ref=Po(S,null,T),N.return=S,N;case As:return T=_u(T,S.mode,N),T.return=S,T;case Er:var D=T._init;return p(S,D(T._payload),N)}if(Vo(T)||Do(T))return T=us(T,S.mode,N,null),T.return=S,T;ca(S,T)}return null}function d(S,T,N,D){var C=T!==null?T.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return C!==null?null:a(S,T,""+N,D);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Zi:return N.key===C?l(S,T,N,D):null;case As:return N.key===C?u(S,T,N,D):null;case Er:return C=N._init,d(S,T,C(N._payload),D)}if(Vo(N)||Do(N))return C!==null?null:f(S,T,N,D,null);ca(S,N)}return null}function h(S,T,N,D,C){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(N)||null,a(T,S,""+D,C);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Zi:return S=S.get(D.key===null?N:D.key)||null,l(T,S,D,C);case As:return S=S.get(D.key===null?N:D.key)||null,u(T,S,D,C);case Er:var P=D._init;return h(S,T,N,P(D._payload),C)}if(Vo(D)||Do(D))return S=S.get(N)||null,f(T,S,D,C,null);ca(T,D)}return null}function v(S,T,N,D){for(var C=null,P=null,F=T,z=T=0,K=null;F!==null&&z<N.length;z++){F.index>z?(K=F,F=null):K=F.sibling;var U=d(S,F,N[z],D);if(U===null){F===null&&(F=K);break}e&&F&&U.alternate===null&&t(S,F),T=o(U,T,z),P===null?C=U:P.sibling=U,P=U,F=K}if(z===N.length)return n(S,F),Ve&&es(S,z),C;if(F===null){for(;z<N.length;z++)F=p(S,N[z],D),F!==null&&(T=o(F,T,z),P===null?C=F:P.sibling=F,P=F);return Ve&&es(S,z),C}for(F=r(S,F);z<N.length;z++)K=h(F,S,z,N[z],D),K!==null&&(e&&K.alternate!==null&&F.delete(K.key===null?z:K.key),T=o(K,T,z),P===null?C=K:P.sibling=K,P=K);return e&&F.forEach(function(Q){return t(S,Q)}),Ve&&es(S,z),C}function w(S,T,N,D){var C=Do(N);if(typeof C!="function")throw Error(H(150));if(N=C.call(N),N==null)throw Error(H(151));for(var P=C=null,F=T,z=T=0,K=null,U=N.next();F!==null&&!U.done;z++,U=N.next()){F.index>z?(K=F,F=null):K=F.sibling;var Q=d(S,F,U.value,D);if(Q===null){F===null&&(F=K);break}e&&F&&Q.alternate===null&&t(S,F),T=o(Q,T,z),P===null?C=Q:P.sibling=Q,P=Q,F=K}if(U.done)return n(S,F),Ve&&es(S,z),C;if(F===null){for(;!U.done;z++,U=N.next())U=p(S,U.value,D),U!==null&&(T=o(U,T,z),P===null?C=U:P.sibling=U,P=U);return Ve&&es(S,z),C}for(F=r(S,F);!U.done;z++,U=N.next())U=h(F,S,z,U.value,D),U!==null&&(e&&U.alternate!==null&&F.delete(U.key===null?z:U.key),T=o(U,T,z),P===null?C=U:P.sibling=U,P=U);return e&&F.forEach(function(le){return t(S,le)}),Ve&&es(S,z),C}function k(S,T,N,D){if(typeof N=="object"&&N!==null&&N.type===Ps&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case Zi:e:{for(var C=N.key,P=T;P!==null;){if(P.key===C){if(C=N.type,C===Ps){if(P.tag===7){n(S,P.sibling),T=s(P,N.props.children),T.return=S,S=T;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Er&&ph(C)===P.type){n(S,P.sibling),T=s(P,N.props),T.ref=Po(S,P,N),T.return=S,S=T;break e}n(S,P);break}else t(S,P);P=P.sibling}N.type===Ps?(T=us(N.props.children,S.mode,D,N.key),T.return=S,S=T):(D=_a(N.type,N.key,N.props,null,S.mode,D),D.ref=Po(S,T,N),D.return=S,S=D)}return i(S);case As:e:{for(P=N.key;T!==null;){if(T.key===P)if(T.tag===4&&T.stateNode.containerInfo===N.containerInfo&&T.stateNode.implementation===N.implementation){n(S,T.sibling),T=s(T,N.children||[]),T.return=S,S=T;break e}else{n(S,T);break}else t(S,T);T=T.sibling}T=_u(N,S.mode,D),T.return=S,S=T}return i(S);case Er:return P=N._init,k(S,T,P(N._payload),D)}if(Vo(N))return v(S,T,N,D);if(Do(N))return w(S,T,N,D);ca(S,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,T!==null&&T.tag===6?(n(S,T.sibling),T=s(T,N),T.return=S,S=T):(n(S,T),T=xu(N,S.mode,D),T.return=S,S=T),i(S)):n(S,T)}return k}var io=V1(!0),H1=V1(!1),Pi={},Fn=Wr(Pi),gi=Wr(Pi),yi=Wr(Pi);function ss(e){if(e===Pi)throw Error(H(174));return e}function Qf(e,t){switch(Le(yi,t),Le(gi,e),Le(Fn,Pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tc(t,e)}je(Fn),Le(Fn,t)}function ao(){je(Fn),je(gi),je(yi)}function W1(e){ss(yi.current);var t=ss(Fn.current),n=tc(t,e.type);t!==n&&(Le(gi,e),Le(Fn,n))}function Jf(e){gi.current===e&&(je(Fn),je(gi))}var He=Wr(0);function Qa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Su=[];function Zf(){for(var e=0;e<Su.length;e++)Su[e]._workInProgressVersionPrimary=null;Su.length=0}var ba=mr.ReactCurrentDispatcher,Eu=mr.ReactCurrentBatchConfig,hs=0,Ke=null,it=null,ft=null,Ja=!1,Zo=!1,vi=0,tv=0;function Tt(){throw Error(H(321))}function ep(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_n(e[n],t[n]))return!1;return!0}function tp(e,t,n,r,s,o){if(hs=o,Ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ba.current=e===null||e.memoizedState===null?ov:iv,e=n(r,s),Zo){o=0;do{if(Zo=!1,vi=0,25<=o)throw Error(H(301));o+=1,ft=it=null,t.updateQueue=null,ba.current=av,e=n(r,s)}while(Zo)}if(ba.current=Za,t=it!==null&&it.next!==null,hs=0,ft=it=Ke=null,Ja=!1,t)throw Error(H(300));return e}function np(){var e=vi!==0;return vi=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Ke.memoizedState=ft=e:ft=ft.next=e,ft}function yn(){if(it===null){var e=Ke.alternate;e=e!==null?e.memoizedState:null}else e=it.next;var t=ft===null?Ke.memoizedState:ft.next;if(t!==null)ft=t,it=e;else{if(e===null)throw Error(H(310));it=e,e={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ft===null?Ke.memoizedState=ft=e:ft=ft.next=e}return ft}function wi(e,t){return typeof t=="function"?t(e):t}function bu(e){var t=yn(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=it,s=r.baseQueue,o=n.pending;if(o!==null){if(s!==null){var i=s.next;s.next=o.next,o.next=i}r.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,r=r.baseState;var a=i=null,l=null,u=o;do{var f=u.lane;if((hs&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,i=r):l=l.next=p,Ke.lanes|=f,ms|=f}u=u.next}while(u!==null&&u!==o);l===null?i=r:l.next=a,_n(r,t.memoizedState)||(jt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do o=s.lane,Ke.lanes|=o,ms|=o,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Tu(e){var t=yn(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var i=s=s.next;do o=e(o,i.action),i=i.next;while(i!==s);_n(o,t.memoizedState)||(jt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function K1(){}function G1(e,t){var n=Ke,r=yn(),s=t(),o=!_n(r.memoizedState,s);if(o&&(r.memoizedState=s,jt=!0),r=r.queue,rp(Y1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,Si(9,X1.bind(null,n,r,s,t),void 0,null),dt===null)throw Error(H(349));hs&30||q1(n,t,s)}return s}function q1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ke.updateQueue,t===null?(t={lastEffect:null,stores:null},Ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function X1(e,t,n,r){t.value=n,t.getSnapshot=r,Q1(t)&&J1(e)}function Y1(e,t,n){return n(function(){Q1(t)&&J1(e)})}function Q1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_n(e,n)}catch{return!0}}function J1(e){var t=ir(e,1);t!==null&&xn(t,e,1,-1)}function dh(e){var t=Cn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:e},t.queue=e,e=e.dispatch=sv.bind(null,Ke,e),[t.memoizedState,e]}function Si(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ke.updateQueue,t===null?(t={lastEffect:null,stores:null},Ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Z1(){return yn().memoizedState}function Ta(e,t,n,r){var s=Cn();Ke.flags|=e,s.memoizedState=Si(1|t,n,void 0,r===void 0?null:r)}function _l(e,t,n,r){var s=yn();r=r===void 0?null:r;var o=void 0;if(it!==null){var i=it.memoizedState;if(o=i.destroy,r!==null&&ep(r,i.deps)){s.memoizedState=Si(t,n,o,r);return}}Ke.flags|=e,s.memoizedState=Si(1|t,n,o,r)}function hh(e,t){return Ta(8390656,8,e,t)}function rp(e,t){return _l(2048,8,e,t)}function eg(e,t){return _l(4,2,e,t)}function tg(e,t){return _l(4,4,e,t)}function ng(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rg(e,t,n){return n=n!=null?n.concat([e]):null,_l(4,4,ng.bind(null,t,e),n)}function sp(){}function sg(e,t){var n=yn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ep(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function og(e,t){var n=yn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ep(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ig(e,t,n){return hs&21?(_n(n,t)||(n=u1(),Ke.lanes|=n,ms|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,jt=!0),e.memoizedState=n)}function nv(e,t){var n=De;De=n!==0&&4>n?n:4,e(!0);var r=Eu.transition;Eu.transition={};try{e(!1),t()}finally{De=n,Eu.transition=r}}function ag(){return yn().memoizedState}function rv(e,t,n){var r=Rr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lg(e))ug(t,n);else if(n=z1(e,t,n,r),n!==null){var s=Ot();xn(n,e,r,s),cg(n,t,r)}}function sv(e,t,n){var r=Rr(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lg(e))ug(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(s.hasEagerState=!0,s.eagerState=a,_n(a,i)){var l=t.interleaved;l===null?(s.next=s,Xf(t)):(s.next=l.next,l.next=s),t.interleaved=s;return}}catch{}finally{}n=z1(e,t,s,r),n!==null&&(s=Ot(),xn(n,e,r,s),cg(n,t,r))}}function lg(e){var t=e.alternate;return e===Ke||t!==null&&t===Ke}function ug(e,t){Zo=Ja=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rf(e,n)}}var Za={readContext:gn,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},ov={readContext:gn,useCallback:function(e,t){return Cn().memoizedState=[e,t===void 0?null:t],e},useContext:gn,useEffect:hh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ta(4194308,4,ng.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var n=Cn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Cn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rv.bind(null,Ke,e),[r.memoizedState,e]},useRef:function(e){var t=Cn();return e={current:e},t.memoizedState=e},useState:dh,useDebugValue:sp,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=dh(!1),t=e[0];return e=nv.bind(null,e[1]),Cn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ke,s=Cn();if(Ve){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),dt===null)throw Error(H(349));hs&30||q1(r,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,hh(Y1.bind(null,r,o,e),[e]),r.flags|=2048,Si(9,X1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Cn(),t=dt.identifierPrefix;if(Ve){var n=er,r=Zn;n=(r&~(1<<32-kn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},iv={readContext:gn,useCallback:sg,useContext:gn,useEffect:rp,useImperativeHandle:rg,useInsertionEffect:eg,useLayoutEffect:tg,useMemo:og,useReducer:bu,useRef:Z1,useState:function(){return bu(wi)},useDebugValue:sp,useDeferredValue:function(e){var t=yn();return ig(t,it.memoizedState,e)},useTransition:function(){var e=bu(wi)[0],t=yn().memoizedState;return[e,t]},useMutableSource:K1,useSyncExternalStore:G1,useId:ag,unstable_isNewReconciler:!1},av={readContext:gn,useCallback:sg,useContext:gn,useEffect:rp,useImperativeHandle:rg,useInsertionEffect:eg,useLayoutEffect:tg,useMemo:og,useReducer:Tu,useRef:Z1,useState:function(){return Tu(wi)},useDebugValue:sp,useDeferredValue:function(e){var t=yn();return it===null?t.memoizedState=e:ig(t,it.memoizedState,e)},useTransition:function(){var e=Tu(wi)[0],t=yn().memoizedState;return[e,t]},useMutableSource:K1,useSyncExternalStore:G1,useId:ag,unstable_isNewReconciler:!1};function lo(e,t){try{var n="",r=t;do n+=R2(r),r=r.return;while(r);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function Nu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Nc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lv=typeof WeakMap=="function"?WeakMap:Map;function fg(e,t,n){n=tr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,Pc=r),Nc(e,t)},n}function pg(e,t,n){n=tr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Nc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Nc(e,t),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function mh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lv;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=bv.bind(null,e,t,n),t.then(e,e))}function gh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yh(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tr(-1,1),t.tag=2,Ar(n,t,1))),n.lanes|=1),e)}var uv=mr.ReactCurrentOwner,jt=!1;function It(e,t,n,r){t.child=e===null?H1(t,null,n,r):io(t,e.child,n,r)}function vh(e,t,n,r,s){n=n.render;var o=t.ref;return Qs(t,s),r=tp(e,t,n,r,o,s),n=np(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,ar(e,t,s)):(Ve&&n&&Vf(t),t.flags|=1,It(e,t,r,s),t.child)}function wh(e,t,n,r,s){if(e===null){var o=n.type;return typeof o=="function"&&!pp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,dg(e,t,o,r,s)):(e=_a(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(i,r)&&e.ref===t.ref)return ar(e,t,s)}return t.flags|=1,e=Fr(o,r),e.ref=t.ref,e.return=t,t.child=e}function dg(e,t,n,r,s){if(e!==null){var o=e.memoizedProps;if(pi(o,r)&&e.ref===t.ref)if(jt=!1,t.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(jt=!0);else return t.lanes=e.lanes,ar(e,t,s)}return kc(e,t,n,r,s)}function hg(e,t,n){var r=t.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(Hs,Jt),Jt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Le(Hs,Jt),Jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Le(Hs,Jt),Jt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Le(Hs,Jt),Jt|=r;return It(e,t,s,n),t.child}function mg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kc(e,t,n,r,s){var o=Vt(n)?ps:Dt.current;return o=so(t,o),Qs(t,s),n=tp(e,t,n,r,o,s),r=np(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,ar(e,t,s)):(Ve&&r&&Vf(t),t.flags|=1,It(e,t,n,s),t.child)}function Sh(e,t,n,r,s){if(Vt(n)){var o=!0;Wa(t)}else o=!1;if(Qs(t,s),t.stateNode===null)Na(e,t),U1(t,n,r),Tc(t,n,r,s),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Vt(n)?ps:Dt.current,u=so(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||l!==u)&&fh(t,i,r,u),br=!1;var d=t.memoizedState;i.state=d,Ya(t,r,i,s),l=t.memoizedState,a!==r||d!==l||Ut.current||br?(typeof f=="function"&&(bc(t,n,f,r),l=t.memoizedState),(a=br||ch(t,n,a,r,d,l,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,j1(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:En(t.type,a),i.props=u,p=t.pendingProps,d=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=gn(l):(l=Vt(n)?ps:Dt.current,l=so(t,l));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==p||d!==l)&&fh(t,i,r,l),br=!1,d=t.memoizedState,i.state=d,Ya(t,r,i,s);var v=t.memoizedState;a!==p||d!==v||Ut.current||br?(typeof h=="function"&&(bc(t,n,h,r),v=t.memoizedState),(u=br||ch(t,n,u,r,d,v,l)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return xc(e,t,n,r,o,s)}function xc(e,t,n,r,s,o){mg(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return s&&oh(t,n,!1),ar(e,t,o);r=t.stateNode,uv.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=io(t,e.child,null,o),t.child=io(t,null,a,o)):It(e,t,a,o),t.memoizedState=r.state,s&&oh(t,n,!0),t.child}function gg(e){var t=e.stateNode;t.pendingContext?sh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sh(e,t.context,!1),Qf(e,t.containerInfo)}function Eh(e,t,n,r,s){return oo(),Wf(s),t.flags|=256,It(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0};function $c(e){return{baseLanes:e,cachePool:null,transitions:null}}function yg(e,t,n){var r=t.pendingProps,s=He.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Le(He,s&1),e===null)return Sc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Il(i,r,0,null),e=us(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$c(n),t.memoizedState=_c,e):op(t,i));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return cv(e,t,i,r,a,s,n);if(o){o=r.fallback,i=t.mode,s=e.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(i&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Fr(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?o=Fr(a,o):(o=us(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?$c(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=_c,r}return o=e.child,e=o.sibling,r=Fr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function op(e,t){return t=Il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fa(e,t,n,r){return r!==null&&Wf(r),io(t,e.child,null,n),e=op(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cv(e,t,n,r,s,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Nu(Error(H(422))),fa(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,s=t.mode,r=Il({mode:"visible",children:r.children},s,0,null),o=us(o,s,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&io(t,e.child,null,i),t.child.memoizedState=$c(i),t.memoizedState=_c,o);if(!(t.mode&1))return fa(e,t,i,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(H(419)),r=Nu(o,r,void 0),fa(e,t,i,r)}if(a=(i&e.childLanes)!==0,jt||a){if(r=dt,r!==null){switch(i&-i){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|i)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,ir(e,s),xn(r,e,s,-1))}return fp(),r=Nu(Error(H(421))),fa(e,t,i,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Tv.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,Zt=Or(s.nextSibling),en=t,Ve=!0,Tn=null,e!==null&&(pn[dn++]=Zn,pn[dn++]=er,pn[dn++]=ds,Zn=e.id,er=e.overflow,ds=t),t=op(t,r.children),t.flags|=4096,t)}function bh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ec(e.return,t,n)}function ku(e,t,n,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=s)}function vg(e,t,n){var r=t.pendingProps,s=r.revealOrder,o=r.tail;if(It(e,t,r.children,n),r=He.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bh(e,n,t);else if(e.tag===19)bh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Le(He,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Qa(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ku(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Qa(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ku(t,!0,n,null,o);break;case"together":ku(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Na(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ar(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ms|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=Fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fv(e,t,n){switch(t.tag){case 3:gg(t),oo();break;case 5:W1(t);break;case 1:Vt(t.type)&&Wa(t);break;case 4:Qf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Le(qa,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Le(He,He.current&1),t.flags|=128,null):n&t.child.childLanes?yg(e,t,n):(Le(He,He.current&1),e=ar(e,t,n),e!==null?e.sibling:null);Le(He,He.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vg(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Le(He,He.current),r)break;return null;case 22:case 23:return t.lanes=0,hg(e,t,n)}return ar(e,t,n)}var wg,Dc,Sg,Eg;wg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dc=function(){};Sg=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,ss(Fn.current);var o=null;switch(n){case"input":s=Qu(e,s),r=Qu(e,r),o=[];break;case"select":s=Ge({},s,{value:void 0}),r=Ge({},r,{value:void 0}),o=[];break;case"textarea":s=ec(e,s),r=ec(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Va)}nc(n,r);var i;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&a[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ze("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Eg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ro(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pv(e,t,n){var r=t.pendingProps;switch(Hf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(t),null;case 1:return Vt(t.type)&&Ha(),Nt(t),null;case 3:return r=t.stateNode,ao(),je(Ut),je(Dt),Zf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ua(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tn!==null&&(Lc(Tn),Tn=null))),Dc(e,t),Nt(t),null;case 5:Jf(t);var s=ss(yi.current);if(n=t.type,e!==null&&t.stateNode!=null)Sg(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(H(166));return Nt(t),null}if(e=ss(Fn.current),ua(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[An]=t,r[mi]=o,e=(t.mode&1)!==0,n){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(s=0;s<Wo.length;s++)ze(Wo[s],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":Cd(r,o),ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ze("invalid",r);break;case"textarea":Ad(r,o),ze("invalid",r)}nc(n,o),s=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&la(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&la(r.textContent,a,e),s=["children",""+a]):oi.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&ze("scroll",r)}switch(n){case"input":ea(r),Od(r,o,!0);break;case"textarea":ea(r),Pd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Va)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[An]=t,e[mi]=r,wg(e,t,!1,!1),t.stateNode=e;e:{switch(i=rc(n,r),n){case"dialog":ze("cancel",e),ze("close",e),s=r;break;case"iframe":case"object":case"embed":ze("load",e),s=r;break;case"video":case"audio":for(s=0;s<Wo.length;s++)ze(Wo[s],e);s=r;break;case"source":ze("error",e),s=r;break;case"img":case"image":case"link":ze("error",e),ze("load",e),s=r;break;case"details":ze("toggle",e),s=r;break;case"input":Cd(e,r),s=Qu(e,r),ze("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Ge({},r,{value:void 0}),ze("invalid",e);break;case"textarea":Ad(e,r),s=ec(e,r),ze("invalid",e);break;default:s=r}nc(n,s),a=s;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Qm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ii(e,l):typeof l=="number"&&ii(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(oi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ze("scroll",e):l!=null&&Df(e,o,l,i))}switch(n){case"input":ea(e),Od(e,r,!1);break;case"textarea":ea(e),Pd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gs(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gs(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Va)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Nt(t),null;case 6:if(e&&t.stateNode!=null)Eg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(H(166));if(n=ss(yi.current),ss(Fn.current),ua(t)){if(r=t.stateNode,n=t.memoizedProps,r[An]=t,(o=r.nodeValue!==n)&&(e=en,e!==null))switch(e.tag){case 3:la(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&la(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=t,t.stateNode=r}return Nt(t),null;case 13:if(je(He),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ve&&Zt!==null&&t.mode&1&&!(t.flags&128))B1(),oo(),t.flags|=98560,o=!1;else if(o=ua(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(H(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[An]=t}else oo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nt(t),o=!1}else Tn!==null&&(Lc(Tn),Tn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||He.current&1?at===0&&(at=3):fp())),t.updateQueue!==null&&(t.flags|=4),Nt(t),null);case 4:return ao(),Dc(e,t),e===null&&di(t.stateNode.containerInfo),Nt(t),null;case 10:return qf(t.type._context),Nt(t),null;case 17:return Vt(t.type)&&Ha(),Nt(t),null;case 19:if(je(He),o=t.memoizedState,o===null)return Nt(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Ro(o,!1);else{if(at!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Qa(e),i!==null){for(t.flags|=128,Ro(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Le(He,He.current&1|2),t.child}e=e.sibling}o.tail!==null&&et()>uo&&(t.flags|=128,r=!0,Ro(o,!1),t.lanes=4194304)}else{if(!r)if(e=Qa(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Ve)return Nt(t),null}else 2*et()-o.renderingStartTime>uo&&n!==1073741824&&(t.flags|=128,r=!0,Ro(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=et(),t.sibling=null,n=He.current,Le(He,r?n&1|2:n&1),t):(Nt(t),null);case 22:case 23:return cp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Jt&1073741824&&(Nt(t),t.subtreeFlags&6&&(t.flags|=8192)):Nt(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function dv(e,t){switch(Hf(t),t.tag){case 1:return Vt(t.type)&&Ha(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ao(),je(Ut),je(Dt),Zf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Jf(t),null;case 13:if(je(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));oo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(He),null;case 4:return ao(),null;case 10:return qf(t.type._context),null;case 22:case 23:return cp(),null;case 24:return null;default:return null}}var pa=!1,xt=!1,hv=typeof WeakSet=="function"?WeakSet:Set,X=null;function Vs(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ye(e,t,r)}else n.current=null}function Ic(e,t,n){try{n()}catch(r){Ye(e,t,r)}}var Th=!1;function mv(e,t){if(dc=ja,e=k1(),Uf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,l=-1,u=0,f=0,p=e,d=null;t:for(;;){for(var h;p!==n||s!==0&&p.nodeType!==3||(a=i+s),p!==o||r!==0&&p.nodeType!==3||(l=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(h=p.firstChild)!==null;)d=p,p=h;for(;;){if(p===e)break t;if(d===n&&++u===s&&(a=i),d===o&&++f===r&&(l=i),(h=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:e,selectionRange:n},ja=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,S=t.stateNode,T=S.getSnapshotBeforeUpdate(t.elementType===t.type?w:En(t.type,w),k);S.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(D){Ye(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return v=Th,Th=!1,v}function ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Ic(t,n,o)}s=s.next}while(s!==r)}}function $l(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bg(e){var t=e.alternate;t!==null&&(e.alternate=null,bg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[An],delete t[mi],delete t[yc],delete t[Q3],delete t[J3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tg(e){return e.tag===5||e.tag===3||e.tag===4}function Nh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Va));else if(r!==4&&(e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}function Ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}var vt=null,bn=!1;function Sr(e,t,n){for(n=n.child;n!==null;)Ng(e,t,n),n=n.sibling}function Ng(e,t,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:xt||Vs(n,t);case 6:var r=vt,s=bn;vt=null,Sr(e,t,n),vt=r,bn=s,vt!==null&&(bn?(e=vt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(bn?(e=vt,n=n.stateNode,e.nodeType===8?vu(e.parentNode,n):e.nodeType===1&&vu(e,n),ci(e)):vu(vt,n.stateNode));break;case 4:r=vt,s=bn,vt=n.stateNode.containerInfo,bn=!0,Sr(e,t,n),vt=r,bn=s;break;case 0:case 11:case 14:case 15:if(!xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Ic(n,t,i),s=s.next}while(s!==r)}Sr(e,t,n);break;case 1:if(!xt&&(Vs(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ye(n,t,a)}Sr(e,t,n);break;case 21:Sr(e,t,n);break;case 22:n.mode&1?(xt=(r=xt)||n.memoizedState!==null,Sr(e,t,n),xt=r):Sr(e,t,n);break;default:Sr(e,t,n)}}function kh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hv),t.forEach(function(r){var s=Nv.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Sn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,bn=!1;break e;case 3:vt=a.stateNode.containerInfo,bn=!0;break e;case 4:vt=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(vt===null)throw Error(H(160));Ng(o,i,s),vt=null,bn=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){Ye(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kg(t,e),t=t.sibling}function kg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(t,e),In(e),r&4){try{ei(3,e,e.return),$l(3,e)}catch(w){Ye(e,e.return,w)}try{ei(5,e,e.return)}catch(w){Ye(e,e.return,w)}}break;case 1:Sn(t,e),In(e),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(Sn(t,e),In(e),r&512&&n!==null&&Vs(n,n.return),e.flags&32){var s=e.stateNode;try{ii(s,"")}catch(w){Ye(e,e.return,w)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Km(s,o),rc(a,i);var u=rc(a,o);for(i=0;i<l.length;i+=2){var f=l[i],p=l[i+1];f==="style"?Qm(s,p):f==="dangerouslySetInnerHTML"?Xm(s,p):f==="children"?ii(s,p):Df(s,f,p,u)}switch(a){case"input":Ju(s,o);break;case"textarea":Gm(s,o);break;case"select":var d=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Gs(s,!!o.multiple,h,!1):d!==!!o.multiple&&(o.defaultValue!=null?Gs(s,!!o.multiple,o.defaultValue,!0):Gs(s,!!o.multiple,o.multiple?[]:"",!1))}s[mi]=o}catch(w){Ye(e,e.return,w)}}break;case 6:if(Sn(t,e),In(e),r&4){if(e.stateNode===null)throw Error(H(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(w){Ye(e,e.return,w)}}break;case 3:if(Sn(t,e),In(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ci(t.containerInfo)}catch(w){Ye(e,e.return,w)}break;case 4:Sn(t,e),In(e);break;case 13:Sn(t,e),In(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(lp=et())),r&4&&kh(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(xt=(u=xt)||f,Sn(t,e),xt=u):Sn(t,e),In(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(X=e,f=e.child;f!==null;){for(p=X=f;X!==null;){switch(d=X,h=d.child,d.tag){case 0:case 11:case 14:case 15:ei(4,d,d.return);break;case 1:Vs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Ye(r,n,w)}}break;case 5:Vs(d,d.return);break;case 22:if(d.memoizedState!==null){_h(p);continue}}h!==null?(h.return=d,X=h):_h(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,u?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ym("display",i))}catch(w){Ye(e,e.return,w)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){Ye(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Sn(t,e),In(e),r&4&&kh(e);break;case 21:break;default:Sn(t,e),In(e)}}function In(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tg(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ii(s,""),r.flags&=-33);var o=Nh(e);Ac(e,o,s);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Nh(e);Oc(e,a,i);break;default:throw Error(H(161))}}catch(l){Ye(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gv(e,t,n){X=e,xg(e)}function xg(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var s=X,o=s.child;if(s.tag===22&&r){var i=s.memoizedState!==null||pa;if(!i){var a=s.alternate,l=a!==null&&a.memoizedState!==null||xt;a=pa;var u=xt;if(pa=i,(xt=l)&&!u)for(X=s;X!==null;)i=X,l=i.child,i.tag===22&&i.memoizedState!==null?$h(s):l!==null?(l.return=i,X=l):$h(s);for(;o!==null;)X=o,xg(o),o=o.sibling;X=s,pa=a,xt=u}xh(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,X=o):xh(e)}}function xh(e){for(;X!==null;){var t=X;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xt||$l(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xt)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:En(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&uh(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uh(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ci(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}xt||t.flags&512&&Cc(t)}catch(d){Ye(t,t.return,d)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function _h(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function $h(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$l(4,t)}catch(l){Ye(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(l){Ye(t,s,l)}}var o=t.return;try{Cc(t)}catch(l){Ye(t,o,l)}break;case 5:var i=t.return;try{Cc(t)}catch(l){Ye(t,i,l)}}}catch(l){Ye(t,t.return,l)}if(t===e){X=null;break}var a=t.sibling;if(a!==null){a.return=t.return,X=a;break}X=t.return}}var yv=Math.ceil,el=mr.ReactCurrentDispatcher,ip=mr.ReactCurrentOwner,mn=mr.ReactCurrentBatchConfig,be=0,dt=null,st=null,wt=0,Jt=0,Hs=Wr(0),at=0,Ei=null,ms=0,Dl=0,ap=0,ti=null,zt=null,lp=0,uo=1/0,Gn=null,tl=!1,Pc=null,Pr=null,da=!1,xr=null,nl=0,ni=0,Rc=null,ka=-1,xa=0;function Ot(){return be&6?et():ka!==-1?ka:ka=et()}function Rr(e){return e.mode&1?be&2&&wt!==0?wt&-wt:ev.transition!==null?(xa===0&&(xa=u1()),xa):(e=De,e!==0||(e=window.event,e=e===void 0?16:g1(e.type)),e):1}function xn(e,t,n,r){if(50<ni)throw ni=0,Rc=null,Error(H(185));Ci(e,n,r),(!(be&2)||e!==dt)&&(e===dt&&(!(be&2)&&(Dl|=n),at===4&&Nr(e,wt)),Ht(e,r),n===1&&be===0&&!(t.mode&1)&&(uo=et()+500,kl&&Kr()))}function Ht(e,t){var n=e.callbackNode;e3(e,t);var r=za(e,e===dt?wt:0);if(r===0)n!==null&&Ld(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ld(n),t===1)e.tag===0?Z3(Dh.bind(null,e)):R1(Dh.bind(null,e)),X3(function(){!(be&6)&&Kr()}),n=null;else{switch(c1(r)){case 1:n=Pf;break;case 4:n=a1;break;case 16:n=Ba;break;case 536870912:n=l1;break;default:n=Ba}n=Pg(n,_g.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _g(e,t){if(ka=-1,xa=0,be&6)throw Error(H(327));var n=e.callbackNode;if(Js()&&e.callbackNode!==n)return null;var r=za(e,e===dt?wt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var s=be;be|=2;var o=Dg();(dt!==e||wt!==t)&&(Gn=null,uo=et()+500,ls(e,t));do try{Sv();break}catch(a){$g(e,a)}while(1);Gf(),el.current=o,be=s,st!==null?t=0:(dt=null,wt=0,t=at)}if(t!==0){if(t===2&&(s=lc(e),s!==0&&(r=s,t=Fc(e,s))),t===1)throw n=Ei,ls(e,0),Nr(e,r),Ht(e,et()),n;if(t===6)Nr(e,r);else{if(s=e.current.alternate,!(r&30)&&!vv(s)&&(t=rl(e,r),t===2&&(o=lc(e),o!==0&&(r=o,t=Fc(e,o))),t===1))throw n=Ei,ls(e,0),Nr(e,r),Ht(e,et()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(H(345));case 2:ts(e,zt,Gn);break;case 3:if(Nr(e,r),(r&130023424)===r&&(t=lp+500-et(),10<t)){if(za(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Ot(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=gc(ts.bind(null,e,zt,Gn),t);break}ts(e,zt,Gn);break;case 4:if(Nr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var i=31-kn(r);o=1<<i,i=t[i],i>s&&(s=i),r&=~o}if(r=s,r=et()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yv(r/1960))-r,10<r){e.timeoutHandle=gc(ts.bind(null,e,zt,Gn),r);break}ts(e,zt,Gn);break;case 5:ts(e,zt,Gn);break;default:throw Error(H(329))}}}return Ht(e,et()),e.callbackNode===n?_g.bind(null,e):null}function Fc(e,t){var n=ti;return e.current.memoizedState.isDehydrated&&(ls(e,t).flags|=256),e=rl(e,t),e!==2&&(t=zt,zt=n,t!==null&&Lc(t)),e}function Lc(e){zt===null?zt=e:zt.push.apply(zt,e)}function vv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],o=s.getSnapshot;s=s.value;try{if(!_n(o(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nr(e,t){for(t&=~ap,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kn(t),r=1<<n;e[n]=-1,t&=~r}}function Dh(e){if(be&6)throw Error(H(327));Js();var t=za(e,0);if(!(t&1))return Ht(e,et()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=lc(e);r!==0&&(t=r,n=Fc(e,r))}if(n===1)throw n=Ei,ls(e,0),Nr(e,t),Ht(e,et()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ts(e,zt,Gn),Ht(e,et()),null}function up(e,t){var n=be;be|=1;try{return e(t)}finally{be=n,be===0&&(uo=et()+500,kl&&Kr())}}function gs(e){xr!==null&&xr.tag===0&&!(be&6)&&Js();var t=be;be|=1;var n=mn.transition,r=De;try{if(mn.transition=null,De=1,e)return e()}finally{De=r,mn.transition=n,be=t,!(be&6)&&Kr()}}function cp(){Jt=Hs.current,je(Hs)}function ls(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,q3(n)),st!==null)for(n=st.return;n!==null;){var r=n;switch(Hf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ha();break;case 3:ao(),je(Ut),je(Dt),Zf();break;case 5:Jf(r);break;case 4:ao();break;case 13:je(He);break;case 19:je(He);break;case 10:qf(r.type._context);break;case 22:case 23:cp()}n=n.return}if(dt=e,st=e=Fr(e.current,null),wt=Jt=t,at=0,Ei=null,ap=Dl=ms=0,zt=ti=null,rs!==null){for(t=0;t<rs.length;t++)if(n=rs[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=s,r.next=i}n.pending=r}rs=null}return e}function $g(e,t){do{var n=st;try{if(Gf(),ba.current=Za,Ja){for(var r=Ke.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ja=!1}if(hs=0,ft=it=Ke=null,Zo=!1,vi=0,ip.current=null,n===null||n.return===null){at=1,Ei=t,st=null;break}e:{var o=e,i=n.return,a=n,l=t;if(t=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=gh(i);if(h!==null){h.flags&=-257,yh(h,i,a,o,t),h.mode&1&&mh(o,u,t),t=h,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){mh(o,u,t),fp();break e}l=Error(H(426))}}else if(Ve&&a.mode&1){var k=gh(i);if(k!==null){!(k.flags&65536)&&(k.flags|=256),yh(k,i,a,o,t),Wf(lo(l,a));break e}}o=l=lo(l,a),at!==4&&(at=2),ti===null?ti=[o]:ti.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var S=fg(o,l,t);lh(o,S);break e;case 1:a=l;var T=o.type,N=o.stateNode;if(!(o.flags&128)&&(typeof T.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Pr===null||!Pr.has(N)))){o.flags|=65536,t&=-t,o.lanes|=t;var D=pg(o,a,t);lh(o,D);break e}}o=o.return}while(o!==null)}Cg(n)}catch(C){t=C,st===n&&n!==null&&(st=n=n.return);continue}break}while(1)}function Dg(){var e=el.current;return el.current=Za,e===null?Za:e}function fp(){(at===0||at===3||at===2)&&(at=4),dt===null||!(ms&268435455)&&!(Dl&268435455)||Nr(dt,wt)}function rl(e,t){var n=be;be|=2;var r=Dg();(dt!==e||wt!==t)&&(Gn=null,ls(e,t));do try{wv();break}catch(s){$g(e,s)}while(1);if(Gf(),be=n,el.current=r,st!==null)throw Error(H(261));return dt=null,wt=0,at}function wv(){for(;st!==null;)Ig(st)}function Sv(){for(;st!==null&&!W2();)Ig(st)}function Ig(e){var t=Ag(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?Cg(e):st=t,ip.current=null}function Cg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dv(n,t),n!==null){n.flags&=32767,st=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,st=null;return}}else if(n=pv(n,t,Jt),n!==null){st=n;return}if(t=t.sibling,t!==null){st=t;return}st=t=e}while(t!==null);at===0&&(at=5)}function ts(e,t,n){var r=De,s=mn.transition;try{mn.transition=null,De=1,Ev(e,t,n,r)}finally{mn.transition=s,De=r}return null}function Ev(e,t,n,r){do Js();while(xr!==null);if(be&6)throw Error(H(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(t3(e,o),e===dt&&(st=dt=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||da||(da=!0,Pg(Ba,function(){return Js(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=mn.transition,mn.transition=null;var i=De;De=1;var a=be;be|=4,ip.current=null,mv(e,n),kg(n,e),M3(hc),ja=!!dc,hc=dc=null,e.current=n,gv(n),K2(),be=a,De=i,mn.transition=o}else e.current=n;if(da&&(da=!1,xr=e,nl=s),o=e.pendingLanes,o===0&&(Pr=null),X2(n.stateNode),Ht(e,et()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(tl)throw tl=!1,e=Pc,Pc=null,e;return nl&1&&e.tag!==0&&Js(),o=e.pendingLanes,o&1?e===Rc?ni++:(ni=0,Rc=e):ni=0,Kr(),null}function Js(){if(xr!==null){var e=c1(nl),t=mn.transition,n=De;try{if(mn.transition=null,De=16>e?16:e,xr===null)var r=!1;else{if(e=xr,xr=null,nl=0,be&6)throw Error(H(331));var s=be;for(be|=4,X=e.current;X!==null;){var o=X,i=o.child;if(X.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(X=u;X!==null;){var f=X;switch(f.tag){case 0:case 11:case 15:ei(8,f,o)}var p=f.child;if(p!==null)p.return=f,X=p;else for(;X!==null;){f=X;var d=f.sibling,h=f.return;if(bg(f),f===u){X=null;break}if(d!==null){d.return=h,X=d;break}X=h}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}X=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,X=i;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ei(9,o,o.return)}var S=o.sibling;if(S!==null){S.return=o.return,X=S;break e}X=o.return}}var T=e.current;for(X=T;X!==null;){i=X;var N=i.child;if(i.subtreeFlags&2064&&N!==null)N.return=i,X=N;else e:for(i=T;X!==null;){if(a=X,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$l(9,a)}}catch(C){Ye(a,a.return,C)}if(a===i){X=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,X=D;break e}X=a.return}}if(be=s,Kr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Sl,e)}catch{}r=!0}return r}finally{De=n,mn.transition=t}}return!1}function Ih(e,t,n){t=lo(n,t),t=fg(e,t,1),e=Ar(e,t,1),t=Ot(),e!==null&&(Ci(e,1,t),Ht(e,t))}function Ye(e,t,n){if(e.tag===3)Ih(e,e,n);else for(;t!==null;){if(t.tag===3){Ih(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){e=lo(n,e),e=pg(t,e,1),t=Ar(t,e,1),e=Ot(),t!==null&&(Ci(t,1,e),Ht(t,e));break}}t=t.return}}function bv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ot(),e.pingedLanes|=e.suspendedLanes&n,dt===e&&(wt&n)===n&&(at===4||at===3&&(wt&130023424)===wt&&500>et()-lp?ls(e,0):ap|=n),Ht(e,t)}function Og(e,t){t===0&&(e.mode&1?(t=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):t=1);var n=Ot();e=ir(e,t),e!==null&&(Ci(e,t,n),Ht(e,n))}function Tv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Og(e,n)}function Nv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(t),Og(e,n)}var Ag;Ag=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ut.current)jt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return jt=!1,fv(e,t,n);jt=!!(e.flags&131072)}else jt=!1,Ve&&t.flags&1048576&&F1(t,Ga,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Na(e,t),e=t.pendingProps;var s=so(t,Dt.current);Qs(t,n),s=tp(null,t,r,e,s,n);var o=np();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Vt(r)?(o=!0,Wa(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Yf(t),s.updater=xl,t.stateNode=s,s._reactInternals=t,Tc(t,r,e,n),t=xc(null,t,r,!0,o,n)):(t.tag=0,Ve&&o&&Vf(t),It(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Na(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=xv(r),e=En(r,e),s){case 0:t=kc(null,t,r,e,n);break e;case 1:t=Sh(null,t,r,e,n);break e;case 11:t=vh(null,t,r,e,n);break e;case 14:t=wh(null,t,r,En(r.type,e),n);break e}throw Error(H(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:En(r,s),kc(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:En(r,s),Sh(e,t,r,s,n);case 3:e:{if(gg(t),e===null)throw Error(H(387));r=t.pendingProps,o=t.memoizedState,s=o.element,j1(e,t),Ya(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=lo(Error(H(423)),t),t=Eh(e,t,r,n,s);break e}else if(r!==s){s=lo(Error(H(424)),t),t=Eh(e,t,r,n,s);break e}else for(Zt=Or(t.stateNode.containerInfo.firstChild),en=t,Ve=!0,Tn=null,n=H1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),r===s){t=ar(e,t,n);break e}It(e,t,r,n)}t=t.child}return t;case 5:return W1(t),e===null&&Sc(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,i=s.children,mc(r,s)?i=null:o!==null&&mc(r,o)&&(t.flags|=32),mg(e,t),It(e,t,i,n),t.child;case 6:return e===null&&Sc(t),null;case 13:return yg(e,t,n);case 4:return Qf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=io(t,null,r,n):It(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:En(r,s),vh(e,t,r,s,n);case 7:return It(e,t,t.pendingProps,n),t.child;case 8:return It(e,t,t.pendingProps.children,n),t.child;case 12:return It(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,o=t.memoizedProps,i=s.value,Le(qa,r._currentValue),r._currentValue=i,o!==null)if(_n(o.value,i)){if(o.children===s.children&&!Ut.current){t=ar(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=tr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ec(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(H(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ec(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}It(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Qs(t,n),s=gn(s),r=r(s),t.flags|=1,It(e,t,r,n),t.child;case 14:return r=t.type,s=En(r,t.pendingProps),s=En(r.type,s),wh(e,t,r,s,n);case 15:return dg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:En(r,s),Na(e,t),t.tag=1,Vt(r)?(e=!0,Wa(t)):e=!1,Qs(t,n),U1(t,r,s),Tc(t,r,s,n),xc(null,t,r,!0,e,n);case 19:return vg(e,t,n);case 22:return hg(e,t,n)}throw Error(H(156,t.tag))};function Pg(e,t){return i1(e,t)}function kv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,t,n,r){return new kv(e,t,n,r)}function pp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xv(e){if(typeof e=="function")return pp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cf)return 11;if(e===Of)return 14}return 2}function Fr(e,t){var n=e.alternate;return n===null?(n=hn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _a(e,t,n,r,s,o){var i=2;if(r=e,typeof e=="function")pp(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ps:return us(n.children,s,o,t);case If:i=8,s|=8;break;case Gu:return e=hn(12,n,t,s|2),e.elementType=Gu,e.lanes=o,e;case qu:return e=hn(13,n,t,s),e.elementType=qu,e.lanes=o,e;case Xu:return e=hn(19,n,t,s),e.elementType=Xu,e.lanes=o,e;case Vm:return Il(n,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mm:i=10;break e;case Um:i=9;break e;case Cf:i=11;break e;case Of:i=14;break e;case Er:i=16,r=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=hn(i,n,t,s),t.elementType=e,t.type=r,t.lanes=o,t}function us(e,t,n,r){return e=hn(7,e,r,t),e.lanes=n,e}function Il(e,t,n,r){return e=hn(22,e,r,t),e.elementType=Vm,e.lanes=n,e.stateNode={isHidden:!1},e}function xu(e,t,n){return e=hn(6,e,null,t),e.lanes=n,e}function _u(e,t,n){return t=hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _v(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=au(0),this.expirationTimes=au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function dp(e,t,n,r,s,o,i,a,l){return e=new _v(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=hn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yf(o),e}function $v(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rg(e){if(!e)return jr;e=e._reactInternals;e:{if(Ts(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(Vt(n))return P1(e,n,t)}return t}function Fg(e,t,n,r,s,o,i,a,l){return e=dp(n,r,!0,e,s,o,i,a,l),e.context=Rg(null),n=e.current,r=Ot(),s=Rr(n),o=tr(r,s),o.callback=t??null,Ar(n,o,s),e.current.lanes=s,Ci(e,s,r),Ht(e,r),e}function Cl(e,t,n,r){var s=t.current,o=Ot(),i=Rr(s);return n=Rg(n),t.context===null?t.context=n:t.pendingContext=n,t=tr(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ar(s,t,i),e!==null&&(xn(e,s,i,o),Ea(e,s,i)),i}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ch(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hp(e,t){Ch(e,t),(e=e.alternate)&&Ch(e,t)}function Dv(){return null}var Lg=typeof reportError=="function"?reportError:function(e){console.error(e)};function mp(e){this._internalRoot=e}Ol.prototype.render=mp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));Cl(e,t,null,null)};Ol.prototype.unmount=mp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gs(function(){Cl(null,e,null,null)}),t[or]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=d1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tr.length&&t!==0&&t<Tr[n].priority;n++);Tr.splice(n,0,e),n===0&&m1(e)}};function gp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oh(){}function Iv(e,t,n,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var u=sl(i);o.call(u)}}var i=Fg(t,r,e,0,null,!1,!1,"",Oh);return e._reactRootContainer=i,e[or]=i.current,di(e.nodeType===8?e.parentNode:e),gs(),i}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=sl(l);a.call(u)}}var l=dp(e,0,!1,null,null,!1,!1,"",Oh);return e._reactRootContainer=l,e[or]=l.current,di(e.nodeType===8?e.parentNode:e),gs(function(){Cl(t,l,n,r)}),l}function Pl(e,t,n,r,s){var o=n._reactRootContainer;if(o){var i=o;if(typeof s=="function"){var a=s;s=function(){var l=sl(i);a.call(l)}}Cl(t,i,e,s)}else i=Iv(n,t,e,s,r);return sl(i)}f1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ho(t.pendingLanes);n!==0&&(Rf(t,n|1),Ht(t,et()),!(be&6)&&(uo=et()+500,Kr()))}break;case 13:gs(function(){var r=ir(e,1);if(r!==null){var s=Ot();xn(r,e,1,s)}}),hp(e,1)}};Ff=function(e){if(e.tag===13){var t=ir(e,134217728);if(t!==null){var n=Ot();xn(t,e,134217728,n)}hp(e,134217728)}};p1=function(e){if(e.tag===13){var t=Rr(e),n=ir(e,t);if(n!==null){var r=Ot();xn(n,e,t,r)}hp(e,t)}};d1=function(){return De};h1=function(e,t){var n=De;try{return De=e,t()}finally{De=n}};oc=function(e,t,n){switch(t){case"input":if(Ju(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Nl(r);if(!s)throw Error(H(90));Wm(r),Ju(r,s)}}}break;case"textarea":Gm(e,n);break;case"select":t=n.value,t!=null&&Gs(e,!!n.multiple,t,!1)}};e1=up;t1=gs;var Cv={usingClientEntryPoint:!1,Events:[Ai,Bs,Nl,Jm,Zm,up]},Fo={findFiberByHostInstance:ns,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ov={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=s1(e),e===null?null:e.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||Dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{Sl=ha.inject(Ov),Rn=ha}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv;nn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(t))throw Error(H(200));return $v(e,t,null,n)};nn.createRoot=function(e,t){if(!gp(e))throw Error(H(299));var n=!1,r="",s=Lg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=dp(e,1,!1,null,null,n,!1,r,s),e[or]=t.current,di(e.nodeType===8?e.parentNode:e),new mp(t)};nn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=s1(t),e=e===null?null:e.stateNode,e};nn.flushSync=function(e){return gs(e)};nn.hydrate=function(e,t,n){if(!Al(t))throw Error(H(200));return Pl(null,e,t,!0,n)};nn.hydrateRoot=function(e,t,n){if(!gp(e))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,s=!1,o="",i=Lg;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Fg(t,null,e,1,n??null,s,!1,o,i),e[or]=t.current,di(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Ol(t)};nn.render=function(e,t,n){if(!Al(t))throw Error(H(200));return Pl(null,e,t,!1,n)};nn.unmountComponentAtNode=function(e){if(!Al(e))throw Error(H(40));return e._reactRootContainer?(gs(function(){Pl(null,null,e,!1,function(){e._reactRootContainer=null,e[or]=null})}),!0):!1};nn.unstable_batchedUpdates=up;nn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Al(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return Pl(e,t,n,!1,r)};nn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=nn})(D2);var Ah=Hu;Vu.createRoot=Ah.createRoot,Vu.hydrateRoot=Ah.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ke.apply(this,arguments)}var rt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rt||(rt={}));const Ph="popstate";function Av(e){e===void 0&&(e={});function t(s,o){let{pathname:i="/",search:a="",hash:l=""}=zn(s.location.hash.substr(1));return bi("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){let i=s.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let l=s.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:lr(o))}function r(s,o){Pv(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Fv(t,n,r,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Rv(){return Math.random().toString(36).substr(2,8)}function Rh(e,t){return{usr:e.state,key:e.key,idx:t}}function bi(e,t,n,r){return n===void 0&&(n=null),ke({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zn(t):t,{state:n,key:t&&t.key||r||Rv()})}function lr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fv(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:o=!1}=r,i=s.history,a=rt.Pop,l=null,u=f();u==null&&(u=0,i.replaceState(ke({},i.state,{idx:u}),""));function f(){return(i.state||{idx:null}).idx}function p(){a=rt.Pop;let k=f(),S=k==null?null:k-u;u=k,l&&l({action:a,location:w.location,delta:S})}function d(k,S){a=rt.Push;let T=bi(w.location,k,S);n&&n(T,k),u=f()+1;let N=Rh(T,u),D=w.createHref(T);try{i.pushState(N,"",D)}catch{s.location.assign(D)}o&&l&&l({action:a,location:w.location,delta:1})}function h(k,S){a=rt.Replace;let T=bi(w.location,k,S);n&&n(T,k),u=f();let N=Rh(T,u),D=w.createHref(T);i.replaceState(N,"",D),o&&l&&l({action:a,location:w.location,delta:0})}function v(k){let S=s.location.origin!=="null"?s.location.origin:s.location.href,T=typeof k=="string"?k:lr(k);return he(S,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,S)}let w={get action(){return a},get location(){return e(s,i)},listen(k){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Ph,p),l=k,()=>{s.removeEventListener(Ph,p),l=null}},createHref(k){return t(s,k)},createURL:v,encodeLocation(k){let S=v(k);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:d,replace:h,go(k){return i.go(k)}};return w}var pt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pt||(pt={}));function Lv(e){return e.index===!0}function Bg(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,s)=>{let o=[...t,s],i=typeof r.id=="string"?r.id:o.join("-");return he(r.index!==!0||!r.children,"Cannot specify children on an index route"),he(!n.has(i),'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),n.add(i),Lv(r)?ke({},r,{id:i}):ke({},r,{id:i,children:r.children?Bg(r.children,o,n):void 0})})}function Ws(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?zn(t):t,s=Ri(r.pathname||"/",n);if(s==null)return null;let o=zg(e);Bv(o);let i=null;for(let a=0;i==null&&a<o.length;++a)i=Gv(o[a],Yv(s));return i}function zg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(o,i,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=nr([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zg(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Wv(u,o.index),routesMeta:f})};return e.forEach((o,i)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))s(o,i);else for(let l of jg(o.path))s(o,i,l)}),t}function jg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return s?[o,""]:[o];let i=jg(r.join("/")),a=[];return a.push(...i.map(l=>l===""?o:[o,l].join("/"))),s&&a.push(...i),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Bv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Kv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zv=/^:\w+$/,jv=3,Mv=2,Uv=1,Vv=10,Hv=-2,Fh=e=>e==="*";function Wv(e,t){let n=e.split("/"),r=n.length;return n.some(Fh)&&(r+=Hv),t&&(r+=Mv),n.filter(s=>!Fh(s)).reduce((s,o)=>s+(zv.test(o)?jv:o===""?Uv:Vv),r)}function Kv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function Gv(e,t){let{routesMeta:n}=e,r={},s="/",o=[];for(let i=0;i<n.length;++i){let a=n[i],l=i===n.length-1,u=s==="/"?t:t.slice(s.length)||"/",f=qv({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let p=a.route;o.push({params:r,pathname:nr([s,f.pathname]),pathnameBase:e4(nr([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=nr([s,f.pathnameBase]))}return o}function qv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Xv(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let o=s[0],i=o.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((u,f,p)=>{if(f==="*"){let d=a[p]||"";i=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return u[f]=Qv(a[p]||"",f),u},{}),pathname:o,pathnameBase:i,pattern:e}}function Xv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ti(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function Yv(e){try{return decodeURI(e)}catch(t){return Ti(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qv(e,t){try{return decodeURIComponent(e)}catch(n){return Ti(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ri(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ti(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?zn(e):e;return{pathname:n?n.startsWith("/")?n:Zv(n,t):t,search:t4(r),hash:n4(s)}}function Zv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function $u(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rl(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function yp(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=zn(e):(s=ke({},e),he(!s.pathname||!s.pathname.includes("?"),$u("?","pathname","search",s)),he(!s.pathname||!s.pathname.includes("#"),$u("#","pathname","hash",s)),he(!s.search||!s.search.includes("#"),$u("#","search","hash",s)));let o=e===""||s.pathname==="",i=o?"/":s.pathname,a;if(r||i==null)a=n;else{let p=t.length-1;if(i.startsWith("..")){let d=i.split("/");for(;d[0]==="..";)d.shift(),p-=1;s.pathname=d.join("/")}a=p>=0?t[p]:"/"}let l=Jv(s,a),u=i&&i!=="/"&&i.endsWith("/"),f=(o||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const nr=e=>e.join("/").replace(/\/\/+/g,"/"),e4=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),t4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,n4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Lh extends Error{}class r4{constructor(t,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],he(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((o,i)=>r=i),this.controller=new AbortController;let s=()=>r(new Lh("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",s),this.controller.signal.addEventListener("abort",s),this.data=Object.entries(t).reduce((o,i)=>{let[a,l]=i;return Object.assign(o,{[a]:this.trackPromise(a,l)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(t,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let r=Promise.race([n,this.abortPromise]).then(s=>this.onSettle(r,t,null,s),s=>this.onSettle(r,t,s));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,s){return this.controller.signal.aborted&&r instanceof Lh?(this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(t,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>s}),this.emit(!1,n),s))}emit(t,n){this.subscribers.forEach(r=>r(t,n))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(s=>{this.subscribe(o=>{t.removeEventListener("abort",r),(o||this.done)&&s(o)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return he(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,s]=n;return Object.assign(t,{[r]:o4(s)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function s4(e){return e instanceof Promise&&e._tracked===!0}function o4(e){if(!s4(e))return e;if(e._error)throw e._error;return e._data}class vp{constructor(t,n,r,s){s===void 0&&(s=!1),this.status=t,this.statusText=n||"",this.internal=s,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Mg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ug=["post","put","patch","delete"],i4=new Set(Ug),a4=["get",...Ug],l4=new Set(a4),u4=new Set([301,302,303,307,308]),c4=new Set([307,308]),Du={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},f4={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Bh={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Vg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p4=!Hg;function d4(e){he(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=Bg(e.routes),n,r=null,s=new Set,o=null,i=null,a=null,l=e.hydrationData!=null,u=Ws(t,e.history.location,e.basename),f=null;if(u==null){let L=Kn(404,{pathname:e.history.location.pathname}),{matches:j,route:V}=Hh(t);u=j,f={[V.id]:L}}let p=!u.some(L=>L.route.loader)||e.hydrationData!=null,d,h={historyAction:e.history.action,location:e.history.location,matches:u,initialized:p,navigation:Du,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||f,fetchers:new Map,blockers:new Map},v=rt.Pop,w=!1,k,S=!1,T=!1,N=[],D=[],C=new Map,P=0,F=-1,z=new Map,K=new Set,U=new Map,Q=new Map,le=new Map,fe=!1;function me(){return r=e.history.listen(L=>{let{action:j,location:V,delta:Y}=L;if(fe){fe=!1;return}Ti(le.size===0||Y!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let te=yr({currentLocation:h.location,nextLocation:V,historyAction:j});if(te&&Y!=null){fe=!0,e.history.go(Y*-1),nt(te,{state:"blocked",location:V,proceed(){nt(te,{state:"proceeding",proceed:void 0,reset:void 0,location:V}),e.history.go(Y)},reset(){Vn(te),Se({blockers:new Map(d.state.blockers)})}});return}return Te(j,V)}),h.initialized||Te(rt.Pop,h.location),d}function Ce(){r&&r(),s.clear(),k&&k.abort(),h.fetchers.forEach((L,j)=>Gt(j)),h.blockers.forEach((L,j)=>Vn(j))}function Je(L){return s.add(L),()=>s.delete(L)}function Se(L){h=ke({},h,L),s.forEach(j=>j(h))}function G(L,j){var V,Y;let te=h.actionData!=null&&h.navigation.formMethod!=null&&qn(h.navigation.formMethod)&&h.navigation.state==="loading"&&((V=L.state)==null?void 0:V._isRedirect)!==!0,oe;j.actionData?Object.keys(j.actionData).length>0?oe=j.actionData:oe=null:te?oe=h.actionData:oe=null;let re=j.loaderData?Vh(h.loaderData,j.loaderData,j.matches||[],j.errors):h.loaderData;for(let[J]of le)Vn(J);let ce=w===!0||h.navigation.formMethod!=null&&qn(h.navigation.formMethod)&&((Y=L.state)==null?void 0:Y._isRedirect)!==!0;n&&(t=n,n=void 0),Se(ke({},j,{actionData:oe,loaderData:re,historyAction:v,location:L,initialized:!0,navigation:Du,revalidation:"idle",restoreScrollPosition:No(L,j.matches||h.matches),preventScrollReset:ce,blockers:new Map(h.blockers)})),S||v===rt.Pop||(v===rt.Push?e.history.push(L,L.state):v===rt.Replace&&e.history.replace(L,L.state)),v=rt.Pop,w=!1,S=!1,T=!1,N=[],D=[]}async function ne(L,j){if(typeof L=="number"){e.history.go(L);return}let{path:V,submission:Y,error:te}=zh(L,j),oe=h.location,re=bi(h.location,V,j&&j.state);re=ke({},re,e.history.encodeLocation(re));let ce=j&&j.replace!=null?j.replace:void 0,J=rt.Push;ce===!0?J=rt.Replace:ce===!1||Y!=null&&qn(Y.formMethod)&&Y.formAction===h.location.pathname+h.location.search&&(J=rt.Replace);let Xe=j&&"preventScrollReset"in j?j.preventScrollReset===!0:void 0,ye=yr({currentLocation:oe,nextLocation:re,historyAction:J});if(ye){nt(ye,{state:"blocked",location:re,proceed(){nt(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:re}),ne(L,j)},reset(){Vn(ye),Se({blockers:new Map(h.blockers)})}});return}return await Te(J,re,{submission:Y,pendingError:te,preventScrollReset:Xe,replace:j&&j.replace})}function ue(){if(xs(),Se({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){Te(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}Te(v||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function Te(L,j,V){k&&k.abort(),k=null,v=L,S=(V&&V.startUninterruptedRevalidation)===!0,Hn(h.location,h.matches),w=(V&&V.preventScrollReset)===!0;let Y=n||t,te=V&&V.overrideNavigation,oe=Ws(Y,j,e.basename);if(!oe){let Ae=Kn(404,{pathname:j.pathname}),{matches:Xt,route:Rt}=Hh(Y);$s(),G(j,{matches:Xt,loaderData:{},errors:{[Rt.id]:Ae}});return}if(v4(h.location,j)&&!(V&&V.submission&&qn(V.submission.formMethod))){G(j,{matches:oe});return}k=new AbortController;let re=Bo(e.history,j,k.signal,V&&V.submission),ce,J;if(V&&V.pendingError)J={[Ks(oe).route.id]:V.pendingError};else if(V&&V.submission&&qn(V.submission.formMethod)){let Ae=await Oe(re,j,V.submission,oe,{replace:V.replace});if(Ae.shortCircuited)return;ce=Ae.pendingActionData,J=Ae.pendingActionError,te=ke({state:"loading",location:j},V.submission),re=new Request(re.url,{signal:re.signal})}let{shortCircuited:Xe,loaderData:ye,errors:ut}=await jn(re,j,oe,te,V&&V.submission,V&&V.replace,ce,J);Xe||(k=null,G(j,ke({matches:oe},ce?{actionData:ce}:{},{loaderData:ye,errors:ut})))}async function Oe(L,j,V,Y,te){xs();let oe=ke({state:"submitting",location:j},V);Se({navigation:oe});let re,ce=Bc(Y,j);if(!ce.route.action)re={type:pt.error,error:Kn(405,{method:L.method,pathname:j.pathname,routeId:ce.route.id})};else if(re=await Lo("action",L,ce,Y,d.basename),L.signal.aborted)return{shortCircuited:!0};if(Zs(re)){let J;return te&&te.replace!=null?J=te.replace:J=re.location===h.location.pathname+h.location.search,await Un(h,re,{submission:V,replace:J}),{shortCircuited:!0}}if(ri(re)){let J=Ks(Y,ce.route.id);return(te&&te.replace)!==!0&&(v=rt.Push),{pendingActionData:{},pendingActionError:{[J.route.id]:re.error}}}if(os(re))throw Kn(400,{type:"defer-action"});return{pendingActionData:{[ce.route.id]:re.data}}}async function jn(L,j,V,Y,te,oe,re,ce){let J=Y;J||(J=ke({state:"loading",location:j,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},te));let Xe=te||(J.formMethod&&J.formAction&&J.formData&&J.formEncType?{formMethod:J.formMethod,formAction:J.formAction,formData:J.formData,formEncType:J.formEncType}:void 0),ye=n||t,[ut,Ae]=jh(e.history,h,V,Xe,j,T,N,D,U,ye,e.basename,re,ce);if($s(Ze=>!(V&&V.some(Yt=>Yt.route.id===Ze))||ut&&ut.some(Yt=>Yt.route.id===Ze)),ut.length===0&&Ae.length===0)return G(j,ke({matches:V,loaderData:{},errors:ce||null},re?{actionData:re}:{})),{shortCircuited:!0};if(!S){Ae.forEach(Yt=>{let Dn=h.fetchers.get(Yt.key),Jr={state:"loading",data:Dn&&Dn.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(Yt.key,Jr)});let Ze=re||h.actionData;Se(ke({navigation:J},Ze?Object.keys(Ze).length===0?{actionData:null}:{actionData:Ze}:{},Ae.length>0?{fetchers:new Map(h.fetchers)}:{}))}F=++P,Ae.forEach(Ze=>C.set(Ze.key,k));let{results:Xt,loaderResults:Rt,fetcherResults:vr}=await Qr(h.matches,V,ut,Ae,L);if(L.signal.aborted)return{shortCircuited:!0};Ae.forEach(Ze=>C.delete(Ze.key));let bt=Wh(Xt);if(bt)return await Un(h,bt,{replace:oe}),{shortCircuited:!0};let{loaderData:Me,errors:Wn}=Uh(h,V,ut,Rt,ce,Ae,vr,Q);Q.forEach((Ze,Yt)=>{Ze.subscribe(Dn=>{(Dn||Ze.done)&&Q.delete(Yt)})}),Mi();let Ft=_s(F);return ke({loaderData:Me,errors:Wn},Ft||Ae.length>0?{fetchers:new Map(h.fetchers)}:{})}function Kt(L){return h.fetchers.get(L)||f4}function Yr(L,j,V,Y){if(p4)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");C.has(L)&&qt(L);let oe=Ws(n||t,V,e.basename);if(!oe){bo(L,j,Kn(404,{pathname:V}));return}let{path:re,submission:ce}=zh(V,Y,!0),J=Bc(oe,re);if(w=(Y&&Y.preventScrollReset)===!0,ce&&qn(ce.formMethod)){sn(L,j,re,J,oe,ce);return}U.set(L,{routeId:j,path:re}),Mn(L,j,re,J,oe,ce)}async function sn(L,j,V,Y,te,oe){if(xs(),U.delete(L),!Y.route.action){let on=Kn(405,{method:oe.formMethod,pathname:V,routeId:j});bo(L,j,on);return}let re=h.fetchers.get(L),ce=ke({state:"submitting"},oe,{data:re&&re.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(L,ce),Se({fetchers:new Map(h.fetchers)});let J=new AbortController,Xe=Bo(e.history,V,J.signal,oe);C.set(L,J);let ye=await Lo("action",Xe,Y,te,d.basename);if(Xe.signal.aborted){C.get(L)===J&&C.delete(L);return}if(Zs(ye)){C.delete(L),K.add(L);let on=ke({state:"loading"},oe,{data:void 0," _hasFetcherDoneAnything ":!0});return h.fetchers.set(L,on),Se({fetchers:new Map(h.fetchers)}),Un(h,ye,{isFetchActionRedirect:!0})}if(ri(ye)){bo(L,j,ye.error);return}if(os(ye))throw Kn(400,{type:"defer-action"});let ut=h.navigation.location||h.location,Ae=Bo(e.history,ut,J.signal),Xt=n||t,Rt=h.navigation.state!=="idle"?Ws(Xt,h.navigation.location,e.basename):h.matches;he(Rt,"Didn't find any matches after fetcher action");let vr=++P;z.set(L,vr);let bt=ke({state:"loading",data:ye.data},oe,{" _hasFetcherDoneAnything ":!0});h.fetchers.set(L,bt);let[Me,Wn]=jh(e.history,h,Rt,oe,ut,T,N,D,U,Xt,e.basename,{[Y.route.id]:ye.data},void 0);Wn.filter(on=>on.key!==L).forEach(on=>{let xo=on.key,Ki=h.fetchers.get(xo),Ds={state:"loading",data:Ki&&Ki.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(xo,Ds),C.set(xo,J)}),Se({fetchers:new Map(h.fetchers)});let{results:Ft,loaderResults:Ze,fetcherResults:Yt}=await Qr(h.matches,Rt,Me,Wn,Ae);if(J.signal.aborted)return;z.delete(L),C.delete(L),Wn.forEach(on=>C.delete(on.key));let Dn=Wh(Ft);if(Dn)return Un(h,Dn);let{loaderData:Jr,errors:ko}=Uh(h,h.matches,Me,Ze,void 0,Wn,Yt,Q),Hi={state:"idle",data:ye.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(L,Hi);let Wi=_s(vr);h.navigation.state==="loading"&&vr>F?(he(v,"Expected pending action"),k&&k.abort(),G(h.navigation.location,{matches:Rt,loaderData:Jr,errors:ko,fetchers:new Map(h.fetchers)})):(Se(ke({errors:ko,loaderData:Vh(h.loaderData,Jr,Rt,ko)},Wi?{fetchers:new Map(h.fetchers)}:{})),T=!1)}async function Mn(L,j,V,Y,te,oe){let re=h.fetchers.get(L),ce=ke({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},oe,{data:re&&re.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(L,ce),Se({fetchers:new Map(h.fetchers)});let J=new AbortController,Xe=Bo(e.history,V,J.signal);C.set(L,J);let ye=await Lo("loader",Xe,Y,te,d.basename);if(os(ye)&&(ye=await qg(ye,Xe.signal,!0)||ye),C.get(L)===J&&C.delete(L),Xe.signal.aborted)return;if(Zs(ye)){await Un(h,ye);return}if(ri(ye)){let Ae=Ks(h.matches,j);h.fetchers.delete(L),Se({fetchers:new Map(h.fetchers),errors:{[Ae.route.id]:ye.error}});return}he(!os(ye),"Unhandled fetcher deferred data");let ut={state:"idle",data:ye.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(L,ut),Se({fetchers:new Map(h.fetchers)})}async function Un(L,j,V){var Y;let{submission:te,replace:oe,isFetchActionRedirect:re}=V===void 0?{}:V;j.revalidate&&(T=!0);let ce=bi(L.location,j.location,ke({_isRedirect:!0},re?{_isFetchActionRedirect:!0}:{}));if(he(ce,"Expected a location on the redirect navigation"),Vg.test(j.location)&&Hg&&typeof((Y=window)==null?void 0:Y.location)<"u"){let Xt=e.history.createURL(j.location),Rt=Ri(Xt.pathname,e.basename||"/")==null;if(window.location.origin!==Xt.origin||Rt){oe?window.location.replace(j.location):window.location.assign(j.location);return}}k=null;let J=oe===!0?rt.Replace:rt.Push,{formMethod:Xe,formAction:ye,formEncType:ut,formData:Ae}=L.navigation;!te&&Xe&&ye&&Ae&&ut&&(te={formMethod:Xe,formAction:ye,formEncType:ut,formData:Ae}),c4.has(j.status)&&te&&qn(te.formMethod)?await Te(J,ce,{submission:ke({},te,{formAction:j.location}),preventScrollReset:w}):await Te(J,ce,{overrideNavigation:{state:"loading",location:ce,formMethod:te?te.formMethod:void 0,formAction:te?te.formAction:void 0,formEncType:te?te.formEncType:void 0,formData:te?te.formData:void 0},preventScrollReset:w})}async function Qr(L,j,V,Y,te){let oe=await Promise.all([...V.map(J=>Lo("loader",te,J,j,d.basename)),...Y.map(J=>J.matches&&J.match?Lo("loader",Bo(e.history,J.path,te.signal),J.match,J.matches,d.basename):{type:pt.error,error:Kn(404,{pathname:J.path})})]),re=oe.slice(0,V.length),ce=oe.slice(V.length);return await Promise.all([Kh(L,V,re,te.signal,!1,h.loaderData),Kh(L,Y.map(J=>J.match),ce,te.signal,!0)]),{results:oe,loaderResults:re,fetcherResults:ce}}function xs(){T=!0,N.push(...$s()),U.forEach((L,j)=>{C.has(j)&&(D.push(j),qt(j))})}function bo(L,j,V){let Y=Ks(h.matches,j);Gt(L),Se({errors:{[Y.route.id]:V},fetchers:new Map(h.fetchers)})}function Gt(L){C.has(L)&&qt(L),U.delete(L),z.delete(L),K.delete(L),h.fetchers.delete(L)}function qt(L){let j=C.get(L);he(j,"Expected fetch controller: "+L),j.abort(),C.delete(L)}function ji(L){for(let j of L){let Y={state:"idle",data:Kt(j).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(j,Y)}}function Mi(){let L=[];for(let j of K){let V=h.fetchers.get(j);he(V,"Expected fetcher: "+j),V.state==="loading"&&(K.delete(j),L.push(j))}ji(L)}function _s(L){let j=[];for(let[V,Y]of z)if(Y<L){let te=h.fetchers.get(V);he(te,"Expected fetcher: "+V),te.state==="loading"&&(qt(V),z.delete(V),j.push(V))}return ji(j),j.length>0}function Ui(L,j){let V=h.blockers.get(L)||Bh;return le.get(L)!==j&&le.set(L,j),V}function Vn(L){h.blockers.delete(L),le.delete(L)}function nt(L,j){let V=h.blockers.get(L)||Bh;he(V.state==="unblocked"&&j.state==="blocked"||V.state==="blocked"&&j.state==="blocked"||V.state==="blocked"&&j.state==="proceeding"||V.state==="blocked"&&j.state==="unblocked"||V.state==="proceeding"&&j.state==="unblocked","Invalid blocker state transition: "+V.state+" -> "+j.state),h.blockers.set(L,j),Se({blockers:new Map(h.blockers)})}function yr(L){let{currentLocation:j,nextLocation:V,historyAction:Y}=L;if(le.size===0)return;le.size>1&&Ti(!1,"A router only supports one blocker at a time");let te=Array.from(le.entries()),[oe,re]=te[te.length-1],ce=h.blockers.get(oe);if(!(ce&&ce.state==="proceeding")&&re({currentLocation:j,nextLocation:V,historyAction:Y}))return oe}function $s(L){let j=[];return Q.forEach((V,Y)=>{(!L||L(Y))&&(V.cancel(),j.push(Y),Q.delete(Y))}),j}function To(L,j,V){if(o=L,a=j,i=V||(Y=>Y.key),!l&&h.navigation===Du){l=!0;let Y=No(h.location,h.matches);Y!=null&&Se({restoreScrollPosition:Y})}return()=>{o=null,a=null,i=null}}function Hn(L,j){if(o&&i&&a){let V=j.map(te=>Gh(te,h.loaderData)),Y=i(L,V)||L.key;o[Y]=a()}}function No(L,j){if(o&&i&&a){let V=j.map(oe=>Gh(oe,h.loaderData)),Y=i(L,V)||L.key,te=o[Y];if(typeof te=="number")return te}return null}function Vi(L){n=L}return d={get basename(){return e.basename},get state(){return h},get routes(){return t},initialize:me,subscribe:Je,enableScrollRestoration:To,navigate:ne,fetch:Yr,revalidate:ue,createHref:L=>e.history.createHref(L),encodeLocation:L=>e.history.encodeLocation(L),getFetcher:Kt,deleteFetcher:Gt,dispose:Ce,getBlocker:Ui,deleteBlocker:Vn,_internalFetchControllers:C,_internalActiveDeferreds:Q,_internalSetRoutes:Vi},d}function h4(e){return e!=null&&"formData"in e}function zh(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:lr(e);if(!t||!h4(t))return{path:r};if(t.formMethod&&!S4(t.formMethod))return{path:r,error:Kn(405,{method:t.formMethod})};let s;if(t.formData&&(s={formMethod:t.formMethod||"get",formAction:Gg(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},qn(s.formMethod)))return{path:r,submission:s};let o=zn(r),i=Kg(t.formData);return n&&o.search&&Xg(o.search)&&i.append("index",""),o.search="?"+i,{path:lr(o),submission:s}}function m4(e,t){let n=e;if(t){let r=e.findIndex(s=>s.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function jh(e,t,n,r,s,o,i,a,l,u,f,p,d){let h=d?Object.values(d)[0]:p?Object.values(p)[0]:void 0,v=e.createURL(t.location),w=e.createURL(s),k=o||v.toString()===w.toString()||v.search!==w.search,S=d?Object.keys(d)[0]:void 0,N=m4(n,S).filter((C,P)=>{if(C.route.loader==null)return!1;if(g4(t.loaderData,t.matches[P],C)||i.some(K=>K===C.route.id))return!0;let F=t.matches[P],z=C;return Mh(C,ke({currentUrl:v,currentParams:F.params,nextUrl:w,nextParams:z.params},r,{actionResult:h,defaultShouldRevalidate:k||Wg(F,z)}))}),D=[];return l.forEach((C,P)=>{if(!n.some(U=>U.route.id===C.routeId))return;let F=Ws(u,C.path,f);if(!F){D.push(ke({key:P},C,{matches:null,match:null}));return}let z=Bc(F,C.path);if(a.includes(P)){D.push(ke({key:P,matches:F,match:z},C));return}Mh(z,ke({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:h,defaultShouldRevalidate:k}))&&D.push(ke({key:P,matches:F,match:z},C))}),[N,D]}function g4(e,t,n){let r=!t||n.route.id!==t.route.id,s=e[n.route.id]===void 0;return r||s}function Wg(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Mh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Lo(e,t,n,r,s,o,i,a){s===void 0&&(s="/"),o===void 0&&(o=!1),i===void 0&&(i=!1);let l,u,f,p=new Promise((w,k)=>f=k),d=()=>f();t.signal.addEventListener("abort",d);try{let w=n.route[e];he(w,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),u=await Promise.race([w({request:t,params:n.params,context:a}),p]),he(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(w){l=pt.error,u=w}finally{t.signal.removeEventListener("abort",d)}if(w4(u)){let w=u.status;if(u4.has(w)){let T=u.headers.get("Location");if(he(T,"Redirects returned/thrown from loaders/actions must have a Location header"),Vg.test(T)){if(!o){let N=new URL(t.url),D=T.startsWith("//")?new URL(N.protocol+T):new URL(T),C=Ri(D.pathname,s)!=null;D.origin===N.origin&&C&&(T=D.pathname+D.search+D.hash)}}else{let N=r.slice(0,r.indexOf(n)+1),D=Rl(N).map(P=>P.pathnameBase),C=yp(T,D,new URL(t.url).pathname);if(he(lr(C),"Unable to resolve redirect location: "+T),s){let P=C.pathname;C.pathname=P==="/"?s:nr([s,P])}T=lr(C)}if(o)throw u.headers.set("Location",T),u;return{type:pt.redirect,status:w,location:T,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(i)throw{type:l||pt.data,response:u};let k,S=u.headers.get("Content-Type");return S&&/\bapplication\/json\b/.test(S)?k=await u.json():k=await u.text(),l===pt.error?{type:l,error:new vp(w,u.statusText,k),headers:u.headers}:{type:pt.data,data:k,statusCode:u.status,headers:u.headers}}if(l===pt.error)return{type:l,error:u};if(u instanceof r4){var h,v;return{type:pt.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((v=u.init)==null?void 0:v.headers)&&new Headers(u.init.headers)}}return{type:pt.data,data:u}}function Bo(e,t,n,r){let s=e.createURL(Gg(t)).toString(),o={signal:n};if(r&&qn(r.formMethod)){let{formMethod:i,formEncType:a,formData:l}=r;o.method=i.toUpperCase(),o.body=a==="application/x-www-form-urlencoded"?Kg(l):l}return new Request(s,o)}function Kg(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function y4(e,t,n,r,s){let o={},i=null,a,l=!1,u={};return n.forEach((f,p)=>{let d=t[p].route.id;if(he(!Zs(f),"Cannot handle redirect results in processLoaderData"),ri(f)){let h=Ks(e,d),v=f.error;r&&(v=Object.values(r)[0],r=void 0),i=i||{},i[h.route.id]==null&&(i[h.route.id]=v),o[d]=void 0,l||(l=!0,a=Mg(f.error)?f.error.status:500),f.headers&&(u[d]=f.headers)}else os(f)?(s.set(d,f.deferredData),o[d]=f.deferredData.data):o[d]=f.data,f.statusCode!=null&&f.statusCode!==200&&!l&&(a=f.statusCode),f.headers&&(u[d]=f.headers)}),r&&(i=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:i,statusCode:a||200,loaderHeaders:u}}function Uh(e,t,n,r,s,o,i,a){let{loaderData:l,errors:u}=y4(t,n,r,s,a);for(let f=0;f<o.length;f++){let{key:p,match:d}=o[f];he(i!==void 0&&i[f]!==void 0,"Did not find corresponding fetcher result");let h=i[f];if(ri(h)){let v=Ks(e.matches,d==null?void 0:d.route.id);u&&u[v.route.id]||(u=ke({},u,{[v.route.id]:h.error})),e.fetchers.delete(p)}else if(Zs(h))he(!1,"Unhandled fetcher revalidation redirect");else if(os(h))he(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:h.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(p,v)}}return{loaderData:l,errors:u}}function Vh(e,t,n,r){let s=ke({},t);for(let o of n){let i=o.route.id;if(t.hasOwnProperty(i)?t[i]!==void 0&&(s[i]=t[i]):e[i]!==void 0&&o.route.loader&&(s[i]=e[i]),r&&r.hasOwnProperty(i))break}return s}function Ks(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Hh(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Kn(e,t){let{pathname:n,routeId:r,method:s,type:o}=t===void 0?{}:t,i="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(i="Bad Request",s&&n&&r?a="You made a "+s+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(a="defer() is not supported in actions")):e===403?(i="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",a='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",s&&n&&r?a="You made a "+s.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":s&&(a='Invalid request method "'+s.toUpperCase()+'"')),new vp(e||500,i,new Error(a),!0)}function Wh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Zs(n))return n}}function Gg(e){let t=typeof e=="string"?zn(e):e;return lr(ke({},t,{hash:""}))}function v4(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function os(e){return e.type===pt.deferred}function ri(e){return e.type===pt.error}function Zs(e){return(e&&e.type)===pt.redirect}function w4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function S4(e){return l4.has(e)}function qn(e){return i4.has(e)}async function Kh(e,t,n,r,s,o){for(let i=0;i<n.length;i++){let a=n[i],l=t[i];if(!l)continue;let u=e.find(p=>p.route.id===l.route.id),f=u!=null&&!Wg(u,l)&&(o&&o[l.route.id])!==void 0;os(a)&&(s||f)&&await qg(a,r,s).then(p=>{p&&(n[i]=p||n[i])})}}async function qg(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:pt.data,data:e.deferredData.unwrappedData}}catch(s){return{type:pt.error,error:s}}return{type:pt.data,data:e.deferredData.data}}}function Xg(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Gh(e,t){let{route:n,pathname:r,params:s}=e;return{id:n.id,pathname:r,params:s,data:t[n.id],handle:n.handle}}function Bc(e,t){let n=typeof t=="string"?zn(t).search:t.search;if(e[e.length-1].route.index&&Xg(n||""))return e[e.length-1];let r=Rl(e);return r[r.length-1]}/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ol.apply(this,arguments)}function E4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const b4=typeof Object.is=="function"?Object.is:E4,{useState:T4,useEffect:N4,useLayoutEffect:k4,useDebugValue:x4}=Uu;function _4(e,t,n){const r=t(),[{inst:s},o]=T4({inst:{value:r,getSnapshot:t}});return k4(()=>{s.value=r,s.getSnapshot=t,Iu(s)&&o({inst:s})},[e,r,t]),N4(()=>(Iu(s)&&o({inst:s}),e(()=>{Iu(s)&&o({inst:s})})),[e]),x4(r),r}function Iu(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!b4(n,r)}catch{return!0}}function $4(e,t,n){return t()}const D4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",I4=!D4,C4=I4?$4:_4,O4="useSyncExternalStore"in Uu?(e=>e.useSyncExternalStore)(Uu):C4,wp=q.createContext(null),Fl=q.createContext(null),vo=q.createContext(null),Ll=q.createContext(null),wo=q.createContext({outlet:null,matches:[]}),Yg=q.createContext(null);function A4(e,t){let{relative:n}=t===void 0?{}:t;Fi()||he(!1);let{basename:r,navigator:s}=q.useContext(vo),{hash:o,pathname:i,search:a}=Sp(e,{relative:n}),l=i;return r!=="/"&&(l=i==="/"?r:nr([r,i])),s.createHref({pathname:l,search:a,hash:o})}function Fi(){return q.useContext(Ll)!=null}function Li(){return Fi()||he(!1),q.useContext(Ll).location}function P4(){Fi()||he(!1);let{basename:e,navigator:t}=q.useContext(vo),{matches:n}=q.useContext(wo),{pathname:r}=Li(),s=JSON.stringify(Rl(n).map(a=>a.pathnameBase)),o=q.useRef(!1);return q.useEffect(()=>{o.current=!0}),q.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=yp(a,JSON.parse(s),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:nr([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,s,r])}function Sp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=q.useContext(wo),{pathname:s}=Li(),o=JSON.stringify(Rl(r).map(i=>i.pathnameBase));return q.useMemo(()=>yp(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function R4(e,t){Fi()||he(!1);let{navigator:n}=q.useContext(vo),r=q.useContext(Fl),{matches:s}=q.useContext(wo),o=s[s.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Li(),u;if(t){var f;let w=typeof t=="string"?zn(t):t;a==="/"||(f=w.pathname)!=null&&f.startsWith(a)||he(!1),u=w}else u=l;let p=u.pathname||"/",d=a==="/"?p:p.slice(a.length)||"/",h=Ws(e,{pathname:d}),v=z4(h&&h.map(w=>Object.assign({},w,{params:Object.assign({},i,w.params),pathname:nr([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:nr([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,r||void 0);return t&&v?q.createElement(Ll.Provider,{value:{location:ol({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:rt.Pop}},v):v}function F4(){let e=V4(),t=Mg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},t),n?q.createElement("pre",{style:s},n):null,o)}class L4 extends q.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?q.createElement(wo.Provider,{value:this.props.routeContext},q.createElement(Yg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function B4(e){let{routeContext:t,match:n,children:r}=e,s=q.useContext(wp);return s&&s.static&&s.staticContext&&n.route.errorElement&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),q.createElement(wo.Provider,{value:t},r)}function z4(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,s=n==null?void 0:n.errors;if(s!=null){let o=r.findIndex(i=>i.route.id&&(s==null?void 0:s[i.route.id]));o>=0||he(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,i,a)=>{let l=i.route.id?s==null?void 0:s[i.route.id]:null,u=n?i.route.errorElement||q.createElement(F4,null):null,f=t.concat(r.slice(0,a+1)),p=()=>q.createElement(B4,{match:i,routeContext:{outlet:o,matches:f}},l?u:i.route.element!==void 0?i.route.element:o);return n&&(i.route.errorElement||a===0)?q.createElement(L4,{location:n.location,component:u,error:l,children:p(),routeContext:{outlet:null,matches:f}}):p()},null)}var qh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(qh||(qh={}));var il;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(il||(il={}));function j4(e){let t=q.useContext(Fl);return t||he(!1),t}function M4(e){let t=q.useContext(wo);return t||he(!1),t}function U4(e){let t=M4(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function V4(){var e;let t=q.useContext(Yg),n=j4(il.UseRouteError),r=U4(il.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function H4(e){let{fallbackElement:t,router:n}=e,r=O4(n.subscribe,()=>n.state,()=>n.state),s=q.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:i=>n.navigate(i),push:(i,a,l)=>n.navigate(i,{state:a,preventScrollReset:l==null?void 0:l.preventScrollReset}),replace:(i,a,l)=>n.navigate(i,{replace:!0,state:a,preventScrollReset:l==null?void 0:l.preventScrollReset})}),[n]),o=n.basename||"/";return q.createElement(q.Fragment,null,q.createElement(wp.Provider,{value:{router:n,navigator:s,static:!1,basename:o}},q.createElement(Fl.Provider,{value:r},q.createElement(K4,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?q.createElement(G4,null):t))),null)}function W4(e){he(!1)}function K4(e){let{basename:t="/",children:n=null,location:r,navigationType:s=rt.Pop,navigator:o,static:i=!1}=e;Fi()&&he(!1);let a=t.replace(/^\/*/,"/"),l=q.useMemo(()=>({basename:a,navigator:o,static:i}),[a,o,i]);typeof r=="string"&&(r=zn(r));let{pathname:u="/",search:f="",hash:p="",state:d=null,key:h="default"}=r,v=q.useMemo(()=>{let w=Ri(u,a);return w==null?null:{pathname:w,search:f,hash:p,state:d,key:h}},[a,u,f,p,d,h]);return v==null?null:q.createElement(vo.Provider,{value:l},q.createElement(Ll.Provider,{children:n,value:{location:v,navigationType:s}}))}function G4(e){let{children:t,location:n}=e,r=q.useContext(wp),s=r&&!t?r.router.routes:zc(t);return R4(s,n)}var Xh;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Xh||(Xh={}));new Promise(()=>{});function zc(e,t){t===void 0&&(t=[]);let n=[];return q.Children.forEach(e,(r,s)=>{if(!q.isValidElement(r))return;if(r.type===q.Fragment){n.push.apply(n,zc(r.props.children,t));return}r.type!==W4&&he(!1),!r.props.index||!r.props.children||he(!1);let o=[...t,s],i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=zc(r.props.children,o)),n.push(i)}),n}function Qg(e){return e.map(t=>{let n=ol({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=Qg(n.children)),n})}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ni(){return Ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ni.apply(this,arguments)}function Jg(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,o;for(o=0;o<r.length;o++)s=r[o],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function q4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function X4(e,t){return e.button===0&&(!t||t==="_self")&&!q4(e)}const Y4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Q4=["aria-current","caseSensitive","className","end","style","to","children"];function J4(e,t){return d4({basename:t==null?void 0:t.basename,history:Av({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Z4(),routes:Qg(e)}).initialize()}function Z4(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ni({},t,{errors:ew(t.errors)})),t}function ew(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,s]of t)if(s&&s.__type==="RouteErrorResponse")n[r]=new vp(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){let o=new Error(s.message);o.stack="",n[r]=o}else n[r]=s;return n}const tw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rw=q.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:o,replace:i,state:a,target:l,to:u,preventScrollReset:f}=t,p=Jg(t,Y4),{basename:d}=q.useContext(vo),h,v=!1;if(typeof u=="string"&&nw.test(u)&&(h=u,tw)){let T=new URL(window.location.href),N=u.startsWith("//")?new URL(T.protocol+u):new URL(u),D=Ri(N.pathname,d);N.origin===T.origin&&D!=null?u=D+N.search+N.hash:v=!0}let w=A4(u,{relative:s}),k=ow(u,{replace:i,state:a,target:l,preventScrollReset:f,relative:s});function S(T){r&&r(T),T.defaultPrevented||k(T)}return q.createElement("a",Ni({},p,{href:h||w,onClick:v||o?r:S,ref:n,target:l}))}),sw=q.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:s=!1,className:o="",end:i=!1,style:a,to:l,children:u}=t,f=Jg(t,Q4),p=Sp(l,{relative:f.relative}),d=Li(),h=q.useContext(Fl),{navigator:v}=q.useContext(vo),w=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,k=d.pathname,S=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;s||(k=k.toLowerCase(),S=S?S.toLowerCase():null,w=w.toLowerCase());let T=k===w||!i&&k.startsWith(w)&&k.charAt(w.length)==="/",N=S!=null&&(S===w||!i&&S.startsWith(w)&&S.charAt(w.length)==="/"),D=T?r:void 0,C;typeof o=="function"?C=o({isActive:T,isPending:N}):C=[o,T?"active":null,N?"pending":null].filter(Boolean).join(" ");let P=typeof a=="function"?a({isActive:T,isPending:N}):a;return q.createElement(rw,Ni({},f,{"aria-current":D,className:C,ref:n,style:P,to:l}),typeof u=="function"?u({isActive:T,isPending:N}):u)});var Yh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Yh||(Yh={}));var Qh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qh||(Qh={}));function ow(e,t){let{target:n,replace:r,state:s,preventScrollReset:o,relative:i}=t===void 0?{}:t,a=P4(),l=Li(),u=Sp(e,{relative:i});return q.useCallback(f=>{if(X4(f,n)){f.preventDefault();let p=r!==void 0?r:lr(l)===lr(u);a(e,{replace:p,state:s,preventScrollReset:o,relative:i})}},[l,a,u,r,s,n,e,o,i])}const iw=""+new URL("react-35ef61ed.svg",import.meta.url).href;var al=(e=>(e.Main="/",e.FaceDetection="/face-detection",e))(al||{});const Zg=()=>We("nav",{children:We("ul",{children:Object.entries(al).map(([e,t])=>We("li",{children:We(sw,{to:t,className:({isActive:n})=>n?"active":void 0,children:e})},e))})}),aw=()=>Pa("div",{className:"App",children:[Pa("div",{children:[We("a",{href:"https://vitejs.dev",target:"_blank",rel:"noreferrer",children:We("img",{src:"/vite.svg",className:"logo",alt:"Vite logo"})}),We("a",{href:"https://reactjs.org",target:"_blank",rel:"noreferrer",children:We("img",{src:iw,className:"logo react",alt:"React logo"})})]}),We("h1",{children:"ML webapp"}),We("div",{children:We(Zg,{})})]});var ey={};(function(){var e;function t(c){var m=0;return function(){return m<c.length?{done:!1,value:c[m++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,y){return c==Array.prototype||c==Object.prototype||(c[m]=y.value),c};function r(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pn=="object"&&Pn];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=r(this);function o(c,m){if(m)e:{var y=s;c=c.split(".");for(var E=0;E<c.length-1;E++){var _=c[E];if(!(_ in y))break e;y=y[_]}c=c[c.length-1],E=y[c],m=m(E),m!=E&&m!=null&&n(y,c,{configurable:!0,writable:!0,value:m})}}o("Symbol",function(c){function m(A){if(this instanceof m)throw new TypeError("Symbol is not a constructor");return new y(E+(A||"")+"_"+_++,A)}function y(A,I){this.g=A,n(this,"description",{configurable:!0,writable:!0,value:I})}if(c)return c;y.prototype.toString=function(){return this.g};var E="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",_=0;return m}),o("Symbol.iterator",function(c){if(c)return c;c=Symbol("Symbol.iterator");for(var m="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),y=0;y<m.length;y++){var E=s[m[y]];typeof E=="function"&&typeof E.prototype[c]!="function"&&n(E.prototype,c,{configurable:!0,writable:!0,value:function(){return i(t(this))}})}return c});function i(c){return c={next:c},c[Symbol.iterator]=function(){return this},c}function a(c){var m=typeof Symbol<"u"&&Symbol.iterator&&c[Symbol.iterator];return m?m.call(c):{next:t(c)}}function l(c){if(!(c instanceof Array)){c=a(c);for(var m,y=[];!(m=c.next()).done;)y.push(m.value);c=y}return c}var u=typeof Object.create=="function"?Object.create:function(c){function m(){}return m.prototype=c,new m},f;if(typeof Object.setPrototypeOf=="function")f=Object.setPrototypeOf;else{var p;e:{var d={a:!0},h={};try{h.__proto__=d,p=h.a;break e}catch{}p=!1}f=p?function(c,m){if(c.__proto__=m,c.__proto__!==m)throw new TypeError(c+" is not extensible");return c}:null}var v=f;function w(c,m){if(c.prototype=u(m.prototype),c.prototype.constructor=c,v)v(c,m);else for(var y in m)if(y!="prototype")if(Object.defineProperties){var E=Object.getOwnPropertyDescriptor(m,y);E&&Object.defineProperty(c,y,E)}else c[y]=m[y];c.na=m.prototype}function k(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function S(c){if(c.l)throw new TypeError("Generator is already running");c.l=!0}k.prototype.s=function(c){this.h=c};function T(c,m){c.j={da:m,ea:!0},c.g=c.o||c.u}k.prototype.return=function(c){this.j={return:c},this.g=this.u};function N(c,m,y){return c.g=y,{value:m}}function D(c){this.g=new k,this.h=c}function C(c,m){S(c.g);var y=c.g.i;return y?P(c,"return"in y?y.return:function(E){return{value:E,done:!0}},m,c.g.return):(c.g.return(m),F(c))}function P(c,m,y,E){try{var _=m.call(c.g.i,y);if(!(_ instanceof Object))throw new TypeError("Iterator result "+_+" is not an object");if(!_.done)return c.g.l=!1,_;var A=_.value}catch(I){return c.g.i=null,T(c.g,I),F(c)}return c.g.i=null,E.call(c.g,A),F(c)}function F(c){for(;c.g.g;)try{var m=c.h(c.g);if(m)return c.g.l=!1,{value:m.value,done:!1}}catch(y){c.g.h=void 0,T(c.g,y)}if(c.g.l=!1,c.g.j){if(m=c.g.j,c.g.j=null,m.ea)throw m.da;return{value:m.return,done:!0}}return{value:void 0,done:!0}}function z(c){this.next=function(m){return S(c.g),c.g.i?m=P(c,c.g.i.next,m,c.g.s):(c.g.s(m),m=F(c)),m},this.throw=function(m){return S(c.g),c.g.i?m=P(c,c.g.i.throw,m,c.g.s):(T(c.g,m),m=F(c)),m},this.return=function(m){return C(c,m)},this[Symbol.iterator]=function(){return this}}function K(c){function m(E){return c.next(E)}function y(E){return c.throw(E)}return new Promise(function(E,_){function A(I){I.done?E(I.value):Promise.resolve(I.value).then(m,y).then(A,_)}A(c.next())})}function U(c){return K(new z(new D(c)))}o("Promise",function(c){function m(I){this.h=0,this.i=void 0,this.g=[],this.s=!1;var R=this.j();try{I(R.resolve,R.reject)}catch(B){R.reject(B)}}function y(){this.g=null}function E(I){return I instanceof m?I:new m(function(R){R(I)})}if(c)return c;y.prototype.h=function(I){if(this.g==null){this.g=[];var R=this;this.i(function(){R.l()})}this.g.push(I)};var _=s.setTimeout;y.prototype.i=function(I){_(I,0)},y.prototype.l=function(){for(;this.g&&this.g.length;){var I=this.g;this.g=[];for(var R=0;R<I.length;++R){var B=I[R];I[R]=null;try{B()}catch(W){this.j(W)}}}this.g=null},y.prototype.j=function(I){this.i(function(){throw I})},m.prototype.j=function(){function I(W){return function(Z){B||(B=!0,W.call(R,Z))}}var R=this,B=!1;return{resolve:I(this.D),reject:I(this.l)}},m.prototype.D=function(I){if(I===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(I instanceof m)this.H(I);else{e:switch(typeof I){case"object":var R=I!=null;break e;case"function":R=!0;break e;default:R=!1}R?this.A(I):this.o(I)}},m.prototype.A=function(I){var R=void 0;try{R=I.then}catch(B){this.l(B);return}typeof R=="function"?this.I(R,I):this.o(I)},m.prototype.l=function(I){this.u(2,I)},m.prototype.o=function(I){this.u(1,I)},m.prototype.u=function(I,R){if(this.h!=0)throw Error("Cannot settle("+I+", "+R+"): Promise already settled in state"+this.h);this.h=I,this.i=R,this.h===2&&this.G(),this.B()},m.prototype.G=function(){var I=this;_(function(){if(I.C()){var R=s.console;typeof R<"u"&&R.error(I.i)}},1)},m.prototype.C=function(){if(this.s)return!1;var I=s.CustomEvent,R=s.Event,B=s.dispatchEvent;return typeof B>"u"?!0:(typeof I=="function"?I=new I("unhandledrejection",{cancelable:!0}):typeof R=="function"?I=new R("unhandledrejection",{cancelable:!0}):(I=s.document.createEvent("CustomEvent"),I.initCustomEvent("unhandledrejection",!1,!0,I)),I.promise=this,I.reason=this.i,B(I))},m.prototype.B=function(){if(this.g!=null){for(var I=0;I<this.g.length;++I)A.h(this.g[I]);this.g=null}};var A=new y;return m.prototype.H=function(I){var R=this.j();I.M(R.resolve,R.reject)},m.prototype.I=function(I,R){var B=this.j();try{I.call(R,B.resolve,B.reject)}catch(W){B.reject(W)}},m.prototype.then=function(I,R){function B(ae,ee){return typeof ae=="function"?function(pe){try{W(ae(pe))}catch(Ee){Z(Ee)}}:ee}var W,Z,ie=new m(function(ae,ee){W=ae,Z=ee});return this.M(B(I,W),B(R,Z)),ie},m.prototype.catch=function(I){return this.then(void 0,I)},m.prototype.M=function(I,R){function B(){switch(W.h){case 1:I(W.i);break;case 2:R(W.i);break;default:throw Error("Unexpected state: "+W.h)}}var W=this;this.g==null?A.h(B):this.g.push(B),this.s=!0},m.resolve=E,m.reject=function(I){return new m(function(R,B){B(I)})},m.race=function(I){return new m(function(R,B){for(var W=a(I),Z=W.next();!Z.done;Z=W.next())E(Z.value).M(R,B)})},m.all=function(I){var R=a(I),B=R.next();return B.done?E([]):new m(function(W,Z){function ie(pe){return function(Ee){ae[pe]=Ee,ee--,ee==0&&W(ae)}}var ae=[],ee=0;do ae.push(void 0),ee++,E(B.value).M(ie(ae.length-1),Z),B=R.next();while(!B.done)})},m});function Q(c,m){c instanceof String&&(c+="");var y=0,E=!1,_={next:function(){if(!E&&y<c.length){var A=y++;return{value:m(A,c[A]),done:!1}}return E=!0,{done:!0,value:void 0}}};return _[Symbol.iterator]=function(){return _},_}var le=typeof Object.assign=="function"?Object.assign:function(c,m){for(var y=1;y<arguments.length;y++){var E=arguments[y];if(E)for(var _ in E)Object.prototype.hasOwnProperty.call(E,_)&&(c[_]=E[_])}return c};o("Object.assign",function(c){return c||le}),o("Object.is",function(c){return c||function(m,y){return m===y?m!==0||1/m===1/y:m!==m&&y!==y}}),o("Array.prototype.includes",function(c){return c||function(m,y){var E=this;E instanceof String&&(E=String(E));var _=E.length;for(y=y||0,0>y&&(y=Math.max(y+_,0));y<_;y++){var A=E[y];if(A===m||Object.is(A,m))return!0}return!1}}),o("String.prototype.includes",function(c){return c||function(m,y){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(m instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(m,y||0)!==-1}}),o("Array.prototype.keys",function(c){return c||function(){return Q(this,function(m){return m})}});var fe=this||self;function me(c,m){c=c.split(".");var y=fe;c[0]in y||typeof y.execScript>"u"||y.execScript("var "+c[0]);for(var E;c.length&&(E=c.shift());)c.length||m===void 0?y[E]&&y[E]!==Object.prototype[E]?y=y[E]:y=y[E]={}:y[E]=m}function Ce(){throw Error("Invalid UTF8")}function Je(c,m){return m=String.fromCharCode.apply(null,m),c==null?m:c+m}var Se,G=typeof TextDecoder<"u",ne,ue=typeof TextEncoder<"u",Te={},Oe=null;function jn(c){var m;m===void 0&&(m=0),sn(),m=Te[m];for(var y=Array(Math.floor(c.length/3)),E=m[64]||"",_=0,A=0;_<c.length-2;_+=3){var I=c[_],R=c[_+1],B=c[_+2],W=m[I>>2];I=m[(I&3)<<4|R>>4],R=m[(R&15)<<2|B>>6],B=m[B&63],y[A++]=W+I+R+B}switch(W=0,B=E,c.length-_){case 2:W=c[_+1],B=m[(W&15)<<2]||E;case 1:c=c[_],y[A]=m[c>>2]+m[(c&3)<<4|W>>4]+B+E}return y.join("")}function Kt(c){var m=c.length,y=3*m/4;y%3?y=Math.floor(y):"=.".indexOf(c[m-1])!=-1&&(y="=.".indexOf(c[m-2])!=-1?y-2:y-1);var E=new Uint8Array(y),_=0;return Yr(c,function(A){E[_++]=A}),_!==y?E.subarray(0,_):E}function Yr(c,m){function y(B){for(;E<c.length;){var W=c.charAt(E++),Z=Oe[W];if(Z!=null)return Z;if(!/^[\s\xa0]*$/.test(W))throw Error("Unknown base64 encoding at char: "+W)}return B}sn();for(var E=0;;){var _=y(-1),A=y(0),I=y(64),R=y(64);if(R===64&&_===-1)break;m(_<<2|A>>4),I!=64&&(m(A<<4&240|I>>2),R!=64&&m(I<<6&192|R))}}function sn(){if(!Oe){Oe={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),m=["+/=","+/","-_=","-_.","-_"],y=0;5>y;y++){var E=c.concat(m[y].split(""));Te[y]=E;for(var _=0;_<E.length;_++){var A=E[_];Oe[A]===void 0&&(Oe[A]=_)}}}}var Mn=typeof Uint8Array=="function";function Un(c){return Mn&&c!=null&&c instanceof Uint8Array}var Qr;function xs(c){if(this.L=c,c!==null&&c.length===0)throw Error("ByteString should be constructed with non-empty values")}var bo=typeof Uint8Array.prototype.slice=="function",Gt=0,qt=0;function ji(c,m){if(c.constructor===Uint8Array)return c;if(c.constructor===ArrayBuffer)return new Uint8Array(c);if(c.constructor===Array)return new Uint8Array(c);if(c.constructor===String)return Kt(c);if(c.constructor===xs)return!m&&(m=c.L)&&m.constructor===Uint8Array?m:(m=c.L,m=m==null||Un(m)?m:typeof m=="string"?Kt(m):null,(c=c.L=m)?new Uint8Array(c):Qr||(Qr=new Uint8Array(0)));if(c instanceof Uint8Array)return new Uint8Array(c.buffer,c.byteOffset,c.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")}function Mi(c,m){return Error("Invalid wire type: "+c+" (at position "+m+")")}function _s(){return Error("Failed to read varint, encoding is invalid.")}function Ui(c,m){m=m===void 0?{}:m,m=m.v===void 0?!1:m.v,this.h=null,this.g=this.i=this.j=0,this.v=m,c&&Vn(this,c)}function Vn(c,m){c.h=ji(m,c.v),c.j=0,c.i=c.h.length,c.g=c.j}Ui.prototype.reset=function(){this.g=this.j};function nt(c){if(c.g>c.i)throw Error("Tried to read past the end of the data "+c.g+" > "+c.i)}function yr(c){var m=c.h,y=m[c.g],E=y&127;if(128>y)return c.g+=1,nt(c),E;if(y=m[c.g+1],E|=(y&127)<<7,128>y)return c.g+=2,nt(c),E;if(y=m[c.g+2],E|=(y&127)<<14,128>y)return c.g+=3,nt(c),E;if(y=m[c.g+3],E|=(y&127)<<21,128>y)return c.g+=4,nt(c),E;if(y=m[c.g+4],c.g+=5,E|=(y&15)<<28,128>y)return nt(c),E;if(128<=m[c.g++]&&128<=m[c.g++]&&128<=m[c.g++]&&128<=m[c.g++]&&128<=m[c.g++])throw _s();return nt(c),E}var $s=[];function To(){this.g=[]}To.prototype.length=function(){return this.g.length},To.prototype.end=function(){var c=this.g;return this.g=[],c};function Hn(c,m){for(;127<m;)c.g.push(m&127|128),m>>>=7;c.g.push(m)}function No(c){var m={},y=m.W===void 0?!1:m.W;this.l={v:m.v===void 0?!1:m.v},this.W=y,m=this.l,$s.length?(y=$s.pop(),m&&(y.v=m.v),c&&Vn(y,c),c=y):c=new Ui(c,m),this.g=c,this.j=this.g.g,this.h=this.i=-1}No.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};function Vi(c){var m=c.g;if(m.g==m.i)return!1;c.j=c.g.g;var y=yr(c.g)>>>0;if(m=y>>>3,y&=7,!(0<=y&&5>=y))throw Mi(y,c.j);if(1>m)throw Error("Invalid field number: "+m+" (at position "+c.j+")");return c.i=m,c.h=y,!0}function L(c){switch(c.h){case 0:if(c.h!=0)L(c);else e:{c=c.g;for(var m=c.g,y=m+10;m<y;)if(!(c.h[m++]&128)){c.g=m,nt(c);break e}throw _s()}break;case 1:c=c.g,c.g+=8,nt(c);break;case 2:c.h!=2?L(c):(m=yr(c.g)>>>0,c=c.g,c.g+=m,nt(c));break;case 5:c=c.g,c.g+=4,nt(c);break;case 3:m=c.i;do{if(!Vi(c))throw Error("Unmatched start-group tag: stream EOF");if(c.h==4){if(c.i!=m)throw Error("Unmatched end-group tag");break}L(c)}while(1);break;default:throw Mi(c.h,c.j)}}var j=[];function V(){this.i=[],this.h=0,this.g=new To}function Y(c,m){m.length!==0&&(c.i.push(m),c.h+=m.length)}function te(c,m){if(m=m.ba){Y(c,c.g.end());for(var y=0;y<m.length;y++)Y(c,m[y])}}var oe=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol(void 0):void 0;function re(c,m){Object.isFrozen(c)||(oe?c[oe]|=m:c.N!==void 0?c.N|=m:Object.defineProperties(c,{N:{value:m,configurable:!0,writable:!0,enumerable:!1}}))}function ce(c){var m;return oe?m=c[oe]:m=c.N,m??0}function J(c){return re(c,1),c}function Xe(c){return Array.isArray(c)?!!(ce(c)&2):!1}function ye(c){if(!Array.isArray(c))throw Error("cannot mark non-array as immutable");re(c,2)}function ut(c){return c!==null&&typeof c=="object"&&!Array.isArray(c)&&c.constructor===Object}var Ae=Object.freeze(J([]));function Xt(c){if(Xe(c.m))throw Error("Cannot mutate an immutable Message")}var Rt=typeof Symbol<"u"&&typeof Symbol.hasInstance<"u";function vr(c){return{value:c,configurable:!1,writable:!1,enumerable:!1}}function bt(c,m,y){return m===-1?null:m>=c.i?c.g?c.g[m]:void 0:y!==void 0&&y&&c.g&&(y=c.g[m],y!=null)?y:c.m[m+c.h]}function Me(c,m,y,E){E=E===void 0?!1:E,Xt(c),m<c.i&&!E?c.m[m+c.h]=y:(c.g||(c.g=c.m[c.i+c.h]={}))[m]=y}function Wn(c,m,y,E){y=y===void 0?!0:y,E=E===void 0?!1:E;var _=bt(c,m,E);return _==null&&(_=Ae),Xe(c.m)?y&&(ye(_),Object.freeze(_)):(_===Ae||Xe(_))&&(_=J(_.slice()),Me(c,m,_,E)),_}function Ft(c,m,y){return c=bt(c,m),c=c==null?c:+c,c??(y===void 0?0:y)}function Ze(c,m,y,E){c.j||(c.j={});var _=Xe(c.m),A=c.j[y];if(!A){E=Wn(c,y,!0,E===void 0?!1:E),A=[],_=_||Xe(E);for(var I=0;I<E.length;I++)A[I]=new m(E[I]),_&&ye(A[I].m);_&&(ye(A),Object.freeze(A)),c.j[y]=A}return A}function Yt(c,m,y,E,_){var A=A===void 0?!1:A;return Xt(c),A=Ze(c,y,m,A),y=E||new y,c=Wn(c,m),_!=null?(A.splice(_,0,y),c.splice(_,0,y.m)):(A.push(y),c.push(y.m)),y}function Dn(c,m){return c=bt(c,m),c??0}function Jr(c,m){return c=bt(c,m),c??""}function ko(c){switch(typeof c){case"number":return isFinite(c)?c:String(c);case"object":if(c&&!Array.isArray(c)){if(Un(c))return jn(c);if(c instanceof xs){var m=c.L;return m=m==null||typeof m=="string"?m:Mn&&m instanceof Uint8Array?jn(m):null,(c.L=m)||""}}}return c}function Hi(c){var m=xo;return m=m===void 0?Ki:m,on(c,m)}function Wi(c,m){if(c!=null){if(Array.isArray(c))c=on(c,m);else if(ut(c)){var y={},E;for(E in c)y[E]=Wi(c[E],m);c=y}else c=m(c);return c}}function on(c,m){for(var y=c.slice(),E=0;E<y.length;E++)y[E]=Wi(y[E],m);return Array.isArray(c)&&ce(c)&1&&J(y),y}function xo(c){return c&&typeof c=="object"&&c.toJSON?c.toJSON():(c=ko(c),Array.isArray(c)?Hi(c):c)}function Ki(c){return Un(c)?new Uint8Array(c):c}function Ds(c,m,y){c||(c=qp),qp=null;var E=this.constructor.h;c||(c=E?[E]:[]),this.h=(E?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=c;e:{if(E=this.m.length,c=E-1,E&&(E=this.m[c],ut(E))){this.i=c-this.h,this.g=E;break e}m!==void 0&&-1<m?(this.i=Math.max(m,c+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE}if(y)for(m=0;m<y.length;m++)if(c=y[m],c<this.i)c+=this.h,(E=this.m[c])?Array.isArray(E)&&J(E):this.m[c]=Ae;else{E=this.g||(this.g=this.m[this.i+this.h]={});var _=E[c];_?Array.isArray(_)&&J(_):E[c]=Ae}}Ds.prototype.toJSON=function(){return Hi(this.m)},Ds.prototype.toString=function(){return this.m.toString()};var qp;function Gi(){Ds.apply(this,arguments)}if(w(Gi,Ds),Rt){var Xp={};Object.defineProperties(Gi,(Xp[Symbol.hasInstance]=vr(function(){throw Error("Cannot perform instanceof checks for MutableMessage")}),Xp))}function Yp(c,m,y){if(y){var E={},_;for(_ in y){var A=y[_],I=A.ha;I||(E.F=A.la||A.fa.P,A.aa?(E.U=ed(A.aa),I=function(R){return function(B,W,Z){return R.F(B,W,Z,R.U)}}(E)):A.ca?(E.T=td(A.X.g,A.ca),I=function(R){return function(B,W,Z){return R.F(B,W,Z,R.T)}}(E)):I=E.F,A.ha=I),I(m,c,A.X),E={F:E.F,U:E.U,T:E.T}}}te(m,c)}var qi=Symbol();function Qp(c,m,y){return c[qi]||(c[qi]=function(E,_){return m(E,_,y)})}function Jp(c){var m=c[qi];if(!m){var y=od(c);m=function(E,_){return id(E,_,y)},c[qi]=m}return m}function x0(c){var m=c.aa;if(m)return Jp(m);if(m=c.ka)return Qp(c.X.g,m,c.ca)}function _0(c){var m=x0(c),y=c.X,E=c.fa.O;return m?function(_,A){return E(_,A,y,m)}:function(_,A){return E(_,A,y)}}function Zp(c,m,y,E,_,A){c=c();var I=0;for(c.length&&typeof c[0]!="number"&&(y(m,c[0]),I++);I<c.length;){y=c[I++];for(var R=I+1;R<c.length&&typeof c[R]!="number";)R++;var B=c[I++];switch(R-=I,R){case 0:E(m,y,B);break;case 1:E(m,y,B,c[I++]);break;case 2:_(m,y,B,c[I++],c[I++]);break;case 3:R=c[I++];var W=c[I++],Z=c[I++];Array.isArray(Z)?_(m,y,B,R,W,Z):A(m,y,B,R,W,Z);break;case 4:A(m,y,B,c[I++],c[I++],c[I++],c[I++]);break;default:throw Error("unexpected number of binary field arguments: "+R)}}return m}var Xi=Symbol();function ed(c){var m=c[Xi];if(!m){var y=rd(c);m=function(E,_){return ad(E,_,y)},c[Xi]=m}return m}function td(c,m){var y=c[Xi];return y||(y=function(E,_){return Yp(E,_,m)},c[Xi]=y),y}var nd=Symbol();function $0(c,m){c.push(m)}function D0(c,m,y){c.push(m,y.P)}function I0(c,m,y,E,_){var A=ed(_),I=y.P;c.push(m,function(R,B,W){return I(R,B,W,E,A)})}function C0(c,m,y,E,_,A){var I=td(E,A),R=y.P;c.push(m,function(B,W,Z){return R(B,W,Z,E,I)})}function rd(c){var m=c[nd];return m||Zp(c,c[nd]=[],$0,D0,I0,C0)}var sd=Symbol();function O0(c,m){c[0]=m}function A0(c,m,y,E){var _=y.O;c[m]=E?function(A,I,R){return _(A,I,R,E)}:_}function P0(c,m,y,E,_,A){var I=y.O,R=Jp(_);c[m]=function(B,W,Z){return I(B,W,Z,E,R,A)}}function R0(c,m,y,E,_,A,I){var R=y.O,B=Qp(E,_,A);c[m]=function(W,Z,ie){return R(W,Z,ie,E,B,I)}}function od(c){var m=c[sd];return m||Zp(c,c[sd]={},O0,A0,P0,R0)}function id(c,m,y){for(;Vi(m)&&m.h!=4;){var E=m.i,_=y[E];if(!_){var A=y[0];A&&(A=A[E])&&(_=y[E]=_0(A))}if((!_||!_(m,c,E))&&(_=m,E=c,A=_.j,L(_),!_.W)){var I=_.g.h;_=_.g.g,_=A===_?Qr||(Qr=new Uint8Array(0)):bo?I.slice(A,_):new Uint8Array(I.subarray(A,_)),(A=E.ba)?A.push(_):E.ba=[_]}}return c}function Yl(c,m,y){if(j.length){var E=j.pop();c&&(Vn(E.g,c),E.i=-1,E.h=-1),c=E}else c=new No(c);try{return id(new m,c,od(y))}finally{m=c.g,m.h=null,m.j=0,m.i=0,m.g=0,m.v=!1,c.i=-1,c.h=-1,100>j.length&&j.push(c)}}function ad(c,m,y){for(var E=y.length,_=E%2==1,A=_?1:0;A<E;A+=2)(0,y[A+1])(m,c,y[A]);Yp(c,m,_?y[0]:void 0)}function Ql(c,m){var y=new V;ad(c,y,rd(m)),Y(y,y.g.end()),c=new Uint8Array(y.h),m=y.i;for(var E=m.length,_=0,A=0;A<E;A++){var I=m[A];c.set(I,_),_+=I.length}return y.i=[c],c}function _o(c,m){return{O:c,P:m}}var wn=_o(function(c,m,y){if(c.h!==5)return!1;c=c.g;var E=c.h[c.g],_=c.h[c.g+1],A=c.h[c.g+2],I=c.h[c.g+3];return c.g+=4,nt(c),_=(E<<0|_<<8|A<<16|I<<24)>>>0,c=2*(_>>31)+1,E=_>>>23&255,_&=8388607,Me(m,y,E==255?_?NaN:1/0*c:E==0?c*Math.pow(2,-149)*_:c*Math.pow(2,E-150)*(_+Math.pow(2,23))),!0},function(c,m,y){if(m=bt(m,y),m!=null){Hn(c.g,8*y+5),c=c.g;var E=m;E=(y=0>E?1:0)?-E:E,E===0?0<1/E?Gt=qt=0:(qt=0,Gt=2147483648):isNaN(E)?(qt=0,Gt=2147483647):34028234663852886e22<E?(qt=0,Gt=(y<<31|2139095040)>>>0):11754943508222875e-54>E?(E=Math.round(E/Math.pow(2,-149)),qt=0,Gt=(y<<31|E)>>>0):(m=Math.floor(Math.log(E)/Math.LN2),E*=Math.pow(2,-m),E=Math.round(8388608*E),16777216<=E&&++m,qt=0,Gt=(y<<31|m+127<<23|E&8388607)>>>0),y=Gt,c.g.push(y>>>0&255),c.g.push(y>>>8&255),c.g.push(y>>>16&255),c.g.push(y>>>24&255)}}),F0=_o(function(c,m,y){if(c.h!==0)return!1;for(var E=c.g,_=128,A=0,I=c=0;4>I&&128<=_;I++)_=E.h[E.g++],nt(E),A|=(_&127)<<7*I;if(128<=_&&(_=E.h[E.g++],nt(E),A|=(_&127)<<28,c|=(_&127)>>4),128<=_)for(I=0;5>I&&128<=_;I++)_=E.h[E.g++],nt(E),c|=(_&127)<<7*I+3;if(128>_)E=A>>>0,_=c>>>0,(c=_&2147483648)&&(E=~E+1>>>0,_=~_>>>0,E==0&&(_=_+1>>>0)),E=4294967296*_+(E>>>0);else throw _s();return Me(m,y,c?-E:E),!0},function(c,m,y){if(m=bt(m,y),m!=null&&m!=null){Hn(c.g,8*y),c=c.g;var E=m;for(y=0>E,E=Math.abs(E),m=E>>>0,E=Math.floor((E-m)/4294967296),E>>>=0,y&&(E=~E>>>0,m=(~m>>>0)+1,4294967295<m&&(m=0,E++,4294967295<E&&(E=0))),Gt=m,qt=E,y=Gt,m=qt;0<m||127<y;)c.g.push(y&127|128),y=(y>>>7|m<<25)>>>0,m>>>=7;c.g.push(y)}}),L0=_o(function(c,m,y){return c.h!==0?!1:(Me(m,y,yr(c.g)),!0)},function(c,m,y){if(m=bt(m,y),m!=null&&m!=null)if(Hn(c.g,8*y),c=c.g,y=m,0<=y)Hn(c,y);else{for(m=0;9>m;m++)c.g.push(y&127|128),y>>=7;c.g.push(1)}}),ld=_o(function(c,m,y){if(c.h!==2)return!1;var E=yr(c.g)>>>0;c=c.g;var _=c.g;c.g+=E,nt(c),c=c.h;var A;if(G)(A=Se)||(A=Se=new TextDecoder("utf-8",{fatal:!0})),A=A.decode(c.subarray(_,_+E));else{E=_+E;for(var I=[],R=null,B,W,Z;_<E;)B=c[_++],128>B?I.push(B):224>B?_>=E?Ce():(W=c[_++],194>B||(W&192)!==128?(_--,Ce()):I.push((B&31)<<6|W&63)):240>B?_>=E-1?Ce():(W=c[_++],(W&192)!==128||B===224&&160>W||B===237&&160<=W||((A=c[_++])&192)!==128?(_--,Ce()):I.push((B&15)<<12|(W&63)<<6|A&63)):244>=B?_>=E-2?Ce():(W=c[_++],(W&192)!==128||(B<<28)+(W-144)>>30||((A=c[_++])&192)!==128||((Z=c[_++])&192)!==128?(_--,Ce()):(B=(B&7)<<18|(W&63)<<12|(A&63)<<6|Z&63,B-=65536,I.push((B>>10&1023)+55296,(B&1023)+56320))):Ce(),8192<=I.length&&(R=Je(R,I),I.length=0);A=Je(R,I)}return Me(m,y,A),!0},function(c,m,y){if(m=bt(m,y),m!=null){var E=!1;if(E=E===void 0?!1:E,ue){if(E&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(m))throw Error("Found an unpaired surrogate");m=(ne||(ne=new TextEncoder)).encode(m)}else{for(var _=0,A=new Uint8Array(3*m.length),I=0;I<m.length;I++){var R=m.charCodeAt(I);if(128>R)A[_++]=R;else{if(2048>R)A[_++]=R>>6|192;else{if(55296<=R&&57343>=R){if(56319>=R&&I<m.length){var B=m.charCodeAt(++I);if(56320<=B&&57343>=B){R=1024*(R-55296)+B-56320+65536,A[_++]=R>>18|240,A[_++]=R>>12&63|128,A[_++]=R>>6&63|128,A[_++]=R&63|128;continue}else I--}if(E)throw Error("Found an unpaired surrogate");R=65533}A[_++]=R>>12|224,A[_++]=R>>6&63|128}A[_++]=R&63|128}}m=A.subarray(0,_)}Hn(c.g,8*y+2),Hn(c.g,m.length),Y(c,c.g.end()),Y(c,m)}}),ud=_o(function(c,m,y,E,_){if(c.h!==2)return!1;m=Yt(m,y,E),y=c.g.i,E=yr(c.g)>>>0;var A=c.g.g+E,I=A-y;if(0>=I&&(c.g.i=A,_(m,c),I=A-c.g.g),I)throw Error("Message parsing ended unexpectedly. Expected to read "+(E+" bytes, instead read "+(E-I)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return c.g.g=A,c.g.i=y,!0},function(c,m,y,E,_){if(m=Ze(m,E,y),m!=null)for(E=0;E<m.length;E++){var A=c;Hn(A.g,8*y+2);var I=A.g.end();Y(A,I),I.push(A.h),A=I,_(m[E],c),I=c;var R=A.pop();for(R=I.h+I.g.length()-R;127<R;)A.push(R&127|128),R>>>=7,I.h++;A.push(R),I.h++}});function an(){Gi.apply(this,arguments)}if(w(an,Gi),Rt){var cd={};Object.defineProperties(an,(cd[Symbol.hasInstance]=vr(Object[Symbol.hasInstance]),cd))}function $o(c){an.call(this,c)}w($o,an);function fd(){return[1,L0,2,wn,3,ld,4,ld]}function Jl(c){an.call(this,c,-1,z0)}w(Jl,an),Jl.prototype.addClassification=function(c,m){return Yt(this,1,$o,c,m),this};function B0(){return[1,ud,$o,fd]}var z0=[1];function Yi(c){an.call(this,c)}w(Yi,an);function pd(){return[1,wn,2,wn,3,wn,4,wn,5,wn]}function dd(c){an.call(this,c,-1,M0)}w(dd,an);function j0(){return[1,ud,Yi,pd]}var M0=[1];function Zl(c){an.call(this,c)}w(Zl,an);function hd(){return[1,wn,2,wn,3,wn,4,wn,5,wn,6,F0]}var md=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],gd=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],yd=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],vd=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],wd=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Sd=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],U0=[].concat(l(md),l(gd),l(yd),l(vd),l(wd),l(Sd));function Ed(c,m,y){if(y=c.createShader(y===0?c.VERTEX_SHADER:c.FRAGMENT_SHADER),c.shaderSource(y,m),c.compileShader(y),!c.getShaderParameter(y,c.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+c.getShaderInfoLog(y));return y}function V0(c){return Ze(c,$o,1).map(function(m){return{index:Dn(m,1),ga:Ft(m,2),label:bt(m,3)!=null?Jr(m,3):void 0,displayName:bt(m,4)!=null?Jr(m,4):void 0}})}function H0(c){return{x:Ft(c,1),y:Ft(c,2),z:Ft(c,3),visibility:bt(c,4)!=null?Ft(c,4):void 0}}function eu(c,m){this.h=c,this.g=m,this.l=0}function bd(c,m,y){return W0(c,m),typeof c.g.canvas.transferToImageBitmap=="function"?Promise.resolve(c.g.canvas.transferToImageBitmap()):y?Promise.resolve(c.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(c.g.canvas):(c.i===void 0&&(c.i=document.createElement("canvas")),new Promise(function(E){c.i.height=c.g.canvas.height,c.i.width=c.g.canvas.width,c.i.getContext("2d",{}).drawImage(c.g.canvas,0,0,c.g.canvas.width,c.g.canvas.height),E(c.i)}))}function W0(c,m){var y=c.g;if(c.o===void 0){var E=Ed(y,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),_=Ed(y,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),A=y.createProgram();if(y.attachShader(A,E),y.attachShader(A,_),y.linkProgram(A),!y.getProgramParameter(A,y.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+y.getProgramInfoLog(A));E=c.o=A,y.useProgram(E),_=y.getUniformLocation(E,"sampler0"),c.j={K:y.getAttribLocation(E,"aVertex"),J:y.getAttribLocation(E,"aTex"),ma:_},c.u=y.createBuffer(),y.bindBuffer(y.ARRAY_BUFFER,c.u),y.enableVertexAttribArray(c.j.K),y.vertexAttribPointer(c.j.K,2,y.FLOAT,!1,0,0),y.bufferData(y.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),y.STATIC_DRAW),y.bindBuffer(y.ARRAY_BUFFER,null),c.s=y.createBuffer(),y.bindBuffer(y.ARRAY_BUFFER,c.s),y.enableVertexAttribArray(c.j.J),y.vertexAttribPointer(c.j.J,2,y.FLOAT,!1,0,0),y.bufferData(y.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),y.STATIC_DRAW),y.bindBuffer(y.ARRAY_BUFFER,null),y.uniform1i(_,0)}E=c.j,y.useProgram(c.o),y.canvas.width=m.width,y.canvas.height=m.height,y.viewport(0,0,m.width,m.height),y.activeTexture(y.TEXTURE0),c.h.bindTexture2d(m.glName),y.enableVertexAttribArray(E.K),y.bindBuffer(y.ARRAY_BUFFER,c.u),y.vertexAttribPointer(E.K,2,y.FLOAT,!1,0,0),y.enableVertexAttribArray(E.J),y.bindBuffer(y.ARRAY_BUFFER,c.s),y.vertexAttribPointer(E.J,2,y.FLOAT,!1,0,0),y.bindFramebuffer(y.DRAW_FRAMEBUFFER?y.DRAW_FRAMEBUFFER:y.FRAMEBUFFER,null),y.clearColor(0,0,0,0),y.clear(y.COLOR_BUFFER_BIT),y.colorMask(!0,!0,!0,!0),y.drawArrays(y.TRIANGLE_FAN,0,4),y.disableVertexAttribArray(E.K),y.disableVertexAttribArray(E.J),y.bindBuffer(y.ARRAY_BUFFER,null),c.h.bindTexture2d(0)}function K0(c){this.g=c}var G0=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function q0(c,m){return m+c}function Td(c,m){window[c]=m}function X0(c){var m=document.createElement("script");return m.setAttribute("src",c),m.setAttribute("crossorigin","anonymous"),new Promise(function(y){m.addEventListener("load",function(){y()},!1),m.addEventListener("error",function(){y()},!1),document.body.appendChild(m)})}function Y0(){return U(function(c){switch(c.g){case 1:return c.o=2,N(c,WebAssembly.instantiate(G0),4);case 4:c.g=3,c.o=0;break;case 2:return c.o=0,c.j=null,c.return(!1);case 3:return c.return(!0)}})}function tu(c){if(this.g=c,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.Z=!0,this.D=Promise.resolve(),this.Y="",this.C={},this.locateFile=c&&c.locateFile||q0,typeof window=="object")var m=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")m=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.$=m,c.options){m=a(Object.keys(c.options));for(var y=m.next();!y.done;y=m.next()){y=y.value;var E=c.options[y].default;E!==void 0&&(this.j[y]=typeof E=="function"?E():E)}}}e=tu.prototype,e.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function Q0(c){var m,y,E,_,A,I,R,B,W,Z,ie;return U(function(ae){switch(ae.g){case 1:return c.Z?(m=c.g.files===void 0?[]:typeof c.g.files=="function"?c.g.files(c.j):c.g.files,N(ae,Y0(),2)):ae.return();case 2:if(y=ae.h,typeof window=="object")return Td("createMediapipeSolutionsWasm",{locateFile:c.locateFile}),Td("createMediapipeSolutionsPackedAssets",{locateFile:c.locateFile}),I=m.filter(function(ee){return ee.data!==void 0}),R=m.filter(function(ee){return ee.data===void 0}),B=Promise.all(I.map(function(ee){var pe=Qi(c,ee.url);if(ee.path!==void 0){var Ee=ee.path;pe=pe.then(function(Be){return c.overrideFile(Ee,Be),Promise.resolve(Be)})}return pe})),W=Promise.all(R.map(function(ee){return ee.simd===void 0||ee.simd&&y||!ee.simd&&!y?X0(c.locateFile(ee.url,c.$)):Promise.resolve()})).then(function(){var ee,pe,Ee;return U(function(Be){if(Be.g==1)return ee=window.createMediapipeSolutionsWasm,pe=window.createMediapipeSolutionsPackedAssets,Ee=c,N(Be,ee(pe),2);Ee.h=Be.h,Be.g=0})}),Z=function(){return U(function(ee){return c.g.graph&&c.g.graph.url?ee=N(ee,Qi(c,c.g.graph.url),0):(ee.g=0,ee=void 0),ee})}(),N(ae,Promise.all([W,B,Z]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return E=m.filter(function(ee){return ee.simd===void 0||ee.simd&&y||!ee.simd&&!y}).map(function(ee){return c.locateFile(ee.url,c.$)}),importScripts.apply(null,l(E)),_=c,N(ae,createMediapipeSolutionsWasm(Module),6);case 6:_.h=ae.h,c.l=new OffscreenCanvas(1,1),c.h.canvas=c.l,A=c.h.GL.createContext(c.l,{antialias:!1,alpha:!1,ja:typeof WebGL2RenderingContext<"u"?2:1}),c.h.GL.makeContextCurrent(A),ae.g=4;break;case 7:if(c.l=document.createElement("canvas"),ie=c.l.getContext("webgl2",{}),!ie&&(ie=c.l.getContext("webgl",{}),!ie))return alert("Failed to create WebGL canvas context when passing video frame."),ae.return();c.G=ie,c.h.canvas=c.l,c.h.createContext(c.l,!0,!0,{});case 4:c.i=new c.h.SolutionWasm,c.Z=!1,ae.g=0}})}function J0(c){var m,y,E,_,A,I,R,B;return U(function(W){if(W.g==1){if(c.g.graph&&c.g.graph.url&&c.Y===c.g.graph.url)return W.return();if(c.s=!0,!c.g.graph||!c.g.graph.url){W.g=2;return}return c.Y=c.g.graph.url,N(W,Qi(c,c.g.graph.url),3)}for(W.g!=2&&(m=W.h,c.i.loadGraph(m)),y=a(Object.keys(c.C)),E=y.next();!E.done;E=y.next())_=E.value,c.i.overrideFile(_,c.C[_]);if(c.C={},c.g.listeners)for(A=a(c.g.listeners),I=A.next();!I.done;I=A.next())R=I.value,n2(c,R);B=c.j,c.j={},c.setOptions(B),W.g=0})}e.reset=function(){var c=this;return U(function(m){c.i&&(c.i.reset(),c.o={},c.u={}),m.g=0})},e.setOptions=function(c,m){var y=this;if(m=m||this.g.options){for(var E=[],_=[],A={},I=a(Object.keys(c)),R=I.next();!R.done;A={R:A.R,S:A.S},R=I.next()){var B=R.value;B in this.j&&this.j[B]===c[B]||(this.j[B]=c[B],R=m[B],R!==void 0&&(R.onChange&&(A.R=R.onChange,A.S=c[B],E.push(function(W){return function(){var Z;return U(function(ie){if(ie.g==1)return N(ie,W.R(W.S),2);Z=ie.h,Z===!0&&(y.s=!0),ie.g=0})}}(A))),R.graphOptionXref&&(B={valueNumber:R.type===1?c[B]:0,valueBoolean:R.type===0?c[B]:!1,valueString:R.type===2?c[B]:""},R=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),R.graphOptionXref),B),_.push(R))))}(E.length!==0||_.length!==0)&&(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat(_),this.A=(this.A===void 0?[]:this.A).concat(E))}};function Z0(c){var m,y,E,_,A,I,R;return U(function(B){switch(B.g){case 1:if(!c.s)return B.return();if(!c.A){B.g=2;break}m=a(c.A),y=m.next();case 3:if(y.done){B.g=5;break}return E=y.value,N(B,E(),4);case 4:y=m.next(),B.g=3;break;case 5:c.A=void 0;case 2:if(c.B){for(_=new c.h.GraphOptionChangeRequestList,A=a(c.B),I=A.next();!I.done;I=A.next())R=I.value,_.push_back(R);c.i.changeOptions(_),_.delete(),c.B=void 0}c.s=!1,B.g=0}})}e.initialize=function(){var c=this;return U(function(m){return m.g==1?N(m,Q0(c),2):m.g!=3?N(m,J0(c),3):N(m,Z0(c),0)})};function Qi(c,m){var y,E;return U(function(_){return m in c.H?_.return(c.H[m]):(y=c.locateFile(m,""),E=fetch(y).then(function(A){return A.arrayBuffer()}),c.H[m]=E,_.return(E))})}e.overrideFile=function(c,m){this.i?this.i.overrideFile(c,m):this.C[c]=m},e.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},e.send=function(c,m){var y=this,E,_,A,I,R,B,W,Z,ie;return U(function(ae){switch(ae.g){case 1:return y.g.inputs?(E=1e3*(m??performance.now()),N(ae,y.D,2)):ae.return();case 2:return N(ae,y.initialize(),3);case 3:for(_=new y.h.PacketDataList,A=a(Object.keys(c)),I=A.next();!I.done;I=A.next())if(R=I.value,B=y.g.inputs[R]){e:{var ee=c[R];switch(B.type){case"video":var pe=y.o[B.stream];if(pe||(pe=new eu(y.h,y.G),y.o[B.stream]=pe),pe.l===0&&(pe.l=pe.h.createTexture()),typeof HTMLVideoElement<"u"&&ee instanceof HTMLVideoElement)var Ee=ee.videoWidth,Be=ee.videoHeight;else typeof HTMLImageElement<"u"&&ee instanceof HTMLImageElement?(Ee=ee.naturalWidth,Be=ee.naturalHeight):(Ee=ee.width,Be=ee.height);Be={glName:pe.l,width:Ee,height:Be},Ee=pe.g,Ee.canvas.width=Be.width,Ee.canvas.height=Be.height,Ee.activeTexture(Ee.TEXTURE0),pe.h.bindTexture2d(pe.l),Ee.texImage2D(Ee.TEXTURE_2D,0,Ee.RGBA,Ee.RGBA,Ee.UNSIGNED_BYTE,ee),pe.h.bindTexture2d(0),pe=Be;break e;case"detections":for(pe=y.o[B.stream],pe||(pe=new K0(y.h),y.o[B.stream]=pe),pe.data||(pe.data=new pe.g.DetectionListData),pe.data.reset(ee.length),Be=0;Be<ee.length;++Be){Ee=ee[Be];var Pe=pe.data,yt=Pe.setBoundingBox,ln=Be,Lt=Ee.boundingBox,Ne=new Zl;if(Me(Ne,1,Lt.xCenter),Me(Ne,2,Lt.yCenter),Me(Ne,3,Lt.height),Me(Ne,4,Lt.width),Me(Ne,5,Lt.rotation),Me(Ne,6,Lt.rectId),Lt=Ql(Ne,hd),yt.call(Pe,ln,Lt),Ee.landmarks)for(Pe=0;Pe<Ee.landmarks.length;++Pe){Ne=Ee.landmarks[Pe];var ot=!!Ne.visibility;yt=pe.data,ln=yt.addNormalizedLandmark,Lt=Be,Ne=Object.assign(Object.assign({},Ne),{visibility:ot?Ne.visibility:0}),ot=new Yi,Me(ot,1,Ne.x),Me(ot,2,Ne.y),Me(ot,3,Ne.z),Ne.visibility&&Me(ot,4,Ne.visibility),Ne=Ql(ot,pd),ln.call(yt,Lt,Ne)}if(Ee.V)for(Pe=0;Pe<Ee.V.length;++Pe)yt=pe.data,ln=yt.addClassification,Lt=Be,Ne=Ee.V[Pe],ot=new $o,Me(ot,2,Ne.ga),Ne.index&&Me(ot,1,Ne.index),Ne.label&&Me(ot,3,Ne.label),Ne.displayName&&Me(ot,4,Ne.displayName),Ne=Ql(ot,fd),ln.call(yt,Lt,Ne)}pe=pe.data;break e;default:pe={}}}switch(W=pe,Z=B.stream,B.type){case"video":_.pushTexture2d(Object.assign(Object.assign({},W),{stream:Z,timestamp:E}));break;case"detections":ie=W,ie.stream=Z,ie.timestamp=E,_.pushDetectionList(ie);break;default:throw Error("Unknown input config type: '"+B.type+"'")}}return y.i.send(_),N(ae,y.D,4);case 4:_.delete(),ae.g=0}})};function e2(c,m,y){var E,_,A,I,R,B,W,Z,ie,ae,ee,pe,Ee,Be;return U(function(Pe){switch(Pe.g){case 1:if(!y)return Pe.return(m);for(E={},_=0,A=a(Object.keys(y)),I=A.next();!I.done;I=A.next())R=I.value,B=y[R],typeof B!="string"&&B.type==="texture"&&m[B.stream]!==void 0&&++_;1<_&&(c.I=!1),W=a(Object.keys(y)),I=W.next();case 2:if(I.done){Pe.g=4;break}if(Z=I.value,ie=y[Z],typeof ie=="string")return Ee=E,Be=Z,N(Pe,t2(c,Z,m[ie]),14);if(ae=m[ie.stream],ie.type==="detection_list"){if(ae){for(var yt=ae.getRectList(),ln=ae.getLandmarksList(),Lt=ae.getClassificationsList(),Ne=[],ot=0;ot<yt.size();++ot){var wr=Yl(yt.get(ot),Zl,hd);wr={boundingBox:{xCenter:Ft(wr,1),yCenter:Ft(wr,2),height:Ft(wr,3),width:Ft(wr,4),rotation:Ft(wr,5,0),rectId:Dn(wr,6)},landmarks:Ze(Yl(ln.get(ot),dd,j0),Yi,1).map(H0),V:V0(Yl(Lt.get(ot),Jl,B0))},Ne.push(wr)}yt=Ne}else yt=[];E[Z]=yt,Pe.g=7;break}if(ie.type==="proto_list"){if(ae){for(yt=Array(ae.size()),ln=0;ln<ae.size();ln++)yt[ln]=ae.get(ln);ae.delete()}else yt=[];E[Z]=yt,Pe.g=7;break}if(ae===void 0){Pe.g=3;break}if(ie.type==="float_list"){E[Z]=ae,Pe.g=7;break}if(ie.type==="proto"){E[Z]=ae,Pe.g=7;break}if(ie.type!=="texture")throw Error("Unknown output config type: '"+ie.type+"'");return ee=c.u[Z],ee||(ee=new eu(c.h,c.G),c.u[Z]=ee),N(Pe,bd(ee,ae,c.I),13);case 13:pe=Pe.h,E[Z]=pe;case 7:ie.transform&&E[Z]&&(E[Z]=ie.transform(E[Z])),Pe.g=3;break;case 14:Ee[Be]=Pe.h;case 3:I=W.next(),Pe.g=2;break;case 4:return Pe.return(E)}})}function t2(c,m,y){var E;return U(function(_){return typeof y=="number"||y instanceof Uint8Array||y instanceof c.h.Uint8BlobList?_.return(y):y instanceof c.h.Texture2dDataOut?(E=c.u[m],E||(E=new eu(c.h,c.G),c.u[m]=E),_.return(bd(E,y,c.I))):_.return(void 0)})}function n2(c,m){for(var y=m.name||"$",E=[].concat(l(m.wants)),_=new c.h.StringList,A=a(m.wants),I=A.next();!I.done;I=A.next())_.push_back(I.value);A=c.h.PacketListener.implement({onResults:function(R){for(var B={},W=0;W<m.wants.length;++W)B[E[W]]=R.get(W);var Z=c.listeners[y];Z&&(c.D=e2(c,B,m.outs).then(function(ie){ie=Z(ie);for(var ae=0;ae<m.wants.length;++ae){var ee=B[E[ae]];typeof ee=="object"&&ee.hasOwnProperty&&ee.hasOwnProperty("delete")&&ee.delete()}ie&&(c.D=ie)}))}}),c.i.attachMultiListener(_,A),_.delete()}e.onResults=function(c,m){this.listeners[m||"$"]=c},me("Solution",tu),me("OptionType",{BOOL:0,NUMBER:1,ia:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Nd(c){var m=this;c=c||{};var y={url:"face_detection_short.binarypb"},E={type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}};this.g=new tu({locateFile:c.locateFile,files:[{data:!0,url:"face_detection_short.binarypb"},{data:!0,url:"face_detection_short_range.tflite"},{simd:!0,url:"face_detection_solution_simd_wasm_bin.js"},{simd:!1,url:"face_detection_solution_wasm_bin.js"}],graph:y,listeners:[{wants:["detections","image_transformed"],outs:{image:"image_transformed",detections:{type:"detection_list",stream:"detections"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},model:{type:0,onChange:function(_){var A,I,R,B,W,Z;return U(function(ie){switch(ie.g){case 1:A=_==="short"?["face_detection_short_range.tflite"]:["face_detection_full_range_sparse.tflite"],I=a(A),R=I.next();case 2:if(R.done){ie.g=4;break}return B=R.value,W="third_party/mediapipe/modules/face_detection/"+B,N(ie,Qi(m.g,B),5);case 5:Z=ie.h,m.g.overrideFile(W,Z),R=I.next(),ie.g=2;break;case 4:return y.url=_==="short"?"face_detection_short.binarypb":"face_detection_full.binarypb",E.graphOptionXref.calculatorName=_==="short"?"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator":"facedetectionfullrangegpu__facedetectionfullrangecommon__TensorsToDetectionsCalculator",ie.return(!0)}})}},minDetectionConfidence:E}})}e=Nd.prototype,e.close=function(){return this.g.close(),Promise.resolve()},e.onResults=function(c){this.g.onResults(c)},e.initialize=function(){var c=this;return U(function(m){return N(m,c.g.initialize(),0)})},e.reset=function(){this.g.reset()},e.send=function(c){var m=this;return U(function(y){return N(y,m.g.send(c),0)})},e.setOptions=function(c){this.g.setOptions(c)},me("FaceDetection",Nd),me("FACEDETECTION_LIPS",md),me("FACEDETECTION_LEFT_EYE",gd),me("FACEDETECTION_LEFT_EYEBROW",yd),me("FACEDETECTION_RIGHT_EYE",vd),me("FACEDETECTION_RIGHT_EYEBROW",wd),me("FACEDETECTION_FACE_OVAL",Sd),me("FACEDETECTION_CONTOURS",U0),me("FACEDETECTION_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),me("VERSION","0.4.1646425229")}).call(Pn);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lw=1e-7,uw=1e-4;class cw{refCount(t){return Qt("refCount")}incRef(t){return Qt("incRef")}timerAvailable(){return!0}time(t){return Qt("time")}read(t){return Qt("read")}readSync(t){return Qt("readSync")}readToGPU(t,n){return Qt("readToGPU")}numDataIds(){return Qt("numDataIds")}disposeData(t,n){return Qt("disposeData")}write(t,n,r){return Qt("write")}move(t,n,r,s,o){return Qt("move")}memory(){return Qt("memory")}floatPrecision(){return Qt("floatPrecision")}epsilon(){return this.floatPrecision()===32?lw:uw}dispose(){return Qt("dispose")}}function Qt(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function vn(e,t,n=""){x(Mr(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function So(e){x(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Bl(e,t=[],n=!1){if(t==null&&(t=[]),Array.isArray(e)||Bn(e)&&!n)for(let r=0;r<e.length;++r)Bl(e[r],t,n);else t.push(e);return t}function ht(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function Mr(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ki(e){return e%1===0}function $a(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function zl(e,t){const n=t.length;return e=e==null?t.map((r,s)=>s):[].concat(e),x(e.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),x(e.every(r=>ki(r)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(r=>r<0?n+r:r)}function fw(e,t){const n=[],r=[],s=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||s?null:zl(t,e).sort();let i=0;for(let a=0;a<e.length;++a){if(o!=null){if(o[i]===a&&e[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${e[a]}' is not 1`);(o[i]==null||o[i]>a)&&e[a]===1&&(n.push(e[a]),r.push(a)),o[i]<=a&&i++}e[a]!==1&&(n.push(e[a]),r.push(a))}return{newShape:n,keptDims:r}}function pw(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else throw new Error(`Unknown data type ${e}`);return n}function dw(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else if(e==="string")n=new Array(t);else throw new Error(`Unknown data type ${e}`);return n}function hw(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function mw(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function Bn(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}function Jh(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function gw(e){if(e==null)return 0;let t=0;return e.forEach(n=>t+=n.length),t}function Ep(e){return typeof e=="string"||e instanceof String}function yw(e){return typeof e=="boolean"}function vw(e){return typeof e=="number"}function bp(e){return Array.isArray(e)?bp(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":vw(e)?"float32":Ep(e)?"string":yw(e)?"bool":"float32"}function Zh(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Tp(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function ty(e,t,n,r=!1){const s=new Array;if(t.length===1){const o=t[0]*(r?2:1);for(let i=0;i<o;i++)s[i]=n[e+i]}else{const o=t[0],i=t.slice(1),a=i.reduce((l,u)=>l*u)*(r?2:1);for(let l=0;l<o;l++)s[l]=ty(e+l*a,i,n,r)}return s}function jc(e,t,n=!1){if(e.length===0)return t[0];const r=e.reduce((s,o)=>s*o)*(n?2:1);if(r===0)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return ty(0,e,t,n)}function ny(e,t){const n=Np(e,t);for(let r=0;r<n.length;r++)n[r]=1;return n}function Np(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function ry(e){e.forEach(t=>{x(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function co(e){return e&&e.then&&typeof e.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const em="tfjsflags";class ww{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Sw,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(we().getBool("IS_TEST")||we().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,r){if(this.flagRegistry[t]={evaluationFn:n,setHook:r},this.urlFlags[t]!=null){const s=this.urlFlags[t];we().getBool("IS_TEST")||we().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${s}.`),this.set(t,s)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(co(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);em in t&&t[em].split(",").forEach(r=>{const[s,o]=r.split(":");this.urlFlags[s]=bw(s,o)})}}function Sw(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>(Ew(t,r[0],r[1]),r.join("="))),t}function Ew(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function bw(e,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}function we(){return sy}let sy=null;function Tw(e){sy=e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Cu;function oy(){if(Cu==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");Cu=e}return Cu}function Nw(){const e=oy();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function kp(e,t){const n=Nw();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}const kw="Abs",xw="Acos",_w="Acosh",iy="Add",$w="AddN",Dw="All",Iw="Any",Cw="ArgMax",Ow="ArgMin",Aw="Asin",Pw="Asinh",Rw="Atan",Fw="Atanh",Lw="Atan2",Bw="AvgPool",zw="AvgPool3D",jw="BatchMatMul",Mw="BatchToSpaceND",Uw="Bincount",Vw="BroadcastArgs",ay="Cast",Hw="Ceil",Ww="ClipByValue",Kw="Complex",Gw="ComplexAbs",qw="Concat",Xw="Conv2D",Yw="Conv2DBackpropFilter",Qw="Conv2DBackpropInput",Jw="Conv3D",Zw="Conv3DBackpropInputV2",eS="Cos",tS="Cosh",nS="Cumprod",rS="Cumsum",sS="CropAndResize",oS="DenseBincount",iS="DepthToSpace",aS="DepthwiseConv2dNative",lS="DepthwiseConv2dNativeBackpropFilter",uS="DepthwiseConv2dNativeBackpropInput",cS="Diag",fS="Dilation2D",pS="RealDiv",dS="Einsum",hS="Elu",mS="Erf",gS="Equal",yS="Exp",vS="ExpandDims",wS="Expm1",SS="FFT",ES="Fill",bS="FlipLeftRight",TS="Floor",NS="FloorDiv",kS="FusedBatchNorm",xS="GatherV2",_S="GatherNd",$S="Greater",DS="GreaterEqual",ly="Identity",IS="IFFT",CS="Imag",OS="IsFinite",AS="IsInf",PS="IsNan",RS="LeakyRelu",FS="Less",LS="LessEqual",BS="LinSpace",zS="Log",jS="Log1p",MS="LogicalAnd",US="LogicalNot",VS="LogicalOr",HS="LRN",WS="Max",KS="Maximum",GS="MaxPool",qS="MaxPool3D",XS="MaxPoolWithArgmax",YS="Mean",QS="Min",JS="Minimum",ZS="MirrorPad",eE="Mod",tE="Multinomial",nE="Multiply",rE="Neg",sE="NotEqual",oE="NonMaxSuppressionV3",iE="NonMaxSuppressionV4",aE="NonMaxSuppressionV5",lE="OnesLike",uE="OneHot",cE="Pack",fE="PadV2",pE="Pow",dE="Prelu",hE="Prod",mE="RaggedGather",gE="RaggedTensorToTensor",yE="Range",vE="Real",wE="Reciprocal",SE="Relu",EE="Reshape",bE="ResizeNearestNeighbor",TE="ResizeBilinear",NE="Relu6",kE="Reverse",xE="Round",_E="Rsqrt",$E="ScatterNd",DE="SearchSorted",IE="Select",CE="Selu",OE="Slice",AE="Sin",PE="Sinh",RE="Sign",FE="Sigmoid",LE="Softplus",BE="Sqrt",zE="Sum",jE="SpaceToBatchND",ME="SplitV",UE="Softmax",VE="SparseFillEmptyRows",HE="SparseReshape",WE="SparseSegmentMean",KE="SparseSegmentSum",GE="SparseToDense",qE="SquaredDifference",XE="StridedSlice",YE="StringNGrams",QE="StringSplit",JE="StringToHashBucketFast",ZE="Sub",eb="Tan",tb="Tanh",uy="Tile",nb="TopK",rb="Transform",Ou="Transpose",sb="Unique",ob="Unpack",ib="UnsortedSegmentSum",ab="ZerosLike",lb="Step",tm="FromPixels",ub="RotateWithOffset",nm="_FusedMatMul",rm="FusedConv2D",sm="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zo(...e){we().getBool("IS_TEST")||we().getBool("PROD")||console.warn(...e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cy=kp("kernelRegistry",()=>new Map),cb=kp("gradRegistry",()=>new Map);function Mc(e,t){const n=fb(e,t);return cy.get(n)}function om(e){return cb.get(e)}function im(e){const t=cy.entries(),n=[];for(;;){const{done:r,value:s}=t.next();if(r)break;const[o,i]=s,[a]=o.split("_");a===e&&n.push(i)}return n}function fb(e,t){return`${t}_${e}`}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pb(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function fy(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=Bl(e)),we().getBool("DEBUG")&&hw(e,t),pb(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){const n=new Uint8Array(e.length);for(let r=0;r<n.length;++r)Math.round(e[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${t}`)}function ll(){return we().platform.now()}function db(e,t="utf-8"){return t=t||"utf-8",we().platform.encode(e,t)}function am(e,t="utf-8"){return t=t||"utf-8",we().platform.decode(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class hb{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new gb)}profileKernel(t,n,r){let s;const o=()=>{s=r()};let i;const a=ll();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(o);else{o();for(const u of s)u.dataSync();i=Promise.resolve({kernelMs:ll()-a})}if(we().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<s.length;u++){const f=s[u];f.data().then(p=>{mb(p,f.dtype,t)})}return{kernelName:t,outputs:s,inputs:n,timeMs:i.then(u=>u.kernelMs),extraInfo:i.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:r,timeMs:s,inputs:o,extraInfo:i}=t;r.forEach(a=>{Promise.all([a.data(),s,i]).then(l=>{this.logger.logKernelProfile(n,a,l[0],l[1],o,l[2])})})}}function mb(e,t,n){if(t!=="float32")return!1;for(let r=0;r<e.length;r++){const s=e[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${n}'`),!0}return!1}class gb{logKernelProfile(t,n,r,s,o,i){const a=typeof s=="number"?$a(`${s}ms`,9):s.error,l=$a(t,25),u=n.rank,f=n.size,p=$a(n.shape.toString(),14);let d="";for(const h in o){const v=o[h];if(v!=null){const w=v.shape||n.shape,k=w.length;d+=`${h}: ${k}D ${k>0?w:""} `}}console.log(`%c${l}	%c${a}	%c${u}D ${p}	%c${f}	%c${d}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yb(e,t,n){const r={},s={};for(let l=0;l<t.length;l++)r[t[l].id]=!0;for(let l=0;l<e.length;l++){const u=e[l],f=u.inputs;for(const p in f){const d=f[p];let h=!1;for(let v=0;v<t.length;v++)if(r[d.id]){u.outputs.forEach(w=>r[w.id]=!0),h=!0,s[u.id]=!0;break}if(h)break}}const o={};o[n.id]=!0;const i={};for(let l=e.length-1;l>=0;l--){const u=e[l],f=u.inputs;for(let p=0;p<u.outputs.length;p++)if(o[u.outputs[p].id]){for(const d in f)o[f[d].id]=!0,i[u.id]=!0;break}}const a=[];for(let l=0;l<e.length;l++){const u=e[l];if(s[u.id]&&i[u.id]){const f={};for(const d in u.inputs){const h=u.inputs[d];r[h.id]&&(f[d]=h)}const p=Object.assign({},u);p.inputs=f,p.outputs=u.outputs,a.push(p)}}return a}function vb(e,t,n,r){for(let s=t.length-1;s>=0;s--){const o=t[s],i=[];if(o.outputs.forEach(l=>{const u=e[l.id];u!=null?i.push(u):i.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const a=o.gradient(i);for(const l in o.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const u=n(()=>a[l]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${u.dtype}'`);const f=o.inputs[l];if(!Mr(u.shape,f.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${l}' has shape '${u.shape}', which does not match the shape of the input '${f.shape}'`);if(e[f.id]==null)e[f.id]=u;else{const p=e[f.id];e[f.id]=r(p,u),p.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lm=20,jo=3,Au=7;function wb(e,t,n,r){const s=Tp(t),o=Sb(e,t,n,s),i=t.length,a=Da(e,t,n,s,o),l=["Tensor"];return r&&(l.push(`  dtype: ${n}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(u=>"    "+u).join(`
`)),l.join(`
`)}function Sb(e,t,n,r){const s=ht(t),o=r[r.length-1],i=new Array(o).fill(0),a=t.length,l=n==="complex64"?Go(e):e;if(a>1)for(let u=0;u<s/o;u++){const f=u*o;for(let p=0;p<o;p++)i[p]=Math.max(i[p],Ko(l[f+p],0,n).length)}return i}function Ko(e,t,n){let r;return Array.isArray(e)?r=`${parseFloat(e[0].toFixed(Au))} + ${parseFloat(e[1].toFixed(Au))}j`:Ep(e)?r=`'${e}'`:n==="bool"?r=py(e):r=parseFloat(e.toFixed(Au)).toString(),$a(r,t)}function py(e){return e===0?"false":"true"}function Da(e,t,n,r,s,o=!0){const i=n==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(n==="complex64"){const w=Go(e);return[Ko(w[0],0,n)]}return n==="bool"?[py(e[0])]:[e[0].toString()]}if(l===1){if(a>lm){const k=jo*i;let S=Array.from(e.slice(0,k)),T=Array.from(e.slice((a-jo)*i,a*i));return n==="complex64"&&(S=Go(S),T=Go(T)),["["+S.map((N,D)=>Ko(N,s[D],n)).join(", ")+", ..., "+T.map((N,D)=>Ko(N,s[a-jo+D],n)).join(", ")+"]"]}return["["+(n==="complex64"?Go(e):Array.from(e)).map((k,S)=>Ko(k,s[S],n)).join(", ")+"]"]}const u=t.slice(1),f=r.slice(1),p=r[0]*i,d=[];if(a>lm){for(let w=0;w<jo;w++){const k=w*p,S=k+p;d.push(...Da(e.slice(k,S),u,n,f,s,!1))}d.push("...");for(let w=a-jo;w<a;w++){const k=w*p,S=k+p;d.push(...Da(e.slice(k,S),u,n,f,s,w===a-1))}}else for(let w=0;w<a;w++){const k=w*p,S=k+p;d.push(...Da(e.slice(k,S),u,n,f,s,w===a-1))}const h=l===2?",":"";d[0]="["+d[0]+h;for(let w=1;w<d.length-1;w++)d[w]=" "+d[w]+h;let v=`,
`;for(let w=2;w<l;w++)v+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(o?"":v),d}function Go(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Uc{constructor(t,n,r){if(this.dtype=n,this.shape=t.slice(),this.size=ht(t),r!=null){const s=r.length;x(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||dw(n,this.size),this.strides=Tp(t)}set(t,...n){n.length===0&&(n=[0]),x(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const s of t){if(s<0||s>=this.shape[n]){const o=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(o)}n++}let r=t[t.length-1];for(let s=0;s<t.length-1;++s)r+=this.strides[s]*t[s];return this.values[r]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let r=0;r<t.length-1;++r)n+=this.strides[r]*t[r];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(t/this.strides[r]),t-=n[r]*this.strides[r];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return Nn().makeTensor(this.values,this.shape,this.dtype)}}let Nn=null,Cs=null;function Eb(e){Nn=e}function bb(e){Cs=e}class tt{constructor(t,n,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=ht(t),this.strides=Tp(t),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Cs.buffer(this.shape,this.dtype,t)}bufferSync(){return Cs.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return jc(this.shape,t,this.dtype==="complex64")}arraySync(){return jc(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=Nn().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(r=>am(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Nn().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Nn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>am(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Nn().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(Nn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Cs.print(this,t)}clone(){return this.throwIfDisposed(),Cs.clone(this)}toString(t=!1){const n=this.dataSync();return wb(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Cs.cast(this,t)}variable(t=!0,n,r){return this.throwIfDisposed(),Nn().makeVariable(this,t,n,r)}}Object.defineProperty(tt,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function Tb(){return kp("Tensor",()=>tt)}Tb();class Vc extends tt{constructor(t,n,r,s){super(t.shape,t.dtype,t.dataId,s),this.trainable=n,this.name=r}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Mr(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Nn().disposeTensor(this),this.dataId=t.dataId,Nn().incRef(this,null)}dispose(){Nn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Vc,Symbol.hasInstance,{value:e=>e instanceof tt&&e.assign!=null&&e.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var um;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(um||(um={}));var Hc;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(Hc||(Hc={}));var Wc;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(Wc||(Wc={}));var Kc;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(Kc||(Kc={}));var Gc;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(Gc||(Gc={}));const Nb={float32:Kc,int32:Hc,bool:Wc,complex64:Gc};function kb(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return Nb[e][t]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qe(e,t){if(e.dtype===t.dtype)return[e,t];const n=kb(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function xb(e,t){x(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function dy(e){const t=[];return hy(e,t,new Set),t}function hy(e,t,n){if(e==null)return;if(e instanceof tt){t.push(e);return}if(!_b(e))return;const r=e;for(const s in r){const o=r[s];n.has(o)||(n.add(o),hy(o,t,n))}}function _b(e){return Array.isArray(e)||typeof e=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pu(e){return e.kernelName!=null}class cm{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class fo{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new cm}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,r=1){return t in this.registryFactory?(zo(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:r},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(t);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new hb(this.backendInstance),!0}setupRegisteredKernels(){im(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){im(t).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof cw)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,o=r.then(i=>s<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,zo(`Initialization of backend ${t} failed`),zo(i.stack||i.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(r){return zo(`Initialization of backend ${t} failed`),zo(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n],{success:s,asyncInit:o}=this.initializeBackend(r);if(o||s)return{name:r,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const r=this.state.tensorInfo.get(n),s=r.backend,o=this.readSync(n),i=s.refCount(n);s.disposeData(n,!0),r.backend=t,t.move(n,o,r.shape,r.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let r=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=n(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,n,r){t();try{const s=r();return n(),s}catch(s){throw n(),s}}nextTensorId(){return fo.nextTensorId++}nextVariableId(){return fo.nextVariableId++}clone(t){const n=O.runKernel(ly,{x:t}),r={x:t},s=i=>({x:()=>{const a="float32",l={x:i},u={dtype:a};return O.runKernel(ay,l,u)}}),o=[];return this.addTapeNode(this.state.activeScope.name,r,[n],s,o,{}),n}runKernel(t,n,r){if(this.backendName==null&&this.backend,!(Mc(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,r){const s=this.backend.numDataIds();let o=0;r.forEach(l=>{o+=l.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=s-n-o-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let n,r=[];const s=this.isTapeOn(),o=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const u=Pu(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Pu(t)){const{kernelName:v,inputs:w,attrs:k}=t;this.backendName==null&&this.backend;const S=Mc(v,this.backendName);x(S!=null,()=>`Cannot find registered kernel '${v}' for backend '${this.backendName}'`),a=()=>{const T=this.backend.numDataIds();l=S.kernelFunc({inputs:w,attrs:k,backend:this.backend});const N=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(v,T,N);const D=N.map(C=>C.rank!=null?C:this.makeTensorFromTensorInfo(C));if(s){const C=this.getTensorsForGradient(v,w,D);r=this.saveTensorsForBackwardMode(C)}return D}}else{const{forwardFunc:v}=t,w=k=>{s&&(r=k.map(S=>this.keep(this.clone(S))))};a=()=>{const k=this.backend.numDataIds();l=this.tidy(()=>v(this.backend,w));const S=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,k,S),S}}const{inputs:f,attrs:p}=t,d=Pu(t)?null:t.backwardsFunc;let h;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=a():(h=this.profiler.profileKernel(u,f,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(h),n=h.outputs)}),s&&this.addTapeNode(u,f,n,d,r,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(f).map(v=>f[v]!=null?f[v].shape:null),outputShapes:n.map(v=>v.shape),kernelTimeMs:h.timeMs,extraInfo:h.extraInfo}),Array.isArray(l)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(t,n,r){const s=om(t);if(s!=null){const o=s.inputsToSave||[],i=s.outputsToSave||[];let a;s.saveAllInputs?(x(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(n).map(u=>n[u])):a=o.map(u=>n[u]);const l=r.filter((u,f)=>i[f]);return a.concat(l)}return[]}makeTensor(t,n,r,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let o=t;r==="string"&&Ep(t[0])&&(o=t.map(l=>db(l)));const i=s.write(o,n,r),a=new tt(n,r,i,this.nextTensorId());if(this.trackTensor(a,s),r==="string"){const l=this.state.tensorInfo.get(i),u=gw(o);this.state.numBytes+=u-l.bytes,l.bytes=u}return a}makeTensorFromDataId(t,n,r,s){r=r||"float32";const o={dataId:t,shape:n,dtype:r};return this.makeTensorFromTensorInfo(o,s)}makeTensorFromTensorInfo(t,n){const{dataId:r,shape:s,dtype:o}=t,i=new tt(s,o,r,this.nextTensorId());return this.trackTensor(i,n),i}makeVariable(t,n=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));const o=new Vc(t,n,r,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let r=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(r=t.size*Jh(t.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:r})),t instanceof Vc||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const r=t.size*Jh(t.dtype);this.state.numBytes-=r}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,r,s,o,i){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:r,saved:o},l=om(t);l!=null&&(s=l.gradFunc),s!=null&&(a.gradient=u=>(u=u.map((f,p)=>{if(f==null){const d=r[p],h=Np(d.size,d.dtype);return this.makeTensor(h,d.shape,d.dtype)}return f}),s(u.length>1?u:u[0],o,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=dy(t),r=new Set(n.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const i=this.state.activeScope.track[o];!i.kept&&!r.has(i.id)&&i.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(o=>{!o.kept&&o.scopeId===s.id&&this.track(o)})}gradients(t,n,r,s=!1){if(x(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));x(o instanceof tt,()=>"The result y returned by f() must be a tensor.");const i=yb(this.state.activeTape,n,o);if(!s&&i.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[o.id]=r??$b(o.shape),vb(a,i,u=>this.tidy(u),Db);const l=n.map(u=>a[u.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(u=>{for(const f of u.saved)f.dispose()}),this.state.activeTape=null),{value:o,grads:l}})}customGrad(t){return x(Zh(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{x(n.every(a=>a instanceof tt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};n.forEach((a,l)=>{s[l]=a});const o=(a,l)=>(r=t(...n,l),x(r.value instanceof tt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),x(Zh(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),i=(a,l)=>{const u=r.gradFunc(a,l),f=Array.isArray(u)?u:[u];x(f.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),x(f.every(d=>d instanceof tt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const p={};return f.forEach((d,h)=>{p[h]=()=>d}),p};return this.runKernelFunc({forwardFunc:o,backwardsFunc:i,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=ll(),r=await this.backend.time(t);return r.wallMs=ll()-n,r}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new cm;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}fo.nextTensorId=0;fo.nextVariableId=0;function $b(e){const t=ny(ht(e),"float32");return O.makeTensor(t,e,"float32")}function my(){const e=oy();if(e._tfengine==null){const t=new ww(e);e._tfengine=new fo(t)}return Tw(e._tfengine.ENV),Eb(()=>e._tfengine),e._tfengine}const O=my();function Db(e,t){const n={a:e,b:t};return O.runKernel(iy,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ib(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wt=we();Wt.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Wt.registerFlag("IS_BROWSER",()=>Ib());Wt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Wt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Wt.registerFlag("PROD",()=>!1);Wt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Wt.getBool("DEBUG"));Wt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Wt.registerFlag("IS_TEST",()=>!1);Wt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);Wt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Wt.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);Wt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Wt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gr(e,t){let n=e;if(Bn(e))return t==="string"?[]:[e.length];if(!Array.isArray(e))return[];const r=[];for(;Array.isArray(n)||Bn(n)&&t!=="string";)r.push(n.length),n=n[0];return Array.isArray(e)&&we().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&gy(e,r,[]),r}function gy(e,t,n){if(n=n||[],!Array.isArray(e)&&!Bn(e)){x(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}x(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`),x(e.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);const r=t.slice(1);for(let s=0;s<e.length;++s)gy(e[s],r,n.concat(s))}function fm(e,t,n,r){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function b(e,t,n,r="numeric"){if(e instanceof tt)return fm(r,e.dtype,t,n),e;let s=bp(e);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),fm(r,s,t,n),e==null||!Bn(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){const l=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${l}'`)}const o=Gr(e,s);!Bn(e)&&!Array.isArray(e)&&(e=[e]);const a=s!=="string"?fy(e,s):Bl(e,[],!0);return O.makeTensor(a,o,s)}function ul(e,t,n,r="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((o,i)=>b(o,`${t}[${i}]`,n,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yy="__op";function $(e){const t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+yy;const s=(...o)=>{O.startScope(n);try{const i=r(...o);return co(i)&&console.error("Cannot return a Promise inside of tidy."),O.endScope(i),i}catch(i){throw O.endScope(null),i}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cb(e,t){const n=b(e,"real","complex"),r=b(t,"imag","complex");vn(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return O.runKernel(Kw,s)}const Ur=$({complex_:Cb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qr(e,t,n,r){if(r==null&&(r=bp(e)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Bn(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){ry(t);const s=ht(t),o=ht(n);x(s===o,()=>`Based on the provided shape, [${t}], the tensor should have ${s} values but has ${o}`);for(let i=0;i<n.length;++i){const a=n[i],l=i===n.length-1?a!==ht(t.slice(i)):!0;x(n[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!Bn(e)&&!Array.isArray(e)&&(e=[e]),t=t||n,e=r!=="string"?fy(e,r):Bl(e,[],!0),O.makeTensor(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ln(e,t,n){const r=Gr(e,n);return qr(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qc={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cl=4;async function Ob(e,t){const n=[],r=[],s=Array.isArray(e)?e.map(i=>i.name):Object.keys(e);for(let i=0;i<s.length;++i){const a=s[i],l=Array.isArray(e)?e[i].tensor:e[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const u={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const f=new Promise(async p=>{const d=await l.bytes(),h=d.reduce((k,S)=>k+S.length,0)+cl*d.length,v=new Uint8Array(h);let w=0;for(let k=0;k<d.length;k++){const S=d[k],T=new Uint8Array(new Uint32Array([S.length]).buffer);v.set(T,w),w+=cl,v.set(S,w),w+=S.length}p(v)});r.push(f)}else r.push(l.data());t!=null&&(u.group=t),n.push(u)}const o=await Promise.all(r);return{data:Ab(o),specs:n}}function vy(e,t){const n={};let r,s=0;for(const o of t){const i=o.name,a=o.dtype,l=o.shape,u=ht(l);let f;if("quantization"in o){const p=o.quantization;if(p.dtype==="uint8"||p.dtype==="uint16"){if(!("min"in p&&"scale"in p))throw new Error(`Weight ${o.name} with quantization ${p.dtype} doesn't have corresponding metadata min and scale.`)}else if(p.dtype==="float16"){if(a!=="float32")throw new Error(`Weight ${o.name} is quantized with ${p.dtype} which only supports weights of type float32 not ${a}.`)}else throw new Error(`Weight ${o.name} has unknown quantization dtype ${p.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const d=qc[p.dtype],h=e.slice(s,s+u*d),v=p.dtype==="uint8"?new Uint8Array(h):new Uint16Array(h);if(a==="float32")if(p.dtype==="uint8"||p.dtype==="uint16"){f=new Float32Array(v.length);for(let w=0;w<v.length;w++){const k=v[w];f[w]=k*p.scale+p.min}}else if(p.dtype==="float16")r===void 0&&(r=zb()),f=r(v);else throw new Error(`Unsupported quantization type ${p.dtype} for weight type float32.`);else if(a==="int32"){if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error(`Unsupported quantization type ${p.dtype} for weight type int32.`);f=new Int32Array(v.length);for(let w=0;w<v.length;w++){const k=v[w];f[w]=Math.round(k*p.scale+p.min)}}else throw new Error(`Unsupported dtype in weight '${i}': ${a}`);s+=u*d}else if(a==="string"){const p=ht(o.shape);f=[];for(let d=0;d<p;d++){const h=new Uint32Array(e.slice(s,s+cl))[0];s+=cl;const v=new Uint8Array(e.slice(s,s+h));f.push(v),s+=h}}else{const p=qc[a],d=e.slice(s,s+u*p);if(a==="float32")f=new Float32Array(d);else if(a==="int32")f=new Int32Array(d);else if(a==="bool")f=new Uint8Array(d);else if(a==="complex64"){f=new Float32Array(d);const h=new Float32Array(f.length/2),v=new Float32Array(f.length/2);for(let S=0;S<h.length;S++)h[S]=f[S*2],v[S]=f[S*2+1];const w=Ln(h,l,"float32"),k=Ln(v,l,"float32");n[i]=Ur(w,k),w.dispose(),k.dispose()}else throw new Error(`Unsupported dtype in weight '${i}': ${a}`);s+=u*p}a!=="complex64"&&(n[i]=Ln(f,l,a))}return n}function Ab(e){if(e===null)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach(o=>{if(t+=o.byteLength,n.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const r=new Uint8Array(t);let s=0;return n.forEach(o=>{r.set(new Uint8Array(o.buffer),s),s+=o.byteLength}),r.buffer}const xp=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function pm(e){return xp?Buffer.byteLength(e):new Blob([e]).size}function Pb(e){if(xp)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let r=0,s=t.length;r<s;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function Rb(e){if(xp){const r=Buffer.from(e,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;++r)n.set([t.charCodeAt(r)],r);return n.buffer}function _p(e){if(e.length===1)return e[0];let t=0;e.forEach(s=>{t+=s.byteLength});const n=new Uint8Array(t);let r=0;return e.forEach(s=>{n.set(new Uint8Array(s),r),r+=s.byteLength}),n.buffer}function dm(e){const t="/";for(e=e.trim();e.endsWith(t);)e=e.slice(0,e.length-1);const n=e.split(t);return n[n.length-1]}function wy(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function Sy(e,t,n){const r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=n}return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),r}async function $p(e,t){let n,r;return e.weightsManifest!=null&&([n,r]=await t(e.weightsManifest)),Sy(e,n,r)}function Bi(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:pm(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:pm(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}function Ey(e){const t=[];for(const n of e)t.push(...n.weights);return t}function Fb(){const e=n=>{let r=n<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}function Lb(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function Bb(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function zb(){const e=Fb(),t=Lb(),n=Bb();return r=>{const s=new ArrayBuffer(4*r.length),o=new Uint32Array(s);for(let i=0;i<r.length;i++){const a=r[i],l=e[n[a>>10]+(a&1023)]+t[a>>10];o[i]=l}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ue{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Ue.instance==null&&(Ue.instance=new Ue),Ue.instance}static registerSaveRouter(t){Ue.getInstance().saveRouters.push(t)}static registerLoadRouter(t){Ue.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return Ue.getHandlers(t,"save")}static getLoadHandlers(t,n){return Ue.getHandlers(t,"load",n)}static getHandlers(t,n,r){const s=[];return(n==="load"?Ue.getInstance().loadRouters:Ue.getInstance().saveRouters).forEach(i=>{const a=i(t,r);a!==null&&s.push(a)}),s}}const jb=e=>Ue.registerSaveRouter(e),Mb=e=>Ue.registerLoadRouter(e),Ub=e=>Ue.getSaveHandlers(e),Vb=(e,t)=>Ue.getLoadHandlers(e,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xc="tensorflowjs",Yc=1,is="models_store",_r="model_info_store";function by(){if(!we().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Qc(e){const t=e.result;t.createObjectStore(is,{keyPath:"modelPath"}),t.createObjectStore(_r,{keyPath:"modelPath"})}class ys{constructor(t){if(this.indexedDB=by(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((r,s)=>{const o=this.indexedDB.open(Xc,Yc);o.onupgradeneeded=()=>Qc(o),o.onsuccess=()=>{const i=o.result;if(n==null){const a=i.transaction(is,"readonly"),u=a.objectStore(is).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return i.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(u.result.modelArtifacts)},u.onerror=f=>(i.close(),s(u.error)),a.oncomplete=()=>i.close()}else{const a=Bi(n),l=i.transaction(_r,"readwrite");let u=l.objectStore(_r);const f=u.put({modelPath:this.modelPath,modelArtifactsInfo:a});let p;f.onsuccess=()=>{p=i.transaction(is,"readwrite");const h=p.objectStore(is).put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:a});h.onsuccess=()=>r({modelArtifactsInfo:a}),h.onerror=v=>{u=l.objectStore(_r);const w=u.delete(this.modelPath);w.onsuccess=()=>(i.close(),s(h.error)),w.onerror=k=>(i.close(),s(h.error))}},f.onerror=d=>(i.close(),s(f.error)),l.oncomplete=()=>{p==null?i.close():p.oncomplete=()=>i.close()}}},o.onerror=i=>s(o.error)})}}ys.URL_SCHEME="indexeddb://";const Ty=e=>we().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ys.URL_SCHEME)?Hb(e.slice(ys.URL_SCHEME.length)):null;Ue.registerSaveRouter(Ty);Ue.registerLoadRouter(Ty);function Hb(e){return new ys(e)}function Wb(e){return e.startsWith(ys.URL_SCHEME)?e.slice(ys.URL_SCHEME.length):e}class Kb{constructor(){this.indexedDB=by()}async listModels(){return new Promise((t,n)=>{const r=this.indexedDB.open(Xc,Yc);r.onupgradeneeded=()=>Qc(r),r.onsuccess=()=>{const s=r.result,o=s.transaction(_r,"readonly"),a=o.objectStore(_r).getAll();a.onsuccess=()=>{const l={};for(const u of a.result)l[u.modelPath]=u.modelArtifactsInfo;t(l)},a.onerror=l=>(s.close(),n(a.error)),o.oncomplete=()=>s.close()},r.onerror=s=>n(r.error)})}async removeModel(t){return t=Wb(t),new Promise((n,r)=>{const s=this.indexedDB.open(Xc,Yc);s.onupgradeneeded=()=>Qc(s),s.onsuccess=()=>{const o=s.result,i=o.transaction(_r,"readwrite"),a=i.objectStore(_r),l=a.get(t);let u;l.onsuccess=()=>{if(l.result==null)return o.close(),r(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const f=a.delete(t),p=()=>{u=o.transaction(is,"readwrite");const h=u.objectStore(is).delete(t);h.onsuccess=()=>n(l.result.modelArtifactsInfo),h.onerror=v=>r(l.error)};f.onsuccess=p,f.onerror=d=>(p(),o.close(),r(l.error))}},l.onerror=f=>(o.close(),r(l.error)),i.oncomplete=()=>{u==null?o.close():u.oncomplete=()=>o.close()}},s.onerror=o=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jn="/",Os="tensorflowjs_models",Ny="info",Gb="model_topology",qb="weight_specs",Xb="weight_data",Yb="model_metadata";function ky(e){return{info:[Os,e,Ny].join(Jn),topology:[Os,e,Gb].join(Jn),weightSpecs:[Os,e,qb].join(Jn),weightData:[Os,e,Xb].join(Jn),modelMetadata:[Os,e,Yb].join(Jn)}}function xy(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function Qb(e){const t=e.split(Jn);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Jn)}function Jb(e){return e.startsWith(vs.URL_SCHEME)?e.slice(vs.URL_SCHEME.length):e}class vs{constructor(t){if(!we().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=ky(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),s=Bi(t);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,Pb(t.weightData));const o={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:s}}catch{throw xy(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=s;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const a=JSON.parse(o);n.format=a.format,n.generatedBy=a.generatedBy,n.convertedBy=a.convertedBy,a.signature!=null&&(n.signature=a.signature),a.userDefinedMetadata!=null&&(n.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(n.modelInitializer=a.modelInitializer),a.trainingConfig!=null&&(n.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=Rb(i),n}}vs.URL_SCHEME="localstorage://";const _y=e=>we().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(vs.URL_SCHEME)?Zb(e.slice(vs.URL_SCHEME.length)):null;Ue.registerSaveRouter(_y);Ue.registerLoadRouter(_y);function Zb(e){return new vs(e)}class eT{constructor(){x(we().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),x(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=Os+Jn,r=Jn+Ny;for(let s=0;s<this.LS.length;++s){const o=this.LS.key(s);if(o.startsWith(n)&&o.endsWith(r)){const i=Qb(o);t[i]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){t=Jb(t);const n=ky(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return xy(n),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eo="://";class kt{constructor(){this.managers={}}static getInstance(){return kt.instance==null&&(kt.instance=new kt),kt.instance}static registerManager(t,n){x(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(eo)&&(t=t.slice(0,t.indexOf(eo))),x(t.length>0,()=>"scheme must not be an empty string.");const r=kt.getInstance();x(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){const n=kt.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(kt.getInstance().managers)}}function Ia(e){if(e.indexOf(eo)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${kt.getSchemes().join(",")}`);return{scheme:e.split(eo)[0],path:e.split(eo)[1]}}async function $y(e,t,n=!1){x(e!==t,()=>`Old path and new path are the same: '${e}'`);const r=Ue.getLoadHandlers(e);x(r.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),x(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`);const s=r[0],o=Ue.getSaveHandlers(t);x(o.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),x(o.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);const i=o[0],a=Ia(e).scheme,l=Ia(e).path,u=a===Ia(e).scheme,f=await s.load();n&&u&&await kt.getManager(a).removeModel(l);const p=await i.save(f);return n&&!u&&await kt.getManager(a).removeModel(l),p.modelArtifactsInfo}async function tT(){const e=kt.getSchemes(),t={};for(const n of e){const r=await kt.getManager(n).listModels();for(const s in r){const o=n+eo+s;t[o]=r[s]}}return t}async function nT(e){const t=Ia(e);return kt.getManager(t.scheme).removeModel(t.path)}async function rT(e,t){return $y(e,t,!1)}async function sT(e,t){return $y(e,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class oT{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(!window||!we().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}}if(we().get("IS_BROWSER")){we().setPlatform("browser",new oT);try{kt.registerManager(vs.URL_SCHEME,new eT)}catch{}try{kt.registerManager(ys.URL_SCHEME,new Kb)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iT={importFetch:()=>require("node-fetch")};let Ru;class aT{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return we().global.fetch!=null?we().global.fetch(t,n):(Ru==null&&(Ru=iT.importFetch()),Ru(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}}we().get("IS_NODE")&&!we().get("IS_BROWSER")&&we().setPlatform("node",new aT);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ur(e,t="float32",n){return t=t||"float32",ry(e),new Uc(e,t,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lT(e,t){const n=b(e,"x","cast");if(!mw(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:t};return O.runKernel(ay,r,s)}const Qe=$({cast_:lT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uT(e){const n={x:b(e,"x","clone","string_or_numeric")};return O.runKernel(ly,n)}const Lr=$({clone_:uT});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dy(e,t=!1){console.log(e.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */my();const cT={buffer:ur,cast:Qe,clone:Lr,print:Dy};bb(cT);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fT="model",pT=".json",dT=".weights.bin";function hm(e){return new Promise(t=>setTimeout(t)).then(e)}class ws{constructor(t){if(!we().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(ws.URL_SCHEME)&&(t=t.slice(ws.URL_SCHEME.length)),(t==null||t.length===0)&&(t=fT),this.modelJsonFileName=t+pT,this.weightDataFileName=t+dT}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],s=wy(t,r),o=window.URL.createObjectURL(new Blob([JSON.stringify(s)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=o,await hm(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const a=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;a.download=this.weightDataFileName,a.href=n,await hm(()=>a.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Bi(t)}}}}ws.URL_SCHEME="downloads://";class hT{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,n)=>{const r=new FileReader;r.onload=s=>{const o=JSON.parse(s.target.result),i=o.modelTopology;if(i==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(o.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:i});return}const l=$p(o,u=>this.loadWeights(u));t(l)},r.onerror=s=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(t){const n=[],r=[];for(const i of t)n.push(...i.weights),r.push(...i.paths);const s=this.checkManifestAndWeightFiles(t),o=r.map(i=>this.loadWeightsFile(i,s[i]));return Promise.all(o).then(i=>[n,_p(i)])}loadWeightsFile(t,n){return new Promise((r,s)=>{const o=new FileReader;o.onload=i=>{const a=i.target.result;r(a)},o.onerror=i=>s(`Failed to weights data from file of path '${t}'.`),o.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(t){const n=[],r=this.weightsFiles.map(o=>dm(o.name)),s={};for(const o of t)o.paths.forEach(i=>{const a=dm(i);if(n.indexOf(a)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(n.push(a),r.indexOf(a)===-1)throw new Error(`Weight file with basename '${a}' is not provided.`);s[i]=this.weightsFiles[r.indexOf(a)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const mT=e=>we().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ws.URL_SCHEME)?gT(e.slice(ws.URL_SCHEME.length)):null;Ue.registerSaveRouter(mT);function gT(e="model"){return new ws(e)}function yT(e){return new hT(e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mm(e,t,n,r){i(e),n=n??0,r=r??1,a(n,r);let s=0;const o=l=>(l.then(u=>{const f=n+ ++s/e.length*(r-n);return t(f),u}),l);function i(l){x(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,u){x(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),x(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),x(u>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${u}`)}return Promise.all(e.map(o))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Iy(e,t){t==null&&(t={});const n=t.fetchFunc==null?we().platform.fetch:t.fetchFunc,r=e.map(p=>n(p,t.requestInit,{isBinary:!0})),s=0,o=.5,a=(t.onProgress==null?await Promise.all(r):await mm(r,t.onProgress,s,o)).map(p=>p.arrayBuffer()),l=.5,u=1;return t.onProgress==null?await Promise.all(a):await mm(a,t.onProgress,l,u)}async function vT(e,t="",n,r){return Cy(i=>Iy(i,{requestInit:r}))(e,t,n)}function Cy(e){return async(t,n="",r)=>{const s=t.map(()=>!1),o={},i=r!=null?r.map(()=>!1):[],a=[];if(t.forEach((h,v)=>{let w=0;h.weights.forEach(k=>{const S="quantization"in k?k.quantization.dtype:k.dtype,T=qc[S]*ht(k.shape),N=()=>{s[v]=!0,o[v]==null&&(o[v]=[]),o[v].push({manifestEntry:k,groupOffset:w,sizeBytes:T})};r!=null?r.forEach((D,C)=>{D===k.name&&(N(),i[C]=!0)}):N(),a.push(k.name),w+=T})}),!i.every(h=>h)){const h=r.filter((v,w)=>!i[w]);throw new Error(`Could not find weights in manifest with names: ${h.join(", ")}. 
Manifest JSON has weights with names: ${a.join(", ")}.`)}const l=s.reduce((h,v,w)=>(v&&h.push(w),h),[]),u=[];l.forEach(h=>{t[h].paths.forEach(v=>{const w=n+(n.endsWith("/")?"":"/")+v;u.push(w)})});const f=await e(u),p={};let d=0;return l.forEach(h=>{const v=t[h].paths.length;let w=0;for(let D=0;D<v;D++)w+=f[d+D].byteLength;const k=new ArrayBuffer(w),S=new Uint8Array(k);let T=0;for(let D=0;D<v;D++){const C=new Uint8Array(f[d+D]);S.set(C,T),T+=C.byteLength}o[h].forEach(D=>{const C=k.slice(D.groupOffset,D.groupOffset+D.sizeBytes),P=vy(C,[D.manifestEntry]);for(const F in P)p[F]=P[F]}),d+=v}),p}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wT="application/octet-stream",ST="application/json";class Dp{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(x(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=we().platform.fetch,x(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&x(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],s=wy(t,r);n.body.append("model.json",new Blob([JSON.stringify(s)],{type:ST}),"model.json"),t.weightData!=null&&n.body.append("model.weights.bin",new Blob([t.weightData],{type:wT}),"model.weights.bin");const o=await this.fetch(this.path,n);if(o.ok)return{modelArtifactsInfo:Bi(t),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const r=n.modelTopology,s=n.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return $p(n,o=>this.loadWeights(o))}async loadWeights(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=ET(n),o=this.weightPathPrefix||r,i=Ey(t),a=[],l=[];for(const f of t)for(const p of f.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(p)):a.push(o+p+s);this.weightUrlConverter&&a.push(...await Promise.all(l));const u=await Iy(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,_p(u)]}}Dp.URL_SCHEME_REGEX=/^https?:\/\//;function ET(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),s=n>t?e.substring(n):"";return[r+"/",s]}function Jc(e){return e.match(Dp.URL_SCHEME_REGEX)!=null}const Oy=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(e)?n=e.every(r=>Jc(r)):n=Jc(e),n)return Ip(e,t)}return null};Ue.registerSaveRouter(Oy);Ue.registerLoadRouter(Oy);function Ip(e,t){return new Dp(e,t)}function bT(e,t){return Ip(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Fu{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class Ay{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class TT{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function NT(e,t,n,r){const s=arguments;return new TT(Py(...s))}function Py(e,t,n,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new Fu(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Fu({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Fu({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r}))}function kT(e){return new Ay(e)}function xT(e){return new Ay(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ry=Object.freeze(Object.defineProperty({__proto__:null,browserFiles:yT,browserHTTPRequest:bT,concatenateArrayBuffers:_p,copyModel:rT,decodeWeights:vy,encodeWeights:Ob,fromMemory:NT,fromMemorySync:Py,getLoadHandlers:Vb,getModelArtifactsForJSON:$p,getModelArtifactsForJSONSync:Sy,getModelArtifactsInfoForJSON:Bi,getSaveHandlers:Ub,getWeightSpecs:Ey,http:Ip,isHTTPScheme:Jc,listModels:tT,loadWeights:vT,moveModel:sT,registerLoadRouter:Mb,registerSaveRouter:jb,removeModel:nT,weightsLoaderFactory:Cy,withSaveHandler:kT,withSaveHandlerSync:xT},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _T(e,t,n=!1,r=!1){let s=b(e,"a","matMul"),o=b(t,"b","matMul");[s,o]=qe(s,o);const i={a:s,b:o},a={transposeA:n,transposeB:r};return O.runKernel(jw,i,a)}const $e=$({matMul_:_T});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $T(e,t,n=1,r=0,s="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const i={indices:b(e,"indices","oneHot","int32")},a={dtype:s,depth:t,onValue:n,offValue:r};return O.runKernel(uE,i,a)}const DT=$({oneHot_:$T});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IT(){return O}function mt(e,t){return O.tidy(e,t)}function to(e){dy(e).forEach(n=>n.dispose())}function $r(e){return O.keep(e)}function CT(e){return O.setBackend(e)}function OT(e){O.removeBackend(e)}function AT(e){return O.findBackendFactory(e)}function PT(e,t,n=1){return O.registerBackend(e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RT(e){const n={input:b(e,"input","imag")};return O.runKernel(CS,n)}const jl=$({imag_:RT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FT(e){const n={x:b(e,"x","neg")};return O.runKernel(rE,n)}const rr=$({neg_:FT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LT(e){const n={input:b(e,"input","real")};return O.runKernel(vE,n)}const xi=$({real_:LT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BT(e,t,n){const r=b(e,"x","transpose");if(t==null&&(t=r.shape.map((i,a)=>a).reverse()),x(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(i=>{x(i>=0&&i<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();const s={x:r},o={perm:t};return r.dtype==="complex64"?mt(()=>{let i=xi(r),a=jl(r);return i=O.runKernel(Ou,{x:i},o),a=O.runKernel(Ou,{x:a},o),n&&(a=rr(a)),Ur(i,a)}):O.runKernel(Ou,s,o)}const Zc=$({transpose_:BT});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zT(e,t){const n=[];for(let r=0;r<t.length;r++){const s=e[e.length-r-1],o=t.length-r-1,i=t[o];(s==null||s===1&&i>1)&&n.unshift(o)}return n}function lt(e,t){const n=[],r=Math.max(e.length,t.length);for(let s=0;s<r;s++){let o=e[e.length-s-1];o==null&&(o=1);let i=t[t.length-s-1];if(i==null&&(i=1),o===1)n.unshift(i);else if(i===1)n.unshift(o);else if(o!==i){const a=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(a)}else n.unshift(o)}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fy(e,t,n){if(So(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=Gr(e,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return qr(e,t,r,n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Zr;function jT(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,s=!1,o=!1,i=!1,a=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)o=!0;else if(e.getContext!=null)i=!0;else if(typeof ImageBitmap<"u"&&e instanceof ImageBitmap)a=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(Mc(tm,O.backendName)!=null){const v={pixels:e},w={numChannels:t};return O.runKernel(tm,v,w)}const[u,f]=s?[e.videoWidth,e.videoHeight]:[e.width,e.height];let p;if(i)p=e.getContext("2d").getImageData(0,0,u,f).data;else if(r||n)p=e.data;else if(o||s||a){if(Zr==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Zr=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Zr=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Zr.canvas.width=u,Zr.canvas.height=f,Zr.drawImage(e,0,0,u,f),p=Zr.getImageData(0,0,u,f).data}let d;if(t===4)d=new Int32Array(p);else{const v=u*f;d=new Int32Array(v*t);for(let w=0;w<v;w++)for(let k=0;k<t;++k)d[w*t+k]=p[w*4+k]}return Fy(d,[f,u,t],"int32")}async function MT(e,t){let n=b(e,"img","toPixels");if(!(e instanceof tt)){const u=n;n=Qe(u,"int32"),u.dispose()}if(n.rank!==2&&n.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);const[r,s]=n.shape.slice(0,2),o=n.rank===2?1:n.shape[2];if(o>4||o===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${o}`);if(n.dtype!=="float32"&&n.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`);const i=await n.data(),a=n.dtype==="float32"?255:1,l=new Uint8ClampedArray(s*r*4);for(let u=0;u<r*s;++u){const f=[0,0,0,255];for(let d=0;d<o;d++){const h=i[u*o+d];if(n.dtype==="float32"){if(h<0||h>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${h}.`)}else if(n.dtype==="int32"&&(h<0||h>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${h}.`);o===1?(f[0]=h*a,f[1]=h*a,f[2]=h*a):f[d]=h*a}const p=u*4;l[p+0]=Math.round(f[0]),l[p+1]=Math.round(f[1]),l[p+2]=Math.round(f[2]),l[p+3]=Math.round(f[3])}if(t!=null){t.width=s,t.height=r;const u=t.getContext("2d"),f=new ImageData(l,s,r);u.putImageData(f,0,0)}return n!==e&&n.dispose(),l}const UT=$({fromPixels_:jT});function VT(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,s=t.rank>1?t.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(o+` update.rank < ${s}. `);if(e.length<r+(n.rank-s))throw new Error(o+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+e.length-r)throw new Error(o+` update.rank != ${s+e.length-r}`);for(let i=0;i<s;++i)if(n.shape[i]!==t.shape[i])throw new Error(o+` updates.shape[${i}] (${n.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let i=0;i<n.rank-s;++i)if(n.shape[i+s]!==e[i+r])throw new Error(o+` updates.shape[${i+s}] (${n.shape[i+s]}) != shape[${i+s}] (${e[i+s]})`)}function HT(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}VT(n,t,e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WT(e,t){let n=b(e,"a","add"),r=b(t,"b","add");[n,r]=qe(n,r);const s={a:n,b:r};return O.runKernel(iy,s)}const Re=$({add_:WT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KT(e,t){let n=b(e,"a","floorDiv"),r=b(t,"b","floorDiv");[n,r]=qe(n,r);const s={a:n,b:r};return O.runKernel(NS,s)}const Ly=$({floorDiv_:KT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GT(e,t){let n=b(e,"a","div"),r=b(t,"b","div");if([n,r]=qe(n,r),n.dtype==="int32"&&r.dtype==="int32")return Ly(n,r);const s={a:n,b:r},o={};return O.runKernel(pS,s,o)}const Ie=$({div_:GT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qT(e,t){let n=b(e,"a","mul"),r=b(t,"b","mul");[n,r]=qe(n,r);const s={a:n,b:r};return O.runKernel(nE,s)}const se=$({mul_:qT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XT(e){const t=b(e,"x","abs");if(t.dtype==="complex64"){const n={x:t};return O.runKernel(Gw,n)}else{const n={x:t};return O.runKernel(kw,n)}}const cn=$({abs_:XT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YT(e){const n={x:b(e,"x","acos")};return O.runKernel(xw,n)}const QT=$({acos_:YT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JT(e){const n={x:b(e,"x","acosh")};return O.runKernel(_w,n)}const ZT=$({acosh_:JT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eN(e){x(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),x(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);const t=e.map((s,o)=>b(s,`tensors${o}`,"addN")),n=t[0];t.forEach(s=>{if(s.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(s=>{if(!Mr(s.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=t;return O.runKernel($w,r)}const tN=$({addN_:eN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nN(e,t=null,n=!1){const s={x:b(e,"x","all","bool")},o={axis:t,keepDims:n};return O.runKernel(Dw,s,o)}const rN=$({all_:nN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sN(e,t=null,n=!1){const s={x:b(e,"x","any","bool")},o={axis:t,keepDims:n};return O.runKernel(Iw,s,o)}const oN=$({any_:sN});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iN(e,t=0){const r={x:b(e,"x","argMax")},s={axis:t};return O.runKernel(Cw,r,s)}const aN=$({argMax_:iN});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lN(e,t=0){const r={x:b(e,"x","argMin")},s={axis:t};return O.runKernel(Ow,r,s)}const uN=$({argMin_:lN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cN(e){const n={x:b(e,"x","asin")};return O.runKernel(Aw,n)}const fN=$({asin_:cN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pN(e){const n={x:b(e,"x","asinh")};return O.runKernel(Pw,n)}const dN=$({asinh_:pN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hN(e){const n={x:b(e,"x","atan")};return O.runKernel(Rw,n)}const mN=$({atan_:hN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gN(e,t){let n=b(e,"a","atan2"),r=b(t,"b","atan2");[n,r]=qe(n,r);const s={a:n,b:r};return O.runKernel(Lw,s)}const yN=$({atan2_:gN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vN(e){const n={x:b(e,"x","atanh")};return O.runKernel(Fw,n)}const wN=$({atanh_:vN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SN(e,t,n,r,s,o,i="channelsLast"){const[a,l]=fl(t);let u;if(i==="channelsLast")u=[a,l,e[3],e[3]];else if(i==="channelsFirst")u=[a,l,e[1],e[1]];else throw new Error(`Unknown dataFormat ${i}`);return Cp(e,u,n,r,s,o,!1,i)}function Cp(e,t,n,r,s,o,i=!1,a="channelsLast"){let[l,u,f,p]=[-1,-1,-1,-1];if(a==="channelsLast")[l,u,f,p]=e;else if(a==="channelsFirst")[l,p,u,f]=e;else throw new Error(`Unknown dataFormat ${a}`);const[d,h,,v]=t,[w,k]=fl(n),[S,T]=fl(r),N=ef(d,S),D=ef(h,T),{padInfo:C,outHeight:P,outWidth:F}=TN(s,u,f,w,k,N,D,o,a),z=i?v*p:v;let K;return a==="channelsFirst"?K=[l,z,P,F]:a==="channelsLast"&&(K=[l,P,F,z]),{batchSize:l,dataFormat:a,inHeight:u,inWidth:f,inChannels:p,outHeight:P,outWidth:F,outChannels:z,padInfo:C,strideHeight:w,strideWidth:k,filterHeight:d,filterWidth:h,effectiveFilterHeight:N,effectiveFilterWidth:D,dilationHeight:S,dilationWidth:T,inShape:e,outShape:K,filterShape:t}}function EN(e,t,n,r,s){r==null&&(r=bN(e,t,n));const o=e[0],i=e[1],a=pl((o-t+2*r)/n+1,s),l=pl((i-t+2*r)/n+1,s);return[a,l]}function bN(e,t,n,r=1){const s=ef(t,r);return Math.floor((e[0]*(n-1)-n+s)/2)}function fl(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function ef(e,t){return t<=1?e:e+(e-1)*(t-1)}function TN(e,t,n,r,s,o,i,a,l){let u,f,p;if(typeof e=="number"){u={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};const h=EN([t,n],o,r,e,a);f=h[0],p=h[1]}else if(e==="same"){f=Math.ceil(t/r),p=Math.ceil(n/s);const d=Math.max(0,(f-1)*r+o-t),h=Math.max(0,(p-1)*s+i-n),v=Math.floor(d/2),w=d-v,k=Math.floor(h/2),S=h-k;u={top:v,bottom:w,left:k,right:S,type:"SAME"}}else if(e==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},f=Math.ceil((t-o+1)/r),p=Math.ceil((n-i+1)/s);else if(typeof e=="object"){const d=l==="channelsLast"?e[1][0]:e[2][0],h=l==="channelsLast"?e[1][1]:e[2][1],v=l==="channelsLast"?e[2][0]:e[3][0],w=l==="channelsLast"?e[2][1]:e[3][1];u={top:d,bottom:h,left:v,right:w,type:d===0&&h===0&&v===0&&w===0?"VALID":"EXPLICIT"},f=pl((t-o+d+h)/r+1,a),p=pl((n-i+v+w)/s+1,a)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outHeight:f,outWidth:p}}function pl(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function dl(e){const[t,n,r]=fl(e);return t===1&&n===1&&r===1}function Xr(e,t){return dl(e)||dl(t)}function $n(e,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")x(ki(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(r=>{r.forEach(s=>{x(ki(s),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${s}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NN(e,t){const r={x:b(e,"x","reshape","string_or_numeric")},s={shape:t};return O.runKernel(EE,r,s)}const M=$({reshape_:NN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kN(e,t,n,r,s){const o=b(e,"x","avgPool","float32"),i=1;x(Xr(n,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`);let a=o,l=!1;o.rank===3&&(l=!0,a=M(o,[1,o.shape[0],o.shape[1],o.shape[2]])),x(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),$n("avgPool",r,s);const u={x:a},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s};let p=O.runKernel(Bw,u,f);return p=Qe(p,o.dtype),l?M(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const By=$({avgPool_:kN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xN(e,t,n,r,s,o="NDHWC"){const i=b(e,"x","avgPool3d","float32");let a=i,l=!1;i.rank===4&&(l=!0,a=M(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),x(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),x(o==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),$n("avgPool3d",r,s);const u={x:a},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:o};let p=O.runKernel(zw,u,f);return p=Qe(p,a.dtype),l?M(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const _N=$({avgPool3d_:xN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $N(e,t=0){x(e.length>=1,()=>"Pass at least one tensor to concat");const n=ul(e,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),n.length===1)return Lr(n[0]);const r=n,s={axis:t};return O.runKernel(qw,r,s)}const gt=$({concat_:$N});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DN(e){const n={x:b(e,"x","sigmoid","float32")};return O.runKernel(FE,n)}const cs=$({sigmoid_:DN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IN(e,t,n){const r=b(e,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},o={begin:t,size:n};return O.runKernel(OE,s,o)}const de=$({slice_:IN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CN(e){const n={x:b(e,"x","tanh","float32")};return O.runKernel(tb,n)}const tf=$({tanh_:CN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ON(e,t,n,r,s,o){const i=b(e,"forgetBias","basicLSTMCell"),a=b(t,"lstmKernel","basicLSTMCell"),l=b(n,"lstmBias","basicLSTMCell"),u=b(r,"data","basicLSTMCell"),f=b(s,"c","basicLSTMCell"),p=b(o,"h","basicLSTMCell"),d=gt([u,p],1),h=$e(d,a),v=Re(h,l),w=v.shape[0],k=v.shape[1]/4,S=[w,k],T=de(v,[0,0],S),N=de(v,[0,k],S),D=de(v,[0,k*2],S),C=de(v,[0,k*3],S),P=Re(se(cs(T),tf(N)),se(f,cs(Re(i,D)))),F=se(tf(P),cs(C));return[P,F]}const AN=$({basicLSTMCell_:ON});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PN(e,t,n){const r=b(e,"x","batchToSpaceND"),s=t.reduce((a,l)=>a*l);x(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),x(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),x(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${s}`);const o={x:r},i={blockShape:t,crops:n};return O.runKernel(Mw,o,i)}const zy=$({batchToSpaceND_:PN});function RN(e){let t;return e.rank===0||e.rank===1?t=M(e,[1,1,1,e.size]):e.rank===2?t=M(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?t=M(e,[1,e.shape[0],e.shape[1],e.shape[2]]):t=e,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FN(e,t,n,r,s,o){o==null&&(o=.001);const i=b(e,"x","batchNorm"),a=b(t,"mean","batchNorm"),l=b(n,"variance","batchNorm");let u;s!=null&&(u=b(s,"scale","batchNorm"));let f;r!=null&&(f=b(r,"offset","batchNorm")),x(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),x(f==null||a.rank===f.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),x(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:RN(i),scale:u,offset:f,mean:a,variance:l},h={varianceEpsilon:o},v=O.runKernel(kS,d,h);return M(v,i.shape)}const Ml=$({batchNorm_:FN});function LN(e,t,n,r,s,o){const i=b(e,"x","batchNorm"),a=b(t,"mean","batchNorm"),l=b(n,"variance","batchNorm");let u;s!=null&&(u=b(s,"scale","batchNorm"));let f;return r!=null&&(f=b(r,"offset","batchNorm")),x(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),x(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),x(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&x(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),f!=null&&x(f.rank===2||f.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${f.rank}.`),Ml(i,a,l,f,u,o)}const BN=$({batchNorm2d_:LN});function zN(e,t,n,r,s,o){const i=b(e,"x","batchNorm"),a=b(t,"mean","batchNorm"),l=b(n,"variance","batchNorm");let u;s!=null&&(u=b(s,"scale","batchNorm"));let f;return r!=null&&(f=b(r,"offset","batchNorm")),x(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),x(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),x(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&x(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),f!=null&&x(f.rank===3||f.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${f.rank}.`),Ml(i,a,l,f,u,o)}const jN=$({batchNorm3d_:zN});function MN(e,t,n,r,s,o){const i=b(e,"x","batchNorm"),a=b(t,"mean","batchNorm"),l=b(n,"variance","batchNorm");let u;s!=null&&(u=b(s,"scale","batchNorm"));let f;return r!=null&&(f=b(r,"offset","batchNorm")),x(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),x(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),x(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&x(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),f!=null&&x(f.rank===4||f.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${f.rank}.`),Ml(i,a,l,f,u,o)}const UN=$({batchNorm4d_:MN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VN(e,t,n){const r=b(e,"x","bincount"),s=b(t,"weights","bincount");x(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),x(n>=0,()=>`size must be non-negative, but got ${n}.`),x(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const o={x:r,weights:s},i={size:n};return O.runKernel(Uw,o,i)}const jy=$({bincount_:VN});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HN(e,t){const n=b(e,"s0","broadcastArgs","int32"),r=b(t,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:n,s1:r};return O.runKernel(Vw,s)}const WN=$({broadcastArgs_:HN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KN(e,t){let n=b(e,"broadcastTo","x");const r=n.shape;if(t.some(u=>!(u>0)||u%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const u=n.shape.slice();for(;u.length<t.length;)u.unshift(1);n=M(n,u)}const s=n.shape,o=Array.from(t);for(let u=t.length-1;u>=0;u--)if(s[u]===t[u])o[u]=1;else if(n.shape[u]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(o.map((u,f)=>u>1?f:-1).filter(u=>u>=0).length===0)return Lr(n);const a={x:n},l={reps:o};return O.runKernel(uy,a,l)}const Ca=$({broadcastTo_:KN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GN(e){const n={x:b(e,"x","ceil","float32")};return O.runKernel(Hw,n)}const qN=$({ceil_:GN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ul(e,t,n){const r={shape:e,value:t,dtype:n};return O.runKernel(ES,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XN(e,t,n){const r=b(e,"x","clipByValue");if(x(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return Ul(r.shape,t,r.dtype);const s={x:r},o={clipValueMin:t,clipValueMax:n};return O.runKernel(Ww,s,o)}const My=$({clipByValue_:XN});function YN(e){return gt(e,0)}const QN=$({concat1d_:YN});function JN(e,t){return gt(e,t)}const ZN=$({concat2d_:JN});function ek(e,t){return gt(e,t)}const tk=$({concat3d_:ek});function nk(e,t){return gt(e,t)}const rk=$({concat4d_:nk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sk(e,t,n,r,s="NHWC",o=[1,1],i){const a=b(e,"x","conv2d","float32"),l=b(t,"filter","conv2d","float32");let u=a,f=!1;a.rank===3&&(f=!0,u=M(a,[1,a.shape[0],a.shape[1],a.shape[2]])),x(u.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${u.rank}.`),x(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),$n("conv2d",r,i);const p=s==="NHWC"?u.shape[3]:u.shape[1];x(p===l.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${l.shape[2]}.`),x(Xr(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);const d={x:u,filter:l},h={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:i},v=O.runKernel(Xw,d,h);return f?M(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const Vl=$({conv2d_:sk});function ok(e,t,n,r,s="NWC",o=1,i){const a=b(e,"x","conv1d"),l=b(t,"filter","conv1d");let u=a,f=!1;a.rank===2&&(f=!0,u=M(a,[1,a.shape[0],a.shape[1]])),x(u.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${u.rank}.`),x(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),$n("conv1d",r,i),x(u.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${u.shape[2]}) must match input depth for filter ${l.shape[1]}.`),x(Xr(n,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${o}'`),x(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const p=M(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=M(u,[u.shape[0],1,u.shape[1],u.shape[2]]),k=Vl(d,p,[1,n],r,"NHWC",[1,o],i);return f?M(k,[k.shape[2],k.shape[3]]):M(k,[k.shape[0],k.shape[2],k.shape[3]])}const ik=$({conv1d_:ok});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ak(e,t,n,r,s,o="NHWC",i){x(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let a=e,l=t,u=!1;t.rank===3&&(u=!0,l=M(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,e[0],e[1],e[2]]),x(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),x(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),x(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const f=o==="NHWC"?a[3]:a[1],p=o==="NHWC"?l.shape[3]:l.shape[1];x(f===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${f}) must match input depth for filter ${n.shape[2]}.`),x(p===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${n.shape[3]}.`),$n("conv2dDerInput",s,i);const d={dy:l,filter:n},h={strides:r,pad:s,dataFormat:o,dimRoundingMode:i,inputShape:a},v=O.runKernel(Qw,d,h);return u?M(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const Uy=$({conv2DBackpropInput_:ak});function lk(e,t,n,r,s,o){const i=b(e,"x","conv2dTranspose"),a=b(t,"filter","conv2dTranspose");return Uy(n,i,a,r,s,"NHWC",o)}const uk=$({conv2dTranspose_:lk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ck(e,t,n,r,s="NDHWC",o=[1,1,1]){const i=b(e,"x","conv3d"),a=b(t,"filter","conv3d");let l=i,u=!1;i.rank===4&&(u=!0,l=M(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),x(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),x(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),x(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),x(Xr(n,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),x(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`);const f={x:l,filter:a},p={strides:n,pad:r,dataFormat:s,dilations:o},d=O.runKernel(Jw,f,p);return u?M(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const fk=$({conv3d_:ck});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pk(e,t,n,r,s){x(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let o=e,i=t,a=!1;t.rank===4&&(a=!0,i=M(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),o=[1,e[0],e[1],e[2],e[3]]);const l=o[4],u=i.shape[4];x(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),x(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),x(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),x(l===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${n.shape[3]}.`),x(u===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${u}) must match output depth for filter ${n.shape[4]}.`);const f={dy:i,filter:n},p={pad:s,strides:r,inputShape:o},d=O.runKernel(Zw,f,p);return a?M(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const dk=$({conv3DBackpropInput_:pk});function hk(e,t,n,r,s){const o=b(e,"x","conv3dTranspose"),i=b(t,"filter","conv3dTranspose");return dk(n,o,i,r,s)}const mk=$({conv3dTranspose_:hk});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gk(e){const n={x:b(e,"x","cos","float32")};return O.runKernel(eS,n)}const yk=$({cos_:gk});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vk(e){const n={x:b(e,"x","cosh","float32")};return O.runKernel(tS,n)}const wk=$({cosh_:vk});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sk(e,t=0,n=!1,r=!1){const o={x:b(e,"x","cumprod")},i={axis:t,exclusive:n,reverse:r};return O.runKernel(nS,o,i)}const Ek=$({cumprod_:Sk});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bk(e,t=0,n=!1,r=!1){const o={x:b(e,"x","cumsum")},i={axis:t,exclusive:n,reverse:r};return O.runKernel(rS,o,i)}const Tk=$({cumsum_:bk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nk(e,t,n,r=!1){const s=b(e,"x","denseBincount"),o=b(t,"weights","denseBincount");x(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),x(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),x(n>=0,()=>`size must be non-negative, but got ${n}.`),x(o.size===s.size||o.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${o.shape}.`);const i={x:s,weights:o},a={size:n,binaryOutput:r};return O.runKernel(oS,i,a)}const kk=$({denseBincount_:Nk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xk(e,t,n="NHWC"){const r=b(e,"x","depthToSpace","float32"),s=n==="NHWC"?r.shape[1]:r.shape[2],o=n==="NHWC"?r.shape[2]:r.shape[3],i=n==="NHWC"?r.shape[3]:r.shape[1];x(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),x(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t}  for depthToSpace with input shape
    ${r.shape}`),x(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t} for depthToSpace with input shape
        ${r.shape}`),x(i%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${i} for depthToSpace with input shape ${r.shape}`);const a={x:r},l={blockSize:t,dataFormat:n};return O.runKernel(iS,a,l)}const _k=$({depthToSpace_:xk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $k(e,t,n,r,s="NHWC",o=[1,1],i){const a=b(e,"x","depthwiseConv2d","float32"),l=b(t,"filter","depthwiseConv2d","float32");let u=a,f=!1;a.rank===3&&(f=!0,u=M(a,[1,a.shape[0],a.shape[1],a.shape[2]])),x(u.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${u.rank}.`),x(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const p=s==="NHWC"?u.shape[3]:u.shape[1];x(p===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${l.shape[2]}.`),$n("depthwiseConv2d",r,i);const d={x:u,filter:l},h={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:i},v=O.runKernel(aS,d,h);return f?M(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const Op=$({depthwiseConv2d_:$k});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dk(e){const n={x:b(e,"x","diag")};return O.runKernel(cS,n)}const Ik=$({diag_:Dk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ck(e,t,n,r,s=[1,1],o="NHWC"){const i=b(e,"x","dilation2d"),a=b(t,"filter","dilation2d");x(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),x(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),x(o==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let l=i,u=!1;i.rank===3&&(l=M(i,[1,i.shape[0],i.shape[1],i.shape[2]]),u=!0);const f={x:l,filter:a},p={strides:n,pad:r,dilations:s},d=O.runKernel(fS,f,p);return u?M(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const Ok=$({dilation2d_:Ck});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ak(e,t){let n=b(e,"a","equal","string_or_numeric"),r=b(t,"b","equal","string_or_numeric");[n,r]=qe(n,r),lt(n.shape,r.shape);const s={a:n,b:r};return O.runKernel(gS,s)}const Vy=$({equal_:Ak});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pk(e,t,n){const r=b(t,"a","where"),s=b(n,"b","where"),o=b(e,"condition","where","bool"),i=lt(lt(o.shape,r.shape),s.shape),a=Ca(o,i),l=Ca(r,i),u=Ca(s,i),f={condition:a,t:l,e:u};return O.runKernel(IE,f)}const po=$({where_:Pk});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rk(e){const n={x:b(e,"x","zerosLike")};return O.runKernel(ab,n)}const Ap=$({zerosLike_:Rk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fk(e,t){let n=b(e,"a","div"),r=b(t,"b","div");[n,r]=qe(n,r);const s=Ie(n,r),o=Ap(s),i=Vy(r,o);return po(i,o,s)}const Lk=$({divNoNan_:Fk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bk(e,t){const n=b(e,"t1","dot"),r=b(t,"t2","dot");x((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);const s=n.rank===1?n.size:n.shape[1],o=r.rank===1?r.size:r.shape[0];if(x(s===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${o}.`),n.rank===1&&r.rank===1){const i=M(n,[1,-1]),a=M(r,[-1,1]),l=$e(i,a);return M(l,[])}else if(n.rank===1&&r.rank===2){const i=M(n,[1,-1]),a=M(r,[r.shape[0],r.shape[1]]),l=$e(i,a);return M(l,[l.size])}else if(n.rank===2&&r.rank===1){const i=M(r,[-1,1]),a=$e(n,i);return M(a,[a.size])}else{const i=M(r,[r.shape[0],r.shape[1]]);return $e(n,i)}}const zk=$({dot_:Bk});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jk(e,...t){const n=t.map((s,o)=>b(s,`tensors${o}`,"einsum")),r={equation:e};return O.runKernel(dS,n,r)}const Mk=$({einsum_:jk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uk(e){const n={x:b(e,"x","elu","float32")};return O.runKernel(hS,n)}const Hy=$({elu_:Uk});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vk(e){let t=b(e,"x","erf");x(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=Qe(t,"float32"));const n={x:t};return O.runKernel(mS,n)}const Hk=$({erf_:Vk});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wk(e,t,n){const r=e.length+t.length,s=[];let o=0,i=0;for(let a=0;a<r;a++)n.indexOf(a)===-1?s.push(e[o++]):s.push(t[i++]);return s}function Hl(e,t){const n=t.map(r=>1);return Wk(e,n,t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kk(e,t=null,n=!1){const s={x:b(e,"x","max")},o={reductionIndices:t,keepDims:n};return O.runKernel(WS,s,o)}const no=$({max_:Kk});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gk(e,t=null,n=!1){const s={x:b(e,"x","min")},o={axis:t,keepDims:n};return O.runKernel(QS,s,o)}const nf=$({min_:Gk});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qk(e,t){let n=b(e,"base","pow"),r=b(t,"exp","pow");[n,r]=qe(n,r);const s={a:n,b:r};return O.runKernel(pE,s)}const Pp=$({pow_:qk});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _e(e,t){if((Bn(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Bn(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return qr(e,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xk(e){const n={x:b(e,"x","sqrt","float32")};return O.runKernel(BE,n)}const rf=$({sqrt_:Xk});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yk(e){const t=b(e,"x","square"),n={};return O.runKernel("Square",{x:t},n)}const Wl=$({square_:Yk});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qk(e,t=null,n=!1){let r=b(e,"x","sum");r.dtype==="bool"&&(r=Qe(r,"int32"));const s={x:r},o={axis:t,keepDims:n};return O.runKernel(zE,s,o)}const Fe=$({sum_:Qk});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jk(e,t="euclidean",n=null,r=!1){e=b(e,"x","norm");const s=Wy(e,t,n);let o=s.shape;if(r){const i=zl(n,e.shape);o=Hl(s.shape,i)}return M(s,o)}function Wy(e,t,n=null){if(e.rank===0)return cn(e);if(e.rank!==1&&n===null)return Wy(M(e,[-1]),t,n);if(e.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return Fe(cn(e),n);if(t===1/0)return no(cn(e),n);if(t===-1/0)return nf(cn(e),n);if(t==="euclidean"||t===2)return rf(Fe(Pp(cn(e),_e(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return no(Fe(cn(e),n[0]),n[1]-1);if(t===1/0)return no(Fe(cn(e),n[1]),n[0]);if(t===-1/0)return nf(Fe(cn(e),n[1]),n[0]);if(t==="fro"||t==="euclidean")return rf(Fe(Wl(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Kl=$({norm_:Jk});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zk(e,t=null,n=!1){return Kl(e,"euclidean",t,n)}const ex=$({euclideanNorm_:Zk});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tx(e){const n={x:b(e,"x","exp")};return O.runKernel(yS,n)}const cr=$({exp_:tx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nx(e,t=0){const n=b(e,"x","expandDims","string_or_numeric");x(t<=n.rank,()=>"Axis must be <= rank of the tensor");const r={input:n},s={dim:t};return O.runKernel(vS,r,s)}const Yn=$({expandDims_:nx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rx(e){const n={x:b(e,"x","expm1")};return O.runKernel(wS,n)}const sx=$({expm1_:rx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ox(e,t){const n=b(e,"x","tile","string_or_numeric");x(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const r={x:n},s={reps:t};return O.runKernel(uy,r,s)}const si=$({tile_:ox});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ix(e,t,n,r="float32"){t==null&&(t=e);const s=ur([e,t],r),o=e<=t?e:t;for(let a=0;a<o;++a)s.set(1,a,a);const i=M(s.toTensor(),[e,t]);if(n==null)return i;if(n.length===1)return si(Yn(i,0),[n[0],1,1]);if(n.length===2)return si(Yn(Yn(i,0),0),[n[0],n[1],1,1]);if(n.length===3)return si(Yn(Yn(Yn(i,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const Ky=$({eye_:ix});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ax(e){const n={x:b(e,"x","floor","float32")};return O.runKernel(TS,n)}const Gy=$({floor_:ax});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lx(e,t,n=0,r=0){const s=b(e,"x","gather"),o=b(t,"indices","gather","int32"),i={x:s,indices:o},a={axis:n,batchDims:r};return O.runKernel(xS,i,a)}const qy=$({gather_:lx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ux(e,t){let n=b(e,"a","greater","string_or_numeric"),r=b(t,"b","greater","string_or_numeric");[n,r]=qe(n,r),lt(n.shape,r.shape);const s={a:n,b:r};return O.runKernel($S,s)}const Gl=$({greater_:ux});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cx(e,t){let n=b(e,"a","greaterEqual","string_or_numeric"),r=b(t,"b","greaterEqual","string_or_numeric");[n,r]=qe(n,r),lt(n.shape,r.shape);const s={a:n,b:r};return O.runKernel(DS,s)}const Xy=$({greaterEqual_:cx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fx(e){const n={x:b(e,"x","isFinite")};return O.runKernel(OS,n)}const px=$({isFinite_:fx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dx(e){const n={x:b(e,"x","isInf")};return O.runKernel(AS,n)}const hx=$({isInf_:dx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mx(e){const n={x:b(e,"x","isNaN")};return O.runKernel(PS,n)}const gx=$({isNaN_:mx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yx(e,t=.2){const r={x:b(e,"x","leakyRelu")},s={alpha:t};return O.runKernel(RS,r,s)}const Yy=$({leakyRelu_:yx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vx(e,t){let n=b(e,"a","less","string_or_numeric"),r=b(t,"b","less","string_or_numeric");[n,r]=qe(n,r),lt(n.shape,r.shape);const s={a:n,b:r};return O.runKernel(FS,s)}const wx=$({less_:vx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sx(e,t){let n=b(e,"a","lessEqual","string_or_numeric"),r=b(t,"b","lessEqual","string_or_numeric");[n,r]=qe(n,r),lt(n.shape,r.shape);const s={a:n,b:r};return O.runKernel(LS,s)}const Rp=$({lessEqual_:Sx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ex(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:e,stop:t,num:n};return O.runKernel(BS,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bx(e,t=5,n=1,r=1,s=.5){const o=b(e,"x","localResponseNormalization");x(o.rank===4||o.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),x(ki(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let i=o,a=!1;o.rank===3&&(a=!0,i=M(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const l={x:i},u={depthRadius:t,bias:n,alpha:r,beta:s},f=O.runKernel(HS,l,u);return a?M(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Tx=$({localResponseNormalization_:bx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nx(e){const n={x:b(e,"x","log","float32")};return O.runKernel(zS,n)}const _i=$({log_:Nx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kx(e){const n={x:b(e,"x","log1p")};return O.runKernel(jS,n)}const Qy=$({log1p_:kx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fr(e){return O.customGrad(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xx(e){const n={x:b(e,"x","softplus")};return O.runKernel(LE,n)}const Jy=$({softplus_:xx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _x(e){const t=b(e,"x","logSigmoid");return fr(r=>({value:rr(Jy(rr(r))),gradFunc:i=>se(i,cs(rr(r)))}))(t)}const $x=$({logSigmoid_:_x});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dx(e,t){let n=b(e,"a","sub"),r=b(t,"b","sub");[n,r]=qe(n,r);const s={a:n,b:r};return O.runKernel(ZE,s)}const ve=$({sub_:Dx});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ix(e,t=-1){const n=b(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return fr((s,o)=>{const a=no(s,t,!0),l=ve(s,a),u=ve(Qe(l,"float32"),_i(Fe(cr(l),t,!0)));return o([u]),{value:u,gradFunc:(p,d)=>{const[h]=d,v=!0,w=cr(h);return ve(p,se(Fe(p,t,v),w))}}})(n)}const Cx=$({logSoftmax_:Ix});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ox(e,t=null,n=!1){const r=b(e,"x","logSumExp"),s=zl(t,r.shape),o=no(r,s,!0),i=ve(r,o),a=cr(i),l=Fe(a,s),u=_i(l),f=Re(M(o,u.shape),u);if(n){const p=Hl(f.shape,s);return M(f,p)}return f}const Zy=$({logSumExp_:Ox});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ax(e,t){const n=b(e,"a","logicalAnd","bool"),r=b(t,"b","logicalAnd","bool");lt(n.shape,r.shape);const s={a:n,b:r};return O.runKernel(MS,s)}const hl=$({logicalAnd_:Ax});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Px(e){const n={x:b(e,"x","logicalNot","bool")};return O.runKernel(US,n)}const e0=$({logicalNot_:Px});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rx(e,t){const n=b(e,"a","logicalOr","bool"),r=b(t,"b","logicalOr","bool");lt(n.shape,r.shape);const s={a:n,b:r};return O.runKernel(VS,s)}const t0=$({logicalOr_:Rx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fx(e,t){const n=b(e,"a","logicalXor","bool"),r=b(t,"b","logicalXor","bool");return lt(n.shape,r.shape),hl(t0(e,t),e0(hl(e,t)))}const Lx=$({logicalXor_:Fx});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ma=2147483648;function Bx(e,t,n="left"){const r=b(e,"sortedSequence","searchSorted"),s=b(t,"values","searchSorted"),o=r.shape[r.shape.length-1],i=s.shape[s.shape.length-1],a=M(r,[-1,o]),l=M(s,[-1,i]);if(a.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(a.shape[0]!==l.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(ht(l.shape)>=ma)throw new Error(`values tensor size must less than ${ma}`);if(a.shape[1]>=ma)throw new Error(`trailing dim_size must less than ${ma} for int32 output type, was ${a.shape[1]}`);const u={sortedSequence:a,values:l},f={side:n};return O.runKernel(DE,u,f)}const Fp=$({searchSorted_:Bx});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zx(e,t){return Fp(e,t,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jx(e,t,n,r,s){const o=b(e,"x","maxPool"),i=1;let a=o,l=!1;o.rank===3&&(l=!0,a=M(o,[1,o.shape[0],o.shape[1],o.shape[2]])),x(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),x(Xr(n,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${i}'`),$n("maxPool",r,s);const u={x:a},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s},p=O.runKernel(GS,u,f);return l?M(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const n0=$({maxPool_:jx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mx(e,t=[1,1,1],n,r,s,o="NDHWC"){const i=b(e,"x","maxPool3d");let a=i,l=!1;i.rank===4&&(l=!0,a=M(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),x(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),x(o==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),$n("maxPool3d",r,s);const u={x:a},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:o},p=O.runKernel(qS,u,f);return l?M(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const Ux=$({maxPool3d_:Mx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vx(e,t,n,r,s=!1){const i={x:b(e,"x","maxPoolWithArgmax")},a={filterSize:t,strides:n,pad:r,includeBatchInIndex:s},l=O.runKernel(XS,i,a);return{result:l[0],indexes:l[1]}}const Hx=$({maxPoolWithArgmax_:Vx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wx(e,t){let n=b(e,"a","maximum"),r=b(t,"b","maximum");[n,r]=qe(n,r),n.dtype==="bool"&&(n=Qe(n,"int32"),r=Qe(r,"int32")),lt(n.shape,r.shape);const s={a:n,b:r};return O.runKernel(KS,s)}const Kx=$({maximum_:Wx});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gx(e,t=null,n=!1){const s={x:b(e,"x","mean")},o={axis:t,keepDims:n};return O.runKernel(YS,s,o)}const ml=$({mean_:Gx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ho(e,t="float32"){if(t==="complex64"){const r=ho(e,"float32"),s=ho(e,"float32");return Ur(r,s)}const n=Np(ht(e),t);return O.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function as(e,t="float32"){if(t==="complex64"){const r=as(e,"float32"),s=ho(e,"float32");return Ur(r,s)}const n=ny(ht(e),t);return O.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qx(e,t,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(e===void 0)return[];let r=b(e,"x","meshgrid",e instanceof tt?e.dtype:"float32");if(t===void 0)return[r];let s=b(t,"y","meshgrid",t instanceof tt?t.dtype:"float32");const o=ht(r.shape),i=ht(s.shape);return n==="xy"?(r=M(r,[1,-1]),s=M(s,[-1,1]),[$e(as([i,1],r.dtype),r),$e(s,as([1,o],s.dtype))]):(r=M(r,[-1,1]),s=M(s,[1,-1]),[$e(r,as([1,i],r.dtype)),$e(as([o,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xx(e,t){let n=b(e,"a","minimum"),r=b(t,"b","minimum");[n,r]=qe(n,r),n.dtype==="bool"&&(n=Qe(n,"int32"),r=Qe(r,"int32")),lt(n.shape,r.shape);const s={a:n,b:r};return O.runKernel(JS,s)}const r0=$({minimum_:Xx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yx(e,t,n){x(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const r=b(e,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");x(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);const s=n==="reflect"?1:0;for(let a=0;a<r.rank;a++)x(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),x(t[a][0]>=0&&t[a][0]<=r.shape[a]-s&&t[a][1]>=0&&t[a][1]<=r.shape[a]-s,()=>`Padding in dimension ${a} cannot be greater than or equal to ${r.shape[a]-s} or less than 0 for input of shape ${r.shape}`);const o={paddings:t,mode:n},i={x:r};return O.runKernel(ZS,i,o)}const Qx=$({mirrorPad_:Yx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jx(e,t){let n=b(e,"a","mod"),r=b(t,"b","mod");[n,r]=qe(n,r);const s={a:n,b:r};return O.runKernel(eE,s)}const Zx=$({mod_:Jx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e6(e,t=null,n=!1){e=b(e,"x","moments");const r=zl(t,e.shape),s=ml(e,r,n);let o=s.shape;n||(o=Hl(s.shape,r));const i=Wl(ve(Qe(e,"float32"),M(s,o))),a=ml(i,r,n);return{mean:s,variance:a}}const t6=$({moments_:e6});function n6(e,t,n,r){const s=b(t,"data","multiRNNCell"),o=ul(n,"c","multiRNNCell"),i=ul(r,"h","multiRNNCell");let a=s;const l=[];for(let p=0;p<e.length;p++){const d=e[p](a,o[p],i[p]);l.push(d[0]),l.push(d[1]),a=d[1]}const u=[],f=[];for(let p=0;p<l.length;p+=2)u.push(l[p]),f.push(l[p+1]);return[u,f]}const r6=$({multiRNNCell_:n6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s6(e,t,n,r=!1){const s=b(e,"logits","multinomial"),o=s.size,i=s.rank;if(o<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${o}.`);if(i>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${i}`);n=n||Math.random();const l={logits:i===1?M(s,[1,-1]):s},u={numSamples:t,seed:n,normalized:r},f=O.runKernel(tE,l,u);return i===1?M(f,[f.size]):f}const o6=$({multinomial_:s6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i6(e,t){let n=b(e,"a","notEqual","string_or_numeric"),r=b(t,"b","notEqual","string_or_numeric");[n,r]=qe(n,r),lt(n.shape,r.shape);const s={a:n,b:r};return O.runKernel(sE,s)}const s0=$({notEqual_:i6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a6(e){const n={x:b(e,"x","onesLike")};return O.runKernel(lE,n)}const l6=$({onesLike_:a6});function u6(e,t){const n=b(e,"v1","outerProduct"),r=b(t,"v2","outerProduct");x(n.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);const s=M(n,[-1,1]),o=M(r,[1,-1]);return $e(s,o)}const c6=$({outerProduct_:u6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f6(e,t,n=0){const r=b(e,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:t,constantValue:n},o={x:r};return O.runKernel(fE,o,s)}const zi=$({pad_:f6});function p6(e,t,n=0){return x(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),zi(e,[t],n)}const d6=$({pad1d_:p6});function h6(e,t,n=0){return x(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),zi(e,t,n)}const m6=$({pad2d_:h6});function g6(e,t,n=0){return x(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),zi(e,t,n)}const y6=$({pad3d_:g6});function v6(e,t,n=0){return x(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),zi(e,t,n)}const w6=$({pad4d_:v6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S6(e,t,n){const r=b(e,"x","spaceToBatchND");x(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),x(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),x(r.shape.reduce((i,a,l)=>l>0&&l<=t.length?i&&(a+n[l-1][0]+n[l-1][1])%t[l-1]===0:i,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const s={x:r},o={blockShape:t,paddings:n};return O.runKernel(jE,s,o)}const o0=$({spaceToBatchND_:S6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E6(e,t,n,r,s,o,i){s==null&&(s=[1,1]),o==null&&(o=1),r===0&&(r="valid");const a=b(e,"x","maxPool");let l=a,u=!1;a.rank===3&&(u=!0,l=M(a,[1,a.shape[0],a.shape[1],a.shape[2]])),x(Xr(o,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${s}'`);const f=SN(l.shape,t,o,s,r),p=[f.dilationHeight,f.dilationWidth];let d;r==="same"?d=T6([f.filterHeight,f.filterWidth],p):d=[[0,0],[0,0]];const h=p[0]===1&&p[1]===1,[v,w]=b6([f.inHeight,f.inWidth],p,d),k=h?r:"valid",S=h?l:o0(l,p,v),N=(n==="avg"?()=>By(S,t,o,k,i):()=>n0(S,t,o,k,i))(),D=h?N:zy(N,p,w);return u?M(D,[D.shape[1],D.shape[2],D.shape[3]]):D}function b6(e,t,n){const r=n.map(f=>f[0]),s=n.map(f=>f[1]),o=e.concat(r,s),i=t.map((f,p)=>(f-o[p]%f)%f),a=s.map((f,p)=>f+i[p]),l=t.map((f,p)=>[r[p],a[p]]),u=t.map((f,p)=>[0,i[p]]);return[l,u]}function T6(e,t){const r=e.map((i,a)=>i+(i-1)*(t[a]-1)).map(i=>i-1),s=r.map(i=>Math.floor(i/2)),o=r.map((i,a)=>i-s[a]);return r.map((i,a)=>[s[a],o[a]])}const N6=$({pool_:E6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k6(e,t){const n=b(e,"x","prelu"),r=b(t,"alpha","prelu"),s={x:n,alpha:r};return O.runKernel(dE,s)}const i0=$({prelu_:k6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x6(e,t=null,n=!1){let r=b(e,"x","prod");r.dtype==="bool"&&(r=Qe(r,"int32"));const s={x:r},o={axis:t,keepDims:n};return O.runKernel(hE,s,o)}const _6=$({prod_:x6});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $6(e,t,n,r){const s=e.map((f,p)=>b(f,`tensors${p}`,"raggedGather","int32")),o=b(t,"paramsDenseValues","raggedGather"),i=b(n,"indices","raggedGather","int32"),a={paramsNestedSplits:s,paramsDenseValues:o,indices:i},l={outputRaggedRank:r},u=O.runKernel(mE,a,l);return{outputNestedSplits:u.slice(0,u.length-1),outputDenseValues:u[u.length-1]}}const D6=$({raggedGather_:$6});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I6(e,t,n,r,s){const o=b(e,"shape","raggedTensorToTensor","int32"),i=b(t,"values","raggedTensorToTensor"),a=b(n,"defaultValue","raggedTensorToTensor",i.dtype),l=r.map((p,d)=>b(p,`tensors${d}`,"raggedTensorToTensor","int32")),u={shape:o,values:i,defaultValue:a,rowPartitionTensors:l},f={rowPartitionTypes:s};return O.runKernel(gE,u,f)}const C6=$({raggedTensorToTensor_:I6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O6(e,t,n){const r=ht(e);let s=null;if(n==null||n==="float32")s=new Float32Array(r);else if(n==="int32")s=new Int32Array(r);else if(n==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${n}`);for(let o=0;o<r;o++)s[o]=t();return O.makeTensor(s,e,n)}const A6=$({rand_:O6});var sf={},P6={get exports(){return sf},set exports(e){sf=e}};(function(e){(function(t,n,r){function s(l){var u=this,f=a();u.next=function(){var p=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=p-(u.c=p|0)},u.c=1,u.s0=f(" "),u.s1=f(" "),u.s2=f(" "),u.s0-=f(l),u.s0<0&&(u.s0+=1),u.s1-=f(l),u.s1<0&&(u.s1+=1),u.s2-=f(l),u.s2<0&&(u.s2+=1),f=null}function o(l,u){return u.c=l.c,u.s0=l.s0,u.s1=l.s1,u.s2=l.s2,u}function i(l,u){var f=new s(l),p=u&&u.state,d=f.next;return d.int32=function(){return f.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,p&&(typeof p=="object"&&o(p,f),d.state=function(){return o(f,{})}),d}function a(){var l=4022871197,u=function(f){f=String(f);for(var p=0;p<f.length;p++){l+=f.charCodeAt(p);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return u}n&&n.exports?n.exports=i:r&&r.amd?r(function(){return i}):this.alea=i})(Pn,e,!1)})(P6);var of={},R6={get exports(){return of},set exports(e){of=e}};(function(e){(function(t,n,r){function s(a){var l=this,u="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var p=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^p^p>>>8},a===(a|0)?l.x=a:u+=a;for(var f=0;f<u.length+64;f++)l.x^=u.charCodeAt(f)|0,l.next()}function o(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function i(a,l){var u=new s(a),f=l&&l.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var d=u.next()>>>11,h=(u.next()>>>0)/4294967296,v=(d+h)/(1<<21);while(v===0);return v},p.int32=u.next,p.quick=p,f&&(typeof f=="object"&&o(f,u),p.state=function(){return o(u,{})}),p}n&&n.exports?n.exports=i:r&&r.amd?r(function(){return i}):this.xor128=i})(Pn,e,!1)})(R6);var af={},F6={get exports(){return af},set exports(e){af=e}};(function(e){(function(t,n,r){function s(a){var l=this,u="";l.next=function(){var p=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(p^p<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:u+=a;for(var f=0;f<u.length+64;f++)l.x^=u.charCodeAt(f)|0,f==u.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function o(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function i(a,l){var u=new s(a),f=l&&l.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var d=u.next()>>>11,h=(u.next()>>>0)/4294967296,v=(d+h)/(1<<21);while(v===0);return v},p.int32=u.next,p.quick=p,f&&(typeof f=="object"&&o(f,u),p.state=function(){return o(u,{})}),p}n&&n.exports?n.exports=i:r&&r.amd?r(function(){return i}):this.xorwow=i})(Pn,e,!1)})(F6);var lf={},L6={get exports(){return lf},set exports(e){lf=e}};(function(e){(function(t,n,r){function s(a){var l=this;l.next=function(){var f=l.x,p=l.i,d,h;return d=f[p],d^=d>>>7,h=d^d<<24,d=f[p+1&7],h^=d^d>>>10,d=f[p+3&7],h^=d^d>>>3,d=f[p+4&7],h^=d^d<<7,d=f[p+7&7],d=d^d<<13,h^=d^d<<9,f[p]=h,l.i=p+1&7,h};function u(f,p){var d,h=[];if(p===(p|0))h[0]=p;else for(p=""+p,d=0;d<p.length;++d)h[d&7]=h[d&7]<<15^p.charCodeAt(d)+h[d+1&7]<<13;for(;h.length<8;)h.push(0);for(d=0;d<8&&h[d]===0;++d);for(d==8?h[7]=-1:h[d],f.x=h,f.i=0,d=256;d>0;--d)f.next()}u(l,a)}function o(a,l){return l.x=a.x.slice(),l.i=a.i,l}function i(a,l){a==null&&(a=+new Date);var u=new s(a),f=l&&l.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var d=u.next()>>>11,h=(u.next()>>>0)/4294967296,v=(d+h)/(1<<21);while(v===0);return v},p.int32=u.next,p.quick=p,f&&(f.x&&o(f,u),p.state=function(){return o(u,{})}),p}n&&n.exports?n.exports=i:r&&r.amd?r(function(){return i}):this.xorshift7=i})(Pn,e,!1)})(L6);var uf={},B6={get exports(){return uf},set exports(e){uf=e}};(function(e){(function(t,n,r){function s(a){var l=this;l.next=function(){var f=l.w,p=l.X,d=l.i,h,v;return l.w=f=f+1640531527|0,v=p[d+34&127],h=p[d=d+1&127],v^=v<<13,h^=h<<17,v^=v>>>15,h^=h>>>12,v=p[d]=v^h,l.i=d,v+(f^f>>>16)|0};function u(f,p){var d,h,v,w,k,S=[],T=128;for(p===(p|0)?(h=p,p=null):(p=p+"\0",h=0,T=Math.max(T,p.length)),v=0,w=-32;w<T;++w)p&&(h^=p.charCodeAt((w+32)%p.length)),w===0&&(k=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,w>=0&&(k=k+1640531527|0,d=S[w&127]^=h+k,v=d==0?v+1:0);for(v>=128&&(S[(p&&p.length||0)&127]=-1),v=127,w=4*128;w>0;--w)h=S[v+34&127],d=S[v=v+1&127],h^=h<<13,d^=d<<17,h^=h>>>15,d^=d>>>12,S[v]=h^d;f.w=k,f.X=S,f.i=v}u(l,a)}function o(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function i(a,l){a==null&&(a=+new Date);var u=new s(a),f=l&&l.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var d=u.next()>>>11,h=(u.next()>>>0)/4294967296,v=(d+h)/(1<<21);while(v===0);return v},p.int32=u.next,p.quick=p,f&&(f.X&&o(f,u),p.state=function(){return o(u,{})}),p}n&&n.exports?n.exports=i:r&&r.amd?r(function(){return i}):this.xor4096=i})(Pn,e,!1)})(B6);var cf={},z6={get exports(){return cf},set exports(e){cf=e}};(function(e){(function(t,n,r){function s(a){var l=this,u="";l.next=function(){var p=l.b,d=l.c,h=l.d,v=l.a;return p=p<<25^p>>>7^d,d=d-h|0,h=h<<24^h>>>8^v,v=v-p|0,l.b=p=p<<20^p>>>12^d,l.c=d=d-h|0,l.d=h<<16^d>>>16^v,l.a=v-p|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):u+=a;for(var f=0;f<u.length+20;f++)l.b^=u.charCodeAt(f)|0,l.next()}function o(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function i(a,l){var u=new s(a),f=l&&l.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var d=u.next()>>>11,h=(u.next()>>>0)/4294967296,v=(d+h)/(1<<21);while(v===0);return v},p.int32=u.next,p.quick=p,f&&(typeof f=="object"&&o(f,u),p.state=function(){return o(u,{})}),p}n&&n.exports?n.exports=i:r&&r.amd?r(function(){return i}):this.tychei=i})(Pn,e,!1)})(z6);var ff={},j6={get exports(){return ff},set exports(e){ff=e}};const M6={},U6=Object.freeze(Object.defineProperty({__proto__:null,default:M6},Symbol.toStringTag,{value:"Module"})),V6=o2(U6);(function(e){(function(t,n,r){var s=256,o=6,i=52,a="random",l=r.pow(s,o),u=r.pow(2,i),f=u*2,p=s-1,d;function h(D,C,P){var F=[];C=C==!0?{entropy:!0}:C||{};var z=S(k(C.entropy?[D,N(n)]:D??T(),3),F),K=new v(F),U=function(){for(var Q=K.g(o),le=l,fe=0;Q<u;)Q=(Q+fe)*s,le*=s,fe=K.g(1);for(;Q>=f;)Q/=2,le/=2,fe>>>=1;return(Q+fe)/le};return U.int32=function(){return K.g(4)|0},U.quick=function(){return K.g(4)/4294967296},U.double=U,S(N(K.S),n),(C.pass||P||function(Q,le,fe,me){return me&&(me.S&&w(me,K),Q.state=function(){return w(K,{})}),fe?(r[a]=Q,le):Q})(U,z,"global"in C?C.global:this==r,C.state)}function v(D){var C,P=D.length,F=this,z=0,K=F.i=F.j=0,U=F.S=[];for(P||(D=[P++]);z<s;)U[z]=z++;for(z=0;z<s;z++)U[z]=U[K=p&K+D[z%P]+(C=U[z])],U[K]=C;(F.g=function(Q){for(var le,fe=0,me=F.i,Ce=F.j,Je=F.S;Q--;)le=Je[me=p&me+1],fe=fe*s+Je[p&(Je[me]=Je[Ce=p&Ce+le])+(Je[Ce]=le)];return F.i=me,F.j=Ce,fe})(s)}function w(D,C){return C.i=D.i,C.j=D.j,C.S=D.S.slice(),C}function k(D,C){var P=[],F=typeof D,z;if(C&&F=="object")for(z in D)try{P.push(k(D[z],C-1))}catch{}return P.length?P:F=="string"?D:D+"\0"}function S(D,C){for(var P=D+"",F,z=0;z<P.length;)C[p&z]=p&(F^=C[p&z]*19)+P.charCodeAt(z++);return N(C)}function T(){try{var D;return d&&(D=d.randomBytes)?D=D(s):(D=new Uint8Array(s),(t.crypto||t.msCrypto).getRandomValues(D)),N(D)}catch{var C=t.navigator,P=C&&C.plugins;return[+new Date,t,P,t.screen,N(n)]}}function N(D){return String.fromCharCode.apply(0,D)}if(S(r.random(),n),e.exports){e.exports=h;try{d=V6}catch{}}else r["seed"+a]=h})(typeof self<"u"?self:Pn,[],Math)})(j6);var H6=sf,W6=of,K6=af,G6=lf,q6=uf,X6=cf,Ns=ff;Ns.alea=H6;Ns.xor128=W6;Ns.xorwow=K6;Ns.xorshift7=G6;Ns.xor4096=q6;Ns.tychei=X6;var Lp=Ns;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bp{constructor(t,n,r,s,o){this.mean=t,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=o||Math.random();this.random=Lp.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let t,n,r=!1;for(;!r;){let s,o,i;do s=2*this.random()-1,o=2*this.random()-1,i=s*s+o*o;while(i>=1||i===0);const a=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*s*a,n=this.mean+this.stdDev*o*a,(!this.truncated||this.isValidTruncated(t))&&(r=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class Y6{constructor(t,n,r,s){this.alpha=t,this.beta=1/n,this.dtype=r;const o=s||Math.random();this.randu=Lp.alea(o.toString()),this.randn=new Bp(0,1,r,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,r,s,o,i;for(;;){do s=this.randn.nextValue(),i=1+this.c*s;while(i<=0);if(i*=i*i,t=s*s,n=1-.331*t*t,r=.5*t+this.d*(1-i+Math.log(i)),o=this.randu(),o<n||Math.log(o)<r)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class Q6{constructor(t=0,n=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=Lp.alea(s)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J6(e,t,n=1,r="float32",s){if(n==null&&(n=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const o=new Y6(t,n,r,s),i=ur(e,r);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const Z6=$({randomGamma_:J6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e_(e,t=0,n=1,r,s){if(r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const o=new Bp(t,n,r,!1,s),i=ur(e,r);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const a0=$({randomNormal_:e_});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t_(e,t,n){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return a0(e,0,1,t,n)}const n_=$({randomStandardNormal_:t_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r_(e,t=0,n=1,r="float32",s){const o=ur(e,r),i=new Q6(t,n,null,s);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const l0=$({randomUniform_:r_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $i(e,t,n=1,r="float32"){if(n===0)throw new Error("Cannot have a step of zero");const s={start:e,stop:t,step:n,dtype:r};return O.runKernel(yE,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s_(e){const n={x:b(e,"x","reciprocal")};return O.runKernel(wE,n)}const o_=$({reciprocal_:s_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i_(e){const n={x:b(e,"x","relu")};return O.runKernel(SE,n)}const ql=$({relu_:i_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a_(e){const n={x:b(e,"x","relu6")};return O.runKernel(NE,n)}const u0=$({relu6_:a_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l_(e,t){const r={x:b(e,"x","reverse")},s={dims:t};return O.runKernel(kE,r,s)}const Ss=$({reverse_:l_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u_(e){const t=b(e,"x","reverse");return x(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),Ss(t,0)}const c_=$({reverse1d_:u_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f_(e,t){const n=b(e,"x","reverse");return x(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),Ss(n,t)}const p_=$({reverse2d_:f_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d_(e,t){const n=b(e,"x","reverse");return x(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),Ss(n,t)}const h_=$({reverse3d_:d_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m_(e,t){const n=b(e,"x","reverse");return x(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),Ss(n,t)}const g_=$({reverse4d_:m_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y_(e){const n={x:b(e,"x","round")};return O.runKernel(xE,n)}const c0=$({round_:y_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v_(e){const n={x:b(e,"x","rsqrt","float32")};return O.runKernel(_E,n)}const w_=$({rsqrt_:v_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S_(e){const n={x:b(e,"x","selu")};return O.runKernel(CE,n)}const E_=$({selu_:S_});function b_(e,t,n,r,s,o=[1,1],i="NHWC"){const a=b(e,"x","separableConv2d"),l=b(t,"depthwiseFilter","separableConv2d"),u=b(n,"pointwiseFilter","separableConv2d");let f=a,p=!1;if(a.rank===3&&(p=!0,f=M(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");x(f.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${f.rank}.`),x(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),x(u.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),x(u.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${u.shape[0]}.`),x(u.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${u.shape[1]}.`);const d=l.shape[2],h=l.shape[3];x(u.shape[2]===d*h,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*h}, but got ${u.shape[2]}.`);const v=Op(f,l,r,s,i,o),k=Vl(v,u,1,"valid",i);return p?M(k,[k.shape[1],k.shape[2],k.shape[3]]):k}const T_=$({separableConv2d_:b_});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function N_(e,t){const n=b(e,"x","setdiff1d"),r=b(t,"y","setdiff1d");x(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),x(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),x(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await n.data(),o=await r.data(),i=new Set(o);let a=0;for(let f=0;f<s.length;f++)i.has(s[f])||a++;const l=new Uc([a],n.dtype),u=new Uc([a],"int32");for(let f=0,p=0;f<s.length;f++)i.has(s[f])||(l.values[p]=s[f],u.values[p]=f,p++);return[l.toTensor(),u.toTensor()]}const k_=N_;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x_(e){const n={x:b(e,"x","sign")};return O.runKernel(RE,n)}const __=$({sign_:x_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $_(e){const n={x:b(e,"x","sin","float32")};return O.runKernel(AE,n)}const D_=$({sin_:$_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I_(e){const n={x:b(e,"x","sinh")};return O.runKernel(PE,n)}const C_=$({sinh_:I_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O_(e,t,n){const r=b(e,"x","slice1d");return x(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),de(r,[t],[n])}const A_=$({slice1d_:O_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P_(e,t,n){const r=b(e,"x","slice2d");return x(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),de(r,t,n)}const R_=$({slice2d_:P_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F_(e,t,n){const r=b(e,"x","slice3d");return x(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),de(r,t,n)}const L_=$({slice3d_:F_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B_(e,t,n){const r=b(e,"x","slice4d");return x(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),de(r,t,n)}const z_=$({slice4d_:B_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j_(e,t=-1){const n=b(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const r={logits:n},s={dim:t};return O.runKernel(UE,r,s)}const M_=$({softmax_:j_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U_(e){x(e.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);const t={input:e};return O.runKernel(SS,t)}const zp=$({fft_:U_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V_(e){x(e.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);const t={input:e};return O.runKernel(IS,t)}const gl=$({ifft_:V_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H_(e){const t=e.shape[e.shape.length-1],n=e.size/t;let r;if(t<=2){const s=M(e,[n,t]);r=gl(s)}else{const s=[n,2*(t-1)],o=M(xi(e),[n,t]),i=M(jl(e),[n,t]),a=Ss(de(o,[0,1],[n,t-2]),1),l=se(Ss(de(i,[0,1],[n,t-2]),1),_e(-1)),u=gt([o,a],1),f=gt([i,l],1),p=M(Ur(u,f),[s[0],s[1]]);r=gl(p)}if(r=xi(r),e.rank===3&&e.shape[0]!==0){const s=r,o=e.shape[0];r=M(r,[o,r.shape[0]/o,r.shape[1]]),s.dispose()}return r}const f0=$({irfft_:H_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W_(e,t,n=0){const s={x:b(e,"x","split")},o={numOrSizeSplits:t,axis:n};return O.runKernel(ME,s,o)}const Di=$({split_:W_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K_(e,t){x(e.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1];const r=e.size/n;let s;if(t!=null&&t<n){const v=e.shape.map(k=>0),w=e.shape.map(k=>k);w[e.shape.length-1]=t,s=de(e,v,w),n=t}else if(t!=null&&t>n){const v=e.shape.map(w=>w);v[e.shape.length-1]=t-n,s=gt([e,ho(v)],e.shape.length-1),n=t}else s=e;const o=Ap(s),i=M(Ur(s,o),[r,n]),a=zp(i),l=Math.floor(n/2)+1,u=xi(a),f=jl(a),p=Di(u,[l,n-l],u.shape.length-1),d=Di(f,[l,n-l],f.shape.length-1),h=s.shape.slice();return h[s.shape.length-1]=l,M(Ur(p[0],d[0]),h)}const jp=$({rfft_:K_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G_(e,t){let n=b(e,"a","squaredDifference"),r=b(t,"b","squaredDifference");[n,r]=qe(n,r),lt(n.shape,r.shape);const s={a:n,b:r},o={};return O.runKernel(qE,s,o)}const p0=$({squaredDifference_:G_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q_(e,t){const n=b(e,"x","squeeze","string_or_numeric");return M(n,fw(n.shape,t).newShape)}const ct=$({squeeze_:q_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X_(e,t=0){const n=ul(e,"tensors","stack","string_or_numeric");x(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&x(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const r=n,s={axis:t};return O.runKernel(cE,r,s)}const pr=$({stack_:X_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y_(e,t=0){const r={x:b(e,"x","step")},s={alpha:t};return O.runKernel(lb,r,s)}const d0=$({step_:Y_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q_(e,t,n,r,s=0,o=0,i=0,a=0,l=0){const f={x:b(e,"x","stridedSlice","string_or_numeric")},p={begin:t,end:n,strides:r,beginMask:s,endMask:o,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return O.runKernel(XE,f,p)}const J_=$({stridedSlice_:Q_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z_(e){const n={x:b(e,"x","tan","float32")};return O.runKernel(eb,n)}const e5=$({tan_:Z_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $t(e,t){So(e);const n=Gr(e,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return qr(e,null,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fs(e,t,n){if(So(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=Gr(e,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return qr(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t5(e,t,n){if(So(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=Gr(e,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return qr(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n5(e,t,n){if(So(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=Gr(e,n);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return qr(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r5(e,t,n){if(So(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=Gr(e,n);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||r,qr(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s5(e,t=1,n=!0){const r=b(e,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${t}`);const o={x:r},i={k:t,sorted:n},[a,l]=O.runKernel(nb,o,i);return{values:a,indices:l}}const o5=$({topk_:s5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i5(e,t=0,n=1,r,s){if(r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const o=new Bp(t,n,r,!0,s),i=ur(e,r);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const a5=$({truncatedNormal_:i5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l5(e,t=0){const n=b(e,"x","unique","string_or_numeric");x(n.rank>0,()=>"The input tensor must be at least 1D");const r={x:n},s={axis:t},[o,i]=O.runKernel(sb,r,s);return{values:o,indices:i}}const u5=$({unique_:l5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c5(e,t,n){const r=b(e,"x","unsortedSegmentSum"),s=b(t,"segmentIds","unsortedSegmentSum","int32");x(ki(n),()=>"numSegments must be of dtype int");const o={x:r,segmentIds:s},i={numSegments:n};return O.runKernel(ib,o,i)}const f5=$({unsortedSegmentSum_:c5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p5(e,t=0){const n=b(e,"x","unstack","string_or_numeric");x(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const r={value:n},s={axis:t};return O.runKernel(ob,r,s)}const ks=$({unstack_:p5});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d5(e,t){return Fp(e,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h5(e,t=!0,n,r){return O.makeVariable(e,t,n,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m5(e,t){const n=[];for(let o=0;o<t.length;o++)t[o]&&n.push(o);const r=ur(e,"int32"),s=ur([n.length,e.length],"int32");for(let o=0;o<n.length;o++){const i=r.indexToLoc(n[o]),a=o*e.length;s.values.set(i,a)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function g5(e){const t=b(e,"condition","whereAsync","bool"),n=await t.data(),r=m5(t.shape,n);return e!==t&&t.dispose(),r}const h0=g5;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function y5(e,t,n){const r=b(e,"tensor","boolMask"),s=b(t,"mask","boolMask","bool"),o=n??0,i=s.rank,a=r.shape;x(i>0,()=>"mask cannot be scalar"),vn(a.slice(o,o+i),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let l=1;for(let w=o;w<o+i;w++)l*=a[w];const u=a.slice(0,o).concat([l],a.slice(o+i)),f=M(r,u),p=M(s,[-1]),d=await h0(p),h=ct(d,[1]),v=qy(f,h,o);return e!==r&&r.dispose(),t!==s&&s.dispose(),h.dispose(),f.dispose(),p.dispose(),d.dispose(),v}const v5=y5;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w5(e,t,n,r,s=!0){const o=b(e,"v","movingAverage"),i=b(t,"x","movingAverage"),a=b(n,"decay","movingAverage");xb(o,i),x(Mr(o.shape,i.shape),()=>"Shape mismatch in v and x");const l=_e(1),u=ve(l,a);let f=se(ve(i,o),u);if(s){x(r!=null,()=>"When using zeroDebias: true, step is required.");const p=b(r,"step","movingAverage");f=Ie(f,ve(l,Pp(a,p)))}return Re(o,f)}const S5=$({movingAverage_:w5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E5(e,t,n){const r=b(e,"indices","scatterND","int32"),s=b(t,"updates","scatterND");HT(s,r,n);const o={indices:r,updates:s},i={shape:n};return O.runKernel($E,o,i)}const b5=$({scatterND_:E5});function T5(e,t,n,r){if(e.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const s=e.rank>0?e.shape[0]:1,o=e.rank>1?e.shape[1]:1;if(n.length!==o)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${o}.`);const i=t.size;if(!(t.rank===0||t.rank===1&&i===s))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${s}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N5(e,t,n,r=0){const s=b(e,"sparseIndices","sparseToDense","int32"),o=b(t,"sparseValues","sparseToDense","string_or_numeric"),i=b(r,"defaultValue","sparseToDense",o.dtype);T5(s,o,n,i);const a={sparseIndices:s,sparseValues:o,defaultValue:i},l={outputShape:n};return O.runKernel(GE,a,l)}const k5=$({sparseToDense_:N5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x5(e,t){const n=b(t,"indices","gatherND","int32"),s={params:b(e,"x","gatherND","string_or_numeric"),indices:n};return O.runKernel(_S,s)}const _5=$({gatherND_:x5});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $5(e,t){if(t==null)return e.shape.slice();if(Mr(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D5(e,t,n,r){const s=b(e,"x","dropout");if(x(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),x(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof tt?s.clone():s;const o=$5(s,n),i=1-t,a=Ie(Gy(Re(l0(o,0,1,"float32",r),i)),i);return se(s,a)}const I5=$({dropout_:D5});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m0(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function Mp(e,t,n){const r=1-e%2,s=new Float32Array(e);for(let o=0;o<e;++o){const i=2*Math.PI*o/(e+r-1);s[o]=t-n*Math.cos(i)}return $t(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function C5(e,t,n=1){const r=b(e,"predictions","inTopK"),s=b(t,"targets","inTopK");x(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),x(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),vn(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const o=r.shape[r.shape.length-1];x(n>0&&n<=o,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${o}), but got ${n}`);const i=await r.data(),a=await s.data(),[l,u]=[i.length/o,o],f=pw("bool",l);for(let p=0;p<l;p++){const d=p*u,h=i.subarray(d,d+u),v=[];for(let w=0;w<h.length;w++)v.push({value:h[w],index:w});v.sort((w,k)=>k.value-w.value),f[p]=0;for(let w=0;w<n;w++)if(v[w].index===a[p]){f[p]=1;break}}return e!==r&&r.dispose(),t!==s&&s.dispose(),Ln(f,s.shape,"bool")}const O5=C5;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A5(e,t,n,r,s,o="NHWC",i){let a=e;e.rank===3&&(a=M(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let l=t;l.rank===3&&(l=M(t,[1,t.shape[0],t.shape[1],t.shape[2]])),x(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),x(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),x(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const u=o==="NHWC"?a.shape[3]:a.shape[1],f=o==="NHWC"?l.shape[3]:l.shape[1];x(u===n[2],()=>`Error in conv2dDerFilter: depth of input ${u}) must match input depth in filter (${n[2]}.`),x(f===n[3],()=>`Error in conv2dDerFilter: depth of dy (${f}) must match output depth for filter (${n[3]}).`),$n("conv2dDerFilter",s,i);const p={x:a,dy:l},d={strides:r,pad:s,dataFormat:o,dimRoundingMode:i,filterShape:n};return O.runKernel(Yw,p,d)}const P5=$({conv2DBackpropFilter_:A5});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Up(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return se(e,d0(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Vp(e,t){let n=t;const r=zT(e.shape,t.shape);return r.length>0&&(n=Fe(n,r)),M(n,e.shape)}function Hp(e,t,n,r){if(t==="linear")return e;if(t==="relu")return ql(e);if(t==="elu")return Hy(e);if(t==="relu6")return u0(e);if(t==="prelu")return i0(e,n);if(t==="leakyrelu")return Yy(e,r);if(t==="sigmoid")return cs(e);throw new Error(`Unknown fused activation ${t}.`)}const Wp=(e,t)=>!(e>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R5({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:o=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:f}){if(l=l||"linear",Wp(O.state.gradientDepth,l)===!1){x(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let P=Vl(e,t,n,r,s,o,i);return a!=null&&(P=Re(P,a)),Hp(P,l,u,f)}const p=b(e,"x","conv2d","float32"),d=b(t,"filter","conv2d","float32");let h=p,v=!1;p.rank===3&&(v=!0,h=M(p,[1,p.shape[0],p.shape[1],p.shape[2]])),x(h.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${h.rank}.`),x(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),$n("fused conv2d",r,i);const w=s==="NHWC"?h.shape[3]:h.shape[1];x(d.shape[2]===w,()=>`Error in conv2d: depth of input (${w}) must match input depth for filter ${d.shape[2]}.`),x(Xr(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);const k=Cp(h.shape,d.shape,n,o,r,i);let S;a!=null&&(S=b(a,"bias","fused conv2d"),[S]=qe(S,p),s==="NHWC"?lt(k.outShape,S.shape):(x(S.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${S.shape.length}.`),x(S.shape.length===0||S.shape[0]===k.outChannels||S.shape[0]===1,()=>`Error in fused conv2d: bias shape (${S.shape}) is not compatible with the number of output channels (${k.outChannels})`)));let T;if(u!=null){const P=u.shape;if(x(P.length<=1||P.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${P.length}.`),P.length===1)x(P[0]===1||P[0]===k.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${P}) is not compatible with the number of output channels (${k.outChannels}).`);else if(P.length===3)try{lt(P,k.outShape)}catch{const z=`Error in fused conv2d: PReLU activation weights (${P}) is not compatible with the output shape of the conv2d (${k.outShape}).`;throw Error(z)}T=b(u,"prelu weights","fused conv2d")}const N=(P,F)=>{x(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[z,K,U,Q]=F,le=Up(P,U,l);x(dl(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const fe=Uy(K.shape,le,z,n,r),me=P5(K,le,z.shape,n,r),Ce=[fe,me];if(Q!=null){const Je=Vp(Q,le);Ce.push(Je)}return Ce},D={x:h,filter:d,bias:S,preluActivationWeights:T},C={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:i,activation:l,leakyreluAlpha:f};return a==null?fr((F,z,K)=>{let U=O.runKernel(rm,D,C);return K([z,F,U]),v&&(U=M(U,[U.shape[1],U.shape[2],U.shape[3]])),{value:U,gradFunc:N}})(h,d):fr((F,z,K,U)=>{let Q=O.runKernel(rm,D,C);return U([z,F,Q,K]),v&&(Q=M(Q,[Q.shape[1],Q.shape[2],Q.shape[3]])),{value:Q,gradFunc:N}})(h,d,S)}const F5=$({fusedConv2d_:R5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L5(e,t,n,r,s,o=[1,1],i){let a=e;e.rank===3&&(a=M(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let l=t;l.rank===3&&(l=M(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const u={x:a,dy:l},f={strides:r,pad:s,dimRoundingMode:i,dilations:o,filterShape:n};return O.runKernel(lS,u,f)}const B5=$({depthwiseConv2dNativeBackpropFilter_:L5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z5(e,t,n,r,s,o=[1,1],i){let a=t,l=!1;t.rank===3&&(l=!0,a=M(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const u={dy:a,filter:n},f={strides:r,pad:s,dimRoundingMode:i,dilations:o,inputShape:e},p=O.runKernel(uS,u,f);return l?M(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const j5=$({depthwiseConv2dNativeBackpropInput_:z5});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M5({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:o=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:f}){if(Wp(O.state.gradientDepth,l)===!1){let C=Op(e,t,n,r,s,o,i);return a!=null&&(C=Re(C,a)),Hp(C,l,u,f)}const p=b(e,"x","depthwiseConv2d","float32"),d=b(t,"filter","depthwiseConv2d","float32");let h=p,v=!1;p.rank===3&&(v=!0,h=M(p,[1,p.shape[0],p.shape[1],p.shape[2]])),x(h.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${h.rank}.`),x(d.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`),x(h.shape[3]===d.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${h.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`),o==null&&(o=[1,1]),x(Xr(n,o),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),$n("fused depthwiseConv2d",r,i);const w=Cp(h.shape,d.shape,n,o,r,i,!0);let k;a!=null&&(k=b(a,"bias","fused conv2d"),[k]=qe(k,p),lt(w.outShape,k.shape));let S;u!=null&&(S=b(u,"prelu weights","fused depthwiseConv2d"));const T=(C,P)=>{x(dl(o),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${o}'`);const[F,z,K,U]=P,Q=Up(C,K,l),le=j5(z.shape,Q,F,n,r,o,i),fe=B5(z,Q,F.shape,n,r,o,i);if(U!=null){const me=Vp(k,Q);return[le,fe,me]}return[le,fe]},N={x:h,filter:d,bias:k,preluActivationWeights:S},D={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:i,activation:l,leakyreluAlpha:f};return a==null?fr((P,F,z)=>{let K=O.runKernel(sm,N,D);return z([F,P,K]),v&&(K=M(K,[K.shape[1],K.shape[2],K.shape[3]])),{value:K,gradFunc:T}})(h,d):fr((P,F,z,K)=>{let U=O.runKernel(sm,N,D);return K([F,P,U,z]),v&&(U=M(U,[U.shape[1],U.shape[2],U.shape[3]])),{value:U,gradFunc:T}})(h,d,k)}const U5=$({fusedDepthwiseConv2d_:M5});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V5({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:s,activation:o="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(Wp(O.state.gradientDepth,o)===!1){let Q=$e(e,t,n,r);return s!=null&&(Q=Re(Q,s)),Hp(Q,o,i,a)}let l=b(e,"a","fused matMul"),u=b(t,"b","fused matMul");[l,u]=qe(l,u);const f=n?l.shape[l.rank-2]:l.shape[l.rank-1],p=r?u.shape[u.rank-1]:u.shape[u.rank-2],d=n?l.shape[l.rank-1]:l.shape[l.rank-2],h=r?u.shape[u.rank-2]:u.shape[u.rank-1],v=l.shape.slice(0,-2),w=u.shape.slice(0,-2),k=ht(v),S=ht(w);x(f===p,()=>`Error in fused matMul: inner shapes (${f}) and (${p}) of Tensors with shapes ${l.shape} and ${u.shape} and transposeA=${n} and transposeB=${r} must match.`);const N=lt(l.shape.slice(0,-2),u.shape.slice(0,-2)).concat([d,h]),D=n?M(l,[k,f,d]):M(l,[k,d,f]),C=r?M(u,[S,h,p]):M(u,[S,p,h]);let P;s!=null&&(P=b(s,"bias","fused matMul"),[P]=qe(P,l),lt(N,P.shape));let F;i!=null&&(F=b(i,"prelu weights","fused matMul"));const z=(Q,le)=>{const[fe,me,Ce,Je]=le,Se=Up(M(Q,Ce.shape),Ce,o);let G,ne;if(!n&&!r?(G=$e(Se,me,!1,!0),ne=$e(fe,Se,!0,!1)):!n&&r?(G=$e(Se,me,!1,!1),ne=$e(Se,fe,!0,!1)):n&&!r?(G=$e(me,Se,!1,!0),ne=$e(fe,Se,!1,!1)):(G=$e(me,Se,!0,!0),ne=$e(Se,fe,!0,!0)),s!=null){const ue=Vp(Je,Se);return[G,ne,ue]}else return[G,ne]},K={a:D,b:C,bias:P,preluActivationWeights:F},U={transposeA:n,transposeB:r,activation:o,leakyreluAlpha:a};return s==null?fr((le,fe,me)=>{const Ce=O.runKernel(nm,K,U);return me([le,fe,Ce]),{value:M(Ce,N),gradFunc:z}})(D,C):fr((le,fe,me,Ce)=>{const Je=O.runKernel(nm,K,U);return Ce([le,fe,Je,me]),{value:M(Je,N),gradFunc:z}})(D,C,P)}const H5=$({fusedMatMul_:V5});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const W5=Object.freeze(Object.defineProperty({__proto__:null,conv2d:F5,depthwiseConv2d:U5,matMul:H5},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K5(e){return Mp(e,.54,.46)}const G5=$({hammingWindow_:K5});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q5(e){return Mp(e,.5,.5)}const g0=$({hannWindow_:q5});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X5(e,t,n,r=!1,s=0){let o=0;const i=[];for(;o+t<=e.size;)i.push(de(e,o,t)),o+=n;if(r)for(;o<e.size;){const a=o+t-e.size,l=gt([de(e,o,t-a),Ul([a],s)]);i.push(l),o+=n}return i.length===0?fs([],[0,t]):M(gt(i),[i.length,t])}const y0=$({frame_:X5});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y5(e,t,n,r,s=g0){r==null&&(r=m0(t));const o=y0(e,t,n),i=se(o,s(t));return jp(i,r)}const Q5=$({stft_:Y5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J5(e,t,n,r,s="bilinear",o=0){const i=b(e,"image","cropAndResize"),a=b(t,"boxes","cropAndResize","float32"),l=b(n,"boxInd","cropAndResize","int32"),u=a.shape[0];x(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),x(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${a.shape}.`),x(l.rank===1&&l.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${a.shape}.`),x(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),x(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),x(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const f={image:i,boxes:a,boxInd:l},p={method:s,extrapolationValue:o,cropSize:r};return O.runKernel(sS,f,p)}const Z5=$({cropAndResize_:J5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e8(e){const t=b(e,"image","flipLeftRight","float32");x(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return O.runKernel(bS,n,{})}const t8=$({flipLeftRight_:e8});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n8(e){const t=b(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];x(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),x(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(t.rank);return s.fill(1,0,n),s[n]=3,si(t,s)}const r8=$({grayscaleToRGB_:n8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s8(e,t,n=0,r=.5){const s=b(e,"image","rotateWithOffset","float32");x(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const o={image:s},i={radians:t,fillValue:n,center:r};return O.runKernel(ub,o,i)}const o8=$({rotateWithOffset_:s8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eo(e,t,n,r,s,o){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),o==null&&(o=0);const i=e.shape[0];return n=Math.min(n,i),x(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),x(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),x(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),x(t.rank===1,()=>"scores must be a 1D tensor"),x(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),x(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:o}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i8(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const o=b(e,"boxes","nonMaxSuppression","float32"),i=b(t,"scores","nonMaxSuppression","float32"),a=Eo(o,i,n,r,s);n=a.maxOutputSize,r=a.iouThreshold,s=a.scoreThreshold;const l={maxOutputSize:n,iouThreshold:r,scoreThreshold:s};return O.runKernel(oE,{boxes:o,scores:i},l)}const a8=$({nonMaxSuppression_:i8});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l8(e,t,n){const r=u8(e,t,n),s=r<0?-(r+1):r;e.splice(s,0,t)}function u8(e,t,n){return f8(e,t,n||c8)}function c8(e,t){return e>t?1:e<t?-1:0}function f8(e,t,n){let r=0,s=e.length,o=0,i=!1;for(;r<s;){o=r+(s-r>>>1);const a=n(t,e[o]);a>0?r=o+1:(s=o,i=!a)}return i?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p8(e,t,n,r,s){return Kp(e,t,n,r,s,0)}function d8(e,t,n,r,s,o){return Kp(e,t,n,r,s,0,!1,o,!0)}function h8(e,t,n,r,s,o){return Kp(e,t,n,r,s,o,!0)}function Kp(e,t,n,r,s,o,i=!1,a=!1,l=!1){const u=[];for(let k=0;k<t.length;k++)t[k]>s&&u.push({score:t[k],boxIndex:k,suppressBeginIndex:0});u.sort(gm);const f=o>0?-.5/o:0,p=[],d=[];for(;p.length<n&&u.length>0;){const k=u.pop(),{score:S,boxIndex:T,suppressBeginIndex:N}=k;if(S<s)break;let D=!1;for(let C=p.length-1;C>=N;--C){const P=m8(e,T,p[C]);if(P>=r){D=!0;break}if(k.score=k.score*g8(r,f,P),k.score<=s)break}k.suppressBeginIndex=p.length,D||(k.score===S?(p.push(T),d.push(k.score)):k.score>s&&l8(u,k,gm))}const h=p.length,v=n-h;a&&v>0&&(p.push(...new Array(v).fill(0)),d.push(...new Array(v).fill(0)));const w={selectedIndices:p};return i&&(w.selectedScores=d),l&&(w.validOutputs=h),w}function m8(e,t,n){const r=e.subarray(t*4,t*4+4),s=e.subarray(n*4,n*4+4),o=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),a=Math.max(r[0],r[2]),l=Math.max(r[1],r[3]),u=Math.min(s[0],s[2]),f=Math.min(s[1],s[3]),p=Math.max(s[0],s[2]),d=Math.max(s[1],s[3]),h=(a-o)*(l-i),v=(p-u)*(d-f);if(h<=0||v<=0)return 0;const w=Math.max(o,u),k=Math.max(i,f),S=Math.min(a,p),T=Math.min(l,d),N=Math.max(S-w,0)*Math.max(T-k,0);return N/(h+v-N)}function g8(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function gm(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function y8(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const o=b(e,"boxes","nonMaxSuppressionAsync"),i=b(t,"scores","nonMaxSuppressionAsync"),a=Eo(o,i,n,r,s);n=a.maxOutputSize,r=a.iouThreshold,s=a.scoreThreshold;const l=await Promise.all([o.data(),i.data()]),u=l[0],f=l[1],{selectedIndices:p}=p8(u,f,n,r,s);return o!==e&&o.dispose(),i!==t&&i.dispose(),$t(p,"int32")}const v8=y8;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w8(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=0){const i=b(e,"boxes","nonMaxSuppression"),a=b(t,"scores","nonMaxSuppression"),l=Eo(i,a,n,r,s,o);n=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,o=l.softNmsSigma;const u={boxes:i,scores:a},f={maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:o},p=O.runKernel(aE,u,f);return{selectedIndices:p[0],selectedScores:p[1]}}const S8=$({nonMaxSuppressionWithScore_:w8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function E8(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=0){const i=b(e,"boxes","nonMaxSuppressionAsync"),a=b(t,"scores","nonMaxSuppressionAsync"),l=Eo(i,a,n,r,s,o);n=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,o=l.softNmsSigma;const u=await Promise.all([i.data(),a.data()]),f=u[0],p=u[1],{selectedIndices:d,selectedScores:h}=h8(f,p,n,r,s,o);return i!==e&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:$t(d,"int32"),selectedScores:$t(h)}}const b8=E8;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T8(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=!1){const i=b(e,"boxes","nonMaxSuppression"),a=b(t,"scores","nonMaxSuppression"),l=Eo(i,a,n,r,s,null),u=l.maxOutputSize,f=l.iouThreshold,p=l.scoreThreshold,d={boxes:i,scores:a},h={maxOutputSize:u,iouThreshold:f,scoreThreshold:p,padToMaxOutputSize:o},v=O.runKernel(iE,d,h);return{selectedIndices:v[0],validOutputs:v[1]}}const N8=$({nonMaxSuppressionPadded_:T8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function k8(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=!1){const i=b(e,"boxes","nonMaxSuppressionAsync"),a=b(t,"scores","nonMaxSuppressionAsync"),l=Eo(i,a,n,r,s,null),u=l.maxOutputSize,f=l.iouThreshold,p=l.scoreThreshold,[d,h]=await Promise.all([i.data(),a.data()]),{selectedIndices:v,validOutputs:w}=d8(d,h,u,f,p,o);return i!==e&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:$t(v,"int32"),validOutputs:_e(w,"int32")}}const x8=k8;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _8(e,t,n=!1,r=!1){const s=b(e,"images","resizeBilinear");x(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),x(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),x(r===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=s,i=!1;s.rank===3&&(i=!0,o=M(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const a={images:o},l={alignCorners:n,halfPixelCenters:r,size:t},u=O.runKernel(TE,a,l);return i?M(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const $8=$({resizeBilinear_:_8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D8(e,t,n=!1,r=!1){const s=b(e,"images","resizeNearestNeighbor");x(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),x(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),x(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),x(r===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=s,i=!1;s.rank===3&&(i=!0,o=M(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const a={images:o},l={alignCorners:n,halfPixelCenters:r,size:t},u=O.runKernel(bE,a,l);return i?M(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const I8=$({resizeNearestNeighbor_:D8});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C8(e,t="binary",n=!1,r=.5){const s=b(e,"image","threshold"),o=.2989,i=.587,a=.114,l=s.shape[0]*s.shape[1];let u=se($t([r]),255),f,p,d,h;if(x(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),x(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),x(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),x(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),s.shape[2]===3){[f,p,d]=Di(s,[1,1,1],-1);const k=se(f,o),S=se(p,i),T=se(d,a);h=Re(Re(k,S),T)}else h=e;if(t==="otsu"){const k=jy(Qe(c0(h),"int32"),Ln([]),256);u=O8(k,l)}const v=n?Rp(h,u):Gl(h,u);return Qe(se(v,255),"int32")}function O8(e,t){let n=$t([-1]),r=$t([0]),s=$t([0]),o,i,a,l,u,f;for(let p=0;p<e.size-1;p++){o=de(e,0,p+1),i=de(e,p+1),u=Ie(Fe(o),t),f=Ie(Fe(i),t);const d=Fe(se(o,$i(0,o.size)));a=Ie(d,Fe(o));const h=Ul(i.shape,o.size),v=Re($i(0,i.size),h),w=se(i,v);l=Ie(Fe(w),Fe(i));const k=ve(a,l),S=ve(a,l),T=se(u,f);s=se(se(T,k),S);const N=Gl(s,r);r=po(N,s,r),n=po(N,$t([p]),n)}return n}const A8=$({threshold_:C8});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P8(e,t,n="nearest",r="constant",s=0,o){const i=b(e,"image","transform","float32"),a=b(t,"transforms","transform","float32");x(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),x(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),x(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const l={image:i,transforms:a},u={interpolation:n,fillMode:r,fillValue:s,outputShape:o};return O.runKernel(rb,l,u)}const R8=$({transform_:P8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F8(e,t,n){x(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),x(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);const r=b(e,"a","bandPart");x(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[o,i]=r.shape.slice(-2);if(!(t<=o))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${o}).`);if(!(n<=i))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${i}).`);t<0&&(t=o),n<0&&(n=i);const a=M($i(0,o,1,"int32"),[-1,1]),l=$i(0,i,1,"int32"),u=ve(a,l),f=hl(Rp(u,_e(+t,"int32")),Xy(u,_e(-n,"int32"))),p=ho([o,i],r.dtype);return M(pr(ks(M(r,[-1,o,i])).map(d=>po(f,d,p))),s)}const L8=$({bandPart_:F8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B8(e){let t;if(Array.isArray(e)){t=!1,x(e!=null&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=e[0].shape[0];for(let o=1;o<e.length;++o)x(e[o].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[o].shape[0]} vs. ${s})`)}else t=!0,e=Di(e,e.shape[0],0).map(s=>ct(s,[0]));x(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);const n=[],r=e;for(let s=0;s<e.length;++s)n.push(O.tidy(()=>{let o=r[s];if(s>0)for(let i=0;i<s;++i){const a=se(Fe(se(n[i],o)),n[i]);o=ve(o,a)}return Ie(o,Kl(o,"euclidean"))}));return t?pr(n,0):n}const z8=$({gramSchmidt_:B8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j8(e,t=!1){if(x(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return ym(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce((l,u)=>l*u),r=ks(M(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),s=[],o=[];r.forEach(l=>{const[u,f]=ym(l,t);s.push(u),o.push(f)});const i=M(pr(s,0),e.shape),a=M(pr(o,0),e.shape);return[i,a]}}function ym(e,t=!1){return O.tidy(()=>{x(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);const n=e.shape[0],r=e.shape[1];let s=Ky(n),o=Lr(e);const i=fs([[1]],[1,1]);let a=Lr(i);const l=n>=r?r:n;for(let u=0;u<l;++u){const f=o,p=a,d=s;[a,o,s]=O.tidy(()=>{const h=de(o,[u,u],[n-u,1]),v=Kl(h),w=de(o,[u,u],[1,1]),k=po(Gl(w,0),fs([[-1]]),fs([[1]])),S=ve(w,se(k,v)),T=Ie(h,S);T.shape[0]===1?a=Lr(i):a=gt([i,de(T,[1,0],[T.shape[0]-1,T.shape[1]])],0);const N=rr(Ie($e(k,S),v)),D=de(o,[u,0],[n-u,r]),C=se(N,a),P=Zc(a);if(u===0)o=ve(D,$e(C,$e(P,D)));else{const K=ve(D,$e(C,$e(P,D)));o=gt([de(o,[0,0],[u,r]),K],0)}const F=Zc(C),z=de(s,[0,u],[n,s.shape[1]-u]);if(u===0)s=ve(z,$e($e(z,a),F));else{const K=ve(z,$e($e(z,a),F));s=gt([de(s,[0,0],[n,u]),K],1)}return[a,o,s]}),to([f,p,d])}return!t&&n>r&&(s=de(s,[0,0],[n,r]),o=de(o,[0,0],[r,r])),[s,o]})}const M8=$({qr_:j8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ct;(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Ct||(Ct={}));function U8(e,t,n=Ct.SUM_BY_NONZERO_WEIGHTS){const r=b(e,"losses","computeWeightedLoss");let s=null;t!=null&&(s=b(t,"weights","computeWeightedLoss"));const o=s==null?r:se(r,s);if(n===Ct.NONE)return o;if(n===Ct.SUM)return Fe(o);if(n===Ct.MEAN){if(s==null)return ml(o);{const i=r.size/s.size,a=Ie(Fe(o),Fe(s));return i>1?Ie(a,_e(i)):a}}if(n===Ct.SUM_BY_NONZERO_WEIGHTS){if(s==null)return Ie(Fe(o),_e(r.size));{const i=se(s,as(r.shape)),a=Qe(Fe(s0(i,_e(0))),"float32");return Ie(Fe(o),a)}}throw Error(`Unknown reduction: ${n}`)}const gr=$({computeWeightedLoss_:U8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V8(e,t,n,r=Ct.SUM_BY_NONZERO_WEIGHTS){const s=b(e,"labels","absoluteDifference"),o=b(t,"predictions","absoluteDifference");let i=null;n!=null&&(i=b(n,"weights","absoluteDifference")),vn(s.shape,o.shape,"Error in absoluteDifference: ");const a=cn(ve(s,o));return gr(a,i,r)}const H8=$({absoluteDifference_:V8});function W8(e,t,n,r,s=Ct.SUM_BY_NONZERO_WEIGHTS){const o=b(e,"labels","cosineDistance"),i=b(t,"predictions","cosineDistance");let a=null;r!=null&&(a=b(r,"weights","cosineDistance")),vn(o.shape,i.shape,"Error in cosineDistance: ");const l=_e(1),u=ve(l,Fe(se(o,i),n,!0));return gr(u,a,s)}const K8=$({cosineDistance_:W8});function G8(e,t,n,r=Ct.SUM_BY_NONZERO_WEIGHTS){let s=b(e,"labels","hingeLoss");const o=b(t,"predictions","hingeLoss");let i=null;n!=null&&(i=b(n,"weights","hingeLoss")),vn(s.shape,o.shape,"Error in hingeLoss: ");const a=_e(1);s=ve(se(_e(2),s),a);const l=ql(ve(a,se(s,o)));return gr(l,i,r)}const q8=$({hingeLoss_:G8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X8(e,t,n,r=1,s=Ct.SUM_BY_NONZERO_WEIGHTS){const o=b(e,"labels","huberLoss"),i=b(t,"predictions","huberLoss");let a=null;n!=null&&(a=b(n,"weights","huberLoss")),vn(o.shape,i.shape,"Error in huberLoss: ");const l=_e(r),u=cn(ve(i,o)),f=r0(u,l),p=ve(u,f),d=Re(se(_e(.5),Wl(f)),se(l,p));return gr(d,a,s)}const Y8=$({huberLoss_:X8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q8(e,t,n,r=1e-7,s=Ct.SUM_BY_NONZERO_WEIGHTS){const o=b(e,"labels","logLoss"),i=b(t,"predictions","logLoss");let a=null;n!=null&&(a=b(n,"weights","logLoss")),vn(o.shape,i.shape,"Error in logLoss: ");const l=_e(1),u=_e(r),f=rr(se(o,_i(Re(i,u)))),p=se(ve(l,o),_i(Re(ve(l,i),u))),d=ve(f,p);return gr(d,a,s)}const J8=$({logLoss_:Q8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z8(e,t,n,r=Ct.SUM_BY_NONZERO_WEIGHTS){const s=b(e,"labels","meanSquaredError"),o=b(t,"predictions","meanSquaredError");let i=null;n!=null&&(i=b(n,"weights","meanSquaredError")),vn(s.shape,o.shape,"Error in meanSquaredError: ");const a=p0(s,o);return gr(a,i,r)}const e$=$({meanSquaredError_:Z8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t$(e,t){const n=b(e,"labels","sigmoidCrossEntropyWithLogits"),r=b(t,"logits","sigmoidCrossEntropyWithLogits");vn(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=ql(r),o=se(r,n),i=Qy(cr(rr(cn(r))));return Re(ve(s,o),i)}function n$(e,t,n,r=0,s=Ct.SUM_BY_NONZERO_WEIGHTS){let o=b(e,"multiClassLabels","sigmoidCrossEntropy");const i=b(t,"logits","sigmoidCrossEntropy");let a=null;if(n!=null&&(a=b(n,"weights","sigmoidCrossEntropy")),vn(o.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){const u=_e(r),f=_e(1),p=_e(.5);o=Re(se(o,ve(f,u)),se(p,u))}const l=t$(o,i);return gr(l,a,s)}const r$=$({sigmoidCrossEntropy_:n$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s$(e,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return fr((s,o,i)=>{const l=Zy(o,[n],!0),u=ve(Qe(o,"float32"),l);i([s,u]);const f=rr(se(u,s));return{value:Fe(f,[n]),gradFunc:(h,v)=>{const[w,k]=v,S=Hl(h.shape,[n]);return[se(M(h,S),ve(Qe(w,"float32"),cr(k))),se(M(h,S),ve(cr(k),Qe(w,"float32")))]}}})(e,t)}function o$(e,t,n,r=0,s=Ct.SUM_BY_NONZERO_WEIGHTS){let o=b(e,"onehotLabels","softmaxCrossEntropy");const i=b(t,"logits","softmaxCrossEntropy");let a=null;if(n!=null&&(a=b(n,"weights","softmaxCrossEntropy")),vn(o.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){const u=_e(r),f=_e(1),p=_e(o.shape[1]);o=Re(se(o,ve(f,u)),Ie(u,p))}const l=s$(o,i);return gr(l,a,s)}const i$=$({softmaxCrossEntropy_:o$});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a$(e,t,n,r){const s=b(e,"indices","sparseFillEmptyRows","int32"),o=b(t,"values","sparseFillEmptyRows"),i=b(n,"denseShape","sparseFillEmptyRows","int32"),a=b(r,"defaultValue","sparseFillEmptyRows",o.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(o.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${o.shape}`);if(i.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(a.rank!==0)throw new Error(`Default value should be a scalar but received shape ${a.shape}`);const l={indices:s,values:o,denseShape:i,defaultValue:a},u=O.runKernel(VE,l);return{outputIndices:u[0],outputValues:u[1],emptyRowIndicator:u[2],reverseIndexMap:u[3]}}const l$=$({sparseFillEmptyRows_:a$});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u$(e,t,n){const r=b(e,"inputIndices","sparseReshape","int32"),s=b(t,"inputShape","sparseReshape","int32"),o=b(n,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(o.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${o.shape}`);const i={inputIndices:r,inputShape:s,newShape:o},a=O.runKernel(HE,i);return{outputIndices:a[0],outputShape:a[1]}}const c$=$({sparseReshape_:u$});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f$(e,t,n){const r=b(e,"data","sparseSegmentMean"),s=b(t,"indices","sparseSegmentMean","int32"),o=b(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${o.shape}`);const i={data:r,indices:s,segmentIds:o};return O.runKernel(WE,i)}const p$=$({sparseSegmentMean_:f$});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d$(e,t,n){const r=b(e,"data","sparseSegmentSum"),s=b(t,"indices","sparseSegmentSum","int32"),o=b(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${o.shape}`);const i={data:r,indices:s,segmentIds:o};return O.runKernel(KE,i)}const h$=$({sparseSegmentSum_:d$});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m$(e,t,n,r,s,o,i,a){const l=b(e,"data","stringNGrams","string");if(l.dtype!=="string")throw new Error("Data must be of datatype string");if(l.shape.length!==1)throw new Error(`Data must be a vector, saw: ${l.shape}`);const u=b(t,"dataSplits","stringNGrams");if(u.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const f={separator:n,nGramWidths:r,leftPad:s,rightPad:o,padWidth:i,preserveShortSequences:a},p={data:l,dataSplits:u},d=O.runKernel(YE,p,f);return{nGrams:d[0],nGramsSplits:d[1]}}const g$=$({stringNGrams_:m$});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y$(e,t,n=!0){const r=b(e,"input","stringSplit","string"),s=b(t,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const o={skipEmpty:n},i={input:r,delimiter:s},a=O.runKernel(QE,i,o);return{indices:a[0],values:a[1],shape:a[2]}}const v$=$({stringSplit_:y$});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w$(e,t){const n=b(e,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const s={input:n};return O.runKernel(JE,s,r)}const S$=$({stringToHashBucketFast_:w$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E$={fft:zp,ifft:gl,rfft:jp,irfft:f0},b$={hammingWindow:G5,hannWindow:g0,frame:y0,stft:Q5},Xl={flipLeftRight:t8,grayscaleToRGB:r8,resizeNearestNeighbor:I8,resizeBilinear:$8,rotateWithOffset:o8,cropAndResize:Z5,nonMaxSuppression:a8,nonMaxSuppressionAsync:v8,nonMaxSuppressionWithScore:S8,nonMaxSuppressionWithScoreAsync:b8,nonMaxSuppressionPadded:N8,nonMaxSuppressionPaddedAsync:x8,threshold:A8,transform:R8},T$={bandPart:L8,gramSchmidt:z8,qr:M8},N$={absoluteDifference:H8,computeWeightedLoss:gr,cosineDistance:K8,hingeLoss:q8,huberLoss:Y8,logLoss:J8,meanSquaredError:e$,sigmoidCrossEntropy:r$,softmaxCrossEntropy:i$},k$={sparseFillEmptyRows:l$,sparseReshape:c$,sparseSegmentMean:p$,sparseSegmentSum:h$},x$={stringNGrams:g$,stringSplit:v$,stringToHashBucketFast:S$};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _$=we();_$.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var un;(function(e){e[e.DT_INVALID=0]="DT_INVALID",e[e.DT_FLOAT=1]="DT_FLOAT",e[e.DT_DOUBLE=2]="DT_DOUBLE",e[e.DT_INT32=3]="DT_INT32",e[e.DT_UINT8=4]="DT_UINT8",e[e.DT_INT16=5]="DT_INT16",e[e.DT_INT8=6]="DT_INT8",e[e.DT_STRING=7]="DT_STRING",e[e.DT_COMPLEX64=8]="DT_COMPLEX64",e[e.DT_INT64=9]="DT_INT64",e[e.DT_BOOL=10]="DT_BOOL",e[e.DT_QINT8=11]="DT_QINT8",e[e.DT_QUINT8=12]="DT_QUINT8",e[e.DT_QINT32=13]="DT_QINT32",e[e.DT_BFLOAT16=14]="DT_BFLOAT16",e[e.DT_QINT16=15]="DT_QINT16",e[e.DT_QUINT16=16]="DT_QUINT16",e[e.DT_UINT16=17]="DT_UINT16",e[e.DT_COMPLEX128=18]="DT_COMPLEX128",e[e.DT_HALF=19]="DT_HALF",e[e.DT_RESOURCE=20]="DT_RESOURCE",e[e.DT_VARIANT=21]="DT_VARIANT",e[e.DT_UINT32=22]="DT_UINT32",e[e.DT_UINT64=23]="DT_UINT64",e[e.DT_FLOAT_REF=101]="DT_FLOAT_REF",e[e.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",e[e.DT_INT32_REF=103]="DT_INT32_REF",e[e.DT_UINT8_REF=104]="DT_UINT8_REF",e[e.DT_INT16_REF=105]="DT_INT16_REF",e[e.DT_INT8_REF=106]="DT_INT8_REF",e[e.DT_STRING_REF=107]="DT_STRING_REF",e[e.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",e[e.DT_INT64_REF=109]="DT_INT64_REF",e[e.DT_BOOL_REF=110]="DT_BOOL_REF",e[e.DT_QINT8_REF=111]="DT_QINT8_REF",e[e.DT_QUINT8_REF=112]="DT_QUINT8_REF",e[e.DT_QINT32_REF=113]="DT_QINT32_REF",e[e.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",e[e.DT_QINT16_REF=115]="DT_QINT16_REF",e[e.DT_QUINT16_REF=116]="DT_QUINT16_REF",e[e.DT_UINT16_REF=117]="DT_UINT16_REF",e[e.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",e[e.DT_HALF_REF=119]="DT_HALF_REF",e[e.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",e[e.DT_VARIANT_REF=121]="DT_VARIANT_REF",e[e.DT_UINT32_REF=122]="DT_UINT32_REF",e[e.DT_UINT64_REF=123]="DT_UINT64_REF"})(un||(un={}));var vm;(function(e){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(e.CheckpointFormatVersion||(e.CheckpointFormatVersion={}))})(vm||(vm={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $$={};function v0(e){return $$[e]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g(e,t,n,r,s){const o=t.inputParams[e];if(o&&o.inputIndexStart!==void 0){const a=o.inputIndexStart,l=o.inputIndexEnd===0?void 0:o.inputIndexEnd===void 0?a+1:o.inputIndexEnd;if(o.type==="tensor")return _t(t.inputNames[o.inputIndexStart],n,r,s);if(o.type==="tensors")return t.inputNames.slice(a,l).map(d=>_t(d,n,r,s));const u=_t(t.inputNames.slice(a)[0],n,r,s),f=u.dataSync();return o.type==="number"?f[0]:jc(u.shape,f)}const i=t.attrParams[e];return i&&i.value}function _t(e,t,n,r){const[s,o]=Bt(e);if(r!=null){const a=r.getHashTableHandleByName(s);if(a!=null)return a}const i=n.currentContextIds.find(a=>!!t[yl(s,a)]);return i!==void 0?t[yl(s,i)][o]:void 0}function D$(e,t,n){return t[yl(e,n.currentContextId)]}function On(e,t){const[n,r,s]=Bt(e);return[yl(n,t&&t.currentContextId),r,s]}function yl(e,t){return t?`${e}-${t}`:e}function Bt(e){const t=e.split(":");if(t.length===1)return[e,0,void 0];const n=t[0],r=t.length===3?t[1]:void 0,s=Number(t[t.length-1]);return[n,s,r]}function Oa(e,t,n){let r=g("pad",e,t,n);if(r==="explicit"){r=g("explicitPaddings",e,t,n);const s=[[0,0],[0,0],[0,0],[0,0]];for(let o=0;o<4;o++)s[o][0]=r[o*2],s[o][1]=r[o*2+1];return s}return r}function Qn(e){return e.kept?e:Lr(e)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I$=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],C$=Object.freeze(Object.defineProperty({__proto__:null,json:I$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O$=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],A$=Object.freeze(Object.defineProperty({__proto__:null,json:O$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const P$=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],R$=Object.freeze(Object.defineProperty({__proto__:null,json:P$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const F$=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],L$=Object.freeze(Object.defineProperty({__proto__:null,json:F$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B$=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],z$=Object.freeze(Object.defineProperty({__proto__:null,json:B$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j$=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],M$=Object.freeze(Object.defineProperty({__proto__:null,json:j$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U$=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],V$=Object.freeze(Object.defineProperty({__proto__:null,json:U$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const H$=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],W$=Object.freeze(Object.defineProperty({__proto__:null,json:H$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const K$=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}],G$=Object.freeze(Object.defineProperty({__proto__:null,json:K$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const q$=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],X$=Object.freeze(Object.defineProperty({__proto__:null,json:q$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Y$=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Q$=Object.freeze(Object.defineProperty({__proto__:null,json:Y$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const J$=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}],Z$=Object.freeze(Object.defineProperty({__proto__:null,json:J$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const e7=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}],t7=Object.freeze(Object.defineProperty({__proto__:null,json:e7},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n7=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],r7=Object.freeze(Object.defineProperty({__proto__:null,json:n7},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s7=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}],o7=Object.freeze(Object.defineProperty({__proto__:null,json:s7},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const i7=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],a7=Object.freeze(Object.defineProperty({__proto__:null,json:i7},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const l7=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],u7=Object.freeze(Object.defineProperty({__proto__:null,json:l7},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const c7=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],f7=Object.freeze(Object.defineProperty({__proto__:null,json:c7},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p7=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],d7=Object.freeze(Object.defineProperty({__proto__:null,json:p7},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wm{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[C$,A$,R$,L$,z$,M$,V$,W$,G$,X$,Q$,Z$,t7,r7,o7,a7,u7,f7,d7],n=[].concat(...t.map(r=>r.json));this.opMappers=n.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(t,n={}){const r=t.node,s=[],o=[],i=[],a=r.reduce((w,k)=>(w[k.name]=this.mapNode(k),k.op.startsWith("Placeholder")?s.push(w[k.name]):k.op==="Const"?o.push(w[k.name]):(k.input==null||k.input.length===0)&&i.push(w[k.name]),w),{});let l=[];const u=[];let f={},p={};n!=null&&(f=this.mapSignatureEntries(n.inputs),p=this.mapSignatureEntries(n.outputs));const d=Object.keys(a);d.forEach(w=>{const k=a[w];k.inputNames.forEach((S,T)=>{const[N,,D]=On(S),C=a[N];if(C.outputs!=null){const P=C.outputs.indexOf(D);if(P!==-1){const F=`${N}:${P}`;k.inputNames[T]=F}}k.inputs.push(C),C.children.push(k)})}),Object.keys(p).length===0?d.forEach(w=>{const k=a[w];k.children.length===0&&u.push(k)}):Object.keys(p).forEach(w=>{const[k]=On(w),S=a[k];S!=null&&(S.signatureKey=p[w],u.push(S))}),Object.keys(f).length>0?Object.keys(f).forEach(w=>{const[k]=On(w),S=a[k];S&&(S.signatureKey=f[w],l.push(S))}):l=s;let h={};t.library!=null&&t.library.function!=null&&(h=t.library.function.reduce((w,k)=>(w[k.signature.name]=this.mapFunction(k),w),{}));const v={nodes:a,inputs:l,outputs:u,weights:o,placeholders:s,signature:n,functions:h};return i.length>0&&(v.initNodes=i),v}mapSignatureEntries(t){return Object.keys(t||{}).reduce((n,r)=>(n[t[r].name]=r,n),{})}mapNode(t){const n=v0(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});const r={name:t.name,op:t.op,category:n.category,inputNames:(t.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:n.outputs};return n.inputs!=null&&(r.inputParams=n.inputs.reduce((s,o)=>(s[o.name]={type:o.type,inputIndexStart:o.start,inputIndexEnd:o.end},s),{})),n.attrs!=null&&(r.attrParams=n.attrs.reduce((s,o)=>{const i=o.type;let a;switch(o.type){case"string":a=pf(t.attr,o.tfName,o.defaultValue),a===void 0&&o.tfDeprecatedName&&(a=pf(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"string[]":a=wf(t.attr,o.tfName,o.defaultValue),a===void 0&&o.tfDeprecatedName&&(a=wf(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"number":a=hf(t.attr,o.tfName,o.defaultValue||0),a===void 0&&o.tfDeprecatedName&&(a=hf(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"number[]":a=vf(t.attr,o.tfName,o.defaultValue),a===void 0&&o.tfDeprecatedName&&(a=vf(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"bool":a=df(t.attr,o.tfName,o.defaultValue),a===void 0&&o.tfDeprecatedName&&(a=df(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"bool[]":a=Ef(t.attr,o.tfName,o.defaultValue),a===void 0&&o.tfDeprecatedName&&(a=Ef(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"shape":a=yf(t.attr,o.tfName,o.defaultValue),a===void 0&&o.tfDeprecatedName&&(a=yf(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"shape[]":a=Sf(t.attr,o.tfName,o.defaultValue),a===void 0&&o.tfDeprecatedName&&(a=Sf(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"dtype":a=mf(t.attr,o.tfName,o.defaultValue),a===void 0&&o.tfDeprecatedName&&(a=mf(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"dtype[]":a=gf(t.attr,o.tfName,o.defaultValue),a===void 0&&o.tfDeprecatedName&&(a=gf(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"func":a=Sm(t.attr,o.tfName,o.defaultValue),a===void 0&&o.tfDeprecatedName&&(a=Sm(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${o.type} for op: ${t.op}`)}return s[o.name]={value:a,type:i},s},{})),r}mapFunction(t){const n=t.nodeDef,r=[],s=[];let o={};n!=null&&(o=n.reduce((p,d)=>(p[d.name]=this.mapNode(d),d.op==="Const"&&s.push(p[d.name]),p),{}));const i=[],a=[];t.signature.inputArg.forEach(p=>{const[d]=On(p.name),h={name:d,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Gp(p.type),type:"dtype"}},children:[]};h.signatureKey=p.name,i.push(h),o[d]=h}),Object.keys(o).forEach(p=>{const d=o[p];d.inputNames.forEach((h,v)=>{const[w,,k]=On(h),S=o[w];if(S.outputs!=null){const T=S.outputs.indexOf(k);if(T!==-1){const N=`${w}:${T}`;d.inputNames[v]=N}}d.inputs.push(S),S.children.push(d)})});const u=t.ret;t.signature.outputArg.forEach(p=>{const[d,h]=On(u[p.name]),v=o[d];v!=null&&(v.defaultOutput=h,a.push(v))});const f=this.mapArgsToSignature(t);return{nodes:o,inputs:i,outputs:a,weights:s,placeholders:r,signature:f}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r),n),{}),outputs:t.signature.outputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r,t.ret),n),{})}}mapArgToTensorInfo(t,n){let r=t.name;return n!=null&&(r=n[r]),{name:r,dtype:t.type}}}function h7(e){const t=we().global;if(typeof t.atob<"u")return t.atob(e);if(typeof Buffer<"u")return new Buffer(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function w0(e,t){const n=Array.isArray(e)?String.fromCharCode.apply(null,e):h7(e);return t?n:n.toLowerCase()}function pf(e,t,n,r=!1){const s=e[t];return s!=null?w0(s.s,r):n}function df(e,t,n){const r=e[t];return r?r.b:n}function hf(e,t,n){const r=e[t]||{},s=r.i!=null?r.i:r.f!=null?r.f:n;return typeof s=="number"?s:parseInt(s,10)}function Gp(e){switch(typeof e=="string"&&(e=un[e]),e){case un.DT_FLOAT:case un.DT_HALF:return"float32";case un.DT_INT32:case un.DT_INT64:case un.DT_INT8:case un.DT_UINT8:return"int32";case un.DT_BOOL:return"bool";case un.DT_DOUBLE:return"float32";case un.DT_STRING:return"string";default:return null}}function Sm(e,t,n){const r=e[t];return r&&r.func?r.func.name:n}function mf(e,t,n){const r=e[t];return r&&r.type?Gp(r.type):n}function gf(e,t,n){const r=e[t];return r&&r.list&&r.list.type?r.list.type.map(s=>Gp(s)):n}function S0(e){if(!e.unknownRank)return e.dim!=null?e.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function yf(e,t,n){const r=e[t];return r&&r.shape?S0(r.shape):n}function vf(e,t,n){const r=e[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):n}function wf(e,t,n,r=!1){const s=e[t];return s&&s.list&&s.list.s?s.list.s.map(o=>w0(o,r)):n}function Sf(e,t,n){const r=e[t];return r&&r.list&&r.list.shape?r.list.shape.map(s=>S0(s)):n}function Ef(e,t,n){const r=e[t];return r&&r.list&&r.list.b?r.list.b:n}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class m7{constructor(t,n,r){this.node=t,this.tensorMap=n,this.context=r,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(s=>this.getInput(s)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((s,o)=>(s[o]=this.getAttr(o),s),{}))}getInput(t){return _t(t,this.tensorMap,this.context)}getAttr(t,n){const r=this.node.rawAttrs[t];if(r.tensor!=null)return _t(t,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return hf(this.node.rawAttrs,t,n);if(r.s!=null)return pf(this.node.rawAttrs,t,n);if(r.b!=null)return df(this.node.rawAttrs,t,n);if(r.shape!=null)return yf(this.node.rawAttrs,t,n);if(r.type!=null)return mf(this.node.rawAttrs,t,n);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return vf(this.node.rawAttrs,t,n);if(r.list.s!=null)return wf(this.node.rawAttrs,t,n);if(r.list.shape!=null)return Sf(this.node.rawAttrs,t,n);if(r.list.b!=null)return Ef(this.node.rawAttrs,t,n);if(r.list.type!=null)return gf(this.node.rawAttrs,t,n)}return n}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Et=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:yy,abs:cn,acos:QT,acosh:ZT,add:Re,addN:tN,all:rN,any:oN,argMax:aN,argMin:uN,asin:fN,asinh:dN,atan:mN,atan2:yN,atanh:wN,avgPool:By,avgPool3d:_N,basicLSTMCell:AN,batchNorm:Ml,batchNorm2d:BN,batchNorm3d:jN,batchNorm4d:UN,batchToSpaceND:zy,bincount:jy,booleanMaskAsync:v5,broadcastArgs:WN,broadcastTo:Ca,buffer:ur,cast:Qe,ceil:qN,clipByValue:My,clone:Lr,complex:Ur,concat:gt,concat1d:QN,concat2d:ZN,concat3d:tk,concat4d:rk,conv1d:ik,conv2d:Vl,conv2dTranspose:uk,conv3d:fk,conv3dTranspose:mk,cos:yk,cosh:wk,cosineWindow:Mp,cumprod:Ek,cumsum:Tk,denseBincount:kk,depthToSpace:_k,depthwiseConv2d:Op,diag:Ik,dilation2d:Ok,div:Ie,divNoNan:Lk,dot:zk,dropout:I5,einsum:Mk,elu:Hy,enclosingPowerOfTwo:m0,equal:Vy,erf:Hk,euclideanNorm:ex,exp:cr,expandDims:Yn,expm1:sx,eye:Ky,fft:zp,fill:Ul,floor:Gy,floorDiv:Ly,fused:W5,gather:qy,gatherND:_5,greater:Gl,greaterEqual:Xy,ifft:gl,imag:jl,image:Xl,inTopKAsync:O5,irfft:f0,isFinite:px,isInf:hx,isNaN:gx,leakyRelu:Yy,less:wx,lessEqual:Rp,linalg:T$,linspace:Ex,localResponseNormalization:Tx,log:_i,log1p:Qy,logSigmoid:$x,logSoftmax:Cx,logSumExp:Zy,logicalAnd:hl,logicalNot:e0,logicalOr:t0,logicalXor:Lx,losses:N$,lowerBound:zx,matMul:$e,max:no,maxPool:n0,maxPool3d:Ux,maxPoolWithArgmax:Hx,maximum:Kx,mean:ml,meshgrid:qx,min:nf,minimum:r0,mirrorPad:Qx,mod:Zx,moments:t6,movingAverage:S5,mul:se,multiRNNCell:r6,multinomial:o6,neg:rr,norm:Kl,notEqual:s0,oneHot:DT,ones:as,onesLike:l6,op:$,outerProduct:c6,pad:zi,pad1d:d6,pad2d:m6,pad3d:y6,pad4d:w6,pool:N6,pow:Pp,prelu:i0,print:Dy,prod:_6,raggedGather:D6,raggedTensorToTensor:C6,rand:A6,randomGamma:Z6,randomNormal:a0,randomStandardNormal:n_,randomUniform:l0,range:$i,real:xi,reciprocal:o_,relu:ql,relu6:u0,reshape:M,reverse:Ss,reverse1d:c_,reverse2d:p_,reverse3d:h_,reverse4d:g_,rfft:jp,round:c0,rsqrt:w_,scalar:_e,scatterND:b5,searchSorted:Fp,selu:E_,separableConv2d:T_,setdiff1dAsync:k_,sigmoid:cs,sign:__,signal:b$,sin:D_,sinh:C_,slice:de,slice1d:A_,slice2d:R_,slice3d:L_,slice4d:z_,softmax:M_,softplus:Jy,spaceToBatchND:o0,sparse:k$,sparseToDense:k5,spectral:E$,split:Di,sqrt:rf,square:Wl,squaredDifference:p0,squeeze:ct,stack:pr,step:d0,stridedSlice:J_,string:x$,sub:ve,sum:Fe,tan:e5,tanh:tf,tensor:Ln,tensor1d:$t,tensor2d:fs,tensor3d:Fy,tensor4d:t5,tensor5d:n5,tensor6d:r5,tile:si,topk:o5,transpose:Zc,truncatedNormal:a5,unique:u5,unsortedSegmentSum:f5,unstack:ks,upperBound:d5,variable:h5,where:po,whereAsync:h0,zeros:ho,zerosLike:Ap},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const g7=(e,t,n,r=Et)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(g("a",e,t,n),g("b",e,t,n))];case"AddN":return[r.addN(g("tensors",e,t,n))];case"FloorMod":case"Mod":return[r.mod(g("a",e,t,n),g("b",e,t,n))];case"Mul":return[r.mul(g("a",e,t,n),g("b",e,t,n))];case"RealDiv":case"Div":return[r.div(g("a",e,t,n),g("b",e,t,n))];case"DivNoNan":return[r.divNoNan(g("a",e,t,n),g("b",e,t,n))];case"FloorDiv":return[r.floorDiv(g("a",e,t,n),g("b",e,t,n))];case"Sub":return[r.sub(g("a",e,t,n),g("b",e,t,n))];case"Minimum":return[r.minimum(g("a",e,t,n),g("b",e,t,n))];case"Maximum":return[r.maximum(g("a",e,t,n),g("b",e,t,n))];case"Pow":return[r.pow(g("a",e,t,n),g("b",e,t,n))];case"SquaredDifference":return[r.squaredDifference(g("a",e,t,n),g("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y7=(e,t,n,r=Et)=>{switch(e.op){case"Abs":case"ComplexAbs":return[r.abs(g("x",e,t,n))];case"Acos":return[r.acos(g("x",e,t,n))];case"Acosh":return[r.acosh(g("x",e,t,n))];case"Asin":return[r.asin(g("x",e,t,n))];case"Asinh":return[r.asinh(g("x",e,t,n))];case"Atan":return[r.atan(g("x",e,t,n))];case"Atan2":return[r.atan2(g("x",e,t,n),g("y",e,t,n))];case"Atanh":return[r.atanh(g("x",e,t,n))];case"Ceil":return[r.ceil(g("x",e,t,n))];case"Complex":return[r.complex(g("real",e,t,n),g("imag",e,t,n))];case"Cos":return[r.cos(g("x",e,t,n))];case"Cosh":return[r.cosh(g("x",e,t,n))];case"Elu":return[r.elu(g("x",e,t,n))];case"Erf":return[r.erf(g("x",e,t,n))];case"Exp":return[r.exp(g("x",e,t,n))];case"Expm1":return[r.expm1(g("x",e,t,n))];case"Floor":return[r.floor(g("x",e,t,n))];case"Log":return[r.log(g("x",e,t,n))];case"Log1p":return[r.log1p(g("x",e,t,n))];case"Imag":return[r.imag(g("x",e,t,n))];case"Neg":return[r.neg(g("x",e,t,n))];case"Reciprocal":return[r.reciprocal(g("x",e,t,n))];case"Real":return[r.real(g("x",e,t,n))];case"Relu":return[r.relu(g("x",e,t,n))];case"Round":return[r.round(g("x",e,t,n))];case"Selu":return[r.selu(g("x",e,t,n))];case"Sigmoid":return[r.sigmoid(g("x",e,t,n))];case"Sin":return[r.sin(g("x",e,t,n))];case"Sign":return[r.sign(g("x",e,t,n))];case"Sinh":return[r.sinh(g("x",e,t,n))];case"Softplus":return[r.softplus(g("x",e,t,n))];case"Sqrt":return[r.sqrt(g("x",e,t,n))];case"Square":return[r.square(g("x",e,t,n))];case"Tanh":return[r.tanh(g("x",e,t,n))];case"Tan":return[r.tan(g("x",e,t,n))];case"ClipByValue":return[r.clipByValue(g("x",e,t,n),g("clipValueMin",e,t,n),g("clipValueMax",e,t,n))];case"Relu6":return[r.relu6(g("x",e,t,n))];case"Rsqrt":return[r.rsqrt(_t(e.inputNames[0],t,n))];case"Prod":return[r.prod(g("x",e,t,n),g("axes",e,t,n))];case"LeakyRelu":return[r.leakyRelu(g("x",e,t,n),g("alpha",e,t,n))];case"Prelu":return[r.prelu(g("x",e,t,n),g("alpha",e,t,n))];case"IsNan":return[r.isNaN(_t(e.inputNames[0],t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fn(e,t,n=""){if(!(typeof e=="number"||typeof t=="number")){x(e.length===t.length,()=>n+` Shapes ${e} and ${t} must match`);for(let r=0;r<e.length;r++){const s=e[r],o=t[r];x(s<0||o<0||s===o,()=>n+` Shapes ${e} and ${t} must match`)}}}function Em(e){return!(typeof e=="number"||e.some(t=>t<0))}function Mo(e,t,n){let r=bf(e,n);const s=!Em(r);if(s&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&t.forEach(o=>{r=bf(o.shape,r)}),!Em(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function bf(e,t){if(typeof e=="number")return t;if(typeof t=="number")return e;if(e.length!==t.length)throw new Error(`Incompatible ranks during merge: ${e} vs. ${t}`);const n=[];for(let r=0;r<e.length;++r){const s=e[r],o=t[r];if(s>=0&&o>=0&&s!==o)throw new Error(`Incompatible shape during merge: ${e} vs. ${t}`);n[r]=s>=0?s:o}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class v7{constructor(t,n,r,s,o,i,a){this.name=t,this.dtype=n,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=o,this.dynamicSize=i,this.clearAfterRead=a,this.tensors=[],this.closed_=!1,this.idTensor=_e(0),$r(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.tensor.id))&&n.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const n=this.tensors[t];if(n.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(n.cleared=!0),n.read=!0,n.tensor}readMany(t){return t.map(n=>this.read(n))}write(t,n){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[t]||{};if(n.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${n.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=n.shape),fn(this.elementShape,n.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);r.tensor=n,$r(n),r.written=!0,this.tensors[t]=r}writeMany(t,n){if(t.length!==n.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${n.length}.`);t.forEach((r,s)=>this.write(r,n[s]))}gather(t,n){if(n&&n!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${n}`);if(t)t=t.slice(0,this.size());else{t=[];for(let s=0;s<this.size();s++)t.push(s)}if(t.length===0)return Ln([],[0].concat(this.elementShape));const r=this.readMany(t);return fn(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),pr(r,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return Ln([],[0].concat(this.elementShape));const n=[];for(let s=0;s<this.size();s++)n.push(s);const r=this.readMany(n);return fn(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),gt(r,0)}scatter(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);if(t.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${n.shape[0]}`);const r=Math.max(...t);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(t,ks(n,0))}split(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);let r=0;const s=t.map(l=>(r+=l,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const o=r===0?0:n.size/r,i=[];mt(()=>{n=M(n,[1,r,o]);for(let l=0;l<t.length;++l){const f=[0,l===0?0:s[l-1],0],p=[1,t[l],o];i[l]=M(de(n,f,p),this.elementShape)}return i});const a=[];for(let l=0;l<t.length;l++)a[l]=l;this.writeMany(a,i)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Es{constructor(t,n,r,s=-1){this.tensors=t,this.elementShape=n,this.elementDtype=r,t!=null&&t.forEach(o=>{if(r!==o.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${o.dtype}`);fn(n,o.shape,"TensorList shape mismatch: "),$r(o)}),this.idTensor=_e(0),this.maxNumElements=s,$r(this.idTensor)}get id(){return this.idTensor.id}copy(){return new Es([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.id))&&n.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,n,r=-1){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);fn(t,this.elementShape,"TensorList shape mismatch: ");const s=Mo(this.elementShape,this.tensors,t);return mt(()=>{const o=this.tensors.map(i=>M(i,s));return pr(o,0)})}popBack(t,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=Mo(this.elementShape,this.tensors,t),s=this.tensors.pop();return s.kept=!1,fn(s.shape,t,"TensorList shape mismatch: "),M(s,r)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(fn(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");$r(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);const n=new Es([],this.elementShape,this.elementDtype,this.maxNumElements);n.tensors.length=t;for(let r=0;r<Math.min(this.tensors.length,t);++r)n.tensors[r]=this.tensors[r];return n}getItem(t,n,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);fn(this.tensors[t].shape,n,"TensorList shape mismatch: ");const s=Mo(this.elementShape,this.tensors,n);return M(this.tensors[t],s)}setItem(t,n){if(n.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);fn(this.elementShape,n.shape,"TensorList shape mismatch: "),$r(n),this.tensors[t]!=null&&(this.tensors[t].kept=!1),this.tensors[t]=n}gather(t,n,r){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);fn(this.elementShape,r,"TensorList shape mismatch: "),t=t.slice(0,this.size());const s=Mo(this.elementShape,this.tensors,r);return t.length===0?Ln([],[0].concat(s)):mt(()=>{const o=t.map(i=>M(this.tensors[i],s));return pr(o,0)})}concat(t,n){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);fn(this.elementShape,n,"TensorList shape mismatch: ");const r=Mo(this.elementShape,this.tensors,n);return this.size()===0?Ln([],[0].concat(r)):mt(()=>{const s=this.tensors.map(o=>M(o,r));return gt(s,0)})}}function w7(e,t,n){const r=e.dtype;if(e.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==n)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${n}`);const s=e.shape.slice(1);fn(s,t,"TensorList shape mismatch: ");const o=ks(e);return new Es(o,t,r)}function S7(e,t,n,r){return new Es([],e,t,r)}function E7(e,t,n,r){if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const s=Math.max(...t);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const o=new Es([],n,e.dtype,r),i=ks(e,0);return t.forEach((a,l)=>{o.setItem(a,i[l])}),o}function b7(e,t,n){let r=0;const s=t.map(f=>(r+=f,r));if(r!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${e.shape}`);const o=e.shape.slice(1),i=bf(o,n),a=r===0?0:e.size/r,l=mt(()=>{const f=[];e=M(e,[1,r,a]);for(let p=0;p<t.length;++p){const h=[0,p===0?0:s[p-1],0],v=[1,t[p],a];f[p]=M(de(e,h,v),i)}return e.dispose(),f}),u=new Es([],n,e.dtype,t.length);for(let f=0;f<l.length;f++)u.setItem(f,l[f]);return u}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const T7=async(e,t,n)=>{switch(e.op){case"If":case"StatelessIf":{const r=g("thenBranch",e,t,n),s=g("elseBranch",e,t,n),o=g("cond",e,t,n),i=g("args",e,t,n);return(await o.data())[0]?n.functionMap[r].executeFunctionAsync(i,n.tensorArrayMap,n.tensorListMap):n.functionMap[s].executeFunctionAsync(i,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const r=g("body",e,t,n),s=g("cond",e,t,n),o=g("args",e,t,n),i=await n.functionMap[s].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap),a=o.map(f=>f.id);let l=await i[0].data();i.forEach(f=>{!f.kept&&a.indexOf(f.id)===-1&&f.dispose()});let u=o;for(;l[0];){const f=u;u=await n.functionMap[r].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);const p=u.map(h=>h.id);f.forEach(h=>{!h.kept&&a.indexOf(h.id)===-1&&p.indexOf(h.id)===-1&&h.dispose()});const d=await n.functionMap[s].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);l=await d[0].data(),d.forEach(h=>{!h.kept&&a.indexOf(h.id)===-1&&p.indexOf(h.id)===-1&&h.dispose()})}return u}case"LoopCond":{const r=g("pred",e,t,n);return[Qn(r)]}case"Switch":{const r=g("pred",e,t,n);let s=g("data",e,t,n);return s.kept||(s=Qn(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=e.inputNames.find(s=>_t(s,t,n)!==void 0);if(r){const s=_t(r,t,n);return[Qn(s)]}return}case"Enter":{const r=g("frameName",e,t,n),s=g("tensor",e,t,n);return n.enterFrame(r),[Qn(s)]}case"Exit":{const r=g("tensor",e,t,n);return n.exitFrame(),[Qn(r)]}case"NextIteration":{const r=g("tensor",e,t,n);return n.nextIteration(),[Qn(r)]}case"TensorArrayV3":{const r=g("size",e,t,n),s=g("dtype",e,t,n),o=g("elementShape",e,t,n),i=g("dynamicSize",e,t,n),a=g("clearAfterRead",e,t,n),l=g("identicalElementShapes",e,t,n),u=g("name",e,t,n),f=new v7(u,s,r,o,l,i,a);return n.addTensorArray(f),[f.idTensor,_e(1)]}case"TensorArrayWriteV3":{const r=g("tensorArrayId",e,t,n),s=g("index",e,t,n),o=g("tensor",e,t,n),i=n.getTensorArray(r.id);return i.write(s,o),[i.idTensor]}case"TensorArrayReadV3":{const r=g("tensorArrayId",e,t,n),s=g("index",e,t,n);return[n.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=g("tensorArrayId",e,t,n),s=g("indices",e,t,n),o=g("dtype",e,t,n);return[n.getTensorArray(r.id).gather(s,o)]}case"TensorArrayScatterV3":{const r=g("tensorArrayId",e,t,n),s=g("indices",e,t,n),o=g("tensor",e,t,n),i=n.getTensorArray(r.id);return i.scatter(s,o),[i.idTensor]}case"TensorArrayConcatV3":{const r=g("tensorArrayId",e,t,n),s=n.getTensorArray(r.id),o=g("dtype",e,t,n);return[s.concat(o)]}case"TensorArraySplitV3":{const r=g("tensorArrayId",e,t,n),s=g("tensor",e,t,n),o=g("lengths",e,t,n),i=n.getTensorArray(r.id);return i.split(o,s),[i.idTensor]}case"TensorArraySizeV3":{const r=g("tensorArrayId",e,t,n),s=n.getTensorArray(r.id);return[_e(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=g("tensorArrayId",e,t,n),s=n.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=g("tensorListId",e,t,n),s=g("index",e,t,n),o=g("tensor",e,t,n),i=n.getTensorList(r.id);return i.setItem(s,o),[i.idTensor]}case"TensorListGetItem":{const r=g("tensorListId",e,t,n),s=g("index",e,t,n),o=g("elementShape",e,t,n),i=g("elementDType",e,t,n);return[n.getTensorList(r.id).getItem(s,o,i)]}case"TensorListScatterV2":case"TensorListScatter":{const r=g("indices",e,t,n),s=g("tensor",e,t,n),o=g("elementShape",e,t,n),i=g("numElements",e,t,n),a=E7(s,r,o,i);return n.addTensorList(a),[a.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=g("elementShape",e,t,n),s=g("elementDType",e,t,n);let o;e.op==="TensorListReserve"?o="numElements":o="maxNumElements";const i=g(o,e,t,n),a=e.op==="TensorListReserve"?-1:i,l=S7(r,s,i,a);return n.addTensorList(l),[l.idTensor]}case"TensorListGather":{const r=g("tensorListId",e,t,n),s=g("indices",e,t,n),o=g("elementShape",e,t,n),i=g("elementDType",e,t,n);return[n.getTensorList(r.id).gather(s,i,o)]}case"TensorListStack":{const r=g("tensorListId",e,t,n),s=g("elementShape",e,t,n),o=g("elementDType",e,t,n),i=g("numElements",e,t,n);return[n.getTensorList(r.id).stack(s,o,i)]}case"TensorListFromTensor":{const r=g("tensor",e,t,n),s=g("elementShape",e,t,n),o=g("elementDType",e,t,n),i=w7(r,s,o);return n.addTensorList(i),[i.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=g("tensorListId",e,t,n),s=n.getTensorList(r.id),o=g("dtype",e,t,n),i=g("elementShape",e,t,n);return[s.concat(o,i)]}case"TensorListPushBack":{const r=g("tensorListId",e,t,n),s=g("tensor",e,t,n),o=n.getTensorList(r.id);return o.pushBack(s),[o.idTensor]}case"TensorListPopBack":{const r=g("tensorListId",e,t,n),s=g("elementShape",e,t,n),o=g("elementDType",e,t,n);return[n.getTensorList(r.id).popBack(s,o)]}case"TensorListSplit":{const r=g("tensor",e,t,n),s=g("elementShape",e,t,n),o=g("lengths",e,t,n),i=b7(r,o,s);return n.addTensorList(i),[i.idTensor]}case"TensorListLength":{const r=g("tensorListId",e,t,n),s=n.getTensorList(r.id);return[_e(s.size(),"int32")]}case"TensorListResize":{const r=g("tensorListId",e,t,n),s=g("size",e,t,n),i=n.getTensorList(r.id).resize(s);return n.addTensorList(i),[i.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bm(e,t,n){const[r,s]=g("fusedOps",e,t,n),o=r==="biasadd",i=!o,a=s==="prelu",l=r==="fusedbatchnorm",u=g("numArgs",e,t,n);if(o){if(a&&u!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!a&&o&&u!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(l)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const f=g("strides",e,t,n),p=Oa(e,t,n),d=g("dataFormat",e,t,n).toUpperCase(),h=g("dilations",e,t,n);let[v,w]=g("args",e,t,n);i&&(w=v,v=void 0);const k=g("leakyreluAlpha",e,t,n);return{stride:f,pad:p,dataFormat:d,dilations:h,biasArg:v,preluArg:w,activationFunc:s,leakyreluAlpha:k}}const N7=(e,t,n,r=Et)=>{switch(e.op){case"Conv1D":{const s=g("stride",e,t,n),o=g("pad",e,t,n),i=g("dataFormat",e,t,n).toUpperCase(),a=g("dilation",e,t,n);return[r.conv1d(g("x",e,t,n),g("filter",e,t,n),s,o,i,a)]}case"Conv2D":{const s=g("strides",e,t,n),o=Oa(e,t,n),i=g("dataFormat",e,t,n).toUpperCase(),a=g("dilations",e,t,n);return[r.conv2d(g("x",e,t,n),g("filter",e,t,n),[s[1],s[2]],o,i,[a[1],a[2]])]}case"_FusedConv2D":{const{stride:s,pad:o,dataFormat:i,dilations:a,biasArg:l,preluArg:u,activationFunc:f,leakyreluAlpha:p}=bm(e,t,n);return[r.fused.conv2d({x:g("x",e,t,n),filter:g("filter",e,t,n),strides:[s[1],s[2]],pad:o,dataFormat:i,dilations:[a[1],a[2]],bias:l,activation:f,preluActivationWeights:u,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:o,dataFormat:i,dilations:a,biasArg:l,preluArg:u,activationFunc:f,leakyreluAlpha:p}=bm(e,t,n);return[r.fused.depthwiseConv2d({x:g("x",e,t,n),filter:g("filter",e,t,n),strides:[s[1],s[2]],pad:o,dataFormat:i,dilations:[a[1],a[2]],bias:l,activation:f,preluActivationWeights:u,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=g("outputShape",e,t,n),o=g("strides",e,t,n),i=Oa(e,t,n);return[r.conv2dTranspose(g("x",e,t,n),g("filter",e,t,n),s,[o[1],o[2]],i)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=g("strides",e,t,n),o=Oa(e,t,n),i=g("dilations",e,t,n),a=g("dataFormat",e,t,n).toUpperCase();return[r.depthwiseConv2d(g("input",e,t,n),g("filter",e,t,n),[s[1],s[2]],o,a,[i[1],i[2]])]}case"Conv3D":{const s=g("strides",e,t,n),o=g("pad",e,t,n),i=g("dataFormat",e,t,n).toUpperCase(),a=g("dilations",e,t,n);return[r.conv3d(g("x",e,t,n),g("filter",e,t,n),[s[1],s[2],s[3]],o,i,[a[1],a[2],a[3]])]}case"AvgPool":{const s=g("strides",e,t,n),o=g("pad",e,t,n),i=g("kernelSize",e,t,n);return[r.avgPool(g("x",e,t,n),[i[1],i[2]],[s[1],s[2]],o)]}case"MaxPool":{const s=g("strides",e,t,n),o=g("pad",e,t,n),i=g("kernelSize",e,t,n);return[r.maxPool(g("x",e,t,n),[i[1],i[2]],[s[1],s[2]],o)]}case"MaxPoolWithArgmax":{const s=g("strides",e,t,n),o=g("pad",e,t,n),i=g("kernelSize",e,t,n),a=g("includeBatchInIndex",e,t,n),{result:l,indexes:u}=r.maxPoolWithArgmax(g("x",e,t,n),[i[1],i[2]],[s[1],s[2]],o,a);return[l,u]}case"AvgPool3D":{const s=g("strides",e,t,n),o=g("pad",e,t,n),i=g("kernelSize",e,t,n);return[r.avgPool3d(g("x",e,t,n),[i[1],i[2],i[3]],[s[1],s[2],s[3]],o)]}case"MaxPool3D":{const s=g("strides",e,t,n),o=g("pad",e,t,n),i=g("kernelSize",e,t,n);return[r.maxPool3d(g("x",e,t,n),[i[1],i[2],i[3]],[s[1],s[2],s[3]],o)]}case"Dilation2D":{const s=g("strides",e,t,n),o=g("pad",e,t,n),i=g("dilations",e,t,n),a=s[1],l=s[2],u=i[1],f=i[2];return[r.dilation2d(g("x",e,t,n),g("filter",e,t,n),[a,l],o,[u,f],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const k7=(e,t,n,r=Et)=>{switch(e.op){case"Fill":{const s=g("shape",e,t,n),o=g("dtype",e,t,n),i=g("value",e,t,n);return[r.fill(s,i,o)]}case"LinSpace":{const s=g("start",e,t,n),o=g("stop",e,t,n),i=g("num",e,t,n);return[r.linspace(s,o,i)]}case"Multinomial":{const s=g("logits",e,t,n),o=g("numSamples",e,t,n),i=g("seed",e,t,n);return[r.multinomial(s,o,i)]}case"OneHot":{const s=g("indices",e,t,n),o=g("depth",e,t,n),i=g("onValue",e,t,n),a=g("offValue",e,t,n),l=g("dtype",e,t,n);return[r.oneHot(s,o,i,a,l)]}case"Ones":return[r.ones(g("shape",e,t,n),g("dtype",e,t,n))];case"OnesLike":return[r.onesLike(g("x",e,t,n))];case"RandomStandardNormal":return[r.randomStandardNormal(g("shape",e,t,n),g("dtype",e,t,n),g("seed",e,t,n))];case"RandomUniform":return[r.randomUniform(g("shape",e,t,n),g("minval",e,t,n),g("maxval",e,t,n),g("dtype",e,t,n))];case"Range":{const s=g("start",e,t,n),o=g("stop",e,t,n),i=g("step",e,t,n);return[r.range(s,o,i,g("dtype",e,t,n))]}case"TruncatedNormal":{const s=g("shape",e,t,n),o=g("mean",e,t,n),i=g("stdDev",e,t,n),a=g("seed",e,t,n);return[r.truncatedNormal(s,o,i,g("dtype",e,t,n),a)]}case"Zeros":return[r.zeros(g("shape",e,t,n),g("dtype",e,t,n))];case"ZerosLike":return[r.zerosLike(g("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lu(e,t,n){const r=g("boxes",e,t,n),s=g("scores",e,t,n),o=g("maxOutputSize",e,t,n),i=g("iouThreshold",e,t,n),a=g("scoreThreshold",e,t,n),l=g("softNmsSigma",e,t,n);return{boxes:r,scores:s,maxOutputSize:o,iouThreshold:i,scoreThreshold:a,softNmsSigma:l}}const x7=async(e,t,n,r,s=Et)=>{switch(e.op){case"NonMaxSuppressionV5":{const{boxes:o,scores:i,maxOutputSize:a,iouThreshold:l,scoreThreshold:u,softNmsSigma:f}=Lu(e,t,n),p=await s.image.nonMaxSuppressionWithScoreAsync(o,i,a,l,u,f);return[p.selectedIndices,p.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:o,scores:i,maxOutputSize:a,iouThreshold:l,scoreThreshold:u}=Lu(e,t,n),f=g("padToMaxOutputSize",e,t,n),p=await s.image.nonMaxSuppressionPaddedAsync(o,i,a,l,u,f);return[p.selectedIndices,p.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:o,scores:i,maxOutputSize:a,iouThreshold:l,scoreThreshold:u}=Lu(e,t,n);return[await s.image.nonMaxSuppressionAsync(o,i,a,l,u)]}case"Where":{const o=s.cast(g("condition",e,t,n),"bool"),i=[await s.whereAsync(o)];return o.dispose(),i}case"ListDiff":return s.setdiff1dAsync(g("x",e,t,n),g("y",e,t,n));default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _7=(e,t,n,r=Et)=>{switch(e.op){case"LowerBound":{const s=g("sortedSequence",e,t,n),o=g("values",e,t,n);return[r.lowerBound(s,o)]}case"TopKV2":{const s=g("x",e,t,n),o=g("k",e,t,n),i=g("sorted",e,t,n),a=r.topk(s,o,i);return[a.values,a.indices]}case"UpperBound":{const s=g("sortedSequence",e,t,n),o=g("values",e,t,n);return[r.upperBound(s,o)]}case"Unique":{const s=g("x",e,t,n),o=r.unique(s);return[o.values,o.indices]}case"UniqueV2":{const s=g("x",e,t,n),o=g("axis",e,t,n),i=r.unique(s,o);return[i.values,i.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $7=(e,t,n,r=Et)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":const s=g("default",e,t,n);return[_t(e.name,t,n)||s];case"Placeholder":return[_t(e.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const f=g("x",e,t,n);return[Qn(f)]}case"IdentityN":return g("x",e,t,n).map(f=>Qn(f));case"Snapshot":const o=g("x",e,t,n);return[Qn(o)];case"Shape":return[r.tensor1d(g("x",e,t,n).shape,"int32")];case"ShapeN":return g("x",e,t,n).map(f=>r.tensor1d(f.shape));case"Size":return[r.scalar(g("x",e,t,n).size,"int32")];case"Rank":return[r.scalar(g("x",e,t,n).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const i=g("x",e,t,n),a=g("data",e,t,n),l=g("message",e,t,n),u=g("summarize",e,t,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(l);for(let f=0;f<a.length;f++)console.log(Array.prototype.slice.call(a[f].dataSync()).slice(0,u));return[i];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class D7{constructor(t,n){this.keyDType=t,this.valueDType=n,this.handle=_e(0),this.tensorMap=new Map,$r(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return _e(this.size(),"int32")}async import(t,n){this.checkKeyAndValueTensor(t,n);const r=await t.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),mt(()=>{const s=ks(n),o=r.length,i=s.length;x(o===i,()=>`The number of elements doesn't match, keys has ${o} elements, the values has ${i} elements.`);for(let a=0;a<o;a++){const l=r[a],u=s[a];$r(u),this.tensorMap.set(l,u)}return this.handle})}async find(t,n){this.checkKeyAndValueTensor(t,n);const r=await t.data();return mt(()=>{const s=[];for(let o=0;o<r.length;o++){const i=r[o],a=this.findWithDefault(i,n);s.push(a)}return pr(s)})}findWithDefault(t,n){const r=this.tensorMap.get(t);return r??n}checkKeyAndValueTensor(t,n){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(n.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${n.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I7=async(e,t,n,r)=>{switch(e.op){case"HashTable":case"HashTableV2":{const s=g("keyDType",e,t,n),o=g("valueDType",e,t,n),i=new D7(s,o);return r.addHashTable(e.name,i),[i.handle]}case"LookupTableImport":case"LookupTableImportV2":{const s=g("tableHandle",e,t,n,r),o=g("keys",e,t,n),i=g("values",e,t,n);return[await r.getHashTableById(s.id).import(o,i)]}case"LookupTableFind":case"LookupTableFindV2":{const s=g("tableHandle",e,t,n,r),o=g("keys",e,t,n),i=g("defaultValue",e,t,n);return[await r.getHashTableById(s.id).find(o,i)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=g("tableHandle",e,t,n,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const C7=(e,t,n,r=Et)=>{switch(e.op){case"ResizeBilinear":{const s=g("images",e,t,n),o=g("size",e,t,n),i=g("alignCorners",e,t,n),a=g("halfPixelCenters",e,t,n);return[r.image.resizeBilinear(s,[o[0],o[1]],i,a)]}case"ResizeNearestNeighbor":{const s=g("images",e,t,n),o=g("size",e,t,n),i=g("alignCorners",e,t,n),a=g("halfPixelCenters",e,t,n);return[r.image.resizeNearestNeighbor(s,[o[0],o[1]],i,a)]}case"CropAndResize":{const s=g("image",e,t,n),o=g("boxes",e,t,n),i=g("boxInd",e,t,n),a=g("cropSize",e,t,n),l=g("method",e,t,n),u=g("extrapolationValue",e,t,n);return[r.image.cropAndResize(s,o,i,a,l,u)]}case"ImageProjectiveTransformV3":{const s=g("images",e,t,n),o=g("transforms",e,t,n),i=g("outputShape",e,t,n),a=g("fillValue",e,t,n),l=g("interpolation",e,t,n),u=g("fillMode",e,t,n);return[r.image.transform(s,o,l.toLowerCase(),u.toLowerCase(),a,i)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O7=(e,t,n,r=Et)=>{switch(e.op){case"Equal":return[r.equal(g("a",e,t,n),g("b",e,t,n))];case"NotEqual":return[r.notEqual(g("a",e,t,n),g("b",e,t,n))];case"Greater":return[r.greater(g("a",e,t,n),g("b",e,t,n))];case"GreaterEqual":return[r.greaterEqual(g("a",e,t,n),g("b",e,t,n))];case"Less":return[r.less(g("a",e,t,n),g("b",e,t,n))];case"LessEqual":return[r.lessEqual(g("a",e,t,n),g("b",e,t,n))];case"LogicalAnd":return[r.logicalAnd(g("a",e,t,n),g("b",e,t,n))];case"LogicalNot":return[r.logicalNot(g("a",e,t,n))];case"LogicalOr":return[r.logicalOr(g("a",e,t,n),g("b",e,t,n))];case"Select":case"SelectV2":return[r.where(g("condition",e,t,n),g("a",e,t,n),g("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A7=(e,t,n,r=Et)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(g("a",e,t,n),g("b",e,t,n),g("transposeA",e,t,n),g("transposeB",e,t,n))];case"Einsum":return[r.einsum(g("equation",e,t,n),...g("tensors",e,t,n))];case"Transpose":return[r.transpose(g("x",e,t,n),g("perm",e,t,n))];case"_FusedMatMul":const[s,o]=g("fusedOps",e,t,n),i=s==="biasadd",a=o==="prelu",l=g("numArgs",e,t,n),u=g("leakyreluAlpha",e,t,n);if(i){if(a&&l!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!a&&l!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[f,p]=g("args",e,t,n);return[r.fused.matMul({a:g("a",e,t,n),b:g("b",e,t,n),transposeA:g("transposeA",e,t,n),transposeB:g("transposeB",e,t,n),bias:f,activation:o,preluActivationWeights:p,leakyreluAlpha:u})];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const P7=(e,t,n,r=Et)=>{switch(e.op){case"EuclideanNorm":return[r.euclideanNorm(g("x",e,t,n),g("axis",e,t,n),g("keepDims",e,t,n))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(g("x",e,t,n),g("mean",e,t,n),g("variance",e,t,n),g("offset",e,t,n),g("scale",e,t,n),g("epsilon",e,t,n))];case"FusedBatchNormV3":return[r.batchNorm(g("x",e,t,n),g("mean",e,t,n),g("variance",e,t,n),g("offset",e,t,n),g("scale",e,t,n),g("epsilon",e,t,n))];case"LRN":return[r.localResponseNormalization(g("x",e,t,n),g("radius",e,t,n),g("bias",e,t,n),g("alpha",e,t,n),g("beta",e,t,n))];case"Softmax":return[r.softmax(g("x",e,t,n))];case"LogSoftmax":return[r.logSoftmax(g("x",e,t,n))];case"SparseToDense":return[r.sparseToDense(g("sparseIndices",e,t,n),g("outputShape",e,t,n),g("sparseValues",e,t,n),g("defaultValue",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const R7=(e,t,n,r=Et)=>{switch(e.op){case"Max":{const a=g("axis",e,t,n),l=g("keepDims",e,t,n);return[r.max(g("x",e,t,n),a,l)]}case"Mean":{const a=g("axis",e,t,n),l=g("keepDims",e,t,n);return[r.mean(g("x",e,t,n),a,l)]}case"Min":{const a=g("axis",e,t,n),l=g("keepDims",e,t,n);return[r.min(g("x",e,t,n),a,l)]}case"Sum":{const a=g("axis",e,t,n),l=g("keepDims",e,t,n);return[r.sum(g("x",e,t,n),a,l)]}case"All":{const a=g("axis",e,t,n),l=g("keepDims",e,t,n);return[r.all(g("x",e,t,n),a,l)]}case"Any":{const a=g("axis",e,t,n),l=g("keepDims",e,t,n);return[r.any(g("x",e,t,n),a,l)]}case"ArgMax":{const a=g("axis",e,t,n);return[r.argMax(g("x",e,t,n),a)]}case"ArgMin":{const a=g("axis",e,t,n);return[r.argMin(g("x",e,t,n),a)]}case"Prod":{const a=g("axis",e,t,n),l=g("keepDims",e,t,n);return[r.prod(g("x",e,t,n),a,l)]}case"Cumprod":{const a=g("axis",e,t,n),l=g("exclusive",e,t,n),u=g("reverse",e,t,n);return[r.cumprod(g("x",e,t,n),a,l,u)]}case"Cumsum":{const a=g("axis",e,t,n),l=g("exclusive",e,t,n),u=g("reverse",e,t,n);return[r.cumsum(g("x",e,t,n),a,l,u)]}case"Bincount":const s=g("x",e,t,n),o=g("weights",e,t,n),i=g("size",e,t,n);return[r.bincount(s,o,i)];case"DenseBincount":{const a=g("x",e,t,n),l=g("weights",e,t,n),u=g("size",e,t,n),f=g("binaryOutput",e,t,n);return[r.denseBincount(a,l,u,f)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const F7=(e,t,n,r=Et)=>{switch(e.op){case"ConcatV2":case"Concat":{const s=g("n",e,t,n),o=g("axis",e,t,n);let i=g("tensors",e,t,n);return i=i.slice(0,s),[r.concat(i,o)]}case"Gather":{const s=g("x",e,t,n),o=g("indices",e,t,n);return[r.gather(s,r.cast(o,"int32"),0)]}case"GatherV2":{const s=g("axis",e,t,n),o=g("batchDims",e,t,n),i=g("x",e,t,n),a=g("indices",e,t,n);return[r.gather(i,r.cast(a,"int32"),s,o)]}case"Reverse":{const s=g("dims",e,t,n),o=[];for(let a=0;a<s.length;a++)s[a]&&o.push(a);const i=g("x",e,t,n);return[r.reverse(i,o)]}case"ReverseV2":{const s=g("axis",e,t,n),o=g("x",e,t,n);return[r.reverse(o,s)]}case"Slice":{const s=g("begin",e,t,n),o=g("size",e,t,n);return[r.slice(g("x",e,t,n),s,o)]}case"StridedSlice":{const s=g("begin",e,t,n),o=g("end",e,t,n),i=g("strides",e,t,n),a=g("beginMask",e,t,n),l=g("endMask",e,t,n),u=g("ellipsisMask",e,t,n),f=g("newAxisMask",e,t,n),p=g("shrinkAxisMask",e,t,n),d=g("x",e,t,n);return[r.stridedSlice(d,s,o,i,a,l,u,f,p)]}case"Pack":return mt(()=>{const s=g("axis",e,t,n),o=g("tensors",e,t,n),i=o[0].shape,a=r.squeeze(o[0]).shape,l=o.map(u=>{const f=Mr(u.shape,i);if(!f&&!Mr(r.squeeze(u).shape,a))throw new Error("the input tensors shape does not match");return f?u:r.reshape(u,i)});return[r.stack(l,s)]});case"Unpack":{const s=g("axis",e,t,n),o=g("tensor",e,t,n);return r.unstack(o,s)}case"Tile":{const s=g("reps",e,t,n);return[r.tile(g("x",e,t,n),s)]}case"Split":case"SplitV":{const s=g("axis",e,t,n),o=g("numOrSizeSplits",e,t,n),i=g("x",e,t,n);return r.split(i,o,s)}case"ScatterNd":{const s=g("indices",e,t,n),o=g("values",e,t,n),i=g("shape",e,t,n);return[r.scatterND(s,o,i)]}case"GatherNd":{const s=g("x",e,t,n),o=g("indices",e,t,n);return[r.gatherND(s,o)]}case"SparseToDense":{const s=g("sparseIndices",e,t,n),o=g("outputShape",e,t,n),i=g("sparseValues",e,t,n),a=g("defaultValue",e,t,n);return[r.sparseToDense(s,i,o,i.dtype===a.dtype?a:r.cast(a,i.dtype))]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const L7=(e,t,n,r=Et)=>{switch(e.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:o,emptyRowIndicator:i,reverseIndexMap:a}=r.sparse.sparseFillEmptyRows(g("indices",e,t,n),g("values",e,t,n),g("denseShape",e,t,n),g("defaultValue",e,t,n));return[s,o,i,a]}case"SparseReshape":{const{outputIndices:s,outputShape:o}=r.sparse.sparseReshape(g("inputIndices",e,t,n),g("inputShape",e,t,n),g("newShape",e,t,n));return[s,o]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(g("data",e,t,n),g("indices",e,t,n),g("segmentIds",e,t,n))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(g("data",e,t,n),g("indices",e,t,n),g("segmentIds",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B7=(e,t,n,r=Et)=>{switch(e.op){case"FFT":return[r.fft(g("x",e,t,n))];case"IFFT":return[r.ifft(g("x",e,t,n))];case"RFFT":return[r.rfft(g("x",e,t,n))];case"IRFFT":return[r.irfft(g("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z7=(e,t,n,r=Et)=>{switch(e.op){case"StringNGrams":{const{nGrams:s,nGramsSplits:o}=r.string.stringNGrams(g("data",e,t,n),g("dataSplits",e,t,n),g("separator",e,t,n),g("nGramWidths",e,t,n),g("leftPad",e,t,n),g("rightPad",e,t,n),g("padWidth",e,t,n),g("preserveShortSequences",e,t,n));return[s,o]}case"StringSplit":{const{indices:s,values:o,shape:i}=r.string.stringSplit(g("input",e,t,n),g("delimiter",e,t,n),g("skipEmpty",e,t,n));return[s,o,i]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(g("input",e,t,n),g("numBuckets",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j7=(e,t,n,r=Et)=>{switch(e.op){case"Cast":return[r.cast(g("x",e,t,n),g("dtype",e,t,n))];case"ExpandDims":{const s=g("axis",e,t,n);return[r.expandDims(g("x",e,t,n),s)]}case"Squeeze":{const s=g("axis",e,t,n);return[r.squeeze(g("x",e,t,n),s)]}case"Reshape":return[r.reshape(g("x",e,t,n),g("shape",e,t,n))];case"MirrorPad":return[r.mirrorPad(g("x",e,t,n),g("padding",e,t,n),g("mode",e,t,n))];case"PadV2":case"Pad":return[r.pad(g("x",e,t,n),g("padding",e,t,n),g("constantValue",e,t,n))];case"SpaceToBatchND":{const s=g("blockShape",e,t,n),o=g("paddings",e,t,n);return[r.spaceToBatchND(g("x",e,t,n),s,o)]}case"BatchToSpaceND":{const s=g("blockShape",e,t,n),o=g("crops",e,t,n);return[r.batchToSpaceND(g("x",e,t,n),s,o)]}case"DepthToSpace":{const s=g("blockSize",e,t,n),o=g("dataFormat",e,t,n).toUpperCase();return[r.depthToSpace(g("x",e,t,n),s,o)]}case"BroadcastTo":return[r.broadcastTo(g("x",e,t,n),g("shape",e,t,n))];case"BroadcastArgs":return[r.broadcastArgs(g("s0",e,t,n),g("s1",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tm(e,t,n,r,s=mt){const o=((i,a,l)=>{switch(i.category){case"arithmetic":return s(()=>g7(i,a,l));case"basic_math":return s(()=>y7(i,a,l));case"control":return T7(i,a,l);case"convolution":return s(()=>N7(i,a,l));case"creation":return s(()=>k7(i,a,l));case"dynamic":return x7(i,a,l);case"evaluation":return s(()=>_7(i,a,l));case"image":return s(()=>C7(i,a,l));case"graph":return s(()=>$7(i,a,l));case"logical":return s(()=>O7(i,a,l));case"matrices":return s(()=>A7(i,a,l));case"normalization":return s(()=>P7(i,a,l));case"reduction":return s(()=>R7(i,a,l));case"slice_join":return s(()=>F7(i,a,l));case"sparse":return s(()=>L7(i,a,l));case"spectral":return s(()=>B7(i,a,l));case"string":return s(()=>z7(i,a,l));case"transformation":return s(()=>j7(i,a,l));case"hash_table":return I7(i,a,l,r);case"custom":const u=v0(i.op);if(u&&u.customExecutor)return u.customExecutor(new m7(i,a,l));throw TypeError(`Custom op ${i.op} is not registered.`);default:throw TypeError(`Unknown op '${i.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,n);return co(o)?o.then(i=>[].concat(i)):[].concat(o)}class Nm{constructor(t={},n={},r={},s={}){this.weightMap=t,this.tensorArrayMap=n,this.tensorListMap=r,this.functionMap=s,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,n){return{id:t,frameName:n,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let n=0;n<this.contexts.length-1;n++){const r=this.contexts.slice(0,this.contexts.length-n);t.push(this.contextIdforContexts(r))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(n=>n.id===0&&n.iterationId===0?"":`${n.frameName}-${n.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const n in this.tensorArrayMap)this.tensorArrayMap[n].clearAndClose(t);for(const n in this.tensorListMap)this.tensorListMap[n].clearAndClose(t)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function km(e,t,n,r){const s=new Set,o=[];let i=null,a=null;const l=new Set,u=Object.keys(e).map(d=>Bt(d)[0]);let f=[];r!=null&&(f=r.map(d=>Bt(d.name)[0]));const p=[...t];for(;p.length>0;){const d=p.pop();if((E0(d)||W7(d)||K7(d))&&i==null&&(i=d,a=i.children.map(h=>h.name).filter(h=>s.has(h))),s.add(d.name),n[d.name]==null&&u.indexOf(d.name)===-1&&f.indexOf(d.name)===-1){if(d.inputs.length===0){o.push(d.name);continue}d.inputs.forEach(h=>{l.has(h.name)||(l.add(h.name),p.push(h))})}}return{inputs:e,outputs:t,usedNodes:s,missingInputs:o,dynamicNode:i,syncInputs:a}}function M7(e,t,n){const{usedNodes:r,inputs:s}=n,o=[],i=Object.keys(s).map(f=>Bt(f)[0]).map(f=>e.nodes[f]),a=e.initNodes;i.forEach(f=>{r.has(f.name)&&o.push(f)}),e.weights.forEach(f=>{r.has(f.name)&&o.push(f)}),a!=null&&a.forEach(f=>{r.has(f.name)&&o.push(f)});const l=new Set,u=[];for(;o.length>0;){const f=o.pop();l.add(f.name),t[f.name]||u.push(f),f.children.forEach(p=>{!l.has(p.name)&&r.has(p.name)&&p.inputs.every(d=>l.has(d.name))&&o.push(p)})}return u}const U7=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],V7=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],H7=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function E0(e){return U7.indexOf(e.op)>=0}function W7(e){return V7.indexOf(e.op)>=0}function K7(e){return H7.indexOf(e.op)>=0}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vl{constructor(t,n){this.graph=t,this.parent=n,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(r=>{this._functionExecutorMap[r]=new vl(t.functions[r],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const n=Object.keys(t).map(r=>t[r].map(s=>s.id));this._weightIds=[].concat(...n),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const n=t.signatureKey||t.name;return t.defaultOutput?`${n}:${t.defaultOutput}`:n})}get functions(){return Object.keys(this._functions).reduce((t,n)=>(t[n]=this._functions[n].signature,t),{})}getCompilationKey(t,n){const r=t.map(o=>o.name).sort(),s=n.map(o=>o.name).sort();return r.join(this.SEPERATOR)+"--"+s.join(this.SEPERATOR)}compile(t,n){const r=km(t,n,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:o,syncInputs:i}=r;if(o!=null)throw new Error(`This execution contains the node '${o.name}', which has the dynamic op '${o.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${i}]`);if(s.length>0){const a=n.map(u=>u.name),l=Object.keys(t);throw new Error(`Cannot compute the outputs [${a}] from the provided inputs [${l}]. Missing the following inputs: [${s}]`)}return M7(this.graph,this.weightMap,r)}execute(t,n){t=this.mapInputs(t);const r=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n);const s=r.map(p=>this.graph.nodes[Bt(p)[0]]),o=n.map(p=>Bt(p)[0]);let i=o.map(p=>this.graph.nodes[p]);this.resetIntermediateTensors(),i.length===0&&(i=this._outputs);const a=this.getCompilationKey(s,i);let l=this.compiledMap.get(a);l==null&&(l=this.compile(t,i),this.compiledMap.set(a,l));const u={},f={};return mt(()=>{const p=new Nm(this.weightMap,u,f,this.functionExecutorMap),d=Object.assign({},this.weightMap);Object.keys(t).forEach(w=>{const[k,S]=Bt(w),T=[];T[S]=t[w],d[k]=T});const h=this.getFrozenTensorIds(d),v={};for(let w=0;w<l.length;w++){const k=l[w];if(!d[k.name]){const S=Tm(k,d,p,this._resourceManager);if(co(S))throw new Error(`The execution of the op '${k.op}' returned a promise. Please use model.executeAsync() instead.`);d[k.name]=S,this.checkTensorForDisposal(k.name,k,d,p,h,o,v)}}return this.parent==null&&p.dispose(h),n.map(w=>_t(w,d,p))})}getFrozenTensorIds(t){const n=[].concat.apply([],Object.keys(t).map(r=>t[r]).map(r=>r.map(s=>s.id)));return new Set(n)}checkTensorForDisposal(t,n,r,s,o,i,a){n.category==="control"||i.indexOf(t)!==-1||(r[t].forEach(l=>{l!=null&&(a[l.id]=(a[l.id]||0)+n.children.length)}),n.inputs.forEach(l=>{if(l.category!=="control"){const u=D$(l.name,r,s);u!=null&&u.forEach(f=>{if(f&&!f.kept&&!o.has(f.id)){const p=a[f.id];if(p===1){if(!this.keepTensorForDebug)f.dispose();else{const[d,h]=On(n.name,s);this.intermediateTensors[d]?this.intermediateTensors[d][h]=f:(this.intermediateTensors[d]=[],this.intermediateTensors[d][h]=f)}delete a[f.id]}else p!=null&&a[f.id]--}})}}))}async executeAsync(t,n){return this._executeAsync(t,n)}disposeIntermediateTensors(){this.intermediateTensors&&(Object.keys(this.intermediateTensors).forEach(t=>this.intermediateTensors[t].forEach(n=>n.dispose())),this.disposeTensorsMap())}disposeTensorsMap(){this.tensorsMap&&Object.keys(this.tensorsMap).forEach(t=>{this.tensorsMap[t].forEach(r=>{r&&!r.kept&&!r.isDisposed&&!this.keepIds.has(r.id)&&r.dispose()})})}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(const t in this.intermediateTensors)this.intermediateTensors[t].forEach(n=>n.dispose()),delete this.intermediateTensors[t]}async _executeAsync(t,n,r=!1,s={},o={}){r||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n));try{this.keepTensorForDebug=we().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(f){console.warn(f.message)}this.resetIntermediateTensors();const i=new Nm(this.weightMap,s,o,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(t,i,n,r);const a=n.map(f=>_t(f,this.tensorsMap,i)),l=a.map(f=>f.id),u=Object.keys(t).map(f=>t[f].id);return this.keepIds=new Set([...l,...u,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),this.parent==null&&i.dispose(this.keepIds),a}async executeFunctionAsync(t,n,r){const s=t.reduce((o,i,a)=>(o[this.inputs[a].name]=i,o),{});return this._executeAsync(s,this.outputNodes,!0,n,r)}async executeWithControlFlow(t,n,r,s){const o=Object.keys(t),i=o.map(N=>this.graph.nodes[Bt(N)[0]]),a=r.map(N=>Bt(N)[0]);let l=a.map(N=>this.graph.nodes[N]);l.length===0&&(l=this._outputs);const{usedNodes:u,missingInputs:f,dynamicNode:p,syncInputs:d}=km(t,l,this.weightMap,this._initNodes),h=[...i,...this.graph.weights,...this._initNodes||[]].map(N=>({node:N,contexts:n.currentContext})),v=Object.assign({},this.weightMap);Object.keys(t).forEach(N=>{const[D,C]=Bt(N),P=[];P[C]=t[N],v[D]=P});const w={},k=this.getFrozenTensorIds(v),S={};for(;h.length>0;){const N=this.processStack(i,h,n,v,S,k,a,w,u);await Promise.all(N)}p==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const T=l.filter(N=>!E0(N)&&!_t(N.name,v,n)).map(N=>N.name);if(T.length>0){let N="";throw p!=null&&(N=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${d}]`),new Error(`Cannot compute the outputs [${T}] from the provided inputs [${o}]. Consider providing the following inputs: [${f}]. ${N}`)}return v}processStack(t,n,r,s,o,i,a,l,u){const f=[];for(;n.length>0;){const p=n.pop();r.currentContext=p.contexts;let d="";if(p.node.op==="Enter"&&g("isConstant",p.node,s,r)&&([d]=On(p.node.name,r)),s[p.node.name]==null){const h=Tm(p.node,s,r,this._resourceManager);d||([d]=On(p.node.name,r));const v=r.currentContext;co(h)?f.push(h.then(w=>(s[d]=w,r.currentContext=v,this.checkTensorForDisposal(d,p.node,s,r,i,a,l),this.processChildNodes(p.node,n,r,s,o,u),w))):(s[d]=h,this.checkTensorForDisposal(d,p.node,s,r,i,a,l),this.processChildNodes(p.node,n,r,s,o,u))}else this.processChildNodes(p.node,n,r,s,o,u)}return f}processChildNodes(t,n,r,s,o,i){t.children.forEach(a=>{const[l]=On(a.name,r);o[l]||!i.has(a.name)||(a.op==="Merge"?a.inputNames.some(u=>!!_t(u,s,r))&&(o[l]=!0,n.push({contexts:r.currentContext,node:a})):a.inputNames.every(u=>!!_t(u,s,r))&&(o[l]=!0,n.push({contexts:r.currentContext,node:a})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(n=>n.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(n=>{const r=t[n],[s]=Bt(n),o=this.graph.nodes[s];if(o.attrParams.shape&&o.attrParams.shape.value){const i=o.attrParams.shape.value,a=i.length===r.shape.length&&r.shape.every((l,u)=>i[u]===-1||i[u]===l);x(a,()=>`The shape of dict['${o.name}'] provided in model.execute(dict) must be [${i}], but was [${r.shape}]`)}o.attrParams.dtype&&o.attrParams.dtype.value&&x(r.dtype===o.attrParams.dtype.value,()=>`The dtype of dict['${o.name}'] provided in model.execute(dict) must be ${o.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(t){const n={};for(const r in t)if(this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[r]!=null){const s=this._signature.inputs[r];n[s.name]=t[r]}else n[r]=t[r];return n}checkInputs(t){const n=Object.keys(t).filter(r=>{const[s]=Bt(r);return this.graph.nodes[s]==null});if(n.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${n}] that are not part of graph`)}mapOutputs(t){return t.map(n=>this._signature!=null&&this._signature.outputs!=null&&this._signature.outputs[n]!=null?this._signature.outputs[n].name:n,{})}checkOutputs(t){t.forEach(n=>{const[r]=Bt(n);if(!this.graph.nodes[r])throw new Error(`The output '${n}' is not found in the graph`)})}}class G7{constructor(t={},n={}){this.hashTableNameToHandle=t,this.hashTableMap=n}addHashTable(t,n){this.hashTableNameToHandle[t]=n.handle,this.hashTableMap[n.id]=n}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const q7="?tfjs-format=file",X7="model.json";class Y7{constructor(t,n={},r=Ry){this.modelUrl=t,this.loadOptions=n,this.version="n/a",this.io=r,n==null&&(this.loadOptions={}),this.resourceManager=new G7}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){const t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{const n=this.io.getLoadHandlers(t,this.loadOptions);if(n.length===0)n.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(n.length>1)throw new Error(`Found more than one (${n.length}) load handlers for URL '${[t]}'`);this.handler=n[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=this.handler.load();return co(t)?t.then(n=>this.loadSync(n)):this.loadSync(t)}loadSync(t){this.artifacts=t;const n=this.artifacts.modelTopology;let r=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const o=this.artifacts.userDefinedMetadata;o.signature!=null&&(r=o.signature),o.structuredOutputKeys!=null&&(this.structuredOutputKeys=o.structuredOutputKeys)}this.signature=r,this.version=`${n.versions.producer}.${n.versions.minConsumer}`;const s=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new vl(wm.Instance.transformGraph(n,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(s),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){const o=wm.Instance.transformGraph(t.modelInitializer);this.initializer=new vl(o),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(t,n){if(typeof t=="string"){const r=this.io.getSaveHandlers(t);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${t}'`);t=r[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}predict(t,n){const r=this.execute(t,this.outputNodes);if(this.structuredOutputKeys){const s=r instanceof tt?[r]:r,o={};return s.forEach((i,a)=>o[this.structuredOutputKeys[a]]=i),o}return r}normalizeInputs(t){if(!(t instanceof tt)&&!Array.isArray(t))return t;if(t=Array.isArray(t)?t:[t],t.length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${t.length} input tensors.`);return this.inputNodes.reduce((n,r,s)=>(n[r]=t[s],n),{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}execute(t,n){t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const r=this.executor.execute(t,n);return r.length>1?r:r[0]}async executeAsync(t,n){t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const r=await this.executor.executeAsync(t,n);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((n,r)=>(n[r]=[t[r]],n),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function Q7(e,t={},n=Ry){if(e==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof e=="string"&&(e=J7(e));const r=new Y7(e,t,n);return await r.load(),r}function J7(e){return e.endsWith("/")||(e=e+"/"),`${e}${X7}${q7}`}/**
    * @license
    * Copyright 2022 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var Vr=function(){return Vr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},Vr.apply(this,arguments)};function dr(e,t,n,r){return new(n||(n=Promise))(function(s,o){function i(u){try{l(r.next(u))}catch(f){o(f)}}function a(u){try{l(r.throw(u))}catch(f){o(f)}}function l(u){var f;u.done?s(u.value):(f=u.value,f instanceof n?f:new n(function(p){p(f)})).then(i,a)}l((r=r.apply(e,t||[])).next())})}function hr(e,t){var n,r,s,o,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return function(f){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(s=2&f[0]?r.return:f[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,f[1])).done)return s;switch(r=0,s&&(f=[2&f[0],s.value]),f[0]){case 0:case 1:s=f;break;case 4:return i.label++,{value:f[1],done:!1};case 5:i.label++,r=f[1],f=[0];continue;case 7:f=i.ops.pop(),i.trys.pop();continue;default:if(s=i.trys,!((s=s.length>0&&s[s.length-1])||f[0]!==6&&f[0]!==2)){i=0;continue}if(f[0]===3&&(!s||f[1]>s[0]&&f[1]<s[3])){i.label=f[1];break}if(f[0]===6&&i.label<s[1]){i.label=s[1],s=f;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(f);break}s[2]&&i.ops.pop(),i.trys.pop();continue}f=t.call(e,i)}catch(p){f=[6,p],r=0}finally{n=s=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([l,u])}}}var b0=["rightEye","leftEye","noseTip","mouthCenter","rightEarTragion","leftEarTragion"],Bu={modelType:"short",runtime:"mediapipe",maxFaces:1},Z7=function(){function e(t){var n=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceDetectorSolution=new ey.FaceDetection({locateFile:function(r,s){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+r:s+"/"+r}}),this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode,model:t.modelType}),this.faceDetectorSolution.onResults(function(r){if(n.height=r.image.height,n.width=r.image.width,n.faces=[],r.detections!==null)for(var s=0,o=r.detections;s<o.length;s++){var i=o[s];n.faces.push(n.normalizedToAbsolute(i.landmarks,(a=i.boundingBox,l=void 0,u=void 0,f=void 0,l=a.xCenter-a.width/2,u=l+a.width,f=a.yCenter-a.height/2,{xMin:l,xMax:u,yMin:f,yMax:f+a.height,width:a.width,height:a.height})))}var a,l,u,f})}return e.prototype.normalizedToAbsolute=function(t,n){var r=this;return{keypoints:t.map(function(s,o){return{x:s.x*r.width,y:s.y*r.height,name:b0[o]}}),box:{xMin:n.xMin*this.width,yMin:n.yMin*this.height,xMax:n.xMax*this.width,yMax:n.yMax*this.height,width:n.width*this.width,height:n.height*this.height}}},e.prototype.estimateFaces=function(t,n){return dr(this,void 0,void 0,function(){var r,s;return hr(this,function(o){switch(o.label){case 0:return n&&n.flipHorizontal&&n.flipHorizontal!==this.selfieMode&&(this.selfieMode=n.flipHorizontal,this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode})),t instanceof tt?(s=ImageData.bind,[4,MT(t)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,o.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:r=t,o.label=3;case 3:return t=r,[4,this.faceDetectorSolution.send({image:t})];case 4:return o.sent(),[2,this.faces]}})})},e.prototype.dispose=function(){this.faceDetectorSolution.close()},e.prototype.reset=function(){this.faceDetectorSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},e.prototype.initialize=function(){return this.faceDetectorSolution.initialize()},e}();function e9(e){return dr(this,void 0,void 0,function(){var t,n;return hr(this,function(r){switch(r.label){case 0:return t=function(s){if(s==null)return Vr({},Bu);var o=Vr({},s);return o.runtime="mediapipe",o.modelType==null&&(o.modelType=Bu.modelType),o.maxFaces==null&&(o.maxFaces=Bu.maxFaces),o}(e),[4,(n=new Z7(t)).initialize()];case 1:return r.sent(),[2,n]}})})}function t9(e,t,n,r){var s=e.width,o=e.height,i=r?-1:1,a=Math.cos(e.rotation),l=Math.sin(e.rotation),u=e.xCenter,f=e.yCenter,p=1/t,d=1/n,h=new Array(16);return h[0]=s*a*i*p,h[1]=-o*l*p,h[2]=0,h[3]=(-.5*s*a*i+.5*o*l+u)*p,h[4]=s*l*i*d,h[5]=o*a*d,h[6]=0,h[7]=(-.5*o*a-.5*s*l*i+f)*d,h[8]=0,h[9]=0,h[10]=s*p,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,function(v){if(v.length!==16)throw new Error("Array length must be 16 but got "+v.length);return[[v[0],v[1],v[2],v[3]],[v[4],v[5],v[6],v[7]],[v[8],v[9],v[10],v[11]],[v[12],v[13],v[14],v[15]]]}(h)}function T0(e){return e instanceof tt?{height:e.shape[0],width:e.shape[1]}:{height:e.height,width:e.width}}function N0(e){return e instanceof tt?e:UT(e)}function zu(e,t){x(e.width!==0,function(){return t+" width cannot be 0."}),x(e.height!==0,function(){return t+" height cannot be 0."})}function n9(e,t){var n=function(r,s,o,i){var a=s-r,l=i-o;if(a===0)throw new Error("Original min and max are both "+r+", range cannot be 0.");var u=l/a;return{scale:u,offset:o-r*u}}(0,255,t[0],t[1]);return mt(function(){return Re(se(e,n.scale),n.offset)})}function r9(e,t,n){var r=t.outputTensorSize,s=t.keepAspectRatio,o=t.borderMode,i=t.outputTensorFloatRange,a=T0(e),l=function(d,h){return h?{xCenter:h.xCenter*d.width,yCenter:h.yCenter*d.height,width:h.width*d.width,height:h.height*d.height,rotation:h.rotation}:{xCenter:.5*d.width,yCenter:.5*d.height,width:d.width,height:d.height,rotation:0}}(a,n),u=function(d,h,v){if(v===void 0&&(v=!1),!v)return{top:0,left:0,right:0,bottom:0};var w=h.height,k=h.width;zu(h,"targetSize"),zu(d,"roi");var S,T,N=w/k,D=d.height/d.width,C=0,P=0;return N>D?(S=d.width,T=d.width*N,P=(1-D/N)/2):(S=d.height/N,T=d.height,C=(1-N/D)/2),d.width=S,d.height=T,{top:P,left:C,right:C,bottom:P}}(l,r,s),f=t9(l,a.width,a.height,!1),p=mt(function(){var d=N0(e),h=fs(function(k,S,T){return zu(T,"inputResolution"),[1/T.width*k[0][0]*S.width,1/T.height*k[0][1]*S.width,k[0][3]*S.width,1/T.width*k[1][0]*S.height,1/T.height*k[1][1]*S.height,k[1][3]*S.height,0,0]}(f,a,r),[1,8]),v=o==="zero"?"constant":"nearest",w=Xl.transform(Yn(Qe(d,"float32")),h,"bilinear",v,0,[r.height,r.width]);return i!=null?n9(w,i):w});return{imageTensor:p,padding:u,transformationMatrix:f}}function xm(e){e.reduceBoxesInLowestLayer==null&&(e.reduceBoxesInLowestLayer=!1),e.interpolatedScaleAspectRatio==null&&(e.interpolatedScaleAspectRatio=1),e.fixedAnchorSize==null&&(e.fixedAnchorSize=!1);for(var t=[],n=0;n<e.numLayers;){for(var r=[],s=[],o=[],i=[],a=n;a<e.strides.length&&e.strides[a]===e.strides[n];){var l=_m(e.minScale,e.maxScale,a,e.strides.length);if(a===0&&e.reduceBoxesInLowestLayer)o.push(1),o.push(2),o.push(.5),i.push(.1),i.push(l),i.push(l);else{for(var u=0;u<e.aspectRatios.length;++u)o.push(e.aspectRatios[u]),i.push(l);if(e.interpolatedScaleAspectRatio>0){var f=a===e.strides.length-1?1:_m(e.minScale,e.maxScale,a+1,e.strides.length);i.push(Math.sqrt(l*f)),o.push(e.interpolatedScaleAspectRatio)}}a++}for(var p=0;p<o.length;++p){var d=Math.sqrt(o[p]);r.push(i[p]/d),s.push(i[p]*d)}var h=0,v=0;if(e.featureMapHeight.length>0)h=e.featureMapHeight[n],v=e.featureMapWidth[n];else{var w=e.strides[n];h=Math.ceil(e.inputSizeHeight/w),v=Math.ceil(e.inputSizeWidth/w)}for(var k=0;k<h;++k)for(var S=0;S<v;++S)for(var T=0;T<r.length;++T){var N={xCenter:(S+e.anchorOffsetX)/v,yCenter:(k+e.anchorOffsetY)/h,width:0,height:0};e.fixedAnchorSize?(N.width=1,N.height=1):(N.width=s[T],N.height=r[T]),t.push(N)}n=a}return t}function _m(e,t,n,r){return r===1?.5*(e+t):e+(t-e)*n/(r-1)}function $m(e,t){var n=t[0],r=t[1];return[n*e[0]+r*e[1]+e[3],n*e[4]+r*e[5]+e[7]]}function s9(e){return mt(function(){var t=function(s){return mt(function(){return[de(s,[0,0,0],[1,-1,1]),de(s,[0,0,1],[1,-1,-1])]})}(e),n=t[0],r=t[1];return{boxes:ct(r),logits:ct(n)}})}function o9(e,t,n,r){return dr(this,void 0,void 0,function(){var s,o,i,a,l;return hr(this,function(u){switch(u.label){case 0:return e.sort(function(f,p){return Math.max.apply(Math,p.score)-Math.max.apply(Math,f.score)}),s=fs(e.map(function(f){return[f.locationData.relativeBoundingBox.yMin,f.locationData.relativeBoundingBox.xMin,f.locationData.relativeBoundingBox.yMax,f.locationData.relativeBoundingBox.xMax]})),o=$t(e.map(function(f){return f.score[0]})),[4,Xl.nonMaxSuppressionAsync(s,o,t,n)];case 1:return[4,(i=u.sent()).array()];case 2:return a=u.sent(),l=e.filter(function(f,p){return a.indexOf(p)>-1}),to([s,o,i]),[2,l]}})})}function i9(e,t,n){return dr(this,void 0,void 0,function(){var r,s,o,i,a;return hr(this,function(l){switch(l.label){case 0:return r=e[0],s=e[1],o=function(u,f,p){return mt(function(){var d,h,v,w;p.reverseOutputOrder?(h=ct(de(u,[0,p.boxCoordOffset+0],[-1,1])),d=ct(de(u,[0,p.boxCoordOffset+1],[-1,1])),w=ct(de(u,[0,p.boxCoordOffset+2],[-1,1])),v=ct(de(u,[0,p.boxCoordOffset+3],[-1,1]))):(d=ct(de(u,[0,p.boxCoordOffset+0],[-1,1])),h=ct(de(u,[0,p.boxCoordOffset+1],[-1,1])),v=ct(de(u,[0,p.boxCoordOffset+2],[-1,1])),w=ct(de(u,[0,p.boxCoordOffset+3],[-1,1]))),h=Re(se(Ie(h,p.xScale),f.w),f.x),d=Re(se(Ie(d,p.yScale),f.h),f.y),p.applyExponentialOnBoxSize?(v=se(cr(Ie(v,p.hScale)),f.h),w=se(cr(Ie(w,p.wScale)),f.w)):(v=se(Ie(v,p.hScale),f.h),w=se(Ie(w,p.wScale),f.h));var k=ve(d,Ie(v,2)),S=ve(h,Ie(w,2)),T=Re(d,Ie(v,2)),N=Re(h,Ie(w,2)),D=gt([M(k,[p.numBoxes,1]),M(S,[p.numBoxes,1]),M(T,[p.numBoxes,1]),M(N,[p.numBoxes,1])],1);if(p.numKeypoints)for(var C=0;C<p.numKeypoints;++C){var P=p.keypointCoordOffset+C*p.numValuesPerKeypoint,F=void 0,z=void 0;p.reverseOutputOrder?(F=ct(de(u,[0,P],[-1,1])),z=ct(de(u,[0,P+1],[-1,1]))):(z=ct(de(u,[0,P],[-1,1])),F=ct(de(u,[0,P+1],[-1,1])));var K=Re(se(Ie(F,p.xScale),f.w),f.x),U=Re(se(Ie(z,p.yScale),f.h),f.y);D=gt([D,M(K,[p.numBoxes,1]),M(U,[p.numBoxes,1])],1)}return D})}(s,t,n),i=mt(function(){var u=r;return n.sigmoidScore?(n.scoreClippingThresh!=null&&(u=My(r,-n.scoreClippingThresh,n.scoreClippingThresh)),u=cs(u)):u}),[4,a9(o,i,n)];case 1:return a=l.sent(),to([o,i]),[2,a]}})})}function a9(e,t,n){return dr(this,void 0,void 0,function(){var r,s,o,i,a,l,u,f,p,d,h,v;return hr(this,function(w){switch(w.label){case 0:return r=[],[4,e.data()];case 1:return s=w.sent(),[4,t.data()];case 2:for(o=w.sent(),i=0;i<n.numBoxes;++i)if(!(n.minScoreThresh!=null&&o[i]<n.minScoreThresh||(a=i*n.numCoords,l=l9(s[a+0],s[a+1],s[a+2],s[a+3],o[i],n.flipVertically,i),(u=l.locationData.relativeBoundingBox).width<0||u.height<0))){if(n.numKeypoints>0)for((f=l.locationData).relativeKeypoints=[],p=n.numKeypoints*n.numValuesPerKeypoint,d=0;d<p;d+=n.numValuesPerKeypoint)h=a+n.keypointCoordOffset+d,v={x:s[h+0],y:n.flipVertically?1-s[h+1]:s[h+1]},f.relativeKeypoints.push(v);r.push(l)}return[2,r]}})})}function l9(e,t,n,r,s,o,i){return{score:[s],ind:i,locationData:{relativeBoundingBox:{xMin:t,yMin:o?1-n:e,xMax:r,yMax:o?1-e:n,width:r-t,height:n-e}}}}var u9={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:128,inputSizeWidth:128,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},c9={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:0,featureMapHeight:[],featureMapWidth:[],numLayers:1,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[4],aspectRatios:[1],fixedAnchorSize:!0},ju={runtime:"tfjs",modelType:"short",maxFaces:1,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"},f9={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:896,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:128,yScale:128,hScale:128,wScale:128,minScoreThresh:.5},p9={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2304,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.6},d9=.3,h9={outputTensorSize:{width:128,height:128},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},m9={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},Br,g9=function(){function e(t,n,r){this.detectorModel=n,this.maxFaces=r,t==="full"?(this.imageToTensorConfig=m9,this.tensorsToDetectionConfig=p9,this.anchors=xm(c9)):(this.imageToTensorConfig=h9,this.tensorsToDetectionConfig=f9,this.anchors=xm(u9));var s=$t(this.anchors.map(function(l){return l.width})),o=$t(this.anchors.map(function(l){return l.height})),i=$t(this.anchors.map(function(l){return l.xCenter})),a=$t(this.anchors.map(function(l){return l.yCenter}));this.anchorTensor={x:i,y:a,w:s,h:o}}return e.prototype.dispose=function(){this.detectorModel.dispose(),to([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},e.prototype.reset=function(){},e.prototype.detectFaces=function(t,n){return n===void 0&&(n=!1),dr(this,void 0,void 0,function(){var r,s,o,i,a,l,u,f,p,d,h;return hr(this,function(v){switch(v.label){case 0:return t==null?(this.reset(),[2,[]]):(r=mt(function(){var w=Qe(N0(t),"float32");return n&&(w=ct(Xl.flipLeftRight(Yn(w,0)),[0])),w}),s=r9(r,this.imageToTensorConfig),o=s.imageTensor,i=s.transformationMatrix,a=this.detectorModel.execute(o,"Identity:0"),l=s9(a),u=l.boxes,[4,i9([f=l.logits,u],this.anchorTensor,this.tensorsToDetectionConfig)]);case 1:return(p=v.sent()).length===0?(to([r,o,a,f,u]),[2,p]):[4,o9(p,this.maxFaces,d9)];case 2:return d=v.sent(),h=function(w,k){w===void 0&&(w=[]);var S,T=(S=k,[].concat.apply([],S));return w.forEach(function(N){var D=N.locationData;D.relativeKeypoints.forEach(function(U){var Q=$m(T,[U.x,U.y]),le=Q[0],fe=Q[1];U.x=le,U.y=fe});var C=D.relativeBoundingBox,P=Number.MAX_VALUE,F=Number.MAX_VALUE,z=Number.MIN_VALUE,K=Number.MIN_VALUE;[[C.xMin,C.yMin],[C.xMin+C.width,C.yMin],[C.xMin+C.width,C.yMin+C.height],[C.xMin,C.yMin+C.height]].forEach(function(U){var Q=$m(T,U),le=Q[0],fe=Q[1];P=Math.min(P,le),z=Math.max(z,le),F=Math.min(F,fe),K=Math.max(K,fe)}),D.relativeBoundingBox={xMin:P,xMax:z,yMin:F,yMax:K,width:z-P,height:K-F}}),w}(d,i),to([r,o,a,f,u]),[2,h]}})})},e.prototype.estimateFaces=function(t,n){return dr(this,void 0,void 0,function(){var r,s;return hr(this,function(o){return r=T0(t),s=!!n&&n.flipHorizontal,[2,this.detectFaces(t,s).then(function(i){return i.map(function(a){for(var l=a.locationData.relativeKeypoints.map(function(v,w){return Vr(Vr({},v),{x:v.x*r.width,y:v.y*r.height,name:b0[w]})}),u=a.locationData.relativeBoundingBox,f=0,p=["width","xMax","xMin"];f<p.length;f++)u[p[f]]*=r.width;for(var d=0,h=["height","yMax","yMin"];d<h.length;d++)u[h[d]]*=r.height;return{keypoints:l,box:u}})})]})})},e}();function y9(e){return dr(this,void 0,void 0,function(){var t,n,r;return hr(this,function(s){switch(s.label){case 0:return t=function(o){if(o==null)return Vr({},ju);var i=Vr({},o);return i.modelType==null&&(i.modelType=ju.modelType),i.maxFaces==null&&(i.maxFaces=ju.maxFaces),i.detectorModelUrl==null&&(i.modelType==="full"?i.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/full/1":i.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"),i}(e),n=typeof t.detectorModelUrl=="string"&&t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,[4,Q7(t.detectorModelUrl,{fromTFHub:n})];case 1:return r=s.sent(),[2,new g9(t.modelType,r,t.maxFaces)]}})})}function Mu(e,t){return dr(this,void 0,void 0,function(){var n,r;return hr(this,function(s){if(e===Br.MediaPipeFaceDetector){if(r=void 0,(n=t)!=null){if(n.runtime==="tfjs")return[2,y9(n)];if(n.runtime==="mediapipe")return[2,e9(n)];r=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r)}throw new Error(e+" is not a supported model name.")})})}(function(e){e.MediaPipeFaceDetector="MediaPipeFaceDetector"})(Br||(Br={}));const v9=6,w9="#32EEDB",S9="#FF2C35",E9={"640x480":{width:640,height:480},"640x360":{width:640,height:360},"360x270":{width:360,height:270}},b9={WEBGL_VERSION:[1,2],WASM_HAS_SIMD_SUPPORT:[!0,!1],WASM_HAS_MULTITHREAD_SUPPORT:[!0,!1],WEBGL_CPU_FORWARD:[!0,!1],WEBGL_PACK:[!0,!1],WEBGL_FORCE_F16_TEXTURES:[!0,!1],WEBGL_RENDER_FLOAT32_CAPABLE:[!0,!1],WEBGL_FLUSH_THRESHOLD:[-1,0,.25,.5,.75,1,1.25,1.5,1.75,2],CHECK_COMPUTATION_FOR_ERRORS:[!0,!1]},T9={[Br.MediaPipeFaceDetector]:["mediapipe-gpu","tfjs-webgl","tfjs-webgpu"]},Mt={camera:{targetFPS:60,sizeOption:"640x480"},backend:T9[Br.MediaPipeFaceDetector][0],modelConfig:{boundingBox:!0,keypoints:!0}},N9=async()=>{const e=Mt.backend.split("-")[0];return e==="mediapipe"?await Mu(Br.MediaPipeFaceDetector,{runtime:e,solutionPath:`https://cdn.jsdelivr.net/npm/@mediapipe/face_detection@${ey.VERSION}`,...Mt.modelConfig}):e==="tfjs"?await Mu(Br.MediaPipeFaceDetector,{runtime:e,...Mt.modelConfig}):await Mu(Br.MediaPipeFaceDetector,{runtime:"tfjs",...Mt.modelConfig})},k9=async e=>{const t=IT();if(!(e in t.registryFactory))if(e==="webgpu"){alert("webgpu backend is not registered. Your browser may not support WebGPU yet. To test this backend, please use a supported browser, e.g. Chrome canary with --enable-unsafe-webgpu flag"),Mt.backend=Mt.lastTFJSBackend!=null?Mt.lastTFJSBackend:"tfjs-webgl";return}else throw new Error(`${e} backend is not registered.`);if(e in t.registry){const n=AT(e);OT(e),PT(e,n)}await CT(e),Mt.lastTFJSBackend=`tfjs-${e}`},x9=async(e,t)=>{if(e==null)return;if(typeof e!="object")throw new Error(`An object is expected, while a(n) ${typeof e} is found.`);for(const s in e)if(!(s in b9))throw new Error(`${s} is not a tunable or valid environment flag.`);we().setFlags(e);const[n,r]=t.split("-");n==="tfjs"&&await k9(r)},_9=(e,t,n)=>{const r=new Path2D;r.moveTo(t[0][0],t[0][1]);for(let s=1;s<t.length;s++){const o=t[s];r.lineTo(o[0],o[1])}n&&r.closePath(),e.stroke(r)},$9=(e,t,n,r)=>{t.forEach(s=>{const o=s.keypoints.map(i=>[i.x,i.y]);if(n){e.strokeStyle=S9,e.lineWidth=1;const i=s.box;_9(e,[[i.xMin,i.yMin],[i.xMax,i.yMin],[i.xMax,i.yMax],[i.xMin,i.yMax]],!0)}if(r){e.fillStyle=w9;for(let i=0;i<v9;i++){const a=o[i][0],l=o[i][1];e.beginPath(),e.arc(a,l,3,0,2*Math.PI),e.fill()}}})},xe={numInferences:0,inferenceTimeSum:0,lastPanelUpdate:0},D9=()=>{xe.startInferenceTime=Date.now()},I9=()=>{const e=Date.now();xe.inferenceTimeSum+=e-(xe.startInferenceTime??0),xe.numInferences++;const t=1e3;e-xe.lastPanelUpdate>=t&&(xe.inferenceTimeSum=0,xe.numInferences=0,xe.lastPanelUpdate=e)},C9=()=>{xe.ctx==null||xe.video==null||xe.ctx.drawImage(xe.video,0,0,xe.video.videoWidth,xe.video.videoHeight)},O9=async()=>{if(xe.video==null)return;xe.video.readyState<2&&await new Promise(t=>{xe.video!=null&&(xe.video.onloadeddata=()=>{t(xe.video)})});let e=null;if(xe.detector!=null){D9();try{e=await xe.detector.estimateFaces(xe.video,{flipHorizontal:!1})}catch(t){xe.detector.dispose(),xe.detector=void 0,alert(t)}I9()}C9(),xe.ctx!=null&&e!=null&&e.length>0&&!(Mt.isModelChanged??!1)&&$9(xe.ctx,e,Mt.modelConfig.boundingBox,Mt.modelConfig.keypoints)},k0=async()=>{await O9(),xe.rafId=requestAnimationFrame(k0)},A9=async(e,t)=>{await x9(Mt.flags,Mt.backend),xe.ctx=t,xe.video=e,xe.detector=await N9(),await k0()},P9=({videoEl:e,ctxEvt:t})=>{const n=q.useRef(null),r=s=>{s.height=e.videoHeight,s.width=e.videoWidth;const o=s.getContext("2d");o!=null&&(o.translate(e.videoWidth,0),o.scale(-1,1),t(o))};return q.useEffect(()=>{n.current!=null&&r(n.current)},[n.current]),We("canvas",{ref:n})},R9=({stream:e,videoEvt:t})=>{const n=q.useRef(null);return q.useEffect(()=>{const r=n.current;r!=null&&(r.srcObject=e,r.onloadedmetadata=()=>{r.play().catch(s=>{console.error(s)}),t(r)})},[n.current]),We("video",{ref:n})},F9={audio:!1,video:{facingMode:"user",frameRate:{ideal:60},...E9[Mt.camera.sizeOption]}},L9=()=>{const[e,t]=q.useState(void 0),[n,r]=q.useState(null),[s,o]=q.useState(null),i=()=>{navigator.mediaDevices.getUserMedia(F9).then(a=>{t(a)}).catch(a=>{console.error(a)})};return q.useEffect(()=>{i()},[]),q.useEffect(()=>{s!=null&&n!=null&&A9(n,s).catch(a=>{console.error(a)})},[s,n]),Pa("div",{className:"face-detection",children:[We("div",{id:"stats"}),We("div",{className:"main",children:Pa("div",{className:"canvas-wrapper",children:[n!=null&&We(P9,{videoEl:n,ctxEvt:o}),e!=null&&We(R9,{stream:e,videoEvt:r})]})}),We("div",{children:We(Zg,{})})]})},B9=J4([{path:al.Main,element:We(aw,{})},{path:al.FaceDetection,element:We(L9,{})}]);Vu.createRoot(document.getElementById("root")).render(We(Fm.StrictMode,{children:We(H4,{router:B9})}));
